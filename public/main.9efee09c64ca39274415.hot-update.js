/*! For license information please see main.9efee09c64ca39274415.hot-update.js.LICENSE.txt */
"use strict";globalThis.webpackHotUpdateprofile("main",{"./src/components/sections/HmServices.jsx":(module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Slide/Slide.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/useTheme.js");\n/* harmony import */ var _mui_icons_material_PhoneIphone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/PhoneIphone */ "./node_modules/@mui/icons-material/PhoneIphone.js");\n/* harmony import */ var _mui_icons_material_Computer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Computer */ "./node_modules/@mui/icons-material/Computer.js");\n/* harmony import */ var _mui_icons_material_Description__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Description */ "./node_modules/@mui/icons-material/Description.js");\n/* harmony import */ var _mui_icons_material_MultilineChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/MultilineChart */ "./node_modules/@mui/icons-material/MultilineChart.js");\n/* harmony import */ var _mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/ShoppingCart */ "./node_modules/@mui/icons-material/ShoppingCart.js");\n/* harmony import */ var _mui_icons_material_GroupAdd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/GroupAdd */ "./node_modules/@mui/icons-material/GroupAdd.js");\n/* harmony import */ var _data_hmServicesData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/hmServicesData */ "./src/data/hmServicesData.js");\n/* harmony import */ var _SectionHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SectionHeader */ "./src/components/sections/SectionHeader.jsx");\n/* harmony import */ var _styles_sections_HmServices_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/sections/HmServices.styles */ "./src/components/styles/sections/HmServices.styles.js");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");\n\nvar _SectionHeader,\n  _SectionHeader2,\n  _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\n\n\n\nconst icons = [_mui_icons_material_MultilineChart__WEBPACK_IMPORTED_MODULE_4__["default"], _mui_icons_material_Computer__WEBPACK_IMPORTED_MODULE_5__["default"], _mui_icons_material_Description__WEBPACK_IMPORTED_MODULE_6__["default"], _mui_icons_material_PhoneIphone__WEBPACK_IMPORTED_MODULE_7__["default"], _mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_8__["default"], _mui_icons_material_GroupAdd__WEBPACK_IMPORTED_MODULE_9__["default"]];\nfunction HmServices(props) {\n  _s();\n  const theme = (0,_mui_system__WEBPACK_IMPORTED_MODULE_10__["default"])();\n  const servicesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const classes = (0,_styles_sections_HmServices_styles__WEBPACK_IMPORTED_MODULE_3__.useStyles)(props);\n  const [inProp, setInProp] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);\n  const servicesSlide = (entries, observer) => {\n    const [entry] = entries;\n\n    // guard clause\n    if (!entry.isIntersecting) return;\n    setInProp(true);\n    observer.unobserve(entry.target);\n  };\n  const servicesObserver = new IntersectionObserver(servicesSlide, {\n    root: null,\n    threshold: 0.2\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const target = servicesRef.current;\n    if (target) {\n      servicesObserver.observe(target);\n    }\n    return () => {\n      if (target) {\n        servicesObserver.unobserve(target);\n      }\n    };\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: classes.root,\n    id: "services",\n    ref: servicesRef\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {\n    display: {\n      xs: \'block\',\n      sm: \'none\',\n      md: \'none\',\n      lg: \'none\'\n    }\n  }, _SectionHeader || (_SectionHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SectionHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    title: "Our Services - Helping to Build the Future",\n    subTitle: "Discover the Range of Services We Offer to Help Your Business Grow"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {\n    container: true,\n    direction: "row",\n    justifyContent: "center",\n    alignItems: "center",\n    className: classes.cardWrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {\n    container: true,\n    direction: "row",\n    justifyContent: "center",\n    className: classes.sectionTitle\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {\n    display: {\n      xs: \'none\',\n      sm: \'none\',\n      md: \'block\',\n      lg: \'block\'\n    }\n  }, _SectionHeader2 || (_SectionHeader2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SectionHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    title: "Our Services - Helping to Build the Future",\n    subTitle: "Discover the Range of Services We Offer to Help Your Business Grow"\n  })))), _data_hmServicesData__WEBPACK_IMPORTED_MODULE_1__["default"].map((service, index) => {\n    const Icon = icons[index];\n    const cardStyles = [{\n      mb: 15,\n      [theme.breakpoints.down(\'md\')]: {\n        mt: 8\n      }\n    }, {\n      mb: 23\n    }, {\n      mb: 15\n    }, {\n      mb: 12\n    }, {\n      mb: 3\n    }, {\n      mb: 10\n    }];\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {\n      key: service.id,\n      direction: index >= 0 && index <= 2 ? \'right\' : \'left\',\n      in: inProp,\n      mountOnEnter: true,\n      unmountOnExit: true,\n      timeout: 3000\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {\n      elevation: 10,\n      id: `card_${index}`,\n      sx: {\n        position: \'relative\',\n        width: \'400px\',\n        m: 1,\n        minHeight: \'215px\',\n        py: \'0.75rem\',\n        px: \'1.5rem\',\n        backgroundColor: theme.palette.primary_300.main,\n        color: theme.palette.charcoal.secondary,\n        ...cardStyles[index],\n        [theme.breakpoints.down(\'md\')]: {\n          m: 1\n        }\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {\n      variant: "h5",\n      sx: {\n        display: \'flex\',\n        alignItems: \'center\'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Icon, {\n      sx: {\n        width: \'12%\',\n        height: \'auto\'\n      }\n    }), service.serviceTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {\n      paragraph: true\n    }, service.serviceDescription)));\n  })));\n}\n_s(HmServices, "K66DvFfiaNvrgTX2Fe+N80syZhQ=", false, function () {\n  return [_mui_system__WEBPACK_IMPORTED_MODULE_10__["default"], _styles_sections_HmServices_styles__WEBPACK_IMPORTED_MODULE_3__.useStyles];\n});\n_c = HmServices;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HmServices);\nvar _c;\n__webpack_require__.$Refresh$.register(_c, "HmServices");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== \'undefined\') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== \'undefined\') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== \'undefined\' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://profile/./src/components/sections/HmServices.jsx?')}},(function(e){e.h=()=>"d5cac4f7a6c4b63def2c"}));