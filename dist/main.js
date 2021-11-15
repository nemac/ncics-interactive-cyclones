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
  width: 800,
  height: 500,
  margin: {
    left: 80,
    right: 0,
    top: 15,
    bottom: 60
  },
  yearStart: 1950,
  yearEnd: 2020,
  yAxisTitle: 'Tropical Cyclone Days (per year)',
  stormTypes: {
    'named_storm': {
      'where': 'USA_WIND<64 AND USA_WIND>=34',
      'label': 'Named Storms',
      'tooltip': 'Named Storm Days',
      'legend_label': 'Named Storms (>= 34kt)',
      'fill': '#C6DBEF',
      'active': true
    },
    'hurricane': {
      'where': 'USA_WIND>=64 AND USA_WIND<96',
      'label': 'Hurricanes',
      'tooltip': 'Hurricane Days',
      'legend_label': 'Hurricanes (>=64kt)',
      'fill': '#6BAED6',
      'active': true
    },
    'major_hurricane': {
      'where': 'USA_WIND>=96',
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
      return d3.select('#plot').append('svg').attr('width', this.width).attr('height', this.height);
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

      this.xAxis.call(d3.axisBottom(this.x)).selectAll('text').style('text-anchor', 'end').attr('dx', '-.5em').attr('dy', '.15em').attr('transform', 'rotate(-65)').html(function (d, i, nodes) {
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
        return _this6.toggleTooltip(key, d.year, true);
      }).on('mouseout', function (d) {
        return _this6.toggleTooltip(key, d.year, false);
      });
      this.stormTypes[key].bars = bars;
    }
  }, {
    key: "toggleTooltip",
    value: function toggleTooltip(key, year, showTooltip) {
      d3.select("#data-tooltip--".concat(key, "--").concat(year, "--rect")).attr('style', showTooltip ? '' : 'display: none').raise();
      d3.select("#data-tooltip--".concat(key, "--").concat(year, "--text")).attr('style', showTooltip ? '' : 'display: none').raise();
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
        return _this7.y(d.value) - _this7.TOOLTIP_HEIGHT / 2 - text_margin.top;
      }).html(function (d) {
        return "Year: ".concat(d.year);
      });
      tooltip_text.append('tspan').attr('x', function (d) {
        return _this7.calcTooltipX(d) + text_margin.left;
      }).attr('y', function (d) {
        return _this7.y(d.value) - text_margin.top;
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
/* harmony export */   "getMaxYear": () => (/* binding */ getMaxYear),
/* harmony export */   "getMinYear": () => (/* binding */ getMinYear),
/* harmony export */   "optionFactory": () => (/* binding */ optionFactory),
/* harmony export */   "setupYearSelect": () => (/* binding */ setupYearSelect)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");

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
___CSS_LOADER_EXPORT___.push([module.id, "\nbody {\n    font-family: Arial Narrow, serif;\n    margin-top: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0;\n    width: 1200px;\n}\n\n.data-tooltips .tooltip {\n    width: 180px;\n    height: 60px;\n    font-size: 1.5em;\n}\n\n.tick text {\n    fill: #595959;\n}\n\n#y-axis-title {\n    font-size: 1.3em;\n}\n\n#plot .tick {\n    font-size: 1.5em;\n}\n\n#graph-container {\n    display: flex;\n}\n\n#graph-title {\n    margin-left: 200px;\n    font-weight: normal;\n}\n\n#menu {\n    height: 130px;\n    padding: 10px;\n}\n\n#menu div {\n    margin: 10px;\n}\n\n#show-storm-types {\n    border: 1px solid black;\n}\n\n#show-storm-types label {\n    display: block;\n    margin: 5px; \n}\n\n#year-select {\n    border: 1px solid black;\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":";AACA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;IACV,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,WAAW;AACf;;AAEA;IACI,uBAAuB;AAC3B","sourcesContent":["\nbody {\n    font-family: Arial Narrow, serif;\n    margin-top: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0;\n    width: 1200px;\n}\n\n.data-tooltips .tooltip {\n    width: 180px;\n    height: 60px;\n    font-size: 1.5em;\n}\n\n.tick text {\n    fill: #595959;\n}\n\n#y-axis-title {\n    font-size: 1.3em;\n}\n\n#plot .tick {\n    font-size: 1.5em;\n}\n\n#graph-container {\n    display: flex;\n}\n\n#graph-title {\n    margin-left: 200px;\n    font-weight: normal;\n}\n\n#menu {\n    height: 130px;\n    padding: 10px;\n}\n\n#menu div {\n    margin: 10px;\n}\n\n#show-storm-types {\n    border: 1px solid black;\n}\n\n#show-storm-types label {\n    display: block;\n    margin: 5px; \n}\n\n#year-select {\n    border: 1px solid black;\n}\n"],"sourceRoot":""}]);
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
});
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NUI7QUFDQStDLEVBQUFBLEtBQUssQ0FBQ1MsZUFBTixDQUFzQkosaUJBQXRCO0FBQ0FqSCxFQUFBQSxrREFBQSxDQUFxQixLQUFyQixFQUE0QmtILGVBQTVCLEVBQTZDRCxpQkFBN0MsRUFBZ0VMLEtBQUssQ0FBQ3hHLFFBQXRFO0FBQ0QsQ0FKRDtBQU1BZ0gsYUFBYSxDQUFDSixnQkFBZCxDQUErQixRQUEvQixFQUF5QyxZQUFZO0FBQ25ERSxFQUFBQSxlQUFlLEdBQUd2RyxRQUFRLENBQUN5RyxhQUFhLENBQUN2RCxLQUFmLENBQTFCO0FBQ0ErQyxFQUFBQSxLQUFLLENBQUNVLGFBQU4sQ0FBb0JKLGVBQXBCO0FBQ0FsSCxFQUFBQSxrREFBQSxDQUFxQixPQUFyQixFQUE4QmlILGlCQUE5QixFQUFpREwsS0FBSyxDQUFDMUcsUUFBdkQsRUFBaUVnSCxlQUFqRTtBQUNELENBSkQ7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICB0aXRsZTogJ05vcnRoIEF0bGFudGljIFdlc3Qgb2YgNjDCsFc6IDE5NTAtMjAyMCcsXG4gIHdpZHRoOiA4MDAsXG4gIGhlaWdodDogNTAwLFxuICBtYXJnaW46IHsgbGVmdDogODAsIHJpZ2h0OiAwLCB0b3A6IDE1LCBib3R0b206IDYwIH0sXG4gIHllYXJTdGFydDogMTk1MCxcbiAgeWVhckVuZDogMjAyMCxcbiAgeUF4aXNUaXRsZTogJ1Ryb3BpY2FsIEN5Y2xvbmUgRGF5cyAocGVyIHllYXIpJyxcbiAgc3Rvcm1UeXBlczoge1xuICAgICduYW1lZF9zdG9ybSc6IHtcbiAgICAgICd3aGVyZSc6ICdVU0FfV0lORDw2NCBBTkQgVVNBX1dJTkQ+PTM0JyxcbiAgICAgICdsYWJlbCc6ICdOYW1lZCBTdG9ybXMnLFxuICAgICAgJ3Rvb2x0aXAnOiAnTmFtZWQgU3Rvcm0gRGF5cycsXG4gICAgICAnbGVnZW5kX2xhYmVsJzogJ05hbWVkIFN0b3JtcyAoPj0gMzRrdCknLFxuICAgICAgJ2ZpbGwnOiAnI0M2REJFRicsXG4gICAgICAnYWN0aXZlJzogdHJ1ZVxuICAgIH0sXG4gICAgJ2h1cnJpY2FuZSc6IHtcbiAgICAgICd3aGVyZSc6ICdVU0FfV0lORD49NjQgQU5EIFVTQV9XSU5EPDk2JyxcbiAgICAgICdsYWJlbCc6ICdIdXJyaWNhbmVzJyxcbiAgICAgICd0b29sdGlwJzogJ0h1cnJpY2FuZSBEYXlzJyxcbiAgICAgICdsZWdlbmRfbGFiZWwnOiAnSHVycmljYW5lcyAoPj02NGt0KScsXG4gICAgICAnZmlsbCc6ICcjNkJBRUQ2JyxcbiAgICAgICdhY3RpdmUnOiB0cnVlXG4gICAgfSxcbiAgICAnbWFqb3JfaHVycmljYW5lJzoge1xuICAgICAgJ3doZXJlJzogJ1VTQV9XSU5EPj05NicsXG4gICAgICAnbGFiZWwnOiAnTWFqb3IgSHVycmljYW5lcycsXG4gICAgICAndG9vbHRpcCc6ICdNYWpvciBIdXJyaWNhbmUgRGF5cycsXG4gICAgICAnbGVnZW5kX2xhYmVsJzogJ01ham9yIEh1cnJpY2FuZXMgKD49IDk2a3QpJyxcbiAgICAgICdmaWxsJzogJyMwODUxOUMnLFxuICAgICAgJ2FjdGl2ZSc6IHRydWVcbiAgICB9XG4gIH0sXG4gIC8vIFN0b3AgbGFiZWxsaW5nIGV2ZXJ5IHgtYXhpcyB0aWNrIGFmdGVyIHRoaXMgbWFueSBlbGVtZW50c1xuICBUSUNLX0xBQkVMX1RIUkVTSE9MRDogMzAsXG4gIC8vIE51bWJlciBvZiB0aWNrcyBiZXR3ZWVuIGxhYmVscyBvbmNlIFRJQ0tfTEFCRUxfVEhSRVNESE9MRCBpcyBtZXQgKGluY2x1c2l2ZSlcbiAgVElDS19MQUJFTF9TVEVQOiA1LFxuICAvLyBUaGVzZSBzaG91bGQgYmUgY29uc2lzdGVudCB3aXRoIHRoZSBDU1NcbiAgVE9PTFRJUF9IRUlHSFQ6IDYwLFxuICBUT09MVElQX1dJRFRIOiAxODBcbn1cblxuIiwiXG5leHBvcnQgY29uc3QgZGF0YSA9IHtcbiAgXCIxOTUwXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxMS41LFxuICAgIFwiaHVycmljYW5lXCI6IDM4LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNTkuNVxuICB9LFxuICBcIjE5NTFcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMjMuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0MS43NVxuICB9LFxuICBcIjE5NTJcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDIuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxNC4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI3XG4gIH0sXG4gIFwiMTk1M1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMy4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxNC4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQ0XG4gIH0sXG4gIFwiMTk1NFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNyxcbiAgICBcImh1cnJpY2FuZVwiOiAyMC41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDVcbiAgfSxcbiAgXCIxOTU1XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA4LjUsXG4gICAgXCJodXJyaWNhbmVcIjogMzMsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA1OS4yNVxuICB9LFxuICBcIjE5NTZcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMTAuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyOS41XG4gIH0sXG4gIFwiMTk1N1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMC41LFxuICAgIFwiaHVycmljYW5lXCI6IDUuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDIyLjc1XG4gIH0sXG4gIFwiMTk1OFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMy43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAxNi43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQxLjVcbiAgfSxcbiAgXCIxOTU5XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDEyLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMzYuMjVcbiAgfSxcbiAgXCIxOTYwXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA2Ljc1LFxuICAgIFwiaHVycmljYW5lXCI6IDEyLFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjdcbiAgfSxcbiAgXCIxOTYxXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxMy43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAyNC43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQ2LjI1XG4gIH0sXG4gIFwiMTk2MlwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMCxcbiAgICBcImh1cnJpY2FuZVwiOiAxMS4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI1Ljc1XG4gIH0sXG4gIFwiMTk2M1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMy43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAyMi43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDM1Ljc1XG4gIH0sXG4gIFwiMTk2NFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogOC43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAzMyxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDUzLjVcbiAgfSxcbiAgXCIxOTY1XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA2LjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDkuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyMVxuICB9LFxuICBcIjE5NjZcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDguNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMjUuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAzNi41XG4gIH0sXG4gIFwiMTk2N1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNS43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAxOC41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjguNzVcbiAgfSxcbiAgXCIxOTY4XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLFxuICAgIFwiaHVycmljYW5lXCI6IDcuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDIwLjVcbiAgfSxcbiAgXCIxOTY5XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA0Ljc1LFxuICAgIFwiaHVycmljYW5lXCI6IDI0LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0OS43NVxuICB9LFxuICBcIjE5NzBcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEsXG4gICAgXCJodXJyaWNhbmVcIjogNixcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDIwLjVcbiAgfSxcbiAgXCIxOTcxXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxLFxuICAgIFwiaHVycmljYW5lXCI6IDE3LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDYuMjVcbiAgfSxcbiAgXCIxOTcyXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLFxuICAgIFwiaHVycmljYW5lXCI6IDIuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxNy41XG4gIH0sXG4gIFwiMTk3M1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMCxcbiAgICBcImh1cnJpY2FuZVwiOiAzLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjAuNVxuICB9LFxuICBcIjE5NzRcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMC41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMzEuNzVcbiAgfSxcbiAgXCIxOTc1XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAyLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDExLjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyNVxuICB9LFxuICBcIjE5NzZcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMy43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDE1LjI1XG4gIH0sXG4gIFwiMTk3N1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMSxcbiAgICBcImh1cnJpY2FuZVwiOiA1LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTMuMjVcbiAgfSxcbiAgXCIxOTc4XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLFxuICAgIFwiaHVycmljYW5lXCI6IDgsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyMlxuICB9LFxuICBcIjE5NzlcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDQuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTEuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyOC4yNVxuICB9LFxuICBcIjE5ODBcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDYuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogOS41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjIuMjVcbiAgfSxcbiAgXCIxOTgxXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAyLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDExLFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMzZcbiAgfSxcbiAgXCIxOTgyXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLjc1LFxuICAgIFwiaHVycmljYW5lXCI6IDQsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxMVxuICB9LFxuICBcIjE5ODNcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMi4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDExLjI1XG4gIH0sXG4gIFwiMTk4NFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMC43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMS41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMzJcbiAgfSxcbiAgXCIxOTg1XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA0LFxuICAgIFwiaHVycmljYW5lXCI6IDE4LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDEuNVxuICB9LFxuICBcIjE5ODZcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAsXG4gICAgXCJodXJyaWNhbmVcIjogMi4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDEyLjc1XG4gIH0sXG4gIFwiMTk4N1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMC41LFxuICAgIFwiaHVycmljYW5lXCI6IDIuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxMi41XG4gIH0sXG4gIFwiMTk4OFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNi41LFxuICAgIFwiaHVycmljYW5lXCI6IDEyLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjguNVxuICB9LFxuICBcIjE5ODlcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMi41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjZcbiAgfSxcbiAgXCIxOTkwXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLFxuICAgIFwiaHVycmljYW5lXCI6IDkuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyNS41XG4gIH0sXG4gIFwiMTk5MVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMS4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiA3LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTQuNVxuICB9LFxuICBcIjE5OTJcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuNSxcbiAgICBcImh1cnJpY2FuZVwiOiA1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTdcbiAgfSxcbiAgXCIxOTkzXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLjc1LFxuICAgIFwiaHVycmljYW5lXCI6IDcuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDIwLjI1XG4gIH0sXG4gIFwiMTk5NFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMCxcbiAgICBcImh1cnJpY2FuZVwiOiAxLFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTZcbiAgfSxcbiAgXCIxOTk1XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA3LjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDM0LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA2M1xuICB9LFxuICBcIjE5OTZcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDkuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMjkuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDUwXG4gIH0sXG4gIFwiMTk5N1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMS43NSxcbiAgICBcImh1cnJpY2FuZVwiOiA1LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxOFxuICB9LFxuICBcIjE5OThcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDgsXG4gICAgXCJodXJyaWNhbmVcIjogMjcuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQyLjVcbiAgfSxcbiAgXCIxOTk5XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA3LjUsXG4gICAgXCJodXJyaWNhbmVcIjogMjYuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0N1xuICB9LFxuICBcIjIwMDBcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTAsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAzMC4yNVxuICB9LFxuICBcIjIwMDFcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMTUuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0MlxuICB9LFxuICBcIjIwMDJcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMsXG4gICAgXCJodXJyaWNhbmVcIjogOC43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQyLjI1XG4gIH0sXG4gIFwiMjAwM1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNy41LFxuICAgIFwiaHVycmljYW5lXCI6IDE0LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0MC41XG4gIH0sXG4gIFwiMjAwNFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMTQsXG4gICAgXCJodXJyaWNhbmVcIjogMjYuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA1MS41XG4gIH0sXG4gIFwiMjAwNVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMTcuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMzcuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA4Mi4yNVxuICB9LFxuICBcIjIwMDZcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAsXG4gICAgXCJodXJyaWNhbmVcIjogMy43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDIxLjI1XG4gIH0sXG4gIFwiMjAwN1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNixcbiAgICBcImh1cnJpY2FuZVwiOiAxMC41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjUuMjVcbiAgfSxcbiAgXCIyMDA4XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA1LjUsXG4gICAgXCJodXJyaWNhbmVcIjogMjMuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA2NC43NVxuICB9LFxuICBcIjIwMDlcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogNS43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDEzLjI1XG4gIH0sXG4gIFwiMjAxMFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNC4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAyMSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDUxLjc1XG4gIH0sXG4gIFwiMjAxMVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNC41LFxuICAgIFwiaHVycmljYW5lXCI6IDE5LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNjBcbiAgfSxcbiAgXCIyMDEyXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDEyLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDhcbiAgfSxcbiAgXCIyMDEzXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLFxuICAgIFwiaHVycmljYW5lXCI6IDEuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDE0XG4gIH0sXG4gIFwiMjAxNFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMy4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMixcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI0LjI1XG4gIH0sXG4gIFwiMjAxNVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMy41LFxuICAgIFwiaHVycmljYW5lXCI6IDcuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxOS43NVxuICB9LFxuICBcIjIwMTZcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDguNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMTYuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0Mi41XG4gIH0sXG4gIFwiMjAxN1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMTIuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMzIuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA1OS43NVxuICB9LFxuICBcIjIwMThcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDQsXG4gICAgXCJodXJyaWNhbmVcIjogOSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI0LjI1XG4gIH0sXG4gIFwiMjAxOVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNi4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxNC4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDM5LjI1XG4gIH0sXG4gIFwiMjAyMFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNS41LFxuICAgIFwiaHVycmljYW5lXCI6IDI4LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogODFcbiAgfVxufVxuXG4iLCJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJ1xuXG5leHBvcnQgY2xhc3MgR3JhcGgge1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZywgZGF0YSkge1xuICAgIHRoaXMuTUlOX1lFQVIgPSB1dGlsLmdldE1pblllYXIoZGF0YSlcbiAgICB0aGlzLk1BWF9ZRUFSID0gdXRpbC5nZXRNYXhZZWFyKGRhdGEpXG4gICAgdGhpcy5USUNLX0xBQkVMX1RIUkVTSE9MRCA9IGNvbmZpZy5USUNLX0xBQkVMX1RIUkVTSE9MRFxuICAgIHRoaXMuVElDS19MQUJFTF9TVEVQID0gY29uZmlnLlRJQ0tfTEFCRUxfU1RFUFxuICAgIHRoaXMuVE9PTFRJUF9XSURUSCA9IGNvbmZpZy5UT09MVElQX1dJRFRIXG4gICAgdGhpcy5UT09MVElQX0hFSUdIVCA9IGNvbmZpZy5UT09MVElQX0hFSUdIVFxuXG4gICAgdGhpcy5kYXRhID0gZGF0YVxuICAgIHRoaXMudGl0bGUgPSBjb25maWcudGl0bGVcbiAgICB0aGlzLnlBeGlzVGl0bGUgPSBjb25maWcueUF4aXNUaXRsZVxuICAgIHRoaXMueWVhcnMgPSBPYmplY3Qua2V5cyhkYXRhKS5tYXAoZCA9PiBwYXJzZUludChkKSlcbiAgICB0aGlzLnllYXJTdGFydCA9IGNvbmZpZy55ZWFyU3RhcnRcbiAgICB0aGlzLnllYXJFbmQgPSBjb25maWcueWVhckVuZFxuICAgIHRoaXMuc3Rvcm1UeXBlcyA9IGNvbmZpZy5zdG9ybVR5cGVzXG4gICAgdGhpcy5tYXJnaW4gPSBjb25maWcubWFyZ2luXG4gICAgdGhpcy53aWR0aCA9IGNvbmZpZy53aWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gY29uZmlnLmhlaWdodFxuICAgIHRoaXMucGxvdCA9IHRoaXMuaW5pdFBsb3QoKVxuICAgIHRoaXMuZGF0YXNldHMgPSB0aGlzLmluaXREYXRhc2V0cyhPYmplY3Qua2V5cyhjb25maWcuc3Rvcm1UeXBlcykpXG4gICAgdGhpcy54ID0gdGhpcy5pbml0WFNjYWxlKClcbiAgICB0aGlzLnkgPSB0aGlzLmluaXRZU2NhbGUoKVxuXG4gICAgLy8gSW5zZXJ0IFNWRyBlbGVtZW50c1xuXG4gICAgLy8gU1ZHIGVsZW1lbnRzIGFyZSBwYWludGVkIGluIHRoZSBvcmRlciB0aGV5IGFyZSBpbnNlcnRlZCxcbiAgICAvLyBzbyB3ZSBhZGQgdGhlIGF4ZXMgYW5kIHRvb2x0aXBzIGxhc3Qgc28gdGhleSBzaG93IHVwIG92ZXIgdGhlIGJhcnNcbiAgICAvLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL1NWRzExL3JlbmRlci5odG1sI1JlbmRlcmluZ09yZGVyXG5cbiAgICAvLyBJbml0aWFsaXplIGRhdGEgYmFycyB3aXRoIHplcm8gaGVpZ2h0XG4gICAgT2JqZWN0LmtleXMoY29uZmlnLnN0b3JtVHlwZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHRoaXMuaW5pdEJhcnMoa2V5KVxuICAgIH0pXG5cbiAgICAvLyBEcmF3IHRoZSBheGVzXG4gICAgdGhpcy54QXhpcyA9IHRoaXMuYXBwZW5kWEF4aXMoKVxuICAgIHRoaXMuaW5pdFhBeGlzKClcbiAgICB0aGlzLnNldFlBeGlzVGl0bGUoKVxuICAgIHRoaXMueUF4aXMgPSB0aGlzLmluaXRZQXhpcygpXG5cbiAgICAvLyBEcmF3IHRoZSB0b29sdGlwc1xuICAgIE9iamVjdC5rZXlzKGNvbmZpZy5zdG9ybVR5cGVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICB0aGlzLmluaXRUb29sdGlwcyhrZXkpXG4gICAgfSlcblxuICAgIC8vIFNob3cgdGhlIGJhcnMgZm9yIGluaXRpYWxseSBhY3RpdmF0ZWQgc3Rvcm0gdHlwZXNcbiAgICBjb25zdCBpbml0U3Rvcm1UeXBlcyA9IE9iamVjdC5rZXlzKHRoaXMuc3Rvcm1UeXBlcykuZmlsdGVyKGtleSA9PiB0aGlzLnN0b3JtVHlwZXNba2V5XS5hY3RpdmUpXG4gICAgaW5pdFN0b3JtVHlwZXMuZm9yRWFjaChrZXkgPT4gdGhpcy5zaG93QmFycyhrZXkpKVxuXG4gIH1cblxuICBzZXRZQXhpc1RpdGxlKCkge1xuICAgIHRoaXMucGxvdC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2lkJywgJ3ktYXhpcy10aXRsZScpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHJvdGF0ZSgtOTApIHRyYW5zbGF0ZSgtJHt0aGlzLmhlaWdodC81fSwgMzApYClcbiAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLmh0bWwodGhpcy55QXhpc1RpdGxlKVxuICB9XG5cbiAgaW5pdFBsb3QoKSB7XG4gICAgcmV0dXJuIGQzLnNlbGVjdCgnI3Bsb3QnKS5hcHBlbmQoJ3N2ZycpXG4gICAgICAuYXR0cignd2lkdGgnLCB0aGlzLndpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0KVxuICB9XG5cbiAgZ2V0WERvbWFpbigpIHtcbiAgICByZXR1cm4gWy4uLkFycmF5KHRoaXMueWVhckVuZC10aGlzLnllYXJTdGFydCsxKS5rZXlzKCldLm1hcChkID0+IGQrdGhpcy55ZWFyU3RhcnQpXG4gIH1cblxuICBpbml0WFNjYWxlKCkge1xuICAgIHJldHVybiBkMy5zY2FsZUJhbmQoKVxuICAgICAgLmRvbWFpbih0aGlzLmdldFhEb21haW4oKSlcbiAgICAgIC5yYW5nZShbdGhpcy5tYXJnaW4ubGVmdCwgdGhpcy53aWR0aCAtIHRoaXMubWFyZ2luLnJpZ2h0XSlcbiAgfVxuXG4gIGluaXRZU2NhbGUoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIHRoaXMuY2FsY01heCgpXSlcbiAgICAgIC5yYW5nZShbdGhpcy5oZWlnaHQgLSB0aGlzLm1hcmdpbi5ib3R0b20sIHRoaXMubWFyZ2luLnRvcF0pXG4gIH1cblxuICBhcHBlbmRYQXhpcygpIHtcbiAgICByZXR1cm4gdGhpcy5wbG90LmFwcGVuZCgnZycpICBcbiAgICAgIC5hdHRyKCdpZCcsICd4LWF4aXMnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwgJHt0aGlzLmhlaWdodCAtIHRoaXMubWFyZ2luLmJvdHRvbX0pYClcbiAgfVxuXG4gIHJlbW92ZVhBeGlzKCkge1xuICAgIGQzLnNlbGVjdCgnI3gtYXhpcycpLnJlbW92ZSgpXG4gIH1cblxuICBpbml0WEF4aXMoKSB7XG4gICAgdGhpcy54QXhpcy5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy54KSlcbiAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAgIC5hdHRyKCdkeCcsICctLjVlbScpXG4gICAgICAgIC5hdHRyKCdkeScsICcuMTVlbScpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAncm90YXRlKC02NSknKVxuICAgICAgICAuaHRtbCgoZCwgaSwgbm9kZXMpID0+IHtcbiAgICAgICAgICBpZiAobm9kZXMubGVuZ3RoID4gdGhpcy5USUNLX0xBQkVMX1RIUkVTSE9MRCkge1xuICAgICAgICAgICAgaWYgKGQgJSB0aGlzLlRJQ0tfTEFCRUxfU1RFUCA9PSAwKSByZXR1cm4gZFxuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkXG4gICAgICAgIH0pXG4gIH1cblxuICBpbml0WUF4aXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGxvdC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt0aGlzLm1hcmdpbi5sZWZ0fSwgMClgKVxuICAgICAgLmNhbGwoZDMuYXhpc0xlZnQodGhpcy55KSlcbiAgfVxuXG5cbiAgY2FsY0FjdGl2ZVllYXJzKCkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmRhdGEpXG4gICAgY29uc3QgeWVhcnMgPSBbXVxuICAgIGZvciAobGV0IGQgb2Yga2V5cykge1xuICAgICAgY29uc3QgeXIgPSBwYXJzZUludChkKVxuICAgICAgaWYgKHlyIDwgdGhpcy55ZWFyU3RhcnQgfHwgeXIgPiB0aGlzLnllYXJFbmQpIGNvbnRpbnVlXG4gICAgICB5ZWFycy5wdXNoKHlyKVxuICAgIH1cbiAgICByZXR1cm4geWVhcnNcbiAgfVxuXG4gIGluaXREYXRhc2V0cygpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXModGhpcy5zdG9ybVR5cGVzKSkge1xuICAgICAgY29uc3QgZGF0YXNldCA9IFtdXG4gICAgICBmb3IgKGxldCB5ZWFyIG9mIHRoaXMueWVhcnMpIHtcbiAgICAgICAgZGF0YXNldC5wdXNoKHsgJ3llYXInOiB5ZWFyLCAndmFsdWUnOiB0aGlzLmRhdGFbU3RyaW5nKHllYXIpXVtrZXldIH0pXG4gICAgICB9XG4gICAgICB0aGlzLnN0b3JtVHlwZXNba2V5XS5kYXRhc2V0ID0gZGF0YXNldFxuICAgIH1cbiAgfVxuXG4gIGNhbGNNYXgoKSB7XG4gICAgbGV0IG1heCA9IDBcbiAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXModGhpcy5zdG9ybVR5cGVzKSkge1xuICAgICAgZm9yIChsZXQgZCBvZiB0aGlzLnN0b3JtVHlwZXNba2V5XS5kYXRhc2V0KSB7XG4gICAgICAgIG1heCA9IGQudmFsdWUgPiBtYXggPyBkLnZhbHVlIDogbWF4XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFJvdW5kIHVwIGJ5IDEwXG4gICAgcmV0dXJuIHBhcnNlSW50KG1heCAvIDEwKSAqIDEwICsgMTBcbiAgfVxuXG4gIGdldEFjdGl2ZURhdGEoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuc3Rvcm1UeXBlc1trZXldLmRhdGFzZXQuZmlsdGVyKGQgPT4ge1xuICAgICAgcmV0dXJuIGQueWVhciA+PSB0aGlzLnllYXJTdGFydCAmJiBkLnllYXIgPD0gdGhpcy55ZWFyRW5kXG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZVllYXJTdGFydChuZXdZZWFyU3RhcnQpIHtcbiAgICB0aGlzLnllYXJTdGFydCA9IG5ld1llYXJTdGFydFxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIHVwZGF0ZVllYXJFbmQobmV3WWVhckVuZCkge1xuICAgIHRoaXMueWVhckVuZCA9IG5ld1llYXJFbmRcbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy54LmRvbWFpbih0aGlzLmdldFhEb21haW4oKSlcbiAgICB0aGlzLnJlbW92ZVRvb2x0aXBzKClcbiAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXModGhpcy5zdG9ybVR5cGVzKSkge1xuICAgICAgdGhpcy5yZW1vdmVCYXJzKGtleSlcbiAgICAgIHRoaXMuaW5pdEJhcnMoa2V5KVxuICAgIH1cbiAgICBmb3IgKGxldCBrZXkgb2YgdGhpcy5nZXRBY3RpdmVTdG9ybVR5cGVzKCkpIHtcbiAgICAgIHRoaXMuc2hvd0JhcnMoa2V5KVxuICAgIH1cbiAgICB0aGlzLnJlbW92ZVhBeGlzKClcbiAgICB0aGlzLnhBeGlzID0gdGhpcy5hcHBlbmRYQXhpcygpXG4gICAgdGhpcy5pbml0WEF4aXMoKVxuICAgIHRoaXMueUF4aXMgPSB0aGlzLmluaXRZQXhpcygpXG4gICAgLy8gS2VlcCBzZXBhcmF0ZSBsb29wIGZvciBjb3JyZWN0IGRyYXdpbmcgb3JkZXJcbiAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXModGhpcy5zdG9ybVR5cGVzKSkge1xuICAgICAgdGhpcy5pbml0VG9vbHRpcHMoa2V5KVxuICAgIH1cbiAgfVxuXG4gIGdldEFjdGl2ZVN0b3JtVHlwZXMoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc3Rvcm1UeXBlcykuZmlsdGVyKGtleSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5zdG9ybVR5cGVzW2tleV0uYWN0aXZlXG4gICAgfSlcbiAgfVxuXG4gIGluaXRCYXJzKGtleSkge1xuICAgIGNvbnN0IGRhdGFzZXQgPSB0aGlzLmdldEFjdGl2ZURhdGEoa2V5KVxuICAgIGNvbnN0IGJhcnMgPSB0aGlzLnBsb3QuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdkYXRhLWJhcnMnKVxuICAgICAgLmF0dHIoJ2lkJywgYGRhdGEtYmFycy0tJHtrZXl9YClcbiAgICAgIC5zZWxlY3RBbGwoJ3JlY3QnKVxuICAgICAgICAuZGF0YShkYXRhc2V0KVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdiYXInKVxuICAgICAgICAgIC5hdHRyKCdkYXRhLXllYXInLCBkID0+IGQueWVhcilcbiAgICAgICAgICAuYXR0cignZGF0YS12YWx1ZScsIGQgPT4gZC52YWx1ZSlcblxuICAgIGJhcnMuYXR0cignaGVpZ2h0JywgMClcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgdGhpcy54LmJhbmR3aWR0aCgpKVxuICAgICAgICAuYXR0cigneCcsIGQgPT4gdGhpcy54KGQueWVhcikpXG4gICAgICAgIC5hdHRyKCd5JywgdGhpcy55KDApKVxuICAgICAgICAuYXR0cignZmlsbCcsIHRoaXMuc3Rvcm1UeXBlc1trZXldLmZpbGwpXG4gICAgICAgIC5vbignbW91c2VlbnRlcicsIGQgPT4gdGhpcy50b2dnbGVUb29sdGlwKGtleSwgZC55ZWFyLCB0cnVlKSlcbiAgICAgICAgLm9uKCdtb3VzZW91dCcsIGQgPT4gdGhpcy50b2dnbGVUb29sdGlwKGtleSwgZC55ZWFyLCBmYWxzZSkpXG5cbiAgICB0aGlzLnN0b3JtVHlwZXNba2V5XS5iYXJzID0gYmFyc1xuICB9XG5cbiAgdG9nZ2xlVG9vbHRpcChrZXksIHllYXIsIHNob3dUb29sdGlwKSB7XG4gICAgZDMuc2VsZWN0KGAjZGF0YS10b29sdGlwLS0ke2tleX0tLSR7eWVhcn0tLXJlY3RgKVxuICAgICAgLmF0dHIoJ3N0eWxlJywgc2hvd1Rvb2x0aXAgPyAnJyA6ICdkaXNwbGF5OiBub25lJylcbiAgICAgIC5yYWlzZSgpXG4gICAgZDMuc2VsZWN0KGAjZGF0YS10b29sdGlwLS0ke2tleX0tLSR7eWVhcn0tLXRleHRgKVxuICAgICAgLmF0dHIoJ3N0eWxlJywgc2hvd1Rvb2x0aXAgPyAnJyA6ICdkaXNwbGF5OiBub25lJylcbiAgICAgIC5yYWlzZSgpXG4gIH1cblxuICBjYWxjVG9vbHRpcFgoZCkge1xuICAgIGNvbnN0IG5vcm1hbCA9IHRoaXMueChkLnllYXIpICsgdGhpcy54LmJhbmR3aWR0aCgpXG4gICAgaWYgKG5vcm1hbCArIHRoaXMuVE9PTFRJUF9XSURUSCA8IHRoaXMueC5yYW5nZSgpWzFdKSByZXR1cm4gbm9ybWFsXG4gICAgcmV0dXJuIG5vcm1hbCAtIHRoaXMuVE9PTFRJUF9XSURUSCAtIHRoaXMueC5iYW5kd2lkdGgoKVxuICB9XG5cbiAgY2FsY1Rvb2x0aXBZKGQpIHtcbiAgICAvLyBUT0RPXG4gIH1cblxuICByZW1vdmVUb29sdGlwcygpIHtcbiAgICBkMy5zZWxlY3RBbGwoJy5kYXRhLXRvb2x0aXBzJykucmVtb3ZlKClcbiAgfVxuXG4gIGluaXRUb29sdGlwcyhrZXkpIHtcbiAgICBjb25zdCBkYXRhc2V0ID0gdGhpcy5nZXRBY3RpdmVEYXRhKGtleSlcbiAgICBjb25zdCB0b29sdGlwcyA9IHRoaXMucGxvdC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2RhdGEtdG9vbHRpcHMnKVxuICAgICAgLmF0dHIoJ2lkJywgYGRhdGEtdG9vbHRpcHMtLSR7a2V5fWApXG4gICAgICAuc2VsZWN0QWxsKCdyZWN0JylcbiAgICAgICAgLmRhdGEoZGF0YXNldClcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYGRhdGEtdG9vbHRpcC0tJHtrZXl9LS0ke2QueWVhcn0tLXJlY3RgKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3Rvb2x0aXAnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCBkID0+IHRoaXMuY2FsY1Rvb2x0aXBYKGQpKVxuICAgICAgICAgICAgLmF0dHIoJ3knLCBkID0+IHRoaXMueShkLnZhbHVlKSAtIHRoaXMuVE9PTFRJUF9IRUlHSFQpXG4gICAgICAgICAgICAuYXR0cignc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKVxuICAgICAgICAgICAgLmF0dHIoJ2RhdGEteWVhcicsIGQgPT4gZC55ZWFyKVxuICAgICAgICAgICAgLmF0dHIoJ2RhdGEtdmFsdWUnLCBkID0+IGQudmFsdWUpXG4gICAgICAgICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXG4gICAgICAgICAgICAuYXR0cignc3Ryb2tlJywgdGhpcy5zdG9ybVR5cGVzW2tleV0uZmlsbClcbiAgICAgICAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAnMS41JylcblxuICAgIGNvbnN0IHRvb2x0aXBfdGV4dCA9IHRoaXMucGxvdC5zZWxlY3QoYCNkYXRhLXRvb2x0aXBzLS0ke2tleX1gKVxuICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5kYXRhKGRhdGFzZXQpXG4gICAgICAgICAgLmVudGVyKHRvb2x0aXBzKVxuICAgICAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYGRhdGEtdG9vbHRpcC0tJHtrZXl9LS0ke2QueWVhcn0tLXRleHRgKVxuICAgICAgICAgICAgICAuYXR0cignc3R5bGUnLCAnZGlzcGxheTogbm9uZScpXG4gICAgICAgICAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdzdGFydCcpXG4gICAgICAgICAgICAgIC5hdHRyKCd4JywgZCA9PiB0aGlzLmNhbGNUb29sdGlwWChkKSlcbiAgICAgICAgICAgICAgLmF0dHIoJ3knLCBkID0+IHRoaXMueShkLnZhbHVlKSlcblxuICAgIGNvbnN0IHRleHRfbWFyZ2luID0geyBsZWZ0OiA4LCB0b3A6IDggfVxuXG4gICAgdG9vbHRpcF90ZXh0LmFwcGVuZCgndHNwYW4nKVxuICAgICAgLmF0dHIoJ3gnLCBkID0+IHRoaXMuY2FsY1Rvb2x0aXBYKGQpICsgdGV4dF9tYXJnaW4ubGVmdClcbiAgICAgIC5hdHRyKCd5JywgZCA9PiB0aGlzLnkoZC52YWx1ZSkgLSB0aGlzLlRPT0xUSVBfSEVJR0hULzIgLSB0ZXh0X21hcmdpbi50b3ApXG4gICAgICAuaHRtbChkID0+IGBZZWFyOiAke2QueWVhcn1gKVxuXG4gICAgdG9vbHRpcF90ZXh0LmFwcGVuZCgndHNwYW4nKVxuICAgICAgLmF0dHIoJ3gnLCBkID0+IHRoaXMuY2FsY1Rvb2x0aXBYKGQpICsgdGV4dF9tYXJnaW4ubGVmdClcbiAgICAgIC5hdHRyKCd5JywgZCA9PiB0aGlzLnkoZC52YWx1ZSkgLSB0ZXh0X21hcmdpbi50b3ApXG4gICAgICAuaHRtbChkID0+IGAke3RoaXMuc3Rvcm1UeXBlc1trZXldLnRvb2x0aXB9OiAke2QudmFsdWV9YClcblxuICAgIHRoaXMuc3Rvcm1UeXBlc1trZXldLnRvb2x0aXBzID0gdG9vbHRpcHNcbiAgfVxuXG4gIHNob3dCYXJzKGtleSkge1xuICAgIHRoaXMuc3Rvcm1UeXBlc1trZXldLmJhcnMudHJhbnNpdGlvbigxMDAwKVxuICAgICAgLmF0dHIoJ3knLCBkID0+IHRoaXMueShkLnZhbHVlKSlcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBkID0+IHRoaXMueSgwKSAtIHRoaXMueShkLnZhbHVlKSlcbiAgfVxuXG4gIGhpZGVCYXJzKGtleSkge1xuICAgIHRoaXMuc3Rvcm1UeXBlc1trZXldLmJhcnMudHJhbnNpdGlvbigxMDAwKVxuICAgICAgLmF0dHIoJ3knLCBkID0+IHRoaXMueSgwKSlcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAwKVxuICB9XG5cbiAgcmVtb3ZlQmFycyhrZXkpIHtcbiAgICB0aGlzLmhpZGVCYXJzKGtleSlcbiAgICB0aGlzLnN0b3JtVHlwZXNba2V5XS5iYXJzLnJlbW92ZSgpXG4gICAgdGhpcy5zdG9ybVR5cGVzW2tleV0uYmFycyA9IFtdXG4gIH1cblxufVxuXG4iLCJpbXBvcnQgKiBhcyBjb25maWcgZnJvbSAnLi9jb25maWcnXG5cbmV4cG9ydCBjb25zdCBnZXRNYXhZZWFyID0gKGRhdGEpID0+IHtcbiAgbGV0IG1heCA9IDBcbiAgZm9yIChsZXQgayBvZiBPYmplY3Qua2V5cyhkYXRhKSkge1xuICAgIGsgPSBwYXJzZUludChrKVxuICAgIGlmIChrID4gbWF4KSB7IG1heCA9IGsgfVxuICB9XG4gIHJldHVybiBtYXhcbn1cblxuZXhwb3J0IGNvbnN0IGdldE1pblllYXIgPSAoZGF0YSkgPT4ge1xuICBsZXQgbWluID0gMTAwMDBcbiAgZm9yIChsZXQgayBvZiBPYmplY3Qua2V5cyhkYXRhKSkge1xuICAgIGsgPSBwYXJzZUludChrKVxuICAgIGlmIChrIDwgbWluKSB7IG1pbiA9IGsgfVxuICB9XG4gIHJldHVybiBtaW5cbn1cblxuZXhwb3J0IGNvbnN0IG9wdGlvbkZhY3RvcnkgPSBmdW5jdGlvbiAodmFsdWUsIGlubmVySFRNTCkge1xuICAgIHZhciBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHQudmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuICAgIG9wdC5pbm5lckhUTUwgPSBTdHJpbmcoaW5uZXJIVE1MKTtcbiAgICByZXR1cm4gb3B0O1xufVxuXG5cbmNvbnN0IHJlbW92ZUNoaWxkTm9kZXMgPSAocGFyZW50KSA9PiB7XG4gIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZClcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2V0dXBZZWFyU2VsZWN0ID0gKGxhYmVsLCB5ZWFyU2VsZWN0ZWQsIG1pblllYXIsIG1heFllYXIpID0+IHtcbiAgY29uc3QgeWVhclNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB5ZWFyLSR7bGFiZWx9LXNlbGVjdGApXG4gIHJlbW92ZUNoaWxkTm9kZXMoeWVhclNlbGVjdClcbiAgbGV0IHNlbGVjdGVkSW5kZXg7XG4gIGxldCBpbmRleCA9IDA7XG4gIGZvciAodmFyIHkgPSBtaW5ZZWFyOyB5PD1tYXhZZWFyOyB5Kyspe1xuICAgICAgaWYgKHBhcnNlSW50KHllYXJTZWxlY3RlZCkgPT0geSkgeyBzZWxlY3RlZEluZGV4ID0gaW5kZXggfVxuICAgICAgeWVhclNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25GYWN0b3J5KFN0cmluZyh5KSwgU3RyaW5nKHkpKSlcbiAgICAgIGluZGV4Kys7XG4gIH1cbiAgeWVhclNlbGVjdC5vcHRpb25zLnNlbGVjdGVkSW5kZXg9c2VsZWN0ZWRJbmRleFxuICByZXR1cm4geWVhclNlbGVjdFxufVxuXG5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCBOYXJyb3csIHNlcmlmO1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMTIwMHB4O1xcbn1cXG5cXG4uZGF0YS10b29sdGlwcyAudG9vbHRpcCB7XFxuICAgIHdpZHRoOiAxODBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4udGljayB0ZXh0IHtcXG4gICAgZmlsbDogIzU5NTk1OTtcXG59XFxuXFxuI3ktYXhpcy10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxufVxcblxcbiNwbG90IC50aWNrIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuI2dyYXBoLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNncmFwaC10aXRsZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuI21lbnUge1xcbiAgICBoZWlnaHQ6IDEzMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jbWVudSBkaXYge1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiNzaG93LXN0b3JtLXR5cGVzIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNzaG93LXN0b3JtLXR5cGVzIGxhYmVsIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogNXB4OyBcXG59XFxuXFxuI3llYXItc2VsZWN0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwgTmFycm93LCBzZXJpZjtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDEyMDBweDtcXG59XFxuXFxuLmRhdGEtdG9vbHRpcHMgLnRvb2x0aXAge1xcbiAgICB3aWR0aDogMTgwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLnRpY2sgdGV4dCB7XFxuICAgIGZpbGw6ICM1OTU5NTk7XFxufVxcblxcbiN5LWF4aXMtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbn1cXG5cXG4jcGxvdCAudGljayB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbiNncmFwaC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jZ3JhcGgtdGl0bGUge1xcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbiNtZW51IHtcXG4gICAgaGVpZ2h0OiAxMzBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI21lbnUgZGl2IHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4jc2hvdy1zdG9ybS10eXBlcyB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jc2hvdy1zdG9ybS10eXBlcyBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDVweDsgXFxufVxcblxcbiN5ZWFyLXNlbGVjdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuaW1wb3J0ICcuL2luZGV4LmNzcydcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJ1xuaW1wb3J0IHsgZGF0YSB9ICBmcm9tICcuL2RhdGEnXG5pbXBvcnQgeyBHcmFwaCB9IGZyb20gJy4vZ3JhcGgnXG5cbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJ1xuXG5jb25zdCBtaW5ZZWFyID0gdXRpbC5nZXRNaW5ZZWFyKGRhdGEpXG5jb25zdCBtYXhZZWFyID0gdXRpbC5nZXRNYXhZZWFyKGRhdGEpXG5cbmNvbnN0IGdyYXBoID0gbmV3IEdyYXBoKGNvbmZpZywgZGF0YSlcblxuY29uc3QgY2hlY2tib3hJZHMgPSB7XG4gICduYW1lZF9zdG9ybSc6ICdzaG93LW5hbWVkLXN0b3JtcycsXG4gICdodXJyaWNhbmUnOiAnc2hvdy1taW5vci1odXJyaWNhbmVzJyxcbiAgJ21ham9yX2h1cnJpY2FuZSc6ICdzaG93LW1ham9yLWh1cnJpY2FuZXMnXG59XG5cbmZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhjaGVja2JveElkcykpIHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjaGVja2JveElkc1trZXldKVxuICBlbC5jaGVja2VkID0gY29uZmlnLnN0b3JtVHlwZXNba2V5XS5hY3RpdmVcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgIGdyYXBoLnN0b3JtVHlwZXNba2V5XS5hY3RpdmUgPSB0cnVlXG4gICAgICBncmFwaC5zaG93QmFycyhrZXkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGdyYXBoLnN0b3JtVHlwZXNba2V5XS5hY3RpdmUgPSBmYWxzZVxuICAgICAgZ3JhcGguaGlkZUJhcnMoa2V5KVxuICAgIH1cbiAgfSlcbn1cblxubGV0IHNlbGVjdGVkU3RhcnRZZWFyID0gZ3JhcGgueWVhclN0YXJ0XG5sZXQgc2VsZWN0ZWRFbmRZZWFyID0gZ3JhcGgueWVhckVuZFxuXG5jb25zdCB5ZWFyU3RhcnRTZWxlY3QgPSB1dGlsLnNldHVwWWVhclNlbGVjdCgnc3RhcnQnLCBzZWxlY3RlZFN0YXJ0WWVhciwgbWluWWVhciwgbWF4WWVhcilcbmNvbnN0IHllYXJFbmRTZWxlY3QgPSB1dGlsLnNldHVwWWVhclNlbGVjdCgnZW5kJywgc2VsZWN0ZWRFbmRZZWFyLCBtaW5ZZWFyLCBtYXhZZWFyKVxuXG55ZWFyU3RhcnRTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICBzZWxlY3RlZFN0YXJ0WWVhciA9IHBhcnNlSW50KHllYXJTdGFydFNlbGVjdC52YWx1ZSlcbiAgZ3JhcGgudXBkYXRlWWVhclN0YXJ0KHNlbGVjdGVkU3RhcnRZZWFyKVxuICB1dGlsLnNldHVwWWVhclNlbGVjdCgnZW5kJywgc2VsZWN0ZWRFbmRZZWFyLCBzZWxlY3RlZFN0YXJ0WWVhciwgZ3JhcGguTUFYX1lFQVIpXG59KVxuXG55ZWFyRW5kU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgc2VsZWN0ZWRFbmRZZWFyID0gcGFyc2VJbnQoeWVhckVuZFNlbGVjdC52YWx1ZSlcbiAgZ3JhcGgudXBkYXRlWWVhckVuZChzZWxlY3RlZEVuZFllYXIpXG4gIHV0aWwuc2V0dXBZZWFyU2VsZWN0KCdzdGFydCcsIHNlbGVjdGVkU3RhcnRZZWFyLCBncmFwaC5NSU5fWUVBUiwgc2VsZWN0ZWRFbmRZZWFyKVxufSlcblxuLyogSW5pdCBTdGF0ZVxuICAneWVhclN0YXJ0JzogMTk1MCxcbiAgJ3llYXJFbmQnOiAyMDIwLFxuICAnYWN0aXZlU3Rvcm1UeXBlcyc6IFsnbmFtZWRfc3Rvcm0nLCAnaHVycmljYW5lJywgJ21ham9yX2h1cnJpY2FuZSddXG4qL1xuXG4vLyBNYXBcbi8vIFdoZXJlIGNsYXVzZSBnZW5lcmF0b3JcblxuLy9jb25zdCB5ZWFyX3doZXJlID0gKHN0YXJ0LCBlbmQpID0+IGBZRUFSPj0ke3N0YXJ0fSBBTkQgWUVBUjw9JHtlbmR9YFxuLy9jb25zdCB3aGVyZV9mYWN0b3J5ID0gKCkgPT4gYCR7eWVhcl93aGVyZSh5ZWFyU3RhcnQsIHllYXJFbmQpfSBBTkQgJHtzdG9ybV93aGVyZX1gXG5cbi8qXG5jb25zdCBtYXAgPSBMLm1hcCgnbWFwJykuc2V0VmlldyhbMzcuODM3LCAtMTAwLjQ3OV0sIDUpO1xuY29uc3QgYmFzZW1hcCA9IEwuZXNyaS5iYXNlbWFwTGF5ZXIoJ1N0cmVldHMnKS5hZGRUbyhtYXApO1xuXG4vLyBkdW1teSBmZWF0dXJlIGZvciBsb2dnaW5nXG4vL2xldCBmO1xuXG5jb25zdCBsYXllciA9IEwuZXNyaS5mZWF0dXJlTGF5ZXIoe1xuICB1cmw6ICdodHRwczovL3NlcnZpY2VzMi5hcmNnaXMuY29tL0ZpYVBBNGdhMGlRS2R1djMvQXJjR0lTL3Jlc3Qvc2VydmljZXMvSUJUckFDU19BTExfbGlzdF92MDRyMDBfbGluZXNfMS9GZWF0dXJlU2VydmVyLzAnLFxuICBzdHlsZTogZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAvL2lmICghZikgeyBmID0gZmVhdHVyZTsgIGNvbnNvbGUubG9nKGZlYXR1cmUpIH1cbiAgICBsZXQgYztcbiAgICBsZXQgcHJvcCA9IGZlYXR1cmUucHJvcGVydGllcy5VU0FfV0lORFxuICAgIGlmIChwcm9wIDwgNjQgJiYgcHJvcCA+PSAzNCkgeyBjID0gJ3JlZCcgfVxuICAgIGlmIChwcm9wID49IDY0ICYmIHByb3AgPCA5NikgeyBjID0gJ2dyZWVuJyB9XG4gICAgaWYgKHByb3AgPj0gOTYpIHsgYyA9ICdibHVlJyB9O1xuICAgIGlmICghYykgeyBjID0gJ3doaXRlJyB9XG4gICAgcmV0dXJuIHsgY29sb3I6IGMsIG9wYWNpdHk6IC45LCB3ZWlnaHQ6IDUgfTtcbiAgfSxcbiAgd2hlcmU6IHdoZXJlX2ZhY3RvcnkoKVxufSkuYWRkVG8obWFwKTtcblxuY29uc3QgZmVhdHVyZV9pbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlYXR1cmUtaW5mbycpXG5cbmxheWVyLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZmVhdHVyZV9pbmZvLmlubmVySFRNTCA9IHJlbmRlcl9mZWF0dXJlKGV2ZW50LmxheWVyLmZlYXR1cmUpXG59KVxuXG5sYXllci5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZmVhdHVyZV9pbmZvLmlubmVySFRNTCA9ICdIb3ZlciBvdmVyIGEgc3Rvcm0gdHJhY2sgZm9yIG1vcmUgZGF0YSdcbn0pXG5cbmNvbnN0IHJlbmRlcl9mZWF0dXJlID0gZiA9PiB7XG4gIGNvbnN0IHByb3BzID0gZi5wcm9wZXJ0aWVzXG4gIGNvbnN0IGRpc3BsYXlfcHJvcHMgPSBbICdMQVQnLCAnTE9OJywgJ1VTQV9XSU5EJywgJ3llYXInLCAnbW9udGgnLCAnZGF5JywgJ05BTUUnIF1cbiAgY29uc3QgcmVuZGVyZWQgPSBgXG4gICAgTmFtZTogJHtwcm9wc1snTkFNRSddfSA8YnI+XG4gICAgV2luZCBTcGVlZDogJHtwcm9wc1snVVNBX1dJTkQnXX0ga25vdHMgPGJyPlxuICAgIERhdGU6ICR7cHJvcHNbJ21vbnRoJ119LyR7cHJvcHNbJ2RheSddfS8ke3Byb3BzWyd5ZWFyJ119IDxicj5cbiAgICBMYXQ6ICR7cHJvcHNbJ0xBVCddfSA8YnI+XG4gICAgTG9uOiAke3Byb3BzWydMT04nXX0gPGJyPlxuICBgXG4gIHJldHVybiByZW5kZXJlZFxufVxuXG5jb25zdCByZW5kZXJfcHJvcCA9IChrZXksIHZhbHVlKSA9PiB7XG4gIHJldHVybiBgJHtrZXl9OiAke3ZhbHVlfVxcbmBcbn1cblxuKi9cbiJdLCJuYW1lcyI6WyJjb25maWciLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwieWVhclN0YXJ0IiwieWVhckVuZCIsInlBeGlzVGl0bGUiLCJzdG9ybVR5cGVzIiwiVElDS19MQUJFTF9USFJFU0hPTEQiLCJUSUNLX0xBQkVMX1NURVAiLCJUT09MVElQX0hFSUdIVCIsIlRPT0xUSVBfV0lEVEgiLCJkYXRhIiwidXRpbCIsIkdyYXBoIiwiTUlOX1lFQVIiLCJnZXRNaW5ZZWFyIiwiTUFYX1lFQVIiLCJnZXRNYXhZZWFyIiwieWVhcnMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiZCIsInBhcnNlSW50IiwicGxvdCIsImluaXRQbG90IiwiZGF0YXNldHMiLCJpbml0RGF0YXNldHMiLCJ4IiwiaW5pdFhTY2FsZSIsInkiLCJpbml0WVNjYWxlIiwiZm9yRWFjaCIsImtleSIsImluaXRCYXJzIiwieEF4aXMiLCJhcHBlbmRYQXhpcyIsImluaXRYQXhpcyIsInNldFlBeGlzVGl0bGUiLCJ5QXhpcyIsImluaXRZQXhpcyIsImluaXRUb29sdGlwcyIsImluaXRTdG9ybVR5cGVzIiwiZmlsdGVyIiwiYWN0aXZlIiwic2hvd0JhcnMiLCJhcHBlbmQiLCJhdHRyIiwiaHRtbCIsImQzIiwic2VsZWN0IiwiQXJyYXkiLCJzY2FsZUJhbmQiLCJkb21haW4iLCJnZXRYRG9tYWluIiwicmFuZ2UiLCJzY2FsZUxpbmVhciIsImNhbGNNYXgiLCJyZW1vdmUiLCJjYWxsIiwiYXhpc0JvdHRvbSIsInNlbGVjdEFsbCIsInN0eWxlIiwiaSIsIm5vZGVzIiwibGVuZ3RoIiwiYXhpc0xlZnQiLCJ5ciIsInB1c2giLCJkYXRhc2V0IiwieWVhciIsIlN0cmluZyIsIm1heCIsInZhbHVlIiwibmV3WWVhclN0YXJ0IiwidXBkYXRlIiwibmV3WWVhckVuZCIsInJlbW92ZVRvb2x0aXBzIiwicmVtb3ZlQmFycyIsImdldEFjdGl2ZVN0b3JtVHlwZXMiLCJyZW1vdmVYQXhpcyIsImdldEFjdGl2ZURhdGEiLCJiYXJzIiwiZW50ZXIiLCJiYW5kd2lkdGgiLCJmaWxsIiwib24iLCJ0b2dnbGVUb29sdGlwIiwic2hvd1Rvb2x0aXAiLCJyYWlzZSIsIm5vcm1hbCIsInRvb2x0aXBzIiwiY2FsY1Rvb2x0aXBYIiwidG9vbHRpcF90ZXh0IiwidGV4dF9tYXJnaW4iLCJ0b29sdGlwIiwidHJhbnNpdGlvbiIsImhpZGVCYXJzIiwiayIsIm1pbiIsIm9wdGlvbkZhY3RvcnkiLCJpbm5lckhUTUwiLCJvcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJyZW1vdmVDaGlsZE5vZGVzIiwicGFyZW50IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwic2V0dXBZZWFyU2VsZWN0IiwibGFiZWwiLCJ5ZWFyU2VsZWN0ZWQiLCJtaW5ZZWFyIiwibWF4WWVhciIsInllYXJTZWxlY3QiLCJnZXRFbGVtZW50QnlJZCIsInNlbGVjdGVkSW5kZXgiLCJpbmRleCIsImFwcGVuZENoaWxkIiwib3B0aW9ucyIsImdyYXBoIiwiY2hlY2tib3hJZHMiLCJlbCIsImNoZWNrZWQiLCJhZGRFdmVudExpc3RlbmVyIiwic2VsZWN0ZWRTdGFydFllYXIiLCJzZWxlY3RlZEVuZFllYXIiLCJ5ZWFyU3RhcnRTZWxlY3QiLCJ5ZWFyRW5kU2VsZWN0IiwidXBkYXRlWWVhclN0YXJ0IiwidXBkYXRlWWVhckVuZCJdLCJzb3VyY2VSb290IjoiIn0=