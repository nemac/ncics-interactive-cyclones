
import './index.css'
import { config } from './config'
import { data }  from './data'
import { Graph } from './graph'

const graph = new Graph(config, data)



// Select storm type
const namedStormChk = document.getElementById('show-named-storms')
const minorHurricaneChk = document.getElementById('show-minor-hurricanes')
const majorHurricaneChk = document.getElementById('show-major-hurricanes')

const checks = [
  { 'key': 'named_storm', 'id': 'show-named-storms' },
  { 'key': 'minor_hurricanes': 'id': 'show-minor-hurricanes' }
  { 'key': 'major_hurricanes': 'id': 'show-major-hurricanes' }
]

for (let o of checks) {
  const el = document.getElementById(o.id)
  el.addEventListener('change', function () {
    if (this.checked) {
      
    }
  })
}

namedStormChk.addEventListener('change', function () {
  const key = stormSelect.value
  updatePlot(key)
})

// Select start year
const yearStartSelect = util.yearSelectFactory('start', state.yearStart)
yearStartSelect.addEventListener('change', function () {
  state.yearStart = parseInt(yearStartSelect.value)
  updatePlot()
})

// Select end year
const yearEndSelect = util.yearSelectFactory('end', state.yearEnd)
yearEndSelect.addEventListener('change', function () {
  state.yearEnd = parseInt(yearEndSelect.value)
  updatePlot()
})

updatePlot('all')

// Map
// Where clause generator

//const year_where = (start, end) => `YEAR>=${start} AND YEAR<=${end}`
//const where_factory = () => `${year_where(yearStart, yearEnd)} AND ${storm_where}`


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

*/
