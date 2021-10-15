import * as config from './config'
import { data } from './data'

export const optionFactory = function (value, innerHTML) {
    var opt = document.createElement('option');
    opt.value = String(value);
    opt.innerHTML = String(innerHTML);
    return opt;
}

export const yearSelectFactory = (label, yearSelected) => {
  const yearSelect = document.getElementById(`year-${label}-select`)
  let selectedIndex;
  let index = 0;
  for (var y = config.MIN_YEAR; y<=config.MAX_YEAR; y++){
      if (parseInt(yearSelected) == y) { selectedIndex = index }
      yearSelect.appendChild(optionFactory(String(y), String(y)))
      index++;
  }
  yearSelect.options.selectedIndex=selectedIndex
  return yearSelect
}


