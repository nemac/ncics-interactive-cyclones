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
  height: 600,
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

        var where = _util__WEBPACK_IMPORTED_MODULE_0__.whereFactory(d.year, _this6.stormTypes[key]['where']);

        _this6.layer.setWhere(where);
      }).on('mouseout', function (d) {
        _this6.layer.setWhere('1=0');

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
___CSS_LOADER_EXPORT___.push([module.id, "\nbody {\n    font-family: Arial Narrow, serif;\n    margin-top: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0;\n    width: 1200px;\n    display: flex;\n}\n\n#map-container {\n    width: 50%;\n    padding-left: 1%;\n}\n\n#map {\n    height: 600px;\n    width: 95%;\n    border: 1px solid black;\n}\n\n#graph-container {\n    width: 50%;\n}\n\n.data-tooltips .tooltip {\n    width: 180px;\n    height: 60px;\n    font-size: 1.5em;\n}\n\n.tick text {\n    fill: #595959;\n}\n\n#y-axis-title {\n    font-size: 1.3em;\n}\n\n#plot .tick {\n    font-size: 1.5em;\n}\n\n#graph-container {\n    display: flex;\n}\n\n#graph-title {\n    font-weight: normal;\n    text-align: center;\n}\n\n#menu {\n    display: flex;\n    justify-content: right;\n}\n\n#menu div {\n    margin: 10px;\n}\n\n#show-storm-types {\n    width: 40%;\n    border: 1px solid black;\n}\n\n#show-storm-types label {\n    display: block;\n    margin: 5px; \n}\n\n#year-select {\n    width: 40%;\n    border: 1px solid black;\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":";AACA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,uBAAuB;AAC3B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,WAAW;AACf;;AAEA;IACI,UAAU;IACV,uBAAuB;AAC3B","sourcesContent":["\nbody {\n    font-family: Arial Narrow, serif;\n    margin-top: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0;\n    width: 1200px;\n    display: flex;\n}\n\n#map-container {\n    width: 50%;\n    padding-left: 1%;\n}\n\n#map {\n    height: 600px;\n    width: 95%;\n    border: 1px solid black;\n}\n\n#graph-container {\n    width: 50%;\n}\n\n.data-tooltips .tooltip {\n    width: 180px;\n    height: 60px;\n    font-size: 1.5em;\n}\n\n.tick text {\n    fill: #595959;\n}\n\n#y-axis-title {\n    font-size: 1.3em;\n}\n\n#plot .tick {\n    font-size: 1.5em;\n}\n\n#graph-container {\n    display: flex;\n}\n\n#graph-title {\n    font-weight: normal;\n    text-align: center;\n}\n\n#menu {\n    display: flex;\n    justify-content: right;\n}\n\n#menu div {\n    margin: 10px;\n}\n\n#show-storm-types {\n    width: 40%;\n    border: 1px solid black;\n}\n\n#show-storm-types label {\n    display: block;\n    margin: 5px; \n}\n\n#year-select {\n    width: 40%;\n    border: 1px solid black;\n}\n"],"sourceRoot":""}]);
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
// Where clause generator

var fitBounds = [{
  lat: 50.0,
  lng: -60
}, {
  lat: 5,
  lng: -100
}];
var map = L.map('map').fitBounds(fitBounds);
var basemap = L.esri.basemapLayer('Streets').addTo(map);
window.map = map; // dummy feature for logging
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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M0osMkVBQUo7QUFBa0Q7O0FBQUE7O0FBQ3BFLFFBQUksQ0FBQzJKLENBQUwsRUFBUTtBQUFFQSxNQUFBQSxDQUFDLEdBQUcsT0FBSjtBQUFhOztBQUN2QixXQUFPO0FBQUVJLE1BQUFBLEtBQUssRUFBRUosQ0FBVDtBQUFZSyxNQUFBQSxPQUFPLEVBQUUsQ0FBckI7QUFBd0JDLE1BQUFBLE1BQU0sRUFBRTtBQUFoQyxLQUFQO0FBQ0QsR0FYK0I7QUFZaENsRSxFQUFBQSxLQUFLLEVBQUU7QUFaeUIsQ0FBcEIsRUFhWHVELEtBYlcsQ0FhTDNILEdBYkssQ0FBZDtBQWVBeUcsS0FBSyxDQUFDbkMsS0FBTixHQUFjQSxLQUFkO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICB0aXRsZTogJ05vcnRoIEF0bGFudGljIFdlc3Qgb2YgNjDCsFc6IDE5NTAtMjAyMCcsXG4gIHdpZHRoOiA2MDAsXG4gIGhlaWdodDogNjAwLFxuICBtYXJnaW46IHsgbGVmdDogODAsIHJpZ2h0OiAxMCwgdG9wOiAxNSwgYm90dG9tOiA2MCB9LFxuICB5ZWFyU3RhcnQ6IDE5NTAsXG4gIHllYXJFbmQ6IDIwMjAsXG4gIHlBeGlzVGl0bGU6ICdUcm9waWNhbCBDeWNsb25lIERheXMgKHBlciB5ZWFyKScsXG4gIHN0b3JtVHlwZXM6IHtcbiAgICAnbmFtZWRfc3Rvcm0nOiB7XG4gICAgICAnd2hlcmUnOiAnVVNBX1dJTkQ8NjQgQU5EIFVTQV9XSU5EPj0zNCcsXG4gICAgICAnbGFiZWwnOiAnTmFtZWQgU3Rvcm1zJyxcbiAgICAgICd0b29sdGlwJzogJ05hbWVkIFN0b3JtIERheXMnLFxuICAgICAgJ2xlZ2VuZF9sYWJlbCc6ICdOYW1lZCBTdG9ybXMgKD49IDM0a3QpJyxcbiAgICAgICdmaWxsJzogJyNDNkRCRUYnLFxuICAgICAgJ2FjdGl2ZSc6IHRydWVcbiAgICB9LFxuICAgICdodXJyaWNhbmUnOiB7XG4gICAgICAnd2hlcmUnOiAnVVNBX1dJTkQ+PTY0IEFORCBVU0FfV0lORDw5NicsXG4gICAgICAnbGFiZWwnOiAnSHVycmljYW5lcycsXG4gICAgICAndG9vbHRpcCc6ICdIdXJyaWNhbmUgRGF5cycsXG4gICAgICAnbGVnZW5kX2xhYmVsJzogJ0h1cnJpY2FuZXMgKD49NjRrdCknLFxuICAgICAgJ2ZpbGwnOiAnIzZCQUVENicsXG4gICAgICAnYWN0aXZlJzogdHJ1ZVxuICAgIH0sXG4gICAgJ21ham9yX2h1cnJpY2FuZSc6IHtcbiAgICAgICd3aGVyZSc6ICdVU0FfV0lORD49OTYnLFxuICAgICAgJ2xhYmVsJzogJ01ham9yIEh1cnJpY2FuZXMnLFxuICAgICAgJ3Rvb2x0aXAnOiAnTWFqb3IgSHVycmljYW5lIERheXMnLFxuICAgICAgJ2xlZ2VuZF9sYWJlbCc6ICdNYWpvciBIdXJyaWNhbmVzICg+PSA5Nmt0KScsXG4gICAgICAnZmlsbCc6ICcjMDg1MTlDJyxcbiAgICAgICdhY3RpdmUnOiB0cnVlXG4gICAgfVxuICB9LFxuICAvLyBTdG9wIGxhYmVsbGluZyBldmVyeSB4LWF4aXMgdGljayBhZnRlciB0aGlzIG1hbnkgZWxlbWVudHNcbiAgVElDS19MQUJFTF9USFJFU0hPTEQ6IDMwLFxuICAvLyBOdW1iZXIgb2YgdGlja3MgYmV0d2VlbiBsYWJlbHMgb25jZSBUSUNLX0xBQkVMX1RIUkVTREhPTEQgaXMgbWV0IChpbmNsdXNpdmUpXG4gIFRJQ0tfTEFCRUxfU1RFUDogNSxcbiAgLy8gVGhlc2Ugc2hvdWxkIGJlIGNvbnNpc3RlbnQgd2l0aCB0aGUgQ1NTXG4gIFRPT0xUSVBfSEVJR0hUOiA2MCxcbiAgVE9PTFRJUF9XSURUSDogMTgwXG59XG5cbiIsIlxuZXhwb3J0IGNvbnN0IGRhdGEgPSB7XG4gIFwiMTk1MFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMTEuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAzOCxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDU5LjVcbiAgfSxcbiAgXCIxOTUxXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLjc1LFxuICAgIFwiaHVycmljYW5lXCI6IDIzLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDEuNzVcbiAgfSxcbiAgXCIxOTUyXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAyLjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTQuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyN1xuICB9LFxuICBcIjE5NTNcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTQuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0NFxuICB9LFxuICBcIjE5NTRcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDcsXG4gICAgXCJodXJyaWNhbmVcIjogMjAuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQ1XG4gIH0sXG4gIFwiMTk1NVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogOC41LFxuICAgIFwiaHVycmljYW5lXCI6IDMzLFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNTkuMjVcbiAgfSxcbiAgXCIxOTU2XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxLjc1LFxuICAgIFwiaHVycmljYW5lXCI6IDEwLjc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjkuNVxuICB9LFxuICBcIjE5NTdcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAuNSxcbiAgICBcImh1cnJpY2FuZVwiOiA1LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyMi43NVxuICB9LFxuICBcIjE5NThcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMTYuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0MS41XG4gIH0sXG4gIFwiMTk1OVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMy4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMi4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDM2LjI1XG4gIH0sXG4gIFwiMTk2MFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNi43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMixcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI3XG4gIH0sXG4gIFwiMTk2MVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMTMuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMjQuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0Ni4yNVxuICB9LFxuICBcIjE5NjJcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAsXG4gICAgXCJodXJyaWNhbmVcIjogMTEuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyNS43NVxuICB9LFxuICBcIjE5NjNcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMjIuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAzNS43NVxuICB9LFxuICBcIjE5NjRcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDguNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMzMsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA1My41XG4gIH0sXG4gIFwiMTk2NVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNi4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiA5Ljc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjFcbiAgfSxcbiAgXCIxOTY2XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA4Ljc1LFxuICAgIFwiaHVycmljYW5lXCI6IDI1Ljc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMzYuNVxuICB9LFxuICBcIjE5NjdcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDUuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMTguNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI4Ljc1XG4gIH0sXG4gIFwiMTk2OFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMCxcbiAgICBcImh1cnJpY2FuZVwiOiA3LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyMC41XG4gIH0sXG4gIFwiMTk2OVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNC43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAyNC41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDkuNzVcbiAgfSxcbiAgXCIxOTcwXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxLFxuICAgIFwiaHVycmljYW5lXCI6IDYsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyMC41XG4gIH0sXG4gIFwiMTk3MVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMSxcbiAgICBcImh1cnJpY2FuZVwiOiAxNy4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQ2LjI1XG4gIH0sXG4gIFwiMTk3MlwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMCxcbiAgICBcImh1cnJpY2FuZVwiOiAyLjc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTcuNVxuICB9LFxuICBcIjE5NzNcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAsXG4gICAgXCJodXJyaWNhbmVcIjogMy4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDIwLjVcbiAgfSxcbiAgXCIxOTc0XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTAuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDMxLjc1XG4gIH0sXG4gIFwiMTk3NVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMi4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMS41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjVcbiAgfSxcbiAgXCIxOTc2XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLjc1LFxuICAgIFwiaHVycmljYW5lXCI6IDMuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxNS4yNVxuICB9LFxuICBcIjE5NzdcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEsXG4gICAgXCJodXJyaWNhbmVcIjogNS4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDEzLjI1XG4gIH0sXG4gIFwiMTk3OFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMyxcbiAgICBcImh1cnJpY2FuZVwiOiA4LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjJcbiAgfSxcbiAgXCIxOTc5XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA0LjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDExLjc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjguMjVcbiAgfSxcbiAgXCIxOTgwXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA2LjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDkuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDIyLjI1XG4gIH0sXG4gIFwiMTk4MVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMi4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDM2XG4gIH0sXG4gIFwiMTk4MlwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMC43NSxcbiAgICBcImh1cnJpY2FuZVwiOiA0LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTFcbiAgfSxcbiAgXCIxOTgzXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDIuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxMS4yNVxuICB9LFxuICBcIjE5ODRcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMTEuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDMyXG4gIH0sXG4gIFwiMTk4NVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNCxcbiAgICBcImh1cnJpY2FuZVwiOiAxOC4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQxLjVcbiAgfSxcbiAgXCIxOTg2XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLFxuICAgIFwiaHVycmljYW5lXCI6IDIuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxMi43NVxuICB9LFxuICBcIjE5ODdcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAyLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTIuNVxuICB9LFxuICBcIjE5ODhcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDYuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMi4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI4LjVcbiAgfSxcbiAgXCIxOTg5XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTIuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI2XG4gIH0sXG4gIFwiMTk5MFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMCxcbiAgICBcImh1cnJpY2FuZVwiOiA5LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjUuNVxuICB9LFxuICBcIjE5OTFcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogNy4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDE0LjVcbiAgfSxcbiAgXCIxOTkyXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLjUsXG4gICAgXCJodXJyaWNhbmVcIjogNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDE3XG4gIH0sXG4gIFwiMTk5M1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMC43NSxcbiAgICBcImh1cnJpY2FuZVwiOiA3LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyMC4yNVxuICB9LFxuICBcIjE5OTRcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAsXG4gICAgXCJodXJyaWNhbmVcIjogMSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDE2XG4gIH0sXG4gIFwiMTk5NVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNy4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAzNC41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNjNcbiAgfSxcbiAgXCIxOTk2XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA5LjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDI5LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA1MFxuICB9LFxuICBcIjE5OTdcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogNS41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMThcbiAgfSxcbiAgXCIxOTk4XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA4LFxuICAgIFwiaHVycmljYW5lXCI6IDI3LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0Mi41XG4gIH0sXG4gIFwiMTk5OVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNy41LFxuICAgIFwiaHVycmljYW5lXCI6IDI2Ljc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDdcbiAgfSxcbiAgXCIyMDAwXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDEwLFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMzAuMjVcbiAgfSxcbiAgXCIyMDAxXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLjc1LFxuICAgIFwiaHVycmljYW5lXCI6IDE1Ljc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDJcbiAgfSxcbiAgXCIyMDAyXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLFxuICAgIFwiaHVycmljYW5lXCI6IDguNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0Mi4yNVxuICB9LFxuICBcIjIwMDNcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDcuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxNC41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDAuNVxuICB9LFxuICBcIjIwMDRcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDE0LFxuICAgIFwiaHVycmljYW5lXCI6IDI2Ljc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNTEuNVxuICB9LFxuICBcIjIwMDVcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDE3LjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDM3LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogODIuMjVcbiAgfSxcbiAgXCIyMDA2XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLFxuICAgIFwiaHVycmljYW5lXCI6IDMuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyMS4yNVxuICB9LFxuICBcIjIwMDdcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDYsXG4gICAgXCJodXJyaWNhbmVcIjogMTAuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI1LjI1XG4gIH0sXG4gIFwiMjAwOFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNS41LFxuICAgIFwiaHVycmljYW5lXCI6IDIzLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNjQuNzVcbiAgfSxcbiAgXCIyMDA5XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDUuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxMy4yNVxuICB9LFxuICBcIjIwMTBcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDQuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMjEsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA1MS43NVxuICB9LFxuICBcIjIwMTFcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDQuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxOS4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDYwXG4gIH0sXG4gIFwiMjAxMlwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMC4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMi4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQ4XG4gIH0sXG4gIFwiMjAxM1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMCxcbiAgICBcImh1cnJpY2FuZVwiOiAxLjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxNFxuICB9LFxuICBcIjIwMTRcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTIsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyNC4yNVxuICB9LFxuICBcIjIwMTVcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuNSxcbiAgICBcImh1cnJpY2FuZVwiOiA3LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTkuNzVcbiAgfSxcbiAgXCIyMDE2XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA4Ljc1LFxuICAgIFwiaHVycmljYW5lXCI6IDE2LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDIuNVxuICB9LFxuICBcIjIwMTdcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEyLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDMyLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNTkuNzVcbiAgfSxcbiAgXCIyMDE4XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA0LFxuICAgIFwiaHVycmljYW5lXCI6IDksXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyNC4yNVxuICB9LFxuICBcIjIwMTlcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDYuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTQuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAzOS4yNVxuICB9LFxuICBcIjIwMjBcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDUuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAyOCxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDgxXG4gIH1cbn1cblxuIiwiXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCdcblxuZXhwb3J0IGNsYXNzIEdyYXBoIHtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcsIGRhdGEpIHtcbiAgICB0aGlzLk1JTl9ZRUFSID0gdXRpbC5nZXRNaW5ZZWFyKGRhdGEpXG4gICAgdGhpcy5NQVhfWUVBUiA9IHV0aWwuZ2V0TWF4WWVhcihkYXRhKVxuICAgIHRoaXMuVElDS19MQUJFTF9USFJFU0hPTEQgPSBjb25maWcuVElDS19MQUJFTF9USFJFU0hPTERcbiAgICB0aGlzLlRJQ0tfTEFCRUxfU1RFUCA9IGNvbmZpZy5USUNLX0xBQkVMX1NURVBcbiAgICB0aGlzLlRPT0xUSVBfV0lEVEggPSBjb25maWcuVE9PTFRJUF9XSURUSFxuICAgIHRoaXMuVE9PTFRJUF9IRUlHSFQgPSBjb25maWcuVE9PTFRJUF9IRUlHSFRcblxuICAgIHRoaXMuZGF0YSA9IGRhdGFcbiAgICB0aGlzLnRpdGxlID0gY29uZmlnLnRpdGxlXG4gICAgdGhpcy55QXhpc1RpdGxlID0gY29uZmlnLnlBeGlzVGl0bGVcbiAgICB0aGlzLnllYXJzID0gT2JqZWN0LmtleXMoZGF0YSkubWFwKGQgPT4gcGFyc2VJbnQoZCkpXG4gICAgdGhpcy55ZWFyU3RhcnQgPSBjb25maWcueWVhclN0YXJ0XG4gICAgdGhpcy55ZWFyRW5kID0gY29uZmlnLnllYXJFbmRcbiAgICB0aGlzLnN0b3JtVHlwZXMgPSBjb25maWcuc3Rvcm1UeXBlc1xuICAgIHRoaXMubWFyZ2luID0gY29uZmlnLm1hcmdpblxuICAgIHRoaXMud2lkdGggPSBjb25maWcud2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IGNvbmZpZy5oZWlnaHRcbiAgICB0aGlzLnBsb3QgPSB0aGlzLmluaXRQbG90KClcbiAgICB0aGlzLmRhdGFzZXRzID0gdGhpcy5pbml0RGF0YXNldHMoT2JqZWN0LmtleXMoY29uZmlnLnN0b3JtVHlwZXMpKVxuICAgIHRoaXMueCA9IHRoaXMuaW5pdFhTY2FsZSgpXG4gICAgdGhpcy55ID0gdGhpcy5pbml0WVNjYWxlKClcblxuICAgIC8vIEluc2VydCBTVkcgZWxlbWVudHNcblxuICAgIC8vIFNWRyBlbGVtZW50cyBhcmUgcGFpbnRlZCBpbiB0aGUgb3JkZXIgdGhleSBhcmUgaW5zZXJ0ZWQsXG4gICAgLy8gc28gd2UgYWRkIHRoZSBheGVzIGFuZCB0b29sdGlwcyBsYXN0IHNvIHRoZXkgc2hvdyB1cCBvdmVyIHRoZSBiYXJzXG4gICAgLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9yZW5kZXIuaHRtbCNSZW5kZXJpbmdPcmRlclxuXG4gICAgLy8gSW5pdGlhbGl6ZSBkYXRhIGJhcnMgd2l0aCB6ZXJvIGhlaWdodFxuICAgIE9iamVjdC5rZXlzKGNvbmZpZy5zdG9ybVR5cGVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICB0aGlzLmluaXRCYXJzKGtleSlcbiAgICB9KVxuXG4gICAgLy8gRHJhdyB0aGUgYXhlc1xuICAgIHRoaXMueEF4aXMgPSB0aGlzLmFwcGVuZFhBeGlzKClcbiAgICB0aGlzLmluaXRYQXhpcygpXG4gICAgdGhpcy5zZXRZQXhpc1RpdGxlKClcbiAgICB0aGlzLnlBeGlzID0gdGhpcy5pbml0WUF4aXMoKVxuXG4gICAgLy8gRHJhdyB0aGUgdG9vbHRpcHNcbiAgICBPYmplY3Qua2V5cyhjb25maWcuc3Rvcm1UeXBlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgdGhpcy5pbml0VG9vbHRpcHMoa2V5KVxuICAgIH0pXG5cbiAgICAvLyBTaG93IHRoZSBiYXJzIGZvciBpbml0aWFsbHkgYWN0aXZhdGVkIHN0b3JtIHR5cGVzXG4gICAgY29uc3QgaW5pdFN0b3JtVHlwZXMgPSBPYmplY3Qua2V5cyh0aGlzLnN0b3JtVHlwZXMpLmZpbHRlcihrZXkgPT4gdGhpcy5zdG9ybVR5cGVzW2tleV0uYWN0aXZlKVxuICAgIGluaXRTdG9ybVR5cGVzLmZvckVhY2goa2V5ID0+IHRoaXMuc2hvd0JhcnMoa2V5KSlcblxuICB9XG5cbiAgc2V0WUF4aXNUaXRsZSgpIHtcbiAgICB0aGlzLnBsb3QuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdpZCcsICd5LWF4aXMtdGl0bGUnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGByb3RhdGUoLTkwKSB0cmFuc2xhdGUoLSR7dGhpcy5oZWlnaHQvNX0sIDMwKWApXG4gICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC5odG1sKHRoaXMueUF4aXNUaXRsZSlcbiAgfVxuXG4gIGluaXRQbG90KCkge1xuICAgIHJldHVybiBkMy5zZWxlY3QoJyNncmFwaCcpXG4gICAgICAuYXR0cignd2lkdGgnLCB0aGlzLndpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0KVxuICB9XG5cbiAgZ2V0WERvbWFpbigpIHtcbiAgICByZXR1cm4gWy4uLkFycmF5KHRoaXMueWVhckVuZC10aGlzLnllYXJTdGFydCsxKS5rZXlzKCldLm1hcChkID0+IGQrdGhpcy55ZWFyU3RhcnQpXG4gIH1cblxuICBpbml0WFNjYWxlKCkge1xuICAgIHJldHVybiBkMy5zY2FsZUJhbmQoKVxuICAgICAgLmRvbWFpbih0aGlzLmdldFhEb21haW4oKSlcbiAgICAgIC5yYW5nZShbdGhpcy5tYXJnaW4ubGVmdCwgdGhpcy53aWR0aCAtIHRoaXMubWFyZ2luLnJpZ2h0XSlcbiAgfVxuXG4gIGluaXRZU2NhbGUoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIHRoaXMuY2FsY01heCgpXSlcbiAgICAgIC5yYW5nZShbdGhpcy5oZWlnaHQgLSB0aGlzLm1hcmdpbi5ib3R0b20sIHRoaXMubWFyZ2luLnRvcF0pXG4gIH1cblxuICBhcHBlbmRYQXhpcygpIHtcbiAgICByZXR1cm4gdGhpcy5wbG90LmFwcGVuZCgnZycpICBcbiAgICAgIC5hdHRyKCdpZCcsICd4LWF4aXMnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwgJHt0aGlzLmhlaWdodCAtIHRoaXMubWFyZ2luLmJvdHRvbX0pYClcbiAgfVxuXG4gIHJlbW92ZVhBeGlzKCkge1xuICAgIGQzLnNlbGVjdCgnI3gtYXhpcycpLnJlbW92ZSgpXG4gIH1cblxuICBpbml0WEF4aXMoKSB7XG4gICAgdGhpcy54QXhpcy5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy54KS50aWNrU2l6ZU91dGVyKDApKVxuICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgICAgLmF0dHIoJ2R4JywgJy0uNWVtJylcbiAgICAgICAgLmF0dHIoJ2R5JywgJy4xNWVtJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICdyb3RhdGUoLTY1KScpXG4gICAgICAgIC5odG1sKChkLCBpLCBub2RlcykgPT4ge1xuICAgICAgICAgIGlmIChub2Rlcy5sZW5ndGggPiB0aGlzLlRJQ0tfTEFCRUxfVEhSRVNIT0xEKSB7XG4gICAgICAgICAgICBpZiAoZCAlIHRoaXMuVElDS19MQUJFTF9TVEVQID09IDApIHJldHVybiBkXG4gICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGRcbiAgICAgICAgfSlcbiAgfVxuXG4gIGluaXRZQXhpcygpIHtcbiAgICByZXR1cm4gdGhpcy5wbG90LmFwcGVuZCgnZycpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3RoaXMubWFyZ2luLmxlZnR9LCAwKWApXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh0aGlzLnkpKVxuICB9XG5cblxuICBjYWxjQWN0aXZlWWVhcnMoKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZGF0YSlcbiAgICBjb25zdCB5ZWFycyA9IFtdXG4gICAgZm9yIChsZXQgZCBvZiBrZXlzKSB7XG4gICAgICBjb25zdCB5ciA9IHBhcnNlSW50KGQpXG4gICAgICBpZiAoeXIgPCB0aGlzLnllYXJTdGFydCB8fCB5ciA+IHRoaXMueWVhckVuZCkgY29udGludWVcbiAgICAgIHllYXJzLnB1c2goeXIpXG4gICAgfVxuICAgIHJldHVybiB5ZWFyc1xuICB9XG5cbiAgaW5pdERhdGFzZXRzKCkge1xuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLnN0b3JtVHlwZXMpKSB7XG4gICAgICBjb25zdCBkYXRhc2V0ID0gW11cbiAgICAgIGZvciAobGV0IHllYXIgb2YgdGhpcy55ZWFycykge1xuICAgICAgICBkYXRhc2V0LnB1c2goeyAneWVhcic6IHllYXIsICd2YWx1ZSc6IHRoaXMuZGF0YVtTdHJpbmcoeWVhcildW2tleV0gfSlcbiAgICAgIH1cbiAgICAgIHRoaXMuc3Rvcm1UeXBlc1trZXldLmRhdGFzZXQgPSBkYXRhc2V0XG4gICAgfVxuICB9XG5cbiAgY2FsY01heCgpIHtcbiAgICBsZXQgbWF4ID0gMFxuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLnN0b3JtVHlwZXMpKSB7XG4gICAgICBmb3IgKGxldCBkIG9mIHRoaXMuc3Rvcm1UeXBlc1trZXldLmRhdGFzZXQpIHtcbiAgICAgICAgbWF4ID0gZC52YWx1ZSA+IG1heCA/IGQudmFsdWUgOiBtYXhcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUm91bmQgdXAgYnkgMTBcbiAgICByZXR1cm4gcGFyc2VJbnQobWF4IC8gMTApICogMTAgKyAxMFxuICB9XG5cbiAgZ2V0QWN0aXZlRGF0YShrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9ybVR5cGVzW2tleV0uZGF0YXNldC5maWx0ZXIoZCA9PiB7XG4gICAgICByZXR1cm4gZC55ZWFyID49IHRoaXMueWVhclN0YXJ0ICYmIGQueWVhciA8PSB0aGlzLnllYXJFbmRcbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlWWVhclN0YXJ0KG5ld1llYXJTdGFydCkge1xuICAgIHRoaXMueWVhclN0YXJ0ID0gbmV3WWVhclN0YXJ0XG4gICAgdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgdXBkYXRlWWVhckVuZChuZXdZZWFyRW5kKSB7XG4gICAgdGhpcy55ZWFyRW5kID0gbmV3WWVhckVuZFxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnguZG9tYWluKHRoaXMuZ2V0WERvbWFpbigpKVxuICAgIHRoaXMucmVtb3ZlVG9vbHRpcHMoKVxuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLnN0b3JtVHlwZXMpKSB7XG4gICAgICB0aGlzLnJlbW92ZUJhcnMoa2V5KVxuICAgICAgdGhpcy5pbml0QmFycyhrZXkpXG4gICAgfVxuICAgIGZvciAobGV0IGtleSBvZiB0aGlzLmdldEFjdGl2ZVN0b3JtVHlwZXMoKSkge1xuICAgICAgdGhpcy5zaG93QmFycyhrZXkpXG4gICAgfVxuICAgIHRoaXMucmVtb3ZlWEF4aXMoKVxuICAgIHRoaXMueEF4aXMgPSB0aGlzLmFwcGVuZFhBeGlzKClcbiAgICB0aGlzLmluaXRYQXhpcygpXG4gICAgdGhpcy55QXhpcyA9IHRoaXMuaW5pdFlBeGlzKClcbiAgICAvLyBLZWVwIHNlcGFyYXRlIGxvb3AgZm9yIGNvcnJlY3QgZHJhd2luZyBvcmRlclxuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLnN0b3JtVHlwZXMpKSB7XG4gICAgICB0aGlzLmluaXRUb29sdGlwcyhrZXkpXG4gICAgfVxuICB9XG5cbiAgZ2V0QWN0aXZlU3Rvcm1UeXBlcygpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5zdG9ybVR5cGVzKS5maWx0ZXIoa2V5ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnN0b3JtVHlwZXNba2V5XS5hY3RpdmVcbiAgICB9KVxuICB9XG5cbiAgaW5pdEJhcnMoa2V5KSB7XG4gICAgY29uc3QgZGF0YXNldCA9IHRoaXMuZ2V0QWN0aXZlRGF0YShrZXkpXG4gICAgY29uc3QgYmFycyA9IHRoaXMucGxvdC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2RhdGEtYmFycycpXG4gICAgICAuYXR0cignaWQnLCBgZGF0YS1iYXJzLS0ke2tleX1gKVxuICAgICAgLnNlbGVjdEFsbCgncmVjdCcpXG4gICAgICAgIC5kYXRhKGRhdGFzZXQpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2JhcicpXG4gICAgICAgICAgLmF0dHIoJ2RhdGEteWVhcicsIGQgPT4gZC55ZWFyKVxuICAgICAgICAgIC5hdHRyKCdkYXRhLXZhbHVlJywgZCA9PiBkLnZhbHVlKVxuXG4gICAgYmFycy5hdHRyKCdoZWlnaHQnLCAwKVxuICAgICAgICAuYXR0cignd2lkdGgnLCB0aGlzLnguYmFuZHdpZHRoKCkpXG4gICAgICAgIC5hdHRyKCd4JywgZCA9PiB0aGlzLngoZC55ZWFyKSlcbiAgICAgICAgLmF0dHIoJ3knLCB0aGlzLnkoMCkpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgdGhpcy5zdG9ybVR5cGVzW2tleV0uZmlsbClcbiAgICAgICAgLm9uKCdtb3VzZWVudGVyJywgZCA9PiB7XG4gICAgICAgICAgdGhpcy50b2dnbGVUb29sdGlwKGtleSwgZC55ZWFyLCB0cnVlKVxuICAgICAgICAgIGNvbnN0IHdoZXJlID0gdXRpbC53aGVyZUZhY3RvcnkoZC55ZWFyLCB0aGlzLnN0b3JtVHlwZXNba2V5XVsnd2hlcmUnXSlcbiAgICAgICAgICB0aGlzLmxheWVyLnNldFdoZXJlKHdoZXJlKVxuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlb3V0JywgZCA9PiB7XG4gICAgICAgICAgdGhpcy5sYXllci5zZXRXaGVyZSgnMT0wJylcbiAgICAgICAgICB0aGlzLnRvZ2dsZVRvb2x0aXAoa2V5LCBkLnllYXIsIGZhbHNlKVxuICAgICAgICB9KVxuXG4gICAgdGhpcy5zdG9ybVR5cGVzW2tleV0uYmFycyA9IGJhcnNcbiAgfVxuXG4gIGNhbGNUb29sdGlwWChkKSB7XG4gICAgY29uc3Qgbm9ybWFsID0gdGhpcy54KGQueWVhcikgKyB0aGlzLnguYmFuZHdpZHRoKClcbiAgICBpZiAobm9ybWFsICsgdGhpcy5UT09MVElQX1dJRFRIIDwgdGhpcy54LnJhbmdlKClbMV0pIHJldHVybiBub3JtYWxcbiAgICByZXR1cm4gbm9ybWFsIC0gdGhpcy5UT09MVElQX1dJRFRIIC0gdGhpcy54LmJhbmR3aWR0aCgpXG4gIH1cblxuICBjYWxjVG9vbHRpcFkoZCkge1xuICAgIC8vIFRPRE9cbiAgfVxuXG4gIHJlbW92ZVRvb2x0aXBzKCkge1xuICAgIGQzLnNlbGVjdEFsbCgnLmRhdGEtdG9vbHRpcHMnKS5yZW1vdmUoKVxuICB9XG5cbiAgdG9nZ2xlVG9vbHRpcChrZXksIHllYXIsIHNob3dUb29sdGlwKSB7XG4gICAgZDMuc2VsZWN0KGAjZGF0YS10b29sdGlwLS0ke2tleX0tLSR7eWVhcn0tLXJlY3RgKVxuICAgICAgLmF0dHIoJ3N0eWxlJywgc2hvd1Rvb2x0aXAgPyAnJyA6ICdkaXNwbGF5OiBub25lJylcbiAgICAgIC5yYWlzZSgpXG4gICAgZDMuc2VsZWN0KGAjZGF0YS10b29sdGlwLS0ke2tleX0tLSR7eWVhcn0tLXRleHRgKVxuICAgICAgLmF0dHIoJ3N0eWxlJywgc2hvd1Rvb2x0aXAgPyAnJyA6ICdkaXNwbGF5OiBub25lJylcbiAgICAgIC5yYWlzZSgpXG4gIH1cblxuICBpbml0VG9vbHRpcHMoa2V5KSB7XG4gICAgY29uc3QgZGF0YXNldCA9IHRoaXMuZ2V0QWN0aXZlRGF0YShrZXkpXG4gICAgY29uc3QgdG9vbHRpcHMgPSB0aGlzLnBsb3QuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdkYXRhLXRvb2x0aXBzJylcbiAgICAgIC5hdHRyKCdpZCcsIGBkYXRhLXRvb2x0aXBzLS0ke2tleX1gKVxuICAgICAgLnNlbGVjdEFsbCgncmVjdCcpXG4gICAgICAgIC5kYXRhKGRhdGFzZXQpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgICAuYXR0cignaWQnLCBkID0+IGBkYXRhLXRvb2x0aXAtLSR7a2V5fS0tJHtkLnllYXJ9LS1yZWN0YClcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICd0b29sdGlwJylcbiAgICAgICAgICAgIC5hdHRyKCd4JywgZCA9PiB0aGlzLmNhbGNUb29sdGlwWChkKSlcbiAgICAgICAgICAgIC5hdHRyKCd5JywgZCA9PiB0aGlzLnkoZC52YWx1ZSkgLSB0aGlzLlRPT0xUSVBfSEVJR0hUKVxuICAgICAgICAgICAgLmF0dHIoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7JylcbiAgICAgICAgICAgIC5hdHRyKCdkYXRhLXllYXInLCBkID0+IGQueWVhcilcbiAgICAgICAgICAgIC5hdHRyKCdkYXRhLXZhbHVlJywgZCA9PiBkLnZhbHVlKVxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZScsIHRoaXMuc3Rvcm1UeXBlc1trZXldLmZpbGwpXG4gICAgICAgICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgJzEuNScpXG5cbiAgICBjb25zdCB0b29sdGlwX3RleHQgPSB0aGlzLnBsb3Quc2VsZWN0KGAjZGF0YS10b29sdGlwcy0tJHtrZXl9YClcbiAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuZGF0YShkYXRhc2V0KVxuICAgICAgICAgIC5lbnRlcih0b29sdGlwcylcbiAgICAgICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgICAuYXR0cignaWQnLCBkID0+IGBkYXRhLXRvb2x0aXAtLSR7a2V5fS0tJHtkLnllYXJ9LS10ZXh0YClcbiAgICAgICAgICAgICAgLmF0dHIoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmUnKVxuICAgICAgICAgICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnc3RhcnQnKVxuICAgICAgICAgICAgICAuYXR0cigneCcsIGQgPT4gdGhpcy5jYWxjVG9vbHRpcFgoZCkpXG4gICAgICAgICAgICAgIC5hdHRyKCd5JywgZCA9PiB0aGlzLnkoZC52YWx1ZSkpXG5cbiAgICBjb25zdCB0ZXh0X21hcmdpbiA9IHsgbGVmdDogOCwgdG9wOiA4IH1cblxuICAgIHRvb2x0aXBfdGV4dC5hcHBlbmQoJ3RzcGFuJylcbiAgICAgIC5hdHRyKCd4JywgZCA9PiB0aGlzLmNhbGNUb29sdGlwWChkKSArIHRleHRfbWFyZ2luLmxlZnQpXG4gICAgICAuYXR0cigneScsIGQgPT4gdGhpcy55KGQudmFsdWUpIC0gdGhpcy5UT09MVElQX0hFSUdIVC8yIC0gdGV4dF9tYXJnaW4udG9wKVxuICAgICAgLmh0bWwoZCA9PiBgWWVhcjogJHtkLnllYXJ9YClcblxuICAgIHRvb2x0aXBfdGV4dC5hcHBlbmQoJ3RzcGFuJylcbiAgICAgIC5hdHRyKCd4JywgZCA9PiB0aGlzLmNhbGNUb29sdGlwWChkKSArIHRleHRfbWFyZ2luLmxlZnQpXG4gICAgICAuYXR0cigneScsIGQgPT4gdGhpcy55KGQudmFsdWUpIC0gdGV4dF9tYXJnaW4udG9wKVxuICAgICAgLmh0bWwoZCA9PiBgJHt0aGlzLnN0b3JtVHlwZXNba2V5XS50b29sdGlwfTogJHtkLnZhbHVlfWApXG5cbiAgICB0aGlzLnN0b3JtVHlwZXNba2V5XS50b29sdGlwcyA9IHRvb2x0aXBzXG4gIH1cblxuICBzaG93QmFycyhrZXkpIHtcbiAgICB0aGlzLnN0b3JtVHlwZXNba2V5XS5iYXJzLnRyYW5zaXRpb24oMTAwMClcbiAgICAgIC5hdHRyKCd5JywgZCA9PiB0aGlzLnkoZC52YWx1ZSkpXG4gICAgICAuYXR0cignaGVpZ2h0JywgZCA9PiB0aGlzLnkoMCkgLSB0aGlzLnkoZC52YWx1ZSkpXG4gIH1cblxuICBoaWRlQmFycyhrZXkpIHtcbiAgICB0aGlzLnN0b3JtVHlwZXNba2V5XS5iYXJzLnRyYW5zaXRpb24oMTAwMClcbiAgICAgIC5hdHRyKCd5JywgZCA9PiB0aGlzLnkoMCkpXG4gICAgICAuYXR0cignaGVpZ2h0JywgMClcbiAgfVxuXG4gIHJlbW92ZUJhcnMoa2V5KSB7XG4gICAgdGhpcy5oaWRlQmFycyhrZXkpXG4gICAgdGhpcy5zdG9ybVR5cGVzW2tleV0uYmFycy5yZW1vdmUoKVxuICAgIHRoaXMuc3Rvcm1UeXBlc1trZXldLmJhcnMgPSBbXVxuICB9XG5cbn1cblxuIiwiaW1wb3J0ICogYXMgY29uZmlnIGZyb20gJy4vY29uZmlnJ1xuXG5leHBvcnQgY29uc3Qgd2hlcmVGYWN0b3J5ID0gKHllYXIsIHN0b3JtV2hlcmUpID0+IGBZRUFSPSR7eWVhcn0gQU5EICR7c3Rvcm1XaGVyZX1gXG5cbmV4cG9ydCBjb25zdCBnZXRNYXhZZWFyID0gKGRhdGEpID0+IHtcbiAgbGV0IG1heCA9IDBcbiAgZm9yIChsZXQgayBvZiBPYmplY3Qua2V5cyhkYXRhKSkge1xuICAgIGsgPSBwYXJzZUludChrKVxuICAgIGlmIChrID4gbWF4KSB7IG1heCA9IGsgfVxuICB9XG4gIHJldHVybiBtYXhcbn1cblxuZXhwb3J0IGNvbnN0IGdldE1pblllYXIgPSAoZGF0YSkgPT4ge1xuICBsZXQgbWluID0gMTAwMDBcbiAgZm9yIChsZXQgayBvZiBPYmplY3Qua2V5cyhkYXRhKSkge1xuICAgIGsgPSBwYXJzZUludChrKVxuICAgIGlmIChrIDwgbWluKSB7IG1pbiA9IGsgfVxuICB9XG4gIHJldHVybiBtaW5cbn1cblxuZXhwb3J0IGNvbnN0IG9wdGlvbkZhY3RvcnkgPSBmdW5jdGlvbiAodmFsdWUsIGlubmVySFRNTCkge1xuICAgIHZhciBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHQudmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuICAgIG9wdC5pbm5lckhUTUwgPSBTdHJpbmcoaW5uZXJIVE1MKTtcbiAgICByZXR1cm4gb3B0O1xufVxuXG5cbmNvbnN0IHJlbW92ZUNoaWxkTm9kZXMgPSAocGFyZW50KSA9PiB7XG4gIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZClcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2V0dXBZZWFyU2VsZWN0ID0gKGxhYmVsLCB5ZWFyU2VsZWN0ZWQsIG1pblllYXIsIG1heFllYXIpID0+IHtcbiAgY29uc3QgeWVhclNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB5ZWFyLSR7bGFiZWx9LXNlbGVjdGApXG4gIHJlbW92ZUNoaWxkTm9kZXMoeWVhclNlbGVjdClcbiAgbGV0IHNlbGVjdGVkSW5kZXg7XG4gIGxldCBpbmRleCA9IDA7XG4gIGZvciAodmFyIHkgPSBtaW5ZZWFyOyB5PD1tYXhZZWFyOyB5Kyspe1xuICAgICAgaWYgKHBhcnNlSW50KHllYXJTZWxlY3RlZCkgPT0geSkgeyBzZWxlY3RlZEluZGV4ID0gaW5kZXggfVxuICAgICAgeWVhclNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25GYWN0b3J5KFN0cmluZyh5KSwgU3RyaW5nKHkpKSlcbiAgICAgIGluZGV4Kys7XG4gIH1cbiAgeWVhclNlbGVjdC5vcHRpb25zLnNlbGVjdGVkSW5kZXg9c2VsZWN0ZWRJbmRleFxuICByZXR1cm4geWVhclNlbGVjdFxufVxuXG5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCBOYXJyb3csIHNlcmlmO1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMTIwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jbWFwLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHBhZGRpbmctbGVmdDogMSU7XFxufVxcblxcbiNtYXAge1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI2dyYXBoLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5kYXRhLXRvb2x0aXBzIC50b29sdGlwIHtcXG4gICAgd2lkdGg6IDE4MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbi50aWNrIHRleHQge1xcbiAgICBmaWxsOiAjNTk1OTU5O1xcbn1cXG5cXG4jeS1heGlzLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuXFxuI3Bsb3QgLnRpY2sge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4jZ3JhcGgtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2dyYXBoLXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jbWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxufVxcblxcbiNtZW51IGRpdiB7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuI3Nob3ctc3Rvcm0tdHlwZXMge1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3Nob3ctc3Rvcm0tdHlwZXMgbGFiZWwge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiA1cHg7IFxcbn1cXG5cXG4jeWVhci1zZWxlY3Qge1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsIE5hcnJvdywgc2VyaWY7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAxMjAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNtYXAtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcXG59XFxuXFxuI21hcCB7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jZ3JhcGgtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmRhdGEtdG9vbHRpcHMgLnRvb2x0aXAge1xcbiAgICB3aWR0aDogMTgwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLnRpY2sgdGV4dCB7XFxuICAgIGZpbGw6ICM1OTU5NTk7XFxufVxcblxcbiN5LWF4aXMtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbn1cXG5cXG4jcGxvdCAudGljayB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbiNncmFwaC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jZ3JhcGgtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNtZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcXG59XFxuXFxuI21lbnUgZGl2IHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4jc2hvdy1zdG9ybS10eXBlcyB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jc2hvdy1zdG9ybS10eXBlcyBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDVweDsgXFxufVxcblxcbiN5ZWFyLXNlbGVjdCB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuaW1wb3J0ICcuL2luZGV4LmNzcydcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJ1xuaW1wb3J0IHsgZGF0YSB9ICBmcm9tICcuL2RhdGEnXG5pbXBvcnQgeyBHcmFwaCB9IGZyb20gJy4vZ3JhcGgnXG5cbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJ1xuXG5jb25zdCBtaW5ZZWFyID0gdXRpbC5nZXRNaW5ZZWFyKGRhdGEpXG5jb25zdCBtYXhZZWFyID0gdXRpbC5nZXRNYXhZZWFyKGRhdGEpXG5cbmNvbnN0IGdyYXBoID0gbmV3IEdyYXBoKGNvbmZpZywgZGF0YSlcblxuY29uc3QgY2hlY2tib3hJZHMgPSB7XG4gICduYW1lZF9zdG9ybSc6ICdzaG93LW5hbWVkLXN0b3JtcycsXG4gICdodXJyaWNhbmUnOiAnc2hvdy1taW5vci1odXJyaWNhbmVzJyxcbiAgJ21ham9yX2h1cnJpY2FuZSc6ICdzaG93LW1ham9yLWh1cnJpY2FuZXMnXG59XG5cbmZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhjaGVja2JveElkcykpIHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjaGVja2JveElkc1trZXldKVxuICBlbC5jaGVja2VkID0gY29uZmlnLnN0b3JtVHlwZXNba2V5XS5hY3RpdmVcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgIGdyYXBoLnN0b3JtVHlwZXNba2V5XS5hY3RpdmUgPSB0cnVlXG4gICAgICBncmFwaC5zaG93QmFycyhrZXkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGdyYXBoLnN0b3JtVHlwZXNba2V5XS5hY3RpdmUgPSBmYWxzZVxuICAgICAgZ3JhcGguaGlkZUJhcnMoa2V5KVxuICAgIH1cbiAgfSlcbn1cblxubGV0IHNlbGVjdGVkU3RhcnRZZWFyID0gZ3JhcGgueWVhclN0YXJ0XG5sZXQgc2VsZWN0ZWRFbmRZZWFyID0gZ3JhcGgueWVhckVuZFxuXG5jb25zdCB5ZWFyU3RhcnRTZWxlY3QgPSB1dGlsLnNldHVwWWVhclNlbGVjdCgnc3RhcnQnLCBzZWxlY3RlZFN0YXJ0WWVhciwgbWluWWVhciwgbWF4WWVhcilcbmNvbnN0IHllYXJFbmRTZWxlY3QgPSB1dGlsLnNldHVwWWVhclNlbGVjdCgnZW5kJywgc2VsZWN0ZWRFbmRZZWFyLCBtaW5ZZWFyLCBtYXhZZWFyKVxuXG55ZWFyU3RhcnRTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICBzZWxlY3RlZFN0YXJ0WWVhciA9IHBhcnNlSW50KHllYXJTdGFydFNlbGVjdC52YWx1ZSlcbiAgZ3JhcGgudXBkYXRlWWVhclN0YXJ0KHNlbGVjdGVkU3RhcnRZZWFyKVxuICB1dGlsLnNldHVwWWVhclNlbGVjdCgnZW5kJywgc2VsZWN0ZWRFbmRZZWFyLCBzZWxlY3RlZFN0YXJ0WWVhciwgZ3JhcGguTUFYX1lFQVIpXG59KVxuXG55ZWFyRW5kU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgc2VsZWN0ZWRFbmRZZWFyID0gcGFyc2VJbnQoeWVhckVuZFNlbGVjdC52YWx1ZSlcbiAgZ3JhcGgudXBkYXRlWWVhckVuZChzZWxlY3RlZEVuZFllYXIpXG4gIHV0aWwuc2V0dXBZZWFyU2VsZWN0KCdzdGFydCcsIHNlbGVjdGVkU3RhcnRZZWFyLCBncmFwaC5NSU5fWUVBUiwgc2VsZWN0ZWRFbmRZZWFyKVxufSlcblxuLy8gTWFwXG4vLyBXaGVyZSBjbGF1c2UgZ2VuZXJhdG9yXG5cbmNvbnN0IGZpdEJvdW5kcyA9IFtcbiAge2xhdDogNTAuMCwgbG5nOiAtNjB9LFxuICB7bGF0OiA1LCBsbmc6IC0xMDB9XG5dXG5jb25zdCBtYXAgPSBMLm1hcCgnbWFwJykuZml0Qm91bmRzKGZpdEJvdW5kcylcblxuY29uc3QgYmFzZW1hcCA9IEwuZXNyaS5iYXNlbWFwTGF5ZXIoJ1N0cmVldHMnKS5hZGRUbyhtYXApO1xuXG53aW5kb3cubWFwID0gbWFwXG5cbi8vIGR1bW15IGZlYXR1cmUgZm9yIGxvZ2dpbmdcbi8vbGV0IGY7XG5cbmNvbnN0IGxheWVyID0gTC5lc3JpLmZlYXR1cmVMYXllcih7XG4gIHVybDogJ2h0dHBzOi8vc2VydmljZXMyLmFyY2dpcy5jb20vRmlhUEE0Z2EwaVFLZHV2My9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9JQlRyQUNTX0FMTF9saXN0X3YwNHIwMF9saW5lc18xL0ZlYXR1cmVTZXJ2ZXIvMCcsXG4gIHN0eWxlOiBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgIC8vaWYgKCFmKSB7IGYgPSBmZWF0dXJlOyAgY29uc29sZS5sb2coZmVhdHVyZSkgfVxuICAgIGxldCBjO1xuICAgIGxldCBwcm9wID0gZmVhdHVyZS5wcm9wZXJ0aWVzLlVTQV9XSU5EXG4gICAgaWYgKHByb3AgPCA2NCAmJiBwcm9wID49IDM0KSB7IGMgPSBjb25maWcuc3Rvcm1UeXBlc1snbmFtZWRfc3Rvcm0nXVsnZmlsbCddIH1cbiAgICBpZiAocHJvcCA+PSA2NCAmJiBwcm9wIDwgOTYpIHsgYyA9IGNvbmZpZy5zdG9ybVR5cGVzWydodXJyaWNhbmUnXVsnZmlsbCddIH1cbiAgICBpZiAocHJvcCA+PSA5NikgeyBjID0gY29uZmlnLnN0b3JtVHlwZXNbJ21ham9yX2h1cnJpY2FuZSddWydmaWxsJ10gfTtcbiAgICBpZiAoIWMpIHsgYyA9ICd3aGl0ZScgfVxuICAgIHJldHVybiB7IGNvbG9yOiBjLCBvcGFjaXR5OiAxLCB3ZWlnaHQ6IDUgfVxuICB9LFxuICB3aGVyZTogJzE9MCdcbn0pLmFkZFRvKG1hcCk7XG5cbmdyYXBoLmxheWVyID0gbGF5ZXJcblxuLypcbmNvbnN0IGZlYXR1cmVfaW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWF0dXJlLWluZm8nKVxuXG5sYXllci5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGZlYXR1cmVfaW5mby5pbm5lckhUTUwgPSByZW5kZXJfZmVhdHVyZShldmVudC5sYXllci5mZWF0dXJlKVxufSlcblxubGF5ZXIub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGZlYXR1cmVfaW5mby5pbm5lckhUTUwgPSAnSG92ZXIgb3ZlciBhIHN0b3JtIHRyYWNrIGZvciBtb3JlIGRhdGEnXG59KVxuXG5jb25zdCByZW5kZXJfZmVhdHVyZSA9IGYgPT4ge1xuICBjb25zdCBwcm9wcyA9IGYucHJvcGVydGllc1xuICBjb25zdCBkaXNwbGF5X3Byb3BzID0gWyAnTEFUJywgJ0xPTicsICdVU0FfV0lORCcsICd5ZWFyJywgJ21vbnRoJywgJ2RheScsICdOQU1FJyBdXG4gIGNvbnN0IHJlbmRlcmVkID0gYFxuICAgIE5hbWU6ICR7cHJvcHNbJ05BTUUnXX0gPGJyPlxuICAgIFdpbmQgU3BlZWQ6ICR7cHJvcHNbJ1VTQV9XSU5EJ119IGtub3RzIDxicj5cbiAgICBEYXRlOiAke3Byb3BzWydtb250aCddfS8ke3Byb3BzWydkYXknXX0vJHtwcm9wc1sneWVhciddfSA8YnI+XG4gICAgTGF0OiAke3Byb3BzWydMQVQnXX0gPGJyPlxuICAgIExvbjogJHtwcm9wc1snTE9OJ119IDxicj5cbiAgYFxuICByZXR1cm4gcmVuZGVyZWRcbn1cblxuY29uc3QgcmVuZGVyX3Byb3AgPSAoa2V5LCB2YWx1ZSkgPT4ge1xuICByZXR1cm4gYCR7a2V5fTogJHt2YWx1ZX1cXG5gXG59XG5cbiovXG4iXSwibmFtZXMiOlsiY29uZmlnIiwidGl0bGUiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsInllYXJTdGFydCIsInllYXJFbmQiLCJ5QXhpc1RpdGxlIiwic3Rvcm1UeXBlcyIsIlRJQ0tfTEFCRUxfVEhSRVNIT0xEIiwiVElDS19MQUJFTF9TVEVQIiwiVE9PTFRJUF9IRUlHSFQiLCJUT09MVElQX1dJRFRIIiwiZGF0YSIsInV0aWwiLCJHcmFwaCIsIk1JTl9ZRUFSIiwiZ2V0TWluWWVhciIsIk1BWF9ZRUFSIiwiZ2V0TWF4WWVhciIsInllYXJzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImQiLCJwYXJzZUludCIsInBsb3QiLCJpbml0UGxvdCIsImRhdGFzZXRzIiwiaW5pdERhdGFzZXRzIiwieCIsImluaXRYU2NhbGUiLCJ5IiwiaW5pdFlTY2FsZSIsImZvckVhY2giLCJrZXkiLCJpbml0QmFycyIsInhBeGlzIiwiYXBwZW5kWEF4aXMiLCJpbml0WEF4aXMiLCJzZXRZQXhpc1RpdGxlIiwieUF4aXMiLCJpbml0WUF4aXMiLCJpbml0VG9vbHRpcHMiLCJpbml0U3Rvcm1UeXBlcyIsImZpbHRlciIsImFjdGl2ZSIsInNob3dCYXJzIiwiYXBwZW5kIiwiYXR0ciIsImh0bWwiLCJkMyIsInNlbGVjdCIsIkFycmF5Iiwic2NhbGVCYW5kIiwiZG9tYWluIiwiZ2V0WERvbWFpbiIsInJhbmdlIiwic2NhbGVMaW5lYXIiLCJjYWxjTWF4IiwicmVtb3ZlIiwiY2FsbCIsImF4aXNCb3R0b20iLCJ0aWNrU2l6ZU91dGVyIiwic2VsZWN0QWxsIiwic3R5bGUiLCJpIiwibm9kZXMiLCJsZW5ndGgiLCJheGlzTGVmdCIsInlyIiwicHVzaCIsImRhdGFzZXQiLCJ5ZWFyIiwiU3RyaW5nIiwibWF4IiwidmFsdWUiLCJuZXdZZWFyU3RhcnQiLCJ1cGRhdGUiLCJuZXdZZWFyRW5kIiwicmVtb3ZlVG9vbHRpcHMiLCJyZW1vdmVCYXJzIiwiZ2V0QWN0aXZlU3Rvcm1UeXBlcyIsInJlbW92ZVhBeGlzIiwiZ2V0QWN0aXZlRGF0YSIsImJhcnMiLCJlbnRlciIsImJhbmR3aWR0aCIsImZpbGwiLCJvbiIsInRvZ2dsZVRvb2x0aXAiLCJ3aGVyZSIsIndoZXJlRmFjdG9yeSIsImxheWVyIiwic2V0V2hlcmUiLCJub3JtYWwiLCJzaG93VG9vbHRpcCIsInJhaXNlIiwidG9vbHRpcHMiLCJjYWxjVG9vbHRpcFgiLCJ0b29sdGlwX3RleHQiLCJ0ZXh0X21hcmdpbiIsInRvb2x0aXAiLCJ0cmFuc2l0aW9uIiwiaGlkZUJhcnMiLCJzdG9ybVdoZXJlIiwiayIsIm1pbiIsIm9wdGlvbkZhY3RvcnkiLCJpbm5lckhUTUwiLCJvcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJyZW1vdmVDaGlsZE5vZGVzIiwicGFyZW50IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwic2V0dXBZZWFyU2VsZWN0IiwibGFiZWwiLCJ5ZWFyU2VsZWN0ZWQiLCJtaW5ZZWFyIiwibWF4WWVhciIsInllYXJTZWxlY3QiLCJnZXRFbGVtZW50QnlJZCIsInNlbGVjdGVkSW5kZXgiLCJpbmRleCIsImFwcGVuZENoaWxkIiwib3B0aW9ucyIsImdyYXBoIiwiY2hlY2tib3hJZHMiLCJlbCIsImNoZWNrZWQiLCJhZGRFdmVudExpc3RlbmVyIiwic2VsZWN0ZWRTdGFydFllYXIiLCJzZWxlY3RlZEVuZFllYXIiLCJ5ZWFyU3RhcnRTZWxlY3QiLCJ5ZWFyRW5kU2VsZWN0IiwidXBkYXRlWWVhclN0YXJ0IiwidXBkYXRlWWVhckVuZCIsImZpdEJvdW5kcyIsImxhdCIsImxuZyIsIkwiLCJiYXNlbWFwIiwiZXNyaSIsImJhc2VtYXBMYXllciIsImFkZFRvIiwid2luZG93IiwiZmVhdHVyZUxheWVyIiwidXJsIiwiZmVhdHVyZSIsImMiLCJwcm9wIiwicHJvcGVydGllcyIsIlVTQV9XSU5EIiwiY29sb3IiLCJvcGFjaXR5Iiwid2VpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==