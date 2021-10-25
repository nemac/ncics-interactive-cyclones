
import * as util from './util'
import * as d3 from 'd3'

export class Graph {

  constructor(config, data) {
    this.title = config.title
    this.data = data
    this.years = Object.keys(data).map(d => parseInt(d))
    this.MIN_YEAR = util.getMinYear(this.data)
    this.MAX_YEAR = util.getMaxYear(this.data)
    this.TICK_LABEL_THRESHOLD = config.TICK_LABEL_THRESHOLD
    this.TICK_LABEL_STEP = config.TICK_LABEL_STEP
    this.yearStart = config.yearStart
    this.yearEnd = config.yearEnd
    this.stormTypes = config.stormTypes
    this.margin = config.margin
    this.width = config.width
    this.height = config.height

    this.plot = this.initPlot()
    this.datasets = this.initDatasets(Object.keys(config.stormTypes))

    this.x = this.initXScale()
    this.y = this.initYScale()
    this.yAxis = this.initYAxis()
    this.xAxis = this.appendXAxis()
    this.initXAxis()

    Object.keys(config.stormTypes).forEach(key => this.initBars(key))
    const initStormTypes = Object.keys(this.stormTypes).filter(key => this.stormTypes[key].active)
    initStormTypes.forEach(key => this.showBars(key))
  }

  getXDomain() {
    return [...Array(this.yearEnd-this.yearStart+1).keys()].map(d => d+this.yearStart)
  }

  initXScale() {
    return d3.scaleBand()
      .domain(this.getXDomain())
      .range([this.margin.left, this.width - this.margin.right])
  }

  initYScale() {
    return d3.scaleLinear()
      .domain([0, this.calcMax()])
      .range([this.height - this.margin.bottom, this.margin.top])
  }

  appendXAxis() {
    return this.plot.append('g')  
      .attr('transform', `translate(0, ${this.height - this.margin.bottom})`)
  }

  initXAxis() {
    this.xAxis.call(d3.axisBottom(this.x))
      .selectAll('text')
        .style('text-anchor', 'end')
        .attr('dx', '-.8em')
        .attr('dy', '.15em')
        .attr('transform', 'rotate(-65)')
        .html((d, i, nodes) => {
          if (nodes.length > this.TICK_LABEL_THRESHOLD) {
            console.log(d)
            console.log(this.TICK_LABEL_STEP)
            if (d % this.TICK_LABEL_STEP == 0) {
              return d
            } else {
              return ''
            }
          } else {
            return d
          }
        })
  }

  initYAxis() {
    return this.plot.append('g')
      .attr('transform', `translate(${this.margin.left}, 0)`)
      .call(d3.axisLeft(this.y))
  }

  initPlot() {
    return d3.select('#plot').append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
  }

  calcActiveYears() {
    const keys = Object.keys(this.data)
    const years = []
    for (let d of keys) {
      const yr = parseInt(d)
      if (yr < this.yearStart || yr > this.yearEnd) continue
      years.push(yr)
    }
    return years
  }

  initDatasets() {
    for (let key of Object.keys(this.stormTypes)) {
      const dataset = []
      for (let year of this.years) {
        dataset.push({ 'year': year, 'value': this.data[String(year)][key] })
      }
      this.stormTypes[key].dataset = dataset
    }
  }

  calcMax() {
    let max = 0
    for (let key of Object.keys(this.stormTypes)) {
      for (let d of this.stormTypes[key].dataset) {
        max = d.value > max ? d.value : max
      }
    }
    // Round up by 10
    return parseInt(max / 10) * 10 + 10
  }

  getActiveData(key) {
    return this.stormTypes[key].dataset.filter(d => {
      return d.year >= this.yearStart && d.year <= this.yearEnd
    })
  }

  updateYearStart(newYearStart) {
    this.yearStart = newYearStart
    this.update()
  }

  updateYearEnd(newYearEnd) {
    this.yearEnd = newYearEnd
    this.update()
  }

  update() {
    this.x.domain(this.getXDomain())
    this.initXAxis(true)
    for (let key of Object.keys(this.stormTypes)) {
      this.removeBars(key)
      this.initBars(key)
    }
    for (let key of this.getActiveStormTypes()) {
      this.showBars(key)
    }
  }

  getActiveStormTypes() {
    return Object.keys(this.stormTypes).filter(key => {
      return this.stormTypes[key].active
    })
  }

  initBars(key) {
    const dataset = this.getActiveData(key)
    const bars = this.plot.append('g')
      .attr('class', 'data-bars')
      .attr('id', `data-bars--${key}`)
      .selectAll('rect')
        .data(dataset)
        .enter()
          .append('rect')
          .attr('class', 'bar')
          .attr('data-year', d => d.year)
          .attr('data-value', d => d.value)

    bars.attr('height', 0)
        .attr('width', this.x.bandwidth())
        .attr('x', d => this.x(d.year))
        .attr('y', this.y(0))
        .attr('fill', this.stormTypes[key].fill)

    this.stormTypes[key].bars = bars
  }

  showBars(key) {
    this.stormTypes[key].bars.transition(1000)
      .attr('y', d => this.y(d.value))
      .attr('height', d => this.y(0) - this.y(d.value))
  }

  hideBars(key) {
    this.stormTypes[key].bars.transition(1000)
      .attr('y', d => this.y(0))
      .attr('height', 0)
  }

  removeBars(key) {
    this.hideBars(key)
    this.stormTypes[key].bars.remove()
    this.stormTypes[key].bars = []
  }

}

/*
const updatePlot = (key) => {
  state.datasets.forEach(t => !t.bars || hideBars(t.bars))
  state = util.setState(state, key)
  datasets = stormType ? getTraces(stormType, state) : state.datasets
  state.datasets = datasets
  state.max = calcMax(datasets)
  state.years = parseYears(data, state.yearStart, state.yearEnd)
  y.domain([0, state.max])
  x.domain([state.yearStart, state.yearEnd])
  xAxis.transition(1000)
    .call(d3.axisBottom(x).tickFormat(d3.format("")))
  yAxis.transition(1000).call(d3.axisLeft(y))
  for (let t of state.datasets) {
    t.bars = rectify(t, state.years)
    showBars(t.bars)
  }
}
*/

