webpackHotUpdate_N_E("pages/posts/[slug]",{

/***/ "./components/posts/post-detail/PostContent.js":
/*!*****************************************************!*\
  !*** ./components/posts/post-detail/PostContent.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/src/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-syntax-highlighter */ \"./node_modules/react-syntax-highlighter/dist/esm/index.js\");\n/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism_atom_dark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/prism/atom-dark */ \"./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/atom-dark.js\");\n/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism_atom_dark__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism_atom_dark__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/languages/prism/javascript */ \"./node_modules/react-syntax-highlighter/dist/cjs/languages/prism/javascript.js\");\n/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_languages_prism_javascript__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/languages/prism/css */ \"./node_modules/react-syntax-highlighter/dist/cjs/languages/prism/css.js\");\n/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_languages_prism_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _PostHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostHeader */ \"./components/posts/post-detail/PostHeader.js\");\n/* harmony import */ var _post_content_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./post-content.module.css */ \"./components/posts/post-detail/post-content.module.css\");\n/* harmony import */ var _post_content_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_post_content_module_css__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"/Users/chia/Projects/I/NextJS/nextjs-course/components/posts/post-detail/PostContent.js\",\n    _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar PostContent = function PostContent(_ref) {\n  var post = _ref.post;\n  var imagePath = \"/images/posts/\".concat(post.slug, \"/\").concat(post.image);\n  var customRenderers = {\n    // img(image) {\n    //   return (\n    //     <Image\n    //       src={`/images/posts/${post.slug}/${image.src}`}\n    //       alt={image.alt}\n    //       width={600}\n    //       height={300}\n    //     />\n    //   );\n    // },\n    p: function p(paragraph) {\n      var node = paragraph.node;\n\n      if (node.children[0].tagName === 'img') {\n        var image = node.children[0];\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _post_content_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.image,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n            src: \"/images/posts/\".concat(post.slug, \"/\").concat(image.properties.src),\n            alt: image.alt,\n            width: 600,\n            height: 300\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 21\n        }, this);\n      }\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: paragraph.children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 20\n      }, this);\n    },\n    code: function code(_code) {\n      var className = _code.className,\n          children = _code.children;\n      var language = className.split('-')[1];\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__[\"PrismLight\"], {\n        style: react_syntax_highlighter_dist_cjs_styles_prism_atom_dark__WEBPACK_IMPORTED_MODULE_4___default.a,\n        language: language,\n        children: value\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 20\n      }, this);\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n    className: _post_content_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.content,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_PostHeader__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      image: imagePath,\n      title: post.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      components: customRenderers,\n      children: post.content\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = PostContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostContent);\n\nvar _c;\n\n$RefreshReg$(_c, \"PostContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy9wb3N0LWRldGFpbC9Qb3N0Q29udGVudC5qcz9iODBkIl0sIm5hbWVzIjpbIlBvc3RDb250ZW50IiwicG9zdCIsImltYWdlUGF0aCIsInNsdWciLCJpbWFnZSIsImN1c3RvbVJlbmRlcmVycyIsInAiLCJwYXJhZ3JhcGgiLCJub2RlIiwiY2hpbGRyZW4iLCJ0YWdOYW1lIiwiY2xhc3NlcyIsInByb3BlcnRpZXMiLCJzcmMiLCJhbHQiLCJjb2RlIiwiY2xhc3NOYW1lIiwibGFuZ3VhZ2UiLCJzcGxpdCIsImF0b21EYXJrIiwidmFsdWUiLCJjb250ZW50IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDOUIsTUFBTUMsU0FBUywyQkFBb0JELElBQUksQ0FBQ0UsSUFBekIsY0FBaUNGLElBQUksQ0FBQ0csS0FBdEMsQ0FBZjtBQUVBLE1BQU1DLGVBQWUsR0FBRztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxLQVhvQixhQVdsQkMsU0FYa0IsRUFXUDtBQUFBLFVBQ0RDLElBREMsR0FDUUQsU0FEUixDQUNEQyxJQURDOztBQUdULFVBQUlBLElBQUksQ0FBQ0MsUUFBTCxDQUFjLENBQWQsRUFBaUJDLE9BQWpCLEtBQTZCLEtBQWpDLEVBQXdDO0FBQ3BDLFlBQU1OLEtBQUssR0FBR0ksSUFBSSxDQUFDQyxRQUFMLENBQWMsQ0FBZCxDQUFkO0FBRUEsNEJBQ0k7QUFBSyxtQkFBUyxFQUFFRSwrREFBTyxDQUFDUCxLQUF4QjtBQUFBLGlDQUNJLHFFQUFDLGlEQUFEO0FBQU8sZUFBRywwQkFBbUJILElBQUksQ0FBQ0UsSUFBeEIsY0FBZ0NDLEtBQUssQ0FBQ1EsVUFBTixDQUFpQkMsR0FBakQsQ0FBVjtBQUFrRSxlQUFHLEVBQUVULEtBQUssQ0FBQ1UsR0FBN0U7QUFBa0YsaUJBQUssRUFBRSxHQUF6RjtBQUE4RixrQkFBTSxFQUFFO0FBQXRHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKO0FBS0g7O0FBRUQsMEJBQU87QUFBQSxrQkFBSVAsU0FBUyxDQUFDRTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDtBQUNILEtBekJtQjtBQTJCcEJNLFFBM0JvQixnQkEyQmZBLEtBM0JlLEVBMkJUO0FBQUEsVUFDQ0MsU0FERCxHQUN5QkQsS0FEekIsQ0FDQ0MsU0FERDtBQUFBLFVBQ1lQLFFBRFosR0FDeUJNLEtBRHpCLENBQ1lOLFFBRFo7QUFFUCxVQUFNUSxRQUFRLEdBQUdELFNBQVMsQ0FBQ0UsS0FBVixDQUFnQixHQUFoQixFQUFxQixDQUFyQixDQUFqQjtBQUNBLDBCQUFPLHFFQUFDLG1FQUFEO0FBQW1CLGFBQUssRUFBRUMsK0ZBQTFCO0FBQW9DLGdCQUFRLEVBQUVGLFFBQTlDO0FBQXdELGdCQUFRLEVBQUVHO0FBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDtBQUNIO0FBL0JtQixHQUF4QjtBQWlDQSxzQkFDSTtBQUFTLGFBQVMsRUFBRVQsK0RBQU8sQ0FBQ1UsT0FBNUI7QUFBQSw0QkFDSSxxRUFBQyxtREFBRDtBQUFZLFdBQUssRUFBRW5CLFNBQW5CO0FBQThCLFdBQUssRUFBRUQsSUFBSSxDQUFDcUI7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUkscUVBQUMscURBQUQ7QUFBZSxnQkFBVSxFQUFFakIsZUFBM0I7QUFBQSxnQkFBNkNKLElBQUksQ0FBQ29CO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU1ILENBMUNEOztLQUFNckIsVztBQTRDU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RzL3Bvc3QtZGV0YWlsL1Bvc3RDb250ZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IFByaXNtTGlnaHQgYXMgU3ludGF4SGlnaGxpZ2h0ZXIgfSBmcm9tICdyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXInXG5pbXBvcnQgYXRvbURhcmsgZnJvbSAncmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL3N0eWxlcy9wcmlzbS9hdG9tLWRhcmsnXG5pbXBvcnQganMgZnJvbSAncmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL2xhbmd1YWdlcy9wcmlzbS9qYXZhc2NyaXB0J1xuaW1wb3J0IGNzcyBmcm9tICdyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvbGFuZ3VhZ2VzL3ByaXNtL2NzcydcblxuaW1wb3J0IFBvc3RIZWFkZXIgZnJvbSAnLi9Qb3N0SGVhZGVyJ1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9wb3N0LWNvbnRlbnQubW9kdWxlLmNzcydcblxuY29uc3QgUG9zdENvbnRlbnQgPSAoeyBwb3N0IH0pID0+IHtcbiAgICBjb25zdCBpbWFnZVBhdGggPSBgL2ltYWdlcy9wb3N0cy8ke3Bvc3Quc2x1Z30vJHtwb3N0LmltYWdlfWBcblxuICAgIGNvbnN0IGN1c3RvbVJlbmRlcmVycyA9IHtcbiAgICAgICAgLy8gaW1nKGltYWdlKSB7XG4gICAgICAgIC8vICAgcmV0dXJuIChcbiAgICAgICAgLy8gICAgIDxJbWFnZVxuICAgICAgICAvLyAgICAgICBzcmM9e2AvaW1hZ2VzL3Bvc3RzLyR7cG9zdC5zbHVnfS8ke2ltYWdlLnNyY31gfVxuICAgICAgICAvLyAgICAgICBhbHQ9e2ltYWdlLmFsdH1cbiAgICAgICAgLy8gICAgICAgd2lkdGg9ezYwMH1cbiAgICAgICAgLy8gICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgIC8vICAgICAvPlxuICAgICAgICAvLyAgICk7XG4gICAgICAgIC8vIH0sXG4gICAgICAgIHAocGFyYWdyYXBoKSB7XG4gICAgICAgICAgICBjb25zdCB7IG5vZGUgfSA9IHBhcmFncmFwaFxuXG4gICAgICAgICAgICBpZiAobm9kZS5jaGlsZHJlblswXS50YWdOYW1lID09PSAnaW1nJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbm9kZS5jaGlsZHJlblswXVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17YC9pbWFnZXMvcG9zdHMvJHtwb3N0LnNsdWd9LyR7aW1hZ2UucHJvcGVydGllcy5zcmN9YH0gYWx0PXtpbWFnZS5hbHR9IHdpZHRoPXs2MDB9IGhlaWdodD17MzAwfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiA8cD57cGFyYWdyYXBoLmNoaWxkcmVufTwvcD5cbiAgICAgICAgfSxcblxuICAgICAgICBjb2RlKGNvZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiB9ID0gY29kZVxuICAgICAgICAgICAgY29uc3QgbGFuZ3VhZ2UgPSBjbGFzc05hbWUuc3BsaXQoJy0nKVsxXVxuICAgICAgICAgICAgcmV0dXJuIDxTeW50YXhIaWdobGlnaHRlciBzdHlsZT17YXRvbURhcmt9IGxhbmd1YWdlPXtsYW5ndWFnZX0gY2hpbGRyZW49e3ZhbHVlfSAvPlxuICAgICAgICB9LFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgICA8UG9zdEhlYWRlciBpbWFnZT17aW1hZ2VQYXRofSB0aXRsZT17cG9zdC50aXRsZX0gLz5cbiAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duIGNvbXBvbmVudHM9e2N1c3RvbVJlbmRlcmVyc30+e3Bvc3QuY29udGVudH08L1JlYWN0TWFya2Rvd24+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RDb250ZW50XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/posts/post-detail/PostContent.js\n");

/***/ })

})