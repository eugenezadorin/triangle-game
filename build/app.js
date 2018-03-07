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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Chip.js":
/*!*********************!*\
  !*** ./src/Chip.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Chip; });\n/* harmony import */ var _GridNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GridNode */ \"./src/GridNode.js\");\n\n\nclass Chip extends _GridNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(coords) {\n        super();\n\n        this.WIDTH = 48;\n        this.HEIGHT = 48;\n\n        this.el.classList.add('chip');\n        this.el.style.width = `${this.WIDTH}px`;\n        this.el.style.height = `${this.HEIGHT}px`;\n        this.el.style.backgroundColor = this.randomColor();\n\n        this.coords = coords;\n    }\n\n    randomColor() {\n        const randomInt = (min, max) => {\n            return Math.floor(Math.random() * (max - min + 1)) + min;\n        };\n        const h = randomInt(0, 360);\n        const s = randomInt(42, 98);\n        const l = randomInt(40, 90);\n        return `hsl(${h},${s}%,${l}%)`;\n    }\n}\n\n//# sourceURL=webpack:///./src/Chip.js?");

/***/ }),

/***/ "./src/Grid.js":
/*!*********************!*\
  !*** ./src/Grid.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Grid; });\n/* harmony import */ var _Hole__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hole */ \"./src/Hole.js\");\n/* harmony import */ var _Chip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chip */ \"./src/Chip.js\");\n\n\n\nclass Grid {\n    constructor(container) {\n        this.el = container;\n\n        this.EDGE_LEN = 100;\n        this.INIT_POS = [0, 400];\n\n        this.holes = [];\n        this.chips = [];\n    }\n\n    initHoles() {\n        for (let i = 0; i < 5; i++) {\n            this.holes.push(new _Hole__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([this.INIT_POS[0] + this.EDGE_LEN * i, this.INIT_POS[1]]));\n        }\n\n        this.holes.push(new _Hole__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.getVertex(this.holes[0].coords, this.holes[1].coords)));\n        this.holes.push(new _Hole__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.getVertex(this.holes[1].coords, this.holes[2].coords)));\n        this.holes.push(new _Hole__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.getVertex(this.holes[2].coords, this.holes[3].coords)));\n        this.holes.push(new _Hole__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.getVertex(this.holes[3].coords, this.holes[4].coords)));\n\n        this.holes.push(new _Hole__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.getVertex(this.holes[0].coords, this.holes[2].coords)));\n        this.holes.push(new _Hole__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.getVertex(this.holes[1].coords, this.holes[3].coords)));\n        this.holes.push(new _Hole__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.getVertex(this.holes[2].coords, this.holes[4].coords)));\n\n        this.holes.push(new _Hole__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.getVertex(this.holes[0].coords, this.holes[3].coords)));\n        this.holes.push(new _Hole__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.getVertex(this.holes[1].coords, this.holes[4].coords)));\n\n        this.holes.push(new _Hole__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.getVertex(this.holes[0].coords, this.holes[4].coords)));\n\n        for (let hole of this.holes) {\n            this.el.appendChild(hole.el);\n        }\n    }\n\n    initChips() {\n        let keys = Object.keys(this.holes);\n        let randomKeys = keys.sort(() => .5 - Math.random()).slice(0, 13);\n        let chip;\n        for (let key of randomKeys) {\n            chip = new _Chip__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.holes[parseInt(key)].coords);\n            this.el.appendChild(chip.el);\n        }\n    }\n\n    getVertex(p1, p2) {\n        const x1 = p1[0];\n        const y1 = p1[1];\n        const x2 = p2[0];\n        const y2 = p2[1];\n\n        const x3 = (x1 + x2 + (y2 - y1) * Math.sqrt(3)) / 2;\n        const y3 = (y1 + y2 + (x1 - x2) * Math.sqrt(3)) / 2;\n\n        return [x3, y3];\n    }\n}\n\n//# sourceURL=webpack:///./src/Grid.js?");

/***/ }),

/***/ "./src/GridNode.js":
/*!*************************!*\
  !*** ./src/GridNode.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GridNode; });\nclass GridNode {\n    constructor() {\n        this._x = null;\n        this._y = null;\n        this.WIDTH = 0;\n        this.HEIGHT = 0;\n        this.el = document.createElement('div');\n    }\n\n    set x(val) {\n        this._x = val;\n        this.el.style.left = `${this._x - this.WIDTH / 2}px`;\n        return this;\n    }\n\n    get x() {\n        return this._x;\n    }\n\n    set y(val) {\n        this._y = val;\n        this.el.style.top = `${this._y - this.HEIGHT / 2}px`;\n        return this;\n    }\n\n    get y() {\n        return this._y;\n    }\n\n    set coords(val) {\n        this.x = val[0];\n        this.y = val[1];\n        return this;\n    }\n\n    get coords() {\n        return [this._x, this._y];\n    }\n}\n\n//# sourceURL=webpack:///./src/GridNode.js?");

/***/ }),

/***/ "./src/Hole.js":
/*!*********************!*\
  !*** ./src/Hole.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Hole; });\n/* harmony import */ var _GridNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GridNode */ \"./src/GridNode.js\");\n\n\nclass Hole extends _GridNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(coords) {\n        super();\n\n        this.WIDTH = 24;\n        this.HEIGHT = 24;\n\n        this.el.classList.add('hole');\n        this.el.style.width = `${this.WIDTH}px`;\n        this.el.style.height = `${this.HEIGHT}px`;\n\n        this.coords = coords;\n        this.siblings = [];\n    }\n}\n\n//# sourceURL=webpack:///./src/Hole.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid */ \"./src/Grid.js\");\n\n\nfunction game() {\n    let appContainer = document.getElementById('app');\n    const grid = new _Grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"](appContainer);\n    grid.initHoles();\n    grid.initChips();\n}\n\nwindow.addEventListener('load', game);\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });