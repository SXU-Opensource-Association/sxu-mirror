"use strict";

const exports = {};
export default exports;
exports.legacyIndexRender = legacyIndexRender;
import _markup from "./markup.njs";
var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$9 =
// eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) ||
// eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof _markup.c == 'object' && _markup.c) || check(typeof _markup.c == 'object' && _markup.c) ||
// eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();
var objectGetOwnPropertyDescriptor = {};
var fails$8 = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};
var fails$7 = fails$8;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$7(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] !== 7;
});
var fails$6 = fails$8;
var functionBindNative = !fails$6(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = function () {/* empty */}.bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});
var NATIVE_BIND$2 = functionBindNative;
var call$7 = Function.prototype.call;
var functionCall = NATIVE_BIND$2 ? call$7.bind(call$7) : function () {
  return call$7.apply(call$7, arguments);
};
var objectPropertyIsEnumerable = {};
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({
  1: 2
}, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;
var createPropertyDescriptor$3 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};
var NATIVE_BIND$1 = functionBindNative;
var FunctionPrototype$1 = Function.prototype;
var call$6 = FunctionPrototype$1.call;
var uncurryThisWithBind = NATIVE_BIND$1 && FunctionPrototype$1.bind.bind(call$6, call$6);
var functionUncurryThis = NATIVE_BIND$1 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$6.apply(fn, arguments);
  };
};
var uncurryThis$a = functionUncurryThis;
var toString$1 = uncurryThis$a({}.toString);
var stringSlice$1 = uncurryThis$a(''.slice);
var classofRaw$2 = function (it) {
  return stringSlice$1(toString$1(it), 8, -1);
};
var uncurryThis$9 = functionUncurryThis;
var fails$5 = fails$8;
var classof$2 = classofRaw$2;
var $Object$3 = Object;
var split = uncurryThis$9(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$5(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$3('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$2(it) === 'String' ? split(it, '') : $Object$3(it);
} : $Object$3;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$3 = function (it) {
  return it === null || it === undefined;
};
var isNullOrUndefined$2 = isNullOrUndefined$3;
var $TypeError$7 = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$2 = function (it) {
  if (isNullOrUndefined$2(it)) throw new $TypeError$7("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = indexedObject;
var requireObjectCoercible$1 = requireObjectCoercible$2;
var toIndexedObject$3 = function (it) {
  return IndexedObject(requireObjectCoercible$1(it));
};

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var isCallable$b = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};
var isCallable$a = isCallable$b;
var isObject$5 = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$a(it);
};
var global$8 = global$9;
var isCallable$9 = isCallable$b;
var aFunction = function (argument) {
  return isCallable$9(argument) ? argument : undefined;
};
var getBuiltIn$2 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$8[namespace]) : global$8[namespace] && global$8[namespace][method];
};
var uncurryThis$8 = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$8({}.isPrototypeOf);
var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';
var global$7 = global$9;
var userAgent = engineUserAgent;
var process = global$7.process;
var Deno = global$7.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}
var engineV8Version = version;

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = engineV8Version;
var fails$4 = fails$8;
var global$6 = global$9;
var $String$3 = global$6.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$4(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String$3(symbol) || !(Object(symbol) instanceof Symbol) ||
  // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$1 = symbolConstructorDetection;
var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == 'symbol';
var getBuiltIn$1 = getBuiltIn$2;
var isCallable$8 = isCallable$b;
var isPrototypeOf$1 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var $Object$2 = Object;
var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$1('Symbol');
  return isCallable$8($Symbol) && isPrototypeOf$1($Symbol.prototype, $Object$2(it));
};
var $String$2 = String;
var tryToString$3 = function (argument) {
  try {
    return $String$2(argument);
  } catch (error) {
    return 'Object';
  }
};
var isCallable$7 = isCallable$b;
var tryToString$2 = tryToString$3;
var $TypeError$6 = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$3 = function (argument) {
  if (isCallable$7(argument)) return argument;
  throw new $TypeError$6(tryToString$2(argument) + ' is not a function');
};
var aCallable$2 = aCallable$3;
var isNullOrUndefined$1 = isNullOrUndefined$3;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$3 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$1(func) ? undefined : aCallable$2(func);
};
var call$5 = functionCall;
var isCallable$6 = isCallable$b;
var isObject$4 = isObject$5;
var $TypeError$5 = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$6(fn = input.toString) && !isObject$4(val = call$5(fn, input))) return val;
  if (isCallable$6(fn = input.valueOf) && !isObject$4(val = call$5(fn, input))) return val;
  if (pref !== 'string' && isCallable$6(fn = input.toString) && !isObject$4(val = call$5(fn, input))) return val;
  throw new $TypeError$5("Can't convert object to primitive value");
};
var sharedStore = {
  exports: {}
};
var global$5 = global$9;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$1 = Object.defineProperty;
var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$1(global$5, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global$5[key] = value;
  }
  return value;
};
var globalThis$1 = global$9;
var defineGlobalProperty$2 = defineGlobalProperty$3;
var SHARED = '__core-js_shared__';
var store$3 = sharedStore.exports = globalThis$1[SHARED] || defineGlobalProperty$2(SHARED, {});
(store$3.versions || (store$3.versions = [])).push({
  version: '3.37.1',
  mode: 'global',
  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});
