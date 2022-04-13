"use strict";
(() => {
var exports = {};
exports.id = 827;
exports.ids = [827];
exports.modules = {

/***/ 5702:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FeaturedProject)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _stitches_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2958);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _stitches_config__WEBPACK_IMPORTED_MODULE_3__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _stitches_config__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function FeaturedProject(props) {
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
        width: 180
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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3841:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ FeaturedProjects),
/* harmony export */   "Z": () => (/* binding */ ContainerProject)
/* harmony export */ });
/* harmony import */ var _stitches_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2958);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stitches_config__WEBPACK_IMPORTED_MODULE_0__]);
_stitches_config__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const FeaturedProjects = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)('div', {
    margin: '10px 0 0 -20px',
    display: 'flex',
    flexDirection: 'column',
    '@bp2': {
        flexDirection: 'row'
    }
});
const ContainerProject = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)('div', {
    '@bp2': {
        display: 'grid',
        flexDirection: 'column',
        gridTemplateColumns: 'repeat(2, 1fr)'
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const items = [
    {
        year: '2022',
        company: 'Pessoal',
        projects: [
            {
                title: 'CryptoMarket',
                description: 'Site para pre\xe7os das criptomoedas, gr\xe1ficos de pre\xe7os, calculadoras',
                url: 'https://cryptomarket.ialexanderbrito.dev/',
                icon: 'bit-coin',
                active: true,
                image: 'static/images/projects/cryptomarket.png'
            },
            {
                title: 'rastre.io',
                description: 'Site para rastreamento de encomendas',
                url: 'https://rastreio.ialexanderbrito.dev',
                icon: 'truck',
                active: true,
                image: 'static/images/projects/rastreio.png'
            },
            {
                title: 'DevFinder',
                description: 'Site de pesquisa de usu\xe1rios do GitHub',
                url: 'http://devfinder.ialexanderbrito.dev/',
                icon: 'code',
                active: true,
                image: 'static/images/projects/devfinder.png'
            },
            {
                title: 'Banco Neon \xb7 Clone',
                description: 'Clone do site do Banco Neon',
                url: 'https://neon.ialexanderbrito.dev/',
                icon: 'shopping-basket',
                active: true,
                image: 'static/images/projects/neon.png'
            },
            {
                title: 'Hello \xb7 TCC',
                description: 'Projeto de Conclus\xe3o de Curso',
                icon: 'shopping-basket',
                active: true,
                image: 'static/images/projects/hello.png'
            },
            {
                title: 'Menuria',
                description: 'Sistema de ordens de pedidos para restaurantes',
                url: 'https://menuria.ialexanderbrito.dev/',
                icon: 'shopping-basket',
                active: true,
                image: 'static/images/projects/menuria.png'
            },
            {
                title: 'Twitch \xb7 Clone',
                description: 'Clone do app da Twitch',
                url: 'https://expo.dev/@ialexanderbrito/twitchtv',
                icon: 'shopping-basket',
                active: true,
                image: 'static/images/projects/twitch.png'
            },
            {
                title: 'Marvel App',
                description: 'App de busca de personagens da Marvel',
                url: 'https://expo.dev/@ialexanderbrito/marvel-app',
                icon: 'shopping-basket',
                active: true,
                image: 'static/images/projects/marvel.png'
            },
            {
                title: 'Hospital Score',
                description: 'App de gerenciamento de hospital',
                url: 'https://github.com/ialexanderbrito/hospital-score',
                icon: 'shopping-basket',
                active: true,
                image: 'static/images/projects/hospitalscore.png'
            },
            {
                title: 'Covid19 App',
                description: 'App de busca de dados do COVID-19',
                url: 'https://expo.dev/@ialexanderbrito/covid19',
                icon: 'shopping-basket',
                active: true,
                image: 'static/images/projects/covid19.png'
            },
            {
                title: 'Picpay \xb7 Clone',
                description: 'Clone do app da Picpay',
                url: 'https://github.com/ialexanderbrito/picpay-clone',
                icon: 'shopping-basket',
                active: true,
                image: 'static/images/projects/picpay.png'
            },
            {
                title: 'Carrinho de Loja',
                description: 'App de compra de produtos',
                url: 'https://github.com/ialexanderbrito/product',
                icon: 'shopping-basket',
                active: true,
                image: 'static/images/projects/product.png'
            }, 
        ]
    },
    {
        year: '2022',
        company: 'IK Solution',
        projects: [
            {
                title: 'Petros',
                description: 'Sistema FlexPrev Pretros',
                icon: 'shopping-basket',
                active: true,
                image: 'static/images/projects/petros.png'
            },
            {
                title: 'Antecipa F\xe1cil',
                description: 'Sistema de antecipa\xe7\xe3o de faturas',
                icon: 'shopping-basket',
                active: true,
                image: 'static/images/projects/antecipa.png'
            },
            {
                title: 'Faltas',
                description: 'Sistema de controle de faltas para Poliedro',
                icon: 'shopping-basket',
                active: true,
                image: 'static/images/projects/faltas.png'
            },
            {
                title: '',
                description: '',
                icon: 'shopping-basket',
                active: true,
                image: ''
            }, 
        ]
    },
    {
        year: '2022',
        company: 'Rocketseat',
        projects: [
            {
                title: 'DoWhile \xb7 NLW#7',
                description: 'Sistema para chat do evento da Rocketseat',
                url: 'https://dowhile-oficial.vercel.app/',
                icon: 'shopping-basket',
                active: true,
                image: 'static/images/projects/dowhile.png'
            },
            {
                title: 'Letmeask \xb7 NLW#6',
                description: 'Sistema para salas de Q&A e ao vivo',
                url: 'https://letmeask-oficial.web.app/',
                icon: 'shopping-basket',
                active: true,
                image: 'static/images/projects/letmeask.png'
            },
            {
                title: 'Plant Manager \xb7 NLW#5',
                description: 'Sistema para irriga\xe7\xe3o de plantas',
                url: 'https://expo.dev/@ialexanderbrito/plantmanager',
                icon: 'shopping-basket',
                active: true,
                image: 'static/images/projects/plantmanager.png'
            },
            {
                title: 'Moveit \xb7 NLW#4',
                description: 'App que utiliza a t\xe9cnica de pomodoro, com o objetivo de melhorar sua produtividade e foco',
                url: 'https://moveit.ialexanderbrito.dev/',
                icon: 'shopping-basket',
                active: true,
                image: 'static/images/projects/moveit.png'
            },
            {
                title: 'Happy \xb7 NLW#3',
                description: 'Uma plataforma que ajuda pessoas a sem conectarem com orfanatos pr\xf3ximos e podendo assim, o usu\xe1rio agender uma visita e fazer o dia de uma crian\xe7a mais feliz',
                url: 'https://moveit.ialexanderbrito.dev/',
                icon: 'shopping-basket',
                active: true,
                image: 'static/images/projects/happy.png'
            },
            {
                title: 'Proffy \xb7 NLW#2',
                description: 'Uma plataforma de estudos onlines para alunos encontrarem professores de diversas mat\xe9rias para focar nos estudos de forma online',
                url: 'https://proffy.ialexanderbrito.dev/',
                icon: 'shopping-basket',
                active: true,
                image: 'static/images/projects/proffy.png'
            },
            {
                title: 'Ecoleta \xb7 NLW#1',
                description: 'Sistema para conectar empresas e entidades de coleta de res\xedduos org\xe2nicos e inorg\xe2nicos as pessoas que precisam descartar seus res\xedduos de maneira ecol\xf3gica',
                url: 'https://ecoleta.ialexanderbrito.dev/',
                icon: 'shopping-basket',
                active: true,
                image: 'static/images/projects/ecoleta.png'
            },
            {
                title: 'Be The Hero \xb7 OmniStack#11',
                description: 'Sistema que visa ajudar, de maneira financeira uma institui\xe7\xe3o de caridade, ajudando a mesma se manter',
                url: 'https://bethehero.ialexanderbrito.dev/',
                icon: 'shopping-basket',
                active: true,
                image: 'static/images/projects/be-the-hero.png'
            },
            {
                title: 'DevRadar \xb7 OmniStack#10',
                description: 'Sistema que visa facilitar a busca por desenvolvedores que residem pr\xf3ximo a voc\xea',
                url: 'https://devradar.ialexanderbrito.dev/',
                icon: 'shopping-basket',
                active: true,
                image: 'static/images/projects/devradar.png'
            },
            {
                title: 'Aircnc \xb7 OmniStack#9',
                description: 'Sistema para conectar empresas e desenvolvedores que procuram um lugar em comum para se conhecer',
                url: 'mohttps://aircnc.ialexanderbrito.dev',
                icon: 'shopping-basket',
                active: true,
                image: 'static/images/projects/aircnc.png'
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

/***/ 5885:
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
/* harmony import */ var _stitches_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(796);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_FeaturedProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5702);
/* harmony import */ var _components_FeaturedProjects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3841);
/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5314);
/* harmony import */ var _layouts_Base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4686);
/* harmony import */ var _lib_strip_html__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7095);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stitches_react__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__, _components_FeaturedProject__WEBPACK_IMPORTED_MODULE_5__, _components_FeaturedProjects__WEBPACK_IMPORTED_MODULE_6__, _layouts_Base__WEBPACK_IMPORTED_MODULE_8__]);
([_stitches_react__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__, _components_FeaturedProject__WEBPACK_IMPORTED_MODULE_5__, _components_FeaturedProjects__WEBPACK_IMPORTED_MODULE_6__, _layouts_Base__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












async function getStaticProps() {
    const meta = {
        title: 'Projetos | Alexander',
        tagline: 'Trabalho, hobby & open source.',
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
            'CryptoMarket',
            'DevFinder',
            'rastre.io',
            'Menuria'
        ];
        return _data_projects__WEBPACK_IMPORTED_MODULE_7__/* ["default"].map */ .Z.map((item)=>item.projects.filter((project)=>featured.includes(project.title)
            )
        ).filter((item)=>{
            if (item.length > 0) {
                return item;
            }
        }).flat().map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FeaturedProject__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                project: item
            }, index)
        );
    };
    const renderProjects = ()=>_data_projects__WEBPACK_IMPORTED_MODULE_7__/* ["default"].map */ .Z.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: item.company
                        })
                    }, index),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                    item.projects.map((project, pIndex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: project.title === '' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}, pIndex) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Article, {
                                href: project.url,
                                target: "_blank",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Animation, {
                                    index: pIndex,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ImageContainer, {
                                            css: {
                                                backgroundImage: `url(${project.image})`
                                            }
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Content, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                                                    children: project.title
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Description, {
                                                    dangerouslySetInnerHTML: {
                                                        __html: project.description
                                                    }
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    )
                ]
            })
        )
    ;
    const getTotalProjects = ()=>{
        let total = 0;
        for(let i = 0; i < _data_projects__WEBPACK_IMPORTED_MODULE_7__/* ["default"].length */ .Z.length; i++){
            total = total + _data_projects__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z[i].projects.length;
        }
        return total;
    };
    const { title , image  } = props;
    const description = `Essa página lista os <strong>${getTotalProjects()}</strong> principais projeto(s) que desenvolvi durante a minha jornada como programador.`;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: title,
                        property: "og:title"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: (0,_lib_strip_html__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(description),
                        name: "description"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: (0,_lib_strip_html__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(description),
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimateSharedLayout, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        dangerouslySetInnerHTML: {
                            __html: description
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Projetos Populares"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FeaturedProjects__WEBPACK_IMPORTED_MODULE_6__/* .FeaturedProjects */ .s, {
                        children: renderFeatured()
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Todos Projetos"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FeaturedProjects__WEBPACK_IMPORTED_MODULE_6__/* .ContainerProject */ .Z, {
                        children: renderProjects()
                    })
                ]
            })
        ]
    }));
}
const Article = (0,_stitches_react__WEBPACK_IMPORTED_MODULE_2__.styled)('a', {
    border: '0',
    width: '330px',
    padding: '10px',
    textDecoration: 'none',
    filter: 'grayscale(1)',
    '&:hover': {
        opacity: 1,
        filter: 'grayscale(0)'
    },
    '&:first-child': {
        marginLeft: 0
    }
});
const ImageContainer = (0,_stitches_react__WEBPACK_IMPORTED_MODULE_2__.styled)('div', {
    borderRadius: '8px',
    width: '330px',
    height: '180px',
    marginBottom: '20px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
});
const Content = (0,_stitches_react__WEBPACK_IMPORTED_MODULE_2__.styled)('div', {
    maxWidth: '450px',
    marginRight: '20px',
    '@bp2': {
        maxWidth: '100%',
        marginRight: 0
    }
});
const Title = (0,_stitches_react__WEBPACK_IMPORTED_MODULE_2__.styled)('h3', {
    color: '$primary',
    margin: 0
});
const Description = (0,_stitches_react__WEBPACK_IMPORTED_MODULE_2__.styled)('p', {
    color: '$secondary',
    display: '-webkit-box',
    margin: 0,
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
});
const AnimContainer = (0,_stitches_react__WEBPACK_IMPORTED_MODULE_2__.styled)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
    position: 'relative',
    width: '100%',
    padding: '20px'
});
const AnimHovered = (0,_stitches_react__WEBPACK_IMPORTED_MODULE_2__.styled)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: '$hover',
    borderRadius: '$borderRadius',
    zIndex: -1
});
function Animation(props) {
    const { 0: hovered , 1: setHovered  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const isHovered = hovered === props.index;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AnimContainer, {
        onHoverStart: ()=>setHovered(props.index)
        ,
        onHoverEnd: ()=>setHovered('')
        ,
        className: "featured-article-anim",
        children: [
            isHovered && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnimHovered, {
                layoutId: "featuredArticles",
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
Projects.Layout = _layouts_Base__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z;
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
var __webpack_exports__ = __webpack_require__.X(0, [730,61,958,232,686], () => (__webpack_exec__(5885)));
module.exports = __webpack_exports__;

})();