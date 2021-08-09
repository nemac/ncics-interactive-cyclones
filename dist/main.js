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
___CSS_LOADER_EXPORT___.push([module.id, "\nbody {\n    margin:0; padding:0;\n}\n\n#menu {\n    position: absolute; top: 0; right: 0; left: 0;\n    height: 130px;\n    padding: 10px;\n}\n\n#menu div {\n    margin: 10px;\n}\n\n#map {\n    position: absolute; top: 150px; bottom:0; right: 50%; left:0;\n}\n\n#plot {\n    position: absolute; top:150px; bottom:0; right: 0; left:50%;\n}\n\n#feature-info {\n    positon: relative; left: 50%;\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":";AACA;IACI,QAAQ,EAAE,SAAS;AACvB;;AAEA;IACI,kBAAkB,EAAE,MAAM,EAAE,QAAQ,EAAE,OAAO;IAC7C,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB,EAAE,UAAU,EAAE,QAAQ,EAAE,UAAU,EAAE,MAAM;AAChE;;AAEA;IACI,kBAAkB,EAAE,SAAS,EAAE,QAAQ,EAAE,QAAQ,EAAE,QAAQ;AAC/D;;AAEA;IACI,iBAAiB,EAAE,SAAS;AAChC","sourcesContent":["\nbody {\n    margin:0; padding:0;\n}\n\n#menu {\n    position: absolute; top: 0; right: 0; left: 0;\n    height: 130px;\n    padding: 10px;\n}\n\n#menu div {\n    margin: 10px;\n}\n\n#map {\n    position: absolute; top: 150px; bottom:0; right: 50%; left:0;\n}\n\n#plot {\n    position: absolute; top:150px; bottom:0; right: 0; left:50%;\n}\n\n#feature-info {\n    positon: relative; left: 50%;\n}\n"],"sourceRoot":""}]);
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
// State variables

