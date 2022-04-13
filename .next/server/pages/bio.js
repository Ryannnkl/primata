"use strict";
(() => {
var exports = {};
exports.id = 133;
exports.ids = [133];
exports.modules = {

/***/ 4119:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Social),
/* harmony export */   "o": () => (/* binding */ SocialDiv)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _stitches_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2958);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _stitches_config__WEBPACK_IMPORTED_MODULE_3__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _stitches_config__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function Social(props) {
    const { project  } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Project, {
        href: project.url,
        target: "_blank",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Animation, {
            index: props.index,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconContainer, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: `ri-${project.icon}-line`
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Body, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                            children: project.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Description, {
                            children: project.description
                        }),
                        project.stats && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Stats, {
                            children: project.stats
                        })
                    ]
                })
            ]
        })
    }));
};
function Animation(props) {
    const { 0: hovered , 1: setHovered  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const isHovered = hovered === props.index;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AnimContainer, {
        onHoverStart: ()=>setHovered(props.index)
        ,
        onHoverEnd: ()=>setHovered('')
        ,
        children: [
            isHovered && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnimHovered, {
                layoutId: "featuredProjects",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                }
            }),
            props.children
        ]
    }));
}
const Project = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_3__/* .styled */ .zo)('a', {
    display: 'flex',
    transition: 'opacity $duration ease-in-out',
    border: '0',
    borderRadius: '$borderRadius',
    textDecoration: 'none',
    width: 'auto',
    '&:hover': {
        opacity: 1
    },
    '@bp2': {
        width: '100%'
    }
});
const IconContainer = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_3__/* .styled */ .zo)('div', {
    color: '$primary',
    fontSize: '24px',
    padding: '0 10px 0 0'
});
const Body = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_3__/* .styled */ .zo)('div', {
    flex: '1 1 auto'
});
const Title = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_3__/* .styled */ .zo)('p', {
    color: '$primary',
    margin: '0',
    fontSize: '18px'
});
const Description = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_3__/* .styled */ .zo)('p', {
    margin: '0',
    color: '$secondary',
    lineHeight: '24px'
});
const Stats = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_3__/* .styled */ .zo)('p', {
    margin: '5px 0 0',
    color: '$primary',
    textTransform: 'uppercase',
    display: 'inline-block',
    fontWeight: 500,
    letterSpacing: '1.2px',
    fontSize: '12px'
});
const AnimContainer = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_3__/* .styled */ .zo)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {
    position: 'relative',
    width: '100%',
    padding: '20px'
});
const AnimHovered = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_3__/* .styled */ .zo)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: '$hover',
    borderRadius: '$borderRadius',
    zIndex: -1
});
const SocialDiv = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_3__/* .styled */ .zo)('div', {
    display: 'grid',
    flexDirection: 'column',
    gridTemplateColumns: 'repeat(3, 1fr)',
    '@bp2': {
        flexDirection: 'column'
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const items = [
    {
        social: [
            {
                title: 'Github',
                url: 'https://github.com/ialexanderbrito',
                icon: 'github',
                active: true
            },
            {
                title: 'Twitter',
                url: 'https://twitter.com/ialexanderbrito',
                icon: 'twitter',
                active: true
            },
            {
                title: 'LinkedIn',
                url: 'https://www.linkedin.com/in/ialexanderbrito/',
                icon: 'linkedin',
                active: true
            },
            {
                title: 'Instagram',
                url: 'https://www.instagram.com/ialexanderbrito/',
                icon: 'instagram',
                active: true
            },
            {
                title: 'Discord',
                url: 'https://discordapp.com/users/348275303400996864/',
                icon: 'discord',
                active: true
            },
            {
                title: 'Twitch',
                url: 'https://www.twitch.tv/ialexanderbrito/',
                icon: 'twitch',
                active: true
            }, 
        ]
    }, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (items);


/***/ }),

/***/ 7095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ stripHtml)
/* harmony export */ });
function stripHtml(str) {
    return str.replace(/(<([^>]+)>)/gi, '');
};


/***/ }),

/***/ 7182:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Social__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4119);
/* harmony import */ var _data_social__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1812);
/* harmony import */ var _layouts_Base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4686);
/* harmony import */ var _lib_strip_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7095);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components_Social__WEBPACK_IMPORTED_MODULE_4__, _layouts_Base__WEBPACK_IMPORTED_MODULE_6__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components_Social__WEBPACK_IMPORTED_MODULE_4__, _layouts_Base__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








async function getStaticProps() {
    const meta = {
        title: 'Bio | Alexander',
        tagline: 'Links.',
        image: '#',
        primaryColor: 'cyan',
        secondaryColor: 'green'
    };
    return {
        props: meta
    };
}
function Projects(props) {
    const renderFeatured = ()=>{
        const featured = [
            'Github',
            'Twitter',
            'LinkedIn',
            'Instagram',
            'Discord',
            'Twitch', 
        ];
        return _data_social__WEBPACK_IMPORTED_MODULE_5__/* ["default"].map */ .Z.map((item)=>item.social.filter((project)=>featured.includes(project.title)
            )
        ).filter((item)=>{
            if (item.length > 0) {
                return item;
            }
        }).flat().map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Social__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                project: item
            }, index)
        );
    };
    const { title , image  } = props;
    const description = `Brota.`;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: title,
                        property: "og:title"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: (0,_lib_strip_html__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(description),
                        name: "description"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: (0,_lib_strip_html__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(description),
                        property: "og:description"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: "https://ialexanderbrito.dev/projects",
                        property: "og:url"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: `https://ialexanderbrito.dev${image}`,
                        property: "og:image"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimateSharedLayout, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        dangerouslySetInnerHTML: {
                            __html: description
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Social__WEBPACK_IMPORTED_MODULE_4__/* .SocialDiv */ .o, {
                        children: renderFeatured()
                    })
                ]
            })
        ]
    }));
}
Projects.Layout = _layouts_Base__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3437:
/***/ ((module) => {

module.exports = require("kbar");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,958,232,686], () => (__webpack_exec__(7182)));
module.exports = __webpack_exports__;

})();