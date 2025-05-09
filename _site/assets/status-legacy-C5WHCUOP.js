;
(function () {
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
  System.register(['./default-legacy-BBTX4LHI.js', './_virtual_jekyll-data-legacy--vWzKqW1.js', './mirrorList-legacy-CgUg-Xjk.js'], function (exports, module) {
    'use strict';

    var DISKINFO_JSON_PATH, ref, onMounted, nextTick, createElementBlock, createTextVNode, createCommentVNode, Fragment, renderList, createBaseVNode, openBlock, toDisplayString, normalizeStyle, normalizeClass, _export_sfc, useMirrorList, unref, pushScopeId, popScopeId, createApp;
    return {
      setters: [null, function (module) {
        DISKINFO_JSON_PATH = module.D;
      }, function (module) {
        ref = module.r;
        onMounted = module.o;
        nextTick = module.n;
        createElementBlock = module.a;
        createTextVNode = module.l;
        createCommentVNode = module.e;
        Fragment = module.F;
        renderList = module.d;
        createBaseVNode = module.b;
        openBlock = module.g;
        toDisplayString = module.t;
        normalizeStyle = module.x;
        normalizeClass = module.h;
        _export_sfc = module._;
        useMirrorList = module.j;
        unref = module.y;
        pushScopeId = module.m;
        popScopeId = module.q;
        createApp = module.s;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = ".status-fail[data-v-3956b8a6],\n.status-failed[data-v-3956b8a6],\n.status-paused[data-v-3956b8a6] {\n  --bs-table-bg: #fff4e3;\n  --bs-table-hover-bg: var(--bs-table-bg);\n}\n@media (prefers-color-scheme: dark) {\n.status-fail[data-v-3956b8a6],\n  .status-failed[data-v-3956b8a6],\n  .status-paused[data-v-3956b8a6] {\n    --bs-table-bg: #524841;\n}\n}\n.status-syncing[data-v-3956b8a6] {\n  --bs-table-bg: #e3fffd;\n  --bs-table-hover-bg: var(--bs-table-bg);\n}\n@media (prefers-color-scheme: dark) {\n.status-syncing[data-v-3956b8a6] {\n    --bs-table-bg: #254059;\n}\n}\ntable > tbody > tr[data-v-3956b8a6] {\n  border-bottom-width: var(--bs-border-width);\n}\ntable > thead > tr[data-v-3956b8a6] {\n  border-bottom-width: calc(var(--bs-border-width) * 2);\n  border-bottom-style: solid;\n  border-bottom-color: currentColor;\n}\n.tuna-roll[data-v-3956b8a6] {\n  position: relative;\n  overflow: hidden;\n}\n.tuna-roll > div[data-v-3956b8a6] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  animation-timing-function: ease;\n  animation-duration: 1s;\n  animation-iteration-count: 1;\n  /* Tooltip text */\n}\n.tuna-roll > div > .tooltiptext[data-v-3956b8a6] {\n  visibility: hidden;\n  width: auto;\n  background-color: #555;\n  color: #fff;\n  text-align: center;\n  border-radius: 5px;\n  /* Position the tooltip text - see examples below! */\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.tuna-roll > div:hover > .tooltiptext[data-v-3956b8a6] {\n  visibility: visible;\n}\n@keyframes tuna-roll-enter-3956b8a6 {\n0% {\n    transform: translateY(100%);\n}\n100% {\n    transform: none;\n}\n}\n@keyframes tuna-roll-leave-3956b8a6 {\n0% {\n    transform: none;\n}\n100% {\n    transform: translateY(-100%);\n}\n}\n[data-tuna-roll-cur=\"0\"] .tuna-roll > div[data-v-3956b8a6] {\n  animation-name: tuna-roll-leave-3956b8a6;\n  transform: translateY(100%);\n}\n[data-tuna-roll-cur=\"0\"] .tuna-roll > div[data-tuna-roll-seq~=\"0\"][data-v-3956b8a6] {\n  animation-name: tuna-roll-enter-3956b8a6;\n  transform: none;\n}\n[data-tuna-roll-cur=\"1\"] .tuna-roll > div[data-v-3956b8a6] {\n  animation-name: tuna-roll-leave-3956b8a6;\n  transform: translateY(100%);\n}\n[data-tuna-roll-cur=\"1\"] .tuna-roll > div[data-tuna-roll-seq~=\"1\"][data-v-3956b8a6] {\n  animation-name: tuna-roll-enter-3956b8a6;\n  transform: none;\n}\n[data-tuna-roll-cur=\"2\"] .tuna-roll > div[data-v-3956b8a6] {\n  animation-name: tuna-roll-leave-3956b8a6;\n  transform: translateY(100%);\n}\n[data-tuna-roll-cur=\"2\"] .tuna-roll > div[data-tuna-roll-seq~=\"2\"][data-v-3956b8a6] {\n  animation-name: tuna-roll-enter-3956b8a6;\n  transform: none;\n}\n[data-tuna-roll-cur=\"3\"] .tuna-roll > div[data-v-3956b8a6] {\n  animation-name: tuna-roll-leave-3956b8a6;\n  transform: translateY(100%);\n}\n[data-tuna-roll-cur=\"3\"] .tuna-roll > div[data-tuna-roll-seq~=\"3\"][data-v-3956b8a6] {\n  animation-name: tuna-roll-enter-3956b8a6;\n  transform: none;\n}\n[data-tuna-roll-cur=\"4\"] .tuna-roll > div[data-v-3956b8a6] {\n  animation-name: tuna-roll-leave-3956b8a6;\n  transform: translateY(100%);\n}\n[data-tuna-roll-cur=\"4\"] .tuna-roll > div[data-tuna-roll-seq~=\"4\"][data-v-3956b8a6] {\n  animation-name: tuna-roll-enter-3956b8a6;\n  transform: none;\n}\n[data-tuna-roll-cur=\"5\"] .tuna-roll > div[data-v-3956b8a6] {\n  animation-name: tuna-roll-leave-3956b8a6;\n  transform: translateY(100%);\n}\n[data-tuna-roll-cur=\"5\"] .tuna-roll > div[data-tuna-roll-seq~=\"5\"][data-v-3956b8a6] {\n  animation-name: tuna-roll-enter-3956b8a6;\n  transform: none;\n}\n[data-tuna-roll-cur=\"6\"] .tuna-roll > div[data-v-3956b8a6] {\n  animation-name: tuna-roll-leave-3956b8a6;\n  transform: translateY(100%);\n}\n[data-tuna-roll-cur=\"6\"] .tuna-roll > div[data-tuna-roll-seq~=\"6\"][data-v-3956b8a6] {\n  animation-name: tuna-roll-enter-3956b8a6;\n  transform: none;\n}\n.row[data-tuna-roll-freeze=\"0\"] .tuna-roll > div[data-v-3956b8a6] {\n  animation-name: tuna-roll-leave-3956b8a6;\n  transform: translateY(100%);\n}\n.row[data-tuna-roll-freeze=\"0\"] .tuna-roll > div[data-tuna-roll-seq~=\"0\"][data-v-3956b8a6] {\n  animation-name: tuna-roll-enter-3956b8a6;\n  transform: none;\n}\n.row[data-tuna-roll-freeze=\"1\"] .tuna-roll > div[data-v-3956b8a6] {\n  animation-name: tuna-roll-leave-3956b8a6;\n  transform: translateY(100%);\n}\n.row[data-tuna-roll-freeze=\"1\"] .tuna-roll > div[data-tuna-roll-seq~=\"1\"][data-v-3956b8a6] {\n  animation-name: tuna-roll-enter-3956b8a6;\n  transform: none;\n}\n.row[data-tuna-roll-freeze=\"2\"] .tuna-roll > div[data-v-3956b8a6] {\n  animation-name: tuna-roll-leave-3956b8a6;\n  transform: translateY(100%);\n}\n.row[data-tuna-roll-freeze=\"2\"] .tuna-roll > div[data-tuna-roll-seq~=\"2\"][data-v-3956b8a6] {\n  animation-name: tuna-roll-enter-3956b8a6;\n  transform: none;\n}\n.row[data-tuna-roll-freeze=\"3\"] .tuna-roll > div[data-v-3956b8a6] {\n  animation-name: tuna-roll-leave-3956b8a6;\n  transform: translateY(100%);\n}\n.row[data-tuna-roll-freeze=\"3\"] .tuna-roll > div[data-tuna-roll-seq~=\"3\"][data-v-3956b8a6] {\n  animation-name: tuna-roll-enter-3956b8a6;\n  transform: none;\n}\n.row[data-tuna-roll-freeze=\"4\"] .tuna-roll > div[data-v-3956b8a6] {\n  animation-name: tuna-roll-leave-3956b8a6;\n  transform: translateY(100%);\n}\n.row[data-tuna-roll-freeze=\"4\"] .tuna-roll > div[data-tuna-roll-seq~=\"4\"][data-v-3956b8a6] {\n  animation-name: tuna-roll-enter-3956b8a6;\n  transform: none;\n}\n.row[data-tuna-roll-freeze=\"5\"] .tuna-roll > div[data-v-3956b8a6] {\n  animation-name: tuna-roll-leave-3956b8a6;\n  transform: translateY(100%);\n}\n.row[data-tuna-roll-freeze=\"5\"] .tuna-roll > div[data-tuna-roll-seq~=\"5\"][data-v-3956b8a6] {\n  animation-name: tuna-roll-enter-3956b8a6;\n  transform: none;\n}\n.row[data-tuna-roll-freeze=\"6\"] .tuna-roll > div[data-v-3956b8a6] {\n  animation-name: tuna-roll-leave-3956b8a6;\n  transform: translateY(100%);\n}\n.row[data-tuna-roll-freeze=\"6\"] .tuna-roll > div[data-tuna-roll-seq~=\"6\"][data-v-3956b8a6] {\n  animation-name: tuna-roll-enter-3956b8a6;\n  transform: none;\n}\n@media (prefers-reduced-motion) {\n.d-reduce-none[data-v-3956b8a6] {\n    display: none !important;\n}\n}\n@media (prefers-reduced-motion) and (min-width: 992px) {\n.d-lg-reduce-table-cell[data-v-3956b8a6] {\n    display: table-cell !important;\n}\n}";
        document.head.appendChild(__vite_style__);
        var _hoisted_1$1 = {
          key: 0,
          "class": "col-12"
        };
        var _hoisted_2$1 = /* @__PURE__ */createBaseVNode("strong", null, "磁盘占用", -1);
        var _hoisted_3$1 = {
          key: 0,
          "class": "col-1"
        };
        var _hoisted_4$1 = ["aria-valuenow"];
        var _sfc_main$1 = {
          __name: "DiskBar",
          setup: function setup(__props) {
            var diskUsages = ref([]);
            var readableFileSize = function readableFileSize(size) {
              var units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
              var i = 0;
              while (size >= 1024) {
                size /= 1024;
                ++i;
              }
              return size.toFixed(1) + " " + units[i];
            };
            onMounted( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var res, d;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return fetch(DISKINFO_JSON_PATH);
                  case 2:
                    res = _context.sent;
                    _context.next = 5;
                    return res.json();
                  case 5:
                    d = _context.sent;
                    if (!Array.isArray(d)) {
                      [d], _readOnlyError("d");
                    }
                    diskUsages.value = d.map(function (disk) {
                      var percentage = Math.round(disk.used_kb * 100 / disk.total_kb);
                      return {
                        desc: disk.desc,
                        used: readableFileSize(disk.used_kb * 1024),
                        total: readableFileSize(disk.total_kb * 1024),
                        percentage: true ? percentage : 0,
                        _percentage: percentage
                      };
                    });
                    if (true) {
                      _context.next = 14;
                      break;
                    }
                    _context.next = 11;
                    return nextTick();
                  case 11:
                    _context.next = 13;
                    return new Promise(function (resolve) {
                      return setTimeout(function () {
                        resolve();
                      }, 0);
                    });
                  case 13:
                    diskUsages.value.forEach(function (disk) {
                      disk.percentage = disk._percentage;
                    });
                  case 14:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            })));
            return function (_ctx, _cache) {
              return openBlock(), createElementBlock(Fragment, null, [diskUsages.value.length ? (openBlock(), createElementBlock("div", _hoisted_1$1, [_hoisted_2$1, createTextVNode(":")])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(diskUsages.value, function (disk) {
                return openBlock(), createElementBlock(Fragment, null, [disk.desc ? (openBlock(), createElementBlock("div", _hoisted_3$1, toDisplayString(disk.desc), 1)) : createCommentVNode("", true), createBaseVNode("div", {
                  "class": normalizeClass(["col-" + (disk.desc ? "11" : "12")])
                }, [createBaseVNode("div", {
                  "class": "progress mb-3",
                  role: "progressbar",
                  "aria-valuenow": disk.percentage,
                  "aria-valuemin": "0",
                  "aria-valuemax": "100"
                }, [createBaseVNode("div", {
                  "class": "progress-bar",
                  style: normalizeStyle({
                    width: disk.percentage + "%"
                  })
                }, [createBaseVNode("strong", null, toDisplayString(disk.used) + " / " + toDisplayString(disk.total), 1)], 4)], 8, _hoisted_4$1)], 2)], 64);
              }), 256))], 64);
            };
          }
        };

        /* unplugin-vue-components disabled */

        var _withScopeId = function _withScopeId(n) {
          return pushScopeId("data-v-3956b8a6"), n = n(), popScopeId(), n;
        };
        var _hoisted_1 = {
          "class": "table text-break table-hover table-borderless"
        };
        var _hoisted_2 = /*#__PURE__*/_withScopeId(function () {
          return /*#__PURE__*/createBaseVNode("thead", null, [/*#__PURE__*/createBaseVNode("tr", {
            "class": "d-none d-lg-table-row d-b3-table-row"
          }, [/*#__PURE__*/createBaseVNode("th", {
            "class": "col-2"
          }, "Name"), /*#__PURE__*/createBaseVNode("th", {
            "class": "col-4",
            colspan: "2"
          }, "Last Update"), /*#__PURE__*/createBaseVNode("th", {
            "class": "col-4"
          }, "Upstream"), /*#__PURE__*/createBaseVNode("th", {
            "class": "col-1"
          }, "Status"), /*#__PURE__*/createBaseVNode("th", {
            "class": "col-1"
          }, "Size")])], -1);
        });
        var _hoisted_3 = ["data-tuna-roll-cur"];
        var _hoisted_4 = ["data-tuna-roll-freeze", "onMouseenter", "onMouseleave"];
        var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
          return /*#__PURE__*/createBaseVNode("th", {
            "class": "col-4 d-lg-none d-bs3-def-none text-end"
          }, "Name", -1);
        });
        var _hoisted_6 = {
          "class": "col-8 col-lg-2"
        };
        var _hoisted_7 = {
          "class": "col-12 col-lg-4 d-lg-none d-bs3-table-cell d-lg-reduce-table-cell",
          colspan: "2"
        };
        var _hoisted_8 = {
          "class": "row"
        };
        var _hoisted_9 = /*#__PURE__*/_withScopeId(function () {
          return /*#__PURE__*/createBaseVNode("th", {
            "class": "col-4 text-end"
          }, "Last Success", -1);
        });
        var _hoisted_10 = {
          "class": "col-8"
        };
        var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
          return /*#__PURE__*/createBaseVNode("th", {
            "class": "col-4 text-end"
          }, "Last Attempt", -1);
        });
        var _hoisted_12 = {
          "class": "col-8"
        };
        var _hoisted_13 = /*#__PURE__*/_withScopeId(function () {
          return /*#__PURE__*/createBaseVNode("th", {
            "class": "col-4 text-end"
          }, "Next Sync", -1);
        });
        var _hoisted_14 = {
          key: 1,
          "class": "col-8"
        };
        var _hoisted_15 = {
          key: 2,
          "class": "col-8"
        };
        var _hoisted_16 = {
          "class": "col-2 rolling-3 d-none d-lg-table-cell d-bs3-none d-reduce-none"
        };
        var _hoisted_17 = {
          "class": "tuna-roll"
        };
        var _hoisted_18 = {
          key: 0,
          "data-tuna-roll-seq": "0 1 2 3"
        };
        var _hoisted_19 = /*#__PURE__*/_withScopeId(function () {
          return /*#__PURE__*/createBaseVNode("div", {
            "data-tuna-roll-seq": "0 1"
          }, "Last Successful Sync", -1);
        });
        var _hoisted_20 = /*#__PURE__*/_withScopeId(function () {
          return /*#__PURE__*/createBaseVNode("div", {
            "data-tuna-roll-seq": "2 3"
          }, "Last Attempted Sync", -1);
        });
        var _hoisted_21 = {
          key: 2,
          "data-tuna-roll-seq": "4 5"
        };
        var _hoisted_22 = {
          key: 3,
          "data-tuna-roll-seq": "4 5"
        };
        var _hoisted_23 = {
          "class": "col-2 rolling-6 d-none d-lg-table-cell d-bs3-none d-reduce-none"
        };
        var _hoisted_24 = {
          "class": "tuna-roll"
        };
        var _hoisted_25 = {
          key: 0,
          "data-tuna-roll-seq": "0 1 2 3"
        };
        var _hoisted_26 = {
          "class": "tooltiptext px-1"
        };
        var _hoisted_27 = {
          "data-tuna-roll-seq": "0 1"
        };
        var _hoisted_28 = {
          "class": "tooltiptext px-1"
        };
        var _hoisted_29 = {
          key: 0,
          "data-tuna-roll-seq": "2 3"
        };
        var _hoisted_30 = {
          "class": "tooltiptext px-1"
        };
        var _hoisted_31 = {
          key: 2,
          "data-tuna-roll-seq": "4 5"
        };
        var _hoisted_32 = {
          "class": "tooltiptext px-1"
        };
        var _hoisted_33 = {
          key: 3,
          "data-tuna-roll-seq": "4 5"
        };
        var _hoisted_34 = {
          "class": "tooltiptext px-1"
        };
        var _hoisted_35 = /*#__PURE__*/_withScopeId(function () {
          return /*#__PURE__*/createBaseVNode("th", {
            "class": "col-4 d-lg-none d-bs3-def-none text-end"
          }, "Upstream", -1);
        });
        var _hoisted_36 = {
          "class": "col-8 col-lg-4"
        };
        var _hoisted_37 = /*#__PURE__*/_withScopeId(function () {
          return /*#__PURE__*/createBaseVNode("th", {
            "class": "col-4 d-lg-none d-bs3-def-none text-end"
          }, "Status", -1);
        });
        var _hoisted_38 = {
          "class": "col-8 col-lg-1"
        };
        var _hoisted_39 = /*#__PURE__*/_withScopeId(function () {
          return /*#__PURE__*/createBaseVNode("th", {
            "class": "col-4 d-lg-none d-bs3-def-none text-end"
          }, "Size", -1);
        });
        var _hoisted_40 = {
          "class": "col-8 col-lg-1"
        };
        var rollMax = 6;
        var SCROLL_INTERVAL = 2000;
        var _sfc_main = {
          __name: 'StatusMirrorList',
          setup: function setup(__props) {
            var rawMirrorList = useMirrorList();
            var rollCur = ref(0);
            var doScroll = function doScroll() {
              rollCur.value += 1;
              if (rollCur.value >= rollMax) rollCur.value = 0;
            };
            var freezedRows = ref({});
            onMounted(function () {
              setInterval(doScroll, SCROLL_INTERVAL);
            });
            return function (_ctx, _cache) {
              return openBlock(), createElementBlock("table", _hoisted_1, [_hoisted_2, createBaseVNode("tbody", {
                id: "mirror-list",
                "data-tuna-roll-cur": rollCur.value % rollMax,
                "data-tuna-roll-max": rollMax,
                "class": "table-group-divider"
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(rawMirrorList), function (mir) {
                return openBlock(), createElementBlock("tr", {
                  "class": normalizeClass(['row', 'd-lg-table-row', 'status-' + mir.status, mir.last_ended_ts == mir.last_update_ts ? 'last-succ' : 'last-fail']),
                  key: mir.name,
                  "data-tuna-roll-freeze": freezedRows.value[mir.name],
                  onMouseenter: function onMouseenter($event) {
                    return freezedRows.value[mir.name] = rollCur.value;
                  },
                  onMouseleave: function onMouseleave($event) {
                    return freezedRows.value[mir.name] = undefined;
                  }
                }, [_hoisted_5, createBaseVNode("td", _hoisted_6, toDisplayString(mir.name) + toDisplayString(mir.is_master ? "" : " [slave]"), 1), createBaseVNode("td", _hoisted_7, [createBaseVNode("div", _hoisted_8, [_hoisted_9, createBaseVNode("td", _hoisted_10, toDisplayString(mir.last_update) + ", " + toDisplayString(mir.last_update_ago), 1), mir.last_ended_ts != mir.last_update_ts ? (openBlock(), createElementBlock(Fragment, {
                  key: 0
                }, [_hoisted_11, createBaseVNode("td", _hoisted_12, toDisplayString(mir.last_ended) + ", " + toDisplayString(mir.last_ended_ago), 1)], 64)) : createCommentVNode("", true), _hoisted_13, mir.status != 'syncing' ? (openBlock(), createElementBlock("td", _hoisted_14, toDisplayString(mir.next_schedule) + ", " + toDisplayString(mir.next_schedule_ago), 1)) : (openBlock(), createElementBlock("td", _hoisted_15, "Syncing Now"))])]), createBaseVNode("td", _hoisted_16, [createBaseVNode("div", _hoisted_17, [createTextVNode("   "), mir.last_ended_ts == mir.last_update_ts ? (openBlock(), createElementBlock("div", _hoisted_18, "Last Successful Sync")) : (openBlock(), createElementBlock(Fragment, {
                  key: 1
                }, [_hoisted_19, _hoisted_20], 64)), mir.status == 'syncing' ? (openBlock(), createElementBlock("div", _hoisted_21, " Sync Started ")) : (openBlock(), createElementBlock("div", _hoisted_22, "Next Scheduled Sync"))])]), createBaseVNode("td", _hoisted_23, [createBaseVNode("div", _hoisted_24, [createTextVNode("   "), mir.last_ended_ts == mir.last_update_ts ? (openBlock(), createElementBlock("div", _hoisted_25, [createTextVNode(toDisplayString(mir.last_update_ago) + " ", 1), createBaseVNode("div", _hoisted_26, toDisplayString(mir.last_update), 1)])) : (openBlock(), createElementBlock(Fragment, {
                  key: 1
                }, [createBaseVNode("div", _hoisted_27, [createTextVNode(toDisplayString(mir.last_update_ago) + " ", 1), createBaseVNode("div", _hoisted_28, toDisplayString(mir.last_update), 1)]), mir.last_ended_ts != mir.last_update_ts ? (openBlock(), createElementBlock("div", _hoisted_29, [createTextVNode(toDisplayString(mir.last_ended_ago) + " ", 1), createBaseVNode("div", _hoisted_30, toDisplayString(mir.last_ended), 1)])) : createCommentVNode("", true)], 64)), mir.status == 'syncing' ? (openBlock(), createElementBlock("div", _hoisted_31, [createTextVNode(toDisplayString(mir.last_started_ago) + " ", 1), createBaseVNode("div", _hoisted_32, toDisplayString(mir.last_started), 1)])) : (openBlock(), createElementBlock("div", _hoisted_33, [createTextVNode(toDisplayString(mir.next_schedule_ago) + " ", 1), createBaseVNode("div", _hoisted_34, toDisplayString(mir.next_schedule), 1)]))])]), _hoisted_35, createBaseVNode("td", _hoisted_36, toDisplayString(mir.upstream), 1), _hoisted_37, createBaseVNode("td", _hoisted_38, toDisplayString(mir.status), 1), _hoisted_39, createBaseVNode("td", _hoisted_40, toDisplayString(mir.size), 1)], 42, _hoisted_4);
              }), 128))], 8, _hoisted_3)]);
            };
          }
        };
        var StatusMirrorList = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId', "data-v-3956b8a6"]]);
        createApp(_sfc_main$1).mount("#disk-usage");
        createApp(StatusMirrorList).mount("#mirror-list");
      }
    };
  });
})();
//# sourceMappingURL=status-legacy-C5WHCUOP.js.map
