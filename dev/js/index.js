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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_js__ = __webpack_require__(2);



window.login = function (opts) {
    var container = opts.container;
    Object(__WEBPACK_IMPORTED_MODULE_0__render_js__["a" /* default */])(container);
    Object(__WEBPACK_IMPORTED_MODULE_1__event_js__["a" /* default */])();
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (container) {
    var tpl = '<form id="form"><input id="input" name="uname" type="text"><br/><input name="password" type="password"><br/><input id="submit" name="登录" type="submit"></form>';

    container.innerHTML = tpl;
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_formCheck_js__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = (function () {
	var btn = document.getElementById('submit');
	var input = document.getElementById('input');
	var check = Object(__WEBPACK_IMPORTED_MODULE_0__common_formCheck_js__["a" /* default */])(document.getElementById('form'));
	btn.onclick = function () {
		check();
	};

	input.oninput = function () {
		check();
	};
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (form) {
	return function () {
		alert(form.id);
		return [];
	};
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODhmMTdhNDRhODNmMDBjOTg2YTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xvZ2luL2luaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xvZ2luL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbG9naW4vZXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbW1vbi9mb3JtQ2hlY2suanMiXSwibmFtZXMiOlsid2luZG93IiwibG9naW4iLCJvcHRzIiwiY29udGFpbmVyIiwicmVuZGVyIiwiZXZlbnQiLCJ0cGwiLCJpbm5lckhUTUwiLCJidG4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5wdXQiLCJjaGVjayIsImZyb21DaGVjayIsIm9uY2xpY2siLCJvbmlucHV0IiwiZm9ybSIsImFsZXJ0IiwiaWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUM3REM7QUFDQTs7QUFHQUEsT0FBT0MsS0FBUCxHQUFlLFVBQUNDLElBQUQsRUFBUTtBQUNuQixRQUFNQyxZQUFZRCxLQUFLQyxTQUF2QjtBQUNBQyxJQUFBLG1FQUFBQSxDQUFPRCxTQUFQO0FBQ0FFLElBQUEsa0VBQUFBO0FBQ0gsQ0FKRCxDOzs7Ozs7O0FDSkQseURBQWMsVUFBQ0YsU0FBRCxFQUFjO0FBQ3hCLFFBQU9HLE1BQU0sZ0tBQWI7O0FBRUFILGNBQVVJLFNBQVYsR0FBc0JELEdBQXRCO0FBQ0gsQ0FKRCxFOzs7Ozs7OztBQ0FBOztBQUVBLHlEQUFjLFlBQUs7QUFDbEIsS0FBTUUsTUFBTUMsU0FBU0MsY0FBVCxDQUF3QixRQUF4QixDQUFaO0FBQ0EsS0FBTUMsUUFBUUYsU0FBU0MsY0FBVCxDQUF3QixPQUF4QixDQUFkO0FBQ0EsS0FBTUUsUUFBUSw2RUFBQUMsQ0FBVUosU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUFWLENBQWQ7QUFDQUYsS0FBSU0sT0FBSixHQUFZLFlBQUk7QUFDZkY7QUFDQSxFQUZEOztBQUlBRCxPQUFNSSxPQUFOLEdBQWdCLFlBQUs7QUFDZEg7QUFDTixFQUZEO0FBR0EsQ0FYRCxFOzs7Ozs7O0FDRkEseURBQWUsVUFBQ0ksSUFBRCxFQUFTO0FBQ3ZCLFFBQU8sWUFBSTtBQUNWQyxRQUFNRCxLQUFLRSxFQUFYO0FBQ0EsU0FBTyxFQUFQO0FBQ0EsRUFIRDtBQUlBLENBTEQsRSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDg4ZjE3YTQ0YTgzZjAwYzk4NmE3IiwiIGltcG9ydCByZW5kZXIgZnJvbSAgJy4vcmVuZGVyLmpzJ1xuIGltcG9ydCBldmVudCBmcm9tICcuL2V2ZW50LmpzJ1xuXG5cbiB3aW5kb3cubG9naW4gPSAob3B0cyk9PntcbiAgICAgY29uc3QgY29udGFpbmVyID0gb3B0cy5jb250YWluZXI7XG4gICAgIHJlbmRlcihjb250YWluZXIpO1xuICAgICBldmVudCgpXG4gfVxuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9sb2dpbi9pbml0LmpzIiwiZXhwb3J0IGRlZmF1bHQoY29udGFpbmVyKSA9PntcbiAgICBjb25zdCAgdHBsID0gJzxmb3JtIGlkPVwiZm9ybVwiPjxpbnB1dCBpZD1cImlucHV0XCIgbmFtZT1cInVuYW1lXCIgdHlwZT1cInRleHRcIj48YnIvPjxpbnB1dCBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIj48YnIvPjxpbnB1dCBpZD1cInN1Ym1pdFwiIG5hbWU9XCLnmbvlvZVcIiB0eXBlPVwic3VibWl0XCI+PC9mb3JtPic7XG5cbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gdHBsO1x0XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2xvZ2luL3JlbmRlci5qcyIsImltcG9ydCBmcm9tQ2hlY2sgZnJvbSAnLi4vY29tbW9uL2Zvcm1DaGVjay5qcydcblxuZXhwb3J0IGRlZmF1bHQoKSA9Pntcblx0Y29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpO1xuXHRjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpO1xuXHRjb25zdCBjaGVjayA9IGZyb21DaGVjayhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpKVxuXHRidG4ub25jbGljaz0oKT0+e1xuXHRcdGNoZWNrKClcblx0fVxuXG5cdGlucHV0Lm9uaW5wdXQgPSAoKSA9PntcbiAgICAgICAgY2hlY2soKVxuXHR9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9sb2dpbi9ldmVudC5qcyIsImV4cG9ydCBkZWZhdWx0IChmb3JtKSA9Pntcblx0cmV0dXJuICgpPT57XG5cdFx0YWxlcnQoZm9ybS5pZClcblx0XHRyZXR1cm4gW11cblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21tb24vZm9ybUNoZWNrLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==