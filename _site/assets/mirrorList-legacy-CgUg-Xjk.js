;
(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
  function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n3 = 0, F = function F() {}; return { s: F, n: function n() { return _n3 >= r.length ? { done: !0 } : { done: !1, value: r[_n3++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  System.register(['./_virtual_jekyll-data-legacy--vWzKqW1.js'], function (exports, module) {
    'use strict';

    var options, TUNASYNC_JSON_PATH;
    return {
      setters: [function (module) {
        options = module.o;
        TUNASYNC_JSON_PATH = module.T;
      }],
      execute: function execute() {
        exports({
          a: createElementBlock,
          b: createBaseVNode,
          d: renderList,
          e: createCommentVNode,
          f: createStaticVNode,
          g: openBlock,
          h: normalizeClass,
          l: createTextVNode,
          m: pushScopeId,
          n: nextTick,
          p: processingHandlers,
          q: popScopeId,
          r: ref,
          u: useModel,
          w: withDirectives,
          x: normalizeStyle,
          y: unref
        });
        var _export_sfc = exports("_", function (sfc, props) {
          var target = sfc.__vccOpts || sfc;
          var _iterator = _createForOfIteratorHelper(props),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _step$value = _slicedToArray(_step.value, 2),
                key = _step$value[0],
                val = _step$value[1];
              target[key] = val;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          return target;
        });

        /**
        * @vue/shared v3.4.21
        * (c) 2018-present Yuxi (Evan) You and Vue contributors
        * @license MIT
        **/
        function makeMap(str, expectsLowerCase) {
          var set = new Set(str.split(","));
          return function (val) {
            return set.has(val);
          };
        }
        var EMPTY_OBJ = {};
        var EMPTY_ARR = [];
        var NOOP = function NOOP() {};
        var NO = function NO() {
          return false;
        };
        var isOn = function isOn(key) {
          return key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && (
          // uppercase letter
          key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
        };
        var isModelListener = function isModelListener(key) {
          return key.startsWith("onUpdate:");
        };
        var extend = Object.assign;
        var remove = function remove(arr, el) {
          var i = arr.indexOf(el);
          if (i > -1) {
            arr.splice(i, 1);
          }
        };
        var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
        var hasOwn = function hasOwn(val, key) {
          return hasOwnProperty$1.call(val, key);
        };
        var isArray = Array.isArray;
        var isMap = function isMap(val) {
          return toTypeString(val) === "[object Map]";
        };
        var isSet = function isSet(val) {
          return toTypeString(val) === "[object Set]";
        };
        var isFunction = function isFunction(val) {
          return typeof val === "function";
        };
        var isString = function isString(val) {
          return typeof val === "string";
        };
        var isSymbol = function isSymbol(val) {
          return _typeof(val) === "symbol";
        };
        var isObject = function isObject(val) {
          return val !== null && _typeof(val) === "object";
        };
        var isPromise = function isPromise(val) {
          return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val["catch"]);
        };
        var objectToString = Object.prototype.toString;
        var toTypeString = function toTypeString(value) {
          return objectToString.call(value);
        };
        var toRawType = function toRawType(value) {
          return toTypeString(value).slice(8, -1);
        };
        var isPlainObject = function isPlainObject(val) {
          return toTypeString(val) === "[object Object]";
        };
        var isIntegerKey = function isIntegerKey(key) {
          return isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
        };
        var isReservedProp = /* @__PURE__ */makeMap(
        // the leading comma is intentional so empty string "" is also included
        ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
        var cacheStringFunction = function cacheStringFunction(fn) {
          var cache = /* @__PURE__ */Object.create(null);
          return function (str) {
            var hit = cache[str];
            return hit || (cache[str] = fn(str));
          };
        };
        var camelizeRE = /-(\w)/g;
        var camelize = cacheStringFunction(function (str) {
          return str.replace(camelizeRE, function (_, c) {
            return c ? c.toUpperCase() : "";
          });
        });
        var hyphenateRE = /\B([A-Z])/g;
        var hyphenate = cacheStringFunction(function (str) {
          return str.replace(hyphenateRE, "-$1").toLowerCase();
        });
        var capitalize = cacheStringFunction(function (str) {
          return str.charAt(0).toUpperCase() + str.slice(1);
        });
        var toHandlerKey = cacheStringFunction(function (str) {
          var s = str ? "on".concat(capitalize(str)) : "";
          return s;
        });
        var hasChanged = function hasChanged(value, oldValue) {
          return !Object.is(value, oldValue);
        };
        var invokeArrayFns = function invokeArrayFns(fns, arg) {
          for (var i = 0; i < fns.length; i++) {
            fns[i](arg);
          }
        };
        var def = function def(obj, key, value) {
          Object.defineProperty(obj, key, {
            configurable: true,
            enumerable: false,
            value: value
          });
        };
        var looseToNumber = function looseToNumber(val) {
          var n = parseFloat(val);
          return isNaN(n) ? val : n;
        };
        var _globalThis;
        var getGlobalThis = function getGlobalThis() {
          return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
        };
        function normalizeStyle(value) {
          if (isArray(value)) {
            var res = {};
            for (var i = 0; i < value.length; i++) {
              var item = value[i];
              var normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
              if (normalized) {
                for (var key in normalized) {
                  res[key] = normalized[key];
                }
              }
            }
            return res;
          } else if (isString(value) || isObject(value)) {
            return value;
          }
        }
        var listDelimiterRE = /;(?![^(]*\))/g;
        var propertyDelimiterRE = /:([^]+)/;
        var styleCommentRE = /\/\*[^]*?\*\//g;
        function parseStringStyle(cssText) {
          var ret = {};
          cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach(function (item) {
            if (item) {
              var tmp = item.split(propertyDelimiterRE);
              tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
            }
          });
          return ret;
        }
        function normalizeClass(value) {
          var res = "";
          if (isString(value)) {
            res = value;
          } else if (isArray(value)) {
            for (var i = 0; i < value.length; i++) {
              var normalized = normalizeClass(value[i]);
              if (normalized) {
                res += normalized + " ";
              }
            }
          } else if (isObject(value)) {
            for (var name in value) {
              if (value[name]) {
                res += name + " ";
              }
            }
          }
          return res.trim();
        }
        var specialBooleanAttrs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
        var isSpecialBooleanAttr = /* @__PURE__ */makeMap(specialBooleanAttrs);
        function includeBooleanAttr(value) {
          return !!value || value === "";
        }
        var toDisplayString = exports("t", function (val) {
          return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
        });
        var replacer = function replacer(_key, val) {
          if (val && val.__v_isRef) {
            return replacer(_key, val.value);
          } else if (isMap(val)) {
            return _defineProperty({}, "Map(".concat(val.size, ")"), _toConsumableArray(val.entries()).reduce(function (entries, _ref, i) {
              var _ref2 = _slicedToArray(_ref, 2),
                key = _ref2[0],
                val2 = _ref2[1];
              entries[stringifySymbol(key, i) + " =>"] = val2;
              return entries;
            }, {}));
          } else if (isSet(val)) {
            return _defineProperty({}, "Set(".concat(val.size, ")"), _toConsumableArray(val.values()).map(function (v) {
              return stringifySymbol(v);
            }));
          } else if (isSymbol(val)) {
            return stringifySymbol(val);
          } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
            return String(val);
          }
          return val;
        };
        var stringifySymbol = function stringifySymbol(v) {
          var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          var _a;
          return isSymbol(v) ? "Symbol(".concat((_a = v.description) != null ? _a : i, ")") : v;
        };

        /**
        * @vue/reactivity v3.4.21
        * (c) 2018-present Yuxi (Evan) You and Vue contributors
        * @license MIT
        **/
        var activeEffectScope;
        var EffectScope = /*#__PURE__*/function () {
          function EffectScope() {
            var detached = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            _classCallCheck(this, EffectScope);
            this.detached = detached;
            this._active = true;
            this.effects = [];
            this.cleanups = [];
            this.parent = activeEffectScope;
            if (!detached && activeEffectScope) {
              this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
            }
          }
          return _createClass(EffectScope, [{
            key: "active",
            get: function get() {
              return this._active;
            }
          }, {
            key: "run",
            value: function run(fn) {
              if (this._active) {
                var currentEffectScope = activeEffectScope;
                try {
                  activeEffectScope = this;
                  return fn();
                } finally {
                  activeEffectScope = currentEffectScope;
                }
              }
            }
            /**
             * This should only be called on non-detached scopes
             * @internal
             */
          }, {
            key: "on",
            value: function on() {
              activeEffectScope = this;
            }
            /**
             * This should only be called on non-detached scopes
             * @internal
             */
          }, {
            key: "off",
            value: function off() {
              activeEffectScope = this.parent;
            }
          }, {
            key: "stop",
            value: function stop(fromParent) {
              if (this._active) {
                var i, l;
                for (i = 0, l = this.effects.length; i < l; i++) {
                  this.effects[i].stop();
                }
                for (i = 0, l = this.cleanups.length; i < l; i++) {
                  this.cleanups[i]();
                }
                if (this.scopes) {
                  for (i = 0, l = this.scopes.length; i < l; i++) {
                    this.scopes[i].stop(true);
                  }
                }
                if (!this.detached && this.parent && !fromParent) {
                  var last = this.parent.scopes.pop();
                  if (last && last !== this) {
                    this.parent.scopes[this.index] = last;
                    last.index = this.index;
                  }
                }
                this.parent = void 0;
                this._active = false;
              }
            }
          }]);
        }();
        function recordEffectScope(effect2) {
          var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : activeEffectScope;
          if (scope && scope.active) {
            scope.effects.push(effect2);
          }
        }
        function getCurrentScope() {
          return activeEffectScope;
        }
        var activeEffect;
        var ReactiveEffect = /*#__PURE__*/function () {
          function ReactiveEffect(fn, trigger2, scheduler, scope) {
            _classCallCheck(this, ReactiveEffect);
            this.fn = fn;
            this.trigger = trigger2;
            this.scheduler = scheduler;
            this.active = true;
            this.deps = [];
            this._dirtyLevel = 4;
            this._trackId = 0;
            this._runnings = 0;
            this._shouldSchedule = false;
            this._depsLength = 0;
            recordEffectScope(this, scope);
          }
          return _createClass(ReactiveEffect, [{
            key: "dirty",
            get: function get() {
              if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
                this._dirtyLevel = 1;
                pauseTracking();
                for (var i = 0; i < this._depsLength; i++) {
                  var dep = this.deps[i];
                  if (dep.computed) {
                    triggerComputed(dep.computed);
                    if (this._dirtyLevel >= 4) {
                      break;
                    }
                  }
                }
                if (this._dirtyLevel === 1) {
                  this._dirtyLevel = 0;
                }
                resetTracking();
              }
              return this._dirtyLevel >= 4;
            },
            set: function set(v) {
              this._dirtyLevel = v ? 4 : 0;
            }
          }, {
            key: "run",
            value: function run() {
              this._dirtyLevel = 0;
              if (!this.active) {
                return this.fn();
              }
              var lastShouldTrack = shouldTrack;
              var lastEffect = activeEffect;
              try {
                shouldTrack = true;
                activeEffect = this;
                this._runnings++;
                preCleanupEffect(this);
                return this.fn();
              } finally {
                postCleanupEffect(this);
                this._runnings--;
                activeEffect = lastEffect;
                shouldTrack = lastShouldTrack;
              }
            }
          }, {
            key: "stop",
            value: function stop() {
              var _a;
              if (this.active) {
                preCleanupEffect(this);
                postCleanupEffect(this);
                (_a = this.onStop) == null ? void 0 : _a.call(this);
                this.active = false;
              }
            }
          }]);
        }();
        function triggerComputed(computed2) {
          return computed2.value;
        }
        function preCleanupEffect(effect2) {
          effect2._trackId++;
          effect2._depsLength = 0;
        }
        function postCleanupEffect(effect2) {
          if (effect2.deps.length > effect2._depsLength) {
            for (var i = effect2._depsLength; i < effect2.deps.length; i++) {
              cleanupDepEffect(effect2.deps[i], effect2);
            }
            effect2.deps.length = effect2._depsLength;
          }
        }
        function cleanupDepEffect(dep, effect2) {
          var trackId = dep.get(effect2);
          if (trackId !== void 0 && effect2._trackId !== trackId) {
            dep["delete"](effect2);
            if (dep.size === 0) {
              dep.cleanup();
            }
          }
        }
        var shouldTrack = true;
        var pauseScheduleStack = 0;
        var trackStack = [];
        function pauseTracking() {
          trackStack.push(shouldTrack);
          shouldTrack = false;
        }
        function resetTracking() {
          var last = trackStack.pop();
          shouldTrack = last === void 0 ? true : last;
        }
        function pauseScheduling() {
          pauseScheduleStack++;
        }
        function resetScheduling() {
          pauseScheduleStack--;
          while (!pauseScheduleStack && queueEffectSchedulers.length) {
            queueEffectSchedulers.shift()();
          }
        }
        function trackEffect(effect2, dep, debuggerEventExtraInfo) {
          if (dep.get(effect2) !== effect2._trackId) {
            dep.set(effect2, effect2._trackId);
            var oldDep = effect2.deps[effect2._depsLength];
            if (oldDep !== dep) {
              if (oldDep) {
                cleanupDepEffect(oldDep, effect2);
              }
              effect2.deps[effect2._depsLength++] = dep;
            } else {
              effect2._depsLength++;
            }
          }
        }
        var queueEffectSchedulers = [];
        function triggerEffects(dep, dirtyLevel, debuggerEventExtraInfo) {
          pauseScheduling();
          var _iterator2 = _createForOfIteratorHelper(dep.keys()),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var effect2 = _step2.value;
              var tracking = void 0;
              if (effect2._dirtyLevel < dirtyLevel && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
                effect2._shouldSchedule || (effect2._shouldSchedule = effect2._dirtyLevel === 0);
                effect2._dirtyLevel = dirtyLevel;
              }
              if (effect2._shouldSchedule && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
                effect2.trigger();
                if ((!effect2._runnings || effect2.allowRecurse) && effect2._dirtyLevel !== 2) {
                  effect2._shouldSchedule = false;
                  if (effect2.scheduler) {
                    queueEffectSchedulers.push(effect2.scheduler);
                  }
                }
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          resetScheduling();
        }
        var createDep = function createDep(cleanup, computed2) {
          var dep = /* @__PURE__ */new Map();
          dep.cleanup = cleanup;
          dep.computed = computed2;
          return dep;
        };
        var targetMap = /* @__PURE__ */new WeakMap();
        var ITERATE_KEY = Symbol("");
        var MAP_KEY_ITERATE_KEY = Symbol("");
        function track(target, type, key) {
          if (shouldTrack && activeEffect) {
            var depsMap = targetMap.get(target);
            if (!depsMap) {
              targetMap.set(target, depsMap = /* @__PURE__ */new Map());
            }
            var dep = depsMap.get(key);
            if (!dep) {
              depsMap.set(key, dep = createDep(function () {
                return depsMap["delete"](key);
              }));
            }
            trackEffect(activeEffect, dep);
          }
        }
        function trigger(target, type, key, newValue, oldValue, oldTarget) {
          var depsMap = targetMap.get(target);
          if (!depsMap) {
            return;
          }
          var deps = [];
          if (type === "clear") {
            deps = _toConsumableArray(depsMap.values());
          } else if (key === "length" && isArray(target)) {
            var newLength = Number(newValue);
            depsMap.forEach(function (dep, key2) {
              if (key2 === "length" || !isSymbol(key2) && key2 >= newLength) {
                deps.push(dep);
              }
            });
          } else {
            if (key !== void 0) {
              deps.push(depsMap.get(key));
            }
            switch (type) {
              case "add":
                if (!isArray(target)) {
                  deps.push(depsMap.get(ITERATE_KEY));
                  if (isMap(target)) {
                    deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                  }
                } else if (isIntegerKey(key)) {
                  deps.push(depsMap.get("length"));
                }
                break;
              case "delete":
                if (!isArray(target)) {
                  deps.push(depsMap.get(ITERATE_KEY));
                  if (isMap(target)) {
                    deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                  }
                }
                break;
              case "set":
                if (isMap(target)) {
                  deps.push(depsMap.get(ITERATE_KEY));
                }
                break;
            }
          }
          pauseScheduling();
          var _iterator3 = _createForOfIteratorHelper(deps),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var dep = _step3.value;
              if (dep) {
                triggerEffects(dep, 4);
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          resetScheduling();
        }
        var isNonTrackableKeys = /* @__PURE__ */makeMap("__proto__,__v_isRef,__isVue");
        var builtInSymbols = new Set( /* @__PURE__ */Object.getOwnPropertyNames(Symbol).filter(function (key) {
          return key !== "arguments" && key !== "caller";
        }).map(function (key) {
          return Symbol[key];
        }).filter(isSymbol));
        var arrayInstrumentations = /* @__PURE__ */createArrayInstrumentations();
        function createArrayInstrumentations() {
          var instrumentations = {};
          ["includes", "indexOf", "lastIndexOf"].forEach(function (key) {
            instrumentations[key] = function () {
              var arr = toRaw(this);
              for (var i = 0, l = this.length; i < l; i++) {
                track(arr, "get", i + "");
              }
              for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
                args[_key2] = arguments[_key2];
              }
              var res = arr[key].apply(arr, args);
              if (res === -1 || res === false) {
                return arr[key].apply(arr, _toConsumableArray(args.map(toRaw)));
              } else {
                return res;
              }
            };
          });
          ["push", "pop", "shift", "unshift", "splice"].forEach(function (key) {
            instrumentations[key] = function () {
              pauseTracking();
              pauseScheduling();
              for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
                args[_key3] = arguments[_key3];
              }
              var res = toRaw(this)[key].apply(this, args);
              resetScheduling();
              resetTracking();
              return res;
            };
          });
          return instrumentations;
        }
        function hasOwnProperty(key) {
          var obj = toRaw(this);
          track(obj, "has", key);
          return obj.hasOwnProperty(key);
        }
        var BaseReactiveHandler = /*#__PURE__*/function () {
          function BaseReactiveHandler() {
            var _isReadonly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var _isShallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            _classCallCheck(this, BaseReactiveHandler);
            this._isReadonly = _isReadonly;
            this._isShallow = _isShallow;
          }
          return _createClass(BaseReactiveHandler, [{
            key: "get",
            value: function get(target, key, receiver) {
              var isReadonly2 = this._isReadonly,
                isShallow2 = this._isShallow;
              if (key === "__v_isReactive") {
                return !isReadonly2;
              } else if (key === "__v_isReadonly") {
                return isReadonly2;
              } else if (key === "__v_isShallow") {
                return isShallow2;
              } else if (key === "__v_raw") {
                if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) ||
                // receiver is not the reactive proxy, but has the same prototype
                // this means the reciever is a user proxy of the reactive proxy
                Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
                  return target;
                }
                return;
              }
              var targetIsArray = isArray(target);
              if (!isReadonly2) {
                if (targetIsArray && hasOwn(arrayInstrumentations, key)) {
                  return Reflect.get(arrayInstrumentations, key, receiver);
                }
                if (key === "hasOwnProperty") {
                  return hasOwnProperty;
                }
              }
              var res = Reflect.get(target, key, receiver);
              if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
                return res;
              }
              if (!isReadonly2) {
                track(target, "get", key);
              }
              if (isShallow2) {
                return res;
              }
              if (isRef(res)) {
                return targetIsArray && isIntegerKey(key) ? res : res.value;
              }
              if (isObject(res)) {
                return isReadonly2 ? readonly(res) : reactive(res);
              }
              return res;
            }
          }]);
        }();
        var MutableReactiveHandler = /*#__PURE__*/function (_BaseReactiveHandler) {
          function MutableReactiveHandler() {
            var isShallow2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            _classCallCheck(this, MutableReactiveHandler);
            return _callSuper(this, MutableReactiveHandler, [false, isShallow2]);
          }
          _inherits(MutableReactiveHandler, _BaseReactiveHandler);
          return _createClass(MutableReactiveHandler, [{
            key: "set",
            value: function set(target, key, value, receiver) {
              var oldValue = target[key];
              if (!this._isShallow) {
                var isOldValueReadonly = isReadonly(oldValue);
                if (!isShallow(value) && !isReadonly(value)) {
                  oldValue = toRaw(oldValue);
                  value = toRaw(value);
                }
                if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
                  if (isOldValueReadonly) {
                    return false;
                  } else {
                    oldValue.value = value;
                    return true;
                  }
                }
              }
              var hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
              var result = Reflect.set(target, key, value, receiver);
              if (target === toRaw(receiver)) {
                if (!hadKey) {
                  trigger(target, "add", key, value);
                } else if (hasChanged(value, oldValue)) {
                  trigger(target, "set", key, value);
                }
              }
              return result;
            }
          }, {
            key: "deleteProperty",
            value: function deleteProperty(target, key) {
              var hadKey = hasOwn(target, key);
              target[key];
              var result = Reflect.deleteProperty(target, key);
              if (result && hadKey) {
                trigger(target, "delete", key, void 0);
              }
              return result;
            }
          }, {
            key: "has",
            value: function has(target, key) {
              var result = Reflect.has(target, key);
              if (!isSymbol(key) || !builtInSymbols.has(key)) {
                track(target, "has", key);
              }
              return result;
            }
          }, {
            key: "ownKeys",
            value: function ownKeys(target) {
              track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
              return Reflect.ownKeys(target);
            }
          }]);
        }(BaseReactiveHandler);
        var ReadonlyReactiveHandler = /*#__PURE__*/function (_BaseReactiveHandler2) {
          function ReadonlyReactiveHandler() {
            var isShallow2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            _classCallCheck(this, ReadonlyReactiveHandler);
            return _callSuper(this, ReadonlyReactiveHandler, [true, isShallow2]);
          }
          _inherits(ReadonlyReactiveHandler, _BaseReactiveHandler2);
          return _createClass(ReadonlyReactiveHandler, [{
            key: "set",
            value: function set(target, key) {
              return true;
            }
          }, {
            key: "deleteProperty",
            value: function deleteProperty(target, key) {
              return true;
            }
          }]);
        }(BaseReactiveHandler);
        var mutableHandlers = /* @__PURE__ */new MutableReactiveHandler();
        var readonlyHandlers = /* @__PURE__ */new ReadonlyReactiveHandler();
        var shallowReactiveHandlers = /* @__PURE__ */new MutableReactiveHandler(true);
        var toShallow = function toShallow(value) {
          return value;
        };
        var getProto = function getProto(v) {
          return Reflect.getPrototypeOf(v);
        };
        function _get(target, key) {
          var isReadonly2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var isShallow2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          target = target["__v_raw"];
          var rawTarget = toRaw(target);
          var rawKey = toRaw(key);
          if (!isReadonly2) {
            if (hasChanged(key, rawKey)) {
              track(rawTarget, "get", key);
            }
            track(rawTarget, "get", rawKey);
          }
          var _getProto = getProto(rawTarget),
            has2 = _getProto.has;
          var wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
          if (has2.call(rawTarget, key)) {
            return wrap(target.get(key));
          } else if (has2.call(rawTarget, rawKey)) {
            return wrap(target.get(rawKey));
          } else if (target !== rawTarget) {
            target.get(key);
          }
        }
        function _has(key) {
          var isReadonly2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var target = this["__v_raw"];
          var rawTarget = toRaw(target);
          var rawKey = toRaw(key);
          if (!isReadonly2) {
            if (hasChanged(key, rawKey)) {
              track(rawTarget, "has", key);
            }
            track(rawTarget, "has", rawKey);
          }
          return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
        }
        function size(target) {
          var isReadonly2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          target = target["__v_raw"];
          !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
          return Reflect.get(target, "size", target);
        }
        function add(value) {
          value = toRaw(value);
          var target = toRaw(this);
          var proto = getProto(target);
          var hadKey = proto.has.call(target, value);
          if (!hadKey) {
            target.add(value);
            trigger(target, "add", value, value);
          }
          return this;
        }
        function set(key, value) {
          value = toRaw(value);
          var target = toRaw(this);
          var _getProto2 = getProto(target),
            has2 = _getProto2.has,
            get2 = _getProto2.get;
          var hadKey = has2.call(target, key);
          if (!hadKey) {
            key = toRaw(key);
            hadKey = has2.call(target, key);
          }
          var oldValue = get2.call(target, key);
          target.set(key, value);
          if (!hadKey) {
            trigger(target, "add", key, value);
          } else if (hasChanged(value, oldValue)) {
            trigger(target, "set", key, value);
          }
          return this;
        }
        function deleteEntry(key) {
          var target = toRaw(this);
          var _getProto3 = getProto(target),
            has2 = _getProto3.has,
            get2 = _getProto3.get;
          var hadKey = has2.call(target, key);
          if (!hadKey) {
            key = toRaw(key);
            hadKey = has2.call(target, key);
          }
          get2 ? get2.call(target, key) : void 0;
          var result = target["delete"](key);
          if (hadKey) {
            trigger(target, "delete", key, void 0);
          }
          return result;
        }
        function clear() {
          var target = toRaw(this);
          var hadItems = target.size !== 0;
          var result = target.clear();
          if (hadItems) {
            trigger(target, "clear", void 0, void 0);
          }
          return result;
        }
        function createForEach(isReadonly2, isShallow2) {
          return function forEach(callback, thisArg) {
            var observed = this;
            var target = observed["__v_raw"];
            var rawTarget = toRaw(target);
            var wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
            !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
            return target.forEach(function (value, key) {
              return callback.call(thisArg, wrap(value), wrap(key), observed);
            });
          };
        }
        function createIterableMethod(method, isReadonly2, isShallow2) {
          return function () {
            var target = this["__v_raw"];
            var rawTarget = toRaw(target);
            var targetIsMap = isMap(rawTarget);
            var isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
            var isKeyOnly = method === "keys" && targetIsMap;
            var innerIterator = target[method].apply(target, arguments);
            var wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
            !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
            return _defineProperty({
              // iterator protocol
              next: function next() {
                var _innerIterator$next = innerIterator.next(),
                  value = _innerIterator$next.value,
                  done = _innerIterator$next.done;
                return done ? {
                  value: value,
                  done: done
                } : {
                  value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
                  done: done
                };
              }
            }, Symbol.iterator, function () {
              return this;
            });
          };
        }
        function createReadonlyMethod(type) {
          return function () {
            return type === "delete" ? false : type === "clear" ? void 0 : this;
          };
        }
        function createInstrumentations() {
          var mutableInstrumentations2 = {
            get: function get(key) {
              return _get(this, key);
            },
            get size() {
              return size(this);
            },
            has: _has,
            add: add,
            set: set,
            "delete": deleteEntry,
            clear: clear,
            forEach: createForEach(false, false)
          };
          var shallowInstrumentations2 = {
            get: function get(key) {
              return _get(this, key, false, true);
            },
            get size() {
              return size(this);
            },
            has: _has,
            add: add,
            set: set,
            "delete": deleteEntry,
            clear: clear,
            forEach: createForEach(false, true)
          };
          var readonlyInstrumentations2 = {
            get: function get(key) {
              return _get(this, key, true);
            },
            get size() {
              return size(this, true);
            },
            has: function has(key) {
              return _has.call(this, key, true);
            },
            add: createReadonlyMethod("add"),
            set: createReadonlyMethod("set"),
            "delete": createReadonlyMethod("delete"),
            clear: createReadonlyMethod("clear"),
            forEach: createForEach(true, false)
          };
          var shallowReadonlyInstrumentations2 = {
            get: function get(key) {
              return _get(this, key, true, true);
            },
            get size() {
              return size(this, true);
            },
            has: function has(key) {
              return _has.call(this, key, true);
            },
            add: createReadonlyMethod("add"),
            set: createReadonlyMethod("set"),
            "delete": createReadonlyMethod("delete"),
            clear: createReadonlyMethod("clear"),
            forEach: createForEach(true, true)
          };
          var iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
          iteratorMethods.forEach(function (method) {
            mutableInstrumentations2[method] = createIterableMethod(method, false, false);
            readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
            shallowInstrumentations2[method] = createIterableMethod(method, false, true);
            shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
          });
          return [mutableInstrumentations2, readonlyInstrumentations2, shallowInstrumentations2, shallowReadonlyInstrumentations2];
        }
        var _createInstrumentatio = /* @__PURE__ */createInstrumentations(),
          _createInstrumentatio2 = _slicedToArray(_createInstrumentatio, 4),
          mutableInstrumentations = _createInstrumentatio2[0],
          readonlyInstrumentations = _createInstrumentatio2[1],
          shallowInstrumentations = _createInstrumentatio2[2],
          shallowReadonlyInstrumentations = _createInstrumentatio2[3];
        function createInstrumentationGetter(isReadonly2, shallow) {
          var instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
          return function (target, key, receiver) {
            if (key === "__v_isReactive") {
              return !isReadonly2;
            } else if (key === "__v_isReadonly") {
              return isReadonly2;
            } else if (key === "__v_raw") {
              return target;
            }
            return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
          };
        }
        var mutableCollectionHandlers = {
          get: /* @__PURE__ */createInstrumentationGetter(false, false)
        };
        var shallowCollectionHandlers = {
          get: /* @__PURE__ */createInstrumentationGetter(false, true)
        };
        var readonlyCollectionHandlers = {
          get: /* @__PURE__ */createInstrumentationGetter(true, false)
        };
        var reactiveMap = /* @__PURE__ */new WeakMap();
        var shallowReactiveMap = /* @__PURE__ */new WeakMap();
        var readonlyMap = /* @__PURE__ */new WeakMap();
        var shallowReadonlyMap = /* @__PURE__ */new WeakMap();
        function targetTypeMap(rawType) {
          switch (rawType) {
            case "Object":
            case "Array":
              return 1;
            case "Map":
            case "Set":
            case "WeakMap":
            case "WeakSet":
              return 2;
            default:
              return 0;
          }
        }
        function getTargetType(value) {
          return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
        }
        function reactive(target) {
          if (isReadonly(target)) {
            return target;
          }
          return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
        }
        function shallowReactive(target) {
          return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
        }
        function readonly(target) {
          return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
        }
        function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
          if (!isObject(target)) {
            return target;
          }
          if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
            return target;
          }
          var existingProxy = proxyMap.get(target);
          if (existingProxy) {
            return existingProxy;
          }
          var targetType = getTargetType(target);
          if (targetType === 0) {
            return target;
          }
          var proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
          proxyMap.set(target, proxy);
          return proxy;
        }
        function isReactive(value) {
          if (isReadonly(value)) {
            return isReactive(value["__v_raw"]);
          }
          return !!(value && value["__v_isReactive"]);
        }
        function isReadonly(value) {
          return !!(value && value["__v_isReadonly"]);
        }
        function isShallow(value) {
          return !!(value && value["__v_isShallow"]);
        }
        function isProxy(value) {
          return isReactive(value) || isReadonly(value);
        }
        function toRaw(observed) {
          var raw = observed && observed["__v_raw"];
          return raw ? toRaw(raw) : observed;
        }
        function markRaw(value) {
          if (Object.isExtensible(value)) {
            def(value, "__v_skip", true);
          }
          return value;
        }
        var toReactive = function toReactive(value) {
          return isObject(value) ? reactive(value) : value;
        };
        var toReadonly = function toReadonly(value) {
          return isObject(value) ? readonly(value) : value;
        };
        var ComputedRefImpl = /*#__PURE__*/function () {
          function ComputedRefImpl(getter, _setter, isReadonly2, isSSR) {
            var _this = this;
            _classCallCheck(this, ComputedRefImpl);
            this.getter = getter;
            this._setter = _setter;
            this.dep = void 0;
            this.__v_isRef = true;
            this["__v_isReadonly"] = false;
            this.effect = new ReactiveEffect(function () {
              return getter(_this._value);
            }, function () {
              return triggerRefValue(_this, _this.effect._dirtyLevel === 2 ? 2 : 3);
            });
            this.effect.computed = this;
            this.effect.active = this._cacheable = !isSSR;
            this["__v_isReadonly"] = isReadonly2;
          }
          return _createClass(ComputedRefImpl, [{
            key: "value",
            get: function get() {
              var self = toRaw(this);
              if ((!self._cacheable || self.effect.dirty) && hasChanged(self._value, self._value = self.effect.run())) {
                triggerRefValue(self, 4);
              }
              trackRefValue(self);
              if (self.effect._dirtyLevel >= 2) {
                triggerRefValue(self, 2);
              }
              return self._value;
            },
            set: function set(newValue) {
              this._setter(newValue);
            }
            // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
          }, {
            key: "_dirty",
            get: function get() {
              return this.effect.dirty;
            },
            set: function set(v) {
              this.effect.dirty = v;
            }
            // #endregion
          }]);
        }();
        function computed$1(getterOrOptions, debugOptions) {
          var isSSR = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var getter;
          var setter;
          var onlyGetter = isFunction(getterOrOptions);
          if (onlyGetter) {
            getter = getterOrOptions;
            setter = NOOP;
          } else {
            getter = getterOrOptions.get;
            setter = getterOrOptions.set;
          }
          var cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
          return cRef;
        }
        function trackRefValue(ref2) {
          var _a;
          if (shouldTrack && activeEffect) {
            ref2 = toRaw(ref2);
            trackEffect(activeEffect, (_a = ref2.dep) != null ? _a : ref2.dep = createDep(function () {
              return ref2.dep = void 0;
            }, ref2 instanceof ComputedRefImpl ? ref2 : void 0));
          }
        }
        function triggerRefValue(ref2) {
          var dirtyLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
          var newVal = arguments.length > 2 ? arguments[2] : undefined;
          ref2 = toRaw(ref2);
          var dep = ref2.dep;
          if (dep) {
            triggerEffects(dep, dirtyLevel);
          }
        }
        function isRef(r) {
          return !!(r && r.__v_isRef === true);
        }
        function ref(value) {
          return createRef(value, false);
        }
        function createRef(rawValue, shallow) {
          if (isRef(rawValue)) {
            return rawValue;
          }
          return new RefImpl(rawValue, shallow);
        }
        var RefImpl = /*#__PURE__*/function () {
          function RefImpl(value, __v_isShallow) {
            _classCallCheck(this, RefImpl);
            this.__v_isShallow = __v_isShallow;
            this.dep = void 0;
            this.__v_isRef = true;
            this._rawValue = __v_isShallow ? value : toRaw(value);
            this._value = __v_isShallow ? value : toReactive(value);
          }
          return _createClass(RefImpl, [{
            key: "value",
            get: function get() {
              trackRefValue(this);
              return this._value;
            },
            set: function set(newVal) {
              var useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
              newVal = useDirectValue ? newVal : toRaw(newVal);
              if (hasChanged(newVal, this._rawValue)) {
                this._rawValue = newVal;
                this._value = useDirectValue ? newVal : toReactive(newVal);
                triggerRefValue(this, 4);
              }
            }
          }]);
        }();
        function unref(ref2) {
          return isRef(ref2) ? ref2.value : ref2;
        }
        var shallowUnwrapHandlers = {
          get: function get(target, key, receiver) {
            return unref(Reflect.get(target, key, receiver));
          },
          set: function set(target, key, value, receiver) {
            var oldValue = target[key];
            if (isRef(oldValue) && !isRef(value)) {
              oldValue.value = value;
              return true;
            } else {
              return Reflect.set(target, key, value, receiver);
            }
          }
        };
        function proxyRefs(objectWithRefs) {
          return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
        }
        var CustomRefImpl = /*#__PURE__*/function () {
          function CustomRefImpl(factory) {
            var _this2 = this;
            _classCallCheck(this, CustomRefImpl);
            this.dep = void 0;
            this.__v_isRef = true;
            var _factory = factory(function () {
                return trackRefValue(_this2);
              }, function () {
                return triggerRefValue(_this2);
              }),
              get2 = _factory.get,
              set2 = _factory.set;
            this._get = get2;
            this._set = set2;
          }
          return _createClass(CustomRefImpl, [{
            key: "value",
            get: function get() {
              return this._get();
            },
            set: function set(newVal) {
              this._set(newVal);
            }
          }]);
        }();
        function customRef(factory) {
          return new CustomRefImpl(factory);
        }

        /**
        * @vue/runtime-core v3.4.21
        * (c) 2018-present Yuxi (Evan) You and Vue contributors
        * @license MIT
        **/
        var stack = [];
        function warn$1(msg) {
          pauseTracking();
          var instance = stack.length ? stack[stack.length - 1].component : null;
          var appWarnHandler = instance && instance.appContext.config.warnHandler;
          var trace = getComponentTrace();
          for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key4 = 1; _key4 < _len3; _key4++) {
            args[_key4 - 1] = arguments[_key4];
          }
          if (appWarnHandler) {
            callWithErrorHandling(appWarnHandler, instance, 11, [msg + args.map(function (a) {
              var _a, _b;
              return (_b = (_a = a.toString) == null ? void 0 : _a.call(a)) != null ? _b : JSON.stringify(a);
            }).join(""), instance && instance.proxy, trace.map(function (_ref6) {
              var vnode = _ref6.vnode;
              return "at <".concat(formatComponentName(instance, vnode.type), ">");
            }).join("\n"), trace]);
          } else {
            var _console;
            var warnArgs = ["[Vue warn]: ".concat(msg)].concat(args);
            if (trace.length &&
            // avoid spamming console during tests
            true) {
              warnArgs.push.apply(warnArgs, ["\n"].concat(_toConsumableArray(formatTrace(trace))));
            }
            (_console = console).warn.apply(_console, _toConsumableArray(warnArgs));
          }
          resetTracking();
        }
        function getComponentTrace() {
          var currentVNode = stack[stack.length - 1];
          if (!currentVNode) {
            return [];
          }
          var normalizedStack = [];
          while (currentVNode) {
            var last = normalizedStack[0];
            if (last && last.vnode === currentVNode) {
              last.recurseCount++;
            } else {
              normalizedStack.push({
                vnode: currentVNode,
                recurseCount: 0
              });
            }
            var parentInstance = currentVNode.component && currentVNode.component.parent;
            currentVNode = parentInstance && parentInstance.vnode;
          }
          return normalizedStack;
        }
        function formatTrace(trace) {
          var logs = [];
          trace.forEach(function (entry, i) {
            logs.push.apply(logs, _toConsumableArray(i === 0 ? [] : ["\n"]).concat(_toConsumableArray(formatTraceEntry(entry))));
          });
          return logs;
        }
        function formatTraceEntry(_ref7) {
          var vnode = _ref7.vnode,
            recurseCount = _ref7.recurseCount;
          var postfix = recurseCount > 0 ? "... (".concat(recurseCount, " recursive calls)") : "";
          var isRoot = vnode.component ? vnode.component.parent == null : false;
          var open = " at <".concat(formatComponentName(vnode.component, vnode.type, isRoot));
          var close = ">" + postfix;
          return vnode.props ? [open].concat(_toConsumableArray(formatProps(vnode.props)), [close]) : [open + close];
        }
        function formatProps(props) {
          var res = [];
          var keys = Object.keys(props);
          keys.slice(0, 3).forEach(function (key) {
            res.push.apply(res, _toConsumableArray(formatProp(key, props[key])));
          });
          if (keys.length > 3) {
            res.push(" ...");
          }
          return res;
        }
        function formatProp(key, value, raw) {
          if (isString(value)) {
            value = JSON.stringify(value);
            return raw ? value : ["".concat(key, "=").concat(value)];
          } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
            return raw ? value : ["".concat(key, "=").concat(value)];
          } else if (isRef(value)) {
            value = formatProp(key, toRaw(value.value), true);
            return raw ? value : ["".concat(key, "=Ref<"), value, ">"];
          } else if (isFunction(value)) {
            return ["".concat(key, "=fn").concat(value.name ? "<".concat(value.name, ">") : "")];
          } else {
            value = toRaw(value);
            return raw ? value : ["".concat(key, "="), value];
          }
        }
        function callWithErrorHandling(fn, instance, type, args) {
          try {
            return args ? fn.apply(void 0, _toConsumableArray(args)) : fn();
          } catch (err) {
            handleError(err, instance, type);
          }
        }
        function callWithAsyncErrorHandling(fn, instance, type, args) {
          if (isFunction(fn)) {
            var res = callWithErrorHandling(fn, instance, type, args);
            if (res && isPromise(res)) {
              res["catch"](function (err) {
                handleError(err, instance, type);
              });
            }
            return res;
          }
          var values = [];
          for (var i = 0; i < fn.length; i++) {
            values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
          }
          return values;
        }
        function handleError(err, instance, type) {
          var throwInDev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          var contextVNode = instance ? instance.vnode : null;
          if (instance) {
            var cur = instance.parent;
            var exposedInstance = instance.proxy;
            var errorInfo = "https://vuejs.org/error-reference/#runtime-".concat(type);
            while (cur) {
              var errorCapturedHooks = cur.ec;
              if (errorCapturedHooks) {
                for (var i = 0; i < errorCapturedHooks.length; i++) {
                  if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
                    return;
                  }
                }
              }
              cur = cur.parent;
            }
            var appErrorHandler = instance.appContext.config.errorHandler;
            if (appErrorHandler) {
              callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
              return;
            }
          }
          logError(err, type, contextVNode, throwInDev);
        }
        function logError(err, type, contextVNode) {
          var throwInDev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          {
            console.error(err);
          }
        }
        var isFlushing = false;
        var isFlushPending = false;
        var queue = [];
        var flushIndex = 0;
        var pendingPostFlushCbs = [];
        var activePostFlushCbs = null;
        var postFlushIndex = 0;
        var resolvedPromise = /* @__PURE__ */Promise.resolve();
        var currentFlushPromise = null;
        function nextTick(fn) {
          var p = currentFlushPromise || resolvedPromise;
          return fn ? p.then(this ? fn.bind(this) : fn) : p;
        }
        function findInsertionIndex(id) {
          var start = flushIndex + 1;
          var end = queue.length;
          while (start < end) {
            var middle = start + end >>> 1;
            var middleJob = queue[middle];
            var middleJobId = getId(middleJob);
            if (middleJobId < id || middleJobId === id && middleJob.pre) {
              start = middle + 1;
            } else {
              end = middle;
            }
          }
          return start;
        }
        function queueJob(job) {
          if (!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) {
            if (job.id == null) {
              queue.push(job);
            } else {
              queue.splice(findInsertionIndex(job.id), 0, job);
            }
            queueFlush();
          }
        }
        function queueFlush() {
          if (!isFlushing && !isFlushPending) {
            isFlushPending = true;
            currentFlushPromise = resolvedPromise.then(flushJobs);
          }
        }
        function invalidateJob(job) {
          var i = queue.indexOf(job);
          if (i > flushIndex) {
            queue.splice(i, 1);
          }
        }
        function queuePostFlushCb(cb) {
          if (!isArray(cb)) {
            if (!activePostFlushCbs || !activePostFlushCbs.includes(cb, cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex)) {
              pendingPostFlushCbs.push(cb);
            }
          } else {
            pendingPostFlushCbs.push.apply(pendingPostFlushCbs, _toConsumableArray(cb));
          }
          queueFlush();
        }
        function flushPreFlushCbs(instance, seen) {
          var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : isFlushing ? flushIndex + 1 : 0;
          for (; i < queue.length; i++) {
            var cb = queue[i];
            if (cb && cb.pre) {
              if (instance && cb.id !== instance.uid) {
                continue;
              }
              queue.splice(i, 1);
              i--;
              cb();
            }
          }
        }
        function flushPostFlushCbs(seen) {
          if (pendingPostFlushCbs.length) {
            var deduped = _toConsumableArray(new Set(pendingPostFlushCbs)).sort(function (a, b) {
              return getId(a) - getId(b);
            });
            pendingPostFlushCbs.length = 0;
            if (activePostFlushCbs) {
              var _activePostFlushCbs;
              (_activePostFlushCbs = activePostFlushCbs).push.apply(_activePostFlushCbs, _toConsumableArray(deduped));
              return;
            }
            activePostFlushCbs = deduped;
            for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
              activePostFlushCbs[postFlushIndex]();
            }
            activePostFlushCbs = null;
            postFlushIndex = 0;
          }
        }
        var getId = function getId(job) {
          return job.id == null ? Infinity : job.id;
        };
        var comparator = function comparator(a, b) {
          var diff = getId(a) - getId(b);
          if (diff === 0) {
            if (a.pre && !b.pre) return -1;
            if (b.pre && !a.pre) return 1;
          }
          return diff;
        };
        function flushJobs(seen) {
          isFlushPending = false;
          isFlushing = true;
          queue.sort(comparator);
          try {
            for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
              var job = queue[flushIndex];
              if (job && job.active !== false) {
                if (false) ;
                callWithErrorHandling(job, null, 14);
              }
            }
          } finally {
            flushIndex = 0;
            queue.length = 0;
            flushPostFlushCbs();
            isFlushing = false;
            currentFlushPromise = null;
            if (queue.length || pendingPostFlushCbs.length) {
              flushJobs();
            }
          }
        }
        function emit(instance, event) {
          if (instance.isUnmounted) return;
          var props = instance.vnode.props || EMPTY_OBJ;
          for (var _len4 = arguments.length, rawArgs = new Array(_len4 > 2 ? _len4 - 2 : 0), _key5 = 2; _key5 < _len4; _key5++) {
            rawArgs[_key5 - 2] = arguments[_key5];
          }
          var args = rawArgs;
          var isModelListener2 = event.startsWith("update:");
          var modelArg = isModelListener2 && event.slice(7);
          if (modelArg && modelArg in props) {
            var modifiersKey = "".concat(modelArg === "modelValue" ? "model" : modelArg, "Modifiers");
            var _ref8 = props[modifiersKey] || EMPTY_OBJ,
              number = _ref8.number,
              trim = _ref8.trim;
            if (trim) {
              args = rawArgs.map(function (a) {
                return isString(a) ? a.trim() : a;
              });
            }
            if (number) {
              args = rawArgs.map(looseToNumber);
            }
          }
          var handlerName;
          var handler = props[handlerName = toHandlerKey(event)] ||
          // also try camelCase event handler (#2249)
          props[handlerName = toHandlerKey(camelize(event))];
          if (!handler && isModelListener2) {
            handler = props[handlerName = toHandlerKey(hyphenate(event))];
          }
          if (handler) {
            callWithAsyncErrorHandling(handler, instance, 6, args);
          }
          var onceHandler = props[handlerName + "Once"];
          if (onceHandler) {
            if (!instance.emitted) {
              instance.emitted = {};
            } else if (instance.emitted[handlerName]) {
              return;
            }
            instance.emitted[handlerName] = true;
            callWithAsyncErrorHandling(onceHandler, instance, 6, args);
          }
        }
        function normalizeEmitsOptions(comp, appContext) {
          var asMixin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var cache = appContext.emitsCache;
          var cached = cache.get(comp);
          if (cached !== void 0) {
            return cached;
          }
          var raw = comp.emits;
          var normalized = {};
          var hasExtends = false;
          if (!isFunction(comp)) {
            var extendEmits = function extendEmits(raw2) {
              var normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
              if (normalizedFromExtend) {
                hasExtends = true;
                extend(normalized, normalizedFromExtend);
              }
            };
            if (!asMixin && appContext.mixins.length) {
              appContext.mixins.forEach(extendEmits);
            }
            if (comp["extends"]) {
              extendEmits(comp["extends"]);
            }
            if (comp.mixins) {
              comp.mixins.forEach(extendEmits);
            }
          }
          if (!raw && !hasExtends) {
            if (isObject(comp)) {
              cache.set(comp, null);
            }
            return null;
          }
          if (isArray(raw)) {
            raw.forEach(function (key) {
              return normalized[key] = null;
            });
          } else {
            extend(normalized, raw);
          }
          if (isObject(comp)) {
            cache.set(comp, normalized);
          }
          return normalized;
        }
        function isEmitListener(options, key) {
          if (!options || !isOn(key)) {
            return false;
          }
          key = key.slice(2).replace(/Once$/, "");
          return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
        }
        var currentRenderingInstance = null;
        var currentScopeId = null;
        function setCurrentRenderingInstance(instance) {
          var prev = currentRenderingInstance;
          currentRenderingInstance = instance;
          currentScopeId = instance && instance.type.__scopeId || null;
          return prev;
        }
        function pushScopeId(id) {
          currentScopeId = id;
        }
        function popScopeId() {
          currentScopeId = null;
        }
        function withCtx(fn) {
          var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentRenderingInstance;
          var isNonScopedSlot = arguments.length > 2 ? arguments[2] : undefined;
          if (!ctx) return fn;
          if (fn._n) {
            return fn;
          }
          var renderFnWithContext = function renderFnWithContext() {
            if (renderFnWithContext._d) {
              setBlockTracking(-1);
            }
            var prevInstance = setCurrentRenderingInstance(ctx);
            var res;
            try {
              res = fn.apply(void 0, arguments);
            } finally {
              setCurrentRenderingInstance(prevInstance);
              if (renderFnWithContext._d) {
                setBlockTracking(1);
              }
            }
            return res;
          };
          renderFnWithContext._n = true;
          renderFnWithContext._c = true;
          renderFnWithContext._d = true;
          return renderFnWithContext;
        }
        function markAttrsAccessed() {}
        function renderComponentRoot(instance) {
          var Component = instance.type,
            vnode = instance.vnode,
            proxy = instance.proxy,
            withProxy = instance.withProxy,
            props = instance.props,
            _instance$propsOption = _slicedToArray(instance.propsOptions, 1),
            propsOptions = _instance$propsOption[0],
            slots = instance.slots,
            attrs = instance.attrs,
            emit2 = instance.emit,
            render = instance.render,
            renderCache = instance.renderCache,
            data = instance.data,
            setupState = instance.setupState,
            ctx = instance.ctx,
            inheritAttrs = instance.inheritAttrs;
          var result;
          var fallthroughAttrs;
          var prev = setCurrentRenderingInstance(instance);
          try {
            if (vnode.shapeFlag & 4) {
              var proxyToUse = withProxy || proxy;
              var thisProxy = false ? new Proxy(proxyToUse, {
                get: function get(target, key, receiver) {
                  warn$1("Property '".concat(String(key), "' was accessed via 'this'. Avoid using 'this' in templates."));
                  return Reflect.get(target, key, receiver);
                }
              }) : proxyToUse;
              result = normalizeVNode(render.call(thisProxy, proxyToUse, renderCache, props, setupState, data, ctx));
              fallthroughAttrs = attrs;
            } else {
              var render2 = Component;
              if (false) ;
              result = normalizeVNode(render2.length > 1 ? render2(props, false ? {
                get attrs() {
                  markAttrsAccessed();
                  return attrs;
                },
                slots: slots,
                emit: emit2
              } : {
                attrs: attrs,
                slots: slots,
                emit: emit2
              }) : render2(props, null
              /* we know it doesn't need it */));
              fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
            }
          } catch (err) {
            blockStack.length = 0;
            handleError(err, instance, 1);
            result = createVNode(Comment);
          }
          var root = result;
          if (fallthroughAttrs && inheritAttrs !== false) {
            var keys = Object.keys(fallthroughAttrs);
            var _root = root,
              shapeFlag = _root.shapeFlag;
            if (keys.length) {
              if (shapeFlag & (1 | 6)) {
                if (propsOptions && keys.some(isModelListener)) {
                  fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
                }
                root = cloneVNode(root, fallthroughAttrs);
              }
            }
          }
          if (vnode.dirs) {
            root = cloneVNode(root);
            root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
          }
          if (vnode.transition) {
            root.transition = vnode.transition;
          }
          {
            result = root;
          }
          setCurrentRenderingInstance(prev);
          return result;
        }
        var getFunctionalFallthrough = function getFunctionalFallthrough(attrs) {
          var res;
          for (var key in attrs) {
            if (key === "class" || key === "style" || isOn(key)) {
              (res || (res = {}))[key] = attrs[key];
            }
          }
          return res;
        };
        var filterModelListeners = function filterModelListeners(attrs, props) {
          var res = {};
          for (var key in attrs) {
            if (!isModelListener(key) || !(key.slice(9) in props)) {
              res[key] = attrs[key];
            }
          }
          return res;
        };
        function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
          var prevProps = prevVNode.props,
            prevChildren = prevVNode.children,
            component = prevVNode.component;
          var nextProps = nextVNode.props,
            nextChildren = nextVNode.children,
            patchFlag = nextVNode.patchFlag;
          var emits = component.emitsOptions;
          if (nextVNode.dirs || nextVNode.transition) {
            return true;
          }
          if (optimized && patchFlag >= 0) {
            if (patchFlag & 1024) {
              return true;
            }
            if (patchFlag & 16) {
              if (!prevProps) {
                return !!nextProps;
              }
              return hasPropsChanged(prevProps, nextProps, emits);
            } else if (patchFlag & 8) {
              var dynamicProps = nextVNode.dynamicProps;
              for (var i = 0; i < dynamicProps.length; i++) {
                var key = dynamicProps[i];
                if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
                  return true;
                }
              }
            }
          } else {
            if (prevChildren || nextChildren) {
              if (!nextChildren || !nextChildren.$stable) {
                return true;
              }
            }
            if (prevProps === nextProps) {
              return false;
            }
            if (!prevProps) {
              return !!nextProps;
            }
            if (!nextProps) {
              return true;
            }
            return hasPropsChanged(prevProps, nextProps, emits);
          }
          return false;
        }
        function hasPropsChanged(prevProps, nextProps, emitsOptions) {
          var nextKeys = Object.keys(nextProps);
          if (nextKeys.length !== Object.keys(prevProps).length) {
            return true;
          }
          for (var i = 0; i < nextKeys.length; i++) {
            var key = nextKeys[i];
            if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
              return true;
            }
          }
          return false;
        }
        function updateHOCHostEl(_ref9, el) {
          var vnode = _ref9.vnode,
            parent = _ref9.parent;
          while (parent) {
            var root = parent.subTree;
            if (root.suspense && root.suspense.activeBranch === vnode) {
              root.el = vnode.el;
            }
            if (root === vnode) {
              (vnode = parent.vnode).el = el;
              parent = parent.parent;
            } else {
              break;
            }
          }
        }
        var NULL_DYNAMIC_COMPONENT = Symbol["for"]("v-ndc");
        var isSuspense = function isSuspense(type) {
          return type.__isSuspense;
        };
        function queueEffectWithSuspense(fn, suspense) {
          if (suspense && suspense.pendingBranch) {
            if (isArray(fn)) {
              var _suspense$effects;
              (_suspense$effects = suspense.effects).push.apply(_suspense$effects, _toConsumableArray(fn));
            } else {
              suspense.effects.push(fn);
            }
          } else {
            queuePostFlushCb(fn);
          }
        }
        var ssrContextKey = Symbol["for"]("v-scx");
        var useSSRContext = function useSSRContext() {
          {
            var ctx = inject(ssrContextKey);
            return ctx;
          }
        };
        function watchSyncEffect(effect2, options) {
          return doWatch(effect2, null, {
            flush: "sync"
          });
        }
        var INITIAL_WATCHER_VALUE = {};
        function watch(source, cb, options) {
          return doWatch(source, cb, options);
        }
        function doWatch(source, cb) {
          var _ref10 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJ,
            immediate = _ref10.immediate,
            deep = _ref10.deep,
            flush = _ref10.flush,
            once = _ref10.once,
            onTrack = _ref10.onTrack,
            onTrigger = _ref10.onTrigger;
          if (cb && once) {
            var _cb = cb;
            cb = function cb() {
              _cb.apply(void 0, arguments);
              unwatch();
            };
          }
          var instance = currentInstance;
          var reactiveGetter = function reactiveGetter(source2) {
            return deep === true ? source2 :
            // for deep: false, only traverse root-level properties
            traverse(source2, deep === false ? 1 : void 0);
          };
          var getter;
          var forceTrigger = false;
          var isMultiSource = false;
          if (isRef(source)) {
            getter = function getter() {
              return source.value;
            };
            forceTrigger = isShallow(source);
          } else if (isReactive(source)) {
            getter = function getter() {
              return reactiveGetter(source);
            };
            forceTrigger = true;
          } else if (isArray(source)) {
            isMultiSource = true;
            forceTrigger = source.some(function (s) {
              return isReactive(s) || isShallow(s);
            });
            getter = function getter() {
              return source.map(function (s) {
                if (isRef(s)) {
                  return s.value;
                } else if (isReactive(s)) {
                  return reactiveGetter(s);
                } else if (isFunction(s)) {
                  return callWithErrorHandling(s, instance, 2);
                } else ;
              });
            };
          } else if (isFunction(source)) {
            if (cb) {
              getter = function getter() {
                return callWithErrorHandling(source, instance, 2);
              };
            } else {
              getter = function getter() {
                if (cleanup) {
                  cleanup();
                }
                return callWithAsyncErrorHandling(source, instance, 3, [onCleanup]);
              };
            }
          } else {
            getter = NOOP;
          }
          if (cb && deep) {
            var baseGetter = getter;
            getter = function getter() {
              return traverse(baseGetter());
            };
          }
          var cleanup;
          var onCleanup = function onCleanup(fn) {
            cleanup = effect2.onStop = function () {
              callWithErrorHandling(fn, instance, 4);
              cleanup = effect2.onStop = void 0;
            };
          };
          var ssrCleanup;
          if (isInSSRComponentSetup) {
            onCleanup = NOOP;
            if (!cb) {
              getter();
            } else if (immediate) {
              callWithAsyncErrorHandling(cb, instance, 3, [getter(), isMultiSource ? [] : void 0, onCleanup]);
            }
            if (flush === "sync") {
              var ctx = useSSRContext();
              ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
            } else {
              return NOOP;
            }
          }
          var oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
          var job = function job() {
            if (!effect2.active || !effect2.dirty) {
              return;
            }
            if (cb) {
              var newValue = effect2.run();
              if (deep || forceTrigger || (isMultiSource ? newValue.some(function (v, i) {
                return hasChanged(v, oldValue[i]);
              }) : hasChanged(newValue, oldValue)) || false) {
                if (cleanup) {
                  cleanup();
                }
                callWithAsyncErrorHandling(cb, instance, 3, [newValue,
                // pass undefined as the old value when it's changed for the first time
                oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue, onCleanup]);
                oldValue = newValue;
              }
            } else {
              effect2.run();
            }
          };
          job.allowRecurse = !!cb;
          var scheduler;
          if (flush === "sync") {
            scheduler = job;
          } else if (flush === "post") {
            scheduler = function scheduler() {
              return queuePostRenderEffect(job, instance && instance.suspense);
            };
          } else {
            job.pre = true;
            if (instance) job.id = instance.uid;
            scheduler = function scheduler() {
              return queueJob(job);
            };
          }
          var effect2 = new ReactiveEffect(getter, NOOP, scheduler);
          var scope = getCurrentScope();
          var unwatch = function unwatch() {
            effect2.stop();
            if (scope) {
              remove(scope.effects, effect2);
            }
          };
          if (cb) {
            if (immediate) {
              job();
            } else {
              oldValue = effect2.run();
            }
          } else if (flush === "post") {
            queuePostRenderEffect(effect2.run.bind(effect2), instance && instance.suspense);
          } else {
            effect2.run();
          }
          if (ssrCleanup) ssrCleanup.push(unwatch);
          return unwatch;
        }
        function instanceWatch(source, value, options) {
          var publicThis = this.proxy;
          var getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : function () {
            return publicThis[source];
          } : source.bind(publicThis, publicThis);
          var cb;
          if (isFunction(value)) {
            cb = value;
          } else {
            cb = value.handler;
            options = value;
          }
          var reset = setCurrentInstance(this);
          var res = doWatch(getter, cb.bind(publicThis), options);
          reset();
          return res;
        }
        function createPathGetter(ctx, path) {
          var segments = path.split(".");
          return function () {
            var cur = ctx;
            for (var i = 0; i < segments.length && cur; i++) {
              cur = cur[segments[i]];
            }
            return cur;
          };
        }
        function traverse(value, depth) {
          var currentDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var seen = arguments.length > 3 ? arguments[3] : undefined;
          if (!isObject(value) || value["__v_skip"]) {
            return value;
          }
          if (depth && depth > 0) {
            if (currentDepth >= depth) {
              return value;
            }
            currentDepth++;
          }
          seen = seen || /* @__PURE__ */new Set();
          if (seen.has(value)) {
            return value;
          }
          seen.add(value);
          if (isRef(value)) {
            traverse(value.value, depth, currentDepth, seen);
          } else if (isArray(value)) {
            for (var i = 0; i < value.length; i++) {
              traverse(value[i], depth, currentDepth, seen);
            }
          } else if (isSet(value) || isMap(value)) {
            value.forEach(function (v) {
              traverse(v, depth, currentDepth, seen);
            });
          } else if (isPlainObject(value)) {
            for (var key in value) {
              traverse(value[key], depth, currentDepth, seen);
            }
          }
          return value;
        }
        function withDirectives(vnode, directives) {
          if (currentRenderingInstance === null) {
            return vnode;
          }
          var instance = getExposeProxy(currentRenderingInstance) || currentRenderingInstance.proxy;
          var bindings = vnode.dirs || (vnode.dirs = []);
          for (var i = 0; i < directives.length; i++) {
            var _directives$i = _slicedToArray(directives[i], 4),
              dir = _directives$i[0],
              value = _directives$i[1],
              arg = _directives$i[2],
              _directives$i$ = _directives$i[3],
              modifiers = _directives$i$ === void 0 ? EMPTY_OBJ : _directives$i$;
            if (dir) {
              if (isFunction(dir)) {
                dir = {
                  mounted: dir,
                  updated: dir
                };
              }
              if (dir.deep) {
                traverse(value);
              }
              bindings.push({
                dir: dir,
                instance: instance,
                value: value,
                oldValue: void 0,
                arg: arg,
                modifiers: modifiers
              });
            }
          }
          return vnode;
        }
        function invokeDirectiveHook(vnode, prevVNode, instance, name) {
          var bindings = vnode.dirs;
          var oldBindings = prevVNode && prevVNode.dirs;
          for (var i = 0; i < bindings.length; i++) {
            var binding = bindings[i];
            if (oldBindings) {
              binding.oldValue = oldBindings[i].value;
            }
            var hook = binding.dir[name];
            if (hook) {
              pauseTracking();
              callWithAsyncErrorHandling(hook, instance, 8, [vnode.el, binding, vnode, prevVNode]);
              resetTracking();
            }
          }
        }
        var isAsyncWrapper = function isAsyncWrapper(i) {
          return !!i.type.__asyncLoader;
        };
        var isKeepAlive = function isKeepAlive(vnode) {
          return vnode.type.__isKeepAlive;
        };
        function onActivated(hook, target) {
          registerKeepAliveHook(hook, "a", target);
        }
        function onDeactivated(hook, target) {
          registerKeepAliveHook(hook, "da", target);
        }
        function registerKeepAliveHook(hook, type) {
          var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : currentInstance;
          var wrappedHook = hook.__wdc || (hook.__wdc = function () {
            var current = target;
            while (current) {
              if (current.isDeactivated) {
                return;
              }
              current = current.parent;
            }
            return hook();
          });
          injectHook(type, wrappedHook, target);
          if (target) {
            var current = target.parent;
            while (current && current.parent) {
              if (isKeepAlive(current.parent.vnode)) {
                injectToKeepAliveRoot(wrappedHook, type, target, current);
              }
              current = current.parent;
            }
          }
        }
        function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
          var injected = injectHook(type, hook, keepAliveRoot, true
          /* prepend */);
          onUnmounted(function () {
            remove(keepAliveRoot[type], injected);
          }, target);
        }
        function injectHook(type, hook) {
          var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : currentInstance;
          var prepend = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          if (target) {
            var hooks = target[type] || (target[type] = []);
            var wrappedHook = hook.__weh || (hook.__weh = function () {
              if (target.isUnmounted) {
                return;
              }
              pauseTracking();
              var reset = setCurrentInstance(target);
              for (var _len5 = arguments.length, args = new Array(_len5), _key6 = 0; _key6 < _len5; _key6++) {
                args[_key6] = arguments[_key6];
              }
              var res = callWithAsyncErrorHandling(hook, target, type, args);
              reset();
              resetTracking();
              return res;
            });
            if (prepend) {
              hooks.unshift(wrappedHook);
            } else {
              hooks.push(wrappedHook);
            }
            return wrappedHook;
          }
        }
        var createHook = function createHook(lifecycle) {
          return function (hook) {
            var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentInstance;
            return (
              // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
              (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, function () {
                return hook.apply(void 0, arguments);
              }, target)
            );
          };
        };
        var onBeforeMount = createHook("bm");
        var onMounted = exports("o", createHook("m"));
        var onBeforeUpdate = createHook("bu");
        var onUpdated = createHook("u");
        var onBeforeUnmount = exports("i", createHook("bum"));
        var onUnmounted = createHook("um");
        var onServerPrefetch = createHook("sp");
        var onRenderTriggered = createHook("rtg");
        var onRenderTracked = createHook("rtc");
        function onErrorCaptured(hook) {
          var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentInstance;
          injectHook("ec", hook, target);
        }
        function renderList(source, renderItem, cache, index) {
          var ret;
          var cached = cache;
          if (isArray(source) || isString(source)) {
            ret = new Array(source.length);
            for (var i = 0, l = source.length; i < l; i++) {
              ret[i] = renderItem(source[i], i, void 0, cached);
            }
          } else if (typeof source === "number") {
            ret = new Array(source);
            for (var _i = 0; _i < source; _i++) {
              ret[_i] = renderItem(_i + 1, _i, void 0, cached);
            }
          } else if (isObject(source)) {
            if (source[Symbol.iterator]) {
              ret = Array.from(source, function (item, i) {
                return renderItem(item, i, void 0, cached);
              });
            } else {
              var keys = Object.keys(source);
              ret = new Array(keys.length);
              for (var _i2 = 0, _l = keys.length; _i2 < _l; _i2++) {
                var key = keys[_i2];
                ret[_i2] = renderItem(source[key], key, _i2, cached);
              }
            }
          } else {
            ret = [];
          }
          return ret;
        }
        var getPublicInstance = function getPublicInstance(i) {
          if (!i) return null;
          if (isStatefulComponent(i)) return getExposeProxy(i) || i.proxy;
          return getPublicInstance(i.parent);
        };
        var publicPropertiesMap =
        // Move PURE marker to new line to workaround compiler discarding it
        // due to type annotation
        /* @__PURE__ */
        extend( /* @__PURE__ */Object.create(null), {
          $: function $(i) {
            return i;
          },
          $el: function $el(i) {
            return i.vnode.el;
          },
          $data: function $data(i) {
            return i.data;
          },
          $props: function $props(i) {
            return i.props;
          },
          $attrs: function $attrs(i) {
            return i.attrs;
          },
          $slots: function $slots(i) {
            return i.slots;
          },
          $refs: function $refs(i) {
            return i.refs;
          },
          $parent: function $parent(i) {
            return getPublicInstance(i.parent);
          },
          $root: function $root(i) {
            return getPublicInstance(i.root);
          },
          $emit: function $emit(i) {
            return i.emit;
          },
          $options: function $options(i) {
            return resolveMergedOptions(i);
          },
          $forceUpdate: function $forceUpdate(i) {
            return i.f || (i.f = function () {
              i.effect.dirty = true;
              queueJob(i.update);
            });
          },
          $nextTick: function $nextTick(i) {
            return i.n || (i.n = nextTick.bind(i.proxy));
          },
          $watch: function $watch(i) {
            return instanceWatch.bind(i);
          }
        });
        var hasSetupBinding = function hasSetupBinding(state, key) {
          return state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
        };
        var PublicInstanceProxyHandlers = {
          get: function get(_ref11, key) {
            var instance = _ref11._;
            var ctx = instance.ctx,
              setupState = instance.setupState,
              data = instance.data,
              props = instance.props,
              accessCache = instance.accessCache,
              type = instance.type,
              appContext = instance.appContext;
            var normalizedProps;
            if (key[0] !== "$") {
              var n = accessCache[key];
              if (n !== void 0) {
                switch (n) {
                  case 1:
                    return setupState[key];
                  case 2:
                    return data[key];
                  case 4:
                    return ctx[key];
                  case 3:
                    return props[key];
                }
              } else if (hasSetupBinding(setupState, key)) {
                accessCache[key] = 1;
                return setupState[key];
              } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
                accessCache[key] = 2;
                return data[key];
              } else if (
              // only cache other properties when instance has declared (thus stable)
              // props
              (normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)) {
                accessCache[key] = 3;
                return props[key];
              } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
                accessCache[key] = 4;
                return ctx[key];
              } else if (shouldCacheAccess) {
                accessCache[key] = 0;
              }
            }
            var publicGetter = publicPropertiesMap[key];
            var cssModule, globalProperties;
            if (publicGetter) {
              if (key === "$attrs") {
                track(instance, "get", key);
              }
              return publicGetter(instance);
            } else if (
            // css module (injected by vue-loader)
            (cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
              return cssModule;
            } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
              accessCache[key] = 4;
              return ctx[key];
            } else if (
            // global properties
            globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) {
              {
                return globalProperties[key];
              }
            } else ;
          },
          set: function set(_ref12, key, value) {
            var instance = _ref12._;
            var data = instance.data,
              setupState = instance.setupState,
              ctx = instance.ctx;
            if (hasSetupBinding(setupState, key)) {
              setupState[key] = value;
              return true;
            } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
              data[key] = value;
              return true;
            } else if (hasOwn(instance.props, key)) {
              return false;
            }
            if (key[0] === "$" && key.slice(1) in instance) {
              return false;
            } else {
              {
                ctx[key] = value;
              }
            }
            return true;
          },
          has: function has(_ref13, key) {
            var _ref13$_ = _ref13._,
              data = _ref13$_.data,
              setupState = _ref13$_.setupState,
              accessCache = _ref13$_.accessCache,
              ctx = _ref13$_.ctx,
              appContext = _ref13$_.appContext,
              propsOptions = _ref13$_.propsOptions;
            var normalizedProps;
            return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
          },
          defineProperty: function defineProperty(target, key, descriptor) {
            if (descriptor.get != null) {
              target._.accessCache[key] = 0;
            } else if (hasOwn(descriptor, "value")) {
              this.set(target, key, descriptor.value, null);
            }
            return Reflect.defineProperty(target, key, descriptor);
          }
        };
        function normalizePropsOrEmits(props) {
          return isArray(props) ? props.reduce(function (normalized, p) {
            return normalized[p] = null, normalized;
          }, {}) : props;
        }
        var shouldCacheAccess = true;
        function applyOptions(instance) {
          var options = resolveMergedOptions(instance);
          var publicThis = instance.proxy;
          var ctx = instance.ctx;
          shouldCacheAccess = false;
          if (options.beforeCreate) {
            callHook(options.beforeCreate, instance, "bc");
          }
          var dataOptions = options.data,
            computedOptions = options.computed,
            methods = options.methods,
            watchOptions = options.watch,
            provideOptions = options.provide,
            injectOptions = options.inject,
            created = options.created,
            beforeMount = options.beforeMount,
            mounted = options.mounted,
            beforeUpdate = options.beforeUpdate,
            updated = options.updated,
            activated = options.activated,
            deactivated = options.deactivated,
            beforeDestroy = options.beforeDestroy,
            beforeUnmount = options.beforeUnmount,
            destroyed = options.destroyed,
            unmounted = options.unmounted,
            render = options.render,
            renderTracked = options.renderTracked,
            renderTriggered = options.renderTriggered,
            errorCaptured = options.errorCaptured,
            serverPrefetch = options.serverPrefetch,
            expose = options.expose,
            inheritAttrs = options.inheritAttrs,
            components = options.components,
            directives = options.directives,
            filters = options.filters;
          var checkDuplicateProperties = null;
          if (injectOptions) {
            resolveInjections(injectOptions, ctx, checkDuplicateProperties);
          }
          if (methods) {
            for (var key in methods) {
              var methodHandler = methods[key];
              if (isFunction(methodHandler)) {
                {
                  ctx[key] = methodHandler.bind(publicThis);
                }
              }
            }
          }
          if (dataOptions) {
            var data = dataOptions.call(publicThis, publicThis);
            if (!isObject(data)) ;else {
              instance.data = reactive(data);
            }
          }
          shouldCacheAccess = true;
          if (computedOptions) {
            var _loop = function _loop() {
              var opt = computedOptions[_key7];
              var get = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
              var set = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : NOOP;
              var c = computed({
                get: get,
                set: set
              });
              Object.defineProperty(ctx, _key7, {
                enumerable: true,
                configurable: true,
                get: function get() {
                  return c.value;
                },
                set: function set(v) {
                  return c.value = v;
                }
              });
            };
            for (var _key7 in computedOptions) {
              _loop();
            }
          }
          if (watchOptions) {
            for (var _key8 in watchOptions) {
              createWatcher(watchOptions[_key8], ctx, publicThis, _key8);
            }
          }
          if (provideOptions) {
            var provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
            Reflect.ownKeys(provides).forEach(function (key) {
              provide(key, provides[key]);
            });
          }
          if (created) {
            callHook(created, instance, "c");
          }
          function registerLifecycleHook(register, hook) {
            if (isArray(hook)) {
              hook.forEach(function (_hook) {
                return register(_hook.bind(publicThis));
              });
            } else if (hook) {
              register(hook.bind(publicThis));
            }
          }
          registerLifecycleHook(onBeforeMount, beforeMount);
          registerLifecycleHook(onMounted, mounted);
          registerLifecycleHook(onBeforeUpdate, beforeUpdate);
          registerLifecycleHook(onUpdated, updated);
          registerLifecycleHook(onActivated, activated);
          registerLifecycleHook(onDeactivated, deactivated);
          registerLifecycleHook(onErrorCaptured, errorCaptured);
          registerLifecycleHook(onRenderTracked, renderTracked);
          registerLifecycleHook(onRenderTriggered, renderTriggered);
          registerLifecycleHook(onBeforeUnmount, beforeUnmount);
          registerLifecycleHook(onUnmounted, unmounted);
          registerLifecycleHook(onServerPrefetch, serverPrefetch);
          if (isArray(expose)) {
            if (expose.length) {
              var exposed = instance.exposed || (instance.exposed = {});
              expose.forEach(function (key) {
                Object.defineProperty(exposed, key, {
                  get: function get() {
                    return publicThis[key];
                  },
                  set: function set(val) {
                    return publicThis[key] = val;
                  }
                });
              });
            } else if (!instance.exposed) {
              instance.exposed = {};
            }
          }
          if (render && instance.render === NOOP) {
            instance.render = render;
          }
          if (inheritAttrs != null) {
            instance.inheritAttrs = inheritAttrs;
          }
          if (components) instance.components = components;
          if (directives) instance.directives = directives;
        }
        function resolveInjections(injectOptions, ctx) {
          var checkDuplicateProperties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NOOP;
          if (isArray(injectOptions)) {
            injectOptions = normalizeInject(injectOptions);
          }
          var _loop2 = function _loop2() {
            var opt = injectOptions[key];
            var injected;
            if (isObject(opt)) {
              if ("default" in opt) {
                injected = inject(opt.from || key, opt["default"], true);
              } else {
                injected = inject(opt.from || key);
              }
            } else {
              injected = inject(opt);
            }
            if (isRef(injected)) {
              Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: function get() {
                  return injected.value;
                },
                set: function set(v) {
                  return injected.value = v;
                }
              });
            } else {
              ctx[key] = injected;
            }
          };
          for (var key in injectOptions) {
            _loop2();
          }
        }
        function callHook(hook, instance, type) {
          callWithAsyncErrorHandling(isArray(hook) ? hook.map(function (h2) {
            return h2.bind(instance.proxy);
          }) : hook.bind(instance.proxy), instance, type);
        }
        function createWatcher(raw, ctx, publicThis, key) {
          var getter = key.includes(".") ? createPathGetter(publicThis, key) : function () {
            return publicThis[key];
          };
          if (isString(raw)) {
            var handler = ctx[raw];
            if (isFunction(handler)) {
              watch(getter, handler);
            }
          } else if (isFunction(raw)) {
            watch(getter, raw.bind(publicThis));
          } else if (isObject(raw)) {
            if (isArray(raw)) {
              raw.forEach(function (r) {
                return createWatcher(r, ctx, publicThis, key);
              });
            } else {
              var _handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
              if (isFunction(_handler)) {
                watch(getter, _handler, raw);
              }
            }
          } else ;
        }
        function resolveMergedOptions(instance) {
          var base = instance.type;
          var mixins = base.mixins,
            extendsOptions = base["extends"];
          var _instance$appContext = instance.appContext,
            globalMixins = _instance$appContext.mixins,
            cache = _instance$appContext.optionsCache,
            optionMergeStrategies = _instance$appContext.config.optionMergeStrategies;
          var cached = cache.get(base);
          var resolved;
          if (cached) {
            resolved = cached;
          } else if (!globalMixins.length && !mixins && !extendsOptions) {
            {
              resolved = base;
            }
          } else {
            resolved = {};
            if (globalMixins.length) {
              globalMixins.forEach(function (m) {
                return mergeOptions(resolved, m, optionMergeStrategies, true);
              });
            }
            mergeOptions(resolved, base, optionMergeStrategies);
          }
          if (isObject(base)) {
            cache.set(base, resolved);
          }
          return resolved;
        }
        function mergeOptions(to, from, strats) {
          var asMixin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          var mixins = from.mixins,
            extendsOptions = from["extends"];
          if (extendsOptions) {
            mergeOptions(to, extendsOptions, strats, true);
          }
          if (mixins) {
            mixins.forEach(function (m) {
              return mergeOptions(to, m, strats, true);
            });
          }
          for (var key in from) {
            if (asMixin && key === "expose") ;else {
              var strat = internalOptionMergeStrats[key] || strats && strats[key];
              to[key] = strat ? strat(to[key], from[key]) : from[key];
            }
          }
          return to;
        }
        var internalOptionMergeStrats = {
          data: mergeDataFn,
          props: mergeEmitsOrPropsOptions,
          emits: mergeEmitsOrPropsOptions,
          // objects
          methods: mergeObjectOptions,
          computed: mergeObjectOptions,
          // lifecycle
          beforeCreate: mergeAsArray,
          created: mergeAsArray,
          beforeMount: mergeAsArray,
          mounted: mergeAsArray,
          beforeUpdate: mergeAsArray,
          updated: mergeAsArray,
          beforeDestroy: mergeAsArray,
          beforeUnmount: mergeAsArray,
          destroyed: mergeAsArray,
          unmounted: mergeAsArray,
          activated: mergeAsArray,
          deactivated: mergeAsArray,
          errorCaptured: mergeAsArray,
          serverPrefetch: mergeAsArray,
          // assets
          components: mergeObjectOptions,
          directives: mergeObjectOptions,
          // watch
          watch: mergeWatchOptions,
          // provide / inject
          provide: mergeDataFn,
          inject: mergeInject
        };
        function mergeDataFn(to, from) {
          if (!from) {
            return to;
          }
          if (!to) {
            return from;
          }
          return function mergedDataFn() {
            return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
          };
        }
        function mergeInject(to, from) {
          return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
        }
        function normalizeInject(raw) {
          if (isArray(raw)) {
            var res = {};
            for (var i = 0; i < raw.length; i++) {
              res[raw[i]] = raw[i];
            }
            return res;
          }
          return raw;
        }
        function mergeAsArray(to, from) {
          return to ? _toConsumableArray(new Set([].concat(to, from))) : from;
        }
        function mergeObjectOptions(to, from) {
          return to ? extend( /* @__PURE__ */Object.create(null), to, from) : from;
        }
        function mergeEmitsOrPropsOptions(to, from) {
          if (to) {
            if (isArray(to) && isArray(from)) {
              return _toConsumableArray( /* @__PURE__ */new Set([].concat(_toConsumableArray(to), _toConsumableArray(from))));
            }
            return extend( /* @__PURE__ */Object.create(null), normalizePropsOrEmits(to), normalizePropsOrEmits(from != null ? from : {}));
          } else {
            return from;
          }
        }
        function mergeWatchOptions(to, from) {
          if (!to) return from;
          if (!from) return to;
          var merged = extend( /* @__PURE__ */Object.create(null), to);
          for (var key in from) {
            merged[key] = mergeAsArray(to[key], from[key]);
          }
          return merged;
        }
        function createAppContext() {
          return {
            app: null,
            config: {
              isNativeTag: NO,
              performance: false,
              globalProperties: {},
              optionMergeStrategies: {},
              errorHandler: void 0,
              warnHandler: void 0,
              compilerOptions: {}
            },
            mixins: [],
            components: {},
            directives: {},
            provides: /* @__PURE__ */Object.create(null),
            optionsCache: /* @__PURE__ */new WeakMap(),
            propsCache: /* @__PURE__ */new WeakMap(),
            emitsCache: /* @__PURE__ */new WeakMap()
          };
        }
        var uid$1 = 0;
        function createAppAPI(render, hydrate) {
          return function createApp(rootComponent) {
            var rootProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            if (!isFunction(rootComponent)) {
              rootComponent = extend({}, rootComponent);
            }
            if (rootProps != null && !isObject(rootProps)) {
              rootProps = null;
            }
            var context = createAppContext();
            var installedPlugins = /* @__PURE__ */new WeakSet();
            var isMounted = false;
            var app = context.app = {
              _uid: uid$1++,
              _component: rootComponent,
              _props: rootProps,
              _container: null,
              _context: context,
              _instance: null,
              version: version,
              get config() {
                return context.config;
              },
              set config(v) {},
              use: function use(plugin) {
                for (var _len6 = arguments.length, options = new Array(_len6 > 1 ? _len6 - 1 : 0), _key9 = 1; _key9 < _len6; _key9++) {
                  options[_key9 - 1] = arguments[_key9];
                }
                if (installedPlugins.has(plugin)) ;else if (plugin && isFunction(plugin.install)) {
                  installedPlugins.add(plugin);
                  plugin.install.apply(plugin, [app].concat(options));
                } else if (isFunction(plugin)) {
                  installedPlugins.add(plugin);
                  plugin.apply(void 0, [app].concat(options));
                } else ;
                return app;
              },
              mixin: function mixin(_mixin) {
                {
                  if (!context.mixins.includes(_mixin)) {
                    context.mixins.push(_mixin);
                  }
                }
                return app;
              },
              component: function component(name, _component) {
                if (!_component) {
                  return context.components[name];
                }
                context.components[name] = _component;
                return app;
              },
              directive: function directive(name, _directive) {
                if (!_directive) {
                  return context.directives[name];
                }
                context.directives[name] = _directive;
                return app;
              },
              mount: function mount(rootContainer, isHydrate, namespace) {
                if (!isMounted) {
                  var vnode = createVNode(rootComponent, rootProps);
                  vnode.appContext = context;
                  if (namespace === true) {
                    namespace = "svg";
                  } else if (namespace === false) {
                    namespace = void 0;
                  }
                  if (isHydrate && hydrate) {
                    hydrate(vnode, rootContainer);
                  } else {
                    render(vnode, rootContainer, namespace);
                  }
                  isMounted = true;
                  app._container = rootContainer;
                  rootContainer.__vue_app__ = app;
                  return getExposeProxy(vnode.component) || vnode.component.proxy;
                }
              },
              unmount: function unmount() {
                if (isMounted) {
                  render(null, app._container);
                  delete app._container.__vue_app__;
                }
              },
              provide: function provide(key, value) {
                context.provides[key] = value;
                return app;
              },
              runWithContext: function runWithContext(fn) {
                var lastApp = currentApp;
                currentApp = app;
                try {
                  return fn();
                } finally {
                  currentApp = lastApp;
                }
              }
            };
            return app;
          };
        }
        var currentApp = null;
        function provide(key, value) {
          if (!currentInstance) ;else {
            var provides = currentInstance.provides;
            var parentProvides = currentInstance.parent && currentInstance.parent.provides;
            if (parentProvides === provides) {
              provides = currentInstance.provides = Object.create(parentProvides);
            }
            provides[key] = value;
          }
        }
        function inject(key, defaultValue) {
          var treatDefaultAsFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var instance = currentInstance || currentRenderingInstance;
          if (instance || currentApp) {
            var provides = instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : currentApp._context.provides;
            if (provides && key in provides) {
              return provides[key];
            } else if (arguments.length > 1) {
              return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
            } else ;
          }
        }
        function initProps(instance, rawProps, isStateful) {
          var isSSR = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          var props = {};
          var attrs = {};
          def(attrs, InternalObjectKey, 1);
          instance.propsDefaults = /* @__PURE__ */Object.create(null);
          setFullProps(instance, rawProps, props, attrs);
          for (var key in instance.propsOptions[0]) {
            if (!(key in props)) {
              props[key] = void 0;
            }
          }
          if (isStateful) {
            instance.props = isSSR ? props : shallowReactive(props);
          } else {
            if (!instance.type.props) {
              instance.props = attrs;
            } else {
              instance.props = props;
            }
          }
          instance.attrs = attrs;
        }
        function updateProps(instance, rawProps, rawPrevProps, optimized) {
          var props = instance.props,
            attrs = instance.attrs,
            patchFlag = instance.vnode.patchFlag;
          var rawCurrentProps = toRaw(props);
          var _instance$propsOption2 = _slicedToArray(instance.propsOptions, 1),
            options = _instance$propsOption2[0];
          var hasAttrsChanged = false;
          if (
          // always force full diff in dev
          // - #1942 if hmr is enabled with sfc component
          // - vite#872 non-sfc component used by sfc component
          (optimized || patchFlag > 0) && !(patchFlag & 16)) {
            if (patchFlag & 8) {
              var propsToUpdate = instance.vnode.dynamicProps;
              for (var i = 0; i < propsToUpdate.length; i++) {
                var key = propsToUpdate[i];
                if (isEmitListener(instance.emitsOptions, key)) {
                  continue;
                }
                var value = rawProps[key];
                if (options) {
                  if (hasOwn(attrs, key)) {
                    if (value !== attrs[key]) {
                      attrs[key] = value;
                      hasAttrsChanged = true;
                    }
                  } else {
                    var camelizedKey = camelize(key);
                    props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
                  }
                } else {
                  if (value !== attrs[key]) {
                    attrs[key] = value;
                    hasAttrsChanged = true;
                  }
                }
              }
            }
          } else {
            if (setFullProps(instance, rawProps, props, attrs)) {
              hasAttrsChanged = true;
            }
            var kebabKey;
            for (var _key10 in rawCurrentProps) {
              if (!rawProps ||
              // for camelCase
              !hasOwn(rawProps, _key10) && (
              // it's possible the original props was passed in as kebab-case
              // and converted to camelCase (#955)
              (kebabKey = hyphenate(_key10)) === _key10 || !hasOwn(rawProps, kebabKey))) {
                if (options) {
                  if (rawPrevProps && (
                  // for camelCase
                  rawPrevProps[_key10] !== void 0 ||
                  // for kebab-case
                  rawPrevProps[kebabKey] !== void 0)) {
                    props[_key10] = resolvePropValue(options, rawCurrentProps, _key10, void 0, instance, true);
                  }
                } else {
                  delete props[_key10];
                }
              }
            }
            if (attrs !== rawCurrentProps) {
              for (var _key11 in attrs) {
                if (!rawProps || !hasOwn(rawProps, _key11) && true) {
                  delete attrs[_key11];
                  hasAttrsChanged = true;
                }
              }
            }
          }
          if (hasAttrsChanged) {
            trigger(instance, "set", "$attrs");
          }
        }
        function setFullProps(instance, rawProps, props, attrs) {
          var _instance$propsOption3 = _slicedToArray(instance.propsOptions, 2),
            options = _instance$propsOption3[0],
            needCastKeys = _instance$propsOption3[1];
          var hasAttrsChanged = false;
          var rawCastValues;
          if (rawProps) {
            for (var key in rawProps) {
              if (isReservedProp(key)) {
                continue;
              }
              var value = rawProps[key];
              var camelKey = void 0;
              if (options && hasOwn(options, camelKey = camelize(key))) {
                if (!needCastKeys || !needCastKeys.includes(camelKey)) {
                  props[camelKey] = value;
                } else {
                  (rawCastValues || (rawCastValues = {}))[camelKey] = value;
                }
              } else if (!isEmitListener(instance.emitsOptions, key)) {
                if (!(key in attrs) || value !== attrs[key]) {
                  attrs[key] = value;
                  hasAttrsChanged = true;
                }
              }
            }
          }
          if (needCastKeys) {
            var rawCurrentProps = toRaw(props);
            var castValues = rawCastValues || EMPTY_OBJ;
            for (var i = 0; i < needCastKeys.length; i++) {
              var _key12 = needCastKeys[i];
              props[_key12] = resolvePropValue(options, rawCurrentProps, _key12, castValues[_key12], instance, !hasOwn(castValues, _key12));
            }
          }
          return hasAttrsChanged;
        }
        function resolvePropValue(options, props, key, value, instance, isAbsent) {
          var opt = options[key];
          if (opt != null) {
            var hasDefault = hasOwn(opt, "default");
            if (hasDefault && value === void 0) {
              var defaultValue = opt["default"];
              if (opt.type !== Function && !opt.skipFactory && isFunction(defaultValue)) {
                var propsDefaults = instance.propsDefaults;
                if (key in propsDefaults) {
                  value = propsDefaults[key];
                } else {
                  var reset = setCurrentInstance(instance);
                  value = propsDefaults[key] = defaultValue.call(null, props);
                  reset();
                }
              } else {
                value = defaultValue;
              }
            }
            if (opt[0
            /* shouldCast */]) {
              if (isAbsent && !hasDefault) {
                value = false;
              } else if (opt[1
              /* shouldCastTrue */] && (value === "" || value === hyphenate(key))) {
                value = true;
              }
            }
          }
          return value;
        }
        function normalizePropsOptions(comp, appContext) {
          var asMixin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var cache = appContext.propsCache;
          var cached = cache.get(comp);
          if (cached) {
            return cached;
          }
          var raw = comp.props;
          var normalized = {};
          var needCastKeys = [];
          var hasExtends = false;
          if (!isFunction(comp)) {
            var extendProps = function extendProps(raw2) {
              hasExtends = true;
              var _normalizePropsOption = normalizePropsOptions(raw2, appContext, true),
                _normalizePropsOption2 = _slicedToArray(_normalizePropsOption, 2),
                props = _normalizePropsOption2[0],
                keys = _normalizePropsOption2[1];
              extend(normalized, props);
              if (keys) needCastKeys.push.apply(needCastKeys, _toConsumableArray(keys));
            };
            if (!asMixin && appContext.mixins.length) {
              appContext.mixins.forEach(extendProps);
            }
            if (comp["extends"]) {
              extendProps(comp["extends"]);
            }
            if (comp.mixins) {
              comp.mixins.forEach(extendProps);
            }
          }
          if (!raw && !hasExtends) {
            if (isObject(comp)) {
              cache.set(comp, EMPTY_ARR);
            }
            return EMPTY_ARR;
          }
          if (isArray(raw)) {
            for (var i = 0; i < raw.length; i++) {
              var normalizedKey = camelize(raw[i]);
              if (validatePropName(normalizedKey)) {
                normalized[normalizedKey] = EMPTY_OBJ;
              }
            }
          } else if (raw) {
            for (var key in raw) {
              var _normalizedKey = camelize(key);
              if (validatePropName(_normalizedKey)) {
                var opt = raw[key];
                var prop = normalized[_normalizedKey] = isArray(opt) || isFunction(opt) ? {
                  type: opt
                } : extend({}, opt);
                if (prop) {
                  var booleanIndex = getTypeIndex(Boolean, prop.type);
                  var stringIndex = getTypeIndex(String, prop.type);
                  prop[0
                  /* shouldCast */] = booleanIndex > -1;
                  prop[1
                  /* shouldCastTrue */] = stringIndex < 0 || booleanIndex < stringIndex;
                  if (booleanIndex > -1 || hasOwn(prop, "default")) {
                    needCastKeys.push(_normalizedKey);
                  }
                }
              }
            }
          }
          var res = [normalized, needCastKeys];
          if (isObject(comp)) {
            cache.set(comp, res);
          }
          return res;
        }
        function validatePropName(key) {
          if (key[0] !== "$" && !isReservedProp(key)) {
            return true;
          }
          return false;
        }
        function getType(ctor) {
          if (ctor === null) {
            return "null";
          }
          if (typeof ctor === "function") {
            return ctor.name || "";
          } else if (_typeof(ctor) === "object") {
            var name = ctor.constructor && ctor.constructor.name;
            return name || "";
          }
          return "";
        }
        function isSameType(a, b) {
          return getType(a) === getType(b);
        }
        function getTypeIndex(type, expectedTypes) {
          if (isArray(expectedTypes)) {
            return expectedTypes.findIndex(function (t) {
              return isSameType(t, type);
            });
          } else if (isFunction(expectedTypes)) {
            return isSameType(expectedTypes, type) ? 0 : -1;
          }
          return -1;
        }
        var isInternalKey = function isInternalKey(key) {
          return key[0] === "_" || key === "$stable";
        };
        var normalizeSlotValue = function normalizeSlotValue(value) {
          return isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
        };
        var normalizeSlot = function normalizeSlot(key, rawSlot, ctx) {
          if (rawSlot._n) {
            return rawSlot;
          }
          var normalized = withCtx(function () {
            if (false) ;
            return normalizeSlotValue(rawSlot.apply(void 0, arguments));
          }, ctx);
          normalized._c = false;
          return normalized;
        };
        var normalizeObjectSlots = function normalizeObjectSlots(rawSlots, slots, instance) {
          var ctx = rawSlots._ctx;
          var _loop3 = function _loop3() {
            if (isInternalKey(key)) return 1; // continue
            var value = rawSlots[key];
            if (isFunction(value)) {
              slots[key] = normalizeSlot(key, value, ctx);
            } else if (value != null) {
              var normalized = normalizeSlotValue(value);
              slots[key] = function () {
                return normalized;
              };
            }
          };
          for (var key in rawSlots) {
            if (_loop3()) continue;
          }
        };
        var normalizeVNodeSlots = function normalizeVNodeSlots(instance, children) {
          var normalized = normalizeSlotValue(children);
          instance.slots["default"] = function () {
            return normalized;
          };
        };
        var initSlots = function initSlots(instance, children) {
          if (instance.vnode.shapeFlag & 32) {
            var type = children._;
            if (type) {
              instance.slots = toRaw(children);
              def(children, "_", type);
            } else {
              normalizeObjectSlots(children, instance.slots = {});
            }
          } else {
            instance.slots = {};
            if (children) {
              normalizeVNodeSlots(instance, children);
            }
          }
          def(instance.slots, InternalObjectKey, 1);
        };
        var updateSlots = function updateSlots(instance, children, optimized) {
          var vnode = instance.vnode,
            slots = instance.slots;
          var needDeletionCheck = true;
          var deletionComparisonTarget = EMPTY_OBJ;
          if (vnode.shapeFlag & 32) {
            var type = children._;
            if (type) {
              if (optimized && type === 1) {
                needDeletionCheck = false;
              } else {
                extend(slots, children);
                if (!optimized && type === 1) {
                  delete slots._;
                }
              }
            } else {
              needDeletionCheck = !children.$stable;
              normalizeObjectSlots(children, slots);
            }
            deletionComparisonTarget = children;
          } else if (children) {
            normalizeVNodeSlots(instance, children);
            deletionComparisonTarget = {
              "default": 1
            };
          }
          if (needDeletionCheck) {
            for (var key in slots) {
              if (!isInternalKey(key) && deletionComparisonTarget[key] == null) {
                delete slots[key];
              }
            }
          }
        };
        function setRef(rawRef, oldRawRef, parentSuspense, vnode) {
          var isUnmount = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
          if (isArray(rawRef)) {
            rawRef.forEach(function (r, i) {
              return setRef(r, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount);
            });
            return;
          }
          if (isAsyncWrapper(vnode) && !isUnmount) {
            return;
          }
          var refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
          var value = isUnmount ? null : refValue;
          var owner = rawRef.i,
            ref3 = rawRef.r;
          var oldRef = oldRawRef && oldRawRef.r;
          var refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
          var setupState = owner.setupState;
          if (oldRef != null && oldRef !== ref3) {
            if (isString(oldRef)) {
              refs[oldRef] = null;
              if (hasOwn(setupState, oldRef)) {
                setupState[oldRef] = null;
              }
            } else if (isRef(oldRef)) {
              oldRef.value = null;
            }
          }
          if (isFunction(ref3)) {
            callWithErrorHandling(ref3, owner, 12, [value, refs]);
          } else {
            var _isString = isString(ref3);
            var _isRef = isRef(ref3);
            if (_isString || _isRef) {
              var doSet = function doSet() {
                if (rawRef.f) {
                  var existing = _isString ? hasOwn(setupState, ref3) ? setupState[ref3] : refs[ref3] : ref3.value;
                  if (isUnmount) {
                    isArray(existing) && remove(existing, refValue);
                  } else {
                    if (!isArray(existing)) {
                      if (_isString) {
                        refs[ref3] = [refValue];
                        if (hasOwn(setupState, ref3)) {
                          setupState[ref3] = refs[ref3];
                        }
                      } else {
                        ref3.value = [refValue];
                        if (rawRef.k) refs[rawRef.k] = ref3.value;
                      }
                    } else if (!existing.includes(refValue)) {
                      existing.push(refValue);
                    }
                  }
                } else if (_isString) {
                  refs[ref3] = value;
                  if (hasOwn(setupState, ref3)) {
                    setupState[ref3] = value;
                  }
                } else if (_isRef) {
                  ref3.value = value;
                  if (rawRef.k) refs[rawRef.k] = value;
                } else ;
              };
              if (value) {
                doSet.id = -1;
                queuePostRenderEffect(doSet, parentSuspense);
              } else {
                doSet();
              }
            }
          }
        }
        var queuePostRenderEffect = queueEffectWithSuspense;
        function createRenderer(options) {
          return baseCreateRenderer(options);
        }
        function baseCreateRenderer(options, createHydrationFns) {
          var target = getGlobalThis();
          target.__VUE__ = true;
          var hostInsert = options.insert,
            hostRemove = options.remove,
            hostPatchProp = options.patchProp,
            hostCreateElement = options.createElement,
            hostCreateText = options.createText,
            hostCreateComment = options.createComment,
            hostSetText = options.setText,
            hostSetElementText = options.setElementText,
            hostParentNode = options.parentNode,
            hostNextSibling = options.nextSibling,
            _options$setScopeId = options.setScopeId,
            hostSetScopeId = _options$setScopeId === void 0 ? NOOP : _options$setScopeId,
            hostInsertStaticContent = options.insertStaticContent;
          var patch = function patch(n1, n2, container) {
            var anchor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var parentComponent = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            var parentSuspense = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
            var namespace = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : void 0;
            var slotScopeIds = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
            var optimized = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : !!n2.dynamicChildren;
            if (n1 === n2) {
              return;
            }
            if (n1 && !isSameVNodeType(n1, n2)) {
              anchor = getNextHostNode(n1);
              unmount(n1, parentComponent, parentSuspense, true);
              n1 = null;
            }
            if (n2.patchFlag === -2) {
              optimized = false;
              n2.dynamicChildren = null;
            }
            var type = n2.type,
              ref3 = n2.ref,
              shapeFlag = n2.shapeFlag;
            switch (type) {
              case Text:
                processText(n1, n2, container, anchor);
                break;
              case Comment:
                processCommentNode(n1, n2, container, anchor);
                break;
              case Static:
                if (n1 == null) {
                  mountStaticNode(n2, container, anchor, namespace);
                }
                break;
              case Fragment:
                processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                break;
              default:
                if (shapeFlag & 1) {
                  processElement(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                } else if (shapeFlag & 6) {
                  processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                } else if (shapeFlag & 64) {
                  type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
                } else if (shapeFlag & 128) {
                  type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
                } else ;
            }
            if (ref3 != null && parentComponent) {
              setRef(ref3, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
            }
          };
          var processText = function processText(n1, n2, container, anchor) {
            if (n1 == null) {
              hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
            } else {
              var el = n2.el = n1.el;
              if (n2.children !== n1.children) {
                hostSetText(el, n2.children);
              }
            }
          };
          var processCommentNode = function processCommentNode(n1, n2, container, anchor) {
            if (n1 == null) {
              hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
            } else {
              n2.el = n1.el;
            }
          };
          var mountStaticNode = function mountStaticNode(n2, container, anchor, namespace) {
            var _hostInsertStaticCont = hostInsertStaticContent(n2.children, container, anchor, namespace, n2.el, n2.anchor);
            var _hostInsertStaticCont2 = _slicedToArray(_hostInsertStaticCont, 2);
            n2.el = _hostInsertStaticCont2[0];
            n2.anchor = _hostInsertStaticCont2[1];
          };
          var moveStaticNode = function moveStaticNode(_ref14, container, nextSibling) {
            var el = _ref14.el,
              anchor = _ref14.anchor;
            var next;
            while (el && el !== anchor) {
              next = hostNextSibling(el);
              hostInsert(el, container, nextSibling);
              el = next;
            }
            hostInsert(anchor, container, nextSibling);
          };
          var removeStaticNode = function removeStaticNode(_ref15) {
            var el = _ref15.el,
              anchor = _ref15.anchor;
            var next;
            while (el && el !== anchor) {
              next = hostNextSibling(el);
              hostRemove(el);
              el = next;
            }
            hostRemove(anchor);
          };
          var processElement = function processElement(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) {
            if (n2.type === "svg") {
              namespace = "svg";
            } else if (n2.type === "math") {
              namespace = "mathml";
            }
            if (n1 == null) {
              mountElement(n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
            } else {
              patchElement(n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
            }
          };
          var mountElement = function mountElement(vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) {
            var el;
            var vnodeHook;
            var props = vnode.props,
              shapeFlag = vnode.shapeFlag,
              transition = vnode.transition,
              dirs = vnode.dirs;
            el = vnode.el = hostCreateElement(vnode.type, namespace, props && props.is, props);
            if (shapeFlag & 8) {
              hostSetElementText(el, vnode.children);
            } else if (shapeFlag & 16) {
              mountChildren(vnode.children, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(vnode, namespace), slotScopeIds, optimized);
            }
            if (dirs) {
              invokeDirectiveHook(vnode, null, parentComponent, "created");
            }
            setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
            if (props) {
              for (var key in props) {
                if (key !== "value" && !isReservedProp(key)) {
                  hostPatchProp(el, key, null, props[key], namespace, vnode.children, parentComponent, parentSuspense, unmountChildren);
                }
              }
              if ("value" in props) {
                hostPatchProp(el, "value", null, props.value, namespace);
              }
              if (vnodeHook = props.onVnodeBeforeMount) {
                invokeVNodeHook(vnodeHook, parentComponent, vnode);
              }
            }
            if (dirs) {
              invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
            }
            var needCallTransitionHooks = needTransition(parentSuspense, transition);
            if (needCallTransitionHooks) {
              transition.beforeEnter(el);
            }
            hostInsert(el, container, anchor);
            if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
              queuePostRenderEffect(function () {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
                needCallTransitionHooks && transition.enter(el);
                dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
              }, parentSuspense);
            }
          };
          var setScopeId = function setScopeId(el, vnode, scopeId, slotScopeIds, parentComponent) {
            if (scopeId) {
              hostSetScopeId(el, scopeId);
            }
            if (slotScopeIds) {
              for (var i = 0; i < slotScopeIds.length; i++) {
                hostSetScopeId(el, slotScopeIds[i]);
              }
            }
            if (parentComponent) {
              var subTree = parentComponent.subTree;
              if (vnode === subTree) {
                var parentVNode = parentComponent.vnode;
                setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
              }
            }
          };
          var mountChildren = function mountChildren(children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) {
            var start = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
            for (var i = start; i < children.length; i++) {
              var child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
              patch(null, child, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
            }
          };
          var patchElement = function patchElement(n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) {
            var el = n2.el = n1.el;
            var patchFlag = n2.patchFlag,
              dynamicChildren = n2.dynamicChildren,
              dirs = n2.dirs;
            patchFlag |= n1.patchFlag & 16;
            var oldProps = n1.props || EMPTY_OBJ;
            var newProps = n2.props || EMPTY_OBJ;
            var vnodeHook;
            parentComponent && toggleRecurse(parentComponent, false);
            if (vnodeHook = newProps.onVnodeBeforeUpdate) {
              invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
            }
            if (dirs) {
              invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
            }
            parentComponent && toggleRecurse(parentComponent, true);
            if (dynamicChildren) {
              patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds);
            } else if (!optimized) {
              patchChildren(n1, n2, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds, false);
            }
            if (patchFlag > 0) {
              if (patchFlag & 16) {
                patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, namespace);
              } else {
                if (patchFlag & 2) {
                  if (oldProps["class"] !== newProps["class"]) {
                    hostPatchProp(el, "class", null, newProps["class"], namespace);
                  }
                }
                if (patchFlag & 4) {
                  hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
                }
                if (patchFlag & 8) {
                  var propsToUpdate = n2.dynamicProps;
                  for (var i = 0; i < propsToUpdate.length; i++) {
                    var key = propsToUpdate[i];
                    var prev = oldProps[key];
                    var next = newProps[key];
                    if (next !== prev || key === "value") {
                      hostPatchProp(el, key, prev, next, namespace, n1.children, parentComponent, parentSuspense, unmountChildren);
                    }
                  }
                }
              }
              if (patchFlag & 1) {
                if (n1.children !== n2.children) {
                  hostSetElementText(el, n2.children);
                }
              }
            } else if (!optimized && dynamicChildren == null) {
              patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, namespace);
            }
            if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
              queuePostRenderEffect(function () {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
                dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
              }, parentSuspense);
            }
          };
          var patchBlockChildren = function patchBlockChildren(oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) {
            for (var i = 0; i < newChildren.length; i++) {
              var oldVNode = oldChildren[i];
              var newVNode = newChildren[i];
              var container =
              // oldVNode may be an errored async setup() component inside Suspense
              // which will not have a mounted element
              oldVNode.el && (
              // - In the case of a Fragment, we need to provide the actual parent
              // of the Fragment itself so it can move its children.
              oldVNode.type === Fragment ||
              // - In the case of different nodes, there is going to be a replacement
              // which also requires the correct parent container
              !isSameVNodeType(oldVNode, newVNode) ||
              // - In the case of a component, it could contain anything.
              oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) :
              // In other cases, the parent container is not actually used so we
              // just pass the block element here to avoid a DOM parentNode call.
              fallbackContainer;
              patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, true);
            }
          };
          var patchProps = function patchProps(el, vnode, oldProps, newProps, parentComponent, parentSuspense, namespace) {
            if (oldProps !== newProps) {
              if (oldProps !== EMPTY_OBJ) {
                for (var key in oldProps) {
                  if (!isReservedProp(key) && !(key in newProps)) {
                    hostPatchProp(el, key, oldProps[key], null, namespace, vnode.children, parentComponent, parentSuspense, unmountChildren);
                  }
                }
              }
              for (var _key13 in newProps) {
                if (isReservedProp(_key13)) continue;
                var next = newProps[_key13];
                var prev = oldProps[_key13];
                if (next !== prev && _key13 !== "value") {
                  hostPatchProp(el, _key13, prev, next, namespace, vnode.children, parentComponent, parentSuspense, unmountChildren);
                }
              }
              if ("value" in newProps) {
                hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
              }
            }
          };
          var processFragment = function processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) {
            var fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
            var fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
            var patchFlag = n2.patchFlag,
              dynamicChildren = n2.dynamicChildren,
              fragmentSlotScopeIds = n2.slotScopeIds;
            if (fragmentSlotScopeIds) {
              slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
            }
            if (n1 == null) {
              hostInsert(fragmentStartAnchor, container, anchor);
              hostInsert(fragmentEndAnchor, container, anchor);
              mountChildren(
              // #10007
              // such fragment like `<></>` will be compiled into
              // a fragment which doesn't have a children.
              // In this case fallback to an empty array
              n2.children || [], container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
            } else {
              if (patchFlag > 0 && patchFlag & 64 && dynamicChildren &&
              // #2715 the previous fragment could've been a BAILed one as a result
              // of renderSlot() with no valid children
              n1.dynamicChildren) {
                patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, namespace, slotScopeIds);
                if (
                // #2080 if the stable fragment has a key, it's a <template v-for> that may
                //  get moved around. Make sure all root level vnodes inherit el.
                // #2134 or if it's a component root, it may also get moved around
                // as the component is being moved.
                n2.key != null || parentComponent && n2 === parentComponent.subTree) {
                  traverseStaticChildren(n1, n2, true
                  /* shallow */);
                }
              } else {
                patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
              }
            }
          };
          var processComponent = function processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) {
            n2.slotScopeIds = slotScopeIds;
            if (n1 == null) {
              if (n2.shapeFlag & 512) {
                parentComponent.ctx.activate(n2, container, anchor, namespace, optimized);
              } else {
                mountComponent(n2, container, anchor, parentComponent, parentSuspense, namespace, optimized);
              }
            } else {
              updateComponent(n1, n2, optimized);
            }
          };
          var mountComponent = function mountComponent(initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) {
            var instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
            if (isKeepAlive(initialVNode)) {
              instance.ctx.renderer = internals;
            }
            {
              setupComponent(instance);
            }
            if (instance.asyncDep) {
              parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
              if (!initialVNode.el) {
                var placeholder = instance.subTree = createVNode(Comment);
                processCommentNode(null, placeholder, container, anchor);
              }
            } else {
              setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, namespace, optimized);
            }
          };
          var updateComponent = function updateComponent(n1, n2, optimized) {
            var instance = n2.component = n1.component;
            if (shouldUpdateComponent(n1, n2, optimized)) {
              if (instance.asyncDep && !instance.asyncResolved) {
                updateComponentPreRender(instance, n2, optimized);
                return;
              } else {
                instance.next = n2;
                invalidateJob(instance.update);
                instance.effect.dirty = true;
                instance.update();
              }
            } else {
              n2.el = n1.el;
              instance.vnode = n2;
            }
          };
          var setupRenderEffect = function setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) {
            var componentUpdateFn = function componentUpdateFn() {
              if (!instance.isMounted) {
                var vnodeHook;
                var _initialVNode = initialVNode,
                  el = _initialVNode.el,
                  props = _initialVNode.props;
                var bm = instance.bm,
                  m = instance.m,
                  parent = instance.parent;
                var isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
                toggleRecurse(instance, false);
                if (bm) {
                  invokeArrayFns(bm);
                }
                if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
                  invokeVNodeHook(vnodeHook, parent, initialVNode);
                }
                toggleRecurse(instance, true);
                if (el && hydrateNode) {
                  var hydrateSubTree = function hydrateSubTree() {
                    instance.subTree = renderComponentRoot(instance);
                    hydrateNode(el, instance.subTree, instance, parentSuspense, null);
                  };
                  if (isAsyncWrapperVNode) {
                    initialVNode.type.__asyncLoader().then(
                    // note: we are moving the render call into an async callback,
                    // which means it won't track dependencies - but it's ok because
                    // a server-rendered async wrapper is already in resolved state
                    // and it will never need to change.
                    function () {
                      return !instance.isUnmounted && hydrateSubTree();
                    });
                  } else {
                    hydrateSubTree();
                  }
                } else {
                  var subTree = instance.subTree = renderComponentRoot(instance);
                  patch(null, subTree, container, anchor, instance, parentSuspense, namespace);
                  initialVNode.el = subTree.el;
                }
                if (m) {
                  queuePostRenderEffect(m, parentSuspense);
                }
                if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
                  var scopedInitialVNode = initialVNode;
                  queuePostRenderEffect(function () {
                    return invokeVNodeHook(vnodeHook, parent, scopedInitialVNode);
                  }, parentSuspense);
                }
                if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
                  instance.a && queuePostRenderEffect(instance.a, parentSuspense);
                }
                instance.isMounted = true;
                initialVNode = container = anchor = null;
              } else {
                var next = instance.next,
                  bu = instance.bu,
                  u = instance.u,
                  _parent = instance.parent,
                  vnode = instance.vnode;
                {
                  var nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
                  if (nonHydratedAsyncRoot) {
                    if (next) {
                      next.el = vnode.el;
                      updateComponentPreRender(instance, next, optimized);
                    }
                    nonHydratedAsyncRoot.asyncDep.then(function () {
                      if (!instance.isUnmounted) {
                        componentUpdateFn();
                      }
                    });
                    return;
                  }
                }
                var originNext = next;
                var _vnodeHook;
                toggleRecurse(instance, false);
                if (next) {
                  next.el = vnode.el;
                  updateComponentPreRender(instance, next, optimized);
                } else {
                  next = vnode;
                }
                if (bu) {
                  invokeArrayFns(bu);
                }
                if (_vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
                  invokeVNodeHook(_vnodeHook, _parent, next, vnode);
                }
                toggleRecurse(instance, true);
                var nextTree = renderComponentRoot(instance);
                var prevTree = instance.subTree;
                instance.subTree = nextTree;
                patch(prevTree, nextTree,
                // parent may have changed if it's in a teleport
                hostParentNode(prevTree.el),
                // anchor may have changed if it's in a fragment
                getNextHostNode(prevTree), instance, parentSuspense, namespace);
                next.el = nextTree.el;
                if (originNext === null) {
                  updateHOCHostEl(instance, nextTree.el);
                }
                if (u) {
                  queuePostRenderEffect(u, parentSuspense);
                }
                if (_vnodeHook = next.props && next.props.onVnodeUpdated) {
                  queuePostRenderEffect(function () {
                    return invokeVNodeHook(_vnodeHook, _parent, next, vnode);
                  }, parentSuspense);
                }
              }
            };
            var effect2 = instance.effect = new ReactiveEffect(componentUpdateFn, NOOP, function () {
              return queueJob(update);
            }, instance.scope
            // track it in component's effect scope
            );
            var update = instance.update = function () {
              if (effect2.dirty) {
                effect2.run();
              }
            };
            update.id = instance.uid;
            toggleRecurse(instance, true);
            update();
          };
          var updateComponentPreRender = function updateComponentPreRender(instance, nextVNode, optimized) {
            nextVNode.component = instance;
            var prevProps = instance.vnode.props;
            instance.vnode = nextVNode;
            instance.next = null;
            updateProps(instance, nextVNode.props, prevProps, optimized);
            updateSlots(instance, nextVNode.children, optimized);
            pauseTracking();
            flushPreFlushCbs(instance);
            resetTracking();
          };
          var patchChildren = function patchChildren(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds) {
            var optimized = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;
            var c1 = n1 && n1.children;
            var prevShapeFlag = n1 ? n1.shapeFlag : 0;
            var c2 = n2.children;
            var patchFlag = n2.patchFlag,
              shapeFlag = n2.shapeFlag;
            if (patchFlag > 0) {
              if (patchFlag & 128) {
                patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                return;
              } else if (patchFlag & 256) {
                patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                return;
              }
            }
            if (shapeFlag & 8) {
              if (prevShapeFlag & 16) {
                unmountChildren(c1, parentComponent, parentSuspense);
              }
              if (c2 !== c1) {
                hostSetElementText(container, c2);
              }
            } else {
              if (prevShapeFlag & 16) {
                if (shapeFlag & 16) {
                  patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                } else {
                  unmountChildren(c1, parentComponent, parentSuspense, true);
                }
              } else {
                if (prevShapeFlag & 8) {
                  hostSetElementText(container, "");
                }
                if (shapeFlag & 16) {
                  mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                }
              }
            }
          };
          var patchUnkeyedChildren = function patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) {
            c1 = c1 || EMPTY_ARR;
            c2 = c2 || EMPTY_ARR;
            var oldLength = c1.length;
            var newLength = c2.length;
            var commonLength = Math.min(oldLength, newLength);
            var i;
            for (i = 0; i < commonLength; i++) {
              var nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
              patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
            }
            if (oldLength > newLength) {
              unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
            } else {
              mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, commonLength);
            }
          };
          var patchKeyedChildren = function patchKeyedChildren(c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) {
            var i = 0;
            var l2 = c2.length;
            var e1 = c1.length - 1;
            var e2 = l2 - 1;
            while (i <= e1 && i <= e2) {
              var n1 = c1[i];
              var n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
              if (isSameVNodeType(n1, n2)) {
                patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
              } else {
                break;
              }
              i++;
            }
            while (i <= e1 && i <= e2) {
              var _n = c1[e1];
              var _n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
              if (isSameVNodeType(_n, _n2)) {
                patch(_n, _n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
              } else {
                break;
              }
              e1--;
              e2--;
            }
            if (i > e1) {
              if (i <= e2) {
                var nextPos = e2 + 1;
                var anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
                while (i <= e2) {
                  patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                  i++;
                }
              }
            } else if (i > e2) {
              while (i <= e1) {
                unmount(c1[i], parentComponent, parentSuspense, true);
                i++;
              }
            } else {
              var s1 = i;
              var s2 = i;
              var keyToNewIndexMap = /* @__PURE__ */new Map();
              for (i = s2; i <= e2; i++) {
                var nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
                if (nextChild.key != null) {
                  keyToNewIndexMap.set(nextChild.key, i);
                }
              }
              var j;
              var patched = 0;
              var toBePatched = e2 - s2 + 1;
              var moved = false;
              var maxNewIndexSoFar = 0;
              var newIndexToOldIndexMap = new Array(toBePatched);
              for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0;
              for (i = s1; i <= e1; i++) {
                var prevChild = c1[i];
                if (patched >= toBePatched) {
                  unmount(prevChild, parentComponent, parentSuspense, true);
                  continue;
                }
                var newIndex = void 0;
                if (prevChild.key != null) {
                  newIndex = keyToNewIndexMap.get(prevChild.key);
                } else {
                  for (j = s2; j <= e2; j++) {
                    if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                      newIndex = j;
                      break;
                    }
                  }
                }
                if (newIndex === void 0) {
                  unmount(prevChild, parentComponent, parentSuspense, true);
                } else {
                  newIndexToOldIndexMap[newIndex - s2] = i + 1;
                  if (newIndex >= maxNewIndexSoFar) {
                    maxNewIndexSoFar = newIndex;
                  } else {
                    moved = true;
                  }
                  patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                  patched++;
                }
              }
              var increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
              j = increasingNewIndexSequence.length - 1;
              for (i = toBePatched - 1; i >= 0; i--) {
                var nextIndex = s2 + i;
                var _nextChild = c2[nextIndex];
                var _anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
                if (newIndexToOldIndexMap[i] === 0) {
                  patch(null, _nextChild, container, _anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                } else if (moved) {
                  if (j < 0 || i !== increasingNewIndexSequence[j]) {
                    move(_nextChild, container, _anchor, 2);
                  } else {
                    j--;
                  }
                }
              }
            }
          };
          var move = function move(vnode, container, anchor, moveType) {
            var parentSuspense = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            var el = vnode.el,
              type = vnode.type,
              transition = vnode.transition,
              children = vnode.children,
              shapeFlag = vnode.shapeFlag;
            if (shapeFlag & 6) {
              move(vnode.component.subTree, container, anchor, moveType);
              return;
            }
            if (shapeFlag & 128) {
              vnode.suspense.move(container, anchor, moveType);
              return;
            }
            if (shapeFlag & 64) {
              type.move(vnode, container, anchor, internals);
              return;
            }
            if (type === Fragment) {
              hostInsert(el, container, anchor);
              for (var i = 0; i < children.length; i++) {
                move(children[i], container, anchor, moveType);
              }
              hostInsert(vnode.anchor, container, anchor);
              return;
            }
            if (type === Static) {
              moveStaticNode(vnode, container, anchor);
              return;
            }
            var needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
            if (needTransition2) {
              if (moveType === 0) {
                transition.beforeEnter(el);
                hostInsert(el, container, anchor);
                queuePostRenderEffect(function () {
                  return transition.enter(el);
                }, parentSuspense);
              } else {
                var leave = transition.leave,
                  delayLeave = transition.delayLeave,
                  afterLeave = transition.afterLeave;
                var remove22 = function remove22() {
                  return hostInsert(el, container, anchor);
                };
                var performLeave = function performLeave() {
                  leave(el, function () {
                    remove22();
                    afterLeave && afterLeave();
                  });
                };
                if (delayLeave) {
                  delayLeave(el, remove22, performLeave);
                } else {
                  performLeave();
                }
              }
            } else {
              hostInsert(el, container, anchor);
            }
          };
          var unmount = function unmount(vnode, parentComponent, parentSuspense) {
            var doRemove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            var optimized = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
            var type = vnode.type,
              props = vnode.props,
              ref3 = vnode.ref,
              children = vnode.children,
              dynamicChildren = vnode.dynamicChildren,
              shapeFlag = vnode.shapeFlag,
              patchFlag = vnode.patchFlag,
              dirs = vnode.dirs;
            if (ref3 != null) {
              setRef(ref3, null, parentSuspense, vnode, true);
            }
            if (shapeFlag & 256) {
              parentComponent.ctx.deactivate(vnode);
              return;
            }
            var shouldInvokeDirs = shapeFlag & 1 && dirs;
            var shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
            var vnodeHook;
            if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
              invokeVNodeHook(vnodeHook, parentComponent, vnode);
            }
            if (shapeFlag & 6) {
              unmountComponent(vnode.component, parentSuspense, doRemove);
            } else {
              if (shapeFlag & 128) {
                vnode.suspense.unmount(parentSuspense, doRemove);
                return;
              }
              if (shouldInvokeDirs) {
                invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
              }
              if (shapeFlag & 64) {
                vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
              } else if (dynamicChildren && (
              // #1153: fast path should not be taken for non-stable (v-for) fragments
              type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
                unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
              } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
                unmountChildren(children, parentComponent, parentSuspense);
              }
              if (doRemove) {
                remove2(vnode);
              }
            }
            if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
              queuePostRenderEffect(function () {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
                shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
              }, parentSuspense);
            }
          };
          var remove2 = function remove2(vnode) {
            var type = vnode.type,
              el = vnode.el,
              anchor = vnode.anchor,
              transition = vnode.transition;
            if (type === Fragment) {
              {
                removeFragment(el, anchor);
              }
              return;
            }
            if (type === Static) {
              removeStaticNode(vnode);
              return;
            }
            var performRemove = function performRemove() {
              hostRemove(el);
              if (transition && !transition.persisted && transition.afterLeave) {
                transition.afterLeave();
              }
            };
            if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
              var leave = transition.leave,
                delayLeave = transition.delayLeave;
              var performLeave = function performLeave() {
                return leave(el, performRemove);
              };
              if (delayLeave) {
                delayLeave(vnode.el, performRemove, performLeave);
              } else {
                performLeave();
              }
            } else {
              performRemove();
            }
          };
          var removeFragment = function removeFragment(cur, end) {
            var next;
            while (cur !== end) {
              next = hostNextSibling(cur);
              hostRemove(cur);
              cur = next;
            }
            hostRemove(end);
          };
          var unmountComponent = function unmountComponent(instance, parentSuspense, doRemove) {
            var bum = instance.bum,
              scope = instance.scope,
              update = instance.update,
              subTree = instance.subTree,
              um = instance.um;
            if (bum) {
              invokeArrayFns(bum);
            }
            scope.stop();
            if (update) {
              update.active = false;
              unmount(subTree, instance, parentSuspense, doRemove);
            }
            if (um) {
              queuePostRenderEffect(um, parentSuspense);
            }
            queuePostRenderEffect(function () {
              instance.isUnmounted = true;
            }, parentSuspense);
            if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
              parentSuspense.deps--;
              if (parentSuspense.deps === 0) {
                parentSuspense.resolve();
              }
            }
          };
          var unmountChildren = function unmountChildren(children, parentComponent, parentSuspense) {
            var doRemove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            var optimized = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
            var start = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
            for (var i = start; i < children.length; i++) {
              unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
            }
          };
          var getNextHostNode = function getNextHostNode(vnode) {
            if (vnode.shapeFlag & 6) {
              return getNextHostNode(vnode.component.subTree);
            }
            if (vnode.shapeFlag & 128) {
              return vnode.suspense.next();
            }
            return hostNextSibling(vnode.anchor || vnode.el);
          };
          var isFlushing2 = false;
          var render = function render(vnode, container, namespace) {
            if (vnode == null) {
              if (container._vnode) {
                unmount(container._vnode, null, null, true);
              }
            } else {
              patch(container._vnode || null, vnode, container, null, null, null, namespace);
            }
            if (!isFlushing2) {
              isFlushing2 = true;
              flushPreFlushCbs();
              flushPostFlushCbs();
              isFlushing2 = false;
            }
            container._vnode = vnode;
          };
          var internals = {
            p: patch,
            um: unmount,
            m: move,
            r: remove2,
            mt: mountComponent,
            mc: mountChildren,
            pc: patchChildren,
            pbc: patchBlockChildren,
            n: getNextHostNode,
            o: options
          };
          var hydrate;
          var hydrateNode;
          return {
            render: render,
            hydrate: hydrate,
            createApp: createAppAPI(render, hydrate)
          };
        }
        function resolveChildrenNamespace(_ref16, currentNamespace) {
          var type = _ref16.type,
            props = _ref16.props;
          return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
        }
        function toggleRecurse(_ref17, allowed) {
          var effect2 = _ref17.effect,
            update = _ref17.update;
          effect2.allowRecurse = update.allowRecurse = allowed;
        }
        function needTransition(parentSuspense, transition) {
          return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
        }
        function traverseStaticChildren(n1, n2) {
          var shallow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var ch1 = n1.children;
          var ch2 = n2.children;
          if (isArray(ch1) && isArray(ch2)) {
            for (var i = 0; i < ch1.length; i++) {
              var c1 = ch1[i];
              var c2 = ch2[i];
              if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
                if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
                  c2 = ch2[i] = cloneIfMounted(ch2[i]);
                  c2.el = c1.el;
                }
                if (!shallow) traverseStaticChildren(c1, c2);
              }
              if (c2.type === Text) {
                c2.el = c1.el;
              }
            }
          }
        }
        function getSequence(arr) {
          var p = arr.slice();
          var result = [0];
          var i, j, u, v, c;
          var len = arr.length;
          for (i = 0; i < len; i++) {
            var arrI = arr[i];
            if (arrI !== 0) {
              j = result[result.length - 1];
              if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
              }
              u = 0;
              v = result.length - 1;
              while (u < v) {
                c = u + v >> 1;
                if (arr[result[c]] < arrI) {
                  u = c + 1;
                } else {
                  v = c;
                }
              }
              if (arrI < arr[result[u]]) {
                if (u > 0) {
                  p[i] = result[u - 1];
                }
                result[u] = i;
              }
            }
          }
          u = result.length;
          v = result[u - 1];
          while (u-- > 0) {
            result[u] = v;
            v = p[v];
          }
          return result;
        }
        function locateNonHydratedAsyncRoot(instance) {
          var subComponent = instance.subTree.component;
          if (subComponent) {
            if (subComponent.asyncDep && !subComponent.asyncResolved) {
              return subComponent;
            } else {
              return locateNonHydratedAsyncRoot(subComponent);
            }
          }
        }
        var isTeleport = function isTeleport(type) {
          return type.__isTeleport;
        };
        var Fragment = exports("F", Symbol["for"]("v-fgt"));
        var Text = Symbol["for"]("v-txt");
        var Comment = Symbol["for"]("v-cmt");
        var Static = Symbol["for"]("v-stc");
        var blockStack = [];
        var currentBlock = null;
        function openBlock() {
          var disableTracking = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          blockStack.push(currentBlock = disableTracking ? null : []);
        }
        function closeBlock() {
          blockStack.pop();
          currentBlock = blockStack[blockStack.length - 1] || null;
        }
        var isBlockTreeEnabled = 1;
        function setBlockTracking(value) {
          isBlockTreeEnabled += value;
        }
        function setupBlock(vnode) {
          vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
          closeBlock();
          if (isBlockTreeEnabled > 0 && currentBlock) {
            currentBlock.push(vnode);
          }
          return vnode;
        }
        function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
          return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
        }
        function createBlock(type, props, children, patchFlag, dynamicProps) {
          return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
        }
        function isVNode(value) {
          return value ? value.__v_isVNode === true : false;
        }
        function isSameVNodeType(n1, n2) {
          return n1.type === n2.type && n1.key === n2.key;
        }
        var InternalObjectKey = "__vInternal";
        var normalizeKey = function normalizeKey(_ref18) {
          var key = _ref18.key;
          return key != null ? key : null;
        };
        var normalizeRef = function normalizeRef(_ref19) {
          var ref3 = _ref19.ref,
            ref_key = _ref19.ref_key,
            ref_for = _ref19.ref_for;
          if (typeof ref3 === "number") {
            ref3 = "" + ref3;
          }
          return ref3 != null ? isString(ref3) || isRef(ref3) || isFunction(ref3) ? {
            i: currentRenderingInstance,
            r: ref3,
            k: ref_key,
            f: !!ref_for
          } : ref3 : null;
        };
        function createBaseVNode(type) {
          var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var patchFlag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var dynamicProps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
          var shapeFlag = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : type === Fragment ? 0 : 1;
          var isBlockNode = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
          var needFullChildrenNormalization = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
          var vnode = {
            __v_isVNode: true,
            __v_skip: true,
            type: type,
            props: props,
            key: props && normalizeKey(props),
            ref: props && normalizeRef(props),
            scopeId: currentScopeId,
            slotScopeIds: null,
            children: children,
            component: null,
            suspense: null,
            ssContent: null,
            ssFallback: null,
            dirs: null,
            transition: null,
            el: null,
            anchor: null,
            target: null,
            targetAnchor: null,
            staticCount: 0,
            shapeFlag: shapeFlag,
            patchFlag: patchFlag,
            dynamicProps: dynamicProps,
            dynamicChildren: null,
            appContext: null,
            ctx: currentRenderingInstance
          };
          if (needFullChildrenNormalization) {
            normalizeChildren(vnode, children);
            if (shapeFlag & 128) {
              type.normalize(vnode);
            }
          } else if (children) {
            vnode.shapeFlag |= isString(children) ? 8 : 16;
          }
          if (isBlockTreeEnabled > 0 &&
          // avoid a block node from tracking itself
          !isBlockNode &&
          // has current parent block
          currentBlock && (
          // presence of a patch flag indicates this node needs patching on updates.
          // component nodes also should always be patched, because even if the
          // component doesn't need to update, it needs to persist the instance on to
          // the next vnode so that it can be properly unmounted later.
          vnode.patchFlag > 0 || shapeFlag & 6) &&
          // the EVENTS flag is only for hydration and if it is the only flag, the
          // vnode should not be considered dynamic due to handler caching.
          vnode.patchFlag !== 32) {
            currentBlock.push(vnode);
          }
          return vnode;
        }
        var createVNode = exports("k", _createVNode);
        function _createVNode(type) {
          var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var patchFlag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var dynamicProps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
          var isBlockNode = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
          if (!type || type === NULL_DYNAMIC_COMPONENT) {
            type = Comment;
          }
          if (isVNode(type)) {
            var cloned = cloneVNode(type, props, true
            /* mergeRef: true */);
            if (children) {
              normalizeChildren(cloned, children);
            }
            if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
              if (cloned.shapeFlag & 6) {
                currentBlock[currentBlock.indexOf(type)] = cloned;
              } else {
                currentBlock.push(cloned);
              }
            }
            cloned.patchFlag |= -2;
            return cloned;
          }
          if (isClassComponent(type)) {
            type = type.__vccOpts;
          }
          if (props) {
            props = guardReactiveProps(props);
            var _props = props,
              klass = _props["class"],
              style = _props.style;
            if (klass && !isString(klass)) {
              props["class"] = normalizeClass(klass);
            }
            if (isObject(style)) {
              if (isProxy(style) && !isArray(style)) {
                style = extend({}, style);
              }
              props.style = normalizeStyle(style);
            }
          }
          var shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
          return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
        }
        function guardReactiveProps(props) {
          if (!props) return null;
          return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
        }
        function cloneVNode(vnode, extraProps) {
          var mergeRef = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var props = vnode.props,
            ref3 = vnode.ref,
            patchFlag = vnode.patchFlag,
            children = vnode.children;
          var mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
          var cloned = {
            __v_isVNode: true,
            __v_skip: true,
            type: vnode.type,
            props: mergedProps,
            key: mergedProps && normalizeKey(mergedProps),
            ref: extraProps && extraProps.ref ?
            // #2078 in the case of <component :is="vnode" ref="extra"/>
            // if the vnode itself already has a ref, cloneVNode will need to merge
            // the refs so the single vnode can be set on multiple refs
            mergeRef && ref3 ? isArray(ref3) ? ref3.concat(normalizeRef(extraProps)) : [ref3, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref3,
            scopeId: vnode.scopeId,
            slotScopeIds: vnode.slotScopeIds,
            children: children,
            target: vnode.target,
            targetAnchor: vnode.targetAnchor,
            staticCount: vnode.staticCount,
            shapeFlag: vnode.shapeFlag,
            // if the vnode is cloned with extra props, we can no longer assume its
            // existing patch flag to be reliable and need to add the FULL_PROPS flag.
            // note: preserve flag for fragments since they use the flag for children
            // fast paths only.
            patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
            dynamicProps: vnode.dynamicProps,
            dynamicChildren: vnode.dynamicChildren,
            appContext: vnode.appContext,
            dirs: vnode.dirs,
            transition: vnode.transition,
            // These should technically only be non-null on mounted VNodes. However,
            // they *should* be copied for kept-alive vnodes. So we just always copy
            // them since them being non-null during a mount doesn't affect the logic as
            // they will simply be overwritten.
            component: vnode.component,
            suspense: vnode.suspense,
            ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
            ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
            el: vnode.el,
            anchor: vnode.anchor,
            ctx: vnode.ctx,
            ce: vnode.ce
          };
          return cloned;
        }
        function createTextVNode() {
          var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : " ";
          var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          return createVNode(Text, null, text, flag);
        }
        function createStaticVNode(content, numberOfNodes) {
          var vnode = createVNode(Static, null, content);
          vnode.staticCount = numberOfNodes;
          return vnode;
        }
        function createCommentVNode() {
          var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          var asBlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
        }
        function normalizeVNode(child) {
          if (child == null || typeof child === "boolean") {
            return createVNode(Comment);
          } else if (isArray(child)) {
            return createVNode(Fragment, null,
            // #3666, avoid reference pollution when reusing vnode
            child.slice());
          } else if (_typeof(child) === "object") {
            return cloneIfMounted(child);
          } else {
            return createVNode(Text, null, String(child));
          }
        }
        function cloneIfMounted(child) {
          return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
        }
        function normalizeChildren(vnode, children) {
          var type = 0;
          var shapeFlag = vnode.shapeFlag;
          if (children == null) {
            children = null;
          } else if (isArray(children)) {
            type = 16;
          } else if (_typeof(children) === "object") {
            if (shapeFlag & (1 | 64)) {
              var slot = children["default"];
              if (slot) {
                slot._c && (slot._d = false);
                normalizeChildren(vnode, slot());
                slot._c && (slot._d = true);
              }
              return;
            } else {
              type = 32;
              var slotFlag = children._;
              if (!slotFlag && !(InternalObjectKey in children)) {
                children._ctx = currentRenderingInstance;
              } else if (slotFlag === 3 && currentRenderingInstance) {
                if (currentRenderingInstance.slots._ === 1) {
                  children._ = 1;
                } else {
                  children._ = 2;
                  vnode.patchFlag |= 1024;
                }
              }
            }
          } else if (isFunction(children)) {
            children = {
              "default": children,
              _ctx: currentRenderingInstance
            };
            type = 32;
          } else {
            children = String(children);
            if (shapeFlag & 64) {
              type = 16;
              children = [createTextVNode(children)];
            } else {
              type = 8;
            }
          }
          vnode.children = children;
          vnode.shapeFlag |= type;
        }
        function mergeProps() {
          var ret = {};
          for (var i = 0; i < arguments.length; i++) {
            var toMerge = i < 0 || arguments.length <= i ? undefined : arguments[i];
            for (var key in toMerge) {
              if (key === "class") {
                if (ret["class"] !== toMerge["class"]) {
                  ret["class"] = normalizeClass([ret["class"], toMerge["class"]]);
                }
              } else if (key === "style") {
                ret.style = normalizeStyle([ret.style, toMerge.style]);
              } else if (isOn(key)) {
                var existing = ret[key];
                var incoming = toMerge[key];
                if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
                  ret[key] = existing ? [].concat(existing, incoming) : incoming;
                }
              } else if (key !== "") {
                ret[key] = toMerge[key];
              }
            }
          }
          return ret;
        }
        function invokeVNodeHook(hook, instance, vnode) {
          var prevVNode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
          callWithAsyncErrorHandling(hook, instance, 7, [vnode, prevVNode]);
        }
        var emptyAppContext = createAppContext();
        var uid = 0;
        function createComponentInstance(vnode, parent, suspense) {
          var type = vnode.type;
          var appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
          var instance = {
            uid: uid++,
            vnode: vnode,
            type: type,
            parent: parent,
            appContext: appContext,
            root: null,
            // to be immediately set
            next: null,
            subTree: null,
            // will be set synchronously right after creation
            effect: null,
            update: null,
            // will be set synchronously right after creation
            scope: new EffectScope(true
            /* detached */),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: parent ? parent.provides : Object.create(appContext.provides),
            accessCache: null,
            renderCache: [],
            // local resolved assets
            components: null,
            directives: null,
            // resolved props and emits options
            propsOptions: normalizePropsOptions(type, appContext),
            emitsOptions: normalizeEmitsOptions(type, appContext),
            // emit
            emit: null,
            // to be set immediately
            emitted: null,
            // props default value
            propsDefaults: EMPTY_OBJ,
            // inheritAttrs
            inheritAttrs: type.inheritAttrs,
            // state
            ctx: EMPTY_OBJ,
            data: EMPTY_OBJ,
            props: EMPTY_OBJ,
            attrs: EMPTY_OBJ,
            slots: EMPTY_OBJ,
            refs: EMPTY_OBJ,
            setupState: EMPTY_OBJ,
            setupContext: null,
            attrsProxy: null,
            slotsProxy: null,
            // suspense related
            suspense: suspense,
            suspenseId: suspense ? suspense.pendingId : 0,
            asyncDep: null,
            asyncResolved: false,
            // lifecycle hooks
            // not using enums here because it results in computed properties
            isMounted: false,
            isUnmounted: false,
            isDeactivated: false,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
          };
          {
            instance.ctx = {
              _: instance
            };
          }
          instance.root = parent ? parent.root : instance;
          instance.emit = emit.bind(null, instance);
          if (vnode.ce) {
            vnode.ce(instance);
          }
          return instance;
        }
        var currentInstance = null;
        var getCurrentInstance = function getCurrentInstance() {
          return currentInstance || currentRenderingInstance;
        };
        var internalSetCurrentInstance;
        var setInSSRSetupState;
        {
          var g = getGlobalThis();
          var registerGlobalSetter = function registerGlobalSetter(key, setter) {
            var setters;
            if (!(setters = g[key])) setters = g[key] = [];
            setters.push(setter);
            return function (v) {
              if (setters.length > 1) setters.forEach(function (set) {
                return set(v);
              });else setters[0](v);
            };
          };
          internalSetCurrentInstance = registerGlobalSetter("__VUE_INSTANCE_SETTERS__", function (v) {
            return currentInstance = v;
          });
          setInSSRSetupState = registerGlobalSetter("__VUE_SSR_SETTERS__", function (v) {
            return isInSSRComponentSetup = v;
          });
        }
        var setCurrentInstance = function setCurrentInstance(instance) {
          var prev = currentInstance;
          internalSetCurrentInstance(instance);
          instance.scope.on();
          return function () {
            instance.scope.off();
            internalSetCurrentInstance(prev);
          };
        };
        var unsetCurrentInstance = function unsetCurrentInstance() {
          currentInstance && currentInstance.scope.off();
          internalSetCurrentInstance(null);
        };
        function isStatefulComponent(instance) {
          return instance.vnode.shapeFlag & 4;
        }
        var isInSSRComponentSetup = false;
        function setupComponent(instance) {
          var isSSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          isSSR && setInSSRSetupState(isSSR);
          var _instance$vnode = instance.vnode,
            props = _instance$vnode.props,
            children = _instance$vnode.children;
          var isStateful = isStatefulComponent(instance);
          initProps(instance, props, isStateful, isSSR);
          initSlots(instance, children);
          var setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
          isSSR && setInSSRSetupState(false);
          return setupResult;
        }
        function setupStatefulComponent(instance, isSSR) {
          var Component = instance.type;
          instance.accessCache = /* @__PURE__ */Object.create(null);
          instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
          var setup = Component.setup;
          if (setup) {
            var setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
            var reset = setCurrentInstance(instance);
            pauseTracking();
            var setupResult = callWithErrorHandling(setup, instance, 0, [instance.props, setupContext]);
            resetTracking();
            reset();
            if (isPromise(setupResult)) {
              setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
              if (isSSR) {
                return setupResult.then(function (resolvedResult) {
                  handleSetupResult(instance, resolvedResult, isSSR);
                })["catch"](function (e) {
                  handleError(e, instance, 0);
                });
              } else {
                instance.asyncDep = setupResult;
              }
            } else {
              handleSetupResult(instance, setupResult, isSSR);
            }
          } else {
            finishComponentSetup(instance, isSSR);
          }
        }
        function handleSetupResult(instance, setupResult, isSSR) {
          if (isFunction(setupResult)) {
            if (instance.type.__ssrInlineRender) {
              instance.ssrRender = setupResult;
            } else {
              instance.render = setupResult;
            }
          } else if (isObject(setupResult)) {
            instance.setupState = proxyRefs(setupResult);
          } else ;
          finishComponentSetup(instance, isSSR);
        }
        var compile;
        function finishComponentSetup(instance, isSSR, skipOptions) {
          var Component = instance.type;
          if (!instance.render) {
            if (!isSSR && compile && !Component.render) {
              var template = Component.template || resolveMergedOptions(instance).template;
              if (template) {
                var _instance$appContext$ = instance.appContext.config,
                  isCustomElement = _instance$appContext$.isCustomElement,
                  compilerOptions = _instance$appContext$.compilerOptions;
                var delimiters = Component.delimiters,
                  componentCompilerOptions = Component.compilerOptions;
                var finalCompilerOptions = extend(extend({
                  isCustomElement: isCustomElement,
                  delimiters: delimiters
                }, compilerOptions), componentCompilerOptions);
                Component.render = compile(template, finalCompilerOptions);
              }
            }
            instance.render = Component.render || NOOP;
          }
          {
            var reset = setCurrentInstance(instance);
            pauseTracking();
            try {
              applyOptions(instance);
            } finally {
              resetTracking();
              reset();
            }
          }
        }
        function getAttrsProxy(instance) {
          return instance.attrsProxy || (instance.attrsProxy = new Proxy(instance.attrs, {
            get: function get(target, key) {
              track(instance, "get", "$attrs");
              return target[key];
            }
          }));
        }
        function createSetupContext(instance) {
          var expose = function expose(exposed) {
            instance.exposed = exposed || {};
          };
          {
            return {
              get attrs() {
                return getAttrsProxy(instance);
              },
              slots: instance.slots,
              emit: instance.emit,
              expose: expose
            };
          }
        }
        function getExposeProxy(instance) {
          if (instance.exposed) {
            return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
              get: function get(target, key) {
                if (key in target) {
                  return target[key];
                } else if (key in publicPropertiesMap) {
                  return publicPropertiesMap[key](instance);
                }
              },
              has: function has(target, key) {
                return key in target || key in publicPropertiesMap;
              }
            }));
          }
        }
        var classifyRE = /(?:^|[-_])(\w)/g;
        var classify = function classify(str) {
          return str.replace(classifyRE, function (c) {
            return c.toUpperCase();
          }).replace(/[-_]/g, "");
        };
        function getComponentName(Component) {
          var includeInferred = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
        }
        function formatComponentName(instance, Component) {
          var isRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var name = getComponentName(Component);
          if (!name && Component.__file) {
            var match = Component.__file.match(/([^/\\]+)\.\w+$/);
            if (match) {
              name = match[1];
            }
          }
          if (!name && instance && instance.parent) {
            var inferFromRegistry = function inferFromRegistry(registry) {
              for (var key in registry) {
                if (registry[key] === Component) {
                  return key;
                }
              }
            };
            name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
          }
          return name ? classify(name) : isRoot ? "App" : "Anonymous";
        }
        function isClassComponent(value) {
          return isFunction(value) && "__vccOpts" in value;
        }
        var computed = exports("c", function (getterOrOptions, debugOptions) {
          var c = computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
          return c;
        });
        function useModel(props, name) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJ;
          var i = getCurrentInstance();
          var camelizedName = camelize(name);
          var hyphenatedName = hyphenate(name);
          var res = customRef(function (track2, trigger2) {
            var localValue;
            watchSyncEffect(function () {
              var propValue = props[name];
              if (hasChanged(localValue, propValue)) {
                localValue = propValue;
                trigger2();
              }
            });
            return {
              get: function get() {
                track2();
                return options.get ? options.get(localValue) : localValue;
              },
              set: function set(value) {
                var rawProps = i.vnode.props;
                if (!(rawProps && (
                // check if parent has passed v-model
                name in rawProps || camelizedName in rawProps || hyphenatedName in rawProps) && ("onUpdate:".concat(name) in rawProps || "onUpdate:".concat(camelizedName) in rawProps || "onUpdate:".concat(hyphenatedName) in rawProps)) && hasChanged(value, localValue)) {
                  localValue = value;
                  trigger2();
                }
                i.emit("update:".concat(name), options.set ? options.set(value) : value);
              }
            };
          });
          var modifierKey = "modelModifiers";
          res[Symbol.iterator] = function () {
            var i2 = 0;
            return {
              next: function next() {
                if (i2 < 2) {
                  return {
                    value: i2++ ? props[modifierKey] || {} : res,
                    done: false
                  };
                } else {
                  return {
                    done: true
                  };
                }
              }
            };
          };
          return res;
        }
        var version = "3.4.21";

        /**
        * @vue/runtime-dom v3.4.21
        * (c) 2018-present Yuxi (Evan) You and Vue contributors
        * @license MIT
        **/
        var svgNS = "http://www.w3.org/2000/svg";
        var mathmlNS = "http://www.w3.org/1998/Math/MathML";
        var doc = typeof document !== "undefined" ? document : null;
        var templateContainer = doc && /* @__PURE__ */doc.createElement("template");
        var nodeOps = {
          insert: function insert(child, parent, anchor) {
            parent.insertBefore(child, anchor || null);
          },
          remove: function remove(child) {
            var parent = child.parentNode;
            if (parent) {
              parent.removeChild(child);
            }
          },
          createElement: function createElement(tag, namespace, is, props) {
            var el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : doc.createElement(tag, is ? {
              is: is
            } : void 0);
            if (tag === "select" && props && props.multiple != null) {
              el.setAttribute("multiple", props.multiple);
            }
            return el;
          },
          createText: function createText(text) {
            return doc.createTextNode(text);
          },
          createComment: function createComment(text) {
            return doc.createComment(text);
          },
          setText: function setText(node, text) {
            node.nodeValue = text;
          },
          setElementText: function setElementText(el, text) {
            el.textContent = text;
          },
          parentNode: function parentNode(node) {
            return node.parentNode;
          },
          nextSibling: function nextSibling(node) {
            return node.nextSibling;
          },
          querySelector: function querySelector(selector) {
            return doc.querySelector(selector);
          },
          setScopeId: function setScopeId(el, id) {
            el.setAttribute(id, "");
          },
          // __UNSAFE__
          // Reason: innerHTML.
          // Static content here can only come from compiled templates.
          // As long as the user only uses trusted templates, this is safe.
          insertStaticContent: function insertStaticContent(content, parent, anchor, namespace, start, end) {
            var before = anchor ? anchor.previousSibling : parent.lastChild;
            if (start && (start === end || start.nextSibling)) {
              while (true) {
                parent.insertBefore(start.cloneNode(true), anchor);
                if (start === end || !(start = start.nextSibling)) break;
              }
            } else {
              templateContainer.innerHTML = namespace === "svg" ? "<svg>".concat(content, "</svg>") : namespace === "mathml" ? "<math>".concat(content, "</math>") : content;
              var template = templateContainer.content;
              if (namespace === "svg" || namespace === "mathml") {
                var wrapper = template.firstChild;
                while (wrapper.firstChild) {
                  template.appendChild(wrapper.firstChild);
                }
                template.removeChild(wrapper);
              }
              parent.insertBefore(template, anchor);
            }
            return [
            // first
            before ? before.nextSibling : parent.firstChild,
            // last
            anchor ? anchor.previousSibling : parent.lastChild];
          }
        };
        var vtcKey = Symbol("_vtc");
        function patchClass(el, value, isSVG) {
          var transitionClasses = el[vtcKey];
          if (transitionClasses) {
            value = (value ? [value].concat(_toConsumableArray(transitionClasses)) : _toConsumableArray(transitionClasses)).join(" ");
          }
          if (value == null) {
            el.removeAttribute("class");
          } else if (isSVG) {
            el.setAttribute("class", value);
          } else {
            el.className = value;
          }
        }
        var vShowOriginalDisplay = Symbol("_vod");
        var vShowHidden = Symbol("_vsh");
        var CSS_VAR_TEXT = Symbol("");
        var displayRE = /(^|;)\s*display\s*:/;
        function patchStyle(el, prev, next) {
          var style = el.style;
          var isCssString = isString(next);
          var hasControlledDisplay = false;
          if (next && !isCssString) {
            if (prev) {
              if (!isString(prev)) {
                for (var key in prev) {
                  if (next[key] == null) {
                    setStyle(style, key, "");
                  }
                }
              } else {
                var _iterator4 = _createForOfIteratorHelper(prev.split(";")),
                  _step4;
                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var prevStyle = _step4.value;
                    var _key14 = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
                    if (next[_key14] == null) {
                      setStyle(style, _key14, "");
                    }
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              }
            }
            for (var _key15 in next) {
              if (_key15 === "display") {
                hasControlledDisplay = true;
              }
              setStyle(style, _key15, next[_key15]);
            }
          } else {
            if (isCssString) {
              if (prev !== next) {
                var cssVarText = style[CSS_VAR_TEXT];
                if (cssVarText) {
                  next += ";" + cssVarText;
                }
                style.cssText = next;
                hasControlledDisplay = displayRE.test(next);
              }
            } else if (prev) {
              el.removeAttribute("style");
            }
          }
          if (vShowOriginalDisplay in el) {
            el[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
            if (el[vShowHidden]) {
              style.display = "none";
            }
          }
        }
        var importantRE = /\s*!important$/;
        function setStyle(style, name, val) {
          if (isArray(val)) {
            val.forEach(function (v) {
              return setStyle(style, name, v);
            });
          } else {
            if (val == null) val = "";
            if (name.startsWith("--")) {
              style.setProperty(name, val);
            } else {
              var prefixed = autoPrefix(style, name);
              if (importantRE.test(val)) {
                style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
              } else {
                style[prefixed] = val;
              }
            }
          }
        }
        var prefixes = ["Webkit", "Moz", "ms"];
        var prefixCache = {};
        function autoPrefix(style, rawName) {
          var cached = prefixCache[rawName];
          if (cached) {
            return cached;
          }
          var name = camelize(rawName);
          if (name !== "filter" && name in style) {
            return prefixCache[rawName] = name;
          }
          name = capitalize(name);
          for (var i = 0; i < prefixes.length; i++) {
            var prefixed = prefixes[i] + name;
            if (prefixed in style) {
              return prefixCache[rawName] = prefixed;
            }
          }
          return rawName;
        }
        var xlinkNS = "http://www.w3.org/1999/xlink";
        function patchAttr(el, key, value, isSVG, instance) {
          if (isSVG && key.startsWith("xlink:")) {
            if (value == null) {
              el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
            } else {
              el.setAttributeNS(xlinkNS, key, value);
            }
          } else {
            var isBoolean = isSpecialBooleanAttr(key);
            if (value == null || isBoolean && !includeBooleanAttr(value)) {
              el.removeAttribute(key);
            } else {
              el.setAttribute(key, isBoolean ? "" : value);
            }
          }
        }
        function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
          if (key === "innerHTML" || key === "textContent") {
            if (prevChildren) {
              unmountChildren(prevChildren, parentComponent, parentSuspense);
            }
            el[key] = value == null ? "" : value;
            return;
          }
          var tag = el.tagName;
          if (key === "value" && tag !== "PROGRESS" &&
          // custom elements may use _value internally
          !tag.includes("-")) {
            var oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
            var newValue = value == null ? "" : value;
            if (oldValue !== newValue || !("_value" in el)) {
              el.value = newValue;
            }
            if (value == null) {
              el.removeAttribute(key);
            }
            el._value = value;
            return;
          }
          var needRemove = false;
          if (value === "" || value == null) {
            var type = _typeof(el[key]);
            if (type === "boolean") {
              value = includeBooleanAttr(value);
            } else if (value == null && type === "string") {
              value = "";
              needRemove = true;
            } else if (type === "number") {
              value = 0;
              needRemove = true;
            }
          }
          try {
            el[key] = value;
          } catch (e) {}
          needRemove && el.removeAttribute(key);
        }
        function addEventListener(el, event, handler, options) {
          el.addEventListener(event, handler, options);
        }
        function removeEventListener(el, event, handler, options) {
          el.removeEventListener(event, handler, options);
        }
        var veiKey = Symbol("_vei");
        function patchEvent(el, rawName, prevValue, nextValue) {
          var instance = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
          var invokers = el[veiKey] || (el[veiKey] = {});
          var existingInvoker = invokers[rawName];
          if (nextValue && existingInvoker) {
            existingInvoker.value = nextValue;
          } else {
            var _parseName = parseName(rawName),
              _parseName2 = _slicedToArray(_parseName, 2),
              name = _parseName2[0],
              _options = _parseName2[1];
            if (nextValue) {
              var invoker = invokers[rawName] = createInvoker(nextValue, instance);
              addEventListener(el, name, invoker, _options);
            } else if (existingInvoker) {
              removeEventListener(el, name, existingInvoker, _options);
              invokers[rawName] = void 0;
            }
          }
        }
        var optionsModifierRE = /(?:Once|Passive|Capture)$/;
        function parseName(name) {
          var options;
          if (optionsModifierRE.test(name)) {
            options = {};
            var m;
            while (m = name.match(optionsModifierRE)) {
              name = name.slice(0, name.length - m[0].length);
              options[m[0].toLowerCase()] = true;
            }
          }
          var event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
          return [event, options];
        }
        var cachedNow = 0;
        var p = /* @__PURE__ */Promise.resolve();
        var getNow = function getNow() {
          return cachedNow || (p.then(function () {
            return cachedNow = 0;
          }), cachedNow = Date.now());
        };
        function createInvoker(initialValue, instance) {
          var invoker = function invoker(e) {
            if (!e._vts) {
              e._vts = Date.now();
            } else if (e._vts <= invoker.attached) {
              return;
            }
            callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5, [e]);
          };
          invoker.value = initialValue;
          invoker.attached = getNow();
          return invoker;
        }
        function patchStopImmediatePropagation(e, value) {
          if (isArray(value)) {
            var originalStop = e.stopImmediatePropagation;
            e.stopImmediatePropagation = function () {
              originalStop.call(e);
              e._stopped = true;
            };
            return value.map(function (fn) {
              return function (e2) {
                return !e2._stopped && fn && fn(e2);
              };
            });
          } else {
            return value;
          }
        }
        var isNativeOn = function isNativeOn(key) {
          return key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 &&
          // lowercase letter
          key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
        };
        var patchProp = function patchProp(el, key, prevValue, nextValue, namespace, prevChildren, parentComponent, parentSuspense, unmountChildren) {
          var isSVG = namespace === "svg";
          if (key === "class") {
            patchClass(el, nextValue, isSVG);
          } else if (key === "style") {
            patchStyle(el, prevValue, nextValue);
          } else if (isOn(key)) {
            if (!isModelListener(key)) {
              patchEvent(el, key, prevValue, nextValue, parentComponent);
            }
          } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
            patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
          } else {
            if (key === "true-value") {
              el._trueValue = nextValue;
            } else if (key === "false-value") {
              el._falseValue = nextValue;
            }
            patchAttr(el, key, nextValue, isSVG);
          }
        };
        function shouldSetAsProp(el, key, value, isSVG) {
          if (isSVG) {
            if (key === "innerHTML" || key === "textContent") {
              return true;
            }
            if (key in el && isNativeOn(key) && isFunction(value)) {
              return true;
            }
            return false;
          }
          if (key === "spellcheck" || key === "draggable" || key === "translate") {
            return false;
          }
          if (key === "form") {
            return false;
          }
          if (key === "list" && el.tagName === "INPUT") {
            return false;
          }
          if (key === "type" && el.tagName === "TEXTAREA") {
            return false;
          }
          if (key === "width" || key === "height") {
            var tag = el.tagName;
            if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") {
              return false;
            }
          }
          if (isNativeOn(key) && isString(value)) {
            return false;
          }
          return key in el;
        }
        var getModelAssigner = function getModelAssigner(vnode) {
          var fn = vnode.props["onUpdate:modelValue"] || false;
          return isArray(fn) ? function (value) {
            return invokeArrayFns(fn, value);
          } : fn;
        };
        function onCompositionStart(e) {
          e.target.composing = true;
        }
        function onCompositionEnd(e) {
          var target = e.target;
          if (target.composing) {
            target.composing = false;
            target.dispatchEvent(new Event("input"));
          }
        }
        var assignKey = Symbol("_assign");
        var vModelText = exports("v", {
          created: function created(el, _ref20, vnode) {
            var _ref20$modifiers = _ref20.modifiers,
              lazy = _ref20$modifiers.lazy,
              trim = _ref20$modifiers.trim,
              number = _ref20$modifiers.number;
            el[assignKey] = getModelAssigner(vnode);
            var castToNumber = number || vnode.props && vnode.props.type === "number";
            addEventListener(el, lazy ? "change" : "input", function (e) {
              if (e.target.composing) return;
              var domValue = el.value;
              if (trim) {
                domValue = domValue.trim();
              }
              if (castToNumber) {
                domValue = looseToNumber(domValue);
              }
              el[assignKey](domValue);
            });
            if (trim) {
              addEventListener(el, "change", function () {
                el.value = el.value.trim();
              });
            }
            if (!lazy) {
              addEventListener(el, "compositionstart", onCompositionStart);
              addEventListener(el, "compositionend", onCompositionEnd);
              addEventListener(el, "change", onCompositionEnd);
            }
          },
          // set value on mounted so it's after min/max for type="range"
          mounted: function mounted(el, _ref21) {
            var value = _ref21.value;
            el.value = value == null ? "" : value;
          },
          beforeUpdate: function beforeUpdate(el, _ref22, vnode) {
            var value = _ref22.value,
              _ref22$modifiers = _ref22.modifiers,
              lazy = _ref22$modifiers.lazy,
              trim = _ref22$modifiers.trim,
              number = _ref22$modifiers.number;
            el[assignKey] = getModelAssigner(vnode);
            if (el.composing) return;
            var elValue = number || el.type === "number" ? looseToNumber(el.value) : el.value;
            var newValue = value == null ? "" : value;
            if (elValue === newValue) {
              return;
            }
            if (document.activeElement === el && el.type !== "range") {
              if (lazy) {
                return;
              }
              if (trim && el.value.trim() === newValue) {
                return;
              }
            }
            el.value = newValue;
          }
        });
        var rendererOptions = /* @__PURE__ */extend({
          patchProp: patchProp
        }, nodeOps);
        var renderer;
        function ensureRenderer() {
          return renderer || (renderer = createRenderer(rendererOptions));
        }
        var createApp = exports("s", function () {
          var _ensureRenderer;
          var app = (_ensureRenderer = ensureRenderer()).createApp.apply(_ensureRenderer, arguments);
          var mount = app.mount;
          app.mount = function (containerOrSelector) {
            var container = normalizeContainer(containerOrSelector);
            if (!container) return;
            var component = app._component;
            if (!isFunction(component) && !component.render && !component.template) {
              component.template = container.innerHTML;
            }
            container.innerHTML = "";
            var proxy = mount(container, false, resolveRootNamespace(container));
            if (container instanceof Element) {
              container.removeAttribute("v-cloak");
              container.setAttribute("data-v-app", "");
            }
            return proxy;
          };
          return app;
        });
        function resolveRootNamespace(container) {
          if (container instanceof SVGElement) {
            return "svg";
          }
          if (typeof MathMLElement === "function" && container instanceof MathMLElement) {
            return "mathml";
          }
        }
        function normalizeContainer(container) {
          if (isString(container)) {
            var res = document.querySelector(container);
            return res;
          }
          return container;
        }
        var EN_US = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'];
        function en_US(diff, idx) {
          if (idx === 0) return ['just now', 'right now'];
          var unit = EN_US[Math.floor(idx / 2)];
          if (diff > 1) unit += 's';
          return [diff + " " + unit + " ago", "in " + diff + " " + unit];
        }
        var ZH_CN = ['秒', '分钟', '小时', '天', '周', '个月', '年'];
        function zh_CN(diff, idx) {
          if (idx === 0) return ['刚刚', '片刻后'];
          var unit = ZH_CN[~~(idx / 2)];
          return [diff + " " + unit + "\u524D", diff + " " + unit + "\u540E"];
        }

        /**
         * Created by hustcc on 18/5/20.
         * Contract: i@hust.cc
         */
        /**
         * All supported locales
         */
        var Locales = {};
        /**
         * register a locale
         * @param locale
         * @param func
         */
        var register = function register(locale, func) {
          Locales[locale] = func;
        };
        /**
         * get a locale, default is en_US
         * @param locale
         * @returns {*}
         */
        var getLocale = function getLocale(locale) {
          return Locales[locale] || Locales['en_US'];
        };

        /**
         * Created by hustcc on 18/5/20.
         * Contract: i@hust.cc
         */
        var SEC_ARRAY = [60, 60, 24, 7, 365 / 7 / 12, 12];
        /**
         * format Date / string / timestamp to timestamp
         * @param input
         * @returns {*}
         */
        function toDate(input) {
          if (input instanceof Date) return input;
          // @ts-ignore
          if (!isNaN(input) || /^\d+$/.test(input)) return new Date(parseInt(input));
          input = (input || ''
          // @ts-ignore
          ).trim().replace(/\.\d+/, '') // remove milliseconds
          .replace(/-/, '/').replace(/-/, '/').replace(/(\d)T(\d)/, '$1 $2').replace(/Z/, ' UTC') // 2017-2-5T3:57:52Z -> 2017-2-5 3:57:52UTC
          .replace(/([+-]\d\d):?(\d\d)/, ' $1$2'); // -04:00 -> -0400
          return new Date(input);
        }
        /**
         * format the diff second to *** time ago, with setting locale
         * @param diff
         * @param localeFunc
         * @returns
         */
        function formatDiff(diff, localeFunc) {
          /**
           * if locale is not exist, use defaultLocale.
           * if defaultLocale is not exist, use build-in `en`.
           * be sure of no error when locale is not exist.
           *
           * If `time in`, then 1
           * If `time ago`, then 0
           */
          var agoIn = diff < 0 ? 1 : 0;
          /**
           * Get absolute value of number (|diff| is non-negative) value of x
           * |diff| = diff if diff is positive
           * |diff| = -diff if diff is negative
           * |0| = 0
           */
          diff = Math.abs(diff);
          /**
           * Time in seconds
           */
          var totalSec = diff;
          /**
           * Unit of time
           */
          var idx = 0;
          for (; diff >= SEC_ARRAY[idx] && idx < SEC_ARRAY.length; idx++) {
            diff /= SEC_ARRAY[idx];
          }
          /**
           * Math.floor() is alternative of ~~
           *
           * The differences and bugs:
           * Math.floor(3.7) -> 4 but ~~3.7 -> 3
           * Math.floor(1559125440000.6) -> 1559125440000 but ~~1559125440000.6 -> 52311552
           *
           * More information about the performance of algebraic:
           * https://www.youtube.com/watch?v=65-RbBwZQdU
           */
          diff = Math.floor(diff);
          idx *= 2;
          if (diff > (idx === 0 ? 9 : 1)) idx += 1;
          return localeFunc(diff, idx, totalSec)[agoIn].replace('%s', diff.toString());
        }
        /**
         * calculate the diff second between date to be formatted an now date.
         * @param date
         * @param relativeDate
         * @returns {number}
         */
        function diffSec(date, relativeDate) {
          var relDate = new Date();
          return (+relDate - +toDate(date)) / 1000;
        }

        /**
         * format a TDate into string
         * @param date
         * @param locale
         * @param opts
         */
        var format = function format(date, locale, opts) {
          // diff seconds
          var sec = diffSec(date);
          // format it with locale
          return formatDiff(sec, getLocale(locale));
        };

        /**
         * Created by hustcc on 18/5/20.
         * Contract: i@hust.cc
         */
        register('en_US', en_US);
        register('zh_CN', zh_CN);
        function processingHandlers(globalOptions) {
          var label_map = globalOptions.label_map;
          var new_mirrors = Object.fromEntries(globalOptions.new_mirrors.map(function (x) {
            return [x, true];
          }));
          var unlisted = globalOptions.unlisted_mirrors;
          var forceHelp = Object.fromEntries(globalOptions.force_redirect_help_mirrors.map(function (m) {
            return [m, true];
          }));
          var descriptions = Object.fromEntries(globalOptions.mirror_desc.map(function (m) {
            return [m.name, m.desc];
          }));
          var processLinkItem = function processLinkItem(mirrors) {
            var processed = [];
            var _iterator5 = _createForOfIteratorHelper(mirrors),
              _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var d = _step5.value;
                if (d.link_to === void 0) {
                  processed.push(d);
                  continue;
                }
                var _iterator6 = _createForOfIteratorHelper(mirrors),
                  _step6;
                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var target = _step6.value;
                    if (d.link_to === target.name) {
                      d.status = target.status;
                      d.label = target.label;
                      d.upstream = target.upstream;
                      d.show_status = target.show_status;
                      d.last_update = target.last_update;
                      d.last_update_ago = target.last_update_ago;
                      d.last_ended = target.last_ended;
                      d.last_ended_ago = target.last_ended_ago;
                      processed.push(d);
                      break;
                    }
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
            return processed;
          };
          var stringifyTime = function stringifyTime(ts) {
            var date = new Date(ts * 1e3);
            var str = "";
            var ago = "";
            if (date.getFullYear() > 2e3) {
              str = "".concat(("000" + date.getFullYear()).slice(-4), "-").concat(("0" + (date.getMonth() + 1)).slice(-2), "-").concat(("0" + date.getDate()).slice(-2), " ").concat(("0" + date.getHours()).slice(-2), ":").concat(("0" + date.getMinutes()).slice(-2));
              ago = format(date);
            } else {
              str = "0000-00-00 00:00";
              ago = "Never";
            }
            return [str, ago];
          };
          var processMirrorItem = function processMirrorItem(d) {
            if (d.is_master === void 0) {
              d.is_master = true;
            }
            if (d.link_to !== void 0) {
              return d;
            }
            d.label = label_map[d.status];
            d.show_status = d.status !== "success";
            var _stringifyTime = stringifyTime(d.last_update_ts);
            var _stringifyTime2 = _slicedToArray(_stringifyTime, 2);
            d.last_update = _stringifyTime2[0];
            d.last_update_ago = _stringifyTime2[1];
            var _stringifyTime3 = stringifyTime(d.last_ended_ts);
            var _stringifyTime4 = _slicedToArray(_stringifyTime3, 2);
            d.last_ended = _stringifyTime4[0];
            d.last_ended_ago = _stringifyTime4[1];
            var _stringifyTime5 = stringifyTime(d.last_started_ts);
            var _stringifyTime6 = _slicedToArray(_stringifyTime5, 2);
            d.last_started = _stringifyTime6[0];
            d.last_started_ago = _stringifyTime6[1];
            var _stringifyTime7 = stringifyTime(d.next_schedule_ts);
            var _stringifyTime8 = _slicedToArray(_stringifyTime7, 2);
            d.next_schedule = _stringifyTime8[0];
            d.next_schedule_ago = _stringifyTime8[1];
            return d;
          };
          var sortAndUniqMirrors = function sortAndUniqMirrors(mirs) {
            mirs.sort(function (a, b) {
              return a.name < b.name ? -1 : 1;
            });
            return mirs.reduce(function (acc, cur) {
              if (acc.length > 1 && acc[acc.length - 1].name == cur.name) {
                if (acc[acc.length - 1].last_update_ts && cur.last_update_ts) {
                  if (acc[acc.length - 1].last_update_ts < cur.last_update_ts) {
                    acc[acc.length - 1] = cur;
                  }
                } else if (cur.last_update_ts) {
                  acc[acc.length - 1] = cur;
                }
              } else {
                acc.push(cur);
              }
              return acc;
            }, []);
          };
          var postProcessStatusData = function postProcessStatusData(status_data, additional) {
            var processed = status_data.concat(additional).map(function (d) {
              return processMirrorItem(d);
            });
            return sortAndUniqMirrors(processLinkItem(processed));
          };
          var genMainMirrorList = function genMainMirrorList(status_data, helpPages) {
            return status_data.filter(function (d) {
              return !(d.status == "disabled");
            }).map(function (d) {
              var _d$url;
              return _objectSpread(_objectSpread({}, d), {}, {
                url: forceHelp[d.name] ? helpPages[d.name] : (_d$url = d.url) !== null && _d$url !== void 0 ? _d$url : "/".concat(d.name, "/"),
                help_url: helpPages[d.name],
                is_new: Boolean(new_mirrors[d.name]),
                description: descriptions[d.name],
                github_release: d.url && d.url.startsWith("/github-release/")
              });
            });
          };
          return {
            postProcessStatusData: postProcessStatusData,
            unlistedMirrors: unlisted,
            genMainMirrorList: genMainMirrorList
          };
        }
        var _processingHandlers = processingHandlers(options),
          postProcessStatusData = _processingHandlers.postProcessStatusData;
        var useMirrorList = exports("j", function () {
          var additional = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var mirrorList = ref([]);
          var refreshTimer = null;
          var refreshMirrorList = /*#__PURE__*/function () {
            var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var res, status_data;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (!(document.hidden === true)) {
                      _context.next = 2;
                      break;
                    }
                    return _context.abrupt("return");
                  case 2:
                    _context.prev = 2;
                    _context.next = 5;
                    return fetch(TUNASYNC_JSON_PATH);
                  case 5:
                    res = _context.sent;
                    _context.next = 8;
                    return res.json();
                  case 8:
                    status_data = _context.sent;
                    mirrorList.value = postProcessStatusData(status_data, additional);
                    _context.next = 15;
                    break;
                  case 12:
                    _context.prev = 12;
                    _context.t0 = _context["catch"](2);
                    throw _context.t0;
                  case 15:
                    _context.prev = 15;
                    refreshTimer = setTimeout(refreshMirrorList, 1e4);
                    return _context.finish(15);
                  case 18:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[2, 12, 15, 18]]);
            }));
            return function refreshMirrorList() {
              return _ref23.apply(this, arguments);
            };
          }();
          nextTick().then(function () {
            return refreshMirrorList();
          });
          onMounted(function () {
            window.addEventListener("visibilitychange", function () {
              if (refreshTimer) {
                clearTimeout(refreshTimer);
                refreshTimer = null;
              }
              if (document.visibilityState === "visible") {
                refreshMirrorList().then();
              }
            });
          });
          return mirrorList;
        });
      }
    };
  });
})();
//# sourceMappingURL=mirrorList-legacy-CgUg-Xjk.js.map
