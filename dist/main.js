/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config)
/* harmony export */ });
var config = {
  title: 'North Atlantic West of 60°W: 1950-2020',
  width: 600,
  height: 500,
  margin: {
    left: 80,
    right: 10,
    top: 15,
    bottom: 60
  },
  yearStart: 1950,
  yearEnd: 2020,
  yAxisTitle: 'Tropical Cyclone Days (per year)',
  stormTypes: {
    'named_storm': {
      'where': "USA_WIND>=34 AND BASIN = 'NA'",
      'label': 'Named Storms',
      'tooltip': 'Named Storm Days',
      'legend_label': 'Named Storms (>= 34kt)',
      'fill': '#C6DBEF',
      'active': true
    },
    'hurricane': {
      'where': "USA_WIND>=64 AND BASIN = 'NA'",
      'label': 'Hurricanes',
      'tooltip': 'Hurricane Days',
      'legend_label': 'Hurricanes (>=64kt)',
      'fill': '#6BAED6',
      'active': true
    },
    'major_hurricane': {
      'where': "USA_WIND>=96 AND BASIN = 'NA'",
      'label': 'Major Hurricanes',
      'tooltip': 'Major Hurricane Days',
      'legend_label': 'Major Hurricanes (>= 96kt)',
      'fill': '#08519C',
      'active': true
    }
  },
  stormTrackInfoCallToActionText: 'Click a storm track to view details here',
  mapCallToActionText: 'Click a bar on the graph to see storm tracks for the year',
  // Stop labelling every x-axis tick after this many elements
  TICK_LABEL_THRESHOLD: 30,
  // Number of ticks between labels once TICK_LABEL_THRESDHOLD is met (inclusive)
  TICK_LABEL_STEP: 5,
  // These should be consistent with the CSS
  TOOLTIP_HEIGHT: 60,
  TOOLTIP_WIDTH: 180
};

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
var data = {
  "1950": {
    "major_hurricane": 11.5,
    "hurricane": 38,
    "named_storm": 59.5
  },
  "1951": {
    "major_hurricane": 3.75,
    "hurricane": 23.25,
    "named_storm": 41.75
  },
  "1952": {
    "major_hurricane": 2.5,
    "hurricane": 14.25,
    "named_storm": 27
  },
  "1953": {
    "major_hurricane": 3.25,
    "hurricane": 14.25,
    "named_storm": 44
  },
  "1954": {
    "major_hurricane": 7,
    "hurricane": 20.5,
    "named_storm": 45
  },
  "1955": {
    "major_hurricane": 8.5,
    "hurricane": 33,
    "named_storm": 59.25
  },
  "1956": {
    "major_hurricane": 1.75,
    "hurricane": 10.75,
    "named_storm": 29.5
  },
  "1957": {
    "major_hurricane": 0.5,
    "hurricane": 5.5,
    "named_storm": 22.75
  },
  "1958": {
    "major_hurricane": 3.75,
    "hurricane": 16.75,
    "named_storm": 41.5
  },
  "1959": {
    "major_hurricane": 3.25,
    "hurricane": 12.25,
    "named_storm": 36.25
  },
  "1960": {
    "major_hurricane": 6.75,
    "hurricane": 12,
    "named_storm": 27
  },
  "1961": {
    "major_hurricane": 13.75,
    "hurricane": 24.75,
    "named_storm": 46.25
  },
  "1962": {
    "major_hurricane": 0,
    "hurricane": 11.25,
    "named_storm": 25.75
  },
  "1963": {
    "major_hurricane": 3.75,
    "hurricane": 22.75,
    "named_storm": 35.75
  },
  "1964": {
    "major_hurricane": 8.75,
    "hurricane": 33,
    "named_storm": 53.5
  },
  "1965": {
    "major_hurricane": 6.25,
    "hurricane": 9.75,
    "named_storm": 21
  },
  "1966": {
    "major_hurricane": 8.75,
    "hurricane": 25.75,
    "named_storm": 36.5
  },
  "1967": {
    "major_hurricane": 5.75,
    "hurricane": 18.5,
    "named_storm": 28.75
  },
  "1968": {
    "major_hurricane": 0,
    "hurricane": 7.5,
    "named_storm": 20.5
  },
  "1969": {
    "major_hurricane": 4.75,
    "hurricane": 24.5,
    "named_storm": 49.75
  },
  "1970": {
    "major_hurricane": 1,
    "hurricane": 6,
    "named_storm": 20.5
  },
  "1971": {
    "major_hurricane": 1,
    "hurricane": 17.25,
    "named_storm": 46.25
  },
  "1972": {
    "major_hurricane": 0,
    "hurricane": 2.75,
    "named_storm": 17.5
  },
  "1973": {
    "major_hurricane": 0,
    "hurricane": 3.25,
    "named_storm": 20.5
  },
  "1974": {
    "major_hurricane": 3.5,
    "hurricane": 10.5,
    "named_storm": 31.75
  },
  "1975": {
    "major_hurricane": 2.25,
    "hurricane": 11.5,
    "named_storm": 25
  },
  "1976": {
    "major_hurricane": 0.75,
    "hurricane": 3.75,
    "named_storm": 15.25
  },
  "1977": {
    "major_hurricane": 1,
    "hurricane": 5.25,
    "named_storm": 13.25
  },
  "1978": {
    "major_hurricane": 3,
    "hurricane": 8,
    "named_storm": 22
  },
  "1979": {
    "major_hurricane": 4.25,
    "hurricane": 11.75,
    "named_storm": 28.25
  },
  "1980": {
    "major_hurricane": 6.25,
    "hurricane": 9.5,
    "named_storm": 22.25
  },
  "1981": {
    "major_hurricane": 2.25,
    "hurricane": 11,
    "named_storm": 36
  },
  "1982": {
    "major_hurricane": 0.75,
    "hurricane": 4,
    "named_storm": 11
  },
  "1983": {
    "major_hurricane": 0.25,
    "hurricane": 2.25,
    "named_storm": 11.25
  },
  "1984": {
    "major_hurricane": 0.75,
    "hurricane": 11.5,
    "named_storm": 32
  },
  "1985": {
    "major_hurricane": 4,
    "hurricane": 18.25,
    "named_storm": 41.5
  },
  "1986": {
    "major_hurricane": 0,
    "hurricane": 2.25,
    "named_storm": 12.75
  },
  "1987": {
    "major_hurricane": 0.5,
    "hurricane": 2.25,
    "named_storm": 12.5
  },
  "1988": {
    "major_hurricane": 6.5,
    "hurricane": 12.25,
    "named_storm": 28.5
  },
  "1989": {
    "major_hurricane": 3.5,
    "hurricane": 12.5,
    "named_storm": 26
  },
  "1990": {
    "major_hurricane": 0,
    "hurricane": 9.25,
    "named_storm": 25.5
  },
  "1991": {
    "major_hurricane": 1.25,
    "hurricane": 7.25,
    "named_storm": 14.5
  },
  "1992": {
    "major_hurricane": 3.5,
    "hurricane": 5,
    "named_storm": 17
  },
  "1993": {
    "major_hurricane": 0.75,
    "hurricane": 7.5,
    "named_storm": 20.25
  },
  "1994": {
    "major_hurricane": 0,
    "hurricane": 1,
    "named_storm": 16
  },
  "1995": {
    "major_hurricane": 7.25,
    "hurricane": 34.5,
    "named_storm": 63
  },
  "1996": {
    "major_hurricane": 9.25,
    "hurricane": 29.5,
    "named_storm": 50
  },
  "1997": {
    "major_hurricane": 1.75,
    "hurricane": 5.5,
    "named_storm": 18
  },
  "1998": {
    "major_hurricane": 8,
    "hurricane": 27.5,
    "named_storm": 42.5
  },
  "1999": {
    "major_hurricane": 7.5,
    "hurricane": 26.75,
    "named_storm": 47
  },
  "2000": {
    "major_hurricane": 1.25,
    "hurricane": 10,
    "named_storm": 30.25
  },
  "2001": {
    "major_hurricane": 3.75,
    "hurricane": 15.75,
    "named_storm": 42
  },
  "2002": {
    "major_hurricane": 3,
    "hurricane": 8.75,
    "named_storm": 42.25
  },
  "2003": {
    "major_hurricane": 7.5,
    "hurricane": 14.5,
    "named_storm": 40.5
  },
  "2004": {
    "major_hurricane": 14,
    "hurricane": 26.75,
    "named_storm": 51.5
  },
  "2005": {
    "major_hurricane": 17.25,
    "hurricane": 37.25,
    "named_storm": 82.25
  },
  "2006": {
    "major_hurricane": 0,
    "hurricane": 3.75,
    "named_storm": 21.25
  },
  "2007": {
    "major_hurricane": 6,
    "hurricane": 10.5,
    "named_storm": 25.25
  },
  "2008": {
    "major_hurricane": 5.5,
    "hurricane": 23.25,
    "named_storm": 64.75
  },
  "2009": {
    "major_hurricane": 1.25,
    "hurricane": 5.75,
    "named_storm": 13.25
  },
  "2010": {
    "major_hurricane": 4.25,
    "hurricane": 21,
    "named_storm": 51.75
  },
  "2011": {
    "major_hurricane": 4.5,
    "hurricane": 19.25,
    "named_storm": 60
  },
  "2012": {
    "major_hurricane": 0.25,
    "hurricane": 12.25,
    "named_storm": 48
  },
  "2013": {
    "major_hurricane": 0,
    "hurricane": 1.5,
    "named_storm": 14
  },
  "2014": {
    "major_hurricane": 3.25,
    "hurricane": 12,
    "named_storm": 24.25
  },
  "2015": {
    "major_hurricane": 3.5,
    "hurricane": 7.25,
    "named_storm": 19.75
  },
  "2016": {
    "major_hurricane": 8.75,
    "hurricane": 16.25,
    "named_storm": 42.5
  },
  "2017": {
    "major_hurricane": 12.25,
    "hurricane": 32.25,
    "named_storm": 59.75
  },
  "2018": {
    "major_hurricane": 4,
    "hurricane": 9,
    "named_storm": 24.25
  },
  "2019": {
    "major_hurricane": 6.25,
    "hurricane": 14.25,
    "named_storm": 39.25
  },
  "2020": {
    "major_hurricane": 5.5,
    "hurricane": 28,
    "named_storm": 81
  }
};

/***/ }),

/***/ "./src/graph.js":
/*!**********************!*\
  !*** ./src/graph.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Graph": () => (/* binding */ Graph)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Graph = /*#__PURE__*/function () {
  function Graph(config, data) {
    var _this = this;

    _classCallCheck(this, Graph);

    this.MIN_YEAR = _util__WEBPACK_IMPORTED_MODULE_0__.getMinYear(data);
    this.MAX_YEAR = _util__WEBPACK_IMPORTED_MODULE_0__.getMaxYear(data);
    this.TICK_LABEL_THRESHOLD = config.TICK_LABEL_THRESHOLD;
    this.TICK_LABEL_STEP = config.TICK_LABEL_STEP;
    this.TOOLTIP_WIDTH = config.TOOLTIP_WIDTH;
    this.TOOLTIP_HEIGHT = config.TOOLTIP_HEIGHT;
    this.data = data;
    this.title = config.title;
    this.yAxisTitle = config.yAxisTitle;
    this.years = Object.keys(data).map(function (d) {
      return parseInt(d);
    });
    this.yearStart = config.yearStart;
    this.yearEnd = config.yearEnd;
    this.stormTypes = config.stormTypes;
    this.margin = config.margin;
    this.width = config.width;
    this.height = config.height;
    this.plot = this.initPlot();
    this.datasets = this.initDatasets(Object.keys(config.stormTypes));
    this.x = this.initXScale();
    this.y = this.initYScale(); // Insert SVG elements
    // SVG elements are painted in the order they are inserted,
    // so we add the axes and tooltips last so they show up over the bars
    // See https://www.w3.org/TR/SVG11/render.html#RenderingOrder
    // Initialize data bars with zero height

    Object.keys(config.stormTypes).forEach(function (key) {
      _this.initBars(key);
    }); // Draw the axes

    this.xAxis = this.appendXAxis();
    this.initXAxis();
    this.setYAxisTitle();
    this.yAxis = this.initYAxis(); // Draw the tooltips

    Object.keys(config.stormTypes).forEach(function (key) {
      _this.initTooltips(key);
    }); // Show the bars for initially activated storm types

    var initStormTypes = Object.keys(this.stormTypes).filter(function (key) {
      return _this.stormTypes[key].active;
    });
    initStormTypes.forEach(function (key) {
      return _this.showBars(key);
    });
  }

  _createClass(Graph, [{
    key: "setYAxisTitle",
    value: function setYAxisTitle() {
      this.plot.append('text').attr('id', 'y-axis-title').attr('transform', "rotate(-90) translate(-".concat(this.height / 5, ", 30)")).attr('text-anchor', 'end').html(this.yAxisTitle);
    }
  }, {
    key: "initPlot",
    value: function initPlot() {
      return d3.select('#graph').attr('width', this.width).attr('height', this.height);
    }
  }, {
    key: "getXDomain",
    value: function getXDomain() {
      var _this2 = this;

      return _toConsumableArray(Array(this.yearEnd - this.yearStart + 1).keys()).map(function (d) {
        return d + _this2.yearStart;
      });
    }
  }, {
    key: "initXScale",
    value: function initXScale() {
      return d3.scaleBand().domain(this.getXDomain()).range([this.margin.left, this.width - this.margin.right]);
    }
  }, {
    key: "initYScale",
    value: function initYScale() {
      return d3.scaleLinear().domain([0, this.calcMax()]).range([this.height - this.margin.bottom, this.margin.top]);
    }
  }, {
    key: "appendXAxis",
    value: function appendXAxis() {
      return this.plot.append('g').attr('id', 'x-axis').attr('transform', "translate(0, ".concat(this.height - this.margin.bottom, ")"));
    }
  }, {
    key: "removeXAxis",
    value: function removeXAxis() {
      d3.select('#x-axis').remove();
    }
  }, {
    key: "initXAxis",
    value: function initXAxis() {
      var _this3 = this;

      this.xAxis.call(d3.axisBottom(this.x).tickSizeOuter(0)).selectAll('text').style('text-anchor', 'end').attr('dx', '-.5em').attr('dy', '.15em').attr('transform', 'rotate(-65)').html(function (d, i, nodes) {
        if (nodes.length > _this3.TICK_LABEL_THRESHOLD) {
          if (d % _this3.TICK_LABEL_STEP == 0) return d;
          return '';
        }

        return d;
      });
    }
  }, {
    key: "initYAxis",
    value: function initYAxis() {
      return this.plot.append('g').attr('transform', "translate(".concat(this.margin.left, ", 0)")).call(d3.axisLeft(this.y));
    }
  }, {
    key: "calcActiveYears",
    value: function calcActiveYears() {
      var keys = Object.keys(this.data);
      var years = [];

      for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
        var d = _keys[_i];
        var yr = parseInt(d);
        if (yr < this.yearStart || yr > this.yearEnd) continue;
        years.push(yr);
      }

      return years;
    }
  }, {
    key: "initDatasets",
    value: function initDatasets() {
      for (var _i2 = 0, _Object$keys = Object.keys(this.stormTypes); _i2 < _Object$keys.length; _i2++) {
        var key = _Object$keys[_i2];
        var dataset = [];

        var _iterator = _createForOfIteratorHelper(this.years),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var year = _step.value;
            dataset.push({
              'year': year,
              'value': this.data[String(year)][key]
            });
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        this.stormTypes[key].dataset = dataset;
      }
    }
  }, {
    key: "calcMax",
    value: function calcMax() {
      var max = 0;

      for (var _i3 = 0, _Object$keys2 = Object.keys(this.stormTypes); _i3 < _Object$keys2.length; _i3++) {
        var key = _Object$keys2[_i3];

        var _iterator2 = _createForOfIteratorHelper(this.stormTypes[key].dataset),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var d = _step2.value;
            max = d.value > max ? d.value : max;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } // Round up by 10


      return parseInt(max / 10) * 10 + 10;
    }
  }, {
    key: "getActiveData",
    value: function getActiveData(key) {
      var _this4 = this;

      return this.stormTypes[key].dataset.filter(function (d) {
        return d.year >= _this4.yearStart && d.year <= _this4.yearEnd;
      });
    }
  }, {
    key: "updateYearStart",
    value: function updateYearStart(newYearStart) {
      this.yearStart = newYearStart;
      this.update();
    }
  }, {
    key: "updateYearEnd",
    value: function updateYearEnd(newYearEnd) {
      this.yearEnd = newYearEnd;
      this.update();
    }
  }, {
    key: "update",
    value: function update() {
      this.x.domain(this.getXDomain());
      this.removeTooltips();

      for (var _i4 = 0, _Object$keys3 = Object.keys(this.stormTypes); _i4 < _Object$keys3.length; _i4++) {
        var key = _Object$keys3[_i4];
        this.removeBars(key);
        this.initBars(key);
      }

      var _iterator3 = _createForOfIteratorHelper(this.getActiveStormTypes()),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _key2 = _step3.value;
          this.showBars(_key2);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      this.removeXAxis();
      this.xAxis = this.appendXAxis();
      this.initXAxis();
      this.yAxis = this.initYAxis(); // Keep separate loop for correct drawing order

      for (var _i5 = 0, _Object$keys4 = Object.keys(this.stormTypes); _i5 < _Object$keys4.length; _i5++) {
        var _key = _Object$keys4[_i5];
        this.initTooltips(_key);
      }
    }
  }, {
    key: "getActiveStormTypes",
    value: function getActiveStormTypes() {
      var _this5 = this;

      return Object.keys(this.stormTypes).filter(function (key) {
        return _this5.stormTypes[key].active;
      });
    }
  }, {
    key: "setLayer",
    value: function setLayer(layer) {
      this.layer = layer;
    }
  }, {
    key: "initBars",
    value: function initBars(key) {
      var _this6 = this;

      var dataset = this.getActiveData(key);
      var bars = this.plot.append('g').attr('class', 'data-bars').attr('id', "data-bars--".concat(key)).selectAll('rect').data(dataset).enter().append('rect').attr('class', 'bar').attr('data-year', function (d) {
        return d.year;
      }).attr('data-value', function (d) {
        return d.value;
      });
      bars.attr('height', 0).attr('width', this.x.bandwidth()).attr('x', function (d) {
        return _this6.x(d.year);
      }).attr('y', this.y(0)).attr('fill', this.stormTypes[key].fill).on('mouseenter', function (d) {
        _this6.toggleTooltip(key, d.year, true);
      }).on('click', function (d) {
        var index = d.year - _this6.yearStart;

        var ns_d = _this6.getActiveData('named_storm')[index];

        var h_d = _this6.getActiveData('hurricane')[index];

        var mh_d = _this6.getActiveData('major_hurricane')[index];

        var mapCallToActionControl = document.getElementById('map-control-call-to-action');
        mapCallToActionControl.classList.add('hidden');
        var trackInfoControl = document.getElementById('map-control-track-info');
        var selectedYearSpan = document.getElementById('selected-year');
        selectedYearSpan.innerHTML = d.year;
        trackInfoControl.classList.remove('hidden');
        var where = _util__WEBPACK_IMPORTED_MODULE_0__.whereFactory(d.year, _this6.stormTypes['named_storm']['where']);

        _this6.layer.setWhere(where);

        _this6.layer.setStyle(function (feature) {
          return _util__WEBPACK_IMPORTED_MODULE_0__.getLayerStyle(feature, _this6.stormTypes);
        });

        _this6.yearActive = d.year;
      }).on('mouseout', function (d) {
        //this.layer.setWhere('1=0')
        _this6.toggleTooltip(key, d.year, false);
      });
      this.stormTypes[key].bars = bars;
    }
  }, {
    key: "calcTooltipX",
    value: function calcTooltipX(d) {
      var normal = this.x(d.year) + this.x.bandwidth();
      if (normal + this.TOOLTIP_WIDTH < this.x.range()[1]) return normal;
      return normal - this.TOOLTIP_WIDTH - this.x.bandwidth();
    }
  }, {
    key: "calcTooltipY",
    value: function calcTooltipY(d) {
      var normal = this.y(d.value);
      var cutoff = normal - this.TOOLTIP_HEIGHT;

      if (cutoff < 0) {
        return normal + this.TOOLTIP_HEIGHT / 3;
      }

      return normal;
    }
  }, {
    key: "removeTooltips",
    value: function removeTooltips() {
      d3.selectAll('.data-tooltips').remove();
    }
  }, {
    key: "toggleTooltip",
    value: function toggleTooltip(key, year, showTooltip) {
      d3.select("#data-tooltip--".concat(key, "--").concat(year, "--rect")).attr('style', showTooltip ? '' : 'display: none').raise();
      d3.select("#data-tooltip--".concat(key, "--").concat(year, "--text")).attr('style', showTooltip ? '' : 'display: none').raise();
    }
  }, {
    key: "initTooltips",
    value: function initTooltips(key) {
      var _this7 = this;

      var dataset = this.getActiveData(key);
      var tooltips = this.plot.append('g').attr('class', 'data-tooltips').attr('id', "data-tooltips--".concat(key)).selectAll('rect').data(dataset).enter().append('rect').attr('id', function (d) {
        return "data-tooltip--".concat(key, "--").concat(d.year, "--rect");
      }).attr('class', 'tooltip').attr('x', function (d) {
        return _this7.calcTooltipX(d);
      }).attr('y', function (d) {
        return _this7.calcTooltipY(d) - _this7.TOOLTIP_HEIGHT;
      }).attr('style', 'display: none;').attr('data-year', function (d) {
        return d.year;
      }).attr('data-value', function (d) {
        return d.value;
      }).attr('fill', 'white').attr('stroke', this.stormTypes[key].fill).attr('stroke-width', '1.5');
      var tooltip_text = this.plot.select("#data-tooltips--".concat(key)).selectAll('text').data(dataset).enter(tooltips).append('text').attr('id', function (d) {
        return "data-tooltip--".concat(key, "--").concat(d.year, "--text");
      }).attr('style', 'display: none').attr('text-anchor', 'start').attr('x', function (d) {
        return _this7.calcTooltipX(d);
      }).attr('y', function (d) {
        return _this7.calcTooltipY(d);
      });
      var text_margin = {
        left: 8,
        top: 8
      };
      tooltip_text.append('tspan').attr('x', function (d) {
        return _this7.calcTooltipX(d) + text_margin.left;
      }).attr('y', function (d) {
        return _this7.calcTooltipY(d) - _this7.TOOLTIP_HEIGHT / 2 - text_margin.top;
      }).html(function (d) {
        return "Year: ".concat(d.year);
      });
      tooltip_text.append('tspan').attr('x', function (d) {
        return _this7.calcTooltipX(d) + text_margin.left;
      }).attr('y', function (d) {
        return _this7.calcTooltipY(d) - _this7.TOOLTIP_HEIGHT / 12 - text_margin.top;
      }).html(function (d) {
        return "".concat(_this7.stormTypes[key].tooltip, ": ").concat(d.value);
      });
      this.stormTypes[key].tooltips = tooltips;
    }
  }, {
    key: "showBars",
    value: function showBars(key) {
      var _this8 = this;

      this.stormTypes[key].bars.transition(1000).attr('y', function (d) {
        return _this8.y(d.value);
      }).attr('height', function (d) {
        return _this8.y(0) - _this8.y(d.value);
      });
    }
  }, {
    key: "hideBars",
    value: function hideBars(key) {
      var _this9 = this;

      this.stormTypes[key].bars.transition(1000).attr('y', function (d) {
        return _this9.y(0);
      }).attr('height', 0);
    }
  }, {
    key: "removeBars",
    value: function removeBars(key) {
      this.hideBars(key);
      this.stormTypes[key].bars.remove();
      this.stormTypes[key].bars = [];
    }
  }]);

  return Graph;
}();

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLayerStyle": () => (/* binding */ getLayerStyle),
/* harmony export */   "whereFactory": () => (/* binding */ whereFactory),
/* harmony export */   "addMapControlEventListeners": () => (/* binding */ addMapControlEventListeners),
/* harmony export */   "setLegendMetrics": () => (/* binding */ setLegendMetrics),
/* harmony export */   "hideLegendBar": () => (/* binding */ hideLegendBar),
/* harmony export */   "showLegendBar": () => (/* binding */ showLegendBar),
/* harmony export */   "getMaxYear": () => (/* binding */ getMaxYear),
/* harmony export */   "getMinYear": () => (/* binding */ getMinYear),
/* harmony export */   "optionFactory": () => (/* binding */ optionFactory),
/* harmony export */   "setupYearSelect": () => (/* binding */ setupYearSelect)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");

var getLayerStyle = function getLayerStyle(feature, stormTypes) {
  var c;
  var prop = feature.properties.USA_WIND;
  if (stormTypes['named_storm'].active && prop >= 34) c = stormTypes['named_storm']['fill'];
  if (stormTypes['hurricane'].active && prop >= 64) c = stormTypes['hurricane']['fill'];
  if (stormTypes['major_hurricane'].active && prop >= 96) c = stormTypes['major_hurricane']['fill'];
  return {
    color: c,
    opacity: 1,
    weight: 5
  };
};
var whereFactory = function whereFactory(year, stormWhere) {
  return "YEAR=".concat(year, " AND ").concat(stormWhere);
};

var getLegendBarId = function getLegendBarId(key) {
  return "".concat(key.replace('_', '-'), "-legend-bar");
};

var getLegendMetricId = function getLegendMetricId(key) {
  return "".concat(key.replace('_', '-'), "-selected-year-metric");
};

var setLegendMetric = function setLegendMetric(key, val) {
  var id = getLegendMetricId(key);
  var el = document.getElementById(id);
  el.innerHTML = val;
};

var addMapControlEventListeners = function addMapControlEventListeners(el) {
  L.DomEvent.disableClickPropagation(el);
};
var setLegendMetrics = function setLegendMetrics(ns_val, h_val, mh_val) {
  setLegendMetric('named_storm', ns_val);
  setLegendMetric('hurricane', h_val);
  setLegendMetric('major_hurricane', mh_val);
};
var hideLegendBar = function hideLegendBar(key) {
  var id = "#".concat(getLegendBarId(key));
  var el = d3.select(id);
  el.node().dataset.height = el.attr('height');
  el.transition(500).attr('height', 0);
};
var showLegendBar = function showLegendBar(key) {
  var id = "#".concat(getLegendBarId(key));
  var el = d3.select(id);
  el.transition(500).attr('height', el.node().dataset.height);
};
var getMaxYear = function getMaxYear(data) {
  var max = 0;

  for (var _i = 0, _Object$keys = Object.keys(data); _i < _Object$keys.length; _i++) {
    var k = _Object$keys[_i];
    k = parseInt(k);

    if (k > max) {
      max = k;
    }
  }

  return max;
};
var getMinYear = function getMinYear(data) {
  var min = 10000;

  for (var _i2 = 0, _Object$keys2 = Object.keys(data); _i2 < _Object$keys2.length; _i2++) {
    var k = _Object$keys2[_i2];
    k = parseInt(k);

    if (k < min) {
      min = k;
    }
  }

  return min;
};
var optionFactory = function optionFactory(value, innerHTML) {
  var opt = document.createElement('option');
  opt.value = String(value);
  opt.innerHTML = String(innerHTML);
  return opt;
};

var removeChildNodes = function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

