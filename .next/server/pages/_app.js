"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
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

/***/ 3155:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CommandBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var kbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3437);
/* harmony import */ var kbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(kbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stitches_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2958);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8504);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stitches_config__WEBPACK_IMPORTED_MODULE_4__, _Box__WEBPACK_IMPORTED_MODULE_5__]);
([_stitches_config__WEBPACK_IMPORTED_MODULE_4__, _Box__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function CommandBar(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const actions = [
        {
            id: 'copy',
            name: 'Copiar URL',
            shortcut: [
                'u'
            ],
            keywords: 'copy-url',
            section: 'Geral',
            perform: ()=>navigator.clipboard.writeText(window.location.href)
            ,
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                className: "ri-file-copy-line"
            })
        },
        {
            id: 'email',
            name: 'Enviar Email',
            shortcut: [
                'e'
            ],
            keywords: 'send-email',
            section: 'Geral',
            perform: ()=>window.open('mailto:contato@primata.tec.br', '_blank')
            ,
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                className: "ri-mail-line"
            })
        },
        {
            id: 'home',
            name: 'Home',
            shortcut: [
                'g',
                'h'
            ],
            keywords: 'go-home',
            section: 'Ir para',
            perform: ()=>router.push('/')
            ,
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                className: "ri-home-5-line"
            })
        },
        {
            id: 'about',
            name: 'Sobre',
            shortcut: [
                'g',
                'a'
            ],
            keywords: 'go-about',
            section: 'Ir para',
            perform: ()=>router.push('/sobre')
            ,
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                className: "ri-user-line"
            })
        },
        {
            id: 'projects',
            name: 'Projetos',
            shortcut: [
                'g',
                'p'
            ],
            keywords: 'go-projects',
            section: 'Ir para',
            perform: ()=>router.push('/projetos')
            ,
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                className: "ri-lightbulb-line"
            })
        },
        {
            id: 'uses',
            name: 'Setup',
            shortcut: [
                'g',
                's'
            ],
            keywords: 'go-uses',
            section: 'Ir para',
            perform: ()=>router.push('/setup')
            ,
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                className: "ri-computer-line"
            })
        }, 
    ];
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(kbar__WEBPACK_IMPORTED_MODULE_2__.KBarProvider, {
        actions: actions,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(kbar__WEBPACK_IMPORTED_MODULE_2__.KBarPortal, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Positioner, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Animator, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Search, {
                                placeholder: "Digite um comando ou pesquise…"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RenderResults, {})
                        ]
                    })
                })
            }),
            props.children
        ]
    }));
};
function RenderResults() {
    const { results  } = (0,kbar__WEBPACK_IMPORTED_MODULE_2__.useDeepMatches)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(kbar__WEBPACK_IMPORTED_MODULE_2__.KBarResults, {
        items: results,
        onRender: ({ item , active  })=>typeof item === 'string' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GroupName, {
                children: item
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ResultItem, {
                action: item,
                active: active
            })
    }));
}
const ResultItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ action , active  }, ref)=>{
    var ref1;
    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .x, {
        ref: ref,
        css: getResultStyle(active),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Action, {
                children: [
                    action.icon && action.icon,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ActionRow, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: action.name
                        })
                    })
                ]
            }),
            ((ref1 = action.shortcut) === null || ref1 === void 0 ? void 0 : ref1.length) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Shortcut, {
                "aria-hidden": true,
                children: action.shortcut.map((shortcut)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Kbd, {
                        children: shortcut
                    }, shortcut)
                )
            }) : null
        ]
    });
});
ResultItem.displayName = 'ResultItem';
const Positioner = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_4__/* .styled */ .zo)(kbar__WEBPACK_IMPORTED_MODULE_2__.KBarPositioner, {
    position: 'fixed',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    inset: '0px',
    padding: '14vh 16px 16px',
    background: 'rgba(0, 0, 0, .8)',
    boxSizing: 'border-box'
});
const Search = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_4__/* .styled */ .zo)(kbar__WEBPACK_IMPORTED_MODULE_2__.KBarSearch, {
    padding: '12px 16px',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',
    border: 'none',
    margin: 0,
    background: '$command',
    color: '$primary'
});
const GroupName = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_4__/* .styled */ .zo)('div', {
    padding: '8px 16px',
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    background: '$command'
});
const Icon = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_4__/* .styled */ .zo)('i', {
    fontSize: '20px',
    position: 'relative',
    top: '-2px'
});
const Kbd = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_4__/* .styled */ .zo)('kbd', {
    background: 'rgba(255, 255, 255, .1)',
    color: '$secondary',
    padding: '4px 8px',
    textTransform: 'uppercase'
});
const Shortcut = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_4__/* .styled */ .zo)('div', {
    display: 'grid',
    gridAutoFlow: 'column',
    gap: '4px'
});
const Action = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_4__/* .styled */ .zo)('div', {
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
});
const ActionRow = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_4__/* .styled */ .zo)('div', {
    display: 'flex',
    flexDirection: 'column'
});
const Animator = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_4__/* .styled */ .zo)(kbar__WEBPACK_IMPORTED_MODULE_2__.KBarAnimator, {
    backgroundColor: '#1a1c1e',
    maxWidth: '600px',
    width: '100%',
    color: '$primary',
    borderRadius: '8px',
    overflow: 'hidden',
    '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
        backgroundColor: '$command',
        WebkitBackdropFilter: 'saturate(300%) blur(25px)',
        backdropFilter: 'saturate(300%) blur(25px)'
    }
});
const getResultStyle = (active)=>({
        padding: '12px 16px',
        background: active ? 'rgba(255, 255, 255, 0.1)' : '$command',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 0,
        cursor: 'pointer',
        color: active ? '$primary' : '$secondary'
    })
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ GA_TRACKING_ID),
/* harmony export */   "L": () => (/* binding */ pageview)
/* harmony export */ });
const GA_TRACKING_ID = 'UA-4114546-2';
const pageview = (url)=>{
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url
    });
};


/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CommandBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3155);
/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1474);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_CommandBar__WEBPACK_IMPORTED_MODULE_2__]);
_components_CommandBar__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






next_router__WEBPACK_IMPORTED_MODULE_1___default().events.on('routeChangeComplete', (url)=>_lib_gtag__WEBPACK_IMPORTED_MODULE_3__/* .pageview */ .L(url)
);
const Noop = ({ children  })=>children
;
function MyApp({ Component , pageProps  }) {
    const Layout = Component.Layout || Noop;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CommandBar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Layout, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3437:
/***/ ((module) => {

module.exports = require("kbar");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = import("@stitches/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [958], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();