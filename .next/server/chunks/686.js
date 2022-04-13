"use strict";
exports.id = 686;
exports.ids = [686];
exports.modules = {

/***/ 4686:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Base)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3193);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8010);
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4438);
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5029);
/* harmony import */ var _stitches_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2958);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Footer__WEBPACK_IMPORTED_MODULE_1__, _components_Navbar__WEBPACK_IMPORTED_MODULE_2__, _components_Post__WEBPACK_IMPORTED_MODULE_3__, _components_Wrapper__WEBPACK_IMPORTED_MODULE_4__, _stitches_config__WEBPACK_IMPORTED_MODULE_5__]);
([_components_Footer__WEBPACK_IMPORTED_MODULE_1__, _components_Navbar__WEBPACK_IMPORTED_MODULE_2__, _components_Post__WEBPACK_IMPORTED_MODULE_3__, _components_Wrapper__WEBPACK_IMPORTED_MODULE_4__, _stitches_config__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function Base({ children  }) {
    const { title , tagline , primaryColor , secondaryColor  } = children.props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Wrapper__WEBPACK_IMPORTED_MODULE_4__/* .Wrapper */ .i, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Post__WEBPACK_IMPORTED_MODULE_3__/* .PostMain */ .dn, {
                css: {
                    '& ::selection': {
                        background: `$${primaryColor}`,
                        color: '#000',
                        WebkitTextFillColor: '#000'
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Post__WEBPACK_IMPORTED_MODULE_3__/* .PostContent */ .C2, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Post__WEBPACK_IMPORTED_MODULE_3__/* .PostContainer */ .b6, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GradientTitle, {
                                css: {
                                    backgroundColor: `white`
                                },
                                children: tagline ? tagline : title
                            }),
                            children
                        ]
                    })
                })
            })
        ]
    }));
};
const GradientTitle = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_5__/* .styled */ .zo)('h1', {
    backgroundSize: '100%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    MozBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    MozTextFillColor: 'transparent',
    WebkitBoxDecorationBreak: 'clone'
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;