
import * as util from './util'

export class Graph {

  constructor(config, data) {
    this.MIN_YEAR = util.getMinYear(data)
    this.MAX_YEAR = util.getMaxYear(data)
    this.TICK_LABEL_THRESHOLD = config.TICK_LABEL_THRESHOLD
    this.TICK_LABEL_STEP = config.TICK_LABEL_STEP
    this.TOOLTIP_WIDTH = config.TOOLTIP_WIDTH
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

    // SVG elements are painted in the order they are inserted,
    // so we add the axes and tooltips last so they show up over the bars
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

    // Draw the tooltips
    Object.keys(config.stormTypes).forEach(key => {
      this.initTooltips(key)
    })

    // Show the bars for initially activated storm types
    const initStormTypes = Object.keys(this.stormTypes).filter(key => this.stormTypes[key].active)
    initStormTypes.forEach(key => this.showBars(key))

  }

  setYAxisTitle() {
    this.plot.append('text')
      .attr('id', 'y-axis-title')
      .attr('transform', `rotate(-90) translate(-${this.height/5}, 30)`)
      .attr('text-anchor', 'end')
      .html(this.yAxisTitle)
  }

  initPlot() {
    return d3.select('#graph')
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
      .attr('id', 'x-axis')
      .attr('transform', `translate(0, ${this.height - this.margin.bottom})`)
  }

  removeXAxis() {
    d3.select('#x-axis').remove()
  }

  initXAxis() {
    this.xAxis.call(d3.axisBottom(this.x).tickSizeOuter(0))
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
    this.removeTooltips()
    for (let key of Object.keys(this.stormTypes)) {
      this.removeBars(key)
      this.initBars(key)
    }
    for (let key of this.getActiveStormTypes()) {
      this.showBars(key)
    }
    this.removeXAxis()
    this.xAxis = this.appendXAxis()
    this.initXAxis()
    this.yAxis = this.initYAxis()
    // Keep separate loop for correct drawing order
    for (let key of Object.keys(this.stormTypes)) {
      this.initTooltips(key)
    }
  }

  getActiveStormTypes() {
    return Object.keys(this.stormTypes).filter(key => {
      return this.stormTypes[key].active
    })
  }

  setLayer(layer) { this.layer = layer }

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
        .on('mouseenter', d => {
          this.toggleTooltip(key, d.year, true)
        })
        .on('click', d => {
          const index = d.year - this.yearStart
          const ns_d = this.getActiveData('named_storm')[index]
          const h_d = this.getActiveData('hurricane')[index]
          const mh_d = this.getActiveData('major_hurricane')[index]
          const mapCallToActionControl = document.getElementById('map-control-call-to-action')
          mapCallToActionControl.classList.add('hidden')
          const trackInfoControl = document.getElementById('map-control-track-info')
          const selectedYearSpan = document.getElementById('selected-year')
          selectedYearSpan.innerHTML = d.year
          trackInfoControl.classList.remove('hidden')
          const where = util.whereFactory(d.year, this.stormTypes['named_storm']['where'])
          this.layer.setWhere(where)
          this.layer.setStyle(feature => util.getLayerStyle(feature, this.stormTypes))
          this.yearActive = d.year
        })
        .on('mouseout', d => {
          //this.layer.setWhere('1=0')
          this.toggleTooltip(key, d.year, false)
        })

    this.stormTypes[key].bars = bars
  }

  calcTooltipX(d) {
    const normal = this.x(d.year) + this.x.bandwidth()
    if (normal + this.TOOLTIP_WIDTH < this.x.range()[1]) return normal
    return normal - this.TOOLTIP_WIDTH - this.x.bandwidth()
  }

  calcTooltipY(d) {
    const normal = this.y(d.value)
    const cutoff = normal - this.TOOLTIP_HEIGHT
    if (cutoff < 0) {
      return normal + this.TOOLTIP_HEIGHT/3
    }
    return normal
  }

  removeTooltips() {
    d3.selectAll('.data-tooltips').remove()
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
            .attr('x', d => this.calcTooltipX(d))
            .attr('y', d => this.calcTooltipY(d) - this.TOOLTIP_HEIGHT)
            .attr('style', 'display: none;')
            .attr('data-year', d => d.year)
            .attr('data-value', d => d.value)
            .attr('fill', 'white')
            .attr('stroke', this.stormTypes[key].fill)
            .attr('stroke-width', '1.5')

    const tooltip_text = this.plot.select(`#data-tooltips--${key}`)
      .selectAll('text')
        .data(dataset)
          .enter(tooltips)
            .append('text')
              .attr('id', d => `data-tooltip--${key}--${d.year}--text`)
              .attr('style', 'display: none')
              .attr('text-anchor', 'start')
              .attr('x', d => this.calcTooltipX(d))
              .attr('y', d => this.calcTooltipY(d))

    const text_margin = { left: 8, top: 8 }

    tooltip_text.append('tspan')
      .attr('x', d => this.calcTooltipX(d) + text_margin.left)
      .attr('y', d => this.calcTooltipY(d) - this.TOOLTIP_HEIGHT/2 - text_margin.top)
      .html(d => `Year: ${d.year}`)

    tooltip_text.append('tspan')
      .attr('x', d => this.calcTooltipX(d) + text_margin.left)
      .attr('y', d => this.calcTooltipY(d) - this.TOOLTIP_HEIGHT/12 - text_margin.top)
      .html(d => `${this.stormTypes[key].tooltip}: ${d.value}`)

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

