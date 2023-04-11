/*! For license information please see main.81f74ceb04a3342cb2b6.hot-update.js.LICENSE.txt */
"use strict";globalThis.webpackHotUpdateprofile("main",{"./node_modules/@mui/icons-material/MenuBook.js":(__unused_webpack_module,exports,__webpack_require__)=>{eval('\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");\nObject.defineProperty(exports, "__esModule", ({\n  value: true\n}));\nexports["default"] = void 0;\nvar _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));\nvar _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");\nvar _default = (0, _createSvgIcon.default)([/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {\n  d: "M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"\n}, "0"), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {\n  d: "M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83zm4.5 1.84c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z"\n}, "1")], \'MenuBook\');\nexports["default"] = _default;\n\n//# sourceURL=webpack://profile/./node_modules/@mui/icons-material/MenuBook.js?')},"./src/components/sections/ServicesOffered.jsx":(module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Container/Container.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Hidden/Hidden.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");\n/* harmony import */ var _mui_icons_material_MenuBook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/MenuBook */ "./node_modules/@mui/icons-material/MenuBook.js");\n/* harmony import */ var _styles_sections_ServicesOffered_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/sections/ServicesOffered.styles */ "./src/components/styles/sections/ServicesOffered.styles.js");\n/* harmony import */ var _data_serviceOfferedData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/serviceOfferedData */ "./src/data/serviceOfferedData.js");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");\n\nvar _MenuBookIcon,\n  _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\nfunction ServicesOffered(props) {\n  _s();\n  const classes = (0,_styles_sections_ServicesOffered_styles__WEBPACK_IMPORTED_MODULE_1__.useStyles)(props);\n  const scrollToTop = () => {\n    window.scrollTo(0, 0);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    maxWidth: "xl"\n  }, _data_serviceOfferedData__WEBPACK_IMPORTED_MODULE_2__["default"].map((service, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    key: service.id\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    container: true,\n    direction: "row",\n    justifyContent: "space-around",\n    alignItems: "center",\n    className: classes.wrapper,\n    id: `wrapper_${index}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    mdDown: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    item: true\n  }, index % 2 === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {\n    loading: "lazy",\n    alt: service.serviceName,\n    className: classes.img,\n    src: service.serviceImg\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    mdUp: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    item: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {\n    loading: "lazy",\n    alt: service.serviceName,\n    className: classes.img,\n    src: service.serviceImg\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    item: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    variant: "h4",\n    className: classes.titles\n  }, service.serviceOffered), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: classes.line\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    className: classes.servicePara\n  }, service.serviceDetails), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    container: true,\n    direction: "column",\n    justifyContent: "center",\n    alignItems: "flex-end",\n    className: classes.btnWrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    endIcon: _MenuBookIcon || (_MenuBookIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_MenuBook__WEBPACK_IMPORTED_MODULE_8__["default"], null)),\n    variant: "contained",\n    color: "primary",\n    size: "large",\n    component: react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link,\n    to: service.path,\n    onClick: scrollToTop\n  }, "Learn More"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    mdDown: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    item: true\n  }, index % 2 === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {\n    loading: "lazy",\n    alt: service.serviceName,\n    className: classes.img,\n    src: service.serviceImg\n  }))))))));\n}\n_s(ServicesOffered, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {\n  return [_styles_sections_ServicesOffered_styles__WEBPACK_IMPORTED_MODULE_1__.useStyles];\n});\n_c = ServicesOffered;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServicesOffered);\nvar _c;\n__webpack_require__.$Refresh$.register(_c, "ServicesOffered");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== \'undefined\') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== \'undefined\') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== \'undefined\' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://profile/./src/components/sections/ServicesOffered.jsx?')},"./src/components/styles/sections/ServicesOffered.styles.js":(module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useStyles\": () => (/* binding */ useStyles)\n/* harmony export */ });\n/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/styles */ \"./node_modules/@mui/styles/makeStyles/makeStyles.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\nconst useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(theme => ({\n  titleWrapper: {\n    marginTop: theme.spacing(6)\n  },\n  title: {\n    paddingBottom: theme.spacing(2),\n    color: theme.palette.charcoal.main\n  },\n  subTitle: {\n    marginTop: theme.spacing(2)\n  },\n  wrapper: {\n    backgroundImage: `linear-gradient(45deg,#f4f1fa  30%,#fff 90%)`,\n    padding: '5rem 0rem',\n    [theme.breakpoints.down('md')]: {\n      padding: '2rem 0rem'\n    },\n    '&#wrapper_0': {\n      backgroundImage: `linear-gradient(45deg,#fff 30%,#f4f1fa 90%)`\n    },\n    '&#wrapper_2': {\n      backgroundImage: `linear-gradient(45deg,#fff 30%,#f4f1fa 90%)`\n    },\n    '&#wrapper_4': {\n      backgroundImage: `linear-gradient(45deg,#fff 30%,#f4f1fa 90%)`\n    }\n  },\n  line: {\n    width: '350px',\n    height: '1px',\n    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'\n  },\n  titles: {\n    paddingBottom: theme.spacing(3),\n    [theme.breakpoints.down('md')]: {\n      paddingTop: theme.spacing(6)\n    }\n  },\n  btnWrapper: {\n    padding: theme.spacing(6)\n  },\n  img: {\n    width: '600px',\n    height: 'auto',\n    borderRadius: '5px',\n    [theme.breakpoints.down('md')]: {\n      width: '100%'\n    }\n  },\n  servicePara: {\n    width: '700px',\n    height: 'auto',\n    color: theme.palette.charcoal.secondary,\n    letterSpacing: theme.spacing(0.2),\n    lineHeight: '1.5rem',\n    [theme.breakpoints.down('md')]: {\n      width: '100%'\n    }\n  },\n  links: {\n    textDecoration: 'none'\n  }\n}));\n\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://profile/./src/components/styles/sections/ServicesOffered.styles.js?")},"./src/data/serviceOfferedData.js":(module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nconst serviceSectionDetails = [{\n  id: 5000,\n  path: '/services/content-writing',\n  serviceName: 'content-writing',\n  serviceImg: '../../public/assets/thom-bradley-ap8jsn3B9gI-unsplash.jpg',\n  serviceOffered: 'Expert Content Writing Services',\n  serviceDetails: 'Our content writing services are designed to captivate your audience with engaging and informative content. Our experienced writers craft compelling stories tailored to your brand, ensuring an enhanced online presence and increased conversions. Trust our team to deliver top-notch content that meets your unique requirements and resonates with your target audience.'\n}, {\n  id: 5001,\n  path: '/services/seo',\n  serviceName: 'seo',\n  serviceImg: '../../public/assets/lukas-blazek-mcSDtbWXUZU-unsplash.jpg',\n  serviceOffered: 'SEO (Search Engine Optimization)',\n  serviceDetails: 'Maximize your online visibility with our cutting-edge SEO services. We provide comprehensive strategies to boost your search engine rankings and drive organic traffic to your website. Our team of SEO experts utilizes the latest techniques and tools to optimize your site for search engines, ensuring that your website stays ahead of the competition.'\n}, {\n  id: 5002,\n  path: '/services/mobile-app',\n  serviceName: 'mobile-app',\n  serviceImg: '../../public/assets/phil-desforges-Hxp_xDXsOSs-unsplash.jpg',\n  serviceOffered: 'Mobile App Development Solutions',\n  serviceDetails: 'Transform your ideas into innovative mobile apps with our custom mobile app development services. Our expert developers create seamless user experiences, blending cutting-edge technology with intuitive design. We specialize in developing engaging, feature-rich apps that cater to the diverse needs of your target audience, ensuring your business stays ahead of the curve.'\n}, {\n  id: 5003,\n  path: '/services/eCommerce',\n  serviceName: 'eCommerce',\n  serviceImg: '../../public/assets/thom-bradley-ap8jsn3B9gI-unsplash.jpg',\n  serviceOffered: 'eCommerce Website Development',\n  serviceDetails: 'Expand your business online with our tailor-made eCommerce website development solutions. Our experienced team creates user-friendly, responsive, and secure online stores that ensure a seamless shopping experience for your customers. With our end-to-end eCommerce development services, you can scale your online presence and drive sales effortlessly.'\n}, {\n  id: 5004,\n  path: '/services/web-design',\n  serviceName: 'web-design',\n  serviceImg: '../../public/assets/thom-bradley-ap8jsn3B9gI-unsplash.jpg',\n  serviceOffered: 'Website Design & Development',\n  serviceDetails: 'Elevate your online presence with our bespoke website design and development services. Our team of creative designers and skilled developers collaborate to build visually appealing, user-friendly, and responsive websites that align with your business goals. From concept to launch, we ensure your website leaves a lasting impression on your audience.'\n}, {\n  id: 5005,\n  path: '/services/web-maintenance',\n  serviceName: 'web-maintenance',\n  serviceImg: '../../public/assets/thom-bradley-ap8jsn3B9gI-unsplash.jpg',\n  serviceOffered: 'Website/App Maintenance & Support',\n  serviceDetails: 'Keep your website or app running smoothly with our comprehensive maintenance and support services. Our team of experts provides ongoing updates, bug fixes, and performance optimizations to ensure your digital assets remain up-to-date and secure. With our reliable support, you can focus on your core business while we take care of your online presence. Trust our dedicated team to maintain the highest level of functionality and user satisfaction for your website or app, ensuring a seamless experience for your customers and long-term success for your business.'\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serviceSectionDetails);\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://profile/./src/data/serviceOfferedData.js?")}},(function(e){e.h=()=>"57e5cbd8d95e1ab8e4dc"}));