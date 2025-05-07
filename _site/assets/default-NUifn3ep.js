function __vite_legacy_guard() {
  import.meta.url;
  import("_").catch(() => 1);
  (async function* () {
  })().next();
}
;
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var baseComponent = { exports: {} };
var data = { exports: {} };
/*!
  * Bootstrap data.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
var hasRequiredData;
function requireData() {
  if (hasRequiredData) return data.exports;
  hasRequiredData = 1;
  (function(module, exports) {
    (function(global2, factory) {
      module.exports = factory();
    })(commonjsGlobal, function() {
      const elementMap = /* @__PURE__ */ new Map();
      const data2 = {
        set(element, key, instance) {
          if (!elementMap.has(element)) {
            elementMap.set(element, /* @__PURE__ */ new Map());
          }
          const instanceMap = elementMap.get(element);
          if (!instanceMap.has(key) && instanceMap.size !== 0) {
            console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(instanceMap.keys())[0], "."));
            return;
          }
          instanceMap.set(key, instance);
        },
        get(element, key) {
          if (elementMap.has(element)) {
            return elementMap.get(element).get(key) || null;
          }
          return null;
        },
        remove(element, key) {
          if (!elementMap.has(element)) {
            return;
          }
          const instanceMap = elementMap.get(element);
          instanceMap.delete(key);
          if (instanceMap.size === 0) {
            elementMap.delete(element);
          }
        }
      };
      return data2;
    });
  })(data);
  return data.exports;
}
var eventHandler = { exports: {} };
var util = { exports: {} };
/*!
  * Bootstrap index.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
var hasRequiredUtil;
function requireUtil() {
  if (hasRequiredUtil) return util.exports;
  hasRequiredUtil = 1;
  (function(module, exports) {
    (function(global2, factory) {
      factory(exports);
    })(commonjsGlobal, function(exports2) {
      const MAX_UID = 1e6;
      const MILLISECONDS_MULTIPLIER = 1e3;
      const TRANSITION_END = "transitionend";
      const parseSelector = (selector) => {
        if (selector && window.CSS && window.CSS.escape) {
          selector = selector.replace(/#([^\s"#']+)/g, (match, id) => "#".concat(CSS.escape(id)));
        }
        return selector;
      };
      const toType = (object) => {
        if (object === null || object === void 0) {
          return "".concat(object);
        }
        return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
      };
      const getUID = (prefix) => {
        do {
          prefix += Math.floor(Math.random() * MAX_UID);
        } while (document.getElementById(prefix));
        return prefix;
      };
      const getTransitionDurationFromElement = (element) => {
        if (!element) {
          return 0;
        }
        let {
          transitionDuration,
          transitionDelay
        } = window.getComputedStyle(element);
        const floatTransitionDuration = Number.parseFloat(transitionDuration);
        const floatTransitionDelay = Number.parseFloat(transitionDelay);
        if (!floatTransitionDuration && !floatTransitionDelay) {
          return 0;
        }
        transitionDuration = transitionDuration.split(",")[0];
        transitionDelay = transitionDelay.split(",")[0];
        return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
      };
      const triggerTransitionEnd = (element) => {
        element.dispatchEvent(new Event(TRANSITION_END));
      };
      const isElement = (object) => {
        if (!object || typeof object !== "object") {
          return false;
        }
        if (typeof object.jquery !== "undefined") {
          object = object[0];
        }
        return typeof object.nodeType !== "undefined";
      };
      const getElement = (object) => {
        if (isElement(object)) {
          return object.jquery ? object[0] : object;
        }
        if (typeof object === "string" && object.length > 0) {
          return document.querySelector(parseSelector(object));
        }
        return null;
      };
      const isVisible = (element) => {
        if (!isElement(element) || element.getClientRects().length === 0) {
          return false;
        }
        const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
        const closedDetails = element.closest("details:not([open])");
        if (!closedDetails) {
          return elementIsVisible;
        }
        if (closedDetails !== element) {
          const summary = element.closest("summary");
          if (summary && summary.parentNode !== closedDetails) {
            return false;
          }
          if (summary === null) {
            return false;
          }
        }
        return elementIsVisible;
      };
      const isDisabled = (element) => {
        if (!element || element.nodeType !== Node.ELEMENT_NODE) {
          return true;
        }
        if (element.classList.contains("disabled")) {
          return true;
        }
        if (typeof element.disabled !== "undefined") {
          return element.disabled;
        }
        return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
      };
      const findShadowRoot = (element) => {
        if (!document.documentElement.attachShadow) {
          return null;
        }
        if (typeof element.getRootNode === "function") {
          const root = element.getRootNode();
          return root instanceof ShadowRoot ? root : null;
        }
        if (element instanceof ShadowRoot) {
          return element;
        }
        if (!element.parentNode) {
          return null;
        }
        return findShadowRoot(element.parentNode);
      };
      const noop = () => {
      };
      const reflow = (element) => {
        element.offsetHeight;
      };
      const getjQuery = () => {
        if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
          return window.jQuery;
        }
        return null;
      };
      const DOMContentLoadedCallbacks = [];
      const onDOMContentLoaded = (callback) => {
        if (document.readyState === "loading") {
          if (!DOMContentLoadedCallbacks.length) {
            document.addEventListener("DOMContentLoaded", () => {
              for (const callback2 of DOMContentLoadedCallbacks) {
                callback2();
              }
            });
          }
          DOMContentLoadedCallbacks.push(callback);
        } else {
          callback();
        }
      };
      const isRTL = () => document.documentElement.dir === "rtl";
      const defineJQueryPlugin = (plugin) => {
        onDOMContentLoaded(() => {
          const $ = getjQuery();
          if ($) {
            const name = plugin.NAME;
            const JQUERY_NO_CONFLICT = $.fn[name];
            $.fn[name] = plugin.jQueryInterface;
            $.fn[name].Constructor = plugin;
            $.fn[name].noConflict = () => {
              $.fn[name] = JQUERY_NO_CONFLICT;
              return plugin.jQueryInterface;
            };
          }
        });
      };
      const execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
        return typeof possibleCallback === "function" ? possibleCallback(...args) : defaultValue;
      };
      const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
        if (!waitForTransition) {
          execute(callback);
          return;
        }
        const durationPadding = 5;
        const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
        let called = false;
        const handler = ({
          target
        }) => {
          if (target !== transitionElement) {
            return;
          }
          called = true;
          transitionElement.removeEventListener(TRANSITION_END, handler);
          execute(callback);
        };
        transitionElement.addEventListener(TRANSITION_END, handler);
        setTimeout(() => {
          if (!called) {
            triggerTransitionEnd(transitionElement);
          }
        }, emulatedDuration);
      };
      const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
        const listLength = list.length;
        let index = list.indexOf(activeElement);
        if (index === -1) {
          return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
        }
        index += shouldGetNext ? 1 : -1;
        if (isCycleAllowed) {
          index = (index + listLength) % listLength;
        }
        return list[Math.max(0, Math.min(index, listLength - 1))];
      };
      exports2.defineJQueryPlugin = defineJQueryPlugin;
      exports2.execute = execute;
      exports2.executeAfterTransition = executeAfterTransition;
      exports2.findShadowRoot = findShadowRoot;
      exports2.getElement = getElement;
      exports2.getNextActiveElement = getNextActiveElement;
      exports2.getTransitionDurationFromElement = getTransitionDurationFromElement;
      exports2.getUID = getUID;
      exports2.getjQuery = getjQuery;
      exports2.isDisabled = isDisabled;
      exports2.isElement = isElement;
      exports2.isRTL = isRTL;
      exports2.isVisible = isVisible;
      exports2.noop = noop;
      exports2.onDOMContentLoaded = onDOMContentLoaded;
      exports2.parseSelector = parseSelector;
      exports2.reflow = reflow;
      exports2.toType = toType;
      exports2.triggerTransitionEnd = triggerTransitionEnd;
      Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
    });
  })(util, util.exports);
  return util.exports;
}
/*!
  * Bootstrap event-handler.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
var hasRequiredEventHandler;
function requireEventHandler() {
  if (hasRequiredEventHandler) return eventHandler.exports;
  hasRequiredEventHandler = 1;
  (function(module, exports) {
    (function(global2, factory) {
      module.exports = factory(requireUtil());
    })(commonjsGlobal, function(index_js) {
      const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
      const stripNameRegex = /\..*/;
      const stripUidRegex = /::\d+$/;
      const eventRegistry = {};
      let uidEvent = 1;
      const customEvents = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
      };
      const nativeEvents = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
      function makeEventUid(element, uid) {
        return uid && "".concat(uid, "::").concat(uidEvent++) || element.uidEvent || uidEvent++;
      }
      function getElementEvents(element) {
        const uid = makeEventUid(element);
        element.uidEvent = uid;
        eventRegistry[uid] = eventRegistry[uid] || {};
        return eventRegistry[uid];
      }
      function bootstrapHandler(element, fn) {
        return function handler(event) {
          hydrateObj(event, {
            delegateTarget: element
          });
          if (handler.oneOff) {
            EventHandler.off(element, event.type, fn);
          }
          return fn.apply(element, [event]);
        };
      }
      function bootstrapDelegationHandler(element, selector, fn) {
        return function handler(event) {
          const domElements = element.querySelectorAll(selector);
          for (let {
            target
          } = event; target && target !== this; target = target.parentNode) {
            for (const domElement of domElements) {
              if (domElement !== target) {
                continue;
              }
              hydrateObj(event, {
                delegateTarget: target
              });
              if (handler.oneOff) {
                EventHandler.off(element, event.type, selector, fn);
              }
              return fn.apply(target, [event]);
            }
          }
        };
      }
      function findHandler(events, callable, delegationSelector = null) {
        return Object.values(events).find((event) => event.callable === callable && event.delegationSelector === delegationSelector);
      }
      function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
        const isDelegated = typeof handler === "string";
        const callable = isDelegated ? delegationFunction : handler || delegationFunction;
        let typeEvent = getTypeEvent(originalTypeEvent);
        if (!nativeEvents.has(typeEvent)) {
          typeEvent = originalTypeEvent;
        }
        return [isDelegated, callable, typeEvent];
      }
      function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
        if (typeof originalTypeEvent !== "string" || !element) {
          return;
        }
        let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
        if (originalTypeEvent in customEvents) {
          const wrapFunction = (fn2) => {
            return function(event) {
              if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
                return fn2.call(this, event);
              }
            };
          };
          callable = wrapFunction(callable);
        }
        const events = getElementEvents(element);
        const handlers = events[typeEvent] || (events[typeEvent] = {});
        const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
        if (previousFunction) {
          previousFunction.oneOff = previousFunction.oneOff && oneOff;
          return;
        }
        const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
        const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
        fn.delegationSelector = isDelegated ? handler : null;
        fn.callable = callable;
        fn.oneOff = oneOff;
        fn.uidEvent = uid;
        handlers[uid] = fn;
        element.addEventListener(typeEvent, fn, isDelegated);
      }
      function removeHandler(element, events, typeEvent, handler, delegationSelector) {
        const fn = findHandler(events[typeEvent], handler, delegationSelector);
        if (!fn) {
          return;
        }
        element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
        delete events[typeEvent][fn.uidEvent];
      }
      function removeNamespacedHandlers(element, events, typeEvent, namespace) {
        const storeElementEvent = events[typeEvent] || {};
        for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
          if (handlerKey.includes(namespace)) {
            removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
          }
        }
      }
      function getTypeEvent(event) {
        event = event.replace(stripNameRegex, "");
        return customEvents[event] || event;
      }
      const EventHandler = {
        on(element, event, handler, delegationFunction) {
          addHandler(element, event, handler, delegationFunction, false);
        },
        one(element, event, handler, delegationFunction) {
          addHandler(element, event, handler, delegationFunction, true);
        },
        off(element, originalTypeEvent, handler, delegationFunction) {
          if (typeof originalTypeEvent !== "string" || !element) {
            return;
          }
          const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
          const inNamespace = typeEvent !== originalTypeEvent;
          const events = getElementEvents(element);
          const storeElementEvent = events[typeEvent] || {};
          const isNamespace = originalTypeEvent.startsWith(".");
          if (typeof callable !== "undefined") {
            if (!Object.keys(storeElementEvent).length) {
              return;
            }
            removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
            return;
          }
          if (isNamespace) {
            for (const elementEvent of Object.keys(events)) {
              removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
            }
          }
          for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
            const handlerKey = keyHandlers.replace(stripUidRegex, "");
            if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
              removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
            }
          }
        },
        trigger(element, event, args) {
          if (typeof event !== "string" || !element) {
            return null;
          }
          const $ = index_js.getjQuery();
          const typeEvent = getTypeEvent(event);
          const inNamespace = event !== typeEvent;
          let jQueryEvent = null;
          let bubbles = true;
          let nativeDispatch = true;
          let defaultPrevented = false;
          if (inNamespace && $) {
            jQueryEvent = $.Event(event, args);
            $(element).trigger(jQueryEvent);
            bubbles = !jQueryEvent.isPropagationStopped();
            nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
            defaultPrevented = jQueryEvent.isDefaultPrevented();
          }
          const evt = hydrateObj(new Event(event, {
            bubbles,
            cancelable: true
          }), args);
          if (defaultPrevented) {
            evt.preventDefault();
          }
          if (nativeDispatch) {
            element.dispatchEvent(evt);
          }
          if (evt.defaultPrevented && jQueryEvent) {
            jQueryEvent.preventDefault();
          }
          return evt;
        }
      };
      function hydrateObj(obj, meta = {}) {
        for (const [key, value] of Object.entries(meta)) {
          try {
            obj[key] = value;
          } catch (_unused) {
            Object.defineProperty(obj, key, {
              configurable: true,
              get() {
                return value;
              }
            });
          }
        }
        return obj;
      }
      return EventHandler;
    });
  })(eventHandler);
  return eventHandler.exports;
}
var config = { exports: {} };
var manipulator = { exports: {} };
/*!
  * Bootstrap manipulator.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
var hasRequiredManipulator;
function requireManipulator() {
  if (hasRequiredManipulator) return manipulator.exports;
  hasRequiredManipulator = 1;
  (function(module, exports) {
    (function(global2, factory) {
      module.exports = factory();
    })(commonjsGlobal, function() {
      function normalizeData(value) {
        if (value === "true") {
          return true;
        }
        if (value === "false") {
          return false;
        }
        if (value === Number(value).toString()) {
          return Number(value);
        }
        if (value === "" || value === "null") {
          return null;
        }
        if (typeof value !== "string") {
          return value;
        }
        try {
          return JSON.parse(decodeURIComponent(value));
        } catch (_unused) {
          return value;
        }
      }
      function normalizeDataKey(key) {
        return key.replace(/[A-Z]/g, (chr) => "-".concat(chr.toLowerCase()));
      }
      const Manipulator = {
        setDataAttribute(element, key, value) {
          element.setAttribute("data-bs-".concat(normalizeDataKey(key)), value);
        },
        removeDataAttribute(element, key) {
          element.removeAttribute("data-bs-".concat(normalizeDataKey(key)));
        },
        getDataAttributes(element) {
          if (!element) {
            return {};
          }
          const attributes = {};
          const bsKeys = Object.keys(element.dataset).filter((key) => key.startsWith("bs") && !key.startsWith("bsConfig"));
          for (const key of bsKeys) {
            let pureKey = key.replace(/^bs/, "");
            pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
            attributes[pureKey] = normalizeData(element.dataset[key]);
          }
          return attributes;
        },
        getDataAttribute(element, key) {
          return normalizeData(element.getAttribute("data-bs-".concat(normalizeDataKey(key))));
        }
      };
      return Manipulator;
    });
  })(manipulator);
  return manipulator.exports;
}
/*!
  * Bootstrap config.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
var hasRequiredConfig;
function requireConfig() {
  if (hasRequiredConfig) return config.exports;
  hasRequiredConfig = 1;
  (function(module, exports) {
    (function(global2, factory) {
      module.exports = factory(requireManipulator(), requireUtil());
    })(commonjsGlobal, function(Manipulator, index_js) {
      class Config {
        // Getters
        static get Default() {
          return {};
        }
        static get DefaultType() {
          return {};
        }
        static get NAME() {
          throw new Error('You have to implement the static method "NAME", for each component!');
        }
        _getConfig(config2) {
          config2 = this._mergeConfigObj(config2);
          config2 = this._configAfterMerge(config2);
          this._typeCheckConfig(config2);
          return config2;
        }
        _configAfterMerge(config2) {
          return config2;
        }
        _mergeConfigObj(config2, element) {
          const jsonConfig = index_js.isElement(element) ? Manipulator.getDataAttribute(element, "config") : {};
          return {
            ...this.constructor.Default,
            ...typeof jsonConfig === "object" ? jsonConfig : {},
            ...index_js.isElement(element) ? Manipulator.getDataAttributes(element) : {},
            ...typeof config2 === "object" ? config2 : {}
          };
        }
        _typeCheckConfig(config2, configTypes = this.constructor.DefaultType) {
          for (const [property, expectedTypes] of Object.entries(configTypes)) {
            const value = config2[property];
            const valueType = index_js.isElement(value) ? "element" : index_js.toType(value);
            if (!new RegExp(expectedTypes).test(valueType)) {
              throw new TypeError("".concat(this.constructor.NAME.toUpperCase(), ': Option "').concat(property, '" provided type "').concat(valueType, '" but expected type "').concat(expectedTypes, '".'));
            }
          }
        }
      }
      return Config;
    });
  })(config);
  return config.exports;
}
/*!
  * Bootstrap base-component.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
var hasRequiredBaseComponent;
function requireBaseComponent() {
  if (hasRequiredBaseComponent) return baseComponent.exports;
  hasRequiredBaseComponent = 1;
  (function(module, exports) {
    (function(global2, factory) {
      module.exports = factory(requireData(), requireEventHandler(), requireConfig(), requireUtil());
    })(commonjsGlobal, function(Data, EventHandler, Config, index_js) {
      const VERSION = "5.3.3";
      class BaseComponent extends Config {
        constructor(element, config2) {
          super();
          element = index_js.getElement(element);
          if (!element) {
            return;
          }
          this._element = element;
          this._config = this._getConfig(config2);
          Data.set(this._element, this.constructor.DATA_KEY, this);
        }
        // Public
        dispose() {
          Data.remove(this._element, this.constructor.DATA_KEY);
          EventHandler.off(this._element, this.constructor.EVENT_KEY);
          for (const propertyName of Object.getOwnPropertyNames(this)) {
            this[propertyName] = null;
          }
        }
        _queueCallback(callback, element, isAnimated = true) {
          index_js.executeAfterTransition(callback, element, isAnimated);
        }
        _getConfig(config2) {
          config2 = this._mergeConfigObj(config2, this._element);
          config2 = this._configAfterMerge(config2);
          this._typeCheckConfig(config2);
          return config2;
        }
        // Static
        static getInstance(element) {
          return Data.get(index_js.getElement(element), this.DATA_KEY);
        }
        static getOrCreateInstance(element, config2 = {}) {
          return this.getInstance(element) || new this(element, typeof config2 === "object" ? config2 : null);
        }
        static get VERSION() {
          return VERSION;
        }
        static get DATA_KEY() {
          return "bs.".concat(this.NAME);
        }
        static get EVENT_KEY() {
          return ".".concat(this.DATA_KEY);
        }
        static eventName(name) {
          return "".concat(name).concat(this.EVENT_KEY);
        }
      }
      return BaseComponent;
    });
  })(baseComponent);
  return baseComponent.exports;
}
var selectorEngine = { exports: {} };
/*!
  * Bootstrap selector-engine.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
var hasRequiredSelectorEngine;
function requireSelectorEngine() {
  if (hasRequiredSelectorEngine) return selectorEngine.exports;
  hasRequiredSelectorEngine = 1;
  (function(module, exports) {
    (function(global2, factory) {
      module.exports = factory(requireUtil());
    })(commonjsGlobal, function(index_js) {
      const getSelector = (element) => {
        let selector = element.getAttribute("data-bs-target");
        if (!selector || selector === "#") {
          let hrefAttribute = element.getAttribute("href");
          if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) {
            return null;
          }
          if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
            hrefAttribute = "#".concat(hrefAttribute.split("#")[1]);
          }
          selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
        }
        return selector ? selector.split(",").map((sel) => index_js.parseSelector(sel)).join(",") : null;
      };
      const SelectorEngine = {
        find(selector, element = document.documentElement) {
          return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
        },
        findOne(selector, element = document.documentElement) {
          return Element.prototype.querySelector.call(element, selector);
        },
        children(element, selector) {
          return [].concat(...element.children).filter((child) => child.matches(selector));
        },
        parents(element, selector) {
          const parents = [];
          let ancestor = element.parentNode.closest(selector);
          while (ancestor) {
            parents.push(ancestor);
            ancestor = ancestor.parentNode.closest(selector);
          }
          return parents;
        },
        prev(element, selector) {
          let previous = element.previousElementSibling;
          while (previous) {
            if (previous.matches(selector)) {
              return [previous];
            }
            previous = previous.previousElementSibling;
          }
          return [];
        },
        // TODO: this is now unused; remove later along with prev()
        next(element, selector) {
          let next = element.nextElementSibling;
          while (next) {
            if (next.matches(selector)) {
              return [next];
            }
            next = next.nextElementSibling;
          }
          return [];
        },
        focusableChildren(element) {
          const focusables = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((selector) => "".concat(selector, ':not([tabindex^="-"])')).join(",");
          return this.find(focusables, element).filter((el) => !index_js.isDisabled(el) && index_js.isVisible(el));
        },
        getSelectorFromElement(element) {
          const selector = getSelector(element);
          if (selector) {
            return SelectorEngine.findOne(selector) ? selector : null;
          }
          return null;
        },
        getElementFromSelector(element) {
          const selector = getSelector(element);
          return selector ? SelectorEngine.findOne(selector) : null;
        },
        getMultipleElementsFromSelector(element) {
          const selector = getSelector(element);
          return selector ? SelectorEngine.find(selector) : [];
        }
      };
      return SelectorEngine;
    });
  })(selectorEngine);
  return selectorEngine.exports;
}
var webfontloader = { exports: {} };
(function(module) {
  (function() {
    function aa(a, b, c) {
      return a.call.apply(a.bind, arguments);
    }
    function ba(a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
          var c2 = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(c2, d);
          return a.apply(b, c2);
        };
      }
      return function() {
        return a.apply(b, arguments);
      };
    }
    function p(a, b, c) {
      p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
      return p.apply(null, arguments);
    }
    var q = Date.now || function() {
      return +/* @__PURE__ */ new Date();
    };
    function ca(a, b) {
      this.a = a;
      this.o = b || a;
      this.c = this.o.document;
    }
    var da = !!window.FontFace;
    function t(a, b, c, d) {
      b = a.c.createElement(b);
      if (c) for (var e in c) c.hasOwnProperty(e) && ("style" == e ? b.style.cssText = c[e] : b.setAttribute(e, c[e]));
      d && b.appendChild(a.c.createTextNode(d));
      return b;
    }
    function u(a, b, c) {
      a = a.c.getElementsByTagName(b)[0];
      a || (a = document.documentElement);
      a.insertBefore(c, a.lastChild);
    }
    function v(a) {
      a.parentNode && a.parentNode.removeChild(a);
    }
    function w(a, b, c) {
      b = b || [];
      c = c || [];
      for (var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1) {
        for (var f = false, g = 0; g < d.length; g += 1) if (b[e] === d[g]) {
          f = true;
          break;
        }
        f || d.push(b[e]);
      }
      b = [];
      for (e = 0; e < d.length; e += 1) {
        f = false;
        for (g = 0; g < c.length; g += 1) if (d[e] === c[g]) {
          f = true;
          break;
        }
        f || b.push(d[e]);
      }
      a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
    }
    function y(a, b) {
      for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++) if (c[d] == b) return true;
      return false;
    }
    function ea(a) {
      return a.o.location.hostname || a.a.location.hostname;
    }
    function z(a, b, c) {
      function d() {
        m && e && f && (m(g), m = null);
      }
      b = t(a, "link", { rel: "stylesheet", href: b, media: "all" });
      var e = false, f = true, g = null, m = c || null;
      da ? (b.onload = function() {
        e = true;
        d();
      }, b.onerror = function() {
        e = true;
        g = Error("Stylesheet failed to load");
        d();
      }) : setTimeout(function() {
        e = true;
        d();
      }, 0);
      u(a, "head", b);
    }
    function A(a, b, c, d) {
      var e = a.c.getElementsByTagName("head")[0];
      if (e) {
        var f = t(a, "script", { src: b }), g = false;
        f.onload = f.onreadystatechange = function() {
          g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = true, c && c(null), f.onload = f.onreadystatechange = null, "HEAD" == f.parentNode.tagName && e.removeChild(f));
        };
        e.appendChild(f);
        setTimeout(function() {
          g || (g = true, c && c(Error("Script load timeout")));
        }, d || 5e3);
        return f;
      }
      return null;
    }
    function B() {
      this.a = 0;
      this.c = null;
    }
    function C(a) {
      a.a++;
      return function() {
        a.a--;
        D(a);
      };
    }
    function E(a, b) {
      a.c = b;
      D(a);
    }
    function D(a) {
      0 == a.a && a.c && (a.c(), a.c = null);
    }
    function F(a) {
      this.a = a || "-";
    }
    F.prototype.c = function(a) {
      for (var b = [], c = 0; c < arguments.length; c++) b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
      return b.join(this.a);
    };
    function G(a, b) {
      this.c = a;
      this.f = 4;
      this.a = "n";
      var c = (b || "n4").match(/^([nio])([1-9])$/i);
      c && (this.a = c[1], this.f = parseInt(c[2], 10));
    }
    function fa(a) {
      return H(a) + " " + (a.f + "00") + " 300px " + I(a.c);
    }
    function I(a) {
      var b = [];
      a = a.split(/,\s*/);
      for (var c = 0; c < a.length; c++) {
        var d = a[c].replace(/['"]/g, "");
        -1 != d.indexOf(" ") || /^\d/.test(d) ? b.push("'" + d + "'") : b.push(d);
      }
      return b.join(",");
    }
    function J(a) {
      return a.a + a.f;
    }
    function H(a) {
      var b = "normal";
      "o" === a.a ? b = "oblique" : "i" === a.a && (b = "italic");
      return b;
    }
    function ga(a) {
      var b = 4, c = "n", d = null;
      a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));
      return c + b;
    }
    function ha(a, b) {
      this.c = a;
      this.f = a.o.document.documentElement;
      this.h = b;
      this.a = new F("-");
      this.j = false !== b.events;
      this.g = false !== b.classes;
    }
    function ia(a) {
      a.g && w(a.f, [a.a.c("wf", "loading")]);
      K(a, "loading");
    }
    function L(a) {
      if (a.g) {
        var b = y(a.f, a.a.c("wf", "active")), c = [], d = [a.a.c("wf", "loading")];
        b || c.push(a.a.c("wf", "inactive"));
        w(a.f, c, d);
      }
      K(a, "inactive");
    }
    function K(a, b, c) {
      if (a.j && a.h[b]) if (c) a.h[b](c.c, J(c));
      else a.h[b]();
    }
    function ja() {
      this.c = {};
    }
    function ka(a, b, c) {
      var d = [], e;
      for (e in b) if (b.hasOwnProperty(e)) {
        var f = a.c[e];
        f && d.push(f(b[e], c));
      }
      return d;
    }
    function M(a, b) {
      this.c = a;
      this.f = b;
      this.a = t(this.c, "span", { "aria-hidden": "true" }, this.f);
    }
    function N(a) {
      u(a.c, "body", a.a);
    }
    function O(a) {
      return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + I(a.c) + ";" + ("font-style:" + H(a) + ";font-weight:" + (a.f + "00") + ";");
    }
    function P(a, b, c, d, e, f) {
      this.g = a;
      this.j = b;
      this.a = d;
      this.c = c;
      this.f = e || 3e3;
      this.h = f || void 0;
    }
    P.prototype.start = function() {
      var a = this.c.o.document, b = this, c = q(), d = new Promise(function(d2, e2) {
        function f2() {
          q() - c >= b.f ? e2() : a.fonts.load(fa(b.a), b.h).then(function(a2) {
            1 <= a2.length ? d2() : setTimeout(f2, 25);
          }, function() {
            e2();
          });
        }
        f2();
      }), e = null, f = new Promise(function(a2, d2) {
        e = setTimeout(d2, b.f);
      });
      Promise.race([f, d]).then(function() {
        e && (clearTimeout(e), e = null);
        b.g(b.a);
      }, function() {
        b.j(b.a);
      });
    };
    function Q(a, b, c, d, e, f, g) {
      this.v = a;
      this.B = b;
      this.c = c;
      this.a = d;
      this.s = g || "BESbswy";
      this.f = {};
      this.w = e || 3e3;
      this.u = f || null;
      this.m = this.j = this.h = this.g = null;
      this.g = new M(this.c, this.s);
      this.h = new M(this.c, this.s);
      this.j = new M(this.c, this.s);
      this.m = new M(this.c, this.s);
      a = new G(this.a.c + ",serif", J(this.a));
      a = O(a);
      this.g.a.style.cssText = a;
      a = new G(this.a.c + ",sans-serif", J(this.a));
      a = O(a);
      this.h.a.style.cssText = a;
      a = new G("serif", J(this.a));
      a = O(a);
      this.j.a.style.cssText = a;
      a = new G("sans-serif", J(this.a));
      a = O(a);
      this.m.a.style.cssText = a;
      N(this.g);
      N(this.h);
      N(this.j);
      N(this.m);
    }
    var R = { D: "serif", C: "sans-serif" }, S = null;
    function T() {
      if (null === S) {
        var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
        S = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10));
      }
      return S;
    }
    Q.prototype.start = function() {
      this.f.serif = this.j.a.offsetWidth;
      this.f["sans-serif"] = this.m.a.offsetWidth;
      this.A = q();
      U(this);
    };
    function la(a, b, c) {
      for (var d in R) if (R.hasOwnProperty(d) && b === a.f[R[d]] && c === a.f[R[d]]) return true;
      return false;
    }
    function U(a) {
      var b = a.g.a.offsetWidth, c = a.h.a.offsetWidth, d;
      (d = b === a.f.serif && c === a.f["sans-serif"]) || (d = T() && la(a, b, c));
      d ? q() - a.A >= a.w ? T() && la(a, b, c) && (null === a.u || a.u.hasOwnProperty(a.a.c)) ? V(a, a.v) : V(a, a.B) : ma(a) : V(a, a.v);
    }
    function ma(a) {
      setTimeout(p(function() {
        U(this);
      }, a), 50);
    }
    function V(a, b) {
      setTimeout(p(function() {
        v(this.g.a);
        v(this.h.a);
        v(this.j.a);
        v(this.m.a);
        b(this.a);
      }, a), 0);
    }
    function W(a, b, c) {
      this.c = a;
      this.a = b;
      this.f = 0;
      this.m = this.j = false;
      this.s = c;
    }
    var X = null;
    W.prototype.g = function(a) {
      var b = this.a;
      b.g && w(b.f, [b.a.c("wf", a.c, J(a).toString(), "active")], [b.a.c("wf", a.c, J(a).toString(), "loading"), b.a.c("wf", a.c, J(a).toString(), "inactive")]);
      K(b, "fontactive", a);
      this.m = true;
      na(this);
    };
    W.prototype.h = function(a) {
      var b = this.a;
      if (b.g) {
        var c = y(b.f, b.a.c("wf", a.c, J(a).toString(), "active")), d = [], e = [b.a.c("wf", a.c, J(a).toString(), "loading")];
        c || d.push(b.a.c("wf", a.c, J(a).toString(), "inactive"));
        w(b.f, d, e);
      }
      K(b, "fontinactive", a);
      na(this);
    };
    function na(a) {
      0 == --a.f && a.j && (a.m ? (a = a.a, a.g && w(a.f, [a.a.c("wf", "active")], [a.a.c("wf", "loading"), a.a.c("wf", "inactive")]), K(a, "active")) : L(a.a));
    }
    function oa(a) {
      this.j = a;
      this.a = new ja();
      this.h = 0;
      this.f = this.g = true;
    }
    oa.prototype.load = function(a) {
      this.c = new ca(this.j, a.context || this.j);
      this.g = false !== a.events;
      this.f = false !== a.classes;
      pa(this, new ha(this.c, a), a);
    };
    function qa(a, b, c, d, e) {
      var f = 0 == --a.h;
      (a.f || a.g) && setTimeout(function() {
        var a2 = e || null, m = d || null || {};
        if (0 === c.length && f) L(b.a);
        else {
          b.f += c.length;
          f && (b.j = f);
          var h, l = [];
          for (h = 0; h < c.length; h++) {
            var k = c[h], n = m[k.c], r = b.a, x = k;
            r.g && w(r.f, [r.a.c("wf", x.c, J(x).toString(), "loading")]);
            K(r, "fontloading", x);
            r = null;
            if (null === X) if (window.FontFace) {
              var x = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent), xa = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
              X = x ? 42 < parseInt(x[1], 10) : xa ? false : true;
            } else X = false;
            X ? r = new P(p(b.g, b), p(b.h, b), b.c, k, b.s, n) : r = new Q(p(b.g, b), p(b.h, b), b.c, k, b.s, a2, n);
            l.push(r);
          }
          for (h = 0; h < l.length; h++) l[h].start();
        }
      }, 0);
    }
    function pa(a, b, c) {
      var d = [], e = c.timeout;
      ia(b);
      var d = ka(a.a, c, a.c), f = new W(a.c, b, e);
      a.h = d.length;
      b = 0;
      for (c = d.length; b < c; b++) d[b].load(function(b2, d2, c2) {
        qa(a, f, b2, d2, c2);
      });
    }
    function ra(a, b) {
      this.c = a;
      this.a = b;
    }
    ra.prototype.load = function(a) {
      function b() {
        if (f["__mti_fntLst" + d]) {
          var c2 = f["__mti_fntLst" + d](), e2 = [], h;
          if (c2) for (var l = 0; l < c2.length; l++) {
            var k = c2[l].fontfamily;
            void 0 != c2[l].fontStyle && void 0 != c2[l].fontWeight ? (h = c2[l].fontStyle + c2[l].fontWeight, e2.push(new G(k, h))) : e2.push(new G(k));
          }
          a(e2);
        } else setTimeout(function() {
          b();
        }, 50);
      }
      var c = this, d = c.a.projectId, e = c.a.version;
      if (d) {
        var f = c.c.o;
        A(this.c, (c.a.api || "https://fast.fonts.net/jsapi") + "/" + d + ".js" + (e ? "?v=" + e : ""), function(e2) {
          e2 ? a([]) : (f["__MonotypeConfiguration__" + d] = function() {
            return c.a;
          }, b());
        }).id = "__MonotypeAPIScript__" + d;
      } else a([]);
    };
    function sa(a, b) {
      this.c = a;
      this.a = b;
    }
    sa.prototype.load = function(a) {
      var b, c, d = this.a.urls || [], e = this.a.families || [], f = this.a.testStrings || {}, g = new B();
      b = 0;
      for (c = d.length; b < c; b++) z(this.c, d[b], C(g));
      var m = [];
      b = 0;
      for (c = e.length; b < c; b++) if (d = e[b].split(":"), d[1]) for (var h = d[1].split(","), l = 0; l < h.length; l += 1) m.push(new G(d[0], h[l]));
      else m.push(new G(d[0]));
      E(g, function() {
        a(m, f);
      });
    };
    function ta(a, b) {
      a ? this.c = a : this.c = ua;
      this.a = [];
      this.f = [];
      this.g = b || "";
    }
    var ua = "https://fonts.googleapis.com/css";
    function va(a, b) {
      for (var c = b.length, d = 0; d < c; d++) {
        var e = b[d].split(":");
        3 == e.length && a.f.push(e.pop());
        var f = "";
        2 == e.length && "" != e[1] && (f = ":");
        a.a.push(e.join(f));
      }
    }
    function wa(a) {
      if (0 == a.a.length) throw Error("No fonts to load!");
      if (-1 != a.c.indexOf("kit=")) return a.c;
      for (var b = a.a.length, c = [], d = 0; d < b; d++) c.push(a.a[d].replace(/ /g, "+"));
      b = a.c + "?family=" + c.join("%7C");
      0 < a.f.length && (b += "&subset=" + a.f.join(","));
      0 < a.g.length && (b += "&text=" + encodeURIComponent(a.g));
      return b;
    }
    function ya(a) {
      this.f = a;
      this.a = [];
      this.c = {};
    }
    var za = { latin: "BESbswy", "latin-ext": "çöüğş", cyrillic: "йяЖ", greek: "αβΣ", khmer: "កខគ", Hanuman: "កខគ" }, Aa = { thin: "1", extralight: "2", "extra-light": "2", ultralight: "2", "ultra-light": "2", light: "3", regular: "4", book: "4", medium: "5", "semi-bold": "6", semibold: "6", "demi-bold": "6", demibold: "6", bold: "7", "extra-bold": "8", extrabold: "8", "ultra-bold": "8", ultrabold: "8", black: "9", heavy: "9", l: "3", r: "4", b: "7" }, Ba = { i: "i", italic: "i", n: "n", normal: "n" }, Ca = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
    function Da(a) {
      for (var b = a.f.length, c = 0; c < b; c++) {
        var d = a.f[c].split(":"), e = d[0].replace(/\+/g, " "), f = ["n4"];
        if (2 <= d.length) {
          var g;
          var m = d[1];
          g = [];
          if (m) for (var m = m.split(","), h = m.length, l = 0; l < h; l++) {
            var k;
            k = m[l];
            if (k.match(/^[\w-]+$/)) {
              var n = Ca.exec(k.toLowerCase());
              if (null == n) k = "";
              else {
                k = n[2];
                k = null == k || "" == k ? "n" : Ba[k];
                n = n[1];
                if (null == n || "" == n) n = "4";
                else var r = Aa[n], n = r ? r : isNaN(n) ? "4" : n.substr(0, 1);
                k = [k, n].join("");
              }
            } else k = "";
            k && g.push(k);
          }
          0 < g.length && (f = g);
          3 == d.length && (d = d[2], g = [], d = d ? d.split(",") : g, 0 < d.length && (d = za[d[0]]) && (a.c[e] = d));
        }
        a.c[e] || (d = za[e]) && (a.c[e] = d);
        for (d = 0; d < f.length; d += 1) a.a.push(new G(e, f[d]));
      }
    }
    function Ea(a, b) {
      this.c = a;
      this.a = b;
    }
    var Fa = { Arimo: true, Cousine: true, Tinos: true };
    Ea.prototype.load = function(a) {
      var b = new B(), c = this.c, d = new ta(this.a.api, this.a.text), e = this.a.families;
      va(d, e);
      var f = new ya(e);
      Da(f);
      z(c, wa(d), C(b));
      E(b, function() {
        a(f.a, f.c, Fa);
      });
    };
    function Ga(a, b) {
      this.c = a;
      this.a = b;
    }
    Ga.prototype.load = function(a) {
      var b = this.a.id, c = this.c.o;
      b ? A(this.c, (this.a.api || "https://use.typekit.net") + "/" + b + ".js", function(b2) {
        if (b2) a([]);
        else if (c.Typekit && c.Typekit.config && c.Typekit.config.fn) {
          b2 = c.Typekit.config.fn;
          for (var e = [], f = 0; f < b2.length; f += 2) for (var g = b2[f], m = b2[f + 1], h = 0; h < m.length; h++) e.push(new G(g, m[h]));
          try {
            c.Typekit.load({ events: false, classes: false, async: true });
          } catch (l) {
          }
          a(e);
        }
      }, 2e3) : a([]);
    };
    function Ha(a, b) {
      this.c = a;
      this.f = b;
      this.a = [];
    }
    Ha.prototype.load = function(a) {
      var b = this.f.id, c = this.c.o, d = this;
      b ? (c.__webfontfontdeckmodule__ || (c.__webfontfontdeckmodule__ = {}), c.__webfontfontdeckmodule__[b] = function(b2, c2) {
        for (var g = 0, m = c2.fonts.length; g < m; ++g) {
          var h = c2.fonts[g];
          d.a.push(new G(h.name, ga("font-weight:" + h.weight + ";font-style:" + h.style)));
        }
        a(d.a);
      }, A(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + ea(this.c) + "/" + b + ".js", function(b2) {
        b2 && a([]);
      })) : a([]);
    };
    var Y = new oa(window);
    Y.a.c.custom = function(a, b) {
      return new sa(b, a);
    };
    Y.a.c.fontdeck = function(a, b) {
      return new Ha(b, a);
    };
    Y.a.c.monotype = function(a, b) {
      return new ra(b, a);
    };
    Y.a.c.typekit = function(a, b) {
      return new Ga(b, a);
    };
    Y.a.c.google = function(a, b) {
      return new Ea(b, a);
    };
    var Z = { load: p(Y.load, Y) };
    module.exports ? module.exports = Z : (window.WebFont = Z, window.WebFontConfig && Y.load(window.WebFontConfig));
  })();
})(webfontloader);
var webfontloaderExports = webfontloader.exports;
var collapse = { exports: {} };
/*!
  * Bootstrap collapse.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(module, exports) {
  (function(global2, factory) {
    module.exports = factory(requireBaseComponent(), requireEventHandler(), requireSelectorEngine(), requireUtil());
  })(commonjsGlobal, function(BaseComponent, EventHandler, SelectorEngine, index_js) {
    const NAME = "collapse";
    const DATA_KEY = "bs.collapse";
    const EVENT_KEY = ".".concat(DATA_KEY);
    const DATA_API_KEY = ".data-api";
    const EVENT_SHOW = "show".concat(EVENT_KEY);
    const EVENT_SHOWN = "shown".concat(EVENT_KEY);
    const EVENT_HIDE = "hide".concat(EVENT_KEY);
    const EVENT_HIDDEN = "hidden".concat(EVENT_KEY);
    const EVENT_CLICK_DATA_API = "click".concat(EVENT_KEY).concat(DATA_API_KEY);
    const CLASS_NAME_SHOW = "show";
    const CLASS_NAME_COLLAPSE = "collapse";
    const CLASS_NAME_COLLAPSING = "collapsing";
    const CLASS_NAME_COLLAPSED = "collapsed";
    const CLASS_NAME_DEEPER_CHILDREN = ":scope .".concat(CLASS_NAME_COLLAPSE, " .").concat(CLASS_NAME_COLLAPSE);
    const CLASS_NAME_HORIZONTAL = "collapse-horizontal";
    const WIDTH = "width";
    const HEIGHT = "height";
    const SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
    const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="collapse"]';
    const Default = {
      parent: null,
      toggle: true
    };
    const DefaultType = {
      parent: "(null|element)",
      toggle: "boolean"
    };
    class Collapse extends BaseComponent {
      constructor(element, config2) {
        super(element, config2);
        this._isTransitioning = false;
        this._triggerArray = [];
        const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE);
        for (const elem of toggleList) {
          const selector = SelectorEngine.getSelectorFromElement(elem);
          const filterElement = SelectorEngine.find(selector).filter((foundElement) => foundElement === this._element);
          if (selector !== null && filterElement.length) {
            this._triggerArray.push(elem);
          }
        }
        this._initializeChildren();
        if (!this._config.parent) {
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
        }
        if (this._config.toggle) {
          this.toggle();
        }
      }
      // Getters
      static get Default() {
        return Default;
      }
      static get DefaultType() {
        return DefaultType;
      }
      static get NAME() {
        return NAME;
      }
      // Public
      toggle() {
        if (this._isShown()) {
          this.hide();
        } else {
          this.show();
        }
      }
      show() {
        if (this._isTransitioning || this._isShown()) {
          return;
        }
        let activeChildren = [];
        if (this._config.parent) {
          activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element) => element !== this._element).map((element) => Collapse.getOrCreateInstance(element, {
            toggle: false
          }));
        }
        if (activeChildren.length && activeChildren[0]._isTransitioning) {
          return;
        }
        const startEvent = EventHandler.trigger(this._element, EVENT_SHOW);
        if (startEvent.defaultPrevented) {
          return;
        }
        for (const activeInstance of activeChildren) {
          activeInstance.hide();
        }
        const dimension = this._getDimension();
        this._element.classList.remove(CLASS_NAME_COLLAPSE);
        this._element.classList.add(CLASS_NAME_COLLAPSING);
        this._element.style[dimension] = 0;
        this._addAriaAndCollapsedClass(this._triggerArray, true);
        this._isTransitioning = true;
        const complete = () => {
          this._isTransitioning = false;
          this._element.classList.remove(CLASS_NAME_COLLAPSING);
          this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);
          this._element.style[dimension] = "";
          EventHandler.trigger(this._element, EVENT_SHOWN);
        };
        const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        const scrollSize = "scroll".concat(capitalizedDimension);
        this._queueCallback(complete, this._element, true);
        this._element.style[dimension] = "".concat(this._element[scrollSize], "px");
      }
      hide() {
        if (this._isTransitioning || !this._isShown()) {
          return;
        }
        const startEvent = EventHandler.trigger(this._element, EVENT_HIDE);
        if (startEvent.defaultPrevented) {
          return;
        }
        const dimension = this._getDimension();
        this._element.style[dimension] = "".concat(this._element.getBoundingClientRect()[dimension], "px");
        index_js.reflow(this._element);
        this._element.classList.add(CLASS_NAME_COLLAPSING);
        this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);
        for (const trigger of this._triggerArray) {
          const element = SelectorEngine.getElementFromSelector(trigger);
          if (element && !this._isShown(element)) {
            this._addAriaAndCollapsedClass([trigger], false);
          }
        }
        this._isTransitioning = true;
        const complete = () => {
          this._isTransitioning = false;
          this._element.classList.remove(CLASS_NAME_COLLAPSING);
          this._element.classList.add(CLASS_NAME_COLLAPSE);
          EventHandler.trigger(this._element, EVENT_HIDDEN);
        };
        this._element.style[dimension] = "";
        this._queueCallback(complete, this._element, true);
      }
      _isShown(element = this._element) {
        return element.classList.contains(CLASS_NAME_SHOW);
      }
      // Private
      _configAfterMerge(config2) {
        config2.toggle = Boolean(config2.toggle);
        config2.parent = index_js.getElement(config2.parent);
        return config2;
      }
      _getDimension() {
        return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
      }
      _initializeChildren() {
        if (!this._config.parent) {
          return;
        }
        const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE);
        for (const element of children) {
          const selected = SelectorEngine.getElementFromSelector(element);
          if (selected) {
            this._addAriaAndCollapsedClass([element], this._isShown(selected));
          }
        }
      }
      _getFirstLevelChildren(selector) {
        const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
        return SelectorEngine.find(selector, this._config.parent).filter((element) => !children.includes(element));
      }
      _addAriaAndCollapsedClass(triggerArray, isOpen) {
        if (!triggerArray.length) {
          return;
        }
        for (const element of triggerArray) {
          element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
          element.setAttribute("aria-expanded", isOpen);
        }
      }
      // Static
      static jQueryInterface(config2) {
        const _config = {};
        if (typeof config2 === "string" && /show|hide/.test(config2)) {
          _config.toggle = false;
        }
        return this.each(function() {
          const data2 = Collapse.getOrCreateInstance(this, _config);
          if (typeof config2 === "string") {
            if (typeof data2[config2] === "undefined") {
              throw new TypeError('No method named "'.concat(config2, '"'));
            }
            data2[config2]();
          }
        });
      }
    }
    EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
      if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") {
        event.preventDefault();
      }
      for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) {
        Collapse.getOrCreateInstance(element, {
          toggle: false
        }).toggle();
      }
    });
    index_js.defineJQueryPlugin(Collapse);
    return Collapse;
  });
})(collapse);
const lei3Po8h = ["support", ["tuna", "tsinghua", "edu", "cn"].join(".")].join("@");
Array.from(document.querySelectorAll("a.eib1gieB")).forEach((el) => {
  el.textContent = lei3Po8h;
  el["href"] = ["ma", "ilto:"].join("i") + lei3Po8h;
});
webfontloaderExports.load({
  custom: {
    families: ["Lato", "Source Code Pro"]
  }
});
export {
  __vite_legacy_guard,
  requireConfig as a,
  requireUtil as b,
  commonjsGlobal as c,
  requireBaseComponent as d,
  requireEventHandler as e,
  requireManipulator as f,
  getAugmentedNamespace as g,
  getDefaultExportFromCjs as h,
  requireSelectorEngine as r
};
//# sourceMappingURL=default-NUifn3ep.js.map
