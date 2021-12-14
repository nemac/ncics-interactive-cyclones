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
  // Stop labelling every x-axis tick after this many elements
  TICK_LABEL_THRESHOLD: 30,
  // Number of ticks between labels once TICK_LABEL_THRESDHOLD is met (inclusive)
  TICK_LABEL_STEP: 5,
  // These should be consistent with the CSS
  TOOLTIP_HEIGHT: 85,
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

        var trackInfoControl = document.getElementById('track-info-map-control');
        var selectedYearSpan = document.getElementById('selected-year');
        selectedYearSpan.innerHTML = d.year;
        trackInfoControl.innerHTML = "\n            <div>Year: ".concat(d.year, "</div>\n          ");

        if (key == 'named_storm') {
          trackInfoControl.innerHTML += "\n              <div>Named Storm Days: ".concat(ns_d.value, "</div>\n              <div>Hurricane Days: ").concat(h_d.value, "</div>\n              <div>Major Hurricane Days: ").concat(mh_d.value, "</div>\n            ");
        }

        if (key == 'hurricane') {
          trackInfoControl.innerHTML += "\n              <div>Hurricane Days: ".concat(h_d.value, "</div>\n              <div>Major Hurricane Days: ").concat(mh_d.value, "</div>\n            ");
        }

        if (key == 'major_hurricane') {
          trackInfoControl.innerHTML += "\n              <div>Major Hurricane Days: ".concat(mh_d.value, "</div>\n            ");
        }

        trackInfoControl.classList.remove('hidden');
        var where = _util__WEBPACK_IMPORTED_MODULE_0__.whereFactory(d.year, _this6.stormTypes[key]['where']);

        _this6.layer.setWhere(where);

        _this6.layer.setStyle(function (feature) {
          var c;
          var prop = feature.properties.USA_WIND;
          if (prop < 64 && prop >= 34) c = _this6.stormTypes['named_storm']['fill'];
          if (prop >= 64 && prop < 96) c = _this6.stormTypes['hurricane']['fill'];
          if (prop >= 96) c = _this6.stormTypes['major_hurricane']['fill'];

          if (!c) {
            c = 'white';
          }

          return {
            color: c,
            opacity: 1,
            weight: 5
          };
        });
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
    value: function calcTooltipY(d) {// TODO
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
        return _this7.y(d.value) - _this7.TOOLTIP_HEIGHT;
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
        return _this7.y(d.value);
      });
      var text_margin = {
        left: 8,
        top: 8
      };
      tooltip_text.append('tspan').attr('x', function (d) {
        return _this7.calcTooltipX(d) + text_margin.left;
      }).attr('y', function (d) {
        return _this7.y(d.value) - _this7.TOOLTIP_HEIGHT / 1.5 - text_margin.top;
      }).html(function (d) {
        return "Year: ".concat(d.year);
      });
      tooltip_text.append('tspan').attr('x', function (d) {
        return _this7.calcTooltipX(d) + text_margin.left;
      }).attr('y', function (d) {
        return _this7.y(d.value) - _this7.TOOLTIP_HEIGHT / 2.8 - text_margin.top;
      }).html(function (d) {
        return "".concat(_this7.stormTypes[key].tooltip, ": ").concat(d.value);
      });
      tooltip_text.append('tspan').attr('x', function (d) {
        return _this7.calcTooltipX(d) + text_margin.left;
      }).attr('y', function (d) {
        return _this7.y(d.value) - _this7.TOOLTIP_HEIGHT / 15 - text_margin.top;
      }).attr('style', 'font-style: italic').html('Click to analyze storm tracks');
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
/* harmony export */   "whereFactory": () => (/* binding */ whereFactory),
/* harmony export */   "hideLegendBar": () => (/* binding */ hideLegendBar),
/* harmony export */   "showLegendBar": () => (/* binding */ showLegendBar),
/* harmony export */   "getMaxYear": () => (/* binding */ getMaxYear),
/* harmony export */   "getMinYear": () => (/* binding */ getMinYear),
/* harmony export */   "optionFactory": () => (/* binding */ optionFactory),
/* harmony export */   "setupYearSelect": () => (/* binding */ setupYearSelect)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");

var whereFactory = function whereFactory(year, stormWhere) {
  return "YEAR=".concat(year, " AND ").concat(stormWhere);
};

var getLegendBarId = function getLegendBarId(key) {
  return "".concat(key.replace('_', '-'), "-legend-bar");
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
___CSS_LOADER_EXPORT___.push([module.id, "\n\n/* Containers */\n\n#tropical-cyclone-days-wrapper {\n    font-family: Arial Narrow, serif;\n    margin-top: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0;\n    width: 1200px;\n}\n\n.flex-container {\n    display: flex;\n    flex-direction: row;\n    position: relative;\n}\n\n.flex-column {\n    width: 50%;\n}\n\n/* Map */\n\n#map-container {\n    height: 100%;\n    padding-left: 1%;\n}\n\n#map-info {\n}\n\n#map {\n    height: 100%;\n    width: 95%;\n    border: 1px solid black;\n}\n\n/** Map Controls **/\n\n#track-info-map-control {\n    background-color: white;\n    padding: 15px;\n    line-height: 1.6;\n    font-family: Arial Narrow, serif;\n    font-size: 1.2em;\n    border: 1px solid black;\n    border-radius: 10px;\n}\n\n#track-info-map-control.hidden {\n    display: none;\n}\n\n/* Graph */\n\n#graph-container {\n}\n\n.data-tooltips .tooltip {\n    width: 180px;\n    height: 85px;\n    font-size: 1.5em;\n}\n\n.tick text {\n    fill: #595959;\n}\n\n#y-axis-title {\n    font-size: 1.3em;\n}\n\n#plot .tick {\n    font-size: 1.5em;\n}\n\n#graph-container {\n}\n\n#graph-title {\n    height: 100px;\n    font-weight: normal;\n    text-align: center;\n}\n\n/* Controls */\n\n#menu-container {\n    width: 50%;\n    /*justify-content: right;*/\n}\n\n#menu div {\n    margin: 10px;\n}\n\n#controls-container {\n    flex-direction: column;\n    display: flex;\n    position: relative;\n}\n\n/** Legend **/\n\n#legend-container div {\n    display: inline-block;\n}\n\n#legend-container svg {\n    width: 220px;\n}\n\n#show-storm-types {\n    width: 120px;\n    position: relative;\n    bottom: 9px;\n    left: 4px;\n    margin-left: 75px;\n}\n\n#show-storm-types input {\n    border-radius: 3px;\n    border-width: .5px;\n    cursor: pointer;\n    width: 100%;\n    height: 26.4px;\n    padding: 3px;\n    background-color: #efefef;\n}\n\n#show-storm-types input:hover {\n    background-color: #e5e5e5;\n}\n\n#show-storm-types input.active {\n    color: #e8eaeb;\n    background-color: #9ea6ab;\n}\n\n#show-storm-types input.active:hover {\n    background-color: #939ba0;\n}\n\n/** Select Years **/\n\n#year-select {\n    margin-left: 80px;\n}\n\n#year-select > div {\n    margin-right: 15px;\n    display: inline-block;\n}\n\n#year-select .label {\n    display: inline-block;\n    width: 33px;\n}\n\n#year-select select {\n    font-size: inherit;\n    padding: 1px;\n    text-align: right;\n}\n\nsvg .bar {\n    cursor: pointer;\n}\n\n/* Legend SVG */\n\n      .cls-1 {\n        fill: #0b539d;\n      }\n\n      .cls-2 {\n        fill: #6baed6;\n      }\n\n      .cls-3 {\n        fill: #c7dbee;\n      }\n\n      .cls-4, .cls-5, .cls-8 {\n        fill: none;\n        stroke: #010101;\n        stroke-linecap: round;\n        stroke-miterlimit: 10;\n        stroke-width: 0.5px;\n      }\n\n      .cls-5 {\n        stroke-dasharray: 3.2 3.2;\n      }\n\n      .cls-6 {\n        font-size: 8px;\n        fill: #010101;\n        font-family: ArialNarrow, Arial Narrow;\n      }\n\n      .cls-7 {\n        letter-spacing: -0.06em;\n      }\n\n      .cls-8 {\n        stroke-dasharray: 3.2 3.2;\n      }\n\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":";;AAEA,eAAe;;AAEf;IACI,gCAAgC;IAChC,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;IACV,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,UAAU;AACd;;AAEA,QAAQ;;AAER;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA;AACA;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,uBAAuB;AAC3B;;AAEA,mBAAmB;;AAEnB;IACI,uBAAuB;IACvB,aAAa;IACb,gBAAgB;IAChB,gCAAgC;IAChC,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA,UAAU;;AAEV;AACA;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;AACA;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA,aAAa;;AAEb;IACI,UAAU;IACV,0BAA0B;AAC9B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,kBAAkB;AACtB;;AAEA,aAAa;;AAEb;IACI,qBAAqB;AACzB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,WAAW;IACX,cAAc;IACd,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA,mBAAmB;;AAEnB;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;IACrB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA,eAAe;;MAET;QACE,aAAa;MACf;;MAEA;QACE,aAAa;MACf;;MAEA;QACE,aAAa;MACf;;MAEA;QACE,UAAU;QACV,eAAe;QACf,qBAAqB;QACrB,qBAAqB;QACrB,mBAAmB;MACrB;;MAEA;QACE,yBAAyB;MAC3B;;MAEA;QACE,cAAc;QACd,aAAa;QACb,sCAAsC;MACxC;;MAEA;QACE,uBAAuB;MACzB;;MAEA;QACE,yBAAyB;MAC3B","sourcesContent":["\n\n/* Containers */\n\n#tropical-cyclone-days-wrapper {\n    font-family: Arial Narrow, serif;\n    margin-top: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0;\n    width: 1200px;\n}\n\n.flex-container {\n    display: flex;\n    flex-direction: row;\n    position: relative;\n}\n\n.flex-column {\n    width: 50%;\n}\n\n/* Map */\n\n#map-container {\n    height: 100%;\n    padding-left: 1%;\n}\n\n#map-info {\n}\n\n#map {\n    height: 100%;\n    width: 95%;\n    border: 1px solid black;\n}\n\n/** Map Controls **/\n\n#track-info-map-control {\n    background-color: white;\n    padding: 15px;\n    line-height: 1.6;\n    font-family: Arial Narrow, serif;\n    font-size: 1.2em;\n    border: 1px solid black;\n    border-radius: 10px;\n}\n\n#track-info-map-control.hidden {\n    display: none;\n}\n\n/* Graph */\n\n#graph-container {\n}\n\n.data-tooltips .tooltip {\n    width: 180px;\n    height: 85px;\n    font-size: 1.5em;\n}\n\n.tick text {\n    fill: #595959;\n}\n\n#y-axis-title {\n    font-size: 1.3em;\n}\n\n#plot .tick {\n    font-size: 1.5em;\n}\n\n#graph-container {\n}\n\n#graph-title {\n    height: 100px;\n    font-weight: normal;\n    text-align: center;\n}\n\n/* Controls */\n\n#menu-container {\n    width: 50%;\n    /*justify-content: right;*/\n}\n\n#menu div {\n    margin: 10px;\n}\n\n#controls-container {\n    flex-direction: column;\n    display: flex;\n    position: relative;\n}\n\n/** Legend **/\n\n#legend-container div {\n    display: inline-block;\n}\n\n#legend-container svg {\n    width: 220px;\n}\n\n#show-storm-types {\n    width: 120px;\n    position: relative;\n    bottom: 9px;\n    left: 4px;\n    margin-left: 75px;\n}\n\n#show-storm-types input {\n    border-radius: 3px;\n    border-width: .5px;\n    cursor: pointer;\n    width: 100%;\n    height: 26.4px;\n    padding: 3px;\n    background-color: #efefef;\n}\n\n#show-storm-types input:hover {\n    background-color: #e5e5e5;\n}\n\n#show-storm-types input.active {\n    color: #e8eaeb;\n    background-color: #9ea6ab;\n}\n\n#show-storm-types input.active:hover {\n    background-color: #939ba0;\n}\n\n/** Select Years **/\n\n#year-select {\n    margin-left: 80px;\n}\n\n#year-select > div {\n    margin-right: 15px;\n    display: inline-block;\n}\n\n#year-select .label {\n    display: inline-block;\n    width: 33px;\n}\n\n#year-select select {\n    font-size: inherit;\n    padding: 1px;\n    text-align: right;\n}\n\nsvg .bar {\n    cursor: pointer;\n}\n\n/* Legend SVG */\n\n      .cls-1 {\n        fill: #0b539d;\n      }\n\n      .cls-2 {\n        fill: #6baed6;\n      }\n\n      .cls-3 {\n        fill: #c7dbee;\n      }\n\n      .cls-4, .cls-5, .cls-8 {\n        fill: none;\n        stroke: #010101;\n        stroke-linecap: round;\n        stroke-miterlimit: 10;\n        stroke-width: 0.5px;\n      }\n\n      .cls-5 {\n        stroke-dasharray: 3.2 3.2;\n      }\n\n      .cls-6 {\n        font-size: 8px;\n        fill: #010101;\n        font-family: ArialNarrow, Arial Narrow;\n      }\n\n      .cls-7 {\n        letter-spacing: -0.06em;\n      }\n\n      .cls-8 {\n        stroke-dasharray: 3.2 3.2;\n      }\n\n"],"sourceRoot":""}]);
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
var checkboxIds = {
  'named_storm': 'show-named-storms',
  'hurricane': 'show-minor-hurricanes',
  'major_hurricane': 'show-major-hurricanes'
};

var _loop = function _loop() {
  var key = _Object$keys[_i];
  var el = document.getElementById(checkboxIds[key]);

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
  });
};

for (var _i = 0, _Object$keys = Object.keys(checkboxIds); _i < _Object$keys.length; _i++) {
  _loop();
}

var selectedStartYear = graph.yearStart;
var selectedEndYear = graph.yearEnd;
var yearStartSelect = _util__WEBPACK_IMPORTED_MODULE_4__.setupYearSelect('start', selectedStartYear, minYear, maxYear);
var yearEndSelect = _util__WEBPACK_IMPORTED_MODULE_4__.setupYearSelect('end', selectedEndYear, minYear, maxYear);
yearStartSelect.addEventListener('change', function () {
  selectedStartYear = parseInt(yearStartSelect.value);
  graph.updateYearStart(selectedStartYear);
  _util__WEBPACK_IMPORTED_MODULE_4__.setupYearSelect('end', selectedEndYear, selectedStartYear, graph.MAX_YEAR);
});
yearEndSelect.addEventListener('change', function () {
  selectedEndYear = parseInt(yearEndSelect.value);
  graph.updateYearEnd(selectedEndYear);
  _util__WEBPACK_IMPORTED_MODULE_4__.setupYearSelect('start', selectedStartYear, graph.MIN_YEAR, selectedEndYear);
}); // Map

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
window.map = map;
basemap.addTo(map);
var TrackInfoMapControl = L.Control.extend({
  options: {
    position: 'topright'
  },
  onAdd: function onAdd(map) {
    var e = document.createElement('div');
    e.id = 'track-info-map-control';
    e.classList.add('hidden');
    return e;
  }
});
var control = new TrackInfoMapControl();
window.map.addControl(control); // dummy feature for logging
//let f;

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
      weight: 5
    };
  },
  where: '1=0'
}).addTo(map);
graph.layer = layer;
/*
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssRUFBRTtBQVp5QixDQUFwQixFQWFYdUUsS0FiVyxDQWFMckosR0FiSyxDQUFkO0FBZUErSCxLQUFLLENBQUMvQyxLQUFOLEdBQWNBLEtBQWQ7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIHRpdGxlOiAnTm9ydGggQXRsYW50aWMgV2VzdCBvZiA2MMKwVzogMTk1MC0yMDIwJyxcbiAgd2lkdGg6IDYwMCxcbiAgaGVpZ2h0OiA1MDAsXG4gIG1hcmdpbjogeyBsZWZ0OiA4MCwgcmlnaHQ6IDEwLCB0b3A6IDE1LCBib3R0b206IDYwIH0sXG4gIHllYXJTdGFydDogMTk1MCxcbiAgeWVhckVuZDogMjAyMCxcbiAgeUF4aXNUaXRsZTogJ1Ryb3BpY2FsIEN5Y2xvbmUgRGF5cyAocGVyIHllYXIpJyxcbiAgc3Rvcm1UeXBlczoge1xuICAgICduYW1lZF9zdG9ybSc6IHtcbiAgICAgICd3aGVyZSc6IFwiVVNBX1dJTkQ+PTM0IEFORCBCQVNJTiA9ICdOQSdcIixcbiAgICAgICdsYWJlbCc6ICdOYW1lZCBTdG9ybXMnLFxuICAgICAgJ3Rvb2x0aXAnOiAnTmFtZWQgU3Rvcm0gRGF5cycsXG4gICAgICAnbGVnZW5kX2xhYmVsJzogJ05hbWVkIFN0b3JtcyAoPj0gMzRrdCknLFxuICAgICAgJ2ZpbGwnOiAnI0M2REJFRicsXG4gICAgICAnYWN0aXZlJzogdHJ1ZVxuICAgIH0sXG4gICAgJ2h1cnJpY2FuZSc6IHtcbiAgICAgICd3aGVyZSc6IFwiVVNBX1dJTkQ+PTY0IEFORCBCQVNJTiA9ICdOQSdcIixcbiAgICAgICdsYWJlbCc6ICdIdXJyaWNhbmVzJyxcbiAgICAgICd0b29sdGlwJzogJ0h1cnJpY2FuZSBEYXlzJyxcbiAgICAgICdsZWdlbmRfbGFiZWwnOiAnSHVycmljYW5lcyAoPj02NGt0KScsXG4gICAgICAnZmlsbCc6ICcjNkJBRUQ2JyxcbiAgICAgICdhY3RpdmUnOiB0cnVlXG4gICAgfSxcbiAgICAnbWFqb3JfaHVycmljYW5lJzoge1xuICAgICAgJ3doZXJlJzogXCJVU0FfV0lORD49OTYgQU5EIEJBU0lOID0gJ05BJ1wiLFxuICAgICAgJ2xhYmVsJzogJ01ham9yIEh1cnJpY2FuZXMnLFxuICAgICAgJ3Rvb2x0aXAnOiAnTWFqb3IgSHVycmljYW5lIERheXMnLFxuICAgICAgJ2xlZ2VuZF9sYWJlbCc6ICdNYWpvciBIdXJyaWNhbmVzICg+PSA5Nmt0KScsXG4gICAgICAnZmlsbCc6ICcjMDg1MTlDJyxcbiAgICAgICdhY3RpdmUnOiB0cnVlXG4gICAgfVxuICB9LFxuICAvLyBTdG9wIGxhYmVsbGluZyBldmVyeSB4LWF4aXMgdGljayBhZnRlciB0aGlzIG1hbnkgZWxlbWVudHNcbiAgVElDS19MQUJFTF9USFJFU0hPTEQ6IDMwLFxuICAvLyBOdW1iZXIgb2YgdGlja3MgYmV0d2VlbiBsYWJlbHMgb25jZSBUSUNLX0xBQkVMX1RIUkVTREhPTEQgaXMgbWV0IChpbmNsdXNpdmUpXG4gIFRJQ0tfTEFCRUxfU1RFUDogNSxcbiAgLy8gVGhlc2Ugc2hvdWxkIGJlIGNvbnNpc3RlbnQgd2l0aCB0aGUgQ1NTXG4gIFRPT0xUSVBfSEVJR0hUOiA4NSxcbiAgVE9PTFRJUF9XSURUSDogMTgwXG59XG5cbiIsIlxuZXhwb3J0IGNvbnN0IGRhdGEgPSB7XG4gIFwiMTk1MFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMTEuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAzOCxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDU5LjVcbiAgfSxcbiAgXCIxOTUxXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLjc1LFxuICAgIFwiaHVycmljYW5lXCI6IDIzLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDEuNzVcbiAgfSxcbiAgXCIxOTUyXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAyLjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTQuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyN1xuICB9LFxuICBcIjE5NTNcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTQuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0NFxuICB9LFxuICBcIjE5NTRcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDcsXG4gICAgXCJodXJyaWNhbmVcIjogMjAuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQ1XG4gIH0sXG4gIFwiMTk1NVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogOC41LFxuICAgIFwiaHVycmljYW5lXCI6IDMzLFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNTkuMjVcbiAgfSxcbiAgXCIxOTU2XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxLjc1LFxuICAgIFwiaHVycmljYW5lXCI6IDEwLjc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjkuNVxuICB9LFxuICBcIjE5NTdcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAuNSxcbiAgICBcImh1cnJpY2FuZVwiOiA1LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyMi43NVxuICB9LFxuICBcIjE5NThcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMTYuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0MS41XG4gIH0sXG4gIFwiMTk1OVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMy4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMi4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDM2LjI1XG4gIH0sXG4gIFwiMTk2MFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNi43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMixcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI3XG4gIH0sXG4gIFwiMTk2MVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMTMuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMjQuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0Ni4yNVxuICB9LFxuICBcIjE5NjJcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAsXG4gICAgXCJodXJyaWNhbmVcIjogMTEuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyNS43NVxuICB9LFxuICBcIjE5NjNcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMjIuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAzNS43NVxuICB9LFxuICBcIjE5NjRcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDguNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMzMsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA1My41XG4gIH0sXG4gIFwiMTk2NVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNi4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiA5Ljc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjFcbiAgfSxcbiAgXCIxOTY2XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA4Ljc1LFxuICAgIFwiaHVycmljYW5lXCI6IDI1Ljc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMzYuNVxuICB9LFxuICBcIjE5NjdcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDUuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMTguNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI4Ljc1XG4gIH0sXG4gIFwiMTk2OFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMCxcbiAgICBcImh1cnJpY2FuZVwiOiA3LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyMC41XG4gIH0sXG4gIFwiMTk2OVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNC43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAyNC41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDkuNzVcbiAgfSxcbiAgXCIxOTcwXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxLFxuICAgIFwiaHVycmljYW5lXCI6IDYsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyMC41XG4gIH0sXG4gIFwiMTk3MVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMSxcbiAgICBcImh1cnJpY2FuZVwiOiAxNy4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQ2LjI1XG4gIH0sXG4gIFwiMTk3MlwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMCxcbiAgICBcImh1cnJpY2FuZVwiOiAyLjc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTcuNVxuICB9LFxuICBcIjE5NzNcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAsXG4gICAgXCJodXJyaWNhbmVcIjogMy4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDIwLjVcbiAgfSxcbiAgXCIxOTc0XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTAuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDMxLjc1XG4gIH0sXG4gIFwiMTk3NVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMi4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMS41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjVcbiAgfSxcbiAgXCIxOTc2XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLjc1LFxuICAgIFwiaHVycmljYW5lXCI6IDMuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxNS4yNVxuICB9LFxuICBcIjE5NzdcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEsXG4gICAgXCJodXJyaWNhbmVcIjogNS4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDEzLjI1XG4gIH0sXG4gIFwiMTk3OFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMyxcbiAgICBcImh1cnJpY2FuZVwiOiA4LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjJcbiAgfSxcbiAgXCIxOTc5XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA0LjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDExLjc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjguMjVcbiAgfSxcbiAgXCIxOTgwXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA2LjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDkuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDIyLjI1XG4gIH0sXG4gIFwiMTk4MVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMi4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDM2XG4gIH0sXG4gIFwiMTk4MlwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMC43NSxcbiAgICBcImh1cnJpY2FuZVwiOiA0LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTFcbiAgfSxcbiAgXCIxOTgzXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDIuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxMS4yNVxuICB9LFxuICBcIjE5ODRcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMTEuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDMyXG4gIH0sXG4gIFwiMTk4NVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNCxcbiAgICBcImh1cnJpY2FuZVwiOiAxOC4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQxLjVcbiAgfSxcbiAgXCIxOTg2XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLFxuICAgIFwiaHVycmljYW5lXCI6IDIuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxMi43NVxuICB9LFxuICBcIjE5ODdcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAyLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTIuNVxuICB9LFxuICBcIjE5ODhcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDYuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMi4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI4LjVcbiAgfSxcbiAgXCIxOTg5XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTIuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI2XG4gIH0sXG4gIFwiMTk5MFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMCxcbiAgICBcImh1cnJpY2FuZVwiOiA5LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjUuNVxuICB9LFxuICBcIjE5OTFcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogNy4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDE0LjVcbiAgfSxcbiAgXCIxOTkyXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLjUsXG4gICAgXCJodXJyaWNhbmVcIjogNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDE3XG4gIH0sXG4gIFwiMTk5M1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMC43NSxcbiAgICBcImh1cnJpY2FuZVwiOiA3LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyMC4yNVxuICB9LFxuICBcIjE5OTRcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAsXG4gICAgXCJodXJyaWNhbmVcIjogMSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDE2XG4gIH0sXG4gIFwiMTk5NVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNy4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAzNC41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNjNcbiAgfSxcbiAgXCIxOTk2XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA5LjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDI5LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA1MFxuICB9LFxuICBcIjE5OTdcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogNS41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMThcbiAgfSxcbiAgXCIxOTk4XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA4LFxuICAgIFwiaHVycmljYW5lXCI6IDI3LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0Mi41XG4gIH0sXG4gIFwiMTk5OVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNy41LFxuICAgIFwiaHVycmljYW5lXCI6IDI2Ljc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDdcbiAgfSxcbiAgXCIyMDAwXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDEwLFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMzAuMjVcbiAgfSxcbiAgXCIyMDAxXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLjc1LFxuICAgIFwiaHVycmljYW5lXCI6IDE1Ljc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDJcbiAgfSxcbiAgXCIyMDAyXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLFxuICAgIFwiaHVycmljYW5lXCI6IDguNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0Mi4yNVxuICB9LFxuICBcIjIwMDNcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDcuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxNC41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDAuNVxuICB9LFxuICBcIjIwMDRcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDE0LFxuICAgIFwiaHVycmljYW5lXCI6IDI2Ljc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNTEuNVxuICB9LFxuICBcIjIwMDVcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDE3LjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDM3LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogODIuMjVcbiAgfSxcbiAgXCIyMDA2XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLFxuICAgIFwiaHVycmljYW5lXCI6IDMuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyMS4yNVxuICB9LFxuICBcIjIwMDdcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDYsXG4gICAgXCJodXJyaWNhbmVcIjogMTAuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI1LjI1XG4gIH0sXG4gIFwiMjAwOFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNS41LFxuICAgIFwiaHVycmljYW5lXCI6IDIzLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNjQuNzVcbiAgfSxcbiAgXCIyMDA5XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDUuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxMy4yNVxuICB9LFxuICBcIjIwMTBcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDQuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMjEsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA1MS43NVxuICB9LFxuICBcIjIwMTFcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDQuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxOS4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDYwXG4gIH0sXG4gIFwiMjAxMlwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMC4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMi4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQ4XG4gIH0sXG4gIFwiMjAxM1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMCxcbiAgICBcImh1cnJpY2FuZVwiOiAxLjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxNFxuICB9LFxuICBcIjIwMTRcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTIsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyNC4yNVxuICB9LFxuICBcIjIwMTVcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuNSxcbiAgICBcImh1cnJpY2FuZVwiOiA3LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTkuNzVcbiAgfSxcbiAgXCIyMDE2XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA4Ljc1LFxuICAgIFwiaHVycmljYW5lXCI6IDE2LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDIuNVxuICB9LFxuICBcIjIwMTdcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEyLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDMyLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNTkuNzVcbiAgfSxcbiAgXCIyMDE4XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA0LFxuICAgIFwiaHVycmljYW5lXCI6IDksXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyNC4yNVxuICB9LFxuICBcIjIwMTlcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDYuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTQuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAzOS4yNVxuICB9LFxuICBcIjIwMjBcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDUuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAyOCxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDgxXG4gIH1cbn1cblxuIiwiXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCdcblxuZXhwb3J0IGNsYXNzIEdyYXBoIHtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcsIGRhdGEpIHtcbiAgICB0aGlzLk1JTl9ZRUFSID0gdXRpbC5nZXRNaW5ZZWFyKGRhdGEpXG4gICAgdGhpcy5NQVhfWUVBUiA9IHV0aWwuZ2V0TWF4WWVhcihkYXRhKVxuICAgIHRoaXMuVElDS19MQUJFTF9USFJFU0hPTEQgPSBjb25maWcuVElDS19MQUJFTF9USFJFU0hPTERcbiAgICB0aGlzLlRJQ0tfTEFCRUxfU1RFUCA9IGNvbmZpZy5USUNLX0xBQkVMX1NURVBcbiAgICB0aGlzLlRPT0xUSVBfV0lEVEggPSBjb25maWcuVE9PTFRJUF9XSURUSFxuICAgIHRoaXMuVE9PTFRJUF9IRUlHSFQgPSBjb25maWcuVE9PTFRJUF9IRUlHSFRcblxuICAgIHRoaXMuZGF0YSA9IGRhdGFcbiAgICB0aGlzLnRpdGxlID0gY29uZmlnLnRpdGxlXG4gICAgdGhpcy55QXhpc1RpdGxlID0gY29uZmlnLnlBeGlzVGl0bGVcbiAgICB0aGlzLnllYXJzID0gT2JqZWN0LmtleXMoZGF0YSkubWFwKGQgPT4gcGFyc2VJbnQoZCkpXG4gICAgdGhpcy55ZWFyU3RhcnQgPSBjb25maWcueWVhclN0YXJ0XG4gICAgdGhpcy55ZWFyRW5kID0gY29uZmlnLnllYXJFbmRcbiAgICB0aGlzLnN0b3JtVHlwZXMgPSBjb25maWcuc3Rvcm1UeXBlc1xuICAgIHRoaXMubWFyZ2luID0gY29uZmlnLm1hcmdpblxuICAgIHRoaXMud2lkdGggPSBjb25maWcud2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IGNvbmZpZy5oZWlnaHRcbiAgICB0aGlzLnBsb3QgPSB0aGlzLmluaXRQbG90KClcbiAgICB0aGlzLmRhdGFzZXRzID0gdGhpcy5pbml0RGF0YXNldHMoT2JqZWN0LmtleXMoY29uZmlnLnN0b3JtVHlwZXMpKVxuICAgIHRoaXMueCA9IHRoaXMuaW5pdFhTY2FsZSgpXG4gICAgdGhpcy55ID0gdGhpcy5pbml0WVNjYWxlKClcblxuICAgIC8vIEluc2VydCBTVkcgZWxlbWVudHNcblxuICAgIC8vIFNWRyBlbGVtZW50cyBhcmUgcGFpbnRlZCBpbiB0aGUgb3JkZXIgdGhleSBhcmUgaW5zZXJ0ZWQsXG4gICAgLy8gc28gd2UgYWRkIHRoZSBheGVzIGFuZCB0b29sdGlwcyBsYXN0IHNvIHRoZXkgc2hvdyB1cCBvdmVyIHRoZSBiYXJzXG4gICAgLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9yZW5kZXIuaHRtbCNSZW5kZXJpbmdPcmRlclxuXG4gICAgLy8gSW5pdGlhbGl6ZSBkYXRhIGJhcnMgd2l0aCB6ZXJvIGhlaWdodFxuICAgIE9iamVjdC5rZXlzKGNvbmZpZy5zdG9ybVR5cGVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICB0aGlzLmluaXRCYXJzKGtleSlcbiAgICB9KVxuXG4gICAgLy8gRHJhdyB0aGUgYXhlc1xuICAgIHRoaXMueEF4aXMgPSB0aGlzLmFwcGVuZFhBeGlzKClcbiAgICB0aGlzLmluaXRYQXhpcygpXG4gICAgdGhpcy5zZXRZQXhpc1RpdGxlKClcbiAgICB0aGlzLnlBeGlzID0gdGhpcy5pbml0WUF4aXMoKVxuXG4gICAgLy8gRHJhdyB0aGUgdG9vbHRpcHNcbiAgICBPYmplY3Qua2V5cyhjb25maWcuc3Rvcm1UeXBlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgdGhpcy5pbml0VG9vbHRpcHMoa2V5KVxuICAgIH0pXG5cbiAgICAvLyBTaG93IHRoZSBiYXJzIGZvciBpbml0aWFsbHkgYWN0aXZhdGVkIHN0b3JtIHR5cGVzXG4gICAgY29uc3QgaW5pdFN0b3JtVHlwZXMgPSBPYmplY3Qua2V5cyh0aGlzLnN0b3JtVHlwZXMpLmZpbHRlcihrZXkgPT4gdGhpcy5zdG9ybVR5cGVzW2tleV0uYWN0aXZlKVxuICAgIGluaXRTdG9ybVR5cGVzLmZvckVhY2goa2V5ID0+IHRoaXMuc2hvd0JhcnMoa2V5KSlcblxuICB9XG5cbiAgc2V0WUF4aXNUaXRsZSgpIHtcbiAgICB0aGlzLnBsb3QuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdpZCcsICd5LWF4aXMtdGl0bGUnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGByb3RhdGUoLTkwKSB0cmFuc2xhdGUoLSR7dGhpcy5oZWlnaHQvNX0sIDMwKWApXG4gICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC5odG1sKHRoaXMueUF4aXNUaXRsZSlcbiAgfVxuXG4gIGluaXRQbG90KCkge1xuICAgIHJldHVybiBkMy5zZWxlY3QoJyNncmFwaCcpXG4gICAgICAuYXR0cignd2lkdGgnLCB0aGlzLndpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0KVxuICB9XG5cbiAgZ2V0WERvbWFpbigpIHtcbiAgICByZXR1cm4gWy4uLkFycmF5KHRoaXMueWVhckVuZC10aGlzLnllYXJTdGFydCsxKS5rZXlzKCldLm1hcChkID0+IGQrdGhpcy55ZWFyU3RhcnQpXG4gIH1cblxuICBpbml0WFNjYWxlKCkge1xuICAgIHJldHVybiBkMy5zY2FsZUJhbmQoKVxuICAgICAgLmRvbWFpbih0aGlzLmdldFhEb21haW4oKSlcbiAgICAgIC5yYW5nZShbdGhpcy5tYXJnaW4ubGVmdCwgdGhpcy53aWR0aCAtIHRoaXMubWFyZ2luLnJpZ2h0XSlcbiAgfVxuXG4gIGluaXRZU2NhbGUoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIHRoaXMuY2FsY01heCgpXSlcbiAgICAgIC5yYW5nZShbdGhpcy5oZWlnaHQgLSB0aGlzLm1hcmdpbi5ib3R0b20sIHRoaXMubWFyZ2luLnRvcF0pXG4gIH1cblxuICBhcHBlbmRYQXhpcygpIHtcbiAgICByZXR1cm4gdGhpcy5wbG90LmFwcGVuZCgnZycpICBcbiAgICAgIC5hdHRyKCdpZCcsICd4LWF4aXMnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwgJHt0aGlzLmhlaWdodCAtIHRoaXMubWFyZ2luLmJvdHRvbX0pYClcbiAgfVxuXG4gIHJlbW92ZVhBeGlzKCkge1xuICAgIGQzLnNlbGVjdCgnI3gtYXhpcycpLnJlbW92ZSgpXG4gIH1cblxuICBpbml0WEF4aXMoKSB7XG4gICAgdGhpcy54QXhpcy5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy54KS50aWNrU2l6ZU91dGVyKDApKVxuICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgICAgLmF0dHIoJ2R4JywgJy0uNWVtJylcbiAgICAgICAgLmF0dHIoJ2R5JywgJy4xNWVtJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICdyb3RhdGUoLTY1KScpXG4gICAgICAgIC5odG1sKChkLCBpLCBub2RlcykgPT4ge1xuICAgICAgICAgIGlmIChub2Rlcy5sZW5ndGggPiB0aGlzLlRJQ0tfTEFCRUxfVEhSRVNIT0xEKSB7XG4gICAgICAgICAgICBpZiAoZCAlIHRoaXMuVElDS19MQUJFTF9TVEVQID09IDApIHJldHVybiBkXG4gICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGRcbiAgICAgICAgfSlcbiAgfVxuXG4gIGluaXRZQXhpcygpIHtcbiAgICByZXR1cm4gdGhpcy5wbG90LmFwcGVuZCgnZycpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3RoaXMubWFyZ2luLmxlZnR9LCAwKWApXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh0aGlzLnkpKVxuICB9XG5cblxuICBjYWxjQWN0aXZlWWVhcnMoKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZGF0YSlcbiAgICBjb25zdCB5ZWFycyA9IFtdXG4gICAgZm9yIChsZXQgZCBvZiBrZXlzKSB7XG4gICAgICBjb25zdCB5ciA9IHBhcnNlSW50KGQpXG4gICAgICBpZiAoeXIgPCB0aGlzLnllYXJTdGFydCB8fCB5ciA+IHRoaXMueWVhckVuZCkgY29udGludWVcbiAgICAgIHllYXJzLnB1c2goeXIpXG4gICAgfVxuICAgIHJldHVybiB5ZWFyc1xuICB9XG5cbiAgaW5pdERhdGFzZXRzKCkge1xuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLnN0b3JtVHlwZXMpKSB7XG4gICAgICBjb25zdCBkYXRhc2V0ID0gW11cbiAgICAgIGZvciAobGV0IHllYXIgb2YgdGhpcy55ZWFycykge1xuICAgICAgICBkYXRhc2V0LnB1c2goeyAneWVhcic6IHllYXIsICd2YWx1ZSc6IHRoaXMuZGF0YVtTdHJpbmcoeWVhcildW2tleV0gfSlcbiAgICAgIH1cbiAgICAgIHRoaXMuc3Rvcm1UeXBlc1trZXldLmRhdGFzZXQgPSBkYXRhc2V0XG4gICAgfVxuICB9XG5cbiAgY2FsY01heCgpIHtcbiAgICBsZXQgbWF4ID0gMFxuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLnN0b3JtVHlwZXMpKSB7XG4gICAgICBmb3IgKGxldCBkIG9mIHRoaXMuc3Rvcm1UeXBlc1trZXldLmRhdGFzZXQpIHtcbiAgICAgICAgbWF4ID0gZC52YWx1ZSA+IG1heCA/IGQudmFsdWUgOiBtYXhcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUm91bmQgdXAgYnkgMTBcbiAgICByZXR1cm4gcGFyc2VJbnQobWF4IC8gMTApICogMTAgKyAxMFxuICB9XG5cbiAgZ2V0QWN0aXZlRGF0YShrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9ybVR5cGVzW2tleV0uZGF0YXNldC5maWx0ZXIoZCA9PiB7XG4gICAgICByZXR1cm4gZC55ZWFyID49IHRoaXMueWVhclN0YXJ0ICYmIGQueWVhciA8PSB0aGlzLnllYXJFbmRcbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlWWVhclN0YXJ0KG5ld1llYXJTdGFydCkge1xuICAgIHRoaXMueWVhclN0YXJ0ID0gbmV3WWVhclN0YXJ0XG4gICAgdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgdXBkYXRlWWVhckVuZChuZXdZZWFyRW5kKSB7XG4gICAgdGhpcy55ZWFyRW5kID0gbmV3WWVhckVuZFxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnguZG9tYWluKHRoaXMuZ2V0WERvbWFpbigpKVxuICAgIHRoaXMucmVtb3ZlVG9vbHRpcHMoKVxuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLnN0b3JtVHlwZXMpKSB7XG4gICAgICB0aGlzLnJlbW92ZUJhcnMoa2V5KVxuICAgICAgdGhpcy5pbml0QmFycyhrZXkpXG4gICAgfVxuICAgIGZvciAobGV0IGtleSBvZiB0aGlzLmdldEFjdGl2ZVN0b3JtVHlwZXMoKSkge1xuICAgICAgdGhpcy5zaG93QmFycyhrZXkpXG4gICAgfVxuICAgIHRoaXMucmVtb3ZlWEF4aXMoKVxuICAgIHRoaXMueEF4aXMgPSB0aGlzLmFwcGVuZFhBeGlzKClcbiAgICB0aGlzLmluaXRYQXhpcygpXG4gICAgdGhpcy55QXhpcyA9IHRoaXMuaW5pdFlBeGlzKClcbiAgICAvLyBLZWVwIHNlcGFyYXRlIGxvb3AgZm9yIGNvcnJlY3QgZHJhd2luZyBvcmRlclxuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLnN0b3JtVHlwZXMpKSB7XG4gICAgICB0aGlzLmluaXRUb29sdGlwcyhrZXkpXG4gICAgfVxuICB9XG5cbiAgZ2V0QWN0aXZlU3Rvcm1UeXBlcygpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5zdG9ybVR5cGVzKS5maWx0ZXIoa2V5ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnN0b3JtVHlwZXNba2V5XS5hY3RpdmVcbiAgICB9KVxuICB9XG5cbiAgaW5pdEJhcnMoa2V5KSB7XG4gICAgY29uc3QgZGF0YXNldCA9IHRoaXMuZ2V0QWN0aXZlRGF0YShrZXkpXG4gICAgY29uc3QgYmFycyA9IHRoaXMucGxvdC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2RhdGEtYmFycycpXG4gICAgICAuYXR0cignaWQnLCBgZGF0YS1iYXJzLS0ke2tleX1gKVxuICAgICAgLnNlbGVjdEFsbCgncmVjdCcpXG4gICAgICAgIC5kYXRhKGRhdGFzZXQpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2JhcicpXG4gICAgICAgICAgLmF0dHIoJ2RhdGEteWVhcicsIGQgPT4gZC55ZWFyKVxuICAgICAgICAgIC5hdHRyKCdkYXRhLXZhbHVlJywgZCA9PiBkLnZhbHVlKVxuXG4gICAgYmFycy5hdHRyKCdoZWlnaHQnLCAwKVxuICAgICAgICAuYXR0cignd2lkdGgnLCB0aGlzLnguYmFuZHdpZHRoKCkpXG4gICAgICAgIC5hdHRyKCd4JywgZCA9PiB0aGlzLngoZC55ZWFyKSlcbiAgICAgICAgLmF0dHIoJ3knLCB0aGlzLnkoMCkpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgdGhpcy5zdG9ybVR5cGVzW2tleV0uZmlsbClcbiAgICAgICAgLm9uKCdtb3VzZWVudGVyJywgZCA9PiB7XG4gICAgICAgICAgdGhpcy50b2dnbGVUb29sdGlwKGtleSwgZC55ZWFyLCB0cnVlKVxuICAgICAgICB9KVxuICAgICAgICAub24oJ2NsaWNrJywgZCA9PiB7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSBkLnllYXIgLSB0aGlzLnllYXJTdGFydFxuICAgICAgICAgIGNvbnN0IG5zX2QgPSB0aGlzLmdldEFjdGl2ZURhdGEoJ25hbWVkX3N0b3JtJylbaW5kZXhdXG4gICAgICAgICAgY29uc3QgaF9kID0gdGhpcy5nZXRBY3RpdmVEYXRhKCdodXJyaWNhbmUnKVtpbmRleF1cbiAgICAgICAgICBjb25zdCBtaF9kID0gdGhpcy5nZXRBY3RpdmVEYXRhKCdtYWpvcl9odXJyaWNhbmUnKVtpbmRleF1cbiAgICAgICAgICBjb25zdCB0cmFja0luZm9Db250cm9sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYWNrLWluZm8tbWFwLWNvbnRyb2wnKVxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkWWVhclNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0ZWQteWVhcicpXG4gICAgICAgICAgc2VsZWN0ZWRZZWFyU3Bhbi5pbm5lckhUTUwgPSBkLnllYXJcbiAgICAgICAgICB0cmFja0luZm9Db250cm9sLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXY+WWVhcjogJHtkLnllYXJ9PC9kaXY+XG4gICAgICAgICAgYFxuICAgICAgICAgIGlmIChrZXkgPT0gJ25hbWVkX3N0b3JtJykge1xuICAgICAgICAgICAgdHJhY2tJbmZvQ29udHJvbC5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgICA8ZGl2Pk5hbWVkIFN0b3JtIERheXM6ICR7bnNfZC52YWx1ZX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5IdXJyaWNhbmUgRGF5czogJHtoX2QudmFsdWV9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+TWFqb3IgSHVycmljYW5lIERheXM6ICR7bWhfZC52YWx1ZX08L2Rpdj5cbiAgICAgICAgICAgIGAgXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChrZXkgPT0gJ2h1cnJpY2FuZScpIHtcbiAgICAgICAgICAgIHRyYWNrSW5mb0NvbnRyb2wuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgICAgPGRpdj5IdXJyaWNhbmUgRGF5czogJHtoX2QudmFsdWV9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+TWFqb3IgSHVycmljYW5lIERheXM6ICR7bWhfZC52YWx1ZX08L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGtleSA9PSAnbWFqb3JfaHVycmljYW5lJykge1xuICAgICAgICAgICAgdHJhY2tJbmZvQ29udHJvbC5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgICA8ZGl2Pk1ham9yIEh1cnJpY2FuZSBEYXlzOiAke21oX2QudmFsdWV9PC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgfVxuICAgICAgICAgIHRyYWNrSW5mb0NvbnRyb2wuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgICBjb25zdCB3aGVyZSA9IHV0aWwud2hlcmVGYWN0b3J5KGQueWVhciwgdGhpcy5zdG9ybVR5cGVzW2tleV1bJ3doZXJlJ10pXG4gICAgICAgICAgdGhpcy5sYXllci5zZXRXaGVyZSh3aGVyZSlcbiAgICAgICAgICB0aGlzLmxheWVyLnNldFN0eWxlKGZlYXR1cmUgPT4ge1xuICAgICAgICAgICAgbGV0IGM7XG4gICAgICAgICAgICBsZXQgcHJvcCA9IGZlYXR1cmUucHJvcGVydGllcy5VU0FfV0lORFxuICAgICAgICAgICAgaWYgKHByb3AgPCA2NCAmJiBwcm9wID49IDM0KSBjID0gdGhpcy5zdG9ybVR5cGVzWyduYW1lZF9zdG9ybSddWydmaWxsJ10gXG4gICAgICAgICAgICBpZiAocHJvcCA+PSA2NCAmJiBwcm9wIDwgOTYpIGMgPSB0aGlzLnN0b3JtVHlwZXNbJ2h1cnJpY2FuZSddWydmaWxsJ10gXG4gICAgICAgICAgICBpZiAocHJvcCA+PSA5NikgYyA9IHRoaXMuc3Rvcm1UeXBlc1snbWFqb3JfaHVycmljYW5lJ11bJ2ZpbGwnXVxuICAgICAgICAgICAgaWYgKCFjKSB7IGMgPSAnd2hpdGUnIH1cbiAgICAgICAgICAgIHJldHVybiB7IGNvbG9yOiBjLCBvcGFjaXR5OiAxLCB3ZWlnaHQ6IDUgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VvdXQnLCBkID0+IHtcbiAgICAgICAgICAvL3RoaXMubGF5ZXIuc2V0V2hlcmUoJzE9MCcpXG4gICAgICAgICAgdGhpcy50b2dnbGVUb29sdGlwKGtleSwgZC55ZWFyLCBmYWxzZSlcbiAgICAgICAgfSlcblxuICAgIHRoaXMuc3Rvcm1UeXBlc1trZXldLmJhcnMgPSBiYXJzXG4gIH1cblxuICBjYWxjVG9vbHRpcFgoZCkge1xuICAgIGNvbnN0IG5vcm1hbCA9IHRoaXMueChkLnllYXIpICsgdGhpcy54LmJhbmR3aWR0aCgpXG4gICAgaWYgKG5vcm1hbCArIHRoaXMuVE9PTFRJUF9XSURUSCA8IHRoaXMueC5yYW5nZSgpWzFdKSByZXR1cm4gbm9ybWFsXG4gICAgcmV0dXJuIG5vcm1hbCAtIHRoaXMuVE9PTFRJUF9XSURUSCAtIHRoaXMueC5iYW5kd2lkdGgoKVxuICB9XG5cbiAgY2FsY1Rvb2x0aXBZKGQpIHtcbiAgICAvLyBUT0RPXG4gIH1cblxuICByZW1vdmVUb29sdGlwcygpIHtcbiAgICBkMy5zZWxlY3RBbGwoJy5kYXRhLXRvb2x0aXBzJykucmVtb3ZlKClcbiAgfVxuXG4gIHRvZ2dsZVRvb2x0aXAoa2V5LCB5ZWFyLCBzaG93VG9vbHRpcCkge1xuICAgIGQzLnNlbGVjdChgI2RhdGEtdG9vbHRpcC0tJHtrZXl9LS0ke3llYXJ9LS1yZWN0YClcbiAgICAgIC5hdHRyKCdzdHlsZScsIHNob3dUb29sdGlwID8gJycgOiAnZGlzcGxheTogbm9uZScpXG4gICAgICAucmFpc2UoKVxuICAgIGQzLnNlbGVjdChgI2RhdGEtdG9vbHRpcC0tJHtrZXl9LS0ke3llYXJ9LS10ZXh0YClcbiAgICAgIC5hdHRyKCdzdHlsZScsIHNob3dUb29sdGlwID8gJycgOiAnZGlzcGxheTogbm9uZScpXG4gICAgICAucmFpc2UoKVxuICB9XG5cbiAgaW5pdFRvb2x0aXBzKGtleSkge1xuICAgIGNvbnN0IGRhdGFzZXQgPSB0aGlzLmdldEFjdGl2ZURhdGEoa2V5KVxuICAgIGNvbnN0IHRvb2x0aXBzID0gdGhpcy5wbG90LmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZGF0YS10b29sdGlwcycpXG4gICAgICAuYXR0cignaWQnLCBgZGF0YS10b29sdGlwcy0tJHtrZXl9YClcbiAgICAgIC5zZWxlY3RBbGwoJ3JlY3QnKVxuICAgICAgICAuZGF0YShkYXRhc2V0KVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgLmF0dHIoJ2lkJywgZCA9PiBgZGF0YS10b29sdGlwLS0ke2tleX0tLSR7ZC55ZWFyfS0tcmVjdGApXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCAndG9vbHRpcCcpXG4gICAgICAgICAgICAuYXR0cigneCcsIGQgPT4gdGhpcy5jYWxjVG9vbHRpcFgoZCkpXG4gICAgICAgICAgICAuYXR0cigneScsIGQgPT4gdGhpcy55KGQudmFsdWUpIC0gdGhpcy5UT09MVElQX0hFSUdIVClcbiAgICAgICAgICAgIC5hdHRyKCdzdHlsZScsICdkaXNwbGF5OiBub25lOycpXG4gICAgICAgICAgICAuYXR0cignZGF0YS15ZWFyJywgZCA9PiBkLnllYXIpXG4gICAgICAgICAgICAuYXR0cignZGF0YS12YWx1ZScsIGQgPT4gZC52YWx1ZSlcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJylcbiAgICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCB0aGlzLnN0b3JtVHlwZXNba2V5XS5maWxsKVxuICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsICcxLjUnKVxuXG4gICAgY29uc3QgdG9vbHRpcF90ZXh0ID0gdGhpcy5wbG90LnNlbGVjdChgI2RhdGEtdG9vbHRpcHMtLSR7a2V5fWApXG4gICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLmRhdGEoZGF0YXNldClcbiAgICAgICAgICAuZW50ZXIodG9vbHRpcHMpXG4gICAgICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgICAgLmF0dHIoJ2lkJywgZCA9PiBgZGF0YS10b29sdGlwLS0ke2tleX0tLSR7ZC55ZWFyfS0tdGV4dGApXG4gICAgICAgICAgICAgIC5hdHRyKCdzdHlsZScsICdkaXNwbGF5OiBub25lJylcbiAgICAgICAgICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0JylcbiAgICAgICAgICAgICAgLmF0dHIoJ3gnLCBkID0+IHRoaXMuY2FsY1Rvb2x0aXBYKGQpKVxuICAgICAgICAgICAgICAuYXR0cigneScsIGQgPT4gdGhpcy55KGQudmFsdWUpKVxuXG4gICAgY29uc3QgdGV4dF9tYXJnaW4gPSB7IGxlZnQ6IDgsIHRvcDogOCB9XG5cbiAgICB0b29sdGlwX3RleHQuYXBwZW5kKCd0c3BhbicpXG4gICAgICAuYXR0cigneCcsIGQgPT4gdGhpcy5jYWxjVG9vbHRpcFgoZCkgKyB0ZXh0X21hcmdpbi5sZWZ0KVxuICAgICAgLmF0dHIoJ3knLCBkID0+IHRoaXMueShkLnZhbHVlKSAtIHRoaXMuVE9PTFRJUF9IRUlHSFQvMS41IC0gdGV4dF9tYXJnaW4udG9wKVxuICAgICAgLmh0bWwoZCA9PiBgWWVhcjogJHtkLnllYXJ9YClcblxuICAgIHRvb2x0aXBfdGV4dC5hcHBlbmQoJ3RzcGFuJylcbiAgICAgIC5hdHRyKCd4JywgZCA9PiB0aGlzLmNhbGNUb29sdGlwWChkKSArIHRleHRfbWFyZ2luLmxlZnQpXG4gICAgICAuYXR0cigneScsIGQgPT4gdGhpcy55KGQudmFsdWUpIC0gdGhpcy5UT09MVElQX0hFSUdIVC8yLjggLSB0ZXh0X21hcmdpbi50b3ApXG4gICAgICAuaHRtbChkID0+IGAke3RoaXMuc3Rvcm1UeXBlc1trZXldLnRvb2x0aXB9OiAke2QudmFsdWV9YClcblxuICAgIHRvb2x0aXBfdGV4dC5hcHBlbmQoJ3RzcGFuJylcbiAgICAgIC5hdHRyKCd4JywgZCA9PiB0aGlzLmNhbGNUb29sdGlwWChkKSArIHRleHRfbWFyZ2luLmxlZnQpXG4gICAgICAuYXR0cigneScsIGQgPT4gdGhpcy55KGQudmFsdWUpIC0gdGhpcy5UT09MVElQX0hFSUdIVC8xNSAtIHRleHRfbWFyZ2luLnRvcClcbiAgICAgIC5hdHRyKCdzdHlsZScsICdmb250LXN0eWxlOiBpdGFsaWMnKVxuICAgICAgLmh0bWwoJ0NsaWNrIHRvIGFuYWx5emUgc3Rvcm0gdHJhY2tzJylcblxuICAgIHRoaXMuc3Rvcm1UeXBlc1trZXldLnRvb2x0aXBzID0gdG9vbHRpcHNcbiAgfVxuXG4gIHNob3dCYXJzKGtleSkge1xuICAgIHRoaXMuc3Rvcm1UeXBlc1trZXldLmJhcnMudHJhbnNpdGlvbigxMDAwKVxuICAgICAgLmF0dHIoJ3knLCBkID0+IHRoaXMueShkLnZhbHVlKSlcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBkID0+IHRoaXMueSgwKSAtIHRoaXMueShkLnZhbHVlKSlcbiAgfVxuXG4gIGhpZGVCYXJzKGtleSkge1xuICAgIHRoaXMuc3Rvcm1UeXBlc1trZXldLmJhcnMudHJhbnNpdGlvbigxMDAwKVxuICAgICAgLmF0dHIoJ3knLCBkID0+IHRoaXMueSgwKSlcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAwKVxuICB9XG5cbiAgcmVtb3ZlQmFycyhrZXkpIHtcbiAgICB0aGlzLmhpZGVCYXJzKGtleSlcbiAgICB0aGlzLnN0b3JtVHlwZXNba2V5XS5iYXJzLnJlbW92ZSgpXG4gICAgdGhpcy5zdG9ybVR5cGVzW2tleV0uYmFycyA9IFtdXG4gIH1cblxufVxuXG4iLCJpbXBvcnQgKiBhcyBjb25maWcgZnJvbSAnLi9jb25maWcnXG5cbmV4cG9ydCBjb25zdCB3aGVyZUZhY3RvcnkgPSAoeWVhciwgc3Rvcm1XaGVyZSkgPT4gYFlFQVI9JHt5ZWFyfSBBTkQgJHtzdG9ybVdoZXJlfWBcblxuY29uc3QgZ2V0TGVnZW5kQmFySWQgPSBrZXkgPT4gYCR7a2V5LnJlcGxhY2UoJ18nLCAnLScpfS1sZWdlbmQtYmFyYFxuXG5leHBvcnQgY29uc3QgaGlkZUxlZ2VuZEJhciA9IGtleSA9PiB7XG4gIGNvbnN0IGlkID0gYCMke2dldExlZ2VuZEJhcklkKGtleSl9YFxuICBjb25zdCBlbCA9IGQzLnNlbGVjdChpZClcbiAgZWwubm9kZSgpLmRhdGFzZXQuaGVpZ2h0ID0gZWwuYXR0cignaGVpZ2h0JylcbiAgZWwudHJhbnNpdGlvbig1MDApXG4gICAgLmF0dHIoJ2hlaWdodCcsIDApXG59XG5cbmV4cG9ydCBjb25zdCBzaG93TGVnZW5kQmFyID0ga2V5ID0+IHtcbiAgY29uc3QgaWQgPSBgIyR7Z2V0TGVnZW5kQmFySWQoa2V5KX1gXG4gIGNvbnN0IGVsID0gZDMuc2VsZWN0KGlkKVxuICBlbC50cmFuc2l0aW9uKDUwMClcbiAgICAuYXR0cignaGVpZ2h0JywgZWwubm9kZSgpLmRhdGFzZXQuaGVpZ2h0KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0TWF4WWVhciA9IChkYXRhKSA9PiB7XG4gIGxldCBtYXggPSAwXG4gIGZvciAobGV0IGsgb2YgT2JqZWN0LmtleXMoZGF0YSkpIHtcbiAgICBrID0gcGFyc2VJbnQoaylcbiAgICBpZiAoayA+IG1heCkgeyBtYXggPSBrIH1cbiAgfVxuICByZXR1cm4gbWF4XG59XG5cbmV4cG9ydCBjb25zdCBnZXRNaW5ZZWFyID0gKGRhdGEpID0+IHtcbiAgbGV0IG1pbiA9IDEwMDAwXG4gIGZvciAobGV0IGsgb2YgT2JqZWN0LmtleXMoZGF0YSkpIHtcbiAgICBrID0gcGFyc2VJbnQoaylcbiAgICBpZiAoayA8IG1pbikgeyBtaW4gPSBrIH1cbiAgfVxuICByZXR1cm4gbWluXG59XG5cbmV4cG9ydCBjb25zdCBvcHRpb25GYWN0b3J5ID0gZnVuY3Rpb24gKHZhbHVlLCBpbm5lckhUTUwpIHtcbiAgICB2YXIgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0LnZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICBvcHQuaW5uZXJIVE1MID0gU3RyaW5nKGlubmVySFRNTCk7XG4gICAgcmV0dXJuIG9wdDtcbn1cblxuXG5jb25zdCByZW1vdmVDaGlsZE5vZGVzID0gKHBhcmVudCkgPT4ge1xuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldHVwWWVhclNlbGVjdCA9IChsYWJlbCwgeWVhclNlbGVjdGVkLCBtaW5ZZWFyLCBtYXhZZWFyKSA9PiB7XG4gIGNvbnN0IHllYXJTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgeWVhci0ke2xhYmVsfS1zZWxlY3RgKVxuICByZW1vdmVDaGlsZE5vZGVzKHllYXJTZWxlY3QpXG4gIGxldCBzZWxlY3RlZEluZGV4O1xuICBsZXQgaW5kZXggPSAwO1xuICBmb3IgKHZhciB5ID0gbWluWWVhcjsgeTw9bWF4WWVhcjsgeSsrKXtcbiAgICAgIGlmIChwYXJzZUludCh5ZWFyU2VsZWN0ZWQpID09IHkpIHsgc2VsZWN0ZWRJbmRleCA9IGluZGV4IH1cbiAgICAgIHllYXJTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uRmFjdG9yeShTdHJpbmcoeSksIFN0cmluZyh5KSkpXG4gICAgICBpbmRleCsrO1xuICB9XG4gIHllYXJTZWxlY3Qub3B0aW9ucy5zZWxlY3RlZEluZGV4PXNlbGVjdGVkSW5kZXhcbiAgcmV0dXJuIHllYXJTZWxlY3Rcbn1cblxuXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcbi8qIENvbnRhaW5lcnMgKi9cXG5cXG4jdHJvcGljYWwtY3ljbG9uZS1kYXlzLXdyYXBwZXIge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwgTmFycm93LCBzZXJpZjtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDEyMDBweDtcXG59XFxuXFxuLmZsZXgtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZmxleC1jb2x1bW4ge1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4vKiBNYXAgKi9cXG5cXG4jbWFwLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcXG59XFxuXFxuI21hcC1pbmZvIHtcXG59XFxuXFxuI21hcCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi8qKiBNYXAgQ29udHJvbHMgKiovXFxuXFxuI3RyYWNrLWluZm8tbWFwLWNvbnRyb2wge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsIE5hcnJvdywgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jdHJhY2staW5mby1tYXAtY29udHJvbC5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBHcmFwaCAqL1xcblxcbiNncmFwaC1jb250YWluZXIge1xcbn1cXG5cXG4uZGF0YS10b29sdGlwcyAudG9vbHRpcCB7XFxuICAgIHdpZHRoOiAxODBweDtcXG4gICAgaGVpZ2h0OiA4NXB4O1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4udGljayB0ZXh0IHtcXG4gICAgZmlsbDogIzU5NTk1OTtcXG59XFxuXFxuI3ktYXhpcy10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxufVxcblxcbiNwbG90IC50aWNrIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuI2dyYXBoLWNvbnRhaW5lciB7XFxufVxcblxcbiNncmFwaC10aXRsZSB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogQ29udHJvbHMgKi9cXG5cXG4jbWVudS1jb250YWluZXIge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICAvKmp1c3RpZnktY29udGVudDogcmlnaHQ7Ki9cXG59XFxuXFxuI21lbnUgZGl2IHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4jY29udHJvbHMtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKiogTGVnZW5kICoqL1xcblxcbiNsZWdlbmQtY29udGFpbmVyIGRpdiB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuI2xlZ2VuZC1jb250YWluZXIgc3ZnIHtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbn1cXG5cXG4jc2hvdy1zdG9ybS10eXBlcyB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDlweDtcXG4gICAgbGVmdDogNHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNzVweDtcXG59XFxuXFxuI3Nob3ctc3Rvcm0tdHlwZXMgaW5wdXQge1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJvcmRlci13aWR0aDogLjVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyNi40cHg7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG59XFxuXFxuI3Nob3ctc3Rvcm0tdHlwZXMgaW5wdXQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xcbn1cXG5cXG4jc2hvdy1zdG9ybS10eXBlcyBpbnB1dC5hY3RpdmUge1xcbiAgICBjb2xvcjogI2U4ZWFlYjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzllYTZhYjtcXG59XFxuXFxuI3Nob3ctc3Rvcm0tdHlwZXMgaW5wdXQuYWN0aXZlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkzOWJhMDtcXG59XFxuXFxuLyoqIFNlbGVjdCBZZWFycyAqKi9cXG5cXG4jeWVhci1zZWxlY3Qge1xcbiAgICBtYXJnaW4tbGVmdDogODBweDtcXG59XFxuXFxuI3llYXItc2VsZWN0ID4gZGl2IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbiN5ZWFyLXNlbGVjdCAubGFiZWwge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAzM3B4O1xcbn1cXG5cXG4jeWVhci1zZWxlY3Qgc2VsZWN0IHtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiAxcHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG5zdmcgLmJhciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogTGVnZW5kIFNWRyAqL1xcblxcbiAgICAgIC5jbHMtMSB7XFxuICAgICAgICBmaWxsOiAjMGI1MzlkO1xcbiAgICAgIH1cXG5cXG4gICAgICAuY2xzLTIge1xcbiAgICAgICAgZmlsbDogIzZiYWVkNjtcXG4gICAgICB9XFxuXFxuICAgICAgLmNscy0zIHtcXG4gICAgICAgIGZpbGw6ICNjN2RiZWU7XFxuICAgICAgfVxcblxcbiAgICAgIC5jbHMtNCwgLmNscy01LCAuY2xzLTgge1xcbiAgICAgICAgZmlsbDogbm9uZTtcXG4gICAgICAgIHN0cm9rZTogIzAxMDEwMTtcXG4gICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXG4gICAgICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcXG4gICAgICAgIHN0cm9rZS13aWR0aDogMC41cHg7XFxuICAgICAgfVxcblxcbiAgICAgIC5jbHMtNSB7XFxuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAzLjIgMy4yO1xcbiAgICAgIH1cXG5cXG4gICAgICAuY2xzLTYge1xcbiAgICAgICAgZm9udC1zaXplOiA4cHg7XFxuICAgICAgICBmaWxsOiAjMDEwMTAxO1xcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsTmFycm93LCBBcmlhbCBOYXJyb3c7XFxuICAgICAgfVxcblxcbiAgICAgIC5jbHMtNyB7XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDZlbTtcXG4gICAgICB9XFxuXFxuICAgICAgLmNscy04IHtcXG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDMuMiAzLjI7XFxuICAgICAgfVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7QUFFQSxlQUFlOztBQUVmO0lBQ0ksZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUEsUUFBUTs7QUFFUjtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7QUFDQTs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCOztBQUVBLG1CQUFtQjs7QUFFbkI7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLFVBQVU7O0FBRVY7QUFDQTs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtBQUNBOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUEsYUFBYTs7QUFFYjtJQUNJLFVBQVU7SUFDViwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUEsYUFBYTs7QUFFYjtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLGNBQWM7SUFDZCxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQSxtQkFBbUI7O0FBRW5CO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsZUFBZTs7TUFFVDtRQUNFLGFBQWE7TUFDZjs7TUFFQTtRQUNFLGFBQWE7TUFDZjs7TUFFQTtRQUNFLGFBQWE7TUFDZjs7TUFFQTtRQUNFLFVBQVU7UUFDVixlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixtQkFBbUI7TUFDckI7O01BRUE7UUFDRSx5QkFBeUI7TUFDM0I7O01BRUE7UUFDRSxjQUFjO1FBQ2QsYUFBYTtRQUNiLHNDQUFzQztNQUN4Qzs7TUFFQTtRQUNFLHVCQUF1QjtNQUN6Qjs7TUFFQTtRQUNFLHlCQUF5QjtNQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG4vKiBDb250YWluZXJzICovXFxuXFxuI3Ryb3BpY2FsLWN5Y2xvbmUtZGF5cy13cmFwcGVyIHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsIE5hcnJvdywgc2VyaWY7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAxMjAwcHg7XFxufVxcblxcbi5mbGV4LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmZsZXgtY29sdW1uIHtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLyogTWFwICovXFxuXFxuI21hcC1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmctbGVmdDogMSU7XFxufVxcblxcbiNtYXAtaW5mbyB7XFxufVxcblxcbiNtYXAge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4vKiogTWFwIENvbnRyb2xzICoqL1xcblxcbiN0cmFjay1pbmZvLW1hcC1jb250cm9sIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCBOYXJyb3csIHNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI3RyYWNrLWluZm8tbWFwLWNvbnRyb2wuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogR3JhcGggKi9cXG5cXG4jZ3JhcGgtY29udGFpbmVyIHtcXG59XFxuXFxuLmRhdGEtdG9vbHRpcHMgLnRvb2x0aXAge1xcbiAgICB3aWR0aDogMTgwcHg7XFxuICAgIGhlaWdodDogODVweDtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLnRpY2sgdGV4dCB7XFxuICAgIGZpbGw6ICM1OTU5NTk7XFxufVxcblxcbiN5LWF4aXMtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbn1cXG5cXG4jcGxvdCAudGljayB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbiNncmFwaC1jb250YWluZXIge1xcbn1cXG5cXG4jZ3JhcGgtdGl0bGUge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIENvbnRyb2xzICovXFxuXFxuI21lbnUtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgLypqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0OyovXFxufVxcblxcbiNtZW51IGRpdiB7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuI2NvbnRyb2xzLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyoqIExlZ2VuZCAqKi9cXG5cXG4jbGVnZW5kLWNvbnRhaW5lciBkaXYge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbiNsZWdlbmQtY29udGFpbmVyIHN2ZyB7XFxuICAgIHdpZHRoOiAyMjBweDtcXG59XFxuXFxuI3Nob3ctc3Rvcm0tdHlwZXMge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiA5cHg7XFxuICAgIGxlZnQ6IDRweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDc1cHg7XFxufVxcblxcbiNzaG93LXN0b3JtLXR5cGVzIGlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBib3JkZXItd2lkdGg6IC41cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjYuNHB4O1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxufVxcblxcbiNzaG93LXN0b3JtLXR5cGVzIGlucHV0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcXG59XFxuXFxuI3Nob3ctc3Rvcm0tdHlwZXMgaW5wdXQuYWN0aXZlIHtcXG4gICAgY29sb3I6ICNlOGVhZWI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZWE2YWI7XFxufVxcblxcbiNzaG93LXN0b3JtLXR5cGVzIGlucHV0LmFjdGl2ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MzliYTA7XFxufVxcblxcbi8qKiBTZWxlY3QgWWVhcnMgKiovXFxuXFxuI3llYXItc2VsZWN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XFxufVxcblxcbiN5ZWFyLXNlbGVjdCA+IGRpdiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4jeWVhci1zZWxlY3QgLmxhYmVsIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMzNweDtcXG59XFxuXFxuI3llYXItc2VsZWN0IHNlbGVjdCB7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogMXB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuc3ZnIC5iYXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIExlZ2VuZCBTVkcgKi9cXG5cXG4gICAgICAuY2xzLTEge1xcbiAgICAgICAgZmlsbDogIzBiNTM5ZDtcXG4gICAgICB9XFxuXFxuICAgICAgLmNscy0yIHtcXG4gICAgICAgIGZpbGw6ICM2YmFlZDY7XFxuICAgICAgfVxcblxcbiAgICAgIC5jbHMtMyB7XFxuICAgICAgICBmaWxsOiAjYzdkYmVlO1xcbiAgICAgIH1cXG5cXG4gICAgICAuY2xzLTQsIC5jbHMtNSwgLmNscy04IHtcXG4gICAgICAgIGZpbGw6IG5vbmU7XFxuICAgICAgICBzdHJva2U6ICMwMTAxMDE7XFxuICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxuICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XFxuICAgICAgICBzdHJva2Utd2lkdGg6IDAuNXB4O1xcbiAgICAgIH1cXG5cXG4gICAgICAuY2xzLTUge1xcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMy4yIDMuMjtcXG4gICAgICB9XFxuXFxuICAgICAgLmNscy02IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xcbiAgICAgICAgZmlsbDogIzAxMDEwMTtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbE5hcnJvdywgQXJpYWwgTmFycm93O1xcbiAgICAgIH1cXG5cXG4gICAgICAuY2xzLTcge1xcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA2ZW07XFxuICAgICAgfVxcblxcbiAgICAgIC5jbHMtOCB7XFxuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAzLjIgMy4yO1xcbiAgICAgIH1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuaW1wb3J0ICcuL2luZGV4LmNzcydcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJ1xuaW1wb3J0IHsgZGF0YSB9ICBmcm9tICcuL2RhdGEnXG5pbXBvcnQgeyBHcmFwaCB9IGZyb20gJy4vZ3JhcGgnXG5cbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJ1xuXG5jb25zdCBtaW5ZZWFyID0gdXRpbC5nZXRNaW5ZZWFyKGRhdGEpXG5jb25zdCBtYXhZZWFyID0gdXRpbC5nZXRNYXhZZWFyKGRhdGEpXG5cbmNvbnN0IGdyYXBoID0gbmV3IEdyYXBoKGNvbmZpZywgZGF0YSlcblxuY29uc3QgY2hlY2tib3hJZHMgPSB7XG4gICduYW1lZF9zdG9ybSc6ICdzaG93LW5hbWVkLXN0b3JtcycsXG4gICdodXJyaWNhbmUnOiAnc2hvdy1taW5vci1odXJyaWNhbmVzJyxcbiAgJ21ham9yX2h1cnJpY2FuZSc6ICdzaG93LW1ham9yLWh1cnJpY2FuZXMnXG59XG5cbmZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhjaGVja2JveElkcykpIHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjaGVja2JveElkc1trZXldKVxuICBpZiAoY29uZmlnLnN0b3JtVHlwZXNba2V5XS5hY3RpdmUpIHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICB9XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgIGdyYXBoLnN0b3JtVHlwZXNba2V5XS5hY3RpdmUgPSB0cnVlXG4gICAgICBncmFwaC5zaG93QmFycyhrZXkpXG4gICAgICB1dGlsLnNob3dMZWdlbmRCYXIoa2V5KVxuICAgIH0gZWxzZSB7XG4gICAgICBncmFwaC5zdG9ybVR5cGVzW2tleV0uYWN0aXZlID0gZmFsc2VcbiAgICAgIGdyYXBoLmhpZGVCYXJzKGtleSlcbiAgICAgIHV0aWwuaGlkZUxlZ2VuZEJhcihrZXkpXG4gICAgfVxuICB9KVxufVxuXG5sZXQgc2VsZWN0ZWRTdGFydFllYXIgPSBncmFwaC55ZWFyU3RhcnRcbmxldCBzZWxlY3RlZEVuZFllYXIgPSBncmFwaC55ZWFyRW5kXG5cbmNvbnN0IHllYXJTdGFydFNlbGVjdCA9IHV0aWwuc2V0dXBZZWFyU2VsZWN0KCdzdGFydCcsIHNlbGVjdGVkU3RhcnRZZWFyLCBtaW5ZZWFyLCBtYXhZZWFyKVxuY29uc3QgeWVhckVuZFNlbGVjdCA9IHV0aWwuc2V0dXBZZWFyU2VsZWN0KCdlbmQnLCBzZWxlY3RlZEVuZFllYXIsIG1pblllYXIsIG1heFllYXIpXG5cbnllYXJTdGFydFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gIHNlbGVjdGVkU3RhcnRZZWFyID0gcGFyc2VJbnQoeWVhclN0YXJ0U2VsZWN0LnZhbHVlKVxuICBncmFwaC51cGRhdGVZZWFyU3RhcnQoc2VsZWN0ZWRTdGFydFllYXIpXG4gIHV0aWwuc2V0dXBZZWFyU2VsZWN0KCdlbmQnLCBzZWxlY3RlZEVuZFllYXIsIHNlbGVjdGVkU3RhcnRZZWFyLCBncmFwaC5NQVhfWUVBUilcbn0pXG5cbnllYXJFbmRTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICBzZWxlY3RlZEVuZFllYXIgPSBwYXJzZUludCh5ZWFyRW5kU2VsZWN0LnZhbHVlKVxuICBncmFwaC51cGRhdGVZZWFyRW5kKHNlbGVjdGVkRW5kWWVhcilcbiAgdXRpbC5zZXR1cFllYXJTZWxlY3QoJ3N0YXJ0Jywgc2VsZWN0ZWRTdGFydFllYXIsIGdyYXBoLk1JTl9ZRUFSLCBzZWxlY3RlZEVuZFllYXIpXG59KVxuXG4vLyBNYXBcbmNvbnN0IGZpdEJvdW5kcyA9IFtcbiAge2xhdDogNTAuMCwgbG5nOiAtNjB9LFxuICB7bGF0OiA1LCBsbmc6IC0xMDB9XG5dXG5jb25zdCBtYXAgPSBMLm1hcCgnbWFwJykuZml0Qm91bmRzKGZpdEJvdW5kcylcblxuLy8gVE9ETyBtb3ZlIHRoaXNcbmNvbnN0IGFwaUtleSA9IFwiQUFQSzE2MDFlZWRmMDgwYTRiMDViNzZjMGM1ZGU3MDI0MzdjX3hnWXkwRVhQY2pHTzJlTXdHNEVVNTBjdXR0dTNMc20xRFEzVUJnSUVJblc5TEpOZm11QlVNWWR4SWVpLWNqVVwiO1xuY29uc3QgYmFzZW1hcCA9IEwuZXNyaS5WZWN0b3IudmVjdG9yQmFzZW1hcExheWVyKCdBcmNHSVM6RGFya0dyYXknLCB7IGFwaUtleTogYXBpS2V5IH0pXG5cbndpbmRvdy5tYXAgPSBtYXBcblxuYmFzZW1hcC5hZGRUbyhtYXApXG5cbmNvbnN0IFRyYWNrSW5mb01hcENvbnRyb2wgPSBMLkNvbnRyb2wuZXh0ZW5kKHtcbiAgb3B0aW9uczoge1xuICAgIHBvc2l0aW9uOiAndG9wcmlnaHQnXG4gIH0sXG4gIG9uQWRkOiBmdW5jdGlvbiAobWFwKSB7XG4gICAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZS5pZCA9ICd0cmFjay1pbmZvLW1hcC1jb250cm9sJ1xuICAgIGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICByZXR1cm4gZVxuICB9XG59KVxuXG5jb25zdCBjb250cm9sID0gbmV3IFRyYWNrSW5mb01hcENvbnRyb2woKVxuXG53aW5kb3cubWFwLmFkZENvbnRyb2woY29udHJvbClcblxuLy8gZHVtbXkgZmVhdHVyZSBmb3IgbG9nZ2luZ1xuLy9sZXQgZjtcblxuY29uc3QgbGF5ZXIgPSBMLmVzcmkuZmVhdHVyZUxheWVyKHtcbiAgdXJsOiAnaHR0cHM6Ly9zZXJ2aWNlczIuYXJjZ2lzLmNvbS9GaWFQQTRnYTBpUUtkdXYzL0FyY0dJUy9yZXN0L3NlcnZpY2VzL0lCVHJBQ1NfQUxMX2xpc3RfdjA0cjAwX2xpbmVzXzEvRmVhdHVyZVNlcnZlci8wJyxcbiAgc3R5bGU6IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgLy9pZiAoIWYpIHsgZiA9IGZlYXR1cmU7ICBjb25zb2xlLmxvZyhmZWF0dXJlKSB9XG4gICAgbGV0IGM7XG4gICAgbGV0IHByb3AgPSBmZWF0dXJlLnByb3BlcnRpZXMuVVNBX1dJTkRcbiAgICBpZiAocHJvcCA8IDY0ICYmIHByb3AgPj0gMzQpIHsgYyA9IGNvbmZpZy5zdG9ybVR5cGVzWyduYW1lZF9zdG9ybSddWydmaWxsJ10gfVxuICAgIGlmIChwcm9wID49IDY0ICYmIHByb3AgPCA5NikgeyBjID0gY29uZmlnLnN0b3JtVHlwZXNbJ2h1cnJpY2FuZSddWydmaWxsJ10gfVxuICAgIGlmIChwcm9wID49IDk2KSB7IGMgPSBjb25maWcuc3Rvcm1UeXBlc1snbWFqb3JfaHVycmljYW5lJ11bJ2ZpbGwnXSB9O1xuICAgIGlmICghYykgeyBjID0gJ3doaXRlJyB9XG4gICAgcmV0dXJuIHsgY29sb3I6IGMsIG9wYWNpdHk6IDEsIHdlaWdodDogNSB9XG4gIH0sXG4gIHdoZXJlOiAnMT0wJ1xufSkuYWRkVG8obWFwKTtcblxuZ3JhcGgubGF5ZXIgPSBsYXllclxuXG4vKlxuY29uc3QgZmVhdHVyZV9pbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlYXR1cmUtaW5mbycpXG5cbmxheWVyLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZmVhdHVyZV9pbmZvLmlubmVySFRNTCA9IHJlbmRlcl9mZWF0dXJlKGV2ZW50LmxheWVyLmZlYXR1cmUpXG59KVxuXG5sYXllci5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZmVhdHVyZV9pbmZvLmlubmVySFRNTCA9ICdIb3ZlciBvdmVyIGEgc3Rvcm0gdHJhY2sgZm9yIG1vcmUgZGF0YSdcbn0pXG5cbmNvbnN0IHJlbmRlcl9mZWF0dXJlID0gZiA9PiB7XG4gIGNvbnN0IHByb3BzID0gZi5wcm9wZXJ0aWVzXG4gIGNvbnN0IGRpc3BsYXlfcHJvcHMgPSBbICdMQVQnLCAnTE9OJywgJ1VTQV9XSU5EJywgJ3llYXInLCAnbW9udGgnLCAnZGF5JywgJ05BTUUnIF1cbiAgY29uc3QgcmVuZGVyZWQgPSBgXG4gICAgTmFtZTogJHtwcm9wc1snTkFNRSddfSA8YnI+XG4gICAgV2luZCBTcGVlZDogJHtwcm9wc1snVVNBX1dJTkQnXX0ga25vdHMgPGJyPlxuICAgIERhdGU6ICR7cHJvcHNbJ21vbnRoJ119LyR7cHJvcHNbJ2RheSddfS8ke3Byb3BzWyd5ZWFyJ119IDxicj5cbiAgICBMYXQ6ICR7cHJvcHNbJ0xBVCddfSA8YnI+XG4gICAgTG9uOiAke3Byb3BzWydMT04nXX0gPGJyPlxuICBgXG4gIHJldHVybiByZW5kZXJlZFxufVxuXG5jb25zdCByZW5kZXJfcHJvcCA9IChrZXksIHZhbHVlKSA9PiB7XG4gIHJldHVybiBgJHtrZXl9OiAke3ZhbHVlfVxcbmBcbn1cblxuKi9cbiJdLCJuYW1lcyI6WyJjb25maWciLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwieWVhclN0YXJ0IiwieWVhckVuZCIsInlBeGlzVGl0bGUiLCJzdG9ybVR5cGVzIiwiVElDS19MQUJFTF9USFJFU0hPTEQiLCJUSUNLX0xBQkVMX1NURVAiLCJUT09MVElQX0hFSUdIVCIsIlRPT0xUSVBfV0lEVEgiLCJkYXRhIiwidXRpbCIsIkdyYXBoIiwiTUlOX1lFQVIiLCJnZXRNaW5ZZWFyIiwiTUFYX1lFQVIiLCJnZXRNYXhZZWFyIiwieWVhcnMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiZCIsInBhcnNlSW50IiwicGxvdCIsImluaXRQbG90IiwiZGF0YXNldHMiLCJpbml0RGF0YXNldHMiLCJ4IiwiaW5pdFhTY2FsZSIsInkiLCJpbml0WVNjYWxlIiwiZm9yRWFjaCIsImtleSIsImluaXRCYXJzIiwieEF4aXMiLCJhcHBlbmRYQXhpcyIsImluaXRYQXhpcyIsInNldFlBeGlzVGl0bGUiLCJ5QXhpcyIsImluaXRZQXhpcyIsImluaXRUb29sdGlwcyIsImluaXRTdG9ybVR5cGVzIiwiZmlsdGVyIiwiYWN0aXZlIiwic2hvd0JhcnMiLCJhcHBlbmQiLCJhdHRyIiwiaHRtbCIsImQzIiwic2VsZWN0IiwiQXJyYXkiLCJzY2FsZUJhbmQiLCJkb21haW4iLCJnZXRYRG9tYWluIiwicmFuZ2UiLCJzY2FsZUxpbmVhciIsImNhbGNNYXgiLCJyZW1vdmUiLCJjYWxsIiwiYXhpc0JvdHRvbSIsInRpY2tTaXplT3V0ZXIiLCJzZWxlY3RBbGwiLCJzdHlsZSIsImkiLCJub2RlcyIsImxlbmd0aCIsImF4aXNMZWZ0IiwieXIiLCJwdXNoIiwiZGF0YXNldCIsInllYXIiLCJTdHJpbmciLCJtYXgiLCJ2YWx1ZSIsIm5ld1llYXJTdGFydCIsInVwZGF0ZSIsIm5ld1llYXJFbmQiLCJyZW1vdmVUb29sdGlwcyIsInJlbW92ZUJhcnMiLCJnZXRBY3RpdmVTdG9ybVR5cGVzIiwicmVtb3ZlWEF4aXMiLCJnZXRBY3RpdmVEYXRhIiwiYmFycyIsImVudGVyIiwiYmFuZHdpZHRoIiwiZmlsbCIsIm9uIiwidG9nZ2xlVG9vbHRpcCIsImluZGV4IiwibnNfZCIsImhfZCIsIm1oX2QiLCJ0cmFja0luZm9Db250cm9sIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNlbGVjdGVkWWVhclNwYW4iLCJpbm5lckhUTUwiLCJjbGFzc0xpc3QiLCJ3aGVyZSIsIndoZXJlRmFjdG9yeSIsImxheWVyIiwic2V0V2hlcmUiLCJzZXRTdHlsZSIsImZlYXR1cmUiLCJjIiwicHJvcCIsInByb3BlcnRpZXMiLCJVU0FfV0lORCIsImNvbG9yIiwib3BhY2l0eSIsIndlaWdodCIsIm5vcm1hbCIsInNob3dUb29sdGlwIiwicmFpc2UiLCJ0b29sdGlwcyIsImNhbGNUb29sdGlwWCIsInRvb2x0aXBfdGV4dCIsInRleHRfbWFyZ2luIiwidG9vbHRpcCIsInRyYW5zaXRpb24iLCJoaWRlQmFycyIsInN0b3JtV2hlcmUiLCJnZXRMZWdlbmRCYXJJZCIsInJlcGxhY2UiLCJoaWRlTGVnZW5kQmFyIiwiaWQiLCJlbCIsIm5vZGUiLCJzaG93TGVnZW5kQmFyIiwiayIsIm1pbiIsIm9wdGlvbkZhY3RvcnkiLCJvcHQiLCJjcmVhdGVFbGVtZW50IiwicmVtb3ZlQ2hpbGROb2RlcyIsInBhcmVudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsInNldHVwWWVhclNlbGVjdCIsImxhYmVsIiwieWVhclNlbGVjdGVkIiwibWluWWVhciIsIm1heFllYXIiLCJ5ZWFyU2VsZWN0Iiwic2VsZWN0ZWRJbmRleCIsImFwcGVuZENoaWxkIiwib3B0aW9ucyIsImdyYXBoIiwiY2hlY2tib3hJZHMiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlIiwiY29udGFpbnMiLCJzZWxlY3RlZFN0YXJ0WWVhciIsInNlbGVjdGVkRW5kWWVhciIsInllYXJTdGFydFNlbGVjdCIsInllYXJFbmRTZWxlY3QiLCJ1cGRhdGVZZWFyU3RhcnQiLCJ1cGRhdGVZZWFyRW5kIiwiZml0Qm91bmRzIiwibGF0IiwibG5nIiwiTCIsImFwaUtleSIsImJhc2VtYXAiLCJlc3JpIiwiVmVjdG9yIiwidmVjdG9yQmFzZW1hcExheWVyIiwid2luZG93IiwiYWRkVG8iLCJUcmFja0luZm9NYXBDb250cm9sIiwiQ29udHJvbCIsImV4dGVuZCIsInBvc2l0aW9uIiwib25BZGQiLCJlIiwiY29udHJvbCIsImFkZENvbnRyb2wiLCJmZWF0dXJlTGF5ZXIiLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9