var sharedStoreExports = sharedStore.exports;
var store$2 = sharedStoreExports;
var shared$3 = function (key, value) {
  return store$2[key] || (store$2[key] = value || {});
};
var requireObjectCoercible = requireObjectCoercible$2;
var $Object$1 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$1 = function (argument) {
  return $Object$1(requireObjectCoercible(argument));
};
var uncurryThis$7 = functionUncurryThis;
var toObject = toObject$1;
var hasOwnProperty = uncurryThis$7({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};
var uncurryThis$6 = functionUncurryThis;
var id = 0;
var postfix = Math.random();
var toString = uncurryThis$6(1.0.toString);
var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};
var global$4 = global$9;
var shared$2 = shared$3;
var hasOwn$6 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var Symbol$1 = global$4.Symbol;
var WellKnownSymbolsStore = shared$2('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;
var wellKnownSymbol$5 = function (name) {
  if (!hasOwn$6(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$6(Symbol$1, name) ? Symbol$1[name] : createWellKnownSymbol('Symbol.' + name);
  }
  return WellKnownSymbolsStore[name];
};
var call$4 = functionCall;
var isObject$3 = isObject$5;
var isSymbol$1 = isSymbol$2;
var getMethod$2 = getMethod$3;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$4 = wellKnownSymbol$5;
var $TypeError$4 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$4('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$3(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$4(exoticToPrim, input, pref);
    if (!isObject$3(result) || isSymbol$1(result)) return result;
    throw new $TypeError$4("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};
var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$2 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};
var global$3 = global$9;
var isObject$2 = isObject$5;
var document$1 = global$3.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$2(document$1) && isObject$2(document$1.createElement);
var documentCreateElement = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};
var DESCRIPTORS$7 = descriptors;
var fails$3 = fails$8;
var createElement = documentCreateElement;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$7 && !fails$3(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a !== 7;
});
var DESCRIPTORS$6 = descriptors;
var call$3 = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;
var toIndexedObject$2 = toIndexedObject$3;
var toPropertyKey$1 = toPropertyKey$2;
var hasOwn$5 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$6 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$2(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) {/* empty */}
  if (hasOwn$5(O, P)) return createPropertyDescriptor$2(!call$3(propertyIsEnumerableModule.f, O, P), O[P]);
};
var objectDefineProperty = {};
var DESCRIPTORS$5 = descriptors;
var fails$2 = fails$8;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$5 && fails$2(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () {/* empty */}, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});
var isObject$1 = isObject$5;
var $String$1 = String;
var $TypeError$3 = TypeError;

