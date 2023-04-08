/*! For license information please see main.2104b5ce9e8a6335b9de.hot-update.js.LICENSE.txt */
"use strict";globalThis.webpackHotUpdateprofile("main",{"./src/components/sections/WhoWeAre.jsx":(module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Container/Container.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Zoom/Zoom.js");\n/* harmony import */ var react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-transition-group/Transition */ "./node_modules/react-transition-group/esm/Transition.js");\n/* harmony import */ var _components_buttons_ButtonLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/buttons/ButtonLink */ "./src/components/buttons/ButtonLink.jsx");\n/* harmony import */ var _components_sections_SectionHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/sections/SectionHeader */ "./src/components/sections/SectionHeader.jsx");\n/* harmony import */ var _data_whoWeAreData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/whoWeAreData */ "./src/data/whoWeAreData.js");\n/* harmony import */ var _styles_sections_WhoWeAre_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/sections/WhoWeAre.styles */ "./src/components/styles/sections/WhoWeAre.styles.js");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");\n\nvar _SectionHeader,\n  _ButtonLink,\n  _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\nfunction WhoWeAre(props) {\n  _s();\n  const [inProp, setInProp] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const cardObserver = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new IntersectionObserver((_ref, observer) => {\n    let [entry] = _ref;\n    if (entry.isIntersecting) {\n      setInProp(true);\n      observer.unobserve(entry.target);\n    }\n  }, {\n    root: null,\n    threshold: 0.5\n  }));\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const target = document.querySelector(\'#cards\');\n    if (target) {\n      cardObserver.current.observe(target);\n    }\n    return () => cardObserver.current.disconnect();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, _SectionHeader || (_SectionHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_sections_SectionHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    title: "Who We Are | Digital Innovation Team",\n    subTitle: "Bring your digital ideas to life!"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    maxWidth: "lg"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    sx: {\n      margin: \'3rem 0\'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    paragraph: true,\n    variant: "body1",\n    sx: {\n      lineHeight: \'1.75rem\'\n    }\n  }, "Welcome to our world of digital innovation! As a team of skilled technologists and problem solvers, we\'re passionate about using technology to transform businesses and lives. We offer a range of services including web design, mobile app development, custom software solutions, and digital marketing. Our mission is to provide innovative solutions that meet the evolving needs of our clients, no matter how complex. With our creative and collaborative approach, we bring fresh perspectives to every project, delivering tailored solutions that exceed expectations. Let\'s embark on a journey of digital transformation together and bring your vision to life!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    maxWidth: "xl",\n    id: "cards"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    container: true,\n    direction: "row",\n    justifyContent: "space-evenly",\n    alignItems: "center"\n  }, _data_whoWeAreData__WEBPACK_IMPORTED_MODULE_3__["default"].map(value => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_8__["default"], {\n    in: !!setInProp,\n    timeout: 1000,\n    key: value.id\n  }, () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {\n    in: inProp,\n    mountOnEnter: true,\n    unmountOnExit: true,\n    timeout: 2000\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {\n    variant: "outlined",\n    component: _styles_sections_WhoWeAre_styles__WEBPACK_IMPORTED_MODULE_4__.WhoWeAreCards\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    variant: "subtitle1"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, value.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    paragraph: true,\n    variant: "body1",\n    style: {\n      color: \'#808080\'\n    }\n  }, value.description)))))), _ButtonLink || (_ButtonLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_buttons_ButtonLink__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    linkOne: "/contact",\n    btnOneText: "Request a Free Quote | Contact Us Today"\n  }))));\n}\n_s(WhoWeAre, "WcfoBhxVuxfMrE/KqaZBQycsnnI=");\n_c = WhoWeAre;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WhoWeAre);\nvar _c;\n__webpack_require__.$Refresh$.register(_c, "WhoWeAre");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== \'undefined\') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== \'undefined\') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== \'undefined\' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://profile/./src/components/sections/WhoWeAre.jsx?')}},(function(e){e.h=()=>"dccdaae02b1782df6ed5"}));