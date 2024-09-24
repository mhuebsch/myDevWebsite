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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var app_components_videoPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/components/videoPlayer */ \"(app-pages-browser)/./app/components/videoPlayer.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n// import { useEffect, useRef } from 'react';\n\nconst Section = (param)=>{\n    let { children, reverse } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col md:flex-row \".concat(reverse ? \"md:flex-row-reverse\" : \"md:flex-row\", \" items-center justify-between w-full py-10\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Section;\nconst FadeInWhenVisible = (param)=>{\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        initial: {\n            opacity: 0\n        },\n        whileInView: {\n            opacity: 1\n        },\n        viewport: {\n            once: true\n        },\n        transition: {\n            duration: 0.6\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = FadeInWhenVisible;\nconst CustomComponentsPage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-center h-screen w-screen max-w-[70%] lg:max-w-[1200px] mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"min-h-screen\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-center items-center w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-4xl font-semibold animate-fade-in lowercase text-green-300 py-16\",\n                            children: \"Customizable Components\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"w-3/4 text-center\",\n                            children: \"With this project, I focused on developing custom components with extensive configuration options. I created these from the ground up using primarily vanilla JavaScript, HTML, and SASS, ensuring seamless integration with an AngularJS-based software platform.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FadeInWhenVisible, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full p-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-3xl font-bold text-green-700\",\n                                        children: \"presentation tools\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mt-4 text-lg\",\n                                        children: \"The components are design tools built for users to dynamically create layouts with content in an online presentation software.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FadeInWhenVisible, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full p-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/images/featured-components.png\",\n                                    alt: \"Section 1 Image\",\n                                    className: \"w-full h-auto object-cover\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {\n                    reverse: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FadeInWhenVisible, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full p-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-3xl font-bold text-green-700\",\n                                        children: \"custom settings\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mt-4 text-lg\",\n                                        children: \"Every component includes custom settings based on the capbiliity of the component itself, as well as positioning, styling, and accessibility options.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FadeInWhenVisible, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full p-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(app_components_videoPlayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    src: \"/videos/flip-panel-settings-vid.mp4\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FadeInWhenVisible, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full p-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-3xl font-bold text-green-700\",\n                                        children: \"engaging design\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                        lineNumber: 103,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mt-4 text-lg\",\n                                        children: \"Ultimately, the components deliver a distinctive, compelling, and visually impressive presentation.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                        lineNumber: 106,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FadeInWhenVisible, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full p-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(app_components_videoPlayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    src: \"/videos/gameday-technologies-menu.mp4\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                    lineNumber: 117,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_c2 = CustomComponentsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomComponentsPage);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Section\");\n$RefreshReg$(_c1, \"FadeInWhenVisible\");\n$RefreshReg$(_c2, \"CustomComponentsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wcm9qZWN0cy9jdXN0b20tY29tcHMvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUV1QztBQUN2Qyw2Q0FBNkM7QUFDVztBQUd4RCxNQUFNRSxVQUFVO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxPQUFPLEVBQUU7SUFDcEMscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVcsNkJBRVYsT0FEQ0YsVUFBVSx3QkFBd0IsZUFDbkM7a0JBRUFEOzs7Ozs7QUFHUDtLQVZNRDtBQVlOLE1BQU1LLG9CQUFvQjtRQUFDLEVBQUVKLFFBQVEsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ0gsaURBQU1BLENBQUNLLEdBQUc7UUFDVEcsU0FBUztZQUFFQyxTQUFTO1FBQUU7UUFDdEJDLGFBQWE7WUFBRUQsU0FBUztRQUFFO1FBQzFCRSxVQUFVO1lBQUVDLE1BQU07UUFBSztRQUN2QkMsWUFBWTtZQUFFQyxVQUFVO1FBQUk7a0JBRTNCWDs7Ozs7O0FBR1A7TUFYTUk7QUFhTixNQUFNUSx1QkFBdUI7SUFHM0IscUJBQ0UsOERBQUNWO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNVOzRCQUFHVixXQUFVO3NDQUF3RTs7Ozs7O3NDQUd0Riw4REFBQ1c7NEJBQUVYLFdBQVU7c0NBQW9COzs7Ozs7Ozs7Ozs7OEJBU25DLDhEQUFDSjs7c0NBQ0MsOERBQUNLO3NDQUNDLDRFQUFDRjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNZO3dDQUFHWixXQUFVO2tEQUFvQzs7Ozs7O2tEQUdsRCw4REFBQ1c7d0NBQUVYLFdBQVU7a0RBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQU9oQyw4REFBQ0M7c0NBQ0MsNEVBQUNGO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDYTtvQ0FDQ0MsS0FBSTtvQ0FDSkMsS0FBSTtvQ0FDSmYsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFPbEIsOERBQUNKO29CQUFRRSxPQUFPOztzQ0FDZCw4REFBQ0c7c0NBQ0MsNEVBQUNGO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ1k7d0NBQUdaLFdBQVU7a0RBQW9DOzs7Ozs7a0RBR2xELDhEQUFDVzt3Q0FBRVgsV0FBVTtrREFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBUWhDLDhEQUFDQztzQ0FDRCw0RUFBQ0Y7Z0NBQUlDLFdBQVU7MENBRVgsNEVBQUNMLGtFQUFjQTtvQ0FBQ21CLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBTTFCLDhEQUFDbEI7O3NDQUNDLDhEQUFDSztzQ0FDQyw0RUFBQ0Y7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDWTt3Q0FBR1osV0FBVTtrREFBb0M7Ozs7OztrREFHbEQsOERBQUNXO3dDQUFFWCxXQUFVO2tEQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FPaEMsOERBQUNDO3NDQUVDLDRFQUFDRjtnQ0FBSUMsV0FBVTswQ0FFYiw0RUFBQ0wsa0VBQWNBO29DQUFDbUIsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2xDO01BM0ZNTDtBQTZGTiwrREFBZUEsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wcm9qZWN0cy9jdXN0b20tY29tcHMvcGFnZS5qcz9mOGNiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG4vLyBpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBWaWRlb0NvbXBvbmVudCBmcm9tICdhcHAvY29tcG9uZW50cy92aWRlb1BsYXllcic7ICBcblxuXG5jb25zdCBTZWN0aW9uID0gKHsgY2hpbGRyZW4sIHJldmVyc2UgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgJHtcbiAgICAgICAgcmV2ZXJzZSA/ICdtZDpmbGV4LXJvdy1yZXZlcnNlJyA6ICdtZDpmbGV4LXJvdydcbiAgICAgIH0gaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgcHktMTBgfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IEZhZGVJbldoZW5WaXNpYmxlID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNiB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5jb25zdCBDdXN0b21Db21wb25lbnRzUGFnZSA9ICgpID0+IHtcbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtc2NyZWVuIHctc2NyZWVuIG1heC13LVs3MCVdIGxnOm1heC13LVsxMjAwcHhdIG14LWF1dG9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtc2VtaWJvbGQgYW5pbWF0ZS1mYWRlLWluIGxvd2VyY2FzZSB0ZXh0LWdyZWVuLTMwMCBweS0xNlwiPlxuICAgICAgICAgICAgQ3VzdG9taXphYmxlIENvbXBvbmVudHNcbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInctMy80IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICBXaXRoIHRoaXMgcHJvamVjdCwgSSBmb2N1c2VkIG9uIGRldmVsb3BpbmcgY3VzdG9tIGNvbXBvbmVudHMgd2l0aFxuICAgICAgICAgICAgZXh0ZW5zaXZlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucy4gSSBjcmVhdGVkIHRoZXNlIGZyb20gdGhlIGdyb3VuZCB1cFxuICAgICAgICAgICAgdXNpbmcgcHJpbWFyaWx5IHZhbmlsbGEgSmF2YVNjcmlwdCwgSFRNTCwgYW5kIFNBU1MsIGVuc3VyaW5nIHNlYW1sZXNzXG4gICAgICAgICAgICBpbnRlZ3JhdGlvbiB3aXRoIGFuIEFuZ3VsYXJKUy1iYXNlZCBzb2Z0d2FyZSBwbGF0Zm9ybS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBTZWN0aW9uIDEgKi99XG4gICAgICAgIDxTZWN0aW9uPlxuICAgICAgICAgIDxGYWRlSW5XaGVuVmlzaWJsZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtNlwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtZ3JlZW4tNzAwXCI+XG4gICAgICAgICAgICAgICAgcHJlc2VudGF0aW9uIHRvb2xzXG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgdGV4dC1sZ1wiPlxuICAgICAgICAgICAgICAgIFRoZSBjb21wb25lbnRzIGFyZSBkZXNpZ24gdG9vbHMgYnVpbHQgZm9yIHVzZXJzIHRvIGR5bmFtaWNhbGx5XG4gICAgICAgICAgICAgICAgY3JlYXRlIGxheW91dHMgd2l0aCBjb250ZW50IGluIGFuIG9ubGluZSBwcmVzZW50YXRpb24gc29mdHdhcmUuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRmFkZUluV2hlblZpc2libGU+XG5cbiAgICAgICAgICA8RmFkZUluV2hlblZpc2libGU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTZcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvZmVhdHVyZWQtY29tcG9uZW50cy5wbmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIlNlY3Rpb24gMSBJbWFnZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9GYWRlSW5XaGVuVmlzaWJsZT5cbiAgICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICAgIHsvKiBTZWN0aW9uIDIgKi99XG4gICAgICAgIDxTZWN0aW9uIHJldmVyc2U+XG4gICAgICAgICAgPEZhZGVJbldoZW5WaXNpYmxlPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC02XCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ncmVlbi03MDBcIj5cbiAgICAgICAgICAgICAgICBjdXN0b20gc2V0dGluZ3NcbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LWxnXCI+XG4gICAgICAgICAgICAgICAgRXZlcnkgY29tcG9uZW50IGluY2x1ZGVzIGN1c3RvbSBzZXR0aW5ncyBiYXNlZCBvbiB0aGUgY2FwYmlsaWl0eVxuICAgICAgICAgICAgICAgIG9mIHRoZSBjb21wb25lbnQgaXRzZWxmLCBhcyB3ZWxsIGFzIHBvc2l0aW9uaW5nLCBzdHlsaW5nLCBhbmRcbiAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5IG9wdGlvbnMuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRmFkZUluV2hlblZpc2libGU+XG5cbiAgICAgICAgICA8RmFkZUluV2hlblZpc2libGU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC02XCI+XG4gICAgICAgICAgICAgIHsvKiBVc2UgdGhlIFZpZGVvQ29tcG9uZW50ICovfVxuICAgICAgICAgICAgICA8VmlkZW9Db21wb25lbnQgc3JjPVwiL3ZpZGVvcy9mbGlwLXBhbmVsLXNldHRpbmdzLXZpZC5tcDRcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9GYWRlSW5XaGVuVmlzaWJsZT5cbiAgICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICAgIHsvKiBTZWN0aW9uIDMgKi99XG4gICAgICAgIDxTZWN0aW9uPlxuICAgICAgICAgIDxGYWRlSW5XaGVuVmlzaWJsZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtNlwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtZ3JlZW4tNzAwXCI+XG4gICAgICAgICAgICAgICAgZW5nYWdpbmcgZGVzaWduXG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgdGV4dC1sZ1wiPlxuICAgICAgICAgICAgICAgIFVsdGltYXRlbHksIHRoZSBjb21wb25lbnRzIGRlbGl2ZXIgYSBkaXN0aW5jdGl2ZSwgY29tcGVsbGluZyxcbiAgICAgICAgICAgICAgICBhbmQgdmlzdWFsbHkgaW1wcmVzc2l2ZSBwcmVzZW50YXRpb24uXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRmFkZUluV2hlblZpc2libGU+XG5cbiAgICAgICAgICA8RmFkZUluV2hlblZpc2libGU+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtNlwiPlxuICAgICAgICAgICAgICB7LyogVXNlIHRoZSBWaWRlb0NvbXBvbmVudCAqL31cbiAgICAgICAgICAgICAgPFZpZGVvQ29tcG9uZW50IHNyYz1cIi92aWRlb3MvZ2FtZWRheS10ZWNobm9sb2dpZXMtbWVudS5tcDRcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9GYWRlSW5XaGVuVmlzaWJsZT5cbiAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21Db21wb25lbnRzUGFnZTtcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJWaWRlb0NvbXBvbmVudCIsIlNlY3Rpb24iLCJjaGlsZHJlbiIsInJldmVyc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJGYWRlSW5XaGVuVmlzaWJsZSIsImluaXRpYWwiLCJvcGFjaXR5Iiwid2hpbGVJblZpZXciLCJ2aWV3cG9ydCIsIm9uY2UiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJDdXN0b21Db21wb25lbnRzUGFnZSIsImgxIiwicCIsImgyIiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/projects/custom-comps/page.js\n"));

/***/ })

});