// `Assert: Type(argument) is Object`
var anObject$5 = function (argument) {
  if (isObject$1(argument)) return argument;
  throw new $TypeError$3($String$1(argument) + ' is not an object');
};
var DESCRIPTORS$4 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var anObject$4 = anObject$5;
var toPropertyKey = toPropertyKey$2;
var $TypeError$2 = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$4 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject$4(O);
  P = toPropertyKey(P);
  anObject$4(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  }
  return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$4(O);
  P = toPropertyKey(P);
  anObject$4(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$2('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};
var DESCRIPTORS$3 = descriptors;
var definePropertyModule$3 = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;
var createNonEnumerableProperty$2 = DESCRIPTORS$3 ? function (object, key, value) {
  return definePropertyModule$3.f(object, key, createPropertyDescriptor$1(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};
var makeBuiltIn$2 = {
  exports: {}
};
var DESCRIPTORS$2 = descriptors;
var hasOwn$4 = hasOwnProperty_1;
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$2 && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$4(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && function something() {/* empty */}.name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$2 || DESCRIPTORS$2 && getDescriptor(FunctionPrototype, 'name').configurable);
var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};
var uncurryThis$5 = functionUncurryThis;
var isCallable$5 = isCallable$b;
var store$1 = sharedStoreExports;
var functionToString = uncurryThis$5(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$5(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}
var inspectSource$1 = store$1.inspectSource;
var global$2 = global$9;
var isCallable$4 = isCallable$b;
var WeakMap$1 = global$2.WeakMap;
var weakMapBasicDetection = isCallable$4(WeakMap$1) && /native code/.test(String(WeakMap$1));
var shared$1 = shared$3;
var uid = uid$2;
var keys = shared$1('keys');
var sharedKey$1 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};
var hiddenKeys$3 = {};
var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$1 = global$9;
var isObject = isObject$5;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$2;
var hasOwn$3 = hasOwnProperty_1;
var shared = sharedStoreExports;
var sharedKey = sharedKey$1;
var hiddenKeys$2 = hiddenKeys$3;
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$1 = global$1.TypeError;
var WeakMap = global$1.WeakMap;
var set, get, has;
var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};
var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError$1('Incompatible receiver, ' + TYPE + ' required');
    }
    return state;
  };
};
if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys$2[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn$3(it, STATE)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$1(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$3(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$3(it, STATE);
  };
}
var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};
var uncurryThis$4 = functionUncurryThis;
var fails$1 = fails$8;
var isCallable$3 = isCallable$b;
var hasOwn$2 = hasOwnProperty_1;
var DESCRIPTORS$1 = descriptors;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var inspectSource = inspectSource$1;
var InternalStateModule = internalState;
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis$4(''.slice);
var replace = uncurryThis$4(''.replace);
var join = uncurryThis$4([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS$1 && !fails$1(function () {
  return defineProperty(function () {/* empty */}, 'length', {
    value: 8
  }).length !== 8;
});
var TEMPLATE = String(String).split('String');
var makeBuiltIn$1 = makeBuiltIn$2.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$2(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
    if (DESCRIPTORS$1) defineProperty(value, 'name', {
      value: name,
      configurable: true
    });else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$2(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', {
      value: options.arity
    });
  }
  try {
    if (options && hasOwn$2(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$1) defineProperty(value, 'prototype', {
        writable: false
      });
      // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) {/* empty */}
  var state = enforceInternalState(value);
  if (!hasOwn$2(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  }
  return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$1(function toString() {
  return isCallable$3(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');
var makeBuiltInExports = makeBuiltIn$2.exports;
var isCallable$2 = isCallable$b;
var definePropertyModule$2 = objectDefineProperty;
var makeBuiltIn = makeBuiltInExports;
var defineGlobalProperty$1 = defineGlobalProperty$3;
var defineBuiltIn$1 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$2(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;else defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];else if (O[key]) simple = true;
    } catch (error) {/* empty */}
    if (simple) O[key] = value;else definePropertyModule$2.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  }
  return O;
};
var objectGetOwnPropertyNames = {};
var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};
var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$2 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};
var toIntegerOrInfinity$1 = toIntegerOrInfinity$2;
var max = Math.max;
var min$1 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$1 = function (index, length) {
  var integer = toIntegerOrInfinity$1(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};
var toIntegerOrInfinity = toIntegerOrInfinity$2;
var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$1 = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};
var toLength = toLength$1;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$2 = function (obj) {
  return toLength(obj.length);
};
var toIndexedObject$1 = toIndexedObject$3;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike$1 = lengthOfArrayLike$2;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$1($this);
    var length = lengthOfArrayLike$1(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
      // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};
var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};
var uncurryThis$3 = functionUncurryThis;
var hasOwn$1 = hasOwnProperty_1;
var toIndexedObject = toIndexedObject$3;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$1 = hiddenKeys$3;
var push = uncurryThis$3([].push);
var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$1(hiddenKeys$1, key) && hasOwn$1(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$1(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$1 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$1;
var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};
var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;
var getBuiltIn = getBuiltIn$2;
var uncurryThis$2 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject$3 = anObject$5;
var concat = uncurryThis$2([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$3(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};
var hasOwn = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$1 = objectDefineProperty;
var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$1.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};
var fails = fails$8;
var isCallable$1 = isCallable$b;
var replacement = /#|\.prototype\./;
var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true : value === NATIVE ? false : isCallable$1(detection) ? fails(detection) : !!detection;
};
var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};
var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';
var isForced_1 = isForced$1;
var global = global$9;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty = createNonEnumerableProperty$2;
var defineBuiltIn = defineBuiltIn$1;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced = isForced_1;

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = global[TARGET] && global[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};
var classofRaw$1 = classofRaw$2;
var uncurryThis$1 = functionUncurryThis;
var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw$1(fn) === 'Function') return uncurryThis$1(fn);
};
var uncurryThis = functionUncurryThisClause;
var aCallable$1 = aCallable$3;
var NATIVE_BIND = functionBindNative;
var bind$1 = uncurryThis(uncurryThis.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$1(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind$1(fn, that) : function /* ...args */
  () {
    return fn.apply(that, arguments);
  };
};
var iterators = {};
var wellKnownSymbol$3 = wellKnownSymbol$5;
var Iterators$1 = iterators;
var ITERATOR$1 = wellKnownSymbol$3('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$1 = function (it) {
  return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$1] === it);
};
var wellKnownSymbol$2 = wellKnownSymbol$5;
var TO_STRING_TAG$1 = wellKnownSymbol$2('toStringTag');
var test = {};
test[TO_STRING_TAG$1] = 'z';
var toStringTagSupport = String(test) === '[object z]';
var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable = isCallable$b;
var classofRaw = classofRaw$2;
var wellKnownSymbol$1 = wellKnownSymbol$5;
var TO_STRING_TAG = wellKnownSymbol$1('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {/* empty */}
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$1 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
  // @@toStringTag case
  : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
  // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O)
  // ES3 arguments fallback
  : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};
