var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./AddressValidator/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./AddressValidator/ExperianGlobalIntuitive.ts":
/*!*****************************************************!*\
  !*** ./AddressValidator/ExperianGlobalIntuitive.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n\nvar __generator = this && this.__generator || function (thisArg, body) {\n  var _ = {\n    label: 0,\n    sent: function sent() {\n      if (t[0] & 1) throw t[1];\n      return t[1];\n    },\n    trys: [],\n    ops: []\n  },\n      f,\n      y,\n      t,\n      g;\n  return g = {\n    next: verb(0),\n    \"throw\": verb(1),\n    \"return\": verb(2)\n  }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function () {\n    return this;\n  }), g;\n\n  function verb(n) {\n    return function (v) {\n      return step([n, v]);\n    };\n  }\n\n  function step(op) {\n    if (f) throw new TypeError(\"Generator is already executing.\");\n\n    while (_) try {\n      if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n      if (y = 0, t) op = [op[0] & 2, t.value];\n\n      switch (op[0]) {\n        case 0:\n        case 1:\n          t = op;\n          break;\n\n        case 4:\n          _.label++;\n          return {\n            value: op[1],\n            done: false\n          };\n\n        case 5:\n          _.label++;\n          y = op[1];\n          op = [0];\n          continue;\n\n        case 7:\n          op = _.ops.pop();\n\n          _.trys.pop();\n\n          continue;\n\n        default:\n          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {\n            _ = 0;\n            continue;\n          }\n\n          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {\n            _.label = op[1];\n            break;\n          }\n\n          if (op[0] === 6 && _.label < t[1]) {\n            _.label = t[1];\n            t = op;\n            break;\n          }\n\n          if (t && _.label < t[2]) {\n            _.label = t[2];\n\n            _.ops.push(op);\n\n            break;\n          }\n\n          if (t[2]) _.ops.pop();\n\n          _.trys.pop();\n\n          continue;\n      }\n\n      op = body.call(thisArg, _);\n    } catch (e) {\n      op = [6, e];\n      y = 0;\n    } finally {\n      f = t = 0;\n    }\n\n    if (op[0] & 5) throw op[1];\n    return {\n      value: op[0] ? op[1] : void 0,\n      done: true\n    };\n  }\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/**\r\n * Country ISO codes\r\n */\n\nvar ExperianCountry;\n\n(function (ExperianCountry) {\n  ExperianCountry[\"Australia\"] = \"AUS\";\n  ExperianCountry[\"NewZealand\"] = \"NZL\";\n  ExperianCountry[\"Ireland\"] = \"IRL\";\n  /* todo - add the rest of the ISO codes support by Experian */\n\n  /* https://www.edq.com/documentation/apis/address-validate/global-intuitive/*/\n})(ExperianCountry = exports.ExperianCountry || (exports.ExperianCountry = {}));\n/**\r\n * Some countries have multiple datasets. For these countries\r\n * the consumer can select which dataset they would like to use\r\n */\n\n\nvar ExperianDataset;\n\n(function (ExperianDataset) {\n  ExperianDataset[\"AustraliaDataFusion\"] = \"DataFusion\";\n  ExperianDataset[\"AustraliaGnaf\"] = \"GNAF\";\n  ExperianDataset[\"AustraliaPaf\"] = \"PAF\";\n  ExperianDataset[\"IrelandEircode\"] = \"Eircode\";\n  ExperianDataset[\"IrelandPaf\"] = \"PAF\";\n  ExperianDataset[\"NewZealandDatafusion\"] = \"DataFusion\";\n  ExperianDataset[\"NewZealandPAF\"] = \"PAF\";\n})(ExperianDataset = exports.ExperianDataset || (exports.ExperianDataset = {}));\n/**\r\n * https://www.edq.com/documentation/apis/address-validate/global-intuitive/\r\n */\n\n\nvar ExperianGlobalIntuitive =\n/** @class */\nfunction () {\n  function ExperianGlobalIntuitive(authToken) {\n    this._authToken = authToken;\n  }\n\n  ExperianGlobalIntuitive.prototype.ExperianGlobalIntuitive = function (authToken) {\n    this._authToken = authToken;\n  };\n\n  ExperianGlobalIntuitive.prototype.AddressSearch = function (addressSearchString, countryCode, dataset) {\n    return __awaiter(this, void 0, void 0, function () {\n      var queryString, response;\n      return __generator(this, function (_a) {\n        switch (_a.label) {\n          case 0:\n            queryString = \"https://api.edq.com/capture/address/v2/search?auth-token=\" + this._authToken + \"&query=\" + addressSearchString + \"&country=\" + countryCode;\n\n            if (dataset != null) {\n              queryString += \"&dataset=\" + dataset;\n            }\n\n            return [4\n            /*yield*/\n            , fetch(queryString)];\n\n          case 1:\n            response = _a.sent();\n\n            if (!response.ok) {\n              throw new Error(response.statusText);\n            }\n\n            return [2\n            /*return*/\n            , response.json()];\n        }\n      });\n    });\n  };\n\n  ExperianGlobalIntuitive.prototype.AddressFormat = function (searchURL) {\n    return __awaiter(this, void 0, void 0, function () {\n      var queryString, response;\n      return __generator(this, function (_a) {\n        switch (_a.label) {\n          case 0:\n            queryString = searchURL + \"&auth-token=\" + this._authToken;\n            return [4\n            /*yield*/\n            , fetch(queryString)];\n\n          case 1:\n            response = _a.sent();\n\n            if (!response.ok) {\n              throw new Error(response.statusText);\n            }\n\n            return [2\n            /*return*/\n            , response.json()];\n        }\n      });\n    });\n  };\n\n  return ExperianGlobalIntuitive;\n}();\n\nexports.ExperianGlobalIntuitive = ExperianGlobalIntuitive;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./AddressValidator/ExperianGlobalIntuitive.ts?");

/***/ }),

