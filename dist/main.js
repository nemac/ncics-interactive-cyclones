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
      'legend_label': 'Named Storms (>= 34kt)',
      'fill': '#C6DBEF',
      'active': true
    },
    'hurricane': {
      'where': 'USA_WIND>=64 AND USA_WIND<96',
      'label': 'Hurricanes',
      'legend_label': 'Hurricanes (>=64kt)',
      'fill': '#6BAED6',
      'active': true
    },
    'major_hurricane': {
      'where': 'USA_WIND>=96',
      'label': 'Major Hurricanes',
      'legend_label': 'Major Hurricanes (>= 96kt)',
      'fill': '#08519C',
      'active': true
    }
  },
  // Don't label every x-axis tick after this many elements
  TICK_LABEL_THRESHOLD: 30,
  // Only relevant when TICK_LABEL_THRESHOLD is met
  TICK_LABEL_STEP: 5
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

    this.title = config.title;
    this.yAxisTitle = config.yAxisTitle;
    this.data = data;
    this.years = Object.keys(data).map(function (d) {
      return parseInt(d);
    });
    this.MIN_YEAR = _util__WEBPACK_IMPORTED_MODULE_0__.getMinYear(this.data);
    this.MAX_YEAR = _util__WEBPACK_IMPORTED_MODULE_0__.getMaxYear(this.data);
    this.TICK_LABEL_THRESHOLD = config.TICK_LABEL_THRESHOLD;
    this.TICK_LABEL_STEP = config.TICK_LABEL_STEP;
    this.yearStart = config.yearStart;
    this.yearEnd = config.yearEnd;
    this.stormTypes = config.stormTypes;
    this.margin = config.margin;
    this.width = config.width;
    this.height = config.height;
    this.plot = this.initPlot();
    this.datasets = this.initDatasets(Object.keys(config.stormTypes));
    this.x = this.initXScale();
    this.y = this.initYScale();
    this.yAxis = this.initYAxis();
    this.xAxis = this.appendXAxis();
    this.initXAxis();
    this.setYAxisTitle();
    Object.keys(config.stormTypes).forEach(function (key) {
      return _this.initBars(key);
    });
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
      return this.plot.append('g').attr('transform', "translate(0, ".concat(this.height - this.margin.bottom, ")"));
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
      this.initXAxis(true);

      for (var _i4 = 0, _Object$keys3 = Object.keys(this.stormTypes); _i4 < _Object$keys3.length; _i4++) {
        var key = _Object$keys3[_i4];
        this.removeBars(key);
        this.initBars(key);
      }

      var _iterator3 = _createForOfIteratorHelper(this.getActiveStormTypes()),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _key = _step3.value;
          this.showBars(_key);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
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
      }).attr('y', this.y(0)).attr('fill', this.stormTypes[key].fill);
      this.stormTypes[key].bars = bars;
    }
  }, {
    key: "showBars",
    value: function showBars(key) {
      var _this7 = this;

      this.stormTypes[key].bars.transition(1000).attr('y', function (d) {
        return _this7.y(d.value);
      }).attr('height', function (d) {
        return _this7.y(0) - _this7.y(d.value);
      });
    }
  }, {
    key: "hideBars",
    value: function hideBars(key) {
      var _this8 = this;

      this.stormTypes[key].bars.transition(1000).attr('y', function (d) {
        return _this8.y(0);
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
___CSS_LOADER_EXPORT___.push([module.id, "\nbody {\n    font-family: Arial Narrow, serif;\n    margin-top: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0;\n    width: 1200px;\n}\n\n.tick text {\n    fill: #595959;\n}\n\n#y-axis-title {\n    font-size: 1.3em;\n}\n\n#plot .tick {\n    font-size: 1.5em;\n}\n\n#graph-container {\n    display: flex;\n}\n\n#graph-title {\n    margin-left: 200px;\n    font-weight: normal;\n}\n\n#menu {\n    height: 130px;\n    padding: 10px;\n}\n\n#menu div {\n    margin: 10px;\n}\n\n#show-storm-types {\n    border: 1px solid black;\n}\n\n#show-storm-types label {\n    display: block;\n    margin: 5px; \n}\n\n#year-select {\n    border: 1px solid black;\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":";AACA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;IACV,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,WAAW;AACf;;AAEA;IACI,uBAAuB;AAC3B","sourcesContent":["\nbody {\n    font-family: Arial Narrow, serif;\n    margin-top: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0;\n    width: 1200px;\n}\n\n.tick text {\n    fill: #595959;\n}\n\n#y-axis-title {\n    font-size: 1.3em;\n}\n\n#plot .tick {\n    font-size: 1.5em;\n}\n\n#graph-container {\n    display: flex;\n}\n\n#graph-title {\n    margin-left: 200px;\n    font-weight: normal;\n}\n\n#menu {\n    height: 130px;\n    padding: 10px;\n}\n\n#menu div {\n    margin: 10px;\n}\n\n#show-storm-types {\n    border: 1px solid black;\n}\n\n#show-storm-types label {\n    display: block;\n    margin: 5px; \n}\n\n#year-select {\n    border: 1px solid black;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICB0aXRsZTogJ05vcnRoIEF0bGFudGljIFdlc3Qgb2YgNjDCsFc6IDE5NTAtMjAyMCcsXG4gIHdpZHRoOiA4MDAsXG4gIGhlaWdodDogNTAwLFxuICBtYXJnaW46IHsgbGVmdDogODAsIHJpZ2h0OiAwLCB0b3A6IDE1LCBib3R0b206IDYwIH0sXG4gIHllYXJTdGFydDogMTk1MCxcbiAgeWVhckVuZDogMjAyMCxcbiAgeUF4aXNUaXRsZTogJ1Ryb3BpY2FsIEN5Y2xvbmUgRGF5cyAocGVyIHllYXIpJyxcbiAgc3Rvcm1UeXBlczoge1xuICAgICduYW1lZF9zdG9ybSc6IHtcbiAgICAgICd3aGVyZSc6ICdVU0FfV0lORDw2NCBBTkQgVVNBX1dJTkQ+PTM0JyxcbiAgICAgICdsYWJlbCc6ICdOYW1lZCBTdG9ybXMnLFxuICAgICAgJ2xlZ2VuZF9sYWJlbCc6ICdOYW1lZCBTdG9ybXMgKD49IDM0a3QpJyxcbiAgICAgICdmaWxsJzogJyNDNkRCRUYnLFxuICAgICAgJ2FjdGl2ZSc6IHRydWVcbiAgICB9LFxuICAgICdodXJyaWNhbmUnOiB7XG4gICAgICAnd2hlcmUnOiAnVVNBX1dJTkQ+PTY0IEFORCBVU0FfV0lORDw5NicsXG4gICAgICAnbGFiZWwnOiAnSHVycmljYW5lcycsXG4gICAgICAnbGVnZW5kX2xhYmVsJzogJ0h1cnJpY2FuZXMgKD49NjRrdCknLFxuICAgICAgJ2ZpbGwnOiAnIzZCQUVENicsXG4gICAgICAnYWN0aXZlJzogdHJ1ZVxuICAgIH0sXG4gICAgJ21ham9yX2h1cnJpY2FuZSc6IHtcbiAgICAgICd3aGVyZSc6ICdVU0FfV0lORD49OTYnLFxuICAgICAgJ2xhYmVsJzogJ01ham9yIEh1cnJpY2FuZXMnLFxuICAgICAgJ2xlZ2VuZF9sYWJlbCc6ICdNYWpvciBIdXJyaWNhbmVzICg+PSA5Nmt0KScsXG4gICAgICAnZmlsbCc6ICcjMDg1MTlDJyxcbiAgICAgICdhY3RpdmUnOiB0cnVlXG4gICAgfVxuICB9LFxuICAvLyBEb24ndCBsYWJlbCBldmVyeSB4LWF4aXMgdGljayBhZnRlciB0aGlzIG1hbnkgZWxlbWVudHNcbiAgVElDS19MQUJFTF9USFJFU0hPTEQ6IDMwLFxuICAvLyBPbmx5IHJlbGV2YW50IHdoZW4gVElDS19MQUJFTF9USFJFU0hPTEQgaXMgbWV0XG4gIFRJQ0tfTEFCRUxfU1RFUDogNVxufVxuXG4iLCJcbmV4cG9ydCBjb25zdCBkYXRhID0ge1xuICBcIjE5NTBcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDExLjUsXG4gICAgXCJodXJyaWNhbmVcIjogMzgsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA1OS41XG4gIH0sXG4gIFwiMTk1MVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMy43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAyMy4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQxLjc1XG4gIH0sXG4gIFwiMTk1MlwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMi41LFxuICAgIFwiaHVycmljYW5lXCI6IDE0LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjdcbiAgfSxcbiAgXCIxOTUzXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDE0LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDRcbiAgfSxcbiAgXCIxOTU0XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA3LFxuICAgIFwiaHVycmljYW5lXCI6IDIwLjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0NVxuICB9LFxuICBcIjE5NTVcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDguNSxcbiAgICBcImh1cnJpY2FuZVwiOiAzMyxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDU5LjI1XG4gIH0sXG4gIFwiMTk1NlwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMS43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMC43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI5LjVcbiAgfSxcbiAgXCIxOTU3XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLjUsXG4gICAgXCJodXJyaWNhbmVcIjogNS41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjIuNzVcbiAgfSxcbiAgXCIxOTU4XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLjc1LFxuICAgIFwiaHVycmljYW5lXCI6IDE2Ljc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDEuNVxuICB9LFxuICBcIjE5NTlcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTIuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAzNi4yNVxuICB9LFxuICBcIjE5NjBcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDYuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMTIsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyN1xuICB9LFxuICBcIjE5NjFcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEzLjc1LFxuICAgIFwiaHVycmljYW5lXCI6IDI0Ljc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDYuMjVcbiAgfSxcbiAgXCIxOTYyXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLFxuICAgIFwiaHVycmljYW5lXCI6IDExLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjUuNzVcbiAgfSxcbiAgXCIxOTYzXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLjc1LFxuICAgIFwiaHVycmljYW5lXCI6IDIyLjc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMzUuNzVcbiAgfSxcbiAgXCIxOTY0XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA4Ljc1LFxuICAgIFwiaHVycmljYW5lXCI6IDMzLFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNTMuNVxuICB9LFxuICBcIjE5NjVcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDYuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogOS43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDIxXG4gIH0sXG4gIFwiMTk2NlwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogOC43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAyNS43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDM2LjVcbiAgfSxcbiAgXCIxOTY3XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA1Ljc1LFxuICAgIFwiaHVycmljYW5lXCI6IDE4LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyOC43NVxuICB9LFxuICBcIjE5NjhcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAsXG4gICAgXCJodXJyaWNhbmVcIjogNy41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjAuNVxuICB9LFxuICBcIjE5NjlcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDQuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogMjQuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQ5Ljc1XG4gIH0sXG4gIFwiMTk3MFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMSxcbiAgICBcImh1cnJpY2FuZVwiOiA2LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjAuNVxuICB9LFxuICBcIjE5NzFcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDEsXG4gICAgXCJodXJyaWNhbmVcIjogMTcuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0Ni4yNVxuICB9LFxuICBcIjE5NzJcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAsXG4gICAgXCJodXJyaWNhbmVcIjogMi43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDE3LjVcbiAgfSxcbiAgXCIxOTczXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLFxuICAgIFwiaHVycmljYW5lXCI6IDMuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyMC41XG4gIH0sXG4gIFwiMTk3NFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMy41LFxuICAgIFwiaHVycmljYW5lXCI6IDEwLjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAzMS43NVxuICB9LFxuICBcIjE5NzVcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDIuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTEuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI1XG4gIH0sXG4gIFwiMTk3NlwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMC43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAzLjc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTUuMjVcbiAgfSxcbiAgXCIxOTc3XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxLFxuICAgIFwiaHVycmljYW5lXCI6IDUuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxMy4yNVxuICB9LFxuICBcIjE5NzhcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDMsXG4gICAgXCJodXJyaWNhbmVcIjogOCxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDIyXG4gIH0sXG4gIFwiMTk3OVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNC4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMS43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI4LjI1XG4gIH0sXG4gIFwiMTk4MFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNi4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiA5LjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyMi4yNVxuICB9LFxuICBcIjE5ODFcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDIuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTEsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAzNlxuICB9LFxuICBcIjE5ODJcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogNCxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDExXG4gIH0sXG4gIFwiMTk4M1wiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMC4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAyLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTEuMjVcbiAgfSxcbiAgXCIxOTg0XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLjc1LFxuICAgIFwiaHVycmljYW5lXCI6IDExLjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAzMlxuICB9LFxuICBcIjE5ODVcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDQsXG4gICAgXCJodXJyaWNhbmVcIjogMTguMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0MS41XG4gIH0sXG4gIFwiMTk4NlwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMCxcbiAgICBcImh1cnJpY2FuZVwiOiAyLjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTIuNzVcbiAgfSxcbiAgXCIxOTg3XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLjUsXG4gICAgXCJodXJyaWNhbmVcIjogMi4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDEyLjVcbiAgfSxcbiAgXCIxOTg4XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA2LjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTIuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyOC41XG4gIH0sXG4gIFwiMTk4OVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMy41LFxuICAgIFwiaHVycmljYW5lXCI6IDEyLjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyNlxuICB9LFxuICBcIjE5OTBcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAsXG4gICAgXCJodXJyaWNhbmVcIjogOS4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDI1LjVcbiAgfSxcbiAgXCIxOTkxXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDcuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxNC41XG4gIH0sXG4gIFwiMTk5MlwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMy41LFxuICAgIFwiaHVycmljYW5lXCI6IDUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxN1xuICB9LFxuICBcIjE5OTNcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAuNzUsXG4gICAgXCJodXJyaWNhbmVcIjogNy41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjAuMjVcbiAgfSxcbiAgXCIxOTk0XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAwLFxuICAgIFwiaHVycmljYW5lXCI6IDEsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAxNlxuICB9LFxuICBcIjE5OTVcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDcuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMzQuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDYzXG4gIH0sXG4gIFwiMTk5NlwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogOS4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAyOS41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNTBcbiAgfSxcbiAgXCIxOTk3XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxLjc1LFxuICAgIFwiaHVycmljYW5lXCI6IDUuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDE4XG4gIH0sXG4gIFwiMTk5OFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogOCxcbiAgICBcImh1cnJpY2FuZVwiOiAyNy41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDIuNVxuICB9LFxuICBcIjE5OTlcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDcuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAyNi43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQ3XG4gIH0sXG4gIFwiMjAwMFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMS4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAxMCxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDMwLjI1XG4gIH0sXG4gIFwiMjAwMVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMy43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAxNS43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQyXG4gIH0sXG4gIFwiMjAwMlwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMyxcbiAgICBcImh1cnJpY2FuZVwiOiA4Ljc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNDIuMjVcbiAgfSxcbiAgXCIyMDAzXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA3LjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTQuNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQwLjVcbiAgfSxcbiAgXCIyMDA0XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxNCxcbiAgICBcImh1cnJpY2FuZVwiOiAyNi43NSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDUxLjVcbiAgfSxcbiAgXCIyMDA1XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxNy4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAzNy4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDgyLjI1XG4gIH0sXG4gIFwiMjAwNlwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMCxcbiAgICBcImh1cnJpY2FuZVwiOiAzLjc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjEuMjVcbiAgfSxcbiAgXCIyMDA3XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA2LFxuICAgIFwiaHVycmljYW5lXCI6IDEwLjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiAyNS4yNVxuICB9LFxuICBcIjIwMDhcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDUuNSxcbiAgICBcImh1cnJpY2FuZVwiOiAyMy4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDY0Ljc1XG4gIH0sXG4gIFwiMjAwOVwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogMS4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiA1Ljc1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTMuMjVcbiAgfSxcbiAgXCIyMDEwXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA0LjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDIxLFxuICAgIFwibmFtZWRfc3Rvcm1cIjogNTEuNzVcbiAgfSxcbiAgXCIyMDExXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA0LjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTkuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA2MFxuICB9LFxuICBcIjIwMTJcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAuMjUsXG4gICAgXCJodXJyaWNhbmVcIjogMTIuMjUsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA0OFxuICB9LFxuICBcIjIwMTNcIjoge1xuICAgIFwibWFqb3JfaHVycmljYW5lXCI6IDAsXG4gICAgXCJodXJyaWNhbmVcIjogMS41LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMTRcbiAgfSxcbiAgXCIyMDE0XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDEyLFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjQuMjVcbiAgfSxcbiAgXCIyMDE1XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAzLjUsXG4gICAgXCJodXJyaWNhbmVcIjogNy4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDE5Ljc1XG4gIH0sXG4gIFwiMjAxNlwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogOC43NSxcbiAgICBcImh1cnJpY2FuZVwiOiAxNi4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDQyLjVcbiAgfSxcbiAgXCIyMDE3XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiAxMi4yNSxcbiAgICBcImh1cnJpY2FuZVwiOiAzMi4yNSxcbiAgICBcIm5hbWVkX3N0b3JtXCI6IDU5Ljc1XG4gIH0sXG4gIFwiMjAxOFwiOiB7XG4gICAgXCJtYWpvcl9odXJyaWNhbmVcIjogNCxcbiAgICBcImh1cnJpY2FuZVwiOiA5LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMjQuMjVcbiAgfSxcbiAgXCIyMDE5XCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA2LjI1LFxuICAgIFwiaHVycmljYW5lXCI6IDE0LjI1LFxuICAgIFwibmFtZWRfc3Rvcm1cIjogMzkuMjVcbiAgfSxcbiAgXCIyMDIwXCI6IHtcbiAgICBcIm1ham9yX2h1cnJpY2FuZVwiOiA1LjUsXG4gICAgXCJodXJyaWNhbmVcIjogMjgsXG4gICAgXCJuYW1lZF9zdG9ybVwiOiA4MVxuICB9XG59XG5cbiIsIlxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnXG5cbmV4cG9ydCBjbGFzcyBHcmFwaCB7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnLCBkYXRhKSB7XG4gICAgdGhpcy50aXRsZSA9IGNvbmZpZy50aXRsZVxuICAgIHRoaXMueUF4aXNUaXRsZSA9IGNvbmZpZy55QXhpc1RpdGxlXG4gICAgdGhpcy5kYXRhID0gZGF0YVxuICAgIHRoaXMueWVhcnMgPSBPYmplY3Qua2V5cyhkYXRhKS5tYXAoZCA9PiBwYXJzZUludChkKSlcbiAgICB0aGlzLk1JTl9ZRUFSID0gdXRpbC5nZXRNaW5ZZWFyKHRoaXMuZGF0YSlcbiAgICB0aGlzLk1BWF9ZRUFSID0gdXRpbC5nZXRNYXhZZWFyKHRoaXMuZGF0YSlcbiAgICB0aGlzLlRJQ0tfTEFCRUxfVEhSRVNIT0xEID0gY29uZmlnLlRJQ0tfTEFCRUxfVEhSRVNIT0xEXG4gICAgdGhpcy5USUNLX0xBQkVMX1NURVAgPSBjb25maWcuVElDS19MQUJFTF9TVEVQXG4gICAgdGhpcy55ZWFyU3RhcnQgPSBjb25maWcueWVhclN0YXJ0XG4gICAgdGhpcy55ZWFyRW5kID0gY29uZmlnLnllYXJFbmRcbiAgICB0aGlzLnN0b3JtVHlwZXMgPSBjb25maWcuc3Rvcm1UeXBlc1xuICAgIHRoaXMubWFyZ2luID0gY29uZmlnLm1hcmdpblxuICAgIHRoaXMud2lkdGggPSBjb25maWcud2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IGNvbmZpZy5oZWlnaHRcblxuICAgIHRoaXMucGxvdCA9IHRoaXMuaW5pdFBsb3QoKVxuICAgIHRoaXMuZGF0YXNldHMgPSB0aGlzLmluaXREYXRhc2V0cyhPYmplY3Qua2V5cyhjb25maWcuc3Rvcm1UeXBlcykpXG5cbiAgICB0aGlzLnggPSB0aGlzLmluaXRYU2NhbGUoKVxuICAgIHRoaXMueSA9IHRoaXMuaW5pdFlTY2FsZSgpXG4gICAgdGhpcy55QXhpcyA9IHRoaXMuaW5pdFlBeGlzKClcbiAgICB0aGlzLnhBeGlzID0gdGhpcy5hcHBlbmRYQXhpcygpXG4gICAgdGhpcy5pbml0WEF4aXMoKVxuICAgIHRoaXMuc2V0WUF4aXNUaXRsZSgpXG5cbiAgICBPYmplY3Qua2V5cyhjb25maWcuc3Rvcm1UeXBlcykuZm9yRWFjaChrZXkgPT4gdGhpcy5pbml0QmFycyhrZXkpKVxuICAgIGNvbnN0IGluaXRTdG9ybVR5cGVzID0gT2JqZWN0LmtleXModGhpcy5zdG9ybVR5cGVzKS5maWx0ZXIoa2V5ID0+IHRoaXMuc3Rvcm1UeXBlc1trZXldLmFjdGl2ZSlcbiAgICBpbml0U3Rvcm1UeXBlcy5mb3JFYWNoKGtleSA9PiB0aGlzLnNob3dCYXJzKGtleSkpXG4gIH1cblxuICBzZXRZQXhpc1RpdGxlKCkge1xuICAgIHRoaXMucGxvdC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2lkJywgJ3ktYXhpcy10aXRsZScpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHJvdGF0ZSgtOTApIHRyYW5zbGF0ZSgtJHt0aGlzLmhlaWdodC81fSwgMzApYClcbiAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLmh0bWwodGhpcy55QXhpc1RpdGxlKVxuICB9XG5cbiAgaW5pdFBsb3QoKSB7XG4gICAgcmV0dXJuIGQzLnNlbGVjdCgnI3Bsb3QnKS5hcHBlbmQoJ3N2ZycpXG4gICAgICAuYXR0cignd2lkdGgnLCB0aGlzLndpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0KVxuICB9XG5cbiAgZ2V0WERvbWFpbigpIHtcbiAgICByZXR1cm4gWy4uLkFycmF5KHRoaXMueWVhckVuZC10aGlzLnllYXJTdGFydCsxKS5rZXlzKCldLm1hcChkID0+IGQrdGhpcy55ZWFyU3RhcnQpXG4gIH1cblxuICBpbml0WFNjYWxlKCkge1xuICAgIHJldHVybiBkMy5zY2FsZUJhbmQoKVxuICAgICAgLmRvbWFpbih0aGlzLmdldFhEb21haW4oKSlcbiAgICAgIC5yYW5nZShbdGhpcy5tYXJnaW4ubGVmdCwgdGhpcy53aWR0aCAtIHRoaXMubWFyZ2luLnJpZ2h0XSlcbiAgfVxuXG4gIGluaXRZU2NhbGUoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIHRoaXMuY2FsY01heCgpXSlcbiAgICAgIC5yYW5nZShbdGhpcy5oZWlnaHQgLSB0aGlzLm1hcmdpbi5ib3R0b20sIHRoaXMubWFyZ2luLnRvcF0pXG4gIH1cblxuICBhcHBlbmRYQXhpcygpIHtcbiAgICByZXR1cm4gdGhpcy5wbG90LmFwcGVuZCgnZycpICBcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsICR7dGhpcy5oZWlnaHQgLSB0aGlzLm1hcmdpbi5ib3R0b219KWApXG4gIH1cblxuICBpbml0WEF4aXMoKSB7XG4gICAgdGhpcy54QXhpcy5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy54KSlcbiAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAgIC5hdHRyKCdkeCcsICctLjVlbScpXG4gICAgICAgIC5hdHRyKCdkeScsICcuMTVlbScpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAncm90YXRlKC02NSknKVxuICAgICAgICAuaHRtbCgoZCwgaSwgbm9kZXMpID0+IHtcbiAgICAgICAgICBpZiAobm9kZXMubGVuZ3RoID4gdGhpcy5USUNLX0xBQkVMX1RIUkVTSE9MRCkge1xuICAgICAgICAgICAgaWYgKGQgJSB0aGlzLlRJQ0tfTEFCRUxfU1RFUCA9PSAwKSByZXR1cm4gZFxuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkXG4gICAgICAgIH0pXG4gIH1cblxuICBpbml0WUF4aXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGxvdC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt0aGlzLm1hcmdpbi5sZWZ0fSwgMClgKVxuICAgICAgLmNhbGwoZDMuYXhpc0xlZnQodGhpcy55KSlcbiAgfVxuXG5cbiAgY2FsY0FjdGl2ZVllYXJzKCkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmRhdGEpXG4gICAgY29uc3QgeWVhcnMgPSBbXVxuICAgIGZvciAobGV0IGQgb2Yga2V5cykge1xuICAgICAgY29uc3QgeXIgPSBwYXJzZUludChkKVxuICAgICAgaWYgKHlyIDwgdGhpcy55ZWFyU3RhcnQgfHwgeXIgPiB0aGlzLnllYXJFbmQpIGNvbnRpbnVlXG4gICAgICB5ZWFycy5wdXNoKHlyKVxuICAgIH1cbiAgICByZXR1cm4geWVhcnNcbiAgfVxuXG4gIGluaXREYXRhc2V0cygpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXModGhpcy5zdG9ybVR5cGVzKSkge1xuICAgICAgY29uc3QgZGF0YXNldCA9IFtdXG4gICAgICBmb3IgKGxldCB5ZWFyIG9mIHRoaXMueWVhcnMpIHtcbiAgICAgICAgZGF0YXNldC5wdXNoKHsgJ3llYXInOiB5ZWFyLCAndmFsdWUnOiB0aGlzLmRhdGFbU3RyaW5nKHllYXIpXVtrZXldIH0pXG4gICAgICB9XG4gICAgICB0aGlzLnN0b3JtVHlwZXNba2V5XS5kYXRhc2V0ID0gZGF0YXNldFxuICAgIH1cbiAgfVxuXG4gIGNhbGNNYXgoKSB7XG4gICAgbGV0IG1heCA9IDBcbiAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXModGhpcy5zdG9ybVR5cGVzKSkge1xuICAgICAgZm9yIChsZXQgZCBvZiB0aGlzLnN0b3JtVHlwZXNba2V5XS5kYXRhc2V0KSB7XG4gICAgICAgIG1heCA9IGQudmFsdWUgPiBtYXggPyBkLnZhbHVlIDogbWF4XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFJvdW5kIHVwIGJ5IDEwXG4gICAgcmV0dXJuIHBhcnNlSW50KG1heCAvIDEwKSAqIDEwICsgMTBcbiAgfVxuXG4gIGdldEFjdGl2ZURhdGEoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuc3Rvcm1UeXBlc1trZXldLmRhdGFzZXQuZmlsdGVyKGQgPT4ge1xuICAgICAgcmV0dXJuIGQueWVhciA+PSB0aGlzLnllYXJTdGFydCAmJiBkLnllYXIgPD0gdGhpcy55ZWFyRW5kXG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZVllYXJTdGFydChuZXdZZWFyU3RhcnQpIHtcbiAgICB0aGlzLnllYXJTdGFydCA9IG5ld1llYXJTdGFydFxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIHVwZGF0ZVllYXJFbmQobmV3WWVhckVuZCkge1xuICAgIHRoaXMueWVhckVuZCA9IG5ld1llYXJFbmRcbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy54LmRvbWFpbih0aGlzLmdldFhEb21haW4oKSlcbiAgICB0aGlzLmluaXRYQXhpcyh0cnVlKVxuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLnN0b3JtVHlwZXMpKSB7XG4gICAgICB0aGlzLnJlbW92ZUJhcnMoa2V5KVxuICAgICAgdGhpcy5pbml0QmFycyhrZXkpXG4gICAgfVxuICAgIGZvciAobGV0IGtleSBvZiB0aGlzLmdldEFjdGl2ZVN0b3JtVHlwZXMoKSkge1xuICAgICAgdGhpcy5zaG93QmFycyhrZXkpXG4gICAgfVxuICB9XG5cbiAgZ2V0QWN0aXZlU3Rvcm1UeXBlcygpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5zdG9ybVR5cGVzKS5maWx0ZXIoa2V5ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnN0b3JtVHlwZXNba2V5XS5hY3RpdmVcbiAgICB9KVxuICB9XG5cbiAgaW5pdEJhcnMoa2V5KSB7XG4gICAgY29uc3QgZGF0YXNldCA9IHRoaXMuZ2V0QWN0aXZlRGF0YShrZXkpXG4gICAgY29uc3QgYmFycyA9IHRoaXMucGxvdC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2RhdGEtYmFycycpXG4gICAgICAuYXR0cignaWQnLCBgZGF0YS1iYXJzLS0ke2tleX1gKVxuICAgICAgLnNlbGVjdEFsbCgncmVjdCcpXG4gICAgICAgIC5kYXRhKGRhdGFzZXQpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2JhcicpXG4gICAgICAgICAgLmF0dHIoJ2RhdGEteWVhcicsIGQgPT4gZC55ZWFyKVxuICAgICAgICAgIC5hdHRyKCdkYXRhLXZhbHVlJywgZCA9PiBkLnZhbHVlKVxuXG4gICAgYmFycy5hdHRyKCdoZWlnaHQnLCAwKVxuICAgICAgICAuYXR0cignd2lkdGgnLCB0aGlzLnguYmFuZHdpZHRoKCkpXG4gICAgICAgIC5hdHRyKCd4JywgZCA9PiB0aGlzLngoZC55ZWFyKSlcbiAgICAgICAgLmF0dHIoJ3knLCB0aGlzLnkoMCkpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgdGhpcy5zdG9ybVR5cGVzW2tleV0uZmlsbClcblxuICAgIHRoaXMuc3Rvcm1UeXBlc1trZXldLmJhcnMgPSBiYXJzXG4gIH1cblxuICBzaG93QmFycyhrZXkpIHtcbiAgICB0aGlzLnN0b3JtVHlwZXNba2V5XS5iYXJzLnRyYW5zaXRpb24oMTAwMClcbiAgICAgIC5hdHRyKCd5JywgZCA9PiB0aGlzLnkoZC52YWx1ZSkpXG4gICAgICAuYXR0cignaGVpZ2h0JywgZCA9PiB0aGlzLnkoMCkgLSB0aGlzLnkoZC52YWx1ZSkpXG4gIH1cblxuICBoaWRlQmFycyhrZXkpIHtcbiAgICB0aGlzLnN0b3JtVHlwZXNba2V5XS5iYXJzLnRyYW5zaXRpb24oMTAwMClcbiAgICAgIC5hdHRyKCd5JywgZCA9PiB0aGlzLnkoMCkpXG4gICAgICAuYXR0cignaGVpZ2h0JywgMClcbiAgfVxuXG4gIHJlbW92ZUJhcnMoa2V5KSB7XG4gICAgdGhpcy5oaWRlQmFycyhrZXkpXG4gICAgdGhpcy5zdG9ybVR5cGVzW2tleV0uYmFycy5yZW1vdmUoKVxuICAgIHRoaXMuc3Rvcm1UeXBlc1trZXldLmJhcnMgPSBbXVxuICB9XG5cbn1cblxuIiwiaW1wb3J0ICogYXMgY29uZmlnIGZyb20gJy4vY29uZmlnJ1xuXG5leHBvcnQgY29uc3QgZ2V0TWF4WWVhciA9IChkYXRhKSA9PiB7XG4gIGxldCBtYXggPSAwXG4gIGZvciAobGV0IGsgb2YgT2JqZWN0LmtleXMoZGF0YSkpIHtcbiAgICBrID0gcGFyc2VJbnQoaylcbiAgICBpZiAoayA+IG1heCkgeyBtYXggPSBrIH1cbiAgfVxuICByZXR1cm4gbWF4XG59XG5cbmV4cG9ydCBjb25zdCBnZXRNaW5ZZWFyID0gKGRhdGEpID0+IHtcbiAgbGV0IG1pbiA9IDEwMDAwXG4gIGZvciAobGV0IGsgb2YgT2JqZWN0LmtleXMoZGF0YSkpIHtcbiAgICBrID0gcGFyc2VJbnQoaylcbiAgICBpZiAoayA8IG1pbikgeyBtaW4gPSBrIH1cbiAgfVxuICByZXR1cm4gbWluXG59XG5cbmV4cG9ydCBjb25zdCBvcHRpb25GYWN0b3J5ID0gZnVuY3Rpb24gKHZhbHVlLCBpbm5lckhUTUwpIHtcbiAgICB2YXIgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0LnZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICBvcHQuaW5uZXJIVE1MID0gU3RyaW5nKGlubmVySFRNTCk7XG4gICAgcmV0dXJuIG9wdDtcbn1cblxuXG5jb25zdCByZW1vdmVDaGlsZE5vZGVzID0gKHBhcmVudCkgPT4ge1xuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldHVwWWVhclNlbGVjdCA9IChsYWJlbCwgeWVhclNlbGVjdGVkLCBtaW5ZZWFyLCBtYXhZZWFyKSA9PiB7XG4gIGNvbnN0IHllYXJTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgeWVhci0ke2xhYmVsfS1zZWxlY3RgKVxuICByZW1vdmVDaGlsZE5vZGVzKHllYXJTZWxlY3QpXG4gIGxldCBzZWxlY3RlZEluZGV4O1xuICBsZXQgaW5kZXggPSAwO1xuICBmb3IgKHZhciB5ID0gbWluWWVhcjsgeTw9bWF4WWVhcjsgeSsrKXtcbiAgICAgIGlmIChwYXJzZUludCh5ZWFyU2VsZWN0ZWQpID09IHkpIHsgc2VsZWN0ZWRJbmRleCA9IGluZGV4IH1cbiAgICAgIHllYXJTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uRmFjdG9yeShTdHJpbmcoeSksIFN0cmluZyh5KSkpXG4gICAgICBpbmRleCsrO1xuICB9XG4gIHllYXJTZWxlY3Qub3B0aW9ucy5zZWxlY3RlZEluZGV4PXNlbGVjdGVkSW5kZXhcbiAgcmV0dXJuIHllYXJTZWxlY3Rcbn1cblxuXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwgTmFycm93LCBzZXJpZjtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDEyMDBweDtcXG59XFxuXFxuLnRpY2sgdGV4dCB7XFxuICAgIGZpbGw6ICM1OTU5NTk7XFxufVxcblxcbiN5LWF4aXMtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbn1cXG5cXG4jcGxvdCAudGljayB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbiNncmFwaC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jZ3JhcGgtdGl0bGUge1xcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbiNtZW51IHtcXG4gICAgaGVpZ2h0OiAxMzBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI21lbnUgZGl2IHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4jc2hvdy1zdG9ybS10eXBlcyB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jc2hvdy1zdG9ybS10eXBlcyBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDVweDsgXFxufVxcblxcbiN5ZWFyLXNlbGVjdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCBOYXJyb3csIHNlcmlmO1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMTIwMHB4O1xcbn1cXG5cXG4udGljayB0ZXh0IHtcXG4gICAgZmlsbDogIzU5NTk1OTtcXG59XFxuXFxuI3ktYXhpcy10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxufVxcblxcbiNwbG90IC50aWNrIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuI2dyYXBoLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNncmFwaC10aXRsZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuI21lbnUge1xcbiAgICBoZWlnaHQ6IDEzMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jbWVudSBkaXYge1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiNzaG93LXN0b3JtLXR5cGVzIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNzaG93LXN0b3JtLXR5cGVzIGxhYmVsIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogNXB4OyBcXG59XFxuXFxuI3llYXItc2VsZWN0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5pbXBvcnQgJy4vaW5kZXguY3NzJ1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnXG5pbXBvcnQgeyBkYXRhIH0gIGZyb20gJy4vZGF0YSdcbmltcG9ydCB7IEdyYXBoIH0gZnJvbSAnLi9ncmFwaCdcblxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnXG5cbmNvbnN0IG1pblllYXIgPSB1dGlsLmdldE1pblllYXIoZGF0YSlcbmNvbnN0IG1heFllYXIgPSB1dGlsLmdldE1heFllYXIoZGF0YSlcblxuY29uc3QgZ3JhcGggPSBuZXcgR3JhcGgoY29uZmlnLCBkYXRhKVxuXG5jb25zdCBjaGVja2JveElkcyA9IHtcbiAgJ25hbWVkX3N0b3JtJzogJ3Nob3ctbmFtZWQtc3Rvcm1zJyxcbiAgJ2h1cnJpY2FuZSc6ICdzaG93LW1pbm9yLWh1cnJpY2FuZXMnLFxuICAnbWFqb3JfaHVycmljYW5lJzogJ3Nob3ctbWFqb3ItaHVycmljYW5lcydcbn1cblxuZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGNoZWNrYm94SWRzKSkge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNoZWNrYm94SWRzW2tleV0pXG4gIGVsLmNoZWNrZWQgPSBjb25maWcuc3Rvcm1UeXBlc1trZXldLmFjdGl2ZVxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgZ3JhcGguc3Rvcm1UeXBlc1trZXldLmFjdGl2ZSA9IHRydWVcbiAgICAgIGdyYXBoLnNob3dCYXJzKGtleSlcbiAgICB9IGVsc2Uge1xuICAgICAgZ3JhcGguc3Rvcm1UeXBlc1trZXldLmFjdGl2ZSA9IGZhbHNlXG4gICAgICBncmFwaC5oaWRlQmFycyhrZXkpXG4gICAgfVxuICB9KVxufVxuXG5sZXQgc2VsZWN0ZWRTdGFydFllYXIgPSBncmFwaC55ZWFyU3RhcnRcbmxldCBzZWxlY3RlZEVuZFllYXIgPSBncmFwaC55ZWFyRW5kXG5cbmNvbnN0IHllYXJTdGFydFNlbGVjdCA9IHV0aWwuc2V0dXBZZWFyU2VsZWN0KCdzdGFydCcsIHNlbGVjdGVkU3RhcnRZZWFyLCBtaW5ZZWFyLCBtYXhZZWFyKVxuY29uc3QgeWVhckVuZFNlbGVjdCA9IHV0aWwuc2V0dXBZZWFyU2VsZWN0KCdlbmQnLCBzZWxlY3RlZEVuZFllYXIsIG1pblllYXIsIG1heFllYXIpXG5cbnllYXJTdGFydFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gIHNlbGVjdGVkU3RhcnRZZWFyID0gcGFyc2VJbnQoeWVhclN0YXJ0U2VsZWN0LnZhbHVlKVxuICBncmFwaC51cGRhdGVZZWFyU3RhcnQoc2VsZWN0ZWRTdGFydFllYXIpXG4gIHV0aWwuc2V0dXBZZWFyU2VsZWN0KCdlbmQnLCBzZWxlY3RlZEVuZFllYXIsIHNlbGVjdGVkU3RhcnRZZWFyLCBncmFwaC5NQVhfWUVBUilcbn0pXG5cbnllYXJFbmRTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICBzZWxlY3RlZEVuZFllYXIgPSBwYXJzZUludCh5ZWFyRW5kU2VsZWN0LnZhbHVlKVxuICBncmFwaC51cGRhdGVZZWFyRW5kKHNlbGVjdGVkRW5kWWVhcilcbiAgdXRpbC5zZXR1cFllYXJTZWxlY3QoJ3N0YXJ0Jywgc2VsZWN0ZWRTdGFydFllYXIsIGdyYXBoLk1JTl9ZRUFSLCBzZWxlY3RlZEVuZFllYXIpXG59KVxuXG4vKiBJbml0IFN0YXRlXG4gICd5ZWFyU3RhcnQnOiAxOTUwLFxuICAneWVhckVuZCc6IDIwMjAsXG4gICdhY3RpdmVTdG9ybVR5cGVzJzogWyduYW1lZF9zdG9ybScsICdodXJyaWNhbmUnLCAnbWFqb3JfaHVycmljYW5lJ11cbiovXG5cbi8vIE1hcFxuLy8gV2hlcmUgY2xhdXNlIGdlbmVyYXRvclxuXG4vL2NvbnN0IHllYXJfd2hlcmUgPSAoc3RhcnQsIGVuZCkgPT4gYFlFQVI+PSR7c3RhcnR9IEFORCBZRUFSPD0ke2VuZH1gXG4vL2NvbnN0IHdoZXJlX2ZhY3RvcnkgPSAoKSA9PiBgJHt5ZWFyX3doZXJlKHllYXJTdGFydCwgeWVhckVuZCl9IEFORCAke3N0b3JtX3doZXJlfWBcblxuLypcbmNvbnN0IG1hcCA9IEwubWFwKCdtYXAnKS5zZXRWaWV3KFszNy44MzcsIC0xMDAuNDc5XSwgNSk7XG5jb25zdCBiYXNlbWFwID0gTC5lc3JpLmJhc2VtYXBMYXllcignU3RyZWV0cycpLmFkZFRvKG1hcCk7XG5cbi8vIGR1bW15IGZlYXR1cmUgZm9yIGxvZ2dpbmdcbi8vbGV0IGY7XG5cbmNvbnN0IGxheWVyID0gTC5lc3JpLmZlYXR1cmVMYXllcih7XG4gIHVybDogJ2h0dHBzOi8vc2VydmljZXMyLmFyY2dpcy5jb20vRmlhUEE0Z2EwaVFLZHV2My9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9JQlRyQUNTX0FMTF9saXN0X3YwNHIwMF9saW5lc18xL0ZlYXR1cmVTZXJ2ZXIvMCcsXG4gIHN0eWxlOiBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgIC8vaWYgKCFmKSB7IGYgPSBmZWF0dXJlOyAgY29uc29sZS5sb2coZmVhdHVyZSkgfVxuICAgIGxldCBjO1xuICAgIGxldCBwcm9wID0gZmVhdHVyZS5wcm9wZXJ0aWVzLlVTQV9XSU5EXG4gICAgaWYgKHByb3AgPCA2NCAmJiBwcm9wID49IDM0KSB7IGMgPSAncmVkJyB9XG4gICAgaWYgKHByb3AgPj0gNjQgJiYgcHJvcCA8IDk2KSB7IGMgPSAnZ3JlZW4nIH1cbiAgICBpZiAocHJvcCA+PSA5NikgeyBjID0gJ2JsdWUnIH07XG4gICAgaWYgKCFjKSB7IGMgPSAnd2hpdGUnIH1cbiAgICByZXR1cm4geyBjb2xvcjogYywgb3BhY2l0eTogLjksIHdlaWdodDogNSB9O1xuICB9LFxuICB3aGVyZTogd2hlcmVfZmFjdG9yeSgpXG59KS5hZGRUbyhtYXApO1xuXG5jb25zdCBmZWF0dXJlX2luZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVhdHVyZS1pbmZvJylcblxubGF5ZXIub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChldmVudCkge1xuICBmZWF0dXJlX2luZm8uaW5uZXJIVE1MID0gcmVuZGVyX2ZlYXR1cmUoZXZlbnQubGF5ZXIuZmVhdHVyZSlcbn0pXG5cbmxheWVyLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChldmVudCkge1xuICBmZWF0dXJlX2luZm8uaW5uZXJIVE1MID0gJ0hvdmVyIG92ZXIgYSBzdG9ybSB0cmFjayBmb3IgbW9yZSBkYXRhJ1xufSlcblxuY29uc3QgcmVuZGVyX2ZlYXR1cmUgPSBmID0+IHtcbiAgY29uc3QgcHJvcHMgPSBmLnByb3BlcnRpZXNcbiAgY29uc3QgZGlzcGxheV9wcm9wcyA9IFsgJ0xBVCcsICdMT04nLCAnVVNBX1dJTkQnLCAneWVhcicsICdtb250aCcsICdkYXknLCAnTkFNRScgXVxuICBjb25zdCByZW5kZXJlZCA9IGBcbiAgICBOYW1lOiAke3Byb3BzWydOQU1FJ119IDxicj5cbiAgICBXaW5kIFNwZWVkOiAke3Byb3BzWydVU0FfV0lORCddfSBrbm90cyA8YnI+XG4gICAgRGF0ZTogJHtwcm9wc1snbW9udGgnXX0vJHtwcm9wc1snZGF5J119LyR7cHJvcHNbJ3llYXInXX0gPGJyPlxuICAgIExhdDogJHtwcm9wc1snTEFUJ119IDxicj5cbiAgICBMb246ICR7cHJvcHNbJ0xPTiddfSA8YnI+XG4gIGBcbiAgcmV0dXJuIHJlbmRlcmVkXG59XG5cbmNvbnN0IHJlbmRlcl9wcm9wID0gKGtleSwgdmFsdWUpID0+IHtcbiAgcmV0dXJuIGAke2tleX06ICR7dmFsdWV9XFxuYFxufVxuXG4qL1xuIl0sIm5hbWVzIjpbImNvbmZpZyIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJ5ZWFyU3RhcnQiLCJ5ZWFyRW5kIiwieUF4aXNUaXRsZSIsInN0b3JtVHlwZXMiLCJUSUNLX0xBQkVMX1RIUkVTSE9MRCIsIlRJQ0tfTEFCRUxfU1RFUCIsImRhdGEiLCJ1dGlsIiwiR3JhcGgiLCJ5ZWFycyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJkIiwicGFyc2VJbnQiLCJNSU5fWUVBUiIsImdldE1pblllYXIiLCJNQVhfWUVBUiIsImdldE1heFllYXIiLCJwbG90IiwiaW5pdFBsb3QiLCJkYXRhc2V0cyIsImluaXREYXRhc2V0cyIsIngiLCJpbml0WFNjYWxlIiwieSIsImluaXRZU2NhbGUiLCJ5QXhpcyIsImluaXRZQXhpcyIsInhBeGlzIiwiYXBwZW5kWEF4aXMiLCJpbml0WEF4aXMiLCJzZXRZQXhpc1RpdGxlIiwiZm9yRWFjaCIsImtleSIsImluaXRCYXJzIiwiaW5pdFN0b3JtVHlwZXMiLCJmaWx0ZXIiLCJhY3RpdmUiLCJzaG93QmFycyIsImFwcGVuZCIsImF0dHIiLCJodG1sIiwiZDMiLCJzZWxlY3QiLCJBcnJheSIsInNjYWxlQmFuZCIsImRvbWFpbiIsImdldFhEb21haW4iLCJyYW5nZSIsInNjYWxlTGluZWFyIiwiY2FsY01heCIsImNhbGwiLCJheGlzQm90dG9tIiwic2VsZWN0QWxsIiwic3R5bGUiLCJpIiwibm9kZXMiLCJsZW5ndGgiLCJheGlzTGVmdCIsInlyIiwicHVzaCIsImRhdGFzZXQiLCJ5ZWFyIiwiU3RyaW5nIiwibWF4IiwidmFsdWUiLCJuZXdZZWFyU3RhcnQiLCJ1cGRhdGUiLCJuZXdZZWFyRW5kIiwicmVtb3ZlQmFycyIsImdldEFjdGl2ZVN0b3JtVHlwZXMiLCJnZXRBY3RpdmVEYXRhIiwiYmFycyIsImVudGVyIiwiYmFuZHdpZHRoIiwiZmlsbCIsInRyYW5zaXRpb24iLCJoaWRlQmFycyIsInJlbW92ZSIsImsiLCJtaW4iLCJvcHRpb25GYWN0b3J5IiwiaW5uZXJIVE1MIiwib3B0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicmVtb3ZlQ2hpbGROb2RlcyIsInBhcmVudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsInNldHVwWWVhclNlbGVjdCIsImxhYmVsIiwieWVhclNlbGVjdGVkIiwibWluWWVhciIsIm1heFllYXIiLCJ5ZWFyU2VsZWN0IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWxlY3RlZEluZGV4IiwiaW5kZXgiLCJhcHBlbmRDaGlsZCIsIm9wdGlvbnMiLCJncmFwaCIsImNoZWNrYm94SWRzIiwiZWwiLCJjaGVja2VkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNlbGVjdGVkU3RhcnRZZWFyIiwic2VsZWN0ZWRFbmRZZWFyIiwieWVhclN0YXJ0U2VsZWN0IiwieWVhckVuZFNlbGVjdCIsInVwZGF0ZVllYXJTdGFydCIsInVwZGF0ZVllYXJFbmQiXSwic291cmNlUm9vdCI6IiJ9