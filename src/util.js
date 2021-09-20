import * as config from './config'

export const option_factory = function (value, innerHTML) {
    var opt = document.createElement('option');
    opt.value = String(value);
    opt.innerHTML = String(innerHTML);
    return opt;
}

export const year_select_factory = (label, year_selected) => {
  const year_select = document.getElementById(`year-${label}-select`)
  let selected_index;
  let index = 0;
  for (var y = config.MIN_YEAR; y<=config.MAX_YEAR; y++){
      if (parseInt(year_selected) == y) { selected_index = index }
      year_select.appendChild(option_factory(String(y), String(y)))
      index++;
  }
  year_select.options.selectedIndex=selected_index
  return year_select
}

export const parseYears = (data) => {
  const keys = Object.keys(data)
  const years = keys.map(k => parseInt(k))
  return years
}

export const parse = (data, key) => {
  const years = parseYears(data)
  const trace = []
  years.forEach((year) => {
    trace.push({ 'year': year, 'value': data[String(year)][key] })
  })
  return trace
}

export const parseTrace = (key, data, years) => {
  const trace = {
    x: years,
    y: [],
    mode: 'none',
    name: config.legend_labels[key],
    stackgroup: 'one',
    fillcolor: config.fill_colors[key]
  }
  years.forEach((year) => {
    trace['y'].push(data[year][key])
  })
  return trace
}