/***/ "./AddressValidator/index.ts":
/*!***********************************!*\
  !*** ./AddressValidator/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n\nvar __generator = this && this.__generator || function (thisArg, body) {\n  var _ = {\n    label: 0,\n    sent: function sent() {\n      if (t[0] & 1) throw t[1];\n      return t[1];\n    },\n    trys: [],\n    ops: []\n  },\n      f,\n      y,\n      t,\n      g;\n  return g = {\n    next: verb(0),\n    \"throw\": verb(1),\n    \"return\": verb(2)\n  }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function () {\n    return this;\n  }), g;\n\n  function verb(n) {\n    return function (v) {\n      return step([n, v]);\n    };\n  }\n\n  function step(op) {\n    if (f) throw new TypeError(\"Generator is already executing.\");\n\n    while (_) try {\n      if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n      if (y = 0, t) op = [op[0] & 2, t.value];\n\n      switch (op[0]) {\n        case 0:\n        case 1:\n          t = op;\n          break;\n\n        case 4:\n          _.label++;\n          return {\n            value: op[1],\n            done: false\n          };\n\n        case 5:\n          _.label++;\n          y = op[1];\n          op = [0];\n          continue;\n\n        case 7:\n          op = _.ops.pop();\n\n          _.trys.pop();\n\n          continue;\n\n        default:\n          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {\n            _ = 0;\n            continue;\n          }\n\n          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {\n            _.label = op[1];\n            break;\n          }\n\n          if (op[0] === 6 && _.label < t[1]) {\n            _.label = t[1];\n            t = op;\n            break;\n          }\n\n          if (t && _.label < t[2]) {\n            _.label = t[2];\n\n            _.ops.push(op);\n\n            break;\n          }\n\n          if (t[2]) _.ops.pop();\n\n          _.trys.pop();\n\n          continue;\n      }\n\n      op = body.call(thisArg, _);\n    } catch (e) {\n      op = [6, e];\n      y = 0;\n    } finally {\n      f = t = 0;\n    }\n\n    if (op[0] & 5) throw op[1];\n    return {\n      value: op[0] ? op[1] : void 0,\n      done: true\n    };\n  }\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar ts_debounce_1 = __webpack_require__(/*! ts-debounce */ \"./node_modules/ts-debounce/dist/src/index.js\");\n\nvar ExperianGlobalIntuitive_1 = __webpack_require__(/*! ./ExperianGlobalIntuitive */ \"./AddressValidator/ExperianGlobalIntuitive.ts\");\n\nvar AsciiKeyCode;\n\n(function (AsciiKeyCode) {\n  AsciiKeyCode[AsciiKeyCode[\"Enter\"] = 13] = \"Enter\";\n  AsciiKeyCode[AsciiKeyCode[\"Up\"] = 38] = \"Up\";\n  AsciiKeyCode[AsciiKeyCode[\"Down\"] = 40] = \"Down\";\n})(AsciiKeyCode || (AsciiKeyCode = {}));\n\nvar AddressValidator =\n/** @class */\nfunction () {\n  function AddressValidator() {}\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   * @param container If a control is marked control-type='starndard', it will receive an empty div element within which it can render its content.\r\n   */\n\n\n  AddressValidator.prototype.init = function (context, notifyOutputChanged, state, container) {\n    this._context = context;\n    this._notifyOutputChanged = notifyOutputChanged;\n    this._container = container;\n    this.currentFocus = -1;\n    this._inputKeyPress = this.keyPress.bind(this);\n    this._listItemClick = this.itemClick.bind(this);\n    this._experianGlobalIntuitive = new ExperianGlobalIntuitive_1.ExperianGlobalIntuitive(context.parameters.EDQToken.raw);\n    /* add search input form control */\n\n    this._inputElement = document.createElement(\"input\");\n\n    this._inputElement.setAttribute(\"type\", \"text\");\n\n    this._inputElement.setAttribute(\"id\", \"searchInput-1\");\n\n    this._inputElement.setAttribute(\"autocomplete\", \"off\"); // tell firefox and chrome not to auto complete\n\n\n    this._inputElement.setAttribute(\"name\", \"searchInputField\");\n\n    this._inputElement.setAttribute(\"class\", \"autocomplete\");\n\n    this._inputElement.addEventListener(\"keyup\", this._inputKeyPress);\n\n    this._container.appendChild(this._inputElement);\n    /* create a DIV element that will contain the items (values): */\n\n\n    this._searchDiv = document.createElement(\"div\");\n\n    this._searchDiv.setAttribute(\"id\", \"01-autocomplete-list\");\n\n    this._searchDiv.setAttribute(\"class\", \"autocomplete-items\");\n\n    this._container.appendChild(this._searchDiv);\n\n    this._searchDiv.hidden = true;\n    /* add debounce variable for keypress */\n\n    var debounceOptions;\n    debounceOptions = {\n      isImmediate: false\n    };\n    this._debouncedKeyPress = ts_debounce_1.debounce(this.keyPressDebounced, 200, debounceOptions);\n  };\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   */\n\n\n  AddressValidator.prototype.updateView = function (context) {\n    // Add code to update control view\n    this._context = context;\n  };\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”\r\n   */\n\n\n  AddressValidator.prototype.getOutputs = function () {\n    return {\n      addressLine1: this._address.addressLine1,\n      addressLine2: this._address.addressLine2,\n      addressLine3: this._address.addressLine3,\n      locality: this._address.locality,\n      province: this._address.province,\n      postalCode: this._address.postalCode,\n      country: this._address.country\n    };\n  };\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n\n\n  AddressValidator.prototype.destroy = function () {\n    // Add code to cleanup control if necessary\n    delete this._experianGlobalIntuitive;\n    delete this._inputElement;\n    delete this._container;\n  };\n\n  AddressValidator.prototype.itemClick = function (evt) {\n    var _this = this;\n\n    var divItem = evt.target;\n    this._inputElement.value = '';\n    this.clearSearchResults();\n    var searchUrl = divItem.id;\n\n    (function () {\n      return __awaiter(_this, void 0, void 0, function () {\n        var _this = this;\n\n        return __generator(this, function (_a) {\n          this._experianGlobalIntuitive.AddressFormat(searchUrl).then(function (response) {\n            return response;\n          }).then(function (formattedAddress) {\n            return _this.populateAddressData(formattedAddress);\n          });\n\n          return [2\n          /*return*/\n          ];\n        });\n      });\n    })();\n  };\n\n  AddressValidator.prototype.populateAddressData = function (formattedAddress) {\n    var address = formattedAddress.address;\n    this._address.addressLine1 = address[0].addressLine1;\n    this._address.addressLine2 = address[1].addressLine2;\n    this._address.addressLine3 = address[2].addressLine3;\n    this._address.locality = address[3].locality;\n    this._address.postalCode = address[5].postalCode;\n    this._address.province = address[4].province;\n    this._address.country = address[6].country;\n\n    this._notifyOutputChanged();\n  };\n\n  AddressValidator.prototype.keyPress = function (evt) {\n    var keyboardEvent = evt;\n\n    if (keyboardEvent.keyCode == AsciiKeyCode.Down) {\n      this.currentFocus++;\n      this.setActiveElement();\n    } else if (keyboardEvent.keyCode == AsciiKeyCode.Up) {\n      this.currentFocus--;\n      this.setActiveElement();\n    } else if (keyboardEvent.keyCode == AsciiKeyCode.Enter) {\n      var element1 = this._searchDiv.childNodes[this.currentFocus];\n      element1.click();\n    } else {\n      /* only perform search if not keys pressed above */\n      this._debouncedKeyPress();\n    }\n  };\n\n  AddressValidator.prototype.keyPressDebounced = function () {\n    var _this = this;\n\n    var queryString = this._inputElement.value;\n\n    (function () {\n      return __awaiter(_this, void 0, void 0, function () {\n        var _this = this;\n\n        return __generator(this, function (_a) {\n          this._experianGlobalIntuitive.AddressSearch(queryString, ExperianGlobalIntuitive_1.ExperianCountry.Australia, ExperianGlobalIntuitive_1.ExperianDataset.AustraliaDataFusion).then(function (response) {\n            return response;\n          }).then(function (address) {\n            return _this.populateData(address);\n          });\n\n          return [2\n          /*return*/\n          ];\n        });\n      });\n    })();\n  };\n\n  AddressValidator.prototype.populateData = function (response) {\n    var _this = this;\n\n    this.clearSearchResults();\n    response.results.forEach(function (element) {\n      var searchItemDiv = document.createElement(\"DIV\");\n      /* make the matching letters bold */\n\n      searchItemDiv.innerHTML = _this.matchBold(element.suggestion, _this._inputElement.value);\n      searchItemDiv.setAttribute(\"class\", \"autocomplete-item\");\n      /* insert a input field that will hold the current array item's value */\n\n      searchItemDiv.id = element.format;\n      /* execute a function when someone clicks on the item value (DIV element) */\n\n      searchItemDiv.addEventListener(\"click\", _this._listItemClick);\n\n      _this._searchDiv.appendChild(searchItemDiv);\n    });\n\n    if (response.results.length > 0) {\n      var footer = document.createElement(\"DIV\");\n      footer.setAttribute(\"class\", \"list-footer\");\n      var footerWrapper = document.createElement(\"DIV\");\n      footerWrapper.setAttribute(\"class\", \"list-footer-wrapper\");\n      footerWrapper.id = \"list-footer-id\";\n      footerWrapper.appendChild(footer);\n\n      this._searchDiv.appendChild(footerWrapper);\n\n      this._searchDiv.hidden = false;\n    }\n  };\n\n  AddressValidator.prototype.matchBold = function (inputString, find) {\n    var searchRegex = new RegExp(find, 'ig');\n    var startpos = inputString.toLowerCase().indexOf(find.toLowerCase());\n    return inputString.replace(searchRegex, '<b>' + inputString.substr(startpos, find.length) + '</b>');\n  };\n\n  AddressValidator.prototype.clearSearchResults = function () {\n    this._searchDiv.innerHTML = '';\n    this._searchDiv.hidden = true;\n  };\n\n  AddressValidator.prototype.setActiveElement = function () {\n    /* clear active elements if they exist */\n    this._searchDiv.childNodes.forEach(function (element) {\n      var htmlElement = element;\n\n      if (htmlElement.id != \"list-footer-id\") {\n        htmlElement.setAttribute(\"class\", \"autocomplete-item\");\n      }\n    });\n\n    if (this.currentFocus >= this._searchDiv.childNodes.length - 1) this.currentFocus = 0;\n    if (this.currentFocus < 0) this.currentFocus = this._searchDiv.childNodes.length - 2;\n    var htmlElement = this._searchDiv.childNodes[this.currentFocus];\n    htmlElement.setAttribute(\"class\", \"autocomplete-active\");\n  };\n\n  return AddressValidator;\n}();\n\nexports.AddressValidator = AddressValidator;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./AddressValidator/index.ts?");

/***/ }),

/***/ "./node_modules/ts-debounce/dist/src/index.js":
/*!****************************************************!*\
  !*** ./node_modules/ts-debounce/dist/src/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.debounce = function (i, e, o) {\n  var t;\n  return void 0 === e && (e = 50), void 0 === o && (o = {\n    isImmediate: !1\n  }), function () {\n    for (var a = [], d = 0; d < arguments.length; d++) a[d] = arguments[d];\n\n    var n = this,\n        m = o.isImmediate && void 0 === t;\n    void 0 !== t && clearTimeout(t), t = setTimeout(function () {\n      t = void 0, o.isImmediate || i.apply(n, a);\n    }, e), m && i.apply(n, a);\n  };\n};\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./node_modules/ts-debounce/dist/src/index.js?");

/***/ })

/******/ });
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('Veritec.AddressValidator', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.AddressValidator);
} else {
	var Veritec = Veritec || {};
	Veritec.AddressValidator = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.AddressValidator;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}