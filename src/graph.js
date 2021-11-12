
import * as util from './util'

export class Graph {

  constructor(config, data) {
    this.MIN_YEAR = util.getMinYear(data)
    this.MAX_YEAR = util.getMaxYear(data)
    this.TICK_LABEL_THRESHOLD = config.TICK_LABEL_THRESHOLD
    this.TICK_LABEL_STEP = config.TICK_LABEL_STEP
    this.TOOLTIP_HEIGHT = config.TOOLTIP_HEIGHT

    this.data = data
    this.title = config.title
    this.yAxisTitle = config.yAxisTitle
    this.years = Object.keys(data).map(d => parseInt(d))
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

    // Insert SVG elements

    // SVG elements inserted into the DOM first are painted first
    // So we add the axes and tooltips last so they show up over the bars
    // See https://www.w3.org/TR/SVG11/render.html#RenderingOrder

    // Initialize data bars with zero height
    Object.keys(config.stormTypes).forEach(key => {
      this.initBars(key)
    })

    // Draw the axes
    this.xAxis = this.appendXAxis()
    this.initXAxis()
    this.setYAxisTitle()
    this.yAxis = this.initYAxis()

    // Show the bars for initially activated storm types
    const initStormTypes = Object.keys(this.stormTypes).filter(key => this.stormTypes[key].active)
    initStormTypes.forEach(key => this.showBars(key))

    // Draw the tooltips
    Object.keys(config.stormTypes).forEach(key => {
      this.initTooltips(key)
    })

  }

  setYAxisTitle() {
    this.plot.append('text')
      .attr('id', 'y-axis-title')
      .attr('transform', `rotate(-90) translate(-${this.height/5}, 30)`)
      .attr('text-anchor', 'end')
      .html(this.yAxisTitle)
  }

  initPlot() {
    return d3.select('#plot').append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
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
        .attr('dx', '-.5em')
        .attr('dy', '.15em')
        .attr('transform', 'rotate(-65)')
        .html((d, i, nodes) => {
          if (nodes.length > this.TICK_LABEL_THRESHOLD) {
            if (d % this.TICK_LABEL_STEP == 0) return d
            return ''
          }
          return d
        })
  }

  initYAxis() {
    return this.plot.append('g')
      .attr('transform', `translate(${this.margin.left}, 0)`)
      .call(d3.axisLeft(this.y))
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
        .on('mouseenter', d => this.toggleTooltip(key, d.year, true))
        .on('mouseout', d => this.toggleTooltip(key, d.year, false))

    this.stormTypes[key].bars = bars
  }

  toggleTooltip(key, year, showTooltip) {
    d3.select(`#data-tooltip--${key}--${year}--rect`)
      .attr('style', showTooltip ? '' : 'display: none')
      .raise()
    d3.select(`#data-tooltip--${key}--${year}--text`)
      .attr('style', showTooltip ? '' : 'display: none')
      .raise()
  }

  initTooltips(key) {
    const dataset = this.getActiveData(key)
    const tooltips = this.plot.append('g')
      .attr('class', 'data-tooltips')
      .attr('id', `data-tooltips--${key}`)
      .selectAll('rect')
        .data(dataset)
        .enter()
          .append('rect')
            .attr('id', d => `data-tooltip--${key}--${d.year}--rect`)
            .attr('class', 'tooltip')
            .attr('x', d => this.x(d.year) + this.x.bandwidth())
            .attr('y', d => this.y(d.value) - this.TOOLTIP_HEIGHT)
            .attr('style', 'display: none;')
            .attr('data-year', d => d.year)
            .attr('data-value', d => d.value)
            .attr('fill', 'white')
            .attr('stroke', 'blue')
            .attr('stroke-width', '2')

    const tooltip_text = this.plot.select(`#data-tooltips--${key}`)
      .selectAll('text')
        .data(dataset)
          .enter(tooltips)
            .append('text')
              .attr('id', d => `data-tooltip--${key}--${d.year}--text`)
              .attr('style', 'display: none')
              .attr('text-anchor', 'start')
              .attr('x', d => this.x(d.year) + this.x.bandwidth())
              .attr('y', d => this.y(d.value))

    const text_margin = {
      left: 5,
      top: 5
    }

    tooltip_text.append('tspan')
      .attr('x', d => this.x(d.year) + this.x.bandwidth() + text_margin.left)
      .attr('y', d => this.y(d.value) - this.TOOLTIP_HEIGHT/2 - text_margin.top)
      .html(d => `Year: ${d.year}`)

    tooltip_text.append('tspan')
      .attr('x', d => this.x(d.year) + this.x.bandwidth() + text_margin.left)
      .attr('y', d => this.y(d.value) - text_margin.top)
      .html(d => `Value: ${d.value}`)

    this.stormTypes[key].tooltips = tooltips
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