var storm_where = _config__WEBPACK_IMPORTED_MODULE_1__.storm_types.count_35.where;
var year_start = '2010';
var year_end = '2020'; // Where clause generator

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
map.on('click', function (event) {
  var where = where_factory();
  var radius = 500; // meters

  var query = layer.query().nearby(event.latlng, radius).where(where);
  query.run(function (error, featureCollection, response) {
    if (error) {
      console.log(error);
      return;
    }

    if (featureCollection.features.length) {
      var feature = featureCollection.features[0];
      console.log(feature);
      var f_str = JSON.stringify(feature);
      feature_info.innerHTML = f_str;
    } else {
      feature_info.innerHTML = 'No features selected.';
    }
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ08sSUFBTUEsS0FBSyxHQUFHLHdDQUFkO0FBRUEsSUFBTUMsUUFBUSxHQUFHLElBQWpCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHLElBQWpCO0FBRUEsSUFBTUMsV0FBVyxHQUFHO0FBQ3ZCLGNBQVk7QUFDVixhQUFTLDhCQURDO0FBRVYsYUFBUztBQUZDLEdBRFc7QUFLdkIsY0FBWTtBQUNWLGFBQVMsOEJBREM7QUFFVixhQUFTO0FBRkMsR0FMVztBQVN2QixjQUFZO0FBQ1YsYUFBUyxjQURDO0FBRVYsYUFBUztBQUZDO0FBVFcsQ0FBcEI7QUFlQSxJQUFNQyxhQUFhLEdBQUc7QUFDM0IsY0FBYSw0QkFEYztBQUUzQixjQUFhLHNCQUZjO0FBRzNCLGNBQWE7QUFIYyxDQUF0QjtBQU1BLElBQU1DLFdBQVcsR0FBRztBQUN6QixjQUFhLFNBRFk7QUFFekIsY0FBYSxTQUZZO0FBR3pCLGNBQWE7QUFIWSxDQUFwQjs7Ozs7Ozs7Ozs7Ozs7QUMxQkEsSUFBSUMsSUFBSSxHQUFHO0FBQ2hCLFVBQVE7QUFDTixnQkFBWSxJQUROO0FBRU4sZ0JBQVksRUFGTjtBQUdOLGdCQUFZO0FBSE4sR0FEUTtBQU1oQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBTlE7QUFXaEIsVUFBUTtBQUNOLGdCQUFZLEdBRE47QUFFTixnQkFBWSxLQUZOO0FBR04sZ0JBQVk7QUFITixHQVhRO0FBZ0JoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBaEJRO0FBcUJoQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBckJRO0FBMEJoQixVQUFRO0FBQ04sZ0JBQVksR0FETjtBQUVOLGdCQUFZLEVBRk47QUFHTixnQkFBWTtBQUhOLEdBMUJRO0FBK0JoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBL0JRO0FBb0NoQixVQUFRO0FBQ04sZ0JBQVksR0FETjtBQUVOLGdCQUFZLEdBRk47QUFHTixnQkFBWTtBQUhOLEdBcENRO0FBeUNoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBekNRO0FBOENoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBOUNRO0FBbURoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEVBRk47QUFHTixnQkFBWTtBQUhOLEdBbkRRO0FBd0RoQixVQUFRO0FBQ04sZ0JBQVksS0FETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBeERRO0FBNkRoQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBN0RRO0FBa0VoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBbEVRO0FBdUVoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEVBRk47QUFHTixnQkFBWTtBQUhOLEdBdkVRO0FBNEVoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBNUVRO0FBaUZoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBakZRO0FBc0ZoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBdEZRO0FBMkZoQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLEdBRk47QUFHTixnQkFBWTtBQUhOLEdBM0ZRO0FBZ0doQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBaEdRO0FBcUdoQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLENBRk47QUFHTixnQkFBWTtBQUhOLEdBckdRO0FBMEdoQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBMUdRO0FBK0doQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBL0dRO0FBb0hoQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBcEhRO0FBeUhoQixVQUFRO0FBQ04sZ0JBQVksR0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBekhRO0FBOEhoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBOUhRO0FBbUloQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBbklRO0FBd0loQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBeElRO0FBNkloQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLENBRk47QUFHTixnQkFBWTtBQUhOLEdBN0lRO0FBa0poQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBbEpRO0FBdUpoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEdBRk47QUFHTixnQkFBWTtBQUhOLEdBdkpRO0FBNEpoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEVBRk47QUFHTixnQkFBWTtBQUhOLEdBNUpRO0FBaUtoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLENBRk47QUFHTixnQkFBWTtBQUhOLEdBaktRO0FBc0toQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVO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cyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjb25zdCB0aXRsZSA9ICdOb3J0aCBBdGxhbnRpYyBXZXN0IG9mIDYwwrBXOiAxOTUwLTIwMjAnXG5cbmV4cG9ydCBjb25zdCBNSU5fWUVBUiA9IDE5NTA7XG5leHBvcnQgY29uc3QgTUFYX1lFQVIgPSAyMDIwO1xuXG5leHBvcnQgY29uc3Qgc3Rvcm1fdHlwZXMgPSB7XG4gICAgJ2NvdW50XzM1Jzoge1xuICAgICAgJ3doZXJlJzogJ1VTQV9XSU5EPDY0IEFORCBVU0FfV0lORD49MzQnLFxuICAgICAgJ2xhYmVsJzogJ05hbWVkIFN0b3JtcydcbiAgICB9LFxuICAgICdjb3VudF82NCc6IHtcbiAgICAgICd3aGVyZSc6ICdVU0FfV0lORD49NjQgQU5EIFVTQV9XSU5EPDk2JyxcbiAgICAgICdsYWJlbCc6ICdIdXJyaWNhbmVzJ1xuICAgIH0sXG4gICAgJ2NvdW50Xzk2Jzoge1xuICAgICAgJ3doZXJlJzogJ1VTQV9XSU5EPj05NicsXG4gICAgICAnbGFiZWwnOiAnTWFqb3IgSHVycmljYW5lcydcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBsZWdlbmRfbGFiZWxzID0ge1xuICAnY291bnRfOTYnIDogJ01ham9yIEh1cnJpY2FuZXMgKD49IDk2a3QpJyxcbiAgJ2NvdW50XzY0JyA6ICdIdXJyaWNhbmVzICg+PSA2NGt0KScsXG4gICdjb3VudF8zNScgOiAnTmFtZWQgU3Rvcm1zICg+PSAzNGt0KSdcbn1cblxuZXhwb3J0IGNvbnN0IGZpbGxfY29sb3JzID0ge1xuICAnY291bnRfOTYnIDogJyMzZTk5ZTgnLFxuICAnY291bnRfNjQnIDogJyM0Y2JjMTgnLFxuICAnY291bnRfMzUnIDogJyM0ODk1MjQnXG59XG5cblxuIiwiXG5leHBvcnQgbGV0IGRhdGEgPSB7XG4gIFwiMTk1MFwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAxMS41LFxuICAgIFwiY291bnRfNjRcIjogMzgsXG4gICAgXCJjb3VudF8zNVwiOiA1OS41XG4gIH0sXG4gIFwiMTk1MVwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAzLjc1LFxuICAgIFwiY291bnRfNjRcIjogMjMuMjUsXG4gICAgXCJjb3VudF8zNVwiOiA0MS43NVxuICB9LFxuICBcIjE5NTJcIjoge1xuICAgIFwiY291bnRfOTZcIjogMi41LFxuICAgIFwiY291bnRfNjRcIjogMTQuMjUsXG4gICAgXCJjb3VudF8zNVwiOiAyN1xuICB9LFxuICBcIjE5NTNcIjoge1xuICAgIFwiY291bnRfOTZcIjogMy4yNSxcbiAgICBcImNvdW50XzY0XCI6IDE0LjI1LFxuICAgIFwiY291bnRfMzVcIjogNDRcbiAgfSxcbiAgXCIxOTU0XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDcsXG4gICAgXCJjb3VudF82NFwiOiAyMC41LFxuICAgIFwiY291bnRfMzVcIjogNDVcbiAgfSxcbiAgXCIxOTU1XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDguNSxcbiAgICBcImNvdW50XzY0XCI6IDMzLFxuICAgIFwiY291bnRfMzVcIjogNTkuMjVcbiAgfSxcbiAgXCIxOTU2XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDEuNzUsXG4gICAgXCJjb3VudF82NFwiOiAxMC43NSxcbiAgICBcImNvdW50XzM1XCI6IDI5LjVcbiAgfSxcbiAgXCIxOTU3XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDAuNSxcbiAgICBcImNvdW50XzY0XCI6IDUuNSxcbiAgICBcImNvdW50XzM1XCI6IDIyLjc1XG4gIH0sXG4gIFwiMTk1OFwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAzLjc1LFxuICAgIFwiY291bnRfNjRcIjogMTYuNzUsXG4gICAgXCJjb3VudF8zNVwiOiA0MS41XG4gIH0sXG4gIFwiMTk1OVwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAzLjI1LFxuICAgIFwiY291bnRfNjRcIjogMTIuMjUsXG4gICAgXCJjb3VudF8zNVwiOiAzNi4yNVxuICB9LFxuICBcIjE5NjBcIjoge1xuICAgIFwiY291bnRfOTZcIjogNi43NSxcbiAgICBcImNvdW50XzY0XCI6IDEyLFxuICAgIFwiY291bnRfMzVcIjogMjdcbiAgfSxcbiAgXCIxOTYxXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDEzLjc1LFxuICAgIFwiY291bnRfNjRcIjogMjQuNzUsXG4gICAgXCJjb3VudF8zNVwiOiA0Ni4yNVxuICB9LFxuICBcIjE5NjJcIjoge1xuICAgIFwiY291bnRfOTZcIjogMCxcbiAgICBcImNvdW50XzY0XCI6IDExLjI1LFxuICAgIFwiY291bnRfMzVcIjogMjUuNzVcbiAgfSxcbiAgXCIxOTYzXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDMuNzUsXG4gICAgXCJjb3VudF82NFwiOiAyMi43NSxcbiAgICBcImNvdW50XzM1XCI6IDM1Ljc1XG4gIH0sXG4gIFwiMTk2NFwiOiB7XG4gICAgXCJjb3VudF85NlwiOiA4Ljc1LFxuICAgIFwiY291bnRfNjRcIjogMzMsXG4gICAgXCJjb3VudF8zNVwiOiA1My41XG4gIH0sXG4gIFwiMTk2NVwiOiB7XG4gICAgXCJjb3VudF85NlwiOiA2LjI1LFxuICAgIFwiY291bnRfNjRcIjogOS43NSxcbiAgICBcImNvdW50XzM1XCI6IDIxXG4gIH0sXG4gIFwiMTk2NlwiOiB7XG4gICAgXCJjb3VudF85NlwiOiA4Ljc1LFxuICAgIFwiY291bnRfNjRcIjogMjUuNzUsXG4gICAgXCJjb3VudF8zNVwiOiAzNi41XG4gIH0sXG4gIFwiMTk2N1wiOiB7XG4gICAgXCJjb3VudF85NlwiOiA1Ljc1LFxuICAgIFwiY291bnRfNjRcIjogMTguNSxcbiAgICBcImNvdW50XzM1XCI6IDI4Ljc1XG4gIH0sXG4gIFwiMTk2OFwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAwLFxuICAgIFwiY291bnRfNjRcIjogNy41LFxuICAgIFwiY291bnRfMzVcIjogMjAuNVxuICB9LFxuICBcIjE5NjlcIjoge1xuICAgIFwiY291bnRfOTZcIjogNC43NSxcbiAgICBcImNvdW50XzY0XCI6IDI0LjUsXG4gICAgXCJjb3VudF8zNVwiOiA0OS43NVxuICB9LFxuICBcIjE5NzBcIjoge1xuICAgIFwiY291bnRfOTZcIjogMSxcbiAgICBcImNvdW50XzY0XCI6IDYsXG4gICAgXCJjb3VudF8zNVwiOiAyMC41XG4gIH0sXG4gIFwiMTk3MVwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAxLFxuICAgIFwiY291bnRfNjRcIjogMTcuMjUsXG4gICAgXCJjb3VudF8zNVwiOiA0Ni4yNVxuICB9LFxuICBcIjE5NzJcIjoge1xuICAgIFwiY291bnRfOTZcIjogMCxcbiAgICBcImNvdW50XzY0XCI6IDIuNzUsXG4gICAgXCJjb3VudF8zNVwiOiAxNy41XG4gIH0sXG4gIFwiMTk3M1wiOiB7XG4gICAgXCJjb3VudF85NlwiOiAwLFxuICAgIFwiY291bnRfNjRcIjogMy4yNSxcbiAgICBcImNvdW50XzM1XCI6IDIwLjVcbiAgfSxcbiAgXCIxOTc0XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDMuNSxcbiAgICBcImNvdW50XzY0XCI6IDEwLjUsXG4gICAgXCJjb3VudF8zNVwiOiAzMS43NVxuICB9LFxuICBcIjE5NzVcIjoge1xuICAgIFwiY291bnRfOTZcIjogMi4yNSxcbiAgICBcImNvdW50XzY0XCI6IDExLjUsXG4gICAgXCJjb3VudF8zNVwiOiAyNVxuICB9LFxuICBcIjE5NzZcIjoge1xuICAgIFwiY291bnRfOTZcIjogMC43NSxcbiAgICBcImNvdW50XzY0XCI6IDMuNzUsXG4gICAgXCJjb3VudF8zNVwiOiAxNS4yNVxuICB9LFxuICBcIjE5NzdcIjoge1xuICAgIFwiY291bnRfOTZcIjogMSxcbiAgICBcImNvdW50XzY0XCI6IDUuMjUsXG4gICAgXCJjb3VudF8zNVwiOiAxMy4yNVxuICB9LFxuICBcIjE5NzhcIjoge1xuICAgIFwiY291bnRfOTZcIjogMyxcbiAgICBcImNvdW50XzY0XCI6IDgsXG4gICAgXCJjb3VudF8zNVwiOiAyMlxuICB9LFxuICBcIjE5NzlcIjoge1xuICAgIFwiY291bnRfOTZcIjogNC4yNSxcbiAgICBcImNvdW50XzY0XCI6IDExLjc1LFxuICAgIFwiY291bnRfMzVcIjogMjguMjVcbiAgfSxcbiAgXCIxOTgwXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDYuMjUsXG4gICAgXCJjb3VudF82NFwiOiA5LjUsXG4gICAgXCJjb3VudF8zNVwiOiAyMi4yNVxuICB9LFxuICBcIjE5ODFcIjoge1xuICAgIFwiY291bnRfOTZcIjogMi4yNSxcbiAgICBcImNvdW50XzY0XCI6IDExLFxuICAgIFwiY291bnRfMzVcIjogMzZcbiAgfSxcbiAgXCIxOTgyXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDAuNzUsXG4gICAgXCJjb3VudF82NFwiOiA0LFxuICAgIFwiY291bnRfMzVcIjogMTFcbiAgfSxcbiAgXCIxOTgzXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDAuMjUsXG4gICAgXCJjb3VudF82NFwiOiAyLjI1LFxuICAgIFwiY291bnRfMzVcIjogMTEuMjVcbiAgfSxcbiAgXCIxOTg0XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDAuNzUsXG4gICAgXCJjb3VudF82NFwiOiAxMS41LFxuICAgIFwiY291bnRfMzVcIjogMzJcbiAgfSxcbiAgXCIxOTg1XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDQsXG4gICAgXCJjb3VudF82NFwiOiAxOC4yNSxcbiAgICBcImNvdW50XzM1XCI6IDQxLjVcbiAgfSxcbiAgXCIxOTg2XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDAsXG4gICAgXCJjb3VudF82NFwiOiAyLjI1LFxuICAgIFwiY291bnRfMzVcIjogMTIuNzVcbiAgfSxcbiAgXCIxOTg3XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDAuNSxcbiAgICBcImNvdW50XzY0XCI6IDIuMjUsXG4gICAgXCJjb3VudF8zNVwiOiAxMi41XG4gIH0sXG4gIFwiMTk4OFwiOiB7XG4gICAgXCJjb3VudF85NlwiOiA2LjUsXG4gICAgXCJjb3VudF82NFwiOiAxMi4yNSxcbiAgICBcImNvdW50XzM1XCI6IDI4LjVcbiAgfSxcbiAgXCIxOTg5XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDMuNSxcbiAgICBcImNvdW50XzY0XCI6IDEyLjUsXG4gICAgXCJjb3VudF8zNVwiOiAyNlxuICB9LFxuICBcIjE5OTBcIjoge1xuICAgIFwiY291bnRfOTZcIjogMCxcbiAgICBcImNvdW50XzY0XCI6IDkuMjUsXG4gICAgXCJjb3VudF8zNVwiOiAyNS41XG4gIH0sXG4gIFwiMTk5MVwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAxLjI1LFxuICAgIFwiY291bnRfNjRcIjogNy4yNSxcbiAgICBcImNvdW50XzM1XCI6IDE0LjVcbiAgfSxcbiAgXCIxOTkyXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDMuNSxcbiAgICBcImNvdW50XzY0XCI6IDUsXG4gICAgXCJjb3VudF8zNVwiOiAxN1xuICB9LFxuICBcIjE5OTNcIjoge1xuICAgIFwiY291bnRfOTZcIjogMC43NSxcbiAgICBcImNvdW50XzY0XCI6IDcuNSxcbiAgICBcImNvdW50XzM1XCI6IDIwLjI1XG4gIH0sXG4gIFwiMTk5NFwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAwLFxuICAgIFwiY291bnRfNjRcIjogMSxcbiAgICBcImNvdW50XzM1XCI6IDE2XG4gIH0sXG4gIFwiMTk5NVwiOiB7XG4gICAgXCJjb3VudF85NlwiOiA3LjI1LFxuICAgIFwiY291bnRfNjRcIjogMzQuNSxcbiAgICBcImNvdW50XzM1XCI6IDYzXG4gIH0sXG4gIFwiMTk5NlwiOiB7XG4gICAgXCJjb3VudF85NlwiOiA5LjI1LFxuICAgIFwiY291bnRfNjRcIjogMjkuNSxcbiAgICBcImNvdW50XzM1XCI6IDUwXG4gIH0sXG4gIFwiMTk5N1wiOiB7XG4gICAgXCJjb3VudF85NlwiOiAxLjc1LFxuICAgIFwiY291bnRfNjRcIjogNS41LFxuICAgIFwiY291bnRfMzVcIjogMThcbiAgfSxcbiAgXCIxOTk4XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDgsXG4gICAgXCJjb3VudF82NFwiOiAyNy41LFxuICAgIFwiY291bnRfMzVcIjogNDIuNVxuICB9LFxuICBcIjE5OTlcIjoge1xuICAgIFwiY291bnRfOTZcIjogNy41LFxuICAgIFwiY291bnRfNjRcIjogMjYuNzUsXG4gICAgXCJjb3VudF8zNVwiOiA0N1xuICB9LFxuICBcIjIwMDBcIjoge1xuICAgIFwiY291bnRfOTZcIjogMS4yNSxcbiAgICBcImNvdW50XzY0XCI6IDEwLFxuICAgIFwiY291bnRfMzVcIjogMzAuMjVcbiAgfSxcbiAgXCIyMDAxXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDMuNzUsXG4gICAgXCJjb3VudF82NFwiOiAxNS43NSxcbiAgICBcImNvdW50XzM1XCI6IDQyXG4gIH0sXG4gIFwiMjAwMlwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAzLFxuICAgIFwiY291bnRfNjRcIjogOC43NSxcbiAgICBcImNvdW50XzM1XCI6IDQyLjI1XG4gIH0sXG4gIFwiMjAwM1wiOiB7XG4gICAgXCJjb3VudF85NlwiOiA3LjUsXG4gICAgXCJjb3VudF82NFwiOiAxNC41LFxuICAgIFwiY291bnRfMzVcIjogNDAuNVxuICB9LFxuICBcIjIwMDRcIjoge1xuICAgIFwiY291bnRfOTZcIjogMTQsXG4gICAgXCJjb3VudF82NFwiOiAyNi43NSxcbiAgICBcImNvdW50XzM1XCI6IDUxLjVcbiAgfSxcbiAgXCIyMDA1XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDE3LjI1LFxuICAgIFwiY291bnRfNjRcIjogMzcuMjUsXG4gICAgXCJjb3VudF8zNVwiOiA4Mi4yNVxuICB9LFxuICBcIjIwMDZcIjoge1xuICAgIFwiY291bnRfOTZcIjogMCxcbiAgICBcImNvdW50XzY0XCI6IDMuNzUsXG4gICAgXCJjb3VudF8zNVwiOiAyMS4yNVxuICB9LFxuICBcIjIwMDdcIjoge1xuICAgIFwiY291bnRfOTZcIjogNixcbiAgICBcImNvdW50XzY0XCI6IDEwLjUsXG4gICAgXCJjb3VudF8zNVwiOiAyNS4yNVxuICB9LFxuICBcIjIwMDhcIjoge1xuICAgIFwiY291bnRfOTZcIjogNS41LFxuICAgIFwiY291bnRfNjRcIjogMjMuMjUsXG4gICAgXCJjb3VudF8zNVwiOiA2NC43NVxuICB9LFxuICBcIjIwMDlcIjoge1xuICAgIFwiY291bnRfOTZcIjogMS4yNSxcbiAgICBcImNvdW50XzY0XCI6IDUuNzUsXG4gICAgXCJjb3VudF8zNVwiOiAxMy4yNVxuICB9LFxuICBcIjIwMTBcIjoge1xuICAgIFwiY291bnRfOTZcIjogNC4yNSxcbiAgICBcImNvdW50XzY0XCI6IDIxLFxuICAgIFwiY291bnRfMzVcIjogNTEuNzVcbiAgfSxcbiAgXCIyMDExXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDQuNSxcbiAgICBcImNvdW50XzY0XCI6IDE5LjI1LFxuICAgIFwiY291bnRfMzVcIjogNjBcbiAgfSxcbiAgXCIyMDEyXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDAuMjUsXG4gICAgXCJjb3VudF82NFwiOiAxMi4yNSxcbiAgICBcImNvdW50XzM1XCI6IDQ4XG4gIH0sXG4gIFwiMjAxM1wiOiB7XG4gICAgXCJjb3VudF85NlwiOiAwLFxuICAgIFwiY291bnRfNjRcIjogMS41LFxuICAgIFwiY291bnRfMzVcIjogMTRcbiAgfSxcbiAgXCIyMDE0XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDMuMjUsXG4gICAgXCJjb3VudF82NFwiOiAxMixcbiAgICBcImNvdW50XzM1XCI6IDI0LjI1XG4gIH0sXG4gIFwiMjAxNVwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAzLjUsXG4gICAgXCJjb3VudF82NFwiOiA3LjI1LFxuICAgIFwiY291bnRfMzVcIjogMTkuNzVcbiAgfSxcbiAgXCIyMDE2XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDguNzUsXG4gICAgXCJjb3VudF82NFwiOiAxNi4yNSxcbiAgICBcImNvdW50XzM1XCI6IDQyLjVcbiAgfSxcbiAgXCIyMDE3XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDEyLjI1LFxuICAgIFwiY291bnRfNjRcIjogMzIuMjUsXG4gICAgXCJjb3VudF8zNVwiOiA1OS43NVxuICB9LFxuICBcIjIwMThcIjoge1xuICAgIFwiY291bnRfOTZcIjogNCxcbiAgICBcImNvdW50XzY0XCI6IDksXG4gICAgXCJjb3VudF8zNVwiOiAyNC4yNVxuICB9LFxuICBcIjIwMTlcIjoge1xuICAgIFwiY291bnRfOTZcIjogNi4yNSxcbiAgICBcImNvdW50XzY0XCI6IDE0LjI1LFxuICAgIFwiY291bnRfMzVcIjogMzkuMjVcbiAgfSxcbiAgXCIyMDIwXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDUuNSxcbiAgICBcImNvdW50XzY0XCI6IDI4LFxuICAgIFwiY291bnRfMzVcIjogODFcbiAgfVxufVxuXG4iLCJpbXBvcnQgKiBhcyBjb25maWcgZnJvbSAnLi9jb25maWcnXG5cbmV4cG9ydCBjb25zdCBvcHRpb25fZmFjdG9yeSA9IGZ1bmN0aW9uICh2YWx1ZSwgaW5uZXJIVE1MKSB7XG4gICAgdmFyIG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdC52YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgb3B0LmlubmVySFRNTCA9IFN0cmluZyhpbm5lckhUTUwpO1xuICAgIHJldHVybiBvcHQ7XG59XG5cbmV4cG9ydCBjb25zdCB5ZWFyX3NlbGVjdF9mYWN0b3J5ID0gKGxhYmVsLCB5ZWFyX3NlbGVjdGVkKSA9PiB7XG4gIGNvbnN0IHllYXJfc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHllYXItJHtsYWJlbH0tc2VsZWN0YClcbiAgbGV0IHNlbGVjdGVkX2luZGV4O1xuICBsZXQgaW5kZXggPSAwO1xuICBmb3IgKHZhciB5ID0gY29uZmlnLk1JTl9ZRUFSOyB5PD1jb25maWcuTUFYX1lFQVI7IHkrKyl7XG4gICAgICBpZiAocGFyc2VJbnQoeWVhcl9zZWxlY3RlZCkgPT0geSkgeyBzZWxlY3RlZF9pbmRleCA9IGluZGV4IH1cbiAgICAgIHllYXJfc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbl9mYWN0b3J5KFN0cmluZyh5KSwgU3RyaW5nKHkpKSlcbiAgICAgIGluZGV4Kys7XG4gIH1cbiAgeWVhcl9zZWxlY3Qub3B0aW9ucy5zZWxlY3RlZEluZGV4PXNlbGVjdGVkX2luZGV4XG4gIHJldHVybiB5ZWFyX3NlbGVjdFxufVxuXG5leHBvcnQgY29uc3QgcGFyc2VZZWFycyA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKVxuICBjb25zdCB5ZWFycyA9IGtleXMubWFwKGsgPT4gcGFyc2VJbnQoaykpXG4gIHJldHVybiB5ZWFyc1xufVxuXG5leHBvcnQgY29uc3QgcGFyc2VUcmFjZSA9IChrZXksIGRhdGEsIHllYXJzKSA9PiB7XG4gIGNvbnN0IHRyYWNlID0ge1xuICAgIHg6IHllYXJzLFxuICAgIHk6IFtdLFxuICAgIG1vZGU6ICdub25lJyxcbiAgICBuYW1lOiBjb25maWcubGVnZW5kX2xhYmVsc1trZXldLFxuICAgIHN0YWNrZ3JvdXA6ICdvbmUnLFxuICAgIGZpbGxjb2xvcjogY29uZmlnLmZpbGxfY29sb3JzW2tleV1cbiAgfVxuICB5ZWFycy5mb3JFYWNoKCh5ZWFyKSA9PiB7XG4gICAgdHJhY2VbJ3knXS5wdXNoKGRhdGFbeWVhcl1ba2V5XSlcbiAgfSlcbiAgcmV0dXJuIHRyYWNlXG59XG5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuYm9keSB7XFxuICAgIG1hcmdpbjowOyBwYWRkaW5nOjA7XFxufVxcblxcbiNtZW51IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IHJpZ2h0OiAwOyBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDEzMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jbWVudSBkaXYge1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiNtYXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMTUwcHg7IGJvdHRvbTowOyByaWdodDogNTAlOyBsZWZ0OjA7XFxufVxcblxcbiNwbG90IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyB0b3A6MTUwcHg7IGJvdHRvbTowOyByaWdodDogMDsgbGVmdDo1MCU7XFxufVxcblxcbiNmZWF0dXJlLWluZm8ge1xcbiAgICBwb3NpdG9uOiByZWxhdGl2ZTsgbGVmdDogNTAlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLFFBQVEsRUFBRSxTQUFTO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPO0lBQzdDLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE1BQU07QUFDaEU7O0FBRUE7SUFDSSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRO0FBQy9EOztBQUVBO0lBQ0ksaUJBQWlCLEVBQUUsU0FBUztBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5ib2R5IHtcXG4gICAgbWFyZ2luOjA7IHBhZGRpbmc6MDtcXG59XFxuXFxuI21lbnUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgcmlnaHQ6IDA7IGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMTMwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbiNtZW51IGRpdiB7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuI21hcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAxNTBweDsgYm90dG9tOjA7IHJpZ2h0OiA1MCU7IGxlZnQ6MDtcXG59XFxuXFxuI3Bsb3Qge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDoxNTBweDsgYm90dG9tOjA7IHJpZ2h0OiAwOyBsZWZ0OjUwJTtcXG59XFxuXFxuI2ZlYXR1cmUtaW5mbyB7XFxuICAgIHBvc2l0b246IHJlbGF0aXZlOyBsZWZ0OiA1MCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5pbXBvcnQgJy4vaW5kZXguY3NzJ1xuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gJy4vY29uZmlnJ1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAgJy4vZGF0YSdcblxuXG4vKiBQbG90bHkgU2V0dXAgKi9cblxuY29uc3QgeWVhcnMgPSB1dGlsLnBhcnNlWWVhcnMoZGF0YSlcbmNvbnN0IHRyYWNlX2NvdW50Xzk2ID0gdXRpbC5wYXJzZVRyYWNlKCdjb3VudF85NicsIGRhdGEsIHllYXJzKVxuY29uc3QgdHJhY2VfY291bnRfNjQgPSB1dGlsLnBhcnNlVHJhY2UoJ2NvdW50XzY0JywgZGF0YSwgeWVhcnMpXG5jb25zdCB0cmFjZV9jb3VudF8zNSA9IHV0aWwucGFyc2VUcmFjZSgnY291bnRfMzUnLCBkYXRhLCB5ZWFycylcblxuY29uc3QgbGF5b3V0ID0ge1xuICB0aXRsZTogY29uZmlnLnRpdGxlXG59XG5cbmNvbnN0IGFsbF90cmFjZXMgPSBbdHJhY2VfY291bnRfOTYsIHRyYWNlX2NvdW50XzY0LCB0cmFjZV9jb3VudF8zNV1cblxuUGxvdGx5Lm5ld1Bsb3QoJ3Bsb3QnLCBhbGxfdHJhY2VzLCBsYXlvdXQpO1xuXG5cbi8qIFNlbGVjdG9ycyAqL1xuXG4vLyBTdGF0ZSB2YXJpYWJsZXNcbmxldCBzdG9ybV93aGVyZSA9IGNvbmZpZy5zdG9ybV90eXBlc1snY291bnRfMzUnXVsnd2hlcmUnXVxubGV0IHllYXJfc3RhcnQgPSAnMjAxMCdcbmxldCB5ZWFyX2VuZCA9ICcyMDIwJ1xuXG4vLyBXaGVyZSBjbGF1c2UgZ2VuZXJhdG9yXG5jb25zdCB5ZWFyX3doZXJlPSAoc3RhcnQsIGVuZCkgPT4gYFlFQVI+PSR7c3RhcnR9IEFORCBZRUFSPD0ke2VuZH1gXG5jb25zdCB3aGVyZV9mYWN0b3J5ID0gKCkgPT4gYCR7eWVhcl93aGVyZSh5ZWFyX3N0YXJ0LCB5ZWFyX2VuZCl9IEFORCAke3N0b3JtX3doZXJlfWBcblxuLy8gU2VsZWN0IHN0b3JtIHR5cGVcbmNvbnN0IHN0b3JtX3NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdG9ybS10eXBlLXNlbGVjdCcpXG5mb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoY29uZmlnLnN0b3JtX3R5cGVzKSkge1xuICAgIGxldCB2YWx1ZSA9IGNvbmZpZy5zdG9ybV90eXBlc1trZXldWyd3aGVyZSddXG4gICAgbGV0IGxhYmVsID0gY29uZmlnLnN0b3JtX3R5cGVzW2tleV1bJ2xhYmVsJ11cbiAgICBzdG9ybV9zZWxlY3QuYXBwZW5kQ2hpbGQodXRpbC5vcHRpb25fZmFjdG9yeSh2YWx1ZSwgbGFiZWwpKTtcbn1cblxuc3Rvcm1fc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgc3Rvcm1fd2hlcmUgPSBzdG9ybV9zZWxlY3QudmFsdWVcbiAgbGV0IG5ld193aGVyZSA9IHdoZXJlX2ZhY3Rvcnkoc3Rvcm1fd2hlcmUsIHllYXJfd2hlcmUpXG4gIGNvbnNvbGUubG9nKG5ld193aGVyZSlcbiAgbGF5ZXIuc2V0V2hlcmUobmV3X3doZXJlKVxufSk7XG5cbi8vIFNlbGVjdCBzdGFydCB5ZWFyXG5jb25zdCB5ZWFyX3N0YXJ0X3NlbGVjdCA9IHV0aWwueWVhcl9zZWxlY3RfZmFjdG9yeSgnc3RhcnQnLCB5ZWFyX3N0YXJ0KVxueWVhcl9zdGFydF9zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICB5ZWFyX3N0YXJ0ID0geWVhcl9zdGFydF9zZWxlY3QudmFsdWVcbiAgbGV0IG5ld193aGVyZSA9IHdoZXJlX2ZhY3RvcnkoKVxuICBjb25zb2xlLmxvZyhuZXdfd2hlcmUpXG4gIGxheWVyLnNldFdoZXJlKG5ld193aGVyZSk7XG59KTtcblxuLy8gU2VsZWN0IGVuZCB5ZWFyXG5jb25zdCB5ZWFyX2VuZF9zZWxlY3QgPSB1dGlsLnllYXJfc2VsZWN0X2ZhY3RvcnkoJ2VuZCcsIHllYXJfZW5kKVxueWVhcl9lbmRfc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgeWVhcl9lbmQgPSB5ZWFyX2VuZF9zZWxlY3QudmFsdWVcbiAgbGV0IG5ld193aGVyZSA9IHdoZXJlX2ZhY3RvcnkoKVxuICBjb25zb2xlLmxvZyhuZXdfd2hlcmUpXG4gIGxheWVyLnNldFdoZXJlKG5ld193aGVyZSk7XG59KTtcblxuXG4vKiBNYXAgKi9cblxuY29uc3QgbWFwID0gTC5tYXAoJ21hcCcpLnNldFZpZXcoWzM3LjgzNywgLTEwMC40NzldLCA1KTtcbmNvbnN0IGJhc2VtYXAgPSBMLmVzcmkuYmFzZW1hcExheWVyKCdTdHJlZXRzJykuYWRkVG8obWFwKTtcblxuLy8gZHVtbXkgZmVhdHVyZSBmb3IgbG9nZ2luZ1xuLy9sZXQgZjtcblxuY29uc3QgbGF5ZXIgPSBMLmVzcmkuZmVhdHVyZUxheWVyKHtcbiAgdXJsOiAnaHR0cHM6Ly9zZXJ2aWNlczIuYXJjZ2lzLmNvbS9GaWFQQTRnYTBpUUtkdXYzL0FyY0dJUy9yZXN0L3NlcnZpY2VzL0lCVHJBQ1NfQUxMX2xpc3RfdjA0cjAwX2xpbmVzXzEvRmVhdHVyZVNlcnZlci8wJyxcbiAgc3R5bGU6IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgLy9pZiAoIWYpIHsgZiA9IGZlYXR1cmU7ICBjb25zb2xlLmxvZyhmZWF0dXJlKSB9XG4gICAgbGV0IGM7XG4gICAgbGV0IHByb3AgPSBmZWF0dXJlLnByb3BlcnRpZXMuVVNBX1dJTkRcbiAgICBpZiAocHJvcCA8IDY0ICYmIHByb3AgPj0gMzQpIHsgYyA9ICdyZWQnIH1cbiAgICBpZiAocHJvcCA+PSA2NCAmJiBwcm9wIDwgOTYpIHsgYyA9ICdncmVlbicgfVxuICAgIGlmIChwcm9wID49IDk2KSB7IGMgPSAnYmx1ZScgfTtcbiAgICBpZiAoIWMpIHsgYyA9ICd3aGl0ZScgfVxuICAgIHJldHVybiB7IGNvbG9yOiBjLCBvcGFjaXR5OiAuOSwgd2VpZ2h0OiA1IH07XG4gIH0sXG4gIHdoZXJlOiB3aGVyZV9mYWN0b3J5KClcbn0pLmFkZFRvKG1hcCk7XG5cbmxldCBmZWF0dXJlX2luZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVhdHVyZS1pbmZvJylcblxubWFwLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICBsZXQgd2hlcmUgPSB3aGVyZV9mYWN0b3J5KClcbiAgbGV0IHJhZGl1cyA9IDUwMCAvLyBtZXRlcnNcbiAgbGV0IHF1ZXJ5ID0gbGF5ZXIucXVlcnkoKS5uZWFyYnkoZXZlbnQubGF0bG5nLCByYWRpdXMpLndoZXJlKHdoZXJlKVxuICBxdWVyeS5ydW4oZnVuY3Rpb24gKGVycm9yLCBmZWF0dXJlQ29sbGVjdGlvbiwgcmVzcG9uc2UpIHtcbiAgICBpZiAoZXJyb3IpIHsgY29uc29sZS5sb2coZXJyb3IpOyByZXR1cm47IH1cbiAgICBpZiAoZmVhdHVyZUNvbGxlY3Rpb24uZmVhdHVyZXMubGVuZ3RoKSB7XG4gICAgICBsZXQgZmVhdHVyZSA9IGZlYXR1cmVDb2xsZWN0aW9uLmZlYXR1cmVzWzBdO1xuICAgICAgY29uc29sZS5sb2coZmVhdHVyZSlcbiAgICAgIGxldCBmX3N0ciA9IEpTT04uc3RyaW5naWZ5KGZlYXR1cmUpXG4gICAgICBmZWF0dXJlX2luZm8uaW5uZXJIVE1MID0gZl9zdHJcbiAgICB9IGVsc2Uge1xuICAgICAgZmVhdHVyZV9pbmZvLmlubmVySFRNTCA9ICdObyBmZWF0dXJlcyBzZWxlY3RlZC4nXG4gICAgfVxuICB9KTtcbn0pXG4iXSwibmFtZXMiOlsidGl0bGUiLCJNSU5fWUVBUiIsIk1BWF9ZRUFSIiwic3Rvcm1fdHlwZXMiLCJsZWdlbmRfbGFiZWxzIiwiZmlsbF9jb2xvcnMiLCJkYXRhIiwiY29uZmlnIiwib3B0aW9uX2ZhY3RvcnkiLCJ2YWx1ZSIsImlubmVySFRNTCIsIm9wdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIlN0cmluZyIsInllYXJfc2VsZWN0X2ZhY3RvcnkiLCJsYWJlbCIsInllYXJfc2VsZWN0ZWQiLCJ5ZWFyX3NlbGVjdCIsImdldEVsZW1lbnRCeUlkIiwic2VsZWN0ZWRfaW5kZXgiLCJpbmRleCIsInkiLCJwYXJzZUludCIsImFwcGVuZENoaWxkIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJwYXJzZVllYXJzIiwia2V5cyIsIk9iamVjdCIsInllYXJzIiwibWFwIiwiayIsInBhcnNlVHJhY2UiLCJrZXkiLCJ0cmFjZSIsIngiLCJtb2RlIiwibmFtZSIsInN0YWNrZ3JvdXAiLCJmaWxsY29sb3IiLCJmb3JFYWNoIiwieWVhciIsInB1c2giLCJ1dGlsIiwidHJhY2VfY291bnRfOTYiLCJ0cmFjZV9jb3VudF82NCIsInRyYWNlX2NvdW50XzM1IiwibGF5b3V0IiwiYWxsX3RyYWNlcyIsIlBsb3RseSIsIm5ld1Bsb3QiLCJzdG9ybV93aGVyZSIsInllYXJfc3RhcnQiLCJ5ZWFyX2VuZCIsInllYXJfd2hlcmUiLCJzdGFydCIsImVuZCIsIndoZXJlX2ZhY3RvcnkiLCJzdG9ybV9zZWxlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwibmV3X3doZXJlIiwiY29uc29sZSIsImxvZyIsImxheWVyIiwic2V0V2hlcmUiLCJ5ZWFyX3N0YXJ0X3NlbGVjdCIsInllYXJfZW5kX3NlbGVjdCIsIkwiLCJzZXRWaWV3IiwiYmFzZW1hcCIsImVzcmkiLCJiYXNlbWFwTGF5ZXIiLCJhZGRUbyIsImZlYXR1cmVMYXllciIsInVybCIsInN0eWxlIiwiZmVhdHVyZSIsImMiLCJwcm9wIiwicHJvcGVydGllcyIsIlVTQV9XSU5EIiwiY29sb3IiLCJvcGFjaXR5Iiwid2VpZ2h0Iiwid2hlcmUiLCJmZWF0dXJlX2luZm8iLCJvbiIsImV2ZW50IiwicmFkaXVzIiwicXVlcnkiLCJuZWFyYnkiLCJsYXRsbmciLCJydW4iLCJlcnJvciIsImZlYXR1cmVDb2xsZWN0aW9uIiwicmVzcG9uc2UiLCJmZWF0dXJlcyIsImxlbmd0aCIsImZfc3RyIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=