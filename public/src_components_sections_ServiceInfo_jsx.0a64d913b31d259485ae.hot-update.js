/*! For license information please see src_components_sections_ServiceInfo_jsx.0a64d913b31d259485ae.hot-update.js.LICENSE.txt */
"use strict";globalThis.webpackHotUpdateprofile("src_components_sections_ServiceInfo_jsx",{"./src/components/sections/ServiceInfo.jsx":(module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Container/Container.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");\n/* harmony import */ var _spinners_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spinners/Spinner */ "./src/components/spinners/Spinner.jsx");\n/* harmony import */ var _styles_sections_ServiceInfo_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/sections/ServiceInfo.styles */ "./src/components/styles/sections/ServiceInfo.styles.js");\n/* harmony import */ var _data_serviceInfoData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/serviceInfoData */ "./src/data/serviceInfoData.js");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");\n\nvar _Spinner,\n  _FaqServices,\n  _s = __webpack_require__.$Refresh$.signature();\n\n\n// import MajorSigns from \'./MajorSigns\'\n// import FaqServices from \'./FaqServices\'\n\n\n\nconst MajorSigns = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(_c = () => __webpack_require__.e(/*! import() */ "src_components_sections_MajorSigns_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./MajorSigns */ "./src/components/sections/MajorSigns.jsx")));\n_c2 = MajorSigns;\nconst FaqServices = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(_c3 = () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_mui_material_transitions_utils_js-node_modules_react-transition-group_es-b39bc2"), __webpack_require__.e("vendors-node_modules_mui_icons-material_ExpandMore_js-node_modules_mui_material_Accordion_Acc-b1e1e7"), __webpack_require__.e("src_components_sections_FaqServices_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./FaqServices */ "./src/components/sections/FaqServices.jsx")));\n_c4 = FaqServices;\nfunction ServiceInfo(props) {\n  _s();\n  const classes = (0,_styles_sections_ServiceInfo_styles__WEBPACK_IMPORTED_MODULE_1__.useStyles)(props);\n  const location = window.location.pathname;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n    fallback: _Spinner || (_Spinner = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_spinners_Spinner__WEBPACK_IMPORTED_MODULE_2__["default"], null))\n  }, _data_serviceInfoData__WEBPACK_IMPORTED_MODULE_3__["default"].map((service, index) => `${location}` === `${service.path}` ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    key: index\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: classes.root\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    maxWidth: "xl"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    container: true,\n    direction: "row",\n    justifyContent: "space-evenly",\n    alignItems: "center",\n    className: classes.mainContent\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {\n    loading: "lazy",\n    alt: service.title,\n    src: service.image,\n    className: classes.pics\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    variant: "h4",\n    className: classes.mainTitle\n  }, window.location.pathname === `${service.path}` ? `${service.title}` : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    paragraph: true,\n    className: classes.mainDescription\n  }, service.description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MajorSigns, {\n    title: service.title,\n    majorSignInfo: service.majorSignInfo,\n    majorTitle_1: service.majorTitle_1,\n    majorTitle_2: service.majorTitle_2,\n    majorTitle_3: service.majorTitle_3,\n    majorTitle_4: service.majorTitle_4,\n    majorInfo_1: service.majorInfo_1,\n    majorInfo_2: service.majorInfo_2,\n    majorInfo_3: service.majorInfo_3,\n    majorInfo_4: service.majorInfo_4,\n    majorImage: service.majorImage\n  })))) : null), _FaqServices || (_FaqServices = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FaqServices, null))));\n}\n_s(ServiceInfo, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {\n  return [_styles_sections_ServiceInfo_styles__WEBPACK_IMPORTED_MODULE_1__.useStyles];\n});\n_c5 = ServiceInfo;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceInfo);\nvar _c, _c2, _c3, _c4, _c5;\n__webpack_require__.$Refresh$.register(_c, "MajorSigns$lazy");\n__webpack_require__.$Refresh$.register(_c2, "MajorSigns");\n__webpack_require__.$Refresh$.register(_c3, "FaqServices$lazy");\n__webpack_require__.$Refresh$.register(_c4, "FaqServices");\n__webpack_require__.$Refresh$.register(_c5, "ServiceInfo");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== \'undefined\') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== \'undefined\') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== \'undefined\' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://profile/./src/components/sections/ServiceInfo.jsx?')}});