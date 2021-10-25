
import './index.css'
import { config } from './config'
import { data }  from './data'
import { Graph } from './graph'

import * as util from './util'

const minYear = util.getMinYear(data)
const maxYear = util.getMaxYear(data)

const graph = new Graph(config, data)

const checkboxIds = {
  'named_storm': 'show-named-storms',
  'hurricane': 'show-minor-hurricanes',
  'major_hurricane': 'show-major-hurricanes'
}

for (let key of Object.keys(checkboxIds)) {
  const el = document.getElementById(checkboxIds[key])
  el.checked = config.stormTypes[key].active
  el.addEventListener('change', function () {
    if (this.checked) {
      graph.stormTypes[key].active = true
      graph.showBars(key)
    } else {
      graph.stormTypes[key].active = false
      graph.hideBars(key)
    }
  })
}

let selectedStartYear = graph.yearStart
let selectedEndYear = graph.yearEnd

const yearStartSelect = util.setupYearSelect('start', selectedStartYear, minYear, maxYear)
const yearEndSelect = util.setupYearSelect('end', selectedEndYear, minYear, maxYear)

yearStartSelect.addEventListener('change', function () {
  selectedStartYear = parseInt(yearStartSelect.value)
  graph.updateYearStart(selectedStartYear)
  util.setupYearSelect('end', selectedEndYear, selectedStartYear, graph.MAX_YEAR)
})

yearEndSelect.addEventListener('change', function () {
  selectedEndYear = parseInt(yearEndSelect.value)
  graph.updateYearEnd(selectedEndYear)
  util.setupYearSelect('start', selectedStartYear, graph.MIN_YEAR, selectedEndYear)
})

/* Init State
  'yearStart': 1950,
  'yearEnd': 2020,
  'activeStormTypes': ['named_storm', 'hurricane', 'major_hurricane']
*/

// Map
// Where clause generator

//const year_where = (start, end) => `YEAR>=${start} AND YEAR<=${end}`
//const where_factory = () => `${year_where(yearStart, yearEnd)} AND ${storm_where}`

/*
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
