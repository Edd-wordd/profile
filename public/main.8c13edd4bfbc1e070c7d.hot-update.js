/*! For license information please see main.8c13edd4bfbc1e070c7d.hot-update.js.LICENSE.txt */
"use strict";globalThis.webpackHotUpdateprofile("main",{"./src/App.jsx":(module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");\n/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");\n/* harmony import */ var _src_components_layout_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/layout/NavBar */ "./src/components/layout/NavBar.jsx");\n/* harmony import */ var _src_components_layout_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/layout/Footer */ "./src/components/layout/Footer.jsx");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme */ "./src/theme.jsx");\n/* harmony import */ var _components_spinners_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/spinners/Spinner */ "./src/components/spinners/Spinner.jsx");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");\n\nvar _NavBar,\n  _Suspense,\n  _Footer,\n  _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\nconst useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__["default"])(() => ({\n  root: {\n    margin: \'-.5rem -.5rem\'\n  }\n}));\nconst Portfolio = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(_c = () => __webpack_require__.e(/*! import() */ "src_components_pages_Portfolio_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../src/components/pages/Portfolio */ "./src/components/pages/Portfolio.jsx")));\n_c2 = Portfolio;\nconst AboutUs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(_c3 = () => __webpack_require__.e(/*! import() */ "src_components_pages_AboutUs_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../src/components/pages/AboutUs */ "./src/components/pages/AboutUs.jsx")));\n_c4 = AboutUs;\nconst Services = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(_c5 = () => __webpack_require__.e(/*! import() */ "src_components_pages_Services_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../src/components/pages/Services */ "./src/components/pages/Services.jsx")));\n_c6 = Services;\nconst Contact = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(_c7 = () => __webpack_require__.e(/*! import() */ "src_components_pages_Contact_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../src/components/pages/Contact */ "./src/components/pages/Contact.jsx")));\n_c8 = Contact;\nconst Home = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(_c9 = () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_mui_material_Hidden_Hidden_js"), __webpack_require__.e("vendors-node_modules_mui_material_transitions_utils_js-node_modules_react-transition-group_es-b39bc2"), __webpack_require__.e("vendors-node_modules_mui_material_Container_Container_js-node_modules_mui_utils_esm_HTMLEleme-900a86"), __webpack_require__.e("vendors-node_modules_mui_icons-material_Beenhere_js-node_modules_mui_icons-material_Descripti-a4dfad"), __webpack_require__.e("src_components_sections_GetStarted_jsx"), __webpack_require__.e("src_components_pages_Home_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../src/components/pages/Home */ "./src/components/pages/Home.jsx")));\n_c10 = Home;\nconst ServiceInfo = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(_c11 = () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_mui_material_transitions_utils_js-node_modules_react-transition-group_es-b39bc2"), __webpack_require__.e("vendors-node_modules_mui_icons-material_ExpandMore_js-node_modules_mui_material_Accordion_Acc-3802ff"), __webpack_require__.e("src_components_sections_ServiceInfo_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/sections/ServiceInfo */ "./src/components/sections/ServiceInfo.jsx")));\n_c12 = ServiceInfo;\nconst NotFound = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(_c13 = () => __webpack_require__.e(/*! import() */ "src_components_sections_NotFound_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./components/sections/NotFound */ "./src/components/sections/NotFound.jsx")));\n_c14 = NotFound;\nfunction App() {\n  _s();\n  const classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    theme: _theme__WEBPACK_IMPORTED_MODULE_3__["default"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, _NavBar || (_NavBar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_layout_NavBar__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: classes.root\n  }, _Suspense || (_Suspense = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_spinners_Spinner__WEBPACK_IMPORTED_MODULE_6__["default"], null)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {\n    exact: true,\n    path: "/portfolio",\n    component: Portfolio\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {\n    exact: true,\n    path: "/about",\n    component: AboutUs\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {\n    exact: true,\n    path: "/services/:id",\n    component: ServiceInfo\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {\n    exact: true,\n    path: "/services",\n    component: Services\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {\n    exact: true,\n    path: "/contact",\n    component: Contact\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {\n    exact: true,\n    path: "/",\n    component: Home\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {\n    component: NotFound\n  })))), _Footer || (_Footer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_layout_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], null)))));\n}\n_s(App, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {\n  return [useStyles];\n});\n_c15 = App;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;\n__webpack_require__.$Refresh$.register(_c, "Portfolio$lazy");\n__webpack_require__.$Refresh$.register(_c2, "Portfolio");\n__webpack_require__.$Refresh$.register(_c3, "AboutUs$lazy");\n__webpack_require__.$Refresh$.register(_c4, "AboutUs");\n__webpack_require__.$Refresh$.register(_c5, "Services$lazy");\n__webpack_require__.$Refresh$.register(_c6, "Services");\n__webpack_require__.$Refresh$.register(_c7, "Contact$lazy");\n__webpack_require__.$Refresh$.register(_c8, "Contact");\n__webpack_require__.$Refresh$.register(_c9, "Home$lazy");\n__webpack_require__.$Refresh$.register(_c10, "Home");\n__webpack_require__.$Refresh$.register(_c11, "ServiceInfo$lazy");\n__webpack_require__.$Refresh$.register(_c12, "ServiceInfo");\n__webpack_require__.$Refresh$.register(_c13, "NotFound$lazy");\n__webpack_require__.$Refresh$.register(_c14, "NotFound");\n__webpack_require__.$Refresh$.register(_c15, "App");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== \'undefined\') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== \'undefined\') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== \'undefined\' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://profile/./src/App.jsx?')}},(function(_){_.h=()=>"549463227330fecc1a03"}));