webpackHotUpdate_N_E("pages/posts",{

/***/ "./components/posts/PostItem.js":
/*!**************************************!*\
  !*** ./components/posts/PostItem.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _post_item_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-item.module.css */ \"./components/posts/post-item.module.css\");\n/* harmony import */ var _post_item_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_post_item_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/chia/Projects/I/NextJS/nextjs-course/components/posts/PostItem.js\",\n    _this = undefined;\n\n\n\n\n\nvar PostItem = function PostItem(_ref) {\n  var post = _ref.post;\n  var title = post.title,\n      image = post.image,\n      excerpt = post.excerpt,\n      date = post.date,\n      slug = post.slug;\n  var formattedDate = new Date(date).toLocaleDateString('en-US', {\n    year: 'numeric',\n    month: 'long',\n    day: 'numeric'\n  });\n  var imagePath = \"/images/posts/\".concat(slug, \"/\").concat(image);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n    className: _post_item_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.post,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: \"/posts/\".concat(slug),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _post_item_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.image,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n            src: imagePath,\n            alt: title,\n            width: 300,\n            height: 200,\n            layout: \"responsive\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _post_item_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.content,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            children: title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"time\", {\n            children: formattedDate\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: excerpt\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = PostItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"PostItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy9Qb3N0SXRlbS5qcz9hYTIzIl0sIm5hbWVzIjpbIlBvc3RJdGVtIiwicG9zdCIsInRpdGxlIiwiaW1hZ2UiLCJleGNlcnB0IiwiZGF0ZSIsInNsdWciLCJmb3JtYXR0ZWREYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsImltYWdlUGF0aCIsImNsYXNzZXMiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQUEsTUFDbkJDLEtBRG1CLEdBQ21CRCxJQURuQixDQUNuQkMsS0FEbUI7QUFBQSxNQUNaQyxLQURZLEdBQ21CRixJQURuQixDQUNaRSxLQURZO0FBQUEsTUFDTEMsT0FESyxHQUNtQkgsSUFEbkIsQ0FDTEcsT0FESztBQUFBLE1BQ0lDLElBREosR0FDbUJKLElBRG5CLENBQ0lJLElBREo7QUFBQSxNQUNVQyxJQURWLEdBQ21CTCxJQURuQixDQUNVSyxJQURWO0FBRzNCLE1BQU1DLGFBQWEsR0FBRyxJQUFJQyxJQUFKLENBQVNILElBQVQsRUFBZUksa0JBQWYsQ0FBa0MsT0FBbEMsRUFBMkM7QUFDN0RDLFFBQUksRUFBRSxTQUR1RDtBQUU3REMsU0FBSyxFQUFFLE1BRnNEO0FBRzdEQyxPQUFHLEVBQUU7QUFId0QsR0FBM0MsQ0FBdEI7QUFNQSxNQUFNQyxTQUFTLDJCQUFvQlAsSUFBcEIsY0FBNEJILEtBQTVCLENBQWY7QUFFQSxzQkFDSTtBQUFJLGFBQVMsRUFBRVcsNERBQU8sQ0FBQ2IsSUFBdkI7QUFBQSwyQkFDSSxxRUFBQyxnREFBRDtBQUFNLFVBQUksbUJBQVlLLElBQVosQ0FBVjtBQUFBLDZCQUNJO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFFUSw0REFBTyxDQUFDWCxLQUF4QjtBQUFBLGlDQUNJLHFFQUFDLGlEQUFEO0FBQU8sZUFBRyxFQUFFVSxTQUFaO0FBQXVCLGVBQUcsRUFBRVgsS0FBNUI7QUFBbUMsaUJBQUssRUFBRSxHQUExQztBQUErQyxrQkFBTSxFQUFFLEdBQXZEO0FBQTRELGtCQUFNLEVBQUM7QUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFJSTtBQUFLLG1CQUFTLEVBQUVZLDREQUFPLENBQUNDLE9BQXhCO0FBQUEsa0NBQ0k7QUFBQSxzQkFBS2I7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBQSxzQkFBT0s7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBR0k7QUFBQSxzQkFBSUg7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZ0JILENBM0JEOztLQUFNSixRO0FBNkJTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcG9zdHMvUG9zdEl0ZW0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vcG9zdC1pdGVtLm1vZHVsZS5jc3MnXG5cbmNvbnN0IFBvc3RJdGVtID0gKHsgcG9zdCB9KSA9PiB7XG4gICAgY29uc3QgeyB0aXRsZSwgaW1hZ2UsIGV4Y2VycHQsIGRhdGUsIHNsdWcgfSA9IHBvc3RcblxuICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywge1xuICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgIH0pXG5cbiAgICBjb25zdCBpbWFnZVBhdGggPSBgL2ltYWdlcy9wb3N0cy8ke3NsdWd9LyR7aW1hZ2V9YFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5wb3N0fT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvJHtzbHVnfWB9PlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZVBhdGh9IGFsdD17dGl0bGV9IHdpZHRoPXszMDB9IGhlaWdodD17MjAwfSBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnt0aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRpbWU+e2Zvcm1hdHRlZERhdGV9PC90aW1lPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2V4Y2VycHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0SXRlbVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/posts/PostItem.js\n");

/***/ })

})