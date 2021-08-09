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
___CSS_LOADER_EXPORT___.push([module.id, "\nbody {\n    margin:0; padding:0;\n}\n\n#menu {\n    position: absolute; top: 0; right: 0; left: 0;\n    height: 130px;\n    padding: 10px;\n}\n\n#menu div {\n    margin: 10px;\n}\n\n#map {\n    position: absolute; top: 150px; bottom:0; right: 50%; left:0;\n}\n\n#plot {\n    position: absolute; top:150px; bottom:0; right: 0; left:50%;\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":";AACA;IACI,QAAQ,EAAE,SAAS;AACvB;;AAEA;IACI,kBAAkB,EAAE,MAAM,EAAE,QAAQ,EAAE,OAAO;IAC7C,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB,EAAE,UAAU,EAAE,QAAQ,EAAE,UAAU,EAAE,MAAM;AAChE;;AAEA;IACI,kBAAkB,EAAE,SAAS,EAAE,QAAQ,EAAE,QAAQ,EAAE,QAAQ;AAC/D","sourcesContent":["\nbody {\n    margin:0; padding:0;\n}\n\n#menu {\n    position: absolute; top: 0; right: 0; left: 0;\n    height: 130px;\n    padding: 10px;\n}\n\n#menu div {\n    margin: 10px;\n}\n\n#map {\n    position: absolute; top: 150px; bottom:0; right: 50%; left:0;\n}\n\n#plot {\n    position: absolute; top:150px; bottom:0; right: 0; left:50%;\n}\n"],"sourceRoot":""}]);
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ08sSUFBTUEsS0FBSyxHQUFHLHdDQUFkO0FBRUEsSUFBTUMsUUFBUSxHQUFHLElBQWpCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHLElBQWpCO0FBRUEsSUFBTUMsV0FBVyxHQUFHO0FBQ3ZCLGNBQVk7QUFDVixhQUFTLDhCQURDO0FBRVYsYUFBUztBQUZDLEdBRFc7QUFLdkIsY0FBWTtBQUNWLGFBQVMsOEJBREM7QUFFVixhQUFTO0FBRkMsR0FMVztBQVN2QixjQUFZO0FBQ1YsYUFBUyxjQURDO0FBRVYsYUFBUztBQUZDO0FBVFcsQ0FBcEI7QUFlQSxJQUFNQyxhQUFhLEdBQUc7QUFDM0IsY0FBYSw0QkFEYztBQUUzQixjQUFhLHNCQUZjO0FBRzNCLGNBQWE7QUFIYyxDQUF0QjtBQU1BLElBQU1DLFdBQVcsR0FBRztBQUN6QixjQUFhLFNBRFk7QUFFekIsY0FBYSxTQUZZO0FBR3pCLGNBQWE7QUFIWSxDQUFwQjs7Ozs7Ozs7Ozs7Ozs7QUMxQkEsSUFBSUMsSUFBSSxHQUFHO0FBQ2hCLFVBQVE7QUFDTixnQkFBWSxJQUROO0FBRU4sZ0JBQVksRUFGTjtBQUdOLGdCQUFZO0FBSE4sR0FEUTtBQU1oQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBTlE7QUFXaEIsVUFBUTtBQUNOLGdCQUFZLEdBRE47QUFFTixnQkFBWSxLQUZOO0FBR04sZ0JBQVk7QUFITixHQVhRO0FBZ0JoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBaEJRO0FBcUJoQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBckJRO0FBMEJoQixVQUFRO0FBQ04sZ0JBQVksR0FETjtBQUVOLGdCQUFZLEVBRk47QUFHTixnQkFBWTtBQUhOLEdBMUJRO0FBK0JoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBL0JRO0FBb0NoQixVQUFRO0FBQ04sZ0JBQVksR0FETjtBQUVOLGdCQUFZLEdBRk47QUFHTixnQkFBWTtBQUhOLEdBcENRO0FBeUNoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBekNRO0FBOENoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBOUNRO0FBbURoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEVBRk47QUFHTixnQkFBWTtBQUhOLEdBbkRRO0FBd0RoQixVQUFRO0FBQ04sZ0JBQVksS0FETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBeERRO0FBNkRoQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBN0RRO0FBa0VoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBbEVRO0FBdUVoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEVBRk47QUFHTixnQkFBWTtBQUhOLEdBdkVRO0FBNEVoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBNUVRO0FBaUZoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBakZRO0FBc0ZoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBdEZRO0FBMkZoQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLEdBRk47QUFHTixnQkFBWTtBQUhOLEdBM0ZRO0FBZ0doQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBaEdRO0FBcUdoQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLENBRk47QUFHTixnQkFBWTtBQUhOLEdBckdRO0FBMEdoQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBMUdRO0FBK0doQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBL0dRO0FBb0hoQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBcEhRO0FBeUhoQixVQUFRO0FBQ04sZ0JBQVksR0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBekhRO0FBOEhoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBOUhRO0FBbUloQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBbklRO0FBd0loQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBeElRO0FBNkloQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLENBRk47QUFHTixnQkFBWTtBQUhOLEdBN0lRO0FBa0poQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBbEpRO0FBdUpoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEdBRk47QUFHTixnQkFBWTtBQUhOLEdBdkpRO0FBNEpoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEVBRk47QUFHTixnQkFBWTtBQUhOLEdBNUpRO0FBaUtoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLENBRk47QUFHTixnQkFBWTtBQUhOLEdBaktRO0FBc0toQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBdEtRO0FBMktoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBM0tRO0FBZ0xoQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBaExRO0FBcUxoQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBckxRO0FBMExoQixVQUFRO0FBQ04sZ0JBQVksR0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBMUxRO0FBK0xoQixVQUFRO0FBQ04sZ0JBQVksR0FETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBL0xRO0FBb01oQixVQUFRO0FBQ04sZ0JBQVksR0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBcE1RO0FBeU1oQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBek1RO0FBOE1oQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBOU1RO0FBbU5oQixVQUFRO0FBQ04sZ0JBQVksR0FETjtBQUVOLGdCQUFZLENBRk47QUFHTixnQkFBWTtBQUhOLEdBbk5RO0FBd05oQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEdBRk47QUFHTixnQkFBWTtBQUhOLEdBeE5RO0FBNk5oQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLENBRk47QUFHTixnQkFBWTtBQUhOLEdBN05RO0FBa09oQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBbE9RO0FBdU9oQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBdk9RO0FBNE9oQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEdBRk47QUFHTixnQkFBWTtBQUhOLEdBNU9RO0FBaVBoQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBalBRO0FBc1BoQixVQUFRO0FBQ04sZ0JBQVksR0FETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBdFBRO0FBMlBoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEVBRk47QUFHTixnQkFBWTtBQUhOLEdBM1BRO0FBZ1FoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBaFFRO0FBcVFoQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBclFRO0FBMFFoQixVQUFRO0FBQ04sZ0JBQVksR0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBMVFRO0FBK1FoQixVQUFRO0FBQ04sZ0JBQVksRUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBL1FRO0FBb1JoQixVQUFRO0FBQ04sZ0JBQVksS0FETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBcFJRO0FBeVJoQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBelJRO0FBOFJoQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBOVJRO0FBbVNoQixVQUFRO0FBQ04sZ0JBQVksR0FETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBblNRO0FBd1NoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBeFNRO0FBNlNoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEVBRk47QUFHTixnQkFBWTtBQUhOLEdBN1NRO0FBa1RoQixVQUFRO0FBQ04sZ0JBQVksR0FETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBbFRRO0FBdVRoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBdlRRO0FBNFRoQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLEdBRk47QUFHTixnQkFBWTtBQUhOLEdBNVRRO0FBaVVoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEVBRk47QUFHTixnQkFBWTtBQUhOLEdBalVRO0FBc1VoQixVQUFRO0FBQ04sZ0JBQVksR0FETjtBQUVOLGdCQUFZLElBRk47QUFHTixnQkFBWTtBQUhOLEdBdFVRO0FBMlVoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBM1VRO0FBZ1ZoQixVQUFRO0FBQ04sZ0JBQVksS0FETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBaFZRO0FBcVZoQixVQUFRO0FBQ04sZ0JBQVksQ0FETjtBQUVOLGdCQUFZLENBRk47QUFHTixnQkFBWTtBQUhOLEdBclZRO0FBMFZoQixVQUFRO0FBQ04sZ0JBQVksSUFETjtBQUVOLGdCQUFZLEtBRk47QUFHTixnQkFBWTtBQUhOLEdBMVZRO0FBK1ZoQixVQUFRO0FBQ04sZ0JBQVksR0FETjtBQUVOLGdCQUFZLEVBRk47QUFHTixnQkFBWTtBQUhOO0FBL1ZRLENBQVg7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RQO0FBRU8sSUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFVQyxLQUFWLEVBQWlCQyxTQUFqQixFQUE0QjtBQUN0RCxNQUFJQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFWO0FBQ0FGLEVBQUFBLEdBQUcsQ0FBQ0YsS0FBSixHQUFZSyxNQUFNLENBQUNMLEtBQUQsQ0FBbEI7QUFDQUUsRUFBQUEsR0FBRyxDQUFDRCxTQUFKLEdBQWdCSSxNQUFNLENBQUNKLFNBQUQsQ0FBdEI7QUFDQSxTQUFPQyxHQUFQO0FBQ0gsQ0FMTTtBQU9BLElBQU1JLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsS0FBRCxFQUFRQyxhQUFSLEVBQTBCO0FBQzNELE1BQU1DLFdBQVcsR0FBR04sUUFBUSxDQUFDTyxjQUFULGdCQUFnQ0gsS0FBaEMsYUFBcEI7QUFDQSxNQUFJSSxjQUFKO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLENBQVo7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUdmLDZDQUFiLEVBQThCZSxDQUFDLElBQUVmLDZDQUFqQyxFQUFrRGUsQ0FBQyxFQUFuRCxFQUFzRDtBQUNsRCxRQUFJQyxRQUFRLENBQUNOLGFBQUQsQ0FBUixJQUEyQkssQ0FBL0IsRUFBa0M7QUFBRUYsTUFBQUEsY0FBYyxHQUFHQyxLQUFqQjtBQUF3Qjs7QUFDNURILElBQUFBLFdBQVcsQ0FBQ00sV0FBWixDQUF3QmhCLGNBQWMsQ0FBQ00sTUFBTSxDQUFDUSxDQUFELENBQVAsRUFBWVIsTUFBTSxDQUFDUSxDQUFELENBQWxCLENBQXRDO0FBQ0FELElBQUFBLEtBQUs7QUFDUjs7QUFDREgsRUFBQUEsV0FBVyxDQUFDTyxPQUFaLENBQW9CQyxhQUFwQixHQUFrQ04sY0FBbEM7QUFDQSxTQUFPRixXQUFQO0FBQ0QsQ0FYTTtBQWFBLElBQU1TLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNyQixJQUFELEVBQVU7QUFDbEMsTUFBTXNCLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFQLENBQVl0QixJQUFaLENBQWI7QUFDQSxNQUFNd0IsS0FBSyxHQUFHRixJQUFJLENBQUNHLEdBQUwsQ0FBUyxVQUFBQyxDQUFDO0FBQUEsV0FBSVQsUUFBUSxDQUFDUyxDQUFELENBQVo7QUFBQSxHQUFWLENBQWQ7QUFDQSxTQUFPRixLQUFQO0FBQ0QsQ0FKTTtBQU1BLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEdBQUQsRUFBTTVCLElBQU4sRUFBWXdCLEtBQVosRUFBc0I7QUFDOUMsTUFBTUssS0FBSyxHQUFHO0FBQ1pDLElBQUFBLENBQUMsRUFBRU4sS0FEUztBQUVaUixJQUFBQSxDQUFDLEVBQUUsRUFGUztBQUdaZSxJQUFBQSxJQUFJLEVBQUUsTUFITTtBQUlaQyxJQUFBQSxJQUFJLEVBQUUvQixrREFBQSxDQUFxQjJCLEdBQXJCLENBSk07QUFLWkssSUFBQUEsVUFBVSxFQUFFLEtBTEE7QUFNWkMsSUFBQUEsU0FBUyxFQUFFakMsZ0RBQUEsQ0FBbUIyQixHQUFuQjtBQU5DLEdBQWQ7QUFRQUosRUFBQUEsS0FBSyxDQUFDVyxPQUFOLENBQWMsVUFBQ0MsSUFBRCxFQUFVO0FBQ3RCUCxJQUFBQSxLQUFLLENBQUMsR0FBRCxDQUFMLENBQVdRLElBQVgsQ0FBZ0JyQyxJQUFJLENBQUNvQyxJQUFELENBQUosQ0FBV1IsR0FBWCxDQUFoQjtBQUNELEdBRkQ7QUFHQSxTQUFPQyxLQUFQO0FBQ0QsQ0FiTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJQO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxrREFBa0QsZ0JBQWdCLFVBQVUsR0FBRyxXQUFXLDBCQUEwQixRQUFRLFVBQVUsUUFBUSxvQkFBb0Isb0JBQW9CLEdBQUcsZUFBZSxtQkFBbUIsR0FBRyxVQUFVLDBCQUEwQixZQUFZLFVBQVUsWUFBWSxPQUFPLEdBQUcsV0FBVywwQkFBMEIsV0FBVyxVQUFVLFVBQVUsU0FBUyxHQUFHLFNBQVMsNEVBQTRFLEtBQUssb0JBQW9CLE9BQU8sS0FBSywwQ0FBMEMsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxvREFBb0QsT0FBTyxLQUFLLG9EQUFvRCxrQ0FBa0MsZ0JBQWdCLFVBQVUsR0FBRyxXQUFXLDBCQUEwQixRQUFRLFVBQVUsUUFBUSxvQkFBb0Isb0JBQW9CLEdBQUcsZUFBZSxtQkFBbUIsR0FBRyxVQUFVLDBCQUEwQixZQUFZLFVBQVUsWUFBWSxPQUFPLEdBQUcsV0FBVywwQkFBMEIsV0FBVyxVQUFVLFVBQVUsU0FBUyxHQUFHLHFCQUFxQjtBQUNobEM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDakVhOztBQUViLGtDQUFrQzs7QUFFbEMsOEJBQThCOztBQUU5QixrREFBa0QsZ0JBQWdCLGdFQUFnRSx3REFBd0QsNkRBQTZELHNEQUFzRDs7QUFFN1MsdUNBQXVDLHVEQUF1RCx1Q0FBdUMsU0FBUyxPQUFPLG9CQUFvQjs7QUFFeksseUNBQXlDLDBHQUEwRyx3QkFBd0IsZUFBZSxlQUFlLGdCQUFnQixZQUFZLE1BQU0sd0JBQXdCLCtCQUErQixhQUFhLHFCQUFxQix1Q0FBdUMsY0FBYyxXQUFXLFlBQVksVUFBVSxNQUFNLG1EQUFtRCxVQUFVLHNCQUFzQjs7QUFFbmYsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLG1GQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsbUZBQU8sSUFBSSwwRkFBYyxHQUFHLDBGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNoR2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQy9DYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFFQSxJQUFNTCxLQUFLLEdBQUdjLDZDQUFBLENBQWdCdEMsdUNBQWhCLENBQWQ7QUFDQSxJQUFNdUMsY0FBYyxHQUFHRCw2Q0FBQSxDQUFnQixVQUFoQixFQUE0QnRDLHVDQUE1QixFQUFrQ3dCLEtBQWxDLENBQXZCO0FBQ0EsSUFBTWdCLGNBQWMsR0FBR0YsNkNBQUEsQ0FBZ0IsVUFBaEIsRUFBNEJ0Qyx1Q0FBNUIsRUFBa0N3QixLQUFsQyxDQUF2QjtBQUNBLElBQU1pQixjQUFjLEdBQUdILDZDQUFBLENBQWdCLFVBQWhCLEVBQTRCdEMsdUNBQTVCLEVBQWtDd0IsS0FBbEMsQ0FBdkI7QUFFQSxJQUFNa0IsTUFBTSxHQUFHO0FBQ2JoRCxFQUFBQSxLQUFLLEVBQUVPLDBDQUFZUDtBQUROLENBQWY7QUFJQSxJQUFNaUQsVUFBVSxHQUFHLENBQUNKLGNBQUQsRUFBaUJDLGNBQWpCLEVBQWlDQyxjQUFqQyxDQUFuQjtBQUVBRyxNQUFNLENBQUNDLE9BQVAsQ0FBZSxNQUFmLEVBQXVCRixVQUF2QixFQUFtQ0QsTUFBbkM7QUFHQTtBQUVBOztBQUNBLElBQUlJLFdBQVcsR0FBRzdDLCtEQUFsQjtBQUNBLElBQUk4QyxVQUFVLEdBQUcsTUFBakI7QUFDQSxJQUFJQyxRQUFRLEdBQUcsTUFBZixFQUVBOztBQUNBLElBQU1DLFVBQVUsR0FBRSxTQUFaQSxVQUFZLENBQUNDLEtBQUQsRUFBUUMsR0FBUjtBQUFBLHlCQUF5QkQsS0FBekIsd0JBQTRDQyxHQUE1QztBQUFBLENBQWxCOztBQUNBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxtQkFBU0gsVUFBVSxDQUFDRixVQUFELEVBQWFDLFFBQWIsQ0FBbkIsa0JBQWlERixXQUFqRDtBQUFBLENBQXRCLEVBRUE7OztBQUNBLElBQU1PLFlBQVksR0FBRy9DLFFBQVEsQ0FBQ08sY0FBVCxDQUF3QixtQkFBeEIsQ0FBckI7O0FBQ0EsZ0NBQWdCVSxNQUFNLENBQUNELElBQVAsQ0FBWXJCLGdEQUFaLENBQWhCLGtDQUFpRDtBQUE1QyxNQUFJMkIsR0FBRyxtQkFBUDtBQUNELE1BQUl6QixLQUFLLEdBQUdGLGdEQUFBLENBQW1CMkIsR0FBbkIsRUFBd0IsT0FBeEIsQ0FBWjtBQUNBLE1BQUlsQixLQUFLLEdBQUdULGdEQUFBLENBQW1CMkIsR0FBbkIsRUFBd0IsT0FBeEIsQ0FBWjtBQUNBeUIsRUFBQUEsWUFBWSxDQUFDbkMsV0FBYixDQUF5Qm9CLGlEQUFBLENBQW9CbkMsS0FBcEIsRUFBMkJPLEtBQTNCLENBQXpCO0FBQ0g7O0FBRUQyQyxZQUFZLENBQUNDLGdCQUFiLENBQThCLFFBQTlCLEVBQXdDLFlBQVk7QUFDbERSLEVBQUFBLFdBQVcsR0FBR08sWUFBWSxDQUFDbEQsS0FBM0I7QUFDQSxNQUFJb0QsU0FBUyxHQUFHSCxhQUFhLENBQUNOLFdBQUQsRUFBY0csVUFBZCxDQUE3QjtBQUNBTyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsU0FBWjtBQUNBRyxFQUFBQSxLQUFLLENBQUNDLFFBQU4sQ0FBZUosU0FBZjtBQUNELENBTEQsR0FPQTs7QUFDQSxJQUFNSyxpQkFBaUIsR0FBR3RCLHNEQUFBLENBQXlCLE9BQXpCLEVBQWtDUyxVQUFsQyxDQUExQjtBQUNBYSxpQkFBaUIsQ0FBQ04sZ0JBQWxCLENBQW1DLFFBQW5DLEVBQTZDLFlBQVk7QUFDdkRQLEVBQUFBLFVBQVUsR0FBR2EsaUJBQWlCLENBQUN6RCxLQUEvQjtBQUNBLE1BQUlvRCxTQUFTLEdBQUdILGFBQWEsRUFBN0I7QUFDQUksRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFNBQVo7QUFDQUcsRUFBQUEsS0FBSyxDQUFDQyxRQUFOLENBQWVKLFNBQWY7QUFDRCxDQUxELEdBT0E7O0FBQ0EsSUFBTU0sZUFBZSxHQUFHdkIsc0RBQUEsQ0FBeUIsS0FBekIsRUFBZ0NVLFFBQWhDLENBQXhCO0FBQ0FhLGVBQWUsQ0FBQ1AsZ0JBQWhCLENBQWlDLFFBQWpDLEVBQTJDLFlBQVk7QUFDckROLEVBQUFBLFFBQVEsR0FBR2EsZUFBZSxDQUFDMUQsS0FBM0I7QUFDQSxNQUFJb0QsU0FBUyxHQUFHSCxhQUFhLEVBQTdCO0FBQ0FJLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixTQUFaO0FBQ0FHLEVBQUFBLEtBQUssQ0FBQ0MsUUFBTixDQUFlSixTQUFmO0FBQ0QsQ0FMRDtBQVFBOztBQUVBLElBQU05QixHQUFHLEdBQUdxQyxDQUFDLENBQUNyQyxHQUFGLENBQU0sS0FBTixFQUFhc0MsT0FBYixDQUFxQixDQUFDLE1BQUQsRUFBUyxDQUFDLE9BQVYsQ0FBckIsRUFBeUMsQ0FBekMsQ0FBWjtBQUNBLElBQU1DLE9BQU8sR0FBR0YsQ0FBQyxDQUFDRyxJQUFGLENBQU9DLFlBQVAsQ0FBb0IsU0FBcEIsRUFBK0JDLEtBQS9CLENBQXFDMUMsR0FBckMsQ0FBaEIsRUFFQTtBQUNBOztBQUVBLElBQU1pQyxLQUFLLEdBQUdJLENBQUMsQ0FBQ0csSUFBRixDQUFPRyxZQUFQLENBQW9CO0FBQ2hDQyxFQUFBQSxHQUFHLEVBQUUsb0hBRDJCO0FBRWhDQyxFQUFBQSxLQUFLLEVBQUUsZUFBVUMsT0FBVixFQUFtQjtBQUN4QjtBQUNBLFFBQUlDLENBQUo7QUFDQSxRQUFJQyxJQUFJLEdBQUdGLE9BQU8sQ0FBQ0csVUFBUixDQUFtQkMsUUFBOUI7O0FBQ0EsUUFBSUYsSUFBSSxHQUFHLEVBQVAsSUFBYUEsSUFBSSxJQUFJLEVBQXpCLEVBQTZCO0FBQUVELE1BQUFBLENBQUMsR0FBRyxLQUFKO0FBQVc7O0FBQzFDLFFBQUlDLElBQUksSUFBSSxFQUFSLElBQWNBLElBQUksR0FBRyxFQUF6QixFQUE2QjtBQUFFRCxNQUFBQSxDQUFDLEdBQUcsT0FBSjtBQUFhOztBQUM1QyxRQUFJQyxJQUFJLElBQUksRUFBWixFQUFnQjtBQUFFRCxNQUFBQSxDQUFDLEdBQUcsTUFBSjtBQUFZOztBQUFBOztBQUM5QixRQUFJLENBQUNBLENBQUwsRUFBUTtBQUFFQSxNQUFBQSxDQUFDLEdBQUcsT0FBSjtBQUFhOztBQUN2QixXQUFPO0FBQUVJLE1BQUFBLEtBQUssRUFBRUosQ0FBVDtBQUFZSyxNQUFBQSxPQUFPLEVBQUUsRUFBckI7QUFBeUJDLE1BQUFBLE1BQU0sRUFBRTtBQUFqQyxLQUFQO0FBQ0QsR0FYK0I7QUFZaENDLEVBQUFBLEtBQUssRUFBRTNCLGFBQWE7QUFaWSxDQUFwQixFQWFYZSxLQWJXLENBYUwxQyxHQWJLLENBQWQsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY29uc3QgdGl0bGUgPSAnTm9ydGggQXRsYW50aWMgV2VzdCBvZiA2MMKwVzogMTk1MC0yMDIwJ1xuXG5leHBvcnQgY29uc3QgTUlOX1lFQVIgPSAxOTUwO1xuZXhwb3J0IGNvbnN0IE1BWF9ZRUFSID0gMjAyMDtcblxuZXhwb3J0IGNvbnN0IHN0b3JtX3R5cGVzID0ge1xuICAgICdjb3VudF8zNSc6IHtcbiAgICAgICd3aGVyZSc6ICdVU0FfV0lORDw2NCBBTkQgVVNBX1dJTkQ+PTM0JyxcbiAgICAgICdsYWJlbCc6ICdOYW1lZCBTdG9ybXMnXG4gICAgfSxcbiAgICAnY291bnRfNjQnOiB7XG4gICAgICAnd2hlcmUnOiAnVVNBX1dJTkQ+PTY0IEFORCBVU0FfV0lORDw5NicsXG4gICAgICAnbGFiZWwnOiAnSHVycmljYW5lcydcbiAgICB9LFxuICAgICdjb3VudF85Nic6IHtcbiAgICAgICd3aGVyZSc6ICdVU0FfV0lORD49OTYnLFxuICAgICAgJ2xhYmVsJzogJ01ham9yIEh1cnJpY2FuZXMnXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgbGVnZW5kX2xhYmVscyA9IHtcbiAgJ2NvdW50Xzk2JyA6ICdNYWpvciBIdXJyaWNhbmVzICg+PSA5Nmt0KScsXG4gICdjb3VudF82NCcgOiAnSHVycmljYW5lcyAoPj0gNjRrdCknLFxuICAnY291bnRfMzUnIDogJ05hbWVkIFN0b3JtcyAoPj0gMzRrdCknXG59XG5cbmV4cG9ydCBjb25zdCBmaWxsX2NvbG9ycyA9IHtcbiAgJ2NvdW50Xzk2JyA6ICcjM2U5OWU4JyxcbiAgJ2NvdW50XzY0JyA6ICcjNGNiYzE4JyxcbiAgJ2NvdW50XzM1JyA6ICcjNDg5NTI0J1xufVxuXG5cbiIsIlxuZXhwb3J0IGxldCBkYXRhID0ge1xuICBcIjE5NTBcIjoge1xuICAgIFwiY291bnRfOTZcIjogMTEuNSxcbiAgICBcImNvdW50XzY0XCI6IDM4LFxuICAgIFwiY291bnRfMzVcIjogNTkuNVxuICB9LFxuICBcIjE5NTFcIjoge1xuICAgIFwiY291bnRfOTZcIjogMy43NSxcbiAgICBcImNvdW50XzY0XCI6IDIzLjI1LFxuICAgIFwiY291bnRfMzVcIjogNDEuNzVcbiAgfSxcbiAgXCIxOTUyXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDIuNSxcbiAgICBcImNvdW50XzY0XCI6IDE0LjI1LFxuICAgIFwiY291bnRfMzVcIjogMjdcbiAgfSxcbiAgXCIxOTUzXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDMuMjUsXG4gICAgXCJjb3VudF82NFwiOiAxNC4yNSxcbiAgICBcImNvdW50XzM1XCI6IDQ0XG4gIH0sXG4gIFwiMTk1NFwiOiB7XG4gICAgXCJjb3VudF85NlwiOiA3LFxuICAgIFwiY291bnRfNjRcIjogMjAuNSxcbiAgICBcImNvdW50XzM1XCI6IDQ1XG4gIH0sXG4gIFwiMTk1NVwiOiB7XG4gICAgXCJjb3VudF85NlwiOiA4LjUsXG4gICAgXCJjb3VudF82NFwiOiAzMyxcbiAgICBcImNvdW50XzM1XCI6IDU5LjI1XG4gIH0sXG4gIFwiMTk1NlwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAxLjc1LFxuICAgIFwiY291bnRfNjRcIjogMTAuNzUsXG4gICAgXCJjb3VudF8zNVwiOiAyOS41XG4gIH0sXG4gIFwiMTk1N1wiOiB7XG4gICAgXCJjb3VudF85NlwiOiAwLjUsXG4gICAgXCJjb3VudF82NFwiOiA1LjUsXG4gICAgXCJjb3VudF8zNVwiOiAyMi43NVxuICB9LFxuICBcIjE5NThcIjoge1xuICAgIFwiY291bnRfOTZcIjogMy43NSxcbiAgICBcImNvdW50XzY0XCI6IDE2Ljc1LFxuICAgIFwiY291bnRfMzVcIjogNDEuNVxuICB9LFxuICBcIjE5NTlcIjoge1xuICAgIFwiY291bnRfOTZcIjogMy4yNSxcbiAgICBcImNvdW50XzY0XCI6IDEyLjI1LFxuICAgIFwiY291bnRfMzVcIjogMzYuMjVcbiAgfSxcbiAgXCIxOTYwXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDYuNzUsXG4gICAgXCJjb3VudF82NFwiOiAxMixcbiAgICBcImNvdW50XzM1XCI6IDI3XG4gIH0sXG4gIFwiMTk2MVwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAxMy43NSxcbiAgICBcImNvdW50XzY0XCI6IDI0Ljc1LFxuICAgIFwiY291bnRfMzVcIjogNDYuMjVcbiAgfSxcbiAgXCIxOTYyXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDAsXG4gICAgXCJjb3VudF82NFwiOiAxMS4yNSxcbiAgICBcImNvdW50XzM1XCI6IDI1Ljc1XG4gIH0sXG4gIFwiMTk2M1wiOiB7XG4gICAgXCJjb3VudF85NlwiOiAzLjc1LFxuICAgIFwiY291bnRfNjRcIjogMjIuNzUsXG4gICAgXCJjb3VudF8zNVwiOiAzNS43NVxuICB9LFxuICBcIjE5NjRcIjoge1xuICAgIFwiY291bnRfOTZcIjogOC43NSxcbiAgICBcImNvdW50XzY0XCI6IDMzLFxuICAgIFwiY291bnRfMzVcIjogNTMuNVxuICB9LFxuICBcIjE5NjVcIjoge1xuICAgIFwiY291bnRfOTZcIjogNi4yNSxcbiAgICBcImNvdW50XzY0XCI6IDkuNzUsXG4gICAgXCJjb3VudF8zNVwiOiAyMVxuICB9LFxuICBcIjE5NjZcIjoge1xuICAgIFwiY291bnRfOTZcIjogOC43NSxcbiAgICBcImNvdW50XzY0XCI6IDI1Ljc1LFxuICAgIFwiY291bnRfMzVcIjogMzYuNVxuICB9LFxuICBcIjE5NjdcIjoge1xuICAgIFwiY291bnRfOTZcIjogNS43NSxcbiAgICBcImNvdW50XzY0XCI6IDE4LjUsXG4gICAgXCJjb3VudF8zNVwiOiAyOC43NVxuICB9LFxuICBcIjE5NjhcIjoge1xuICAgIFwiY291bnRfOTZcIjogMCxcbiAgICBcImNvdW50XzY0XCI6IDcuNSxcbiAgICBcImNvdW50XzM1XCI6IDIwLjVcbiAgfSxcbiAgXCIxOTY5XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDQuNzUsXG4gICAgXCJjb3VudF82NFwiOiAyNC41LFxuICAgIFwiY291bnRfMzVcIjogNDkuNzVcbiAgfSxcbiAgXCIxOTcwXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDEsXG4gICAgXCJjb3VudF82NFwiOiA2LFxuICAgIFwiY291bnRfMzVcIjogMjAuNVxuICB9LFxuICBcIjE5NzFcIjoge1xuICAgIFwiY291bnRfOTZcIjogMSxcbiAgICBcImNvdW50XzY0XCI6IDE3LjI1LFxuICAgIFwiY291bnRfMzVcIjogNDYuMjVcbiAgfSxcbiAgXCIxOTcyXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDAsXG4gICAgXCJjb3VudF82NFwiOiAyLjc1LFxuICAgIFwiY291bnRfMzVcIjogMTcuNVxuICB9LFxuICBcIjE5NzNcIjoge1xuICAgIFwiY291bnRfOTZcIjogMCxcbiAgICBcImNvdW50XzY0XCI6IDMuMjUsXG4gICAgXCJjb3VudF8zNVwiOiAyMC41XG4gIH0sXG4gIFwiMTk3NFwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAzLjUsXG4gICAgXCJjb3VudF82NFwiOiAxMC41LFxuICAgIFwiY291bnRfMzVcIjogMzEuNzVcbiAgfSxcbiAgXCIxOTc1XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDIuMjUsXG4gICAgXCJjb3VudF82NFwiOiAxMS41LFxuICAgIFwiY291bnRfMzVcIjogMjVcbiAgfSxcbiAgXCIxOTc2XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDAuNzUsXG4gICAgXCJjb3VudF82NFwiOiAzLjc1LFxuICAgIFwiY291bnRfMzVcIjogMTUuMjVcbiAgfSxcbiAgXCIxOTc3XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDEsXG4gICAgXCJjb3VudF82NFwiOiA1LjI1LFxuICAgIFwiY291bnRfMzVcIjogMTMuMjVcbiAgfSxcbiAgXCIxOTc4XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDMsXG4gICAgXCJjb3VudF82NFwiOiA4LFxuICAgIFwiY291bnRfMzVcIjogMjJcbiAgfSxcbiAgXCIxOTc5XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDQuMjUsXG4gICAgXCJjb3VudF82NFwiOiAxMS43NSxcbiAgICBcImNvdW50XzM1XCI6IDI4LjI1XG4gIH0sXG4gIFwiMTk4MFwiOiB7XG4gICAgXCJjb3VudF85NlwiOiA2LjI1LFxuICAgIFwiY291bnRfNjRcIjogOS41LFxuICAgIFwiY291bnRfMzVcIjogMjIuMjVcbiAgfSxcbiAgXCIxOTgxXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDIuMjUsXG4gICAgXCJjb3VudF82NFwiOiAxMSxcbiAgICBcImNvdW50XzM1XCI6IDM2XG4gIH0sXG4gIFwiMTk4MlwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAwLjc1LFxuICAgIFwiY291bnRfNjRcIjogNCxcbiAgICBcImNvdW50XzM1XCI6IDExXG4gIH0sXG4gIFwiMTk4M1wiOiB7XG4gICAgXCJjb3VudF85NlwiOiAwLjI1LFxuICAgIFwiY291bnRfNjRcIjogMi4yNSxcbiAgICBcImNvdW50XzM1XCI6IDExLjI1XG4gIH0sXG4gIFwiMTk4NFwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAwLjc1LFxuICAgIFwiY291bnRfNjRcIjogMTEuNSxcbiAgICBcImNvdW50XzM1XCI6IDMyXG4gIH0sXG4gIFwiMTk4NVwiOiB7XG4gICAgXCJjb3VudF85NlwiOiA0LFxuICAgIFwiY291bnRfNjRcIjogMTguMjUsXG4gICAgXCJjb3VudF8zNVwiOiA0MS41XG4gIH0sXG4gIFwiMTk4NlwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAwLFxuICAgIFwiY291bnRfNjRcIjogMi4yNSxcbiAgICBcImNvdW50XzM1XCI6IDEyLjc1XG4gIH0sXG4gIFwiMTk4N1wiOiB7XG4gICAgXCJjb3VudF85NlwiOiAwLjUsXG4gICAgXCJjb3VudF82NFwiOiAyLjI1LFxuICAgIFwiY291bnRfMzVcIjogMTIuNVxuICB9LFxuICBcIjE5ODhcIjoge1xuICAgIFwiY291bnRfOTZcIjogNi41LFxuICAgIFwiY291bnRfNjRcIjogMTIuMjUsXG4gICAgXCJjb3VudF8zNVwiOiAyOC41XG4gIH0sXG4gIFwiMTk4OVwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAzLjUsXG4gICAgXCJjb3VudF82NFwiOiAxMi41LFxuICAgIFwiY291bnRfMzVcIjogMjZcbiAgfSxcbiAgXCIxOTkwXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDAsXG4gICAgXCJjb3VudF82NFwiOiA5LjI1LFxuICAgIFwiY291bnRfMzVcIjogMjUuNVxuICB9LFxuICBcIjE5OTFcIjoge1xuICAgIFwiY291bnRfOTZcIjogMS4yNSxcbiAgICBcImNvdW50XzY0XCI6IDcuMjUsXG4gICAgXCJjb3VudF8zNVwiOiAxNC41XG4gIH0sXG4gIFwiMTk5MlwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAzLjUsXG4gICAgXCJjb3VudF82NFwiOiA1LFxuICAgIFwiY291bnRfMzVcIjogMTdcbiAgfSxcbiAgXCIxOTkzXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDAuNzUsXG4gICAgXCJjb3VudF82NFwiOiA3LjUsXG4gICAgXCJjb3VudF8zNVwiOiAyMC4yNVxuICB9LFxuICBcIjE5OTRcIjoge1xuICAgIFwiY291bnRfOTZcIjogMCxcbiAgICBcImNvdW50XzY0XCI6IDEsXG4gICAgXCJjb3VudF8zNVwiOiAxNlxuICB9LFxuICBcIjE5OTVcIjoge1xuICAgIFwiY291bnRfOTZcIjogNy4yNSxcbiAgICBcImNvdW50XzY0XCI6IDM0LjUsXG4gICAgXCJjb3VudF8zNVwiOiA2M1xuICB9LFxuICBcIjE5OTZcIjoge1xuICAgIFwiY291bnRfOTZcIjogOS4yNSxcbiAgICBcImNvdW50XzY0XCI6IDI5LjUsXG4gICAgXCJjb3VudF8zNVwiOiA1MFxuICB9LFxuICBcIjE5OTdcIjoge1xuICAgIFwiY291bnRfOTZcIjogMS43NSxcbiAgICBcImNvdW50XzY0XCI6IDUuNSxcbiAgICBcImNvdW50XzM1XCI6IDE4XG4gIH0sXG4gIFwiMTk5OFwiOiB7XG4gICAgXCJjb3VudF85NlwiOiA4LFxuICAgIFwiY291bnRfNjRcIjogMjcuNSxcbiAgICBcImNvdW50XzM1XCI6IDQyLjVcbiAgfSxcbiAgXCIxOTk5XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDcuNSxcbiAgICBcImNvdW50XzY0XCI6IDI2Ljc1LFxuICAgIFwiY291bnRfMzVcIjogNDdcbiAgfSxcbiAgXCIyMDAwXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDEuMjUsXG4gICAgXCJjb3VudF82NFwiOiAxMCxcbiAgICBcImNvdW50XzM1XCI6IDMwLjI1XG4gIH0sXG4gIFwiMjAwMVwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAzLjc1LFxuICAgIFwiY291bnRfNjRcIjogMTUuNzUsXG4gICAgXCJjb3VudF8zNVwiOiA0MlxuICB9LFxuICBcIjIwMDJcIjoge1xuICAgIFwiY291bnRfOTZcIjogMyxcbiAgICBcImNvdW50XzY0XCI6IDguNzUsXG4gICAgXCJjb3VudF8zNVwiOiA0Mi4yNVxuICB9LFxuICBcIjIwMDNcIjoge1xuICAgIFwiY291bnRfOTZcIjogNy41LFxuICAgIFwiY291bnRfNjRcIjogMTQuNSxcbiAgICBcImNvdW50XzM1XCI6IDQwLjVcbiAgfSxcbiAgXCIyMDA0XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDE0LFxuICAgIFwiY291bnRfNjRcIjogMjYuNzUsXG4gICAgXCJjb3VudF8zNVwiOiA1MS41XG4gIH0sXG4gIFwiMjAwNVwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAxNy4yNSxcbiAgICBcImNvdW50XzY0XCI6IDM3LjI1LFxuICAgIFwiY291bnRfMzVcIjogODIuMjVcbiAgfSxcbiAgXCIyMDA2XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDAsXG4gICAgXCJjb3VudF82NFwiOiAzLjc1LFxuICAgIFwiY291bnRfMzVcIjogMjEuMjVcbiAgfSxcbiAgXCIyMDA3XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDYsXG4gICAgXCJjb3VudF82NFwiOiAxMC41LFxuICAgIFwiY291bnRfMzVcIjogMjUuMjVcbiAgfSxcbiAgXCIyMDA4XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDUuNSxcbiAgICBcImNvdW50XzY0XCI6IDIzLjI1LFxuICAgIFwiY291bnRfMzVcIjogNjQuNzVcbiAgfSxcbiAgXCIyMDA5XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDEuMjUsXG4gICAgXCJjb3VudF82NFwiOiA1Ljc1LFxuICAgIFwiY291bnRfMzVcIjogMTMuMjVcbiAgfSxcbiAgXCIyMDEwXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDQuMjUsXG4gICAgXCJjb3VudF82NFwiOiAyMSxcbiAgICBcImNvdW50XzM1XCI6IDUxLjc1XG4gIH0sXG4gIFwiMjAxMVwiOiB7XG4gICAgXCJjb3VudF85NlwiOiA0LjUsXG4gICAgXCJjb3VudF82NFwiOiAxOS4yNSxcbiAgICBcImNvdW50XzM1XCI6IDYwXG4gIH0sXG4gIFwiMjAxMlwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAwLjI1LFxuICAgIFwiY291bnRfNjRcIjogMTIuMjUsXG4gICAgXCJjb3VudF8zNVwiOiA0OFxuICB9LFxuICBcIjIwMTNcIjoge1xuICAgIFwiY291bnRfOTZcIjogMCxcbiAgICBcImNvdW50XzY0XCI6IDEuNSxcbiAgICBcImNvdW50XzM1XCI6IDE0XG4gIH0sXG4gIFwiMjAxNFwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAzLjI1LFxuICAgIFwiY291bnRfNjRcIjogMTIsXG4gICAgXCJjb3VudF8zNVwiOiAyNC4yNVxuICB9LFxuICBcIjIwMTVcIjoge1xuICAgIFwiY291bnRfOTZcIjogMy41LFxuICAgIFwiY291bnRfNjRcIjogNy4yNSxcbiAgICBcImNvdW50XzM1XCI6IDE5Ljc1XG4gIH0sXG4gIFwiMjAxNlwiOiB7XG4gICAgXCJjb3VudF85NlwiOiA4Ljc1LFxuICAgIFwiY291bnRfNjRcIjogMTYuMjUsXG4gICAgXCJjb3VudF8zNVwiOiA0Mi41XG4gIH0sXG4gIFwiMjAxN1wiOiB7XG4gICAgXCJjb3VudF85NlwiOiAxMi4yNSxcbiAgICBcImNvdW50XzY0XCI6IDMyLjI1LFxuICAgIFwiY291bnRfMzVcIjogNTkuNzVcbiAgfSxcbiAgXCIyMDE4XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDQsXG4gICAgXCJjb3VudF82NFwiOiA5LFxuICAgIFwiY291bnRfMzVcIjogMjQuMjVcbiAgfSxcbiAgXCIyMDE5XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDYuMjUsXG4gICAgXCJjb3VudF82NFwiOiAxNC4yNSxcbiAgICBcImNvdW50XzM1XCI6IDM5LjI1XG4gIH0sXG4gIFwiMjAyMFwiOiB7XG4gICAgXCJjb3VudF85NlwiOiA1LjUsXG4gICAgXCJjb3VudF82NFwiOiAyOCxcbiAgICBcImNvdW50XzM1XCI6IDgxXG4gIH1cbn1cblxuIiwiaW1wb3J0ICogYXMgY29uZmlnIGZyb20gJy4vY29uZmlnJ1xuXG5leHBvcnQgY29uc3Qgb3B0aW9uX2ZhY3RvcnkgPSBmdW5jdGlvbiAodmFsdWUsIGlubmVySFRNTCkge1xuICAgIHZhciBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHQudmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuICAgIG9wdC5pbm5lckhUTUwgPSBTdHJpbmcoaW5uZXJIVE1MKTtcbiAgICByZXR1cm4gb3B0O1xufVxuXG5leHBvcnQgY29uc3QgeWVhcl9zZWxlY3RfZmFjdG9yeSA9IChsYWJlbCwgeWVhcl9zZWxlY3RlZCkgPT4ge1xuICBjb25zdCB5ZWFyX3NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB5ZWFyLSR7bGFiZWx9LXNlbGVjdGApXG4gIGxldCBzZWxlY3RlZF9pbmRleDtcbiAgbGV0IGluZGV4ID0gMDtcbiAgZm9yICh2YXIgeSA9IGNvbmZpZy5NSU5fWUVBUjsgeTw9Y29uZmlnLk1BWF9ZRUFSOyB5Kyspe1xuICAgICAgaWYgKHBhcnNlSW50KHllYXJfc2VsZWN0ZWQpID09IHkpIHsgc2VsZWN0ZWRfaW5kZXggPSBpbmRleCB9XG4gICAgICB5ZWFyX3NlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25fZmFjdG9yeShTdHJpbmcoeSksIFN0cmluZyh5KSkpXG4gICAgICBpbmRleCsrO1xuICB9XG4gIHllYXJfc2VsZWN0Lm9wdGlvbnMuc2VsZWN0ZWRJbmRleD1zZWxlY3RlZF9pbmRleFxuICByZXR1cm4geWVhcl9zZWxlY3Rcbn1cblxuZXhwb3J0IGNvbnN0IHBhcnNlWWVhcnMgPSAoZGF0YSkgPT4ge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSlcbiAgY29uc3QgeWVhcnMgPSBrZXlzLm1hcChrID0+IHBhcnNlSW50KGspKVxuICByZXR1cm4geWVhcnNcbn1cblxuZXhwb3J0IGNvbnN0IHBhcnNlVHJhY2UgPSAoa2V5LCBkYXRhLCB5ZWFycykgPT4ge1xuICBjb25zdCB0cmFjZSA9IHtcbiAgICB4OiB5ZWFycyxcbiAgICB5OiBbXSxcbiAgICBtb2RlOiAnbm9uZScsXG4gICAgbmFtZTogY29uZmlnLmxlZ2VuZF9sYWJlbHNba2V5XSxcbiAgICBzdGFja2dyb3VwOiAnb25lJyxcbiAgICBmaWxsY29sb3I6IGNvbmZpZy5maWxsX2NvbG9yc1trZXldXG4gIH1cbiAgeWVhcnMuZm9yRWFjaCgoeWVhcikgPT4ge1xuICAgIHRyYWNlWyd5J10ucHVzaChkYXRhW3llYXJdW2tleV0pXG4gIH0pXG4gIHJldHVybiB0cmFjZVxufVxuXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbmJvZHkge1xcbiAgICBtYXJnaW46MDsgcGFkZGluZzowO1xcbn1cXG5cXG4jbWVudSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyByaWdodDogMDsgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAxMzBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI21lbnUgZGl2IHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4jbWFwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDE1MHB4OyBib3R0b206MDsgcmlnaHQ6IDUwJTsgbGVmdDowO1xcbn1cXG5cXG4jcGxvdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOjE1MHB4OyBib3R0b206MDsgcmlnaHQ6IDA7IGxlZnQ6NTAlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLFFBQVEsRUFBRSxTQUFTO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPO0lBQzdDLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE1BQU07QUFDaEU7O0FBRUE7SUFDSSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRO0FBQy9EXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbmJvZHkge1xcbiAgICBtYXJnaW46MDsgcGFkZGluZzowO1xcbn1cXG5cXG4jbWVudSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyByaWdodDogMDsgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAxMzBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI21lbnUgZGl2IHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4jbWFwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDE1MHB4OyBib3R0b206MDsgcmlnaHQ6IDUwJTsgbGVmdDowO1xcbn1cXG5cXG4jcGxvdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOjE1MHB4OyBib3R0b206MDsgcmlnaHQ6IDA7IGxlZnQ6NTAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuaW1wb3J0ICcuL2luZGV4LmNzcydcbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tICcuL2NvbmZpZydcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJ1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gICcuL2RhdGEnXG5cblxuLyogUGxvdGx5IFNldHVwICovXG5cbmNvbnN0IHllYXJzID0gdXRpbC5wYXJzZVllYXJzKGRhdGEpXG5jb25zdCB0cmFjZV9jb3VudF85NiA9IHV0aWwucGFyc2VUcmFjZSgnY291bnRfOTYnLCBkYXRhLCB5ZWFycylcbmNvbnN0IHRyYWNlX2NvdW50XzY0ID0gdXRpbC5wYXJzZVRyYWNlKCdjb3VudF82NCcsIGRhdGEsIHllYXJzKVxuY29uc3QgdHJhY2VfY291bnRfMzUgPSB1dGlsLnBhcnNlVHJhY2UoJ2NvdW50XzM1JywgZGF0YSwgeWVhcnMpXG5cbmNvbnN0IGxheW91dCA9IHtcbiAgdGl0bGU6IGNvbmZpZy50aXRsZVxufVxuXG5jb25zdCBhbGxfdHJhY2VzID0gW3RyYWNlX2NvdW50Xzk2LCB0cmFjZV9jb3VudF82NCwgdHJhY2VfY291bnRfMzVdXG5cblBsb3RseS5uZXdQbG90KCdwbG90JywgYWxsX3RyYWNlcywgbGF5b3V0KTtcblxuXG4vKiBTZWxlY3RvcnMgKi9cblxuLy8gU3RhdGUgdmFyaWFibGVzXG5sZXQgc3Rvcm1fd2hlcmUgPSBjb25maWcuc3Rvcm1fdHlwZXNbJ2NvdW50XzM1J11bJ3doZXJlJ11cbmxldCB5ZWFyX3N0YXJ0ID0gJzIwMTAnXG5sZXQgeWVhcl9lbmQgPSAnMjAyMCdcblxuLy8gV2hlcmUgY2xhdXNlIGdlbmVyYXRvclxuY29uc3QgeWVhcl93aGVyZT0gKHN0YXJ0LCBlbmQpID0+IGBZRUFSPj0ke3N0YXJ0fSBBTkQgWUVBUjw9JHtlbmR9YFxuY29uc3Qgd2hlcmVfZmFjdG9yeSA9ICgpID0+IGAke3llYXJfd2hlcmUoeWVhcl9zdGFydCwgeWVhcl9lbmQpfSBBTkQgJHtzdG9ybV93aGVyZX1gXG5cbi8vIFNlbGVjdCBzdG9ybSB0eXBlXG5jb25zdCBzdG9ybV9zZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Rvcm0tdHlwZS1zZWxlY3QnKVxuZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGNvbmZpZy5zdG9ybV90eXBlcykpIHtcbiAgICBsZXQgdmFsdWUgPSBjb25maWcuc3Rvcm1fdHlwZXNba2V5XVsnd2hlcmUnXVxuICAgIGxldCBsYWJlbCA9IGNvbmZpZy5zdG9ybV90eXBlc1trZXldWydsYWJlbCddXG4gICAgc3Rvcm1fc2VsZWN0LmFwcGVuZENoaWxkKHV0aWwub3B0aW9uX2ZhY3RvcnkodmFsdWUsIGxhYmVsKSk7XG59XG5cbnN0b3JtX3NlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gIHN0b3JtX3doZXJlID0gc3Rvcm1fc2VsZWN0LnZhbHVlXG4gIGxldCBuZXdfd2hlcmUgPSB3aGVyZV9mYWN0b3J5KHN0b3JtX3doZXJlLCB5ZWFyX3doZXJlKVxuICBjb25zb2xlLmxvZyhuZXdfd2hlcmUpXG4gIGxheWVyLnNldFdoZXJlKG5ld193aGVyZSlcbn0pO1xuXG4vLyBTZWxlY3Qgc3RhcnQgeWVhclxuY29uc3QgeWVhcl9zdGFydF9zZWxlY3QgPSB1dGlsLnllYXJfc2VsZWN0X2ZhY3RvcnkoJ3N0YXJ0JywgeWVhcl9zdGFydClcbnllYXJfc3RhcnRfc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgeWVhcl9zdGFydCA9IHllYXJfc3RhcnRfc2VsZWN0LnZhbHVlXG4gIGxldCBuZXdfd2hlcmUgPSB3aGVyZV9mYWN0b3J5KClcbiAgY29uc29sZS5sb2cobmV3X3doZXJlKVxuICBsYXllci5zZXRXaGVyZShuZXdfd2hlcmUpO1xufSk7XG5cbi8vIFNlbGVjdCBlbmQgeWVhclxuY29uc3QgeWVhcl9lbmRfc2VsZWN0ID0gdXRpbC55ZWFyX3NlbGVjdF9mYWN0b3J5KCdlbmQnLCB5ZWFyX2VuZClcbnllYXJfZW5kX3NlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gIHllYXJfZW5kID0geWVhcl9lbmRfc2VsZWN0LnZhbHVlXG4gIGxldCBuZXdfd2hlcmUgPSB3aGVyZV9mYWN0b3J5KClcbiAgY29uc29sZS5sb2cobmV3X3doZXJlKVxuICBsYXllci5zZXRXaGVyZShuZXdfd2hlcmUpO1xufSk7XG5cblxuLyogTWFwICovXG5cbmNvbnN0IG1hcCA9IEwubWFwKCdtYXAnKS5zZXRWaWV3KFszNy44MzcsIC0xMDAuNDc5XSwgNSk7XG5jb25zdCBiYXNlbWFwID0gTC5lc3JpLmJhc2VtYXBMYXllcignU3RyZWV0cycpLmFkZFRvKG1hcCk7XG5cbi8vIGR1bW15IGZlYXR1cmUgZm9yIGxvZ2dpbmdcbi8vbGV0IGY7XG5cbmNvbnN0IGxheWVyID0gTC5lc3JpLmZlYXR1cmVMYXllcih7XG4gIHVybDogJ2h0dHBzOi8vc2VydmljZXMyLmFyY2dpcy5jb20vRmlhUEE0Z2EwaVFLZHV2My9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9JQlRyQUNTX0FMTF9saXN0X3YwNHIwMF9saW5lc18xL0ZlYXR1cmVTZXJ2ZXIvMCcsXG4gIHN0eWxlOiBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgIC8vaWYgKCFmKSB7IGYgPSBmZWF0dXJlOyAgY29uc29sZS5sb2coZmVhdHVyZSkgfVxuICAgIGxldCBjO1xuICAgIGxldCBwcm9wID0gZmVhdHVyZS5wcm9wZXJ0aWVzLlVTQV9XSU5EXG4gICAgaWYgKHByb3AgPCA2NCAmJiBwcm9wID49IDM0KSB7IGMgPSAncmVkJyB9XG4gICAgaWYgKHByb3AgPj0gNjQgJiYgcHJvcCA8IDk2KSB7IGMgPSAnZ3JlZW4nIH1cbiAgICBpZiAocHJvcCA+PSA5NikgeyBjID0gJ2JsdWUnIH07XG4gICAgaWYgKCFjKSB7IGMgPSAnd2hpdGUnIH1cbiAgICByZXR1cm4geyBjb2xvcjogYywgb3BhY2l0eTogLjksIHdlaWdodDogNSB9O1xuICB9LFxuICB3aGVyZTogd2hlcmVfZmFjdG9yeSgpXG59KS5hZGRUbyhtYXApO1xuXG5cbiJdLCJuYW1lcyI6WyJ0aXRsZSIsIk1JTl9ZRUFSIiwiTUFYX1lFQVIiLCJzdG9ybV90eXBlcyIsImxlZ2VuZF9sYWJlbHMiLCJmaWxsX2NvbG9ycyIsImRhdGEiLCJjb25maWciLCJvcHRpb25fZmFjdG9yeSIsInZhbHVlIiwiaW5uZXJIVE1MIiwib3B0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiU3RyaW5nIiwieWVhcl9zZWxlY3RfZmFjdG9yeSIsImxhYmVsIiwieWVhcl9zZWxlY3RlZCIsInllYXJfc2VsZWN0IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWxlY3RlZF9pbmRleCIsImluZGV4IiwieSIsInBhcnNlSW50IiwiYXBwZW5kQ2hpbGQiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInBhcnNlWWVhcnMiLCJrZXlzIiwiT2JqZWN0IiwieWVhcnMiLCJtYXAiLCJrIiwicGFyc2VUcmFjZSIsImtleSIsInRyYWNlIiwieCIsIm1vZGUiLCJuYW1lIiwic3RhY2tncm91cCIsImZpbGxjb2xvciIsImZvckVhY2giLCJ5ZWFyIiwicHVzaCIsInV0aWwiLCJ0cmFjZV9jb3VudF85NiIsInRyYWNlX2NvdW50XzY0IiwidHJhY2VfY291bnRfMzUiLCJsYXlvdXQiLCJhbGxfdHJhY2VzIiwiUGxvdGx5IiwibmV3UGxvdCIsInN0b3JtX3doZXJlIiwieWVhcl9zdGFydCIsInllYXJfZW5kIiwieWVhcl93aGVyZSIsInN0YXJ0IiwiZW5kIiwid2hlcmVfZmFjdG9yeSIsInN0b3JtX3NlbGVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJuZXdfd2hlcmUiLCJjb25zb2xlIiwibG9nIiwibGF5ZXIiLCJzZXRXaGVyZSIsInllYXJfc3RhcnRfc2VsZWN0IiwieWVhcl9lbmRfc2VsZWN0IiwiTCIsInNldFZpZXciLCJiYXNlbWFwIiwiZXNyaSIsImJhc2VtYXBMYXllciIsImFkZFRvIiwiZmVhdHVyZUxheWVyIiwidXJsIiwic3R5bGUiLCJmZWF0dXJlIiwiYyIsInByb3AiLCJwcm9wZXJ0aWVzIiwiVVNBX1dJTkQiLCJjb2xvciIsIm9wYWNpdHkiLCJ3ZWlnaHQiLCJ3aGVyZSJdLCJzb3VyY2VSb290IjoiIn0=