var classof = classof$1;
var getMethod$1 = getMethod$3;
var isNullOrUndefined = isNullOrUndefined$3;
var Iterators = iterators;
var wellKnownSymbol = wellKnownSymbol$5;
var ITERATOR = wellKnownSymbol('iterator');
var getIteratorMethod$2 = function (it) {
  if (!isNullOrUndefined(it)) return getMethod$1(it, ITERATOR) || getMethod$1(it, '@@iterator') || Iterators[classof(it)];
};
var call$2 = functionCall;
var aCallable = aCallable$3;
var anObject$2 = anObject$5;
var tryToString$1 = tryToString$3;
var getIteratorMethod$1 = getIteratorMethod$2;
var $TypeError$1 = TypeError;
var getIterator$1 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject$2(call$2(iteratorMethod, argument));
  throw new $TypeError$1(tryToString$1(argument) + ' is not iterable');
};
var call$1 = functionCall;
var anObject$1 = anObject$5;
var getMethod = getMethod$3;
var iteratorClose$1 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$1(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call$1(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$1(innerResult);
  return value;
};
var bind = functionBindContext;
var call = functionCall;
var anObject = anObject$5;
var tryToString = tryToString$3;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var lengthOfArrayLike = lengthOfArrayLike$2;
var isPrototypeOf = objectIsPrototypeOf;
var getIterator = getIterator$1;
var getIteratorMethod = getIteratorMethod$2;
var iteratorClose = iteratorClose$1;
var $TypeError = TypeError;
var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};
var ResultPrototype = Result.prototype;
var iterate$1 = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;
  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };
  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    }
    return INTERRUPTED ? fn(value, stop) : fn(value);
  };
  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      }
      return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }
  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  }
  return new Result(false);
};
var DESCRIPTORS = descriptors;
var definePropertyModule = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$3;
var createProperty$1 = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));else object[key] = value;
};
var $ = _export;
var iterate = iterate$1;
var createProperty = createProperty$1;

// `Object.fromEntries` method
// https://github.com/tc39/proposal-object-from-entries
$({
  target: 'Object',
  stat: true
}, {
  fromEntries: function fromEntries(iterable) {
    var obj = {};
    iterate(iterable, function (k, v) {
      createProperty(obj, k, v);
    }, {
      AS_ENTRIES: true
    });
    return obj;
  }
});
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
var register = function (locale, func) {
  Locales[locale] = func;
};
/**
 * get a locale, default is en_US
 * @param locale
 * @returns {*}
 */
