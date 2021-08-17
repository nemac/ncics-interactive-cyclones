
import './index.css'
import * as config from './config'
import * as util from './util'
import { data } from  './data'


/* State */
let storm_where = config.storm_types['count_35']['where']
let year_start = '2010'
let year_end = '2020'


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

// Where clause generator
const year_where = (start, end) => `YEAR>=${start} AND YEAR<=${end}`
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

const feature_info = document.getElementById('feature-info')

layer.on('mouseover', function (event) {
  feature_info.innerHTML = render_feature(event.layer.feature)
})

layer.on('mouseout', function (event) {
  feature_info.innerHTML = 'Hover over a storm track for more data'
})

const render_feature = f => {
  const props = f.properties
  const display_props = [ 'LAT', 'LON', 'USA_WIND', 'year', 'month', 'day', 'NAME' ]
  const rendered = `
    Name: ${props['NAME']} <br>
    Wind Speed: ${props['USA_WIND']} knots <br>
    Date: ${props['month']}/${props['day']}/${props['year']} <br>
    Lat: ${props['LAT']} <br>
    Lon: ${props['LON']} <br>
  `
  return rendered
}

const render_prop = (key, value) => {
  return `${key}: ${value}\n`
}
