(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/framer.default"); } catch(e) {} }()), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "framer-package-loader!@framer/framer.default", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/framer.default"); } catch(e) {} }()), require("react")) : factory(root["Framer"], root["framer-package-loader!@framer/framer.default"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_default__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules\/.*)\/(?:build|dist)\/index\.js$/.exec(__module_i) || [])[1];
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Confetti.tsx": "./code/Confetti.tsx",
	"./particle.js": "./code/particle.js",
	"./use-interval.js": "./code/use-interval.js",
	"./utils.js": "./code/utils.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/Confetti.tsx":
/*!***************************!*\
  !*** ./code/Confetti.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmV0dGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0NvbmZldHRpLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUE4QjtBQUM5QixpQ0FBeUM7QUFDekMseUNBQXFDO0FBQ3JDLG1DQUF5RDtBQUN6RCxtQ0FBc0M7QUFDdEMsaURBQTRDO0FBRTVDLFNBQWdCLFFBQVEsQ0FBQyxLQUFLOztJQUM1QixNQUFNLFNBQVMsR0FBRyxjQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDOUIsTUFBTSxFQUNKLElBQUksRUFDSixJQUFJLEVBQ0osUUFBUSxFQUNSLGNBQWMsRUFDZCxjQUFjLEVBQ2QsTUFBTSxFQUNOLElBQUksS0FFRixLQUFLLEVBRFAsMkdBQ08sQ0FBQTtJQUNULE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQTtJQUNwQixJQUFJLEVBQUUsQ0FBQTtJQUVOLFNBQVMsSUFBSTs7UUFDWCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFOztZQUN2QyxNQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFBO1lBRXpCLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtnQkFDdEIsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsb0JBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7YUFDL0M7WUFDRCxNQUFNLElBQUksR0FBRyxJQUFJLG1CQUFRLENBQ3ZCLGNBQWMsQ0FBQyxvQkFBWSxDQUFDLENBQUMsRUFBRSxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsRUFDdEQsTUFBTSxDQUFDLG9CQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUN0QyxLQUFLLEVBQ0wsT0FBTyxDQUNSLENBQUE7WUFDRCxTQUFTLENBQUMsQ0FBQyxDQUFD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

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
const particle_1 = __webpack_require__(/*! ./particle */ "./code/particle.js");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const utils_1 = __webpack_require__(/*! ./utils */ "./code/utils.js");
const use_interval_1 = __webpack_require__(/*! ./use-interval */ "./code/use-interval.js");
function Confetti(props) {
    window["__checkComponentBudget__"]();
    const canvasRef = react_1.useRef(null);
    const { play, loop, interval, particleNumber, particleColors, emojis, imgs } = props, options = __rest(props, ["play", "loop", "interval", "particleNumber", "particleColors", "emojis", "imgs"]);
    const particles = [];
    init();
    function init() {
        window["__checkBudget__"]();
        for (let i = 0; i < particleNumber; i++) {
            window["__checkBudget__"]();
            const image = new Image();
            if (imgs !== undefined) {
                image.src = imgs[utils_1.getRandomInt(0, imgs.length)];
            }
            const item = new particle_1.Particle(particleColors[utils_1.getRandomInt(0, particleColors.length)], emojis[utils_1.getRandomInt(0, emojis.length)], image, options);
            particles[i] = item;
        }
    }
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        let animationFrameId;
        // Our draw came here
        function render() {
            window["__checkBudget__"]();
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            for (let i = 0; i < particleNumber; i++) {
                window["__checkBudget__"]();
                const item = particles[i];
                item.draw(context);
            }
            animationFrameId = window.requestAnimationFrame(render);
        }
        if (play)
            render();
        return () => {
            window["__checkBudget__"]();
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [play]);
    if (loop)
        use_interval_1.useInterval(() => {
            window["__checkBudget__"]();
            for (let i = 0; i < particleNumber; i++) {
                window["__checkBudget__"]();
                const item = particles[i];
                item.init();
            }
        }, interval * 1000);
    return React.createElement("canvas", Object.assign({ ref: canvasRef }, props));
}
exports.Confetti = Confetti;
Confetti.defaultProps = {
    width: 300,
    height: 600,
};
framer_1.addPropertyControls(Confetti, {
    play: {
        type: framer_1.ControlType.Boolean,
    },
    loop: {
        type: framer_1.ControlType.Boolean,
        defaultValue: false,
    },
    interval: {
        title: "~ Interval",
        type: framer_1.ControlType.Number,
        unit: "sec",
        displayStepper: true,
        min: 1,
        hidden(props) {
            window["__checkBudget__"]();
            return props.loop == false;
        },
    },
    type: {
        type: framer_1.ControlType.SegmentedEnum,
        options: ["shape", "emoji", "image"],
        optionTitles: ["Shape", "Emoji", "Image"],
    },
    shape: {
        type: framer_1.ControlType.SegmentedEnum,
        options: ["rect", "circle", "star"],
        optionTitles: ["■", "●", "★"],
        hidden(props) {
            window["__checkBudget__"]();
            return props.type !== "shape";
        },
    },
    particleNumber: {
        type: framer_1.ControlType.Number,
        defaultValue: 50,
        min: 0,
        max: 1000,
        step: 5,
        displayStepper: true,
        hidden(props) {
            window["__checkBudget__"]();
            return props.type !== "Shape";
        },
    },
    particleWidth: {
        type: framer_1.ControlType.Number,
        defaultValue: 20,
        min: 0,
        max: 1000,
        unit: "px",
        step: 5,
        displayStepper: true,
        hidden(props) {
            window["__checkBudget__"]();
            return props.type !== "shape" || props.shape !== "rect";
        },
    },
    particleHeight: {
        type: framer_1.ControlType.Number,
        defaultValue: 15,
        min: 0,
        max: 1000,
        unit: "px",
        step: 5,
        displayStepper: true,
        hidden(props) {
            window["__checkBudget__"]();
            return props.type !== "shape" || props.shape !== "rect";
        },
    },
    particleSize: {
        type: framer_1.ControlType.Number,
        defaultValue: 30,
        min: 0,
        max: 1000,
        unit: "px",
        step: 5,
        displayStepper: true,
        hidden(props) {
            window["__checkBudget__"]();
            return props.type === "shape" && props.shape === "rect";
        },
    },
    velocity: {
        type: framer_1.ControlType.Number,
        defaultValue: 10,
        min: 0,
        max: 1000,
        unit: "px",
        step: 5,
        displayStepper: true,
    },
    friction: {
        type: framer_1.ControlType.Number,
        defaultValue: 0.7,
        min: 0,
        max: 1,
        step: 0.1,
        displayStepper: true,
    },
    gravity: {
        type: framer_1.ControlType.Number,
        defaultValue: 0.02,
        min: 0,
        max: 1000,
        step: 0.01,
        displayStepper: true,
    },
    x: {
        type: framer_1.ControlType.Number,
        defaultValue: 100,
        min: 0,
        max: 500,
        unit: "px",
        step: 5,
        displayStepper: true,
    },
    y: {
        type: framer_1.ControlType.Number,
        defaultValue: 0,
        min: 0,
        max: 1000,
        unit: "px",
        step: 5,
        displayStepper: true,
    },
    launchDegree: {
        type: framer_1.ControlType.Number,
        defaultValue: -90,
        min: -360,
        max: 360,
        unit: "deg",
        step: 90,
        displayStepper: true,
    },
    injectionDegree: {
        type: framer_1.ControlType.Number,
        defaultValue: 120,
        min: -360,
        max: 360,
        unit: "deg",
        step: 5,
        displayStepper: true,
    },
    wind: {
        type: framer_1.ControlType.Number,
        defaultValue: 0,
        min: -1,
        max: 1,
        step: 0.1,
        displayStepper: true,
    },
    particleColors: {
        type: framer_1.ControlType.Array,
        propertyControl: {
            type: framer_1.ControlType.Color,
        },
        defaultValue: [
            "#1abc9c",
            "#2ecc71",
            "#f1c40f",
            "#e74c3c",
            "#c0392b",
            "#27ae60",
            "#9b59b6",
        ],
        hidden(props) {
            window["__checkBudget__"]();
            return props.type !== "shape";
        },
    },
    emojis: {
        type: framer_1.ControlType.Array,
        propertyControl: {
            type: framer_1.ControlType.String,
        },
        defaultValue: ["🎉", "🤡", "🎄"],
        hidden(props) {
            window["__checkBudget__"]();
            return props.type !== "emoji";
        },
    },
    imgs: {
        type: framer_1.ControlType.Array,
        propertyControl: {
            type: framer_1.ControlType.Image,
        },
        defaultValue: ["url(./assets/ball.png)"],
        hidden(props) {
            window["__checkBudget__"]();
            return props.type !== "image";
        },
    },
});
exports.__info__ = [{ "name": "Confetti", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/particle.js":
/*!**************************!*\
  !*** ./code/particle.js ***!
  \**************************/
/*! exports provided: Particle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Particle", function() { return Particle; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./code/utils.js");


class Particle {
  constructor(color, emoji, img, options) {
    this.color = color
    this.emoji = emoji
    this.img = img
    this.options = options

    this.init()
  }

  init() {
    const {
      type,
      shape,
      particleWidth,
      particleHeight,
      particleSize,
      x,
      y,
      velocity,
      friction,
      gravity,
      launchDegree,
      injectionDegree,
      wind,
    } = this.options

    this.size = particleSize
    this.type = type
    this.shape = shape
    this.particleWidth = particleWidth
    this.particleHeight = particleHeight

    this.sizeVari = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomRange"])(0.8, 1.2) // 크기 다양화
    const minVx =
      velocity *
      Math.cos(((launchDegree - injectionDegree / 2) * Math.PI) / 180)
    const maxVx =
      velocity *
      Math.cos(((launchDegree + injectionDegree / 2) * Math.PI) / 180)
    const minVy =
      -velocity *
      Math.sin(((launchDegree - injectionDegree / 2) * Math.PI) / 180)
    const maxVy =
      -velocity *
      Math.sin(((launchDegree + injectionDegree / 2) * Math.PI) / 180)
    const f = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomRange"])(1 - friction, 1)
    this.vx = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomRange"])(minVx, maxVx) * f
    this.vy = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomRange"])(minVy, maxVy) * f // vy의 끝 값으로 얼마나 높게 파티클이 올라갈지 결정

    this.vr = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomRange"])(0, 2 * Math.PI) // 돌아가는 회전 속도값
    this.angle3dvari = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomRange"])(0, 1)
    this.gravity = gravity // 중력값
    this.wind = wind
    // this.color = '#' + Math.floor(Math.random() * 16777215).toString(16) // 랜덤 컬러

    // 터지는 위치
    this.x = x
    this.y = y
    this.r = 0
  }

  draw(ctx) {
    // Set position
    this.angle3d = 0.5 + Math.sin(this.vy * this.angle3dvari) * 0.5

    this.vy = Math.min(this.vy + this.gravity)

    this.x += this.vx
    this.vx += this.wind

    this.y += this.vy
    this.r += this.vr

    ctx.save() // Save x, y, r state (https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/save)
    ctx.translate(this.x, this.y) // Move context, but no direct movemnents on rectangles.
    ctx.scale(this.sizeVari, this.sizeVari)
    ctx.rotate((this.r * Math.PI) / 180)

    // FOR DEFAULT COLOR CONFETTI
    if (this.type === "shape" && this.shape === "rect") {
      ctx.scale(this.angle3d, 1) //3d rotation
      ctx.fillStyle = this.color
      ctx.fillRect(
        -this.particleWidth / 2,
        -this.particleHeight / 2,
        this.particleWidth,
        this.particleHeight
      )
    } else if (this.type === "shape" && this.shape === "circle") {
      ctx.scale(this.angle3d, 1) //3d rotation
      ctx.fillStyle = this.color
      ctx.beginPath()
      ctx.arc(0, 0, this.size / 2, 0, 2 * Math.PI)
      ctx.fill()
    }

    // FOR TEXT/EMOJI CONFETTI
    else if (this.type === "emoji") {
      ctx.font = this.size * 2 + "px" + " san-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(this.emoji, 0, 0)
    } else if (this.type === "image" && this.img !== null) {
      ctx.drawImage(
        this.img,
        -(this.size / 2),
        -((this.size * (this.img.height / this.img.width)) / 2),
        this.size,
        this.size * (this.img.height / this.img.width)
      )
    }

    // FOR IMAGE CONFETTI
    ctx.restore() // Restore x, y, r state
  }
}


/***/ }),

