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
/* harmony export */   "getMaxYear": () => (/* binding */ getMaxYear),
/* harmony export */   "getMinYear": () => (/* binding */ getMinYear),
/* harmony export */   "optionFactory": () => (/* binding */ optionFactory),
/* harmony export */   "setupYearSelect": () => (/* binding */ setupYearSelect)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");

var whereFactory = function whereFactory(year, stormWhere) {
  return "YEAR=".concat(year, " AND ").concat(stormWhere);
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
___CSS_LOADER_EXPORT___.push([module.id, "\n#track-info-map-control {\n    background-color: white;\n    padding: 15px;\n    line-height: 1.6;\n    font-family: Arial Narrow, serif;\n    font-size: 1.2em;\n    border: 1px solid black;\n    border-radius: 10px;\n}\n\n#track-info-map-control.hidden {\n    display: none;\n}\n\n#tropical-cyclone-days-wrapper {\n    font-family: Arial Narrow, serif;\n    margin-top: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0;\n    width: 1200px;\n}\n\n#legend-container {\n    width: 280px;\n    position: relative;\n    left: 90px;\n}\n\n#legend-container input[type=\"checkbox\"] {\n    visibility: hidden;\n}\n\n#legend-container input[type=\"checkbox\"]:checked + span:before {\n    content: '\\2714';\n    position: absolute;\n    top: -5px;\n}\n\n#legend-container label span {\n    font-size: 1.2em;\n    height: 15px;\n    width: 15px;\n    border: 1px solid grey;\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n}\n\n#legend-container svg {\n    height: 100%;\n    width: 250px;\n    position: absolute;\n    top: 0;\n    left: 20px;\n}\n\n.flex-container {\n    display: flex;\n    flex-direction: row;\n    position: relative;\n}\n\n#map-container {\n    width: 50%;\n    padding-left: 1%;\n}\n\n#map-info {\n}\n\n#map {\n    height: 440px;\n    width: 95%;\n    border: 1px solid black;\n}\n\n#graph-container {\n    width: 50%;\n}\n\n.data-tooltips .tooltip {\n    width: 180px;\n    height: 85px;\n    font-size: 1.5em;\n}\n\n.tick text {\n    fill: #595959;\n}\n\n#y-axis-title {\n    font-size: 1.3em;\n}\n\n#plot .tick {\n    font-size: 1.5em;\n}\n\n#graph-container {\n}\n\n#graph-title {\n    font-weight: normal;\n    text-align: center;\n}\n\n#menu-container {\n    width: 50%;\n    /*justify-content: right;*/\n}\n\n#menu div {\n    margin: 10px;\n}\n\n#show-storm-types {\n    width: 28px;\n}\n\n#show-storm-types label {\n    display: block;\n    margin: 5px; \n}\n\n#year-select {\n    position: relative;\n    left: 100px;\n}\n\n#year-select div {\n    margin: 15px;\n}\n\nsvg .bar {\n    cursor: pointer;\n}\n\n/* Legend SVG */\n\n.cls-1 {\n  fill: #0b539d;\n}\n.cls-2 {\n  fill: #6baed6;\n}\n.cls-3 {\n  fill: #c7dbee;\n}\n.cls-4, .cls-5 {\n  fill: none;\n  stroke: #010101;\n  stroke-linecap: round;\n  stroke-miterlimit: 10;\n  stroke-width: 0.5px;\n}\n.cls-5 {\n  stroke-dasharray: 2.97 2.97;\n}\n.cls-6, .cls-7 {\n  font-size: 10px;\n  font-family: ArialNarrow, Arial Narrow;\n}\n.cls-6 {\n  fill: #010101;\n}\n.cls-7 {\n  fill: #231f20;\n}\n.cls-8 {\n  letter-spacing: -0.06em;\n}\n\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":";AACA;IACI,uBAAuB;IACvB,aAAa;IACb,gBAAgB;IAChB,gCAAgC;IAChC,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;IACV,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,qBAAqB;IACrB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,UAAU;AACd;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,gBAAgB;AACpB;;AAEA;AACA;;AAEA;IACI,aAAa;IACb,UAAU;IACV,uBAAuB;AAC3B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;AACA;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,0BAA0B;AAC9B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,cAAc;IACd,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA,eAAe;;AAEf;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,UAAU;EACV,eAAe;EACf,qBAAqB;EACrB,qBAAqB;EACrB,mBAAmB;AACrB;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,eAAe;EACf,sCAAsC;AACxC;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,uBAAuB;AACzB","sourcesContent":["\n#track-info-map-control {\n    background-color: white;\n    padding: 15px;\n    line-height: 1.6;\n    font-family: Arial Narrow, serif;\n    font-size: 1.2em;\n    border: 1px solid black;\n    border-radius: 10px;\n}\n\n#track-info-map-control.hidden {\n    display: none;\n}\n\n#tropical-cyclone-days-wrapper {\n    font-family: Arial Narrow, serif;\n    margin-top: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0;\n    width: 1200px;\n}\n\n#legend-container {\n    width: 280px;\n    position: relative;\n    left: 90px;\n}\n\n#legend-container input[type=\"checkbox\"] {\n    visibility: hidden;\n}\n\n#legend-container input[type=\"checkbox\"]:checked + span:before {\n    content: '\\2714';\n    position: absolute;\n    top: -5px;\n}\n\n#legend-container label span {\n    font-size: 1.2em;\n    height: 15px;\n    width: 15px;\n    border: 1px solid grey;\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n}\n\n#legend-container svg {\n    height: 100%;\n    width: 250px;\n    position: absolute;\n    top: 0;\n    left: 20px;\n}\n\n.flex-container {\n    display: flex;\n    flex-direction: row;\n    position: relative;\n}\n\n#map-container {\n    width: 50%;\n    padding-left: 1%;\n}\n\n#map-info {\n}\n\n#map {\n    height: 440px;\n    width: 95%;\n    border: 1px solid black;\n}\n\n#graph-container {\n    width: 50%;\n}\n\n.data-tooltips .tooltip {\n    width: 180px;\n    height: 85px;\n    font-size: 1.5em;\n}\n\n.tick text {\n    fill: #595959;\n}\n\n#y-axis-title {\n    font-size: 1.3em;\n}\n\n#plot .tick {\n    font-size: 1.5em;\n}\n\n#graph-container {\n}\n\n#graph-title {\n    font-weight: normal;\n    text-align: center;\n}\n\n#menu-container {\n    width: 50%;\n    /*justify-content: right;*/\n}\n\n#menu div {\n    margin: 10px;\n}\n\n#show-storm-types {\n    width: 28px;\n}\n\n#show-storm-types label {\n    display: block;\n    margin: 5px; \n}\n\n#year-select {\n    position: relative;\n    left: 100px;\n}\n\n#year-select div {\n    margin: 15px;\n}\n\nsvg .bar {\n    cursor: pointer;\n}\n\n/* Legend SVG */\n\n.cls-1 {\n  fill: #0b539d;\n}\n.cls-2 {\n  fill: #6baed6;\n}\n.cls-3 {\n  fill: #c7dbee;\n}\n.cls-4, .cls-5 {\n  fill: none;\n  stroke: #010101;\n  stroke-linecap: round;\n  stroke-miterlimit: 10;\n  stroke-width: 0.5px;\n}\n.cls-5 {\n  stroke-dasharray: 2.97 2.97;\n}\n.cls-6, .cls-7 {\n  font-size: 10px;\n  font-family: ArialNarrow, Arial Narrow;\n}\n.cls-6 {\n  fill: #010101;\n}\n.cls-7 {\n  fill: #231f20;\n}\n.cls-8 {\n  letter-spacing: -0.06em;\n}\n\n"],"sourceRoot":""}]);
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
  el.checked = _config__WEBPACK_IMPORTED_MODULE_1__.config.stormTypes[key].active;
  el.addEventListener('change', function () {
    if (this.checked) {
      graph.stormTypes[key].active = true;
      graph.showBars(key);
    } else {
      graph.stormTypes[key].active = false;
      graph.hideBars(key);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sQ0FBQ0csVUFBUixDQUFtQkMsUUFBOUI7O0FBQ0EsUUFBSUYsSUFBSSxHQUFHLEVBQVAsSUFBYUEsSUFBSSxJQUFJLEVBQXpCLEVBQTZCO0FBQUVELE1BQUFBLENBQUMsR0FBRzlHLHVFQUFKO0FBQThDOztBQUM3RSxRQUFJK0csSUFBSSxJQUFJLEVBQVIsSUFBY0EsSUFBSSxHQUFHLEVBQXpCLEVBQTZCO0FBQUVELE1BQUFBLENBQUMsR0FBRzlHLHFFQUFKO0FBQTRDOztBQUMzRSxRQUFJK0csSUFBSSxJQUFJLEVBQVosRUFBZ0I7QUFBRUQsTUFBQUEsQ0FBQyxHQUFHOUcsMkVBQUo7QUFBa0Q7O0FBQUE7O0FBQ3BFLFFBQUksQ0FBQzhHLENBQUwsRUFBUTtBQUFFQSxNQUFBQSxDQUFDLEdBQUcsT0FBSjtBQUFhOztBQUN2QixXQUFPO0FBQUVJLE1BQUFBLEtBQUssRUFBRUosQ0FBVDtBQUFZSyxNQUFBQSxPQUFPLEVBQUUsQ0FBckI7QUFBd0JDLE1BQUFBLE1BQU0sRUFBRTtBQUFoQyxLQUFQO0FBQ0QsR0FYK0I7QUFZaENaLEVBQUFBLEtBQUssRUFBRTtBQVp5QixDQUFwQixFQWFYK0QsS0FiVyxDQWFMNUksR0FiSyxDQUFkO0FBZUF1SCxLQUFLLENBQUN4QyxLQUFOLEdBQWNBLEtBQWQ7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIHRpdGxlOiAnTm9ydGggQXRsYW50aWMgV2VzdCBvZiA2MMKwVzogMTk1MC0yMDIwJyxcbiAgd2lkdGg6IDYwMCxcbiAgaGVpZ2h0OiA1MDAsXG4gIG1hcmdpbjogeyBsZWZ0OiA4MCwgcmlnaHQ6IDEwLCB0b3A6IDE1LCBib3R0b206IDYwIH0sXG4gIHllYXJTdGFydDogMTk1MCxcbiAgeWVhckVuZDogMjAyMCxcbiAgeUF4aXNUaXRsZTogJ1Ryb3BpY2FsIEN5Y2xvbmUgRGF5cyAocGVyIHllYXIpJyxcbiAgc3Rvcm1UeXBlczoge1xuICAgICduYW1lZF9zdG9ybSc6IHtcbiAgICAgICd3aGVyZSc6IFwiVVNBX1dJTkQ+PTM0IEFORCBCQVNJTiA9ICdOQSdcIixcbiAgICAgICdsYWJlbCc6ICdOYW1lZCBTdG9ybXMnLFxuICAgICAgJ3Rvb2x0aXAnOiAnTmFtZWQgU3Rvcm0gRGF5cycsXG4gICAgICAnbGVnZW5kX2xhYmVsJzogJ05hbWVkIFN0b3JtcyAoPj0gMzRrdCknLFxuICAgICAgJ2ZpbGwnOiAnI0M2REJFRicsXG4gICAgICAnYWN0aXZlJzogdHJ1ZVxuICAgIH0sXG4gICAgJ2h1cnJpY2FuZSc6IHtcbiAgICAgICd3aGVyZSc6IFwiVVNBX1dJTkQ+PTY0IEFORCBCQVNJTiA9ICdOQSdcIixcbiAgICAgICdsYWJlbCc6ICdIdXJyaWNhbmVzJyxcbiAgICAgICd0b29sdGlwJzogJ0h1cnJpY2FuZSBEYXlzJyxcbiAgICAgICdsZWdlbmRfbGFiZWwnOiAnSHVycmljYW5lcyAoPj02NGt0KScsXG4gICAgICAnZmlsbCc6ICcjNkJBRUQ2JyxcbiAgICAgICdhY3RpdmUnOiB0cnVlXG4gICAgfSxcbiAgICAnbWFqb3JfaHVycmljYW5lJzoge1xuICAgICAgJ3doZXJlJzogXCJVU0FfV0lORD49OTYgQU5EIEJBU0lOID0gJ05BJ1wiLFxuICAgICAgJ2xhYmVsJzogJ01ham9yIEh1cnJpY2FuZXMnLFxuICAgICAgJ3Rvb2x0aXAnOiAnTWFqb3IgSHVycmljYW5lIERheXMnLFxuICAgICAgJ2xlZ2VuZF9sYWJlbCc6ICdNYWpvciBIdXJyaWNhbmVzICg+PSA5Nmt0KScsXG4gICAgICAnZmlsbCc6ICcjMDg1MTlDJyxcbiAgICAgICdhY3RpdmUnOiB0cnVlXG4gICAgfVxuICB9LFxuICAvLyBTdG9wIGxhYmVsbGluZyBldmVyeSB4LWF4aXMgdGljayBhZnRlciB0aGlzIG1hbnkgZWxlbWVudHNcbiAgVElDS19MQUJFTF9USFJFU0hPTEQ6IDMwLFxuICAvLyBOdW1iZXIgb2YgdGlja3MgYmV0d2VlbiBsYWJlbHMgb25jZSBUSUNLX0xBQkVMX1RIUkVTREhPTEQgaXMgbWV0IChpbmNsdXNpdmUpXG4gIFRJQ0tfTEFCRUxfU1RFUDogNSxcbiAgLy8gVGhlc2Ugc2hvdWxkIGJlIGNvbnNpc3RlbnQgd2l0aCB0aGUgQ1NTXG4gIFRPT0xUSVBfSEVJR0hUOiA4NSxcbiAgVE9PTFRJUF9XSURUSDogMTgwXG59XG5cbiIsIlxuZXhwb3J0IGNvbnN0IGRhdGEgPSB7XG4gIFwiMTk1MFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMTEuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAzOCxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDU5LjVcbiAgfSxcbiAgXCIxOTUxXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLjc1LFxuICAgIFwiaHVycmljYW5lXCI6IDIzLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDEuNzVcbiAgfSxcbiAgXCIxOTUyXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAyLjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTQuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyN1xuICB9LFxuICBcIjE5NTNcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTQuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0NFxuICB9LFxuICBcIjE5NTRcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDcsXG4gICAgXCJodXJyaWNhbmVcIjogMjAuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQ1XG4gIH0sXG4gIFwiMTk1NVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogOC41LFxuICAgIFwiaHVycmljYW5lXCI6IDMzLFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNTkuMjVcbiAgfSxcbiAgXCIxOTU2XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxLjc1LFxuICAgIFwiaHVycmljYW5lXCI6IDEwLjc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjkuNVxuICB9LFxuICBcIjE5NTdcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAuNSxcbiAgICBcImh1cnJpY2FuZVwiOiA1LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyMi43NVxuICB9LFxuICBcIjE5NThcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMTYuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0MS41XG4gIH0sXG4gIFwiMTk1OVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMy4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMi4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDM2LjI1XG4gIH0sXG4gIFwiMTk2MFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNi43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMixcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI3XG4gIH0sXG4gIFwiMTk2MVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMTMuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMjQuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0Ni4yNVxuICB9LFxuICBcIjE5NjJcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAsXG4gICAgXCJodXJyaWNhbmVcIjogMTEuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyNS43NVxuICB9LFxuICBcIjE5NjNcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMjIuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAzNS43NVxuICB9LFxuICBcIjE5NjRcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDguNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMzMsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA1My41XG4gIH0sXG4gIFwiMTk2NVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNi4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiA5Ljc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjFcbiAgfSxcbiAgXCIxOTY2XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA4Ljc1LFxuICAgIFwiaHVycmljYW5lXCI6IDI1Ljc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMzYuNVxuICB9LFxuICBcIjE5NjdcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDUuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMTguNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI4Ljc1XG4gIH0sXG4gIFwiMTk2OFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMCxcbiAgICBcImh1cnJpY2FuZVwiOiA3LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyMC41XG4gIH0sXG4gIFwiMTk2OVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNC43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAyNC41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDkuNzVcbiAgfSxcbiAgXCIxOTcwXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxLFxuICAgIFwiaHVycmljYW5lXCI6IDYsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyMC41XG4gIH0sXG4gIFwiMTk3MVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMSxcbiAgICBcImh1cnJpY2FuZVwiOiAxNy4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQ2LjI1XG4gIH0sXG4gIFwiMTk3MlwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMCxcbiAgICBcImh1cnJpY2FuZVwiOiAyLjc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTcuNVxuICB9LFxuICBcIjE5NzNcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAsXG4gICAgXCJodXJyaWNhbmVcIjogMy4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDIwLjVcbiAgfSxcbiAgXCIxOTc0XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTAuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDMxLjc1XG4gIH0sXG4gIFwiMTk3NVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMi4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMS41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjVcbiAgfSxcbiAgXCIxOTc2XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLjc1LFxuICAgIFwiaHVycmljYW5lXCI6IDMuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxNS4yNVxuICB9LFxuICBcIjE5NzdcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEsXG4gICAgXCJodXJyaWNhbmVcIjogNS4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDEzLjI1XG4gIH0sXG4gIFwiMTk3OFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMyxcbiAgICBcImh1cnJpY2FuZVwiOiA4LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjJcbiAgfSxcbiAgXCIxOTc5XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA0LjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDExLjc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjguMjVcbiAgfSxcbiAgXCIxOTgwXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA2LjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDkuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDIyLjI1XG4gIH0sXG4gIFwiMTk4MVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMi4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDM2XG4gIH0sXG4gIFwiMTk4MlwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMC43NSxcbiAgICBcImh1cnJpY2FuZVwiOiA0LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTFcbiAgfSxcbiAgXCIxOTgzXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDIuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxMS4yNVxuICB9LFxuICBcIjE5ODRcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMTEuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDMyXG4gIH0sXG4gIFwiMTk4NVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNCxcbiAgICBcImh1cnJpY2FuZVwiOiAxOC4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQxLjVcbiAgfSxcbiAgXCIxOTg2XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLFxuICAgIFwiaHVycmljYW5lXCI6IDIuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxMi43NVxuICB9LFxuICBcIjE5ODdcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAyLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTIuNVxuICB9LFxuICBcIjE5ODhcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDYuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMi4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI4LjVcbiAgfSxcbiAgXCIxOTg5XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTIuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI2XG4gIH0sXG4gIFwiMTk5MFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMCxcbiAgICBcImh1cnJpY2FuZVwiOiA5LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjUuNVxuICB9LFxuICBcIjE5OTFcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogNy4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDE0LjVcbiAgfSxcbiAgXCIxOTkyXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLjUsXG4gICAgXCJodXJyaWNhbmVcIjogNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDE3XG4gIH0sXG4gIFwiMTk5M1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMC43NSxcbiAgICBcImh1cnJpY2FuZVwiOiA3LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyMC4yNVxuICB9LFxuICBcIjE5OTRcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAsXG4gICAgXCJodXJyaWNhbmVcIjogMSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDE2XG4gIH0sXG4gIFwiMTk5NVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNy4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAzNC41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNjNcbiAgfSxcbiAgXCIxOTk2XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA5LjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDI5LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA1MFxuICB9LFxuICBcIjE5OTdcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogNS41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMThcbiAgfSxcbiAgXCIxOTk4XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA4LFxuICAgIFwiaHVycmljYW5lXCI6IDI3LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0Mi41XG4gIH0sXG4gIFwiMTk5OVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNy41LFxuICAgIFwiaHVycmljYW5lXCI6IDI2Ljc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDdcbiAgfSxcbiAgXCIyMDAwXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDEwLFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMzAuMjVcbiAgfSxcbiAgXCIyMDAxXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLjc1LFxuICAgIFwiaHVycmljYW5lXCI6IDE1Ljc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDJcbiAgfSxcbiAgXCIyMDAyXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLFxuICAgIFwiaHVycmljYW5lXCI6IDguNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0Mi4yNVxuICB9LFxuICBcIjIwMDNcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDcuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxNC41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDAuNVxuICB9LFxuICBcIjIwMDRcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDE0LFxuICAgIFwiaHVycmljYW5lXCI6IDI2Ljc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNTEuNVxuICB9LFxuICBcIjIwMDVcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDE3LjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDM3LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogODIuMjVcbiAgfSxcbiAgXCIyMDA2XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLFxuICAgIFwiaHVycmljYW5lXCI6IDMuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyMS4yNVxuICB9LFxuICBcIjIwMDdcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDYsXG4gICAgXCJodXJyaWNhbmVcIjogMTAuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI1LjI1XG4gIH0sXG4gIFwiMjAwOFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNS41LFxuICAgIFwiaHVycmljYW5lXCI6IDIzLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNjQuNzVcbiAgfSxcbiAgXCIyMDA5XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDUuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxMy4yNVxuICB9LFxuICBcIjIwMTBcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDQuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMjEsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA1MS43NVxuICB9LFxuICBcIjIwMTFcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDQuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxOS4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDYwXG4gIH0sXG4gIFwiMjAxMlwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMC4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMi4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQ4XG4gIH0sXG4gIFwiMjAxM1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMCxcbiAgICBcImh1cnJpY2FuZVwiOiAxLjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxNFxuICB9LFxuICBcIjIwMTRcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTIsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyNC4yNVxuICB9LFxuICBcIjIwMTVcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuNSxcbiAgICBcImh1cnJpY2FuZVwiOiA3LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTkuNzVcbiAgfSxcbiAgXCIyMDE2XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA4Ljc1LFxuICAgIFwiaHVycmljYW5lXCI6IDE2LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDIuNVxuICB9LFxuICBcIjIwMTdcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEyLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDMyLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNTkuNzVcbiAgfSxcbiAgXCIyMDE4XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA0LFxuICAgIFwiaHVycmljYW5lXCI6IDksXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyNC4yNVxuICB9LFxuICBcIjIwMTlcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDYuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTQuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAzOS4yNVxuICB9LFxuICBcIjIwMjBcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDUuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAyOCxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDgxXG4gIH1cbn1cblxuIiwiXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCdcblxuZXhwb3J0IGNsYXNzIEdyYXBoIHtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcsIGRhdGEpIHtcbiAgICB0aGlzLk1JTl9ZRUFSID0gdXRpbC5nZXRNaW5ZZWFyKGRhdGEpXG4gICAgdGhpcy5NQVhfWUVBUiA9IHV0aWwuZ2V0TWF4WWVhcihkYXRhKVxuICAgIHRoaXMuVElDS19MQUJFTF9USFJFU0hPTEQgPSBjb25maWcuVElDS19MQUJFTF9USFJFU0hPTERcbiAgICB0aGlzLlRJQ0tfTEFCRUxfU1RFUCA9IGNvbmZpZy5USUNLX0xBQkVMX1NURVBcbiAgICB0aGlzLlRPT0xUSVBfV0lEVEggPSBjb25maWcuVE9PTFRJUF9XSURUSFxuICAgIHRoaXMuVE9PTFRJUF9IRUlHSFQgPSBjb25maWcuVE9PTFRJUF9IRUlHSFRcblxuICAgIHRoaXMuZGF0YSA9IGRhdGFcbiAgICB0aGlzLnRpdGxlID0gY29uZmlnLnRpdGxlXG4gICAgdGhpcy55QXhpc1RpdGxlID0gY29uZmlnLnlBeGlzVGl0bGVcbiAgICB0aGlzLnllYXJzID0gT2JqZWN0LmtleXMoZGF0YSkubWFwKGQgPT4gcGFyc2VJbnQoZCkpXG4gICAgdGhpcy55ZWFyU3RhcnQgPSBjb25maWcueWVhclN0YXJ0XG4gICAgdGhpcy55ZWFyRW5kID0gY29uZmlnLnllYXJFbmRcbiAgICB0aGlzLnN0b3JtVHlwZXMgPSBjb25maWcuc3Rvcm1UeXBlc1xuICAgIHRoaXMubWFyZ2luID0gY29uZmlnLm1hcmdpblxuICAgIHRoaXMud2lkdGggPSBjb25maWcud2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IGNvbmZpZy5oZWlnaHRcbiAgICB0aGlzLnBsb3QgPSB0aGlzLmluaXRQbG90KClcbiAgICB0aGlzLmRhdGFzZXRzID0gdGhpcy5pbml0RGF0YXNldHMoT2JqZWN0LmtleXMoY29uZmlnLnN0b3JtVHlwZXMpKVxuICAgIHRoaXMueCA9IHRoaXMuaW5pdFhTY2FsZSgpXG4gICAgdGhpcy55ID0gdGhpcy5pbml0WVNjYWxlKClcblxuICAgIC8vIEluc2VydCBTVkcgZWxlbWVudHNcblxuICAgIC8vIFNWRyBlbGVtZW50cyBhcmUgcGFpbnRlZCBpbiB0aGUgb3JkZXIgdGhleSBhcmUgaW5zZXJ0ZWQsXG4gICAgLy8gc28gd2UgYWRkIHRoZSBheGVzIGFuZCB0b29sdGlwcyBsYXN0IHNvIHRoZXkgc2hvdyB1cCBvdmVyIHRoZSBiYXJzXG4gICAgLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9yZW5kZXIuaHRtbCNSZW5kZXJpbmdPcmRlclxuXG4gICAgLy8gSW5pdGlhbGl6ZSBkYXRhIGJhcnMgd2l0aCB6ZXJvIGhlaWdodFxuICAgIE9iamVjdC5rZXlzKGNvbmZpZy5zdG9ybVR5cGVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICB0aGlzLmluaXRCYXJzKGtleSlcbiAgICB9KVxuXG4gICAgLy8gRHJhdyB0aGUgYXhlc1xuICAgIHRoaXMueEF4aXMgPSB0aGlzLmFwcGVuZFhBeGlzKClcbiAgICB0aGlzLmluaXRYQXhpcygpXG4gICAgdGhpcy5zZXRZQXhpc1RpdGxlKClcbiAgICB0aGlzLnlBeGlzID0gdGhpcy5pbml0WUF4aXMoKVxuXG4gICAgLy8gRHJhdyB0aGUgdG9vbHRpcHNcbiAgICBPYmplY3Qua2V5cyhjb25maWcuc3Rvcm1UeXBlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgdGhpcy5pbml0VG9vbHRpcHMoa2V5KVxuICAgIH0pXG5cbiAgICAvLyBTaG93IHRoZSBiYXJzIGZvciBpbml0aWFsbHkgYWN0aXZhdGVkIHN0b3JtIHR5cGVzXG4gICAgY29uc3QgaW5pdFN0b3JtVHlwZXMgPSBPYmplY3Qua2V5cyh0aGlzLnN0b3JtVHlwZXMpLmZpbHRlcihrZXkgPT4gdGhpcy5zdG9ybVR5cGVzW2tleV0uYWN0aXZlKVxuICAgIGluaXRTdG9ybVR5cGVzLmZvckVhY2goa2V5ID0+IHRoaXMuc2hvd0JhcnMoa2V5KSlcblxuICB9XG5cbiAgc2V0WUF4aXNUaXRsZSgpIHtcbiAgICB0aGlzLnBsb3QuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdpZCcsICd5LWF4aXMtdGl0bGUnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGByb3RhdGUoLTkwKSB0cmFuc2xhdGUoLSR7dGhpcy5oZWlnaHQvNX0sIDMwKWApXG4gICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC5odG1sKHRoaXMueUF4aXNUaXRsZSlcbiAgfVxuXG4gIGluaXRQbG90KCkge1xuICAgIHJldHVybiBkMy5zZWxlY3QoJyNncmFwaCcpXG4gICAgICAuYXR0cignd2lkdGgnLCB0aGlzLndpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0KVxuICB9XG5cbiAgZ2V0WERvbWFpbigpIHtcbiAgICByZXR1cm4gWy4uLkFycmF5KHRoaXMueWVhckVuZC10aGlzLnllYXJTdGFydCsxKS5rZXlzKCldLm1hcChkID0+IGQrdGhpcy55ZWFyU3RhcnQpXG4gIH1cblxuICBpbml0WFNjYWxlKCkge1xuICAgIHJldHVybiBkMy5zY2FsZUJhbmQoKVxuICAgICAgLmRvbWFpbih0aGlzLmdldFhEb21haW4oKSlcbiAgICAgIC5yYW5nZShbdGhpcy5tYXJnaW4ubGVmdCwgdGhpcy53aWR0aCAtIHRoaXMubWFyZ2luLnJpZ2h0XSlcbiAgfVxuXG4gIGluaXRZU2NhbGUoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIHRoaXMuY2FsY01heCgpXSlcbiAgICAgIC5yYW5nZShbdGhpcy5oZWlnaHQgLSB0aGlzLm1hcmdpbi5ib3R0b20sIHRoaXMubWFyZ2luLnRvcF0pXG4gIH1cblxuICBhcHBlbmRYQXhpcygpIHtcbiAgICByZXR1cm4gdGhpcy5wbG90LmFwcGVuZCgnZycpICBcbiAgICAgIC5hdHRyKCdpZCcsICd4LWF4aXMnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwgJHt0aGlzLmhlaWdodCAtIHRoaXMubWFyZ2luLmJvdHRvbX0pYClcbiAgfVxuXG4gIHJlbW92ZVhBeGlzKCkge1xuICAgIGQzLnNlbGVjdCgnI3gtYXhpcycpLnJlbW92ZSgpXG4gIH1cblxuICBpbml0WEF4aXMoKSB7XG4gICAgdGhpcy54QXhpcy5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy54KS50aWNrU2l6ZU91dGVyKDApKVxuICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgICAgLmF0dHIoJ2R4JywgJy0uNWVtJylcbiAgICAgICAgLmF0dHIoJ2R5JywgJy4xNWVtJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICdyb3RhdGUoLTY1KScpXG4gICAgICAgIC5odG1sKChkLCBpLCBub2RlcykgPT4ge1xuICAgICAgICAgIGlmIChub2Rlcy5sZW5ndGggPiB0aGlzLlRJQ0tfTEFCRUxfVEhSRVNIT0xEKSB7XG4gICAgICAgICAgICBpZiAoZCAlIHRoaXMuVElDS19MQUJFTF9TVEVQID09IDApIHJldHVybiBkXG4gICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGRcbiAgICAgICAgfSlcbiAgfVxuXG4gIGluaXRZQXhpcygpIHtcbiAgICByZXR1cm4gdGhpcy5wbG90LmFwcGVuZCgnZycpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3RoaXMubWFyZ2luLmxlZnR9LCAwKWApXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh0aGlzLnkpKVxuICB9XG5cblxuICBjYWxjQWN0aXZlWWVhcnMoKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZGF0YSlcbiAgICBjb25zdCB5ZWFycyA9IFtdXG4gICAgZm9yIChsZXQgZCBvZiBrZXlzKSB7XG4gICAgICBjb25zdCB5ciA9IHBhcnNlSW50KGQpXG4gICAgICBpZiAoeXIgPCB0aGlzLnllYXJTdGFydCB8fCB5ciA+IHRoaXMueWVhckVuZCkgY29udGludWVcbiAgICAgIHllYXJzLnB1c2goeXIpXG4gICAgfVxuICAgIHJldHVybiB5ZWFyc1xuICB9XG5cbiAgaW5pdERhdGFzZXRzKCkge1xuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLnN0b3JtVHlwZXMpKSB7XG4gICAgICBjb25zdCBkYXRhc2V0ID0gW11cbiAgICAgIGZvciAobGV0IHllYXIgb2YgdGhpcy55ZWFycykge1xuICAgICAgICBkYXRhc2V0LnB1c2goeyAneWVhcic6IHllYXIsICd2YWx1ZSc6IHRoaXMuZGF0YVtTdHJpbmcoeWVhcildW2tleV0gfSlcbiAgICAgIH1cbiAgICAgIHRoaXMuc3Rvcm1UeXBlc1trZXldLmRhdGFzZXQgPSBkYXRhc2V0XG4gICAgfVxuICB9XG5cbiAgY2FsY01heCgpIHtcbiAgICBsZXQgbWF4ID0gMFxuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLnN0b3JtVHlwZXMpKSB7XG4gICAgICBmb3IgKGxldCBkIG9mIHRoaXMuc3Rvcm1UeXBlc1trZXldLmRhdGFzZXQpIHtcbiAgICAgICAgbWF4ID0gZC52YWx1ZSA+IG1heCA/IGQudmFsdWUgOiBtYXhcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUm91bmQgdXAgYnkgMTBcbiAgICByZXR1cm4gcGFyc2VJbnQobWF4IC8gMTApICogMTAgKyAxMFxuICB9XG5cbiAgZ2V0QWN0aXZlRGF0YShrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9ybVR5cGVzW2tleV0uZGF0YXNldC5maWx0ZXIoZCA9PiB7XG4gICAgICByZXR1cm4gZC55ZWFyID49IHRoaXMueWVhclN0YXJ0ICYmIGQueWVhciA8PSB0aGlzLnllYXJFbmRcbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlWWVhclN0YXJ0KG5ld1llYXJTdGFydCkge1xuICAgIHRoaXMueWVhclN0YXJ0ID0gbmV3WWVhclN0YXJ0XG4gICAgdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgdXBkYXRlWWVhckVuZChuZXdZZWFyRW5kKSB7XG4gICAgdGhpcy55ZWFyRW5kID0gbmV3WWVhckVuZFxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnguZG9tYWluKHRoaXMuZ2V0WERvbWFpbigpKVxuICAgIHRoaXMucmVtb3ZlVG9vbHRpcHMoKVxuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLnN0b3JtVHlwZXMpKSB7XG4gICAgICB0aGlzLnJlbW92ZUJhcnMoa2V5KVxuICAgICAgdGhpcy5pbml0QmFycyhrZXkpXG4gICAgfVxuICAgIGZvciAobGV0IGtleSBvZiB0aGlzLmdldEFjdGl2ZVN0b3JtVHlwZXMoKSkge1xuICAgICAgdGhpcy5zaG93QmFycyhrZXkpXG4gICAgfVxuICAgIHRoaXMucmVtb3ZlWEF4aXMoKVxuICAgIHRoaXMueEF4aXMgPSB0aGlzLmFwcGVuZFhBeGlzKClcbiAgICB0aGlzLmluaXRYQXhpcygpXG4gICAgdGhpcy55QXhpcyA9IHRoaXMuaW5pdFlBeGlzKClcbiAgICAvLyBLZWVwIHNlcGFyYXRlIGxvb3AgZm9yIGNvcnJlY3QgZHJhd2luZyBvcmRlclxuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLnN0b3JtVHlwZXMpKSB7XG4gICAgICB0aGlzLmluaXRUb29sdGlwcyhrZXkpXG4gICAgfVxuICB9XG5cbiAgZ2V0QWN0aXZlU3Rvcm1UeXBlcygpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5zdG9ybVR5cGVzKS5maWx0ZXIoa2V5ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnN0b3JtVHlwZXNba2V5XS5hY3RpdmVcbiAgICB9KVxuICB9XG5cbiAgaW5pdEJhcnMoa2V5KSB7XG4gICAgY29uc3QgZGF0YXNldCA9IHRoaXMuZ2V0QWN0aXZlRGF0YShrZXkpXG4gICAgY29uc3QgYmFycyA9IHRoaXMucGxvdC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2RhdGEtYmFycycpXG4gICAgICAuYXR0cignaWQnLCBgZGF0YS1iYXJzLS0ke2tleX1gKVxuICAgICAgLnNlbGVjdEFsbCgncmVjdCcpXG4gICAgICAgIC5kYXRhKGRhdGFzZXQpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2JhcicpXG4gICAgICAgICAgLmF0dHIoJ2RhdGEteWVhcicsIGQgPT4gZC55ZWFyKVxuICAgICAgICAgIC5hdHRyKCdkYXRhLXZhbHVlJywgZCA9PiBkLnZhbHVlKVxuXG4gICAgYmFycy5hdHRyKCdoZWlnaHQnLCAwKVxuICAgICAgICAuYXR0cignd2lkdGgnLCB0aGlzLnguYmFuZHdpZHRoKCkpXG4gICAgICAgIC5hdHRyKCd4JywgZCA9PiB0aGlzLngoZC55ZWFyKSlcbiAgICAgICAgLmF0dHIoJ3knLCB0aGlzLnkoMCkpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgdGhpcy5zdG9ybVR5cGVzW2tleV0uZmlsbClcbiAgICAgICAgLm9uKCdtb3VzZWVudGVyJywgZCA9PiB7XG4gICAgICAgICAgdGhpcy50b2dnbGVUb29sdGlwKGtleSwgZC55ZWFyLCB0cnVlKVxuICAgICAgICB9KVxuICAgICAgICAub24oJ2NsaWNrJywgZCA9PiB7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSBkLnllYXIgLSB0aGlzLnllYXJTdGFydFxuICAgICAgICAgIGNvbnN0IG5zX2QgPSB0aGlzLmdldEFjdGl2ZURhdGEoJ25hbWVkX3N0b3JtJylbaW5kZXhdXG4gICAgICAgICAgY29uc3QgaF9kID0gdGhpcy5nZXRBY3RpdmVEYXRhKCdodXJyaWNhbmUnKVtpbmRleF1cbiAgICAgICAgICBjb25zdCBtaF9kID0gdGhpcy5nZXRBY3RpdmVEYXRhKCdtYWpvcl9odXJyaWNhbmUnKVtpbmRleF1cbiAgICAgICAgICBjb25zdCB0cmFja0luZm9Db250cm9sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYWNrLWluZm8tbWFwLWNvbnRyb2wnKVxuICAgICAgICAgIHRyYWNrSW5mb0NvbnRyb2wuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdj5ZZWFyOiAke2QueWVhcn08L2Rpdj5cbiAgICAgICAgICBgXG4gICAgICAgICAgaWYgKGtleSA9PSAnbmFtZWRfc3Rvcm0nKSB7XG4gICAgICAgICAgICB0cmFja0luZm9Db250cm9sLmlubmVySFRNTCArPSBgXG4gICAgICAgICAgICAgIDxkaXY+TmFtZWQgU3Rvcm0gRGF5czogJHtuc19kLnZhbHVlfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2Pkh1cnJpY2FuZSBEYXlzOiAke2hfZC52YWx1ZX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5NYWpvciBIdXJyaWNhbmUgRGF5czogJHttaF9kLnZhbHVlfTwvZGl2PlxuICAgICAgICAgICAgYCBcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGtleSA9PSAnaHVycmljYW5lJykge1xuICAgICAgICAgICAgdHJhY2tJbmZvQ29udHJvbC5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgICA8ZGl2Pkh1cnJpY2FuZSBEYXlzOiAke2hfZC52YWx1ZX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5NYWpvciBIdXJyaWNhbmUgRGF5czogJHttaF9kLnZhbHVlfTwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoa2V5ID09ICdtYWpvcl9odXJyaWNhbmUnKSB7XG4gICAgICAgICAgICB0cmFja0luZm9Db250cm9sLmlubmVySFRNTCArPSBgXG4gICAgICAgICAgICAgIDxkaXY+TWFqb3IgSHVycmljYW5lIERheXM6ICR7bWhfZC52YWx1ZX08L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICB9XG4gICAgICAgICAgdHJhY2tJbmZvQ29udHJvbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgICAgIGNvbnN0IHdoZXJlID0gdXRpbC53aGVyZUZhY3RvcnkoZC55ZWFyLCB0aGlzLnN0b3JtVHlwZXNba2V5XVsnd2hlcmUnXSlcbiAgICAgICAgICB0aGlzLmxheWVyLnNldFdoZXJlKHdoZXJlKVxuICAgICAgICAgIHRoaXMubGF5ZXIuc2V0U3R5bGUoZmVhdHVyZSA9PiB7XG4gICAgICAgICAgICBsZXQgYztcbiAgICAgICAgICAgIGxldCBwcm9wID0gZmVhdHVyZS5wcm9wZXJ0aWVzLlVTQV9XSU5EXG4gICAgICAgICAgICBpZiAocHJvcCA8IDY0ICYmIHByb3AgPj0gMzQpIGMgPSB0aGlzLnN0b3JtVHlwZXNbJ25hbWVkX3N0b3JtJ11bJ2ZpbGwnXSBcbiAgICAgICAgICAgIGlmIChwcm9wID49IDY0ICYmIHByb3AgPCA5NikgYyA9IHRoaXMuc3Rvcm1UeXBlc1snaHVycmljYW5lJ11bJ2ZpbGwnXSBcbiAgICAgICAgICAgIGlmIChwcm9wID49IDk2KSBjID0gdGhpcy5zdG9ybVR5cGVzWydtYWpvcl9odXJyaWNhbmUnXVsnZmlsbCddXG4gICAgICAgICAgICBpZiAoIWMpIHsgYyA9ICd3aGl0ZScgfVxuICAgICAgICAgICAgcmV0dXJuIHsgY29sb3I6IGMsIG9wYWNpdHk6IDEsIHdlaWdodDogNSB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW91dCcsIGQgPT4ge1xuICAgICAgICAgIC8vdGhpcy5sYXllci5zZXRXaGVyZSgnMT0wJylcbiAgICAgICAgICB0aGlzLnRvZ2dsZVRvb2x0aXAoa2V5LCBkLnllYXIsIGZhbHNlKVxuICAgICAgICB9KVxuXG4gICAgdGhpcy5zdG9ybVR5cGVzW2tleV0uYmFycyA9IGJhcnNcbiAgfVxuXG4gIGNhbGNUb29sdGlwWChkKSB7XG4gICAgY29uc3Qgbm9ybWFsID0gdGhpcy54KGQueWVhcikgKyB0aGlzLnguYmFuZHdpZHRoKClcbiAgICBpZiAobm9ybWFsICsgdGhpcy5UT09MVElQX1dJRFRIIDwgdGhpcy54LnJhbmdlKClbMV0pIHJldHVybiBub3JtYWxcbiAgICByZXR1cm4gbm9ybWFsIC0gdGhpcy5UT09MVElQX1dJRFRIIC0gdGhpcy54LmJhbmR3aWR0aCgpXG4gIH1cblxuICBjYWxjVG9vbHRpcFkoZCkge1xuICAgIC8vIFRPRE9cbiAgfVxuXG4gIHJlbW92ZVRvb2x0aXBzKCkge1xuICAgIGQzLnNlbGVjdEFsbCgnLmRhdGEtdG9vbHRpcHMnKS5yZW1vdmUoKVxuICB9XG5cbiAgdG9nZ2xlVG9vbHRpcChrZXksIHllYXIsIHNob3dUb29sdGlwKSB7XG4gICAgZDMuc2VsZWN0KGAjZGF0YS10b29sdGlwLS0ke2tleX0tLSR7eWVhcn0tLXJlY3RgKVxuICAgICAgLmF0dHIoJ3N0eWxlJywgc2hvd1Rvb2x0aXAgPyAnJyA6ICdkaXNwbGF5OiBub25lJylcbiAgICAgIC5yYWlzZSgpXG4gICAgZDMuc2VsZWN0KGAjZGF0YS10b29sdGlwLS0ke2tleX0tLSR7eWVhcn0tLXRleHRgKVxuICAgICAgLmF0dHIoJ3N0eWxlJywgc2hvd1Rvb2x0aXAgPyAnJyA6ICdkaXNwbGF5OiBub25lJylcbiAgICAgIC5yYWlzZSgpXG4gIH1cblxuICBpbml0VG9vbHRpcHMoa2V5KSB7XG4gICAgY29uc3QgZGF0YXNldCA9IHRoaXMuZ2V0QWN0aXZlRGF0YShrZXkpXG4gICAgY29uc3QgdG9vbHRpcHMgPSB0aGlzLnBsb3QuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdkYXRhLXRvb2x0aXBzJylcbiAgICAgIC5hdHRyKCdpZCcsIGBkYXRhLXRvb2x0aXBzLS0ke2tleX1gKVxuICAgICAgLnNlbGVjdEFsbCgncmVjdCcpXG4gICAgICAgIC5kYXRhKGRhdGFzZXQpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgICAuYXR0cignaWQnLCBkID0+IGBkYXRhLXRvb2x0aXAtLSR7a2V5fS0tJHtkLnllYXJ9LS1yZWN0YClcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICd0b29sdGlwJylcbiAgICAgICAgICAgIC5hdHRyKCd4JywgZCA9PiB0aGlzLmNhbGNUb29sdGlwWChkKSlcbiAgICAgICAgICAgIC5hdHRyKCd5JywgZCA9PiB0aGlzLnkoZC52YWx1ZSkgLSB0aGlzLlRPT0xUSVBfSEVJR0hUKVxuICAgICAgICAgICAgLmF0dHIoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7JylcbiAgICAgICAgICAgIC5hdHRyKCdkYXRhLXllYXInLCBkID0+IGQueWVhcilcbiAgICAgICAgICAgIC5hdHRyKCdkYXRhLXZhbHVlJywgZCA9PiBkLnZhbHVlKVxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZScsIHRoaXMuc3Rvcm1UeXBlc1trZXldLmZpbGwpXG4gICAgICAgICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgJzEuNScpXG5cbiAgICBjb25zdCB0b29sdGlwX3RleHQgPSB0aGlzLnBsb3Quc2VsZWN0KGAjZGF0YS10b29sdGlwcy0tJHtrZXl9YClcbiAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuZGF0YShkYXRhc2V0KVxuICAgICAgICAgIC5lbnRlcih0b29sdGlwcylcbiAgICAgICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgICAuYXR0cignaWQnLCBkID0+IGBkYXRhLXRvb2x0aXAtLSR7a2V5fS0tJHtkLnllYXJ9LS10ZXh0YClcbiAgICAgICAgICAgICAgLmF0dHIoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmUnKVxuICAgICAgICAgICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnc3RhcnQnKVxuICAgICAgICAgICAgICAuYXR0cigneCcsIGQgPT4gdGhpcy5jYWxjVG9vbHRpcFgoZCkpXG4gICAgICAgICAgICAgIC5hdHRyKCd5JywgZCA9PiB0aGlzLnkoZC52YWx1ZSkpXG5cbiAgICBjb25zdCB0ZXh0X21hcmdpbiA9IHsgbGVmdDogOCwgdG9wOiA4IH1cblxuICAgIHRvb2x0aXBfdGV4dC5hcHBlbmQoJ3RzcGFuJylcbiAgICAgIC5hdHRyKCd4JywgZCA9PiB0aGlzLmNhbGNUb29sdGlwWChkKSArIHRleHRfbWFyZ2luLmxlZnQpXG4gICAgICAuYXR0cigneScsIGQgPT4gdGhpcy55KGQudmFsdWUpIC0gdGhpcy5UT09MVElQX0hFSUdIVC8xLjUgLSB0ZXh0X21hcmdpbi50b3ApXG4gICAgICAuaHRtbChkID0+IGBZZWFyOiAke2QueWVhcn1gKVxuXG4gICAgdG9vbHRpcF90ZXh0LmFwcGVuZCgndHNwYW4nKVxuICAgICAgLmF0dHIoJ3gnLCBkID0+IHRoaXMuY2FsY1Rvb2x0aXBYKGQpICsgdGV4dF9tYXJnaW4ubGVmdClcbiAgICAgIC5hdHRyKCd5JywgZCA9PiB0aGlzLnkoZC52YWx1ZSkgLSB0aGlzLlRPT0xUSVBfSEVJR0hULzIuOCAtIHRleHRfbWFyZ2luLnRvcClcbiAgICAgIC5odG1sKGQgPT4gYCR7dGhpcy5zdG9ybVR5cGVzW2tleV0udG9vbHRpcH06ICR7ZC52YWx1ZX1gKVxuXG4gICAgdG9vbHRpcF90ZXh0LmFwcGVuZCgndHNwYW4nKVxuICAgICAgLmF0dHIoJ3gnLCBkID0+IHRoaXMuY2FsY1Rvb2x0aXBYKGQpICsgdGV4dF9tYXJnaW4ubGVmdClcbiAgICAgIC5hdHRyKCd5JywgZCA9PiB0aGlzLnkoZC52YWx1ZSkgLSB0aGlzLlRPT0xUSVBfSEVJR0hULzE1IC0gdGV4dF9tYXJnaW4udG9wKVxuICAgICAgLmF0dHIoJ3N0eWxlJywgJ2ZvbnQtc3R5bGU6IGl0YWxpYycpXG4gICAgICAuaHRtbCgnQ2xpY2sgdG8gYW5hbHl6ZSBzdG9ybSB0cmFja3MnKVxuXG4gICAgdGhpcy5zdG9ybVR5cGVzW2tleV0udG9vbHRpcHMgPSB0b29sdGlwc1xuICB9XG5cbiAgc2hvd0JhcnMoa2V5KSB7XG4gICAgdGhpcy5zdG9ybVR5cGVzW2tleV0uYmFycy50cmFuc2l0aW9uKDEwMDApXG4gICAgICAuYXR0cigneScsIGQgPT4gdGhpcy55KGQudmFsdWUpKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIGQgPT4gdGhpcy55KDApIC0gdGhpcy55KGQudmFsdWUpKVxuICB9XG5cbiAgaGlkZUJhcnMoa2V5KSB7XG4gICAgdGhpcy5zdG9ybVR5cGVzW2tleV0uYmFycy50cmFuc2l0aW9uKDEwMDApXG4gICAgICAuYXR0cigneScsIGQgPT4gdGhpcy55KDApKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDApXG4gIH1cblxuICByZW1vdmVCYXJzKGtleSkge1xuICAgIHRoaXMuaGlkZUJhcnMoa2V5KVxuICAgIHRoaXMuc3Rvcm1UeXBlc1trZXldLmJhcnMucmVtb3ZlKClcbiAgICB0aGlzLnN0b3JtVHlwZXNba2V5XS5iYXJzID0gW11cbiAgfVxuXG59XG5cbiIsImltcG9ydCAqIGFzIGNvbmZpZyBmcm9tICcuL2NvbmZpZydcblxuZXhwb3J0IGNvbnN0IHdoZXJlRmFjdG9yeSA9ICh5ZWFyLCBzdG9ybVdoZXJlKSA9PiBgWUVBUj0ke3llYXJ9IEFORCAke3N0b3JtV2hlcmV9YFxuXG5leHBvcnQgY29uc3QgZ2V0TWF4WWVhciA9IChkYXRhKSA9PiB7XG4gIGxldCBtYXggPSAwXG4gIGZvciAobGV0IGsgb2YgT2JqZWN0LmtleXMoZGF0YSkpIHtcbiAgICBrID0gcGFyc2VJbnQoaylcbiAgICBpZiAoayA+IG1heCkgeyBtYXggPSBrIH1cbiAgfVxuICByZXR1cm4gbWF4XG59XG5cbmV4cG9ydCBjb25zdCBnZXRNaW5ZZWFyID0gKGRhdGEpID0+IHtcbiAgbGV0IG1pbiA9IDEwMDAwXG4gIGZvciAobGV0IGsgb2YgT2JqZWN0LmtleXMoZGF0YSkpIHtcbiAgICBrID0gcGFyc2VJbnQoaylcbiAgICBpZiAoayA8IG1pbikgeyBtaW4gPSBrIH1cbiAgfVxuICByZXR1cm4gbWluXG59XG5cbmV4cG9ydCBjb25zdCBvcHRpb25GYWN0b3J5ID0gZnVuY3Rpb24gKHZhbHVlLCBpbm5lckhUTUwpIHtcbiAgICB2YXIgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0LnZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICBvcHQuaW5uZXJIVE1MID0gU3RyaW5nKGlubmVySFRNTCk7XG4gICAgcmV0dXJuIG9wdDtcbn1cblxuXG5jb25zdCByZW1vdmVDaGlsZE5vZGVzID0gKHBhcmVudCkgPT4ge1xuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldHVwWWVhclNlbGVjdCA9IChsYWJlbCwgeWVhclNlbGVjdGVkLCBtaW5ZZWFyLCBtYXhZZWFyKSA9PiB7XG4gIGNvbnN0IHllYXJTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgeWVhci0ke2xhYmVsfS1zZWxlY3RgKVxuICByZW1vdmVDaGlsZE5vZGVzKHllYXJTZWxlY3QpXG4gIGxldCBzZWxlY3RlZEluZGV4O1xuICBsZXQgaW5kZXggPSAwO1xuICBmb3IgKHZhciB5ID0gbWluWWVhcjsgeTw9bWF4WWVhcjsgeSsrKXtcbiAgICAgIGlmIChwYXJzZUludCh5ZWFyU2VsZWN0ZWQpID09IHkpIHsgc2VsZWN0ZWRJbmRleCA9IGluZGV4IH1cbiAgICAgIHllYXJTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uRmFjdG9yeShTdHJpbmcoeSksIFN0cmluZyh5KSkpXG4gICAgICBpbmRleCsrO1xuICB9XG4gIHllYXJTZWxlY3Qub3B0aW9ucy5zZWxlY3RlZEluZGV4PXNlbGVjdGVkSW5kZXhcbiAgcmV0dXJuIHllYXJTZWxlY3Rcbn1cblxuXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbiN0cmFjay1pbmZvLW1hcC1jb250cm9sIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCBOYXJyb3csIHNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI3RyYWNrLWluZm8tbWFwLWNvbnRyb2wuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Ryb3BpY2FsLWN5Y2xvbmUtZGF5cy13cmFwcGVyIHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsIE5hcnJvdywgc2VyaWY7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAxMjAwcHg7XFxufVxcblxcbiNsZWdlbmQtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDI4MHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDkwcHg7XFxufVxcblxcbiNsZWdlbmQtY29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbiNsZWdlbmQtY29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIHNwYW46YmVmb3JlIHtcXG4gICAgY29udGVudDogJ1xcXFwyNzE0JztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC01cHg7XFxufVxcblxcbiNsZWdlbmQtY29udGFpbmVyIGxhYmVsIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbGVnZW5kLWNvbnRhaW5lciBzdmcge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDIwcHg7XFxufVxcblxcbi5mbGV4LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI21hcC1jb250YWluZXIge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xcbn1cXG5cXG4jbWFwLWluZm8ge1xcbn1cXG5cXG4jbWFwIHtcXG4gICAgaGVpZ2h0OiA0NDBweDtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNncmFwaC1jb250YWluZXIge1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uZGF0YS10b29sdGlwcyAudG9vbHRpcCB7XFxuICAgIHdpZHRoOiAxODBweDtcXG4gICAgaGVpZ2h0OiA4NXB4O1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4udGljayB0ZXh0IHtcXG4gICAgZmlsbDogIzU5NTk1OTtcXG59XFxuXFxuI3ktYXhpcy10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxufVxcblxcbiNwbG90IC50aWNrIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuI2dyYXBoLWNvbnRhaW5lciB7XFxufVxcblxcbiNncmFwaC10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI21lbnUtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgLypqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0OyovXFxufVxcblxcbiNtZW51IGRpdiB7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuI3Nob3ctc3Rvcm0tdHlwZXMge1xcbiAgICB3aWR0aDogMjhweDtcXG59XFxuXFxuI3Nob3ctc3Rvcm0tdHlwZXMgbGFiZWwge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiA1cHg7IFxcbn1cXG5cXG4jeWVhci1zZWxlY3Qge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDEwMHB4O1xcbn1cXG5cXG4jeWVhci1zZWxlY3QgZGl2IHtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbn1cXG5cXG5zdmcgLmJhciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogTGVnZW5kIFNWRyAqL1xcblxcbi5jbHMtMSB7XFxuICBmaWxsOiAjMGI1MzlkO1xcbn1cXG4uY2xzLTIge1xcbiAgZmlsbDogIzZiYWVkNjtcXG59XFxuLmNscy0zIHtcXG4gIGZpbGw6ICNjN2RiZWU7XFxufVxcbi5jbHMtNCwgLmNscy01IHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICMwMTAxMDE7XFxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxuICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XFxuICBzdHJva2Utd2lkdGg6IDAuNXB4O1xcbn1cXG4uY2xzLTUge1xcbiAgc3Ryb2tlLWRhc2hhcnJheTogMi45NyAyLjk3O1xcbn1cXG4uY2xzLTYsIC5jbHMtNyB7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBmb250LWZhbWlseTogQXJpYWxOYXJyb3csIEFyaWFsIE5hcnJvdztcXG59XFxuLmNscy02IHtcXG4gIGZpbGw6ICMwMTAxMDE7XFxufVxcbi5jbHMtNyB7XFxuICBmaWxsOiAjMjMxZjIwO1xcbn1cXG4uY2xzLTgge1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA2ZW07XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtBQUNBOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7QUFDQTs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsZUFBZTs7QUFFZjtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4jdHJhY2staW5mby1tYXAtY29udHJvbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBsaW5lLWhlaWdodDogMS42O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwgTmFycm93LCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiN0cmFjay1pbmZvLW1hcC1jb250cm9sLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiN0cm9waWNhbC1jeWNsb25lLWRheXMtd3JhcHBlciB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCBOYXJyb3csIHNlcmlmO1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMTIwMHB4O1xcbn1cXG5cXG4jbGVnZW5kLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAyODBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA5MHB4O1xcbn1cXG5cXG4jbGVnZW5kLWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jbGVnZW5kLWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBzcGFuOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICdcXFxcMjcxNCc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNXB4O1xcbn1cXG5cXG4jbGVnZW5kLWNvbnRhaW5lciBsYWJlbCBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2xlZ2VuZC1jb250YWluZXIgc3ZnIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAyMHB4O1xcbn1cXG5cXG4uZmxleC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNtYXAtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcXG59XFxuXFxuI21hcC1pbmZvIHtcXG59XFxuXFxuI21hcCB7XFxuICAgIGhlaWdodDogNDQwcHg7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jZ3JhcGgtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmRhdGEtdG9vbHRpcHMgLnRvb2x0aXAge1xcbiAgICB3aWR0aDogMTgwcHg7XFxuICAgIGhlaWdodDogODVweDtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLnRpY2sgdGV4dCB7XFxuICAgIGZpbGw6ICM1OTU5NTk7XFxufVxcblxcbiN5LWF4aXMtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbn1cXG5cXG4jcGxvdCAudGljayB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbiNncmFwaC1jb250YWluZXIge1xcbn1cXG5cXG4jZ3JhcGgtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNtZW51LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIC8qanVzdGlmeS1jb250ZW50OiByaWdodDsqL1xcbn1cXG5cXG4jbWVudSBkaXYge1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiNzaG93LXN0b3JtLXR5cGVzIHtcXG4gICAgd2lkdGg6IDI4cHg7XFxufVxcblxcbiNzaG93LXN0b3JtLXR5cGVzIGxhYmVsIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogNXB4OyBcXG59XFxuXFxuI3llYXItc2VsZWN0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAxMDBweDtcXG59XFxuXFxuI3llYXItc2VsZWN0IGRpdiB7XFxuICAgIG1hcmdpbjogMTVweDtcXG59XFxuXFxuc3ZnIC5iYXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIExlZ2VuZCBTVkcgKi9cXG5cXG4uY2xzLTEge1xcbiAgZmlsbDogIzBiNTM5ZDtcXG59XFxuLmNscy0yIHtcXG4gIGZpbGw6ICM2YmFlZDY7XFxufVxcbi5jbHMtMyB7XFxuICBmaWxsOiAjYzdkYmVlO1xcbn1cXG4uY2xzLTQsIC5jbHMtNSB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjMDEwMTAxO1xcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcbiAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwO1xcbiAgc3Ryb2tlLXdpZHRoOiAwLjVweDtcXG59XFxuLmNscy01IHtcXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDIuOTcgMi45NztcXG59XFxuLmNscy02LCAuY2xzLTcge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsTmFycm93LCBBcmlhbCBOYXJyb3c7XFxufVxcbi5jbHMtNiB7XFxuICBmaWxsOiAjMDEwMTAxO1xcbn1cXG4uY2xzLTcge1xcbiAgZmlsbDogIzIzMWYyMDtcXG59XFxuLmNscy04IHtcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNmVtO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuaW1wb3J0ICcuL2luZGV4LmNzcydcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJ1xuaW1wb3J0IHsgZGF0YSB9ICBmcm9tICcuL2RhdGEnXG5pbXBvcnQgeyBHcmFwaCB9IGZyb20gJy4vZ3JhcGgnXG5cbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJ1xuXG5jb25zdCBtaW5ZZWFyID0gdXRpbC5nZXRNaW5ZZWFyKGRhdGEpXG5jb25zdCBtYXhZZWFyID0gdXRpbC5nZXRNYXhZZWFyKGRhdGEpXG5cbmNvbnN0IGdyYXBoID0gbmV3IEdyYXBoKGNvbmZpZywgZGF0YSlcblxuY29uc3QgY2hlY2tib3hJZHMgPSB7XG4gICduYW1lZF9zdG9ybSc6ICdzaG93LW5hbWVkLXN0b3JtcycsXG4gICdodXJyaWNhbmUnOiAnc2hvdy1taW5vci1odXJyaWNhbmVzJyxcbiAgJ21ham9yX2h1cnJpY2FuZSc6ICdzaG93LW1ham9yLWh1cnJpY2FuZXMnXG59XG5cbmZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhjaGVja2JveElkcykpIHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjaGVja2JveElkc1trZXldKVxuICBlbC5jaGVja2VkID0gY29uZmlnLnN0b3JtVHlwZXNba2V5XS5hY3RpdmVcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgIGdyYXBoLnN0b3JtVHlwZXNba2V5XS5hY3RpdmUgPSB0cnVlXG4gICAgICBncmFwaC5zaG93QmFycyhrZXkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGdyYXBoLnN0b3JtVHlwZXNba2V5XS5hY3RpdmUgPSBmYWxzZVxuICAgICAgZ3JhcGguaGlkZUJhcnMoa2V5KVxuICAgIH1cbiAgfSlcbn1cblxubGV0IHNlbGVjdGVkU3RhcnRZZWFyID0gZ3JhcGgueWVhclN0YXJ0XG5sZXQgc2VsZWN0ZWRFbmRZZWFyID0gZ3JhcGgueWVhckVuZFxuXG5jb25zdCB5ZWFyU3RhcnRTZWxlY3QgPSB1dGlsLnNldHVwWWVhclNlbGVjdCgnc3RhcnQnLCBzZWxlY3RlZFN0YXJ0WWVhciwgbWluWWVhciwgbWF4WWVhcilcbmNvbnN0IHllYXJFbmRTZWxlY3QgPSB1dGlsLnNldHVwWWVhclNlbGVjdCgnZW5kJywgc2VsZWN0ZWRFbmRZZWFyLCBtaW5ZZWFyLCBtYXhZZWFyKVxuXG55ZWFyU3RhcnRTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICBzZWxlY3RlZFN0YXJ0WWVhciA9IHBhcnNlSW50KHllYXJTdGFydFNlbGVjdC52YWx1ZSlcbiAgZ3JhcGgudXBkYXRlWWVhclN0YXJ0KHNlbGVjdGVkU3RhcnRZZWFyKVxuICB1dGlsLnNldHVwWWVhclNlbGVjdCgnZW5kJywgc2VsZWN0ZWRFbmRZZWFyLCBzZWxlY3RlZFN0YXJ0WWVhciwgZ3JhcGguTUFYX1lFQVIpXG59KVxuXG55ZWFyRW5kU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgc2VsZWN0ZWRFbmRZZWFyID0gcGFyc2VJbnQoeWVhckVuZFNlbGVjdC52YWx1ZSlcbiAgZ3JhcGgudXBkYXRlWWVhckVuZChzZWxlY3RlZEVuZFllYXIpXG4gIHV0aWwuc2V0dXBZZWFyU2VsZWN0KCdzdGFydCcsIHNlbGVjdGVkU3RhcnRZZWFyLCBncmFwaC5NSU5fWUVBUiwgc2VsZWN0ZWRFbmRZZWFyKVxufSlcblxuLy8gTWFwXG5jb25zdCBmaXRCb3VuZHMgPSBbXG4gIHtsYXQ6IDUwLjAsIGxuZzogLTYwfSxcbiAge2xhdDogNSwgbG5nOiAtMTAwfVxuXVxuY29uc3QgbWFwID0gTC5tYXAoJ21hcCcpLmZpdEJvdW5kcyhmaXRCb3VuZHMpXG5cbi8vIFRPRE8gbW92ZSB0aGlzXG5jb25zdCBhcGlLZXkgPSBcIkFBUEsxNjAxZWVkZjA4MGE0YjA1Yjc2YzBjNWRlNzAyNDM3Y194Z1l5MEVYUGNqR08yZU13RzRFVTUwY3V0dHUzTHNtMURRM1VCZ0lFSW5XOUxKTmZtdUJVTVlkeEllaS1jalVcIjtcbmNvbnN0IGJhc2VtYXAgPSBMLmVzcmkuVmVjdG9yLnZlY3RvckJhc2VtYXBMYXllcignQXJjR0lTOkRhcmtHcmF5JywgeyBhcGlLZXk6IGFwaUtleSB9KVxuXG53aW5kb3cubWFwID0gbWFwXG5cbmJhc2VtYXAuYWRkVG8obWFwKVxuXG5jb25zdCBUcmFja0luZm9NYXBDb250cm9sID0gTC5Db250cm9sLmV4dGVuZCh7XG4gIG9wdGlvbnM6IHtcbiAgICBwb3NpdGlvbjogJ3RvcHJpZ2h0J1xuICB9LFxuICBvbkFkZDogZnVuY3Rpb24gKG1hcCkge1xuICAgIGNvbnN0IGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGUuaWQgPSAndHJhY2staW5mby1tYXAtY29udHJvbCdcbiAgICBlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgcmV0dXJuIGVcbiAgfVxufSlcblxuY29uc3QgY29udHJvbCA9IG5ldyBUcmFja0luZm9NYXBDb250cm9sKClcblxud2luZG93Lm1hcC5hZGRDb250cm9sKGNvbnRyb2wpXG5cbi8vIGR1bW15IGZlYXR1cmUgZm9yIGxvZ2dpbmdcbi8vbGV0IGY7XG5cbmNvbnN0IGxheWVyID0gTC5lc3JpLmZlYXR1cmVMYXllcih7XG4gIHVybDogJ2h0dHBzOi8vc2VydmljZXMyLmFyY2dpcy5jb20vRmlhUEE0Z2EwaVFLZHV2My9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9JQlRyQUNTX0FMTF9saXN0X3YwNHIwMF9saW5lc18xL0ZlYXR1cmVTZXJ2ZXIvMCcsXG4gIHN0eWxlOiBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgIC8vaWYgKCFmKSB7IGYgPSBmZWF0dXJlOyAgY29uc29sZS5sb2coZmVhdHVyZSkgfVxuICAgIGxldCBjO1xuICAgIGxldCBwcm9wID0gZmVhdHVyZS5wcm9wZXJ0aWVzLlVTQV9XSU5EXG4gICAgaWYgKHByb3AgPCA2NCAmJiBwcm9wID49IDM0KSB7IGMgPSBjb25maWcuc3Rvcm1UeXBlc1snbmFtZWRfc3Rvcm0nXVsnZmlsbCddIH1cbiAgICBpZiAocHJvcCA+PSA2NCAmJiBwcm9wIDwgOTYpIHsgYyA9IGNvbmZpZy5zdG9ybVR5cGVzWydodXJyaWNhbmUnXVsnZmlsbCddIH1cbiAgICBpZiAocHJvcCA+PSA5NikgeyBjID0gY29uZmlnLnN0b3JtVHlwZXNbJ21ham9yX2h1cnJpY2FuZSddWydmaWxsJ10gfTtcbiAgICBpZiAoIWMpIHsgYyA9ICd3aGl0ZScgfVxuICAgIHJldHVybiB7IGNvbG9yOiBjLCBvcGFjaXR5OiAxLCB3ZWlnaHQ6IDUgfVxuICB9LFxuICB3aGVyZTogJzE9MCdcbn0pLmFkZFRvKG1hcCk7XG5cbmdyYXBoLmxheWVyID0gbGF5ZXJcblxuLypcbmNvbnN0IGZlYXR1cmVfaW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWF0dXJlLWluZm8nKVxuXG5sYXllci5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGZlYXR1cmVfaW5mby5pbm5lckhUTUwgPSByZW5kZXJfZmVhdHVyZShldmVudC5sYXllci5mZWF0dXJlKVxufSlcblxubGF5ZXIub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGZlYXR1cmVfaW5mby5pbm5lckhUTUwgPSAnSG92ZXIgb3ZlciBhIHN0b3JtIHRyYWNrIGZvciBtb3JlIGRhdGEnXG59KVxuXG5jb25zdCByZW5kZXJfZmVhdHVyZSA9IGYgPT4ge1xuICBjb25zdCBwcm9wcyA9IGYucHJvcGVydGllc1xuICBjb25zdCBkaXNwbGF5X3Byb3BzID0gWyAnTEFUJywgJ0xPTicsICdVU0FfV0lORCcsICd5ZWFyJywgJ21vbnRoJywgJ2RheScsICdOQU1FJyBdXG4gIGNvbnN0IHJlbmRlcmVkID0gYFxuICAgIE5hbWU6ICR7cHJvcHNbJ05BTUUnXX0gPGJyPlxuICAgIFdpbmQgU3BlZWQ6ICR7cHJvcHNbJ1VTQV9XSU5EJ119IGtub3RzIDxicj5cbiAgICBEYXRlOiAke3Byb3BzWydtb250aCddfS8ke3Byb3BzWydkYXknXX0vJHtwcm9wc1sneWVhciddfSA8YnI+XG4gICAgTGF0OiAke3Byb3BzWydMQVQnXX0gPGJyPlxuICAgIExvbjogJHtwcm9wc1snTE9OJ119IDxicj5cbiAgYFxuICByZXR1cm4gcmVuZGVyZWRcbn1cblxuY29uc3QgcmVuZGVyX3Byb3AgPSAoa2V5LCB2YWx1ZSkgPT4ge1xuICByZXR1cm4gYCR7a2V5fTogJHt2YWx1ZX1cXG5gXG59XG5cbiovXG4iXSwibmFtZXMiOlsiY29uZmlnIiwidGl0bGUiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsInllYXJTdGFydCIsInllYXJFbmQiLCJ5QXhpc1RpdGxlIiwic3Rvcm1UeXBlcyIsIlRJQ0tfTEFCRUxfVEhSRVNIT0xEIiwiVElDS19MQUJFTF9TVEVQIiwiVE9PTFRJUF9IRUlHSFQiLCJUT09MVElQX1dJRFRIIiwiZGF0YSIsInV0aWwiLCJHcmFwaCIsIk1JTl9ZRUFSIiwiZ2V0TWluWWVhciIsIk1BWF9ZRUFSIiwiZ2V0TWF4WWVhciIsInllYXJzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImQiLCJwYXJzZUludCIsInBsb3QiLCJpbml0UGxvdCIsImRhdGFzZXRzIiwiaW5pdERhdGFzZXRzIiwieCIsImluaXRYU2NhbGUiLCJ5IiwiaW5pdFlTY2FsZSIsImZvckVhY2giLCJrZXkiLCJpbml0QmFycyIsInhBeGlzIiwiYXBwZW5kWEF4aXMiLCJpbml0WEF4aXMiLCJzZXRZQXhpc1RpdGxlIiwieUF4aXMiLCJpbml0WUF4aXMiLCJpbml0VG9vbHRpcHMiLCJpbml0U3Rvcm1UeXBlcyIsImZpbHRlciIsImFjdGl2ZSIsInNob3dCYXJzIiwiYXBwZW5kIiwiYXR0ciIsImh0bWwiLCJkMyIsInNlbGVjdCIsIkFycmF5Iiwic2NhbGVCYW5kIiwiZG9tYWluIiwiZ2V0WERvbWFpbiIsInJhbmdlIiwic2NhbGVMaW5lYXIiLCJjYWxjTWF4IiwicmVtb3ZlIiwiY2FsbCIsImF4aXNCb3R0b20iLCJ0aWNrU2l6ZU91dGVyIiwic2VsZWN0QWxsIiwic3R5bGUiLCJpIiwibm9kZXMiLCJsZW5ndGgiLCJheGlzTGVmdCIsInlyIiwicHVzaCIsImRhdGFzZXQiLCJ5ZWFyIiwiU3RyaW5nIiwibWF4IiwidmFsdWUiLCJuZXdZZWFyU3RhcnQiLCJ1cGRhdGUiLCJuZXdZZWFyRW5kIiwicmVtb3ZlVG9vbHRpcHMiLCJyZW1vdmVCYXJzIiwiZ2V0QWN0aXZlU3Rvcm1UeXBlcyIsInJlbW92ZVhBeGlzIiwiZ2V0QWN0aXZlRGF0YSIsImJhcnMiLCJlbnRlciIsImJhbmR3aWR0aCIsImZpbGwiLCJvbiIsInRvZ2dsZVRvb2x0aXAiLCJpbmRleCIsIm5zX2QiLCJoX2QiLCJtaF9kIiwidHJhY2tJbmZvQ29udHJvbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJjbGFzc0xpc3QiLCJ3aGVyZSIsIndoZXJlRmFjdG9yeSIsImxheWVyIiwic2V0V2hlcmUiLCJzZXRTdHlsZSIsImZlYXR1cmUiLCJjIiwicHJvcCIsInByb3BlcnRpZXMiLCJVU0FfV0lORCIsImNvbG9yIiwib3BhY2l0eSIsIndlaWdodCIsIm5vcm1hbCIsInNob3dUb29sdGlwIiwicmFpc2UiLCJ0b29sdGlwcyIsImNhbGNUb29sdGlwWCIsInRvb2x0aXBfdGV4dCIsInRleHRfbWFyZ2luIiwidG9vbHRpcCIsInRyYW5zaXRpb24iLCJoaWRlQmFycyIsInN0b3JtV2hlcmUiLCJrIiwibWluIiwib3B0aW9uRmFjdG9yeSIsIm9wdCIsImNyZWF0ZUVsZW1lbnQiLCJyZW1vdmVDaGlsZE5vZGVzIiwicGFyZW50IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwic2V0dXBZZWFyU2VsZWN0IiwibGFiZWwiLCJ5ZWFyU2VsZWN0ZWQiLCJtaW5ZZWFyIiwibWF4WWVhciIsInllYXJTZWxlY3QiLCJzZWxlY3RlZEluZGV4IiwiYXBwZW5kQ2hpbGQiLCJvcHRpb25zIiwiZ3JhcGgiLCJjaGVja2JveElkcyIsImVsIiwiY2hlY2tlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZWxlY3RlZFN0YXJ0WWVhciIsInNlbGVjdGVkRW5kWWVhciIsInllYXJTdGFydFNlbGVjdCIsInllYXJFbmRTZWxlY3QiLCJ1cGRhdGVZZWFyU3RhcnQiLCJ1cGRhdGVZZWFyRW5kIiwiZml0Qm91bmRzIiwibGF0IiwibG5nIiwiTCIsImFwaUtleSIsImJhc2VtYXAiLCJlc3JpIiwiVmVjdG9yIiwidmVjdG9yQmFzZW1hcExheWVyIiwid2luZG93IiwiYWRkVG8iLCJUcmFja0luZm9NYXBDb250cm9sIiwiQ29udHJvbCIsImV4dGVuZCIsInBvc2l0aW9uIiwib25BZGQiLCJlIiwiaWQiLCJhZGQiLCJjb250cm9sIiwiYWRkQ29udHJvbCIsImZlYXR1cmVMYXllciIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=