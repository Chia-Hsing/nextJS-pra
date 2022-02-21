webpackHotUpdate_N_E("pages/contact",{

/***/ "./components/contact/ContactForm.js":
/*!*******************************************!*\
  !*** ./components/contact/ContactForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-form.module.css */ \"./components/contact/contact-form.module.css\");\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contact_form_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/chia/Projects/I/NextJS/nextjs-course/components/contact/ContactForm.js\";\n\n\n\nfunction ContactForm() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contact,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"How can I help you?\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.form,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.controls,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"email\",\n            children: \"Your Email\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 12,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"email\",\n            id: \"email\",\n            required: true,\n            onChange: function onChange(event) {\n              return setEnteredEmail(event.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"name\",\n            children: \"Your Name\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"text\",\n            id: \"name\",\n            required: true,\n            onChange: function onChange(event) {\n              return setEnteredName(event.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"message\",\n          children: \"Your Message\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n          id: \"message\",\n          rows: \"5\",\n          required: true,\n          onChange: function onChange(event) {\n            return setEnteredMessage(event.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          children: \"Send Message\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, this), notification && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Notification, {\n      status: notification.status,\n      title: notification.title,\n      message: notification.message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 30\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, this);\n}\n\n_c = ContactForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"ContactForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0L0NvbnRhY3RGb3JtLmpzP2NiMWEiXSwibmFtZXMiOlsiQ29udGFjdEZvcm0iLCJjbGFzc2VzIiwiY29udGFjdCIsImZvcm0iLCJjb250cm9scyIsImNvbnRyb2wiLCJldmVudCIsInNldEVudGVyZWRFbWFpbCIsInRhcmdldCIsInZhbHVlIiwic2V0RW50ZXJlZE5hbWUiLCJzZXRFbnRlcmVkTWVzc2FnZSIsImFjdGlvbnMiLCJub3RpZmljYXRpb24iLCJzdGF0dXMiLCJ0aXRsZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsU0FBU0EsV0FBVCxHQUF1QjtBQUNuQixzQkFDSTtBQUFTLGFBQVMsRUFBRUMsK0RBQU8sQ0FBQ0MsT0FBNUI7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBTSxlQUFTLEVBQUVELCtEQUFPLENBQUNFLElBQXpCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFRiwrREFBTyxDQUFDRyxRQUF4QjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBRUgsK0RBQU8sQ0FBQ0ksT0FBeEI7QUFBQSxrQ0FDSTtBQUFPLG1CQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQU8sZ0JBQUksRUFBQyxPQUFaO0FBQW9CLGNBQUUsRUFBQyxPQUF2QjtBQUErQixvQkFBUSxNQUF2QztBQUF3QyxvQkFBUSxFQUFFLGtCQUFDQyxLQUFEO0FBQUEscUJBQVdDLGVBQWUsQ0FBQ0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEtBQWQsQ0FBMUI7QUFBQTtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUtJO0FBQUssbUJBQVMsRUFBRVIsK0RBQU8sQ0FBQ0ksT0FBeEI7QUFBQSxrQ0FDSTtBQUFPLG1CQUFPLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQW1CLGNBQUUsRUFBQyxNQUF0QjtBQUE2QixvQkFBUSxNQUFyQztBQUFzQyxvQkFBUSxFQUFFLGtCQUFDQyxLQUFEO0FBQUEscUJBQVdJLGNBQWMsQ0FBQ0osS0FBSyxDQUFDRSxNQUFOLENBQWFDLEtBQWQsQ0FBekI7QUFBQTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQVdJO0FBQUssaUJBQVMsRUFBRVIsK0RBQU8sQ0FBQ0ksT0FBeEI7QUFBQSxnQ0FDSTtBQUFPLGlCQUFPLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQVUsWUFBRSxFQUFDLFNBQWI7QUFBdUIsY0FBSSxFQUFDLEdBQTVCO0FBQWdDLGtCQUFRLE1BQXhDO0FBQXlDLGtCQUFRLEVBQUUsa0JBQUNDLEtBQUQ7QUFBQSxtQkFBV0ssaUJBQWlCLENBQUNMLEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUFkLENBQTVCO0FBQUE7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYSixlQWdCSTtBQUFLLGlCQUFTLEVBQUVSLCtEQUFPLENBQUNXLE9BQXhCO0FBQUEsK0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLEVBc0JLQyxZQUFZLGlCQUFJLHFFQUFDLFlBQUQ7QUFBYyxZQUFNLEVBQUVBLFlBQVksQ0FBQ0MsTUFBbkM7QUFBMkMsV0FBSyxFQUFFRCxZQUFZLENBQUNFLEtBQS9EO0FBQXNFLGFBQU8sRUFBRUYsWUFBWSxDQUFDRztBQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEJyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTBCSDs7S0EzQlFoQixXO0FBNkJNQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY29udGFjdC9Db250YWN0Rm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9jb250YWN0LWZvcm0ubW9kdWxlLmNzcydcblxuZnVuY3Rpb24gQ29udGFjdEZvcm0oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhY3R9PlxuICAgICAgICAgICAgPGgxPkhvdyBjYW4gSSBoZWxwIHlvdT88L2gxPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2xzfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+WW91ciBFbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHJlcXVpcmVkIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEVudGVyZWRFbWFpbChldmVudC50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5Zb3VyIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgcmVxdWlyZWQgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0RW50ZXJlZE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiPllvdXIgTWVzc2FnZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cIm1lc3NhZ2VcIiByb3dzPVwiNVwiIHJlcXVpcmVkIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEVudGVyZWRNZXNzYWdlKGV2ZW50LnRhcmdldC52YWx1ZSl9PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5TZW5kIE1lc3NhZ2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIHtub3RpZmljYXRpb24gJiYgPE5vdGlmaWNhdGlvbiBzdGF0dXM9e25vdGlmaWNhdGlvbi5zdGF0dXN9IHRpdGxlPXtub3RpZmljYXRpb24udGl0bGV9IG1lc3NhZ2U9e25vdGlmaWNhdGlvbi5tZXNzYWdlfSAvPn1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/contact/ContactForm.js\n");

/***/ })

})