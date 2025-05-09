;
(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
  function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
  function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
  function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
  function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  System.register(['./_virtual_jekyll-config-legacy-Dzbfs2TU.js', './_virtual_jekyll-data-legacy--vWzKqW1.js', './default-legacy-BBTX4LHI.js'], function (exports, module) {
    'use strict';

    var mirrorz_help_link, hostname, TUNASYNC_JSON_PATH, options, getDefaultExportFromCjs;
    return {
      setters: [function (module) {
        mirrorz_help_link = module.m;
        hostname = module.h;
      }, function (module) {
        TUNASYNC_JSON_PATH = module.T;
        options = module.o;
      }, function (module) {
        getDefaultExportFromCjs = module.h;
      }],
      execute: function execute() {
        var _Array$from$filter$;
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = ".highlight .c {\n  color: #998;\n  font-style: italic;\n}\n.highlight .err {\n  color: #a61717;\n  background-color: #e3d2d2;\n}\n.highlight .k {\n  font-weight: bold;\n}\n.highlight .o {\n  font-weight: bold;\n}\n.highlight .cm {\n  color: #998;\n  font-style: italic;\n}\n.highlight .cp {\n  color: #999;\n  font-weight: bold;\n}\n.highlight .c1 {\n  color: #998;\n  font-style: italic;\n}\n.highlight .cs {\n  color: #999;\n  font-weight: bold;\n  font-style: italic;\n}\n.highlight .gd {\n  color: #000;\n  background-color: #fdd;\n}\n.highlight .gd .x {\n  color: #000;\n  background-color: #faa;\n}\n.highlight .ge {\n  font-style: italic;\n}\n.highlight .gr {\n  color: #a00;\n}\n.highlight .gh {\n  color: #999;\n}\n.highlight .gi {\n  color: #000;\n  background-color: #dfd;\n}\n.highlight .gi .x {\n  color: #000;\n  background-color: #afa;\n}\n.highlight .go {\n  color: #888;\n}\n.highlight .gp {\n  color: #555;\n}\n.highlight .gs {\n  font-weight: bold;\n}\n.highlight .gu {\n  color: #aaa;\n}\n.highlight .gt {\n  color: #a00;\n}\n.highlight .kc {\n  font-weight: bold;\n}\n.highlight .kd {\n  font-weight: bold;\n}\n.highlight .kp {\n  font-weight: bold;\n}\n.highlight .kr {\n  font-weight: bold;\n}\n.highlight .kt {\n  color: #458;\n  font-weight: bold;\n}\n.highlight .m {\n  color: #099;\n}\n.highlight .s {\n  color: #d14;\n}\n.highlight .na {\n  color: #008080;\n}\n.highlight .nb {\n  color: #0086b3;\n}\n.highlight .nc {\n  color: #458;\n  font-weight: bold;\n}\n.highlight .no {\n  color: #008080;\n}\n.highlight .ni {\n  color: #800080;\n}\n.highlight .ne {\n  color: #900;\n  font-weight: bold;\n}\n.highlight .nf {\n  color: #900;\n  font-weight: bold;\n}\n.highlight .nn {\n  color: #555;\n}\n.highlight .nt {\n  color: #000080;\n}\n.highlight .nv {\n  color: #008080;\n}\n.highlight .ow {\n  font-weight: bold;\n}\n.highlight .w {\n  color: #bbb;\n}\n.highlight .mf {\n  color: #099;\n}\n.highlight .mh {\n  color: #099;\n}\n.highlight .mi {\n  color: #099;\n}\n.highlight .mo {\n  color: #099;\n}\n.highlight .sb {\n  color: #d14;\n}\n.highlight .sc {\n  color: #d14;\n}\n.highlight .sd {\n  color: #d14;\n}\n.highlight .s2 {\n  color: #d14;\n}\n.highlight .se {\n  color: #d14;\n}\n.highlight .sh {\n  color: #d14;\n}\n.highlight .si {\n  color: #d14;\n}\n.highlight .sx {\n  color: #d14;\n}\n.highlight .sr {\n  color: #009926;\n}\n.highlight .s1 {\n  color: #d14;\n}\n.highlight .ss {\n  color: #990073;\n}\n.highlight .bp {\n  color: #999;\n}\n.highlight .vc {\n  color: #008080;\n}\n.highlight .vg {\n  color: #008080;\n}\n.highlight .vi {\n  color: #008080;\n}\n.highlight .il {\n  color: #099;\n}\n\n.hljs-comment {\n  color: #998;\n  font-style: italic;\n}\n\n.hljs-keyword {\n  font-weight: bold;\n}\n\n.hljs-operator {\n  font-weight: bold;\n}\n\n.hljs-deletion {\n  color: #000;\n  background-color: #fdd;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-meta.prompt {\n  color: #555;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n.hljs-section {\n  color: #458;\n  font-weight: bold;\n}\n\n.hljs-variable.constant {\n  font-weight: bold;\n}\n\n.hljs-params {\n  font-weight: bold;\n}\n\n.hljs-type {\n  color: #458;\n  font-weight: bold;\n}\n\n.hljs-number {\n  color: #099;\n}\n\n.hljs-string {\n  color: #d14;\n}\n\n.hljs-attr,\n.hljs-attribute {\n  color: #008080;\n}\n\n.hljs-built_in {\n  color: #0086b3;\n}\n\n.hljs-title.class {\n  color: #458;\n  font-weight: bold;\n}\n\n.hljs-title.function {\n  color: #900;\n  font-weight: bold;\n}\n\n.hljs-tag {\n  color: #000080;\n}\n\n.hljs-variable {\n  color: #008080;\n}\n\n@media (prefers-color-scheme: dark) {\n  .highlight {\n    /* Comment */\n    /* Error */\n    /* Keyword */\n    /* Literal */\n    /* Name */\n    /* Operator */\n    /* Punctuation */\n    /* Comment.Multiline */\n    /* Comment.Preproc */\n    /* Comment.Single */\n    /* Comment.Special */\n    /* Generic.Emph */\n    /* Generic.Strong */\n    /* Keyword.Constant */\n    /* Keyword.Declaration */\n    /* Keyword.Namespace */\n    /* Keyword.Pseudo */\n    /* Keyword.Reserved */\n    /* Keyword.Type */\n    /* Literal.Date */\n    /* Literal.Number */\n    /* Literal.String */\n    /* Name.Attribute */\n    /* Name.Builtin */\n    /* Name.Class */\n    /* Name.Constant */\n    /* Name.Decorator */\n    /* Name.Entity */\n    /* Name.Exception */\n    /* Name.Function */\n    /* Name.Label */\n    /* Name.Namespace */\n    /* Name.Other */\n    /* Name.Property */\n    /* Name.Tag */\n    /* Name.Variable */\n    /* Operator.Word */\n    /* Text.Whitespace */\n    /* Literal.Number.Float */\n    /* Literal.Number.Hex */\n    /* Literal.Number.Integer */\n    /* Literal.Number.Oct */\n    /* Literal.String.Backtick */\n    /* Literal.String.Char */\n    /* Literal.String.Doc */\n    /* Literal.String.Double */\n    /* Literal.String.Escape */\n    /* Literal.String.Heredoc */\n    /* Literal.String.Interpol */\n    /* Literal.String.Other */\n    /* Literal.String.Regex */\n    /* Literal.String.Single */\n    /* Literal.String.Symbol */\n    /* Name.Builtin.Pseudo */\n    /* Name.Variable.Class */\n    /* Name.Variable.Global */\n    /* Name.Variable.Instance */\n    /* Literal.Number.Integer.Long */\n    /* Generic Heading & Diff Header */\n    /* Generic.Subheading & Diff Unified/Comment? */\n    /* Generic.Deleted & Diff Deleted */\n    /* Generic.Inserted & Diff Inserted */\n  }\n  .highlight .hll {\n    background-color: #272822;\n  }\n  .highlight .c {\n    color: #75715e;\n  }\n  .highlight .err {\n    color: #960050;\n    background-color: #1e0010;\n  }\n  .highlight .k {\n    color: #66d9ef;\n  }\n  .highlight .l {\n    color: #ae81ff;\n  }\n  .highlight .n {\n    color: #f8f8f2;\n  }\n  .highlight .o {\n    color: #f92672;\n  }\n  .highlight .p {\n    color: #f8f8f2;\n  }\n  .highlight .cm {\n    color: #75715e;\n  }\n  .highlight .cp {\n    color: #75715e;\n  }\n  .highlight .c1 {\n    color: #75715e;\n  }\n  .highlight .cs {\n    color: #75715e;\n  }\n  .highlight .ge {\n    font-style: italic;\n  }\n  .highlight .gs {\n    font-weight: bold;\n  }\n  .highlight .kc {\n    color: #66d9ef;\n  }\n  .highlight .kd {\n    color: #66d9ef;\n  }\n  .highlight .kn {\n    color: #f92672;\n  }\n  .highlight .kp {\n    color: #66d9ef;\n  }\n  .highlight .kr {\n    color: #66d9ef;\n  }\n  .highlight .kt {\n    color: #66d9ef;\n  }\n  .highlight .ld {\n    color: #e6db74;\n  }\n  .highlight .m {\n    color: #ae81ff;\n  }\n  .highlight .s {\n    color: #e6db74;\n  }\n  .highlight .na {\n    color: #a6e22e;\n  }\n  .highlight .nb {\n    color: #f8f8f2;\n  }\n  .highlight .nc {\n    color: #a6e22e;\n  }\n  .highlight .no {\n    color: #66d9ef;\n  }\n  .highlight .nd {\n    color: #a6e22e;\n  }\n  .highlight .ni {\n    color: #f8f8f2;\n  }\n  .highlight .ne {\n    color: #a6e22e;\n  }\n  .highlight .nf {\n    color: #a6e22e;\n  }\n  .highlight .nl {\n    color: #f8f8f2;\n  }\n  .highlight .nn {\n    color: #f8f8f2;\n  }\n  .highlight .nx {\n    color: #a6e22e;\n  }\n  .highlight .py {\n    color: #f8f8f2;\n  }\n  .highlight .nt {\n    color: #f92672;\n  }\n  .highlight .nv {\n    color: #f8f8f2;\n  }\n  .highlight .ow {\n    color: #f92672;\n  }\n  .highlight .w {\n    color: #f8f8f2;\n  }\n  .highlight .mf {\n    color: #ae81ff;\n  }\n  .highlight .mh {\n    color: #ae81ff;\n  }\n  .highlight .mi {\n    color: #ae81ff;\n  }\n  .highlight .mo {\n    color: #ae81ff;\n  }\n  .highlight .sb {\n    color: #e6db74;\n  }\n  .highlight .sc {\n    color: #e6db74;\n  }\n  .highlight .sd {\n    color: #e6db74;\n  }\n  .highlight .s2 {\n    color: #e6db74;\n  }\n  .highlight .se {\n    color: #ae81ff;\n  }\n  .highlight .sh {\n    color: #e6db74;\n  }\n  .highlight .si {\n    color: #e6db74;\n  }\n  .highlight .sx {\n    color: #e6db74;\n  }\n  .highlight .sr {\n    color: #e6db74;\n  }\n  .highlight .s1 {\n    color: #e6db74;\n  }\n  .highlight .ss {\n    color: #e6db74;\n  }\n  .highlight .bp {\n    color: #f8f8f2;\n  }\n  .highlight .vc {\n    color: #f8f8f2;\n  }\n  .highlight .vg {\n    color: #f8f8f2;\n  }\n  .highlight .vi {\n    color: #f8f8f2;\n  }\n  .highlight .il {\n    color: #ae81ff;\n  }\n  .highlight .gu {\n    color: #75715e;\n  }\n  .highlight .gd {\n    color: #f92672;\n    background-color: inherit;\n  }\n  .highlight .gi {\n    color: #a6e22e;\n    background-color: inherit;\n  }\n  .highlight .gd .x {\n    background-color: inherit;\n  }\n  .highlight .gi .x {\n    background-color: inherit;\n  }\n  .hljs-comment {\n    color: #75715e;\n  }\n  .hljs-keyword {\n    color: #66d9ef;\n  }\n  .hljs-operator {\n    color: #f92672;\n  }\n  .hljs-deletion {\n    color: #f92672;\n  }\n  .hljs-emphasis {\n    font-style: italic;\n  }\n  .hljs-strong {\n    font-weight: bold;\n  }\n  .hljs-section {\n    color: #66d9ef;\n  }\n  .hljs-variable.constant {\n    color: #66d9ef;\n  }\n  .hljs-params {\n    color: #66d9ef;\n  }\n  .hljs-type {\n    color: #66d9ef;\n  }\n  .hljs-number {\n    color: #ae81ff;\n  }\n  .hljs-string {\n    color: #e6db74;\n  }\n  .hljs-attr,\n  .hljs-attribute {\n    color: #a6e22e;\n  }\n  .hljs-built_in {\n    color: #f8f8f2;\n  }\n  .hljs-title.class {\n    color: #a6e22e;\n  }\n  .hljs-title.function {\n    color: #a6e22e;\n  }\n  .hljs-tag {\n    color: #f92672;\n  }\n  .hljs-variable {\n    color: #f8f8f2;\n  }\n}\n#help-page {\n  margin-top: 40px;\n  margin-bottom: 40px;\n}";
        document.head.appendChild(__vite_style__);

        /* eslint-disable no-multi-assign */

        function deepFreeze(obj) {
          if (obj instanceof Map) {
            obj.clear = obj["delete"] = obj.set = function () {
              throw new Error('map is read-only');
            };
          } else if (obj instanceof Set) {
            obj.add = obj.clear = obj["delete"] = function () {
              throw new Error('set is read-only');
            };
          }

          // Freeze self
          Object.freeze(obj);
          Object.getOwnPropertyNames(obj).forEach(function (name) {
            var prop = obj[name];
            var type = _typeof(prop);

            // Freeze prop if it is an object or function and also not already frozen
            if ((type === 'object' || type === 'function') && !Object.isFrozen(prop)) {
              deepFreeze(prop);
            }
          });
          return obj;
        }

        /** @typedef {import('highlight.js').CallbackResponse} CallbackResponse */
        /** @typedef {import('highlight.js').CompiledMode} CompiledMode */
        /** @implements CallbackResponse */
        var Response = /*#__PURE__*/function () {
          /**
           * @param {CompiledMode} mode
           */
          function Response(mode) {
            _classCallCheck(this, Response);
            // eslint-disable-next-line no-undefined
            if (mode.data === undefined) mode.data = {};
            this.data = mode.data;
            this.isMatchIgnored = false;
          }
          return _createClass(Response, [{
            key: "ignoreMatch",
            value: function ignoreMatch() {
              this.isMatchIgnored = true;
            }
          }]);
        }();
        /**
         * @param {string} value
         * @returns {string}
         */
        function escapeHTML(value) {
          return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
        }

        /**
         * performs a shallow merge of multiple objects into one
         *
         * @template T
         * @param {T} original
         * @param {Record<string,any>[]} objects
         * @returns {T} a single new object
         */
        function inherit$1(original) {
          /** @type Record<string,any> */
          var result = Object.create(null);
          for (var key in original) {
            result[key] = original[key];
          }
          for (var _len = arguments.length, objects = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            objects[_key - 1] = arguments[_key];
          }
          objects.forEach(function (obj) {
            for (var _key2 in obj) {
              result[_key2] = obj[_key2];
            }
          });
          return /** @type {T} */result;
        }

        /**
         * @typedef {object} Renderer
         * @property {(text: string) => void} addText
         * @property {(node: Node) => void} openNode
         * @property {(node: Node) => void} closeNode
         * @property {() => string} value
         */

        /** @typedef {{scope?: string, language?: string, sublanguage?: boolean}} Node */
        /** @typedef {{walk: (r: Renderer) => void}} Tree */
        /** */

        var SPAN_CLOSE = '</span>';

        /**
         * Determines if a node needs to be wrapped in <span>
         *
         * @param {Node} node */
        var emitsWrappingTags = function emitsWrappingTags(node) {
          // rarely we can have a sublanguage where language is undefined
          // TODO: track down why
          return !!node.scope;
        };

        /**
         *
         * @param {string} name
         * @param {{prefix:string}} options
         */
        var scopeToCSSClass = function scopeToCSSClass(name, _ref) {
          var prefix = _ref.prefix;
          // sub-language
          if (name.startsWith("language:")) {
            return name.replace("language:", "language-");
          }
          // tiered scope: comment.line
          if (name.includes(".")) {
            var pieces = name.split(".");
            return ["".concat(prefix).concat(pieces.shift())].concat(_toConsumableArray(pieces.map(function (x, i) {
              return "".concat(x).concat("_".repeat(i + 1));
            }))).join(" ");
          }
          // simple scope
          return "".concat(prefix).concat(name);
        };

        /** @type {Renderer} */
        var HTMLRenderer = /*#__PURE__*/function () {
          /**
           * Creates a new HTMLRenderer
           *
           * @param {Tree} parseTree - the parse tree (must support `walk` API)
           * @param {{classPrefix: string}} options
           */
          function HTMLRenderer(parseTree, options) {
            _classCallCheck(this, HTMLRenderer);
            this.buffer = "";
            this.classPrefix = options.classPrefix;
            parseTree.walk(this);
          }

          /**
           * Adds texts to the output stream
           *
           * @param {string} text */
          return _createClass(HTMLRenderer, [{
            key: "addText",
            value: function addText(text) {
              this.buffer += escapeHTML(text);
            }

            /**
             * Adds a node open to the output stream (if needed)
             *
             * @param {Node} node */
          }, {
            key: "openNode",
            value: function openNode(node) {
              if (!emitsWrappingTags(node)) return;
              var className = scopeToCSSClass(node.scope, {
                prefix: this.classPrefix
              });
              this.span(className);
            }

            /**
             * Adds a node close to the output stream (if needed)
             *
             * @param {Node} node */
          }, {
            key: "closeNode",
            value: function closeNode(node) {
              if (!emitsWrappingTags(node)) return;
              this.buffer += SPAN_CLOSE;
            }

            /**
             * returns the accumulated buffer
            */
          }, {
            key: "value",
            value: function value() {
              return this.buffer;
            }

            // helpers

            /**
             * Builds a span element
             *
             * @param {string} className */
          }, {
            key: "span",
            value: function span(className) {
              this.buffer += "<span class=\"".concat(className, "\">");
            }
          }]);
        }();
        /** @typedef {{scope?: string, language?: string, children: Node[]} | string} Node */
        /** @typedef {{scope?: string, language?: string, children: Node[]} } DataNode */
        /** @typedef {import('highlight.js').Emitter} Emitter */
        /**  */
        /** @returns {DataNode} */
        var newNode = function newNode() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          /** @type DataNode */
          var result = {
            children: []
          };
          Object.assign(result, opts);
          return result;
        };
        var TokenTree = /*#__PURE__*/function () {
          function TokenTree() {
            _classCallCheck(this, TokenTree);
            /** @type DataNode */
            this.rootNode = newNode();
            this.stack = [this.rootNode];
          }
          return _createClass(TokenTree, [{
            key: "top",
            get: function get() {
              return this.stack[this.stack.length - 1];
            }
          }, {
            key: "root",
            get: function get() {
              return this.rootNode;
            }

            /** @param {Node} node */
          }, {
            key: "add",
            value: function add(node) {
              this.top.children.push(node);
            }

            /** @param {string} scope */
          }, {
            key: "openNode",
            value: function openNode(scope) {
              /** @type Node */
              var node = newNode({
                scope: scope
              });
              this.add(node);
              this.stack.push(node);
            }
          }, {
            key: "closeNode",
            value: function closeNode() {
              if (this.stack.length > 1) {
                return this.stack.pop();
              }
              // eslint-disable-next-line no-undefined
              return undefined;
            }
          }, {
            key: "closeAllNodes",
            value: function closeAllNodes() {
              while (this.closeNode());
            }
          }, {
            key: "toJSON",
            value: function toJSON() {
              return JSON.stringify(this.rootNode, null, 4);
            }

            /**
             * @typedef { import("./html_renderer").Renderer } Renderer
             * @param {Renderer} builder
             */
          }, {
            key: "walk",
            value: function walk(builder) {
              // this does not
              return this.constructor._walk(builder, this.rootNode);
              // this works
              // return TokenTree._walk(builder, this.rootNode);
            }

            /**
             * @param {Renderer} builder
             * @param {Node} node
             */
          }], [{
            key: "_walk",
            value: function _walk(builder, node) {
              var _this = this;
              if (typeof node === "string") {
                builder.addText(node);
              } else if (node.children) {
                builder.openNode(node);
                node.children.forEach(function (child) {
                  return _this._walk(builder, child);
                });
                builder.closeNode(node);
              }
              return builder;
            }

            /**
             * @param {Node} node
             */
          }, {
            key: "_collapse",
            value: function _collapse(node) {
              if (typeof node === "string") return;
              if (!node.children) return;
              if (node.children.every(function (el) {
                return typeof el === "string";
              })) {
                // node.text = node.children.join("");
                // delete node.children;
                node.children = [node.children.join("")];
              } else {
                node.children.forEach(function (child) {
                  TokenTree._collapse(child);
                });
              }
            }
          }]);
        }();
        /**
          Currently this is all private API, but this is the minimal API necessary
          that an Emitter must implement to fully support the parser.
           Minimal interface:
           - addText(text)
          - __addSublanguage(emitter, subLanguageName)
          - startScope(scope)
          - endScope()
          - finalize()
          - toHTML()
         */
        /**
         * @implements {Emitter}
         */
        var TokenTreeEmitter = /*#__PURE__*/function (_TokenTree) {
          /**
           * @param {*} options
           */
          function TokenTreeEmitter(options) {
            var _this2;
            _classCallCheck(this, TokenTreeEmitter);
            _this2 = _callSuper(this, TokenTreeEmitter);
            _this2.options = options;
            return _this2;
          }

          /**
           * @param {string} text
           */
          _inherits(TokenTreeEmitter, _TokenTree);
          return _createClass(TokenTreeEmitter, [{
            key: "addText",
            value: function addText(text) {
              if (text === "") {
                return;
              }
              this.add(text);
            }

            /** @param {string} scope */
          }, {
            key: "startScope",
            value: function startScope(scope) {
              this.openNode(scope);
            }
          }, {
            key: "endScope",
            value: function endScope() {
              this.closeNode();
            }

            /**
             * @param {Emitter & {root: DataNode}} emitter
             * @param {string} name
             */
          }, {
            key: "__addSublanguage",
            value: function __addSublanguage(emitter, name) {
              /** @type DataNode */
              var node = emitter.root;
              if (name) node.scope = "language:".concat(name);
              this.add(node);
            }
          }, {
            key: "toHTML",
            value: function toHTML() {
              var renderer = new HTMLRenderer(this, this.options);
              return renderer.value();
            }
          }, {
            key: "finalize",
            value: function finalize() {
              this.closeAllNodes();
              return true;
            }
          }]);
        }(TokenTree);
        /**
         * @param {string} value
         * @returns {RegExp}
         * */
        /**
         * @param {RegExp | string } re
         * @returns {string}
         */
        function source(re) {
          if (!re) return null;
          if (typeof re === "string") return re;
          return re.source;
        }

        /**
         * @param {RegExp | string } re
         * @returns {string}
         */
        function lookahead(re) {
          return concat('(?=', re, ')');
        }

        /**
         * @param {RegExp | string } re
         * @returns {string}
         */
        function anyNumberOfTimes(re) {
          return concat('(?:', re, ')*');
        }

        /**
         * @param {RegExp | string } re
         * @returns {string}
         */
        function optional(re) {
          return concat('(?:', re, ')?');
        }

        /**
         * @param {...(RegExp | string) } args
         * @returns {string}
         */
        function concat() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
            args[_key3] = arguments[_key3];
          }
          var joined = args.map(function (x) {
            return source(x);
          }).join("");
          return joined;
        }

        /**
         * @param { Array<string | RegExp | Object> } args
         * @returns {object}
         */
        function stripOptionsFromArgs(args) {
          var opts = args[args.length - 1];
          if (_typeof(opts) === 'object' && opts.constructor === Object) {
            args.splice(args.length - 1, 1);
            return opts;
          } else {
            return {};
          }
        }

        /** @typedef { {capture?: boolean} } RegexEitherOptions */

        /**
         * Any of the passed expresssions may match
         *
         * Creates a huge this | this | that | that match
         * @param {(RegExp | string)[] | [...(RegExp | string)[], RegexEitherOptions]} args
         * @returns {string}
         */
        function either() {
          for (var _len3 = arguments.length, args = new Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
            args[_key4] = arguments[_key4];
          }
          /** @type { object & {capture?: boolean} }  */
          var opts = stripOptionsFromArgs(args);
          var joined = '(' + (opts.capture ? "" : "?:") + args.map(function (x) {
            return source(x);
          }).join("|") + ")";
          return joined;
        }

        /**
         * @param {RegExp | string} re
         * @returns {number}
         */
        function countMatchGroups(re) {
          return new RegExp(re.toString() + '|').exec('').length - 1;
        }

        /**
         * Does lexeme start with a regular expression match at the beginning
         * @param {RegExp} re
         * @param {string} lexeme
         */
        function startsWith(re, lexeme) {
          var match = re && re.exec(lexeme);
          return match && match.index === 0;
        }

        // BACKREF_RE matches an open parenthesis or backreference. To avoid
        // an incorrect parse, it additionally matches the following:
        // - [...] elements, where the meaning of parentheses and escapes change
        // - other escape sequences, so we do not misparse escape sequences as
        //   interesting elements
        // - non-matching or lookahead parentheses, which do not capture. These
        //   follow the '(' with a '?'.
        var BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

        // **INTERNAL** Not intended for outside usage
        // join logically computes regexps.join(separator), but fixes the
        // backreferences so they continue to match.
        // it also places each individual regular expression into it's own
        // match group, keeping track of the sequencing of those match groups
        // is currently an exercise for the caller. :-)
        /**
         * @param {(string | RegExp)[]} regexps
         * @param {{joinWith: string}} opts
         * @returns {string}
         */
        function _rewriteBackreferences(regexps, _ref2) {
          var joinWith = _ref2.joinWith;
          var numCaptures = 0;
          return regexps.map(function (regex) {
            numCaptures += 1;
            var offset = numCaptures;
            var re = source(regex);
            var out = '';
            while (re.length > 0) {
              var match = BACKREF_RE.exec(re);
              if (!match) {
                out += re;
                break;
              }
              out += re.substring(0, match.index);
              re = re.substring(match.index + match[0].length);
              if (match[0][0] === '\\' && match[1]) {
                // Adjust the backreference.
                out += '\\' + String(Number(match[1]) + offset);
              } else {
                out += match[0];
                if (match[0] === '(') {
                  numCaptures++;
                }
              }
            }
            return out;
          }).map(function (re) {
            return "(".concat(re, ")");
          }).join(joinWith);
        }

        /** @typedef {import('highlight.js').Mode} Mode */
        /** @typedef {import('highlight.js').ModeCallback} ModeCallback */

        // Common regexps
        var MATCH_NOTHING_RE = /\b\B/;
        var IDENT_RE = '[a-zA-Z]\\w*';
        var UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
        var NUMBER_RE = '\\b\\d+(\\.\\d+)?';
        var C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
        var BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
        var RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

        /**
        * @param { Partial<Mode> & {binary?: string | RegExp} } opts
        */
        var SHEBANG = function SHEBANG() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var beginShebang = /^#![ ]*\//;
          if (opts.binary) {
            opts.begin = concat(beginShebang, /.*\b/, opts.binary, /\b.*/);
          }
          return inherit$1({
            scope: 'meta',
            begin: beginShebang,
            end: /$/,
            relevance: 0,
            /** @type {ModeCallback} */
            "on:begin": function onBegin(m, resp) {
              if (m.index !== 0) resp.ignoreMatch();
            }
          }, opts);
        };

        // Common modes
        var BACKSLASH_ESCAPE = {
          begin: '\\\\[\\s\\S]',
          relevance: 0
        };
        var APOS_STRING_MODE = {
          scope: 'string',
          begin: '\'',
          end: '\'',
          illegal: '\\n',
          contains: [BACKSLASH_ESCAPE]
        };
        var QUOTE_STRING_MODE = {
          scope: 'string',
          begin: '"',
          end: '"',
          illegal: '\\n',
          contains: [BACKSLASH_ESCAPE]
        };
        var PHRASAL_WORDS_MODE = {
          begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
        };
        /**
         * Creates a comment mode
         *
         * @param {string | RegExp} begin
         * @param {string | RegExp} end
         * @param {Mode | {}} [modeOptions]
         * @returns {Partial<Mode>}
         */
        var COMMENT = function COMMENT(begin, end) {
          var modeOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var mode = inherit$1({
            scope: 'comment',
            begin: begin,
            end: end,
            contains: []
          }, modeOptions);
          mode.contains.push({
            scope: 'doctag',
            // hack to avoid the space from being included. the space is necessary to
            // match here to prevent the plain text rule below from gobbling up doctags
            begin: '[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)',
            end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
            excludeBegin: true,
            relevance: 0
          });
          var ENGLISH_WORD = either(
          // list of common 1 and 2 letter words in English
          "I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on",
          // note: this is not an exhaustive list of contractions, just popular ones
          /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
          // contractions - can't we'd they're let's, etc
          /[A-Za-z]+[-][a-z]+/,
          // `no-way`, etc.
          /[A-Za-z][a-z]{2,}/ // allow capitalized words at beginning of sentences
          );
          // looking like plain text, more likely to be a comment
          mode.contains.push({
            // TODO: how to include ", (, ) without breaking grammars that use these for
            // comment delimiters?
            // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
            // ---

            // this tries to find sequences of 3 english words in a row (without any
            // "programming" type syntax) this gives us a strong signal that we've
            // TRULY found a comment - vs perhaps scanning with the wrong language.
            // It's possible to find something that LOOKS like the start of the
            // comment - but then if there is no readable text - good chance it is a
            // false match and not a comment.
            //
            // for a visual example please see:
            // https://github.com/highlightjs/highlight.js/issues/2827

            begin: concat(/[ ]+/,
            // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
            '(', ENGLISH_WORD, /[.]?[:]?([.][ ]|[ ])/, '){3}') // look for 3 words in a row
          });
          return mode;
        };
        var C_LINE_COMMENT_MODE = COMMENT('//', '$');
        var C_BLOCK_COMMENT_MODE = COMMENT('/\\*', '\\*/');
        var HASH_COMMENT_MODE = COMMENT('#', '$');
        var NUMBER_MODE = {
          scope: 'number',
          begin: NUMBER_RE,
          relevance: 0
        };
        var C_NUMBER_MODE = {
          scope: 'number',
          begin: C_NUMBER_RE,
          relevance: 0
        };
        var BINARY_NUMBER_MODE = {
          scope: 'number',
          begin: BINARY_NUMBER_RE,
          relevance: 0
        };
        var REGEXP_MODE = {
          scope: "regexp",
          begin: /\/(?=[^/\n]*\/)/,
          end: /\/[gimuy]*/,
          contains: [BACKSLASH_ESCAPE, {
            begin: /\[/,
            end: /\]/,
            relevance: 0,
            contains: [BACKSLASH_ESCAPE]
          }]
        };
        var TITLE_MODE = {
          scope: 'title',
          begin: IDENT_RE,
          relevance: 0
        };
        var UNDERSCORE_TITLE_MODE = {
          scope: 'title',
          begin: UNDERSCORE_IDENT_RE,
          relevance: 0
        };
        var METHOD_GUARD = {
          // excludes method names from keyword processing
          begin: '\\.\\s*' + UNDERSCORE_IDENT_RE,
          relevance: 0
        };

        /**
         * Adds end same as begin mechanics to a mode
         *
         * Your mode must include at least a single () match group as that first match
         * group is what is used for comparison
         * @param {Partial<Mode>} mode
         */
        var END_SAME_AS_BEGIN = function END_SAME_AS_BEGIN(mode) {
          return Object.assign(mode, {
            /** @type {ModeCallback} */
            'on:begin': function onBegin(m, resp) {
              resp.data._beginMatch = m[1];
            },
            /** @type {ModeCallback} */
            'on:end': function onEnd(m, resp) {
              if (resp.data._beginMatch !== m[1]) resp.ignoreMatch();
            }
          });
        };
        var MODES = /*#__PURE__*/Object.freeze({
          __proto__: null,
          APOS_STRING_MODE: APOS_STRING_MODE,
          BACKSLASH_ESCAPE: BACKSLASH_ESCAPE,
          BINARY_NUMBER_MODE: BINARY_NUMBER_MODE,
          BINARY_NUMBER_RE: BINARY_NUMBER_RE,
          COMMENT: COMMENT,
          C_BLOCK_COMMENT_MODE: C_BLOCK_COMMENT_MODE,
          C_LINE_COMMENT_MODE: C_LINE_COMMENT_MODE,
          C_NUMBER_MODE: C_NUMBER_MODE,
          C_NUMBER_RE: C_NUMBER_RE,
          END_SAME_AS_BEGIN: END_SAME_AS_BEGIN,
          HASH_COMMENT_MODE: HASH_COMMENT_MODE,
          IDENT_RE: IDENT_RE,
          MATCH_NOTHING_RE: MATCH_NOTHING_RE,
          METHOD_GUARD: METHOD_GUARD,
          NUMBER_MODE: NUMBER_MODE,
          NUMBER_RE: NUMBER_RE,
          PHRASAL_WORDS_MODE: PHRASAL_WORDS_MODE,
          QUOTE_STRING_MODE: QUOTE_STRING_MODE,
          REGEXP_MODE: REGEXP_MODE,
          RE_STARTERS_RE: RE_STARTERS_RE,
          SHEBANG: SHEBANG,
          TITLE_MODE: TITLE_MODE,
          UNDERSCORE_IDENT_RE: UNDERSCORE_IDENT_RE,
          UNDERSCORE_TITLE_MODE: UNDERSCORE_TITLE_MODE
        });

        /**
        @typedef {import('highlight.js').CallbackResponse} CallbackResponse
        @typedef {import('highlight.js').CompilerExt} CompilerExt
        */

        // Grammar extensions / plugins
        // See: https://github.com/highlightjs/highlight.js/issues/2833

        // Grammar extensions allow "syntactic sugar" to be added to the grammar modes
        // without requiring any underlying changes to the compiler internals.

        // `compileMatch` being the perfect small example of now allowing a grammar
        // author to write `match` when they desire to match a single expression rather
        // than being forced to use `begin`.  The extension then just moves `match` into
        // `begin` when it runs.  Ie, no features have been added, but we've just made
        // the experience of writing (and reading grammars) a little bit nicer.

        // ------

        // TODO: We need negative look-behind support to do this properly
        /**
         * Skip a match if it has a preceding dot
         *
         * This is used for `beginKeywords` to prevent matching expressions such as
         * `bob.keyword.do()`. The mode compiler automatically wires this up as a
         * special _internal_ 'on:begin' callback for modes with `beginKeywords`
         * @param {RegExpMatchArray} match
         * @param {CallbackResponse} response
         */
        function skipIfHasPrecedingDot(match, response) {
          var before = match.input[match.index - 1];
          if (before === ".") {
            response.ignoreMatch();
          }
        }

        /**
         *
         * @type {CompilerExt}
         */
        function scopeClassName(mode, _parent) {
          // eslint-disable-next-line no-undefined
          if (mode.className !== undefined) {
            mode.scope = mode.className;
            delete mode.className;
          }
        }

        /**
         * `beginKeywords` syntactic sugar
         * @type {CompilerExt}
         */
        function beginKeywords(mode, parent) {
          if (!parent) return;
          if (!mode.beginKeywords) return;

          // for languages with keywords that include non-word characters checking for
          // a word boundary is not sufficient, so instead we check for a word boundary
          // or whitespace - this does no harm in any case since our keyword engine
          // doesn't allow spaces in keywords anyways and we still check for the boundary
          // first
          mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)';
          mode.__beforeBegin = skipIfHasPrecedingDot;
          mode.keywords = mode.keywords || mode.beginKeywords;
          delete mode.beginKeywords;

          // prevents double relevance, the keywords themselves provide
          // relevance, the mode doesn't need to double it
          // eslint-disable-next-line no-undefined
          if (mode.relevance === undefined) mode.relevance = 0;
        }

        /**
         * Allow `illegal` to contain an array of illegal values
         * @type {CompilerExt}
         */
        function compileIllegal(mode, _parent) {
          if (!Array.isArray(mode.illegal)) return;
          mode.illegal = either.apply(void 0, _toConsumableArray(mode.illegal));
        }

        /**
         * `match` to match a single expression for readability
         * @type {CompilerExt}
         */
        function compileMatch(mode, _parent) {
          if (!mode.match) return;
          if (mode.begin || mode.end) throw new Error("begin & end are not supported with match");
          mode.begin = mode.match;
          delete mode.match;
        }

        /**
         * provides the default 1 relevance to all modes
         * @type {CompilerExt}
         */
        function compileRelevance(mode, _parent) {
          // eslint-disable-next-line no-undefined
          if (mode.relevance === undefined) mode.relevance = 1;
        }

        // allow beforeMatch to act as a "qualifier" for the match
        // the full match begin must be [beforeMatch][begin]
        var beforeMatchExt = function beforeMatchExt(mode, parent) {
          if (!mode.beforeMatch) return;
          // starts conflicts with endsParent which we need to make sure the child
          // rule is not matched multiple times
          if (mode.starts) throw new Error("beforeMatch cannot be used with starts");
          var originalMode = Object.assign({}, mode);
          Object.keys(mode).forEach(function (key) {
            delete mode[key];
          });
          mode.keywords = originalMode.keywords;
          mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
          mode.starts = {
            relevance: 0,
            contains: [Object.assign(originalMode, {
              endsParent: true
            })]
          };
          mode.relevance = 0;
          delete originalMode.beforeMatch;
        };

        // keywords that should have no default relevance value
        var COMMON_KEYWORDS = ['of', 'and', 'for', 'in', 'not', 'or', 'if', 'then', 'parent',
        // common variable name
        'list',
        // common variable name
        'value' // common variable name
        ];
        var DEFAULT_KEYWORD_SCOPE = "keyword";

        /**
         * Given raw keywords from a language definition, compile them.
         *
         * @param {string | Record<string,string|string[]> | Array<string>} rawKeywords
         * @param {boolean} caseInsensitive
         */
        function compileKeywords(rawKeywords, caseInsensitive) {
          var scopeName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_KEYWORD_SCOPE;
          /** @type {import("highlight.js/private").KeywordDict} */
          var compiledKeywords = Object.create(null);

          // input can be a string of keywords, an array of keywords, or a object with
          // named keys representing scopeName (which can then point to a string or array)
          if (typeof rawKeywords === 'string') {
            compileList(scopeName, rawKeywords.split(" "));
          } else if (Array.isArray(rawKeywords)) {
            compileList(scopeName, rawKeywords);
          } else {
            Object.keys(rawKeywords).forEach(function (scopeName) {
              // collapse all our objects back into the parent object
              Object.assign(compiledKeywords, compileKeywords(rawKeywords[scopeName], caseInsensitive, scopeName));
            });
          }
          return compiledKeywords;

          // ---

          /**
           * Compiles an individual list of keywords
           *
           * Ex: "for if when while|5"
           *
           * @param {string} scopeName
           * @param {Array<string>} keywordList
           */
          function compileList(scopeName, keywordList) {
            if (caseInsensitive) {
              keywordList = keywordList.map(function (x) {
                return x.toLowerCase();
              });
            }
            keywordList.forEach(function (keyword) {
              var pair = keyword.split('|');
              compiledKeywords[pair[0]] = [scopeName, scoreForKeyword(pair[0], pair[1])];
            });
          }
        }

        /**
         * Returns the proper score for a given keyword
         *
         * Also takes into account comment keywords, which will be scored 0 UNLESS
         * another score has been manually assigned.
         * @param {string} keyword
         * @param {string} [providedScore]
         */
        function scoreForKeyword(keyword, providedScore) {
          // manual scores always win over common keywords
          // so you can force a score of 1 if you really insist
          if (providedScore) {
            return Number(providedScore);
          }
          return commonKeyword(keyword) ? 0 : 1;
        }

        /**
         * Determines if a given keyword is common or not
         *
         * @param {string} keyword */
        function commonKeyword(keyword) {
          return COMMON_KEYWORDS.includes(keyword.toLowerCase());
        }

        /*
         For the reasoning behind this please see:
        https://github.com/highlightjs/highlight.js/issues/2880#issuecomment-747275419
         */

        /**
         * @type {Record<string, boolean>}
         */
        var seenDeprecations = {};

        /**
         * @param {string} message
         */
        var error = function error(message) {
          console.error(message);
        };

        /**
         * @param {string} message
         * @param {any} args
         */
        var warn = function warn(message) {
          var _console;
          for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key5 = 1; _key5 < _len4; _key5++) {
            args[_key5 - 1] = arguments[_key5];
          }
          (_console = console).log.apply(_console, ["WARN: ".concat(message)].concat(args));
        };

        /**
         * @param {string} version
         * @param {string} message
         */
        var deprecated = function deprecated(version, message) {
          if (seenDeprecations["".concat(version, "/").concat(message)]) return;
          console.log("Deprecated as of ".concat(version, ". ").concat(message));
          seenDeprecations["".concat(version, "/").concat(message)] = true;
        };

        /* eslint-disable no-throw-literal */

        /**
        @typedef {import('highlight.js').CompiledMode} CompiledMode
        */

        var MultiClassError = new Error();

        /**
         * Renumbers labeled scope names to account for additional inner match
         * groups that otherwise would break everything.
         *
         * Lets say we 3 match scopes:
         *
         *   { 1 => ..., 2 => ..., 3 => ... }
         *
         * So what we need is a clean match like this:
         *
         *   (a)(b)(c) => [ "a", "b", "c" ]
         *
         * But this falls apart with inner match groups:
         *
         * (a)(((b)))(c) => ["a", "b", "b", "b", "c" ]
         *
         * Our scopes are now "out of alignment" and we're repeating `b` 3 times.
         * What needs to happen is the numbers are remapped:
         *
         *   { 1 => ..., 2 => ..., 5 => ... }
         *
         * We also need to know that the ONLY groups that should be output
         * are 1, 2, and 5.  This function handles this behavior.
         *
         * @param {CompiledMode} mode
         * @param {Array<RegExp | string>} regexes
         * @param {{key: "beginScope"|"endScope"}} opts
         */
        function remapScopeNames(mode, regexes, _ref3) {
          var key = _ref3.key;
          var offset = 0;
          var scopeNames = mode[key];
          /** @type Record<number,boolean> */
          var emit = {};
          /** @type Record<number,string> */
          var positions = {};
          for (var i = 1; i <= regexes.length; i++) {
            positions[i + offset] = scopeNames[i];
            emit[i + offset] = true;
            offset += countMatchGroups(regexes[i - 1]);
          }
          // we use _emit to keep track of which match groups are "top-level" to avoid double
          // output from inside match groups
          mode[key] = positions;
          mode[key]._emit = emit;
          mode[key]._multi = true;
        }

        /**
         * @param {CompiledMode} mode
         */
        function beginMultiClass(mode) {
          if (!Array.isArray(mode.begin)) return;
          if (mode.skip || mode.excludeBegin || mode.returnBegin) {
            error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
            throw MultiClassError;
          }
          if (_typeof(mode.beginScope) !== "object" || mode.beginScope === null) {
            error("beginScope must be object");
            throw MultiClassError;
          }
          remapScopeNames(mode, mode.begin, {
            key: "beginScope"
          });
          mode.begin = _rewriteBackreferences(mode.begin, {
            joinWith: ""
          });
        }

        /**
         * @param {CompiledMode} mode
         */
        function endMultiClass(mode) {
          if (!Array.isArray(mode.end)) return;
          if (mode.skip || mode.excludeEnd || mode.returnEnd) {
            error("skip, excludeEnd, returnEnd not compatible with endScope: {}");
            throw MultiClassError;
          }
          if (_typeof(mode.endScope) !== "object" || mode.endScope === null) {
            error("endScope must be object");
            throw MultiClassError;
          }
          remapScopeNames(mode, mode.end, {
            key: "endScope"
          });
          mode.end = _rewriteBackreferences(mode.end, {
            joinWith: ""
          });
        }

        /**
         * this exists only to allow `scope: {}` to be used beside `match:`
         * Otherwise `beginScope` would necessary and that would look weird
           {
            match: [ /def/, /\w+/ ]
            scope: { 1: "keyword" , 2: "title" }
          }
          * @param {CompiledMode} mode
         */
        function scopeSugar(mode) {
          if (mode.scope && _typeof(mode.scope) === "object" && mode.scope !== null) {
            mode.beginScope = mode.scope;
            delete mode.scope;
          }
        }

        /**
         * @param {CompiledMode} mode
         */
        function MultiClass(mode) {
          scopeSugar(mode);
          if (typeof mode.beginScope === "string") {
            mode.beginScope = {
              _wrap: mode.beginScope
            };
          }
          if (typeof mode.endScope === "string") {
            mode.endScope = {
              _wrap: mode.endScope
            };
          }
          beginMultiClass(mode);
          endMultiClass(mode);
        }

        /**
        @typedef {import('highlight.js').Mode} Mode
        @typedef {import('highlight.js').CompiledMode} CompiledMode
        @typedef {import('highlight.js').Language} Language
        @typedef {import('highlight.js').HLJSPlugin} HLJSPlugin
        @typedef {import('highlight.js').CompiledLanguage} CompiledLanguage
        */

        // compilation

        /**
         * Compiles a language definition result
         *
         * Given the raw result of a language definition (Language), compiles this so
         * that it is ready for highlighting code.
         * @param {Language} language
         * @returns {CompiledLanguage}
         */
        function compileLanguage(language) {
          /**
           * Builds a regex with the case sensitivity of the current language
           *
           * @param {RegExp | string} value
           * @param {boolean} [global]
           */
          function langRe(value, global) {
            return new RegExp(source(value), 'm' + (language.case_insensitive ? 'i' : '') + (language.unicodeRegex ? 'u' : '') + (global ? 'g' : ''));
          }

          /**
            Stores multiple regular expressions and allows you to quickly search for
            them all in a string simultaneously - returning the first match.  It does
            this by creating a huge (a|b|c) regex - each individual item wrapped with ()
            and joined by `|` - using match groups to track position.  When a match is
            found checking which position in the array has content allows us to figure
            out which of the original regexes / match groups triggered the match.
             The match object itself (the result of `Regex.exec`) is returned but also
            enhanced by merging in any meta-data that was registered with the regex.
            This is how we keep track of which mode matched, and what type of rule
            (`illegal`, `begin`, end, etc).
          */
          var MultiRegex = /*#__PURE__*/function () {
            function MultiRegex() {
              _classCallCheck(this, MultiRegex);
              this.matchIndexes = {};
              // @ts-ignore
              this.regexes = [];
              this.matchAt = 1;
              this.position = 0;
            }

            // @ts-ignore
            return _createClass(MultiRegex, [{
              key: "addRule",
              value: function addRule(re, opts) {
                opts.position = this.position++;
                // @ts-ignore
                this.matchIndexes[this.matchAt] = opts;
                this.regexes.push([opts, re]);
                this.matchAt += countMatchGroups(re) + 1;
              }
            }, {
              key: "compile",
              value: function compile() {
                if (this.regexes.length === 0) {
                  // avoids the need to check length every time exec is called
                  // @ts-ignore
                  this.exec = function () {
                    return null;
                  };
                }
                var terminators = this.regexes.map(function (el) {
                  return el[1];
                });
                this.matcherRe = langRe(_rewriteBackreferences(terminators, {
                  joinWith: '|'
                }), true);
                this.lastIndex = 0;
              }

              /** @param {string} s */
            }, {
              key: "exec",
              value: function exec(s) {
                this.matcherRe.lastIndex = this.lastIndex;
                var match = this.matcherRe.exec(s);
                if (!match) {
                  return null;
                }

                // eslint-disable-next-line no-undefined
                var i = match.findIndex(function (el, i) {
                  return i > 0 && el !== undefined;
                });
                // @ts-ignore
                var matchData = this.matchIndexes[i];
                // trim off any earlier non-relevant match groups (ie, the other regex
                // match groups that make up the multi-matcher)
                match.splice(0, i);
                return Object.assign(match, matchData);
              }
            }]);
          }();
          /*
            Created to solve the key deficiently with MultiRegex - there is no way to
            test for multiple matches at a single location.  Why would we need to do
            that?  In the future a more dynamic engine will allow certain matches to be
            ignored.  An example: if we matched say the 3rd regex in a large group but
            decided to ignore it - we'd need to started testing again at the 4th
            regex... but MultiRegex itself gives us no real way to do that.
             So what this class creates MultiRegexs on the fly for whatever search
            position they are needed.
             NOTE: These additional MultiRegex objects are created dynamically.  For most
            grammars most of the time we will never actually need anything more than the
            first MultiRegex - so this shouldn't have too much overhead.
             Say this is our search group, and we match regex3, but wish to ignore it.
               regex1 | regex2 | regex3 | regex4 | regex5    ' ie, startAt = 0
             What we need is a new MultiRegex that only includes the remaining
            possibilities:
               regex4 | regex5                               ' ie, startAt = 3
             This class wraps all that complexity up in a simple API... `startAt` decides
            where in the array of expressions to start doing the matching. It
            auto-increments, so if a match is found at position 2, then startAt will be
            set to 3.  If the end is reached startAt will return to 0.
             MOST of the time the parser will be setting startAt manually to 0.
          */
          var ResumableMultiRegex = /*#__PURE__*/function () {
            function ResumableMultiRegex() {
              _classCallCheck(this, ResumableMultiRegex);
              // @ts-ignore
              this.rules = [];
              // @ts-ignore
              this.multiRegexes = [];
              this.count = 0;
              this.lastIndex = 0;
              this.regexIndex = 0;
            }

            // @ts-ignore
            return _createClass(ResumableMultiRegex, [{
              key: "getMatcher",
              value: function getMatcher(index) {
                if (this.multiRegexes[index]) return this.multiRegexes[index];
                var matcher = new MultiRegex();
                this.rules.slice(index).forEach(function (_ref4) {
                  var _ref5 = _slicedToArray(_ref4, 2),
                    re = _ref5[0],
                    opts = _ref5[1];
                  return matcher.addRule(re, opts);
                });
                matcher.compile();
                this.multiRegexes[index] = matcher;
                return matcher;
              }
            }, {
              key: "resumingScanAtSamePosition",
              value: function resumingScanAtSamePosition() {
                return this.regexIndex !== 0;
              }
            }, {
              key: "considerAll",
              value: function considerAll() {
                this.regexIndex = 0;
              }

              // @ts-ignore
            }, {
              key: "addRule",
              value: function addRule(re, opts) {
                this.rules.push([re, opts]);
                if (opts.type === "begin") this.count++;
              }

              /** @param {string} s */
            }, {
              key: "exec",
              value: function exec(s) {
                var m = this.getMatcher(this.regexIndex);
                m.lastIndex = this.lastIndex;
                var result = m.exec(s);

                // The following is because we have no easy way to say "resume scanning at the
                // existing position but also skip the current rule ONLY". What happens is
                // all prior rules are also skipped which can result in matching the wrong
                // thing. Example of matching "booger":

                // our matcher is [string, "booger", number]
                //
                // ....booger....

                // if "booger" is ignored then we'd really need a regex to scan from the
                // SAME position for only: [string, number] but ignoring "booger" (if it
                // was the first match), a simple resume would scan ahead who knows how
                // far looking only for "number", ignoring potential string matches (or
                // future "booger" matches that might be valid.)

                // So what we do: We execute two matchers, one resuming at the same
                // position, but the second full matcher starting at the position after:

                //     /--- resume first regex match here (for [number])
                //     |/---- full match here for [string, "booger", number]
                //     vv
                // ....booger....

                // Which ever results in a match first is then used. So this 3-4 step
                // process essentially allows us to say "match at this position, excluding
                // a prior rule that was ignored".
                //
                // 1. Match "booger" first, ignore. Also proves that [string] does non match.
                // 2. Resume matching for [number]
                // 3. Match at index + 1 for [string, "booger", number]
                // 4. If #2 and #3 result in matches, which came first?
                if (this.resumingScanAtSamePosition()) {
                  if (result && result.index === this.lastIndex) ;else {
                    // use the second matcher result
                    var m2 = this.getMatcher(0);
                    m2.lastIndex = this.lastIndex + 1;
                    result = m2.exec(s);
                  }
                }
                if (result) {
                  this.regexIndex += result.position + 1;
                  if (this.regexIndex === this.count) {
                    // wrap-around to considering all matches again
                    this.considerAll();
                  }
                }
                return result;
              }
            }]);
          }();
          /**
           * Given a mode, builds a huge ResumableMultiRegex that can be used to walk
           * the content and find matches.
           *
           * @param {CompiledMode} mode
           * @returns {ResumableMultiRegex}
           */
          function buildModeRegex(mode) {
            var mm = new ResumableMultiRegex();
            mode.contains.forEach(function (term) {
              return mm.addRule(term.begin, {
                rule: term,
                type: "begin"
              });
            });
            if (mode.terminatorEnd) {
              mm.addRule(mode.terminatorEnd, {
                type: "end"
              });
            }
            if (mode.illegal) {
              mm.addRule(mode.illegal, {
                type: "illegal"
              });
            }
            return mm;
          }

          /** skip vs abort vs ignore
           *
           * @skip   - The mode is still entered and exited normally (and contains rules apply),
           *           but all content is held and added to the parent buffer rather than being
           *           output when the mode ends.  Mostly used with `sublanguage` to build up
           *           a single large buffer than can be parsed by sublanguage.
           *
           *             - The mode begin ands ends normally.
           *             - Content matched is added to the parent mode buffer.
           *             - The parser cursor is moved forward normally.
           *
           * @abort  - A hack placeholder until we have ignore.  Aborts the mode (as if it
           *           never matched) but DOES NOT continue to match subsequent `contains`
           *           modes.  Abort is bad/suboptimal because it can result in modes
           *           farther down not getting applied because an earlier rule eats the
           *           content but then aborts.
           *
           *             - The mode does not begin.
           *             - Content matched by `begin` is added to the mode buffer.
           *             - The parser cursor is moved forward accordingly.
           *
           * @ignore - Ignores the mode (as if it never matched) and continues to match any
           *           subsequent `contains` modes.  Ignore isn't technically possible with
           *           the current parser implementation.
           *
           *             - The mode does not begin.
           *             - Content matched by `begin` is ignored.
           *             - The parser cursor is not moved forward.
           */

          /**
           * Compiles an individual mode
           *
           * This can raise an error if the mode contains certain detectable known logic
           * issues.
           * @param {Mode} mode
           * @param {CompiledMode | null} [parent]
           * @returns {CompiledMode | never}
           */
          function compileMode(mode, parent) {
            var _ref6;
            var cmode = /** @type CompiledMode */mode;
            if (mode.isCompiled) return cmode;
            [scopeClassName,
            // do this early so compiler extensions generally don't have to worry about
            // the distinction between match/begin
            compileMatch, MultiClass, beforeMatchExt].forEach(function (ext) {
              return ext(mode, parent);
            });
            language.compilerExtensions.forEach(function (ext) {
              return ext(mode, parent);
            });

            // __beforeBegin is considered private API, internal use only
            mode.__beforeBegin = null;
            [beginKeywords,
            // do this later so compiler extensions that come earlier have access to the
            // raw array if they wanted to perhaps manipulate it, etc.
            compileIllegal,
            // default to 1 relevance if not specified
            compileRelevance].forEach(function (ext) {
              return ext(mode, parent);
            });
            mode.isCompiled = true;
            var keywordPattern = null;
            if (_typeof(mode.keywords) === "object" && mode.keywords.$pattern) {
              // we need a copy because keywords might be compiled multiple times
              // so we can't go deleting $pattern from the original on the first
              // pass
              mode.keywords = Object.assign({}, mode.keywords);
              keywordPattern = mode.keywords.$pattern;
              delete mode.keywords.$pattern;
            }
            keywordPattern = keywordPattern || /\w+/;
            if (mode.keywords) {
              mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
            }
            cmode.keywordPatternRe = langRe(keywordPattern, true);
            if (parent) {
              if (!mode.begin) mode.begin = /\B|\b/;
              cmode.beginRe = langRe(cmode.begin);
              if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
              if (mode.end) cmode.endRe = langRe(cmode.end);
              cmode.terminatorEnd = source(cmode.end) || '';
              if (mode.endsWithParent && parent.terminatorEnd) {
                cmode.terminatorEnd += (mode.end ? '|' : '') + parent.terminatorEnd;
              }
            }
            if (mode.illegal) cmode.illegalRe = langRe( /** @type {RegExp | string} */mode.illegal);
            if (!mode.contains) mode.contains = [];
            mode.contains = (_ref6 = []).concat.apply(_ref6, _toConsumableArray(mode.contains.map(function (c) {
              return expandOrCloneMode(c === 'self' ? mode : c);
            })));
            mode.contains.forEach(function (c) {
              compileMode( /** @type Mode */c, cmode);
            });
            if (mode.starts) {
              compileMode(mode.starts, parent);
            }
            cmode.matcher = buildModeRegex(cmode);
            return cmode;
          }
          if (!language.compilerExtensions) language.compilerExtensions = [];

          // self is not valid at the top-level
          if (language.contains && language.contains.includes('self')) {
            throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
          }

          // we need a null object, which inherit will guarantee
          language.classNameAliases = inherit$1(language.classNameAliases || {});
          return compileMode( /** @type Mode */language);
        }

        /**
         * Determines if a mode has a dependency on it's parent or not
         *
         * If a mode does have a parent dependency then often we need to clone it if
         * it's used in multiple places so that each copy points to the correct parent,
         * where-as modes without a parent can often safely be re-used at the bottom of
         * a mode chain.
         *
         * @param {Mode | null} mode
         * @returns {boolean} - is there a dependency on the parent?
         * */
        function dependencyOnParent(mode) {
          if (!mode) return false;
          return mode.endsWithParent || dependencyOnParent(mode.starts);
        }

        /**
         * Expands a mode or clones it if necessary
         *
         * This is necessary for modes with parental dependenceis (see notes on
         * `dependencyOnParent`) and for nodes that have `variants` - which must then be
         * exploded into their own individual modes at compile time.
         *
         * @param {Mode} mode
         * @returns {Mode | Mode[]}
         * */
        function expandOrCloneMode(mode) {
          if (mode.variants && !mode.cachedVariants) {
            mode.cachedVariants = mode.variants.map(function (variant) {
              return inherit$1(mode, {
                variants: null
              }, variant);
            });
          }

          // EXPAND
          // if we have variants then essentially "replace" the mode with the variants
          // this happens in compileMode, where this function is called from
          if (mode.cachedVariants) {
            return mode.cachedVariants;
          }

          // CLONE
          // if we have dependencies on parents then we need a unique
          // instance of ourselves, so we can be reused with many
          // different parents without issue
          if (dependencyOnParent(mode)) {
            return inherit$1(mode, {
              starts: mode.starts ? inherit$1(mode.starts) : null
            });
          }
          if (Object.isFrozen(mode)) {
            return inherit$1(mode);
          }

          // no special dependency issues, just return ourselves
          return mode;
        }
        var version = "11.9.0";
        var HTMLInjectionError = /*#__PURE__*/function (_Error) {
          function HTMLInjectionError(reason, html) {
            var _this3;
            _classCallCheck(this, HTMLInjectionError);
            _this3 = _callSuper(this, HTMLInjectionError, [reason]);
            _this3.name = "HTMLInjectionError";
            _this3.html = html;
            return _this3;
          }
          _inherits(HTMLInjectionError, _Error);
          return _createClass(HTMLInjectionError);
        }( /*#__PURE__*/_wrapNativeSuper(Error));
        /*
        Syntax highlighting with language autodetection.
        https://highlightjs.org/
        */
        /**
        @typedef {import('highlight.js').Mode} Mode
        @typedef {import('highlight.js').CompiledMode} CompiledMode
        @typedef {import('highlight.js').CompiledScope} CompiledScope
        @typedef {import('highlight.js').Language} Language
        @typedef {import('highlight.js').HLJSApi} HLJSApi
        @typedef {import('highlight.js').HLJSPlugin} HLJSPlugin
        @typedef {import('highlight.js').PluginEvent} PluginEvent
        @typedef {import('highlight.js').HLJSOptions} HLJSOptions
        @typedef {import('highlight.js').LanguageFn} LanguageFn
        @typedef {import('highlight.js').HighlightedHTMLElement} HighlightedHTMLElement
        @typedef {import('highlight.js').BeforeHighlightContext} BeforeHighlightContext
        @typedef {import('highlight.js/private').MatchType} MatchType
        @typedef {import('highlight.js/private').KeywordData} KeywordData
        @typedef {import('highlight.js/private').EnhancedMatch} EnhancedMatch
        @typedef {import('highlight.js/private').AnnotatedError} AnnotatedError
        @typedef {import('highlight.js').AutoHighlightResult} AutoHighlightResult
        @typedef {import('highlight.js').HighlightOptions} HighlightOptions
        @typedef {import('highlight.js').HighlightResult} HighlightResult
        */
        var escape = escapeHTML;
        var inherit = inherit$1;
        var NO_MATCH = Symbol("nomatch");
        var MAX_KEYWORD_HITS = 7;

        /**
         * @param {any} hljs - object that is extended (legacy)
         * @returns {HLJSApi}
         */
        var HLJS = function HLJS(hljs) {
          // Global internal variables used within the highlight.js library.
          /** @type {Record<string, Language>} */
          var languages = Object.create(null);
          /** @type {Record<string, string>} */
          var aliases = Object.create(null);
          /** @type {HLJSPlugin[]} */
          var plugins = [];

          // safe/production mode - swallows more errors, tries to keep running
          // even if a single syntax or parse hits a fatal error
          var SAFE_MODE = true;
          var LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
          /** @type {Language} */
          var PLAINTEXT_LANGUAGE = {
            disableAutodetect: true,
            name: 'Plain text',
            contains: []
          };

          // Global options used when within external APIs. This is modified when
          // calling the `hljs.configure` function.
          /** @type HLJSOptions */
          var options = {
            ignoreUnescapedHTML: false,
            throwUnescapedHTML: false,
            noHighlightRe: /^(no-?highlight)$/i,
            languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
            classPrefix: 'hljs-',
            cssSelector: 'pre code',
            languages: null,
            // beta configuration options, subject to change, welcome to discuss
            // https://github.com/highlightjs/highlight.js/issues/1086
            __emitter: TokenTreeEmitter
          };

          /* Utility functions */

          /**
           * Tests a language name to see if highlighting should be skipped
           * @param {string} languageName
           */
          function shouldNotHighlight(languageName) {
            return options.noHighlightRe.test(languageName);
          }

          /**
           * @param {HighlightedHTMLElement} block - the HTML element to determine language for
           */
          function blockLanguage(block) {
            var classes = block.className + ' ';
            classes += block.parentNode ? block.parentNode.className : '';

            // language-* takes precedence over non-prefixed class names.
            var match = options.languageDetectRe.exec(classes);
            if (match) {
              var language = getLanguage(match[1]);
              if (!language) {
                warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
                warn("Falling back to no-highlight mode for this block.", block);
              }
              return language ? match[1] : 'no-highlight';
            }
            return classes.split(/\s+/).find(function (_class) {
              return shouldNotHighlight(_class) || getLanguage(_class);
            });
          }

          /**
           * Core highlighting function.
           *
           * OLD API
           * highlight(lang, code, ignoreIllegals, continuation)
           *
           * NEW API
           * highlight(code, {lang, ignoreIllegals})
           *
           * @param {string} codeOrLanguageName - the language to use for highlighting
           * @param {string | HighlightOptions} optionsOrCode - the code to highlight
           * @param {boolean} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
           *
           * @returns {HighlightResult} Result - an object that represents the result
           * @property {string} language - the language name
           * @property {number} relevance - the relevance score
           * @property {string} value - the highlighted HTML code
           * @property {string} code - the original raw code
           * @property {CompiledMode} top - top of the current mode stack
           * @property {boolean} illegal - indicates whether any illegal matches were found
          */
          function highlight(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
            var code = "";
            var languageName = "";
            if (_typeof(optionsOrCode) === "object") {
              code = codeOrLanguageName;
              ignoreIllegals = optionsOrCode.ignoreIllegals;
              languageName = optionsOrCode.language;
            } else {
              // old API
              deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
              deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
              languageName = codeOrLanguageName;
              code = optionsOrCode;
            }

            // https://github.com/highlightjs/highlight.js/issues/3149
            // eslint-disable-next-line no-undefined
            if (ignoreIllegals === undefined) {
              ignoreIllegals = true;
            }

            /** @type {BeforeHighlightContext} */
            var context = {
              code: code,
              language: languageName
            };
            // the plugin can change the desired language or the code to be highlighted
            // just be changing the object it was passed
            fire("before:highlight", context);

            // a before plugin can usurp the result completely by providing it's own
            // in which case we don't even need to call highlight
            var result = context.result ? context.result : _highlight(context.language, context.code, ignoreIllegals);
            result.code = context.code;
            // the plugin can change anything in result to suite it
            fire("after:highlight", result);
            return result;
          }

          /**
           * private highlight that's used internally and does not fire callbacks
           *
           * @param {string} languageName - the language to use for highlighting
           * @param {string} codeToHighlight - the code to highlight
           * @param {boolean?} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
           * @param {CompiledMode?} [continuation] - current continuation mode, if any
           * @returns {HighlightResult} - result of the highlight operation
          */
          function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
            var keywordHits = Object.create(null);

            /**
             * Return keyword data if a match is a keyword
             * @param {CompiledMode} mode - current mode
             * @param {string} matchText - the textual match
             * @returns {KeywordData | false}
             */
            function keywordData(mode, matchText) {
              return mode.keywords[matchText];
            }
            function processKeywords() {
              if (!top.keywords) {
                emitter.addText(modeBuffer);
                return;
              }
              var lastIndex = 0;
              top.keywordPatternRe.lastIndex = 0;
              var match = top.keywordPatternRe.exec(modeBuffer);
              var buf = "";
              while (match) {
                buf += modeBuffer.substring(lastIndex, match.index);
                var word = language.case_insensitive ? match[0].toLowerCase() : match[0];
                var data = keywordData(top, word);
                if (data) {
                  var _data = _slicedToArray(data, 2),
                    kind = _data[0],
                    keywordRelevance = _data[1];
                  emitter.addText(buf);
                  buf = "";
                  keywordHits[word] = (keywordHits[word] || 0) + 1;
                  if (keywordHits[word] <= MAX_KEYWORD_HITS) relevance += keywordRelevance;
                  if (kind.startsWith("_")) {
                    // _ implied for relevance only, do not highlight
                    // by applying a class name
                    buf += match[0];
                  } else {
                    var cssClass = language.classNameAliases[kind] || kind;
                    emitKeyword(match[0], cssClass);
                  }
                } else {
                  buf += match[0];
                }
                lastIndex = top.keywordPatternRe.lastIndex;
                match = top.keywordPatternRe.exec(modeBuffer);
              }
              buf += modeBuffer.substring(lastIndex);
              emitter.addText(buf);
            }
            function processSubLanguage() {
              if (modeBuffer === "") return;
              /** @type HighlightResult */
              var result = null;
              if (typeof top.subLanguage === 'string') {
                if (!languages[top.subLanguage]) {
                  emitter.addText(modeBuffer);
                  return;
                }
                result = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
                continuations[top.subLanguage] = /** @type {CompiledMode} */result._top;
              } else {
                result = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
              }

              // Counting embedded language score towards the host language may be disabled
              // with zeroing the containing mode relevance. Use case in point is Markdown that
              // allows XML everywhere and makes every XML snippet to have a much larger Markdown
              // score.
              if (top.relevance > 0) {
                relevance += result.relevance;
              }
              emitter.__addSublanguage(result._emitter, result.language);
            }
            function processBuffer() {
              if (top.subLanguage != null) {
                processSubLanguage();
              } else {
                processKeywords();
              }
              modeBuffer = '';
            }

            /**
             * @param {string} text
             * @param {string} scope
             */
            function emitKeyword(keyword, scope) {
              if (keyword === "") return;
              emitter.startScope(scope);
              emitter.addText(keyword);
              emitter.endScope();
            }

            /**
             * @param {CompiledScope} scope
             * @param {RegExpMatchArray} match
             */
            function emitMultiClass(scope, match) {
              var i = 1;
              var max = match.length - 1;
              while (i <= max) {
                if (!scope._emit[i]) {
                  i++;
                  continue;
                }
                var klass = language.classNameAliases[scope[i]] || scope[i];
                var text = match[i];
                if (klass) {
                  emitKeyword(text, klass);
                } else {
                  modeBuffer = text;
                  processKeywords();
                  modeBuffer = "";
                }
                i++;
              }
            }

            /**
             * @param {CompiledMode} mode - new mode to start
             * @param {RegExpMatchArray} match
             */
            function startNewMode(mode, match) {
              if (mode.scope && typeof mode.scope === "string") {
                emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
              }
              if (mode.beginScope) {
                // beginScope just wraps the begin match itself in a scope
                if (mode.beginScope._wrap) {
                  emitKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
                  modeBuffer = "";
                } else if (mode.beginScope._multi) {
                  // at this point modeBuffer should just be the match
                  emitMultiClass(mode.beginScope, match);
                  modeBuffer = "";
                }
              }
              top = Object.create(mode, {
                parent: {
                  value: top
                }
              });
              return top;
            }

            /**
             * @param {CompiledMode } mode - the mode to potentially end
             * @param {RegExpMatchArray} match - the latest match
             * @param {string} matchPlusRemainder - match plus remainder of content
             * @returns {CompiledMode | void} - the next mode, or if void continue on in current mode
             */
            function endOfMode(mode, match, matchPlusRemainder) {
              var matched = startsWith(mode.endRe, matchPlusRemainder);
              if (matched) {
                if (mode["on:end"]) {
                  var resp = new Response(mode);
                  mode["on:end"](match, resp);
                  if (resp.isMatchIgnored) matched = false;
                }
                if (matched) {
                  while (mode.endsParent && mode.parent) {
                    mode = mode.parent;
                  }
                  return mode;
                }
              }
              // even if on:end fires an `ignore` it's still possible
              // that we might trigger the end node because of a parent mode
              if (mode.endsWithParent) {
                return endOfMode(mode.parent, match, matchPlusRemainder);
              }
            }

            /**
             * Handle matching but then ignoring a sequence of text
             *
             * @param {string} lexeme - string containing full match text
             */
            function doIgnore(lexeme) {
              if (top.matcher.regexIndex === 0) {
                // no more regexes to potentially match here, so we move the cursor forward one
                // space
                modeBuffer += lexeme[0];
                return 1;
              } else {
                // no need to move the cursor, we still have additional regexes to try and
                // match at this very spot
                resumeScanAtSamePosition = true;
                return 0;
              }
            }

            /**
             * Handle the start of a new potential mode match
             *
             * @param {EnhancedMatch} match - the current match
             * @returns {number} how far to advance the parse cursor
             */
            function doBeginMatch(match) {
              var lexeme = match[0];
              var newMode = match.rule;
              var resp = new Response(newMode);
              // first internal before callbacks, then the public ones
              var beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
              for (var _i = 0, _beforeCallbacks = beforeCallbacks; _i < _beforeCallbacks.length; _i++) {
                var cb = _beforeCallbacks[_i];
                if (!cb) continue;
                cb(match, resp);
                if (resp.isMatchIgnored) return doIgnore(lexeme);
              }
              if (newMode.skip) {
                modeBuffer += lexeme;
              } else {
                if (newMode.excludeBegin) {
                  modeBuffer += lexeme;
                }
                processBuffer();
                if (!newMode.returnBegin && !newMode.excludeBegin) {
                  modeBuffer = lexeme;
                }
              }
              startNewMode(newMode, match);
              return newMode.returnBegin ? 0 : lexeme.length;
            }

            /**
             * Handle the potential end of mode
             *
             * @param {RegExpMatchArray} match - the current match
             */
            function doEndMatch(match) {
              var lexeme = match[0];
              var matchPlusRemainder = codeToHighlight.substring(match.index);
              var endMode = endOfMode(top, match, matchPlusRemainder);
              if (!endMode) {
                return NO_MATCH;
              }
              var origin = top;
              if (top.endScope && top.endScope._wrap) {
                processBuffer();
                emitKeyword(lexeme, top.endScope._wrap);
              } else if (top.endScope && top.endScope._multi) {
                processBuffer();
                emitMultiClass(top.endScope, match);
              } else if (origin.skip) {
                modeBuffer += lexeme;
              } else {
                if (!(origin.returnEnd || origin.excludeEnd)) {
                  modeBuffer += lexeme;
                }
                processBuffer();
                if (origin.excludeEnd) {
                  modeBuffer = lexeme;
                }
              }
              do {
                if (top.scope) {
                  emitter.closeNode();
                }
                if (!top.skip && !top.subLanguage) {
                  relevance += top.relevance;
                }
                top = top.parent;
              } while (top !== endMode.parent);
              if (endMode.starts) {
                startNewMode(endMode.starts, match);
              }
              return origin.returnEnd ? 0 : lexeme.length;
            }
            function processContinuations() {
              var list = [];
              for (var current = top; current !== language; current = current.parent) {
                if (current.scope) {
                  list.unshift(current.scope);
                }
              }
              list.forEach(function (item) {
                return emitter.openNode(item);
              });
            }

            /** @type {{type?: MatchType, index?: number, rule?: Mode}}} */
            var lastMatch = {};

            /**
             *  Process an individual match
             *
             * @param {string} textBeforeMatch - text preceding the match (since the last match)
             * @param {EnhancedMatch} [match] - the match itself
             */
            function processLexeme(textBeforeMatch, match) {
              var lexeme = match && match[0];

              // add non-matched text to the current mode buffer
              modeBuffer += textBeforeMatch;
              if (lexeme == null) {
                processBuffer();
                return 0;
              }

              // we've found a 0 width match and we're stuck, so we need to advance
              // this happens when we have badly behaved rules that have optional matchers to the degree that
              // sometimes they can end up matching nothing at all
              // Ref: https://github.com/highlightjs/highlight.js/issues/2140
              if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
                // spit the "skipped" character that our regex choked on back into the output sequence
                modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
                if (!SAFE_MODE) {
                  /** @type {AnnotatedError} */
                  var err = new Error("0 width match regex (".concat(languageName, ")"));
                  err.languageName = languageName;
                  err.badRule = lastMatch.rule;
                  throw err;
                }
                return 1;
              }
              lastMatch = match;
              if (match.type === "begin") {
                return doBeginMatch(match);
              } else if (match.type === "illegal" && !ignoreIllegals) {
                // illegal match, we do not continue processing
                /** @type {AnnotatedError} */
                var _err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.scope || '<unnamed>') + '"');
                _err.mode = top;
                throw _err;
              } else if (match.type === "end") {
                var processed = doEndMatch(match);
                if (processed !== NO_MATCH) {
                  return processed;
                }
              }

              // edge case for when illegal matches $ (end of line) which is technically
              // a 0 width match but not a begin/end match so it's not caught by the
              // first handler (when ignoreIllegals is true)
              if (match.type === "illegal" && lexeme === "") {
                // advance so we aren't stuck in an infinite loop
                return 1;
              }

              // infinite loops are BAD, this is a last ditch catch all. if we have a
              // decent number of iterations yet our index (cursor position in our
              // parsing) still 3x behind our index then something is very wrong
              // so we bail
              if (iterations > 100000 && iterations > match.index * 3) {
                var _err2 = new Error('potential infinite loop, way more iterations than matches');
                throw _err2;
              }

              /*
              Why might be find ourselves here?  An potential end match that was
              triggered but could not be completed.  IE, `doEndMatch` returned NO_MATCH.
              (this could be because a callback requests the match be ignored, etc)
               This causes no real harm other than stopping a few times too many.
              */

              modeBuffer += lexeme;
              return lexeme.length;
            }
            var language = getLanguage(languageName);
            if (!language) {
              error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
              throw new Error('Unknown language: "' + languageName + '"');
            }
            var md = compileLanguage(language);
            var result = '';
            /** @type {CompiledMode} */
            var top = continuation || md;
            /** @type Record<string,CompiledMode> */
            var continuations = {}; // keep continuations for sub-languages
            var emitter = new options.__emitter(options);
            processContinuations();
            var modeBuffer = '';
            var relevance = 0;
            var index = 0;
            var iterations = 0;
            var resumeScanAtSamePosition = false;
            try {
              if (!language.__emitTokens) {
                top.matcher.considerAll();
                for (;;) {
                  iterations++;
                  if (resumeScanAtSamePosition) {
                    // only regexes not matched previously will now be
                    // considered for a potential match
                    resumeScanAtSamePosition = false;
                  } else {
                    top.matcher.considerAll();
                  }
                  top.matcher.lastIndex = index;
                  var match = top.matcher.exec(codeToHighlight);
                  // console.log("match", match[0], match.rule && match.rule.begin)

                  if (!match) break;
                  var beforeMatch = codeToHighlight.substring(index, match.index);
                  var processedCount = processLexeme(beforeMatch, match);
                  index = match.index + processedCount;
                }
                processLexeme(codeToHighlight.substring(index));
              } else {
                language.__emitTokens(codeToHighlight, emitter);
              }
              emitter.finalize();
              result = emitter.toHTML();
              return {
                language: languageName,
                value: result,
                relevance: relevance,
                illegal: false,
                _emitter: emitter,
                _top: top
              };
            } catch (err) {
              if (err.message && err.message.includes('Illegal')) {
                return {
                  language: languageName,
                  value: escape(codeToHighlight),
                  illegal: true,
                  relevance: 0,
                  _illegalBy: {
                    message: err.message,
                    index: index,
                    context: codeToHighlight.slice(index - 100, index + 100),
                    mode: err.mode,
                    resultSoFar: result
                  },
                  _emitter: emitter
                };
              } else if (SAFE_MODE) {
                return {
                  language: languageName,
                  value: escape(codeToHighlight),
                  illegal: false,
                  relevance: 0,
                  errorRaised: err,
                  _emitter: emitter,
                  _top: top
                };
              } else {
                throw err;
              }
            }
          }

          /**
           * returns a valid highlight result, without actually doing any actual work,
           * auto highlight starts with this and it's possible for small snippets that
           * auto-detection may not find a better match
           * @param {string} code
           * @returns {HighlightResult}
           */
          function justTextHighlightResult(code) {
            var result = {
              value: escape(code),
              illegal: false,
              relevance: 0,
              _top: PLAINTEXT_LANGUAGE,
              _emitter: new options.__emitter(options)
            };
            result._emitter.addText(code);
            return result;
          }

          /**
          Highlighting with language detection. Accepts a string with the code to
          highlight. Returns an object with the following properties:
           - language (detected language)
          - relevance (int)
          - value (an HTML string with highlighting markup)
          - secondBest (object with the same structure for second-best heuristically
            detected language, may be absent)
             @param {string} code
            @param {Array<string>} [languageSubset]
            @returns {AutoHighlightResult}
          */
          function highlightAuto(code, languageSubset) {
            languageSubset = languageSubset || options.languages || Object.keys(languages);
            var plaintext = justTextHighlightResult(code);
            var results = languageSubset.filter(getLanguage).filter(autoDetection).map(function (name) {
              return _highlight(name, code, false);
            });
            results.unshift(plaintext); // plaintext is always an option

            var sorted = results.sort(function (a, b) {
              // sort base on relevance
              if (a.relevance !== b.relevance) return b.relevance - a.relevance;

              // always award the tie to the base language
              // ie if C++ and Arduino are tied, it's more likely to be C++
              if (a.language && b.language) {
                if (getLanguage(a.language).supersetOf === b.language) {
                  return 1;
                } else if (getLanguage(b.language).supersetOf === a.language) {
                  return -1;
                }
              }

              // otherwise say they are equal, which has the effect of sorting on
              // relevance while preserving the original ordering - which is how ties
              // have historically been settled, ie the language that comes first always
              // wins in the case of a tie
              return 0;
            });
            var _sorted = _slicedToArray(sorted, 2),
              best = _sorted[0],
              secondBest = _sorted[1];

            /** @type {AutoHighlightResult} */
            var result = best;
            result.secondBest = secondBest;
            return result;
          }

          /**
           * Builds new class name for block given the language name
           *
           * @param {HTMLElement} element
           * @param {string} [currentLang]
           * @param {string} [resultLang]
           */
          function updateClassName(element, currentLang, resultLang) {
            var language = currentLang && aliases[currentLang] || resultLang;
            element.classList.add("hljs");
            element.classList.add("language-".concat(language));
          }

          /**
           * Applies highlighting to a DOM node containing code.
           *
           * @param {HighlightedHTMLElement} element - the HTML element to highlight
          */
          function highlightElement(element) {
            /** @type HTMLElement */
            var node = null;
            var language = blockLanguage(element);
            if (shouldNotHighlight(language)) return;
            fire("before:highlightElement", {
              el: element,
              language: language
            });
            if (element.dataset.highlighted) {
              console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", element);
              return;
            }

            // we should be all text, no child nodes (unescaped HTML) - this is possibly
            // an HTML injection attack - it's likely too late if this is already in
            // production (the code has likely already done its damage by the time
            // we're seeing it)... but we yell loudly about this so that hopefully it's
            // more likely to be caught in development before making it to production
            if (element.children.length > 0) {
              if (!options.ignoreUnescapedHTML) {
                console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
                console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
                console.warn("The element with unescaped HTML:");
                console.warn(element);
              }
              if (options.throwUnescapedHTML) {
                var err = new HTMLInjectionError("One of your code blocks includes unescaped HTML.", element.innerHTML);
                throw err;
              }
            }
            node = element;
            var text = node.textContent;
            var result = language ? highlight(text, {
              language: language,
              ignoreIllegals: true
            }) : highlightAuto(text);
            element.innerHTML = result.value;
            element.dataset.highlighted = "yes";
            updateClassName(element, language, result.language);
            element.result = {
              language: result.language,
              // TODO: remove with version 11.0
              re: result.relevance,
              relevance: result.relevance
            };
            if (result.secondBest) {
              element.secondBest = {
                language: result.secondBest.language,
                relevance: result.secondBest.relevance
              };
            }
            fire("after:highlightElement", {
              el: element,
              result: result,
              text: text
            });
          }

          /**
           * Updates highlight.js global options with the passed options
           *
           * @param {Partial<HLJSOptions>} userOptions
           */
          function configure(userOptions) {
            options = inherit(options, userOptions);
          }

          // TODO: remove v12, deprecated
          var initHighlighting = function initHighlighting() {
            highlightAll();
            deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
          };

          // TODO: remove v12, deprecated
          function initHighlightingOnLoad() {
            highlightAll();
            deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
          }
          var wantsHighlight = false;

          /**
           * auto-highlights all pre>code elements on the page
           */
          function highlightAll() {
            // if we are called too early in the loading process
            if (document.readyState === "loading") {
              wantsHighlight = true;
              return;
            }
            var blocks = document.querySelectorAll(options.cssSelector);
            blocks.forEach(highlightElement);
          }
          function boot() {
            // if a highlight was requested before DOM was loaded, do now
            if (wantsHighlight) highlightAll();
          }

          // make sure we are in the browser environment
          if (typeof window !== 'undefined' && window.addEventListener) {
            window.addEventListener('DOMContentLoaded', boot, false);
          }

          /**
           * Register a language grammar module
           *
           * @param {string} languageName
           * @param {LanguageFn} languageDefinition
           */
          function registerLanguage(languageName, languageDefinition) {
            var lang = null;
            try {
              lang = languageDefinition(hljs);
            } catch (error$1) {
              error("Language definition for '{}' could not be registered.".replace("{}", languageName));
              // hard or soft error
              if (!SAFE_MODE) {
                throw error$1;
              } else {
                error(error$1);
              }
              // languages that have serious errors are replaced with essentially a
              // "plaintext" stand-in so that the code blocks will still get normal
              // css classes applied to them - and one bad language won't break the
              // entire highlighter
              lang = PLAINTEXT_LANGUAGE;
            }
            // give it a temporary name if it doesn't have one in the meta-data
            if (!lang.name) lang.name = languageName;
            languages[languageName] = lang;
            lang.rawDefinition = languageDefinition.bind(null, hljs);
            if (lang.aliases) {
              registerAliases(lang.aliases, {
                languageName: languageName
              });
            }
          }

          /**
           * Remove a language grammar module
           *
           * @param {string} languageName
           */
          function unregisterLanguage(languageName) {
            delete languages[languageName];
            for (var _i2 = 0, _Object$keys = Object.keys(aliases); _i2 < _Object$keys.length; _i2++) {
              var alias = _Object$keys[_i2];
              if (aliases[alias] === languageName) {
                delete aliases[alias];
              }
            }
          }

          /**
           * @returns {string[]} List of language internal names
           */
          function listLanguages() {
            return Object.keys(languages);
          }

          /**
           * @param {string} name - name of the language to retrieve
           * @returns {Language | undefined}
           */
          function getLanguage(name) {
            name = (name || '').toLowerCase();
            return languages[name] || languages[aliases[name]];
          }

          /**
           *
           * @param {string|string[]} aliasList - single alias or list of aliases
           * @param {{languageName: string}} opts
           */
          function registerAliases(aliasList, _ref7) {
            var languageName = _ref7.languageName;
            if (typeof aliasList === 'string') {
              aliasList = [aliasList];
            }
            aliasList.forEach(function (alias) {
              aliases[alias.toLowerCase()] = languageName;
            });
          }

          /**
           * Determines if a given language has auto-detection enabled
           * @param {string} name - name of the language
           */
          function autoDetection(name) {
            var lang = getLanguage(name);
            return lang && !lang.disableAutodetect;
          }

          /**
           * Upgrades the old highlightBlock plugins to the new
           * highlightElement API
           * @param {HLJSPlugin} plugin
           */
          function upgradePluginAPI(plugin) {
            // TODO: remove with v12
            if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
              plugin["before:highlightElement"] = function (data) {
                plugin["before:highlightBlock"](Object.assign({
                  block: data.el
                }, data));
              };
            }
            if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
              plugin["after:highlightElement"] = function (data) {
                plugin["after:highlightBlock"](Object.assign({
                  block: data.el
                }, data));
              };
            }
          }

          /**
           * @param {HLJSPlugin} plugin
           */
          function addPlugin(plugin) {
            upgradePluginAPI(plugin);
            plugins.push(plugin);
          }

          /**
           * @param {HLJSPlugin} plugin
           */
          function removePlugin(plugin) {
            var index = plugins.indexOf(plugin);
            if (index !== -1) {
              plugins.splice(index, 1);
            }
          }

          /**
           *
           * @param {PluginEvent} event
           * @param {any} args
           */
          function fire(event, args) {
            var cb = event;
            plugins.forEach(function (plugin) {
              if (plugin[cb]) {
                plugin[cb](args);
              }
            });
          }

          /**
           * DEPRECATED
           * @param {HighlightedHTMLElement} el
           */
          function deprecateHighlightBlock(el) {
            deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
            deprecated("10.7.0", "Please use highlightElement now.");
            return highlightElement(el);
          }

          /* Interface definition */
          Object.assign(hljs, {
            highlight: highlight,
            highlightAuto: highlightAuto,
            highlightAll: highlightAll,
            highlightElement: highlightElement,
            // TODO: Remove with v12 API
            highlightBlock: deprecateHighlightBlock,
            configure: configure,
            initHighlighting: initHighlighting,
            initHighlightingOnLoad: initHighlightingOnLoad,
            registerLanguage: registerLanguage,
            unregisterLanguage: unregisterLanguage,
            listLanguages: listLanguages,
            getLanguage: getLanguage,
            registerAliases: registerAliases,
            autoDetection: autoDetection,
            inherit: inherit,
            addPlugin: addPlugin,
            removePlugin: removePlugin
          });
          hljs.debugMode = function () {
            SAFE_MODE = false;
          };
          hljs.safeMode = function () {
            SAFE_MODE = true;
          };
          hljs.versionString = version;
          hljs.regex = {
            concat: concat,
            lookahead: lookahead,
            either: either,
            optional: optional,
            anyNumberOfTimes: anyNumberOfTimes
          };
          for (var key in MODES) {
            // @ts-ignore
            if (_typeof(MODES[key]) === "object") {
              // @ts-ignore
              deepFreeze(MODES[key]);
            }
          }

          // merge all the modes/regexes into our main object
          Object.assign(hljs, MODES);
          return hljs;
        };

        // Other names for the variable may break build script
        var highlight = HLJS({});

        // returns a new instance of the highlighter to be used for extensions
        // check https://github.com/wooorm/lowlight/issues/47
        highlight.newInstance = function () {
          return HLJS({});
        };
        var core = highlight;
        highlight.HighlightJS = highlight;
        highlight["default"] = highlight;
        var HighlightJS = exports("H", /*@__PURE__*/getDefaultExportFromCjs(core));

        /*
        Language: YAML
        Description: Yet Another Markdown Language
        Author: Stefan Wienert <stwienert@gmail.com>
        Contributors: Carl Baxter <carl@cbax.tech>
        Requires: ruby.js
        Website: https://yaml.org
        Category: common, config
        */
        function yaml(hljs) {
          var LITERALS = 'true false yes no null';

          // YAML spec allows non-reserved URI characters in tags.
          var URI_CHARACTERS = '[\\w#;/?:@&=+$,.~*\'()[\\]]+';

          // Define keys as starting with a word character
          // ...containing word chars, spaces, colons, forward-slashes, hyphens and periods
          // ...and ending with a colon followed immediately by a space, tab or newline.
          // The YAML spec allows for much more than this, but this covers most use-cases.
          var KEY = {
            className: 'attr',
            variants: [{
              begin: '\\w[\\w :\\/.-]*:(?=[ \t]|$)'
            }, {
              // double quoted keys
              begin: '"\\w[\\w :\\/.-]*":(?=[ \t]|$)'
            }, {
              // single quoted keys
              begin: '\'\\w[\\w :\\/.-]*\':(?=[ \t]|$)'
            }]
          };
          var TEMPLATE_VARIABLES = {
            className: 'template-variable',
            variants: [{
              // jinja templates Ansible
              begin: /\{\{/,
              end: /\}\}/
            }, {
              // Ruby i18n
              begin: /%\{/,
              end: /\}/
            }]
          };
          var STRING = {
            className: 'string',
            relevance: 0,
            variants: [{
              begin: /'/,
              end: /'/
            }, {
              begin: /"/,
              end: /"/
            }, {
              begin: /\S+/
            }],
            contains: [hljs.BACKSLASH_ESCAPE, TEMPLATE_VARIABLES]
          };

          // Strings inside of value containers (objects) can't contain braces,
          // brackets, or commas
          var CONTAINER_STRING = hljs.inherit(STRING, {
            variants: [{
              begin: /'/,
              end: /'/
            }, {
              begin: /"/,
              end: /"/
            }, {
              begin: /[^\s,{}[\]]+/
            }]
          });
          var DATE_RE = '[0-9]{4}(-[0-9][0-9]){0,2}';
          var TIME_RE = '([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?';
          var FRACTION_RE = '(\\.[0-9]*)?';
          var ZONE_RE = '([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?';
          var TIMESTAMP = {
            className: 'number',
            begin: '\\b' + DATE_RE + TIME_RE + FRACTION_RE + ZONE_RE + '\\b'
          };
          var VALUE_CONTAINER = {
            end: ',',
            endsWithParent: true,
            excludeEnd: true,
            keywords: LITERALS,
            relevance: 0
          };
          var OBJECT = {
            begin: /\{/,
            end: /\}/,
            contains: [VALUE_CONTAINER],
            illegal: '\\n',
            relevance: 0
          };
          var ARRAY = {
            begin: '\\[',
            end: '\\]',
            contains: [VALUE_CONTAINER],
            illegal: '\\n',
            relevance: 0
          };
          var MODES = [KEY, {
            className: 'meta',
            begin: '^---\\s*$',
            relevance: 10
          }, {
            // multi line string
            // Blocks start with a | or > followed by a newline
            //
            // Indentation of subsequent lines must be the same to
            // be considered part of the block
            className: 'string',
            begin: '[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*'
          }, {
            // Ruby/Rails erb
            begin: '<%[%=-]?',
            end: '[%-]?%>',
            subLanguage: 'ruby',
            excludeBegin: true,
            excludeEnd: true,
            relevance: 0
          }, {
            // named tags
            className: 'type',
            begin: '!\\w+!' + URI_CHARACTERS
          },
          // https://yaml.org/spec/1.2/spec.html#id2784064
          {
            // verbatim tags
            className: 'type',
            begin: '!<' + URI_CHARACTERS + ">"
          }, {
            // primary tags
            className: 'type',
            begin: '!' + URI_CHARACTERS
          }, {
            // secondary tags
            className: 'type',
            begin: '!!' + URI_CHARACTERS
          }, {
            // fragment id &ref
            className: 'meta',
            begin: '&' + hljs.UNDERSCORE_IDENT_RE + '$'
          }, {
            // fragment reference *ref
            className: 'meta',
            begin: '\\*' + hljs.UNDERSCORE_IDENT_RE + '$'
          }, {
            // array listing
            className: 'bullet',
            // TODO: remove |$ hack when we have proper look-ahead support
            begin: '-(?=[ ]|$)',
            relevance: 0
          }, hljs.HASH_COMMENT_MODE, {
            beginKeywords: LITERALS,
            keywords: {
              literal: LITERALS
            }
          }, TIMESTAMP,
          // numbers are any valid C-style number that
          // sit isolated from other words
          {
            className: 'number',
            begin: hljs.C_NUMBER_RE + '\\b',
            relevance: 0
          }, OBJECT, ARRAY, STRING];
          var VALUE_MODES = [].concat(MODES);
          VALUE_MODES.pop();
          VALUE_MODES.push(CONTAINER_STRING);
          VALUE_CONTAINER.contains = VALUE_MODES;
          return {
            name: 'YAML',
            case_insensitive: true,
            aliases: ['yml'],
            contains: MODES
          };
        }

        /*
        Language: JSON
        Description: JSON (JavaScript Object Notation) is a lightweight data-interchange format.
        Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
        Website: http://www.json.org
        Category: common, protocols, web
        */

        function json(hljs) {
          var ATTRIBUTE = {
            className: 'attr',
            begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
            relevance: 1.01
          };
          var PUNCTUATION = {
            match: /[{}[\],:]/,
            className: "punctuation",
            relevance: 0
          };
          var LITERALS = ["true", "false", "null"];
          // NOTE: normally we would rely on `keywords` for this but using a mode here allows us
          // - to use the very tight `illegal: \S` rule later to flag any other character
          // - as illegal indicating that despite looking like JSON we do not truly have
          // - JSON and thus improve false-positively greatly since JSON will try and claim
          // - all sorts of JSON looking stuff
          var LITERALS_MODE = {
            scope: "literal",
            beginKeywords: LITERALS.join(" ")
          };
          return {
            name: 'JSON',
            keywords: {
              literal: LITERALS
            },
            contains: [ATTRIBUTE, PUNCTUATION, hljs.QUOTE_STRING_MODE, LITERALS_MODE, hljs.C_NUMBER_MODE, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE],
            illegal: '\\S'
          };
        }

        /*
        Language: Bash
        Author: vah <vahtenberg@gmail.com>
        Contributrors: Benjamin Pannell <contact@sierrasoftworks.com>
        Website: https://www.gnu.org/software/bash/
        Category: common
        */

        /** @type LanguageFn */
        function bash(hljs) {
          var regex = hljs.regex;
          var VAR = {};
          var BRACED_VAR = {
            begin: /\$\{/,
            end: /\}/,
            contains: ["self", {
              begin: /:-/,
              contains: [VAR]
            } // default values
            ]
          };
          Object.assign(VAR, {
            className: 'variable',
            variants: [{
              begin: regex.concat(/\$[\w\d#@][\w\d_]*/, // negative look-ahead tries to avoid matching patterns that are not
              // Perl at all like $ident$, @ident@, etc.
              "(?![\\w\\d])(?![$])")
            }, BRACED_VAR]
          });
          var SUBST = {
            className: 'subst',
            begin: /\$\(/,
            end: /\)/,
            contains: [hljs.BACKSLASH_ESCAPE]
          };
          var HERE_DOC = {
            begin: /<<-?\s*(?=\w+)/,
            starts: {
              contains: [hljs.END_SAME_AS_BEGIN({
                begin: /(\w+)/,
                end: /(\w+)/,
                className: 'string'
              })]
            }
          };
          var QUOTE_STRING = {
            className: 'string',
            begin: /"/,
            end: /"/,
            contains: [hljs.BACKSLASH_ESCAPE, VAR, SUBST]
          };
          SUBST.contains.push(QUOTE_STRING);
          var ESCAPED_QUOTE = {
            match: /\\"/
          };
          var APOS_STRING = {
            className: 'string',
            begin: /'/,
            end: /'/
          };
          var ESCAPED_APOS = {
            match: /\\'/
          };
          var ARITHMETIC = {
            begin: /\$?\(\(/,
            end: /\)\)/,
            contains: [{
              begin: /\d+#[0-9a-f]+/,
              className: "number"
            }, hljs.NUMBER_MODE, VAR]
          };
          var SH_LIKE_SHELLS = ["fish", "bash", "zsh", "sh", "csh", "ksh", "tcsh", "dash", "scsh"];
          var KNOWN_SHEBANG = hljs.SHEBANG({
            binary: "(".concat(SH_LIKE_SHELLS.join("|"), ")"),
            relevance: 10
          });
          var FUNCTION = {
            className: 'function',
            begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
            returnBegin: true,
            contains: [hljs.inherit(hljs.TITLE_MODE, {
              begin: /\w[\w\d_]*/
            })],
            relevance: 0
          };
          var KEYWORDS = ["if", "then", "else", "elif", "fi", "for", "while", "until", "in", "do", "done", "case", "esac", "function", "select"];
          var LITERALS = ["true", "false"];

          // to consume paths to prevent keyword matches inside them
          var PATH_MODE = {
            match: /(\/[a-z._-]+)+/
          };

          // http://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
          var SHELL_BUILT_INS = ["break", "cd", "continue", "eval", "exec", "exit", "export", "getopts", "hash", "pwd", "readonly", "return", "shift", "test", "times", "trap", "umask", "unset"];
          var BASH_BUILT_INS = ["alias", "bind", "builtin", "caller", "command", "declare", "echo", "enable", "help", "let", "local", "logout", "mapfile", "printf", "read", "readarray", "source", "type", "typeset", "ulimit", "unalias"];
          var ZSH_BUILT_INS = ["autoload", "bg", "bindkey", "bye", "cap", "chdir", "clone", "comparguments", "compcall", "compctl", "compdescribe", "compfiles", "compgroups", "compquote", "comptags", "comptry", "compvalues", "dirs", "disable", "disown", "echotc", "echoti", "emulate", "fc", "fg", "float", "functions", "getcap", "getln", "history", "integer", "jobs", "kill", "limit", "log", "noglob", "popd", "print", "pushd", "pushln", "rehash", "sched", "setcap", "setopt", "stat", "suspend", "ttyctl", "unfunction", "unhash", "unlimit", "unsetopt", "vared", "wait", "whence", "where", "which", "zcompile", "zformat", "zftp", "zle", "zmodload", "zparseopts", "zprof", "zpty", "zregexparse", "zsocket", "zstyle", "ztcp"];
          var GNU_CORE_UTILS = ["chcon", "chgrp", "chown", "chmod", "cp", "dd", "df", "dir", "dircolors", "ln", "ls", "mkdir", "mkfifo", "mknod", "mktemp", "mv", "realpath", "rm", "rmdir", "shred", "sync", "touch", "truncate", "vdir", "b2sum", "base32", "base64", "cat", "cksum", "comm", "csplit", "cut", "expand", "fmt", "fold", "head", "join", "md5sum", "nl", "numfmt", "od", "paste", "ptx", "pr", "sha1sum", "sha224sum", "sha256sum", "sha384sum", "sha512sum", "shuf", "sort", "split", "sum", "tac", "tail", "tr", "tsort", "unexpand", "uniq", "wc", "arch", "basename", "chroot", "date", "dirname", "du", "echo", "env", "expr", "factor",
          // "false", // keyword literal already
          "groups", "hostid", "id", "link", "logname", "nice", "nohup", "nproc", "pathchk", "pinky", "printenv", "printf", "pwd", "readlink", "runcon", "seq", "sleep", "stat", "stdbuf", "stty", "tee", "test", "timeout",
          // "true", // keyword literal already
          "tty", "uname", "unlink", "uptime", "users", "who", "whoami", "yes"];
          return {
            name: 'Bash',
            aliases: ['sh'],
            keywords: {
              $pattern: /\b[a-z][a-z0-9._-]+\b/,
              keyword: KEYWORDS,
              literal: LITERALS,
              built_in: [].concat(SHELL_BUILT_INS, BASH_BUILT_INS, [
              // Shell modifiers
              "set", "shopt"], ZSH_BUILT_INS, GNU_CORE_UTILS)
            },
            contains: [KNOWN_SHEBANG,
            // to catch known shells and boost relevancy
            hljs.SHEBANG(),
            // to catch unknown shells but still highlight the shebang
            FUNCTION, ARITHMETIC, hljs.HASH_COMMENT_MODE, HERE_DOC, PATH_MODE, QUOTE_STRING, ESCAPED_QUOTE, APOS_STRING, ESCAPED_APOS, VAR]
          };
        }

        /*
        Language: Python
        Description: Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.
        Website: https://www.python.org
        Category: common
        */

        function python(hljs) {
          var regex = hljs.regex;
          var IDENT_RE = /(?:[A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037B-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFC5D\uFC64-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDF9\uFE71\uFE73\uFE77\uFE79\uFE7B\uFE7D\uFE7F-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFF9D\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037B-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u0870-\u0887\u0889-\u088E\u0898-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECE\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1715\u171F-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B4C\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA827\uA82C\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFC5D\uFC64-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDF9\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE71\uFE73\uFE77\uFE79\uFE7B\uFE7D\uFE7F-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF65-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDEFD-\uDF1C\uDF27\uDF30-\uDF50\uDF70-\uDF85\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC75\uDC7F-\uDCBA\uDCC2\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E-\uDE41\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E-\uDC61\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39\uDF40-\uDF46]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDF00-\uDF10\uDF12-\uDF3A\uDF3E-\uDF42\uDF50-\uDF59\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC40-\uDC55]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFE4\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC30-\uDC6D\uDC8F\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAE\uDEC0-\uDEF9]|\uD839[\uDCD0-\uDCF9\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]|\uDB40[\uDD00-\uDDEF])*/;
          var RESERVED_WORDS = ['and', 'as', 'assert', 'async', 'await', 'break', 'case', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'match', 'nonlocal|10', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield'];
          var BUILT_INS = ['__import__', 'abs', 'all', 'any', 'ascii', 'bin', 'bool', 'breakpoint', 'bytearray', 'bytes', 'callable', 'chr', 'classmethod', 'compile', 'complex', 'delattr', 'dict', 'dir', 'divmod', 'enumerate', 'eval', 'exec', 'filter', 'float', 'format', 'frozenset', 'getattr', 'globals', 'hasattr', 'hash', 'help', 'hex', 'id', 'input', 'int', 'isinstance', 'issubclass', 'iter', 'len', 'list', 'locals', 'map', 'max', 'memoryview', 'min', 'next', 'object', 'oct', 'open', 'ord', 'pow', 'print', 'property', 'range', 'repr', 'reversed', 'round', 'set', 'setattr', 'slice', 'sorted', 'staticmethod', 'str', 'sum', 'super', 'tuple', 'type', 'vars', 'zip'];
          var LITERALS = ['__debug__', 'Ellipsis', 'False', 'None', 'NotImplemented', 'True'];

          // https://docs.python.org/3/library/typing.html
          // TODO: Could these be supplemented by a CamelCase matcher in certain
          // contexts, leaving these remaining only for relevance hinting?
          var TYPES = ["Any", "Callable", "Coroutine", "Dict", "List", "Literal", "Generic", "Optional", "Sequence", "Set", "Tuple", "Type", "Union"];
          var KEYWORDS = {
            $pattern: /[A-Za-z]\w+|__\w+__/,
            keyword: RESERVED_WORDS,
            built_in: BUILT_INS,
            literal: LITERALS,
            type: TYPES
          };
          var PROMPT = {
            className: 'meta',
            begin: /^(>>>|\.\.\.) /
          };
          var SUBST = {
            className: 'subst',
            begin: /\{/,
            end: /\}/,
            keywords: KEYWORDS,
            illegal: /#/
          };
          var LITERAL_BRACKET = {
            begin: /\{\{/,
            relevance: 0
          };
          var STRING = {
            className: 'string',
            contains: [hljs.BACKSLASH_ESCAPE],
            variants: [{
              begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
              end: /'''/,
              contains: [hljs.BACKSLASH_ESCAPE, PROMPT],
              relevance: 10
            }, {
              begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
              end: /"""/,
              contains: [hljs.BACKSLASH_ESCAPE, PROMPT],
              relevance: 10
            }, {
              begin: /([fF][rR]|[rR][fF]|[fF])'''/,
              end: /'''/,
              contains: [hljs.BACKSLASH_ESCAPE, PROMPT, LITERAL_BRACKET, SUBST]
            }, {
              begin: /([fF][rR]|[rR][fF]|[fF])"""/,
              end: /"""/,
              contains: [hljs.BACKSLASH_ESCAPE, PROMPT, LITERAL_BRACKET, SUBST]
            }, {
              begin: /([uU]|[rR])'/,
              end: /'/,
              relevance: 10
            }, {
              begin: /([uU]|[rR])"/,
              end: /"/,
              relevance: 10
            }, {
              begin: /([bB]|[bB][rR]|[rR][bB])'/,
              end: /'/
            }, {
              begin: /([bB]|[bB][rR]|[rR][bB])"/,
              end: /"/
            }, {
              begin: /([fF][rR]|[rR][fF]|[fF])'/,
              end: /'/,
              contains: [hljs.BACKSLASH_ESCAPE, LITERAL_BRACKET, SUBST]
            }, {
              begin: /([fF][rR]|[rR][fF]|[fF])"/,
              end: /"/,
              contains: [hljs.BACKSLASH_ESCAPE, LITERAL_BRACKET, SUBST]
            }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE]
          };

          // https://docs.python.org/3.9/reference/lexical_analysis.html#numeric-literals
          var digitpart = '[0-9](_?[0-9])*';
          var pointfloat = "(\\b(".concat(digitpart, "))?\\.(").concat(digitpart, ")|\\b(").concat(digitpart, ")\\.");
          // Whitespace after a number (or any lexical token) is needed only if its absence
          // would change the tokenization
          // https://docs.python.org/3.9/reference/lexical_analysis.html#whitespace-between-tokens
          // We deviate slightly, requiring a word boundary or a keyword
          // to avoid accidentally recognizing *prefixes* (e.g., `0` in `0x41` or `08` or `0__1`)
          var lookahead = "\\b|".concat(RESERVED_WORDS.join('|'));
          var NUMBER = {
            className: 'number',
            relevance: 0,
            variants: [
            // exponentfloat, pointfloat
            // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
            // optionally imaginary
            // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
            // Note: no leading \b because floats can start with a decimal point
            // and we don't want to mishandle e.g. `fn(.5)`,
            // no trailing \b for pointfloat because it can end with a decimal point
            // and we don't want to mishandle e.g. `0..hex()`; this should be safe
            // because both MUST contain a decimal point and so cannot be confused with
            // the interior part of an identifier
            {
              begin: "(\\b(".concat(digitpart, ")|(").concat(pointfloat, "))[eE][+-]?(").concat(digitpart, ")[jJ]?(?=").concat(lookahead, ")")
            }, {
              begin: "(".concat(pointfloat, ")[jJ]?")
            },
            // decinteger, bininteger, octinteger, hexinteger
            // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
            // optionally "long" in Python 2
            // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
            // decinteger is optionally imaginary
            // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
            {
              begin: "\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=".concat(lookahead, ")")
            }, {
              begin: "\\b0[bB](_?[01])+[lL]?(?=".concat(lookahead, ")")
            }, {
              begin: "\\b0[oO](_?[0-7])+[lL]?(?=".concat(lookahead, ")")
            }, {
              begin: "\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=".concat(lookahead, ")")
            },
            // imagnumber (digitpart-based)
            // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
            {
              begin: "\\b(".concat(digitpart, ")[jJ](?=").concat(lookahead, ")")
            }]
          };
          var COMMENT_TYPE = {
            className: "comment",
            begin: regex.lookahead(/# type:/),
            end: /$/,
            keywords: KEYWORDS,
            contains: [{
              // prevent keywords from coloring `type`
              begin: /# type:/
            },
            // comment within a datatype comment includes no keywords
            {
              begin: /#/,
              end: /\b\B/,
              endsWithParent: true
            }]
          };
          var PARAMS = {
            className: 'params',
            variants: [
            // Exclude params in functions without params
            {
              className: "",
              begin: /\(\s*\)/,
              skip: true
            }, {
              begin: /\(/,
              end: /\)/,
              excludeBegin: true,
              excludeEnd: true,
              keywords: KEYWORDS,
              contains: ['self', PROMPT, NUMBER, STRING, hljs.HASH_COMMENT_MODE]
            }]
          };
          SUBST.contains = [STRING, NUMBER, PROMPT];
          return {
            name: 'Python',
            aliases: ['py', 'gyp', 'ipython'],
            unicodeRegex: true,
            keywords: KEYWORDS,
            illegal: /(<\/|\?)|=>/,
            contains: [PROMPT, NUMBER, {
              // very common convention
              begin: /\bself\b/
            }, {
              // eat "if" prior to string so that it won't accidentally be
              // labeled as an f-string
              beginKeywords: "if",
              relevance: 0
            }, STRING, COMMENT_TYPE, hljs.HASH_COMMENT_MODE, {
              match: [/\bdef/, /\s+/, IDENT_RE],
              scope: {
                1: "keyword",
                3: "title.function"
              },
              contains: [PARAMS]
            }, {
              variants: [{
                match: [/\bclass/, /\s+/, IDENT_RE, /\s*/, /\(\s*/, IDENT_RE, /\s*\)/]
              }, {
                match: [/\bclass/, /\s+/, IDENT_RE]
              }],
              scope: {
                1: "keyword",
                3: "title.class",
                6: "title.class.inherited"
              }
            }, {
              className: 'meta',
              begin: /^[\t ]*@/,
              end: /(?=#)|$/,
              contains: [NUMBER, PARAMS, STRING]
            }]
          };
        }

        /*
        Language: Markdown
        Requires: xml.js
        Author: John Crepezzi <john.crepezzi@gmail.com>
        Website: https://daringfireball.net/projects/markdown/
        Category: common, markup
        */

        function markdown(hljs) {
          var regex = hljs.regex;
          var INLINE_HTML = {
            begin: /<\/?[A-Za-z_]/,
            end: '>',
            subLanguage: 'xml',
            relevance: 0
          };
          var HORIZONTAL_RULE = {
            begin: '^[-\\*]{3,}',
            end: '$'
          };
          var CODE = {
            className: 'code',
            variants: [
            // TODO: fix to allow these to work with sublanguage also
            {
              begin: '(`{3,})[^`](.|\\n)*?\\1`*[ ]*'
            }, {
              begin: '(~{3,})[^~](.|\\n)*?\\1~*[ ]*'
            },
            // needed to allow markdown as a sublanguage to work
            {
              begin: '```',
              end: '```+[ ]*$'
            }, {
              begin: '~~~',
              end: '~~~+[ ]*$'
            }, {
              begin: '`.+?`'
            }, {
              begin: '(?=^( {4}|\\t))',
              // use contains to gobble up multiple lines to allow the block to be whatever size
              // but only have a single open/close tag vs one per line
              contains: [{
                begin: '^( {4}|\\t)',
                end: '(\\n)$'
              }],
              relevance: 0
            }]
          };
          var LIST = {
            className: 'bullet',
            begin: '^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)',
            end: '\\s+',
            excludeEnd: true
          };
          var LINK_REFERENCE = {
            begin: /^\[[^\n]+\]:/,
            returnBegin: true,
            contains: [{
              className: 'symbol',
              begin: /\[/,
              end: /\]/,
              excludeBegin: true,
              excludeEnd: true
            }, {
              className: 'link',
              begin: /:\s*/,
              end: /$/,
              excludeBegin: true
            }]
          };
          var URL_SCHEME = /[A-Za-z][A-Za-z0-9+.-]*/;
          var LINK = {
            variants: [
            // too much like nested array access in so many languages
            // to have any real relevance
            {
              begin: /\[.+?\]\[.*?\]/,
              relevance: 0
            },
            // popular internet URLs
            {
              begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
              relevance: 2
            }, {
              begin: regex.concat(/\[.+?\]\(/, URL_SCHEME, /:\/\/.*?\)/),
              relevance: 2
            },
            // relative urls
            {
              begin: /\[.+?\]\([./?&#].*?\)/,
              relevance: 1
            },
            // whatever else, lower relevance (might not be a link at all)
            {
              begin: /\[.*?\]\(.*?\)/,
              relevance: 0
            }],
            returnBegin: true,
            contains: [{
              // empty strings for alt or link text
              match: /\[(?=\])/
            }, {
              className: 'string',
              relevance: 0,
              begin: '\\[',
              end: '\\]',
              excludeBegin: true,
              returnEnd: true
            }, {
              className: 'link',
              relevance: 0,
              begin: '\\]\\(',
              end: '\\)',
              excludeBegin: true,
              excludeEnd: true
            }, {
              className: 'symbol',
              relevance: 0,
              begin: '\\]\\[',
              end: '\\]',
              excludeBegin: true,
              excludeEnd: true
            }]
          };
          var BOLD = {
            className: 'strong',
            contains: [],
            // defined later
            variants: [{
              begin: /_{2}(?!\s)/,
              end: /_{2}/
            }, {
              begin: /\*{2}(?!\s)/,
              end: /\*{2}/
            }]
          };
          var ITALIC = {
            className: 'emphasis',
            contains: [],
            // defined later
            variants: [{
              begin: /\*(?![*\s])/,
              end: /\*/
            }, {
              begin: /_(?![_\s])/,
              end: /_/,
              relevance: 0
            }]
          };

          // 3 level deep nesting is not allowed because it would create confusion
          // in cases like `***testing***` because where we don't know if the last
          // `***` is starting a new bold/italic or finishing the last one
          var BOLD_WITHOUT_ITALIC = hljs.inherit(BOLD, {
            contains: []
          });
          var ITALIC_WITHOUT_BOLD = hljs.inherit(ITALIC, {
            contains: []
          });
          BOLD.contains.push(ITALIC_WITHOUT_BOLD);
          ITALIC.contains.push(BOLD_WITHOUT_ITALIC);
          var CONTAINABLE = [INLINE_HTML, LINK];
          [BOLD, ITALIC, BOLD_WITHOUT_ITALIC, ITALIC_WITHOUT_BOLD].forEach(function (m) {
            m.contains = m.contains.concat(CONTAINABLE);
          });
          CONTAINABLE = CONTAINABLE.concat(BOLD, ITALIC);
          var HEADER = {
            className: 'section',
            variants: [{
              begin: '^#{1,6}',
              end: '$',
              contains: CONTAINABLE
            }, {
              begin: '(?=^.+?\\n[=-]{2,}$)',
              contains: [{
                begin: '^[=-]*$'
              }, {
                begin: '^',
                end: "\\n",
                contains: CONTAINABLE
              }]
            }]
          };
          var BLOCKQUOTE = {
            className: 'quote',
            begin: '^>\\s+',
            contains: CONTAINABLE,
            end: '$'
          };
          return {
            name: 'Markdown',
            aliases: ['md', 'mkdown', 'mkd'],
            contains: [HEADER, INLINE_HTML, LIST, BOLD, ITALIC, BLOCKQUOTE, CODE, HORIZONTAL_RULE, LINK, LINK_REFERENCE]
          };
        }

        /*
        Language: TOML, also INI
        Description: TOML aims to be a minimal configuration file format that's easy to read due to obvious semantics.
        Contributors: Guillaume Gomez <guillaume1.gomez@gmail.com>
        Category: common, config
        Website: https://github.com/toml-lang/toml
        */

        function ini(hljs) {
          var regex = hljs.regex;
          var NUMBERS = {
            className: 'number',
            relevance: 0,
            variants: [{
              begin: /([+-]+)?[\d]+_[\d_]+/
            }, {
              begin: hljs.NUMBER_RE
            }]
          };
          var COMMENTS = hljs.COMMENT();
          COMMENTS.variants = [{
            begin: /;/,
            end: /$/
          }, {
            begin: /#/,
            end: /$/
          }];
          var VARIABLES = {
            className: 'variable',
            variants: [{
              begin: /\$[\w\d"][\w\d_]*/
            }, {
              begin: /\$\{(.*?)\}/
            }]
          };
          var LITERALS = {
            className: 'literal',
            begin: /\bon|off|true|false|yes|no\b/
          };
          var STRINGS = {
            className: "string",
            contains: [hljs.BACKSLASH_ESCAPE],
            variants: [{
              begin: "'''",
              end: "'''",
              relevance: 10
            }, {
              begin: '"""',
              end: '"""',
              relevance: 10
            }, {
              begin: '"',
              end: '"'
            }, {
              begin: "'",
              end: "'"
            }]
          };
          var ARRAY = {
            begin: /\[/,
            end: /\]/,
            contains: [COMMENTS, LITERALS, VARIABLES, STRINGS, NUMBERS, 'self'],
            relevance: 0
          };
          var BARE_KEY = /[A-Za-z0-9_-]+/;
          var QUOTED_KEY_DOUBLE_QUOTE = /"(\\"|[^"])*"/;
          var QUOTED_KEY_SINGLE_QUOTE = /'[^']*'/;
          var ANY_KEY = regex.either(BARE_KEY, QUOTED_KEY_DOUBLE_QUOTE, QUOTED_KEY_SINGLE_QUOTE);
          var DOTTED_KEY = regex.concat(ANY_KEY, '(\\s*\\.\\s*', ANY_KEY, ')*', regex.lookahead(/\s*=\s*[^#\s]/));
          return {
            name: 'TOML, also INI',
            aliases: ['toml'],
            case_insensitive: true,
            illegal: /\S/,
            contains: [COMMENTS, {
              className: 'section',
              begin: /\[+/,
              end: /\]+/
            }, {
              begin: DOTTED_KEY,
              className: 'attr',
              starts: {
                end: /$/,
                contains: [COMMENTS, ARRAY, LITERALS, VARIABLES, STRINGS, NUMBERS]
              }
            }]
          };
        }

        /*
        Language: Nginx config
        Author: Peter Leonov <gojpeg@yandex.ru>
        Contributors: Ivan Sagalaev <maniac@softwaremaniacs.org>
        Category: config, web
        Website: https://www.nginx.com
        */

        /** @type LanguageFn */
        function nginx(hljs) {
          var regex = hljs.regex;
          var VAR = {
            className: 'variable',
            variants: [{
              begin: /\$\d+/
            }, {
              begin: /\$\{\w+\}/
            }, {
              begin: regex.concat(/[$@]/, hljs.UNDERSCORE_IDENT_RE)
            }]
          };
          var LITERALS = ["on", "off", "yes", "no", "true", "false", "none", "blocked", "debug", "info", "notice", "warn", "error", "crit", "select", "break", "last", "permanent", "redirect", "kqueue", "rtsig", "epoll", "poll", "/dev/poll"];
          var DEFAULT = {
            endsWithParent: true,
            keywords: {
              $pattern: /[a-z_]{2,}|\/dev\/poll/,
              literal: LITERALS
            },
            relevance: 0,
            illegal: '=>',
            contains: [hljs.HASH_COMMENT_MODE, {
              className: 'string',
              contains: [hljs.BACKSLASH_ESCAPE, VAR],
              variants: [{
                begin: /"/,
                end: /"/
              }, {
                begin: /'/,
                end: /'/
              }]
            },
            // this swallows entire URLs to avoid detecting numbers within
            {
              begin: '([a-z]+):/',
              end: '\\s',
              endsWithParent: true,
              excludeEnd: true,
              contains: [VAR]
            }, {
              className: 'regexp',
              contains: [hljs.BACKSLASH_ESCAPE, VAR],
              variants: [{
                begin: "\\s\\^",
                end: "\\s|\\{|;",
                returnEnd: true
              },
              // regexp locations (~, ~*)
              {
                begin: "~\\*?\\s+",
                end: "\\s|\\{|;",
                returnEnd: true
              },
              // *.example.com
              {
                begin: "\\*(\\.[a-z\\-]+)+"
              },
              // sub.example.*
              {
                begin: "([a-z\\-]+\\.)+\\*"
              }]
            },
            // IP
            {
              className: 'number',
              begin: '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b'
            },
            // units
            {
              className: 'number',
              begin: '\\b\\d+[kKmMgGdshdwy]?\\b',
              relevance: 0
            }, VAR]
          };
          return {
            name: 'Nginx config',
            aliases: ['nginxconf'],
            contains: [hljs.HASH_COMMENT_MODE, {
              beginKeywords: "upstream location",
              end: /;|\{/,
              contains: DEFAULT.contains,
              keywords: {
                section: "upstream location"
              }
            }, {
              className: 'section',
              begin: regex.concat(hljs.UNDERSCORE_IDENT_RE + regex.lookahead(/\s+\{/)),
              relevance: 0
            }, {
              begin: regex.lookahead(hljs.UNDERSCORE_IDENT_RE + '\\s'),
              end: ';|\\{',
              contains: [{
                className: 'attribute',
                begin: hljs.UNDERSCORE_IDENT_RE,
                starts: DEFAULT
              }],
              relevance: 0
            }],
            illegal: '[^\\s\\}\\{]'
          };
        }

        /*
        Language: Plain text
        Author: Egor Rogov (e.rogov@postgrespro.ru)
        Description: Plain text without any highlighting.
        Category: common
        */

        function plaintext(hljs) {
          return {
            name: 'Plain text',
            aliases: ['text', 'txt'],
            disableAutodetect: true
          };
        }

        /*
        Language: Lisp
        Description: Generic lisp syntax
        Author: Vasily Polovnyov <vast@whiteants.net>
        Category: lisp
        */

        function lisp(hljs) {
          var LISP_IDENT_RE = '[a-zA-Z_\\-+\\*\\/<=>&#][a-zA-Z0-9_\\-+*\\/<=>&#!]*';
          var MEC_RE = '\\|[^]*?\\|';
          var LISP_SIMPLE_NUMBER_RE = '(-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|-)?\\d+)?';
          var LITERAL = {
            className: 'literal',
            begin: '\\b(t{1}|nil)\\b'
          };
          var NUMBER = {
            className: 'number',
            variants: [{
              begin: LISP_SIMPLE_NUMBER_RE,
              relevance: 0
            }, {
              begin: '#(b|B)[0-1]+(/[0-1]+)?'
            }, {
              begin: '#(o|O)[0-7]+(/[0-7]+)?'
            }, {
              begin: '#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?'
            }, {
              begin: '#(c|C)\\(' + LISP_SIMPLE_NUMBER_RE + ' +' + LISP_SIMPLE_NUMBER_RE,
              end: '\\)'
            }]
          };
          var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {
            illegal: null
          });
          var COMMENT = hljs.COMMENT(';', '$', {
            relevance: 0
          });
          var VARIABLE = {
            begin: '\\*',
            end: '\\*'
          };
          var KEYWORD = {
            className: 'symbol',
            begin: '[:&]' + LISP_IDENT_RE
          };
          var IDENT = {
            begin: LISP_IDENT_RE,
            relevance: 0
          };
          var MEC = {
            begin: MEC_RE
          };
          var QUOTED_LIST = {
            begin: '\\(',
            end: '\\)',
            contains: ['self', LITERAL, STRING, NUMBER, IDENT]
          };
          var QUOTED = {
            contains: [NUMBER, STRING, VARIABLE, KEYWORD, QUOTED_LIST, IDENT],
            variants: [{
              begin: '[\'`]\\(',
              end: '\\)'
            }, {
              begin: '\\(quote ',
              end: '\\)',
              keywords: {
                name: 'quote'
              }
            }, {
              begin: '\'' + MEC_RE
            }]
          };
          var QUOTED_ATOM = {
            variants: [{
              begin: '\'' + LISP_IDENT_RE
            }, {
              begin: '#\'' + LISP_IDENT_RE + '(::' + LISP_IDENT_RE + ')*'
            }]
          };
          var LIST = {
            begin: '\\(\\s*',
            end: '\\)'
          };
          var BODY = {
            endsWithParent: true,
            relevance: 0
          };
          LIST.contains = [{
            className: 'name',
            variants: [{
              begin: LISP_IDENT_RE,
              relevance: 0
            }, {
              begin: MEC_RE
            }]
          }, BODY];
          BODY.contains = [QUOTED, QUOTED_ATOM, LIST, LITERAL, NUMBER, STRING, COMMENT, VARIABLE, KEYWORD, MEC, IDENT];
          return {
            name: 'Lisp',
            illegal: /\S/,
            contains: [NUMBER, hljs.SHEBANG(), LITERAL, STRING, COMMENT, QUOTED, QUOTED_ATOM, LIST, IDENT]
          };
        }

        /*
        Language: HTML, XML
        Website: https://www.w3.org/XML/
        Category: common, web
        Audit: 2020
        */

        /** @type LanguageFn */
        function xml(hljs) {
          var regex = hljs.regex;
          // XML names can have the following additional letters: https://www.w3.org/TR/xml/#NT-NameChar
          // OTHER_NAME_CHARS = /[:\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]/;
          // Element names start with NAME_START_CHAR followed by optional other Unicode letters, ASCII digits, hyphens, underscores, and periods
          // const TAG_NAME_RE = regex.concat(/[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, regex.optional(/[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*:/), /[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*/);;
          // const XML_IDENT_RE = /[A-Z_a-z:\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]+/;
          // const TAG_NAME_RE = regex.concat(/[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, regex.optional(/[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*:/), /[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*/);
          // however, to cater for performance and more Unicode support rely simply on the Unicode letter class
          var TAG_NAME_RE = regex.concat(/(?:[A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])/, regex.optional(/(?:[\x2D\.0-9A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*:/), /(?:[\x2D\.0-9A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*/);
          var XML_IDENT_RE = /(?:[\x2D\.0-:A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])+/;
          var XML_ENTITIES = {
            className: 'symbol',
            begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
          };
          var XML_META_KEYWORDS = {
            begin: /\s/,
            contains: [{
              className: 'keyword',
              begin: /#?[a-z_][a-z1-9_-]+/,
              illegal: /\n/
            }]
          };
          var XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {
            begin: /\(/,
            end: /\)/
          });
          var APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, {
            className: 'string'
          });
          var QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, {
            className: 'string'
          });
          var TAG_INTERNALS = {
            endsWithParent: true,
            illegal: /</,
            relevance: 0,
            contains: [{
              className: 'attr',
              begin: XML_IDENT_RE,
              relevance: 0
            }, {
              begin: /=\s*/,
              relevance: 0,
              contains: [{
                className: 'string',
                endsParent: true,
                variants: [{
                  begin: /"/,
                  end: /"/,
                  contains: [XML_ENTITIES]
                }, {
                  begin: /'/,
                  end: /'/,
                  contains: [XML_ENTITIES]
                }, {
                  begin: /[^\s"'=<>`]+/
                }]
              }]
            }]
          };
          return {
            name: 'HTML, XML',
            aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist', 'wsf', 'svg'],
            case_insensitive: true,
            unicodeRegex: true,
            contains: [{
              className: 'meta',
              begin: /<![a-z]/,
              end: />/,
              relevance: 10,
              contains: [XML_META_KEYWORDS, QUOTE_META_STRING_MODE, APOS_META_STRING_MODE, XML_META_PAR_KEYWORDS, {
                begin: /\[/,
                end: /\]/,
                contains: [{
                  className: 'meta',
                  begin: /<![a-z]/,
                  end: />/,
                  contains: [XML_META_KEYWORDS, XML_META_PAR_KEYWORDS, QUOTE_META_STRING_MODE, APOS_META_STRING_MODE]
                }]
              }]
            }, hljs.COMMENT(/<!--/, /-->/, {
              relevance: 10
            }), {
              begin: /<!\[CDATA\[/,
              end: /\]\]>/,
              relevance: 10
            }, XML_ENTITIES,
            // xml processing instructions
            {
              className: 'meta',
              end: /\?>/,
              variants: [{
                begin: /<\?xml/,
                relevance: 10,
                contains: [QUOTE_META_STRING_MODE]
              }, {
                begin: /<\?[a-z][a-z0-9]+/
              }]
            }, {
              className: 'tag',
              /*
              The lookahead pattern (?=...) ensures that 'begin' only matches
              '<style' as a single word, followed by a whitespace or an
              ending bracket.
              */
              begin: /<style(?=\s|>)/,
              end: />/,
              keywords: {
                name: 'style'
              },
              contains: [TAG_INTERNALS],
              starts: {
                end: /<\/style>/,
                returnEnd: true,
                subLanguage: ['css', 'xml']
              }
            }, {
              className: 'tag',
              // See the comment in the <style tag about the lookahead pattern
              begin: /<script(?=\s|>)/,
              end: />/,
              keywords: {
                name: 'script'
              },
              contains: [TAG_INTERNALS],
              starts: {
                end: /<\/script>/,
                returnEnd: true,
                subLanguage: ['javascript', 'handlebars', 'xml']
              }
            },
            // we need this for now for jSX
            {
              className: 'tag',
              begin: /<>|<\/>/
            },
            // open tag
            {
              className: 'tag',
              begin: regex.concat(/</, regex.lookahead(regex.concat(TAG_NAME_RE,
              // <tag/>
              // <tag>
              // <tag ...
              regex.either(/\/>/, />/, /\s/)))),
              end: /\/?>/,
              contains: [{
                className: 'name',
                begin: TAG_NAME_RE,
                relevance: 0,
                starts: TAG_INTERNALS
              }]
            },
            // close tag
            {
              className: 'tag',
              begin: regex.concat(/<\//, regex.lookahead(regex.concat(TAG_NAME_RE, />/))),
              contains: [{
                className: 'name',
                begin: TAG_NAME_RE,
                relevance: 0
              }, {
                begin: />/,
                relevance: 0,
                endsParent: true
              }]
            }]
          };
        }

        /*
        Language: Julia
        Description: Julia is a high-level, high-performance, dynamic programming language.
        Author: Kenta Sato <bicycle1885@gmail.com>
        Contributors: Alex Arslan <ararslan@comcast.net>, Fredrik Ekre <ekrefredrik@gmail.com>
        Website: https://julialang.org
        */

        function julia(hljs) {
          // Since there are numerous special names in Julia, it is too much trouble
          // to maintain them by hand. Hence these names (i.e. keywords, literals and
          // built-ins) are automatically generated from Julia 1.5.2 itself through
          // the following scripts for each.

          // ref: https://docs.julialang.org/en/v1/manual/variables/#Allowed-Variable-Names
          var VARIABLE_NAME_RE = "[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*";

          // # keyword generator, multi-word keywords handled manually below (Julia 1.5.2)
          // import REPL.REPLCompletions
          // res = String["in", "isa", "where"]
          // for kw in collect(x.keyword for x in REPLCompletions.complete_keyword(""))
          //     if !(contains(kw, " ") || kw == "struct")
          //         push!(res, kw)
          //     end
          // end
          // sort!(unique!(res))
          // foreach(x -> println("\'", x, "\',"), res)
          var KEYWORD_LIST = ['baremodule', 'begin', 'break', 'catch', 'ccall', 'const', 'continue', 'do', 'else', 'elseif', 'end', 'export', 'false', 'finally', 'for', 'function', 'global', 'if', 'import', 'in', 'isa', 'let', 'local', 'macro', 'module', 'quote', 'return', 'true', 'try', 'using', 'where', 'while'];

          // # literal generator (Julia 1.5.2)
          // import REPL.REPLCompletions
          // res = String["true", "false"]
          // for compl in filter!(x -> isa(x, REPLCompletions.ModuleCompletion) && (x.parent === Base || x.parent === Core),
          //                     REPLCompletions.completions("", 0)[1])
          //     try
          //         v = eval(Symbol(compl.mod))
          //         if !(v isa Function || v isa Type || v isa TypeVar || v isa Module || v isa Colon)
          //             push!(res, compl.mod)
          //         end
          //     catch e
          //     end
          // end
          // sort!(unique!(res))
          // foreach(x -> println("\'", x, "\',"), res)
          var LITERAL_LIST = ['ARGS', 'C_NULL', 'DEPOT_PATH', 'ENDIAN_BOM', 'ENV', 'Inf', 'Inf16', 'Inf32', 'Inf64', 'InsertionSort', 'LOAD_PATH', 'MergeSort', 'NaN', 'NaN16', 'NaN32', 'NaN64', 'PROGRAM_FILE', 'QuickSort', 'RoundDown', 'RoundFromZero', 'RoundNearest', 'RoundNearestTiesAway', 'RoundNearestTiesUp', 'RoundToZero', 'RoundUp', 'VERSION|0', 'devnull', 'false', 'im', 'missing', 'nothing', 'pi', 'stderr', 'stdin', 'stdout', 'true', 'undef', 'π', 'ℯ'];

          // # built_in generator (Julia 1.5.2)
          // import REPL.REPLCompletions
          // res = String[]
          // for compl in filter!(x -> isa(x, REPLCompletions.ModuleCompletion) && (x.parent === Base || x.parent === Core),
          //                     REPLCompletions.completions("", 0)[1])
          //     try
          //         v = eval(Symbol(compl.mod))
          //         if (v isa Type || v isa TypeVar) && (compl.mod != "=>")
          //             push!(res, compl.mod)
          //         end
          //     catch e
          //     end
          // end
          // sort!(unique!(res))
          // foreach(x -> println("\'", x, "\',"), res)
          var BUILT_IN_LIST = ['AbstractArray', 'AbstractChannel', 'AbstractChar', 'AbstractDict', 'AbstractDisplay', 'AbstractFloat', 'AbstractIrrational', 'AbstractMatrix', 'AbstractRange', 'AbstractSet', 'AbstractString', 'AbstractUnitRange', 'AbstractVecOrMat', 'AbstractVector', 'Any', 'ArgumentError', 'Array', 'AssertionError', 'BigFloat', 'BigInt', 'BitArray', 'BitMatrix', 'BitSet', 'BitVector', 'Bool', 'BoundsError', 'CapturedException', 'CartesianIndex', 'CartesianIndices', 'Cchar', 'Cdouble', 'Cfloat', 'Channel', 'Char', 'Cint', 'Cintmax_t', 'Clong', 'Clonglong', 'Cmd', 'Colon', 'Complex', 'ComplexF16', 'ComplexF32', 'ComplexF64', 'CompositeException', 'Condition', 'Cptrdiff_t', 'Cshort', 'Csize_t', 'Cssize_t', 'Cstring', 'Cuchar', 'Cuint', 'Cuintmax_t', 'Culong', 'Culonglong', 'Cushort', 'Cvoid', 'Cwchar_t', 'Cwstring', 'DataType', 'DenseArray', 'DenseMatrix', 'DenseVecOrMat', 'DenseVector', 'Dict', 'DimensionMismatch', 'Dims', 'DivideError', 'DomainError', 'EOFError', 'Enum', 'ErrorException', 'Exception', 'ExponentialBackOff', 'Expr', 'Float16', 'Float32', 'Float64', 'Function', 'GlobalRef', 'HTML', 'IO', 'IOBuffer', 'IOContext', 'IOStream', 'IdDict', 'IndexCartesian', 'IndexLinear', 'IndexStyle', 'InexactError', 'InitError', 'Int', 'Int128', 'Int16', 'Int32', 'Int64', 'Int8', 'Integer', 'InterruptException', 'InvalidStateException', 'Irrational', 'KeyError', 'LinRange', 'LineNumberNode', 'LinearIndices', 'LoadError', 'MIME', 'Matrix', 'Method', 'MethodError', 'Missing', 'MissingException', 'Module', 'NTuple', 'NamedTuple', 'Nothing', 'Number', 'OrdinalRange', 'OutOfMemoryError', 'OverflowError', 'Pair', 'PartialQuickSort', 'PermutedDimsArray', 'Pipe', 'ProcessFailedException', 'Ptr', 'QuoteNode', 'Rational', 'RawFD', 'ReadOnlyMemoryError', 'Real', 'ReentrantLock', 'Ref', 'Regex', 'RegexMatch', 'RoundingMode', 'SegmentationFault', 'Set', 'Signed', 'Some', 'StackOverflowError', 'StepRange', 'StepRangeLen', 'StridedArray', 'StridedMatrix', 'StridedVecOrMat', 'StridedVector', 'String', 'StringIndexError', 'SubArray', 'SubString', 'SubstitutionString', 'Symbol', 'SystemError', 'Task', 'TaskFailedException', 'Text', 'TextDisplay', 'Timer', 'Tuple', 'Type', 'TypeError', 'TypeVar', 'UInt', 'UInt128', 'UInt16', 'UInt32', 'UInt64', 'UInt8', 'UndefInitializer', 'UndefKeywordError', 'UndefRefError', 'UndefVarError', 'Union', 'UnionAll', 'UnitRange', 'Unsigned', 'Val', 'Vararg', 'VecElement', 'VecOrMat', 'Vector', 'VersionNumber', 'WeakKeyDict', 'WeakRef'];
          var KEYWORDS = {
            $pattern: VARIABLE_NAME_RE,
            keyword: KEYWORD_LIST,
            literal: LITERAL_LIST,
            built_in: BUILT_IN_LIST
          };

          // placeholder for recursive self-reference
          var DEFAULT = {
            keywords: KEYWORDS,
            illegal: /<\//
          };

          // ref: https://docs.julialang.org/en/v1/manual/integers-and-floating-point-numbers/
          var NUMBER = {
            className: 'number',
            // supported numeric literals:
            //  * binary literal (e.g. 0x10)
            //  * octal literal (e.g. 0o76543210)
            //  * hexadecimal literal (e.g. 0xfedcba876543210)
            //  * hexadecimal floating point literal (e.g. 0x1p0, 0x1.2p2)
            //  * decimal literal (e.g. 9876543210, 100_000_000)
            //  * floating pointe literal (e.g. 1.2, 1.2f, .2, 1., 1.2e10, 1.2e-10)
            begin: /(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,
            relevance: 0
          };
          var CHAR = {
            className: 'string',
            begin: /'(.|\\[xXuU][a-zA-Z0-9]+)'/
          };
          var INTERPOLATION = {
            className: 'subst',
            begin: /\$\(/,
            end: /\)/,
            keywords: KEYWORDS
          };
          var INTERPOLATED_VARIABLE = {
            className: 'variable',
            begin: '\\$' + VARIABLE_NAME_RE
          };

          // TODO: neatly escape normal code in string literal
          var STRING = {
            className: 'string',
            contains: [hljs.BACKSLASH_ESCAPE, INTERPOLATION, INTERPOLATED_VARIABLE],
            variants: [{
              begin: /\w*"""/,
              end: /"""\w*/,
              relevance: 10
            }, {
              begin: /\w*"/,
              end: /"\w*/
            }]
          };
          var COMMAND = {
            className: 'string',
            contains: [hljs.BACKSLASH_ESCAPE, INTERPOLATION, INTERPOLATED_VARIABLE],
            begin: '`',
            end: '`'
          };
          var MACROCALL = {
            className: 'meta',
            begin: '@' + VARIABLE_NAME_RE
          };
          var COMMENT = {
            className: 'comment',
            variants: [{
              begin: '#=',
              end: '=#',
              relevance: 10
            }, {
              begin: '#',
              end: '$'
            }]
          };
          DEFAULT.name = 'Julia';
          DEFAULT.contains = [NUMBER, CHAR, STRING, COMMAND, MACROCALL, COMMENT, hljs.HASH_COMMENT_MODE, {
            className: 'keyword',
            begin: '\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b'
          }, {
            begin: /<:/
          } // relevance booster
          ];
          INTERPOLATION.contains = DEFAULT.contains;
          return DEFAULT;
        }

        /*
        Language: R
        Description: R is a free software environment for statistical computing and graphics.
        Author: Joe Cheng <joe@rstudio.org>
        Contributors: Konrad Rudolph <konrad.rudolph@gmail.com>
        Website: https://www.r-project.org
        Category: common,scientific
        */

        /** @type LanguageFn */
        function r(hljs) {
          var regex = hljs.regex;
          // Identifiers in R cannot start with `_`, but they can start with `.` if it
          // is not immediately followed by a digit.
          // R also supports quoted identifiers, which are near-arbitrary sequences
          // delimited by backticks (`…`), which may contain escape sequences. These are
          // handled in a separate mode. See `test/markup/r/names.txt` for examples.
          // FIXME: Support Unicode identifiers.
          var IDENT_RE = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/;
          var NUMBER_TYPES_RE = regex.either(
          // Special case: only hexadecimal binary powers can contain fractions
          /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,
          // Hexadecimal numbers without fraction and optional binary power
          /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,
          // Decimal numbers
          /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/);
          var OPERATORS_RE = /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/;
          var PUNCTUATION_RE = regex.either(/[()]/, /[{}]/, /\[\[/, /[[\]]/, /\\/, /,/);
          return {
            name: 'R',
            keywords: {
              $pattern: IDENT_RE,
              keyword: 'function if in break next repeat else for while',
              literal: 'NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 ' + 'NA_character_|10 NA_complex_|10',
              built_in:
              // Builtin constants
              'LETTERS letters month.abb month.name pi T F '
              // Primitive functions
              // These are all the functions in `base` that are implemented as a
              // `.Primitive`, minus those functions that are also keywords.
              + 'abs acos acosh all any anyNA Arg as.call as.character ' + 'as.complex as.double as.environment as.integer as.logical ' + 'as.null.default as.numeric as.raw asin asinh atan atanh attr ' + 'attributes baseenv browser c call ceiling class Conj cos cosh ' + 'cospi cummax cummin cumprod cumsum digamma dim dimnames ' + 'emptyenv exp expression floor forceAndCall gamma gc.time ' + 'globalenv Im interactive invisible is.array is.atomic is.call ' + 'is.character is.complex is.double is.environment is.expression ' + 'is.finite is.function is.infinite is.integer is.language ' + 'is.list is.logical is.matrix is.na is.name is.nan is.null ' + 'is.numeric is.object is.pairlist is.raw is.recursive is.single ' + 'is.symbol lazyLoadDBfetch length lgamma list log max min ' + 'missing Mod names nargs nzchar oldClass on.exit pos.to.env ' + 'proc.time prod quote range Re rep retracemem return round ' + 'seq_along seq_len seq.int sign signif sin sinh sinpi sqrt ' + 'standardGeneric substitute sum switch tan tanh tanpi tracemem ' + 'trigamma trunc unclass untracemem UseMethod xtfrm'
            },
            contains: [
            // Roxygen comments
            hljs.COMMENT(/#'/, /$/, {
              contains: [{
                // Handle `@examples` separately to cause all subsequent code
                // until the next `@`-tag on its own line to be kept as-is,
                // preventing highlighting. This code is example R code, so nested
                // doctags shouldn’t be treated as such. See
                // `test/markup/r/roxygen.txt` for an example.
                scope: 'doctag',
                match: /@examples/,
                starts: {
                  end: regex.lookahead(regex.either(
                  // end if another doc comment
                  /\n^#'\s*(?=@[a-zA-Z]+)/,
                  // or a line with no comment
                  /\n^(?!#')/)),
                  endsParent: true
                }
              }, {
                // Handle `@param` to highlight the parameter name following
                // after.
                scope: 'doctag',
                begin: '@param',
                end: /$/,
                contains: [{
                  scope: 'variable',
                  variants: [{
                    match: IDENT_RE
                  }, {
                    match: /`(?:\\.|[^`\\])+`/
                  }],
                  endsParent: true
                }]
              }, {
                scope: 'doctag',
                match: /@[a-zA-Z]+/
              }, {
                scope: 'keyword',
                match: /\\[a-zA-Z]+/
              }]
            }), hljs.HASH_COMMENT_MODE, {
              scope: 'string',
              contains: [hljs.BACKSLASH_ESCAPE],
              variants: [hljs.END_SAME_AS_BEGIN({
                begin: /[rR]"(-*)\(/,
                end: /\)(-*)"/
              }), hljs.END_SAME_AS_BEGIN({
                begin: /[rR]"(-*)\{/,
                end: /\}(-*)"/
              }), hljs.END_SAME_AS_BEGIN({
                begin: /[rR]"(-*)\[/,
                end: /\](-*)"/
              }), hljs.END_SAME_AS_BEGIN({
                begin: /[rR]'(-*)\(/,
                end: /\)(-*)'/
              }), hljs.END_SAME_AS_BEGIN({
                begin: /[rR]'(-*)\{/,
                end: /\}(-*)'/
              }), hljs.END_SAME_AS_BEGIN({
                begin: /[rR]'(-*)\[/,
                end: /\](-*)'/
              }), {
                begin: '"',
                end: '"',
                relevance: 0
              }, {
                begin: "'",
                end: "'",
                relevance: 0
              }]
            },
            // Matching numbers immediately following punctuation and operators is
            // tricky since we need to look at the character ahead of a number to
            // ensure the number is not part of an identifier, and we cannot use
            // negative look-behind assertions. So instead we explicitly handle all
            // possible combinations of (operator|punctuation), number.
            // TODO: replace with negative look-behind when available
            // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/ },
            // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/ },
            // { begin: /(?<![a-zA-Z0-9._])(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/ }
            {
              relevance: 0,
              variants: [{
                scope: {
                  1: 'operator',
                  2: 'number'
                },
                match: [OPERATORS_RE, NUMBER_TYPES_RE]
              }, {
                scope: {
                  1: 'operator',
                  2: 'number'
                },
                match: [/%[^%]*%/, NUMBER_TYPES_RE]
              }, {
                scope: {
                  1: 'punctuation',
                  2: 'number'
                },
                match: [PUNCTUATION_RE, NUMBER_TYPES_RE]
              }, {
                scope: {
                  2: 'number'
                },
                match: [/[^a-zA-Z0-9._]|^/,
                // not part of an identifier, or start of document
                NUMBER_TYPES_RE]
              }]
            },
            // Operators/punctuation when they're not directly followed by numbers
            {
              // Relevance boost for the most common assignment form.
              scope: {
                3: 'operator'
              },
              match: [IDENT_RE, /\s+/, /<-/, /\s+/]
            }, {
              scope: 'operator',
              relevance: 0,
              variants: [{
                match: OPERATORS_RE
              }, {
                match: /%[^%]*%/
              }]
            }, {
              scope: 'punctuation',
              relevance: 0,
              match: PUNCTUATION_RE
            }, {
              // Escaped identifier
              begin: '`',
              end: '`',
              contains: [{
                begin: /\\./
              }]
            }]
          };
        }

        /*
        Language: Perl
        Author: Peter Leonov <gojpeg@yandex.ru>
        Website: https://www.perl.org
        Category: common
        */

        /** @type LanguageFn */
        function perl(hljs) {
          var regex = hljs.regex;
          var KEYWORDS = ['abs', 'accept', 'alarm', 'and', 'atan2', 'bind', 'binmode', 'bless', 'break', 'caller', 'chdir', 'chmod', 'chomp', 'chop', 'chown', 'chr', 'chroot', 'close', 'closedir', 'connect', 'continue', 'cos', 'crypt', 'dbmclose', 'dbmopen', 'defined', 'delete', 'die', 'do', 'dump', 'each', 'else', 'elsif', 'endgrent', 'endhostent', 'endnetent', 'endprotoent', 'endpwent', 'endservent', 'eof', 'eval', 'exec', 'exists', 'exit', 'exp', 'fcntl', 'fileno', 'flock', 'for', 'foreach', 'fork', 'format', 'formline', 'getc', 'getgrent', 'getgrgid', 'getgrnam', 'gethostbyaddr', 'gethostbyname', 'gethostent', 'getlogin', 'getnetbyaddr', 'getnetbyname', 'getnetent', 'getpeername', 'getpgrp', 'getpriority', 'getprotobyname', 'getprotobynumber', 'getprotoent', 'getpwent', 'getpwnam', 'getpwuid', 'getservbyname', 'getservbyport', 'getservent', 'getsockname', 'getsockopt', 'given', 'glob', 'gmtime', 'goto', 'grep', 'gt', 'hex', 'if', 'index', 'int', 'ioctl', 'join', 'keys', 'kill', 'last', 'lc', 'lcfirst', 'length', 'link', 'listen', 'local', 'localtime', 'log', 'lstat', 'lt', 'ma', 'map', 'mkdir', 'msgctl', 'msgget', 'msgrcv', 'msgsnd', 'my', 'ne', 'next', 'no', 'not', 'oct', 'open', 'opendir', 'or', 'ord', 'our', 'pack', 'package', 'pipe', 'pop', 'pos', 'print', 'printf', 'prototype', 'push', 'q|0', 'qq', 'quotemeta', 'qw', 'qx', 'rand', 'read', 'readdir', 'readline', 'readlink', 'readpipe', 'recv', 'redo', 'ref', 'rename', 'require', 'reset', 'return', 'reverse', 'rewinddir', 'rindex', 'rmdir', 'say', 'scalar', 'seek', 'seekdir', 'select', 'semctl', 'semget', 'semop', 'send', 'setgrent', 'sethostent', 'setnetent', 'setpgrp', 'setpriority', 'setprotoent', 'setpwent', 'setservent', 'setsockopt', 'shift', 'shmctl', 'shmget', 'shmread', 'shmwrite', 'shutdown', 'sin', 'sleep', 'socket', 'socketpair', 'sort', 'splice', 'split', 'sprintf', 'sqrt', 'srand', 'stat', 'state', 'study', 'sub', 'substr', 'symlink', 'syscall', 'sysopen', 'sysread', 'sysseek', 'system', 'syswrite', 'tell', 'telldir', 'tie', 'tied', 'time', 'times', 'tr', 'truncate', 'uc', 'ucfirst', 'umask', 'undef', 'unless', 'unlink', 'unpack', 'unshift', 'untie', 'until', 'use', 'utime', 'values', 'vec', 'wait', 'waitpid', 'wantarray', 'warn', 'when', 'while', 'write', 'x|0', 'xor', 'y|0'];

          // https://perldoc.perl.org/perlre#Modifiers
          var REGEX_MODIFIERS = /[dualxmsipngr]{0,12}/; // aa and xx are valid, making max length 12
          var PERL_KEYWORDS = {
            $pattern: /[\w.]+/,
            keyword: KEYWORDS.join(" ")
          };
          var SUBST = {
            className: 'subst',
            begin: '[$@]\\{',
            end: '\\}',
            keywords: PERL_KEYWORDS
          };
          var METHOD = {
            begin: /->\{/,
            end: /\}/
            // contains defined later
          };
          var VAR = {
            variants: [{
              begin: /\$\d/
            }, {
              begin: regex.concat(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/, // negative look-ahead tries to avoid matching patterns that are not
              // Perl at all like $ident$, @ident@, etc.
              "(?![A-Za-z])(?![@$%])")
            }, {
              begin: /[$%@][^\s\w{]/,
              relevance: 0
            }]
          };
          var STRING_CONTAINS = [hljs.BACKSLASH_ESCAPE, SUBST, VAR];
          var REGEX_DELIMS = [/!/, /\//, /\|/, /\?/, /'/, /"/,
          // valid but infrequent and weird
          /#/ // valid but infrequent and weird
          ];
          /**
           * @param {string|RegExp} prefix
           * @param {string|RegExp} open
           * @param {string|RegExp} close
           */
          var PAIRED_DOUBLE_RE = function PAIRED_DOUBLE_RE(prefix, open) {
            var close = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '\\1';
            var middle = close === '\\1' ? close : regex.concat(close, open);
            return regex.concat(regex.concat("(?:", prefix, ")"), open, /(?:\\.|[^\\\/])*?/, middle, /(?:\\.|[^\\\/])*?/, close, REGEX_MODIFIERS);
          };
          /**
           * @param {string|RegExp} prefix
           * @param {string|RegExp} open
           * @param {string|RegExp} close
           */
          var PAIRED_RE = function PAIRED_RE(prefix, open, close) {
            return regex.concat(regex.concat("(?:", prefix, ")"), open, /(?:\\.|[^\\\/])*?/, close, REGEX_MODIFIERS);
          };
          var PERL_DEFAULT_CONTAINS = [VAR, hljs.HASH_COMMENT_MODE, hljs.COMMENT(/^=\w/, /=cut/, {
            endsWithParent: true
          }), METHOD, {
            className: 'string',
            contains: STRING_CONTAINS,
            variants: [{
              begin: 'q[qwxr]?\\s*\\(',
              end: '\\)',
              relevance: 5
            }, {
              begin: 'q[qwxr]?\\s*\\[',
              end: '\\]',
              relevance: 5
            }, {
              begin: 'q[qwxr]?\\s*\\{',
              end: '\\}',
              relevance: 5
            }, {
              begin: 'q[qwxr]?\\s*\\|',
              end: '\\|',
              relevance: 5
            }, {
              begin: 'q[qwxr]?\\s*<',
              end: '>',
              relevance: 5
            }, {
              begin: 'qw\\s+q',
              end: 'q',
              relevance: 5
            }, {
              begin: '\'',
              end: '\'',
              contains: [hljs.BACKSLASH_ESCAPE]
            }, {
              begin: '"',
              end: '"'
            }, {
              begin: '`',
              end: '`',
              contains: [hljs.BACKSLASH_ESCAPE]
            }, {
              begin: /\{\w+\}/,
              relevance: 0
            }, {
              begin: '-?\\w+\\s*=>',
              relevance: 0
            }]
          }, {
            className: 'number',
            begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
            relevance: 0
          }, {
            // regexp container
            begin: '(\\/\\/|' + hljs.RE_STARTERS_RE + '|\\b(split|return|print|reverse|grep)\\b)\\s*',
            keywords: 'split return print reverse grep',
            relevance: 0,
            contains: [hljs.HASH_COMMENT_MODE, {
              className: 'regexp',
              variants: [
              // allow matching common delimiters
              {
                begin: PAIRED_DOUBLE_RE("s|tr|y", regex.either.apply(regex, REGEX_DELIMS.concat([{
                  capture: true
                }])))
              },
              // and then paired delmis
              {
                begin: PAIRED_DOUBLE_RE("s|tr|y", "\\(", "\\)")
              }, {
                begin: PAIRED_DOUBLE_RE("s|tr|y", "\\[", "\\]")
              }, {
                begin: PAIRED_DOUBLE_RE("s|tr|y", "\\{", "\\}")
              }],
              relevance: 2
            }, {
              className: 'regexp',
              variants: [{
                // could be a comment in many languages so do not count
                // as relevant
                begin: /(m|qr)\/\//,
                relevance: 0
              },
              // prefix is optional with /regex/
              {
                begin: PAIRED_RE("(?:m|qr)?", /\//, /\//)
              },
              // allow matching common delimiters
              {
                begin: PAIRED_RE("m|qr", regex.either.apply(regex, REGEX_DELIMS.concat([{
                  capture: true
                }])), /\1/)
              },
              // allow common paired delmins
              {
                begin: PAIRED_RE("m|qr", /\(/, /\)/)
              }, {
                begin: PAIRED_RE("m|qr", /\[/, /\]/)
              }, {
                begin: PAIRED_RE("m|qr", /\{/, /\}/)
              }]
            }]
          }, {
            className: 'function',
            beginKeywords: 'sub',
            end: '(\\s*\\(.*?\\))?[;{]',
            excludeEnd: true,
            relevance: 5,
            contains: [hljs.TITLE_MODE]
          }, {
            begin: '-\\w\\b',
            relevance: 0
          }, {
            begin: "^__DATA__$",
            end: "^__END__$",
            subLanguage: 'mojolicious',
            contains: [{
              begin: "^@@.*",
              end: "$",
              className: "comment"
            }]
          }];
          SUBST.contains = PERL_DEFAULT_CONTAINS;
          METHOD.contains = PERL_DEFAULT_CONTAINS;
          return {
            name: 'Perl',
            aliases: ['pl', 'pm'],
            keywords: PERL_KEYWORDS,
            contains: PERL_DEFAULT_CONTAINS
          };
        }

        /*
        Language: Clojure
        Description: Clojure syntax (based on lisp.js)
        Author: mfornos
        Website: https://clojure.org
        Category: lisp
        */

        /** @type LanguageFn */
        function clojure(hljs) {
          var SYMBOLSTART = 'a-zA-Z_\\-!.?+*=<>&\'';
          var SYMBOL_RE = '[#]?[' + SYMBOLSTART + '][' + SYMBOLSTART + '0-9/;:$#]*';
          var globals = 'def defonce defprotocol defstruct defmulti defmethod defn- defn defmacro deftype defrecord';
          var keywords = {
            $pattern: SYMBOL_RE,
            built_in:
            // Clojure keywords
            globals + ' ' + 'cond apply if-not if-let if not not= =|0 <|0 >|0 <=|0 >=|0 ==|0 +|0 /|0 *|0 -|0 rem ' + 'quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? ' + 'set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? ' + 'class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? ' + 'string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . ' + 'inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last ' + 'drop-while while intern condp case reduced cycle split-at split-with repeat replicate ' + 'iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext ' + 'nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends ' + 'add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler ' + 'set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter ' + 'monitor-exit macroexpand macroexpand-1 for dosync and or ' + 'when when-not when-let comp juxt partial sequence memoize constantly complement identity assert ' + 'peek pop doto proxy first rest cons cast coll last butlast ' + 'sigs reify second ffirst fnext nfirst nnext meta with-meta ns in-ns create-ns import ' + 'refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! ' + 'assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger ' + 'bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline ' + 'flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking ' + 'assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! ' + 'reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! ' + 'new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty ' + 'hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list ' + 'disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer ' + 'chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate ' + 'unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta ' + 'lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize'
          };
          var SYMBOL = {
            begin: SYMBOL_RE,
            relevance: 0
          };
          var NUMBER = {
            scope: 'number',
            relevance: 0,
            variants: [{
              match: /[-+]?0[xX][0-9a-fA-F]+N?/
            },
            // hexadecimal                 // 0x2a
            {
              match: /[-+]?0[0-7]+N?/
            },
            // octal                       // 052
            {
              match: /[-+]?[1-9][0-9]?[rR][0-9a-zA-Z]+N?/
            },
            // variable radix from 2 to 36 // 2r101010, 8r52, 36r16
            {
              match: /[-+]?[0-9]+\/[0-9]+N?/
            },
            // ratio                       // 1/2
            {
              match: /[-+]?[0-9]+((\.[0-9]*([eE][+-]?[0-9]+)?M?)|([eE][+-]?[0-9]+M?|M))/
            },
            // float        // 0.42 4.2E-1M 42E1 42M
            {
              match: /[-+]?([1-9][0-9]*|0)N?/
            } // int (don't match leading 0) // 42 42N
            ]
          };
          var CHARACTER = {
            scope: 'character',
            variants: [{
              match: /\\o[0-3]?[0-7]{1,2}/
            },
            // Unicode Octal 0 - 377
            {
              match: /\\u[0-9a-fA-F]{4}/
            },
            // Unicode Hex 0000 - FFFF
            {
              match: /\\(newline|space|tab|formfeed|backspace|return)/
            },
            // special characters
            {
              match: /\\\S/,
              relevance: 0
            } // any non-whitespace char
            ]
          };
          var REGEX = {
            scope: 'regex',
            begin: /#"/,
            end: /"/,
            contains: [hljs.BACKSLASH_ESCAPE]
          };
          var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {
            illegal: null
          });
          var COMMA = {
            scope: 'punctuation',
            match: /,/,
            relevance: 0
          };
          var COMMENT = hljs.COMMENT(';', '$', {
            relevance: 0
          });
          var LITERAL = {
            className: 'literal',
            begin: /\b(true|false|nil)\b/
          };
          var COLLECTION = {
            begin: "\\[|(#::?" + SYMBOL_RE + ")?\\{",
            end: '[\\]\\}]',
            relevance: 0
          };
          var KEY = {
            className: 'symbol',
            begin: '[:]{1,2}' + SYMBOL_RE
          };
          var LIST = {
            begin: '\\(',
            end: '\\)'
          };
          var BODY = {
            endsWithParent: true,
            relevance: 0
          };
          var NAME = {
            keywords: keywords,
            className: 'name',
            begin: SYMBOL_RE,
            relevance: 0,
            starts: BODY
          };
          var DEFAULT_CONTAINS = [COMMA, LIST, CHARACTER, REGEX, STRING, COMMENT, KEY, COLLECTION, NUMBER, LITERAL, SYMBOL];
          var GLOBAL = {
            beginKeywords: globals,
            keywords: {
              $pattern: SYMBOL_RE,
              keyword: globals
            },
            end: '(\\[|#|\\d|"|:|\\{|\\)|\\(|$)',
            contains: [{
              className: 'title',
              begin: SYMBOL_RE,
              relevance: 0,
              excludeEnd: true,
              // we can only have a single title
              endsParent: true
            }].concat(DEFAULT_CONTAINS)
          };
          LIST.contains = [GLOBAL, NAME, BODY];
          BODY.contains = DEFAULT_CONTAINS;
          COLLECTION.contains = DEFAULT_CONTAINS;
          return {
            name: 'Clojure',
            aliases: ['clj', 'edn'],
            illegal: /\S/,
            contains: [COMMA, LIST, CHARACTER, REGEX, STRING, COMMENT, KEY, COLLECTION, NUMBER, LITERAL]
          };
        }

        /*
        Language: Batch file (DOS)
        Author: Alexander Makarov <sam@rmcreative.ru>
        Contributors: Anton Kochkov <anton.kochkov@gmail.com>
        Website: https://en.wikipedia.org/wiki/Batch_file
        */

        /** @type LanguageFn */
        function dos(hljs) {
          var COMMENT = hljs.COMMENT(/^\s*@?rem\b/, /$/, {
            relevance: 10
          });
          var LABEL = {
            className: 'symbol',
            begin: '^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)',
            relevance: 0
          };
          var KEYWORDS = ["if", "else", "goto", "for", "in", "do", "call", "exit", "not", "exist", "errorlevel", "defined", "equ", "neq", "lss", "leq", "gtr", "geq"];
          var BUILT_INS = ["prn", "nul", "lpt3", "lpt2", "lpt1", "con", "com4", "com3", "com2", "com1", "aux", "shift", "cd", "dir", "echo", "setlocal", "endlocal", "set", "pause", "copy", "append", "assoc", "at", "attrib", "break", "cacls", "cd", "chcp", "chdir", "chkdsk", "chkntfs", "cls", "cmd", "color", "comp", "compact", "convert", "date", "dir", "diskcomp", "diskcopy", "doskey", "erase", "fs", "find", "findstr", "format", "ftype", "graftabl", "help", "keyb", "label", "md", "mkdir", "mode", "more", "move", "path", "pause", "print", "popd", "pushd", "promt", "rd", "recover", "rem", "rename", "replace", "restore", "rmdir", "shift", "sort", "start", "subst", "time", "title", "tree", "type", "ver", "verify", "vol",
          // winutils
          "ping", "net", "ipconfig", "taskkill", "xcopy", "ren", "del"];
          return {
            name: 'Batch file (DOS)',
            aliases: ['bat', 'cmd'],
            case_insensitive: true,
            illegal: /\/\*/,
            keywords: {
              keyword: KEYWORDS,
              built_in: BUILT_INS
            },
            contains: [{
              className: 'variable',
              begin: /%%[^ ]|%[^ ]+?%|![^ ]+?!/
            }, {
              className: 'function',
              begin: LABEL.begin,
              end: 'goto:eof',
              contains: [hljs.inherit(hljs.TITLE_MODE, {
                begin: '([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*'
              }), COMMENT]
            }, {
              className: 'number',
              begin: '\\b\\d+',
              relevance: 0
            }, COMMENT]
          };
        }

        /*
        Language: Nix
        Author: Domen Kožar <domen@dev.si>
        Description: Nix functional language
        Website: http://nixos.org/nix
        */

        function nix(hljs) {
          var KEYWORDS = {
            keyword: ["rec", "with", "let", "in", "inherit", "assert", "if", "else", "then"],
            literal: ["true", "false", "or", "and", "null"],
            built_in: ["import", "abort", "baseNameOf", "dirOf", "isNull", "builtins", "map", "removeAttrs", "throw", "toString", "derivation"]
          };
          var ANTIQUOTE = {
            className: 'subst',
            begin: /\$\{/,
            end: /\}/,
            keywords: KEYWORDS
          };
          var ESCAPED_DOLLAR = {
            className: 'char.escape',
            begin: /''\$/
          };
          var ATTRS = {
            begin: /[a-zA-Z0-9-_]+(\s*=)/,
            returnBegin: true,
            relevance: 0,
            contains: [{
              className: 'attr',
              begin: /\S+/,
              relevance: 0.2
            }]
          };
          var STRING = {
            className: 'string',
            contains: [ESCAPED_DOLLAR, ANTIQUOTE],
            variants: [{
              begin: "''",
              end: "''"
            }, {
              begin: '"',
              end: '"'
            }]
          };
          var EXPRESSIONS = [hljs.NUMBER_MODE, hljs.HASH_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, STRING, ATTRS];
          ANTIQUOTE.contains = EXPRESSIONS;
          return {
            name: 'Nix',
            aliases: ["nixos"],
            keywords: KEYWORDS,
            contains: EXPRESSIONS
          };
        }
        HighlightJS.registerLanguage("yaml", yaml);
        HighlightJS.registerLanguage("json", json);
        HighlightJS.registerLanguage("bash", bash);
        HighlightJS.registerLanguage("python", python);
        HighlightJS.registerLanguage("markdown", markdown);
        HighlightJS.registerLanguage("ini", ini);
        HighlightJS.registerLanguage("nginx", nginx);
        HighlightJS.registerLanguage("plaintext", plaintext);
        HighlightJS.registerAliases("text", {
          languageName: "plaintext"
        });
        HighlightJS.registerLanguage("lisp", lisp);
        HighlightJS.registerLanguage("xml", xml);
        HighlightJS.registerLanguage("julia", julia);
        HighlightJS.registerLanguage("r", r);
        HighlightJS.registerLanguage("perl", perl);
        HighlightJS.registerLanguage("clojure", clojure);
        HighlightJS.registerLanguage("dos", dos);
        HighlightJS.registerLanguage("nix", nix);
        var markup = {
          exports: {}
        };

        /*
          Markup.js v1.5.21: http://github.com/adammark/Markup.js
          MIT License
          (c) 2011 - 2014 Adam Mark
        */

        (function (module) {
          var Mark = {
            // Templates to include, by name. A template is a string.
            includes: {},
            // Global variables, by name. Global variables take precedence over context variables.
            globals: {},
            // The delimiter to use in pipe expressions, e.g. {{if color|like>red}}.
            delimiter: ">",
            // Collapse white space between HTML elements in the resulting string.
            compact: false,
            // Shallow-copy an object.
            _copy: function _copy(a, b) {
              b = b || [];
              for (var i in a) {
                b[i] = a[i];
              }
              return b;
            },
            // Get the value of a number or size of an array. This is a helper function for several pipes.
            _size: function _size(a) {
              return a instanceof Array ? a.length : a || 0;
            },
            // This object represents an iteration. It has an index and length.
            _iter: function _iter(idx, size) {
              this.idx = idx;
              this.size = size;
              this.length = size;
              this.sign = "#";

              // Print the index if "#" or the count if "##".
              this.toString = function () {
                return this.idx + this.sign.length - 1;
              };
            },
            // Pass a value through a series of pipe expressions, e.g. _pipe(123, ["add>10","times>5"]).
            _pipe: function _pipe(val, expressions) {
              var expression, parts, fn, result;

              // If we have expressions, pull out the first one, e.g. "add>10".
              if (expression = expressions.shift()) {
                // Split the expression into its component parts, e.g. ["add", "10"].
                parts = expression.split(this.delimiter);

                // Pull out the function name, e.g. "add".
                fn = parts.shift().trim();
                try {
                  // Run the function, e.g. add(123, 10) ...
                  result = Mark.pipes[fn].apply(null, [val].concat(parts));

                  // ... then pipe again with remaining expressions.
                  val = this._pipe(result, expressions);
                } catch (e) {}
              }

              // Return the piped value.
              return val;
            },
            // TODO doc
            _eval: function _eval(context, filters, child) {
              var result = this._pipe(context, filters),
                ctx = result,
                i = -1,
                j,
                opts;
              if (result instanceof Array) {
                result = "";
                j = ctx.length;
                while (++i < j) {
                  opts = {
                    iter: new this._iter(i, j)
                  };
                  result += child ? Mark.up(child, ctx[i], opts) : ctx[i];
                }
              } else if (result instanceof Object) {
                result = Mark.up(child, ctx);
              }
              return result;
            },
            // Process the contents of an IF or IF/ELSE block.
            _test: function _test(bool, child, context, options) {
              // Process the child string, then split it into the IF and ELSE parts.
              var str = Mark.up(child, context, options).split(/\{\{\s*else\s*\}\}/);

              // Return the IF or ELSE part. If no ELSE, return an empty string.
              return (bool === false ? str[1] : str[0]) || "";
            },
            // Determine the extent of a block expression, e.g. "{{foo}}...{{/foo}}"
            _bridge: function _bridge(tpl, tkn) {
              tkn = tkn == "." ? "\\." : tkn.replace(/\$/g, "\\$");
              var exp = "{{\\s*" + tkn + "([^/}]+\\w*)?}}|{{/" + tkn + "\\s*}}",
                re = new RegExp(exp, "g"),
                tags = tpl.match(re) || [],
                t,
                i,
                a = 0,
                b = 0,
                c = -1,
                d = 0;
              for (i = 0; i < tags.length; i++) {
                t = i;
                c = tpl.indexOf(tags[t], c + 1);
                if (tags[t].indexOf("{{/") > -1) {
                  b++;
                } else {
                  a++;
                }
                if (a === b) {
                  break;
                }
              }
              a = tpl.indexOf(tags[0]);
              b = a + tags[0].length;
              d = c + tags[t].length;

              // Return the block, e.g. "{{foo}}bar{{/foo}}" and its child, e.g. "bar".
              return [tpl.substring(a, d), tpl.substring(b, c)];
            }
          };

          // Inject a template string with contextual data and return a new string.
          Mark.up = function (template, context, options) {
            context = context || {};
            options = options || {};

            // Match all tags like "{{...}}".
            var re = /\{\{(.+?)\}\}/g,
              // All tags in the template.
              tags = template.match(re) || [],
              // The tag being evaluated, e.g. "{{hamster|dance}}".
              tag,
              // The expression to evaluate inside the tag, e.g. "hamster|dance".
              prop,
              // The token itself, e.g. "hamster".
              token,
              // An array of pipe expressions, e.g. ["more>1", "less>2"].
              filters = [],
              // Does the tag close itself? e.g. "{{stuff/}}".
              selfy,
              // Is the tag an "if" statement?
              testy,
              // The contents of a block tag, e.g. "{{aa}}bb{{/aa}}" -> "bb".
              child,
              // The resulting string.
              result,
              // The global variable being evaluated, or undefined.
              global,
              // The included template being evaluated, or undefined.
              include,
              // A placeholder variable.
              ctx,
              // Iterators.
              i = 0,
              j = 0;

            // Set custom pipes, if provided.
            if (options.pipes) {
              this._copy(options.pipes, this.pipes);
            }

            // Set templates to include, if provided.
            if (options.includes) {
              this._copy(options.includes, this.includes);
            }

            // Set global variables, if provided.
            if (options.globals) {
              this._copy(options.globals, this.globals);
            }

            // Optionally override the delimiter.
            if (options.delimiter) {
              this.delimiter = options.delimiter;
            }

            // Optionally collapse white space.
            if (options.compact !== undefined) {
              this.compact = options.compact;
            }

            // Loop through tags, e.g. {{a}}, {{b}}, {{c}}, {{/c}}.
            while (tag = tags[i++]) {
              result = undefined;
              child = "";
              selfy = tag.indexOf("/}}") > -1;
              prop = tag.substr(2, tag.length - (selfy ? 5 : 4));
              prop = prop.replace(/`(.+?)`/g, function (s, p1) {
                return Mark.up("{{" + p1 + "}}", context);
              });
              testy = prop.trim().indexOf("if ") === 0;
              filters = prop.split("|");
              filters.shift(); // instead of splice(1)
              prop = prop.replace(/^\s*if/, "").split("|").shift().trim();
              token = testy ? "if" : prop.split("|")[0];
              ctx = context[prop];

              // If an "if" statement without filters, assume "{{if foo|notempty}}"
              if (testy && !filters.length) {
                filters = ["notempty"];
              }

              // Does the tag have a corresponding closing tag? If so, find it and move the cursor.
              if (!selfy && template.indexOf("{{/" + token) > -1) {
                result = this._bridge(template, token);
                tag = result[0];
                child = result[1];
                i += tag.match(re).length - 1; // fast forward
              }

              // Skip "else" tags. These are pulled out in _test().
              if (/^\{\{\s*else\s*\}\}$/.test(tag)) {
                continue;
              }

              // Evaluating a global variable.
              else if ((global = this.globals[prop]) !== undefined) {
                result = this._eval(global, filters, child);
              }

              // Evaluating an included template.
              else if (include = this.includes[prop]) {
                if (include instanceof Function) {
                  include = include();
                }
                result = this._pipe(Mark.up(include, context, options), filters);
              }

              // Evaluating a loop counter ("#" or "##").
              else if (prop.indexOf("#") > -1) {
                options.iter.sign = prop;
                result = this._pipe(options.iter, filters);
              }

              // Evaluating the current context.
              else if (prop === ".") {
                result = this._pipe(context, filters);
              }

              // Evaluating a variable with dot notation, e.g. "a.b.c"
              else if (prop.indexOf(".") > -1) {
                prop = prop.split(".");
                ctx = Mark.globals[prop[0]];
                if (ctx) {
                  j = 1;
                } else {
                  j = 0;
                  ctx = context;
                }

                // Get the actual context
                while (ctx && j < prop.length) {
                  ctx = ctx[prop[j++]];
                }
                result = this._eval(ctx, filters, child);
              }

              // Evaluating an "if" statement.
              else if (testy) {
                result = this._pipe(ctx, filters);
              }

              // Evaluating an array, which might be a block expression.
              else if (ctx instanceof Array) {
                result = this._eval(ctx, filters, child);
              }

              // Evaluating a block expression.
              else if (child) {
                result = ctx ? Mark.up(child, ctx) : undefined;
              }

              // Evaluating anything else.
              else if (context.hasOwnProperty(prop)) {
                result = this._pipe(ctx, filters);
              }

              // Evaluating special case: if the resulting context is actually an Array
              if (result instanceof Array) {
                result = this._eval(result, filters, child);
              }

              // Evaluating an "if" statement.
              if (testy) {
                result = this._test(result, child, context, options);
              }

              // Replace the tag, e.g. "{{name}}", with the result, e.g. "Adam".
              template = template.replace(tag, result === undefined ? "???" : result);
            }
            return this.compact ? template.replace(/>\s+</g, "><") : template;
          };

          // Freebie pipes. See usage in README.md
          Mark.pipes = {
            empty: function empty(obj) {
              return !obj || (obj + "").trim().length === 0 ? obj : false;
            },
            notempty: function notempty(obj) {
              return obj && (obj + "").trim().length ? obj : false;
            },
            blank: function blank(str, val) {
              return !!str || str === 0 ? str : val;
            },
            more: function more(a, b) {
              return Mark._size(a) > b ? a : false;
            },
            less: function less(a, b) {
              return Mark._size(a) < b ? a : false;
            },
            ormore: function ormore(a, b) {
              return Mark._size(a) >= b ? a : false;
            },
            orless: function orless(a, b) {
              return Mark._size(a) <= b ? a : false;
            },
            between: function between(a, b, c) {
              a = Mark._size(a);
              return a >= b && a <= c ? a : false;
            },
            equals: function equals(a, b) {
              return a == b ? a : false;
            },
            notequals: function notequals(a, b) {
              return a != b ? a : false;
            },
            like: function like(str, pattern) {
              return new RegExp(pattern, "i").test(str) ? str : false;
            },
            notlike: function notlike(str, pattern) {
              return !Mark.pipes.like(str, pattern) ? str : false;
            },
            upcase: function upcase(str) {
              return String(str).toUpperCase();
            },
            downcase: function downcase(str) {
              return String(str).toLowerCase();
            },
            capcase: function capcase(str) {
              return str.replace(/(?:^|\s)\S/g, function (a) {
                return a.toUpperCase();
              });
            },
            chop: function chop(str, n) {
              return str.length > n ? str.substr(0, n) + "..." : str;
            },
            tease: function tease(str, n) {
              var a = str.split(/\s+/);
              return a.slice(0, n).join(" ") + (a.length > n ? "..." : "");
            },
            trim: function trim(str) {
              return str.trim();
            },
            pack: function pack(str) {
              return str.trim().replace(/\s{2,}/g, " ");
            },
            round: function round(num) {
              return Math.round(+num);
            },
            clean: function clean(str) {
              return String(str).replace(/<\/?[^>]+>/gi, "");
            },
            size: function size(obj) {
              return obj.length;
            },
            length: function length(obj) {
              return obj.length;
            },
            reverse: function reverse(arr) {
              return [].concat(arr).reverse();
            },
            join: function join(arr, separator) {
              return arr.join(separator);
            },
            limit: function limit(arr, count, idx) {
              return arr.slice(+idx || 0, +count + (+idx || 0));
            },
            split: function split(str, separator) {
              return str.split(separator || ",");
            },
            choose: function choose(bool, iffy, elsy) {
              return !!bool ? iffy : elsy || "";
            },
            toggle: function toggle(obj, csv1, csv2, str) {
              return csv2.split(",")[csv1.match(/\w+/g).indexOf(obj + "")] || str;
            },
            sort: function sort(arr, prop) {
              var fn = function fn(a, b) {
                return a[prop] > b[prop] ? 1 : -1;
              };
              return [].concat(arr).sort(prop ? fn : undefined);
            },
            fix: function fix(num, n) {
              return (+num).toFixed(n);
            },
            mod: function mod(num, n) {
              return +num % +n;
            },
            divisible: function divisible(num, n) {
              return num && +num % n === 0 ? num : false;
            },
            even: function even(num) {
              return num && (+num & 1) === 0 ? num : false;
            },
            odd: function odd(num) {
              return num && (+num & 1) === 1 ? num : false;
            },
            number: function number(str) {
              return parseFloat(str.replace(/[^\-\d\.]/g, ""));
            },
            url: function url(str) {
              return encodeURI(str);
            },
            bool: function bool(obj) {
              return !!obj;
            },
            falsy: function falsy(obj) {
              return !obj;
            },
            first: function first(iter) {
              return iter.idx === 0;
            },
            last: function last(iter) {
              return iter.idx === iter.size - 1;
            },
            call: function call(obj, fn) {
              return obj[fn].apply(obj, [].slice.call(arguments, 2));
            },
            set: function set(obj, key) {
              Mark.globals[key] = obj;
              return "";
            },
            log: function log(obj) {
              console.log(obj);
              return obj;
            }
          };

          // Shim for IE.
          if (typeof String.prototype.trim !== "function") {
            String.prototype.trim = function () {
              return this.replace(/^\s+|\s+$/g, "");
            };
          }

          // Export for Node.js and AMD.
          if (module.exports) {
            module.exports = Mark;
          }
        })(markup);
        var markupExports = markup.exports;
        var Mark = /*@__PURE__*/getDefaultExportFromCjs(markupExports);
        var mirrorId = exports("m", JSON.parse(((_Array$from$filter$ = Array.from(document.getElementsByTagName("script")).filter(function (script) {
          return script.type === "text/x-tuna-help-mirrorid";
        })[0]) === null || _Array$from$filter$ === void 0 ? void 0 : _Array$from$filter$.textContent) || '""'));
        Array.from(document.querySelectorAll("#help-content table")).map(function (el) {
          el.classList.add("table", "table-bordered", "table-striped");
        });
        var update_target = function update_target(ev) {
          var sel = ev.target;
          var target_selectors = sel.attributes["data-target"].value.split(",");
          var _iterator = _createForOfIteratorHelper(target_selectors),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var target_selector = _step.value;
              var target = document.querySelector(target_selector);
              var template_selector = target.attributes["data-template"].value;
              var select_selectors = target.attributes["data-select"].value.split(",");
              var url = "/" + mirrorId;
              if (mirrorId.endsWith(".git")) {
                url = "/git/" + mirrorId;
              }
              var template_data = {
                mirror: hostname + url
              };
              var _iterator2 = _createForOfIteratorHelper(select_selectors),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var select_selector = _step2.value;
                  var opt_attrs = document.querySelector(select_selector).querySelector("option:checked").attributes;
                  var _iterator3 = _createForOfIteratorHelper(opt_attrs),
                    _step3;
                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                      var attr = _step3.value;
                      if (attr.name.startsWith("data-")) {
                        template_data[attr.name.slice(5)] = attr.value;
                      }
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              if ("sudoe" in template_data) {
                template_data["sudoE"] = template_data.sudoe;
              }
              var template = document.querySelector(template_selector).textContent.trim();
              var content = Mark.up(template, template_data);
              target.innerHTML = content;
              HighlightJS.highlightElement(target);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        };
        Array.from(document.querySelectorAll("select.content-select")).map(function (el) {
          el.addEventListener("change", update_target);
          el.dispatchEvent(new Event("change"));
        });
        document.getElementById("help-select").addEventListener("change", function (ev) {
          var help_url = ev.target.querySelector("option:checked").attributes["data-help-url"].value;
          window.location.assign("".concat(window.location.protocol, "//").concat(window.location.host).concat(help_url));
        });
        fetch(TUNASYNC_JSON_PATH).then(function (resp) {
          return resp.json();
        }).then(function (statusData) {
          var availableMirrorIds = new Set(statusData.map(function (x) {
            return x.name;
          }));
          options.unlisted_mirrors.forEach(function (elem) {
            availableMirrorIds.add(elem.name);
          });
          if (!availableMirrorIds.has(mirrorId)) {
            {
              location.href = mirrorz_help_link + mirrorId;
            }
          }
          Array.from(document.querySelectorAll('option[id^="toc-"],li[id^="toc-"]')).forEach(function (elem) {
            if (elem.id.startsWith("toc-") && !availableMirrorIds.has(elem.id.slice(4))) {
              elem.remove();
            }
          });
        });
      }
    };
  });
})();
//# sourceMappingURL=help-legacy-BslKsKd1.js.map
