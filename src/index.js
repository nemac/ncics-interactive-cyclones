
import './index.css'
import * as config from './config'
import * as util from './util'
import { data } from  './data'


/* Plotly Setup */

const years = util.parseYears(data)
const trace_count_96 = util.parseTrace('count_96', data, years)
const trace_count_64 = util.parseTrace('count_64', data, years)
const trace_count_35 = util.parseTrace('count_35', data, years)

const layout = {
  title: config.title
}

const all_traces = [trace_count_96, trace_count_64, trace_count_35]

Plotly.newPlot('plot', all_traces, layout);


/* Selectors */

// State variables
let storm_where = config.storm_types['count_35']['where']
let year_start = '2010'
let year_end = '2020'

// Where clause generator
const year_where= (start, end) => `YEAR>=${start} AND YEAR<=${end}`
const where_factory = () => `${year_where(year_start, year_end)} AND ${storm_where}`

// Select storm type
const storm_select = document.getElementById('storm-type-select')
for (let key of Object.keys(config.storm_types)) {
    let value = config.storm_types[key]['where']
    let label = config.storm_types[key]['label']
    storm_select.appendChild(util.option_factory(value, label));
}

storm_select.addEventListener('change', function () {
  storm_where = storm_select.value
  let new_where = where_factory(storm_where, year_where)
  console.log(new_where)
  layer.setWhere(new_where)
});

// Select start year
const year_start_select = util.year_select_factory('start', year_start)
year_start_select.addEventListener('change', function () {
  year_start = year_start_select.value
  let new_where = where_factory()
  console.log(new_where)
  layer.setWhere(new_where);
});

// Select end year
const year_end_select = util.year_select_factory('end', year_end)
year_end_select.addEventListener('change', function () {
  year_end = year_end_select.value
  let new_where = where_factory()
  console.log(new_where)
  layer.setWhere(new_where);
});


/* Map */

const map = L.map('map').setView([37.837, -100.479], 5);
const basemap = L.esri.basemapLayer('Streets').addTo(map);

// dummy feature for logging
//let f;

const layer = L.esri.featureLayer({
  url: 'https://services2.arcgis.com/FiaPA4ga0iQKduv3/ArcGIS/rest/services/IBTrACS_ALL_list_v04r00_lines_1/FeatureServer/0',
  style: function (feature) {
    //if (!f) { f = feature;  console.log(feature) }
    let c;
    let prop = feature.properties.USA_WIND
    if (prop < 64 && prop >= 34) { c = 'red' }
    if (prop >= 64 && prop < 96) { c = 'green' }
    if (prop >= 96) { c = 'blue' };
    if (!c) { c = 'white' }
    return { color: c, opacity: .9, weight: 5 };
  },
  where: where_factory()
}).addTo(map);

let feature_info = document.getElementById('feature-info')

map.on('click', function (event) {
  let where = where_factory()
  let radius = 500 // meters
  let query = layer.query().nearby(event.latlng, radius).where(where)
  query.run(function (error, featureCollection, response) {
    if (error) { console.log(error); return; }
    if (featureCollection.features.length) {
      let feature = featureCollection.features[0];
      console.log(feature)
      let f_str = JSON.stringify(feature)
      feature_info.innerHTML = f_str
    } else {
      feature_info.innerHTML = 'No features selected.'
    }
  });
})
