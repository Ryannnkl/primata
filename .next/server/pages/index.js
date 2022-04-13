(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7975:
/***/ ((module) => {

// Exports
module.exports = {
	"typewriter": "home_typewriter__oNOSy",
	"typing": "home_typing__3pQ39",
	"blink-caret": "home_blink-caret__wZil0"
};


/***/ }),

/***/ 7933:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 6122:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ShortcutHome)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var kbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3437);
/* harmony import */ var kbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(kbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ButtonPrimary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7933);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ButtonPrimary__WEBPACK_IMPORTED_MODULE_3__]);
_components_ButtonPrimary__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function ShortcutHome() {
    const { query  } = (0,kbar__WEBPACK_IMPORTED_MODULE_2__.useKBar)();
    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setMounted(true);
    }, []);
    if (mounted) {
        const isMac = /(Mac)/i.test(navigator.userAgent);
        const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
        if (isMobile) {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ButtonPrimary__WEBPACK_IMPORTED_MODULE_3__/* .ButtonPrimary */ .D, {
                as: "button",
                onClick: query.toggle,
                children: "Clique para come\xe7ar →"
            }));
        } else if (isMac) {
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ButtonPrimary__WEBPACK_IMPORTED_MODULE_3__/* .ButtonPrimary */ .D, {
                as: "button",
                onClick: query.toggle,
                children: [
                    "Pressione ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("kbd", {
                        children: "⌘"
                    }),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("kbd", {
                        children: "K"
                    }),
                    " para iniciar →"
                ]
            }));
        } else {
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ButtonPrimary__WEBPACK_IMPORTED_MODULE_3__/* .ButtonPrimary */ .D, {
                as: "button",
                onClick: query.toggle,
                children: [
                    "Pressione ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("kbd", {
                        children: "ctrl"
                    }),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("kbd", {
                        children: "K"
                    }),
                    " para iniciar →"
                ]
            }));
        }
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3193);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8010);
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4438);
/* harmony import */ var _components_ShortcutHome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6122);
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5029);
/* harmony import */ var _stitches_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2958);
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7975);
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Footer__WEBPACK_IMPORTED_MODULE_2__, _components_Navbar__WEBPACK_IMPORTED_MODULE_3__, _components_Post__WEBPACK_IMPORTED_MODULE_4__, _components_ShortcutHome__WEBPACK_IMPORTED_MODULE_5__, _components_Wrapper__WEBPACK_IMPORTED_MODULE_6__, _stitches_config__WEBPACK_IMPORTED_MODULE_7__]);
([_components_Footer__WEBPACK_IMPORTED_MODULE_2__, _components_Navbar__WEBPACK_IMPORTED_MODULE_3__, _components_Post__WEBPACK_IMPORTED_MODULE_4__, _components_ShortcutHome__WEBPACK_IMPORTED_MODULE_5__, _components_Wrapper__WEBPACK_IMPORTED_MODULE_6__, _stitches_config__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









async function getStaticProps() {
    return {
        props: {
            title: 'Primata LAB',
            name: 'Primata',
            description: '',
            image: '/static/images/home-bw.jpg',
            primaryColor: 'cyan',
            secondaryColor: 'green'
        }
    };
}
function Index(props) {
    const { title , name , description , image , primaryColor , secondaryColor  } = props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Wrapper__WEBPACK_IMPORTED_MODULE_6__/* .Wrapper */ .i, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: name,
                        property: "og:title"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: description,
                        name: "description"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: description,
                        property: "og:description"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: "https://primata.tec.br",
                        property: "og:url"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: `https://ialexanderbrito.dev${image}`,
                        property: "og:image"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Home, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Post__WEBPACK_IMPORTED_MODULE_4__/* .PostContent */ .C2, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Post__WEBPACK_IMPORTED_MODULE_4__/* .PostContainer */ .b6, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GradientTitle, {
                                    css: {
                                        backgroundColor: `#FFF`
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_8___default().typewriter),
                                        children: title
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                            style: {
                                                fontSize: 22
                                            },
                                            children: "O que fazemos?"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        "Criamos desafios em diversos clientes com ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        "uma cultura ligada a resultados s\xf3lidos e ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        " foco em inova\xe7\xe3o."
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ShortcutHome__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                            ]
                        })
                    })
                })
            })
        ]
    }));
};
const Home = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_7__/* .styled */ .zo)(_components_Post__WEBPACK_IMPORTED_MODULE_4__/* .PostMain */ .dn, {
    alignItems: 'center',
    display: 'flex',
    margin: '0 auto',
    '@bp2': {
        width: 800
    }
});
const GradientTitle = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_7__/* .styled */ .zo)('h1', {
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

/***/ }),

/***/ 3437:
/***/ ((module) => {

"use strict";
module.exports = require("kbar");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 796:
/***/ ((module) => {

"use strict";
module.exports = import("@stitches/react");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,958,232], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();