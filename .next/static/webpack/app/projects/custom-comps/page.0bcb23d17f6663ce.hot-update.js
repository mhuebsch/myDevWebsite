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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Section = (param)=>{\n    let { children, reverse } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col md:flex-row \".concat(reverse ? \"md:flex-row-reverse\" : \"md:flex-row\", \" items-center justify-between w-full py-10\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Section;\nconst FadeInWhenVisible = (param)=>{\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        initial: {\n            opacity: 0\n        },\n        whileInView: {\n            opacity: 1\n        },\n        viewport: {\n            once: true\n        },\n        transition: {\n            duration: 0.6\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = FadeInWhenVisible;\nconst CustomComponentsPage = ()=>{\n    _s();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // Move useRef inside the component\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const videoElement = videoRef.current;\n        // Ensuring the video plays on load and loops\n        if (videoElement) {\n            videoElement.play(); // Automatically play video\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-center h-screen w-screen max-w-[70%] lg:max-w-[1200px] mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"min-h-screen\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-center items-center w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-semibold animate-fade-in lowercase text-green-300 py-16\",\n                        children: \"Customizable Components\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FadeInWhenVisible, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full p-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-3xl font-bold text-green-700\",\n                                        children: \"presentation tools\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mt-4 text-lg\",\n                                        children: \"The components are design tools built for users to dynamically create layouts with content in an online presentation software.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FadeInWhenVisible, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full p-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/images/featured-components.png\",\n                                    alt: \"Section 1 Image\",\n                                    className: \"w-full h-auto object-cover\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {\n                    reverse: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FadeInWhenVisible, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full p-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-3xl font-bold text-green-700\",\n                                        children: \"custom settings\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mt-4 text-lg\",\n                                        children: \"Every component includes custom settings based on the capbiliity of the component itself, as well as positioning, styling, and accessibility options.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FadeInWhenVisible, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full p-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                    ref: videoRef,\n                                    autoPlay: true,\n                                    loop: true,\n                                    muted: true,\n                                    playsInline: true,\n                                    style: {\n                                        width: \"100%\",\n                                        height: \"auto\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                            src: \"/videos/flip-panel-settings-vid.mp4\",\n                                            type: \"video/mp4\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                            lineNumber: 98,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        \"Your browser does not support the video tag.\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FadeInWhenVisible, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full p-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-3xl font-bold text-green-700\",\n                                        children: \"engaging design\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                        lineNumber: 112,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mt-4 text-lg\",\n                                        children: \"Ultimately, the components deliver a distinctive, compelling, and visually impressive presentation.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                        lineNumber: 113,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                lineNumber: 111,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FadeInWhenVisible, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full p-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                    ref: videoRef,\n                                    autoPlay: true,\n                                    loop: true,\n                                    muted: true,\n                                    playsInline: true,\n                                    style: {\n                                        width: \"100%\",\n                                        height: \"auto\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                            src: \"/videos/gameday-technologies-menu.mp4\",\n                                            type: \"video/mp4\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                            lineNumber: 130,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        \"Your browser does not support the video tag.\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                    lineNumber: 122,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                                lineNumber: 121,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n                    lineNumber: 109,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mhuebsch/Desktop/MyRepos/mhuebsch-nextJs/app/projects/custom-comps/page.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CustomComponentsPage, \"PdMsmLAy5JKU3vCrhAlqGYQfKuA=\");\n_c2 = CustomComponentsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomComponentsPage);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Section\");\n$RefreshReg$(_c1, \"FadeInWhenVisible\");\n$RefreshReg$(_c2, \"CustomComponentsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wcm9qZWN0cy9jdXN0b20tY29tcHMvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRXVDO0FBQ0c7QUFFMUMsTUFBTUcsVUFBVTtRQUFDLEVBQUVDLFFBQVEsRUFBRUMsT0FBTyxFQUFFO0lBQ3BDLHFCQUNFLDhEQUFDQztRQUNDQyxXQUFXLDZCQUVWLE9BRENGLFVBQVUsd0JBQXdCLGVBQ25DO2tCQUVBRDs7Ozs7O0FBR1A7S0FWTUQ7QUFZTixNQUFNSyxvQkFBb0I7UUFBQyxFQUFFSixRQUFRLEVBQUU7SUFDckMscUJBQ0UsOERBQUNKLGlEQUFNQSxDQUFDTSxHQUFHO1FBQ1RHLFNBQVM7WUFBRUMsU0FBUztRQUFFO1FBQ3RCQyxhQUFhO1lBQUVELFNBQVM7UUFBRTtRQUMxQkUsVUFBVTtZQUFFQyxNQUFNO1FBQUs7UUFDdkJDLFlBQVk7WUFBRUMsVUFBVTtRQUFJO2tCQUUzQlg7Ozs7OztBQUdQO01BWE1JO0FBYU4sTUFBTVEsdUJBQXVCOztJQUMzQixNQUFNQyxXQUFXZiw2Q0FBTUEsQ0FBQyxPQUFPLG1DQUFtQztJQUVsRUQsZ0RBQVNBLENBQUM7UUFDUixNQUFNaUIsZUFBZUQsU0FBU0UsT0FBTztRQUVyQyw2Q0FBNkM7UUFDN0MsSUFBSUQsY0FBYztZQUNoQkEsYUFBYUUsSUFBSSxJQUFJLDJCQUEyQjtRQUNsRDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDZDtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNjO3dCQUFHZCxXQUFVO2tDQUF3RTs7Ozs7Ozs7Ozs7OEJBTXhGLDhEQUFDSjs7c0NBQ0MsOERBQUNLO3NDQUNDLDRFQUFDRjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNlO3dDQUFHZixXQUFVO2tEQUFvQzs7Ozs7O2tEQUNsRCw4REFBQ2dCO3dDQUFFaEIsV0FBVTtrREFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBT2hDLDhEQUFDQztzQ0FDQyw0RUFBQ0Y7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNpQjtvQ0FDQ0MsS0FBSTtvQ0FDSkMsS0FBSTtvQ0FDSm5CLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBT2xCLDhEQUFDSjtvQkFBUUUsT0FBTzs7c0NBQ2QsOERBQUNHO3NDQUNDLDRFQUFDRjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNlO3dDQUFHZixXQUFVO2tEQUFvQzs7Ozs7O2tEQUNsRCw4REFBQ2dCO3dDQUFFaEIsV0FBVTtrREFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBUWhDLDhEQUFDQztzQ0FDQyw0RUFBQ0Y7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNvQjtvQ0FDQ0MsS0FBS1g7b0NBQ0xZLFFBQVE7b0NBQ1JDLElBQUk7b0NBQ0pDLEtBQUs7b0NBQ0xDLFdBQVc7b0NBQ1hDLE9BQU87d0NBQUVDLE9BQU87d0NBQVFDLFFBQVE7b0NBQU87O3NEQUV2Qyw4REFBQ0M7NENBQ0NYLEtBQUk7NENBQ0pZLE1BQUs7Ozs7Ozt3Q0FDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBUVYsOERBQUNsQzs7c0NBQ0MsOERBQUNLO3NDQUNDLDRFQUFDRjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNlO3dDQUFHZixXQUFVO2tEQUFvQzs7Ozs7O2tEQUNsRCw4REFBQ2dCO3dDQUFFaEIsV0FBVTtrREFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBT2hDLDhEQUFDQztzQ0FDQyw0RUFBQ0Y7Z0NBQUlDLFdBQVU7MENBQ2YsNEVBQUNvQjtvQ0FDR0MsS0FBS1g7b0NBQ0xZLFFBQVE7b0NBQ1JDLElBQUk7b0NBQ0pDLEtBQUs7b0NBQ0xDLFdBQVc7b0NBQ1hDLE9BQU87d0NBQUVDLE9BQU87d0NBQVFDLFFBQVE7b0NBQU87O3NEQUV2Qyw4REFBQ0M7NENBQ0NYLEtBQUk7NENBQ0pZLE1BQUs7Ozs7Ozt3Q0FDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNsQjtHQS9HTXJCO01BQUFBO0FBaUhOLCtEQUFlQSxvQkFBb0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3Byb2plY3RzL2N1c3RvbS1jb21wcy9wYWdlLmpzP2Y4Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTZWN0aW9uID0gKHsgY2hpbGRyZW4sIHJldmVyc2UgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgJHtcbiAgICAgICAgcmV2ZXJzZSA/ICdtZDpmbGV4LXJvdy1yZXZlcnNlJyA6ICdtZDpmbGV4LXJvdydcbiAgICAgIH0gaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgcHktMTBgfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IEZhZGVJbldoZW5WaXNpYmxlID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNiB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5jb25zdCBDdXN0b21Db21wb25lbnRzUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgdmlkZW9SZWYgPSB1c2VSZWYobnVsbCk7IC8vIE1vdmUgdXNlUmVmIGluc2lkZSB0aGUgY29tcG9uZW50XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB2aWRlb0VsZW1lbnQgPSB2aWRlb1JlZi5jdXJyZW50O1xuXG4gICAgLy8gRW5zdXJpbmcgdGhlIHZpZGVvIHBsYXlzIG9uIGxvYWQgYW5kIGxvb3BzXG4gICAgaWYgKHZpZGVvRWxlbWVudCkge1xuICAgICAgdmlkZW9FbGVtZW50LnBsYXkoKTsgLy8gQXV0b21hdGljYWxseSBwbGF5IHZpZGVvXG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtc2NyZWVuIHctc2NyZWVuIG1heC13LVs3MCVdIGxnOm1heC13LVsxMjAwcHhdIG14LWF1dG9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtc2VtaWJvbGQgYW5pbWF0ZS1mYWRlLWluIGxvd2VyY2FzZSB0ZXh0LWdyZWVuLTMwMCBweS0xNlwiPlxuICAgICAgICAgICAgQ3VzdG9taXphYmxlIENvbXBvbmVudHNcbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogU2VjdGlvbiAxICovfVxuICAgICAgICA8U2VjdGlvbj5cbiAgICAgICAgICA8RmFkZUluV2hlblZpc2libGU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTZcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWdyZWVuLTcwMFwiPnByZXNlbnRhdGlvbiB0b29sczwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgdGV4dC1sZ1wiPlxuICAgICAgICAgICAgICAgIFRoZSBjb21wb25lbnRzIGFyZSBkZXNpZ24gdG9vbHMgYnVpbHQgZm9yIHVzZXJzIHRvIGR5bmFtaWNhbGx5XG4gICAgICAgICAgICAgICAgY3JlYXRlIGxheW91dHMgd2l0aCBjb250ZW50IGluIGFuIG9ubGluZSBwcmVzZW50YXRpb24gc29mdHdhcmUuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRmFkZUluV2hlblZpc2libGU+XG5cbiAgICAgICAgICA8RmFkZUluV2hlblZpc2libGU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTZcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvZmVhdHVyZWQtY29tcG9uZW50cy5wbmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIlNlY3Rpb24gMSBJbWFnZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9GYWRlSW5XaGVuVmlzaWJsZT5cbiAgICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICAgIHsvKiBTZWN0aW9uIDIgKi99XG4gICAgICAgIDxTZWN0aW9uIHJldmVyc2U+XG4gICAgICAgICAgPEZhZGVJbldoZW5WaXNpYmxlPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC02XCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ncmVlbi03MDBcIj5jdXN0b20gc2V0dGluZ3M8L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC00IHRleHQtbGdcIj5cbiAgICAgICAgICAgICAgICBFdmVyeSBjb21wb25lbnQgaW5jbHVkZXMgY3VzdG9tIHNldHRpbmdzIGJhc2VkIG9uIHRoZSBjYXBiaWxpaXR5XG4gICAgICAgICAgICAgICAgb2YgdGhlIGNvbXBvbmVudCBpdHNlbGYsIGFzIHdlbGwgYXMgcG9zaXRpb25pbmcsIHN0eWxpbmcsIGFuZFxuICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHkgb3B0aW9ucy5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9GYWRlSW5XaGVuVmlzaWJsZT5cblxuICAgICAgICAgIDxGYWRlSW5XaGVuVmlzaWJsZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtNlwiPlxuICAgICAgICAgICAgICA8dmlkZW9cbiAgICAgICAgICAgICAgICByZWY9e3ZpZGVvUmVmfVxuICAgICAgICAgICAgICAgIGF1dG9QbGF5XG4gICAgICAgICAgICAgICAgbG9vcFxuICAgICAgICAgICAgICAgIG11dGVkXG4gICAgICAgICAgICAgICAgcGxheXNJbmxpbmVcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICdhdXRvJyB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNvdXJjZVxuICAgICAgICAgICAgICAgICAgc3JjPVwiL3ZpZGVvcy9mbGlwLXBhbmVsLXNldHRpbmdzLXZpZC5tcDRcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInZpZGVvL21wNFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgdmlkZW8gdGFnLlxuICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9GYWRlSW5XaGVuVmlzaWJsZT5cbiAgICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICAgIHsvKiBTZWN0aW9uIDMgKi99XG4gICAgICAgIDxTZWN0aW9uPlxuICAgICAgICAgIDxGYWRlSW5XaGVuVmlzaWJsZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtNlwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtZ3JlZW4tNzAwXCI+ZW5nYWdpbmcgZGVzaWduPC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LWxnXCI+XG4gICAgICAgICAgICAgICAgVWx0aW1hdGVseSwgdGhlIGNvbXBvbmVudHMgZGVsaXZlciBhIGRpc3RpbmN0aXZlLCBjb21wZWxsaW5nLFxuICAgICAgICAgICAgICAgIGFuZCB2aXN1YWxseSBpbXByZXNzaXZlIHByZXNlbnRhdGlvbi5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9GYWRlSW5XaGVuVmlzaWJsZT5cblxuICAgICAgICAgIDxGYWRlSW5XaGVuVmlzaWJsZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtNlwiPlxuICAgICAgICAgICAgPHZpZGVvXG4gICAgICAgICAgICAgICAgcmVmPXt2aWRlb1JlZn1cbiAgICAgICAgICAgICAgICBhdXRvUGxheVxuICAgICAgICAgICAgICAgIGxvb3BcbiAgICAgICAgICAgICAgICBtdXRlZFxuICAgICAgICAgICAgICAgIHBsYXlzSW5saW5lXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnYXV0bycgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzb3VyY2VcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi92aWRlb3MvZ2FtZWRheS10ZWNobm9sb2dpZXMtbWVudS5tcDRcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInZpZGVvL21wNFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgdmlkZW8gdGFnLlxuICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9GYWRlSW5XaGVuVmlzaWJsZT5cbiAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21Db21wb25lbnRzUGFnZTtcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJTZWN0aW9uIiwiY2hpbGRyZW4iLCJyZXZlcnNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiRmFkZUluV2hlblZpc2libGUiLCJpbml0aWFsIiwib3BhY2l0eSIsIndoaWxlSW5WaWV3Iiwidmlld3BvcnQiLCJvbmNlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiQ3VzdG9tQ29tcG9uZW50c1BhZ2UiLCJ2aWRlb1JlZiIsInZpZGVvRWxlbWVudCIsImN1cnJlbnQiLCJwbGF5IiwiaDEiLCJoMiIsInAiLCJpbWciLCJzcmMiLCJhbHQiLCJ2aWRlbyIsInJlZiIsImF1dG9QbGF5IiwibG9vcCIsIm11dGVkIiwicGxheXNJbmxpbmUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Iiwic291cmNlIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/projects/custom-comps/page.js\n"));

/***/ })

});