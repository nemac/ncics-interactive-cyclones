
import * as d3 from 'd3';

export class Graph {

  constructor(config, data) {
    this.title = config.title
    this.data = data
    this.years = Object.keys(data).map(d => parseInt(d))
    this.MIN_YEAR = this.years[0]
    this.MAX_YEAR = this.years[this.years.length-1]
    this.stormTypes = config.stormTypes
    this.margin = config.margin
    this.width = config.width
    this.height = config.height
    this.state = config.initState

    this.plot = this.initPlot()
    this.datasets = this.initDatasets(Object.keys(config.stormTypes))
    this.x = this.initXScale()
    this.y = this.initYScale()
    this.yAxis = this.initYAxis()
    this.xAxis = this.initXAxis()
    this.bars = this.initBars()
    this.showBars(config.initState.activeStormTypes)
  }

  initXScale() {
    const domain = [...Array(this.state.yearEnd-this.state.yearStart+1).keys()].map(d => d+this.state.yearStart)
    return d3.scaleBand()
      .domain(domain)
      .range([this.margin.left, this.width - this.margin.right])
      .padding(0.1)
  }

  initYScale() {
    return d3.scaleLinear()
      .domain([0, this.calcMax()])
      .range([this.height - this.margin.bottom, this.margin.top])
  }

  initXAxis() {
    return this.plot.append('g')  
      .attr('transform', `translate(0, ${this.height - this.margin.bottom})`)
      .call(d3.axisBottom(this.x).tickFormat(d3.format("")))
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
      if (yr < this.state.yearStart || yr > this.state.yearEnd) continue
      years.push(yr)
    }
    return years
  }

  initDatasets(keys) {
    for (let key of keys) {
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

  setState(newState) {
    let stateChanged = false;
    for (let key of newState) {
      if (key in this.state) {
        this.state[key] = newState[key]
        stateChanged = true
      }
    }
    return stateChanged
  }

  update() {
  }

  getActiveData(key) {
    return this.stormTypes[key].dataset.filter(d => {
      return d.year >= this.state.yearStart && d.year <= this.state.yearEnd
    })
  }

  initBars() {
    for (let key of Object.keys(this.stormTypes)) {
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
  }

  showBars(keys) {
    for (let key of keys) {
      this.stormTypes[key].bars.transition(1000)
        .attr('y', d => this.y(d.value))
        .attr('height', d => this.y(0) - this.y(d.value))
    }
  }

  removeBars(keys) {
    for (let key of keys) {
      this.stormTypes[key].bars.transition(1000).attr('height', 0).remove()
    }
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

