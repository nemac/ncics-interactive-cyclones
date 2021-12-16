
import './index.css'
import { config } from './config'
import { data }  from './data'
import { Graph } from './graph'

import * as util from './util'

const minYear = util.getMinYear(data)
const maxYear = util.getMaxYear(data)

const graph = new Graph(config, data)

/* Map */

const fitBounds = [
  {lat: 50.0, lng: -60},
  {lat: 5, lng: -100}
]
const map = L.map('map').fitBounds(fitBounds)

// TODO move this
const apiKey = "AAPK1601eedf080a4b05b76c0c5de702437c_xgYy0EXPcjGO2eMwG4EU50cuttu3Lsm1DQ3UBgIEInW9LJNfmuBUMYdxIei-cjU";
const basemap = L.esri.Vector.vectorBasemapLayer('ArcGIS:DarkGray', { apiKey: apiKey })
basemap.addTo(map)

const MapControlCallToAction = L.Control.extend({
  options: {
    position: 'bottomright'
  },
  onAdd: function (map) {
    const el = document.createElement('div')
    el.id = 'map-control-call-to-action'
    el.classList.add('leaflet-center', 'map-control')
    el.innerHTML = config.mapCallToActionText
    util.addMapControlEventListeners(el)
    return el
  }
})

const MapControlTrackInfo = L.Control.extend({
  options: {
    position: 'topright'
  },
  onAdd: function (map) {
    const el = document.createElement('div')
    el.id = 'map-control-track-info'
    el.classList.add('map-control', 'hidden')
    el.innerHTML = config.stormTrackInfoCallToActionText
    util.addMapControlEventListeners(el)
    return el
  }
})

const mapControlCallToAction = new MapControlCallToAction()
const mapControlTrackInfo = new MapControlTrackInfo()
map.addControl(mapControlCallToAction)
map.addControl(mapControlTrackInfo)


/* Storm Tracks Map Layer */

let layer = L.esri.featureLayer({
  url: 'https://services2.arcgis.com/FiaPA4ga0iQKduv3/ArcGIS/rest/services/IBTrACS_ALL_list_v04r00_lines_1/FeatureServer/0',
  style: function (feature) {
    //if (!f) { f = feature;  console.log(feature) }
    let c;
    let prop = feature.properties.USA_WIND
    if (prop < 64 && prop >= 34) { c = config.stormTypes['named_storm']['fill'] }
    if (prop >= 64 && prop < 96) { c = config.stormTypes['hurricane']['fill'] }
    if (prop >= 96) { c = config.stormTypes['major_hurricane']['fill'] };
    if (!c) { c = 'white' }
    return { color: c, opacity: 1, weight: 8 }
  },
  where: '1=0'
}).addTo(map)

graph.setLayer(layer)

/* Map Marker */

let marker

layer.on('click', function (event) {
  if (marker) { marker.remove() }
  marker = L.circle(event.latlng, { weight: 8, color: 'red'})
  marker.addTo(map)
  mapControlTrackInfo.getContainer().innerHTML = renderFeature(event.layer.feature)
})

const renderFeature = f => {
  const props = f.properties
  const display_props = [ 'LAT', 'LON', 'USA_WIND', 'year', 'month', 'day', 'NAME' ]
  const rendered = `
    Storm: ${ props['NAME'][0] + props['NAME'].slice(1).toLowerCase() } <br>
    Date: ${props['month']}/${props['day']}/${props['year']} <br>
    Wind Speed: ${props['USA_WIND']} knots <br>
  `
  return rendered
}


/* Legend Interactivity */

const legendButtonIds = {
  'named_storm': 'show-named-storms',
  'hurricane': 'show-minor-hurricanes',
  'major_hurricane': 'show-major-hurricanes'
}

for (let key of Object.keys(legendButtonIds)) {
  const el = document.getElementById(legendButtonIds[key])
  if (config.stormTypes[key].active) {
    el.classList.add('active')
  }
  el.addEventListener('click', function () {
    el.classList.toggle('active')
    if (el.classList.contains('active')) {
      graph.stormTypes[key].active = true
      graph.showBars(key)
      util.showLegendBar(key)
    } else {
      graph.stormTypes[key].active = false
      graph.hideBars(key)
      util.hideLegendBar(key)
    }
    if (graph.yearActive) {
      const activeStormTypes = graph.getActiveStormTypes()
      if (activeStormTypes.length == 0) {
        layer.setWhere('1=0')
      } else {
        const lowestSpeedKey = activeStormTypes[0]
        const where = util.whereFactory(graph.yearActive, graph.stormTypes[lowestSpeedKey]['where'])
        layer.setWhere(where)
        layer.setStyle(feature => util.getLayerStyle(feature, graph.stormTypes))
      }
    }
  })
}

/* Select Year Range */

const resetContext = () => {
  if (marker) {
    marker.remove()
    mapControlTrackInfo.getContainer().innerHTML = config.stormTrackInfoCallToActionText
  }
  if (graph.yearActive) {
    graph.yearActive = undefined
    const selectedYearSpan = document.getElementById('selected-year')
    selectedYearSpan.innerHTML = ''
    layer.setWhere('1=0')
    mapControlCallToAction.getContainer().classList.remove('hidden')
  }
}

let selectedStartYear = graph.yearStart
let selectedEndYear = graph.yearEnd

const yearStartSelect = util.setupYearSelect('start', selectedStartYear, minYear, maxYear)
const yearEndSelect = util.setupYearSelect('end', selectedEndYear, minYear, maxYear)

yearStartSelect.addEventListener('change', function () {
  selectedStartYear = parseInt(yearStartSelect.value)
  if (graph.yearActive < selectedStartYear) resetContext()
  graph.updateYearStart(selectedStartYear)
  util.setupYearSelect('end', selectedEndYear, selectedStartYear, graph.MAX_YEAR)
})

yearEndSelect.addEventListener('change', function () {
  selectedEndYear = parseInt(yearEndSelect.value)
  if (graph.yearActive > selectedEndYear) resetContext()
  graph.updateYearEnd(selectedEndYear)
  util.setupYearSelect('start', selectedStartYear, graph.MIN_YEAR, selectedEndYear)
})
