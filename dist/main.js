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
      'where': 'USA_WIND>=34',
      'label': 'Named Storms',
      'tooltip': 'Named Storm Days',
      'legend_label': 'Named Storms (>= 34kt)',
      'fill': '#C6DBEF',
      'active': true
    },
    'hurricane': {
      'where': 'USA_WIND>=64',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDJFQUFKO0FBQWtEOztBQUFBOztBQUNwRSxRQUFJLENBQUMySixDQUFMLEVBQVE7QUFBRUEsTUFBQUEsQ0FBQyxHQUFHLE9BQUo7QUFBYTs7QUFDdkIsV0FBTztBQUFFSSxNQUFBQSxLQUFLLEVBQUVKLENBQVQ7QUFBWUssTUFBQUEsT0FBTyxFQUFFLENBQXJCO0FBQXdCQyxNQUFBQSxNQUFNLEVBQUU7QUFBaEMsS0FBUDtBQUNELEdBWCtCO0FBWWhDbEUsRUFBQUEsS0FBSyxFQUFFO0FBWnlCLENBQXBCLEVBYVh1RCxLQWJXLENBYUwzSCxHQWJLLENBQWQ7QUFlQXlHLEtBQUssQ0FBQ25DLEtBQU4sR0FBY0EsS0FBZDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgdGl0bGU6ICdOb3J0aCBBdGxhbnRpYyBXZXN0IG9mIDYwwrBXOiAxOTUwLTIwMjAnLFxuICB3aWR0aDogNjAwLFxuICBoZWlnaHQ6IDYwMCxcbiAgbWFyZ2luOiB7IGxlZnQ6IDgwLCByaWdodDogMTAsIHRvcDogMTUsIGJvdHRvbTogNjAgfSxcbiAgeWVhclN0YXJ0OiAxOTUwLFxuICB5ZWFyRW5kOiAyMDIwLFxuICB5QXhpc1RpdGxlOiAnVHJvcGljYWwgQ3ljbG9uZSBEYXlzIChwZXIgeWVhciknLFxuICBzdG9ybVR5cGVzOiB7XG4gICAgJ25hbWVkX3N0b3JtJzoge1xuICAgICAgJ3doZXJlJzogJ1VTQV9XSU5EPj0zNCcsXG4gICAgICAnbGFiZWwnOiAnTmFtZWQgU3Rvcm1zJyxcbiAgICAgICd0b29sdGlwJzogJ05hbWVkIFN0b3JtIERheXMnLFxuICAgICAgJ2xlZ2VuZF9sYWJlbCc6ICdOYW1lZCBTdG9ybXMgKD49IDM0a3QpJyxcbiAgICAgICdmaWxsJzogJyNDNkRCRUYnLFxuICAgICAgJ2FjdGl2ZSc6IHRydWVcbiAgICB9LFxuICAgICdodXJyaWNhbmUnOiB7XG4gICAgICAnd2hlcmUnOiAnVVNBX1dJTkQ+PTY0JyxcbiAgICAgICdsYWJlbCc6ICdIdXJyaWNhbmVzJyxcbiAgICAgICd0b29sdGlwJzogJ0h1cnJpY2FuZSBEYXlzJyxcbiAgICAgICdsZWdlbmRfbGFiZWwnOiAnSHVycmljYW5lcyAoPj02NGt0KScsXG4gICAgICAnZmlsbCc6ICcjNkJBRUQ2JyxcbiAgICAgICdhY3RpdmUnOiB0cnVlXG4gICAgfSxcbiAgICAnbWFqb3JfaHVycmljYW5lJzoge1xuICAgICAgJ3doZXJlJzogJ1VTQV9XSU5EPj05NicsXG4gICAgICAnbGFiZWwnOiAnTWFqb3IgSHVycmljYW5lcycsXG4gICAgICAndG9vbHRpcCc6ICdNYWpvciBIdXJyaWNhbmUgRGF5cycsXG4gICAgICAnbGVnZW5kX2xhYmVsJzogJ01ham9yIEh1cnJpY2FuZXMgKD49IDk2a3QpJyxcbiAgICAgICdmaWxsJzogJyMwODUxOUMnLFxuICAgICAgJ2FjdGl2ZSc6IHRydWVcbiAgICB9XG4gIH0sXG4gIC8vIFN0b3AgbGFiZWxsaW5nIGV2ZXJ5IHgtYXhpcyB0aWNrIGFmdGVyIHRoaXMgbWFueSBlbGVtZW50c1xuICBUSUNLX0xBQkVMX1RIUkVTSE9MRDogMzAsXG4gIC8vIE51bWJlciBvZiB0aWNrcyBiZXR3ZWVuIGxhYmVscyBvbmNlIFRJQ0tfTEFCRUxfVEhSRVNESE9MRCBpcyBtZXQgKGluY2x1c2l2ZSlcbiAgVElDS19MQUJFTF9TVEVQOiA1LFxuICAvLyBUaGVzZSBzaG91bGQgYmUgY29uc2lzdGVudCB3aXRoIHRoZSBDU1NcbiAgVE9PTFRJUF9IRUlHSFQ6IDYwLFxuICBUT09MVElQX1dJRFRIOiAxODBcbn1cblxuIiwiXG5leHBvcnQgY29uc3QgZGF0YSA9IHtcbiAgXCIxOTUwXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxMS41LFxuICAgIFwiaHVycmljYW5lXCI6IDM4LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNTkuNVxuICB9LFxuICBcIjE5NTFcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMjMuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0MS43NVxuICB9LFxuICBcIjE5NTJcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDIuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxNC4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI3XG4gIH0sXG4gIFwiMTk1M1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMy4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxNC4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQ0XG4gIH0sXG4gIFwiMTk1NFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNyxcbiAgICBcImh1cnJpY2FuZVwiOiAyMC41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDVcbiAgfSxcbiAgXCIxOTU1XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA4LjUsXG4gICAgXCJodXJyaWNhbmVcIjogMzMsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA1OS4yNVxuICB9LFxuICBcIjE5NTZcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMTAuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyOS41XG4gIH0sXG4gIFwiMTk1N1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMC41LFxuICAgIFwiaHVycmljYW5lXCI6IDUuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDIyLjc1XG4gIH0sXG4gIFwiMTk1OFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMy43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAxNi43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQxLjVcbiAgfSxcbiAgXCIxOTU5XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDEyLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMzYuMjVcbiAgfSxcbiAgXCIxOTYwXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA2Ljc1LFxuICAgIFwiaHVycmljYW5lXCI6IDEyLFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjdcbiAgfSxcbiAgXCIxOTYxXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxMy43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAyNC43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQ2LjI1XG4gIH0sXG4gIFwiMTk2MlwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMCxcbiAgICBcImh1cnJpY2FuZVwiOiAxMS4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI1Ljc1XG4gIH0sXG4gIFwiMTk2M1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMy43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAyMi43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDM1Ljc1XG4gIH0sXG4gIFwiMTk2NFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogOC43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAzMyxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDUzLjVcbiAgfSxcbiAgXCIxOTY1XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA2LjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDkuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyMVxuICB9LFxuICBcIjE5NjZcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDguNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMjUuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAzNi41XG4gIH0sXG4gIFwiMTk2N1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNS43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAxOC41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjguNzVcbiAgfSxcbiAgXCIxOTY4XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLFxuICAgIFwiaHVycmljYW5lXCI6IDcuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDIwLjVcbiAgfSxcbiAgXCIxOTY5XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA0Ljc1LFxuICAgIFwiaHVycmljYW5lXCI6IDI0LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0OS43NVxuICB9LFxuICBcIjE5NzBcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEsXG4gICAgXCJodXJyaWNhbmVcIjogNixcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDIwLjVcbiAgfSxcbiAgXCIxOTcxXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxLFxuICAgIFwiaHVycmljYW5lXCI6IDE3LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDYuMjVcbiAgfSxcbiAgXCIxOTcyXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLFxuICAgIFwiaHVycmljYW5lXCI6IDIuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxNy41XG4gIH0sXG4gIFwiMTk3M1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMCxcbiAgICBcImh1cnJpY2FuZVwiOiAzLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjAuNVxuICB9LFxuICBcIjE5NzRcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMC41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMzEuNzVcbiAgfSxcbiAgXCIxOTc1XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAyLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDExLjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyNVxuICB9LFxuICBcIjE5NzZcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMy43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDE1LjI1XG4gIH0sXG4gIFwiMTk3N1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMSxcbiAgICBcImh1cnJpY2FuZVwiOiA1LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTMuMjVcbiAgfSxcbiAgXCIxOTc4XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLFxuICAgIFwiaHVycmljYW5lXCI6IDgsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyMlxuICB9LFxuICBcIjE5NzlcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDQuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTEuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyOC4yNVxuICB9LFxuICBcIjE5ODBcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDYuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogOS41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjIuMjVcbiAgfSxcbiAgXCIxOTgxXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAyLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDExLFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMzZcbiAgfSxcbiAgXCIxOTgyXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLjc1LFxuICAgIFwiaHVycmljYW5lXCI6IDQsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxMVxuICB9LFxuICBcIjE5ODNcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMi4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDExLjI1XG4gIH0sXG4gIFwiMTk4NFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMC43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMS41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMzJcbiAgfSxcbiAgXCIxOTg1XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA0LFxuICAgIFwiaHVycmljYW5lXCI6IDE4LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDEuNVxuICB9LFxuICBcIjE5ODZcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAsXG4gICAgXCJodXJyaWNhbmVcIjogMi4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDEyLjc1XG4gIH0sXG4gIFwiMTk4N1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMC41LFxuICAgIFwiaHVycmljYW5lXCI6IDIuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxMi41XG4gIH0sXG4gIFwiMTk4OFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNi41LFxuICAgIFwiaHVycmljYW5lXCI6IDEyLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjguNVxuICB9LFxuICBcIjE5ODlcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMi41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjZcbiAgfSxcbiAgXCIxOTkwXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLFxuICAgIFwiaHVycmljYW5lXCI6IDkuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyNS41XG4gIH0sXG4gIFwiMTk5MVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMS4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiA3LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTQuNVxuICB9LFxuICBcIjE5OTJcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuNSxcbiAgICBcImh1cnJpY2FuZVwiOiA1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTdcbiAgfSxcbiAgXCIxOTkzXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLjc1LFxuICAgIFwiaHVycmljYW5lXCI6IDcuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDIwLjI1XG4gIH0sXG4gIFwiMTk5NFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMCxcbiAgICBcImh1cnJpY2FuZVwiOiAxLFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTZcbiAgfSxcbiAgXCIxOTk1XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA3LjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDM0LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA2M1xuICB9LFxuICBcIjE5OTZcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDkuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMjkuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDUwXG4gIH0sXG4gIFwiMTk5N1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMS43NSxcbiAgICBcImh1cnJpY2FuZVwiOiA1LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxOFxuICB9LFxuICBcIjE5OThcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDgsXG4gICAgXCJodXJyaWNhbmVcIjogMjcuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQyLjVcbiAgfSxcbiAgXCIxOTk5XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA3LjUsXG4gICAgXCJodXJyaWNhbmVcIjogMjYuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0N1xuICB9LFxuICBcIjIwMDBcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTAsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAzMC4yNVxuICB9LFxuICBcIjIwMDFcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMTUuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0MlxuICB9LFxuICBcIjIwMDJcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMsXG4gICAgXCJodXJyaWNhbmVcIjogOC43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQyLjI1XG4gIH0sXG4gIFwiMjAwM1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNy41LFxuICAgIFwiaHVycmljYW5lXCI6IDE0LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0MC41XG4gIH0sXG4gIFwiMjAwNFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMTQsXG4gICAgXCJodXJyaWNhbmVcIjogMjYuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA1MS41XG4gIH0sXG4gIFwiMjAwNVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMTcuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMzcuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA4Mi4yNVxuICB9LFxuICBcIjIwMDZcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAsXG4gICAgXCJodXJyaWNhbmVcIjogMy43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDIxLjI1XG4gIH0sXG4gIFwiMjAwN1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNixcbiAgICBcImh1cnJpY2FuZVwiOiAxMC41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjUuMjVcbiAgfSxcbiAgXCIyMDA4XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA1LjUsXG4gICAgXCJodXJyaWNhbmVcIjogMjMuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA2NC43NVxuICB9LFxuICBcIjIwMDlcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogNS43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDEzLjI1XG4gIH0sXG4gIFwiMjAxMFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNC4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAyMSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDUxLjc1XG4gIH0sXG4gIFwiMjAxMVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNC41LFxuICAgIFwiaHVycmljYW5lXCI6IDE5LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNjBcbiAgfSxcbiAgXCIyMDEyXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDEyLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDhcbiAgfSxcbiAgXCIyMDEzXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLFxuICAgIFwiaHVycmljYW5lXCI6IDEuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDE0XG4gIH0sXG4gIFwiMjAxNFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMy4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMixcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI0LjI1XG4gIH0sXG4gIFwiMjAxNVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMy41LFxuICAgIFwiaHVycmljYW5lXCI6IDcuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxOS43NVxuICB9LFxuICBcIjIwMTZcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDguNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMTYuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0Mi41XG4gIH0sXG4gIFwiMjAxN1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMTIuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMzIuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA1OS43NVxuICB9LFxuICBcIjIwMThcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDQsXG4gICAgXCJodXJyaWNhbmVcIjogOSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI0LjI1XG4gIH0sXG4gIFwiMjAxOVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNi4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxNC4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDM5LjI1XG4gIH0sXG4gIFwiMjAyMFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNS41LFxuICAgIFwiaHVycmljYW5lXCI6IDI4LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogODFcbiAgfVxufVxuXG4iLCJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJ1xuXG5leHBvcnQgY2xhc3MgR3JhcGgge1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZywgZGF0YSkge1xuICAgIHRoaXMuTUlOX1lFQVIgPSB1dGlsLmdldE1pblllYXIoZGF0YSlcbiAgICB0aGlzLk1BWF9ZRUFSID0gdXRpbC5nZXRNYXhZZWFyKGRhdGEpXG4gICAgdGhpcy5USUNLX0xBQkVMX1RIUkVTSE9MRCA9IGNvbmZpZy5USUNLX0xBQkVMX1RIUkVTSE9MRFxuICAgIHRoaXMuVElDS19MQUJFTF9TVEVQID0gY29uZmlnLlRJQ0tfTEFCRUxfU1RFUFxuICAgIHRoaXMuVE9PTFRJUF9XSURUSCA9IGNvbmZpZy5UT09MVElQX1dJRFRIXG4gICAgdGhpcy5UT09MVElQX0hFSUdIVCA9IGNvbmZpZy5UT09MVElQX0hFSUdIVFxuXG4gICAgdGhpcy5kYXRhID0gZGF0YVxuICAgIHRoaXMudGl0bGUgPSBjb25maWcudGl0bGVcbiAgICB0aGlzLnlBeGlzVGl0bGUgPSBjb25maWcueUF4aXNUaXRsZVxuICAgIHRoaXMueWVhcnMgPSBPYmplY3Qua2V5cyhkYXRhKS5tYXAoZCA9PiBwYXJzZUludChkKSlcbiAgICB0aGlzLnllYXJTdGFydCA9IGNvbmZpZy55ZWFyU3RhcnRcbiAgICB0aGlzLnllYXJFbmQgPSBjb25maWcueWVhckVuZFxuICAgIHRoaXMuc3Rvcm1UeXBlcyA9IGNvbmZpZy5zdG9ybVR5cGVzXG4gICAgdGhpcy5tYXJnaW4gPSBjb25maWcubWFyZ2luXG4gICAgdGhpcy53aWR0aCA9IGNvbmZpZy53aWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gY29uZmlnLmhlaWdodFxuICAgIHRoaXMucGxvdCA9IHRoaXMuaW5pdFBsb3QoKVxuICAgIHRoaXMuZGF0YXNldHMgPSB0aGlzLmluaXREYXRhc2V0cyhPYmplY3Qua2V5cyhjb25maWcuc3Rvcm1UeXBlcykpXG4gICAgdGhpcy54ID0gdGhpcy5pbml0WFNjYWxlKClcbiAgICB0aGlzLnkgPSB0aGlzLmluaXRZU2NhbGUoKVxuXG4gICAgLy8gSW5zZXJ0IFNWRyBlbGVtZW50c1xuXG4gICAgLy8gU1ZHIGVsZW1lbnRzIGFyZSBwYWludGVkIGluIHRoZSBvcmRlciB0aGV5IGFyZSBpbnNlcnRlZCxcbiAgICAvLyBzbyB3ZSBhZGQgdGhlIGF4ZXMgYW5kIHRvb2x0aXBzIGxhc3Qgc28gdGhleSBzaG93IHVwIG92ZXIgdGhlIGJhcnNcbiAgICAvLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL1NWRzExL3JlbmRlci5odG1sI1JlbmRlcmluZ09yZGVyXG5cbiAgICAvLyBJbml0aWFsaXplIGRhdGEgYmFycyB3aXRoIHplcm8gaGVpZ2h0XG4gICAgT2JqZWN0LmtleXMoY29uZmlnLnN0b3JtVHlwZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHRoaXMuaW5pdEJhcnMoa2V5KVxuICAgIH0pXG5cbiAgICAvLyBEcmF3IHRoZSBheGVzXG4gICAgdGhpcy54QXhpcyA9IHRoaXMuYXBwZW5kWEF4aXMoKVxuICAgIHRoaXMuaW5pdFhBeGlzKClcbiAgICB0aGlzLnNldFlBeGlzVGl0bGUoKVxuICAgIHRoaXMueUF4aXMgPSB0aGlzLmluaXRZQXhpcygpXG5cbiAgICAvLyBEcmF3IHRoZSB0b29sdGlwc1xuICAgIE9iamVjdC5rZXlzKGNvbmZpZy5zdG9ybVR5cGVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICB0aGlzLmluaXRUb29sdGlwcyhrZXkpXG4gICAgfSlcblxuICAgIC8vIFNob3cgdGhlIGJhcnMgZm9yIGluaXRpYWxseSBhY3RpdmF0ZWQgc3Rvcm0gdHlwZXNcbiAgICBjb25zdCBpbml0U3Rvcm1UeXBlcyA9IE9iamVjdC5rZXlzKHRoaXMuc3Rvcm1UeXBlcykuZmlsdGVyKGtleSA9PiB0aGlzLnN0b3JtVHlwZXNba2V5XS5hY3RpdmUpXG4gICAgaW5pdFN0b3JtVHlwZXMuZm9yRWFjaChrZXkgPT4gdGhpcy5zaG93QmFycyhrZXkpKVxuXG4gIH1cblxuICBzZXRZQXhpc1RpdGxlKCkge1xuICAgIHRoaXMucGxvdC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2lkJywgJ3ktYXhpcy10aXRsZScpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHJvdGF0ZSgtOTApIHRyYW5zbGF0ZSgtJHt0aGlzLmhlaWdodC81fSwgMzApYClcbiAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLmh0bWwodGhpcy55QXhpc1RpdGxlKVxuICB9XG5cbiAgaW5pdFBsb3QoKSB7XG4gICAgcmV0dXJuIGQzLnNlbGVjdCgnI2dyYXBoJylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMud2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JywgdGhpcy5oZWlnaHQpXG4gIH1cblxuICBnZXRYRG9tYWluKCkge1xuICAgIHJldHVybiBbLi4uQXJyYXkodGhpcy55ZWFyRW5kLXRoaXMueWVhclN0YXJ0KzEpLmtleXMoKV0ubWFwKGQgPT4gZCt0aGlzLnllYXJTdGFydClcbiAgfVxuXG4gIGluaXRYU2NhbGUoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlQmFuZCgpXG4gICAgICAuZG9tYWluKHRoaXMuZ2V0WERvbWFpbigpKVxuICAgICAgLnJhbmdlKFt0aGlzLm1hcmdpbi5sZWZ0LCB0aGlzLndpZHRoIC0gdGhpcy5tYXJnaW4ucmlnaHRdKVxuICB9XG5cbiAgaW5pdFlTY2FsZSgpIHtcbiAgICByZXR1cm4gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLmRvbWFpbihbMCwgdGhpcy5jYWxjTWF4KCldKVxuICAgICAgLnJhbmdlKFt0aGlzLmhlaWdodCAtIHRoaXMubWFyZ2luLmJvdHRvbSwgdGhpcy5tYXJnaW4udG9wXSlcbiAgfVxuXG4gIGFwcGVuZFhBeGlzKCkge1xuICAgIHJldHVybiB0aGlzLnBsb3QuYXBwZW5kKCdnJykgIFxuICAgICAgLmF0dHIoJ2lkJywgJ3gtYXhpcycpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCAke3RoaXMuaGVpZ2h0IC0gdGhpcy5tYXJnaW4uYm90dG9tfSlgKVxuICB9XG5cbiAgcmVtb3ZlWEF4aXMoKSB7XG4gICAgZDMuc2VsZWN0KCcjeC1heGlzJykucmVtb3ZlKClcbiAgfVxuXG4gIGluaXRYQXhpcygpIHtcbiAgICB0aGlzLnhBeGlzLmNhbGwoZDMuYXhpc0JvdHRvbSh0aGlzLngpLnRpY2tTaXplT3V0ZXIoMCkpXG4gICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgICAuYXR0cignZHgnLCAnLS41ZW0nKVxuICAgICAgICAuYXR0cignZHknLCAnLjE1ZW0nKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3JvdGF0ZSgtNjUpJylcbiAgICAgICAgLmh0bWwoKGQsIGksIG5vZGVzKSA9PiB7XG4gICAgICAgICAgaWYgKG5vZGVzLmxlbmd0aCA+IHRoaXMuVElDS19MQUJFTF9USFJFU0hPTEQpIHtcbiAgICAgICAgICAgIGlmIChkICUgdGhpcy5USUNLX0xBQkVMX1NURVAgPT0gMCkgcmV0dXJuIGRcbiAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZFxuICAgICAgICB9KVxuICB9XG5cbiAgaW5pdFlBeGlzKCkge1xuICAgIHJldHVybiB0aGlzLnBsb3QuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7dGhpcy5tYXJnaW4ubGVmdH0sIDApYClcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHRoaXMueSkpXG4gIH1cblxuXG4gIGNhbGNBY3RpdmVZZWFycygpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5kYXRhKVxuICAgIGNvbnN0IHllYXJzID0gW11cbiAgICBmb3IgKGxldCBkIG9mIGtleXMpIHtcbiAgICAgIGNvbnN0IHlyID0gcGFyc2VJbnQoZClcbiAgICAgIGlmICh5ciA8IHRoaXMueWVhclN0YXJ0IHx8IHlyID4gdGhpcy55ZWFyRW5kKSBjb250aW51ZVxuICAgICAgeWVhcnMucHVzaCh5cilcbiAgICB9XG4gICAgcmV0dXJuIHllYXJzXG4gIH1cblxuICBpbml0RGF0YXNldHMoKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuc3Rvcm1UeXBlcykpIHtcbiAgICAgIGNvbnN0IGRhdGFzZXQgPSBbXVxuICAgICAgZm9yIChsZXQgeWVhciBvZiB0aGlzLnllYXJzKSB7XG4gICAgICAgIGRhdGFzZXQucHVzaCh7ICd5ZWFyJzogeWVhciwgJ3ZhbHVlJzogdGhpcy5kYXRhW1N0cmluZyh5ZWFyKV1ba2V5XSB9KVxuICAgICAgfVxuICAgICAgdGhpcy5zdG9ybVR5cGVzW2tleV0uZGF0YXNldCA9IGRhdGFzZXRcbiAgICB9XG4gIH1cblxuICBjYWxjTWF4KCkge1xuICAgIGxldCBtYXggPSAwXG4gICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuc3Rvcm1UeXBlcykpIHtcbiAgICAgIGZvciAobGV0IGQgb2YgdGhpcy5zdG9ybVR5cGVzW2tleV0uZGF0YXNldCkge1xuICAgICAgICBtYXggPSBkLnZhbHVlID4gbWF4ID8gZC52YWx1ZSA6IG1heFxuICAgICAgfVxuICAgIH1cbiAgICAvLyBSb3VuZCB1cCBieSAxMFxuICAgIHJldHVybiBwYXJzZUludChtYXggLyAxMCkgKiAxMCArIDEwXG4gIH1cblxuICBnZXRBY3RpdmVEYXRhKGtleSkge1xuICAgIHJldHVybiB0aGlzLnN0b3JtVHlwZXNba2V5XS5kYXRhc2V0LmZpbHRlcihkID0+IHtcbiAgICAgIHJldHVybiBkLnllYXIgPj0gdGhpcy55ZWFyU3RhcnQgJiYgZC55ZWFyIDw9IHRoaXMueWVhckVuZFxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVZZWFyU3RhcnQobmV3WWVhclN0YXJ0KSB7XG4gICAgdGhpcy55ZWFyU3RhcnQgPSBuZXdZZWFyU3RhcnRcbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICB1cGRhdGVZZWFyRW5kKG5ld1llYXJFbmQpIHtcbiAgICB0aGlzLnllYXJFbmQgPSBuZXdZZWFyRW5kXG4gICAgdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMueC5kb21haW4odGhpcy5nZXRYRG9tYWluKCkpXG4gICAgdGhpcy5yZW1vdmVUb29sdGlwcygpXG4gICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuc3Rvcm1UeXBlcykpIHtcbiAgICAgIHRoaXMucmVtb3ZlQmFycyhrZXkpXG4gICAgICB0aGlzLmluaXRCYXJzKGtleSlcbiAgICB9XG4gICAgZm9yIChsZXQga2V5IG9mIHRoaXMuZ2V0QWN0aXZlU3Rvcm1UeXBlcygpKSB7XG4gICAgICB0aGlzLnNob3dCYXJzKGtleSlcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVYQXhpcygpXG4gICAgdGhpcy54QXhpcyA9IHRoaXMuYXBwZW5kWEF4aXMoKVxuICAgIHRoaXMuaW5pdFhBeGlzKClcbiAgICB0aGlzLnlBeGlzID0gdGhpcy5pbml0WUF4aXMoKVxuICAgIC8vIEtlZXAgc2VwYXJhdGUgbG9vcCBmb3IgY29ycmVjdCBkcmF3aW5nIG9yZGVyXG4gICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuc3Rvcm1UeXBlcykpIHtcbiAgICAgIHRoaXMuaW5pdFRvb2x0aXBzKGtleSlcbiAgICB9XG4gIH1cblxuICBnZXRBY3RpdmVTdG9ybVR5cGVzKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnN0b3JtVHlwZXMpLmZpbHRlcihrZXkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuc3Rvcm1UeXBlc1trZXldLmFjdGl2ZVxuICAgIH0pXG4gIH1cblxuICBpbml0QmFycyhrZXkpIHtcbiAgICBjb25zdCBkYXRhc2V0ID0gdGhpcy5nZXRBY3RpdmVEYXRhKGtleSlcbiAgICBjb25zdCBiYXJzID0gdGhpcy5wbG90LmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZGF0YS1iYXJzJylcbiAgICAgIC5hdHRyKCdpZCcsIGBkYXRhLWJhcnMtLSR7a2V5fWApXG4gICAgICAuc2VsZWN0QWxsKCdyZWN0JylcbiAgICAgICAgLmRhdGEoZGF0YXNldClcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAuYXR0cignY2xhc3MnLCAnYmFyJylcbiAgICAgICAgICAuYXR0cignZGF0YS15ZWFyJywgZCA9PiBkLnllYXIpXG4gICAgICAgICAgLmF0dHIoJ2RhdGEtdmFsdWUnLCBkID0+IGQudmFsdWUpXG5cbiAgICBiYXJzLmF0dHIoJ2hlaWdodCcsIDApXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMueC5iYW5kd2lkdGgoKSlcbiAgICAgICAgLmF0dHIoJ3gnLCBkID0+IHRoaXMueChkLnllYXIpKVxuICAgICAgICAuYXR0cigneScsIHRoaXMueSgwKSlcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCB0aGlzLnN0b3JtVHlwZXNba2V5XS5maWxsKVxuICAgICAgICAub24oJ21vdXNlZW50ZXInLCBkID0+IHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVRvb2x0aXAoa2V5LCBkLnllYXIsIHRydWUpXG4gICAgICAgICAgY29uc3Qgd2hlcmUgPSB1dGlsLndoZXJlRmFjdG9yeShkLnllYXIsIHRoaXMuc3Rvcm1UeXBlc1trZXldWyd3aGVyZSddKVxuICAgICAgICAgIHRoaXMubGF5ZXIuc2V0V2hlcmUod2hlcmUpXG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VvdXQnLCBkID0+IHtcbiAgICAgICAgICB0aGlzLmxheWVyLnNldFdoZXJlKCcxPTAnKVxuICAgICAgICAgIHRoaXMudG9nZ2xlVG9vbHRpcChrZXksIGQueWVhciwgZmFsc2UpXG4gICAgICAgIH0pXG5cbiAgICB0aGlzLnN0b3JtVHlwZXNba2V5XS5iYXJzID0gYmFyc1xuICB9XG5cbiAgY2FsY1Rvb2x0aXBYKGQpIHtcbiAgICBjb25zdCBub3JtYWwgPSB0aGlzLngoZC55ZWFyKSArIHRoaXMueC5iYW5kd2lkdGgoKVxuICAgIGlmIChub3JtYWwgKyB0aGlzLlRPT0xUSVBfV0lEVEggPCB0aGlzLngucmFuZ2UoKVsxXSkgcmV0dXJuIG5vcm1hbFxuICAgIHJldHVybiBub3JtYWwgLSB0aGlzLlRPT0xUSVBfV0lEVEggLSB0aGlzLnguYmFuZHdpZHRoKClcbiAgfVxuXG4gIGNhbGNUb29sdGlwWShkKSB7XG4gICAgLy8gVE9ET1xuICB9XG5cbiAgcmVtb3ZlVG9vbHRpcHMoKSB7XG4gICAgZDMuc2VsZWN0QWxsKCcuZGF0YS10b29sdGlwcycpLnJlbW92ZSgpXG4gIH1cblxuICB0b2dnbGVUb29sdGlwKGtleSwgeWVhciwgc2hvd1Rvb2x0aXApIHtcbiAgICBkMy5zZWxlY3QoYCNkYXRhLXRvb2x0aXAtLSR7a2V5fS0tJHt5ZWFyfS0tcmVjdGApXG4gICAgICAuYXR0cignc3R5bGUnLCBzaG93VG9vbHRpcCA/ICcnIDogJ2Rpc3BsYXk6IG5vbmUnKVxuICAgICAgLnJhaXNlKClcbiAgICBkMy5zZWxlY3QoYCNkYXRhLXRvb2x0aXAtLSR7a2V5fS0tJHt5ZWFyfS0tdGV4dGApXG4gICAgICAuYXR0cignc3R5bGUnLCBzaG93VG9vbHRpcCA/ICcnIDogJ2Rpc3BsYXk6IG5vbmUnKVxuICAgICAgLnJhaXNlKClcbiAgfVxuXG4gIGluaXRUb29sdGlwcyhrZXkpIHtcbiAgICBjb25zdCBkYXRhc2V0ID0gdGhpcy5nZXRBY3RpdmVEYXRhKGtleSlcbiAgICBjb25zdCB0b29sdGlwcyA9IHRoaXMucGxvdC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2RhdGEtdG9vbHRpcHMnKVxuICAgICAgLmF0dHIoJ2lkJywgYGRhdGEtdG9vbHRpcHMtLSR7a2V5fWApXG4gICAgICAuc2VsZWN0QWxsKCdyZWN0JylcbiAgICAgICAgLmRhdGEoZGF0YXNldClcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYGRhdGEtdG9vbHRpcC0tJHtrZXl9LS0ke2QueWVhcn0tLXJlY3RgKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3Rvb2x0aXAnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCBkID0+IHRoaXMuY2FsY1Rvb2x0aXBYKGQpKVxuICAgICAgICAgICAgLmF0dHIoJ3knLCBkID0+IHRoaXMueShkLnZhbHVlKSAtIHRoaXMuVE9PTFRJUF9IRUlHSFQpXG4gICAgICAgICAgICAuYXR0cignc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKVxuICAgICAgICAgICAgLmF0dHIoJ2RhdGEteWVhcicsIGQgPT4gZC55ZWFyKVxuICAgICAgICAgICAgLmF0dHIoJ2RhdGEtdmFsdWUnLCBkID0+IGQudmFsdWUpXG4gICAgICAgICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXG4gICAgICAgICAgICAuYXR0cignc3Ryb2tlJywgdGhpcy5zdG9ybVR5cGVzW2tleV0uZmlsbClcbiAgICAgICAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAnMS41JylcblxuICAgIGNvbnN0IHRvb2x0aXBfdGV4dCA9IHRoaXMucGxvdC5zZWxlY3QoYCNkYXRhLXRvb2x0aXBzLS0ke2tleX1gKVxuICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5kYXRhKGRhdGFzZXQpXG4gICAgICAgICAgLmVudGVyKHRvb2x0aXBzKVxuICAgICAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYGRhdGEtdG9vbHRpcC0tJHtrZXl9LS0ke2QueWVhcn0tLXRleHRgKVxuICAgICAgICAgICAgICAuYXR0cignc3R5bGUnLCAnZGlzcGxheTogbm9uZScpXG4gICAgICAgICAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdzdGFydCcpXG4gICAgICAgICAgICAgIC5hdHRyKCd4JywgZCA9PiB0aGlzLmNhbGNUb29sdGlwWChkKSlcbiAgICAgICAgICAgICAgLmF0dHIoJ3knLCBkID0+IHRoaXMueShkLnZhbHVlKSlcblxuICAgIGNvbnN0IHRleHRfbWFyZ2luID0geyBsZWZ0OiA4LCB0b3A6IDggfVxuXG4gICAgdG9vbHRpcF90ZXh0LmFwcGVuZCgndHNwYW4nKVxuICAgICAgLmF0dHIoJ3gnLCBkID0+IHRoaXMuY2FsY1Rvb2x0aXBYKGQpICsgdGV4dF9tYXJnaW4ubGVmdClcbiAgICAgIC5hdHRyKCd5JywgZCA9PiB0aGlzLnkoZC52YWx1ZSkgLSB0aGlzLlRPT0xUSVBfSEVJR0hULzIgLSB0ZXh0X21hcmdpbi50b3ApXG4gICAgICAuaHRtbChkID0+IGBZZWFyOiAke2QueWVhcn1gKVxuXG4gICAgdG9vbHRpcF90ZXh0LmFwcGVuZCgndHNwYW4nKVxuICAgICAgLmF0dHIoJ3gnLCBkID0+IHRoaXMuY2FsY1Rvb2x0aXBYKGQpICsgdGV4dF9tYXJnaW4ubGVmdClcbiAgICAgIC5hdHRyKCd5JywgZCA9PiB0aGlzLnkoZC52YWx1ZSkgLSB0ZXh0X21hcmdpbi50b3ApXG4gICAgICAuaHRtbChkID0+IGAke3RoaXMuc3Rvcm1UeXBlc1trZXldLnRvb2x0aXB9OiAke2QudmFsdWV9YClcblxuICAgIHRoaXMuc3Rvcm1UeXBlc1trZXldLnRvb2x0aXBzID0gdG9vbHRpcHNcbiAgfVxuXG4gIHNob3dCYXJzKGtleSkge1xuICAgIHRoaXMuc3Rvcm1UeXBlc1trZXldLmJhcnMudHJhbnNpdGlvbigxMDAwKVxuICAgICAgLmF0dHIoJ3knLCBkID0+IHRoaXMueShkLnZhbHVlKSlcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBkID0+IHRoaXMueSgwKSAtIHRoaXMueShkLnZhbHVlKSlcbiAgfVxuXG4gIGhpZGVCYXJzKGtleSkge1xuICAgIHRoaXMuc3Rvcm1UeXBlc1trZXldLmJhcnMudHJhbnNpdGlvbigxMDAwKVxuICAgICAgLmF0dHIoJ3knLCBkID0+IHRoaXMueSgwKSlcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAwKVxuICB9XG5cbiAgcmVtb3ZlQmFycyhrZXkpIHtcbiAgICB0aGlzLmhpZGVCYXJzKGtleSlcbiAgICB0aGlzLnN0b3JtVHlwZXNba2V5XS5iYXJzLnJlbW92ZSgpXG4gICAgdGhpcy5zdG9ybVR5cGVzW2tleV0uYmFycyA9IFtdXG4gIH1cblxufVxuXG4iLCJpbXBvcnQgKiBhcyBjb25maWcgZnJvbSAnLi9jb25maWcnXG5cbmV4cG9ydCBjb25zdCB3aGVyZUZhY3RvcnkgPSAoeWVhciwgc3Rvcm1XaGVyZSkgPT4gYFlFQVI9JHt5ZWFyfSBBTkQgJHtzdG9ybVdoZXJlfWBcblxuZXhwb3J0IGNvbnN0IGdldE1heFllYXIgPSAoZGF0YSkgPT4ge1xuICBsZXQgbWF4ID0gMFxuICBmb3IgKGxldCBrIG9mIE9iamVjdC5rZXlzKGRhdGEpKSB7XG4gICAgayA9IHBhcnNlSW50KGspXG4gICAgaWYgKGsgPiBtYXgpIHsgbWF4ID0gayB9XG4gIH1cbiAgcmV0dXJuIG1heFxufVxuXG5leHBvcnQgY29uc3QgZ2V0TWluWWVhciA9IChkYXRhKSA9PiB7XG4gIGxldCBtaW4gPSAxMDAwMFxuICBmb3IgKGxldCBrIG9mIE9iamVjdC5rZXlzKGRhdGEpKSB7XG4gICAgayA9IHBhcnNlSW50KGspXG4gICAgaWYgKGsgPCBtaW4pIHsgbWluID0gayB9XG4gIH1cbiAgcmV0dXJuIG1pblxufVxuXG5leHBvcnQgY29uc3Qgb3B0aW9uRmFjdG9yeSA9IGZ1bmN0aW9uICh2YWx1ZSwgaW5uZXJIVE1MKSB7XG4gICAgdmFyIG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdC52YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgb3B0LmlubmVySFRNTCA9IFN0cmluZyhpbm5lckhUTUwpO1xuICAgIHJldHVybiBvcHQ7XG59XG5cblxuY29uc3QgcmVtb3ZlQ2hpbGROb2RlcyA9IChwYXJlbnQpID0+IHtcbiAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXR1cFllYXJTZWxlY3QgPSAobGFiZWwsIHllYXJTZWxlY3RlZCwgbWluWWVhciwgbWF4WWVhcikgPT4ge1xuICBjb25zdCB5ZWFyU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHllYXItJHtsYWJlbH0tc2VsZWN0YClcbiAgcmVtb3ZlQ2hpbGROb2Rlcyh5ZWFyU2VsZWN0KVxuICBsZXQgc2VsZWN0ZWRJbmRleDtcbiAgbGV0IGluZGV4ID0gMDtcbiAgZm9yICh2YXIgeSA9IG1pblllYXI7IHk8PW1heFllYXI7IHkrKyl7XG4gICAgICBpZiAocGFyc2VJbnQoeWVhclNlbGVjdGVkKSA9PSB5KSB7IHNlbGVjdGVkSW5kZXggPSBpbmRleCB9XG4gICAgICB5ZWFyU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkZhY3RvcnkoU3RyaW5nKHkpLCBTdHJpbmcoeSkpKVxuICAgICAgaW5kZXgrKztcbiAgfVxuICB5ZWFyU2VsZWN0Lm9wdGlvbnMuc2VsZWN0ZWRJbmRleD1zZWxlY3RlZEluZGV4XG4gIHJldHVybiB5ZWFyU2VsZWN0XG59XG5cblxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsIE5hcnJvdywgc2VyaWY7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAxMjAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNtYXAtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcXG59XFxuXFxuI21hcCB7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jZ3JhcGgtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmRhdGEtdG9vbHRpcHMgLnRvb2x0aXAge1xcbiAgICB3aWR0aDogMTgwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLnRpY2sgdGV4dCB7XFxuICAgIGZpbGw6ICM1OTU5NTk7XFxufVxcblxcbiN5LWF4aXMtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbn1cXG5cXG4jcGxvdCAudGljayB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbiNncmFwaC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jZ3JhcGgtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNtZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcXG59XFxuXFxuI21lbnUgZGl2IHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4jc2hvdy1zdG9ybS10eXBlcyB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jc2hvdy1zdG9ybS10eXBlcyBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDVweDsgXFxufVxcblxcbiN5ZWFyLXNlbGVjdCB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwgTmFycm93LCBzZXJpZjtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDEyMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI21hcC1jb250YWluZXIge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xcbn1cXG5cXG4jbWFwIHtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNncmFwaC1jb250YWluZXIge1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uZGF0YS10b29sdGlwcyAudG9vbHRpcCB7XFxuICAgIHdpZHRoOiAxODBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4udGljayB0ZXh0IHtcXG4gICAgZmlsbDogIzU5NTk1OTtcXG59XFxuXFxuI3ktYXhpcy10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxufVxcblxcbiNwbG90IC50aWNrIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuI2dyYXBoLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNncmFwaC10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI21lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbn1cXG5cXG4jbWVudSBkaXYge1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiNzaG93LXN0b3JtLXR5cGVzIHtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNzaG93LXN0b3JtLXR5cGVzIGxhYmVsIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogNXB4OyBcXG59XFxuXFxuI3llYXItc2VsZWN0IHtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5pbXBvcnQgJy4vaW5kZXguY3NzJ1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnXG5pbXBvcnQgeyBkYXRhIH0gIGZyb20gJy4vZGF0YSdcbmltcG9ydCB7IEdyYXBoIH0gZnJvbSAnLi9ncmFwaCdcblxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnXG5cbmNvbnN0IG1pblllYXIgPSB1dGlsLmdldE1pblllYXIoZGF0YSlcbmNvbnN0IG1heFllYXIgPSB1dGlsLmdldE1heFllYXIoZGF0YSlcblxuY29uc3QgZ3JhcGggPSBuZXcgR3JhcGgoY29uZmlnLCBkYXRhKVxuXG5jb25zdCBjaGVja2JveElkcyA9IHtcbiAgJ25hbWVkX3N0b3JtJzogJ3Nob3ctbmFtZWQtc3Rvcm1zJyxcbiAgJ2h1cnJpY2FuZSc6ICdzaG93LW1pbm9yLWh1cnJpY2FuZXMnLFxuICAnbWFqb3JfaHVycmljYW5lJzogJ3Nob3ctbWFqb3ItaHVycmljYW5lcydcbn1cblxuZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGNoZWNrYm94SWRzKSkge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNoZWNrYm94SWRzW2tleV0pXG4gIGVsLmNoZWNrZWQgPSBjb25maWcuc3Rvcm1UeXBlc1trZXldLmFjdGl2ZVxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgZ3JhcGguc3Rvcm1UeXBlc1trZXldLmFjdGl2ZSA9IHRydWVcbiAgICAgIGdyYXBoLnNob3dCYXJzKGtleSlcbiAgICB9IGVsc2Uge1xuICAgICAgZ3JhcGguc3Rvcm1UeXBlc1trZXldLmFjdGl2ZSA9IGZhbHNlXG4gICAgICBncmFwaC5oaWRlQmFycyhrZXkpXG4gICAgfVxuICB9KVxufVxuXG5sZXQgc2VsZWN0ZWRTdGFydFllYXIgPSBncmFwaC55ZWFyU3RhcnRcbmxldCBzZWxlY3RlZEVuZFllYXIgPSBncmFwaC55ZWFyRW5kXG5cbmNvbnN0IHllYXJTdGFydFNlbGVjdCA9IHV0aWwuc2V0dXBZZWFyU2VsZWN0KCdzdGFydCcsIHNlbGVjdGVkU3RhcnRZZWFyLCBtaW5ZZWFyLCBtYXhZZWFyKVxuY29uc3QgeWVhckVuZFNlbGVjdCA9IHV0aWwuc2V0dXBZZWFyU2VsZWN0KCdlbmQnLCBzZWxlY3RlZEVuZFllYXIsIG1pblllYXIsIG1heFllYXIpXG5cbnllYXJTdGFydFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gIHNlbGVjdGVkU3RhcnRZZWFyID0gcGFyc2VJbnQoeWVhclN0YXJ0U2VsZWN0LnZhbHVlKVxuICBncmFwaC51cGRhdGVZZWFyU3RhcnQoc2VsZWN0ZWRTdGFydFllYXIpXG4gIHV0aWwuc2V0dXBZZWFyU2VsZWN0KCdlbmQnLCBzZWxlY3RlZEVuZFllYXIsIHNlbGVjdGVkU3RhcnRZZWFyLCBncmFwaC5NQVhfWUVBUilcbn0pXG5cbnllYXJFbmRTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICBzZWxlY3RlZEVuZFllYXIgPSBwYXJzZUludCh5ZWFyRW5kU2VsZWN0LnZhbHVlKVxuICBncmFwaC51cGRhdGVZZWFyRW5kKHNlbGVjdGVkRW5kWWVhcilcbiAgdXRpbC5zZXR1cFllYXJTZWxlY3QoJ3N0YXJ0Jywgc2VsZWN0ZWRTdGFydFllYXIsIGdyYXBoLk1JTl9ZRUFSLCBzZWxlY3RlZEVuZFllYXIpXG59KVxuXG4vLyBNYXBcbi8vIFdoZXJlIGNsYXVzZSBnZW5lcmF0b3JcblxuY29uc3QgZml0Qm91bmRzID0gW1xuICB7bGF0OiA1MC4wLCBsbmc6IC02MH0sXG4gIHtsYXQ6IDUsIGxuZzogLTEwMH1cbl1cbmNvbnN0IG1hcCA9IEwubWFwKCdtYXAnKS5maXRCb3VuZHMoZml0Qm91bmRzKVxuXG5jb25zdCBiYXNlbWFwID0gTC5lc3JpLmJhc2VtYXBMYXllcignU3RyZWV0cycpLmFkZFRvKG1hcCk7XG5cbndpbmRvdy5tYXAgPSBtYXBcblxuLy8gZHVtbXkgZmVhdHVyZSBmb3IgbG9nZ2luZ1xuLy9sZXQgZjtcblxuY29uc3QgbGF5ZXIgPSBMLmVzcmkuZmVhdHVyZUxheWVyKHtcbiAgdXJsOiAnaHR0cHM6Ly9zZXJ2aWNlczIuYXJjZ2lzLmNvbS9GaWFQQTRnYTBpUUtkdXYzL0FyY0dJUy9yZXN0L3NlcnZpY2VzL0lCVHJBQ1NfQUxMX2xpc3RfdjA0cjAwX2xpbmVzXzEvRmVhdHVyZVNlcnZlci8wJyxcbiAgc3R5bGU6IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgLy9pZiAoIWYpIHsgZiA9IGZlYXR1cmU7ICBjb25zb2xlLmxvZyhmZWF0dXJlKSB9XG4gICAgbGV0IGM7XG4gICAgbGV0IHByb3AgPSBmZWF0dXJlLnByb3BlcnRpZXMuVVNBX1dJTkRcbiAgICBpZiAocHJvcCA8IDY0ICYmIHByb3AgPj0gMzQpIHsgYyA9IGNvbmZpZy5zdG9ybVR5cGVzWyduYW1lZF9zdG9ybSddWydmaWxsJ10gfVxuICAgIGlmIChwcm9wID49IDY0ICYmIHByb3AgPCA5NikgeyBjID0gY29uZmlnLnN0b3JtVHlwZXNbJ2h1cnJpY2FuZSddWydmaWxsJ10gfVxuICAgIGlmIChwcm9wID49IDk2KSB7IGMgPSBjb25maWcuc3Rvcm1UeXBlc1snbWFqb3JfaHVycmljYW5lJ11bJ2ZpbGwnXSB9O1xuICAgIGlmICghYykgeyBjID0gJ3doaXRlJyB9XG4gICAgcmV0dXJuIHsgY29sb3I6IGMsIG9wYWNpdHk6IDEsIHdlaWdodDogNSB9XG4gIH0sXG4gIHdoZXJlOiAnMT0wJ1xufSkuYWRkVG8obWFwKTtcblxuZ3JhcGgubGF5ZXIgPSBsYXllclxuXG4vKlxuY29uc3QgZmVhdHVyZV9pbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlYXR1cmUtaW5mbycpXG5cbmxheWVyLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZmVhdHVyZV9pbmZvLmlubmVySFRNTCA9IHJlbmRlcl9mZWF0dXJlKGV2ZW50LmxheWVyLmZlYXR1cmUpXG59KVxuXG5sYXllci5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZmVhdHVyZV9pbmZvLmlubmVySFRNTCA9ICdIb3ZlciBvdmVyIGEgc3Rvcm0gdHJhY2sgZm9yIG1vcmUgZGF0YSdcbn0pXG5cbmNvbnN0IHJlbmRlcl9mZWF0dXJlID0gZiA9PiB7XG4gIGNvbnN0IHByb3BzID0gZi5wcm9wZXJ0aWVzXG4gIGNvbnN0IGRpc3BsYXlfcHJvcHMgPSBbICdMQVQnLCAnTE9OJywgJ1VTQV9XSU5EJywgJ3llYXInLCAnbW9udGgnLCAnZGF5JywgJ05BTUUnIF1cbiAgY29uc3QgcmVuZGVyZWQgPSBgXG4gICAgTmFtZTogJHtwcm9wc1snTkFNRSddfSA8YnI+XG4gICAgV2luZCBTcGVlZDogJHtwcm9wc1snVVNBX1dJTkQnXX0ga25vdHMgPGJyPlxuICAgIERhdGU6ICR7cHJvcHNbJ21vbnRoJ119LyR7cHJvcHNbJ2RheSddfS8ke3Byb3BzWyd5ZWFyJ119IDxicj5cbiAgICBMYXQ6ICR7cHJvcHNbJ0xBVCddfSA8YnI+XG4gICAgTG9uOiAke3Byb3BzWydMT04nXX0gPGJyPlxuICBgXG4gIHJldHVybiByZW5kZXJlZFxufVxuXG5jb25zdCByZW5kZXJfcHJvcCA9IChrZXksIHZhbHVlKSA9PiB7XG4gIHJldHVybiBgJHtrZXl9OiAke3ZhbHVlfVxcbmBcbn1cblxuKi9cbiJdLCJuYW1lcyI6WyJjb25maWciLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwieWVhclN0YXJ0IiwieWVhckVuZCIsInlBeGlzVGl0bGUiLCJzdG9ybVR5cGVzIiwiVElDS19MQUJFTF9USFJFU0hPTEQiLCJUSUNLX0xBQkVMX1NURVAiLCJUT09MVElQX0hFSUdIVCIsIlRPT0xUSVBfV0lEVEgiLCJkYXRhIiwidXRpbCIsIkdyYXBoIiwiTUlOX1lFQVIiLCJnZXRNaW5ZZWFyIiwiTUFYX1lFQVIiLCJnZXRNYXhZZWFyIiwieWVhcnMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiZCIsInBhcnNlSW50IiwicGxvdCIsImluaXRQbG90IiwiZGF0YXNldHMiLCJpbml0RGF0YXNldHMiLCJ4IiwiaW5pdFhTY2FsZSIsInkiLCJpbml0WVNjYWxlIiwiZm9yRWFjaCIsImtleSIsImluaXRCYXJzIiwieEF4aXMiLCJhcHBlbmRYQXhpcyIsImluaXRYQXhpcyIsInNldFlBeGlzVGl0bGUiLCJ5QXhpcyIsImluaXRZQXhpcyIsImluaXRUb29sdGlwcyIsImluaXRTdG9ybVR5cGVzIiwiZmlsdGVyIiwiYWN0aXZlIiwic2hvd0JhcnMiLCJhcHBlbmQiLCJhdHRyIiwiaHRtbCIsImQzIiwic2VsZWN0IiwiQXJyYXkiLCJzY2FsZUJhbmQiLCJkb21haW4iLCJnZXRYRG9tYWluIiwicmFuZ2UiLCJzY2FsZUxpbmVhciIsImNhbGNNYXgiLCJyZW1vdmUiLCJjYWxsIiwiYXhpc0JvdHRvbSIsInRpY2tTaXplT3V0ZXIiLCJzZWxlY3RBbGwiLCJzdHlsZSIsImkiLCJub2RlcyIsImxlbmd0aCIsImF4aXNMZWZ0IiwieXIiLCJwdXNoIiwiZGF0YXNldCIsInllYXIiLCJTdHJpbmciLCJtYXgiLCJ2YWx1ZSIsIm5ld1llYXJTdGFydCIsInVwZGF0ZSIsIm5ld1llYXJFbmQiLCJyZW1vdmVUb29sdGlwcyIsInJlbW92ZUJhcnMiLCJnZXRBY3RpdmVTdG9ybVR5cGVzIiwicmVtb3ZlWEF4aXMiLCJnZXRBY3RpdmVEYXRhIiwiYmFycyIsImVudGVyIiwiYmFuZHdpZHRoIiwiZmlsbCIsIm9uIiwidG9nZ2xlVG9vbHRpcCIsIndoZXJlIiwid2hlcmVGYWN0b3J5IiwibGF5ZXIiLCJzZXRXaGVyZSIsIm5vcm1hbCIsInNob3dUb29sdGlwIiwicmFpc2UiLCJ0b29sdGlwcyIsImNhbGNUb29sdGlwWCIsInRvb2x0aXBfdGV4dCIsInRleHRfbWFyZ2luIiwidG9vbHRpcCIsInRyYW5zaXRpb24iLCJoaWRlQmFycyIsInN0b3JtV2hlcmUiLCJrIiwibWluIiwib3B0aW9uRmFjdG9yeSIsImlubmVySFRNTCIsIm9wdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInJlbW92ZUNoaWxkTm9kZXMiLCJwYXJlbnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJzZXR1cFllYXJTZWxlY3QiLCJsYWJlbCIsInllYXJTZWxlY3RlZCIsIm1pblllYXIiLCJtYXhZZWFyIiwieWVhclNlbGVjdCIsImdldEVsZW1lbnRCeUlkIiwic2VsZWN0ZWRJbmRleCIsImluZGV4IiwiYXBwZW5kQ2hpbGQiLCJvcHRpb25zIiwiZ3JhcGgiLCJjaGVja2JveElkcyIsImVsIiwiY2hlY2tlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZWxlY3RlZFN0YXJ0WWVhciIsInNlbGVjdGVkRW5kWWVhciIsInllYXJTdGFydFNlbGVjdCIsInllYXJFbmRTZWxlY3QiLCJ1cGRhdGVZZWFyU3RhcnQiLCJ1cGRhdGVZZWFyRW5kIiwiZml0Qm91bmRzIiwibGF0IiwibG5nIiwiTCIsImJhc2VtYXAiLCJlc3JpIiwiYmFzZW1hcExheWVyIiwiYWRkVG8iLCJ3aW5kb3ciLCJmZWF0dXJlTGF5ZXIiLCJ1cmwiLCJmZWF0dXJlIiwiYyIsInByb3AiLCJwcm9wZXJ0aWVzIiwiVVNBX1dJTkQiLCJjb2xvciIsIm9wYWNpdHkiLCJ3ZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9