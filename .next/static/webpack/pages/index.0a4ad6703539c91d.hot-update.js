"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_spring_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-spring/parallax */ \"./node_modules/@react-spring/parallax/dist/esm/index.js\");\n/* harmony import */ var _images_world_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/world.png */ \"./src/images/world.png\");\n/* harmony import */ var _images_space_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/space.jpeg */ \"./src/images/space.jpeg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_parallax__WEBPACK_IMPORTED_MODULE_1__.Parallax, {\n        pages: 1,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_parallax__WEBPACK_IMPORTED_MODULE_1__.ParallaxLayer, {\n            offset: 0,\n            speed: 1,\n            className: \"flex justify-center items-end\",\n            style: {\n                backgroundImage: \"linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),url(\".concat(_images_space_jpeg__WEBPACK_IMPORTED_MODULE_3__[\"default\"].src, \")\"),\n                backgroundSize: \"cover\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-ce\",\n                children: \"Welcome To Space\"\n            }, void 0, false, {\n                fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/scroll-app/src/pages/index.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/scroll-app/src/pages/index.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ridvandemirhan/Documents/mac/nextJs/scroll-app/src/pages/index.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWdFO0FBQ3BCO0FBQ0M7QUFDZjtBQUNmLFNBQVNLLE9BQU87SUFDN0IscUJBQ0UsOERBQUNMLDREQUFRQTtRQUFDTSxPQUFPO2tCQUNmLDRFQUFDTCxpRUFBYUE7WUFDWk0sUUFBUTtZQUNSQyxPQUFPO1lBQ1BDLFdBQVU7WUFDVkMsT0FBTztnQkFDTEMsaUJBQWtCLDBFQUF5RixPQUFmUiw4REFBYyxFQUFDO2dCQUMzR1UsZ0JBQWdCO1lBQ2xCO3NCQVNBLDRFQUFDQztnQkFBR0wsV0FBVTswQkFBVTs7Ozs7Ozs7Ozs7Ozs7OztBQUloQyxDQUFDO0tBdkJ1QkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFyYWxsYXgsIFBhcmFsbGF4TGF5ZXIgfSBmcm9tICdAcmVhY3Qtc3ByaW5nL3BhcmFsbGF4J1xuaW1wb3J0IHdvcmxkSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL3dvcmxkLnBuZydcbmltcG9ydCBzcGFjZUltYWdlIGZyb20gJy4uL2ltYWdlcy9zcGFjZS5qcGVnJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxQYXJhbGxheCBwYWdlcz17MX0+XG4gICAgICA8UGFyYWxsYXhMYXllclxuICAgICAgICBvZmZzZXQ9ezB9XG4gICAgICAgIHNwZWVkPXsxfVxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWVuZFwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlIDogYGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjcpKSx1cmwoJHtzcGFjZUltYWdlLnNyY30pYCxcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgICAgfX1cbiAgICAgID5cblxuICAgICAgICB7LyogPEltYWdlIFxuICAgICAgICAgICAgICBzcmM9e3dvcmxkSW1hZ2V9XG4gICAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXG4gICAgICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgICAgIGhlaWdodD17NTAwfVxuICAgICAgICAvPiAqL31cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1jZSc+V2VsY29tZSBUbyBTcGFjZTwvaDE+XG4gICAgICA8L1BhcmFsbGF4TGF5ZXI+XG4gICAgPC9QYXJhbGxheD5cbiAgKVxufSJdLCJuYW1lcyI6WyJQYXJhbGxheCIsIlBhcmFsbGF4TGF5ZXIiLCJ3b3JsZEltYWdlIiwic3BhY2VJbWFnZSIsIkltYWdlIiwiSG9tZSIsInBhZ2VzIiwib2Zmc2V0Iiwic3BlZWQiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsInNyYyIsImJhY2tncm91bmRTaXplIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});