var setupYearSelect = function setupYearSelect(label, yearSelected, minYear, maxYear) {
  var yearSelect = document.getElementById("year-".concat(label, "-select"));
  removeChildNodes(yearSelect);
  var selectedIndex;
  var index = 0;

  for (var y = minYear; y <= maxYear; y++) {
    if (parseInt(yearSelected) == y) {
      selectedIndex = index;
    }

    yearSelect.appendChild(optionFactory(String(y), String(y)));
    index++;
  }

  yearSelect.options.selectedIndex = selectedIndex;
  return yearSelect;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Containers */\n\n#graph-title {\n    font-weight: normal;\n    text-align: center;\n    margin-bottom: 30px;\n    font-size: 1.6em;\n}\n#tropical-cyclone-days-wrapper {\n    width: 1200px;\n    margin-top: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 15px;\n    padding-top: 0;\n    font-family: Arial Narrow, serif;\n    border: 1px solid black;\n    border-radius: 30px;\n    background-color: #fcfcfc;\n}\n.flex-container {\n    display: flex;\n    flex-direction: row;\n    position: relative;\n}\n.flex-column {\n    width: 50%;\n}\n\n/* Map */\n\n#map-container {\n    height: 100%;\n    padding-left: 1%;\n}\n#map {\n    height: 97%;\n    width: 95%;\n    border: 1px solid black;\n}\n\n/** Map Controls **/\n\n.map-control {\n    background-color: white;\n    line-height: 1.6;\n    font-family: Arial Narrow, serif;\n    border: 1px solid black;\n    border-radius: 10px;\n    background-color: white;\n}\n#map-control-track-info {\n    width: 130px;\n    padding: 10px;\n    text-align: left;\n    font-size: 1em;\n}\n#map-control-call-to-action {\n    width: 200px;\n    margin-bottom: 40%;\n    margin-right: 32%;\n    padding: 25px;\n    font-size: 1.8em;\n    text-align: center;\n}\n\n/* Graph */\n\n.data-tooltips .tooltip {\n    /*\n      Note: in order for tooltips to format correctly,\n      TOOLTIP_HEIGHT and TOOLTIP_WIDTH need to be identical\n      to the values set below (see config.js).\n    */\n    width: 180px;\n    height: 60px;\n    font-size: 1.5em;\n}\n.tick text {\n    fill: #595959;\n}\n#y-axis-title {\n    font-size: 1.3em;\n}\n#plot .tick {\n    font-size: 1.5em;\n}\n\n\n/* Controls */\n\n#menu-container {\n    width: 50%;\n    /*justify-content: right;*/\n}\n#menu div {\n    margin: 10px;\n}\n#controls-container {\n    flex-direction: column;\n    display: flex;\n    position: relative;\n}\n\n/** Legend **/\n\n#legend-container > div {\n    display: inline-block;\n}\n#legend-container svg {\n    width: 220px;\n}\n#show-storm-types {\n    width: 120px;\n    position: relative;\n    bottom: 9px;\n    left: 4px;\n    margin-left: 75px;\n}\n#show-storm-types input {\n    border-radius: 3px;\n    border-width: .5px;\n    cursor: pointer;\n    width: 100%;\n    height: 26.4px;\n    padding: 3px;\n    background-color: #efefef;\n}\n#show-storm-types input:hover {\n    background-color: #e5e5e5;\n}\n#show-storm-types input.active {\n    color: #e8eaeb;\n    background-color: #9ea6ab;\n}\n#show-storm-types input.active:hover {\n    background-color: #939ba0;\n}\n.selected-year-storm-metrics {\n    height: 25px;\n}\n.selected-year-storm-metrics > div {\n    display: block;\n    height: 32px;\n}\n\n/** Select Years **/\n\n#year-select {\n    margin-left: 80px;\n}\n#year-select > div {\n    margin-right: 15px;\n    display: inline-block;\n}\n#year-select .label {\n    display: inline-block;\n    width: 33px;\n}\n#year-select select {\n    font-size: inherit;\n    padding: 1px;\n    text-align: right;\n}\nsvg .bar {\n    cursor: pointer;\n}\n\n/* Legend SVG */\n\n.cls-1 {\n  fill: #0b539d;\n}\n.cls-2 {\n  fill: #6baed6;\n}\n.cls-3 {\n  fill: #c7dbee;\n}\n.cls-4, .cls-5, .cls-8 {\n  fill: none;\n  stroke: #010101;\n  stroke-linecap: round;\n  stroke-miterlimit: 10;\n  stroke-width: 0.5px;\n}\n.cls-5 {\n  stroke-dasharray: 3.2 3.2;\n}\n.cls-6 {\n  font-size: 8px;\n  fill: #010101;\n  font-family: ArialNarrow, Arial Narrow;\n}\n.cls-7 {\n  letter-spacing: -0.06em;\n}\n.cls-8 {\n  stroke-dasharray: 3.2 3.2;\n}\n\n\n/* Helpers */\n\n.hidden {\n    display: none;\n}\n\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA,eAAe;;AAEf;IACI,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;IACb,cAAc;IACd,gCAAgC;IAChC,uBAAuB;IACvB,mBAAmB;IACnB,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,UAAU;AACd;;AAEA,QAAQ;;AAER;IACI,YAAY;IACZ,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,UAAU;IACV,uBAAuB;AAC3B;;AAEA,mBAAmB;;AAEnB;IACI,uBAAuB;IACvB,gBAAgB;IAChB,gCAAgC;IAChC,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,cAAc;AAClB;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA,UAAU;;AAEV;IACI;;;;KAIC;IACD,YAAY;IACZ,YAAY;IACZ,gBAAgB;AACpB;AACA;IACI,aAAa;AACjB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;;;AAGA,aAAa;;AAEb;IACI,UAAU;IACV,0BAA0B;AAC9B;AACA;IACI,YAAY;AAChB;AACA;IACI,sBAAsB;IACtB,aAAa;IACb,kBAAkB;AACtB;;AAEA,aAAa;;AAEb;IACI,qBAAqB;AACzB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,WAAW;IACX,cAAc;IACd,YAAY;IACZ,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,cAAc;IACd,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,YAAY;AAChB;AACA;IACI,cAAc;IACd,YAAY;AAChB;;AAEA,mBAAmB;;AAEnB;IACI,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,qBAAqB;AACzB;AACA;IACI,qBAAqB;IACrB,WAAW;AACf;AACA;IACI,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,eAAe;AACnB;;AAEA,eAAe;;AAEf;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,UAAU;EACV,eAAe;EACf,qBAAqB;EACrB,qBAAqB;EACrB,mBAAmB;AACrB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,cAAc;EACd,aAAa;EACb,sCAAsC;AACxC;AACA;EACE,uBAAuB;AACzB;AACA;EACE,yBAAyB;AAC3B;;;AAGA,YAAY;;AAEZ;IACI,aAAa;AACjB","sourcesContent":["/* Containers */\n\n#graph-title {\n    font-weight: normal;\n    text-align: center;\n    margin-bottom: 30px;\n    font-size: 1.6em;\n}\n#tropical-cyclone-days-wrapper {\n    width: 1200px;\n    margin-top: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 15px;\n    padding-top: 0;\n    font-family: Arial Narrow, serif;\n    border: 1px solid black;\n    border-radius: 30px;\n    background-color: #fcfcfc;\n}\n.flex-container {\n    display: flex;\n    flex-direction: row;\n    position: relative;\n}\n.flex-column {\n    width: 50%;\n}\n\n/* Map */\n\n#map-container {\n    height: 100%;\n    padding-left: 1%;\n}\n#map {\n    height: 97%;\n    width: 95%;\n    border: 1px solid black;\n}\n\n/** Map Controls **/\n\n.map-control {\n    background-color: white;\n    line-height: 1.6;\n    font-family: Arial Narrow, serif;\n    border: 1px solid black;\n    border-radius: 10px;\n    background-color: white;\n}\n#map-control-track-info {\n    width: 130px;\n    padding: 10px;\n    text-align: left;\n    font-size: 1em;\n}\n#map-control-call-to-action {\n    width: 200px;\n    margin-bottom: 40%;\n    margin-right: 32%;\n    padding: 25px;\n    font-size: 1.8em;\n    text-align: center;\n}\n\n/* Graph */\n\n.data-tooltips .tooltip {\n    /*\n      Note: in order for tooltips to format correctly,\n      TOOLTIP_HEIGHT and TOOLTIP_WIDTH need to be identical\n      to the values set below (see config.js).\n    */\n    width: 180px;\n    height: 60px;\n    font-size: 1.5em;\n}\n.tick text {\n    fill: #595959;\n}\n#y-axis-title {\n    font-size: 1.3em;\n}\n#plot .tick {\n    font-size: 1.5em;\n}\n\n\n/* Controls */\n\n#menu-container {\n    width: 50%;\n    /*justify-content: right;*/\n}\n#menu div {\n    margin: 10px;\n}\n#controls-container {\n    flex-direction: column;\n    display: flex;\n    position: relative;\n}\n\n/** Legend **/\n\n#legend-container > div {\n    display: inline-block;\n}\n#legend-container svg {\n    width: 220px;\n}\n#show-storm-types {\n    width: 120px;\n    position: relative;\n    bottom: 9px;\n    left: 4px;\n    margin-left: 75px;\n}\n#show-storm-types input {\n    border-radius: 3px;\n    border-width: .5px;\n    cursor: pointer;\n    width: 100%;\n    height: 26.4px;\n    padding: 3px;\n    background-color: #efefef;\n}\n#show-storm-types input:hover {\n    background-color: #e5e5e5;\n}\n#show-storm-types input.active {\n    color: #e8eaeb;\n    background-color: #9ea6ab;\n}\n#show-storm-types input.active:hover {\n    background-color: #939ba0;\n}\n.selected-year-storm-metrics {\n    height: 25px;\n}\n.selected-year-storm-metrics > div {\n    display: block;\n    height: 32px;\n}\n\n/** Select Years **/\n\n#year-select {\n    margin-left: 80px;\n}\n#year-select > div {\n    margin-right: 15px;\n    display: inline-block;\n}\n#year-select .label {\n    display: inline-block;\n    width: 33px;\n}\n#year-select select {\n    font-size: inherit;\n    padding: 1px;\n    text-align: right;\n}\nsvg .bar {\n    cursor: pointer;\n}\n\n/* Legend SVG */\n\n.cls-1 {\n  fill: #0b539d;\n}\n.cls-2 {\n  fill: #6baed6;\n}\n.cls-3 {\n  fill: #c7dbee;\n}\n.cls-4, .cls-5, .cls-8 {\n  fill: none;\n  stroke: #010101;\n  stroke-linecap: round;\n  stroke-miterlimit: 10;\n  stroke-width: 0.5px;\n}\n.cls-5 {\n  stroke-dasharray: 3.2 3.2;\n}\n.cls-6 {\n  font-size: 8px;\n  fill: #010101;\n  font-family: ArialNarrow, Arial Narrow;\n}\n.cls-7 {\n  letter-spacing: -0.06em;\n}\n.cls-8 {\n  stroke-dasharray: 3.2 3.2;\n}\n\n\n/* Helpers */\n\n.hidden {\n    display: none;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _graph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graph */ "./src/graph.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./src/util.js");





var minYear = _util__WEBPACK_IMPORTED_MODULE_4__.getMinYear(_data__WEBPACK_IMPORTED_MODULE_2__.data);
var maxYear = _util__WEBPACK_IMPORTED_MODULE_4__.getMaxYear(_data__WEBPACK_IMPORTED_MODULE_2__.data);
var graph = new _graph__WEBPACK_IMPORTED_MODULE_3__.Graph(_config__WEBPACK_IMPORTED_MODULE_1__.config, _data__WEBPACK_IMPORTED_MODULE_2__.data);
/* Map */

var fitBounds = [{
  lat: 50.0,
  lng: -60
}, {
  lat: 5,
  lng: -100
}];
var map = L.map('map').fitBounds(fitBounds); // TODO move this

var apiKey = "AAPK1601eedf080a4b05b76c0c5de702437c_xgYy0EXPcjGO2eMwG4EU50cuttu3Lsm1DQ3UBgIEInW9LJNfmuBUMYdxIei-cjU";
var basemap = L.esri.Vector.vectorBasemapLayer('ArcGIS:DarkGray', {
  apiKey: apiKey
});
basemap.addTo(map);
var MapControlCallToAction = L.Control.extend({
  options: {
    position: 'bottomright'
  },
  onAdd: function onAdd(map) {
    var el = document.createElement('div');
    el.id = 'map-control-call-to-action';
    el.classList.add('leaflet-center', 'map-control');
    el.innerHTML = _config__WEBPACK_IMPORTED_MODULE_1__.config.mapCallToActionText;
    _util__WEBPACK_IMPORTED_MODULE_4__.addMapControlEventListeners(el);
    return el;
  }
});
var MapControlTrackInfo = L.Control.extend({
  options: {
    position: 'topright'
  },
  onAdd: function onAdd(map) {
    var el = document.createElement('div');
    el.id = 'map-control-track-info';
    el.classList.add('map-control', 'hidden');
    el.innerHTML = _config__WEBPACK_IMPORTED_MODULE_1__.config.stormTrackInfoCallToActionText;
    _util__WEBPACK_IMPORTED_MODULE_4__.addMapControlEventListeners(el);
    return el;
  }
});
var mapControlCallToAction = new MapControlCallToAction();
var mapControlTrackInfo = new MapControlTrackInfo();
map.addControl(mapControlCallToAction);
map.addControl(mapControlTrackInfo);
/* Storm Tracks Map Layer */

var layer = L.esri.featureLayer({
  url: 'https://services2.arcgis.com/FiaPA4ga0iQKduv3/ArcGIS/rest/services/IBTrACS_ALL_list_v04r00_lines_1/FeatureServer/0',
  style: function style(feature) {
    //if (!f) { f = feature;  console.log(feature) }
    var c;
    var prop = feature.properties.USA_WIND;

    if (prop < 64 && prop >= 34) {
      c = _config__WEBPACK_IMPORTED_MODULE_1__.config.stormTypes.named_storm.fill;
    }

    if (prop >= 64 && prop < 96) {
      c = _config__WEBPACK_IMPORTED_MODULE_1__.config.stormTypes.hurricane.fill;
    }

    if (prop >= 96) {
      c = _config__WEBPACK_IMPORTED_MODULE_1__.config.stormTypes.major_hurricane.fill;
    }

    ;

    if (!c) {
      c = 'white';
    }

    return {
      color: c,
      opacity: 1,
      weight: 8
    };
  },
  where: '1=0'
}).addTo(map);
graph.setLayer(layer);
/* Map Marker */

var marker;
layer.on('click', function (event) {
  if (marker) {
    marker.remove();
  }

  marker = L.circle(event.latlng, {
    weight: 8,
    color: 'red'
  });
  marker.addTo(map);
  mapControlTrackInfo.getContainer().innerHTML = renderFeature(event.layer.feature);
});

var renderFeature = function renderFeature(f) {
  var props = f.properties;
  var display_props = ['LAT', 'LON', 'USA_WIND', 'year', 'month', 'day', 'NAME'];
  var rendered = "\n    Storm: ".concat(props['NAME'][0] + props['NAME'].slice(1).toLowerCase(), " <br>\n    Date: ").concat(props['month'], "/").concat(props['day'], "/").concat(props['year'], " <br>\n    Wind Speed: ").concat(props['USA_WIND'], " knots <br>\n  ");
  return rendered;
};
/* Legend Interactivity */


var legendButtonIds = {
  'named_storm': 'show-named-storms',
  'hurricane': 'show-minor-hurricanes',
  'major_hurricane': 'show-major-hurricanes'
};

var _loop = function _loop() {
  var key = _Object$keys[_i];
  var el = document.getElementById(legendButtonIds[key]);

  if (_config__WEBPACK_IMPORTED_MODULE_1__.config.stormTypes[key].active) {
    el.classList.add('active');
  }

  el.addEventListener('click', function () {
    el.classList.toggle('active');

    if (el.classList.contains('active')) {
      graph.stormTypes[key].active = true;
      graph.showBars(key);
      _util__WEBPACK_IMPORTED_MODULE_4__.showLegendBar(key);
    } else {
      graph.stormTypes[key].active = false;
      graph.hideBars(key);
      _util__WEBPACK_IMPORTED_MODULE_4__.hideLegendBar(key);
    }

    if (graph.yearActive) {
      var activeStormTypes = graph.getActiveStormTypes();

      if (activeStormTypes.length == 0) {
        layer.setWhere('1=0');
      } else {
        var lowestSpeedKey = activeStormTypes[0];
        var where = _util__WEBPACK_IMPORTED_MODULE_4__.whereFactory(graph.yearActive, graph.stormTypes[lowestSpeedKey]['where']);
        layer.setWhere(where);
        layer.setStyle(function (feature) {
          return _util__WEBPACK_IMPORTED_MODULE_4__.getLayerStyle(feature, graph.stormTypes);
        });
      }
    }
  });
};

for (var _i = 0, _Object$keys = Object.keys(legendButtonIds); _i < _Object$keys.length; _i++) {
  _loop();
}
/* Select Year Range */


var resetContext = function resetContext() {
  if (marker) {
    marker.remove();
    mapControlTrackInfo.getContainer().innerHTML = _config__WEBPACK_IMPORTED_MODULE_1__.config.stormTrackInfoCallToActionText;
  }

  if (graph.yearActive) {
    graph.yearActive = undefined;
    var selectedYearSpan = document.getElementById('selected-year');
    selectedYearSpan.innerHTML = '';
    layer.setWhere('1=0');
    mapControlCallToAction.getContainer().classList.remove('hidden');
  }
};

var selectedStartYear = graph.yearStart;
var selectedEndYear = graph.yearEnd;
var yearStartSelect = _util__WEBPACK_IMPORTED_MODULE_4__.setupYearSelect('start', selectedStartYear, minYear, maxYear);
var yearEndSelect = _util__WEBPACK_IMPORTED_MODULE_4__.setupYearSelect('end', selectedEndYear, minYear, maxYear);
yearStartSelect.addEventListener('change', function () {
  selectedStartYear = parseInt(yearStartSelect.value);
  if (graph.yearActive < selectedStartYear) resetContext();
  graph.updateYearStart(selectedStartYear);
  _util__WEBPACK_IMPORTED_MODULE_4__.setupYearSelect('end', selectedEndYear, selectedStartYear, graph.MAX_YEAR);
});
yearEndSelect.addEventListener('change', function () {
  selectedEndYear = parseInt(yearEndSelect.value);
  if (graph.yearActive > selectedEndYear) resetContext();
  graph.updateYearEnd(selectedEndYear);
  _util__WEBPACK_IMPORTED_MODULE_4__.setupYearSelect('start', selectedStartYear, graph.MIN_YEAR, selectedEndYear);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNuSyxPQUE1QjtBQUVBLElBQU0rTSxlQUFlLEdBQUdyTSxrREFBQSxDQUFxQixPQUFyQixFQUE4Qm1NLGlCQUE5QixFQUFpRGhELE9BQWpELEVBQTBEQyxPQUExRCxDQUF4QjtBQUNBLElBQU1rRCxhQUFhLEdBQUd0TSxrREFBQSxDQUFxQixLQUFyQixFQUE0Qm9NLGVBQTVCLEVBQTZDakQsT0FBN0MsRUFBc0RDLE9BQXRELENBQXRCO0FBRUFpRCxlQUFlLENBQUNULGdCQUFoQixDQUFpQyxRQUFqQyxFQUEyQyxZQUFZO0FBQ3JETyxFQUFBQSxpQkFBaUIsR0FBR3hMLFFBQVEsQ0FBQzBMLGVBQWUsQ0FBQ3ZJLEtBQWpCLENBQTVCO0FBQ0EsTUFBSTJGLEtBQUssQ0FBQ3pELFVBQU4sR0FBbUJtRyxpQkFBdkIsRUFBMENGLFlBQVk7QUFDdER4QyxFQUFBQSxLQUFLLENBQUM4QyxlQUFOLENBQXNCSixpQkFBdEI7QUFDQW5NLEVBQUFBLGtEQUFBLENBQXFCLEtBQXJCLEVBQTRCb00sZUFBNUIsRUFBNkNELGlCQUE3QyxFQUFnRTFDLEtBQUssQ0FBQ3JKLFFBQXRFO0FBQ0QsQ0FMRDtBQU9Ba00sYUFBYSxDQUFDVixnQkFBZCxDQUErQixRQUEvQixFQUF5QyxZQUFZO0FBQ25EUSxFQUFBQSxlQUFlLEdBQUd6TCxRQUFRLENBQUMyTCxhQUFhLENBQUN4SSxLQUFmLENBQTFCO0FBQ0EsTUFBSTJGLEtBQUssQ0FBQ3pELFVBQU4sR0FBbUJvRyxlQUF2QixFQUF3Q0gsWUFBWTtBQUNwRHhDLEVBQUFBLEtBQUssQ0FBQytDLGFBQU4sQ0FBb0JKLGVBQXBCO0FBQ0FwTSxFQUFBQSxrREFBQSxDQUFxQixPQUFyQixFQUE4Qm1NLGlCQUE5QixFQUFpRDFDLEtBQUssQ0FBQ3ZKLFFBQXZELEVBQWlFa00sZUFBakU7QUFDRCxDQUxELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIHRpdGxlOiAnTm9ydGggQXRsYW50aWMgV2VzdCBvZiA2MMKwVzogMTk1MC0yMDIwJyxcbiAgd2lkdGg6IDYwMCxcbiAgaGVpZ2h0OiA1MDAsXG4gIG1hcmdpbjogeyBsZWZ0OiA4MCwgcmlnaHQ6IDEwLCB0b3A6IDE1LCBib3R0b206IDYwIH0sXG4gIHllYXJTdGFydDogMTk1MCxcbiAgeWVhckVuZDogMjAyMCxcbiAgeUF4aXNUaXRsZTogJ1Ryb3BpY2FsIEN5Y2xvbmUgRGF5cyAocGVyIHllYXIpJyxcbiAgc3Rvcm1UeXBlczoge1xuICAgICduYW1lZF9zdG9ybSc6IHtcbiAgICAgICd3aGVyZSc6IFwiVVNBX1dJTkQ+PTM0IEFORCBCQVNJTiA9ICdOQSdcIixcbiAgICAgICdsYWJlbCc6ICdOYW1lZCBTdG9ybXMnLFxuICAgICAgJ3Rvb2x0aXAnOiAnTmFtZWQgU3Rvcm0gRGF5cycsXG4gICAgICAnbGVnZW5kX2xhYmVsJzogJ05hbWVkIFN0b3JtcyAoPj0gMzRrdCknLFxuICAgICAgJ2ZpbGwnOiAnI0M2REJFRicsXG4gICAgICAnYWN0aXZlJzogdHJ1ZVxuICAgIH0sXG4gICAgJ2h1cnJpY2FuZSc6IHtcbiAgICAgICd3aGVyZSc6IFwiVVNBX1dJTkQ+PTY0IEFORCBCQVNJTiA9ICdOQSdcIixcbiAgICAgICdsYWJlbCc6ICdIdXJyaWNhbmVzJyxcbiAgICAgICd0b29sdGlwJzogJ0h1cnJpY2FuZSBEYXlzJyxcbiAgICAgICdsZWdlbmRfbGFiZWwnOiAnSHVycmljYW5lcyAoPj02NGt0KScsXG4gICAgICAnZmlsbCc6ICcjNkJBRUQ2JyxcbiAgICAgICdhY3RpdmUnOiB0cnVlXG4gICAgfSxcbiAgICAnbWFqb3JfaHVycmljYW5lJzoge1xuICAgICAgJ3doZXJlJzogXCJVU0FfV0lORD49OTYgQU5EIEJBU0lOID0gJ05BJ1wiLFxuICAgICAgJ2xhYmVsJzogJ01ham9yIEh1cnJpY2FuZXMnLFxuICAgICAgJ3Rvb2x0aXAnOiAnTWFqb3IgSHVycmljYW5lIERheXMnLFxuICAgICAgJ2xlZ2VuZF9sYWJlbCc6ICdNYWpvciBIdXJyaWNhbmVzICg+PSA5Nmt0KScsXG4gICAgICAnZmlsbCc6ICcjMDg1MTlDJyxcbiAgICAgICdhY3RpdmUnOiB0cnVlXG4gICAgfVxuICB9LFxuICBzdG9ybVRyYWNrSW5mb0NhbGxUb0FjdGlvblRleHQ6ICdDbGljayBhIHN0b3JtIHRyYWNrIHRvIHZpZXcgZGV0YWlscyBoZXJlJyxcbiAgbWFwQ2FsbFRvQWN0aW9uVGV4dDogJ0NsaWNrIGEgYmFyIG9uIHRoZSBncmFwaCB0byBzZWUgc3Rvcm0gdHJhY2tzIGZvciB0aGUgeWVhcicsXG4gIC8vIFN0b3AgbGFiZWxsaW5nIGV2ZXJ5IHgtYXhpcyB0aWNrIGFmdGVyIHRoaXMgbWFueSBlbGVtZW50c1xuICBUSUNLX0xBQkVMX1RIUkVTSE9MRDogMzAsXG4gIC8vIE51bWJlciBvZiB0aWNrcyBiZXR3ZWVuIGxhYmVscyBvbmNlIFRJQ0tfTEFCRUxfVEhSRVNESE9MRCBpcyBtZXQgKGluY2x1c2l2ZSlcbiAgVElDS19MQUJFTF9TVEVQOiA1LFxuICAvLyBUaGVzZSBzaG91bGQgYmUgY29uc2lzdGVudCB3aXRoIHRoZSBDU1NcbiAgVE9PTFRJUF9IRUlHSFQ6IDYwLFxuICBUT09MVElQX1dJRFRIOiAxODBcbn1cblxuIiwiXG5leHBvcnQgY29uc3QgZGF0YSA9IHtcbiAgXCIxOTUwXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxMS41LFxuICAgIFwiaHVycmljYW5lXCI6IDM4LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNTkuNVxuICB9LFxuICBcIjE5NTFcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMjMuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0MS43NVxuICB9LFxuICBcIjE5NTJcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDIuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxNC4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI3XG4gIH0sXG4gIFwiMTk1M1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMy4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxNC4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQ0XG4gIH0sXG4gIFwiMTk1NFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNyxcbiAgICBcImh1cnJpY2FuZVwiOiAyMC41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDVcbiAgfSxcbiAgXCIxOTU1XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA4LjUsXG4gICAgXCJodXJyaWNhbmVcIjogMzMsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA1OS4yNVxuICB9LFxuICBcIjE5NTZcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMTAuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyOS41XG4gIH0sXG4gIFwiMTk1N1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMC41LFxuICAgIFwiaHVycmljYW5lXCI6IDUuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDIyLjc1XG4gIH0sXG4gIFwiMTk1OFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMy43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAxNi43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQxLjVcbiAgfSxcbiAgXCIxOTU5XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDEyLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMzYuMjVcbiAgfSxcbiAgXCIxOTYwXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA2Ljc1LFxuICAgIFwiaHVycmljYW5lXCI6IDEyLFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjdcbiAgfSxcbiAgXCIxOTYxXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxMy43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAyNC43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQ2LjI1XG4gIH0sXG4gIFwiMTk2MlwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMCxcbiAgICBcImh1cnJpY2FuZVwiOiAxMS4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI1Ljc1XG4gIH0sXG4gIFwiMTk2M1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMy43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAyMi43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDM1Ljc1XG4gIH0sXG4gIFwiMTk2NFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogOC43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAzMyxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDUzLjVcbiAgfSxcbiAgXCIxOTY1XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA2LjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDkuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyMVxuICB9LFxuICBcIjE5NjZcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDguNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMjUuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAzNi41XG4gIH0sXG4gIFwiMTk2N1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNS43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAxOC41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjguNzVcbiAgfSxcbiAgXCIxOTY4XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLFxuICAgIFwiaHVycmljYW5lXCI6IDcuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDIwLjVcbiAgfSxcbiAgXCIxOTY5XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA0Ljc1LFxuICAgIFwiaHVycmljYW5lXCI6IDI0LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0OS43NVxuICB9LFxuICBcIjE5NzBcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEsXG4gICAgXCJodXJyaWNhbmVcIjogNixcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDIwLjVcbiAgfSxcbiAgXCIxOTcxXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxLFxuICAgIFwiaHVycmljYW5lXCI6IDE3LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDYuMjVcbiAgfSxcbiAgXCIxOTcyXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLFxuICAgIFwiaHVycmljYW5lXCI6IDIuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxNy41XG4gIH0sXG4gIFwiMTk3M1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMCxcbiAgICBcImh1cnJpY2FuZVwiOiAzLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjAuNVxuICB9LFxuICBcIjE5NzRcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMC41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMzEuNzVcbiAgfSxcbiAgXCIxOTc1XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAyLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDExLjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyNVxuICB9LFxuICBcIjE5NzZcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMy43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDE1LjI1XG4gIH0sXG4gIFwiMTk3N1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMSxcbiAgICBcImh1cnJpY2FuZVwiOiA1LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTMuMjVcbiAgfSxcbiAgXCIxOTc4XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLFxuICAgIFwiaHVycmljYW5lXCI6IDgsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyMlxuICB9LFxuICBcIjE5NzlcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDQuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTEuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyOC4yNVxuICB9LFxuICBcIjE5ODBcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDYuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogOS41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjIuMjVcbiAgfSxcbiAgXCIxOTgxXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAyLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDExLFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMzZcbiAgfSxcbiAgXCIxOTgyXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLjc1LFxuICAgIFwiaHVycmljYW5lXCI6IDQsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxMVxuICB9LFxuICBcIjE5ODNcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMi4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDExLjI1XG4gIH0sXG4gIFwiMTk4NFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMC43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMS41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMzJcbiAgfSxcbiAgXCIxOTg1XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA0LFxuICAgIFwiaHVycmljYW5lXCI6IDE4LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDEuNVxuICB9LFxuICBcIjE5ODZcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAsXG4gICAgXCJodXJyaWNhbmVcIjogMi4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDEyLjc1XG4gIH0sXG4gIFwiMTk4N1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMC41LFxuICAgIFwiaHVycmljYW5lXCI6IDIuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxMi41XG4gIH0sXG4gIFwiMTk4OFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNi41LFxuICAgIFwiaHVycmljYW5lXCI6IDEyLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjguNVxuICB9LFxuICBcIjE5ODlcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMi41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjZcbiAgfSxcbiAgXCIxOTkwXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLFxuICAgIFwiaHVycmljYW5lXCI6IDkuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyNS41XG4gIH0sXG4gIFwiMTk5MVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMS4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiA3LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTQuNVxuICB9LFxuICBcIjE5OTJcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuNSxcbiAgICBcImh1cnJpY2FuZVwiOiA1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTdcbiAgfSxcbiAgXCIxOTkzXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLjc1LFxuICAgIFwiaHVycmljYW5lXCI6IDcuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDIwLjI1XG4gIH0sXG4gIFwiMTk5NFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMCxcbiAgICBcImh1cnJpY2FuZVwiOiAxLFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTZcbiAgfSxcbiAgXCIxOTk1XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA3LjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDM0LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA2M1xuICB9LFxuICBcIjE5OTZcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDkuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMjkuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDUwXG4gIH0sXG4gIFwiMTk5N1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMS43NSxcbiAgICBcImh1cnJpY2FuZVwiOiA1LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxOFxuICB9LFxuICBcIjE5OThcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDgsXG4gICAgXCJodXJyaWNhbmVcIjogMjcuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQyLjVcbiAgfSxcbiAgXCIxOTk5XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA3LjUsXG4gICAgXCJodXJyaWNhbmVcIjogMjYuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0N1xuICB9LFxuICBcIjIwMDBcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTAsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAzMC4yNVxuICB9LFxuICBcIjIwMDFcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMTUuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0MlxuICB9LFxuICBcIjIwMDJcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMsXG4gICAgXCJodXJyaWNhbmVcIjogOC43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQyLjI1XG4gIH0sXG4gIFwiMjAwM1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNy41LFxuICAgIFwiaHVycmljYW5lXCI6IDE0LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0MC41XG4gIH0sXG4gIFwiMjAwNFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMTQsXG4gICAgXCJodXJyaWNhbmVcIjogMjYuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA1MS41XG4gIH0sXG4gIFwiMjAwNVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMTcuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMzcuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA4Mi4yNVxuICB9LFxuICBcIjIwMDZcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAsXG4gICAgXCJodXJyaWNhbmVcIjogMy43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDIxLjI1XG4gIH0sXG4gIFwiMjAwN1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNixcbiAgICBcImh1cnJpY2FuZVwiOiAxMC41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjUuMjVcbiAgfSxcbiAgXCIyMDA4XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA1LjUsXG4gICAgXCJodXJyaWNhbmVcIjogMjMuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA2NC43NVxuICB9LFxuICBcIjIwMDlcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogNS43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDEzLjI1XG4gIH0sXG4gIFwiMjAxMFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNC4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAyMSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDUxLjc1XG4gIH0sXG4gIFwiMjAxMVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNC41LFxuICAgIFwiaHVycmljYW5lXCI6IDE5LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNjBcbiAgfSxcbiAgXCIyMDEyXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDEyLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDhcbiAgfSxcbiAgXCIyMDEzXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLFxuICAgIFwiaHVycmljYW5lXCI6IDEuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDE0XG4gIH0sXG4gIFwiMjAxNFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMy4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMixcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI0LjI1XG4gIH0sXG4gIFwiMjAxNVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMy41LFxuICAgIFwiaHVycmljYW5lXCI6IDcuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxOS43NVxuICB9LFxuICBcIjIwMTZcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDguNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMTYuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0Mi41XG4gIH0sXG4gIFwiMjAxN1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMTIuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMzIuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA1OS43NVxuICB9LFxuICBcIjIwMThcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDQsXG4gICAgXCJodXJyaWNhbmVcIjogOSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI0LjI1XG4gIH0sXG4gIFwiMjAxOVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNi4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxNC4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDM5LjI1XG4gIH0sXG4gIFwiMjAyMFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNS41LFxuICAgIFwiaHVycmljYW5lXCI6IDI4LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogODFcbiAgfVxufVxuXG4iLCJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJ1xuXG5leHBvcnQgY2xhc3MgR3JhcGgge1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZywgZGF0YSkge1xuICAgIHRoaXMuTUlOX1lFQVIgPSB1dGlsLmdldE1pblllYXIoZGF0YSlcbiAgICB0aGlzLk1BWF9ZRUFSID0gdXRpbC5nZXRNYXhZZWFyKGRhdGEpXG4gICAgdGhpcy5USUNLX0xBQkVMX1RIUkVTSE9MRCA9IGNvbmZpZy5USUNLX0xBQkVMX1RIUkVTSE9MRFxuICAgIHRoaXMuVElDS19MQUJFTF9TVEVQID0gY29uZmlnLlRJQ0tfTEFCRUxfU1RFUFxuICAgIHRoaXMuVE9PTFRJUF9XSURUSCA9IGNvbmZpZy5UT09MVElQX1dJRFRIXG4gICAgdGhpcy5UT09MVElQX0hFSUdIVCA9IGNvbmZpZy5UT09MVElQX0hFSUdIVFxuXG4gICAgdGhpcy5kYXRhID0gZGF0YVxuICAgIHRoaXMudGl0bGUgPSBjb25maWcudGl0bGVcbiAgICB0aGlzLnlBeGlzVGl0bGUgPSBjb25maWcueUF4aXNUaXRsZVxuICAgIHRoaXMueWVhcnMgPSBPYmplY3Qua2V5cyhkYXRhKS5tYXAoZCA9PiBwYXJzZUludChkKSlcbiAgICB0aGlzLnllYXJTdGFydCA9IGNvbmZpZy55ZWFyU3RhcnRcbiAgICB0aGlzLnllYXJFbmQgPSBjb25maWcueWVhckVuZFxuICAgIHRoaXMuc3Rvcm1UeXBlcyA9IGNvbmZpZy5zdG9ybVR5cGVzXG4gICAgdGhpcy5tYXJnaW4gPSBjb25maWcubWFyZ2luXG4gICAgdGhpcy53aWR0aCA9IGNvbmZpZy53aWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gY29uZmlnLmhlaWdodFxuICAgIHRoaXMucGxvdCA9IHRoaXMuaW5pdFBsb3QoKVxuICAgIHRoaXMuZGF0YXNldHMgPSB0aGlzLmluaXREYXRhc2V0cyhPYmplY3Qua2V5cyhjb25maWcuc3Rvcm1UeXBlcykpXG4gICAgdGhpcy54ID0gdGhpcy5pbml0WFNjYWxlKClcbiAgICB0aGlzLnkgPSB0aGlzLmluaXRZU2NhbGUoKVxuXG4gICAgLy8gSW5zZXJ0IFNWRyBlbGVtZW50c1xuXG4gICAgLy8gU1ZHIGVsZW1lbnRzIGFyZSBwYWludGVkIGluIHRoZSBvcmRlciB0aGV5IGFyZSBpbnNlcnRlZCxcbiAgICAvLyBzbyB3ZSBhZGQgdGhlIGF4ZXMgYW5kIHRvb2x0aXBzIGxhc3Qgc28gdGhleSBzaG93IHVwIG92ZXIgdGhlIGJhcnNcbiAgICAvLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL1NWRzExL3JlbmRlci5odG1sI1JlbmRlcmluZ09yZGVyXG5cbiAgICAvLyBJbml0aWFsaXplIGRhdGEgYmFycyB3aXRoIHplcm8gaGVpZ2h0XG4gICAgT2JqZWN0LmtleXMoY29uZmlnLnN0b3JtVHlwZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHRoaXMuaW5pdEJhcnMoa2V5KVxuICAgIH0pXG5cbiAgICAvLyBEcmF3IHRoZSBheGVzXG4gICAgdGhpcy54QXhpcyA9IHRoaXMuYXBwZW5kWEF4aXMoKVxuICAgIHRoaXMuaW5pdFhBeGlzKClcbiAgICB0aGlzLnNldFlBeGlzVGl0bGUoKVxuICAgIHRoaXMueUF4aXMgPSB0aGlzLmluaXRZQXhpcygpXG5cbiAgICAvLyBEcmF3IHRoZSB0b29sdGlwc1xuICAgIE9iamVjdC5rZXlzKGNvbmZpZy5zdG9ybVR5cGVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICB0aGlzLmluaXRUb29sdGlwcyhrZXkpXG4gICAgfSlcblxuICAgIC8vIFNob3cgdGhlIGJhcnMgZm9yIGluaXRpYWxseSBhY3RpdmF0ZWQgc3Rvcm0gdHlwZXNcbiAgICBjb25zdCBpbml0U3Rvcm1UeXBlcyA9IE9iamVjdC5rZXlzKHRoaXMuc3Rvcm1UeXBlcykuZmlsdGVyKGtleSA9PiB0aGlzLnN0b3JtVHlwZXNba2V5XS5hY3RpdmUpXG4gICAgaW5pdFN0b3JtVHlwZXMuZm9yRWFjaChrZXkgPT4gdGhpcy5zaG93QmFycyhrZXkpKVxuXG4gIH1cblxuICBzZXRZQXhpc1RpdGxlKCkge1xuICAgIHRoaXMucGxvdC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2lkJywgJ3ktYXhpcy10aXRsZScpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHJvdGF0ZSgtOTApIHRyYW5zbGF0ZSgtJHt0aGlzLmhlaWdodC81fSwgMzApYClcbiAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLmh0bWwodGhpcy55QXhpc1RpdGxlKVxuICB9XG5cbiAgaW5pdFBsb3QoKSB7XG4gICAgcmV0dXJuIGQzLnNlbGVjdCgnI2dyYXBoJylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMud2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JywgdGhpcy5oZWlnaHQpXG4gIH1cblxuICBnZXRYRG9tYWluKCkge1xuICAgIHJldHVybiBbLi4uQXJyYXkodGhpcy55ZWFyRW5kLXRoaXMueWVhclN0YXJ0KzEpLmtleXMoKV0ubWFwKGQgPT4gZCt0aGlzLnllYXJTdGFydClcbiAgfVxuXG4gIGluaXRYU2NhbGUoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlQmFuZCgpXG4gICAgICAuZG9tYWluKHRoaXMuZ2V0WERvbWFpbigpKVxuICAgICAgLnJhbmdlKFt0aGlzLm1hcmdpbi5sZWZ0LCB0aGlzLndpZHRoIC0gdGhpcy5tYXJnaW4ucmlnaHRdKVxuICB9XG5cbiAgaW5pdFlTY2FsZSgpIHtcbiAgICByZXR1cm4gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLmRvbWFpbihbMCwgdGhpcy5jYWxjTWF4KCldKVxuICAgICAgLnJhbmdlKFt0aGlzLmhlaWdodCAtIHRoaXMubWFyZ2luLmJvdHRvbSwgdGhpcy5tYXJnaW4udG9wXSlcbiAgfVxuXG4gIGFwcGVuZFhBeGlzKCkge1xuICAgIHJldHVybiB0aGlzLnBsb3QuYXBwZW5kKCdnJykgIFxuICAgICAgLmF0dHIoJ2lkJywgJ3gtYXhpcycpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCAke3RoaXMuaGVpZ2h0IC0gdGhpcy5tYXJnaW4uYm90dG9tfSlgKVxuICB9XG5cbiAgcmVtb3ZlWEF4aXMoKSB7XG4gICAgZDMuc2VsZWN0KCcjeC1heGlzJykucmVtb3ZlKClcbiAgfVxuXG4gIGluaXRYQXhpcygpIHtcbiAgICB0aGlzLnhBeGlzLmNhbGwoZDMuYXhpc0JvdHRvbSh0aGlzLngpLnRpY2tTaXplT3V0ZXIoMCkpXG4gICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgICAuYXR0cignZHgnLCAnLS41ZW0nKVxuICAgICAgICAuYXR0cignZHknLCAnLjE1ZW0nKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3JvdGF0ZSgtNjUpJylcbiAgICAgICAgLmh0bWwoKGQsIGksIG5vZGVzKSA9PiB7XG4gICAgICAgICAgaWYgKG5vZGVzLmxlbmd0aCA+IHRoaXMuVElDS19MQUJFTF9USFJFU0hPTEQpIHtcbiAgICAgICAgICAgIGlmIChkICUgdGhpcy5USUNLX0xBQkVMX1NURVAgPT0gMCkgcmV0dXJuIGRcbiAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZFxuICAgICAgICB9KVxuICB9XG5cbiAgaW5pdFlBeGlzKCkge1xuICAgIHJldHVybiB0aGlzLnBsb3QuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7dGhpcy5tYXJnaW4ubGVmdH0sIDApYClcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHRoaXMueSkpXG4gIH1cblxuXG4gIGNhbGNBY3RpdmVZZWFycygpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5kYXRhKVxuICAgIGNvbnN0IHllYXJzID0gW11cbiAgICBmb3IgKGxldCBkIG9mIGtleXMpIHtcbiAgICAgIGNvbnN0IHlyID0gcGFyc2VJbnQoZClcbiAgICAgIGlmICh5ciA8IHRoaXMueWVhclN0YXJ0IHx8IHlyID4gdGhpcy55ZWFyRW5kKSBjb250aW51ZVxuICAgICAgeWVhcnMucHVzaCh5cilcbiAgICB9XG4gICAgcmV0dXJuIHllYXJzXG4gIH1cblxuICBpbml0RGF0YXNldHMoKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuc3Rvcm1UeXBlcykpIHtcbiAgICAgIGNvbnN0IGRhdGFzZXQgPSBbXVxuICAgICAgZm9yIChsZXQgeWVhciBvZiB0aGlzLnllYXJzKSB7XG4gICAgICAgIGRhdGFzZXQucHVzaCh7ICd5ZWFyJzogeWVhciwgJ3ZhbHVlJzogdGhpcy5kYXRhW1N0cmluZyh5ZWFyKV1ba2V5XSB9KVxuICAgICAgfVxuICAgICAgdGhpcy5zdG9ybVR5cGVzW2tleV0uZGF0YXNldCA9IGRhdGFzZXRcbiAgICB9XG4gIH1cblxuICBjYWxjTWF4KCkge1xuICAgIGxldCBtYXggPSAwXG4gICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuc3Rvcm1UeXBlcykpIHtcbiAgICAgIGZvciAobGV0IGQgb2YgdGhpcy5zdG9ybVR5cGVzW2tleV0uZGF0YXNldCkge1xuICAgICAgICBtYXggPSBkLnZhbHVlID4gbWF4ID8gZC52YWx1ZSA6IG1heFxuICAgICAgfVxuICAgIH1cbiAgICAvLyBSb3VuZCB1cCBieSAxMFxuICAgIHJldHVybiBwYXJzZUludChtYXggLyAxMCkgKiAxMCArIDEwXG4gIH1cblxuICBnZXRBY3RpdmVEYXRhKGtleSkge1xuICAgIHJldHVybiB0aGlzLnN0b3JtVHlwZXNba2V5XS5kYXRhc2V0LmZpbHRlcihkID0+IHtcbiAgICAgIHJldHVybiBkLnllYXIgPj0gdGhpcy55ZWFyU3RhcnQgJiYgZC55ZWFyIDw9IHRoaXMueWVhckVuZFxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVZZWFyU3RhcnQobmV3WWVhclN0YXJ0KSB7XG4gICAgdGhpcy55ZWFyU3RhcnQgPSBuZXdZZWFyU3RhcnRcbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICB1cGRhdGVZZWFyRW5kKG5ld1llYXJFbmQpIHtcbiAgICB0aGlzLnllYXJFbmQgPSBuZXdZZWFyRW5kXG4gICAgdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMueC5kb21haW4odGhpcy5nZXRYRG9tYWluKCkpXG4gICAgdGhpcy5yZW1vdmVUb29sdGlwcygpXG4gICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuc3Rvcm1UeXBlcykpIHtcbiAgICAgIHRoaXMucmVtb3ZlQmFycyhrZXkpXG4gICAgICB0aGlzLmluaXRCYXJzKGtleSlcbiAgICB9XG4gICAgZm9yIChsZXQga2V5IG9mIHRoaXMuZ2V0QWN0aXZlU3Rvcm1UeXBlcygpKSB7XG4gICAgICB0aGlzLnNob3dCYXJzKGtleSlcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVYQXhpcygpXG4gICAgdGhpcy54QXhpcyA9IHRoaXMuYXBwZW5kWEF4aXMoKVxuICAgIHRoaXMuaW5pdFhBeGlzKClcbiAgICB0aGlzLnlBeGlzID0gdGhpcy5pbml0WUF4aXMoKVxuICAgIC8vIEtlZXAgc2VwYXJhdGUgbG9vcCBmb3IgY29ycmVjdCBkcmF3aW5nIG9yZGVyXG4gICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuc3Rvcm1UeXBlcykpIHtcbiAgICAgIHRoaXMuaW5pdFRvb2x0aXBzKGtleSlcbiAgICB9XG4gIH1cblxuICBnZXRBY3RpdmVTdG9ybVR5cGVzKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnN0b3JtVHlwZXMpLmZpbHRlcihrZXkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuc3Rvcm1UeXBlc1trZXldLmFjdGl2ZVxuICAgIH0pXG4gIH1cblxuICBzZXRMYXllcihsYXllcikgeyB0aGlzLmxheWVyID0gbGF5ZXIgfVxuXG4gIGluaXRCYXJzKGtleSkge1xuICAgIGNvbnN0IGRhdGFzZXQgPSB0aGlzLmdldEFjdGl2ZURhdGEoa2V5KVxuICAgIGNvbnN0IGJhcnMgPSB0aGlzLnBsb3QuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdkYXRhLWJhcnMnKVxuICAgICAgLmF0dHIoJ2lkJywgYGRhdGEtYmFycy0tJHtrZXl9YClcbiAgICAgIC5zZWxlY3RBbGwoJ3JlY3QnKVxuICAgICAgICAuZGF0YShkYXRhc2V0KVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdiYXInKVxuICAgICAgICAgIC5hdHRyKCdkYXRhLXllYXInLCBkID0+IGQueWVhcilcbiAgICAgICAgICAuYXR0cignZGF0YS12YWx1ZScsIGQgPT4gZC52YWx1ZSlcblxuICAgIGJhcnMuYXR0cignaGVpZ2h0JywgMClcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgdGhpcy54LmJhbmR3aWR0aCgpKVxuICAgICAgICAuYXR0cigneCcsIGQgPT4gdGhpcy54KGQueWVhcikpXG4gICAgICAgIC5hdHRyKCd5JywgdGhpcy55KDApKVxuICAgICAgICAuYXR0cignZmlsbCcsIHRoaXMuc3Rvcm1UeXBlc1trZXldLmZpbGwpXG4gICAgICAgIC5vbignbW91c2VlbnRlcicsIGQgPT4ge1xuICAgICAgICAgIHRoaXMudG9nZ2xlVG9vbHRpcChrZXksIGQueWVhciwgdHJ1ZSlcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdjbGljaycsIGQgPT4ge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gZC55ZWFyIC0gdGhpcy55ZWFyU3RhcnRcbiAgICAgICAgICBjb25zdCBuc19kID0gdGhpcy5nZXRBY3RpdmVEYXRhKCduYW1lZF9zdG9ybScpW2luZGV4XVxuICAgICAgICAgIGNvbnN0IGhfZCA9IHRoaXMuZ2V0QWN0aXZlRGF0YSgnaHVycmljYW5lJylbaW5kZXhdXG4gICAgICAgICAgY29uc3QgbWhfZCA9IHRoaXMuZ2V0QWN0aXZlRGF0YSgnbWFqb3JfaHVycmljYW5lJylbaW5kZXhdXG4gICAgICAgICAgY29uc3QgbWFwQ2FsbFRvQWN0aW9uQ29udHJvbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAtY29udHJvbC1jYWxsLXRvLWFjdGlvbicpXG4gICAgICAgICAgbWFwQ2FsbFRvQWN0aW9uQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgIGNvbnN0IHRyYWNrSW5mb0NvbnRyb2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwLWNvbnRyb2wtdHJhY2staW5mbycpXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRZZWFyU3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RlZC15ZWFyJylcbiAgICAgICAgICBzZWxlY3RlZFllYXJTcGFuLmlubmVySFRNTCA9IGQueWVhclxuICAgICAgICAgIHRyYWNrSW5mb0NvbnRyb2wuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgICBjb25zdCB3aGVyZSA9IHV0aWwud2hlcmVGYWN0b3J5KGQueWVhciwgdGhpcy5zdG9ybVR5cGVzWyduYW1lZF9zdG9ybSddWyd3aGVyZSddKVxuICAgICAgICAgIHRoaXMubGF5ZXIuc2V0V2hlcmUod2hlcmUpXG4gICAgICAgICAgdGhpcy5sYXllci5zZXRTdHlsZShmZWF0dXJlID0+IHV0aWwuZ2V0TGF5ZXJTdHlsZShmZWF0dXJlLCB0aGlzLnN0b3JtVHlwZXMpKVxuICAgICAgICAgIHRoaXMueWVhckFjdGl2ZSA9IGQueWVhclxuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlb3V0JywgZCA9PiB7XG4gICAgICAgICAgLy90aGlzLmxheWVyLnNldFdoZXJlKCcxPTAnKVxuICAgICAgICAgIHRoaXMudG9nZ2xlVG9vbHRpcChrZXksIGQueWVhciwgZmFsc2UpXG4gICAgICAgIH0pXG5cbiAgICB0aGlzLnN0b3JtVHlwZXNba2V5XS5iYXJzID0gYmFyc1xuICB9XG5cbiAgY2FsY1Rvb2x0aXBYKGQpIHtcbiAgICBjb25zdCBub3JtYWwgPSB0aGlzLngoZC55ZWFyKSArIHRoaXMueC5iYW5kd2lkdGgoKVxuICAgIGlmIChub3JtYWwgKyB0aGlzLlRPT0xUSVBfV0lEVEggPCB0aGlzLngucmFuZ2UoKVsxXSkgcmV0dXJuIG5vcm1hbFxuICAgIHJldHVybiBub3JtYWwgLSB0aGlzLlRPT0xUSVBfV0lEVEggLSB0aGlzLnguYmFuZHdpZHRoKClcbiAgfVxuXG4gIGNhbGNUb29sdGlwWShkKSB7XG4gICAgY29uc3Qgbm9ybWFsID0gdGhpcy55KGQudmFsdWUpXG4gICAgY29uc3QgY3V0b2ZmID0gbm9ybWFsIC0gdGhpcy5UT09MVElQX0hFSUdIVFxuICAgIGlmIChjdXRvZmYgPCAwKSB7XG4gICAgICByZXR1cm4gbm9ybWFsICsgdGhpcy5UT09MVElQX0hFSUdIVC8zXG4gICAgfVxuICAgIHJldHVybiBub3JtYWxcbiAgfVxuXG4gIHJlbW92ZVRvb2x0aXBzKCkge1xuICAgIGQzLnNlbGVjdEFsbCgnLmRhdGEtdG9vbHRpcHMnKS5yZW1vdmUoKVxuICB9XG5cbiAgdG9nZ2xlVG9vbHRpcChrZXksIHllYXIsIHNob3dUb29sdGlwKSB7XG4gICAgZDMuc2VsZWN0KGAjZGF0YS10b29sdGlwLS0ke2tleX0tLSR7eWVhcn0tLXJlY3RgKVxuICAgICAgLmF0dHIoJ3N0eWxlJywgc2hvd1Rvb2x0aXAgPyAnJyA6ICdkaXNwbGF5OiBub25lJylcbiAgICAgIC5yYWlzZSgpXG4gICAgZDMuc2VsZWN0KGAjZGF0YS10b29sdGlwLS0ke2tleX0tLSR7eWVhcn0tLXRleHRgKVxuICAgICAgLmF0dHIoJ3N0eWxlJywgc2hvd1Rvb2x0aXAgPyAnJyA6ICdkaXNwbGF5OiBub25lJylcbiAgICAgIC5yYWlzZSgpXG4gIH1cblxuICBpbml0VG9vbHRpcHMoa2V5KSB7XG4gICAgY29uc3QgZGF0YXNldCA9IHRoaXMuZ2V0QWN0aXZlRGF0YShrZXkpXG4gICAgY29uc3QgdG9vbHRpcHMgPSB0aGlzLnBsb3QuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdkYXRhLXRvb2x0aXBzJylcbiAgICAgIC5hdHRyKCdpZCcsIGBkYXRhLXRvb2x0aXBzLS0ke2tleX1gKVxuICAgICAgLnNlbGVjdEFsbCgncmVjdCcpXG4gICAgICAgIC5kYXRhKGRhdGFzZXQpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgICAuYXR0cignaWQnLCBkID0+IGBkYXRhLXRvb2x0aXAtLSR7a2V5fS0tJHtkLnllYXJ9LS1yZWN0YClcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICd0b29sdGlwJylcbiAgICAgICAgICAgIC5hdHRyKCd4JywgZCA9PiB0aGlzLmNhbGNUb29sdGlwWChkKSlcbiAgICAgICAgICAgIC5hdHRyKCd5JywgZCA9PiB0aGlzLmNhbGNUb29sdGlwWShkKSAtIHRoaXMuVE9PTFRJUF9IRUlHSFQpXG4gICAgICAgICAgICAuYXR0cignc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKVxuICAgICAgICAgICAgLmF0dHIoJ2RhdGEteWVhcicsIGQgPT4gZC55ZWFyKVxuICAgICAgICAgICAgLmF0dHIoJ2RhdGEtdmFsdWUnLCBkID0+IGQudmFsdWUpXG4gICAgICAgICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXG4gICAgICAgICAgICAuYXR0cignc3Ryb2tlJywgdGhpcy5zdG9ybVR5cGVzW2tleV0uZmlsbClcbiAgICAgICAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAnMS41JylcblxuICAgIGNvbnN0IHRvb2x0aXBfdGV4dCA9IHRoaXMucGxvdC5zZWxlY3QoYCNkYXRhLXRvb2x0aXBzLS0ke2tleX1gKVxuICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5kYXRhKGRhdGFzZXQpXG4gICAgICAgICAgLmVudGVyKHRvb2x0aXBzKVxuICAgICAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYGRhdGEtdG9vbHRpcC0tJHtrZXl9LS0ke2QueWVhcn0tLXRleHRgKVxuICAgICAgICAgICAgICAuYXR0cignc3R5bGUnLCAnZGlzcGxheTogbm9uZScpXG4gICAgICAgICAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdzdGFydCcpXG4gICAgICAgICAgICAgIC5hdHRyKCd4JywgZCA9PiB0aGlzLmNhbGNUb29sdGlwWChkKSlcbiAgICAgICAgICAgICAgLmF0dHIoJ3knLCBkID0+IHRoaXMuY2FsY1Rvb2x0aXBZKGQpKVxuXG4gICAgY29uc3QgdGV4dF9tYXJnaW4gPSB7IGxlZnQ6IDgsIHRvcDogOCB9XG5cbiAgICB0b29sdGlwX3RleHQuYXBwZW5kKCd0c3BhbicpXG4gICAgICAuYXR0cigneCcsIGQgPT4gdGhpcy5jYWxjVG9vbHRpcFgoZCkgKyB0ZXh0X21hcmdpbi5sZWZ0KVxuICAgICAgLmF0dHIoJ3knLCBkID0+IHRoaXMuY2FsY1Rvb2x0aXBZKGQpIC0gdGhpcy5UT09MVElQX0hFSUdIVC8yIC0gdGV4dF9tYXJnaW4udG9wKVxuICAgICAgLmh0bWwoZCA9PiBgWWVhcjogJHtkLnllYXJ9YClcblxuICAgIHRvb2x0aXBfdGV4dC5hcHBlbmQoJ3RzcGFuJylcbiAgICAgIC5hdHRyKCd4JywgZCA9PiB0aGlzLmNhbGNUb29sdGlwWChkKSArIHRleHRfbWFyZ2luLmxlZnQpXG4gICAgICAuYXR0cigneScsIGQgPT4gdGhpcy5jYWxjVG9vbHRpcFkoZCkgLSB0aGlzLlRPT0xUSVBfSEVJR0hULzEyIC0gdGV4dF9tYXJnaW4udG9wKVxuICAgICAgLmh0bWwoZCA9PiBgJHt0aGlzLnN0b3JtVHlwZXNba2V5XS50b29sdGlwfTogJHtkLnZhbHVlfWApXG5cbiAgICB0aGlzLnN0b3JtVHlwZXNba2V5XS50b29sdGlwcyA9IHRvb2x0aXBzXG4gIH1cblxuICBzaG93QmFycyhrZXkpIHtcbiAgICB0aGlzLnN0b3JtVHlwZXNba2V5XS5iYXJzLnRyYW5zaXRpb24oMTAwMClcbiAgICAgIC5hdHRyKCd5JywgZCA9PiB0aGlzLnkoZC52YWx1ZSkpXG4gICAgICAuYXR0cignaGVpZ2h0JywgZCA9PiB0aGlzLnkoMCkgLSB0aGlzLnkoZC52YWx1ZSkpXG4gIH1cblxuICBoaWRlQmFycyhrZXkpIHtcbiAgICB0aGlzLnN0b3JtVHlwZXNba2V5XS5iYXJzLnRyYW5zaXRpb24oMTAwMClcbiAgICAgIC5hdHRyKCd5JywgZCA9PiB0aGlzLnkoMCkpXG4gICAgICAuYXR0cignaGVpZ2h0JywgMClcbiAgfVxuXG4gIHJlbW92ZUJhcnMoa2V5KSB7XG4gICAgdGhpcy5oaWRlQmFycyhrZXkpXG4gICAgdGhpcy5zdG9ybVR5cGVzW2tleV0uYmFycy5yZW1vdmUoKVxuICAgIHRoaXMuc3Rvcm1UeXBlc1trZXldLmJhcnMgPSBbXVxuICB9XG5cbn1cblxuIiwiaW1wb3J0ICogYXMgY29uZmlnIGZyb20gJy4vY29uZmlnJ1xuXG5leHBvcnQgY29uc3QgZ2V0TGF5ZXJTdHlsZSA9IChmZWF0dXJlLCBzdG9ybVR5cGVzKSAgPT4ge1xuICBsZXQgYztcbiAgbGV0IHByb3AgPSBmZWF0dXJlLnByb3BlcnRpZXMuVVNBX1dJTkRcbiAgaWYgKHN0b3JtVHlwZXNbJ25hbWVkX3N0b3JtJ10uYWN0aXZlICYmIHByb3AgPj0gMzQpIGMgPSBzdG9ybVR5cGVzWyduYW1lZF9zdG9ybSddWydmaWxsJ11cbiAgaWYgKHN0b3JtVHlwZXNbJ2h1cnJpY2FuZSddLmFjdGl2ZSAmJiBwcm9wID49IDY0KSBjID0gc3Rvcm1UeXBlc1snaHVycmljYW5lJ11bJ2ZpbGwnXVxuICBpZiAoc3Rvcm1UeXBlc1snbWFqb3JfaHVycmljYW5lJ10uYWN0aXZlICYmIHByb3AgPj0gOTYpIGMgPSBzdG9ybVR5cGVzWydtYWpvcl9odXJyaWNhbmUnXVsnZmlsbCddXG4gIHJldHVybiB7IGNvbG9yOiBjLCBvcGFjaXR5OiAxLCB3ZWlnaHQ6IDUgfVxufVxuXG5leHBvcnQgY29uc3Qgd2hlcmVGYWN0b3J5ID0gKHllYXIsIHN0b3JtV2hlcmUpID0+IGBZRUFSPSR7eWVhcn0gQU5EICR7c3Rvcm1XaGVyZX1gXG5cbmNvbnN0IGdldExlZ2VuZEJhcklkID0ga2V5ID0+IGAke2tleS5yZXBsYWNlKCdfJywgJy0nKX0tbGVnZW5kLWJhcmBcbmNvbnN0IGdldExlZ2VuZE1ldHJpY0lkID0ga2V5ID0+IGAke2tleS5yZXBsYWNlKCdfJywgJy0nKX0tc2VsZWN0ZWQteWVhci1tZXRyaWNgXG5cbmNvbnN0IHNldExlZ2VuZE1ldHJpYyA9IChrZXksIHZhbCkgPT4ge1xuICBjb25zdCBpZCA9IGdldExlZ2VuZE1ldHJpY0lkKGtleSlcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcbiAgZWwuaW5uZXJIVE1MID0gdmFsXG59XG5cbmV4cG9ydCBjb25zdCBhZGRNYXBDb250cm9sRXZlbnRMaXN0ZW5lcnMgPSBlbCA9PiB7XG4gIEwuRG9tRXZlbnQuZGlzYWJsZUNsaWNrUHJvcGFnYXRpb24oZWwpXG59XG5cbmV4cG9ydCBjb25zdCBzZXRMZWdlbmRNZXRyaWNzID0gKG5zX3ZhbCwgaF92YWwsIG1oX3ZhbCkgPT4ge1xuICBzZXRMZWdlbmRNZXRyaWMoJ25hbWVkX3N0b3JtJywgbnNfdmFsKVxuICBzZXRMZWdlbmRNZXRyaWMoJ2h1cnJpY2FuZScsIGhfdmFsKVxuICBzZXRMZWdlbmRNZXRyaWMoJ21ham9yX2h1cnJpY2FuZScsIG1oX3ZhbClcbn1cblxuZXhwb3J0IGNvbnN0IGhpZGVMZWdlbmRCYXIgPSBrZXkgPT4ge1xuICBjb25zdCBpZCA9IGAjJHtnZXRMZWdlbmRCYXJJZChrZXkpfWBcbiAgY29uc3QgZWwgPSBkMy5zZWxlY3QoaWQpXG4gIGVsLm5vZGUoKS5kYXRhc2V0LmhlaWdodCA9IGVsLmF0dHIoJ2hlaWdodCcpXG4gIGVsLnRyYW5zaXRpb24oNTAwKVxuICAgIC5hdHRyKCdoZWlnaHQnLCAwKVxufVxuXG5leHBvcnQgY29uc3Qgc2hvd0xlZ2VuZEJhciA9IGtleSA9PiB7XG4gIGNvbnN0IGlkID0gYCMke2dldExlZ2VuZEJhcklkKGtleSl9YFxuICBjb25zdCBlbCA9IGQzLnNlbGVjdChpZClcbiAgZWwudHJhbnNpdGlvbig1MDApXG4gICAgLmF0dHIoJ2hlaWdodCcsIGVsLm5vZGUoKS5kYXRhc2V0LmhlaWdodClcbn1cblxuZXhwb3J0IGNvbnN0IGdldE1heFllYXIgPSAoZGF0YSkgPT4ge1xuICBsZXQgbWF4ID0gMFxuICBmb3IgKGxldCBrIG9mIE9iamVjdC5rZXlzKGRhdGEpKSB7XG4gICAgayA9IHBhcnNlSW50KGspXG4gICAgaWYgKGsgPiBtYXgpIHsgbWF4ID0gayB9XG4gIH1cbiAgcmV0dXJuIG1heFxufVxuXG5leHBvcnQgY29uc3QgZ2V0TWluWWVhciA9IChkYXRhKSA9PiB7XG4gIGxldCBtaW4gPSAxMDAwMFxuICBmb3IgKGxldCBrIG9mIE9iamVjdC5rZXlzKGRhdGEpKSB7XG4gICAgayA9IHBhcnNlSW50KGspXG4gICAgaWYgKGsgPCBtaW4pIHsgbWluID0gayB9XG4gIH1cbiAgcmV0dXJuIG1pblxufVxuXG5leHBvcnQgY29uc3Qgb3B0aW9uRmFjdG9yeSA9IGZ1bmN0aW9uICh2YWx1ZSwgaW5uZXJIVE1MKSB7XG4gICAgdmFyIG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdC52YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgb3B0LmlubmVySFRNTCA9IFN0cmluZyhpbm5lckhUTUwpO1xuICAgIHJldHVybiBvcHQ7XG59XG5cblxuY29uc3QgcmVtb3ZlQ2hpbGROb2RlcyA9IChwYXJlbnQpID0+IHtcbiAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXR1cFllYXJTZWxlY3QgPSAobGFiZWwsIHllYXJTZWxlY3RlZCwgbWluWWVhciwgbWF4WWVhcikgPT4ge1xuICBjb25zdCB5ZWFyU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHllYXItJHtsYWJlbH0tc2VsZWN0YClcbiAgcmVtb3ZlQ2hpbGROb2Rlcyh5ZWFyU2VsZWN0KVxuICBsZXQgc2VsZWN0ZWRJbmRleDtcbiAgbGV0IGluZGV4ID0gMDtcbiAgZm9yICh2YXIgeSA9IG1pblllYXI7IHk8PW1heFllYXI7IHkrKyl7XG4gICAgICBpZiAocGFyc2VJbnQoeWVhclNlbGVjdGVkKSA9PSB5KSB7IHNlbGVjdGVkSW5kZXggPSBpbmRleCB9XG4gICAgICB5ZWFyU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkZhY3RvcnkoU3RyaW5nKHkpLCBTdHJpbmcoeSkpKVxuICAgICAgaW5kZXgrKztcbiAgfVxuICB5ZWFyU2VsZWN0Lm9wdGlvbnMuc2VsZWN0ZWRJbmRleD1zZWxlY3RlZEluZGV4XG4gIHJldHVybiB5ZWFyU2VsZWN0XG59XG5cblxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBDb250YWluZXJzICovXFxuXFxuI2dyYXBoLXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDEuNmVtO1xcbn1cXG4jdHJvcGljYWwtY3ljbG9uZS1kYXlzLXdyYXBwZXIge1xcbiAgICB3aWR0aDogMTIwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsIE5hcnJvdywgc2VyaWY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xcbn1cXG4uZmxleC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5mbGV4LWNvbHVtbiB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi8qIE1hcCAqL1xcblxcbiNtYXAtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xcbn1cXG4jbWFwIHtcXG4gICAgaGVpZ2h0OiA5NyU7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4vKiogTWFwIENvbnRyb2xzICoqL1xcblxcbi5tYXAtY29udHJvbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBsaW5lLWhlaWdodDogMS42O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwgTmFycm93LCBzZXJpZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4jbWFwLWNvbnRyb2wtdHJhY2staW5mbyB7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1zaXplOiAxZW07XFxufVxcbiNtYXAtY29udHJvbC1jYWxsLXRvLWFjdGlvbiB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMyJTtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBHcmFwaCAqL1xcblxcbi5kYXRhLXRvb2x0aXBzIC50b29sdGlwIHtcXG4gICAgLypcXG4gICAgICBOb3RlOiBpbiBvcmRlciBmb3IgdG9vbHRpcHMgdG8gZm9ybWF0IGNvcnJlY3RseSxcXG4gICAgICBUT09MVElQX0hFSUdIVCBhbmQgVE9PTFRJUF9XSURUSCBuZWVkIHRvIGJlIGlkZW50aWNhbFxcbiAgICAgIHRvIHRoZSB2YWx1ZXMgc2V0IGJlbG93IChzZWUgY29uZmlnLmpzKS5cXG4gICAgKi9cXG4gICAgd2lkdGg6IDE4MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcbi50aWNrIHRleHQge1xcbiAgICBmaWxsOiAjNTk1OTU5O1xcbn1cXG4jeS1heGlzLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuI3Bsb3QgLnRpY2sge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG5cXG4vKiBDb250cm9scyAqL1xcblxcbiNtZW51LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIC8qanVzdGlmeS1jb250ZW50OiByaWdodDsqL1xcbn1cXG4jbWVudSBkaXYge1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcbiNjb250cm9scy1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qKiBMZWdlbmQgKiovXFxuXFxuI2xlZ2VuZC1jb250YWluZXIgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbiNsZWdlbmQtY29udGFpbmVyIHN2ZyB7XFxuICAgIHdpZHRoOiAyMjBweDtcXG59XFxuI3Nob3ctc3Rvcm0tdHlwZXMge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiA5cHg7XFxuICAgIGxlZnQ6IDRweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDc1cHg7XFxufVxcbiNzaG93LXN0b3JtLXR5cGVzIGlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBib3JkZXItd2lkdGg6IC41cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjYuNHB4O1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxufVxcbiNzaG93LXN0b3JtLXR5cGVzIGlucHV0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcXG59XFxuI3Nob3ctc3Rvcm0tdHlwZXMgaW5wdXQuYWN0aXZlIHtcXG4gICAgY29sb3I6ICNlOGVhZWI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZWE2YWI7XFxufVxcbiNzaG93LXN0b3JtLXR5cGVzIGlucHV0LmFjdGl2ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MzliYTA7XFxufVxcbi5zZWxlY3RlZC15ZWFyLXN0b3JtLW1ldHJpY3Mge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcbi5zZWxlY3RlZC15ZWFyLXN0b3JtLW1ldHJpY3MgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbn1cXG5cXG4vKiogU2VsZWN0IFllYXJzICoqL1xcblxcbiN5ZWFyLXNlbGVjdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xcbn1cXG4jeWVhci1zZWxlY3QgPiBkaXYge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuI3llYXItc2VsZWN0IC5sYWJlbCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDMzcHg7XFxufVxcbiN5ZWFyLXNlbGVjdCBzZWxlY3Qge1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDFweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbnN2ZyAuYmFyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBMZWdlbmQgU1ZHICovXFxuXFxuLmNscy0xIHtcXG4gIGZpbGw6ICMwYjUzOWQ7XFxufVxcbi5jbHMtMiB7XFxuICBmaWxsOiAjNmJhZWQ2O1xcbn1cXG4uY2xzLTMge1xcbiAgZmlsbDogI2M3ZGJlZTtcXG59XFxuLmNscy00LCAuY2xzLTUsIC5jbHMtOCB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjMDEwMTAxO1xcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcbiAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwO1xcbiAgc3Ryb2tlLXdpZHRoOiAwLjVweDtcXG59XFxuLmNscy01IHtcXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDMuMiAzLjI7XFxufVxcbi5jbHMtNiB7XFxuICBmb250LXNpemU6IDhweDtcXG4gIGZpbGw6ICMwMTAxMDE7XFxuICBmb250LWZhbWlseTogQXJpYWxOYXJyb3csIEFyaWFsIE5hcnJvdztcXG59XFxuLmNscy03IHtcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNmVtO1xcbn1cXG4uY2xzLTgge1xcbiAgc3Ryb2tlLWRhc2hhcnJheTogMy4yIDMuMjtcXG59XFxuXFxuXFxuLyogSGVscGVycyAqL1xcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGVBQWU7O0FBRWY7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsY0FBYztJQUNkLGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7QUFDZDs7QUFFQSxRQUFROztBQUVSO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7O0FBRUEsbUJBQW1COztBQUVuQjtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQSxVQUFVOztBQUVWO0lBQ0k7Ozs7S0FJQztJQUNELFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBR0EsYUFBYTs7QUFFYjtJQUNJLFVBQVU7SUFDViwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBLGFBQWE7O0FBRWI7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBLG1CQUFtQjs7QUFFbkI7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBLGVBQWU7O0FBRWY7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7O0FBR0EsWUFBWTs7QUFFWjtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ29udGFpbmVycyAqL1xcblxcbiNncmFwaC10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgZm9udC1zaXplOiAxLjZlbTtcXG59XFxuI3Ryb3BpY2FsLWN5Y2xvbmUtZGF5cy13cmFwcGVyIHtcXG4gICAgd2lkdGg6IDEyMDBweDtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgcGFkZGluZy10b3A6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCBOYXJyb3csIHNlcmlmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcXG59XFxuLmZsZXgtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uZmxleC1jb2x1bW4ge1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4vKiBNYXAgKi9cXG5cXG4jbWFwLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcXG59XFxuI21hcCB7XFxuICAgIGhlaWdodDogOTclO1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLyoqIE1hcCBDb250cm9scyAqKi9cXG5cXG4ubWFwLWNvbnRyb2wge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsIE5hcnJvdywgc2VyaWY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuI21hcC1jb250cm9sLXRyYWNrLWluZm8ge1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG4jbWFwLWNvbnRyb2wtY2FsbC10by1hY3Rpb24ge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMiU7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS44ZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogR3JhcGggKi9cXG5cXG4uZGF0YS10b29sdGlwcyAudG9vbHRpcCB7XFxuICAgIC8qXFxuICAgICAgTm90ZTogaW4gb3JkZXIgZm9yIHRvb2x0aXBzIHRvIGZvcm1hdCBjb3JyZWN0bHksXFxuICAgICAgVE9PTFRJUF9IRUlHSFQgYW5kIFRPT0xUSVBfV0lEVEggbmVlZCB0byBiZSBpZGVudGljYWxcXG4gICAgICB0byB0aGUgdmFsdWVzIHNldCBiZWxvdyAoc2VlIGNvbmZpZy5qcykuXFxuICAgICovXFxuICAgIHdpZHRoOiAxODBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG4udGljayB0ZXh0IHtcXG4gICAgZmlsbDogIzU5NTk1OTtcXG59XFxuI3ktYXhpcy10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxufVxcbiNwbG90IC50aWNrIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuXFxuLyogQ29udHJvbHMgKi9cXG5cXG4jbWVudS1jb250YWluZXIge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICAvKmp1c3RpZnktY29udGVudDogcmlnaHQ7Ki9cXG59XFxuI21lbnUgZGl2IHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG4jY29udHJvbHMtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKiogTGVnZW5kICoqL1xcblxcbiNsZWdlbmQtY29udGFpbmVyID4gZGl2IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4jbGVnZW5kLWNvbnRhaW5lciBzdmcge1xcbiAgICB3aWR0aDogMjIwcHg7XFxufVxcbiNzaG93LXN0b3JtLXR5cGVzIHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogOXB4O1xcbiAgICBsZWZ0OiA0cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xcbn1cXG4jc2hvdy1zdG9ybS10eXBlcyBpbnB1dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYm9yZGVyLXdpZHRoOiAuNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDI2LjRweDtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbn1cXG4jc2hvdy1zdG9ybS10eXBlcyBpbnB1dDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxufVxcbiNzaG93LXN0b3JtLXR5cGVzIGlucHV0LmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjZThlYWViO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWVhNmFiO1xcbn1cXG4jc2hvdy1zdG9ybS10eXBlcyBpbnB1dC5hY3RpdmU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTM5YmEwO1xcbn1cXG4uc2VsZWN0ZWQteWVhci1zdG9ybS1tZXRyaWNzIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG4uc2VsZWN0ZWQteWVhci1zdG9ybS1tZXRyaWNzID4gZGl2IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMzJweDtcXG59XFxuXFxuLyoqIFNlbGVjdCBZZWFycyAqKi9cXG5cXG4jeWVhci1zZWxlY3Qge1xcbiAgICBtYXJnaW4tbGVmdDogODBweDtcXG59XFxuI3llYXItc2VsZWN0ID4gZGl2IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbiN5ZWFyLXNlbGVjdCAubGFiZWwge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAzM3B4O1xcbn1cXG4jeWVhci1zZWxlY3Qgc2VsZWN0IHtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiAxcHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5zdmcgLmJhciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogTGVnZW5kIFNWRyAqL1xcblxcbi5jbHMtMSB7XFxuICBmaWxsOiAjMGI1MzlkO1xcbn1cXG4uY2xzLTIge1xcbiAgZmlsbDogIzZiYWVkNjtcXG59XFxuLmNscy0zIHtcXG4gIGZpbGw6ICNjN2RiZWU7XFxufVxcbi5jbHMtNCwgLmNscy01LCAuY2xzLTgge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogIzAxMDEwMTtcXG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXG4gIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcXG4gIHN0cm9rZS13aWR0aDogMC41cHg7XFxufVxcbi5jbHMtNSB7XFxuICBzdHJva2UtZGFzaGFycmF5OiAzLjIgMy4yO1xcbn1cXG4uY2xzLTYge1xcbiAgZm9udC1zaXplOiA4cHg7XFxuICBmaWxsOiAjMDEwMTAxO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsTmFycm93LCBBcmlhbCBOYXJyb3c7XFxufVxcbi5jbHMtNyB7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMDZlbTtcXG59XFxuLmNscy04IHtcXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDMuMiAzLjI7XFxufVxcblxcblxcbi8qIEhlbHBlcnMgKi9cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbmltcG9ydCAnLi9pbmRleC5jc3MnXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZydcbmltcG9ydCB7IGRhdGEgfSAgZnJvbSAnLi9kYXRhJ1xuaW1wb3J0IHsgR3JhcGggfSBmcm9tICcuL2dyYXBoJ1xuXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCdcblxuY29uc3QgbWluWWVhciA9IHV0aWwuZ2V0TWluWWVhcihkYXRhKVxuY29uc3QgbWF4WWVhciA9IHV0aWwuZ2V0TWF4WWVhcihkYXRhKVxuXG5jb25zdCBncmFwaCA9IG5ldyBHcmFwaChjb25maWcsIGRhdGEpXG5cbi8qIE1hcCAqL1xuXG5jb25zdCBmaXRCb3VuZHMgPSBbXG4gIHtsYXQ6IDUwLjAsIGxuZzogLTYwfSxcbiAge2xhdDogNSwgbG5nOiAtMTAwfVxuXVxuY29uc3QgbWFwID0gTC5tYXAoJ21hcCcpLmZpdEJvdW5kcyhmaXRCb3VuZHMpXG5cbi8vIFRPRE8gbW92ZSB0aGlzXG5jb25zdCBhcGlLZXkgPSBcIkFBUEsxNjAxZWVkZjA4MGE0YjA1Yjc2YzBjNWRlNzAyNDM3Y194Z1l5MEVYUGNqR08yZU13RzRFVTUwY3V0dHUzTHNtMURRM1VCZ0lFSW5XOUxKTmZtdUJVTVlkeEllaS1jalVcIjtcbmNvbnN0IGJhc2VtYXAgPSBMLmVzcmkuVmVjdG9yLnZlY3RvckJhc2VtYXBMYXllcignQXJjR0lTOkRhcmtHcmF5JywgeyBhcGlLZXk6IGFwaUtleSB9KVxuYmFzZW1hcC5hZGRUbyhtYXApXG5cbmNvbnN0IE1hcENvbnRyb2xDYWxsVG9BY3Rpb24gPSBMLkNvbnRyb2wuZXh0ZW5kKHtcbiAgb3B0aW9uczoge1xuICAgIHBvc2l0aW9uOiAnYm90dG9tcmlnaHQnXG4gIH0sXG4gIG9uQWRkOiBmdW5jdGlvbiAobWFwKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGVsLmlkID0gJ21hcC1jb250cm9sLWNhbGwtdG8tYWN0aW9uJ1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2xlYWZsZXQtY2VudGVyJywgJ21hcC1jb250cm9sJylcbiAgICBlbC5pbm5lckhUTUwgPSBjb25maWcubWFwQ2FsbFRvQWN0aW9uVGV4dFxuICAgIHV0aWwuYWRkTWFwQ29udHJvbEV2ZW50TGlzdGVuZXJzKGVsKVxuICAgIHJldHVybiBlbFxuICB9XG59KVxuXG5jb25zdCBNYXBDb250cm9sVHJhY2tJbmZvID0gTC5Db250cm9sLmV4dGVuZCh7XG4gIG9wdGlvbnM6IHtcbiAgICBwb3NpdGlvbjogJ3RvcHJpZ2h0J1xuICB9LFxuICBvbkFkZDogZnVuY3Rpb24gKG1hcCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBlbC5pZCA9ICdtYXAtY29udHJvbC10cmFjay1pbmZvJ1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoJ21hcC1jb250cm9sJywgJ2hpZGRlbicpXG4gICAgZWwuaW5uZXJIVE1MID0gY29uZmlnLnN0b3JtVHJhY2tJbmZvQ2FsbFRvQWN0aW9uVGV4dFxuICAgIHV0aWwuYWRkTWFwQ29udHJvbEV2ZW50TGlzdGVuZXJzKGVsKVxuICAgIHJldHVybiBlbFxuICB9XG59KVxuXG5jb25zdCBtYXBDb250cm9sQ2FsbFRvQWN0aW9uID0gbmV3IE1hcENvbnRyb2xDYWxsVG9BY3Rpb24oKVxuY29uc3QgbWFwQ29udHJvbFRyYWNrSW5mbyA9IG5ldyBNYXBDb250cm9sVHJhY2tJbmZvKClcbm1hcC5hZGRDb250cm9sKG1hcENvbnRyb2xDYWxsVG9BY3Rpb24pXG5tYXAuYWRkQ29udHJvbChtYXBDb250cm9sVHJhY2tJbmZvKVxuXG5cbi8qIFN0b3JtIFRyYWNrcyBNYXAgTGF5ZXIgKi9cblxubGV0IGxheWVyID0gTC5lc3JpLmZlYXR1cmVMYXllcih7XG4gIHVybDogJ2h0dHBzOi8vc2VydmljZXMyLmFyY2dpcy5jb20vRmlhUEE0Z2EwaVFLZHV2My9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9JQlRyQUNTX0FMTF9saXN0X3YwNHIwMF9saW5lc18xL0ZlYXR1cmVTZXJ2ZXIvMCcsXG4gIHN0eWxlOiBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgIC8vaWYgKCFmKSB7IGYgPSBmZWF0dXJlOyAgY29uc29sZS5sb2coZmVhdHVyZSkgfVxuICAgIGxldCBjO1xuICAgIGxldCBwcm9wID0gZmVhdHVyZS5wcm9wZXJ0aWVzLlVTQV9XSU5EXG4gICAgaWYgKHByb3AgPCA2NCAmJiBwcm9wID49IDM0KSB7IGMgPSBjb25maWcuc3Rvcm1UeXBlc1snbmFtZWRfc3Rvcm0nXVsnZmlsbCddIH1cbiAgICBpZiAocHJvcCA+PSA2NCAmJiBwcm9wIDwgOTYpIHsgYyA9IGNvbmZpZy5zdG9ybVR5cGVzWydodXJyaWNhbmUnXVsnZmlsbCddIH1cbiAgICBpZiAocHJvcCA+PSA5NikgeyBjID0gY29uZmlnLnN0b3JtVHlwZXNbJ21ham9yX2h1cnJpY2FuZSddWydmaWxsJ10gfTtcbiAgICBpZiAoIWMpIHsgYyA9ICd3aGl0ZScgfVxuICAgIHJldHVybiB7IGNvbG9yOiBjLCBvcGFjaXR5OiAxLCB3ZWlnaHQ6IDggfVxuICB9LFxuICB3aGVyZTogJzE9MCdcbn0pLmFkZFRvKG1hcClcblxuZ3JhcGguc2V0TGF5ZXIobGF5ZXIpXG5cbi8qIE1hcCBNYXJrZXIgKi9cblxubGV0IG1hcmtlclxuXG5sYXllci5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKG1hcmtlcikgeyBtYXJrZXIucmVtb3ZlKCkgfVxuICBtYXJrZXIgPSBMLmNpcmNsZShldmVudC5sYXRsbmcsIHsgd2VpZ2h0OiA4LCBjb2xvcjogJ3JlZCd9KVxuICBtYXJrZXIuYWRkVG8obWFwKVxuICBtYXBDb250cm9sVHJhY2tJbmZvLmdldENvbnRhaW5lcigpLmlubmVySFRNTCA9IHJlbmRlckZlYXR1cmUoZXZlbnQubGF5ZXIuZmVhdHVyZSlcbn0pXG5cbmNvbnN0IHJlbmRlckZlYXR1cmUgPSBmID0+IHtcbiAgY29uc3QgcHJvcHMgPSBmLnByb3BlcnRpZXNcbiAgY29uc3QgZGlzcGxheV9wcm9wcyA9IFsgJ0xBVCcsICdMT04nLCAnVVNBX1dJTkQnLCAneWVhcicsICdtb250aCcsICdkYXknLCAnTkFNRScgXVxuICBjb25zdCByZW5kZXJlZCA9IGBcbiAgICBTdG9ybTogJHsgcHJvcHNbJ05BTUUnXVswXSArIHByb3BzWydOQU1FJ10uc2xpY2UoMSkudG9Mb3dlckNhc2UoKSB9IDxicj5cbiAgICBEYXRlOiAke3Byb3BzWydtb250aCddfS8ke3Byb3BzWydkYXknXX0vJHtwcm9wc1sneWVhciddfSA8YnI+XG4gICAgV2luZCBTcGVlZDogJHtwcm9wc1snVVNBX1dJTkQnXX0ga25vdHMgPGJyPlxuICBgXG4gIHJldHVybiByZW5kZXJlZFxufVxuXG5cbi8qIExlZ2VuZCBJbnRlcmFjdGl2aXR5ICovXG5cbmNvbnN0IGxlZ2VuZEJ1dHRvbklkcyA9IHtcbiAgJ25hbWVkX3N0b3JtJzogJ3Nob3ctbmFtZWQtc3Rvcm1zJyxcbiAgJ2h1cnJpY2FuZSc6ICdzaG93LW1pbm9yLWh1cnJpY2FuZXMnLFxuICAnbWFqb3JfaHVycmljYW5lJzogJ3Nob3ctbWFqb3ItaHVycmljYW5lcydcbn1cblxuZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGxlZ2VuZEJ1dHRvbklkcykpIHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsZWdlbmRCdXR0b25JZHNba2V5XSlcbiAgaWYgKGNvbmZpZy5zdG9ybVR5cGVzW2tleV0uYWN0aXZlKSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgfVxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBncmFwaC5zdG9ybVR5cGVzW2tleV0uYWN0aXZlID0gdHJ1ZVxuICAgICAgZ3JhcGguc2hvd0JhcnMoa2V5KVxuICAgICAgdXRpbC5zaG93TGVnZW5kQmFyKGtleSlcbiAgICB9IGVsc2Uge1xuICAgICAgZ3JhcGguc3Rvcm1UeXBlc1trZXldLmFjdGl2ZSA9IGZhbHNlXG4gICAgICBncmFwaC5oaWRlQmFycyhrZXkpXG4gICAgICB1dGlsLmhpZGVMZWdlbmRCYXIoa2V5KVxuICAgIH1cbiAgICBpZiAoZ3JhcGgueWVhckFjdGl2ZSkge1xuICAgICAgY29uc3QgYWN0aXZlU3Rvcm1UeXBlcyA9IGdyYXBoLmdldEFjdGl2ZVN0b3JtVHlwZXMoKVxuICAgICAgaWYgKGFjdGl2ZVN0b3JtVHlwZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgbGF5ZXIuc2V0V2hlcmUoJzE9MCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBsb3dlc3RTcGVlZEtleSA9IGFjdGl2ZVN0b3JtVHlwZXNbMF1cbiAgICAgICAgY29uc3Qgd2hlcmUgPSB1dGlsLndoZXJlRmFjdG9yeShncmFwaC55ZWFyQWN0aXZlLCBncmFwaC5zdG9ybVR5cGVzW2xvd2VzdFNwZWVkS2V5XVsnd2hlcmUnXSlcbiAgICAgICAgbGF5ZXIuc2V0V2hlcmUod2hlcmUpXG4gICAgICAgIGxheWVyLnNldFN0eWxlKGZlYXR1cmUgPT4gdXRpbC5nZXRMYXllclN0eWxlKGZlYXR1cmUsIGdyYXBoLnN0b3JtVHlwZXMpKVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuLyogU2VsZWN0IFllYXIgUmFuZ2UgKi9cblxuY29uc3QgcmVzZXRDb250ZXh0ID0gKCkgPT4ge1xuICBpZiAobWFya2VyKSB7XG4gICAgbWFya2VyLnJlbW92ZSgpXG4gICAgbWFwQ29udHJvbFRyYWNrSW5mby5nZXRDb250YWluZXIoKS5pbm5lckhUTUwgPSBjb25maWcuc3Rvcm1UcmFja0luZm9DYWxsVG9BY3Rpb25UZXh0XG4gIH1cbiAgaWYgKGdyYXBoLnllYXJBY3RpdmUpIHtcbiAgICBncmFwaC55ZWFyQWN0aXZlID0gdW5kZWZpbmVkXG4gICAgY29uc3Qgc2VsZWN0ZWRZZWFyU3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RlZC15ZWFyJylcbiAgICBzZWxlY3RlZFllYXJTcGFuLmlubmVySFRNTCA9ICcnXG4gICAgbGF5ZXIuc2V0V2hlcmUoJzE9MCcpXG4gICAgbWFwQ29udHJvbENhbGxUb0FjdGlvbi5nZXRDb250YWluZXIoKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICB9XG59XG5cbmxldCBzZWxlY3RlZFN0YXJ0WWVhciA9IGdyYXBoLnllYXJTdGFydFxubGV0IHNlbGVjdGVkRW5kWWVhciA9IGdyYXBoLnllYXJFbmRcblxuY29uc3QgeWVhclN0YXJ0U2VsZWN0ID0gdXRpbC5zZXR1cFllYXJTZWxlY3QoJ3N0YXJ0Jywgc2VsZWN0ZWRTdGFydFllYXIsIG1pblllYXIsIG1heFllYXIpXG5jb25zdCB5ZWFyRW5kU2VsZWN0ID0gdXRpbC5zZXR1cFllYXJTZWxlY3QoJ2VuZCcsIHNlbGVjdGVkRW5kWWVhciwgbWluWWVhciwgbWF4WWVhcilcblxueWVhclN0YXJ0U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgc2VsZWN0ZWRTdGFydFllYXIgPSBwYXJzZUludCh5ZWFyU3RhcnRTZWxlY3QudmFsdWUpXG4gIGlmIChncmFwaC55ZWFyQWN0aXZlIDwgc2VsZWN0ZWRTdGFydFllYXIpIHJlc2V0Q29udGV4dCgpXG4gIGdyYXBoLnVwZGF0ZVllYXJTdGFydChzZWxlY3RlZFN0YXJ0WWVhcilcbiAgdXRpbC5zZXR1cFllYXJTZWxlY3QoJ2VuZCcsIHNlbGVjdGVkRW5kWWVhciwgc2VsZWN0ZWRTdGFydFllYXIsIGdyYXBoLk1BWF9ZRUFSKVxufSlcblxueWVhckVuZFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gIHNlbGVjdGVkRW5kWWVhciA9IHBhcnNlSW50KHllYXJFbmRTZWxlY3QudmFsdWUpXG4gIGlmIChncmFwaC55ZWFyQWN0aXZlID4gc2VsZWN0ZWRFbmRZZWFyKSByZXNldENvbnRleHQoKVxuICBncmFwaC51cGRhdGVZZWFyRW5kKHNlbGVjdGVkRW5kWWVhcilcbiAgdXRpbC5zZXR1cFllYXJTZWxlY3QoJ3N0YXJ0Jywgc2VsZWN0ZWRTdGFydFllYXIsIGdyYXBoLk1JTl9ZRUFSLCBzZWxlY3RlZEVuZFllYXIpXG59KVxuIl0sIm5hbWVzIjpbImNvbmZpZyIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJ5ZWFyU3RhcnQiLCJ5ZWFyRW5kIiwieUF4aXNUaXRsZSIsInN0b3JtVHlwZXMiLCJzdG9ybVRyYWNrSW5mb0NhbGxUb0FjdGlvblRleHQiLCJtYXBDYWxsVG9BY3Rpb25UZXh0IiwiVElDS19MQUJFTF9USFJFU0hPTEQiLCJUSUNLX0xBQkVMX1NURVAiLCJUT09MVElQX0hFSUdIVCIsIlRPT0xUSVBfV0lEVEgiLCJkYXRhIiwidXRpbCIsIkdyYXBoIiwiTUlOX1lFQVIiLCJnZXRNaW5ZZWFyIiwiTUFYX1lFQVIiLCJnZXRNYXhZZWFyIiwieWVhcnMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiZCIsInBhcnNlSW50IiwicGxvdCIsImluaXRQbG90IiwiZGF0YXNldHMiLCJpbml0RGF0YXNldHMiLCJ4IiwiaW5pdFhTY2FsZSIsInkiLCJpbml0WVNjYWxlIiwiZm9yRWFjaCIsImtleSIsImluaXRCYXJzIiwieEF4aXMiLCJhcHBlbmRYQXhpcyIsImluaXRYQXhpcyIsInNldFlBeGlzVGl0bGUiLCJ5QXhpcyIsImluaXRZQXhpcyIsImluaXRUb29sdGlwcyIsImluaXRTdG9ybVR5cGVzIiwiZmlsdGVyIiwiYWN0aXZlIiwic2hvd0JhcnMiLCJhcHBlbmQiLCJhdHRyIiwiaHRtbCIsImQzIiwic2VsZWN0IiwiQXJyYXkiLCJzY2FsZUJhbmQiLCJkb21haW4iLCJnZXRYRG9tYWluIiwicmFuZ2UiLCJzY2FsZUxpbmVhciIsImNhbGNNYXgiLCJyZW1vdmUiLCJjYWxsIiwiYXhpc0JvdHRvbSIsInRpY2tTaXplT3V0ZXIiLCJzZWxlY3RBbGwiLCJzdHlsZSIsImkiLCJub2RlcyIsImxlbmd0aCIsImF4aXNMZWZ0IiwieXIiLCJwdXNoIiwiZGF0YXNldCIsInllYXIiLCJTdHJpbmciLCJtYXgiLCJ2YWx1ZSIsIm5ld1llYXJTdGFydCIsInVwZGF0ZSIsIm5ld1llYXJFbmQiLCJyZW1vdmVUb29sdGlwcyIsInJlbW92ZUJhcnMiLCJnZXRBY3RpdmVTdG9ybVR5cGVzIiwicmVtb3ZlWEF4aXMiLCJsYXllciIsImdldEFjdGl2ZURhdGEiLCJiYXJzIiwiZW50ZXIiLCJiYW5kd2lkdGgiLCJmaWxsIiwib24iLCJ0b2dnbGVUb29sdGlwIiwiaW5kZXgiLCJuc19kIiwiaF9kIiwibWhfZCIsIm1hcENhbGxUb0FjdGlvbkNvbnRyb2wiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwidHJhY2tJbmZvQ29udHJvbCIsInNlbGVjdGVkWWVhclNwYW4iLCJpbm5lckhUTUwiLCJ3aGVyZSIsIndoZXJlRmFjdG9yeSIsInNldFdoZXJlIiwic2V0U3R5bGUiLCJmZWF0dXJlIiwiZ2V0TGF5ZXJTdHlsZSIsInllYXJBY3RpdmUiLCJub3JtYWwiLCJjdXRvZmYiLCJzaG93VG9vbHRpcCIsInJhaXNlIiwidG9vbHRpcHMiLCJjYWxjVG9vbHRpcFgiLCJjYWxjVG9vbHRpcFkiLCJ0b29sdGlwX3RleHQiLCJ0ZXh0X21hcmdpbiIsInRvb2x0aXAiLCJ0cmFuc2l0aW9uIiwiaGlkZUJhcnMiLCJjIiwicHJvcCIsInByb3BlcnRpZXMiLCJVU0FfV0lORCIsImNvbG9yIiwib3BhY2l0eSIsIndlaWdodCIsInN0b3JtV2hlcmUiLCJnZXRMZWdlbmRCYXJJZCIsInJlcGxhY2UiLCJnZXRMZWdlbmRNZXRyaWNJZCIsInNldExlZ2VuZE1ldHJpYyIsInZhbCIsImlkIiwiZWwiLCJhZGRNYXBDb250cm9sRXZlbnRMaXN0ZW5lcnMiLCJMIiwiRG9tRXZlbnQiLCJkaXNhYmxlQ2xpY2tQcm9wYWdhdGlvbiIsInNldExlZ2VuZE1ldHJpY3MiLCJuc192YWwiLCJoX3ZhbCIsIm1oX3ZhbCIsImhpZGVMZWdlbmRCYXIiLCJub2RlIiwic2hvd0xlZ2VuZEJhciIsImsiLCJtaW4iLCJvcHRpb25GYWN0b3J5Iiwib3B0IiwiY3JlYXRlRWxlbWVudCIsInJlbW92ZUNoaWxkTm9kZXMiLCJwYXJlbnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJzZXR1cFllYXJTZWxlY3QiLCJsYWJlbCIsInllYXJTZWxlY3RlZCIsIm1pblllYXIiLCJtYXhZZWFyIiwieWVhclNlbGVjdCIsInNlbGVjdGVkSW5kZXgiLCJhcHBlbmRDaGlsZCIsIm9wdGlvbnMiLCJncmFwaCIsImZpdEJvdW5kcyIsImxhdCIsImxuZyIsImFwaUtleSIsImJhc2VtYXAiLCJlc3JpIiwiVmVjdG9yIiwidmVjdG9yQmFzZW1hcExheWVyIiwiYWRkVG8iLCJNYXBDb250cm9sQ2FsbFRvQWN0aW9uIiwiQ29udHJvbCIsImV4dGVuZCIsInBvc2l0aW9uIiwib25BZGQiLCJNYXBDb250cm9sVHJhY2tJbmZvIiwibWFwQ29udHJvbENhbGxUb0FjdGlvbiIsIm1hcENvbnRyb2xUcmFja0luZm8iLCJhZGRDb250cm9sIiwiZmVhdHVyZUxheWVyIiwidXJsIiwic2V0TGF5ZXIiLCJtYXJrZXIiLCJldmVudCIsImNpcmNsZSIsImxhdGxuZyIsImdldENvbnRhaW5lciIsInJlbmRlckZlYXR1cmUiLCJmIiwicHJvcHMiLCJkaXNwbGF5X3Byb3BzIiwicmVuZGVyZWQiLCJzbGljZSIsInRvTG93ZXJDYXNlIiwibGVnZW5kQnV0dG9uSWRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZSIsImNvbnRhaW5zIiwiYWN0aXZlU3Rvcm1UeXBlcyIsImxvd2VzdFNwZWVkS2V5IiwicmVzZXRDb250ZXh0IiwidW5kZWZpbmVkIiwic2VsZWN0ZWRTdGFydFllYXIiLCJzZWxlY3RlZEVuZFllYXIiLCJ5ZWFyU3RhcnRTZWxlY3QiLCJ5ZWFyRW5kU2VsZWN0IiwidXBkYXRlWWVhclN0YXJ0IiwidXBkYXRlWWVhckVuZCJdLCJzb3VyY2VSb290IjoiIn0=