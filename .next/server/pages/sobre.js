"use strict";
(() => {
var exports = {};
exports.id = 236;
exports.ids = [236];
exports.modules = {

/***/ 8890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const items = [
    {
        jobTitle: 'Desenvolvedor Front-end Pleno',
        company: 'IK Solution',
        companyUrl: 'https://iksolution.com.br/',
        startDate: '2021-10',
        location: 'S\xe3o Paulo, SP'
    },
    {
        jobTitle: 'Desenvolvedor Front-end J\xfanior',
        company: 'IK Solution',
        companyUrl: 'https://iksolution.com.br/',
        startDate: '2020-12',
        endDate: '2021-10',
        location: 'S\xe3o Paulo, SP'
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

/***/ 7349:
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var _data_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8890);
/* harmony import */ var _layouts_Base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4686);
/* harmony import */ var _lib_strip_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7095);
/* harmony import */ var _stitches_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2958);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_Base__WEBPACK_IMPORTED_MODULE_6__, _stitches_config__WEBPACK_IMPORTED_MODULE_7__]);
([_layouts_Base__WEBPACK_IMPORTED_MODULE_6__, _stitches_config__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









async function getStaticProps() {
    const meta = {
        title: 'Sobre | Primata LAB',
        description: 'Me chamo Alexander, desenvolvedor front-end e flamenguista! Nas redes sociais conhecido como @ialexanderbrito',
        tagline: 'Sobre a LAB',
        image: '/static/images/about-bw.jpg',
        primaryColor: 'cyan',
        secondaryColor: 'green'
    };
    return {
        props: meta
    };
}
const yearAnniversary = new Date('1997-03-31');
function About(props) {
    const { title , description , image  } = props;
    const renderIntro = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Section, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        alt: "Alexander",
                        src: "/static/images/alexander.jpg",
                        width: "336",
                        height: "336",
                        priority: true
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Section, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Paragraph, {
                            css: {
                                marginTop: '16px',
                                '@bp2': {
                                    marginTop: '-6px'
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                    children: [
                                        "Oi, eu sou Alexander e tenho ",
                                        new Date().getFullYear() - yearAnniversary.getFullYear(),
                                        " anos."
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "Sou Desenvolvedor front-end Web e Mobile, formado em Sistemas de Informa\xe7\xe3o na Universidade Unigranrio ."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Paragraph, {
                            children: [
                                "Atualmente trabalhando na",
                                ' ',
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "IK Solution"
                                }),
                                " como ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "desenvolvedor Front-end Pleno"
                                }),
                                " e estudando UI Designer pelo curso ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "uiBoost"
                                }),
                                "."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Paragraph, {
                            children: [
                                "Nas horas vagas gosto de desenvolver aplica\xe7\xf5es e clonar apps que j\xe1 est\xe3o no mercado para aperfei\xe7oar meus estudos e tamb\xe9m focando os estudos na parte ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "UI/UX Design"
                                }),
                                "."
                            ]
                        })
                    ]
                })
            ]
        })
    ;
    const renderBio = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("blockquote", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: description
                })
            })
        })
    ;
    const renderAll = ()=>_data_about__WEBPACK_IMPORTED_MODULE_5__/* ["default"].map */ .Z.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    marginBottom: 40
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: item.jobTitle
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        style: {
                            margin: 0
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: item.companyUrl,
                                target: "_blank",
                                rel: "noreferrer",
                                children: item.company
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                children: [
                                    " • ",
                                    item.location
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        style: {
                            margin: 0
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.parseISO)(item.startDate), 'LLL yyyy')
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: " – "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: item.endDate ? (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.parseISO)(item.endDate), 'LLL yyyy') : 'Presente'
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: " • "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: getDuration(item.startDate, item.endDate)
                            })
                        ]
                    })
                ]
            }, index)
        )
    ;
    const getDuration = (startDate, endDate)=>{
        const durationObj = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.intervalToDuration)({
            start: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.parseISO)(startDate),
            end: endDate ? (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.parseISO)(endDate) : new Date()
        });
        let durationStr = '';
        if (durationObj.years > 1) {
            durationStr = `${durationObj.years} anos `;
        } else if (durationObj.years === 1) {
            durationStr = `${durationObj.years} ano `;
        }
        if (durationObj.months > 1) {
            durationStr += `${durationObj.months} meses `;
        } else if (durationObj.months === 1) {
            durationStr += `${durationObj.months} mês `;
        }
        return durationStr;
    };
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
                        content: (0,_lib_strip_html__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(description),
                        name: "description"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: (0,_lib_strip_html__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(description),
                        property: "og:description"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: "https://ialexanderbrito.dev/about",
                        property: "og:url"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: `https://ialexanderbrito.dev${image}`,
                        property: "og:image"
                    })
                ]
            }),
            renderIntro(),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Bio"
            }),
            renderBio(),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Carreira"
            }),
            renderAll()
        ]
    }));
}
const Container = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_7__/* .styled */ .zo)('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '@bp2': {
        flexDirection: 'row'
    }
});
const Paragraph = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_7__/* .styled */ .zo)('p', {
    '@bp2': {
        margin: '15px 0'
    }
});
const Section = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_7__/* .styled */ .zo)('div', {
    marginTop: '0px',
    width: 'auto',
    '@bp2': {
        width: '48%'
    }
});
About.Layout = _layouts_Base__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,61,958,232,686], () => (__webpack_exec__(7349)));
module.exports = __webpack_exports__;

})();