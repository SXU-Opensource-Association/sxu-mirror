;
(function () {
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
  function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
  function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
  function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  System.register(['./mirrorList-legacy-CgUg-Xjk.js', './_virtual_jekyll-data-legacy--vWzKqW1.js', './default-legacy-BBTX4LHI.js', './UpdateField-legacy-6rXvgGjA.js', './main-page-legacy-Bhbx9Ryp.js'], function (exports, module) {
    'use strict';

    var _export_sfc, ref, onMounted, nextTick, computed, createElementBlock, createBaseVNode, Fragment, renderList, toDisplayString, createCommentVNode, createStaticVNode, openBlock, normalizeClass, useModel, onBeforeUnmount, withDirectives, vModelText, processingHandlers, useMirrorList, createVNode, createTextVNode, pushScopeId, popScopeId, createApp, ISOINFO_JSON_PATH, options, getAugmentedNamespace, commonjsGlobal, requireSelectorEngine, requireConfig, requireUtil, requireBaseComponent, requireEventHandler, requireManipulator, getDefaultExportFromCjs, __unplugin_components_0;
    return {
      setters: [function (module) {
        _export_sfc = module._;
        ref = module.r;
        onMounted = module.o;
        nextTick = module.n;
        computed = module.c;
        createElementBlock = module.a;
        createBaseVNode = module.b;
        Fragment = module.F;
        renderList = module.d;
        toDisplayString = module.t;
        createCommentVNode = module.e;
        createStaticVNode = module.f;
        openBlock = module.g;
        normalizeClass = module.h;
        useModel = module.u;
        onBeforeUnmount = module.i;
        withDirectives = module.w;
        vModelText = module.v;
        processingHandlers = module.p;
        useMirrorList = module.j;
        createVNode = module.k;
        createTextVNode = module.l;
        pushScopeId = module.m;
        popScopeId = module.q;
        createApp = module.s;
      }, function (module) {
        ISOINFO_JSON_PATH = module.I;
        options = module.o;
      }, function (module) {
        getAugmentedNamespace = module.g;
        commonjsGlobal = module.c;
        requireSelectorEngine = module.r;
        requireConfig = module.a;
        requireUtil = module.b;
        requireBaseComponent = module.d;
        requireEventHandler = module.e;
        requireManipulator = module.f;
        getDefaultExportFromCjs = module.h;
      }, function (module) {
        __unplugin_components_0 = module._;
      }, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = ".nav-tabs[data-v-8755a5bf] {\n  margin-bottom: 0.5em;\n}\ninput[type=\"search\"][data-v-260108a9] {\n  line-height: 18px;\n  padding: 8px;\n  border: 1px solid #e3e3e3;\n  max-width: 240px;\n  height: 30px;\n  font-size: 16px;\n  background: transparent;\n}\n/*\n *  Usage:\n *\n      <div class=\"sk-wave\">\n        <div class=\"sk-rect sk-rect1\"></div>\n        <div class=\"sk-rect sk-rect2\"></div>\n        <div class=\"sk-rect sk-rect3\"></div>\n        <div class=\"sk-rect sk-rect4\"></div>\n        <div class=\"sk-rect sk-rect5\"></div>\n      </div>\n *\n */\n.sk-wave[data-v-10cb6052] {\n  margin: 40px auto;\n  width: 50px;\n  height: 40px;\n  text-align: center;\n  font-size: 10px;\n}\n.sk-wave .sk-rect[data-v-10cb6052] {\n  background-color: #333;\n  height: 100%;\n  width: 6px;\n  display: inline-block;\n  animation: sk-waveStretchDelay-10cb6052 1.2s infinite ease-in-out;\n}\n@media (prefers-color-scheme: dark) {\n.sk-wave .sk-rect[data-v-10cb6052] {\n    background-color: rgba(222, 226, 230, 0.75);\n}\n}\n.sk-wave .sk-rect[data-v-10cb6052]:not(:last-child) {\n  margin-right: 0.3em;\n}\n.sk-wave .sk-rect1[data-v-10cb6052] {\n  animation-delay: -1.2s;\n}\n.sk-wave .sk-rect2[data-v-10cb6052] {\n  animation-delay: -1.1s;\n}\n.sk-wave .sk-rect3[data-v-10cb6052] {\n  animation-delay: -1s;\n}\n.sk-wave .sk-rect4[data-v-10cb6052] {\n  animation-delay: -0.9s;\n}\n.sk-wave .sk-rect5[data-v-10cb6052] {\n  animation-delay: -0.8s;\n}\n@keyframes sk-waveStretchDelay-10cb6052 {\n0%, 40%, 100% {\n    transform: scaleY(0.4);\n}\n20% {\n    transform: scaleY(1);\n}\n}\n.status-fail[data-v-10cb6052],\n.status-failed[data-v-10cb6052],\n.status-paused[data-v-10cb6052] {\n  --bs-table-bg: #fff4e3;\n  --bs-table-hover-bg: var(--bs-table-bg);\n}\n@media (prefers-color-scheme: dark) {\n.status-fail[data-v-10cb6052],\n  .status-failed[data-v-10cb6052],\n  .status-paused[data-v-10cb6052] {\n    --bs-table-bg: #524841;\n}\n}\n.status-syncing[data-v-10cb6052] {\n  --bs-table-bg: #e3fffd;\n  --bs-table-hover-bg: var(--bs-table-bg);\n}\n@media (prefers-color-scheme: dark) {\n.status-syncing[data-v-10cb6052] {\n    --bs-table-bg: #254059;\n}\n}\n.badge.badge-new[data-v-10cb6052] {\n  padding: 0.1em 0.2em;\n  vertical-align: 40%;\n  text-shadow: 1px 1px #888;\n  margin-right: 4px;\n  background-color: #3aa0e6;\n}\na.mirror-item-label[data-v-10cb6052]::after {\n  content: \" \";\n}\ntbody[data-v-10cb6052] {\n  font-size: 12pt;\n}\ntbody td[data-v-10cb6052] {\n  padding: 4px 8px;\n  border-style: none;\n}\n#mirror-title[data-v-10cb6052] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}";
        document.head.appendChild(__vite_style__);

        /* unplugin-vue-components disabled */
        var _sfc_main$3 = {};
        function _sfc_render(_ctx, _cache) {
          return null;
        }
        var Empty = /*#__PURE__*/_export_sfc(_sfc_main$3, [['render', _sfc_render]]);

        /* unplugin-vue-components disabled */

        var _hoisted_1$1 = {
          "class": "modal-dialog modal-lg",
          role: "document"
        };
        var _hoisted_2$1 = {
          "class": "modal-content"
        };
        var _hoisted_3$1 = /*#__PURE__*/createStaticVNode("<div class=\"modal-header\" data-v-8755a5bf><button type=\"button\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"close d-none d-bs3-block\" data-v-8755a5bf><span aria-hidden=\"true\" data-v-8755a5bf>×</span></button><h4 class=\"modal-title\" id=\"isoModalLabel\" data-v-8755a5bf>获取安装镜像</h4><button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\" data-v-8755a5bf></button></div>", 1);
        var _hoisted_4$1 = {
          "class": "modal-body"
        };
        var _hoisted_5$1 = {
          key: 0,
          "class": "row"
        };
        var _hoisted_6$1 = {
          "class": "col-lg-12"
        };
        var _hoisted_7$1 = {
          "class": "nav nav-tabs"
        };
        var _hoisted_8$1 = {
          "class": "nav-item",
          role: "presentation"
        };
        var _hoisted_9$1 = ["onClick"];
        var _hoisted_10$1 = {
          "class": "col-lg-3"
        };
        var _hoisted_11$1 = {
          "class": "nav nav-pills flex-column"
        };
        var _hoisted_12$1 = {
          "class": "nav-item"
        };
        var _hoisted_13$1 = ["onClick"];
        var _hoisted_14$1 = {
          "class": "col-lg-9"
        };
        var _hoisted_15$1 = ["href"];
        var _sfc_main$2 = {
          __name: 'IsoModal',
          emits: ["ready"],
          setup: function setup(__props, _ref6) {
            var __emit = _ref6.emit;
            var distroList = ref([]);
            var selected = ref({});
            var curCategory = ref("");
            var availableCategories = ref([]);
            var knownCategories = {
              os: "操作系统",
              app: "应用软件",
              font: "字体"
            };
            var emit = __emit;
            fetch(ISOINFO_JSON_PATH).then(function (res) {
              return res.json();
            }).then(function (isoinfo) {
              distroList.value = isoinfo;
              availableCategories.value = _toConsumableArray(new Set(isoinfo.map(function (x) {
                return x.category;
              })));
              curCategory.value = availableCategories.value[0];
              selected.value = curDistroList.value[0];
            });
            onMounted( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return nextTick();
                  case 2:
                    emit("ready");
                  case 3:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            })));
            var curDistroList = computed(function () {
              return distroList.value.filter(function (x) {
                return x.category === curCategory.value;
              }).sort(function (a, b) {
                return a.distro.localeCompare(b.distro);
              });
            });
            var switchDistro = function switchDistro(distro) {
              selected.value = distro;
            };
            var switchCategory = function switchCategory(category) {
              curCategory.value = category;
              selected.value = curDistroList.value[0];
            };
            return function (_ctx, _cache) {
              return openBlock(), createElementBlock("div", _hoisted_1$1, [createBaseVNode("div", _hoisted_2$1, [_hoisted_3$1, createBaseVNode("div", _hoisted_4$1, [availableCategories.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_5$1, [createBaseVNode("div", _hoisted_6$1, [createBaseVNode("ul", _hoisted_7$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(availableCategories.value, function (cat) {
                return openBlock(), createElementBlock("li", _hoisted_8$1, [createBaseVNode("a", {
                  "class": normalizeClass([curCategory.value === cat ? 'active' : '', 'nav-link']),
                  onClick: function onClick($event) {
                    return switchCategory(cat);
                  },
                  href: "#"
                }, toDisplayString(knownCategories[cat] ? knownCategories[cat] : cat), 11, _hoisted_9$1)]);
              }), 256))])]), createBaseVNode("div", _hoisted_10$1, [createBaseVNode("ul", _hoisted_11$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(curDistroList.value, function (distro) {
                return openBlock(), createElementBlock("li", _hoisted_12$1, [createBaseVNode("a", {
                  href: "#",
                  onClick: function onClick($event) {
                    return switchDistro(distro);
                  },
                  "class": normalizeClass([selected.value.distro == distro.distro ? 'active' : '', 'nav-link'])
                }, toDisplayString(distro.distro), 11, _hoisted_13$1)]);
              }), 256))])]), createBaseVNode("div", _hoisted_14$1, [createBaseVNode("h3", null, toDisplayString(selected.value.distro), 1), createBaseVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(selected.value.urls, function (url) {
                return openBlock(), createElementBlock("li", null, [createBaseVNode("a", {
                  href: url.url
                }, toDisplayString(url.name), 9, _hoisted_15$1)]);
              }), 256))])])])) : createCommentVNode("", true)])])]);
            };
          }
        };
        var IsoModal = /*#__PURE__*/_export_sfc(_sfc_main$2, [['__scopeId', "data-v-8755a5bf"]]);
        var HelpPages = {
          "clickhouse": "/help/clickhouse/",
          "chromiumos": "/help/chromiumos/",
          "centos-altarch": "/help/centos-altarch/",
          "xanmod": "/help/xanmod/",
          "wine-builds": "/help/wine-builds/",
          "voidlinux": "/help/voidlinux/",
          "virtualbox": "/help/virtualbox/",
          "ubuntu": "/help/ubuntu/",
          "ubuntu-ports": "/help/ubuntu-ports/",
          "ubuntu-cloud-images": "/help/ubuntu-cloud-images/",
          "tlpretest": "/help/tlpretest/",
          "termux": "/help/termux/",
          "stackage": "/help/stackage/",
          "solus": "/help/solus/",
          "rustup": "/help/rustup/",
          "rudder": "/help/rudder/",
          "rubygems": "/help/rubygems/",
          "rpmfusion": "/help/rpmfusion/",
          "rosdistro": "/help/rosdistro/",
          "ros2": "/help/ros2/",
          "ros": "/help/ros/",
          "repo-ck": "/help/repo-ck/",
          "raspbian": "/help/raspbian/",
          "raspberrypi": "/help/raspberrypi/",
          "qubesos": "/help/qubesos/",
          "qt": "/help/qt/",
          "qemu.git": "/help/qemu.git/",
          "pypi": "/help/pypi/",
          "pybombs": "/help/pybombs/",
          "proxmox": "/help/proxmox/",
          "postmarketOS": "/help/postmarketOS/",
          "pkgsrc": "/help/pkgsrc/",
          "pkgsrc.git": "/help/pkgsrc.git/",
          "openwrt": "/help/openwrt/",
          "opensuse": "/help/opensuse/",
          "ohmyzsh.git": "/help/ohmyzsh.git/",
          "nodejs-release": "/help/nodejs-release/",
          "nixpkgs.git": "/help/nixpkgs.git/",
          "nix": "/help/nix/",
          "nix-channels": "/help/nix-channels/",
          "mysql": "/help/mysql/",
          "msys2": "/help/msys2/",
          "mozilla": "/help/mozilla/",
          "mongodb": "/help/mongodb/",
          "mariadb": "/help/mariadb/",
          "manjaro": "/help/manjaro/",
          "lxc-images": "/help/lxc-images/",
          "llvm-project.git": "/help/llvm-project.git/",
          "llvm-apt": "/help/llvm-apt/",
          "linuxmint": "/help/linuxmint/",
          "linux.git": "/help/linux.git/",
          "linux-stable.git": "/help/linux-stable.git/",
          "linux-next.git": "/help/linux-next.git/",
          "linux-firmware.git": "/help/linux-firmware.git/",
          "lineageOS": "/help/lineageOS/",
          "lineage-rom": "/help/lineage-rom/",
          "kubernetes": "/help/kubernetes/",
          "kodi": "/help/kodi/",
          "kicad": "/help/kicad/",
          "kali": "/help/kali/",
          "julia-releases": "/help/julia-releases/",
          "influxdata": "/help/influxdata/",
          "homebrew": "/help/homebrew/",
          "homebrew-bottles": "/help/homebrew-bottles/",
          "hackage": "/help/hackage/",
          "grafana": "/help/grafana/",
          "glibc.git": "/help/glibc.git/",
          "gitlab-runner": "/help/gitlab-runner/",
          "gitlab-ce": "/help/gitlab-ce/",
          "github-raw": "/help/github-raw/",
          "git-repo": "/help/git-repo/",
          "gentoo-portage-prefix": "/help/gentoo-prefix/",
          "gentoo-portage": "/help/gentoo-portage/",
          "gentoo-portage.git": "/help/gentoo-portage.git/",
          "gcc.git": "/help/gcc.git/",
          "flutter": "/help/flutter/",
          "flutter-sdk.git": "/help/flutter-sdk.git/",
          "fedora": "/help/fedora/",
          "fdroid": "/help/fdroid/",
          "erlang-solutions": "/help/erlang-solutions/",
          "epel": "/help/epel/",
          "entware": "/help/entware/",
          "elrepo": "/help/elrepo/",
          "elpa": "/help/elpa/",
          "elasticstack": "/help/elasticstack/",
          "eclipse": "/help/eclipse/",
          "docker-ce": "/help/docker-ce/",
          "debian": "/help/debian/",
          "debian-multimedia": "/help/debian-multimedia/",
          "debian-elts": "/help/debian-elts/",
          "dart-pub": "/help/dart-pub/",
          "cygwin": "/help/cygwin/",
          "crates.io-index": "/help/crates.io-index/",
          "crates.io-index.git": "/help/crates.io-index.git/",
          "clojars": "/help/clojars/",
          "chef": "/help/chef/",
          "ceph": "/help/ceph/",
          "centos": "/help/centos/",
          "centos-vault": "/help/centos-vault/",
          "centos-stream": "/help/centos-stream/",
          "blackarch": "/help/blackarch/",
          "bioconductor": "/help/bioconductor/",
          "binutils-gdb.git": "/help/binutils-gdb.git/",
          "bazel-apt": "/help/bazel-apt/",
          "armbian": "/help/armbian/",
          "archlinuxcn": "/help/archlinuxcn/",
          "archlinuxarm": "/help/archlinuxarm/",
          "archlinux": "/help/archlinux/",
          "arch4edu": "/help/arch4edu/",
          "anthon": "/help/anthon/",
          "anaconda": "/help/anaconda/",
          "alpine": "/help/alpine/",
          "OpenMediaVault": "/help/OpenMediaVault/",
          "OpenBSD": "/help/OpenBSD/",
          "NetBSD": "/help/NetBSD/",
          "CocoaPods": "/help/CocoaPods/",
          "CTAN": "/help/CTAN/",
          "CRAN": "/help/CRAN/",
          "CPAN": "/help/CPAN/",
          "Adoptium": "/help/Adoptium/",
          "AOSP": "/help/AOSP/"
        };
        var popover = {
          exports: {}
        };
        var tooltip = {
          exports: {}
        };
        var top = 'top';
        var bottom = 'bottom';
        var right = 'right';
        var left = 'left';
        var auto = 'auto';
        var basePlacements = [top, bottom, right, left];
        var start = 'start';
        var end = 'end';
        var clippingParents = 'clippingParents';
        var viewport = 'viewport';
        var popper = 'popper';
        var reference = 'reference';
        var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
          return acc.concat([placement + "-" + start, placement + "-" + end]);
        }, []);
        var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
          return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
        }, []); // modifiers that need to read the DOM

        var beforeRead = 'beforeRead';
        var read = 'read';
        var afterRead = 'afterRead'; // pure-logic modifiers

        var beforeMain = 'beforeMain';
        var main = 'main';
        var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

        var beforeWrite = 'beforeWrite';
        var write = 'write';
        var afterWrite = 'afterWrite';
        var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
        function getNodeName(element) {
          return element ? (element.nodeName || '').toLowerCase() : null;
        }
        function getWindow(node) {
          if (node == null) {
            return window;
          }
          if (node.toString() !== '[object Window]') {
            var ownerDocument = node.ownerDocument;
            return ownerDocument ? ownerDocument.defaultView || window : window;
          }
          return node;
        }
        function isElement(node) {
          var OwnElement = getWindow(node).Element;
          return node instanceof OwnElement || node instanceof Element;
        }
        function isHTMLElement(node) {
          var OwnElement = getWindow(node).HTMLElement;
          return node instanceof OwnElement || node instanceof HTMLElement;
        }
        function isShadowRoot(node) {
          // IE 11 has no ShadowRoot
          if (typeof ShadowRoot === 'undefined') {
            return false;
          }
          var OwnElement = getWindow(node).ShadowRoot;
          return node instanceof OwnElement || node instanceof ShadowRoot;
        }

        // and applies them to the HTMLElements such as popper and arrow

        function applyStyles(_ref) {
          var state = _ref.state;
          Object.keys(state.elements).forEach(function (name) {
            var style = state.styles[name] || {};
            var attributes = state.attributes[name] || {};
            var element = state.elements[name]; // arrow is optional + virtual elements

            if (!isHTMLElement(element) || !getNodeName(element)) {
              return;
            } // Flow doesn't support to extend this property, but it's the most
            // effective way to apply styles to an HTMLElement
            // $FlowFixMe[cannot-write]

            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function (name) {
              var value = attributes[name];
              if (value === false) {
                element.removeAttribute(name);
              } else {
                element.setAttribute(name, value === true ? '' : value);
              }
            });
          });
        }
        function effect$2(_ref2) {
          var state = _ref2.state;
          var initialStyles = {
            popper: {
              position: state.options.strategy,
              left: '0',
              top: '0',
              margin: '0'
            },
            arrow: {
              position: 'absolute'
            },
            reference: {}
          };
          Object.assign(state.elements.popper.style, initialStyles.popper);
          state.styles = initialStyles;
          if (state.elements.arrow) {
            Object.assign(state.elements.arrow.style, initialStyles.arrow);
          }
          return function () {
            Object.keys(state.elements).forEach(function (name) {
              var element = state.elements[name];
              var attributes = state.attributes[name] || {};
              var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

              var style = styleProperties.reduce(function (style, property) {
                style[property] = '';
                return style;
              }, {}); // arrow is optional + virtual elements

              if (!isHTMLElement(element) || !getNodeName(element)) {
                return;
              }
              Object.assign(element.style, style);
              Object.keys(attributes).forEach(function (attribute) {
                element.removeAttribute(attribute);
              });
            });
          };
        } // eslint-disable-next-line import/no-unused-modules

        var applyStyles$1 = {
          name: 'applyStyles',
          enabled: true,
          phase: 'write',
          fn: applyStyles,
          effect: effect$2,
          requires: ['computeStyles']
        };
        function getBasePlacement(placement) {
          return placement.split('-')[0];
        }
        var max = Math.max;
        var min = Math.min;
        var round = Math.round;
        function getUAString() {
          var uaData = navigator.userAgentData;
          if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
            return uaData.brands.map(function (item) {
              return item.brand + "/" + item.version;
            }).join(' ');
          }
          return navigator.userAgent;
        }
        function isLayoutViewport() {
          return !/^((?!chrome|android).)*safari/i.test(getUAString());
        }
        function getBoundingClientRect(element, includeScale, isFixedStrategy) {
          if (includeScale === void 0) {
            includeScale = false;
          }
          if (isFixedStrategy === void 0) {
            isFixedStrategy = false;
          }
          var clientRect = element.getBoundingClientRect();
          var scaleX = 1;
          var scaleY = 1;
          if (includeScale && isHTMLElement(element)) {
            scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
            scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
          }
          var _ref = isElement(element) ? getWindow(element) : window,
            visualViewport = _ref.visualViewport;
          var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
          var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
          var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
          var width = clientRect.width / scaleX;
          var height = clientRect.height / scaleY;
          return {
            width: width,
            height: height,
            top: y,
            right: x + width,
            bottom: y + height,
            left: x,
            x: x,
            y: y
          };
        }

        // means it doesn't take into account transforms.

        function getLayoutRect(element) {
          var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
          // Fixes https://github.com/popperjs/popper-core/issues/1223

          var width = element.offsetWidth;
          var height = element.offsetHeight;
          if (Math.abs(clientRect.width - width) <= 1) {
            width = clientRect.width;
          }
          if (Math.abs(clientRect.height - height) <= 1) {
            height = clientRect.height;
          }
          return {
            x: element.offsetLeft,
            y: element.offsetTop,
            width: width,
            height: height
          };
        }
        function contains(parent, child) {
          var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

          if (parent.contains(child)) {
            return true;
          } // then fallback to custom implementation with Shadow DOM support
          else if (rootNode && isShadowRoot(rootNode)) {
            var next = child;
            do {
              if (next && parent.isSameNode(next)) {
                return true;
              } // $FlowFixMe[prop-missing]: need a better way to handle this...

              next = next.parentNode || next.host;
            } while (next);
          } // Give up, the result is false

          return false;
        }
        function getComputedStyle(element) {
          return getWindow(element).getComputedStyle(element);
        }
        function isTableElement(element) {
          return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
        }
        function getDocumentElement(element) {
          // $FlowFixMe[incompatible-return]: assume body is always available
          return ((isElement(element) ? element.ownerDocument :
          // $FlowFixMe[prop-missing]
          element.document) || window.document).documentElement;
        }
        function getParentNode(element) {
          if (getNodeName(element) === 'html') {
            return element;
          }
          return (
            // this is a quicker (but less type safe) way to save quite some bytes from the bundle
            // $FlowFixMe[incompatible-return]
            // $FlowFixMe[prop-missing]
            element.assignedSlot ||
            // step into the shadow DOM of the parent of a slotted node
            element.parentNode || (
            // DOM Element detected
            isShadowRoot(element) ? element.host : null) ||
            // ShadowRoot detected
            // $FlowFixMe[incompatible-call]: HTMLElement is a Node
            getDocumentElement(element) // fallback
          );
        }
        function getTrueOffsetParent(element) {
          if (!isHTMLElement(element) ||
          // https://github.com/popperjs/popper-core/issues/837
          getComputedStyle(element).position === 'fixed') {
            return null;
          }
          return element.offsetParent;
        } // `.offsetParent` reports `null` for fixed elements, while absolute elements
        // return the containing block

        function getContainingBlock(element) {
          var isFirefox = /firefox/i.test(getUAString());
          var isIE = /Trident/i.test(getUAString());
          if (isIE && isHTMLElement(element)) {
            // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
            var elementCss = getComputedStyle(element);
            if (elementCss.position === 'fixed') {
              return null;
            }
          }
          var currentNode = getParentNode(element);
          if (isShadowRoot(currentNode)) {
            currentNode = currentNode.host;
          }
          while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
            var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
            // create a containing block.
            // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

            if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
              return currentNode;
            } else {
              currentNode = currentNode.parentNode;
            }
          }
          return null;
        } // Gets the closest ancestor positioned element. Handles some edge cases,
        // such as table ancestors and cross browser bugs.

        function getOffsetParent(element) {
          var window = getWindow(element);
          var offsetParent = getTrueOffsetParent(element);
          while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
            offsetParent = getTrueOffsetParent(offsetParent);
          }
          if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
            return window;
          }
          return offsetParent || getContainingBlock(element) || window;
        }
        function getMainAxisFromPlacement(placement) {
          return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
        }
        function within(min$1, value, max$1) {
          return max(min$1, min(value, max$1));
        }
        function withinMaxClamp(min, value, max) {
          var v = within(min, value, max);
          return v > max ? max : v;
        }
        function getFreshSideObject() {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          };
        }
        function mergePaddingObject(paddingObject) {
          return Object.assign({}, getFreshSideObject(), paddingObject);
        }
        function expandToHashMap(value, keys) {
          return keys.reduce(function (hashMap, key) {
            hashMap[key] = value;
            return hashMap;
          }, {});
        }
        var toPaddingObject = function toPaddingObject(padding, state) {
          padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
            placement: state.placement
          })) : padding;
          return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
        };
        function arrow(_ref) {
          var _state$modifiersData$;
          var state = _ref.state,
            name = _ref.name,
            options = _ref.options;
          var arrowElement = state.elements.arrow;
          var popperOffsets = state.modifiersData.popperOffsets;
          var basePlacement = getBasePlacement(state.placement);
          var axis = getMainAxisFromPlacement(basePlacement);
          var isVertical = [left, right].indexOf(basePlacement) >= 0;
          var len = isVertical ? 'height' : 'width';
          if (!arrowElement || !popperOffsets) {
            return;
          }
          var paddingObject = toPaddingObject(options.padding, state);
          var arrowRect = getLayoutRect(arrowElement);
          var minProp = axis === 'y' ? top : left;
          var maxProp = axis === 'y' ? bottom : right;
          var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
          var startDiff = popperOffsets[axis] - state.rects.reference[axis];
          var arrowOffsetParent = getOffsetParent(arrowElement);
          var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
          var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
          // outside of the popper bounds

          var min = paddingObject[minProp];
          var max = clientSize - arrowRect[len] - paddingObject[maxProp];
          var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
          var offset = within(min, center, max); // Prevents breaking syntax highlighting...

          var axisProp = axis;
          state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
        }
        function effect$1(_ref2) {
          var state = _ref2.state,
            options = _ref2.options;
          var _options$element = options.element,
            arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
          if (arrowElement == null) {
            return;
          } // CSS selector

          if (typeof arrowElement === 'string') {
            arrowElement = state.elements.popper.querySelector(arrowElement);
            if (!arrowElement) {
              return;
            }
          }
          if (!contains(state.elements.popper, arrowElement)) {
            return;
          }
          state.elements.arrow = arrowElement;
        } // eslint-disable-next-line import/no-unused-modules

        var arrow$1 = {
          name: 'arrow',
          enabled: true,
          phase: 'main',
          fn: arrow,
          effect: effect$1,
          requires: ['popperOffsets'],
          requiresIfExists: ['preventOverflow']
        };
        function getVariation(placement) {
          return placement.split('-')[1];
        }
        var unsetSides = {
          top: 'auto',
          right: 'auto',
          bottom: 'auto',
          left: 'auto'
        }; // Round the offsets to the nearest suitable subpixel based on the DPR.
        // Zooming can change the DPR, but it seems to report a value that will
        // cleanly divide the values into the appropriate subpixels.

        function roundOffsetsByDPR(_ref, win) {
          var x = _ref.x,
            y = _ref.y;
          var dpr = win.devicePixelRatio || 1;
          return {
            x: round(x * dpr) / dpr || 0,
            y: round(y * dpr) / dpr || 0
          };
        }
        function mapToStyles(_ref2) {
          var _Object$assign2;
          var popper = _ref2.popper,
            popperRect = _ref2.popperRect,
            placement = _ref2.placement,
            variation = _ref2.variation,
            offsets = _ref2.offsets,
            position = _ref2.position,
            gpuAcceleration = _ref2.gpuAcceleration,
            adaptive = _ref2.adaptive,
            roundOffsets = _ref2.roundOffsets,
            isFixed = _ref2.isFixed;
          var _offsets$x = offsets.x,
            x = _offsets$x === void 0 ? 0 : _offsets$x,
            _offsets$y = offsets.y,
            y = _offsets$y === void 0 ? 0 : _offsets$y;
          var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
            x: x,
            y: y
          }) : {
            x: x,
            y: y
          };
          x = _ref3.x;
          y = _ref3.y;
          var hasX = offsets.hasOwnProperty('x');
          var hasY = offsets.hasOwnProperty('y');
          var sideX = left;
          var sideY = top;
          var win = window;
          if (adaptive) {
            var offsetParent = getOffsetParent(popper);
            var heightProp = 'clientHeight';
            var widthProp = 'clientWidth';
            if (offsetParent === getWindow(popper)) {
              offsetParent = getDocumentElement(popper);
              if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
                heightProp = 'scrollHeight';
                widthProp = 'scrollWidth';
              }
            } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

            offsetParent = offsetParent;
            if (placement === top || (placement === left || placement === right) && variation === end) {
              sideY = bottom;
              var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height :
              // $FlowFixMe[prop-missing]
              offsetParent[heightProp];
              y -= offsetY - popperRect.height;
              y *= gpuAcceleration ? 1 : -1;
            }
            if (placement === left || (placement === top || placement === bottom) && variation === end) {
              sideX = right;
              var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width :
              // $FlowFixMe[prop-missing]
              offsetParent[widthProp];
              x -= offsetX - popperRect.width;
              x *= gpuAcceleration ? 1 : -1;
            }
          }
          var commonStyles = Object.assign({
            position: position
          }, adaptive && unsetSides);
          var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
            x: x,
            y: y
          }, getWindow(popper)) : {
            x: x,
            y: y
          };
          x = _ref4.x;
          y = _ref4.y;
          if (gpuAcceleration) {
            var _Object$assign;
            return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
          }
          return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
        }
        function computeStyles(_ref5) {
          var state = _ref5.state,
            options = _ref5.options;
          var _options$gpuAccelerat = options.gpuAcceleration,
            gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
            _options$adaptive = options.adaptive,
            adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
            _options$roundOffsets = options.roundOffsets,
            roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
          var commonStyles = {
            placement: getBasePlacement(state.placement),
            variation: getVariation(state.placement),
            popper: state.elements.popper,
            popperRect: state.rects.popper,
            gpuAcceleration: gpuAcceleration,
            isFixed: state.options.strategy === 'fixed'
          };
          if (state.modifiersData.popperOffsets != null) {
            state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
              offsets: state.modifiersData.popperOffsets,
              position: state.options.strategy,
              adaptive: adaptive,
              roundOffsets: roundOffsets
            })));
          }
          if (state.modifiersData.arrow != null) {
            state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
              offsets: state.modifiersData.arrow,
              position: 'absolute',
              adaptive: false,
              roundOffsets: roundOffsets
            })));
          }
          state.attributes.popper = Object.assign({}, state.attributes.popper, {
            'data-popper-placement': state.placement
          });
        } // eslint-disable-next-line import/no-unused-modules

        var computeStyles$1 = {
          name: 'computeStyles',
          enabled: true,
          phase: 'beforeWrite',
          fn: computeStyles,
          data: {}
        };
        var passive = {
          passive: true
        };
        function effect(_ref) {
          var state = _ref.state,
            instance = _ref.instance,
            options = _ref.options;
          var _options$scroll = options.scroll,
            scroll = _options$scroll === void 0 ? true : _options$scroll,
            _options$resize = options.resize,
            resize = _options$resize === void 0 ? true : _options$resize;
          var window = getWindow(state.elements.popper);
          var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
          if (scroll) {
            scrollParents.forEach(function (scrollParent) {
              scrollParent.addEventListener('scroll', instance.update, passive);
            });
          }
          if (resize) {
            window.addEventListener('resize', instance.update, passive);
          }
          return function () {
            if (scroll) {
              scrollParents.forEach(function (scrollParent) {
                scrollParent.removeEventListener('scroll', instance.update, passive);
              });
            }
            if (resize) {
              window.removeEventListener('resize', instance.update, passive);
            }
          };
        } // eslint-disable-next-line import/no-unused-modules

        var eventListeners = {
          name: 'eventListeners',
          enabled: true,
          phase: 'write',
          fn: function fn() {},
          effect: effect,
          data: {}
        };
        var hash$1 = {
          left: 'right',
          right: 'left',
          bottom: 'top',
          top: 'bottom'
        };
        function getOppositePlacement(placement) {
          return placement.replace(/left|right|bottom|top/g, function (matched) {
            return hash$1[matched];
          });
        }
        var hash = {
          start: 'end',
          end: 'start'
        };
        function getOppositeVariationPlacement(placement) {
          return placement.replace(/start|end/g, function (matched) {
            return hash[matched];
          });
        }
        function getWindowScroll(node) {
          var win = getWindow(node);
          var scrollLeft = win.pageXOffset;
          var scrollTop = win.pageYOffset;
          return {
            scrollLeft: scrollLeft,
            scrollTop: scrollTop
          };
        }
        function getWindowScrollBarX(element) {
          // If <html> has a CSS width greater than the viewport, then this will be
          // incorrect for RTL.
          // Popper 1 is broken in this case and never had a bug report so let's assume
          // it's not an issue. I don't think anyone ever specifies width on <html>
          // anyway.
          // Browsers where the left scrollbar doesn't cause an issue report `0` for
          // this (e.g. Edge 2019, IE11, Safari)
          return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
        }
        function getViewportRect(element, strategy) {
          var win = getWindow(element);
          var html = getDocumentElement(element);
          var visualViewport = win.visualViewport;
          var width = html.clientWidth;
          var height = html.clientHeight;
          var x = 0;
          var y = 0;
          if (visualViewport) {
            width = visualViewport.width;
            height = visualViewport.height;
            var layoutViewport = isLayoutViewport();
            if (layoutViewport || !layoutViewport && strategy === 'fixed') {
              x = visualViewport.offsetLeft;
              y = visualViewport.offsetTop;
            }
          }
          return {
            width: width,
            height: height,
            x: x + getWindowScrollBarX(element),
            y: y
          };
        }

        // of the `<html>` and `<body>` rect bounds if horizontally scrollable

        function getDocumentRect(element) {
          var _element$ownerDocumen;
          var html = getDocumentElement(element);
          var winScroll = getWindowScroll(element);
          var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
          var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
          var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
          var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
          var y = -winScroll.scrollTop;
          if (getComputedStyle(body || html).direction === 'rtl') {
            x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
          }
          return {
            width: width,
            height: height,
            x: x,
            y: y
          };
        }
        function isScrollParent(element) {
          // Firefox wants us to check `-x` and `-y` variations as well
          var _getComputedStyle = getComputedStyle(element),
            overflow = _getComputedStyle.overflow,
            overflowX = _getComputedStyle.overflowX,
            overflowY = _getComputedStyle.overflowY;
          return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
        }
        function getScrollParent(node) {
          if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
            // $FlowFixMe[incompatible-return]: assume body is always available
            return node.ownerDocument.body;
          }
          if (isHTMLElement(node) && isScrollParent(node)) {
            return node;
          }
          return getScrollParent(getParentNode(node));
        }

        /*
        given a DOM element, return the list of all scroll parents, up the list of ancesors
        until we get to the top window object. This list is what we attach scroll listeners
        to, because if any of these parent elements scroll, we'll need to re-calculate the
        reference element's position.
        */

        function listScrollParents(element, list) {
          var _element$ownerDocumen;
          if (list === void 0) {
            list = [];
          }
          var scrollParent = getScrollParent(element);
          var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
          var win = getWindow(scrollParent);
          var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
          var updatedList = list.concat(target);
          return isBody ? updatedList :
          // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
          updatedList.concat(listScrollParents(getParentNode(target)));
        }
        function rectToClientRect(rect) {
          return Object.assign({}, rect, {
            left: rect.x,
            top: rect.y,
            right: rect.x + rect.width,
            bottom: rect.y + rect.height
          });
        }
        function getInnerBoundingClientRect(element, strategy) {
          var rect = getBoundingClientRect(element, false, strategy === 'fixed');
          rect.top = rect.top + element.clientTop;
          rect.left = rect.left + element.clientLeft;
          rect.bottom = rect.top + element.clientHeight;
          rect.right = rect.left + element.clientWidth;
          rect.width = element.clientWidth;
          rect.height = element.clientHeight;
          rect.x = rect.left;
          rect.y = rect.top;
          return rect;
        }
        function getClientRectFromMixedType(element, clippingParent, strategy) {
          return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
        } // A "clipping parent" is an overflowable container with the characteristic of
        // clipping (or hiding) overflowing elements with a position different from
        // `initial`

        function getClippingParents(element) {
          var clippingParents = listScrollParents(getParentNode(element));
          var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
          var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
          if (!isElement(clipperElement)) {
            return [];
          } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414

          return clippingParents.filter(function (clippingParent) {
            return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
          });
        } // Gets the maximum area that the element is visible in due to any number of
        // clipping parents

        function getClippingRect(element, boundary, rootBoundary, strategy) {
          var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
          var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
          var firstClippingParent = clippingParents[0];
          var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
            var rect = getClientRectFromMixedType(element, clippingParent, strategy);
            accRect.top = max(rect.top, accRect.top);
            accRect.right = min(rect.right, accRect.right);
            accRect.bottom = min(rect.bottom, accRect.bottom);
            accRect.left = max(rect.left, accRect.left);
            return accRect;
          }, getClientRectFromMixedType(element, firstClippingParent, strategy));
          clippingRect.width = clippingRect.right - clippingRect.left;
          clippingRect.height = clippingRect.bottom - clippingRect.top;
          clippingRect.x = clippingRect.left;
          clippingRect.y = clippingRect.top;
          return clippingRect;
        }
        function computeOffsets(_ref) {
          var reference = _ref.reference,
            element = _ref.element,
            placement = _ref.placement;
          var basePlacement = placement ? getBasePlacement(placement) : null;
          var variation = placement ? getVariation(placement) : null;
          var commonX = reference.x + reference.width / 2 - element.width / 2;
          var commonY = reference.y + reference.height / 2 - element.height / 2;
          var offsets;
          switch (basePlacement) {
            case top:
              offsets = {
                x: commonX,
                y: reference.y - element.height
              };
              break;
            case bottom:
              offsets = {
                x: commonX,
                y: reference.y + reference.height
              };
              break;
            case right:
              offsets = {
                x: reference.x + reference.width,
                y: commonY
              };
              break;
            case left:
              offsets = {
                x: reference.x - element.width,
                y: commonY
              };
              break;
            default:
              offsets = {
                x: reference.x,
                y: reference.y
              };
          }
          var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
          if (mainAxis != null) {
            var len = mainAxis === 'y' ? 'height' : 'width';
            switch (variation) {
              case start:
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                break;
              case end:
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                break;
            }
          }
          return offsets;
        }
        function detectOverflow(state, options) {
          if (options === void 0) {
            options = {};
          }
          var _options = options,
            _options$placement = _options.placement,
            placement = _options$placement === void 0 ? state.placement : _options$placement,
            _options$strategy = _options.strategy,
            strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
            _options$boundary = _options.boundary,
            boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
            _options$rootBoundary = _options.rootBoundary,
            rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
            _options$elementConte = _options.elementContext,
            elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
            _options$altBoundary = _options.altBoundary,
            altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
            _options$padding = _options.padding,
            padding = _options$padding === void 0 ? 0 : _options$padding;
          var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
          var altContext = elementContext === popper ? reference : popper;
          var popperRect = state.rects.popper;
          var element = state.elements[altBoundary ? altContext : elementContext];
          var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
          var referenceClientRect = getBoundingClientRect(state.elements.reference);
          var popperOffsets = computeOffsets({
            reference: referenceClientRect,
            element: popperRect,
            strategy: 'absolute',
            placement: placement
          });
          var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
          var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
          // 0 or negative = within the clipping rect

          var overflowOffsets = {
            top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
            bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
            left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
            right: elementClientRect.right - clippingClientRect.right + paddingObject.right
          };
          var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

          if (elementContext === popper && offsetData) {
            var offset = offsetData[placement];
            Object.keys(overflowOffsets).forEach(function (key) {
              var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
              var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
              overflowOffsets[key] += offset[axis] * multiply;
            });
          }
          return overflowOffsets;
        }
        function computeAutoPlacement(state, options) {
          if (options === void 0) {
            options = {};
          }
          var _options = options,
            placement = _options.placement,
            boundary = _options.boundary,
            rootBoundary = _options.rootBoundary,
            padding = _options.padding,
            flipVariations = _options.flipVariations,
            _options$allowedAutoP = _options.allowedAutoPlacements,
            allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
          var variation = getVariation(placement);
          var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
            return getVariation(placement) === variation;
          }) : basePlacements;
          var allowedPlacements = placements$1.filter(function (placement) {
            return allowedAutoPlacements.indexOf(placement) >= 0;
          });
          if (allowedPlacements.length === 0) {
            allowedPlacements = placements$1;
          } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...

          var overflows = allowedPlacements.reduce(function (acc, placement) {
            acc[placement] = detectOverflow(state, {
              placement: placement,
              boundary: boundary,
              rootBoundary: rootBoundary,
              padding: padding
            })[getBasePlacement(placement)];
            return acc;
          }, {});
          return Object.keys(overflows).sort(function (a, b) {
            return overflows[a] - overflows[b];
          });
        }
        function getExpandedFallbackPlacements(placement) {
          if (getBasePlacement(placement) === auto) {
            return [];
          }
          var oppositePlacement = getOppositePlacement(placement);
          return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
        }
        function flip(_ref) {
          var state = _ref.state,
            options = _ref.options,
            name = _ref.name;
          if (state.modifiersData[name]._skip) {
            return;
          }
          var _options$mainAxis = options.mainAxis,
            checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
            _options$altAxis = options.altAxis,
            checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
            specifiedFallbackPlacements = options.fallbackPlacements,
            padding = options.padding,
            boundary = options.boundary,
            rootBoundary = options.rootBoundary,
            altBoundary = options.altBoundary,
            _options$flipVariatio = options.flipVariations,
            flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
            allowedAutoPlacements = options.allowedAutoPlacements;
          var preferredPlacement = state.options.placement;
          var basePlacement = getBasePlacement(preferredPlacement);
          var isBasePlacement = basePlacement === preferredPlacement;
          var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
          var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
            return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
              placement: placement,
              boundary: boundary,
              rootBoundary: rootBoundary,
              padding: padding,
              flipVariations: flipVariations,
              allowedAutoPlacements: allowedAutoPlacements
            }) : placement);
          }, []);
          var referenceRect = state.rects.reference;
          var popperRect = state.rects.popper;
          var checksMap = new Map();
          var makeFallbackChecks = true;
          var firstFittingPlacement = placements[0];
          for (var i = 0; i < placements.length; i++) {
            var placement = placements[i];
            var _basePlacement = getBasePlacement(placement);
            var isStartVariation = getVariation(placement) === start;
            var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
            var len = isVertical ? 'width' : 'height';
            var overflow = detectOverflow(state, {
              placement: placement,
              boundary: boundary,
              rootBoundary: rootBoundary,
              altBoundary: altBoundary,
              padding: padding
            });
            var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
            if (referenceRect[len] > popperRect[len]) {
              mainVariationSide = getOppositePlacement(mainVariationSide);
            }
            var altVariationSide = getOppositePlacement(mainVariationSide);
            var checks = [];
            if (checkMainAxis) {
              checks.push(overflow[_basePlacement] <= 0);
            }
            if (checkAltAxis) {
              checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
            }
            if (checks.every(function (check) {
              return check;
            })) {
              firstFittingPlacement = placement;
              makeFallbackChecks = false;
              break;
            }
            checksMap.set(placement, checks);
          }
          if (makeFallbackChecks) {
            // `2` may be desired in some cases – research later
            var numberOfChecks = flipVariations ? 3 : 1;
            var _loop = function _loop(_i) {
              var fittingPlacement = placements.find(function (placement) {
                var checks = checksMap.get(placement);
                if (checks) {
                  return checks.slice(0, _i).every(function (check) {
                    return check;
                  });
                }
              });
              if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
              }
            };
            for (var _i = numberOfChecks; _i > 0; _i--) {
              var _ret = _loop(_i);
              if (_ret === "break") break;
            }
          }
          if (state.placement !== firstFittingPlacement) {
            state.modifiersData[name]._skip = true;
            state.placement = firstFittingPlacement;
            state.reset = true;
          }
        } // eslint-disable-next-line import/no-unused-modules

        var flip$1 = {
          name: 'flip',
          enabled: true,
          phase: 'main',
          fn: flip,
          requiresIfExists: ['offset'],
          data: {
            _skip: false
          }
        };
        function getSideOffsets(overflow, rect, preventedOffsets) {
          if (preventedOffsets === void 0) {
            preventedOffsets = {
              x: 0,
              y: 0
            };
          }
          return {
            top: overflow.top - rect.height - preventedOffsets.y,
            right: overflow.right - rect.width + preventedOffsets.x,
            bottom: overflow.bottom - rect.height + preventedOffsets.y,
            left: overflow.left - rect.width - preventedOffsets.x
          };
        }
        function isAnySideFullyClipped(overflow) {
          return [top, right, bottom, left].some(function (side) {
            return overflow[side] >= 0;
          });
        }
        function hide(_ref) {
          var state = _ref.state,
            name = _ref.name;
          var referenceRect = state.rects.reference;
          var popperRect = state.rects.popper;
          var preventedOffsets = state.modifiersData.preventOverflow;
          var referenceOverflow = detectOverflow(state, {
            elementContext: 'reference'
          });
          var popperAltOverflow = detectOverflow(state, {
            altBoundary: true
          });
          var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
          var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
          var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
          var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
          state.modifiersData[name] = {
            referenceClippingOffsets: referenceClippingOffsets,
            popperEscapeOffsets: popperEscapeOffsets,
            isReferenceHidden: isReferenceHidden,
            hasPopperEscaped: hasPopperEscaped
          };
          state.attributes.popper = Object.assign({}, state.attributes.popper, {
            'data-popper-reference-hidden': isReferenceHidden,
            'data-popper-escaped': hasPopperEscaped
          });
        } // eslint-disable-next-line import/no-unused-modules

        var hide$1 = {
          name: 'hide',
          enabled: true,
          phase: 'main',
          requiresIfExists: ['preventOverflow'],
          fn: hide
        };
        function distanceAndSkiddingToXY(placement, rects, offset) {
          var basePlacement = getBasePlacement(placement);
          var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
          var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
              placement: placement
            })) : offset,
            skidding = _ref[0],
            distance = _ref[1];
          skidding = skidding || 0;
          distance = (distance || 0) * invertDistance;
          return [left, right].indexOf(basePlacement) >= 0 ? {
            x: distance,
            y: skidding
          } : {
            x: skidding,
            y: distance
          };
        }
        function offset(_ref2) {
          var state = _ref2.state,
            options = _ref2.options,
            name = _ref2.name;
          var _options$offset = options.offset,
            offset = _options$offset === void 0 ? [0, 0] : _options$offset;
          var data = placements.reduce(function (acc, placement) {
            acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
            return acc;
          }, {});
          var _data$state$placement = data[state.placement],
            x = _data$state$placement.x,
            y = _data$state$placement.y;
          if (state.modifiersData.popperOffsets != null) {
            state.modifiersData.popperOffsets.x += x;
            state.modifiersData.popperOffsets.y += y;
          }
          state.modifiersData[name] = data;
        } // eslint-disable-next-line import/no-unused-modules

        var offset$1 = {
          name: 'offset',
          enabled: true,
          phase: 'main',
          requires: ['popperOffsets'],
          fn: offset
        };
        function popperOffsets(_ref) {
          var state = _ref.state,
            name = _ref.name;
          // Offsets are the actual position the popper needs to have to be
          // properly positioned near its reference element
          // This is the most basic placement, and will be adjusted by
          // the modifiers in the next step
          state.modifiersData[name] = computeOffsets({
            reference: state.rects.reference,
            element: state.rects.popper,
            strategy: 'absolute',
            placement: state.placement
          });
        } // eslint-disable-next-line import/no-unused-modules

        var popperOffsets$1 = {
          name: 'popperOffsets',
          enabled: true,
          phase: 'read',
          fn: popperOffsets,
          data: {}
        };
        function getAltAxis(axis) {
          return axis === 'x' ? 'y' : 'x';
        }
        function preventOverflow(_ref) {
          var state = _ref.state,
            options = _ref.options,
            name = _ref.name;
          var _options$mainAxis = options.mainAxis,
            checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
            _options$altAxis = options.altAxis,
            checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
            boundary = options.boundary,
            rootBoundary = options.rootBoundary,
            altBoundary = options.altBoundary,
            padding = options.padding,
            _options$tether = options.tether,
            tether = _options$tether === void 0 ? true : _options$tether,
            _options$tetherOffset = options.tetherOffset,
            tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
          var overflow = detectOverflow(state, {
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            altBoundary: altBoundary
          });
          var basePlacement = getBasePlacement(state.placement);
          var variation = getVariation(state.placement);
          var isBasePlacement = !variation;
          var mainAxis = getMainAxisFromPlacement(basePlacement);
          var altAxis = getAltAxis(mainAxis);
          var popperOffsets = state.modifiersData.popperOffsets;
          var referenceRect = state.rects.reference;
          var popperRect = state.rects.popper;
          var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
            placement: state.placement
          })) : tetherOffset;
          var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
            mainAxis: tetherOffsetValue,
            altAxis: tetherOffsetValue
          } : Object.assign({
            mainAxis: 0,
            altAxis: 0
          }, tetherOffsetValue);
          var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
          var data = {
            x: 0,
            y: 0
          };
          if (!popperOffsets) {
            return;
          }
          if (checkMainAxis) {
            var _offsetModifierState$;
            var mainSide = mainAxis === 'y' ? top : left;
            var altSide = mainAxis === 'y' ? bottom : right;
            var len = mainAxis === 'y' ? 'height' : 'width';
            var offset = popperOffsets[mainAxis];
            var min$1 = offset + overflow[mainSide];
            var max$1 = offset - overflow[altSide];
            var additive = tether ? -popperRect[len] / 2 : 0;
            var minLen = variation === start ? referenceRect[len] : popperRect[len];
            var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
            // outside the reference bounds

            var arrowElement = state.elements.arrow;
            var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
              width: 0,
              height: 0
            };
            var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
            var arrowPaddingMin = arrowPaddingObject[mainSide];
            var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
            // to include its full size in the calculation. If the reference is small
            // and near the edge of a boundary, the popper can overflow even if the
            // reference is not overflowing as well (e.g. virtual elements with no
            // width or height)

            var arrowLen = within(0, referenceRect[len], arrowRect[len]);
            var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
            var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
            var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
            var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
            var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
            var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
            var tetherMax = offset + maxOffset - offsetModifierValue;
            var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
            popperOffsets[mainAxis] = preventedOffset;
            data[mainAxis] = preventedOffset - offset;
          }
          if (checkAltAxis) {
            var _offsetModifierState$2;
            var _mainSide = mainAxis === 'x' ? top : left;
            var _altSide = mainAxis === 'x' ? bottom : right;
            var _offset = popperOffsets[altAxis];
            var _len = altAxis === 'y' ? 'height' : 'width';
            var _min = _offset + overflow[_mainSide];
            var _max = _offset - overflow[_altSide];
            var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
            var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
            var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
            var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
            var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
            popperOffsets[altAxis] = _preventedOffset;
            data[altAxis] = _preventedOffset - _offset;
          }
          state.modifiersData[name] = data;
        } // eslint-disable-next-line import/no-unused-modules

        var preventOverflow$1 = {
          name: 'preventOverflow',
          enabled: true,
          phase: 'main',
          fn: preventOverflow,
          requiresIfExists: ['offset']
        };
        function getHTMLElementScroll(element) {
          return {
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop
          };
        }
        function getNodeScroll(node) {
          if (node === getWindow(node) || !isHTMLElement(node)) {
            return getWindowScroll(node);
          } else {
            return getHTMLElementScroll(node);
          }
        }
        function isElementScaled(element) {
          var rect = element.getBoundingClientRect();
          var scaleX = round(rect.width) / element.offsetWidth || 1;
          var scaleY = round(rect.height) / element.offsetHeight || 1;
          return scaleX !== 1 || scaleY !== 1;
        } // Returns the composite rect of an element relative to its offsetParent.
        // Composite means it takes into account transforms as well as layout.

        function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
          if (isFixed === void 0) {
            isFixed = false;
          }
          var isOffsetParentAnElement = isHTMLElement(offsetParent);
          var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
          var documentElement = getDocumentElement(offsetParent);
          var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
          var scroll = {
            scrollLeft: 0,
            scrollTop: 0
          };
          var offsets = {
            x: 0,
            y: 0
          };
          if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
            if (getNodeName(offsetParent) !== 'body' ||
            // https://github.com/popperjs/popper-core/issues/1078
            isScrollParent(documentElement)) {
              scroll = getNodeScroll(offsetParent);
            }
            if (isHTMLElement(offsetParent)) {
              offsets = getBoundingClientRect(offsetParent, true);
              offsets.x += offsetParent.clientLeft;
              offsets.y += offsetParent.clientTop;
            } else if (documentElement) {
              offsets.x = getWindowScrollBarX(documentElement);
            }
          }
          return {
            x: rect.left + scroll.scrollLeft - offsets.x,
            y: rect.top + scroll.scrollTop - offsets.y,
            width: rect.width,
            height: rect.height
          };
        }
        function order(modifiers) {
          var map = new Map();
          var visited = new Set();
          var result = [];
          modifiers.forEach(function (modifier) {
            map.set(modifier.name, modifier);
          }); // On visiting object, check for its dependencies and visit them recursively

          function sort(modifier) {
            visited.add(modifier.name);
            var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
            requires.forEach(function (dep) {
              if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) {
                  sort(depModifier);
                }
              }
            });
            result.push(modifier);
          }
          modifiers.forEach(function (modifier) {
            if (!visited.has(modifier.name)) {
              // check for visited object
              sort(modifier);
            }
          });
          return result;
        }
        function orderModifiers(modifiers) {
          // order based on dependencies
          var orderedModifiers = order(modifiers); // order based on phase

          return modifierPhases.reduce(function (acc, phase) {
            return acc.concat(orderedModifiers.filter(function (modifier) {
              return modifier.phase === phase;
            }));
          }, []);
        }
        function debounce(fn) {
          var pending;
          return function () {
            if (!pending) {
              pending = new Promise(function (resolve) {
                Promise.resolve().then(function () {
                  pending = undefined;
                  resolve(fn());
                });
              });
            }
            return pending;
          };
        }
        function mergeByName(modifiers) {
          var merged = modifiers.reduce(function (merged, current) {
            var existing = merged[current.name];
            merged[current.name] = existing ? Object.assign({}, existing, current, {
              options: Object.assign({}, existing.options, current.options),
              data: Object.assign({}, existing.data, current.data)
            }) : current;
            return merged;
          }, {}); // IE11 does not support Object.values

          return Object.keys(merged).map(function (key) {
            return merged[key];
          });
        }
        var DEFAULT_OPTIONS = {
          placement: 'bottom',
          modifiers: [],
          strategy: 'absolute'
        };
        function areValidElements() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return !args.some(function (element) {
            return !(element && typeof element.getBoundingClientRect === 'function');
          });
        }
        function popperGenerator(generatorOptions) {
          if (generatorOptions === void 0) {
            generatorOptions = {};
          }
          var _generatorOptions = generatorOptions,
            _generatorOptions$def = _generatorOptions.defaultModifiers,
            defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
            _generatorOptions$def2 = _generatorOptions.defaultOptions,
            defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
          return function createPopper(reference, popper, options) {
            if (options === void 0) {
              options = defaultOptions;
            }
            var state = {
              placement: 'bottom',
              orderedModifiers: [],
              options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
              modifiersData: {},
              elements: {
                reference: reference,
                popper: popper
              },
              attributes: {},
              styles: {}
            };
            var effectCleanupFns = [];
            var isDestroyed = false;
            var instance = {
              state: state,
              setOptions: function setOptions(setOptionsAction) {
                var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
                cleanupModifierEffects();
                state.options = Object.assign({}, defaultOptions, state.options, options);
                state.scrollParents = {
                  reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
                  popper: listScrollParents(popper)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties

                var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

                state.orderedModifiers = orderedModifiers.filter(function (m) {
                  return m.enabled;
                });
                runModifierEffects();
                return instance.update();
              },
              // Sync update – it will always be executed, even if not necessary. This
              // is useful for low frequency updates where sync behavior simplifies the
              // logic.
              // For high frequency updates (e.g. `resize` and `scroll` events), always
              // prefer the async Popper#update method
              forceUpdate: function forceUpdate() {
                if (isDestroyed) {
                  return;
                }
                var _state$elements = state.elements,
                  reference = _state$elements.reference,
                  popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore

                if (!areValidElements(reference, popper)) {
                  return;
                } // Store the reference and popper rects to be read by modifiers

                state.rects = {
                  reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
                  popper: getLayoutRect(popper)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect

                state.reset = false;
                state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`

                state.orderedModifiers.forEach(function (modifier) {
                  return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                });
                for (var index = 0; index < state.orderedModifiers.length; index++) {
                  if (state.reset === true) {
                    state.reset = false;
                    index = -1;
                    continue;
                  }
                  var _state$orderedModifie = state.orderedModifiers[index],
                    fn = _state$orderedModifie.fn,
                    _state$orderedModifie2 = _state$orderedModifie.options,
                    _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                    name = _state$orderedModifie.name;
                  if (typeof fn === 'function') {
                    state = fn({
                      state: state,
                      options: _options,
                      name: name,
                      instance: instance
                    }) || state;
                  }
                }
              },
              // Async and optimistically optimized update – it will not be executed if
              // not necessary (debounced to run at most once-per-tick)
              update: debounce(function () {
                return new Promise(function (resolve) {
                  instance.forceUpdate();
                  resolve(state);
                });
              }),
              destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
              }
            };
            if (!areValidElements(reference, popper)) {
              return instance;
            }
            instance.setOptions(options).then(function (state) {
              if (!isDestroyed && options.onFirstUpdate) {
                options.onFirstUpdate(state);
              }
            }); // Modifiers have the ability to execute arbitrary code before the first
            // update cycle runs. They will be executed in the same order as the update
            // cycle. This is useful when a modifier adds some persistent data that
            // other modifiers need to use, but the modifier is run after the dependent
            // one.

            function runModifierEffects() {
              state.orderedModifiers.forEach(function (_ref) {
                var name = _ref.name,
                  _ref$options = _ref.options,
                  options = _ref$options === void 0 ? {} : _ref$options,
                  effect = _ref.effect;
                if (typeof effect === 'function') {
                  var cleanupFn = effect({
                    state: state,
                    name: name,
                    instance: instance,
                    options: options
                  });
                  var noopFn = function noopFn() {};
                  effectCleanupFns.push(cleanupFn || noopFn);
                }
              });
            }
            function cleanupModifierEffects() {
              effectCleanupFns.forEach(function (fn) {
                return fn();
              });
              effectCleanupFns = [];
            }
            return instance;
          };
        }
        var createPopper$2 = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules

        var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
        var createPopper$1 = /*#__PURE__*/popperGenerator({
          defaultModifiers: defaultModifiers$1
        }); // eslint-disable-next-line import/no-unused-modules

        var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
        var createPopper = /*#__PURE__*/popperGenerator({
          defaultModifiers: defaultModifiers
        }); // eslint-disable-next-line import/no-unused-modules

        var lib = /*#__PURE__*/Object.freeze( /*#__PURE__*/Object.defineProperty({
          __proto__: null,
          afterMain: afterMain,
          afterRead: afterRead,
          afterWrite: afterWrite,
          applyStyles: applyStyles$1,
          arrow: arrow$1,
          auto: auto,
          basePlacements: basePlacements,
          beforeMain: beforeMain,
          beforeRead: beforeRead,
          beforeWrite: beforeWrite,
          bottom: bottom,
          clippingParents: clippingParents,
          computeStyles: computeStyles$1,
          createPopper: createPopper,
          createPopperBase: createPopper$2,
          createPopperLite: createPopper$1,
          detectOverflow: detectOverflow,
          end: end,
          eventListeners: eventListeners,
          flip: flip$1,
          hide: hide$1,
          left: left,
          main: main,
          modifierPhases: modifierPhases,
          offset: offset$1,
          placements: placements,
          popper: popper,
          popperGenerator: popperGenerator,
          popperOffsets: popperOffsets$1,
          preventOverflow: preventOverflow$1,
          read: read,
          reference: reference,
          right: right,
          start: start,
          top: top,
          variationPlacements: variationPlacements,
          viewport: viewport,
          write: write
        }, Symbol.toStringTag, {
          value: 'Module'
        }));
        var require$$0 = /*@__PURE__*/getAugmentedNamespace(lib);
        var sanitizer = {
          exports: {}
        };

        /*!
          * Bootstrap sanitizer.js v5.3.3 (https://getbootstrap.com/)
          * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
          * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
          */

        var hasRequiredSanitizer;
        function requireSanitizer() {
          if (hasRequiredSanitizer) return sanitizer.exports;
          hasRequiredSanitizer = 1;
          (function (module, exports) {
            (function (global, factory) {
              factory(exports);
            })(commonjsGlobal, function (exports) {
              /**
               * --------------------------------------------------------------------------
               * Bootstrap util/sanitizer.js
               * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
               * --------------------------------------------------------------------------
               */

              // js-docs-start allow-list
              var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
              var DefaultAllowlist = {
                // Global attributes allowed on any supplied element below.
                '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
                a: ['target', 'href', 'title', 'rel'],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                dd: [],
                div: [],
                dl: [],
                dt: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
              };
              // js-docs-end allow-list

              var uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);

              /**
               * A pattern that recognizes URLs that are safe wrt. XSS in URL navigation
               * contexts.
               *
               * Shout-out to Angular https://github.com/angular/angular/blob/15.2.8/packages/core/src/sanitization/url_sanitizer.ts#L38
               */
              // eslint-disable-next-line unicorn/better-regex
              var SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
              var allowedAttribute = function allowedAttribute(attribute, allowedAttributeList) {
                var attributeName = attribute.nodeName.toLowerCase();
                if (allowedAttributeList.includes(attributeName)) {
                  if (uriAttributes.has(attributeName)) {
                    return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
                  }
                  return true;
                }

                // Check if a regular expression validates the attribute.
                return allowedAttributeList.filter(function (attributeRegex) {
                  return attributeRegex instanceof RegExp;
                }).some(function (regex) {
                  return regex.test(attributeName);
                });
              };
              function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
                var _ref8;
                if (!unsafeHtml.length) {
                  return unsafeHtml;
                }
                if (sanitizeFunction && typeof sanitizeFunction === 'function') {
                  return sanitizeFunction(unsafeHtml);
                }
                var domParser = new window.DOMParser();
                var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
                var elements = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(createdDocument.body.querySelectorAll('*')));
                var _iterator = _createForOfIteratorHelper(elements),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var _ref9;
                    var element = _step.value;
                    var elementName = element.nodeName.toLowerCase();
                    if (!Object.keys(allowList).includes(elementName)) {
                      element.remove();
                      continue;
                    }
                    var attributeList = (_ref9 = []).concat.apply(_ref9, _toConsumableArray(element.attributes));
                    var allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);
                    var _iterator2 = _createForOfIteratorHelper(attributeList),
                      _step2;
                    try {
                      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                        var attribute = _step2.value;
                        if (!allowedAttribute(attribute, allowedAttributes)) {
                          element.removeAttribute(attribute.nodeName);
                        }
                      }
                    } catch (err) {
                      _iterator2.e(err);
                    } finally {
                      _iterator2.f();
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                return createdDocument.body.innerHTML;
              }
              exports.DefaultAllowlist = DefaultAllowlist;
              exports.sanitizeHtml = sanitizeHtml;
              Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
              });
            });
          })(sanitizer, sanitizer.exports);
          return sanitizer.exports;
        }
        var templateFactory = {
          exports: {}
        };

        /*!
          * Bootstrap template-factory.js v5.3.3 (https://getbootstrap.com/)
          * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
          * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
          */

        var hasRequiredTemplateFactory;
        function requireTemplateFactory() {
          if (hasRequiredTemplateFactory) return templateFactory.exports;
          hasRequiredTemplateFactory = 1;
          (function (module, exports) {
            (function (global, factory) {
              module.exports = factory(requireSelectorEngine(), requireConfig(), requireSanitizer(), requireUtil());
            })(commonjsGlobal, function (SelectorEngine, Config, sanitizer_js, index_js) {
              /**
               * --------------------------------------------------------------------------
               * Bootstrap util/template-factory.js
               * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
               * --------------------------------------------------------------------------
               */

              /**
               * Constants
               */

              var NAME = 'TemplateFactory';
              var Default = {
                allowList: sanitizer_js.DefaultAllowlist,
                content: {},
                // { selector : text ,  selector2 : text2 , }
                extraClass: '',
                html: false,
                sanitize: true,
                sanitizeFn: null,
                template: '<div></div>'
              };
              var DefaultType = {
                allowList: 'object',
                content: 'object',
                extraClass: '(string|function)',
                html: 'boolean',
                sanitize: 'boolean',
                sanitizeFn: '(null|function)',
                template: 'string'
              };
              var DefaultContentType = {
                entry: '(string|element|function|null)',
                selector: '(string|element)'
              };

              /**
               * Class definition
               */
              var TemplateFactory = /*#__PURE__*/function (_Config) {
                function TemplateFactory(config) {
                  var _this;
                  _classCallCheck(this, TemplateFactory);
                  _this = _callSuper(this, TemplateFactory);
                  _this._config = _this._getConfig(config);
                  return _this;
                }

                // Getters
                _inherits(TemplateFactory, _Config);
                return _createClass(TemplateFactory, [{
                  key: "getContent",
                  value:
                  // Public
                  function getContent() {
                    var _this2 = this;
                    return Object.values(this._config.content).map(function (config) {
                      return _this2._resolvePossibleFunction(config);
                    }).filter(Boolean);
                  }
                }, {
                  key: "hasContent",
                  value: function hasContent() {
                    return this.getContent().length > 0;
                  }
                }, {
                  key: "changeContent",
                  value: function changeContent(content) {
                    this._checkContent(content);
                    this._config.content = _objectSpread(_objectSpread({}, this._config.content), content);
                    return this;
                  }
                }, {
                  key: "toHtml",
                  value: function toHtml() {
                    var templateWrapper = document.createElement('div');
                    templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
                    for (var _i2 = 0, _Object$entries = Object.entries(this._config.content); _i2 < _Object$entries.length; _i2++) {
                      var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
                        selector = _Object$entries$_i[0],
                        text = _Object$entries$_i[1];
                      this._setContent(templateWrapper, text, selector);
                    }
                    var template = templateWrapper.children[0];
                    var extraClass = this._resolvePossibleFunction(this._config.extraClass);
                    if (extraClass) {
                      var _template$classList;
                      (_template$classList = template.classList).add.apply(_template$classList, _toConsumableArray(extraClass.split(' ')));
                    }
                    return template;
                  }

                  // Private
                }, {
                  key: "_typeCheckConfig",
                  value: function _typeCheckConfig(config) {
                    _get(_getPrototypeOf(TemplateFactory.prototype), "_typeCheckConfig", this).call(this, config);
                    this._checkContent(config.content);
                  }
                }, {
                  key: "_checkContent",
                  value: function _checkContent(arg) {
                    for (var _i3 = 0, _Object$entries2 = Object.entries(arg); _i3 < _Object$entries2.length; _i3++) {
                      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2),
                        selector = _Object$entries2$_i[0],
                        content = _Object$entries2$_i[1];
                      _get(_getPrototypeOf(TemplateFactory.prototype), "_typeCheckConfig", this).call(this, {
                        selector: selector,
                        entry: content
                      }, DefaultContentType);
                    }
                  }
                }, {
                  key: "_setContent",
                  value: function _setContent(template, content, selector) {
                    var templateElement = SelectorEngine.findOne(selector, template);
                    if (!templateElement) {
                      return;
                    }
                    content = this._resolvePossibleFunction(content);
                    if (!content) {
                      templateElement.remove();
                      return;
                    }
                    if (index_js.isElement(content)) {
                      this._putElementInTemplate(index_js.getElement(content), templateElement);
                      return;
                    }
                    if (this._config.html) {
                      templateElement.innerHTML = this._maybeSanitize(content);
                      return;
                    }
                    templateElement.textContent = content;
                  }
                }, {
                  key: "_maybeSanitize",
                  value: function _maybeSanitize(arg) {
                    return this._config.sanitize ? sanitizer_js.sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
                  }
                }, {
                  key: "_resolvePossibleFunction",
                  value: function _resolvePossibleFunction(arg) {
                    return index_js.execute(arg, [this]);
                  }
                }, {
                  key: "_putElementInTemplate",
                  value: function _putElementInTemplate(element, templateElement) {
                    if (this._config.html) {
                      templateElement.innerHTML = '';
                      templateElement.append(element);
                      return;
                    }
                    templateElement.textContent = element.textContent;
                  }
                }], [{
                  key: "Default",
                  get: function get() {
                    return Default;
                  }
                }, {
                  key: "DefaultType",
                  get: function get() {
                    return DefaultType;
                  }
                }, {
                  key: "NAME",
                  get: function get() {
                    return NAME;
                  }
                }]);
              }(Config);
              return TemplateFactory;
            });
          })(templateFactory);
          return templateFactory.exports;
        }

        /*!
          * Bootstrap tooltip.js v5.3.3 (https://getbootstrap.com/)
          * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
          * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
          */

        var hasRequiredTooltip;
        function requireTooltip() {
          if (hasRequiredTooltip) return tooltip.exports;
          hasRequiredTooltip = 1;
          (function (module, exports) {
            (function (global, factory) {
              module.exports = factory(require$$0, requireBaseComponent(), requireEventHandler(), requireManipulator(), requireUtil(), requireSanitizer(), requireTemplateFactory());
            })(commonjsGlobal, function (Popper, BaseComponent, EventHandler, Manipulator, index_js, sanitizer_js, TemplateFactory) {
              function _interopNamespaceDefault(e) {
                var n = Object.create(null, _defineProperty({}, Symbol.toStringTag, {
                  value: 'Module'
                }));
                if (e) {
                  var _loop2 = function _loop2(k) {
                    if (k !== 'default') {
                      var d = Object.getOwnPropertyDescriptor(e, k);
                      Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function get() {
                          return e[k];
                        }
                      });
                    }
                  };
                  for (var k in e) {
                    _loop2(k);
                  }
                }
                n["default"] = e;
                return Object.freeze(n);
              }
              var Popper__namespace = /*#__PURE__*/_interopNamespaceDefault(Popper);

              /**
               * --------------------------------------------------------------------------
               * Bootstrap tooltip.js
               * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
               * --------------------------------------------------------------------------
               */

              /**
               * Constants
               */

              var NAME = 'tooltip';
              var DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
              var CLASS_NAME_FADE = 'fade';
              var CLASS_NAME_MODAL = 'modal';
              var CLASS_NAME_SHOW = 'show';
              var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
              var SELECTOR_MODAL = ".".concat(CLASS_NAME_MODAL);
              var EVENT_MODAL_HIDE = 'hide.bs.modal';
              var TRIGGER_HOVER = 'hover';
              var TRIGGER_FOCUS = 'focus';
              var TRIGGER_CLICK = 'click';
              var TRIGGER_MANUAL = 'manual';
              var EVENT_HIDE = 'hide';
              var EVENT_HIDDEN = 'hidden';
              var EVENT_SHOW = 'show';
              var EVENT_SHOWN = 'shown';
              var EVENT_INSERTED = 'inserted';
              var EVENT_CLICK = 'click';
              var EVENT_FOCUSIN = 'focusin';
              var EVENT_FOCUSOUT = 'focusout';
              var EVENT_MOUSEENTER = 'mouseenter';
              var EVENT_MOUSELEAVE = 'mouseleave';
              var AttachmentMap = {
                AUTO: 'auto',
                TOP: 'top',
                RIGHT: index_js.isRTL() ? 'left' : 'right',
                BOTTOM: 'bottom',
                LEFT: index_js.isRTL() ? 'right' : 'left'
              };
              var Default = {
                allowList: sanitizer_js.DefaultAllowlist,
                animation: true,
                boundary: 'clippingParents',
                container: false,
                customClass: '',
                delay: 0,
                fallbackPlacements: ['top', 'right', 'bottom', 'left'],
                html: false,
                offset: [0, 6],
                placement: 'top',
                popperConfig: null,
                sanitize: true,
                sanitizeFn: null,
                selector: false,
                template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
                title: '',
                trigger: 'hover focus'
              };
              var DefaultType = {
                allowList: 'object',
                animation: 'boolean',
                boundary: '(string|element)',
                container: '(string|element|boolean)',
                customClass: '(string|function)',
                delay: '(number|object)',
                fallbackPlacements: 'array',
                html: 'boolean',
                offset: '(array|string|function)',
                placement: '(string|function)',
                popperConfig: '(null|object|function)',
                sanitize: 'boolean',
                sanitizeFn: '(null|function)',
                selector: '(string|boolean)',
                template: 'string',
                title: '(string|element|function)',
                trigger: 'string'
              };

              /**
               * Class definition
               */
              var Tooltip = /*#__PURE__*/function (_BaseComponent) {
                function Tooltip(element, config) {
                  var _this3;
                  _classCallCheck(this, Tooltip);
                  if (typeof Popper__namespace === 'undefined') {
                    throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
                  }
                  _this3 = _callSuper(this, Tooltip, [element, config]);

                  // Private
                  _this3._isEnabled = true;
                  _this3._timeout = 0;
                  _this3._isHovered = null;
                  _this3._activeTrigger = {};
                  _this3._popper = null;
                  _this3._templateFactory = null;
                  _this3._newContent = null;

                  // Protected
                  _this3.tip = null;
                  _this3._setListeners();
                  if (!_this3._config.selector) {
                    _this3._fixTitle();
                  }
                  return _this3;
                }

                // Getters
                _inherits(Tooltip, _BaseComponent);
                return _createClass(Tooltip, [{
                  key: "enable",
                  value:
                  // Public
                  function enable() {
                    this._isEnabled = true;
                  }
                }, {
                  key: "disable",
                  value: function disable() {
                    this._isEnabled = false;
                  }
                }, {
                  key: "toggleEnabled",
                  value: function toggleEnabled() {
                    this._isEnabled = !this._isEnabled;
                  }
                }, {
                  key: "toggle",
                  value: function toggle() {
                    if (!this._isEnabled) {
                      return;
                    }
                    this._activeTrigger.click = !this._activeTrigger.click;
                    if (this._isShown()) {
                      this._leave();
                      return;
                    }
                    this._enter();
                  }
                }, {
                  key: "dispose",
                  value: function dispose() {
                    clearTimeout(this._timeout);
                    EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
                    if (this._element.getAttribute('data-bs-original-title')) {
                      this._element.setAttribute('title', this._element.getAttribute('data-bs-original-title'));
                    }
                    this._disposePopper();
                    _get(_getPrototypeOf(Tooltip.prototype), "dispose", this).call(this);
                  }
                }, {
                  key: "show",
                  value: function show() {
                    var _this4 = this;
                    if (this._element.style.display === 'none') {
                      throw new Error('Please use show on visible elements');
                    }
                    if (!(this._isWithContent() && this._isEnabled)) {
                      return;
                    }
                    var showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW));
                    var shadowRoot = index_js.findShadowRoot(this._element);
                    var isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
                    if (showEvent.defaultPrevented || !isInTheDom) {
                      return;
                    }

                    // TODO: v6 remove this or make it optional
                    this._disposePopper();
                    var tip = this._getTipElement();
                    this._element.setAttribute('aria-describedby', tip.getAttribute('id'));
                    var container = this._config.container;
                    if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
                      container.append(tip);
                      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
                    }
                    this._popper = this._createPopper(tip);
                    tip.classList.add(CLASS_NAME_SHOW);

                    // If this is a touch-enabled device we add extra
                    // empty mouseover listeners to the body's immediate children;
                    // only needed because of broken event delegation on iOS
                    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
                    if ('ontouchstart' in document.documentElement) {
                      var _ref10;
                      var _iterator3 = _createForOfIteratorHelper((_ref10 = []).concat.apply(_ref10, _toConsumableArray(document.body.children))),
                        _step3;
                      try {
                        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                          var element = _step3.value;
                          EventHandler.on(element, 'mouseover', index_js.noop);
                        }
                      } catch (err) {
                        _iterator3.e(err);
                      } finally {
                        _iterator3.f();
                      }
                    }
                    var complete = function complete() {
                      EventHandler.trigger(_this4._element, _this4.constructor.eventName(EVENT_SHOWN));
                      if (_this4._isHovered === false) {
                        _this4._leave();
                      }
                      _this4._isHovered = false;
                    };
                    this._queueCallback(complete, this.tip, this._isAnimated());
                  }
                }, {
                  key: "hide",
                  value: function hide() {
                    var _this5 = this;
                    if (!this._isShown()) {
                      return;
                    }
                    var hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE));
                    if (hideEvent.defaultPrevented) {
                      return;
                    }
                    var tip = this._getTipElement();
                    tip.classList.remove(CLASS_NAME_SHOW);

                    // If this is a touch-enabled device we remove the extra
                    // empty mouseover listeners we added for iOS support
                    if ('ontouchstart' in document.documentElement) {
                      var _ref11;
                      var _iterator4 = _createForOfIteratorHelper((_ref11 = []).concat.apply(_ref11, _toConsumableArray(document.body.children))),
                        _step4;
                      try {
                        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                          var element = _step4.value;
                          EventHandler.off(element, 'mouseover', index_js.noop);
                        }
                      } catch (err) {
                        _iterator4.e(err);
                      } finally {
                        _iterator4.f();
                      }
                    }
                    this._activeTrigger[TRIGGER_CLICK] = false;
                    this._activeTrigger[TRIGGER_FOCUS] = false;
                    this._activeTrigger[TRIGGER_HOVER] = false;
                    this._isHovered = null; // it is a trick to support manual triggering

                    var complete = function complete() {
                      if (_this5._isWithActiveTrigger()) {
                        return;
                      }
                      if (!_this5._isHovered) {
                        _this5._disposePopper();
                      }
                      _this5._element.removeAttribute('aria-describedby');
                      EventHandler.trigger(_this5._element, _this5.constructor.eventName(EVENT_HIDDEN));
                    };
                    this._queueCallback(complete, this.tip, this._isAnimated());
                  }
                }, {
                  key: "update",
                  value: function update() {
                    if (this._popper) {
                      this._popper.update();
                    }
                  }

                  // Protected
                }, {
                  key: "_isWithContent",
                  value: function _isWithContent() {
                    return Boolean(this._getTitle());
                  }
                }, {
                  key: "_getTipElement",
                  value: function _getTipElement() {
                    if (!this.tip) {
                      this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
                    }
                    return this.tip;
                  }
                }, {
                  key: "_createTipElement",
                  value: function _createTipElement(content) {
                    var tip = this._getTemplateFactory(content).toHtml();

                    // TODO: remove this check in v6
                    if (!tip) {
                      return null;
                    }
                    tip.classList.remove(CLASS_NAME_FADE, CLASS_NAME_SHOW);
                    // TODO: v6 the following can be achieved with CSS only
                    tip.classList.add("bs-".concat(this.constructor.NAME, "-auto"));
                    var tipId = index_js.getUID(this.constructor.NAME).toString();
                    tip.setAttribute('id', tipId);
                    if (this._isAnimated()) {
                      tip.classList.add(CLASS_NAME_FADE);
                    }
                    return tip;
                  }
                }, {
                  key: "setContent",
                  value: function setContent(content) {
                    this._newContent = content;
                    if (this._isShown()) {
                      this._disposePopper();
                      this.show();
                    }
                  }
                }, {
                  key: "_getTemplateFactory",
                  value: function _getTemplateFactory(content) {
                    if (this._templateFactory) {
                      this._templateFactory.changeContent(content);
                    } else {
                      this._templateFactory = new TemplateFactory(_objectSpread(_objectSpread({}, this._config), {}, {
                        // the `content` var has to be after `this._config`
                        // to override config.content in case of popover
                        content: content,
                        extraClass: this._resolvePossibleFunction(this._config.customClass)
                      }));
                    }
                    return this._templateFactory;
                  }
                }, {
                  key: "_getContentForTemplate",
                  value: function _getContentForTemplate() {
                    return _defineProperty({}, SELECTOR_TOOLTIP_INNER, this._getTitle());
                  }
                }, {
                  key: "_getTitle",
                  value: function _getTitle() {
                    return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute('data-bs-original-title');
                  }

                  // Private
                }, {
                  key: "_initializeOnDelegatedTarget",
                  value: function _initializeOnDelegatedTarget(event) {
                    return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
                  }
                }, {
                  key: "_isAnimated",
                  value: function _isAnimated() {
                    return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE);
                  }
                }, {
                  key: "_isShown",
                  value: function _isShown() {
                    return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW);
                  }
                }, {
                  key: "_createPopper",
                  value: function _createPopper(tip) {
                    var placement = index_js.execute(this._config.placement, [this, tip, this._element]);
                    var attachment = AttachmentMap[placement.toUpperCase()];
                    return Popper__namespace.createPopper(this._element, tip, this._getPopperConfig(attachment));
                  }
                }, {
                  key: "_getOffset",
                  value: function _getOffset() {
                    var _this6 = this;
                    var offset = this._config.offset;
                    if (typeof offset === 'string') {
                      return offset.split(',').map(function (value) {
                        return Number.parseInt(value, 10);
                      });
                    }
                    if (typeof offset === 'function') {
                      return function (popperData) {
                        return offset(popperData, _this6._element);
                      };
                    }
                    return offset;
                  }
                }, {
                  key: "_resolvePossibleFunction",
                  value: function _resolvePossibleFunction(arg) {
                    return index_js.execute(arg, [this._element]);
                  }
                }, {
                  key: "_getPopperConfig",
                  value: function _getPopperConfig(attachment) {
                    var _this7 = this;
                    var defaultBsPopperConfig = {
                      placement: attachment,
                      modifiers: [{
                        name: 'flip',
                        options: {
                          fallbackPlacements: this._config.fallbackPlacements
                        }
                      }, {
                        name: 'offset',
                        options: {
                          offset: this._getOffset()
                        }
                      }, {
                        name: 'preventOverflow',
                        options: {
                          boundary: this._config.boundary
                        }
                      }, {
                        name: 'arrow',
                        options: {
                          element: ".".concat(this.constructor.NAME, "-arrow")
                        }
                      }, {
                        name: 'preSetPlacement',
                        enabled: true,
                        phase: 'beforeMain',
                        fn: function fn(data) {
                          // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
                          // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
                          _this7._getTipElement().setAttribute('data-popper-placement', data.state.placement);
                        }
                      }]
                    };
                    return _objectSpread(_objectSpread({}, defaultBsPopperConfig), index_js.execute(this._config.popperConfig, [defaultBsPopperConfig]));
                  }
                }, {
                  key: "_setListeners",
                  value: function _setListeners() {
                    var _this8 = this;
                    var triggers = this._config.trigger.split(' ');
                    var _iterator5 = _createForOfIteratorHelper(triggers),
                      _step5;
                    try {
                      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                        var trigger = _step5.value;
                        if (trigger === 'click') {
                          EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK), this._config.selector, function (event) {
                            var context = _this8._initializeOnDelegatedTarget(event);
                            context.toggle();
                          });
                        } else if (trigger !== TRIGGER_MANUAL) {
                          var eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN);
                          var eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT);
                          EventHandler.on(this._element, eventIn, this._config.selector, function (event) {
                            var context = _this8._initializeOnDelegatedTarget(event);
                            context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
                            context._enter();
                          });
                          EventHandler.on(this._element, eventOut, this._config.selector, function (event) {
                            var context = _this8._initializeOnDelegatedTarget(event);
                            context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
                            context._leave();
                          });
                        }
                      }
                    } catch (err) {
                      _iterator5.e(err);
                    } finally {
                      _iterator5.f();
                    }
                    this._hideModalHandler = function () {
                      if (_this8._element) {
                        _this8.hide();
                      }
                    };
                    EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
                  }
                }, {
                  key: "_fixTitle",
                  value: function _fixTitle() {
                    var title = this._element.getAttribute('title');
                    if (!title) {
                      return;
                    }
                    if (!this._element.getAttribute('aria-label') && !this._element.textContent.trim()) {
                      this._element.setAttribute('aria-label', title);
                    }
                    this._element.setAttribute('data-bs-original-title', title); // DO NOT USE IT. Is only for backwards compatibility
                    this._element.removeAttribute('title');
                  }
                }, {
                  key: "_enter",
                  value: function _enter() {
                    var _this9 = this;
                    if (this._isShown() || this._isHovered) {
                      this._isHovered = true;
                      return;
                    }
                    this._isHovered = true;
                    this._setTimeout(function () {
                      if (_this9._isHovered) {
                        _this9.show();
                      }
                    }, this._config.delay.show);
                  }
                }, {
                  key: "_leave",
                  value: function _leave() {
                    var _this10 = this;
                    if (this._isWithActiveTrigger()) {
                      return;
                    }
                    this._isHovered = false;
                    this._setTimeout(function () {
                      if (!_this10._isHovered) {
                        _this10.hide();
                      }
                    }, this._config.delay.hide);
                  }
                }, {
                  key: "_setTimeout",
                  value: function _setTimeout(handler, timeout) {
                    clearTimeout(this._timeout);
                    this._timeout = setTimeout(handler, timeout);
                  }
                }, {
                  key: "_isWithActiveTrigger",
                  value: function _isWithActiveTrigger() {
                    return Object.values(this._activeTrigger).includes(true);
                  }
                }, {
                  key: "_getConfig",
                  value: function _getConfig(config) {
                    var dataAttributes = Manipulator.getDataAttributes(this._element);
                    for (var _i4 = 0, _Object$keys = Object.keys(dataAttributes); _i4 < _Object$keys.length; _i4++) {
                      var dataAttribute = _Object$keys[_i4];
                      if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
                        delete dataAttributes[dataAttribute];
                      }
                    }
                    config = _objectSpread(_objectSpread({}, dataAttributes), _typeof(config) === 'object' && config ? config : {});
                    config = this._mergeConfigObj(config);
                    config = this._configAfterMerge(config);
                    this._typeCheckConfig(config);
                    return config;
                  }
                }, {
                  key: "_configAfterMerge",
                  value: function _configAfterMerge(config) {
                    config.container = config.container === false ? document.body : index_js.getElement(config.container);
                    if (typeof config.delay === 'number') {
                      config.delay = {
                        show: config.delay,
                        hide: config.delay
                      };
                    }
                    if (typeof config.title === 'number') {
                      config.title = config.title.toString();
                    }
                    if (typeof config.content === 'number') {
                      config.content = config.content.toString();
                    }
                    return config;
                  }
                }, {
                  key: "_getDelegateConfig",
                  value: function _getDelegateConfig() {
                    var config = {};
                    for (var _i5 = 0, _Object$entries3 = Object.entries(this._config); _i5 < _Object$entries3.length; _i5++) {
                      var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i5], 2),
                        key = _Object$entries3$_i[0],
                        value = _Object$entries3$_i[1];
                      if (this.constructor.Default[key] !== value) {
                        config[key] = value;
                      }
                    }
                    config.selector = false;
                    config.trigger = 'manual';

                    // In the future can be replaced with:
                    // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
                    // `Object.fromEntries(keysWithDifferentValues)`
                    return config;
                  }
                }, {
                  key: "_disposePopper",
                  value: function _disposePopper() {
                    if (this._popper) {
                      this._popper.destroy();
                      this._popper = null;
                    }
                    if (this.tip) {
                      this.tip.remove();
                      this.tip = null;
                    }
                  }

                  // Static
                }], [{
                  key: "Default",
                  get: function get() {
                    return Default;
                  }
                }, {
                  key: "DefaultType",
                  get: function get() {
                    return DefaultType;
                  }
                }, {
                  key: "NAME",
                  get: function get() {
                    return NAME;
                  }
                }, {
                  key: "jQueryInterface",
                  value: function jQueryInterface(config) {
                    return this.each(function () {
                      var data = Tooltip.getOrCreateInstance(this, config);
                      if (typeof config !== 'string') {
                        return;
                      }
                      if (typeof data[config] === 'undefined') {
                        throw new TypeError("No method named \"".concat(config, "\""));
                      }
                      data[config]();
                    });
                  }
                }]);
              }(BaseComponent);
              /**
               * jQuery
               */
              index_js.defineJQueryPlugin(Tooltip);
              return Tooltip;
            });
          })(tooltip);
          return tooltip.exports;
        }

        /*!
          * Bootstrap popover.js v5.3.3 (https://getbootstrap.com/)
          * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
          * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
          */

        (function (module, exports) {
          (function (global, factory) {
            module.exports = factory(requireTooltip(), requireUtil());
          })(commonjsGlobal, function (Tooltip, index_js) {
            /**
             * --------------------------------------------------------------------------
             * Bootstrap popover.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */

            /**
             * Constants
             */

            var NAME = 'popover';
            var SELECTOR_TITLE = '.popover-header';
            var SELECTOR_CONTENT = '.popover-body';
            var Default = _objectSpread(_objectSpread({}, Tooltip.Default), {}, {
              content: '',
              offset: [0, 8],
              placement: 'right',
              template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>',
              trigger: 'click'
            });
            var DefaultType = _objectSpread(_objectSpread({}, Tooltip.DefaultType), {}, {
              content: '(null|string|element|function)'
            });

            /**
             * Class definition
             */
            var Popover = /*#__PURE__*/function (_Tooltip) {
              function Popover() {
                _classCallCheck(this, Popover);
                return _callSuper(this, Popover, arguments);
              }
              _inherits(Popover, _Tooltip);
              return _createClass(Popover, [{
                key: "_isWithContent",
                value:
                // Overrides
                function _isWithContent() {
                  return this._getTitle() || this._getContent();
                }

                // Private
              }, {
                key: "_getContentForTemplate",
                value: function _getContentForTemplate() {
                  return _defineProperty(_defineProperty({}, SELECTOR_TITLE, this._getTitle()), SELECTOR_CONTENT, this._getContent());
                }
              }, {
                key: "_getContent",
                value: function _getContent() {
                  return this._resolvePossibleFunction(this._config.content);
                }

                // Static
              }], [{
                key: "Default",
                get:
                // Getters
                function get() {
                  return Default;
                }
              }, {
                key: "DefaultType",
                get: function get() {
                  return DefaultType;
                }
              }, {
                key: "NAME",
                get: function get() {
                  return NAME;
                }
              }, {
                key: "jQueryInterface",
                value: function jQueryInterface(config) {
                  return this.each(function () {
                    var data = Popover.getOrCreateInstance(this, config);
                    if (typeof config !== 'string') {
                      return;
                    }
                    if (typeof data[config] === 'undefined') {
                      throw new TypeError("No method named \"".concat(config, "\""));
                    }
                    data[config]();
                  });
                }
              }]);
            }(Tooltip);
            /**
             * jQuery
             */
            index_js.defineJQueryPlugin(Popover);
            return Popover;
          });
        })(popover);
        var popoverExports = popover.exports;
        var BootStrapPopover = /*@__PURE__*/getDefaultExportFromCjs(popoverExports);

        /* unplugin-vue-components disabled */

        var _sfc_main$1 = {
          __name: 'SearchBox',
          props: {
            "modelValue": {
              type: String,
              "default": ""
            },
            "modelModifiers": {}
          },
          emits: ["update:modelValue"],
          setup: function setup(__props) {
            var model = useModel(__props, "modelValue");
            var inputRef = ref(null);
            var onGlobalKeyPress = function onGlobalKeyPress(e) {
              if (e.key === "/" && document.activeElement !== inputRef.value) {
                e.preventDefault();
                inputRef.value.focus();
              }
            };
            onMounted(function () {
              window.addEventListener("keypress", onGlobalKeyPress);
            });
            onBeforeUnmount(function () {
              window.removeEventListener("keypress", onGlobalKeyPress);
            });
            return function (_ctx, _cache) {
              return withDirectives((openBlock(), createElementBlock("input", {
                type: "search",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
                  return model.value = $event;
                }),
                ref_key: "inputRef",
                ref: inputRef,
                placeholder: "按 / 搜索",
                autocomplete: "off",
                "class": "ms-auto d-inline-flex align-self-center d-bs3-none"
              }, null, 512)), [[vModelText, model.value]]);
            };
          }
        };
        var SearchBox = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId', "data-v-260108a9"]]);

        /* unplugin-vue-components disabled */

        var _withScopeId = function _withScopeId(n) {
          return pushScopeId("data-v-10cb6052"), n = n(), popScopeId(), n;
        };
        var _hoisted_1 = {
          "class": "flex-row d-flex"
        };
        var _hoisted_2 = /*#__PURE__*/_withScopeId(function () {
          return /*#__PURE__*/createBaseVNode("h3", {
            id: "mirror-title",
            "class": "align-self-center"
          }, [/*#__PURE__*/createBaseVNode("svg", {
            "class": "icon"
          }, [/*#__PURE__*/createBaseVNode("use", {
            "xlink:href": "#fas.fa-cube"
          })]), /*#__PURE__*/createTextVNode(" 镜像列表 ")], -1);
        });
        var _hoisted_3 = {
          key: 0,
          "class": "table row table-hover"
        };
        var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
          return /*#__PURE__*/createBaseVNode("thead", null, [/*#__PURE__*/createBaseVNode("tr", {
            "class": "row"
          }, [/*#__PURE__*/createBaseVNode("th", {
            "class": "col-8 col-lg-7 col-xl-8"
          }, "Name"), /*#__PURE__*/createBaseVNode("th", {
            "class": "col-4 col-lg-5 col-xl-4"
          }, "Last Update")])], -1);
        });
        var _hoisted_5 = {
          "class": "table-group-divider"
        };
        var _hoisted_6 = {
          "class": "col-8 col-lg-7 col-xl-8"
        };
        var _hoisted_7 = ["data-bs-content", "href", "aria-label"];
        var _hoisted_8 = {
          key: 0,
          "class": "badge badge-new"
        };
        var _hoisted_9 = ["href"];
        var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
          return /*#__PURE__*/createBaseVNode("i", {
            "aria-hidden": "true",
            "class": "question-circle",
            title: "Help"
          }, [/*#__PURE__*/createBaseVNode("svg", {
            "class": "icon"
          }, [/*#__PURE__*/createBaseVNode("use", {
            "xlink:href": "#fas.fa-circle-question"
          })])], -1);
        });
        var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
          return /*#__PURE__*/createBaseVNode("span", {
            "class": "visually-hidden"
          }, "[Help]", -1);
        });
        var _hoisted_12 = [_hoisted_10, _hoisted_11];
        var _hoisted_13 = {
          key: 2,
          href: "javascript:void(0)"
        };
        var _hoisted_14 = /*#__PURE__*/_withScopeId(function () {
          return /*#__PURE__*/createBaseVNode("i", {
            "aria-hidden": "true",
            title: "GitHub Release"
          }, [/*#__PURE__*/createBaseVNode("svg", {
            "class": "icon"
          }, [/*#__PURE__*/createBaseVNode("use", {
            "xlink:href": "#fab.fa-github"
          })])], -1);
        });
        var _hoisted_15 = /*#__PURE__*/_withScopeId(function () {
          return /*#__PURE__*/createBaseVNode("span", {
            "class": "visually-hidden"
          }, "[GitHub Release]", -1);
        });
        var _hoisted_16 = [_hoisted_14, _hoisted_15];
        var _hoisted_17 = {
          "class": "col-4 col-lg-5 col-xl-4"
        };
        var _hoisted_18 = {
          key: 1,
          "class": "sk-wave"
        };
        var _hoisted_19 = /*#__PURE__*/createStaticVNode("<div class=\"sk-rect sk-rect1\" data-v-10cb6052></div><div class=\"sk-rect sk-rect2\" data-v-10cb6052></div><div class=\"sk-rect sk-rect3\" data-v-10cb6052></div><div class=\"sk-rect sk-rect4\" data-v-10cb6052></div><div class=\"sk-rect sk-rect5\" data-v-10cb6052></div>", 5);
        var _hoisted_24 = [_hoisted_19];
        var _sfc_main = {
          __name: 'MainMirrorList',
          setup: function setup(__props) {
            var _processingHandlers = processingHandlers(options),
              unlisted = _processingHandlers.unlistedMirrors,
              genMainMirrorList = _processingHandlers.genMainMirrorList;
            var rawMirrorList = useMirrorList(unlisted);
            var mirrorList = computed(function () {
              return genMainMirrorList(rawMirrorList.value, HelpPages);
            });
            var filter = ref("");
            var filteredMirrorList = computed(function () {
              var filterText = filter.value.toLowerCase();
              return mirrorList.value.filter(function (m) {
                return m.is_master && m.name.toLowerCase().indexOf(filterText) !== -1;
              });
            });
            var vWithPopover = {
              mounted: function mounted(el) {
                BootStrapPopover.getOrCreateInstance(el);
              },
              beforeUnmount: function beforeUnmount(el) {
                var _BootStrapPopover$get;
                (_BootStrapPopover$get = BootStrapPopover.getInstance(el)) === null || _BootStrapPopover$get === void 0 || _BootStrapPopover$get.dispose();
              }
            };
            return function (_ctx, _cache) {
              return openBlock(), createElementBlock(Fragment, null, [createBaseVNode("div", _hoisted_1, [_hoisted_2, createVNode(SearchBox, {
                modelValue: filter.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
                  return filter.value = $event;
                })
              }, null, 8, ["modelValue"])]), mirrorList.value.length ? (openBlock(), createElementBlock("table", _hoisted_3, [_hoisted_4, createBaseVNode("tbody", _hoisted_5, [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredMirrorList.value, function (mir) {
                return openBlock(), createElementBlock("tr", {
                  "class": normalizeClass(['row', 'status-' + mir.status]),
                  key: mir.name
                }, [createBaseVNode("td", _hoisted_6, [withDirectives((openBlock(), createElementBlock("a", {
                  "class": "mirror-item-label",
                  "data-bs-toggle": "popover",
                  "data-bs-trigger": "hover",
                  "data-bs-placement": "right",
                  "data-bs-content": mir.description,
                  href: mir.url,
                  "aria-label": mir.name + (mir.description ? ', ' + mir.description : '')
                }, [createTextVNode(toDisplayString(mir.name), 1)], 8, _hoisted_7)), [[vWithPopover]]), mir.is_new ? (openBlock(), createElementBlock("span", _hoisted_8, "new")) : createCommentVNode("", true), mir.help_url ? (openBlock(), createElementBlock("a", {
                  key: 1,
                  href: mir.help_url
                }, _hoisted_12, 8, _hoisted_9)) : createCommentVNode("", true), mir.github_release ? (openBlock(), createElementBlock("a", _hoisted_13, _hoisted_16)) : createCommentVNode("", true)]), createBaseVNode("td", _hoisted_17, [createVNode(__unplugin_components_0, {
                  mir: mir
                }, null, 8, ["mir"])])], 2);
              }), 128))])])) : (openBlock(), createElementBlock("div", _hoisted_18, _hoisted_24))], 64);
            };
          }
        };
        var MainMirrorList = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId', "data-v-10cb6052"]]);
        var modal = {
          exports: {}
        };
        var backdrop = {
          exports: {}
        };

        /*!
          * Bootstrap backdrop.js v5.3.3 (https://getbootstrap.com/)
          * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
          * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
          */

        var hasRequiredBackdrop;
        function requireBackdrop() {
          if (hasRequiredBackdrop) return backdrop.exports;
          hasRequiredBackdrop = 1;
          (function (module, exports) {
            (function (global, factory) {
              module.exports = factory(requireEventHandler(), requireConfig(), requireUtil());
            })(commonjsGlobal, function (EventHandler, Config, index_js) {
              /**
               * --------------------------------------------------------------------------
               * Bootstrap util/backdrop.js
               * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
               * --------------------------------------------------------------------------
               */

              /**
               * Constants
               */

              var NAME = 'backdrop';
              var CLASS_NAME_FADE = 'fade';
              var CLASS_NAME_SHOW = 'show';
              var EVENT_MOUSEDOWN = "mousedown.bs.".concat(NAME);
              var Default = {
                className: 'modal-backdrop',
                clickCallback: null,
                isAnimated: false,
                isVisible: true,
                // if false, we use the backdrop helper without adding any element to the dom
                rootElement: 'body' // give the choice to place backdrop under different elements
              };
              var DefaultType = {
                className: 'string',
                clickCallback: '(function|null)',
                isAnimated: 'boolean',
                isVisible: 'boolean',
                rootElement: '(element|string)'
              };

              /**
               * Class definition
               */
              var Backdrop = /*#__PURE__*/function (_Config2) {
                function Backdrop(config) {
                  var _this11;
                  _classCallCheck(this, Backdrop);
                  _this11 = _callSuper(this, Backdrop);
                  _this11._config = _this11._getConfig(config);
                  _this11._isAppended = false;
                  _this11._element = null;
                  return _this11;
                }

                // Getters
                _inherits(Backdrop, _Config2);
                return _createClass(Backdrop, [{
                  key: "show",
                  value:
                  // Public
                  function show(callback) {
                    if (!this._config.isVisible) {
                      index_js.execute(callback);
                      return;
                    }
                    this._append();
                    var element = this._getElement();
                    if (this._config.isAnimated) {
                      index_js.reflow(element);
                    }
                    element.classList.add(CLASS_NAME_SHOW);
                    this._emulateAnimation(function () {
                      index_js.execute(callback);
                    });
                  }
                }, {
                  key: "hide",
                  value: function hide(callback) {
                    var _this12 = this;
                    if (!this._config.isVisible) {
                      index_js.execute(callback);
                      return;
                    }
                    this._getElement().classList.remove(CLASS_NAME_SHOW);
                    this._emulateAnimation(function () {
                      _this12.dispose();
                      index_js.execute(callback);
                    });
                  }
                }, {
                  key: "dispose",
                  value: function dispose() {
                    if (!this._isAppended) {
                      return;
                    }
                    EventHandler.off(this._element, EVENT_MOUSEDOWN);
                    this._element.remove();
                    this._isAppended = false;
                  }

                  // Private
                }, {
                  key: "_getElement",
                  value: function _getElement() {
                    if (!this._element) {
                      var _backdrop = document.createElement('div');
                      _backdrop.className = this._config.className;
                      if (this._config.isAnimated) {
                        _backdrop.classList.add(CLASS_NAME_FADE);
                      }
                      this._element = _backdrop;
                    }
                    return this._element;
                  }
                }, {
                  key: "_configAfterMerge",
                  value: function _configAfterMerge(config) {
                    // use getElement() with the default "body" to get a fresh Element on each instantiation
                    config.rootElement = index_js.getElement(config.rootElement);
                    return config;
                  }
                }, {
                  key: "_append",
                  value: function _append() {
                    var _this13 = this;
                    if (this._isAppended) {
                      return;
                    }
                    var element = this._getElement();
                    this._config.rootElement.append(element);
                    EventHandler.on(element, EVENT_MOUSEDOWN, function () {
                      index_js.execute(_this13._config.clickCallback);
                    });
                    this._isAppended = true;
                  }
                }, {
                  key: "_emulateAnimation",
                  value: function _emulateAnimation(callback) {
                    index_js.executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
                  }
                }], [{
                  key: "Default",
                  get: function get() {
                    return Default;
                  }
                }, {
                  key: "DefaultType",
                  get: function get() {
                    return DefaultType;
                  }
                }, {
                  key: "NAME",
                  get: function get() {
                    return NAME;
                  }
                }]);
              }(Config);
              return Backdrop;
            });
          })(backdrop);
          return backdrop.exports;
        }
        var componentFunctions = {
          exports: {}
        };

        /*!
          * Bootstrap component-functions.js v5.3.3 (https://getbootstrap.com/)
          * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
          * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
          */

        var hasRequiredComponentFunctions;
        function requireComponentFunctions() {
          if (hasRequiredComponentFunctions) return componentFunctions.exports;
          hasRequiredComponentFunctions = 1;
          (function (module, exports) {
            (function (global, factory) {
              factory(exports, requireEventHandler(), requireSelectorEngine(), requireUtil());
            })(commonjsGlobal, function (exports, EventHandler, SelectorEngine, index_js) {
              /**
               * --------------------------------------------------------------------------
               * Bootstrap util/component-functions.js
               * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
               * --------------------------------------------------------------------------
               */

              var enableDismissTrigger = function enableDismissTrigger(component) {
                var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'hide';
                var clickEvent = "click.dismiss".concat(component.EVENT_KEY);
                var name = component.NAME;
                EventHandler.on(document, clickEvent, "[data-bs-dismiss=\"".concat(name, "\"]"), function (event) {
                  if (['A', 'AREA'].includes(this.tagName)) {
                    event.preventDefault();
                  }
                  if (index_js.isDisabled(this)) {
                    return;
                  }
                  var target = SelectorEngine.getElementFromSelector(this) || this.closest(".".concat(name));
                  var instance = component.getOrCreateInstance(target);

                  // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
                  instance[method]();
                });
              };
              exports.enableDismissTrigger = enableDismissTrigger;
              Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
              });
            });
          })(componentFunctions, componentFunctions.exports);
          return componentFunctions.exports;
        }
        var focustrap = {
          exports: {}
        };

        /*!
          * Bootstrap focustrap.js v5.3.3 (https://getbootstrap.com/)
          * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
          * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
          */

        var hasRequiredFocustrap;
        function requireFocustrap() {
          if (hasRequiredFocustrap) return focustrap.exports;
          hasRequiredFocustrap = 1;
          (function (module, exports) {
            (function (global, factory) {
              module.exports = factory(requireEventHandler(), requireSelectorEngine(), requireConfig());
            })(commonjsGlobal, function (EventHandler, SelectorEngine, Config) {
              /**
               * --------------------------------------------------------------------------
               * Bootstrap util/focustrap.js
               * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
               * --------------------------------------------------------------------------
               */

              /**
               * Constants
               */

              var NAME = 'focustrap';
              var DATA_KEY = 'bs.focustrap';
              var EVENT_KEY = ".".concat(DATA_KEY);
              var EVENT_FOCUSIN = "focusin".concat(EVENT_KEY);
              var EVENT_KEYDOWN_TAB = "keydown.tab".concat(EVENT_KEY);
              var TAB_KEY = 'Tab';
              var TAB_NAV_FORWARD = 'forward';
              var TAB_NAV_BACKWARD = 'backward';
              var Default = {
                autofocus: true,
                trapElement: null // The element to trap focus inside of
              };
              var DefaultType = {
                autofocus: 'boolean',
                trapElement: 'element'
              };

              /**
               * Class definition
               */
              var FocusTrap = /*#__PURE__*/function (_Config3) {
                function FocusTrap(config) {
                  var _this14;
                  _classCallCheck(this, FocusTrap);
                  _this14 = _callSuper(this, FocusTrap);
                  _this14._config = _this14._getConfig(config);
                  _this14._isActive = false;
                  _this14._lastTabNavDirection = null;
                  return _this14;
                }

                // Getters
                _inherits(FocusTrap, _Config3);
                return _createClass(FocusTrap, [{
                  key: "activate",
                  value:
                  // Public
                  function activate() {
                    var _this15 = this;
                    if (this._isActive) {
                      return;
                    }
                    if (this._config.autofocus) {
                      this._config.trapElement.focus();
                    }
                    EventHandler.off(document, EVENT_KEY); // guard against infinite focus loop
                    EventHandler.on(document, EVENT_FOCUSIN, function (event) {
                      return _this15._handleFocusin(event);
                    });
                    EventHandler.on(document, EVENT_KEYDOWN_TAB, function (event) {
                      return _this15._handleKeydown(event);
                    });
                    this._isActive = true;
                  }
                }, {
                  key: "deactivate",
                  value: function deactivate() {
                    if (!this._isActive) {
                      return;
                    }
                    this._isActive = false;
                    EventHandler.off(document, EVENT_KEY);
                  }

                  // Private
                }, {
                  key: "_handleFocusin",
                  value: function _handleFocusin(event) {
                    var trapElement = this._config.trapElement;
                    if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
                      return;
                    }
                    var elements = SelectorEngine.focusableChildren(trapElement);
                    if (elements.length === 0) {
                      trapElement.focus();
                    } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
                      elements[elements.length - 1].focus();
                    } else {
                      elements[0].focus();
                    }
                  }
                }, {
                  key: "_handleKeydown",
                  value: function _handleKeydown(event) {
                    if (event.key !== TAB_KEY) {
                      return;
                    }
                    this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
                  }
                }], [{
                  key: "Default",
                  get: function get() {
                    return Default;
                  }
                }, {
                  key: "DefaultType",
                  get: function get() {
                    return DefaultType;
                  }
                }, {
                  key: "NAME",
                  get: function get() {
                    return NAME;
                  }
                }]);
              }(Config);
              return FocusTrap;
            });
          })(focustrap);
          return focustrap.exports;
        }
        var scrollbar = {
          exports: {}
        };

        /*!
          * Bootstrap scrollbar.js v5.3.3 (https://getbootstrap.com/)
          * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
          * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
          */

        var hasRequiredScrollbar;
        function requireScrollbar() {
          if (hasRequiredScrollbar) return scrollbar.exports;
          hasRequiredScrollbar = 1;
          (function (module, exports) {
            (function (global, factory) {
              module.exports = factory(requireManipulator(), requireSelectorEngine(), requireUtil());
            })(commonjsGlobal, function (Manipulator, SelectorEngine, index_js) {
              /**
               * --------------------------------------------------------------------------
               * Bootstrap util/scrollBar.js
               * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
               * --------------------------------------------------------------------------
               */

              /**
               * Constants
               */

              var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
              var SELECTOR_STICKY_CONTENT = '.sticky-top';
              var PROPERTY_PADDING = 'padding-right';
              var PROPERTY_MARGIN = 'margin-right';

              /**
               * Class definition
               */
              var ScrollBarHelper = /*#__PURE__*/function () {
                function ScrollBarHelper() {
                  _classCallCheck(this, ScrollBarHelper);
                  this._element = document.body;
                }

                // Public
                return _createClass(ScrollBarHelper, [{
                  key: "getWidth",
                  value: function getWidth() {
                    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
                    var documentWidth = document.documentElement.clientWidth;
                    return Math.abs(window.innerWidth - documentWidth);
                  }
                }, {
                  key: "hide",
                  value: function hide() {
                    var width = this.getWidth();
                    this._disableOverFlow();
                    // give padding to element to balance the hidden scrollbar width
                    this._setElementAttributes(this._element, PROPERTY_PADDING, function (calculatedValue) {
                      return calculatedValue + width;
                    });
                    // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
                    this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, function (calculatedValue) {
                      return calculatedValue + width;
                    });
                    this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, function (calculatedValue) {
                      return calculatedValue - width;
                    });
                  }
                }, {
                  key: "reset",
                  value: function reset() {
                    this._resetElementAttributes(this._element, 'overflow');
                    this._resetElementAttributes(this._element, PROPERTY_PADDING);
                    this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
                    this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
                  }
                }, {
                  key: "isOverflowing",
                  value: function isOverflowing() {
                    return this.getWidth() > 0;
                  }

                  // Private
                }, {
                  key: "_disableOverFlow",
                  value: function _disableOverFlow() {
                    this._saveInitialAttribute(this._element, 'overflow');
                    this._element.style.overflow = 'hidden';
                  }
                }, {
                  key: "_setElementAttributes",
                  value: function _setElementAttributes(selector, styleProperty, callback) {
                    var _this16 = this;
                    var scrollbarWidth = this.getWidth();
                    var manipulationCallBack = function manipulationCallBack(element) {
                      if (element !== _this16._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
                        return;
                      }
                      _this16._saveInitialAttribute(element, styleProperty);
                      var calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
                      element.style.setProperty(styleProperty, "".concat(callback(Number.parseFloat(calculatedValue)), "px"));
                    };
                    this._applyManipulationCallback(selector, manipulationCallBack);
                  }
                }, {
                  key: "_saveInitialAttribute",
                  value: function _saveInitialAttribute(element, styleProperty) {
                    var actualValue = element.style.getPropertyValue(styleProperty);
                    if (actualValue) {
                      Manipulator.setDataAttribute(element, styleProperty, actualValue);
                    }
                  }
                }, {
                  key: "_resetElementAttributes",
                  value: function _resetElementAttributes(selector, styleProperty) {
                    var manipulationCallBack = function manipulationCallBack(element) {
                      var value = Manipulator.getDataAttribute(element, styleProperty);
                      // We only want to remove the property if the value is `null`; the value can also be zero
                      if (value === null) {
                        element.style.removeProperty(styleProperty);
                        return;
                      }
                      Manipulator.removeDataAttribute(element, styleProperty);
                      element.style.setProperty(styleProperty, value);
                    };
                    this._applyManipulationCallback(selector, manipulationCallBack);
                  }
                }, {
                  key: "_applyManipulationCallback",
                  value: function _applyManipulationCallback(selector, callBack) {
                    if (index_js.isElement(selector)) {
                      callBack(selector);
                      return;
                    }
                    var _iterator6 = _createForOfIteratorHelper(SelectorEngine.find(selector, this._element)),
                      _step6;
                    try {
                      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                        var sel = _step6.value;
                        callBack(sel);
                      }
                    } catch (err) {
                      _iterator6.e(err);
                    } finally {
                      _iterator6.f();
                    }
                  }
                }]);
              }();
              return ScrollBarHelper;
            });
          })(scrollbar);
          return scrollbar.exports;
        }

        /*!
          * Bootstrap modal.js v5.3.3 (https://getbootstrap.com/)
          * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
          * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
          */

        (function (module, exports) {
          (function (global, factory) {
            module.exports = factory(requireBaseComponent(), requireEventHandler(), requireSelectorEngine(), requireBackdrop(), requireComponentFunctions(), requireFocustrap(), requireUtil(), requireScrollbar());
          })(commonjsGlobal, function (BaseComponent, EventHandler, SelectorEngine, Backdrop, componentFunctions_js, FocusTrap, index_js, ScrollBarHelper) {
            /**
             * --------------------------------------------------------------------------
             * Bootstrap modal.js
             * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
             * --------------------------------------------------------------------------
             */

            /**
             * Constants
             */

            var NAME = 'modal';
            var DATA_KEY = 'bs.modal';
            var EVENT_KEY = ".".concat(DATA_KEY);
            var DATA_API_KEY = '.data-api';
            var ESCAPE_KEY = 'Escape';
            var EVENT_HIDE = "hide".concat(EVENT_KEY);
            var EVENT_HIDE_PREVENTED = "hidePrevented".concat(EVENT_KEY);
            var EVENT_HIDDEN = "hidden".concat(EVENT_KEY);
            var EVENT_SHOW = "show".concat(EVENT_KEY);
            var EVENT_SHOWN = "shown".concat(EVENT_KEY);
            var EVENT_RESIZE = "resize".concat(EVENT_KEY);
            var EVENT_CLICK_DISMISS = "click.dismiss".concat(EVENT_KEY);
            var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss".concat(EVENT_KEY);
            var EVENT_KEYDOWN_DISMISS = "keydown.dismiss".concat(EVENT_KEY);
            var EVENT_CLICK_DATA_API = "click".concat(EVENT_KEY).concat(DATA_API_KEY);
            var CLASS_NAME_OPEN = 'modal-open';
            var CLASS_NAME_FADE = 'fade';
            var CLASS_NAME_SHOW = 'show';
            var CLASS_NAME_STATIC = 'modal-static';
            var OPEN_SELECTOR = '.modal.show';
            var SELECTOR_DIALOG = '.modal-dialog';
            var SELECTOR_MODAL_BODY = '.modal-body';
            var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="modal"]';
            var Default = {
              backdrop: true,
              focus: true,
              keyboard: true
            };
            var DefaultType = {
              backdrop: '(boolean|string)',
              focus: 'boolean',
              keyboard: 'boolean'
            };

            /**
             * Class definition
             */
            var Modal = /*#__PURE__*/function (_BaseComponent2) {
              function Modal(element, config) {
                var _this17;
                _classCallCheck(this, Modal);
                _this17 = _callSuper(this, Modal, [element, config]);
                _this17._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, _this17._element);
                _this17._backdrop = _this17._initializeBackDrop();
                _this17._focustrap = _this17._initializeFocusTrap();
                _this17._isShown = false;
                _this17._isTransitioning = false;
                _this17._scrollBar = new ScrollBarHelper();
                _this17._addEventListeners();
                return _this17;
              }

              // Getters
              _inherits(Modal, _BaseComponent2);
              return _createClass(Modal, [{
                key: "toggle",
                value:
                // Public
                function toggle(relatedTarget) {
                  return this._isShown ? this.hide() : this.show(relatedTarget);
                }
              }, {
                key: "show",
                value: function show(relatedTarget) {
                  var _this18 = this;
                  if (this._isShown || this._isTransitioning) {
                    return;
                  }
                  var showEvent = EventHandler.trigger(this._element, EVENT_SHOW, {
                    relatedTarget: relatedTarget
                  });
                  if (showEvent.defaultPrevented) {
                    return;
                  }
                  this._isShown = true;
                  this._isTransitioning = true;
                  this._scrollBar.hide();
                  document.body.classList.add(CLASS_NAME_OPEN);
                  this._adjustDialog();
                  this._backdrop.show(function () {
                    return _this18._showElement(relatedTarget);
                  });
                }
              }, {
                key: "hide",
                value: function hide() {
                  var _this19 = this;
                  if (!this._isShown || this._isTransitioning) {
                    return;
                  }
                  var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
                  if (hideEvent.defaultPrevented) {
                    return;
                  }
                  this._isShown = false;
                  this._isTransitioning = true;
                  this._focustrap.deactivate();
                  this._element.classList.remove(CLASS_NAME_SHOW);
                  this._queueCallback(function () {
                    return _this19._hideModal();
                  }, this._element, this._isAnimated());
                }
              }, {
                key: "dispose",
                value: function dispose() {
                  EventHandler.off(window, EVENT_KEY);
                  EventHandler.off(this._dialog, EVENT_KEY);
                  this._backdrop.dispose();
                  this._focustrap.deactivate();
                  _get(_getPrototypeOf(Modal.prototype), "dispose", this).call(this);
                }
              }, {
                key: "handleUpdate",
                value: function handleUpdate() {
                  this._adjustDialog();
                }

                // Private
              }, {
                key: "_initializeBackDrop",
                value: function _initializeBackDrop() {
                  return new Backdrop({
                    isVisible: Boolean(this._config.backdrop),
                    // 'static' option will be translated to true, and booleans will keep their value,
                    isAnimated: this._isAnimated()
                  });
                }
              }, {
                key: "_initializeFocusTrap",
                value: function _initializeFocusTrap() {
                  return new FocusTrap({
                    trapElement: this._element
                  });
                }
              }, {
                key: "_showElement",
                value: function _showElement(relatedTarget) {
                  var _this20 = this;
                  // try to append dynamic modal
                  if (!document.body.contains(this._element)) {
                    document.body.append(this._element);
                  }
                  this._element.style.display = 'block';
                  this._element.removeAttribute('aria-hidden');
                  this._element.setAttribute('aria-modal', true);
                  this._element.setAttribute('role', 'dialog');
                  this._element.scrollTop = 0;
                  var modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
                  if (modalBody) {
                    modalBody.scrollTop = 0;
                  }
                  index_js.reflow(this._element);
                  this._element.classList.add(CLASS_NAME_SHOW);
                  var transitionComplete = function transitionComplete() {
                    if (_this20._config.focus) {
                      _this20._focustrap.activate();
                    }
                    _this20._isTransitioning = false;
                    EventHandler.trigger(_this20._element, EVENT_SHOWN, {
                      relatedTarget: relatedTarget
                    });
                  };
                  this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
                }
              }, {
                key: "_addEventListeners",
                value: function _addEventListeners() {
                  var _this21 = this;
                  EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, function (event) {
                    if (event.key !== ESCAPE_KEY) {
                      return;
                    }
                    if (_this21._config.keyboard) {
                      _this21.hide();
                      return;
                    }
                    _this21._triggerBackdropTransition();
                  });
                  EventHandler.on(window, EVENT_RESIZE, function () {
                    if (_this21._isShown && !_this21._isTransitioning) {
                      _this21._adjustDialog();
                    }
                  });
                  EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, function (event) {
                    // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
                    EventHandler.one(_this21._element, EVENT_CLICK_DISMISS, function (event2) {
                      if (_this21._element !== event.target || _this21._element !== event2.target) {
                        return;
                      }
                      if (_this21._config.backdrop === 'static') {
                        _this21._triggerBackdropTransition();
                        return;
                      }
                      if (_this21._config.backdrop) {
                        _this21.hide();
                      }
                    });
                  });
                }
              }, {
                key: "_hideModal",
                value: function _hideModal() {
                  var _this22 = this;
                  this._element.style.display = 'none';
                  this._element.setAttribute('aria-hidden', true);
                  this._element.removeAttribute('aria-modal');
                  this._element.removeAttribute('role');
                  this._isTransitioning = false;
                  this._backdrop.hide(function () {
                    document.body.classList.remove(CLASS_NAME_OPEN);
                    _this22._resetAdjustments();
                    _this22._scrollBar.reset();
                    EventHandler.trigger(_this22._element, EVENT_HIDDEN);
                  });
                }
              }, {
                key: "_isAnimated",
                value: function _isAnimated() {
                  return this._element.classList.contains(CLASS_NAME_FADE);
                }
              }, {
                key: "_triggerBackdropTransition",
                value: function _triggerBackdropTransition() {
                  var _this23 = this;
                  var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
                  if (hideEvent.defaultPrevented) {
                    return;
                  }
                  var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
                  var initialOverflowY = this._element.style.overflowY;
                  // return if the following background transition hasn't yet completed
                  if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {
                    return;
                  }
                  if (!isModalOverflowing) {
                    this._element.style.overflowY = 'hidden';
                  }
                  this._element.classList.add(CLASS_NAME_STATIC);
                  this._queueCallback(function () {
                    _this23._element.classList.remove(CLASS_NAME_STATIC);
                    _this23._queueCallback(function () {
                      _this23._element.style.overflowY = initialOverflowY;
                    }, _this23._dialog);
                  }, this._dialog);
                  this._element.focus();
                }

                /**
                 * The following methods are used to handle overflowing modals
                 */
              }, {
                key: "_adjustDialog",
                value: function _adjustDialog() {
                  var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
                  var scrollbarWidth = this._scrollBar.getWidth();
                  var isBodyOverflowing = scrollbarWidth > 0;
                  if (isBodyOverflowing && !isModalOverflowing) {
                    var property = index_js.isRTL() ? 'paddingLeft' : 'paddingRight';
                    this._element.style[property] = "".concat(scrollbarWidth, "px");
                  }
                  if (!isBodyOverflowing && isModalOverflowing) {
                    var _property = index_js.isRTL() ? 'paddingRight' : 'paddingLeft';
                    this._element.style[_property] = "".concat(scrollbarWidth, "px");
                  }
                }
              }, {
                key: "_resetAdjustments",
                value: function _resetAdjustments() {
                  this._element.style.paddingLeft = '';
                  this._element.style.paddingRight = '';
                }

                // Static
              }], [{
                key: "Default",
                get: function get() {
                  return Default;
                }
              }, {
                key: "DefaultType",
                get: function get() {
                  return DefaultType;
                }
              }, {
                key: "NAME",
                get: function get() {
                  return NAME;
                }
              }, {
                key: "jQueryInterface",
                value: function jQueryInterface(config, relatedTarget) {
                  return this.each(function () {
                    var data = Modal.getOrCreateInstance(this, config);
                    if (typeof config !== 'string') {
                      return;
                    }
                    if (typeof data[config] === 'undefined') {
                      throw new TypeError("No method named \"".concat(config, "\""));
                    }
                    data[config](relatedTarget);
                  });
                }
              }]);
            }(BaseComponent);
            /**
             * Data API implementation
             */
            EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
              var _this24 = this;
              var target = SelectorEngine.getElementFromSelector(this);
              if (['A', 'AREA'].includes(this.tagName)) {
                event.preventDefault();
              }
              EventHandler.one(target, EVENT_SHOW, function (showEvent) {
                if (showEvent.defaultPrevented) {
                  // only register focus restorer if modal will actually get shown
                  return;
                }
                EventHandler.one(target, EVENT_HIDDEN, function () {
                  if (index_js.isVisible(_this24)) {
                    _this24.focus();
                  }
                });
              });

              // avoid conflict when clicking modal toggler while another one is open
              var alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
              if (alreadyOpen) {
                Modal.getInstance(alreadyOpen).hide();
              }
              var data = Modal.getOrCreateInstance(target);
              data.toggle(this);
            });
            componentFunctions_js.enableDismissTrigger(Modal);

            /**
             * jQuery
             */

            index_js.defineJQueryPlugin(Modal);
            return Modal;
          });
        })(modal);
        var modalExports = modal.exports;
        var BootStrapModal = /*@__PURE__*/getDefaultExportFromCjs(modalExports);
        var empty = createApp(Empty);
        empty.mount("#upgrade-mask");
        var isoModalEl = document.getElementById("isoModal");
        createApp(IsoModal, {
          onReady: function () {
            var _onReady = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    if (window.location.hash.match(/#iso-download(\?.*)?/)) {
                      new BootStrapModal(isoModalEl).show();
                    }
                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            function onReady() {
              return _onReady.apply(this, arguments);
            }
            return onReady;
          }()
        }).mount(isoModalEl);
        createApp(MainMirrorList).mount("#mirror-list");
      }
    };
  });
})();
//# sourceMappingURL=app-legacy-DairmkMN.js.map
