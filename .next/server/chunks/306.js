"use strict";
exports.id = 306;
exports.ids = [306];
exports.modules = {

/***/ 8504:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ Box)
/* harmony export */ });
/* harmony import */ var _stitches_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2958);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stitches_config__WEBPACK_IMPORTED_MODULE_0__]);
_stitches_config__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const Box = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)('div');

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7933:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ ButtonPrimary)
/* harmony export */ });
/* harmony import */ var _stitches_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2958);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stitches_config__WEBPACK_IMPORTED_MODULE_0__]);
_stitches_config__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const ButtonPrimary = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)('div', {
    appearance: 'none',
    background: 'transparent',
    border: 0,
    borderRadius: '$borderRadius',
    color: '$primary',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '24px',
    margin: '0 0 0 -10px',
    outline: '0',
    padding: '8px 10px 8px',
    textDecoration: 'none',
    transition: [
        'background $duration ease-in-out',
        'color $duration ease-in-out', 
    ],
    '&:hover': {
        background: '$hover',
        color: '$primary',
        opacity: 1
    },
    '&:hover kbd': {
        background: '$primary'
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5306:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ErrorMessage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8504);
/* harmony import */ var _ShortcutError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3576);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_1__, _ShortcutError__WEBPACK_IMPORTED_MODULE_2__]);
([_Box__WEBPACK_IMPORTED_MODULE_1__, _ShortcutError__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function ErrorMessage({ code  }) {
    let title = '500';
    let description = 'Algo n\xe3o est\xe1 certo.';
    if (code === 404) {
        title = '404';
        description = 'Esta p\xe1gina n\xe3o existe.';
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .x, {
        css: {
            textAlign: 'center'
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ShortcutError__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: description
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3576:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ShortcutError)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ButtonPrimary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7933);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ButtonPrimary__WEBPACK_IMPORTED_MODULE_2__]);
_components_ButtonPrimary__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function ShortcutError() {
    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setMounted(true);
    }, []);
    if (mounted) {
        const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
        if (isMobile) {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ButtonPrimary__WEBPACK_IMPORTED_MODULE_2__/* .ButtonPrimary */ .D, {
                as: "a",
                href: "/",
                children: "Toque para ir ao inicio →"
            }));
        }
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ButtonPrimary__WEBPACK_IMPORTED_MODULE_2__/* .ButtonPrimary */ .D, {
            as: "a",
            href: "/",
            children: [
                "Pressione ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("kbd", {
                    children: "G"
                }),
                " ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("kbd", {
                    children: "H"
                }),
                " para ir ao inicio →"
            ]
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;