/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
___CSS_LOADER_EXPORT___.push([module.id, "\nbody {\n    margin:0; padding:0;\n}\n\n#menu {\n    position: absolute; top: 0; bottom: 100px; right: 0; left: 0;\n    padding: 10px;\n}\n\n#menu div {\n    margin: 10px;\n}\n\n#map {\n    position: absolute; top:100px; bottom:0; right: 50%; left:0;\n}\n\n#plot {\n    position: absolute; top:100px; bottom:0; right: 0; left:50%;\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":";AACA;IACI,QAAQ,EAAE,SAAS;AACvB;;AAEA;IACI,kBAAkB,EAAE,MAAM,EAAE,aAAa,EAAE,QAAQ,EAAE,OAAO;IAC5D,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB,EAAE,SAAS,EAAE,QAAQ,EAAE,UAAU,EAAE,MAAM;AAC/D;;AAEA;IACI,kBAAkB,EAAE,SAAS,EAAE,QAAQ,EAAE,QAAQ,EAAE,QAAQ;AAC/D","sourcesContent":["\nbody {\n    margin:0; padding:0;\n}\n\n#menu {\n    position: absolute; top: 0; bottom: 100px; right: 0; left: 0;\n    padding: 10px;\n}\n\n#menu div {\n    margin: 10px;\n}\n\n#map {\n    position: absolute; top:100px; bottom:0; right: 50%; left:0;\n}\n\n#plot {\n    position: absolute; top:100px; bottom:0; right: 0; left:50%;\n}\n"],"sourceRoot":""}]);
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

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "title": () => (/* binding */ title),
/* harmony export */   "labels": () => (/* binding */ labels),
/* harmony export */   "fill_colors": () => (/* binding */ fill_colors)
/* harmony export */ });

let title = 'North Atlantic West of 60°W: 1950-2020'

let labels = {
  'count_96' : 'Major Hurricanes (>= 96kt)',
  'count_64' : 'Hurricanes (>= 64kt)',
  'count_35' : 'Named Storms (>= 34kt)'
}

let fill_colors = {
  'count_96' : '#3e99e8',
  'count_64' : '#4cbc18',
  'count_35' : '#489524'
}




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

let data = {
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
}



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
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/config.js");




const MIN_YEAR = 1950;
const MAX_YEAR = 2020;

const parseYears = (data) => {
  const keys = Object.keys(data)
  const years = keys.map(k => parseInt(k))
  return years
}

const parseTrace = (key, data, years) => {
  const trace = {
    x: years,
    y: [],
    mode: 'none',
    name: _config__WEBPACK_IMPORTED_MODULE_2__.labels[key],
    stackgroup: 'one',
    fillcolor: _config__WEBPACK_IMPORTED_MODULE_2__.fill_colors[key]
  }
  years.forEach((year) => {
    trace['y'].push(data[year][key])
  })
  return trace
}

const years = parseYears(_data__WEBPACK_IMPORTED_MODULE_1__.data)
const trace_count_96 = parseTrace('count_96', _data__WEBPACK_IMPORTED_MODULE_1__.data, years)
const trace_count_64 = parseTrace('count_64', _data__WEBPACK_IMPORTED_MODULE_1__.data, years)
const trace_count_35 = parseTrace('count_35', _data__WEBPACK_IMPORTED_MODULE_1__.data, years)

const layout = {
  title: _config__WEBPACK_IMPORTED_MODULE_2__.title
}

const all_traces = [trace_count_96, trace_count_64, trace_count_35]

Plotly.newPlot('plot', all_traces, layout);


/* Setup <select> elements */

let storm_types = {
    'count_35': {
      'where': 'USA_WIND<64 AND USA_WIND>=34',
      'label': 'Named Storms'
    },
    'count_64': {
      'where': 'USA_WIND>=64 AND USA_WIND<96',
      'label': 'Hurricanes'
    },
    'count_96': {
      'where': 'USA_WIND>=64 AND USA_WIND<96',
      'label': 'Major Hurricanes'
    }
}
const option_factory = function (value, innerHTML) {
    var opt = document.createElement('option');
    opt.value = String(value);
    opt.innerHTML = String(innerHTML);
    return opt;
}

const storm_select = document.getElementById('storm-type-select')
for (let key of Object.keys(storm_types)) {
    let value = storm_types[key]['where']
    let label = storm_types[key]['label']
    storm_select.appendChild(option_factory(value, label));
}

const year_select = document.getElementById('year-select')
for (var i = MIN_YEAR; i<=MAX_YEAR; i++){
    year_select.appendChild(option_factory('YEAR='+String(i), i))
}

