"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
globalThis["webpackHotUpdateprofile"]("main",{

/***/ "./src/components/layout/NavBar.jsx":
/*!******************************************!*\
  !*** ./src/components/layout/NavBar.jsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/useTheme.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Link/Link.js\");\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/Fade.js\");\n/* harmony import */ var _styles_layout_NavBar_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/layout/NavBar.styles */ \"./src/components/styles/layout/NavBar.styles.js\");\n/* harmony import */ var _data_navbarData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/navbarData */ \"./src/data/navbarData.js\");\n/* harmony import */ var _buttons_NavBarButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../buttons/NavBarButton */ \"./src/components/buttons/NavBarButton.jsx\");\n/* harmony import */ var _buttons_CalendyButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../buttons/CalendyButton */ \"./src/components/buttons/CalendyButton.jsx\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../public/assets/monaTechLogo.webp'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _CalendyButton,\n  _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\nfunction NavBar(props) {\n  _s();\n  const classes = (0,_styles_layout_NavBar_styles__WEBPACK_IMPORTED_MODULE_2__.useStyles)(props);\n  const [isShowingMenu, setIsShowingMenu] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false); // default state for mobile menu\n  const [navbar, setNavbar] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);\n  const theme = (0,_mui_system__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  const changeNavbarBackground = () => {\n    setNavbar(window.scrollY >= 80);\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    window.addEventListener('scroll', changeNavbarBackground);\n    return () => {\n      window.removeEventListener('scroll', changeNavbarBackground);\n    };\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: navbar ? classes.active : classes.root\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    display: {\n      xs: 'block',\n      md: 'block',\n      lg: 'none'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    container: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    container: true,\n    className: isShowingMenu ? classes.setMobileNavDropdown : classes.mobileNavDropdown\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    item: true,\n    xs: 11\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    href: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../public/assets/monaTechLogo.webp'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n    alt: \"mona-tech-logo\",\n    className: classes.mobileLogoImg\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: classes.hamIcon\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(hamburger_react__WEBPACK_IMPORTED_MODULE_7__.Fade, {\n    toggled: isShowingMenu,\n    toggle: setIsShowingMenu,\n    duration: 0.7\n  }))), isShowingMenu && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, _data_navbarData__WEBPACK_IMPORTED_MODULE_8__[\"default\"].map(tab => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      item: true,\n      xs: 12,\n      className: classes.mobileBtn,\n      key: tab.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_buttons_NavBarButton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      key: tab.id,\n      tab: tab,\n      theme: theme,\n      windowLocation: window.location\n    }));\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    display: {\n      xs: 'none',\n      md: 'none',\n      lg: 'block'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    container: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    item: true,\n    sm: 4,\n    md: 2,\n    lg: 2\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    href: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: \"/assets/monaTechLogo.webp\",\n    alt: \"mona-tech-logo\",\n    className: classes.mainLogo\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    item: true,\n    sm: 8,\n    md: 7,\n    lg: 7,\n    className: classes.btnDisplay\n  }, _data_navbarData__WEBPACK_IMPORTED_MODULE_8__[\"default\"].map(tab => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_buttons_NavBarButton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      key: tab.id,\n      tab: tab,\n      theme: theme,\n      windowLocation: window.location\n    });\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    item: true,\n    sm: 8,\n    md: 7,\n    lg: 3,\n    className: classes.btnDisplay\n  }, _CalendyButton || (_CalendyButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_buttons_CalendyButton__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null))))));\n}\n_s(NavBar, \"5rWQ2cZRJv2Djr/F+ek2Kh8d9fA=\", false, function () {\n  return [_styles_layout_NavBar_styles__WEBPACK_IMPORTED_MODULE_2__.useStyles, _mui_system__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n_c = NavBar;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);\nvar _c;\n__webpack_require__.$Refresh$.register(_c, \"NavBar\");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://profile/./src/components/layout/NavBar.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b193f9e11490f13a8dde")
/******/ })();
/******/ 
/******/ }
);