/***/ "./code/use-interval.js":
/*!******************************!*\
  !*** ./code/use-interval.js ***!
  \******************************/
/*! exports provided: useInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInterval", function() { return useInterval; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useInterval(callback, delay) {
  const savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])()

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    savedCallback.current = callback
  })

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function tick() {
      savedCallback.current()
    }

    let id = setInterval(tick, delay)
    return () => clearInterval(id)
  }, [delay])
}


/***/ }),

/***/ "./code/utils.js":
/*!***********************!*\
  !*** ./code/utils.js ***!
  \***********************/
/*! exports provided: getRandomInt, randomRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInt", function() { return getRandomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomRange", function() { return randomRange; });
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function randomRange(min, max) {
  return Math.random() * (max - min) + min
}


/***/ }),

/***/ "./designDependencies.js":
/*!*******************************!*\
  !*** ./designDependencies.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {


const designs = {}

// The packages are passed in through a template
designs["@framer/framer.default"] = JSON.parse('{"components":[],"tokens":{},"version":75}')

module.exports = designs


/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const packageInfo = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

try {
    // This is a special webpack thing that watches the whole directory
    // https://github.com/webpack/docs/wiki/context
    const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

    ctx.keys().forEach(key => {
        packageInfo.sourceModules[key] = () => ctx(key)
    })
} catch (e) {
    // Handle when the code directory is missing
    // See issue #8178 for more information
}

const packages = {}

// The packages are passed in through a template

                packages["framer"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer */ "framer")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["framer"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"name":"framer","version":"1.2.12","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"yarn :jest --coverage","lint":"yarn :eslint ./src --ext .ts,.tsx --format codeframe --quiet","lint:fix":"yarn lint --fix","test":"yarn :jest","watch":"yarn :jest --watch"},"devDependencies":{"@emotion/is-prop-valid":"^0.8.2","@microsoft/api-extractor":"7.7.8","@testing-library/jest-dom":"^5.1.1","@testing-library/react":"^9.4.0","@testing-library/react-hooks":"^3.2.1","@types/chalk":"2.2.0","@types/css-font-loading-module":"^0.0.4","@types/draft-js":"0.10.38","@types/enzyme":"3.1.10","@types/enzyme-adapter-react-16":"1.0.3","@types/google.fonts":"1.0.2","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"25.2.1","@types/node":"^12.12.12","@types/react":"16.9.19","@types/react-dom":"16.9.6","@types/yargs":"^15.0.5","@typescript-eslint/eslint-plugin":"^4.10.0","@typescript-eslint/parser":"^4.10.0","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.11.3","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eslint":"^6.8.0","eventemitter3":"^3.1.0","fontfaceobserver":"^2.1.0","fork-ts-checker-webpack-plugin":"^6.0.8","framer-motion":"3.0.1","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest-diff":"^25.5.0","jest-junit":"^10.0.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"^16.12.0","react-dev-utils":"^5.0.1","react-dom":"^16.12.0","react-test-renderer":"16","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","terser-webpack-plugin":"^1.3.0","ts-loader":"^4.1.0","typescript":"^4.1","watch":"^1.0.2","webpack":"^4.43.0","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2","yargs":"^15.3.1"},"peerDependencies":{"react":"^16.12.0","react-dom":"^16.12.0"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"}]}}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

                packages["@framer/framer.default"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer-package-loader!@framer/framer.default */ "framer-package-loader!@framer/framer.default")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/framer.default"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"main":"dist/index.js","license":"MIT","dependencies":{},"devDependencies":{"@types/react":"^16.9.53"},"peerDependencies":{"framer":"^1.0","react":"^16.8"},"framer":{"id":"ed433636-a308-4ea6-8026-c3b3f320806d","displayName":"Default"},"author":"Framer Team","name":"@framer/framer.default","version":"1.97.0"}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

packageInfo.dependencies = packages

exports.__framer__ = packageInfo


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, name, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"main\":\"dist/index.js\",\"license\":\"MIT\",\"devDependencies\":{\"@types/react\":\"^16.8\"},\"peerDependencies\":{\"framer\":\"^1.0\",\"react\":\"^16.8\"},\"framer\":{\"id\":\"2bf37752-c8d7-4261-bae5-7fb25611dd7e\",\"displayName\":\"Confetti ＋\"},\"author\":\"yongmin ruucm\",\"dependencies\":{\"@framer/framer.default\":\"^1.97.0\"},\"name\":\"@framer/ruucm-h.confetti\"}");

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "framer-package-loader!@framer/framer.default":
/*!***************************************************************!*\
  !*** external "framer-package-loader!@framer/framer.default" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_default__ === 'undefined') {var e = new Error("Cannot find module 'framer-package-loader!@framer/framer.default'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_default__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});