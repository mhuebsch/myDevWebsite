"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/projects/custom-comps/page",{

/***/ "(app-pages-browser)/./app/projects/custom-comps/page.js":
/*!*******************************************!*\
  !*** ./app/projects/custom-comps/page.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var app_components_videoPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/components/videoPlayer */ \"(app-pages-browser)/./app/components/videoPlayer.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst Section = (param)=>{\n    let { children, reverse } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col md:flex-row \".concat(reverse ? \"md:flex-row-reverse\" : \"md:flex-row\", \" items-center justify-between w-full py-10\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Section;\nconst FadeInWhenVisible = (param)=>{\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        initial: {\n            opacity: 0\n        },\n        whileInView: {\n            opacity: 1\n        },\n        viewport: {\n            once: true\n        },\n        transition: {\n            duration: 0.6\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = FadeInWhenVisible;\nconst CustomComponentsPage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-center h-screen w-screen max-w-[70%] lg:max-w-[1200px] mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"min-h-screen\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-center items-center w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-4xl text-center font-semibold animate-fade-in lowercase text-green-300 py-16\",\n                            children: \"Customizable Components\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"w-3/4 text-center\",\n                            children: \"With this project, I developed 20+ custom components with extensive configuration options. I created these from the ground up using primarily vanilla JavaScript, HTML, and SASS, ensuring seamless integration with an AngularJS-based software platform.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FadeInWhenVisible, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full p-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-3xl font-bold text-green-700\",\n                                        children: \"presentation tools\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mt-4 text-lg\",\n                                        children: \"The components are design tools built for users to dynamically create layouts with content in an online presentation software.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FadeInWhenVisible, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full p-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/images/featured-components.png\",\n                                    alt: \"Section 1 Image\",\n                                    className: \"w-full h-auto object-cover\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {\n                    reverse: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FadeInWhenVisible, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full p-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-3xl font-bold text-green-700\",\n                                        children: \"custom settings\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mt-4 text-lg\",\n                                        children: \"Every component includes custom settings based on the capbiliity of the component itself, as well as positioning, styling, and accessibility options.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FadeInWhenVisible, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full p-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(app_components_videoPlayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    src: \"/videos/flip-panel-settings-vid.mp4\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FadeInWhenVisible, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full p-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-3xl font-bold text-green-700\",\n                                        children: \"engaging design\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                        lineNumber: 98,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mt-4 text-lg\",\n                                        children: \"Ultimately, the components deliver a distinctive, compelling, and visually impressive presentation.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FadeInWhenVisible, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full p-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(app_components_videoPlayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    src: \"/videos/gameday-technologies-menu.mp4\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                    lineNumber: 110,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_c2 = CustomComponentsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomComponentsPage);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Section\");\n$RefreshReg$(_c1, \"FadeInWhenVisible\");\n$RefreshReg$(_c2, \"CustomComponentsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wcm9qZWN0cy9jdXN0b20tY29tcHMvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUV1QztBQUNpQjtBQUV4RCxNQUFNRSxVQUFVO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxPQUFPLEVBQUU7SUFDcEMscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVcsNkJBRVYsT0FEQ0YsVUFBVSx3QkFBd0IsZUFDbkM7a0JBRUFEOzs7Ozs7QUFHUDtLQVZNRDtBQVlOLE1BQU1LLG9CQUFvQjtRQUFDLEVBQUVKLFFBQVEsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ0gsaURBQU1BLENBQUNLLEdBQUc7UUFDVEcsU0FBUztZQUFFQyxTQUFTO1FBQUU7UUFDdEJDLGFBQWE7WUFBRUQsU0FBUztRQUFFO1FBQzFCRSxVQUFVO1lBQUVDLE1BQU07UUFBSztRQUN2QkMsWUFBWTtZQUFFQyxVQUFVO1FBQUk7a0JBRTNCWDs7Ozs7O0FBR1A7TUFYTUk7QUFhTixNQUFNUSx1QkFBdUI7SUFDM0IscUJBQ0UsOERBQUNWO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNVOzRCQUFHVixXQUFVO3NDQUFvRjs7Ozs7O3NDQUdsRyw4REFBQ1c7NEJBQUVYLFdBQVU7c0NBQW9COzs7Ozs7Ozs7Ozs7OEJBU25DLDhEQUFDSjs7c0NBQ0MsOERBQUNLO3NDQUNDLDRFQUFDRjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNZO3dDQUFHWixXQUFVO2tEQUFvQzs7Ozs7O2tEQUdsRCw4REFBQ1c7d0NBQUVYLFdBQVU7a0RBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQU9oQyw4REFBQ0M7c0NBQ0MsNEVBQUNGO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDYTtvQ0FDQ0MsS0FBSTtvQ0FDSkMsS0FBSTtvQ0FDSmYsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFPbEIsOERBQUNKO29CQUFRRSxPQUFPOztzQ0FDZCw4REFBQ0c7c0NBQ0MsNEVBQUNGO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ1k7d0NBQUdaLFdBQVU7a0RBQW9DOzs7Ozs7a0RBR2xELDhEQUFDVzt3Q0FBRVgsV0FBVTtrREFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBUWhDLDhEQUFDQztzQ0FDQyw0RUFBQ0Y7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNMLGtFQUFjQTtvQ0FBQ21CLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBTTFCLDhEQUFDbEI7O3NDQUNDLDhEQUFDSztzQ0FDQyw0RUFBQ0Y7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDWTt3Q0FBR1osV0FBVTtrREFBb0M7Ozs7OztrREFHbEQsOERBQUNXO3dDQUFFWCxXQUFVO2tEQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FPaEMsOERBQUNDO3NDQUNDLDRFQUFDRjtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0wsa0VBQWNBO29DQUFDbUIsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2xDO01BdEZNTDtBQXdGTiwrREFBZUEsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wcm9qZWN0cy9jdXN0b20tY29tcHMvcGFnZS5qcz9mOGNiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgVmlkZW9Db21wb25lbnQgZnJvbSAnYXBwL2NvbXBvbmVudHMvdmlkZW9QbGF5ZXInO1xuXG5jb25zdCBTZWN0aW9uID0gKHsgY2hpbGRyZW4sIHJldmVyc2UgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgJHtcbiAgICAgICAgcmV2ZXJzZSA/ICdtZDpmbGV4LXJvdy1yZXZlcnNlJyA6ICdtZDpmbGV4LXJvdydcbiAgICAgIH0gaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgcHktMTBgfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IEZhZGVJbldoZW5WaXNpYmxlID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNiB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5jb25zdCBDdXN0b21Db21wb25lbnRzUGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtc2NyZWVuIHctc2NyZWVuIG1heC13LVs3MCVdIGxnOm1heC13LVsxMjAwcHhdIG14LWF1dG9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIHRleHQtY2VudGVyIGZvbnQtc2VtaWJvbGQgYW5pbWF0ZS1mYWRlLWluIGxvd2VyY2FzZSB0ZXh0LWdyZWVuLTMwMCBweS0xNlwiPlxuICAgICAgICAgICAgQ3VzdG9taXphYmxlIENvbXBvbmVudHNcbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInctMy80IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICBXaXRoIHRoaXMgcHJvamVjdCwgSSBkZXZlbG9wZWQgMjArIGN1c3RvbSBjb21wb25lbnRzIHdpdGhcbiAgICAgICAgICAgIGV4dGVuc2l2ZSBjb25maWd1cmF0aW9uIG9wdGlvbnMuIEkgY3JlYXRlZCB0aGVzZSBmcm9tIHRoZSBncm91bmQgdXBcbiAgICAgICAgICAgIHVzaW5nIHByaW1hcmlseSB2YW5pbGxhIEphdmFTY3JpcHQsIEhUTUwsIGFuZCBTQVNTLCBlbnN1cmluZ1xuICAgICAgICAgICAgc2VhbWxlc3MgaW50ZWdyYXRpb24gd2l0aCBhbiBBbmd1bGFySlMtYmFzZWQgc29mdHdhcmUgcGxhdGZvcm0uXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogU2VjdGlvbiAxICovfVxuICAgICAgICA8U2VjdGlvbj5cbiAgICAgICAgICA8RmFkZUluV2hlblZpc2libGU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTZcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWdyZWVuLTcwMFwiPlxuICAgICAgICAgICAgICAgIHByZXNlbnRhdGlvbiB0b29sc1xuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC00IHRleHQtbGdcIj5cbiAgICAgICAgICAgICAgICBUaGUgY29tcG9uZW50cyBhcmUgZGVzaWduIHRvb2xzIGJ1aWx0IGZvciB1c2VycyB0byBkeW5hbWljYWxseVxuICAgICAgICAgICAgICAgIGNyZWF0ZSBsYXlvdXRzIHdpdGggY29udGVudCBpbiBhbiBvbmxpbmUgcHJlc2VudGF0aW9uIHNvZnR3YXJlLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0ZhZGVJbldoZW5WaXNpYmxlPlxuXG4gICAgICAgICAgPEZhZGVJbldoZW5WaXNpYmxlPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC02XCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2ZlYXR1cmVkLWNvbXBvbmVudHMucG5nXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJTZWN0aW9uIDEgSW1hZ2VcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRmFkZUluV2hlblZpc2libGU+XG4gICAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgICB7LyogU2VjdGlvbiAyICovfVxuICAgICAgICA8U2VjdGlvbiByZXZlcnNlPlxuICAgICAgICAgIDxGYWRlSW5XaGVuVmlzaWJsZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtNlwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtZ3JlZW4tNzAwXCI+XG4gICAgICAgICAgICAgICAgY3VzdG9tIHNldHRpbmdzXG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgdGV4dC1sZ1wiPlxuICAgICAgICAgICAgICAgIEV2ZXJ5IGNvbXBvbmVudCBpbmNsdWRlcyBjdXN0b20gc2V0dGluZ3MgYmFzZWQgb24gdGhlIGNhcGJpbGlpdHlcbiAgICAgICAgICAgICAgICBvZiB0aGUgY29tcG9uZW50IGl0c2VsZiwgYXMgd2VsbCBhcyBwb3NpdGlvbmluZywgc3R5bGluZywgYW5kXG4gICAgICAgICAgICAgICAgYWNjZXNzaWJpbGl0eSBvcHRpb25zLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0ZhZGVJbldoZW5WaXNpYmxlPlxuXG4gICAgICAgICAgPEZhZGVJbldoZW5WaXNpYmxlPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC02XCI+XG4gICAgICAgICAgICAgIDxWaWRlb0NvbXBvbmVudCBzcmM9XCIvdmlkZW9zL2ZsaXAtcGFuZWwtc2V0dGluZ3MtdmlkLm1wNFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0ZhZGVJbldoZW5WaXNpYmxlPlxuICAgICAgICA8L1NlY3Rpb24+XG5cbiAgICAgICAgey8qIFNlY3Rpb24gMyAqL31cbiAgICAgICAgPFNlY3Rpb24+XG4gICAgICAgICAgPEZhZGVJbldoZW5WaXNpYmxlPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC02XCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ncmVlbi03MDBcIj5cbiAgICAgICAgICAgICAgICBlbmdhZ2luZyBkZXNpZ25cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LWxnXCI+XG4gICAgICAgICAgICAgICAgVWx0aW1hdGVseSwgdGhlIGNvbXBvbmVudHMgZGVsaXZlciBhIGRpc3RpbmN0aXZlLCBjb21wZWxsaW5nLFxuICAgICAgICAgICAgICAgIGFuZCB2aXN1YWxseSBpbXByZXNzaXZlIHByZXNlbnRhdGlvbi5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9GYWRlSW5XaGVuVmlzaWJsZT5cblxuICAgICAgICAgIDxGYWRlSW5XaGVuVmlzaWJsZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtNlwiPlxuICAgICAgICAgICAgICA8VmlkZW9Db21wb25lbnQgc3JjPVwiL3ZpZGVvcy9nYW1lZGF5LXRlY2hub2xvZ2llcy1tZW51Lm1wNFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0ZhZGVJbldoZW5WaXNpYmxlPlxuICAgICAgICA8L1NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUNvbXBvbmVudHNQYWdlO1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIlZpZGVvQ29tcG9uZW50IiwiU2VjdGlvbiIsImNoaWxkcmVuIiwicmV2ZXJzZSIsImRpdiIsImNsYXNzTmFtZSIsIkZhZGVJbldoZW5WaXNpYmxlIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ3aGlsZUluVmlldyIsInZpZXdwb3J0Iiwib25jZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsIkN1c3RvbUNvbXBvbmVudHNQYWdlIiwiaDEiLCJwIiwiaDIiLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/projects/custom-comps/page.js\n"));

/***/ })

});