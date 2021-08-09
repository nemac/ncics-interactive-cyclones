import './index.css'
import { data } from  './data'
import { title, fill_colors, labels } from './config'

const MIN_YEAR = 1950;
const MAX_YEAR = 2020;

const parseYears = (data) => {
  const keys = Object.keys(data)
  const years = keys.map(k => parseInt(k))
  return years
}

const parseTrace = (key, data, years) => {
  const trace = {
    x: years,
    y: [],
    mode: 'none',
    name: labels[key],
    stackgroup: 'one',
    fillcolor: fill_colors[key]
  }
  years.forEach((year) => {
    trace['y'].push(data[year][key])
  })
  return trace
}

const years = parseYears(data)
const trace_count_96 = parseTrace('count_96', data, years)
const trace_count_64 = parseTrace('count_64', data, years)
const trace_count_35 = parseTrace('count_35', data, years)

const layout = {
  title: title
}

const all_traces = [trace_count_96, trace_count_64, trace_count_35]

Plotly.newPlot('plot', all_traces, layout);


/* Setup <select> elements */

let storm_types = {
    'count_35': {
      'where': 'USA_WIND<64 AND USA_WIND>=34',
      'label': 'Named Storms'
    },
    'count_64': {
      'where': 'USA_WIND>=64 AND USA_WIND<96',
      'label': 'Hurricanes'
    },
    'count_96': {
      'where': 'USA_WIND>=64 AND USA_WIND<96',
      'label': 'Major Hurricanes'
    }
}
const option_factory = function (value, innerHTML) {
    var opt = document.createElement('option');
    opt.value = String(value);
    opt.innerHTML = String(innerHTML);
    return opt;
}

const storm_select = document.getElementById('storm-type-select')
for (let key of Object.keys(storm_types)) {
    let value = storm_types[key]['where']
    let label = storm_types[key]['label']
    storm_select.appendChild(option_factory(value, label));
}

const year_select = document.getElementById('year-select')
for (var i = MIN_YEAR; i<=MAX_YEAR; i++){
    year_select.appendChild(option_factory('YEAR='+String(i), i))
}

/* Map setup */

let map = L.map('map').setView([37.837, -100.479], 5);

let basemap = L.esri.basemapLayer('Streets').addTo(map);

let storm_where = storm_types['count_35']['where']
let year_where = 'YEAR=1950'

let where_factory = (w1, w2) => w1 + ' AND ' + w2

// dummy feature for logging
let f;

let layer = L.esri.featureLayer({
  url: 'https://services2.arcgis.com/FiaPA4ga0iQKduv3/ArcGIS/rest/services/IBTrACS_ALL_list_v04r00_lines_1/FeatureServer/0',
  style: function (feature) {
    if (!f) { f = feature;  console.log(feature) }
    var c;
    let prop = feature.properties.USA_WIND
    if (prop < 64 && prop >= 34) { c = 'red' }
    if (prop >= 64 && prop < 96) { c = 'green' }
    if (prop >= 96) { c = 'blue' };
    if (!c) { c = 'white' }
    return { color: c, opacity: .9, weight: 5 };
  },
  where: where_factory(storm_where, year_where)
}).addTo(map);

year_select.addEventListener('change', function () {
  year_where = year_select.value
  let new_where = where_factory(storm_where, year_where)
  console.log(new_where)
  layer.setWhere(new_where);
});

storm_select.addEventListener('change', function () {
  storm_where = storm_select.value
  let new_where = where_factory(storm_where, year_where)
  console.log(new_where)
  layer.setWhere(new_where)
});
