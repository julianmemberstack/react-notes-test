exports.id = 130;
exports.ids = [130];
exports.modules = {

/***/ 137:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6514))

/***/ }),

/***/ 1163:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23))

/***/ }),

/***/ 6514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _devlink_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2290);
/* harmony import */ var _devlink_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_devlink_global_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _devlink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4012);
/* harmony import */ var _memberstack_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2866);
/* __next_internal_client_entry_do_not_use__ default auto */ 
// layout.tsx



const config = {
    publicKey: "pk_sb_632bf75a1f1cf9f374f5"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_memberstack_react__WEBPACK_IMPORTED_MODULE_3__.MemberstackProvider, {
        config: config,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
            lang: "en",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_devlink__WEBPACK_IMPORTED_MODULE_2__/* .DevLinkProvider */ .To, {
                    children: children
                })
            })
        })
    });
}


/***/ }),

/***/ 4012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V2: () => (/* reexport */ BlankSection),
  y0: () => (/* reexport */ ButtonFake),
  Zb: () => (/* reexport */ Card),
  uO: () => (/* reexport */ CardSection),
  It: () => (/* reexport */ ContentSectionRight),
  To: () => (/* reexport */ DevLinkProvider),
  o4: () => (/* reexport */ FaqSection),
  $_: () => (/* reexport */ Footer),
  bv: () => (/* reexport */ FormBlock),
  H2: () => (/* reexport */ H2),
  VM: () => (/* reexport */ Hero),
  Yu: () => (/* reexport */ HeroFlat),
  Bw: () => (/* reexport */ LoadingBlock),
  h3: () => (/* reexport */ LogoSection),
  JL: () => (/* reexport */ Nav),
  MN: () => (/* reexport */ NavMember),
  R9: () => (/* reexport */ PencilBar),
  tw: () => (/* reexport */ PricingSection),
  oi: () => (/* reexport */ TextInput),
  qN: () => (/* reexport */ ValueSection)
});

// UNUSED EXPORTS: Button, DevLinkContext, EASING_FUNCTIONS, InteractionsProvider, KEY_CODES, _Builtin, cj, createIX2Engine, cx, debounce, dispatchCustomEvent, extractElement, isServer, isUrl, loadScript, removeUnescaped, replaceSelector, triggerIXEvent, useClickOut, useIXEvent, useInteractions, useLayoutEffect, useResizeObserver

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
;// CONCATENATED MODULE: ./devlink/utils.js

const cx = (style, ...classNames)=>utils_cj(...classNames.map((c)=>style[c] ?? c));
const utils_cj = (...classNames)=>classNames.filter(Boolean).join(" ");
const UNESCAPED_CHARS = /(\\b|\\f|\\r\\n|\\n|\\r|\\t|\\v)/gm;
const removeUnescaped = (value)=>decodeURIComponent(value).replace(UNESCAPED_CHARS, "");
const CSS_CLASS = /\.-?[_a-zA-Z]+[_a-zA-Z0-9-]*/g;
const WHITE_SPACE = /\s+/g;
const replaceSelector = (selector, styles)=>{
    return selector.replace(new RegExp(CSS_CLASS), (match)=>{
        const segment = styles[match.replace(".", "")];
        if (!segment) return match;
        if (new RegExp(WHITE_SPACE).test(segment)) {
            const segmentSelector = segment.split(WHITE_SPACE).map((w)=>"." + w).join(",");
            return `:is(${segmentSelector})`;
        }
        return `.${segment}`;
    });
};
function utils_debounce(func, timeout = 0) {
    let timer;
    return (...args)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func.apply(this, args);
        }, timeout);
    };
}
const utils_EASING_FUNCTIONS = {
    linear: "linear",
    ease: "ease",
    "ease-in": "ease-in",
    "ease-out": "ease--out",
    "ease-in-out": "ease-in-out",
    "ease-in-sine": "cubic-bezier(0.12, 0, 0.39, 0)",
    "ease-out-sine": "cubic-bezier(0.61, 1, 0.88, 1)",
    "ease-in-out-sine": "cubic-bezier(0.37, 0, 0.63, 1)",
    "ease-in-quad": "cubic-bezier(0.11, 0, 0.5, 0)",
    "ease-out-quad": "cubic-bezier(0.5, 1, 0.89, 1)",
    "ease-in-out-quad": "cubic-bezier(0.45, 0, 0.55, 1)",
    "ease-in-cubic": "cubic-bezier(0.32, 0, 0.67, 0)",
    "ease-out-cubic": "cubic-bezier(0.33, 1, 0.68, 1)",
    "ease-in-out-cubic": "cubic-bezier(0.65, 0, 0.35, 1)",
    "ease-in-quart": "cubic-bezier(0.5, 0, 0.75, 0)",
    "ease-out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
    "ease-in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
    "ease-in-quint": "cubic-bezier(0.64, 0, 0.78, 0)",
    "ease-out-quint": "cubic-bezier(0.22, 1, 0.36, 1)",
    "ease-in-out-quint": "cubic-bezier(0.83, 0, 0.17, 1)",
    "ease-in-expo": "cubic-bezier(0.7, 0, 0.84, 0)",
    "ease-out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
    "ease-in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
    "ease-in-circ": "cubic-bezier(0.55, 0, 1, 0.45)",
    "ease-out-circ": "cubic-bezier(0, 0.55, 0.45, 1)",
    "ease-in-out-circ": "cubic-bezier(0.85, 0, 0.15, 1)",
    "ease-in-back": "cubic-bezier(0.36, 0, 0.66, -0.56)",
    "ease-out-back": "cubic-bezier(0.34, 1.56, 0.64, 1)",
    "ease-in-out-back": "cubic-bezier(0.68, -0.6, 0.32, 1.6)"
};
const utils_isServer = "undefined" === "undefined";
const utils_useLayoutEffect = utils_isServer ? ()=>{} : react_.useLayoutEffect;
function utils_useResizeObserver(ref, fn, options) {
    const [prevWidth, setPrevWidth] = React.useState(ref.current?.clientWidth || 0);
    React.useEffect(()=>{
        if (ref.current?.clientWidth) {
            setPrevWidth(ref.current.clientWidth);
        }
    }, [
        ref
    ]);
    const observer = React.useMemo(()=>utils_isServer ? null : new ResizeObserver(([entry])=>{
            if (options?.onlyWidth) {
                if (prevWidth !== entry.contentRect.width) {
                    setPrevWidth(()=>{
                        fn(entry);
                        return entry.contentRect.width;
                    });
                }
            } else {
                fn(entry);
            }
        }), [
        fn,
        prevWidth,
        options?.onlyWidth
    ]);
    React.useEffect(()=>{
        const target = ref.current;
        if (!target) return;
        observer?.observe(ref.current);
        return ()=>observer?.unobserve(target);
    }, [
        ref,
        observer
    ]);
}
function utils_isUrl(str) {
    if (!str) {
        return false;
    }
    if (str.indexOf('"') >= 0 || str.indexOf("'") >= 0) {
        return false;
    }
    return /((http|https):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?/i.test(str.trim());
}
function isScriptPresent(regex) {
    return Array.from(document.scripts).reduce((isPresent, script)=>isPresent ? isPresent : regex.test(script.src), false);
}
function utils_loadScript(src, options) {
    return new Promise((resolve, reject)=>{
        try {
            const { async = true, type = "text/javascript", defer = true, cacheRegex } = options ?? {};
            if (!src) return reject({
                loaded: false,
                error: true,
                message: "No src provided"
            });
            if (cacheRegex && isScriptPresent(cacheRegex)) return resolve({
                loaded: true,
                error: false
            });
            const tag = document.createElement("script");
            const container = document.head || document.body;
            tag.type = type;
            tag.async = async;
            tag.src = src;
            tag.defer = defer;
            tag.addEventListener("load", ()=>{
                resolve({
                    loaded: true,
                    error: false
                });
            });
            tag.addEventListener("error", ()=>{
                reject({
                    loaded: false,
                    error: true,
                    message: `Failed to load script with src ${src}`
                });
            });
            container.appendChild(tag);
        } catch (error) {
            reject(error);
        }
    });
}
const utils_KEY_CODES = {
    ARROW_LEFT: "ArrowLeft",
    ARROW_UP: "ArrowUp",
    ARROW_RIGHT: "ArrowRight",
    ARROW_DOWN: "ArrowDown",
    SPACE: " ",
    ENTER: "Enter",
    HOME: "Home",
    END: "End",
    TAB: "Tab"
};
function utils_dispatchCustomEvent(element, eventName) {
    element.dispatchEvent(new CustomEvent(eventName, {
        bubbles: true,
        cancelable: true
    }));
}
function utils_useClickOut(ref, action) {
    React.useEffect(()=>{
        function handleClickOutside(event) {
            if (ref.current?.contains(event.target)) return;
            action();
        }
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [
        ref,
        action
    ]);
}
function utils_extractElement(elements, type) {
    let extracted;
    function removeElementByType(elements) {
        return elements.map((element)=>{
            if (!/*#__PURE__*/ React.isValidElement(element)) {
                return element;
            }
            if (element.type === type) {
                extracted = element;
                return null;
            }
            const children = removeElementByType(React.Children.toArray(element.props.children));
            return /*#__PURE__*/ React.cloneElement(element, element.props, ...children);
        });
    }
    const tree = removeElementByType(elements);
    return {
        extracted,
        tree
    };
}

;// CONCATENATED MODULE: ./devlink/interactions.js



const enhanceIXData = (data, styles)=>{
    const newIXData = structuredClone(data);
    for(const id in newIXData.events){
        const { target, targets } = newIXData.events[id];
        for (const t of [
            target,
            ...targets
        ]){
            if (t.appliesTo !== "CLASS") continue;
            t.selector = replaceSelector(t.selector, styles);
        }
    }
    for(const id in newIXData.actionLists){
        const { actionItemGroups, continuousParameterGroups } = newIXData.actionLists[id];
        if (actionItemGroups) {
            for (const { actionItems } of actionItemGroups){
                for (const { config } of actionItems){
                    const { selector } = config.target;
                    if (!selector) continue;
                    config.target.selector = replaceSelector(selector, styles);
                }
            }
        }
        if (continuousParameterGroups) {
            for (const group of continuousParameterGroups){
                for (const { actionItems } of group.continuousActionGroups){
                    for (const { config } of actionItems){
                        const { selector } = config.target;
                        if (!selector) continue;
                        config.target.selector = replaceSelector(selector, styles);
                    }
                }
            }
        }
    }
    return newIXData;
};
const IXContext = /*#__PURE__*/ react_.createContext(null);
const InteractionsProvider = ({ children, createEngine })=>{
    const ixData = react_.useRef({});
    const ixStyles = react_.useRef();
    const ixEngine = react_.useRef();
    const debouncedInit = react_.useRef(utils_debounce((data, styles)=>{
        if (!ixEngine.current) ixEngine.current = createEngine();
        const newData = styles ? enhanceIXData(data, styles) : data;
        ixEngine.current.init(newData);
        utils_dispatchCustomEvent(document, "IX2_PAGE_UPDATE");
    }));
    const initEngine = react_.useCallback((data, styles)=>{
        if (!ixData.current.site) {
            ixData.current.site = data.site;
        }
        ixData.current.events = {
            ...ixData.current.events,
            ...data.events
        };
        ixData.current.actionLists = {
            ...ixData.current.actionLists,
            ...data.actionLists
        };
        if (styles) {
            ixStyles.current = ixStyles.current ?? {};
            for(const s in styles){
                if (!ixStyles.current[s]?.includes(styles[s])) {
                    const currentStyle = ixStyles.current[s];
                    ixStyles.current[s] = CSS.escape(styles[s]) + (currentStyle ? ` ${currentStyle}` : "");
                }
            }
        }
        debouncedInit.current(ixData.current, ixStyles.current);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(IXContext.Provider, {
        value: initEngine,
        children: children
    });
};
const useInteractions = (data, styles)=>{
    const initEngine = react_.useContext(IXContext);
    react_.useEffect(()=>{
        if (initEngine) initEngine(data, styles);
    }, [
        initEngine,
        data,
        styles
    ]);
    react_.useEffect(()=>{
        if (document.querySelector("html")?.hasAttribute("data-wf-page")) return;
        const hasPageInteractions = Object.values(data.events).some((event)=>event.target.appliesTo === "PAGE");
        if (hasPageInteractions) {
            document.documentElement.setAttribute("data-wf-page", "wf-page-id");
            utils_dispatchCustomEvent(document, "IX2_PAGE_UPDATE");
        }
    }, [
        data.events
    ]);
};
function interactions_triggerIXEvent(element, active) {
    if (!element) return;
    dispatchCustomEvent(element, active ? "COMPONENT_ACTIVE" : "COMPONENT_INACTIVE");
}
function interactions_useIXEvent(element, active) {
    useLayoutEffect(()=>{
        interactions_triggerIXEvent(element, active);
    }, [
        element,
        active
    ]);
}

;// CONCATENATED MODULE: ./devlink/devlink.js
/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */ var s = (e, r)=>()=>(r || e((r = {
            exports: {}
        }).exports, r), r.exports);
var Za = s((ZX, Te)=>{
    function Rn(e) {
        return Te.exports = Rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r;
        } : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        }, Te.exports.__esModule = !0, Te.exports.default = Te.exports, Rn(e);
    }
    Te.exports = Rn, Te.exports.__esModule = !0, Te.exports.default = Te.exports;
});
var Me = s((JX, Or)=>{
    var sI = Za().default;
    function Ja(e) {
        if (typeof WeakMap != "function") return null;
        var r = new WeakMap(), t = new WeakMap();
        return (Ja = function(i) {
            return i ? t : r;
        })(e);
    }
    function uI(e, r) {
        if (!r && e && e.__esModule) return e;
        if (e === null || sI(e) !== "object" && typeof e != "function") return {
            default: e
        };
        var t = Ja(r);
        if (t && t.has(e)) return t.get(e);
        var n = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for(var a in e)if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
            var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
            o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a];
        }
        return n.default = e, t && t.set(e, n), n;
    }
    Or.exports = uI, Or.exports.__esModule = !0, Or.exports.default = Or.exports;
});
var ne = s((eV, hr)=>{
    function cI(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    hr.exports = cI, hr.exports.__esModule = !0, hr.exports.default = hr.exports;
});
var F = s((rV, eo)=>{
    var rt = function(e) {
        return e && e.Math == Math && e;
    };
    eo.exports = rt(typeof globalThis == "object" && globalThis) || rt( false && 0) || rt(typeof self == "object" && self) || rt(typeof global == "object" && global) || function() {
        return this;
    }() || Function("return this")();
});
var Ke = s((tV, ro)=>{
    ro.exports = function(e) {
        try {
            return !!e();
        } catch  {
            return !0;
        }
    };
});
var xe = s((nV, to)=>{
    var lI = Ke();
    to.exports = !lI(function() {
        return Object.defineProperty({}, 1, {
            get: function() {
                return 7;
            }
        })[1] != 7;
    });
});
var tt = s((iV, no)=>{
    var yr = Function.prototype.call;
    no.exports = yr.bind ? yr.bind(yr) : function() {
        return yr.apply(yr, arguments);
    };
});
var so = s((oo)=>{
    "use strict";
    var io = {}.propertyIsEnumerable, ao = Object.getOwnPropertyDescriptor, fI = ao && !io.call({
        1: 2
    }, 1);
    oo.f = fI ? function(r) {
        var t = ao(this, r);
        return !!t && t.enumerable;
    } : io;
});
var Cn = s((oV, uo)=>{
    uo.exports = function(e, r) {
        return {
            enumerable: !(e & 1),
            configurable: !(e & 2),
            writable: !(e & 4),
            value: r
        };
    };
});
var ie = s((sV, lo)=>{
    var co = Function.prototype, Nn = co.bind, bn = co.call, dI = Nn && Nn.bind(bn);
    lo.exports = Nn ? function(e) {
        return e && dI(bn, e);
    } : function(e) {
        return e && function() {
            return bn.apply(e, arguments);
        };
    };
});
var po = s((uV, Eo)=>{
    var fo = ie(), EI = fo({}.toString), pI = fo("".slice);
    Eo.exports = function(e) {
        return pI(EI(e), 8, -1);
    };
});
var go = s((cV, _o)=>{
    var _I = F(), gI = ie(), vI = Ke(), II = po(), mn = _I.Object, TI = gI("".split);
    _o.exports = vI(function() {
        return !mn("z").propertyIsEnumerable(0);
    }) ? function(e) {
        return II(e) == "String" ? TI(e, "") : mn(e);
    } : mn;
});
var qn = s((lV, vo)=>{
    var OI = F(), hI = OI.TypeError;
    vo.exports = function(e) {
        if (e == null) throw hI("Can't call method on " + e);
        return e;
    };
});
var Sr = s((fV, Io)=>{
    var yI = go(), SI = qn();
    Io.exports = function(e) {
        return yI(SI(e));
    };
});
var de = s((dV, To)=>{
    To.exports = function(e) {
        return typeof e == "function";
    };
});
var Ye = s((EV, Oo)=>{
    var AI = de();
    Oo.exports = function(e) {
        return typeof e == "object" ? e !== null : AI(e);
    };
});
var Ar = s((pV, ho)=>{
    var Pn = F(), RI = de(), CI = function(e) {
        return RI(e) ? e : void 0;
    };
    ho.exports = function(e, r) {
        return arguments.length < 2 ? CI(Pn[e]) : Pn[e] && Pn[e][r];
    };
});
var So = s((_V, yo)=>{
    var NI = ie();
    yo.exports = NI({}.isPrototypeOf);
});
var Ro = s((gV, Ao)=>{
    var bI = Ar();
    Ao.exports = bI("navigator", "userAgent") || "";
});
var Lo = s((vV, Po)=>{
    var qo = F(), Ln = Ro(), Co = qo.process, No = qo.Deno, bo = Co && Co.versions || No && No.version, mo = bo && bo.v8, ae, nt;
    mo && (ae = mo.split("."), nt = ae[0] > 0 && ae[0] < 4 ? 1 : +(ae[0] + ae[1]));
    !nt && Ln && (ae = Ln.match(/Edge\/(\d+)/), (!ae || ae[1] >= 74) && (ae = Ln.match(/Chrome\/(\d+)/), ae && (nt = +ae[1])));
    Po.exports = nt;
});
var Dn = s((IV, Mo)=>{
    var Do = Lo(), mI = Ke();
    Mo.exports = !!Object.getOwnPropertySymbols && !mI(function() {
        var e = Symbol();
        return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Do && Do < 41;
    });
});
var Mn = s((TV, xo)=>{
    var qI = Dn();
    xo.exports = qI && !Symbol.sham && typeof Symbol.iterator == "symbol";
});
var xn = s((OV, wo)=>{
    var PI = F(), LI = Ar(), DI = de(), MI = So(), xI = Mn(), wI = PI.Object;
    wo.exports = xI ? function(e) {
        return typeof e == "symbol";
    } : function(e) {
        var r = LI("Symbol");
        return DI(r) && MI(r.prototype, wI(e));
    };
});
var Go = s((hV, Fo)=>{
    var FI = F(), GI = FI.String;
    Fo.exports = function(e) {
        try {
            return GI(e);
        } catch  {
            return "Object";
        }
    };
});
var Vo = s((yV, Xo)=>{
    var XI = F(), VI = de(), UI = Go(), BI = XI.TypeError;
    Xo.exports = function(e) {
        if (VI(e)) return e;
        throw BI(UI(e) + " is not a function");
    };
});
var Bo = s((SV, Uo)=>{
    var jI = Vo();
    Uo.exports = function(e, r) {
        var t = e[r];
        return t == null ? void 0 : jI(t);
    };
});
var Wo = s((AV, jo)=>{
    var WI = F(), wn = tt(), Fn = de(), Gn = Ye(), HI = WI.TypeError;
    jo.exports = function(e, r) {
        var t, n;
        if (r === "string" && Fn(t = e.toString) && !Gn(n = wn(t, e)) || Fn(t = e.valueOf) && !Gn(n = wn(t, e)) || r !== "string" && Fn(t = e.toString) && !Gn(n = wn(t, e))) return n;
        throw HI("Can't convert object to primitive value");
    };
});
var Ko = s((RV, Ho)=>{
    Ho.exports = !1;
});
var it = s((CV, Qo)=>{
    var Yo = F(), KI = Object.defineProperty;
    Qo.exports = function(e, r) {
        try {
            KI(Yo, e, {
                value: r,
                configurable: !0,
                writable: !0
            });
        } catch  {
            Yo[e] = r;
        }
        return r;
    };
});
var at = s((NV, $o)=>{
    var YI = F(), QI = it(), zo = "__core-js_shared__", zI = YI[zo] || QI(zo, {});
    $o.exports = zI;
});
var Xn = s((bV, Zo)=>{
    var $I = Ko(), ko = at();
    (Zo.exports = function(e, r) {
        return ko[e] || (ko[e] = r !== void 0 ? r : {});
    })("versions", []).push({
        version: "3.19.0",
        mode: $I ? "pure" : "global",
        copyright: "\xa9 2021 Denis Pushkarev (zloirock.ru)"
    });
});
var es = s((mV, Jo)=>{
    var kI = F(), ZI = qn(), JI = kI.Object;
    Jo.exports = function(e) {
        return JI(ZI(e));
    };
});
var Re = s((qV, rs)=>{
    var eT = ie(), rT = es(), tT = eT({}.hasOwnProperty);
    rs.exports = Object.hasOwn || function(r, t) {
        return tT(rT(r), t);
    };
});
var Vn = s((PV, ts)=>{
    var nT = ie(), iT = 0, aT = Math.random(), oT = nT(1..toString);
    ts.exports = function(e) {
        return "Symbol(" + (e === void 0 ? "" : e) + ")_" + oT(++iT + aT, 36);
    };
});
var Un = s((LV, ss)=>{
    var sT = F(), uT = Xn(), ns = Re(), cT = Vn(), is = Dn(), os = Mn(), Qe = uT("wks"), we = sT.Symbol, as = we && we.for, lT = os ? we : we && we.withoutSetter || cT;
    ss.exports = function(e) {
        if (!ns(Qe, e) || !(is || typeof Qe[e] == "string")) {
            var r = "Symbol." + e;
            is && ns(we, e) ? Qe[e] = we[e] : os && as ? Qe[e] = as(r) : Qe[e] = lT(r);
        }
        return Qe[e];
    };
});
var fs = s((DV, ls)=>{
    var fT = F(), dT = tt(), us = Ye(), cs = xn(), ET = Bo(), pT = Wo(), _T = Un(), gT = fT.TypeError, vT = _T("toPrimitive");
    ls.exports = function(e, r) {
        if (!us(e) || cs(e)) return e;
        var t = ET(e, vT), n;
        if (t) {
            if (r === void 0 && (r = "default"), n = dT(t, e, r), !us(n) || cs(n)) return n;
            throw gT("Can't convert object to primitive value");
        }
        return r === void 0 && (r = "number"), pT(e, r);
    };
});
var Bn = s((MV, ds)=>{
    var IT = fs(), TT = xn();
    ds.exports = function(e) {
        var r = IT(e, "string");
        return TT(r) ? r : r + "";
    };
});
var Wn = s((xV, ps)=>{
    var OT = F(), Es = Ye(), jn = OT.document, hT = Es(jn) && Es(jn.createElement);
    ps.exports = function(e) {
        return hT ? jn.createElement(e) : {};
    };
});
var Hn = s((wV, _s)=>{
    var yT = xe(), ST = Ke(), AT = Wn();
    _s.exports = !yT && !ST(function() {
        return Object.defineProperty(AT("div"), "a", {
            get: function() {
                return 7;
            }
        }).a != 7;
    });
});
var Kn = s((vs)=>{
    var RT = xe(), CT = tt(), NT = so(), bT = Cn(), mT = Sr(), qT = Bn(), PT = Re(), LT = Hn(), gs = Object.getOwnPropertyDescriptor;
    vs.f = RT ? gs : function(r, t) {
        if (r = mT(r), t = qT(t), LT) try {
            return gs(r, t);
        } catch  {}
        if (PT(r, t)) return bT(!CT(NT.f, r, t), r[t]);
    };
});
var Rr = s((GV, Ts)=>{
    var Is = F(), DT = Ye(), MT = Is.String, xT = Is.TypeError;
    Ts.exports = function(e) {
        if (DT(e)) return e;
        throw xT(MT(e) + " is not an object");
    };
});
var Cr = s((ys)=>{
    var wT = F(), FT = xe(), GT = Hn(), Os = Rr(), XT = Bn(), VT = wT.TypeError, hs = Object.defineProperty;
    ys.f = FT ? hs : function(r, t, n) {
        if (Os(r), t = XT(t), Os(n), GT) try {
            return hs(r, t, n);
        } catch  {}
        if ("get" in n || "set" in n) throw VT("Accessors not supported");
        return "value" in n && (r[t] = n.value), r;
    };
});
var ot = s((VV, Ss)=>{
    var UT = xe(), BT = Cr(), jT = Cn();
    Ss.exports = UT ? function(e, r, t) {
        return BT.f(e, r, jT(1, t));
    } : function(e, r, t) {
        return e[r] = t, e;
    };
});
var Qn = s((UV, As)=>{
    var WT = ie(), HT = de(), Yn = at(), KT = WT(Function.toString);
    HT(Yn.inspectSource) || (Yn.inspectSource = function(e) {
        return KT(e);
    });
    As.exports = Yn.inspectSource;
});
var Ns = s((BV, Cs)=>{
    var YT = F(), QT = de(), zT = Qn(), Rs = YT.WeakMap;
    Cs.exports = QT(Rs) && /native code/.test(zT(Rs));
});
var zn = s((jV, ms)=>{
    var $T = Xn(), kT = Vn(), bs = $T("keys");
    ms.exports = function(e) {
        return bs[e] || (bs[e] = kT(e));
    };
});
var st = s((WV, qs)=>{
    qs.exports = {};
});
var ws = s((HV, xs)=>{
    var ZT = Ns(), Ms = F(), $n = ie(), JT = Ye(), eO = ot(), kn = Re(), Zn = at(), rO = zn(), tO = st(), Ps = "Object already initialized", ei = Ms.TypeError, nO = Ms.WeakMap, ut, Nr, ct, iO = function(e) {
        return ct(e) ? Nr(e) : ut(e, {});
    }, aO = function(e) {
        return function(r) {
            var t;
            if (!JT(r) || (t = Nr(r)).type !== e) throw ei("Incompatible receiver, " + e + " required");
            return t;
        };
    };
    ZT || Zn.state ? (Ce = Zn.state || (Zn.state = new nO()), Ls = $n(Ce.get), Jn = $n(Ce.has), Ds = $n(Ce.set), ut = function(e, r) {
        if (Jn(Ce, e)) throw new ei(Ps);
        return r.facade = e, Ds(Ce, e, r), r;
    }, Nr = function(e) {
        return Ls(Ce, e) || {};
    }, ct = function(e) {
        return Jn(Ce, e);
    }) : (Fe = rO("state"), tO[Fe] = !0, ut = function(e, r) {
        if (kn(e, Fe)) throw new ei(Ps);
        return r.facade = e, eO(e, Fe, r), r;
    }, Nr = function(e) {
        return kn(e, Fe) ? e[Fe] : {};
    }, ct = function(e) {
        return kn(e, Fe);
    });
    var Ce, Ls, Jn, Ds, Fe;
    xs.exports = {
        set: ut,
        get: Nr,
        has: ct,
        enforce: iO,
        getterFor: aO
    };
});
var Xs = s((KV, Gs)=>{
    var ri = xe(), oO = Re(), Fs = Function.prototype, sO = ri && Object.getOwnPropertyDescriptor, ti = oO(Fs, "name"), uO = ti && (function() {}).name === "something", cO = ti && (!ri || ri && sO(Fs, "name").configurable);
    Gs.exports = {
        EXISTS: ti,
        PROPER: uO,
        CONFIGURABLE: cO
    };
});
var Ws = s((YV, js)=>{
    var lO = F(), Vs = de(), fO = Re(), Us = ot(), dO = it(), EO = Qn(), Bs = ws(), pO = Xs().CONFIGURABLE, _O = Bs.get, gO = Bs.enforce, vO = String(String).split("String");
    (js.exports = function(e, r, t, n) {
        var i = n ? !!n.unsafe : !1, a = n ? !!n.enumerable : !1, o = n ? !!n.noTargetGet : !1, u = n && n.name !== void 0 ? n.name : r, c;
        if (Vs(t) && (String(u).slice(0, 7) === "Symbol(" && (u = "[" + String(u).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!fO(t, "name") || pO && t.name !== u) && Us(t, "name", u), c = gO(t), c.source || (c.source = vO.join(typeof u == "string" ? u : ""))), e === lO) {
            a ? e[r] = t : dO(r, t);
            return;
        } else i ? !o && e[r] && (a = !0) : delete e[r];
        a ? e[r] = t : Us(e, r, t);
    })(Function.prototype, "toString", function() {
        return Vs(this) && _O(this).source || EO(this);
    });
});
var ni = s((QV, Hs)=>{
    var IO = Math.ceil, TO = Math.floor;
    Hs.exports = function(e) {
        var r = +e;
        return r !== r || r === 0 ? 0 : (r > 0 ? TO : IO)(r);
    };
});
var Ys = s((zV, Ks)=>{
    var OO = ni(), hO = Math.max, yO = Math.min;
    Ks.exports = function(e, r) {
        var t = OO(e);
        return t < 0 ? hO(t + r, 0) : yO(t, r);
    };
});
var zs = s(($V, Qs)=>{
    var SO = ni(), AO = Math.min;
    Qs.exports = function(e) {
        return e > 0 ? AO(SO(e), 9007199254740991) : 0;
    };
});
var ks = s((kV, $s)=>{
    var RO = zs();
    $s.exports = function(e) {
        return RO(e.length);
    };
});
var ii = s((ZV, Js)=>{
    var CO = Sr(), NO = Ys(), bO = ks(), Zs = function(e) {
        return function(r, t, n) {
            var i = CO(r), a = bO(i), o = NO(n, a), u;
            if (e && t != t) {
                for(; a > o;)if (u = i[o++], u != u) return !0;
            } else for(; a > o; o++)if ((e || o in i) && i[o] === t) return e || o || 0;
            return !e && -1;
        };
    };
    Js.exports = {
        includes: Zs(!0),
        indexOf: Zs(!1)
    };
});
var oi = s((JV, ru)=>{
    var mO = ie(), ai = Re(), qO = Sr(), PO = ii().indexOf, LO = st(), eu = mO([].push);
    ru.exports = function(e, r) {
        var t = qO(e), n = 0, i = [], a;
        for(a in t)!ai(LO, a) && ai(t, a) && eu(i, a);
        for(; r.length > n;)ai(t, a = r[n++]) && (~PO(i, a) || eu(i, a));
        return i;
    };
});
var lt = s((eU, tu)=>{
    tu.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf"
    ];
});
var iu = s((nu)=>{
    var DO = oi(), MO = lt(), xO = MO.concat("length", "prototype");
    nu.f = Object.getOwnPropertyNames || function(r) {
        return DO(r, xO);
    };
});
var ou = s((au)=>{
    au.f = Object.getOwnPropertySymbols;
});
var uu = s((nU, su)=>{
    var wO = Ar(), FO = ie(), GO = iu(), XO = ou(), VO = Rr(), UO = FO([].concat);
    su.exports = wO("Reflect", "ownKeys") || function(r) {
        var t = GO.f(VO(r)), n = XO.f;
        return n ? UO(t, n(r)) : t;
    };
});
var lu = s((iU, cu)=>{
    var BO = Re(), jO = uu(), WO = Kn(), HO = Cr();
    cu.exports = function(e, r) {
        for(var t = jO(r), n = HO.f, i = WO.f, a = 0; a < t.length; a++){
            var o = t[a];
            BO(e, o) || n(e, o, i(r, o));
        }
    };
});
var du = s((aU, fu)=>{
    var KO = Ke(), YO = de(), QO = /#|\.prototype\./, br = function(e, r) {
        var t = $O[zO(e)];
        return t == ZO ? !0 : t == kO ? !1 : YO(r) ? KO(r) : !!r;
    }, zO = br.normalize = function(e) {
        return String(e).replace(QO, ".").toLowerCase();
    }, $O = br.data = {}, kO = br.NATIVE = "N", ZO = br.POLYFILL = "P";
    fu.exports = br;
});
var pu = s((oU, Eu)=>{
    var si = F(), JO = Kn().f, eh = ot(), rh = Ws(), th = it(), nh = lu(), ih = du();
    Eu.exports = function(e, r) {
        var t = e.target, n = e.global, i = e.stat, a, o, u, c, l, d;
        if (n ? o = si : i ? o = si[t] || th(t, {}) : o = (si[t] || {}).prototype, o) for(u in r){
            if (l = r[u], e.noTargetGet ? (d = JO(o, u), c = d && d.value) : c = o[u], a = ih(n ? u : t + (i ? "." : "#") + u, e.forced), !a && c !== void 0) {
                if (typeof l == typeof c) continue;
                nh(l, c);
            }
            (e.sham || c && c.sham) && eh(l, "sham", !0), rh(o, u, l, e);
        }
    };
});
var gu = s((sU, _u)=>{
    var ah = oi(), oh = lt();
    _u.exports = Object.keys || function(r) {
        return ah(r, oh);
    };
});
var Iu = s((uU, vu)=>{
    var sh = xe(), uh = Cr(), ch = Rr(), lh = Sr(), fh = gu();
    vu.exports = sh ? Object.defineProperties : function(r, t) {
        ch(r);
        for(var n = lh(t), i = fh(t), a = i.length, o = 0, u; a > o;)uh.f(r, u = i[o++], n[u]);
        return r;
    };
});
var Ou = s((cU, Tu)=>{
    var dh = Ar();
    Tu.exports = dh("document", "documentElement");
});
var bu = s((lU, Nu)=>{
    var Eh = Rr(), ph = Iu(), hu = lt(), _h = st(), gh = Ou(), vh = Wn(), Ih = zn(), yu = ">", Su = "<", ci = "prototype", li = "script", Ru = Ih("IE_PROTO"), ui = function() {}, Cu = function(e) {
        return Su + li + yu + e + Su + "/" + li + yu;
    }, Au = function(e) {
        e.write(Cu("")), e.close();
        var r = e.parentWindow.Object;
        return e = null, r;
    }, Th = function() {
        var e = vh("iframe"), r = "java" + li + ":", t;
        return e.style.display = "none", gh.appendChild(e), e.src = String(r), t = e.contentWindow.document, t.open(), t.write(Cu("document.F=Object")), t.close(), t.F;
    }, ft, dt = function() {
        try {
            ft = new ActiveXObject("htmlfile");
        } catch  {}
        dt = typeof document < "u" ? document.domain && ft ? Au(ft) : Th() : Au(ft);
        for(var e = hu.length; e--;)delete dt[ci][hu[e]];
        return dt();
    };
    _h[Ru] = !0;
    Nu.exports = Object.create || function(r, t) {
        var n;
        return r !== null ? (ui[ci] = Eh(r), n = new ui(), ui[ci] = null, n[Ru] = r) : n = dt(), t === void 0 ? n : ph(n, t);
    };
});
var qu = s((fU, mu)=>{
    var Oh = Un(), hh = bu(), yh = Cr(), fi = Oh("unscopables"), di = Array.prototype;
    di[fi] == null && yh.f(di, fi, {
        configurable: !0,
        value: hh(null)
    });
    mu.exports = function(e) {
        di[fi][e] = !0;
    };
});
var Pu = s(()=>{
    "use strict";
    var Sh = pu(), Ah = ii().includes, Rh = qu();
    Sh({
        target: "Array",
        proto: !0
    }, {
        includes: function(r) {
            return Ah(this, r, arguments.length > 1 ? arguments[1] : void 0);
        }
    });
    Rh("includes");
});
var Du = s((pU, Lu)=>{
    var Ch = F(), Nh = ie();
    Lu.exports = function(e, r) {
        return Nh(Ch[e].prototype[r]);
    };
});
var xu = s((_U, Mu)=>{
    Pu();
    var bh = Du();
    Mu.exports = bh("Array", "includes");
});
var Fu = s((gU, wu)=>{
    var mh = xu();
    wu.exports = mh;
});
var Xu = s((vU, Gu)=>{
    var qh = Fu();
    Gu.exports = qh;
});
var Ei = s((IU, Vu)=>{
    var Ph = typeof global == "object" && global && global.Object === Object && global;
    Vu.exports = Ph;
});
var oe = s((TU, Uu)=>{
    var Lh = Ei(), Dh = typeof self == "object" && self && self.Object === Object && self, Mh = Lh || Dh || Function("return this")();
    Uu.exports = Mh;
});
var ze = s((OU, Bu)=>{
    var xh = oe(), wh = xh.Symbol;
    Bu.exports = wh;
});
var Ku = s((hU, Hu)=>{
    var ju = ze(), Wu = Object.prototype, Fh = Wu.hasOwnProperty, Gh = Wu.toString, mr = ju ? ju.toStringTag : void 0;
    function Xh(e) {
        var r = Fh.call(e, mr), t = e[mr];
        try {
            e[mr] = void 0;
            var n = !0;
        } catch  {}
        var i = Gh.call(e);
        return n && (r ? e[mr] = t : delete e[mr]), i;
    }
    Hu.exports = Xh;
});
var Qu = s((yU, Yu)=>{
    var Vh = Object.prototype, Uh = Vh.toString;
    function Bh(e) {
        return Uh.call(e);
    }
    Yu.exports = Bh;
});
var Ne = s((SU, ku)=>{
    var zu = ze(), jh = Ku(), Wh = Qu(), Hh = "[object Null]", Kh = "[object Undefined]", $u = zu ? zu.toStringTag : void 0;
    function Yh(e) {
        return e == null ? e === void 0 ? Kh : Hh : $u && $u in Object(e) ? jh(e) : Wh(e);
    }
    ku.exports = Yh;
});
var pi = s((AU, Zu)=>{
    function Qh(e, r) {
        return function(t) {
            return e(r(t));
        };
    }
    Zu.exports = Qh;
});
var _i = s((RU, Ju)=>{
    var zh = pi(), $h = zh(Object.getPrototypeOf, Object);
    Ju.exports = $h;
});
var Oe = s((CU, ec)=>{
    function kh(e) {
        return e != null && typeof e == "object";
    }
    ec.exports = kh;
});
var gi = s((NU, tc)=>{
    var Zh = Ne(), Jh = _i(), ey = Oe(), ry = "[object Object]", ty = Function.prototype, ny = Object.prototype, rc = ty.toString, iy = ny.hasOwnProperty, ay = rc.call(Object);
    function oy(e) {
        if (!ey(e) || Zh(e) != ry) return !1;
        var r = Jh(e);
        if (r === null) return !0;
        var t = iy.call(r, "constructor") && r.constructor;
        return typeof t == "function" && t instanceof t && rc.call(t) == ay;
    }
    tc.exports = oy;
});
var nc = s((vi)=>{
    "use strict";
    Object.defineProperty(vi, "__esModule", {
        value: !0
    });
    vi.default = sy;
    function sy(e) {
        var r, t = e.Symbol;
        return typeof t == "function" ? t.observable ? r = t.observable : (r = t("observable"), t.observable = r) : r = "@@observable", r;
    }
});
var ic = s((Ti, Ii)=>{
    "use strict";
    Object.defineProperty(Ti, "__esModule", {
        value: !0
    });
    var uy = nc(), cy = ly(uy);
    function ly(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    var $e;
    typeof self < "u" ? $e = self :  false ? 0 : typeof global < "u" ? $e = global : typeof Ii < "u" ? $e = Ii : $e = Function("return this")();
    var fy = (0, cy.default)($e);
    Ti.default = fy;
});
var Oi = s((qr)=>{
    "use strict";
    qr.__esModule = !0;
    qr.ActionTypes = void 0;
    qr.default = uc;
    var dy = gi(), Ey = sc(dy), py = ic(), ac = sc(py);
    function sc(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    var oc = qr.ActionTypes = {
        INIT: "@@redux/INIT"
    };
    function uc(e, r, t) {
        var n;
        if (typeof r == "function" && typeof t > "u" && (t = r, r = void 0), typeof t < "u") {
            if (typeof t != "function") throw new Error("Expected the enhancer to be a function.");
            return t(uc)(e, r);
        }
        if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
        var i = e, a = r, o = [], u = o, c = !1;
        function l() {
            u === o && (u = o.slice());
        }
        function d() {
            return a;
        }
        function E(_) {
            if (typeof _ != "function") throw new Error("Expected listener to be a function.");
            var T = !0;
            return l(), u.push(_), function() {
                if (T) {
                    T = !1, l();
                    var h = u.indexOf(_);
                    u.splice(h, 1);
                }
            };
        }
        function p(_) {
            if (!(0, Ey.default)(_)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (typeof _.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (c) throw new Error("Reducers may not dispatch actions.");
            try {
                c = !0, a = i(a, _);
            } finally{
                c = !1;
            }
            for(var T = o = u, I = 0; I < T.length; I++)T[I]();
            return _;
        }
        function g(_) {
            if (typeof _ != "function") throw new Error("Expected the nextReducer to be a function.");
            i = _, p({
                type: oc.INIT
            });
        }
        function v() {
            var _, T = E;
            return _ = {
                subscribe: function(h) {
                    if (typeof h != "object") throw new TypeError("Expected the observer to be an object.");
                    function y() {
                        h.next && h.next(d());
                    }
                    y();
                    var A = T(y);
                    return {
                        unsubscribe: A
                    };
                }
            }, _[ac.default] = function() {
                return this;
            }, _;
        }
        return p({
            type: oc.INIT
        }), n = {
            dispatch: p,
            subscribe: E,
            getState: d,
            replaceReducer: g
        }, n[ac.default] = v, n;
    }
});
var yi = s((hi)=>{
    "use strict";
    hi.__esModule = !0;
    hi.default = _y;
    function _y(e) {
        typeof console < "u" && typeof console.error == "function" && console.error(e);
        try {
            throw new Error(e);
        } catch  {}
    }
});
var fc = s((Si)=>{
    "use strict";
    Si.__esModule = !0;
    Si.default = Oy;
    var cc = Oi(), gy = gi(), PU = lc(gy), vy = yi(), LU = lc(vy);
    function lc(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function Iy(e, r) {
        var t = r && r.type, n = t && '"' + t.toString() + '"' || "an action";
        return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.';
    }
    function Ty(e) {
        Object.keys(e).forEach(function(r) {
            var t = e[r], n = t(void 0, {
                type: cc.ActionTypes.INIT
            });
            if (typeof n > "u") throw new Error('Reducer "' + r + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
            var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
            if (typeof t(void 0, {
                type: i
            }) > "u") throw new Error('Reducer "' + r + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + cc.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.");
        });
    }
    function Oy(e) {
        for(var r = Object.keys(e), t = {}, n = 0; n < r.length; n++){
            var i = r[n];
            typeof e[i] == "function" && (t[i] = e[i]);
        }
        var a = Object.keys(t);
        if (false) { var o; }
        var u;
        try {
            Ty(t);
        } catch (c) {
            u = c;
        }
        return function() {
            var l = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0], d = arguments[1];
            if (u) throw u;
            if (false) { var E; }
            for(var p = !1, g = {}, v = 0; v < a.length; v++){
                var _ = a[v], T = t[_], I = l[_], h = T(I, d);
                if (typeof h > "u") {
                    var y = Iy(_, d);
                    throw new Error(y);
                }
                g[_] = h, p = p || h !== I;
            }
            return p ? g : l;
        };
    }
});
var Ec = s((Ai)=>{
    "use strict";
    Ai.__esModule = !0;
    Ai.default = hy;
    function dc(e, r) {
        return function() {
            return r(e.apply(void 0, arguments));
        };
    }
    function hy(e, r) {
        if (typeof e == "function") return dc(e, r);
        if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        for(var t = Object.keys(e), n = {}, i = 0; i < t.length; i++){
            var a = t[i], o = e[a];
            typeof o == "function" && (n[a] = dc(o, r));
        }
        return n;
    }
});
var Ci = s((Ri)=>{
    "use strict";
    Ri.__esModule = !0;
    Ri.default = yy;
    function yy() {
        for(var e = arguments.length, r = Array(e), t = 0; t < e; t++)r[t] = arguments[t];
        if (r.length === 0) return function(a) {
            return a;
        };
        if (r.length === 1) return r[0];
        var n = r[r.length - 1], i = r.slice(0, -1);
        return function() {
            return i.reduceRight(function(a, o) {
                return o(a);
            }, n.apply(void 0, arguments));
        };
    }
});
var pc = s((Ni)=>{
    "use strict";
    Ni.__esModule = !0;
    var Sy = Object.assign || function(e) {
        for(var r = 1; r < arguments.length; r++){
            var t = arguments[r];
            for(var n in t)Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }
        return e;
    };
    Ni.default = Ny;
    var Ay = Ci(), Ry = Cy(Ay);
    function Cy(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function Ny() {
        for(var e = arguments.length, r = Array(e), t = 0; t < e; t++)r[t] = arguments[t];
        return function(n) {
            return function(i, a, o) {
                var u = n(i, a, o), c = u.dispatch, l = [], d = {
                    getState: u.getState,
                    dispatch: function(p) {
                        return c(p);
                    }
                };
                return l = r.map(function(E) {
                    return E(d);
                }), c = Ry.default.apply(void 0, l)(u.dispatch), Sy({}, u, {
                    dispatch: c
                });
            };
        };
    }
});
var bi = s((re)=>{
    "use strict";
    re.__esModule = !0;
    re.compose = re.applyMiddleware = re.bindActionCreators = re.combineReducers = re.createStore = void 0;
    var by = Oi(), my = ke(by), qy = fc(), Py = ke(qy), Ly = Ec(), Dy = ke(Ly), My = pc(), xy = ke(My), wy = Ci(), Fy = ke(wy), Gy = yi(), FU = ke(Gy);
    function ke(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    re.createStore = my.default;
    re.combineReducers = Py.default;
    re.bindActionCreators = Dy.default;
    re.applyMiddleware = xy.default;
    re.compose = Fy.default;
});
var _c = s((W)=>{
    "use strict";
    Object.defineProperty(W, "__esModule", {
        value: !0
    });
    W.QuickEffectIds = W.QuickEffectDirectionConsts = W.EventTypeConsts = W.EventLimitAffectedElements = W.EventContinuousMouseAxes = W.EventBasedOn = W.EventAppliesTo = void 0;
    var Xy = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL"
    };
    W.EventTypeConsts = Xy;
    var Vy = {
        ELEMENT: "ELEMENT",
        CLASS: "CLASS",
        PAGE: "PAGE"
    };
    W.EventAppliesTo = Vy;
    var Uy = {
        ELEMENT: "ELEMENT",
        VIEWPORT: "VIEWPORT"
    };
    W.EventBasedOn = Uy;
    var By = {
        X_AXIS: "X_AXIS",
        Y_AXIS: "Y_AXIS"
    };
    W.EventContinuousMouseAxes = By;
    var jy = {
        CHILDREN: "CHILDREN",
        SIBLINGS: "SIBLINGS",
        IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
    };
    W.EventLimitAffectedElements = jy;
    var Wy = {
        FADE_EFFECT: "FADE_EFFECT",
        SLIDE_EFFECT: "SLIDE_EFFECT",
        GROW_EFFECT: "GROW_EFFECT",
        SHRINK_EFFECT: "SHRINK_EFFECT",
        SPIN_EFFECT: "SPIN_EFFECT",
        FLY_EFFECT: "FLY_EFFECT",
        POP_EFFECT: "POP_EFFECT",
        FLIP_EFFECT: "FLIP_EFFECT",
        JIGGLE_EFFECT: "JIGGLE_EFFECT",
        PULSE_EFFECT: "PULSE_EFFECT",
        DROP_EFFECT: "DROP_EFFECT",
        BLINK_EFFECT: "BLINK_EFFECT",
        BOUNCE_EFFECT: "BOUNCE_EFFECT",
        FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
        FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
        RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
        JELLO_EFFECT: "JELLO_EFFECT",
        GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
        SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
        PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
    };
    W.QuickEffectIds = Wy;
    var Hy = {
        LEFT: "LEFT",
        RIGHT: "RIGHT",
        BOTTOM: "BOTTOM",
        TOP: "TOP",
        BOTTOM_LEFT: "BOTTOM_LEFT",
        BOTTOM_RIGHT: "BOTTOM_RIGHT",
        TOP_RIGHT: "TOP_RIGHT",
        TOP_LEFT: "TOP_LEFT",
        CLOCKWISE: "CLOCKWISE",
        COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
    };
    W.QuickEffectDirectionConsts = Hy;
});
var mi = s((Ze)=>{
    "use strict";
    Object.defineProperty(Ze, "__esModule", {
        value: !0
    });
    Ze.ActionTypeConsts = Ze.ActionAppliesTo = void 0;
    var Ky = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
    };
    Ze.ActionTypeConsts = Ky;
    var Yy = {
        ELEMENT: "ELEMENT",
        ELEMENT_CLASS: "ELEMENT_CLASS",
        TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
    };
    Ze.ActionAppliesTo = Yy;
});
var gc = s((Et)=>{
    "use strict";
    Object.defineProperty(Et, "__esModule", {
        value: !0
    });
    Et.InteractionTypeConsts = void 0;
    var Qy = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION"
    };
    Et.InteractionTypeConsts = Qy;
});
var vc = s((pt)=>{
    "use strict";
    Object.defineProperty(pt, "__esModule", {
        value: !0
    });
    pt.ReducedMotionTypes = void 0;
    var zy = mi(), { TRANSFORM_MOVE: $y, TRANSFORM_SCALE: ky, TRANSFORM_ROTATE: Zy, TRANSFORM_SKEW: Jy, STYLE_SIZE: eS, STYLE_FILTER: rS, STYLE_FONT_VARIATION: tS } = zy.ActionTypeConsts, nS = {
        [$y]: !0,
        [ky]: !0,
        [Zy]: !0,
        [Jy]: !0,
        [eS]: !0,
        [rS]: !0,
        [tS]: !0
    };
    pt.ReducedMotionTypes = nS;
});
var Ic = s((m)=>{
    "use strict";
    Object.defineProperty(m, "__esModule", {
        value: !0
    });
    m.IX2_VIEWPORT_WIDTH_CHANGED = m.IX2_TEST_FRAME_RENDERED = m.IX2_STOP_REQUESTED = m.IX2_SESSION_STOPPED = m.IX2_SESSION_STARTED = m.IX2_SESSION_INITIALIZED = m.IX2_RAW_DATA_IMPORTED = m.IX2_PREVIEW_REQUESTED = m.IX2_PLAYBACK_REQUESTED = m.IX2_PARAMETER_CHANGED = m.IX2_MEDIA_QUERIES_DEFINED = m.IX2_INSTANCE_STARTED = m.IX2_INSTANCE_REMOVED = m.IX2_INSTANCE_ADDED = m.IX2_EVENT_STATE_CHANGED = m.IX2_EVENT_LISTENER_ADDED = m.IX2_ELEMENT_STATE_CHANGED = m.IX2_CLEAR_REQUESTED = m.IX2_ANIMATION_FRAME_CHANGED = m.IX2_ACTION_LIST_PLAYBACK_CHANGED = void 0;
    var iS = "IX2_RAW_DATA_IMPORTED";
    m.IX2_RAW_DATA_IMPORTED = iS;
    var aS = "IX2_SESSION_INITIALIZED";
    m.IX2_SESSION_INITIALIZED = aS;
    var oS = "IX2_SESSION_STARTED";
    m.IX2_SESSION_STARTED = oS;
    var sS = "IX2_SESSION_STOPPED";
    m.IX2_SESSION_STOPPED = sS;
    var uS = "IX2_PREVIEW_REQUESTED";
    m.IX2_PREVIEW_REQUESTED = uS;
    var cS = "IX2_PLAYBACK_REQUESTED";
    m.IX2_PLAYBACK_REQUESTED = cS;
    var lS = "IX2_STOP_REQUESTED";
    m.IX2_STOP_REQUESTED = lS;
    var fS = "IX2_CLEAR_REQUESTED";
    m.IX2_CLEAR_REQUESTED = fS;
    var dS = "IX2_EVENT_LISTENER_ADDED";
    m.IX2_EVENT_LISTENER_ADDED = dS;
    var ES = "IX2_EVENT_STATE_CHANGED";
    m.IX2_EVENT_STATE_CHANGED = ES;
    var pS = "IX2_ANIMATION_FRAME_CHANGED";
    m.IX2_ANIMATION_FRAME_CHANGED = pS;
    var _S = "IX2_PARAMETER_CHANGED";
    m.IX2_PARAMETER_CHANGED = _S;
    var gS = "IX2_INSTANCE_ADDED";
    m.IX2_INSTANCE_ADDED = gS;
    var vS = "IX2_INSTANCE_STARTED";
    m.IX2_INSTANCE_STARTED = vS;
    var IS = "IX2_INSTANCE_REMOVED";
    m.IX2_INSTANCE_REMOVED = IS;
    var TS = "IX2_ELEMENT_STATE_CHANGED";
    m.IX2_ELEMENT_STATE_CHANGED = TS;
    var OS = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    m.IX2_ACTION_LIST_PLAYBACK_CHANGED = OS;
    var hS = "IX2_VIEWPORT_WIDTH_CHANGED";
    m.IX2_VIEWPORT_WIDTH_CHANGED = hS;
    var yS = "IX2_MEDIA_QUERIES_DEFINED";
    m.IX2_MEDIA_QUERIES_DEFINED = yS;
    var SS = "IX2_TEST_FRAME_RENDERED";
    m.IX2_TEST_FRAME_RENDERED = SS;
});
var Tc = s((f)=>{
    "use strict";
    Object.defineProperty(f, "__esModule", {
        value: !0
    });
    f.W_MOD_JS = f.W_MOD_IX = f.WILL_CHANGE = f.WIDTH = f.WF_PAGE = f.TRANSLATE_Z = f.TRANSLATE_Y = f.TRANSLATE_X = f.TRANSLATE_3D = f.TRANSFORM = f.SKEW_Y = f.SKEW_X = f.SKEW = f.SIBLINGS = f.SCALE_Z = f.SCALE_Y = f.SCALE_X = f.SCALE_3D = f.ROTATE_Z = f.ROTATE_Y = f.ROTATE_X = f.RENDER_TRANSFORM = f.RENDER_STYLE = f.RENDER_PLUGIN = f.RENDER_GENERAL = f.PRESERVE_3D = f.PLAIN_OBJECT = f.PARENT = f.OPACITY = f.IX2_ID_DELIMITER = f.IMMEDIATE_CHILDREN = f.HTML_ELEMENT = f.HEIGHT = f.FONT_VARIATION_SETTINGS = f.FLEX = f.FILTER = f.DISPLAY = f.CONFIG_Z_VALUE = f.CONFIG_Z_UNIT = f.CONFIG_Y_VALUE = f.CONFIG_Y_UNIT = f.CONFIG_X_VALUE = f.CONFIG_X_UNIT = f.CONFIG_VALUE = f.CONFIG_UNIT = f.COMMA_DELIMITER = f.COLOR = f.COLON_DELIMITER = f.CHILDREN = f.BOUNDARY_SELECTOR = f.BORDER_COLOR = f.BAR_DELIMITER = f.BACKGROUND_COLOR = f.BACKGROUND = f.AUTO = f.ABSTRACT_NODE = void 0;
    var AS = "|";
    f.IX2_ID_DELIMITER = AS;
    var RS = "data-wf-page";
    f.WF_PAGE = RS;
    var CS = "w-mod-js";
    f.W_MOD_JS = CS;
    var NS = "w-mod-ix";
    f.W_MOD_IX = NS;
    var bS = ".w-dyn-item";
    f.BOUNDARY_SELECTOR = bS;
    var mS = "xValue";
    f.CONFIG_X_VALUE = mS;
    var qS = "yValue";
    f.CONFIG_Y_VALUE = qS;
    var PS = "zValue";
    f.CONFIG_Z_VALUE = PS;
    var LS = "value";
    f.CONFIG_VALUE = LS;
    var DS = "xUnit";
    f.CONFIG_X_UNIT = DS;
    var MS = "yUnit";
    f.CONFIG_Y_UNIT = MS;
    var xS = "zUnit";
    f.CONFIG_Z_UNIT = xS;
    var wS = "unit";
    f.CONFIG_UNIT = wS;
    var FS = "transform";
    f.TRANSFORM = FS;
    var GS = "translateX";
    f.TRANSLATE_X = GS;
    var XS = "translateY";
    f.TRANSLATE_Y = XS;
    var VS = "translateZ";
    f.TRANSLATE_Z = VS;
    var US = "translate3d";
    f.TRANSLATE_3D = US;
    var BS = "scaleX";
    f.SCALE_X = BS;
    var jS = "scaleY";
    f.SCALE_Y = jS;
    var WS = "scaleZ";
    f.SCALE_Z = WS;
    var HS = "scale3d";
    f.SCALE_3D = HS;
    var KS = "rotateX";
    f.ROTATE_X = KS;
    var YS = "rotateY";
    f.ROTATE_Y = YS;
    var QS = "rotateZ";
    f.ROTATE_Z = QS;
    var zS = "skew";
    f.SKEW = zS;
    var $S = "skewX";
    f.SKEW_X = $S;
    var kS = "skewY";
    f.SKEW_Y = kS;
    var ZS = "opacity";
    f.OPACITY = ZS;
    var JS = "filter";
    f.FILTER = JS;
    var eA = "font-variation-settings";
    f.FONT_VARIATION_SETTINGS = eA;
    var rA = "width";
    f.WIDTH = rA;
    var tA = "height";
    f.HEIGHT = tA;
    var nA = "backgroundColor";
    f.BACKGROUND_COLOR = nA;
    var iA = "background";
    f.BACKGROUND = iA;
    var aA = "borderColor";
    f.BORDER_COLOR = aA;
    var oA = "color";
    f.COLOR = oA;
    var sA = "display";
    f.DISPLAY = sA;
    var uA = "flex";
    f.FLEX = uA;
    var cA = "willChange";
    f.WILL_CHANGE = cA;
    var lA = "AUTO";
    f.AUTO = lA;
    var fA = ",";
    f.COMMA_DELIMITER = fA;
    var dA = ":";
    f.COLON_DELIMITER = dA;
    var EA = "|";
    f.BAR_DELIMITER = EA;
    var pA = "CHILDREN";
    f.CHILDREN = pA;
    var _A = "IMMEDIATE_CHILDREN";
    f.IMMEDIATE_CHILDREN = _A;
    var gA = "SIBLINGS";
    f.SIBLINGS = gA;
    var vA = "PARENT";
    f.PARENT = vA;
    var IA = "preserve-3d";
    f.PRESERVE_3D = IA;
    var TA = "HTML_ELEMENT";
    f.HTML_ELEMENT = TA;
    var OA = "PLAIN_OBJECT";
    f.PLAIN_OBJECT = OA;
    var hA = "ABSTRACT_NODE";
    f.ABSTRACT_NODE = hA;
    var yA = "RENDER_TRANSFORM";
    f.RENDER_TRANSFORM = yA;
    var SA = "RENDER_GENERAL";
    f.RENDER_GENERAL = SA;
    var AA = "RENDER_STYLE";
    f.RENDER_STYLE = AA;
    var RA = "RENDER_PLUGIN";
    f.RENDER_PLUGIN = RA;
});
var Z = s((U)=>{
    "use strict";
    var Oc = Me().default;
    Object.defineProperty(U, "__esModule", {
        value: !0
    });
    var _t = {
        IX2EngineActionTypes: !0,
        IX2EngineConstants: !0
    };
    U.IX2EngineConstants = U.IX2EngineActionTypes = void 0;
    var qi = _c();
    Object.keys(qi).forEach(function(e) {
        e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(_t, e) || e in U && U[e] === qi[e] || Object.defineProperty(U, e, {
            enumerable: !0,
            get: function() {
                return qi[e];
            }
        });
    });
    var Pi = mi();
    Object.keys(Pi).forEach(function(e) {
        e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(_t, e) || e in U && U[e] === Pi[e] || Object.defineProperty(U, e, {
            enumerable: !0,
            get: function() {
                return Pi[e];
            }
        });
    });
    var Li = gc();
    Object.keys(Li).forEach(function(e) {
        e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(_t, e) || e in U && U[e] === Li[e] || Object.defineProperty(U, e, {
            enumerable: !0,
            get: function() {
                return Li[e];
            }
        });
    });
    var Di = vc();
    Object.keys(Di).forEach(function(e) {
        e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(_t, e) || e in U && U[e] === Di[e] || Object.defineProperty(U, e, {
            enumerable: !0,
            get: function() {
                return Di[e];
            }
        });
    });
    var CA = Oc(Ic());
    U.IX2EngineActionTypes = CA;
    var NA = Oc(Tc());
    U.IX2EngineConstants = NA;
});
var hc = s((gt)=>{
    "use strict";
    Object.defineProperty(gt, "__esModule", {
        value: !0
    });
    gt.ixData = void 0;
    var bA = Z(), { IX2_RAW_DATA_IMPORTED: mA } = bA.IX2EngineActionTypes, qA = (e = Object.freeze({}), r)=>{
        switch(r.type){
            case mA:
                return r.payload.ixData || Object.freeze({});
            default:
                return e;
        }
    };
    gt.ixData = qA;
});
var Je = s((YU, he)=>{
    function Mi() {
        return he.exports = Mi = Object.assign ? Object.assign.bind() : function(e) {
            for(var r = 1; r < arguments.length; r++){
                var t = arguments[r];
                for(var n in t)Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
        }, he.exports.__esModule = !0, he.exports.default = he.exports, Mi.apply(this, arguments);
    }
    he.exports = Mi, he.exports.__esModule = !0, he.exports.default = he.exports;
});
var er = s((G)=>{
    "use strict";
    Object.defineProperty(G, "__esModule", {
        value: !0
    });
    var PA = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    G.clone = It;
    G.addLast = Ac;
    G.addFirst = Rc;
    G.removeLast = Cc;
    G.removeFirst = Nc;
    G.insert = bc;
    G.removeAt = mc;
    G.replaceAt = qc;
    G.getIn = Tt;
    G.set = Ot;
    G.setIn = ht;
    G.update = Lc;
    G.updateIn = Dc;
    G.merge = Mc;
    G.mergeDeep = xc;
    G.mergeIn = wc;
    G.omit = Fc;
    G.addDefaults = Gc;
    var yc = "INVALID_ARGS";
    function Sc(e) {
        throw new Error(e);
    }
    function xi(e) {
        var r = Object.keys(e);
        return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r;
    }
    var LA = {}.hasOwnProperty;
    function It(e) {
        if (Array.isArray(e)) return e.slice();
        for(var r = xi(e), t = {}, n = 0; n < r.length; n++){
            var i = r[n];
            t[i] = e[i];
        }
        return t;
    }
    function J(e, r, t) {
        var n = t;
        n == null && Sc(yc);
        for(var i = !1, a = arguments.length, o = Array(a > 3 ? a - 3 : 0), u = 3; u < a; u++)o[u - 3] = arguments[u];
        for(var c = 0; c < o.length; c++){
            var l = o[c];
            if (l != null) {
                var d = xi(l);
                if (d.length) for(var E = 0; E <= d.length; E++){
                    var p = d[E];
                    if (!(e && n[p] !== void 0)) {
                        var g = l[p];
                        r && vt(n[p]) && vt(g) && (g = J(e, r, n[p], g)), !(g === void 0 || g === n[p]) && (i || (i = !0, n = It(n)), n[p] = g);
                    }
                }
            }
        }
        return n;
    }
    function vt(e) {
        var r = typeof e > "u" ? "undefined" : PA(e);
        return e != null && (r === "object" || r === "function");
    }
    function Ac(e, r) {
        return Array.isArray(r) ? e.concat(r) : e.concat([
            r
        ]);
    }
    function Rc(e, r) {
        return Array.isArray(r) ? r.concat(e) : [
            r
        ].concat(e);
    }
    function Cc(e) {
        return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Nc(e) {
        return e.length ? e.slice(1) : e;
    }
    function bc(e, r, t) {
        return e.slice(0, r).concat(Array.isArray(t) ? t : [
            t
        ]).concat(e.slice(r));
    }
    function mc(e, r) {
        return r >= e.length || r < 0 ? e : e.slice(0, r).concat(e.slice(r + 1));
    }
    function qc(e, r, t) {
        if (e[r] === t) return e;
        for(var n = e.length, i = Array(n), a = 0; a < n; a++)i[a] = e[a];
        return i[r] = t, i;
    }
    function Tt(e, r) {
        if (!Array.isArray(r) && Sc(yc), e != null) {
            for(var t = e, n = 0; n < r.length; n++){
                var i = r[n];
                if (t = t?.[i], t === void 0) return t;
            }
            return t;
        }
    }
    function Ot(e, r, t) {
        var n = typeof r == "number" ? [] : {}, i = e ?? n;
        if (i[r] === t) return i;
        var a = It(i);
        return a[r] = t, a;
    }
    function Pc(e, r, t, n) {
        var i = void 0, a = r[n];
        if (n === r.length - 1) i = t;
        else {
            var o = vt(e) && vt(e[a]) ? e[a] : typeof r[n + 1] == "number" ? [] : {};
            i = Pc(o, r, t, n + 1);
        }
        return Ot(e, a, i);
    }
    function ht(e, r, t) {
        return r.length ? Pc(e, r, t, 0) : t;
    }
    function Lc(e, r, t) {
        var n = e?.[r], i = t(n);
        return Ot(e, r, i);
    }
    function Dc(e, r, t) {
        var n = Tt(e, r), i = t(n);
        return ht(e, r, i);
    }
    function Mc(e, r, t, n, i, a) {
        for(var o = arguments.length, u = Array(o > 6 ? o - 6 : 0), c = 6; c < o; c++)u[c - 6] = arguments[c];
        return u.length ? J.call.apply(J, [
            null,
            !1,
            !1,
            e,
            r,
            t,
            n,
            i,
            a
        ].concat(u)) : J(!1, !1, e, r, t, n, i, a);
    }
    function xc(e, r, t, n, i, a) {
        for(var o = arguments.length, u = Array(o > 6 ? o - 6 : 0), c = 6; c < o; c++)u[c - 6] = arguments[c];
        return u.length ? J.call.apply(J, [
            null,
            !1,
            !0,
            e,
            r,
            t,
            n,
            i,
            a
        ].concat(u)) : J(!1, !0, e, r, t, n, i, a);
    }
    function wc(e, r, t, n, i, a, o) {
        var u = Tt(e, r);
        u == null && (u = {});
        for(var c = void 0, l = arguments.length, d = Array(l > 7 ? l - 7 : 0), E = 7; E < l; E++)d[E - 7] = arguments[E];
        return d.length ? c = J.call.apply(J, [
            null,
            !1,
            !1,
            u,
            t,
            n,
            i,
            a,
            o
        ].concat(d)) : c = J(!1, !1, u, t, n, i, a, o), ht(e, r, c);
    }
    function Fc(e, r) {
        for(var t = Array.isArray(r) ? r : [
            r
        ], n = !1, i = 0; i < t.length; i++)if (LA.call(e, t[i])) {
            n = !0;
            break;
        }
        if (!n) return e;
        for(var a = {}, o = xi(e), u = 0; u < o.length; u++){
            var c = o[u];
            t.indexOf(c) >= 0 || (a[c] = e[c]);
        }
        return a;
    }
    function Gc(e, r, t, n, i, a) {
        for(var o = arguments.length, u = Array(o > 6 ? o - 6 : 0), c = 6; c < o; c++)u[c - 6] = arguments[c];
        return u.length ? J.call.apply(J, [
            null,
            !0,
            !1,
            e,
            r,
            t,
            n,
            i,
            a
        ].concat(u)) : J(!0, !1, e, r, t, n, i, a);
    }
    var DA = {
        clone: It,
        addLast: Ac,
        addFirst: Rc,
        removeLast: Cc,
        removeFirst: Nc,
        insert: bc,
        removeAt: mc,
        replaceAt: qc,
        getIn: Tt,
        set: Ot,
        setIn: ht,
        update: Lc,
        updateIn: Dc,
        merge: Mc,
        mergeDeep: xc,
        mergeIn: wc,
        omit: Fc,
        addDefaults: Gc
    };
    G.default = DA;
});
var Vc = s((yt)=>{
    "use strict";
    var MA = ne().default;
    Object.defineProperty(yt, "__esModule", {
        value: !0
    });
    yt.ixRequest = void 0;
    var xA = MA(Je()), wA = Z(), FA = er(), { IX2_PREVIEW_REQUESTED: GA, IX2_PLAYBACK_REQUESTED: XA, IX2_STOP_REQUESTED: VA, IX2_CLEAR_REQUESTED: UA } = wA.IX2EngineActionTypes, BA = {
        preview: {},
        playback: {},
        stop: {},
        clear: {}
    }, Xc = Object.create(null, {
        [GA]: {
            value: "preview"
        },
        [XA]: {
            value: "playback"
        },
        [VA]: {
            value: "stop"
        },
        [UA]: {
            value: "clear"
        }
    }), jA = (e = BA, r)=>{
        if (r.type in Xc) {
            let t = [
                Xc[r.type]
            ];
            return (0, FA.setIn)(e, [
                t
            ], (0, xA.default)({}, r.payload));
        }
        return e;
    };
    yt.ixRequest = jA;
});
var Bc = s((St)=>{
    "use strict";
    Object.defineProperty(St, "__esModule", {
        value: !0
    });
    St.ixSession = void 0;
    var WA = Z(), Ee = er(), { IX2_SESSION_INITIALIZED: HA, IX2_SESSION_STARTED: KA, IX2_TEST_FRAME_RENDERED: YA, IX2_SESSION_STOPPED: QA, IX2_EVENT_LISTENER_ADDED: zA, IX2_EVENT_STATE_CHANGED: $A, IX2_ANIMATION_FRAME_CHANGED: kA, IX2_ACTION_LIST_PLAYBACK_CHANGED: ZA, IX2_VIEWPORT_WIDTH_CHANGED: JA, IX2_MEDIA_QUERIES_DEFINED: eR } = WA.IX2EngineActionTypes, Uc = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1
    }, rR = 20, tR = (e = Uc, r)=>{
        switch(r.type){
            case HA:
                {
                    let { hasBoundaryNodes: t, reducedMotion: n } = r.payload;
                    return (0, Ee.merge)(e, {
                        hasBoundaryNodes: t,
                        reducedMotion: n
                    });
                }
            case KA:
                return (0, Ee.set)(e, "active", !0);
            case YA:
                {
                    let { payload: { step: t = rR } } = r;
                    return (0, Ee.set)(e, "tick", e.tick + t);
                }
            case QA:
                return Uc;
            case kA:
                {
                    let { payload: { now: t } } = r;
                    return (0, Ee.set)(e, "tick", t);
                }
            case zA:
                {
                    let t = (0, Ee.addLast)(e.eventListeners, r.payload);
                    return (0, Ee.set)(e, "eventListeners", t);
                }
            case $A:
                {
                    let { stateKey: t, newState: n } = r.payload;
                    return (0, Ee.setIn)(e, [
                        "eventState",
                        t
                    ], n);
                }
            case ZA:
                {
                    let { actionListId: t, isPlaying: n } = r.payload;
                    return (0, Ee.setIn)(e, [
                        "playbackState",
                        t
                    ], n);
                }
            case JA:
                {
                    let { width: t, mediaQueries: n } = r.payload, i = n.length, a = null;
                    for(let o = 0; o < i; o++){
                        let { key: u, min: c, max: l } = n[o];
                        if (t >= c && t <= l) {
                            a = u;
                            break;
                        }
                    }
                    return (0, Ee.merge)(e, {
                        viewportWidth: t,
                        mediaQueryKey: a
                    });
                }
            case eR:
                return (0, Ee.set)(e, "hasDefinedMediaQueries", !0);
            default:
                return e;
        }
    };
    St.ixSession = tR;
});
var Wc = s((kU, jc)=>{
    function nR() {
        this.__data__ = [], this.size = 0;
    }
    jc.exports = nR;
});
var At = s((ZU, Hc)=>{
    function iR(e, r) {
        return e === r || e !== e && r !== r;
    }
    Hc.exports = iR;
});
var Pr = s((JU, Kc)=>{
    var aR = At();
    function oR(e, r) {
        for(var t = e.length; t--;)if (aR(e[t][0], r)) return t;
        return -1;
    }
    Kc.exports = oR;
});
var Qc = s((eB, Yc)=>{
    var sR = Pr(), uR = Array.prototype, cR = uR.splice;
    function lR(e) {
        var r = this.__data__, t = sR(r, e);
        if (t < 0) return !1;
        var n = r.length - 1;
        return t == n ? r.pop() : cR.call(r, t, 1), --this.size, !0;
    }
    Yc.exports = lR;
});
var $c = s((rB, zc)=>{
    var fR = Pr();
    function dR(e) {
        var r = this.__data__, t = fR(r, e);
        return t < 0 ? void 0 : r[t][1];
    }
    zc.exports = dR;
});
var Zc = s((tB, kc)=>{
    var ER = Pr();
    function pR(e) {
        return ER(this.__data__, e) > -1;
    }
    kc.exports = pR;
});
var el = s((nB, Jc)=>{
    var _R = Pr();
    function gR(e, r) {
        var t = this.__data__, n = _R(t, e);
        return n < 0 ? (++this.size, t.push([
            e,
            r
        ])) : t[n][1] = r, this;
    }
    Jc.exports = gR;
});
var Lr = s((iB, rl)=>{
    var vR = Wc(), IR = Qc(), TR = $c(), OR = Zc(), hR = el();
    function rr(e) {
        var r = -1, t = e == null ? 0 : e.length;
        for(this.clear(); ++r < t;){
            var n = e[r];
            this.set(n[0], n[1]);
        }
    }
    rr.prototype.clear = vR;
    rr.prototype.delete = IR;
    rr.prototype.get = TR;
    rr.prototype.has = OR;
    rr.prototype.set = hR;
    rl.exports = rr;
});
var nl = s((aB, tl)=>{
    var yR = Lr();
    function SR() {
        this.__data__ = new yR(), this.size = 0;
    }
    tl.exports = SR;
});
var al = s((oB, il)=>{
    function AR(e) {
        var r = this.__data__, t = r.delete(e);
        return this.size = r.size, t;
    }
    il.exports = AR;
});
var sl = s((sB, ol)=>{
    function RR(e) {
        return this.__data__.get(e);
    }
    ol.exports = RR;
});
var cl = s((uB, ul)=>{
    function CR(e) {
        return this.__data__.has(e);
    }
    ul.exports = CR;
});
var pe = s((cB, ll)=>{
    function NR(e) {
        var r = typeof e;
        return e != null && (r == "object" || r == "function");
    }
    ll.exports = NR;
});
var wi = s((lB, fl)=>{
    var bR = Ne(), mR = pe(), qR = "[object AsyncFunction]", PR = "[object Function]", LR = "[object GeneratorFunction]", DR = "[object Proxy]";
    function MR(e) {
        if (!mR(e)) return !1;
        var r = bR(e);
        return r == PR || r == LR || r == qR || r == DR;
    }
    fl.exports = MR;
});
var El = s((fB, dl)=>{
    var xR = oe(), wR = xR["__core-js_shared__"];
    dl.exports = wR;
});
var gl = s((dB, _l)=>{
    var Fi = El(), pl = function() {
        var e = /[^.]+$/.exec(Fi && Fi.keys && Fi.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
    }();
    function FR(e) {
        return !!pl && pl in e;
    }
    _l.exports = FR;
});
var Gi = s((EB, vl)=>{
    var GR = Function.prototype, XR = GR.toString;
    function VR(e) {
        if (e != null) {
            try {
                return XR.call(e);
            } catch  {}
            try {
                return e + "";
            } catch  {}
        }
        return "";
    }
    vl.exports = VR;
});
var Tl = s((pB, Il)=>{
    var UR = wi(), BR = gl(), jR = pe(), WR = Gi(), HR = /[\\^$.*+?()[\]{}|]/g, KR = /^\[object .+?Constructor\]$/, YR = Function.prototype, QR = Object.prototype, zR = YR.toString, $R = QR.hasOwnProperty, kR = RegExp("^" + zR.call($R).replace(HR, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function ZR(e) {
        if (!jR(e) || BR(e)) return !1;
        var r = UR(e) ? kR : KR;
        return r.test(WR(e));
    }
    Il.exports = ZR;
});
var hl = s((_B, Ol)=>{
    function JR(e, r) {
        return e?.[r];
    }
    Ol.exports = JR;
});
var be = s((gB, yl)=>{
    var eC = Tl(), rC = hl();
    function tC(e, r) {
        var t = rC(e, r);
        return eC(t) ? t : void 0;
    }
    yl.exports = tC;
});
var Rt = s((vB, Sl)=>{
    var nC = be(), iC = oe(), aC = nC(iC, "Map");
    Sl.exports = aC;
});
var Dr = s((IB, Al)=>{
    var oC = be(), sC = oC(Object, "create");
    Al.exports = sC;
});
var Nl = s((TB, Cl)=>{
    var Rl = Dr();
    function uC() {
        this.__data__ = Rl ? Rl(null) : {}, this.size = 0;
    }
    Cl.exports = uC;
});
var ml = s((OB, bl)=>{
    function cC(e) {
        var r = this.has(e) && delete this.__data__[e];
        return this.size -= r ? 1 : 0, r;
    }
    bl.exports = cC;
});
var Pl = s((hB, ql)=>{
    var lC = Dr(), fC = "__lodash_hash_undefined__", dC = Object.prototype, EC = dC.hasOwnProperty;
    function pC(e) {
        var r = this.__data__;
        if (lC) {
            var t = r[e];
            return t === fC ? void 0 : t;
        }
        return EC.call(r, e) ? r[e] : void 0;
    }
    ql.exports = pC;
});
var Dl = s((yB, Ll)=>{
    var _C = Dr(), gC = Object.prototype, vC = gC.hasOwnProperty;
    function IC(e) {
        var r = this.__data__;
        return _C ? r[e] !== void 0 : vC.call(r, e);
    }
    Ll.exports = IC;
});
var xl = s((SB, Ml)=>{
    var TC = Dr(), OC = "__lodash_hash_undefined__";
    function hC(e, r) {
        var t = this.__data__;
        return this.size += this.has(e) ? 0 : 1, t[e] = TC && r === void 0 ? OC : r, this;
    }
    Ml.exports = hC;
});
var Fl = s((AB, wl)=>{
    var yC = Nl(), SC = ml(), AC = Pl(), RC = Dl(), CC = xl();
    function tr(e) {
        var r = -1, t = e == null ? 0 : e.length;
        for(this.clear(); ++r < t;){
            var n = e[r];
            this.set(n[0], n[1]);
        }
    }
    tr.prototype.clear = yC;
    tr.prototype.delete = SC;
    tr.prototype.get = AC;
    tr.prototype.has = RC;
    tr.prototype.set = CC;
    wl.exports = tr;
});
var Vl = s((RB, Xl)=>{
    var Gl = Fl(), NC = Lr(), bC = Rt();
    function mC() {
        this.size = 0, this.__data__ = {
            hash: new Gl(),
            map: new (bC || NC)(),
            string: new Gl()
        };
    }
    Xl.exports = mC;
});
var Bl = s((CB, Ul)=>{
    function qC(e) {
        var r = typeof e;
        return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
    }
    Ul.exports = qC;
});
var Mr = s((NB, jl)=>{
    var PC = Bl();
    function LC(e, r) {
        var t = e.__data__;
        return PC(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
    }
    jl.exports = LC;
});
var Hl = s((bB, Wl)=>{
    var DC = Mr();
    function MC(e) {
        var r = DC(this, e).delete(e);
        return this.size -= r ? 1 : 0, r;
    }
    Wl.exports = MC;
});
var Yl = s((mB, Kl)=>{
    var xC = Mr();
    function wC(e) {
        return xC(this, e).get(e);
    }
    Kl.exports = wC;
});
var zl = s((qB, Ql)=>{
    var FC = Mr();
    function GC(e) {
        return FC(this, e).has(e);
    }
    Ql.exports = GC;
});
var kl = s((PB, $l)=>{
    var XC = Mr();
    function VC(e, r) {
        var t = XC(this, e), n = t.size;
        return t.set(e, r), this.size += t.size == n ? 0 : 1, this;
    }
    $l.exports = VC;
});
var Ct = s((LB, Zl)=>{
    var UC = Vl(), BC = Hl(), jC = Yl(), WC = zl(), HC = kl();
    function nr(e) {
        var r = -1, t = e == null ? 0 : e.length;
        for(this.clear(); ++r < t;){
            var n = e[r];
            this.set(n[0], n[1]);
        }
    }
    nr.prototype.clear = UC;
    nr.prototype.delete = BC;
    nr.prototype.get = jC;
    nr.prototype.has = WC;
    nr.prototype.set = HC;
    Zl.exports = nr;
});
var ef = s((DB, Jl)=>{
    var KC = Lr(), YC = Rt(), QC = Ct(), zC = 200;
    function $C(e, r) {
        var t = this.__data__;
        if (t instanceof KC) {
            var n = t.__data__;
            if (!YC || n.length < zC - 1) return n.push([
                e,
                r
            ]), this.size = ++t.size, this;
            t = this.__data__ = new QC(n);
        }
        return t.set(e, r), this.size = t.size, this;
    }
    Jl.exports = $C;
});
var Xi = s((MB, rf)=>{
    var kC = Lr(), ZC = nl(), JC = al(), eN = sl(), rN = cl(), tN = ef();
    function ir(e) {
        var r = this.__data__ = new kC(e);
        this.size = r.size;
    }
    ir.prototype.clear = ZC;
    ir.prototype.delete = JC;
    ir.prototype.get = eN;
    ir.prototype.has = rN;
    ir.prototype.set = tN;
    rf.exports = ir;
});
var nf = s((xB, tf)=>{
    var nN = "__lodash_hash_undefined__";
    function iN(e) {
        return this.__data__.set(e, nN), this;
    }
    tf.exports = iN;
});
var of = s((wB, af)=>{
    function aN(e) {
        return this.__data__.has(e);
    }
    af.exports = aN;
});
var uf = s((FB, sf)=>{
    var oN = Ct(), sN = nf(), uN = of();
    function Nt(e) {
        var r = -1, t = e == null ? 0 : e.length;
        for(this.__data__ = new oN(); ++r < t;)this.add(e[r]);
    }
    Nt.prototype.add = Nt.prototype.push = sN;
    Nt.prototype.has = uN;
    sf.exports = Nt;
});
var lf = s((GB, cf)=>{
    function cN(e, r) {
        for(var t = -1, n = e == null ? 0 : e.length; ++t < n;)if (r(e[t], t, e)) return !0;
        return !1;
    }
    cf.exports = cN;
});
var df = s((XB, ff)=>{
    function lN(e, r) {
        return e.has(r);
    }
    ff.exports = lN;
});
var Vi = s((VB, Ef)=>{
    var fN = uf(), dN = lf(), EN = df(), pN = 1, _N = 2;
    function gN(e, r, t, n, i, a) {
        var o = t & pN, u = e.length, c = r.length;
        if (u != c && !(o && c > u)) return !1;
        var l = a.get(e), d = a.get(r);
        if (l && d) return l == r && d == e;
        var E = -1, p = !0, g = t & _N ? new fN() : void 0;
        for(a.set(e, r), a.set(r, e); ++E < u;){
            var v = e[E], _ = r[E];
            if (n) var T = o ? n(_, v, E, r, e, a) : n(v, _, E, e, r, a);
            if (T !== void 0) {
                if (T) continue;
                p = !1;
                break;
            }
            if (g) {
                if (!dN(r, function(I, h) {
                    if (!EN(g, h) && (v === I || i(v, I, t, n, a))) return g.push(h);
                })) {
                    p = !1;
                    break;
                }
            } else if (!(v === _ || i(v, _, t, n, a))) {
                p = !1;
                break;
            }
        }
        return a.delete(e), a.delete(r), p;
    }
    Ef.exports = gN;
});
var _f = s((UB, pf)=>{
    var vN = oe(), IN = vN.Uint8Array;
    pf.exports = IN;
});
var vf = s((BB, gf)=>{
    function TN(e) {
        var r = -1, t = Array(e.size);
        return e.forEach(function(n, i) {
            t[++r] = [
                i,
                n
            ];
        }), t;
    }
    gf.exports = TN;
});
var Tf = s((jB, If)=>{
    function ON(e) {
        var r = -1, t = Array(e.size);
        return e.forEach(function(n) {
            t[++r] = n;
        }), t;
    }
    If.exports = ON;
});
var Af = s((WB, Sf)=>{
    var Of = ze(), hf = _f(), hN = At(), yN = Vi(), SN = vf(), AN = Tf(), RN = 1, CN = 2, NN = "[object Boolean]", bN = "[object Date]", mN = "[object Error]", qN = "[object Map]", PN = "[object Number]", LN = "[object RegExp]", DN = "[object Set]", MN = "[object String]", xN = "[object Symbol]", wN = "[object ArrayBuffer]", FN = "[object DataView]", yf = Of ? Of.prototype : void 0, Ui = yf ? yf.valueOf : void 0;
    function GN(e, r, t, n, i, a, o) {
        switch(t){
            case FN:
                if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset) return !1;
                e = e.buffer, r = r.buffer;
            case wN:
                return !(e.byteLength != r.byteLength || !a(new hf(e), new hf(r)));
            case NN:
            case bN:
            case PN:
                return hN(+e, +r);
            case mN:
                return e.name == r.name && e.message == r.message;
            case LN:
            case MN:
                return e == r + "";
            case qN:
                var u = SN;
            case DN:
                var c = n & RN;
                if (u || (u = AN), e.size != r.size && !c) return !1;
                var l = o.get(e);
                if (l) return l == r;
                n |= CN, o.set(e, r);
                var d = yN(u(e), u(r), n, i, a, o);
                return o.delete(e), d;
            case xN:
                if (Ui) return Ui.call(e) == Ui.call(r);
        }
        return !1;
    }
    Sf.exports = GN;
});
var bt = s((HB, Rf)=>{
    function XN(e, r) {
        for(var t = -1, n = r.length, i = e.length; ++t < n;)e[i + t] = r[t];
        return e;
    }
    Rf.exports = XN;
});
var H = s((KB, Cf)=>{
    var VN = Array.isArray;
    Cf.exports = VN;
});
var Bi = s((YB, Nf)=>{
    var UN = bt(), BN = H();
    function jN(e, r, t) {
        var n = r(e);
        return BN(e) ? n : UN(n, t(e));
    }
    Nf.exports = jN;
});
var mf = s((QB, bf)=>{
    function WN(e, r) {
        for(var t = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++t < n;){
            var o = e[t];
            r(o, t, e) && (a[i++] = o);
        }
        return a;
    }
    bf.exports = WN;
});
var ji = s((zB, qf)=>{
    function HN() {
        return [];
    }
    qf.exports = HN;
});
var Wi = s(($B, Lf)=>{
    var KN = mf(), YN = ji(), QN = Object.prototype, zN = QN.propertyIsEnumerable, Pf = Object.getOwnPropertySymbols, $N = Pf ? function(e) {
        return e == null ? [] : (e = Object(e), KN(Pf(e), function(r) {
            return zN.call(e, r);
        }));
    } : YN;
    Lf.exports = $N;
});
var Mf = s((kB, Df)=>{
    function kN(e, r) {
        for(var t = -1, n = Array(e); ++t < e;)n[t] = r(t);
        return n;
    }
    Df.exports = kN;
});
var wf = s((ZB, xf)=>{
    var ZN = Ne(), JN = Oe(), eb = "[object Arguments]";
    function rb(e) {
        return JN(e) && ZN(e) == eb;
    }
    xf.exports = rb;
});
var xr = s((JB, Xf)=>{
    var Ff = wf(), tb = Oe(), Gf = Object.prototype, nb = Gf.hasOwnProperty, ib = Gf.propertyIsEnumerable, ab = Ff(function() {
        return arguments;
    }()) ? Ff : function(e) {
        return tb(e) && nb.call(e, "callee") && !ib.call(e, "callee");
    };
    Xf.exports = ab;
});
var Uf = s((ej, Vf)=>{
    function ob() {
        return !1;
    }
    Vf.exports = ob;
});
var mt = s((wr, ar)=>{
    var sb = oe(), ub = Uf(), Wf = typeof wr == "object" && wr && !wr.nodeType && wr, Bf = Wf && typeof ar == "object" && ar && !ar.nodeType && ar, cb = Bf && Bf.exports === Wf, jf = cb ? sb.Buffer : void 0, lb = jf ? jf.isBuffer : void 0, fb = lb || ub;
    ar.exports = fb;
});
var qt = s((rj, Hf)=>{
    var db = 9007199254740991, Eb = /^(?:0|[1-9]\d*)$/;
    function pb(e, r) {
        var t = typeof e;
        return r = r ?? db, !!r && (t == "number" || t != "symbol" && Eb.test(e)) && e > -1 && e % 1 == 0 && e < r;
    }
    Hf.exports = pb;
});
var Pt = s((tj, Kf)=>{
    var _b = 9007199254740991;
    function gb(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= _b;
    }
    Kf.exports = gb;
});
var Qf = s((nj, Yf)=>{
    var vb = Ne(), Ib = Pt(), Tb = Oe(), Ob = "[object Arguments]", hb = "[object Array]", yb = "[object Boolean]", Sb = "[object Date]", Ab = "[object Error]", Rb = "[object Function]", Cb = "[object Map]", Nb = "[object Number]", bb = "[object Object]", mb = "[object RegExp]", qb = "[object Set]", Pb = "[object String]", Lb = "[object WeakMap]", Db = "[object ArrayBuffer]", Mb = "[object DataView]", xb = "[object Float32Array]", wb = "[object Float64Array]", Fb = "[object Int8Array]", Gb = "[object Int16Array]", Xb = "[object Int32Array]", Vb = "[object Uint8Array]", Ub = "[object Uint8ClampedArray]", Bb = "[object Uint16Array]", jb = "[object Uint32Array]", x = {};
    x[xb] = x[wb] = x[Fb] = x[Gb] = x[Xb] = x[Vb] = x[Ub] = x[Bb] = x[jb] = !0;
    x[Ob] = x[hb] = x[Db] = x[yb] = x[Mb] = x[Sb] = x[Ab] = x[Rb] = x[Cb] = x[Nb] = x[bb] = x[mb] = x[qb] = x[Pb] = x[Lb] = !1;
    function Wb(e) {
        return Tb(e) && Ib(e.length) && !!x[vb(e)];
    }
    Yf.exports = Wb;
});
var $f = s((ij, zf)=>{
    function Hb(e) {
        return function(r) {
            return e(r);
        };
    }
    zf.exports = Hb;
});
var Zf = s((Fr, or)=>{
    var Kb = Ei(), kf = typeof Fr == "object" && Fr && !Fr.nodeType && Fr, Gr = kf && typeof or == "object" && or && !or.nodeType && or, Yb = Gr && Gr.exports === kf, Hi = Yb && Kb.process, Qb = function() {
        try {
            var e = Gr && Gr.require && Gr.require("util").types;
            return e || Hi && Hi.binding && Hi.binding("util");
        } catch  {}
    }();
    or.exports = Qb;
});
var Lt = s((aj, rd)=>{
    var zb = Qf(), $b = $f(), Jf = Zf(), ed = Jf && Jf.isTypedArray, kb = ed ? $b(ed) : zb;
    rd.exports = kb;
});
var Ki = s((oj, td)=>{
    var Zb = Mf(), Jb = xr(), em = H(), rm = mt(), tm = qt(), nm = Lt(), im = Object.prototype, am = im.hasOwnProperty;
    function om(e, r) {
        var t = em(e), n = !t && Jb(e), i = !t && !n && rm(e), a = !t && !n && !i && nm(e), o = t || n || i || a, u = o ? Zb(e.length, String) : [], c = u.length;
        for(var l in e)(r || am.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || tm(l, c))) && u.push(l);
        return u;
    }
    td.exports = om;
});
var Dt = s((sj, nd)=>{
    var sm = Object.prototype;
    function um(e) {
        var r = e && e.constructor, t = typeof r == "function" && r.prototype || sm;
        return e === t;
    }
    nd.exports = um;
});
var ad = s((uj, id)=>{
    var cm = pi(), lm = cm(Object.keys, Object);
    id.exports = lm;
});
var Mt = s((cj, od)=>{
    var fm = Dt(), dm = ad(), Em = Object.prototype, pm = Em.hasOwnProperty;
    function _m(e) {
        if (!fm(e)) return dm(e);
        var r = [];
        for(var t in Object(e))pm.call(e, t) && t != "constructor" && r.push(t);
        return r;
    }
    od.exports = _m;
});
var Ge = s((lj, sd)=>{
    var gm = wi(), vm = Pt();
    function Im(e) {
        return e != null && vm(e.length) && !gm(e);
    }
    sd.exports = Im;
});
var Xr = s((fj, ud)=>{
    var Tm = Ki(), Om = Mt(), hm = Ge();
    function ym(e) {
        return hm(e) ? Tm(e) : Om(e);
    }
    ud.exports = ym;
});
var ld = s((dj, cd)=>{
    var Sm = Bi(), Am = Wi(), Rm = Xr();
    function Cm(e) {
        return Sm(e, Rm, Am);
    }
    cd.exports = Cm;
});
var Ed = s((Ej, dd)=>{
    var fd = ld(), Nm = 1, bm = Object.prototype, mm = bm.hasOwnProperty;
    function qm(e, r, t, n, i, a) {
        var o = t & Nm, u = fd(e), c = u.length, l = fd(r), d = l.length;
        if (c != d && !o) return !1;
        for(var E = c; E--;){
            var p = u[E];
            if (!(o ? p in r : mm.call(r, p))) return !1;
        }
        var g = a.get(e), v = a.get(r);
        if (g && v) return g == r && v == e;
        var _ = !0;
        a.set(e, r), a.set(r, e);
        for(var T = o; ++E < c;){
            p = u[E];
            var I = e[p], h = r[p];
            if (n) var y = o ? n(h, I, p, r, e, a) : n(I, h, p, e, r, a);
            if (!(y === void 0 ? I === h || i(I, h, t, n, a) : y)) {
                _ = !1;
                break;
            }
            T || (T = p == "constructor");
        }
        if (_ && !T) {
            var A = e.constructor, R = r.constructor;
            A != R && "constructor" in e && "constructor" in r && !(typeof A == "function" && A instanceof A && typeof R == "function" && R instanceof R) && (_ = !1);
        }
        return a.delete(e), a.delete(r), _;
    }
    dd.exports = qm;
});
var _d = s((pj, pd)=>{
    var Pm = be(), Lm = oe(), Dm = Pm(Lm, "DataView");
    pd.exports = Dm;
});
var vd = s((_j, gd)=>{
    var Mm = be(), xm = oe(), wm = Mm(xm, "Promise");
    gd.exports = wm;
});
var Td = s((gj, Id)=>{
    var Fm = be(), Gm = oe(), Xm = Fm(Gm, "Set");
    Id.exports = Xm;
});
var Yi = s((vj, Od)=>{
    var Vm = be(), Um = oe(), Bm = Vm(Um, "WeakMap");
    Od.exports = Bm;
});
var xt = s((Ij, Nd)=>{
    var Qi = _d(), zi = Rt(), $i = vd(), ki = Td(), Zi = Yi(), Cd = Ne(), sr = Gi(), hd = "[object Map]", jm = "[object Object]", yd = "[object Promise]", Sd = "[object Set]", Ad = "[object WeakMap]", Rd = "[object DataView]", Wm = sr(Qi), Hm = sr(zi), Km = sr($i), Ym = sr(ki), Qm = sr(Zi), Xe = Cd;
    (Qi && Xe(new Qi(new ArrayBuffer(1))) != Rd || zi && Xe(new zi()) != hd || $i && Xe($i.resolve()) != yd || ki && Xe(new ki()) != Sd || Zi && Xe(new Zi()) != Ad) && (Xe = function(e) {
        var r = Cd(e), t = r == jm ? e.constructor : void 0, n = t ? sr(t) : "";
        if (n) switch(n){
            case Wm:
                return Rd;
            case Hm:
                return hd;
            case Km:
                return yd;
            case Ym:
                return Sd;
            case Qm:
                return Ad;
        }
        return r;
    });
    Nd.exports = Xe;
});
var xd = s((Tj, Md)=>{
    var Ji = Xi(), zm = Vi(), $m = Af(), km = Ed(), bd = xt(), md = H(), qd = mt(), Zm = Lt(), Jm = 1, Pd = "[object Arguments]", Ld = "[object Array]", wt = "[object Object]", eq = Object.prototype, Dd = eq.hasOwnProperty;
    function rq(e, r, t, n, i, a) {
        var o = md(e), u = md(r), c = o ? Ld : bd(e), l = u ? Ld : bd(r);
        c = c == Pd ? wt : c, l = l == Pd ? wt : l;
        var d = c == wt, E = l == wt, p = c == l;
        if (p && qd(e)) {
            if (!qd(r)) return !1;
            o = !0, d = !1;
        }
        if (p && !d) return a || (a = new Ji()), o || Zm(e) ? zm(e, r, t, n, i, a) : $m(e, r, c, t, n, i, a);
        if (!(t & Jm)) {
            var g = d && Dd.call(e, "__wrapped__"), v = E && Dd.call(r, "__wrapped__");
            if (g || v) {
                var _ = g ? e.value() : e, T = v ? r.value() : r;
                return a || (a = new Ji()), i(_, T, t, n, a);
            }
        }
        return p ? (a || (a = new Ji()), km(e, r, t, n, i, a)) : !1;
    }
    Md.exports = rq;
});
var ea = s((Oj, Gd)=>{
    var tq = xd(), wd = Oe();
    function Fd(e, r, t, n, i) {
        return e === r ? !0 : e == null || r == null || !wd(e) && !wd(r) ? e !== e && r !== r : tq(e, r, t, n, Fd, i);
    }
    Gd.exports = Fd;
});
var Vd = s((hj, Xd)=>{
    var nq = Xi(), iq = ea(), aq = 1, oq = 2;
    function sq(e, r, t, n) {
        var i = t.length, a = i, o = !n;
        if (e == null) return !a;
        for(e = Object(e); i--;){
            var u = t[i];
            if (o && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
        }
        for(; ++i < a;){
            u = t[i];
            var c = u[0], l = e[c], d = u[1];
            if (o && u[2]) {
                if (l === void 0 && !(c in e)) return !1;
            } else {
                var E = new nq();
                if (n) var p = n(l, d, c, e, r, E);
                if (!(p === void 0 ? iq(d, l, aq | oq, n, E) : p)) return !1;
            }
        }
        return !0;
    }
    Xd.exports = sq;
});
var ra = s((yj, Ud)=>{
    var uq = pe();
    function cq(e) {
        return e === e && !uq(e);
    }
    Ud.exports = cq;
});
var jd = s((Sj, Bd)=>{
    var lq = ra(), fq = Xr();
    function dq(e) {
        for(var r = fq(e), t = r.length; t--;){
            var n = r[t], i = e[n];
            r[t] = [
                n,
                i,
                lq(i)
            ];
        }
        return r;
    }
    Bd.exports = dq;
});
var ta = s((Aj, Wd)=>{
    function Eq(e, r) {
        return function(t) {
            return t == null ? !1 : t[e] === r && (r !== void 0 || e in Object(t));
        };
    }
    Wd.exports = Eq;
});
var Kd = s((Rj, Hd)=>{
    var pq = Vd(), _q = jd(), gq = ta();
    function vq(e) {
        var r = _q(e);
        return r.length == 1 && r[0][2] ? gq(r[0][0], r[0][1]) : function(t) {
            return t === e || pq(t, e, r);
        };
    }
    Hd.exports = vq;
});
var Vr = s((Cj, Yd)=>{
    var Iq = Ne(), Tq = Oe(), Oq = "[object Symbol]";
    function hq(e) {
        return typeof e == "symbol" || Tq(e) && Iq(e) == Oq;
    }
    Yd.exports = hq;
});
var Ft = s((Nj, Qd)=>{
    var yq = H(), Sq = Vr(), Aq = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Rq = /^\w*$/;
    function Cq(e, r) {
        if (yq(e)) return !1;
        var t = typeof e;
        return t == "number" || t == "symbol" || t == "boolean" || e == null || Sq(e) ? !0 : Rq.test(e) || !Aq.test(e) || r != null && e in Object(r);
    }
    Qd.exports = Cq;
});
var kd = s((bj, $d)=>{
    var zd = Ct(), Nq = "Expected a function";
    function na(e, r) {
        if (typeof e != "function" || r != null && typeof r != "function") throw new TypeError(Nq);
        var t = function() {
            var n = arguments, i = r ? r.apply(this, n) : n[0], a = t.cache;
            if (a.has(i)) return a.get(i);
            var o = e.apply(this, n);
            return t.cache = a.set(i, o) || a, o;
        };
        return t.cache = new (na.Cache || zd)(), t;
    }
    na.Cache = zd;
    $d.exports = na;
});
var Jd = s((mj, Zd)=>{
    var bq = kd(), mq = 500;
    function qq(e) {
        var r = bq(e, function(n) {
            return t.size === mq && t.clear(), n;
        }), t = r.cache;
        return r;
    }
    Zd.exports = qq;
});
var rE = s((qj, eE)=>{
    var Pq = Jd(), Lq = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Dq = /\\(\\)?/g, Mq = Pq(function(e) {
        var r = [];
        return e.charCodeAt(0) === 46 && r.push(""), e.replace(Lq, function(t, n, i, a) {
            r.push(i ? a.replace(Dq, "$1") : n || t);
        }), r;
    });
    eE.exports = Mq;
});
var ia = s((Pj, tE)=>{
    function xq(e, r) {
        for(var t = -1, n = e == null ? 0 : e.length, i = Array(n); ++t < n;)i[t] = r(e[t], t, e);
        return i;
    }
    tE.exports = xq;
});
var uE = s((Lj, sE)=>{
    var nE = ze(), wq = ia(), Fq = H(), Gq = Vr(), Xq = 1 / 0, iE = nE ? nE.prototype : void 0, aE = iE ? iE.toString : void 0;
    function oE(e) {
        if (typeof e == "string") return e;
        if (Fq(e)) return wq(e, oE) + "";
        if (Gq(e)) return aE ? aE.call(e) : "";
        var r = e + "";
        return r == "0" && 1 / e == -Xq ? "-0" : r;
    }
    sE.exports = oE;
});
var lE = s((Dj, cE)=>{
    var Vq = uE();
    function Uq(e) {
        return e == null ? "" : Vq(e);
    }
    cE.exports = Uq;
});
var Ur = s((Mj, fE)=>{
    var Bq = H(), jq = Ft(), Wq = rE(), Hq = lE();
    function Kq(e, r) {
        return Bq(e) ? e : jq(e, r) ? [
            e
        ] : Wq(Hq(e));
    }
    fE.exports = Kq;
});
var ur = s((xj, dE)=>{
    var Yq = Vr(), Qq = 1 / 0;
    function zq(e) {
        if (typeof e == "string" || Yq(e)) return e;
        var r = e + "";
        return r == "0" && 1 / e == -Qq ? "-0" : r;
    }
    dE.exports = zq;
});
var Gt = s((wj, EE)=>{
    var $q = Ur(), kq = ur();
    function Zq(e, r) {
        r = $q(r, e);
        for(var t = 0, n = r.length; e != null && t < n;)e = e[kq(r[t++])];
        return t && t == n ? e : void 0;
    }
    EE.exports = Zq;
});
var Xt = s((Fj, pE)=>{
    var Jq = Gt();
    function eP(e, r, t) {
        var n = e == null ? void 0 : Jq(e, r);
        return n === void 0 ? t : n;
    }
    pE.exports = eP;
});
var gE = s((Gj, _E)=>{
    function rP(e, r) {
        return e != null && r in Object(e);
    }
    _E.exports = rP;
});
var IE = s((Xj, vE)=>{
    var tP = Ur(), nP = xr(), iP = H(), aP = qt(), oP = Pt(), sP = ur();
    function uP(e, r, t) {
        r = tP(r, e);
        for(var n = -1, i = r.length, a = !1; ++n < i;){
            var o = sP(r[n]);
            if (!(a = e != null && t(e, o))) break;
            e = e[o];
        }
        return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && oP(i) && aP(o, i) && (iP(e) || nP(e)));
    }
    vE.exports = uP;
});
var OE = s((Vj, TE)=>{
    var cP = gE(), lP = IE();
    function fP(e, r) {
        return e != null && lP(e, r, cP);
    }
    TE.exports = fP;
});
var yE = s((Uj, hE)=>{
    var dP = ea(), EP = Xt(), pP = OE(), _P = Ft(), gP = ra(), vP = ta(), IP = ur(), TP = 1, OP = 2;
    function hP(e, r) {
        return _P(e) && gP(r) ? vP(IP(e), r) : function(t) {
            var n = EP(t, e);
            return n === void 0 && n === r ? pP(t, e) : dP(r, n, TP | OP);
        };
    }
    hE.exports = hP;
});
var Vt = s((Bj, SE)=>{
    function yP(e) {
        return e;
    }
    SE.exports = yP;
});
var aa = s((jj, AE)=>{
    function SP(e) {
        return function(r) {
            return r?.[e];
        };
    }
    AE.exports = SP;
});
var CE = s((Wj, RE)=>{
    var AP = Gt();
    function RP(e) {
        return function(r) {
            return AP(r, e);
        };
    }
    RE.exports = RP;
});
var bE = s((Hj, NE)=>{
    var CP = aa(), NP = CE(), bP = Ft(), mP = ur();
    function qP(e) {
        return bP(e) ? CP(mP(e)) : NP(e);
    }
    NE.exports = qP;
});
var me = s((Kj, mE)=>{
    var PP = Kd(), LP = yE(), DP = Vt(), MP = H(), xP = bE();
    function wP(e) {
        return typeof e == "function" ? e : e == null ? DP : typeof e == "object" ? MP(e) ? LP(e[0], e[1]) : PP(e) : xP(e);
    }
    mE.exports = wP;
});
var oa = s((Yj, qE)=>{
    var FP = me(), GP = Ge(), XP = Xr();
    function VP(e) {
        return function(r, t, n) {
            var i = Object(r);
            if (!GP(r)) {
                var a = FP(t, 3);
                r = XP(r), t = function(u) {
                    return a(i[u], u, i);
                };
            }
            var o = e(r, t, n);
            return o > -1 ? i[a ? r[o] : o] : void 0;
        };
    }
    qE.exports = VP;
});
var sa = s((Qj, PE)=>{
    function UP(e, r, t, n) {
        for(var i = e.length, a = t + (n ? 1 : -1); n ? a-- : ++a < i;)if (r(e[a], a, e)) return a;
        return -1;
    }
    PE.exports = UP;
});
var DE = s((zj, LE)=>{
    var BP = /\s/;
    function jP(e) {
        for(var r = e.length; r-- && BP.test(e.charAt(r)););
        return r;
    }
    LE.exports = jP;
});
var xE = s(($j, ME)=>{
    var WP = DE(), HP = /^\s+/;
    function KP(e) {
        return e && e.slice(0, WP(e) + 1).replace(HP, "");
    }
    ME.exports = KP;
});
var Ut = s((kj, GE)=>{
    var YP = xE(), wE = pe(), QP = Vr(), FE = 0 / 0, zP = /^[-+]0x[0-9a-f]+$/i, $P = /^0b[01]+$/i, kP = /^0o[0-7]+$/i, ZP = parseInt;
    function JP(e) {
        if (typeof e == "number") return e;
        if (QP(e)) return FE;
        if (wE(e)) {
            var r = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = wE(r) ? r + "" : r;
        }
        if (typeof e != "string") return e === 0 ? e : +e;
        e = YP(e);
        var t = $P.test(e);
        return t || kP.test(e) ? ZP(e.slice(2), t ? 2 : 8) : zP.test(e) ? FE : +e;
    }
    GE.exports = JP;
});
var UE = s((Zj, VE)=>{
    var e0 = Ut(), XE = 1 / 0, r0 = 17976931348623157e292;
    function t0(e) {
        if (!e) return e === 0 ? e : 0;
        if (e = e0(e), e === XE || e === -XE) {
            var r = e < 0 ? -1 : 1;
            return r * r0;
        }
        return e === e ? e : 0;
    }
    VE.exports = t0;
});
var ua = s((Jj, BE)=>{
    var n0 = UE();
    function i0(e) {
        var r = n0(e), t = r % 1;
        return r === r ? t ? r - t : r : 0;
    }
    BE.exports = i0;
});
var WE = s((eW, jE)=>{
    var a0 = sa(), o0 = me(), s0 = ua(), u0 = Math.max;
    function c0(e, r, t) {
        var n = e == null ? 0 : e.length;
        if (!n) return -1;
        var i = t == null ? 0 : s0(t);
        return i < 0 && (i = u0(n + i, 0)), a0(e, o0(r, 3), i);
    }
    jE.exports = c0;
});
var ca = s((rW, HE)=>{
    var l0 = oa(), f0 = WE(), d0 = l0(f0);
    HE.exports = d0;
});
var jt = s((z)=>{
    "use strict";
    var E0 = ne().default;
    Object.defineProperty(z, "__esModule", {
        value: !0
    });
    z.withBrowser = z.TRANSFORM_STYLE_PREFIXED = z.TRANSFORM_PREFIXED = z.IS_BROWSER_ENV = z.FLEX_PREFIXED = z.ELEMENT_MATCHES = void 0;
    var p0 = E0(ca()), YE = "undefined" < "u";
    z.IS_BROWSER_ENV = YE;
    var Bt = (e, r)=>YE ? e() : r;
    z.withBrowser = Bt;
    var _0 = Bt(()=>(0, p0.default)([
            "matches",
            "matchesSelector",
            "mozMatchesSelector",
            "msMatchesSelector",
            "oMatchesSelector",
            "webkitMatchesSelector"
        ], (e)=>e in Element.prototype));
    z.ELEMENT_MATCHES = _0;
    var g0 = Bt(()=>{
        let e = document.createElement("i"), r = [
            "flex",
            "-webkit-flex",
            "-ms-flexbox",
            "-moz-box",
            "-webkit-box"
        ], t = "";
        try {
            let { length: n } = r;
            for(let i = 0; i < n; i++){
                let a = r[i];
                if (e.style.display = a, e.style.display === a) return a;
            }
            return t;
        } catch  {
            return t;
        }
    }, "flex");
    z.FLEX_PREFIXED = g0;
    var QE = Bt(()=>{
        let e = document.createElement("i");
        if (e.style.transform == null) {
            let r = [
                "Webkit",
                "Moz",
                "ms"
            ], t = "Transform", { length: n } = r;
            for(let i = 0; i < n; i++){
                let a = r[i] + t;
                if (e.style[a] !== void 0) return a;
            }
        }
        return "transform";
    }, "transform");
    z.TRANSFORM_PREFIXED = QE;
    var KE = QE.split("transform")[0], v0 = KE ? KE + "TransformStyle" : "transformStyle";
    z.TRANSFORM_STYLE_PREFIXED = v0;
});
var la = s((nW, JE)=>{
    var I0 = 4, T0 = 0.001, O0 = 1e-7, h0 = 10, Br = 11, Wt = 1 / (Br - 1), y0 = typeof Float32Array == "function";
    function zE(e, r) {
        return 1 - 3 * r + 3 * e;
    }
    function $E(e, r) {
        return 3 * r - 6 * e;
    }
    function kE(e) {
        return 3 * e;
    }
    function Ht(e, r, t) {
        return ((zE(r, t) * e + $E(r, t)) * e + kE(r)) * e;
    }
    function ZE(e, r, t) {
        return 3 * zE(r, t) * e * e + 2 * $E(r, t) * e + kE(r);
    }
    function S0(e, r, t, n, i) {
        var a, o, u = 0;
        do o = r + (t - r) / 2, a = Ht(o, n, i) - e, a > 0 ? t = o : r = o;
        while (Math.abs(a) > O0 && ++u < h0);
        return o;
    }
    function A0(e, r, t, n) {
        for(var i = 0; i < I0; ++i){
            var a = ZE(r, t, n);
            if (a === 0) return r;
            var o = Ht(r, t, n) - e;
            r -= o / a;
        }
        return r;
    }
    JE.exports = function(r, t, n, i) {
        if (!(0 <= r && r <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
        var a = y0 ? new Float32Array(Br) : new Array(Br);
        if (r !== t || n !== i) for(var o = 0; o < Br; ++o)a[o] = Ht(o * Wt, r, n);
        function u(c) {
            for(var l = 0, d = 1, E = Br - 1; d !== E && a[d] <= c; ++d)l += Wt;
            --d;
            var p = (c - a[d]) / (a[d + 1] - a[d]), g = l + p * Wt, v = ZE(g, r, n);
            return v >= T0 ? A0(c, g, r, n) : v === 0 ? g : S0(c, l, l + Wt, r, n);
        }
        return function(l) {
            return r === t && n === i ? l : l === 0 ? 0 : l === 1 ? 1 : Ht(u(l), t, i);
        };
    };
});
var fa = s((b)=>{
    "use strict";
    var R0 = ne().default;
    Object.defineProperty(b, "__esModule", {
        value: !0
    });
    b.bounce = sL;
    b.bouncePast = uL;
    b.easeOut = b.easeInOut = b.easeIn = b.ease = void 0;
    b.inBack = Z0;
    b.inCirc = Q0;
    b.inCubic = D0;
    b.inElastic = rL;
    b.inExpo = H0;
    b.inOutBack = eL;
    b.inOutCirc = $0;
    b.inOutCubic = x0;
    b.inOutElastic = nL;
    b.inOutExpo = Y0;
    b.inOutQuad = L0;
    b.inOutQuart = G0;
    b.inOutQuint = U0;
    b.inOutSine = W0;
    b.inQuad = q0;
    b.inQuart = w0;
    b.inQuint = X0;
    b.inSine = B0;
    b.outBack = J0;
    b.outBounce = k0;
    b.outCirc = z0;
    b.outCubic = M0;
    b.outElastic = tL;
    b.outExpo = K0;
    b.outQuad = P0;
    b.outQuart = F0;
    b.outQuint = V0;
    b.outSine = j0;
    b.swingFrom = aL;
    b.swingFromTo = iL;
    b.swingTo = oL;
    var Kt = R0(la()), ye = 1.70158, C0 = (0, Kt.default)(0.25, 0.1, 0.25, 1);
    b.ease = C0;
    var N0 = (0, Kt.default)(0.42, 0, 1, 1);
    b.easeIn = N0;
    var b0 = (0, Kt.default)(0, 0, 0.58, 1);
    b.easeOut = b0;
    var m0 = (0, Kt.default)(0.42, 0, 0.58, 1);
    b.easeInOut = m0;
    function q0(e) {
        return Math.pow(e, 2);
    }
    function P0(e) {
        return -(Math.pow(e - 1, 2) - 1);
    }
    function L0(e) {
        return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
    }
    function D0(e) {
        return Math.pow(e, 3);
    }
    function M0(e) {
        return Math.pow(e - 1, 3) + 1;
    }
    function x0(e) {
        return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 3) : 0.5 * (Math.pow(e - 2, 3) + 2);
    }
    function w0(e) {
        return Math.pow(e, 4);
    }
    function F0(e) {
        return -(Math.pow(e - 1, 4) - 1);
    }
    function G0(e) {
        return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 4) : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
    }
    function X0(e) {
        return Math.pow(e, 5);
    }
    function V0(e) {
        return Math.pow(e - 1, 5) + 1;
    }
    function U0(e) {
        return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 5) : 0.5 * (Math.pow(e - 2, 5) + 2);
    }
    function B0(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1;
    }
    function j0(e) {
        return Math.sin(e * (Math.PI / 2));
    }
    function W0(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
    }
    function H0(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
    }
    function K0(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
    }
    function Y0(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= 0.5) < 1 ? 0.5 * Math.pow(2, 10 * (e - 1)) : 0.5 * (-Math.pow(2, -10 * --e) + 2);
    }
    function Q0(e) {
        return -(Math.sqrt(1 - e * e) - 1);
    }
    function z0(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
    }
    function $0(e) {
        return (e /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
    }
    function k0(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function Z0(e) {
        let r = ye;
        return e * e * ((r + 1) * e - r);
    }
    function J0(e) {
        let r = ye;
        return (e -= 1) * e * ((r + 1) * e + r) + 1;
    }
    function eL(e) {
        let r = ye;
        return (e /= 0.5) < 1 ? 0.5 * (e * e * (((r *= 1.525) + 1) * e - r)) : 0.5 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2);
    }
    function rL(e) {
        let r = ye, t = 0, n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (t || (t = 0.3), n < 1 ? (n = 1, r = t / 4) : r = t / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - r) * (2 * Math.PI) / t)));
    }
    function tL(e) {
        let r = ye, t = 0, n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (t || (t = 0.3), n < 1 ? (n = 1, r = t / 4) : r = t / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - r) * (2 * Math.PI) / t) + 1);
    }
    function nL(e) {
        let r = ye, t = 0, n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (t || (t = 0.3 * 1.5), n < 1 ? (n = 1, r = t / 4) : r = t / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -0.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - r) * (2 * Math.PI) / t)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - r) * (2 * Math.PI) / t) * 0.5 + 1);
    }
    function iL(e) {
        let r = ye;
        return (e /= 0.5) < 1 ? 0.5 * (e * e * (((r *= 1.525) + 1) * e - r)) : 0.5 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2);
    }
    function aL(e) {
        let r = ye;
        return e * e * ((r + 1) * e - r);
    }
    function oL(e) {
        let r = ye;
        return (e -= 1) * e * ((r + 1) * e + r) + 1;
    }
    function sL(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function uL(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
    }
});
var Ea = s((jr)=>{
    "use strict";
    var cL = ne().default, lL = Me().default;
    Object.defineProperty(jr, "__esModule", {
        value: !0
    });
    jr.applyEasing = EL;
    jr.createBezierEasing = dL;
    jr.optimizeFloat = da;
    var ep = lL(fa()), fL = cL(la());
    function da(e, r = 5, t = 10) {
        let n = Math.pow(t, r), i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0;
    }
    function dL(e) {
        return (0, fL.default)(...e);
    }
    function EL(e, r, t) {
        return r === 0 ? 0 : r === 1 ? 1 : da(t ? r > 0 ? t(r) : r : r > 0 && e && ep[e] ? ep[e](r) : r);
    }
});
var ip = s((cr)=>{
    "use strict";
    Object.defineProperty(cr, "__esModule", {
        value: !0
    });
    cr.createElementState = np;
    cr.ixElements = void 0;
    cr.mergeActionState = pa;
    var Yt = er(), tp = Z(), { HTML_ELEMENT: oW, PLAIN_OBJECT: pL, ABSTRACT_NODE: sW, CONFIG_X_VALUE: _L, CONFIG_Y_VALUE: gL, CONFIG_Z_VALUE: vL, CONFIG_VALUE: IL, CONFIG_X_UNIT: TL, CONFIG_Y_UNIT: OL, CONFIG_Z_UNIT: hL, CONFIG_UNIT: yL } = tp.IX2EngineConstants, { IX2_SESSION_STOPPED: SL, IX2_INSTANCE_ADDED: AL, IX2_ELEMENT_STATE_CHANGED: RL } = tp.IX2EngineActionTypes, rp = {}, CL = "refState", NL = (e = rp, r = {})=>{
        switch(r.type){
            case SL:
                return rp;
            case AL:
                {
                    let { elementId: t, element: n, origin: i, actionItem: a, refType: o } = r.payload, { actionTypeId: u } = a, c = e;
                    return (0, Yt.getIn)(c, [
                        t,
                        n
                    ]) !== n && (c = np(c, n, o, t, a)), pa(c, t, u, i, a);
                }
            case RL:
                {
                    let { elementId: t, actionTypeId: n, current: i, actionItem: a } = r.payload;
                    return pa(e, t, n, i, a);
                }
            default:
                return e;
        }
    };
    cr.ixElements = NL;
    function np(e, r, t, n, i) {
        let a = t === pL ? (0, Yt.getIn)(i, [
            "config",
            "target",
            "objectId"
        ]) : null;
        return (0, Yt.mergeIn)(e, [
            n
        ], {
            id: n,
            ref: r,
            refId: a,
            refType: t
        });
    }
    function pa(e, r, t, n, i) {
        let a = mL(i), o = [
            r,
            CL,
            t
        ];
        return (0, Yt.mergeIn)(e, o, n, a);
    }
    var bL = [
        [
            _L,
            TL
        ],
        [
            gL,
            OL
        ],
        [
            vL,
            hL
        ],
        [
            IL,
            yL
        ]
    ];
    function mL(e) {
        let { config: r } = e;
        return bL.reduce((t, n)=>{
            let i = n[0], a = n[1], o = r[i], u = r[a];
            return o != null && u != null && (t[a] = u), t;
        }, {});
    }
});
var ap = s((K)=>{
    "use strict";
    Object.defineProperty(K, "__esModule", {
        value: !0
    });
    K.renderPlugin = K.getPluginOrigin = K.getPluginDuration = K.getPluginDestination = K.getPluginConfig = K.createPluginInstance = K.clearPlugin = void 0;
    var qL = (e)=>e.value;
    K.getPluginConfig = qL;
    var PL = (e, r)=>{
        if (r.config.duration !== "auto") return null;
        let t = parseFloat(e.getAttribute("data-duration"));
        return t > 0 ? t * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    K.getPluginDuration = PL;
    var LL = (e)=>e || {
            value: 0
        };
    K.getPluginOrigin = LL;
    var DL = (e)=>({
            value: e.value
        });
    K.getPluginDestination = DL;
    var ML = (e)=>{
        let r = window.Webflow.require("lottie").createInstance(e);
        return r.stop(), r.setSubframe(!0), r;
    };
    K.createPluginInstance = ML;
    var xL = (e, r, t)=>{
        if (!e) return;
        let n = r[t.actionTypeId].value / 100;
        e.goToFrame(e.frames * n);
    };
    K.renderPlugin = xL;
    var wL = (e)=>{
        window.Webflow.require("lottie").createInstance(e).stop();
    };
    K.clearPlugin = wL;
});
var sp = s((Y)=>{
    "use strict";
    Object.defineProperty(Y, "__esModule", {
        value: !0
    });
    Y.renderPlugin = Y.getPluginOrigin = Y.getPluginDuration = Y.getPluginDestination = Y.getPluginConfig = Y.createPluginInstance = Y.clearPlugin = void 0;
    var FL = (e)=>document.querySelector(`[data-w-id="${e}"]`), GL = ()=>window.Webflow.require("spline"), XL = (e, r)=>e.filter((t)=>!r.includes(t)), VL = (e, r)=>e.value[r];
    Y.getPluginConfig = VL;
    var UL = ()=>null;
    Y.getPluginDuration = UL;
    var op = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1
    }), BL = (e, r)=>{
        let t = r.config.value, n = Object.keys(t);
        if (e) {
            let a = Object.keys(e), o = XL(n, a);
            return o.length ? o.reduce((c, l)=>(c[l] = op[l], c), e) : e;
        }
        return n.reduce((a, o)=>(a[o] = op[o], a), {});
    };
    Y.getPluginOrigin = BL;
    var jL = (e)=>e.value;
    Y.getPluginDestination = jL;
    var WL = (e, r)=>{
        var t, n;
        let i = r == null || (t = r.config) === null || t === void 0 || (n = t.target) === null || n === void 0 ? void 0 : n.pluginElement;
        return i ? FL(i) : null;
    };
    Y.createPluginInstance = WL;
    var HL = (e, r, t)=>{
        let n = GL().getInstance(e), i = t.config.target.objectId;
        if (!n || !i) return;
        let a = n.spline.findObjectById(i);
        if (!a) return;
        let { PLUGIN_SPLINE: o } = r;
        o.positionX != null && (a.position.x = o.positionX), o.positionY != null && (a.position.y = o.positionY), o.positionZ != null && (a.position.z = o.positionZ), o.rotationX != null && (a.rotation.x = o.rotationX), o.rotationY != null && (a.rotation.y = o.rotationY), o.rotationZ != null && (a.rotation.z = o.rotationZ), o.scaleX != null && (a.scale.x = o.scaleX), o.scaleY != null && (a.scale.y = o.scaleY), o.scaleZ != null && (a.scale.z = o.scaleZ);
    };
    Y.renderPlugin = HL;
    var KL = ()=>null;
    Y.clearPlugin = KL;
});
var fp = s((Qt)=>{
    "use strict";
    var lp = Me().default, YL = ne().default;
    Object.defineProperty(Qt, "__esModule", {
        value: !0
    });
    Qt.pluginMethodMap = void 0;
    var up = YL(Je()), cp = Z(), QL = lp(ap()), zL = lp(sp()), $L = new Map([
        [
            cp.ActionTypeConsts.PLUGIN_LOTTIE,
            (0, up.default)({}, QL)
        ],
        [
            cp.ActionTypeConsts.PLUGIN_SPLINE,
            (0, up.default)({}, zL)
        ]
    ]);
    Qt.pluginMethodMap = $L;
});
var _a = s((j)=>{
    "use strict";
    Object.defineProperty(j, "__esModule", {
        value: !0
    });
    j.getPluginOrigin = j.getPluginDuration = j.getPluginDestination = j.getPluginConfig = j.createPluginInstance = j.clearPlugin = void 0;
    j.isPluginType = ZL;
    j.renderPlugin = void 0;
    var kL = jt(), dp = fp();
    function ZL(e) {
        return dp.pluginMethodMap.has(e);
    }
    var Ve = (e)=>(r)=>{
            if (!kL.IS_BROWSER_ENV) return ()=>null;
            let t = dp.pluginMethodMap.get(r);
            if (!t) throw new Error(`IX2 no plugin configured for: ${r}`);
            let n = t[e];
            if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
            return n;
        }, JL = Ve("getPluginConfig");
    j.getPluginConfig = JL;
    var eD = Ve("getPluginOrigin");
    j.getPluginOrigin = eD;
    var rD = Ve("getPluginDuration");
    j.getPluginDuration = rD;
    var tD = Ve("getPluginDestination");
    j.getPluginDestination = tD;
    var nD = Ve("createPluginInstance");
    j.createPluginInstance = nD;
    var iD = Ve("renderPlugin");
    j.renderPlugin = iD;
    var aD = Ve("clearPlugin");
    j.clearPlugin = aD;
});
var pp = s((EW, Ep)=>{
    function oD(e, r) {
        return e == null || e !== e ? r : e;
    }
    Ep.exports = oD;
});
var gp = s((pW, _p)=>{
    function sD(e, r, t, n) {
        var i = -1, a = e == null ? 0 : e.length;
        for(n && a && (t = e[++i]); ++i < a;)t = r(t, e[i], i, e);
        return t;
    }
    _p.exports = sD;
});
var Ip = s((_W, vp)=>{
    function uD(e) {
        return function(r, t, n) {
            for(var i = -1, a = Object(r), o = n(r), u = o.length; u--;){
                var c = o[e ? u : ++i];
                if (t(a[c], c, a) === !1) break;
            }
            return r;
        };
    }
    vp.exports = uD;
});
var Op = s((gW, Tp)=>{
    var cD = Ip(), lD = cD();
    Tp.exports = lD;
});
var ga = s((vW, hp)=>{
    var fD = Op(), dD = Xr();
    function ED(e, r) {
        return e && fD(e, r, dD);
    }
    hp.exports = ED;
});
var Sp = s((IW, yp)=>{
    var pD = Ge();
    function _D(e, r) {
        return function(t, n) {
            if (t == null) return t;
            if (!pD(t)) return e(t, n);
            for(var i = t.length, a = r ? i : -1, o = Object(t); (r ? a-- : ++a < i) && n(o[a], a, o) !== !1;);
            return t;
        };
    }
    yp.exports = _D;
});
var va = s((TW, Ap)=>{
    var gD = ga(), vD = Sp(), ID = vD(gD);
    Ap.exports = ID;
});
var Cp = s((OW, Rp)=>{
    function TD(e, r, t, n, i) {
        return i(e, function(a, o, u) {
            t = n ? (n = !1, a) : r(t, a, o, u);
        }), t;
    }
    Rp.exports = TD;
});
var bp = s((hW, Np)=>{
    var OD = gp(), hD = va(), yD = me(), SD = Cp(), AD = H();
    function RD(e, r, t) {
        var n = AD(e) ? OD : SD, i = arguments.length < 3;
        return n(e, yD(r, 4), t, i, hD);
    }
    Np.exports = RD;
});
var qp = s((yW, mp)=>{
    var CD = sa(), ND = me(), bD = ua(), mD = Math.max, qD = Math.min;
    function PD(e, r, t) {
        var n = e == null ? 0 : e.length;
        if (!n) return -1;
        var i = n - 1;
        return t !== void 0 && (i = bD(t), i = t < 0 ? mD(n + i, 0) : qD(i, n - 1)), CD(e, ND(r, 3), i, !0);
    }
    mp.exports = PD;
});
var Lp = s((SW, Pp)=>{
    var LD = oa(), DD = qp(), MD = LD(DD);
    Pp.exports = MD;
});
var Mp = s((zt)=>{
    "use strict";
    Object.defineProperty(zt, "__esModule", {
        value: !0
    });
    zt.default = void 0;
    var xD = Object.prototype.hasOwnProperty;
    function Dp(e, r) {
        return e === r ? e !== 0 || r !== 0 || 1 / e === 1 / r : e !== e && r !== r;
    }
    function wD(e, r) {
        if (Dp(e, r)) return !0;
        if (typeof e != "object" || e === null || typeof r != "object" || r === null) return !1;
        let t = Object.keys(e), n = Object.keys(r);
        if (t.length !== n.length) return !1;
        for(let i = 0; i < t.length; i++)if (!xD.call(r, t[i]) || !Dp(e[t[i]], r[t[i]])) return !1;
        return !0;
    }
    var FD = wD;
    zt.default = FD;
});
var Jp = s((M)=>{
    "use strict";
    var Jt = ne().default;
    Object.defineProperty(M, "__esModule", {
        value: !0
    });
    M.cleanupHTMLElement = xM;
    M.clearAllStyles = MM;
    M.clearObjectCache = rM;
    M.getActionListProgress = FM;
    M.getAffectedElements = Aa;
    M.getComputedStyle = cM;
    M.getDestinationValues = gM;
    M.getElementId = aM;
    M.getInstanceId = nM;
    M.getInstanceOrigin = dM;
    M.getItemConfigByKey = void 0;
    M.getMaxDurationItemIndex = Zp;
    M.getNamespacedParameterId = VM;
    M.getRenderType = zp;
    M.getStyleProp = vM;
    M.mediaQueriesEqual = BM;
    M.observeStore = uM;
    M.reduceListToGroup = GM;
    M.reifyState = oM;
    M.renderHTMLElement = IM;
    Object.defineProperty(M, "shallowEqual", {
        enumerable: !0,
        get: function() {
            return Bp.default;
        }
    });
    M.shouldAllowMediaQuery = UM;
    M.shouldNamespaceEventParameter = XM;
    M.stringifyTarget = jM;
    var qe = Jt(pp()), Oa = Jt(bp()), Ta = Jt(Lp()), xp = er(), Ue = Z(), Bp = Jt(Mp()), GD = Ea(), ve = _a(), $ = jt(), { BACKGROUND: XD, TRANSFORM: VD, TRANSLATE_3D: UD, SCALE_3D: BD, ROTATE_X: jD, ROTATE_Y: WD, ROTATE_Z: HD, SKEW: KD, PRESERVE_3D: YD, FLEX: QD, OPACITY: kt, FILTER: Wr, FONT_VARIATION_SETTINGS: Hr, WIDTH: _e, HEIGHT: ge, BACKGROUND_COLOR: jp, BORDER_COLOR: zD, COLOR: $D, CHILDREN: wp, IMMEDIATE_CHILDREN: kD, SIBLINGS: Fp, PARENT: ZD, DISPLAY: Zt, WILL_CHANGE: lr, AUTO: Pe, COMMA_DELIMITER: Kr, COLON_DELIMITER: JD, BAR_DELIMITER: Ia, RENDER_TRANSFORM: Wp, RENDER_GENERAL: ha, RENDER_STYLE: ya, RENDER_PLUGIN: Hp } = Ue.IX2EngineConstants, { TRANSFORM_MOVE: fr, TRANSFORM_SCALE: dr, TRANSFORM_ROTATE: Er, TRANSFORM_SKEW: Yr, STYLE_OPACITY: Kp, STYLE_FILTER: Qr, STYLE_FONT_VARIATION: zr, STYLE_SIZE: pr, STYLE_BACKGROUND_COLOR: _r, STYLE_BORDER: gr, STYLE_TEXT_COLOR: vr, GENERAL_DISPLAY: en, OBJECT_VALUE: eM } = Ue.ActionTypeConsts, Yp = (e)=>e.trim(), Sa = Object.freeze({
        [_r]: jp,
        [gr]: zD,
        [vr]: $D
    }), Qp = Object.freeze({
        [$.TRANSFORM_PREFIXED]: VD,
        [jp]: XD,
        [kt]: kt,
        [Wr]: Wr,
        [_e]: _e,
        [ge]: ge,
        [Hr]: Hr
    }), $t = new Map();
    function rM() {
        $t.clear();
    }
    var tM = 1;
    function nM() {
        return "i" + tM++;
    }
    var iM = 1;
    function aM(e, r) {
        for(let t in e){
            let n = e[t];
            if (n && n.ref === r) return n.id;
        }
        return "e" + iM++;
    }
    function oM({ events: e, actionLists: r, site: t } = {}) {
        let n = (0, Oa.default)(e, (o, u)=>{
            let { eventTypeId: c } = u;
            return o[c] || (o[c] = {}), o[c][u.id] = u, o;
        }, {}), i = t && t.mediaQueries, a = [];
        return i ? a = i.map((o)=>o.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
            ixData: {
                events: e,
                actionLists: r,
                eventTypeMap: n,
                mediaQueries: i,
                mediaQueryKeys: a
            }
        };
    }
    var sM = (e, r)=>e === r;
    function uM({ store: e, select: r, onChange: t, comparator: n = sM }) {
        let { getState: i, subscribe: a } = e, o = a(c), u = r(i());
        function c() {
            let l = r(i());
            if (l == null) {
                o();
                return;
            }
            n(l, u) || (u = l, t(u, e));
        }
        return o;
    }
    function Gp(e) {
        let r = typeof e;
        if (r === "string") return {
            id: e
        };
        if (e != null && r === "object") {
            let { id: t, objectId: n, selector: i, selectorGuids: a, appliesTo: o, useEventTarget: u } = e;
            return {
                id: t,
                objectId: n,
                selector: i,
                selectorGuids: a,
                appliesTo: o,
                useEventTarget: u
            };
        }
        return {};
    }
    function Aa({ config: e, event: r, eventTarget: t, elementRoot: n, elementApi: i }) {
        var a, o, u;
        if (!i) throw new Error("IX2 missing elementApi");
        let { targets: c } = e;
        if (Array.isArray(c) && c.length > 0) return c.reduce((V, le)=>V.concat(Aa({
                config: {
                    target: le
                },
                event: r,
                eventTarget: t,
                elementRoot: n,
                elementApi: i
            })), []);
        let { getValidDocument: l, getQuerySelector: d, queryDocument: E, getChildElements: p, getSiblingElements: g, matchSelector: v, elementContains: _, isSiblingNode: T } = i, { target: I } = e;
        if (!I) return [];
        let { id: h, objectId: y, selector: A, selectorGuids: R, appliesTo: O, useEventTarget: S } = Gp(I);
        if (y) return [
            $t.has(y) ? $t.get(y) : $t.set(y, {}).get(y)
        ];
        if (O === Ue.EventAppliesTo.PAGE) {
            let V = l(h);
            return V ? [
                V
            ] : [];
        }
        let N = ((a = r == null || (o = r.action) === null || o === void 0 || (u = o.config) === null || u === void 0 ? void 0 : u.affectedElements) !== null && a !== void 0 ? a : {})[h || A] || {}, D = !!(N.id || N.selector), P, w, L, Ae = r && d(Gp(r.target));
        if (D ? (P = N.limitAffectedElements, w = Ae, L = d(N)) : w = L = d({
            id: h,
            selector: A,
            selectorGuids: R
        }), r && S) {
            let V = t && (L || S === !0) ? [
                t
            ] : E(Ae);
            if (L) {
                if (S === ZD) return E(L).filter((le)=>V.some((fe)=>_(le, fe)));
                if (S === wp) return E(L).filter((le)=>V.some((fe)=>_(fe, le)));
                if (S === Fp) return E(L).filter((le)=>V.some((fe)=>T(fe, le)));
            }
            return V;
        }
        return w == null || L == null ? [] : $.IS_BROWSER_ENV && n ? E(L).filter((V)=>n.contains(V)) : P === wp ? E(w, L) : P === kD ? p(E(w)).filter(v(L)) : P === Fp ? g(E(w)).filter(v(L)) : E(L);
    }
    function cM({ element: e, actionItem: r }) {
        if (!$.IS_BROWSER_ENV) return {};
        let { actionTypeId: t } = r;
        switch(t){
            case pr:
            case _r:
            case gr:
            case vr:
            case en:
                return window.getComputedStyle(e);
            default:
                return {};
        }
    }
    var Xp = /px/, lM = (e, r)=>r.reduce((t, n)=>(t[n.type] == null && (t[n.type] = TM[n.type]), t), e || {}), fM = (e, r)=>r.reduce((t, n)=>(t[n.type] == null && (t[n.type] = OM[n.type] || n.defaultValue || 0), t), e || {});
    function dM(e, r = {}, t = {}, n, i) {
        let { getStyle: a } = i, { actionTypeId: o } = n;
        if ((0, ve.isPluginType)(o)) return (0, ve.getPluginOrigin)(o)(r[o], n);
        switch(n.actionTypeId){
            case fr:
            case dr:
            case Er:
            case Yr:
                return r[n.actionTypeId] || Ra[n.actionTypeId];
            case Qr:
                return lM(r[n.actionTypeId], n.config.filters);
            case zr:
                return fM(r[n.actionTypeId], n.config.fontVariations);
            case Kp:
                return {
                    value: (0, qe.default)(parseFloat(a(e, kt)), 1)
                };
            case pr:
                {
                    let u = a(e, _e), c = a(e, ge), l, d;
                    return n.config.widthUnit === Pe ? l = Xp.test(u) ? parseFloat(u) : parseFloat(t.width) : l = (0, qe.default)(parseFloat(u), parseFloat(t.width)), n.config.heightUnit === Pe ? d = Xp.test(c) ? parseFloat(c) : parseFloat(t.height) : d = (0, qe.default)(parseFloat(c), parseFloat(t.height)), {
                        widthValue: l,
                        heightValue: d
                    };
                }
            case _r:
            case gr:
            case vr:
                return PM({
                    element: e,
                    actionTypeId: n.actionTypeId,
                    computedStyle: t,
                    getStyle: a
                });
            case en:
                return {
                    value: (0, qe.default)(a(e, Zt), t.display)
                };
            case eM:
                return r[n.actionTypeId] || {
                    value: 0
                };
            default:
                return;
        }
    }
    var EM = (e, r)=>(r && (e[r.type] = r.value || 0), e), pM = (e, r)=>(r && (e[r.type] = r.value || 0), e), _M = (e, r, t)=>{
        if ((0, ve.isPluginType)(e)) return (0, ve.getPluginConfig)(e)(t, r);
        switch(e){
            case Qr:
                {
                    let n = (0, Ta.default)(t.filters, ({ type: i })=>i === r);
                    return n ? n.value : 0;
                }
            case zr:
                {
                    let n = (0, Ta.default)(t.fontVariations, ({ type: i })=>i === r);
                    return n ? n.value : 0;
                }
            default:
                return t[r];
        }
    };
    M.getItemConfigByKey = _M;
    function gM({ element: e, actionItem: r, elementApi: t }) {
        if ((0, ve.isPluginType)(r.actionTypeId)) return (0, ve.getPluginDestination)(r.actionTypeId)(r.config);
        switch(r.actionTypeId){
            case fr:
            case dr:
            case Er:
            case Yr:
                {
                    let { xValue: n, yValue: i, zValue: a } = r.config;
                    return {
                        xValue: n,
                        yValue: i,
                        zValue: a
                    };
                }
            case pr:
                {
                    let { getStyle: n, setStyle: i, getProperty: a } = t, { widthUnit: o, heightUnit: u } = r.config, { widthValue: c, heightValue: l } = r.config;
                    if (!$.IS_BROWSER_ENV) return {
                        widthValue: c,
                        heightValue: l
                    };
                    if (o === Pe) {
                        let d = n(e, _e);
                        i(e, _e, ""), c = a(e, "offsetWidth"), i(e, _e, d);
                    }
                    if (u === Pe) {
                        let d = n(e, ge);
                        i(e, ge, ""), l = a(e, "offsetHeight"), i(e, ge, d);
                    }
                    return {
                        widthValue: c,
                        heightValue: l
                    };
                }
            case _r:
            case gr:
            case vr:
                {
                    let { rValue: n, gValue: i, bValue: a, aValue: o } = r.config;
                    return {
                        rValue: n,
                        gValue: i,
                        bValue: a,
                        aValue: o
                    };
                }
            case Qr:
                return r.config.filters.reduce(EM, {});
            case zr:
                return r.config.fontVariations.reduce(pM, {});
            default:
                {
                    let { value: n } = r.config;
                    return {
                        value: n
                    };
                }
        }
    }
    function zp(e) {
        if (/^TRANSFORM_/.test(e)) return Wp;
        if (/^STYLE_/.test(e)) return ya;
        if (/^GENERAL_/.test(e)) return ha;
        if (/^PLUGIN_/.test(e)) return Hp;
    }
    function vM(e, r) {
        return e === ya ? r.replace("STYLE_", "").toLowerCase() : null;
    }
    function IM(e, r, t, n, i, a, o, u, c) {
        switch(u){
            case Wp:
                return SM(e, r, t, i, o);
            case ya:
                return LM(e, r, t, i, a, o);
            case ha:
                return DM(e, i, o);
            case Hp:
                {
                    let { actionTypeId: l } = i;
                    if ((0, ve.isPluginType)(l)) return (0, ve.renderPlugin)(l)(c, r, i);
                }
        }
    }
    var Ra = {
        [fr]: Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0
        }),
        [dr]: Object.freeze({
            xValue: 1,
            yValue: 1,
            zValue: 1
        }),
        [Er]: Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0
        }),
        [Yr]: Object.freeze({
            xValue: 0,
            yValue: 0
        })
    }, TM = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100
    }), OM = Object.freeze({
        wght: 0,
        opsz: 0,
        wdth: 0,
        slnt: 0
    }), hM = (e, r)=>{
        let t = (0, Ta.default)(r.filters, ({ type: n })=>n === e);
        if (t && t.unit) return t.unit;
        switch(e){
            case "blur":
                return "px";
            case "hue-rotate":
                return "deg";
            default:
                return "%";
        }
    }, yM = Object.keys(Ra);
    function SM(e, r, t, n, i) {
        let a = yM.map((u)=>{
            let c = Ra[u], { xValue: l = c.xValue, yValue: d = c.yValue, zValue: E = c.zValue, xUnit: p = "", yUnit: g = "", zUnit: v = "" } = r[u] || {};
            switch(u){
                case fr:
                    return `${UD}(${l}${p}, ${d}${g}, ${E}${v})`;
                case dr:
                    return `${BD}(${l}${p}, ${d}${g}, ${E}${v})`;
                case Er:
                    return `${jD}(${l}${p}) ${WD}(${d}${g}) ${HD}(${E}${v})`;
                case Yr:
                    return `${KD}(${l}${p}, ${d}${g})`;
                default:
                    return "";
            }
        }).join(" "), { setStyle: o } = i;
        Be(e, $.TRANSFORM_PREFIXED, i), o(e, $.TRANSFORM_PREFIXED, a), CM(n, t) && o(e, $.TRANSFORM_STYLE_PREFIXED, YD);
    }
    function AM(e, r, t, n) {
        let i = (0, Oa.default)(r, (o, u, c)=>`${o} ${c}(${u}${hM(c, t)})`, ""), { setStyle: a } = n;
        Be(e, Wr, n), a(e, Wr, i);
    }
    function RM(e, r, t, n) {
        let i = (0, Oa.default)(r, (o, u, c)=>(o.push(`"${c}" ${u}`), o), []).join(", "), { setStyle: a } = n;
        Be(e, Hr, n), a(e, Hr, i);
    }
    function CM({ actionTypeId: e }, { xValue: r, yValue: t, zValue: n }) {
        return e === fr && n !== void 0 || e === dr && n !== void 0 || e === Er && (r !== void 0 || t !== void 0);
    }
    var NM = "\\(([^)]+)\\)", bM = /^rgb/, mM = RegExp(`rgba?${NM}`);
    function qM(e, r) {
        let t = e.exec(r);
        return t ? t[1] : "";
    }
    function PM({ element: e, actionTypeId: r, computedStyle: t, getStyle: n }) {
        let i = Sa[r], a = n(e, i), o = bM.test(a) ? a : t[i], u = qM(mM, o).split(Kr);
        return {
            rValue: (0, qe.default)(parseInt(u[0], 10), 255),
            gValue: (0, qe.default)(parseInt(u[1], 10), 255),
            bValue: (0, qe.default)(parseInt(u[2], 10), 255),
            aValue: (0, qe.default)(parseFloat(u[3]), 1)
        };
    }
    function LM(e, r, t, n, i, a) {
        let { setStyle: o } = a;
        switch(n.actionTypeId){
            case pr:
                {
                    let { widthUnit: u = "", heightUnit: c = "" } = n.config, { widthValue: l, heightValue: d } = t;
                    l !== void 0 && (u === Pe && (u = "px"), Be(e, _e, a), o(e, _e, l + u)), d !== void 0 && (c === Pe && (c = "px"), Be(e, ge, a), o(e, ge, d + c));
                    break;
                }
            case Qr:
                {
                    AM(e, t, n.config, a);
                    break;
                }
            case zr:
                {
                    RM(e, t, n.config, a);
                    break;
                }
            case _r:
            case gr:
            case vr:
                {
                    let u = Sa[n.actionTypeId], c = Math.round(t.rValue), l = Math.round(t.gValue), d = Math.round(t.bValue), E = t.aValue;
                    Be(e, u, a), o(e, u, E >= 1 ? `rgb(${c},${l},${d})` : `rgba(${c},${l},${d},${E})`);
                    break;
                }
            default:
                {
                    let { unit: u = "" } = n.config;
                    Be(e, i, a), o(e, i, t.value + u);
                    break;
                }
        }
    }
    function DM(e, r, t) {
        let { setStyle: n } = t;
        switch(r.actionTypeId){
            case en:
                {
                    let { value: i } = r.config;
                    i === QD && $.IS_BROWSER_ENV ? n(e, Zt, $.FLEX_PREFIXED) : n(e, Zt, i);
                    return;
                }
        }
    }
    function Be(e, r, t) {
        if (!$.IS_BROWSER_ENV) return;
        let n = Qp[r];
        if (!n) return;
        let { getStyle: i, setStyle: a } = t, o = i(e, lr);
        if (!o) {
            a(e, lr, n);
            return;
        }
        let u = o.split(Kr).map(Yp);
        u.indexOf(n) === -1 && a(e, lr, u.concat(n).join(Kr));
    }
    function $p(e, r, t) {
        if (!$.IS_BROWSER_ENV) return;
        let n = Qp[r];
        if (!n) return;
        let { getStyle: i, setStyle: a } = t, o = i(e, lr);
        !o || o.indexOf(n) === -1 || a(e, lr, o.split(Kr).map(Yp).filter((u)=>u !== n).join(Kr));
    }
    function MM({ store: e, elementApi: r }) {
        let { ixData: t } = e.getState(), { events: n = {}, actionLists: i = {} } = t;
        Object.keys(n).forEach((a)=>{
            let o = n[a], { config: u } = o.action, { actionListId: c } = u, l = i[c];
            l && Vp({
                actionList: l,
                event: o,
                elementApi: r
            });
        }), Object.keys(i).forEach((a)=>{
            Vp({
                actionList: i[a],
                elementApi: r
            });
        });
    }
    function Vp({ actionList: e = {}, event: r, elementApi: t }) {
        let { actionItemGroups: n, continuousParameterGroups: i } = e;
        n && n.forEach((a)=>{
            Up({
                actionGroup: a,
                event: r,
                elementApi: t
            });
        }), i && i.forEach((a)=>{
            let { continuousActionGroups: o } = a;
            o.forEach((u)=>{
                Up({
                    actionGroup: u,
                    event: r,
                    elementApi: t
                });
            });
        });
    }
    function Up({ actionGroup: e, event: r, elementApi: t }) {
        let { actionItems: n } = e;
        n.forEach(({ actionTypeId: i, config: a })=>{
            let o;
            (0, ve.isPluginType)(i) ? o = (0, ve.clearPlugin)(i) : o = kp({
                effect: wM,
                actionTypeId: i,
                elementApi: t
            }), Aa({
                config: a,
                event: r,
                elementApi: t
            }).forEach(o);
        });
    }
    function xM(e, r, t) {
        let { setStyle: n, getStyle: i } = t, { actionTypeId: a } = r;
        if (a === pr) {
            let { config: o } = r;
            o.widthUnit === Pe && n(e, _e, ""), o.heightUnit === Pe && n(e, ge, "");
        }
        i(e, lr) && kp({
            effect: $p,
            actionTypeId: a,
            elementApi: t
        })(e);
    }
    var kp = ({ effect: e, actionTypeId: r, elementApi: t })=>(n)=>{
            switch(r){
                case fr:
                case dr:
                case Er:
                case Yr:
                    e(n, $.TRANSFORM_PREFIXED, t);
                    break;
                case Qr:
                    e(n, Wr, t);
                    break;
                case zr:
                    e(n, Hr, t);
                    break;
                case Kp:
                    e(n, kt, t);
                    break;
                case pr:
                    e(n, _e, t), e(n, ge, t);
                    break;
                case _r:
                case gr:
                case vr:
                    e(n, Sa[r], t);
                    break;
                case en:
                    e(n, Zt, t);
                    break;
            }
        };
    function wM(e, r, t) {
        let { setStyle: n } = t;
        $p(e, r, t), n(e, r, ""), r === $.TRANSFORM_PREFIXED && n(e, $.TRANSFORM_STYLE_PREFIXED, "");
    }
    function Zp(e) {
        let r = 0, t = 0;
        return e.forEach((n, i)=>{
            let { config: a } = n, o = a.delay + a.duration;
            o >= r && (r = o, t = i);
        }), t;
    }
    function FM(e, r) {
        let { actionItemGroups: t, useFirstGroupAsInitialState: n } = e, { actionItem: i, verboseTimeElapsed: a = 0 } = r, o = 0, u = 0;
        return t.forEach((c, l)=>{
            if (n && l === 0) return;
            let { actionItems: d } = c, E = d[Zp(d)], { config: p, actionTypeId: g } = E;
            i.id === E.id && (u = o + a);
            let v = zp(g) === ha ? 0 : p.duration;
            o += p.delay + v;
        }), o > 0 ? (0, GD.optimizeFloat)(u / o) : 0;
    }
    function GM({ actionList: e, actionItemId: r, rawData: t }) {
        let { actionItemGroups: n, continuousParameterGroups: i } = e, a = [], o = (u)=>(a.push((0, xp.mergeIn)(u, [
                "config"
            ], {
                delay: 0,
                duration: 0
            })), u.id === r);
        return n && n.some(({ actionItems: u })=>u.some(o)), i && i.some((u)=>{
            let { continuousActionGroups: c } = u;
            return c.some(({ actionItems: l })=>l.some(o));
        }), (0, xp.setIn)(t, [
            "actionLists"
        ], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [
                    {
                        actionItems: a
                    }
                ]
            }
        });
    }
    function XM(e, { basedOn: r }) {
        return e === Ue.EventTypeConsts.SCROLLING_IN_VIEW && (r === Ue.EventBasedOn.ELEMENT || r == null) || e === Ue.EventTypeConsts.MOUSE_MOVE && r === Ue.EventBasedOn.ELEMENT;
    }
    function VM(e, r) {
        return e + JD + r;
    }
    function UM(e, r) {
        return r == null ? !0 : e.indexOf(r) !== -1;
    }
    function BM(e, r) {
        return (0, Bp.default)(e && e.sort(), r && r.sort());
    }
    function jM(e) {
        if (typeof e == "string") return e;
        if (e.pluginElement && e.objectId) return e.pluginElement + Ia + e.objectId;
        let { id: r = "", selector: t = "", useEventTarget: n = "" } = e;
        return r + Ia + t + Ia + n;
    }
});
var je = s((k)=>{
    "use strict";
    var Ir = Me().default;
    Object.defineProperty(k, "__esModule", {
        value: !0
    });
    k.IX2VanillaUtils = k.IX2VanillaPlugins = k.IX2ElementsReducer = k.IX2Easings = k.IX2EasingUtils = k.IX2BrowserSupport = void 0;
    var WM = Ir(jt());
    k.IX2BrowserSupport = WM;
    var HM = Ir(fa());
    k.IX2Easings = HM;
    var KM = Ir(Ea());
    k.IX2EasingUtils = KM;
    var YM = Ir(ip());
    k.IX2ElementsReducer = YM;
    var QM = Ir(_a());
    k.IX2VanillaPlugins = QM;
    var zM = Ir(Jp());
    k.IX2VanillaUtils = zM;
});
var n_ = s((tn)=>{
    "use strict";
    Object.defineProperty(tn, "__esModule", {
        value: !0
    });
    tn.ixInstances = void 0;
    var e_ = Z(), r_ = je(), Tr = er(), { IX2_RAW_DATA_IMPORTED: $M, IX2_SESSION_STOPPED: kM, IX2_INSTANCE_ADDED: ZM, IX2_INSTANCE_STARTED: JM, IX2_INSTANCE_REMOVED: ex, IX2_ANIMATION_FRAME_CHANGED: rx } = e_.IX2EngineActionTypes, { optimizeFloat: rn, applyEasing: t_, createBezierEasing: tx } = r_.IX2EasingUtils, { RENDER_GENERAL: nx } = e_.IX2EngineConstants, { getItemConfigByKey: Ca, getRenderType: ix, getStyleProp: ax } = r_.IX2VanillaUtils, ox = (e, r)=>{
        let { position: t, parameterId: n, actionGroups: i, destinationKeys: a, smoothing: o, restingValue: u, actionTypeId: c, customEasingFn: l, skipMotion: d, skipToValue: E } = e, { parameters: p } = r.payload, g = Math.max(1 - o, 0.01), v = p[n];
        v == null && (g = 1, v = u);
        let _ = Math.max(v, 0) || 0, T = rn(_ - t), I = d ? E : rn(t + T * g), h = I * 100;
        if (I === t && e.current) return e;
        let y, A, R, O;
        for(let C = 0, { length: N } = i; C < N; C++){
            let { keyframe: D, actionItems: P } = i[C];
            if (C === 0 && (y = P[0]), h >= D) {
                y = P[0];
                let w = i[C + 1], L = w && h !== D;
                A = L ? w.actionItems[0] : null, L && (R = D / 100, O = (w.keyframe - D) / 100);
            }
        }
        let S = {};
        if (y && !A) for(let C = 0, { length: N } = a; C < N; C++){
            let D = a[C];
            S[D] = Ca(c, D, y.config);
        }
        else if (y && A && R !== void 0 && O !== void 0) {
            let C = (I - R) / O, N = y.config.easing, D = t_(N, C, l);
            for(let P = 0, { length: w } = a; P < w; P++){
                let L = a[P], Ae = Ca(c, L, y.config), fe = (Ca(c, L, A.config) - Ae) * D + Ae;
                S[L] = fe;
            }
        }
        return (0, Tr.merge)(e, {
            position: I,
            current: S
        });
    }, sx = (e, r)=>{
        let { active: t, origin: n, start: i, immediate: a, renderType: o, verbose: u, actionItem: c, destination: l, destinationKeys: d, pluginDuration: E, instanceDelay: p, customEasingFn: g, skipMotion: v } = e, _ = c.config.easing, { duration: T, delay: I } = c.config;
        E != null && (T = E), I = p ?? I, o === nx ? T = 0 : (a || v) && (T = I = 0);
        let { now: h } = r.payload;
        if (t && n) {
            let y = h - (i + I);
            if (u) {
                let C = h - i, N = T + I, D = rn(Math.min(Math.max(0, C / N), 1));
                e = (0, Tr.set)(e, "verboseTimeElapsed", N * D);
            }
            if (y < 0) return e;
            let A = rn(Math.min(Math.max(0, y / T), 1)), R = t_(_, A, g), O = {}, S = null;
            return d.length && (S = d.reduce((C, N)=>{
                let D = l[N], P = parseFloat(n[N]) || 0, L = (parseFloat(D) - P) * R + P;
                return C[N] = L, C;
            }, {})), O.current = S, O.position = A, A === 1 && (O.active = !1, O.complete = !0), (0, Tr.merge)(e, O);
        }
        return e;
    }, ux = (e = Object.freeze({}), r)=>{
        switch(r.type){
            case $M:
                return r.payload.ixInstances || Object.freeze({});
            case kM:
                return Object.freeze({});
            case ZM:
                {
                    let { instanceId: t, elementId: n, actionItem: i, eventId: a, eventTarget: o, eventStateKey: u, actionListId: c, groupIndex: l, isCarrier: d, origin: E, destination: p, immediate: g, verbose: v, continuous: _, parameterId: T, actionGroups: I, smoothing: h, restingValue: y, pluginInstance: A, pluginDuration: R, instanceDelay: O, skipMotion: S, skipToValue: C } = r.payload, { actionTypeId: N } = i, D = ix(N), P = ax(D, N), w = Object.keys(p).filter((Ae)=>p[Ae] != null), { easing: L } = i.config;
                    return (0, Tr.set)(e, t, {
                        id: t,
                        elementId: n,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: E,
                        destination: p,
                        destinationKeys: w,
                        immediate: g,
                        verbose: v,
                        current: null,
                        actionItem: i,
                        actionTypeId: N,
                        eventId: a,
                        eventTarget: o,
                        eventStateKey: u,
                        actionListId: c,
                        groupIndex: l,
                        renderType: D,
                        isCarrier: d,
                        styleProp: P,
                        continuous: _,
                        parameterId: T,
                        actionGroups: I,
                        smoothing: h,
                        restingValue: y,
                        pluginInstance: A,
                        pluginDuration: R,
                        instanceDelay: O,
                        skipMotion: S,
                        skipToValue: C,
                        customEasingFn: Array.isArray(L) && L.length === 4 ? tx(L) : void 0
                    });
                }
            case JM:
                {
                    let { instanceId: t, time: n } = r.payload;
                    return (0, Tr.mergeIn)(e, [
                        t
                    ], {
                        active: !0,
                        complete: !1,
                        start: n
                    });
                }
            case ex:
                {
                    let { instanceId: t } = r.payload;
                    if (!e[t]) return e;
                    let n = {}, i = Object.keys(e), { length: a } = i;
                    for(let o = 0; o < a; o++){
                        let u = i[o];
                        u !== t && (n[u] = e[u]);
                    }
                    return n;
                }
            case rx:
                {
                    let t = e, n = Object.keys(e), { length: i } = n;
                    for(let a = 0; a < i; a++){
                        let o = n[a], u = e[o], c = u.continuous ? ox : sx;
                        t = (0, Tr.set)(t, o, c(u, r));
                    }
                    return t;
                }
            default:
                return e;
        }
    };
    tn.ixInstances = ux;
});
var i_ = s((nn)=>{
    "use strict";
    Object.defineProperty(nn, "__esModule", {
        value: !0
    });
    nn.ixParameters = void 0;
    var cx = Z(), { IX2_RAW_DATA_IMPORTED: lx, IX2_SESSION_STOPPED: fx, IX2_PARAMETER_CHANGED: dx } = cx.IX2EngineActionTypes, Ex = (e = {}, r)=>{
        switch(r.type){
            case lx:
                return r.payload.ixParameters || {};
            case fx:
                return {};
            case dx:
                {
                    let { key: t, value: n } = r.payload;
                    return e[t] = n, e;
                }
            default:
                return e;
        }
    };
    nn.ixParameters = Ex;
});
var a_ = s((an)=>{
    "use strict";
    Object.defineProperty(an, "__esModule", {
        value: !0
    });
    an.default = void 0;
    var px = bi(), _x = hc(), gx = Vc(), vx = Bc(), Ix = je(), Tx = n_(), Ox = i_(), { ixElements: hx } = Ix.IX2ElementsReducer, yx = (0, px.combineReducers)({
        ixData: _x.ixData,
        ixRequest: gx.ixRequest,
        ixSession: vx.ixSession,
        ixElements: hx,
        ixInstances: Tx.ixInstances,
        ixParameters: Ox.ixParameters
    });
    an.default = yx;
});
var o_ = s((qW, $r)=>{
    function Sx(e, r) {
        if (e == null) return {};
        var t = {}, n = Object.keys(e), i, a;
        for(a = 0; a < n.length; a++)i = n[a], !(r.indexOf(i) >= 0) && (t[i] = e[i]);
        return t;
    }
    $r.exports = Sx, $r.exports.__esModule = !0, $r.exports.default = $r.exports;
});
var u_ = s((PW, s_)=>{
    var Ax = Ne(), Rx = H(), Cx = Oe(), Nx = "[object String]";
    function bx(e) {
        return typeof e == "string" || !Rx(e) && Cx(e) && Ax(e) == Nx;
    }
    s_.exports = bx;
});
var l_ = s((LW, c_)=>{
    var mx = aa(), qx = mx("length");
    c_.exports = qx;
});
var d_ = s((DW, f_)=>{
    var Px = "\ud800-\udfff", Lx = "\\u0300-\\u036f", Dx = "\\ufe20-\\ufe2f", Mx = "\\u20d0-\\u20ff", xx = Lx + Dx + Mx, wx = "\\ufe0e\\ufe0f", Fx = "\\u200d", Gx = RegExp("[" + Fx + Px + xx + wx + "]");
    function Xx(e) {
        return Gx.test(e);
    }
    f_.exports = Xx;
});
var h_ = s((MW, O_)=>{
    var p_ = "\ud800-\udfff", Vx = "\\u0300-\\u036f", Ux = "\\ufe20-\\ufe2f", Bx = "\\u20d0-\\u20ff", jx = Vx + Ux + Bx, Wx = "\\ufe0e\\ufe0f", Hx = "[" + p_ + "]", Na = "[" + jx + "]", ba = "\ud83c[\udffb-\udfff]", Kx = "(?:" + Na + "|" + ba + ")", __ = "[^" + p_ + "]", g_ = "(?:\ud83c[\udde6-\uddff]){2}", v_ = "[\ud800-\udbff][\udc00-\udfff]", Yx = "\\u200d", I_ = Kx + "?", T_ = "[" + Wx + "]?", Qx = "(?:" + Yx + "(?:" + [
        __,
        g_,
        v_
    ].join("|") + ")" + T_ + I_ + ")*", zx = T_ + I_ + Qx, $x = "(?:" + [
        __ + Na + "?",
        Na,
        g_,
        v_,
        Hx
    ].join("|") + ")", E_ = RegExp(ba + "(?=" + ba + ")|" + $x + zx, "g");
    function kx(e) {
        for(var r = E_.lastIndex = 0; E_.test(e);)++r;
        return r;
    }
    O_.exports = kx;
});
var S_ = s((xW, y_)=>{
    var Zx = l_(), Jx = d_(), ew = h_();
    function rw(e) {
        return Jx(e) ? ew(e) : Zx(e);
    }
    y_.exports = rw;
});
var R_ = s((wW, A_)=>{
    var tw = Mt(), nw = xt(), iw = Ge(), aw = u_(), ow = S_(), sw = "[object Map]", uw = "[object Set]";
    function cw(e) {
        if (e == null) return 0;
        if (iw(e)) return aw(e) ? ow(e) : e.length;
        var r = nw(e);
        return r == sw || r == uw ? e.size : tw(e).length;
    }
    A_.exports = cw;
});
var N_ = s((FW, C_)=>{
    var lw = "Expected a function";
    function fw(e) {
        if (typeof e != "function") throw new TypeError(lw);
        return function() {
            var r = arguments;
            switch(r.length){
                case 0:
                    return !e.call(this);
                case 1:
                    return !e.call(this, r[0]);
                case 2:
                    return !e.call(this, r[0], r[1]);
                case 3:
                    return !e.call(this, r[0], r[1], r[2]);
            }
            return !e.apply(this, r);
        };
    }
    C_.exports = fw;
});
var ma = s((GW, b_)=>{
    var dw = be(), Ew = function() {
        try {
            var e = dw(Object, "defineProperty");
            return e({}, "", {}), e;
        } catch  {}
    }();
    b_.exports = Ew;
});
var qa = s((XW, q_)=>{
    var m_ = ma();
    function pw(e, r, t) {
        r == "__proto__" && m_ ? m_(e, r, {
            configurable: !0,
            enumerable: !0,
            value: t,
            writable: !0
        }) : e[r] = t;
    }
    q_.exports = pw;
});
var L_ = s((VW, P_)=>{
    var _w = qa(), gw = At(), vw = Object.prototype, Iw = vw.hasOwnProperty;
    function Tw(e, r, t) {
        var n = e[r];
        (!(Iw.call(e, r) && gw(n, t)) || t === void 0 && !(r in e)) && _w(e, r, t);
    }
    P_.exports = Tw;
});
var x_ = s((UW, M_)=>{
    var Ow = L_(), hw = Ur(), yw = qt(), D_ = pe(), Sw = ur();
    function Aw(e, r, t, n) {
        if (!D_(e)) return e;
        r = hw(r, e);
        for(var i = -1, a = r.length, o = a - 1, u = e; u != null && ++i < a;){
            var c = Sw(r[i]), l = t;
            if (c === "__proto__" || c === "constructor" || c === "prototype") return e;
            if (i != o) {
                var d = u[c];
                l = n ? n(d, c, u) : void 0, l === void 0 && (l = D_(d) ? d : yw(r[i + 1]) ? [] : {});
            }
            Ow(u, c, l), u = u[c];
        }
        return e;
    }
    M_.exports = Aw;
});
var F_ = s((BW, w_)=>{
    var Rw = Gt(), Cw = x_(), Nw = Ur();
    function bw(e, r, t) {
        for(var n = -1, i = r.length, a = {}; ++n < i;){
            var o = r[n], u = Rw(e, o);
            t(u, o) && Cw(a, Nw(o, e), u);
        }
        return a;
    }
    w_.exports = bw;
});
var X_ = s((jW, G_)=>{
    var mw = bt(), qw = _i(), Pw = Wi(), Lw = ji(), Dw = Object.getOwnPropertySymbols, Mw = Dw ? function(e) {
        for(var r = []; e;)mw(r, Pw(e)), e = qw(e);
        return r;
    } : Lw;
    G_.exports = Mw;
});
var U_ = s((WW, V_)=>{
    function xw(e) {
        var r = [];
        if (e != null) for(var t in Object(e))r.push(t);
        return r;
    }
    V_.exports = xw;
});
var j_ = s((HW, B_)=>{
    var ww = pe(), Fw = Dt(), Gw = U_(), Xw = Object.prototype, Vw = Xw.hasOwnProperty;
    function Uw(e) {
        if (!ww(e)) return Gw(e);
        var r = Fw(e), t = [];
        for(var n in e)n == "constructor" && (r || !Vw.call(e, n)) || t.push(n);
        return t;
    }
    B_.exports = Uw;
});
var H_ = s((KW, W_)=>{
    var Bw = Ki(), jw = j_(), Ww = Ge();
    function Hw(e) {
        return Ww(e) ? Bw(e, !0) : jw(e);
    }
    W_.exports = Hw;
});
var Y_ = s((YW, K_)=>{
    var Kw = Bi(), Yw = X_(), Qw = H_();
    function zw(e) {
        return Kw(e, Qw, Yw);
    }
    K_.exports = zw;
});
var z_ = s((QW, Q_)=>{
    var $w = ia(), kw = me(), Zw = F_(), Jw = Y_();
    function eF(e, r) {
        if (e == null) return {};
        var t = $w(Jw(e), function(n) {
            return [
                n
            ];
        });
        return r = kw(r), Zw(e, t, function(n, i) {
            return r(n, i[0]);
        });
    }
    Q_.exports = eF;
});
var k_ = s((zW, $_)=>{
    var rF = me(), tF = N_(), nF = z_();
    function iF(e, r) {
        return nF(e, tF(rF(r)));
    }
    $_.exports = iF;
});
var J_ = s(($W, Z_)=>{
    var aF = Mt(), oF = xt(), sF = xr(), uF = H(), cF = Ge(), lF = mt(), fF = Dt(), dF = Lt(), EF = "[object Map]", pF = "[object Set]", _F = Object.prototype, gF = _F.hasOwnProperty;
    function vF(e) {
        if (e == null) return !0;
        if (cF(e) && (uF(e) || typeof e == "string" || typeof e.splice == "function" || lF(e) || dF(e) || sF(e))) return !e.length;
        var r = oF(e);
        if (r == EF || r == pF) return !e.size;
        if (fF(e)) return !aF(e).length;
        for(var t in e)if (gF.call(e, t)) return !1;
        return !0;
    }
    Z_.exports = vF;
});
var rg = s((kW, eg)=>{
    var IF = qa(), TF = ga(), OF = me();
    function hF(e, r) {
        var t = {};
        return r = OF(r, 3), TF(e, function(n, i, a) {
            IF(t, i, r(n, i, a));
        }), t;
    }
    eg.exports = hF;
});
var ng = s((ZW, tg)=>{
    function yF(e, r) {
        for(var t = -1, n = e == null ? 0 : e.length; ++t < n && r(e[t], t, e) !== !1;);
        return e;
    }
    tg.exports = yF;
});
var ag = s((JW, ig)=>{
    var SF = Vt();
    function AF(e) {
        return typeof e == "function" ? e : SF;
    }
    ig.exports = AF;
});
var sg = s((eH, og)=>{
    var RF = ng(), CF = va(), NF = ag(), bF = H();
    function mF(e, r) {
        var t = bF(e) ? RF : CF;
        return t(e, NF(r));
    }
    og.exports = mF;
});
var cg = s((rH, ug)=>{
    var qF = oe(), PF = function() {
        return qF.Date.now();
    };
    ug.exports = PF;
});
var dg = s((tH, fg)=>{
    var LF = pe(), Pa = cg(), lg = Ut(), DF = "Expected a function", MF = Math.max, xF = Math.min;
    function wF(e, r, t) {
        var n, i, a, o, u, c, l = 0, d = !1, E = !1, p = !0;
        if (typeof e != "function") throw new TypeError(DF);
        r = lg(r) || 0, LF(t) && (d = !!t.leading, E = "maxWait" in t, a = E ? MF(lg(t.maxWait) || 0, r) : a, p = "trailing" in t ? !!t.trailing : p);
        function g(O) {
            var S = n, C = i;
            return n = i = void 0, l = O, o = e.apply(C, S), o;
        }
        function v(O) {
            return l = O, u = setTimeout(I, r), d ? g(O) : o;
        }
        function _(O) {
            var S = O - c, C = O - l, N = r - S;
            return E ? xF(N, a - C) : N;
        }
        function T(O) {
            var S = O - c, C = O - l;
            return c === void 0 || S >= r || S < 0 || E && C >= a;
        }
        function I() {
            var O = Pa();
            if (T(O)) return h(O);
            u = setTimeout(I, _(O));
        }
        function h(O) {
            return u = void 0, p && n ? g(O) : (n = i = void 0, o);
        }
        function y() {
            u !== void 0 && clearTimeout(u), l = 0, n = c = i = u = void 0;
        }
        function A() {
            return u === void 0 ? o : h(Pa());
        }
        function R() {
            var O = Pa(), S = T(O);
            if (n = arguments, i = this, c = O, S) {
                if (u === void 0) return v(c);
                if (E) return clearTimeout(u), u = setTimeout(I, r), g(c);
            }
            return u === void 0 && (u = setTimeout(I, r)), o;
        }
        return R.cancel = y, R.flush = A, R;
    }
    fg.exports = wF;
});
var pg = s((nH, Eg)=>{
    var FF = dg(), GF = pe(), XF = "Expected a function";
    function VF(e, r, t) {
        var n = !0, i = !0;
        if (typeof e != "function") throw new TypeError(XF);
        return GF(t) && (n = "leading" in t ? !!t.leading : n, i = "trailing" in t ? !!t.trailing : i), FF(e, r, {
            leading: n,
            maxWait: r,
            trailing: i
        });
    }
    Eg.exports = VF;
});
var on = s((q)=>{
    "use strict";
    var UF = ne().default;
    Object.defineProperty(q, "__esModule", {
        value: !0
    });
    q.viewportWidthChanged = q.testFrameRendered = q.stopRequested = q.sessionStopped = q.sessionStarted = q.sessionInitialized = q.rawDataImported = q.previewRequested = q.playbackRequested = q.parameterChanged = q.mediaQueriesDefined = q.instanceStarted = q.instanceRemoved = q.instanceAdded = q.eventStateChanged = q.eventListenerAdded = q.elementStateChanged = q.clearRequested = q.animationFrameChanged = q.actionListPlaybackChanged = void 0;
    var _g = UF(Je()), gg = Z(), BF = je(), { IX2_RAW_DATA_IMPORTED: jF, IX2_SESSION_INITIALIZED: WF, IX2_SESSION_STARTED: HF, IX2_SESSION_STOPPED: KF, IX2_PREVIEW_REQUESTED: YF, IX2_PLAYBACK_REQUESTED: QF, IX2_STOP_REQUESTED: zF, IX2_CLEAR_REQUESTED: $F, IX2_EVENT_LISTENER_ADDED: kF, IX2_TEST_FRAME_RENDERED: ZF, IX2_EVENT_STATE_CHANGED: JF, IX2_ANIMATION_FRAME_CHANGED: e2, IX2_PARAMETER_CHANGED: r2, IX2_INSTANCE_ADDED: t2, IX2_INSTANCE_STARTED: n2, IX2_INSTANCE_REMOVED: i2, IX2_ELEMENT_STATE_CHANGED: a2, IX2_ACTION_LIST_PLAYBACK_CHANGED: o2, IX2_VIEWPORT_WIDTH_CHANGED: s2, IX2_MEDIA_QUERIES_DEFINED: u2 } = gg.IX2EngineActionTypes, { reifyState: c2 } = BF.IX2VanillaUtils, l2 = (e)=>({
            type: jF,
            payload: (0, _g.default)({}, c2(e))
        });
    q.rawDataImported = l2;
    var f2 = ({ hasBoundaryNodes: e, reducedMotion: r })=>({
            type: WF,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: r
            }
        });
    q.sessionInitialized = f2;
    var d2 = ()=>({
            type: HF
        });
    q.sessionStarted = d2;
    var E2 = ()=>({
            type: KF
        });
    q.sessionStopped = E2;
    var p2 = ({ rawData: e, defer: r })=>({
            type: YF,
            payload: {
                defer: r,
                rawData: e
            }
        });
    q.previewRequested = p2;
    var _2 = ({ actionTypeId: e = gg.ActionTypeConsts.GENERAL_START_ACTION, actionListId: r, actionItemId: t, eventId: n, allowEvents: i, immediate: a, testManual: o, verbose: u, rawData: c })=>({
            type: QF,
            payload: {
                actionTypeId: e,
                actionListId: r,
                actionItemId: t,
                testManual: o,
                eventId: n,
                allowEvents: i,
                immediate: a,
                verbose: u,
                rawData: c
            }
        });
    q.playbackRequested = _2;
    var g2 = (e)=>({
            type: zF,
            payload: {
                actionListId: e
            }
        });
    q.stopRequested = g2;
    var v2 = ()=>({
            type: $F
        });
    q.clearRequested = v2;
    var I2 = (e, r)=>({
            type: kF,
            payload: {
                target: e,
                listenerParams: r
            }
        });
    q.eventListenerAdded = I2;
    var T2 = (e = 1)=>({
            type: ZF,
            payload: {
                step: e
            }
        });
    q.testFrameRendered = T2;
    var O2 = (e, r)=>({
            type: JF,
            payload: {
                stateKey: e,
                newState: r
            }
        });
    q.eventStateChanged = O2;
    var h2 = (e, r)=>({
            type: e2,
            payload: {
                now: e,
                parameters: r
            }
        });
    q.animationFrameChanged = h2;
    var y2 = (e, r)=>({
            type: r2,
            payload: {
                key: e,
                value: r
            }
        });
    q.parameterChanged = y2;
    var S2 = (e)=>({
            type: t2,
            payload: (0, _g.default)({}, e)
        });
    q.instanceAdded = S2;
    var A2 = (e, r)=>({
            type: n2,
            payload: {
                instanceId: e,
                time: r
            }
        });
    q.instanceStarted = A2;
    var R2 = (e)=>({
            type: i2,
            payload: {
                instanceId: e
            }
        });
    q.instanceRemoved = R2;
    var C2 = (e, r, t, n)=>({
            type: a2,
            payload: {
                elementId: e,
                actionTypeId: r,
                current: t,
                actionItem: n
            }
        });
    q.elementStateChanged = C2;
    var N2 = ({ actionListId: e, isPlaying: r })=>({
            type: o2,
            payload: {
                actionListId: e,
                isPlaying: r
            }
        });
    q.actionListPlaybackChanged = N2;
    var b2 = ({ width: e, mediaQueries: r })=>({
            type: s2,
            payload: {
                width: e,
                mediaQueries: r
            }
        });
    q.viewportWidthChanged = b2;
    var m2 = ()=>({
            type: u2
        });
    q.mediaQueriesDefined = m2;
});
var Tg = s((Q)=>{
    "use strict";
    Object.defineProperty(Q, "__esModule", {
        value: !0
    });
    Q.elementContains = U2;
    Q.getChildElements = j2;
    Q.getClosestElement = void 0;
    Q.getProperty = w2;
    Q.getQuerySelector = G2;
    Q.getRefType = K2;
    Q.getSiblingElements = W2;
    Q.getStyle = x2;
    Q.getValidDocument = X2;
    Q.isSiblingNode = B2;
    Q.matchSelector = F2;
    Q.queryDocument = V2;
    Q.setStyle = M2;
    var q2 = je(), P2 = Z(), { ELEMENT_MATCHES: La } = q2.IX2BrowserSupport, { IX2_ID_DELIMITER: vg, HTML_ELEMENT: L2, PLAIN_OBJECT: D2, WF_PAGE: Ig } = P2.IX2EngineConstants;
    function M2(e, r, t) {
        e.style[r] = t;
    }
    function x2(e, r) {
        return e.style[r];
    }
    function w2(e, r) {
        return e[r];
    }
    function F2(e) {
        return (r)=>r[La](e);
    }
    function G2({ id: e, selector: r }) {
        if (e) {
            let t = e;
            if (e.indexOf(vg) !== -1) {
                let n = e.split(vg), i = n[0];
                if (t = n[1], i !== document.documentElement.getAttribute(Ig)) return null;
            }
            return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return r;
    }
    function X2(e) {
        return e == null || e === document.documentElement.getAttribute(Ig) ? document : null;
    }
    function V2(e, r) {
        return Array.prototype.slice.call(document.querySelectorAll(r ? e + " " + r : e));
    }
    function U2(e, r) {
        return e.contains(r);
    }
    function B2(e, r) {
        return e !== r && e.parentNode === r.parentNode;
    }
    function j2(e) {
        let r = [];
        for(let t = 0, { length: n } = e || []; t < n; t++){
            let { children: i } = e[t], { length: a } = i;
            if (a) for(let o = 0; o < a; o++)r.push(i[o]);
        }
        return r;
    }
    function W2(e = []) {
        let r = [], t = [];
        for(let n = 0, { length: i } = e; n < i; n++){
            let { parentNode: a } = e[n];
            if (!a || !a.children || !a.children.length || t.indexOf(a) !== -1) continue;
            t.push(a);
            let o = a.firstElementChild;
            for(; o != null;)e.indexOf(o) === -1 && r.push(o), o = o.nextElementSibling;
        }
        return r;
    }
    var H2 = Element.prototype.closest ? (e, r)=>document.documentElement.contains(e) ? e.closest(r) : null : (e, r)=>{
        if (!document.documentElement.contains(e)) return null;
        let t = e;
        do {
            if (t[La] && t[La](r)) return t;
            t = t.parentNode;
        }while (t != null);
        return null;
    };
    Q.getClosestElement = H2;
    function K2(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? L2 : D2 : null;
    }
});
var Da = s((oH, hg)=>{
    var Y2 = pe(), Og = Object.create, Q2 = function() {
        function e() {}
        return function(r) {
            if (!Y2(r)) return {};
            if (Og) return Og(r);
            e.prototype = r;
            var t = new e();
            return e.prototype = void 0, t;
        };
    }();
    hg.exports = Q2;
});
var sn = s((sH, yg)=>{
    function z2() {}
    yg.exports = z2;
});
var cn = s((uH, Sg)=>{
    var $2 = Da(), k2 = sn();
    function un(e, r) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!r, this.__index__ = 0, this.__values__ = void 0;
    }
    un.prototype = $2(k2.prototype);
    un.prototype.constructor = un;
    Sg.exports = un;
});
var Ng = s((cH, Cg)=>{
    var Ag = ze(), Z2 = xr(), J2 = H(), Rg = Ag ? Ag.isConcatSpreadable : void 0;
    function eG(e) {
        return J2(e) || Z2(e) || !!(Rg && e && e[Rg]);
    }
    Cg.exports = eG;
});
var qg = s((lH, mg)=>{
    var rG = bt(), tG = Ng();
    function bg(e, r, t, n, i) {
        var a = -1, o = e.length;
        for(t || (t = tG), i || (i = []); ++a < o;){
            var u = e[a];
            r > 0 && t(u) ? r > 1 ? bg(u, r - 1, t, n, i) : rG(i, u) : n || (i[i.length] = u);
        }
        return i;
    }
    mg.exports = bg;
});
var Lg = s((fH, Pg)=>{
    var nG = qg();
    function iG(e) {
        var r = e == null ? 0 : e.length;
        return r ? nG(e, 1) : [];
    }
    Pg.exports = iG;
});
var Mg = s((dH, Dg)=>{
    function aG(e, r, t) {
        switch(t.length){
            case 0:
                return e.call(r);
            case 1:
                return e.call(r, t[0]);
            case 2:
                return e.call(r, t[0], t[1]);
            case 3:
                return e.call(r, t[0], t[1], t[2]);
        }
        return e.apply(r, t);
    }
    Dg.exports = aG;
});
var Fg = s((EH, wg)=>{
    var oG = Mg(), xg = Math.max;
    function sG(e, r, t) {
        return r = xg(r === void 0 ? e.length - 1 : r, 0), function() {
            for(var n = arguments, i = -1, a = xg(n.length - r, 0), o = Array(a); ++i < a;)o[i] = n[r + i];
            i = -1;
            for(var u = Array(r + 1); ++i < r;)u[i] = n[i];
            return u[r] = t(o), oG(e, this, u);
        };
    }
    wg.exports = sG;
});
var Xg = s((pH, Gg)=>{
    function uG(e) {
        return function() {
            return e;
        };
    }
    Gg.exports = uG;
});
var Bg = s((_H, Ug)=>{
    var cG = Xg(), Vg = ma(), lG = Vt(), fG = Vg ? function(e, r) {
        return Vg(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: cG(r),
            writable: !0
        });
    } : lG;
    Ug.exports = fG;
});
var Wg = s((gH, jg)=>{
    var dG = 800, EG = 16, pG = Date.now;
    function _G(e) {
        var r = 0, t = 0;
        return function() {
            var n = pG(), i = EG - (n - t);
            if (t = n, i > 0) {
                if (++r >= dG) return arguments[0];
            } else r = 0;
            return e.apply(void 0, arguments);
        };
    }
    jg.exports = _G;
});
var Kg = s((vH, Hg)=>{
    var gG = Bg(), vG = Wg(), IG = vG(gG);
    Hg.exports = IG;
});
var Qg = s((IH, Yg)=>{
    var TG = Lg(), OG = Fg(), hG = Kg();
    function yG(e) {
        return hG(OG(e, void 0, TG), e + "");
    }
    Yg.exports = yG;
});
var kg = s((TH, $g)=>{
    var zg = Yi(), SG = zg && new zg();
    $g.exports = SG;
});
var Jg = s((OH, Zg)=>{
    function AG() {}
    Zg.exports = AG;
});
var Ma = s((hH, rv)=>{
    var ev = kg(), RG = Jg(), CG = ev ? function(e) {
        return ev.get(e);
    } : RG;
    rv.exports = CG;
});
var nv = s((yH, tv)=>{
    var NG = {};
    tv.exports = NG;
});
var xa = s((SH, av)=>{
    var iv = nv(), bG = Object.prototype, mG = bG.hasOwnProperty;
    function qG(e) {
        for(var r = e.name + "", t = iv[r], n = mG.call(iv, r) ? t.length : 0; n--;){
            var i = t[n], a = i.func;
            if (a == null || a == e) return i.name;
        }
        return r;
    }
    av.exports = qG;
});
var fn = s((AH, ov)=>{
    var PG = Da(), LG = sn(), DG = 4294967295;
    function ln(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = DG, this.__views__ = [];
    }
    ln.prototype = PG(LG.prototype);
    ln.prototype.constructor = ln;
    ov.exports = ln;
});
var uv = s((RH, sv)=>{
    function MG(e, r) {
        var t = -1, n = e.length;
        for(r || (r = Array(n)); ++t < n;)r[t] = e[t];
        return r;
    }
    sv.exports = MG;
});
var lv = s((CH, cv)=>{
    var xG = fn(), wG = cn(), FG = uv();
    function GG(e) {
        if (e instanceof xG) return e.clone();
        var r = new wG(e.__wrapped__, e.__chain__);
        return r.__actions__ = FG(e.__actions__), r.__index__ = e.__index__, r.__values__ = e.__values__, r;
    }
    cv.exports = GG;
});
var Ev = s((NH, dv)=>{
    var XG = fn(), fv = cn(), VG = sn(), UG = H(), BG = Oe(), jG = lv(), WG = Object.prototype, HG = WG.hasOwnProperty;
    function dn(e) {
        if (BG(e) && !UG(e) && !(e instanceof XG)) {
            if (e instanceof fv) return e;
            if (HG.call(e, "__wrapped__")) return jG(e);
        }
        return new fv(e);
    }
    dn.prototype = VG.prototype;
    dn.prototype.constructor = dn;
    dv.exports = dn;
});
var _v = s((bH, pv)=>{
    var KG = fn(), YG = Ma(), QG = xa(), zG = Ev();
    function $G(e) {
        var r = QG(e), t = zG[r];
        if (typeof t != "function" || !(r in KG.prototype)) return !1;
        if (e === t) return !0;
        var n = YG(t);
        return !!n && e === n[0];
    }
    pv.exports = $G;
});
var Tv = s((mH, Iv)=>{
    var gv = cn(), kG = Qg(), ZG = Ma(), wa = xa(), JG = H(), vv = _v(), e1 = "Expected a function", r1 = 8, t1 = 32, n1 = 128, i1 = 256;
    function a1(e) {
        return kG(function(r) {
            var t = r.length, n = t, i = gv.prototype.thru;
            for(e && r.reverse(); n--;){
                var a = r[n];
                if (typeof a != "function") throw new TypeError(e1);
                if (i && !o && wa(a) == "wrapper") var o = new gv([], !0);
            }
            for(n = o ? n : t; ++n < t;){
                a = r[n];
                var u = wa(a), c = u == "wrapper" ? ZG(a) : void 0;
                c && vv(c[0]) && c[1] == (n1 | r1 | t1 | i1) && !c[4].length && c[9] == 1 ? o = o[wa(c[0])].apply(o, c[3]) : o = a.length == 1 && vv(a) ? o[u]() : o.thru(a);
            }
            return function() {
                var l = arguments, d = l[0];
                if (o && l.length == 1 && JG(d)) return o.plant(d).value();
                for(var E = 0, p = t ? r[E].apply(this, l) : d; ++E < t;)p = r[E].call(this, p);
                return p;
            };
        });
    }
    Iv.exports = a1;
});
var hv = s((qH, Ov)=>{
    var o1 = Tv(), s1 = o1();
    Ov.exports = s1;
});
var Sv = s((PH, yv)=>{
    function u1(e, r, t) {
        return e === e && (t !== void 0 && (e = e <= t ? e : t), r !== void 0 && (e = e >= r ? e : r)), e;
    }
    yv.exports = u1;
});
var Rv = s((LH, Av)=>{
    var c1 = Sv(), Fa = Ut();
    function l1(e, r, t) {
        return t === void 0 && (t = r, r = void 0), t !== void 0 && (t = Fa(t), t = t === t ? t : 0), r !== void 0 && (r = Fa(r), r = r === r ? r : 0), c1(Fa(e), r, t);
    }
    Av.exports = l1;
});
var jv = s((vn)=>{
    "use strict";
    var gn = ne().default;
    Object.defineProperty(vn, "__esModule", {
        value: !0
    });
    vn.default = void 0;
    var te = gn(Je()), f1 = gn(hv()), d1 = gn(Xt()), E1 = gn(Rv()), We = Z(), Ga = Ba(), En = on(), p1 = je(), { MOUSE_CLICK: _1, MOUSE_SECOND_CLICK: g1, MOUSE_DOWN: v1, MOUSE_UP: I1, MOUSE_OVER: T1, MOUSE_OUT: O1, DROPDOWN_CLOSE: h1, DROPDOWN_OPEN: y1, SLIDER_ACTIVE: S1, SLIDER_INACTIVE: A1, TAB_ACTIVE: R1, TAB_INACTIVE: C1, NAVBAR_CLOSE: N1, NAVBAR_OPEN: b1, MOUSE_MOVE: m1, PAGE_SCROLL_DOWN: Mv, SCROLL_INTO_VIEW: xv, SCROLL_OUT_OF_VIEW: q1, PAGE_SCROLL_UP: P1, SCROLLING_IN_VIEW: L1, PAGE_FINISH: wv, ECOMMERCE_CART_CLOSE: D1, ECOMMERCE_CART_OPEN: M1, PAGE_START: Fv, PAGE_SCROLL: x1 } = We.EventTypeConsts, Xa = "COMPONENT_ACTIVE", Gv = "COMPONENT_INACTIVE", { COLON_DELIMITER: Cv } = We.IX2EngineConstants, { getNamespacedParameterId: Nv } = p1.IX2VanillaUtils, Xv = (e)=>(r)=>typeof r == "object" && e(r) ? !0 : r, Zr = Xv(({ element: e, nativeEvent: r })=>e === r.target), w1 = Xv(({ element: e, nativeEvent: r })=>e.contains(r.target)), Ie = (0, f1.default)([
        Zr,
        w1
    ]), Vv = (e, r)=>{
        if (r) {
            let { ixData: t } = e.getState(), { events: n } = t, i = n[r];
            if (i && !G1[i.eventTypeId]) return i;
        }
        return null;
    }, F1 = ({ store: e, event: r })=>{
        let { action: t } = r, { autoStopEventId: n } = t.config;
        return !!Vv(e, n);
    }, ee = ({ store: e, event: r, element: t, eventStateKey: n }, i)=>{
        let { action: a, id: o } = r, { actionListId: u, autoStopEventId: c } = a.config, l = Vv(e, c);
        return l && (0, Ga.stopActionGroup)({
            store: e,
            eventId: c,
            eventTarget: t,
            eventStateKey: c + Cv + n.split(Cv)[1],
            actionListId: (0, d1.default)(l, "action.config.actionListId")
        }), (0, Ga.stopActionGroup)({
            store: e,
            eventId: o,
            eventTarget: t,
            eventStateKey: n,
            actionListId: u
        }), (0, Ga.startActionGroup)({
            store: e,
            eventId: o,
            eventTarget: t,
            eventStateKey: n,
            actionListId: u
        }), i;
    }, se = (e, r)=>(t, n)=>e(t, n) === !0 ? r(t, n) : n, Jr = {
        handler: se(Ie, ee)
    }, Uv = (0, te.default)({}, Jr, {
        types: [
            Xa,
            Gv
        ].join(" ")
    }), Va = [
        {
            target: window,
            types: "resize orientationchange",
            throttle: !0
        },
        {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }
    ], bv = "mouseover mouseout", Ua = {
        types: Va
    }, G1 = {
        PAGE_START: Fv,
        PAGE_FINISH: wv
    }, kr = (()=>{
        let e = window.pageXOffset !== void 0, t = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
        return ()=>({
                scrollLeft: e ? window.pageXOffset : t.scrollLeft,
                scrollTop: e ? window.pageYOffset : t.scrollTop,
                stiffScrollTop: (0, E1.default)(e ? window.pageYOffset : t.scrollTop, 0, t.scrollHeight - window.innerHeight),
                scrollWidth: t.scrollWidth,
                scrollHeight: t.scrollHeight,
                clientWidth: t.clientWidth,
                clientHeight: t.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            });
    })(), X1 = (e, r)=>!(e.left > r.right || e.right < r.left || e.top > r.bottom || e.bottom < r.top), V1 = ({ element: e, nativeEvent: r })=>{
        let { type: t, target: n, relatedTarget: i } = r, a = e.contains(n);
        if (t === "mouseover" && a) return !0;
        let o = e.contains(i);
        return !!(t === "mouseout" && a && o);
    }, U1 = (e)=>{
        let { element: r, event: { config: t } } = e, { clientWidth: n, clientHeight: i } = kr(), a = t.scrollOffsetValue, c = t.scrollOffsetUnit === "PX" ? a : i * (a || 0) / 100;
        return X1(r.getBoundingClientRect(), {
            left: 0,
            top: c,
            right: n,
            bottom: i - c
        });
    }, Bv = (e)=>(r, t)=>{
            let { type: n } = r.nativeEvent, i = [
                Xa,
                Gv
            ].indexOf(n) !== -1 ? n === Xa : t.isActive, a = (0, te.default)({}, t, {
                isActive: i
            });
            return (!t || a.isActive !== t.isActive) && e(r, a) || a;
        }, mv = (e)=>(r, t)=>{
            let n = {
                elementHovered: V1(r)
            };
            return (t ? n.elementHovered !== t.elementHovered : n.elementHovered) && e(r, n) || n;
        }, B1 = (e)=>(r, t)=>{
            let n = (0, te.default)({}, t, {
                elementVisible: U1(r)
            });
            return (t ? n.elementVisible !== t.elementVisible : n.elementVisible) && e(r, n) || n;
        }, qv = (e)=>(r, t = {})=>{
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: a } = kr(), { event: { config: o, eventTypeId: u } } = r, { scrollOffsetValue: c, scrollOffsetUnit: l } = o, d = l === "PX", E = i - a, p = Number((n / E).toFixed(2));
            if (t && t.percentTop === p) return t;
            let g = (d ? c : a * (c || 0) / 100) / E, v, _, T = 0;
            t && (v = p > t.percentTop, _ = t.scrollingDown !== v, T = _ ? p : t.anchorTop);
            let I = u === Mv ? p >= T + g : p <= T - g, h = (0, te.default)({}, t, {
                percentTop: p,
                inBounds: I,
                anchorTop: T,
                scrollingDown: v
            });
            return t && I && (_ || h.inBounds !== t.inBounds) && e(r, h) || h;
        }, j1 = (e, r)=>e.left > r.left && e.left < r.right && e.top > r.top && e.top < r.bottom, W1 = (e)=>(r, t)=>{
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(t && t.finshed) && e(r), n;
        }, H1 = (e)=>(r, t)=>{
            let n = {
                started: !0
            };
            return t || e(r), n;
        }, Pv = (e)=>(r, t = {
            clickCount: 0
        })=>{
            let n = {
                clickCount: t.clickCount % 2 + 1
            };
            return n.clickCount !== t.clickCount && e(r, n) || n;
        }, pn = (e = !0)=>(0, te.default)({}, Uv, {
            handler: se(e ? Ie : Zr, Bv((r, t)=>t.isActive ? Jr.handler(r, t) : t))
        }), _n = (e = !0)=>(0, te.default)({}, Uv, {
            handler: se(e ? Ie : Zr, Bv((r, t)=>t.isActive ? t : Jr.handler(r, t)))
        }), Lv = (0, te.default)({}, Ua, {
        handler: B1((e, r)=>{
            let { elementVisible: t } = r, { event: n, store: i } = e, { ixData: a } = i.getState(), { events: o } = a;
            return !o[n.action.config.autoStopEventId] && r.triggered ? r : n.eventTypeId === xv === t ? (ee(e), (0, te.default)({}, r, {
                triggered: !0
            })) : r;
        })
    }), Dv = 0.05, K1 = {
        [S1]: pn(),
        [A1]: _n(),
        [y1]: pn(),
        [h1]: _n(),
        [b1]: pn(!1),
        [N1]: _n(!1),
        [R1]: pn(),
        [C1]: _n(),
        [M1]: {
            types: "ecommerce-cart-open",
            handler: se(Ie, ee)
        },
        [D1]: {
            types: "ecommerce-cart-close",
            handler: se(Ie, ee)
        },
        [_1]: {
            types: "click",
            handler: se(Ie, Pv((e, { clickCount: r })=>{
                F1(e) ? r === 1 && ee(e) : ee(e);
            }))
        },
        [g1]: {
            types: "click",
            handler: se(Ie, Pv((e, { clickCount: r })=>{
                r === 2 && ee(e);
            }))
        },
        [v1]: (0, te.default)({}, Jr, {
            types: "mousedown"
        }),
        [I1]: (0, te.default)({}, Jr, {
            types: "mouseup"
        }),
        [T1]: {
            types: bv,
            handler: se(Ie, mv((e, r)=>{
                r.elementHovered && ee(e);
            }))
        },
        [O1]: {
            types: bv,
            handler: se(Ie, mv((e, r)=>{
                r.elementHovered || ee(e);
            }))
        },
        [m1]: {
            types: "mousemove mouseout scroll",
            handler: ({ store: e, element: r, eventConfig: t, nativeEvent: n, eventStateKey: i }, a = {
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0
            })=>{
                let { basedOn: o, selectedAxis: u, continuousParameterGroupId: c, reverse: l, restingState: d = 0 } = t, { clientX: E = a.clientX, clientY: p = a.clientY, pageX: g = a.pageX, pageY: v = a.pageY } = n, _ = u === "X_AXIS", T = n.type === "mouseout", I = d / 100, h = c, y = !1;
                switch(o){
                    case We.EventBasedOn.VIEWPORT:
                        {
                            I = _ ? Math.min(E, window.innerWidth) / window.innerWidth : Math.min(p, window.innerHeight) / window.innerHeight;
                            break;
                        }
                    case We.EventBasedOn.PAGE:
                        {
                            let { scrollLeft: A, scrollTop: R, scrollWidth: O, scrollHeight: S } = kr();
                            I = _ ? Math.min(A + g, O) / O : Math.min(R + v, S) / S;
                            break;
                        }
                    case We.EventBasedOn.ELEMENT:
                    default:
                        {
                            h = Nv(i, c);
                            let A = n.type.indexOf("mouse") === 0;
                            if (A && Ie({
                                element: r,
                                nativeEvent: n
                            }) !== !0) break;
                            let R = r.getBoundingClientRect(), { left: O, top: S, width: C, height: N } = R;
                            if (!A && !j1({
                                left: E,
                                top: p
                            }, R)) break;
                            y = !0, I = _ ? (E - O) / C : (p - S) / N;
                            break;
                        }
                }
                return T && (I > 1 - Dv || I < Dv) && (I = Math.round(I)), (o !== We.EventBasedOn.ELEMENT || y || y !== a.elementHovered) && (I = l ? 1 - I : I, e.dispatch((0, En.parameterChanged)(h, I))), {
                    elementHovered: y,
                    clientX: E,
                    clientY: p,
                    pageX: g,
                    pageY: v
                };
            }
        },
        [x1]: {
            types: Va,
            handler: ({ store: e, eventConfig: r })=>{
                let { continuousParameterGroupId: t, reverse: n } = r, { scrollTop: i, scrollHeight: a, clientHeight: o } = kr(), u = i / (a - o);
                u = n ? 1 - u : u, e.dispatch((0, En.parameterChanged)(t, u));
            }
        },
        [L1]: {
            types: Va,
            handler: ({ element: e, store: r, eventConfig: t, eventStateKey: n }, i = {
                scrollPercent: 0
            })=>{
                let { scrollLeft: a, scrollTop: o, scrollWidth: u, scrollHeight: c, clientHeight: l } = kr(), { basedOn: d, selectedAxis: E, continuousParameterGroupId: p, startsEntering: g, startsExiting: v, addEndOffset: _, addStartOffset: T, addOffsetValue: I = 0, endOffsetValue: h = 0 } = t, y = E === "X_AXIS";
                if (d === We.EventBasedOn.VIEWPORT) {
                    let A = y ? a / u : o / c;
                    return A !== i.scrollPercent && r.dispatch((0, En.parameterChanged)(p, A)), {
                        scrollPercent: A
                    };
                } else {
                    let A = Nv(n, p), R = e.getBoundingClientRect(), O = (T ? I : 0) / 100, S = (_ ? h : 0) / 100;
                    O = g ? O : 1 - O, S = v ? S : 1 - S;
                    let C = R.top + Math.min(R.height * O, l), D = R.top + R.height * S - C, P = Math.min(l + D, c), L = Math.min(Math.max(0, l - C), P) / P;
                    return L !== i.scrollPercent && r.dispatch((0, En.parameterChanged)(A, L)), {
                        scrollPercent: L
                    };
                }
            }
        },
        [xv]: Lv,
        [q1]: Lv,
        [Mv]: (0, te.default)({}, Ua, {
            handler: qv((e, r)=>{
                r.scrollingDown && ee(e);
            })
        }),
        [P1]: (0, te.default)({}, Ua, {
            handler: qv((e, r)=>{
                r.scrollingDown || ee(e);
            })
        }),
        [wv]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: se(Zr, W1(ee))
        },
        [Fv]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: se(Zr, H1(ee))
        }
    };
    vn.default = K1;
});
var Ba = s((De)=>{
    "use strict";
    var ce = ne().default, Y1 = Me().default;
    Object.defineProperty(De, "__esModule", {
        value: !0
    });
    De.observeRequests = SX;
    De.startActionGroup = Qa;
    De.startEngine = yn;
    De.stopActionGroup = Ya;
    De.stopAllActionGroups = Zv;
    De.stopEngine = Sn;
    var Q1 = ce(Je()), z1 = ce(o_()), $1 = ce(ca()), Le = ce(Xt()), k1 = ce(R_()), Z1 = ce(k_()), J1 = ce(J_()), eX = ce(rg()), et = ce(sg()), rX = ce(pg()), ue = Z(), Kv = je(), X = on(), B = Y1(Tg()), tX = ce(jv()), nX = [
        "store",
        "computedStyle"
    ], iX = Object.keys(ue.QuickEffectIds), ja = (e)=>iX.includes(e), { COLON_DELIMITER: Wa, BOUNDARY_SELECTOR: In, HTML_ELEMENT: Yv, RENDER_GENERAL: aX, W_MOD_IX: Wv } = ue.IX2EngineConstants, { getAffectedElements: Tn, getElementId: oX, getDestinationValues: Ha, observeStore: He, getInstanceId: sX, renderHTMLElement: uX, clearAllStyles: Qv, getMaxDurationItemIndex: cX, getComputedStyle: lX, getInstanceOrigin: fX, reduceListToGroup: dX, shouldNamespaceEventParameter: EX, getNamespacedParameterId: pX, shouldAllowMediaQuery: On, cleanupHTMLElement: _X, clearObjectCache: gX, stringifyTarget: vX, mediaQueriesEqual: IX, shallowEqual: TX } = Kv.IX2VanillaUtils, { isPluginType: hn, createPluginInstance: Ka, getPluginDuration: OX } = Kv.IX2VanillaPlugins, Hv = navigator.userAgent, hX = Hv.match(/iPad/i) || Hv.match(/iPhone/), yX = 12;
    function SX(e) {
        He({
            store: e,
            select: ({ ixRequest: r })=>r.preview,
            onChange: CX
        }), He({
            store: e,
            select: ({ ixRequest: r })=>r.playback,
            onChange: NX
        }), He({
            store: e,
            select: ({ ixRequest: r })=>r.stop,
            onChange: bX
        }), He({
            store: e,
            select: ({ ixRequest: r })=>r.clear,
            onChange: mX
        });
    }
    function AX(e) {
        He({
            store: e,
            select: ({ ixSession: r })=>r.mediaQueryKey,
            onChange: ()=>{
                Sn(e), Qv({
                    store: e,
                    elementApi: B
                }), yn({
                    store: e,
                    allowEvents: !0
                }), zv();
            }
        });
    }
    function RX(e, r) {
        let t = He({
            store: e,
            select: ({ ixSession: n })=>n.tick,
            onChange: (n)=>{
                r(n), t();
            }
        });
    }
    function CX({ rawData: e, defer: r }, t) {
        let n = ()=>{
            yn({
                store: t,
                rawData: e,
                allowEvents: !0
            }), zv();
        };
        r ? setTimeout(n, 0) : n();
    }
    function zv() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function NX(e, r) {
        let { actionTypeId: t, actionListId: n, actionItemId: i, eventId: a, allowEvents: o, immediate: u, testManual: c, verbose: l = !0 } = e, { rawData: d } = e;
        if (n && i && d && u) {
            let E = d.actionLists[n];
            E && (d = dX({
                actionList: E,
                actionItemId: i,
                rawData: d
            }));
        }
        if (yn({
            store: r,
            rawData: d,
            allowEvents: o,
            testManual: c
        }), n && t === ue.ActionTypeConsts.GENERAL_START_ACTION || ja(t)) {
            Ya({
                store: r,
                actionListId: n
            }), kv({
                store: r,
                actionListId: n,
                eventId: a
            });
            let E = Qa({
                store: r,
                eventId: a,
                actionListId: n,
                immediate: u,
                verbose: l
            });
            l && E && r.dispatch((0, X.actionListPlaybackChanged)({
                actionListId: n,
                isPlaying: !u
            }));
        }
    }
    function bX({ actionListId: e }, r) {
        e ? Ya({
            store: r,
            actionListId: e
        }) : Zv({
            store: r
        }), Sn(r);
    }
    function mX(e, r) {
        Sn(r), Qv({
            store: r,
            elementApi: B
        });
    }
    function yn({ store: e, rawData: r, allowEvents: t, testManual: n }) {
        let { ixSession: i } = e.getState();
        r && e.dispatch((0, X.rawDataImported)(r)), i.active || (e.dispatch((0, X.sessionInitialized)({
            hasBoundaryNodes: !!document.querySelector(In),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })), t && (xX(e), qX(), e.getState().ixSession.hasDefinedMediaQueries && AX(e)), e.dispatch((0, X.sessionStarted)()), PX(e, n));
    }
    function qX() {
        let { documentElement: e } = document;
        e.className.indexOf(Wv) === -1 && (e.className += ` ${Wv}`);
    }
    function PX(e, r) {
        let t = (n)=>{
            let { ixSession: i, ixParameters: a } = e.getState();
            i.active && (e.dispatch((0, X.animationFrameChanged)(n, a)), r ? RX(e, t) : requestAnimationFrame(t));
        };
        t(window.performance.now());
    }
    function Sn(e) {
        let { ixSession: r } = e.getState();
        if (r.active) {
            let { eventListeners: t } = r;
            t.forEach(LX), gX(), e.dispatch((0, X.sessionStopped)());
        }
    }
    function LX({ target: e, listenerParams: r }) {
        e.removeEventListener.apply(e, r);
    }
    function DX({ store: e, eventStateKey: r, eventTarget: t, eventId: n, eventConfig: i, actionListId: a, parameterGroup: o, smoothing: u, restingValue: c }) {
        let { ixData: l, ixSession: d } = e.getState(), { events: E } = l, p = E[n], { eventTypeId: g } = p, v = {}, _ = {}, T = [], { continuousActionGroups: I } = o, { id: h } = o;
        EX(g, i) && (h = pX(r, h));
        let y = d.hasBoundaryNodes && t ? B.getClosestElement(t, In) : null;
        I.forEach((A)=>{
            let { keyframe: R, actionItems: O } = A;
            O.forEach((S)=>{
                let { actionTypeId: C } = S, { target: N } = S.config;
                if (!N) return;
                let D = N.boundaryMode ? y : null, P = vX(N) + Wa + C;
                if (_[P] = MX(_[P], R, S), !v[P]) {
                    v[P] = !0;
                    let { config: w } = S;
                    Tn({
                        config: w,
                        event: p,
                        eventTarget: t,
                        elementRoot: D,
                        elementApi: B
                    }).forEach((L)=>{
                        T.push({
                            element: L,
                            key: P
                        });
                    });
                }
            });
        }), T.forEach(({ element: A, key: R })=>{
            let O = _[R], S = (0, Le.default)(O, "[0].actionItems[0]", {}), { actionTypeId: C } = S, N = hn(C) ? Ka(C)(A, S) : null, D = Ha({
                element: A,
                actionItem: S,
                elementApi: B
            }, N);
            za({
                store: e,
                element: A,
                eventId: n,
                actionListId: a,
                actionItem: S,
                destination: D,
                continuous: !0,
                parameterId: h,
                actionGroups: O,
                smoothing: u,
                restingValue: c,
                pluginInstance: N
            });
        });
    }
    function MX(e = [], r, t) {
        let n = [
            ...e
        ], i;
        return n.some((a, o)=>a.keyframe === r ? (i = o, !0) : !1), i == null && (i = n.length, n.push({
            keyframe: r,
            actionItems: []
        })), n[i].actionItems.push(t), n;
    }
    function xX(e) {
        let { ixData: r } = e.getState(), { eventTypeMap: t } = r;
        $v(e), (0, et.default)(t, (i, a)=>{
            let o = tX.default[a];
            if (!o) {
                console.warn(`IX2 event type not configured: ${a}`);
                return;
            }
            UX({
                logic: o,
                store: e,
                events: i
            });
        });
        let { ixSession: n } = e.getState();
        n.eventListeners.length && FX(e);
    }
    var wX = [
        "resize",
        "orientationchange"
    ];
    function FX(e) {
        let r = ()=>{
            $v(e);
        };
        wX.forEach((t)=>{
            window.addEventListener(t, r), e.dispatch((0, X.eventListenerAdded)(window, [
                t,
                r
            ]));
        }), r();
    }
    function $v(e) {
        let { ixSession: r, ixData: t } = e.getState(), n = window.innerWidth;
        if (n !== r.viewportWidth) {
            let { mediaQueries: i } = t;
            e.dispatch((0, X.viewportWidthChanged)({
                width: n,
                mediaQueries: i
            }));
        }
    }
    var GX = (e, r)=>(0, Z1.default)((0, eX.default)(e, r), J1.default), XX = (e, r)=>{
        (0, et.default)(e, (t, n)=>{
            t.forEach((i, a)=>{
                let o = n + Wa + a;
                r(i, n, o);
            });
        });
    }, VX = (e)=>{
        let r = {
            target: e.target,
            targets: e.targets
        };
        return Tn({
            config: r,
            elementApi: B
        });
    };
    function UX({ logic: e, store: r, events: t }) {
        BX(t);
        let { types: n, handler: i } = e, { ixData: a } = r.getState(), { actionLists: o } = a, u = GX(t, VX);
        if (!(0, k1.default)(u)) return;
        (0, et.default)(u, (E, p)=>{
            let g = t[p], { action: v, id: _, mediaQueries: T = a.mediaQueryKeys } = g, { actionListId: I } = v.config;
            IX(T, a.mediaQueryKeys) || r.dispatch((0, X.mediaQueriesDefined)()), v.actionTypeId === ue.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(g.config) ? g.config : [
                g.config
            ]).forEach((y)=>{
                let { continuousParameterGroupId: A } = y, R = (0, Le.default)(o, `${I}.continuousParameterGroups`, []), O = (0, $1.default)(R, ({ id: N })=>N === A), S = (y.smoothing || 0) / 100, C = (y.restingState || 0) / 100;
                O && E.forEach((N, D)=>{
                    let P = _ + Wa + D;
                    DX({
                        store: r,
                        eventStateKey: P,
                        eventTarget: N,
                        eventId: _,
                        eventConfig: y,
                        actionListId: I,
                        parameterGroup: O,
                        smoothing: S,
                        restingValue: C
                    });
                });
            }), (v.actionTypeId === ue.ActionTypeConsts.GENERAL_START_ACTION || ja(v.actionTypeId)) && kv({
                store: r,
                actionListId: I,
                eventId: _
            });
        });
        let c = (E)=>{
            let { ixSession: p } = r.getState();
            XX(u, (g, v, _)=>{
                let T = t[v], I = p.eventState[_], { action: h, mediaQueries: y = a.mediaQueryKeys } = T;
                if (!On(y, p.mediaQueryKey)) return;
                let A = (R = {})=>{
                    let O = i({
                        store: r,
                        element: g,
                        event: T,
                        eventConfig: R,
                        nativeEvent: E,
                        eventStateKey: _
                    }, I);
                    TX(O, I) || r.dispatch((0, X.eventStateChanged)(_, O));
                };
                h.actionTypeId === ue.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(T.config) ? T.config : [
                    T.config
                ]).forEach(A) : A();
            });
        }, l = (0, rX.default)(c, yX), d = ({ target: E = document, types: p, throttle: g })=>{
            p.split(" ").filter(Boolean).forEach((v)=>{
                let _ = g ? l : c;
                E.addEventListener(v, _), r.dispatch((0, X.eventListenerAdded)(E, [
                    v,
                    _
                ]));
            });
        };
        Array.isArray(n) ? n.forEach(d) : typeof n == "string" && d(e);
    }
    function BX(e) {
        if (!hX) return;
        let r = {}, t = "";
        for(let n in e){
            let { eventTypeId: i, target: a } = e[n], o = B.getQuerySelector(a);
            r[o] || (i === ue.EventTypeConsts.MOUSE_CLICK || i === ue.EventTypeConsts.MOUSE_SECOND_CLICK) && (r[o] = !0, t += o + "{cursor: pointer;touch-action: manipulation;}");
        }
        if (t) {
            let n = document.createElement("style");
            n.textContent = t, document.body.appendChild(n);
        }
    }
    function kv({ store: e, actionListId: r, eventId: t }) {
        let { ixData: n, ixSession: i } = e.getState(), { actionLists: a, events: o } = n, u = o[t], c = a[r];
        if (c && c.useFirstGroupAsInitialState) {
            let l = (0, Le.default)(c, "actionItemGroups[0].actionItems", []), d = (0, Le.default)(u, "mediaQueries", n.mediaQueryKeys);
            if (!On(d, i.mediaQueryKey)) return;
            l.forEach((E)=>{
                var p;
                let { config: g, actionTypeId: v } = E, _ = (g == null || (p = g.target) === null || p === void 0 ? void 0 : p.useEventTarget) === !0 ? {
                    target: u.target,
                    targets: u.targets
                } : g, T = Tn({
                    config: _,
                    event: u,
                    elementApi: B
                }), I = hn(v);
                T.forEach((h)=>{
                    let y = I ? Ka(v)(h, E) : null;
                    za({
                        destination: Ha({
                            element: h,
                            actionItem: E,
                            elementApi: B
                        }, y),
                        immediate: !0,
                        store: e,
                        element: h,
                        eventId: t,
                        actionItem: E,
                        actionListId: r,
                        pluginInstance: y
                    });
                });
            });
        }
    }
    function Zv({ store: e }) {
        let { ixInstances: r } = e.getState();
        (0, et.default)(r, (t)=>{
            if (!t.continuous) {
                let { actionListId: n, verbose: i } = t;
                $a(t, e), i && e.dispatch((0, X.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !1
                }));
            }
        });
    }
    function Ya({ store: e, eventId: r, eventTarget: t, eventStateKey: n, actionListId: i }) {
        let { ixInstances: a, ixSession: o } = e.getState(), u = o.hasBoundaryNodes && t ? B.getClosestElement(t, In) : null;
        (0, et.default)(a, (c)=>{
            let l = (0, Le.default)(c, "actionItem.config.target.boundaryMode"), d = n ? c.eventStateKey === n : !0;
            if (c.actionListId === i && c.eventId === r && d) {
                if (u && l && !B.elementContains(u, c.element)) return;
                $a(c, e), c.verbose && e.dispatch((0, X.actionListPlaybackChanged)({
                    actionListId: i,
                    isPlaying: !1
                }));
            }
        });
    }
    function Qa({ store: e, eventId: r, eventTarget: t, eventStateKey: n, actionListId: i, groupIndex: a = 0, immediate: o, verbose: u }) {
        var c;
        let { ixData: l, ixSession: d } = e.getState(), { events: E } = l, p = E[r] || {}, { mediaQueries: g = l.mediaQueryKeys } = p, v = (0, Le.default)(l, `actionLists.${i}`, {}), { actionItemGroups: _, useFirstGroupAsInitialState: T } = v;
        if (!_ || !_.length) return !1;
        a >= _.length && (0, Le.default)(p, "config.loop") && (a = 0), a === 0 && T && a++;
        let h = (a === 0 || a === 1 && T) && ja((c = p.action) === null || c === void 0 ? void 0 : c.actionTypeId) ? p.config.delay : void 0, y = (0, Le.default)(_, [
            a,
            "actionItems"
        ], []);
        if (!y.length || !On(g, d.mediaQueryKey)) return !1;
        let A = d.hasBoundaryNodes && t ? B.getClosestElement(t, In) : null, R = cX(y), O = !1;
        return y.forEach((S, C)=>{
            let { config: N, actionTypeId: D } = S, P = hn(D), { target: w } = N;
            if (!w) return;
            let L = w.boundaryMode ? A : null;
            Tn({
                config: N,
                event: p,
                eventTarget: t,
                elementRoot: L,
                elementApi: B
            }).forEach((V, le)=>{
                let fe = P ? Ka(D)(V, S) : null, nI = P ? OX(D)(V, S) : null;
                O = !0;
                let iI = R === C && le === 0, aI = lX({
                    element: V,
                    actionItem: S
                }), oI = Ha({
                    element: V,
                    actionItem: S,
                    elementApi: B
                }, fe);
                za({
                    store: e,
                    element: V,
                    actionItem: S,
                    eventId: r,
                    eventTarget: t,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: a,
                    isCarrier: iI,
                    computedStyle: aI,
                    destination: oI,
                    immediate: o,
                    verbose: u,
                    pluginInstance: fe,
                    pluginDuration: nI,
                    instanceDelay: h
                });
            });
        }), O;
    }
    function za(e) {
        var r;
        let { store: t, computedStyle: n } = e, i = (0, z1.default)(e, nX), { element: a, actionItem: o, immediate: u, pluginInstance: c, continuous: l, restingValue: d, eventId: E } = i, p = !l, g = sX(), { ixElements: v, ixSession: _, ixData: T } = t.getState(), I = oX(v, a), { refState: h } = v[I] || {}, y = B.getRefType(a), A = _.reducedMotion && ue.ReducedMotionTypes[o.actionTypeId], R;
        if (A && l) switch((r = T.events[E]) === null || r === void 0 ? void 0 : r.eventTypeId){
            case ue.EventTypeConsts.MOUSE_MOVE:
            case ue.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                R = d;
                break;
            default:
                R = 0.5;
                break;
        }
        let O = fX(a, h, n, o, B, c);
        if (t.dispatch((0, X.instanceAdded)((0, Q1.default)({
            instanceId: g,
            elementId: I,
            origin: O,
            refType: y,
            skipMotion: A,
            skipToValue: R
        }, i))), Jv(document.body, "ix2-animation-started", g), u) {
            jX(t, g);
            return;
        }
        He({
            store: t,
            select: ({ ixInstances: S })=>S[g],
            onChange: eI
        }), p && t.dispatch((0, X.instanceStarted)(g, _.tick));
    }
    function $a(e, r) {
        Jv(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: r.getState()
        });
        let { elementId: t, actionItem: n } = e, { ixElements: i } = r.getState(), { ref: a, refType: o } = i[t] || {};
        o === Yv && _X(a, n, B), r.dispatch((0, X.instanceRemoved)(e.id));
    }
    function Jv(e, r, t) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(r, !0, !0, t), e.dispatchEvent(n);
    }
    function jX(e, r) {
        let { ixParameters: t } = e.getState();
        e.dispatch((0, X.instanceStarted)(r, 0)), e.dispatch((0, X.animationFrameChanged)(performance.now(), t));
        let { ixInstances: n } = e.getState();
        eI(n[r], e);
    }
    function eI(e, r) {
        let { active: t, continuous: n, complete: i, elementId: a, actionItem: o, actionTypeId: u, renderType: c, current: l, groupIndex: d, eventId: E, eventTarget: p, eventStateKey: g, actionListId: v, isCarrier: _, styleProp: T, verbose: I, pluginInstance: h } = e, { ixData: y, ixSession: A } = r.getState(), { events: R } = y, O = R[E] || {}, { mediaQueries: S = y.mediaQueryKeys } = O;
        if (On(S, A.mediaQueryKey) && (n || t || i)) {
            if (l || c === aX && i) {
                r.dispatch((0, X.elementStateChanged)(a, u, l, o));
                let { ixElements: C } = r.getState(), { ref: N, refType: D, refState: P } = C[a] || {}, w = P && P[u];
                (D === Yv || hn(u)) && uX(N, P, w, E, o, T, B, c, h);
            }
            if (i) {
                if (_) {
                    let C = Qa({
                        store: r,
                        eventId: E,
                        eventTarget: p,
                        eventStateKey: g,
                        actionListId: v,
                        groupIndex: d + 1,
                        verbose: I
                    });
                    I && !C && r.dispatch((0, X.actionListPlaybackChanged)({
                        actionListId: v,
                        isPlaying: !1
                    }));
                }
                $a(e, r);
            }
        }
    }
});
var tI = s((Se)=>{
    "use strict";
    var WX = Me().default, HX = ne().default;
    Object.defineProperty(Se, "__esModule", {
        value: !0
    });
    Se.actions = void 0;
    Se.destroy = rI;
    Se.init = $X;
    Se.setEnv = zX;
    Se.store = void 0;
    Xu();
    var KX = bi(), YX = HX(a_()), ka = Ba(), QX = WX(on());
    Se.actions = QX;
    var An = (0, KX.createStore)(YX.default);
    Se.store = An;
    function zX(e) {
        e() && (0, ka.observeRequests)(An);
    }
    function $X(e) {
        rI(), (0, ka.startEngine)({
            store: An,
            rawData: e,
            allowEvents: !0
        });
    }
    function rI() {
        (0, ka.stopEngine)(An);
    }
});
function wH() {
    let e = tI();
    return e.setEnv(()=>!0), e;
}
 /*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/ 

;// CONCATENATED MODULE: ./devlink/devlinkContext.js




const DevLinkContext = /*#__PURE__*/ react_default().createContext({});
const DevLinkProvider = ({ children, ...context })=>/*#__PURE__*/ jsx_runtime_.jsx(DevLinkContext.Provider, {
        value: context,
        children: /*#__PURE__*/ jsx_runtime_.jsx(InteractionsProvider, {
            createEngine: wH,
            children: children
        })
    });

;// CONCATENATED MODULE: ./devlink/_Builtin/Basic.js




function Block({ tag = "div", ...props }) {
    return /*#__PURE__*/ react_.createElement(tag, props);
}
function Span(props) {
    return /*#__PURE__*/ _jsx("span", {
        ...props
    });
}
function Blockquote(props) {
    return /*#__PURE__*/ _jsx("blockquote", {
        ...props
    });
}
const Basic_Link = function Link({ options = {
    href: "#"
}, className = "", button = false, ...props }) {
    const { renderLink: UserLink } = react_.useContext(DevLinkContext);
    if (button) className += " w-button";
    if (UserLink) {
        return /*#__PURE__*/ jsx_runtime_.jsx(UserLink, {
            className: className,
            ...options,
            ...props,
            children: props.children
        });
    }
    const { href, target, preload = "none" } = options;
    const shouldRenderResource = preload !== "none" && typeof href === "string" && !href.startsWith("#");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: href,
                target: target,
                className: className,
                ...props
            }),
            shouldRenderResource && /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: preload,
                href: href
            })
        ]
    });
};
function List({ tag = "ul", unstyled = true, className = "", ...props }) {
    return /*#__PURE__*/ React.createElement(tag, {
        role: "list",
        className: className + (unstyled ? " w-list-unstyled" : ""),
        ...props
    });
}
function ListItem(props) {
    return /*#__PURE__*/ React.createElement("li", props);
}
function Image(props) {
    const { renderImage: UserImage } = react_.useContext(DevLinkContext);
    return UserImage ? /*#__PURE__*/ jsx_runtime_.jsx(UserImage, {
        ...props
    }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
        ...props
    });
}
function Section({ tag = "section", ...props }) {
    return /*#__PURE__*/ react_.createElement(tag, props);
}
const Basic_Container = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Container({ tag = "div", className = "", ...props }, ref) {
    return /*#__PURE__*/ React.createElement(tag, {
        className: className + " w-container",
        ref,
        ...props
    });
})));
function BlockContainer({ tag = "div", className = "", ...props }) {
    return /*#__PURE__*/ React.createElement(tag, {
        className: className + " w-layout-blockcontainer",
        ...props
    });
}
function HFlex({ tag = "div", className = "", ...props }) {
    return /*#__PURE__*/ React.createElement(tag, {
        className: className + " w-layout-hflex",
        ...props
    });
}
function VFlex({ tag = "div", className = "", ...props }) {
    return /*#__PURE__*/ React.createElement(tag, {
        className: className + " w-layout-vflex",
        ...props
    });
}
function Layout({ tag = "div", className = "", ...props }) {
    return /*#__PURE__*/ React.createElement(tag, {
        className: className + " w-layout-layout wf-layout-layout",
        ...props
    });
}
function Cell({ tag = "div", className = "", ...props }) {
    return /*#__PURE__*/ React.createElement(tag, {
        className: className + " w-layout-cell",
        ...props
    });
}
function HtmlEmbed({ tag = "div", className = "", value = "", ...props }) {
    return /*#__PURE__*/ react_.createElement(tag, {
        className: className + " w-embed",
        dangerouslySetInnerHTML: {
            __html: removeUnescaped(value)
        },
        ...props
    });
}
function Grid({ tag = "div", className = "", ...props }) {
    return /*#__PURE__*/ react_.createElement(tag, {
        className: className + " w-layout-grid",
        ...props
    });
}
function Icon({ widget, className = "", ...props }) {
    return /*#__PURE__*/ React.createElement("div", {
        className: className + ` w-icon-${widget.icon}`,
        ...props
    });
}
function Column({ tag = "div", className = "", columnClasses = "", ...props }) {
    return /*#__PURE__*/ React.createElement(tag, {
        className: className + " w-col " + columnClasses,
        ...props
    });
}
const transformWidths = (width, index)=>{
    const widths = width?.split("|") ?? [];
    return widths.length > 1 ? widths[index] : width;
};
const columnClass = (width, key)=>{
    if (/stack$/.test(width)) return "w-col-stack";
    if (/main$/.test(key)) return `w-col-${width}`;
    return `w-col-${key}-${width}`;
};
function Row({ tag = "div", className = "", grid, children, ...props }) {
    return /*#__PURE__*/ React.createElement(tag, {
        className: className + " w-row",
        ...props
    }, grid ? React.Children.map(children, (child, index)=>{
        if (child && typeof child === "object" && child.type !== Column) return child;
        const columnClasses = Object.entries(grid.cols ?? {}).reduce((acc, [key, value])=>{
            const width = transformWidths(value === "custom" ? "6|6" : value, index);
            acc.add(width ? columnClass(width, key) : "");
            return acc;
        }, new Set());
        return /*#__PURE__*/ React.cloneElement(child, {
            columnClasses: [
                ...columnClasses
            ].join(" "),
            ...child.props
        });
    }) : children);
}
function NotSupported({ _atom = "" }) {
    return /*#__PURE__*/ _jsx("div", {
        children: `This builtin is not currently supported: ${_atom}`
    });
}

;// CONCATENATED MODULE: ./devlink/_Builtin/Tabs.js




const tabsContext = /*#__PURE__*/ react_.createContext({
    current: "",
    onTabClick: ()=>{},
    onLinkKeyDown: ()=>{}
});
function TabsWrapper({ className = "", fadeIn, fadeOut, easing, current: initialCurrent, ...props }) {
    const [current, setCurrent] = React.useState("");
    const changeTab = React.useCallback((next)=>{
        function updateTab() {
            setCurrent(()=>{
                const nextTabHeader = document.querySelector(`.w-tab-link[data-w-tab="${next}"]`);
                nextTabHeader?.focus();
                return next;
            });
        }
        const currentTab = document.querySelector(`.w-tab-pane[data-w-tab="${current}"]`);
        const nextTab = document.querySelector(`.w-tab-pane[data-w-tab="${next}"]`);
        const easingFn = EASING_FUNCTIONS[easing] ?? "ease";
        const animation = currentTab?.animate([
            {
                opacity: 1
            },
            {
                opacity: 0
            }
        ], {
            duration: fadeOut,
            fill: "forwards",
            easing: easingFn
        });
        if (animation) {
            animation.onfinish = ()=>{
                updateTab();
                nextTab?.animate([
                    {
                        opacity: 0
                    },
                    {
                        opacity: 1
                    }
                ], {
                    duration: fadeIn,
                    fill: "forwards",
                    easing: easingFn
                });
            };
        } else {
            updateTab();
        }
    }, [
        current,
        easing,
        fadeIn,
        fadeOut
    ]);
    const firstRender = React.useRef(true);
    useLayoutEffect(()=>{
        if (!firstRender.current) return;
        firstRender.current = false;
        setTimeout(()=>{
            changeTab(initialCurrent);
        }, 1);
    }, [
        changeTab,
        initialCurrent
    ]);
    const onTabClick = debounce(changeTab);
    const onLinkKeyDown = debounce((event)=>{
        event.preventDefault();
        const currentTab = document.querySelector(`.w-tab-pane[data-w-tab="${current}"]`);
        const allTabs = document.querySelectorAll(".w-tab-pane");
        const firstTab = allTabs[0];
        const lastTab = allTabs[allTabs.length - 1];
        const nextTab = (()=>{
            switch(event.key){
                case "ArrowUp":
                case "ArrowLeft":
                    return currentTab.previousElementSibling ?? lastTab;
                case "ArrowDown":
                case "ArrowRight":
                    return currentTab.nextElementSibling ?? firstTab;
                case "Home":
                    return firstTab;
                case "End":
                    return lastTab;
            }
        })();
        if (nextTab) changeTab(nextTab.getAttribute("data-w-tab"));
    });
    return /*#__PURE__*/ _jsx(tabsContext.Provider, {
        value: {
            current,
            onTabClick,
            onLinkKeyDown
        },
        children: /*#__PURE__*/ _jsx("div", {
            ...props,
            className: cj(className, "w-tabs")
        })
    });
}
function TabsMenu({ tag = "div", className = "", ...props }) {
    return /*#__PURE__*/ React.createElement(tag, {
        ...props,
        className: cj(className, "w-tab-menu"),
        role: "tablist"
    });
}
function TabsLink({ className = "", ...props }) {
    const { current, onTabClick, onLinkKeyDown } = React.useContext(tabsContext);
    const isCurrent = current === props["data-w-tab"];
    const ref = React.useCallback((node)=>{
        if (!node) return;
        triggerIXEvent(node, isCurrent);
    }, [
        isCurrent
    ]);
    return /*#__PURE__*/ _jsx("a", {
        ...props,
        ref: ref,
        className: cj(className, "w-inline-block w-tab-link", isCurrent && "w--current"),
        onClick: ()=>onTabClick(props["data-w-tab"]),
        onKeyDown: onLinkKeyDown,
        role: "tab",
        tabIndex: isCurrent ? 0 : -1,
        "aria-selected": isCurrent,
        "aria-controls": props["data-w-tab"]
    });
}
function TabsContent({ tag = "div", className = "", ...props }) {
    return /*#__PURE__*/ React.createElement(tag, {
        ...props,
        className: cj(className, "w-tab-content")
    });
}
function TabsPane({ tag = "div", className = "", ...props }) {
    const { current } = React.useContext(tabsContext);
    const isCurrent = current === props["data-w-tab"];
    return /*#__PURE__*/ React.createElement(tag, {
        ...props,
        className: cj(className, "w-tab-pane", isCurrent && "w--tab-active"),
        role: "tabpanel",
        "aria-labelledby": props["data-w-tab"]
    });
}

;// CONCATENATED MODULE: ./devlink/_Builtin/Navbar.js




const BREAKPOINTS = {
    medium: 991,
    small: 767,
    tiny: 479
};
function getLinksList(root) {
    return root.querySelectorAll(".w-nav-menu .w-nav-link");
}
const Navbar_NavbarContext = /*#__PURE__*/ react_.createContext({
    animDirect: 1,
    animOver: false,
    animation: "animation",
    collapse: "medium",
    docHeight: false,
    duration: 400,
    easing2: "ease",
    easing: "ease",
    getBodyHeight: ()=>{},
    getOverlayHeight: ()=>{},
    isOpen: false,
    noScroll: false,
    toggleOpen: ()=>{},
    navbarMounted: false,
    menu: undefined,
    root: undefined,
    setFocusedLink: ()=>{}
});
function getAnimationKeyframes({ axis = "Y", start, end }) {
    const t = `translate${axis}`;
    return [
        {
            transform: `${t}(${start}px)`
        },
        {
            transform: `${t}(${end}px)`
        }
    ];
}
function NavbarWrapper(props) {
    const { animation, docHeight, easing, easing2, duration, noScroll } = props.config;
    const root = React.useRef(null);
    const menu = React.useRef(null);
    const animOver = /^over/.test(animation);
    const animDirect = /left$/.test(animation) ? -1 : 1;
    const [focusedLink, setFocusedLink] = React.useState(-1);
    const getBodyHeight = React.useCallback(()=>{
        if (isServer) return;
        return docHeight ? document.documentElement.scrollHeight : document.body.scrollHeight;
    }, [
        docHeight
    ]);
    const getOverlayHeight = React.useCallback(()=>{
        if (isServer || !root.current) return;
        let height = getBodyHeight();
        if (!height) return;
        const style = getComputedStyle(root.current);
        if (!animOver && style.position !== "fixed") {
            height -= root.current.offsetHeight;
        }
        return height;
    }, [
        animOver,
        getBodyHeight
    ]);
    const getOffsetHeight = React.useCallback(()=>{
        if (!root.current || !menu.current) return 0;
        return root.current.offsetHeight + menu.current.offsetHeight;
    }, []);
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleOpen = debounce(()=>{
        if (!menu.current) return;
        if (isOpen) {
            const keyframes = animOver ? getAnimationKeyframes({
                axis: "X",
                start: 0,
                end: animDirect * menu.current.offsetWidth
            }) : getAnimationKeyframes({
                start: 0,
                end: -getOffsetHeight()
            });
            const anim = menu.current.animate(keyframes, {
                easing: EASING_FUNCTIONS[easing2] ?? "ease",
                duration,
                fill: "forwards"
            });
            anim.onfinish = ()=>{
                setIsOpen(!isOpen);
            };
            return;
        }
        setFocusedLink(-1);
        setIsOpen(!isOpen);
    });
    useLayoutEffect(()=>{
        if (!menu.current) return;
        if (isOpen) {
            const keyframes = animOver ? getAnimationKeyframes({
                axis: "X",
                start: animDirect * menu.current.offsetWidth,
                end: 0
            }) : getAnimationKeyframes({
                start: -getOffsetHeight(),
                end: 0
            });
            menu.current.animate(keyframes, {
                easing: EASING_FUNCTIONS[easing] ?? "ease",
                duration,
                fill: "forwards"
            });
        }
    }, [
        animDirect,
        animOver,
        duration,
        easing,
        getBodyHeight,
        getOffsetHeight,
        isOpen
    ]);
    useLayoutEffect(()=>{
        if (isOpen && noScroll) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "";
        }
        return ()=>{
            document.body.style.overflowY = "";
        };
    }, [
        isOpen,
        noScroll
    ]);
    const closeOnResize = React.useCallback(()=>setIsOpen(false), [
        setIsOpen
    ]);
    useResizeObserver(root, closeOnResize, {
        onlyWidth: true
    });
    React.useEffect(()=>{
        if (root.current) {
            const links = getLinksList(root.current);
            links[focusedLink ?? 0]?.focus();
        }
    }, [
        focusedLink
    ]);
    return /*#__PURE__*/ _jsx(Navbar_NavbarContext.Provider, {
        value: {
            ...props.config,
            root,
            menu,
            animOver,
            animDirect,
            getBodyHeight,
            getOverlayHeight,
            isOpen,
            toggleOpen,
            navbarMounted: true,
            setFocusedLink
        },
        children: /*#__PURE__*/ _jsx(Navbar, {
            ...props
        })
    });
}
const maybeExtractChildMenu = (children, isOpen)=>{
    if (!isOpen) return {
        childMenu: null,
        rest: children
    };
    const { extracted, tree } = extractElement(React.Children.toArray(children), NavbarMenu);
    return {
        childMenu: extracted,
        rest: tree
    };
};
function Navbar({ tag = "div", className = "", children, config, ...props }) {
    const { root, collapse, setFocusedLink } = React.useContext(Navbar_NavbarContext);
    const [shouldExtractMenu, setShouldExtractMenu] = React.useState(true);
    const extractMenuCallback = React.useCallback((entry)=>{
        setShouldExtractMenu(entry.contentRect.width <= BREAKPOINTS[collapse]);
    }, [
        setShouldExtractMenu
    ]);
    const bodyRef = React.useRef(typeof document !== "undefined" ? document.body : null);
    useResizeObserver(bodyRef, extractMenuCallback);
    const { childMenu, rest } = React.useMemo(()=>maybeExtractChildMenu(children, shouldExtractMenu), [
        children,
        shouldExtractMenu
    ]);
    const handleFocus = (e)=>{
        const linkList = root.current ? Array.from(getLinksList(root.current)) : [];
        const linkAmount = linkList.length;
        switch(e.key){
            case KEY_CODES.ARROW_LEFT:
            case KEY_CODES.ARROW_UP:
                {
                    e.preventDefault();
                    setFocusedLink((prev)=>Math.max(prev - 1, 0));
                    break;
                }
            case KEY_CODES.ARROW_RIGHT:
            case KEY_CODES.ARROW_DOWN:
                {
                    e.preventDefault();
                    setFocusedLink((prev)=>Math.min(prev + 1, linkAmount - 1));
                    break;
                }
            case KEY_CODES.HOME:
                {
                    e.preventDefault();
                    setFocusedLink(0);
                    break;
                }
            case KEY_CODES.END:
                {
                    e.preventDefault();
                    setFocusedLink(linkAmount - 1);
                    break;
                }
            case KEY_CODES.TAB:
                {
                    setTimeout(()=>{
                        setFocusedLink(linkList.findIndex((link)=>link === document.activeElement));
                    }, 0);
                    break;
                }
            case KEY_CODES.SPACE:
                {
                    e.preventDefault();
                    break;
                }
            default:
                {
                    return;
                }
        }
    };
    return /*#__PURE__*/ React.createElement(tag, {
        ...props,
        className: cj(className, "w-nav"),
        "data-collapse": config.collapse,
        "data-animation": config.animation,
        ref: root,
        onKeyDown: handleFocus
    }, /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            rest,
            /*#__PURE__*/ _jsx(NavbarOverlay, {
                children: childMenu
            })
        ]
    }));
}
function NavbarOverlay({ children }) {
    const { isOpen, getOverlayHeight, toggleOpen } = React.useContext(Navbar_NavbarContext);
    const overlayToggleOpen = React.useCallback((e)=>{
        if (e.target === e.currentTarget) {
            toggleOpen();
        }
    }, [
        toggleOpen
    ]);
    return /*#__PURE__*/ _jsx("div", {
        className: "w-nav-overlay",
        id: "w-nav-overlay",
        style: {
            display: isOpen ? "block" : "none",
            height: getOverlayHeight(),
            width: isOpen ? "100%" : 0
        },
        onClick: overlayToggleOpen,
        children: children
    });
}
function NavbarContainer({ children, ...props }) {
    const ref = React.useRef(null);
    const { isOpen } = React.useContext(Navbar_NavbarContext);
    const updateLinkStyles = React.useCallback((entry)=>{
        const { maxWidth: containerMaxWidth } = getComputedStyle(entry.target);
        document.querySelectorAll(".w-nav-menu>.w-dropdown,.w-nav-menu>.w-nav-link").forEach((node)=>{
            if (!(node instanceof HTMLElement)) return;
            if (!isOpen) {
                node.style.maxWidth = "";
                return;
            }
            const { maxWidth } = getComputedStyle(node);
            node.style.maxWidth = !maxWidth || maxWidth === "none" || maxWidth === containerMaxWidth ? containerMaxWidth : "";
        });
    }, [
        isOpen
    ]);
    useResizeObserver(ref, updateLinkStyles);
    return /*#__PURE__*/ _jsx(Container, {
        ...props,
        ref: ref,
        children: children
    });
}
function NavbarBrand({ className = "", ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
        ...props,
        className: utils_cj(className, "w-nav-brand")
    });
}
function NavbarMenu({ tag = "nav", className = "", ...props }) {
    const { getBodyHeight, animOver, isOpen, menu } = React.useContext(Navbar_NavbarContext);
    return /*#__PURE__*/ React.createElement(tag, {
        ...props,
        className: cj(className, "w-nav-menu"),
        ...isOpen ? {
            "data-nav-menu-open": ""
        } : {},
        style: animOver ? {
            height: getBodyHeight()
        } : {},
        ref: menu
    });
}
function NavbarLink({ className = "", ...props }) {
    const { isOpen } = React.useContext(Navbar_NavbarContext);
    return /*#__PURE__*/ _jsx(Link, {
        ...props,
        className: cj(className, "w-nav-link", isOpen && "w--nav-link-open")
    });
}
function NavbarButton({ tag = "div", className = "", ...props }) {
    const { isOpen, toggleOpen } = React.useContext(Navbar_NavbarContext);
    return /*#__PURE__*/ React.createElement(tag, {
        ...props,
        "aria-label": "menu",
        "aria-expanded": isOpen ? "true" : "false",
        "aria-haspopup": "menu",
        "aria-controls": "w-nav-overlay",
        role: "button",
        tabIndex: 0,
        className: cj(className, "w-nav-button", isOpen && "w--open"),
        onClick: toggleOpen,
        onKeyDown: (e)=>{
            if (e.key === KEY_CODES.ENTER || e.key === KEY_CODES.SPACE) {
                e.preventDefault();
                toggleOpen();
            }
        }
    });
}

;// CONCATENATED MODULE: ./devlink/_Builtin/Dropdown.js






function Dropdown_getLinksList(root) {
    return root.querySelectorAll(".w-dropdown-list .w-dropdown-link");
}
const DropdownContext = /*#__PURE__*/ react_.createContext({
    root: undefined,
    isOpen: false,
    toggleOpen: ()=>{},
    setFocusedLink: ()=>{},
    hover: false
});
const INITIAL_DROPDOWN_STATE = {
    isOpen: false,
    openingCount: 0
};
function DropdownWrapper({ delay, hover, ...props }) {
    const root = React.useRef(null);
    const [{ isOpen }, setIsOpen] = React.useState(INITIAL_DROPDOWN_STATE);
    const [focusedLink, setFocusedLink] = React.useState(-1);
    const closeTimeoutRef = React.useRef();
    React.useEffect(()=>{
        return ()=>{
            clearTimeout(closeTimeoutRef.current);
        };
    }, []);
    const toggleOpen = React.useCallback(()=>{
        clearTimeout(closeTimeoutRef.current);
        setFocusedLink(-1);
        setIsOpen(({ openingCount, ...rest })=>({
                ...rest,
                openingCount: openingCount + 1
            }));
        if (delay > 0 && isOpen) {
            closeTimeoutRef.current = setTimeout(()=>{
                setIsOpen(({ openingCount })=>({
                        openingCount,
                        isOpen: openingCount % 2 === 1
                    }));
            }, delay);
        } else {
            setIsOpen(({ openingCount })=>({
                    openingCount,
                    isOpen: openingCount % 2 === 1
                }));
        }
    }, [
        hover,
        isOpen,
        delay
    ]);
    const closeDropdown = React.useCallback(()=>setIsOpen(INITIAL_DROPDOWN_STATE), [
        setIsOpen
    ]);
    useClickOut(root, closeDropdown);
    useIXEvent(root.current, isOpen);
    React.useEffect(()=>{
        if (root.current) {
            const links = Dropdown_getLinksList(root.current);
            links[focusedLink ?? 0]?.focus();
        }
    }, [
        focusedLink
    ]);
    return /*#__PURE__*/ _jsx(DropdownContext.Provider, {
        value: {
            root,
            isOpen,
            toggleOpen,
            setFocusedLink,
            hover
        },
        children: /*#__PURE__*/ _jsx(Dropdown, {
            ...props
        })
    });
}
function Dropdown({ tag = "div", className = "", ...props }) {
    const { root, setFocusedLink, hover, toggleOpen } = React.useContext(DropdownContext);
    const { isOpen: isNavbarOpen } = React.useContext(NavbarContext);
    const handleFocus = (e)=>{
        const linkList = root.current ? Array.from(Dropdown_getLinksList(root.current)) : [];
        const linkAmount = linkList.length;
        switch(e.key){
            case KEY_CODES.ARROW_LEFT:
            case KEY_CODES.ARROW_UP:
                {
                    e.preventDefault();
                    setFocusedLink((prev)=>Math.max(prev - 1, 0));
                    break;
                }
            case KEY_CODES.ARROW_RIGHT:
            case KEY_CODES.ARROW_DOWN:
                {
                    e.preventDefault();
                    setFocusedLink((prev)=>Math.min(prev + 1, linkAmount - 1));
                    break;
                }
            case KEY_CODES.HOME:
                {
                    e.preventDefault();
                    setFocusedLink(0);
                    break;
                }
            case KEY_CODES.END:
                {
                    e.preventDefault();
                    setFocusedLink(linkAmount - 1);
                    break;
                }
            case KEY_CODES.TAB:
                {
                    setTimeout(()=>{
                        setFocusedLink(linkList.findIndex((link)=>link === document.activeElement));
                    }, 0);
                    break;
                }
            case KEY_CODES.SPACE:
                {
                    e.preventDefault();
                    break;
                }
            default:
                {
                    return;
                }
        }
    };
    return /*#__PURE__*/ React.createElement(tag, {
        ...props,
        ref: root,
        onKeyDown: handleFocus,
        onMouseEnter: ()=>{
            if (hover) {
                toggleOpen();
            }
        },
        onMouseLeave: ()=>{
            if (hover) {
                toggleOpen();
            }
        },
        className: cj(className, "w-dropdown", isNavbarOpen && "w--nav-dropdown-open")
    });
}
function DropdownToggle({ tag = "div", className = "", ...props }) {
    const { isOpen, toggleOpen, hover } = React.useContext(DropdownContext);
    const { isOpen: isNavbarOpen } = React.useContext(NavbarContext);
    return /*#__PURE__*/ React.createElement(tag, {
        ...props,
        "aria-haspopup": "menu",
        "aria-expanded": isOpen,
        className: cj(className, "w-dropdown-toggle", isNavbarOpen && "w--nav-dropdown-toggle-open"),
        onClick: ()=>{
            if (!hover) toggleOpen();
        },
        onKeyDown: (e)=>{
            if (e.key === KEY_CODES.ENTER || e.key === KEY_CODES.SPACE) {
                toggleOpen();
                e.stopPropagation();
                return e.preventDefault();
            }
        },
        role: "button",
        tabIndex: 0
    });
}
function DropdownList({ tag = "nav", className = "", ...props }) {
    const { isOpen } = React.useContext(DropdownContext);
    const { isOpen: isNavbarOpen } = React.useContext(NavbarContext);
    return /*#__PURE__*/ React.createElement(tag, {
        ...props,
        className: cj(className, "w-dropdown-list", isOpen && "w--open", isNavbarOpen && "w--nav-dropdown-list-open")
    });
}
function DropdownLink({ className = "", ...props }) {
    const { isOpen: isNavbarOpen } = React.useContext(NavbarContext);
    return /*#__PURE__*/ React.createElement(Link, {
        ...props,
        className: cj(className, "w-dropdown-link", isNavbarOpen && "w--nav-link-open"),
        tabIndex: 0
    });
}

;// CONCATENATED MODULE: ./devlink/_Builtin/Facebook.js



function Facebook({ className = "", layout = "standard", width = 250, height = 50, url = "https://facebook.com/webflow", locale = "en_US", ...props }) {
    if (!isUrl(url)) {
        url = "https://facebook.com/webflow";
    }
    if (!/^http/.test(url)) {
        url = "http://" + url;
    }
    const params = {
        href: url,
        layout: layout,
        locale: locale,
        action: "like",
        show_faces: "false",
        share: "false"
    };
    const queryParams = Object.keys(params).map((key)=>`${key}=${encodeURIComponent(params[key])}`);
    const frameSrc = `https://www.facebook.com/plugins/like.php?${queryParams.join("&")}`;
    return /*#__PURE__*/ _jsx("div", {
        ...props,
        className: className + " w-widget w-widget-facebook",
        children: /*#__PURE__*/ _jsx("iframe", {
            title: "Facebook Like Button",
            src: frameSrc,
            style: {
                border: "none",
                overflow: "hidden",
                width,
                height
            }
        })
    });
}

;// CONCATENATED MODULE: ./devlink/_Builtin/Typography.js


function Heading({ tag = "h1", ...props }) {
    return /*#__PURE__*/ react_.createElement(tag, props);
}
function Paragraph(props) {
    return /*#__PURE__*/ react_.createElement("p", props);
}
function Emphasized(props) {
    return /*#__PURE__*/ _jsx("em", {
        ...props
    });
}
function Strong(props) {
    return /*#__PURE__*/ react_.createElement("strong", props);
}
function Figure({ className = "", figure, ...props }) {
    const { type, align } = figure;
    if (align) {
        className += `w-richtext-align-${align} `;
    }
    if (type) {
        className += `w-richtext-align-${type} `;
    }
    return /*#__PURE__*/ _jsx("figure", {
        className: className,
        ...props
    });
}
function Figcaption(props) {
    return /*#__PURE__*/ _jsx("figcaption", {
        ...props
    });
}
function Subscript(props) {
    return /*#__PURE__*/ _jsx("sub", {
        ...props
    });
}
function Superscript(props) {
    return /*#__PURE__*/ _jsx("sup", {
        ...props
    });
}
function RichText({ tag = "div", className = "", ...props }) {
    return /*#__PURE__*/ React.createElement(tag, {
        className: className + " w-richtext",
        ...props
    });
}

;// CONCATENATED MODULE: ./devlink/_Builtin/Twitter.js



const modeDict = {
    follow: "createFollowButton",
    tweet: "createShareButton"
};
const sizeDict = {
    m: "medium",
    l: "large"
};
function Twitter({ className = "", url = "https://webflow.com", mode = "tweet", size = "m", text = "Check out this site", ...props }) {
    const ref = React.useRef(null);
    if (!isUrl(url)) {
        if (mode === "tweet") {
            url = "https://webflow.com/";
        } else if (mode === "follow") {
            url = "webflow";
        }
    }
    React.useEffect(()=>{
        let isComponentMounted = true;
        loadScript("https://platform.twitter.com/widgets.js").then(()=>{
            if (isComponentMounted) {
                if (window.twttr) {
                    const twitterButtonOption = window.twttr.widgets[modeDict[mode]];
                    if (twitterButtonOption) {
                        twitterButtonOption(url, ref?.current, {
                            size: sizeDict[size],
                            text
                        });
                    }
                }
            }
        });
        return ()=>{
            isComponentMounted = false;
        };
    }, []);
    return /*#__PURE__*/ _jsx("div", {
        ...props,
        className: className + " w-widget w-widget-twitter",
        ref: ref
    });
}

;// CONCATENATED MODULE: ./devlink/_Builtin/Form.js



function FormWrapper({ className = "", state: initialState = "normal", onSubmit, children, ...props }) {
    const [state, setState] = React.useState(initialState);
    return /*#__PURE__*/ React.createElement("div", {
        className: className + " w-form",
        ...props
    }, React.Children.map(children, (child)=>{
        if (child.type === FormForm) {
            return /*#__PURE__*/ React.cloneElement(child, {
                ...child.props,
                onSubmit: (e)=>{
                    try {
                        e.preventDefault();
                        if (window.grecaptcha) {
                            if (!window.grecaptcha?.getResponse()) {
                                alert(`Please confirm you’re not a robot.`);
                                return;
                            }
                        }
                        if (onSubmit) {
                            onSubmit(e);
                            setState("success");
                        }
                    } catch (err) {
                        setState("error");
                        throw err;
                    }
                }
            });
        }
        if (child.type === FormSuccessMessage) {
            return /*#__PURE__*/ React.cloneElement(child, {
                ...child.props,
                style: {
                    display: state == "success" ? "block" : "none"
                }
            });
        }
        if (child.type === FormErrorMessage) {
            return /*#__PURE__*/ React.cloneElement(child, {
                ...child.props,
                style: {
                    display: state == "error" ? "block" : "none"
                }
            });
        }
        return child;
    }));
}
function FormForm(props) {
    return /*#__PURE__*/ React.createElement("form", props);
}
function FormBlockLabel(props) {
    return /*#__PURE__*/ react_default().createElement("label", props);
}
function FormTextInput({ className = "", ...props }) {
    return /*#__PURE__*/ react_default().createElement("input", {
        type: "text",
        className: className + " w-input",
        ...props
    });
}
function FormTextarea({ className = "", ...props }) {
    return /*#__PURE__*/ React.createElement("input", {
        type: "textarea",
        className: className + " w-input",
        ...props
    });
}
function FormInlineLabel({ className = "", ...props }) {
    return /*#__PURE__*/ React.createElement("span", {
        className: className + " w-form-label",
        ...props
    });
}
function FormCheckboxWrapper({ className = "", ...props }) {
    return /*#__PURE__*/ React.createElement("label", {
        className: className + " w-checkbox",
        ...props
    });
}
function FormRadioWrapper({ className = "", ...props }) {
    return /*#__PURE__*/ React.createElement("label", {
        className: className + " w-radio",
        ...props
    });
}
const HIDE_DEFAULT_INPUT_STYLES = {
    opacity: 0,
    position: "absolute",
    zIndex: -1
};
const CHECKED_CLASS = "w--redirected-checked";
const FOCUSED_CLASS = "w--redirected-focus";
const FOCUSED_VISIBLE_CLASS = "w--redirected-focus-visible";
function FormBooleanInput({ className = "", checked = false, type = "checkbox", inputType, ...props }) {
    const [isChecked, setIsChecked] = React.useState(checked);
    const [isFocused, setIsFocused] = React.useState(false);
    const [isFocusedVisible, setIsFocusedVisible] = React.useState(false);
    const wasClicked = React.useRef(false);
    const inputProps = {
        checked: isChecked,
        type,
        onChange: (e)=>{
            if (props.onChange) props.onChange(e);
            setIsChecked((prevIsChecked)=>!prevIsChecked);
        },
        onClick: (e)=>{
            if (props.onClick) props.onClick(e);
            wasClicked.current = true;
        },
        onFocus: (e)=>{
            if (props.onFocus) props.onFocus(e);
            setIsFocused(true);
            if (!wasClicked.current) {
                setIsFocusedVisible(true);
            }
        },
        onBlur: (e)=>{
            if (props.onBlur) props.onBlur(e);
            setIsFocused(false);
            setIsFocusedVisible(false);
            wasClicked.current = false;
        }
    };
    if (inputType === "custom") {
        const pseudoModeClasses = `${isChecked ? ` ${CHECKED_CLASS}` : ""}${isFocused ? ` ${FOCUSED_CLASS}` : ""}${isFocusedVisible ? ` ${FOCUSED_CLASS} ${FOCUSED_VISIBLE_CLASS}` : ""}`;
        const currentClassName = `${className}${pseudoModeClasses}`;
        return /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: currentClassName
                }),
                /*#__PURE__*/ _jsx("input", {
                    ...props,
                    ...inputProps,
                    style: HIDE_DEFAULT_INPUT_STYLES
                })
            ]
        });
    }
    return /*#__PURE__*/ _jsx("input", {
        className: className,
        ...props,
        ...inputProps
    });
}
function FormCheckboxInput({ className = "", ...props }) {
    return /*#__PURE__*/ _jsx(FormBooleanInput, {
        ...props,
        type: "checkbox",
        className: className + " w-checkbox"
    });
}
function FormRadioInput({ className = "", ...props }) {
    return /*#__PURE__*/ _jsx(FormBooleanInput, {
        ...props,
        type: "radio",
        className: className + " w-radio-input"
    });
}
const MAX_FILE_SIZE_DEFAULT = 10485760;
const FileUploadContext = /*#__PURE__*/ react_default().createContext({
    files: null,
    error: null,
    maxSize: MAX_FILE_SIZE_DEFAULT,
    setFiles: ()=>{},
    setError: ()=>{}
});
function FormFileUploadWrapper({ maxSize = MAX_FILE_SIZE_DEFAULT, ...props }) {
    const [files, setFiles] = React.useState(null);
    const [error, setError] = React.useState(null);
    return /*#__PURE__*/ React.createElement(FileUploadContext.Provider, {
        value: {
            files,
            setFiles,
            error,
            setError,
            maxSize
        }
    }, /*#__PURE__*/ React.createElement(_FormFileUploadWrapper, {
        ...props
    }));
}
function _FormFileUploadWrapper({ className = "", ...props }) {
    return /*#__PURE__*/ React.createElement("div", {
        className: className + " w-file-upload",
        ...props
    });
}
function FormFileUploadDefault({ className = "", ...props }) {
    const { files, error } = React.useContext(FileUploadContext);
    return /*#__PURE__*/ React.createElement("div", {
        className: className + " w-file-upload-default",
        ...props,
        style: {
            ...props.style,
            display: !files || error ? "block" : "none"
        }
    });
}
function FormFileUploadInput({ className = "", ...props }) {
    const { setFiles, setError, maxSize } = React.useContext(FileUploadContext);
    return /*#__PURE__*/ React.createElement("input", {
        type: "file",
        className: className + " w-file-upload-input",
        ...props,
        onChange: (e)=>{
            if (e.target.files) {
                if (e.target.files[0].size <= maxSize) {
                    setError(null);
                    setFiles(e.target.files);
                } else setError("SIZE_ERROR");
            }
        }
    });
}
function FormFileUploadLabel({ className = "", ...props }) {
    return /*#__PURE__*/ React.createElement("label", {
        className: className + " w-file-upload-label",
        ...props
    });
}
function FormFileUploadText({ className = "", ...props }) {
    return /*#__PURE__*/ React.createElement("div", {
        className: className + " w-inline-block",
        ...props
    });
}
function FormFileUploadInfo({ className = "", ...props }) {
    return /*#__PURE__*/ React.createElement("div", {
        className: className + " w-file-upload-info",
        ...props
    });
}
function FormFileUploadUploading({ className = "", ...props }) {
    return /*#__PURE__*/ React.createElement("div", {
        className: className + " w-file-upload-uploading",
        style: {
            ...props.style,
            display: "none"
        },
        ...props
    });
}
function FormFileUploadUploadingBtn({ className = "", ...props }) {
    return /*#__PURE__*/ React.createElement("div", {
        className: className + " w-file-upload-uploading-btn",
        ...props
    });
}
function FormFileUploadUploadingIcon({ className = "", ...props }) {
    return /*#__PURE__*/ React.createElement("svg", {
        className: className + " icon w-icon-file-upload-uploading",
        ...props
    }, /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx("path", {
                fill: "currentColor",
                opacity: ".2",
                d: "M15 30a15 15 0 1 1 0-30 15 15 0 0 1 0 30zm0-3a12 12 0 1 0 0-24 12 12 0 0 0 0 24z"
            }),
            /*#__PURE__*/ _jsx("path", {
                fill: "currentColor",
                opacity: ".75",
                d: "M0 15A15 15 0 0 1 15 0v3A12 12 0 0 0 3 15H0z",
                children: /*#__PURE__*/ _jsx("animateTransform", {
                    attributeName: "transform",
                    attributeType: "XML",
                    dur: "0.6s",
                    from: "0 15 15",
                    repeatCount: "indefinite",
                    to: "360 15 15",
                    type: "rotate"
                })
            })
        ]
    }));
}
function FormFileUploadSuccess({ className = "", ...props }) {
    const { files, error } = React.useContext(FileUploadContext);
    return /*#__PURE__*/ React.createElement("div", {
        className: className + " w-file-upload-success",
        ...props,
        style: {
            ...props.style,
            display: !!files && !error ? "block" : "none"
        }
    });
}
function FormFileUploadFile({ className = "", ...props }) {
    return /*#__PURE__*/ React.createElement("div", {
        className: className + " w-file-upload-file",
        ...props
    });
}
function FormFileUploadFileName({ className = "", ...props }) {
    const { files } = React.useContext(FileUploadContext);
    return /*#__PURE__*/ React.createElement("div", {
        className: className + " w-file-upload-file-name",
        ...props
    }, files && files[0].name);
}
function FormFileUploadRemoveLink({ className = "", ...props }) {
    const { setFiles } = React.useContext(FileUploadContext);
    return /*#__PURE__*/ React.createElement("div", {
        className: className + " w-file-remove-link",
        ...props,
        onClick: ()=>{
            setFiles(null);
        }
    });
}
function FormFileUploadError({ className = "", ...props }) {
    const { error } = React.useContext(FileUploadContext);
    return /*#__PURE__*/ React.createElement("div", {
        className: className + " w-file-upload-error",
        ...props,
        style: {
            ...props.style,
            display: !!error ? "block" : "none"
        }
    });
}
function FormFileUploadErrorMsg({ errors, className = "", ...props }) {
    const { error } = React.useContext(FileUploadContext);
    return /*#__PURE__*/ React.createElement("div", {
        className: className + " w-file-upload-error-msg",
        ...props
    }, errors[error ?? "GENERIC_ERROR"]);
}
function FormButton({ className = "", value, ...props }) {
    return /*#__PURE__*/ React.createElement("input", {
        type: "submit",
        value: value ?? "",
        className: className + " w-button",
        ...props
    });
}
function SearchForm(props) {
    return /*#__PURE__*/ React.createElement("form", props);
}
function SearchInput({ className = "", ...props }) {
    return /*#__PURE__*/ React.createElement("input", {
        type: "text",
        className: className + " w-input",
        ...props
    });
}
function SearchButton({ value = "", className = "", ...props }) {
    return /*#__PURE__*/ React.createElement("input", {
        type: "submit",
        value,
        className: className + " w-button",
        ...props
    });
}
function FormSuccessMessage({ className = "", ...props }) {
    return /*#__PURE__*/ React.createElement("div", {
        className: className + " w-form-done",
        ...props
    });
}
function FormErrorMessage({ className = "", ...props }) {
    return /*#__PURE__*/ React.createElement("div", {
        className: className + " w-form-fail",
        ...props
    });
}
function hasValue(str) {
    if (typeof str !== "string") return false;
    return str.replace(/^[s ]+|[s ]+$/g, "").length > 0;
}
function FormSelect({ options, className = "", ...props }) {
    return /*#__PURE__*/ React.createElement("select", {
        className: className + " w-select",
        ...props
    }, options.map(({ v, t }, index)=>/*#__PURE__*/ React.createElement("option", {
            key: index,
            value: hasValue(v) ? v : ""
        }, hasValue(t) ? t : "")));
}
function FormReCaptcha({ siteKey = "", theme = "light", size = "normal" }) {
    React.useEffect(()=>{
        loadScript("https://www.google.com/recaptcha/api.js", {
            cacheRegex: /(http|https):\/\/(www)?.+\/recaptcha/
        });
    }, []);
    return /*#__PURE__*/ _jsx("div", {
        className: "g-recaptcha",
        "data-sitekey": siteKey,
        "data-theme": theme,
        "data-size": size
    });
}

;// CONCATENATED MODULE: ./devlink/_Builtin/Map.js



function buildTitle(title, tooltip) {
    let markerTitle = "Map pin";
    if (title && tooltip) {
        markerTitle = `Map pin on ${title} showing location of ${tooltip}`;
    } else if (title && !tooltip) {
        markerTitle = `Map pin on ${title}`;
    } else if (!title && tooltip) {
        markerTitle = `Map pin showing location of ${tooltip}`;
    }
    return markerTitle;
}
function MapWidget({ apiKey = "", mapStyle = "roadmap", zoom = 12, latlng = "51.511214,-0.119824", tooltip = "", title = "", enableScroll = true, enableTouch = true, className = "", ...props }) {
    const mapRef = useRef(null);
    useEffect(()=>{
        const loadMap = ()=>{
            if (!mapRef.current) return;
            if (!window?.google?.maps) return;
            const { Map, Marker, InfoWindow } = window.google.maps;
            const coords = latlng.split(",");
            const center = {
                lat: parseFloat(coords[0]),
                lng: parseFloat(coords[1])
            };
            const map = new Map(mapRef.current, {
                zoom,
                center,
                mapTypeId: mapStyle,
                mapTypeControl: false,
                panControl: false,
                streetViewControl: false,
                draggable: enableTouch,
                scrollwheel: enableScroll,
                zoomControl: true
            });
            const marker = new Marker({
                draggable: false,
                position: center,
                title: buildTitle(title, tooltip),
                map
            });
            if (tooltip) {
                new InfoWindow({
                    disableAutoPan: true,
                    content: tooltip,
                    position: center
                }).open({
                    anchor: marker,
                    map
                });
            }
            window.google.maps.event.addListener(marker, "click", function() {
                window.open(`https://maps.google.com/?z=${zoom}&daddr=${latlng}`);
            });
        };
        loadScript(`https://maps.googleapis.com/maps/api/js?v=3.52.5&key=${apiKey}`, {
            cacheRegex: /maps\.googleapis\.com\/maps\/api\/js\?v=3\.52\.5\&key=/gi
        }).then(loadMap);
    }, [
        apiKey,
        mapStyle,
        zoom,
        latlng,
        tooltip,
        title,
        enableScroll,
        enableTouch,
        mapRef
    ]);
    return /*#__PURE__*/ _jsx("div", {
        ...props,
        className: cj(className, "w-widget w-widget-map"),
        role: "region",
        ref: mapRef
    });
}

;// CONCATENATED MODULE: ./devlink/_Builtin/Slider.js




const DEFAULT_SLIDER_CONFIG = {
    navSpacing: 3,
    navShadow: false,
    autoplay: false,
    delay: 4000,
    iconArrows: true,
    animation: "slide",
    navNumbers: true,
    easing: "ease",
    navRound: true,
    hideArrows: false,
    disableSwipe: false,
    duration: 500,
    infinite: true,
    autoMax: 0,
    navInvert: false
};
const SliderContext = /*#__PURE__*/ react_.createContext({
    ...DEFAULT_SLIDER_CONFIG,
    slideAmount: 0,
    setSlideAmount: ()=>{},
    setCurrentSlide: ()=>{},
    goToNextSlide: ()=>{},
    goToPreviousSlide: ()=>{},
    slide: {
        current: 0,
        previous: 0
    },
    isAutoplayPaused: false,
    setAutoplayPause: ()=>{}
});
function useSwipe({ onSwipeLeft, onSwipeRight, config }) {
    const SWIPE_DELTA = 150;
    const [touchStart, setTouchStart] = React.useState(0);
    const [touchEnd, setTouchEnd] = React.useState(0);
    const handleTouchStart = (e)=>{
        setTouchStart(e.touches[0].clientX);
    };
    const handleTouchMove = (e)=>{
        setTouchEnd(e.touches[0].clientX);
    };
    const handleTouchEnd = ()=>{
        if (config?.disableSwipe) return;
        if (touchStart - touchEnd > SWIPE_DELTA) {
            onSwipeLeft();
        }
        if (touchStart - touchEnd < -SWIPE_DELTA) {
            onSwipeRight();
        }
    };
    return {
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd
    };
}
function SliderWrapper({ className = "", ...props }) {
    const [slideAmount, setSlideAmount] = React.useState(0);
    const [selectedSlide, setSelectedSlide] = React.useState(0);
    const [prevSelectedSlide, setPrevSelectedSlide] = React.useState(0);
    const [isAutoplayPaused, setAutoplayPause] = React.useState(false);
    const setCurrentSlide = debounce((value)=>{
        setSelectedSlide((prev)=>{
            setPrevSelectedSlide(prev);
            return value;
        });
    });
    const goToNextSlide = debounce(()=>{
        if (selectedSlide === slideAmount - 1) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(selectedSlide + 1);
        }
    });
    const goToPreviousSlide = debounce(()=>{
        if (selectedSlide === 0) {
            setCurrentSlide(slideAmount - 1);
        } else {
            setCurrentSlide(selectedSlide - 1);
        }
    });
    const swipeHandlers = useSwipe({
        onSwipeLeft: goToNextSlide,
        onSwipeRight: goToPreviousSlide
    });
    return /*#__PURE__*/ _jsx(SliderContext.Provider, {
        value: {
            ...props,
            slideAmount,
            setSlideAmount,
            slide: {
                current: selectedSlide,
                previous: prevSelectedSlide
            },
            setCurrentSlide,
            goToNextSlide,
            goToPreviousSlide,
            isAutoplayPaused,
            setAutoplayPause
        },
        children: /*#__PURE__*/ _jsx("div", {
            ...swipeHandlers,
            className: cj(className, "w-slider"),
            role: "region",
            "aria-label": "carousel",
            children: props.children
        })
    });
}
function useAutoplay() {
    const { autoplay, delay, autoMax, isAutoplayPaused, setAutoplayPause, goToNextSlide } = React.useContext(SliderContext);
    const [autoMaxCount, setAutoMaxCount] = React.useState(0);
    const autoMaxReached = React.useMemo(()=>autoMaxCount >= autoMax && autoMax > 0, [
        autoMax,
        autoMaxCount
    ]);
    React.useEffect(()=>{
        const shouldAutoplay = autoplay && !autoMaxReached && !isAutoplayPaused;
        if (shouldAutoplay) {
            const interval = setInterval(()=>{
                setAutoMaxCount((prev)=>prev + 1);
                goToNextSlide();
            }, delay);
            return ()=>clearInterval(interval);
        }
    }, [
        autoplay,
        delay,
        goToNextSlide,
        autoMaxReached,
        isAutoplayPaused
    ]);
    const resumeAutoplay = ()=>setAutoplayPause(true);
    const pauseAutoplay = ()=>setAutoplayPause(false);
    return {
        resumeAutoplay,
        pauseAutoplay
    };
}
function SliderMask({ className = "", children, ...props }) {
    const { setSlideAmount } = React.useContext(SliderContext);
    const [isHovered, setHovered] = React.useState(false);
    const { resumeAutoplay, pauseAutoplay } = useAutoplay();
    React.useEffect(()=>{
        setSlideAmount(React.Children.count(children));
    }, [
        children,
        setSlideAmount
    ]);
    return /*#__PURE__*/ _jsxs("div", {
        ...props,
        className: cj(className, "w-slider-mask"),
        onMouseEnter: ()=>{
            pauseAutoplay();
            setHovered(true);
        },
        onMouseLeave: ()=>{
            resumeAutoplay();
            setHovered(false);
        },
        onFocus: ()=>pauseAutoplay(),
        onBlur: ()=>resumeAutoplay(),
        children: [
            React.Children.map(children, (child, index)=>{
                if (!/*#__PURE__*/ React.isValidElement(child)) return null;
                return /*#__PURE__*/ React.cloneElement(child, {
                    ...child.props,
                    index
                });
            }),
            /*#__PURE__*/ _jsx("div", {
                "aria-live": isHovered ? "polite" : "off",
                "aria-atomic": "true",
                className: "w-slider-aria-label"
            })
        ]
    });
}
function SliderSlide({ tag = "div", className = "", style = {}, index, ...props }) {
    const { animation, duration, easing, slide: { current, previous }, slideAmount } = React.useContext(SliderContext);
    const isSlideActive = current === index;
    const isSlidePrevious = previous === index;
    const animationStyle = React.useMemo(()=>{
        let base = {
            transform: `translateX(-${current * 100}%)`,
            transition: `transform ${duration}ms ${EASING_FUNCTIONS[easing]} 0s`
        };
        if (animation === "slide") {
            return base;
        }
        if (animation === "cross") {
            return {
                ...base,
                opacity: isSlideActive ? 1 : 0,
                transition: `opacity ${duration}ms ${EASING_FUNCTIONS[easing]} 0s, transform 1ms linear ${isSlideActive ? 0 : duration}ms`
            };
        }
        if (animation === "outin") {
            return {
                ...base,
                opacity: isSlideActive ? 1 : 0,
                transition: `opacity ${duration / 2}ms ${EASING_FUNCTIONS[easing]} ${isSlidePrevious ? 0 : duration / 2}ms, transform 1ms linear ${isSlidePrevious ? duration / 2 : 0}ms`
            };
        }
        if (animation === "fade") {
            return {
                ...base,
                opacity: isSlideActive ? 1 : 0,
                transition: `opacity ${duration}ms ${EASING_FUNCTIONS[easing]} 0s, transform 1ms linear ${isSlideActive ? 0 : duration}ms`
            };
        }
        if (animation === "over") {
            return {
                ...base,
                transition: `transform ${duration}ms ${EASING_FUNCTIONS[easing]} ${isSlidePrevious ? duration : 0}ms`,
                zIndex: isSlideActive ? 1 : 0
            };
        }
        return base;
    }, [
        animation,
        duration,
        easing,
        current,
        isSlideActive,
        isSlidePrevious
    ]);
    const ref = React.useCallback((node)=>{
        triggerIXEvent(node, isSlideActive);
    }, [
        isSlideActive
    ]);
    return /*#__PURE__*/ React.createElement(tag, {
        ...props,
        className: cj(className, "w-slide"),
        style: {
            ...style,
            ...animationStyle
        },
        "aria-label": `${index + 1} of ${slideAmount}`,
        role: "group",
        ref,
        "aria-hidden": !isSlideActive ? "true" : "false"
    });
}
function SliderArrow({ className = "", dir = "left", children, ...props }) {
    const { goToNextSlide, goToPreviousSlide, hideArrows, slideAmount, slide: { current } } = React.useContext(SliderContext);
    const handleSlideChange = debounce(()=>{
        if (dir === "left") {
            goToPreviousSlide();
        } else {
            goToNextSlide();
        }
    });
    const isHidden = React.useMemo(()=>{
        if (dir === "left" && hideArrows && current === 0) return true;
        if (dir === "right" && hideArrows && current === slideAmount - 1) return true;
        return false;
    }, [
        dir,
        hideArrows,
        current,
        slideAmount
    ]);
    return /*#__PURE__*/ _jsx("div", {
        ...props,
        onClick: handleSlideChange,
        onKeyDown: (e)=>{
            e.stopPropagation();
            if (e.key === KEY_CODES.ENTER || e.key === KEY_CODES.SPACE) {
                e.preventDefault();
                handleSlideChange();
            }
        },
        role: "button",
        tabIndex: 0,
        className: cj(className, `w-slider-arrow-${dir}`),
        "aria-label": `${dir === "left" ? "previous" : "next"} slide`,
        style: {
            display: isHidden ? "none" : "block"
        },
        children: children
    });
}
function SliderNav({ className = "", ...props }) {
    const { slideAmount, navInvert, navNumbers, navRound, navShadow, setAutoplayPause, setCurrentSlide } = React.useContext(SliderContext);
    const [focusedDot, setFocusedDot] = React.useState(null);
    const handleFocus = (e)=>{
        switch(e.key){
            case KEY_CODES.ENTER:
            case KEY_CODES.SPACE:
                {
                    e.preventDefault();
                    if (focusedDot !== null) {
                        setCurrentSlide(focusedDot);
                    }
                    break;
                }
            case KEY_CODES.ARROW_LEFT:
            case KEY_CODES.ARROW_UP:
                {
                    e.preventDefault();
                    setFocusedDot((prev)=>Math.max((prev ?? 0) - 1, 0));
                    break;
                }
            case KEY_CODES.ARROW_RIGHT:
            case KEY_CODES.ARROW_DOWN:
                {
                    e.preventDefault();
                    setFocusedDot((prev)=>Math.min((prev ?? 0) + 1, slideAmount - 1));
                    break;
                }
            case KEY_CODES.HOME:
                {
                    e.preventDefault();
                    setFocusedDot(0);
                    break;
                }
            case KEY_CODES.END:
                {
                    e.preventDefault();
                    setFocusedDot(slideAmount - 1);
                    break;
                }
            default:
                {
                    return;
                }
        }
    };
    const dots = [
        ...Array(slideAmount).keys()
    ].map((_, i)=>{
        return /*#__PURE__*/ _jsx(SliderDot, {
            index: i,
            focusedDot: focusedDot,
            handleFocus: handleFocus,
            setFocusedDot: setFocusedDot
        }, i);
    });
    return /*#__PURE__*/ _jsx("div", {
        ...props,
        onFocus: (e)=>{
            e.stopPropagation();
            setAutoplayPause(true);
        },
        onBlur: ()=>{
            setAutoplayPause(false);
        },
        onMouseLeave: (e)=>e.stopPropagation(),
        className: cj(className, `w-slider-nav ${navInvert ? "w-slider-nav-invert" : ""} ${navShadow ? "w-shadow" : ""} ${navRound ? "w-round" : ""} ${navNumbers ? "w-num" : ""}`),
        children: dots
    });
}
function SliderDot({ index, focusedDot, handleFocus, setFocusedDot }) {
    const { slideAmount, navSpacing, navNumbers, slide: { current: selectedSlide }, setCurrentSlide } = React.useContext(SliderContext);
    const ref = React.useRef(null);
    React.useEffect(()=>{
        if (focusedDot === index) {
            ref.current?.focus();
        }
    }, [
        focusedDot,
        index
    ]);
    const isSlideActive = selectedSlide == index;
    const label = navNumbers ? index + 1 : "";
    return /*#__PURE__*/ _jsx("div", {
        className: `w-slider-dot ${isSlideActive ? "w-active" : ""}`,
        "aria-label": `Show slide ${index + 1} of ${slideAmount}`,
        "aria-pressed": isSlideActive,
        role: "button",
        tabIndex: isSlideActive ? 0 : -1,
        style: {
            marginRight: `${navSpacing}px`,
            marginLeft: `${navSpacing}px`
        },
        onClick: (e)=>{
            e.stopPropagation();
            setFocusedDot(index);
            setCurrentSlide(index);
        },
        ref: ref,
        onKeyDown: handleFocus,
        children: label
    });
}

;// CONCATENATED MODULE: ./devlink/_Builtin/Video.js



const getAspectRatio = ({ width, height })=>height && width ? height / width : 0;
function Video({ className = "", options = {
    height: 0,
    width: 0,
    title: "",
    url: ""
}, ...props }) {
    const { height, title, url, width } = options;
    return /*#__PURE__*/ _jsx("div", {
        ...props,
        style: {
            paddingTop: `${getAspectRatio(options) * 100}%`
        },
        className: cj("w-video", "w-embed", className),
        children: /*#__PURE__*/ _jsx("iframe", {
            className: "embedly-embed",
            src: url,
            width: width,
            height: height,
            title: title,
            allowFullScreen: true,
            scrolling: "no",
            frameBorder: "0"
        })
    });
}

;// CONCATENATED MODULE: ./devlink/_Builtin/YouTubeVideo.js



const DEFAULT_16_9_RATIO = 0.5617021276595745;
function YouTubeVideo({ className = "", title, videoId, aspectRatio = DEFAULT_16_9_RATIO, startAt = 0, showAllRelatedVideos = false, controls = true, autoplay = false, muted = false, privacyMode = false, ...props }) {
    const baseUrl = privacyMode ? "https://www.youtube-nocookie.com/embed" : "https://www.youtube.com/embed";
    const urlParams = Object.entries({
        startAt,
        showAllRelatedVideos,
        controls,
        autoplay,
        muted
    }).map(([k, v])=>`${k}=${Number(v)}`).join("&");
    const iframeStyle = {
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "auto"
    };
    return /*#__PURE__*/ _jsx("div", {
        ...props,
        style: {
            paddingTop: `${aspectRatio * 100}%`
        },
        className: cj("w-embed-youtubevideo", className),
        children: /*#__PURE__*/ _jsx("iframe", {
            src: `${baseUrl}/${videoId}?${urlParams}`,
            title: title,
            allowFullScreen: true,
            scrolling: "no",
            frameBorder: "0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            style: iframeStyle
        })
    });
}

;// CONCATENATED MODULE: ./devlink/_Builtin/BackgroundVideo.js



const BgVideoContext = /*#__PURE__*/ react_default().createContext({
    isPlaying: true,
    togglePlay: ()=>{}
});
const BackgroundVideoWrapper = ({ tag = "div", className = "", autoPlay = true, loop = true, sources = [], posterImage = "", children })=>{
    const [isPlaying, setIsPlaying] = React.useState(autoPlay);
    const video = React.useRef(null);
    const togglePlay = debounce(()=>{
        setIsPlaying(!isPlaying);
        if (!video?.current) return;
        if (video.current.paused) {
            video.current.play();
        } else {
            video.current.pause();
        }
    });
    return /*#__PURE__*/ _jsxs(BgVideoContext.Provider, {
        value: {
            isPlaying,
            togglePlay
        },
        children: [
            /*#__PURE__*/ React.createElement(tag, {
                className: cj(className, "w-background-video", "w-background-video-atom")
            }, /*#__PURE__*/ _jsx("video", {
                ref: video,
                autoPlay: autoPlay,
                loop: loop,
                style: posterImage ? {
                    backgroundImage: `url("${posterImage}")`
                } : undefined,
                muted: true,
                playsInline: true,
                children: sources.map((url)=>/*#__PURE__*/ _jsx("source", {
                        src: url
                    }, url))
            })),
            children
        ]
    });
};
const BackgroundVideoPlayPauseButton = ({ children, className })=>{
    const { togglePlay } = React.useContext(BgVideoContext);
    return /*#__PURE__*/ _jsx("div", {
        "aria-live": "polite",
        children: /*#__PURE__*/ _jsx("button", {
            type: "button",
            className: cj(className, "w-backgroundvideo-backgroundvideoplaypausebutton", "w-background-video--control"),
            onClick: togglePlay,
            children: children
        })
    });
};
const BackgroundVideoPlayPauseButtonPlaying = ({ children })=>{
    const { isPlaying } = React.useContext(BgVideoContext);
    return /*#__PURE__*/ _jsx("span", {
        hidden: !isPlaying,
        children: children
    });
};
const BackgroundVideoPlayPauseButtonPaused = ({ children })=>{
    const { isPlaying } = React.useContext(BgVideoContext);
    return /*#__PURE__*/ _jsx("span", {
        hidden: isPlaying,
        children: children
    });
};

;// CONCATENATED MODULE: ./devlink/_Builtin/index.js
/* __next_internal_client_entry_do_not_use__ *,*,*,*,*,*,*,*,*,*,*,*,* auto */ 













// EXTERNAL MODULE: ./devlink/BlankSection.module.css
var BlankSection_module = __webpack_require__(352);
var BlankSection_module_default = /*#__PURE__*/__webpack_require__.n(BlankSection_module);
;// CONCATENATED MODULE: ./devlink/BlankSection.js





function BlankSection({ as: _Component = Section, container }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(_Component, {
        className: cx((BlankSection_module_default()), "section"),
        tag: "section",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Block, {
            className: cx((BlankSection_module_default()), "container"),
            tag: "div",
            children: container
        })
    });
}

;// CONCATENATED MODULE: ./devlink/Button.js





function Button({ as: _Component = _Builtin.Link, text = "Blank", link = {
    href: "#"
}, id, makenote = {} }) {
    return /*#__PURE__*/ _jsx(_Component, {
        className: _utils.cx(_styles, "button"),
        button: true,
        id: id,
        options: link,
        ...makenote,
        children: text
    });
}

// EXTERNAL MODULE: ./devlink/ButtonFake.module.css
var ButtonFake_module = __webpack_require__(2841);
var ButtonFake_module_default = /*#__PURE__*/__webpack_require__.n(ButtonFake_module);
;// CONCATENATED MODULE: ./devlink/ButtonFake.js





function ButtonFake({ as: _Component = Block, text = "Blank", id, makenote = {} }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(_Component, {
        className: cx((ButtonFake_module_default()), "button", "fake"),
        tag: "div",
        id: id,
        ...makenote,
        children: text
    });
}

// EXTERNAL MODULE: ./devlink/Card.module.css
var Card_module = __webpack_require__(54);
var Card_module_default = /*#__PURE__*/__webpack_require__.n(Card_module);
;// CONCATENATED MODULE: ./devlink/Card.js





function Card({ as: _Component = Block, h3 = "Heading", p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere." }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(_Component, {
        className: cx((Card_module_default()), "card", "spaced"),
        tag: "div",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                className: cx((Card_module_default()), "h3"),
                tag: "h3",
                children: h3
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                className: cx((Card_module_default()), "p", "mb-0"),
                children: p
            })
        ]
    });
}

// EXTERNAL MODULE: ./devlink/CardSection.module.css
var CardSection_module = __webpack_require__(6209);
var CardSection_module_default = /*#__PURE__*/__webpack_require__.n(CardSection_module);
;// CONCATENATED MODULE: ./devlink/CardSection.js






const _interactionsData = JSON.parse('{"events":{"e-43":{"id":"e-43","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-44"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".wrap_faq_q","originalId":"ae07735c-f015-a2c3-764e-bde487ab940e","appliesTo":"CLASS"},"targets":[{"selector":".wrap_faq_q","originalId":"ae07735c-f015-a2c3-764e-bde487ab940e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690963371441},"e-44":{"id":"e-44","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-43"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".wrap_faq_q","originalId":"ae07735c-f015-a2c3-764e-bde487ab940e","appliesTo":"CLASS"},"targets":[{"selector":".wrap_faq_q","originalId":"ae07735c-f015-a2c3-764e-bde487ab940e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690963371442},"e-57":{"id":"e-57","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-58"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".wrap_faq_q","originalId":"64c9f378fba5cc5ff545eca9|df532bf9-e491-52ba-7716-a9432cc7a776","appliesTo":"CLASS"},"targets":[{"selector":".wrap_faq_q","originalId":"64c9f378fba5cc5ff545eca9|df532bf9-e491-52ba-7716-a9432cc7a776","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690965844423},"e-58":{"id":"e-58","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-57"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".wrap_faq_q","originalId":"64c9f378fba5cc5ff545eca9|df532bf9-e491-52ba-7716-a9432cc7a776","appliesTo":"CLASS"},"targets":[{"selector":".wrap_faq_q","originalId":"64c9f378fba5cc5ff545eca9|df532bf9-e491-52ba-7716-a9432cc7a776","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690965844423},"e-87":{"id":"e-87","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-88"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1f2592ab-224e-dd95-c9ca-b937c001af0c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1f2592ab-224e-dd95-c9ca-b937c001af0c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1690966326761},"e-89":{"id":"e-89","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-90"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1f2592ab-224e-dd95-c9ca-b937c001af12","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1f2592ab-224e-dd95-c9ca-b937c001af12","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":150,"direction":"BOTTOM","effectIn":true},"createdOn":1690966333669},"e-91":{"id":"e-91","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-92"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1f2592ab-224e-dd95-c9ca-b937c001af18","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1f2592ab-224e-dd95-c9ca-b937c001af18","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":300,"direction":"BOTTOM","effectIn":true},"createdOn":1690966342707}},"actionLists":{"a-3":{"id":"a-3","title":"FAQ Open","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".wrap_faq_a","selectorGuids":["90bce76e-28d2-0f25-8a6b-fb6dfa29cd0c"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-3-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon","selectorGuids":["5f4803ce-78c6-0ad1-7e8c-ae2522ab8dc7"]},"zValue":-90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-3-n-5","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".wrap_faq","selectorGuids":["64a0e39d-36f0-365e-238a-7a17ef7b591d"]},"globalSwatchId":"2ec0cb34","rValue":240,"bValue":240,"gValue":240,"aValue":1}}]},{"actionItems":[{"id":"a-3-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".wrap_faq_a","selectorGuids":["90bce76e-28d2-0f25-8a6b-fb6dfa29cd0c"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-3-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon","selectorGuids":["5f4803ce-78c6-0ad1-7e8c-ae2522ab8dc7"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-3-n-6","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"PARENT","selector":".wrap_faq","selectorGuids":["64a0e39d-36f0-365e-238a-7a17ef7b591d"]},"globalSwatchId":"60758858","rValue":7,"bValue":34,"gValue":7,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1690963377706},"a-4":{"id":"a-4","title":"FAQ Close","actionItemGroups":[{"actionItems":[{"id":"a-4-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".wrap_faq_a","selectorGuids":["90bce76e-28d2-0f25-8a6b-fb6dfa29cd0c"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-4-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon","selectorGuids":["5f4803ce-78c6-0ad1-7e8c-ae2522ab8dc7"]},"zValue":-90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-4-n-6","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"PARENT","selector":".wrap_faq","selectorGuids":["64a0e39d-36f0-365e-238a-7a17ef7b591d"]},"globalSwatchId":"2ec0cb34","rValue":240,"bValue":240,"gValue":240,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1690963377706},"a-5":{"id":"a-5","title":"FAQ Open 2","actionItemGroups":[{"actionItems":[{"id":"a-5-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".wrap_faq_a","selectorGuids":["90bce76e-28d2-0f25-8a6b-fb6dfa29cd0c"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-5-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon","selectorGuids":["5f4803ce-78c6-0ad1-7e8c-ae2522ab8dc7"]},"zValue":-90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-5-n-3","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".wrap_faq","selectorGuids":["64a0e39d-36f0-365e-238a-7a17ef7b591d"]},"globalSwatchId":"2ec0cb34","rValue":240,"bValue":240,"gValue":240,"aValue":1}}]},{"actionItems":[{"id":"a-5-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".wrap_faq_a","selectorGuids":["90bce76e-28d2-0f25-8a6b-fb6dfa29cd0c"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-5-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon","selectorGuids":["5f4803ce-78c6-0ad1-7e8c-ae2522ab8dc7"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-5-n-6","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"PARENT","selector":".wrap_faq","selectorGuids":["64a0e39d-36f0-365e-238a-7a17ef7b591d"]},"globalSwatchId":"60758858","rValue":7,"bValue":34,"gValue":7,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1690963377706},"a-6":{"id":"a-6","title":"FAQ Close 2","actionItemGroups":[{"actionItems":[{"id":"a-6-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".wrap_faq_a","selectorGuids":["90bce76e-28d2-0f25-8a6b-fb6dfa29cd0c"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-6-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon","selectorGuids":["5f4803ce-78c6-0ad1-7e8c-ae2522ab8dc7"]},"zValue":-90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-6-n-3","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"PARENT","selector":".wrap_faq","selectorGuids":["64a0e39d-36f0-365e-238a-7a17ef7b591d"]},"globalSwatchId":"2ec0cb34","rValue":240,"bValue":240,"gValue":240,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1690963377706},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}');
function CardSection({ as: _Component = Section }) {
    useInteractions(_interactionsData, (CardSection_module_default()));
    return /*#__PURE__*/ jsx_runtime_.jsx(_Component, {
        className: cx((CardSection_module_default()), "section"),
        tag: "section",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Block, {
            className: cx((CardSection_module_default()), "container"),
            tag: "div",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid, {
                className: cx((CardSection_module_default()), "grid_cards"),
                tag: "div",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                        className: cx((CardSection_module_default()), "card"),
                        id: cx((CardSection_module_default()), "w-node-_1f2592ab-224e-dd95-c9ca-b937c001af0c-c001af09"),
                        "data-w-id": "1f2592ab-224e-dd95-c9ca-b937c001af0c",
                        tag: "div",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                className: cx((CardSection_module_default()), "icon", "mb-20"),
                                value: "%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.783%202.826L12%201L20.217%202.826C20.4391%202.87536%2020.6377%202.99897%2020.78%203.1764C20.9224%203.35384%2021%203.57452%2021%203.802V13.789C20.9999%2014.7767%2020.756%2015.7492%2020.2899%2016.62C19.8238%2017.4908%2019.1499%2018.2331%2018.328%2018.781L12%2023L5.672%2018.781C4.85027%2018.2332%204.17646%2017.4911%203.71035%2016.6205C3.24424%2015.7498%203.00024%2014.7776%203%2013.79V3.802C3.00004%203.57452%203.07764%203.35384%203.21999%203.1764C3.36234%202.99897%203.56094%202.87536%203.783%202.826V2.826ZM5%204.604V13.789C5.00001%2014.4475%205.16257%2015.0957%205.47326%2015.6763C5.78395%2016.2568%206.23315%2016.7517%206.781%2017.117L12%2020.597L17.219%2017.117C17.7667%2016.7518%2018.2158%2016.2571%2018.5265%2015.6767C18.8372%2015.0964%2018.9998%2014.4483%2019%2013.79V4.604L12%203.05L5%204.604ZM13%2010H16L11%2017V12H8L13%205V10Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                                className: cx((CardSection_module_default()), "h3"),
                                tag: "h3",
                                children: "Convenient"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                                className: cx((CardSection_module_default()), "p", "mb-0"),
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                        className: cx((CardSection_module_default()), "card"),
                        id: cx((CardSection_module_default()), "w-node-_1f2592ab-224e-dd95-c9ca-b937c001af12-c001af09"),
                        "data-w-id": "1f2592ab-224e-dd95-c9ca-b937c001af12",
                        tag: "div",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                className: cx((CardSection_module_default()), "icon", "mb-20"),
                                value: "%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012C2%206.477%206.477%202%2012%202C17.523%202%2022%206.477%2022%2012C22%2017.523%2017.523%2022%2012%2022ZM12%2020C14.1217%2020%2016.1566%2019.1571%2017.6569%2017.6569C19.1571%2016.1566%2020%2014.1217%2020%2012C20%209.87827%2019.1571%207.84344%2017.6569%206.34315C16.1566%204.84285%2014.1217%204%2012%204C9.87827%204%207.84344%204.84285%206.34315%206.34315C4.84285%207.84344%204%209.87827%204%2012C4%2014.1217%204.84285%2016.1566%206.34315%2017.6569C7.84344%2019.1571%209.87827%2020%2012%2020V20ZM11%2012.792C10.4736%2012.5623%2010.0424%2012.1583%209.77878%2011.648C9.51521%2011.1377%209.43539%2010.5522%209.55273%209.98994C9.67008%209.4277%209.97744%208.92302%2010.4231%208.56075C10.8688%208.19847%2011.4256%208.00071%2012%208.00071C12.5744%208.00071%2013.1312%208.19847%2013.5769%208.56075C14.0226%208.92302%2014.3299%209.4277%2014.4473%209.98994C14.5646%2010.5522%2014.4848%2011.1377%2014.2212%2011.648C13.9576%2012.1583%2013.5264%2012.5623%2013%2012.792V16H11V12.792Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                                className: cx((CardSection_module_default()), "h3"),
                                tag: "h3",
                                children: "Secure"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                                className: cx((CardSection_module_default()), "p", "mb-0"),
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                        className: cx((CardSection_module_default()), "card"),
                        id: cx((CardSection_module_default()), "w-node-_1f2592ab-224e-dd95-c9ca-b937c001af18-c001af09"),
                        "data-w-id": "1f2592ab-224e-dd95-c9ca-b937c001af18",
                        tag: "div",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                className: cx((CardSection_module_default()), "icon", "mb-20"),
                                value: "%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M17.841%2015.659L18.017%2015.836L18.195%2015.659C18.4039%2015.4501%2018.652%2015.2843%2018.925%2015.1713C19.1979%2015.0582%2019.4905%2015%2019.786%2015C20.0815%2015%2020.3741%2015.0582%2020.647%2015.1713C20.92%2015.2843%2021.1681%2015.4501%2021.377%2015.659C21.5859%2015.8679%2021.7517%2016.116%2021.8647%2016.389C21.9778%2016.6619%2022.036%2016.9545%2022.036%2017.25C22.036%2017.5455%2021.9778%2017.8381%2021.8647%2018.111C21.7517%2018.384%2021.5859%2018.6321%2021.377%2018.841L18.017%2022.2L14.659%2018.841C14.237%2018.419%2014%2017.8467%2014%2017.25C14%2016.6533%2014.237%2016.081%2014.659%2015.659C15.081%2015.237%2015.6533%2015%2016.25%2015C16.8467%2015%2017.419%2015.237%2017.841%2015.659V15.659ZM12%2014V16C10.4087%2016%208.88258%2016.6321%207.75736%2017.7574C6.63214%2018.8826%206%2020.4087%206%2022H4C4.00002%2019.9216%204.80894%2017.9247%206.25547%2016.4323C7.702%2014.9398%209.67259%2014.069%2011.75%2014.004L12%2014ZM12%201C15.315%201%2018%203.685%2018%207C18.0006%208.55253%2017.3991%2010.0448%2016.3221%2011.163C15.2451%2012.2812%2013.7765%2012.9383%2012.225%2012.996L12%2013C8.685%2013%206%2010.315%206%207C5.99944%205.44747%206.6009%203.95521%207.67791%202.83699C8.75491%201.71877%2010.2235%201.06172%2011.775%201.004L12%201ZM12%203C9.79%203%208%204.79%208%207C8%209.21%209.79%2011%2012%2011C14.21%2011%2016%209.21%2016%207C16%204.79%2014.21%203%2012%203Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                                className: cx((CardSection_module_default()), "h3"),
                                tag: "h3",
                                children: "Helpful"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                                className: cx((CardSection_module_default()), "p", "mb-0"),
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                            })
                        ]
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./devlink/ContentSectionRight.module.css
var ContentSectionRight_module = __webpack_require__(8050);
var ContentSectionRight_module_default = /*#__PURE__*/__webpack_require__.n(ContentSectionRight_module);
;// CONCATENATED MODULE: ./devlink/ContentSectionRight.js






const ContentSectionRight_interactionsData = JSON.parse('{"events":{"e-61":{"id":"e-61","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-62"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6489429f-9402-d770-42f7-e7892c5754d1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6489429f-9402-d770-42f7-e7892c5754d1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1690965850198}},"actionLists":{"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}');
function ContentSectionRight({ as: _Component = Section, h2 = "No more pen and paper.", p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.", button1Text = "Get started", button1Link = {
    href: "#"
}, button2Text = "Learn more", button2Link = {
    href: "#"
} }) {
    useInteractions(ContentSectionRight_interactionsData, (ContentSectionRight_module_default()));
    return /*#__PURE__*/ jsx_runtime_.jsx(_Component, {
        className: cx((ContentSectionRight_module_default()), "section"),
        tag: "section",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Block, {
            className: cx((ContentSectionRight_module_default()), "container"),
            tag: "div",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid, {
                className: cx((ContentSectionRight_module_default()), "grid_section", "reverse"),
                tag: "div",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Image, {
                        className: cx((ContentSectionRight_module_default()), "image_hero"),
                        id: cx((ContentSectionRight_module_default()), "w-node-_6489429f-9402-d770-42f7-e7892c5754d0-2c5754cd"),
                        loading: "lazy",
                        width: "auto",
                        height: "auto",
                        src: "https://uploads-ssl.webflow.com/64c9f378fba5cc5ff545eca2/64c9fb938ad487d0a8aea8ea_pexels-anna-nekrashevich-8534465.jpg"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                        className: cx((ContentSectionRight_module_default()), "wrapper_left-text"),
                        id: cx((ContentSectionRight_module_default()), "w-node-_6489429f-9402-d770-42f7-e7892c5754d1-2c5754cd"),
                        "data-w-id": "6489429f-9402-d770-42f7-e7892c5754d1",
                        tag: "div",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                                className: cx((ContentSectionRight_module_default()), "h2"),
                                tag: "h2",
                                children: h2
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                                className: cx((ContentSectionRight_module_default()), "p"),
                                children: p
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                                className: cx((ContentSectionRight_module_default()), "wrapper_2-buttons"),
                                tag: "div",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                                        className: cx((ContentSectionRight_module_default()), "button"),
                                        button: true,
                                        options: button1Link,
                                        children: button1Text
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                                        className: cx((ContentSectionRight_module_default()), "button", "secondary"),
                                        button: true,
                                        options: button2Link,
                                        children: button2Text
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./devlink/FaqSection.module.css
var FaqSection_module = __webpack_require__(9108);
var FaqSection_module_default = /*#__PURE__*/__webpack_require__.n(FaqSection_module);
;// CONCATENATED MODULE: ./devlink/FaqSection.js






const FaqSection_interactionsData = JSON.parse('{"events":{"e-43":{"id":"e-43","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-44"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".wrap_faq_q","originalId":"ae07735c-f015-a2c3-764e-bde487ab940e","appliesTo":"CLASS"},"targets":[{"selector":".wrap_faq_q","originalId":"ae07735c-f015-a2c3-764e-bde487ab940e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690963371441},"e-44":{"id":"e-44","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-43"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".wrap_faq_q","originalId":"ae07735c-f015-a2c3-764e-bde487ab940e","appliesTo":"CLASS"},"targets":[{"selector":".wrap_faq_q","originalId":"ae07735c-f015-a2c3-764e-bde487ab940e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690963371442},"e-45":{"id":"e-45","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-46"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".wrap_faq","originalId":"ae07735c-f015-a2c3-764e-bde487ab940d","appliesTo":"CLASS"},"targets":[{"selector":".wrap_faq","originalId":"ae07735c-f015-a2c3-764e-bde487ab940d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1690963805536},"e-57":{"id":"e-57","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-58"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".wrap_faq_q","originalId":"64c9f378fba5cc5ff545eca9|df532bf9-e491-52ba-7716-a9432cc7a776","appliesTo":"CLASS"},"targets":[{"selector":".wrap_faq_q","originalId":"64c9f378fba5cc5ff545eca9|df532bf9-e491-52ba-7716-a9432cc7a776","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690965844423},"e-58":{"id":"e-58","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-57"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".wrap_faq_q","originalId":"64c9f378fba5cc5ff545eca9|df532bf9-e491-52ba-7716-a9432cc7a776","appliesTo":"CLASS"},"targets":[{"selector":".wrap_faq_q","originalId":"64c9f378fba5cc5ff545eca9|df532bf9-e491-52ba-7716-a9432cc7a776","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690965844423},"e-59":{"id":"e-59","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-60"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".wrap_faq","originalId":"64c9f378fba5cc5ff545eca9|df532bf9-e491-52ba-7716-a9432cc7a775","appliesTo":"CLASS"},"targets":[{"selector":".wrap_faq","originalId":"64c9f378fba5cc5ff545eca9|df532bf9-e491-52ba-7716-a9432cc7a775","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1690965844423},"e-85":{"id":"e-85","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-86"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"10800dc3-e533-d729-64e1-05d9975ccf31","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"10800dc3-e533-d729-64e1-05d9975ccf31","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1690965897813}},"actionLists":{"a-3":{"id":"a-3","title":"FAQ Open","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".wrap_faq_a","selectorGuids":["90bce76e-28d2-0f25-8a6b-fb6dfa29cd0c"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-3-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon","selectorGuids":["5f4803ce-78c6-0ad1-7e8c-ae2522ab8dc7"]},"zValue":-90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-3-n-5","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".wrap_faq","selectorGuids":["64a0e39d-36f0-365e-238a-7a17ef7b591d"]},"globalSwatchId":"2ec0cb34","rValue":240,"bValue":240,"gValue":240,"aValue":1}}]},{"actionItems":[{"id":"a-3-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".wrap_faq_a","selectorGuids":["90bce76e-28d2-0f25-8a6b-fb6dfa29cd0c"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-3-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon","selectorGuids":["5f4803ce-78c6-0ad1-7e8c-ae2522ab8dc7"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-3-n-6","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"PARENT","selector":".wrap_faq","selectorGuids":["64a0e39d-36f0-365e-238a-7a17ef7b591d"]},"globalSwatchId":"60758858","rValue":7,"bValue":34,"gValue":7,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1690963377706},"a-4":{"id":"a-4","title":"FAQ Close","actionItemGroups":[{"actionItems":[{"id":"a-4-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".wrap_faq_a","selectorGuids":["90bce76e-28d2-0f25-8a6b-fb6dfa29cd0c"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-4-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon","selectorGuids":["5f4803ce-78c6-0ad1-7e8c-ae2522ab8dc7"]},"zValue":-90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-4-n-6","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"PARENT","selector":".wrap_faq","selectorGuids":["64a0e39d-36f0-365e-238a-7a17ef7b591d"]},"globalSwatchId":"2ec0cb34","rValue":240,"bValue":240,"gValue":240,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1690963377706},"a-5":{"id":"a-5","title":"FAQ Open 2","actionItemGroups":[{"actionItems":[{"id":"a-5-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".wrap_faq_a","selectorGuids":["90bce76e-28d2-0f25-8a6b-fb6dfa29cd0c"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-5-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon","selectorGuids":["5f4803ce-78c6-0ad1-7e8c-ae2522ab8dc7"]},"zValue":-90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-5-n-3","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".wrap_faq","selectorGuids":["64a0e39d-36f0-365e-238a-7a17ef7b591d"]},"globalSwatchId":"2ec0cb34","rValue":240,"bValue":240,"gValue":240,"aValue":1}}]},{"actionItems":[{"id":"a-5-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".wrap_faq_a","selectorGuids":["90bce76e-28d2-0f25-8a6b-fb6dfa29cd0c"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-5-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon","selectorGuids":["5f4803ce-78c6-0ad1-7e8c-ae2522ab8dc7"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-5-n-6","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"PARENT","selector":".wrap_faq","selectorGuids":["64a0e39d-36f0-365e-238a-7a17ef7b591d"]},"globalSwatchId":"60758858","rValue":7,"bValue":34,"gValue":7,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1690963377706},"a-6":{"id":"a-6","title":"FAQ Close 2","actionItemGroups":[{"actionItems":[{"id":"a-6-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".wrap_faq_a","selectorGuids":["90bce76e-28d2-0f25-8a6b-fb6dfa29cd0c"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-6-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon","selectorGuids":["5f4803ce-78c6-0ad1-7e8c-ae2522ab8dc7"]},"zValue":-90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-6-n-3","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"PARENT","selector":".wrap_faq","selectorGuids":["64a0e39d-36f0-365e-238a-7a17ef7b591d"]},"globalSwatchId":"2ec0cb34","rValue":240,"bValue":240,"gValue":240,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1690963377706},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}');
function FaqSection({ as: _Component = Section }) {
    useInteractions(FaqSection_interactionsData, (FaqSection_module_default()));
    return /*#__PURE__*/ jsx_runtime_.jsx(_Component, {
        className: cx((FaqSection_module_default()), "section"),
        tag: "section",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
            className: cx((FaqSection_module_default()), "container"),
            tag: "div",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                    className: cx((FaqSection_module_default()), "wrapper_left-text", "mb-40"),
                    "data-w-id": "10800dc3-e533-d729-64e1-05d9975ccf31",
                    tag: "div",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                            className: cx((FaqSection_module_default()), "h2"),
                            tag: "h2",
                            children: "Frequently asked questions"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                            className: cx((FaqSection_module_default()), "p"),
                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                    className: cx((FaqSection_module_default()), "wrap_faq_all"),
                    tag: "div",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                            className: cx((FaqSection_module_default()), "wrap_faq"),
                            tag: "div",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                                    className: cx((FaqSection_module_default()), "wrap_faq_q"),
                                    tag: "div",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                                            className: cx((FaqSection_module_default()), "h4"),
                                            tag: "h4",
                                            children: "What happens if I go over the plan limits?"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                            className: cx((FaqSection_module_default()), "icon"),
                                            value: "%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M14.5899%2016.0039L5.98193%207.39691L7.39593%205.98291L16.0029%2014.5889V7.00391H18.0029V18.0039H7.00293V16.0039H14.5899Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                                    className: cx((FaqSection_module_default()), "wrap_faq_a"),
                                    tag: "div",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                                        className: cx((FaqSection_module_default()), "p", "mb-40"),
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                            className: cx((FaqSection_module_default()), "wrap_faq"),
                            tag: "div",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                                    className: cx((FaqSection_module_default()), "wrap_faq_q"),
                                    tag: "div",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                                            className: cx((FaqSection_module_default()), "h4"),
                                            tag: "h4",
                                            children: "What happens if I go over the plan limits?"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                            className: cx((FaqSection_module_default()), "icon"),
                                            value: "%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M14.5899%2016.0039L5.98193%207.39691L7.39593%205.98291L16.0029%2014.5889V7.00391H18.0029V18.0039H7.00293V16.0039H14.5899Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                                    className: cx((FaqSection_module_default()), "wrap_faq_a"),
                                    tag: "div",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                                        className: cx((FaqSection_module_default()), "p", "mb-40"),
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                            className: cx((FaqSection_module_default()), "wrap_faq"),
                            tag: "div",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                                    className: cx((FaqSection_module_default()), "wrap_faq_q"),
                                    tag: "div",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                                            className: cx((FaqSection_module_default()), "h4"),
                                            tag: "h4",
                                            children: "What happens if I go over the plan limits?"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                            className: cx((FaqSection_module_default()), "icon"),
                                            value: "%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M14.5899%2016.0039L5.98193%207.39691L7.39593%205.98291L16.0029%2014.5889V7.00391H18.0029V18.0039H7.00293V16.0039H14.5899Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                                    className: cx((FaqSection_module_default()), "wrap_faq_a"),
                                    tag: "div",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                                        className: cx((FaqSection_module_default()), "p", "mb-40"),
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                            className: cx((FaqSection_module_default()), "wrap_faq"),
                            tag: "div",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                                    className: cx((FaqSection_module_default()), "wrap_faq_q"),
                                    tag: "div",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                                            className: cx((FaqSection_module_default()), "h4"),
                                            tag: "h4",
                                            children: "What happens if I go over the plan limits?"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                            className: cx((FaqSection_module_default()), "icon"),
                                            value: "%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M14.5899%2016.0039L5.98193%207.39691L7.39593%205.98291L16.0029%2014.5889V7.00391H18.0029V18.0039H7.00293V16.0039H14.5899Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                                    className: cx((FaqSection_module_default()), "wrap_faq_a"),
                                    tag: "div",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                                        className: cx((FaqSection_module_default()), "p", "mb-40"),
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                            className: cx((FaqSection_module_default()), "wrap_faq"),
                            tag: "div",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                                    className: cx((FaqSection_module_default()), "wrap_faq_q"),
                                    tag: "div",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                                            className: cx((FaqSection_module_default()), "h4"),
                                            tag: "h4",
                                            children: "What happens if I go over the plan limits?"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                            className: cx((FaqSection_module_default()), "icon"),
                                            value: "%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M14.5899%2016.0039L5.98193%207.39691L7.39593%205.98291L16.0029%2014.5889V7.00391H18.0029V18.0039H7.00293V16.0039H14.5899Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                                    className: cx((FaqSection_module_default()), "wrap_faq_a"),
                                    tag: "div",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                                        className: cx((FaqSection_module_default()), "p", "mb-40"),
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                            className: cx((FaqSection_module_default()), "wrap_faq"),
                            tag: "div",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                                    className: cx((FaqSection_module_default()), "wrap_faq_q"),
                                    tag: "div",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                                            className: cx((FaqSection_module_default()), "h4"),
                                            tag: "h4",
                                            children: "What happens if I go over the plan limits?"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                            className: cx((FaqSection_module_default()), "icon"),
                                            value: "%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M14.5899%2016.0039L5.98193%207.39691L7.39593%205.98291L16.0029%2014.5889V7.00391H18.0029V18.0039H7.00293V16.0039H14.5899Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                                    className: cx((FaqSection_module_default()), "wrap_faq_a"),
                                    tag: "div",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                                        className: cx((FaqSection_module_default()), "p", "mb-40"),
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./devlink/Footer.module.css
var Footer_module = __webpack_require__(8148);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./devlink/Footer.js





function Footer({ as: _Component = Block }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(_Component, {
        className: cx((Footer_module_default()), "section", "dark", "footer"),
        tag: "footer",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
            className: cx((Footer_module_default()), "container"),
            tag: "div",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid, {
                    className: cx((Footer_module_default()), "footer-top"),
                    tag: "div",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                            className: cx((Footer_module_default()), "footer-top_left"),
                            tag: "div",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(NavbarBrand, {
                                    className: cx((Footer_module_default()), "navbar_logo-link"),
                                    options: {
                                        href: "#"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                        className: cx((Footer_module_default()), "logo-code"),
                                        value: "%3Csvg%20id%3D%22logo-7%22%20width%3D%22124%22%20height%3D%2232%22%20viewbox%3D%220%200%20124%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cpath%20d%3D%22M36.87%2010.07H39.87V22.2H36.87V10.07ZM41.06%2017.62C41.06%2014.62%2042.9%2012.83%2045.74%2012.83C48.58%2012.83%2050.42%2014.62%2050.42%2017.62C50.42%2020.62%2048.62%2022.42%2045.74%2022.42C42.86%2022.42%2041.06%2020.67%2041.06%2017.62ZM47.41%2017.62C47.41%2015.97%2046.76%2015%2045.74%2015C44.72%2015%2044.08%2016%2044.08%2017.62C44.08%2019.24%2044.71%2020.22%2045.74%2020.22C46.77%2020.22%2047.41%2019.3%2047.41%2017.63V17.62ZM51.55%2022.79H54.43C54.5671%2023.0945%2054.7988%2023.3466%2055.0907%2023.5088C55.3826%2023.6709%2055.7191%2023.7345%2056.05%2023.69C57.19%2023.69%2057.79%2023.07%2057.79%2022.17V20.49H57.73C57.491%2021.0049%2057.1031%2021.4363%2056.6165%2021.7287C56.1299%2022.021%2055.5668%2022.1608%2055%2022.13C52.81%2022.13%2051.36%2020.46%2051.36%2017.59C51.36%2014.72%2052.74%2012.91%2055.04%2012.91C55.6246%2012.8871%2056.2022%2013.0434%2056.6955%2013.3579C57.1888%2013.6725%2057.5742%2014.1303%2057.8%2014.67V14.67V13H60.8V22.1C60.8%2024.29%2058.87%2025.65%2056.02%2025.65C53.37%2025.65%2051.72%2024.46%2051.55%2022.8V22.79ZM57.8%2017.61C57.8%2016.15%2057.13%2015.23%2056.07%2015.23C55.01%2015.23%2054.36%2016.14%2054.36%2017.61C54.36%2019.08%2055%2019.91%2056.07%2019.91C57.14%2019.91%2057.8%2019.1%2057.8%2017.62V17.61ZM61.93%2017.61C61.93%2014.61%2063.77%2012.82%2066.61%2012.82C69.45%2012.82%2071.3%2014.61%2071.3%2017.61C71.3%2020.61%2069.5%2022.41%2066.61%2022.41C63.72%2022.41%2061.93%2020.67%2061.93%2017.62V17.61ZM68.28%2017.61C68.28%2015.96%2067.63%2014.99%2066.61%2014.99C65.59%2014.99%2065%2016%2065%2017.63C65%2019.26%2065.63%2020.23%2066.65%2020.23C67.67%2020.23%2068.28%2019.3%2068.28%2017.63V17.61ZM72.44%2010.82C72.4321%2010.5171%2072.5144%2010.2187%2072.6763%209.96261C72.8383%209.70651%2073.0726%209.50427%2073.3496%209.38151C73.6266%209.25875%2073.9338%209.221%2074.2323%209.27305C74.5308%209.32511%2074.8071%209.46462%2075.0262%209.67389C75.2454%209.88317%2075.3974%2010.1528%2075.4631%2010.4486C75.5288%2010.7444%2075.5052%2011.053%2075.3952%2011.3354C75.2853%2011.6177%2075.094%2011.8611%2074.8456%2012.0346C74.5973%2012.2081%2074.3029%2012.304%2074%2012.31C73.7992%2012.3238%2073.5977%2012.2959%2073.4082%2012.2281C73.2186%2012.1603%2073.0452%2012.0541%2072.8987%2011.916C72.7522%2011.778%2072.6358%2011.6111%2072.5569%2011.4259C72.4779%2011.2408%2072.4381%2011.0413%2072.44%2010.84V10.82ZM72.44%2013.02H75.44V22.2H72.44V13.02ZM86.33%2017.61C86.33%2020.61%2085%2022.32%2082.72%2022.32C82.1354%2022.3575%2081.5533%2022.2146%2081.0525%2021.9106C80.5517%2021.6065%2080.1564%2021.156%2079.92%2020.62H79.86V25.14H76.86V13H79.86V14.64H79.92C80.1454%2014.0951%2080.5332%2013.6329%2081.0306%2013.3162C81.528%2012.9995%2082.1109%2012.8437%2082.7%2012.87C85%2012.91%2086.37%2014.63%2086.37%2017.63L86.33%2017.61ZM83.33%2017.61C83.33%2016.15%2082.66%2015.22%2081.61%2015.22C80.56%2015.22%2079.89%2016.16%2079.88%2017.61C79.87%2019.06%2080.56%2019.99%2081.61%2019.99C82.66%2019.99%2083.33%2019.08%2083.33%2017.63V17.61ZM91.48%2012.81C93.97%2012.81%2095.48%2013.99%2095.55%2015.88H92.82C92.82%2015.23%2092.28%2014.82%2091.45%2014.82C90.62%2014.82%2090.25%2015.14%2090.25%2015.61C90.25%2016.08%2090.58%2016.23%2091.25%2016.37L93.17%2016.76C95%2017.15%2095.78%2017.89%2095.78%2019.28C95.78%2021.18%2094.05%2022.4%2091.5%2022.4C88.95%2022.4%2087.28%2021.18%2087.15%2019.31H90.04C90.13%2019.99%2090.67%2020.39%2091.55%2020.39C92.43%2020.39%2092.83%2020.1%2092.83%2019.62C92.83%2019.14%2092.55%2019.04%2091.83%2018.89L90.1%2018.52C88.31%2018.15%2087.37%2017.2%2087.37%2015.8C87.39%2014%2089%2012.83%2091.48%2012.83V12.81ZM105.79%2022.18H102.9V20.47H102.84C102.681%2021.0441%20102.331%2021.5466%20101.847%2021.8941C101.363%2022.2415%20100.775%2022.413%20100.18%2022.38C99.7242%2022.4059%2099.2682%2022.3337%2098.8427%2022.1682C98.4172%2022.0027%2098.0322%2021.7479%2097.7137%2021.4208C97.3952%2021.0938%2097.1505%2020.7021%2096.9964%2020.2724C96.8422%2019.8427%2096.7821%2019.3849%2096.82%2018.93V13H99.82V18.24C99.82%2019.33%20100.38%2019.91%20101.31%2019.91C101.528%2019.9104%20101.744%2019.8643%20101.943%2019.7746C102.141%2019.6849%20102.319%2019.5537%20102.463%2019.3899C102.606%2019.226%20102.714%2019.0333%20102.777%2018.8247C102.84%2018.616%20102.859%2018.3962%20102.83%2018.18V13H105.83L105.79%2022.18ZM107.24%2013H110.14V14.77H110.2C110.359%2014.2035%20110.702%2013.7057%20111.174%2013.3547C111.646%2013.0037%20112.222%2012.8191%20112.81%2012.83C113.409%2012.7821%20114.003%2012.9612%20114.476%2013.3318C114.948%2013.7024%20115.264%2014.2372%20115.36%2014.83H115.42C115.601%2014.2309%20115.977%2013.7093%20116.488%2013.3472C116.998%2012.9851%20117.615%2012.8031%20118.24%2012.83C118.648%2012.8163%20119.054%2012.8886%20119.432%2013.0422C119.811%2013.1957%20120.152%2013.4272%20120.435%2013.7214C120.718%2014.0157%20120.936%2014.3662%20121.075%2014.7501C121.213%2015.134%20121.27%2015.5429%20121.24%2015.95V22.2H118.24V16.75C118.24%2015.75%20117.79%2015.29%20116.95%2015.29C116.763%2015.2884%20116.577%2015.327%20116.406%2015.4032C116.235%2015.4794%20116.082%2015.5914%20115.958%2015.7317C115.834%2015.872%20115.741%2016.0372%20115.686%2016.2163C115.631%2016.3955%20115.616%2016.5843%20115.64%2016.77V22.2H112.79V16.71C112.79%2015.79%20112.34%2015.29%20111.52%2015.29C111.331%2015.2901%20111.143%2015.3303%20110.971%2015.408C110.798%2015.4858%20110.643%2015.5993%20110.518%2015.741C110.392%2015.8827%20110.298%2016.0495%20110.241%2016.2304C110.185%2016.4112%20110.167%2016.6019%20110.19%2016.79V22.2H107.19L107.24%2013Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3Cpath%20d%3D%22M28.48%2010.62C27.9711%209.45636%2027.2976%208.37193%2026.48%207.4C25.2715%205.92034%2023.7633%204.71339%2022.0547%203.8586C20.3461%203.00382%2018.4758%202.52057%2016.567%202.44066C14.6582%202.36075%2012.7541%202.68599%2010.98%203.39499C9.20597%204.10398%207.60217%205.18065%206.2742%206.55413C4.94622%207.9276%203.92417%209.56675%203.27532%2011.3637C2.62647%2013.1606%202.36552%2015.0746%202.50966%2016.9796C2.65381%2018.8847%203.19976%2020.7376%204.1116%2022.4164C5.02344%2024.0953%206.28049%2025.562%207.80001%2026.72C8.77501%2027.4779%209.85236%2028.094%2011%2028.55C12.609%2029.2094%2014.3311%2029.549%2016.07%2029.55C19.6594%2029.5421%2023.0992%2028.1113%2025.6355%2025.5713C28.1717%2023.0313%2029.5974%2019.5894%2029.6%2016C29.6026%2014.1485%2029.2213%2012.3166%2028.48%2010.62V10.62ZM16.06%205.18999C17.6216%205.18983%2019.1643%205.53113%2020.58%206.18999V6.18999C20.2348%206.33916%2019.8718%206.44335%2019.5%206.5C18.2766%206.67709%2017.1433%207.24507%2016.2692%208.11917C15.3951%208.99326%2014.8271%2010.1266%2014.65%2011.35C14.5723%2012.0361%2014.2602%2012.6744%2013.7665%2013.1572C13.2728%2013.64%2012.6277%2013.9376%2011.94%2014C10.7166%2014.1771%209.58327%2014.7451%208.70918%2015.6192C7.83509%2016.4933%207.2671%2017.6266%207.09001%2018.85C7.03005%2019.5024%206.7517%2020.1155%206.30001%2020.59V20.59C5.52066%2018.9433%205.17056%2017.1261%205.28228%2015.3077C5.394%2013.4893%205.96391%2011.7287%206.93898%2010.1897C7.91404%208.65079%209.26258%207.38351%2010.8591%206.50584C12.4556%205.62817%2014.2482%205.16864%2016.07%205.16999L16.06%205.18999ZM7.79001%2023C7.91001%2022.89%208.03001%2022.79%208.15001%2022.67C9.03966%2021.8075%209.61072%2020.6689%209.77001%2019.44C9.83459%2018.7492%2010.143%2018.104%2010.64%2017.62C11.1183%2017.1222%2011.762%2016.8163%2012.45%2016.76C13.6734%2016.5829%2014.8067%2016.0149%2015.6808%2015.1408C16.5549%2014.2667%2017.1229%2013.1334%2017.3%2011.91C17.3433%2011.1875%2017.6533%2010.5068%2018.17%2010C18.6601%209.51185%2019.3099%209.2171%2020%209.16999C21.1239%209.01536%2022.1721%208.51571%2023%207.74C23.9427%208.52207%2024.7413%209.46289%2025.36%2010.52C25.322%2010.5713%2025.2784%2010.6183%2025.23%2010.66C24.7527%2011.1622%2024.1098%2011.4748%2023.42%2011.54C22.1953%2011.714%2021.0603%2012.281%2020.1856%2013.1556C19.311%2014.0303%2018.744%2015.1653%2018.57%2016.39C18.4995%2017.0784%2018.1932%2017.7213%2017.703%2018.2097C17.2127%2018.6982%2016.5687%2019.0021%2015.88%2019.07C14.653%2019.2457%2013.5155%2019.8126%2012.6363%2020.6863C11.7572%2021.5601%2011.1833%2022.6941%2011%2023.92C10.9462%2024.4087%2010.7783%2024.878%2010.51%2025.29C9.484%2024.6808%208.5651%2023.9072%207.79001%2023V23ZM16.06%2026.86C15.0453%2026.8611%2014.0354%2026.7197%2013.06%2026.44C13.3937%2025.818%2013.6106%2025.1401%2013.7%2024.44C13.7701%2023.7531%2014.075%2023.1114%2014.5632%2022.6232C15.0514%2022.135%2015.6931%2021.8301%2016.38%2021.76C17.6052%2021.5849%2018.7408%2021.0178%2019.6169%2020.1435C20.4929%2019.2693%2021.0624%2018.1348%2021.24%2016.91C21.3101%2016.2231%2021.615%2015.5814%2022.1032%2015.0932C22.5914%2014.605%2023.2331%2014.3001%2023.92%2014.23C24.842%2014.1101%2025.7208%2013.7668%2026.48%2013.23C26.9016%2014.8279%2026.9515%2016.5011%2026.626%2018.1213C26.3005%2019.7415%2025.6081%2021.2657%2024.6021%2022.5768C23.5961%2023.8878%2022.3032%2024.9511%2020.8224%2025.6849C19.3417%2026.4187%2017.7126%2026.8036%2016.06%2026.81V26.86Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3C%2Fsvg%3E"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                                    className: cx((Footer_module_default()), "spacer-20"),
                                    tag: "div"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                                    className: cx((Footer_module_default()), "p"),
                                    tag: "div",
                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                                    className: cx((Footer_module_default()), "spacer-30"),
                                    tag: "div"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid, {
                                    className: cx((Footer_module_default()), "social_link-wrap"),
                                    tag: "div",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                                            className: cx((Footer_module_default()), "social-link"),
                                            button: false,
                                            options: {
                                                href: "#"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                                className: cx((Footer_module_default()), "social-icon"),
                                                value: "%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M5%203H19C20.1046%203%2021%203.89543%2021%205V19C21%2020.1046%2020.1046%2021%2019%2021H5C3.89543%2021%203%2020.1046%203%2019V5C3%203.89543%203.89543%203%205%203ZM8%2018C8.27614%2018%208.5%2017.7761%208.5%2017.5V10.5C8.5%2010.2239%208.27614%2010%208%2010H6.5C6.22386%2010%206%2010.2239%206%2010.5V17.5C6%2017.7761%206.22386%2018%206.5%2018H8ZM7.25%209C6.42157%209%205.75%208.32843%205.75%207.5C5.75%206.67157%206.42157%206%207.25%206C8.07843%206%208.75%206.67157%208.75%207.5C8.75%208.32843%208.07843%209%207.25%209ZM17.5%2018C17.7761%2018%2018%2017.7761%2018%2017.5V12.9C18.0325%2011.3108%2016.8576%209.95452%2015.28%209.76C14.177%209.65925%2013.1083%2010.1744%2012.5%2011.1V10.5C12.5%2010.2239%2012.2761%2010%2012%2010H10.5C10.2239%2010%2010%2010.2239%2010%2010.5V17.5C10%2017.7761%2010.2239%2018%2010.5%2018H12C12.2761%2018%2012.5%2017.7761%2012.5%2017.5V13.75C12.5%2012.9216%2013.1716%2012.25%2014%2012.25C14.8284%2012.25%2015.5%2012.9216%2015.5%2013.75V17.5C15.5%2017.7761%2015.7239%2018%2016%2018H17.5Z%22%20fill%3D%22CurrentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                                            className: cx((Footer_module_default()), "social-link"),
                                            button: false,
                                            options: {
                                                href: "#"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                                className: cx((Footer_module_default()), "social-icon"),
                                                value: "%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M16.5%206H13.5C12.9477%206%2012.5%206.44772%2012.5%207V10H16.5C16.6137%209.99748%2016.7216%2010.0504%2016.7892%2010.1419C16.8568%2010.2334%2016.8758%2010.352%2016.84%2010.46L16.1%2012.66C16.0318%2012.8619%2015.8431%2012.9984%2015.63%2013H12.5V20.5C12.5%2020.7761%2012.2761%2021%2012%2021H9.5C9.22386%2021%209%2020.7761%209%2020.5V13H7.5C7.22386%2013%207%2012.7761%207%2012.5V10.5C7%2010.2239%207.22386%2010%207.5%2010H9V7C9%204.79086%2010.7909%203%2013%203H16.5C16.7761%203%2017%203.22386%2017%203.5V5.5C17%205.77614%2016.7761%206%2016.5%206Z%22%20fill%3D%22CurrentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                                            className: cx((Footer_module_default()), "social-link"),
                                            button: false,
                                            options: {
                                                href: "#"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                                className: cx((Footer_module_default()), "social-icon"),
                                                value: "%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M16%203H8C5.23858%203%203%205.23858%203%208V16C3%2018.7614%205.23858%2021%208%2021H16C18.7614%2021%2021%2018.7614%2021%2016V8C21%205.23858%2018.7614%203%2016%203ZM19.25%2016C19.2445%2017.7926%2017.7926%2019.2445%2016%2019.25H8C6.20735%2019.2445%204.75549%2017.7926%204.75%2016V8C4.75549%206.20735%206.20735%204.75549%208%204.75H16C17.7926%204.75549%2019.2445%206.20735%2019.25%208V16ZM16.75%208.25C17.3023%208.25%2017.75%207.80228%2017.75%207.25C17.75%206.69772%2017.3023%206.25%2016.75%206.25C16.1977%206.25%2015.75%206.69772%2015.75%207.25C15.75%207.80228%2016.1977%208.25%2016.75%208.25ZM12%207.5C9.51472%207.5%207.5%209.51472%207.5%2012C7.5%2014.4853%209.51472%2016.5%2012%2016.5C14.4853%2016.5%2016.5%2014.4853%2016.5%2012C16.5027%2010.8057%2016.0294%209.65957%2015.1849%208.81508C14.3404%207.97059%2013.1943%207.49734%2012%207.5ZM9.25%2012C9.25%2013.5188%2010.4812%2014.75%2012%2014.75C13.5188%2014.75%2014.75%2013.5188%2014.75%2012C14.75%2010.4812%2013.5188%209.25%2012%209.25C10.4812%209.25%209.25%2010.4812%209.25%2012Z%22%20fill%3D%22CurrentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                                            className: cx((Footer_module_default()), "social-link"),
                                            button: false,
                                            options: {
                                                href: "#"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                                className: cx((Footer_module_default()), "social-icon"),
                                                value: "%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M20.9728%206.7174C20.5084%207.33692%2019.947%207.87733%2019.3103%208.31776C19.3103%208.47959%2019.3103%208.64142%2019.3103%208.81225C19.3154%2011.7511%2018.1415%2014.5691%2016.0518%2016.6345C13.962%2018.6999%2011.1312%2019.8399%208.19405%2019.7989C6.49599%2019.8046%204.81967%2019.4169%203.29642%2018.6661C3.21428%2018.6302%203.16131%2018.549%203.16162%2018.4593V18.3604C3.16162%2018.2313%203.26623%2018.1267%203.39527%2018.1267C5.06442%2018.0716%206.67402%2017.4929%207.99634%2016.4724C6.48553%2016.4419%205.12619%2015.5469%204.5006%2014.1707C4.46901%2014.0956%204.47884%2014.0093%204.52657%2013.9432C4.57429%2013.8771%204.653%2013.8407%204.73425%2013.8471C5.19342%2013.8932%205.65718%2013.8505%206.1002%2013.7212C4.43239%2013.375%203.17921%2011.9904%202.99986%2010.2957C2.99349%2010.2144%203.02992%2010.1357%203.096%2010.0879C3.16207%2010.0402%203.24824%2010.0303%203.32338%2010.062C3.77094%2010.2595%204.25409%2010.3635%204.74324%2010.3676C3.28184%209.40846%202.65061%207.58405%203.20655%205.92622C3.26394%205.76513%203.40181%205.64612%203.5695%205.61294C3.73718%205.57975%203.90996%205.63728%204.02432%205.76439C5.99639%207.86325%208.70604%209.11396%2011.5819%209.25279C11.5083%208.95885%2011.4721%208.65676%2011.4741%208.35372C11.501%206.76472%2012.4842%205.34921%2013.9634%204.76987C15.4425%204.19054%2017.1249%204.56203%2018.223%205.71044C18.9714%205.56785%2019.695%205.31645%2020.3707%204.96421C20.4202%204.93331%2020.483%204.93331%2020.5325%204.96421C20.5634%205.01373%2020.5634%205.07652%2020.5325%205.12604C20.2052%205.87552%2019.6523%206.50412%2018.9509%206.92419C19.5651%206.85296%2020.1685%206.70807%2020.7482%206.49264C20.797%206.45942%2020.8611%206.45942%2020.9099%206.49264C20.9508%206.51134%2020.9814%206.54711%2020.9935%206.59042C21.0056%206.63373%2020.998%206.68018%2020.9728%206.7174Z%22%20fill%3D%22CurrentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Grid, {
                            className: cx((Footer_module_default()), "footer_items-grid"),
                            tag: "div",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                                className: cx((Footer_module_default()), "footer-column"),
                                tag: "div",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                                        className: cx((Footer_module_default()), "footer-link"),
                                        button: false,
                                        options: {
                                            href: "#"
                                        },
                                        children: "Home"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                                        className: cx((Footer_module_default()), "footer-link"),
                                        button: false,
                                        options: {
                                            href: "#"
                                        },
                                        children: "About Us"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                                        className: cx((Footer_module_default()), "footer-link"),
                                        button: false,
                                        options: {
                                            href: "#"
                                        },
                                        children: "Pricing"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                                        className: cx((Footer_module_default()), "footer-link"),
                                        button: false,
                                        options: {
                                            href: "/#services"
                                        },
                                        children: "Log In"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                                        className: cx((Footer_module_default()), "footer-link"),
                                        button: false,
                                        options: {
                                            href: "#"
                                        },
                                        children: "Sign Up"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                            className: cx((Footer_module_default()), "footer-column"),
                            tag: "div",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                                    className: cx((Footer_module_default()), "footer-link"),
                                    button: false,
                                    options: {
                                        href: "#"
                                    },
                                    children: "Contact Us"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                                    className: cx((Footer_module_default()), "footer-link"),
                                    button: false,
                                    options: {
                                        href: "#"
                                    },
                                    children: "+0 333-333-4444"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                                    className: cx((Footer_module_default()), "footer-link"),
                                    button: false,
                                    options: {
                                        href: "#"
                                    },
                                    children: "info@gmail.com"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                                    className: cx((Footer_module_default()), "footer-link"),
                                    button: false,
                                    options: {
                                        href: "#"
                                    },
                                    children: "011101 Binary Street, Earth"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                    className: cx((Footer_module_default()), "spacer-40"),
                    tag: "div"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                    className: cx((Footer_module_default()), "footer-bot"),
                    tag: "div",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                        className: cx((Footer_module_default()), "p", "mb-0"),
                        tag: "div",
                        children: "\xa9 2023 Memberstack. All right reserved."
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./devlink/FormBlock.module.css
var FormBlock_module = __webpack_require__(9151);
var FormBlock_module_default = /*#__PURE__*/__webpack_require__.n(FormBlock_module);
;// CONCATENATED MODULE: ./devlink/FormBlock.js





function FormBlock({ as: _Component = Block, inner }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(_Component, {
        className: cx((FormBlock_module_default()), "form-block"),
        tag: "div",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Block, {
            className: cx((FormBlock_module_default()), "inner"),
            tag: "div",
            children: inner
        })
    });
}

// EXTERNAL MODULE: ./devlink/H2.module.css
var H2_module = __webpack_require__(7373);
var H2_module_default = /*#__PURE__*/__webpack_require__.n(H2_module);
;// CONCATENATED MODULE: ./devlink/H2.js





function H2({ as: _Component = Heading, text = "Heading" }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(_Component, {
        className: cx((H2_module_default()), "h2"),
        tag: "h2",
        children: text
    });
}

// EXTERNAL MODULE: ./devlink/Hero.module.css
var Hero_module = __webpack_require__(2669);
var Hero_module_default = /*#__PURE__*/__webpack_require__.n(Hero_module);
;// CONCATENATED MODULE: ./devlink/Hero.js






const Hero_interactionsData = JSON.parse('{"events":{"e-3":{"id":"e-3","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"06a29d81-e628-8800-7847-89bd04d52765","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"06a29d81-e628-8800-7847-89bd04d52765","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":150,"direction":"BOTTOM","effectIn":true},"createdOn":1690960667828}},"actionLists":{"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}');
function Hero({ as: _Component = Section, h1 = "Save your notes with our amazing React app", p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.", button1Text = "Get started", button1Link = {
    href: "#"
}, button2Text = "Learn more", button2Link = {
    href: "#"
}, image = "https://uploads-ssl.webflow.com/64c9f378fba5cc5ff545eca2/64c9f6a58ad487d0a8a8c706_pexels-anna-nekrashevich-7550891.jpg" }) {
    useInteractions(Hero_interactionsData, (Hero_module_default()));
    return /*#__PURE__*/ jsx_runtime_.jsx(_Component, {
        className: cx((Hero_module_default()), "section"),
        tag: "section",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Block, {
            className: cx((Hero_module_default()), "container"),
            tag: "div",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid, {
                className: cx((Hero_module_default()), "grid_section"),
                tag: "div",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                        className: cx((Hero_module_default()), "wrapper_left-text"),
                        id: cx((Hero_module_default()), "w-node-_06a29d81-e628-8800-7847-89bd04d52765-04d52762"),
                        "data-w-id": "06a29d81-e628-8800-7847-89bd04d52765",
                        tag: "div",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                                className: cx((Hero_module_default()), "h1"),
                                tag: "h1",
                                children: h1
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                                className: cx((Hero_module_default()), "p", "mb-40"),
                                children: p
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                                className: cx((Hero_module_default()), "wrapper_2-buttons"),
                                tag: "div",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                                        className: cx((Hero_module_default()), "button"),
                                        button: true,
                                        options: button1Link,
                                        children: button1Text
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                                        className: cx((Hero_module_default()), "button", "secondary"),
                                        button: true,
                                        options: button2Link,
                                        children: button2Text
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Image, {
                        className: cx((Hero_module_default()), "image_hero"),
                        id: cx((Hero_module_default()), "w-node-_06a29d81-e628-8800-7847-89bd04d5276f-04d52762"),
                        loading: "lazy",
                        width: "auto",
                        height: "auto",
                        src: image
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./devlink/HeroFlat.module.css
var HeroFlat_module = __webpack_require__(1967);
var HeroFlat_module_default = /*#__PURE__*/__webpack_require__.n(HeroFlat_module);
;// CONCATENATED MODULE: ./devlink/HeroFlat.js





function HeroFlat({ as: _Component = Section, h1 = "Welcome back, member", p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere." }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(_Component, {
        className: cx((HeroFlat_module_default()), "section"),
        tag: "section",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
            className: cx((HeroFlat_module_default()), "container"),
            tag: "div",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                    className: cx((HeroFlat_module_default()), "h1"),
                    tag: "h1",
                    children: h1
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                    children: p
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./devlink/LoadingBlock.module.css
var LoadingBlock_module = __webpack_require__(2722);
var LoadingBlock_module_default = /*#__PURE__*/__webpack_require__.n(LoadingBlock_module);
;// CONCATENATED MODULE: ./devlink/LoadingBlock.js





function LoadingBlock({ as: _Component = Block }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(_Component, {
        className: cx((LoadingBlock_module_default()), "loading-wrap"),
        tag: "div",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Image, {
                className: cx((LoadingBlock_module_default()), "logo"),
                loading: "lazy",
                width: "auto",
                height: "auto",
                src: "https://uploads-ssl.webflow.com/64c9f378fba5cc5ff545eca2/64c9feabe2a7676e8f109793_642c6a9bba6d764c713c1522_template%20logo%20black.svg"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                className: cx((LoadingBlock_module_default()), "h3"),
                tag: "h1",
                children: "Loading Dashboard"
            })
        ]
    });
}

// EXTERNAL MODULE: ./devlink/LogoSection.module.css
var LogoSection_module = __webpack_require__(5207);
var LogoSection_module_default = /*#__PURE__*/__webpack_require__.n(LogoSection_module);
;// CONCATENATED MODULE: ./devlink/LogoSection.js






const LogoSection_interactionsData = JSON.parse('{"events":{"e-7":{"id":"e-7","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-8"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"36c46b65-bec7-ad86-567a-d0c29448d9cd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"36c46b65-bec7-ad86-567a-d0c29448d9cd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1690960705509}},"actionLists":{"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}');
function LogoSection({ as: _Component = Section, h2 = "Trusted by the best companies", p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." }) {
    useInteractions(LogoSection_interactionsData, (LogoSection_module_default()));
    return /*#__PURE__*/ jsx_runtime_.jsx(_Component, {
        className: cx((LogoSection_module_default()), "section", "dark"),
        tag: "section",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
            className: cx((LogoSection_module_default()), "container", "mw-800"),
            tag: "div",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                    className: cx((LogoSection_module_default()), "wrapper_center-text", "mb-40"),
                    "data-w-id": "36c46b65-bec7-ad86-567a-d0c29448d9cd",
                    tag: "div",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                            className: cx((LogoSection_module_default()), "h2", "center"),
                            tag: "h2",
                            children: h2
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                            className: cx((LogoSection_module_default()), "p"),
                            children: p
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid, {
                    className: cx((LogoSection_module_default()), "grid_logos"),
                    tag: "div",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                            className: cx((LogoSection_module_default()), "logo-code", "grayscale"),
                            id: cx((LogoSection_module_default()), "w-node-_36c46b65-bec7-ad86-567a-d0c29448d9d3-9448d9cb"),
                            tag: "div",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                className: cx((LogoSection_module_default()), "logo-code"),
                                value: "%3Csvg%20id%3D%22logo-7%22%20width%3D%22124%22%20height%3D%2232%22%20viewbox%3D%220%200%20124%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cpath%20d%3D%22M36.87%2010.07H39.87V22.2H36.87V10.07ZM41.06%2017.62C41.06%2014.62%2042.9%2012.83%2045.74%2012.83C48.58%2012.83%2050.42%2014.62%2050.42%2017.62C50.42%2020.62%2048.62%2022.42%2045.74%2022.42C42.86%2022.42%2041.06%2020.67%2041.06%2017.62ZM47.41%2017.62C47.41%2015.97%2046.76%2015%2045.74%2015C44.72%2015%2044.08%2016%2044.08%2017.62C44.08%2019.24%2044.71%2020.22%2045.74%2020.22C46.77%2020.22%2047.41%2019.3%2047.41%2017.63V17.62ZM51.55%2022.79H54.43C54.5671%2023.0945%2054.7988%2023.3466%2055.0907%2023.5088C55.3826%2023.6709%2055.7191%2023.7345%2056.05%2023.69C57.19%2023.69%2057.79%2023.07%2057.79%2022.17V20.49H57.73C57.491%2021.0049%2057.1031%2021.4363%2056.6165%2021.7287C56.1299%2022.021%2055.5668%2022.1608%2055%2022.13C52.81%2022.13%2051.36%2020.46%2051.36%2017.59C51.36%2014.72%2052.74%2012.91%2055.04%2012.91C55.6246%2012.8871%2056.2022%2013.0434%2056.6955%2013.3579C57.1888%2013.6725%2057.5742%2014.1303%2057.8%2014.67V14.67V13H60.8V22.1C60.8%2024.29%2058.87%2025.65%2056.02%2025.65C53.37%2025.65%2051.72%2024.46%2051.55%2022.8V22.79ZM57.8%2017.61C57.8%2016.15%2057.13%2015.23%2056.07%2015.23C55.01%2015.23%2054.36%2016.14%2054.36%2017.61C54.36%2019.08%2055%2019.91%2056.07%2019.91C57.14%2019.91%2057.8%2019.1%2057.8%2017.62V17.61ZM61.93%2017.61C61.93%2014.61%2063.77%2012.82%2066.61%2012.82C69.45%2012.82%2071.3%2014.61%2071.3%2017.61C71.3%2020.61%2069.5%2022.41%2066.61%2022.41C63.72%2022.41%2061.93%2020.67%2061.93%2017.62V17.61ZM68.28%2017.61C68.28%2015.96%2067.63%2014.99%2066.61%2014.99C65.59%2014.99%2065%2016%2065%2017.63C65%2019.26%2065.63%2020.23%2066.65%2020.23C67.67%2020.23%2068.28%2019.3%2068.28%2017.63V17.61ZM72.44%2010.82C72.4321%2010.5171%2072.5144%2010.2187%2072.6763%209.96261C72.8383%209.70651%2073.0726%209.50427%2073.3496%209.38151C73.6266%209.25875%2073.9338%209.221%2074.2323%209.27305C74.5308%209.32511%2074.8071%209.46462%2075.0262%209.67389C75.2454%209.88317%2075.3974%2010.1528%2075.4631%2010.4486C75.5288%2010.7444%2075.5052%2011.053%2075.3952%2011.3354C75.2853%2011.6177%2075.094%2011.8611%2074.8456%2012.0346C74.5973%2012.2081%2074.3029%2012.304%2074%2012.31C73.7992%2012.3238%2073.5977%2012.2959%2073.4082%2012.2281C73.2186%2012.1603%2073.0452%2012.0541%2072.8987%2011.916C72.7522%2011.778%2072.6358%2011.6111%2072.5569%2011.4259C72.4779%2011.2408%2072.4381%2011.0413%2072.44%2010.84V10.82ZM72.44%2013.02H75.44V22.2H72.44V13.02ZM86.33%2017.61C86.33%2020.61%2085%2022.32%2082.72%2022.32C82.1354%2022.3575%2081.5533%2022.2146%2081.0525%2021.9106C80.5517%2021.6065%2080.1564%2021.156%2079.92%2020.62H79.86V25.14H76.86V13H79.86V14.64H79.92C80.1454%2014.0951%2080.5332%2013.6329%2081.0306%2013.3162C81.528%2012.9995%2082.1109%2012.8437%2082.7%2012.87C85%2012.91%2086.37%2014.63%2086.37%2017.63L86.33%2017.61ZM83.33%2017.61C83.33%2016.15%2082.66%2015.22%2081.61%2015.22C80.56%2015.22%2079.89%2016.16%2079.88%2017.61C79.87%2019.06%2080.56%2019.99%2081.61%2019.99C82.66%2019.99%2083.33%2019.08%2083.33%2017.63V17.61ZM91.48%2012.81C93.97%2012.81%2095.48%2013.99%2095.55%2015.88H92.82C92.82%2015.23%2092.28%2014.82%2091.45%2014.82C90.62%2014.82%2090.25%2015.14%2090.25%2015.61C90.25%2016.08%2090.58%2016.23%2091.25%2016.37L93.17%2016.76C95%2017.15%2095.78%2017.89%2095.78%2019.28C95.78%2021.18%2094.05%2022.4%2091.5%2022.4C88.95%2022.4%2087.28%2021.18%2087.15%2019.31H90.04C90.13%2019.99%2090.67%2020.39%2091.55%2020.39C92.43%2020.39%2092.83%2020.1%2092.83%2019.62C92.83%2019.14%2092.55%2019.04%2091.83%2018.89L90.1%2018.52C88.31%2018.15%2087.37%2017.2%2087.37%2015.8C87.39%2014%2089%2012.83%2091.48%2012.83V12.81ZM105.79%2022.18H102.9V20.47H102.84C102.681%2021.0441%20102.331%2021.5466%20101.847%2021.8941C101.363%2022.2415%20100.775%2022.413%20100.18%2022.38C99.7242%2022.4059%2099.2682%2022.3337%2098.8427%2022.1682C98.4172%2022.0027%2098.0322%2021.7479%2097.7137%2021.4208C97.3952%2021.0938%2097.1505%2020.7021%2096.9964%2020.2724C96.8422%2019.8427%2096.7821%2019.3849%2096.82%2018.93V13H99.82V18.24C99.82%2019.33%20100.38%2019.91%20101.31%2019.91C101.528%2019.9104%20101.744%2019.8643%20101.943%2019.7746C102.141%2019.6849%20102.319%2019.5537%20102.463%2019.3899C102.606%2019.226%20102.714%2019.0333%20102.777%2018.8247C102.84%2018.616%20102.859%2018.3962%20102.83%2018.18V13H105.83L105.79%2022.18ZM107.24%2013H110.14V14.77H110.2C110.359%2014.2035%20110.702%2013.7057%20111.174%2013.3547C111.646%2013.0037%20112.222%2012.8191%20112.81%2012.83C113.409%2012.7821%20114.003%2012.9612%20114.476%2013.3318C114.948%2013.7024%20115.264%2014.2372%20115.36%2014.83H115.42C115.601%2014.2309%20115.977%2013.7093%20116.488%2013.3472C116.998%2012.9851%20117.615%2012.8031%20118.24%2012.83C118.648%2012.8163%20119.054%2012.8886%20119.432%2013.0422C119.811%2013.1957%20120.152%2013.4272%20120.435%2013.7214C120.718%2014.0157%20120.936%2014.3662%20121.075%2014.7501C121.213%2015.134%20121.27%2015.5429%20121.24%2015.95V22.2H118.24V16.75C118.24%2015.75%20117.79%2015.29%20116.95%2015.29C116.763%2015.2884%20116.577%2015.327%20116.406%2015.4032C116.235%2015.4794%20116.082%2015.5914%20115.958%2015.7317C115.834%2015.872%20115.741%2016.0372%20115.686%2016.2163C115.631%2016.3955%20115.616%2016.5843%20115.64%2016.77V22.2H112.79V16.71C112.79%2015.79%20112.34%2015.29%20111.52%2015.29C111.331%2015.2901%20111.143%2015.3303%20110.971%2015.408C110.798%2015.4858%20110.643%2015.5993%20110.518%2015.741C110.392%2015.8827%20110.298%2016.0495%20110.241%2016.2304C110.185%2016.4112%20110.167%2016.6019%20110.19%2016.79V22.2H107.19L107.24%2013Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3Cpath%20d%3D%22M28.48%2010.62C27.9711%209.45636%2027.2976%208.37193%2026.48%207.4C25.2715%205.92034%2023.7633%204.71339%2022.0547%203.8586C20.3461%203.00382%2018.4758%202.52057%2016.567%202.44066C14.6582%202.36075%2012.7541%202.68599%2010.98%203.39499C9.20597%204.10398%207.60217%205.18065%206.2742%206.55413C4.94622%207.9276%203.92417%209.56675%203.27532%2011.3637C2.62647%2013.1606%202.36552%2015.0746%202.50966%2016.9796C2.65381%2018.8847%203.19976%2020.7376%204.1116%2022.4164C5.02344%2024.0953%206.28049%2025.562%207.80001%2026.72C8.77501%2027.4779%209.85236%2028.094%2011%2028.55C12.609%2029.2094%2014.3311%2029.549%2016.07%2029.55C19.6594%2029.5421%2023.0992%2028.1113%2025.6355%2025.5713C28.1717%2023.0313%2029.5974%2019.5894%2029.6%2016C29.6026%2014.1485%2029.2213%2012.3166%2028.48%2010.62V10.62ZM16.06%205.18999C17.6216%205.18983%2019.1643%205.53113%2020.58%206.18999V6.18999C20.2348%206.33916%2019.8718%206.44335%2019.5%206.5C18.2766%206.67709%2017.1433%207.24507%2016.2692%208.11917C15.3951%208.99326%2014.8271%2010.1266%2014.65%2011.35C14.5723%2012.0361%2014.2602%2012.6744%2013.7665%2013.1572C13.2728%2013.64%2012.6277%2013.9376%2011.94%2014C10.7166%2014.1771%209.58327%2014.7451%208.70918%2015.6192C7.83509%2016.4933%207.2671%2017.6266%207.09001%2018.85C7.03005%2019.5024%206.7517%2020.1155%206.30001%2020.59V20.59C5.52066%2018.9433%205.17056%2017.1261%205.28228%2015.3077C5.394%2013.4893%205.96391%2011.7287%206.93898%2010.1897C7.91404%208.65079%209.26258%207.38351%2010.8591%206.50584C12.4556%205.62817%2014.2482%205.16864%2016.07%205.16999L16.06%205.18999ZM7.79001%2023C7.91001%2022.89%208.03001%2022.79%208.15001%2022.67C9.03966%2021.8075%209.61072%2020.6689%209.77001%2019.44C9.83459%2018.7492%2010.143%2018.104%2010.64%2017.62C11.1183%2017.1222%2011.762%2016.8163%2012.45%2016.76C13.6734%2016.5829%2014.8067%2016.0149%2015.6808%2015.1408C16.5549%2014.2667%2017.1229%2013.1334%2017.3%2011.91C17.3433%2011.1875%2017.6533%2010.5068%2018.17%2010C18.6601%209.51185%2019.3099%209.2171%2020%209.16999C21.1239%209.01536%2022.1721%208.51571%2023%207.74C23.9427%208.52207%2024.7413%209.46289%2025.36%2010.52C25.322%2010.5713%2025.2784%2010.6183%2025.23%2010.66C24.7527%2011.1622%2024.1098%2011.4748%2023.42%2011.54C22.1953%2011.714%2021.0603%2012.281%2020.1856%2013.1556C19.311%2014.0303%2018.744%2015.1653%2018.57%2016.39C18.4995%2017.0784%2018.1932%2017.7213%2017.703%2018.2097C17.2127%2018.6982%2016.5687%2019.0021%2015.88%2019.07C14.653%2019.2457%2013.5155%2019.8126%2012.6363%2020.6863C11.7572%2021.5601%2011.1833%2022.6941%2011%2023.92C10.9462%2024.4087%2010.7783%2024.878%2010.51%2025.29C9.484%2024.6808%208.5651%2023.9072%207.79001%2023V23ZM16.06%2026.86C15.0453%2026.8611%2014.0354%2026.7197%2013.06%2026.44C13.3937%2025.818%2013.6106%2025.1401%2013.7%2024.44C13.7701%2023.7531%2014.075%2023.1114%2014.5632%2022.6232C15.0514%2022.135%2015.6931%2021.8301%2016.38%2021.76C17.6052%2021.5849%2018.7408%2021.0178%2019.6169%2020.1435C20.4929%2019.2693%2021.0624%2018.1348%2021.24%2016.91C21.3101%2016.2231%2021.615%2015.5814%2022.1032%2015.0932C22.5914%2014.605%2023.2331%2014.3001%2023.92%2014.23C24.842%2014.1101%2025.7208%2013.7668%2026.48%2013.23C26.9016%2014.8279%2026.9515%2016.5011%2026.626%2018.1213C26.3005%2019.7415%2025.6081%2021.2657%2024.6021%2022.5768C23.5961%2023.8878%2022.3032%2024.9511%2020.8224%2025.6849C19.3417%2026.4187%2017.7126%2026.8036%2016.06%2026.81V26.86Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3C%2Fsvg%3E"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                            className: cx((LogoSection_module_default()), "logo-code", "grayscale"),
                            id: cx((LogoSection_module_default()), "w-node-_36c46b65-bec7-ad86-567a-d0c29448d9d5-9448d9cb"),
                            tag: "div",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                className: cx((LogoSection_module_default()), "logo-code"),
                                value: "%3Csvg%20id%3D%22logo-7%22%20width%3D%22124%22%20height%3D%2232%22%20viewbox%3D%220%200%20124%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cpath%20d%3D%22M36.87%2010.07H39.87V22.2H36.87V10.07ZM41.06%2017.62C41.06%2014.62%2042.9%2012.83%2045.74%2012.83C48.58%2012.83%2050.42%2014.62%2050.42%2017.62C50.42%2020.62%2048.62%2022.42%2045.74%2022.42C42.86%2022.42%2041.06%2020.67%2041.06%2017.62ZM47.41%2017.62C47.41%2015.97%2046.76%2015%2045.74%2015C44.72%2015%2044.08%2016%2044.08%2017.62C44.08%2019.24%2044.71%2020.22%2045.74%2020.22C46.77%2020.22%2047.41%2019.3%2047.41%2017.63V17.62ZM51.55%2022.79H54.43C54.5671%2023.0945%2054.7988%2023.3466%2055.0907%2023.5088C55.3826%2023.6709%2055.7191%2023.7345%2056.05%2023.69C57.19%2023.69%2057.79%2023.07%2057.79%2022.17V20.49H57.73C57.491%2021.0049%2057.1031%2021.4363%2056.6165%2021.7287C56.1299%2022.021%2055.5668%2022.1608%2055%2022.13C52.81%2022.13%2051.36%2020.46%2051.36%2017.59C51.36%2014.72%2052.74%2012.91%2055.04%2012.91C55.6246%2012.8871%2056.2022%2013.0434%2056.6955%2013.3579C57.1888%2013.6725%2057.5742%2014.1303%2057.8%2014.67V14.67V13H60.8V22.1C60.8%2024.29%2058.87%2025.65%2056.02%2025.65C53.37%2025.65%2051.72%2024.46%2051.55%2022.8V22.79ZM57.8%2017.61C57.8%2016.15%2057.13%2015.23%2056.07%2015.23C55.01%2015.23%2054.36%2016.14%2054.36%2017.61C54.36%2019.08%2055%2019.91%2056.07%2019.91C57.14%2019.91%2057.8%2019.1%2057.8%2017.62V17.61ZM61.93%2017.61C61.93%2014.61%2063.77%2012.82%2066.61%2012.82C69.45%2012.82%2071.3%2014.61%2071.3%2017.61C71.3%2020.61%2069.5%2022.41%2066.61%2022.41C63.72%2022.41%2061.93%2020.67%2061.93%2017.62V17.61ZM68.28%2017.61C68.28%2015.96%2067.63%2014.99%2066.61%2014.99C65.59%2014.99%2065%2016%2065%2017.63C65%2019.26%2065.63%2020.23%2066.65%2020.23C67.67%2020.23%2068.28%2019.3%2068.28%2017.63V17.61ZM72.44%2010.82C72.4321%2010.5171%2072.5144%2010.2187%2072.6763%209.96261C72.8383%209.70651%2073.0726%209.50427%2073.3496%209.38151C73.6266%209.25875%2073.9338%209.221%2074.2323%209.27305C74.5308%209.32511%2074.8071%209.46462%2075.0262%209.67389C75.2454%209.88317%2075.3974%2010.1528%2075.4631%2010.4486C75.5288%2010.7444%2075.5052%2011.053%2075.3952%2011.3354C75.2853%2011.6177%2075.094%2011.8611%2074.8456%2012.0346C74.5973%2012.2081%2074.3029%2012.304%2074%2012.31C73.7992%2012.3238%2073.5977%2012.2959%2073.4082%2012.2281C73.2186%2012.1603%2073.0452%2012.0541%2072.8987%2011.916C72.7522%2011.778%2072.6358%2011.6111%2072.5569%2011.4259C72.4779%2011.2408%2072.4381%2011.0413%2072.44%2010.84V10.82ZM72.44%2013.02H75.44V22.2H72.44V13.02ZM86.33%2017.61C86.33%2020.61%2085%2022.32%2082.72%2022.32C82.1354%2022.3575%2081.5533%2022.2146%2081.0525%2021.9106C80.5517%2021.6065%2080.1564%2021.156%2079.92%2020.62H79.86V25.14H76.86V13H79.86V14.64H79.92C80.1454%2014.0951%2080.5332%2013.6329%2081.0306%2013.3162C81.528%2012.9995%2082.1109%2012.8437%2082.7%2012.87C85%2012.91%2086.37%2014.63%2086.37%2017.63L86.33%2017.61ZM83.33%2017.61C83.33%2016.15%2082.66%2015.22%2081.61%2015.22C80.56%2015.22%2079.89%2016.16%2079.88%2017.61C79.87%2019.06%2080.56%2019.99%2081.61%2019.99C82.66%2019.99%2083.33%2019.08%2083.33%2017.63V17.61ZM91.48%2012.81C93.97%2012.81%2095.48%2013.99%2095.55%2015.88H92.82C92.82%2015.23%2092.28%2014.82%2091.45%2014.82C90.62%2014.82%2090.25%2015.14%2090.25%2015.61C90.25%2016.08%2090.58%2016.23%2091.25%2016.37L93.17%2016.76C95%2017.15%2095.78%2017.89%2095.78%2019.28C95.78%2021.18%2094.05%2022.4%2091.5%2022.4C88.95%2022.4%2087.28%2021.18%2087.15%2019.31H90.04C90.13%2019.99%2090.67%2020.39%2091.55%2020.39C92.43%2020.39%2092.83%2020.1%2092.83%2019.62C92.83%2019.14%2092.55%2019.04%2091.83%2018.89L90.1%2018.52C88.31%2018.15%2087.37%2017.2%2087.37%2015.8C87.39%2014%2089%2012.83%2091.48%2012.83V12.81ZM105.79%2022.18H102.9V20.47H102.84C102.681%2021.0441%20102.331%2021.5466%20101.847%2021.8941C101.363%2022.2415%20100.775%2022.413%20100.18%2022.38C99.7242%2022.4059%2099.2682%2022.3337%2098.8427%2022.1682C98.4172%2022.0027%2098.0322%2021.7479%2097.7137%2021.4208C97.3952%2021.0938%2097.1505%2020.7021%2096.9964%2020.2724C96.8422%2019.8427%2096.7821%2019.3849%2096.82%2018.93V13H99.82V18.24C99.82%2019.33%20100.38%2019.91%20101.31%2019.91C101.528%2019.9104%20101.744%2019.8643%20101.943%2019.7746C102.141%2019.6849%20102.319%2019.5537%20102.463%2019.3899C102.606%2019.226%20102.714%2019.0333%20102.777%2018.8247C102.84%2018.616%20102.859%2018.3962%20102.83%2018.18V13H105.83L105.79%2022.18ZM107.24%2013H110.14V14.77H110.2C110.359%2014.2035%20110.702%2013.7057%20111.174%2013.3547C111.646%2013.0037%20112.222%2012.8191%20112.81%2012.83C113.409%2012.7821%20114.003%2012.9612%20114.476%2013.3318C114.948%2013.7024%20115.264%2014.2372%20115.36%2014.83H115.42C115.601%2014.2309%20115.977%2013.7093%20116.488%2013.3472C116.998%2012.9851%20117.615%2012.8031%20118.24%2012.83C118.648%2012.8163%20119.054%2012.8886%20119.432%2013.0422C119.811%2013.1957%20120.152%2013.4272%20120.435%2013.7214C120.718%2014.0157%20120.936%2014.3662%20121.075%2014.7501C121.213%2015.134%20121.27%2015.5429%20121.24%2015.95V22.2H118.24V16.75C118.24%2015.75%20117.79%2015.29%20116.95%2015.29C116.763%2015.2884%20116.577%2015.327%20116.406%2015.4032C116.235%2015.4794%20116.082%2015.5914%20115.958%2015.7317C115.834%2015.872%20115.741%2016.0372%20115.686%2016.2163C115.631%2016.3955%20115.616%2016.5843%20115.64%2016.77V22.2H112.79V16.71C112.79%2015.79%20112.34%2015.29%20111.52%2015.29C111.331%2015.2901%20111.143%2015.3303%20110.971%2015.408C110.798%2015.4858%20110.643%2015.5993%20110.518%2015.741C110.392%2015.8827%20110.298%2016.0495%20110.241%2016.2304C110.185%2016.4112%20110.167%2016.6019%20110.19%2016.79V22.2H107.19L107.24%2013Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3Cpath%20d%3D%22M28.48%2010.62C27.9711%209.45636%2027.2976%208.37193%2026.48%207.4C25.2715%205.92034%2023.7633%204.71339%2022.0547%203.8586C20.3461%203.00382%2018.4758%202.52057%2016.567%202.44066C14.6582%202.36075%2012.7541%202.68599%2010.98%203.39499C9.20597%204.10398%207.60217%205.18065%206.2742%206.55413C4.94622%207.9276%203.92417%209.56675%203.27532%2011.3637C2.62647%2013.1606%202.36552%2015.0746%202.50966%2016.9796C2.65381%2018.8847%203.19976%2020.7376%204.1116%2022.4164C5.02344%2024.0953%206.28049%2025.562%207.80001%2026.72C8.77501%2027.4779%209.85236%2028.094%2011%2028.55C12.609%2029.2094%2014.3311%2029.549%2016.07%2029.55C19.6594%2029.5421%2023.0992%2028.1113%2025.6355%2025.5713C28.1717%2023.0313%2029.5974%2019.5894%2029.6%2016C29.6026%2014.1485%2029.2213%2012.3166%2028.48%2010.62V10.62ZM16.06%205.18999C17.6216%205.18983%2019.1643%205.53113%2020.58%206.18999V6.18999C20.2348%206.33916%2019.8718%206.44335%2019.5%206.5C18.2766%206.67709%2017.1433%207.24507%2016.2692%208.11917C15.3951%208.99326%2014.8271%2010.1266%2014.65%2011.35C14.5723%2012.0361%2014.2602%2012.6744%2013.7665%2013.1572C13.2728%2013.64%2012.6277%2013.9376%2011.94%2014C10.7166%2014.1771%209.58327%2014.7451%208.70918%2015.6192C7.83509%2016.4933%207.2671%2017.6266%207.09001%2018.85C7.03005%2019.5024%206.7517%2020.1155%206.30001%2020.59V20.59C5.52066%2018.9433%205.17056%2017.1261%205.28228%2015.3077C5.394%2013.4893%205.96391%2011.7287%206.93898%2010.1897C7.91404%208.65079%209.26258%207.38351%2010.8591%206.50584C12.4556%205.62817%2014.2482%205.16864%2016.07%205.16999L16.06%205.18999ZM7.79001%2023C7.91001%2022.89%208.03001%2022.79%208.15001%2022.67C9.03966%2021.8075%209.61072%2020.6689%209.77001%2019.44C9.83459%2018.7492%2010.143%2018.104%2010.64%2017.62C11.1183%2017.1222%2011.762%2016.8163%2012.45%2016.76C13.6734%2016.5829%2014.8067%2016.0149%2015.6808%2015.1408C16.5549%2014.2667%2017.1229%2013.1334%2017.3%2011.91C17.3433%2011.1875%2017.6533%2010.5068%2018.17%2010C18.6601%209.51185%2019.3099%209.2171%2020%209.16999C21.1239%209.01536%2022.1721%208.51571%2023%207.74C23.9427%208.52207%2024.7413%209.46289%2025.36%2010.52C25.322%2010.5713%2025.2784%2010.6183%2025.23%2010.66C24.7527%2011.1622%2024.1098%2011.4748%2023.42%2011.54C22.1953%2011.714%2021.0603%2012.281%2020.1856%2013.1556C19.311%2014.0303%2018.744%2015.1653%2018.57%2016.39C18.4995%2017.0784%2018.1932%2017.7213%2017.703%2018.2097C17.2127%2018.6982%2016.5687%2019.0021%2015.88%2019.07C14.653%2019.2457%2013.5155%2019.8126%2012.6363%2020.6863C11.7572%2021.5601%2011.1833%2022.6941%2011%2023.92C10.9462%2024.4087%2010.7783%2024.878%2010.51%2025.29C9.484%2024.6808%208.5651%2023.9072%207.79001%2023V23ZM16.06%2026.86C15.0453%2026.8611%2014.0354%2026.7197%2013.06%2026.44C13.3937%2025.818%2013.6106%2025.1401%2013.7%2024.44C13.7701%2023.7531%2014.075%2023.1114%2014.5632%2022.6232C15.0514%2022.135%2015.6931%2021.8301%2016.38%2021.76C17.6052%2021.5849%2018.7408%2021.0178%2019.6169%2020.1435C20.4929%2019.2693%2021.0624%2018.1348%2021.24%2016.91C21.3101%2016.2231%2021.615%2015.5814%2022.1032%2015.0932C22.5914%2014.605%2023.2331%2014.3001%2023.92%2014.23C24.842%2014.1101%2025.7208%2013.7668%2026.48%2013.23C26.9016%2014.8279%2026.9515%2016.5011%2026.626%2018.1213C26.3005%2019.7415%2025.6081%2021.2657%2024.6021%2022.5768C23.5961%2023.8878%2022.3032%2024.9511%2020.8224%2025.6849C19.3417%2026.4187%2017.7126%2026.8036%2016.06%2026.81V26.86Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3C%2Fsvg%3E"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                            className: cx((LogoSection_module_default()), "logo-code", "grayscale"),
                            id: cx((LogoSection_module_default()), "w-node-_36c46b65-bec7-ad86-567a-d0c29448d9d7-9448d9cb"),
                            tag: "div",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                className: cx((LogoSection_module_default()), "logo-code"),
                                value: "%3Csvg%20id%3D%22logo-7%22%20width%3D%22124%22%20height%3D%2232%22%20viewbox%3D%220%200%20124%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cpath%20d%3D%22M36.87%2010.07H39.87V22.2H36.87V10.07ZM41.06%2017.62C41.06%2014.62%2042.9%2012.83%2045.74%2012.83C48.58%2012.83%2050.42%2014.62%2050.42%2017.62C50.42%2020.62%2048.62%2022.42%2045.74%2022.42C42.86%2022.42%2041.06%2020.67%2041.06%2017.62ZM47.41%2017.62C47.41%2015.97%2046.76%2015%2045.74%2015C44.72%2015%2044.08%2016%2044.08%2017.62C44.08%2019.24%2044.71%2020.22%2045.74%2020.22C46.77%2020.22%2047.41%2019.3%2047.41%2017.63V17.62ZM51.55%2022.79H54.43C54.5671%2023.0945%2054.7988%2023.3466%2055.0907%2023.5088C55.3826%2023.6709%2055.7191%2023.7345%2056.05%2023.69C57.19%2023.69%2057.79%2023.07%2057.79%2022.17V20.49H57.73C57.491%2021.0049%2057.1031%2021.4363%2056.6165%2021.7287C56.1299%2022.021%2055.5668%2022.1608%2055%2022.13C52.81%2022.13%2051.36%2020.46%2051.36%2017.59C51.36%2014.72%2052.74%2012.91%2055.04%2012.91C55.6246%2012.8871%2056.2022%2013.0434%2056.6955%2013.3579C57.1888%2013.6725%2057.5742%2014.1303%2057.8%2014.67V14.67V13H60.8V22.1C60.8%2024.29%2058.87%2025.65%2056.02%2025.65C53.37%2025.65%2051.72%2024.46%2051.55%2022.8V22.79ZM57.8%2017.61C57.8%2016.15%2057.13%2015.23%2056.07%2015.23C55.01%2015.23%2054.36%2016.14%2054.36%2017.61C54.36%2019.08%2055%2019.91%2056.07%2019.91C57.14%2019.91%2057.8%2019.1%2057.8%2017.62V17.61ZM61.93%2017.61C61.93%2014.61%2063.77%2012.82%2066.61%2012.82C69.45%2012.82%2071.3%2014.61%2071.3%2017.61C71.3%2020.61%2069.5%2022.41%2066.61%2022.41C63.72%2022.41%2061.93%2020.67%2061.93%2017.62V17.61ZM68.28%2017.61C68.28%2015.96%2067.63%2014.99%2066.61%2014.99C65.59%2014.99%2065%2016%2065%2017.63C65%2019.26%2065.63%2020.23%2066.65%2020.23C67.67%2020.23%2068.28%2019.3%2068.28%2017.63V17.61ZM72.44%2010.82C72.4321%2010.5171%2072.5144%2010.2187%2072.6763%209.96261C72.8383%209.70651%2073.0726%209.50427%2073.3496%209.38151C73.6266%209.25875%2073.9338%209.221%2074.2323%209.27305C74.5308%209.32511%2074.8071%209.46462%2075.0262%209.67389C75.2454%209.88317%2075.3974%2010.1528%2075.4631%2010.4486C75.5288%2010.7444%2075.5052%2011.053%2075.3952%2011.3354C75.2853%2011.6177%2075.094%2011.8611%2074.8456%2012.0346C74.5973%2012.2081%2074.3029%2012.304%2074%2012.31C73.7992%2012.3238%2073.5977%2012.2959%2073.4082%2012.2281C73.2186%2012.1603%2073.0452%2012.0541%2072.8987%2011.916C72.7522%2011.778%2072.6358%2011.6111%2072.5569%2011.4259C72.4779%2011.2408%2072.4381%2011.0413%2072.44%2010.84V10.82ZM72.44%2013.02H75.44V22.2H72.44V13.02ZM86.33%2017.61C86.33%2020.61%2085%2022.32%2082.72%2022.32C82.1354%2022.3575%2081.5533%2022.2146%2081.0525%2021.9106C80.5517%2021.6065%2080.1564%2021.156%2079.92%2020.62H79.86V25.14H76.86V13H79.86V14.64H79.92C80.1454%2014.0951%2080.5332%2013.6329%2081.0306%2013.3162C81.528%2012.9995%2082.1109%2012.8437%2082.7%2012.87C85%2012.91%2086.37%2014.63%2086.37%2017.63L86.33%2017.61ZM83.33%2017.61C83.33%2016.15%2082.66%2015.22%2081.61%2015.22C80.56%2015.22%2079.89%2016.16%2079.88%2017.61C79.87%2019.06%2080.56%2019.99%2081.61%2019.99C82.66%2019.99%2083.33%2019.08%2083.33%2017.63V17.61ZM91.48%2012.81C93.97%2012.81%2095.48%2013.99%2095.55%2015.88H92.82C92.82%2015.23%2092.28%2014.82%2091.45%2014.82C90.62%2014.82%2090.25%2015.14%2090.25%2015.61C90.25%2016.08%2090.58%2016.23%2091.25%2016.37L93.17%2016.76C95%2017.15%2095.78%2017.89%2095.78%2019.28C95.78%2021.18%2094.05%2022.4%2091.5%2022.4C88.95%2022.4%2087.28%2021.18%2087.15%2019.31H90.04C90.13%2019.99%2090.67%2020.39%2091.55%2020.39C92.43%2020.39%2092.83%2020.1%2092.83%2019.62C92.83%2019.14%2092.55%2019.04%2091.83%2018.89L90.1%2018.52C88.31%2018.15%2087.37%2017.2%2087.37%2015.8C87.39%2014%2089%2012.83%2091.48%2012.83V12.81ZM105.79%2022.18H102.9V20.47H102.84C102.681%2021.0441%20102.331%2021.5466%20101.847%2021.8941C101.363%2022.2415%20100.775%2022.413%20100.18%2022.38C99.7242%2022.4059%2099.2682%2022.3337%2098.8427%2022.1682C98.4172%2022.0027%2098.0322%2021.7479%2097.7137%2021.4208C97.3952%2021.0938%2097.1505%2020.7021%2096.9964%2020.2724C96.8422%2019.8427%2096.7821%2019.3849%2096.82%2018.93V13H99.82V18.24C99.82%2019.33%20100.38%2019.91%20101.31%2019.91C101.528%2019.9104%20101.744%2019.8643%20101.943%2019.7746C102.141%2019.6849%20102.319%2019.5537%20102.463%2019.3899C102.606%2019.226%20102.714%2019.0333%20102.777%2018.8247C102.84%2018.616%20102.859%2018.3962%20102.83%2018.18V13H105.83L105.79%2022.18ZM107.24%2013H110.14V14.77H110.2C110.359%2014.2035%20110.702%2013.7057%20111.174%2013.3547C111.646%2013.0037%20112.222%2012.8191%20112.81%2012.83C113.409%2012.7821%20114.003%2012.9612%20114.476%2013.3318C114.948%2013.7024%20115.264%2014.2372%20115.36%2014.83H115.42C115.601%2014.2309%20115.977%2013.7093%20116.488%2013.3472C116.998%2012.9851%20117.615%2012.8031%20118.24%2012.83C118.648%2012.8163%20119.054%2012.8886%20119.432%2013.0422C119.811%2013.1957%20120.152%2013.4272%20120.435%2013.7214C120.718%2014.0157%20120.936%2014.3662%20121.075%2014.7501C121.213%2015.134%20121.27%2015.5429%20121.24%2015.95V22.2H118.24V16.75C118.24%2015.75%20117.79%2015.29%20116.95%2015.29C116.763%2015.2884%20116.577%2015.327%20116.406%2015.4032C116.235%2015.4794%20116.082%2015.5914%20115.958%2015.7317C115.834%2015.872%20115.741%2016.0372%20115.686%2016.2163C115.631%2016.3955%20115.616%2016.5843%20115.64%2016.77V22.2H112.79V16.71C112.79%2015.79%20112.34%2015.29%20111.52%2015.29C111.331%2015.2901%20111.143%2015.3303%20110.971%2015.408C110.798%2015.4858%20110.643%2015.5993%20110.518%2015.741C110.392%2015.8827%20110.298%2016.0495%20110.241%2016.2304C110.185%2016.4112%20110.167%2016.6019%20110.19%2016.79V22.2H107.19L107.24%2013Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3Cpath%20d%3D%22M28.48%2010.62C27.9711%209.45636%2027.2976%208.37193%2026.48%207.4C25.2715%205.92034%2023.7633%204.71339%2022.0547%203.8586C20.3461%203.00382%2018.4758%202.52057%2016.567%202.44066C14.6582%202.36075%2012.7541%202.68599%2010.98%203.39499C9.20597%204.10398%207.60217%205.18065%206.2742%206.55413C4.94622%207.9276%203.92417%209.56675%203.27532%2011.3637C2.62647%2013.1606%202.36552%2015.0746%202.50966%2016.9796C2.65381%2018.8847%203.19976%2020.7376%204.1116%2022.4164C5.02344%2024.0953%206.28049%2025.562%207.80001%2026.72C8.77501%2027.4779%209.85236%2028.094%2011%2028.55C12.609%2029.2094%2014.3311%2029.549%2016.07%2029.55C19.6594%2029.5421%2023.0992%2028.1113%2025.6355%2025.5713C28.1717%2023.0313%2029.5974%2019.5894%2029.6%2016C29.6026%2014.1485%2029.2213%2012.3166%2028.48%2010.62V10.62ZM16.06%205.18999C17.6216%205.18983%2019.1643%205.53113%2020.58%206.18999V6.18999C20.2348%206.33916%2019.8718%206.44335%2019.5%206.5C18.2766%206.67709%2017.1433%207.24507%2016.2692%208.11917C15.3951%208.99326%2014.8271%2010.1266%2014.65%2011.35C14.5723%2012.0361%2014.2602%2012.6744%2013.7665%2013.1572C13.2728%2013.64%2012.6277%2013.9376%2011.94%2014C10.7166%2014.1771%209.58327%2014.7451%208.70918%2015.6192C7.83509%2016.4933%207.2671%2017.6266%207.09001%2018.85C7.03005%2019.5024%206.7517%2020.1155%206.30001%2020.59V20.59C5.52066%2018.9433%205.17056%2017.1261%205.28228%2015.3077C5.394%2013.4893%205.96391%2011.7287%206.93898%2010.1897C7.91404%208.65079%209.26258%207.38351%2010.8591%206.50584C12.4556%205.62817%2014.2482%205.16864%2016.07%205.16999L16.06%205.18999ZM7.79001%2023C7.91001%2022.89%208.03001%2022.79%208.15001%2022.67C9.03966%2021.8075%209.61072%2020.6689%209.77001%2019.44C9.83459%2018.7492%2010.143%2018.104%2010.64%2017.62C11.1183%2017.1222%2011.762%2016.8163%2012.45%2016.76C13.6734%2016.5829%2014.8067%2016.0149%2015.6808%2015.1408C16.5549%2014.2667%2017.1229%2013.1334%2017.3%2011.91C17.3433%2011.1875%2017.6533%2010.5068%2018.17%2010C18.6601%209.51185%2019.3099%209.2171%2020%209.16999C21.1239%209.01536%2022.1721%208.51571%2023%207.74C23.9427%208.52207%2024.7413%209.46289%2025.36%2010.52C25.322%2010.5713%2025.2784%2010.6183%2025.23%2010.66C24.7527%2011.1622%2024.1098%2011.4748%2023.42%2011.54C22.1953%2011.714%2021.0603%2012.281%2020.1856%2013.1556C19.311%2014.0303%2018.744%2015.1653%2018.57%2016.39C18.4995%2017.0784%2018.1932%2017.7213%2017.703%2018.2097C17.2127%2018.6982%2016.5687%2019.0021%2015.88%2019.07C14.653%2019.2457%2013.5155%2019.8126%2012.6363%2020.6863C11.7572%2021.5601%2011.1833%2022.6941%2011%2023.92C10.9462%2024.4087%2010.7783%2024.878%2010.51%2025.29C9.484%2024.6808%208.5651%2023.9072%207.79001%2023V23ZM16.06%2026.86C15.0453%2026.8611%2014.0354%2026.7197%2013.06%2026.44C13.3937%2025.818%2013.6106%2025.1401%2013.7%2024.44C13.7701%2023.7531%2014.075%2023.1114%2014.5632%2022.6232C15.0514%2022.135%2015.6931%2021.8301%2016.38%2021.76C17.6052%2021.5849%2018.7408%2021.0178%2019.6169%2020.1435C20.4929%2019.2693%2021.0624%2018.1348%2021.24%2016.91C21.3101%2016.2231%2021.615%2015.5814%2022.1032%2015.0932C22.5914%2014.605%2023.2331%2014.3001%2023.92%2014.23C24.842%2014.1101%2025.7208%2013.7668%2026.48%2013.23C26.9016%2014.8279%2026.9515%2016.5011%2026.626%2018.1213C26.3005%2019.7415%2025.6081%2021.2657%2024.6021%2022.5768C23.5961%2023.8878%2022.3032%2024.9511%2020.8224%2025.6849C19.3417%2026.4187%2017.7126%2026.8036%2016.06%2026.81V26.86Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3C%2Fsvg%3E"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                            className: cx((LogoSection_module_default()), "logo-code", "grayscale"),
                            id: cx((LogoSection_module_default()), "w-node-_36c46b65-bec7-ad86-567a-d0c29448d9d9-9448d9cb"),
                            tag: "div",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                className: cx((LogoSection_module_default()), "logo-code"),
                                value: "%3Csvg%20id%3D%22logo-7%22%20width%3D%22124%22%20height%3D%2232%22%20viewbox%3D%220%200%20124%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cpath%20d%3D%22M36.87%2010.07H39.87V22.2H36.87V10.07ZM41.06%2017.62C41.06%2014.62%2042.9%2012.83%2045.74%2012.83C48.58%2012.83%2050.42%2014.62%2050.42%2017.62C50.42%2020.62%2048.62%2022.42%2045.74%2022.42C42.86%2022.42%2041.06%2020.67%2041.06%2017.62ZM47.41%2017.62C47.41%2015.97%2046.76%2015%2045.74%2015C44.72%2015%2044.08%2016%2044.08%2017.62C44.08%2019.24%2044.71%2020.22%2045.74%2020.22C46.77%2020.22%2047.41%2019.3%2047.41%2017.63V17.62ZM51.55%2022.79H54.43C54.5671%2023.0945%2054.7988%2023.3466%2055.0907%2023.5088C55.3826%2023.6709%2055.7191%2023.7345%2056.05%2023.69C57.19%2023.69%2057.79%2023.07%2057.79%2022.17V20.49H57.73C57.491%2021.0049%2057.1031%2021.4363%2056.6165%2021.7287C56.1299%2022.021%2055.5668%2022.1608%2055%2022.13C52.81%2022.13%2051.36%2020.46%2051.36%2017.59C51.36%2014.72%2052.74%2012.91%2055.04%2012.91C55.6246%2012.8871%2056.2022%2013.0434%2056.6955%2013.3579C57.1888%2013.6725%2057.5742%2014.1303%2057.8%2014.67V14.67V13H60.8V22.1C60.8%2024.29%2058.87%2025.65%2056.02%2025.65C53.37%2025.65%2051.72%2024.46%2051.55%2022.8V22.79ZM57.8%2017.61C57.8%2016.15%2057.13%2015.23%2056.07%2015.23C55.01%2015.23%2054.36%2016.14%2054.36%2017.61C54.36%2019.08%2055%2019.91%2056.07%2019.91C57.14%2019.91%2057.8%2019.1%2057.8%2017.62V17.61ZM61.93%2017.61C61.93%2014.61%2063.77%2012.82%2066.61%2012.82C69.45%2012.82%2071.3%2014.61%2071.3%2017.61C71.3%2020.61%2069.5%2022.41%2066.61%2022.41C63.72%2022.41%2061.93%2020.67%2061.93%2017.62V17.61ZM68.28%2017.61C68.28%2015.96%2067.63%2014.99%2066.61%2014.99C65.59%2014.99%2065%2016%2065%2017.63C65%2019.26%2065.63%2020.23%2066.65%2020.23C67.67%2020.23%2068.28%2019.3%2068.28%2017.63V17.61ZM72.44%2010.82C72.4321%2010.5171%2072.5144%2010.2187%2072.6763%209.96261C72.8383%209.70651%2073.0726%209.50427%2073.3496%209.38151C73.6266%209.25875%2073.9338%209.221%2074.2323%209.27305C74.5308%209.32511%2074.8071%209.46462%2075.0262%209.67389C75.2454%209.88317%2075.3974%2010.1528%2075.4631%2010.4486C75.5288%2010.7444%2075.5052%2011.053%2075.3952%2011.3354C75.2853%2011.6177%2075.094%2011.8611%2074.8456%2012.0346C74.5973%2012.2081%2074.3029%2012.304%2074%2012.31C73.7992%2012.3238%2073.5977%2012.2959%2073.4082%2012.2281C73.2186%2012.1603%2073.0452%2012.0541%2072.8987%2011.916C72.7522%2011.778%2072.6358%2011.6111%2072.5569%2011.4259C72.4779%2011.2408%2072.4381%2011.0413%2072.44%2010.84V10.82ZM72.44%2013.02H75.44V22.2H72.44V13.02ZM86.33%2017.61C86.33%2020.61%2085%2022.32%2082.72%2022.32C82.1354%2022.3575%2081.5533%2022.2146%2081.0525%2021.9106C80.5517%2021.6065%2080.1564%2021.156%2079.92%2020.62H79.86V25.14H76.86V13H79.86V14.64H79.92C80.1454%2014.0951%2080.5332%2013.6329%2081.0306%2013.3162C81.528%2012.9995%2082.1109%2012.8437%2082.7%2012.87C85%2012.91%2086.37%2014.63%2086.37%2017.63L86.33%2017.61ZM83.33%2017.61C83.33%2016.15%2082.66%2015.22%2081.61%2015.22C80.56%2015.22%2079.89%2016.16%2079.88%2017.61C79.87%2019.06%2080.56%2019.99%2081.61%2019.99C82.66%2019.99%2083.33%2019.08%2083.33%2017.63V17.61ZM91.48%2012.81C93.97%2012.81%2095.48%2013.99%2095.55%2015.88H92.82C92.82%2015.23%2092.28%2014.82%2091.45%2014.82C90.62%2014.82%2090.25%2015.14%2090.25%2015.61C90.25%2016.08%2090.58%2016.23%2091.25%2016.37L93.17%2016.76C95%2017.15%2095.78%2017.89%2095.78%2019.28C95.78%2021.18%2094.05%2022.4%2091.5%2022.4C88.95%2022.4%2087.28%2021.18%2087.15%2019.31H90.04C90.13%2019.99%2090.67%2020.39%2091.55%2020.39C92.43%2020.39%2092.83%2020.1%2092.83%2019.62C92.83%2019.14%2092.55%2019.04%2091.83%2018.89L90.1%2018.52C88.31%2018.15%2087.37%2017.2%2087.37%2015.8C87.39%2014%2089%2012.83%2091.48%2012.83V12.81ZM105.79%2022.18H102.9V20.47H102.84C102.681%2021.0441%20102.331%2021.5466%20101.847%2021.8941C101.363%2022.2415%20100.775%2022.413%20100.18%2022.38C99.7242%2022.4059%2099.2682%2022.3337%2098.8427%2022.1682C98.4172%2022.0027%2098.0322%2021.7479%2097.7137%2021.4208C97.3952%2021.0938%2097.1505%2020.7021%2096.9964%2020.2724C96.8422%2019.8427%2096.7821%2019.3849%2096.82%2018.93V13H99.82V18.24C99.82%2019.33%20100.38%2019.91%20101.31%2019.91C101.528%2019.9104%20101.744%2019.8643%20101.943%2019.7746C102.141%2019.6849%20102.319%2019.5537%20102.463%2019.3899C102.606%2019.226%20102.714%2019.0333%20102.777%2018.8247C102.84%2018.616%20102.859%2018.3962%20102.83%2018.18V13H105.83L105.79%2022.18ZM107.24%2013H110.14V14.77H110.2C110.359%2014.2035%20110.702%2013.7057%20111.174%2013.3547C111.646%2013.0037%20112.222%2012.8191%20112.81%2012.83C113.409%2012.7821%20114.003%2012.9612%20114.476%2013.3318C114.948%2013.7024%20115.264%2014.2372%20115.36%2014.83H115.42C115.601%2014.2309%20115.977%2013.7093%20116.488%2013.3472C116.998%2012.9851%20117.615%2012.8031%20118.24%2012.83C118.648%2012.8163%20119.054%2012.8886%20119.432%2013.0422C119.811%2013.1957%20120.152%2013.4272%20120.435%2013.7214C120.718%2014.0157%20120.936%2014.3662%20121.075%2014.7501C121.213%2015.134%20121.27%2015.5429%20121.24%2015.95V22.2H118.24V16.75C118.24%2015.75%20117.79%2015.29%20116.95%2015.29C116.763%2015.2884%20116.577%2015.327%20116.406%2015.4032C116.235%2015.4794%20116.082%2015.5914%20115.958%2015.7317C115.834%2015.872%20115.741%2016.0372%20115.686%2016.2163C115.631%2016.3955%20115.616%2016.5843%20115.64%2016.77V22.2H112.79V16.71C112.79%2015.79%20112.34%2015.29%20111.52%2015.29C111.331%2015.2901%20111.143%2015.3303%20110.971%2015.408C110.798%2015.4858%20110.643%2015.5993%20110.518%2015.741C110.392%2015.8827%20110.298%2016.0495%20110.241%2016.2304C110.185%2016.4112%20110.167%2016.6019%20110.19%2016.79V22.2H107.19L107.24%2013Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3Cpath%20d%3D%22M28.48%2010.62C27.9711%209.45636%2027.2976%208.37193%2026.48%207.4C25.2715%205.92034%2023.7633%204.71339%2022.0547%203.8586C20.3461%203.00382%2018.4758%202.52057%2016.567%202.44066C14.6582%202.36075%2012.7541%202.68599%2010.98%203.39499C9.20597%204.10398%207.60217%205.18065%206.2742%206.55413C4.94622%207.9276%203.92417%209.56675%203.27532%2011.3637C2.62647%2013.1606%202.36552%2015.0746%202.50966%2016.9796C2.65381%2018.8847%203.19976%2020.7376%204.1116%2022.4164C5.02344%2024.0953%206.28049%2025.562%207.80001%2026.72C8.77501%2027.4779%209.85236%2028.094%2011%2028.55C12.609%2029.2094%2014.3311%2029.549%2016.07%2029.55C19.6594%2029.5421%2023.0992%2028.1113%2025.6355%2025.5713C28.1717%2023.0313%2029.5974%2019.5894%2029.6%2016C29.6026%2014.1485%2029.2213%2012.3166%2028.48%2010.62V10.62ZM16.06%205.18999C17.6216%205.18983%2019.1643%205.53113%2020.58%206.18999V6.18999C20.2348%206.33916%2019.8718%206.44335%2019.5%206.5C18.2766%206.67709%2017.1433%207.24507%2016.2692%208.11917C15.3951%208.99326%2014.8271%2010.1266%2014.65%2011.35C14.5723%2012.0361%2014.2602%2012.6744%2013.7665%2013.1572C13.2728%2013.64%2012.6277%2013.9376%2011.94%2014C10.7166%2014.1771%209.58327%2014.7451%208.70918%2015.6192C7.83509%2016.4933%207.2671%2017.6266%207.09001%2018.85C7.03005%2019.5024%206.7517%2020.1155%206.30001%2020.59V20.59C5.52066%2018.9433%205.17056%2017.1261%205.28228%2015.3077C5.394%2013.4893%205.96391%2011.7287%206.93898%2010.1897C7.91404%208.65079%209.26258%207.38351%2010.8591%206.50584C12.4556%205.62817%2014.2482%205.16864%2016.07%205.16999L16.06%205.18999ZM7.79001%2023C7.91001%2022.89%208.03001%2022.79%208.15001%2022.67C9.03966%2021.8075%209.61072%2020.6689%209.77001%2019.44C9.83459%2018.7492%2010.143%2018.104%2010.64%2017.62C11.1183%2017.1222%2011.762%2016.8163%2012.45%2016.76C13.6734%2016.5829%2014.8067%2016.0149%2015.6808%2015.1408C16.5549%2014.2667%2017.1229%2013.1334%2017.3%2011.91C17.3433%2011.1875%2017.6533%2010.5068%2018.17%2010C18.6601%209.51185%2019.3099%209.2171%2020%209.16999C21.1239%209.01536%2022.1721%208.51571%2023%207.74C23.9427%208.52207%2024.7413%209.46289%2025.36%2010.52C25.322%2010.5713%2025.2784%2010.6183%2025.23%2010.66C24.7527%2011.1622%2024.1098%2011.4748%2023.42%2011.54C22.1953%2011.714%2021.0603%2012.281%2020.1856%2013.1556C19.311%2014.0303%2018.744%2015.1653%2018.57%2016.39C18.4995%2017.0784%2018.1932%2017.7213%2017.703%2018.2097C17.2127%2018.6982%2016.5687%2019.0021%2015.88%2019.07C14.653%2019.2457%2013.5155%2019.8126%2012.6363%2020.6863C11.7572%2021.5601%2011.1833%2022.6941%2011%2023.92C10.9462%2024.4087%2010.7783%2024.878%2010.51%2025.29C9.484%2024.6808%208.5651%2023.9072%207.79001%2023V23ZM16.06%2026.86C15.0453%2026.8611%2014.0354%2026.7197%2013.06%2026.44C13.3937%2025.818%2013.6106%2025.1401%2013.7%2024.44C13.7701%2023.7531%2014.075%2023.1114%2014.5632%2022.6232C15.0514%2022.135%2015.6931%2021.8301%2016.38%2021.76C17.6052%2021.5849%2018.7408%2021.0178%2019.6169%2020.1435C20.4929%2019.2693%2021.0624%2018.1348%2021.24%2016.91C21.3101%2016.2231%2021.615%2015.5814%2022.1032%2015.0932C22.5914%2014.605%2023.2331%2014.3001%2023.92%2014.23C24.842%2014.1101%2025.7208%2013.7668%2026.48%2013.23C26.9016%2014.8279%2026.9515%2016.5011%2026.626%2018.1213C26.3005%2019.7415%2025.6081%2021.2657%2024.6021%2022.5768C23.5961%2023.8878%2022.3032%2024.9511%2020.8224%2025.6849C19.3417%2026.4187%2017.7126%2026.8036%2016.06%2026.81V26.86Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3C%2Fsvg%3E"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                            className: cx((LogoSection_module_default()), "logo-code", "grayscale"),
                            id: cx((LogoSection_module_default()), "w-node-_36c46b65-bec7-ad86-567a-d0c29448d9db-9448d9cb"),
                            tag: "div",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                className: cx((LogoSection_module_default()), "logo-code"),
                                value: "%3Csvg%20id%3D%22logo-7%22%20width%3D%22124%22%20height%3D%2232%22%20viewbox%3D%220%200%20124%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cpath%20d%3D%22M36.87%2010.07H39.87V22.2H36.87V10.07ZM41.06%2017.62C41.06%2014.62%2042.9%2012.83%2045.74%2012.83C48.58%2012.83%2050.42%2014.62%2050.42%2017.62C50.42%2020.62%2048.62%2022.42%2045.74%2022.42C42.86%2022.42%2041.06%2020.67%2041.06%2017.62ZM47.41%2017.62C47.41%2015.97%2046.76%2015%2045.74%2015C44.72%2015%2044.08%2016%2044.08%2017.62C44.08%2019.24%2044.71%2020.22%2045.74%2020.22C46.77%2020.22%2047.41%2019.3%2047.41%2017.63V17.62ZM51.55%2022.79H54.43C54.5671%2023.0945%2054.7988%2023.3466%2055.0907%2023.5088C55.3826%2023.6709%2055.7191%2023.7345%2056.05%2023.69C57.19%2023.69%2057.79%2023.07%2057.79%2022.17V20.49H57.73C57.491%2021.0049%2057.1031%2021.4363%2056.6165%2021.7287C56.1299%2022.021%2055.5668%2022.1608%2055%2022.13C52.81%2022.13%2051.36%2020.46%2051.36%2017.59C51.36%2014.72%2052.74%2012.91%2055.04%2012.91C55.6246%2012.8871%2056.2022%2013.0434%2056.6955%2013.3579C57.1888%2013.6725%2057.5742%2014.1303%2057.8%2014.67V14.67V13H60.8V22.1C60.8%2024.29%2058.87%2025.65%2056.02%2025.65C53.37%2025.65%2051.72%2024.46%2051.55%2022.8V22.79ZM57.8%2017.61C57.8%2016.15%2057.13%2015.23%2056.07%2015.23C55.01%2015.23%2054.36%2016.14%2054.36%2017.61C54.36%2019.08%2055%2019.91%2056.07%2019.91C57.14%2019.91%2057.8%2019.1%2057.8%2017.62V17.61ZM61.93%2017.61C61.93%2014.61%2063.77%2012.82%2066.61%2012.82C69.45%2012.82%2071.3%2014.61%2071.3%2017.61C71.3%2020.61%2069.5%2022.41%2066.61%2022.41C63.72%2022.41%2061.93%2020.67%2061.93%2017.62V17.61ZM68.28%2017.61C68.28%2015.96%2067.63%2014.99%2066.61%2014.99C65.59%2014.99%2065%2016%2065%2017.63C65%2019.26%2065.63%2020.23%2066.65%2020.23C67.67%2020.23%2068.28%2019.3%2068.28%2017.63V17.61ZM72.44%2010.82C72.4321%2010.5171%2072.5144%2010.2187%2072.6763%209.96261C72.8383%209.70651%2073.0726%209.50427%2073.3496%209.38151C73.6266%209.25875%2073.9338%209.221%2074.2323%209.27305C74.5308%209.32511%2074.8071%209.46462%2075.0262%209.67389C75.2454%209.88317%2075.3974%2010.1528%2075.4631%2010.4486C75.5288%2010.7444%2075.5052%2011.053%2075.3952%2011.3354C75.2853%2011.6177%2075.094%2011.8611%2074.8456%2012.0346C74.5973%2012.2081%2074.3029%2012.304%2074%2012.31C73.7992%2012.3238%2073.5977%2012.2959%2073.4082%2012.2281C73.2186%2012.1603%2073.0452%2012.0541%2072.8987%2011.916C72.7522%2011.778%2072.6358%2011.6111%2072.5569%2011.4259C72.4779%2011.2408%2072.4381%2011.0413%2072.44%2010.84V10.82ZM72.44%2013.02H75.44V22.2H72.44V13.02ZM86.33%2017.61C86.33%2020.61%2085%2022.32%2082.72%2022.32C82.1354%2022.3575%2081.5533%2022.2146%2081.0525%2021.9106C80.5517%2021.6065%2080.1564%2021.156%2079.92%2020.62H79.86V25.14H76.86V13H79.86V14.64H79.92C80.1454%2014.0951%2080.5332%2013.6329%2081.0306%2013.3162C81.528%2012.9995%2082.1109%2012.8437%2082.7%2012.87C85%2012.91%2086.37%2014.63%2086.37%2017.63L86.33%2017.61ZM83.33%2017.61C83.33%2016.15%2082.66%2015.22%2081.61%2015.22C80.56%2015.22%2079.89%2016.16%2079.88%2017.61C79.87%2019.06%2080.56%2019.99%2081.61%2019.99C82.66%2019.99%2083.33%2019.08%2083.33%2017.63V17.61ZM91.48%2012.81C93.97%2012.81%2095.48%2013.99%2095.55%2015.88H92.82C92.82%2015.23%2092.28%2014.82%2091.45%2014.82C90.62%2014.82%2090.25%2015.14%2090.25%2015.61C90.25%2016.08%2090.58%2016.23%2091.25%2016.37L93.17%2016.76C95%2017.15%2095.78%2017.89%2095.78%2019.28C95.78%2021.18%2094.05%2022.4%2091.5%2022.4C88.95%2022.4%2087.28%2021.18%2087.15%2019.31H90.04C90.13%2019.99%2090.67%2020.39%2091.55%2020.39C92.43%2020.39%2092.83%2020.1%2092.83%2019.62C92.83%2019.14%2092.55%2019.04%2091.83%2018.89L90.1%2018.52C88.31%2018.15%2087.37%2017.2%2087.37%2015.8C87.39%2014%2089%2012.83%2091.48%2012.83V12.81ZM105.79%2022.18H102.9V20.47H102.84C102.681%2021.0441%20102.331%2021.5466%20101.847%2021.8941C101.363%2022.2415%20100.775%2022.413%20100.18%2022.38C99.7242%2022.4059%2099.2682%2022.3337%2098.8427%2022.1682C98.4172%2022.0027%2098.0322%2021.7479%2097.7137%2021.4208C97.3952%2021.0938%2097.1505%2020.7021%2096.9964%2020.2724C96.8422%2019.8427%2096.7821%2019.3849%2096.82%2018.93V13H99.82V18.24C99.82%2019.33%20100.38%2019.91%20101.31%2019.91C101.528%2019.9104%20101.744%2019.8643%20101.943%2019.7746C102.141%2019.6849%20102.319%2019.5537%20102.463%2019.3899C102.606%2019.226%20102.714%2019.0333%20102.777%2018.8247C102.84%2018.616%20102.859%2018.3962%20102.83%2018.18V13H105.83L105.79%2022.18ZM107.24%2013H110.14V14.77H110.2C110.359%2014.2035%20110.702%2013.7057%20111.174%2013.3547C111.646%2013.0037%20112.222%2012.8191%20112.81%2012.83C113.409%2012.7821%20114.003%2012.9612%20114.476%2013.3318C114.948%2013.7024%20115.264%2014.2372%20115.36%2014.83H115.42C115.601%2014.2309%20115.977%2013.7093%20116.488%2013.3472C116.998%2012.9851%20117.615%2012.8031%20118.24%2012.83C118.648%2012.8163%20119.054%2012.8886%20119.432%2013.0422C119.811%2013.1957%20120.152%2013.4272%20120.435%2013.7214C120.718%2014.0157%20120.936%2014.3662%20121.075%2014.7501C121.213%2015.134%20121.27%2015.5429%20121.24%2015.95V22.2H118.24V16.75C118.24%2015.75%20117.79%2015.29%20116.95%2015.29C116.763%2015.2884%20116.577%2015.327%20116.406%2015.4032C116.235%2015.4794%20116.082%2015.5914%20115.958%2015.7317C115.834%2015.872%20115.741%2016.0372%20115.686%2016.2163C115.631%2016.3955%20115.616%2016.5843%20115.64%2016.77V22.2H112.79V16.71C112.79%2015.79%20112.34%2015.29%20111.52%2015.29C111.331%2015.2901%20111.143%2015.3303%20110.971%2015.408C110.798%2015.4858%20110.643%2015.5993%20110.518%2015.741C110.392%2015.8827%20110.298%2016.0495%20110.241%2016.2304C110.185%2016.4112%20110.167%2016.6019%20110.19%2016.79V22.2H107.19L107.24%2013Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3Cpath%20d%3D%22M28.48%2010.62C27.9711%209.45636%2027.2976%208.37193%2026.48%207.4C25.2715%205.92034%2023.7633%204.71339%2022.0547%203.8586C20.3461%203.00382%2018.4758%202.52057%2016.567%202.44066C14.6582%202.36075%2012.7541%202.68599%2010.98%203.39499C9.20597%204.10398%207.60217%205.18065%206.2742%206.55413C4.94622%207.9276%203.92417%209.56675%203.27532%2011.3637C2.62647%2013.1606%202.36552%2015.0746%202.50966%2016.9796C2.65381%2018.8847%203.19976%2020.7376%204.1116%2022.4164C5.02344%2024.0953%206.28049%2025.562%207.80001%2026.72C8.77501%2027.4779%209.85236%2028.094%2011%2028.55C12.609%2029.2094%2014.3311%2029.549%2016.07%2029.55C19.6594%2029.5421%2023.0992%2028.1113%2025.6355%2025.5713C28.1717%2023.0313%2029.5974%2019.5894%2029.6%2016C29.6026%2014.1485%2029.2213%2012.3166%2028.48%2010.62V10.62ZM16.06%205.18999C17.6216%205.18983%2019.1643%205.53113%2020.58%206.18999V6.18999C20.2348%206.33916%2019.8718%206.44335%2019.5%206.5C18.2766%206.67709%2017.1433%207.24507%2016.2692%208.11917C15.3951%208.99326%2014.8271%2010.1266%2014.65%2011.35C14.5723%2012.0361%2014.2602%2012.6744%2013.7665%2013.1572C13.2728%2013.64%2012.6277%2013.9376%2011.94%2014C10.7166%2014.1771%209.58327%2014.7451%208.70918%2015.6192C7.83509%2016.4933%207.2671%2017.6266%207.09001%2018.85C7.03005%2019.5024%206.7517%2020.1155%206.30001%2020.59V20.59C5.52066%2018.9433%205.17056%2017.1261%205.28228%2015.3077C5.394%2013.4893%205.96391%2011.7287%206.93898%2010.1897C7.91404%208.65079%209.26258%207.38351%2010.8591%206.50584C12.4556%205.62817%2014.2482%205.16864%2016.07%205.16999L16.06%205.18999ZM7.79001%2023C7.91001%2022.89%208.03001%2022.79%208.15001%2022.67C9.03966%2021.8075%209.61072%2020.6689%209.77001%2019.44C9.83459%2018.7492%2010.143%2018.104%2010.64%2017.62C11.1183%2017.1222%2011.762%2016.8163%2012.45%2016.76C13.6734%2016.5829%2014.8067%2016.0149%2015.6808%2015.1408C16.5549%2014.2667%2017.1229%2013.1334%2017.3%2011.91C17.3433%2011.1875%2017.6533%2010.5068%2018.17%2010C18.6601%209.51185%2019.3099%209.2171%2020%209.16999C21.1239%209.01536%2022.1721%208.51571%2023%207.74C23.9427%208.52207%2024.7413%209.46289%2025.36%2010.52C25.322%2010.5713%2025.2784%2010.6183%2025.23%2010.66C24.7527%2011.1622%2024.1098%2011.4748%2023.42%2011.54C22.1953%2011.714%2021.0603%2012.281%2020.1856%2013.1556C19.311%2014.0303%2018.744%2015.1653%2018.57%2016.39C18.4995%2017.0784%2018.1932%2017.7213%2017.703%2018.2097C17.2127%2018.6982%2016.5687%2019.0021%2015.88%2019.07C14.653%2019.2457%2013.5155%2019.8126%2012.6363%2020.6863C11.7572%2021.5601%2011.1833%2022.6941%2011%2023.92C10.9462%2024.4087%2010.7783%2024.878%2010.51%2025.29C9.484%2024.6808%208.5651%2023.9072%207.79001%2023V23ZM16.06%2026.86C15.0453%2026.8611%2014.0354%2026.7197%2013.06%2026.44C13.3937%2025.818%2013.6106%2025.1401%2013.7%2024.44C13.7701%2023.7531%2014.075%2023.1114%2014.5632%2022.6232C15.0514%2022.135%2015.6931%2021.8301%2016.38%2021.76C17.6052%2021.5849%2018.7408%2021.0178%2019.6169%2020.1435C20.4929%2019.2693%2021.0624%2018.1348%2021.24%2016.91C21.3101%2016.2231%2021.615%2015.5814%2022.1032%2015.0932C22.5914%2014.605%2023.2331%2014.3001%2023.92%2014.23C24.842%2014.1101%2025.7208%2013.7668%2026.48%2013.23C26.9016%2014.8279%2026.9515%2016.5011%2026.626%2018.1213C26.3005%2019.7415%2025.6081%2021.2657%2024.6021%2022.5768C23.5961%2023.8878%2022.3032%2024.9511%2020.8224%2025.6849C19.3417%2026.4187%2017.7126%2026.8036%2016.06%2026.81V26.86Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3C%2Fsvg%3E"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                            className: cx((LogoSection_module_default()), "logo-code", "grayscale"),
                            id: cx((LogoSection_module_default()), "w-node-_36c46b65-bec7-ad86-567a-d0c29448d9dd-9448d9cb"),
                            tag: "div",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                className: cx((LogoSection_module_default()), "logo-code"),
                                value: "%3Csvg%20id%3D%22logo-7%22%20width%3D%22124%22%20height%3D%2232%22%20viewbox%3D%220%200%20124%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cpath%20d%3D%22M36.87%2010.07H39.87V22.2H36.87V10.07ZM41.06%2017.62C41.06%2014.62%2042.9%2012.83%2045.74%2012.83C48.58%2012.83%2050.42%2014.62%2050.42%2017.62C50.42%2020.62%2048.62%2022.42%2045.74%2022.42C42.86%2022.42%2041.06%2020.67%2041.06%2017.62ZM47.41%2017.62C47.41%2015.97%2046.76%2015%2045.74%2015C44.72%2015%2044.08%2016%2044.08%2017.62C44.08%2019.24%2044.71%2020.22%2045.74%2020.22C46.77%2020.22%2047.41%2019.3%2047.41%2017.63V17.62ZM51.55%2022.79H54.43C54.5671%2023.0945%2054.7988%2023.3466%2055.0907%2023.5088C55.3826%2023.6709%2055.7191%2023.7345%2056.05%2023.69C57.19%2023.69%2057.79%2023.07%2057.79%2022.17V20.49H57.73C57.491%2021.0049%2057.1031%2021.4363%2056.6165%2021.7287C56.1299%2022.021%2055.5668%2022.1608%2055%2022.13C52.81%2022.13%2051.36%2020.46%2051.36%2017.59C51.36%2014.72%2052.74%2012.91%2055.04%2012.91C55.6246%2012.8871%2056.2022%2013.0434%2056.6955%2013.3579C57.1888%2013.6725%2057.5742%2014.1303%2057.8%2014.67V14.67V13H60.8V22.1C60.8%2024.29%2058.87%2025.65%2056.02%2025.65C53.37%2025.65%2051.72%2024.46%2051.55%2022.8V22.79ZM57.8%2017.61C57.8%2016.15%2057.13%2015.23%2056.07%2015.23C55.01%2015.23%2054.36%2016.14%2054.36%2017.61C54.36%2019.08%2055%2019.91%2056.07%2019.91C57.14%2019.91%2057.8%2019.1%2057.8%2017.62V17.61ZM61.93%2017.61C61.93%2014.61%2063.77%2012.82%2066.61%2012.82C69.45%2012.82%2071.3%2014.61%2071.3%2017.61C71.3%2020.61%2069.5%2022.41%2066.61%2022.41C63.72%2022.41%2061.93%2020.67%2061.93%2017.62V17.61ZM68.28%2017.61C68.28%2015.96%2067.63%2014.99%2066.61%2014.99C65.59%2014.99%2065%2016%2065%2017.63C65%2019.26%2065.63%2020.23%2066.65%2020.23C67.67%2020.23%2068.28%2019.3%2068.28%2017.63V17.61ZM72.44%2010.82C72.4321%2010.5171%2072.5144%2010.2187%2072.6763%209.96261C72.8383%209.70651%2073.0726%209.50427%2073.3496%209.38151C73.6266%209.25875%2073.9338%209.221%2074.2323%209.27305C74.5308%209.32511%2074.8071%209.46462%2075.0262%209.67389C75.2454%209.88317%2075.3974%2010.1528%2075.4631%2010.4486C75.5288%2010.7444%2075.5052%2011.053%2075.3952%2011.3354C75.2853%2011.6177%2075.094%2011.8611%2074.8456%2012.0346C74.5973%2012.2081%2074.3029%2012.304%2074%2012.31C73.7992%2012.3238%2073.5977%2012.2959%2073.4082%2012.2281C73.2186%2012.1603%2073.0452%2012.0541%2072.8987%2011.916C72.7522%2011.778%2072.6358%2011.6111%2072.5569%2011.4259C72.4779%2011.2408%2072.4381%2011.0413%2072.44%2010.84V10.82ZM72.44%2013.02H75.44V22.2H72.44V13.02ZM86.33%2017.61C86.33%2020.61%2085%2022.32%2082.72%2022.32C82.1354%2022.3575%2081.5533%2022.2146%2081.0525%2021.9106C80.5517%2021.6065%2080.1564%2021.156%2079.92%2020.62H79.86V25.14H76.86V13H79.86V14.64H79.92C80.1454%2014.0951%2080.5332%2013.6329%2081.0306%2013.3162C81.528%2012.9995%2082.1109%2012.8437%2082.7%2012.87C85%2012.91%2086.37%2014.63%2086.37%2017.63L86.33%2017.61ZM83.33%2017.61C83.33%2016.15%2082.66%2015.22%2081.61%2015.22C80.56%2015.22%2079.89%2016.16%2079.88%2017.61C79.87%2019.06%2080.56%2019.99%2081.61%2019.99C82.66%2019.99%2083.33%2019.08%2083.33%2017.63V17.61ZM91.48%2012.81C93.97%2012.81%2095.48%2013.99%2095.55%2015.88H92.82C92.82%2015.23%2092.28%2014.82%2091.45%2014.82C90.62%2014.82%2090.25%2015.14%2090.25%2015.61C90.25%2016.08%2090.58%2016.23%2091.25%2016.37L93.17%2016.76C95%2017.15%2095.78%2017.89%2095.78%2019.28C95.78%2021.18%2094.05%2022.4%2091.5%2022.4C88.95%2022.4%2087.28%2021.18%2087.15%2019.31H90.04C90.13%2019.99%2090.67%2020.39%2091.55%2020.39C92.43%2020.39%2092.83%2020.1%2092.83%2019.62C92.83%2019.14%2092.55%2019.04%2091.83%2018.89L90.1%2018.52C88.31%2018.15%2087.37%2017.2%2087.37%2015.8C87.39%2014%2089%2012.83%2091.48%2012.83V12.81ZM105.79%2022.18H102.9V20.47H102.84C102.681%2021.0441%20102.331%2021.5466%20101.847%2021.8941C101.363%2022.2415%20100.775%2022.413%20100.18%2022.38C99.7242%2022.4059%2099.2682%2022.3337%2098.8427%2022.1682C98.4172%2022.0027%2098.0322%2021.7479%2097.7137%2021.4208C97.3952%2021.0938%2097.1505%2020.7021%2096.9964%2020.2724C96.8422%2019.8427%2096.7821%2019.3849%2096.82%2018.93V13H99.82V18.24C99.82%2019.33%20100.38%2019.91%20101.31%2019.91C101.528%2019.9104%20101.744%2019.8643%20101.943%2019.7746C102.141%2019.6849%20102.319%2019.5537%20102.463%2019.3899C102.606%2019.226%20102.714%2019.0333%20102.777%2018.8247C102.84%2018.616%20102.859%2018.3962%20102.83%2018.18V13H105.83L105.79%2022.18ZM107.24%2013H110.14V14.77H110.2C110.359%2014.2035%20110.702%2013.7057%20111.174%2013.3547C111.646%2013.0037%20112.222%2012.8191%20112.81%2012.83C113.409%2012.7821%20114.003%2012.9612%20114.476%2013.3318C114.948%2013.7024%20115.264%2014.2372%20115.36%2014.83H115.42C115.601%2014.2309%20115.977%2013.7093%20116.488%2013.3472C116.998%2012.9851%20117.615%2012.8031%20118.24%2012.83C118.648%2012.8163%20119.054%2012.8886%20119.432%2013.0422C119.811%2013.1957%20120.152%2013.4272%20120.435%2013.7214C120.718%2014.0157%20120.936%2014.3662%20121.075%2014.7501C121.213%2015.134%20121.27%2015.5429%20121.24%2015.95V22.2H118.24V16.75C118.24%2015.75%20117.79%2015.29%20116.95%2015.29C116.763%2015.2884%20116.577%2015.327%20116.406%2015.4032C116.235%2015.4794%20116.082%2015.5914%20115.958%2015.7317C115.834%2015.872%20115.741%2016.0372%20115.686%2016.2163C115.631%2016.3955%20115.616%2016.5843%20115.64%2016.77V22.2H112.79V16.71C112.79%2015.79%20112.34%2015.29%20111.52%2015.29C111.331%2015.2901%20111.143%2015.3303%20110.971%2015.408C110.798%2015.4858%20110.643%2015.5993%20110.518%2015.741C110.392%2015.8827%20110.298%2016.0495%20110.241%2016.2304C110.185%2016.4112%20110.167%2016.6019%20110.19%2016.79V22.2H107.19L107.24%2013Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3Cpath%20d%3D%22M28.48%2010.62C27.9711%209.45636%2027.2976%208.37193%2026.48%207.4C25.2715%205.92034%2023.7633%204.71339%2022.0547%203.8586C20.3461%203.00382%2018.4758%202.52057%2016.567%202.44066C14.6582%202.36075%2012.7541%202.68599%2010.98%203.39499C9.20597%204.10398%207.60217%205.18065%206.2742%206.55413C4.94622%207.9276%203.92417%209.56675%203.27532%2011.3637C2.62647%2013.1606%202.36552%2015.0746%202.50966%2016.9796C2.65381%2018.8847%203.19976%2020.7376%204.1116%2022.4164C5.02344%2024.0953%206.28049%2025.562%207.80001%2026.72C8.77501%2027.4779%209.85236%2028.094%2011%2028.55C12.609%2029.2094%2014.3311%2029.549%2016.07%2029.55C19.6594%2029.5421%2023.0992%2028.1113%2025.6355%2025.5713C28.1717%2023.0313%2029.5974%2019.5894%2029.6%2016C29.6026%2014.1485%2029.2213%2012.3166%2028.48%2010.62V10.62ZM16.06%205.18999C17.6216%205.18983%2019.1643%205.53113%2020.58%206.18999V6.18999C20.2348%206.33916%2019.8718%206.44335%2019.5%206.5C18.2766%206.67709%2017.1433%207.24507%2016.2692%208.11917C15.3951%208.99326%2014.8271%2010.1266%2014.65%2011.35C14.5723%2012.0361%2014.2602%2012.6744%2013.7665%2013.1572C13.2728%2013.64%2012.6277%2013.9376%2011.94%2014C10.7166%2014.1771%209.58327%2014.7451%208.70918%2015.6192C7.83509%2016.4933%207.2671%2017.6266%207.09001%2018.85C7.03005%2019.5024%206.7517%2020.1155%206.30001%2020.59V20.59C5.52066%2018.9433%205.17056%2017.1261%205.28228%2015.3077C5.394%2013.4893%205.96391%2011.7287%206.93898%2010.1897C7.91404%208.65079%209.26258%207.38351%2010.8591%206.50584C12.4556%205.62817%2014.2482%205.16864%2016.07%205.16999L16.06%205.18999ZM7.79001%2023C7.91001%2022.89%208.03001%2022.79%208.15001%2022.67C9.03966%2021.8075%209.61072%2020.6689%209.77001%2019.44C9.83459%2018.7492%2010.143%2018.104%2010.64%2017.62C11.1183%2017.1222%2011.762%2016.8163%2012.45%2016.76C13.6734%2016.5829%2014.8067%2016.0149%2015.6808%2015.1408C16.5549%2014.2667%2017.1229%2013.1334%2017.3%2011.91C17.3433%2011.1875%2017.6533%2010.5068%2018.17%2010C18.6601%209.51185%2019.3099%209.2171%2020%209.16999C21.1239%209.01536%2022.1721%208.51571%2023%207.74C23.9427%208.52207%2024.7413%209.46289%2025.36%2010.52C25.322%2010.5713%2025.2784%2010.6183%2025.23%2010.66C24.7527%2011.1622%2024.1098%2011.4748%2023.42%2011.54C22.1953%2011.714%2021.0603%2012.281%2020.1856%2013.1556C19.311%2014.0303%2018.744%2015.1653%2018.57%2016.39C18.4995%2017.0784%2018.1932%2017.7213%2017.703%2018.2097C17.2127%2018.6982%2016.5687%2019.0021%2015.88%2019.07C14.653%2019.2457%2013.5155%2019.8126%2012.6363%2020.6863C11.7572%2021.5601%2011.1833%2022.6941%2011%2023.92C10.9462%2024.4087%2010.7783%2024.878%2010.51%2025.29C9.484%2024.6808%208.5651%2023.9072%207.79001%2023V23ZM16.06%2026.86C15.0453%2026.8611%2014.0354%2026.7197%2013.06%2026.44C13.3937%2025.818%2013.6106%2025.1401%2013.7%2024.44C13.7701%2023.7531%2014.075%2023.1114%2014.5632%2022.6232C15.0514%2022.135%2015.6931%2021.8301%2016.38%2021.76C17.6052%2021.5849%2018.7408%2021.0178%2019.6169%2020.1435C20.4929%2019.2693%2021.0624%2018.1348%2021.24%2016.91C21.3101%2016.2231%2021.615%2015.5814%2022.1032%2015.0932C22.5914%2014.605%2023.2331%2014.3001%2023.92%2014.23C24.842%2014.1101%2025.7208%2013.7668%2026.48%2013.23C26.9016%2014.8279%2026.9515%2016.5011%2026.626%2018.1213C26.3005%2019.7415%2025.6081%2021.2657%2024.6021%2022.5768C23.5961%2023.8878%2022.3032%2024.9511%2020.8224%2025.6849C19.3417%2026.4187%2017.7126%2026.8036%2016.06%2026.81V26.86Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3C%2Fsvg%3E"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                            className: cx((LogoSection_module_default()), "logo-code", "grayscale"),
                            id: cx((LogoSection_module_default()), "w-node-_36c46b65-bec7-ad86-567a-d0c29448d9df-9448d9cb"),
                            tag: "div",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                className: cx((LogoSection_module_default()), "logo-code"),
                                value: "%3Csvg%20id%3D%22logo-7%22%20width%3D%22124%22%20height%3D%2232%22%20viewbox%3D%220%200%20124%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cpath%20d%3D%22M36.87%2010.07H39.87V22.2H36.87V10.07ZM41.06%2017.62C41.06%2014.62%2042.9%2012.83%2045.74%2012.83C48.58%2012.83%2050.42%2014.62%2050.42%2017.62C50.42%2020.62%2048.62%2022.42%2045.74%2022.42C42.86%2022.42%2041.06%2020.67%2041.06%2017.62ZM47.41%2017.62C47.41%2015.97%2046.76%2015%2045.74%2015C44.72%2015%2044.08%2016%2044.08%2017.62C44.08%2019.24%2044.71%2020.22%2045.74%2020.22C46.77%2020.22%2047.41%2019.3%2047.41%2017.63V17.62ZM51.55%2022.79H54.43C54.5671%2023.0945%2054.7988%2023.3466%2055.0907%2023.5088C55.3826%2023.6709%2055.7191%2023.7345%2056.05%2023.69C57.19%2023.69%2057.79%2023.07%2057.79%2022.17V20.49H57.73C57.491%2021.0049%2057.1031%2021.4363%2056.6165%2021.7287C56.1299%2022.021%2055.5668%2022.1608%2055%2022.13C52.81%2022.13%2051.36%2020.46%2051.36%2017.59C51.36%2014.72%2052.74%2012.91%2055.04%2012.91C55.6246%2012.8871%2056.2022%2013.0434%2056.6955%2013.3579C57.1888%2013.6725%2057.5742%2014.1303%2057.8%2014.67V14.67V13H60.8V22.1C60.8%2024.29%2058.87%2025.65%2056.02%2025.65C53.37%2025.65%2051.72%2024.46%2051.55%2022.8V22.79ZM57.8%2017.61C57.8%2016.15%2057.13%2015.23%2056.07%2015.23C55.01%2015.23%2054.36%2016.14%2054.36%2017.61C54.36%2019.08%2055%2019.91%2056.07%2019.91C57.14%2019.91%2057.8%2019.1%2057.8%2017.62V17.61ZM61.93%2017.61C61.93%2014.61%2063.77%2012.82%2066.61%2012.82C69.45%2012.82%2071.3%2014.61%2071.3%2017.61C71.3%2020.61%2069.5%2022.41%2066.61%2022.41C63.72%2022.41%2061.93%2020.67%2061.93%2017.62V17.61ZM68.28%2017.61C68.28%2015.96%2067.63%2014.99%2066.61%2014.99C65.59%2014.99%2065%2016%2065%2017.63C65%2019.26%2065.63%2020.23%2066.65%2020.23C67.67%2020.23%2068.28%2019.3%2068.28%2017.63V17.61ZM72.44%2010.82C72.4321%2010.5171%2072.5144%2010.2187%2072.6763%209.96261C72.8383%209.70651%2073.0726%209.50427%2073.3496%209.38151C73.6266%209.25875%2073.9338%209.221%2074.2323%209.27305C74.5308%209.32511%2074.8071%209.46462%2075.0262%209.67389C75.2454%209.88317%2075.3974%2010.1528%2075.4631%2010.4486C75.5288%2010.7444%2075.5052%2011.053%2075.3952%2011.3354C75.2853%2011.6177%2075.094%2011.8611%2074.8456%2012.0346C74.5973%2012.2081%2074.3029%2012.304%2074%2012.31C73.7992%2012.3238%2073.5977%2012.2959%2073.4082%2012.2281C73.2186%2012.1603%2073.0452%2012.0541%2072.8987%2011.916C72.7522%2011.778%2072.6358%2011.6111%2072.5569%2011.4259C72.4779%2011.2408%2072.4381%2011.0413%2072.44%2010.84V10.82ZM72.44%2013.02H75.44V22.2H72.44V13.02ZM86.33%2017.61C86.33%2020.61%2085%2022.32%2082.72%2022.32C82.1354%2022.3575%2081.5533%2022.2146%2081.0525%2021.9106C80.5517%2021.6065%2080.1564%2021.156%2079.92%2020.62H79.86V25.14H76.86V13H79.86V14.64H79.92C80.1454%2014.0951%2080.5332%2013.6329%2081.0306%2013.3162C81.528%2012.9995%2082.1109%2012.8437%2082.7%2012.87C85%2012.91%2086.37%2014.63%2086.37%2017.63L86.33%2017.61ZM83.33%2017.61C83.33%2016.15%2082.66%2015.22%2081.61%2015.22C80.56%2015.22%2079.89%2016.16%2079.88%2017.61C79.87%2019.06%2080.56%2019.99%2081.61%2019.99C82.66%2019.99%2083.33%2019.08%2083.33%2017.63V17.61ZM91.48%2012.81C93.97%2012.81%2095.48%2013.99%2095.55%2015.88H92.82C92.82%2015.23%2092.28%2014.82%2091.45%2014.82C90.62%2014.82%2090.25%2015.14%2090.25%2015.61C90.25%2016.08%2090.58%2016.23%2091.25%2016.37L93.17%2016.76C95%2017.15%2095.78%2017.89%2095.78%2019.28C95.78%2021.18%2094.05%2022.4%2091.5%2022.4C88.95%2022.4%2087.28%2021.18%2087.15%2019.31H90.04C90.13%2019.99%2090.67%2020.39%2091.55%2020.39C92.43%2020.39%2092.83%2020.1%2092.83%2019.62C92.83%2019.14%2092.55%2019.04%2091.83%2018.89L90.1%2018.52C88.31%2018.15%2087.37%2017.2%2087.37%2015.8C87.39%2014%2089%2012.83%2091.48%2012.83V12.81ZM105.79%2022.18H102.9V20.47H102.84C102.681%2021.0441%20102.331%2021.5466%20101.847%2021.8941C101.363%2022.2415%20100.775%2022.413%20100.18%2022.38C99.7242%2022.4059%2099.2682%2022.3337%2098.8427%2022.1682C98.4172%2022.0027%2098.0322%2021.7479%2097.7137%2021.4208C97.3952%2021.0938%2097.1505%2020.7021%2096.9964%2020.2724C96.8422%2019.8427%2096.7821%2019.3849%2096.82%2018.93V13H99.82V18.24C99.82%2019.33%20100.38%2019.91%20101.31%2019.91C101.528%2019.9104%20101.744%2019.8643%20101.943%2019.7746C102.141%2019.6849%20102.319%2019.5537%20102.463%2019.3899C102.606%2019.226%20102.714%2019.0333%20102.777%2018.8247C102.84%2018.616%20102.859%2018.3962%20102.83%2018.18V13H105.83L105.79%2022.18ZM107.24%2013H110.14V14.77H110.2C110.359%2014.2035%20110.702%2013.7057%20111.174%2013.3547C111.646%2013.0037%20112.222%2012.8191%20112.81%2012.83C113.409%2012.7821%20114.003%2012.9612%20114.476%2013.3318C114.948%2013.7024%20115.264%2014.2372%20115.36%2014.83H115.42C115.601%2014.2309%20115.977%2013.7093%20116.488%2013.3472C116.998%2012.9851%20117.615%2012.8031%20118.24%2012.83C118.648%2012.8163%20119.054%2012.8886%20119.432%2013.0422C119.811%2013.1957%20120.152%2013.4272%20120.435%2013.7214C120.718%2014.0157%20120.936%2014.3662%20121.075%2014.7501C121.213%2015.134%20121.27%2015.5429%20121.24%2015.95V22.2H118.24V16.75C118.24%2015.75%20117.79%2015.29%20116.95%2015.29C116.763%2015.2884%20116.577%2015.327%20116.406%2015.4032C116.235%2015.4794%20116.082%2015.5914%20115.958%2015.7317C115.834%2015.872%20115.741%2016.0372%20115.686%2016.2163C115.631%2016.3955%20115.616%2016.5843%20115.64%2016.77V22.2H112.79V16.71C112.79%2015.79%20112.34%2015.29%20111.52%2015.29C111.331%2015.2901%20111.143%2015.3303%20110.971%2015.408C110.798%2015.4858%20110.643%2015.5993%20110.518%2015.741C110.392%2015.8827%20110.298%2016.0495%20110.241%2016.2304C110.185%2016.4112%20110.167%2016.6019%20110.19%2016.79V22.2H107.19L107.24%2013Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3Cpath%20d%3D%22M28.48%2010.62C27.9711%209.45636%2027.2976%208.37193%2026.48%207.4C25.2715%205.92034%2023.7633%204.71339%2022.0547%203.8586C20.3461%203.00382%2018.4758%202.52057%2016.567%202.44066C14.6582%202.36075%2012.7541%202.68599%2010.98%203.39499C9.20597%204.10398%207.60217%205.18065%206.2742%206.55413C4.94622%207.9276%203.92417%209.56675%203.27532%2011.3637C2.62647%2013.1606%202.36552%2015.0746%202.50966%2016.9796C2.65381%2018.8847%203.19976%2020.7376%204.1116%2022.4164C5.02344%2024.0953%206.28049%2025.562%207.80001%2026.72C8.77501%2027.4779%209.85236%2028.094%2011%2028.55C12.609%2029.2094%2014.3311%2029.549%2016.07%2029.55C19.6594%2029.5421%2023.0992%2028.1113%2025.6355%2025.5713C28.1717%2023.0313%2029.5974%2019.5894%2029.6%2016C29.6026%2014.1485%2029.2213%2012.3166%2028.48%2010.62V10.62ZM16.06%205.18999C17.6216%205.18983%2019.1643%205.53113%2020.58%206.18999V6.18999C20.2348%206.33916%2019.8718%206.44335%2019.5%206.5C18.2766%206.67709%2017.1433%207.24507%2016.2692%208.11917C15.3951%208.99326%2014.8271%2010.1266%2014.65%2011.35C14.5723%2012.0361%2014.2602%2012.6744%2013.7665%2013.1572C13.2728%2013.64%2012.6277%2013.9376%2011.94%2014C10.7166%2014.1771%209.58327%2014.7451%208.70918%2015.6192C7.83509%2016.4933%207.2671%2017.6266%207.09001%2018.85C7.03005%2019.5024%206.7517%2020.1155%206.30001%2020.59V20.59C5.52066%2018.9433%205.17056%2017.1261%205.28228%2015.3077C5.394%2013.4893%205.96391%2011.7287%206.93898%2010.1897C7.91404%208.65079%209.26258%207.38351%2010.8591%206.50584C12.4556%205.62817%2014.2482%205.16864%2016.07%205.16999L16.06%205.18999ZM7.79001%2023C7.91001%2022.89%208.03001%2022.79%208.15001%2022.67C9.03966%2021.8075%209.61072%2020.6689%209.77001%2019.44C9.83459%2018.7492%2010.143%2018.104%2010.64%2017.62C11.1183%2017.1222%2011.762%2016.8163%2012.45%2016.76C13.6734%2016.5829%2014.8067%2016.0149%2015.6808%2015.1408C16.5549%2014.2667%2017.1229%2013.1334%2017.3%2011.91C17.3433%2011.1875%2017.6533%2010.5068%2018.17%2010C18.6601%209.51185%2019.3099%209.2171%2020%209.16999C21.1239%209.01536%2022.1721%208.51571%2023%207.74C23.9427%208.52207%2024.7413%209.46289%2025.36%2010.52C25.322%2010.5713%2025.2784%2010.6183%2025.23%2010.66C24.7527%2011.1622%2024.1098%2011.4748%2023.42%2011.54C22.1953%2011.714%2021.0603%2012.281%2020.1856%2013.1556C19.311%2014.0303%2018.744%2015.1653%2018.57%2016.39C18.4995%2017.0784%2018.1932%2017.7213%2017.703%2018.2097C17.2127%2018.6982%2016.5687%2019.0021%2015.88%2019.07C14.653%2019.2457%2013.5155%2019.8126%2012.6363%2020.6863C11.7572%2021.5601%2011.1833%2022.6941%2011%2023.92C10.9462%2024.4087%2010.7783%2024.878%2010.51%2025.29C9.484%2024.6808%208.5651%2023.9072%207.79001%2023V23ZM16.06%2026.86C15.0453%2026.8611%2014.0354%2026.7197%2013.06%2026.44C13.3937%2025.818%2013.6106%2025.1401%2013.7%2024.44C13.7701%2023.7531%2014.075%2023.1114%2014.5632%2022.6232C15.0514%2022.135%2015.6931%2021.8301%2016.38%2021.76C17.6052%2021.5849%2018.7408%2021.0178%2019.6169%2020.1435C20.4929%2019.2693%2021.0624%2018.1348%2021.24%2016.91C21.3101%2016.2231%2021.615%2015.5814%2022.1032%2015.0932C22.5914%2014.605%2023.2331%2014.3001%2023.92%2014.23C24.842%2014.1101%2025.7208%2013.7668%2026.48%2013.23C26.9016%2014.8279%2026.9515%2016.5011%2026.626%2018.1213C26.3005%2019.7415%2025.6081%2021.2657%2024.6021%2022.5768C23.5961%2023.8878%2022.3032%2024.9511%2020.8224%2025.6849C19.3417%2026.4187%2017.7126%2026.8036%2016.06%2026.81V26.86Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3C%2Fsvg%3E"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                            className: cx((LogoSection_module_default()), "logo-code", "grayscale"),
                            id: cx((LogoSection_module_default()), "w-node-_36c46b65-bec7-ad86-567a-d0c29448d9e1-9448d9cb"),
                            tag: "div",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                className: cx((LogoSection_module_default()), "logo-code"),
                                value: "%3Csvg%20id%3D%22logo-7%22%20width%3D%22124%22%20height%3D%2232%22%20viewbox%3D%220%200%20124%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cpath%20d%3D%22M36.87%2010.07H39.87V22.2H36.87V10.07ZM41.06%2017.62C41.06%2014.62%2042.9%2012.83%2045.74%2012.83C48.58%2012.83%2050.42%2014.62%2050.42%2017.62C50.42%2020.62%2048.62%2022.42%2045.74%2022.42C42.86%2022.42%2041.06%2020.67%2041.06%2017.62ZM47.41%2017.62C47.41%2015.97%2046.76%2015%2045.74%2015C44.72%2015%2044.08%2016%2044.08%2017.62C44.08%2019.24%2044.71%2020.22%2045.74%2020.22C46.77%2020.22%2047.41%2019.3%2047.41%2017.63V17.62ZM51.55%2022.79H54.43C54.5671%2023.0945%2054.7988%2023.3466%2055.0907%2023.5088C55.3826%2023.6709%2055.7191%2023.7345%2056.05%2023.69C57.19%2023.69%2057.79%2023.07%2057.79%2022.17V20.49H57.73C57.491%2021.0049%2057.1031%2021.4363%2056.6165%2021.7287C56.1299%2022.021%2055.5668%2022.1608%2055%2022.13C52.81%2022.13%2051.36%2020.46%2051.36%2017.59C51.36%2014.72%2052.74%2012.91%2055.04%2012.91C55.6246%2012.8871%2056.2022%2013.0434%2056.6955%2013.3579C57.1888%2013.6725%2057.5742%2014.1303%2057.8%2014.67V14.67V13H60.8V22.1C60.8%2024.29%2058.87%2025.65%2056.02%2025.65C53.37%2025.65%2051.72%2024.46%2051.55%2022.8V22.79ZM57.8%2017.61C57.8%2016.15%2057.13%2015.23%2056.07%2015.23C55.01%2015.23%2054.36%2016.14%2054.36%2017.61C54.36%2019.08%2055%2019.91%2056.07%2019.91C57.14%2019.91%2057.8%2019.1%2057.8%2017.62V17.61ZM61.93%2017.61C61.93%2014.61%2063.77%2012.82%2066.61%2012.82C69.45%2012.82%2071.3%2014.61%2071.3%2017.61C71.3%2020.61%2069.5%2022.41%2066.61%2022.41C63.72%2022.41%2061.93%2020.67%2061.93%2017.62V17.61ZM68.28%2017.61C68.28%2015.96%2067.63%2014.99%2066.61%2014.99C65.59%2014.99%2065%2016%2065%2017.63C65%2019.26%2065.63%2020.23%2066.65%2020.23C67.67%2020.23%2068.28%2019.3%2068.28%2017.63V17.61ZM72.44%2010.82C72.4321%2010.5171%2072.5144%2010.2187%2072.6763%209.96261C72.8383%209.70651%2073.0726%209.50427%2073.3496%209.38151C73.6266%209.25875%2073.9338%209.221%2074.2323%209.27305C74.5308%209.32511%2074.8071%209.46462%2075.0262%209.67389C75.2454%209.88317%2075.3974%2010.1528%2075.4631%2010.4486C75.5288%2010.7444%2075.5052%2011.053%2075.3952%2011.3354C75.2853%2011.6177%2075.094%2011.8611%2074.8456%2012.0346C74.5973%2012.2081%2074.3029%2012.304%2074%2012.31C73.7992%2012.3238%2073.5977%2012.2959%2073.4082%2012.2281C73.2186%2012.1603%2073.0452%2012.0541%2072.8987%2011.916C72.7522%2011.778%2072.6358%2011.6111%2072.5569%2011.4259C72.4779%2011.2408%2072.4381%2011.0413%2072.44%2010.84V10.82ZM72.44%2013.02H75.44V22.2H72.44V13.02ZM86.33%2017.61C86.33%2020.61%2085%2022.32%2082.72%2022.32C82.1354%2022.3575%2081.5533%2022.2146%2081.0525%2021.9106C80.5517%2021.6065%2080.1564%2021.156%2079.92%2020.62H79.86V25.14H76.86V13H79.86V14.64H79.92C80.1454%2014.0951%2080.5332%2013.6329%2081.0306%2013.3162C81.528%2012.9995%2082.1109%2012.8437%2082.7%2012.87C85%2012.91%2086.37%2014.63%2086.37%2017.63L86.33%2017.61ZM83.33%2017.61C83.33%2016.15%2082.66%2015.22%2081.61%2015.22C80.56%2015.22%2079.89%2016.16%2079.88%2017.61C79.87%2019.06%2080.56%2019.99%2081.61%2019.99C82.66%2019.99%2083.33%2019.08%2083.33%2017.63V17.61ZM91.48%2012.81C93.97%2012.81%2095.48%2013.99%2095.55%2015.88H92.82C92.82%2015.23%2092.28%2014.82%2091.45%2014.82C90.62%2014.82%2090.25%2015.14%2090.25%2015.61C90.25%2016.08%2090.58%2016.23%2091.25%2016.37L93.17%2016.76C95%2017.15%2095.78%2017.89%2095.78%2019.28C95.78%2021.18%2094.05%2022.4%2091.5%2022.4C88.95%2022.4%2087.28%2021.18%2087.15%2019.31H90.04C90.13%2019.99%2090.67%2020.39%2091.55%2020.39C92.43%2020.39%2092.83%2020.1%2092.83%2019.62C92.83%2019.14%2092.55%2019.04%2091.83%2018.89L90.1%2018.52C88.31%2018.15%2087.37%2017.2%2087.37%2015.8C87.39%2014%2089%2012.83%2091.48%2012.83V12.81ZM105.79%2022.18H102.9V20.47H102.84C102.681%2021.0441%20102.331%2021.5466%20101.847%2021.8941C101.363%2022.2415%20100.775%2022.413%20100.18%2022.38C99.7242%2022.4059%2099.2682%2022.3337%2098.8427%2022.1682C98.4172%2022.0027%2098.0322%2021.7479%2097.7137%2021.4208C97.3952%2021.0938%2097.1505%2020.7021%2096.9964%2020.2724C96.8422%2019.8427%2096.7821%2019.3849%2096.82%2018.93V13H99.82V18.24C99.82%2019.33%20100.38%2019.91%20101.31%2019.91C101.528%2019.9104%20101.744%2019.8643%20101.943%2019.7746C102.141%2019.6849%20102.319%2019.5537%20102.463%2019.3899C102.606%2019.226%20102.714%2019.0333%20102.777%2018.8247C102.84%2018.616%20102.859%2018.3962%20102.83%2018.18V13H105.83L105.79%2022.18ZM107.24%2013H110.14V14.77H110.2C110.359%2014.2035%20110.702%2013.7057%20111.174%2013.3547C111.646%2013.0037%20112.222%2012.8191%20112.81%2012.83C113.409%2012.7821%20114.003%2012.9612%20114.476%2013.3318C114.948%2013.7024%20115.264%2014.2372%20115.36%2014.83H115.42C115.601%2014.2309%20115.977%2013.7093%20116.488%2013.3472C116.998%2012.9851%20117.615%2012.8031%20118.24%2012.83C118.648%2012.8163%20119.054%2012.8886%20119.432%2013.0422C119.811%2013.1957%20120.152%2013.4272%20120.435%2013.7214C120.718%2014.0157%20120.936%2014.3662%20121.075%2014.7501C121.213%2015.134%20121.27%2015.5429%20121.24%2015.95V22.2H118.24V16.75C118.24%2015.75%20117.79%2015.29%20116.95%2015.29C116.763%2015.2884%20116.577%2015.327%20116.406%2015.4032C116.235%2015.4794%20116.082%2015.5914%20115.958%2015.7317C115.834%2015.872%20115.741%2016.0372%20115.686%2016.2163C115.631%2016.3955%20115.616%2016.5843%20115.64%2016.77V22.2H112.79V16.71C112.79%2015.79%20112.34%2015.29%20111.52%2015.29C111.331%2015.2901%20111.143%2015.3303%20110.971%2015.408C110.798%2015.4858%20110.643%2015.5993%20110.518%2015.741C110.392%2015.8827%20110.298%2016.0495%20110.241%2016.2304C110.185%2016.4112%20110.167%2016.6019%20110.19%2016.79V22.2H107.19L107.24%2013Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3Cpath%20d%3D%22M28.48%2010.62C27.9711%209.45636%2027.2976%208.37193%2026.48%207.4C25.2715%205.92034%2023.7633%204.71339%2022.0547%203.8586C20.3461%203.00382%2018.4758%202.52057%2016.567%202.44066C14.6582%202.36075%2012.7541%202.68599%2010.98%203.39499C9.20597%204.10398%207.60217%205.18065%206.2742%206.55413C4.94622%207.9276%203.92417%209.56675%203.27532%2011.3637C2.62647%2013.1606%202.36552%2015.0746%202.50966%2016.9796C2.65381%2018.8847%203.19976%2020.7376%204.1116%2022.4164C5.02344%2024.0953%206.28049%2025.562%207.80001%2026.72C8.77501%2027.4779%209.85236%2028.094%2011%2028.55C12.609%2029.2094%2014.3311%2029.549%2016.07%2029.55C19.6594%2029.5421%2023.0992%2028.1113%2025.6355%2025.5713C28.1717%2023.0313%2029.5974%2019.5894%2029.6%2016C29.6026%2014.1485%2029.2213%2012.3166%2028.48%2010.62V10.62ZM16.06%205.18999C17.6216%205.18983%2019.1643%205.53113%2020.58%206.18999V6.18999C20.2348%206.33916%2019.8718%206.44335%2019.5%206.5C18.2766%206.67709%2017.1433%207.24507%2016.2692%208.11917C15.3951%208.99326%2014.8271%2010.1266%2014.65%2011.35C14.5723%2012.0361%2014.2602%2012.6744%2013.7665%2013.1572C13.2728%2013.64%2012.6277%2013.9376%2011.94%2014C10.7166%2014.1771%209.58327%2014.7451%208.70918%2015.6192C7.83509%2016.4933%207.2671%2017.6266%207.09001%2018.85C7.03005%2019.5024%206.7517%2020.1155%206.30001%2020.59V20.59C5.52066%2018.9433%205.17056%2017.1261%205.28228%2015.3077C5.394%2013.4893%205.96391%2011.7287%206.93898%2010.1897C7.91404%208.65079%209.26258%207.38351%2010.8591%206.50584C12.4556%205.62817%2014.2482%205.16864%2016.07%205.16999L16.06%205.18999ZM7.79001%2023C7.91001%2022.89%208.03001%2022.79%208.15001%2022.67C9.03966%2021.8075%209.61072%2020.6689%209.77001%2019.44C9.83459%2018.7492%2010.143%2018.104%2010.64%2017.62C11.1183%2017.1222%2011.762%2016.8163%2012.45%2016.76C13.6734%2016.5829%2014.8067%2016.0149%2015.6808%2015.1408C16.5549%2014.2667%2017.1229%2013.1334%2017.3%2011.91C17.3433%2011.1875%2017.6533%2010.5068%2018.17%2010C18.6601%209.51185%2019.3099%209.2171%2020%209.16999C21.1239%209.01536%2022.1721%208.51571%2023%207.74C23.9427%208.52207%2024.7413%209.46289%2025.36%2010.52C25.322%2010.5713%2025.2784%2010.6183%2025.23%2010.66C24.7527%2011.1622%2024.1098%2011.4748%2023.42%2011.54C22.1953%2011.714%2021.0603%2012.281%2020.1856%2013.1556C19.311%2014.0303%2018.744%2015.1653%2018.57%2016.39C18.4995%2017.0784%2018.1932%2017.7213%2017.703%2018.2097C17.2127%2018.6982%2016.5687%2019.0021%2015.88%2019.07C14.653%2019.2457%2013.5155%2019.8126%2012.6363%2020.6863C11.7572%2021.5601%2011.1833%2022.6941%2011%2023.92C10.9462%2024.4087%2010.7783%2024.878%2010.51%2025.29C9.484%2024.6808%208.5651%2023.9072%207.79001%2023V23ZM16.06%2026.86C15.0453%2026.8611%2014.0354%2026.7197%2013.06%2026.44C13.3937%2025.818%2013.6106%2025.1401%2013.7%2024.44C13.7701%2023.7531%2014.075%2023.1114%2014.5632%2022.6232C15.0514%2022.135%2015.6931%2021.8301%2016.38%2021.76C17.6052%2021.5849%2018.7408%2021.0178%2019.6169%2020.1435C20.4929%2019.2693%2021.0624%2018.1348%2021.24%2016.91C21.3101%2016.2231%2021.615%2015.5814%2022.1032%2015.0932C22.5914%2014.605%2023.2331%2014.3001%2023.92%2014.23C24.842%2014.1101%2025.7208%2013.7668%2026.48%2013.23C26.9016%2014.8279%2026.9515%2016.5011%2026.626%2018.1213C26.3005%2019.7415%2025.6081%2021.2657%2024.6021%2022.5768C23.5961%2023.8878%2022.3032%2024.9511%2020.8224%2025.6849C19.3417%2026.4187%2017.7126%2026.8036%2016.06%2026.81V26.86Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3C%2Fsvg%3E"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                            className: cx((LogoSection_module_default()), "logo-code", "grayscale", "hide-mob"),
                            id: cx((LogoSection_module_default()), "w-node-_36c46b65-bec7-ad86-567a-d0c29448d9e3-9448d9cb"),
                            tag: "div",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                className: cx((LogoSection_module_default()), "logo-code"),
                                value: "%3Csvg%20id%3D%22logo-7%22%20width%3D%22124%22%20height%3D%2232%22%20viewbox%3D%220%200%20124%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cpath%20d%3D%22M36.87%2010.07H39.87V22.2H36.87V10.07ZM41.06%2017.62C41.06%2014.62%2042.9%2012.83%2045.74%2012.83C48.58%2012.83%2050.42%2014.62%2050.42%2017.62C50.42%2020.62%2048.62%2022.42%2045.74%2022.42C42.86%2022.42%2041.06%2020.67%2041.06%2017.62ZM47.41%2017.62C47.41%2015.97%2046.76%2015%2045.74%2015C44.72%2015%2044.08%2016%2044.08%2017.62C44.08%2019.24%2044.71%2020.22%2045.74%2020.22C46.77%2020.22%2047.41%2019.3%2047.41%2017.63V17.62ZM51.55%2022.79H54.43C54.5671%2023.0945%2054.7988%2023.3466%2055.0907%2023.5088C55.3826%2023.6709%2055.7191%2023.7345%2056.05%2023.69C57.19%2023.69%2057.79%2023.07%2057.79%2022.17V20.49H57.73C57.491%2021.0049%2057.1031%2021.4363%2056.6165%2021.7287C56.1299%2022.021%2055.5668%2022.1608%2055%2022.13C52.81%2022.13%2051.36%2020.46%2051.36%2017.59C51.36%2014.72%2052.74%2012.91%2055.04%2012.91C55.6246%2012.8871%2056.2022%2013.0434%2056.6955%2013.3579C57.1888%2013.6725%2057.5742%2014.1303%2057.8%2014.67V14.67V13H60.8V22.1C60.8%2024.29%2058.87%2025.65%2056.02%2025.65C53.37%2025.65%2051.72%2024.46%2051.55%2022.8V22.79ZM57.8%2017.61C57.8%2016.15%2057.13%2015.23%2056.07%2015.23C55.01%2015.23%2054.36%2016.14%2054.36%2017.61C54.36%2019.08%2055%2019.91%2056.07%2019.91C57.14%2019.91%2057.8%2019.1%2057.8%2017.62V17.61ZM61.93%2017.61C61.93%2014.61%2063.77%2012.82%2066.61%2012.82C69.45%2012.82%2071.3%2014.61%2071.3%2017.61C71.3%2020.61%2069.5%2022.41%2066.61%2022.41C63.72%2022.41%2061.93%2020.67%2061.93%2017.62V17.61ZM68.28%2017.61C68.28%2015.96%2067.63%2014.99%2066.61%2014.99C65.59%2014.99%2065%2016%2065%2017.63C65%2019.26%2065.63%2020.23%2066.65%2020.23C67.67%2020.23%2068.28%2019.3%2068.28%2017.63V17.61ZM72.44%2010.82C72.4321%2010.5171%2072.5144%2010.2187%2072.6763%209.96261C72.8383%209.70651%2073.0726%209.50427%2073.3496%209.38151C73.6266%209.25875%2073.9338%209.221%2074.2323%209.27305C74.5308%209.32511%2074.8071%209.46462%2075.0262%209.67389C75.2454%209.88317%2075.3974%2010.1528%2075.4631%2010.4486C75.5288%2010.7444%2075.5052%2011.053%2075.3952%2011.3354C75.2853%2011.6177%2075.094%2011.8611%2074.8456%2012.0346C74.5973%2012.2081%2074.3029%2012.304%2074%2012.31C73.7992%2012.3238%2073.5977%2012.2959%2073.4082%2012.2281C73.2186%2012.1603%2073.0452%2012.0541%2072.8987%2011.916C72.7522%2011.778%2072.6358%2011.6111%2072.5569%2011.4259C72.4779%2011.2408%2072.4381%2011.0413%2072.44%2010.84V10.82ZM72.44%2013.02H75.44V22.2H72.44V13.02ZM86.33%2017.61C86.33%2020.61%2085%2022.32%2082.72%2022.32C82.1354%2022.3575%2081.5533%2022.2146%2081.0525%2021.9106C80.5517%2021.6065%2080.1564%2021.156%2079.92%2020.62H79.86V25.14H76.86V13H79.86V14.64H79.92C80.1454%2014.0951%2080.5332%2013.6329%2081.0306%2013.3162C81.528%2012.9995%2082.1109%2012.8437%2082.7%2012.87C85%2012.91%2086.37%2014.63%2086.37%2017.63L86.33%2017.61ZM83.33%2017.61C83.33%2016.15%2082.66%2015.22%2081.61%2015.22C80.56%2015.22%2079.89%2016.16%2079.88%2017.61C79.87%2019.06%2080.56%2019.99%2081.61%2019.99C82.66%2019.99%2083.33%2019.08%2083.33%2017.63V17.61ZM91.48%2012.81C93.97%2012.81%2095.48%2013.99%2095.55%2015.88H92.82C92.82%2015.23%2092.28%2014.82%2091.45%2014.82C90.62%2014.82%2090.25%2015.14%2090.25%2015.61C90.25%2016.08%2090.58%2016.23%2091.25%2016.37L93.17%2016.76C95%2017.15%2095.78%2017.89%2095.78%2019.28C95.78%2021.18%2094.05%2022.4%2091.5%2022.4C88.95%2022.4%2087.28%2021.18%2087.15%2019.31H90.04C90.13%2019.99%2090.67%2020.39%2091.55%2020.39C92.43%2020.39%2092.83%2020.1%2092.83%2019.62C92.83%2019.14%2092.55%2019.04%2091.83%2018.89L90.1%2018.52C88.31%2018.15%2087.37%2017.2%2087.37%2015.8C87.39%2014%2089%2012.83%2091.48%2012.83V12.81ZM105.79%2022.18H102.9V20.47H102.84C102.681%2021.0441%20102.331%2021.5466%20101.847%2021.8941C101.363%2022.2415%20100.775%2022.413%20100.18%2022.38C99.7242%2022.4059%2099.2682%2022.3337%2098.8427%2022.1682C98.4172%2022.0027%2098.0322%2021.7479%2097.7137%2021.4208C97.3952%2021.0938%2097.1505%2020.7021%2096.9964%2020.2724C96.8422%2019.8427%2096.7821%2019.3849%2096.82%2018.93V13H99.82V18.24C99.82%2019.33%20100.38%2019.91%20101.31%2019.91C101.528%2019.9104%20101.744%2019.8643%20101.943%2019.7746C102.141%2019.6849%20102.319%2019.5537%20102.463%2019.3899C102.606%2019.226%20102.714%2019.0333%20102.777%2018.8247C102.84%2018.616%20102.859%2018.3962%20102.83%2018.18V13H105.83L105.79%2022.18ZM107.24%2013H110.14V14.77H110.2C110.359%2014.2035%20110.702%2013.7057%20111.174%2013.3547C111.646%2013.0037%20112.222%2012.8191%20112.81%2012.83C113.409%2012.7821%20114.003%2012.9612%20114.476%2013.3318C114.948%2013.7024%20115.264%2014.2372%20115.36%2014.83H115.42C115.601%2014.2309%20115.977%2013.7093%20116.488%2013.3472C116.998%2012.9851%20117.615%2012.8031%20118.24%2012.83C118.648%2012.8163%20119.054%2012.8886%20119.432%2013.0422C119.811%2013.1957%20120.152%2013.4272%20120.435%2013.7214C120.718%2014.0157%20120.936%2014.3662%20121.075%2014.7501C121.213%2015.134%20121.27%2015.5429%20121.24%2015.95V22.2H118.24V16.75C118.24%2015.75%20117.79%2015.29%20116.95%2015.29C116.763%2015.2884%20116.577%2015.327%20116.406%2015.4032C116.235%2015.4794%20116.082%2015.5914%20115.958%2015.7317C115.834%2015.872%20115.741%2016.0372%20115.686%2016.2163C115.631%2016.3955%20115.616%2016.5843%20115.64%2016.77V22.2H112.79V16.71C112.79%2015.79%20112.34%2015.29%20111.52%2015.29C111.331%2015.2901%20111.143%2015.3303%20110.971%2015.408C110.798%2015.4858%20110.643%2015.5993%20110.518%2015.741C110.392%2015.8827%20110.298%2016.0495%20110.241%2016.2304C110.185%2016.4112%20110.167%2016.6019%20110.19%2016.79V22.2H107.19L107.24%2013Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3Cpath%20d%3D%22M28.48%2010.62C27.9711%209.45636%2027.2976%208.37193%2026.48%207.4C25.2715%205.92034%2023.7633%204.71339%2022.0547%203.8586C20.3461%203.00382%2018.4758%202.52057%2016.567%202.44066C14.6582%202.36075%2012.7541%202.68599%2010.98%203.39499C9.20597%204.10398%207.60217%205.18065%206.2742%206.55413C4.94622%207.9276%203.92417%209.56675%203.27532%2011.3637C2.62647%2013.1606%202.36552%2015.0746%202.50966%2016.9796C2.65381%2018.8847%203.19976%2020.7376%204.1116%2022.4164C5.02344%2024.0953%206.28049%2025.562%207.80001%2026.72C8.77501%2027.4779%209.85236%2028.094%2011%2028.55C12.609%2029.2094%2014.3311%2029.549%2016.07%2029.55C19.6594%2029.5421%2023.0992%2028.1113%2025.6355%2025.5713C28.1717%2023.0313%2029.5974%2019.5894%2029.6%2016C29.6026%2014.1485%2029.2213%2012.3166%2028.48%2010.62V10.62ZM16.06%205.18999C17.6216%205.18983%2019.1643%205.53113%2020.58%206.18999V6.18999C20.2348%206.33916%2019.8718%206.44335%2019.5%206.5C18.2766%206.67709%2017.1433%207.24507%2016.2692%208.11917C15.3951%208.99326%2014.8271%2010.1266%2014.65%2011.35C14.5723%2012.0361%2014.2602%2012.6744%2013.7665%2013.1572C13.2728%2013.64%2012.6277%2013.9376%2011.94%2014C10.7166%2014.1771%209.58327%2014.7451%208.70918%2015.6192C7.83509%2016.4933%207.2671%2017.6266%207.09001%2018.85C7.03005%2019.5024%206.7517%2020.1155%206.30001%2020.59V20.59C5.52066%2018.9433%205.17056%2017.1261%205.28228%2015.3077C5.394%2013.4893%205.96391%2011.7287%206.93898%2010.1897C7.91404%208.65079%209.26258%207.38351%2010.8591%206.50584C12.4556%205.62817%2014.2482%205.16864%2016.07%205.16999L16.06%205.18999ZM7.79001%2023C7.91001%2022.89%208.03001%2022.79%208.15001%2022.67C9.03966%2021.8075%209.61072%2020.6689%209.77001%2019.44C9.83459%2018.7492%2010.143%2018.104%2010.64%2017.62C11.1183%2017.1222%2011.762%2016.8163%2012.45%2016.76C13.6734%2016.5829%2014.8067%2016.0149%2015.6808%2015.1408C16.5549%2014.2667%2017.1229%2013.1334%2017.3%2011.91C17.3433%2011.1875%2017.6533%2010.5068%2018.17%2010C18.6601%209.51185%2019.3099%209.2171%2020%209.16999C21.1239%209.01536%2022.1721%208.51571%2023%207.74C23.9427%208.52207%2024.7413%209.46289%2025.36%2010.52C25.322%2010.5713%2025.2784%2010.6183%2025.23%2010.66C24.7527%2011.1622%2024.1098%2011.4748%2023.42%2011.54C22.1953%2011.714%2021.0603%2012.281%2020.1856%2013.1556C19.311%2014.0303%2018.744%2015.1653%2018.57%2016.39C18.4995%2017.0784%2018.1932%2017.7213%2017.703%2018.2097C17.2127%2018.6982%2016.5687%2019.0021%2015.88%2019.07C14.653%2019.2457%2013.5155%2019.8126%2012.6363%2020.6863C11.7572%2021.5601%2011.1833%2022.6941%2011%2023.92C10.9462%2024.4087%2010.7783%2024.878%2010.51%2025.29C9.484%2024.6808%208.5651%2023.9072%207.79001%2023V23ZM16.06%2026.86C15.0453%2026.8611%2014.0354%2026.7197%2013.06%2026.44C13.3937%2025.818%2013.6106%2025.1401%2013.7%2024.44C13.7701%2023.7531%2014.075%2023.1114%2014.5632%2022.6232C15.0514%2022.135%2015.6931%2021.8301%2016.38%2021.76C17.6052%2021.5849%2018.7408%2021.0178%2019.6169%2020.1435C20.4929%2019.2693%2021.0624%2018.1348%2021.24%2016.91C21.3101%2016.2231%2021.615%2015.5814%2022.1032%2015.0932C22.5914%2014.605%2023.2331%2014.3001%2023.92%2014.23C24.842%2014.1101%2025.7208%2013.7668%2026.48%2013.23C26.9016%2014.8279%2026.9515%2016.5011%2026.626%2018.1213C26.3005%2019.7415%2025.6081%2021.2657%2024.6021%2022.5768C23.5961%2023.8878%2022.3032%2024.9511%2020.8224%2025.6849C19.3417%2026.4187%2017.7126%2026.8036%2016.06%2026.81V26.86Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3C%2Fsvg%3E"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                            className: cx((LogoSection_module_default()), "logo-code", "grayscale", "hide-mob"),
                            id: cx((LogoSection_module_default()), "w-node-_36c46b65-bec7-ad86-567a-d0c29448d9e5-9448d9cb"),
                            tag: "div",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                className: cx((LogoSection_module_default()), "logo-code"),
                                value: "%3Csvg%20id%3D%22logo-7%22%20width%3D%22124%22%20height%3D%2232%22%20viewbox%3D%220%200%20124%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cpath%20d%3D%22M36.87%2010.07H39.87V22.2H36.87V10.07ZM41.06%2017.62C41.06%2014.62%2042.9%2012.83%2045.74%2012.83C48.58%2012.83%2050.42%2014.62%2050.42%2017.62C50.42%2020.62%2048.62%2022.42%2045.74%2022.42C42.86%2022.42%2041.06%2020.67%2041.06%2017.62ZM47.41%2017.62C47.41%2015.97%2046.76%2015%2045.74%2015C44.72%2015%2044.08%2016%2044.08%2017.62C44.08%2019.24%2044.71%2020.22%2045.74%2020.22C46.77%2020.22%2047.41%2019.3%2047.41%2017.63V17.62ZM51.55%2022.79H54.43C54.5671%2023.0945%2054.7988%2023.3466%2055.0907%2023.5088C55.3826%2023.6709%2055.7191%2023.7345%2056.05%2023.69C57.19%2023.69%2057.79%2023.07%2057.79%2022.17V20.49H57.73C57.491%2021.0049%2057.1031%2021.4363%2056.6165%2021.7287C56.1299%2022.021%2055.5668%2022.1608%2055%2022.13C52.81%2022.13%2051.36%2020.46%2051.36%2017.59C51.36%2014.72%2052.74%2012.91%2055.04%2012.91C55.6246%2012.8871%2056.2022%2013.0434%2056.6955%2013.3579C57.1888%2013.6725%2057.5742%2014.1303%2057.8%2014.67V14.67V13H60.8V22.1C60.8%2024.29%2058.87%2025.65%2056.02%2025.65C53.37%2025.65%2051.72%2024.46%2051.55%2022.8V22.79ZM57.8%2017.61C57.8%2016.15%2057.13%2015.23%2056.07%2015.23C55.01%2015.23%2054.36%2016.14%2054.36%2017.61C54.36%2019.08%2055%2019.91%2056.07%2019.91C57.14%2019.91%2057.8%2019.1%2057.8%2017.62V17.61ZM61.93%2017.61C61.93%2014.61%2063.77%2012.82%2066.61%2012.82C69.45%2012.82%2071.3%2014.61%2071.3%2017.61C71.3%2020.61%2069.5%2022.41%2066.61%2022.41C63.72%2022.41%2061.93%2020.67%2061.93%2017.62V17.61ZM68.28%2017.61C68.28%2015.96%2067.63%2014.99%2066.61%2014.99C65.59%2014.99%2065%2016%2065%2017.63C65%2019.26%2065.63%2020.23%2066.65%2020.23C67.67%2020.23%2068.28%2019.3%2068.28%2017.63V17.61ZM72.44%2010.82C72.4321%2010.5171%2072.5144%2010.2187%2072.6763%209.96261C72.8383%209.70651%2073.0726%209.50427%2073.3496%209.38151C73.6266%209.25875%2073.9338%209.221%2074.2323%209.27305C74.5308%209.32511%2074.8071%209.46462%2075.0262%209.67389C75.2454%209.88317%2075.3974%2010.1528%2075.4631%2010.4486C75.5288%2010.7444%2075.5052%2011.053%2075.3952%2011.3354C75.2853%2011.6177%2075.094%2011.8611%2074.8456%2012.0346C74.5973%2012.2081%2074.3029%2012.304%2074%2012.31C73.7992%2012.3238%2073.5977%2012.2959%2073.4082%2012.2281C73.2186%2012.1603%2073.0452%2012.0541%2072.8987%2011.916C72.7522%2011.778%2072.6358%2011.6111%2072.5569%2011.4259C72.4779%2011.2408%2072.4381%2011.0413%2072.44%2010.84V10.82ZM72.44%2013.02H75.44V22.2H72.44V13.02ZM86.33%2017.61C86.33%2020.61%2085%2022.32%2082.72%2022.32C82.1354%2022.3575%2081.5533%2022.2146%2081.0525%2021.9106C80.5517%2021.6065%2080.1564%2021.156%2079.92%2020.62H79.86V25.14H76.86V13H79.86V14.64H79.92C80.1454%2014.0951%2080.5332%2013.6329%2081.0306%2013.3162C81.528%2012.9995%2082.1109%2012.8437%2082.7%2012.87C85%2012.91%2086.37%2014.63%2086.37%2017.63L86.33%2017.61ZM83.33%2017.61C83.33%2016.15%2082.66%2015.22%2081.61%2015.22C80.56%2015.22%2079.89%2016.16%2079.88%2017.61C79.87%2019.06%2080.56%2019.99%2081.61%2019.99C82.66%2019.99%2083.33%2019.08%2083.33%2017.63V17.61ZM91.48%2012.81C93.97%2012.81%2095.48%2013.99%2095.55%2015.88H92.82C92.82%2015.23%2092.28%2014.82%2091.45%2014.82C90.62%2014.82%2090.25%2015.14%2090.25%2015.61C90.25%2016.08%2090.58%2016.23%2091.25%2016.37L93.17%2016.76C95%2017.15%2095.78%2017.89%2095.78%2019.28C95.78%2021.18%2094.05%2022.4%2091.5%2022.4C88.95%2022.4%2087.28%2021.18%2087.15%2019.31H90.04C90.13%2019.99%2090.67%2020.39%2091.55%2020.39C92.43%2020.39%2092.83%2020.1%2092.83%2019.62C92.83%2019.14%2092.55%2019.04%2091.83%2018.89L90.1%2018.52C88.31%2018.15%2087.37%2017.2%2087.37%2015.8C87.39%2014%2089%2012.83%2091.48%2012.83V12.81ZM105.79%2022.18H102.9V20.47H102.84C102.681%2021.0441%20102.331%2021.5466%20101.847%2021.8941C101.363%2022.2415%20100.775%2022.413%20100.18%2022.38C99.7242%2022.4059%2099.2682%2022.3337%2098.8427%2022.1682C98.4172%2022.0027%2098.0322%2021.7479%2097.7137%2021.4208C97.3952%2021.0938%2097.1505%2020.7021%2096.9964%2020.2724C96.8422%2019.8427%2096.7821%2019.3849%2096.82%2018.93V13H99.82V18.24C99.82%2019.33%20100.38%2019.91%20101.31%2019.91C101.528%2019.9104%20101.744%2019.8643%20101.943%2019.7746C102.141%2019.6849%20102.319%2019.5537%20102.463%2019.3899C102.606%2019.226%20102.714%2019.0333%20102.777%2018.8247C102.84%2018.616%20102.859%2018.3962%20102.83%2018.18V13H105.83L105.79%2022.18ZM107.24%2013H110.14V14.77H110.2C110.359%2014.2035%20110.702%2013.7057%20111.174%2013.3547C111.646%2013.0037%20112.222%2012.8191%20112.81%2012.83C113.409%2012.7821%20114.003%2012.9612%20114.476%2013.3318C114.948%2013.7024%20115.264%2014.2372%20115.36%2014.83H115.42C115.601%2014.2309%20115.977%2013.7093%20116.488%2013.3472C116.998%2012.9851%20117.615%2012.8031%20118.24%2012.83C118.648%2012.8163%20119.054%2012.8886%20119.432%2013.0422C119.811%2013.1957%20120.152%2013.4272%20120.435%2013.7214C120.718%2014.0157%20120.936%2014.3662%20121.075%2014.7501C121.213%2015.134%20121.27%2015.5429%20121.24%2015.95V22.2H118.24V16.75C118.24%2015.75%20117.79%2015.29%20116.95%2015.29C116.763%2015.2884%20116.577%2015.327%20116.406%2015.4032C116.235%2015.4794%20116.082%2015.5914%20115.958%2015.7317C115.834%2015.872%20115.741%2016.0372%20115.686%2016.2163C115.631%2016.3955%20115.616%2016.5843%20115.64%2016.77V22.2H112.79V16.71C112.79%2015.79%20112.34%2015.29%20111.52%2015.29C111.331%2015.2901%20111.143%2015.3303%20110.971%2015.408C110.798%2015.4858%20110.643%2015.5993%20110.518%2015.741C110.392%2015.8827%20110.298%2016.0495%20110.241%2016.2304C110.185%2016.4112%20110.167%2016.6019%20110.19%2016.79V22.2H107.19L107.24%2013Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3Cpath%20d%3D%22M28.48%2010.62C27.9711%209.45636%2027.2976%208.37193%2026.48%207.4C25.2715%205.92034%2023.7633%204.71339%2022.0547%203.8586C20.3461%203.00382%2018.4758%202.52057%2016.567%202.44066C14.6582%202.36075%2012.7541%202.68599%2010.98%203.39499C9.20597%204.10398%207.60217%205.18065%206.2742%206.55413C4.94622%207.9276%203.92417%209.56675%203.27532%2011.3637C2.62647%2013.1606%202.36552%2015.0746%202.50966%2016.9796C2.65381%2018.8847%203.19976%2020.7376%204.1116%2022.4164C5.02344%2024.0953%206.28049%2025.562%207.80001%2026.72C8.77501%2027.4779%209.85236%2028.094%2011%2028.55C12.609%2029.2094%2014.3311%2029.549%2016.07%2029.55C19.6594%2029.5421%2023.0992%2028.1113%2025.6355%2025.5713C28.1717%2023.0313%2029.5974%2019.5894%2029.6%2016C29.6026%2014.1485%2029.2213%2012.3166%2028.48%2010.62V10.62ZM16.06%205.18999C17.6216%205.18983%2019.1643%205.53113%2020.58%206.18999V6.18999C20.2348%206.33916%2019.8718%206.44335%2019.5%206.5C18.2766%206.67709%2017.1433%207.24507%2016.2692%208.11917C15.3951%208.99326%2014.8271%2010.1266%2014.65%2011.35C14.5723%2012.0361%2014.2602%2012.6744%2013.7665%2013.1572C13.2728%2013.64%2012.6277%2013.9376%2011.94%2014C10.7166%2014.1771%209.58327%2014.7451%208.70918%2015.6192C7.83509%2016.4933%207.2671%2017.6266%207.09001%2018.85C7.03005%2019.5024%206.7517%2020.1155%206.30001%2020.59V20.59C5.52066%2018.9433%205.17056%2017.1261%205.28228%2015.3077C5.394%2013.4893%205.96391%2011.7287%206.93898%2010.1897C7.91404%208.65079%209.26258%207.38351%2010.8591%206.50584C12.4556%205.62817%2014.2482%205.16864%2016.07%205.16999L16.06%205.18999ZM7.79001%2023C7.91001%2022.89%208.03001%2022.79%208.15001%2022.67C9.03966%2021.8075%209.61072%2020.6689%209.77001%2019.44C9.83459%2018.7492%2010.143%2018.104%2010.64%2017.62C11.1183%2017.1222%2011.762%2016.8163%2012.45%2016.76C13.6734%2016.5829%2014.8067%2016.0149%2015.6808%2015.1408C16.5549%2014.2667%2017.1229%2013.1334%2017.3%2011.91C17.3433%2011.1875%2017.6533%2010.5068%2018.17%2010C18.6601%209.51185%2019.3099%209.2171%2020%209.16999C21.1239%209.01536%2022.1721%208.51571%2023%207.74C23.9427%208.52207%2024.7413%209.46289%2025.36%2010.52C25.322%2010.5713%2025.2784%2010.6183%2025.23%2010.66C24.7527%2011.1622%2024.1098%2011.4748%2023.42%2011.54C22.1953%2011.714%2021.0603%2012.281%2020.1856%2013.1556C19.311%2014.0303%2018.744%2015.1653%2018.57%2016.39C18.4995%2017.0784%2018.1932%2017.7213%2017.703%2018.2097C17.2127%2018.6982%2016.5687%2019.0021%2015.88%2019.07C14.653%2019.2457%2013.5155%2019.8126%2012.6363%2020.6863C11.7572%2021.5601%2011.1833%2022.6941%2011%2023.92C10.9462%2024.4087%2010.7783%2024.878%2010.51%2025.29C9.484%2024.6808%208.5651%2023.9072%207.79001%2023V23ZM16.06%2026.86C15.0453%2026.8611%2014.0354%2026.7197%2013.06%2026.44C13.3937%2025.818%2013.6106%2025.1401%2013.7%2024.44C13.7701%2023.7531%2014.075%2023.1114%2014.5632%2022.6232C15.0514%2022.135%2015.6931%2021.8301%2016.38%2021.76C17.6052%2021.5849%2018.7408%2021.0178%2019.6169%2020.1435C20.4929%2019.2693%2021.0624%2018.1348%2021.24%2016.91C21.3101%2016.2231%2021.615%2015.5814%2022.1032%2015.0932C22.5914%2014.605%2023.2331%2014.3001%2023.92%2014.23C24.842%2014.1101%2025.7208%2013.7668%2026.48%2013.23C26.9016%2014.8279%2026.9515%2016.5011%2026.626%2018.1213C26.3005%2019.7415%2025.6081%2021.2657%2024.6021%2022.5768C23.5961%2023.8878%2022.3032%2024.9511%2020.8224%2025.6849C19.3417%2026.4187%2017.7126%2026.8036%2016.06%2026.81V26.86Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3C%2Fsvg%3E"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                            className: cx((LogoSection_module_default()), "logo-code", "grayscale", "hide-mob"),
                            id: cx((LogoSection_module_default()), "w-node-_36c46b65-bec7-ad86-567a-d0c29448d9e7-9448d9cb"),
                            tag: "div",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                className: cx((LogoSection_module_default()), "logo-code"),
                                value: "%3Csvg%20id%3D%22logo-7%22%20width%3D%22124%22%20height%3D%2232%22%20viewbox%3D%220%200%20124%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cpath%20d%3D%22M36.87%2010.07H39.87V22.2H36.87V10.07ZM41.06%2017.62C41.06%2014.62%2042.9%2012.83%2045.74%2012.83C48.58%2012.83%2050.42%2014.62%2050.42%2017.62C50.42%2020.62%2048.62%2022.42%2045.74%2022.42C42.86%2022.42%2041.06%2020.67%2041.06%2017.62ZM47.41%2017.62C47.41%2015.97%2046.76%2015%2045.74%2015C44.72%2015%2044.08%2016%2044.08%2017.62C44.08%2019.24%2044.71%2020.22%2045.74%2020.22C46.77%2020.22%2047.41%2019.3%2047.41%2017.63V17.62ZM51.55%2022.79H54.43C54.5671%2023.0945%2054.7988%2023.3466%2055.0907%2023.5088C55.3826%2023.6709%2055.7191%2023.7345%2056.05%2023.69C57.19%2023.69%2057.79%2023.07%2057.79%2022.17V20.49H57.73C57.491%2021.0049%2057.1031%2021.4363%2056.6165%2021.7287C56.1299%2022.021%2055.5668%2022.1608%2055%2022.13C52.81%2022.13%2051.36%2020.46%2051.36%2017.59C51.36%2014.72%2052.74%2012.91%2055.04%2012.91C55.6246%2012.8871%2056.2022%2013.0434%2056.6955%2013.3579C57.1888%2013.6725%2057.5742%2014.1303%2057.8%2014.67V14.67V13H60.8V22.1C60.8%2024.29%2058.87%2025.65%2056.02%2025.65C53.37%2025.65%2051.72%2024.46%2051.55%2022.8V22.79ZM57.8%2017.61C57.8%2016.15%2057.13%2015.23%2056.07%2015.23C55.01%2015.23%2054.36%2016.14%2054.36%2017.61C54.36%2019.08%2055%2019.91%2056.07%2019.91C57.14%2019.91%2057.8%2019.1%2057.8%2017.62V17.61ZM61.93%2017.61C61.93%2014.61%2063.77%2012.82%2066.61%2012.82C69.45%2012.82%2071.3%2014.61%2071.3%2017.61C71.3%2020.61%2069.5%2022.41%2066.61%2022.41C63.72%2022.41%2061.93%2020.67%2061.93%2017.62V17.61ZM68.28%2017.61C68.28%2015.96%2067.63%2014.99%2066.61%2014.99C65.59%2014.99%2065%2016%2065%2017.63C65%2019.26%2065.63%2020.23%2066.65%2020.23C67.67%2020.23%2068.28%2019.3%2068.28%2017.63V17.61ZM72.44%2010.82C72.4321%2010.5171%2072.5144%2010.2187%2072.6763%209.96261C72.8383%209.70651%2073.0726%209.50427%2073.3496%209.38151C73.6266%209.25875%2073.9338%209.221%2074.2323%209.27305C74.5308%209.32511%2074.8071%209.46462%2075.0262%209.67389C75.2454%209.88317%2075.3974%2010.1528%2075.4631%2010.4486C75.5288%2010.7444%2075.5052%2011.053%2075.3952%2011.3354C75.2853%2011.6177%2075.094%2011.8611%2074.8456%2012.0346C74.5973%2012.2081%2074.3029%2012.304%2074%2012.31C73.7992%2012.3238%2073.5977%2012.2959%2073.4082%2012.2281C73.2186%2012.1603%2073.0452%2012.0541%2072.8987%2011.916C72.7522%2011.778%2072.6358%2011.6111%2072.5569%2011.4259C72.4779%2011.2408%2072.4381%2011.0413%2072.44%2010.84V10.82ZM72.44%2013.02H75.44V22.2H72.44V13.02ZM86.33%2017.61C86.33%2020.61%2085%2022.32%2082.72%2022.32C82.1354%2022.3575%2081.5533%2022.2146%2081.0525%2021.9106C80.5517%2021.6065%2080.1564%2021.156%2079.92%2020.62H79.86V25.14H76.86V13H79.86V14.64H79.92C80.1454%2014.0951%2080.5332%2013.6329%2081.0306%2013.3162C81.528%2012.9995%2082.1109%2012.8437%2082.7%2012.87C85%2012.91%2086.37%2014.63%2086.37%2017.63L86.33%2017.61ZM83.33%2017.61C83.33%2016.15%2082.66%2015.22%2081.61%2015.22C80.56%2015.22%2079.89%2016.16%2079.88%2017.61C79.87%2019.06%2080.56%2019.99%2081.61%2019.99C82.66%2019.99%2083.33%2019.08%2083.33%2017.63V17.61ZM91.48%2012.81C93.97%2012.81%2095.48%2013.99%2095.55%2015.88H92.82C92.82%2015.23%2092.28%2014.82%2091.45%2014.82C90.62%2014.82%2090.25%2015.14%2090.25%2015.61C90.25%2016.08%2090.58%2016.23%2091.25%2016.37L93.17%2016.76C95%2017.15%2095.78%2017.89%2095.78%2019.28C95.78%2021.18%2094.05%2022.4%2091.5%2022.4C88.95%2022.4%2087.28%2021.18%2087.15%2019.31H90.04C90.13%2019.99%2090.67%2020.39%2091.55%2020.39C92.43%2020.39%2092.83%2020.1%2092.83%2019.62C92.83%2019.14%2092.55%2019.04%2091.83%2018.89L90.1%2018.52C88.31%2018.15%2087.37%2017.2%2087.37%2015.8C87.39%2014%2089%2012.83%2091.48%2012.83V12.81ZM105.79%2022.18H102.9V20.47H102.84C102.681%2021.0441%20102.331%2021.5466%20101.847%2021.8941C101.363%2022.2415%20100.775%2022.413%20100.18%2022.38C99.7242%2022.4059%2099.2682%2022.3337%2098.8427%2022.1682C98.4172%2022.0027%2098.0322%2021.7479%2097.7137%2021.4208C97.3952%2021.0938%2097.1505%2020.7021%2096.9964%2020.2724C96.8422%2019.8427%2096.7821%2019.3849%2096.82%2018.93V13H99.82V18.24C99.82%2019.33%20100.38%2019.91%20101.31%2019.91C101.528%2019.9104%20101.744%2019.8643%20101.943%2019.7746C102.141%2019.6849%20102.319%2019.5537%20102.463%2019.3899C102.606%2019.226%20102.714%2019.0333%20102.777%2018.8247C102.84%2018.616%20102.859%2018.3962%20102.83%2018.18V13H105.83L105.79%2022.18ZM107.24%2013H110.14V14.77H110.2C110.359%2014.2035%20110.702%2013.7057%20111.174%2013.3547C111.646%2013.0037%20112.222%2012.8191%20112.81%2012.83C113.409%2012.7821%20114.003%2012.9612%20114.476%2013.3318C114.948%2013.7024%20115.264%2014.2372%20115.36%2014.83H115.42C115.601%2014.2309%20115.977%2013.7093%20116.488%2013.3472C116.998%2012.9851%20117.615%2012.8031%20118.24%2012.83C118.648%2012.8163%20119.054%2012.8886%20119.432%2013.0422C119.811%2013.1957%20120.152%2013.4272%20120.435%2013.7214C120.718%2014.0157%20120.936%2014.3662%20121.075%2014.7501C121.213%2015.134%20121.27%2015.5429%20121.24%2015.95V22.2H118.24V16.75C118.24%2015.75%20117.79%2015.29%20116.95%2015.29C116.763%2015.2884%20116.577%2015.327%20116.406%2015.4032C116.235%2015.4794%20116.082%2015.5914%20115.958%2015.7317C115.834%2015.872%20115.741%2016.0372%20115.686%2016.2163C115.631%2016.3955%20115.616%2016.5843%20115.64%2016.77V22.2H112.79V16.71C112.79%2015.79%20112.34%2015.29%20111.52%2015.29C111.331%2015.2901%20111.143%2015.3303%20110.971%2015.408C110.798%2015.4858%20110.643%2015.5993%20110.518%2015.741C110.392%2015.8827%20110.298%2016.0495%20110.241%2016.2304C110.185%2016.4112%20110.167%2016.6019%20110.19%2016.79V22.2H107.19L107.24%2013Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3Cpath%20d%3D%22M28.48%2010.62C27.9711%209.45636%2027.2976%208.37193%2026.48%207.4C25.2715%205.92034%2023.7633%204.71339%2022.0547%203.8586C20.3461%203.00382%2018.4758%202.52057%2016.567%202.44066C14.6582%202.36075%2012.7541%202.68599%2010.98%203.39499C9.20597%204.10398%207.60217%205.18065%206.2742%206.55413C4.94622%207.9276%203.92417%209.56675%203.27532%2011.3637C2.62647%2013.1606%202.36552%2015.0746%202.50966%2016.9796C2.65381%2018.8847%203.19976%2020.7376%204.1116%2022.4164C5.02344%2024.0953%206.28049%2025.562%207.80001%2026.72C8.77501%2027.4779%209.85236%2028.094%2011%2028.55C12.609%2029.2094%2014.3311%2029.549%2016.07%2029.55C19.6594%2029.5421%2023.0992%2028.1113%2025.6355%2025.5713C28.1717%2023.0313%2029.5974%2019.5894%2029.6%2016C29.6026%2014.1485%2029.2213%2012.3166%2028.48%2010.62V10.62ZM16.06%205.18999C17.6216%205.18983%2019.1643%205.53113%2020.58%206.18999V6.18999C20.2348%206.33916%2019.8718%206.44335%2019.5%206.5C18.2766%206.67709%2017.1433%207.24507%2016.2692%208.11917C15.3951%208.99326%2014.8271%2010.1266%2014.65%2011.35C14.5723%2012.0361%2014.2602%2012.6744%2013.7665%2013.1572C13.2728%2013.64%2012.6277%2013.9376%2011.94%2014C10.7166%2014.1771%209.58327%2014.7451%208.70918%2015.6192C7.83509%2016.4933%207.2671%2017.6266%207.09001%2018.85C7.03005%2019.5024%206.7517%2020.1155%206.30001%2020.59V20.59C5.52066%2018.9433%205.17056%2017.1261%205.28228%2015.3077C5.394%2013.4893%205.96391%2011.7287%206.93898%2010.1897C7.91404%208.65079%209.26258%207.38351%2010.8591%206.50584C12.4556%205.62817%2014.2482%205.16864%2016.07%205.16999L16.06%205.18999ZM7.79001%2023C7.91001%2022.89%208.03001%2022.79%208.15001%2022.67C9.03966%2021.8075%209.61072%2020.6689%209.77001%2019.44C9.83459%2018.7492%2010.143%2018.104%2010.64%2017.62C11.1183%2017.1222%2011.762%2016.8163%2012.45%2016.76C13.6734%2016.5829%2014.8067%2016.0149%2015.6808%2015.1408C16.5549%2014.2667%2017.1229%2013.1334%2017.3%2011.91C17.3433%2011.1875%2017.6533%2010.5068%2018.17%2010C18.6601%209.51185%2019.3099%209.2171%2020%209.16999C21.1239%209.01536%2022.1721%208.51571%2023%207.74C23.9427%208.52207%2024.7413%209.46289%2025.36%2010.52C25.322%2010.5713%2025.2784%2010.6183%2025.23%2010.66C24.7527%2011.1622%2024.1098%2011.4748%2023.42%2011.54C22.1953%2011.714%2021.0603%2012.281%2020.1856%2013.1556C19.311%2014.0303%2018.744%2015.1653%2018.57%2016.39C18.4995%2017.0784%2018.1932%2017.7213%2017.703%2018.2097C17.2127%2018.6982%2016.5687%2019.0021%2015.88%2019.07C14.653%2019.2457%2013.5155%2019.8126%2012.6363%2020.6863C11.7572%2021.5601%2011.1833%2022.6941%2011%2023.92C10.9462%2024.4087%2010.7783%2024.878%2010.51%2025.29C9.484%2024.6808%208.5651%2023.9072%207.79001%2023V23ZM16.06%2026.86C15.0453%2026.8611%2014.0354%2026.7197%2013.06%2026.44C13.3937%2025.818%2013.6106%2025.1401%2013.7%2024.44C13.7701%2023.7531%2014.075%2023.1114%2014.5632%2022.6232C15.0514%2022.135%2015.6931%2021.8301%2016.38%2021.76C17.6052%2021.5849%2018.7408%2021.0178%2019.6169%2020.1435C20.4929%2019.2693%2021.0624%2018.1348%2021.24%2016.91C21.3101%2016.2231%2021.615%2015.5814%2022.1032%2015.0932C22.5914%2014.605%2023.2331%2014.3001%2023.92%2014.23C24.842%2014.1101%2025.7208%2013.7668%2026.48%2013.23C26.9016%2014.8279%2026.9515%2016.5011%2026.626%2018.1213C26.3005%2019.7415%2025.6081%2021.2657%2024.6021%2022.5768C23.5961%2023.8878%2022.3032%2024.9511%2020.8224%2025.6849C19.3417%2026.4187%2017.7126%2026.8036%2016.06%2026.81V26.86Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3C%2Fsvg%3E"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                            className: cx((LogoSection_module_default()), "logo-code", "grayscale", "hide-mob"),
                            id: cx((LogoSection_module_default()), "w-node-_36c46b65-bec7-ad86-567a-d0c29448d9e9-9448d9cb"),
                            tag: "div",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                className: cx((LogoSection_module_default()), "logo-code"),
                                value: "%3Csvg%20id%3D%22logo-7%22%20width%3D%22124%22%20height%3D%2232%22%20viewbox%3D%220%200%20124%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cpath%20d%3D%22M36.87%2010.07H39.87V22.2H36.87V10.07ZM41.06%2017.62C41.06%2014.62%2042.9%2012.83%2045.74%2012.83C48.58%2012.83%2050.42%2014.62%2050.42%2017.62C50.42%2020.62%2048.62%2022.42%2045.74%2022.42C42.86%2022.42%2041.06%2020.67%2041.06%2017.62ZM47.41%2017.62C47.41%2015.97%2046.76%2015%2045.74%2015C44.72%2015%2044.08%2016%2044.08%2017.62C44.08%2019.24%2044.71%2020.22%2045.74%2020.22C46.77%2020.22%2047.41%2019.3%2047.41%2017.63V17.62ZM51.55%2022.79H54.43C54.5671%2023.0945%2054.7988%2023.3466%2055.0907%2023.5088C55.3826%2023.6709%2055.7191%2023.7345%2056.05%2023.69C57.19%2023.69%2057.79%2023.07%2057.79%2022.17V20.49H57.73C57.491%2021.0049%2057.1031%2021.4363%2056.6165%2021.7287C56.1299%2022.021%2055.5668%2022.1608%2055%2022.13C52.81%2022.13%2051.36%2020.46%2051.36%2017.59C51.36%2014.72%2052.74%2012.91%2055.04%2012.91C55.6246%2012.8871%2056.2022%2013.0434%2056.6955%2013.3579C57.1888%2013.6725%2057.5742%2014.1303%2057.8%2014.67V14.67V13H60.8V22.1C60.8%2024.29%2058.87%2025.65%2056.02%2025.65C53.37%2025.65%2051.72%2024.46%2051.55%2022.8V22.79ZM57.8%2017.61C57.8%2016.15%2057.13%2015.23%2056.07%2015.23C55.01%2015.23%2054.36%2016.14%2054.36%2017.61C54.36%2019.08%2055%2019.91%2056.07%2019.91C57.14%2019.91%2057.8%2019.1%2057.8%2017.62V17.61ZM61.93%2017.61C61.93%2014.61%2063.77%2012.82%2066.61%2012.82C69.45%2012.82%2071.3%2014.61%2071.3%2017.61C71.3%2020.61%2069.5%2022.41%2066.61%2022.41C63.72%2022.41%2061.93%2020.67%2061.93%2017.62V17.61ZM68.28%2017.61C68.28%2015.96%2067.63%2014.99%2066.61%2014.99C65.59%2014.99%2065%2016%2065%2017.63C65%2019.26%2065.63%2020.23%2066.65%2020.23C67.67%2020.23%2068.28%2019.3%2068.28%2017.63V17.61ZM72.44%2010.82C72.4321%2010.5171%2072.5144%2010.2187%2072.6763%209.96261C72.8383%209.70651%2073.0726%209.50427%2073.3496%209.38151C73.6266%209.25875%2073.9338%209.221%2074.2323%209.27305C74.5308%209.32511%2074.8071%209.46462%2075.0262%209.67389C75.2454%209.88317%2075.3974%2010.1528%2075.4631%2010.4486C75.5288%2010.7444%2075.5052%2011.053%2075.3952%2011.3354C75.2853%2011.6177%2075.094%2011.8611%2074.8456%2012.0346C74.5973%2012.2081%2074.3029%2012.304%2074%2012.31C73.7992%2012.3238%2073.5977%2012.2959%2073.4082%2012.2281C73.2186%2012.1603%2073.0452%2012.0541%2072.8987%2011.916C72.7522%2011.778%2072.6358%2011.6111%2072.5569%2011.4259C72.4779%2011.2408%2072.4381%2011.0413%2072.44%2010.84V10.82ZM72.44%2013.02H75.44V22.2H72.44V13.02ZM86.33%2017.61C86.33%2020.61%2085%2022.32%2082.72%2022.32C82.1354%2022.3575%2081.5533%2022.2146%2081.0525%2021.9106C80.5517%2021.6065%2080.1564%2021.156%2079.92%2020.62H79.86V25.14H76.86V13H79.86V14.64H79.92C80.1454%2014.0951%2080.5332%2013.6329%2081.0306%2013.3162C81.528%2012.9995%2082.1109%2012.8437%2082.7%2012.87C85%2012.91%2086.37%2014.63%2086.37%2017.63L86.33%2017.61ZM83.33%2017.61C83.33%2016.15%2082.66%2015.22%2081.61%2015.22C80.56%2015.22%2079.89%2016.16%2079.88%2017.61C79.87%2019.06%2080.56%2019.99%2081.61%2019.99C82.66%2019.99%2083.33%2019.08%2083.33%2017.63V17.61ZM91.48%2012.81C93.97%2012.81%2095.48%2013.99%2095.55%2015.88H92.82C92.82%2015.23%2092.28%2014.82%2091.45%2014.82C90.62%2014.82%2090.25%2015.14%2090.25%2015.61C90.25%2016.08%2090.58%2016.23%2091.25%2016.37L93.17%2016.76C95%2017.15%2095.78%2017.89%2095.78%2019.28C95.78%2021.18%2094.05%2022.4%2091.5%2022.4C88.95%2022.4%2087.28%2021.18%2087.15%2019.31H90.04C90.13%2019.99%2090.67%2020.39%2091.55%2020.39C92.43%2020.39%2092.83%2020.1%2092.83%2019.62C92.83%2019.14%2092.55%2019.04%2091.83%2018.89L90.1%2018.52C88.31%2018.15%2087.37%2017.2%2087.37%2015.8C87.39%2014%2089%2012.83%2091.48%2012.83V12.81ZM105.79%2022.18H102.9V20.47H102.84C102.681%2021.0441%20102.331%2021.5466%20101.847%2021.8941C101.363%2022.2415%20100.775%2022.413%20100.18%2022.38C99.7242%2022.4059%2099.2682%2022.3337%2098.8427%2022.1682C98.4172%2022.0027%2098.0322%2021.7479%2097.7137%2021.4208C97.3952%2021.0938%2097.1505%2020.7021%2096.9964%2020.2724C96.8422%2019.8427%2096.7821%2019.3849%2096.82%2018.93V13H99.82V18.24C99.82%2019.33%20100.38%2019.91%20101.31%2019.91C101.528%2019.9104%20101.744%2019.8643%20101.943%2019.7746C102.141%2019.6849%20102.319%2019.5537%20102.463%2019.3899C102.606%2019.226%20102.714%2019.0333%20102.777%2018.8247C102.84%2018.616%20102.859%2018.3962%20102.83%2018.18V13H105.83L105.79%2022.18ZM107.24%2013H110.14V14.77H110.2C110.359%2014.2035%20110.702%2013.7057%20111.174%2013.3547C111.646%2013.0037%20112.222%2012.8191%20112.81%2012.83C113.409%2012.7821%20114.003%2012.9612%20114.476%2013.3318C114.948%2013.7024%20115.264%2014.2372%20115.36%2014.83H115.42C115.601%2014.2309%20115.977%2013.7093%20116.488%2013.3472C116.998%2012.9851%20117.615%2012.8031%20118.24%2012.83C118.648%2012.8163%20119.054%2012.8886%20119.432%2013.0422C119.811%2013.1957%20120.152%2013.4272%20120.435%2013.7214C120.718%2014.0157%20120.936%2014.3662%20121.075%2014.7501C121.213%2015.134%20121.27%2015.5429%20121.24%2015.95V22.2H118.24V16.75C118.24%2015.75%20117.79%2015.29%20116.95%2015.29C116.763%2015.2884%20116.577%2015.327%20116.406%2015.4032C116.235%2015.4794%20116.082%2015.5914%20115.958%2015.7317C115.834%2015.872%20115.741%2016.0372%20115.686%2016.2163C115.631%2016.3955%20115.616%2016.5843%20115.64%2016.77V22.2H112.79V16.71C112.79%2015.79%20112.34%2015.29%20111.52%2015.29C111.331%2015.2901%20111.143%2015.3303%20110.971%2015.408C110.798%2015.4858%20110.643%2015.5993%20110.518%2015.741C110.392%2015.8827%20110.298%2016.0495%20110.241%2016.2304C110.185%2016.4112%20110.167%2016.6019%20110.19%2016.79V22.2H107.19L107.24%2013Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3Cpath%20d%3D%22M28.48%2010.62C27.9711%209.45636%2027.2976%208.37193%2026.48%207.4C25.2715%205.92034%2023.7633%204.71339%2022.0547%203.8586C20.3461%203.00382%2018.4758%202.52057%2016.567%202.44066C14.6582%202.36075%2012.7541%202.68599%2010.98%203.39499C9.20597%204.10398%207.60217%205.18065%206.2742%206.55413C4.94622%207.9276%203.92417%209.56675%203.27532%2011.3637C2.62647%2013.1606%202.36552%2015.0746%202.50966%2016.9796C2.65381%2018.8847%203.19976%2020.7376%204.1116%2022.4164C5.02344%2024.0953%206.28049%2025.562%207.80001%2026.72C8.77501%2027.4779%209.85236%2028.094%2011%2028.55C12.609%2029.2094%2014.3311%2029.549%2016.07%2029.55C19.6594%2029.5421%2023.0992%2028.1113%2025.6355%2025.5713C28.1717%2023.0313%2029.5974%2019.5894%2029.6%2016C29.6026%2014.1485%2029.2213%2012.3166%2028.48%2010.62V10.62ZM16.06%205.18999C17.6216%205.18983%2019.1643%205.53113%2020.58%206.18999V6.18999C20.2348%206.33916%2019.8718%206.44335%2019.5%206.5C18.2766%206.67709%2017.1433%207.24507%2016.2692%208.11917C15.3951%208.99326%2014.8271%2010.1266%2014.65%2011.35C14.5723%2012.0361%2014.2602%2012.6744%2013.7665%2013.1572C13.2728%2013.64%2012.6277%2013.9376%2011.94%2014C10.7166%2014.1771%209.58327%2014.7451%208.70918%2015.6192C7.83509%2016.4933%207.2671%2017.6266%207.09001%2018.85C7.03005%2019.5024%206.7517%2020.1155%206.30001%2020.59V20.59C5.52066%2018.9433%205.17056%2017.1261%205.28228%2015.3077C5.394%2013.4893%205.96391%2011.7287%206.93898%2010.1897C7.91404%208.65079%209.26258%207.38351%2010.8591%206.50584C12.4556%205.62817%2014.2482%205.16864%2016.07%205.16999L16.06%205.18999ZM7.79001%2023C7.91001%2022.89%208.03001%2022.79%208.15001%2022.67C9.03966%2021.8075%209.61072%2020.6689%209.77001%2019.44C9.83459%2018.7492%2010.143%2018.104%2010.64%2017.62C11.1183%2017.1222%2011.762%2016.8163%2012.45%2016.76C13.6734%2016.5829%2014.8067%2016.0149%2015.6808%2015.1408C16.5549%2014.2667%2017.1229%2013.1334%2017.3%2011.91C17.3433%2011.1875%2017.6533%2010.5068%2018.17%2010C18.6601%209.51185%2019.3099%209.2171%2020%209.16999C21.1239%209.01536%2022.1721%208.51571%2023%207.74C23.9427%208.52207%2024.7413%209.46289%2025.36%2010.52C25.322%2010.5713%2025.2784%2010.6183%2025.23%2010.66C24.7527%2011.1622%2024.1098%2011.4748%2023.42%2011.54C22.1953%2011.714%2021.0603%2012.281%2020.1856%2013.1556C19.311%2014.0303%2018.744%2015.1653%2018.57%2016.39C18.4995%2017.0784%2018.1932%2017.7213%2017.703%2018.2097C17.2127%2018.6982%2016.5687%2019.0021%2015.88%2019.07C14.653%2019.2457%2013.5155%2019.8126%2012.6363%2020.6863C11.7572%2021.5601%2011.1833%2022.6941%2011%2023.92C10.9462%2024.4087%2010.7783%2024.878%2010.51%2025.29C9.484%2024.6808%208.5651%2023.9072%207.79001%2023V23ZM16.06%2026.86C15.0453%2026.8611%2014.0354%2026.7197%2013.06%2026.44C13.3937%2025.818%2013.6106%2025.1401%2013.7%2024.44C13.7701%2023.7531%2014.075%2023.1114%2014.5632%2022.6232C15.0514%2022.135%2015.6931%2021.8301%2016.38%2021.76C17.6052%2021.5849%2018.7408%2021.0178%2019.6169%2020.1435C20.4929%2019.2693%2021.0624%2018.1348%2021.24%2016.91C21.3101%2016.2231%2021.615%2015.5814%2022.1032%2015.0932C22.5914%2014.605%2023.2331%2014.3001%2023.92%2014.23C24.842%2014.1101%2025.7208%2013.7668%2026.48%2013.23C26.9016%2014.8279%2026.9515%2016.5011%2026.626%2018.1213C26.3005%2019.7415%2025.6081%2021.2657%2024.6021%2022.5768C23.5961%2023.8878%2022.3032%2024.9511%2020.8224%2025.6849C19.3417%2026.4187%2017.7126%2026.8036%2016.06%2026.81V26.86Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3C%2Fsvg%3E"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                            className: cx((LogoSection_module_default()), "logo-code", "grayscale", "hide-mob"),
                            id: cx((LogoSection_module_default()), "w-node-_36c46b65-bec7-ad86-567a-d0c29448d9eb-9448d9cb"),
                            tag: "div",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                className: cx((LogoSection_module_default()), "logo-code"),
                                value: "%3Csvg%20id%3D%22logo-7%22%20width%3D%22124%22%20height%3D%2232%22%20viewbox%3D%220%200%20124%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cpath%20d%3D%22M36.87%2010.07H39.87V22.2H36.87V10.07ZM41.06%2017.62C41.06%2014.62%2042.9%2012.83%2045.74%2012.83C48.58%2012.83%2050.42%2014.62%2050.42%2017.62C50.42%2020.62%2048.62%2022.42%2045.74%2022.42C42.86%2022.42%2041.06%2020.67%2041.06%2017.62ZM47.41%2017.62C47.41%2015.97%2046.76%2015%2045.74%2015C44.72%2015%2044.08%2016%2044.08%2017.62C44.08%2019.24%2044.71%2020.22%2045.74%2020.22C46.77%2020.22%2047.41%2019.3%2047.41%2017.63V17.62ZM51.55%2022.79H54.43C54.5671%2023.0945%2054.7988%2023.3466%2055.0907%2023.5088C55.3826%2023.6709%2055.7191%2023.7345%2056.05%2023.69C57.19%2023.69%2057.79%2023.07%2057.79%2022.17V20.49H57.73C57.491%2021.0049%2057.1031%2021.4363%2056.6165%2021.7287C56.1299%2022.021%2055.5668%2022.1608%2055%2022.13C52.81%2022.13%2051.36%2020.46%2051.36%2017.59C51.36%2014.72%2052.74%2012.91%2055.04%2012.91C55.6246%2012.8871%2056.2022%2013.0434%2056.6955%2013.3579C57.1888%2013.6725%2057.5742%2014.1303%2057.8%2014.67V14.67V13H60.8V22.1C60.8%2024.29%2058.87%2025.65%2056.02%2025.65C53.37%2025.65%2051.72%2024.46%2051.55%2022.8V22.79ZM57.8%2017.61C57.8%2016.15%2057.13%2015.23%2056.07%2015.23C55.01%2015.23%2054.36%2016.14%2054.36%2017.61C54.36%2019.08%2055%2019.91%2056.07%2019.91C57.14%2019.91%2057.8%2019.1%2057.8%2017.62V17.61ZM61.93%2017.61C61.93%2014.61%2063.77%2012.82%2066.61%2012.82C69.45%2012.82%2071.3%2014.61%2071.3%2017.61C71.3%2020.61%2069.5%2022.41%2066.61%2022.41C63.72%2022.41%2061.93%2020.67%2061.93%2017.62V17.61ZM68.28%2017.61C68.28%2015.96%2067.63%2014.99%2066.61%2014.99C65.59%2014.99%2065%2016%2065%2017.63C65%2019.26%2065.63%2020.23%2066.65%2020.23C67.67%2020.23%2068.28%2019.3%2068.28%2017.63V17.61ZM72.44%2010.82C72.4321%2010.5171%2072.5144%2010.2187%2072.6763%209.96261C72.8383%209.70651%2073.0726%209.50427%2073.3496%209.38151C73.6266%209.25875%2073.9338%209.221%2074.2323%209.27305C74.5308%209.32511%2074.8071%209.46462%2075.0262%209.67389C75.2454%209.88317%2075.3974%2010.1528%2075.4631%2010.4486C75.5288%2010.7444%2075.5052%2011.053%2075.3952%2011.3354C75.2853%2011.6177%2075.094%2011.8611%2074.8456%2012.0346C74.5973%2012.2081%2074.3029%2012.304%2074%2012.31C73.7992%2012.3238%2073.5977%2012.2959%2073.4082%2012.2281C73.2186%2012.1603%2073.0452%2012.0541%2072.8987%2011.916C72.7522%2011.778%2072.6358%2011.6111%2072.5569%2011.4259C72.4779%2011.2408%2072.4381%2011.0413%2072.44%2010.84V10.82ZM72.44%2013.02H75.44V22.2H72.44V13.02ZM86.33%2017.61C86.33%2020.61%2085%2022.32%2082.72%2022.32C82.1354%2022.3575%2081.5533%2022.2146%2081.0525%2021.9106C80.5517%2021.6065%2080.1564%2021.156%2079.92%2020.62H79.86V25.14H76.86V13H79.86V14.64H79.92C80.1454%2014.0951%2080.5332%2013.6329%2081.0306%2013.3162C81.528%2012.9995%2082.1109%2012.8437%2082.7%2012.87C85%2012.91%2086.37%2014.63%2086.37%2017.63L86.33%2017.61ZM83.33%2017.61C83.33%2016.15%2082.66%2015.22%2081.61%2015.22C80.56%2015.22%2079.89%2016.16%2079.88%2017.61C79.87%2019.06%2080.56%2019.99%2081.61%2019.99C82.66%2019.99%2083.33%2019.08%2083.33%2017.63V17.61ZM91.48%2012.81C93.97%2012.81%2095.48%2013.99%2095.55%2015.88H92.82C92.82%2015.23%2092.28%2014.82%2091.45%2014.82C90.62%2014.82%2090.25%2015.14%2090.25%2015.61C90.25%2016.08%2090.58%2016.23%2091.25%2016.37L93.17%2016.76C95%2017.15%2095.78%2017.89%2095.78%2019.28C95.78%2021.18%2094.05%2022.4%2091.5%2022.4C88.95%2022.4%2087.28%2021.18%2087.15%2019.31H90.04C90.13%2019.99%2090.67%2020.39%2091.55%2020.39C92.43%2020.39%2092.83%2020.1%2092.83%2019.62C92.83%2019.14%2092.55%2019.04%2091.83%2018.89L90.1%2018.52C88.31%2018.15%2087.37%2017.2%2087.37%2015.8C87.39%2014%2089%2012.83%2091.48%2012.83V12.81ZM105.79%2022.18H102.9V20.47H102.84C102.681%2021.0441%20102.331%2021.5466%20101.847%2021.8941C101.363%2022.2415%20100.775%2022.413%20100.18%2022.38C99.7242%2022.4059%2099.2682%2022.3337%2098.8427%2022.1682C98.4172%2022.0027%2098.0322%2021.7479%2097.7137%2021.4208C97.3952%2021.0938%2097.1505%2020.7021%2096.9964%2020.2724C96.8422%2019.8427%2096.7821%2019.3849%2096.82%2018.93V13H99.82V18.24C99.82%2019.33%20100.38%2019.91%20101.31%2019.91C101.528%2019.9104%20101.744%2019.8643%20101.943%2019.7746C102.141%2019.6849%20102.319%2019.5537%20102.463%2019.3899C102.606%2019.226%20102.714%2019.0333%20102.777%2018.8247C102.84%2018.616%20102.859%2018.3962%20102.83%2018.18V13H105.83L105.79%2022.18ZM107.24%2013H110.14V14.77H110.2C110.359%2014.2035%20110.702%2013.7057%20111.174%2013.3547C111.646%2013.0037%20112.222%2012.8191%20112.81%2012.83C113.409%2012.7821%20114.003%2012.9612%20114.476%2013.3318C114.948%2013.7024%20115.264%2014.2372%20115.36%2014.83H115.42C115.601%2014.2309%20115.977%2013.7093%20116.488%2013.3472C116.998%2012.9851%20117.615%2012.8031%20118.24%2012.83C118.648%2012.8163%20119.054%2012.8886%20119.432%2013.0422C119.811%2013.1957%20120.152%2013.4272%20120.435%2013.7214C120.718%2014.0157%20120.936%2014.3662%20121.075%2014.7501C121.213%2015.134%20121.27%2015.5429%20121.24%2015.95V22.2H118.24V16.75C118.24%2015.75%20117.79%2015.29%20116.95%2015.29C116.763%2015.2884%20116.577%2015.327%20116.406%2015.4032C116.235%2015.4794%20116.082%2015.5914%20115.958%2015.7317C115.834%2015.872%20115.741%2016.0372%20115.686%2016.2163C115.631%2016.3955%20115.616%2016.5843%20115.64%2016.77V22.2H112.79V16.71C112.79%2015.79%20112.34%2015.29%20111.52%2015.29C111.331%2015.2901%20111.143%2015.3303%20110.971%2015.408C110.798%2015.4858%20110.643%2015.5993%20110.518%2015.741C110.392%2015.8827%20110.298%2016.0495%20110.241%2016.2304C110.185%2016.4112%20110.167%2016.6019%20110.19%2016.79V22.2H107.19L107.24%2013Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3Cpath%20d%3D%22M28.48%2010.62C27.9711%209.45636%2027.2976%208.37193%2026.48%207.4C25.2715%205.92034%2023.7633%204.71339%2022.0547%203.8586C20.3461%203.00382%2018.4758%202.52057%2016.567%202.44066C14.6582%202.36075%2012.7541%202.68599%2010.98%203.39499C9.20597%204.10398%207.60217%205.18065%206.2742%206.55413C4.94622%207.9276%203.92417%209.56675%203.27532%2011.3637C2.62647%2013.1606%202.36552%2015.0746%202.50966%2016.9796C2.65381%2018.8847%203.19976%2020.7376%204.1116%2022.4164C5.02344%2024.0953%206.28049%2025.562%207.80001%2026.72C8.77501%2027.4779%209.85236%2028.094%2011%2028.55C12.609%2029.2094%2014.3311%2029.549%2016.07%2029.55C19.6594%2029.5421%2023.0992%2028.1113%2025.6355%2025.5713C28.1717%2023.0313%2029.5974%2019.5894%2029.6%2016C29.6026%2014.1485%2029.2213%2012.3166%2028.48%2010.62V10.62ZM16.06%205.18999C17.6216%205.18983%2019.1643%205.53113%2020.58%206.18999V6.18999C20.2348%206.33916%2019.8718%206.44335%2019.5%206.5C18.2766%206.67709%2017.1433%207.24507%2016.2692%208.11917C15.3951%208.99326%2014.8271%2010.1266%2014.65%2011.35C14.5723%2012.0361%2014.2602%2012.6744%2013.7665%2013.1572C13.2728%2013.64%2012.6277%2013.9376%2011.94%2014C10.7166%2014.1771%209.58327%2014.7451%208.70918%2015.6192C7.83509%2016.4933%207.2671%2017.6266%207.09001%2018.85C7.03005%2019.5024%206.7517%2020.1155%206.30001%2020.59V20.59C5.52066%2018.9433%205.17056%2017.1261%205.28228%2015.3077C5.394%2013.4893%205.96391%2011.7287%206.93898%2010.1897C7.91404%208.65079%209.26258%207.38351%2010.8591%206.50584C12.4556%205.62817%2014.2482%205.16864%2016.07%205.16999L16.06%205.18999ZM7.79001%2023C7.91001%2022.89%208.03001%2022.79%208.15001%2022.67C9.03966%2021.8075%209.61072%2020.6689%209.77001%2019.44C9.83459%2018.7492%2010.143%2018.104%2010.64%2017.62C11.1183%2017.1222%2011.762%2016.8163%2012.45%2016.76C13.6734%2016.5829%2014.8067%2016.0149%2015.6808%2015.1408C16.5549%2014.2667%2017.1229%2013.1334%2017.3%2011.91C17.3433%2011.1875%2017.6533%2010.5068%2018.17%2010C18.6601%209.51185%2019.3099%209.2171%2020%209.16999C21.1239%209.01536%2022.1721%208.51571%2023%207.74C23.9427%208.52207%2024.7413%209.46289%2025.36%2010.52C25.322%2010.5713%2025.2784%2010.6183%2025.23%2010.66C24.7527%2011.1622%2024.1098%2011.4748%2023.42%2011.54C22.1953%2011.714%2021.0603%2012.281%2020.1856%2013.1556C19.311%2014.0303%2018.744%2015.1653%2018.57%2016.39C18.4995%2017.0784%2018.1932%2017.7213%2017.703%2018.2097C17.2127%2018.6982%2016.5687%2019.0021%2015.88%2019.07C14.653%2019.2457%2013.5155%2019.8126%2012.6363%2020.6863C11.7572%2021.5601%2011.1833%2022.6941%2011%2023.92C10.9462%2024.4087%2010.7783%2024.878%2010.51%2025.29C9.484%2024.6808%208.5651%2023.9072%207.79001%2023V23ZM16.06%2026.86C15.0453%2026.8611%2014.0354%2026.7197%2013.06%2026.44C13.3937%2025.818%2013.6106%2025.1401%2013.7%2024.44C13.7701%2023.7531%2014.075%2023.1114%2014.5632%2022.6232C15.0514%2022.135%2015.6931%2021.8301%2016.38%2021.76C17.6052%2021.5849%2018.7408%2021.0178%2019.6169%2020.1435C20.4929%2019.2693%2021.0624%2018.1348%2021.24%2016.91C21.3101%2016.2231%2021.615%2015.5814%2022.1032%2015.0932C22.5914%2014.605%2023.2331%2014.3001%2023.92%2014.23C24.842%2014.1101%2025.7208%2013.7668%2026.48%2013.23C26.9016%2014.8279%2026.9515%2016.5011%2026.626%2018.1213C26.3005%2019.7415%2025.6081%2021.2657%2024.6021%2022.5768C23.5961%2023.8878%2022.3032%2024.9511%2020.8224%2025.6849C19.3417%2026.4187%2017.7126%2026.8036%2016.06%2026.81V26.86Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3C%2Fsvg%3E"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                            className: cx((LogoSection_module_default()), "logo-code", "grayscale", "hide-mob"),
                            id: cx((LogoSection_module_default()), "w-node-_36c46b65-bec7-ad86-567a-d0c29448d9ed-9448d9cb"),
                            tag: "div",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                className: cx((LogoSection_module_default()), "logo-code"),
                                value: "%3Csvg%20id%3D%22logo-7%22%20width%3D%22124%22%20height%3D%2232%22%20viewbox%3D%220%200%20124%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cpath%20d%3D%22M36.87%2010.07H39.87V22.2H36.87V10.07ZM41.06%2017.62C41.06%2014.62%2042.9%2012.83%2045.74%2012.83C48.58%2012.83%2050.42%2014.62%2050.42%2017.62C50.42%2020.62%2048.62%2022.42%2045.74%2022.42C42.86%2022.42%2041.06%2020.67%2041.06%2017.62ZM47.41%2017.62C47.41%2015.97%2046.76%2015%2045.74%2015C44.72%2015%2044.08%2016%2044.08%2017.62C44.08%2019.24%2044.71%2020.22%2045.74%2020.22C46.77%2020.22%2047.41%2019.3%2047.41%2017.63V17.62ZM51.55%2022.79H54.43C54.5671%2023.0945%2054.7988%2023.3466%2055.0907%2023.5088C55.3826%2023.6709%2055.7191%2023.7345%2056.05%2023.69C57.19%2023.69%2057.79%2023.07%2057.79%2022.17V20.49H57.73C57.491%2021.0049%2057.1031%2021.4363%2056.6165%2021.7287C56.1299%2022.021%2055.5668%2022.1608%2055%2022.13C52.81%2022.13%2051.36%2020.46%2051.36%2017.59C51.36%2014.72%2052.74%2012.91%2055.04%2012.91C55.6246%2012.8871%2056.2022%2013.0434%2056.6955%2013.3579C57.1888%2013.6725%2057.5742%2014.1303%2057.8%2014.67V14.67V13H60.8V22.1C60.8%2024.29%2058.87%2025.65%2056.02%2025.65C53.37%2025.65%2051.72%2024.46%2051.55%2022.8V22.79ZM57.8%2017.61C57.8%2016.15%2057.13%2015.23%2056.07%2015.23C55.01%2015.23%2054.36%2016.14%2054.36%2017.61C54.36%2019.08%2055%2019.91%2056.07%2019.91C57.14%2019.91%2057.8%2019.1%2057.8%2017.62V17.61ZM61.93%2017.61C61.93%2014.61%2063.77%2012.82%2066.61%2012.82C69.45%2012.82%2071.3%2014.61%2071.3%2017.61C71.3%2020.61%2069.5%2022.41%2066.61%2022.41C63.72%2022.41%2061.93%2020.67%2061.93%2017.62V17.61ZM68.28%2017.61C68.28%2015.96%2067.63%2014.99%2066.61%2014.99C65.59%2014.99%2065%2016%2065%2017.63C65%2019.26%2065.63%2020.23%2066.65%2020.23C67.67%2020.23%2068.28%2019.3%2068.28%2017.63V17.61ZM72.44%2010.82C72.4321%2010.5171%2072.5144%2010.2187%2072.6763%209.96261C72.8383%209.70651%2073.0726%209.50427%2073.3496%209.38151C73.6266%209.25875%2073.9338%209.221%2074.2323%209.27305C74.5308%209.32511%2074.8071%209.46462%2075.0262%209.67389C75.2454%209.88317%2075.3974%2010.1528%2075.4631%2010.4486C75.5288%2010.7444%2075.5052%2011.053%2075.3952%2011.3354C75.2853%2011.6177%2075.094%2011.8611%2074.8456%2012.0346C74.5973%2012.2081%2074.3029%2012.304%2074%2012.31C73.7992%2012.3238%2073.5977%2012.2959%2073.4082%2012.2281C73.2186%2012.1603%2073.0452%2012.0541%2072.8987%2011.916C72.7522%2011.778%2072.6358%2011.6111%2072.5569%2011.4259C72.4779%2011.2408%2072.4381%2011.0413%2072.44%2010.84V10.82ZM72.44%2013.02H75.44V22.2H72.44V13.02ZM86.33%2017.61C86.33%2020.61%2085%2022.32%2082.72%2022.32C82.1354%2022.3575%2081.5533%2022.2146%2081.0525%2021.9106C80.5517%2021.6065%2080.1564%2021.156%2079.92%2020.62H79.86V25.14H76.86V13H79.86V14.64H79.92C80.1454%2014.0951%2080.5332%2013.6329%2081.0306%2013.3162C81.528%2012.9995%2082.1109%2012.8437%2082.7%2012.87C85%2012.91%2086.37%2014.63%2086.37%2017.63L86.33%2017.61ZM83.33%2017.61C83.33%2016.15%2082.66%2015.22%2081.61%2015.22C80.56%2015.22%2079.89%2016.16%2079.88%2017.61C79.87%2019.06%2080.56%2019.99%2081.61%2019.99C82.66%2019.99%2083.33%2019.08%2083.33%2017.63V17.61ZM91.48%2012.81C93.97%2012.81%2095.48%2013.99%2095.55%2015.88H92.82C92.82%2015.23%2092.28%2014.82%2091.45%2014.82C90.62%2014.82%2090.25%2015.14%2090.25%2015.61C90.25%2016.08%2090.58%2016.23%2091.25%2016.37L93.17%2016.76C95%2017.15%2095.78%2017.89%2095.78%2019.28C95.78%2021.18%2094.05%2022.4%2091.5%2022.4C88.95%2022.4%2087.28%2021.18%2087.15%2019.31H90.04C90.13%2019.99%2090.67%2020.39%2091.55%2020.39C92.43%2020.39%2092.83%2020.1%2092.83%2019.62C92.83%2019.14%2092.55%2019.04%2091.83%2018.89L90.1%2018.52C88.31%2018.15%2087.37%2017.2%2087.37%2015.8C87.39%2014%2089%2012.83%2091.48%2012.83V12.81ZM105.79%2022.18H102.9V20.47H102.84C102.681%2021.0441%20102.331%2021.5466%20101.847%2021.8941C101.363%2022.2415%20100.775%2022.413%20100.18%2022.38C99.7242%2022.4059%2099.2682%2022.3337%2098.8427%2022.1682C98.4172%2022.0027%2098.0322%2021.7479%2097.7137%2021.4208C97.3952%2021.0938%2097.1505%2020.7021%2096.9964%2020.2724C96.8422%2019.8427%2096.7821%2019.3849%2096.82%2018.93V13H99.82V18.24C99.82%2019.33%20100.38%2019.91%20101.31%2019.91C101.528%2019.9104%20101.744%2019.8643%20101.943%2019.7746C102.141%2019.6849%20102.319%2019.5537%20102.463%2019.3899C102.606%2019.226%20102.714%2019.0333%20102.777%2018.8247C102.84%2018.616%20102.859%2018.3962%20102.83%2018.18V13H105.83L105.79%2022.18ZM107.24%2013H110.14V14.77H110.2C110.359%2014.2035%20110.702%2013.7057%20111.174%2013.3547C111.646%2013.0037%20112.222%2012.8191%20112.81%2012.83C113.409%2012.7821%20114.003%2012.9612%20114.476%2013.3318C114.948%2013.7024%20115.264%2014.2372%20115.36%2014.83H115.42C115.601%2014.2309%20115.977%2013.7093%20116.488%2013.3472C116.998%2012.9851%20117.615%2012.8031%20118.24%2012.83C118.648%2012.8163%20119.054%2012.8886%20119.432%2013.0422C119.811%2013.1957%20120.152%2013.4272%20120.435%2013.7214C120.718%2014.0157%20120.936%2014.3662%20121.075%2014.7501C121.213%2015.134%20121.27%2015.5429%20121.24%2015.95V22.2H118.24V16.75C118.24%2015.75%20117.79%2015.29%20116.95%2015.29C116.763%2015.2884%20116.577%2015.327%20116.406%2015.4032C116.235%2015.4794%20116.082%2015.5914%20115.958%2015.7317C115.834%2015.872%20115.741%2016.0372%20115.686%2016.2163C115.631%2016.3955%20115.616%2016.5843%20115.64%2016.77V22.2H112.79V16.71C112.79%2015.79%20112.34%2015.29%20111.52%2015.29C111.331%2015.2901%20111.143%2015.3303%20110.971%2015.408C110.798%2015.4858%20110.643%2015.5993%20110.518%2015.741C110.392%2015.8827%20110.298%2016.0495%20110.241%2016.2304C110.185%2016.4112%20110.167%2016.6019%20110.19%2016.79V22.2H107.19L107.24%2013Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3Cpath%20d%3D%22M28.48%2010.62C27.9711%209.45636%2027.2976%208.37193%2026.48%207.4C25.2715%205.92034%2023.7633%204.71339%2022.0547%203.8586C20.3461%203.00382%2018.4758%202.52057%2016.567%202.44066C14.6582%202.36075%2012.7541%202.68599%2010.98%203.39499C9.20597%204.10398%207.60217%205.18065%206.2742%206.55413C4.94622%207.9276%203.92417%209.56675%203.27532%2011.3637C2.62647%2013.1606%202.36552%2015.0746%202.50966%2016.9796C2.65381%2018.8847%203.19976%2020.7376%204.1116%2022.4164C5.02344%2024.0953%206.28049%2025.562%207.80001%2026.72C8.77501%2027.4779%209.85236%2028.094%2011%2028.55C12.609%2029.2094%2014.3311%2029.549%2016.07%2029.55C19.6594%2029.5421%2023.0992%2028.1113%2025.6355%2025.5713C28.1717%2023.0313%2029.5974%2019.5894%2029.6%2016C29.6026%2014.1485%2029.2213%2012.3166%2028.48%2010.62V10.62ZM16.06%205.18999C17.6216%205.18983%2019.1643%205.53113%2020.58%206.18999V6.18999C20.2348%206.33916%2019.8718%206.44335%2019.5%206.5C18.2766%206.67709%2017.1433%207.24507%2016.2692%208.11917C15.3951%208.99326%2014.8271%2010.1266%2014.65%2011.35C14.5723%2012.0361%2014.2602%2012.6744%2013.7665%2013.1572C13.2728%2013.64%2012.6277%2013.9376%2011.94%2014C10.7166%2014.1771%209.58327%2014.7451%208.70918%2015.6192C7.83509%2016.4933%207.2671%2017.6266%207.09001%2018.85C7.03005%2019.5024%206.7517%2020.1155%206.30001%2020.59V20.59C5.52066%2018.9433%205.17056%2017.1261%205.28228%2015.3077C5.394%2013.4893%205.96391%2011.7287%206.93898%2010.1897C7.91404%208.65079%209.26258%207.38351%2010.8591%206.50584C12.4556%205.62817%2014.2482%205.16864%2016.07%205.16999L16.06%205.18999ZM7.79001%2023C7.91001%2022.89%208.03001%2022.79%208.15001%2022.67C9.03966%2021.8075%209.61072%2020.6689%209.77001%2019.44C9.83459%2018.7492%2010.143%2018.104%2010.64%2017.62C11.1183%2017.1222%2011.762%2016.8163%2012.45%2016.76C13.6734%2016.5829%2014.8067%2016.0149%2015.6808%2015.1408C16.5549%2014.2667%2017.1229%2013.1334%2017.3%2011.91C17.3433%2011.1875%2017.6533%2010.5068%2018.17%2010C18.6601%209.51185%2019.3099%209.2171%2020%209.16999C21.1239%209.01536%2022.1721%208.51571%2023%207.74C23.9427%208.52207%2024.7413%209.46289%2025.36%2010.52C25.322%2010.5713%2025.2784%2010.6183%2025.23%2010.66C24.7527%2011.1622%2024.1098%2011.4748%2023.42%2011.54C22.1953%2011.714%2021.0603%2012.281%2020.1856%2013.1556C19.311%2014.0303%2018.744%2015.1653%2018.57%2016.39C18.4995%2017.0784%2018.1932%2017.7213%2017.703%2018.2097C17.2127%2018.6982%2016.5687%2019.0021%2015.88%2019.07C14.653%2019.2457%2013.5155%2019.8126%2012.6363%2020.6863C11.7572%2021.5601%2011.1833%2022.6941%2011%2023.92C10.9462%2024.4087%2010.7783%2024.878%2010.51%2025.29C9.484%2024.6808%208.5651%2023.9072%207.79001%2023V23ZM16.06%2026.86C15.0453%2026.8611%2014.0354%2026.7197%2013.06%2026.44C13.3937%2025.818%2013.6106%2025.1401%2013.7%2024.44C13.7701%2023.7531%2014.075%2023.1114%2014.5632%2022.6232C15.0514%2022.135%2015.6931%2021.8301%2016.38%2021.76C17.6052%2021.5849%2018.7408%2021.0178%2019.6169%2020.1435C20.4929%2019.2693%2021.0624%2018.1348%2021.24%2016.91C21.3101%2016.2231%2021.615%2015.5814%2022.1032%2015.0932C22.5914%2014.605%2023.2331%2014.3001%2023.92%2014.23C24.842%2014.1101%2025.7208%2013.7668%2026.48%2013.23C26.9016%2014.8279%2026.9515%2016.5011%2026.626%2018.1213C26.3005%2019.7415%2025.6081%2021.2657%2024.6021%2022.5768C23.5961%2023.8878%2022.3032%2024.9511%2020.8224%2025.6849C19.3417%2026.4187%2017.7126%2026.8036%2016.06%2026.81V26.86Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3C%2Fsvg%3E"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                            className: cx((LogoSection_module_default()), "logo-code", "grayscale", "hide-mob"),
                            id: cx((LogoSection_module_default()), "w-node-_36c46b65-bec7-ad86-567a-d0c29448d9ef-9448d9cb"),
                            tag: "div",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                className: cx((LogoSection_module_default()), "logo-code"),
                                value: "%3Csvg%20id%3D%22logo-7%22%20width%3D%22124%22%20height%3D%2232%22%20viewbox%3D%220%200%20124%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cpath%20d%3D%22M36.87%2010.07H39.87V22.2H36.87V10.07ZM41.06%2017.62C41.06%2014.62%2042.9%2012.83%2045.74%2012.83C48.58%2012.83%2050.42%2014.62%2050.42%2017.62C50.42%2020.62%2048.62%2022.42%2045.74%2022.42C42.86%2022.42%2041.06%2020.67%2041.06%2017.62ZM47.41%2017.62C47.41%2015.97%2046.76%2015%2045.74%2015C44.72%2015%2044.08%2016%2044.08%2017.62C44.08%2019.24%2044.71%2020.22%2045.74%2020.22C46.77%2020.22%2047.41%2019.3%2047.41%2017.63V17.62ZM51.55%2022.79H54.43C54.5671%2023.0945%2054.7988%2023.3466%2055.0907%2023.5088C55.3826%2023.6709%2055.7191%2023.7345%2056.05%2023.69C57.19%2023.69%2057.79%2023.07%2057.79%2022.17V20.49H57.73C57.491%2021.0049%2057.1031%2021.4363%2056.6165%2021.7287C56.1299%2022.021%2055.5668%2022.1608%2055%2022.13C52.81%2022.13%2051.36%2020.46%2051.36%2017.59C51.36%2014.72%2052.74%2012.91%2055.04%2012.91C55.6246%2012.8871%2056.2022%2013.0434%2056.6955%2013.3579C57.1888%2013.6725%2057.5742%2014.1303%2057.8%2014.67V14.67V13H60.8V22.1C60.8%2024.29%2058.87%2025.65%2056.02%2025.65C53.37%2025.65%2051.72%2024.46%2051.55%2022.8V22.79ZM57.8%2017.61C57.8%2016.15%2057.13%2015.23%2056.07%2015.23C55.01%2015.23%2054.36%2016.14%2054.36%2017.61C54.36%2019.08%2055%2019.91%2056.07%2019.91C57.14%2019.91%2057.8%2019.1%2057.8%2017.62V17.61ZM61.93%2017.61C61.93%2014.61%2063.77%2012.82%2066.61%2012.82C69.45%2012.82%2071.3%2014.61%2071.3%2017.61C71.3%2020.61%2069.5%2022.41%2066.61%2022.41C63.72%2022.41%2061.93%2020.67%2061.93%2017.62V17.61ZM68.28%2017.61C68.28%2015.96%2067.63%2014.99%2066.61%2014.99C65.59%2014.99%2065%2016%2065%2017.63C65%2019.26%2065.63%2020.23%2066.65%2020.23C67.67%2020.23%2068.28%2019.3%2068.28%2017.63V17.61ZM72.44%2010.82C72.4321%2010.5171%2072.5144%2010.2187%2072.6763%209.96261C72.8383%209.70651%2073.0726%209.50427%2073.3496%209.38151C73.6266%209.25875%2073.9338%209.221%2074.2323%209.27305C74.5308%209.32511%2074.8071%209.46462%2075.0262%209.67389C75.2454%209.88317%2075.3974%2010.1528%2075.4631%2010.4486C75.5288%2010.7444%2075.5052%2011.053%2075.3952%2011.3354C75.2853%2011.6177%2075.094%2011.8611%2074.8456%2012.0346C74.5973%2012.2081%2074.3029%2012.304%2074%2012.31C73.7992%2012.3238%2073.5977%2012.2959%2073.4082%2012.2281C73.2186%2012.1603%2073.0452%2012.0541%2072.8987%2011.916C72.7522%2011.778%2072.6358%2011.6111%2072.5569%2011.4259C72.4779%2011.2408%2072.4381%2011.0413%2072.44%2010.84V10.82ZM72.44%2013.02H75.44V22.2H72.44V13.02ZM86.33%2017.61C86.33%2020.61%2085%2022.32%2082.72%2022.32C82.1354%2022.3575%2081.5533%2022.2146%2081.0525%2021.9106C80.5517%2021.6065%2080.1564%2021.156%2079.92%2020.62H79.86V25.14H76.86V13H79.86V14.64H79.92C80.1454%2014.0951%2080.5332%2013.6329%2081.0306%2013.3162C81.528%2012.9995%2082.1109%2012.8437%2082.7%2012.87C85%2012.91%2086.37%2014.63%2086.37%2017.63L86.33%2017.61ZM83.33%2017.61C83.33%2016.15%2082.66%2015.22%2081.61%2015.22C80.56%2015.22%2079.89%2016.16%2079.88%2017.61C79.87%2019.06%2080.56%2019.99%2081.61%2019.99C82.66%2019.99%2083.33%2019.08%2083.33%2017.63V17.61ZM91.48%2012.81C93.97%2012.81%2095.48%2013.99%2095.55%2015.88H92.82C92.82%2015.23%2092.28%2014.82%2091.45%2014.82C90.62%2014.82%2090.25%2015.14%2090.25%2015.61C90.25%2016.08%2090.58%2016.23%2091.25%2016.37L93.17%2016.76C95%2017.15%2095.78%2017.89%2095.78%2019.28C95.78%2021.18%2094.05%2022.4%2091.5%2022.4C88.95%2022.4%2087.28%2021.18%2087.15%2019.31H90.04C90.13%2019.99%2090.67%2020.39%2091.55%2020.39C92.43%2020.39%2092.83%2020.1%2092.83%2019.62C92.83%2019.14%2092.55%2019.04%2091.83%2018.89L90.1%2018.52C88.31%2018.15%2087.37%2017.2%2087.37%2015.8C87.39%2014%2089%2012.83%2091.48%2012.83V12.81ZM105.79%2022.18H102.9V20.47H102.84C102.681%2021.0441%20102.331%2021.5466%20101.847%2021.8941C101.363%2022.2415%20100.775%2022.413%20100.18%2022.38C99.7242%2022.4059%2099.2682%2022.3337%2098.8427%2022.1682C98.4172%2022.0027%2098.0322%2021.7479%2097.7137%2021.4208C97.3952%2021.0938%2097.1505%2020.7021%2096.9964%2020.2724C96.8422%2019.8427%2096.7821%2019.3849%2096.82%2018.93V13H99.82V18.24C99.82%2019.33%20100.38%2019.91%20101.31%2019.91C101.528%2019.9104%20101.744%2019.8643%20101.943%2019.7746C102.141%2019.6849%20102.319%2019.5537%20102.463%2019.3899C102.606%2019.226%20102.714%2019.0333%20102.777%2018.8247C102.84%2018.616%20102.859%2018.3962%20102.83%2018.18V13H105.83L105.79%2022.18ZM107.24%2013H110.14V14.77H110.2C110.359%2014.2035%20110.702%2013.7057%20111.174%2013.3547C111.646%2013.0037%20112.222%2012.8191%20112.81%2012.83C113.409%2012.7821%20114.003%2012.9612%20114.476%2013.3318C114.948%2013.7024%20115.264%2014.2372%20115.36%2014.83H115.42C115.601%2014.2309%20115.977%2013.7093%20116.488%2013.3472C116.998%2012.9851%20117.615%2012.8031%20118.24%2012.83C118.648%2012.8163%20119.054%2012.8886%20119.432%2013.0422C119.811%2013.1957%20120.152%2013.4272%20120.435%2013.7214C120.718%2014.0157%20120.936%2014.3662%20121.075%2014.7501C121.213%2015.134%20121.27%2015.5429%20121.24%2015.95V22.2H118.24V16.75C118.24%2015.75%20117.79%2015.29%20116.95%2015.29C116.763%2015.2884%20116.577%2015.327%20116.406%2015.4032C116.235%2015.4794%20116.082%2015.5914%20115.958%2015.7317C115.834%2015.872%20115.741%2016.0372%20115.686%2016.2163C115.631%2016.3955%20115.616%2016.5843%20115.64%2016.77V22.2H112.79V16.71C112.79%2015.79%20112.34%2015.29%20111.52%2015.29C111.331%2015.2901%20111.143%2015.3303%20110.971%2015.408C110.798%2015.4858%20110.643%2015.5993%20110.518%2015.741C110.392%2015.8827%20110.298%2016.0495%20110.241%2016.2304C110.185%2016.4112%20110.167%2016.6019%20110.19%2016.79V22.2H107.19L107.24%2013Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3Cpath%20d%3D%22M28.48%2010.62C27.9711%209.45636%2027.2976%208.37193%2026.48%207.4C25.2715%205.92034%2023.7633%204.71339%2022.0547%203.8586C20.3461%203.00382%2018.4758%202.52057%2016.567%202.44066C14.6582%202.36075%2012.7541%202.68599%2010.98%203.39499C9.20597%204.10398%207.60217%205.18065%206.2742%206.55413C4.94622%207.9276%203.92417%209.56675%203.27532%2011.3637C2.62647%2013.1606%202.36552%2015.0746%202.50966%2016.9796C2.65381%2018.8847%203.19976%2020.7376%204.1116%2022.4164C5.02344%2024.0953%206.28049%2025.562%207.80001%2026.72C8.77501%2027.4779%209.85236%2028.094%2011%2028.55C12.609%2029.2094%2014.3311%2029.549%2016.07%2029.55C19.6594%2029.5421%2023.0992%2028.1113%2025.6355%2025.5713C28.1717%2023.0313%2029.5974%2019.5894%2029.6%2016C29.6026%2014.1485%2029.2213%2012.3166%2028.48%2010.62V10.62ZM16.06%205.18999C17.6216%205.18983%2019.1643%205.53113%2020.58%206.18999V6.18999C20.2348%206.33916%2019.8718%206.44335%2019.5%206.5C18.2766%206.67709%2017.1433%207.24507%2016.2692%208.11917C15.3951%208.99326%2014.8271%2010.1266%2014.65%2011.35C14.5723%2012.0361%2014.2602%2012.6744%2013.7665%2013.1572C13.2728%2013.64%2012.6277%2013.9376%2011.94%2014C10.7166%2014.1771%209.58327%2014.7451%208.70918%2015.6192C7.83509%2016.4933%207.2671%2017.6266%207.09001%2018.85C7.03005%2019.5024%206.7517%2020.1155%206.30001%2020.59V20.59C5.52066%2018.9433%205.17056%2017.1261%205.28228%2015.3077C5.394%2013.4893%205.96391%2011.7287%206.93898%2010.1897C7.91404%208.65079%209.26258%207.38351%2010.8591%206.50584C12.4556%205.62817%2014.2482%205.16864%2016.07%205.16999L16.06%205.18999ZM7.79001%2023C7.91001%2022.89%208.03001%2022.79%208.15001%2022.67C9.03966%2021.8075%209.61072%2020.6689%209.77001%2019.44C9.83459%2018.7492%2010.143%2018.104%2010.64%2017.62C11.1183%2017.1222%2011.762%2016.8163%2012.45%2016.76C13.6734%2016.5829%2014.8067%2016.0149%2015.6808%2015.1408C16.5549%2014.2667%2017.1229%2013.1334%2017.3%2011.91C17.3433%2011.1875%2017.6533%2010.5068%2018.17%2010C18.6601%209.51185%2019.3099%209.2171%2020%209.16999C21.1239%209.01536%2022.1721%208.51571%2023%207.74C23.9427%208.52207%2024.7413%209.46289%2025.36%2010.52C25.322%2010.5713%2025.2784%2010.6183%2025.23%2010.66C24.7527%2011.1622%2024.1098%2011.4748%2023.42%2011.54C22.1953%2011.714%2021.0603%2012.281%2020.1856%2013.1556C19.311%2014.0303%2018.744%2015.1653%2018.57%2016.39C18.4995%2017.0784%2018.1932%2017.7213%2017.703%2018.2097C17.2127%2018.6982%2016.5687%2019.0021%2015.88%2019.07C14.653%2019.2457%2013.5155%2019.8126%2012.6363%2020.6863C11.7572%2021.5601%2011.1833%2022.6941%2011%2023.92C10.9462%2024.4087%2010.7783%2024.878%2010.51%2025.29C9.484%2024.6808%208.5651%2023.9072%207.79001%2023V23ZM16.06%2026.86C15.0453%2026.8611%2014.0354%2026.7197%2013.06%2026.44C13.3937%2025.818%2013.6106%2025.1401%2013.7%2024.44C13.7701%2023.7531%2014.075%2023.1114%2014.5632%2022.6232C15.0514%2022.135%2015.6931%2021.8301%2016.38%2021.76C17.6052%2021.5849%2018.7408%2021.0178%2019.6169%2020.1435C20.4929%2019.2693%2021.0624%2018.1348%2021.24%2016.91C21.3101%2016.2231%2021.615%2015.5814%2022.1032%2015.0932C22.5914%2014.605%2023.2331%2014.3001%2023.92%2014.23C24.842%2014.1101%2025.7208%2013.7668%2026.48%2013.23C26.9016%2014.8279%2026.9515%2016.5011%2026.626%2018.1213C26.3005%2019.7415%2025.6081%2021.2657%2024.6021%2022.5768C23.5961%2023.8878%2022.3032%2024.9511%2020.8224%2025.6849C19.3417%2026.4187%2017.7126%2026.8036%2016.06%2026.81V26.86Z%22%20class%3D%22ccustom%22%20fill%3D%22currentColor%22%20stop-color%3D%22%23ffffff%22%2F%3E%20%3C%2Fsvg%3E"
                            })
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./devlink/Nav.module.css
var Nav_module = __webpack_require__(8167);
var Nav_module_default = /*#__PURE__*/__webpack_require__.n(Nav_module);
;// CONCATENATED MODULE: ./devlink/Nav.js






const Nav_interactionsData = JSON.parse('{"events":{"e":{"id":"e","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"bc9997fb-143e-0df6-7954-bf807de73e8d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bc9997fb-143e-0df6-7954-bf807de73e8d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680617889749},"e-2":{"id":"e-2","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"bc9997fb-143e-0df6-7954-bf807de73e8d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bc9997fb-143e-0df6-7954-bf807de73e8d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680617889749},"e-93":{"id":"e-93","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-94"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"ace055e6-2487-c827-0249-633e3dd10714","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ace055e6-2487-c827-0249-633e3dd10714","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690977403478},"e-94":{"id":"e-94","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-93"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"ace055e6-2487-c827-0249-633e3dd10714","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ace055e6-2487-c827-0249-633e3dd10714","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690977403478}},"actionLists":{"a":{"id":"a","title":"Hamburger Open","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"value":1,"unit":""}},{"id":"a-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-7","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":0,"unit":""}},{"id":"a-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":"none"}},{"id":"a-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":0,"unit":""}},{"id":"a-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":"none"}}]},{"actionItems":[{"id":"a-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":1,"unit":""}},{"id":"a-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":1,"unit":""}},{"id":"a-n-15","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-16","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"yValue":7,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-18","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"yValue":-7,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"value":0,"unit":""}},{"id":"a-n-20","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-21","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outQuad","duration":0,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":"flex"}},{"id":"a-n-22","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outQuad","duration":0,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1680617893763},"a-2":{"id":"a-2","title":"Hamburger Close","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-2-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-2-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"value":1,"unit":""}},{"id":"a-2-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-7","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":0,"unit":""}},{"id":"a-2-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-2-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outQuad","duration":0,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":"none"}}]},{"actionItems":[{"id":"a-2-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outQuad","duration":0,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1680617893763},"a-7":{"id":"a-7","title":"Hamburger Open 2","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-7-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-7-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"value":1,"unit":""}},{"id":"a-7-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-7-n-7","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-7-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":0,"unit":""}},{"id":"a-7-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":"none"}},{"id":"a-7-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":0,"unit":""}},{"id":"a-7-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":"none"}}]},{"actionItems":[{"id":"a-7-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-7-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":1,"unit":""}},{"id":"a-7-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":1,"unit":""}},{"id":"a-7-n-15","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-7-n-16","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-7-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"yValue":7,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-18","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"yValue":-7,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"value":0,"unit":""}},{"id":"a-7-n-20","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-7-n-21","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outQuad","duration":0,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":"flex"}},{"id":"a-7-n-22","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outQuad","duration":0,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1680617893763},"a-8":{"id":"a-8","title":"Hamburger Close 2","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-8-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-8-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"value":1,"unit":""}},{"id":"a-8-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-8-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-8-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-8-n-7","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-8-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":0,"unit":""}},{"id":"a-8-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-8-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outQuad","duration":0,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":"none"}}]},{"actionItems":[{"id":"a-8-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outQuad","duration":0,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1680617893763}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}');
function Nav({ as: _Component = Block, login = {}, signup = {} }) {
    useInteractions(Nav_interactionsData, (Nav_module_default()));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(_Component, {
        className: cx((Nav_module_default()), "navbar"),
        tag: "section",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                className: cx((Nav_module_default()), "mobile-nav"),
                tag: "div",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                        className: cx((Nav_module_default()), "brand"),
                        button: false,
                        options: {
                            href: "#"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Image, {
                            loading: "lazy",
                            width: "auto",
                            height: "auto",
                            src: "https://uploads-ssl.webflow.com/64c9f378fba5cc5ff545eca2/64c9fee293996cd82511d119_6435356fd7ef3c357bfc5ca2_logo.svg"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                        className: cx((Nav_module_default()), "animated-hamburger"),
                        "data-w-id": "bc9997fb-143e-0df6-7954-bf807de73e8d",
                        tag: "div",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                                className: cx((Nav_module_default()), "hamburger-line", "top"),
                                tag: "div"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                                className: cx((Nav_module_default()), "hamburger-line", "mid"),
                                tag: "div"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                                className: cx((Nav_module_default()), "hamburger-line", "bot"),
                                tag: "div"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                className: cx((Nav_module_default()), "_02-nav-menu"),
                tag: "div",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                        className: cx((Nav_module_default()), "brand", "in-nav"),
                        button: false,
                        options: {
                            href: "#"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Image, {
                            loading: "lazy",
                            width: "auto",
                            height: "auto",
                            src: "https://uploads-ssl.webflow.com/64c9f378fba5cc5ff545eca2/64c9fee293996cd82511d119_6435356fd7ef3c357bfc5ca2_logo.svg"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                        className: cx((Nav_module_default()), "nav-menu-center"),
                        tag: "div",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                                className: cx((Nav_module_default()), "nav-link"),
                                button: false,
                                options: {
                                    href: "#"
                                },
                                children: "Home"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                                className: cx((Nav_module_default()), "nav-link"),
                                button: false,
                                options: {
                                    href: "#"
                                },
                                children: "About us"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                                className: cx((Nav_module_default()), "nav-link"),
                                button: false,
                                options: {
                                    href: "#"
                                },
                                children: "Pricing"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                        className: cx((Nav_module_default()), "nav-button-wrap"),
                        tag: "div",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                                className: cx((Nav_module_default()), "nav-link"),
                                button: false,
                                options: {
                                    href: "#"
                                },
                                ...login,
                                children: "Login"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                                className: cx((Nav_module_default()), "button", "nav"),
                                button: true,
                                "data-ms-modal": "signup",
                                options: {
                                    href: "#"
                                },
                                ...signup,
                                children: "Signup"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                className: cx((Nav_module_default()), "shadow"),
                tag: "div"
            })
        ]
    });
}

// EXTERNAL MODULE: ./devlink/NavMember.module.css
var NavMember_module = __webpack_require__(7982);
var NavMember_module_default = /*#__PURE__*/__webpack_require__.n(NavMember_module);
;// CONCATENATED MODULE: ./devlink/NavMember.js






const NavMember_interactionsData = JSON.parse('{"events":{"e":{"id":"e","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"bc9997fb-143e-0df6-7954-bf807de73e8d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bc9997fb-143e-0df6-7954-bf807de73e8d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680617889749},"e-2":{"id":"e-2","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"bc9997fb-143e-0df6-7954-bf807de73e8d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bc9997fb-143e-0df6-7954-bf807de73e8d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680617889749},"e-93":{"id":"e-93","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-94"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"ace055e6-2487-c827-0249-633e3dd10714","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ace055e6-2487-c827-0249-633e3dd10714","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690977403478},"e-94":{"id":"e-94","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-93"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"ace055e6-2487-c827-0249-633e3dd10714","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ace055e6-2487-c827-0249-633e3dd10714","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690977403478}},"actionLists":{"a":{"id":"a","title":"Hamburger Open","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"value":1,"unit":""}},{"id":"a-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-7","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":0,"unit":""}},{"id":"a-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":"none"}},{"id":"a-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":0,"unit":""}},{"id":"a-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":"none"}}]},{"actionItems":[{"id":"a-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":1,"unit":""}},{"id":"a-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":1,"unit":""}},{"id":"a-n-15","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-16","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"yValue":7,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-18","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"yValue":-7,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"value":0,"unit":""}},{"id":"a-n-20","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-21","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outQuad","duration":0,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":"flex"}},{"id":"a-n-22","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outQuad","duration":0,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1680617893763},"a-2":{"id":"a-2","title":"Hamburger Close","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-2-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-2-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"value":1,"unit":""}},{"id":"a-2-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-7","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":0,"unit":""}},{"id":"a-2-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-2-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outQuad","duration":0,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":"none"}}]},{"actionItems":[{"id":"a-2-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outQuad","duration":0,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1680617893763},"a-7":{"id":"a-7","title":"Hamburger Open 2","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-7-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-7-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"value":1,"unit":""}},{"id":"a-7-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-7-n-7","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-7-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":0,"unit":""}},{"id":"a-7-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":"none"}},{"id":"a-7-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":0,"unit":""}},{"id":"a-7-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":"none"}}]},{"actionItems":[{"id":"a-7-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-7-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":1,"unit":""}},{"id":"a-7-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":1,"unit":""}},{"id":"a-7-n-15","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-7-n-16","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-7-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"yValue":7,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-18","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"yValue":-7,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"value":0,"unit":""}},{"id":"a-7-n-20","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-7-n-21","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outQuad","duration":0,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":"flex"}},{"id":"a-7-n-22","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outQuad","duration":0,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1680617893763},"a-8":{"id":"a-8","title":"Hamburger Close 2","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-8-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-8-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"value":1,"unit":""}},{"id":"a-8-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-8-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-8-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-8-n-7","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-8-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":0,"unit":""}},{"id":"a-8-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-8-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outQuad","duration":0,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":"none"}}]},{"actionItems":[{"id":"a-8-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outQuad","duration":0,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1680617893763}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}');
function NavMember({ as: _Component = Block, profile = {} }) {
    useInteractions(NavMember_interactionsData, (NavMember_module_default()));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(_Component, {
        className: cx((NavMember_module_default()), "navbar"),
        tag: "section",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                className: cx((NavMember_module_default()), "mobile-nav"),
                tag: "div",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                        className: cx((NavMember_module_default()), "brand"),
                        button: false,
                        options: {
                            href: "#"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Image, {
                            loading: "lazy",
                            width: "auto",
                            height: "auto",
                            src: "https://uploads-ssl.webflow.com/64c9f378fba5cc5ff545eca2/64c9fee293996cd82511d119_6435356fd7ef3c357bfc5ca2_logo.svg"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                        className: cx((NavMember_module_default()), "animated-hamburger"),
                        "data-w-id": "ace055e6-2487-c827-0249-633e3dd10714",
                        tag: "div",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                                className: cx((NavMember_module_default()), "hamburger-line", "top"),
                                tag: "div"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                                className: cx((NavMember_module_default()), "hamburger-line", "mid"),
                                tag: "div"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                                className: cx((NavMember_module_default()), "hamburger-line", "bot"),
                                tag: "div"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                className: cx((NavMember_module_default()), "_02-nav-menu"),
                tag: "div",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                        className: cx((NavMember_module_default()), "brand", "in-nav"),
                        button: false,
                        options: {
                            href: "#"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Image, {
                            loading: "lazy",
                            width: "auto",
                            height: "auto",
                            src: "https://uploads-ssl.webflow.com/64c9f378fba5cc5ff545eca2/64c9fee293996cd82511d119_6435356fd7ef3c357bfc5ca2_logo.svg"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                        className: cx((NavMember_module_default()), "nav-menu-center"),
                        tag: "div",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                                className: cx((NavMember_module_default()), "nav-link"),
                                button: false,
                                options: {
                                    href: "#"
                                },
                                children: "Something"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                                className: cx((NavMember_module_default()), "nav-link"),
                                button: false,
                                options: {
                                    href: "#"
                                },
                                children: "Something"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                                className: cx((NavMember_module_default()), "nav-link"),
                                button: false,
                                options: {
                                    href: "#"
                                },
                                children: "Something"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                        className: cx((NavMember_module_default()), "nav-button-wrap"),
                        tag: "div",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                            className: cx((NavMember_module_default()), "nav-link"),
                            button: false,
                            options: {
                                href: "#"
                            },
                            ...profile,
                            children: "Profile"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                className: cx((NavMember_module_default()), "shadow"),
                tag: "div"
            })
        ]
    });
}

// EXTERNAL MODULE: ./devlink/PencilBar.module.css
var PencilBar_module = __webpack_require__(554);
var PencilBar_module_default = /*#__PURE__*/__webpack_require__.n(PencilBar_module);
;// CONCATENATED MODULE: ./devlink/PencilBar.js





function PencilBar({ as: _Component = Block, text = "\uD83D\uDE0D This site was built in Webflow, but will be moved to React using Devlink \uD83D\uDE0D" }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(_Component, {
        className: cx((PencilBar_module_default()), "pencil-bar"),
        tag: "div",
        children: text
    });
}

// EXTERNAL MODULE: ./devlink/PricingSection.module.css
var PricingSection_module = __webpack_require__(434);
var PricingSection_module_default = /*#__PURE__*/__webpack_require__.n(PricingSection_module);
;// CONCATENATED MODULE: ./devlink/PricingSection.js






const PricingSection_interactionsData = JSON.parse('{"events":{"e-47":{"id":"e-47","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-48"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"955ecdb6-d1c5-20ac-27ed-c6784ab4889c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"955ecdb6-d1c5-20ac-27ed-c6784ab4889c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1690965844423},"e-49":{"id":"e-49","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-50"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"955ecdb6-d1c5-20ac-27ed-c6784ab48896","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"955ecdb6-d1c5-20ac-27ed-c6784ab48896","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1690965844423},"e-51":{"id":"e-51","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-52"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"955ecdb6-d1c5-20ac-27ed-c6784ab488d2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"955ecdb6-d1c5-20ac-27ed-c6784ab488d2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":300,"direction":"BOTTOM","effectIn":true},"createdOn":1690965844423},"e-53":{"id":"e-53","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-54"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"955ecdb6-d1c5-20ac-27ed-c6784ab488b4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"955ecdb6-d1c5-20ac-27ed-c6784ab488b4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":150,"direction":"BOTTOM","effectIn":true},"createdOn":1690965844423}},"actionLists":{"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}');
function PricingSection({ as: _Component = Section }) {
    useInteractions(PricingSection_interactionsData, (PricingSection_module_default()));
    return /*#__PURE__*/ jsx_runtime_.jsx(_Component, {
        className: cx((PricingSection_module_default()), "section"),
        tag: "section",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
            className: cx((PricingSection_module_default()), "container"),
            tag: "div",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                    className: cx((PricingSection_module_default()), "wrapper_center-text", "mb-40"),
                    "data-w-id": "955ecdb6-d1c5-20ac-27ed-c6784ab48896",
                    tag: "div",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                            className: cx((PricingSection_module_default()), "h2", "center"),
                            tag: "h2",
                            children: "Fair pricing for all companies"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                            className: cx((PricingSection_module_default()), "p"),
                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid, {
                    className: cx((PricingSection_module_default()), "grid_cards"),
                    tag: "div",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                            className: cx((PricingSection_module_default()), "card_pricing"),
                            id: cx((PricingSection_module_default()), "w-node-_955ecdb6-d1c5-20ac-27ed-c6784ab4889c-4ab48894"),
                            "data-w-id": "955ecdb6-d1c5-20ac-27ed-c6784ab4889c",
                            tag: "div",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                                    className: cx((PricingSection_module_default()), "price"),
                                    tag: "div",
                                    children: [
                                        "$",
                                        /*#__PURE__*/ jsx_runtime_.jsx(Strong, {
                                            children: "0"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                                    className: cx((PricingSection_module_default()), "h3"),
                                    tag: "h3",
                                    children: "Free forever"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                                    className: cx((PricingSection_module_default()), "p"),
                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid, {
                                    className: cx((PricingSection_module_default()), "feature-list"),
                                    tag: "div",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                                            className: cx((PricingSection_module_default()), "feature-wrap"),
                                            tag: "div",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                                    className: cx((PricingSection_module_default()), "icon-3"),
                                                    value: "%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.0002%2015.172L19.1922%205.979L20.6072%207.393L10.0002%2018L3.63623%2011.636L5.05023%2010.222L10.0002%2015.172Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                                                    className: cx((PricingSection_module_default()), "feature-label"),
                                                    tag: "div",
                                                    children: "Some cool feature"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                                            className: cx((PricingSection_module_default()), "feature-wrap"),
                                            tag: "div",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                                    className: cx((PricingSection_module_default()), "icon-3"),
                                                    value: "%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.0002%2015.172L19.1922%205.979L20.6072%207.393L10.0002%2018L3.63623%2011.636L5.05023%2010.222L10.0002%2015.172Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                                                    className: cx((PricingSection_module_default()), "feature-label"),
                                                    tag: "div",
                                                    children: "Some cool feature"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                                            className: cx((PricingSection_module_default()), "feature-wrap"),
                                            tag: "div",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                                    className: cx((PricingSection_module_default()), "icon-3"),
                                                    value: "%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.0002%2015.172L19.1922%205.979L20.6072%207.393L10.0002%2018L3.63623%2011.636L5.05023%2010.222L10.0002%2015.172Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                                                    className: cx((PricingSection_module_default()), "feature-label"),
                                                    tag: "div",
                                                    children: "Some cool feature"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                                    className: cx((PricingSection_module_default()), "button"),
                                    button: true,
                                    options: {
                                        href: "#"
                                    },
                                    children: "Get started"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                            className: cx((PricingSection_module_default()), "card_pricing", "featured"),
                            id: cx((PricingSection_module_default()), "w-node-_955ecdb6-d1c5-20ac-27ed-c6784ab488b4-4ab48894"),
                            "data-w-id": "955ecdb6-d1c5-20ac-27ed-c6784ab488b4",
                            tag: "div",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                                    className: cx((PricingSection_module_default()), "price"),
                                    tag: "div",
                                    children: [
                                        "$",
                                        /*#__PURE__*/ jsx_runtime_.jsx(Strong, {
                                            children: "8"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                                    className: cx((PricingSection_module_default()), "h3"),
                                    tag: "h3",
                                    children: "Premium"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                                    className: cx((PricingSection_module_default()), "p"),
                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid, {
                                    className: cx((PricingSection_module_default()), "feature-list"),
                                    tag: "div",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                                            className: cx((PricingSection_module_default()), "feature-wrap"),
                                            tag: "div",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                                    className: cx((PricingSection_module_default()), "icon-3"),
                                                    value: "%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.0002%2015.172L19.1922%205.979L20.6072%207.393L10.0002%2018L3.63623%2011.636L5.05023%2010.222L10.0002%2015.172Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                                                    className: cx((PricingSection_module_default()), "feature-label"),
                                                    tag: "div",
                                                    children: "Some cool feature"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                                            className: cx((PricingSection_module_default()), "feature-wrap"),
                                            tag: "div",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                                    className: cx((PricingSection_module_default()), "icon-3"),
                                                    value: "%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.0002%2015.172L19.1922%205.979L20.6072%207.393L10.0002%2018L3.63623%2011.636L5.05023%2010.222L10.0002%2015.172Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                                                    className: cx((PricingSection_module_default()), "feature-label"),
                                                    tag: "div",
                                                    children: "Some cool feature"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                                            className: cx((PricingSection_module_default()), "feature-wrap"),
                                            tag: "div",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                                    className: cx((PricingSection_module_default()), "icon-3"),
                                                    value: "%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.0002%2015.172L19.1922%205.979L20.6072%207.393L10.0002%2018L3.63623%2011.636L5.05023%2010.222L10.0002%2015.172Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                                                    className: cx((PricingSection_module_default()), "feature-label"),
                                                    tag: "div",
                                                    children: "Some cool feature"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                                            className: cx((PricingSection_module_default()), "feature-wrap"),
                                            tag: "div",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                                    className: cx((PricingSection_module_default()), "icon-3"),
                                                    value: "%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.0002%2015.172L19.1922%205.979L20.6072%207.393L10.0002%2018L3.63623%2011.636L5.05023%2010.222L10.0002%2015.172Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                                                    className: cx((PricingSection_module_default()), "feature-label"),
                                                    tag: "div",
                                                    children: "Some cool feature"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                                    className: cx((PricingSection_module_default()), "button"),
                                    button: true,
                                    options: {
                                        href: "#"
                                    },
                                    children: "Get started"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                                    className: cx((PricingSection_module_default()), "featured-text"),
                                    tag: "div",
                                    children: "FEATURED"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                            className: cx((PricingSection_module_default()), "card_pricing"),
                            id: cx((PricingSection_module_default()), "w-node-_955ecdb6-d1c5-20ac-27ed-c6784ab488d2-4ab48894"),
                            "data-w-id": "955ecdb6-d1c5-20ac-27ed-c6784ab488d2",
                            tag: "div",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                                    className: cx((PricingSection_module_default()), "price"),
                                    tag: "div",
                                    children: [
                                        "$",
                                        /*#__PURE__*/ jsx_runtime_.jsx(Strong, {
                                            children: "25"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                                    className: cx((PricingSection_module_default()), "h3"),
                                    tag: "h3",
                                    children: "Unlimited"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                                    className: cx((PricingSection_module_default()), "p"),
                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid, {
                                    className: cx((PricingSection_module_default()), "feature-list"),
                                    tag: "div",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                                            className: cx((PricingSection_module_default()), "feature-wrap"),
                                            tag: "div",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                                    className: cx((PricingSection_module_default()), "icon-3"),
                                                    value: "%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.0002%2015.172L19.1922%205.979L20.6072%207.393L10.0002%2018L3.63623%2011.636L5.05023%2010.222L10.0002%2015.172Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                                                    className: cx((PricingSection_module_default()), "feature-label"),
                                                    tag: "div",
                                                    children: "Some cool feature"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                                            className: cx((PricingSection_module_default()), "feature-wrap"),
                                            tag: "div",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                                    className: cx((PricingSection_module_default()), "icon-3"),
                                                    value: "%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.0002%2015.172L19.1922%205.979L20.6072%207.393L10.0002%2018L3.63623%2011.636L5.05023%2010.222L10.0002%2015.172Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                                                    className: cx((PricingSection_module_default()), "feature-label"),
                                                    tag: "div",
                                                    children: "Some cool feature"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                                            className: cx((PricingSection_module_default()), "feature-wrap"),
                                            tag: "div",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(HtmlEmbed, {
                                                    className: cx((PricingSection_module_default()), "icon-3"),
                                                    value: "%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.0002%2015.172L19.1922%205.979L20.6072%207.393L10.0002%2018L3.63623%2011.636L5.05023%2010.222L10.0002%2015.172Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                                                    className: cx((PricingSection_module_default()), "feature-label"),
                                                    tag: "div",
                                                    children: "Some cool feature"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Basic_Link, {
                                    className: cx((PricingSection_module_default()), "button"),
                                    button: true,
                                    options: {
                                        href: "#"
                                    },
                                    children: "Get started"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./devlink/TextInput.module.css
var TextInput_module = __webpack_require__(2170);
var TextInput_module_default = /*#__PURE__*/__webpack_require__.n(TextInput_module);
;// CONCATENATED MODULE: ./devlink/TextInput.js





function TextInput({ as: _Component = Block, label = "Something", id = "name-3", inputprop = {} }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(_Component, {
        className: cx((TextInput_module_default()), "input-wrap"),
        tag: "div",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(FormBlockLabel, {
                className: cx((TextInput_module_default()), "input-label"),
                htmlFor: "name-3",
                children: label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                tag: "div",
                ...inputprop,
                children: /*#__PURE__*/ jsx_runtime_.jsx(FormTextInput, {
                    className: cx((TextInput_module_default()), "input"),
                    autoFocus: false,
                    maxLength: 256,
                    name: "name",
                    "data-name": "name",
                    type: "text",
                    disabled: false,
                    required: false,
                    id: id
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./devlink/ValueSection.module.css
var ValueSection_module = __webpack_require__(7193);
var ValueSection_module_default = /*#__PURE__*/__webpack_require__.n(ValueSection_module);
;// CONCATENATED MODULE: ./devlink/ValueSection.js






const ValueSection_interactionsData = JSON.parse('{"events":{"e-21":{"id":"e-21","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-22"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ea0b925a-841c-29b9-3f52-270a7a8fc92f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ea0b925a-841c-29b9-3f52-270a7a8fc92f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1690960780868}},"actionLists":{"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}');
function ValueSection({ as: _Component = Section }) {
    useInteractions(ValueSection_interactionsData, (ValueSection_module_default()));
    return /*#__PURE__*/ jsx_runtime_.jsx(_Component, {
        className: cx((ValueSection_module_default()), "section", "dark"),
        tag: "section",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Block, {
            className: cx((ValueSection_module_default()), "container"),
            tag: "div",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid, {
                className: cx((ValueSection_module_default()), "grid_values"),
                tag: "div",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                        className: cx((ValueSection_module_default()), "wrapper_left-text", "flex-gap_20"),
                        id: cx((ValueSection_module_default()), "w-node-ea0b925a-841c-29b9-3f52-270a7a8fc92f-7a8fc92c"),
                        "data-w-id": "ea0b925a-841c-29b9-3f52-270a7a8fc92f",
                        tag: "div",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                                className: cx((ValueSection_module_default()), "wrapper_left-text", "mb-40"),
                                tag: "div",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                                        className: cx((ValueSection_module_default()), "h2"),
                                        tag: "h2",
                                        children: "We've got strong values"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                                        className: cx((ValueSection_module_default()), "p"),
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                                className: cx((ValueSection_module_default()), "value-item"),
                                tag: "div",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                                        className: cx((ValueSection_module_default()), "h3"),
                                        tag: "h3",
                                        children: "Integrity"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                                        className: cx((ValueSection_module_default()), "p", "mb-0"),
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                                className: cx((ValueSection_module_default()), "value-item"),
                                tag: "div",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                                        className: cx((ValueSection_module_default()), "h3"),
                                        tag: "h3",
                                        children: "Strength"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                                        className: cx((ValueSection_module_default()), "p", "mb-0"),
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                                className: cx((ValueSection_module_default()), "value-item"),
                                tag: "div",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                                        className: cx((ValueSection_module_default()), "h3"),
                                        tag: "h3",
                                        children: "Honesty"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                                        className: cx((ValueSection_module_default()), "p", "mb-0"),
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Block, {
                                className: cx((ValueSection_module_default()), "value-item"),
                                tag: "div",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                                        className: cx((ValueSection_module_default()), "h3"),
                                        tag: "h3",
                                        children: "Diversity"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                                        className: cx((ValueSection_module_default()), "p", "mb-0"),
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Image, {
                        className: cx((ValueSection_module_default()), "image_stretch", "sticky"),
                        id: cx((ValueSection_module_default()), "w-node-ea0b925a-841c-29b9-3f52-270a7a8fc949-7a8fc92c"),
                        loading: "lazy",
                        width: "auto",
                        height: "auto",
                        src: "https://uploads-ssl.webflow.com/64c9f378fba5cc5ff545eca2/64ca0089a1974f6da42f62b6_pexels-kevin-malik-9032693.jpg"
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./devlink/index.js
/* __next_internal_client_entry_do_not_use__ *,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,*,* auto */ 


























/***/ }),

/***/ 352:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "BlankSection_section__jutpo",
	"dark": "BlankSection_dark__ZADNZ",
	"footer": "BlankSection_footer__RhRzx",
	"container": "BlankSection_container__0ehPT",
	"mw-800": "BlankSection_mw-800__rWow4"
};


/***/ }),

/***/ 2841:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "ButtonFake_button__vroJU",
	"secondary": "ButtonFake_secondary__xr0he",
	"nav": "ButtonFake_nav__G496_",
	"fake": "ButtonFake_fake__264hC"
};


/***/ }),

/***/ 54:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Card_card__Ls1cZ",
	"spaced": "Card_spaced__1OoEF",
	"h3": "Card_h3__q5BKr",
	"p": "Card_p__HmsH6",
	"mb-0": "Card_mb-0__Vobmp",
	"mb-40": "Card_mb-40__EB3D_"
};


/***/ }),

/***/ 6209:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "CardSection_section__0vxFT",
	"dark": "CardSection_dark__hfOWb",
	"footer": "CardSection_footer__9M8wi",
	"container": "CardSection_container__mKlRT",
	"mw-800": "CardSection_mw-800__y77oL",
	"grid_cards": "CardSection_grid_cards__np0Yh",
	"card": "CardSection_card__DDDlJ",
	"spaced": "CardSection_spaced__JvK4A",
	"icon": "CardSection_icon__cU6aK",
	"mb-20": "CardSection_mb-20__l6gqk",
	"h3": "CardSection_h3__euXBM",
	"p": "CardSection_p__fPGyl",
	"mb-0": "CardSection_mb-0___EA1_",
	"mb-40": "CardSection_mb-40__4jVwR",
	"w-node-_1f2592ab-224e-dd95-c9ca-b937c001af0c-c001af09": "CardSection_w-node-_1f2592ab-224e-dd95-c9ca-b937c001af0c-c001af09__Ud8Ek",
	"w-node-_1f2592ab-224e-dd95-c9ca-b937c001af12-c001af09": "CardSection_w-node-_1f2592ab-224e-dd95-c9ca-b937c001af12-c001af09__LLegO",
	"w-node-_1f2592ab-224e-dd95-c9ca-b937c001af18-c001af09": "CardSection_w-node-_1f2592ab-224e-dd95-c9ca-b937c001af18-c001af09__TCuYe"
};


/***/ }),

/***/ 8050:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "ContentSectionRight_section__E0A6T",
	"dark": "ContentSectionRight_dark__vJCik",
	"footer": "ContentSectionRight_footer__GjQsP",
	"container": "ContentSectionRight_container__mkvJB",
	"mw-800": "ContentSectionRight_mw-800__VD4HO",
	"grid_section": "ContentSectionRight_grid_section__Sooa_",
	"reverse": "ContentSectionRight_reverse__Uvdn1",
	"image_hero": "ContentSectionRight_image_hero__BIsHZ",
	"wrapper_left-text": "ContentSectionRight_wrapper_left-text__4zWUa",
	"mb-40": "ContentSectionRight_mb-40__LLPx9",
	"flex-gap_20": "ContentSectionRight_flex-gap_20__y0ddI",
	"h2": "ContentSectionRight_h2__9lOsV",
	"center": "ContentSectionRight_center__IY1AA",
	"p": "ContentSectionRight_p__a56qi",
	"mb-0": "ContentSectionRight_mb-0__7brf8",
	"wrapper_2-buttons": "ContentSectionRight_wrapper_2-buttons__k_p_N",
	"button": "ContentSectionRight_button__22GWC",
	"secondary": "ContentSectionRight_secondary__ByL_V",
	"nav": "ContentSectionRight_nav__2TpzN",
	"fake": "ContentSectionRight_fake__qISox",
	"w-node-_6489429f-9402-d770-42f7-e7892c5754d0-2c5754cd": "ContentSectionRight_w-node-_6489429f-9402-d770-42f7-e7892c5754d0-2c5754cd__FDjqe",
	"w-node-_6489429f-9402-d770-42f7-e7892c5754d1-2c5754cd": "ContentSectionRight_w-node-_6489429f-9402-d770-42f7-e7892c5754d1-2c5754cd__pcICF"
};


/***/ }),

/***/ 9108:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "FaqSection_section__AIlTD",
	"dark": "FaqSection_dark__56nJc",
	"footer": "FaqSection_footer__6WBUO",
	"container": "FaqSection_container__tGumF",
	"mw-800": "FaqSection_mw-800__V71_b",
	"wrapper_left-text": "FaqSection_wrapper_left-text__tTOzK",
	"mb-40": "FaqSection_mb-40__1ifJR",
	"flex-gap_20": "FaqSection_flex-gap_20__Ngyat",
	"h2": "FaqSection_h2__Vz3B_",
	"center": "FaqSection_center__jexJw",
	"p": "FaqSection_p__GbxoF",
	"mb-0": "FaqSection_mb-0__od10y",
	"wrap_faq_all": "FaqSection_wrap_faq_all__n0Eh0",
	"wrap_faq": "FaqSection_wrap_faq__uguxb",
	"wrap_faq_q": "FaqSection_wrap_faq_q__JYG41",
	"h4": "FaqSection_h4__198I5",
	"icon": "FaqSection_icon__Hy7dA",
	"mb-20": "FaqSection_mb-20__iLQ_Z",
	"wrap_faq_a": "FaqSection_wrap_faq_a__x66sH"
};


/***/ }),

/***/ 8148:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "Footer_section__sdA3w",
	"dark": "Footer_dark__8fWNj",
	"footer": "Footer_footer__L2CN8",
	"container": "Footer_container__utKm_",
	"mw-800": "Footer_mw-800__4AyNl",
	"footer-top": "Footer_footer-top__FProT",
	"footer-top_left": "Footer_footer-top_left__jD_qu",
	"navbar_logo-link": "Footer_navbar_logo-link__D8Pjv",
	"logo-code": "Footer_logo-code__QaZv4",
	"grayscale": "Footer_grayscale__gZL7a",
	"hide-mob": "Footer_hide-mob__lOKkr",
	"spacer-20": "Footer_spacer-20__oTAUx",
	"p": "Footer_p__NDuxC",
	"mb-0": "Footer_mb-0__sfZH0",
	"mb-40": "Footer_mb-40__G2jXE",
	"spacer-30": "Footer_spacer-30__naR5x",
	"social_link-wrap": "Footer_social_link-wrap__wX4aD",
	"social-link": "Footer_social-link__zuBkG",
	"social-icon": "Footer_social-icon__gARVL",
	"footer_items-grid": "Footer_footer_items-grid__8S5OB",
	"footer-column": "Footer_footer-column__VpcHZ",
	"footer-link": "Footer_footer-link__gGgym",
	"spacer-40": "Footer_spacer-40__yLWF2",
	"footer-bot": "Footer_footer-bot__suFw8"
};


/***/ }),

/***/ 9151:
/***/ ((module) => {

// Exports
module.exports = {
	"form-block": "FormBlock_form-block__uxQh3"
};


/***/ }),

/***/ 7373:
/***/ ((module) => {

// Exports
module.exports = {
	"h2": "H2_h2__YbL9Z",
	"center": "H2_center__DmAGz"
};


/***/ }),

/***/ 2669:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "Hero_section__zgX9o",
	"dark": "Hero_dark__CEIds",
	"footer": "Hero_footer__JrzeS",
	"container": "Hero_container__EomuO",
	"mw-800": "Hero_mw-800__LCrGh",
	"grid_section": "Hero_grid_section__G9lFw",
	"reverse": "Hero_reverse__1_mgx",
	"wrapper_left-text": "Hero_wrapper_left-text__c7Pbd",
	"mb-40": "Hero_mb-40__A5Vgh",
	"flex-gap_20": "Hero_flex-gap_20___o0A2",
	"h1": "Hero_h1__Go5am",
	"p": "Hero_p__7bFno",
	"mb-0": "Hero_mb-0__PtSKf",
	"wrapper_2-buttons": "Hero_wrapper_2-buttons__F9PyF",
	"button": "Hero_button__gMUEE",
	"secondary": "Hero_secondary__K57G5",
	"nav": "Hero_nav__nexur",
	"fake": "Hero_fake__80oOI",
	"image_hero": "Hero_image_hero__evhJH",
	"w-node-_06a29d81-e628-8800-7847-89bd04d52765-04d52762": "Hero_w-node-_06a29d81-e628-8800-7847-89bd04d52765-04d52762__bittV",
	"w-node-_06a29d81-e628-8800-7847-89bd04d5276f-04d52762": "Hero_w-node-_06a29d81-e628-8800-7847-89bd04d5276f-04d52762__yr6OH"
};


/***/ }),

/***/ 1967:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "HeroFlat_section__pt0k2",
	"dark": "HeroFlat_dark__drFyP",
	"footer": "HeroFlat_footer__1BwLT",
	"container": "HeroFlat_container__8UPlM",
	"mw-800": "HeroFlat_mw-800__jUZaK",
	"h1": "HeroFlat_h1__lgBp5"
};


/***/ }),

/***/ 2722:
/***/ ((module) => {

// Exports
module.exports = {
	"loading-wrap": "LoadingBlock_loading-wrap__7r_eZ",
	"logo": "LoadingBlock_logo__yPGwd",
	"h3": "LoadingBlock_h3__9JATy"
};


/***/ }),

/***/ 5207:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "LogoSection_section__cMuo7",
	"dark": "LogoSection_dark__qINwv",
	"footer": "LogoSection_footer__BVUMv",
	"container": "LogoSection_container__gxVsa",
	"mw-800": "LogoSection_mw-800__fwz8S",
	"wrapper_center-text": "LogoSection_wrapper_center-text__R3_JS",
	"mb-40": "LogoSection_mb-40__HmEDJ",
	"h2": "LogoSection_h2__sDv7b",
	"center": "LogoSection_center__nhfQx",
	"p": "LogoSection_p__Fjldg",
	"mb-0": "LogoSection_mb-0__ig80Z",
	"grid_logos": "LogoSection_grid_logos__v7ugI",
	"logo-code": "LogoSection_logo-code__S4fiU",
	"grayscale": "LogoSection_grayscale___4SZW",
	"hide-mob": "LogoSection_hide-mob__OS11s",
	"w-node-_36c46b65-bec7-ad86-567a-d0c29448d9d3-9448d9cb": "LogoSection_w-node-_36c46b65-bec7-ad86-567a-d0c29448d9d3-9448d9cb__Apgk5",
	"w-node-_36c46b65-bec7-ad86-567a-d0c29448d9d5-9448d9cb": "LogoSection_w-node-_36c46b65-bec7-ad86-567a-d0c29448d9d5-9448d9cb__Q93mW",
	"w-node-_36c46b65-bec7-ad86-567a-d0c29448d9d7-9448d9cb": "LogoSection_w-node-_36c46b65-bec7-ad86-567a-d0c29448d9d7-9448d9cb__TYA9V",
	"w-node-_36c46b65-bec7-ad86-567a-d0c29448d9d9-9448d9cb": "LogoSection_w-node-_36c46b65-bec7-ad86-567a-d0c29448d9d9-9448d9cb__8sDVN",
	"w-node-_36c46b65-bec7-ad86-567a-d0c29448d9db-9448d9cb": "LogoSection_w-node-_36c46b65-bec7-ad86-567a-d0c29448d9db-9448d9cb__ukfmI",
	"w-node-_36c46b65-bec7-ad86-567a-d0c29448d9dd-9448d9cb": "LogoSection_w-node-_36c46b65-bec7-ad86-567a-d0c29448d9dd-9448d9cb__L6I7v",
	"w-node-_36c46b65-bec7-ad86-567a-d0c29448d9df-9448d9cb": "LogoSection_w-node-_36c46b65-bec7-ad86-567a-d0c29448d9df-9448d9cb__WmnGl",
	"w-node-_36c46b65-bec7-ad86-567a-d0c29448d9e1-9448d9cb": "LogoSection_w-node-_36c46b65-bec7-ad86-567a-d0c29448d9e1-9448d9cb__qif_G",
	"w-node-_36c46b65-bec7-ad86-567a-d0c29448d9e3-9448d9cb": "LogoSection_w-node-_36c46b65-bec7-ad86-567a-d0c29448d9e3-9448d9cb__69aiX",
	"w-node-_36c46b65-bec7-ad86-567a-d0c29448d9e5-9448d9cb": "LogoSection_w-node-_36c46b65-bec7-ad86-567a-d0c29448d9e5-9448d9cb__z1WQE",
	"w-node-_36c46b65-bec7-ad86-567a-d0c29448d9e7-9448d9cb": "LogoSection_w-node-_36c46b65-bec7-ad86-567a-d0c29448d9e7-9448d9cb__W3UCd",
	"w-node-_36c46b65-bec7-ad86-567a-d0c29448d9e9-9448d9cb": "LogoSection_w-node-_36c46b65-bec7-ad86-567a-d0c29448d9e9-9448d9cb__ciKEn",
	"w-node-_36c46b65-bec7-ad86-567a-d0c29448d9eb-9448d9cb": "LogoSection_w-node-_36c46b65-bec7-ad86-567a-d0c29448d9eb-9448d9cb__bFrr7",
	"w-node-_36c46b65-bec7-ad86-567a-d0c29448d9ed-9448d9cb": "LogoSection_w-node-_36c46b65-bec7-ad86-567a-d0c29448d9ed-9448d9cb__bFVau",
	"w-node-_36c46b65-bec7-ad86-567a-d0c29448d9ef-9448d9cb": "LogoSection_w-node-_36c46b65-bec7-ad86-567a-d0c29448d9ef-9448d9cb__y4zZo"
};


/***/ }),

/***/ 8167:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "Nav_navbar__aw9Xk",
	"mobile-nav": "Nav_mobile-nav__7F4v4",
	"brand": "Nav_brand__KC8EZ",
	"in-nav": "Nav_in-nav__zukze",
	"animated-hamburger": "Nav_animated-hamburger__fpdTM",
	"hamburger-line": "Nav_hamburger-line__DV4SG",
	"mid": "Nav_mid__2U3SY",
	"_02-nav-menu": "Nav__02-nav-menu__ugUCT",
	"nav-menu-center": "Nav_nav-menu-center__YgMTy",
	"nav-link": "Nav_nav-link__aAKWN",
	"nav-button-wrap": "Nav_nav-button-wrap__2RRA3",
	"button": "Nav_button____s7D",
	"secondary": "Nav_secondary__tzKKs",
	"nav": "Nav_nav__Y_zqM",
	"fake": "Nav_fake__ZPJUf",
	"shadow": "Nav_shadow__KJB2g"
};


/***/ }),

/***/ 7982:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "NavMember_navbar__sJwjM",
	"mobile-nav": "NavMember_mobile-nav__qHO8e",
	"brand": "NavMember_brand__9UJwm",
	"in-nav": "NavMember_in-nav__oQhnz",
	"animated-hamburger": "NavMember_animated-hamburger__jQxW3",
	"hamburger-line": "NavMember_hamburger-line__kT1bF",
	"mid": "NavMember_mid__x7Cd2",
	"_02-nav-menu": "NavMember__02-nav-menu__kMpK1",
	"nav-menu-center": "NavMember_nav-menu-center__7LV2y",
	"nav-link": "NavMember_nav-link__pcZI2",
	"nav-button-wrap": "NavMember_nav-button-wrap__9Uuri",
	"shadow": "NavMember_shadow___Bvgy"
};


/***/ }),

/***/ 554:
/***/ ((module) => {

// Exports
module.exports = {
	"pencil-bar": "PencilBar_pencil-bar__XswuN"
};


/***/ }),

/***/ 434:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "PricingSection_section__6MW6K",
	"dark": "PricingSection_dark__9doQ_",
	"footer": "PricingSection_footer__I9lx2",
	"container": "PricingSection_container____iiz",
	"mw-800": "PricingSection_mw-800__yLQSz",
	"wrapper_center-text": "PricingSection_wrapper_center-text__inHkc",
	"mb-40": "PricingSection_mb-40__MR_ew",
	"h2": "PricingSection_h2__BlIu0",
	"center": "PricingSection_center__UcFN_",
	"p": "PricingSection_p__qbxl0",
	"mb-0": "PricingSection_mb-0__ADN_W",
	"grid_cards": "PricingSection_grid_cards__ohXtb",
	"card_pricing": "PricingSection_card_pricing__htfHH",
	"featured": "PricingSection_featured__xPg0A",
	"price": "PricingSection_price__ntKxo",
	"h3": "PricingSection_h3__XjsW_",
	"feature-list": "PricingSection_feature-list__gyWOl",
	"feature-wrap": "PricingSection_feature-wrap__oMYJY",
	"icon-3": "PricingSection_icon-3__cklhj",
	"feature-label": "PricingSection_feature-label__nqpyR",
	"button": "PricingSection_button__RMBkT",
	"secondary": "PricingSection_secondary__g5_S9",
	"nav": "PricingSection_nav__kEsT2",
	"fake": "PricingSection_fake__aqCo5",
	"featured-text": "PricingSection_featured-text__D86yW",
	"w-node-_955ecdb6-d1c5-20ac-27ed-c6784ab4889c-4ab48894": "PricingSection_w-node-_955ecdb6-d1c5-20ac-27ed-c6784ab4889c-4ab48894__OfWMr",
	"w-node-_955ecdb6-d1c5-20ac-27ed-c6784ab488b4-4ab48894": "PricingSection_w-node-_955ecdb6-d1c5-20ac-27ed-c6784ab488b4-4ab48894__rRSQd",
	"w-node-_955ecdb6-d1c5-20ac-27ed-c6784ab488d2-4ab48894": "PricingSection_w-node-_955ecdb6-d1c5-20ac-27ed-c6784ab488d2-4ab48894__O_nUc"
};


/***/ }),

/***/ 2170:
/***/ ((module) => {

// Exports
module.exports = {
	"input-wrap": "TextInput_input-wrap__FSLuA",
	"input": "TextInput_input__UKWyU",
	"textarea": "TextInput_textarea__d1OwW"
};


/***/ }),

/***/ 7193:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "ValueSection_section__WSpps",
	"dark": "ValueSection_dark__CPC1G",
	"footer": "ValueSection_footer__Lmkp9",
	"container": "ValueSection_container__pvoHY",
	"mw-800": "ValueSection_mw-800__Qv3h8",
	"grid_values": "ValueSection_grid_values__oQGG7",
	"wrapper_left-text": "ValueSection_wrapper_left-text__l7sgQ",
	"mb-40": "ValueSection_mb-40__j6Ecw",
	"flex-gap_20": "ValueSection_flex-gap_20__sWaD5",
	"h2": "ValueSection_h2__jUIpw",
	"center": "ValueSection_center__pO4Fb",
	"p": "ValueSection_p__ZXjD6",
	"mb-0": "ValueSection_mb-0__pODKQ",
	"value-item": "ValueSection_value-item__0LiYz",
	"h3": "ValueSection_h3__0_Rig",
	"image_stretch": "ValueSection_image_stretch__e2lg7",
	"sticky": "ValueSection_sticky__E3J0W",
	"w-node-ea0b925a-841c-29b9-3f52-270a7a8fc92f-7a8fc92c": "ValueSection_w-node-ea0b925a-841c-29b9-3f52-270a7a8fc92f-7a8fc92c__TUA0y",
	"w-node-ea0b925a-841c-29b9-3f52-270a7a8fc949-7a8fc92c": "ValueSection_w-node-ea0b925a-841c-29b9-3f52-270a7a8fc949-7a8fc92c__P6S_6"
};


/***/ }),

/***/ 1921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/julian/Desktop/react-apps/notes-app/app/layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 2290:
/***/ (() => {



/***/ })

};
;