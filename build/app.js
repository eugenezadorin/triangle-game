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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function game() {\n    let appContainer = document.getElementById('app');\n\n    const edgeLen = 100;\n    const pos = [0, 400];\n    let holes = [];\n\n    for (let i = 0; i < 5; i++) {\n        holes.push(new Hole([pos[0] + edgeLen * i, pos[1]]));\n    }\n\n    holes.push(new Hole(getVertex(holes[0].coords, holes[1].coords)));\n    holes.push(new Hole(getVertex(holes[1].coords, holes[2].coords)));\n    holes.push(new Hole(getVertex(holes[2].coords, holes[3].coords)));\n    holes.push(new Hole(getVertex(holes[3].coords, holes[4].coords)));\n\n    holes.push(new Hole(getVertex(holes[0].coords, holes[2].coords)));\n    holes.push(new Hole(getVertex(holes[1].coords, holes[3].coords)));\n    holes.push(new Hole(getVertex(holes[2].coords, holes[4].coords)));\n\n    holes.push(new Hole(getVertex(holes[0].coords, holes[3].coords)));\n    holes.push(new Hole(getVertex(holes[1].coords, holes[4].coords)));\n\n    holes.push(new Hole(getVertex(holes[0].coords, holes[4].coords)));\n\n    for (hole of holes) {\n        appContainer.appendChild(hole.el);\n    }\n\n    let keys = Object.keys(holes);\n    let randomKeys = keys.sort(() => .5 - Math.random()).slice(0, 13);\n    let chip;\n    for (let key of randomKeys) {\n        chip = new Chip(holes[parseInt(key)].coords);\n        appContainer.appendChild(chip.el);\n    }\n}\n\nfunction getVertex(p1, p2) {\n    const x1 = p1[0];\n    const y1 = p1[1];\n    const x2 = p2[0];\n    const y2 = p2[1];\n\n    const x3 = (x1 + x2 + (y2 - y1) * Math.sqrt(3)) / 2;\n    const y3 = (y1 + y2 + (x1 - x2) * Math.sqrt(3)) / 2;\n\n    return [x3, y3];\n}\n\nclass Hole {\n    constructor(coords) {\n        this.WIDTH = 24;\n        this.HEIGHT = 24;\n\n        this.el = document.createElement('div');\n        this.el.classList.add('hole');\n        this.el.style.width = `${this.WIDTH}px`;\n        this.el.style.height = `${this.HEIGHT}px`;\n\n        this.coords = coords;\n    }\n\n    set x(val) {\n        this._x = val;\n        this.el.style.left = `${this._x - this.WIDTH / 2}px`;\n        return this;\n    }\n\n    get x() {\n        return this._x;\n    }\n\n    set y(val) {\n        this._y = val;\n        this.el.style.top = `${this._y - this.HEIGHT / 2}px`;\n        return this;\n    }\n\n    get y() {\n        return this._y;\n    }\n\n    set coords(val) {\n        this.x = val[0];\n        this.y = val[1];\n        return this;\n    }\n\n    get coords() {\n        return [this._x, this._y];\n    }\n}\n\nclass Grid {}\n\nclass Chip {\n    constructor(coords) {\n        this.WIDTH = 48;\n        this.HEIGHT = 48;\n\n        this.selected = false;\n\n        this.el = document.createElement('div');\n        this.el.classList.add('chip');\n        this.el.style.width = `${this.WIDTH}px`;\n        this.el.style.height = `${this.HEIGHT}px`;\n        this.el.style.backgroundColor = randomColor();\n\n        this.el.addEventListener('click', e => {\n            e.preventDefault();\n            this.selected = true;\n        });\n\n        this.coords = coords;\n    }\n\n    set x(val) {\n        this._x = val;\n        this.el.style.left = `${this._x - this.WIDTH / 2}px`;\n        return this;\n    }\n\n    get x() {\n        return this._x;\n    }\n\n    set y(val) {\n        this._y = val;\n        this.el.style.top = `${this._y - this.HEIGHT / 2}px`;\n        return this;\n    }\n\n    get y() {\n        return this._y;\n    }\n\n    set coords(val) {\n        this.x = val[0];\n        this.y = val[1];\n        return this;\n    }\n\n    get coords() {\n        return [this._x, this._y];\n    }\n}\n\nfunction randomColor() {\n    const randomInt = (min, max) => {\n        return Math.floor(Math.random() * (max - min + 1)) + min;\n    };\n    const h = randomInt(0, 360);\n    const s = randomInt(42, 98);\n    const l = randomInt(40, 90);\n    return `hsl(${h},${s}%,${l}%)`;\n}\n\nwindow.addEventListener('load', game);\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });