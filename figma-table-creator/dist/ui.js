/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ui.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/ui.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/ui.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\r\n  font: 12px sans-serif;\r\n  margin: 10px 15px;\r\n  text-align: center;\r\n}\r\np {\r\n  margin: 0px;\r\n  padding: 5px 0px;\r\n  text-align: left;\r\n}\r\n\r\nh4 {\r\n  margin: 0px;\r\n  padding: 5px 0px;\r\n  text-align: left;\r\n}\r\n\r\n/* --- Buttons --- */\r\n.btn-standalone button {\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  background: white;\r\n  color: black;\r\n  border: none;\r\n  padding: 8px 40px;\r\n  margin: 5px 0px;\r\n  box-shadow: inset 0 0 0 1px black;\r\n  outline: none;\r\n}\r\n.btn-standalone button:focus {\r\n  box-shadow: inset 0 0 0 2px #18a0fb;\r\n}\r\n#create {\r\n  box-shadow: none;\r\n  background: #00a9e0;\r\n  color: white;\r\n}\r\n#create:focus {\r\n  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n/* --- Input --- */\r\ninput[type=\"text\"] {\r\n  width: 75%;\r\n  border: none;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  padding: 5px;\r\n  text-align: left;\r\n  font-weight: bold;\r\n  float: left;\r\n}\r\ninput[type=\"checkbox\"] {\r\n  width: 100%;\r\n  border: none;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  padding: 5px;\r\n  text-align: left;\r\n  font-weight: bold;\r\n}\r\ninput:hover {\r\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);\r\n}\r\ninput:focus {\r\n  box-shadow: inset 0 0 0 2px #18a0fb;\r\n}\r\n\r\n/* --- Grid --- */\r\n.row {\r\n  padding: 2px 3px;\r\n}\r\n.column {\r\n  float: left;\r\n  vertical-align: middle;\r\n  width: 100%;\r\n}\r\n.column .zero-padding {\r\n  padding: 0 !important;\r\n}\r\n.half {\r\n  width: 50% !important;\r\n}\r\n.two-thirds {\r\n  width: 66.7% !important;\r\n}\r\n.third {\r\n  width: 33.3% !important;\r\n}\r\n.one-sixth {\r\n  width: 16.7% !important;\r\n}\r\n.three-fourths {\r\n  width: 75% !important;\r\n}\r\n.quarter {\r\n  width: 25% !important;\r\n}\r\n.label {\r\n  width: 65% !important;\r\n}\r\n.input-column {\r\n  width: 35% !important;\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n/* --- Checkbox --- */\r\n/* The container */\r\n.container {\r\n  padding: 3px 0px;\r\n  display: block;\r\n  position: relative;\r\n  cursor: pointer;\r\n  width: 15px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n/* Hide the browser's default checkbox */\r\n.container input {\r\n  vertical-align: middle;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n.toggle-display {\r\n  display: none;\r\n}\r\n\r\n.toggle-display.is-visible {\r\n  display: block;\r\n}\r\n\r\n/* --- Custom Radio Button --- */\r\n/* Based on Codepen by Sal */\r\n.options-radio-buttons-wrapper {\r\n  clear: both;\r\n  display: inline-block;\r\n}\r\n.options-radio-button {\r\n  position: absolute;\r\n  left: -9999em;\r\n  top: -9999em;\r\n}\r\n.options-radio-button + label {\r\n  float: left;\r\n  padding: 0.5em 1em;\r\n  cursor: pointer;\r\n  border: 1px solid #28608f;\r\n  margin-right: -1px;\r\n  color: #fff;\r\n  background-color: #00a9e0;\r\n}\r\n.options-radio-button + label:first-of-type {\r\n  border-radius: 0.7em 0 0 0.7em;\r\n}\r\n.options-radio-button + label:last-of-type {\r\n  border-radius: 0 0.7em 0.7em 0;\r\n}\r\n.options-radio-button:checked + label {\r\n  background-color: #4b86b4;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    for (var i = 0; i < modules.length; i++) {
      var item = [].concat(modules[i]);

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

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = {};

function modulesToDom(moduleId, list, options) {
  for (var i = 0; i < list.length; i++) {
    var part = {
      css: list[i][1],
      media: list[i][2],
      sourceMap: list[i][3]
    };

    if (stylesInDom[moduleId][i]) {
      stylesInDom[moduleId][i](part);
    } else {
      stylesInDom[moduleId].push(addStyle(part, options));
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (moduleId, list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  moduleId = options.base ? moduleId + options.base : moduleId;
  list = list || [];

  if (!stylesInDom[moduleId]) {
    stylesInDom[moduleId] = [];
  }

  modulesToDom(moduleId, list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    if (!stylesInDom[moduleId]) {
      stylesInDom[moduleId] = [];
    }

    modulesToDom(moduleId, newList, options);

    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {
      stylesInDom[moduleId][j]();
    }

    stylesInDom[moduleId].length = newList.length;

    if (stylesInDom[moduleId].length === 0) {
      delete stylesInDom[moduleId];
    }
  };
};

/***/ }),

/***/ "./src/ui.css":
/*!********************!*\
  !*** ./src/ui.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./ui.css */ "./node_modules/css-loader/dist/cjs.js!./src/ui.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/ui.ts":
/*!*******************!*\
  !*** ./src/ui.ts ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.css */ "./src/ui.css");
/* harmony import */ var _ui_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ui_css__WEBPACK_IMPORTED_MODULE_0__);

/* State Changes Variable */
let isShiftHeld = false;
/* Run after onLoad */
window.addEventListener("load", function () {
    document.getElementById("columns").select();
});
/* Toggle HTML Rendering */
function toggleEditable(htmlTagId, isPrerequisiteSelected, defaultValue) {
    const htmlTagById = document.getElementById(htmlTagId);
    if (htmlTagById.checked) {
        htmlTagById.checked = false;
    }
    if (isPrerequisiteSelected) {
        htmlTagById.disabled = false;
        htmlTagById.value = defaultValue;
    }
    else {
        htmlTagById.disabled = true;
        htmlTagById.value = "";
    }
    return null;
}
// Detect radio buttons state change
document.getElementById("count-and-table-size").onchange = () => {
    //TODO
};
// Detect header checkbox state change
document.getElementById("header").onchange = () => {
    toggleEditable("floatingFilter", document.getElementById("header").checked, "");
    toggleEditable("headerHeight", document.getElementById("header").checked, "60");
    toggleEditable("floatingFilterHeight", document.getElementById("floatingFilter").checked, "");
};
// Detect floating filter checkbox state change
document.getElementById("floatingFilter").onchange = () => {
    toggleEditable("floatingFilterHeight", document.getElementById("floatingFilter").checked, "30");
};
// Detect striped/alternate background checkbox state change
document.getElementById("alternateBackgrounds").onchange = () => {
    toggleEditable("stripedBackgroundColor", document.getElementById("alternateBackgrounds")
        .checked, "#FFFFFF");
};
// Detect borders checkbox state change
document.getElementById("borders").onchange = () => {
    toggleEditable("borderColor", document.getElementById("borders").checked, "#C7C7C7");
};
/* Keyboard Navigation */
document.onkeydown = keyDown => {
    let activeElement = document.activeElement;
    if (keyDown.key === "Shift") {
        isShiftHeld = true;
    }
    else if (keyDown.key.match(/Arrow\w+/g)) {
        if (activeElement.type === "text") {
            let value = parseInt(activeElement.value);
            if (isShiftHeld === false) {
                switch (keyDown.key) {
                    case "ArrowUp":
                        value += 1;
                        break;
                    case "ArrowDown":
                        value -= 1;
                        break;
                }
            }
            else {
                switch (keyDown.key) {
                    case "ArrowUp":
                        value += 10;
                        break;
                    case "ArrowDown":
                        value -= 10;
                        break;
                }
            }
            document.activeElement.value = value.toString();
        }
    }
    else if (keyDown.key === "Tab") {
        if (activeElement.id === "cancel" && isShiftHeld === false) {
            document.getElementById("columns").focus();
            keyDown.preventDefault();
        }
        else if (activeElement.id === "columns" && isShiftHeld === true) {
            document.getElementById("cancel").focus();
            keyDown.preventDefault();
        }
    }
    else if (keyDown.key === "Enter") {
        if (activeElement.type === "checkbox") {
            activeElement.checked = !activeElement.checked;
            if (activeElement.id === "header") {
                toggleEditable("floatingFilter", activeElement.checked, "");
                toggleEditable("headerHeight", activeElement.checked, "60");
            }
            else if (activeElement.id === "floatingFilter") {
                toggleEditable("floatingFilterHeight", activeElement.checked, "30");
            }
            else if (activeElement.id === "alternateBackgrounds") {
                toggleEditable("stripedBackgroundColor", activeElement.checked, "#FFFFFF");
            }
            else if (activeElement.id === "borders") {
                toggleEditable("borderColor", activeElement.checked, "#C7C7C7");
            }
        }
    }
};
document.onkeyup = keyUp => {
    if (keyUp.key === "Shift") {
        isShiftHeld = false;
    }
};
/* Create and Cancel Button Actions */
document.getElementById("create").onclick = () => {
    const columnsInput = document.getElementById("columns");
    const columnsWidthInput = document.getElementById("columnWidth");
    const rowsInput = document.getElementById("rows");
    const rowHeightInput = document.getElementById("rowHeight");
    const bordersInput = document.getElementById("borders");
    const alternateBackgroundsInput = document.getElementById("alternateBackgrounds");
    const headerInput = document.getElementById("header");
    const headerHeightInput = document.getElementById("headerHeight");
    const floatingFilterInput = document.getElementById("floatingFilter");
    const floatingFilterHeightInput = document.getElementById("floatingFilterHeight");
    const primarybackgroundColorInput = document.getElementById("primarybackgroundColor");
    const stripedbackgroundColorInput = document.getElementById("stripedBackgroundColor");
    const borderColorInput = document.getElementById("borderColor");
    const columns = parseInt(columnsInput.value, 10);
    const columnWidth = parseInt(columnsWidthInput.value, 10);
    const rows = parseInt(rowsInput.value, 10);
    const rowHeight = parseInt(rowHeightInput.value, 10);
    const borders = bordersInput.checked;
    const alternateBackgrounds = alternateBackgroundsInput.checked;
    const header = headerInput.checked;
    const headerHeight = parseInt(headerHeightInput.value, 10);
    const floatingFilters = floatingFilterInput.checked;
    const floatingFilterHeight = parseInt(floatingFilterHeightInput.value, 10);
    const primarybackgroundColor = primarybackgroundColorInput.value;
    const stripedbackgroundColor = stripedbackgroundColorInput.value;
    const borderColor = borderColorInput.value;
    parent.postMessage({
        pluginMessage: {
            type: "create-table",
            columns: columns,
            columnWidth: columnWidth,
            rows: rows,
            rowHeight: rowHeight,
            borders: borders,
            alternateBackgrounds: alternateBackgrounds,
            header: header,
            headerHeight: headerHeight,
            floatingFilter: floatingFilters,
            floatingFilterHeight: floatingFilterHeight,
            primarybackgroundColor: primarybackgroundColor,
            stripedbackgroundColor: stripedbackgroundColor,
            borderColor: borderColor
        }
    }, "*");
};
document.getElementById("cancel").onclick = () => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkuY3NzP2M3N2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLFNBQVMsNEJBQTRCLHdCQUF3Qix5QkFBeUIsS0FBSyxPQUFPLGtCQUFrQix1QkFB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bW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy91aS50c1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIGZvbnQ6IDEycHggc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbjogMTBweCAxNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5wIHtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbiAgcGFkZGluZzogNXB4IDBweDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbmg0IHtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbiAgcGFkZGluZzogNXB4IDBweDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLSBCdXR0b25zIC0tLSAqL1xcclxcbi5idG4tc3RhbmRhbG9uZSBidXR0b24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA4cHggNDBweDtcXHJcXG4gIG1hcmdpbjogNXB4IDBweDtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCBibGFjaztcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbi5idG4tc3RhbmRhbG9uZSBidXR0b246Zm9jdXMge1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICMxOGEwZmI7XFxyXFxufVxcclxcbiNjcmVhdGUge1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6ICMwMGE5ZTA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbiNjcmVhdGU6Zm9jdXMge1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tIElucHV0IC0tLSAqL1xcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxyXFxuICB3aWR0aDogNzUlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuaW5wdXQ6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuaW5wdXQ6Zm9jdXMge1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICMxOGEwZmI7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLSBHcmlkIC0tLSAqL1xcclxcbi5yb3cge1xcclxcbiAgcGFkZGluZzogMnB4IDNweDtcXHJcXG59XFxyXFxuLmNvbHVtbiB7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmNvbHVtbiAuemVyby1wYWRkaW5nIHtcXHJcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLmhhbGYge1xcclxcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4udHdvLXRoaXJkcyB7XFxyXFxuICB3aWR0aDogNjYuNyUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLnRoaXJkIHtcXHJcXG4gIHdpZHRoOiAzMy4zJSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4ub25lLXNpeHRoIHtcXHJcXG4gIHdpZHRoOiAxNi43JSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4udGhyZWUtZm91cnRocyB7XFxyXFxuICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi5xdWFydGVyIHtcXHJcXG4gIHdpZHRoOiAyNSUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLmxhYmVsIHtcXHJcXG4gIHdpZHRoOiA2NSUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLmlucHV0LWNvbHVtbiB7XFxyXFxuICB3aWR0aDogMzUlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xcclxcbi5yb3c6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gIGNsZWFyOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0gQ2hlY2tib3ggLS0tICovXFxyXFxuLyogVGhlIGNvbnRhaW5lciAqL1xcclxcbi5jb250YWluZXIge1xcclxcbiAgcGFkZGluZzogM3B4IDBweDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG4vKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xcclxcbi5jb250YWluZXIgaW5wdXQge1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnRvZ2dsZS1kaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2dnbGUtZGlzcGxheS5pcy12aXNpYmxlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0gQ3VzdG9tIFJhZGlvIEJ1dHRvbiAtLS0gKi9cXHJcXG4vKiBCYXNlZCBvbiBDb2RlcGVuIGJ5IFNhbCAqL1xcclxcbi5vcHRpb25zLXJhZGlvLWJ1dHRvbnMtd3JhcHBlciB7XFxyXFxuICBjbGVhcjogYm90aDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuLm9wdGlvbnMtcmFkaW8tYnV0dG9uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IC05OTk5ZW07XFxyXFxuICB0b3A6IC05OTk5ZW07XFxyXFxufVxcclxcbi5vcHRpb25zLXJhZGlvLWJ1dHRvbiArIGxhYmVsIHtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzI4NjA4ZjtcXHJcXG4gIG1hcmdpbi1yaWdodDogLTFweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTllMDtcXHJcXG59XFxyXFxuLm9wdGlvbnMtcmFkaW8tYnV0dG9uICsgbGFiZWw6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjdlbSAwIDAgMC43ZW07XFxyXFxufVxcclxcbi5vcHRpb25zLXJhZGlvLWJ1dHRvbiArIGxhYmVsOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAuN2VtIDAuN2VtIDA7XFxyXFxufVxcclxcbi5vcHRpb25zLXJhZGlvLWJ1dHRvbjpjaGVja2VkICsgbGFiZWwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiODZiNDtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbaV0pO1xuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKG1vZHVsZUlkLCBsaXN0LCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBsaXN0W2ldWzFdLFxuICAgICAgbWVkaWE6IGxpc3RbaV1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGxpc3RbaV1bM11cbiAgICB9O1xuXG4gICAgaWYgKHN0eWxlc0luRG9tW21vZHVsZUlkXVtpXSkge1xuICAgICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdW2ldKHBhcnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0ucHVzaChhZGRTdHlsZShwYXJ0LCBvcHRpb25zKSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobW9kdWxlSWQsIGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbW9kdWxlSWQgPSBvcHRpb25zLmJhc2UgPyBtb2R1bGVJZCArIG9wdGlvbnMuYmFzZSA6IG1vZHVsZUlkO1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcblxuICBpZiAoIXN0eWxlc0luRG9tW21vZHVsZUlkXSkge1xuICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXSA9IFtdO1xuICB9XG5cbiAgbW9kdWxlc1RvRG9tKG1vZHVsZUlkLCBsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFzdHlsZXNJbkRvbVttb2R1bGVJZF0pIHtcbiAgICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXSA9IFtdO1xuICAgIH1cblxuICAgIG1vZHVsZXNUb0RvbShtb2R1bGVJZCwgbmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBqID0gbmV3TGlzdC5sZW5ndGg7IGogPCBzdHlsZXNJbkRvbVttb2R1bGVJZF0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXVtqXSgpO1xuICAgIH1cblxuICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXS5sZW5ndGggPSBuZXdMaXN0Lmxlbmd0aDtcblxuICAgIGlmIChzdHlsZXNJbkRvbVttb2R1bGVJZF0ubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgc3R5bGVzSW5Eb21bbW9kdWxlSWRdO1xuICAgIH1cbiAgfTtcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3VpLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShtb2R1bGUuaWQsIGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCBcIi4vdWkuY3NzXCI7XHJcbi8qIFN0YXRlIENoYW5nZXMgVmFyaWFibGUgKi9cclxubGV0IGlzU2hpZnRIZWxkID0gZmFsc2U7XHJcbi8qIFJ1biBhZnRlciBvbkxvYWQgKi9cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sdW1uc1wiKS5zZWxlY3QoKTtcclxufSk7XHJcbi8qIFRvZ2dsZSBIVE1MIFJlbmRlcmluZyAqL1xyXG5mdW5jdGlvbiB0b2dnbGVFZGl0YWJsZShodG1sVGFnSWQsIGlzUHJlcmVxdWlzaXRlU2VsZWN0ZWQsIGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgY29uc3QgaHRtbFRhZ0J5SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChodG1sVGFnSWQpO1xyXG4gICAgaWYgKGh0bWxUYWdCeUlkLmNoZWNrZWQpIHtcclxuICAgICAgICBodG1sVGFnQnlJZC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNQcmVyZXF1aXNpdGVTZWxlY3RlZCkge1xyXG4gICAgICAgIGh0bWxUYWdCeUlkLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgaHRtbFRhZ0J5SWQudmFsdWUgPSBkZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBodG1sVGFnQnlJZC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgaHRtbFRhZ0J5SWQudmFsdWUgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuLy8gRGV0ZWN0IHJhZGlvIGJ1dHRvbnMgc3RhdGUgY2hhbmdlXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnQtYW5kLXRhYmxlLXNpemVcIikub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAvL1RPRE9cclxufTtcclxuLy8gRGV0ZWN0IGhlYWRlciBjaGVja2JveCBzdGF0ZSBjaGFuZ2VcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIikub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICB0b2dnbGVFZGl0YWJsZShcImZsb2F0aW5nRmlsdGVyXCIsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpLmNoZWNrZWQsIFwiXCIpO1xyXG4gICAgdG9nZ2xlRWRpdGFibGUoXCJoZWFkZXJIZWlnaHRcIiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIikuY2hlY2tlZCwgXCI2MFwiKTtcclxuICAgIHRvZ2dsZUVkaXRhYmxlKFwiZmxvYXRpbmdGaWx0ZXJIZWlnaHRcIiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmbG9hdGluZ0ZpbHRlclwiKS5jaGVja2VkLCBcIlwiKTtcclxufTtcclxuLy8gRGV0ZWN0IGZsb2F0aW5nIGZpbHRlciBjaGVja2JveCBzdGF0ZSBjaGFuZ2VcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmbG9hdGluZ0ZpbHRlclwiKS5vbmNoYW5nZSA9ICgpID0+IHtcclxuICAgIHRvZ2dsZUVkaXRhYmxlKFwiZmxvYXRpbmdGaWx0ZXJIZWlnaHRcIiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmbG9hdGluZ0ZpbHRlclwiKS5jaGVja2VkLCBcIjMwXCIpO1xyXG59O1xyXG4vLyBEZXRlY3Qgc3RyaXBlZC9hbHRlcm5hdGUgYmFja2dyb3VuZCBjaGVja2JveCBzdGF0ZSBjaGFuZ2VcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbHRlcm5hdGVCYWNrZ3JvdW5kc1wiKS5vbmNoYW5nZSA9ICgpID0+IHtcclxuICAgIHRvZ2dsZUVkaXRhYmxlKFwic3RyaXBlZEJhY2tncm91bmRDb2xvclwiLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsdGVybmF0ZUJhY2tncm91bmRzXCIpXHJcbiAgICAgICAgLmNoZWNrZWQsIFwiI0ZGRkZGRlwiKTtcclxufTtcclxuLy8gRGV0ZWN0IGJvcmRlcnMgY2hlY2tib3ggc3RhdGUgY2hhbmdlXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9yZGVyc1wiKS5vbmNoYW5nZSA9ICgpID0+IHtcclxuICAgIHRvZ2dsZUVkaXRhYmxlKFwiYm9yZGVyQ29sb3JcIiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3JkZXJzXCIpLmNoZWNrZWQsIFwiI0M3QzdDN1wiKTtcclxufTtcclxuLyogS2V5Ym9hcmQgTmF2aWdhdGlvbiAqL1xyXG5kb2N1bWVudC5vbmtleWRvd24gPSBrZXlEb3duID0+IHtcclxuICAgIGxldCBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuICAgIGlmIChrZXlEb3duLmtleSA9PT0gXCJTaGlmdFwiKSB7XHJcbiAgICAgICAgaXNTaGlmdEhlbGQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoa2V5RG93bi5rZXkubWF0Y2goL0Fycm93XFx3Ky9nKSkge1xyXG4gICAgICAgIGlmIChhY3RpdmVFbGVtZW50LnR5cGUgPT09IFwidGV4dFwiKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlSW50KGFjdGl2ZUVsZW1lbnQudmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoaXNTaGlmdEhlbGQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGtleURvd24ua2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAtPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5RG93bi5rZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAtPSAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoa2V5RG93bi5rZXkgPT09IFwiVGFiXCIpIHtcclxuICAgICAgICBpZiAoYWN0aXZlRWxlbWVudC5pZCA9PT0gXCJjYW5jZWxcIiAmJiBpc1NoaWZ0SGVsZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2x1bW5zXCIpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIGtleURvd24ucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYWN0aXZlRWxlbWVudC5pZCA9PT0gXCJjb2x1bW5zXCIgJiYgaXNTaGlmdEhlbGQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxcIikuZm9jdXMoKTtcclxuICAgICAgICAgICAga2V5RG93bi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGtleURvd24ua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICBpZiAoYWN0aXZlRWxlbWVudC50eXBlID09PSBcImNoZWNrYm94XCIpIHtcclxuICAgICAgICAgICAgYWN0aXZlRWxlbWVudC5jaGVja2VkID0gIWFjdGl2ZUVsZW1lbnQuY2hlY2tlZDtcclxuICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQuaWQgPT09IFwiaGVhZGVyXCIpIHtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwiZmxvYXRpbmdGaWx0ZXJcIiwgYWN0aXZlRWxlbWVudC5jaGVja2VkLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwiaGVhZGVySGVpZ2h0XCIsIGFjdGl2ZUVsZW1lbnQuY2hlY2tlZCwgXCI2MFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChhY3RpdmVFbGVtZW50LmlkID09PSBcImZsb2F0aW5nRmlsdGVyXCIpIHtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwiZmxvYXRpbmdGaWx0ZXJIZWlnaHRcIiwgYWN0aXZlRWxlbWVudC5jaGVja2VkLCBcIjMwXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGFjdGl2ZUVsZW1lbnQuaWQgPT09IFwiYWx0ZXJuYXRlQmFja2dyb3VuZHNcIikge1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJzdHJpcGVkQmFja2dyb3VuZENvbG9yXCIsIGFjdGl2ZUVsZW1lbnQuY2hlY2tlZCwgXCIjRkZGRkZGXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGFjdGl2ZUVsZW1lbnQuaWQgPT09IFwiYm9yZGVyc1wiKSB7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVFZGl0YWJsZShcImJvcmRlckNvbG9yXCIsIGFjdGl2ZUVsZW1lbnQuY2hlY2tlZCwgXCIjQzdDN0M3XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5kb2N1bWVudC5vbmtleXVwID0ga2V5VXAgPT4ge1xyXG4gICAgaWYgKGtleVVwLmtleSA9PT0gXCJTaGlmdFwiKSB7XHJcbiAgICAgICAgaXNTaGlmdEhlbGQgPSBmYWxzZTtcclxuICAgIH1cclxufTtcclxuLyogQ3JlYXRlIGFuZCBDYW5jZWwgQnV0dG9uIEFjdGlvbnMgKi9cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVcIikub25jbGljayA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbHVtbnNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sdW1uc1wiKTtcclxuICAgIGNvbnN0IGNvbHVtbnNXaWR0aElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2x1bW5XaWR0aFwiKTtcclxuICAgIGNvbnN0IHJvd3NJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm93c1wiKTtcclxuICAgIGNvbnN0IHJvd0hlaWdodElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3dIZWlnaHRcIik7XHJcbiAgICBjb25zdCBib3JkZXJzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvcmRlcnNcIik7XHJcbiAgICBjb25zdCBhbHRlcm5hdGVCYWNrZ3JvdW5kc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbHRlcm5hdGVCYWNrZ3JvdW5kc1wiKTtcclxuICAgIGNvbnN0IGhlYWRlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIik7XHJcbiAgICBjb25zdCBoZWFkZXJIZWlnaHRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVySGVpZ2h0XCIpO1xyXG4gICAgY29uc3QgZmxvYXRpbmdGaWx0ZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmxvYXRpbmdGaWx0ZXJcIik7XHJcbiAgICBjb25zdCBmbG9hdGluZ0ZpbHRlckhlaWdodElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmbG9hdGluZ0ZpbHRlckhlaWdodFwiKTtcclxuICAgIGNvbnN0IHByaW1hcnliYWNrZ3JvdW5kQ29sb3JJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpbWFyeWJhY2tncm91bmRDb2xvclwiKTtcclxuICAgIGNvbnN0IHN0cmlwZWRiYWNrZ3JvdW5kQ29sb3JJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RyaXBlZEJhY2tncm91bmRDb2xvclwiKTtcclxuICAgIGNvbnN0IGJvcmRlckNvbG9ySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvcmRlckNvbG9yXCIpO1xyXG4gICAgY29uc3QgY29sdW1ucyA9IHBhcnNlSW50KGNvbHVtbnNJbnB1dC52YWx1ZSwgMTApO1xyXG4gICAgY29uc3QgY29sdW1uV2lkdGggPSBwYXJzZUludChjb2x1bW5zV2lkdGhJbnB1dC52YWx1ZSwgMTApO1xyXG4gICAgY29uc3Qgcm93cyA9IHBhcnNlSW50KHJvd3NJbnB1dC52YWx1ZSwgMTApO1xyXG4gICAgY29uc3Qgcm93SGVpZ2h0ID0gcGFyc2VJbnQocm93SGVpZ2h0SW5wdXQudmFsdWUsIDEwKTtcclxuICAgIGNvbnN0IGJvcmRlcnMgPSBib3JkZXJzSW5wdXQuY2hlY2tlZDtcclxuICAgIGNvbnN0IGFsdGVybmF0ZUJhY2tncm91bmRzID0gYWx0ZXJuYXRlQmFja2dyb3VuZHNJbnB1dC5jaGVja2VkO1xyXG4gICAgY29uc3QgaGVhZGVyID0gaGVhZGVySW5wdXQuY2hlY2tlZDtcclxuICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IHBhcnNlSW50KGhlYWRlckhlaWdodElucHV0LnZhbHVlLCAxMCk7XHJcbiAgICBjb25zdCBmbG9hdGluZ0ZpbHRlcnMgPSBmbG9hdGluZ0ZpbHRlcklucHV0LmNoZWNrZWQ7XHJcbiAgICBjb25zdCBmbG9hdGluZ0ZpbHRlckhlaWdodCA9IHBhcnNlSW50KGZsb2F0aW5nRmlsdGVySGVpZ2h0SW5wdXQudmFsdWUsIDEwKTtcclxuICAgIGNvbnN0IHByaW1hcnliYWNrZ3JvdW5kQ29sb3IgPSBwcmltYXJ5YmFja2dyb3VuZENvbG9ySW5wdXQudmFsdWU7XHJcbiAgICBjb25zdCBzdHJpcGVkYmFja2dyb3VuZENvbG9yID0gc3RyaXBlZGJhY2tncm91bmRDb2xvcklucHV0LnZhbHVlO1xyXG4gICAgY29uc3QgYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvcklucHV0LnZhbHVlO1xyXG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHtcclxuICAgICAgICBwbHVnaW5NZXNzYWdlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiY3JlYXRlLXRhYmxlXCIsXHJcbiAgICAgICAgICAgIGNvbHVtbnM6IGNvbHVtbnMsXHJcbiAgICAgICAgICAgIGNvbHVtbldpZHRoOiBjb2x1bW5XaWR0aCxcclxuICAgICAgICAgICAgcm93czogcm93cyxcclxuICAgICAgICAgICAgcm93SGVpZ2h0OiByb3dIZWlnaHQsXHJcbiAgICAgICAgICAgIGJvcmRlcnM6IGJvcmRlcnMsXHJcbiAgICAgICAgICAgIGFsdGVybmF0ZUJhY2tncm91bmRzOiBhbHRlcm5hdGVCYWNrZ3JvdW5kcyxcclxuICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXIsXHJcbiAgICAgICAgICAgIGhlYWRlckhlaWdodDogaGVhZGVySGVpZ2h0LFxyXG4gICAgICAgICAgICBmbG9hdGluZ0ZpbHRlcjogZmxvYXRpbmdGaWx0ZXJzLFxyXG4gICAgICAgICAgICBmbG9hdGluZ0ZpbHRlckhlaWdodDogZmxvYXRpbmdGaWx0ZXJIZWlnaHQsXHJcbiAgICAgICAgICAgIHByaW1hcnliYWNrZ3JvdW5kQ29sb3I6IHByaW1hcnliYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgICAgIHN0cmlwZWRiYWNrZ3JvdW5kQ29sb3I6IHN0cmlwZWRiYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBib3JkZXJDb2xvclxyXG4gICAgICAgIH1cclxuICAgIH0sIFwiKlwiKTtcclxufTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxcIikub25jbGljayA9ICgpID0+IHtcclxuICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogXCJjYW5jZWxcIiB9IH0sIFwiKlwiKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==