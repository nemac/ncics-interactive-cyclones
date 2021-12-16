import * as config from './config'

export const getLayerStyle = (feature, stormTypes)  => {
  let c;
  let prop = feature.properties.USA_WIND
  if (stormTypes['named_storm'].active && prop >= 34) c = stormTypes['named_storm']['fill']
  if (stormTypes['hurricane'].active && prop >= 64) c = stormTypes['hurricane']['fill']
  if (stormTypes['major_hurricane'].active && prop >= 96) c = stormTypes['major_hurricane']['fill']
  return { color: c, opacity: 1, weight: 5 }
}

export const whereFactory = (year, stormWhere) => `YEAR=${year} AND ${stormWhere}`

const getLegendBarId = key => `${key.replace('_', '-')}-legend-bar`
const getLegendMetricId = key => `${key.replace('_', '-')}-selected-year-metric`

const setLegendMetric = (key, val) => {
  const id = getLegendMetricId(key)
  const el = document.getElementById(id)
  el.innerHTML = val
}

export const addMapControlEventListeners = el => {
  L.DomEvent.disableClickPropagation(el)
}

export const setLegendMetrics = (ns_val, h_val, mh_val) => {
  setLegendMetric('named_storm', ns_val)
  setLegendMetric('hurricane', h_val)
  setLegendMetric('major_hurricane', mh_val)
}

export const hideLegendBar = key => {
  const id = `#${getLegendBarId(key)}`
  const el = d3.select(id)
  el.node().dataset.height = el.attr('height')
  el.transition(500)
    .attr('height', 0)
}

export const showLegendBar = key => {
  const id = `#${getLegendBarId(key)}`
  const el = d3.select(id)
  el.transition(500)
    .attr('height', el.node().dataset.height)
}

export const getMaxYear = (data) => {
  let max = 0
  for (let k of Object.keys(data)) {
    k = parseInt(k)
    if (k > max) { max = k }
  }
  return max
}

export const getMinYear = (data) => {
  let min = 10000
  for (let k of Object.keys(data)) {
    k = parseInt(k)
    if (k < min) { min = k }
  }
  return min
}

export const optionFactory = function (value, innerHTML) {
    var opt = document.createElement('option');
    opt.value = String(value);
    opt.innerHTML = String(innerHTML);
    return opt;
}


const removeChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

export const setupYearSelect = (label, yearSelected, minYear, maxYear) => {
  const yearSelect = document.getElementById(`year-${label}-select`)
  removeChildNodes(yearSelect)
  let selectedIndex;
  let index = 0;
  for (var y = minYear; y<=maxYear; y++){
      if (parseInt(yearSelected) == y) { selectedIndex = index }
      yearSelect.appendChild(optionFactory(String(y), String(y)))
      index++;
  }
  yearSelect.options.selectedIndex=selectedIndex
  return yearSelect
}