var getLocale = function (locale) {
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
var format = function (date, locale, opts) {
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
  const label_map = globalOptions.label_map;
  const new_mirrors = Object.fromEntries(globalOptions.new_mirrors.map(x => [x, true]));
  const unlisted = globalOptions.unlisted_mirrors;
  const forceHelp = Object.fromEntries(globalOptions.force_redirect_help_mirrors.map(m => [m, true]));
  const descriptions = Object.fromEntries(globalOptions.mirror_desc.map(m => [m.name, m.desc]));
  const processLinkItem = mirrors => {
    var processed = [];
    for (let _i = 0; _i < mirrors.length; _i++) {
      let d = mirrors[_i];
      if (d.link_to === undefined) {
        processed.push(d);
        continue;
      }
      for (let _i2 = 0; _i2 < mirrors.length; _i2++) {
        const target = mirrors[_i2];
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
    }
    return processed;
  };
  const stringifyTime = ts => {
    const date = new Date(ts * 1000);
    let str = "";
    let ago = "";
    if (date.getFullYear() > 2000) {
      str = `${("000" + date.getFullYear()).slice(-4)}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}` + ` ${("0" + date.getHours()).slice(-2)}:${("0" + date.getMinutes()).slice(-2)}`;
      ago = format(date);
    } else {
      str = "0000-00-00 00:00";
      ago = "Never";
    }
    return [str, ago];
  };
  const processMirrorItem = d => {
    if (d.is_master === undefined) {
      d.is_master = true;
    }
    if (d.link_to !== undefined) {
      return d;
    }
    d.label = label_map[d.status];
    d.show_status = d.status !== "success";
    // Strip the second component of last_update
    var _stringifyTime = stringifyTime(d.last_update_ts);
    d.last_update = _stringifyTime[0];
    d.last_update_ago = _stringifyTime[1];
    var _stringifyTime2 = stringifyTime(d.last_ended_ts);
    d.last_ended = _stringifyTime2[0];
    d.last_ended_ago = _stringifyTime2[1];
    var _stringifyTime3 = stringifyTime(d.last_started_ts);
    d.last_started = _stringifyTime3[0];
    d.last_started_ago = _stringifyTime3[1];
    var _stringifyTime4 = stringifyTime(d.next_schedule_ts);
    d.next_schedule = _stringifyTime4[0];
    d.next_schedule_ago = _stringifyTime4[1];
    return d;
  };
  const sortAndUniqMirrors = mirs => {
    mirs.sort((a, b) => {
      return a.name < b.name ? -1 : 1;
    });
    return mirs.reduce((acc, cur) => {
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
  const postProcessStatusData = (status_data, additional) => {
    const processed = status_data.concat(additional).map(d => processMirrorItem(d));
    return sortAndUniqMirrors(processLinkItem(processed));
  };
  const genMainMirrorList = (status_data, helpPages) => {
    return status_data.filter(d => !(d.status == "disabled")).map(d => Object.assign(Object.assign({}, d), {}, {
      url: forceHelp[d.name] ? helpPages[d.name] : d.url ?? `/${d.name}/`,
      help_url: helpPages[d.name],
      is_new: Boolean(new_mirrors[d.name]),
      description: descriptions[d.name],
      github_release: d.url && d.url.startsWith("/github-release/")
    }));
  };
  return {
    postProcessStatusData,
    unlistedMirrors: unlisted,
    genMainMirrorList
  };
}
const TUNASYNC_JSON_PATH = "/static/tunasync.json";
function legacyIndexRender(r) {
  r.subrequest("/legacy_index.html", {
    args: "",
    body: "",
    method: "GET"
  }, function (rTmpl) {
    if (rTmpl.status != 200) {
      return r.return(rTmpl.status);
    }
    var tmpl = rTmpl.responseText;
    r.subrequest("/static/njs/options.json", {
      args: "",
      body: "",
      method: "GET"
    }, function (rOpt) {
      if (rOpt.status != 200) {
        return r.return(rOpt.status);
      }
      let global_options;
      try {
        global_options = JSON.parse(rOpt.responseText);
      } catch (e) {
        return r.return(500);
      }
      const _processingHandlers = processingHandlers(global_options.options),
        unlisted = _processingHandlers.unlistedMirrors,
        genMainMirrorList = _processingHandlers.genMainMirrorList,
        postProcessStatusData = _processingHandlers.postProcessStatusData;
      const help_url = Object.fromEntries(global_options.helps.map(h => [h.mirrorid, h.url]));
      r.subrequest(TUNASYNC_JSON_PATH, {
        args: "",
        body: "",
        method: "GET"
      }, function (rMirs) {
        let mirs = [];
        if (rMirs.status == 200) {
          try {
            mirs = JSON.parse(rMirs.responseText);
          } catch (e) {}
        }
        const renMirs = genMainMirrorList(postProcessStatusData(mirs, unlisted), help_url);
        var result = _markup.M.up(tmpl, {
          mirs: renMirs
        });
        r.status = 200;
        r.headersOut["Content-Type"] = "text/html";
        r.sendHeader();
        r.send(result);
        r.finish();
      });
    });
  });
}
//# sourceMappingURL=legacy_index.njs.map
