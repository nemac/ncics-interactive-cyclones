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
/* harmony export */   "title": () => (/* binding */ title),
/* harmony export */   "MIN_YEAR": () => (/* binding */ MIN_YEAR),
/* harmony export */   "MAX_YEAR": () => (/* binding */ MAX_YEAR),
/* harmony export */   "storm_types": () => (/* binding */ storm_types),
/* harmony export */   "legend_labels": () => (/* binding */ legend_labels),
/* harmony export */   "fill_colors": () => (/* binding */ fill_colors)
/* harmony export */ });
var title = 'North Atlantic West of 60°W: 1950-2020';
var MIN_YEAR = 1950;
var MAX_YEAR = 2020;
var storm_types = {
  'count_35': {
    'where': 'USA_WIND<64 AND USA_WIND>=34',
    'label': 'Named Storms'
  },
  'count_64': {
    'where': 'USA_WIND>=64 AND USA_WIND<96',
    'label': 'Hurricanes'
  },
  'count_96': {
    'where': 'USA_WIND>=96',
    'label': 'Major Hurricanes'
  }
};
var legend_labels = {
  'count_96': 'Major Hurricanes (>= 96kt)',
  'count_64': 'Hurricanes (>= 64kt)',
  'count_35': 'Named Storms (>= 34kt)'
};
var fill_colors = {
  'count_96': '#3e99e8',
  'count_64': '#4cbc18',
  'count_35': '#489524'
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
    "count_96": 11.5,
    "count_64": 38,
    "count_35": 59.5
  },
  "1951": {
    "count_96": 3.75,
    "count_64": 23.25,
    "count_35": 41.75
  },
  "1952": {
    "count_96": 2.5,
    "count_64": 14.25,
    "count_35": 27
  },
  "1953": {
    "count_96": 3.25,
    "count_64": 14.25,
    "count_35": 44
  },
  "1954": {
    "count_96": 7,
    "count_64": 20.5,
    "count_35": 45
  },
  "1955": {
    "count_96": 8.5,
    "count_64": 33,
    "count_35": 59.25
  },
  "1956": {
    "count_96": 1.75,
    "count_64": 10.75,
    "count_35": 29.5
  },
  "1957": {
    "count_96": 0.5,
    "count_64": 5.5,
    "count_35": 22.75
  },
  "1958": {
    "count_96": 3.75,
    "count_64": 16.75,
    "count_35": 41.5
  },
  "1959": {
    "count_96": 3.25,
    "count_64": 12.25,
    "count_35": 36.25
  },
  "1960": {
    "count_96": 6.75,
    "count_64": 12,
    "count_35": 27
  },
  "1961": {
    "count_96": 13.75,
    "count_64": 24.75,
    "count_35": 46.25
  },
  "1962": {
    "count_96": 0,
    "count_64": 11.25,
    "count_35": 25.75
  },
  "1963": {
    "count_96": 3.75,
    "count_64": 22.75,
    "count_35": 35.75
  },
  "1964": {
    "count_96": 8.75,
    "count_64": 33,
    "count_35": 53.5
  },
  "1965": {
    "count_96": 6.25,
    "count_64": 9.75,
    "count_35": 21
  },
  "1966": {
    "count_96": 8.75,
    "count_64": 25.75,
    "count_35": 36.5
  },
  "1967": {
    "count_96": 5.75,
    "count_64": 18.5,
    "count_35": 28.75
  },
  "1968": {
    "count_96": 0,
    "count_64": 7.5,
    "count_35": 20.5
  },
  "1969": {
    "count_96": 4.75,
    "count_64": 24.5,
    "count_35": 49.75
  },
  "1970": {
    "count_96": 1,
    "count_64": 6,
    "count_35": 20.5
  },
  "1971": {
    "count_96": 1,
    "count_64": 17.25,
    "count_35": 46.25
  },
  "1972": {
    "count_96": 0,
    "count_64": 2.75,
    "count_35": 17.5
  },
  "1973": {
    "count_96": 0,
    "count_64": 3.25,
    "count_35": 20.5
  },
  "1974": {
    "count_96": 3.5,
    "count_64": 10.5,
    "count_35": 31.75
  },
  "1975": {
    "count_96": 2.25,
    "count_64": 11.5,
    "count_35": 25
  },
  "1976": {
    "count_96": 0.75,
    "count_64": 3.75,
    "count_35": 15.25
  },
  "1977": {
    "count_96": 1,
    "count_64": 5.25,
    "count_35": 13.25
  },
  "1978": {
    "count_96": 3,
    "count_64": 8,
    "count_35": 22
  },
  "1979": {
    "count_96": 4.25,
    "count_64": 11.75,
    "count_35": 28.25
  },
  "1980": {
    "count_96": 6.25,
    "count_64": 9.5,
    "count_35": 22.25
  },
  "1981": {
    "count_96": 2.25,
    "count_64": 11,
    "count_35": 36
  },
  "1982": {
    "count_96": 0.75,
    "count_64": 4,
    "count_35": 11
  },
  "1983": {
    "count_96": 0.25,
    "count_64": 2.25,
    "count_35": 11.25
  },
  "1984": {
    "count_96": 0.75,
    "count_64": 11.5,
    "count_35": 32
  },
  "1985": {
    "count_96": 4,
    "count_64": 18.25,
    "count_35": 41.5
  },
  "1986": {
    "count_96": 0,
    "count_64": 2.25,
    "count_35": 12.75
  },
  "1987": {
    "count_96": 0.5,
    "count_64": 2.25,
    "count_35": 12.5
  },
  "1988": {
    "count_96": 6.5,
    "count_64": 12.25,
    "count_35": 28.5
  },
  "1989": {
    "count_96": 3.5,
    "count_64": 12.5,
    "count_35": 26
  },
  "1990": {
    "count_96": 0,
    "count_64": 9.25,
    "count_35": 25.5
  },
  "1991": {
    "count_96": 1.25,
    "count_64": 7.25,
    "count_35": 14.5
  },
  "1992": {
    "count_96": 3.5,
    "count_64": 5,
    "count_35": 17
  },
  "1993": {
    "count_96": 0.75,
    "count_64": 7.5,
    "count_35": 20.25
  },
  "1994": {
    "count_96": 0,
    "count_64": 1,
    "count_35": 16
  },
  "1995": {
    "count_96": 7.25,
    "count_64": 34.5,
    "count_35": 63
  },
  "1996": {
    "count_96": 9.25,
    "count_64": 29.5,
    "count_35": 50
  },
  "1997": {
    "count_96": 1.75,
    "count_64": 5.5,
    "count_35": 18
  },
  "1998": {
    "count_96": 8,
    "count_64": 27.5,
    "count_35": 42.5
  },
  "1999": {
    "count_96": 7.5,
    "count_64": 26.75,
    "count_35": 47
  },
  "2000": {
    "count_96": 1.25,
    "count_64": 10,
    "count_35": 30.25
  },
  "2001": {
    "count_96": 3.75,
    "count_64": 15.75,
    "count_35": 42
  },
  "2002": {
    "count_96": 3,
    "count_64": 8.75,
    "count_35": 42.25
  },
  "2003": {
    "count_96": 7.5,
    "count_64": 14.5,
    "count_35": 40.5
  },
  "2004": {
    "count_96": 14,
    "count_64": 26.75,
    "count_35": 51.5
  },
  "2005": {
    "count_96": 17.25,
    "count_64": 37.25,
    "count_35": 82.25
  },
  "2006": {
    "count_96": 0,
    "count_64": 3.75,
    "count_35": 21.25
  },
  "2007": {
    "count_96": 6,
    "count_64": 10.5,
    "count_35": 25.25
  },
  "2008": {
    "count_96": 5.5,
    "count_64": 23.25,
    "count_35": 64.75
  },
  "2009": {
    "count_96": 1.25,
    "count_64": 5.75,
    "count_35": 13.25
  },
  "2010": {
    "count_96": 4.25,
    "count_64": 21,
    "count_35": 51.75
  },
  "2011": {
    "count_96": 4.5,
    "count_64": 19.25,
    "count_35": 60
  },
  "2012": {
    "count_96": 0.25,
    "count_64": 12.25,
    "count_35": 48
  },
  "2013": {
    "count_96": 0,
    "count_64": 1.5,
    "count_35": 14
  },
  "2014": {
    "count_96": 3.25,
    "count_64": 12,
    "count_35": 24.25
  },
  "2015": {
    "count_96": 3.5,
    "count_64": 7.25,
    "count_35": 19.75
  },
  "2016": {
    "count_96": 8.75,
    "count_64": 16.25,
    "count_35": 42.5
  },
  "2017": {
    "count_96": 12.25,
    "count_64": 32.25,
    "count_35": 59.75
  },
  "2018": {
    "count_96": 4,
    "count_64": 9,
    "count_35": 24.25
  },
  "2019": {
    "count_96": 6.25,
    "count_64": 14.25,
    "count_35": 39.25
  },
  "2020": {
    "count_96": 5.5,
    "count_64": 28,
    "count_35": 81
  }
};

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "option_factory": () => (/* binding */ option_factory),
/* harmony export */   "year_select_factory": () => (/* binding */ year_select_factory),
/* harmony export */   "parseYears": () => (/* binding */ parseYears),
/* harmony export */   "parseTrace": () => (/* binding */ parseTrace)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");

var option_factory = function option_factory(value, innerHTML) {
  var opt = document.createElement('option');
  opt.value = String(value);
  opt.innerHTML = String(innerHTML);
  return opt;
};
var year_select_factory = function year_select_factory(label, year_selected) {
  var year_select = document.getElementById("year-".concat(label, "-select"));
  var selected_index;
  var index = 0;

  for (var y = _config__WEBPACK_IMPORTED_MODULE_0__.MIN_YEAR; y <= _config__WEBPACK_IMPORTED_MODULE_0__.MAX_YEAR; y++) {
    if (parseInt(year_selected) == y) {
      selected_index = index;
    }

    year_select.appendChild(option_factory(String(y), String(y)));
    index++;
  }

  year_select.options.selectedIndex = selected_index;
  return year_select;
};
var parseYears = function parseYears(data) {
  var keys = Object.keys(data);
  var years = keys.map(function (k) {
    return parseInt(k);
  });
  return years;
};
var parseTrace = function parseTrace(key, data, years) {
  var trace = {
    x: years,
    y: [],
    mode: 'none',
    name: _config__WEBPACK_IMPORTED_MODULE_0__.legend_labels[key],
    stackgroup: 'one',
    fillcolor: _config__WEBPACK_IMPORTED_MODULE_0__.fill_colors[key]
  };
  years.forEach(function (year) {
    trace['y'].push(data[year][key]);
  });
  return trace;
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
___CSS_LOADER_EXPORT___.push([module.id, "\nbody {\n    margin:0; padding:0;\n}\n\n#menu {\n    position: absolute; top: 0; right: 0; left: 0;\n    height: 130px;\n    padding: 10px;\n}\n\n#menu div {\n    margin: 10px;\n}\n\n#map {\n    position: absolute; top: 150px; bottom:0; right: 50%; left:0;\n}\n\n#plot {\n    position: absolute; top:150px; bottom:0; right: 0; left:50%;\n}\n\n#feature-info {\n    position: absolute;\n    top: 160px;\n    right: 50.5%;\n    z-index: 400;\n    padding: 1em;\n    background: white;\n    max-width: 300px;\n    overflow: visible;\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":";AACA;IACI,QAAQ,EAAE,SAAS;AACvB;;AAEA;IACI,kBAAkB,EAAE,MAAM,EAAE,QAAQ,EAAE,OAAO;IAC7C,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB,EAAE,UAAU,EAAE,QAAQ,EAAE,UAAU,EAAE,MAAM;AAChE;;AAEA;IACI,kBAAkB,EAAE,SAAS,EAAE,QAAQ,EAAE,QAAQ,EAAE,QAAQ;AAC/D;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;AACrB","sourcesContent":["\nbody {\n    margin:0; padding:0;\n}\n\n#menu {\n    position: absolute; top: 0; right: 0; left: 0;\n    height: 130px;\n    padding: 10px;\n}\n\n#menu div {\n    margin: 10px;\n}\n\n#map {\n    position: absolute; top: 150px; bottom:0; right: 50%; left:0;\n}\n\n#plot {\n    position: absolute; top:150px; bottom:0; right: 0; left:50%;\n}\n\n#feature-info {\n    position: absolute;\n    top: 160px;\n    right: 50.5%;\n    z-index: 400;\n    padding: 1em;\n    background: white;\n    max-width: 300px;\n    overflow: visible;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/data.js");




/* State */

var storm_where = _config__WEBPACK_IMPORTED_MODULE_1__.storm_types.count_35.where;
var year_start = '2010';
var year_end = '2020';
/* Plotly Setup */

var years = _util__WEBPACK_IMPORTED_MODULE_2__.parseYears(_data__WEBPACK_IMPORTED_MODULE_3__.data);
var trace_count_96 = _util__WEBPACK_IMPORTED_MODULE_2__.parseTrace('count_96', _data__WEBPACK_IMPORTED_MODULE_3__.data, years);
var trace_count_64 = _util__WEBPACK_IMPORTED_MODULE_2__.parseTrace('count_64', _data__WEBPACK_IMPORTED_MODULE_3__.data, years);
var trace_count_35 = _util__WEBPACK_IMPORTED_MODULE_2__.parseTrace('count_35', _data__WEBPACK_IMPORTED_MODULE_3__.data, years);
var layout = {
  title: _config__WEBPACK_IMPORTED_MODULE_1__.title
};
var all_traces = [trace_count_96, trace_count_64, trace_count_35];
Plotly.newPlot('plot', all_traces, layout);
/* Selectors */
// Where clause generator

var year_where = function year_where(start, end) {
  return "YEAR>=".concat(start, " AND YEAR<=").concat(end);
};

var where_factory = function where_factory() {
  return "".concat(year_where(year_start, year_end), " AND ").concat(storm_where);
}; // Select storm type


var storm_select = document.getElementById('storm-type-select');

for (var _i = 0, _Object$keys = Object.keys(_config__WEBPACK_IMPORTED_MODULE_1__.storm_types); _i < _Object$keys.length; _i++) {
  var key = _Object$keys[_i];
  var value = _config__WEBPACK_IMPORTED_MODULE_1__.storm_types[key]['where'];
  var label = _config__WEBPACK_IMPORTED_MODULE_1__.storm_types[key]['label'];
  storm_select.appendChild(_util__WEBPACK_IMPORTED_MODULE_2__.option_factory(value, label));
}

storm_select.addEventListener('change', function () {
  storm_where = storm_select.value;
  var new_where = where_factory(storm_where, year_where);
  console.log(new_where);
  layer.setWhere(new_where);
}); // Select start year

var year_start_select = _util__WEBPACK_IMPORTED_MODULE_2__.year_select_factory('start', year_start);
year_start_select.addEventListener('change', function () {
  year_start = year_start_select.value;
  var new_where = where_factory();
  console.log(new_where);
  layer.setWhere(new_where);
}); // Select end year

var year_end_select = _util__WEBPACK_IMPORTED_MODULE_2__.year_select_factory('end', year_end);
year_end_select.addEventListener('change', function () {
  year_end = year_end_select.value;
  var new_where = where_factory();
  console.log(new_where);
  layer.setWhere(new_where);
});
/* Map */

var map = L.map('map').setView([37.837, -100.479], 5);
var basemap = L.esri.basemapLayer('Streets').addTo(map); // dummy feature for logging
//let f;

var layer = L.esri.featureLayer({
  url: 'https://services2.arcgis.com/FiaPA4ga0iQKduv3/ArcGIS/rest/services/IBTrACS_ALL_list_v04r00_lines_1/FeatureServer/0',
  style: function style(feature) {
    //if (!f) { f = feature;  console.log(feature) }
    var c;
    var prop = feature.properties.USA_WIND;

    if (prop < 64 && prop >= 34) {
      c = 'red';
    }

    if (prop >= 64 && prop < 96) {
      c = 'green';
    }

    if (prop >= 96) {
      c = 'blue';
    }

    ;

    if (!c) {
      c = 'white';
    }

    return {
      color: c,
      opacity: .9,
      weight: 5
    };
  },
  where: where_factory()
}).addTo(map);
var feature_info = document.getElementById('feature-info');
layer.on('mouseover', function (event) {
  feature_info.innerHTML = render_feature(event.layer.feature);
});
layer.on('mouseout', function (event) {
  feature_info.innerHTML = 'Hover over a storm track for more data';
});

var render_feature = function render_feature(f) {
  var props = f.properties;
  var display_props = ['LAT', 'LON', 'USA_WIND', 'year', 'month', 'day', 'NAME'];
  var rendered = "\n    Name: ".concat(props['NAME'], " <br>\n    Wind Speed: ").concat(props['USA_WIND'], " knots <br>\n    Date: ").concat(props['month'], "/").concat(props['day'], "/").concat(props['year'], " <br>\n    Lat: ").concat(props['LAT'], " <br>\n    Lon: ").concat(props['LON'], " <br>\n  ");
  return rendered;
};

var render_prop = function render_prop(key, value) {
  return "".concat(key, ": ").concat(value, "\n");
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ08sSUFBTUEsS0FBSyxHQUFHLHdDQUFkO0FBRUEsSUFBTUMsUUFBUSxHQUFHLElBQWpCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHLElBQWpCO0FBRUEsSUFBTUMsV0FBVyxHQUFHO0FBQ3ZCLGNBQVk7QUFDVixhQUFTLDhCQURDO0FBRVYsYUFBUztBQUZDLEdBRFc7QUFLdkIsY0FBWTtBQUNWLGFBQVMsOEJBREM7QUFFVixhQUFTO0FBRkMsR0FMVztBQVN2QixjQUFZO0FBQ1YsYUFBUyxjQURDO0FBRVYsYUFBUztBQUZDO0FBVFcsQ0FBcEI7QUFlQSxJQUFNQyxhQUFhLEdBQUc7QUFDM0IsY0FBYSw0QkFEYztBQUUzQixjQUFhLHNCQUZjO0FBRzNCLGNBQWE7QUFIYyxDQUF0QjtBQU1BLElBQU1DLFdBQVcsR0FBRztBQUN6QixjQUFhLFNBRFk7QUFFekIsY0FBYSxTQUZZO0FBR3pCLGNBQWE7QUFIWSxDQUFwQjs7Ozs7Ozs7Ozs7Ozs7QUMxQkEsSUFBTUMsSUFBSSxHQUFHO0FBQ2xCLFVBQVE7QUFDTixnQkFBWSxJQUROO0FBRU4sZ0JBQVksRUFGTjtBQUdOLGdCQUFZO0FBSE4sR0FEVTtBQU1sQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBTlU7QUFXbEIsVUFBUTtBQUNOLGdCQUFZLEdBRE47QUFFTixnQkFBWSxLQUZOO0FBR04sZ0JBQVk7QUFITixHQVhVO0FBZ0JsQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBaEJVO0FBcUJsQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBckJVO0FBMEJsQixVQUFRO0FBQ04sZ0JBQVksR0FETjtBQUVOLGdCQUFZLEVBRk47QUFHTixnQkFBWTtBQUhOLEdBMUJVO0FBK0JsQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBL0JVO0FBb0NsQixVQUFRO0FBQ04sZ0JBQVksR0FETjtBQUVOLGdCQUFZLEdBRk47QUFHTixnQkFBWTtBQUhOLEdBcENVO0FBeUNsQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBekNVO0FBOENsQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBOUNVO0FBbURsQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEVBRk47QUFHTixnQkFBWTtBQUhOLEdBbkRVO0FBd0RsQixVQUFRO0FBQ04sZ0JBQVksS0FETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBeERVO0FBNkRsQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBN0RVO0FBa0VsQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBbEVVO0FBdUVsQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEVBRk47QUFHTixnQkFBWTtBQUhOLEdBdkVVO0FBNEVsQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBNUVVO0FBaUZsQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBakZVO0FBc0ZsQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBdEZVO0FBMkZsQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLEdBRk47QUFHTixnQkFBWTtBQUhOLEdBM0ZVO0FBZ0dsQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBaEdVO0FBcUdsQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLENBRk47QUFHTixnQkFBWTtBQUhOLEdBckdVO0FBMEdsQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBMUdVO0FBK0dsQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBL0dVO0FBb0hsQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBcEhVO0FBeUhsQixVQUFRO0FBQ04sZ0JBQVksR0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBekhVO0FBOEhsQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBOUhVO0FBbUlsQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBbklVO0FBd0lsQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBeElVO0FBNklsQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLENBRk47QUFHTixnQkFBWTtBQUhOLEdBN0lVO0FBa0psQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBbEpVO0FBdUpsQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEdBRk47QUFHTixnQkFBWTtBQUhOLEdBdkpVO0FBNEpsQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEVBRk47QUFHTixnQkFBWTtBQUhOLEdBNUpVO0FBaUtsQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLENBRk47QUFHTixnQkFBWTtBQUhOLEdBaktVO0FBc0tsQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBdEtVO0FBMktsQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBM0tVO0FBZ0xsQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBaExVO0FBcUxsQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBckxVO0FBMExsQixVQUFRO0FBQ04sZ0JBQVksR0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBMUxVO0FBK0xsQixVQUFRO0FBQ04sZ0JBQVksR0FETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBL0xVO0FBb01sQixVQUFRO0FBQ04sZ0JBQVksR0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBcE1VO0FBeU1sQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBek1VO0FBOE1sQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBOU1VO0FBbU5sQixVQUFRO0FBQ04sZ0JBQVksR0FETjtBQUVOLGdCQUFZLENBRk47QUFHTixnQkFBWTtBQUhOLEdBbk5VO0FBd05sQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEdBRk47QUFHTixnQkFBWTtBQUhOLEdBeE5VO0FBNk5sQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLENBRk47QUFHTixnQkFBWTtBQUhOLEdBN05VO0FBa09sQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBbE9VO0FBdU9sQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBdk9VO0FBNE9sQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEdBRk47QUFHTixnQkFBWTtBQUhOLEdBNU9VO0FBaVBsQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBalBVO0FBc1BsQixVQUFRO0FBQ04sZ0JBQVksR0FETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBdFBVO0FBMlBsQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEVBRk47QUFHTixnQkFBWTtBQUhOLEdBM1BVO0FBZ1FsQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBaFFVO0FBcVFsQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBclFVO0FBMFFsQixVQUFRO0FBQ04sZ0JBQVksR0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBMVFVO0FBK1FsQixVQUFRO0FBQ04sZ0JBQVksRUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBL1FVO0FBb1JsQixVQUFRO0FBQ04sZ0JBQVksS0FETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBcFJVO0FBeVJsQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBelJVO0FBOFJsQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBOVJVO0FBbVNsQixVQUFRO0FBQ04sZ0JBQVksR0FETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBblNVO0FBd1NsQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBeFNVO0FBNlNsQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEVBRk47QUFHTixn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QUFLLENBQUMsS0FBRCxDQUpBLDZCQUtMQSxLQUFLLENBQUMsS0FBRCxDQUxBLGNBQWQ7QUFPQSxTQUFPRSxRQUFQO0FBQ0QsQ0FYRDs7QUFhQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDNUQsR0FBRCxFQUFNekIsS0FBTixFQUFnQjtBQUNsQyxtQkFBVXlCLEdBQVYsZUFBa0J6QixLQUFsQjtBQUNELENBRkQsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY29uc3QgdGl0bGUgPSAnTm9ydGggQXRsYW50aWMgV2VzdCBvZiA2MMKwVzogMTk1MC0yMDIwJ1xuXG5leHBvcnQgY29uc3QgTUlOX1lFQVIgPSAxOTUwO1xuZXhwb3J0IGNvbnN0IE1BWF9ZRUFSID0gMjAyMDtcblxuZXhwb3J0IGNvbnN0IHN0b3JtX3R5cGVzID0ge1xuICAgICdjb3VudF8zNSc6IHtcbiAgICAgICd3aGVyZSc6ICdVU0FfV0lORDw2NCBBTkQgVVNBX1dJTkQ+PTM0JyxcbiAgICAgICdsYWJlbCc6ICdOYW1lZCBTdG9ybXMnXG4gICAgfSxcbiAgICAnY291bnRfNjQnOiB7XG4gICAgICAnd2hlcmUnOiAnVVNBX1dJTkQ+PTY0IEFORCBVU0FfV0lORDw5NicsXG4gICAgICAnbGFiZWwnOiAnSHVycmljYW5lcydcbiAgICB9LFxuICAgICdjb3VudF85Nic6IHtcbiAgICAgICd3aGVyZSc6ICdVU0FfV0lORD49OTYnLFxuICAgICAgJ2xhYmVsJzogJ01ham9yIEh1cnJpY2FuZXMnXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgbGVnZW5kX2xhYmVscyA9IHtcbiAgJ2NvdW50Xzk2JyA6ICdNYWpvciBIdXJyaWNhbmVzICg+PSA5Nmt0KScsXG4gICdjb3VudF82NCcgOiAnSHVycmljYW5lcyAoPj0gNjRrdCknLFxuICAnY291bnRfMzUnIDogJ05hbWVkIFN0b3JtcyAoPj0gMzRrdCknXG59XG5cbmV4cG9ydCBjb25zdCBmaWxsX2NvbG9ycyA9IHtcbiAgJ2NvdW50Xzk2JyA6ICcjM2U5OWU4JyxcbiAgJ2NvdW50XzY0JyA6ICcjNGNiYzE4JyxcbiAgJ2NvdW50XzM1JyA6ICcjNDg5NTI0J1xufVxuXG5cbiIsIlxuZXhwb3J0IGNvbnN0IGRhdGEgPSB7XG4gIFwiMTk1MFwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAxMS41LFxuICAgIFwiY291bnRfNjRcIjogMzgsXG4gICAgXCJjb3VudF8zNVwiOiA1OS41XG4gIH0sXG4gIFwiMTk1MVwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAzLjc1LFxuICAgIFwiY291bnRfNjRcIjogMjMuMjUsXG4gICAgXCJjb3VudF8zNVwiOiA0MS43NVxuICB9LFxuICBcIjE5NTJcIjoge1xuICAgIFwiY291bnRfOTZcIjogMi41LFxuICAgIFwiY291bnRfNjRcIjogMTQuMjUsXG4gICAgXCJjb3VudF8zNVwiOiAyN1xuICB9LFxuICBcIjE5NTNcIjoge1xuICAgIFwiY291bnRfOTZcIjogMy4yNSxcbiAgICBcImNvdW50XzY0XCI6IDE0LjI1LFxuICAgIFwiY291bnRfMzVcIjogNDRcbiAgfSxcbiAgXCIxOTU0XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDcsXG4gICAgXCJjb3VudF82NFwiOiAyMC41LFxuICAgIFwiY291bnRfMzVcIjogNDVcbiAgfSxcbiAgXCIxOTU1XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDguNSxcbiAgICBcImNvdW50XzY0XCI6IDMzLFxuICAgIFwiY291bnRfMzVcIjogNTkuMjVcbiAgfSxcbiAgXCIxOTU2XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDEuNzUsXG4gICAgXCJjb3VudF82NFwiOiAxMC43NSxcbiAgICBcImNvdW50XzM1XCI6IDI5LjVcbiAgfSxcbiAgXCIxOTU3XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDAuNSxcbiAgICBcImNvdW50XzY0XCI6IDUuNSxcbiAgICBcImNvdW50XzM1XCI6IDIyLjc1XG4gIH0sXG4gIFwiMTk1OFwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAzLjc1LFxuICAgIFwiY291bnRfNjRcIjogMTYuNzUsXG4gICAgXCJjb3VudF8zNVwiOiA0MS41XG4gIH0sXG4gIFwiMTk1OVwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAzLjI1LFxuICAgIFwiY291bnRfNjRcIjogMTIuMjUsXG4gICAgXCJjb3VudF8zNVwiOiAzNi4yNVxuICB9LFxuICBcIjE5NjBcIjoge1xuICAgIFwiY291bnRfOTZcIjogNi43NSxcbiAgICBcImNvdW50XzY0XCI6IDEyLFxuICAgIFwiY291bnRfMzVcIjogMjdcbiAgfSxcbiAgXCIxOTYxXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDEzLjc1LFxuICAgIFwiY291bnRfNjRcIjogMjQuNzUsXG4gICAgXCJjb3VudF8zNVwiOiA0Ni4yNVxuICB9LFxuICBcIjE5NjJcIjoge1xuICAgIFwiY291bnRfOTZcIjogMCxcbiAgICBcImNvdW50XzY0XCI6IDExLjI1LFxuICAgIFwiY291bnRfMzVcIjogMjUuNzVcbiAgfSxcbiAgXCIxOTYzXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDMuNzUsXG4gICAgXCJjb3VudF82NFwiOiAyMi43NSxcbiAgICBcImNvdW50XzM1XCI6IDM1Ljc1XG4gIH0sXG4gIFwiMTk2NFwiOiB7XG4gICAgXCJjb3VudF85NlwiOiA4Ljc1LFxuICAgIFwiY291bnRfNjRcIjogMzMsXG4gICAgXCJjb3VudF8zNVwiOiA1My41XG4gIH0sXG4gIFwiMTk2NVwiOiB7XG4gICAgXCJjb3VudF85NlwiOiA2LjI1LFxuICAgIFwiY291bnRfNjRcIjogOS43NSxcbiAgICBcImNvdW50XzM1XCI6IDIxXG4gIH0sXG4gIFwiMTk2NlwiOiB7XG4gICAgXCJjb3VudF85NlwiOiA4Ljc1LFxuICAgIFwiY291bnRfNjRcIjogMjUuNzUsXG4gICAgXCJjb3VudF8zNVwiOiAzNi41XG4gIH0sXG4gIFwiMTk2N1wiOiB7XG4gICAgXCJjb3VudF85NlwiOiA1Ljc1LFxuICAgIFwiY291bnRfNjRcIjogMTguNSxcbiAgICBcImNvdW50XzM1XCI6IDI4Ljc1XG4gIH0sXG4gIFwiMTk2OFwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAwLFxuICAgIFwiY291bnRfNjRcIjogNy41LFxuICAgIFwiY291bnRfMzVcIjogMjAuNVxuICB9LFxuICBcIjE5NjlcIjoge1xuICAgIFwiY291bnRfOTZcIjogNC43NSxcbiAgICBcImNvdW50XzY0XCI6IDI0LjUsXG4gICAgXCJjb3VudF8zNVwiOiA0OS43NVxuICB9LFxuICBcIjE5NzBcIjoge1xuICAgIFwiY291bnRfOTZcIjogMSxcbiAgICBcImNvdW50XzY0XCI6IDYsXG4gICAgXCJjb3VudF8zNVwiOiAyMC41XG4gIH0sXG4gIFwiMTk3MVwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAxLFxuICAgIFwiY291bnRfNjRcIjogMTcuMjUsXG4gICAgXCJjb3VudF8zNVwiOiA0Ni4yNVxuICB9LFxuICBcIjE5NzJcIjoge1xuICAgIFwiY291bnRfOTZcIjogMCxcbiAgICBcImNvdW50XzY0XCI6IDIuNzUsXG4gICAgXCJjb3VudF8zNVwiOiAxNy41XG4gIH0sXG4gIFwiMTk3M1wiOiB7XG4gICAgXCJjb3VudF85NlwiOiAwLFxuICAgIFwiY291bnRfNjRcIjogMy4yNSxcbiAgICBcImNvdW50XzM1XCI6IDIwLjVcbiAgfSxcbiAgXCIxOTc0XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDMuNSxcbiAgICBcImNvdW50XzY0XCI6IDEwLjUsXG4gICAgXCJjb3VudF8zNVwiOiAzMS43NVxuICB9LFxuICBcIjE5NzVcIjoge1xuICAgIFwiY291bnRfOTZcIjogMi4yNSxcbiAgICBcImNvdW50XzY0XCI6IDExLjUsXG4gICAgXCJjb3VudF8zNVwiOiAyNVxuICB9LFxuICBcIjE5NzZcIjoge1xuICAgIFwiY291bnRfOTZcIjogMC43NSxcbiAgICBcImNvdW50XzY0XCI6IDMuNzUsXG4gICAgXCJjb3VudF8zNVwiOiAxNS4yNVxuICB9LFxuICBcIjE5NzdcIjoge1xuICAgIFwiY291bnRfOTZcIjogMSxcbiAgICBcImNvdW50XzY0XCI6IDUuMjUsXG4gICAgXCJjb3VudF8zNVwiOiAxMy4yNVxuICB9LFxuICBcIjE5NzhcIjoge1xuICAgIFwiY291bnRfOTZcIjogMyxcbiAgICBcImNvdW50XzY0XCI6IDgsXG4gICAgXCJjb3VudF8zNVwiOiAyMlxuICB9LFxuICBcIjE5NzlcIjoge1xuICAgIFwiY291bnRfOTZcIjogNC4yNSxcbiAgICBcImNvdW50XzY0XCI6IDExLjc1LFxuICAgIFwiY291bnRfMzVcIjogMjguMjVcbiAgfSxcbiAgXCIxOTgwXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDYuMjUsXG4gICAgXCJjb3VudF82NFwiOiA5LjUsXG4gICAgXCJjb3VudF8zNVwiOiAyMi4yNVxuICB9LFxuICBcIjE5ODFcIjoge1xuICAgIFwiY291bnRfOTZcIjogMi4yNSxcbiAgICBcImNvdW50XzY0XCI6IDExLFxuICAgIFwiY291bnRfMzVcIjogMzZcbiAgfSxcbiAgXCIxOTgyXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDAuNzUsXG4gICAgXCJjb3VudF82NFwiOiA0LFxuICAgIFwiY291bnRfMzVcIjogMTFcbiAgfSxcbiAgXCIxOTgzXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDAuMjUsXG4gICAgXCJjb3VudF82NFwiOiAyLjI1LFxuICAgIFwiY291bnRfMzVcIjogMTEuMjVcbiAgfSxcbiAgXCIxOTg0XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDAuNzUsXG4gICAgXCJjb3VudF82NFwiOiAxMS41LFxuICAgIFwiY291bnRfMzVcIjogMzJcbiAgfSxcbiAgXCIxOTg1XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDQsXG4gICAgXCJjb3VudF82NFwiOiAxOC4yNSxcbiAgICBcImNvdW50XzM1XCI6IDQxLjVcbiAgfSxcbiAgXCIxOTg2XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDAsXG4gICAgXCJjb3VudF82NFwiOiAyLjI1LFxuICAgIFwiY291bnRfMzVcIjogMTIuNzVcbiAgfSxcbiAgXCIxOTg3XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDAuNSxcbiAgICBcImNvdW50XzY0XCI6IDIuMjUsXG4gICAgXCJjb3VudF8zNVwiOiAxMi41XG4gIH0sXG4gIFwiMTk4OFwiOiB7XG4gICAgXCJjb3VudF85NlwiOiA2LjUsXG4gICAgXCJjb3VudF82NFwiOiAxMi4yNSxcbiAgICBcImNvdW50XzM1XCI6IDI4LjVcbiAgfSxcbiAgXCIxOTg5XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDMuNSxcbiAgICBcImNvdW50XzY0XCI6IDEyLjUsXG4gICAgXCJjb3VudF8zNVwiOiAyNlxuICB9LFxuICBcIjE5OTBcIjoge1xuICAgIFwiY291bnRfOTZcIjogMCxcbiAgICBcImNvdW50XzY0XCI6IDkuMjUsXG4gICAgXCJjb3VudF8zNVwiOiAyNS41XG4gIH0sXG4gIFwiMTk5MVwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAxLjI1LFxuICAgIFwiY291bnRfNjRcIjogNy4yNSxcbiAgICBcImNvdW50XzM1XCI6IDE0LjVcbiAgfSxcbiAgXCIxOTkyXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDMuNSxcbiAgICBcImNvdW50XzY0XCI6IDUsXG4gICAgXCJjb3VudF8zNVwiOiAxN1xuICB9LFxuICBcIjE5OTNcIjoge1xuICAgIFwiY291bnRfOTZcIjogMC43NSxcbiAgICBcImNvdW50XzY0XCI6IDcuNSxcbiAgICBcImNvdW50XzM1XCI6IDIwLjI1XG4gIH0sXG4gIFwiMTk5NFwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAwLFxuICAgIFwiY291bnRfNjRcIjogMSxcbiAgICBcImNvdW50XzM1XCI6IDE2XG4gIH0sXG4gIFwiMTk5NVwiOiB7XG4gICAgXCJjb3VudF85NlwiOiA3LjI1LFxuICAgIFwiY291bnRfNjRcIjogMzQuNSxcbiAgICBcImNvdW50XzM1XCI6IDYzXG4gIH0sXG4gIFwiMTk5NlwiOiB7XG4gICAgXCJjb3VudF85NlwiOiA5LjI1LFxuICAgIFwiY291bnRfNjRcIjogMjkuNSxcbiAgICBcImNvdW50XzM1XCI6IDUwXG4gIH0sXG4gIFwiMTk5N1wiOiB7XG4gICAgXCJjb3VudF85NlwiOiAxLjc1LFxuICAgIFwiY291bnRfNjRcIjogNS41LFxuICAgIFwiY291bnRfMzVcIjogMThcbiAgfSxcbiAgXCIxOTk4XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDgsXG4gICAgXCJjb3VudF82NFwiOiAyNy41LFxuICAgIFwiY291bnRfMzVcIjogNDIuNVxuICB9LFxuICBcIjE5OTlcIjoge1xuICAgIFwiY291bnRfOTZcIjogNy41LFxuICAgIFwiY291bnRfNjRcIjogMjYuNzUsXG4gICAgXCJjb3VudF8zNVwiOiA0N1xuICB9LFxuICBcIjIwMDBcIjoge1xuICAgIFwiY291bnRfOTZcIjogMS4yNSxcbiAgICBcImNvdW50XzY0XCI6IDEwLFxuICAgIFwiY291bnRfMzVcIjogMzAuMjVcbiAgfSxcbiAgXCIyMDAxXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDMuNzUsXG4gICAgXCJjb3VudF82NFwiOiAxNS43NSxcbiAgICBcImNvdW50XzM1XCI6IDQyXG4gIH0sXG4gIFwiMjAwMlwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAzLFxuICAgIFwiY291bnRfNjRcIjogOC43NSxcbiAgICBcImNvdW50XzM1XCI6IDQyLjI1XG4gIH0sXG4gIFwiMjAwM1wiOiB7XG4gICAgXCJjb3VudF85NlwiOiA3LjUsXG4gICAgXCJjb3VudF82NFwiOiAxNC41LFxuICAgIFwiY291bnRfMzVcIjogNDAuNVxuICB9LFxuICBcIjIwMDRcIjoge1xuICAgIFwiY291bnRfOTZcIjogMTQsXG4gICAgXCJjb3VudF82NFwiOiAyNi43NSxcbiAgICBcImNvdW50XzM1XCI6IDUxLjVcbiAgfSxcbiAgXCIyMDA1XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDE3LjI1LFxuICAgIFwiY291bnRfNjRcIjogMzcuMjUsXG4gICAgXCJjb3VudF8zNVwiOiA4Mi4yNVxuICB9LFxuICBcIjIwMDZcIjoge1xuICAgIFwiY291bnRfOTZcIjogMCxcbiAgICBcImNvdW50XzY0XCI6IDMuNzUsXG4gICAgXCJjb3VudF8zNVwiOiAyMS4yNVxuICB9LFxuICBcIjIwMDdcIjoge1xuICAgIFwiY291bnRfOTZcIjogNixcbiAgICBcImNvdW50XzY0XCI6IDEwLjUsXG4gICAgXCJjb3VudF8zNVwiOiAyNS4yNVxuICB9LFxuICBcIjIwMDhcIjoge1xuICAgIFwiY291bnRfOTZcIjogNS41LFxuICAgIFwiY291bnRfNjRcIjogMjMuMjUsXG4gICAgXCJjb3VudF8zNVwiOiA2NC43NVxuICB9LFxuICBcIjIwMDlcIjoge1xuICAgIFwiY291bnRfOTZcIjogMS4yNSxcbiAgICBcImNvdW50XzY0XCI6IDUuNzUsXG4gICAgXCJjb3VudF8zNVwiOiAxMy4yNVxuICB9LFxuICBcIjIwMTBcIjoge1xuICAgIFwiY291bnRfOTZcIjogNC4yNSxcbiAgICBcImNvdW50XzY0XCI6IDIxLFxuICAgIFwiY291bnRfMzVcIjogNTEuNzVcbiAgfSxcbiAgXCIyMDExXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDQuNSxcbiAgICBcImNvdW50XzY0XCI6IDE5LjI1LFxuICAgIFwiY291bnRfMzVcIjogNjBcbiAgfSxcbiAgXCIyMDEyXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDAuMjUsXG4gICAgXCJjb3VudF82NFwiOiAxMi4yNSxcbiAgICBcImNvdW50XzM1XCI6IDQ4XG4gIH0sXG4gIFwiMjAxM1wiOiB7XG4gICAgXCJjb3VudF85NlwiOiAwLFxuICAgIFwiY291bnRfNjRcIjogMS41LFxuICAgIFwiY291bnRfMzVcIjogMTRcbiAgfSxcbiAgXCIyMDE0XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDMuMjUsXG4gICAgXCJjb3VudF82NFwiOiAxMixcbiAgICBcImNvdW50XzM1XCI6IDI0LjI1XG4gIH0sXG4gIFwiMjAxNVwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAzLjUsXG4gICAgXCJjb3VudF82NFwiOiA3LjI1LFxuICAgIFwiY291bnRfMzVcIjogMTkuNzVcbiAgfSxcbiAgXCIyMDE2XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDguNzUsXG4gICAgXCJjb3VudF82NFwiOiAxNi4yNSxcbiAgICBcImNvdW50XzM1XCI6IDQyLjVcbiAgfSxcbiAgXCIyMDE3XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDEyLjI1LFxuICAgIFwiY291bnRfNjRcIjogMzIuMjUsXG4gICAgXCJjb3VudF8zNVwiOiA1OS43NVxuICB9LFxuICBcIjIwMThcIjoge1xuICAgIFwiY291bnRfOTZcIjogNCxcbiAgICBcImNvdW50XzY0XCI6IDksXG4gICAgXCJjb3VudF8zNVwiOiAyNC4yNVxuICB9LFxuICBcIjIwMTlcIjoge1xuICAgIFwiY291bnRfOTZcIjogNi4yNSxcbiAgICBcImNvdW50XzY0XCI6IDE0LjI1LFxuICAgIFwiY291bnRfMzVcIjogMzkuMjVcbiAgfSxcbiAgXCIyMDIwXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDUuNSxcbiAgICBcImNvdW50XzY0XCI6IDI4LFxuICAgIFwiY291bnRfMzVcIjogODFcbiAgfVxufVxuXG4iLCJpbXBvcnQgKiBhcyBjb25maWcgZnJvbSAnLi9jb25maWcnXG5cbmV4cG9ydCBjb25zdCBvcHRpb25fZmFjdG9yeSA9IGZ1bmN0aW9uICh2YWx1ZSwgaW5uZXJIVE1MKSB7XG4gICAgdmFyIG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdC52YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgb3B0LmlubmVySFRNTCA9IFN0cmluZyhpbm5lckhUTUwpO1xuICAgIHJldHVybiBvcHQ7XG59XG5cbmV4cG9ydCBjb25zdCB5ZWFyX3NlbGVjdF9mYWN0b3J5ID0gKGxhYmVsLCB5ZWFyX3NlbGVjdGVkKSA9PiB7XG4gIGNvbnN0IHllYXJfc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHllYXItJHtsYWJlbH0tc2VsZWN0YClcbiAgbGV0IHNlbGVjdGVkX2luZGV4O1xuICBsZXQgaW5kZXggPSAwO1xuICBmb3IgKHZhciB5ID0gY29uZmlnLk1JTl9ZRUFSOyB5PD1jb25maWcuTUFYX1lFQVI7IHkrKyl7XG4gICAgICBpZiAocGFyc2VJbnQoeWVhcl9zZWxlY3RlZCkgPT0geSkgeyBzZWxlY3RlZF9pbmRleCA9IGluZGV4IH1cbiAgICAgIHllYXJfc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbl9mYWN0b3J5KFN0cmluZyh5KSwgU3RyaW5nKHkpKSlcbiAgICAgIGluZGV4Kys7XG4gIH1cbiAgeWVhcl9zZWxlY3Qub3B0aW9ucy5zZWxlY3RlZEluZGV4PXNlbGVjdGVkX2luZGV4XG4gIHJldHVybiB5ZWFyX3NlbGVjdFxufVxuXG5leHBvcnQgY29uc3QgcGFyc2VZZWFycyA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKVxuICBjb25zdCB5ZWFycyA9IGtleXMubWFwKGsgPT4gcGFyc2VJbnQoaykpXG4gIHJldHVybiB5ZWFyc1xufVxuXG5leHBvcnQgY29uc3QgcGFyc2VUcmFjZSA9IChrZXksIGRhdGEsIHllYXJzKSA9PiB7XG4gIGNvbnN0IHRyYWNlID0ge1xuICAgIHg6IHllYXJzLFxuICAgIHk6IFtdLFxuICAgIG1vZGU6ICdub25lJyxcbiAgICBuYW1lOiBjb25maWcubGVnZW5kX2xhYmVsc1trZXldLFxuICAgIHN0YWNrZ3JvdXA6ICdvbmUnLFxuICAgIGZpbGxjb2xvcjogY29uZmlnLmZpbGxfY29sb3JzW2tleV1cbiAgfVxuICB5ZWFycy5mb3JFYWNoKCh5ZWFyKSA9PiB7XG4gICAgdHJhY2VbJ3knXS5wdXNoKGRhdGFbeWVhcl1ba2V5XSlcbiAgfSlcbiAgcmV0dXJuIHRyYWNlXG59XG5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuYm9keSB7XFxuICAgIG1hcmdpbjowOyBwYWRkaW5nOjA7XFxufVxcblxcbiNtZW51IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IHJpZ2h0OiAwOyBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDEzMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jbWVudSBkaXYge1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiNtYXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMTUwcHg7IGJvdHRvbTowOyByaWdodDogNTAlOyBsZWZ0OjA7XFxufVxcblxcbiNwbG90IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyB0b3A6MTUwcHg7IGJvdHRvbTowOyByaWdodDogMDsgbGVmdDo1MCU7XFxufVxcblxcbiNmZWF0dXJlLWluZm8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTYwcHg7XFxuICAgIHJpZ2h0OiA1MC41JTtcXG4gICAgei1pbmRleDogNDAwO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxRQUFRLEVBQUUsU0FBUztBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTztJQUM3QyxhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNO0FBQ2hFOztBQUVBO0lBQ0ksa0JBQWtCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUTtBQUMvRDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuYm9keSB7XFxuICAgIG1hcmdpbjowOyBwYWRkaW5nOjA7XFxufVxcblxcbiNtZW51IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IHJpZ2h0OiAwOyBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDEzMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jbWVudSBkaXYge1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiNtYXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMTUwcHg7IGJvdHRvbTowOyByaWdodDogNTAlOyBsZWZ0OjA7XFxufVxcblxcbiNwbG90IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyB0b3A6MTUwcHg7IGJvdHRvbTowOyByaWdodDogMDsgbGVmdDo1MCU7XFxufVxcblxcbiNmZWF0dXJlLWluZm8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTYwcHg7XFxuICAgIHJpZ2h0OiA1MC41JTtcXG4gICAgei1pbmRleDogNDAwO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbmltcG9ydCAnLi9pbmRleC5jc3MnXG5pbXBvcnQgKiBhcyBjb25maWcgZnJvbSAnLi9jb25maWcnXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCdcbmltcG9ydCB7IGRhdGEgfSBmcm9tICAnLi9kYXRhJ1xuXG5cbi8qIFN0YXRlICovXG5sZXQgc3Rvcm1fd2hlcmUgPSBjb25maWcuc3Rvcm1fdHlwZXNbJ2NvdW50XzM1J11bJ3doZXJlJ11cbmxldCB5ZWFyX3N0YXJ0ID0gJzIwMTAnXG5sZXQgeWVhcl9lbmQgPSAnMjAyMCdcblxuXG4vKiBQbG90bHkgU2V0dXAgKi9cblxuY29uc3QgeWVhcnMgPSB1dGlsLnBhcnNlWWVhcnMoZGF0YSlcbmNvbnN0IHRyYWNlX2NvdW50Xzk2ID0gdXRpbC5wYXJzZVRyYWNlKCdjb3VudF85NicsIGRhdGEsIHllYXJzKVxuY29uc3QgdHJhY2VfY291bnRfNjQgPSB1dGlsLnBhcnNlVHJhY2UoJ2NvdW50XzY0JywgZGF0YSwgeWVhcnMpXG5jb25zdCB0cmFjZV9jb3VudF8zNSA9IHV0aWwucGFyc2VUcmFjZSgnY291bnRfMzUnLCBkYXRhLCB5ZWFycylcblxuY29uc3QgbGF5b3V0ID0ge1xuICB0aXRsZTogY29uZmlnLnRpdGxlXG59XG5cbmNvbnN0IGFsbF90cmFjZXMgPSBbdHJhY2VfY291bnRfOTYsIHRyYWNlX2NvdW50XzY0LCB0cmFjZV9jb3VudF8zNV1cblxuUGxvdGx5Lm5ld1Bsb3QoJ3Bsb3QnLCBhbGxfdHJhY2VzLCBsYXlvdXQpO1xuXG5cbi8qIFNlbGVjdG9ycyAqL1xuXG4vLyBXaGVyZSBjbGF1c2UgZ2VuZXJhdG9yXG5jb25zdCB5ZWFyX3doZXJlID0gKHN0YXJ0LCBlbmQpID0+IGBZRUFSPj0ke3N0YXJ0fSBBTkQgWUVBUjw9JHtlbmR9YFxuY29uc3Qgd2hlcmVfZmFjdG9yeSA9ICgpID0+IGAke3llYXJfd2hlcmUoeWVhcl9zdGFydCwgeWVhcl9lbmQpfSBBTkQgJHtzdG9ybV93aGVyZX1gXG5cbi8vIFNlbGVjdCBzdG9ybSB0eXBlXG5jb25zdCBzdG9ybV9zZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Rvcm0tdHlwZS1zZWxlY3QnKVxuZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGNvbmZpZy5zdG9ybV90eXBlcykpIHtcbiAgICBsZXQgdmFsdWUgPSBjb25maWcuc3Rvcm1fdHlwZXNba2V5XVsnd2hlcmUnXVxuICAgIGxldCBsYWJlbCA9IGNvbmZpZy5zdG9ybV90eXBlc1trZXldWydsYWJlbCddXG4gICAgc3Rvcm1fc2VsZWN0LmFwcGVuZENoaWxkKHV0aWwub3B0aW9uX2ZhY3RvcnkodmFsdWUsIGxhYmVsKSk7XG59XG5cbnN0b3JtX3NlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gIHN0b3JtX3doZXJlID0gc3Rvcm1fc2VsZWN0LnZhbHVlXG4gIGxldCBuZXdfd2hlcmUgPSB3aGVyZV9mYWN0b3J5KHN0b3JtX3doZXJlLCB5ZWFyX3doZXJlKVxuICBjb25zb2xlLmxvZyhuZXdfd2hlcmUpXG4gIGxheWVyLnNldFdoZXJlKG5ld193aGVyZSlcbn0pO1xuXG4vLyBTZWxlY3Qgc3RhcnQgeWVhclxuY29uc3QgeWVhcl9zdGFydF9zZWxlY3QgPSB1dGlsLnllYXJfc2VsZWN0X2ZhY3RvcnkoJ3N0YXJ0JywgeWVhcl9zdGFydClcbnllYXJfc3RhcnRfc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgeWVhcl9zdGFydCA9IHllYXJfc3RhcnRfc2VsZWN0LnZhbHVlXG4gIGxldCBuZXdfd2hlcmUgPSB3aGVyZV9mYWN0b3J5KClcbiAgY29uc29sZS5sb2cobmV3X3doZXJlKVxuICBsYXllci5zZXRXaGVyZShuZXdfd2hlcmUpO1xufSk7XG5cbi8vIFNlbGVjdCBlbmQgeWVhclxuY29uc3QgeWVhcl9lbmRfc2VsZWN0ID0gdXRpbC55ZWFyX3NlbGVjdF9mYWN0b3J5KCdlbmQnLCB5ZWFyX2VuZClcbnllYXJfZW5kX3NlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gIHllYXJfZW5kID0geWVhcl9lbmRfc2VsZWN0LnZhbHVlXG4gIGxldCBuZXdfd2hlcmUgPSB3aGVyZV9mYWN0b3J5KClcbiAgY29uc29sZS5sb2cobmV3X3doZXJlKVxuICBsYXllci5zZXRXaGVyZShuZXdfd2hlcmUpO1xufSk7XG5cblxuLyogTWFwICovXG5cbmNvbnN0IG1hcCA9IEwubWFwKCdtYXAnKS5zZXRWaWV3KFszNy44MzcsIC0xMDAuNDc5XSwgNSk7XG5jb25zdCBiYXNlbWFwID0gTC5lc3JpLmJhc2VtYXBMYXllcignU3RyZWV0cycpLmFkZFRvKG1hcCk7XG5cbi8vIGR1bW15IGZlYXR1cmUgZm9yIGxvZ2dpbmdcbi8vbGV0IGY7XG5cbmNvbnN0IGxheWVyID0gTC5lc3JpLmZlYXR1cmVMYXllcih7XG4gIHVybDogJ2h0dHBzOi8vc2VydmljZXMyLmFyY2dpcy5jb20vRmlhUEE0Z2EwaVFLZHV2My9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9JQlRyQUNTX0FMTF9saXN0X3YwNHIwMF9saW5lc18xL0ZlYXR1cmVTZXJ2ZXIvMCcsXG4gIHN0eWxlOiBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgIC8vaWYgKCFmKSB7IGYgPSBmZWF0dXJlOyAgY29uc29sZS5sb2coZmVhdHVyZSkgfVxuICAgIGxldCBjO1xuICAgIGxldCBwcm9wID0gZmVhdHVyZS5wcm9wZXJ0aWVzLlVTQV9XSU5EXG4gICAgaWYgKHByb3AgPCA2NCAmJiBwcm9wID49IDM0KSB7IGMgPSAncmVkJyB9XG4gICAgaWYgKHByb3AgPj0gNjQgJiYgcHJvcCA8IDk2KSB7IGMgPSAnZ3JlZW4nIH1cbiAgICBpZiAocHJvcCA+PSA5NikgeyBjID0gJ2JsdWUnIH07XG4gICAgaWYgKCFjKSB7IGMgPSAnd2hpdGUnIH1cbiAgICByZXR1cm4geyBjb2xvcjogYywgb3BhY2l0eTogLjksIHdlaWdodDogNSB9O1xuICB9LFxuICB3aGVyZTogd2hlcmVfZmFjdG9yeSgpXG59KS5hZGRUbyhtYXApO1xuXG5jb25zdCBmZWF0dXJlX2luZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVhdHVyZS1pbmZvJylcblxubGF5ZXIub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChldmVudCkge1xuICBmZWF0dXJlX2luZm8uaW5uZXJIVE1MID0gcmVuZGVyX2ZlYXR1cmUoZXZlbnQubGF5ZXIuZmVhdHVyZSlcbn0pXG5cbmxheWVyLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChldmVudCkge1xuICBmZWF0dXJlX2luZm8uaW5uZXJIVE1MID0gJ0hvdmVyIG92ZXIgYSBzdG9ybSB0cmFjayBmb3IgbW9yZSBkYXRhJ1xufSlcblxuY29uc3QgcmVuZGVyX2ZlYXR1cmUgPSBmID0+IHtcbiAgY29uc3QgcHJvcHMgPSBmLnByb3BlcnRpZXNcbiAgY29uc3QgZGlzcGxheV9wcm9wcyA9IFsgJ0xBVCcsICdMT04nLCAnVVNBX1dJTkQnLCAneWVhcicsICdtb250aCcsICdkYXknLCAnTkFNRScgXVxuICBjb25zdCByZW5kZXJlZCA9IGBcbiAgICBOYW1lOiAke3Byb3BzWydOQU1FJ119IDxicj5cbiAgICBXaW5kIFNwZWVkOiAke3Byb3BzWydVU0FfV0lORCddfSBrbm90cyA8YnI+XG4gICAgRGF0ZTogJHtwcm9wc1snbW9udGgnXX0vJHtwcm9wc1snZGF5J119LyR7cHJvcHNbJ3llYXInXX0gPGJyPlxuICAgIExhdDogJHtwcm9wc1snTEFUJ119IDxicj5cbiAgICBMb246ICR7cHJvcHNbJ0xPTiddfSA8YnI+XG4gIGBcbiAgcmV0dXJuIHJlbmRlcmVkXG59XG5cbmNvbnN0IHJlbmRlcl9wcm9wID0gKGtleSwgdmFsdWUpID0+IHtcbiAgcmV0dXJuIGAke2tleX06ICR7dmFsdWV9XFxuYFxufVxuIl0sIm5hbWVzIjpbInRpdGxlIiwiTUlOX1lFQVIiLCJNQVhfWUVBUiIsInN0b3JtX3R5cGVzIiwibGVnZW5kX2xhYmVscyIsImZpbGxfY29sb3JzIiwiZGF0YSIsImNvbmZpZyIsIm9wdGlvbl9mYWN0b3J5IiwidmFsdWUiLCJpbm5lckhUTUwiLCJvcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJTdHJpbmciLCJ5ZWFyX3NlbGVjdF9mYWN0b3J5IiwibGFiZWwiLCJ5ZWFyX3NlbGVjdGVkIiwieWVhcl9zZWxlY3QiLCJnZXRFbGVtZW50QnlJZCIsInNlbGVjdGVkX2luZGV4IiwiaW5kZXgiLCJ5IiwicGFyc2VJbnQiLCJhcHBlbmRDaGlsZCIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwicGFyc2VZZWFycyIsImtleXMiLCJPYmplY3QiLCJ5ZWFycyIsIm1hcCIsImsiLCJwYXJzZVRyYWNlIiwia2V5IiwidHJhY2UiLCJ4IiwibW9kZSIsIm5hbWUiLCJzdGFja2dyb3VwIiwiZmlsbGNvbG9yIiwiZm9yRWFjaCIsInllYXIiLCJwdXNoIiwidXRpbCIsInN0b3JtX3doZXJlIiwieWVhcl9zdGFydCIsInllYXJfZW5kIiwidHJhY2VfY291bnRfOTYiLCJ0cmFjZV9jb3VudF82NCIsInRyYWNlX2NvdW50XzM1IiwibGF5b3V0IiwiYWxsX3RyYWNlcyIsIlBsb3RseSIsIm5ld1Bsb3QiLCJ5ZWFyX3doZXJlIiwic3RhcnQiLCJlbmQiLCJ3aGVyZV9mYWN0b3J5Iiwic3Rvcm1fc2VsZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5ld193aGVyZSIsImNvbnNvbGUiLCJsb2ciLCJsYXllciIsInNldFdoZXJlIiwieWVhcl9zdGFydF9zZWxlY3QiLCJ5ZWFyX2VuZF9zZWxlY3QiLCJMIiwic2V0VmlldyIsImJhc2VtYXAiLCJlc3JpIiwiYmFzZW1hcExheWVyIiwiYWRkVG8iLCJmZWF0dXJlTGF5ZXIiLCJ1cmwiLCJzdHlsZSIsImZlYXR1cmUiLCJjIiwicHJvcCIsInByb3BlcnRpZXMiLCJVU0FfV0lORCIsImNvbG9yIiwib3BhY2l0eSIsIndlaWdodCIsIndoZXJlIiwiZmVhdHVyZV9pbmZvIiwib24iLCJldmVudCIsInJlbmRlcl9mZWF0dXJlIiwiZiIsInByb3BzIiwiZGlzcGxheV9wcm9wcyIsInJlbmRlcmVkIiwicmVuZGVyX3Byb3AiXSwic291cmNlUm9vdCI6IiJ9