/* Map setup */

let map = L.map('map').setView([37.837, -100.479], 5);

let basemap = L.esri.basemapLayer('Streets').addTo(map);

let storm_where = storm_types['count_35']['where']
let year_where = 'YEAR=1950'

let where_factory = (w1, w2) => w1 + ' AND ' + w2

// dummy feature for logging
let f;

let layer = L.esri.featureLayer({
  url: 'https://services2.arcgis.com/FiaPA4ga0iQKduv3/ArcGIS/rest/services/IBTrACS_ALL_list_v04r00_lines_1/FeatureServer/0',
  style: function (feature) {
    if (!f) { f = feature;  console.log(feature) }
    var c;
    let prop = feature.properties.USA_WIND
    if (prop < 64 && prop >= 34) { c = 'red' }
    if (prop >= 64 && prop < 96) { c = 'green' }
    if (prop >= 96) { c = 'blue' };
    if (!c) { c = 'white' }
    return { color: c, opacity: .9, weight: 5 };
  },
  where: where_factory(storm_where, year_where)
}).addTo(map);

year_select.addEventListener('change', function () {
  year_where = year_select.value
  let new_where = where_factory(storm_where, year_where)
  console.log(new_where)
  layer.setWhere(new_where);
});

storm_select.addEventListener('change', function () {
  storm_where = storm_select.value
  let new_where = where_factory(storm_where, year_where)
  console.log(new_where)
  layer.setWhere(new_where)
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7QUMvQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkTzs7QUFFQTtBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3JXQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOb0I7QUFDVTtBQUN1Qjs7QUFFckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDJDQUFNO0FBQ2hCO0FBQ0EsZUFBZSxnREFBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSx5QkFBeUIsdUNBQUk7QUFDN0IsOENBQThDLHVDQUFJO0FBQ2xELDhDQUE4Qyx1Q0FBSTtBQUNsRCw4Q0FBOEMsdUNBQUk7O0FBRWxEO0FBQ0EsU0FBUywwQ0FBSztBQUNkOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsYUFBYTtBQUNwQztBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGNBQWM7QUFDNUI7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsc0JBQXNCO0FBQ3RCLGNBQWM7QUFDZCxhQUFhO0FBQ2IsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5ib2R5IHtcXG4gICAgbWFyZ2luOjA7IHBhZGRpbmc6MDtcXG59XFxuXFxuI21lbnUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgYm90dG9tOiAxMDBweDsgcmlnaHQ6IDA7IGxlZnQ6IDA7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbiNtZW51IGRpdiB7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuI21hcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOjEwMHB4OyBib3R0b206MDsgcmlnaHQ6IDUwJTsgbGVmdDowO1xcbn1cXG5cXG4jcGxvdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOjEwMHB4OyBib3R0b206MDsgcmlnaHQ6IDA7IGxlZnQ6NTAlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLFFBQVEsRUFBRSxTQUFTO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsT0FBTztJQUM1RCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE1BQU07QUFDL0Q7O0FBRUE7SUFDSSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRO0FBQy9EXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbmJvZHkge1xcbiAgICBtYXJnaW46MDsgcGFkZGluZzowO1xcbn1cXG5cXG4jbWVudSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBib3R0b206IDEwMHB4OyByaWdodDogMDsgbGVmdDogMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI21lbnUgZGl2IHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4jbWFwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyB0b3A6MTAwcHg7IGJvdHRvbTowOyByaWdodDogNTAlOyBsZWZ0OjA7XFxufVxcblxcbiNwbG90IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyB0b3A6MTAwcHg7IGJvdHRvbTowOyByaWdodDogMDsgbGVmdDo1MCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmV4cG9ydCBsZXQgdGl0bGUgPSAnTm9ydGggQXRsYW50aWMgV2VzdCBvZiA2MMKwVzogMTk1MC0yMDIwJ1xuXG5leHBvcnQgbGV0IGxhYmVscyA9IHtcbiAgJ2NvdW50Xzk2JyA6ICdNYWpvciBIdXJyaWNhbmVzICg+PSA5Nmt0KScsXG4gICdjb3VudF82NCcgOiAnSHVycmljYW5lcyAoPj0gNjRrdCknLFxuICAnY291bnRfMzUnIDogJ05hbWVkIFN0b3JtcyAoPj0gMzRrdCknXG59XG5cbmV4cG9ydCBsZXQgZmlsbF9jb2xvcnMgPSB7XG4gICdjb3VudF85NicgOiAnIzNlOTllOCcsXG4gICdjb3VudF82NCcgOiAnIzRjYmMxOCcsXG4gICdjb3VudF8zNScgOiAnIzQ4OTUyNCdcbn1cblxuXG4iLCJcbmV4cG9ydCBsZXQgZGF0YSA9IHtcbiAgXCIxOTUwXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDExLjUsXG4gICAgXCJjb3VudF82NFwiOiAzOCxcbiAgICBcImNvdW50XzM1XCI6IDU5LjVcbiAgfSxcbiAgXCIxOTUxXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDMuNzUsXG4gICAgXCJjb3VudF82NFwiOiAyMy4yNSxcbiAgICBcImNvdW50XzM1XCI6IDQxLjc1XG4gIH0sXG4gIFwiMTk1MlwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAyLjUsXG4gICAgXCJjb3VudF82NFwiOiAxNC4yNSxcbiAgICBcImNvdW50XzM1XCI6IDI3XG4gIH0sXG4gIFwiMTk1M1wiOiB7XG4gICAgXCJjb3VudF85NlwiOiAzLjI1LFxuICAgIFwiY291bnRfNjRcIjogMTQuMjUsXG4gICAgXCJjb3VudF8zNVwiOiA0NFxuICB9LFxuICBcIjE5NTRcIjoge1xuICAgIFwiY291bnRfOTZcIjogNyxcbiAgICBcImNvdW50XzY0XCI6IDIwLjUsXG4gICAgXCJjb3VudF8zNVwiOiA0NVxuICB9LFxuICBcIjE5NTVcIjoge1xuICAgIFwiY291bnRfOTZcIjogOC41LFxuICAgIFwiY291bnRfNjRcIjogMzMsXG4gICAgXCJjb3VudF8zNVwiOiA1OS4yNVxuICB9LFxuICBcIjE5NTZcIjoge1xuICAgIFwiY291bnRfOTZcIjogMS43NSxcbiAgICBcImNvdW50XzY0XCI6IDEwLjc1LFxuICAgIFwiY291bnRfMzVcIjogMjkuNVxuICB9LFxuICBcIjE5NTdcIjoge1xuICAgIFwiY291bnRfOTZcIjogMC41LFxuICAgIFwiY291bnRfNjRcIjogNS41LFxuICAgIFwiY291bnRfMzVcIjogMjIuNzVcbiAgfSxcbiAgXCIxOTU4XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDMuNzUsXG4gICAgXCJjb3VudF82NFwiOiAxNi43NSxcbiAgICBcImNvdW50XzM1XCI6IDQxLjVcbiAgfSxcbiAgXCIxOTU5XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDMuMjUsXG4gICAgXCJjb3VudF82NFwiOiAxMi4yNSxcbiAgICBcImNvdW50XzM1XCI6IDM2LjI1XG4gIH0sXG4gIFwiMTk2MFwiOiB7XG4gICAgXCJjb3VudF85NlwiOiA2Ljc1LFxuICAgIFwiY291bnRfNjRcIjogMTIsXG4gICAgXCJjb3VudF8zNVwiOiAyN1xuICB9LFxuICBcIjE5NjFcIjoge1xuICAgIFwiY291bnRfOTZcIjogMTMuNzUsXG4gICAgXCJjb3VudF82NFwiOiAyNC43NSxcbiAgICBcImNvdW50XzM1XCI6IDQ2LjI1XG4gIH0sXG4gIFwiMTk2MlwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAwLFxuICAgIFwiY291bnRfNjRcIjogMTEuMjUsXG4gICAgXCJjb3VudF8zNVwiOiAyNS43NVxuICB9LFxuICBcIjE5NjNcIjoge1xuICAgIFwiY291bnRfOTZcIjogMy43NSxcbiAgICBcImNvdW50XzY0XCI6IDIyLjc1LFxuICAgIFwiY291bnRfMzVcIjogMzUuNzVcbiAgfSxcbiAgXCIxOTY0XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDguNzUsXG4gICAgXCJjb3VudF82NFwiOiAzMyxcbiAgICBcImNvdW50XzM1XCI6IDUzLjVcbiAgfSxcbiAgXCIxOTY1XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDYuMjUsXG4gICAgXCJjb3VudF82NFwiOiA5Ljc1LFxuICAgIFwiY291bnRfMzVcIjogMjFcbiAgfSxcbiAgXCIxOTY2XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDguNzUsXG4gICAgXCJjb3VudF82NFwiOiAyNS43NSxcbiAgICBcImNvdW50XzM1XCI6IDM2LjVcbiAgfSxcbiAgXCIxOTY3XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDUuNzUsXG4gICAgXCJjb3VudF82NFwiOiAxOC41LFxuICAgIFwiY291bnRfMzVcIjogMjguNzVcbiAgfSxcbiAgXCIxOTY4XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDAsXG4gICAgXCJjb3VudF82NFwiOiA3LjUsXG4gICAgXCJjb3VudF8zNVwiOiAyMC41XG4gIH0sXG4gIFwiMTk2OVwiOiB7XG4gICAgXCJjb3VudF85NlwiOiA0Ljc1LFxuICAgIFwiY291bnRfNjRcIjogMjQuNSxcbiAgICBcImNvdW50XzM1XCI6IDQ5Ljc1XG4gIH0sXG4gIFwiMTk3MFwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAxLFxuICAgIFwiY291bnRfNjRcIjogNixcbiAgICBcImNvdW50XzM1XCI6IDIwLjVcbiAgfSxcbiAgXCIxOTcxXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDEsXG4gICAgXCJjb3VudF82NFwiOiAxNy4yNSxcbiAgICBcImNvdW50XzM1XCI6IDQ2LjI1XG4gIH0sXG4gIFwiMTk3MlwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAwLFxuICAgIFwiY291bnRfNjRcIjogMi43NSxcbiAgICBcImNvdW50XzM1XCI6IDE3LjVcbiAgfSxcbiAgXCIxOTczXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDAsXG4gICAgXCJjb3VudF82NFwiOiAzLjI1LFxuICAgIFwiY291bnRfMzVcIjogMjAuNVxuICB9LFxuICBcIjE5NzRcIjoge1xuICAgIFwiY291bnRfOTZcIjogMy41LFxuICAgIFwiY291bnRfNjRcIjogMTAuNSxcbiAgICBcImNvdW50XzM1XCI6IDMxLjc1XG4gIH0sXG4gIFwiMTk3NVwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAyLjI1LFxuICAgIFwiY291bnRfNjRcIjogMTEuNSxcbiAgICBcImNvdW50XzM1XCI6IDI1XG4gIH0sXG4gIFwiMTk3NlwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAwLjc1LFxuICAgIFwiY291bnRfNjRcIjogMy43NSxcbiAgICBcImNvdW50XzM1XCI6IDE1LjI1XG4gIH0sXG4gIFwiMTk3N1wiOiB7XG4gICAgXCJjb3VudF85NlwiOiAxLFxuICAgIFwiY291bnRfNjRcIjogNS4yNSxcbiAgICBcImNvdW50XzM1XCI6IDEzLjI1XG4gIH0sXG4gIFwiMTk3OFwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAzLFxuICAgIFwiY291bnRfNjRcIjogOCxcbiAgICBcImNvdW50XzM1XCI6IDIyXG4gIH0sXG4gIFwiMTk3OVwiOiB7XG4gICAgXCJjb3VudF85NlwiOiA0LjI1LFxuICAgIFwiY291bnRfNjRcIjogMTEuNzUsXG4gICAgXCJjb3VudF8zNVwiOiAyOC4yNVxuICB9LFxuICBcIjE5ODBcIjoge1xuICAgIFwiY291bnRfOTZcIjogNi4yNSxcbiAgICBcImNvdW50XzY0XCI6IDkuNSxcbiAgICBcImNvdW50XzM1XCI6IDIyLjI1XG4gIH0sXG4gIFwiMTk4MVwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAyLjI1LFxuICAgIFwiY291bnRfNjRcIjogMTEsXG4gICAgXCJjb3VudF8zNVwiOiAzNlxuICB9LFxuICBcIjE5ODJcIjoge1xuICAgIFwiY291bnRfOTZcIjogMC43NSxcbiAgICBcImNvdW50XzY0XCI6IDQsXG4gICAgXCJjb3VudF8zNVwiOiAxMVxuICB9LFxuICBcIjE5ODNcIjoge1xuICAgIFwiY291bnRfOTZcIjogMC4yNSxcbiAgICBcImNvdW50XzY0XCI6IDIuMjUsXG4gICAgXCJjb3VudF8zNVwiOiAxMS4yNVxuICB9LFxuICBcIjE5ODRcIjoge1xuICAgIFwiY291bnRfOTZcIjogMC43NSxcbiAgICBcImNvdW50XzY0XCI6IDExLjUsXG4gICAgXCJjb3VudF8zNVwiOiAzMlxuICB9LFxuICBcIjE5ODVcIjoge1xuICAgIFwiY291bnRfOTZcIjogNCxcbiAgICBcImNvdW50XzY0XCI6IDE4LjI1LFxuICAgIFwiY291bnRfMzVcIjogNDEuNVxuICB9LFxuICBcIjE5ODZcIjoge1xuICAgIFwiY291bnRfOTZcIjogMCxcbiAgICBcImNvdW50XzY0XCI6IDIuMjUsXG4gICAgXCJjb3VudF8zNVwiOiAxMi43NVxuICB9LFxuICBcIjE5ODdcIjoge1xuICAgIFwiY291bnRfOTZcIjogMC41LFxuICAgIFwiY291bnRfNjRcIjogMi4yNSxcbiAgICBcImNvdW50XzM1XCI6IDEyLjVcbiAgfSxcbiAgXCIxOTg4XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDYuNSxcbiAgICBcImNvdW50XzY0XCI6IDEyLjI1LFxuICAgIFwiY291bnRfMzVcIjogMjguNVxuICB9LFxuICBcIjE5ODlcIjoge1xuICAgIFwiY291bnRfOTZcIjogMy41LFxuICAgIFwiY291bnRfNjRcIjogMTIuNSxcbiAgICBcImNvdW50XzM1XCI6IDI2XG4gIH0sXG4gIFwiMTk5MFwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAwLFxuICAgIFwiY291bnRfNjRcIjogOS4yNSxcbiAgICBcImNvdW50XzM1XCI6IDI1LjVcbiAgfSxcbiAgXCIxOTkxXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDEuMjUsXG4gICAgXCJjb3VudF82NFwiOiA3LjI1LFxuICAgIFwiY291bnRfMzVcIjogMTQuNVxuICB9LFxuICBcIjE5OTJcIjoge1xuICAgIFwiY291bnRfOTZcIjogMy41LFxuICAgIFwiY291bnRfNjRcIjogNSxcbiAgICBcImNvdW50XzM1XCI6IDE3XG4gIH0sXG4gIFwiMTk5M1wiOiB7XG4gICAgXCJjb3VudF85NlwiOiAwLjc1LFxuICAgIFwiY291bnRfNjRcIjogNy41LFxuICAgIFwiY291bnRfMzVcIjogMjAuMjVcbiAgfSxcbiAgXCIxOTk0XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDAsXG4gICAgXCJjb3VudF82NFwiOiAxLFxuICAgIFwiY291bnRfMzVcIjogMTZcbiAgfSxcbiAgXCIxOTk1XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDcuMjUsXG4gICAgXCJjb3VudF82NFwiOiAzNC41LFxuICAgIFwiY291bnRfMzVcIjogNjNcbiAgfSxcbiAgXCIxOTk2XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDkuMjUsXG4gICAgXCJjb3VudF82NFwiOiAyOS41LFxuICAgIFwiY291bnRfMzVcIjogNTBcbiAgfSxcbiAgXCIxOTk3XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDEuNzUsXG4gICAgXCJjb3VudF82NFwiOiA1LjUsXG4gICAgXCJjb3VudF8zNVwiOiAxOFxuICB9LFxuICBcIjE5OThcIjoge1xuICAgIFwiY291bnRfOTZcIjogOCxcbiAgICBcImNvdW50XzY0XCI6IDI3LjUsXG4gICAgXCJjb3VudF8zNVwiOiA0Mi41XG4gIH0sXG4gIFwiMTk5OVwiOiB7XG4gICAgXCJjb3VudF85NlwiOiA3LjUsXG4gICAgXCJjb3VudF82NFwiOiAyNi43NSxcbiAgICBcImNvdW50XzM1XCI6IDQ3XG4gIH0sXG4gIFwiMjAwMFwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAxLjI1LFxuICAgIFwiY291bnRfNjRcIjogMTAsXG4gICAgXCJjb3VudF8zNVwiOiAzMC4yNVxuICB9LFxuICBcIjIwMDFcIjoge1xuICAgIFwiY291bnRfOTZcIjogMy43NSxcbiAgICBcImNvdW50XzY0XCI6IDE1Ljc1LFxuICAgIFwiY291bnRfMzVcIjogNDJcbiAgfSxcbiAgXCIyMDAyXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDMsXG4gICAgXCJjb3VudF82NFwiOiA4Ljc1LFxuICAgIFwiY291bnRfMzVcIjogNDIuMjVcbiAgfSxcbiAgXCIyMDAzXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDcuNSxcbiAgICBcImNvdW50XzY0XCI6IDE0LjUsXG4gICAgXCJjb3VudF8zNVwiOiA0MC41XG4gIH0sXG4gIFwiMjAwNFwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAxNCxcbiAgICBcImNvdW50XzY0XCI6IDI2Ljc1LFxuICAgIFwiY291bnRfMzVcIjogNTEuNVxuICB9LFxuICBcIjIwMDVcIjoge1xuICAgIFwiY291bnRfOTZcIjogMTcuMjUsXG4gICAgXCJjb3VudF82NFwiOiAzNy4yNSxcbiAgICBcImNvdW50XzM1XCI6IDgyLjI1XG4gIH0sXG4gIFwiMjAwNlwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAwLFxuICAgIFwiY291bnRfNjRcIjogMy43NSxcbiAgICBcImNvdW50XzM1XCI6IDIxLjI1XG4gIH0sXG4gIFwiMjAwN1wiOiB7XG4gICAgXCJjb3VudF85NlwiOiA2LFxuICAgIFwiY291bnRfNjRcIjogMTAuNSxcbiAgICBcImNvdW50XzM1XCI6IDI1LjI1XG4gIH0sXG4gIFwiMjAwOFwiOiB7XG4gICAgXCJjb3VudF85NlwiOiA1LjUsXG4gICAgXCJjb3VudF82NFwiOiAyMy4yNSxcbiAgICBcImNvdW50XzM1XCI6IDY0Ljc1XG4gIH0sXG4gIFwiMjAwOVwiOiB7XG4gICAgXCJjb3VudF85NlwiOiAxLjI1LFxuICAgIFwiY291bnRfNjRcIjogNS43NSxcbiAgICBcImNvdW50XzM1XCI6IDEzLjI1XG4gIH0sXG4gIFwiMjAxMFwiOiB7XG4gICAgXCJjb3VudF85NlwiOiA0LjI1LFxuICAgIFwiY291bnRfNjRcIjogMjEsXG4gICAgXCJjb3VudF8zNVwiOiA1MS43NVxuICB9LFxuICBcIjIwMTFcIjoge1xuICAgIFwiY291bnRfOTZcIjogNC41LFxuICAgIFwiY291bnRfNjRcIjogMTkuMjUsXG4gICAgXCJjb3VudF8zNVwiOiA2MFxuICB9LFxuICBcIjIwMTJcIjoge1xuICAgIFwiY291bnRfOTZcIjogMC4yNSxcbiAgICBcImNvdW50XzY0XCI6IDEyLjI1LFxuICAgIFwiY291bnRfMzVcIjogNDhcbiAgfSxcbiAgXCIyMDEzXCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDAsXG4gICAgXCJjb3VudF82NFwiOiAxLjUsXG4gICAgXCJjb3VudF8zNVwiOiAxNFxuICB9LFxuICBcIjIwMTRcIjoge1xuICAgIFwiY291bnRfOTZcIjogMy4yNSxcbiAgICBcImNvdW50XzY0XCI6IDEyLFxuICAgIFwiY291bnRfMzVcIjogMjQuMjVcbiAgfSxcbiAgXCIyMDE1XCI6IHtcbiAgICBcImNvdW50Xzk2XCI6IDMuNSxcbiAgICBcImNvdW50XzY0XCI6IDcuMjUsXG4gICAgXCJjb3VudF8zNVwiOiAxOS43NVxuICB9LFxuICBcIjIwMTZcIjoge1xuICAgIFwiY291bnRfOTZcIjogOC43NSxcbiAgICBcImNvdW50XzY0XCI6IDE2LjI1LFxuICAgIFwiY291bnRfMzVcIjogNDIuNVxuICB9LFxuICBcIjIwMTdcIjoge1xuICAgIFwiY291bnRfOTZcIjogMTIuMjUsXG4gICAgXCJjb3VudF82NFwiOiAzMi4yNSxcbiAgICBcImNvdW50XzM1XCI6IDU5Ljc1XG4gIH0sXG4gIFwiMjAxOFwiOiB7XG4gICAgXCJjb3VudF85NlwiOiA0LFxuICAgIFwiY291bnRfNjRcIjogOSxcbiAgICBcImNvdW50XzM1XCI6IDI0LjI1XG4gIH0sXG4gIFwiMjAxOVwiOiB7XG4gICAgXCJjb3VudF85NlwiOiA2LjI1LFxuICAgIFwiY291bnRfNjRcIjogMTQuMjUsXG4gICAgXCJjb3VudF8zNVwiOiAzOS4yNVxuICB9LFxuICBcIjIwMjBcIjoge1xuICAgIFwiY291bnRfOTZcIjogNS41LFxuICAgIFwiY291bnRfNjRcIjogMjgsXG4gICAgXCJjb3VudF8zNVwiOiA4MVxuICB9XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJ1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gICcuL2RhdGEnXG5pbXBvcnQgeyB0aXRsZSwgZmlsbF9jb2xvcnMsIGxhYmVscyB9IGZyb20gJy4vY29uZmlnJ1xuXG5jb25zdCBNSU5fWUVBUiA9IDE5NTA7XG5jb25zdCBNQVhfWUVBUiA9IDIwMjA7XG5cbmNvbnN0IHBhcnNlWWVhcnMgPSAoZGF0YSkgPT4ge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSlcbiAgY29uc3QgeWVhcnMgPSBrZXlzLm1hcChrID0+IHBhcnNlSW50KGspKVxuICByZXR1cm4geWVhcnNcbn1cblxuY29uc3QgcGFyc2VUcmFjZSA9IChrZXksIGRhdGEsIHllYXJzKSA9PiB7XG4gIGNvbnN0IHRyYWNlID0ge1xuICAgIHg6IHllYXJzLFxuICAgIHk6IFtdLFxuICAgIG1vZGU6ICdub25lJyxcbiAgICBuYW1lOiBsYWJlbHNba2V5XSxcbiAgICBzdGFja2dyb3VwOiAnb25lJyxcbiAgICBmaWxsY29sb3I6IGZpbGxfY29sb3JzW2tleV1cbiAgfVxuICB5ZWFycy5mb3JFYWNoKCh5ZWFyKSA9PiB7XG4gICAgdHJhY2VbJ3knXS5wdXNoKGRhdGFbeWVhcl1ba2V5XSlcbiAgfSlcbiAgcmV0dXJuIHRyYWNlXG59XG5cbmNvbnN0IHllYXJzID0gcGFyc2VZZWFycyhkYXRhKVxuY29uc3QgdHJhY2VfY291bnRfOTYgPSBwYXJzZVRyYWNlKCdjb3VudF85NicsIGRhdGEsIHllYXJzKVxuY29uc3QgdHJhY2VfY291bnRfNjQgPSBwYXJzZVRyYWNlKCdjb3VudF82NCcsIGRhdGEsIHllYXJzKVxuY29uc3QgdHJhY2VfY291bnRfMzUgPSBwYXJzZVRyYWNlKCdjb3VudF8zNScsIGRhdGEsIHllYXJzKVxuXG5jb25zdCBsYXlvdXQgPSB7XG4gIHRpdGxlOiB0aXRsZVxufVxuXG5jb25zdCBhbGxfdHJhY2VzID0gW3RyYWNlX2NvdW50Xzk2LCB0cmFjZV9jb3VudF82NCwgdHJhY2VfY291bnRfMzVdXG5cblBsb3RseS5uZXdQbG90KCdwbG90JywgYWxsX3RyYWNlcywgbGF5b3V0KTtcblxuXG4vKiBTZXR1cCA8c2VsZWN0PiBlbGVtZW50cyAqL1xuXG5sZXQgc3Rvcm1fdHlwZXMgPSB7XG4gICAgJ2NvdW50XzM1Jzoge1xuICAgICAgJ3doZXJlJzogJ1VTQV9XSU5EPDY0IEFORCBVU0FfV0lORD49MzQnLFxuICAgICAgJ2xhYmVsJzogJ05hbWVkIFN0b3JtcydcbiAgICB9LFxuICAgICdjb3VudF82NCc6IHtcbiAgICAgICd3aGVyZSc6ICdVU0FfV0lORD49NjQgQU5EIFVTQV9XSU5EPDk2JyxcbiAgICAgICdsYWJlbCc6ICdIdXJyaWNhbmVzJ1xuICAgIH0sXG4gICAgJ2NvdW50Xzk2Jzoge1xuICAgICAgJ3doZXJlJzogJ1VTQV9XSU5EPj02NCBBTkQgVVNBX1dJTkQ8OTYnLFxuICAgICAgJ2xhYmVsJzogJ01ham9yIEh1cnJpY2FuZXMnXG4gICAgfVxufVxuY29uc3Qgb3B0aW9uX2ZhY3RvcnkgPSBmdW5jdGlvbiAodmFsdWUsIGlubmVySFRNTCkge1xuICAgIHZhciBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHQudmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuICAgIG9wdC5pbm5lckhUTUwgPSBTdHJpbmcoaW5uZXJIVE1MKTtcbiAgICByZXR1cm4gb3B0O1xufVxuXG5jb25zdCBzdG9ybV9zZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Rvcm0tdHlwZS1zZWxlY3QnKVxuZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHN0b3JtX3R5cGVzKSkge1xuICAgIGxldCB2YWx1ZSA9IHN0b3JtX3R5cGVzW2tleV1bJ3doZXJlJ11cbiAgICBsZXQgbGFiZWwgPSBzdG9ybV90eXBlc1trZXldWydsYWJlbCddXG4gICAgc3Rvcm1fc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbl9mYWN0b3J5KHZhbHVlLCBsYWJlbCkpO1xufVxuXG5jb25zdCB5ZWFyX3NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5ZWFyLXNlbGVjdCcpXG5mb3IgKHZhciBpID0gTUlOX1lFQVI7IGk8PU1BWF9ZRUFSOyBpKyspe1xuICAgIHllYXJfc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbl9mYWN0b3J5KCdZRUFSPScrU3RyaW5nKGkpLCBpKSlcbn1cblxuLyogTWFwIHNldHVwICovXG5cbmxldCBtYXAgPSBMLm1hcCgnbWFwJykuc2V0VmlldyhbMzcuODM3LCAtMTAwLjQ3OV0sIDUpO1xuXG5sZXQgYmFzZW1hcCA9IEwuZXNyaS5iYXNlbWFwTGF5ZXIoJ1N0cmVldHMnKS5hZGRUbyhtYXApO1xuXG5sZXQgc3Rvcm1fd2hlcmUgPSBzdG9ybV90eXBlc1snY291bnRfMzUnXVsnd2hlcmUnXVxubGV0IHllYXJfd2hlcmUgPSAnWUVBUj0xOTUwJ1xuXG5sZXQgd2hlcmVfZmFjdG9yeSA9ICh3MSwgdzIpID0+IHcxICsgJyBBTkQgJyArIHcyXG5cbi8vIGR1bW15IGZlYXR1cmUgZm9yIGxvZ2dpbmdcbmxldCBmO1xuXG5sZXQgbGF5ZXIgPSBMLmVzcmkuZmVhdHVyZUxheWVyKHtcbiAgdXJsOiAnaHR0cHM6Ly9zZXJ2aWNlczIuYXJjZ2lzLmNvbS9GaWFQQTRnYTBpUUtkdXYzL0FyY0dJUy9yZXN0L3NlcnZpY2VzL0lCVHJBQ1NfQUxMX2xpc3RfdjA0cjAwX2xpbmVzXzEvRmVhdHVyZVNlcnZlci8wJyxcbiAgc3R5bGU6IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgaWYgKCFmKSB7IGYgPSBmZWF0dXJlOyAgY29uc29sZS5sb2coZmVhdHVyZSkgfVxuICAgIHZhciBjO1xuICAgIGxldCBwcm9wID0gZmVhdHVyZS5wcm9wZXJ0aWVzLlVTQV9XSU5EXG4gICAgaWYgKHByb3AgPCA2NCAmJiBwcm9wID49IDM0KSB7IGMgPSAncmVkJyB9XG4gICAgaWYgKHByb3AgPj0gNjQgJiYgcHJvcCA8IDk2KSB7IGMgPSAnZ3JlZW4nIH1cbiAgICBpZiAocHJvcCA+PSA5NikgeyBjID0gJ2JsdWUnIH07XG4gICAgaWYgKCFjKSB7IGMgPSAnd2hpdGUnIH1cbiAgICByZXR1cm4geyBjb2xvcjogYywgb3BhY2l0eTogLjksIHdlaWdodDogNSB9O1xuICB9LFxuICB3aGVyZTogd2hlcmVfZmFjdG9yeShzdG9ybV93aGVyZSwgeWVhcl93aGVyZSlcbn0pLmFkZFRvKG1hcCk7XG5cbnllYXJfc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgeWVhcl93aGVyZSA9IHllYXJfc2VsZWN0LnZhbHVlXG4gIGxldCBuZXdfd2hlcmUgPSB3aGVyZV9mYWN0b3J5KHN0b3JtX3doZXJlLCB5ZWFyX3doZXJlKVxuICBjb25zb2xlLmxvZyhuZXdfd2hlcmUpXG4gIGxheWVyLnNldFdoZXJlKG5ld193aGVyZSk7XG59KTtcblxuc3Rvcm1fc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgc3Rvcm1fd2hlcmUgPSBzdG9ybV9zZWxlY3QudmFsdWVcbiAgbGV0IG5ld193aGVyZSA9IHdoZXJlX2ZhY3Rvcnkoc3Rvcm1fd2hlcmUsIHllYXJfd2hlcmUpXG4gIGNvbnNvbGUubG9nKG5ld193aGVyZSlcbiAgbGF5ZXIuc2V0V2hlcmUobmV3X3doZXJlKVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=