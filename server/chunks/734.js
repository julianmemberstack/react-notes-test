exports.id = 734;
exports.ids = [734];
exports.modules = {

/***/ 2617:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.onAuthChange = exports.unsetPersistedMember = exports.updatePersistedMember = exports.setPersistedMember = exports.getPersistedMember = void 0;
var cookies_1 = __webpack_require__(9992);
var createObservable = function () {
    var observer = new Map();
    return {
        subscribe: function (key, fn) {
            if (typeof fn !== "function")
                return;
            return observer.set(key, fn);
        },
        unsubscribe: function (key) {
            return observer.delete(key);
        },
        notify: function (data) {
            return __spreadArray([], __read(observer.values()), false).forEach(function (fn) { return fn(data); });
        },
    };
};
var observable = createObservable();
var getPersistedMember = function () {
    return JSON.parse(localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem("_ms-mem"));
};
exports.getPersistedMember = getPersistedMember;
var setPersistedMember = function (member) {
    if (member) {
        var data = JSON.stringify(member);
        if (data)
            localStorage === null || localStorage === void 0 ? void 0 : localStorage.setItem("_ms-mem", data);
        observable.notify(member);
    }
};
exports.setPersistedMember = setPersistedMember;
var updatePersistedMember = function (member) {
    if (member) {
        var data = JSON.stringify(member);
        if (data)
            localStorage === null || localStorage === void 0 ? void 0 : localStorage.setItem("_ms-mem", data);
    }
    else {
        localStorage === null || localStorage === void 0 ? void 0 : localStorage.removeItem("_ms-mem");
        (0, cookies_1.removeMemberToken)();
    }
};
exports.updatePersistedMember = updatePersistedMember;
var unsetPersistedMember = function () {
    localStorage === null || localStorage === void 0 ? void 0 : localStorage.removeItem("_ms-mem");
    (0, cookies_1.removeMemberToken)();
    observable.notify(null);
};
exports.unsetPersistedMember = unsetPersistedMember;
var onAuthChange = function (cb) {
    var id = Math.floor(Math.random() * 1000);
    observable.subscribe(id, cb);
    return {
        unsubscribe: function () { return observable.unsubscribe(id); },
    };
};
exports.onAuthChange = onAuthChange;


/***/ }),

/***/ 5140:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.endpoints = void 0;
exports.endpoints = {
    API: "https://client.memberstack.com"
};


/***/ }),

/***/ 7229:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var methods_1 = __importDefault(__webpack_require__(5535));
exports["default"] = { init: methods_1.default.init };


/***/ }),

/***/ 2311:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = void 0;
function noop() { }
var identity = function (x) { return x; };
function assign(tar, src) {
    // @ts-ignore
    for (var k in src)
        tar[k] = src[k];
    return tar;
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === 'function';
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
var src_url_equal_anchor;
function src_url_equal(element_src, url) {
    if (!src_url_equal_anchor) {
        src_url_equal_anchor = document.createElement('a');
    }
    src_url_equal_anchor.href = url;
    return element_src === src_url_equal_anchor.href;
}
function is_empty(obj) {
    return Object.keys(obj).length === 0;
}
function subscribe(store) {
    var callbacks = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        callbacks[_i - 1] = arguments[_i];
    }
    if (store == null) {
        return noop;
    }
    var unsub = store.subscribe.apply(store, __spreadArray([], __read(callbacks), false));
    return unsub.unsubscribe ? function () { return unsub.unsubscribe(); } : unsub;
}
function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
}
function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
        var slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
        return definition[0](slot_ctx);
    }
}
function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn
        ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
        : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
        var lets = definition[2](fn(dirty));
        if ($$scope.dirty === undefined) {
            return lets;
        }
        if (typeof lets === 'object') {
            var merged = [];
            var len = Math.max($$scope.dirty.length, lets.length);
            for (var i = 0; i < len; i += 1) {
                merged[i] = $$scope.dirty[i] | lets[i];
            }
            return merged;
        }
        return $$scope.dirty | lets;
    }
    return $$scope.dirty;
}
function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
    if (slot_changes) {
        var slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
        slot.p(slot_context, slot_changes);
    }
}
function get_all_dirty_from_scope($$scope) {
    if ($$scope.ctx.length > 32) {
        var dirty = [];
        var length_1 = $$scope.ctx.length / 32;
        for (var i = 0; i < length_1; i++) {
            dirty[i] = -1;
        }
        return dirty;
    }
    return -1;
}
function exclude_internal_props(props) {
    var result = {};
    for (var k in props)
        if (k[0] !== '$')
            result[k] = props[k];
    return result;
}
function compute_rest_props(props, keys) {
    var rest = {};
    keys = new Set(keys);
    for (var k in props)
        if (!keys.has(k) && k[0] !== '$')
            rest[k] = props[k];
    return rest;
}
var is_client = typeof window !== 'undefined';
var now = is_client
    ? function () { return window.performance.now(); }
    : function () { return Date.now(); };
var raf = is_client ? function (cb) { return requestAnimationFrame(cb); } : noop;
var tasks = new Set();
function run_tasks(now) {
    tasks.forEach(function (task) {
        if (!task.c(now)) {
            tasks.delete(task);
            task.f();
        }
    });
    if (tasks.size !== 0)
        raf(run_tasks);
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */
function loop(callback) {
    var task;
    if (tasks.size === 0)
        raf(run_tasks);
    return {
        promise: new Promise(function (fulfill) {
            tasks.add(task = { c: callback, f: fulfill });
        }),
        abort: function () {
            tasks.delete(task);
        }
    };
}
function append(target, node) {
    target.appendChild(node);
}
function append_styles(target, style_sheet_id, styles) {
    var append_styles_to = get_root_for_style(target);
    if (!append_styles_to.getElementById(style_sheet_id)) {
        var style = element('style');
        style.id = style_sheet_id;
        style.textContent = styles;
        append_stylesheet(append_styles_to, style);
    }
}
function get_root_for_style(node) {
    if (!node)
        return document;
    var root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
    if (root && root.host) {
        return root;
    }
    return node.ownerDocument;
}
function append_empty_stylesheet(node) {
    var style_element = element('style');
    append_stylesheet(get_root_for_style(node), style_element);
    return style_element.sheet;
}
function append_stylesheet(node, style) {
    append(node.head || node, style);
}
function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function detach(node) {
    node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
    for (var i = 0; i < iterations.length; i += 1) {
        if (iterations[i])
            iterations[i].d(detaching);
    }
}
function element(name) {
    return document.createElement(name);
}
function svg_element(name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
}
function text(data) {
    return document.createTextNode(data);
}
function space() {
    return text(' ');
}
function empty() {
    return text('');
}
function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return function () { return node.removeEventListener(event, handler, options); };
}
function prevent_default(fn) {
    return function (event) {
        event.preventDefault();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function stop_propagation(fn) {
    return function (event) {
        event.stopPropagation();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function attr(node, attribute, value) {
    if (value == null)
        node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
        node.setAttribute(attribute, value);
}
function children(element) {
    return Array.from(element.childNodes);
}
function set_data(text, data) {
    data = '' + data;
    if (text.wholeText !== data)
        text.data = data;
}
function set_input_value(input, value) {
    input.value = value == null ? '' : value;
}
function set_style(node, key, value, important) {
    if (value === null) {
        node.style.removeProperty(key);
    }
    else {
        node.style.setProperty(key, value, important ? 'important' : '');
    }
}
function toggle_class(element, name, toggle) {
    element.classList[toggle ? 'add' : 'remove'](name);
}
function custom_event(type, detail, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.bubbles, bubbles = _c === void 0 ? false : _c, _d = _b.cancelable, cancelable = _d === void 0 ? false : _d;
    var e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, bubbles, cancelable, detail);
    return e;
}
// we need to store the information for multiple documents because a Svelte application could also contain iframes
// https://github.com/sveltejs/svelte/issues/3624
var managed_styles = new Map();
var active = 0;
// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
    var hash = 5381;
    var i = str.length;
    while (i--)
        hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
    return hash >>> 0;
}
function create_style_information(doc, node) {
    var info = { stylesheet: append_empty_stylesheet(node), rules: {} };
    managed_styles.set(doc, info);
    return info;
}
function create_rule(node, a, b, duration, delay, ease, fn, uid) {
    if (uid === void 0) { uid = 0; }
    var step = 16.666 / duration;
    var keyframes = '{\n';
    for (var p = 0; p <= 1; p += step) {
        var t = a + (b - a) * ease(p);
        keyframes += p * 100 + "%{".concat(fn(t, 1 - t), "}\n");
    }
    var rule = keyframes + "100% {".concat(fn(b, 1 - b), "}\n}");
    var name = "__svelte_".concat(hash(rule), "_").concat(uid);
    var doc = get_root_for_style(node);
    var _a = managed_styles.get(doc) || create_style_information(doc, node), stylesheet = _a.stylesheet, rules = _a.rules;
    if (!rules[name]) {
        rules[name] = true;
        stylesheet.insertRule("@keyframes ".concat(name, " ").concat(rule), stylesheet.cssRules.length);
    }
    var animation = node.style.animation || '';
    node.style.animation = "".concat(animation ? "".concat(animation, ", ") : '').concat(name, " ").concat(duration, "ms linear ").concat(delay, "ms 1 both");
    active += 1;
    return name;
}
function delete_rule(node, name) {
    var previous = (node.style.animation || '').split(', ');
    var next = previous.filter(name
        ? function (anim) { return anim.indexOf(name) < 0; } // remove specific animation
        : function (anim) { return anim.indexOf('__svelte') === -1; } // remove all Svelte animations
    );
    var deleted = previous.length - next.length;
    if (deleted) {
        node.style.animation = next.join(', ');
        active -= deleted;
        if (!active)
            clear_rules();
    }
}
function clear_rules() {
    raf(function () {
        if (active)
            return;
        managed_styles.forEach(function (info) {
            var stylesheet = info.stylesheet;
            var i = stylesheet.cssRules.length;
            while (i--)
                stylesheet.deleteRule(i);
            info.rules = {};
        });
        managed_styles.clear();
    });
}
var current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error('Function called outside component initialization');
    return current_component;
}
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
}
var dirty_components = [];
var binding_callbacks = [];
var render_callbacks = [];
var flush_callbacks = [];
var resolved_promise = Promise.resolve();
var update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
function add_flush_callback(fn) {
    flush_callbacks.push(fn);
}
// flush() calls callbacks in this order:
// 1. All beforeUpdate callbacks, in order: parents before children
// 2. All bind:this callbacks, in reverse order: children before parents.
// 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
//    for afterUpdates called during the initial onMount, which are called in
//    reverse order: children before parents.
// Since callbacks might update component values, which could trigger another
// call to flush(), the following steps guard against this:
// 1. During beforeUpdate, any updated components will be added to the
//    dirty_components array and will cause a reentrant call to flush(). Because
//    the flush index is kept outside the function, the reentrant call will pick
//    up where the earlier call left off and go through all dirty components. The
//    current_component value is saved and restored so that the reentrant call will
//    not interfere with the "parent" flush() call.
// 2. bind:this callbacks cannot trigger new flush() calls.
// 3. During afterUpdate, any updated components will NOT have their afterUpdate
//    callback called a second time; the seen_callbacks set, outside the flush()
//    function, guarantees this behavior.
var seen_callbacks = new Set();
var flushidx = 0; // Do *not* move this inside the flush() function
function flush() {
    var saved_component = current_component;
    do {
        // first, call beforeUpdate functions
        // and update components
        while (flushidx < dirty_components.length) {
            var component = dirty_components[flushidx];
            flushidx++;
            set_current_component(component);
            update(component.$$);
        }
        set_current_component(null);
        dirty_components.length = 0;
        flushidx = 0;
        while (binding_callbacks.length)
            binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for (var i = 0; i < render_callbacks.length; i += 1) {
            var callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
                callback();
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
        flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
}
function update($$) {
    if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        var dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
    }
}
var promise;
function wait() {
    if (!promise) {
        promise = Promise.resolve();
        promise.then(function () {
            promise = null;
        });
    }
    return promise;
}
function dispatch(node, direction, kind) {
    node.dispatchEvent(custom_event("".concat(direction ? 'intro' : 'outro').concat(kind)));
}
var outroing = new Set();
var outros;
function group_outros() {
    outros = {
        r: 0,
        c: [],
        p: outros // parent group
    };
}
function check_outros() {
    if (!outros.r) {
        run_all(outros.c);
    }
    outros = outros.p;
}
function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}
function transition_out(block, local, detach, callback) {
    if (block && block.o) {
        if (outroing.has(block))
            return;
        outroing.add(block);
        outros.c.push(function () {
            outroing.delete(block);
            if (callback) {
                if (detach)
                    block.d(1);
                callback();
            }
        });
        block.o(local);
    }
}
var null_transition = { duration: 0 };
function create_bidirectional_transition(node, fn, params, intro) {
    var config = fn(node, params);
    var t = intro ? 0 : 1;
    var running_program = null;
    var pending_program = null;
    var animation_name = null;
    function clear_animation() {
        if (animation_name)
            delete_rule(node, animation_name);
    }
    function init(program, duration) {
        var d = (program.b - t);
        duration *= Math.abs(d);
        return {
            a: t,
            b: program.b,
            d: d,
            duration: duration,
            start: program.start,
            end: program.start + duration,
            group: program.group
        };
    }
    function go(b) {
        var _a = config || null_transition, _b = _a.delay, delay = _b === void 0 ? 0 : _b, _c = _a.duration, duration = _c === void 0 ? 300 : _c, _d = _a.easing, easing = _d === void 0 ? identity : _d, _e = _a.tick, tick = _e === void 0 ? noop : _e, css = _a.css;
        var program = {
            start: now() + delay,
            b: b
        };
        if (!b) {
            // @ts-ignore todo: improve typings
            program.group = outros;
            outros.r += 1;
        }
        if (running_program || pending_program) {
            pending_program = program;
        }
        else {
            // if this is an intro, and there's a delay, we need to do
            // an initial tick and/or apply CSS animation immediately
            if (css) {
                clear_animation();
                animation_name = create_rule(node, t, b, duration, delay, easing, css);
            }
            if (b)
                tick(0, 1);
            running_program = init(program, duration);
            add_render_callback(function () { return dispatch(node, b, 'start'); });
            loop(function (now) {
                if (pending_program && now > pending_program.start) {
                    running_program = init(pending_program, duration);
                    pending_program = null;
                    dispatch(node, running_program.b, 'start');
                    if (css) {
                        clear_animation();
                        animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
                    }
                }
                if (running_program) {
                    if (now >= running_program.end) {
                        tick(t = running_program.b, 1 - t);
                        dispatch(node, running_program.b, 'end');
                        if (!pending_program) {
                            // we're done
                            if (running_program.b) {
                                // intro — we can tidy up immediately
                                clear_animation();
                            }
                            else {
                                // outro — needs to be coordinated
                                if (!--running_program.group.r)
                                    run_all(running_program.group.c);
                            }
                        }
                        running_program = null;
                    }
                    else if (now >= running_program.start) {
                        var p = now - running_program.start;
                        t = running_program.a + running_program.d * easing(p / running_program.duration);
                        tick(t, 1 - t);
                    }
                }
                return !!(running_program || pending_program);
            });
        }
    }
    return {
        run: function (b) {
            if (is_function(config)) {
                wait().then(function () {
                    // @ts-ignore
                    config = config();
                    go(b);
                });
            }
            else {
                go(b);
            }
        },
        end: function () {
            clear_animation();
            running_program = pending_program = null;
        }
    };
}
function destroy_block(block, lookup) {
    block.d(1);
    lookup.delete(block.key);
}
function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
    var o = old_blocks.length;
    var n = list.length;
    var i = o;
    var old_indexes = {};
    while (i--)
        old_indexes[old_blocks[i].key] = i;
    var new_blocks = [];
    var new_lookup = new Map();
    var deltas = new Map();
    i = n;
    while (i--) {
        var child_ctx = get_context(ctx, list, i);
        var key = get_key(child_ctx);
        var block = lookup.get(key);
        if (!block) {
            block = create_each_block(key, child_ctx);
            block.c();
        }
        else if (dynamic) {
            block.p(child_ctx, dirty);
        }
        new_lookup.set(key, new_blocks[i] = block);
        if (key in old_indexes)
            deltas.set(key, Math.abs(i - old_indexes[key]));
    }
    var will_move = new Set();
    var did_move = new Set();
    function insert(block) {
        transition_in(block, 1);
        block.m(node, next);
        lookup.set(block.key, block);
        next = block.first;
        n--;
    }
    while (o && n) {
        var new_block = new_blocks[n - 1];
        var old_block = old_blocks[o - 1];
        var new_key = new_block.key;
        var old_key = old_block.key;
        if (new_block === old_block) {
            // do nothing
            next = new_block.first;
            o--;
            n--;
        }
        else if (!new_lookup.has(old_key)) {
            // remove old block
            destroy(old_block, lookup);
            o--;
        }
        else if (!lookup.has(new_key) || will_move.has(new_key)) {
            insert(new_block);
        }
        else if (did_move.has(old_key)) {
            o--;
        }
        else if (deltas.get(new_key) > deltas.get(old_key)) {
            did_move.add(new_key);
            insert(new_block);
        }
        else {
            will_move.add(old_key);
            o--;
        }
    }
    while (o--) {
        var old_block = old_blocks[o];
        if (!new_lookup.has(old_block.key))
            destroy(old_block, lookup);
    }
    while (n)
        insert(new_blocks[n - 1]);
    return new_blocks;
}
function bind(component, name, callback) {
    var index = component.$$.props[name];
    if (index !== undefined) {
        component.$$.bound[index] = callback;
        callback(component.$$.ctx[index]);
    }
}
function create_component(block) {
    block && block.c();
}
function mount_component(component, target, anchor, customElement) {
    var _a = component.$$, fragment = _a.fragment, on_mount = _a.on_mount, on_destroy = _a.on_destroy, after_update = _a.after_update;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
        // onMount happens before the initial afterUpdate
        add_render_callback(function () {
            var new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push.apply(on_destroy, __spreadArray([], __read(new_on_destroy), false));
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
    }
    after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    var $$ = component.$$;
    if ($$.fragment !== null) {
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
    }
}
function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
    }
    component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
}
function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty) {
    if (dirty === void 0) { dirty = [-1]; }
    var parent_component = current_component;
    set_current_component(component);
    var $$ = component.$$ = {
        fragment: null,
        ctx: null,
        // state
        props: props,
        update: noop,
        not_equal: not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
        // everything else
        callbacks: blank_object(),
        dirty: dirty,
        skip_bound: false,
        root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    var ready = false;
    $$.ctx = instance
        ? instance(component, options.props || {}, function (i, ret) {
            var rest = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                rest[_i - 2] = arguments[_i];
            }
            var value = rest.length ? rest[0] : ret;
            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                if (!$$.skip_bound && $$.bound[i])
                    $$.bound[i](value);
                if (ready)
                    make_dirty(component, i);
            }
            return ret;
        })
        : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    // `false` as a special case of no DOM component
    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
    if (options.target) {
        if (options.hydrate) {
            var nodes = children(options.target);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.l(nodes);
            nodes.forEach(detach);
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.c();
        }
        if (options.intro)
            transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor, options.customElement);
        flush();
    }
    set_current_component(parent_component);
}
/**
 * Base class for Svelte components. Used when dev=false.
 */
var SvelteComponent = /** @class */ (function () {
    function SvelteComponent() {
    }
    SvelteComponent.prototype.$destroy = function () {
        destroy_component(this, 1);
        this.$destroy = noop;
    };
    SvelteComponent.prototype.$on = function (type, callback) {
        var callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
        callbacks.push(callback);
        return function () {
            var index = callbacks.indexOf(callback);
            if (index !== -1)
                callbacks.splice(index, 1);
        };
    };
    SvelteComponent.prototype.$set = function ($$props) {
        if (this.$$set && !is_empty($$props)) {
            this.$$.skip_bound = true;
            this.$$set($$props);
            this.$$.skip_bound = false;
        }
    };
    return SvelteComponent;
}());
var subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start) {
    if (start === void 0) { start = noop; }
    var stop;
    var subscribers = new Set();
    function set(new_value) {
        var e_1, _a;
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                var run_queue = !subscriber_queue.length;
                try {
                    for (var subscribers_1 = __values(subscribers), subscribers_1_1 = subscribers_1.next(); !subscribers_1_1.done; subscribers_1_1 = subscribers_1.next()) {
                        var subscriber = subscribers_1_1.value;
                        subscriber[1]();
                        subscriber_queue.push(subscriber, value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (subscribers_1_1 && !subscribers_1_1.done && (_a = subscribers_1.return)) _a.call(subscribers_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (run_queue) {
                    for (var i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate) {
        if (invalidate === void 0) { invalidate = noop; }
        var subscriber = [run, invalidate];
        subscribers.add(subscriber);
        if (subscribers.size === 1) {
            stop = start(set) || noop;
        }
        run(value);
        return function () {
            subscribers.delete(subscriber);
            if (subscribers.size === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set: set, update: update, subscribe: subscribe };
}
var AppStore = writable({
    initialValue: true,
    customFields: [],
    isPaid: false,
    branding: {
        logo: "",
        colors: {
            lightMode: {},
        }
    },
    authProviders: [],
    additionalAuthMethods: {
        passwordless: {
            enabled: false,
            isDefault: false
        }
    }
});
var TextStore = writable({
    text: {
    // "login_to_your_account": "Login to your account (T)",
    // "dont_have_an_account": "Don't have an account? (T)",
    // "email_address": "Email Address (T)",
    // "email_error_message": "Please enter a valid email address (T)",
    // "password": "Password (T)",
    // "password_placeholder": "Enter password (T)",
    // "password_error_message": "Minimum 8 characters required (T)",
    // "forgot_password": "Forgot password? (T)",
    // "login": "Log in (T)",
    // "continue_with": "Continue with (T)",
    // "or": "or (T)",
    // "reset_your_password": "Reset your password (T)",
    // "reset_instructions": "We’ll email you a secure link to reset the password for your account. (T)",
    // "reset": "Send link (T)",
    // "reset_already_have_code": "I already have a code (T)",
    // "reset_enter_code": "Enter your 6-digit code (T)",
    // "reset_confirm_reset": "Confirm & Reset (T)",
    }
});
/* src/components/MediaQuery.svelte generated by Svelte v3.48.0 */
var get_default_slot_changes = function (dirty) { return ({ matches: dirty & /*matches*/ 1 }); };
var get_default_slot_context = function (ctx) { return ({ matches: /*matches*/ ctx[0] }); };
function create_fragment$K(ctx) {
    var current;
    var default_slot_template = /*#slots*/ ctx[4].default;
    var default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], get_default_slot_context);
    return {
        c: function () {
            if (default_slot)
                default_slot.c();
        },
        m: function (target, anchor) {
            if (default_slot) {
                default_slot.m(target, anchor);
            }
            current = true;
        },
        p: function (ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if (default_slot) {
                if (default_slot.p && (!current || dirty & /*$$scope, matches*/ 9)) {
                    update_slot_base(default_slot, default_slot_template, ctx, 
                    /*$$scope*/ ctx[3], !current
                        ? get_all_dirty_from_scope(/*$$scope*/ ctx[3])
                        : get_slot_changes(default_slot_template, /*$$scope*/ ctx[3], dirty, get_default_slot_changes), get_default_slot_context);
                }
            }
        },
        i: function (local) {
            if (current)
                return;
            transition_in(default_slot, local);
            current = true;
        },
        o: function (local) {
            transition_out(default_slot, local);
            current = false;
        },
        d: function (detaching) {
            if (default_slot)
                default_slot.d(detaching);
        }
    };
}
function instance$q($$self, $$props, $$invalidate) {
    var _a = $$props.$$slots, slots = _a === void 0 ? {} : _a, $$scope = $$props.$$scope;
    var query = $$props.query;
    var mql;
    var mqlListener;
    var wasMounted = false;
    var matches = false;
    onMount(function () {
        $$invalidate(2, wasMounted = true);
        return function () {
            removeActiveListener();
        };
    });
    function addNewListener(query) {
        mql = window.matchMedia(query);
        mqlListener = function (v) { return $$invalidate(0, matches = v.matches); };
        mql.addListener(mqlListener);
        $$invalidate(0, matches = mql.matches);
    }
    function removeActiveListener() {
        if (mql && mqlListener) {
            mql.removeListener(mqlListener);
        }
    }
    $$self.$$set = function ($$props) {
        if ('query' in $$props)
            $$invalidate(1, query = $$props.query);
        if ('$$scope' in $$props)
            $$invalidate(3, $$scope = $$props.$$scope);
    };
    $$self.$$.update = function () {
        if ($$self.$$.dirty & /*wasMounted, query*/ 6) {
            {
                if (wasMounted) {
                    removeActiveListener();
                    addNewListener(query);
                }
            }
        }
    };
    return [matches, query, wasMounted, $$scope, slots];
}
var MediaQuery = /** @class */ (function (_super) {
    __extends(MediaQuery, _super);
    function MediaQuery(options) {
        var _this = _super.call(this) || this;
        init(_this, options, instance$q, create_fragment$K, safe_not_equal, { query: 1 });
        return _this;
    }
    return MediaQuery;
}(SvelteComponent));
/* src/icons/LoadingIcon.svelte generated by Svelte v3.48.0 */
function create_fragment$J(ctx) {
    var svg;
    var path;
    var animateTransform;
    return {
        c: function () {
            svg = svg_element("svg");
            path = svg_element("path");
            animateTransform = svg_element("animateTransform");
            attr(animateTransform, "attributeName", "transform");
            attr(animateTransform, "attributeType", "xml");
            attr(animateTransform, "dur", "0.6s");
            attr(animateTransform, "from", "0 25 25");
            attr(animateTransform, "repeatCount", "indefinite");
            attr(animateTransform, "to", "360 25 25");
            attr(animateTransform, "type", "rotate");
            attr(path, "fill", "currentColor");
            attr(path, "d", "m43.935 25.145c0-10.318-8.364-18.683-18.683-18.683-10.318 0-18.683 8.365-18.683 18.683h4.068c0-8.071 6.543-14.615 14.615-14.615s14.615 6.543 14.615 14.615h4.068z");
            attr(svg, "width", "40px");
            attr(svg, "height", "40px");
            attr(svg, "enable-background", "new 0 0 50 50");
            set_style(svg, "z-index", "1000000");
            attr(svg, "version", "1.1");
            attr(svg, "viewBox", "0 0 50 50");
            attr(svg, "xml:space", "preserve");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
        },
        m: function (target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
            append(path, animateTransform);
        },
        p: noop,
        i: noop,
        o: noop,
        d: function (detaching) {
            if (detaching)
                detach(svg);
        }
    };
}
var LoadingIcon = /** @class */ (function (_super) {
    __extends(LoadingIcon, _super);
    function LoadingIcon(options) {
        var _this = _super.call(this) || this;
        init(_this, options, null, create_fragment$J, safe_not_equal, {});
        return _this;
    }
    return LoadingIcon;
}(SvelteComponent));
/* src/components/Loader.svelte generated by Svelte v3.48.0 */
function create_fragment$I(ctx) {
    var div;
    var loadingicon;
    var current;
    loadingicon = new LoadingIcon({});
    return {
        c: function () {
            div = element("div");
            create_component(loadingicon.$$.fragment);
            attr(div, "class", "ms__loader");
        },
        m: function (target, anchor) {
            insert(target, div, anchor);
            mount_component(loadingicon, div, null);
            current = true;
        },
        p: noop,
        i: function (local) {
            if (current)
                return;
            transition_in(loadingicon.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(loadingicon.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div);
            destroy_component(loadingicon);
        }
    };
}
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader(options) {
        var _this = _super.call(this) || this;
        init(_this, options, null, create_fragment$I, safe_not_equal, {});
        return _this;
    }
    return Loader;
}(SvelteComponent));
/* src/icons/CloseIcon.svelte generated by Svelte v3.48.0 */
function create_fragment$H(ctx) {
    var svg;
    var path;
    return {
        c: function () {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "fill", "currentColor");
            attr(path, "shape-rendering", "geometricPrecision");
            attr(path, "d", "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z");
            attr(svg, "fill", "none");
            set_style(svg, "width", "100%");
            attr(svg, "viewBox", "0 0 14 14");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
        },
        m: function (target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
        },
        p: noop,
        i: noop,
        o: noop,
        d: function (detaching) {
            if (detaching)
                detach(svg);
        }
    };
}
var CloseIcon = /** @class */ (function (_super) {
    __extends(CloseIcon, _super);
    function CloseIcon(options) {
        var _this = _super.call(this) || this;
        init(_this, options, null, create_fragment$H, safe_not_equal, {});
        return _this;
    }
    return CloseIcon;
}(SvelteComponent));
/* src/components/CloseButton.svelte generated by Svelte v3.48.0 */
function create_fragment$G(ctx) {
    var div;
    var button;
    var closeicon;
    var current;
    var mounted;
    var dispose;
    closeicon = new CloseIcon({});
    return {
        c: function () {
            div = element("div");
            button = element("button");
            create_component(closeicon.$$.fragment);
            attr(div, "class", "ms-modal__close");
        },
        m: function (target, anchor) {
            insert(target, div, anchor);
            append(div, button);
            mount_component(closeicon, button, null);
            current = true;
            if (!mounted) {
                dispose = listen(button, "click", function () {
                    if (is_function(/*closeModal*/ ctx[0])) /*closeModal*/
                        ctx[0].apply(this, arguments);
                });
                mounted = true;
            }
        },
        p: function (new_ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            ctx = new_ctx;
        },
        i: function (local) {
            if (current)
                return;
            transition_in(closeicon.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(closeicon.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div);
            destroy_component(closeicon);
            mounted = false;
            dispose();
        }
    };
}
function instance$p($$self, $$props, $$invalidate) {
    var closeModal = $$props.closeModal;
    $$self.$$set = function ($$props) {
        if ('closeModal' in $$props)
            $$invalidate(0, closeModal = $$props.closeModal);
    };
    return [closeModal];
}
var CloseButton = /** @class */ (function (_super) {
    __extends(CloseButton, _super);
    function CloseButton(options) {
        var _this = _super.call(this) || this;
        init(_this, options, instance$p, create_fragment$G, safe_not_equal, { closeModal: 0 });
        return _this;
    }
    return CloseButton;
}(SvelteComponent));
/* src/icons/MemberstackIcon.svelte generated by Svelte v3.48.0 */
function create_fragment$F(ctx) {
    var svg;
    var path0;
    var path1;
    var path2;
    var path3;
    var path4;
    var path5;
    return {
        c: function () {
            svg = svg_element("svg");
            path0 = svg_element("path");
            path1 = svg_element("path");
            path2 = svg_element("path");
            path3 = svg_element("path");
            path4 = svg_element("path");
            path5 = svg_element("path");
            attr(path0, "d", "m259.078 190.582 16.797-39.611c7.315-20.421 26.982-34.665 49.897-34.665 13.187 0 25.344 4.817 34.6 12.818l32.818 73.118c9.656 21.709-.097 47.144-21.786 56.809-21.688 9.666-47.097-.098-56.753-21.807l-38.573-86.723-17 40.088v-.027Z");
            attr(path0, "fill", "#2AA8FF");
            attr(path1, "d", "m111.31 169.64 8.002-18.679c-7.22-20.585-26.82-35.345-49.866-35.345-12.678 0-24.901 4.865-34.007 12.314 6.6063-2.796 14.34-3.575 21.988-3.575 26.999 0 49.435 19.445 53.884 45.285z");
            attr(path2, "d", "m111.31 169.64-28.66 68.126c-9.2762 21.875-34.511 32.081-56.365 22.795-21.853-9.285-32.049-34.545-22.773-56.42l31.925-76.211c6.7448-2.988 14.142-3.575 21.988-3.575 27.086 0 49.537 19.321 53.884 45.285z");
            attr(path2, "fill", "#393939");
            attr(path3, "d", "m197.57 115.46-39.756-89.506c-7.148-16.07-22.929-25.595-39.443-25.537-16.786-0.058576-32.766 9.7896-39.736 26.227l-43.199 101.28c9.1064-7.45 21.329-12.314 34.008-12.314 23.046 0 42.646 14.76 49.866 35.345l0.093 0.337c5.784 1.658 11.893 2.546 18.21 2.546 26.578 0 49.487-15.722 59.958-38.382z");
            attr(path3, "fill", "#017ACE");
            attr(path4, "d", "m197.57 115.46c-10.071 21.796-31.651 37.172-56.934 38.314-1.052 0.05-2.11 0.075-3.175 0.075-6.316 0-12.425-0.888-18.21-2.546l38.425 86.387c3.996 8.986 10.692 15.926 18.706 20.288 1.908 1.196 3.935 2.257 6.073 3.165 21.853 9.286 47.088-0.92 56.364-22.795l37.055-87.381c7.315-20.421 26.982-34.665 49.896-34.665 13.188 0 25.345 4.817 34.601 12.818l-45.994-103.17c-7.148-16.07-22.929-25.595-39.442-25.537-16.786-0.058576-32.767 9.7896-39.737 26.227l-37.628 88.816z");
            attr(path4, "fill", "#AEDEFF");
            attr(path5, "d", "m325.77 116.31c-22.915 0-42.379 13.795-49.694 34.216l8.919 20.052c5.873-25.763 28.931-44.989 56.481-44.989 6.67 0 12.931 1.465 18.894 3.539-9.256-8-21.413-12.818-34.6-12.818z");
            attr(path5, "fill", "#2D91D7");
            set_style(svg, "width", "100%");
            attr(svg, "viewBox", "0 0 397 265");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
        },
        m: function (target, anchor) {
            insert(target, svg, anchor);
            append(svg, path0);
            append(svg, path1);
            append(svg, path2);
            append(svg, path3);
            append(svg, path4);
            append(svg, path5);
        },
        p: noop,
        i: noop,
        o: noop,
        d: function (detaching) {
            if (detaching)
                detach(svg);
        }
    };
}
var MemberstackIcon = /** @class */ (function (_super) {
    __extends(MemberstackIcon, _super);
    function MemberstackIcon(options) {
        var _this = _super.call(this) || this;
        init(_this, options, null, create_fragment$F, safe_not_equal, {});
        return _this;
    }
    return MemberstackIcon;
}(SvelteComponent));
/* src/components/FigureElement.svelte generated by Svelte v3.48.0 */
function create_else_block$b(ctx) {
    var memberstackicon;
    var current;
    memberstackicon = new MemberstackIcon({});
    return {
        c: function () {
            create_component(memberstackicon.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(memberstackicon, target, anchor);
            current = true;
        },
        p: noop,
        i: function (local) {
            if (current)
                return;
            transition_in(memberstackicon.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(memberstackicon.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(memberstackicon, detaching);
        }
    };
}
// (13:2) {#if app.branding.logo}
function create_if_block$k(ctx) {
    var img;
    var img_src_value;
    var img_alt_value;
    return {
        c: function () {
            img = element("img");
            if (!src_url_equal(img.src, img_src_value = /*app*/ ctx[0].branding.logo))
                attr(img, "src", img_src_value);
            attr(img, "alt", img_alt_value = /*app*/ ctx[0].name);
            attr(img, "data-cy", "logo");
        },
        m: function (target, anchor) {
            insert(target, img, anchor);
        },
        p: function (ctx, dirty) {
            if (dirty & /*app*/ 1 && !src_url_equal(img.src, img_src_value = /*app*/ ctx[0].branding.logo)) {
                attr(img, "src", img_src_value);
            }
            if (dirty & /*app*/ 1 && img_alt_value !== (img_alt_value = /*app*/ ctx[0].name)) {
                attr(img, "alt", img_alt_value);
            }
        },
        i: noop,
        o: noop,
        d: function (detaching) {
            if (detaching)
                detach(img);
        }
    };
}
function create_fragment$E(ctx) {
    var figure;
    var current_block_type_index;
    var if_block;
    var current;
    var if_block_creators = [create_if_block$k, create_else_block$b];
    var if_blocks = [];
    function select_block_type(ctx, dirty) {
        if ( /*app*/ctx[0].branding.logo)
            return 0;
        return 1;
    }
    current_block_type_index = select_block_type(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
        c: function () {
            figure = element("figure");
            if_block.c();
            attr(figure, "class", "ms-modal__figure");
        },
        m: function (target, anchor) {
            insert(target, figure, anchor);
            if_blocks[current_block_type_index].m(figure, null);
            current = true;
        },
        p: function (ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            var previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx);
            if (current_block_type_index === previous_block_index) {
                if_blocks[current_block_type_index].p(ctx, dirty);
            }
            else {
                group_outros();
                transition_out(if_blocks[previous_block_index], 1, 1, function () {
                    if_blocks[previous_block_index] = null;
                });
                check_outros();
                if_block = if_blocks[current_block_type_index];
                if (!if_block) {
                    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
                    if_block.c();
                }
                else {
                    if_block.p(ctx, dirty);
                }
                transition_in(if_block, 1);
                if_block.m(figure, null);
            }
        },
        i: function (local) {
            if (current)
                return;
            transition_in(if_block);
            current = true;
        },
        o: function (local) {
            transition_out(if_block);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(figure);
            if_blocks[current_block_type_index].d();
        }
    };
}
function instance$o($$self, $$props, $$invalidate) {
    var app = {};
    AppStore.subscribe(function (data) {
        $$invalidate(0, app = data);
    });
    return [app];
}
var FigureElement = /** @class */ (function (_super) {
    __extends(FigureElement, _super);
    function FigureElement(options) {
        var _this = _super.call(this) || this;
        init(_this, options, instance$o, create_fragment$E, safe_not_equal, {});
        return _this;
    }
    return FigureElement;
}(SvelteComponent));
/* src/components/SubmitButton.svelte generated by Svelte v3.48.0 */
function create_else_block$a(ctx) {
    var button;
    var loadingicon;
    var current;
    loadingicon = new LoadingIcon({});
    return {
        c: function () {
            button = element("button");
            create_component(loadingicon.$$.fragment);
            attr(button, "class", "ms-form__button");
            attr(button, "type", "button");
            set_style(button, "background-color", /*buttonColor*/ ctx[2]);
            button.disabled = true;
        },
        m: function (target, anchor) {
            insert(target, button, anchor);
            mount_component(loadingicon, button, null);
            current = true;
        },
        p: function (ctx, dirty) {
            if (!current || dirty & /*buttonColor*/ 4) {
                set_style(button, "background-color", /*buttonColor*/ ctx[2]);
            }
        },
        i: function (local) {
            if (current)
                return;
            transition_in(loadingicon.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(loadingicon.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(button);
            destroy_component(loadingicon);
        }
    };
}
// (15:2) {#if !isLoading}
function create_if_block$j(ctx) {
    var button;
    var t;
    return {
        c: function () {
            button = element("button");
            t = text(/*buttonText*/ ctx[0]);
            attr(button, "class", "ms-form__button");
            attr(button, "type", "submit");
            set_style(button, "background-color", /*buttonColor*/ ctx[2]);
        },
        m: function (target, anchor) {
            insert(target, button, anchor);
            append(button, t);
        },
        p: function (ctx, dirty) {
            if (dirty & /*buttonText*/ 1)
                set_data(t, /*buttonText*/ ctx[0]);
            if (dirty & /*buttonColor*/ 4) {
                set_style(button, "background-color", /*buttonColor*/ ctx[2]);
            }
        },
        i: noop,
        o: noop,
        d: function (detaching) {
            if (detaching)
                detach(button);
        }
    };
}
function create_fragment$D(ctx) {
    var div;
    var current_block_type_index;
    var if_block;
    var current;
    var if_block_creators = [create_if_block$j, create_else_block$a];
    var if_blocks = [];
    function select_block_type(ctx, dirty) {
        if (!ctx[1])
            return 0;
        return 1;
    }
    current_block_type_index = select_block_type(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
        c: function () {
            div = element("div");
            if_block.c();
        },
        m: function (target, anchor) {
            insert(target, div, anchor);
            if_blocks[current_block_type_index].m(div, null);
            current = true;
        },
        p: function (ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            var previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx);
            if (current_block_type_index === previous_block_index) {
                if_blocks[current_block_type_index].p(ctx, dirty);
            }
            else {
                group_outros();
                transition_out(if_blocks[previous_block_index], 1, 1, function () {
                    if_blocks[previous_block_index] = null;
                });
                check_outros();
                if_block = if_blocks[current_block_type_index];
                if (!if_block) {
                    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
                    if_block.c();
                }
                else {
                    if_block.p(ctx, dirty);
                }
                transition_in(if_block, 1);
                if_block.m(div, null);
            }
        },
        i: function (local) {
            if (current)
                return;
            transition_in(if_block);
            current = true;
        },
        o: function (local) {
            transition_out(if_block);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div);
            if_blocks[current_block_type_index].d();
        }
    };
}
function instance$n($$self, $$props, $$invalidate) {
    var $app;
    component_subscribe($$self, AppStore, function ($$value) { return $$invalidate(3, $app = $$value); });
    var _a = $$props.buttonText, buttonText = _a === void 0 ? "Submit" : _a;
    var _b = $$props.isLoading, isLoading = _b === void 0 ? false : _b;
    var buttonColor = "rgb(41, 98, 255)";
    if ($app.branding.colors.lightMode.primaryButton) {
        buttonColor = $app.branding.colors.lightMode.primaryButton;
    }
    $$self.$$set = function ($$props) {
        if ('buttonText' in $$props)
            $$invalidate(0, buttonText = $$props.buttonText);
        if ('isLoading' in $$props)
            $$invalidate(1, isLoading = $$props.isLoading);
    };
    return [buttonText, isLoading, buttonColor];
}
var SubmitButton = /** @class */ (function (_super) {
    __extends(SubmitButton, _super);
    function SubmitButton(options) {
        var _this = _super.call(this) || this;
        init(_this, options, instance$n, create_fragment$D, safe_not_equal, { buttonText: 0, isLoading: 1 });
        return _this;
    }
    return SubmitButton;
}(SvelteComponent));
/* src/icons/ErrorIcon.svelte generated by Svelte v3.48.0 */
function create_fragment$C(ctx) {
    var svg;
    var path;
    return {
        c: function () {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "fill", "currentColor");
            attr(path, "d", "m10 0c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm1 15h-2v-2h2v2zm0-4h-2v-6h2v6z");
            attr(svg, "fill", "none");
            attr(svg, "viewBox", "0 0 20 20");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
        },
        m: function (target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
        },
        p: noop,
        i: noop,
        o: noop,
        d: function (detaching) {
            if (detaching)
                detach(svg);
        }
    };
}
var ErrorIcon = /** @class */ (function (_super) {
    __extends(ErrorIcon, _super);
    function ErrorIcon(options) {
        var _this = _super.call(this) || this;
        init(_this, options, null, create_fragment$C, safe_not_equal, {});
        return _this;
    }
    return ErrorIcon;
}(SvelteComponent));
/* src/components/EmailInput.svelte generated by Svelte v3.48.0 */
function create_if_block$i(ctx) {
    var div;
    var erroricon;
    var t0;
    var t1;
    var current;
    erroricon = new ErrorIcon({});
    return {
        c: function () {
            div = element("div");
            create_component(erroricon.$$.fragment);
            t0 = space();
            t1 = text(/*errorMessage*/ ctx[4]);
            attr(div, "class", "ms-form__error");
        },
        m: function (target, anchor) {
            insert(target, div, anchor);
            mount_component(erroricon, div, null);
            append(div, t0);
            append(div, t1);
            current = true;
        },
        p: noop,
        i: function (local) {
            if (current)
                return;
            transition_in(erroricon.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(erroricon.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div);
            destroy_component(erroricon);
        }
    };
}
function create_fragment$B(ctx) {
    var div;
    var label;
    var t1;
    var input;
    var t2;
    var current;
    var mounted;
    var dispose;
    var if_block = /*inputError*/ ctx[2] && create_if_block$i(ctx);
    return {
        c: function () {
            div = element("div");
            label = element("label");
            label.textContent = "".concat(/*emailLabel*/ ctx[3]);
            t1 = space();
            input = element("input");
            t2 = space();
            if (if_block)
                if_block.c();
            attr(label, "class", "ms-form__label");
            attr(label, "for", "eml");
            attr(input, "class", "ms-form__input");
            attr(input, "type", "email");
            attr(input, "placeholder", /*placeholder*/ ctx[1]);
            attr(input, "name", "eml");
            input.required = true;
            attr(div, "class", "ms-form__group");
        },
        m: function (target, anchor) {
            insert(target, div, anchor);
            append(div, label);
            append(div, t1);
            append(div, input);
            set_input_value(input, /*emailValue*/ ctx[0]);
            append(div, t2);
            if (if_block)
                if_block.m(div, null);
            current = true;
            if (!mounted) {
                dispose = [
                    listen(input, "keyup", /*validateField*/ ctx[5]),
                    listen(input, "input", /*input_input_handler*/ ctx[7])
                ];
                mounted = true;
            }
        },
        p: function (ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if (!current || dirty & /*placeholder*/ 2) {
                attr(input, "placeholder", /*placeholder*/ ctx[1]);
            }
            if (dirty & /*emailValue*/ 1 && input.value !== /*emailValue*/ ctx[0]) {
                set_input_value(input, /*emailValue*/ ctx[0]);
            }
            if ( /*inputError*/ctx[2]) {
                if (if_block) {
                    if_block.p(ctx, dirty);
                    if (dirty & /*inputError*/ 4) {
                        transition_in(if_block, 1);
                    }
                }
                else {
                    if_block = create_if_block$i(ctx);
                    if_block.c();
                    transition_in(if_block, 1);
                    if_block.m(div, null);
                }
            }
            else if (if_block) {
                group_outros();
                transition_out(if_block, 1, 1, function () {
                    if_block = null;
                });
                check_outros();
            }
        },
        i: function (local) {
            if (current)
                return;
            transition_in(if_block);
            current = true;
        },
        o: function (local) {
            transition_out(if_block);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div);
            if (if_block)
                if_block.d();
            mounted = false;
            run_all(dispose);
        }
    };
}
function instance$m($$self, $$props, $$invalidate) {
    var $textStore;
    component_subscribe($$self, TextStore, function ($$value) { return $$invalidate(8, $textStore = $$value); });
    var _a = $$props.emailInputValid, emailInputValid = _a === void 0 ? false : _a;
    var emailValue = $$props.emailValue;
    var _b = $$props.placeholder, placeholder = _b === void 0 ? "example@domain.com" : _b;
    var text = $textStore.text;
    var emailLabel = text["email_address"] || "Email Address";
    var inputError = false;
    var errorMessage = text["email_error_message"] || "Please enter a valid email address";
    var validateField = function (e) {
        var emailInput = e.target;
        var hasValidEmail = emailInput.value.match(/.+@.+\..{2,}/);
        if (!hasValidEmail && e.target.value.length > 0) {
            $$invalidate(6, emailInputValid = false);
            $$invalidate(2, inputError = true);
        }
        else {
            $$invalidate(6, emailInputValid = true);
            $$invalidate(2, inputError = false);
        }
    };
    function input_input_handler() {
        emailValue = this.value;
        $$invalidate(0, emailValue);
    }
    $$self.$$set = function ($$props) {
        if ('emailInputValid' in $$props)
            $$invalidate(6, emailInputValid = $$props.emailInputValid);
        if ('emailValue' in $$props)
            $$invalidate(0, emailValue = $$props.emailValue);
        if ('placeholder' in $$props)
            $$invalidate(1, placeholder = $$props.placeholder);
    };
    return [
        emailValue,
        placeholder,
        inputError,
        emailLabel,
        errorMessage,
        validateField,
        emailInputValid,
        input_input_handler
    ];
}
var EmailInput = /** @class */ (function (_super) {
    __extends(EmailInput, _super);
    function EmailInput(options) {
        var _this = _super.call(this) || this;
        init(_this, options, instance$m, create_fragment$B, safe_not_equal, {
            emailInputValid: 6,
            emailValue: 0,
            placeholder: 1
        });
        return _this;
    }
    return EmailInput;
}(SvelteComponent));
/* src/icons/EyeIcon.svelte generated by Svelte v3.48.0 */
function create_fragment$A(ctx) {
    var svg;
    var path;
    return {
        c: function () {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "fill", "currentColor");
            attr(path, "d", "m11 0.5c-5 0-9.27 3.11-11 7.5 1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z");
            attr(svg, "class", "ms-form__eye");
            attr(svg, "fill", "none");
            attr(svg, "viewBox", "0 0 22 16");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
        },
        m: function (target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
        },
        p: noop,
        i: noop,
        o: noop,
        d: function (detaching) {
            if (detaching)
                detach(svg);
        }
    };
}
var EyeIcon = /** @class */ (function (_super) {
    __extends(EyeIcon, _super);
    function EyeIcon(options) {
        var _this = _super.call(this) || this;
        init(_this, options, null, create_fragment$A, safe_not_equal, {});
        return _this;
    }
    return EyeIcon;
}(SvelteComponent));
/* src/icons/EyeSlashIcon.svelte generated by Svelte v3.48.0 */
function create_fragment$z(ctx) {
    var svg;
    var path;
    return {
        c: function () {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "fill", "currentColor");
            attr(path, "d", "m11 4c2.76 0 5 2.24 5 5 0 0.65-0.13 1.26-0.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74 0.25-3.98 0.7l2.16 2.16c0.57-0.23 1.18-0.36 1.83-0.36zm-10-2.73 2.74 2.74c-1.66 1.29-2.96 3.01-3.74 4.99 1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-0.3 4.38-0.84l0.42 0.42 2.93 2.92 1.27-1.27-17.73-17.73-1.27 1.27zm5.53 5.53 1.55 1.55c-0.05 0.21-0.08 0.43-0.08 0.65 0 1.66 1.34 3 3 3 0.22 0 0.44-0.03 0.65-0.08l1.55 1.55c-0.67 0.33-1.41 0.53-2.2 0.53-2.76 0-5-2.24-5-5 0-0.79 0.2-1.53 0.53-2.2zm4.31-0.78 3.15 3.15 0.02-0.16c0-1.66-1.34-3-3-3l-0.17 0.01z");
            attr(svg, "class", "ms-form__eye-slash");
            attr(svg, "fill", "none");
            attr(svg, "viewBox", "0 0 22 19");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
        },
        m: function (target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
        },
        p: noop,
        i: noop,
        o: noop,
        d: function (detaching) {
            if (detaching)
                detach(svg);
        }
    };
}
var EyeSlashIcon = /** @class */ (function (_super) {
    __extends(EyeSlashIcon, _super);
    function EyeSlashIcon(options) {
        var _this = _super.call(this) || this;
        init(_this, options, null, create_fragment$z, safe_not_equal, {});
        return _this;
    }
    return EyeSlashIcon;
}(SvelteComponent));
/* src/components/PasswordInput.svelte generated by Svelte v3.48.0 */
function create_if_block_2$a(ctx) {
    var div;
    var button;
    var mounted;
    var dispose;
    return {
        c: function () {
            div = element("div");
            button = element("button");
            button.textContent = "".concat(/*text*/ ctx[8]["forgot_password"] || "Forgot Password?");
            attr(button, "data-cy", "forgot-password-btn");
            attr(button, "class", "ms-form__button ms-form__button--text");
            attr(button, "tabindex", "-1");
            attr(button, "type", "button");
            attr(div, "class", "ms-form__label ms-form__label--right");
        },
        m: function (target, anchor) {
            insert(target, div, anchor);
            append(div, button);
            if (!mounted) {
                dispose = listen(button, "click", /*click_handler*/ ctx[14]);
                mounted = true;
            }
        },
        p: noop,
        d: function (detaching) {
            if (detaching)
                detach(div);
            mounted = false;
            dispose();
        }
    };
}
// (60:6) {:else}
function create_else_block$9(ctx) {
    var eyeslashicon;
    var current;
    eyeslashicon = new EyeSlashIcon({});
    return {
        c: function () {
            create_component(eyeslashicon.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(eyeslashicon, target, anchor);
            current = true;
        },
        i: function (local) {
            if (current)
                return;
            transition_in(eyeslashicon.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(eyeslashicon.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(eyeslashicon, detaching);
        }
    };
}
// (58:6) {#if !passwordVisible}
function create_if_block_1$d(ctx) {
    var eyeicon;
    var current;
    eyeicon = new EyeIcon({});
    return {
        c: function () {
            create_component(eyeicon.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(eyeicon, target, anchor);
            current = true;
        },
        i: function (local) {
            if (current)
                return;
            transition_in(eyeicon.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(eyeicon.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(eyeicon, detaching);
        }
    };
}
// (65:2) {#if inputError}
function create_if_block$h(ctx) {
    var div;
    var erroricon;
    var t0;
    var t1;
    var current;
    erroricon = new ErrorIcon({});
    return {
        c: function () {
            div = element("div");
            create_component(erroricon.$$.fragment);
            t0 = space();
            t1 = text(/*errorMessage*/ ctx[9]);
            attr(div, "class", "ms-form__error");
        },
        m: function (target, anchor) {
            insert(target, div, anchor);
            mount_component(erroricon, div, null);
            append(div, t0);
            append(div, t1);
            current = true;
        },
        p: noop,
        i: function (local) {
            if (current)
                return;
            transition_in(erroricon.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(erroricon.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div);
            destroy_component(erroricon);
        }
    };
}
function create_fragment$y(ctx) {
    var div3;
    var div0;
    var label;
    var t0;
    var t1;
    var t2;
    var div2;
    var input;
    var input_value_value;
    var t3;
    var div1;
    var current_block_type_index;
    var if_block1;
    var t4;
    var current;
    var mounted;
    var dispose;
    var if_block0 = /*showForgotPasswordLabel*/ ctx[2] && create_if_block_2$a(ctx);
    var if_block_creators = [create_if_block_1$d, create_else_block$9];
    var if_blocks = [];
    function select_block_type(ctx, dirty) {
        if (!ctx[5])
            return 0;
        return 1;
    }
    current_block_type_index = select_block_type(ctx);
    if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    var if_block2 = /*inputError*/ ctx[6] && create_if_block$h(ctx);
    return {
        c: function () {
            div3 = element("div");
            div0 = element("div");
            label = element("label");
            t0 = text(/*passwordLabel*/ ctx[3]);
            t1 = space();
            if (if_block0)
                if_block0.c();
            t2 = space();
            div2 = element("div");
            input = element("input");
            t3 = space();
            div1 = element("div");
            if_block1.c();
            t4 = space();
            if (if_block2)
                if_block2.c();
            attr(label, "class", "ms-form__label");
            attr(label, "for", "psw");
            attr(div0, "class", "ms-form__flex");
            attr(input, "data-ms-internal-password", "");
            attr(input, "class", "ms-form__input ms-form__input--password");
            attr(input, "type", /*type*/ ctx[7]);
            attr(input, "placeholder", /*passwordPlaceholder*/ ctx[4]);
            input.value = input_value_value = /*passwordValue*/ ctx[0] || "";
            attr(input, "name", "psw");
            attr(input, "autocomplete", "off");
            input.required = true;
            attr(div1, "class", "ms-form__show-toggle");
            attr(div1, "id", "togglePassword");
            attr(div2, "class", "ms-form__password-container");
            attr(div3, "class", "ms-form__group");
        },
        m: function (target, anchor) {
            insert(target, div3, anchor);
            append(div3, div0);
            append(div0, label);
            append(label, t0);
            append(div0, t1);
            if (if_block0)
                if_block0.m(div0, null);
            append(div3, t2);
            append(div3, div2);
            append(div2, input);
            append(div2, t3);
            append(div2, div1);
            if_blocks[current_block_type_index].m(div1, null);
            append(div3, t4);
            if (if_block2)
                if_block2.m(div3, null);
            current = true;
            if (!mounted) {
                dispose = [
                    listen(input, "input", /*handleInput*/ ctx[11]),
                    listen(input, "change", /*validateField*/ ctx[12]),
                    listen(div1, "click", /*togglePassword*/ ctx[10])
                ];
                mounted = true;
            }
        },
        p: function (ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if (!current || dirty & /*passwordLabel*/ 8)
                set_data(t0, /*passwordLabel*/ ctx[3]);
            if ( /*showForgotPasswordLabel*/ctx[2]) {
                if (if_block0) {
                    if_block0.p(ctx, dirty);
                }
                else {
                    if_block0 = create_if_block_2$a(ctx);
                    if_block0.c();
                    if_block0.m(div0, null);
                }
            }
            else if (if_block0) {
                if_block0.d(1);
                if_block0 = null;
            }
            if (!current || dirty & /*type*/ 128) {
                attr(input, "type", /*type*/ ctx[7]);
            }
            if (!current || dirty & /*passwordPlaceholder*/ 16) {
                attr(input, "placeholder", /*passwordPlaceholder*/ ctx[4]);
            }
            if (!current || dirty & /*passwordValue*/ 1 && input_value_value !== (input_value_value = /*passwordValue*/ ctx[0] || "") && input.value !== input_value_value) {
                input.value = input_value_value;
            }
            var previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx);
            if (current_block_type_index !== previous_block_index) {
                group_outros();
                transition_out(if_blocks[previous_block_index], 1, 1, function () {
                    if_blocks[previous_block_index] = null;
                });
                check_outros();
                if_block1 = if_blocks[current_block_type_index];
                if (!if_block1) {
                    if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
                    if_block1.c();
                }
                transition_in(if_block1, 1);
                if_block1.m(div1, null);
            }
            if ( /*inputError*/ctx[6]) {
                if (if_block2) {
                    if_block2.p(ctx, dirty);
                    if (dirty & /*inputError*/ 64) {
                        transition_in(if_block2, 1);
                    }
                }
                else {
                    if_block2 = create_if_block$h(ctx);
                    if_block2.c();
                    transition_in(if_block2, 1);
                    if_block2.m(div3, null);
                }
            }
            else if (if_block2) {
                group_outros();
                transition_out(if_block2, 1, 1, function () {
                    if_block2 = null;
                });
                check_outros();
            }
        },
        i: function (local) {
            if (current)
                return;
            transition_in(if_block1);
            transition_in(if_block2);
            current = true;
        },
        o: function (local) {
            transition_out(if_block1);
            transition_out(if_block2);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div3);
            if (if_block0)
                if_block0.d();
            if_blocks[current_block_type_index].d();
            if (if_block2)
                if_block2.d();
            mounted = false;
            run_all(dispose);
        }
    };
}
function instance$l($$self, $$props, $$invalidate) {
    var type;
    var $textStore;
    component_subscribe($$self, TextStore, function ($$value) { return $$invalidate(15, $textStore = $$value); });
    var text = $textStore.text;
    var _a = $$props.showForgotPasswordLabel, showForgotPasswordLabel = _a === void 0 ? false : _a;
    var _b = $$props.passwordInputValid, passwordInputValid = _b === void 0 ? false : _b;
    var _c = $$props.passwordLabel, passwordLabel = _c === void 0 ? text["password"] || "Password" : _c;
    var _d = $$props.passwordPlaceholder, passwordPlaceholder = _d === void 0 ? "Enter Password" : _d;
    var passwordValue = $$props.passwordValue;
    var display = $$props.display;
    var inputError = false;
    var errorMessage = text["password_error_message"] || "Minimum 8 characters required";
    var passwordVisible = false;
    function togglePassword() {
        $$invalidate(5, passwordVisible = !passwordVisible);
    }
    function handleInput(e) {
        $$invalidate(0, passwordValue = e.target.value);
    }
    var validateField = function (e) {
        var hasValidPassword = e.target.value.length >= 8 ? true : false;
        if (!hasValidPassword) {
            $$invalidate(13, passwordInputValid = false);
            $$invalidate(6, inputError = true);
        }
        else {
            $$invalidate(13, passwordInputValid = true);
            $$invalidate(6, inputError = false);
        }
    };
    var click_handler = function () { return $$invalidate(1, display = "forgot_password"); };
    $$self.$$set = function ($$props) {
        if ('showForgotPasswordLabel' in $$props)
            $$invalidate(2, showForgotPasswordLabel = $$props.showForgotPasswordLabel);
        if ('passwordInputValid' in $$props)
            $$invalidate(13, passwordInputValid = $$props.passwordInputValid);
        if ('passwordLabel' in $$props)
            $$invalidate(3, passwordLabel = $$props.passwordLabel);
        if ('passwordPlaceholder' in $$props)
            $$invalidate(4, passwordPlaceholder = $$props.passwordPlaceholder);
        if ('passwordValue' in $$props)
            $$invalidate(0, passwordValue = $$props.passwordValue);
        if ('display' in $$props)
            $$invalidate(1, display = $$props.display);
    };
    $$self.$$.update = function () {
        if ($$self.$$.dirty & /*passwordVisible*/ 32) {
            $$invalidate(7, type = passwordVisible ? "text" : "password");
        }
    };
    return [
        passwordValue,
        display,
        showForgotPasswordLabel,
        passwordLabel,
        passwordPlaceholder,
        passwordVisible,
        inputError,
        type,
        text,
        errorMessage,
        togglePassword,
        handleInput,
        validateField,
        passwordInputValid,
        click_handler
    ];
}
var PasswordInput = /** @class */ (function (_super) {
    __extends(PasswordInput, _super);
    function PasswordInput(options) {
        var _this = _super.call(this) || this;
        init(_this, options, instance$l, create_fragment$y, safe_not_equal, {
            showForgotPasswordLabel: 2,
            passwordInputValid: 13,
            passwordLabel: 3,
            passwordPlaceholder: 4,
            passwordValue: 0,
            display: 1
        });
        return _this;
    }
    return PasswordInput;
}(SvelteComponent));
/* src/icons/SecuredIcon.svelte generated by Svelte v3.48.0 */
function create_fragment$x(ctx) {
    var svg;
    var path;
    return {
        c: function () {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "fill", "currentColor");
            attr(path, "shape-rendering", "geometricPrecision");
            attr(path, "d", "m9 0-9 4v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12v-6l-9-4zm-2 16-4-4 1.41-1.41 2.59 2.58 6.59-6.59 1.41 1.42-8 8z");
            attr(svg, "fill", "none");
            attr(svg, "viewBox", "0 0 18 22");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
        },
        m: function (target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
        },
        p: noop,
        i: noop,
        o: noop,
        d: function (detaching) {
            if (detaching)
                detach(svg);
        }
    };
}
var SecuredIcon = /** @class */ (function (_super) {
    __extends(SecuredIcon, _super);
    function SecuredIcon(options) {
        var _this = _super.call(this) || this;
        init(_this, options, null, create_fragment$x, safe_not_equal, {});
        return _this;
    }
    return SecuredIcon;
}(SvelteComponent));
/* src/components/ModalFooter.svelte generated by Svelte v3.48.0 */
function create_if_block$g(ctx) {
    var div;
    var a;
    var securedicon;
    var t;
    var current;
    securedicon = new SecuredIcon({});
    return {
        c: function () {
            div = element("div");
            a = element("a");
            create_component(securedicon.$$.fragment);
            t = text(" Secured by Memberstack");
            attr(a, "href", "https://www.memberstack.com");
            attr(a, "target", "_blank");
            attr(div, "class", "ms-modal__footer");
        },
        m: function (target, anchor) {
            insert(target, div, anchor);
            append(div, a);
            mount_component(securedicon, a, null);
            append(a, t);
            current = true;
        },
        i: function (local) {
            if (current)
                return;
            transition_in(securedicon.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(securedicon.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div);
            destroy_component(securedicon);
        }
    };
}
function create_fragment$w(ctx) {
    var if_block_anchor;
    var current;
    var if_block = !ctx[0].isPaid && create_if_block$g();
    return {
        c: function () {
            if (if_block)
                if_block.c();
            if_block_anchor = empty();
        },
        m: function (target, anchor) {
            if (if_block)
                if_block.m(target, anchor);
            insert(target, if_block_anchor, anchor);
            current = true;
        },
        p: function (ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if (!ctx[0].isPaid) {
                if (if_block) {
                    if (dirty & /*$app*/ 1) {
                        transition_in(if_block, 1);
                    }
                }
                else {
                    if_block = create_if_block$g();
                    if_block.c();
                    transition_in(if_block, 1);
                    if_block.m(if_block_anchor.parentNode, if_block_anchor);
                }
            }
            else if (if_block) {
                group_outros();
                transition_out(if_block, 1, 1, function () {
                    if_block = null;
                });
                check_outros();
            }
        },
        i: function (local) {
            if (current)
                return;
            transition_in(if_block);
            current = true;
        },
        o: function (local) {
            transition_out(if_block);
            current = false;
        },
        d: function (detaching) {
            if (if_block)
                if_block.d(detaching);
            if (detaching)
                detach(if_block_anchor);
        }
    };
}
function instance$k($$self, $$props, $$invalidate) {
    var $app;
    component_subscribe($$self, AppStore, function ($$value) { return $$invalidate(0, $app = $$value); });
    return [$app];
}
var ModalFooter = /** @class */ (function (_super) {
    __extends(ModalFooter, _super);
    function ModalFooter(options) {
        var _this = _super.call(this) || this;
        init(_this, options, instance$k, create_fragment$w, safe_not_equal, {});
        return _this;
    }
    return ModalFooter;
}(SvelteComponent));
/* src/icons/EmailIcon.svelte generated by Svelte v3.48.0 */
function create_fragment$v(ctx) {
    var svg;
    var path;
    return {
        c: function () {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "d", "M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4ZM5,6H19a1,1,0,0,1,1,1l-8,4.88L4,7A1,1,0,0,1,5,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9.28l7.48,4.57a1,1,0,0,0,1,0L20,9.28Z");
            attr(svg, "class", "ms-email");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
            attr(svg, "viewBox", "0 0 24 24");
            attr(svg, "fill", "currentColor");
        },
        m: function (target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
        },
        p: noop,
        i: noop,
        o: noop,
        d: function (detaching) {
            if (detaching)
                detach(svg);
        }
    };
}
var EmailIcon = /** @class */ (function (_super) {
    __extends(EmailIcon, _super);
    function EmailIcon(options) {
        var _this = _super.call(this) || this;
        init(_this, options, null, create_fragment$v, safe_not_equal, {});
        return _this;
    }
    return EmailIcon;
}(SvelteComponent));
var PasswordlessStore = writable({
    passwordlessModalType: "",
    passwordlessEmail: "",
    passwordlessMode: false,
    passwordlessCustomFields: [],
    passwordlessPlans: [],
});
var setPasswordlessModalType = function (type) {
    PasswordlessStore.update(function (store) {
        store.passwordlessModalType = type;
        return store;
    });
};
var setPasswordlessEmail = function (email) {
    PasswordlessStore.update(function (store) {
        store.passwordlessEmail = email;
        return store;
    });
};
var setPasswordlessCustomFields = function (customFields) {
    PasswordlessStore.update(function (store) {
        store.passwordlessCustomFields = customFields;
        return store;
    });
};
var setPasswordlessPlans = function (plans) {
    PasswordlessStore.update(function (store) {
        store.passwordlessPlans = plans;
        return store;
    });
};
var setPasswordlessMode = function (mode) {
    PasswordlessStore.update(function (store) {
        store.passwordlessMode = mode;
        return store;
    });
};
/* src/modals/LoginModal.svelte generated by Svelte v3.48.0 */
function get_each_context$6(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[22] = list[i];
    return child_ctx;
}
// (111:2) {#if !params || !params.hideCloseButton}
function create_if_block_6$3(ctx) {
    var closebutton;
    var current;
    closebutton = new CloseButton({
        props: { closeModal: /*closeModal*/ ctx[1] }
    });
    return {
        c: function () {
            create_component(closebutton.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(closebutton, target, anchor);
            current = true;
        },
        p: function (ctx, dirty) {
            var closebutton_changes = {};
            if (dirty & /*closeModal*/ 2)
                closebutton_changes.closeModal = /*closeModal*/ ctx[1];
            closebutton.$set(closebutton_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(closebutton.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(closebutton.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(closebutton, detaching);
        }
    };
}
// (145:6) {:else}
function create_else_block_1$5(ctx) {
    var submitbutton;
    var current;
    submitbutton = new SubmitButton({
        props: {
            buttonText: /*text*/ ctx[8]["login_with_email"] || "Continue with Email",
            isLoading: /*showLoader*/ ctx[3]
        }
    });
    return {
        c: function () {
            create_component(submitbutton.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(submitbutton, target, anchor);
            current = true;
        },
        p: function (ctx, dirty) {
            var submitbutton_changes = {};
            if (dirty & /*showLoader*/ 8)
                submitbutton_changes.isLoading = /*showLoader*/ ctx[3];
            submitbutton.$set(submitbutton_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(submitbutton.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(submitbutton.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(submitbutton, detaching);
        }
    };
}
// (132:6) {#if !$PasswordlessStore.passwordlessMode}
function create_if_block_5$3(ctx) {
    var passwordinput;
    var updating_passwordInputValid;
    var updating_display;
    var t;
    var submitbutton;
    var current;
    function passwordinput_passwordInputValid_binding(value) {
        /*passwordinput_passwordInputValid_binding*/ ctx[14](value);
    }
    function passwordinput_display_binding(value) {
        /*passwordinput_display_binding*/ ctx[15](value);
    }
    var passwordinput_props = {
        passwordPlaceholder: /*text*/ ctx[8]["login_password_placeholder"],
        "||": true,
        showForgotPasswordLabel: true
    };
    if ( /*passwordInputValid*/ctx[5] !== void 0) {
        passwordinput_props.passwordInputValid = /*passwordInputValid*/ ctx[5];
    }
    if ( /*display*/ctx[0] !== void 0) {
        passwordinput_props.display = /*display*/ ctx[0];
    }
    passwordinput = new PasswordInput({ props: passwordinput_props });
    binding_callbacks.push(function () { return bind(passwordinput, 'passwordInputValid', passwordinput_passwordInputValid_binding); });
    binding_callbacks.push(function () { return bind(passwordinput, 'display', passwordinput_display_binding); });
    submitbutton = new SubmitButton({
        props: {
            buttonText: /*text*/ ctx[8]["login"] || "Log in",
            isLoading: /*showLoader*/ ctx[3],
            "data-cy": "submit-button"
        }
    });
    return {
        c: function () {
            create_component(passwordinput.$$.fragment);
            t = space();
            create_component(submitbutton.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(passwordinput, target, anchor);
            insert(target, t, anchor);
            mount_component(submitbutton, target, anchor);
            current = true;
        },
        p: function (ctx, dirty) {
            var passwordinput_changes = {};
            if (!updating_passwordInputValid && dirty & /*passwordInputValid*/ 32) {
                updating_passwordInputValid = true;
                passwordinput_changes.passwordInputValid = /*passwordInputValid*/ ctx[5];
                add_flush_callback(function () { return updating_passwordInputValid = false; });
            }
            if (!updating_display && dirty & /*display*/ 1) {
                updating_display = true;
                passwordinput_changes.display = /*display*/ ctx[0];
                add_flush_callback(function () { return updating_display = false; });
            }
            passwordinput.$set(passwordinput_changes);
            var submitbutton_changes = {};
            if (dirty & /*showLoader*/ 8)
                submitbutton_changes.isLoading = /*showLoader*/ ctx[3];
            submitbutton.$set(submitbutton_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(passwordinput.$$.fragment, local);
            transition_in(submitbutton.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(passwordinput.$$.fragment, local);
            transition_out(submitbutton.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(passwordinput, detaching);
            if (detaching)
                detach(t);
            destroy_component(submitbutton, detaching);
        }
    };
}
// (163:32) 
function create_if_block_4$4(ctx) {
    var div;
    var button;
    var mounted;
    var dispose;
    return {
        c: function () {
            div = element("div");
            button = element("button");
            button.textContent = "".concat(/*text*/ ctx[8]["dont_have_an_account"] || "Don't have an account?");
            attr(button, "class", "ms-form__button ms-form__button--text");
            attr(button, "type", "button");
            attr(div, "class", "ms-form__flex ms-form__flex--centered");
        },
        m: function (target, anchor) {
            insert(target, div, anchor);
            append(div, button);
            if (!mounted) {
                dispose = listen(button, "click", /*click_handler_1*/ ctx[17]);
                mounted = true;
            }
        },
        p: noop,
        d: function (detaching) {
            if (detaching)
                detach(div);
            mounted = false;
            dispose();
        }
    };
}
// (153:6) {#if params && params.signup && params.signup.plans}
function create_if_block_3$4(ctx) {
    var div;
    var button;
    var mounted;
    var dispose;
    return {
        c: function () {
            div = element("div");
            button = element("button");
            button.textContent = "".concat(/*text*/ ctx[8]["dont_have_an_account"] || "Don't have an account?");
            attr(button, "class", "ms-form__button ms-form__button--text");
            attr(button, "type", "button");
            attr(div, "class", "ms-form__flex ms-form__flex--centered");
        },
        m: function (target, anchor) {
            insert(target, div, anchor);
            append(div, button);
            if (!mounted) {
                dispose = listen(button, "click", /*click_handler*/ ctx[16]);
                mounted = true;
            }
        },
        p: noop,
        d: function (detaching) {
            if (detaching)
                detach(div);
            mounted = false;
            dispose();
        }
    };
}
// (176:4) {#if $app.authProviders.length > 0 || $app.additionalAuthMethods.passwordless.enabled === true}
function create_if_block$f(ctx) {
    var div4;
    var div3;
    var div0;
    var t0;
    var div1;
    var t2;
    var div2;
    var t3;
    var t4;
    var current;
    var if_block = /*$app*/ ctx[7].additionalAuthMethods.passwordless.enabled === true && create_if_block_1$c(ctx);
    var each_value = /*$app*/ ctx[7].authProviders;
    var each_blocks = [];
    for (var i = 0; i < each_value.length; i += 1) {
        each_blocks[i] = create_each_block$6(get_each_context$6(ctx, each_value, i));
    }
    return {
        c: function () {
            div4 = element("div");
            div3 = element("div");
            div0 = element("div");
            t0 = space();
            div1 = element("div");
            div1.textContent = "".concat(/*text*/ ctx[8]["or"] || "or");
            t2 = space();
            div2 = element("div");
            t3 = space();
            if (if_block)
                if_block.c();
            t4 = space();
            for (var i = 0; i < each_blocks.length; i += 1) {
                each_blocks[i].c();
            }
            attr(div0, "class", "ms-modal__divider-line");
            attr(div1, "class", "ms-modal__divider-text");
            attr(div2, "class", "ms-modal__divider-line");
            attr(div3, "class", "ms-modal__social-divider");
            attr(div4, "class", "ms-modal__social");
        },
        m: function (target, anchor) {
            insert(target, div4, anchor);
            append(div4, div3);
            append(div3, div0);
            append(div3, t0);
            append(div3, div1);
            append(div3, t2);
            append(div3, div2);
            append(div4, t3);
            if (if_block)
                if_block.m(div4, null);
            append(div4, t4);
            for (var i = 0; i < each_blocks.length; i += 1) {
                each_blocks[i].m(div4, null);
            }
            current = true;
        },
        p: function (ctx, dirty) {
            if ( /*$app*/ctx[7].additionalAuthMethods.passwordless.enabled === true) {
                if (if_block) {
                    if_block.p(ctx, dirty);
                    if (dirty & /*$app*/ 128) {
                        transition_in(if_block, 1);
                    }
                }
                else {
                    if_block = create_if_block_1$c(ctx);
                    if_block.c();
                    transition_in(if_block, 1);
                    if_block.m(div4, t4);
                }
            }
            else if (if_block) {
                group_outros();
                transition_out(if_block, 1, 1, function () {
                    if_block = null;
                });
                check_outros();
            }
            if (dirty & /*submitLoginWithProvider, $app, text*/ 2432) {
                each_value = /*$app*/ ctx[7].authProviders;
                var i = void 0;
                for (i = 0; i < each_value.length; i += 1) {
                    var child_ctx = get_each_context$6(ctx, each_value, i);
                    if (each_blocks[i]) {
                        each_blocks[i].p(child_ctx, dirty);
                    }
                    else {
                        each_blocks[i] = create_each_block$6(child_ctx);
                        each_blocks[i].c();
                        each_blocks[i].m(div4, null);
                    }
                }
                for (; i < each_blocks.length; i += 1) {
                    each_blocks[i].d(1);
                }
                each_blocks.length = each_value.length;
            }
        },
        i: function (local) {
            if (current)
                return;
            transition_in(if_block);
            current = true;
        },
        o: function (local) {
            transition_out(if_block);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div4);
            if (if_block)
                if_block.d();
            destroy_each(each_blocks, detaching);
        }
    };
}
// (186:8) {#if $app.additionalAuthMethods.passwordless.enabled === true}
function create_if_block_1$c(ctx) {
    var div;
    var current_block_type_index;
    var if_block;
    var current;
    var if_block_creators = [create_if_block_2$9, create_else_block$8];
    var if_blocks = [];
    function select_block_type_2(ctx, dirty) {
        if ( /*$PasswordlessStore*/ctx[6].passwordlessMode === false)
            return 0;
        return 1;
    }
    current_block_type_index = select_block_type_2(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
        c: function () {
            div = element("div");
            if_block.c();
            attr(div, "class", "ms-modal__social-buttons");
        },
        m: function (target, anchor) {
            insert(target, div, anchor);
            if_blocks[current_block_type_index].m(div, null);
            current = true;
        },
        p: function (ctx, dirty) {
            var previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type_2(ctx);
            if (current_block_type_index === previous_block_index) {
                if_blocks[current_block_type_index].p(ctx, dirty);
            }
            else {
                group_outros();
                transition_out(if_blocks[previous_block_index], 1, 1, function () {
                    if_blocks[previous_block_index] = null;
                });
                check_outros();
                if_block = if_blocks[current_block_type_index];
                if (!if_block) {
                    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
                    if_block.c();
                }
                else {
                    if_block.p(ctx, dirty);
                }
                transition_in(if_block, 1);
                if_block.m(div, null);
            }
        },
        i: function (local) {
            if (current)
                return;
            transition_in(if_block);
            current = true;
        },
        o: function (local) {
            transition_out(if_block);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div);
            if_blocks[current_block_type_index].d();
        }
    };
}
// (201:12) {:else}
function create_else_block$8(ctx) {
    var button;
    var span;
    var mounted;
    var dispose;
    return {
        c: function () {
            button = element("button");
            span = element("span");
            span.textContent = "".concat(/*text*/ ctx[8]["login_with_password"] || "Log in with Password");
            attr(button, "class", "ms-modal__social-button");
            attr(button, "data-cy", "continue-with-password");
            attr(button, "type", "button");
        },
        m: function (target, anchor) {
            insert(target, button, anchor);
            append(button, span);
            if (!mounted) {
                dispose = listen(button, "click", /*click_handler_3*/ ctx[19]);
                mounted = true;
            }
        },
        p: noop,
        i: noop,
        o: noop,
        d: function (detaching) {
            if (detaching)
                detach(button);
            mounted = false;
            dispose();
        }
    };
}
// (188:12) {#if $PasswordlessStore.passwordlessMode === false}
function create_if_block_2$9(ctx) {
    var button;
    var emailicon;
    var t0;
    var span;
    var current;
    var mounted;
    var dispose;
    emailicon = new EmailIcon({});
    return {
        c: function () {
            button = element("button");
            create_component(emailicon.$$.fragment);
            t0 = space();
            span = element("span");
            span.textContent = "".concat(/*text*/ ctx[8]["login_with_email"] || "Continue with Email");
            attr(button, "class", "ms-modal__social-button");
            attr(button, "data-cy", "continue-with-email");
            attr(button, "type", "button");
        },
        m: function (target, anchor) {
            insert(target, button, anchor);
            mount_component(emailicon, button, null);
            append(button, t0);
            append(button, span);
            current = true;
            if (!mounted) {
                dispose = listen(button, "click", /*click_handler_2*/ ctx[18]);
                mounted = true;
            }
        },
        p: noop,
        i: function (local) {
            if (current)
                return;
            transition_in(emailicon.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(emailicon.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(button);
            destroy_component(emailicon);
            mounted = false;
            dispose();
        }
    };
}
// (217:8) {#each $app.authProviders as provider}
function create_each_block$6(ctx) {
    var div;
    var button;
    var img;
    var img_src_value;
    var img_alt_value;
    var t0;
    var span;
    var t1_value = ( /*text*/ctx[8]["continue_with"] || "Continue with") + "";
    var t1;
    var t2;
    var t3_value = /*provider*/ ctx[22].name + "";
    var t3;
    var t4;
    var mounted;
    var dispose;
    function click_handler_4() {
        return /*click_handler_4*/ ctx[20](/*provider*/ ctx[22]);
    }
    return {
        c: function () {
            div = element("div");
            button = element("button");
            img = element("img");
            t0 = space();
            span = element("span");
            t1 = text(t1_value);
            t2 = space();
            t3 = text(t3_value);
            t4 = space();
            if (!src_url_equal(img.src, img_src_value = /*provider*/ ctx[22].icon))
                attr(img, "src", img_src_value);
            attr(img, "alt", img_alt_value = /*provider*/ ctx[22].name);
            attr(button, "class", "ms-modal__social-button");
            attr(button, "type", "button");
            attr(div, "class", "ms-modal__social-buttons");
        },
        m: function (target, anchor) {
            insert(target, div, anchor);
            append(div, button);
            append(button, img);
            append(button, t0);
            append(button, span);
            append(span, t1);
            append(span, t2);
            append(span, t3);
            append(div, t4);
            if (!mounted) {
                dispose = listen(button, "click", click_handler_4);
                mounted = true;
            }
        },
        p: function (new_ctx, dirty) {
            ctx = new_ctx;
            if (dirty & /*$app*/ 128 && !src_url_equal(img.src, img_src_value = /*provider*/ ctx[22].icon)) {
                attr(img, "src", img_src_value);
            }
            if (dirty & /*$app*/ 128 && img_alt_value !== (img_alt_value = /*provider*/ ctx[22].name)) {
                attr(img, "alt", img_alt_value);
            }
            if (dirty & /*$app*/ 128 && t3_value !== (t3_value = /*provider*/ ctx[22].name + ""))
                set_data(t3, t3_value);
        },
        d: function (detaching) {
            if (detaching)
                detach(div);
            mounted = false;
            dispose();
        }
    };
}
function create_fragment$u(ctx) {
    var div1;
    var t0;
    var div0;
    var figureelement;
    var t1;
    var h2;
    var t3;
    var form;
    var emailinput;
    var updating_emailInputValid;
    var t4;
    var current_block_type_index;
    var if_block1;
    var t5;
    var t6;
    var t7;
    var modalfooter;
    var current;
    var mounted;
    var dispose;
    var if_block0 = (!ctx[2] || !ctx[2].hideCloseButton) && create_if_block_6$3(ctx);
    figureelement = new FigureElement({});
    function emailinput_emailInputValid_binding(value) {
        /*emailinput_emailInputValid_binding*/ ctx[13](value);
    }
    var emailinput_props = {
        placeholder: /*text*/ ctx[8]["login_email_placeholder"]
    };
    if ( /*emailInputValid*/ctx[4] !== void 0) {
        emailinput_props.emailInputValid = /*emailInputValid*/ ctx[4];
    }
    emailinput = new EmailInput({ props: emailinput_props });
    binding_callbacks.push(function () { return bind(emailinput, 'emailInputValid', emailinput_emailInputValid_binding); });
    var if_block_creators = [create_if_block_5$3, create_else_block_1$5];
    var if_blocks = [];
    function select_block_type(ctx, dirty) {
        if (!ctx[6].passwordlessMode)
            return 0;
        return 1;
    }
    current_block_type_index = select_block_type(ctx);
    if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    function select_block_type_1(ctx, dirty) {
        if ( /*params*/ctx[2] && /*params*/ ctx[2].signup && /*params*/ ctx[2].signup.plans)
            return create_if_block_3$4;
        if ( /*signupButtonURL*/ctx[9])
            return create_if_block_4$4;
    }
    var current_block_type = select_block_type_1(ctx);
    var if_block2 = current_block_type && current_block_type(ctx);
    var if_block3 = ( /*$app*/ctx[7].authProviders.length > 0 || /*$app*/ ctx[7].additionalAuthMethods.passwordless.enabled === true) && create_if_block$f(ctx);
    modalfooter = new ModalFooter({});
    return {
        c: function () {
            div1 = element("div");
            if (if_block0)
                if_block0.c();
            t0 = space();
            div0 = element("div");
            create_component(figureelement.$$.fragment);
            t1 = space();
            h2 = element("h2");
            h2.textContent = "".concat(/*text*/ ctx[8]["login_to_your_account"] || "Login to your account");
            t3 = space();
            form = element("form");
            create_component(emailinput.$$.fragment);
            t4 = space();
            if_block1.c();
            t5 = space();
            if (if_block2)
                if_block2.c();
            t6 = space();
            if (if_block3)
                if_block3.c();
            t7 = space();
            create_component(modalfooter.$$.fragment);
            attr(h2, "class", "ms-modal__title");
            attr(form, "class", "ms-form");
            attr(form, "action", "");
            attr(form, "method", "post");
            attr(form, "autocomplete", "off");
            attr(div0, "class", "ms-modal__content");
            attr(div1, "class", "ms-modal");
            attr(div1, "id", "LoginModal");
        },
        m: function (target, anchor) {
            insert(target, div1, anchor);
            if (if_block0)
                if_block0.m(div1, null);
            append(div1, t0);
            append(div1, div0);
            mount_component(figureelement, div0, null);
            append(div0, t1);
            append(div0, h2);
            append(div0, t3);
            append(div0, form);
            mount_component(emailinput, form, null);
            append(form, t4);
            if_blocks[current_block_type_index].m(form, null);
            append(form, t5);
            if (if_block2)
                if_block2.m(form, null);
            append(div0, t6);
            if (if_block3)
                if_block3.m(div0, null);
            append(div1, t7);
            mount_component(modalfooter, div1, null);
            current = true;
            if (!mounted) {
                dispose = listen(form, "submit", stop_propagation(prevent_default(/*submitLogin*/ ctx[10])));
                mounted = true;
            }
        },
        p: function (ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if (!ctx[2] || !ctx[2].hideCloseButton) {
                if (if_block0) {
                    if_block0.p(ctx, dirty);
                    if (dirty & /*params*/ 4) {
                        transition_in(if_block0, 1);
                    }
                }
                else {
                    if_block0 = create_if_block_6$3(ctx);
                    if_block0.c();
                    transition_in(if_block0, 1);
                    if_block0.m(div1, t0);
                }
            }
            else if (if_block0) {
                group_outros();
                transition_out(if_block0, 1, 1, function () {
                    if_block0 = null;
                });
                check_outros();
            }
            var emailinput_changes = {};
            if (!updating_emailInputValid && dirty & /*emailInputValid*/ 16) {
                updating_emailInputValid = true;
                emailinput_changes.emailInputValid = /*emailInputValid*/ ctx[4];
                add_flush_callback(function () { return updating_emailInputValid = false; });
            }
            emailinput.$set(emailinput_changes);
            var previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx);
            if (current_block_type_index === previous_block_index) {
                if_blocks[current_block_type_index].p(ctx, dirty);
            }
            else {
                group_outros();
                transition_out(if_blocks[previous_block_index], 1, 1, function () {
                    if_blocks[previous_block_index] = null;
                });
                check_outros();
                if_block1 = if_blocks[current_block_type_index];
                if (!if_block1) {
                    if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
                    if_block1.c();
                }
                else {
                    if_block1.p(ctx, dirty);
                }
                transition_in(if_block1, 1);
                if_block1.m(form, t5);
            }
            if (current_block_type === (current_block_type = select_block_type_1(ctx)) && if_block2) {
                if_block2.p(ctx, dirty);
            }
            else {
                if (if_block2)
                    if_block2.d(1);
                if_block2 = current_block_type && current_block_type(ctx);
                if (if_block2) {
                    if_block2.c();
                    if_block2.m(form, null);
                }
            }
            if ( /*$app*/ctx[7].authProviders.length > 0 || /*$app*/ ctx[7].additionalAuthMethods.passwordless.enabled === true) {
                if (if_block3) {
                    if_block3.p(ctx, dirty);
                    if (dirty & /*$app*/ 128) {
                        transition_in(if_block3, 1);
                    }
                }
                else {
                    if_block3 = create_if_block$f(ctx);
                    if_block3.c();
                    transition_in(if_block3, 1);
                    if_block3.m(div0, null);
                }
            }
            else if (if_block3) {
                group_outros();
                transition_out(if_block3, 1, 1, function () {
                    if_block3 = null;
                });
                check_outros();
            }
        },
        i: function (local) {
            if (current)
                return;
            transition_in(if_block0);
            transition_in(figureelement.$$.fragment, local);
            transition_in(emailinput.$$.fragment, local);
            transition_in(if_block1);
            transition_in(if_block3);
            transition_in(modalfooter.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(if_block0);
            transition_out(figureelement.$$.fragment, local);
            transition_out(emailinput.$$.fragment, local);
            transition_out(if_block1);
            transition_out(if_block3);
            transition_out(modalfooter.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div1);
            if (if_block0)
                if_block0.d();
            destroy_component(figureelement);
            destroy_component(emailinput);
            if_blocks[current_block_type_index].d();
            if (if_block2) {
                if_block2.d();
            }
            if (if_block3)
                if_block3.d();
            destroy_component(modalfooter);
            mounted = false;
            dispose();
        }
    };
}
function instance$j($$self, $$props, $$invalidate) {
    var $PasswordlessStore;
    var $app;
    var $textStore;
    component_subscribe($$self, PasswordlessStore, function ($$value) { return $$invalidate(6, $PasswordlessStore = $$value); });
    component_subscribe($$self, AppStore, function ($$value) { return $$invalidate(7, $app = $$value); });
    component_subscribe($$self, TextStore, function ($$value) { return $$invalidate(21, $textStore = $$value); });
    var closeModal = $$props.closeModal;
    var display = $$props.display;
    var onSuccessLogin = $$props.onSuccessLogin;
    var params = $$props.params;
    var text = $textStore.text;
    var showLoader = false;
    var emailInputValid = false;
    var passwordInputValid = false;
    if ($app.additionalAuthMethods.passwordless.isDefault === true) {
        setPasswordlessMode(true);
    }
    var signupButtonURL = Boolean(window.ssoUI) && $app.ssoSignupButtonURL;
    function submitLogin(e) {
        return __awaiter(this, void 0, void 0, function () {
            var emailInput, passwordInput, data, err_1, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        emailInput = e.target.querySelector("[name=eml]");
                        passwordInput = e.target.querySelector("[name=psw]");
                        if (!($PasswordlessStore.passwordlessMode !== true)) return [3 /*break*/, 5];
                        if (!emailInputValid || !passwordInputValid)
                            return [2 /*return*/];
                        $$invalidate(3, showLoader = true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, window.$memberstackDom.loginMemberEmailPassword({
                                email: emailInput.value,
                                password: passwordInput.value
                            }, { includeContentGroups: true })];
                    case 2:
                        data = (_a.sent()).data;
                        onSuccessLogin({ type: "LOGIN", data: data });
                        $$invalidate(3, showLoader = false);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        $$invalidate(3, showLoader = false);
                        window.$memberstackDom._showMessage(err_1.message, true);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 9];
                    case 5:
                        if (!emailInputValid)
                            return [2 /*return*/];
                        $$invalidate(3, showLoader = true);
                        _a.label = 6;
                    case 6:
                        _a.trys.push([6, 8, , 9]);
                        return [4 /*yield*/, window.$memberstackDom.sendMemberLoginPasswordlessEmail({ email: emailInput.value })];
                    case 7:
                        _a.sent();
                        // let the passwordlessTokenModal know its accessed from the login modal
                        setPasswordlessModalType("login");
                        setPasswordlessEmail(emailInput.value);
                        // show the PasswordlessTokenModal
                        $$invalidate(0, display = "passwordless_token");
                        $$invalidate(3, showLoader = false);
                        return [3 /*break*/, 9];
                    case 8:
                        err_2 = _a.sent();
                        $$invalidate(3, showLoader = false);
                        window.$memberstackDom._showMessage(err_2.message, true);
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    }
    function submitLoginWithProvider(provider) {
        return __awaiter(this, void 0, void 0, function () {
            var data, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, window.$memberstackDom.loginWithProvider({ provider: provider })];
                    case 1:
                        data = (_a.sent()).data;
                        onSuccessLogin({ type: "LOGIN", data: data });
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        $$invalidate(3, showLoader = false);
                        window.$memberstackDom._showMessage(err_3.message, true);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function emailinput_emailInputValid_binding(value) {
        emailInputValid = value;
        $$invalidate(4, emailInputValid);
    }
    function passwordinput_passwordInputValid_binding(value) {
        passwordInputValid = value;
        $$invalidate(5, passwordInputValid);
    }
    function passwordinput_display_binding(value) {
        display = value;
        $$invalidate(0, display);
    }
    var click_handler = function () { return $$invalidate(0, display = "signup"); };
    var click_handler_1 = function () { return window.location.href = signupButtonURL; };
    var click_handler_2 = function () { return setPasswordlessMode(true); };
    var click_handler_3 = function () { return setPasswordlessMode(false); };
    var click_handler_4 = function (provider) { return submitLoginWithProvider(provider.provider); };
    $$self.$$set = function ($$props) {
        if ('closeModal' in $$props)
            $$invalidate(1, closeModal = $$props.closeModal);
        if ('display' in $$props)
            $$invalidate(0, display = $$props.display);
        if ('onSuccessLogin' in $$props)
            $$invalidate(12, onSuccessLogin = $$props.onSuccessLogin);
        if ('params' in $$props)
            $$invalidate(2, params = $$props.params);
    };
    return [
        display,
        closeModal,
        params,
        showLoader,
        emailInputValid,
        passwordInputValid,
        $PasswordlessStore,
        $app,
        text,
        signupButtonURL,
        submitLogin,
        submitLoginWithProvider,
        onSuccessLogin,
        emailinput_emailInputValid_binding,
        passwordinput_passwordInputValid_binding,
        passwordinput_display_binding,
        click_handler,
        click_handler_1,
        click_handler_2,
        click_handler_3,
        click_handler_4
    ];
}
var LoginModal = /** @class */ (function (_super) {
    __extends(LoginModal, _super);
    function LoginModal(options) {
        var _this = _super.call(this) || this;
        init(_this, options, instance$j, create_fragment$u, safe_not_equal, {
            closeModal: 1,
            display: 0,
            onSuccessLogin: 12,
            params: 2
        });
        return _this;
    }
    return LoginModal;
}(SvelteComponent));
/* src/modals/SignupModal.svelte generated by Svelte v3.48.0 */
function add_css$1(target) {
    append_styles(target, "svelte-1w8lbd8", ".rey-was-here.svelte-1w8lbd8{display:none !important}");
}
function get_each_context$5(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[24] = list[i];
    return child_ctx;
}
function get_each_context_1(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[27] = list[i];
    child_ctx[29] = i;
    return child_ctx;
}
// (193:2) {#if !params || !params.hideCloseButton}
function create_if_block_6$2(ctx) {
    var closebutton;
    var current;
    closebutton = new CloseButton({
        props: { closeModal: /*closeModal*/ ctx[1] }
    });
    return {
        c: function () {
            create_component(closebutton.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(closebutton, target, anchor);
            current = true;
        },
        p: function (ctx, dirty) {
            var closebutton_changes = {};
            if (dirty & /*closeModal*/ 2)
                closebutton_changes.closeModal = /*closeModal*/ ctx[1];
            closebutton.$set(closebutton_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(closebutton.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(closebutton.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(closebutton, detaching);
        }
    };
}
// (209:8) {#if customField.hidden !== true}
function create_if_block_5$2(ctx) {
    var div1;
    var div0;
    var label;
    var t0_value = /*customField*/ ctx[27].label + "";
    var t0;
    var label_for_value;
    var t1;
    var input;
    var input_placeholder_value;
    var input_name_value;
    return {
        c: function () {
            div1 = element("div");
            div0 = element("div");
            label = element("label");
            t0 = text(t0_value);
            t1 = space();
            input = element("input");
            attr(label, "class", "ms-form__label");
            attr(label, "for", label_for_value = /*customField*/ ctx[27].key);
            attr(input, "class", "ms-form__input");
            attr(input, "data-ms-custom-field", "");
            attr(input, "type", "text");
            attr(input, "placeholder", input_placeholder_value = /*customField*/ ctx[27].label);
            attr(input, "name", input_name_value = /*customField*/ ctx[27].key);
            attr(div0, "class", "ms-form__group");
            attr(div1, "class", "ms-modal__custom-field-container");
        },
        m: function (target, anchor) {
            insert(target, div1, anchor);
            append(div1, div0);
            append(div0, label);
            append(label, t0);
            append(div0, t1);
            append(div0, input);
        },
        p: function (ctx, dirty) {
            if (dirty & /*$app*/ 128 && t0_value !== (t0_value = /*customField*/ ctx[27].label + ""))
                set_data(t0, t0_value);
            if (dirty & /*$app*/ 128 && label_for_value !== (label_for_value = /*customField*/ ctx[27].key)) {
                attr(label, "for", label_for_value);
            }
            if (dirty & /*$app*/ 128 && input_placeholder_value !== (input_placeholder_value = /*customField*/ ctx[27].label)) {
                attr(input, "placeholder", input_placeholder_value);
            }
            if (dirty & /*$app*/ 128 && input_name_value !== (input_name_value = /*customField*/ ctx[27].key)) {
                attr(input, "name", input_name_value);
            }
        },
        d: function (detaching) {
            if (detaching)
                detach(div1);
        }
    };
}
// (208:6) {#each $app.customFields as customField, i}
function create_each_block_1(ctx) {
    var if_block_anchor;
    var if_block = /*customField*/ ctx[27].hidden !== true && create_if_block_5$2(ctx);
    return {
        c: function () {
            if (if_block)
                if_block.c();
            if_block_anchor = empty();
        },
        m: function (target, anchor) {
            if (if_block)
                if_block.m(target, anchor);
            insert(target, if_block_anchor, anchor);
        },
        p: function (ctx, dirty) {
            if ( /*customField*/ctx[27].hidden !== true) {
                if (if_block) {
                    if_block.p(ctx, dirty);
                }
                else {
                    if_block = create_if_block_5$2(ctx);
                    if_block.c();
                    if_block.m(if_block_anchor.parentNode, if_block_anchor);
                }
            }
            else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
        },
        d: function (detaching) {
            if (if_block)
                if_block.d(detaching);
            if (detaching)
                detach(if_block_anchor);
        }
    };
}
// (237:6) {#if $PasswordlessStore.passwordlessMode === false}
function create_if_block_4$3(ctx) {
    var passwordinput;
    var updating_passwordInputValid;
    var current;
    function passwordinput_passwordInputValid_binding(value) {
        /*passwordinput_passwordInputValid_binding*/ ctx[13](value);
    }
    var passwordinput_props = {};
    if ( /*passwordInputValid*/ctx[5] !== void 0) {
        passwordinput_props.passwordInputValid = /*passwordInputValid*/ ctx[5];
    }
    passwordinput = new PasswordInput({ props: passwordinput_props });
    binding_callbacks.push(function () { return bind(passwordinput, 'passwordInputValid', passwordinput_passwordInputValid_binding); });
    return {
        c: function () {
            create_component(passwordinput.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(passwordinput, target, anchor);
            current = true;
        },
        p: function (ctx, dirty) {
            var passwordinput_changes = {};
            if (!updating_passwordInputValid && dirty & /*passwordInputValid*/ 32) {
                updating_passwordInputValid = true;
                passwordinput_changes.passwordInputValid = /*passwordInputValid*/ ctx[5];
                add_flush_callback(function () { return updating_passwordInputValid = false; });
            }
            passwordinput.$set(passwordinput_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(passwordinput.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(passwordinput.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(passwordinput, detaching);
        }
    };
}
// (243:6) {:else}
function create_else_block_1$4(ctx) {
    var submitbutton;
    var current;
    submitbutton = new SubmitButton({
        props: {
            buttonText: "Continue with Email",
            isLoading: /*showLoader*/ ctx[3]
        }
    });
    return {
        c: function () {
            create_component(submitbutton.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(submitbutton, target, anchor);
            current = true;
        },
        p: function (ctx, dirty) {
            var submitbutton_changes = {};
            if (dirty & /*showLoader*/ 8)
                submitbutton_changes.isLoading = /*showLoader*/ ctx[3];
            submitbutton.$set(submitbutton_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(submitbutton.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(submitbutton.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(submitbutton, detaching);
        }
    };
}
// (241:6) {#if $PasswordlessStore.passwordlessMode === false}
function create_if_block_3$3(ctx) {
    var submitbutton;
    var current;
    submitbutton = new SubmitButton({
        props: {
            buttonText: "Sign up",
            isLoading: /*showLoader*/ ctx[3]
        }
    });
    return {
        c: function () {
            create_component(submitbutton.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(submitbutton, target, anchor);
            current = true;
        },
        p: function (ctx, dirty) {
            var submitbutton_changes = {};
            if (dirty & /*showLoader*/ 8)
                submitbutton_changes.isLoading = /*showLoader*/ ctx[3];
            submitbutton.$set(submitbutton_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(submitbutton.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(submitbutton.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(submitbutton, detaching);
        }
    };
}
// (259:4) {#if $app.authProviders.length > 0 || $app.additionalAuthMethods.passwordless.enabled === true}
function create_if_block$e(ctx) {
    var div4;
    var div3;
    var t3;
    var t4;
    var current;
    var if_block = /*$app*/ ctx[7].additionalAuthMethods.passwordless.enabled === true && create_if_block_1$b(ctx);
    var each_value = /*$app*/ ctx[7].authProviders;
    var each_blocks = [];
    for (var i = 0; i < each_value.length; i += 1) {
        each_blocks[i] = create_each_block$5(get_each_context$5(ctx, each_value, i));
    }
    return {
        c: function () {
            div4 = element("div");
            div3 = element("div");
            div3.innerHTML = "<div class=\"ms-modal__divider-line\"></div> \n          <div class=\"ms-modal__divider-text\">or</div> \n          <div class=\"ms-modal__divider-line\"></div>";
            t3 = space();
            if (if_block)
                if_block.c();
            t4 = space();
            for (var i = 0; i < each_blocks.length; i += 1) {
                each_blocks[i].c();
            }
            attr(div3, "class", "ms-modal__social-divider");
            attr(div4, "class", "ms-modal__social");
        },
        m: function (target, anchor) {
            insert(target, div4, anchor);
            append(div4, div3);
            append(div4, t3);
            if (if_block)
                if_block.m(div4, null);
            append(div4, t4);
            for (var i = 0; i < each_blocks.length; i += 1) {
                each_blocks[i].m(div4, null);
            }
            current = true;
        },
        p: function (ctx, dirty) {
            if ( /*$app*/ctx[7].additionalAuthMethods.passwordless.enabled === true) {
                if (if_block) {
                    if_block.p(ctx, dirty);
                    if (dirty & /*$app*/ 128) {
                        transition_in(if_block, 1);
                    }
                }
                else {
                    if_block = create_if_block_1$b(ctx);
                    if_block.c();
                    transition_in(if_block, 1);
                    if_block.m(div4, t4);
                }
            }
            else if (if_block) {
                group_outros();
                transition_out(if_block, 1, 1, function () {
                    if_block = null;
                });
                check_outros();
            }
            if (dirty & /*submitSignupWithProvider, $app*/ 1152) {
                each_value = /*$app*/ ctx[7].authProviders;
                var i = void 0;
                for (i = 0; i < each_value.length; i += 1) {
                    var child_ctx = get_each_context$5(ctx, each_value, i);
                    if (each_blocks[i]) {
                        each_blocks[i].p(child_ctx, dirty);
                    }
                    else {
                        each_blocks[i] = create_each_block$5(child_ctx);
                        each_blocks[i].c();
                        each_blocks[i].m(div4, null);
                    }
                }
                for (; i < each_blocks.length; i += 1) {
                    each_blocks[i].d(1);
                }
                each_blocks.length = each_value.length;
            }
        },
        i: function (local) {
            if (current)
                return;
            transition_in(if_block);
            current = true;
        },
        o: function (local) {
            transition_out(if_block);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div4);
            if (if_block)
                if_block.d();
            destroy_each(each_blocks, detaching);
        }
    };
}
// (267:8) {#if $app.additionalAuthMethods.passwordless.enabled === true}
function create_if_block_1$b(ctx) {
    var div;
    var current_block_type_index;
    var if_block;
    var current;
    var if_block_creators = [create_if_block_2$8, create_else_block$7];
    var if_blocks = [];
    function select_block_type_1(ctx, dirty) {
        if ( /*$PasswordlessStore*/ctx[6].passwordlessMode === false)
            return 0;
        return 1;
    }
    current_block_type_index = select_block_type_1(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
        c: function () {
            div = element("div");
            if_block.c();
            attr(div, "class", "ms-modal__social-buttons");
        },
        m: function (target, anchor) {
            insert(target, div, anchor);
            if_blocks[current_block_type_index].m(div, null);
            current = true;
        },
        p: function (ctx, dirty) {
            var previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type_1(ctx);
            if (current_block_type_index === previous_block_index) {
                if_blocks[current_block_type_index].p(ctx, dirty);
            }
            else {
                group_outros();
                transition_out(if_blocks[previous_block_index], 1, 1, function () {
                    if_blocks[previous_block_index] = null;
                });
                check_outros();
                if_block = if_blocks[current_block_type_index];
                if (!if_block) {
                    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
                    if_block.c();
                }
                else {
                    if_block.p(ctx, dirty);
                }
                transition_in(if_block, 1);
                if_block.m(div, null);
            }
        },
        i: function (local) {
            if (current)
                return;
            transition_in(if_block);
            current = true;
        },
        o: function (local) {
            transition_out(if_block);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div);
            if_blocks[current_block_type_index].d();
        }
    };
}
// (282:12) {:else}
function create_else_block$7(ctx) {
    var button;
    var span;
    var mounted;
    var dispose;
    return {
        c: function () {
            button = element("button");
            span = element("span");
            span.textContent = "".concat(/*text*/ ctx[8]["signup_with_password"] || "Signup with Password");
            attr(button, "class", "ms-modal__social-button");
            attr(button, "data-cy", "continue-with-password");
            attr(button, "type", "button");
        },
        m: function (target, anchor) {
            insert(target, button, anchor);
            append(button, span);
            if (!mounted) {
                dispose = listen(button, "click", /*click_handler_2*/ ctx[16]);
                mounted = true;
            }
        },
        p: noop,
        i: noop,
        o: noop,
        d: function (detaching) {
            if (detaching)
                detach(button);
            mounted = false;
            dispose();
        }
    };
}
// (269:12) {#if $PasswordlessStore.passwordlessMode === false}
function create_if_block_2$8(ctx) {
    var button;
    var emailicon;
    var t0;
    var span;
    var current;
    var mounted;
    var dispose;
    emailicon = new EmailIcon({});
    return {
        c: function () {
            button = element("button");
            create_component(emailicon.$$.fragment);
            t0 = space();
            span = element("span");
            span.textContent = "".concat(/*text*/ ctx[8]["continue_with_email"] || "Continue with Email");
            attr(button, "class", "ms-modal__social-button");
            attr(button, "data-cy", "continue-with-email");
            attr(button, "type", "button");
        },
        m: function (target, anchor) {
            insert(target, button, anchor);
            mount_component(emailicon, button, null);
            append(button, t0);
            append(button, span);
            current = true;
            if (!mounted) {
                dispose = listen(button, "click", /*click_handler_1*/ ctx[15]);
                mounted = true;
            }
        },
        p: noop,
        i: function (local) {
            if (current)
                return;
            transition_in(emailicon.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(emailicon.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(button);
            destroy_component(emailicon);
            mounted = false;
            dispose();
        }
    };
}
// (298:8) {#each $app.authProviders as provider}
function create_each_block$5(ctx) {
    var div;
    var button;
    var img;
    var img_src_value;
    var img_alt_value;
    var t0;
    var span;
    var t1;
    var t2_value = /*provider*/ ctx[24].name + "";
    var t2;
    var t3;
    var mounted;
    var dispose;
    function click_handler_3() {
        return /*click_handler_3*/ ctx[17](/*provider*/ ctx[24]);
    }
    return {
        c: function () {
            div = element("div");
            button = element("button");
            img = element("img");
            t0 = space();
            span = element("span");
            t1 = text("Continue with ");
            t2 = text(t2_value);
            t3 = space();
            if (!src_url_equal(img.src, img_src_value = /*provider*/ ctx[24].icon))
                attr(img, "src", img_src_value);
            attr(img, "alt", img_alt_value = /*provider*/ ctx[24].name);
            attr(button, "class", "ms-modal__social-button");
            attr(button, "type", "button");
            attr(div, "class", "ms-modal__social-buttons");
        },
        m: function (target, anchor) {
            insert(target, div, anchor);
            append(div, button);
            append(button, img);
            append(button, t0);
            append(button, span);
            append(span, t1);
            append(span, t2);
            append(div, t3);
            if (!mounted) {
                dispose = listen(button, "click", click_handler_3);
                mounted = true;
            }
        },
        p: function (new_ctx, dirty) {
            ctx = new_ctx;
            if (dirty & /*$app*/ 128 && !src_url_equal(img.src, img_src_value = /*provider*/ ctx[24].icon)) {
                attr(img, "src", img_src_value);
            }
            if (dirty & /*$app*/ 128 && img_alt_value !== (img_alt_value = /*provider*/ ctx[24].name)) {
                attr(img, "alt", img_alt_value);
            }
            if (dirty & /*$app*/ 128 && t2_value !== (t2_value = /*provider*/ ctx[24].name + ""))
                set_data(t2, t2_value);
        },
        d: function (detaching) {
            if (detaching)
                detach(div);
            mounted = false;
            dispose();
        }
    };
}
function create_fragment$t(ctx) {
    var div4;
    var t0;
    var div3;
    var figureelement;
    var t1;
    var h2;
    var t3;
    var form;
    var t4;
    var emailinput;
    var updating_emailInputValid;
    var t5;
    var div0;
    var t8;
    var t9;
    var div1;
    var t10;
    var current_block_type_index;
    var if_block2;
    var t11;
    var div2;
    var button;
    var t13;
    var t14;
    var modalfooter;
    var current;
    var mounted;
    var dispose;
    var if_block0 = (!ctx[2] || !ctx[2].hideCloseButton) && create_if_block_6$2(ctx);
    figureelement = new FigureElement({});
    var each_value_1 = /*$app*/ ctx[7].customFields;
    var each_blocks = [];
    for (var i = 0; i < each_value_1.length; i += 1) {
        each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    }
    function emailinput_emailInputValid_binding(value) {
        /*emailinput_emailInputValid_binding*/ ctx[12](value);
    }
    var emailinput_props = {};
    if ( /*emailInputValid*/ctx[4] !== void 0) {
        emailinput_props.emailInputValid = /*emailInputValid*/ ctx[4];
    }
    emailinput = new EmailInput({ props: emailinput_props });
    binding_callbacks.push(function () { return bind(emailinput, 'emailInputValid', emailinput_emailInputValid_binding); });
    var if_block1 = /*$PasswordlessStore*/ ctx[6].passwordlessMode === false && create_if_block_4$3(ctx);
    var if_block_creators = [create_if_block_3$3, create_else_block_1$4];
    var if_blocks = [];
    function select_block_type(ctx, dirty) {
        if ( /*$PasswordlessStore*/ctx[6].passwordlessMode === false)
            return 0;
        return 1;
    }
    current_block_type_index = select_block_type(ctx);
    if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    var if_block3 = ( /*$app*/ctx[7].authProviders.length > 0 || /*$app*/ ctx[7].additionalAuthMethods.passwordless.enabled === true) && create_if_block$e(ctx);
    modalfooter = new ModalFooter({});
    return {
        c: function () {
            div4 = element("div");
            if (if_block0)
                if_block0.c();
            t0 = space();
            div3 = element("div");
            create_component(figureelement.$$.fragment);
            t1 = space();
            h2 = element("h2");
            h2.textContent = "Create an account";
            t3 = space();
            form = element("form");
            for (var i = 0; i < each_blocks.length; i += 1) {
                each_blocks[i].c();
            }
            t4 = space();
            create_component(emailinput.$$.fragment);
            t5 = space();
            div0 = element("div");
            div0.innerHTML = "<label class=\"ms-form__label\" for=\"Rey\">Rey was here</label> \n        <input class=\"ms-form__input\" type=\"text\" placeholder=\"Rey&#39;s Favorite Color\" name=\"Rey\"/>";
            t8 = space();
            if (if_block1)
                if_block1.c();
            t9 = space();
            div1 = element("div");
            t10 = space();
            if_block2.c();
            t11 = space();
            div2 = element("div");
            button = element("button");
            button.textContent = "Already have an account?";
            t13 = space();
            if (if_block3)
                if_block3.c();
            t14 = space();
            create_component(modalfooter.$$.fragment);
            attr(h2, "class", "ms-modal__title");
            attr(div0, "class", "ms-form__group rey-was-here svelte-1w8lbd8");
            attr(div1, "id", "hcaptcha");
            attr(div1, "class", "h-captcha");
            attr(button, "class", "ms-form__button ms-form__button--text ms-form__button--top-spacing");
            attr(div2, "class", "ms-form__flex ms-form__flex--centered");
            attr(form, "class", "ms-form");
            attr(form, "action", "");
            attr(form, "method", "post");
            attr(form, "autocomplete", "off");
            attr(div3, "class", "ms-modal__content");
            attr(div4, "class", "ms-modal");
            attr(div4, "id", "SignupModal");
        },
        m: function (target, anchor) {
            insert(target, div4, anchor);
            if (if_block0)
                if_block0.m(div4, null);
            append(div4, t0);
            append(div4, div3);
            mount_component(figureelement, div3, null);
            append(div3, t1);
            append(div3, h2);
            append(div3, t3);
            append(div3, form);
            for (var i = 0; i < each_blocks.length; i += 1) {
                each_blocks[i].m(form, null);
            }
            append(form, t4);
            mount_component(emailinput, form, null);
            append(form, t5);
            append(form, div0);
            append(form, t8);
            if (if_block1)
                if_block1.m(form, null);
            append(form, t9);
            append(form, div1);
            append(form, t10);
            if_blocks[current_block_type_index].m(form, null);
            append(form, t11);
            append(form, div2);
            append(div2, button);
            append(div3, t13);
            if (if_block3)
                if_block3.m(div3, null);
            append(div4, t14);
            mount_component(modalfooter, div4, null);
            current = true;
            if (!mounted) {
                dispose = [
                    listen(button, "click", /*click_handler*/ ctx[14]),
                    listen(form, "submit", stop_propagation(prevent_default(/*submitSignup*/ ctx[9])))
                ];
                mounted = true;
            }
        },
        p: function (ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if (!ctx[2] || !ctx[2].hideCloseButton) {
                if (if_block0) {
                    if_block0.p(ctx, dirty);
                    if (dirty & /*params*/ 4) {
                        transition_in(if_block0, 1);
                    }
                }
                else {
                    if_block0 = create_if_block_6$2(ctx);
                    if_block0.c();
                    transition_in(if_block0, 1);
                    if_block0.m(div4, t0);
                }
            }
            else if (if_block0) {
                group_outros();
                transition_out(if_block0, 1, 1, function () {
                    if_block0 = null;
                });
                check_outros();
            }
            if (dirty & /*$app*/ 128) {
                each_value_1 = /*$app*/ ctx[7].customFields;
                var i = void 0;
                for (i = 0; i < each_value_1.length; i += 1) {
                    var child_ctx = get_each_context_1(ctx, each_value_1, i);
                    if (each_blocks[i]) {
                        each_blocks[i].p(child_ctx, dirty);
                    }
                    else {
                        each_blocks[i] = create_each_block_1(child_ctx);
                        each_blocks[i].c();
                        each_blocks[i].m(form, t4);
                    }
                }
                for (; i < each_blocks.length; i += 1) {
                    each_blocks[i].d(1);
                }
                each_blocks.length = each_value_1.length;
            }
            var emailinput_changes = {};
            if (!updating_emailInputValid && dirty & /*emailInputValid*/ 16) {
                updating_emailInputValid = true;
                emailinput_changes.emailInputValid = /*emailInputValid*/ ctx[4];
                add_flush_callback(function () { return updating_emailInputValid = false; });
            }
            emailinput.$set(emailinput_changes);
            if ( /*$PasswordlessStore*/ctx[6].passwordlessMode === false) {
                if (if_block1) {
                    if_block1.p(ctx, dirty);
                    if (dirty & /*$PasswordlessStore*/ 64) {
                        transition_in(if_block1, 1);
                    }
                }
                else {
                    if_block1 = create_if_block_4$3(ctx);
                    if_block1.c();
                    transition_in(if_block1, 1);
                    if_block1.m(form, t9);
                }
            }
            else if (if_block1) {
                group_outros();
                transition_out(if_block1, 1, 1, function () {
                    if_block1 = null;
                });
                check_outros();
            }
            var previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx);
            if (current_block_type_index === previous_block_index) {
                if_blocks[current_block_type_index].p(ctx, dirty);
            }
            else {
                group_outros();
                transition_out(if_blocks[previous_block_index], 1, 1, function () {
                    if_blocks[previous_block_index] = null;
                });
                check_outros();
                if_block2 = if_blocks[current_block_type_index];
                if (!if_block2) {
                    if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
                    if_block2.c();
                }
                else {
                    if_block2.p(ctx, dirty);
                }
                transition_in(if_block2, 1);
                if_block2.m(form, t11);
            }
            if ( /*$app*/ctx[7].authProviders.length > 0 || /*$app*/ ctx[7].additionalAuthMethods.passwordless.enabled === true) {
                if (if_block3) {
                    if_block3.p(ctx, dirty);
                    if (dirty & /*$app*/ 128) {
                        transition_in(if_block3, 1);
                    }
                }
                else {
                    if_block3 = create_if_block$e(ctx);
                    if_block3.c();
                    transition_in(if_block3, 1);
                    if_block3.m(div3, null);
                }
            }
            else if (if_block3) {
                group_outros();
                transition_out(if_block3, 1, 1, function () {
                    if_block3 = null;
                });
                check_outros();
            }
        },
        i: function (local) {
            if (current)
                return;
            transition_in(if_block0);
            transition_in(figureelement.$$.fragment, local);
            transition_in(emailinput.$$.fragment, local);
            transition_in(if_block1);
            transition_in(if_block2);
            transition_in(if_block3);
            transition_in(modalfooter.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(if_block0);
            transition_out(figureelement.$$.fragment, local);
            transition_out(emailinput.$$.fragment, local);
            transition_out(if_block1);
            transition_out(if_block2);
            transition_out(if_block3);
            transition_out(modalfooter.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div4);
            if (if_block0)
                if_block0.d();
            destroy_component(figureelement);
            destroy_each(each_blocks, detaching);
            destroy_component(emailinput);
            if (if_block1)
                if_block1.d();
            if_blocks[current_block_type_index].d();
            if (if_block3)
                if_block3.d();
            destroy_component(modalfooter);
            mounted = false;
            run_all(dispose);
        }
    };
}
var hcaptchaSitekey = "838711f9-0e30-48e9-89e6-8f1ec4b79705";
function executeCaptcha() {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, window.hcaptcha.execute({ async: true })];
                case 1:
                    response = (_a.sent()).response;
                    return [2 /*return*/, response];
            }
        });
    });
}
function instance$i($$self, $$props, $$invalidate) {
    var $PasswordlessStore;
    var $app;
    var $textStore;
    component_subscribe($$self, PasswordlessStore, function ($$value) { return $$invalidate(6, $PasswordlessStore = $$value); });
    component_subscribe($$self, AppStore, function ($$value) { return $$invalidate(7, $app = $$value); });
    component_subscribe($$self, TextStore, function ($$value) { return $$invalidate(19, $textStore = $$value); });
    var closeModal = $$props.closeModal;
    var display = $$props.display;
    var onSuccessSignup = $$props.onSuccessSignup;
    var params = $$props.params;
    if ($app.additionalAuthMethods.passwordless.isDefault === true) {
        setPasswordlessMode(true);
    }
    var text = $textStore.text;
    var showLoader = false;
    var emailInputValid = false;
    var passwordInputValid = false;
    var captchaRequired = $app.captchaRequired;
    var hcaptchaWidgetID;
    function renderCaptcha() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!captchaRequired) return [3 /*break*/, 2];
                        return [4 /*yield*/, window.$memberstackDom._captchaReady];
                    case 1:
                        _a.sent();
                        hcaptchaWidgetID = window.hcaptcha.render("hcaptcha", { sitekey: hcaptchaSitekey, theme: "light" });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    }
    renderCaptcha();
    function getCaptcha() {
        return window.hcaptcha.getResponse(hcaptchaWidgetID);
    }
    function resetCaptcha() {
        if (captchaRequired && window.hcaptcha) {
            window.hcaptcha.reset(hcaptchaWidgetID);
        }
    }
    function submitSignup(e) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var emailInput, passwordInput, customFields, customFieldInputs, captchaToken, err_4, plans, data, err_5, err_6;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        emailInput = e.target.querySelector("[type=email]");
                        passwordInput = e.target.querySelector("[data-ms-internal-password]");
                        customFields = {};
                        customFieldInputs = Array.from(e.target.querySelectorAll("[data-ms-custom-field]"));
                        customFieldInputs.map(function (input) {
                            customFields[input.getAttribute("name")] = input.value;
                        }).length;
                        if ($PasswordlessStore.passwordlessMode !== true) {
                            if (!emailInputValid || !passwordInputValid)
                                return [2 /*return*/];
                        }
                        else {
                            if (!emailInputValid)
                                return [2 /*return*/];
                        }
                        $$invalidate(3, showLoader = true);
                        // honey pot to prevent spam
                        if (e.target.querySelector("[name=Rey]").value) {
                            e.target.reset();
                            $$invalidate(3, showLoader = false);
                            return [2 /*return*/];
                        }
                        if (!captchaRequired) return [3 /*break*/, 5];
                        return [4 /*yield*/, window.$memberstackDom._captchaReady];
                    case 1:
                        _c.sent();
                        captchaToken = getCaptcha();
                        if (!!captchaToken) return [3 /*break*/, 5];
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, executeCaptcha()];
                    case 3:
                        captchaToken = _c.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_4 = _c.sent();
                        $$invalidate(3, showLoader = false);
                        return [2 /*return*/];
                    case 5:
                        if (!($PasswordlessStore.passwordlessMode !== true)) return [3 /*break*/, 10];
                        _c.label = 6;
                    case 6:
                        _c.trys.push([6, 8, , 9]);
                        plans = (((_a = params === null || params === void 0 ? void 0 : params.signup) === null || _a === void 0 ? void 0 : _a.plans) || []).map(function (plan) {
                            return { planId: plan };
                        });
                        return [4 /*yield*/, window.$memberstackDom.signupMemberEmailPassword({
                                email: emailInput.value,
                                password: passwordInput.value,
                                plans: plans,
                                customFields: customFields,
                                captchaToken: captchaToken
                            }, { includeContentGroups: true })];
                    case 7:
                        data = (_c.sent()).data;
                        onSuccessSignup({ type: "SIGNUP", data: data });
                        $$invalidate(3, showLoader = false);
                        return [3 /*break*/, 9];
                    case 8:
                        err_5 = _c.sent();
                        $$invalidate(3, showLoader = false);
                        window.$memberstackDom._showMessage(err_5.message, true);
                        resetCaptcha();
                        return [3 /*break*/, 9];
                    case 9: return [3 /*break*/, 13];
                    case 10:
                        _c.trys.push([10, 12, , 13]);
                        return [4 /*yield*/, window.$memberstackDom.sendMemberSignupPasswordlessEmail({ email: emailInput.value })];
                    case 11:
                        _c.sent();
                        // let the passwordlessTokenModal know its accessed from the signup modal
                        setPasswordlessModalType("signup");
                        setPasswordlessEmail(emailInput.value);
                        setPasswordlessPlans(((_b = params === null || params === void 0 ? void 0 : params.signup) === null || _b === void 0 ? void 0 : _b.plans) || []);
                        setPasswordlessCustomFields(customFields);
                        // show the PasswordlessTokenModal
                        $$invalidate(0, display = "passwordless_token");
                        $$invalidate(3, showLoader = false);
                        return [3 /*break*/, 13];
                    case 12:
                        err_6 = _c.sent();
                        $$invalidate(3, showLoader = false);
                        window.$memberstackDom._showMessage(err_6.message, true);
                        resetCaptcha();
                        return [3 /*break*/, 13];
                    case 13: return [2 /*return*/];
                }
            });
        });
    }
    function submitSignupWithProvider(provider) {
        return __awaiter(this, void 0, void 0, function () {
            var data, err_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, window.$memberstackDom.signupWithProvider({ provider: provider })];
                    case 1:
                        data = (_a.sent()).data;
                        onSuccessSignup({ type: "SIGNUP", data: data });
                        return [3 /*break*/, 3];
                    case 2:
                        err_7 = _a.sent();
                        $$invalidate(3, showLoader = false);
                        window.$memberstackDom._showMessage(err_7.message, true);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function emailinput_emailInputValid_binding(value) {
        emailInputValid = value;
        $$invalidate(4, emailInputValid);
    }
    function passwordinput_passwordInputValid_binding(value) {
        passwordInputValid = value;
        $$invalidate(5, passwordInputValid);
    }
    var click_handler = function () { return $$invalidate(0, display = "login"); };
    var click_handler_1 = function () { return setPasswordlessMode(true); };
    var click_handler_2 = function () { return setPasswordlessMode(false); };
    var click_handler_3 = function (provider) { return submitSignupWithProvider(provider.provider); };
    $$self.$$set = function ($$props) {
        if ('closeModal' in $$props)
            $$invalidate(1, closeModal = $$props.closeModal);
        if ('display' in $$props)
            $$invalidate(0, display = $$props.display);
        if ('onSuccessSignup' in $$props)
            $$invalidate(11, onSuccessSignup = $$props.onSuccessSignup);
        if ('params' in $$props)
            $$invalidate(2, params = $$props.params);
    };
    return [
        display,
        closeModal,
        params,
        showLoader,
        emailInputValid,
        passwordInputValid,
        $PasswordlessStore,
        $app,
        text,
        submitSignup,
        submitSignupWithProvider,
        onSuccessSignup,
        emailinput_emailInputValid_binding,
        passwordinput_passwordInputValid_binding,
        click_handler,
        click_handler_1,
        click_handler_2,
        click_handler_3
    ];
}
var SignupModal = /** @class */ (function (_super) {
    __extends(SignupModal, _super);
    function SignupModal(options) {
        var _this = _super.call(this) || this;
        init(_this, options, instance$i, create_fragment$t, safe_not_equal, {
            closeModal: 1,
            display: 0,
            onSuccessSignup: 11,
            params: 2
        }, add_css$1);
        return _this;
    }
    return SignupModal;
}(SvelteComponent));
/* src/icons/BackIcon.svelte generated by Svelte v3.48.0 */
function create_fragment$s(ctx) {
    var svg;
    var path;
    return {
        c: function () {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "fill", "currentColor");
            attr(path, "d", "M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z");
            attr(svg, "fill", "none");
            attr(svg, "viewBox", "0 0 8 12");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
        },
        m: function (target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
        },
        p: noop,
        i: noop,
        o: noop,
        d: function (detaching) {
            if (detaching)
                detach(svg);
        }
    };
}
var BackIcon = /** @class */ (function (_super) {
    __extends(BackIcon, _super);
    function BackIcon(options) {
        var _this = _super.call(this) || this;
        init(_this, options, null, create_fragment$s, safe_not_equal, {});
        return _this;
    }
    return BackIcon;
}(SvelteComponent));
/* src/modals/PassResetModal.svelte generated by Svelte v3.48.0 */
function create_fragment$r(ctx) {
    var div4;
    var div0;
    var button;
    var backicon;
    var t0;
    var div3;
    var figureelement;
    var t1;
    var h2;
    var t3;
    var p;
    var t5;
    var form;
    var emailinput;
    var updating_emailInputValid;
    var t6;
    var submitbutton;
    var t7;
    var div2;
    var div1;
    var t9;
    var modalfooter;
    var current;
    var mounted;
    var dispose;
    backicon = new BackIcon({});
    figureelement = new FigureElement({});
    function emailinput_emailInputValid_binding(value) {
        /*emailinput_emailInputValid_binding*/ ctx[7](value);
    }
    var emailinput_props = {
        placeholder: /*text*/ ctx[3]["reset_email_placeholder"]
    };
    if ( /*emailInputValid*/ctx[1] !== void 0) {
        emailinput_props.emailInputValid = /*emailInputValid*/ ctx[1];
    }
    emailinput = new EmailInput({ props: emailinput_props });
    binding_callbacks.push(function () { return bind(emailinput, 'emailInputValid', emailinput_emailInputValid_binding); });
    submitbutton = new SubmitButton({
        props: {
            buttonText: /*text*/ ctx[3]["reset"] || "Send Link",
            isLoading: /*showLoader*/ ctx[2]
        }
    });
    modalfooter = new ModalFooter({});
    return {
        c: function () {
            div4 = element("div");
            div0 = element("div");
            button = element("button");
            create_component(backicon.$$.fragment);
            t0 = space();
            div3 = element("div");
            create_component(figureelement.$$.fragment);
            t1 = space();
            h2 = element("h2");
            h2.textContent = "".concat(/*text*/ ctx[3]["reset_your_password"] || "Reset your password");
            t3 = space();
            p = element("p");
            p.textContent = "".concat(/*text*/ ctx[3]["reset_instructions"] || "We’ll email you a secure link to reset the password for your account.");
            t5 = space();
            form = element("form");
            create_component(emailinput.$$.fragment);
            t6 = space();
            create_component(submitbutton.$$.fragment);
            t7 = space();
            div2 = element("div");
            div1 = element("div");
            div1.textContent = "".concat(/*text*/ ctx[3]["reset_already_have_code"] || "I already have a code");
            t9 = space();
            create_component(modalfooter.$$.fragment);
            attr(div0, "data-cy", "back-btn");
            attr(div0, "class", "ms-modal__back");
            attr(h2, "class", "ms-modal__title ms-modal__title--sub-text");
            attr(p, "class", "ms-modal__text");
            attr(div1, "class", "ms-form__link");
            attr(div2, "class", "ms-form__flex ms-form__flex--centered");
            attr(form, "class", "ms-form");
            attr(form, "action", "");
            attr(form, "method", "post");
            attr(form, "autocomplete", "off");
            attr(div3, "class", "ms-modal__content");
            attr(div4, "class", "ms-modal");
            attr(div4, "id", "PasswordResetModal");
        },
        m: function (target, anchor) {
            insert(target, div4, anchor);
            append(div4, div0);
            append(div0, button);
            mount_component(backicon, button, null);
            append(div4, t0);
            append(div4, div3);
            mount_component(figureelement, div3, null);
            append(div3, t1);
            append(div3, h2);
            append(div3, t3);
            append(div3, p);
            append(div3, t5);
            append(div3, form);
            mount_component(emailinput, form, null);
            append(form, t6);
            mount_component(submitbutton, form, null);
            append(form, t7);
            append(form, div2);
            append(div2, div1);
            append(div4, t9);
            mount_component(modalfooter, div4, null);
            current = true;
            if (!mounted) {
                dispose = [
                    listen(button, "click", /*click_handler*/ ctx[6]),
                    listen(div1, "click", /*click_handler_1*/ ctx[8]),
                    listen(form, "submit", stop_propagation(prevent_default(/*submitPasswordReset*/ ctx[4])))
                ];
                mounted = true;
            }
        },
        p: function (ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            var emailinput_changes = {};
            if (!updating_emailInputValid && dirty & /*emailInputValid*/ 2) {
                updating_emailInputValid = true;
                emailinput_changes.emailInputValid = /*emailInputValid*/ ctx[1];
                add_flush_callback(function () { return updating_emailInputValid = false; });
            }
            emailinput.$set(emailinput_changes);
            var submitbutton_changes = {};
            if (dirty & /*showLoader*/ 4)
                submitbutton_changes.isLoading = /*showLoader*/ ctx[2];
            submitbutton.$set(submitbutton_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(backicon.$$.fragment, local);
            transition_in(figureelement.$$.fragment, local);
            transition_in(emailinput.$$.fragment, local);
            transition_in(submitbutton.$$.fragment, local);
            transition_in(modalfooter.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(backicon.$$.fragment, local);
            transition_out(figureelement.$$.fragment, local);
            transition_out(emailinput.$$.fragment, local);
            transition_out(submitbutton.$$.fragment, local);
            transition_out(modalfooter.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div4);
            destroy_component(backicon);
            destroy_component(figureelement);
            destroy_component(emailinput);
            destroy_component(submitbutton);
            destroy_component(modalfooter);
            mounted = false;
            run_all(dispose);
        }
    };
}
function instance$h($$self, $$props, $$invalidate) {
    var $textStore;
    component_subscribe($$self, TextStore, function ($$value) { return $$invalidate(9, $textStore = $$value); });
    var text = $textStore.text;
    var closeModal = $$props.closeModal;
    var display = $$props.display;
    var emailInputValid = false;
    var showLoader = false;
    function submitPasswordReset(e) {
        return __awaiter(this, void 0, void 0, function () {
            var emailInput, err_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        emailInput = e.target[0];
                        if (!emailInputValid)
                            return [2 /*return*/];
                        $$invalidate(2, showLoader = true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, window.$memberstackDom.sendMemberResetPasswordEmail({ email: emailInput.value })];
                    case 2:
                        _a.sent();
                        $$invalidate(0, display = "reset_password");
                        return [3 /*break*/, 4];
                    case 3:
                        err_8 = _a.sent();
                        console.log(err_8);
                        $$invalidate(2, showLoader = false);
                        if (err_8.message) {
                            window.$memberstackDom._showMessage(err_8.message, false);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    var click_handler = function () { return $$invalidate(0, display = "login"); };
    function emailinput_emailInputValid_binding(value) {
        emailInputValid = value;
        $$invalidate(1, emailInputValid);
    }
    var click_handler_1 = function () { return $$invalidate(0, display = "reset_password"); };
    $$self.$$set = function ($$props) {
        if ('closeModal' in $$props)
            $$invalidate(5, closeModal = $$props.closeModal);
        if ('display' in $$props)
            $$invalidate(0, display = $$props.display);
    };
    return [
        display,
        emailInputValid,
        showLoader,
        text,
        submitPasswordReset,
        closeModal,
        click_handler,
        emailinput_emailInputValid_binding,
        click_handler_1
    ];
}
var PassResetModal = /** @class */ (function (_super) {
    __extends(PassResetModal, _super);
    function PassResetModal(options) {
        var _this = _super.call(this) || this;
        init(_this, options, instance$h, create_fragment$r, safe_not_equal, { closeModal: 5, display: 0 });
        return _this;
    }
    return PassResetModal;
}(SvelteComponent));
/* src/modals/PassTokenModal.svelte generated by Svelte v3.48.0 */
function create_if_block$d(ctx) {
    var div;
    var erroricon;
    var t;
    var current;
    erroricon = new ErrorIcon({});
    return {
        c: function () {
            div = element("div");
            create_component(erroricon.$$.fragment);
            t = text(" Please enter a valid code");
            attr(div, "class", "ms-form__error");
        },
        m: function (target, anchor) {
            insert(target, div, anchor);
            mount_component(erroricon, div, null);
            append(div, t);
            current = true;
        },
        i: function (local) {
            if (current)
                return;
            transition_in(erroricon.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(erroricon.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div);
            destroy_component(erroricon);
        }
    };
}
function create_fragment$q(ctx) {
    var div3;
    var div0;
    var button;
    var backicon;
    var t0;
    var closebutton;
    var t1;
    var div2;
    var figureelement;
    var t2;
    var h2;
    var t4;
    var form;
    var div1;
    var label;
    var t6;
    var fieldset;
    var t12;
    var t13;
    var passwordinput;
    var updating_passwordInputValid;
    var t14;
    var submitbutton;
    var t15;
    var modalfooter;
    var current;
    var mounted;
    var dispose;
    backicon = new BackIcon({});
    closebutton = new CloseButton({
        props: { closeModal: /*closeModal*/ ctx[1] }
    });
    figureelement = new FigureElement({});
    var if_block = !ctx[3] && create_if_block$d();
    function passwordinput_passwordInputValid_binding(value) {
        /*passwordinput_passwordInputValid_binding*/ ctx[9](value);
    }
    var passwordinput_props = {
        passwordPlaceholder: /*text*/ ctx[5]["reset_password_placeholder"],
        passwordLabel: /*text*/ ctx[5]["password"] || "Password"
    };
    if ( /*passwordInputValid*/ctx[4] !== void 0) {
        passwordinput_props.passwordInputValid = /*passwordInputValid*/ ctx[4];
    }
    passwordinput = new PasswordInput({ props: passwordinput_props });
    binding_callbacks.push(function () { return bind(passwordinput, 'passwordInputValid', passwordinput_passwordInputValid_binding); });
    submitbutton = new SubmitButton({
        props: {
            buttonText: /*text*/ ctx[5]["reset_confirm_reset"] || "Confirm & Reset",
            isLoading: /*showLoader*/ ctx[2]
        }
    });
    modalfooter = new ModalFooter({});
    return {
        c: function () {
            div3 = element("div");
            div0 = element("div");
            button = element("button");
            create_component(backicon.$$.fragment);
            t0 = space();
            create_component(closebutton.$$.fragment);
            t1 = space();
            div2 = element("div");
            create_component(figureelement.$$.fragment);
            t2 = space();
            h2 = element("h2");
            h2.textContent = "".concat(/*text*/ ctx[5]["reset_your_password"] || "Reset your password");
            t4 = space();
            form = element("form");
            div1 = element("div");
            label = element("label");
            label.textContent = "".concat(/*text*/ ctx[5]["reset_enter_code"] || "Enter your 6-digit code");
            t6 = space();
            fieldset = element("fieldset");
            fieldset.innerHTML = "<input type=\"tel\" name=\"token\" class=\"ms-form__input ms-form__input--token\" required=\"\"/> \n          <input type=\"tel\" name=\"token\" class=\"ms-form__input ms-form__input--token\" required=\"\"/> \n          <input type=\"tel\" name=\"token\" class=\"ms-form__input ms-form__input--token\" required=\"\"/> \n          <input type=\"tel\" name=\"token\" class=\"ms-form__input ms-form__input--token\" required=\"\"/> \n          <input type=\"tel\" name=\"token\" class=\"ms-form__input ms-form__input--token\" required=\"\"/> \n          <input type=\"tel\" name=\"token\" class=\"ms-form__input ms-form__input--token\"/>";
            t12 = space();
            if (if_block)
                if_block.c();
            t13 = space();
            create_component(passwordinput.$$.fragment);
            t14 = space();
            create_component(submitbutton.$$.fragment);
            t15 = space();
            create_component(modalfooter.$$.fragment);
            attr(div0, "class", "ms-modal__back");
            attr(h2, "class", "ms-modal__title");
            attr(label, "class", "ms-form__label");
            attr(label, "for", "token-fieldset");
            attr(fieldset, "class", "ms-form__fieldset");
            attr(fieldset, "name", "token-fieldset");
            attr(div1, "class", "ms-form__group");
            attr(form, "class", "ms-form");
            attr(form, "action", "");
            attr(form, "method", "post");
            attr(form, "autocomplete", "off");
            attr(div2, "class", "ms-modal__content");
            attr(div3, "class", "ms-modal");
            attr(div3, "id", "PasswordTokenModal");
        },
        m: function (target, anchor) {
            insert(target, div3, anchor);
            append(div3, div0);
            append(div0, button);
            mount_component(backicon, button, null);
            append(div3, t0);
            mount_component(closebutton, div3, null);
            append(div3, t1);
            append(div3, div2);
            mount_component(figureelement, div2, null);
            append(div2, t2);
            append(div2, h2);
            append(div2, t4);
            append(div2, form);
            append(form, div1);
            append(div1, label);
            append(div1, t6);
            append(div1, fieldset);
            append(div1, t12);
            if (if_block)
                if_block.m(div1, null);
            append(form, t13);
            mount_component(passwordinput, form, null);
            append(form, t14);
            mount_component(submitbutton, form, null);
            append(div3, t15);
            mount_component(modalfooter, div3, null);
            current = true;
            if (!mounted) {
                dispose = [
                    listen(button, "click", /*click_handler*/ ctx[8]),
                    listen(form, "submit", stop_propagation(prevent_default(/*submitPasswordToken*/ ctx[6])))
                ];
                mounted = true;
            }
        },
        p: function (ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            var closebutton_changes = {};
            if (dirty & /*closeModal*/ 2)
                closebutton_changes.closeModal = /*closeModal*/ ctx[1];
            closebutton.$set(closebutton_changes);
            if (!ctx[3]) {
                if (if_block) {
                    if (dirty & /*tokenInputValid*/ 8) {
                        transition_in(if_block, 1);
                    }
                }
                else {
                    if_block = create_if_block$d();
                    if_block.c();
                    transition_in(if_block, 1);
                    if_block.m(div1, null);
                }
            }
            else if (if_block) {
                group_outros();
                transition_out(if_block, 1, 1, function () {
                    if_block = null;
                });
                check_outros();
            }
            var passwordinput_changes = {};
            if (!updating_passwordInputValid && dirty & /*passwordInputValid*/ 16) {
                updating_passwordInputValid = true;
                passwordinput_changes.passwordInputValid = /*passwordInputValid*/ ctx[4];
                add_flush_callback(function () { return updating_passwordInputValid = false; });
            }
            passwordinput.$set(passwordinput_changes);
            var submitbutton_changes = {};
            if (dirty & /*showLoader*/ 4)
                submitbutton_changes.isLoading = /*showLoader*/ ctx[2];
            submitbutton.$set(submitbutton_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(backicon.$$.fragment, local);
            transition_in(closebutton.$$.fragment, local);
            transition_in(figureelement.$$.fragment, local);
            transition_in(if_block);
            transition_in(passwordinput.$$.fragment, local);
            transition_in(submitbutton.$$.fragment, local);
            transition_in(modalfooter.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(backicon.$$.fragment, local);
            transition_out(closebutton.$$.fragment, local);
            transition_out(figureelement.$$.fragment, local);
            transition_out(if_block);
            transition_out(passwordinput.$$.fragment, local);
            transition_out(submitbutton.$$.fragment, local);
            transition_out(modalfooter.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div3);
            destroy_component(backicon);
            destroy_component(closebutton);
            destroy_component(figureelement);
            if (if_block)
                if_block.d();
            destroy_component(passwordinput);
            destroy_component(submitbutton);
            destroy_component(modalfooter);
            mounted = false;
            run_all(dispose);
        }
    };
}
function instance$g($$self, $$props, $$invalidate) {
    var $textStore;
    component_subscribe($$self, TextStore, function ($$value) { return $$invalidate(10, $textStore = $$value); });
    var text = $textStore.text;
    var closeModal = $$props.closeModal;
    var display = $$props.display;
    var onSuccessPasswordReset = $$props.onSuccessPasswordReset;
    var showLoader = false;
    var tokenInputValid = true;
    var passwordInputValid = true;
    onMount(function () {
        var tokenElements = __spreadArray([], __read(document.querySelectorAll("input.ms-form__input--token")), false);
        tokenElements.forEach(function (ele, index) {
            ele.addEventListener("keydown", function (e) {
                if (e.keyCode === 8 && e.target.value === "")
                    tokenElements[Math.max(0, index - 1)].focus();
            });
            ele.addEventListener("input", function (e) {
                var _a = __read(e.target.value), first = _a[0], rest = _a.slice(1);
                e.target.value = first !== null && first !== void 0 ? first : "";
                var lastInputBox = index === tokenElements.length - 1;
                var insertedContent = first !== undefined;
                if (insertedContent && !lastInputBox) {
                    tokenElements[index + 1].focus();
                    tokenElements[index + 1].value = rest.join("");
                    tokenElements[index + 1].dispatchEvent(new Event("input"));
                }
            });
        });
    });
    var validateFields = function (e) {
        var tokenElements = __spreadArray([], __read(document.querySelectorAll("input.ms-form__input--token")), false);
        var hasEmpty = tokenElements.some(function (el) {
            if (!el.value) {
                return true;
            }
            return false;
        });
        if (hasEmpty) {
            $$invalidate(3, tokenInputValid = false);
        }
        else {
            $$invalidate(3, tokenInputValid = true);
        }
        return !hasEmpty;
    };
    function submitPasswordToken(e) {
        return __awaiter(this, void 0, void 0, function () {
            var passwordInput, isValid, token, message, err_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        passwordInput = e.target[7];
                        isValid = validateFields();
                        if (!isValid)
                            return [2 /*return*/];
                        token = __spreadArray([], __read(document.getElementsByName("token")), false).filter(function (_a) {
                            var name = _a.name;
                            return name;
                        }).map(function (_a) {
                            var value = _a.value;
                            return value;
                        }).join("");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        $$invalidate(2, showLoader = true);
                        return [4 /*yield*/, window.$memberstackDom.resetMemberPassword({ token: token, newPassword: passwordInput.value })];
                    case 2:
                        message = (_a.sent())._internalUseOnly.message;
                        window.$memberstackDom._showMessage(message, false);
                        onSuccessPasswordReset({ type: "PASSWORD_RESET", data: {} });
                        $$invalidate(2, showLoader = false);
                        $$invalidate(0, display = "reset_password_success");
                        return [3 /*break*/, 4];
                    case 3:
                        err_9 = _a.sent();
                        $$invalidate(2, showLoader = false);
                        console.log(err_9);
                        if (err_9.message) {
                            window.$memberstackDom._showMessage(err_9.message, true);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    var click_handler = function () { return $$invalidate(0, display = "forgot_password"); };
    function passwordinput_passwordInputValid_binding(value) {
        passwordInputValid = value;
        $$invalidate(4, passwordInputValid);
    }
    $$self.$$set = function ($$props) {
        if ('closeModal' in $$props)
            $$invalidate(1, closeModal = $$props.closeModal);
        if ('display' in $$props)
            $$invalidate(0, display = $$props.display);
        if ('onSuccessPasswordReset' in $$props)
            $$invalidate(7, onSuccessPasswordReset = $$props.onSuccessPasswordReset);
    };
    return [
        display,
        closeModal,
        showLoader,
        tokenInputValid,
        passwordInputValid,
        text,
        submitPasswordToken,
        onSuccessPasswordReset,
        click_handler,
        passwordinput_passwordInputValid_binding
    ];
}
var PassTokenModal = /** @class */ (function (_super) {
    __extends(PassTokenModal, _super);
    function PassTokenModal(options) {
        var _this = _super.call(this) || this;
        init(_this, options, instance$g, create_fragment$q, safe_not_equal, {
            closeModal: 1,
            display: 0,
            onSuccessPasswordReset: 7
        });
        return _this;
    }
    return PassTokenModal;
}(SvelteComponent));
/* src/modals/PassSuccessModal.svelte generated by Svelte v3.48.0 */
function create_fragment$p(ctx) {
    var div2;
    var div0;
    var t0;
    var closebutton;
    var t1;
    var div1;
    var figureelement;
    var t2;
    var h2;
    var t4;
    var p;
    var t7;
    var modalfooter;
    var current;
    closebutton = new CloseButton({
        props: { closeModal: /*closeModal*/ ctx[0] }
    });
    figureelement = new FigureElement({});
    modalfooter = new ModalFooter({});
    return {
        c: function () {
            div2 = element("div");
            div0 = element("div");
            t0 = space();
            create_component(closebutton.$$.fragment);
            t1 = space();
            div1 = element("div");
            create_component(figureelement.$$.fragment);
            t2 = space();
            h2 = element("h2");
            h2.textContent = "Success!";
            t4 = space();
            p = element("p");
            p.innerHTML = "Your password has been reset. <br/>\n      Please login with your new credentials.";
            t7 = space();
            create_component(modalfooter.$$.fragment);
            attr(div0, "data-cy", "back-btn");
            attr(div0, "class", "ms-modal__back");
            attr(h2, "class", "ms-modal__title ms-modal__title--sub-text");
            attr(p, "class", "ms-modal__text");
            attr(div1, "class", "ms-modal__content");
            attr(div2, "class", "ms-modal");
            attr(div2, "id", "PasswordSuccessModal");
        },
        m: function (target, anchor) {
            insert(target, div2, anchor);
            append(div2, div0);
            append(div2, t0);
            mount_component(closebutton, div2, null);
            append(div2, t1);
            append(div2, div1);
            mount_component(figureelement, div1, null);
            append(div1, t2);
            append(div1, h2);
            append(div1, t4);
            append(div1, p);
            append(div2, t7);
            mount_component(modalfooter, div2, null);
            current = true;
        },
        p: function (ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            var closebutton_changes = {};
            if (dirty & /*closeModal*/ 1)
                closebutton_changes.closeModal = /*closeModal*/ ctx[0];
            closebutton.$set(closebutton_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(closebutton.$$.fragment, local);
            transition_in(figureelement.$$.fragment, local);
            transition_in(modalfooter.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(closebutton.$$.fragment, local);
            transition_out(figureelement.$$.fragment, local);
            transition_out(modalfooter.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div2);
            destroy_component(closebutton);
            destroy_component(figureelement);
            destroy_component(modalfooter);
        }
    };
}
function instance$f($$self, $$props, $$invalidate) {
    var closeModal = $$props.closeModal;
    $$self.$$set = function ($$props) {
        if ('closeModal' in $$props)
            $$invalidate(0, closeModal = $$props.closeModal);
    };
    return [closeModal];
}
var PassSuccessModal = /** @class */ (function (_super) {
    __extends(PassSuccessModal, _super);
    function PassSuccessModal(options) {
        var _this = _super.call(this) || this;
        init(_this, options, instance$f, create_fragment$p, safe_not_equal, { closeModal: 0 });
        return _this;
    }
    return PassSuccessModal;
}(SvelteComponent));
/* src/modals/PasswordlessTokenModal.svelte generated by Svelte v3.48.0 */
function create_else_block_1$3(ctx) {
    var button;
    var backicon;
    var current;
    var mounted;
    var dispose;
    backicon = new BackIcon({});
    return {
        c: function () {
            button = element("button");
            create_component(backicon.$$.fragment);
        },
        m: function (target, anchor) {
            insert(target, button, anchor);
            mount_component(backicon, button, null);
            current = true;
            if (!mounted) {
                dispose = listen(button, "click", /*click_handler_1*/ ctx[10]);
                mounted = true;
            }
        },
        p: noop,
        i: function (local) {
            if (current)
                return;
            transition_in(backicon.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(backicon.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(button);
            destroy_component(backicon);
            mounted = false;
            dispose();
        }
    };
}
// (140:4) {#if $PasswordlessStore.passwordlessModalType === "login"}
function create_if_block_2$7(ctx) {
    var button;
    var backicon;
    var current;
    var mounted;
    var dispose;
    backicon = new BackIcon({});
    return {
        c: function () {
            button = element("button");
            create_component(backicon.$$.fragment);
        },
        m: function (target, anchor) {
            insert(target, button, anchor);
            mount_component(backicon, button, null);
            current = true;
            if (!mounted) {
                dispose = listen(button, "click", /*click_handler*/ ctx[9]);
                mounted = true;
            }
        },
        p: noop,
        i: function (local) {
            if (current)
                return;
            transition_in(backicon.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(backicon.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(button);
            destroy_component(backicon);
            mounted = false;
            dispose();
        }
    };
}
// (159:4) {:else}
function create_else_block$6(ctx) {
    var h2;
    return {
        c: function () {
            h2 = element("h2");
            h2.textContent = "".concat(/*text*/ ctx[5]["passwordless_token_heading"] || "Create an account");
            attr(h2, "class", "ms-modal__title ms-modal__title--sub-text");
        },
        m: function (target, anchor) {
            insert(target, h2, anchor);
        },
        p: noop,
        d: function (detaching) {
            if (detaching)
                detach(h2);
        }
    };
}
// (155:4) {#if $PasswordlessStore.passwordlessModalType === "login"}
function create_if_block_1$a(ctx) {
    var h2;
    return {
        c: function () {
            h2 = element("h2");
            h2.textContent = "".concat(/*text*/ ctx[5]["login_to_your_account"] || "Login to your account");
            attr(h2, "class", "ms-modal__title ms-modal__title--sub-text");
        },
        m: function (target, anchor) {
            insert(target, h2, anchor);
        },
        p: noop,
        d: function (detaching) {
            if (detaching)
                detach(h2);
        }
    };
}
// (218:8) {#if !tokenInputValid}
function create_if_block$c(ctx) {
    var div;
    var erroricon;
    var t;
    var current;
    erroricon = new ErrorIcon({});
    return {
        c: function () {
            div = element("div");
            create_component(erroricon.$$.fragment);
            t = text(" Please enter a valid code");
            attr(div, "class", "ms-form__error");
        },
        m: function (target, anchor) {
            insert(target, div, anchor);
            mount_component(erroricon, div, null);
            append(div, t);
            current = true;
        },
        i: function (local) {
            if (current)
                return;
            transition_in(erroricon.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(erroricon.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div);
            destroy_component(erroricon);
        }
    };
}
function create_fragment$o(ctx) {
    var div3;
    var div0;
    var current_block_type_index;
    var if_block0;
    var t0;
    var closebutton;
    var t1;
    var div2;
    var figureelement;
    var t2;
    var t3;
    var p;
    var t5;
    var form;
    var div1;
    var label;
    var t7;
    var fieldset;
    var t13;
    var t14;
    var submitbutton;
    var t15;
    var modalfooter;
    var current;
    var mounted;
    var dispose;
    var if_block_creators = [create_if_block_2$7, create_else_block_1$3];
    var if_blocks = [];
    function select_block_type(ctx, dirty) {
        if ( /*$PasswordlessStore*/ctx[4].passwordlessModalType === "login")
            return 0;
        return 1;
    }
    current_block_type_index = select_block_type(ctx);
    if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    closebutton = new CloseButton({
        props: { closeModal: /*closeModal*/ ctx[1] }
    });
    figureelement = new FigureElement({});
    function select_block_type_1(ctx, dirty) {
        if ( /*$PasswordlessStore*/ctx[4].passwordlessModalType === "login")
            return create_if_block_1$a;
        return create_else_block$6;
    }
    var current_block_type = select_block_type_1(ctx);
    var if_block1 = current_block_type(ctx);
    var if_block2 = !ctx[3] && create_if_block$c();
    submitbutton = new SubmitButton({
        props: {
            buttonText: /*text*/ ctx[5]["login_verify_email"] || "Verify Email",
            isLoading: /*showLoader*/ ctx[2]
        }
    });
    modalfooter = new ModalFooter({});
    return {
        c: function () {
            div3 = element("div");
            div0 = element("div");
            if_block0.c();
            t0 = space();
            create_component(closebutton.$$.fragment);
            t1 = space();
            div2 = element("div");
            create_component(figureelement.$$.fragment);
            t2 = space();
            if_block1.c();
            t3 = space();
            p = element("p");
            p.textContent = "".concat(/*text*/ ctx[5]["login_passwordless_instructions"] || "Enter the verification code sent to your email address");
            t5 = space();
            form = element("form");
            div1 = element("div");
            label = element("label");
            label.textContent = "".concat(/*text*/ ctx[5]["login_verification_code"] || "Verification Code");
            t7 = space();
            fieldset = element("fieldset");
            fieldset.innerHTML = "<input name=\"token\" class=\"ms-form__input ms-form__input--token\" required=\"\" type=\"tel\"/> \n          <input name=\"token\" class=\"ms-form__input ms-form__input--token\" required=\"\" type=\"tel\"/> \n          <input name=\"token\" class=\"ms-form__input ms-form__input--token\" required=\"\" type=\"tel\"/> \n          <input name=\"token\" class=\"ms-form__input ms-form__input--token\" required=\"\" type=\"tel\"/> \n          <input name=\"token\" class=\"ms-form__input ms-form__input--token\" required=\"\" type=\"tel\"/> \n          <input name=\"token\" class=\"ms-form__input ms-form__input--token\" type=\"tel\"/>";
            t13 = space();
            if (if_block2)
                if_block2.c();
            t14 = space();
            create_component(submitbutton.$$.fragment);
            t15 = space();
            create_component(modalfooter.$$.fragment);
            attr(div0, "class", "ms-modal__back");
            attr(p, "class", "ms-modal__text");
            attr(label, "class", "ms-form__label");
            attr(label, "for", "token-fieldset");
            attr(fieldset, "class", "ms-form__fieldset");
            attr(fieldset, "name", "token-fieldset");
            attr(div1, "class", "ms-form__group");
            attr(form, "class", "ms-form");
            attr(form, "action", "");
            attr(form, "method", "post");
            attr(form, "autocomplete", "off");
            attr(div2, "class", "ms-modal__content");
            attr(div3, "class", "ms-modal");
            attr(div3, "id", "PasswordlessTokenModal");
        },
        m: function (target, anchor) {
            insert(target, div3, anchor);
            append(div3, div0);
            if_blocks[current_block_type_index].m(div0, null);
            append(div3, t0);
            mount_component(closebutton, div3, null);
            append(div3, t1);
            append(div3, div2);
            mount_component(figureelement, div2, null);
            append(div2, t2);
            if_block1.m(div2, null);
            append(div2, t3);
            append(div2, p);
            append(div2, t5);
            append(div2, form);
            append(form, div1);
            append(div1, label);
            append(div1, t7);
            append(div1, fieldset);
            append(div1, t13);
            if (if_block2)
                if_block2.m(div1, null);
            append(form, t14);
            mount_component(submitbutton, form, null);
            append(div3, t15);
            mount_component(modalfooter, div3, null);
            current = true;
            if (!mounted) {
                dispose = listen(form, "submit", stop_propagation(prevent_default(/*submitPasswordlessToken*/ ctx[6])));
                mounted = true;
            }
        },
        p: function (ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            var previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx);
            if (current_block_type_index === previous_block_index) {
                if_blocks[current_block_type_index].p(ctx, dirty);
            }
            else {
                group_outros();
                transition_out(if_blocks[previous_block_index], 1, 1, function () {
                    if_blocks[previous_block_index] = null;
                });
                check_outros();
                if_block0 = if_blocks[current_block_type_index];
                if (!if_block0) {
                    if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
                    if_block0.c();
                }
                else {
                    if_block0.p(ctx, dirty);
                }
                transition_in(if_block0, 1);
                if_block0.m(div0, null);
            }
            var closebutton_changes = {};
            if (dirty & /*closeModal*/ 2)
                closebutton_changes.closeModal = /*closeModal*/ ctx[1];
            closebutton.$set(closebutton_changes);
            if (current_block_type === (current_block_type = select_block_type_1(ctx)) && if_block1) {
                if_block1.p(ctx, dirty);
            }
            else {
                if_block1.d(1);
                if_block1 = current_block_type(ctx);
                if (if_block1) {
                    if_block1.c();
                    if_block1.m(div2, t3);
                }
            }
            if (!ctx[3]) {
                if (if_block2) {
                    if (dirty & /*tokenInputValid*/ 8) {
                        transition_in(if_block2, 1);
                    }
                }
                else {
                    if_block2 = create_if_block$c();
                    if_block2.c();
                    transition_in(if_block2, 1);
                    if_block2.m(div1, null);
                }
            }
            else if (if_block2) {
                group_outros();
                transition_out(if_block2, 1, 1, function () {
                    if_block2 = null;
                });
                check_outros();
            }
            var submitbutton_changes = {};
            if (dirty & /*showLoader*/ 4)
                submitbutton_changes.isLoading = /*showLoader*/ ctx[2];
            submitbutton.$set(submitbutton_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(if_block0);
            transition_in(closebutton.$$.fragment, local);
            transition_in(figureelement.$$.fragment, local);
            transition_in(if_block2);
            transition_in(submitbutton.$$.fragment, local);
            transition_in(modalfooter.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(if_block0);
            transition_out(closebutton.$$.fragment, local);
            transition_out(figureelement.$$.fragment, local);
            transition_out(if_block2);
            transition_out(submitbutton.$$.fragment, local);
            transition_out(modalfooter.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div3);
            if_blocks[current_block_type_index].d();
            destroy_component(closebutton);
            destroy_component(figureelement);
            if_block1.d();
            if (if_block2)
                if_block2.d();
            destroy_component(submitbutton);
            destroy_component(modalfooter);
            mounted = false;
            dispose();
        }
    };
}
function instance$e($$self, $$props, $$invalidate) {
    var $PasswordlessStore;
    var $textStore;
    component_subscribe($$self, PasswordlessStore, function ($$value) { return $$invalidate(4, $PasswordlessStore = $$value); });
    component_subscribe($$self, TextStore, function ($$value) { return $$invalidate(11, $textStore = $$value); });
    var text = $textStore.text;
    var closeModal = $$props.closeModal;
    var display = $$props.display;
    var onSuccessPasswordlessToken = $$props.onSuccessPasswordlessToken;
    var onSuccess = $$props.onSuccess;
    var showLoader = false;
    var tokenInputValid = true;
    onMount(function () {
        var tokenElements = __spreadArray([], __read(document.querySelectorAll("input.ms-form__input--token")), false);
        tokenElements.forEach(function (ele, index) {
            ele.addEventListener("keydown", function (e) {
                if (e.keyCode === 8 && e.target.value === "")
                    tokenElements[Math.max(0, index - 1)].focus();
            });
            ele.addEventListener("input", function (e) {
                var _a = __read(e.target.value), first = _a[0], rest = _a.slice(1);
                e.target.value = first !== null && first !== void 0 ? first : "";
                var lastInputBox = index === tokenElements.length - 1;
                var insertedContent = first !== undefined;
                if (insertedContent && !lastInputBox) {
                    tokenElements[index + 1].focus();
                    tokenElements[index + 1].value = rest.join("");
                    tokenElements[index + 1].dispatchEvent(new Event("input"));
                }
            });
        });
    });
    var validateFields = function (e) {
        var tokenElements = __spreadArray([], __read(document.querySelectorAll("input.ms-form__input--token")), false);
        var hasEmpty = tokenElements.some(function (el) {
            if (!el.value) {
                return true;
            }
            return false;
        });
        if (hasEmpty) {
            $$invalidate(3, tokenInputValid = false);
        }
        else {
            $$invalidate(3, tokenInputValid = true);
        }
        return !hasEmpty;
    };
    function submitPasswordlessToken(e) {
        return __awaiter(this, void 0, void 0, function () {
            var isValid, token, data, plans, data, err_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.target[7];
                        isValid = validateFields();
                        if (!isValid)
                            return [2 /*return*/];
                        token = __spreadArray([], __read(document.getElementsByName("token")), false).filter(function (_a) {
                            var name = _a.name;
                            return name;
                        }).map(function (_a) {
                            var value = _a.value;
                            return value;
                        }).join("");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        $$invalidate(2, showLoader = true);
                        if (!($PasswordlessStore.passwordlessModalType === "login")) return [3 /*break*/, 3];
                        return [4 /*yield*/, window.$memberstackDom.loginMemberPasswordless({
                                passwordlessToken: token,
                                email: $PasswordlessStore.passwordlessEmail
                            }, { includeContentGroups: true })];
                    case 2:
                        data = (_a.sent()).data;
                        onSuccess({ type: "LOGIN", data: data });
                        $$invalidate(2, showLoader = false);
                        return [3 /*break*/, 5];
                    case 3:
                        plans = ($PasswordlessStore.passwordlessPlans || []).map(function (plan) {
                            return { planId: plan };
                        });
                        return [4 /*yield*/, window.$memberstackDom.signupMemberPasswordless({
                                passwordlessToken: token,
                                email: $PasswordlessStore.passwordlessEmail,
                                plans: plans,
                                customFields: $PasswordlessStore.passwordlessCustomFields
                            }, { includeContentGroups: true })];
                    case 4:
                        data = (_a.sent()).data;
                        onSuccess({ type: "SIGNUP", data: data });
                        $$invalidate(2, showLoader = false);
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        err_10 = _a.sent();
                        $$invalidate(2, showLoader = false);
                        console.log(err_10);
                        if (err_10.message) {
                            window.$memberstackDom._showMessage(err_10.message, true);
                        }
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    }
    var click_handler = function () { return $$invalidate(0, display = "login"); };
    var click_handler_1 = function () { return $$invalidate(0, display = "signup"); };
    $$self.$$set = function ($$props) {
        if ('closeModal' in $$props)
            $$invalidate(1, closeModal = $$props.closeModal);
        if ('display' in $$props)
            $$invalidate(0, display = $$props.display);
        if ('onSuccessPasswordlessToken' in $$props)
            $$invalidate(7, onSuccessPasswordlessToken = $$props.onSuccessPasswordlessToken);
        if ('onSuccess' in $$props)
            $$invalidate(8, onSuccess = $$props.onSuccess);
    };
    return [
        display,
        closeModal,
        showLoader,
        tokenInputValid,
        $PasswordlessStore,
        text,
        submitPasswordlessToken,
        onSuccessPasswordlessToken,
        onSuccess,
        click_handler,
        click_handler_1
    ];
}
var PasswordlessTokenModal = /** @class */ (function (_super) {
    __extends(PasswordlessTokenModal, _super);
    function PasswordlessTokenModal(options) {
        var _this = _super.call(this) || this;
        init(_this, options, instance$e, create_fragment$o, safe_not_equal, {
            closeModal: 1,
            display: 0,
            onSuccessPasswordlessToken: 7,
            onSuccess: 8
        });
        return _this;
    }
    return PasswordlessTokenModal;
}(SvelteComponent));
/* src/icons/ProfileIcon.svelte generated by Svelte v3.48.0 */
function create_fragment$n(ctx) {
    var svg;
    var path;
    return {
        c: function () {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "d", "m8 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z");
            attr(path, "fill", "currentColor");
            attr(svg, "fill", "none");
            attr(svg, "viewBox", "0 0 16 16");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
        },
        m: function (target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
        },
        p: noop,
        i: noop,
        o: noop,
        d: function (detaching) {
            if (detaching)
                detach(svg);
        }
    };
}
var ProfileIcon = /** @class */ (function (_super) {
    __extends(ProfileIcon, _super);
    function ProfileIcon(options) {
        var _this = _super.call(this) || this;
        init(_this, options, null, create_fragment$n, safe_not_equal, {});
        return _this;
    }
    return ProfileIcon;
}(SvelteComponent));
/* src/icons/SecurityIcon.svelte generated by Svelte v3.48.0 */
function create_fragment$m(ctx) {
    var svg;
    var path;
    return {
        c: function () {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "d", "m9 0-9 4v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12v-6l-9-4zm0 10.99h7c-0.53 4.12-3.28 7.79-7 8.94v-8.93h-7v-5.7l7-3.11v8.8z");
            attr(path, "fill", "currentColor");
            attr(svg, "fill", "none");
            attr(svg, "viewBox", "0 0 18 22");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
        },
        m: function (target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
        },
        p: noop,
        i: noop,
        o: noop,
        d: function (detaching) {
            if (detaching)
                detach(svg);
        }
    };
}
var SecurityIcon = /** @class */ (function (_super) {
    __extends(SecurityIcon, _super);
    function SecurityIcon(options) {
        var _this = _super.call(this) || this;
        init(_this, options, null, create_fragment$m, safe_not_equal, {});
        return _this;
    }
    return SecurityIcon;
}(SvelteComponent));
/* src/icons/LinkOutIcon.svelte generated by Svelte v3.48.0 */
function create_fragment$l(ctx) {
    var svg;
    var path;
    return {
        c: function () {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "fill", "currentColor");
            attr(path, "d", "M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z");
            attr(svg, "fill", "none");
            attr(svg, "viewBox", "0 0 18 18");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
        },
        m: function (target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
        },
        p: noop,
        i: noop,
        o: noop,
        d: function (detaching) {
            if (detaching)
                detach(svg);
        }
    };
}
var LinkOutIcon = /** @class */ (function (_super) {
    __extends(LinkOutIcon, _super);
    function LinkOutIcon(options) {
        var _this = _super.call(this) || this;
        init(_this, options, null, create_fragment$l, safe_not_equal, {});
        return _this;
    }
    return LinkOutIcon;
}(SvelteComponent));
/* src/icons/LogoutIcon.svelte generated by Svelte v3.48.0 */
function create_fragment$k(ctx) {
    var svg;
    var path;
    return {
        c: function () {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "d", "M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z");
            attr(path, "fill", "currentColor");
            attr(svg, "width", "16");
            attr(svg, "height", "16");
            attr(svg, "viewBox", "0 0 16 16");
            attr(svg, "fill", "none");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
        },
        m: function (target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
        },
        p: noop,
        i: noop,
        o: noop,
        d: function (detaching) {
            if (detaching)
                detach(svg);
        }
    };
}
var LogoutIcon = /** @class */ (function (_super) {
    __extends(LogoutIcon, _super);
    function LogoutIcon(options) {
        var _this = _super.call(this) || this;
        init(_this, options, null, create_fragment$k, safe_not_equal, {});
        return _this;
    }
    return LogoutIcon;
}(SvelteComponent));
/* src/icons/PlansIcon.svelte generated by Svelte v3.48.0 */
function create_fragment$j(ctx) {
    var svg;
    var path;
    return {
        c: function () {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "fill", "currentColor");
            attr(path, "d", "M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z");
            attr(svg, "fill", "none");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
            attr(svg, "viewBox", "3 2 19 20");
        },
        m: function (target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
        },
        p: noop,
        i: noop,
        o: noop,
        d: function (detaching) {
            if (detaching)
                detach(svg);
        }
    };
}
var PlansIcon = /** @class */ (function (_super) {
    __extends(PlansIcon, _super);
    function PlansIcon(options) {
        var _this = _super.call(this) || this;
        init(_this, options, null, create_fragment$j, safe_not_equal, {});
        return _this;
    }
    return PlansIcon;
}(SvelteComponent));
/* src/components/ProfileModalNav.svelte generated by Svelte v3.48.0 */
function create_if_block_1$9(ctx) {
    var button;
    var profileicon;
    var t;
    var current;
    var mounted;
    var dispose;
    profileicon = new ProfileIcon({});
    return {
        c: function () {
            button = element("button");
            create_component(profileicon.$$.fragment);
            t = text(" Profile");
            attr(button, "data-cy", "profile-btn");
            attr(button, "class", "ms-modal__profile-option");
            toggle_class(button, "ms-modal__profile-option--active", /*displayProfile*/ ctx[0] === "profile");
        },
        m: function (target, anchor) {
            insert(target, button, anchor);
            mount_component(profileicon, button, null);
            append(button, t);
            current = true;
            if (!mounted) {
                dispose = listen(button, "click", /*click_handler*/ ctx[7]);
                mounted = true;
            }
        },
        p: function (ctx, dirty) {
            if (dirty & /*displayProfile*/ 1) {
                toggle_class(button, "ms-modal__profile-option--active", /*displayProfile*/ ctx[0] === "profile");
            }
        },
        i: function (local) {
            if (current)
                return;
            transition_in(profileicon.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(profileicon.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(button);
            destroy_component(profileicon);
            mounted = false;
            dispose();
        }
    };
}
// (73:0) {#if showPlansNavButton()}
function create_if_block$b(ctx) {
    var button;
    var plansicon;
    var t;
    var current;
    var mounted;
    var dispose;
    plansicon = new PlansIcon({});
    return {
        c: function () {
            button = element("button");
            create_component(plansicon.$$.fragment);
            t = text(" Plans");
            attr(button, "data-cy", "plans-btn");
            attr(button, "class", "ms-modal__profile-option");
            toggle_class(button, "ms-modal__profile-option--active", /*displayProfile*/ ctx[0] === "plans");
        },
        m: function (target, anchor) {
            insert(target, button, anchor);
            mount_component(plansicon, button, null);
            append(button, t);
            current = true;
            if (!mounted) {
                dispose = listen(button, "click", /*click_handler_2*/ ctx[9]);
                mounted = true;
            }
        },
        p: function (ctx, dirty) {
            if (dirty & /*displayProfile*/ 1) {
                toggle_class(button, "ms-modal__profile-option--active", /*displayProfile*/ ctx[0] === "plans");
            }
        },
        i: function (local) {
            if (current)
                return;
            transition_in(plansicon.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(plansicon.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(button);
            destroy_component(plansicon);
            mounted = false;
            dispose();
        }
    };
}
function create_fragment$i(ctx) {
    var t0;
    var button0;
    var securityicon;
    var t1;
    var t2;
    var show_if = /*showPlansNavButton*/ ctx[3]();
    var t3;
    var button1;
    var logouticon;
    var t4;
    var current;
    var mounted;
    var dispose;
    var if_block0 = !ctx[1] && create_if_block_1$9(ctx);
    securityicon = new SecurityIcon({});
    var if_block1 = show_if && create_if_block$b(ctx);
    logouticon = new LogoutIcon({});
    return {
        c: function () {
            if (if_block0)
                if_block0.c();
            t0 = space();
            button0 = element("button");
            create_component(securityicon.$$.fragment);
            t1 = text(" Security");
            t2 = space();
            if (if_block1)
                if_block1.c();
            t3 = space();
            button1 = element("button");
            create_component(logouticon.$$.fragment);
            t4 = text(" Logout");
            attr(button0, "data-cy", "security-btn");
            attr(button0, "class", "ms-modal__profile-option");
            toggle_class(button0, "ms-modal__profile-option--active", /*displayProfile*/ ctx[0] === "security" || /*displayProfile*/ ctx[0] === "changePassword");
            attr(button1, "data-cy", "logout-btn");
            attr(button1, "class", "ms-modal__profile-option");
        },
        m: function (target, anchor) {
            if (if_block0)
                if_block0.m(target, anchor);
            insert(target, t0, anchor);
            insert(target, button0, anchor);
            mount_component(securityicon, button0, null);
            append(button0, t1);
            insert(target, t2, anchor);
            if (if_block1)
                if_block1.m(target, anchor);
            insert(target, t3, anchor);
            insert(target, button1, anchor);
            mount_component(logouticon, button1, null);
            append(button1, t4);
            current = true;
            if (!mounted) {
                dispose = [
                    listen(button0, "click", /*click_handler_1*/ ctx[8]),
                    listen(button1, "click", /*logout*/ ctx[2])
                ];
                mounted = true;
            }
        },
        p: function (ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if (!ctx[1]) {
                if (if_block0) {
                    if_block0.p(ctx, dirty);
                    if (dirty & /*hideProfileSection*/ 2) {
                        transition_in(if_block0, 1);
                    }
                }
                else {
                    if_block0 = create_if_block_1$9(ctx);
                    if_block0.c();
                    transition_in(if_block0, 1);
                    if_block0.m(t0.parentNode, t0);
                }
            }
            else if (if_block0) {
                group_outros();
                transition_out(if_block0, 1, 1, function () {
                    if_block0 = null;
                });
                check_outros();
            }
            if (dirty & /*displayProfile*/ 1) {
                toggle_class(button0, "ms-modal__profile-option--active", /*displayProfile*/ ctx[0] === "security" || /*displayProfile*/ ctx[0] === "changePassword");
            }
            if (show_if)
                if_block1.p(ctx, dirty);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(if_block0);
            transition_in(securityicon.$$.fragment, local);
            transition_in(if_block1);
            transition_in(logouticon.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(if_block0);
            transition_out(securityicon.$$.fragment, local);
            transition_out(if_block1);
            transition_out(logouticon.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (if_block0)
                if_block0.d(detaching);
            if (detaching)
                detach(t0);
            if (detaching)
                detach(button0);
            destroy_component(securityicon);
            if (detaching)
                detach(t2);
            if (if_block1)
                if_block1.d(detaching);
            if (detaching)
                detach(t3);
            if (detaching)
                detach(button1);
            destroy_component(logouticon);
            mounted = false;
            run_all(dispose);
        }
    };
}
function instance$d($$self, $$props, $$invalidate) {
    var member = $$props.member;
    var onSuccessLogout = $$props.onSuccessLogout;
    var displayProfile = $$props.displayProfile;
    var profileLoader = $$props.profileLoader;
    var hideProfileSection = $$props.hideProfileSection;
    var unsubscribe = AppStore.subscribe(function (data) {
        if (!data.initialValue) {
            var container = document.getElementById("msOverlay");
            var css = document.createElement("style");
            var color = data.branding.colors.lightMode.primaryButton;
            var fullCSS = ".ms-modal__profile-option:hover { color: ".concat(color, ";} .ms-modal__profile-option--active { color: ").concat(color, ";} .ms-modal__save-button { background: ").concat(color, ";} .ms-modal__save-button:disabled { background: ").concat(color, ";}");
            css.appendChild(document.createTextNode(fullCSS));
            container.appendChild(css);
        }
    });
    onDestroy(function () {
        unsubscribe();
    });
    function logout(e) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, message, err_11;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, window.$memberstackDom.logout()];
                    case 1:
                        _a = _b.sent(), data = _a.data, message = _a._internalUseOnly.message;
                        window.$memberstackDom._showMessage(message, false);
                        onSuccessLogout({ type: "LOGOUT", data: data });
                        return [3 /*break*/, 3];
                    case 2:
                        err_11 = _b.sent();
                        window.$memberstackDom._showMessage(err_11.message, true);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function showPlansNavButton() {
        return member.stripeCustomerId || member.planConnections.some(function (plan) { return plan.type === "FREE"; });
    }
    var click_handler = function () { return $$invalidate(0, displayProfile = "profile"); };
    var click_handler_1 = function () { return $$invalidate(0, displayProfile = "security"); };
    var click_handler_2 = function () { return $$invalidate(0, displayProfile = "plans"); };
    $$self.$$set = function ($$props) {
        if ('member' in $$props)
            $$invalidate(4, member = $$props.member);
        if ('onSuccessLogout' in $$props)
            $$invalidate(5, onSuccessLogout = $$props.onSuccessLogout);
        if ('displayProfile' in $$props)
            $$invalidate(0, displayProfile = $$props.displayProfile);
        if ('profileLoader' in $$props)
            $$invalidate(6, profileLoader = $$props.profileLoader);
        if ('hideProfileSection' in $$props)
            $$invalidate(1, hideProfileSection = $$props.hideProfileSection);
    };
    return [
        displayProfile,
        hideProfileSection,
        logout,
        showPlansNavButton,
        member,
        onSuccessLogout,
        profileLoader,
        click_handler,
        click_handler_1,
        click_handler_2
    ];
}
var ProfileModalNav = /** @class */ (function (_super) {
    __extends(ProfileModalNav, _super);
    function ProfileModalNav(options) {
        var _this = _super.call(this) || this;
        init(_this, options, instance$d, create_fragment$i, safe_not_equal, {
            member: 4,
            onSuccessLogout: 5,
            displayProfile: 0,
            profileLoader: 6,
            hideProfileSection: 1
        });
        return _this;
    }
    return ProfileModalNav;
}(SvelteComponent));
/* src/icons/ProfileDefaultImage.svelte generated by Svelte v3.48.0 */
function create_fragment$h(ctx) {
    var svg;
    var path;
    return {
        c: function () {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "fill", "white");
            attr(path, "d", "M21 21C24.315 21 27 18.315 27 15C27 11.685 24.315 9 21 9C17.685 9 15 11.685 15 15C15 18.315 17.685 21 21 21ZM21 24C16.995 24 9 26.01 9 30V31.5C9 32.325 9.675 33 10.5 33H31.5C32.325 33 33 32.325 33 31.5V30C33 26.01 25.005 24 21 24Z");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
            attr(svg, "width", "42");
            attr(svg, "height", "42");
            attr(svg, "viewBox", "0 0 42 42");
            attr(svg, "fill", "none");
        },
        m: function (target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
        },
        p: noop,
        i: noop,
        o: noop,
        d: function (detaching) {
            if (detaching)
                detach(svg);
        }
    };
}
var ProfileDefaultImage = /** @class */ (function (_super) {
    __extends(ProfileDefaultImage, _super);
    function ProfileDefaultImage(options) {
        var _this = _super.call(this) || this;
        init(_this, options, null, create_fragment$h, safe_not_equal, {});
        return _this;
    }
    return ProfileDefaultImage;
}(SvelteComponent));
/* src/icons/UploadIcon.svelte generated by Svelte v3.48.0 */
function create_fragment$g(ctx) {
    var svg;
    var g;
    var path0;
    var defs;
    var clipPath;
    var path1;
    return {
        c: function () {
            svg = svg_element("svg");
            g = svg_element("g");
            path0 = svg_element("path");
            defs = svg_element("defs");
            clipPath = svg_element("clipPath");
            path1 = svg_element("path");
            attr(path0, "fill", "#494949");
            attr(path0, "d", "M6.667 10.667h2.666c.367 0 .667-.3.667-.667V6.667h1.06c.593 0 .893-.72.473-1.14l-3.06-3.06a.664.664 0 0 0-.94 0l-3.06 3.06c-.42.42-.126 1.14.467 1.14H6V10c0 .367.3.667.667.667zM4 12h8c.367 0 .667.3.667.667 0 .367-.3.667-.667.667H4a.669.669 0 0 1-.667-.667c0-.367.3-.667.667-.667z");
            attr(g, "clip-path", "url(#a)");
            attr(path1, "fill", "#fff");
            attr(path1, "d", "M0 0h16v16H0z");
            attr(clipPath, "id", "a");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
            attr(svg, "fill", "none");
            attr(svg, "viewBox", "0 0 16 16");
        },
        m: function (target, anchor) {
            insert(target, svg, anchor);
            append(svg, g);
            append(g, path0);
            append(svg, defs);
            append(defs, clipPath);
            append(clipPath, path1);
        },
        p: noop,
        i: noop,
        o: noop,
        d: function (detaching) {
            if (detaching)
                detach(svg);
        }
    };
}
var UploadIcon = /** @class */ (function (_super) {
    __extends(UploadIcon, _super);
    function UploadIcon(options) {
        var _this = _super.call(this) || this;
        init(_this, options, null, create_fragment$g, safe_not_equal, {});
        return _this;
    }
    return UploadIcon;
}(SvelteComponent));
/* src/components/ProfileInfoContent.svelte generated by Svelte v3.48.0 */
function get_each_context$4(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[10] = list[i];
    child_ctx[11] = list;
    child_ctx[12] = i;
    return child_ctx;
}
// (146:4) {:else}
function create_else_block_1$2(ctx) {
    var profiledefaultimage;
    var current;
    profiledefaultimage = new ProfileDefaultImage({});
    return {
        c: function () {
            create_component(profiledefaultimage.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(profiledefaultimage, target, anchor);
            current = true;
        },
        p: noop,
        i: function (local) {
            if (current)
                return;
            transition_in(profiledefaultimage.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(profiledefaultimage.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(profiledefaultimage, detaching);
        }
    };
}
// (144:4) {#if member.profileImage}
function create_if_block_2$6(ctx) {
    var img;
    var img_src_value;
    return {
        c: function () {
            img = element("img");
            if (!src_url_equal(img.src, img_src_value = /*member*/ ctx[0].profileImage))
                attr(img, "src", img_src_value);
            attr(img, "alt", "profile image");
        },
        m: function (target, anchor) {
            insert(target, img, anchor);
        },
        p: function (ctx, dirty) {
            if (dirty & /*member*/ 1 && !src_url_equal(img.src, img_src_value = /*member*/ ctx[0].profileImage)) {
                attr(img, "src", img_src_value);
            }
        },
        i: noop,
        o: noop,
        d: function (detaching) {
            if (detaching)
                detach(img);
        }
    };
}
// (159:6) {:else}
function create_else_block$5(ctx) {
    var t;
    return {
        c: function () {
            t = text("Replace Image");
        },
        m: function (target, anchor) {
            insert(target, t, anchor);
        },
        d: function (detaching) {
            if (detaching)
                detach(t);
        }
    };
}
// (157:20) {#if !member.profileImage}
function create_if_block_1$8(ctx) {
    var t;
    return {
        c: function () {
            t = text("Upload Profile Image");
        },
        m: function (target, anchor) {
            insert(target, t, anchor);
        },
        d: function (detaching) {
            if (detaching)
                detach(t);
        }
    };
}
// (174:4) {#if customField.hidden !== true}
function create_if_block$a(ctx) {
    var div1;
    var div0;
    var label;
    var t0_value = /*customField*/ ctx[10].label + "";
    var t0;
    var label_for_value;
    var t1;
    var input;
    var input_placeholder_value;
    var input_name_value;
    var t2;
    var mounted;
    var dispose;
    function input_input_handler() {
        /*input_input_handler*/ ctx[6].call(input, /*customField*/ ctx[10]);
    }
    return {
        c: function () {
            div1 = element("div");
            div0 = element("div");
            label = element("label");
            t0 = text(t0_value);
            t1 = space();
            input = element("input");
            t2 = space();
            attr(label, "class", "ms-form__label");
            attr(label, "for", label_for_value = /*customField*/ ctx[10].key);
            attr(input, "class", "ms-form__input");
            attr(input, "type", "text");
            attr(input, "placeholder", input_placeholder_value = /*customField*/ ctx[10].label);
            attr(input, "name", input_name_value = /*customField*/ ctx[10].key);
            attr(div0, "class", "ms-form__group");
            attr(div1, "class", "ms-modal__custom-field-container");
        },
        m: function (target, anchor) {
            insert(target, div1, anchor);
            append(div1, div0);
            append(div0, label);
            append(label, t0);
            append(div0, t1);
            append(div0, input);
            set_input_value(input, /*member*/ ctx[0].customFields[ /*customField*/ctx[10].key]);
            append(div1, t2);
            if (!mounted) {
                dispose = [
                    listen(input, "input", input_input_handler),
                    listen(input, "keyup", /*checkForChange*/ ctx[4])
                ];
                mounted = true;
            }
        },
        p: function (new_ctx, dirty) {
            ctx = new_ctx;
            if (dirty & /*customFields*/ 2 && t0_value !== (t0_value = /*customField*/ ctx[10].label + ""))
                set_data(t0, t0_value);
            if (dirty & /*customFields*/ 2 && label_for_value !== (label_for_value = /*customField*/ ctx[10].key)) {
                attr(label, "for", label_for_value);
            }
            if (dirty & /*customFields*/ 2 && input_placeholder_value !== (input_placeholder_value = /*customField*/ ctx[10].label)) {
                attr(input, "placeholder", input_placeholder_value);
            }
            if (dirty & /*customFields*/ 2 && input_name_value !== (input_name_value = /*customField*/ ctx[10].key)) {
                attr(input, "name", input_name_value);
            }
            if (dirty & /*member, customFields*/ 3 && input.value !== /*member*/ ctx[0].customFields[ /*customField*/ctx[10].key]) {
                set_input_value(input, /*member*/ ctx[0].customFields[ /*customField*/ctx[10].key]);
            }
        },
        d: function (detaching) {
            if (detaching)
                detach(div1);
            mounted = false;
            run_all(dispose);
        }
    };
}
// (173:2) {#each customFields as customField, i}
function create_each_block$4(ctx) {
    var if_block_anchor;
    var if_block = /*customField*/ ctx[10].hidden !== true && create_if_block$a(ctx);
    return {
        c: function () {
            if (if_block)
                if_block.c();
            if_block_anchor = empty();
        },
        m: function (target, anchor) {
            if (if_block)
                if_block.m(target, anchor);
            insert(target, if_block_anchor, anchor);
        },
        p: function (ctx, dirty) {
            if ( /*customField*/ctx[10].hidden !== true) {
                if (if_block) {
                    if_block.p(ctx, dirty);
                }
                else {
                    if_block = create_if_block$a(ctx);
                    if_block.c();
                    if_block.m(if_block_anchor.parentNode, if_block_anchor);
                }
            }
            else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
        },
        d: function (detaching) {
            if (if_block)
                if_block.d(detaching);
            if (detaching)
                detach(if_block_anchor);
        }
    };
}
function create_fragment$f(ctx) {
    var div1;
    var h2;
    var t1;
    var div0;
    var button0;
    var t2;
    var t3;
    var div4;
    var div2;
    var current_block_type_index;
    var if_block0;
    var t4;
    var div3;
    var button1;
    var uploadicon;
    var t5;
    var form;
    var current;
    var mounted;
    var dispose;
    var if_block_creators = [create_if_block_2$6, create_else_block_1$2];
    var if_blocks = [];
    function select_block_type(ctx, dirty) {
        if ( /*member*/ctx[0].profileImage)
            return 0;
        return 1;
    }
    current_block_type_index = select_block_type(ctx);
    if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    uploadicon = new UploadIcon({});
    function select_block_type_1(ctx, dirty) {
        if (!ctx[0].profileImage)
            return create_if_block_1$8;
        return create_else_block$5;
    }
    var current_block_type = select_block_type_1(ctx);
    var if_block1 = current_block_type(ctx);
    var each_value = /*customFields*/ ctx[1];
    var each_blocks = [];
    for (var i = 0; i < each_value.length; i += 1) {
        each_blocks[i] = create_each_block$4(get_each_context$4(ctx, each_value, i));
    }
    return {
        c: function () {
            div1 = element("div");
            h2 = element("h2");
            h2.textContent = "Profile Information";
            t1 = space();
            div0 = element("div");
            button0 = element("button");
            t2 = text("Save");
            t3 = space();
            div4 = element("div");
            div2 = element("div");
            if_block0.c();
            t4 = space();
            div3 = element("div");
            button1 = element("button");
            create_component(uploadicon.$$.fragment);
            if_block1.c();
            t5 = space();
            form = element("form");
            for (var i = 0; i < each_blocks.length; i += 1) {
                each_blocks[i].c();
            }
            attr(h2, "class", "ms-modal__title ms-modal__title--profile");
            attr(button0, "class", "ms-modal__save-button");
            button0.disabled = /*saveDisabled*/ ctx[2];
            attr(div0, "class", "ms-modal__action-container");
            attr(div1, "class", "ms-modal__title-container");
            attr(div2, "class", "ms-modal__profile-image");
            attr(button1, "data-cy", "change-profile-image");
            attr(button1, "type", "submit");
            attr(button1, "class", "ms-modal__outline-button");
            attr(button1, "data-image-btn", "");
            attr(div3, "class", "ms-modal__profile-image-button-container");
            attr(div4, "class", "ms-modal__profile-image-container");
            attr(form, "class", "ms-form");
            attr(form, "action", "");
            attr(form, "method", "post");
            attr(form, "autocomplete", "off");
        },
        m: function (target, anchor) {
            insert(target, div1, anchor);
            append(div1, h2);
            append(div1, t1);
            append(div1, div0);
            append(div0, button0);
            append(button0, t2);
            insert(target, t3, anchor);
            insert(target, div4, anchor);
            append(div4, div2);
            if_blocks[current_block_type_index].m(div2, null);
            append(div4, t4);
            append(div4, div3);
            append(div3, button1);
            mount_component(uploadicon, button1, null);
            if_block1.m(button1, null);
            insert(target, t5, anchor);
            insert(target, form, anchor);
            for (var i = 0; i < each_blocks.length; i += 1) {
                each_blocks[i].m(form, null);
            }
            current = true;
            if (!mounted) {
                dispose = [
                    listen(button0, "click", /*saveProfile*/ ctx[3]),
                    listen(form, "submit", stop_propagation(prevent_default(/*saveProfile*/ ctx[3])))
                ];
                mounted = true;
            }
        },
        p: function (ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if (!current || dirty & /*saveDisabled*/ 4) {
                button0.disabled = /*saveDisabled*/ ctx[2];
            }
            var previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx);
            if (current_block_type_index === previous_block_index) {
                if_blocks[current_block_type_index].p(ctx, dirty);
            }
            else {
                group_outros();
                transition_out(if_blocks[previous_block_index], 1, 1, function () {
                    if_blocks[previous_block_index] = null;
                });
                check_outros();
                if_block0 = if_blocks[current_block_type_index];
                if (!if_block0) {
                    if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
                    if_block0.c();
                }
                else {
                    if_block0.p(ctx, dirty);
                }
                transition_in(if_block0, 1);
                if_block0.m(div2, null);
            }
            if (current_block_type !== (current_block_type = select_block_type_1(ctx))) {
                if_block1.d(1);
                if_block1 = current_block_type(ctx);
                if (if_block1) {
                    if_block1.c();
                    if_block1.m(button1, null);
                }
            }
            if (dirty & /*customFields, member, checkForChange*/ 19) {
                each_value = /*customFields*/ ctx[1];
                var i = void 0;
                for (i = 0; i < each_value.length; i += 1) {
                    var child_ctx = get_each_context$4(ctx, each_value, i);
                    if (each_blocks[i]) {
                        each_blocks[i].p(child_ctx, dirty);
                    }
                    else {
                        each_blocks[i] = create_each_block$4(child_ctx);
                        each_blocks[i].c();
                        each_blocks[i].m(form, null);
                    }
                }
                for (; i < each_blocks.length; i += 1) {
                    each_blocks[i].d(1);
                }
                each_blocks.length = each_value.length;
            }
        },
        i: function (local) {
            if (current)
                return;
            transition_in(if_block0);
            transition_in(uploadicon.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(if_block0);
            transition_out(uploadicon.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div1);
            if (detaching)
                detach(t3);
            if (detaching)
                detach(div4);
            if_blocks[current_block_type_index].d();
            destroy_component(uploadicon);
            if_block1.d();
            if (detaching)
                detach(t5);
            if (detaching)
                detach(form);
            destroy_each(each_blocks, detaching);
            mounted = false;
            run_all(dispose);
        }
    };
}
function instance$c($$self, $$props, $$invalidate) {
    var _this = this;
    var customFields = $$props.customFields;
    var member = $$props.member;
    var profileLoader = $$props.profileLoader;
    var createFileInputElement = function () {
        var fileInputField = document.createElement("input");
        fileInputField.setAttribute("required", "");
        fileInputField.setAttribute("type", "file");
        fileInputField.setAttribute("accept", "image/*");
        fileInputField.setAttribute("profile-image", "true");
        fileInputField.setAttribute("name", "profile-image");
        fileInputField.setAttribute("DATA-name", "File");
        fileInputField.setAttribute("hidden", "");
        fileInputField.setAttribute("tabindex", "-1");
        return fileInputField;
    };
    var initProfileImageButton = function (uploadButton) {
        // create a fileInputField and hide it
        var fileInputField = createFileInputElement();
        // add the fileInputField to the DOM as a sibling of the uploadButton
        uploadButton.parentNode.insertBefore(fileInputField, uploadButton.nextSibling);
        // add event listener to uploadButton
        uploadButton.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            fileInputField.click();
        });
        // add event listener to fileInputField
        fileInputField.addEventListener("change", function (e) { return __awaiter(_this, void 0, void 0, function () {
            var file, fileSize, fileType, updateMemberProfileImageFunction, _a, data, message, err_12;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        e.preventDefault();
                        e.stopPropagation();
                        file = e.target.files[0];
                        fileSize = file.size, fileType = file.type;
                        // check if file is an image
                        if (fileType.includes("image") === false)
                            return [2 /*return*/, window.$memberstackDom._showMessage("File is not an image.", true)];
                        if (fileSize > 4000000)
                            return [2 /*return*/, window.$memberstackDom._showMessage("Image must be less than 2MB.", true)];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        $$invalidate(5, profileLoader = true);
                        updateMemberProfileImageFunction = window.$memberstackDom.updateMemberProfileImage;
                        return [4 /*yield*/, updateMemberProfileImageFunction({ profileImage: file })];
                    case 2:
                        _a = _b.sent(), data = _a.data, message = _a._internalUseOnly.message;
                        $$invalidate(0, member.profileImage = data.profileImage, member);
                        if (message) {
                            window.$memberstackDom._showMessage(message, false);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_12 = _b.sent();
                        console.log(err_12);
                        if (err_12.message) {
                            window.$memberstackDom._showMessage(err_12.message, true);
                        }
                        return [3 /*break*/, 4];
                    case 4:
                        $$invalidate(5, profileLoader = false);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    onMount(function () {
        var upload = document.querySelector("[data-image-btn]");
        initProfileImageButton(upload);
    });
    var initialCustomFields = JSON.parse(JSON.stringify(member.customFields));
    var saveDisabled = true;
    function saveProfile(e) {
        return __awaiter(this, void 0, void 0, function () {
            var msg, err_13;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        $$invalidate(5, profileLoader = true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, window.$memberstackDom.updateMember({ customFields: member.customFields })];
                    case 2:
                        msg = (_a.sent())._internalUseOnly.message;
                        $$invalidate(5, profileLoader = false);
                        $$invalidate(2, saveDisabled = true);
                        initialCustomFields = JSON.parse(JSON.stringify(member.customFields));
                        window.$memberstackDom._showMessage(msg, false);
                        return [3 /*break*/, 4];
                    case 3:
                        err_13 = _a.sent();
                        $$invalidate(5, profileLoader = false);
                        window.$memberstackDom._showMessage(err_13.message, true);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    function checkForChange(e) {
        if (e.target.value !== initialCustomFields[e.target.name]) {
            $$invalidate(2, saveDisabled = false);
            return;
        }
        $$invalidate(2, saveDisabled = true);
    }
    function input_input_handler(customField) {
        member.customFields[customField.key] = this.value;
        $$invalidate(0, member);
    }
    $$self.$$set = function ($$props) {
        if ('customFields' in $$props)
            $$invalidate(1, customFields = $$props.customFields);
        if ('member' in $$props)
            $$invalidate(0, member = $$props.member);
        if ('profileLoader' in $$props)
            $$invalidate(5, profileLoader = $$props.profileLoader);
    };
    return [
        member,
        customFields,
        saveDisabled,
        saveProfile,
        checkForChange,
        profileLoader,
        input_input_handler
    ];
}
var ProfileInfoContent = /** @class */ (function (_super) {
    __extends(ProfileInfoContent, _super);
    function ProfileInfoContent(options) {
        var _this = _super.call(this) || this;
        init(_this, options, instance$c, create_fragment$f, safe_not_equal, {
            customFields: 1,
            member: 0,
            profileLoader: 5
        });
        return _this;
    }
    return ProfileInfoContent;
}(SvelteComponent));
/* src/icons/PasswordLockIcon.svelte generated by Svelte v3.48.0 */
function create_fragment$e(ctx) {
    var svg;
    var path;
    return {
        c: function () {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "fill", "currentColor");
            attr(path, "d", "m14 7h-1v-2c0-2.76-2.24-5-5-5s-5 2.24-5 5v2h-1c-1.1 0-2 0.9-2 2v10c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2v-10c0-1.1-0.9-2-2-2zm-9-2c0-1.66 1.34-3 3-3s3 1.34 3 3v2h-6v-2zm9 14h-12v-10h12v10zm-6-3c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2 0.9 2 2 2z");
            attr(svg, "fill", "none");
            attr(svg, "viewBox", "0 0 16 21");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
        },
        m: function (target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
        },
        p: noop,
        i: noop,
        o: noop,
        d: function (detaching) {
            if (detaching)
                detach(svg);
        }
    };
}
var PasswordLockIcon = /** @class */ (function (_super) {
    __extends(PasswordLockIcon, _super);
    function PasswordLockIcon(options) {
        var _this = _super.call(this) || this;
        init(_this, options, null, create_fragment$e, safe_not_equal, {});
        return _this;
    }
    return PasswordLockIcon;
}(SvelteComponent));
/* src/components/SecurityInfoContent.svelte generated by Svelte v3.48.0 */
function get_each_context$3(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[16] = list[i];
    return child_ctx;
}
// (97:69) {:else}
function create_else_block_1$1(ctx) {
    var t;
    return {
        c: function () {
            t = text("Change Password");
        },
        m: function (target, anchor) {
            insert(target, t, anchor);
        },
        d: function (detaching) {
            if (detaching)
                detach(t);
        }
    };
}
// (97:25) {#if !member.auth.hasPassword}
function create_if_block_2$5(ctx) {
    var t;
    return {
        c: function () {
            t = text("Set Password");
        },
        m: function (target, anchor) {
            insert(target, t, anchor);
        },
        d: function (detaching) {
            if (detaching)
                detach(t);
        }
    };
}
// (101:0) {#if $app.authProviders.length > 0}
function create_if_block$9(ctx) {
    var p;
    var t1;
    var div;
    var each_blocks = [];
    var each_1_lookup = new Map();
    var each_value = /*$app*/ ctx[4].authProviders;
    var get_key = function (ctx) { /*provider*/ return ctx[16].provider; };
    for (var i = 0; i < each_value.length; i += 1) {
        var child_ctx = get_each_context$3(ctx, each_value, i);
        var key = get_key(child_ctx);
        each_1_lookup.set(key, each_blocks[i] = create_each_block$3(key, child_ctx));
    }
    return {
        c: function () {
            p = element("p");
            p.textContent = "Connect Additional Accounts";
            t1 = space();
            div = element("div");
            for (var i = 0; i < each_blocks.length; i += 1) {
                each_blocks[i].c();
            }
            attr(p, "class", "ms-form__label");
            attr(div, "class", "ms-modal__social");
        },
        m: function (target, anchor) {
            insert(target, p, anchor);
            insert(target, t1, anchor);
            insert(target, div, anchor);
            for (var i = 0; i < each_blocks.length; i += 1) {
                each_blocks[i].m(div, null);
            }
        },
        p: function (ctx, dirty) {
            if (dirty & /*disconnectProvider, $app, member, connectAdditionalProvider*/ 210) {
                each_value = /*$app*/ ctx[4].authProviders;
                each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div, destroy_block, create_each_block$3, null, get_each_context$3);
            }
        },
        d: function (detaching) {
            if (detaching)
                detach(p);
            if (detaching)
                detach(t1);
            if (detaching)
                detach(div);
            for (var i = 0; i < each_blocks.length; i += 1) {
                each_blocks[i].d();
            }
        }
    };
}
// (111:6) {:else}
function create_else_block$4(ctx) {
    var button;
    var img;
    var img_src_value;
    var img_alt_value;
    var t0;
    var span;
    var t1;
    var t2_value = /*provider*/ ctx[16].name + "";
    var t2;
    var mounted;
    var dispose;
    function click_handler_2() {
        return /*click_handler_2*/ ctx[14](/*provider*/ ctx[16]);
    }
    return {
        c: function () {
            button = element("button");
            img = element("img");
            t0 = space();
            span = element("span");
            t1 = text("Connect with ");
            t2 = text(t2_value);
            if (!src_url_equal(img.src, img_src_value = /*provider*/ ctx[16].icon))
                attr(img, "src", img_src_value);
            attr(img, "alt", img_alt_value = /*provider*/ ctx[16].name);
            attr(button, "class", "ms-modal__social-button");
            attr(button, "type", "button");
        },
        m: function (target, anchor) {
            insert(target, button, anchor);
            append(button, img);
            append(button, t0);
            append(button, span);
            append(span, t1);
            append(span, t2);
            if (!mounted) {
                dispose = listen(button, "click", click_handler_2);
                mounted = true;
            }
        },
        p: function (new_ctx, dirty) {
            ctx = new_ctx;
            if (dirty & /*$app*/ 16 && !src_url_equal(img.src, img_src_value = /*provider*/ ctx[16].icon)) {
                attr(img, "src", img_src_value);
            }
            if (dirty & /*$app*/ 16 && img_alt_value !== (img_alt_value = /*provider*/ ctx[16].name)) {
                attr(img, "alt", img_alt_value);
            }
            if (dirty & /*$app*/ 16 && t2_value !== (t2_value = /*provider*/ ctx[16].name + ""))
                set_data(t2, t2_value);
        },
        d: function (detaching) {
            if (detaching)
                detach(button);
            mounted = false;
            dispose();
        }
    };
}
// (106:6) {#if member.auth.providers.some((prv) => prv.provider === provider.provider)}
function create_if_block_1$7(ctx) {
    var button;
    var img;
    var img_src_value;
    var img_alt_value;
    var t0;
    var span;
    var t1;
    var t2_value = /*provider*/ ctx[16].name + "";
    var t2;
    var mounted;
    var dispose;
    function click_handler_1() {
        return /*click_handler_1*/ ctx[13](/*provider*/ ctx[16]);
    }
    return {
        c: function () {
            button = element("button");
            img = element("img");
            t0 = space();
            span = element("span");
            t1 = text("Disconnect ");
            t2 = text(t2_value);
            if (!src_url_equal(img.src, img_src_value = /*provider*/ ctx[16].icon))
                attr(img, "src", img_src_value);
            attr(img, "alt", img_alt_value = /*provider*/ ctx[16].name);
            attr(button, "class", "ms-modal__social-button");
            set_style(button, "background-color", "#F6F6F6");
            attr(button, "type", "button");
        },
        m: function (target, anchor) {
            insert(target, button, anchor);
            append(button, img);
            append(button, t0);
            append(button, span);
            append(span, t1);
            append(span, t2);
            if (!mounted) {
                dispose = listen(button, "click", click_handler_1);
                mounted = true;
            }
        },
        p: function (new_ctx, dirty) {
            ctx = new_ctx;
            if (dirty & /*$app*/ 16 && !src_url_equal(img.src, img_src_value = /*provider*/ ctx[16].icon)) {
                attr(img, "src", img_src_value);
            }
            if (dirty & /*$app*/ 16 && img_alt_value !== (img_alt_value = /*provider*/ ctx[16].name)) {
                attr(img, "alt", img_alt_value);
            }
            if (dirty & /*$app*/ 16 && t2_value !== (t2_value = /*provider*/ ctx[16].name + ""))
                set_data(t2, t2_value);
        },
        d: function (detaching) {
            if (detaching)
                detach(button);
            mounted = false;
            dispose();
        }
    };
}
// (104:2) {#each $app.authProviders as provider (provider.provider)}
function create_each_block$3(key_1, ctx) {
    var div;
    var show_if;
    var t;
    function func() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return /*func*/ ctx[9].apply(/*func*/ ctx, __spreadArray([/*provider*/ ctx[16]], __read(args), false));
    }
    function select_block_type_1(ctx, dirty) {
        if (dirty & /*member, $app*/ 18)
            show_if = null;
        if (show_if == null)
            show_if = !!ctx[1].auth.providers.some(func);
        if (show_if)
            return create_if_block_1$7;
        return create_else_block$4;
    }
    var current_block_type = select_block_type_1(ctx, -1);
    var if_block = current_block_type(ctx);
    return {
        key: key_1,
        first: null,
        c: function () {
            div = element("div");
            if_block.c();
            t = space();
            attr(div, "class", "ms-modal__social-buttons");
            this.first = div;
        },
        m: function (target, anchor) {
            insert(target, div, anchor);
            if_block.m(div, null);
            append(div, t);
        },
        p: function (new_ctx, dirty) {
            ctx = new_ctx;
            if (current_block_type === (current_block_type = select_block_type_1(ctx, dirty)) && if_block) {
                if_block.p(ctx, dirty);
            }
            else {
                if_block.d(1);
                if_block = current_block_type(ctx);
                if (if_block) {
                    if_block.c();
                    if_block.m(div, t);
                }
            }
        },
        d: function (detaching) {
            if (detaching)
                detach(div);
            if_block.d();
        }
    };
}
function create_fragment$d(ctx) {
    var div1;
    var h2;
    var t1;
    var div0;
    var button0;
    var t2;
    var button0_disabled_value;
    var t3;
    var form;
    var emailinput;
    var updating_emailInputValid;
    var updating_emailValue;
    var t4;
    var div2;
    var label;
    var t6;
    var button1;
    var passwordlockicon;
    var t7;
    var t8;
    var if_block1_anchor;
    var current;
    var mounted;
    var dispose;
    function emailinput_emailInputValid_binding(value) {
        /*emailinput_emailInputValid_binding*/ ctx[10](value);
    }
    function emailinput_emailValue_binding(value) {
        /*emailinput_emailValue_binding*/ ctx[11](value);
    }
    var emailinput_props = {};
    if ( /*emailInputValid*/ctx[3] !== void 0) {
        emailinput_props.emailInputValid = /*emailInputValid*/ ctx[3];
    }
    if ( /*emailValue*/ctx[2] !== void 0) {
        emailinput_props.emailValue = /*emailValue*/ ctx[2];
    }
    emailinput = new EmailInput({ props: emailinput_props });
    binding_callbacks.push(function () { return bind(emailinput, 'emailInputValid', emailinput_emailInputValid_binding); });
    binding_callbacks.push(function () { return bind(emailinput, 'emailValue', emailinput_emailValue_binding); });
    passwordlockicon = new PasswordLockIcon({});
    function select_block_type(ctx, dirty) {
        if (!ctx[1].auth.hasPassword)
            return create_if_block_2$5;
        return create_else_block_1$1;
    }
    var current_block_type = select_block_type(ctx);
    var if_block0 = current_block_type(ctx);
    var if_block1 = /*$app*/ ctx[4].authProviders.length > 0 && create_if_block$9(ctx);
    return {
        c: function () {
            div1 = element("div");
            h2 = element("h2");
            h2.textContent = "Security";
            t1 = space();
            div0 = element("div");
            button0 = element("button");
            t2 = text("Save");
            t3 = space();
            form = element("form");
            create_component(emailinput.$$.fragment);
            t4 = space();
            div2 = element("div");
            label = element("label");
            label.textContent = "Password";
            t6 = space();
            button1 = element("button");
            create_component(passwordlockicon.$$.fragment);
            t7 = space();
            if_block0.c();
            t8 = space();
            if (if_block1)
                if_block1.c();
            if_block1_anchor = empty();
            attr(h2, "class", "ms-modal__title ms-modal__title--profile");
            attr(button0, "class", "ms-modal__save-button");
            button0.disabled = button0_disabled_value = !ctx[3];
            attr(div0, "class", "ms-modal__action-container");
            attr(div1, "class", "ms-modal__title-container");
            attr(form, "class", "ms-form");
            attr(form, "action", "");
            attr(form, "method", "post");
            attr(form, "autocomplete", "off");
            attr(label, "class", "ms-form__label");
            attr(label, "for", "setPassword");
            attr(button1, "data-cy", "change-password-btn");
            attr(button1, "class", "ms-modal__outline-button");
            attr(button1, "name", "setPassword");
            attr(div2, "class", "ms-form__group");
        },
        m: function (target, anchor) {
            insert(target, div1, anchor);
            append(div1, h2);
            append(div1, t1);
            append(div1, div0);
            append(div0, button0);
            append(button0, t2);
            insert(target, t3, anchor);
            insert(target, form, anchor);
            mount_component(emailinput, form, null);
            insert(target, t4, anchor);
            insert(target, div2, anchor);
            append(div2, label);
            append(div2, t6);
            append(div2, button1);
            mount_component(passwordlockicon, button1, null);
            append(button1, t7);
            if_block0.m(button1, null);
            insert(target, t8, anchor);
            if (if_block1)
                if_block1.m(target, anchor);
            insert(target, if_block1_anchor, anchor);
            current = true;
            if (!mounted) {
                dispose = [
                    listen(button0, "click", /*submitEmailChange*/ ctx[5]),
                    listen(form, "submit", stop_propagation(prevent_default(/*submitEmailChange*/ ctx[5]))),
                    listen(button1, "click", /*click_handler*/ ctx[12])
                ];
                mounted = true;
            }
        },
        p: function (ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if (!current || dirty & /*emailInputValid*/ 8 && button0_disabled_value !== (button0_disabled_value = !ctx[3])) {
                button0.disabled = button0_disabled_value;
            }
            var emailinput_changes = {};
            if (!updating_emailInputValid && dirty & /*emailInputValid*/ 8) {
                updating_emailInputValid = true;
                emailinput_changes.emailInputValid = /*emailInputValid*/ ctx[3];
                add_flush_callback(function () { return updating_emailInputValid = false; });
            }
            if (!updating_emailValue && dirty & /*emailValue*/ 4) {
                updating_emailValue = true;
                emailinput_changes.emailValue = /*emailValue*/ ctx[2];
                add_flush_callback(function () { return updating_emailValue = false; });
            }
            emailinput.$set(emailinput_changes);
            if (current_block_type !== (current_block_type = select_block_type(ctx))) {
                if_block0.d(1);
                if_block0 = current_block_type(ctx);
                if (if_block0) {
                    if_block0.c();
                    if_block0.m(button1, null);
                }
            }
            if ( /*$app*/ctx[4].authProviders.length > 0) {
                if (if_block1) {
                    if_block1.p(ctx, dirty);
                }
                else {
                    if_block1 = create_if_block$9(ctx);
                    if_block1.c();
                    if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
                }
            }
            else if (if_block1) {
                if_block1.d(1);
                if_block1 = null;
            }
        },
        i: function (local) {
            if (current)
                return;
            transition_in(emailinput.$$.fragment, local);
            transition_in(passwordlockicon.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(emailinput.$$.fragment, local);
            transition_out(passwordlockicon.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div1);
            if (detaching)
                detach(t3);
            if (detaching)
                detach(form);
            destroy_component(emailinput);
            if (detaching)
                detach(t4);
            if (detaching)
                detach(div2);
            destroy_component(passwordlockicon);
            if_block0.d();
            if (detaching)
                detach(t8);
            if (if_block1)
                if_block1.d(detaching);
            if (detaching)
                detach(if_block1_anchor);
            mounted = false;
            run_all(dispose);
        }
    };
}
function instance$b($$self, $$props, $$invalidate) {
    var $app;
    component_subscribe($$self, AppStore, function ($$value) { return $$invalidate(4, $app = $$value); });
    var displayProfile = $$props.displayProfile;
    var member = $$props.member;
    var emailValue = $$props.emailValue;
    var profileLoader = $$props.profileLoader;
    // sort
    $app.authProviders.sort(function (a, b) {
        if (isConnected(a) === isConnected(b)) {
            return a.order - b.order;
        }
        return isConnected(a) ? -1 : 1;
    });
    var emailInputValid = false;
    function submitEmailChange(e) {
        return __awaiter(this, void 0, void 0, function () {
            var message, err_14;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!emailInputValid || !emailValue)
                            return [2 /*return*/];
                        $$invalidate(8, profileLoader = true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, window.$memberstackDom.updateMemberAuth({ email: emailValue })];
                    case 2:
                        message = (_a.sent())._internalUseOnly.message;
                        window.$memberstackDom._showMessage(message, false);
                        $$invalidate(8, profileLoader = false);
                        return [3 /*break*/, 4];
                    case 3:
                        err_14 = _a.sent();
                        window.$memberstackDom._showMessage(err_14.message, true);
                        $$invalidate(8, profileLoader = false);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    function disconnectProvider(provider) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, message, err_15;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        $$invalidate(8, profileLoader = true);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, window.$memberstackDom.disconnectProvider({ provider: provider })];
                    case 2:
                        _a = _b.sent(), data = _a.data, message = _a._internalUseOnly.message;
                        $$invalidate(1, member = __assign(__assign({}, member), { auth: __assign(__assign({}, member.auth), { providers: data.providers }) }));
                        window.$memberstackDom._showMessage(message, false);
                        $$invalidate(8, profileLoader = false);
                        return [3 /*break*/, 4];
                    case 3:
                        err_15 = _b.sent();
                        window.$memberstackDom._showMessage(err_15.message, true);
                        $$invalidate(8, profileLoader = false);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    function connectAdditionalProvider(provider) {
        return __awaiter(this, void 0, void 0, function () {
            var data, err_16;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("connect", provider);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, window.$memberstackDom.connectProvider({ provider: provider })];
                    case 2:
                        data = (_a.sent()).data;
                        $$invalidate(1, member = __assign(__assign({}, member), { auth: __assign(__assign({}, member.auth), { providers: data.providers }) }));
                        window.$memberstackDom._showMessage(data.message, false);
                        return [3 /*break*/, 4];
                    case 3:
                        err_16 = _a.sent();
                        window.$memberstackDom._showMessage(err_16.message, true);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    function isConnected(provider) {
        return member.auth.providers.some(function (prv) { return prv.provider === provider.provider; });
    }
    var func = function (provider, prv) { return prv.provider === provider.provider; };
    function emailinput_emailInputValid_binding(value) {
        emailInputValid = value;
        $$invalidate(3, emailInputValid);
    }
    function emailinput_emailValue_binding(value) {
        emailValue = value;
        $$invalidate(2, emailValue);
    }
    var click_handler = function () { return $$invalidate(0, displayProfile = "changePassword"); };
    var click_handler_1 = function (provider) { return disconnectProvider(provider.provider); };
    var click_handler_2 = function (provider) { return connectAdditionalProvider(provider.provider); };
    $$self.$$set = function ($$props) {
        if ('displayProfile' in $$props)
            $$invalidate(0, displayProfile = $$props.displayProfile);
        if ('member' in $$props)
            $$invalidate(1, member = $$props.member);
        if ('emailValue' in $$props)
            $$invalidate(2, emailValue = $$props.emailValue);
        if ('profileLoader' in $$props)
            $$invalidate(8, profileLoader = $$props.profileLoader);
    };
    return [
        displayProfile,
        member,
        emailValue,
        emailInputValid,
        $app,
        submitEmailChange,
        disconnectProvider,
        connectAdditionalProvider,
        profileLoader,
        func,
        emailinput_emailInputValid_binding,
        emailinput_emailValue_binding,
        click_handler,
        click_handler_1,
        click_handler_2
    ];
}
var SecurityInfoContent = /** @class */ (function (_super) {
    __extends(SecurityInfoContent, _super);
    function SecurityInfoContent(options) {
        var _this = _super.call(this) || this;
        init(_this, options, instance$b, create_fragment$d, safe_not_equal, {
            displayProfile: 0,
            member: 1,
            emailValue: 2,
            profileLoader: 8
        });
        return _this;
    }
    return SecurityInfoContent;
}(SvelteComponent));
/* src/components/PasswordInfoContent.svelte generated by Svelte v3.48.0 */
function create_else_block$3(ctx) {
    var t;
    return {
        c: function () {
            t = text("Change Password");
        },
        m: function (target, anchor) {
            insert(target, t, anchor);
        },
        d: function (detaching) {
            if (detaching)
                detach(t);
        }
    };
}
// (66:4) {#if !member.auth.hasPassword}
function create_if_block_1$6(ctx) {
    var t;
    return {
        c: function () {
            t = text("Set Password");
        },
        m: function (target, anchor) {
            insert(target, t, anchor);
        },
        d: function (detaching) {
            if (detaching)
                detach(t);
        }
    };
}
// (74:2) {#if member.auth.hasPassword}
function create_if_block$8(ctx) {
    var passwordinput;
    var updating_passwordValue;
    var updating_passwordInputValid;
    var current;
    function passwordinput_passwordValue_binding(value) {
        /*passwordinput_passwordValue_binding*/ ctx[11](value);
    }
    function passwordinput_passwordInputValid_binding(value) {
        /*passwordinput_passwordInputValid_binding*/ ctx[12](value);
    }
    var passwordinput_props = {
        passwordLabel: "Current Password",
        passwordPlaceholder: "Enter current password"
    };
    if ( /*currentPasswordValue*/ctx[2] !== void 0) {
        passwordinput_props.passwordValue = /*currentPasswordValue*/ ctx[2];
    }
    if ( /*currentPasswordValid*/ctx[5] !== void 0) {
        passwordinput_props.passwordInputValid = /*currentPasswordValid*/ ctx[5];
    }
    passwordinput = new PasswordInput({ props: passwordinput_props });
    binding_callbacks.push(function () { return bind(passwordinput, 'passwordValue', passwordinput_passwordValue_binding); });
    binding_callbacks.push(function () { return bind(passwordinput, 'passwordInputValid', passwordinput_passwordInputValid_binding); });
    return {
        c: function () {
            create_component(passwordinput.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(passwordinput, target, anchor);
            current = true;
        },
        p: function (ctx, dirty) {
            var passwordinput_changes = {};
            if (!updating_passwordValue && dirty & /*currentPasswordValue*/ 4) {
                updating_passwordValue = true;
                passwordinput_changes.passwordValue = /*currentPasswordValue*/ ctx[2];
                add_flush_callback(function () { return updating_passwordValue = false; });
            }
            if (!updating_passwordInputValid && dirty & /*currentPasswordValid*/ 32) {
                updating_passwordInputValid = true;
                passwordinput_changes.passwordInputValid = /*currentPasswordValid*/ ctx[5];
                add_flush_callback(function () { return updating_passwordInputValid = false; });
            }
            passwordinput.$set(passwordinput_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(passwordinput.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(passwordinput.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(passwordinput, detaching);
        }
    };
}
function create_fragment$c(ctx) {
    var div3;
    var div1;
    var div0;
    var button0;
    var backicon;
    var t0;
    var h2;
    var t1;
    var div2;
    var button1;
    var t2;
    var button1_disabled_value;
    var t3;
    var form;
    var t4;
    var passwordinput0;
    var updating_passwordValue;
    var updating_passwordInputValid;
    var t5;
    var passwordinput1;
    var updating_passwordValue_1;
    var updating_passwordInputValid_1;
    var current;
    var mounted;
    var dispose;
    backicon = new BackIcon({});
    function select_block_type(ctx, dirty) {
        if (!ctx[1].auth.hasPassword)
            return create_if_block_1$6;
        return create_else_block$3;
    }
    var current_block_type = select_block_type(ctx);
    var if_block0 = current_block_type(ctx);
    var if_block1 = /*member*/ ctx[1].auth.hasPassword && create_if_block$8(ctx);
    function passwordinput0_passwordValue_binding(value) {
        /*passwordinput0_passwordValue_binding*/ ctx[13](value);
    }
    function passwordinput0_passwordInputValid_binding(value) {
        /*passwordinput0_passwordInputValid_binding*/ ctx[14](value);
    }
    var passwordinput0_props = {
        passwordLabel: "New Password",
        passwordPlaceholder: "Enter a strong password"
    };
    if ( /*newPasswordValue*/ctx[3] !== void 0) {
        passwordinput0_props.passwordValue = /*newPasswordValue*/ ctx[3];
    }
    if ( /*newPasswordValid*/ctx[6] !== void 0) {
        passwordinput0_props.passwordInputValid = /*newPasswordValid*/ ctx[6];
    }
    passwordinput0 = new PasswordInput({ props: passwordinput0_props });
    binding_callbacks.push(function () { return bind(passwordinput0, 'passwordValue', passwordinput0_passwordValue_binding); });
    binding_callbacks.push(function () { return bind(passwordinput0, 'passwordInputValid', passwordinput0_passwordInputValid_binding); });
    function passwordinput1_passwordValue_binding(value) {
        /*passwordinput1_passwordValue_binding*/ ctx[15](value);
    }
    function passwordinput1_passwordInputValid_binding(value) {
        /*passwordinput1_passwordInputValid_binding*/ ctx[16](value);
    }
    var passwordinput1_props = {
        passwordLabel: "Confirm New Password",
        passwordPlaceholder: "Enter a strong password"
    };
    if ( /*confirmPasswordValue*/ctx[4] !== void 0) {
        passwordinput1_props.passwordValue = /*confirmPasswordValue*/ ctx[4];
    }
    if ( /*confirmPasswordValid*/ctx[7] !== void 0) {
        passwordinput1_props.passwordInputValid = /*confirmPasswordValid*/ ctx[7];
    }
    passwordinput1 = new PasswordInput({ props: passwordinput1_props });
    binding_callbacks.push(function () { return bind(passwordinput1, 'passwordValue', passwordinput1_passwordValue_binding); });
    binding_callbacks.push(function () { return bind(passwordinput1, 'passwordInputValid', passwordinput1_passwordInputValid_binding); });
    return {
        c: function () {
            div3 = element("div");
            div1 = element("div");
            div0 = element("div");
            button0 = element("button");
            create_component(backicon.$$.fragment);
            t0 = space();
            h2 = element("h2");
            if_block0.c();
            t1 = space();
            div2 = element("div");
            button1 = element("button");
            t2 = text("Save");
            t3 = space();
            form = element("form");
            if (if_block1)
                if_block1.c();
            t4 = space();
            create_component(passwordinput0.$$.fragment);
            t5 = space();
            create_component(passwordinput1.$$.fragment);
            attr(div0, "class", "ms-modal__profile-back");
            attr(h2, "class", "ms-modal__title ms-modal__title--profile");
            attr(div1, "class", "ms-modal__title-group");
            attr(button1, "class", "ms-modal__save-button");
            button1.disabled = button1_disabled_value = /*member*/ ctx[1].auth.hasPassword && !ctx[5] || !ctx[6] || !ctx[7];
            attr(div2, "class", "ms-modal__action-container");
            attr(div3, "class", "ms-modal__title-container");
            attr(form, "class", "ms-form");
            attr(form, "action", "");
            attr(form, "method", "post");
            attr(form, "autocomplete", "off");
        },
        m: function (target, anchor) {
            insert(target, div3, anchor);
            append(div3, div1);
            append(div1, div0);
            append(div0, button0);
            mount_component(backicon, button0, null);
            append(div1, t0);
            append(div1, h2);
            if_block0.m(h2, null);
            append(div3, t1);
            append(div3, div2);
            append(div2, button1);
            append(button1, t2);
            insert(target, t3, anchor);
            insert(target, form, anchor);
            if (if_block1)
                if_block1.m(form, null);
            append(form, t4);
            mount_component(passwordinput0, form, null);
            append(form, t5);
            mount_component(passwordinput1, form, null);
            current = true;
            if (!mounted) {
                dispose = [
                    listen(button0, "click", /*click_handler*/ ctx[10]),
                    listen(button1, "click", /*submitPasswordChange*/ ctx[8]),
                    listen(form, "submit", stop_propagation(prevent_default(/*submitPasswordChange*/ ctx[8])))
                ];
                mounted = true;
            }
        },
        p: function (ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if (current_block_type !== (current_block_type = select_block_type(ctx))) {
                if_block0.d(1);
                if_block0 = current_block_type(ctx);
                if (if_block0) {
                    if_block0.c();
                    if_block0.m(h2, null);
                }
            }
            if (!current || dirty & /*member, currentPasswordValid, newPasswordValid, confirmPasswordValid*/ 226 && button1_disabled_value !== (button1_disabled_value = /*member*/ ctx[1].auth.hasPassword && !ctx[5] || !ctx[6] || !ctx[7])) {
                button1.disabled = button1_disabled_value;
            }
            if ( /*member*/ctx[1].auth.hasPassword) {
                if (if_block1) {
                    if_block1.p(ctx, dirty);
                    if (dirty & /*member*/ 2) {
                        transition_in(if_block1, 1);
                    }
                }
                else {
                    if_block1 = create_if_block$8(ctx);
                    if_block1.c();
                    transition_in(if_block1, 1);
                    if_block1.m(form, t4);
                }
            }
            else if (if_block1) {
                group_outros();
                transition_out(if_block1, 1, 1, function () {
                    if_block1 = null;
                });
                check_outros();
            }
            var passwordinput0_changes = {};
            if (!updating_passwordValue && dirty & /*newPasswordValue*/ 8) {
                updating_passwordValue = true;
                passwordinput0_changes.passwordValue = /*newPasswordValue*/ ctx[3];
                add_flush_callback(function () { return updating_passwordValue = false; });
            }
            if (!updating_passwordInputValid && dirty & /*newPasswordValid*/ 64) {
                updating_passwordInputValid = true;
                passwordinput0_changes.passwordInputValid = /*newPasswordValid*/ ctx[6];
                add_flush_callback(function () { return updating_passwordInputValid = false; });
            }
            passwordinput0.$set(passwordinput0_changes);
            var passwordinput1_changes = {};
            if (!updating_passwordValue_1 && dirty & /*confirmPasswordValue*/ 16) {
                updating_passwordValue_1 = true;
                passwordinput1_changes.passwordValue = /*confirmPasswordValue*/ ctx[4];
                add_flush_callback(function () { return updating_passwordValue_1 = false; });
            }
            if (!updating_passwordInputValid_1 && dirty & /*confirmPasswordValid*/ 128) {
                updating_passwordInputValid_1 = true;
                passwordinput1_changes.passwordInputValid = /*confirmPasswordValid*/ ctx[7];
                add_flush_callback(function () { return updating_passwordInputValid_1 = false; });
            }
            passwordinput1.$set(passwordinput1_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(backicon.$$.fragment, local);
            transition_in(if_block1);
            transition_in(passwordinput0.$$.fragment, local);
            transition_in(passwordinput1.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(backicon.$$.fragment, local);
            transition_out(if_block1);
            transition_out(passwordinput0.$$.fragment, local);
            transition_out(passwordinput1.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div3);
            destroy_component(backicon);
            if_block0.d();
            if (detaching)
                detach(t3);
            if (detaching)
                detach(form);
            if (if_block1)
                if_block1.d();
            destroy_component(passwordinput0);
            destroy_component(passwordinput1);
            mounted = false;
            run_all(dispose);
        }
    };
}
function instance$a($$self, $$props, $$invalidate) {
    var displayProfile = $$props.displayProfile;
    var profileLoader = $$props.profileLoader;
    var member = $$props.member;
    var currentPasswordValue = "";
    var newPasswordValue = "";
    var confirmPasswordValue = "";
    var currentPasswordValid = false;
    var newPasswordValid = false;
    var confirmPasswordValid = false;
    function submitPasswordChange(e) {
        return __awaiter(this, void 0, void 0, function () {
            var message, msg, msg, err_17;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (member.auth.hasPassword && !currentPasswordValid && !newPasswordValid && !confirmPasswordValid)
                            return [2 /*return*/];
                        if (!member.auth.hasPassword && !newPasswordValid && !confirmPasswordValid)
                            return [2 /*return*/];
                        // if (newPasswordValue !== confirmPasswordValue) {
                        //   window.$memberstackDom._showMessage("New password and confirm password do not match", true);
                        //   return;
                        // }
                        $$invalidate(9, profileLoader = true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        message = void 0;
                        if (!member.auth.hasPassword) return [3 /*break*/, 3];
                        return [4 /*yield*/, window.$memberstackDom.updateMemberAuth({
                                oldPassword: currentPasswordValue,
                                newPassword: newPasswordValue
                            })];
                    case 2:
                        msg = (_a.sent())._internalUseOnly.message;
                        message = msg;
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, window.$memberstackDom.setPassword({ password: newPasswordValue })];
                    case 4:
                        msg = (_a.sent())._internalUseOnly.message;
                        $$invalidate(1, member.auth.hasPassword = true, member);
                        message = msg;
                        _a.label = 5;
                    case 5:
                        window.$memberstackDom._showMessage(message, false);
                        $$invalidate(2, currentPasswordValue = "");
                        $$invalidate(3, newPasswordValue = "");
                        $$invalidate(4, confirmPasswordValue = "");
                        $$invalidate(9, profileLoader = false);
                        return [3 /*break*/, 7];
                    case 6:
                        err_17 = _a.sent();
                        window.$memberstackDom._showMessage(err_17.message, true);
                        $$invalidate(9, profileLoader = false);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    }
    var click_handler = function () { return $$invalidate(0, displayProfile = "security"); };
    function passwordinput_passwordValue_binding(value) {
        currentPasswordValue = value;
        $$invalidate(2, currentPasswordValue);
    }
    function passwordinput_passwordInputValid_binding(value) {
        currentPasswordValid = value;
        $$invalidate(5, currentPasswordValid);
    }
    function passwordinput0_passwordValue_binding(value) {
        newPasswordValue = value;
        $$invalidate(3, newPasswordValue);
    }
    function passwordinput0_passwordInputValid_binding(value) {
        newPasswordValid = value;
        $$invalidate(6, newPasswordValid);
    }
    function passwordinput1_passwordValue_binding(value) {
        confirmPasswordValue = value;
        $$invalidate(4, confirmPasswordValue);
    }
    function passwordinput1_passwordInputValid_binding(value) {
        confirmPasswordValid = value;
        $$invalidate(7, confirmPasswordValid);
    }
    $$self.$$set = function ($$props) {
        if ('displayProfile' in $$props)
            $$invalidate(0, displayProfile = $$props.displayProfile);
        if ('profileLoader' in $$props)
            $$invalidate(9, profileLoader = $$props.profileLoader);
        if ('member' in $$props)
            $$invalidate(1, member = $$props.member);
    };
    return [
        displayProfile,
        member,
        currentPasswordValue,
        newPasswordValue,
        confirmPasswordValue,
        currentPasswordValid,
        newPasswordValid,
        confirmPasswordValid,
        submitPasswordChange,
        profileLoader,
        click_handler,
        passwordinput_passwordValue_binding,
        passwordinput_passwordInputValid_binding,
        passwordinput0_passwordValue_binding,
        passwordinput0_passwordInputValid_binding,
        passwordinput1_passwordValue_binding,
        passwordinput1_passwordInputValid_binding
    ];
}
var PasswordInfoContent = /** @class */ (function (_super) {
    __extends(PasswordInfoContent, _super);
    function PasswordInfoContent(options) {
        var _this = _super.call(this) || this;
        init(_this, options, instance$a, create_fragment$c, safe_not_equal, {
            displayProfile: 0,
            profileLoader: 9,
            member: 1
        });
        return _this;
    }
    return PasswordInfoContent;
}(SvelteComponent));
function fade(node, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.delay, delay = _c === void 0 ? 0 : _c, _d = _b.duration, duration = _d === void 0 ? 400 : _d, _e = _b.easing, easing = _e === void 0 ? identity : _e;
    var o = +getComputedStyle(node).opacity;
    return {
        delay: delay,
        duration: duration,
        easing: easing,
        css: function (t) { return "opacity: ".concat(t * o); }
    };
}
/* src/components/ProfileLoader.svelte generated by Svelte v3.48.0 */
function create_fragment$b(ctx) {
    var div;
    var loadingicon;
    var div_transition;
    var current;
    loadingicon = new LoadingIcon({});
    return {
        c: function () {
            div = element("div");
            create_component(loadingicon.$$.fragment);
            attr(div, "class", "ms__profile__loader");
        },
        m: function (target, anchor) {
            insert(target, div, anchor);
            mount_component(loadingicon, div, null);
            current = true;
        },
        p: noop,
        i: function (local) {
            if (current)
                return;
            transition_in(loadingicon.$$.fragment, local);
            add_render_callback(function () {
                if (!div_transition)
                    div_transition = create_bidirectional_transition(div, fade, {}, true);
                div_transition.run(1);
            });
            current = true;
        },
        o: function (local) {
            transition_out(loadingicon.$$.fragment, local);
            if (!div_transition)
                div_transition = create_bidirectional_transition(div, fade, {}, false);
            div_transition.run(0);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div);
            destroy_component(loadingicon);
            if (detaching && div_transition)
                div_transition.end();
        }
    };
}
var ProfileLoader = /** @class */ (function (_super) {
    __extends(ProfileLoader, _super);
    function ProfileLoader(options) {
        var _this = _super.call(this) || this;
        init(_this, options, null, create_fragment$b, safe_not_equal, {});
        return _this;
    }
    return ProfileLoader;
}(SvelteComponent));
/* src/components/RegularButton.svelte generated by Svelte v3.48.0 */
function create_fragment$a(ctx) {
    var button;
    var switch_instance0;
    var t0;
    var t1;
    var t2;
    var switch_instance1;
    var button_class_value;
    var current;
    var mounted;
    var dispose;
    var switch_value = /*buttonLeftIcon*/ ctx[2];
    function switch_props(ctx) {
        return {};
    }
    if (switch_value) {
        switch_instance0 = new switch_value(switch_props());
    }
    var switch_value_1 = /*buttonRightIcon*/ ctx[1];
    function switch_props_1(ctx) {
        return {};
    }
    if (switch_value_1) {
        switch_instance1 = new switch_value_1(switch_props_1());
    }
    return {
        c: function () {
            button = element("button");
            if (switch_instance0)
                create_component(switch_instance0.$$.fragment);
            t0 = space();
            t1 = text(/*buttonText*/ ctx[0]);
            t2 = space();
            if (switch_instance1)
                create_component(switch_instance1.$$.fragment);
            attr(button, "class", button_class_value = "ms-modal__regular-button " + ( /*$$restProps*/ctx[5].class || ''));
            set_style(button, "background", /*buttonColor*/ ctx[4]);
        },
        m: function (target, anchor) {
            insert(target, button, anchor);
            if (switch_instance0) {
                mount_component(switch_instance0, button, null);
            }
            append(button, t0);
            append(button, t1);
            append(button, t2);
            if (switch_instance1) {
                mount_component(switch_instance1, button, null);
            }
            current = true;
            if (!mounted) {
                dispose = listen(button, "click", function () {
                    if (is_function(/*onClick*/ ctx[3])) /*onClick*/
                        ctx[3].apply(this, arguments);
                });
                mounted = true;
            }
        },
        p: function (new_ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            ctx = new_ctx;
            if (switch_value !== (switch_value = /*buttonLeftIcon*/ ctx[2])) {
                if (switch_instance0) {
                    group_outros();
                    var old_component_1 = switch_instance0;
                    transition_out(old_component_1.$$.fragment, 1, 0, function () {
                        destroy_component(old_component_1, 1);
                    });
                    check_outros();
                }
                if (switch_value) {
                    switch_instance0 = new switch_value(switch_props());
                    create_component(switch_instance0.$$.fragment);
                    transition_in(switch_instance0.$$.fragment, 1);
                    mount_component(switch_instance0, button, t0);
                }
                else {
                    switch_instance0 = null;
                }
            }
            if (!current || dirty & /*buttonText*/ 1)
                set_data(t1, /*buttonText*/ ctx[0]);
            if (switch_value_1 !== (switch_value_1 = /*buttonRightIcon*/ ctx[1])) {
                if (switch_instance1) {
                    group_outros();
                    var old_component_2 = switch_instance1;
                    transition_out(old_component_2.$$.fragment, 1, 0, function () {
                        destroy_component(old_component_2, 1);
                    });
                    check_outros();
                }
                if (switch_value_1) {
                    switch_instance1 = new switch_value_1(switch_props_1());
                    create_component(switch_instance1.$$.fragment);
                    transition_in(switch_instance1.$$.fragment, 1);
                    mount_component(switch_instance1, button, null);
                }
                else {
                    switch_instance1 = null;
                }
            }
            if (!current || dirty & /*$$restProps*/ 32 && button_class_value !== (button_class_value = "ms-modal__regular-button " + ( /*$$restProps*/ctx[5].class || ''))) {
                attr(button, "class", button_class_value);
            }
            if (!current || dirty & /*buttonColor*/ 16) {
                set_style(button, "background", /*buttonColor*/ ctx[4]);
            }
        },
        i: function (local) {
            if (current)
                return;
            if (switch_instance0)
                transition_in(switch_instance0.$$.fragment, local);
            if (switch_instance1)
                transition_in(switch_instance1.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            if (switch_instance0)
                transition_out(switch_instance0.$$.fragment, local);
            if (switch_instance1)
                transition_out(switch_instance1.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(button);
            if (switch_instance0)
                destroy_component(switch_instance0);
            if (switch_instance1)
                destroy_component(switch_instance1);
            mounted = false;
            dispose();
        }
    };
}
function instance$9($$self, $$props, $$invalidate) {
    var omit_props_names = ["buttonText", "buttonRightIcon", "buttonLeftIcon", "onClick"];
    var $$restProps = compute_rest_props($$props, omit_props_names);
    var $app;
    component_subscribe($$self, AppStore, function ($$value) { return $$invalidate(6, $app = $$value); });
    var _a = $$props.buttonText, buttonText = _a === void 0 ? "Submit" : _a;
    var _b = $$props.buttonRightIcon, buttonRightIcon = _b === void 0 ? null : _b;
    var _c = $$props.buttonLeftIcon, buttonLeftIcon = _c === void 0 ? null : _c;
    var _d = $$props.onClick, onClick = _d === void 0 ? function () {
    } : _d;
    var buttonColor = "rgb(41, 98, 255)";
    if ($app.branding.colors.lightMode.primaryButton) {
        buttonColor = $app.branding.colors.lightMode.primaryButton;
    }
    $$self.$$set = function ($$new_props) {
        $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
        $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
        if ('buttonText' in $$new_props)
            $$invalidate(0, buttonText = $$new_props.buttonText);
        if ('buttonRightIcon' in $$new_props)
            $$invalidate(1, buttonRightIcon = $$new_props.buttonRightIcon);
        if ('buttonLeftIcon' in $$new_props)
            $$invalidate(2, buttonLeftIcon = $$new_props.buttonLeftIcon);
        if ('onClick' in $$new_props)
            $$invalidate(3, onClick = $$new_props.onClick);
    };
    return [buttonText, buttonRightIcon, buttonLeftIcon, onClick, buttonColor, $$restProps];
}
var RegularButton = /** @class */ (function (_super) {
    __extends(RegularButton, _super);
    function RegularButton(options) {
        var _this = _super.call(this) || this;
        init(_this, options, instance$9, create_fragment$a, safe_not_equal, {
            buttonText: 0,
            buttonRightIcon: 1,
            buttonLeftIcon: 2,
            onClick: 3
        });
        return _this;
    }
    return RegularButton;
}(SvelteComponent));
/* src/components/TextButton.svelte generated by Svelte v3.48.0 */
function create_fragment$9(ctx) {
    var button;
    var t;
    var button_class_value;
    var mounted;
    var dispose;
    return {
        c: function () {
            button = element("button");
            t = text(/*buttonText*/ ctx[0]);
            attr(button, "class", button_class_value = "ms-modal__text-button " + /*$$restProps*/ ctx[3].class);
            set_style(button, "color", /*buttonColor*/ ctx[2]);
        },
        m: function (target, anchor) {
            insert(target, button, anchor);
            append(button, t);
            if (!mounted) {
                dispose = listen(button, "click", function () {
                    if (is_function(/*onClick*/ ctx[1])) /*onClick*/
                        ctx[1].apply(this, arguments);
                });
                mounted = true;
            }
        },
        p: function (new_ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            ctx = new_ctx;
            if (dirty & /*buttonText*/ 1)
                set_data(t, /*buttonText*/ ctx[0]);
            if (dirty & /*$$restProps*/ 8 && button_class_value !== (button_class_value = "ms-modal__text-button " + /*$$restProps*/ ctx[3].class)) {
                attr(button, "class", button_class_value);
            }
            if (dirty & /*buttonColor*/ 4) {
                set_style(button, "color", /*buttonColor*/ ctx[2]);
            }
        },
        i: noop,
        o: noop,
        d: function (detaching) {
            if (detaching)
                detach(button);
            mounted = false;
            dispose();
        }
    };
}
function instance$8($$self, $$props, $$invalidate) {
    var omit_props_names = ["buttonText", "onClick"];
    var $$restProps = compute_rest_props($$props, omit_props_names);
    var $app;
    component_subscribe($$self, AppStore, function ($$value) { return $$invalidate(4, $app = $$value); });
    var _a = $$props.buttonText, buttonText = _a === void 0 ? "Submit" : _a;
    var _b = $$props.onClick, onClick = _b === void 0 ? function () {
    } : _b;
    var buttonColor = "rgb(41, 98, 255)";
    if ($app.branding.colors.lightMode.primaryButton) {
        buttonColor = $app.branding.colors.lightMode.primaryButton;
    }
    $$self.$$set = function ($$new_props) {
        $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
        $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
        if ('buttonText' in $$new_props)
            $$invalidate(0, buttonText = $$new_props.buttonText);
        if ('onClick' in $$new_props)
            $$invalidate(1, onClick = $$new_props.onClick);
    };
    return [buttonText, onClick, buttonColor, $$restProps];
}
var TextButton = /** @class */ (function (_super) {
    __extends(TextButton, _super);
    function TextButton(options) {
        var _this = _super.call(this) || this;
        init(_this, options, instance$8, create_fragment$9, safe_not_equal, { buttonText: 0, onClick: 1 });
        return _this;
    }
    return TextButton;
}(SvelteComponent));
/* src/components/PlansInfoContent.svelte generated by Svelte v3.48.0 */
function get_each_context$2(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[8] = list[i];
    child_ctx[10] = i;
    return child_ctx;
}
// (41:0) {#if member.stripeCustomerId}
function create_if_block_2$4(ctx) {
    var div;
    var regularbutton;
    var current;
    regularbutton = new RegularButton({
        props: {
            onClick: /*launchPortal*/ ctx[3],
            class: "ms-modal__regular-button--margin-right ms-modal__regular-button--left-icon",
            buttonText: "Manage Subscriptions",
            buttonLeftIcon: LinkOutIcon
        }
    });
    return {
        c: function () {
            div = element("div");
            create_component(regularbutton.$$.fragment);
            set_style(div, "display", "flex");
            set_style(div, "flex-wrap", "wrap");
        },
        m: function (target, anchor) {
            insert(target, div, anchor);
            mount_component(regularbutton, div, null);
            current = true;
        },
        p: noop,
        i: function (local) {
            if (current)
                return;
            transition_in(regularbutton.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(regularbutton.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div);
            destroy_component(regularbutton);
        }
    };
}
// (48:0) {#if freePlanConnections.length > 0}
function create_if_block_1$5(ctx) {
    var h3;
    var t1;
    var each_1_anchor;
    var current;
    var each_value = /*freePlanConnections*/ ctx[1];
    var each_blocks = [];
    for (var i = 0; i < each_value.length; i += 1) {
        each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
    }
    var out = function (i) { return transition_out(each_blocks[i], 1, 1, function () {
        each_blocks[i] = null;
    }); };
    return {
        c: function () {
            h3 = element("h3");
            h3.textContent = "Free Plans";
            t1 = space();
            for (var i = 0; i < each_blocks.length; i += 1) {
                each_blocks[i].c();
            }
            each_1_anchor = empty();
        },
        m: function (target, anchor) {
            insert(target, h3, anchor);
            insert(target, t1, anchor);
            for (var i = 0; i < each_blocks.length; i += 1) {
                each_blocks[i].m(target, anchor);
            }
            insert(target, each_1_anchor, anchor);
            current = true;
        },
        p: function (ctx, dirty) {
            if (dirty & /*removeFreePlan, freePlanConnections, $app*/ 22) {
                each_value = /*freePlanConnections*/ ctx[1];
                var i = void 0;
                for (i = 0; i < each_value.length; i += 1) {
                    var child_ctx = get_each_context$2(ctx, each_value, i);
                    if (each_blocks[i]) {
                        each_blocks[i].p(child_ctx, dirty);
                        transition_in(each_blocks[i], 1);
                    }
                    else {
                        each_blocks[i] = create_each_block$2(child_ctx);
                        each_blocks[i].c();
                        transition_in(each_blocks[i], 1);
                        each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
                    }
                }
                group_outros();
                for (i = each_value.length; i < each_blocks.length; i += 1) {
                    out(i);
                }
                check_outros();
            }
        },
        i: function (local) {
            if (current)
                return;
            for (var i = 0; i < each_value.length; i += 1) {
                transition_in(each_blocks[i]);
            }
            current = true;
        },
        o: function (local) {
            each_blocks = each_blocks.filter(Boolean);
            for (var i = 0; i < each_blocks.length; i += 1) {
                transition_out(each_blocks[i]);
            }
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(h3);
            if (detaching)
                detach(t1);
            destroy_each(each_blocks, detaching);
            if (detaching)
                detach(each_1_anchor);
        }
    };
}
// (50:1) {#each freePlanConnections as memberPlan, i}
function create_each_block$2(ctx) {
    var div1;
    var div0;
    var b;
    var t0_value = /*$app*/ ctx[2].plans.find(func).name + "";
    var t0;
    var t1;
    var textbutton;
    var t2;
    var current;
    function func() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return /*func*/ ctx[6].apply(/*func*/ ctx, __spreadArray([/*memberPlan*/ ctx[8]], __read(args), false));
    }
    function func_1() {
        return /*func_1*/ ctx[7](/*memberPlan*/ ctx[8]);
    }
    textbutton = new TextButton({
        props: { buttonText: "Remove", onClick: func_1 }
    });
    return {
        c: function () {
            div1 = element("div");
            div0 = element("div");
            b = element("b");
            t0 = text(t0_value);
            t1 = space();
            create_component(textbutton.$$.fragment);
            t2 = space();
            attr(div1, "class", "ms-modal__card");
        },
        m: function (target, anchor) {
            insert(target, div1, anchor);
            append(div1, div0);
            append(div0, b);
            append(b, t0);
            append(div1, t1);
            mount_component(textbutton, div1, null);
            append(div1, t2);
            current = true;
        },
        p: function (new_ctx, dirty) {
            ctx = new_ctx;
            if ((!current || dirty & /*$app, freePlanConnections*/ 6) && t0_value !== (t0_value = /*$app*/ ctx[2].plans.find(func).name + ""))
                set_data(t0, t0_value);
            var textbutton_changes = {};
            if (dirty & /*freePlanConnections*/ 2)
                textbutton_changes.onClick = func_1;
            textbutton.$set(textbutton_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(textbutton.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(textbutton.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div1);
            destroy_component(textbutton);
        }
    };
}
// (60:0) {#if !member.stripeCustomerId && freePlanConnections.length === 0}
function create_if_block$7(ctx) {
    var div;
    return {
        c: function () {
            div = element("div");
            div.textContent = "You currently have no plans.";
        },
        m: function (target, anchor) {
            insert(target, div, anchor);
        },
        d: function (detaching) {
            if (detaching)
                detach(div);
        }
    };
}
function create_fragment$8(ctx) {
    var div;
    var t1;
    var t2;
    var t3;
    var if_block2_anchor;
    var current;
    var if_block0 = /*member*/ ctx[0].stripeCustomerId && create_if_block_2$4(ctx);
    var if_block1 = /*freePlanConnections*/ ctx[1].length > 0 && create_if_block_1$5(ctx);
    var if_block2 = !ctx[0].stripeCustomerId && /*freePlanConnections*/ ctx[1].length === 0 && create_if_block$7();
    return {
        c: function () {
            div = element("div");
            div.innerHTML = "<h2 class=\"ms-modal__title ms-modal__title--profile\">Plans</h2>";
            t1 = space();
            if (if_block0)
                if_block0.c();
            t2 = space();
            if (if_block1)
                if_block1.c();
            t3 = space();
            if (if_block2)
                if_block2.c();
            if_block2_anchor = empty();
            attr(div, "class", "ms-modal__title-container");
        },
        m: function (target, anchor) {
            insert(target, div, anchor);
            insert(target, t1, anchor);
            if (if_block0)
                if_block0.m(target, anchor);
            insert(target, t2, anchor);
            if (if_block1)
                if_block1.m(target, anchor);
            insert(target, t3, anchor);
            if (if_block2)
                if_block2.m(target, anchor);
            insert(target, if_block2_anchor, anchor);
            current = true;
        },
        p: function (ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if ( /*member*/ctx[0].stripeCustomerId) {
                if (if_block0) {
                    if_block0.p(ctx, dirty);
                    if (dirty & /*member*/ 1) {
                        transition_in(if_block0, 1);
                    }
                }
                else {
                    if_block0 = create_if_block_2$4(ctx);
                    if_block0.c();
                    transition_in(if_block0, 1);
                    if_block0.m(t2.parentNode, t2);
                }
            }
            else if (if_block0) {
                group_outros();
                transition_out(if_block0, 1, 1, function () {
                    if_block0 = null;
                });
                check_outros();
            }
            if ( /*freePlanConnections*/ctx[1].length > 0) {
                if (if_block1) {
                    if_block1.p(ctx, dirty);
                    if (dirty & /*freePlanConnections*/ 2) {
                        transition_in(if_block1, 1);
                    }
                }
                else {
                    if_block1 = create_if_block_1$5(ctx);
                    if_block1.c();
                    transition_in(if_block1, 1);
                    if_block1.m(t3.parentNode, t3);
                }
            }
            else if (if_block1) {
                group_outros();
                transition_out(if_block1, 1, 1, function () {
                    if_block1 = null;
                });
                check_outros();
            }
            if (!ctx[0].stripeCustomerId && /*freePlanConnections*/ ctx[1].length === 0) {
                if (if_block2)
                    ;
                else {
                    if_block2 = create_if_block$7();
                    if_block2.c();
                    if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
                }
            }
            else if (if_block2) {
                if_block2.d(1);
                if_block2 = null;
            }
        },
        i: function (local) {
            if (current)
                return;
            transition_in(if_block0);
            transition_in(if_block1);
            current = true;
        },
        o: function (local) {
            transition_out(if_block0);
            transition_out(if_block1);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div);
            if (detaching)
                detach(t1);
            if (if_block0)
                if_block0.d(detaching);
            if (detaching)
                detach(t2);
            if (if_block1)
                if_block1.d(detaching);
            if (detaching)
                detach(t3);
            if (if_block2)
                if_block2.d(detaching);
            if (detaching)
                detach(if_block2_anchor);
        }
    };
}
function instance$7($$self, $$props, $$invalidate) {
    var freePlanConnections;
    var $app;
    component_subscribe($$self, AppStore, function ($$value) { return $$invalidate(2, $app = $$value); });
    var profileLoader = $$props.profileLoader;
    var member = $$props.member;
    function launchPortal(e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        $$invalidate(5, profileLoader = true);
                        return [4 /*yield*/, window.$memberstackDom.launchStripeCustomerPortal({ priceIds: [], autoRedirect: true })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    function removeFreePlan(planId) {
        return __awaiter(this, void 0, void 0, function () {
            var err_18;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        $$invalidate(5, profileLoader = true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, window.$memberstackDom.removePlan({ planId: planId })];
                    case 2:
                        _a.sent();
                        $$invalidate(0, member.planConnections = member.planConnections.filter(function (plan) { return plan.planId !== planId; }), member);
                        return [3 /*break*/, 5];
                    case 3:
                        err_18 = _a.sent();
                        console.log(err_18);
                        window.$memberstackDom._showMessage(err_18.message, true);
                        return [3 /*break*/, 5];
                    case 4:
                        $$invalidate(5, profileLoader = false);
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
    var func = function (memberPlan, plan) { return plan.id === memberPlan.planId; };
    var func_1 = function (memberPlan) { return removeFreePlan(memberPlan.planId); };
    $$self.$$set = function ($$props) {
        if ('profileLoader' in $$props)
            $$invalidate(5, profileLoader = $$props.profileLoader);
        if ('member' in $$props)
            $$invalidate(0, member = $$props.member);
    };
    $$self.$$.update = function () {
        if ($$self.$$.dirty & /*member*/ 1) {
            $$invalidate(1, freePlanConnections = member.planConnections.filter(function (plan) { return plan.type === "FREE"; }));
        }
    };
    return [
        member,
        freePlanConnections,
        $app,
        launchPortal,
        removeFreePlan,
        profileLoader,
        func,
        func_1
    ];
}
var PlansInfoContent = /** @class */ (function (_super) {
    __extends(PlansInfoContent, _super);
    function PlansInfoContent(options) {
        var _this = _super.call(this) || this;
        init(_this, options, instance$7, create_fragment$8, safe_not_equal, { profileLoader: 5, member: 0 });
        return _this;
    }
    return PlansInfoContent;
}(SvelteComponent));
/* src/modals/ProfileModal.svelte generated by Svelte v3.48.0 */
function create_if_block_4$2(ctx) {
    var profileloader;
    var current;
    profileloader = new ProfileLoader({});
    return {
        c: function () {
            create_component(profileloader.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(profileloader, target, anchor);
            current = true;
        },
        i: function (local) {
            if (current)
                return;
            transition_in(profileloader.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(profileloader.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(profileloader, detaching);
        }
    };
}
// (67:43) 
function create_if_block_3$2(ctx) {
    var plansinfocontent;
    var updating_member;
    var updating_profileLoader;
    var current;
    function plansinfocontent_member_binding(value) {
        /*plansinfocontent_member_binding*/ ctx[18](value);
    }
    function plansinfocontent_profileLoader_binding(value) {
        /*plansinfocontent_profileLoader_binding*/ ctx[19](value);
    }
    var plansinfocontent_props = {};
    if ( /*member*/ctx[1] !== void 0) {
        plansinfocontent_props.member = /*member*/ ctx[1];
    }
    if ( /*profileLoader*/ctx[5] !== void 0) {
        plansinfocontent_props.profileLoader = /*profileLoader*/ ctx[5];
    }
    plansinfocontent = new PlansInfoContent({ props: plansinfocontent_props });
    binding_callbacks.push(function () { return bind(plansinfocontent, 'member', plansinfocontent_member_binding); });
    binding_callbacks.push(function () { return bind(plansinfocontent, 'profileLoader', plansinfocontent_profileLoader_binding); });
    return {
        c: function () {
            create_component(plansinfocontent.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(plansinfocontent, target, anchor);
            current = true;
        },
        p: function (ctx, dirty) {
            var plansinfocontent_changes = {};
            if (!updating_member && dirty & /*member*/ 2) {
                updating_member = true;
                plansinfocontent_changes.member = /*member*/ ctx[1];
                add_flush_callback(function () { return updating_member = false; });
            }
            if (!updating_profileLoader && dirty & /*profileLoader*/ 32) {
                updating_profileLoader = true;
                plansinfocontent_changes.profileLoader = /*profileLoader*/ ctx[5];
                add_flush_callback(function () { return updating_profileLoader = false; });
            }
            plansinfocontent.$set(plansinfocontent_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(plansinfocontent.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(plansinfocontent.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(plansinfocontent, detaching);
        }
    };
}
// (61:52) 
function create_if_block_2$3(ctx) {
    var passwordinfocontent;
    var updating_displayProfile;
    var updating_profileLoader;
    var updating_member;
    var current;
    function passwordinfocontent_displayProfile_binding(value) {
        /*passwordinfocontent_displayProfile_binding*/ ctx[15](value);
    }
    function passwordinfocontent_profileLoader_binding(value) {
        /*passwordinfocontent_profileLoader_binding*/ ctx[16](value);
    }
    function passwordinfocontent_member_binding(value) {
        /*passwordinfocontent_member_binding*/ ctx[17](value);
    }
    var passwordinfocontent_props = {};
    if ( /*displayProfile*/ctx[0] !== void 0) {
        passwordinfocontent_props.displayProfile = /*displayProfile*/ ctx[0];
    }
    if ( /*profileLoader*/ctx[5] !== void 0) {
        passwordinfocontent_props.profileLoader = /*profileLoader*/ ctx[5];
    }
    if ( /*member*/ctx[1] !== void 0) {
        passwordinfocontent_props.member = /*member*/ ctx[1];
    }
    passwordinfocontent = new PasswordInfoContent({ props: passwordinfocontent_props });
    binding_callbacks.push(function () { return bind(passwordinfocontent, 'displayProfile', passwordinfocontent_displayProfile_binding); });
    binding_callbacks.push(function () { return bind(passwordinfocontent, 'profileLoader', passwordinfocontent_profileLoader_binding); });
    binding_callbacks.push(function () { return bind(passwordinfocontent, 'member', passwordinfocontent_member_binding); });
    return {
        c: function () {
            create_component(passwordinfocontent.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(passwordinfocontent, target, anchor);
            current = true;
        },
        p: function (ctx, dirty) {
            var passwordinfocontent_changes = {};
            if (!updating_displayProfile && dirty & /*displayProfile*/ 1) {
                updating_displayProfile = true;
                passwordinfocontent_changes.displayProfile = /*displayProfile*/ ctx[0];
                add_flush_callback(function () { return updating_displayProfile = false; });
            }
            if (!updating_profileLoader && dirty & /*profileLoader*/ 32) {
                updating_profileLoader = true;
                passwordinfocontent_changes.profileLoader = /*profileLoader*/ ctx[5];
                add_flush_callback(function () { return updating_profileLoader = false; });
            }
            if (!updating_member && dirty & /*member*/ 2) {
                updating_member = true;
                passwordinfocontent_changes.member = /*member*/ ctx[1];
                add_flush_callback(function () { return updating_member = false; });
            }
            passwordinfocontent.$set(passwordinfocontent_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(passwordinfocontent.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(passwordinfocontent.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(passwordinfocontent, detaching);
        }
    };
}
// (55:46) 
function create_if_block_1$4(ctx) {
    var securityinfocontent;
    var updating_displayProfile;
    var updating_profileLoader;
    var updating_member;
    var current;
    function securityinfocontent_displayProfile_binding(value) {
        /*securityinfocontent_displayProfile_binding*/ ctx[12](value);
    }
    function securityinfocontent_profileLoader_binding(value) {
        /*securityinfocontent_profileLoader_binding*/ ctx[13](value);
    }
    function securityinfocontent_member_binding(value) {
        /*securityinfocontent_member_binding*/ ctx[14](value);
    }
    var securityinfocontent_props = {};
    if ( /*displayProfile*/ctx[0] !== void 0) {
        securityinfocontent_props.displayProfile = /*displayProfile*/ ctx[0];
    }
    if ( /*profileLoader*/ctx[5] !== void 0) {
        securityinfocontent_props.profileLoader = /*profileLoader*/ ctx[5];
    }
    if ( /*member*/ctx[1] !== void 0) {
        securityinfocontent_props.member = /*member*/ ctx[1];
    }
    securityinfocontent = new SecurityInfoContent({ props: securityinfocontent_props });
    binding_callbacks.push(function () { return bind(securityinfocontent, 'displayProfile', securityinfocontent_displayProfile_binding); });
    binding_callbacks.push(function () { return bind(securityinfocontent, 'profileLoader', securityinfocontent_profileLoader_binding); });
    binding_callbacks.push(function () { return bind(securityinfocontent, 'member', securityinfocontent_member_binding); });
    return {
        c: function () {
            create_component(securityinfocontent.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(securityinfocontent, target, anchor);
            current = true;
        },
        p: function (ctx, dirty) {
            var securityinfocontent_changes = {};
            if (!updating_displayProfile && dirty & /*displayProfile*/ 1) {
                updating_displayProfile = true;
                securityinfocontent_changes.displayProfile = /*displayProfile*/ ctx[0];
                add_flush_callback(function () { return updating_displayProfile = false; });
            }
            if (!updating_profileLoader && dirty & /*profileLoader*/ 32) {
                updating_profileLoader = true;
                securityinfocontent_changes.profileLoader = /*profileLoader*/ ctx[5];
                add_flush_callback(function () { return updating_profileLoader = false; });
            }
            if (!updating_member && dirty & /*member*/ 2) {
                updating_member = true;
                securityinfocontent_changes.member = /*member*/ ctx[1];
                add_flush_callback(function () { return updating_member = false; });
            }
            securityinfocontent.$set(securityinfocontent_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(securityinfocontent.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(securityinfocontent.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(securityinfocontent, detaching);
        }
    };
}
// (49:6) {#if displayProfile === "profile"}
function create_if_block$6(ctx) {
    var profileinfocontent;
    var updating_member;
    var updating_profileLoader;
    var current;
    function profileinfocontent_member_binding(value) {
        /*profileinfocontent_member_binding*/ ctx[10](value);
    }
    function profileinfocontent_profileLoader_binding(value) {
        /*profileinfocontent_profileLoader_binding*/ ctx[11](value);
    }
    var profileinfocontent_props = {
        customFields: /*$app*/ ctx[6].customFields
    };
    if ( /*member*/ctx[1] !== void 0) {
        profileinfocontent_props.member = /*member*/ ctx[1];
    }
    if ( /*profileLoader*/ctx[5] !== void 0) {
        profileinfocontent_props.profileLoader = /*profileLoader*/ ctx[5];
    }
    profileinfocontent = new ProfileInfoContent({ props: profileinfocontent_props });
    binding_callbacks.push(function () { return bind(profileinfocontent, 'member', profileinfocontent_member_binding); });
    binding_callbacks.push(function () { return bind(profileinfocontent, 'profileLoader', profileinfocontent_profileLoader_binding); });
    return {
        c: function () {
            create_component(profileinfocontent.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(profileinfocontent, target, anchor);
            current = true;
        },
        p: function (ctx, dirty) {
            var profileinfocontent_changes = {};
            if (dirty & /*$app*/ 64)
                profileinfocontent_changes.customFields = /*$app*/ ctx[6].customFields;
            if (!updating_member && dirty & /*member*/ 2) {
                updating_member = true;
                profileinfocontent_changes.member = /*member*/ ctx[1];
                add_flush_callback(function () { return updating_member = false; });
            }
            if (!updating_profileLoader && dirty & /*profileLoader*/ 32) {
                updating_profileLoader = true;
                profileinfocontent_changes.profileLoader = /*profileLoader*/ ctx[5];
                add_flush_callback(function () { return updating_profileLoader = false; });
            }
            profileinfocontent.$set(profileinfocontent_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(profileinfocontent.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(profileinfocontent.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(profileinfocontent, detaching);
        }
    };
}
function create_fragment$7(ctx) {
    var div5;
    var div1;
    var div0;
    var t0_value = /*member*/ ctx[1].auth.email + "";
    var t0;
    var t1;
    var closebutton;
    var t2;
    var div4;
    var div2;
    var profilemodalnav;
    var updating_member;
    var updating_displayProfile;
    var updating_profileLoader;
    var t3;
    var div3;
    var t4;
    var current_block_type_index;
    var if_block1;
    var t5;
    var modalfooter;
    var current;
    closebutton = new CloseButton({
        props: { closeModal: /*closeModal*/ ctx[3] }
    });
    function profilemodalnav_member_binding(value) {
        /*profilemodalnav_member_binding*/ ctx[7](value);
    }
    function profilemodalnav_displayProfile_binding(value) {
        /*profilemodalnav_displayProfile_binding*/ ctx[8](value);
    }
    function profilemodalnav_profileLoader_binding(value) {
        /*profilemodalnav_profileLoader_binding*/ ctx[9](value);
    }
    var profilemodalnav_props = {
        onSuccessLogout: /*onSuccessLogout*/ ctx[2],
        hideProfileSection: /*hideProfileSection*/ ctx[4]
    };
    if ( /*member*/ctx[1] !== void 0) {
        profilemodalnav_props.member = /*member*/ ctx[1];
    }
    if ( /*displayProfile*/ctx[0] !== void 0) {
        profilemodalnav_props.displayProfile = /*displayProfile*/ ctx[0];
    }
    if ( /*profileLoader*/ctx[5] !== void 0) {
        profilemodalnav_props.profileLoader = /*profileLoader*/ ctx[5];
    }
    profilemodalnav = new ProfileModalNav({ props: profilemodalnav_props });
    binding_callbacks.push(function () { return bind(profilemodalnav, 'member', profilemodalnav_member_binding); });
    binding_callbacks.push(function () { return bind(profilemodalnav, 'displayProfile', profilemodalnav_displayProfile_binding); });
    binding_callbacks.push(function () { return bind(profilemodalnav, 'profileLoader', profilemodalnav_profileLoader_binding); });
    var if_block0 = /*profileLoader*/ ctx[5] && create_if_block_4$2();
    var if_block_creators = [create_if_block$6, create_if_block_1$4, create_if_block_2$3, create_if_block_3$2];
    var if_blocks = [];
    function select_block_type(ctx, dirty) {
        if ( /*displayProfile*/ctx[0] === "profile")
            return 0;
        if ( /*displayProfile*/ctx[0] === "security")
            return 1;
        if ( /*displayProfile*/ctx[0] === "changePassword")
            return 2;
        if ( /*displayProfile*/ctx[0] === "plans")
            return 3;
        return -1;
    }
    if (~(current_block_type_index = select_block_type(ctx))) {
        if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    }
    modalfooter = new ModalFooter({});
    return {
        c: function () {
            div5 = element("div");
            div1 = element("div");
            div0 = element("div");
            t0 = text(t0_value);
            t1 = space();
            create_component(closebutton.$$.fragment);
            t2 = space();
            div4 = element("div");
            div2 = element("div");
            create_component(profilemodalnav.$$.fragment);
            t3 = space();
            div3 = element("div");
            if (if_block0)
                if_block0.c();
            t4 = space();
            if (if_block1)
                if_block1.c();
            t5 = space();
            create_component(modalfooter.$$.fragment);
            attr(div1, "class", "ms-modal__header");
            attr(div2, "class", "ms-modal__content-left");
            attr(div3, "class", "ms-modal__content-right");
            attr(div4, "class", "ms-modal__content ms-modal__content--profile");
            attr(div5, "class", "ms-modal ms-modal--profile");
            attr(div5, "id", "ProfileModal");
        },
        m: function (target, anchor) {
            insert(target, div5, anchor);
            append(div5, div1);
            append(div1, div0);
            append(div0, t0);
            append(div1, t1);
            mount_component(closebutton, div1, null);
            append(div5, t2);
            append(div5, div4);
            append(div4, div2);
            mount_component(profilemodalnav, div2, null);
            append(div4, t3);
            append(div4, div3);
            if (if_block0)
                if_block0.m(div3, null);
            append(div3, t4);
            if (~current_block_type_index) {
                if_blocks[current_block_type_index].m(div3, null);
            }
            append(div5, t5);
            mount_component(modalfooter, div5, null);
            current = true;
        },
        p: function (ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if ((!current || dirty & /*member*/ 2) && t0_value !== (t0_value = /*member*/ ctx[1].auth.email + ""))
                set_data(t0, t0_value);
            var closebutton_changes = {};
            if (dirty & /*closeModal*/ 8)
                closebutton_changes.closeModal = /*closeModal*/ ctx[3];
            closebutton.$set(closebutton_changes);
            var profilemodalnav_changes = {};
            if (dirty & /*onSuccessLogout*/ 4)
                profilemodalnav_changes.onSuccessLogout = /*onSuccessLogout*/ ctx[2];
            if (dirty & /*hideProfileSection*/ 16)
                profilemodalnav_changes.hideProfileSection = /*hideProfileSection*/ ctx[4];
            if (!updating_member && dirty & /*member*/ 2) {
                updating_member = true;
                profilemodalnav_changes.member = /*member*/ ctx[1];
                add_flush_callback(function () { return updating_member = false; });
            }
            if (!updating_displayProfile && dirty & /*displayProfile*/ 1) {
                updating_displayProfile = true;
                profilemodalnav_changes.displayProfile = /*displayProfile*/ ctx[0];
                add_flush_callback(function () { return updating_displayProfile = false; });
            }
            if (!updating_profileLoader && dirty & /*profileLoader*/ 32) {
                updating_profileLoader = true;
                profilemodalnav_changes.profileLoader = /*profileLoader*/ ctx[5];
                add_flush_callback(function () { return updating_profileLoader = false; });
            }
            profilemodalnav.$set(profilemodalnav_changes);
            if ( /*profileLoader*/ctx[5]) {
                if (if_block0) {
                    if (dirty & /*profileLoader*/ 32) {
                        transition_in(if_block0, 1);
                    }
                }
                else {
                    if_block0 = create_if_block_4$2();
                    if_block0.c();
                    transition_in(if_block0, 1);
                    if_block0.m(div3, t4);
                }
            }
            else if (if_block0) {
                group_outros();
                transition_out(if_block0, 1, 1, function () {
                    if_block0 = null;
                });
                check_outros();
            }
            var previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx);
            if (current_block_type_index === previous_block_index) {
                if (~current_block_type_index) {
                    if_blocks[current_block_type_index].p(ctx, dirty);
                }
            }
            else {
                if (if_block1) {
                    group_outros();
                    transition_out(if_blocks[previous_block_index], 1, 1, function () {
                        if_blocks[previous_block_index] = null;
                    });
                    check_outros();
                }
                if (~current_block_type_index) {
                    if_block1 = if_blocks[current_block_type_index];
                    if (!if_block1) {
                        if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
                        if_block1.c();
                    }
                    else {
                        if_block1.p(ctx, dirty);
                    }
                    transition_in(if_block1, 1);
                    if_block1.m(div3, null);
                }
                else {
                    if_block1 = null;
                }
            }
        },
        i: function (local) {
            if (current)
                return;
            transition_in(closebutton.$$.fragment, local);
            transition_in(profilemodalnav.$$.fragment, local);
            transition_in(if_block0);
            transition_in(if_block1);
            transition_in(modalfooter.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(closebutton.$$.fragment, local);
            transition_out(profilemodalnav.$$.fragment, local);
            transition_out(if_block0);
            transition_out(if_block1);
            transition_out(modalfooter.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div5);
            destroy_component(closebutton);
            destroy_component(profilemodalnav);
            if (if_block0)
                if_block0.d();
            if (~current_block_type_index) {
                if_blocks[current_block_type_index].d();
            }
            destroy_component(modalfooter);
        }
    };
}
function instance$6($$self, $$props, $$invalidate) {
    var $app;
    component_subscribe($$self, AppStore, function ($$value) { return $$invalidate(6, $app = $$value); });
    var onSuccessLogout = $$props.onSuccessLogout;
    var closeModal = $$props.closeModal;
    var _a = $$props.displayProfile, displayProfile = _a === void 0 ? "profile" : _a;
    var member = $$props.member;
    var hideProfileSection = false;
    var profileLoader = false;
    if (!$app.customFields.filter(function (field) { return !field.hidden; }).length) {
        displayProfile = "security";
        hideProfileSection = true;
    }
    function profilemodalnav_member_binding(value) {
        member = value;
        $$invalidate(1, member);
    }
    function profilemodalnav_displayProfile_binding(value) {
        displayProfile = value;
        $$invalidate(0, displayProfile);
    }
    function profilemodalnav_profileLoader_binding(value) {
        profileLoader = value;
        $$invalidate(5, profileLoader);
    }
    function profileinfocontent_member_binding(value) {
        member = value;
        $$invalidate(1, member);
    }
    function profileinfocontent_profileLoader_binding(value) {
        profileLoader = value;
        $$invalidate(5, profileLoader);
    }
    function securityinfocontent_displayProfile_binding(value) {
        displayProfile = value;
        $$invalidate(0, displayProfile);
    }
    function securityinfocontent_profileLoader_binding(value) {
        profileLoader = value;
        $$invalidate(5, profileLoader);
    }
    function securityinfocontent_member_binding(value) {
        member = value;
        $$invalidate(1, member);
    }
    function passwordinfocontent_displayProfile_binding(value) {
        displayProfile = value;
        $$invalidate(0, displayProfile);
    }
    function passwordinfocontent_profileLoader_binding(value) {
        profileLoader = value;
        $$invalidate(5, profileLoader);
    }
    function passwordinfocontent_member_binding(value) {
        member = value;
        $$invalidate(1, member);
    }
    function plansinfocontent_member_binding(value) {
        member = value;
        $$invalidate(1, member);
    }
    function plansinfocontent_profileLoader_binding(value) {
        profileLoader = value;
        $$invalidate(5, profileLoader);
    }
    $$self.$$set = function ($$props) {
        if ('onSuccessLogout' in $$props)
            $$invalidate(2, onSuccessLogout = $$props.onSuccessLogout);
        if ('closeModal' in $$props)
            $$invalidate(3, closeModal = $$props.closeModal);
        if ('displayProfile' in $$props)
            $$invalidate(0, displayProfile = $$props.displayProfile);
        if ('member' in $$props)
            $$invalidate(1, member = $$props.member);
    };
    return [
        displayProfile,
        member,
        onSuccessLogout,
        closeModal,
        hideProfileSection,
        profileLoader,
        $app,
        profilemodalnav_member_binding,
        profilemodalnav_displayProfile_binding,
        profilemodalnav_profileLoader_binding,
        profileinfocontent_member_binding,
        profileinfocontent_profileLoader_binding,
        securityinfocontent_displayProfile_binding,
        securityinfocontent_profileLoader_binding,
        securityinfocontent_member_binding,
        passwordinfocontent_displayProfile_binding,
        passwordinfocontent_profileLoader_binding,
        passwordinfocontent_member_binding,
        plansinfocontent_member_binding,
        plansinfocontent_profileLoader_binding
    ];
}
var ProfileModal = /** @class */ (function (_super) {
    __extends(ProfileModal, _super);
    function ProfileModal(options) {
        var _this = _super.call(this) || this;
        init(_this, options, instance$6, create_fragment$7, safe_not_equal, {
            onSuccessLogout: 2,
            closeModal: 3,
            displayProfile: 0,
            member: 1
        });
        return _this;
    }
    return ProfileModal;
}(SvelteComponent));
/* src/icons/ForwardIcon.svelte generated by Svelte v3.48.0 */
function create_fragment$6(ctx) {
    var svg;
    var path;
    return {
        c: function () {
            svg = svg_element("svg");
            path = svg_element("path");
            attr(path, "fill", "currentColor");
            attr(path, "d", "M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z");
            attr(svg, "fill", "none");
            attr(svg, "transform", "rotate(180)");
            attr(svg, "viewBox", "0 0 8 12");
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
        },
        m: function (target, anchor) {
            insert(target, svg, anchor);
            append(svg, path);
        },
        p: noop,
        i: noop,
        o: noop,
        d: function (detaching) {
            if (detaching)
                detach(svg);
        }
    };
}
var ForwardIcon = /** @class */ (function (_super) {
    __extends(ForwardIcon, _super);
    function ForwardIcon(options) {
        var _this = _super.call(this) || this;
        init(_this, options, null, create_fragment$6, safe_not_equal, {});
        return _this;
    }
    return ForwardIcon;
}(SvelteComponent));
/* src/components/MobileProfileModalNav.svelte generated by Svelte v3.48.0 */
function create_if_block_1$3(ctx) {
    var button;
    var div;
    var profileicon;
    var t0;
    var t1;
    var forwardicon;
    var current;
    var mounted;
    var dispose;
    profileicon = new ProfileIcon({});
    forwardicon = new ForwardIcon({});
    return {
        c: function () {
            button = element("button");
            div = element("div");
            create_component(profileicon.$$.fragment);
            t0 = text(" Profile");
            t1 = space();
            create_component(forwardicon.$$.fragment);
            attr(button, "class", "ms-modal__profile-option");
            toggle_class(button, "ms-modal__profile-option--active", /*displayProfile*/ ctx[0] === "profile");
        },
        m: function (target, anchor) {
            insert(target, button, anchor);
            append(button, div);
            mount_component(profileicon, div, null);
            append(div, t0);
            append(button, t1);
            mount_component(forwardicon, button, null);
            current = true;
            if (!mounted) {
                dispose = listen(button, "click", /*click_handler*/ ctx[7]);
                mounted = true;
            }
        },
        p: function (ctx, dirty) {
            if (dirty & /*displayProfile*/ 1) {
                toggle_class(button, "ms-modal__profile-option--active", /*displayProfile*/ ctx[0] === "profile");
            }
        },
        i: function (local) {
            if (current)
                return;
            transition_in(profileicon.$$.fragment, local);
            transition_in(forwardicon.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(profileicon.$$.fragment, local);
            transition_out(forwardicon.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(button);
            destroy_component(profileicon);
            destroy_component(forwardicon);
            mounted = false;
            dispose();
        }
    };
}
// (80:2) {#if member.stripeCustomerId}
function create_if_block$5(ctx) {
    var button;
    var div;
    var linkouticon;
    var t0;
    var t1;
    var forwardicon;
    var current;
    var mounted;
    var dispose;
    linkouticon = new LinkOutIcon({});
    forwardicon = new ForwardIcon({});
    return {
        c: function () {
            button = element("button");
            div = element("div");
            create_component(linkouticon.$$.fragment);
            t0 = text(" Billing Portal");
            t1 = space();
            create_component(forwardicon.$$.fragment);
            attr(button, "class", "ms-modal__profile-option");
        },
        m: function (target, anchor) {
            insert(target, button, anchor);
            append(button, div);
            mount_component(linkouticon, div, null);
            append(div, t0);
            append(button, t1);
            mount_component(forwardicon, button, null);
            current = true;
            if (!mounted) {
                dispose = listen(button, "click", /*launchPortal*/ ctx[4]);
                mounted = true;
            }
        },
        p: noop,
        i: function (local) {
            if (current)
                return;
            transition_in(linkouticon.$$.fragment, local);
            transition_in(forwardicon.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(linkouticon.$$.fragment, local);
            transition_out(forwardicon.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(button);
            destroy_component(linkouticon);
            destroy_component(forwardicon);
            mounted = false;
            dispose();
        }
    };
}
function create_fragment$5(ctx) {
    var div2;
    var t0;
    var button0;
    var div0;
    var securityicon;
    var t1;
    var t2;
    var forwardicon0;
    var t3;
    var t4;
    var button1;
    var div1;
    var logouticon;
    var t5;
    var t6;
    var forwardicon1;
    var current;
    var mounted;
    var dispose;
    var if_block0 = !ctx[2] && create_if_block_1$3(ctx);
    securityicon = new SecurityIcon({});
    forwardicon0 = new ForwardIcon({});
    var if_block1 = /*member*/ ctx[1].stripeCustomerId && create_if_block$5(ctx);
    logouticon = new LogoutIcon({});
    forwardicon1 = new ForwardIcon({});
    return {
        c: function () {
            div2 = element("div");
            if (if_block0)
                if_block0.c();
            t0 = space();
            button0 = element("button");
            div0 = element("div");
            create_component(securityicon.$$.fragment);
            t1 = text(" Security");
            t2 = space();
            create_component(forwardicon0.$$.fragment);
            t3 = space();
            if (if_block1)
                if_block1.c();
            t4 = space();
            button1 = element("button");
            div1 = element("div");
            create_component(logouticon.$$.fragment);
            t5 = text(" Logout");
            t6 = space();
            create_component(forwardicon1.$$.fragment);
            attr(button0, "class", "ms-modal__profile-option");
            toggle_class(button0, "ms-modal__profile-option--active", /*displayProfile*/ ctx[0] === "security" || /*displayProfile*/ ctx[0] === "changePassword");
            attr(button1, "class", "ms-modal__profile-option");
            attr(div2, "class", "ms-modal__mobile-profile-nav");
        },
        m: function (target, anchor) {
            insert(target, div2, anchor);
            if (if_block0)
                if_block0.m(div2, null);
            append(div2, t0);
            append(div2, button0);
            append(button0, div0);
            mount_component(securityicon, div0, null);
            append(div0, t1);
            append(button0, t2);
            mount_component(forwardicon0, button0, null);
            append(div2, t3);
            if (if_block1)
                if_block1.m(div2, null);
            append(div2, t4);
            append(div2, button1);
            append(button1, div1);
            mount_component(logouticon, div1, null);
            append(div1, t5);
            append(button1, t6);
            mount_component(forwardicon1, button1, null);
            current = true;
            if (!mounted) {
                dispose = [
                    listen(button0, "click", /*click_handler_1*/ ctx[8]),
                    listen(button1, "click", /*logout*/ ctx[3])
                ];
                mounted = true;
            }
        },
        p: function (ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if (!ctx[2]) {
                if (if_block0) {
                    if_block0.p(ctx, dirty);
                    if (dirty & /*hideProfileSection*/ 4) {
                        transition_in(if_block0, 1);
                    }
                }
                else {
                    if_block0 = create_if_block_1$3(ctx);
                    if_block0.c();
                    transition_in(if_block0, 1);
                    if_block0.m(div2, t0);
                }
            }
            else if (if_block0) {
                group_outros();
                transition_out(if_block0, 1, 1, function () {
                    if_block0 = null;
                });
                check_outros();
            }
            if (dirty & /*displayProfile*/ 1) {
                toggle_class(button0, "ms-modal__profile-option--active", /*displayProfile*/ ctx[0] === "security" || /*displayProfile*/ ctx[0] === "changePassword");
            }
            if ( /*member*/ctx[1].stripeCustomerId) {
                if (if_block1) {
                    if_block1.p(ctx, dirty);
                    if (dirty & /*member*/ 2) {
                        transition_in(if_block1, 1);
                    }
                }
                else {
                    if_block1 = create_if_block$5(ctx);
                    if_block1.c();
                    transition_in(if_block1, 1);
                    if_block1.m(div2, t4);
                }
            }
            else if (if_block1) {
                group_outros();
                transition_out(if_block1, 1, 1, function () {
                    if_block1 = null;
                });
                check_outros();
            }
        },
        i: function (local) {
            if (current)
                return;
            transition_in(if_block0);
            transition_in(securityicon.$$.fragment, local);
            transition_in(forwardicon0.$$.fragment, local);
            transition_in(if_block1);
            transition_in(logouticon.$$.fragment, local);
            transition_in(forwardicon1.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(if_block0);
            transition_out(securityicon.$$.fragment, local);
            transition_out(forwardicon0.$$.fragment, local);
            transition_out(if_block1);
            transition_out(logouticon.$$.fragment, local);
            transition_out(forwardicon1.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div2);
            if (if_block0)
                if_block0.d();
            destroy_component(securityicon);
            destroy_component(forwardicon0);
            if (if_block1)
                if_block1.d();
            destroy_component(logouticon);
            destroy_component(forwardicon1);
            mounted = false;
            run_all(dispose);
        }
    };
}
function instance$5($$self, $$props, $$invalidate) {
    var member = $$props.member;
    var onSuccessLogout = $$props.onSuccessLogout;
    var displayProfile = $$props.displayProfile;
    var profileLoader = $$props.profileLoader;
    var hideProfileSection = $$props.hideProfileSection;
    var unsubscribe = AppStore.subscribe(function (data) {
        if (!data.initialValue) {
            var container = document.getElementById("msOverlay");
            var css = document.createElement("style");
            var color = data.branding.colors.lightMode.primaryButton;
            var fullCSS = ".ms-modal__profile-option:hover { color: ".concat(color, ";} .ms-modal__profile-option--active { color: ").concat(color, ";} .ms-modal__save-button { background: ").concat(color, ";} .ms-modal__save-button:disabled { background: ").concat(color, ";}");
            css.appendChild(document.createTextNode(fullCSS));
            container.appendChild(css);
        }
    });
    onDestroy(function () {
        unsubscribe();
    });
    function logout(e) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, message, err_19;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, window.$memberstackDom.logout()];
                    case 1:
                        _a = _b.sent(), data = _a.data, message = _a._internalUseOnly.message;
                        window.$memberstackDom._showMessage(message, false);
                        onSuccessLogout({ type: "LOGOUT", data: data });
                        return [3 /*break*/, 3];
                    case 2:
                        err_19 = _b.sent();
                        window.$memberstackDom._showMessage(err_19.message, true);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function launchPortal(e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        $$invalidate(5, profileLoader = true);
                        return [4 /*yield*/, window.$memberstackDom.launchStripeCustomerPortal({ priceIds: [], autoRedirect: true })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    var click_handler = function () { return $$invalidate(0, displayProfile = "profile"); };
    var click_handler_1 = function () { return $$invalidate(0, displayProfile = "security"); };
    $$self.$$set = function ($$props) {
        if ('member' in $$props)
            $$invalidate(1, member = $$props.member);
        if ('onSuccessLogout' in $$props)
            $$invalidate(6, onSuccessLogout = $$props.onSuccessLogout);
        if ('displayProfile' in $$props)
            $$invalidate(0, displayProfile = $$props.displayProfile);
        if ('profileLoader' in $$props)
            $$invalidate(5, profileLoader = $$props.profileLoader);
        if ('hideProfileSection' in $$props)
            $$invalidate(2, hideProfileSection = $$props.hideProfileSection);
    };
    return [
        displayProfile,
        member,
        hideProfileSection,
        logout,
        launchPortal,
        profileLoader,
        onSuccessLogout,
        click_handler,
        click_handler_1
    ];
}
var MobileProfileModalNav = /** @class */ (function (_super) {
    __extends(MobileProfileModalNav, _super);
    function MobileProfileModalNav(options) {
        var _this = _super.call(this) || this;
        init(_this, options, instance$5, create_fragment$5, safe_not_equal, {
            member: 1,
            onSuccessLogout: 6,
            displayProfile: 0,
            profileLoader: 5,
            hideProfileSection: 2
        });
        return _this;
    }
    return MobileProfileModalNav;
}(SvelteComponent));
/* src/components/MobileProfileInfoContent.svelte generated by Svelte v3.48.0 */
function get_each_context$1(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[5] = list[i];
    child_ctx[6] = list;
    child_ctx[7] = i;
    return child_ctx;
}
// (18:1) {#if customField.hidden !== true}
function create_if_block$4(ctx) {
    var div1;
    var div0;
    var label;
    var t0_value = /*customField*/ ctx[5].label + "";
    var t0;
    var label_for_value;
    var t1;
    var input;
    var input_placeholder_value;
    var input_name_value;
    var t2;
    var mounted;
    var dispose;
    function input_input_handler() {
        /*input_input_handler*/ ctx[4].call(input, /*customField*/ ctx[5]);
    }
    return {
        c: function () {
            div1 = element("div");
            div0 = element("div");
            label = element("label");
            t0 = text(t0_value);
            t1 = space();
            input = element("input");
            t2 = space();
            attr(label, "class", "ms-form__label");
            attr(label, "for", label_for_value = /*customField*/ ctx[5].key);
            attr(input, "class", "ms-form__input");
            attr(input, "type", "text");
            attr(input, "placeholder", input_placeholder_value = /*customField*/ ctx[5].label);
            attr(input, "name", input_name_value = /*customField*/ ctx[5].key);
            attr(div0, "class", "ms-form__group");
            attr(div1, "class", "ms-modal__custom-field-container");
        },
        m: function (target, anchor) {
            insert(target, div1, anchor);
            append(div1, div0);
            append(div0, label);
            append(label, t0);
            append(div0, t1);
            append(div0, input);
            set_input_value(input, /*member*/ ctx[0].customFields[ /*customField*/ctx[5].key]);
            append(div1, t2);
            if (!mounted) {
                dispose = listen(input, "input", input_input_handler);
                mounted = true;
            }
        },
        p: function (new_ctx, dirty) {
            ctx = new_ctx;
            if (dirty & /*customFields*/ 2 && t0_value !== (t0_value = /*customField*/ ctx[5].label + ""))
                set_data(t0, t0_value);
            if (dirty & /*customFields*/ 2 && label_for_value !== (label_for_value = /*customField*/ ctx[5].key)) {
                attr(label, "for", label_for_value);
            }
            if (dirty & /*customFields*/ 2 && input_placeholder_value !== (input_placeholder_value = /*customField*/ ctx[5].label)) {
                attr(input, "placeholder", input_placeholder_value);
            }
            if (dirty & /*customFields*/ 2 && input_name_value !== (input_name_value = /*customField*/ ctx[5].key)) {
                attr(input, "name", input_name_value);
            }
            if (dirty & /*member, customFields*/ 3 && input.value !== /*member*/ ctx[0].customFields[ /*customField*/ctx[5].key]) {
                set_input_value(input, /*member*/ ctx[0].customFields[ /*customField*/ctx[5].key]);
            }
        },
        d: function (detaching) {
            if (detaching)
                detach(div1);
            mounted = false;
            dispose();
        }
    };
}
// (17:0) {#each customFields as customField, i}
function create_each_block$1(ctx) {
    var if_block_anchor;
    var if_block = /*customField*/ ctx[5].hidden !== true && create_if_block$4(ctx);
    return {
        c: function () {
            if (if_block)
                if_block.c();
            if_block_anchor = empty();
        },
        m: function (target, anchor) {
            if (if_block)
                if_block.m(target, anchor);
            insert(target, if_block_anchor, anchor);
        },
        p: function (ctx, dirty) {
            if ( /*customField*/ctx[5].hidden !== true) {
                if (if_block) {
                    if_block.p(ctx, dirty);
                }
                else {
                    if_block = create_if_block$4(ctx);
                    if_block.c();
                    if_block.m(if_block_anchor.parentNode, if_block_anchor);
                }
            }
            else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
        },
        d: function (detaching) {
            if (if_block)
                if_block.d(detaching);
            if (detaching)
                detach(if_block_anchor);
        }
    };
}
function create_fragment$4(ctx) {
    var form;
    var t0;
    var div;
    var button;
    var mounted;
    var dispose;
    var each_value = /*customFields*/ ctx[1];
    var each_blocks = [];
    for (var i = 0; i < each_value.length; i += 1) {
        each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
    }
    return {
        c: function () {
            form = element("form");
            for (var i = 0; i < each_blocks.length; i += 1) {
                each_blocks[i].c();
            }
            t0 = space();
            div = element("div");
            button = element("button");
            button.textContent = "Save";
            attr(form, "class", "ms-form");
            attr(form, "action", "");
            attr(form, "method", "post");
            attr(form, "autocomplete", "off");
            attr(button, "class", "ms-modal__save-button ms-modal__save-button--large");
            attr(div, "class", "ms-modal__action-container");
        },
        m: function (target, anchor) {
            insert(target, form, anchor);
            for (var i = 0; i < each_blocks.length; i += 1) {
                each_blocks[i].m(form, null);
            }
            insert(target, t0, anchor);
            insert(target, div, anchor);
            append(div, button);
            if (!mounted) {
                dispose = [
                    listen(form, "submit", stop_propagation(prevent_default(/*saveProfile*/ ctx[2]))),
                    listen(button, "click", /*saveProfile*/ ctx[2])
                ];
                mounted = true;
            }
        },
        p: function (ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if (dirty & /*customFields, member*/ 3) {
                each_value = /*customFields*/ ctx[1];
                var i = void 0;
                for (i = 0; i < each_value.length; i += 1) {
                    var child_ctx = get_each_context$1(ctx, each_value, i);
                    if (each_blocks[i]) {
                        each_blocks[i].p(child_ctx, dirty);
                    }
                    else {
                        each_blocks[i] = create_each_block$1(child_ctx);
                        each_blocks[i].c();
                        each_blocks[i].m(form, null);
                    }
                }
                for (; i < each_blocks.length; i += 1) {
                    each_blocks[i].d(1);
                }
                each_blocks.length = each_value.length;
            }
        },
        i: noop,
        o: noop,
        d: function (detaching) {
            if (detaching)
                detach(form);
            destroy_each(each_blocks, detaching);
            if (detaching)
                detach(t0);
            if (detaching)
                detach(div);
            mounted = false;
            run_all(dispose);
        }
    };
}
function instance$4($$self, $$props, $$invalidate) {
    var customFields = $$props.customFields;
    var member = $$props.member;
    var profileLoader = $$props.profileLoader;
    function saveProfile(e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        $$invalidate(3, profileLoader = true);
                        return [4 /*yield*/, window.$memberstackDom.updateMember({ customFields: member.customFields })];
                    case 1:
                        _a.sent();
                        $$invalidate(3, profileLoader = false);
                        return [2 /*return*/];
                }
            });
        });
    }
    function input_input_handler(customField) {
        member.customFields[customField.key] = this.value;
        $$invalidate(0, member);
    }
    $$self.$$set = function ($$props) {
        if ('customFields' in $$props)
            $$invalidate(1, customFields = $$props.customFields);
        if ('member' in $$props)
            $$invalidate(0, member = $$props.member);
        if ('profileLoader' in $$props)
            $$invalidate(3, profileLoader = $$props.profileLoader);
    };
    return [member, customFields, saveProfile, profileLoader, input_input_handler];
}
var MobileProfileInfoContent = /** @class */ (function (_super) {
    __extends(MobileProfileInfoContent, _super);
    function MobileProfileInfoContent(options) {
        var _this = _super.call(this) || this;
        init(_this, options, instance$4, create_fragment$4, safe_not_equal, {
            customFields: 1,
            member: 0,
            profileLoader: 3
        });
        return _this;
    }
    return MobileProfileInfoContent;
}(SvelteComponent));
/* src/components/MobileSecurityInfoContent.svelte generated by Svelte v3.48.0 */
function get_each_context(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[16] = list[i];
    return child_ctx;
}
// (90:69) {:else}
function create_else_block_1(ctx) {
    var t;
    return {
        c: function () {
            t = text("Change Password");
        },
        m: function (target, anchor) {
            insert(target, t, anchor);
        },
        d: function (detaching) {
            if (detaching)
                detach(t);
        }
    };
}
// (90:25) {#if !member.auth.hasPassword}
function create_if_block_2$2(ctx) {
    var t;
    return {
        c: function () {
            t = text("Set Password");
        },
        m: function (target, anchor) {
            insert(target, t, anchor);
        },
        d: function (detaching) {
            if (detaching)
                detach(t);
        }
    };
}
// (94:0) {#if $app.authProviders.length > 0}
function create_if_block$3(ctx) {
    var p;
    var t1;
    var div;
    var each_blocks = [];
    var each_1_lookup = new Map();
    var each_value = /*$app*/ ctx[4].authProviders;
    var get_key = function (ctx) { /*provider*/ return ctx[16].provider; };
    for (var i = 0; i < each_value.length; i += 1) {
        var child_ctx = get_each_context(ctx, each_value, i);
        var key = get_key(child_ctx);
        each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
    }
    return {
        c: function () {
            p = element("p");
            p.textContent = "Connect Additional Accounts";
            t1 = space();
            div = element("div");
            for (var i = 0; i < each_blocks.length; i += 1) {
                each_blocks[i].c();
            }
            attr(p, "class", "ms-form__label");
            attr(div, "class", "ms-modal__social");
        },
        m: function (target, anchor) {
            insert(target, p, anchor);
            insert(target, t1, anchor);
            insert(target, div, anchor);
            for (var i = 0; i < each_blocks.length; i += 1) {
                each_blocks[i].m(div, null);
            }
        },
        p: function (ctx, dirty) {
            if (dirty & /*disconnectProvider, $app, member, connectAdditionalProvider*/ 210) {
                each_value = /*$app*/ ctx[4].authProviders;
                each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div, destroy_block, create_each_block, null, get_each_context);
            }
        },
        d: function (detaching) {
            if (detaching)
                detach(p);
            if (detaching)
                detach(t1);
            if (detaching)
                detach(div);
            for (var i = 0; i < each_blocks.length; i += 1) {
                each_blocks[i].d();
            }
        }
    };
}
// (104:6) {:else}
function create_else_block$2(ctx) {
    var button;
    var img;
    var img_src_value;
    var img_alt_value;
    var t0;
    var span;
    var t1;
    var t2_value = /*provider*/ ctx[16].name + "";
    var t2;
    var mounted;
    var dispose;
    function click_handler_2() {
        return /*click_handler_2*/ ctx[14](/*provider*/ ctx[16]);
    }
    return {
        c: function () {
            button = element("button");
            img = element("img");
            t0 = space();
            span = element("span");
            t1 = text("Connect with ");
            t2 = text(t2_value);
            if (!src_url_equal(img.src, img_src_value = /*provider*/ ctx[16].icon))
                attr(img, "src", img_src_value);
            attr(img, "alt", img_alt_value = /*provider*/ ctx[16].name);
            attr(button, "class", "ms-modal__social-button");
            attr(button, "type", "button");
        },
        m: function (target, anchor) {
            insert(target, button, anchor);
            append(button, img);
            append(button, t0);
            append(button, span);
            append(span, t1);
            append(span, t2);
            if (!mounted) {
                dispose = listen(button, "click", click_handler_2);
                mounted = true;
            }
        },
        p: function (new_ctx, dirty) {
            ctx = new_ctx;
            if (dirty & /*$app*/ 16 && !src_url_equal(img.src, img_src_value = /*provider*/ ctx[16].icon)) {
                attr(img, "src", img_src_value);
            }
            if (dirty & /*$app*/ 16 && img_alt_value !== (img_alt_value = /*provider*/ ctx[16].name)) {
                attr(img, "alt", img_alt_value);
            }
            if (dirty & /*$app*/ 16 && t2_value !== (t2_value = /*provider*/ ctx[16].name + ""))
                set_data(t2, t2_value);
        },
        d: function (detaching) {
            if (detaching)
                detach(button);
            mounted = false;
            dispose();
        }
    };
}
// (99:6) {#if member.auth.providers.some((prv) => prv.provider === provider.provider)}
function create_if_block_1$2(ctx) {
    var button;
    var img;
    var img_src_value;
    var img_alt_value;
    var t0;
    var span;
    var t1;
    var t2_value = /*provider*/ ctx[16].name + "";
    var t2;
    var mounted;
    var dispose;
    function click_handler_1() {
        return /*click_handler_1*/ ctx[13](/*provider*/ ctx[16]);
    }
    return {
        c: function () {
            button = element("button");
            img = element("img");
            t0 = space();
            span = element("span");
            t1 = text("Disconnect ");
            t2 = text(t2_value);
            if (!src_url_equal(img.src, img_src_value = /*provider*/ ctx[16].icon))
                attr(img, "src", img_src_value);
            attr(img, "alt", img_alt_value = /*provider*/ ctx[16].name);
            attr(button, "class", "ms-modal__social-button");
            set_style(button, "background-color", "#F6F6F6");
            attr(button, "type", "button");
        },
        m: function (target, anchor) {
            insert(target, button, anchor);
            append(button, img);
            append(button, t0);
            append(button, span);
            append(span, t1);
            append(span, t2);
            if (!mounted) {
                dispose = listen(button, "click", click_handler_1);
                mounted = true;
            }
        },
        p: function (new_ctx, dirty) {
            ctx = new_ctx;
            if (dirty & /*$app*/ 16 && !src_url_equal(img.src, img_src_value = /*provider*/ ctx[16].icon)) {
                attr(img, "src", img_src_value);
            }
            if (dirty & /*$app*/ 16 && img_alt_value !== (img_alt_value = /*provider*/ ctx[16].name)) {
                attr(img, "alt", img_alt_value);
            }
            if (dirty & /*$app*/ 16 && t2_value !== (t2_value = /*provider*/ ctx[16].name + ""))
                set_data(t2, t2_value);
        },
        d: function (detaching) {
            if (detaching)
                detach(button);
            mounted = false;
            dispose();
        }
    };
}
// (97:2) {#each $app.authProviders as provider (provider.provider)}
function create_each_block(key_1, ctx) {
    var div;
    var show_if;
    var t;
    function func() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return /*func*/ ctx[9].apply(/*func*/ ctx, __spreadArray([/*provider*/ ctx[16]], __read(args), false));
    }
    function select_block_type_1(ctx, dirty) {
        if (dirty & /*member, $app*/ 18)
            show_if = null;
        if (show_if == null)
            show_if = !!ctx[1].auth.providers.some(func);
        if (show_if)
            return create_if_block_1$2;
        return create_else_block$2;
    }
    var current_block_type = select_block_type_1(ctx, -1);
    var if_block = current_block_type(ctx);
    return {
        key: key_1,
        first: null,
        c: function () {
            div = element("div");
            if_block.c();
            t = space();
            attr(div, "class", "ms-modal__social-buttons");
            this.first = div;
        },
        m: function (target, anchor) {
            insert(target, div, anchor);
            if_block.m(div, null);
            append(div, t);
        },
        p: function (new_ctx, dirty) {
            ctx = new_ctx;
            if (current_block_type === (current_block_type = select_block_type_1(ctx, dirty)) && if_block) {
                if_block.p(ctx, dirty);
            }
            else {
                if_block.d(1);
                if_block = current_block_type(ctx);
                if (if_block) {
                    if_block.c();
                    if_block.m(div, t);
                }
            }
        },
        d: function (detaching) {
            if (detaching)
                detach(div);
            if_block.d();
        }
    };
}
function create_fragment$3(ctx) {
    var form;
    var emailinput;
    var updating_emailInputValid;
    var updating_emailValue;
    var t0;
    var div0;
    var label;
    var t2;
    var button0;
    var passwordlockicon;
    var t3;
    var t4;
    var t5;
    var div1;
    var button1;
    var t6;
    var button1_disabled_value;
    var current;
    var mounted;
    var dispose;
    function emailinput_emailInputValid_binding(value) {
        /*emailinput_emailInputValid_binding*/ ctx[10](value);
    }
    function emailinput_emailValue_binding(value) {
        /*emailinput_emailValue_binding*/ ctx[11](value);
    }
    var emailinput_props = {};
    if ( /*emailInputValid*/ctx[3] !== void 0) {
        emailinput_props.emailInputValid = /*emailInputValid*/ ctx[3];
    }
    if ( /*emailValue*/ctx[2] !== void 0) {
        emailinput_props.emailValue = /*emailValue*/ ctx[2];
    }
    emailinput = new EmailInput({ props: emailinput_props });
    binding_callbacks.push(function () { return bind(emailinput, 'emailInputValid', emailinput_emailInputValid_binding); });
    binding_callbacks.push(function () { return bind(emailinput, 'emailValue', emailinput_emailValue_binding); });
    passwordlockicon = new PasswordLockIcon({});
    function select_block_type(ctx, dirty) {
        if (!ctx[1].auth.hasPassword)
            return create_if_block_2$2;
        return create_else_block_1;
    }
    var current_block_type = select_block_type(ctx);
    var if_block0 = current_block_type(ctx);
    var if_block1 = /*$app*/ ctx[4].authProviders.length > 0 && create_if_block$3(ctx);
    return {
        c: function () {
            form = element("form");
            create_component(emailinput.$$.fragment);
            t0 = space();
            div0 = element("div");
            label = element("label");
            label.textContent = "Password";
            t2 = space();
            button0 = element("button");
            create_component(passwordlockicon.$$.fragment);
            t3 = space();
            if_block0.c();
            t4 = space();
            if (if_block1)
                if_block1.c();
            t5 = space();
            div1 = element("div");
            button1 = element("button");
            t6 = text("Save");
            attr(form, "class", "ms-form");
            attr(form, "action", "");
            attr(form, "method", "post");
            attr(form, "autocomplete", "off");
            attr(label, "class", "ms-form__label");
            attr(label, "for", "setPassword");
            attr(button0, "class", "ms-modal__outline-button ms-modal__outline-button--mobile");
            attr(button0, "name", "setPassword");
            attr(div0, "class", "ms-form__group");
            attr(button1, "class", "ms-modal__save-button ms-modal__save-button--large");
            button1.disabled = button1_disabled_value = !ctx[3];
            attr(div1, "class", "ms-modal__action-container");
        },
        m: function (target, anchor) {
            insert(target, form, anchor);
            mount_component(emailinput, form, null);
            insert(target, t0, anchor);
            insert(target, div0, anchor);
            append(div0, label);
            append(div0, t2);
            append(div0, button0);
            mount_component(passwordlockicon, button0, null);
            append(button0, t3);
            if_block0.m(button0, null);
            insert(target, t4, anchor);
            if (if_block1)
                if_block1.m(target, anchor);
            insert(target, t5, anchor);
            insert(target, div1, anchor);
            append(div1, button1);
            append(button1, t6);
            current = true;
            if (!mounted) {
                dispose = [
                    listen(form, "submit", stop_propagation(prevent_default(/*submitEmailChange*/ ctx[5]))),
                    listen(button0, "click", /*click_handler*/ ctx[12]),
                    listen(button1, "click", /*submitEmailChange*/ ctx[5])
                ];
                mounted = true;
            }
        },
        p: function (ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            var emailinput_changes = {};
            if (!updating_emailInputValid && dirty & /*emailInputValid*/ 8) {
                updating_emailInputValid = true;
                emailinput_changes.emailInputValid = /*emailInputValid*/ ctx[3];
                add_flush_callback(function () { return updating_emailInputValid = false; });
            }
            if (!updating_emailValue && dirty & /*emailValue*/ 4) {
                updating_emailValue = true;
                emailinput_changes.emailValue = /*emailValue*/ ctx[2];
                add_flush_callback(function () { return updating_emailValue = false; });
            }
            emailinput.$set(emailinput_changes);
            if (current_block_type !== (current_block_type = select_block_type(ctx))) {
                if_block0.d(1);
                if_block0 = current_block_type(ctx);
                if (if_block0) {
                    if_block0.c();
                    if_block0.m(button0, null);
                }
            }
            if ( /*$app*/ctx[4].authProviders.length > 0) {
                if (if_block1) {
                    if_block1.p(ctx, dirty);
                }
                else {
                    if_block1 = create_if_block$3(ctx);
                    if_block1.c();
                    if_block1.m(t5.parentNode, t5);
                }
            }
            else if (if_block1) {
                if_block1.d(1);
                if_block1 = null;
            }
            if (!current || dirty & /*emailInputValid*/ 8 && button1_disabled_value !== (button1_disabled_value = !ctx[3])) {
                button1.disabled = button1_disabled_value;
            }
        },
        i: function (local) {
            if (current)
                return;
            transition_in(emailinput.$$.fragment, local);
            transition_in(passwordlockicon.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(emailinput.$$.fragment, local);
            transition_out(passwordlockicon.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(form);
            destroy_component(emailinput);
            if (detaching)
                detach(t0);
            if (detaching)
                detach(div0);
            destroy_component(passwordlockicon);
            if_block0.d();
            if (detaching)
                detach(t4);
            if (if_block1)
                if_block1.d(detaching);
            if (detaching)
                detach(t5);
            if (detaching)
                detach(div1);
            mounted = false;
            run_all(dispose);
        }
    };
}
function instance$3($$self, $$props, $$invalidate) {
    var $app;
    component_subscribe($$self, AppStore, function ($$value) { return $$invalidate(4, $app = $$value); });
    var displayProfile = $$props.displayProfile;
    var member = $$props.member;
    var emailValue = $$props.emailValue;
    var profileLoader = $$props.profileLoader;
    // sort
    $app.authProviders.sort(function (a, b) {
        if (isConnected(a) === isConnected(b)) {
            return a.order - b.order;
        }
        return isConnected(a) ? -1 : 1;
    });
    var emailInputValid = false;
    function submitEmailChange(e) {
        return __awaiter(this, void 0, void 0, function () {
            var message, err_20;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!emailInputValid || !emailValue)
                            return [2 /*return*/];
                        $$invalidate(8, profileLoader = true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, window.$memberstackDom.updateMemberAuth({ email: emailValue })];
                    case 2:
                        message = (_a.sent())._internalUseOnly.message;
                        window.$memberstackDom._showMessage(message, false);
                        $$invalidate(8, profileLoader = false);
                        return [3 /*break*/, 4];
                    case 3:
                        err_20 = _a.sent();
                        window.$memberstackDom._showMessage(err_20.message, true);
                        $$invalidate(8, profileLoader = false);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    function disconnectProvider(provider) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, message, err_21;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        $$invalidate(8, profileLoader = true);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, window.$memberstackDom.disconnectProvider({ provider: provider })];
                    case 2:
                        _a = _b.sent(), data = _a.data, message = _a._internalUseOnly.message;
                        $$invalidate(1, member = __assign(__assign({}, member), { auth: __assign(__assign({}, member.auth), { providers: data.providers }) }));
                        window.$memberstackDom._showMessage(message, false);
                        $$invalidate(8, profileLoader = false);
                        return [3 /*break*/, 4];
                    case 3:
                        err_21 = _b.sent();
                        window.$memberstackDom._showMessage(err_21.message, true);
                        $$invalidate(8, profileLoader = false);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    function connectAdditionalProvider(provider) {
        return __awaiter(this, void 0, void 0, function () {
            var data, err_22;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("connect", provider);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, window.$memberstackDom.connectProvider({ provider: provider })];
                    case 2:
                        data = (_a.sent()).data;
                        $$invalidate(1, member = __assign(__assign({}, member), { auth: __assign(__assign({}, member.auth), { providers: data.providers }) }));
                        window.$memberstackDom._showMessage(data.message, false);
                        return [3 /*break*/, 4];
                    case 3:
                        err_22 = _a.sent();
                        window.$memberstackDom._showMessage(err_22.message, true);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    function isConnected(provider) {
        return member.auth.providers.some(function (prv) { return prv.provider === provider.provider; });
    }
    var func = function (provider, prv) { return prv.provider === provider.provider; };
    function emailinput_emailInputValid_binding(value) {
        emailInputValid = value;
        $$invalidate(3, emailInputValid);
    }
    function emailinput_emailValue_binding(value) {
        emailValue = value;
        $$invalidate(2, emailValue);
    }
    var click_handler = function () { return $$invalidate(0, displayProfile = "changePassword"); };
    var click_handler_1 = function (provider) { return disconnectProvider(provider.provider); };
    var click_handler_2 = function (provider) { return connectAdditionalProvider(provider.provider); };
    $$self.$$set = function ($$props) {
        if ('displayProfile' in $$props)
            $$invalidate(0, displayProfile = $$props.displayProfile);
        if ('member' in $$props)
            $$invalidate(1, member = $$props.member);
        if ('emailValue' in $$props)
            $$invalidate(2, emailValue = $$props.emailValue);
        if ('profileLoader' in $$props)
            $$invalidate(8, profileLoader = $$props.profileLoader);
    };
    return [
        displayProfile,
        member,
        emailValue,
        emailInputValid,
        $app,
        submitEmailChange,
        disconnectProvider,
        connectAdditionalProvider,
        profileLoader,
        func,
        emailinput_emailInputValid_binding,
        emailinput_emailValue_binding,
        click_handler,
        click_handler_1,
        click_handler_2
    ];
}
var MobileSecurityInfoContent = /** @class */ (function (_super) {
    __extends(MobileSecurityInfoContent, _super);
    function MobileSecurityInfoContent(options) {
        var _this = _super.call(this) || this;
        init(_this, options, instance$3, create_fragment$3, safe_not_equal, {
            displayProfile: 0,
            member: 1,
            emailValue: 2,
            profileLoader: 8
        });
        return _this;
    }
    return MobileSecurityInfoContent;
}(SvelteComponent));
/* src/components/MobilePasswordInfoContent.svelte generated by Svelte v3.48.0 */
function create_if_block$2(ctx) {
    var passwordinput;
    var updating_passwordValue;
    var updating_passwordInputValid;
    var current;
    function passwordinput_passwordValue_binding(value) {
        /*passwordinput_passwordValue_binding*/ ctx[9](value);
    }
    function passwordinput_passwordInputValid_binding(value) {
        /*passwordinput_passwordInputValid_binding*/ ctx[10](value);
    }
    var passwordinput_props = {
        passwordLabel: "Current Password",
        passwordPlaceholder: "Enter a strong password"
    };
    if ( /*currentPasswordValue*/ctx[1] !== void 0) {
        passwordinput_props.passwordValue = /*currentPasswordValue*/ ctx[1];
    }
    if ( /*currentPasswordValid*/ctx[4] !== void 0) {
        passwordinput_props.passwordInputValid = /*currentPasswordValid*/ ctx[4];
    }
    passwordinput = new PasswordInput({ props: passwordinput_props });
    binding_callbacks.push(function () { return bind(passwordinput, 'passwordValue', passwordinput_passwordValue_binding); });
    binding_callbacks.push(function () { return bind(passwordinput, 'passwordInputValid', passwordinput_passwordInputValid_binding); });
    return {
        c: function () {
            create_component(passwordinput.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(passwordinput, target, anchor);
            current = true;
        },
        p: function (ctx, dirty) {
            var passwordinput_changes = {};
            if (!updating_passwordValue && dirty & /*currentPasswordValue*/ 2) {
                updating_passwordValue = true;
                passwordinput_changes.passwordValue = /*currentPasswordValue*/ ctx[1];
                add_flush_callback(function () { return updating_passwordValue = false; });
            }
            if (!updating_passwordInputValid && dirty & /*currentPasswordValid*/ 16) {
                updating_passwordInputValid = true;
                passwordinput_changes.passwordInputValid = /*currentPasswordValid*/ ctx[4];
                add_flush_callback(function () { return updating_passwordInputValid = false; });
            }
            passwordinput.$set(passwordinput_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(passwordinput.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(passwordinput.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(passwordinput, detaching);
        }
    };
}
function create_fragment$2(ctx) {
    var form;
    var t0;
    var passwordinput0;
    var updating_passwordValue;
    var updating_passwordInputValid;
    var t1;
    var passwordinput1;
    var updating_passwordValue_1;
    var updating_passwordInputValid_1;
    var t2;
    var div;
    var button;
    var t3;
    var button_disabled_value;
    var current;
    var mounted;
    var dispose;
    var if_block = /*member*/ ctx[0].auth.hasPassword && create_if_block$2(ctx);
    function passwordinput0_passwordValue_binding(value) {
        /*passwordinput0_passwordValue_binding*/ ctx[11](value);
    }
    function passwordinput0_passwordInputValid_binding(value) {
        /*passwordinput0_passwordInputValid_binding*/ ctx[12](value);
    }
    var passwordinput0_props = {
        passwordLabel: "New Password",
        passwordPlaceholder: "Enter a strong password"
    };
    if ( /*newPasswordValue*/ctx[2] !== void 0) {
        passwordinput0_props.passwordValue = /*newPasswordValue*/ ctx[2];
    }
    if ( /*newPasswordValid*/ctx[5] !== void 0) {
        passwordinput0_props.passwordInputValid = /*newPasswordValid*/ ctx[5];
    }
    passwordinput0 = new PasswordInput({ props: passwordinput0_props });
    binding_callbacks.push(function () { return bind(passwordinput0, 'passwordValue', passwordinput0_passwordValue_binding); });
    binding_callbacks.push(function () { return bind(passwordinput0, 'passwordInputValid', passwordinput0_passwordInputValid_binding); });
    function passwordinput1_passwordValue_binding(value) {
        /*passwordinput1_passwordValue_binding*/ ctx[13](value);
    }
    function passwordinput1_passwordInputValid_binding(value) {
        /*passwordinput1_passwordInputValid_binding*/ ctx[14](value);
    }
    var passwordinput1_props = {
        passwordLabel: "Confirm New Password",
        passwordPlaceholder: "Enter a strong password"
    };
    if ( /*confirmPasswordValue*/ctx[3] !== void 0) {
        passwordinput1_props.passwordValue = /*confirmPasswordValue*/ ctx[3];
    }
    if ( /*confirmPasswordValid*/ctx[6] !== void 0) {
        passwordinput1_props.passwordInputValid = /*confirmPasswordValid*/ ctx[6];
    }
    passwordinput1 = new PasswordInput({ props: passwordinput1_props });
    binding_callbacks.push(function () { return bind(passwordinput1, 'passwordValue', passwordinput1_passwordValue_binding); });
    binding_callbacks.push(function () { return bind(passwordinput1, 'passwordInputValid', passwordinput1_passwordInputValid_binding); });
    return {
        c: function () {
            form = element("form");
            if (if_block)
                if_block.c();
            t0 = space();
            create_component(passwordinput0.$$.fragment);
            t1 = space();
            create_component(passwordinput1.$$.fragment);
            t2 = space();
            div = element("div");
            button = element("button");
            t3 = text("Save");
            attr(form, "class", "ms-form");
            attr(form, "action", "");
            attr(form, "method", "post");
            attr(form, "autocomplete", "off");
            attr(button, "class", "ms-modal__save-button ms-modal__save-button--large");
            button.disabled = button_disabled_value = /*member*/ ctx[0].auth.hasPassword && !ctx[4] || !ctx[5] || !ctx[6];
            attr(div, "class", "ms-modal__action-container");
        },
        m: function (target, anchor) {
            insert(target, form, anchor);
            if (if_block)
                if_block.m(form, null);
            append(form, t0);
            mount_component(passwordinput0, form, null);
            append(form, t1);
            mount_component(passwordinput1, form, null);
            insert(target, t2, anchor);
            insert(target, div, anchor);
            append(div, button);
            append(button, t3);
            current = true;
            if (!mounted) {
                dispose = [
                    listen(form, "submit", stop_propagation(prevent_default(/*submitPasswordChange*/ ctx[7]))),
                    listen(button, "click", /*submitPasswordChange*/ ctx[7])
                ];
                mounted = true;
            }
        },
        p: function (ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if ( /*member*/ctx[0].auth.hasPassword) {
                if (if_block) {
                    if_block.p(ctx, dirty);
                    if (dirty & /*member*/ 1) {
                        transition_in(if_block, 1);
                    }
                }
                else {
                    if_block = create_if_block$2(ctx);
                    if_block.c();
                    transition_in(if_block, 1);
                    if_block.m(form, t0);
                }
            }
            else if (if_block) {
                group_outros();
                transition_out(if_block, 1, 1, function () {
                    if_block = null;
                });
                check_outros();
            }
            var passwordinput0_changes = {};
            if (!updating_passwordValue && dirty & /*newPasswordValue*/ 4) {
                updating_passwordValue = true;
                passwordinput0_changes.passwordValue = /*newPasswordValue*/ ctx[2];
                add_flush_callback(function () { return updating_passwordValue = false; });
            }
            if (!updating_passwordInputValid && dirty & /*newPasswordValid*/ 32) {
                updating_passwordInputValid = true;
                passwordinput0_changes.passwordInputValid = /*newPasswordValid*/ ctx[5];
                add_flush_callback(function () { return updating_passwordInputValid = false; });
            }
            passwordinput0.$set(passwordinput0_changes);
            var passwordinput1_changes = {};
            if (!updating_passwordValue_1 && dirty & /*confirmPasswordValue*/ 8) {
                updating_passwordValue_1 = true;
                passwordinput1_changes.passwordValue = /*confirmPasswordValue*/ ctx[3];
                add_flush_callback(function () { return updating_passwordValue_1 = false; });
            }
            if (!updating_passwordInputValid_1 && dirty & /*confirmPasswordValid*/ 64) {
                updating_passwordInputValid_1 = true;
                passwordinput1_changes.passwordInputValid = /*confirmPasswordValid*/ ctx[6];
                add_flush_callback(function () { return updating_passwordInputValid_1 = false; });
            }
            passwordinput1.$set(passwordinput1_changes);
            if (!current || dirty & /*member, currentPasswordValid, newPasswordValid, confirmPasswordValid*/ 113 && button_disabled_value !== (button_disabled_value = /*member*/ ctx[0].auth.hasPassword && !ctx[4] || !ctx[5] || !ctx[6])) {
                button.disabled = button_disabled_value;
            }
        },
        i: function (local) {
            if (current)
                return;
            transition_in(if_block);
            transition_in(passwordinput0.$$.fragment, local);
            transition_in(passwordinput1.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(if_block);
            transition_out(passwordinput0.$$.fragment, local);
            transition_out(passwordinput1.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(form);
            if (if_block)
                if_block.d();
            destroy_component(passwordinput0);
            destroy_component(passwordinput1);
            if (detaching)
                detach(t2);
            if (detaching)
                detach(div);
            mounted = false;
            run_all(dispose);
        }
    };
}
function instance$2($$self, $$props, $$invalidate) {
    var profileLoader = $$props.profileLoader;
    var member = $$props.member;
    var currentPasswordValue = "";
    var newPasswordValue = "";
    var confirmPasswordValue = "";
    var currentPasswordValid = false;
    var newPasswordValid = false;
    var confirmPasswordValid = false;
    function submitPasswordChange(e) {
        return __awaiter(this, void 0, void 0, function () {
            var message, msg, msg, err_23;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (member.auth.hasPassword && !currentPasswordValid && !newPasswordValid && !confirmPasswordValid)
                            return [2 /*return*/];
                        if (!member.auth.hasPassword && !newPasswordValid && !confirmPasswordValid)
                            return [2 /*return*/];
                        // if (newPasswordValue !== confirmPasswordValue) {
                        //   window.$memberstackDom._showMessage("New password and confirm password do not match", true);
                        //   return;
                        // }
                        $$invalidate(8, profileLoader = true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        message = void 0;
                        if (!member.auth.hasPassword) return [3 /*break*/, 3];
                        return [4 /*yield*/, window.$memberstackDom.updateMemberAuth({
                                oldPassword: currentPasswordValue,
                                newPassword: newPasswordValue
                            })];
                    case 2:
                        msg = (_a.sent())._internalUseOnly.message;
                        message = msg;
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, window.$memberstackDom.setPassword({ password: newPasswordValue })];
                    case 4:
                        msg = (_a.sent())._internalUseOnly.message;
                        $$invalidate(0, member.auth.hasPassword = true, member);
                        message = msg;
                        _a.label = 5;
                    case 5:
                        window.$memberstackDom._showMessage(message, false);
                        $$invalidate(1, currentPasswordValue = "");
                        $$invalidate(2, newPasswordValue = "");
                        $$invalidate(3, confirmPasswordValue = "");
                        $$invalidate(8, profileLoader = false);
                        return [3 /*break*/, 7];
                    case 6:
                        err_23 = _a.sent();
                        window.$memberstackDom._showMessage(err_23.message, true);
                        $$invalidate(8, profileLoader = false);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    }
    function passwordinput_passwordValue_binding(value) {
        currentPasswordValue = value;
        $$invalidate(1, currentPasswordValue);
    }
    function passwordinput_passwordInputValid_binding(value) {
        currentPasswordValid = value;
        $$invalidate(4, currentPasswordValid);
    }
    function passwordinput0_passwordValue_binding(value) {
        newPasswordValue = value;
        $$invalidate(2, newPasswordValue);
    }
    function passwordinput0_passwordInputValid_binding(value) {
        newPasswordValid = value;
        $$invalidate(5, newPasswordValid);
    }
    function passwordinput1_passwordValue_binding(value) {
        confirmPasswordValue = value;
        $$invalidate(3, confirmPasswordValue);
    }
    function passwordinput1_passwordInputValid_binding(value) {
        confirmPasswordValid = value;
        $$invalidate(6, confirmPasswordValid);
    }
    $$self.$$set = function ($$props) {
        if ('profileLoader' in $$props)
            $$invalidate(8, profileLoader = $$props.profileLoader);
        if ('member' in $$props)
            $$invalidate(0, member = $$props.member);
    };
    return [
        member,
        currentPasswordValue,
        newPasswordValue,
        confirmPasswordValue,
        currentPasswordValid,
        newPasswordValid,
        confirmPasswordValid,
        submitPasswordChange,
        profileLoader,
        passwordinput_passwordValue_binding,
        passwordinput_passwordInputValid_binding,
        passwordinput0_passwordValue_binding,
        passwordinput0_passwordInputValid_binding,
        passwordinput1_passwordValue_binding,
        passwordinput1_passwordInputValid_binding
    ];
}
var MobilePasswordInfoContent = /** @class */ (function (_super) {
    __extends(MobilePasswordInfoContent, _super);
    function MobilePasswordInfoContent(options) {
        var _this = _super.call(this) || this;
        init(_this, options, instance$2, create_fragment$2, safe_not_equal, { profileLoader: 8, member: 0 });
        return _this;
    }
    return MobilePasswordInfoContent;
}(SvelteComponent));
/* src/modals/MobileProfileModal.svelte generated by Svelte v3.48.0 */
function create_if_block_6$1(ctx) {
    var div;
    var button;
    var backicon;
    var current;
    var mounted;
    var dispose;
    backicon = new BackIcon({});
    return {
        c: function () {
            div = element("div");
            button = element("button");
            create_component(backicon.$$.fragment);
            attr(div, "class", "ms-modal__profile-back--mobile");
        },
        m: function (target, anchor) {
            insert(target, div, anchor);
            append(div, button);
            mount_component(backicon, button, null);
            current = true;
            if (!mounted) {
                dispose = listen(button, "click", /*click_handler*/ ctx[8]);
                mounted = true;
            }
        },
        p: noop,
        i: function (local) {
            if (current)
                return;
            transition_in(backicon.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(backicon.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div);
            destroy_component(backicon);
            mounted = false;
            dispose();
        }
    };
}
// (61:4) {:else}
function create_else_block$1(ctx) {
    var memberstackicon;
    var current;
    memberstackicon = new MemberstackIcon({});
    return {
        c: function () {
            create_component(memberstackicon.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(memberstackicon, target, anchor);
            current = true;
        },
        p: noop,
        i: function (local) {
            if (current)
                return;
            transition_in(memberstackicon.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(memberstackicon.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(memberstackicon, detaching);
        }
    };
}
// (59:4) {#if $app.branding.logo}
function create_if_block_5$1(ctx) {
    var img;
    var img_src_value;
    var img_alt_value;
    return {
        c: function () {
            img = element("img");
            if (!src_url_equal(img.src, img_src_value = /*$app*/ ctx[7].branding.logo))
                attr(img, "src", img_src_value);
            attr(img, "alt", img_alt_value = /*$app*/ ctx[7].name);
        },
        m: function (target, anchor) {
            insert(target, img, anchor);
        },
        p: function (ctx, dirty) {
            if (dirty & /*$app*/ 128 && !src_url_equal(img.src, img_src_value = /*$app*/ ctx[7].branding.logo)) {
                attr(img, "src", img_src_value);
            }
            if (dirty & /*$app*/ 128 && img_alt_value !== (img_alt_value = /*$app*/ ctx[7].name)) {
                attr(img, "alt", img_alt_value);
            }
        },
        i: noop,
        o: noop,
        d: function (detaching) {
            if (detaching)
                detach(img);
        }
    };
}
// (74:5) {#if profileLoader}
function create_if_block_4$1(ctx) {
    var profileloader;
    var current;
    profileloader = new ProfileLoader({});
    return {
        c: function () {
            create_component(profileloader.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(profileloader, target, anchor);
            current = true;
        },
        i: function (local) {
            if (current)
                return;
            transition_in(profileloader.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(profileloader.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(profileloader, detaching);
        }
    };
}
// (93:51) 
function create_if_block_3$1(ctx) {
    var mobilepasswordinfocontent;
    var updating_displayProfile;
    var updating_profileLoader;
    var updating_member;
    var current;
    function mobilepasswordinfocontent_displayProfile_binding(value) {
        /*mobilepasswordinfocontent_displayProfile_binding*/ ctx[17](value);
    }
    function mobilepasswordinfocontent_profileLoader_binding(value) {
        /*mobilepasswordinfocontent_profileLoader_binding*/ ctx[18](value);
    }
    function mobilepasswordinfocontent_member_binding(value) {
        /*mobilepasswordinfocontent_member_binding*/ ctx[19](value);
    }
    var mobilepasswordinfocontent_props = {};
    if ( /*displayProfile*/ctx[0] !== void 0) {
        mobilepasswordinfocontent_props.displayProfile = /*displayProfile*/ ctx[0];
    }
    if ( /*profileLoader*/ctx[6] !== void 0) {
        mobilepasswordinfocontent_props.profileLoader = /*profileLoader*/ ctx[6];
    }
    if ( /*member*/ctx[1] !== void 0) {
        mobilepasswordinfocontent_props.member = /*member*/ ctx[1];
    }
    mobilepasswordinfocontent = new MobilePasswordInfoContent({ props: mobilepasswordinfocontent_props });
    binding_callbacks.push(function () { return bind(mobilepasswordinfocontent, 'displayProfile', mobilepasswordinfocontent_displayProfile_binding); });
    binding_callbacks.push(function () { return bind(mobilepasswordinfocontent, 'profileLoader', mobilepasswordinfocontent_profileLoader_binding); });
    binding_callbacks.push(function () { return bind(mobilepasswordinfocontent, 'member', mobilepasswordinfocontent_member_binding); });
    return {
        c: function () {
            create_component(mobilepasswordinfocontent.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(mobilepasswordinfocontent, target, anchor);
            current = true;
        },
        p: function (ctx, dirty) {
            var mobilepasswordinfocontent_changes = {};
            if (!updating_displayProfile && dirty & /*displayProfile*/ 1) {
                updating_displayProfile = true;
                mobilepasswordinfocontent_changes.displayProfile = /*displayProfile*/ ctx[0];
                add_flush_callback(function () { return updating_displayProfile = false; });
            }
            if (!updating_profileLoader && dirty & /*profileLoader*/ 64) {
                updating_profileLoader = true;
                mobilepasswordinfocontent_changes.profileLoader = /*profileLoader*/ ctx[6];
                add_flush_callback(function () { return updating_profileLoader = false; });
            }
            if (!updating_member && dirty & /*member*/ 2) {
                updating_member = true;
                mobilepasswordinfocontent_changes.member = /*member*/ ctx[1];
                add_flush_callback(function () { return updating_member = false; });
            }
            mobilepasswordinfocontent.$set(mobilepasswordinfocontent_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(mobilepasswordinfocontent.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(mobilepasswordinfocontent.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(mobilepasswordinfocontent, detaching);
        }
    };
}
// (91:45) 
function create_if_block_2$1(ctx) {
    var mobilesecurityinfocontent;
    var updating_displayProfile;
    var updating_profileLoader;
    var updating_member;
    var current;
    function mobilesecurityinfocontent_displayProfile_binding(value) {
        /*mobilesecurityinfocontent_displayProfile_binding*/ ctx[14](value);
    }
    function mobilesecurityinfocontent_profileLoader_binding(value) {
        /*mobilesecurityinfocontent_profileLoader_binding*/ ctx[15](value);
    }
    function mobilesecurityinfocontent_member_binding(value) {
        /*mobilesecurityinfocontent_member_binding*/ ctx[16](value);
    }
    var mobilesecurityinfocontent_props = {};
    if ( /*displayProfile*/ctx[0] !== void 0) {
        mobilesecurityinfocontent_props.displayProfile = /*displayProfile*/ ctx[0];
    }
    if ( /*profileLoader*/ctx[6] !== void 0) {
        mobilesecurityinfocontent_props.profileLoader = /*profileLoader*/ ctx[6];
    }
    if ( /*member*/ctx[1] !== void 0) {
        mobilesecurityinfocontent_props.member = /*member*/ ctx[1];
    }
    mobilesecurityinfocontent = new MobileSecurityInfoContent({ props: mobilesecurityinfocontent_props });
    binding_callbacks.push(function () { return bind(mobilesecurityinfocontent, 'displayProfile', mobilesecurityinfocontent_displayProfile_binding); });
    binding_callbacks.push(function () { return bind(mobilesecurityinfocontent, 'profileLoader', mobilesecurityinfocontent_profileLoader_binding); });
    binding_callbacks.push(function () { return bind(mobilesecurityinfocontent, 'member', mobilesecurityinfocontent_member_binding); });
    return {
        c: function () {
            create_component(mobilesecurityinfocontent.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(mobilesecurityinfocontent, target, anchor);
            current = true;
        },
        p: function (ctx, dirty) {
            var mobilesecurityinfocontent_changes = {};
            if (!updating_displayProfile && dirty & /*displayProfile*/ 1) {
                updating_displayProfile = true;
                mobilesecurityinfocontent_changes.displayProfile = /*displayProfile*/ ctx[0];
                add_flush_callback(function () { return updating_displayProfile = false; });
            }
            if (!updating_profileLoader && dirty & /*profileLoader*/ 64) {
                updating_profileLoader = true;
                mobilesecurityinfocontent_changes.profileLoader = /*profileLoader*/ ctx[6];
                add_flush_callback(function () { return updating_profileLoader = false; });
            }
            if (!updating_member && dirty & /*member*/ 2) {
                updating_member = true;
                mobilesecurityinfocontent_changes.member = /*member*/ ctx[1];
                add_flush_callback(function () { return updating_member = false; });
            }
            mobilesecurityinfocontent.$set(mobilesecurityinfocontent_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(mobilesecurityinfocontent.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(mobilesecurityinfocontent.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(mobilesecurityinfocontent, detaching);
        }
    };
}
// (85:44) 
function create_if_block_1$1(ctx) {
    var mobileprofileinfocontent;
    var updating_member;
    var updating_profileLoader;
    var current;
    function mobileprofileinfocontent_member_binding(value) {
        /*mobileprofileinfocontent_member_binding*/ ctx[12](value);
    }
    function mobileprofileinfocontent_profileLoader_binding(value) {
        /*mobileprofileinfocontent_profileLoader_binding*/ ctx[13](value);
    }
    var mobileprofileinfocontent_props = {
        customFields: /*$app*/ ctx[7].customFields
    };
    if ( /*member*/ctx[1] !== void 0) {
        mobileprofileinfocontent_props.member = /*member*/ ctx[1];
    }
    if ( /*profileLoader*/ctx[6] !== void 0) {
        mobileprofileinfocontent_props.profileLoader = /*profileLoader*/ ctx[6];
    }
    mobileprofileinfocontent = new MobileProfileInfoContent({ props: mobileprofileinfocontent_props });
    binding_callbacks.push(function () { return bind(mobileprofileinfocontent, 'member', mobileprofileinfocontent_member_binding); });
    binding_callbacks.push(function () { return bind(mobileprofileinfocontent, 'profileLoader', mobileprofileinfocontent_profileLoader_binding); });
    return {
        c: function () {
            create_component(mobileprofileinfocontent.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(mobileprofileinfocontent, target, anchor);
            current = true;
        },
        p: function (ctx, dirty) {
            var mobileprofileinfocontent_changes = {};
            if (dirty & /*$app*/ 128)
                mobileprofileinfocontent_changes.customFields = /*$app*/ ctx[7].customFields;
            if (!updating_member && dirty & /*member*/ 2) {
                updating_member = true;
                mobileprofileinfocontent_changes.member = /*member*/ ctx[1];
                add_flush_callback(function () { return updating_member = false; });
            }
            if (!updating_profileLoader && dirty & /*profileLoader*/ 64) {
                updating_profileLoader = true;
                mobileprofileinfocontent_changes.profileLoader = /*profileLoader*/ ctx[6];
                add_flush_callback(function () { return updating_profileLoader = false; });
            }
            mobileprofileinfocontent.$set(mobileprofileinfocontent_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(mobileprofileinfocontent.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(mobileprofileinfocontent.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(mobileprofileinfocontent, detaching);
        }
    };
}
// (77:5) {#if displayProfile === "profile-nav"}
function create_if_block$1(ctx) {
    var mobileprofilemodalnav;
    var updating_member;
    var updating_displayProfile;
    var updating_profileLoader;
    var current;
    function mobileprofilemodalnav_member_binding(value) {
        /*mobileprofilemodalnav_member_binding*/ ctx[9](value);
    }
    function mobileprofilemodalnav_displayProfile_binding(value) {
        /*mobileprofilemodalnav_displayProfile_binding*/ ctx[10](value);
    }
    function mobileprofilemodalnav_profileLoader_binding(value) {
        /*mobileprofilemodalnav_profileLoader_binding*/ ctx[11](value);
    }
    var mobileprofilemodalnav_props = {
        onSuccessLogout: /*onSuccessLogout*/ ctx[3],
        hideProfileSection: /*hideProfileSection*/ ctx[5]
    };
    if ( /*member*/ctx[1] !== void 0) {
        mobileprofilemodalnav_props.member = /*member*/ ctx[1];
    }
    if ( /*displayProfile*/ctx[0] !== void 0) {
        mobileprofilemodalnav_props.displayProfile = /*displayProfile*/ ctx[0];
    }
    if ( /*profileLoader*/ctx[6] !== void 0) {
        mobileprofilemodalnav_props.profileLoader = /*profileLoader*/ ctx[6];
    }
    mobileprofilemodalnav = new MobileProfileModalNav({ props: mobileprofilemodalnav_props });
    binding_callbacks.push(function () { return bind(mobileprofilemodalnav, 'member', mobileprofilemodalnav_member_binding); });
    binding_callbacks.push(function () { return bind(mobileprofilemodalnav, 'displayProfile', mobileprofilemodalnav_displayProfile_binding); });
    binding_callbacks.push(function () { return bind(mobileprofilemodalnav, 'profileLoader', mobileprofilemodalnav_profileLoader_binding); });
    return {
        c: function () {
            create_component(mobileprofilemodalnav.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(mobileprofilemodalnav, target, anchor);
            current = true;
        },
        p: function (ctx, dirty) {
            var mobileprofilemodalnav_changes = {};
            if (dirty & /*onSuccessLogout*/ 8)
                mobileprofilemodalnav_changes.onSuccessLogout = /*onSuccessLogout*/ ctx[3];
            if (dirty & /*hideProfileSection*/ 32)
                mobileprofilemodalnav_changes.hideProfileSection = /*hideProfileSection*/ ctx[5];
            if (!updating_member && dirty & /*member*/ 2) {
                updating_member = true;
                mobileprofilemodalnav_changes.member = /*member*/ ctx[1];
                add_flush_callback(function () { return updating_member = false; });
            }
            if (!updating_displayProfile && dirty & /*displayProfile*/ 1) {
                updating_displayProfile = true;
                mobileprofilemodalnav_changes.displayProfile = /*displayProfile*/ ctx[0];
                add_flush_callback(function () { return updating_displayProfile = false; });
            }
            if (!updating_profileLoader && dirty & /*profileLoader*/ 64) {
                updating_profileLoader = true;
                mobileprofilemodalnav_changes.profileLoader = /*profileLoader*/ ctx[6];
                add_flush_callback(function () { return updating_profileLoader = false; });
            }
            mobileprofilemodalnav.$set(mobileprofilemodalnav_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(mobileprofilemodalnav.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(mobileprofilemodalnav.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(mobileprofilemodalnav, detaching);
        }
    };
}
function create_fragment$1(ctx) {
    var div5;
    var div2;
    var t0;
    var div1;
    var figure;
    var current_block_type_index;
    var if_block1;
    var t1;
    var div0;
    var b;
    var t2;
    var t3;
    var closebutton;
    var t4;
    var div4;
    var div3;
    var t5;
    var current_block_type_index_1;
    var if_block3;
    var t6;
    var modalfooter;
    var current;
    var if_block0 = ( /*displayProfile*/ctx[0] === "profile" || /*displayProfile*/ ctx[0] === "changePassword" || /*displayProfile*/ ctx[0] === "security") && create_if_block_6$1(ctx);
    var if_block_creators = [create_if_block_5$1, create_else_block$1];
    var if_blocks = [];
    function select_block_type(ctx, dirty) {
        if ( /*$app*/ctx[7].branding.logo)
            return 0;
        return 1;
    }
    current_block_type_index = select_block_type(ctx);
    if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    closebutton = new CloseButton({
        props: { closeModal: /*closeModal*/ ctx[4] }
    });
    var if_block2 = /*profileLoader*/ ctx[6] && create_if_block_4$1();
    var if_block_creators_1 = [create_if_block$1, create_if_block_1$1, create_if_block_2$1, create_if_block_3$1];
    var if_blocks_1 = [];
    function select_block_type_1(ctx, dirty) {
        if ( /*displayProfile*/ctx[0] === "profile-nav")
            return 0;
        if ( /*displayProfile*/ctx[0] === "profile")
            return 1;
        if ( /*displayProfile*/ctx[0] === "security")
            return 2;
        if ( /*displayProfile*/ctx[0] === "changePassword")
            return 3;
        return -1;
    }
    if (~(current_block_type_index_1 = select_block_type_1(ctx))) {
        if_block3 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
    }
    modalfooter = new ModalFooter({});
    return {
        c: function () {
            div5 = element("div");
            div2 = element("div");
            if (if_block0)
                if_block0.c();
            t0 = space();
            div1 = element("div");
            figure = element("figure");
            if_block1.c();
            t1 = space();
            div0 = element("div");
            b = element("b");
            t2 = text(/*profileTitle*/ ctx[2]);
            t3 = space();
            create_component(closebutton.$$.fragment);
            t4 = space();
            div4 = element("div");
            div3 = element("div");
            if (if_block2)
                if_block2.c();
            t5 = space();
            if (if_block3)
                if_block3.c();
            t6 = space();
            create_component(modalfooter.$$.fragment);
            attr(figure, "class", "ms-modal__figure ms-modal__figure--mobile");
            attr(div1, "class", "ms-modal__header--center");
            attr(div2, "class", "ms-modal__header--mobile");
            attr(div3, "class", "ms-modal__content--mobile");
            attr(div4, "class", "ms-modal__content ms-modal__content--profile");
            attr(div5, "class", "ms-modal ms-modal--profile");
            attr(div5, "id", "MobileProfileModal");
        },
        m: function (target, anchor) {
            insert(target, div5, anchor);
            append(div5, div2);
            if (if_block0)
                if_block0.m(div2, null);
            append(div2, t0);
            append(div2, div1);
            append(div1, figure);
            if_blocks[current_block_type_index].m(figure, null);
            append(div1, t1);
            append(div1, div0);
            append(div0, b);
            append(b, t2);
            append(div2, t3);
            mount_component(closebutton, div2, null);
            append(div5, t4);
            append(div5, div4);
            append(div4, div3);
            if (if_block2)
                if_block2.m(div3, null);
            append(div3, t5);
            if (~current_block_type_index_1) {
                if_blocks_1[current_block_type_index_1].m(div3, null);
            }
            append(div5, t6);
            mount_component(modalfooter, div5, null);
            current = true;
        },
        p: function (ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            if ( /*displayProfile*/ctx[0] === "profile" || /*displayProfile*/ ctx[0] === "changePassword" || /*displayProfile*/ ctx[0] === "security") {
                if (if_block0) {
                    if_block0.p(ctx, dirty);
                    if (dirty & /*displayProfile*/ 1) {
                        transition_in(if_block0, 1);
                    }
                }
                else {
                    if_block0 = create_if_block_6$1(ctx);
                    if_block0.c();
                    transition_in(if_block0, 1);
                    if_block0.m(div2, t0);
                }
            }
            else if (if_block0) {
                group_outros();
                transition_out(if_block0, 1, 1, function () {
                    if_block0 = null;
                });
                check_outros();
            }
            var previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx);
            if (current_block_type_index === previous_block_index) {
                if_blocks[current_block_type_index].p(ctx, dirty);
            }
            else {
                group_outros();
                transition_out(if_blocks[previous_block_index], 1, 1, function () {
                    if_blocks[previous_block_index] = null;
                });
                check_outros();
                if_block1 = if_blocks[current_block_type_index];
                if (!if_block1) {
                    if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
                    if_block1.c();
                }
                else {
                    if_block1.p(ctx, dirty);
                }
                transition_in(if_block1, 1);
                if_block1.m(figure, null);
            }
            if (!current || dirty & /*profileTitle*/ 4)
                set_data(t2, /*profileTitle*/ ctx[2]);
            var closebutton_changes = {};
            if (dirty & /*closeModal*/ 16)
                closebutton_changes.closeModal = /*closeModal*/ ctx[4];
            closebutton.$set(closebutton_changes);
            if ( /*profileLoader*/ctx[6]) {
                if (if_block2) {
                    if (dirty & /*profileLoader*/ 64) {
                        transition_in(if_block2, 1);
                    }
                }
                else {
                    if_block2 = create_if_block_4$1();
                    if_block2.c();
                    transition_in(if_block2, 1);
                    if_block2.m(div3, t5);
                }
            }
            else if (if_block2) {
                group_outros();
                transition_out(if_block2, 1, 1, function () {
                    if_block2 = null;
                });
                check_outros();
            }
            var previous_block_index_1 = current_block_type_index_1;
            current_block_type_index_1 = select_block_type_1(ctx);
            if (current_block_type_index_1 === previous_block_index_1) {
                if (~current_block_type_index_1) {
                    if_blocks_1[current_block_type_index_1].p(ctx, dirty);
                }
            }
            else {
                if (if_block3) {
                    group_outros();
                    transition_out(if_blocks_1[previous_block_index_1], 1, 1, function () {
                        if_blocks_1[previous_block_index_1] = null;
                    });
                    check_outros();
                }
                if (~current_block_type_index_1) {
                    if_block3 = if_blocks_1[current_block_type_index_1];
                    if (!if_block3) {
                        if_block3 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
                        if_block3.c();
                    }
                    else {
                        if_block3.p(ctx, dirty);
                    }
                    transition_in(if_block3, 1);
                    if_block3.m(div3, null);
                }
                else {
                    if_block3 = null;
                }
            }
        },
        i: function (local) {
            if (current)
                return;
            transition_in(if_block0);
            transition_in(if_block1);
            transition_in(closebutton.$$.fragment, local);
            transition_in(if_block2);
            transition_in(if_block3);
            transition_in(modalfooter.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(if_block0);
            transition_out(if_block1);
            transition_out(closebutton.$$.fragment, local);
            transition_out(if_block2);
            transition_out(if_block3);
            transition_out(modalfooter.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(div5);
            if (if_block0)
                if_block0.d();
            if_blocks[current_block_type_index].d();
            destroy_component(closebutton);
            if (if_block2)
                if_block2.d();
            if (~current_block_type_index_1) {
                if_blocks_1[current_block_type_index_1].d();
            }
            destroy_component(modalfooter);
        }
    };
}
function instance$1($$self, $$props, $$invalidate) {
    var $app;
    component_subscribe($$self, AppStore, function ($$value) { return $$invalidate(7, $app = $$value); });
    var onSuccessLogout = $$props.onSuccessLogout;
    var closeModal = $$props.closeModal;
    var _a = $$props.displayProfile, displayProfile = _a === void 0 ? "profile-nav" : _a;
    var member = $$props.member;
    var _b = $$props.profileTitle, profileTitle = _b === void 0 ? member.auth.email : _b;
    var hideProfileSection = false;
    var profileLoader = false;
    if (!$app.customFields.filter(function (field) { return !field.hidden; }).length) {
        displayProfile = "security";
        hideProfileSection = true;
    }
    var click_handler = function () { return $$invalidate(0, displayProfile = "profile-nav"); };
    function mobileprofilemodalnav_member_binding(value) {
        member = value;
        $$invalidate(1, member);
    }
    function mobileprofilemodalnav_displayProfile_binding(value) {
        displayProfile = value;
        $$invalidate(0, displayProfile);
    }
    function mobileprofilemodalnav_profileLoader_binding(value) {
        profileLoader = value;
        $$invalidate(6, profileLoader);
    }
    function mobileprofileinfocontent_member_binding(value) {
        member = value;
        $$invalidate(1, member);
    }
    function mobileprofileinfocontent_profileLoader_binding(value) {
        profileLoader = value;
        $$invalidate(6, profileLoader);
    }
    function mobilesecurityinfocontent_displayProfile_binding(value) {
        displayProfile = value;
        $$invalidate(0, displayProfile);
    }
    function mobilesecurityinfocontent_profileLoader_binding(value) {
        profileLoader = value;
        $$invalidate(6, profileLoader);
    }
    function mobilesecurityinfocontent_member_binding(value) {
        member = value;
        $$invalidate(1, member);
    }
    function mobilepasswordinfocontent_displayProfile_binding(value) {
        displayProfile = value;
        $$invalidate(0, displayProfile);
    }
    function mobilepasswordinfocontent_profileLoader_binding(value) {
        profileLoader = value;
        $$invalidate(6, profileLoader);
    }
    function mobilepasswordinfocontent_member_binding(value) {
        member = value;
        $$invalidate(1, member);
    }
    $$self.$$set = function ($$props) {
        if ('onSuccessLogout' in $$props)
            $$invalidate(3, onSuccessLogout = $$props.onSuccessLogout);
        if ('closeModal' in $$props)
            $$invalidate(4, closeModal = $$props.closeModal);
        if ('displayProfile' in $$props)
            $$invalidate(0, displayProfile = $$props.displayProfile);
        if ('member' in $$props)
            $$invalidate(1, member = $$props.member);
        if ('profileTitle' in $$props)
            $$invalidate(2, profileTitle = $$props.profileTitle);
    };
    $$self.$$.update = function () {
        if ($$self.$$.dirty & /*displayProfile, member*/ 3) {
            if (displayProfile === "profile-nav") {
                $$invalidate(2, profileTitle = member.auth.email);
            }
            else if (displayProfile === "profile") {
                $$invalidate(2, profileTitle = "My Profile");
            }
            else if (displayProfile === "security") {
                $$invalidate(2, profileTitle = "Security");
            }
            else if (displayProfile === "changePassword") {
                if (!member.auth.hasPassword) {
                    $$invalidate(2, profileTitle = "Set Password");
                }
                else {
                    $$invalidate(2, profileTitle = "Change Password");
                }
            }
        }
    };
    return [
        displayProfile,
        member,
        profileTitle,
        onSuccessLogout,
        closeModal,
        hideProfileSection,
        profileLoader,
        $app,
        click_handler,
        mobileprofilemodalnav_member_binding,
        mobileprofilemodalnav_displayProfile_binding,
        mobileprofilemodalnav_profileLoader_binding,
        mobileprofileinfocontent_member_binding,
        mobileprofileinfocontent_profileLoader_binding,
        mobilesecurityinfocontent_displayProfile_binding,
        mobilesecurityinfocontent_profileLoader_binding,
        mobilesecurityinfocontent_member_binding,
        mobilepasswordinfocontent_displayProfile_binding,
        mobilepasswordinfocontent_profileLoader_binding,
        mobilepasswordinfocontent_member_binding
    ];
}
var MobileProfileModal = /** @class */ (function (_super) {
    __extends(MobileProfileModal, _super);
    function MobileProfileModal(options) {
        var _this = _super.call(this) || this;
        init(_this, options, instance$1, create_fragment$1, safe_not_equal, {
            onSuccessLogout: 3,
            closeModal: 4,
            displayProfile: 0,
            member: 1,
            profileTitle: 2
        });
        return _this;
    }
    return MobileProfileModal;
}(SvelteComponent));
/* src/Main.svelte generated by Svelte v3.48.0 */
function add_css(target) {
    append_styles(target, "svelte-14go1rs", "@import url(\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap\");.svelte-14go1rs{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}#msOverlay.svelte-14go1rs{position:fixed;display:flex;justify-content:center;align-items:center;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0, 0, 0, 0.5);z-index:99999;overflow:scroll;font-family:\"Plus Jakarta Sans\", sans-serif;padding:5vh 5vw}.--hide{display:none}.--flex-h-center{display:flex;align-items:center}.ms__loader{position:relative;z-index:10000000}#msLoader path{fill:#007ace}.ms__profile__loader{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:rgb(255 255 255 / 75%)}.ms-modal{box-sizing:border-box;margin:auto;min-width:0;position:relative;outline:none;background:white;border-radius:16px;box-shadow:2px 2px 12px rgb(0 0 0 / 10%);width:360px;color:rgb(10, 10, 10)}.ms-modal--profile{width:700px}.ms-modal__close{box-sizing:border-box;margin:0;min-width:0;position:absolute;top:16px;right:16px;z-index:10;line-height:0}.ms-modal__close button{appearance:none;padding:0;outline:none;width:12px;border:0;background:transparent;cursor:pointer;color:#5c5c5c}.ms-modal__close button:hover{color:#0a0a0a}.ms-modal__back{box-sizing:border-box;margin:0;min-width:0;position:absolute;top:16px;left:16px;z-index:10;line-height:0}.ms-modal__back button{appearance:none;padding:0;outline:none;width:12px;border:0;background:transparent;cursor:pointer;color:#5c5c5c}.ms-modal__back button:hover, .ms-modal__profile-back\n      button:hover{color:#0a0a0a}.ms-modal__back svg{height:12px}.ms-modal__profile-back button{appearance:none;padding:5px;margin-right:6px;outline:none;width:25px;height:25px;border:0;background:transparent;cursor:pointer;color:#5c5c5c;display:flex;align-items:stretch;justify-content:center}.ms-modal__profile-back--mobile{box-sizing:border-box;margin:0;min-width:0;position:absolute;top:16px;left:16px;z-index:10;line-height:0}.ms-modal__profile-back--mobile button{appearance:none;padding:0;outline:none;height:11px;width:7px;border:0;background:transparent;cursor:pointer;color:#5c5c5c}.ms-modal__profile-back--mobile button:hover{color:#0a0a0a}.ms-modal__header{display:flex;align-items:center;padding:12px}.ms-modal__header--mobile{display:flex;padding:42px 42px 16px 42px;flex-direction:column;flex-wrap:wrap;justify-content:center;align-items:center}.ms-modal__header--center{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;align-items:center}.ms-modal__content{padding:28px 28px 20px;width:100%;box-sizing:border-box;margin:0 auto}.ms-modal__content--profile{padding:0;display:flex;flex-wrap:wrap;align-content:stretch;align-items:stretch;border-top:1px solid #dddddd}.ms-modal__content-left{display:flex;flex-direction:column;align-items:flex-start;padding:20px;border-right:1px solid #dddddd;min-width:160px}.ms-modal__content-right{padding:20px;flex-grow:1;height:55vh;min-height:300px;overflow-y:auto;position:relative;transition:height 0.3s ease-in-out}.ms-modal__content-right h3{margin-top:40px !important;margin-bottom:10px !important;font-size:18px !important;line-height:1em !important;font-weight:700 !important}.ms-modal__content--mobile{padding:12px;flex-grow:1;height:42vh;min-height:300px;overflow-y:auto;position:relative;transition:height 0.3s ease-in-out}.ms-modal__mobile-profile-nav{display:flex;flex-direction:column;align-content:center;align-items:stretch;flex-wrap:nowrap}.ms-modal__mobile-profile-nav button{display:flex;flex-direction:row;align-content:center;align-items:center;flex-wrap:nowrap;justify-content:space-between;padding:12px;width:100%;margin-bottom:10px}.ms-modal__figure{margin:8px auto;display:flex;position:relative;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;flex-shrink:0;line-height:1}.ms-modal__figure--profile{width:24px;height:24px;padding:0px;margin:0px 8px 0px 0px}.ms-modal__figure--mobile{margin:0px 0px 8px 0px}.ms-modal__figure img, .ms-modal__figure svg{width:auto;height:100%;max-height:42px;text-align:center;object-fit:cover;color:transparent}.ms-modal__title-container{display:flex;justify-content:space-between;align-items:center;margin-bottom:24px}.ms-modal__title{margin-bottom:36px;margin-top:0;text-align:center;font-size:24px;line-height:32px;font-weight:700}.ms-modal__title--profile{margin-bottom:0px}.ms-modal__title-group{display:flex;align-items:center}.ms-modal__title--sub-text{margin-bottom:8px}.ms-modal__text{font-weight:500;font-size:16px;line-height:28px;text-align:center;margin:0 0 20px 0}.ms-modal__regular-button{color:#fff;padding:8px;border-radius:4px;border:none;font-weight:700;font-size:14px;line-height:16px;cursor:pointer;display:flex;align-items:center}.ms-modal__regular-button svg{height:16px;margin-left:6px}.ms-modal__regular-button--left-icon svg{margin-right:6px;margin-left:0px}.ms-modal__regular-button--right-icon svg{margin-left:6px;margin-right:0px}.ms-modal__regular-button--margin-right{margin-right:12px}.ms-modal__text-button{color:#fff;background-color:transparent;padding:8px;border-radius:4px;border:none;font-weight:700;font-size:14px;line-height:16px;cursor:pointer;display:flex;align-items:center}.ms-modal__card{box-shadow:0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000,\n      0px 2px 2px rgba(0, 0, 0, 0.04);padding:12px;display:flex;flex-direction:row;margin-bottom:12px;border:1px solid rgb(221, 221, 221);border-radius:10px;box-sizing:border-box;width:100%;cursor:default;background:rgb(255, 255, 255);align-items:center;justify-content:space-between}.ms-form{width:100%}.ms-form__group{margin-bottom:20px}.ms-form__flex{display:flex;justify-content:space-between;align-content:center}.ms-form__flex--centered{justify-content:center}.ms-form__label{margin-bottom:4px;margin-top:0px;font-size:14px;line-height:24px;font-weight:700;text-align:left}.ms-form__fieldset{display:flex;justify-content:space-between;padding:0;border:none}.ms-form__input{box-sizing:border-box;margin:0px;border:1px solid rgb(201, 201, 201);border-radius:6px;font-size:16px;font-weight:400;padding:15px;width:100%}.ms-form__password-container{display:flex;justify-content:space-between;align-content:center;box-sizing:border-box;margin:0px;border:1px solid rgb(201, 201, 201);border-radius:6px;width:100%}.ms-form__password-container:focus-within{border:1px solid rgb(0, 68, 252);outline:rgb(0, 68, 252) solid 1px}.ms-form__password-container:focus-within input{outline:none;border-color:rgb(201, 201, 201);box-shadow:none}.ms-form__input--password{border:none}.ms-form__input--token{font-weight:500;font-size:24.19px;line-height:32px;text-align:center;color:#000000;padding:9px;max-width:42px}.ms-form__show-toggle{cursor:pointer;background:transparent;border-radius:0px 6px 6px 0px;padding:0px 8px;display:flex;align-items:center}.ms-form__eye{display:block;width:22px}.ms-form__eye-slash{display:block;width:22px}.ms-form__error{font-weight:500;font-size:12px;line-height:16px;color:#e40023;margin-top:4px;display:flex;align-items:baseline}.ms-form__error svg{width:10px;height:10px;margin-right:5px}.ms-form__label--right a{color:rgb(10, 10, 10) !important;text-decoration:none;font-weight:400}.ms-form__button{border-radius:6px;font-weight:700;font-size:16px;padding-left:22px;padding-right:22px;height:52px;border:none;display:block;width:100%;background-color:rgb(41, 98, 255);color:#fff;transition:background-color 0.5s ease;cursor:pointer}.ms-form__button:hover{background-color:#0745ff}.ms-form__button:disabled{background-color:#96c0fe;color:#fff;pointer-events:none;display:flex;justify-content:center;align-items:center}.ms-form__button--text{background-color:transparent;padding:0px;height:auto;margin-bottom:0px;margin-top:0px;font-size:14px;line-height:28px;font-weight:500;color:#0a0a0a;opacity:0.8}.ms-form__button--text:hover{background-color:transparent}.ms-form__button--top-spacing{margin-top:10px}#msFormLoader path{fill:#fff}a.ms-form__link, div.ms-form__link{margin-top:8px;font-weight:500;font-size:14px;line-height:24px;color:rgb(10, 10, 10) !important;text-decoration:none;opacity:0.8;cursor:pointer}.ms-modal__cancel-button{background:#f6f6f6;color:#828282;padding:8px;margin-right:8px;border-radius:4px;border:none;font-weight:700;font-size:14px;line-height:16px;cursor:pointer}.ms-modal__save-button{background:#2962ff;color:#fff;padding:8px;border-radius:4px;border:none;font-weight:700;font-size:14px;line-height:16px;cursor:pointer}.ms-modal__save-button:disabled{background:#80a1fc;color:#fff;cursor:default;opacity:0.4}.ms-modal__save-button--large{padding:12px;font-weight:700;font-size:14px;line-height:16px;width:100%}.ms-modal__outline-button{display:block !important;background:#fff;color:#0a0a0a;font-weight:700;font-size:14px;line-height:16px;padding:8px;margin-right:8px;border-radius:4px;border:1px solid #dddddd;cursor:pointer}.ms-modal__outline-button svg{display:inline !important;height:15px;margin-right:6px}.ms-modal__outline-button--mobile{width:100%}.ms-modal__button-label{margin-bottom:4px;margin-top:0px;font-size:14px;line-height:28px;font-weight:500}.ms-modal__profile-option{cursor:pointer;margin-bottom:20px;font-weight:500;font-size:16px;line-height:28px;background:transparent;border:none;padding:0px}.ms-modal__profile-option svg{display:inline !important;height:14px;margin-right:8px}.ms-modal__profile-option:hover{color:#2962ff}.ms-modal__profile-option--active{color:#2962ff}.ms-modal__profile-image-container{display:flex;justify-content:flex-start;width:100%;margin-bottom:21px;align-items:center;flex-direction:row;gap:12px}.ms-modal__profile-image{width:42px;height:42px;border-radius:50%;object-fit:cover;overflow:hidden;background:#ddd;border:1px solid #C9C9C9;display:flex;justify-content:center;align-items:center}.ms-modal__profile-image img{width:100%;height:100%;object-fit:cover}.ms-modal__social-button{display:flex;align-items:center;justify-content:center;width:100%;height:52px;border-radius:6px;font-weight:700;font-size:16px;line-height:28px;color:#0a0a0a;background:none;border:1px solid #c9c9c9;cursor:pointer;margin-bottom:8px}.ms-modal__social-button img, .ms-modal__social-button\n      svg{height:16px;margin-right:8px}.ms-modal__social-button[disabled]{background:#f6f6f6}.ms-modal__social-divider{display:flex;align-items:center;margin:20px 0px}.ms-modal__divider-line{text-align:center;background:#dddddd;height:1px;width:100%}.ms-modal__divider-text{padding:0px 4px}.ms-modal__footer{text-align:center;width:100%;box-sizing:border-box;margin:0;min-width:0;background:#f6f6f6;padding-top:10px;padding-bottom:10px;border-bottom-left-radius:16px;border-bottom-right-radius:16px;border-top:1px solid;border-top-color:#dddddd;font-size:12px;line-height:16px;font-weight:500}.ms-modal__footer a{color:rgb(10, 10, 10);text-decoration:none;display:flex;justify-content:center;align-items:center}.ms-modal__footer svg{height:12px;width:12px;margin-right:5.5px}");
}
// (118:34) 
function create_if_block_7(ctx) {
    var mediaquery;
    var current;
    mediaquery = new MediaQuery({
        props: {
            query: "(max-width: 520px)",
            $$slots: {
                default: [
                    create_default_slot,
                    function (_a) {
                        var matches = _a.matches;
                        return ({ 24: matches });
                    },
                    function (_a) {
                        var matches = _a.matches;
                        return matches ? 16777216 : 0;
                    }
                ]
            },
            $$scope: { ctx: ctx }
        }
    });
    return {
        c: function () {
            create_component(mediaquery.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(mediaquery, target, anchor);
            current = true;
        },
        p: function (ctx, dirty) {
            var mediaquery_changes = {};
            if (dirty & /*$$scope, onSuccess, member, display, matches*/ 50331661) {
                mediaquery_changes.$$scope = { dirty: dirty, ctx: ctx };
            }
            mediaquery.$set(mediaquery_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(mediaquery.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(mediaquery.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(mediaquery, detaching);
        }
    };
}
// (111:45) 
function create_if_block_6(ctx) {
    var passwordlesstokenmodal;
    var updating_display;
    var updating_params;
    var current;
    function passwordlesstokenmodal_display_binding(value) {
        /*passwordlesstokenmodal_display_binding*/ ctx[16](value);
    }
    function passwordlesstokenmodal_params_binding(value) {
        /*passwordlesstokenmodal_params_binding*/ ctx[17](value);
    }
    var passwordlesstokenmodal_props = {
        closeModal: /*closeModal*/ ctx[5],
        onSuccess: /*onSuccess*/ ctx[2]
    };
    if ( /*display*/ctx[0] !== void 0) {
        passwordlesstokenmodal_props.display = /*display*/ ctx[0];
    }
    if ( /*params*/ctx[1] !== void 0) {
        passwordlesstokenmodal_props.params = /*params*/ ctx[1];
    }
    passwordlesstokenmodal = new PasswordlessTokenModal({ props: passwordlesstokenmodal_props });
    binding_callbacks.push(function () { return bind(passwordlesstokenmodal, 'display', passwordlesstokenmodal_display_binding); });
    binding_callbacks.push(function () { return bind(passwordlesstokenmodal, 'params', passwordlesstokenmodal_params_binding); });
    return {
        c: function () {
            create_component(passwordlesstokenmodal.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(passwordlesstokenmodal, target, anchor);
            current = true;
        },
        p: function (ctx, dirty) {
            var passwordlesstokenmodal_changes = {};
            if (dirty & /*onSuccess*/ 4)
                passwordlesstokenmodal_changes.onSuccess = /*onSuccess*/ ctx[2];
            if (!updating_display && dirty & /*display*/ 1) {
                updating_display = true;
                passwordlesstokenmodal_changes.display = /*display*/ ctx[0];
                add_flush_callback(function () { return updating_display = false; });
            }
            if (!updating_params && dirty & /*params*/ 2) {
                updating_params = true;
                passwordlesstokenmodal_changes.params = /*params*/ ctx[1];
                add_flush_callback(function () { return updating_params = false; });
            }
            passwordlesstokenmodal.$set(passwordlesstokenmodal_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(passwordlesstokenmodal.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(passwordlesstokenmodal.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(passwordlesstokenmodal, detaching);
        }
    };
}
// (109:49) 
function create_if_block_5(ctx) {
    var passwordsuccessmodal;
    var updating_display;
    var current;
    function passwordsuccessmodal_display_binding(value) {
        /*passwordsuccessmodal_display_binding*/ ctx[15](value);
    }
    var passwordsuccessmodal_props = { closeModal: /*closeModal*/ ctx[5] };
    if ( /*display*/ctx[0] !== void 0) {
        passwordsuccessmodal_props.display = /*display*/ ctx[0];
    }
    passwordsuccessmodal = new PassSuccessModal({ props: passwordsuccessmodal_props });
    binding_callbacks.push(function () { return bind(passwordsuccessmodal, 'display', passwordsuccessmodal_display_binding); });
    return {
        c: function () {
            create_component(passwordsuccessmodal.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(passwordsuccessmodal, target, anchor);
            current = true;
        },
        p: function (ctx, dirty) {
            var passwordsuccessmodal_changes = {};
            if (!updating_display && dirty & /*display*/ 1) {
                updating_display = true;
                passwordsuccessmodal_changes.display = /*display*/ ctx[0];
                add_flush_callback(function () { return updating_display = false; });
            }
            passwordsuccessmodal.$set(passwordsuccessmodal_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(passwordsuccessmodal.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(passwordsuccessmodal.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(passwordsuccessmodal, detaching);
        }
    };
}
// (103:41) 
function create_if_block_4(ctx) {
    var passwordtokenmodal;
    var updating_display;
    var current;
    function passwordtokenmodal_display_binding(value) {
        /*passwordtokenmodal_display_binding*/ ctx[14](value);
    }
    var passwordtokenmodal_props = {
        closeModal: /*closeModal*/ ctx[5],
        onSuccessPasswordReset: /*onSuccess*/ ctx[2]
    };
    if ( /*display*/ctx[0] !== void 0) {
        passwordtokenmodal_props.display = /*display*/ ctx[0];
    }
    passwordtokenmodal = new PassTokenModal({ props: passwordtokenmodal_props });
    binding_callbacks.push(function () { return bind(passwordtokenmodal, 'display', passwordtokenmodal_display_binding); });
    return {
        c: function () {
            create_component(passwordtokenmodal.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(passwordtokenmodal, target, anchor);
            current = true;
        },
        p: function (ctx, dirty) {
            var passwordtokenmodal_changes = {};
            if (dirty & /*onSuccess*/ 4)
                passwordtokenmodal_changes.onSuccessPasswordReset = /*onSuccess*/ ctx[2];
            if (!updating_display && dirty & /*display*/ 1) {
                updating_display = true;
                passwordtokenmodal_changes.display = /*display*/ ctx[0];
                add_flush_callback(function () { return updating_display = false; });
            }
            passwordtokenmodal.$set(passwordtokenmodal_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(passwordtokenmodal.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(passwordtokenmodal.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(passwordtokenmodal, detaching);
        }
    };
}
// (101:42) 
function create_if_block_3(ctx) {
    var passwordresetmodal;
    var updating_display;
    var current;
    function passwordresetmodal_display_binding(value) {
        /*passwordresetmodal_display_binding*/ ctx[13](value);
    }
    var passwordresetmodal_props = { closeModal: /*closeModal*/ ctx[5] };
    if ( /*display*/ctx[0] !== void 0) {
        passwordresetmodal_props.display = /*display*/ ctx[0];
    }
    passwordresetmodal = new PassResetModal({ props: passwordresetmodal_props });
    binding_callbacks.push(function () { return bind(passwordresetmodal, 'display', passwordresetmodal_display_binding); });
    return {
        c: function () {
            create_component(passwordresetmodal.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(passwordresetmodal, target, anchor);
            current = true;
        },
        p: function (ctx, dirty) {
            var passwordresetmodal_changes = {};
            if (!updating_display && dirty & /*display*/ 1) {
                updating_display = true;
                passwordresetmodal_changes.display = /*display*/ ctx[0];
                add_flush_callback(function () { return updating_display = false; });
            }
            passwordresetmodal.$set(passwordresetmodal_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(passwordresetmodal.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(passwordresetmodal.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(passwordresetmodal, detaching);
        }
    };
}
// (94:33) 
function create_if_block_2(ctx) {
    var signupmodal;
    var updating_display;
    var updating_params;
    var current;
    function signupmodal_display_binding(value) {
        /*signupmodal_display_binding*/ ctx[11](value);
    }
    function signupmodal_params_binding(value) {
        /*signupmodal_params_binding*/ ctx[12](value);
    }
    var signupmodal_props = {
        closeModal: /*closeModal*/ ctx[5],
        onSuccessSignup: /*onSuccess*/ ctx[2]
    };
    if ( /*display*/ctx[0] !== void 0) {
        signupmodal_props.display = /*display*/ ctx[0];
    }
    if ( /*params*/ctx[1] !== void 0) {
        signupmodal_props.params = /*params*/ ctx[1];
    }
    signupmodal = new SignupModal({ props: signupmodal_props });
    binding_callbacks.push(function () { return bind(signupmodal, 'display', signupmodal_display_binding); });
    binding_callbacks.push(function () { return bind(signupmodal, 'params', signupmodal_params_binding); });
    return {
        c: function () {
            create_component(signupmodal.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(signupmodal, target, anchor);
            current = true;
        },
        p: function (ctx, dirty) {
            var signupmodal_changes = {};
            if (dirty & /*onSuccess*/ 4)
                signupmodal_changes.onSuccessSignup = /*onSuccess*/ ctx[2];
            if (!updating_display && dirty & /*display*/ 1) {
                updating_display = true;
                signupmodal_changes.display = /*display*/ ctx[0];
                add_flush_callback(function () { return updating_display = false; });
            }
            if (!updating_params && dirty & /*params*/ 2) {
                updating_params = true;
                signupmodal_changes.params = /*params*/ ctx[1];
                add_flush_callback(function () { return updating_params = false; });
            }
            signupmodal.$set(signupmodal_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(signupmodal.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(signupmodal.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(signupmodal, detaching);
        }
    };
}
// (87:32) 
function create_if_block_1(ctx) {
    var loginmodal;
    var updating_display;
    var updating_params;
    var current;
    function loginmodal_display_binding(value) {
        /*loginmodal_display_binding*/ ctx[9](value);
    }
    function loginmodal_params_binding(value) {
        /*loginmodal_params_binding*/ ctx[10](value);
    }
    var loginmodal_props = {
        closeModal: /*closeModal*/ ctx[5],
        onSuccessLogin: /*onSuccess*/ ctx[2]
    };
    if ( /*display*/ctx[0] !== void 0) {
        loginmodal_props.display = /*display*/ ctx[0];
    }
    if ( /*params*/ctx[1] !== void 0) {
        loginmodal_props.params = /*params*/ ctx[1];
    }
    loginmodal = new LoginModal({ props: loginmodal_props });
    binding_callbacks.push(function () { return bind(loginmodal, 'display', loginmodal_display_binding); });
    binding_callbacks.push(function () { return bind(loginmodal, 'params', loginmodal_params_binding); });
    return {
        c: function () {
            create_component(loginmodal.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(loginmodal, target, anchor);
            current = true;
        },
        p: function (ctx, dirty) {
            var loginmodal_changes = {};
            if (dirty & /*onSuccess*/ 4)
                loginmodal_changes.onSuccessLogin = /*onSuccess*/ ctx[2];
            if (!updating_display && dirty & /*display*/ 1) {
                updating_display = true;
                loginmodal_changes.display = /*display*/ ctx[0];
                add_flush_callback(function () { return updating_display = false; });
            }
            if (!updating_params && dirty & /*params*/ 2) {
                updating_params = true;
                loginmodal_changes.params = /*params*/ ctx[1];
                add_flush_callback(function () { return updating_params = false; });
            }
            loginmodal.$set(loginmodal_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(loginmodal.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(loginmodal.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(loginmodal, detaching);
        }
    };
}
// (85:2) {#if showLoader}
function create_if_block(ctx) {
    var loader;
    var current;
    loader = new Loader({});
    return {
        c: function () {
            create_component(loader.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(loader, target, anchor);
            current = true;
        },
        p: noop,
        i: function (local) {
            if (current)
                return;
            transition_in(loader.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(loader.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(loader, detaching);
        }
    };
}
// (127:6) {:else}
function create_else_block(ctx) {
    var profilemodal;
    var updating_display;
    var current;
    function profilemodal_display_binding(value) {
        /*profilemodal_display_binding*/ ctx[19](value);
    }
    var profilemodal_props = {
        closeModal: /*closeModal*/ ctx[5],
        onSuccessLogout: /*onSuccess*/ ctx[2],
        member: /*member*/ ctx[3]
    };
    if ( /*display*/ctx[0] !== void 0) {
        profilemodal_props.display = /*display*/ ctx[0];
    }
    profilemodal = new ProfileModal({ props: profilemodal_props });
    binding_callbacks.push(function () { return bind(profilemodal, 'display', profilemodal_display_binding); });
    return {
        c: function () {
            create_component(profilemodal.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(profilemodal, target, anchor);
            current = true;
        },
        p: function (ctx, dirty) {
            var profilemodal_changes = {};
            if (dirty & /*onSuccess*/ 4)
                profilemodal_changes.onSuccessLogout = /*onSuccess*/ ctx[2];
            if (dirty & /*member*/ 8)
                profilemodal_changes.member = /*member*/ ctx[3];
            if (!updating_display && dirty & /*display*/ 1) {
                updating_display = true;
                profilemodal_changes.display = /*display*/ ctx[0];
                add_flush_callback(function () { return updating_display = false; });
            }
            profilemodal.$set(profilemodal_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(profilemodal.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(profilemodal.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(profilemodal, detaching);
        }
    };
}
// (120:6) {#if matches}
function create_if_block_8(ctx) {
    var mobileprofilemodal;
    var updating_display;
    var current;
    function mobileprofilemodal_display_binding(value) {
        /*mobileprofilemodal_display_binding*/ ctx[18](value);
    }
    var mobileprofilemodal_props = {
        closeModal: /*closeModal*/ ctx[5],
        onSuccessLogout: /*onSuccess*/ ctx[2],
        member: /*member*/ ctx[3]
    };
    if ( /*display*/ctx[0] !== void 0) {
        mobileprofilemodal_props.display = /*display*/ ctx[0];
    }
    mobileprofilemodal = new MobileProfileModal({ props: mobileprofilemodal_props });
    binding_callbacks.push(function () { return bind(mobileprofilemodal, 'display', mobileprofilemodal_display_binding); });
    return {
        c: function () {
            create_component(mobileprofilemodal.$$.fragment);
        },
        m: function (target, anchor) {
            mount_component(mobileprofilemodal, target, anchor);
            current = true;
        },
        p: function (ctx, dirty) {
            var mobileprofilemodal_changes = {};
            if (dirty & /*onSuccess*/ 4)
                mobileprofilemodal_changes.onSuccessLogout = /*onSuccess*/ ctx[2];
            if (dirty & /*member*/ 8)
                mobileprofilemodal_changes.member = /*member*/ ctx[3];
            if (!updating_display && dirty & /*display*/ 1) {
                updating_display = true;
                mobileprofilemodal_changes.display = /*display*/ ctx[0];
                add_flush_callback(function () { return updating_display = false; });
            }
            mobileprofilemodal.$set(mobileprofilemodal_changes);
        },
        i: function (local) {
            if (current)
                return;
            transition_in(mobileprofilemodal.$$.fragment, local);
            current = true;
        },
        o: function (local) {
            transition_out(mobileprofilemodal.$$.fragment, local);
            current = false;
        },
        d: function (detaching) {
            destroy_component(mobileprofilemodal, detaching);
        }
    };
}
// (119:4) <MediaQuery query="(max-width: 520px)" let:matches>
function create_default_slot(ctx) {
    var current_block_type_index;
    var if_block;
    var if_block_anchor;
    var current;
    var if_block_creators = [create_if_block_8, create_else_block];
    var if_blocks = [];
    function select_block_type_1(ctx, dirty) {
        if ( /*matches*/ctx[24])
            return 0;
        return 1;
    }
    current_block_type_index = select_block_type_1(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
        c: function () {
            if_block.c();
            if_block_anchor = empty();
        },
        m: function (target, anchor) {
            if_blocks[current_block_type_index].m(target, anchor);
            insert(target, if_block_anchor, anchor);
            current = true;
        },
        p: function (ctx, dirty) {
            var previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type_1(ctx);
            if (current_block_type_index === previous_block_index) {
                if_blocks[current_block_type_index].p(ctx, dirty);
            }
            else {
                group_outros();
                transition_out(if_blocks[previous_block_index], 1, 1, function () {
                    if_blocks[previous_block_index] = null;
                });
                check_outros();
                if_block = if_blocks[current_block_type_index];
                if (!if_block) {
                    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
                    if_block.c();
                }
                else {
                    if_block.p(ctx, dirty);
                }
                transition_in(if_block, 1);
                if_block.m(if_block_anchor.parentNode, if_block_anchor);
            }
        },
        i: function (local) {
            if (current)
                return;
            transition_in(if_block);
            current = true;
        },
        o: function (local) {
            transition_out(if_block);
            current = false;
        },
        d: function (detaching) {
            if_blocks[current_block_type_index].d(detaching);
            if (detaching)
                detach(if_block_anchor);
        }
    };
}
function create_fragment(ctx) {
    var main;
    var current_block_type_index;
    var if_block;
    var current;
    var mounted;
    var dispose;
    var if_block_creators = [
        create_if_block,
        create_if_block_1,
        create_if_block_2,
        create_if_block_3,
        create_if_block_4,
        create_if_block_5,
        create_if_block_6,
        create_if_block_7
    ];
    var if_blocks = [];
    function select_block_type(ctx, dirty) {
        if ( /*showLoader*/ctx[4])
            return 0;
        if ( /*display*/ctx[0] === "login")
            return 1;
        if ( /*display*/ctx[0] === "signup")
            return 2;
        if ( /*display*/ctx[0] === "forgot_password")
            return 3;
        if ( /*display*/ctx[0] === "reset_password")
            return 4;
        if ( /*display*/ctx[0] === "reset_password_success")
            return 5;
        if ( /*display*/ctx[0] === "passwordless_token")
            return 6;
        if ( /*display*/ctx[0] === "profile")
            return 7;
        return -1;
    }
    if (~(current_block_type_index = select_block_type(ctx))) {
        if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    }
    return {
        c: function () {
            main = element("main");
            if (if_block)
                if_block.c();
            attr(main, "id", "msOverlay");
            attr(main, "class", "svelte-14go1rs");
        },
        m: function (target, anchor) {
            insert(target, main, anchor);
            if (~current_block_type_index) {
                if_blocks[current_block_type_index].m(main, null);
            }
            current = true;
            if (!mounted) {
                dispose = listen(main, "click", /*closeModalOutside*/ ctx[6]);
                mounted = true;
            }
        },
        p: function (ctx, _a) {
            var _b = __read(_a, 1), dirty = _b[0];
            var previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx);
            if (current_block_type_index === previous_block_index) {
                if (~current_block_type_index) {
                    if_blocks[current_block_type_index].p(ctx, dirty);
                }
            }
            else {
                if (if_block) {
                    group_outros();
                    transition_out(if_blocks[previous_block_index], 1, 1, function () {
                        if_blocks[previous_block_index] = null;
                    });
                    check_outros();
                }
                if (~current_block_type_index) {
                    if_block = if_blocks[current_block_type_index];
                    if (!if_block) {
                        if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
                        if_block.c();
                    }
                    else {
                        if_block.p(ctx, dirty);
                    }
                    transition_in(if_block, 1);
                    if_block.m(main, null);
                }
                else {
                    if_block = null;
                }
            }
        },
        i: function (local) {
            if (current)
                return;
            transition_in(if_block);
            current = true;
        },
        o: function (local) {
            transition_out(if_block);
            current = false;
        },
        d: function (detaching) {
            if (detaching)
                detach(main);
            if (~current_block_type_index) {
                if_blocks[current_block_type_index].d();
            }
            mounted = false;
            dispose();
        }
    };
}
function instance($$self, $$props, $$invalidate) {
    var _this = this;
    var showLoader;
    var _a = $$props.display, display = _a === void 0 ? "login" : _a; // or "signup", "forgot_password", "reset_password", "reset_password_success", "passwordless_token", and "profile"
    var onSuccess = $$props.onSuccess;
    var params = $$props.params;
    var appLoading = true;
    var memberLoading = display === "profile" ? true : false;
    var member;
    function setAppStore(data) {
        AppStore.update(function () { return data; });
        TextStore.set({ text: data.ssoText || {} });
    }
    function closeModal() {
        // hacky way to remove all components prior to removing overlay
        $$invalidate(7, appLoading = true);
        onSuccess({ type: "CLOSED" });
        var modal = document.querySelector("#msOverlay");
        if (modal) {
            modal.remove();
        }
    }
    function closeModalOutside(e) {
        if (e.target.id === "msOverlay") {
            closeModal();
        }
    }
    var getApp = function () { return __awaiter(_this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, window.$memberstackDom.getApp()];
                case 1:
                    data = (_a.sent()).data;
                    setAppStore(data);
                    return [2 /*return*/];
            }
        });
    }); };
    function checkApp() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(params && params.app)) return [3 /*break*/, 1];
                        setAppStore(params.app);
                        return [3 /*break*/, 3];
                    case 1:
                        console.log("No app specified - request it");
                        return [4 /*yield*/, getApp()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        $$invalidate(7, appLoading = false);
                        $$invalidate(4, showLoader = false);
                        return [2 /*return*/];
                }
            });
        });
    }
    var getMember = function () { return __awaiter(_this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, window.$memberstackDom.getCurrentMember()];
                case 1:
                    data = (_a.sent()).data;
                    $$invalidate(8, memberLoading = false);
                    $$invalidate(3, member = data);
                    if (display === "profile" && !data) {
                        closeModal();
                        throw new Error("Member not logged in");
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    onMount(function () {
        checkApp();
        if (display === "profile") {
            getMember();
        }
    });
    function loginmodal_display_binding(value) {
        display = value;
        $$invalidate(0, display);
    }
    function loginmodal_params_binding(value) {
        params = value;
        $$invalidate(1, params);
    }
    function signupmodal_display_binding(value) {
        display = value;
        $$invalidate(0, display);
    }
    function signupmodal_params_binding(value) {
        params = value;
        $$invalidate(1, params);
    }
    function passwordresetmodal_display_binding(value) {
        display = value;
        $$invalidate(0, display);
    }
    function passwordtokenmodal_display_binding(value) {
        display = value;
        $$invalidate(0, display);
    }
    function passwordsuccessmodal_display_binding(value) {
        display = value;
        $$invalidate(0, display);
    }
    function passwordlesstokenmodal_display_binding(value) {
        display = value;
        $$invalidate(0, display);
    }
    function passwordlesstokenmodal_params_binding(value) {
        params = value;
        $$invalidate(1, params);
    }
    function mobileprofilemodal_display_binding(value) {
        display = value;
        $$invalidate(0, display);
    }
    function profilemodal_display_binding(value) {
        display = value;
        $$invalidate(0, display);
    }
    $$self.$$set = function ($$props) {
        if ('display' in $$props)
            $$invalidate(0, display = $$props.display);
        if ('onSuccess' in $$props)
            $$invalidate(2, onSuccess = $$props.onSuccess);
        if ('params' in $$props)
            $$invalidate(1, params = $$props.params);
    };
    $$self.$$.update = function () {
        if ($$self.$$.dirty & /*appLoading, memberLoading*/ 384) {
            $$invalidate(4, showLoader = appLoading || memberLoading);
        }
    };
    return [
        display,
        params,
        onSuccess,
        member,
        showLoader,
        closeModal,
        closeModalOutside,
        appLoading,
        memberLoading,
        loginmodal_display_binding,
        loginmodal_params_binding,
        signupmodal_display_binding,
        signupmodal_params_binding,
        passwordresetmodal_display_binding,
        passwordtokenmodal_display_binding,
        passwordsuccessmodal_display_binding,
        passwordlesstokenmodal_display_binding,
        passwordlesstokenmodal_params_binding,
        mobileprofilemodal_display_binding,
        profilemodal_display_binding
    ];
}
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main(options) {
        var _this = _super.call(this) || this;
        init(_this, options, instance, create_fragment, safe_not_equal, { display: 0, onSuccess: 2, params: 1 }, add_css);
        return _this;
    }
    return Main;
}(SvelteComponent));
exports["default"] = Main;


/***/ }),

/***/ 1168:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hideModal = exports.openModal = exports.handleRedirect = exports.hideLoader = exports.showLoader = exports.showMessage = exports.initDefaultMessageBox = void 0;
var defaultMessageBox_js_1 = __webpack_require__(8029);
var main_dom_js_1 = __importDefault(__webpack_require__(2311));
var initDefaultMessageBox = function () {
    if (document.readyState !== "loading") {
        initMessageBoxes();
    }
    else {
        document.addEventListener("DOMContentLoaded", function (event) {
            initMessageBoxes();
        });
    }
    function initMessageBoxes() {
        (0, defaultMessageBox_js_1.initCSS)();
        (0, defaultMessageBox_js_1.addSuccessBox)();
        (0, defaultMessageBox_js_1.addErrorBox)();
    }
};
exports.initDefaultMessageBox = initDefaultMessageBox;
var showMessage = function (msg, isError) {
    // dont' show message if it's empty
    if (!msg)
        return;
    if (!document.querySelector("[data-ms-message='success']")) {
        (0, exports.initDefaultMessageBox)();
    }
    var messageBox;
    if (isError) {
        messageBox = document.querySelector("[data-ms-message='error']");
    }
    else {
        messageBox = document.querySelector("[data-ms-message='success']");
    }
    //set text
    var messageTextBox = messageBox.querySelector("[data-ms-message-text]");
    if (messageTextBox) {
        messageTextBox.innerHTML = msg;
    }
    messageBox.style.display = "block";
    //add event listener to close button
    var closeBtn = messageBox.querySelector("[data-ms-message-close]");
    closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener("click", function () {
        messageBox.style.display = "none";
    });
    setTimeout(function () {
        messageBox.style.display = "none";
    }, 7000);
};
exports.showMessage = showMessage;
var showLoader = function (element) {
    if (element) {
        element.style.display = "block";
        return;
    }
    var cssEl = document.createElement("style");
    var css = ".ms__loader { width: 100%; height: 100%; overflow: hidden; position: fixed; top: 0; left: 0; display: flex; justify-content: center; align-items: center; z-index: 10000000; } #msLoader path { fill: #007ace; }";
    cssEl.appendChild(document.createTextNode(css));
    document.head.appendChild(cssEl);
    var loaderHTML = '<?xml version="1.0"?><div class="ms__loader"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="msLoader" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50" style="enable-background: new 0 0 50 50; z-index:1000000" xml:space="preserve"><path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/></path></svg></div>';
    var div = document.createElement("div");
    div.setAttribute("data-ms-loader", "true");
    div.innerHTML = loaderHTML;
    if (document.readyState !== "loading") {
        document.body.appendChild(div);
    }
    else {
        document.addEventListener("DOMContentLoaded", function (event) {
            document.body.appendChild(div);
        });
    }
};
exports.showLoader = showLoader;
var hideLoader = function (element) {
    var _a;
    if (element) {
        element.style.display = "none";
        return;
    }
    (_a = document.querySelector("[data-ms-loader]")) === null || _a === void 0 ? void 0 : _a.remove();
};
exports.hideLoader = hideLoader;
var handleRedirect = function (redirect, redirectOverride) {
    if (redirectOverride)
        return (window.location.href = redirectOverride);
    if (redirect && window.location.pathname !== redirect)
        return (window.location.href = redirect);
};
exports.handleRedirect = handleRedirect;
var modal;
var openModal = function (type, params) {
    if (params === void 0) { params = {}; }
    return __awaiter(void 0, void 0, void 0, function () {
        var resolveModal, modalPromise;
        return __generator(this, function (_a) {
            modalPromise = new Promise(function (resolve) {
                resolveModal = resolve;
            });
            modal = new main_dom_js_1.default({
                target: document.body,
                props: {
                    display: type.toLowerCase(),
                    params: params,
                    onSuccess: resolveModal,
                },
            });
            return [2 /*return*/, modalPromise];
        });
    });
};
exports.openModal = openModal;
var hideModal = function () {
    try {
        modal === null || modal === void 0 ? void 0 : modal.$destroy();
    }
    catch (e) { }
    (0, exports.hideLoader)();
};
exports.hideModal = hideModal;


/***/ }),

/***/ 5535:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var methods_1 = __webpack_require__(1168);
var cookies_1 = __webpack_require__(9992);
var requests_1 = __webpack_require__(9078);
var auth_1 = __webpack_require__(2617);
var endpoints_1 = __webpack_require__(5140);
var captchaReadyPromise = new Promise(function (resolve) {
    if (typeof window !== "undefined") {
        //@ts-ignore
        window._hcaptchaReady = resolve;
    }
});
var methods = {
    openModal: methods_1.openModal,
    hideModal: methods_1.hideModal,
    _hideLoader: methods_1.hideLoader,
    _showLoader: methods_1.showLoader,
    _showMessage: methods_1.showMessage,
    getMemberCookie: cookies_1.getMemberToken,
    onAuthChange: auth_1.onAuthChange,
    _captchaReady: captchaReadyPromise,
};
function init(props) {
    if (props.useCookies)
        (0, cookies_1.setUseCookies)();
    (0, cookies_1.setMemberTokenIfAvailable)();
    var requests = (0, requests_1.initRequest)({
        publicKey: props.publicKey,
        appId: props.appId,
        sessionDurationDays: props.sessionDurationDays,
        token: (0, cookies_1.getMemberToken)(),
        domain: props.domain || endpoints_1.endpoints.API,
    });
    var allMethods = Object.assign(methods, requests);
    if (typeof window !== "undefined") {
        //@ts-ignore
        window.$memberstackDom = allMethods;
    }
    // init hcaptcha
    _initCaptchas();
    return allMethods;
}
function _initCaptchas() {
    return __awaiter(this, void 0, void 0, function () {
        var script;
        return __generator(this, function (_a) {
            // don't init if not in browser
            if (typeof window === "undefined")
                return [2 /*return*/];
            script = document.createElement("script");
            script.src = "https://js.hcaptcha.com/1/api.js?render=explicit&onload=_hcaptchaReady";
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
            return [2 /*return*/];
        });
    });
}
exports["default"] = { init: function (props) { return init(props); } };


/***/ }),

/***/ 9078:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initRequest = void 0;
var requests_1 = __webpack_require__(1930);
var requests_2 = __webpack_require__(1930);
var auth_1 = __webpack_require__(2617);
var cookies_1 = __webpack_require__(9992);
var endpoints_1 = __webpack_require__(5140);
var globalSessionDurationDays;
var addHeaders = function (options) { return (__assign({}, ((options === null || options === void 0 ? void 0 : options.token) && {
    Authorization: "Bearer ".concat(options.token),
}))); };
var promiseResolve, promiseReject;
var receiveMessage = function (event) {
    var _a;
    var data = event.data, origin = event.origin;
    if (API_ENDPOINT !== origin)
        return;
    if ((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.member) {
        (0, auth_1.setPersistedMember)(data.data.member);
        (0, cookies_1.setMemberToken)(data.data.tokens.accessToken, globalSessionDurationDays);
    }
    if (data === null || data === void 0 ? void 0 : data.error) {
        promiseReject(data.error);
    }
    promiseResolve(data);
};
var windowObjectReference = null;
var previousUrl = null;
var openSignInWindow = function (url, name) { return __awaiter(void 0, void 0, void 0, function () {
    var dualScreenLeft, dualScreenTop, width, height, systemZoom, left, top, strWindowFeatures;
    return __generator(this, function (_a) {
        // remove any existing event listeners
        window.removeEventListener('message', receiveMessage);
        dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
        dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
        width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
        systemZoom = width / window.screen.availWidth;
        left = (width - 600) / 2 / systemZoom + dualScreenLeft;
        top = (height - 700) / 2 / systemZoom + dualScreenTop;
        strWindowFeatures = "toolbar=no, menubar=no, width=".concat(600 / systemZoom, ", height=").concat(700 / systemZoom, ", top=").concat(top, ", left=").concat(left);
        if (windowObjectReference === null || windowObjectReference.closed) {
            windowObjectReference = window.open(url, name, strWindowFeatures);
        }
        else if (previousUrl !== url) {
            windowObjectReference = window.open(url, name, strWindowFeatures);
            windowObjectReference.focus();
        }
        else {
            windowObjectReference.focus();
        }
        window.addEventListener('message', function (event) { return receiveMessage(event); }, false);
        previousUrl = url;
        // close window if user navigates away
        window.addEventListener('beforeunload', function () {
            windowObjectReference === null || windowObjectReference === void 0 ? void 0 : windowObjectReference.close();
        });
        return [2 /*return*/, new Promise(function (resolve, reject) {
                promiseResolve = resolve;
                promiseReject = reject;
            })];
    });
}); };
var API_ENDPOINT;
var initRequest = function (_a) {
    var publicKey = _a.publicKey, appId = _a.appId, token = _a.token, domain = _a.domain, sessionDurationDays = _a.sessionDurationDays;
    var sendRequest = (0, requests_1.createRequestHandler)({
        publicKey: publicKey,
        token: token,
        customEndpoint: domain,
        appId: appId,
    }).sendRequest;
    // todo: this is a hack to get around the fact that we don't have a way to pass the custom domain to the iframe
    API_ENDPOINT = domain;
    globalSessionDurationDays = sessionDurationDays;
    return {
        getSecureContent: function (params) {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, sendRequest({
                                method: requests_2.HttpMethod.POST,
                                url: "/secure-content",
                                data: {
                                    contentId: params.contentId
                                },
                            })];
                        case 1:
                            data = _a.sent();
                            return [2 /*return*/, data];
                    }
                });
            });
        },
        signupWithProvider: function (params) {
            return __awaiter(this, void 0, void 0, function () {
                var customFields, plans, queryParams;
                return __generator(this, function (_a) {
                    customFields = encodeURIComponent(params.customFields ? JSON.stringify(params.customFields) : "{}");
                    plans = encodeURIComponent(params.plans ? JSON.stringify(params.plans) : "[]");
                    queryParams = new URLSearchParams(__assign(__assign({ provider: params.provider, customFields: customFields, plans: plans, appId: appId }, (publicKey && {
                        publicKey: publicKey,
                    })), { origin: window.location.hostname }));
                    return [2 /*return*/, openSignInWindow("".concat(domain, "/auth-provider/signup?").concat(queryParams), "signup")];
                });
            });
        },
        loginWithProvider: function (params) {
            return __awaiter(this, void 0, void 0, function () {
                var queryParams;
                return __generator(this, function (_a) {
                    queryParams = new URLSearchParams(__assign(__assign({ provider: params.provider, appId: appId }, (publicKey && {
                        publicKey: publicKey,
                    })), { origin: window.location.hostname }));
                    return [2 /*return*/, openSignInWindow("".concat(domain, "/auth-provider/login?").concat(queryParams), "login")];
                });
            });
        },
        connectProvider: function (params) {
            return __awaiter(this, void 0, void 0, function () {
                var queryParams;
                return __generator(this, function (_a) {
                    queryParams = new URLSearchParams(__assign(__assign({ provider: params.provider, appId: appId }, (publicKey && {
                        publicKey: publicKey,
                    })), { member: (0, cookies_1.getMemberToken)(), origin: window.location.hostname }));
                    //@ts-ignore
                    return [2 /*return*/, openSignInWindow("".concat(endpoints_1.endpoints.API, "/auth-provider/connect?").concat(queryParams), "connect")];
                });
            });
        },
        disconnectProvider: function (params) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, sendRequest({
                            method: requests_2.HttpMethod.POST,
                            url: "/member/disconnect-provider",
                            data: {
                                provider: params.provider,
                            }
                        })];
                });
            });
        },
        getAppAndMember: function (params) {
            return __awaiter(this, void 0, void 0, function () {
                var queryParams;
                return __generator(this, function (_a) {
                    queryParams = new URLSearchParams({
                        // @ts-ignore
                        includeSSOText: window === null || window === void 0 ? void 0 : window.ssoUI,
                    });
                    return [2 /*return*/, sendRequest({
                            method: requests_2.HttpMethod.GET,
                            url: "/app-member?".concat(queryParams),
                        })];
                });
            });
        },
        getApp: function () {
            return __awaiter(this, void 0, void 0, function () {
                var queryParams;
                return __generator(this, function (_a) {
                    queryParams = new URLSearchParams({
                        // @ts-ignore
                        includeSSOText: window === null || window === void 0 ? void 0 : window.ssoUI,
                    });
                    return [2 /*return*/, sendRequest({
                            method: requests_2.HttpMethod.GET,
                            url: "/app?".concat(queryParams),
                        })];
                });
            });
        },
        loginMemberEmailPassword: function (params, options) {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, sendRequest({
                                method: requests_2.HttpMethod.POST,
                                url: "/auth/login",
                                data: {
                                    email: params.email,
                                    password: params.password,
                                    options: options
                                },
                            })];
                        case 1:
                            data = _a.sent();
                            (0, auth_1.setPersistedMember)(data.data.member);
                            (0, cookies_1.setMemberToken)(data.data.tokens.accessToken, sessionDurationDays);
                            return [2 /*return*/, data];
                    }
                });
            });
        },
        sendMemberLoginPasswordlessEmail: function (params, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, sendRequest({
                                method: requests_2.HttpMethod.POST,
                                url: "/auth/passwordless/login/send",
                                data: {
                                    email: params.email,
                                },
                            })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        },
        sendMemberSignupPasswordlessEmail: function (
        // has same params and payload as sendMemberLoginPasswordlessEmail
        params, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, sendRequest({
                                method: requests_2.HttpMethod.POST,
                                url: "/auth/passwordless/signup/send",
                                data: {
                                    email: params.email,
                                },
                            })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        },
        loginMemberPasswordless: function (params, options
        // has same payload as loginMemberEmailPassword
        ) {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, sendRequest({
                                method: requests_2.HttpMethod.POST,
                                url: "/auth/passwordless/login",
                                data: {
                                    passwordlessToken: params.passwordlessToken,
                                    email: params.email,
                                    options: options
                                },
                            })];
                        case 1:
                            data = _a.sent();
                            (0, auth_1.setPersistedMember)(data.data.member);
                            (0, cookies_1.setMemberToken)(data.data.tokens.accessToken, sessionDurationDays);
                            return [2 /*return*/, data];
                    }
                });
            });
        },
        getPlan: function (params) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, sendRequest({
                            method: requests_2.HttpMethod.GET,
                            url: "/app/plans/".concat(params.planId),
                        })];
                });
            });
        },
        getPlans: function () {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, sendRequest({
                                method: requests_2.HttpMethod.GET,
                                url: "/app",
                            })];
                        case 1:
                            data = (_a.sent()).data;
                            return [2 /*return*/, {
                                    data: data.plans
                                }];
                    }
                });
            });
        },
        getRestrictedUrlGroups: function () {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, sendRequest({
                                method: requests_2.HttpMethod.GET,
                                url: "/app",
                            })];
                        case 1:
                            data = (_a.sent()).data;
                            return [2 /*return*/, {
                                    data: data.contentGroups
                                }];
                    }
                });
            });
        },
        getCurrentMember: function (options) {
            return __awaiter(this, void 0, void 0, function () {
                function setMember() {
                    return __awaiter(this, void 0, void 0, function () {
                        var data;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, getMemberRequest];
                                case 1:
                                    data = _a.sent();
                                    (0, auth_1.updatePersistedMember)(data.data);
                                    return [2 /*return*/];
                            }
                        });
                    });
                }
                var getMemberRequest, member;
                return __generator(this, function (_a) {
                    getMemberRequest = sendRequest({
                        method: requests_2.HttpMethod.GET,
                        url: "/member?".concat(Math.floor(1000 + Math.random() * 9000)),
                        headers: addHeaders(options),
                    });
                    // temp hacky solution
                    setMember();
                    if ((options === null || options === void 0 ? void 0 : options.useCache) === true) {
                        member = (0, auth_1.getPersistedMember)();
                        return [2 /*return*/, { data: member }];
                    }
                    else {
                        return [2 /*return*/, getMemberRequest];
                    }
                    return [2 /*return*/];
                });
            });
        },
        getMemberJSON: function (options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, sendRequest({
                            method: requests_2.HttpMethod.GET,
                            url: "/member/json",
                            headers: addHeaders(options),
                        })];
                });
            });
        },
        updateMemberJSON: function (params, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, sendRequest({
                            method: requests_2.HttpMethod.POST,
                            url: "/member/json",
                            data: {
                                json: params.json,
                            },
                            headers: addHeaders(options),
                        })];
                });
            });
        },
        addPlan: function (params, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, sendRequest({
                            method: requests_2.HttpMethod.POST,
                            url: "/member/plans/add",
                            data: {
                                planId: params.planId,
                            },
                            headers: addHeaders(options),
                        })];
                });
            });
        },
        purchasePlansWithCheckout: function (params, options) {
            return __awaiter(this, void 0, void 0, function () {
                function getRedirectURL(URL) {
                    // default to current page
                    var redirectUrl = window.location.href;
                    var urlParam = URL;
                    if (urlParam) {
                        // check if the url is relative or absolute
                        if (urlParam.indexOf("http://") === 0 || urlParam.indexOf("https://") === 0) {
                            redirectUrl = urlParam;
                        }
                        else {
                            redirectUrl = window.location.origin + urlParam;
                        }
                    }
                    return redirectUrl;
                }
                var success_url, cancel_url, request;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            success_url = params.successUrl ? getRedirectURL(params.successUrl) : undefined;
                            cancel_url = getRedirectURL(params.cancelUrl);
                            return [4 /*yield*/, sendRequest({
                                    method: requests_2.HttpMethod.POST,
                                    url: "/member/plans/create-checkout-session",
                                    data: {
                                        priceId: params.priceId,
                                        //window.location requires dom
                                        success_url: success_url,
                                        cancel_url: cancel_url,
                                        origin_url: window.location.href,
                                    },
                                    headers: addHeaders(options),
                                })];
                        case 1:
                            request = _a.sent();
                            if (params.autoRedirect === false) {
                                return [2 /*return*/, request];
                            }
                            window.location.href = request.data.url;
                            return [2 /*return*/];
                    }
                });
            });
        },
        // used for plan updates
        launchStripeCustomerPortal: function (params, options) {
            return __awaiter(this, void 0, void 0, function () {
                function getRedirectURL(URL) {
                    // default to current page
                    var redirectUrl = window.location.href;
                    var urlParam = URL;
                    if (urlParam) {
                        // check if the url is relative or absolute
                        if (urlParam.indexOf("http://") === 0 || urlParam.indexOf("https://") === 0) {
                            redirectUrl = urlParam;
                        }
                        else {
                            redirectUrl = window.location.origin + urlParam;
                        }
                    }
                    return redirectUrl;
                }
                var returnUrl, request;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            returnUrl = (params === null || params === void 0 ? void 0 : params.returnUrl) ? getRedirectURL(params.returnUrl) : undefined;
                            return [4 /*yield*/, sendRequest({
                                    method: requests_2.HttpMethod.POST,
                                    url: "/member/create-billing-portal-session",
                                    data: __assign({ 
                                        //window.location requires dom
                                        return_url: returnUrl, origin_url: window.location.href }, (params && {
                                        priceIds: params.priceIds,
                                        configuration: params.configuration
                                    })),
                                    headers: addHeaders(options),
                                })];
                        case 1:
                            request = _a.sent();
                            if ((params === null || params === void 0 ? void 0 : params.autoRedirect) === false) {
                                return [2 /*return*/, request];
                            }
                            window.location.href = request.data.url;
                            return [2 /*return*/];
                    }
                });
            });
        },
        removePlan: function (params, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, sendRequest({
                            method: requests_2.HttpMethod.POST,
                            url: "/member/plans/remove",
                            data: {
                                planId: params.planId,
                            },
                            headers: addHeaders(options),
                        })];
                });
            });
        },
        updateMember: function (params, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, sendRequest({
                            method: requests_2.HttpMethod.POST,
                            url: "/member",
                            data: __assign({}, (params.customFields && { customFields: params.customFields })),
                            headers: addHeaders(options),
                        })];
                });
            });
        },
        updateMemberAuth: function (params, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, sendRequest({
                            method: requests_2.HttpMethod.POST,
                            url: "/member-auth",
                            data: __assign(__assign(__assign({}, (params.email && { email: params.email })), (params.oldPassword && { oldPassword: params.oldPassword })), (params.newPassword && { newPassword: params.newPassword })),
                            headers: addHeaders(options),
                        })];
                });
            });
        },
        setPassword: function (params, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, sendRequest({
                            method: requests_2.HttpMethod.POST,
                            url: "/member/set-password",
                            data: {
                                password: params.password,
                            },
                            headers: addHeaders(options),
                        })];
                });
            });
        },
        signupMemberPasswordless: function (params, options) {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, sendRequest({
                                method: requests_2.HttpMethod.POST,
                                url: "/auth/signup?isPasswordless=true",
                                data: __assign(__assign(__assign({ email: params.email, customFields: params.customFields, passwordlessToken: params.passwordlessToken, metaData: params.metaData }, (params.plans && { plans: params.plans })), { 
                                    //internal use only
                                    origin_domain: window.location.origin, options: options }), (((_a = window.Rewardful) === null || _a === void 0 ? void 0 : _a.referral) && {
                                    rewardfulData: {
                                        // @ts-ignore
                                        referral: window.Rewardful.referral,
                                        // @ts-ignore
                                        coupon: (_b = window.Rewardful.coupon) === null || _b === void 0 ? void 0 : _b.id,
                                    }
                                })),
                            })];
                        case 1:
                            data = _c.sent();
                            (0, auth_1.setPersistedMember)(data.data.member);
                            (0, cookies_1.setMemberToken)(data.data.tokens.accessToken, sessionDurationDays);
                            return [2 /*return*/, data];
                    }
                });
            });
        },
        signupMemberEmailPassword: function (params, options) {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, sendRequest({
                                method: requests_2.HttpMethod.POST,
                                url: "/auth/signup",
                                data: __assign(__assign(__assign({ email: params.email, password: params.password, customFields: params.customFields, metaData: params.metaData, captchaToken: params.captchaToken }, (params.plans && { plans: params.plans })), { 
                                    //internal use only
                                    origin_domain: window.location.origin, options: options }), (((_a = window.Rewardful) === null || _a === void 0 ? void 0 : _a.referral) && {
                                    rewardfulData: {
                                        // @ts-ignore
                                        referral: window.Rewardful.referral,
                                        // @ts-ignore
                                        coupon: (_b = window.Rewardful.coupon) === null || _b === void 0 ? void 0 : _b.id,
                                    }
                                })),
                            })];
                        case 1:
                            data = _c.sent();
                            (0, auth_1.setPersistedMember)(data.data.member);
                            (0, cookies_1.setMemberToken)(data.data.tokens.accessToken, sessionDurationDays);
                            return [2 /*return*/, data];
                    }
                });
            });
        },
        updateMemberProfileImage: function (params) {
            return __awaiter(this, void 0, void 0, function () {
                var formData;
                return __generator(this, function (_a) {
                    if (params.profileImage) {
                        formData = new FormData();
                        formData.append('profileImage', params.profileImage);
                        return [2 /*return*/, sendRequest({
                                method: requests_2.HttpMethod.POST,
                                url: "/member/profile-image",
                                data: formData,
                                contentType: 'multipart/form-data',
                            })];
                    }
                    return [2 /*return*/];
                });
            });
        },
        sendMemberVerificationEmail: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, sendRequest({
                            method: requests_2.HttpMethod.POST,
                            url: "/auth/send-email-verification",
                            data: {
                                //internal use only
                                origin_domain: window.location.origin,
                            },
                        })];
                });
            });
        },
        sendMemberResetPasswordEmail: function (params) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, sendRequest({
                            method: requests_2.HttpMethod.POST,
                            url: "/auth/send-reset-password-email",
                            data: {
                                email: params.email,
                            },
                        })];
                });
            });
        },
        resetMemberPassword: function (params) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, sendRequest({
                            method: requests_2.HttpMethod.POST,
                            url: "/auth/reset-password",
                            data: {
                                token: params.token,
                                newPassword: params.newPassword,
                            },
                        })];
                });
            });
        },
        logout: function (options) {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, sendRequest({
                                method: requests_2.HttpMethod.POST,
                                url: "/member/logout",
                                headers: addHeaders(options),
                            })];
                        case 1:
                            data = _a.sent();
                            (0, auth_1.unsetPersistedMember)();
                            return [2 /*return*/, data];
                    }
                });
            });
        },
    };
};
exports.initRequest = initRequest;


/***/ }),

/***/ 1930:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createRequestHandler = exports.HttpHeaders = exports.HttpMethod = void 0;
var axios_1 = __importDefault(__webpack_require__(8687));
var endpoints_1 = __webpack_require__(5140);
var cookies_1 = __webpack_require__(9992);
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["POST"] = "POST";
    HttpMethod["GET"] = "GET";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
var HttpHeaders;
(function (HttpHeaders) {
    HttpHeaders["AUTHORIZATION"] = "Authorization";
    HttpHeaders["API_KEY"] = "X-API-Key";
    HttpHeaders["APP_ID"] = "X-APP-ID";
    HttpHeaders["API_VERSION"] = "X-API-Version";
    HttpHeaders["USER_AGENT"] = "X-User-Agent";
})(HttpHeaders = exports.HttpHeaders || (exports.HttpHeaders = {}));
var createRequestHandler = function (_a) {
    var publicKey = _a.publicKey, appId = _a.appId, token = _a.token, customEndpoint = _a.customEndpoint;
    return {
        sendRequest: function (data, options) { return __awaiter(void 0, void 0, void 0, function () {
            var url, memberToken, authHeader, formattedUrl, res, e_1;
            var _a, _b, _c;
            var _d, _e, _f, _g, _h, _j, _k, _l;
            return __generator(this, function (_m) {
                switch (_m.label) {
                    case 0:
                        _m.trys.push([0, 2, , 3]);
                        url = data.url;
                        memberToken = (0, cookies_1.getMemberToken)();
                        authHeader = [
                            (_e = (_d = data.headers) === null || _d === void 0 ? void 0 : _d["Authorization"]) === null || _e === void 0 ? void 0 : _e.replace("Bearer ", ""),
                            memberToken,
                            options === null || options === void 0 ? void 0 : options.token,
                        ].find(function (x) { return x; });
                        formattedUrl = "".concat(customEndpoint || endpoints_1.endpoints.API).concat(url);
                        return [4 /*yield*/, (0, axios_1.default)({
                                method: data.method,
                                data: data.data,
                                url: formattedUrl,
                                headers: __assign(__assign(__assign(__assign(__assign({}, (authHeader && { authorization: "Bearer ".concat(authHeader) })), (publicKey && (_a = {}, _a[HttpHeaders.API_KEY] = publicKey, _a))), (appId && (_b = {}, _b[HttpHeaders.APP_ID] = appId, _b))), (_c = {}, _c[HttpHeaders.USER_AGENT] = "@memberstack/client@1.2.0", _c)), (data.contentType && { "Content-Type": data.contentType })),
                                withCredentials: true,
                            })];
                    case 1:
                        res = _m.sent();
                        if ((_f = res === null || res === void 0 ? void 0 : res.headers) === null || _f === void 0 ? void 0 : _f["ms-mid"]) {
                            token = res.headers["ms-mid"];
                        }
                        if ((_g = res === null || res === void 0 ? void 0 : res.data) === null || _g === void 0 ? void 0 : _g.error) {
                            if (res.data.error.name === "JsonWebTokenError") {
                                throw {
                                    code: "client/invalid-token",
                                    message: "An invalid token has been provided. Please make sure the token is valid.",
                                };
                            }
                            throw (_h = res.data) === null || _h === void 0 ? void 0 : _h.error;
                        }
                        return [2 /*return*/, res === null || res === void 0 ? void 0 : res.data];
                    case 2:
                        e_1 = _m.sent();
                        if (!e_1.response)
                            throw e_1;
                        throw ((_k = (_j = e_1.response) === null || _j === void 0 ? void 0 : _j.data) === null || _k === void 0 ? void 0 : _k.error) || ((_l = e_1.response) === null || _l === void 0 ? void 0 : _l.data);
                    case 3: return [2 /*return*/];
                }
            });
        }); },
    };
};
exports.createRequestHandler = createRequestHandler;


/***/ }),

/***/ 9992:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setMemberTokenIfAvailable = exports.getMemberToken = exports.removeMemberToken = exports.setMemberToken = exports.setUseCookies = void 0;
var js_cookie_1 = __importDefault(__webpack_require__(4618));
var memberAuthTokenName = "_ms-mid";
function isLocalStorageAvailable() {
    try {
        localStorage.setItem("test", "test");
        localStorage.removeItem("test");
        return true;
    }
    catch (e) {
        return false;
    }
}
var localStorageAvailable = isLocalStorageAvailable();
var useCookies = false;
var setUseCookies = function () {
    useCookies = true;
};
exports.setUseCookies = setUseCookies;
var setMemberToken = function (token, expires) {
    if (localStorageAvailable && !useCookies) {
        localStorage.setItem(memberAuthTokenName, token);
    }
    else {
        js_cookie_1.default.set(memberAuthTokenName, token, {
            expires: (expires && Number(expires)) || 14,
            sameSite: "strict",
        });
    }
};
exports.setMemberToken = setMemberToken;
var removeMemberToken = function () {
    if (localStorageAvailable) {
        localStorage.removeItem(memberAuthTokenName);
    }
    js_cookie_1.default.set(memberAuthTokenName, "", {
        expires: -1,
        sameSite: "strict",
    });
};
exports.removeMemberToken = removeMemberToken;
var getMemberToken = function () {
    if (localStorageAvailable && !useCookies) {
        var memAuthToken = localStorage.getItem(memberAuthTokenName);
        if (memAuthToken)
            return memAuthToken;
    }
    // todo: it's safe to make this an else in 2 weeks
    // fallback to cookie -> this is to prevent folks from having to log in again
    return js_cookie_1.default.get(memberAuthTokenName);
};
exports.getMemberToken = getMemberToken;
var setMemberTokenIfAvailable = function () {
    if (typeof window !== "undefined") {
        var urlParams = new URLSearchParams(window.location.search);
        var memberToken = urlParams.get("memberToken");
        if (memberToken)
            (0, exports.setMemberToken)(memberToken);
    }
};
exports.setMemberTokenIfAvailable = setMemberTokenIfAvailable;


/***/ }),

/***/ 8029:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initCSS = exports.addErrorBox = exports.addSuccessBox = void 0;
var closeIcon;
if (typeof window !== "undefined") {
    closeIcon = document.createElement("div");
    closeIcon.setAttribute("id", "ms-status-close");
    closeIcon.setAttribute("data-ms-message-close", "");
    closeIcon.innerHTML = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z\" fill=\"white\"/></svg>";
}
var addSuccessBox = function () {
    var successStatusIcon = document.createElement("div");
    successStatusIcon.setAttribute("id", "ms-status-icon");
    successStatusIcon.innerHTML = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"10\" cy=\"10\" r=\"10\" fill=\"#62d37f\"/><path d=\"M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm4.59-12.42L8 12.17 5.41 9.59 4 11l4 4 8-8-1.41-1.42Z\" fill=\"#fff\"/></svg>";
    var successHTML = "<div data-ms-message class=\"ms-error-message\">\n\t\t".concat(successStatusIcon.outerHTML, "\n\t\t<div id=\"ms-message\" data-ms-message-text></div>\n\t\t").concat(closeIcon.outerHTML, "\n\t\t</div>");
    var successdiv = document.createElement("div");
    successdiv.setAttribute("data-ms-message", "success");
    successdiv.innerHTML = successHTML;
    successdiv.style.display = "none";
    document.body.appendChild(successdiv);
};
exports.addSuccessBox = addSuccessBox;
var addErrorBox = function () {
    var errorStatusIcon = document.createElement("div");
    errorStatusIcon.setAttribute("id", "ms-status-icon");
    errorStatusIcon.innerHTML = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z\" fill=\"#E40023\"/></svg>";
    var errorHTML = "<div data-ms-message class=\"ms-error-message\">\n\t\t".concat(errorStatusIcon.outerHTML, "\n\t\t<div id=\"ms-message\" data-ms-message-text></div>\n\t\t").concat(closeIcon.outerHTML, "\n\t\t</div>");
    var errordiv = document.createElement("div");
    errordiv.setAttribute("data-ms-message", "error");
    errordiv.innerHTML = errorHTML;
    errordiv.style.display = "none";
    document.body.appendChild(errordiv);
};
exports.addErrorBox = addErrorBox;
var initCSS = function () {
    var cssEl = document.createElement("style");
    var css = "\n\t\t@keyframes fadeIn {\n\t\t\t0% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t\t100% {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t}\n\t\t.ms-error-message { \n\t\t\t\tposition: fixed;\n\t\t\t\tleft: 50%;\n\t\t\t\tbottom: 3%;\n\t\t\t\ttransform: translate(-50%, -50%);\n\t\t\t\tmargin: 0 auto;\n\t\t\t\tz-index: 10000000; \n\t\t\t\tdisplay: flex; \n\t\t\t\talign-items: center;\n\t\t\t\tpadding: 12px 16px;\n\t\t\t\tborder-radius: 8px; \n\t\t\t\tbackground-color: #0A0A0A; \n\t\t\t\tcolor: #fff; \n\t\t\t\tfont-size: 16.8px; \n\t\t\t\tline-height: 28px; \n\t\t\t\tfont-weight: 500; \n\t\t\t\ttransform-origin: center;\n\t\t\t\tanimation: fadeIn 0.2s ease-in;\n\t\t\t\t-webkit-animation: fadeIn 0.2s ease-in;\n\t\t\t\t-moz-animation: fadeIn 0.2s ease-in;\n\t\t\t\t-o-animation: fadeIn 0.2s ease-in;\n\t\t\t\t-ms-animation: fadeIn 0.2s ease-in;\n\t\t\t}\n\t\t\t#ms-status-icon {\n\t\t\t\twidth: 20px;\n\t\t\t\theight: 20px;\n\t\t\t\tmargin-right: 12px;\n\t\t\t\t}\n\t\t\t\t#ms-status-close {\n\t\t\t\t\tmargin-left: 20px;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t}\n\t\t\t\t\t#ms-status-close svg {\n\t\t\t\t\t\theight: 12px;\n\t\t\t\t\t}";
    cssEl.setAttribute("data-ms-style", "");
    cssEl.appendChild(document.createTextNode(css));
    document.head.appendChild(cssEl);
};
exports.initCSS = initCSS;


/***/ }),

/***/ 2866:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";



if (true) {
  module.exports = __webpack_require__(3641)
} else {}


/***/ }),

/***/ 3641:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
function t(t){return t&&"object"==typeof t&&"default"in t?t.default:t}__webpack_unused_export__ = ({value:!0});var e=t(__webpack_require__(8038)),r=t(__webpack_require__(7229)),n=e.createContext({memberstack:null});function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},u=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=Object.create((e&&e.prototype instanceof p?e:p).prototype),u=new I(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(o,u){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw u;return{value:void 0,done:!0}}for(r.method=o,r.arg=u;;){var a=r.delegate;if(a){var i=b(a,r);if(i){if(i===f)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,u),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function p(){}function d(){}function h(){}var v={};c(v,u,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(L([])));m&&m!==e&&r.call(m,u)&&(v=m);var g=h.prototype=p.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var n;this._invoke=function(o,u){function a(){return new e((function(n,a){!function n(o,u,a,i){var c=l(t[o],t,u);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,i)}),(function(t){n("throw",t,a,i)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,i)}))}i(c.arg)}(o,u,n,a)}))}return n=n?n.then(a,a):a()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function L(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:M}}function M(){return{value:void 0,done:!0}}return d.prototype=h,c(g,"constructor",h),c(h,"constructor",d),d.displayName=c(h,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(x.prototype),c(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,u){void 0===u&&(u=Promise);var a=new x(s(e,r,n,o),u);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(g),c(g,i,"Generator"),c(g,u,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var u=this.tryEntries[o],a=u.completion;if("root"===u.tryLoc)return n("end");if(u.tryLoc<=this.prev){var i=r.call(u,"catchLoc"),c=r.call(u,"finallyLoc");if(i&&c){if(this.prev<u.catchLoc)return n(u.catchLoc,!0);if(this.prev<u.finallyLoc)return n(u.finallyLoc)}else if(i){if(this.prev<u.catchLoc)return n(u.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return n(u.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var u=o;break}}u&&("break"===t||"continue"===t)&&u.tryLoc<=e&&e<=u.finallyLoc&&(u=null);var a=u?u.completion:{};return a.type=t,a.arg=e,u?(this.method="next",this.next=u.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function u(t,e,r,n,o,u,a){try{var i=t[u](a),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){u(a,n,o,i,c,"next",t)}function c(t){u(a,n,o,i,c,"throw",t)}i(void 0)}))}}function i(){return(i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var c,s,l=function(){var t=e.useContext(n).memberstack;if(!t)throw new Error("useMemberstack can only be used within <MemberstackProvider>");return t};!function(t){t.LOADING="LOADING",t.UNAUTHORIZED="UNAUTHORIZED",t.AUTHORIZED="AUTHORIZED"}(c||(c={})),function(t){t.LOADING="LOADING",t.UNAUTHORIZED="UNAUTHORIZED",t.AUTHORIZED="AUTHORIZED"}(s||(s={}));var f,p=function(){var t,r=l(),n=e.useState(null),u=n[0],c=n[1];function f(t){c(t?{userId:t.id,status:s.AUTHORIZED}:{userId:null,status:s.UNAUTHORIZED})}function p(){return(p=a(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.getCurrentMember();case 2:f(t.sent.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return e.useEffect((function(){var t,e=!0;return e&&(t=null==r?void 0:r.onAuthChange(f),function(){p.apply(this,arguments)}()),function(){var r;e=!1,null==(r=t)||r.unsubscribe()}}),[]),i({},u,{isLoggedIn:(null==u?void 0:u.status)===s.AUTHORIZED,getToken:function(){return r.getMemberCookie()},signOut:(t=a(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.logout();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),function(){return t.apply(this,arguments)})})},d=function(t,e){var r=(void 0===e?{}:e).includeFalseVals,n=void 0!==r&&r;return Object.entries(t).filter((function(t){var e=t[1];return n?null!=e:e})).reduce((function(t,e){var r;return i({},t,((r={})[e[0]]=e[1],r))}),{})},h=function(){var t=l(),r=e.useRef(null),n=e.useState(!1)[1];return{openModal:function(e){return r.current=d(i({},r.current,{type:e.type,planId:e.planId})),n(!0),t.openModal(r.current.type,d({planId:r.current.planId}))},hideModal:function(){return n(!1),t.hideModal()}}};(f=exports.w8||(exports.w8={})).LOGIN="LOGIN",f.SIGNUP="SIGNUP",f.FORGOT_PASSWORD="FORGOT_PASSWORD",f.RESET_PASSWORD="RESET_PASSWORD",f.PROFILE="PROFILE";var v=function(t){return function(r){var n=h(),u=n.openModal,c=n.hideModal,s=null==r?void 0:r.onSuccess,l=null==r?void 0:r.onError,f=function(){var e=a(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u(i({},r,{type:t}));case 3:n=e.sent.data,null==s||s({data:n,type:t}),c(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),null==l||l(e.t0),c();case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return e.useEffect((function(){f()}),[]),null}},y=v(exports.w8.LOGIN),m=v(exports.w8.SIGNUP),g=v(exports.w8.FORGOT_PASSWORD),w=v(exports.w8.RESET_PASSWORD),x=v(exports.w8.PROFILE),b=function(t){return function(r){var n=p(),o=e.useMemo((function(){return t(n)}),[n]);return n.status===s.LOADING?r.fallback||null:o?r.children:null}},O=b((function(t){return t.isLoggedIn})),E=b((function(t){return!t.isLoggedIn}));console.log("Memberstack React has initialized"),__webpack_unused_export__=g,__webpack_unused_export__=O,__webpack_unused_export__=E,__webpack_unused_export__=function(t){var r=l(),n=e.useState(c.LOADING),u=n[0],i=n[1];if(!r)throw new Error("<MemberstackProtected> can only be used within <MemberstackProvider>");if(t.onUnauthorized&&"function"!=typeof t.onUnauthorized&&!e.isValidElement(t.onUnauthorized))throw new Error("onUnauthorized must be a function or a valid React element");function s(e){if(e){var r=t.allow||{},n=r.permissions,o=r.plans;null!=n&&n.length&&!n.some((function(t){var r;return null==e||null==(r=e.permissions)?void 0:r.includes(t)}))||null!=o&&o.length&&!o.some((function(t){var r;return null==e||null==(r=e.planConnections)?void 0:r.find((function(e){return e.planId===t}))}))?i(c.UNAUTHORIZED):i(e?c.AUTHORIZED:c.UNAUTHORIZED)}else i(c.UNAUTHORIZED)}function f(){return(f=a(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.getCurrentMember();case 2:s(t.sent.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}switch(e.useEffect((function(){var t,e=!0;return e&&(t=null==r?void 0:r.onAuthChange(s),function(){f.apply(this,arguments)}()),function(){e=!1,t.unsubscribe()}}),[]),u){case c.LOADING:return t.fallback||null;case c.AUTHORIZED:return t.children;case c.UNAUTHORIZED:return e.isValidElement(t.onUnauthorized)?t.onUnauthorized:("function"==typeof t.onUnauthorized&&t.onUnauthorized(),null);default:return null}},exports.MemberstackProvider=function(t){var o=r.init(t.config);return e.useEffect((function(){var e=setInterval((function(){var r,n;null!=(r=window.__MSDOM)&&r.load||document.getElementById("_ms-iframe")?clearInterval(e):null==(n=window.__MSDOM)||n.load({publicKey:t.config.publicKey})}),200);return function(){return clearInterval(e)}}),[]),e.createElement(n.Provider,{value:{memberstack:o}},t.children)},__webpack_unused_export__=x,__webpack_unused_export__=w,__webpack_unused_export__=y,__webpack_unused_export__=m,__webpack_unused_export__=p,__webpack_unused_export__=function(){var t=l();return function(){var e=a(o().mark((function e(r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.purchasePlansWithCheckout(d({priceId:r.priceId,cancelUrl:r.cancelUrl,successUrl:r.successUrl,autoRedirect:r.autoRedirect},{includeFalseVals:!0}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},__webpack_unused_export__=function(t){var e=l();return function(){var r=a(o().mark((function r(){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.launchStripeCustomerPortal(d({priceIds:t.priceIds,returnUrl:t.returnUrl,autoRedirect:t.autoRedirect},{includeFalseVals:!0}));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}()},__webpack_unused_export__=function(){var t,r,n,u,i=l(),c=e.useState(null),s=c[0],f=c[1],p=e.useState(null),d=p[0],h=p[1];function v(){return(v=a(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.getCurrentMember();case 3:return f(t.sent.data||null),t.next=8,i.getMemberJSON();case 8:h((e=t.sent.data)?null==e?void 0:e.json:null),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}return e.useEffect((function(){!function(){v.apply(this,arguments)}()}),[]),{member:s,memberJSON:d,updateEmail:(u=a(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.updateMemberAuth({email:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),function(t){return u.apply(this,arguments)}),updatePassword:(n=a(o().mark((function t(e,r){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.updateMemberAuth({oldPassword:e,newPassword:r});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),function(t,e){return n.apply(this,arguments)}),updateCustomFields:(r=a(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.updateMember({customFields:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)}),updateMemberJSON:(t=a(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.updateMemberJSON({json:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),function(e){return t.apply(this,arguments)})}},exports.useMemberstack=l,exports.useMemberstackModal=h;
//# sourceMappingURL=react.cjs.production.min.js.map


/***/ }),

/***/ 2353:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports =
{
  parallel      : __webpack_require__(4668),
  serial        : __webpack_require__(3339),
  serialOrdered : __webpack_require__(9869)
};


/***/ }),

/***/ 1677:
/***/ ((module) => {

// API
module.exports = abort;

/**
 * Aborts leftover active jobs
 *
 * @param {object} state - current state object
 */
function abort(state)
{
  Object.keys(state.jobs).forEach(clean.bind(state));

  // reset leftover jobs
  state.jobs = {};
}

/**
 * Cleans up leftover job by invoking abort function for the provided job id
 *
 * @this  state
 * @param {string|number} key - job id to abort
 */
function clean(key)
{
  if (typeof this.jobs[key] == 'function')
  {
    this.jobs[key]();
  }
}


/***/ }),

/***/ 2792:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defer = __webpack_require__(6403);

// API
module.exports = async;

/**
 * Runs provided callback asynchronously
 * even if callback itself is not
 *
 * @param   {function} callback - callback to invoke
 * @returns {function} - augmented callback
 */
function async(callback)
{
  var isAsync = false;

  // check if async happened
  defer(function() { isAsync = true; });

  return function async_callback(err, result)
  {
    if (isAsync)
    {
      callback(err, result);
    }
    else
    {
      defer(function nextTick_callback()
      {
        callback(err, result);
      });
    }
  };
}


/***/ }),

/***/ 6403:
/***/ ((module) => {

module.exports = defer;

/**
 * Runs provided function on next iteration of the event loop
 *
 * @param {function} fn - function to run
 */
function defer(fn)
{
  var nextTick = typeof setImmediate == 'function'
    ? setImmediate
    : (
      typeof process == 'object' && typeof process.nextTick == 'function'
      ? process.nextTick
      : null
    );

  if (nextTick)
  {
    nextTick(fn);
  }
  else
  {
    setTimeout(fn, 0);
  }
}


/***/ }),

/***/ 8617:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var async = __webpack_require__(2792)
  , abort = __webpack_require__(1677)
  ;

// API
module.exports = iterate;

/**
 * Iterates over each job object
 *
 * @param {array|object} list - array or object (named list) to iterate over
 * @param {function} iterator - iterator to run
 * @param {object} state - current job status
 * @param {function} callback - invoked when all elements processed
 */
function iterate(list, iterator, state, callback)
{
  // store current index
  var key = state['keyedList'] ? state['keyedList'][state.index] : state.index;

  state.jobs[key] = runJob(iterator, key, list[key], function(error, output)
  {
    // don't repeat yourself
    // skip secondary callbacks
    if (!(key in state.jobs))
    {
      return;
    }

    // clean up jobs
    delete state.jobs[key];

    if (error)
    {
      // don't process rest of the results
      // stop still active jobs
      // and reset the list
      abort(state);
    }
    else
    {
      state.results[key] = output;
    }

    // return salvaged results
    callback(error, state.results);
  });
}

/**
 * Runs iterator over provided job element
 *
 * @param   {function} iterator - iterator to invoke
 * @param   {string|number} key - key/index of the element in the list of jobs
 * @param   {mixed} item - job description
 * @param   {function} callback - invoked after iterator is done with the job
 * @returns {function|mixed} - job abort function or something else
 */
function runJob(iterator, key, item, callback)
{
  var aborter;

  // allow shortcut if iterator expects only two arguments
  if (iterator.length == 2)
  {
    aborter = iterator(item, async(callback));
  }
  // otherwise go with full three arguments
  else
  {
    aborter = iterator(item, key, async(callback));
  }

  return aborter;
}


/***/ }),

/***/ 9478:
/***/ ((module) => {

// API
module.exports = state;

/**
 * Creates initial state object
 * for iteration over list
 *
 * @param   {array|object} list - list to iterate over
 * @param   {function|null} sortMethod - function to use for keys sort,
 *                                     or `null` to keep them as is
 * @returns {object} - initial state object
 */
function state(list, sortMethod)
{
  var isNamedList = !Array.isArray(list)
    , initState =
    {
      index    : 0,
      keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
      jobs     : {},
      results  : isNamedList ? {} : [],
      size     : isNamedList ? Object.keys(list).length : list.length
    }
    ;

  if (sortMethod)
  {
    // sort array keys based on it's values
    // sort object's keys just on own merit
    initState.keyedList.sort(isNamedList ? sortMethod : function(a, b)
    {
      return sortMethod(list[a], list[b]);
    });
  }

  return initState;
}


/***/ }),

/***/ 7093:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var abort = __webpack_require__(1677)
  , async = __webpack_require__(2792)
  ;

// API
module.exports = terminator;

/**
 * Terminates jobs in the attached state context
 *
 * @this  AsyncKitState#
 * @param {function} callback - final callback to invoke after termination
 */
function terminator(callback)
{
  if (!Object.keys(this.jobs).length)
  {
    return;
  }

  // fast forward iteration index
  this.index = this.size;

  // abort jobs
  abort(this);

  // send back results we have so far
  async(callback)(null, this.results);
}


/***/ }),

/***/ 4668:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var iterate    = __webpack_require__(8617)
  , initState  = __webpack_require__(9478)
  , terminator = __webpack_require__(7093)
  ;

// Public API
module.exports = parallel;

/**
 * Runs iterator over provided array elements in parallel
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function parallel(list, iterator, callback)
{
  var state = initState(list);

  while (state.index < (state['keyedList'] || list).length)
  {
    iterate(list, iterator, state, function(error, result)
    {
      if (error)
      {
        callback(error, result);
        return;
      }

      // looks like it's the last one
      if (Object.keys(state.jobs).length === 0)
      {
        callback(null, state.results);
        return;
      }
    });

    state.index++;
  }

  return terminator.bind(state, callback);
}


/***/ }),

/***/ 3339:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var serialOrdered = __webpack_require__(9869);

// Public API
module.exports = serial;

/**
 * Runs iterator over provided array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function serial(list, iterator, callback)
{
  return serialOrdered(list, iterator, null, callback);
}


/***/ }),

/***/ 9869:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var iterate    = __webpack_require__(8617)
  , initState  = __webpack_require__(9478)
  , terminator = __webpack_require__(7093)
  ;

// Public API
module.exports = serialOrdered;
// sorting helpers
module.exports.ascending  = ascending;
module.exports.descending = descending;

/**
 * Runs iterator over provided sorted array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} sortMethod - custom sort function
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function serialOrdered(list, iterator, sortMethod, callback)
{
  var state = initState(list, sortMethod);

  iterate(list, iterator, state, function iteratorHandler(error, result)
  {
    if (error)
    {
      callback(error, result);
      return;
    }

    state.index++;

    // are we there yet?
    if (state.index < (state['keyedList'] || list).length)
    {
      iterate(list, iterator, state, iteratorHandler);
      return;
    }

    // done here
    callback(null, state.results);
  });

  return terminator.bind(state, callback);
}

/*
 * -- Sort methods
 */

/**
 * sort helper to sort array elements in ascending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */
function ascending(a, b)
{
  return a < b ? -1 : a > b ? 1 : 0;
}

/**
 * sort helper to sort array elements in descending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */
function descending(a, b)
{
  return -1 * ascending(a, b);
}


/***/ }),

/***/ 8687:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(17);

/***/ }),

/***/ 9310:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(3046);
var settle = __webpack_require__(1547);
var buildFullPath = __webpack_require__(7900);
var buildURL = __webpack_require__(7064);
var http = __webpack_require__(3685);
var https = __webpack_require__(5687);
var httpFollow = (__webpack_require__(1794).http);
var httpsFollow = (__webpack_require__(1794).https);
var url = __webpack_require__(7310);
var zlib = __webpack_require__(9796);
var VERSION = (__webpack_require__(4382).version);
var transitionalDefaults = __webpack_require__(3706);
var AxiosError = __webpack_require__(5389);
var CanceledError = __webpack_require__(4448);

var isHttps = /https:?/;

var supportedProtocols = [ 'http:', 'https:', 'file:' ];

/**
 *
 * @param {http.ClientRequestArgs} options
 * @param {AxiosProxyConfig} proxy
 * @param {string} location
 */
function setProxy(options, proxy, location) {
  options.hostname = proxy.host;
  options.host = proxy.host;
  options.port = proxy.port;
  options.path = location;

  // Basic proxy authorization
  if (proxy.auth) {
    var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
    options.headers['Proxy-Authorization'] = 'Basic ' + base64;
  }

  // If a proxy is used, any redirects must also pass through the proxy
  options.beforeRedirect = function beforeRedirect(redirection) {
    redirection.headers.host = redirection.host;
    setProxy(redirection, proxy, redirection.href);
  };
}

/*eslint consistent-return:0*/
module.exports = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }
    var resolve = function resolve(value) {
      done();
      resolvePromise(value);
    };
    var rejected = false;
    var reject = function reject(value) {
      done();
      rejected = true;
      rejectPromise(value);
    };
    var data = config.data;
    var headers = config.headers;
    var headerNames = {};

    Object.keys(headers).forEach(function storeLowerName(name) {
      headerNames[name.toLowerCase()] = name;
    });

    // Set User-Agent (required by some servers)
    // See https://github.com/axios/axios/issues/69
    if ('user-agent' in headerNames) {
      // User-Agent is specified; handle case where no UA header is desired
      if (!headers[headerNames['user-agent']]) {
        delete headers[headerNames['user-agent']];
      }
      // Otherwise, use specified value
    } else {
      // Only set header if it hasn't been set in config
      headers['User-Agent'] = 'axios/' + VERSION;
    }

    // support for https://www.npmjs.com/package/form-data api
    if (utils.isFormData(data) && utils.isFunction(data.getHeaders)) {
      Object.assign(headers, data.getHeaders());
    } else if (data && !utils.isStream(data)) {
      if (Buffer.isBuffer(data)) {
        // Nothing to do...
      } else if (utils.isArrayBuffer(data)) {
        data = Buffer.from(new Uint8Array(data));
      } else if (utils.isString(data)) {
        data = Buffer.from(data, 'utf-8');
      } else {
        return reject(new AxiosError(
          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
          AxiosError.ERR_BAD_REQUEST,
          config
        ));
      }

      if (config.maxBodyLength > -1 && data.length > config.maxBodyLength) {
        return reject(new AxiosError(
          'Request body larger than maxBodyLength limit',
          AxiosError.ERR_BAD_REQUEST,
          config
        ));
      }

      // Add Content-Length header if data exists
      if (!headerNames['content-length']) {
        headers['Content-Length'] = data.length;
      }
    }

    // HTTP basic authentication
    var auth = undefined;
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      auth = username + ':' + password;
    }

    // Parse url
    var fullPath = buildFullPath(config.baseURL, config.url);
    var parsed = url.parse(fullPath);
    var protocol = parsed.protocol || supportedProtocols[0];

    if (supportedProtocols.indexOf(protocol) === -1) {
      return reject(new AxiosError(
        'Unsupported protocol ' + protocol,
        AxiosError.ERR_BAD_REQUEST,
        config
      ));
    }

    if (!auth && parsed.auth) {
      var urlAuth = parsed.auth.split(':');
      var urlUsername = urlAuth[0] || '';
      var urlPassword = urlAuth[1] || '';
      auth = urlUsername + ':' + urlPassword;
    }

    if (auth && headerNames.authorization) {
      delete headers[headerNames.authorization];
    }

    var isHttpsRequest = isHttps.test(protocol);
    var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;

    try {
      buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, '');
    } catch (err) {
      var customErr = new Error(err.message);
      customErr.config = config;
      customErr.url = config.url;
      customErr.exists = true;
      reject(customErr);
    }

    var options = {
      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
      method: config.method.toUpperCase(),
      headers: headers,
      agent: agent,
      agents: { http: config.httpAgent, https: config.httpsAgent },
      auth: auth
    };

    if (config.socketPath) {
      options.socketPath = config.socketPath;
    } else {
      options.hostname = parsed.hostname;
      options.port = parsed.port;
    }

    var proxy = config.proxy;
    if (!proxy && proxy !== false) {
      var proxyEnv = protocol.slice(0, -1) + '_proxy';
      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
      if (proxyUrl) {
        var parsedProxyUrl = url.parse(proxyUrl);
        var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
        var shouldProxy = true;

        if (noProxyEnv) {
          var noProxy = noProxyEnv.split(',').map(function trim(s) {
            return s.trim();
          });

          shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
            if (!proxyElement) {
              return false;
            }
            if (proxyElement === '*') {
              return true;
            }
            if (proxyElement[0] === '.' &&
                parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
              return true;
            }

            return parsed.hostname === proxyElement;
          });
        }

        if (shouldProxy) {
          proxy = {
            host: parsedProxyUrl.hostname,
            port: parsedProxyUrl.port,
            protocol: parsedProxyUrl.protocol
          };

          if (parsedProxyUrl.auth) {
            var proxyUrlAuth = parsedProxyUrl.auth.split(':');
            proxy.auth = {
              username: proxyUrlAuth[0],
              password: proxyUrlAuth[1]
            };
          }
        }
      }
    }

    if (proxy) {
      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
      setProxy(options, proxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path);
    }

    var transport;
    var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
    if (config.transport) {
      transport = config.transport;
    } else if (config.maxRedirects === 0) {
      transport = isHttpsProxy ? https : http;
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      if (config.beforeRedirect) {
        options.beforeRedirect = config.beforeRedirect;
      }
      transport = isHttpsProxy ? httpsFollow : httpFollow;
    }

    if (config.maxBodyLength > -1) {
      options.maxBodyLength = config.maxBodyLength;
    }

    if (config.insecureHTTPParser) {
      options.insecureHTTPParser = config.insecureHTTPParser;
    }

    // Create the request
    var req = transport.request(options, function handleResponse(res) {
      if (req.aborted) return;

      // uncompress the response body transparently if required
      var stream = res;

      // return the last request in case of redirects
      var lastRequest = res.req || req;


      // if no content, is HEAD request or decompress disabled we should not decompress
      if (res.statusCode !== 204 && lastRequest.method !== 'HEAD' && config.decompress !== false) {
        switch (res.headers['content-encoding']) {
        /*eslint default-case:0*/
        case 'gzip':
        case 'compress':
        case 'deflate':
        // add the unzipper to the body stream processing pipeline
          stream = stream.pipe(zlib.createUnzip());

          // remove the content-encoding in order to not confuse downstream operations
          delete res.headers['content-encoding'];
          break;
        }
      }

      var response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        config: config,
        request: lastRequest
      };

      if (config.responseType === 'stream') {
        response.data = stream;
        settle(resolve, reject, response);
      } else {
        var responseBuffer = [];
        var totalResponseBytes = 0;
        stream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);
          totalResponseBytes += chunk.length;

          // make sure the content length is not over the maxContentLength if specified
          if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
            // stream.destoy() emit aborted event before calling reject() on Node.js v16
            rejected = true;
            stream.destroy();
            reject(new AxiosError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
              AxiosError.ERR_BAD_RESPONSE, config, lastRequest));
          }
        });

        stream.on('aborted', function handlerStreamAborted() {
          if (rejected) {
            return;
          }
          stream.destroy();
          reject(new AxiosError(
            'maxContentLength size of ' + config.maxContentLength + ' exceeded',
            AxiosError.ERR_BAD_RESPONSE,
            config,
            lastRequest
          ));
        });

        stream.on('error', function handleStreamError(err) {
          if (req.aborted) return;
          reject(AxiosError.from(err, null, config, lastRequest));
        });

        stream.on('end', function handleStreamEnd() {
          try {
            var responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
            if (config.responseType !== 'arraybuffer') {
              responseData = responseData.toString(config.responseEncoding);
              if (!config.responseEncoding || config.responseEncoding === 'utf8') {
                responseData = utils.stripBOM(responseData);
              }
            }
            response.data = responseData;
          } catch (err) {
            reject(AxiosError.from(err, null, config, response.request, response));
          }
          settle(resolve, reject, response);
        });
      }
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      // @todo remove
      // if (req.aborted && err.code !== AxiosError.ERR_FR_TOO_MANY_REDIRECTS) return;
      reject(AxiosError.from(err, null, config, req));
    });

    // set tcp keep alive to prevent drop connection by peer
    req.on('socket', function handleRequestSocket(socket) {
      // default interval of sending ack packet is 1 minute
      socket.setKeepAlive(true, 1000 * 60);
    });

    // Handle request timeout
    if (config.timeout) {
      // This is forcing a int timeout to avoid problems if the `req` interface doesn't handle other types.
      var timeout = parseInt(config.timeout, 10);

      if (isNaN(timeout)) {
        reject(new AxiosError(
          'error trying to parse `config.timeout` to int',
          AxiosError.ERR_BAD_OPTION_VALUE,
          config,
          req
        ));

        return;
      }

      // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
      // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
      // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
      // And then these socket which be hang up will devoring CPU little by little.
      // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
      req.setTimeout(timeout, function handleRequestTimeout() {
        req.abort();
        var transitional = config.transitional || transitionalDefaults;
        reject(new AxiosError(
          'timeout of ' + timeout + 'ms exceeded',
          transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
          config,
          req
        ));
      });
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (req.aborted) return;

        req.abort();
        reject(!cancel || (cancel && cancel.type) ? new CanceledError() : cancel);
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }


    // Send the request
    if (utils.isStream(data)) {
      data.on('error', function handleStreamError(err) {
        reject(AxiosError.from(err, config, null, req));
      }).pipe(req);
    } else {
      req.end(data);
    }
  });
};


/***/ }),

/***/ 6727:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(3046);
var settle = __webpack_require__(1547);
var cookies = __webpack_require__(7586);
var buildURL = __webpack_require__(7064);
var buildFullPath = __webpack_require__(7900);
var parseHeaders = __webpack_require__(4243);
var isURLSameOrigin = __webpack_require__(2120);
var transitionalDefaults = __webpack_require__(3706);
var AxiosError = __webpack_require__(5389);
var CanceledError = __webpack_require__(4448);
var parseProtocol = __webpack_require__(764);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData) && utils.isStandardBrowserEnv()) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || (cancel && cancel.type) ? new CanceledError() : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    var protocol = parseProtocol(fullPath);

    if (protocol && [ 'http', 'https', 'file' ].indexOf(protocol) === -1) {
      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ 17:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(3046);
var bind = __webpack_require__(3831);
var Axios = __webpack_require__(7451);
var mergeConfig = __webpack_require__(8259);
var defaults = __webpack_require__(8033);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.CanceledError = __webpack_require__(4448);
axios.CancelToken = __webpack_require__(2426);
axios.isCancel = __webpack_require__(7206);
axios.VERSION = (__webpack_require__(4382).version);
axios.toFormData = __webpack_require__(6843);

// Expose AxiosError class
axios.AxiosError = __webpack_require__(5389);

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(9401);

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(5113);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;


/***/ }),

/***/ 2426:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var CanceledError = __webpack_require__(4448);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;

  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function(onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new CanceledError(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `CanceledError` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ 4448:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var AxiosError = __webpack_require__(5389);
var utils = __webpack_require__(3046);

/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function CanceledError(message) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED);
  this.name = 'CanceledError';
}

utils.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});

module.exports = CanceledError;


/***/ }),

/***/ 7206:
/***/ ((module) => {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ 7451:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(3046);
var buildURL = __webpack_require__(7064);
var InterceptorManager = __webpack_require__(2793);
var dispatchRequest = __webpack_require__(1217);
var mergeConfig = __webpack_require__(8259);
var buildFullPath = __webpack_require__(7900);
var validator = __webpack_require__(4988);

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(configOrUrl, config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof configOrUrl === 'string') {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  var fullPath = buildFullPath(config.baseURL, config.url);
  return buildURL(fullPath, config.params, config.paramsSerializer);
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method: method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url: url,
        data: data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

module.exports = Axios;


/***/ }),

/***/ 5389:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(3046);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

var prototype = AxiosError.prototype;
var descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED'
// eslint-disable-next-line func-names
].forEach(function(code) {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = function(error, code, config, request, response, customProps) {
  var axiosError = Object.create(prototype);

  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

module.exports = AxiosError;


/***/ }),

/***/ 2793:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(3046);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ 7900:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isAbsoluteURL = __webpack_require__(4985);
var combineURLs = __webpack_require__(4695);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ 1217:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(3046);
var transformData = __webpack_require__(4490);
var isCancel = __webpack_require__(7206);
var defaults = __webpack_require__(8033);
var CanceledError = __webpack_require__(4448);

/**
 * Throws a `CanceledError` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new CanceledError();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ 8259:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(3046);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'beforeRedirect': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};


/***/ }),

/***/ 1547:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var AxiosError = __webpack_require__(5389);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError(
      'Request failed with status code ' + response.status,
      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ 4490:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(3046);
var defaults = __webpack_require__(8033);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),

/***/ 6270:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// eslint-disable-next-line strict
module.exports = __webpack_require__(5870);


/***/ }),

/***/ 8033:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(3046);
var normalizeHeaderName = __webpack_require__(800);
var AxiosError = __webpack_require__(5389);
var transitionalDefaults = __webpack_require__(3706);
var toFormData = __webpack_require__(6843);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(6727);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(9310);
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: transitionalDefaults,

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }

    var isObjectPayload = utils.isObject(data);
    var contentType = headers && headers['Content-Type'];

    var isFileList;

    if ((isFileList = utils.isFileList(data)) || (isObjectPayload && contentType === 'multipart/form-data')) {
      var _FormData = this.env && this.env.FormData;
      return toFormData(isFileList ? {'files[]': data} : data, _FormData && new _FormData());
    } else if (isObjectPayload || contentType === 'application/json') {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: __webpack_require__(6270)
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ 3706:
/***/ ((module) => {

"use strict";


module.exports = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};


/***/ }),

/***/ 4382:
/***/ ((module) => {

module.exports = {
  "version": "0.27.2"
};

/***/ }),

/***/ 3831:
/***/ ((module) => {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ 7064:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(3046);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ 4695:
/***/ ((module) => {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ 7586:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(3046);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ 4985:
/***/ ((module) => {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ 5113:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(3046);

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
};


/***/ }),

/***/ 2120:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(3046);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ 800:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(3046);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ 4243:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(3046);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ 764:
/***/ ((module) => {

"use strict";


module.exports = function parseProtocol(url) {
  var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
};


/***/ }),

/***/ 9401:
/***/ ((module) => {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ 6843:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(3046);

/**
 * Convert a data object to FormData
 * @param {Object} obj
 * @param {?Object} [formData]
 * @returns {Object}
 **/

function toFormData(obj, formData) {
  // eslint-disable-next-line no-param-reassign
  formData = formData || new FormData();

  var stack = [];

  function convertValue(value) {
    if (value === null) return '';

    if (utils.isDate(value)) {
      return value.toISOString();
    }

    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  function build(data, parentKey) {
    if (utils.isPlainObject(data) || utils.isArray(data)) {
      if (stack.indexOf(data) !== -1) {
        throw Error('Circular reference detected in ' + parentKey);
      }

      stack.push(data);

      utils.forEach(data, function each(value, key) {
        if (utils.isUndefined(value)) return;
        var fullKey = parentKey ? parentKey + '.' + key : key;
        var arr;

        if (value && !parentKey && typeof value === 'object') {
          if (utils.endsWith(key, '{}')) {
            // eslint-disable-next-line no-param-reassign
            value = JSON.stringify(value);
          } else if (utils.endsWith(key, '[]') && (arr = utils.toArray(value))) {
            // eslint-disable-next-line func-names
            arr.forEach(function(el) {
              !utils.isUndefined(el) && formData.append(fullKey, convertValue(el));
            });
            return;
          }
        }

        build(value, fullKey);
      });

      stack.pop();
    } else {
      formData.append(parentKey, convertValue(data));
    }
  }

  build(obj);

  return formData;
}

module.exports = toFormData;


/***/ }),

/***/ 4988:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var VERSION = (__webpack_require__(4382).version);
var AxiosError = __webpack_require__(5389);

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}

module.exports = {
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),

/***/ 3046:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(3831);

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

// eslint-disable-next-line func-names
var kindOf = (function(cache) {
  // eslint-disable-next-line func-names
  return function(thing) {
    var str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  };
})(Object.create(null));

function kindOfTest(type) {
  type = type.toLowerCase();
  return function isKindOf(thing) {
    return kindOf(thing) === type;
  };
}

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return Array.isArray(val);
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
var isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (kindOf(val) !== 'object') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
var isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
var isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} thing The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(thing) {
  var pattern = '[object FormData]';
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) ||
    toString.call(thing) === pattern ||
    (isFunction(thing.toString) && thing.toString() === pattern)
  );
}

/**
 * Determine if a value is a URLSearchParams object
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
var isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 */

function inherits(constructor, superConstructor, props, descriptors) {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function} [filter]
 * @returns {Object}
 */

function toFlatObject(sourceObj, destObj, filter) {
  var props;
  var i;
  var prop;
  var merged = {};

  destObj = destObj || {};

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if (!merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = Object.getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/*
 * determines whether a string ends with the characters of a specified string
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 * @returns {boolean}
 */
function endsWith(str, searchString, position) {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  var lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object
 * @param {*} [thing]
 * @returns {Array}
 */
function toArray(thing) {
  if (!thing) return null;
  var i = thing.length;
  if (isUndefined(i)) return null;
  var arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

// eslint-disable-next-line func-names
var isTypedArray = (function(TypedArray) {
  // eslint-disable-next-line func-names
  return function(thing) {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && Object.getPrototypeOf(Uint8Array));

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM,
  inherits: inherits,
  toFlatObject: toFlatObject,
  kindOf: kindOf,
  kindOfTest: kindOfTest,
  endsWith: endsWith,
  toArray: toArray,
  isTypedArray: isTypedArray,
  isFileList: isFileList
};


/***/ }),

/***/ 7143:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var util = __webpack_require__(3837);
var Stream = (__webpack_require__(2781).Stream);
var DelayedStream = __webpack_require__(3154);

module.exports = CombinedStream;
function CombinedStream() {
  this.writable = false;
  this.readable = true;
  this.dataSize = 0;
  this.maxDataSize = 2 * 1024 * 1024;
  this.pauseStreams = true;

  this._released = false;
  this._streams = [];
  this._currentStream = null;
  this._insideLoop = false;
  this._pendingNext = false;
}
util.inherits(CombinedStream, Stream);

CombinedStream.create = function(options) {
  var combinedStream = new this();

  options = options || {};
  for (var option in options) {
    combinedStream[option] = options[option];
  }

  return combinedStream;
};

CombinedStream.isStreamLike = function(stream) {
  return (typeof stream !== 'function')
    && (typeof stream !== 'string')
    && (typeof stream !== 'boolean')
    && (typeof stream !== 'number')
    && (!Buffer.isBuffer(stream));
};

CombinedStream.prototype.append = function(stream) {
  var isStreamLike = CombinedStream.isStreamLike(stream);

  if (isStreamLike) {
    if (!(stream instanceof DelayedStream)) {
      var newStream = DelayedStream.create(stream, {
        maxDataSize: Infinity,
        pauseStream: this.pauseStreams,
      });
      stream.on('data', this._checkDataSize.bind(this));
      stream = newStream;
    }

    this._handleErrors(stream);

    if (this.pauseStreams) {
      stream.pause();
    }
  }

  this._streams.push(stream);
  return this;
};

CombinedStream.prototype.pipe = function(dest, options) {
  Stream.prototype.pipe.call(this, dest, options);
  this.resume();
  return dest;
};

CombinedStream.prototype._getNext = function() {
  this._currentStream = null;

  if (this._insideLoop) {
    this._pendingNext = true;
    return; // defer call
  }

  this._insideLoop = true;
  try {
    do {
      this._pendingNext = false;
      this._realGetNext();
    } while (this._pendingNext);
  } finally {
    this._insideLoop = false;
  }
};

CombinedStream.prototype._realGetNext = function() {
  var stream = this._streams.shift();


  if (typeof stream == 'undefined') {
    this.end();
    return;
  }

  if (typeof stream !== 'function') {
    this._pipeNext(stream);
    return;
  }

  var getStream = stream;
  getStream(function(stream) {
    var isStreamLike = CombinedStream.isStreamLike(stream);
    if (isStreamLike) {
      stream.on('data', this._checkDataSize.bind(this));
      this._handleErrors(stream);
    }

    this._pipeNext(stream);
  }.bind(this));
};

CombinedStream.prototype._pipeNext = function(stream) {
  this._currentStream = stream;

  var isStreamLike = CombinedStream.isStreamLike(stream);
  if (isStreamLike) {
    stream.on('end', this._getNext.bind(this));
    stream.pipe(this, {end: false});
    return;
  }

  var value = stream;
  this.write(value);
  this._getNext();
};

CombinedStream.prototype._handleErrors = function(stream) {
  var self = this;
  stream.on('error', function(err) {
    self._emitError(err);
  });
};

CombinedStream.prototype.write = function(data) {
  this.emit('data', data);
};

CombinedStream.prototype.pause = function() {
  if (!this.pauseStreams) {
    return;
  }

  if(this.pauseStreams && this._currentStream && typeof(this._currentStream.pause) == 'function') this._currentStream.pause();
  this.emit('pause');
};

CombinedStream.prototype.resume = function() {
  if (!this._released) {
    this._released = true;
    this.writable = true;
    this._getNext();
  }

  if(this.pauseStreams && this._currentStream && typeof(this._currentStream.resume) == 'function') this._currentStream.resume();
  this.emit('resume');
};

CombinedStream.prototype.end = function() {
  this._reset();
  this.emit('end');
};

CombinedStream.prototype.destroy = function() {
  this._reset();
  this.emit('close');
};

CombinedStream.prototype._reset = function() {
  this.writable = false;
  this._streams = [];
  this._currentStream = null;
};

CombinedStream.prototype._checkDataSize = function() {
  this._updateDataSize();
  if (this.dataSize <= this.maxDataSize) {
    return;
  }

  var message =
    'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
  this._emitError(new Error(message));
};

CombinedStream.prototype._updateDataSize = function() {
  this.dataSize = 0;

  var self = this;
  this._streams.forEach(function(stream) {
    if (!stream.dataSize) {
      return;
    }

    self.dataSize += stream.dataSize;
  });

  if (this._currentStream && this._currentStream.dataSize) {
    this.dataSize += this._currentStream.dataSize;
  }
};

CombinedStream.prototype._emitError = function(err) {
  this._reset();
  this.emit('error', err);
};


/***/ }),

/***/ 2327:
/***/ ((module, exports, __webpack_require__) => {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(392)(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ 392:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(9842);
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ 7783:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || false === true || process.__nwjs) {
	module.exports = __webpack_require__(2327);
} else {
	module.exports = __webpack_require__(9035);
}


/***/ }),

/***/ 9035:
/***/ ((module, exports, __webpack_require__) => {

/**
 * Module dependencies.
 */

const tty = __webpack_require__(6224);
const util = __webpack_require__(3837);

/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(
	() => {},
	'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
);

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = __webpack_require__(5048);

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty.isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util.format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = __webpack_require__(392)(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts)
		.split('\n')
		.map(str => str.trim())
		.join(' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts);
};


/***/ }),

/***/ 3154:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stream = (__webpack_require__(2781).Stream);
var util = __webpack_require__(3837);

module.exports = DelayedStream;
function DelayedStream() {
  this.source = null;
  this.dataSize = 0;
  this.maxDataSize = 1024 * 1024;
  this.pauseStream = true;

  this._maxDataSizeExceeded = false;
  this._released = false;
  this._bufferedEvents = [];
}
util.inherits(DelayedStream, Stream);

DelayedStream.create = function(source, options) {
  var delayedStream = new this();

  options = options || {};
  for (var option in options) {
    delayedStream[option] = options[option];
  }

  delayedStream.source = source;

  var realEmit = source.emit;
  source.emit = function() {
    delayedStream._handleEmit(arguments);
    return realEmit.apply(source, arguments);
  };

  source.on('error', function() {});
  if (delayedStream.pauseStream) {
    source.pause();
  }

  return delayedStream;
};

Object.defineProperty(DelayedStream.prototype, 'readable', {
  configurable: true,
  enumerable: true,
  get: function() {
    return this.source.readable;
  }
});

DelayedStream.prototype.setEncoding = function() {
  return this.source.setEncoding.apply(this.source, arguments);
};

DelayedStream.prototype.resume = function() {
  if (!this._released) {
    this.release();
  }

  this.source.resume();
};

DelayedStream.prototype.pause = function() {
  this.source.pause();
};

DelayedStream.prototype.release = function() {
  this._released = true;

  this._bufferedEvents.forEach(function(args) {
    this.emit.apply(this, args);
  }.bind(this));
  this._bufferedEvents = [];
};

DelayedStream.prototype.pipe = function() {
  var r = Stream.prototype.pipe.apply(this, arguments);
  this.resume();
  return r;
};

DelayedStream.prototype._handleEmit = function(args) {
  if (this._released) {
    this.emit.apply(this, args);
    return;
  }

  if (args[0] === 'data') {
    this.dataSize += args[1].length;
    this._checkIfMaxDataSizeExceeded();
  }

  this._bufferedEvents.push(args);
};

DelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {
  if (this._maxDataSizeExceeded) {
    return;
  }

  if (this.dataSize <= this.maxDataSize) {
    return;
  }

  this._maxDataSizeExceeded = true;
  var message =
    'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.'
  this.emit('error', new Error(message));
};


/***/ }),

/***/ 361:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var debug;

module.exports = function () {
  if (!debug) {
    try {
      /* eslint global-require: off */
      debug = __webpack_require__(7783)("follow-redirects");
    }
    catch (error) { /* */ }
    if (typeof debug !== "function") {
      debug = function () { /* */ };
    }
  }
  debug.apply(null, arguments);
};


/***/ }),

/***/ 1794:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var url = __webpack_require__(7310);
var URL = url.URL;
var http = __webpack_require__(3685);
var https = __webpack_require__(5687);
var Writable = (__webpack_require__(2781).Writable);
var assert = __webpack_require__(9491);
var debug = __webpack_require__(361);

// Create handlers that pass events from native requests
var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
var eventHandlers = Object.create(null);
events.forEach(function (event) {
  eventHandlers[event] = function (arg1, arg2, arg3) {
    this._redirectable.emit(event, arg1, arg2, arg3);
  };
});

var InvalidUrlError = createErrorType(
  "ERR_INVALID_URL",
  "Invalid URL",
  TypeError
);
// Error types with codes
var RedirectionError = createErrorType(
  "ERR_FR_REDIRECTION_FAILURE",
  "Redirected request failed"
);
var TooManyRedirectsError = createErrorType(
  "ERR_FR_TOO_MANY_REDIRECTS",
  "Maximum number of redirects exceeded"
);
var MaxBodyLengthExceededError = createErrorType(
  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
  "Request body larger than maxBodyLength limit"
);
var WriteAfterEndError = createErrorType(
  "ERR_STREAM_WRITE_AFTER_END",
  "write after end"
);

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
  // Initialize the request
  Writable.call(this);
  this._sanitizeOptions(options);
  this._options = options;
  this._ended = false;
  this._ending = false;
  this._redirectCount = 0;
  this._redirects = [];
  this._requestBodyLength = 0;
  this._requestBodyBuffers = [];

  // Attach a callback if passed
  if (responseCallback) {
    this.on("response", responseCallback);
  }

  // React to responses of native requests
  var self = this;
  this._onNativeResponse = function (response) {
    self._processResponse(response);
  };

  // Perform the first request
  this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);

RedirectableRequest.prototype.abort = function () {
  abortRequest(this._currentRequest);
  this.emit("abort");
};

// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function (data, encoding, callback) {
  // Writing is not allowed if end has been called
  if (this._ending) {
    throw new WriteAfterEndError();
  }

  // Validate input and shift parameters if necessary
  if (!isString(data) && !isBuffer(data)) {
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  }
  if (isFunction(encoding)) {
    callback = encoding;
    encoding = null;
  }

  // Ignore empty buffers, since writing them doesn't invoke the callback
  // https://github.com/nodejs/node/issues/22066
  if (data.length === 0) {
    if (callback) {
      callback();
    }
    return;
  }
  // Only write when we don't exceed the maximum body length
  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
    this._requestBodyLength += data.length;
    this._requestBodyBuffers.push({ data: data, encoding: encoding });
    this._currentRequest.write(data, encoding, callback);
  }
  // Error when we exceed the maximum body length
  else {
    this.emit("error", new MaxBodyLengthExceededError());
    this.abort();
  }
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
  // Shift parameters if necessary
  if (isFunction(data)) {
    callback = data;
    data = encoding = null;
  }
  else if (isFunction(encoding)) {
    callback = encoding;
    encoding = null;
  }

  // Write data if needed and end
  if (!data) {
    this._ended = this._ending = true;
    this._currentRequest.end(null, null, callback);
  }
  else {
    var self = this;
    var currentRequest = this._currentRequest;
    this.write(data, encoding, function () {
      self._ended = true;
      currentRequest.end(null, null, callback);
    });
    this._ending = true;
  }
};

// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function (name, value) {
  this._options.headers[name] = value;
  this._currentRequest.setHeader(name, value);
};

// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function (name) {
  delete this._options.headers[name];
  this._currentRequest.removeHeader(name);
};

// Global timeout for all underlying requests
RedirectableRequest.prototype.setTimeout = function (msecs, callback) {
  var self = this;

  // Destroys the socket on timeout
  function destroyOnTimeout(socket) {
    socket.setTimeout(msecs);
    socket.removeListener("timeout", socket.destroy);
    socket.addListener("timeout", socket.destroy);
  }

  // Sets up a timer to trigger a timeout event
  function startTimer(socket) {
    if (self._timeout) {
      clearTimeout(self._timeout);
    }
    self._timeout = setTimeout(function () {
      self.emit("timeout");
      clearTimer();
    }, msecs);
    destroyOnTimeout(socket);
  }

  // Stops a timeout from triggering
  function clearTimer() {
    // Clear the timeout
    if (self._timeout) {
      clearTimeout(self._timeout);
      self._timeout = null;
    }

    // Clean up all attached listeners
    self.removeListener("abort", clearTimer);
    self.removeListener("error", clearTimer);
    self.removeListener("response", clearTimer);
    if (callback) {
      self.removeListener("timeout", callback);
    }
    if (!self.socket) {
      self._currentRequest.removeListener("socket", startTimer);
    }
  }

  // Attach callback if passed
  if (callback) {
    this.on("timeout", callback);
  }

  // Start the timer if or when the socket is opened
  if (this.socket) {
    startTimer(this.socket);
  }
  else {
    this._currentRequest.once("socket", startTimer);
  }

  // Clean up on events
  this.on("socket", destroyOnTimeout);
  this.on("abort", clearTimer);
  this.on("error", clearTimer);
  this.on("response", clearTimer);

  return this;
};

// Proxy all other public ClientRequest methods
[
  "flushHeaders", "getHeader",
  "setNoDelay", "setSocketKeepAlive",
].forEach(function (method) {
  RedirectableRequest.prototype[method] = function (a, b) {
    return this._currentRequest[method](a, b);
  };
});

// Proxy all public ClientRequest properties
["aborted", "connection", "socket"].forEach(function (property) {
  Object.defineProperty(RedirectableRequest.prototype, property, {
    get: function () { return this._currentRequest[property]; },
  });
});

RedirectableRequest.prototype._sanitizeOptions = function (options) {
  // Ensure headers are always present
  if (!options.headers) {
    options.headers = {};
  }

  // Since http.request treats host as an alias of hostname,
  // but the url module interprets host as hostname plus port,
  // eliminate the host property to avoid confusion.
  if (options.host) {
    // Use hostname if set, because it has precedence
    if (!options.hostname) {
      options.hostname = options.host;
    }
    delete options.host;
  }

  // Complete the URL object when necessary
  if (!options.pathname && options.path) {
    var searchPos = options.path.indexOf("?");
    if (searchPos < 0) {
      options.pathname = options.path;
    }
    else {
      options.pathname = options.path.substring(0, searchPos);
      options.search = options.path.substring(searchPos);
    }
  }
};


// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
  // Load the native protocol
  var protocol = this._options.protocol;
  var nativeProtocol = this._options.nativeProtocols[protocol];
  if (!nativeProtocol) {
    this.emit("error", new TypeError("Unsupported protocol " + protocol));
    return;
  }

  // If specified, use the agent corresponding to the protocol
  // (HTTP and HTTPS use different types of agents)
  if (this._options.agents) {
    var scheme = protocol.slice(0, -1);
    this._options.agent = this._options.agents[scheme];
  }

  // Create the native request and set up its event handlers
  var request = this._currentRequest =
        nativeProtocol.request(this._options, this._onNativeResponse);
  request._redirectable = this;
  for (var event of events) {
    request.on(event, eventHandlers[event]);
  }

  // RFC7230§5.3.1: When making a request directly to an origin server, […]
  // a client MUST send only the absolute path […] as the request-target.
  this._currentUrl = /^\//.test(this._options.path) ?
    url.format(this._options) :
    // When making a request to a proxy, […]
    // a client MUST send the target URI in absolute-form […].
    this._options.path;

  // End a redirected request
  // (The first request must be ended explicitly with RedirectableRequest#end)
  if (this._isRedirect) {
    // Write the request entity and end
    var i = 0;
    var self = this;
    var buffers = this._requestBodyBuffers;
    (function writeNext(error) {
      // Only write if this request has not been redirected yet
      /* istanbul ignore else */
      if (request === self._currentRequest) {
        // Report any write errors
        /* istanbul ignore if */
        if (error) {
          self.emit("error", error);
        }
        // Write the next buffer if there are still left
        else if (i < buffers.length) {
          var buffer = buffers[i++];
          /* istanbul ignore else */
          if (!request.finished) {
            request.write(buffer.data, buffer.encoding, writeNext);
          }
        }
        // End the request if `end` has been called on us
        else if (self._ended) {
          request.end();
        }
      }
    }());
  }
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
  // Store the redirected response
  var statusCode = response.statusCode;
  if (this._options.trackRedirects) {
    this._redirects.push({
      url: this._currentUrl,
      headers: response.headers,
      statusCode: statusCode,
    });
  }

  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
  // that further action needs to be taken by the user agent in order to
  // fulfill the request. If a Location header field is provided,
  // the user agent MAY automatically redirect its request to the URI
  // referenced by the Location field value,
  // even if the specific status code is not understood.

  // If the response is not a redirect; return it as-is
  var location = response.headers.location;
  if (!location || this._options.followRedirects === false ||
      statusCode < 300 || statusCode >= 400) {
    response.responseUrl = this._currentUrl;
    response.redirects = this._redirects;
    this.emit("response", response);

    // Clean up
    this._requestBodyBuffers = [];
    return;
  }

  // The response is a redirect, so abort the current request
  abortRequest(this._currentRequest);
  // Discard the remainder of the response to avoid waiting for data
  response.destroy();

  // RFC7231§6.4: A client SHOULD detect and intervene
  // in cyclical redirections (i.e., "infinite" redirection loops).
  if (++this._redirectCount > this._options.maxRedirects) {
    this.emit("error", new TooManyRedirectsError());
    return;
  }

  // Store the request headers if applicable
  var requestHeaders;
  var beforeRedirect = this._options.beforeRedirect;
  if (beforeRedirect) {
    requestHeaders = Object.assign({
      // The Host header was set by nativeProtocol.request
      Host: response.req.getHeader("host"),
    }, this._options.headers);
  }

  // RFC7231§6.4: Automatic redirection needs to done with
  // care for methods not known to be safe, […]
  // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
  // the request method from POST to GET for the subsequent request.
  var method = this._options.method;
  if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" ||
      // RFC7231§6.4.4: The 303 (See Other) status code indicates that
      // the server is redirecting the user agent to a different resource […]
      // A user agent can perform a retrieval request targeting that URI
      // (a GET or HEAD request if using HTTP) […]
      (statusCode === 303) && !/^(?:GET|HEAD)$/.test(this._options.method)) {
    this._options.method = "GET";
    // Drop a possible entity and headers related to it
    this._requestBodyBuffers = [];
    removeMatchingHeaders(/^content-/i, this._options.headers);
  }

  // Drop the Host header, as the redirect might lead to a different host
  var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);

  // If the redirect is relative, carry over the host of the last request
  var currentUrlParts = url.parse(this._currentUrl);
  var currentHost = currentHostHeader || currentUrlParts.host;
  var currentUrl = /^\w+:/.test(location) ? this._currentUrl :
    url.format(Object.assign(currentUrlParts, { host: currentHost }));

  // Determine the URL of the redirection
  var redirectUrl;
  try {
    redirectUrl = url.resolve(currentUrl, location);
  }
  catch (cause) {
    this.emit("error", new RedirectionError({ cause: cause }));
    return;
  }

  // Create the redirected request
  debug("redirecting to", redirectUrl);
  this._isRedirect = true;
  var redirectUrlParts = url.parse(redirectUrl);
  Object.assign(this._options, redirectUrlParts);

  // Drop confidential headers when redirecting to a less secure protocol
  // or to a different domain that is not a superdomain
  if (redirectUrlParts.protocol !== currentUrlParts.protocol &&
     redirectUrlParts.protocol !== "https:" ||
     redirectUrlParts.host !== currentHost &&
     !isSubdomain(redirectUrlParts.host, currentHost)) {
    removeMatchingHeaders(/^(?:authorization|cookie)$/i, this._options.headers);
  }

  // Evaluate the beforeRedirect callback
  if (isFunction(beforeRedirect)) {
    var responseDetails = {
      headers: response.headers,
      statusCode: statusCode,
    };
    var requestDetails = {
      url: currentUrl,
      method: method,
      headers: requestHeaders,
    };
    try {
      beforeRedirect(this._options, responseDetails, requestDetails);
    }
    catch (err) {
      this.emit("error", err);
      return;
    }
    this._sanitizeOptions(this._options);
  }

  // Perform the redirected request
  try {
    this._performRequest();
  }
  catch (cause) {
    this.emit("error", new RedirectionError({ cause: cause }));
  }
};

// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
  // Default settings
  var exports = {
    maxRedirects: 21,
    maxBodyLength: 10 * 1024 * 1024,
  };

  // Wrap each protocol
  var nativeProtocols = {};
  Object.keys(protocols).forEach(function (scheme) {
    var protocol = scheme + ":";
    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

    // Executes a request, following redirects
    function request(input, options, callback) {
      // Parse parameters
      if (isString(input)) {
        var parsed;
        try {
          parsed = urlToOptions(new URL(input));
        }
        catch (err) {
          /* istanbul ignore next */
          parsed = url.parse(input);
        }
        if (!isString(parsed.protocol)) {
          throw new InvalidUrlError({ input });
        }
        input = parsed;
      }
      else if (URL && (input instanceof URL)) {
        input = urlToOptions(input);
      }
      else {
        callback = options;
        options = input;
        input = { protocol: protocol };
      }
      if (isFunction(options)) {
        callback = options;
        options = null;
      }

      // Set defaults
      options = Object.assign({
        maxRedirects: exports.maxRedirects,
        maxBodyLength: exports.maxBodyLength,
      }, input, options);
      options.nativeProtocols = nativeProtocols;
      if (!isString(options.host) && !isString(options.hostname)) {
        options.hostname = "::1";
      }

      assert.equal(options.protocol, protocol, "protocol mismatch");
      debug("options", options);
      return new RedirectableRequest(options, callback);
    }

    // Executes a GET request, following redirects
    function get(input, options, callback) {
      var wrappedRequest = wrappedProtocol.request(input, options, callback);
      wrappedRequest.end();
      return wrappedRequest;
    }

    // Expose the properties on the wrapped protocol
    Object.defineProperties(wrappedProtocol, {
      request: { value: request, configurable: true, enumerable: true, writable: true },
      get: { value: get, configurable: true, enumerable: true, writable: true },
    });
  });
  return exports;
}

/* istanbul ignore next */
function noop() { /* empty */ }

// from https://github.com/nodejs/node/blob/master/lib/internal/url.js
function urlToOptions(urlObject) {
  var options = {
    protocol: urlObject.protocol,
    hostname: urlObject.hostname.startsWith("[") ?
      /* istanbul ignore next */
      urlObject.hostname.slice(1, -1) :
      urlObject.hostname,
    hash: urlObject.hash,
    search: urlObject.search,
    pathname: urlObject.pathname,
    path: urlObject.pathname + urlObject.search,
    href: urlObject.href,
  };
  if (urlObject.port !== "") {
    options.port = Number(urlObject.port);
  }
  return options;
}

function removeMatchingHeaders(regex, headers) {
  var lastValue;
  for (var header in headers) {
    if (regex.test(header)) {
      lastValue = headers[header];
      delete headers[header];
    }
  }
  return (lastValue === null || typeof lastValue === "undefined") ?
    undefined : String(lastValue).trim();
}

function createErrorType(code, message, baseClass) {
  // Create constructor
  function CustomError(properties) {
    Error.captureStackTrace(this, this.constructor);
    Object.assign(this, properties || {});
    this.code = code;
    this.message = this.cause ? message + ": " + this.cause.message : message;
  }

  // Attach constructor and set default properties
  CustomError.prototype = new (baseClass || Error)();
  CustomError.prototype.constructor = CustomError;
  CustomError.prototype.name = "Error [" + code + "]";
  return CustomError;
}

function abortRequest(request) {
  for (var event of events) {
    request.removeListener(event, eventHandlers[event]);
  }
  request.on("error", noop);
  request.abort();
}

function isSubdomain(subdomain, domain) {
  assert(isString(subdomain) && isString(domain));
  var dot = subdomain.length - domain.length - 1;
  return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
}

function isString(value) {
  return typeof value === "string" || value instanceof String;
}

function isFunction(value) {
  return typeof value === "function";
}

function isBuffer(value) {
  return typeof value === "object" && ("length" in value);
}

// Exports
module.exports = wrap({ http: http, https: https });
module.exports.wrap = wrap;


/***/ }),

/***/ 5870:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var CombinedStream = __webpack_require__(7143);
var util = __webpack_require__(3837);
var path = __webpack_require__(1017);
var http = __webpack_require__(3685);
var https = __webpack_require__(5687);
var parseUrl = (__webpack_require__(7310).parse);
var fs = __webpack_require__(7147);
var Stream = (__webpack_require__(2781).Stream);
var mime = __webpack_require__(2994);
var asynckit = __webpack_require__(2353);
var populate = __webpack_require__(3024);

// Public API
module.exports = FormData;

// make it a Stream
util.inherits(FormData, CombinedStream);

/**
 * Create readable "multipart/form-data" streams.
 * Can be used to submit forms
 * and file uploads to other web applications.
 *
 * @constructor
 * @param {Object} options - Properties to be added/overriden for FormData and CombinedStream
 */
function FormData(options) {
  if (!(this instanceof FormData)) {
    return new FormData(options);
  }

  this._overheadLength = 0;
  this._valueLength = 0;
  this._valuesToMeasure = [];

  CombinedStream.call(this);

  options = options || {};
  for (var option in options) {
    this[option] = options[option];
  }
}

FormData.LINE_BREAK = '\r\n';
FormData.DEFAULT_CONTENT_TYPE = 'application/octet-stream';

FormData.prototype.append = function(field, value, options) {

  options = options || {};

  // allow filename as single option
  if (typeof options == 'string') {
    options = {filename: options};
  }

  var append = CombinedStream.prototype.append.bind(this);

  // all that streamy business can't handle numbers
  if (typeof value == 'number') {
    value = '' + value;
  }

  // https://github.com/felixge/node-form-data/issues/38
  if (util.isArray(value)) {
    // Please convert your array into string
    // the way web server expects it
    this._error(new Error('Arrays are not supported.'));
    return;
  }

  var header = this._multiPartHeader(field, value, options);
  var footer = this._multiPartFooter();

  append(header);
  append(value);
  append(footer);

  // pass along options.knownLength
  this._trackLength(header, value, options);
};

FormData.prototype._trackLength = function(header, value, options) {
  var valueLength = 0;

  // used w/ getLengthSync(), when length is known.
  // e.g. for streaming directly from a remote server,
  // w/ a known file a size, and not wanting to wait for
  // incoming file to finish to get its size.
  if (options.knownLength != null) {
    valueLength += +options.knownLength;
  } else if (Buffer.isBuffer(value)) {
    valueLength = value.length;
  } else if (typeof value === 'string') {
    valueLength = Buffer.byteLength(value);
  }

  this._valueLength += valueLength;

  // @check why add CRLF? does this account for custom/multiple CRLFs?
  this._overheadLength +=
    Buffer.byteLength(header) +
    FormData.LINE_BREAK.length;

  // empty or either doesn't have path or not an http response or not a stream
  if (!value || ( !value.path && !(value.readable && value.hasOwnProperty('httpVersion')) && !(value instanceof Stream))) {
    return;
  }

  // no need to bother with the length
  if (!options.knownLength) {
    this._valuesToMeasure.push(value);
  }
};

FormData.prototype._lengthRetriever = function(value, callback) {

  if (value.hasOwnProperty('fd')) {

    // take read range into a account
    // `end` = Infinity –> read file till the end
    //
    // TODO: Looks like there is bug in Node fs.createReadStream
    // it doesn't respect `end` options without `start` options
    // Fix it when node fixes it.
    // https://github.com/joyent/node/issues/7819
    if (value.end != undefined && value.end != Infinity && value.start != undefined) {

      // when end specified
      // no need to calculate range
      // inclusive, starts with 0
      callback(null, value.end + 1 - (value.start ? value.start : 0));

    // not that fast snoopy
    } else {
      // still need to fetch file size from fs
      fs.stat(value.path, function(err, stat) {

        var fileSize;

        if (err) {
          callback(err);
          return;
        }

        // update final size based on the range options
        fileSize = stat.size - (value.start ? value.start : 0);
        callback(null, fileSize);
      });
    }

  // or http response
  } else if (value.hasOwnProperty('httpVersion')) {
    callback(null, +value.headers['content-length']);

  // or request stream http://github.com/mikeal/request
  } else if (value.hasOwnProperty('httpModule')) {
    // wait till response come back
    value.on('response', function(response) {
      value.pause();
      callback(null, +response.headers['content-length']);
    });
    value.resume();

  // something else
  } else {
    callback('Unknown stream');
  }
};

FormData.prototype._multiPartHeader = function(field, value, options) {
  // custom header specified (as string)?
  // it becomes responsible for boundary
  // (e.g. to handle extra CRLFs on .NET servers)
  if (typeof options.header == 'string') {
    return options.header;
  }

  var contentDisposition = this._getContentDisposition(value, options);
  var contentType = this._getContentType(value, options);

  var contents = '';
  var headers  = {
    // add custom disposition as third element or keep it two elements if not
    'Content-Disposition': ['form-data', 'name="' + field + '"'].concat(contentDisposition || []),
    // if no content type. allow it to be empty array
    'Content-Type': [].concat(contentType || [])
  };

  // allow custom headers.
  if (typeof options.header == 'object') {
    populate(headers, options.header);
  }

  var header;
  for (var prop in headers) {
    if (!headers.hasOwnProperty(prop)) continue;
    header = headers[prop];

    // skip nullish headers.
    if (header == null) {
      continue;
    }

    // convert all headers to arrays.
    if (!Array.isArray(header)) {
      header = [header];
    }

    // add non-empty headers.
    if (header.length) {
      contents += prop + ': ' + header.join('; ') + FormData.LINE_BREAK;
    }
  }

  return '--' + this.getBoundary() + FormData.LINE_BREAK + contents + FormData.LINE_BREAK;
};

FormData.prototype._getContentDisposition = function(value, options) {

  var filename
    , contentDisposition
    ;

  if (typeof options.filepath === 'string') {
    // custom filepath for relative paths
    filename = path.normalize(options.filepath).replace(/\\/g, '/');
  } else if (options.filename || value.name || value.path) {
    // custom filename take precedence
    // formidable and the browser add a name property
    // fs- and request- streams have path property
    filename = path.basename(options.filename || value.name || value.path);
  } else if (value.readable && value.hasOwnProperty('httpVersion')) {
    // or try http response
    filename = path.basename(value.client._httpMessage.path || '');
  }

  if (filename) {
    contentDisposition = 'filename="' + filename + '"';
  }

  return contentDisposition;
};

FormData.prototype._getContentType = function(value, options) {

  // use custom content-type above all
  var contentType = options.contentType;

  // or try `name` from formidable, browser
  if (!contentType && value.name) {
    contentType = mime.lookup(value.name);
  }

  // or try `path` from fs-, request- streams
  if (!contentType && value.path) {
    contentType = mime.lookup(value.path);
  }

  // or if it's http-reponse
  if (!contentType && value.readable && value.hasOwnProperty('httpVersion')) {
    contentType = value.headers['content-type'];
  }

  // or guess it from the filepath or filename
  if (!contentType && (options.filepath || options.filename)) {
    contentType = mime.lookup(options.filepath || options.filename);
  }

  // fallback to the default content type if `value` is not simple value
  if (!contentType && typeof value == 'object') {
    contentType = FormData.DEFAULT_CONTENT_TYPE;
  }

  return contentType;
};

FormData.prototype._multiPartFooter = function() {
  return function(next) {
    var footer = FormData.LINE_BREAK;

    var lastPart = (this._streams.length === 0);
    if (lastPart) {
      footer += this._lastBoundary();
    }

    next(footer);
  }.bind(this);
};

FormData.prototype._lastBoundary = function() {
  return '--' + this.getBoundary() + '--' + FormData.LINE_BREAK;
};

FormData.prototype.getHeaders = function(userHeaders) {
  var header;
  var formHeaders = {
    'content-type': 'multipart/form-data; boundary=' + this.getBoundary()
  };

  for (header in userHeaders) {
    if (userHeaders.hasOwnProperty(header)) {
      formHeaders[header.toLowerCase()] = userHeaders[header];
    }
  }

  return formHeaders;
};

FormData.prototype.setBoundary = function(boundary) {
  this._boundary = boundary;
};

FormData.prototype.getBoundary = function() {
  if (!this._boundary) {
    this._generateBoundary();
  }

  return this._boundary;
};

FormData.prototype.getBuffer = function() {
  var dataBuffer = new Buffer.alloc( 0 );
  var boundary = this.getBoundary();

  // Create the form content. Add Line breaks to the end of data.
  for (var i = 0, len = this._streams.length; i < len; i++) {
    if (typeof this._streams[i] !== 'function') {

      // Add content to the buffer.
      if(Buffer.isBuffer(this._streams[i])) {
        dataBuffer = Buffer.concat( [dataBuffer, this._streams[i]]);
      }else {
        dataBuffer = Buffer.concat( [dataBuffer, Buffer.from(this._streams[i])]);
      }

      // Add break after content.
      if (typeof this._streams[i] !== 'string' || this._streams[i].substring( 2, boundary.length + 2 ) !== boundary) {
        dataBuffer = Buffer.concat( [dataBuffer, Buffer.from(FormData.LINE_BREAK)] );
      }
    }
  }

  // Add the footer and return the Buffer object.
  return Buffer.concat( [dataBuffer, Buffer.from(this._lastBoundary())] );
};

FormData.prototype._generateBoundary = function() {
  // This generates a 50 character boundary similar to those used by Firefox.
  // They are optimized for boyer-moore parsing.
  var boundary = '--------------------------';
  for (var i = 0; i < 24; i++) {
    boundary += Math.floor(Math.random() * 10).toString(16);
  }

  this._boundary = boundary;
};

// Note: getLengthSync DOESN'T calculate streams length
// As workaround one can calculate file size manually
// and add it as knownLength option
FormData.prototype.getLengthSync = function() {
  var knownLength = this._overheadLength + this._valueLength;

  // Don't get confused, there are 3 "internal" streams for each keyval pair
  // so it basically checks if there is any value added to the form
  if (this._streams.length) {
    knownLength += this._lastBoundary().length;
  }

  // https://github.com/form-data/form-data/issues/40
  if (!this.hasKnownLength()) {
    // Some async length retrievers are present
    // therefore synchronous length calculation is false.
    // Please use getLength(callback) to get proper length
    this._error(new Error('Cannot calculate proper length in synchronous way.'));
  }

  return knownLength;
};

// Public API to check if length of added values is known
// https://github.com/form-data/form-data/issues/196
// https://github.com/form-data/form-data/issues/262
FormData.prototype.hasKnownLength = function() {
  var hasKnownLength = true;

  if (this._valuesToMeasure.length) {
    hasKnownLength = false;
  }

  return hasKnownLength;
};

FormData.prototype.getLength = function(cb) {
  var knownLength = this._overheadLength + this._valueLength;

  if (this._streams.length) {
    knownLength += this._lastBoundary().length;
  }

  if (!this._valuesToMeasure.length) {
    process.nextTick(cb.bind(this, null, knownLength));
    return;
  }

  asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function(err, values) {
    if (err) {
      cb(err);
      return;
    }

    values.forEach(function(length) {
      knownLength += length;
    });

    cb(null, knownLength);
  });
};

FormData.prototype.submit = function(params, cb) {
  var request
    , options
    , defaults = {method: 'post'}
    ;

  // parse provided url if it's string
  // or treat it as options object
  if (typeof params == 'string') {

    params = parseUrl(params);
    options = populate({
      port: params.port,
      path: params.pathname,
      host: params.hostname,
      protocol: params.protocol
    }, defaults);

  // use custom params
  } else {

    options = populate(params, defaults);
    // if no port provided use default one
    if (!options.port) {
      options.port = options.protocol == 'https:' ? 443 : 80;
    }
  }

  // put that good code in getHeaders to some use
  options.headers = this.getHeaders(params.headers);

  // https if specified, fallback to http in any other case
  if (options.protocol == 'https:') {
    request = https.request(options);
  } else {
    request = http.request(options);
  }

  // get content length and fire away
  this.getLength(function(err, length) {
    if (err && err !== 'Unknown stream') {
      this._error(err);
      return;
    }

    // add content length
    if (length) {
      request.setHeader('Content-Length', length);
    }

    this.pipe(request);
    if (cb) {
      var onResponse;

      var callback = function (error, responce) {
        request.removeListener('error', callback);
        request.removeListener('response', onResponse);

        return cb.call(this, error, responce);
      };

      onResponse = callback.bind(this, null);

      request.on('error', callback);
      request.on('response', onResponse);
    }
  }.bind(this));

  return request;
};

FormData.prototype._error = function(err) {
  if (!this.error) {
    this.error = err;
    this.pause();
    this.emit('error', err);
  }
};

FormData.prototype.toString = function () {
  return '[object FormData]';
};


/***/ }),

/***/ 3024:
/***/ ((module) => {

// populates missing values
module.exports = function(dst, src) {

  Object.keys(src).forEach(function(prop)
  {
    dst[prop] = dst[prop] || src[prop];
  });

  return dst;
};


/***/ }),

/***/ 6461:
/***/ ((module) => {

"use strict";


module.exports = (flag, argv = process.argv) => {
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const position = argv.indexOf(prefix + flag);
	const terminatorPosition = argv.indexOf('--');
	return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};


/***/ }),

/***/ 4618:
/***/ (function(module) {

/*! js-cookie v3.0.5 | MIT */
;
(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  /* eslint-disable no-var */
  function assign (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        target[key] = source[key];
      }
    }
    return target
  }
  /* eslint-enable no-var */

  /* eslint-disable no-var */
  var defaultConverter = {
    read: function (value) {
      if (value[0] === '"') {
        value = value.slice(1, -1);
      }
      return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function (value) {
      return encodeURIComponent(value).replace(
        /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
        decodeURIComponent
      )
    }
  };
  /* eslint-enable no-var */

  /* eslint-disable no-var */

  function init (converter, defaultAttributes) {
    function set (name, value, attributes) {
      if (typeof document === 'undefined') {
        return
      }

      attributes = assign({}, defaultAttributes, attributes);

      if (typeof attributes.expires === 'number') {
        attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
      }
      if (attributes.expires) {
        attributes.expires = attributes.expires.toUTCString();
      }

      name = encodeURIComponent(name)
        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
        .replace(/[()]/g, escape);

      var stringifiedAttributes = '';
      for (var attributeName in attributes) {
        if (!attributes[attributeName]) {
          continue
        }

        stringifiedAttributes += '; ' + attributeName;

        if (attributes[attributeName] === true) {
          continue
        }

        // Considers RFC 6265 section 5.2:
        // ...
        // 3.  If the remaining unparsed-attributes contains a %x3B (";")
        //     character:
        // Consume the characters of the unparsed-attributes up to,
        // not including, the first %x3B (";") character.
        // ...
        stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
      }

      return (document.cookie =
        name + '=' + converter.write(value, name) + stringifiedAttributes)
    }

    function get (name) {
      if (typeof document === 'undefined' || (arguments.length && !name)) {
        return
      }

      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all.
      var cookies = document.cookie ? document.cookie.split('; ') : [];
      var jar = {};
      for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        var value = parts.slice(1).join('=');

        try {
          var found = decodeURIComponent(parts[0]);
          jar[found] = converter.read(value, found);

          if (name === found) {
            break
          }
        } catch (e) {}
      }

      return name ? jar[name] : jar
    }

    return Object.create(
      {
        set,
        get,
        remove: function (name, attributes) {
          set(
            name,
            '',
            assign({}, attributes, {
              expires: -1
            })
          );
        },
        withAttributes: function (attributes) {
          return init(this.converter, assign({}, this.attributes, attributes))
        },
        withConverter: function (converter) {
          return init(assign({}, this.converter, converter), this.attributes)
        }
      },
      {
        attributes: { value: Object.freeze(defaultAttributes) },
        converter: { value: Object.freeze(converter) }
      }
    )
  }

  var api = init(defaultConverter, { path: '/' });
  /* eslint-enable no-var */

  return api;

}));


/***/ }),

/***/ 7024:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015-2022 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 */

module.exports = __webpack_require__(572)


/***/ }),

/***/ 2994:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var db = __webpack_require__(7024)
var extname = (__webpack_require__(1017).extname)

/**
 * Module variables.
 * @private
 */

var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/
var TEXT_TYPE_REGEXP = /^text\//i

/**
 * Module exports.
 * @public
 */

exports.charset = charset
exports.charsets = { lookup: charset }
exports.contentType = contentType
exports.extension = extension
exports.extensions = Object.create(null)
exports.lookup = lookup
exports.types = Object.create(null)

// Populate the extensions/types maps
populateMaps(exports.extensions, exports.types)

/**
 * Get the default charset for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */

function charset (type) {
  if (!type || typeof type !== 'string') {
    return false
  }

  // TODO: use media-typer
  var match = EXTRACT_TYPE_REGEXP.exec(type)
  var mime = match && db[match[1].toLowerCase()]

  if (mime && mime.charset) {
    return mime.charset
  }

  // default text/* to utf-8
  if (match && TEXT_TYPE_REGEXP.test(match[1])) {
    return 'UTF-8'
  }

  return false
}

/**
 * Create a full Content-Type header given a MIME type or extension.
 *
 * @param {string} str
 * @return {boolean|string}
 */

function contentType (str) {
  // TODO: should this even be in this module?
  if (!str || typeof str !== 'string') {
    return false
  }

  var mime = str.indexOf('/') === -1
    ? exports.lookup(str)
    : str

  if (!mime) {
    return false
  }

  // TODO: use content-type or other module
  if (mime.indexOf('charset') === -1) {
    var charset = exports.charset(mime)
    if (charset) mime += '; charset=' + charset.toLowerCase()
  }

  return mime
}

/**
 * Get the default extension for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */

function extension (type) {
  if (!type || typeof type !== 'string') {
    return false
  }

  // TODO: use media-typer
  var match = EXTRACT_TYPE_REGEXP.exec(type)

  // get extensions
  var exts = match && exports.extensions[match[1].toLowerCase()]

  if (!exts || !exts.length) {
    return false
  }

  return exts[0]
}

/**
 * Lookup the MIME type for a file path/extension.
 *
 * @param {string} path
 * @return {boolean|string}
 */

function lookup (path) {
  if (!path || typeof path !== 'string') {
    return false
  }

  // get the extension ("ext" or ".ext" or full path)
  var extension = extname('x.' + path)
    .toLowerCase()
    .substr(1)

  if (!extension) {
    return false
  }

  return exports.types[extension] || false
}

/**
 * Populate the extensions and types maps.
 * @private
 */

function populateMaps (extensions, types) {
  // source preference (least -> most)
  var preference = ['nginx', 'apache', undefined, 'iana']

  Object.keys(db).forEach(function forEachMimeType (type) {
    var mime = db[type]
    var exts = mime.extensions

    if (!exts || !exts.length) {
      return
    }

    // mime -> extensions
    extensions[type] = exts

    // extension -> mime
    for (var i = 0; i < exts.length; i++) {
      var extension = exts[i]

      if (types[extension]) {
        var from = preference.indexOf(db[types[extension]].source)
        var to = preference.indexOf(mime.source)

        if (types[extension] !== 'application/octet-stream' &&
          (from > to || (from === to && types[extension].substr(0, 12) === 'application/'))) {
          // skip the remapping
          continue
        }
      }

      // set the extension -> mime
      types[extension] = type
    }
  })
}


/***/ }),

/***/ 9842:
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ 4578:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addBasePath", ({
    enumerable: true,
    get: function() {
        return addBasePath;
    }
}));
const _addpathprefix = __webpack_require__(893);
const _normalizetrailingslash = __webpack_require__(1094);
const basePath = "/react-notes-test" || 0;
function addBasePath(path, required) {
    return (0, _normalizetrailingslash.normalizePathTrailingSlash)( false ? 0 : (0, _addpathprefix.addPathPrefix)(path, basePath));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map


/***/ }),

/***/ 6937:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "callServer", ({
    enumerable: true,
    get: function() {
        return callServer;
    }
}));
const _approuter = __webpack_require__(2987);
async function callServer(actionId, actionArgs) {
    const actionDispatcher = (0, _approuter.getServerActionDispatcher)();
    if (!actionDispatcher) {
        throw new Error("Invariant: missing action dispatcher.");
    }
    return new Promise((resolve, reject)=>{
        actionDispatcher({
            actionId,
            actionArgs,
            resolve,
            reject
        });
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-call-server.js.map


/***/ }),

/***/ 3049:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "AppRouterAnnouncer", ({
    enumerable: true,
    get: function() {
        return AppRouterAnnouncer;
    }
}));
const _react = __webpack_require__(8038);
const _reactdom = __webpack_require__(8704);
const ANNOUNCER_TYPE = "next-route-announcer";
const ANNOUNCER_ID = "__next-route-announcer__";
function getAnnouncerNode() {
    var _existingAnnouncer_shadowRoot;
    const existingAnnouncer = document.getElementsByName(ANNOUNCER_TYPE)[0];
    if (existingAnnouncer == null ? void 0 : (_existingAnnouncer_shadowRoot = existingAnnouncer.shadowRoot) == null ? void 0 : _existingAnnouncer_shadowRoot.childNodes[0]) {
        return existingAnnouncer.shadowRoot.childNodes[0];
    } else {
        const container = document.createElement(ANNOUNCER_TYPE);
        container.style.cssText = "position:absolute";
        const announcer = document.createElement("div");
        announcer.ariaLive = "assertive";
        announcer.id = ANNOUNCER_ID;
        announcer.role = "alert";
        announcer.style.cssText = "position:absolute;border:0;height:1px;margin:-1px;padding:0;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap;word-wrap:normal";
        // Use shadow DOM here to avoid any potential CSS bleed
        const shadow = container.attachShadow({
            mode: "open"
        });
        shadow.appendChild(announcer);
        document.body.appendChild(container);
        return announcer;
    }
}
function AppRouterAnnouncer(param) {
    let { tree } = param;
    const [portalNode, setPortalNode] = (0, _react.useState)(null);
    (0, _react.useEffect)(()=>{
        const announcer = getAnnouncerNode();
        setPortalNode(announcer);
        return ()=>{
            const container = document.getElementsByTagName(ANNOUNCER_TYPE)[0];
            if (container == null ? void 0 : container.isConnected) {
                document.body.removeChild(container);
            }
        };
    }, []);
    const [routeAnnouncement, setRouteAnnouncement] = (0, _react.useState)("");
    const previousTitle = (0, _react.useRef)();
    (0, _react.useEffect)(()=>{
        let currentTitle = "";
        if (document.title) {
            currentTitle = document.title;
        } else {
            const pageHeader = document.querySelector("h1");
            if (pageHeader) {
                currentTitle = pageHeader.innerText || pageHeader.textContent || "";
            }
        }
        // Only announce the title change, but not for the first load because screen
        // readers do that automatically.
        if (previousTitle.current !== undefined) {
            setRouteAnnouncement(currentTitle);
        }
        previousTitle.current = currentTitle;
    }, [
        tree
    ]);
    return portalNode ? /*#__PURE__*/ (0, _reactdom.createPortal)(routeAnnouncement, portalNode) : null;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-announcer.js.map


/***/ }),

/***/ 6265:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RSC: function() {
        return RSC;
    },
    ACTION: function() {
        return ACTION;
    },
    NEXT_ROUTER_STATE_TREE: function() {
        return NEXT_ROUTER_STATE_TREE;
    },
    NEXT_ROUTER_PREFETCH: function() {
        return NEXT_ROUTER_PREFETCH;
    },
    NEXT_URL: function() {
        return NEXT_URL;
    },
    FETCH_CACHE_HEADER: function() {
        return FETCH_CACHE_HEADER;
    },
    RSC_CONTENT_TYPE_HEADER: function() {
        return RSC_CONTENT_TYPE_HEADER;
    },
    RSC_VARY_HEADER: function() {
        return RSC_VARY_HEADER;
    },
    FLIGHT_PARAMETERS: function() {
        return FLIGHT_PARAMETERS;
    },
    NEXT_RSC_UNION_QUERY: function() {
        return NEXT_RSC_UNION_QUERY;
    }
});
const RSC = "RSC";
const ACTION = "Next-Action";
const NEXT_ROUTER_STATE_TREE = "Next-Router-State-Tree";
const NEXT_ROUTER_PREFETCH = "Next-Router-Prefetch";
const NEXT_URL = "Next-Url";
const FETCH_CACHE_HEADER = "x-vercel-sc-headers";
const RSC_CONTENT_TYPE_HEADER = "text/x-component";
const RSC_VARY_HEADER = RSC + ", " + NEXT_ROUTER_STATE_TREE + ", " + NEXT_ROUTER_PREFETCH;
const FLIGHT_PARAMETERS = [
    [
        RSC
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH
    ]
];
const NEXT_RSC_UNION_QUERY = "_rsc";
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-headers.js.map


/***/ }),

/***/ 2987:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getServerActionDispatcher: function() {
        return getServerActionDispatcher;
    },
    urlToUrlWithoutFlightMarker: function() {
        return urlToUrlWithoutFlightMarker;
    },
    default: function() {
        return AppRouter;
    }
});
const _interop_require_wildcard = __webpack_require__(4009);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(8038));
const _approutercontext = __webpack_require__(7085);
const _routerreducer = __webpack_require__(7189);
const _routerreducertypes = __webpack_require__(2836);
const _createhreffromurl = __webpack_require__(4331);
const _hooksclientcontext = __webpack_require__(9569);
const _usereducerwithdevtools = __webpack_require__(7951);
const _errorboundary = __webpack_require__(1232);
const _createinitialrouterstate = __webpack_require__(1684);
const _isbot = __webpack_require__(8735);
const _addbasepath = __webpack_require__(4578);
const _approuterannouncer = __webpack_require__(3049);
const _redirectboundary = __webpack_require__(1442);
const _findheadincache = __webpack_require__(1333);
const _infinitepromise = __webpack_require__(6360);
const _approuterheaders = __webpack_require__(6265);
const isServer = "undefined" === "undefined";
// Ensure the initialParallelRoutes are not combined because of double-rendering in the browser with Strict Mode.
let initialParallelRoutes = isServer ? null : new Map();
let globalServerActionDispatcher = null;
function getServerActionDispatcher() {
    return globalServerActionDispatcher;
}
function urlToUrlWithoutFlightMarker(url) {
    const urlWithoutFlightParameters = new URL(url, location.origin);
    urlWithoutFlightParameters.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    if (true) {
        if (false) {}
    }
    return urlWithoutFlightParameters;
}
function isExternalURL(url) {
    return url.origin !== window.location.origin;
}
function HistoryUpdater(param) {
    let { tree, pushRef, canonicalUrl, sync } = param;
    (0, _react.useInsertionEffect)(()=>{
        // Identifier is shortened intentionally.
        // __NA is used to identify if the history entry can be handled by the app-router.
        // __N is used to identify if the history entry can be handled by the old router.
        const historyState = {
            __NA: true,
            tree
        };
        if (pushRef.pendingPush && (0, _createhreffromurl.createHrefFromUrl)(new URL(window.location.href)) !== canonicalUrl) {
            // This intentionally mutates React state, pushRef is overwritten to ensure additional push/replace calls do not trigger an additional history entry.
            pushRef.pendingPush = false;
            window.history.pushState(historyState, "", canonicalUrl);
        } else {
            window.history.replaceState(historyState, "", canonicalUrl);
        }
        sync();
    }, [
        tree,
        pushRef,
        canonicalUrl,
        sync
    ]);
    return null;
}
const createEmptyCacheNode = ()=>({
        status: _approutercontext.CacheStates.LAZY_INITIALIZED,
        data: null,
        subTreeData: null,
        parallelRoutes: new Map()
    });
function useServerActionDispatcher(changeByServerResponse, dispatch, navigate) {
    const serverActionDispatcher = (0, _react.useCallback)((actionPayload)=>{
        (0, _react.startTransition)(()=>{
            dispatch({
                ...actionPayload,
                type: _routerreducertypes.ACTION_SERVER_ACTION,
                mutable: {},
                navigate,
                changeByServerResponse
            });
        });
    }, [
        changeByServerResponse,
        dispatch,
        navigate
    ]);
    globalServerActionDispatcher = serverActionDispatcher;
}
/**
 * Server response that only patches the cache and tree.
 */ function useChangeByServerResponse(dispatch) {
    return (0, _react.useCallback)((previousTree, flightData, overrideCanonicalUrl)=>{
        (0, _react.startTransition)(()=>{
            dispatch({
                type: _routerreducertypes.ACTION_SERVER_PATCH,
                flightData,
                previousTree,
                overrideCanonicalUrl,
                cache: createEmptyCacheNode(),
                mutable: {}
            });
        });
    }, [
        dispatch
    ]);
}
function useNavigate(dispatch) {
    return (0, _react.useCallback)((href, navigateType, forceOptimisticNavigation, shouldScroll)=>{
        const url = new URL((0, _addbasepath.addBasePath)(href), location.href);
        return dispatch({
            type: _routerreducertypes.ACTION_NAVIGATE,
            url,
            isExternalUrl: isExternalURL(url),
            locationSearch: location.search,
            forceOptimisticNavigation,
            shouldScroll: shouldScroll != null ? shouldScroll : true,
            navigateType,
            cache: createEmptyCacheNode(),
            mutable: {}
        });
    }, [
        dispatch
    ]);
}
/**
 * The global router that wraps the application components.
 */ function Router(param) {
    let { buildId, initialHead, initialTree, initialCanonicalUrl, children, assetPrefix } = param;
    const initialState = (0, _react.useMemo)(()=>(0, _createinitialrouterstate.createInitialRouterState)({
            buildId,
            children,
            initialCanonicalUrl,
            initialTree,
            initialParallelRoutes,
            isServer,
            location: !isServer ? window.location : null,
            initialHead
        }), [
        buildId,
        children,
        initialCanonicalUrl,
        initialTree,
        initialHead
    ]);
    const [{ tree, cache, prefetchCache, pushRef, focusAndScrollRef, canonicalUrl, nextUrl }, dispatch, sync] = (0, _usereducerwithdevtools.useReducerWithReduxDevtools)(_routerreducer.reducer, initialState);
    (0, _react.useEffect)(()=>{
        // Ensure initialParallelRoutes is cleaned up from memory once it's used.
        initialParallelRoutes = null;
    }, []);
    // Add memoized pathname/query for useSearchParams and usePathname.
    const { searchParams, pathname } = (0, _react.useMemo)(()=>{
        const url = new URL(canonicalUrl,  true ? "http://n" : 0);
        return {
            // This is turned into a readonly class in `useSearchParams`
            searchParams: url.searchParams,
            pathname: url.pathname
        };
    }, [
        canonicalUrl
    ]);
    const changeByServerResponse = useChangeByServerResponse(dispatch);
    const navigate = useNavigate(dispatch);
    useServerActionDispatcher(changeByServerResponse, dispatch, navigate);
    /**
   * The app router that is exposed through `useRouter`. It's only concerned with dispatching actions to the reducer, does not hold state.
   */ const appRouter = (0, _react.useMemo)(()=>{
        const routerInstance = {
            back: ()=>window.history.back(),
            forward: ()=>window.history.forward(),
            prefetch: (href, options)=>{
                // If prefetch has already been triggered, don't trigger it again.
                if ((0, _isbot.isBot)(window.navigator.userAgent)) {
                    return;
                }
                const url = new URL((0, _addbasepath.addBasePath)(href), location.href);
                // External urls can't be prefetched in the same way.
                if (isExternalURL(url)) {
                    return;
                }
                (0, _react.startTransition)(()=>{
                    var _options_kind;
                    dispatch({
                        type: _routerreducertypes.ACTION_PREFETCH,
                        url,
                        kind: (_options_kind = options == null ? void 0 : options.kind) != null ? _options_kind : _routerreducertypes.PrefetchKind.FULL
                    });
                });
            },
            replace: (href, options)=>{
                if (options === void 0) options = {};
                (0, _react.startTransition)(()=>{
                    var _options_scroll;
                    navigate(href, "replace", Boolean(options.forceOptimisticNavigation), (_options_scroll = options.scroll) != null ? _options_scroll : true);
                });
            },
            push: (href, options)=>{
                if (options === void 0) options = {};
                (0, _react.startTransition)(()=>{
                    var _options_scroll;
                    navigate(href, "push", Boolean(options.forceOptimisticNavigation), (_options_scroll = options.scroll) != null ? _options_scroll : true);
                });
            },
            refresh: ()=>{
                (0, _react.startTransition)(()=>{
                    dispatch({
                        type: _routerreducertypes.ACTION_REFRESH,
                        cache: createEmptyCacheNode(),
                        mutable: {},
                        origin: window.location.origin
                    });
                });
            },
            // @ts-ignore we don't want to expose this method at all
            fastRefresh: ()=>{
                if (true) {
                    throw new Error("fastRefresh can only be used in development mode. Please use refresh instead.");
                } else {}
            }
        };
        return routerInstance;
    }, [
        dispatch,
        navigate
    ]);
    (0, _react.useEffect)(()=>{
        // Exists for debugging purposes. Don't use in application code.
        if (window.next) {
            window.next.router = appRouter;
        }
    }, [
        appRouter
    ]);
    if (false) {}
    // When mpaNavigation flag is set do a hard navigation to the new url.
    // Infinitely suspend because we don't actually want to rerender any child
    // components with the new URL and any entangled state updates shouldn't
    // commit either (eg: useTransition isPending should stay true until the page
    // unloads).
    //
    // This is a side effect in render. Don't try this at home, kids. It's
    // probably safe because we know this is a singleton component and it's never
    // in <Offscreen>. At least I hope so. (It will run twice in dev strict mode,
    // but that's... fine?)
    if (pushRef.mpaNavigation) {
        const location1 = window.location;
        if (pushRef.pendingPush) {
            location1.assign(canonicalUrl);
        } else {
            location1.replace(canonicalUrl);
        }
        // TODO-APP: Should we listen to navigateerror here to catch failed
        // navigations somehow? And should we call window.stop() if a SPA navigation
        // should interrupt an MPA one?
        (0, _react.use)((0, _infinitepromise.createInfinitePromise)());
    }
    /**
   * Handle popstate event, this is used to handle back/forward in the browser.
   * By default dispatches ACTION_RESTORE, however if the history entry was not pushed/replaced by app-router it will reload the page.
   * That case can happen when the old router injected the history entry.
   */ const onPopState = (0, _react.useCallback)((param)=>{
        let { state } = param;
        if (!state) {
            // TODO-APP: this case only happens when pushState/replaceState was called outside of Next.js. It should probably reload the page in this case.
            return;
        }
        // This case happens when the history entry was pushed by the `pages` router.
        if (!state.__NA) {
            window.location.reload();
            return;
        }
        // @ts-ignore useTransition exists
        // TODO-APP: Ideally the back button should not use startTransition as it should apply the updates synchronously
        // Without startTransition works if the cache is there for this path
        (0, _react.startTransition)(()=>{
            dispatch({
                type: _routerreducertypes.ACTION_RESTORE,
                url: new URL(window.location.href),
                tree: state.tree
            });
        });
    }, [
        dispatch
    ]);
    // Register popstate event to call onPopstate.
    (0, _react.useEffect)(()=>{
        window.addEventListener("popstate", onPopState);
        return ()=>{
            window.removeEventListener("popstate", onPopState);
        };
    }, [
        onPopState
    ]);
    const head = (0, _react.useMemo)(()=>{
        return (0, _findheadincache.findHeadInCache)(cache, tree[1]);
    }, [
        cache,
        tree
    ]);
    let content = /*#__PURE__*/ _react.default.createElement(_redirectboundary.RedirectBoundary, null, head, cache.subTreeData, /*#__PURE__*/ _react.default.createElement(_approuterannouncer.AppRouterAnnouncer, {
        tree: tree
    }));
    if (false) {}
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(HistoryUpdater, {
        tree: tree,
        pushRef: pushRef,
        canonicalUrl: canonicalUrl,
        sync: sync
    }), /*#__PURE__*/ _react.default.createElement(_hooksclientcontext.PathnameContext.Provider, {
        value: pathname
    }, /*#__PURE__*/ _react.default.createElement(_hooksclientcontext.SearchParamsContext.Provider, {
        value: searchParams
    }, /*#__PURE__*/ _react.default.createElement(_approutercontext.GlobalLayoutRouterContext.Provider, {
        value: {
            buildId,
            changeByServerResponse,
            tree,
            focusAndScrollRef,
            nextUrl
        }
    }, /*#__PURE__*/ _react.default.createElement(_approutercontext.AppRouterContext.Provider, {
        value: appRouter
    }, /*#__PURE__*/ _react.default.createElement(_approutercontext.LayoutRouterContext.Provider, {
        value: {
            childNodes: cache.parallelRoutes,
            tree: tree,
            // Root node always has `url`
            // Provided in AppTreeContext to ensure it can be overwritten in layout-router
            url: canonicalUrl
        }
    }, content))))));
}
function AppRouter(props) {
    const { globalErrorComponent, ...rest } = props;
    return /*#__PURE__*/ _react.default.createElement(_errorboundary.ErrorBoundary, {
        errorComponent: globalErrorComponent
    }, /*#__PURE__*/ _react.default.createElement(Router, rest));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router.js.map


/***/ }),

/***/ 5661:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "bailoutToClientRendering", ({
    enumerable: true,
    get: function() {
        return bailoutToClientRendering;
    }
}));
const _dynamicnossr = __webpack_require__(9708);
const _staticgenerationasyncstorage = __webpack_require__(3539);
function bailoutToClientRendering() {
    const staticGenerationStore = _staticgenerationasyncstorage.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        (0, _dynamicnossr.suspense)();
    }
    return false;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bailout-to-client-rendering.js.map


/***/ }),

/***/ 2633:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "clientHookInServerComponentError", ({
    enumerable: true,
    get: function() {
        return clientHookInServerComponentError;
    }
}));
const _interop_require_default = __webpack_require__(2147);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8038));
function clientHookInServerComponentError(hookName) {
    if (false) {}
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client-hook-in-server-component-error.js.map


/***/ }),

/***/ 1232:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ErrorBoundaryHandler: function() {
        return ErrorBoundaryHandler;
    },
    GlobalError: function() {
        return GlobalError;
    },
    ErrorBoundary: function() {
        return ErrorBoundary;
    }
});
const _interop_require_default = __webpack_require__(2147);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8038));
const _navigation = __webpack_require__(696);
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "28px",
        margin: "0 8px"
    }
};
class ErrorBoundaryHandler extends _react.default.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    static getDerivedStateFromProps(props, state) {
        /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.error) {
            return {
                error: null,
                previousPathname: props.pathname
            };
        }
        return {
            error: state.error,
            previousPathname: props.pathname
        };
    }
    render() {
        if (this.state.error) {
            return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, this.props.errorStyles, /*#__PURE__*/ _react.default.createElement(this.props.errorComponent, {
                error: this.state.error,
                reset: this.reset
            }));
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.reset = ()=>{
            this.setState({
                error: null
            });
        };
        this.state = {
            error: null,
            previousPathname: this.props.pathname
        };
    }
}
function GlobalError(param) {
    let { error } = param;
    const digest = error == null ? void 0 : error.digest;
    return /*#__PURE__*/ _react.default.createElement("html", {
        id: "__next_error__"
    }, /*#__PURE__*/ _react.default.createElement("head", null), /*#__PURE__*/ _react.default.createElement("body", null, /*#__PURE__*/ _react.default.createElement("div", {
        style: styles.error
    }, /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("h2", {
        style: styles.text
    }, "Application error: a " + (digest ? "server" : "client") + "-side exception has occurred (see the " + (digest ? "server logs" : "browser console") + " for more information)."), digest ? /*#__PURE__*/ _react.default.createElement("p", {
        style: styles.text
    }, "Digest: " + digest) : null))));
}
function ErrorBoundary(param) {
    let { errorComponent, errorStyles, children } = param;
    const pathname = (0, _navigation.usePathname)();
    if (errorComponent) {
        return /*#__PURE__*/ _react.default.createElement(ErrorBoundaryHandler, {
            pathname: pathname,
            errorComponent: errorComponent,
            errorStyles: errorStyles
        }, children);
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-boundary.js.map


/***/ }),

/***/ 8047:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DYNAMIC_ERROR_CODE: function() {
        return DYNAMIC_ERROR_CODE;
    },
    DynamicServerError: function() {
        return DynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = "DYNAMIC_SERVER_USAGE";
class DynamicServerError extends Error {
    constructor(type){
        super("Dynamic server usage: " + type);
        this.digest = DYNAMIC_ERROR_CODE;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map


/***/ }),

/***/ 6360:
/***/ ((module, exports) => {

"use strict";
/**
 * Used to cache in createInfinitePromise
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createInfinitePromise", ({
    enumerable: true,
    get: function() {
        return createInfinitePromise;
    }
}));
let infinitePromise;
function createInfinitePromise() {
    if (!infinitePromise) {
        // Only create the Promise once
        infinitePromise = new Promise(()=>{
        // This is used to debug when the rendering is never updated.
        // setTimeout(() => {
        //   infinitePromise = new Error('Infinite promise')
        //   resolve()
        // }, 5000)
        });
    }
    return infinitePromise;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=infinite-promise.js.map


/***/ }),

/***/ 831:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return OuterLayoutRouter;
    }
}));
const _interop_require_default = __webpack_require__(2147);
const _interop_require_wildcard = __webpack_require__(4009);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(8038));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8704));
const _approutercontext = __webpack_require__(7085);
const _fetchserverresponse = __webpack_require__(8080);
const _infinitepromise = __webpack_require__(6360);
const _errorboundary = __webpack_require__(1232);
const _matchsegments = __webpack_require__(7618);
const _handlesmoothscroll = __webpack_require__(7887);
const _redirectboundary = __webpack_require__(1442);
const _notfoundboundary = __webpack_require__(6505);
const _getsegmentvalue = __webpack_require__(7741);
const _createroutercachekey = __webpack_require__(8870);
/**
 * Add refetch marker to router state at the point of the current layout segment.
 * This ensures the response returned is not further down than the current layout segment.
 */ function walkAddRefetch(segmentPathToWalk, treeToRecreate) {
    if (segmentPathToWalk) {
        const [segment, parallelRouteKey] = segmentPathToWalk;
        const isLast = segmentPathToWalk.length === 2;
        if ((0, _matchsegments.matchSegment)(treeToRecreate[0], segment)) {
            if (treeToRecreate[1].hasOwnProperty(parallelRouteKey)) {
                if (isLast) {
                    const subTree = walkAddRefetch(undefined, treeToRecreate[1][parallelRouteKey]);
                    return [
                        treeToRecreate[0],
                        {
                            ...treeToRecreate[1],
                            [parallelRouteKey]: [
                                subTree[0],
                                subTree[1],
                                subTree[2],
                                "refetch"
                            ]
                        }
                    ];
                }
                return [
                    treeToRecreate[0],
                    {
                        ...treeToRecreate[1],
                        [parallelRouteKey]: walkAddRefetch(segmentPathToWalk.slice(2), treeToRecreate[1][parallelRouteKey])
                    }
                ];
            }
        }
    }
    return treeToRecreate;
}
// TODO-APP: Replace with new React API for finding dom nodes without a `ref` when available
/**
 * Wraps ReactDOM.findDOMNode with additional logic to hide React Strict Mode warning
 */ function findDOMNode(instance) {
    // Tree-shake for server bundle
    if (true) return null;
    // Only apply strict mode warning when not in production
    if (false) {}
    return _reactdom.default.findDOMNode(instance);
}
const rectProperties = [
    "bottom",
    "height",
    "left",
    "right",
    "top",
    "width",
    "x",
    "y"
];
/**
 * Check if a HTMLElement is hidden.
 */ function elementCanScroll(element) {
    // Uses `getBoundingClientRect` to check if the element is hidden instead of `offsetParent`
    // because `offsetParent` doesn't consider document/body
    const rect = element.getBoundingClientRect();
    return rectProperties.every((item)=>rect[item] === 0);
}
/**
 * Check if the top corner of the HTMLElement is in the viewport.
 */ function topOfElementInViewport(element, viewportHeight) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= viewportHeight;
}
/**
 * Find the DOM node for a hash fragment.
 * If `top` the page has to scroll to the top of the page. This mirrors the browser's behavior.
 * If the hash fragment is an id, the page has to scroll to the element with that id.
 * If the hash fragment is a name, the page has to scroll to the first element with that name.
 */ function getHashFragmentDomNode(hashFragment) {
    // If the hash fragment is `top` the page has to scroll to the top of the page.
    if (hashFragment === "top") {
        return document.body;
    }
    var _document_getElementById;
    // If the hash fragment is an id, the page has to scroll to the element with that id.
    return (_document_getElementById = document.getElementById(hashFragment)) != null ? _document_getElementById : document.getElementsByName(hashFragment)[0];
}
class InnerScrollAndFocusHandler extends _react.default.Component {
    componentDidMount() {
        this.handlePotentialScroll();
    }
    componentDidUpdate() {
        // Because this property is overwritten in handlePotentialScroll it's fine to always run it when true as it'll be set to false for subsequent renders.
        if (this.props.focusAndScrollRef.apply) {
            this.handlePotentialScroll(true);
        }
    }
    render() {
        return this.props.children;
    }
    constructor(...args){
        super(...args);
        this.handlePotentialScroll = (isUpdate)=>{
            // Handle scroll and focus, it's only applied once in the first useEffect that triggers that changed.
            const { focusAndScrollRef, segmentPath } = this.props;
            if (focusAndScrollRef.apply) {
                // segmentPaths is an array of segment paths that should be scrolled to
                // if the current segment path is not in the array, the scroll is not applied
                // unless the array is empty, in which case the scroll is always applied
                if (focusAndScrollRef.segmentPaths.length !== 0 && !focusAndScrollRef.segmentPaths.some((scrollRefSegmentPath)=>segmentPath.every((segment, index)=>(0, _matchsegments.matchSegment)(segment, scrollRefSegmentPath[index])))) {
                    return;
                }
                let domNode = null;
                const hashFragment = focusAndScrollRef.hashFragment;
                if (hashFragment) {
                    domNode = getHashFragmentDomNode(hashFragment);
                }
                // `findDOMNode` is tricky because it returns just the first child if the component is a fragment.
                // This already caused a bug where the first child was a <link/> in head.
                if (!domNode) {
                    domNode = findDOMNode(this);
                }
                // TODO-APP: Handle the case where we couldn't select any DOM node, even higher up in the layout-router above the current segmentPath.
                // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
                if (!(domNode instanceof Element)) {
                    return;
                }
                // Verify if the element is a HTMLElement and if it's visible on screen (e.g. not display: none).
                // If the element is not a HTMLElement or not visible we try to select the next sibling and try again.
                while(!(domNode instanceof HTMLElement) || elementCanScroll(domNode)){
                    // TODO-APP: Handle the case where we couldn't select any DOM node, even higher up in the layout-router above the current segmentPath.
                    // No siblings found that are visible so we handle scroll higher up in the tree instead.
                    if (domNode.nextElementSibling === null) {
                        return;
                    }
                    domNode = domNode.nextElementSibling;
                }
                // State is mutated to ensure that the focus and scroll is applied only once.
                focusAndScrollRef.apply = false;
                focusAndScrollRef.hashFragment = null;
                focusAndScrollRef.segmentPaths = [];
                (0, _handlesmoothscroll.handleSmoothScroll)(()=>{
                    // In case of hash scroll, we only need to scroll the element into view
                    if (hashFragment) {
                        domNode.scrollIntoView();
                        return;
                    }
                    // Store the current viewport height because reading `clientHeight` causes a reflow,
                    // and it won't change during this function.
                    const htmlElement = document.documentElement;
                    const viewportHeight = htmlElement.clientHeight;
                    // If the element's top edge is already in the viewport, exit early.
                    if (topOfElementInViewport(domNode, viewportHeight)) {
                        return;
                    }
                    // Otherwise, try scrolling go the top of the document to be backward compatible with pages
                    // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
                    // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
                    // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
                    htmlElement.scrollTop = 0;
                    // Scroll to domNode if domNode is not in viewport when scrolled to top of document
                    if (!topOfElementInViewport(domNode, viewportHeight)) {
                        domNode.scrollIntoView();
                    }
                }, {
                    // We will force layout by querying domNode position
                    dontForceLayout: true,
                    onlyHashChange: !!isUpdate
                });
                // Set focus on the element
                domNode.focus();
            }
        };
    }
}
function ScrollAndFocusHandler(param) {
    let { segmentPath, children } = param;
    const context = (0, _react.useContext)(_approutercontext.GlobalLayoutRouterContext);
    if (!context) {
        throw new Error("invariant global layout router not mounted");
    }
    return /*#__PURE__*/ _react.default.createElement(InnerScrollAndFocusHandler, {
        segmentPath: segmentPath,
        focusAndScrollRef: context.focusAndScrollRef
    }, children);
}
/**
 * InnerLayoutRouter handles rendering the provided segment based on the cache.
 */ function InnerLayoutRouter(param) {
    let { parallelRouterKey, url, childNodes, childProp, segmentPath, tree, // isActive,
    cacheKey } = param;
    const context = (0, _react.useContext)(_approutercontext.GlobalLayoutRouterContext);
    if (!context) {
        throw new Error("invariant global layout router not mounted");
    }
    const { buildId, changeByServerResponse, tree: fullTree } = context;
    // Read segment path from the parallel router cache node.
    let childNode = childNodes.get(cacheKey);
    // If childProp is available this means it's the Flight / SSR case.
    if (childProp && // TODO-APP: verify if this can be null based on user code
    childProp.current !== null) {
        if (!childNode) {
            // Add the segment's subTreeData to the cache.
            // This writes to the cache when there is no item in the cache yet. It never *overwrites* existing cache items which is why it's safe in concurrent mode.
            childNode = {
                status: _approutercontext.CacheStates.READY,
                data: null,
                subTreeData: childProp.current,
                parallelRoutes: new Map()
            };
            childNodes.set(cacheKey, childNode);
        } else {
            if (childNode.status === _approutercontext.CacheStates.LAZY_INITIALIZED) {
                // @ts-expect-error we're changing it's type!
                childNode.status = _approutercontext.CacheStates.READY;
                // @ts-expect-error
                childNode.subTreeData = childProp.current;
            }
        }
    }
    // When childNode is not available during rendering client-side we need to fetch it from the server.
    if (!childNode || childNode.status === _approutercontext.CacheStates.LAZY_INITIALIZED) {
        /**
     * Router state with refetch marker added
     */ // TODO-APP: remove ''
        const refetchTree = walkAddRefetch([
            "",
            ...segmentPath
        ], fullTree);
        childNode = {
            status: _approutercontext.CacheStates.DATA_FETCH,
            data: (0, _fetchserverresponse.fetchServerResponse)(new URL(url, location.origin), refetchTree, context.nextUrl, buildId),
            subTreeData: null,
            head: childNode && childNode.status === _approutercontext.CacheStates.LAZY_INITIALIZED ? childNode.head : undefined,
            parallelRoutes: childNode && childNode.status === _approutercontext.CacheStates.LAZY_INITIALIZED ? childNode.parallelRoutes : new Map()
        };
        /**
     * Flight data fetch kicked off during render and put into the cache.
     */ childNodes.set(cacheKey, childNode);
    }
    // This case should never happen so it throws an error. It indicates there's a bug in the Next.js.
    if (!childNode) {
        throw new Error("Child node should always exist");
    }
    // This case should never happen so it throws an error. It indicates there's a bug in the Next.js.
    if (childNode.subTreeData && childNode.data) {
        throw new Error("Child node should not have both subTreeData and data");
    }
    // If cache node has a data request we have to unwrap response by `use` and update the cache.
    if (childNode.data) {
        /**
     * Flight response data
     */ // When the data has not resolved yet `use` will suspend here.
        const [flightData, overrideCanonicalUrl] = (0, _react.use)(childNode.data);
        // segmentPath from the server does not match the layout's segmentPath
        childNode.data = null;
        // setTimeout is used to start a new transition during render, this is an intentional hack around React.
        setTimeout(()=>{
            (0, _react.startTransition)(()=>{
                changeByServerResponse(fullTree, flightData, overrideCanonicalUrl);
            });
        });
        // Suspend infinitely as `changeByServerResponse` will cause a different part of the tree to be rendered.
        (0, _react.use)((0, _infinitepromise.createInfinitePromise)());
    }
    // If cache node has no subTreeData and no data request we have to infinitely suspend as the data will likely flow in from another place.
    // TODO-APP: double check users can't return null in a component that will kick in here.
    if (!childNode.subTreeData) {
        (0, _react.use)((0, _infinitepromise.createInfinitePromise)());
    }
    const subtree = /*#__PURE__*/ _react.default.createElement(_approutercontext.LayoutRouterContext.Provider, {
        value: {
            tree: tree[1][parallelRouterKey],
            childNodes: childNode.parallelRoutes,
            // TODO-APP: overriding of url for parallel routes
            url: url
        }
    }, childNode.subTreeData);
    // Ensure root layout is not wrapped in a div as the root layout renders `<html>`
    return subtree;
}
/**
 * Renders suspense boundary with the provided "loading" property as the fallback.
 * If no loading property is provided it renders the children without a suspense boundary.
 */ function LoadingBoundary(param) {
    let { children, loading, loadingStyles, hasLoading } = param;
    if (hasLoading) {
        return /*#__PURE__*/ _react.default.createElement(_react.Suspense, {
            fallback: /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, loadingStyles, loading)
        }, children);
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
function OuterLayoutRouter(param) {
    let { parallelRouterKey, segmentPath, childProp, error, errorStyles, templateStyles, loading, loadingStyles, hasLoading, template, notFound, notFoundStyles, styles } = param;
    const context = (0, _react.useContext)(_approutercontext.LayoutRouterContext);
    if (!context) {
        throw new Error("invariant expected layout router to be mounted");
    }
    const { childNodes, tree, url } = context;
    // Get the current parallelRouter cache node
    let childNodesForParallelRouter = childNodes.get(parallelRouterKey);
    // If the parallel router cache node does not exist yet, create it.
    // This writes to the cache when there is no item in the cache yet. It never *overwrites* existing cache items which is why it's safe in concurrent mode.
    if (!childNodesForParallelRouter) {
        childNodesForParallelRouter = new Map();
        childNodes.set(parallelRouterKey, childNodesForParallelRouter);
    }
    // Get the active segment in the tree
    // The reason arrays are used in the data format is that these are transferred from the server to the browser so it's optimized to save bytes.
    const treeSegment = tree[1][parallelRouterKey][0];
    const childPropSegment = childProp.segment;
    // If segment is an array it's a dynamic route and we want to read the dynamic route value as the segment to get from the cache.
    const currentChildSegmentValue = (0, _getsegmentvalue.getSegmentValue)(treeSegment);
    /**
   * Decides which segments to keep rendering, all segments that are not active will be wrapped in `<Offscreen>`.
   */ // TODO-APP: Add handling of `<Offscreen>` when it's available.
    const preservedSegments = [
        treeSegment
    ];
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, styles, preservedSegments.map((preservedSegment)=>{
        const isChildPropSegment = (0, _matchsegments.matchSegment)(preservedSegment, childPropSegment);
        const preservedSegmentValue = (0, _getsegmentvalue.getSegmentValue)(preservedSegment);
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(preservedSegment);
        return(/*
            - Error boundary
              - Only renders error boundary if error component is provided.
              - Rendered for each segment to ensure they have their own error state.
            - Loading boundary
              - Only renders suspense boundary if loading components is provided.
              - Rendered for each segment to ensure they have their own loading state.
              - Passed to the router during rendering to ensure it can be immediately rendered when suspending on a Flight fetch.
          */ /*#__PURE__*/ _react.default.createElement(_approutercontext.TemplateContext.Provider, {
            key: (0, _createroutercachekey.createRouterCacheKey)(preservedSegment, true),
            value: /*#__PURE__*/ _react.default.createElement(ScrollAndFocusHandler, {
                segmentPath: segmentPath
            }, /*#__PURE__*/ _react.default.createElement(_errorboundary.ErrorBoundary, {
                errorComponent: error,
                errorStyles: errorStyles
            }, /*#__PURE__*/ _react.default.createElement(LoadingBoundary, {
                hasLoading: hasLoading,
                loading: loading,
                loadingStyles: loadingStyles
            }, /*#__PURE__*/ _react.default.createElement(_notfoundboundary.NotFoundBoundary, {
                notFound: notFound,
                notFoundStyles: notFoundStyles
            }, /*#__PURE__*/ _react.default.createElement(_redirectboundary.RedirectBoundary, null, /*#__PURE__*/ _react.default.createElement(InnerLayoutRouter, {
                parallelRouterKey: parallelRouterKey,
                url: url,
                tree: tree,
                childNodes: childNodesForParallelRouter,
                childProp: isChildPropSegment ? childProp : null,
                segmentPath: segmentPath,
                cacheKey: cacheKey,
                isActive: currentChildSegmentValue === preservedSegmentValue
            }))))))
        }, templateStyles, template));
    }));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=layout-router.js.map


/***/ }),

/***/ 7618:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    matchSegment: function() {
        return matchSegment;
    },
    canSegmentBeOverridden: function() {
        return canSegmentBeOverridden;
    }
});
const _getsegmentparam = __webpack_require__(1844);
const matchSegment = (existingSegment, segment)=>{
    // segment is either Array or string
    if (typeof existingSegment === "string") {
        if (typeof segment === "string") {
            // Common case: segment is just a string
            return existingSegment === segment;
        }
        return false;
    }
    if (typeof segment === "string") {
        return false;
    }
    return existingSegment[0] === segment[0] && existingSegment[1] === segment[1];
};
const canSegmentBeOverridden = (existingSegment, segment)=>{
    var _getSegmentParam;
    if (Array.isArray(existingSegment) || !Array.isArray(segment)) {
        return false;
    }
    return ((_getSegmentParam = (0, _getsegmentparam.getSegmentParam)(existingSegment)) == null ? void 0 : _getSegmentParam.param) === segment[0];
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=match-segments.js.map


/***/ }),

/***/ 696:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
// useLayoutSegments() // Only the segments for the current place. ['children', 'dashboard', 'children', 'integrations'] -> /dashboard/integrations (/dashboard/layout.js would get ['children', 'dashboard', 'children', 'integrations'])

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return ReadonlyURLSearchParams;
    },
    useSearchParams: function() {
        return useSearchParams;
    },
    usePathname: function() {
        return usePathname;
    },
    ServerInsertedHTMLContext: function() {
        return _serverinsertedhtml.ServerInsertedHTMLContext;
    },
    useServerInsertedHTML: function() {
        return _serverinsertedhtml.useServerInsertedHTML;
    },
    useRouter: function() {
        return useRouter;
    },
    useParams: function() {
        return useParams;
    },
    useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
    },
    useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    notFound: function() {
        return _notfound.notFound;
    }
});
const _react = __webpack_require__(8038);
const _approutercontext = __webpack_require__(7085);
const _hooksclientcontext = __webpack_require__(9569);
const _clienthookinservercomponenterror = __webpack_require__(2633);
const _getsegmentvalue = __webpack_require__(7741);
const _serverinsertedhtml = __webpack_require__(9618);
const _redirect = __webpack_require__(2622);
const _notfound = __webpack_require__(5858);
const INTERNAL_URLSEARCHPARAMS_INSTANCE = Symbol("internal for urlsearchparams readonly");
function readonlyURLSearchParamsError() {
    return new Error("ReadonlyURLSearchParams cannot be modified");
}
class ReadonlyURLSearchParams {
    [Symbol.iterator]() {
        return this[INTERNAL_URLSEARCHPARAMS_INSTANCE][Symbol.iterator]();
    }
    append() {
        throw readonlyURLSearchParamsError();
    }
    delete() {
        throw readonlyURLSearchParamsError();
    }
    set() {
        throw readonlyURLSearchParamsError();
    }
    sort() {
        throw readonlyURLSearchParamsError();
    }
    constructor(urlSearchParams){
        this[INTERNAL_URLSEARCHPARAMS_INSTANCE] = urlSearchParams;
        this.entries = urlSearchParams.entries.bind(urlSearchParams);
        this.forEach = urlSearchParams.forEach.bind(urlSearchParams);
        this.get = urlSearchParams.get.bind(urlSearchParams);
        this.getAll = urlSearchParams.getAll.bind(urlSearchParams);
        this.has = urlSearchParams.has.bind(urlSearchParams);
        this.keys = urlSearchParams.keys.bind(urlSearchParams);
        this.values = urlSearchParams.values.bind(urlSearchParams);
        this.toString = urlSearchParams.toString.bind(urlSearchParams);
    }
}
function useSearchParams() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSearchParams");
    const searchParams = (0, _react.useContext)(_hooksclientcontext.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react.useMemo)(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    if (true) {
        // AsyncLocalStorage should not be included in the client bundle.
        const { bailoutToClientRendering } = __webpack_require__(5661);
        if (bailoutToClientRendering()) {
            // TODO-APP: handle dynamic = 'force-static' here and on the client
            return readonlySearchParams;
        }
    }
    return readonlySearchParams;
}
function usePathname() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("usePathname");
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    return (0, _react.useContext)(_hooksclientcontext.PathnameContext);
}
function useRouter() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useRouter");
    const router = (0, _react.useContext)(_approutercontext.AppRouterContext);
    if (router === null) {
        throw new Error("invariant expected app router to be mounted");
    }
    return router;
}
// this function performs a depth-first search of the tree to find the selected
// params
function getSelectedParams(tree, params) {
    if (params === void 0) params = {};
    const parallelRoutes = tree[1];
    for (const parallelRoute of Object.values(parallelRoutes)){
        const segment = parallelRoute[0];
        const isDynamicParameter = Array.isArray(segment);
        const segmentValue = isDynamicParameter ? segment[1] : segment;
        if (!segmentValue || segmentValue.startsWith("__PAGE__")) continue;
        // Ensure catchAll and optional catchall are turned into an array
        const isCatchAll = isDynamicParameter && (segment[2] === "c" || segment[2] === "oc");
        if (isCatchAll) {
            params[segment[0]] = segment[1].split("/");
        } else if (isDynamicParameter) {
            params[segment[0]] = segment[1];
        }
        params = getSelectedParams(parallelRoute, params);
    }
    return params;
}
function useParams() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useParams");
    const globalLayoutRouterContext = (0, _react.useContext)(_approutercontext.GlobalLayoutRouterContext);
    if (!globalLayoutRouterContext) {
        // This only happens in `pages`. Type is overwritten in navigation.d.ts
        return null;
    }
    return getSelectedParams(globalLayoutRouterContext.tree);
}
// TODO-APP: handle parallel routes
/**
 * Get the canonical parameters from the current level to the leaf node.
 */ function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
    if (first === void 0) first = true;
    if (segmentPath === void 0) segmentPath = [];
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        var _parallelRoutes_children;
        node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    const segmentValue = (0, _getsegmentvalue.getSegmentValue)(segment);
    if (!segmentValue || segmentValue.startsWith("__PAGE__")) return segmentPath;
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
function useSelectedLayoutSegments(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = "children";
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSelectedLayoutSegments");
    const { tree } = (0, _react.useContext)(_approutercontext.LayoutRouterContext);
    return getSelectedLayoutSegmentPath(tree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = "children";
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSelectedLayoutSegment");
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (selectedLayoutSegments.length === 0) {
        return null;
    }
    return selectedLayoutSegments[0];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map


/***/ }),

/***/ 6505:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "NotFoundBoundary", ({
    enumerable: true,
    get: function() {
        return NotFoundBoundary;
    }
}));
const _interop_require_default = __webpack_require__(2147);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8038));
const _navigation = __webpack_require__(696);
class NotFoundErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((error == null ? void 0 : error.digest) === "NEXT_NOT_FOUND") {
            return {
                notFoundTriggered: true
            };
        }
        // Re-throw if error is not for 404
        throw error;
    }
    static getDerivedStateFromProps(props, state) {
        /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.notFoundTriggered) {
            return {
                notFoundTriggered: false,
                previousPathname: props.pathname
            };
        }
        return {
            notFoundTriggered: state.notFoundTriggered,
            previousPathname: props.pathname
        };
    }
    render() {
        if (this.state.notFoundTriggered) {
            return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("meta", {
                name: "robots",
                content: "noindex"
            }),  false && /*#__PURE__*/ 0, this.props.notFoundStyles, this.props.notFound);
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            notFoundTriggered: !!props.asNotFound,
            previousPathname: props.pathname
        };
    }
}
function NotFoundBoundary(param) {
    let { notFound, notFoundStyles, asNotFound, children } = param;
    const pathname = (0, _navigation.usePathname)();
    return notFound ? /*#__PURE__*/ _react.default.createElement(NotFoundErrorBoundary, {
        pathname: pathname,
        notFound: notFound,
        notFoundStyles: notFoundStyles,
        asNotFound: asNotFound
    }, children) : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found-boundary.js.map


/***/ }),

/***/ 5858:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    notFound: function() {
        return notFound;
    },
    isNotFoundError: function() {
        return isNotFoundError;
    }
});
const NOT_FOUND_ERROR_CODE = "NEXT_NOT_FOUND";
function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = new Error(NOT_FOUND_ERROR_CODE);
    error.digest = NOT_FOUND_ERROR_CODE;
    throw error;
}
function isNotFoundError(error) {
    return (error == null ? void 0 : error.digest) === NOT_FOUND_ERROR_CODE;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map


/***/ }),

/***/ 8811:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/*
    This is a simple promise queue that allows you to limit the number of concurrent promises
    that are running at any given time. It's used to limit the number of concurrent
    prefetch requests that are being made to the server but could be used for other
    things as well.
*/ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "PromiseQueue", ({
    enumerable: true,
    get: function() {
        return PromiseQueue;
    }
}));
const _class_private_field_loose_base = __webpack_require__(8324);
const _class_private_field_loose_key = __webpack_require__(4567);
var _maxConcurrency = /*#__PURE__*/ _class_private_field_loose_key._("_maxConcurrency"), _runningCount = /*#__PURE__*/ _class_private_field_loose_key._("_runningCount"), _queue = /*#__PURE__*/ _class_private_field_loose_key._("_queue"), _processNext = /*#__PURE__*/ _class_private_field_loose_key._("_processNext");
class PromiseQueue {
    enqueue(promiseFn) {
        let taskResolve;
        let taskReject;
        const taskPromise = new Promise((resolve, reject)=>{
            taskResolve = resolve;
            taskReject = reject;
        });
        const task = async ()=>{
            try {
                _class_private_field_loose_base._(this, _runningCount)[_runningCount]++;
                const result = await promiseFn();
                taskResolve(result);
            } catch (error) {
                taskReject(error);
            } finally{
                _class_private_field_loose_base._(this, _runningCount)[_runningCount]--;
                _class_private_field_loose_base._(this, _processNext)[_processNext]();
            }
        };
        const enqueueResult = {
            promiseFn: taskPromise,
            task
        };
        // wonder if we should take a LIFO approach here
        _class_private_field_loose_base._(this, _queue)[_queue].push(enqueueResult);
        _class_private_field_loose_base._(this, _processNext)[_processNext]();
        return taskPromise;
    }
    bump(promiseFn) {
        const index = _class_private_field_loose_base._(this, _queue)[_queue].findIndex((item)=>item.promiseFn === promiseFn);
        if (index > -1) {
            const bumpedItem = _class_private_field_loose_base._(this, _queue)[_queue].splice(index, 1)[0];
            _class_private_field_loose_base._(this, _queue)[_queue].unshift(bumpedItem);
            _class_private_field_loose_base._(this, _processNext)[_processNext](true);
        }
    }
    constructor(maxConcurrency = 5){
        Object.defineProperty(this, _processNext, {
            value: processNext
        });
        Object.defineProperty(this, _maxConcurrency, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _runningCount, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _queue, {
            writable: true,
            value: void 0
        });
        _class_private_field_loose_base._(this, _maxConcurrency)[_maxConcurrency] = maxConcurrency;
        _class_private_field_loose_base._(this, _runningCount)[_runningCount] = 0;
        _class_private_field_loose_base._(this, _queue)[_queue] = [];
    }
}
function processNext(forced) {
    if (forced === void 0) forced = false;
    if ((_class_private_field_loose_base._(this, _runningCount)[_runningCount] < _class_private_field_loose_base._(this, _maxConcurrency)[_maxConcurrency] || forced) && _class_private_field_loose_base._(this, _queue)[_queue].length > 0) {
        var _class_private_field_loose_base__queue_shift;
        (_class_private_field_loose_base__queue_shift = _class_private_field_loose_base._(this, _queue)[_queue].shift()) == null ? void 0 : _class_private_field_loose_base__queue_shift.task();
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=promise-queue.js.map


/***/ }),

/***/ 1442:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RedirectErrorBoundary: function() {
        return RedirectErrorBoundary;
    },
    RedirectBoundary: function() {
        return RedirectBoundary;
    }
});
const _interop_require_wildcard = __webpack_require__(4009);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(8038));
const _navigation = __webpack_require__(696);
const _redirect = __webpack_require__(2622);
function HandleRedirect(param) {
    let { redirect, reset, redirectType } = param;
    const router = (0, _navigation.useRouter)();
    (0, _react.useEffect)(()=>{
        // @ts-ignore startTransition exists
        _react.default.startTransition(()=>{
            if (redirectType === _redirect.RedirectType.push) {
                router.push(redirect, {});
            } else {
                router.replace(redirect, {});
            }
            reset();
        });
    }, [
        redirect,
        redirectType,
        reset,
        router
    ]);
    return null;
}
class RedirectErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((0, _redirect.isRedirectError)(error)) {
            const url = (0, _redirect.getURLFromRedirectError)(error);
            const redirectType = (0, _redirect.getRedirectTypeFromError)(error);
            return {
                redirect: url,
                redirectType
            };
        }
        // Re-throw if error is not for redirect
        throw error;
    }
    render() {
        const { redirect, redirectType } = this.state;
        if (redirect !== null && redirectType !== null) {
            return /*#__PURE__*/ _react.default.createElement(HandleRedirect, {
                redirect: redirect,
                redirectType: redirectType,
                reset: ()=>this.setState({
                        redirect: null
                    })
            });
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            redirect: null,
            redirectType: null
        };
    }
}
function RedirectBoundary(param) {
    let { children } = param;
    const router = (0, _navigation.useRouter)();
    return /*#__PURE__*/ _react.default.createElement(RedirectErrorBoundary, {
        router: router
    }, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-boundary.js.map


/***/ }),

/***/ 2622:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RedirectType: function() {
        return RedirectType;
    },
    getRedirectError: function() {
        return getRedirectError;
    },
    redirect: function() {
        return redirect;
    },
    isRedirectError: function() {
        return isRedirectError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    }
});
const _requestasyncstorage = __webpack_require__(1715);
const REDIRECT_ERROR_CODE = "NEXT_REDIRECT";
var RedirectType;
(function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
})(RedirectType || (RedirectType = {}));
function getRedirectError(url, type) {
    const error = new Error(REDIRECT_ERROR_CODE);
    error.digest = REDIRECT_ERROR_CODE + ";" + type + ";" + url;
    const requestStore = _requestasyncstorage.requestAsyncStorage.getStore();
    if (requestStore) {
        error.mutableCookies = requestStore.mutableCookies;
    }
    return error;
}
function redirect(url, type) {
    if (type === void 0) type = "replace";
    throw getRedirectError(url, type);
}
function isRedirectError(error) {
    if (typeof (error == null ? void 0 : error.digest) !== "string") return false;
    const [errorCode, type, destination] = error.digest.split(";", 3);
    return errorCode === REDIRECT_ERROR_CODE && (type === "replace" || type === "push") && typeof destination === "string";
}
function getURLFromRedirectError(error) {
    if (!isRedirectError(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(";", 3)[2];
}
function getRedirectTypeFromError(error) {
    if (!isRedirectError(error)) {
        throw new Error("Not a redirect error");
    }
    return error.digest.split(";", 3)[1];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map


/***/ }),

/***/ 6926:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return RenderFromTemplateContext;
    }
}));
const _interop_require_wildcard = __webpack_require__(4009);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(8038));
const _approutercontext = __webpack_require__(7085);
function RenderFromTemplateContext() {
    const children = (0, _react.useContext)(_approutercontext.TemplateContext);
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=render-from-template-context.js.map


/***/ }),

/***/ 4173:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "applyFlightData", ({
    enumerable: true,
    get: function() {
        return applyFlightData;
    }
}));
const _approutercontext = __webpack_require__(7085);
const _filllazyitemstillleafwithhead = __webpack_require__(2684);
const _fillcachewithnewsubtreedata = __webpack_require__(8921);
function applyFlightData(existingCache, cache, flightDataPath, wasPrefetched) {
    if (wasPrefetched === void 0) wasPrefetched = false;
    // The one before last item is the router state tree patch
    const [treePatch, subTreeData, head] = flightDataPath.slice(-3);
    // Handles case where prefetch only returns the router tree patch without rendered components.
    if (subTreeData === null) {
        return false;
    }
    if (flightDataPath.length === 3) {
        cache.status = _approutercontext.CacheStates.READY;
        cache.subTreeData = subTreeData;
        (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, existingCache, treePatch, head, wasPrefetched);
    } else {
        // Copy subTreeData for the root node of the cache.
        cache.status = _approutercontext.CacheStates.READY;
        cache.subTreeData = existingCache.subTreeData;
        cache.parallelRoutes = new Map(existingCache.parallelRoutes);
        // Create a copy of the existing cache with the subTreeData applied.
        (0, _fillcachewithnewsubtreedata.fillCacheWithNewSubTreeData)(cache, existingCache, flightDataPath, wasPrefetched);
    }
    return true;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=apply-flight-data.js.map


/***/ }),

/***/ 3914:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "applyRouterStatePatchToTree", ({
    enumerable: true,
    get: function() {
        return applyRouterStatePatchToTree;
    }
}));
const _matchsegments = __webpack_require__(7618);
/**
 * Deep merge of the two router states. Parallel route keys are preserved if the patch doesn't have them.
 */ function applyPatch(initialTree, patchTree) {
    const [initialSegment, initialParallelRoutes] = initialTree;
    const [patchSegment, patchParallelRoutes] = patchTree;
    // if the applied patch segment is __DEFAULT__ then we can ignore it and return the initial tree
    // this is because the __DEFAULT__ segment is used as a placeholder on navigation
    if (patchSegment === "__DEFAULT__" && initialSegment !== "__DEFAULT__") {
        return initialTree;
    }
    if ((0, _matchsegments.matchSegment)(initialSegment, patchSegment)) {
        const newParallelRoutes = {};
        for(const key in initialParallelRoutes){
            const isInPatchTreeParallelRoutes = typeof patchParallelRoutes[key] !== "undefined";
            if (isInPatchTreeParallelRoutes) {
                newParallelRoutes[key] = applyPatch(initialParallelRoutes[key], patchParallelRoutes[key]);
            } else {
                newParallelRoutes[key] = initialParallelRoutes[key];
            }
        }
        for(const key in patchParallelRoutes){
            if (newParallelRoutes[key]) {
                continue;
            }
            newParallelRoutes[key] = patchParallelRoutes[key];
        }
        const tree = [
            initialSegment,
            newParallelRoutes
        ];
        if (initialTree[2]) {
            tree[2] = initialTree[2];
        }
        if (initialTree[3]) {
            tree[3] = initialTree[3];
        }
        if (initialTree[4]) {
            tree[4] = initialTree[4];
        }
        return tree;
    }
    return patchTree;
}
function applyRouterStatePatchToTree(flightSegmentPath, flightRouterState, treePatch) {
    const [segment, parallelRoutes, , , isRootLayout] = flightRouterState;
    // Root refresh
    if (flightSegmentPath.length === 1) {
        const tree = applyPatch(flightRouterState, treePatch);
        return tree;
    }
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    // Tree path returned from the server should always match up with the current tree in the browser
    if (!(0, _matchsegments.matchSegment)(currentSegment, segment)) {
        return null;
    }
    const lastSegment = flightSegmentPath.length === 2;
    let parallelRoutePatch;
    if (lastSegment) {
        parallelRoutePatch = applyPatch(parallelRoutes[parallelRouteKey], treePatch);
    } else {
        parallelRoutePatch = applyRouterStatePatchToTree(flightSegmentPath.slice(2), parallelRoutes[parallelRouteKey], treePatch);
        if (parallelRoutePatch === null) {
            return null;
        }
    }
    const tree = [
        flightSegmentPath[0],
        {
            ...parallelRoutes,
            [parallelRouteKey]: parallelRoutePatch
        }
    ];
    // Current segment is the root layout
    if (isRootLayout) {
        tree[4] = true;
    }
    return tree;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=apply-router-state-patch-to-tree.js.map


/***/ }),

/***/ 9089:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    extractPathFromFlightRouterState: function() {
        return extractPathFromFlightRouterState;
    },
    computeChangedPath: function() {
        return computeChangedPath;
    }
});
const _interceptionroutes = __webpack_require__(6624);
const _matchsegments = __webpack_require__(7618);
const segmentToPathname = (segment)=>{
    if (typeof segment === "string") {
        return segment;
    }
    return segment[1];
};
function normalizePathname(pathname) {
    return pathname.split("/").reduce((acc, segment)=>{
        if (segment === "" || segment.startsWith("(") && segment.endsWith(")")) {
            return acc;
        }
        return acc + "/" + segment;
    }, "") || "/";
}
function extractPathFromFlightRouterState(flightRouterState) {
    const segment = Array.isArray(flightRouterState[0]) ? flightRouterState[0][1] : flightRouterState[0];
    if (segment === "__DEFAULT__" || _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m))) return undefined;
    if (segment.startsWith("__PAGE__")) return "";
    const path = [
        segment
    ];
    var _flightRouterState_;
    const parallelRoutes = (_flightRouterState_ = flightRouterState[1]) != null ? _flightRouterState_ : {};
    const childrenPath = parallelRoutes.children ? extractPathFromFlightRouterState(parallelRoutes.children) : undefined;
    if (childrenPath !== undefined) {
        path.push(childrenPath);
    } else {
        for (const [key, value] of Object.entries(parallelRoutes)){
            if (key === "children") continue;
            const childPath = extractPathFromFlightRouterState(value);
            if (childPath !== undefined) {
                path.push(childPath);
            }
        }
    }
    // TODO-APP: optimise this, it's not ideal to join and split
    return normalizePathname(path.join("/"));
}
function computeChangedPathImpl(treeA, treeB) {
    const [segmentA, parallelRoutesA] = treeA;
    const [segmentB, parallelRoutesB] = treeB;
    const normalizedSegmentA = segmentToPathname(segmentA);
    const normalizedSegmentB = segmentToPathname(segmentB);
    if (_interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>normalizedSegmentA.startsWith(m) || normalizedSegmentB.startsWith(m))) {
        return "";
    }
    if (!(0, _matchsegments.matchSegment)(segmentA, segmentB)) {
        var _extractPathFromFlightRouterState;
        // once we find where the tree changed, we compute the rest of the path by traversing the tree
        return (_extractPathFromFlightRouterState = extractPathFromFlightRouterState(treeB)) != null ? _extractPathFromFlightRouterState : "";
    }
    for(const parallelRouterKey in parallelRoutesA){
        if (parallelRoutesB[parallelRouterKey]) {
            const changedPath = computeChangedPathImpl(parallelRoutesA[parallelRouterKey], parallelRoutesB[parallelRouterKey]);
            if (changedPath !== null) {
                return segmentToPathname(segmentB) + "/" + changedPath;
            }
        }
    }
    return null;
}
function computeChangedPath(treeA, treeB) {
    const changedPath = computeChangedPathImpl(treeA, treeB);
    if (changedPath == null || changedPath === "/") {
        return changedPath;
    }
    // lightweight normalization to remove route groups
    return normalizePathname(changedPath);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=compute-changed-path.js.map


/***/ }),

/***/ 4331:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createHrefFromUrl", ({
    enumerable: true,
    get: function() {
        return createHrefFromUrl;
    }
}));
function createHrefFromUrl(url, includeHash) {
    if (includeHash === void 0) includeHash = true;
    return url.pathname + url.search + (includeHash ? url.hash : "");
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-href-from-url.js.map


/***/ }),

/***/ 1684:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createInitialRouterState", ({
    enumerable: true,
    get: function() {
        return createInitialRouterState;
    }
}));
const _approutercontext = __webpack_require__(7085);
const _createhreffromurl = __webpack_require__(4331);
const _filllazyitemstillleafwithhead = __webpack_require__(2684);
const _computechangedpath = __webpack_require__(9089);
function createInitialRouterState(param) {
    let { buildId, initialTree, children, initialCanonicalUrl, initialParallelRoutes, isServer, location, initialHead } = param;
    const cache = {
        status: _approutercontext.CacheStates.READY,
        data: null,
        subTreeData: children,
        // The cache gets seeded during the first render. `initialParallelRoutes` ensures the cache from the first render is there during the second render.
        parallelRoutes: isServer ? new Map() : initialParallelRoutes
    };
    // When the cache hasn't been seeded yet we fill the cache with the head.
    if (initialParallelRoutes === null || initialParallelRoutes.size === 0) {
        (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, undefined, initialTree, initialHead);
    }
    var _ref;
    return {
        buildId,
        tree: initialTree,
        cache,
        prefetchCache: new Map(),
        pushRef: {
            pendingPush: false,
            mpaNavigation: false
        },
        focusAndScrollRef: {
            apply: false,
            hashFragment: null,
            segmentPaths: []
        },
        canonicalUrl: // This is safe to do as canonicalUrl can't be rendered, it's only used to control the history updates in the useEffect further down in this file.
        location ? (0, _createhreffromurl.createHrefFromUrl)(location) : initialCanonicalUrl,
        nextUrl: (_ref = (0, _computechangedpath.extractPathFromFlightRouterState)(initialTree) || (location == null ? void 0 : location.pathname)) != null ? _ref : null
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-initial-router-state.js.map


/***/ }),

/***/ 8503:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createOptimisticTree", ({
    enumerable: true,
    get: function() {
        return createOptimisticTree;
    }
}));
const _matchsegments = __webpack_require__(7618);
function createOptimisticTree(segments, flightRouterState, parentRefetch) {
    const [existingSegment, existingParallelRoutes, url, refresh, isRootLayout] = flightRouterState || [
        null,
        {}
    ];
    const segment = segments[0];
    const isLastSegment = segments.length === 1;
    const segmentMatches = existingSegment !== null && (0, _matchsegments.matchSegment)(existingSegment, segment);
    // if there are multiple parallel routes at this level, we need to refetch here
    // to ensure we get the correct tree. This is because we don't know which
    // parallel route will match the next segment.
    const hasMultipleParallelRoutes = Object.keys(existingParallelRoutes).length > 1;
    const shouldRefetchThisLevel = !flightRouterState || !segmentMatches || hasMultipleParallelRoutes;
    let parallelRoutes = {};
    if (existingSegment !== null && segmentMatches) {
        parallelRoutes = existingParallelRoutes;
    }
    let childTree;
    // if there's multiple parallel routes at this level, we shouldn't create an
    // optimistic tree for the next level because we don't know which one will
    // match the next segment.
    if (!isLastSegment && !hasMultipleParallelRoutes) {
        const childItem = createOptimisticTree(segments.slice(1), parallelRoutes ? parallelRoutes.children : null, parentRefetch || shouldRefetchThisLevel);
        childTree = childItem;
    }
    const result = [
        segment,
        {
            ...parallelRoutes,
            ...childTree ? {
                children: childTree
            } : {}
        }
    ];
    if (url) {
        result[2] = url;
    }
    if (!parentRefetch && shouldRefetchThisLevel) {
        result[3] = "refetch";
    } else if (segmentMatches && refresh) {
        result[3] = refresh;
    }
    if (segmentMatches && isRootLayout) {
        result[4] = isRootLayout;
    }
    return result;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-optimistic-tree.js.map


/***/ }),

/***/ 4621:
/***/ ((module, exports) => {

"use strict";
/**
 * Create data fetching record for Promise.
 */ // TODO-APP: change `any` to type inference.

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createRecordFromThenable", ({
    enumerable: true,
    get: function() {
        return createRecordFromThenable;
    }
}));
function createRecordFromThenable(thenable) {
    thenable.status = "pending";
    thenable.then((value)=>{
        if (thenable.status === "pending") {
            thenable.status = "fulfilled";
            thenable.value = value;
        }
    }, (err)=>{
        if (thenable.status === "pending") {
            thenable.status = "rejected";
            thenable.value = err;
        }
    });
    return thenable;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-record-from-thenable.js.map


/***/ }),

/***/ 8870:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createRouterCacheKey", ({
    enumerable: true,
    get: function() {
        return createRouterCacheKey;
    }
}));
function createRouterCacheKey(segment, withoutSearchParameters) {
    if (withoutSearchParameters === void 0) withoutSearchParameters = false;
    return Array.isArray(segment) ? segment[0] + "|" + segment[1] + "|" + segment[2] : withoutSearchParameters && segment.startsWith("__PAGE__") ? "__PAGE__" : segment;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-router-cache-key.js.map


/***/ }),

/***/ 8080:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fetchServerResponse", ({
    enumerable: true,
    get: function() {
        return fetchServerResponse;
    }
}));
const _client = __webpack_require__(7897);
const _approuterheaders = __webpack_require__(6265);
const _approuter = __webpack_require__(2987);
const _appcallserver = __webpack_require__(6937);
const _routerreducertypes = __webpack_require__(2836);
const _hash = __webpack_require__(199);
function doMpaNavigation(url) {
    return [
        (0, _approuter.urlToUrlWithoutFlightMarker)(url).toString(),
        undefined
    ];
}
async function fetchServerResponse(url, flightRouterState, nextUrl, currentBuildId, prefetchKind) {
    const headers = {
        // Enable flight response
        [_approuterheaders.RSC]: "1",
        // Provide the current router state
        [_approuterheaders.NEXT_ROUTER_STATE_TREE]: encodeURIComponent(JSON.stringify(flightRouterState))
    };
    /**
   * Three cases:
   * - `prefetchKind` is `undefined`, it means it's a normal navigation, so we want to prefetch the page data fully
   * - `prefetchKind` is `full` - we want to prefetch the whole page so same as above
   * - `prefetchKind` is `auto` - if the page is dynamic, prefetch the page data partially, if static prefetch the page data fully
   */ if (prefetchKind === _routerreducertypes.PrefetchKind.AUTO) {
        headers[_approuterheaders.NEXT_ROUTER_PREFETCH] = "1";
    }
    if (nextUrl) {
        headers[_approuterheaders.NEXT_URL] = nextUrl;
    }
    const uniqueCacheQuery = (0, _hash.hexHash)([
        headers[_approuterheaders.NEXT_ROUTER_PREFETCH] || "0",
        headers[_approuterheaders.NEXT_ROUTER_STATE_TREE]
    ].join(","));
    try {
        let fetchUrl = new URL(url);
        if (true) {
            if (false) {}
        }
        // Add unique cache query to avoid caching conflicts on CDN which don't respect to Vary header
        fetchUrl.searchParams.set(_approuterheaders.NEXT_RSC_UNION_QUERY, uniqueCacheQuery);
        const res = await fetch(fetchUrl, {
            // Backwards compat for older browsers. `same-origin` is the default in modern browsers.
            credentials: "same-origin",
            headers
        });
        const responseUrl = (0, _approuter.urlToUrlWithoutFlightMarker)(res.url);
        const canonicalUrl = res.redirected ? responseUrl : undefined;
        const contentType = res.headers.get("content-type") || "";
        let isFlightResponse = contentType === _approuterheaders.RSC_CONTENT_TYPE_HEADER;
        if (true) {
            if (false) {}
        }
        // If fetch returns something different than flight response handle it like a mpa navigation
        // If the fetch was not 200, we also handle it like a mpa navigation
        if (!isFlightResponse || !res.ok) {
            return doMpaNavigation(responseUrl.toString());
        }
        // Handle the `fetch` readable stream that can be unwrapped by `React.use`.
        const [buildId, flightData] = await (0, _client.createFromFetch)(Promise.resolve(res), {
            callServer: _appcallserver.callServer
        });
        if (currentBuildId !== buildId) {
            return doMpaNavigation(res.url);
        }
        return [
            flightData,
            canonicalUrl
        ];
    } catch (err) {
        console.error("Failed to fetch RSC payload. Falling back to browser navigation.", err);
        // If fetch fails handle it like a mpa navigation
        // TODO-APP: Add a test for the case where a CORS request fails, e.g. external url redirect coming from the response.
        // See https://github.com/vercel/next.js/issues/43605#issuecomment-1451617521 for a reproduction.
        return [
            url.toString(),
            undefined
        ];
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fetch-server-response.js.map


/***/ }),

/***/ 9996:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fillCacheWithDataProperty", ({
    enumerable: true,
    get: function() {
        return fillCacheWithDataProperty;
    }
}));
const _approutercontext = __webpack_require__(7085);
const _createroutercachekey = __webpack_require__(8870);
function fillCacheWithDataProperty(newCache, existingCache, flightSegmentPath, fetchResponse, bailOnParallelRoutes) {
    if (bailOnParallelRoutes === void 0) bailOnParallelRoutes = false;
    const isLastEntry = flightSegmentPath.length <= 2;
    const [parallelRouteKey, segment] = flightSegmentPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap || bailOnParallelRoutes && existingCache.parallelRoutes.size > 1) {
        // Bailout because the existing cache does not have the path to the leaf node
        // or the existing cache has multiple parallel routes
        // Will trigger lazy fetch in layout-router because of missing segment
        return {
            bailOptimistic: true
        };
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    // In case of last segment start off the fetch at this level and don't copy further down.
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.data || childCacheNode === existingChildCacheNode) {
            childSegmentMap.set(cacheKey, {
                status: _approutercontext.CacheStates.DATA_FETCH,
                data: fetchResponse(),
                subTreeData: null,
                parallelRoutes: new Map()
            });
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        // Start fetch in the place where the existing cache doesn't have the data yet.
        if (!childCacheNode) {
            childSegmentMap.set(cacheKey, {
                status: _approutercontext.CacheStates.DATA_FETCH,
                data: fetchResponse(),
                subTreeData: null,
                parallelRoutes: new Map()
            });
        }
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    return fillCacheWithDataProperty(childCacheNode, existingChildCacheNode, flightSegmentPath.slice(2), fetchResponse);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-cache-with-data-property.js.map


/***/ }),

/***/ 8921:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fillCacheWithNewSubTreeData", ({
    enumerable: true,
    get: function() {
        return fillCacheWithNewSubTreeData;
    }
}));
const _approutercontext = __webpack_require__(7085);
const _invalidatecachebyrouterstate = __webpack_require__(1727);
const _filllazyitemstillleafwithhead = __webpack_require__(2684);
const _createroutercachekey = __webpack_require__(8870);
function fillCacheWithNewSubTreeData(newCache, existingCache, flightDataPath, wasPrefetched) {
    const isLastEntry = flightDataPath.length <= 5;
    const [parallelRouteKey, segment] = flightDataPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.data || childCacheNode === existingChildCacheNode) {
            childCacheNode = {
                status: _approutercontext.CacheStates.READY,
                data: null,
                subTreeData: flightDataPath[3],
                // Ensure segments other than the one we got data for are preserved.
                parallelRoutes: existingChildCacheNode ? new Map(existingChildCacheNode.parallelRoutes) : new Map()
            };
            if (existingChildCacheNode) {
                (0, _invalidatecachebyrouterstate.invalidateCacheByRouterState)(childCacheNode, existingChildCacheNode, flightDataPath[2]);
            }
            (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(childCacheNode, existingChildCacheNode, flightDataPath[2], flightDataPath[4], wasPrefetched);
            childSegmentMap.set(cacheKey, childCacheNode);
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    fillCacheWithNewSubTreeData(childCacheNode, existingChildCacheNode, flightDataPath.slice(2), wasPrefetched);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-cache-with-new-subtree-data.js.map


/***/ }),

/***/ 2684:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fillLazyItemsTillLeafWithHead", ({
    enumerable: true,
    get: function() {
        return fillLazyItemsTillLeafWithHead;
    }
}));
const _approutercontext = __webpack_require__(7085);
const _createroutercachekey = __webpack_require__(8870);
function fillLazyItemsTillLeafWithHead(newCache, existingCache, routerState, head, wasPrefetched) {
    const isLastSegment = Object.keys(routerState[1]).length === 0;
    if (isLastSegment) {
        newCache.head = head;
        return;
    }
    // Remove segment that we got data for so that it is filled in during rendering of subTreeData.
    for(const key in routerState[1]){
        const parallelRouteState = routerState[1][key];
        const segmentForParallelRoute = parallelRouteState[0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segmentForParallelRoute);
        if (existingCache) {
            const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
            if (existingParallelRoutesCacheNode) {
                let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
                const existingCacheNode = parallelRouteCacheNode.get(cacheKey);
                const newCacheNode = wasPrefetched && existingCacheNode ? {
                    status: existingCacheNode.status,
                    data: existingCacheNode.data,
                    subTreeData: existingCacheNode.subTreeData,
                    parallelRoutes: new Map(existingCacheNode.parallelRoutes)
                } : {
                    status: _approutercontext.CacheStates.LAZY_INITIALIZED,
                    data: null,
                    subTreeData: null,
                    parallelRoutes: new Map(existingCacheNode == null ? void 0 : existingCacheNode.parallelRoutes)
                };
                // Overrides the cache key with the new cache node.
                parallelRouteCacheNode.set(cacheKey, newCacheNode);
                // Traverse deeper to apply the head / fill lazy items till the head.
                fillLazyItemsTillLeafWithHead(newCacheNode, existingCacheNode, parallelRouteState, head, wasPrefetched);
                newCache.parallelRoutes.set(key, parallelRouteCacheNode);
                continue;
            }
        }
        const newCacheNode = {
            status: _approutercontext.CacheStates.LAZY_INITIALIZED,
            data: null,
            subTreeData: null,
            parallelRoutes: new Map()
        };
        const existingParallelRoutes = newCache.parallelRoutes.get(key);
        if (existingParallelRoutes) {
            existingParallelRoutes.set(cacheKey, newCacheNode);
        } else {
            newCache.parallelRoutes.set(key, new Map([
                [
                    cacheKey,
                    newCacheNode
                ]
            ]));
        }
        fillLazyItemsTillLeafWithHead(newCacheNode, undefined, parallelRouteState, head, wasPrefetched);
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-lazy-items-till-leaf-with-head.js.map


/***/ }),

/***/ 6489:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PrefetchCacheEntryStatus: function() {
        return PrefetchCacheEntryStatus;
    },
    getPrefetchEntryCacheStatus: function() {
        return getPrefetchEntryCacheStatus;
    }
});
const FIVE_MINUTES = 5 * 60 * 1000;
const THIRTY_SECONDS = 30 * 1000;
var PrefetchCacheEntryStatus;
(function(PrefetchCacheEntryStatus) {
    PrefetchCacheEntryStatus["fresh"] = "fresh";
    PrefetchCacheEntryStatus["reusable"] = "reusable";
    PrefetchCacheEntryStatus["expired"] = "expired";
    PrefetchCacheEntryStatus["stale"] = "stale";
})(PrefetchCacheEntryStatus || (PrefetchCacheEntryStatus = {}));
function getPrefetchEntryCacheStatus(param) {
    let { kind, prefetchTime, lastUsedTime } = param;
    // if the cache entry was prefetched or read less than 30s ago, then we want to re-use it
    if (Date.now() < (lastUsedTime != null ? lastUsedTime : prefetchTime) + THIRTY_SECONDS) {
        return lastUsedTime ? "reusable" : "fresh";
    }
    // if the cache entry was prefetched less than 5 mins ago, then we want to re-use only the loading state
    if (kind === "auto") {
        if (Date.now() < prefetchTime + FIVE_MINUTES) {
            return "stale";
        }
    }
    // if the cache entry was prefetched less than 5 mins ago and was a "full" prefetch, then we want to re-use it "full
    if (kind === "full") {
        if (Date.now() < prefetchTime + FIVE_MINUTES) {
            return "reusable";
        }
    }
    return "expired";
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-prefetch-cache-entry-status.js.map


/***/ }),

/***/ 7462:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "handleMutable", ({
    enumerable: true,
    get: function() {
        return handleMutable;
    }
}));
const _computechangedpath = __webpack_require__(9089);
function handleMutable(state, mutable) {
    var _mutable_shouldScroll;
    // shouldScroll is true by default, can override to false.
    const shouldScroll = (_mutable_shouldScroll = mutable.shouldScroll) != null ? _mutable_shouldScroll : true;
    var _mutable_scrollableSegments, _computeChangedPath;
    return {
        buildId: state.buildId,
        // Set href.
        canonicalUrl: mutable.canonicalUrl != null ? mutable.canonicalUrl === state.canonicalUrl ? state.canonicalUrl : mutable.canonicalUrl : state.canonicalUrl,
        pushRef: {
            pendingPush: mutable.pendingPush != null ? mutable.pendingPush : state.pushRef.pendingPush,
            mpaNavigation: mutable.mpaNavigation != null ? mutable.mpaNavigation : state.pushRef.mpaNavigation
        },
        // All navigation requires scroll and focus management to trigger.
        focusAndScrollRef: {
            apply: shouldScroll ? (mutable == null ? void 0 : mutable.scrollableSegments) !== undefined ? true : state.focusAndScrollRef.apply : false,
            hashFragment: shouldScroll ? mutable.hashFragment && mutable.hashFragment !== "" ? decodeURIComponent(mutable.hashFragment.slice(1)) : state.focusAndScrollRef.hashFragment : null,
            segmentPaths: shouldScroll ? (_mutable_scrollableSegments = mutable == null ? void 0 : mutable.scrollableSegments) != null ? _mutable_scrollableSegments : state.focusAndScrollRef.segmentPaths : []
        },
        // Apply cache.
        cache: mutable.cache ? mutable.cache : state.cache,
        prefetchCache: mutable.prefetchCache ? mutable.prefetchCache : state.prefetchCache,
        // Apply patched router state.
        tree: mutable.patchedTree !== undefined ? mutable.patchedTree : state.tree,
        nextUrl: mutable.patchedTree !== undefined ? (_computeChangedPath = (0, _computechangedpath.computeChangedPath)(state.tree, mutable.patchedTree)) != null ? _computeChangedPath : state.canonicalUrl : state.nextUrl
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=handle-mutable.js.map


/***/ }),

/***/ 8457:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "invalidateCacheBelowFlightSegmentPath", ({
    enumerable: true,
    get: function() {
        return invalidateCacheBelowFlightSegmentPath;
    }
}));
const _createroutercachekey = __webpack_require__(8870);
function invalidateCacheBelowFlightSegmentPath(newCache, existingCache, flightSegmentPath) {
    const isLastEntry = flightSegmentPath.length <= 2;
    const [parallelRouteKey, segment] = flightSegmentPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    // In case of last entry don't copy further down.
    if (isLastEntry) {
        childSegmentMap.delete(cacheKey);
        return;
    }
    const existingChildCacheNode = existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    if (!childCacheNode || !existingChildCacheNode) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    invalidateCacheBelowFlightSegmentPath(childCacheNode, existingChildCacheNode, flightSegmentPath.slice(2));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=invalidate-cache-below-flight-segmentpath.js.map


/***/ }),

/***/ 1727:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "invalidateCacheByRouterState", ({
    enumerable: true,
    get: function() {
        return invalidateCacheByRouterState;
    }
}));
const _createroutercachekey = __webpack_require__(8870);
function invalidateCacheByRouterState(newCache, existingCache, routerState) {
    // Remove segment that we got data for so that it is filled in during rendering of subTreeData.
    for(const key in routerState[1]){
        const segmentForParallelRoute = routerState[1][key][0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segmentForParallelRoute);
        const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
        if (existingParallelRoutesCacheNode) {
            let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
            parallelRouteCacheNode.delete(cacheKey);
            newCache.parallelRoutes.set(key, parallelRouteCacheNode);
        }
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=invalidate-cache-by-router-state.js.map


/***/ }),

/***/ 2615:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isNavigatingToNewRootLayout", ({
    enumerable: true,
    get: function() {
        return isNavigatingToNewRootLayout;
    }
}));
function isNavigatingToNewRootLayout(currentTree, nextTree) {
    // Compare segments
    const currentTreeSegment = currentTree[0];
    const nextTreeSegment = nextTree[0];
    // If any segment is different before we find the root layout, the root layout has changed.
    // E.g. /same/(group1)/layout.js -> /same/(group2)/layout.js
    // First segment is 'same' for both, keep looking. (group1) changed to (group2) before the root layout was found, it must have changed.
    if (Array.isArray(currentTreeSegment) && Array.isArray(nextTreeSegment)) {
        // Compare dynamic param name and type but ignore the value, different values would not affect the current root layout
        // /[name] - /slug1 and /slug2, both values (slug1 & slug2) still has the same layout /[name]/layout.js
        if (currentTreeSegment[0] !== nextTreeSegment[0] || currentTreeSegment[2] !== nextTreeSegment[2]) {
            return true;
        }
    } else if (currentTreeSegment !== nextTreeSegment) {
        return true;
    }
    // Current tree root layout found
    if (currentTree[4]) {
        // If the next tree doesn't have the root layout flag, it must have changed.
        return !nextTree[4];
    }
    // Current tree  didn't have its root layout here, must have changed.
    if (nextTree[4]) {
        return true;
    }
    // We can't assume it's `parallelRoutes.children` here in case the root layout is `app/@something/layout.js`
    // But it's not possible to be more than one parallelRoutes before the root layout is found
    // TODO-APP: change to traverse all parallel routes
    const currentTreeChild = Object.values(currentTree[1])[0];
    const nextTreeChild = Object.values(nextTree[1])[0];
    if (!currentTreeChild || !nextTreeChild) return true;
    return isNavigatingToNewRootLayout(currentTreeChild, nextTreeChild);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-navigating-to-new-root-layout.js.map


/***/ }),

/***/ 2401:
/***/ ((module, exports) => {

"use strict";
/**
 * Read record value or throw Promise if it's not resolved yet.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "readRecordValue", ({
    enumerable: true,
    get: function() {
        return readRecordValue;
    }
}));
function readRecordValue(thenable) {
    // @ts-expect-error TODO: fix type
    if (thenable.status === "fulfilled") {
        // @ts-expect-error TODO: fix type
        return thenable.value;
    } else {
        throw thenable;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=read-record-value.js.map


/***/ }),

/***/ 7300:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fastRefreshReducer", ({
    enumerable: true,
    get: function() {
        return fastRefreshReducer;
    }
}));
const _fetchserverresponse = __webpack_require__(8080);
const _createrecordfromthenable = __webpack_require__(4621);
const _readrecordvalue = __webpack_require__(2401);
const _createhreffromurl = __webpack_require__(4331);
const _applyrouterstatepatchtotree = __webpack_require__(3914);
const _isnavigatingtonewrootlayout = __webpack_require__(2615);
const _navigatereducer = __webpack_require__(9962);
const _handlemutable = __webpack_require__(7462);
const _applyflightdata = __webpack_require__(4173);
// A version of refresh reducer that keeps the cache around instead of wiping all of it.
function fastRefreshReducerImpl(state, action) {
    const { cache, mutable, origin } = action;
    const href = state.canonicalUrl;
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(state.tree);
    if (isForCurrentTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    if (!cache.data) {
        // TODO-APP: verify that `href` is not an external url.
        // Fetch data from the root of the tree.
        cache.data = (0, _createrecordfromthenable.createRecordFromThenable)((0, _fetchserverresponse.fetchServerResponse)(new URL(href, origin), [
            state.tree[0],
            state.tree[1],
            state.tree[2],
            "refetch"
        ], state.nextUrl, state.buildId));
    }
    const [flightData, canonicalUrlOverride] = (0, _readrecordvalue.readRecordValue)(cache.data);
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
    }
    // Remove cache.data as it has been resolved at this point.
    cache.data = null;
    let currentTree = state.tree;
    let currentCache = state.cache;
    for (const flightDataPath of flightData){
        // FlightDataPath with more than two items means unexpected Flight data was returned
        if (flightDataPath.length !== 3) {
            // TODO-APP: handle this case better
            console.log("REFRESH FAILED");
            return state;
        }
        // Given the path can only have two items the items are only the router state and subTreeData for the root.
        const [treePatch] = flightDataPath;
        const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
            ""
        ], currentTree, treePatch);
        if (newTree === null) {
            throw new Error("SEGMENT MISMATCH");
        }
        if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, href, state.pushRef.pendingPush);
        }
        const canonicalUrlOverrideHref = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : undefined;
        if (canonicalUrlOverride) {
            mutable.canonicalUrl = canonicalUrlOverrideHref;
        }
        const applied = (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath);
        if (applied) {
            mutable.cache = cache;
            currentCache = cache;
        }
        mutable.previousTree = currentTree;
        mutable.patchedTree = newTree;
        mutable.canonicalUrl = href;
        currentTree = newTree;
    }
    return (0, _handlemutable.handleMutable)(state, mutable);
}
function fastRefreshReducerNoop(state, _action) {
    return state;
}
const fastRefreshReducer =  true ? fastRefreshReducerNoop : 0;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fast-refresh-reducer.js.map


/***/ }),

/***/ 1333:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "findHeadInCache", ({
    enumerable: true,
    get: function() {
        return findHeadInCache;
    }
}));
const _createroutercachekey = __webpack_require__(8870);
function findHeadInCache(cache, parallelRoutes) {
    const isLastItem = Object.keys(parallelRoutes).length === 0;
    if (isLastItem) {
        return cache.head;
    }
    for(const key in parallelRoutes){
        const [segment, childParallelRoutes] = parallelRoutes[key];
        const childSegmentMap = cache.parallelRoutes.get(key);
        if (!childSegmentMap) {
            continue;
        }
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
        const cacheNode = childSegmentMap.get(cacheKey);
        if (!cacheNode) {
            continue;
        }
        const item = findHeadInCache(cacheNode, childParallelRoutes);
        if (item) {
            return item;
        }
    }
    return undefined;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=find-head-in-cache.js.map


/***/ }),

/***/ 7741:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getSegmentValue", ({
    enumerable: true,
    get: function() {
        return getSegmentValue;
    }
}));
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-segment-value.js.map


/***/ }),

/***/ 9962:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    handleExternalUrl: function() {
        return handleExternalUrl;
    },
    navigateReducer: function() {
        return navigateReducer;
    }
});
const _approutercontext = __webpack_require__(7085);
const _fetchserverresponse = __webpack_require__(8080);
const _createrecordfromthenable = __webpack_require__(4621);
const _readrecordvalue = __webpack_require__(2401);
const _createhreffromurl = __webpack_require__(4331);
const _invalidatecachebelowflightsegmentpath = __webpack_require__(8457);
const _fillcachewithdataproperty = __webpack_require__(9996);
const _createoptimistictree = __webpack_require__(8503);
const _applyrouterstatepatchtotree = __webpack_require__(3914);
const _shouldhardnavigate = __webpack_require__(8072);
const _isnavigatingtonewrootlayout = __webpack_require__(2615);
const _routerreducertypes = __webpack_require__(2836);
const _handlemutable = __webpack_require__(7462);
const _applyflightdata = __webpack_require__(4173);
const _getprefetchcacheentrystatus = __webpack_require__(6489);
const _pruneprefetchcache = __webpack_require__(7025);
const _prefetchreducer = __webpack_require__(1910);
function handleExternalUrl(state, mutable, url, pendingPush) {
    mutable.previousTree = state.tree;
    mutable.mpaNavigation = true;
    mutable.canonicalUrl = url;
    mutable.pendingPush = pendingPush;
    mutable.scrollableSegments = undefined;
    return (0, _handlemutable.handleMutable)(state, mutable);
}
function generateSegmentsFromPatch(flightRouterPatch) {
    const segments = [];
    const [segment, parallelRoutes] = flightRouterPatch;
    if (Object.keys(parallelRoutes).length === 0) {
        return [
            [
                segment
            ]
        ];
    }
    for (const [parallelRouteKey, parallelRoute] of Object.entries(parallelRoutes)){
        for (const childSegment of generateSegmentsFromPatch(parallelRoute)){
            // If the segment is empty, it means we are at the root of the tree
            if (segment === "") {
                segments.push([
                    parallelRouteKey,
                    ...childSegment
                ]);
            } else {
                segments.push([
                    segment,
                    parallelRouteKey,
                    ...childSegment
                ]);
            }
        }
    }
    return segments;
}
function addRefetchToLeafSegments(newCache, currentCache, flightSegmentPath, treePatch, data) {
    let appliedPatch = false;
    newCache.status = _approutercontext.CacheStates.READY;
    newCache.subTreeData = currentCache.subTreeData;
    newCache.parallelRoutes = new Map(currentCache.parallelRoutes);
    const segmentPathsToFill = generateSegmentsFromPatch(treePatch).map((segment)=>[
            ...flightSegmentPath,
            ...segment
        ]);
    for (const segmentPaths of segmentPathsToFill){
        const res = (0, _fillcachewithdataproperty.fillCacheWithDataProperty)(newCache, currentCache, segmentPaths, data);
        if (!(res == null ? void 0 : res.bailOptimistic)) {
            appliedPatch = true;
        }
    }
    return appliedPatch;
}
function navigateReducer(state, action) {
    const { url, isExternalUrl, navigateType, cache, mutable, forceOptimisticNavigation, shouldScroll } = action;
    const { pathname, hash } = url;
    const href = (0, _createhreffromurl.createHrefFromUrl)(url);
    const pendingPush = navigateType === "push";
    // we want to prune the prefetch cache on every navigation to avoid it growing too large
    (0, _pruneprefetchcache.prunePrefetchCache)(state.prefetchCache);
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(state.tree);
    if (isForCurrentTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    if (isExternalUrl) {
        return handleExternalUrl(state, mutable, url.toString(), pendingPush);
    }
    let prefetchValues = state.prefetchCache.get((0, _createhreffromurl.createHrefFromUrl)(url, false));
    if (forceOptimisticNavigation && (prefetchValues == null ? void 0 : prefetchValues.kind) !== _routerreducertypes.PrefetchKind.TEMPORARY) {
        const segments = pathname.split("/");
        // TODO-APP: figure out something better for index pages
        segments.push("__PAGE__");
        // Optimistic tree case.
        // If the optimistic tree is deeper than the current state leave that deeper part out of the fetch
        const optimisticTree = (0, _createoptimistictree.createOptimisticTree)(segments, state.tree, false);
        // we need a copy of the cache in case we need to revert to it
        const temporaryCacheNode = {
            ...cache
        };
        // Copy subTreeData for the root node of the cache.
        // Note: didn't do it above because typescript doesn't like it.
        temporaryCacheNode.status = _approutercontext.CacheStates.READY;
        temporaryCacheNode.subTreeData = state.cache.subTreeData;
        temporaryCacheNode.parallelRoutes = new Map(state.cache.parallelRoutes);
        let data;
        const fetchResponse = ()=>{
            if (!data) {
                data = (0, _createrecordfromthenable.createRecordFromThenable)((0, _fetchserverresponse.fetchServerResponse)(url, optimisticTree, state.nextUrl, state.buildId));
            }
            return data;
        };
        // TODO-APP: segments.slice(1) strips '', we can get rid of '' altogether.
        // TODO-APP: re-evaluate if we need to strip the last segment
        const optimisticFlightSegmentPath = segments.slice(1).map((segment)=>[
                "children",
                segment
            ]).flat();
        // Copy existing cache nodes as far as possible and fill in `data` property with the started data fetch.
        // The `data` property is used to suspend in layout-router during render if it hasn't resolved yet by the time it renders.
        const res = (0, _fillcachewithdataproperty.fillCacheWithDataProperty)(temporaryCacheNode, state.cache, optimisticFlightSegmentPath, fetchResponse, true);
        // If optimistic fetch couldn't happen it falls back to the non-optimistic case.
        if (!(res == null ? void 0 : res.bailOptimistic)) {
            mutable.previousTree = state.tree;
            mutable.patchedTree = optimisticTree;
            mutable.pendingPush = pendingPush;
            mutable.hashFragment = hash;
            mutable.shouldScroll = shouldScroll;
            mutable.scrollableSegments = [];
            mutable.cache = temporaryCacheNode;
            mutable.canonicalUrl = href;
            state.prefetchCache.set((0, _createhreffromurl.createHrefFromUrl)(url, false), {
                data: Promise.resolve(data),
                // this will make sure that the entry will be discarded after 30s
                kind: _routerreducertypes.PrefetchKind.TEMPORARY,
                prefetchTime: Date.now(),
                treeAtTimeOfPrefetch: state.tree,
                lastUsedTime: Date.now()
            });
            return (0, _handlemutable.handleMutable)(state, mutable);
        }
    }
    // If we don't have a prefetch value, we need to create one
    if (!prefetchValues) {
        const data = (0, _createrecordfromthenable.createRecordFromThenable)((0, _fetchserverresponse.fetchServerResponse)(url, state.tree, state.nextUrl, state.buildId, // in order to simulate the behavior of the prefetch cache
         false ? 0 : undefined));
        const newPrefetchValue = {
            data: Promise.resolve(data),
            // this will make sure that the entry will be discarded after 30s
            kind:  false ? 0 : _routerreducertypes.PrefetchKind.TEMPORARY,
            prefetchTime: Date.now(),
            treeAtTimeOfPrefetch: state.tree,
            lastUsedTime: null
        };
        state.prefetchCache.set((0, _createhreffromurl.createHrefFromUrl)(url, false), newPrefetchValue);
        prefetchValues = newPrefetchValue;
    }
    const prefetchEntryCacheStatus = (0, _getprefetchcacheentrystatus.getPrefetchEntryCacheStatus)(prefetchValues);
    // The one before last item is the router state tree patch
    const { treeAtTimeOfPrefetch, data } = prefetchValues;
    _prefetchreducer.prefetchQueue.bump(data);
    // Unwrap cache data with `use` to suspend here (in the reducer) until the fetch resolves.
    const [flightData, canonicalUrlOverride] = (0, _readrecordvalue.readRecordValue)(data);
    // important: we should only mark the cache node as dirty after we unsuspend from the call above
    prefetchValues.lastUsedTime = Date.now();
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return handleExternalUrl(state, mutable, flightData, pendingPush);
    }
    let currentTree = state.tree;
    let currentCache = state.cache;
    let scrollableSegments = [];
    for (const flightDataPath of flightData){
        const flightSegmentPath = flightDataPath.slice(0, -4);
        // The one before last item is the router state tree patch
        const treePatch = flightDataPath.slice(-3)[0];
        // TODO-APP: remove ''
        const flightSegmentPathWithLeadingEmpty = [
            "",
            ...flightSegmentPath
        ];
        // Create new tree based on the flightSegmentPath and router state patch
        let newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)(flightSegmentPathWithLeadingEmpty, currentTree, treePatch);
        // If the tree patch can't be applied to the current tree then we use the tree at time of prefetch
        // TODO-APP: This should instead fill in the missing pieces in `currentTree` with the data from `treeAtTimeOfPrefetch`, then apply the patch.
        if (newTree === null) {
            newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)(flightSegmentPathWithLeadingEmpty, treeAtTimeOfPrefetch, treePatch);
        }
        if (newTree !== null) {
            if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
                return handleExternalUrl(state, mutable, href, pendingPush);
            }
            let applied = (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath, prefetchValues.kind === "auto" && prefetchEntryCacheStatus === _getprefetchcacheentrystatus.PrefetchCacheEntryStatus.reusable);
            if (!applied && prefetchEntryCacheStatus === _getprefetchcacheentrystatus.PrefetchCacheEntryStatus.stale) {
                applied = addRefetchToLeafSegments(cache, currentCache, flightSegmentPath, treePatch, ()=>(0, _fetchserverresponse.fetchServerResponse)(url, currentTree, state.nextUrl, state.buildId));
            }
            const hardNavigate = (0, _shouldhardnavigate.shouldHardNavigate)(flightSegmentPathWithLeadingEmpty, currentTree);
            if (hardNavigate) {
                cache.status = _approutercontext.CacheStates.READY;
                // Copy subTreeData for the root node of the cache.
                cache.subTreeData = currentCache.subTreeData;
                (0, _invalidatecachebelowflightsegmentpath.invalidateCacheBelowFlightSegmentPath)(cache, currentCache, flightSegmentPath);
                // Ensure the existing cache value is used when the cache was not invalidated.
                mutable.cache = cache;
            } else if (applied) {
                mutable.cache = cache;
            }
            currentCache = cache;
            currentTree = newTree;
            for (const subSegment of generateSegmentsFromPatch(treePatch)){
                const scrollableSegmentPath = [
                    ...flightSegmentPath,
                    ...subSegment
                ];
                // Filter out the __DEFAULT__ paths as they shouldn't be scrolled to in this case.
                if (scrollableSegmentPath[scrollableSegmentPath.length - 1] !== "__DEFAULT__") {
                    scrollableSegments.push(scrollableSegmentPath);
                }
            }
        }
    }
    mutable.previousTree = state.tree;
    mutable.patchedTree = currentTree;
    mutable.canonicalUrl = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : href;
    mutable.pendingPush = pendingPush;
    mutable.scrollableSegments = scrollableSegments;
    mutable.hashFragment = hash;
    mutable.shouldScroll = shouldScroll;
    return (0, _handlemutable.handleMutable)(state, mutable);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigate-reducer.js.map


/***/ }),

/***/ 1910:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    prefetchQueue: function() {
        return prefetchQueue;
    },
    prefetchReducer: function() {
        return prefetchReducer;
    }
});
const _createhreffromurl = __webpack_require__(4331);
const _fetchserverresponse = __webpack_require__(8080);
const _routerreducertypes = __webpack_require__(2836);
const _createrecordfromthenable = __webpack_require__(4621);
const _pruneprefetchcache = __webpack_require__(7025);
const _approuterheaders = __webpack_require__(6265);
const _promisequeue = __webpack_require__(8811);
const prefetchQueue = new _promisequeue.PromiseQueue(5);
function prefetchReducer(state, action) {
    // let's prune the prefetch cache before we do anything else
    (0, _pruneprefetchcache.prunePrefetchCache)(state.prefetchCache);
    const { url } = action;
    url.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    const href = (0, _createhreffromurl.createHrefFromUrl)(url, false);
    const cacheEntry = state.prefetchCache.get(href);
    if (cacheEntry) {
        /**
     * If the cache entry present was marked as temporary, it means that we prefetched it from the navigate reducer,
     * where we didn't have the prefetch intent. We want to update it to the new, more accurate, kind here.
     */ if (cacheEntry.kind === _routerreducertypes.PrefetchKind.TEMPORARY) {
            state.prefetchCache.set(href, {
                ...cacheEntry,
                kind: action.kind
            });
        }
        /**
     * if the prefetch action was a full prefetch and that the current cache entry wasn't one, we want to re-prefetch,
     * otherwise we can re-use the current cache entry
     **/ if (!(cacheEntry.kind === _routerreducertypes.PrefetchKind.AUTO && action.kind === _routerreducertypes.PrefetchKind.FULL)) {
            return state;
        }
    }
    // fetchServerResponse is intentionally not awaited so that it can be unwrapped in the navigate-reducer
    const serverResponse = (0, _createrecordfromthenable.createRecordFromThenable)(prefetchQueue.enqueue(()=>(0, _fetchserverresponse.fetchServerResponse)(url, state.tree, state.nextUrl, state.buildId, action.kind)));
    // Create new tree based on the flightSegmentPath and router state patch
    state.prefetchCache.set(href, {
        // Create new tree based on the flightSegmentPath and router state patch
        treeAtTimeOfPrefetch: state.tree,
        data: serverResponse,
        kind: action.kind,
        prefetchTime: Date.now(),
        lastUsedTime: null
    });
    return state;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=prefetch-reducer.js.map


/***/ }),

/***/ 7025:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "prunePrefetchCache", ({
    enumerable: true,
    get: function() {
        return prunePrefetchCache;
    }
}));
const _getprefetchcacheentrystatus = __webpack_require__(6489);
function prunePrefetchCache(prefetchCache) {
    for (const [href, prefetchCacheEntry] of prefetchCache){
        if ((0, _getprefetchcacheentrystatus.getPrefetchEntryCacheStatus)(prefetchCacheEntry) === _getprefetchcacheentrystatus.PrefetchCacheEntryStatus.expired) {
            prefetchCache.delete(href);
        }
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=prune-prefetch-cache.js.map


/***/ }),

/***/ 9082:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "refreshReducer", ({
    enumerable: true,
    get: function() {
        return refreshReducer;
    }
}));
const _fetchserverresponse = __webpack_require__(8080);
const _createrecordfromthenable = __webpack_require__(4621);
const _readrecordvalue = __webpack_require__(2401);
const _createhreffromurl = __webpack_require__(4331);
const _applyrouterstatepatchtotree = __webpack_require__(3914);
const _isnavigatingtonewrootlayout = __webpack_require__(2615);
const _navigatereducer = __webpack_require__(9962);
const _handlemutable = __webpack_require__(7462);
const _approutercontext = __webpack_require__(7085);
const _filllazyitemstillleafwithhead = __webpack_require__(2684);
function refreshReducer(state, action) {
    const { cache, mutable, origin } = action;
    const href = state.canonicalUrl;
    let currentTree = state.tree;
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(currentTree);
    if (isForCurrentTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    if (!cache.data) {
        // TODO-APP: verify that `href` is not an external url.
        // Fetch data from the root of the tree.
        cache.data = (0, _createrecordfromthenable.createRecordFromThenable)((0, _fetchserverresponse.fetchServerResponse)(new URL(href, origin), [
            currentTree[0],
            currentTree[1],
            currentTree[2],
            "refetch"
        ], state.nextUrl, state.buildId));
    }
    const [flightData, canonicalUrlOverride] = (0, _readrecordvalue.readRecordValue)(cache.data);
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
    }
    // Remove cache.data as it has been resolved at this point.
    cache.data = null;
    for (const flightDataPath of flightData){
        // FlightDataPath with more than two items means unexpected Flight data was returned
        if (flightDataPath.length !== 3) {
            // TODO-APP: handle this case better
            console.log("REFRESH FAILED");
            return state;
        }
        // Given the path can only have two items the items are only the router state and subTreeData for the root.
        const [treePatch] = flightDataPath;
        const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
            ""
        ], currentTree, treePatch);
        if (newTree === null) {
            throw new Error("SEGMENT MISMATCH");
        }
        if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, href, state.pushRef.pendingPush);
        }
        const canonicalUrlOverrideHref = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : undefined;
        if (canonicalUrlOverride) {
            mutable.canonicalUrl = canonicalUrlOverrideHref;
        }
        // The one before last item is the router state tree patch
        const [subTreeData, head] = flightDataPath.slice(-2);
        // Handles case where prefetch only returns the router tree patch without rendered components.
        if (subTreeData !== null) {
            cache.status = _approutercontext.CacheStates.READY;
            cache.subTreeData = subTreeData;
            (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, undefined, treePatch, head);
            mutable.cache = cache;
            mutable.prefetchCache = new Map();
        }
        mutable.previousTree = currentTree;
        mutable.patchedTree = newTree;
        mutable.canonicalUrl = href;
        currentTree = newTree;
    }
    return (0, _handlemutable.handleMutable)(state, mutable);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=refresh-reducer.js.map


/***/ }),

/***/ 9425:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "restoreReducer", ({
    enumerable: true,
    get: function() {
        return restoreReducer;
    }
}));
const _createhreffromurl = __webpack_require__(4331);
function restoreReducer(state, action) {
    const { url, tree } = action;
    const href = (0, _createhreffromurl.createHrefFromUrl)(url);
    return {
        buildId: state.buildId,
        // Set canonical url
        canonicalUrl: href,
        pushRef: state.pushRef,
        focusAndScrollRef: state.focusAndScrollRef,
        cache: state.cache,
        prefetchCache: state.prefetchCache,
        // Restore provided tree
        tree: tree,
        nextUrl: url.pathname
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=restore-reducer.js.map


/***/ }),

/***/ 7238:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "serverActionReducer", ({
    enumerable: true,
    get: function() {
        return serverActionReducer;
    }
}));
const _appcallserver = __webpack_require__(6937);
const _approuterheaders = __webpack_require__(6265);
const _createrecordfromthenable = __webpack_require__(4621);
const _readrecordvalue = __webpack_require__(2401);
const _client = __webpack_require__(7897);
const _routerreducertypes = __webpack_require__(2836);
const _addbasepath = __webpack_require__(4578);
const _createhreffromurl = __webpack_require__(4331);
const _redirect = __webpack_require__(2622);
async function fetchServerAction(state, param) {
    let { actionId, actionArgs } = param;
    const body = await (0, _client.encodeReply)(actionArgs);
    const res = await fetch("", {
        method: "POST",
        headers: {
            Accept: _approuterheaders.RSC_CONTENT_TYPE_HEADER,
            "Next-Action": actionId,
            [_approuterheaders.NEXT_ROUTER_STATE_TREE]: JSON.stringify(state.tree),
            ... false ? 0 : {},
            ...state.nextUrl ? {
                [_approuterheaders.NEXT_URL]: state.nextUrl
            } : {}
        },
        body
    });
    const location = res.headers.get("x-action-redirect");
    let revalidatedParts;
    try {
        const revalidatedHeader = JSON.parse(res.headers.get("x-action-revalidated") || "[[],0,0]");
        revalidatedParts = {
            paths: revalidatedHeader[0] || [],
            tag: !!revalidatedHeader[1],
            cookie: revalidatedHeader[2]
        };
    } catch (e) {
        revalidatedParts = {
            paths: [],
            tag: false,
            cookie: false
        };
    }
    const redirectLocation = location ? new URL((0, _addbasepath.addBasePath)(location), window.location.origin) : undefined;
    let isFlightResponse = res.headers.get("content-type") === _approuterheaders.RSC_CONTENT_TYPE_HEADER;
    if (isFlightResponse) {
        const response = await (0, _client.createFromFetch)(Promise.resolve(res), {
            callServer: _appcallserver.callServer
        });
        // if it was a redirection, then result is just a regular RSC payload
        if (location) {
            const [, payload] = response;
            return {
                actionFlightData: payload == null ? void 0 : payload[1],
                redirectLocation,
                revalidatedParts
            };
        // otherwise it's a tuple of [actionResult, actionFlightData]
        } else {
            const [actionResult, [, actionFlightData]] = response != null ? response : [];
            return {
                actionResult,
                actionFlightData,
                redirectLocation,
                revalidatedParts
            };
        }
    }
    return {
        redirectLocation,
        revalidatedParts
    };
}
function serverActionReducer(state, action) {
    // the action could be called twice so we need to check if we already have applied it
    if (action.mutable.serverActionApplied) {
        return state;
    }
    if (!action.mutable.inFlightServerAction) {
        action.mutable.previousTree = state.tree;
        action.mutable.previousUrl = state.canonicalUrl;
        action.mutable.inFlightServerAction = (0, _createrecordfromthenable.createRecordFromThenable)(fetchServerAction(state, action));
    }
    try {
        // suspends until the server action is resolved.
        const { actionResult, actionFlightData, redirectLocation, revalidatedParts } = (0, _readrecordvalue.readRecordValue)(action.mutable.inFlightServerAction);
        // Invalidate the cache for the revalidated parts. This has to be done before the
        // cache is updated with the action's flight data again.
        if (revalidatedParts.tag || revalidatedParts.cookie) {
            // Invalidate everything if the tag is set.
            state.prefetchCache.clear();
        } else if (revalidatedParts.paths.length > 0) {
            // Invalidate all subtrees that are below the revalidated paths, and invalidate
            // all the prefetch cache.
            // TODO-APP: Currently the prefetch cache doesn't have subtree information,
            // so we need to invalidate the entire cache if a path was revalidated.
            state.prefetchCache.clear();
        }
        if (redirectLocation) {
            // the redirection might have a flight data associated with it, so we'll populate the cache with it
            if (actionFlightData) {
                const href = (0, _createhreffromurl.createHrefFromUrl)(redirectLocation, false);
                const previousCacheEntry = state.prefetchCache.get(href);
                var _previousCacheEntry_kind;
                state.prefetchCache.set(href, {
                    data: (0, _createrecordfromthenable.createRecordFromThenable)(Promise.resolve([
                        actionFlightData,
                        // TODO-APP: verify the logic around canonical URL overrides
                        undefined
                    ])),
                    kind: (_previousCacheEntry_kind = previousCacheEntry == null ? void 0 : previousCacheEntry.kind) != null ? _previousCacheEntry_kind : _routerreducertypes.PrefetchKind.TEMPORARY,
                    prefetchTime: Date.now(),
                    treeAtTimeOfPrefetch: action.mutable.previousTree,
                    lastUsedTime: null
                });
            }
            // we throw the redirection in the action handler so that it is caught during render
            action.reject((0, _redirect.getRedirectError)(redirectLocation.toString(), _redirect.RedirectType.push));
        } else {
            if (actionFlightData) {
                const href = (0, _createhreffromurl.createHrefFromUrl)(new URL(action.mutable.previousUrl, window.location.origin), false);
                const previousCacheEntry = state.prefetchCache.get(href);
                var _previousCacheEntry_kind1;
                state.prefetchCache.set((0, _createhreffromurl.createHrefFromUrl)(new URL(action.mutable.previousUrl, window.location.origin), false), {
                    data: (0, _createrecordfromthenable.createRecordFromThenable)(Promise.resolve([
                        actionFlightData,
                        // TODO-APP: verify the logic around canonical URL overrides
                        undefined
                    ])),
                    kind: (_previousCacheEntry_kind1 = previousCacheEntry == null ? void 0 : previousCacheEntry.kind) != null ? _previousCacheEntry_kind1 : _routerreducertypes.PrefetchKind.TEMPORARY,
                    prefetchTime: Date.now(),
                    treeAtTimeOfPrefetch: action.mutable.previousTree,
                    lastUsedTime: null
                });
                // this is an intentional hack around React: we want to update the tree in a new render
                setTimeout(()=>{
                    action.changeByServerResponse(action.mutable.previousTree, actionFlightData, undefined);
                });
            }
            action.resolve(actionResult);
        }
    } catch (e) {
        if (e.status === "rejected") {
            action.reject(e.value);
        } else {
            throw e;
        }
    }
    action.mutable.serverActionApplied = true;
    return state;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=server-action-reducer.js.map


/***/ }),

/***/ 5022:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "serverPatchReducer", ({
    enumerable: true,
    get: function() {
        return serverPatchReducer;
    }
}));
const _createhreffromurl = __webpack_require__(4331);
const _applyrouterstatepatchtotree = __webpack_require__(3914);
const _isnavigatingtonewrootlayout = __webpack_require__(2615);
const _navigatereducer = __webpack_require__(9962);
const _applyflightdata = __webpack_require__(4173);
const _handlemutable = __webpack_require__(7462);
function serverPatchReducer(state, action) {
    const { flightData, previousTree, overrideCanonicalUrl, cache, mutable } = action;
    const isForCurrentTree = JSON.stringify(previousTree) === JSON.stringify(state.tree);
    // When a fetch is slow to resolve it could be that you navigated away while the request was happening or before the reducer runs.
    // In that case opt-out of applying the patch given that the data could be stale.
    if (!isForCurrentTree) {
        // TODO-APP: Handle tree mismatch
        console.log("TREE MISMATCH");
        // Keep everything as-is.
        return state;
    }
    if (mutable.previousTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
    }
    let currentTree = state.tree;
    let currentCache = state.cache;
    for (const flightDataPath of flightData){
        // Slices off the last segment (which is at -4) as it doesn't exist in the tree yet
        const flightSegmentPath = flightDataPath.slice(0, -4);
        const [treePatch] = flightDataPath.slice(-3, -2);
        const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
            "",
            ...flightSegmentPath
        ], currentTree, treePatch);
        if (newTree === null) {
            throw new Error("SEGMENT MISMATCH");
        }
        if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, state.canonicalUrl, state.pushRef.pendingPush);
        }
        const canonicalUrlOverrideHref = overrideCanonicalUrl ? (0, _createhreffromurl.createHrefFromUrl)(overrideCanonicalUrl) : undefined;
        if (canonicalUrlOverrideHref) {
            mutable.canonicalUrl = canonicalUrlOverrideHref;
        }
        (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath);
        mutable.previousTree = currentTree;
        mutable.patchedTree = newTree;
        mutable.cache = cache;
        currentCache = cache;
        currentTree = newTree;
    }
    return (0, _handlemutable.handleMutable)(state, mutable);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=server-patch-reducer.js.map


/***/ }),

/***/ 2836:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PrefetchKind: function() {
        return PrefetchKind;
    },
    ACTION_REFRESH: function() {
        return ACTION_REFRESH;
    },
    ACTION_NAVIGATE: function() {
        return ACTION_NAVIGATE;
    },
    ACTION_RESTORE: function() {
        return ACTION_RESTORE;
    },
    ACTION_SERVER_PATCH: function() {
        return ACTION_SERVER_PATCH;
    },
    ACTION_PREFETCH: function() {
        return ACTION_PREFETCH;
    },
    ACTION_FAST_REFRESH: function() {
        return ACTION_FAST_REFRESH;
    },
    ACTION_SERVER_ACTION: function() {
        return ACTION_SERVER_ACTION;
    }
});
const ACTION_REFRESH = "refresh";
const ACTION_NAVIGATE = "navigate";
const ACTION_RESTORE = "restore";
const ACTION_SERVER_PATCH = "server-patch";
const ACTION_PREFETCH = "prefetch";
const ACTION_FAST_REFRESH = "fast-refresh";
const ACTION_SERVER_ACTION = "server-action";
var PrefetchKind;
(function(PrefetchKind) {
    PrefetchKind["AUTO"] = "auto";
    PrefetchKind["FULL"] = "full";
    PrefetchKind["TEMPORARY"] = "temporary";
})(PrefetchKind || (PrefetchKind = {}));
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer-types.js.map


/***/ }),

/***/ 7189:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "reducer", ({
    enumerable: true,
    get: function() {
        return reducer;
    }
}));
const _routerreducertypes = __webpack_require__(2836);
const _navigatereducer = __webpack_require__(9962);
const _serverpatchreducer = __webpack_require__(5022);
const _restorereducer = __webpack_require__(9425);
const _refreshreducer = __webpack_require__(9082);
const _prefetchreducer = __webpack_require__(1910);
const _fastrefreshreducer = __webpack_require__(7300);
const _serveractionreducer = __webpack_require__(7238);
/**
 * Reducer that handles the app-router state updates.
 */ function clientReducer(state, action) {
    switch(action.type){
        case _routerreducertypes.ACTION_NAVIGATE:
            {
                return (0, _navigatereducer.navigateReducer)(state, action);
            }
        case _routerreducertypes.ACTION_SERVER_PATCH:
            {
                return (0, _serverpatchreducer.serverPatchReducer)(state, action);
            }
        case _routerreducertypes.ACTION_RESTORE:
            {
                return (0, _restorereducer.restoreReducer)(state, action);
            }
        case _routerreducertypes.ACTION_REFRESH:
            {
                return (0, _refreshreducer.refreshReducer)(state, action);
            }
        case _routerreducertypes.ACTION_FAST_REFRESH:
            {
                return (0, _fastrefreshreducer.fastRefreshReducer)(state, action);
            }
        case _routerreducertypes.ACTION_PREFETCH:
            {
                return (0, _prefetchreducer.prefetchReducer)(state, action);
            }
        case _routerreducertypes.ACTION_SERVER_ACTION:
            {
                return (0, _serveractionreducer.serverActionReducer)(state, action);
            }
        // This case should never be hit as dispatch is strongly typed.
        default:
            throw new Error("Unknown action");
    }
}
function serverReducer(state, _action) {
    return state;
}
const reducer =  true ? serverReducer : 0;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer.js.map


/***/ }),

/***/ 8072:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "shouldHardNavigate", ({
    enumerable: true,
    get: function() {
        return shouldHardNavigate;
    }
}));
const _matchsegments = __webpack_require__(7618);
function shouldHardNavigate(flightSegmentPath, flightRouterState) {
    const [segment, parallelRoutes] = flightRouterState;
    // TODO-APP: Check if `as` can be replaced.
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    // Check if current segment matches the existing segment.
    if (!(0, _matchsegments.matchSegment)(currentSegment, segment)) {
        // If dynamic parameter in tree doesn't match up with segment path a hard navigation is triggered.
        if (Array.isArray(currentSegment)) {
            return true;
        }
        // If the existing segment did not match soft navigation is triggered.
        return false;
    }
    const lastSegment = flightSegmentPath.length <= 2;
    if (lastSegment) {
        return false;
    }
    return shouldHardNavigate(flightSegmentPath.slice(2), parallelRoutes[parallelRouteKey]);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=should-hard-navigate.js.map


/***/ }),

/***/ 8437:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createSearchParamsBailoutProxy", ({
    enumerable: true,
    get: function() {
        return createSearchParamsBailoutProxy;
    }
}));
const _staticgenerationbailout = __webpack_require__(8862);
function createSearchParamsBailoutProxy() {
    return new Proxy({}, {
        get (_target, prop) {
            // React adds some properties on the object when serializing for client components
            if (typeof prop === "string") {
                (0, _staticgenerationbailout.staticGenerationBailout)("searchParams." + prop);
            }
        }
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=searchparams-bailout-proxy.js.map


/***/ }),

/***/ 8862:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "staticGenerationBailout", ({
    enumerable: true,
    get: function() {
        return staticGenerationBailout;
    }
}));
const _hooksservercontext = __webpack_require__(8047);
const _staticgenerationasyncstorage = __webpack_require__(3539);
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args);
        this.code = "NEXT_STATIC_GEN_BAILOUT";
    }
}
const staticGenerationBailout = (reason, opts)=>{
    const staticGenerationStore = _staticgenerationasyncstorage.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.dynamicShouldError) {
        const { dynamic = "error", link } = opts || {};
        const suffix = link ? " See more info here: " + link : "";
        throw new StaticGenBailoutError('Page with `dynamic = "' + dynamic + "\"` couldn't be rendered statically because it used `" + reason + "`." + suffix);
    }
    if (staticGenerationStore) {
        staticGenerationStore.revalidate = 0;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        const err = new _hooksservercontext.DynamicServerError(reason);
        staticGenerationStore.dynamicUsageDescription = reason;
        staticGenerationStore.dynamicUsageStack = err.stack;
        throw err;
    }
    return false;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map


/***/ }),

/***/ 4282:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return StaticGenerationSearchParamsBailoutProvider;
    }
}));
const _interop_require_default = __webpack_require__(2147);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8038));
const _searchparamsbailoutproxy = __webpack_require__(8437);
function StaticGenerationSearchParamsBailoutProvider(param) {
    let { Component, propsForComponent } = param;
    const searchParams = (0, _searchparamsbailoutproxy.createSearchParamsBailoutProxy)();
    return /*#__PURE__*/ _react.default.createElement(Component, {
        searchParams: searchParams,
        ...propsForComponent
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-searchparams-bailout-provider.js.map


/***/ }),

/***/ 7951:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "useReducerWithReduxDevtools", ({
    enumerable: true,
    get: function() {
        return useReducerWithReduxDevtools;
    }
}));
const _react = __webpack_require__(8038);
function normalizeRouterState(val) {
    if (val instanceof Map) {
        const obj = {};
        for (const [key, value] of val.entries()){
            if (typeof value === "function") {
                obj[key] = "fn()";
                continue;
            }
            if (typeof value === "object" && value !== null) {
                if (value.$$typeof) {
                    obj[key] = value.$$typeof.toString();
                    continue;
                }
                if (value._bundlerConfig) {
                    obj[key] = "FlightData";
                    continue;
                }
            }
            obj[key] = normalizeRouterState(value);
        }
        return obj;
    }
    if (typeof val === "object" && val !== null) {
        const obj = {};
        for(const key in val){
            const value = val[key];
            if (typeof value === "function") {
                obj[key] = "fn()";
                continue;
            }
            if (typeof value === "object" && value !== null) {
                if (value.$$typeof) {
                    obj[key] = value.$$typeof.toString();
                    continue;
                }
                if (value.hasOwnProperty("_bundlerConfig")) {
                    obj[key] = "FlightData";
                    continue;
                }
            }
            obj[key] = normalizeRouterState(value);
        }
        return obj;
    }
    if (Array.isArray(val)) {
        return val.map(normalizeRouterState);
    }
    return val;
}
function devToolReducer(fn, ref) {
    return (state, action)=>{
        const res = fn(state, action);
        if (ref.current) {
            ref.current.send(action, normalizeRouterState(res));
        }
        return res;
    };
}
function useReducerWithReduxDevtoolsNoop(fn, initialState) {
    const [state, dispatch] = (0, _react.useReducer)(fn, initialState);
    return [
        state,
        dispatch,
        ()=>{}
    ];
}
function useReducerWithReduxDevtoolsImpl(fn, initialState) {
    const devtoolsConnectionRef = (0, _react.useRef)();
    const enabledRef = (0, _react.useRef)();
    (0, _react.useEffect)(()=>{
        if (devtoolsConnectionRef.current || enabledRef.current === false) {
            return;
        }
        if (enabledRef.current === undefined && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined") {
            enabledRef.current = false;
            return;
        }
        devtoolsConnectionRef.current = window.__REDUX_DEVTOOLS_EXTENSION__.connect({
            instanceId: 8000,
            name: "next-router"
        });
        if (devtoolsConnectionRef.current) {
            devtoolsConnectionRef.current.init(normalizeRouterState(initialState));
        }
        return ()=>{
            devtoolsConnectionRef.current = undefined;
        };
    }, [
        initialState
    ]);
    const [state, dispatch] = (0, _react.useReducer)(devToolReducer(/* logReducer( */ fn /*)*/ , devtoolsConnectionRef), initialState);
    const sync = (0, _react.useCallback)(()=>{
        if (devtoolsConnectionRef.current) {
            devtoolsConnectionRef.current.send({
                type: "RENDER_SYNC"
            }, normalizeRouterState(state));
        }
    }, [
        state
    ]);
    return [
        state,
        dispatch,
        sync
    ];
}
const useReducerWithReduxDevtools =  false ? 0 : useReducerWithReduxDevtoolsNoop;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-reducer-with-devtools.js.map


/***/ }),

/***/ 1094:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "normalizePathTrailingSlash", ({
    enumerable: true,
    get: function() {
        return normalizePathTrailingSlash;
    }
}));
const _removetrailingslash = __webpack_require__(3750);
const _parsepath = __webpack_require__(8231);
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith("/") || undefined) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    if (false) {}
    return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map


/***/ }),

/***/ 9708:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    suspense: function() {
        return suspense;
    },
    NoSSR: function() {
        return NoSSR;
    }
});
const _interop_require_default = __webpack_require__(2147);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8038));
const _nossrerror = __webpack_require__(827);
function suspense() {
    const error = new Error(_nossrerror.NEXT_DYNAMIC_NO_SSR_CODE);
    error.digest = _nossrerror.NEXT_DYNAMIC_NO_SSR_CODE;
    throw error;
}
function NoSSR(param) {
    let { children } = param;
    if (true) {
        suspense();
    }
    return children;
} //# sourceMappingURL=dynamic-no-ssr.js.map


/***/ }),

/***/ 827:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// This has to be a shared module which is shared between client component error boundary and dynamic component

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "NEXT_DYNAMIC_NO_SSR_CODE", ({
    enumerable: true,
    get: function() {
        return NEXT_DYNAMIC_NO_SSR_CODE;
    }
}));
const NEXT_DYNAMIC_NO_SSR_CODE = "NEXT_DYNAMIC_NO_SSR_CODE"; //# sourceMappingURL=no-ssr-error.js.map


/***/ }),

/***/ 1363:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Modified from https://github.com/facebook/react/blob/main/packages/react-server-dom-webpack/src/ReactFlightWebpackNodeRegister.js

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createProxy", ({
    enumerable: true,
    get: function() {
        return createProxy;
    }
}));
const CLIENT_REFERENCE = Symbol.for("react.client.reference");
const PROMISE_PROTOTYPE = Promise.prototype;
const deepProxyHandlers = {
    get: function(target, name, _receiver) {
        switch(name){
            // These names are read by the Flight runtime if you end up using the exports object.
            case "$$typeof":
                // These names are a little too common. We should probably have a way to
                // have the Flight runtime extract the inner target instead.
                return target.$$typeof;
            case "$$id":
                return target.$$id;
            case "$$async":
                return target.$$async;
            case "name":
                return target.name;
            case "displayName":
                return undefined;
            // We need to special case this because createElement reads it if we pass this
            // reference.
            case "defaultProps":
                return undefined;
            // Avoid this attempting to be serialized.
            case "toJSON":
                return undefined;
            case Symbol.toPrimitive.toString():
                // @ts-ignore
                return Object.prototype[Symbol.toPrimitive];
            case "Provider":
                throw new Error(`Cannot render a Client Context Provider on the Server. ` + `Instead, you can export a Client Component wrapper ` + `that itself renders a Client Context Provider.`);
            default:
                break;
        }
        const expression = String(target.name) + "." + String(name);
        throw new Error(`Cannot access ${expression} on the server. ` + "You cannot dot into a client module from a server component. " + "You can only pass the imported name through.");
    },
    set: function() {
        throw new Error("Cannot assign to a client module from a server module.");
    }
};
const proxyHandlers = {
    get: function(target, name, _receiver) {
        switch(name){
            // These names are read by the Flight runtime if you end up using the exports object.
            case "$$typeof":
                return target.$$typeof;
            case "$$id":
                return target.$$id;
            case "$$async":
                return target.$$async;
            case "name":
                return target.name;
            // We need to special case this because createElement reads it if we pass this
            // reference.
            case "defaultProps":
                return undefined;
            // Avoid this attempting to be serialized.
            case "toJSON":
                return undefined;
            case Symbol.toPrimitive.toString():
                // @ts-ignore
                return Object.prototype[Symbol.toPrimitive];
            case "__esModule":
                // Something is conditionally checking which export to use. We'll pretend to be
                // an ESM compat module but then we'll check again on the client.
                const moduleId = target.$$id;
                target.default = Object.defineProperties(function() {
                    throw new Error(`Attempted to call the default export of ${moduleId} from the server ` + `but it's on the client. It's not possible to invoke a client function from ` + `the server, it can only be rendered as a Component or passed to props of a ` + `Client Component.`);
                }, {
                    $$typeof: {
                        value: CLIENT_REFERENCE
                    },
                    // This a placeholder value that tells the client to conditionally use the
                    // whole object or just the default export.
                    $$id: {
                        value: target.$$id + "#"
                    },
                    $$async: {
                        value: target.$$async
                    }
                });
                return true;
            case "then":
                if (target.then) {
                    // Use a cached value
                    return target.then;
                }
                if (!target.$$async) {
                    // If this module is expected to return a Promise (such as an AsyncModule) then
                    // we should resolve that with a client reference that unwraps the Promise on
                    // the client.
                    const clientReference = Object.defineProperties({}, {
                        $$typeof: {
                            value: CLIENT_REFERENCE
                        },
                        $$id: {
                            value: target.$$id
                        },
                        $$async: {
                            value: true
                        }
                    });
                    const proxy = new Proxy(clientReference, proxyHandlers);
                    // Treat this as a resolved Promise for React's use()
                    target.status = "fulfilled";
                    target.value = proxy;
                    const then = target.then = Object.defineProperties(function then(resolve, _reject) {
                        // Expose to React.
                        return Promise.resolve(resolve(proxy));
                    }, // export then we should treat it as a reference to that name.
                    {
                        $$typeof: {
                            value: CLIENT_REFERENCE
                        },
                        $$id: {
                            value: target.$$id
                        },
                        $$async: {
                            value: false
                        }
                    });
                    return then;
                } else {
                    // Since typeof .then === 'function' is a feature test we'd continue recursing
                    // indefinitely if we return a function. Instead, we return an object reference
                    // if we check further.
                    return undefined;
                }
            default:
                break;
        }
        let cachedReference = target[name];
        if (!cachedReference) {
            const reference = Object.defineProperties(function() {
                throw new Error(`Attempted to call ${String(name)}() from the server but ${String(name)} is on the client. ` + `It's not possible to invoke a client function from the server, it can ` + `only be rendered as a Component or passed to props of a Client Component.`);
            }, {
                $$typeof: {
                    value: CLIENT_REFERENCE
                },
                $$id: {
                    value: target.$$id + "#" + name
                },
                $$async: {
                    value: target.$$async
                }
            });
            cachedReference = target[name] = new Proxy(reference, deepProxyHandlers);
        }
        return cachedReference;
    },
    getPrototypeOf (_target) {
        // Pretend to be a Promise in case anyone asks.
        return PROMISE_PROTOTYPE;
    },
    set: function() {
        throw new Error("Cannot assign to a client module from a server module.");
    }
};
function createProxy(moduleId) {
    const clientReference = Object.defineProperties({}, {
        $$typeof: {
            value: CLIENT_REFERENCE
        },
        // Represents the whole Module object instead of a particular import.
        $$id: {
            value: moduleId
        },
        $$async: {
            value: false
        }
    });
    return new Proxy(clientReference, proxyHandlers);
} //# sourceMappingURL=module-proxy.js.map


/***/ }),

/***/ 8225:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("/Users/julian/Desktop/react-apps/notes-app/node_modules/next/dist/client/components/app-router.js");
 //# sourceMappingURL=app-router.js.map


/***/ }),

/***/ 1823:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("/Users/julian/Desktop/react-apps/notes-app/node_modules/next/dist/client/components/error-boundary.js");
 //# sourceMappingURL=error-boundary.js.map


/***/ }),

/***/ 1651:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DYNAMIC_ERROR_CODE: function() {
        return DYNAMIC_ERROR_CODE;
    },
    DynamicServerError: function() {
        return DynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = "DYNAMIC_SERVER_USAGE";
class DynamicServerError extends Error {
    constructor(type){
        super("Dynamic server usage: " + type);
        this.digest = DYNAMIC_ERROR_CODE;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map


/***/ }),

/***/ 7149:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("/Users/julian/Desktop/react-apps/notes-app/node_modules/next/dist/client/components/layout-router.js");
 //# sourceMappingURL=layout-router.js.map


/***/ }),

/***/ 9278:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("/Users/julian/Desktop/react-apps/notes-app/node_modules/next/dist/client/components/render-from-template-context.js");
 //# sourceMappingURL=render-from-template-context.js.map


/***/ }),

/***/ 9444:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createSearchParamsBailoutProxy", ({
    enumerable: true,
    get: function() {
        return createSearchParamsBailoutProxy;
    }
}));
const _staticgenerationbailout = __webpack_require__(6164);
function createSearchParamsBailoutProxy() {
    return new Proxy({}, {
        get (_target, prop) {
            // React adds some properties on the object when serializing for client components
            if (typeof prop === "string") {
                (0, _staticgenerationbailout.staticGenerationBailout)("searchParams." + prop);
            }
        }
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=searchparams-bailout-proxy.js.map


/***/ }),

/***/ 6164:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "staticGenerationBailout", ({
    enumerable: true,
    get: function() {
        return staticGenerationBailout;
    }
}));
const _hooksservercontext = __webpack_require__(1651);
const _staticgenerationasyncstorage = __webpack_require__(3539);
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args);
        this.code = "NEXT_STATIC_GEN_BAILOUT";
    }
}
const staticGenerationBailout = (reason, opts)=>{
    const staticGenerationStore = _staticgenerationasyncstorage.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.dynamicShouldError) {
        const { dynamic = "error", link } = opts || {};
        const suffix = link ? " See more info here: " + link : "";
        throw new StaticGenBailoutError('Page with `dynamic = "' + dynamic + "\"` couldn't be rendered statically because it used `" + reason + "`." + suffix);
    }
    if (staticGenerationStore) {
        staticGenerationStore.revalidate = 0;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        const err = new _hooksservercontext.DynamicServerError(reason);
        staticGenerationStore.dynamicUsageDescription = reason;
        staticGenerationStore.dynamicUsageStack = err.stack;
        throw err;
    }
    return false;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map


/***/ }),

/***/ 6345:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("/Users/julian/Desktop/react-apps/notes-app/node_modules/next/dist/client/components/static-generation-searchparams-bailout-provider.js");
 //# sourceMappingURL=static-generation-searchparams-bailout-provider.js.map


/***/ }),

/***/ 5153:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react-dom-server-rendering-stub.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var d = {
    usingClientEntryPoint: !1,
    Events: null,
    Dispatcher: {
        current: null
    }
};
function e(b) {
    for(var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + b, c = 1; c < arguments.length; c++)a += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + b + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var f = d.Dispatcher;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = d;
exports.createPortal = function() {
    throw Error(e(448));
};
exports.experimental_useFormStatus = function() {
    throw Error(e(248));
};
exports.flushSync = function() {
    throw Error(e(449));
};
exports.preconnect = function(b, a) {
    var c = f.current;
    c && c.preconnect(b, a);
};
exports.prefetchDNS = function(b) {
    var a = f.current;
    a && a.prefetchDNS(b);
};
exports.preinit = function(b, a) {
    var c = f.current;
    c && c.preinit(b, a);
};
exports.preload = function(b, a) {
    var c = f.current;
    c && c.preload(b, a);
};
exports.unstable_batchedUpdates = function(b, a) {
    return b(a);
};
exports.version = "18.3.0-canary-9377e1010-20230712";


/***/ }),

/***/ 2060:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
    module.exports = __webpack_require__(5153);
} else {}


/***/ }),

/***/ 9200:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-server-dom-webpack-server.edge.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var aa = __webpack_require__(2947), ba = __webpack_require__(2060), l = null, m = 0;
function n(a, b) {
    if (0 !== b.byteLength) if (512 < b.byteLength) 0 < m && (a.enqueue(new Uint8Array(l.buffer, 0, m)), l = new Uint8Array(512), m = 0), a.enqueue(b);
    else {
        var d = l.length - m;
        d < b.byteLength && (0 === d ? a.enqueue(l) : (l.set(b.subarray(0, d), m), a.enqueue(l), b = b.subarray(d)), l = new Uint8Array(512), m = 0);
        l.set(b, m);
        m += b.byteLength;
    }
    return !0;
}
var p = new TextEncoder;
function ca(a, b) {
    "function" === typeof a.error ? a.error(b) : a.close();
}
var q = Symbol.for("react.client.reference"), t = Symbol.for("react.server.reference");
function u(a, b, d) {
    return Object.defineProperties(a, {
        $$typeof: {
            value: q
        },
        $$id: {
            value: b
        },
        $$async: {
            value: d
        }
    });
}
var da = Function.prototype.bind, ea = Array.prototype.slice;
function fa() {
    var a = da.apply(this, arguments);
    if (this.$$typeof === t) {
        var b = ea.call(arguments, 1);
        a.$$typeof = t;
        a.$$id = this.$$id;
        a.$$bound = this.$$bound ? this.$$bound.concat(b) : b;
    }
    return a;
}
var ha = Promise.prototype, ia = {
    get: function(a, b) {
        switch(b){
            case "$$typeof":
                return a.$$typeof;
            case "$$id":
                return a.$$id;
            case "$$async":
                return a.$$async;
            case "name":
                return a.name;
            case "displayName":
                return;
            case "defaultProps":
                return;
            case "toJSON":
                return;
            case Symbol.toPrimitive:
                return Object.prototype[Symbol.toPrimitive];
            case "Provider":
                throw Error("Cannot render a Client Context Provider on the Server. Instead, you can export a Client Component wrapper that itself renders a Client Context Provider.");
        }
        throw Error("Cannot access " + (String(a.name) + "." + String(b)) + " on the server. You cannot dot into a client module from a server component. You can only pass the imported name through.");
    },
    set: function() {
        throw Error("Cannot assign to a client module from a server module.");
    }
}, ja = {
    get: function(a, b) {
        switch(b){
            case "$$typeof":
                return a.$$typeof;
            case "$$id":
                return a.$$id;
            case "$$async":
                return a.$$async;
            case "name":
                return a.name;
            case "defaultProps":
                return;
            case "toJSON":
                return;
            case Symbol.toPrimitive:
                return Object.prototype[Symbol.toPrimitive];
            case "__esModule":
                var d = a.$$id;
                a.default = u(function() {
                    throw Error("Attempted to call the default export of " + d + " from the server but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
                }, a.$$id + "#", a.$$async);
                return !0;
            case "then":
                if (a.then) return a.then;
                if (a.$$async) return;
                var c = u({}, a.$$id, !0), e = new Proxy(c, ja);
                a.status = "fulfilled";
                a.value = e;
                return a.then = u(function(f) {
                    return Promise.resolve(f(e));
                }, a.$$id + "#then", !1);
        }
        c = a[b];
        c || (c = u(function() {
            throw Error("Attempted to call " + String(b) + "() from the server but " + String(b) + " is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
        }, a.$$id + "#" + b, a.$$async), Object.defineProperty(c, "name", {
            value: b
        }), c = a[b] = new Proxy(c, ia));
        return c;
    },
    getPrototypeOf: function() {
        return ha;
    },
    set: function() {
        throw Error("Cannot assign to a client module from a server module.");
    }
}, pa = {
    prefetchDNS: ka,
    preconnect: la,
    preload: ma,
    preinit: na
};
function ka(a, b) {
    if ("string" === typeof a) {
        var d = v();
        if (d) {
            var c = d.hints, e = "D" + a;
            c.has(e) || (c.add(e), b ? w(d, "D", [
                a,
                b
            ]) : w(d, "D", a), x(d));
        }
    }
}
function la(a, b) {
    if ("string" === typeof a) {
        var d = v();
        if (d) {
            var c = d.hints, e = null == b || "string" !== typeof b.crossOrigin ? null : "use-credentials" === b.crossOrigin ? "use-credentials" : "";
            e = "C" + (null === e ? "null" : e) + "|" + a;
            c.has(e) || (c.add(e), b ? w(d, "C", [
                a,
                b
            ]) : w(d, "C", a), x(d));
        }
    }
}
function ma(a, b) {
    if ("string" === typeof a) {
        var d = v();
        if (d) {
            var c = d.hints, e = "L" + a;
            c.has(e) || (c.add(e), w(d, "L", [
                a,
                b
            ]), x(d));
        }
    }
}
function na(a, b) {
    if ("string" === typeof a) {
        var d = v();
        if (d) {
            var c = d.hints, e = "I" + a;
            c.has(e) || (c.add(e), w(d, "I", [
                a,
                b
            ]), x(d));
        }
    }
}
var qa = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Dispatcher, ra = "function" === typeof AsyncLocalStorage, sa = ra ? new AsyncLocalStorage : null, C = Symbol.for("react.element"), ta = Symbol.for("react.fragment"), ua = Symbol.for("react.provider"), va = Symbol.for("react.server_context"), wa = Symbol.for("react.forward_ref"), xa = Symbol.for("react.suspense"), ya = Symbol.for("react.suspense_list"), za = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), Aa = Symbol.for("react.default_value"), Ba = Symbol.for("react.memo_cache_sentinel"), Ca = Symbol.iterator, E = null;
function F(a, b) {
    if (a !== b) {
        a.context._currentValue = a.parentValue;
        a = a.parent;
        var d = b.parent;
        if (null === a) {
            if (null !== d) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
            if (null === d) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
            F(a, d);
            b.context._currentValue = b.value;
        }
    }
}
function Da(a) {
    a.context._currentValue = a.parentValue;
    a = a.parent;
    null !== a && Da(a);
}
function Ea(a) {
    var b = a.parent;
    null !== b && Ea(b);
    a.context._currentValue = a.value;
}
function Fa(a, b) {
    a.context._currentValue = a.parentValue;
    a = a.parent;
    if (null === a) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    a.depth === b.depth ? F(a, b) : Fa(a, b);
}
function Ga(a, b) {
    var d = b.parent;
    if (null === d) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    a.depth === d.depth ? F(a, d) : Ga(a, d);
    b.context._currentValue = b.value;
}
function Ha(a) {
    var b = E;
    b !== a && (null === b ? Ea(a) : null === a ? Da(b) : b.depth === a.depth ? F(b, a) : b.depth > a.depth ? Fa(b, a) : Ga(b, a), E = a);
}
function Ia(a, b) {
    var d = a._currentValue;
    a._currentValue = b;
    var c = E;
    return E = a = {
        parent: c,
        depth: null === c ? 0 : c.depth + 1,
        context: a,
        parentValue: d,
        value: b
    };
}
var Ja = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`");
function Ka() {}
function La(a, b, d) {
    d = a[d];
    void 0 === d ? a.push(b) : d !== b && (b.then(Ka, Ka), b = d);
    switch(b.status){
        case "fulfilled":
            return b.value;
        case "rejected":
            throw b.reason;
        default:
            if ("string" !== typeof b.status) switch(a = b, a.status = "pending", a.then(function(c) {
                if ("pending" === b.status) {
                    var e = b;
                    e.status = "fulfilled";
                    e.value = c;
                }
            }, function(c) {
                if ("pending" === b.status) {
                    var e = b;
                    e.status = "rejected";
                    e.reason = c;
                }
            }), b.status){
                case "fulfilled":
                    return b.value;
                case "rejected":
                    throw b.reason;
            }
            G = b;
            throw Ja;
    }
}
var G = null;
function Ma() {
    if (null === G) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
    var a = G;
    G = null;
    return a;
}
var H = null, I = 0, J = null;
function Na() {
    var a = J;
    J = null;
    return a;
}
function Oa(a) {
    return a._currentValue;
}
var Sa = {
    useMemo: function(a) {
        return a();
    },
    useCallback: function(a) {
        return a;
    },
    useDebugValue: function() {},
    useDeferredValue: K,
    useTransition: K,
    readContext: Oa,
    useContext: Oa,
    useReducer: K,
    useRef: K,
    useState: K,
    useInsertionEffect: K,
    useLayoutEffect: K,
    useImperativeHandle: K,
    useEffect: K,
    useId: Pa,
    useSyncExternalStore: K,
    useCacheRefresh: function() {
        return Qa;
    },
    useMemoCache: function(a) {
        for(var b = Array(a), d = 0; d < a; d++)b[d] = Ba;
        return b;
    },
    use: Ra
};
function K() {
    throw Error("This Hook is not supported in Server Components.");
}
function Qa() {
    throw Error("Refreshing the cache is not supported in Server Components.");
}
function Pa() {
    if (null === H) throw Error("useId can only be used while React is rendering");
    var a = H.identifierCount++;
    return ":" + H.identifierPrefix + "S" + a.toString(32) + ":";
}
function Ra(a) {
    if (null !== a && "object" === typeof a || "function" === typeof a) {
        if ("function" === typeof a.then) {
            var b = I;
            I += 1;
            null === J && (J = []);
            return La(J, a, b);
        }
        if (a.$$typeof === va) return a._currentValue;
    }
    throw Error("An unsupported type was passed to use(): " + String(a));
}
function Ta() {
    return (new AbortController).signal;
}
function Ua() {
    var a = v();
    return a ? a.cache : new Map;
}
var Va = {
    getCacheSignal: function() {
        var a = Ua(), b = a.get(Ta);
        void 0 === b && (b = Ta(), a.set(Ta, b));
        return b;
    },
    getCacheForType: function(a) {
        var b = Ua(), d = b.get(a);
        void 0 === d && (d = a(), b.set(a, d));
        return d;
    }
}, Wa = Array.isArray;
function Xa(a) {
    return Object.prototype.toString.call(a).replace(/^\[object (.*)\]$/, function(b, d) {
        return d;
    });
}
function Ya(a) {
    switch(typeof a){
        case "string":
            return JSON.stringify(10 >= a.length ? a : a.slice(0, 10) + "...");
        case "object":
            if (Wa(a)) return "[...]";
            a = Xa(a);
            return "Object" === a ? "{...}" : a;
        case "function":
            return "function";
        default:
            return String(a);
    }
}
function L(a) {
    if ("string" === typeof a) return a;
    switch(a){
        case xa:
            return "Suspense";
        case ya:
            return "SuspenseList";
    }
    if ("object" === typeof a) switch(a.$$typeof){
        case wa:
            return L(a.render);
        case za:
            return L(a.type);
        case D:
            var b = a._payload;
            a = a._init;
            try {
                return L(a(b));
            } catch (d) {}
    }
    return "";
}
function M(a, b) {
    var d = Xa(a);
    if ("Object" !== d && "Array" !== d) return d;
    d = -1;
    var c = 0;
    if (Wa(a)) {
        var e = "[";
        for(var f = 0; f < a.length; f++){
            0 < f && (e += ", ");
            var g = a[f];
            g = "object" === typeof g && null !== g ? M(g) : Ya(g);
            "" + f === b ? (d = e.length, c = g.length, e += g) : e = 10 > g.length && 40 > e.length + g.length ? e + g : e + "...";
        }
        e += "]";
    } else if (a.$$typeof === C) e = "<" + L(a.type) + "/>";
    else {
        e = "{";
        f = Object.keys(a);
        for(g = 0; g < f.length; g++){
            0 < g && (e += ", ");
            var k = f[g], h = JSON.stringify(k);
            e += ('"' + k + '"' === h ? k : h) + ": ";
            h = a[k];
            h = "object" === typeof h && null !== h ? M(h) : Ya(h);
            k === b ? (d = e.length, c = h.length, e += h) : e = 10 > h.length && 40 > e.length + h.length ? e + h : e + "...";
        }
        e += "}";
    }
    return void 0 === b ? e : -1 < d && 0 < c ? (a = " ".repeat(d) + "^".repeat(c), "\n  " + e + "\n  " + a) : "\n  " + e;
}
var Za = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $a = Za.ContextRegistry, N = JSON.stringify, ab = Za.ReactCurrentDispatcher, bb = Za.ReactCurrentCache;
function cb(a) {
    console.error(a);
}
function db(a, b, d, c, e) {
    if (null !== bb.current && bb.current !== Va) throw Error("Currently React only supports one RSC renderer at a time.");
    qa.current = pa;
    bb.current = Va;
    var f = new Set, g = [], k = new Set, h = {
        status: 0,
        flushScheduled: !1,
        fatalError: null,
        destination: null,
        bundlerConfig: b,
        cache: new Map,
        nextChunkId: 0,
        pendingChunks: 0,
        hints: k,
        abortableTasks: f,
        pingedTasks: g,
        completedImportChunks: [],
        completedHintChunks: [],
        completedRegularChunks: [],
        completedErrorChunks: [],
        writtenSymbols: new Map,
        writtenClientReferences: new Map,
        writtenServerReferences: new Map,
        writtenProviders: new Map,
        identifierPrefix: e || "",
        identifierCount: 1,
        onError: void 0 === d ? cb : d,
        toJSON: function(r, y) {
            return eb(h, this, r, y);
        }
    };
    h.pendingChunks++;
    b = fb(c);
    a = gb(h, a, b, f);
    g.push(a);
    return h;
}
var O = null;
function v() {
    if (O) return O;
    if (ra) {
        var a = sa.getStore();
        if (a) return a;
    }
    return null;
}
var hb = {};
function ib(a, b) {
    a.pendingChunks++;
    var d = gb(a, null, E, a.abortableTasks);
    switch(b.status){
        case "fulfilled":
            return d.model = b.value, jb(a, d), d.id;
        case "rejected":
            var c = P(a, b.reason);
            Q(a, d.id, c);
            return d.id;
        default:
            "string" !== typeof b.status && (b.status = "pending", b.then(function(e) {
                "pending" === b.status && (b.status = "fulfilled", b.value = e);
            }, function(e) {
                "pending" === b.status && (b.status = "rejected", b.reason = e);
            }));
    }
    b.then(function(e) {
        d.model = e;
        jb(a, d);
    }, function(e) {
        d.status = 4;
        e = P(a, e);
        Q(a, d.id, e);
        null !== a.destination && R(a, a.destination);
    });
    return d.id;
}
function kb(a) {
    if ("fulfilled" === a.status) return a.value;
    if ("rejected" === a.status) throw a.reason;
    throw a;
}
function lb(a) {
    switch(a.status){
        case "fulfilled":
        case "rejected":
            break;
        default:
            "string" !== typeof a.status && (a.status = "pending", a.then(function(b) {
                "pending" === a.status && (a.status = "fulfilled", a.value = b);
            }, function(b) {
                "pending" === a.status && (a.status = "rejected", a.reason = b);
            }));
    }
    return {
        $$typeof: D,
        _payload: a,
        _init: kb
    };
}
function S(a, b, d, c, e, f) {
    if (null !== c && void 0 !== c) throw Error("Refs cannot be used in Server Components, nor passed to Client Components.");
    if ("function" === typeof b) {
        if (b.$$typeof === q) return [
            C,
            b,
            d,
            e
        ];
        I = 0;
        J = f;
        e = b(e);
        return "object" === typeof e && null !== e && "function" === typeof e.then ? "fulfilled" === e.status ? e.value : lb(e) : e;
    }
    if ("string" === typeof b) return [
        C,
        b,
        d,
        e
    ];
    if ("symbol" === typeof b) return b === ta ? e.children : [
        C,
        b,
        d,
        e
    ];
    if (null != b && "object" === typeof b) {
        if (b.$$typeof === q) return [
            C,
            b,
            d,
            e
        ];
        switch(b.$$typeof){
            case D:
                var g = b._init;
                b = g(b._payload);
                return S(a, b, d, c, e, f);
            case wa:
                return a = b.render, I = 0, J = f, a(e, void 0);
            case za:
                return S(a, b.type, d, c, e, f);
            case ua:
                return Ia(b._context, e.value), [
                    C,
                    b,
                    d,
                    {
                        value: e.value,
                        children: e.children,
                        __pop: hb
                    }
                ];
        }
    }
    throw Error("Unsupported Server Component type: " + Ya(b));
}
function jb(a, b) {
    var d = a.pingedTasks;
    d.push(b);
    1 === d.length && (a.flushScheduled = null !== a.destination, setTimeout(function() {
        return mb(a);
    }, 0));
}
function gb(a, b, d, c) {
    var e = {
        id: a.nextChunkId++,
        status: 0,
        model: b,
        context: d,
        ping: function() {
            return jb(a, e);
        },
        thenableState: null
    };
    c.add(e);
    return e;
}
function T(a) {
    return "$" + a.toString(16);
}
function nb(a, b, d, c) {
    var e = c.$$async ? c.$$id + "#async" : c.$$id, f = a.writtenClientReferences, g = f.get(e);
    if (void 0 !== g) return b[0] === C && "1" === d ? "$L" + g.toString(16) : T(g);
    try {
        var k = a.bundlerConfig, h = c.$$id;
        g = "";
        var r = k[h];
        if (r) g = r.name;
        else {
            var y = h.lastIndexOf("#");
            -1 !== y && (g = h.slice(y + 1), r = k[h.slice(0, y)]);
            if (!r) throw Error('Could not find the module "' + h + '" in the React Client Manifest. This is probably a bug in the React Server Components bundler.');
        }
        var z = {
            id: r.id,
            chunks: r.chunks,
            name: g,
            async: !!c.$$async
        };
        a.pendingChunks++;
        var A = a.nextChunkId++, oa = N(z), B = A.toString(16) + ":I" + oa + "\n";
        var Fb = p.encode(B);
        a.completedImportChunks.push(Fb);
        f.set(e, A);
        return b[0] === C && "1" === d ? "$L" + A.toString(16) : T(A);
    } catch (Gb) {
        return a.pendingChunks++, b = a.nextChunkId++, d = P(a, Gb), Q(a, b, d), T(b);
    }
}
function ob(a, b) {
    a.pendingChunks++;
    var d = a.nextChunkId++;
    b = pb(a, d, b);
    a.completedRegularChunks.push(b);
    return d;
}
function eb(a, b, d, c) {
    switch(c){
        case C:
            return "$";
    }
    for(; "object" === typeof c && null !== c && (c.$$typeof === C || c.$$typeof === D);)try {
        switch(c.$$typeof){
            case C:
                var e = c;
                c = S(a, e.type, e.key, e.ref, e.props, null);
                break;
            case D:
                var f = c._init;
                c = f(c._payload);
        }
    } catch (g) {
        d = g === Ja ? Ma() : g;
        if ("object" === typeof d && null !== d && "function" === typeof d.then) return a.pendingChunks++, a = gb(a, c, E, a.abortableTasks), c = a.ping, d.then(c, c), a.thenableState = Na(), "$L" + a.id.toString(16);
        a.pendingChunks++;
        c = a.nextChunkId++;
        d = P(a, d);
        Q(a, c, d);
        return "$L" + c.toString(16);
    }
    if (null === c) return null;
    if ("object" === typeof c) {
        if (c.$$typeof === q) return nb(a, b, d, c);
        if ("function" === typeof c.then) return "$@" + ib(a, c).toString(16);
        if (c.$$typeof === ua) return c = c._context._globalName, b = a.writtenProviders, d = b.get(d), void 0 === d && (a.pendingChunks++, d = a.nextChunkId++, b.set(c, d), c = qb(a, d, "$P" + c), a.completedRegularChunks.push(c)), T(d);
        if (c === hb) {
            a = E;
            if (null === a) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
            c = a.parentValue;
            a.context._currentValue = c === Aa ? a.context._defaultValue : c;
            E = a.parent;
            return;
        }
        return c instanceof Map ? "$Q" + ob(a, Array.from(c)).toString(16) : c instanceof Set ? "$W" + ob(a, Array.from(c)).toString(16) : !Wa(c) && (null === c || "object" !== typeof c ? a = null : (a = Ca && c[Ca] || c["@@iterator"], a = "function" === typeof a ? a : null), a) ? Array.from(c) : c;
    }
    if ("string" === typeof c) {
        if ("Z" === c[c.length - 1] && b[d] instanceof Date) return "$D" + c;
        if (1024 <= c.length) return a.pendingChunks += 2, d = a.nextChunkId++, c = p.encode(c), b = c.byteLength, b = d.toString(16) + ":T" + b.toString(16) + ",", b = p.encode(b), a.completedRegularChunks.push(b, c), T(d);
        a = "$" === c[0] ? "$" + c : c;
        return a;
    }
    if ("boolean" === typeof c) return c;
    if ("number" === typeof c) return a = c, Number.isFinite(a) ? 0 === a && -Infinity === 1 / a ? "$-0" : a : Infinity === a ? "$Infinity" : -Infinity === a ? "$-Infinity" : "$NaN";
    if ("undefined" === typeof c) return "$undefined";
    if ("function" === typeof c) {
        if (c.$$typeof === q) return nb(a, b, d, c);
        if (c.$$typeof === t) return d = a.writtenServerReferences, b = d.get(c), void 0 !== b ? a = "$F" + b.toString(16) : (b = c.$$bound, b = {
            id: c.$$id,
            bound: b ? Promise.resolve(b) : null
        }, a = ob(a, b), d.set(c, a), a = "$F" + a.toString(16)), a;
        if (/^on[A-Z]/.test(d)) throw Error("Event handlers cannot be passed to Client Component props." + M(b, d) + "\nIf you need interactivity, consider converting part of this to a Client Component.");
        throw Error('Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server".' + M(b, d));
    }
    if ("symbol" === typeof c) {
        e = a.writtenSymbols;
        f = e.get(c);
        if (void 0 !== f) return T(f);
        f = c.description;
        if (Symbol.for(f) !== c) throw Error("Only global symbols received from Symbol.for(...) can be passed to Client Components. The symbol Symbol.for(" + (c.description + ") cannot be found among global symbols.") + M(b, d));
        a.pendingChunks++;
        d = a.nextChunkId++;
        b = qb(a, d, "$S" + f);
        a.completedImportChunks.push(b);
        e.set(c, d);
        return T(d);
    }
    if ("bigint" === typeof c) return "$n" + c.toString(10);
    throw Error("Type " + typeof c + " is not supported in Client Component props." + M(b, d));
}
function P(a, b) {
    a = a.onError;
    b = a(b);
    if (null != b && "string" !== typeof b) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof b + '" instead');
    return b || "";
}
function rb(a, b) {
    null !== a.destination ? (a.status = 2, ca(a.destination, b)) : (a.status = 1, a.fatalError = b);
}
function Q(a, b, d) {
    d = {
        digest: d
    };
    b = b.toString(16) + ":E" + N(d) + "\n";
    b = p.encode(b);
    a.completedErrorChunks.push(b);
}
function w(a, b, d) {
    var c = a.nextChunkId++;
    d = N(d);
    b = "H" + b;
    c = c.toString(16) + ":" + b;
    c = p.encode(c + d + "\n");
    a.completedHintChunks.push(c);
}
function mb(a) {
    var b = ab.current;
    ab.current = Sa;
    var d = O;
    H = O = a;
    try {
        var c = a.pingedTasks;
        a.pingedTasks = [];
        for(var e = 0; e < c.length; e++){
            var f = c[e];
            var g = a;
            if (0 === f.status) {
                Ha(f.context);
                try {
                    var k = f.model;
                    if ("object" === typeof k && null !== k && k.$$typeof === C) {
                        var h = k, r = f.thenableState;
                        f.model = k;
                        k = S(g, h.type, h.key, h.ref, h.props, r);
                        for(f.thenableState = null; "object" === typeof k && null !== k && k.$$typeof === C;)h = k, f.model = k, k = S(g, h.type, h.key, h.ref, h.props, null);
                    }
                    var y = pb(g, f.id, k);
                    g.completedRegularChunks.push(y);
                    g.abortableTasks.delete(f);
                    f.status = 1;
                } catch (B) {
                    var z = B === Ja ? Ma() : B;
                    if ("object" === typeof z && null !== z && "function" === typeof z.then) {
                        var A = f.ping;
                        z.then(A, A);
                        f.thenableState = Na();
                    } else {
                        g.abortableTasks.delete(f);
                        f.status = 4;
                        var oa = P(g, z);
                        Q(g, f.id, oa);
                    }
                }
            }
        }
        null !== a.destination && R(a, a.destination);
    } catch (B) {
        P(a, B), rb(a, B);
    } finally{
        ab.current = b, H = null, O = d;
    }
}
function R(a, b) {
    l = new Uint8Array(512);
    m = 0;
    try {
        for(var d = a.completedImportChunks, c = 0; c < d.length; c++)a.pendingChunks--, n(b, d[c]);
        d.splice(0, c);
        var e = a.completedHintChunks;
        for(c = 0; c < e.length; c++)n(b, e[c]);
        e.splice(0, c);
        var f = a.completedRegularChunks;
        for(c = 0; c < f.length; c++)a.pendingChunks--, n(b, f[c]);
        f.splice(0, c);
        var g = a.completedErrorChunks;
        for(c = 0; c < g.length; c++)a.pendingChunks--, n(b, g[c]);
        g.splice(0, c);
    } finally{
        a.flushScheduled = !1, l && 0 < m && (b.enqueue(new Uint8Array(l.buffer, 0, m)), l = null, m = 0);
    }
    0 === a.pendingChunks && b.close();
}
function sb(a) {
    a.flushScheduled = null !== a.destination;
    ra ? setTimeout(function() {
        return sa.run(a, mb, a);
    }, 0) : setTimeout(function() {
        return mb(a);
    }, 0);
}
function x(a) {
    if (!1 === a.flushScheduled && 0 === a.pingedTasks.length && null !== a.destination) {
        var b = a.destination;
        a.flushScheduled = !0;
        setTimeout(function() {
            return R(a, b);
        }, 0);
    }
}
function tb(a, b) {
    try {
        var d = a.abortableTasks;
        if (0 < d.size) {
            var c = P(a, void 0 === b ? Error("The render was aborted by the server without a reason.") : b);
            a.pendingChunks++;
            var e = a.nextChunkId++;
            Q(a, e, c);
            d.forEach(function(f) {
                f.status = 3;
                var g = T(e);
                f = qb(a, f.id, g);
                a.completedErrorChunks.push(f);
            });
            d.clear();
        }
        null !== a.destination && R(a, a.destination);
    } catch (f) {
        P(a, f), rb(a, f);
    }
}
function fb(a) {
    if (a) {
        var b = E;
        Ha(null);
        for(var d = 0; d < a.length; d++){
            var c = a[d], e = c[0];
            c = c[1];
            $a[e] || ($a[e] = aa.createServerContext(e, Aa));
            Ia($a[e], c);
        }
        a = E;
        Ha(b);
        return a;
    }
    return null;
}
function pb(a, b, d) {
    a = N(d, a.toJSON);
    b = b.toString(16) + ":" + a + "\n";
    return p.encode(b);
}
function qb(a, b, d) {
    a = N(d);
    b = b.toString(16) + ":" + a + "\n";
    return p.encode(b);
}
function ub(a, b) {
    var d = "", c = a[b];
    if (c) d = c.name;
    else {
        var e = b.lastIndexOf("#");
        -1 !== e && (d = b.slice(e + 1), c = a[b.slice(0, e)]);
        if (!c) throw Error('Could not find the module "' + b + '" in the React Server Manifest. This is probably a bug in the React Server Components bundler.');
    }
    return {
        id: c.id,
        chunks: c.chunks,
        name: d,
        async: !1
    };
}
var U = new Map;
function vb(a) {
    var b = globalThis.__next_require__(a);
    if ("function" !== typeof b.then || "fulfilled" === b.status) return null;
    b.then(function(d) {
        b.status = "fulfilled";
        b.value = d;
    }, function(d) {
        b.status = "rejected";
        b.reason = d;
    });
    return b;
}
function wb() {}
function xb(a) {
    for(var b = a.chunks, d = [], c = 0; c < b.length; c++){
        var e = b[c], f = U.get(e);
        if (void 0 === f) {
            f = globalThis.__next_chunk_load__(e);
            d.push(f);
            var g = U.set.bind(U, e, null);
            f.then(g, wb);
            U.set(e, f);
        } else null !== f && d.push(f);
    }
    return a.async ? 0 === d.length ? vb(a.id) : Promise.all(d).then(function() {
        return vb(a.id);
    }) : 0 < d.length ? Promise.all(d) : null;
}
function V(a) {
    var b = globalThis.__next_require__(a.id);
    if (a.async && "function" === typeof b.then) if ("fulfilled" === b.status) b = b.value;
    else throw b.reason;
    return "*" === a.name ? b : "" === a.name ? b.__esModule ? b.default : b : b[a.name];
}
function W(a, b, d, c) {
    this.status = a;
    this.value = b;
    this.reason = d;
    this._response = c;
}
W.prototype = Object.create(Promise.prototype);
W.prototype.then = function(a, b) {
    switch(this.status){
        case "resolved_model":
            yb(this);
    }
    switch(this.status){
        case "fulfilled":
            a(this.value);
            break;
        case "pending":
        case "blocked":
            a && (null === this.value && (this.value = []), this.value.push(a));
            b && (null === this.reason && (this.reason = []), this.reason.push(b));
            break;
        default:
            b(this.reason);
    }
};
function zb(a, b) {
    for(var d = 0; d < a.length; d++)(0, a[d])(b);
}
function Ab(a, b) {
    if ("pending" === a.status || "blocked" === a.status) {
        var d = a.reason;
        a.status = "rejected";
        a.reason = b;
        null !== d && zb(d, b);
    }
}
function Bb(a, b, d, c, e, f) {
    var g = ub(a._bundlerConfig, b);
    a = xb(g);
    if (d) d = Promise.all([
        d,
        a
    ]).then(function(k) {
        k = k[0];
        var h = V(g);
        return h.bind.apply(h, [
            null
        ].concat(k));
    });
    else if (a) d = Promise.resolve(a).then(function() {
        return V(g);
    });
    else return V(g);
    d.then(Cb(c, e, f), Db(c));
    return null;
}
var X = null, Y = null;
function yb(a) {
    var b = X, d = Y;
    X = a;
    Y = null;
    try {
        var c = JSON.parse(a.value, a._response._fromJSON);
        null !== Y && 0 < Y.deps ? (Y.value = c, a.status = "blocked", a.value = null, a.reason = null) : (a.status = "fulfilled", a.value = c);
    } catch (e) {
        a.status = "rejected", a.reason = e;
    } finally{
        X = b, Y = d;
    }
}
function Eb(a, b) {
    a._chunks.forEach(function(d) {
        "pending" === d.status && Ab(d, b);
    });
}
function Z(a, b) {
    var d = a._chunks, c = d.get(b);
    c || (c = a._formData.get(a._prefix + b), c = null != c ? new W("resolved_model", c, null, a) : new W("pending", null, null, a), d.set(b, c));
    return c;
}
function Cb(a, b, d) {
    if (Y) {
        var c = Y;
        c.deps++;
    } else c = Y = {
        deps: 1,
        value: null
    };
    return function(e) {
        b[d] = e;
        c.deps--;
        0 === c.deps && "blocked" === a.status && (e = a.value, a.status = "fulfilled", a.value = c.value, null !== e && zb(e, c.value));
    };
}
function Db(a) {
    return function(b) {
        return Ab(a, b);
    };
}
function Hb(a, b) {
    a = Z(a, b);
    "resolved_model" === a.status && yb(a);
    if ("fulfilled" !== a.status) throw a.reason;
    return a.value;
}
function Ib(a, b, d, c) {
    if ("$" === c[0]) switch(c[1]){
        case "$":
            return c.slice(1);
        case "@":
            return b = parseInt(c.slice(2), 16), Z(a, b);
        case "S":
            return Symbol.for(c.slice(2));
        case "F":
            return c = parseInt(c.slice(2), 16), c = Hb(a, c), Bb(a, c.id, c.bound, X, b, d);
        case "Q":
            return b = parseInt(c.slice(2), 16), a = Hb(a, b), new Map(a);
        case "W":
            return b = parseInt(c.slice(2), 16), a = Hb(a, b), new Set(a);
        case "K":
            b = c.slice(2);
            var e = a._prefix + b + "_", f = new FormData;
            a._formData.forEach(function(g, k) {
                k.startsWith(e) && f.append(k.slice(e.length), g);
            });
            return f;
        case "I":
            return Infinity;
        case "-":
            return "$-0" === c ? -0 : -Infinity;
        case "N":
            return NaN;
        case "u":
            return;
        case "D":
            return new Date(Date.parse(c.slice(2)));
        case "n":
            return BigInt(c.slice(2));
        default:
            c = parseInt(c.slice(1), 16);
            a = Z(a, c);
            switch(a.status){
                case "resolved_model":
                    yb(a);
            }
            switch(a.status){
                case "fulfilled":
                    return a.value;
                case "pending":
                case "blocked":
                    return c = X, a.then(Cb(c, b, d), Db(c)), null;
                default:
                    throw a.reason;
            }
    }
    return c;
}
function Jb(a, b) {
    var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : new FormData, c = new Map, e = {
        _bundlerConfig: a,
        _prefix: b,
        _formData: d,
        _chunks: c,
        _fromJSON: function(f, g) {
            return "string" === typeof g ? Ib(e, this, f, g) : g;
        }
    };
    return e;
}
function Kb(a) {
    Eb(a, Error("Connection closed."));
}
function Lb(a, b, d) {
    var c = ub(a, b);
    a = xb(c);
    return d ? Promise.all([
        d,
        a
    ]).then(function(e) {
        e = e[0];
        var f = V(c);
        return f.bind.apply(f, [
            null
        ].concat(e));
    }) : a ? Promise.resolve(a).then(function() {
        return V(c);
    }) : Promise.resolve(V(c));
}
exports.createClientModuleProxy = function(a) {
    a = u({}, a, !1);
    return new Proxy(a, ja);
};
exports.decodeAction = function(a, b) {
    var d = new FormData, c = null;
    a.forEach(function(e, f) {
        if (f.startsWith("$ACTION_")) if (f.startsWith("$ACTION_REF_")) {
            e = "$ACTION_" + f.slice(12) + ":";
            e = Jb(b, e, a);
            Kb(e);
            e = Z(e, 0);
            e.then(function() {});
            if ("fulfilled" !== e.status) throw e.reason;
            e = e.value;
            c = Lb(b, e.id, e.bound);
        } else f.startsWith("$ACTION_ID_") && (e = f.slice(11), c = Lb(b, e, null));
        else d.append(f, e);
    });
    return null === c ? null : c.then(function(e) {
        return e.bind(null, d);
    });
};
exports.decodeReply = function(a, b) {
    if ("string" === typeof a) {
        var d = new FormData;
        d.append("0", a);
        a = d;
    }
    a = Jb(b, "", a);
    Kb(a);
    return Z(a, 0);
};
exports.registerClientReference = function(a, b, d) {
    return u(a, b + "#" + d, !1);
};
exports.registerServerReference = function(a, b, d) {
    return Object.defineProperties(a, {
        $$typeof: {
            value: t
        },
        $$id: {
            value: null === d ? b : b + "#" + d
        },
        $$bound: {
            value: null
        },
        bind: {
            value: fa
        }
    });
};
exports.renderToReadableStream = function(a, b, d) {
    var c = db(a, b, d ? d.onError : void 0, d ? d.context : void 0, d ? d.identifierPrefix : void 0);
    if (d && d.signal) {
        var e = d.signal;
        if (e.aborted) tb(c, e.reason);
        else {
            var f = function() {
                tb(c, e.reason);
                e.removeEventListener("abort", f);
            };
            e.addEventListener("abort", f);
        }
    }
    return new ReadableStream({
        type: "bytes",
        start: function() {
            sb(c);
        },
        pull: function(g) {
            if (1 === c.status) c.status = 2, ca(g, c.fatalError);
            else if (2 !== c.status && null === c.destination) {
                c.destination = g;
                try {
                    R(c, g);
                } catch (k) {
                    P(c, k), rb(c, k);
                }
            }
        },
        cancel: function() {}
    }, {
        highWaterMark: 0
    });
};


/***/ }),

/***/ 9642:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
    module.exports = __webpack_require__(9200);
} else {}


/***/ }),

/***/ 9446:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react.shared-subset.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var m = Object.assign, n = {
    current: null
};
function p() {
    return new Map;
}
if ("function" === typeof fetch) {
    var q = fetch, r = function(a, b) {
        var d = n.current;
        if (!d || b && b.signal && b.signal !== d.getCacheSignal()) return q(a, b);
        if ("string" !== typeof a || b) {
            var c = "string" === typeof a || a instanceof URL ? new Request(a, b) : a;
            if ("GET" !== c.method && "HEAD" !== c.method || c.keepalive) return q(a, b);
            var e = JSON.stringify([
                c.method,
                Array.from(c.headers.entries()),
                c.mode,
                c.redirect,
                c.credentials,
                c.referrer,
                c.referrerPolicy,
                c.integrity
            ]);
            c = c.url;
        } else e = '["GET",[],null,"follow",null,null,null,null]', c = a;
        var f = d.getCacheForType(p);
        d = f.get(c);
        if (void 0 === d) a = q(a, b), f.set(c, [
            e,
            a
        ]);
        else {
            c = 0;
            for(f = d.length; c < f; c += 2){
                var h = d[c + 1];
                if (d[c] === e) return a = h, a.then(function(g) {
                    return g.clone();
                });
            }
            a = q(a, b);
            d.push(e, a);
        }
        return a.then(function(g) {
            return g.clone();
        });
    };
    m(r, q);
    try {
        fetch = r;
    } catch (a) {
        try {
            globalThis.fetch = r;
        } catch (b) {
            console.warn("React was unable to patch the fetch() function in this environment. Suspensey APIs might not work correctly as a result.");
        }
    }
}
var t = Symbol.for("react.element"), u = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), z = Symbol.for("react.server_context"), A = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), C = Symbol.for("react.memo"), aa = Symbol.for("react.lazy"), D = Symbol.for("react.default_value"), E = Symbol.iterator;
function ba(a) {
    if (null === a || "object" !== typeof a) return null;
    a = E && a[E] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
function F(a) {
    for(var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, d = 1; d < arguments.length; d++)b += "&args[]=" + encodeURIComponent(arguments[d]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var G = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}, H = {};
function I(a, b, d) {
    this.props = a;
    this.context = b;
    this.refs = H;
    this.updater = d || G;
}
I.prototype.isReactComponent = {};
I.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(F(85));
    this.updater.enqueueSetState(this, a, b, "setState");
};
I.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function J() {}
J.prototype = I.prototype;
function K(a, b, d) {
    this.props = a;
    this.context = b;
    this.refs = H;
    this.updater = d || G;
}
var L = K.prototype = new J;
L.constructor = K;
m(L, I.prototype);
L.isPureReactComponent = !0;
var M = Array.isArray, N = Object.prototype.hasOwnProperty, O = {
    current: null
}, P = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function ca(a, b) {
    return {
        $$typeof: t,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
    };
}
function Q(a) {
    return "object" === typeof a && null !== a && a.$$typeof === t;
}
function escape(a) {
    var b = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function(d) {
        return b[d];
    });
}
var R = /\/+/g;
function S(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function T(a, b, d, c, e) {
    var f = typeof a;
    if ("undefined" === f || "boolean" === f) a = null;
    var h = !1;
    if (null === a) h = !0;
    else switch(f){
        case "string":
        case "number":
            h = !0;
            break;
        case "object":
            switch(a.$$typeof){
                case t:
                case u:
                    h = !0;
            }
    }
    if (h) return h = a, e = e(h), a = "" === c ? "." + S(h, 0) : c, M(e) ? (d = "", null != a && (d = a.replace(R, "$&/") + "/"), T(e, b, d, "", function(l) {
        return l;
    })) : null != e && (Q(e) && (e = ca(e, d + (!e.key || h && h.key === e.key ? "" : ("" + e.key).replace(R, "$&/") + "/") + a)), b.push(e)), 1;
    h = 0;
    c = "" === c ? "." : c + ":";
    if (M(a)) for(var g = 0; g < a.length; g++){
        f = a[g];
        var k = c + S(f, g);
        h += T(f, b, d, k, e);
    }
    else if (k = ba(a), "function" === typeof k) for(a = k.call(a), g = 0; !(f = a.next()).done;)f = f.value, k = c + S(f, g++), h += T(f, b, d, k, e);
    else if ("object" === f) throw b = String(a), Error(F(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
    return h;
}
function U(a, b, d) {
    if (null == a) return a;
    var c = [], e = 0;
    T(a, c, "", "", function(f) {
        return b.call(d, f, e++);
    });
    return c;
}
function da(a) {
    if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(d) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = d;
        }, function(d) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = d;
        });
        -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
}
function ea() {
    return new WeakMap;
}
function V() {
    return {
        s: 0,
        v: void 0,
        o: null,
        p: null
    };
}
var W = {
    current: null
}, X = {
    transition: null
}, Y = {
    ReactCurrentDispatcher: W,
    ReactCurrentCache: n,
    ReactCurrentBatchConfig: X,
    ReactCurrentOwner: O,
    ContextRegistry: {}
}, Z = Y.ContextRegistry;
exports.Children = {
    map: U,
    forEach: function(a, b, d) {
        U(a, function() {
            b.apply(this, arguments);
        }, d);
    },
    count: function(a) {
        var b = 0;
        U(a, function() {
            b++;
        });
        return b;
    },
    toArray: function(a) {
        return U(a, function(b) {
            return b;
        }) || [];
    },
    only: function(a) {
        if (!Q(a)) throw Error(F(143));
        return a;
    }
};
exports.Fragment = v;
exports.Profiler = x;
exports.StrictMode = w;
exports.Suspense = B;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y;
exports.cache = function(a) {
    return function() {
        var b = n.current;
        if (!b) return a.apply(null, arguments);
        var d = b.getCacheForType(ea);
        b = d.get(a);
        void 0 === b && (b = V(), d.set(a, b));
        d = 0;
        for(var c = arguments.length; d < c; d++){
            var e = arguments[d];
            if ("function" === typeof e || "object" === typeof e && null !== e) {
                var f = b.o;
                null === f && (b.o = f = new WeakMap);
                b = f.get(e);
                void 0 === b && (b = V(), f.set(e, b));
            } else f = b.p, null === f && (b.p = f = new Map), b = f.get(e), void 0 === b && (b = V(), f.set(e, b));
        }
        if (1 === b.s) return b.v;
        if (2 === b.s) throw b.v;
        try {
            var h = a.apply(null, arguments);
            d = b;
            d.s = 1;
            return d.v = h;
        } catch (g) {
            throw h = b, h.s = 2, h.v = g, g;
        }
    };
};
exports.cloneElement = function(a, b, d) {
    if (null === a || void 0 === a) throw Error(F(267, a));
    var c = m({}, a.props), e = a.key, f = a.ref, h = a._owner;
    if (null != b) {
        void 0 !== b.ref && (f = b.ref, h = O.current);
        void 0 !== b.key && (e = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for(k in b)N.call(b, k) && !P.hasOwnProperty(k) && (c[k] = void 0 === b[k] && void 0 !== g ? g[k] : b[k]);
    }
    var k = arguments.length - 2;
    if (1 === k) c.children = d;
    else if (1 < k) {
        g = Array(k);
        for(var l = 0; l < k; l++)g[l] = arguments[l + 2];
        c.children = g;
    }
    return {
        $$typeof: t,
        type: a.type,
        key: e,
        ref: f,
        props: c,
        _owner: h
    };
};
exports.createElement = function(a, b, d) {
    var c, e = {}, f = null, h = null;
    if (null != b) for(c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (f = "" + b.key), b)N.call(b, c) && !P.hasOwnProperty(c) && (e[c] = b[c]);
    var g = arguments.length - 2;
    if (1 === g) e.children = d;
    else if (1 < g) {
        for(var k = Array(g), l = 0; l < g; l++)k[l] = arguments[l + 2];
        e.children = k;
    }
    if (a && a.defaultProps) for(c in g = a.defaultProps, g)void 0 === e[c] && (e[c] = g[c]);
    return {
        $$typeof: t,
        type: a,
        key: f,
        ref: h,
        props: e,
        _owner: O.current
    };
};
exports.createRef = function() {
    return {
        current: null
    };
};
exports.createServerContext = function(a, b) {
    var d = !0;
    if (!Z[a]) {
        d = !1;
        var c = {
            $$typeof: z,
            _currentValue: b,
            _currentValue2: b,
            _defaultValue: b,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _globalName: a
        };
        c.Provider = {
            $$typeof: y,
            _context: c
        };
        Z[a] = c;
    }
    c = Z[a];
    if (c._defaultValue === D) c._defaultValue = b, c._currentValue === D && (c._currentValue = b), c._currentValue2 === D && (c._currentValue2 = b);
    else if (d) throw Error(F(429, a));
    return c;
};
exports.forwardRef = function(a) {
    return {
        $$typeof: A,
        render: a
    };
};
exports.isValidElement = Q;
exports.lazy = function(a) {
    return {
        $$typeof: aa,
        _payload: {
            _status: -1,
            _result: a
        },
        _init: da
    };
};
exports.memo = function(a, b) {
    return {
        $$typeof: C,
        type: a,
        compare: void 0 === b ? null : b
    };
};
exports.startTransition = function(a) {
    var b = X.transition;
    X.transition = {};
    try {
        a();
    } finally{
        X.transition = b;
    }
};
exports.use = function(a) {
    return W.current.use(a);
};
exports.useCallback = function(a, b) {
    return W.current.useCallback(a, b);
};
exports.useContext = function(a) {
    return W.current.useContext(a);
};
exports.useDebugValue = function() {};
exports.useId = function() {
    return W.current.useId();
};
exports.useMemo = function(a, b) {
    return W.current.useMemo(a, b);
};
exports.version = "18.3.0-canary-9377e1010-20230712";


/***/ }),

/***/ 2947:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
    module.exports = __webpack_require__(9446);
} else {}


/***/ }),

/***/ 2502:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    AppRouter: function() {
        return AppRouter;
    },
    LayoutRouter: function() {
        return LayoutRouter;
    },
    RenderFromTemplateContext: function() {
        return RenderFromTemplateContext;
    },
    staticGenerationAsyncStorage: function() {
        return staticGenerationAsyncStorage;
    },
    requestAsyncStorage: function() {
        return requestAsyncStorage;
    },
    actionAsyncStorage: function() {
        return actionAsyncStorage;
    },
    staticGenerationBailout: function() {
        return staticGenerationBailout;
    },
    createSearchParamsBailoutProxy: function() {
        return createSearchParamsBailoutProxy;
    },
    serverHooks: function() {
        return serverHooks;
    },
    renderToReadableStream: function() {
        return renderToReadableStream;
    },
    decodeReply: function() {
        return decodeReply;
    },
    decodeAction: function() {
        return decodeAction;
    },
    preloadStyle: function() {
        return preloadStyle;
    },
    preloadFont: function() {
        return preloadFont;
    },
    preconnect: function() {
        return preconnect;
    },
    StaticGenerationSearchParamsBailoutProvider: function() {
        return StaticGenerationSearchParamsBailoutProvider;
    }
});
const { default: AppRouter } = __webpack_require__(8225);
const { default: LayoutRouter } = __webpack_require__(7149);
const { default: RenderFromTemplateContext } = __webpack_require__(9278);
const { staticGenerationAsyncStorage } = __webpack_require__(3539);
const { requestAsyncStorage } = __webpack_require__(1715);
const { actionAsyncStorage } = __webpack_require__(4876);
const { staticGenerationBailout } = __webpack_require__(6164);
const { default: StaticGenerationSearchParamsBailoutProvider } = __webpack_require__(6345);
const { createSearchParamsBailoutProxy } = __webpack_require__(9444);
const serverHooks = __webpack_require__(1651);
const { renderToReadableStream, decodeReply, decodeAction } = __webpack_require__(9642);
const { preloadStyle, preloadFont, preconnect } = __webpack_require__(6167); //# sourceMappingURL=entry-base.js.map


/***/ }),

/***/ 6167:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*

Files in the rsc directory are meant to be packaged as part of the RSC graph using next-app-loader.

*/ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    preloadStyle: function() {
        return preloadStyle;
    },
    preloadFont: function() {
        return preloadFont;
    },
    preconnect: function() {
        return preconnect;
    }
});
const _reactdom = /*#__PURE__*/ _interop_require_default(__webpack_require__(2060));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const stylePreloadOptions = {
    as: "style"
};
function preloadStyle(href) {
    _reactdom.default.preload(href, stylePreloadOptions);
}
function preloadFont(href, type) {
    _reactdom.default.preload(href, {
        as: "font",
        type
    });
}
function preconnect(href, crossOrigin) {
    if (typeof crossOrigin === "string") {
        _reactdom.default.preconnect(href, {
            crossOrigin
        });
    } else {
        _reactdom.default.preconnect(href);
    }
} //# sourceMappingURL=preloads.js.map


/***/ }),

/***/ 7262:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    AppPageRouteModule: function() {
        return AppPageRouteModule;
    },
    default: function() {
        return _default;
    }
});
const _apprender = __webpack_require__(5868);
const _routemodule = __webpack_require__(5281);
class AppPageRouteModule extends _routemodule.RouteModule {
    handle() {
        throw new Error("Method not implemented.");
    }
    render(req, res, context) {
        return (0, _apprender.renderToHTMLOrFlight)(req, res, context.page, context.query, context.renderOpts);
    }
}
const _default = AppPageRouteModule; //# sourceMappingURL=module.js.map


/***/ }),

/***/ 4876:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "actionAsyncStorage", ({
    enumerable: true,
    get: function() {
        return actionAsyncStorage;
    }
}));
const _asynclocalstorage = __webpack_require__(9775);
const actionAsyncStorage = (0, _asynclocalstorage.createAsyncLocalStorage)();
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=action-async-storage.js.map


/***/ }),

/***/ 9775:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createAsyncLocalStorage", ({
    enumerable: true,
    get: function() {
        return createAsyncLocalStorage;
    }
}));
const sharedAsyncLocalStorageNotAvailableError = new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
class FakeAsyncLocalStorage {
    disable() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    getStore() {
        // This fake implementation of AsyncLocalStorage always returns `undefined`.
        return undefined;
    }
    run() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    exit() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    enterWith() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
}
const maybeGlobalAsyncLocalStorage = globalThis.AsyncLocalStorage;
function createAsyncLocalStorage() {
    if (maybeGlobalAsyncLocalStorage) {
        return new maybeGlobalAsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=async-local-storage.js.map


/***/ }),

/***/ 1715:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "requestAsyncStorage", ({
    enumerable: true,
    get: function() {
        return requestAsyncStorage;
    }
}));
const _asynclocalstorage = __webpack_require__(9775);
const requestAsyncStorage = (0, _asynclocalstorage.createAsyncLocalStorage)();
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-async-storage.js.map


/***/ }),

/***/ 3539:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "staticGenerationAsyncStorage", ({
    enumerable: true,
    get: function() {
        return staticGenerationAsyncStorage;
    }
}));
const _asynclocalstorage = __webpack_require__(9775);
const staticGenerationAsyncStorage = (0, _asynclocalstorage.createAsyncLocalStorage)();
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-async-storage.js.map


/***/ }),

/***/ 5048:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const os = __webpack_require__(2037);
const tty = __webpack_require__(6224);
const hasFlag = __webpack_require__(6461);

const {env} = process;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false') ||
	hasFlag('color=never')) {
	forceColor = 0;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = 1;
}

if ('FORCE_COLOR' in env) {
	if (env.FORCE_COLOR === 'true') {
		forceColor = 1;
	} else if (env.FORCE_COLOR === 'false') {
		forceColor = 0;
	} else {
		forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
	}
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(haveStream, streamIsTTY) {
	if (forceColor === 0) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (haveStream && !streamIsTTY && forceColor === undefined) {
		return 0;
	}

	const min = forceColor || 0;

	if (env.TERM === 'dumb') {
		return min;
	}

	if (process.platform === 'win32') {
		// Windows 10 build 10586 is the first Windows release that supports 256 colors.
		// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream, stream && stream.isTTY);
	return translateLevel(level);
}

module.exports = {
	supportsColor: getSupportLevel,
	stdout: translateLevel(supportsColor(true, tty.isatty(1))),
	stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};


/***/ }),

/***/ 8324:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports._ = exports._class_private_field_loose_base = _class_private_field_loose_base;
function _class_private_field_loose_base(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
        throw new TypeError("attempted to use private field on non-instance");
    }

    return receiver;
}


/***/ }),

/***/ 4567:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var id = 0;

exports._ = exports._class_private_field_loose_key = _class_private_field_loose_key;
function _class_private_field_loose_key(name) {
    return "__private_" + id++ + "_" + name;
}


/***/ }),

/***/ 2147:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports._ = exports._interop_require_default = _interop_require_default;
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


/***/ }),

/***/ 4009:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;

    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();

    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
exports._ = exports._interop_require_wildcard = _interop_require_wildcard;
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };

    var cache = _getRequireWildcardCache(nodeInterop);

    if (cache && cache.has(obj)) return cache.get(obj);

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }

    newObj.default = obj;

    if (cache) cache.set(obj, newObj);

    return newObj;
}


/***/ }),

/***/ 572:
/***/ ((module) => {

"use strict";

/***/ })

};
;