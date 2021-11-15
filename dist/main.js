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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxLQUFOLEdBQWNBLEtBQWQ7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIHRpdGxlOiAnTm9ydGggQXRsYW50aWMgV2VzdCBvZiA2MMKwVzogMTk1MC0yMDIwJyxcbiAgd2lkdGg6IDYwMCxcbiAgaGVpZ2h0OiA2MDAsXG4gIG1hcmdpbjogeyBsZWZ0OiA4MCwgcmlnaHQ6IDEwLCB0b3A6IDE1LCBib3R0b206IDYwIH0sXG4gIHllYXJTdGFydDogMTk1MCxcbiAgeWVhckVuZDogMjAyMCxcbiAgeUF4aXNUaXRsZTogJ1Ryb3BpY2FsIEN5Y2xvbmUgRGF5cyAocGVyIHllYXIpJyxcbiAgc3Rvcm1UeXBlczoge1xuICAgICduYW1lZF9zdG9ybSc6IHtcbiAgICAgICd3aGVyZSc6IFwiVVNBX1dJTkQ+PTM0IEFORCBCQVNJTiA9ICdOQSdcIixcbiAgICAgICdsYWJlbCc6ICdOYW1lZCBTdG9ybXMnLFxuICAgICAgJ3Rvb2x0aXAnOiAnTmFtZWQgU3Rvcm0gRGF5cycsXG4gICAgICAnbGVnZW5kX2xhYmVsJzogJ05hbWVkIFN0b3JtcyAoPj0gMzRrdCknLFxuICAgICAgJ2ZpbGwnOiAnI0M2REJFRicsXG4gICAgICAnYWN0aXZlJzogdHJ1ZVxuICAgIH0sXG4gICAgJ2h1cnJpY2FuZSc6IHtcbiAgICAgICd3aGVyZSc6IFwiVVNBX1dJTkQ+PTY0IEFORCBCQVNJTiA9ICdOQSdcIixcbiAgICAgICdsYWJlbCc6ICdIdXJyaWNhbmVzJyxcbiAgICAgICd0b29sdGlwJzogJ0h1cnJpY2FuZSBEYXlzJyxcbiAgICAgICdsZWdlbmRfbGFiZWwnOiAnSHVycmljYW5lcyAoPj02NGt0KScsXG4gICAgICAnZmlsbCc6ICcjNkJBRUQ2JyxcbiAgICAgICdhY3RpdmUnOiB0cnVlXG4gICAgfSxcbiAgICAnbWFqb3JfaHVycmljYW5lJzoge1xuICAgICAgJ3doZXJlJzogXCJVU0FfV0lORD49OTYgQU5EIEJBU0lOID0gJ05BJ1wiLFxuICAgICAgJ2xhYmVsJzogJ01ham9yIEh1cnJpY2FuZXMnLFxuICAgICAgJ3Rvb2x0aXAnOiAnTWFqb3IgSHVycmljYW5lIERheXMnLFxuICAgICAgJ2xlZ2VuZF9sYWJlbCc6ICdNYWpvciBIdXJyaWNhbmVzICg+PSA5Nmt0KScsXG4gICAgICAnZmlsbCc6ICcjMDg1MTlDJyxcbiAgICAgICdhY3RpdmUnOiB0cnVlXG4gICAgfVxuICB9LFxuICAvLyBTdG9wIGxhYmVsbGluZyBldmVyeSB4LWF4aXMgdGljayBhZnRlciB0aGlzIG1hbnkgZWxlbWVudHNcbiAgVElDS19MQUJFTF9USFJFU0hPTEQ6IDMwLFxuICAvLyBOdW1iZXIgb2YgdGlja3MgYmV0d2VlbiBsYWJlbHMgb25jZSBUSUNLX0xBQkVMX1RIUkVTREhPTEQgaXMgbWV0IChpbmNsdXNpdmUpXG4gIFRJQ0tfTEFCRUxfU1RFUDogNSxcbiAgLy8gVGhlc2Ugc2hvdWxkIGJlIGNvbnNpc3RlbnQgd2l0aCB0aGUgQ1NTXG4gIFRPT0xUSVBfSEVJR0hUOiA2MCxcbiAgVE9PTFRJUF9XSURUSDogMTgwXG59XG5cbiIsIlxuZXhwb3J0IGNvbnN0IGRhdGEgPSB7XG4gIFwiMTk1MFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMTEuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAzOCxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDU5LjVcbiAgfSxcbiAgXCIxOTUxXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLjc1LFxuICAgIFwiaHVycmljYW5lXCI6IDIzLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDEuNzVcbiAgfSxcbiAgXCIxOTUyXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAyLjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTQuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyN1xuICB9LFxuICBcIjE5NTNcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTQuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0NFxuICB9LFxuICBcIjE5NTRcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDcsXG4gICAgXCJodXJyaWNhbmVcIjogMjAuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQ1XG4gIH0sXG4gIFwiMTk1NVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogOC41LFxuICAgIFwiaHVycmljYW5lXCI6IDMzLFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNTkuMjVcbiAgfSxcbiAgXCIxOTU2XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxLjc1LFxuICAgIFwiaHVycmljYW5lXCI6IDEwLjc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjkuNVxuICB9LFxuICBcIjE5NTdcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAuNSxcbiAgICBcImh1cnJpY2FuZVwiOiA1LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyMi43NVxuICB9LFxuICBcIjE5NThcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMTYuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0MS41XG4gIH0sXG4gIFwiMTk1OVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMy4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMi4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDM2LjI1XG4gIH0sXG4gIFwiMTk2MFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNi43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMixcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI3XG4gIH0sXG4gIFwiMTk2MVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMTMuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMjQuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0Ni4yNVxuICB9LFxuICBcIjE5NjJcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAsXG4gICAgXCJodXJyaWNhbmVcIjogMTEuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyNS43NVxuICB9LFxuICBcIjE5NjNcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMjIuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAzNS43NVxuICB9LFxuICBcIjE5NjRcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDguNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMzMsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA1My41XG4gIH0sXG4gIFwiMTk2NVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNi4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiA5Ljc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjFcbiAgfSxcbiAgXCIxOTY2XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA4Ljc1LFxuICAgIFwiaHVycmljYW5lXCI6IDI1Ljc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMzYuNVxuICB9LFxuICBcIjE5NjdcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDUuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMTguNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI4Ljc1XG4gIH0sXG4gIFwiMTk2OFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMCxcbiAgICBcImh1cnJpY2FuZVwiOiA3LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyMC41XG4gIH0sXG4gIFwiMTk2OVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNC43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAyNC41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDkuNzVcbiAgfSxcbiAgXCIxOTcwXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxLFxuICAgIFwiaHVycmljYW5lXCI6IDYsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyMC41XG4gIH0sXG4gIFwiMTk3MVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMSxcbiAgICBcImh1cnJpY2FuZVwiOiAxNy4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQ2LjI1XG4gIH0sXG4gIFwiMTk3MlwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMCxcbiAgICBcImh1cnJpY2FuZVwiOiAyLjc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTcuNVxuICB9LFxuICBcIjE5NzNcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAsXG4gICAgXCJodXJyaWNhbmVcIjogMy4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDIwLjVcbiAgfSxcbiAgXCIxOTc0XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTAuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDMxLjc1XG4gIH0sXG4gIFwiMTk3NVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMi4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMS41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjVcbiAgfSxcbiAgXCIxOTc2XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLjc1LFxuICAgIFwiaHVycmljYW5lXCI6IDMuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxNS4yNVxuICB9LFxuICBcIjE5NzdcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEsXG4gICAgXCJodXJyaWNhbmVcIjogNS4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDEzLjI1XG4gIH0sXG4gIFwiMTk3OFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMyxcbiAgICBcImh1cnJpY2FuZVwiOiA4LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjJcbiAgfSxcbiAgXCIxOTc5XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA0LjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDExLjc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjguMjVcbiAgfSxcbiAgXCIxOTgwXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA2LjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDkuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDIyLjI1XG4gIH0sXG4gIFwiMTk4MVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMi4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDM2XG4gIH0sXG4gIFwiMTk4MlwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMC43NSxcbiAgICBcImh1cnJpY2FuZVwiOiA0LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTFcbiAgfSxcbiAgXCIxOTgzXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDIuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxMS4yNVxuICB9LFxuICBcIjE5ODRcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMTEuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDMyXG4gIH0sXG4gIFwiMTk4NVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNCxcbiAgICBcImh1cnJpY2FuZVwiOiAxOC4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQxLjVcbiAgfSxcbiAgXCIxOTg2XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLFxuICAgIFwiaHVycmljYW5lXCI6IDIuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxMi43NVxuICB9LFxuICBcIjE5ODdcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAyLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTIuNVxuICB9LFxuICBcIjE5ODhcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDYuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMi4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI4LjVcbiAgfSxcbiAgXCIxOTg5XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTIuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI2XG4gIH0sXG4gIFwiMTk5MFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMCxcbiAgICBcImh1cnJpY2FuZVwiOiA5LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjUuNVxuICB9LFxuICBcIjE5OTFcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogNy4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDE0LjVcbiAgfSxcbiAgXCIxOTkyXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLjUsXG4gICAgXCJodXJyaWNhbmVcIjogNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDE3XG4gIH0sXG4gIFwiMTk5M1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMC43NSxcbiAgICBcImh1cnJpY2FuZVwiOiA3LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyMC4yNVxuICB9LFxuICBcIjE5OTRcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAsXG4gICAgXCJodXJyaWNhbmVcIjogMSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDE2XG4gIH0sXG4gIFwiMTk5NVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNy4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAzNC41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNjNcbiAgfSxcbiAgXCIxOTk2XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA5LjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDI5LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA1MFxuICB9LFxuICBcIjE5OTdcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogNS41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMThcbiAgfSxcbiAgXCIxOTk4XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA4LFxuICAgIFwiaHVycmljYW5lXCI6IDI3LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0Mi41XG4gIH0sXG4gIFwiMTk5OVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNy41LFxuICAgIFwiaHVycmljYW5lXCI6IDI2Ljc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDdcbiAgfSxcbiAgXCIyMDAwXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDEwLFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMzAuMjVcbiAgfSxcbiAgXCIyMDAxXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLjc1LFxuICAgIFwiaHVycmljYW5lXCI6IDE1Ljc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDJcbiAgfSxcbiAgXCIyMDAyXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLFxuICAgIFwiaHVycmljYW5lXCI6IDguNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0Mi4yNVxuICB9LFxuICBcIjIwMDNcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDcuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxNC41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDAuNVxuICB9LFxuICBcIjIwMDRcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDE0LFxuICAgIFwiaHVycmljYW5lXCI6IDI2Ljc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNTEuNVxuICB9LFxuICBcIjIwMDVcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDE3LjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDM3LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogODIuMjVcbiAgfSxcbiAgXCIyMDA2XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLFxuICAgIFwiaHVycmljYW5lXCI6IDMuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyMS4yNVxuICB9LFxuICBcIjIwMDdcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDYsXG4gICAgXCJodXJyaWNhbmVcIjogMTAuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI1LjI1XG4gIH0sXG4gIFwiMjAwOFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNS41LFxuICAgIFwiaHVycmljYW5lXCI6IDIzLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNjQuNzVcbiAgfSxcbiAgXCIyMDA5XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDUuNzUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxMy4yNVxuICB9LFxuICBcIjIwMTBcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDQuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMjEsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA1MS43NVxuICB9LFxuICBcIjIwMTFcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDQuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxOS4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDYwXG4gIH0sXG4gIFwiMjAxMlwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMC4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMi4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQ4XG4gIH0sXG4gIFwiMjAxM1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMCxcbiAgICBcImh1cnJpY2FuZVwiOiAxLjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxNFxuICB9LFxuICBcIjIwMTRcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTIsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyNC4yNVxuICB9LFxuICBcIjIwMTVcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuNSxcbiAgICBcImh1cnJpY2FuZVwiOiA3LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTkuNzVcbiAgfSxcbiAgXCIyMDE2XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA4Ljc1LFxuICAgIFwiaHVycmljYW5lXCI6IDE2LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDIuNVxuICB9LFxuICBcIjIwMTdcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEyLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDMyLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNTkuNzVcbiAgfSxcbiAgXCIyMDE4XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA0LFxuICAgIFwiaHVycmljYW5lXCI6IDksXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyNC4yNVxuICB9LFxuICBcIjIwMTlcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDYuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTQuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAzOS4yNVxuICB9LFxuICBcIjIwMjBcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDUuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAyOCxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDgxXG4gIH1cbn1cblxuIiwiXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCdcblxuZXhwb3J0IGNsYXNzIEdyYXBoIHtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcsIGRhdGEpIHtcbiAgICB0aGlzLk1JTl9ZRUFSID0gdXRpbC5nZXRNaW5ZZWFyKGRhdGEpXG4gICAgdGhpcy5NQVhfWUVBUiA9IHV0aWwuZ2V0TWF4WWVhcihkYXRhKVxuICAgIHRoaXMuVElDS19MQUJFTF9USFJFU0hPTEQgPSBjb25maWcuVElDS19MQUJFTF9USFJFU0hPTERcbiAgICB0aGlzLlRJQ0tfTEFCRUxfU1RFUCA9IGNvbmZpZy5USUNLX0xBQkVMX1NURVBcbiAgICB0aGlzLlRPT0xUSVBfV0lEVEggPSBjb25maWcuVE9PTFRJUF9XSURUSFxuICAgIHRoaXMuVE9PTFRJUF9IRUlHSFQgPSBjb25maWcuVE9PTFRJUF9IRUlHSFRcblxuICAgIHRoaXMuZGF0YSA9IGRhdGFcbiAgICB0aGlzLnRpdGxlID0gY29uZmlnLnRpdGxlXG4gICAgdGhpcy55QXhpc1RpdGxlID0gY29uZmlnLnlBeGlzVGl0bGVcbiAgICB0aGlzLnllYXJzID0gT2JqZWN0LmtleXMoZGF0YSkubWFwKGQgPT4gcGFyc2VJbnQoZCkpXG4gICAgdGhpcy55ZWFyU3RhcnQgPSBjb25maWcueWVhclN0YXJ0XG4gICAgdGhpcy55ZWFyRW5kID0gY29uZmlnLnllYXJFbmRcbiAgICB0aGlzLnN0b3JtVHlwZXMgPSBjb25maWcuc3Rvcm1UeXBlc1xuICAgIHRoaXMubWFyZ2luID0gY29uZmlnLm1hcmdpblxuICAgIHRoaXMud2lkdGggPSBjb25maWcud2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IGNvbmZpZy5oZWlnaHRcbiAgICB0aGlzLnBsb3QgPSB0aGlzLmluaXRQbG90KClcbiAgICB0aGlzLmRhdGFzZXRzID0gdGhpcy5pbml0RGF0YXNldHMoT2JqZWN0LmtleXMoY29uZmlnLnN0b3JtVHlwZXMpKVxuICAgIHRoaXMueCA9IHRoaXMuaW5pdFhTY2FsZSgpXG4gICAgdGhpcy55ID0gdGhpcy5pbml0WVNjYWxlKClcblxuICAgIC8vIEluc2VydCBTVkcgZWxlbWVudHNcblxuICAgIC8vIFNWRyBlbGVtZW50cyBhcmUgcGFpbnRlZCBpbiB0aGUgb3JkZXIgdGhleSBhcmUgaW5zZXJ0ZWQsXG4gICAgLy8gc28gd2UgYWRkIHRoZSBheGVzIGFuZCB0b29sdGlwcyBsYXN0IHNvIHRoZXkgc2hvdyB1cCBvdmVyIHRoZSBiYXJzXG4gICAgLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9yZW5kZXIuaHRtbCNSZW5kZXJpbmdPcmRlclxuXG4gICAgLy8gSW5pdGlhbGl6ZSBkYXRhIGJhcnMgd2l0aCB6ZXJvIGhlaWdodFxuICAgIE9iamVjdC5rZXlzKGNvbmZpZy5zdG9ybVR5cGVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICB0aGlzLmluaXRCYXJzKGtleSlcbiAgICB9KVxuXG4gICAgLy8gRHJhdyB0aGUgYXhlc1xuICAgIHRoaXMueEF4aXMgPSB0aGlzLmFwcGVuZFhBeGlzKClcbiAgICB0aGlzLmluaXRYQXhpcygpXG4gICAgdGhpcy5zZXRZQXhpc1RpdGxlKClcbiAgICB0aGlzLnlBeGlzID0gdGhpcy5pbml0WUF4aXMoKVxuXG4gICAgLy8gRHJhdyB0aGUgdG9vbHRpcHNcbiAgICBPYmplY3Qua2V5cyhjb25maWcuc3Rvcm1UeXBlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgdGhpcy5pbml0VG9vbHRpcHMoa2V5KVxuICAgIH0pXG5cbiAgICAvLyBTaG93IHRoZSBiYXJzIGZvciBpbml0aWFsbHkgYWN0aXZhdGVkIHN0b3JtIHR5cGVzXG4gICAgY29uc3QgaW5pdFN0b3JtVHlwZXMgPSBPYmplY3Qua2V5cyh0aGlzLnN0b3JtVHlwZXMpLmZpbHRlcihrZXkgPT4gdGhpcy5zdG9ybVR5cGVzW2tleV0uYWN0aXZlKVxuICAgIGluaXRTdG9ybVR5cGVzLmZvckVhY2goa2V5ID0+IHRoaXMuc2hvd0JhcnMoa2V5KSlcblxuICB9XG5cbiAgc2V0WUF4aXNUaXRsZSgpIHtcbiAgICB0aGlzLnBsb3QuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdpZCcsICd5LWF4aXMtdGl0bGUnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGByb3RhdGUoLTkwKSB0cmFuc2xhdGUoLSR7dGhpcy5oZWlnaHQvNX0sIDMwKWApXG4gICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC5odG1sKHRoaXMueUF4aXNUaXRsZSlcbiAgfVxuXG4gIGluaXRQbG90KCkge1xuICAgIHJldHVybiBkMy5zZWxlY3QoJyNncmFwaCcpXG4gICAgICAuYXR0cignd2lkdGgnLCB0aGlzLndpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0KVxuICB9XG5cbiAgZ2V0WERvbWFpbigpIHtcbiAgICByZXR1cm4gWy4uLkFycmF5KHRoaXMueWVhckVuZC10aGlzLnllYXJTdGFydCsxKS5rZXlzKCldLm1hcChkID0+IGQrdGhpcy55ZWFyU3RhcnQpXG4gIH1cblxuICBpbml0WFNjYWxlKCkge1xuICAgIHJldHVybiBkMy5zY2FsZUJhbmQoKVxuICAgICAgLmRvbWFpbih0aGlzLmdldFhEb21haW4oKSlcbiAgICAgIC5yYW5nZShbdGhpcy5tYXJnaW4ubGVmdCwgdGhpcy53aWR0aCAtIHRoaXMubWFyZ2luLnJpZ2h0XSlcbiAgfVxuXG4gIGluaXRZU2NhbGUoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIHRoaXMuY2FsY01heCgpXSlcbiAgICAgIC5yYW5nZShbdGhpcy5oZWlnaHQgLSB0aGlzLm1hcmdpbi5ib3R0b20sIHRoaXMubWFyZ2luLnRvcF0pXG4gIH1cblxuICBhcHBlbmRYQXhpcygpIHtcbiAgICByZXR1cm4gdGhpcy5wbG90LmFwcGVuZCgnZycpICBcbiAgICAgIC5hdHRyKCdpZCcsICd4LWF4aXMnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwgJHt0aGlzLmhlaWdodCAtIHRoaXMubWFyZ2luLmJvdHRvbX0pYClcbiAgfVxuXG4gIHJlbW92ZVhBeGlzKCkge1xuICAgIGQzLnNlbGVjdCgnI3gtYXhpcycpLnJlbW92ZSgpXG4gIH1cblxuICBpbml0WEF4aXMoKSB7XG4gICAgdGhpcy54QXhpcy5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy54KS50aWNrU2l6ZU91dGVyKDApKVxuICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgICAgLmF0dHIoJ2R4JywgJy0uNWVtJylcbiAgICAgICAgLmF0dHIoJ2R5JywgJy4xNWVtJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICdyb3RhdGUoLTY1KScpXG4gICAgICAgIC5odG1sKChkLCBpLCBub2RlcykgPT4ge1xuICAgICAgICAgIGlmIChub2Rlcy5sZW5ndGggPiB0aGlzLlRJQ0tfTEFCRUxfVEhSRVNIT0xEKSB7XG4gICAgICAgICAgICBpZiAoZCAlIHRoaXMuVElDS19MQUJFTF9TVEVQID09IDApIHJldHVybiBkXG4gICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGRcbiAgICAgICAgfSlcbiAgfVxuXG4gIGluaXRZQXhpcygpIHtcbiAgICByZXR1cm4gdGhpcy5wbG90LmFwcGVuZCgnZycpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3RoaXMubWFyZ2luLmxlZnR9LCAwKWApXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh0aGlzLnkpKVxuICB9XG5cblxuICBjYWxjQWN0aXZlWWVhcnMoKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZGF0YSlcbiAgICBjb25zdCB5ZWFycyA9IFtdXG4gICAgZm9yIChsZXQgZCBvZiBrZXlzKSB7XG4gICAgICBjb25zdCB5ciA9IHBhcnNlSW50KGQpXG4gICAgICBpZiAoeXIgPCB0aGlzLnllYXJTdGFydCB8fCB5ciA+IHRoaXMueWVhckVuZCkgY29udGludWVcbiAgICAgIHllYXJzLnB1c2goeXIpXG4gICAgfVxuICAgIHJldHVybiB5ZWFyc1xuICB9XG5cbiAgaW5pdERhdGFzZXRzKCkge1xuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLnN0b3JtVHlwZXMpKSB7XG4gICAgICBjb25zdCBkYXRhc2V0ID0gW11cbiAgICAgIGZvciAobGV0IHllYXIgb2YgdGhpcy55ZWFycykge1xuICAgICAgICBkYXRhc2V0LnB1c2goeyAneWVhcic6IHllYXIsICd2YWx1ZSc6IHRoaXMuZGF0YVtTdHJpbmcoeWVhcildW2tleV0gfSlcbiAgICAgIH1cbiAgICAgIHRoaXMuc3Rvcm1UeXBlc1trZXldLmRhdGFzZXQgPSBkYXRhc2V0XG4gICAgfVxuICB9XG5cbiAgY2FsY01heCgpIHtcbiAgICBsZXQgbWF4ID0gMFxuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLnN0b3JtVHlwZXMpKSB7XG4gICAgICBmb3IgKGxldCBkIG9mIHRoaXMuc3Rvcm1UeXBlc1trZXldLmRhdGFzZXQpIHtcbiAgICAgICAgbWF4ID0gZC52YWx1ZSA+IG1heCA/IGQudmFsdWUgOiBtYXhcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUm91bmQgdXAgYnkgMTBcbiAgICByZXR1cm4gcGFyc2VJbnQobWF4IC8gMTApICogMTAgKyAxMFxuICB9XG5cbiAgZ2V0QWN0aXZlRGF0YShrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9ybVR5cGVzW2tleV0uZGF0YXNldC5maWx0ZXIoZCA9PiB7XG4gICAgICByZXR1cm4gZC55ZWFyID49IHRoaXMueWVhclN0YXJ0ICYmIGQueWVhciA8PSB0aGlzLnllYXJFbmRcbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlWWVhclN0YXJ0KG5ld1llYXJTdGFydCkge1xuICAgIHRoaXMueWVhclN0YXJ0ID0gbmV3WWVhclN0YXJ0XG4gICAgdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgdXBkYXRlWWVhckVuZChuZXdZZWFyRW5kKSB7XG4gICAgdGhpcy55ZWFyRW5kID0gbmV3WWVhckVuZFxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnguZG9tYWluKHRoaXMuZ2V0WERvbWFpbigpKVxuICAgIHRoaXMucmVtb3ZlVG9vbHRpcHMoKVxuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLnN0b3JtVHlwZXMpKSB7XG4gICAgICB0aGlzLnJlbW92ZUJhcnMoa2V5KVxuICAgICAgdGhpcy5pbml0QmFycyhrZXkpXG4gICAgfVxuICAgIGZvciAobGV0IGtleSBvZiB0aGlzLmdldEFjdGl2ZVN0b3JtVHlwZXMoKSkge1xuICAgICAgdGhpcy5zaG93QmFycyhrZXkpXG4gICAgfVxuICAgIHRoaXMucmVtb3ZlWEF4aXMoKVxuICAgIHRoaXMueEF4aXMgPSB0aGlzLmFwcGVuZFhBeGlzKClcbiAgICB0aGlzLmluaXRYQXhpcygpXG4gICAgdGhpcy55QXhpcyA9IHRoaXMuaW5pdFlBeGlzKClcbiAgICAvLyBLZWVwIHNlcGFyYXRlIGxvb3AgZm9yIGNvcnJlY3QgZHJhd2luZyBvcmRlclxuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLnN0b3JtVHlwZXMpKSB7XG4gICAgICB0aGlzLmluaXRUb29sdGlwcyhrZXkpXG4gICAgfVxuICB9XG5cbiAgZ2V0QWN0aXZlU3Rvcm1UeXBlcygpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5zdG9ybVR5cGVzKS5maWx0ZXIoa2V5ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnN0b3JtVHlwZXNba2V5XS5hY3RpdmVcbiAgICB9KVxuICB9XG5cbiAgaW5pdEJhcnMoa2V5KSB7XG4gICAgY29uc3QgZGF0YXNldCA9IHRoaXMuZ2V0QWN0aXZlRGF0YShrZXkpXG4gICAgY29uc3QgYmFycyA9IHRoaXMucGxvdC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2RhdGEtYmFycycpXG4gICAgICAuYXR0cignaWQnLCBgZGF0YS1iYXJzLS0ke2tleX1gKVxuICAgICAgLnNlbGVjdEFsbCgncmVjdCcpXG4gICAgICAgIC5kYXRhKGRhdGFzZXQpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2JhcicpXG4gICAgICAgICAgLmF0dHIoJ2RhdGEteWVhcicsIGQgPT4gZC55ZWFyKVxuICAgICAgICAgIC5hdHRyKCdkYXRhLXZhbHVlJywgZCA9PiBkLnZhbHVlKVxuXG4gICAgYmFycy5hdHRyKCdoZWlnaHQnLCAwKVxuICAgICAgICAuYXR0cignd2lkdGgnLCB0aGlzLnguYmFuZHdpZHRoKCkpXG4gICAgICAgIC5hdHRyKCd4JywgZCA9PiB0aGlzLngoZC55ZWFyKSlcbiAgICAgICAgLmF0dHIoJ3knLCB0aGlzLnkoMCkpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgdGhpcy5zdG9ybVR5cGVzW2tleV0uZmlsbClcbiAgICAgICAgLm9uKCdtb3VzZWVudGVyJywgZCA9PiB7XG4gICAgICAgICAgdGhpcy50b2dnbGVUb29sdGlwKGtleSwgZC55ZWFyLCB0cnVlKVxuICAgICAgICAgIGNvbnN0IHdoZXJlID0gdXRpbC53aGVyZUZhY3RvcnkoZC55ZWFyLCB0aGlzLnN0b3JtVHlwZXNba2V5XVsnd2hlcmUnXSlcbiAgICAgICAgICB0aGlzLmxheWVyLnNldFdoZXJlKHdoZXJlKVxuICAgICAgICAgIHRoaXMubGF5ZXIuc2V0U3R5bGUoZmVhdHVyZSA9PiB7XG4gICAgICAgICAgICBsZXQgYztcbiAgICAgICAgICAgIGxldCBwcm9wID0gZmVhdHVyZS5wcm9wZXJ0aWVzLlVTQV9XSU5EXG4gICAgICAgICAgICBpZiAocHJvcCA8IDY0ICYmIHByb3AgPj0gMzQpIGMgPSB0aGlzLnN0b3JtVHlwZXNbJ25hbWVkX3N0b3JtJ11bJ2ZpbGwnXSBcbiAgICAgICAgICAgIGlmIChwcm9wID49IDY0ICYmIHByb3AgPCA5NikgYyA9IHRoaXMuc3Rvcm1UeXBlc1snaHVycmljYW5lJ11bJ2ZpbGwnXSBcbiAgICAgICAgICAgIGlmIChwcm9wID49IDk2KSBjID0gdGhpcy5zdG9ybVR5cGVzWydtYWpvcl9odXJyaWNhbmUnXVsnZmlsbCddXG4gICAgICAgICAgICBpZiAoIWMpIHsgYyA9ICd3aGl0ZScgfVxuICAgICAgICAgICAgcmV0dXJuIHsgY29sb3I6IGMsIG9wYWNpdHk6IDEsIHdlaWdodDogNSB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW91dCcsIGQgPT4ge1xuICAgICAgICAgIHRoaXMubGF5ZXIuc2V0V2hlcmUoJzE9MCcpXG4gICAgICAgICAgdGhpcy50b2dnbGVUb29sdGlwKGtleSwgZC55ZWFyLCBmYWxzZSlcbiAgICAgICAgfSlcblxuICAgIHRoaXMuc3Rvcm1UeXBlc1trZXldLmJhcnMgPSBiYXJzXG4gIH1cblxuICBjYWxjVG9vbHRpcFgoZCkge1xuICAgIGNvbnN0IG5vcm1hbCA9IHRoaXMueChkLnllYXIpICsgdGhpcy54LmJhbmR3aWR0aCgpXG4gICAgaWYgKG5vcm1hbCArIHRoaXMuVE9PTFRJUF9XSURUSCA8IHRoaXMueC5yYW5nZSgpWzFdKSByZXR1cm4gbm9ybWFsXG4gICAgcmV0dXJuIG5vcm1hbCAtIHRoaXMuVE9PTFRJUF9XSURUSCAtIHRoaXMueC5iYW5kd2lkdGgoKVxuICB9XG5cbiAgY2FsY1Rvb2x0aXBZKGQpIHtcbiAgICAvLyBUT0RPXG4gIH1cblxuICByZW1vdmVUb29sdGlwcygpIHtcbiAgICBkMy5zZWxlY3RBbGwoJy5kYXRhLXRvb2x0aXBzJykucmVtb3ZlKClcbiAgfVxuXG4gIHRvZ2dsZVRvb2x0aXAoa2V5LCB5ZWFyLCBzaG93VG9vbHRpcCkge1xuICAgIGQzLnNlbGVjdChgI2RhdGEtdG9vbHRpcC0tJHtrZXl9LS0ke3llYXJ9LS1yZWN0YClcbiAgICAgIC5hdHRyKCdzdHlsZScsIHNob3dUb29sdGlwID8gJycgOiAnZGlzcGxheTogbm9uZScpXG4gICAgICAucmFpc2UoKVxuICAgIGQzLnNlbGVjdChgI2RhdGEtdG9vbHRpcC0tJHtrZXl9LS0ke3llYXJ9LS10ZXh0YClcbiAgICAgIC5hdHRyKCdzdHlsZScsIHNob3dUb29sdGlwID8gJycgOiAnZGlzcGxheTogbm9uZScpXG4gICAgICAucmFpc2UoKVxuICB9XG5cbiAgaW5pdFRvb2x0aXBzKGtleSkge1xuICAgIGNvbnN0IGRhdGFzZXQgPSB0aGlzLmdldEFjdGl2ZURhdGEoa2V5KVxuICAgIGNvbnN0IHRvb2x0aXBzID0gdGhpcy5wbG90LmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZGF0YS10b29sdGlwcycpXG4gICAgICAuYXR0cignaWQnLCBgZGF0YS10b29sdGlwcy0tJHtrZXl9YClcbiAgICAgIC5zZWxlY3RBbGwoJ3JlY3QnKVxuICAgICAgICAuZGF0YShkYXRhc2V0KVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgLmF0dHIoJ2lkJywgZCA9PiBgZGF0YS10b29sdGlwLS0ke2tleX0tLSR7ZC55ZWFyfS0tcmVjdGApXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCAndG9vbHRpcCcpXG4gICAgICAgICAgICAuYXR0cigneCcsIGQgPT4gdGhpcy5jYWxjVG9vbHRpcFgoZCkpXG4gICAgICAgICAgICAuYXR0cigneScsIGQgPT4gdGhpcy55KGQudmFsdWUpIC0gdGhpcy5UT09MVElQX0hFSUdIVClcbiAgICAgICAgICAgIC5hdHRyKCdzdHlsZScsICdkaXNwbGF5OiBub25lOycpXG4gICAgICAgICAgICAuYXR0cignZGF0YS15ZWFyJywgZCA9PiBkLnllYXIpXG4gICAgICAgICAgICAuYXR0cignZGF0YS12YWx1ZScsIGQgPT4gZC52YWx1ZSlcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJylcbiAgICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCB0aGlzLnN0b3JtVHlwZXNba2V5XS5maWxsKVxuICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsICcxLjUnKVxuXG4gICAgY29uc3QgdG9vbHRpcF90ZXh0ID0gdGhpcy5wbG90LnNlbGVjdChgI2RhdGEtdG9vbHRpcHMtLSR7a2V5fWApXG4gICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLmRhdGEoZGF0YXNldClcbiAgICAgICAgICAuZW50ZXIodG9vbHRpcHMpXG4gICAgICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgICAgLmF0dHIoJ2lkJywgZCA9PiBgZGF0YS10b29sdGlwLS0ke2tleX0tLSR7ZC55ZWFyfS0tdGV4dGApXG4gICAgICAgICAgICAgIC5hdHRyKCdzdHlsZScsICdkaXNwbGF5OiBub25lJylcbiAgICAgICAgICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0JylcbiAgICAgICAgICAgICAgLmF0dHIoJ3gnLCBkID0+IHRoaXMuY2FsY1Rvb2x0aXBYKGQpKVxuICAgICAgICAgICAgICAuYXR0cigneScsIGQgPT4gdGhpcy55KGQudmFsdWUpKVxuXG4gICAgY29uc3QgdGV4dF9tYXJnaW4gPSB7IGxlZnQ6IDgsIHRvcDogOCB9XG5cbiAgICB0b29sdGlwX3RleHQuYXBwZW5kKCd0c3BhbicpXG4gICAgICAuYXR0cigneCcsIGQgPT4gdGhpcy5jYWxjVG9vbHRpcFgoZCkgKyB0ZXh0X21hcmdpbi5sZWZ0KVxuICAgICAgLmF0dHIoJ3knLCBkID0+IHRoaXMueShkLnZhbHVlKSAtIHRoaXMuVE9PTFRJUF9IRUlHSFQvMiAtIHRleHRfbWFyZ2luLnRvcClcbiAgICAgIC5odG1sKGQgPT4gYFllYXI6ICR7ZC55ZWFyfWApXG5cbiAgICB0b29sdGlwX3RleHQuYXBwZW5kKCd0c3BhbicpXG4gICAgICAuYXR0cigneCcsIGQgPT4gdGhpcy5jYWxjVG9vbHRpcFgoZCkgKyB0ZXh0X21hcmdpbi5sZWZ0KVxuICAgICAgLmF0dHIoJ3knLCBkID0+IHRoaXMueShkLnZhbHVlKSAtIHRleHRfbWFyZ2luLnRvcClcbiAgICAgIC5odG1sKGQgPT4gYCR7dGhpcy5zdG9ybVR5cGVzW2tleV0udG9vbHRpcH06ICR7ZC52YWx1ZX1gKVxuXG4gICAgdGhpcy5zdG9ybVR5cGVzW2tleV0udG9vbHRpcHMgPSB0b29sdGlwc1xuICB9XG5cbiAgc2hvd0JhcnMoa2V5KSB7XG4gICAgdGhpcy5zdG9ybVR5cGVzW2tleV0uYmFycy50cmFuc2l0aW9uKDEwMDApXG4gICAgICAuYXR0cigneScsIGQgPT4gdGhpcy55KGQudmFsdWUpKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIGQgPT4gdGhpcy55KDApIC0gdGhpcy55KGQudmFsdWUpKVxuICB9XG5cbiAgaGlkZUJhcnMoa2V5KSB7XG4gICAgdGhpcy5zdG9ybVR5cGVzW2tleV0uYmFycy50cmFuc2l0aW9uKDEwMDApXG4gICAgICAuYXR0cigneScsIGQgPT4gdGhpcy55KDApKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDApXG4gIH1cblxuICByZW1vdmVCYXJzKGtleSkge1xuICAgIHRoaXMuaGlkZUJhcnMoa2V5KVxuICAgIHRoaXMuc3Rvcm1UeXBlc1trZXldLmJhcnMucmVtb3ZlKClcbiAgICB0aGlzLnN0b3JtVHlwZXNba2V5XS5iYXJzID0gW11cbiAgfVxuXG59XG5cbiIsImltcG9ydCAqIGFzIGNvbmZpZyBmcm9tICcuL2NvbmZpZydcblxuZXhwb3J0IGNvbnN0IHdoZXJlRmFjdG9yeSA9ICh5ZWFyLCBzdG9ybVdoZXJlKSA9PiBgWUVBUj0ke3llYXJ9IEFORCAke3N0b3JtV2hlcmV9YFxuXG5leHBvcnQgY29uc3QgZ2V0TWF4WWVhciA9IChkYXRhKSA9PiB7XG4gIGxldCBtYXggPSAwXG4gIGZvciAobGV0IGsgb2YgT2JqZWN0LmtleXMoZGF0YSkpIHtcbiAgICBrID0gcGFyc2VJbnQoaylcbiAgICBpZiAoayA+IG1heCkgeyBtYXggPSBrIH1cbiAgfVxuICByZXR1cm4gbWF4XG59XG5cbmV4cG9ydCBjb25zdCBnZXRNaW5ZZWFyID0gKGRhdGEpID0+IHtcbiAgbGV0IG1pbiA9IDEwMDAwXG4gIGZvciAobGV0IGsgb2YgT2JqZWN0LmtleXMoZGF0YSkpIHtcbiAgICBrID0gcGFyc2VJbnQoaylcbiAgICBpZiAoayA8IG1pbikgeyBtaW4gPSBrIH1cbiAgfVxuICByZXR1cm4gbWluXG59XG5cbmV4cG9ydCBjb25zdCBvcHRpb25GYWN0b3J5ID0gZnVuY3Rpb24gKHZhbHVlLCBpbm5lckhUTUwpIHtcbiAgICB2YXIgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0LnZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICBvcHQuaW5uZXJIVE1MID0gU3RyaW5nKGlubmVySFRNTCk7XG4gICAgcmV0dXJuIG9wdDtcbn1cblxuXG5jb25zdCByZW1vdmVDaGlsZE5vZGVzID0gKHBhcmVudCkgPT4ge1xuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldHVwWWVhclNlbGVjdCA9IChsYWJlbCwgeWVhclNlbGVjdGVkLCBtaW5ZZWFyLCBtYXhZZWFyKSA9PiB7XG4gIGNvbnN0IHllYXJTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgeWVhci0ke2xhYmVsfS1zZWxlY3RgKVxuICByZW1vdmVDaGlsZE5vZGVzKHllYXJTZWxlY3QpXG4gIGxldCBzZWxlY3RlZEluZGV4O1xuICBsZXQgaW5kZXggPSAwO1xuICBmb3IgKHZhciB5ID0gbWluWWVhcjsgeTw9bWF4WWVhcjsgeSsrKXtcbiAgICAgIGlmIChwYXJzZUludCh5ZWFyU2VsZWN0ZWQpID09IHkpIHsgc2VsZWN0ZWRJbmRleCA9IGluZGV4IH1cbiAgICAgIHllYXJTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uRmFjdG9yeShTdHJpbmcoeSksIFN0cmluZyh5KSkpXG4gICAgICBpbmRleCsrO1xuICB9XG4gIHllYXJTZWxlY3Qub3B0aW9ucy5zZWxlY3RlZEluZGV4PXNlbGVjdGVkSW5kZXhcbiAgcmV0dXJuIHllYXJTZWxlY3Rcbn1cblxuXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwgTmFycm93LCBzZXJpZjtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDEyMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI21hcC1jb250YWluZXIge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xcbn1cXG5cXG4jbWFwIHtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNncmFwaC1jb250YWluZXIge1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uZGF0YS10b29sdGlwcyAudG9vbHRpcCB7XFxuICAgIHdpZHRoOiAxODBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4udGljayB0ZXh0IHtcXG4gICAgZmlsbDogIzU5NTk1OTtcXG59XFxuXFxuI3ktYXhpcy10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxufVxcblxcbiNwbG90IC50aWNrIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuI2dyYXBoLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNncmFwaC10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI21lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbn1cXG5cXG4jbWVudSBkaXYge1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiNzaG93LXN0b3JtLXR5cGVzIHtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNzaG93LXN0b3JtLXR5cGVzIGxhYmVsIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogNXB4OyBcXG59XFxuXFxuI3llYXItc2VsZWN0IHtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDVix1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCBOYXJyb3csIHNlcmlmO1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMTIwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jbWFwLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHBhZGRpbmctbGVmdDogMSU7XFxufVxcblxcbiNtYXAge1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI2dyYXBoLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5kYXRhLXRvb2x0aXBzIC50b29sdGlwIHtcXG4gICAgd2lkdGg6IDE4MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbi50aWNrIHRleHQge1xcbiAgICBmaWxsOiAjNTk1OTU5O1xcbn1cXG5cXG4jeS1heGlzLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuXFxuI3Bsb3QgLnRpY2sge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4jZ3JhcGgtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2dyYXBoLXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jbWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxufVxcblxcbiNtZW51IGRpdiB7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuI3Nob3ctc3Rvcm0tdHlwZXMge1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3Nob3ctc3Rvcm0tdHlwZXMgbGFiZWwge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiA1cHg7IFxcbn1cXG5cXG4jeWVhci1zZWxlY3Qge1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbmltcG9ydCAnLi9pbmRleC5jc3MnXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZydcbmltcG9ydCB7IGRhdGEgfSAgZnJvbSAnLi9kYXRhJ1xuaW1wb3J0IHsgR3JhcGggfSBmcm9tICcuL2dyYXBoJ1xuXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCdcblxuY29uc3QgbWluWWVhciA9IHV0aWwuZ2V0TWluWWVhcihkYXRhKVxuY29uc3QgbWF4WWVhciA9IHV0aWwuZ2V0TWF4WWVhcihkYXRhKVxuXG5jb25zdCBncmFwaCA9IG5ldyBHcmFwaChjb25maWcsIGRhdGEpXG5cbmNvbnN0IGNoZWNrYm94SWRzID0ge1xuICAnbmFtZWRfc3Rvcm0nOiAnc2hvdy1uYW1lZC1zdG9ybXMnLFxuICAnaHVycmljYW5lJzogJ3Nob3ctbWlub3ItaHVycmljYW5lcycsXG4gICdtYWpvcl9odXJyaWNhbmUnOiAnc2hvdy1tYWpvci1odXJyaWNhbmVzJ1xufVxuXG5mb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoY2hlY2tib3hJZHMpKSB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2hlY2tib3hJZHNba2V5XSlcbiAgZWwuY2hlY2tlZCA9IGNvbmZpZy5zdG9ybVR5cGVzW2tleV0uYWN0aXZlXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICBncmFwaC5zdG9ybVR5cGVzW2tleV0uYWN0aXZlID0gdHJ1ZVxuICAgICAgZ3JhcGguc2hvd0JhcnMoa2V5KVxuICAgIH0gZWxzZSB7XG4gICAgICBncmFwaC5zdG9ybVR5cGVzW2tleV0uYWN0aXZlID0gZmFsc2VcbiAgICAgIGdyYXBoLmhpZGVCYXJzKGtleSlcbiAgICB9XG4gIH0pXG59XG5cbmxldCBzZWxlY3RlZFN0YXJ0WWVhciA9IGdyYXBoLnllYXJTdGFydFxubGV0IHNlbGVjdGVkRW5kWWVhciA9IGdyYXBoLnllYXJFbmRcblxuY29uc3QgeWVhclN0YXJ0U2VsZWN0ID0gdXRpbC5zZXR1cFllYXJTZWxlY3QoJ3N0YXJ0Jywgc2VsZWN0ZWRTdGFydFllYXIsIG1pblllYXIsIG1heFllYXIpXG5jb25zdCB5ZWFyRW5kU2VsZWN0ID0gdXRpbC5zZXR1cFllYXJTZWxlY3QoJ2VuZCcsIHNlbGVjdGVkRW5kWWVhciwgbWluWWVhciwgbWF4WWVhcilcblxueWVhclN0YXJ0U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgc2VsZWN0ZWRTdGFydFllYXIgPSBwYXJzZUludCh5ZWFyU3RhcnRTZWxlY3QudmFsdWUpXG4gIGdyYXBoLnVwZGF0ZVllYXJTdGFydChzZWxlY3RlZFN0YXJ0WWVhcilcbiAgdXRpbC5zZXR1cFllYXJTZWxlY3QoJ2VuZCcsIHNlbGVjdGVkRW5kWWVhciwgc2VsZWN0ZWRTdGFydFllYXIsIGdyYXBoLk1BWF9ZRUFSKVxufSlcblxueWVhckVuZFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gIHNlbGVjdGVkRW5kWWVhciA9IHBhcnNlSW50KHllYXJFbmRTZWxlY3QudmFsdWUpXG4gIGdyYXBoLnVwZGF0ZVllYXJFbmQoc2VsZWN0ZWRFbmRZZWFyKVxuICB1dGlsLnNldHVwWWVhclNlbGVjdCgnc3RhcnQnLCBzZWxlY3RlZFN0YXJ0WWVhciwgZ3JhcGguTUlOX1lFQVIsIHNlbGVjdGVkRW5kWWVhcilcbn0pXG5cbi8vIE1hcFxuLy8gV2hlcmUgY2xhdXNlIGdlbmVyYXRvclxuXG5jb25zdCBmaXRCb3VuZHMgPSBbXG4gIHtsYXQ6IDUwLjAsIGxuZzogLTYwfSxcbiAge2xhdDogNSwgbG5nOiAtMTAwfVxuXVxuY29uc3QgbWFwID0gTC5tYXAoJ21hcCcpLmZpdEJvdW5kcyhmaXRCb3VuZHMpXG5cbmNvbnN0IGJhc2VtYXAgPSBMLmVzcmkuYmFzZW1hcExheWVyKCdTdHJlZXRzJykuYWRkVG8obWFwKTtcblxud2luZG93Lm1hcCA9IG1hcFxuXG4vLyBkdW1teSBmZWF0dXJlIGZvciBsb2dnaW5nXG4vL2xldCBmO1xuXG5jb25zdCBsYXllciA9IEwuZXNyaS5mZWF0dXJlTGF5ZXIoe1xuICB1cmw6ICdodHRwczovL3NlcnZpY2VzMi5hcmNnaXMuY29tL0ZpYVBBNGdhMGlRS2R1djMvQXJjR0lTL3Jlc3Qvc2VydmljZXMvSUJUckFDU19BTExfbGlzdF92MDRyMDBfbGluZXNfMS9GZWF0dXJlU2VydmVyLzAnLFxuICBzdHlsZTogZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAvL2lmICghZikgeyBmID0gZmVhdHVyZTsgIGNvbnNvbGUubG9nKGZlYXR1cmUpIH1cbiAgICBsZXQgYztcbiAgICBsZXQgcHJvcCA9IGZlYXR1cmUucHJvcGVydGllcy5VU0FfV0lORFxuICAgIGlmIChwcm9wIDwgNjQgJiYgcHJvcCA+PSAzNCkgeyBjID0gY29uZmlnLnN0b3JtVHlwZXNbJ25hbWVkX3N0b3JtJ11bJ2ZpbGwnXSB9XG4gICAgaWYgKHByb3AgPj0gNjQgJiYgcHJvcCA8IDk2KSB7IGMgPSBjb25maWcuc3Rvcm1UeXBlc1snaHVycmljYW5lJ11bJ2ZpbGwnXSB9XG4gICAgaWYgKHByb3AgPj0gOTYpIHsgYyA9IGNvbmZpZy5zdG9ybVR5cGVzWydtYWpvcl9odXJyaWNhbmUnXVsnZmlsbCddIH07XG4gICAgaWYgKCFjKSB7IGMgPSAnd2hpdGUnIH1cbiAgICByZXR1cm4geyBjb2xvcjogYywgb3BhY2l0eTogMSwgd2VpZ2h0OiA1IH1cbiAgfSxcbiAgd2hlcmU6ICcxPTAnXG59KS5hZGRUbyhtYXApO1xuXG5ncmFwaC5sYXllciA9IGxheWVyXG5cbi8qXG5jb25zdCBmZWF0dXJlX2luZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVhdHVyZS1pbmZvJylcblxubGF5ZXIub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChldmVudCkge1xuICBmZWF0dXJlX2luZm8uaW5uZXJIVE1MID0gcmVuZGVyX2ZlYXR1cmUoZXZlbnQubGF5ZXIuZmVhdHVyZSlcbn0pXG5cbmxheWVyLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChldmVudCkge1xuICBmZWF0dXJlX2luZm8uaW5uZXJIVE1MID0gJ0hvdmVyIG92ZXIgYSBzdG9ybSB0cmFjayBmb3IgbW9yZSBkYXRhJ1xufSlcblxuY29uc3QgcmVuZGVyX2ZlYXR1cmUgPSBmID0+IHtcbiAgY29uc3QgcHJvcHMgPSBmLnByb3BlcnRpZXNcbiAgY29uc3QgZGlzcGxheV9wcm9wcyA9IFsgJ0xBVCcsICdMT04nLCAnVVNBX1dJTkQnLCAneWVhcicsICdtb250aCcsICdkYXknLCAnTkFNRScgXVxuICBjb25zdCByZW5kZXJlZCA9IGBcbiAgICBOYW1lOiAke3Byb3BzWydOQU1FJ119IDxicj5cbiAgICBXaW5kIFNwZWVkOiAke3Byb3BzWydVU0FfV0lORCddfSBrbm90cyA8YnI+XG4gICAgRGF0ZTogJHtwcm9wc1snbW9udGgnXX0vJHtwcm9wc1snZGF5J119LyR7cHJvcHNbJ3llYXInXX0gPGJyPlxuICAgIExhdDogJHtwcm9wc1snTEFUJ119IDxicj5cbiAgICBMb246ICR7cHJvcHNbJ0xPTiddfSA8YnI+XG4gIGBcbiAgcmV0dXJuIHJlbmRlcmVkXG59XG5cbmNvbnN0IHJlbmRlcl9wcm9wID0gKGtleSwgdmFsdWUpID0+IHtcbiAgcmV0dXJuIGAke2tleX06ICR7dmFsdWV9XFxuYFxufVxuXG4qL1xuIl0sIm5hbWVzIjpbImNvbmZpZyIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJ5ZWFyU3RhcnQiLCJ5ZWFyRW5kIiwieUF4aXNUaXRsZSIsInN0b3JtVHlwZXMiLCJUSUNLX0xBQkVMX1RIUkVTSE9MRCIsIlRJQ0tfTEFCRUxfU1RFUCIsIlRPT0xUSVBfSEVJR0hUIiwiVE9PTFRJUF9XSURUSCIsImRhdGEiLCJ1dGlsIiwiR3JhcGgiLCJNSU5fWUVBUiIsImdldE1pblllYXIiLCJNQVhfWUVBUiIsImdldE1heFllYXIiLCJ5ZWFycyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJkIiwicGFyc2VJbnQiLCJwbG90IiwiaW5pdFBsb3QiLCJkYXRhc2V0cyIsImluaXREYXRhc2V0cyIsIngiLCJpbml0WFNjYWxlIiwieSIsImluaXRZU2NhbGUiLCJmb3JFYWNoIiwia2V5IiwiaW5pdEJhcnMiLCJ4QXhpcyIsImFwcGVuZFhBeGlzIiwiaW5pdFhBeGlzIiwic2V0WUF4aXNUaXRsZSIsInlBeGlzIiwiaW5pdFlBeGlzIiwiaW5pdFRvb2x0aXBzIiwiaW5pdFN0b3JtVHlwZXMiLCJmaWx0ZXIiLCJhY3RpdmUiLCJzaG93QmFycyIsImFwcGVuZCIsImF0dHIiLCJodG1sIiwiZDMiLCJzZWxlY3QiLCJBcnJheSIsInNjYWxlQmFuZCIsImRvbWFpbiIsImdldFhEb21haW4iLCJyYW5nZSIsInNjYWxlTGluZWFyIiwiY2FsY01heCIsInJlbW92ZSIsImNhbGwiLCJheGlzQm90dG9tIiwidGlja1NpemVPdXRlciIsInNlbGVjdEFsbCIsInN0eWxlIiwiaSIsIm5vZGVzIiwibGVuZ3RoIiwiYXhpc0xlZnQiLCJ5ciIsInB1c2giLCJkYXRhc2V0IiwieWVhciIsIlN0cmluZyIsIm1heCIsInZhbHVlIiwibmV3WWVhclN0YXJ0IiwidXBkYXRlIiwibmV3WWVhckVuZCIsInJlbW92ZVRvb2x0aXBzIiwicmVtb3ZlQmFycyIsImdldEFjdGl2ZVN0b3JtVHlwZXMiLCJyZW1vdmVYQXhpcyIsImdldEFjdGl2ZURhdGEiLCJiYXJzIiwiZW50ZXIiLCJiYW5kd2lkdGgiLCJmaWxsIiwib24iLCJ0b2dnbGVUb29sdGlwIiwid2hlcmUiLCJ3aGVyZUZhY3RvcnkiLCJsYXllciIsInNldFdoZXJlIiwic2V0U3R5bGUiLCJmZWF0dXJlIiwiYyIsInByb3AiLCJwcm9wZXJ0aWVzIiwiVVNBX1dJTkQiLCJjb2xvciIsIm9wYWNpdHkiLCJ3ZWlnaHQiLCJub3JtYWwiLCJzaG93VG9vbHRpcCIsInJhaXNlIiwidG9vbHRpcHMiLCJjYWxjVG9vbHRpcFgiLCJ0b29sdGlwX3RleHQiLCJ0ZXh0X21hcmdpbiIsInRvb2x0aXAiLCJ0cmFuc2l0aW9uIiwiaGlkZUJhcnMiLCJzdG9ybVdoZXJlIiwiayIsIm1pbiIsIm9wdGlvbkZhY3RvcnkiLCJpbm5lckhUTUwiLCJvcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJyZW1vdmVDaGlsZE5vZGVzIiwicGFyZW50IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwic2V0dXBZZWFyU2VsZWN0IiwibGFiZWwiLCJ5ZWFyU2VsZWN0ZWQiLCJtaW5ZZWFyIiwibWF4WWVhciIsInllYXJTZWxlY3QiLCJnZXRFbGVtZW50QnlJZCIsInNlbGVjdGVkSW5kZXgiLCJpbmRleCIsImFwcGVuZENoaWxkIiwib3B0aW9ucyIsImdyYXBoIiwiY2hlY2tib3hJZHMiLCJlbCIsImNoZWNrZWQiLCJhZGRFdmVudExpc3RlbmVyIiwic2VsZWN0ZWRTdGFydFllYXIiLCJzZWxlY3RlZEVuZFllYXIiLCJ5ZWFyU3RhcnRTZWxlY3QiLCJ5ZWFyRW5kU2VsZWN0IiwidXBkYXRlWWVhclN0YXJ0IiwidXBkYXRlWWVhckVuZCIsImZpdEJvdW5kcyIsImxhdCIsImxuZyIsIkwiLCJiYXNlbWFwIiwiZXNyaSIsImJhc2VtYXBMYXllciIsImFkZFRvIiwid2luZG93IiwiZmVhdHVyZUxheWVyIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==