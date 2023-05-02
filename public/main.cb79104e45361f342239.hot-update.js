/*! For license information please see main.cb79104e45361f342239.hot-update.js.LICENSE.txt */
"use strict";globalThis.webpackHotUpdateprofile("main",{"./src/components/sections/ServiceInfo.jsx":(module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Container/Container.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");\n/* harmony import */ var _MajorSigns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MajorSigns */ "./src/components/sections/MajorSigns.jsx");\n/* harmony import */ var _FaqServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FaqServices */ "./src/components/sections/FaqServices.jsx");\n/* harmony import */ var _styles_sections_ServiceInfo_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/sections/ServiceInfo.styles */ "./src/components/styles/sections/ServiceInfo.styles.js");\n/* harmony import */ var _data_serviceInfoData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/serviceInfoData */ "./src/data/serviceInfoData.js");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");\n\nvar _FaqServices,\n  _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\nfunction ServiceInfo(props) {\n  _s();\n  const classes = (0,_styles_sections_ServiceInfo_styles__WEBPACK_IMPORTED_MODULE_3__.useStyles)(props);\n  const location = window.location.pathname;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, _data_serviceInfoData__WEBPACK_IMPORTED_MODULE_4__["default"].map((service, index) => `${location}` === `${service.path}` ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    key: index\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: classes.root\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    maxWidth: "xl"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    container: true,\n    direction: "row",\n    justifyContent: "space-evenly",\n    alignItems: "center",\n    className: classes.mainContent\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {\n    loading: "lazy",\n    alt: "image4",\n    src: service.image,\n    className: classes.pics\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {\n    variant: "h4",\n    className: classes.mainTitle\n  }, window.location.pathname === `${service.path}` ? `${service.title}` : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {\n    paragraph: true,\n    className: classes.mainDescription\n  }, service.description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MajorSigns__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    title: service.title,\n    majorSignInfo: service.majorSignInfo,\n    majorTitle_1: service.majorTitle_1,\n    majorTitle_2: service.majorTitle_2,\n    majorTitle_3: service.majorTitle_3,\n    majorTitle_4: service.majorTitle_4,\n    majorInfo_1: service.majorInfo_1,\n    majorInfo_2: service.majorInfo_2,\n    majorInfo_3: service.majorInfo_3,\n    majorInfo_4: service.majorInfo_4,\n    majorImage: service.majorImage\n  })))) : null), _FaqServices || (_FaqServices = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FaqServices__WEBPACK_IMPORTED_MODULE_2__["default"], null)));\n}\n_s(ServiceInfo, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {\n  return [_styles_sections_ServiceInfo_styles__WEBPACK_IMPORTED_MODULE_3__.useStyles];\n});\n_c = ServiceInfo;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceInfo);\nvar _c;\n__webpack_require__.$Refresh$.register(_c, "ServiceInfo");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== \'undefined\') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== \'undefined\') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== \'undefined\' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://profile/./src/components/sections/ServiceInfo.jsx?')}},(function(_){_.h=()=>"2adc9328e5e5782cc218"}));