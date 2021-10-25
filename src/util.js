import * as config from './config'

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


