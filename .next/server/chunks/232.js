"use strict";
exports.id = 232;
exports.ids = [232];
exports.modules = {

/***/ 747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/primata.25291e46.png","height":146,"width":497,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAKUlEQVR42mP818DAxbCBQY7hB8NPIOs/479rDM8ZEhmkGVgZmBmYGdgBtWwInApj5X0AAAAASUVORK5CYII="});

/***/ }),

/***/ 3193:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stitches_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2958);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stitches_config__WEBPACK_IMPORTED_MODULE_1__]);
_stitches_config__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function Footer() {
    const links = [
        {
            title: 'Instagram',
            url: 'https://instagram.com/ialexanderbrito',
            icon: 'ri-instagram-line',
            color: '#e1306c'
        },
        {
            title: 'Twitter',
            url: 'https://twitter.com/ialexanderbrito',
            icon: 'ri-twitter-line',
            color: '#00ACEE'
        },
        {
            title: 'GitHub',
            url: 'https://github.com/ialexanderbrito',
            icon: 'ri-github-line',
            color: '#777'
        },
        {
            title: 'linkedin',
            url: 'https://linkedin.com/in/ialexanderbrito',
            icon: 'ri-linkedin-line',
            color: '#0077b5'
        },
        {
            title: 'twitch',
            url: 'https://twitch.com/ialexanderbrito',
            icon: 'ri-twitch-line',
            color: '#9146ff'
        },
        {
            title: 'discord',
            url: 'https://discord.com/users/348275303400996864/',
            icon: 'ri-discord-line',
            color: '#7289da'
        },
        {
            title: 'Source',
            url: 'https://github.com/ialexanderbrito/ialexanderbrito.dev',
            icon: 'ri-braces-line',
            color: '#f1f1f1'
        }, 
    ];
    return(/*#__PURE__*/ _jsx(Container, {
        children: links.map((link, index)=>/*#__PURE__*/ _jsxs(Anchor, {
                href: link.url,
                target: "_blank",
                css: {
                    '&:hover': {
                        color: link.color,
                        'i::before': {
                            color: link.color
                        }
                    }
                },
                children: [
                    /*#__PURE__*/ _jsx(Title, {
                        children: link.title
                    }),
                    /*#__PURE__*/ _jsx(Icon, {
                        className: link.icon
                    })
                ]
            }, index)
        )
    }));
};
const Container = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)('footer', {
    background: '$background',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 0',
    zIndex: '1'
});
const Icon = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)('i', {
    color: '$primary',
    opacity: 1,
    marginLeft: '5px',
    marginTop: '1px',
    fontSize: '24px',
    '@bp2': {
        opacity: 0,
        fontSize: '16px'
    }
});
const Anchor = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)('a', {
    color: '$secondary',
    display: 'flex',
    fontSize: '15px',
    border: 0,
    marginLeft: '20px',
    textDecoration: 'none',
    textTransform: 'lowercase',
    transition: 'color $duration ease-in-out',
    '&:hover, &:focus': {
        color: '$primary',
        opacity: 1
    },
    [`&:hover ${Icon}`]: {
        transition: 'opacity $duration ease-in-out',
        opacity: 1
    },
    '&:first-child': {
        margin: '0'
    }
});
const Title = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)('span', {
    display: 'none',
    '@bp2': {
        display: 'block'
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8010:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var kbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3437);
/* harmony import */ var kbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(kbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _stitches_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2958);
/* harmony import */ var _public_static_images_primata_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(747);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _stitches_config__WEBPACK_IMPORTED_MODULE_7__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _stitches_config__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Navbar() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const pages = [
        'Sobre'
    ];
    const { 0: hovered , 1: setHovered  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { query  } = (0,kbar__WEBPACK_IMPORTED_MODULE_3__.useKBar)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimateSharedLayout, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Header, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    href: "/",
                    passHref: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonLogo, {
                        as: "a",
                        style: {
                            background: `linear-gradient(
              135deg,
              var(--colors-cyan) 0%,
              var(--colors-green) 100%
            )`,
                            backgroundSize: '100',
                            '-webkit-background-clip': 'text',
                            '-moz-background-clip': 'text',
                            '-webkit-text-fill-color': 'transparent',
                            '-moz-text-fill-color': 'transparent'
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            src: _public_static_images_primata_png__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                            width: "130",
                            height: "40",
                            alt: "Logo da primata"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Nav, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Aside, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonHeader, {
                        as: "button",
                        type: "button",
                        "aria-label": "Command",
                        onClick: query.toggle,
                        css: {
                            padding: '0 8px'
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                            className: "ri-command-line"
                        })
                    })
                })
            ]
        })
    }));
};
const Header = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_7__/* .styled */ .zo)('header', {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    fontSize: '12px',
    minHeight: '59px',
    width: '100%',
    flexWrap: 'wrap',
    position: 'absolute',
    top: '0',
    zIndex: 3,
    marginTop: '13px',
    '@bp2': {
        marginTop: '0'
    }
});
const List = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_7__/* .styled */ .zo)('ul', {
    margin: '0',
    padding: '0',
    listStyle: 'none',
    display: 'inline-flex',
    position: 'relative',
    top: '5px',
    '@bp1': {
        justifyContent: 'space-around'
    }
});
const ButtonHeader = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_7__/* .styled */ .zo)('div', {
    appearance: 'none',
    background: 'transparent',
    border: 'none',
    borderRadius: '$borderRadius',
    color: 'white',
    cursor: 'pointer',
    cursor: 'pointer',
    height: '34px',
    padding: '0 10px',
    transition: 'background $duration ease-in-out',
    '&:hover': {
        background: '$hover'
    }
});
const Icon = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_7__/* .styled */ .zo)('i', {
    fontSize: '24px',
    lineHeight: '32px'
});
const ButtonLogo = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_7__/* .styled */ .zo)(ButtonHeader, {
    fontWeight: 700,
    fontSize: '32px',
    textDecoration: 'none',
    marginLeft: '12px',
    fontFamily: '$heading'
});
const Nav = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_7__/* .styled */ .zo)('nav', {
    textAlign: 'center',
    flex: 1,
    order: 2,
    flexBasis: '100%',
    '@bp2': {
        order: 0,
        flexBasis: 'initial'
    },
    '@bp3': {
        overflowX: 'scroll',
        overflowY: 'hidden'
    }
});
const Aside = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_7__/* .styled */ .zo)('div', {
    display: 'flex',
    alignItems: 'center',
    paddingRight: '12px',
    marginLeft: 'auto'
});
const Anchor = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_7__/* .styled */ .zo)('a', {
    border: 0,
    position: 'relative',
    '&:hover, &:focus': {
        opacity: 1
    }
});
const NavContainer = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_7__/* .styled */ .zo)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {
    color: '$secondary',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: '1.2px',
    padding: '20px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: 'color $duration ease-in-out',
    '&:hover': {
        color: '$primary'
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        margin: '0px auto',
        top: '18px',
        left: '0px',
        right: '0px',
        height: '1px',
        width: '20px',
        background: 'rgb(255, 255, 255)',
        opacity: 0,
        transition: 'opacity $duration ease-in-out'
    }
});
const NavHovered = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_7__/* .styled */ .zo)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {
    position: 'absolute',
    top: '-15px',
    left: '0',
    right: '0',
    background: '$hover',
    padding: 20,
    borderRadius: '$borderRadius',
    zIndex: -1
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4438:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dn": () => (/* binding */ PostMain),
/* harmony export */   "b6": () => (/* binding */ PostContainer),
/* harmony export */   "C2": () => (/* binding */ PostContent)
/* harmony export */ });
/* unused harmony export Post */
/* harmony import */ var _stitches_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2958);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stitches_config__WEBPACK_IMPORTED_MODULE_0__]);
_stitches_config__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const PostMain = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)('main', {
    '@bp2': {
        padding: '$navHeightDesktop 0'
    },
    padding: '$navHeightMobile 0',
    overflow: 'hidden',
    flex: '1 1'
});
const Post = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)('main', {
    overflow: 'hidden',
    flex: '1 1'
});
const PostContainer = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)('div', {
    margin: '0 auto',
    maxWidth: '760px',
    padding: '0 20px'
});
const PostContent = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)('div', {
    fontSize: '16px',
    lineHeight: '32px',
    color: '$secondary',
    background: '$background',
    position: 'relative',
    zIndex: 1,
    height: '100%',
    padding: '20px 0',
    '& .iframe-wrap': {
        height: '0',
        marginBottom: '20px',
        overflow: 'hidden',
        paddingBottom: '56.25%',
        paddingTop: '30px',
        position: 'relative'
    },
    '& .iframe-wrap iframe': {
        border: '0',
        height: '100%',
        left: '0',
        position: 'absolute',
        top: '0',
        width: '100%'
    },
    '& .post-image-caption': {
        color: '$secondary',
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: '14px'
    },
    '& .post-image-full': {
        margin: '20px 0 0',
        maxWidth: 'initial',
        width: '70vw',
        '@bp2': {
            marginLeft: 'calc(-1 * (70vw - 760px) / 2)'
        },
        '@bp4': {
            marginLeft: 0
        }
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5029:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var _stitches_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2958);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stitches_config__WEBPACK_IMPORTED_MODULE_0__]);
_stitches_config__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const Wrapper = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)('div', {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'relative',
    zIndex: 0
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;