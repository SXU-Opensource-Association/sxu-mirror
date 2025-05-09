(function () {
  'use strict';

  /**
   * @this {Promise}
   */
  function finallyConstructor(callback) {
    var constructor = this.constructor;
    return this.then(function (value) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function () {
        // @ts-ignore
        return constructor.reject(reason);
      });
    });
  }
  function allSettled(arr) {
    var P = this;
    return new P(function (resolve, reject) {
      if (!(arr && typeof arr.length !== 'undefined')) {
        return reject(new TypeError(typeof arr + ' ' + arr + ' is not iterable(cannot read property Symbol(Symbol.iterator))'));
      }
      var args = Array.prototype.slice.call(arr);
      if (args.length === 0) return resolve([]);
      var remaining = args.length;
      function res(i, val) {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(val, function (val) {
              res(i, val);
            }, function (e) {
              args[i] = {
                status: 'rejected',
                reason: e
              };
              if (--remaining === 0) {
                resolve(args);
              }
            });
            return;
          }
        }
        args[i] = {
          status: 'fulfilled',
          value: val
        };
        if (--remaining === 0) {
          resolve(args);
        }
      }
      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  }

  /**
   * @constructor
   */
  function AggregateError(errors, message) {
    this.name = 'AggregateError', this.errors = errors;
    this.message = message || '';
  }
  AggregateError.prototype = Error.prototype;
  function any(arr) {
    var P = this;
    return new P(function (resolve, reject) {
      if (!(arr && typeof arr.length !== 'undefined')) {
        return reject(new TypeError('Promise.any accepts an array'));
      }
      var args = Array.prototype.slice.call(arr);
      if (args.length === 0) return reject();
      var rejectionReasons = [];
      for (var i = 0; i < args.length; i++) {
        try {
          P.resolve(args[i]).then(resolve)["catch"](function (error) {
            rejectionReasons.push(error);
            if (rejectionReasons.length === args.length) {
              reject(new AggregateError(rejectionReasons, 'All promises were rejected'));
            }
          });
        } catch (ex) {
          reject(ex);
        }
      }
    });
  }

  // Store setTimeout reference so promise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var setTimeoutFunc = setTimeout;
  function isArray$a(x) {
    return Boolean(x && typeof x.length !== 'undefined');
  }
  function noop$1() {}

  // Polyfill for Function.prototype.bind
  function bind$c(fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments);
    };
  }

  /**
   * @constructor
   * @param {Function} fn
   */
  function Promise$2(fn) {
    if (!(this instanceof Promise$2)) throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    /** @type {!number} */
    this._state = 0;
    /** @type {!boolean} */
    this._handled = false;
    /** @type {Promise|undefined} */
    this._value = undefined;
    /** @type {!Array<!Function>} */
    this._deferreds = [];
    doResolve(fn, this);
  }
  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }
    if (self._state === 0) {
      self._deferreds.push(deferred);
      return;
    }
    self._handled = true;
    Promise$2._immediateFn(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
        return;
      }
      var ret;
      try {
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.promise, e);
        return;
      }
      resolve(deferred.promise, ret);
    });
  }
  function resolve(self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
        var then = newValue.then;
        if (newValue instanceof Promise$2) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind$c(then, newValue), self);
          return;
        }
      }
      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }
  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }
  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise$2._immediateFn(function () {
        if (!self._handled) {
          Promise$2._unhandledRejectionFn(self._value);
        }
      });
    }
    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
  }

  /**
   * @constructor
   */
  function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
  }

  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */
  function doResolve(fn, self) {
    var done = false;
    try {
      fn(function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      }, function (reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      });
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }
  Promise$2.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
  };
  Promise$2.prototype.then = function (onFulfilled, onRejected) {
    // @ts-ignore
    var prom = new this.constructor(noop$1);
    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };
  Promise$2.prototype['finally'] = finallyConstructor;
  Promise$2.all = function (arr) {
    return new Promise$2(function (resolve, reject) {
      if (!isArray$a(arr)) {
        return reject(new TypeError('Promise.all accepts an array'));
      }
      var args = Array.prototype.slice.call(arr);
      if (args.length === 0) return resolve([]);
      var remaining = args.length;
      function res(i, val) {
        try {
          if (val && (typeof val === 'object' || typeof val === 'function')) {
            var then = val.then;
            if (typeof then === 'function') {
              then.call(val, function (val) {
                res(i, val);
              }, reject);
              return;
            }
          }
          args[i] = val;
          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }
      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };
  Promise$2.any = any;
  Promise$2.allSettled = allSettled;
  Promise$2.resolve = function (value) {
    if (value && typeof value === 'object' && value.constructor === Promise$2) {
      return value;
    }
    return new Promise$2(function (resolve) {
      resolve(value);
    });
  };
  Promise$2.reject = function (value) {
    return new Promise$2(function (resolve, reject) {
      reject(value);
    });
  };
  Promise$2.race = function (arr) {
    return new Promise$2(function (resolve, reject) {
      if (!isArray$a(arr)) {
        return reject(new TypeError('Promise.race accepts an array'));
      }
      for (var i = 0, len = arr.length; i < len; i++) {
        Promise$2.resolve(arr[i]).then(resolve, reject);
      }
    });
  };

  // Use polyfill for setImmediate for performance gains
  Promise$2._immediateFn =
  // @ts-ignore
  typeof setImmediate === 'function' && function (fn) {
    // @ts-ignore
    setImmediate(fn);
  } || function (fn) {
    setTimeoutFunc(fn, 0);
  };
  Promise$2._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
    }
  };

  /** @suppress {undefinedVars} */
  var globalNS = function () {
    // the only reliable means to get the global object is
    // `Function('return this')()`
    // However, this causes CSP violations in Chrome apps.
    if (typeof self !== 'undefined') {
      return self;
    }
    if (typeof window !== 'undefined') {
      return window;
    }
    if (typeof global !== 'undefined') {
      return global;
    }
    throw new Error('unable to locate global object');
  }();

  // Expose the polyfill if Promise is undefined or set to a
  // non-function value. The latter can be due to a named HTMLElement
  // being exposed by browsers for legacy reasons.
  // https://github.com/taylorhakes/promise-polyfill/issues/114
  if (typeof globalNS['Promise'] !== 'function') {
    globalNS['Promise'] = Promise$2;
  } else {
    if (!globalNS.Promise.prototype['finally']) {
      globalNS.Promise.prototype['finally'] = finallyConstructor;
    }
    if (!globalNS.Promise.allSettled) {
      globalNS.Promise.allSettled = allSettled;
    }
    if (!globalNS.Promise.any) {
      globalNS.Promise.any = any;
    }
  }

  /* eslint-disable no-prototype-builtins */
  var g = typeof globalThis !== 'undefined' && globalThis || typeof self !== 'undefined' && self ||
  // eslint-disable-next-line no-undef
  typeof global !== 'undefined' && global || {};
  var support = {
    searchParams: 'URLSearchParams' in g,
    iterable: 'Symbol' in g && 'iterator' in Symbol,
    blob: 'FileReader' in g && 'Blob' in g && function () {
      try {
        new Blob();
        return true;
      } catch (e) {
        return false;
      }
    }(),
    formData: 'FormData' in g,
    arrayBuffer: 'ArrayBuffer' in g
  };
  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj);
  }
  if (support.arrayBuffer) {
    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];
    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
  }
  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
      throw new TypeError('Invalid character in header field name: "' + name + '"');
    }
    return name.toLowerCase();
  }
  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value;
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function next() {
        var value = items.shift();
        return {
          done: value === undefined,
          value: value
        };
      }
    };
    if (support.iterable) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }
    return iterator;
  }
  function Headers$1(headers) {
    this.map = {};
    if (headers instanceof Headers$1) {
      headers.forEach(function (value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function (header) {
        if (header.length != 2) {
          throw new TypeError('Headers constructor: expected name/value pair to be length 2, found' + header.length);
        }
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function (name) {
        this.append(name, headers[name]);
      }, this);
    }
  }
  Headers$1.prototype.append = function (name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };
  Headers$1.prototype['delete'] = function (name) {
    delete this.map[normalizeName(name)];
  };
  Headers$1.prototype.get = function (name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null;
  };
  Headers$1.prototype.has = function (name) {
    return this.map.hasOwnProperty(normalizeName(name));
  };
  Headers$1.prototype.set = function (name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };
  Headers$1.prototype.forEach = function (callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };
  Headers$1.prototype.keys = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push(name);
    });
    return iteratorFor(items);
  };
  Headers$1.prototype.values = function () {
    var items = [];
    this.forEach(function (value) {
      items.push(value);
    });
    return iteratorFor(items);
  };
  Headers$1.prototype.entries = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items);
  };
  if (support.iterable) {
    Headers$1.prototype[Symbol.iterator] = Headers$1.prototype.entries;
  }
  function consumed(body) {
    if (body._noBody) return;
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'));
    }
    body.bodyUsed = true;
  }
  function fileReaderReady(reader) {
    return new Promise(function (resolve, reject) {
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = function () {
        reject(reader.error);
      };
    });
  }
  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise;
  }
  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type);
    var encoding = match ? match[1] : 'utf-8';
    reader.readAsText(blob, encoding);
    return promise;
  }
  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);
    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('');
  }
  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0);
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer;
    }
  }
  function Body() {
    this.bodyUsed = false;
    this._initBody = function (body) {
      /*
        fetch-mock wraps the Response object in an ES6 Proxy to
        provide useful test harness features such as flush. However, on
        ES5 browsers without fetch or Proxy support pollyfills must be used;
        the proxy-pollyfill is unable to proxy an attribute unless it exists
        on the object before the Proxy is created. This change ensures
        Response.bodyUsed exists on the instance, while maintaining the
        semantic of setting Request.bodyUsed in the constructor before
        _initBody is called.
      */
      // eslint-disable-next-line no-self-assign
      this.bodyUsed = this.bodyUsed;
      this._bodyInit = body;
      if (!body) {
        this._noBody = true;
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }
      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };
    if (support.blob) {
      this.blob = function () {
        var rejected = consumed(this);
        if (rejected) {
          return rejected;
        }
        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob');
        } else {
          return Promise.resolve(new Blob([this._bodyText]));
        }
      };
    }
    this.arrayBuffer = function () {
      if (this._bodyArrayBuffer) {
        var isConsumed = consumed(this);
        if (isConsumed) {
          return isConsumed;
        } else if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
          return Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength));
        } else {
          return Promise.resolve(this._bodyArrayBuffer);
        }
      } else if (support.blob) {
        return this.blob().then(readBlobAsArrayBuffer);
      } else {
        throw new Error('could not read as ArrayBuffer');
      }
    };
    this.text = function () {
      var rejected = consumed(this);
      if (rejected) {
        return rejected;
      }
      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text');
      } else {
        return Promise.resolve(this._bodyText);
      }
    };
    if (support.formData) {
      this.formData = function () {
        return this.text().then(decode);
      };
    }
    this.json = function () {
      return this.text().then(JSON.parse);
    };
    return this;
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['CONNECT', 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT', 'TRACE'];
  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
  }
  function Request(input, options) {
    if (!(this instanceof Request)) {
      throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
    }
    options = options || {};
    var body = options.body;
    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read');
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers$1(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }
    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers$1(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal || function () {
      if ('AbortController' in g) {
        var ctrl = new AbortController();
        return ctrl.signal;
      }
    }();
    this.referrer = null;
    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests');
    }
    this._initBody(body);
    if (this.method === 'GET' || this.method === 'HEAD') {
      if (options.cache === 'no-store' || options.cache === 'no-cache') {
        // Search for a '_' parameter in the query string
        var reParamSearch = /([?&])_=[^&]*/;
        if (reParamSearch.test(this.url)) {
          // If it already exists then set the value with the current time
          this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime());
        } else {
          // Otherwise add a new '_' parameter to the end with the current time
          var reQueryString = /\?/;
          this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime();
        }
      }
    }
  }
  Request.prototype.clone = function () {
    return new Request(this, {
      body: this._bodyInit
    });
  };
  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function (bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form;
  }
  function parseHeaders(rawHeaders) {
    var headers = new Headers$1();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
    // https://github.com/github/fetch/issues/748
    // https://github.com/zloirock/core-js/issues/751
    preProcessedHeaders.split('\r').map(function (header) {
      return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header;
    }).forEach(function (line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        try {
          headers.append(key, value);
        } catch (error) {
          console.warn('Response ' + error.message);
        }
      }
    });
    return headers;
  }
  Body.call(Request.prototype);
  function Response(bodyInit, options) {
    if (!(this instanceof Response)) {
      throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
    }
    if (!options) {
      options = {};
    }
    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    if (this.status < 200 || this.status > 599) {
      throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
    }
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = options.statusText === undefined ? '' : '' + options.statusText;
    this.headers = new Headers$1(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }
  Body.call(Response.prototype);
  Response.prototype.clone = function () {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers$1(this.headers),
      url: this.url
    });
  };
  Response.error = function () {
    var response = new Response(null, {
      status: 200,
      statusText: ''
    });
    response.ok = false;
    response.status = 0;
    response.type = 'error';
    return response;
  };
  var redirectStatuses = [301, 302, 303, 307, 308];
  Response.redirect = function (url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code');
    }
    return new Response(null, {
      status: status,
      headers: {
        location: url
      }
    });
  };
  var DOMException = g.DOMException;
  try {
    new DOMException();
  } catch (err) {
    DOMException = function DOMException(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    DOMException.prototype = Object.create(Error.prototype);
    DOMException.prototype.constructor = DOMException;
  }
  function fetch$1(input, init) {
    return new Promise(function (resolve, reject) {
      var request = new Request(input, init);
      if (request.signal && request.signal.aborted) {
        return reject(new DOMException('Aborted', 'AbortError'));
      }
      var xhr = new XMLHttpRequest();
      function abortXhr() {
        xhr.abort();
      }
      xhr.onload = function () {
        var options = {
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        // This check if specifically for when a user fetches a file locally from the file system
        // Only if the status is out of a normal range
        if (request.url.indexOf('file://') === 0 && (xhr.status < 200 || xhr.status > 599)) {
          options.status = 200;
        } else {
          options.status = xhr.status;
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        setTimeout(function () {
          resolve(new Response(body, options));
        }, 0);
      };
      xhr.onerror = function () {
        setTimeout(function () {
          reject(new TypeError('Network request failed'));
        }, 0);
      };
      xhr.ontimeout = function () {
        setTimeout(function () {
          reject(new TypeError('Network request timed out'));
        }, 0);
      };
      xhr.onabort = function () {
        setTimeout(function () {
          reject(new DOMException('Aborted', 'AbortError'));
        }, 0);
      };
      function fixUrl(url) {
        try {
          return url === '' && g.location.href ? g.location.href : url;
        } catch (e) {
          return url;
        }
      }
      xhr.open(request.method, fixUrl(request.url), true);
      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }
      if ('responseType' in xhr) {
        if (support.blob) {
          xhr.responseType = 'blob';
        } else if (support.arrayBuffer) {
          xhr.responseType = 'arraybuffer';
        }
      }
      if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers$1 || g.Headers && init.headers instanceof g.Headers)) {
        var names = [];
        Object.getOwnPropertyNames(init.headers).forEach(function (name) {
          names.push(normalizeName(name));
          xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
        });
        request.headers.forEach(function (value, name) {
          if (names.indexOf(name) === -1) {
            xhr.setRequestHeader(name, value);
          }
        });
      } else {
        request.headers.forEach(function (value, name) {
          xhr.setRequestHeader(name, value);
        });
      }
      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);
        xhr.onreadystatechange = function () {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }
      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    });
  }
  fetch$1.polyfill = true;
  if (!g.fetch) {
    g.fetch = fetch$1;
    g.Headers = Headers$1;
    g.Request = Request;
    g.Response = Response;
  }
  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
  var ApplyThisPrototype = function () {
    return function ApplyThisPrototype(event, target) {
      if (typeof target === 'object' && target !== null) {
        var proto = Object.getPrototypeOf(target);
        var property;
        for (property in proto) {
          if (!(property in event)) {
            var descriptor = Object.getOwnPropertyDescriptor(proto, property);
            if (descriptor) {
              Object.defineProperty(event, property, descriptor);
            }
          }
        }
        for (property in target) {
          if (!(property in event)) {
            event[property] = target[property];
          }
        }
      }
    };
  }();
  (function (ApplyThisPrototype) {
    // ✓, ✗

    /**
     * Polyfill Event
     */
    try {
      var event = new window.Event('event', {
        bubbles: true,
        cancelable: true
      });
    } catch (error) {
      var EventOriginal = window.Event;
      var Event = function Event(eventName, params) {
        params = params || {};
        var event = document.createEvent('Event');
        event.initEvent(eventName, params.bubbles === void 0 ? false : params.bubbles, params.cancelable === void 0 ? false : params.cancelable, params.detail === void 0 ? {} : params.detail);
        ApplyThisPrototype(event, this);
        return event;
      };
      Event.prototype = EventOriginal.prototype;
      window.Event = Event;
    }
  })(ApplyThisPrototype);
  (function (ApplyThisPrototype) {
    /**
     * Polyfill CustomEvent
     */
    try {
      var event = new window.CustomEvent('event', {
        bubbles: true,
        cancelable: true
      });
    } catch (error) {
      var CustomEventOriginal = window.CustomEvent || window.Event;
      var CustomEvent = function CustomEvent(eventName, params) {
        params = params || {};
        var event = document.createEvent('CustomEvent');
        event.initCustomEvent(eventName, params.bubbles === void 0 ? false : params.bubbles, params.cancelable === void 0 ? false : params.cancelable, params.detail === void 0 ? {} : params.detail);
        ApplyThisPrototype(event, this);
        return event;
      };
      CustomEvent.prototype = CustomEventOriginal.prototype;
      window.CustomEvent = CustomEvent;
    }
  })(ApplyThisPrototype);
  (function (ApplyThisPrototype) {
    /**
     * Polyfill MouseEvent : https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
     *  - screenX ✓
     *  - screenY ✓
     *  - clientX ✓
     *  - clientY ✓
     *  - ctrlKey ✓
     *  - shiftKey ✓
     *  - altKey ✓
     *  - metaKey ✓
     *  - button ✓
     *  - buttons ✓
     *  - region ✓
     */
    try {
      var event = new window.MouseEvent('event', {
        bubbles: true,
        cancelable: true
      });
    } catch (error) {
      var MouseEventOriginal = window.MouseEvent || window.Event;
      var MouseEvent = function MouseEvent(eventName, params) {
        params = params || {};
        var event = document.createEvent('MouseEvent');

        // https://msdn.microsoft.com/en-us/library/ff975292(v=vs.85).aspx
        event.initMouseEvent(eventName, params.bubbles === void 0 ? false : params.bubbles, params.cancelable === void 0 ? false : params.cancelable, params.view === void 0 ? window : params.view, params.detail === void 0 ? 0 : params.detail, params.screenX === void 0 ? 0 : params.screenX, params.screenY === void 0 ? 0 : params.screenY, params.clientX === void 0 ? 0 : params.clientX, params.clientY === void 0 ? 0 : params.clientY, params.ctrlKey === void 0 ? false : params.ctrlKey, params.altKey === void 0 ? false : params.altKey, params.shiftKey === void 0 ? false : params.shiftKey, params.metaKey === void 0 ? false : params.metaKey, params.button === void 0 ? 0 : params.button, params.relatedTarget === void 0 ? null : params.relatedTarget);
        event.buttons = params.buttons === void 0 ? 0 : params.buttons;
        event.region = params.region === void 0 ? null : params.region;
        ApplyThisPrototype(event, this);
        return event;
      };
      MouseEvent.prototype = MouseEventOriginal.prototype;
      window.MouseEvent = MouseEvent;
    }
  })(ApplyThisPrototype);
  (function (ApplyThisPrototype) {
    /**
     * Polyfill KeyboardEvent : https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboardEvent
     *  - key ✓
     *  - char ✓
     *  - code ✓
     *  - location ✓
     *  - ctrlKey ✓
     *  - shiftKey ✓
     *  - altKey ✓
     *  - metaKey ✓
     *  - repeat ✓
     *  - isComposing ✗
     *  - charCode ✓
     *  - keyCode ✓
     *  - which ✓
     */
    try {
      var event = new window.KeyboardEvent('event', {
        bubbles: true,
        cancelable: true
      });
    } catch (error) {
      var KeyboardEventOriginal = window.KeyboardEvent || window.Event;
      var KeyboardEvent = function KeyboardEvent(eventName, params) {
        params = params || {};
        var event = document.createEvent('KeyboardEvent');

        // https://msdn.microsoft.com/en-us/library/ff975297(v=vs.85).aspx
        event.initKeyboardEvent(eventName, params.bubbles === void 0 ? false : params.bubbles, params.cancelable === void 0 ? false : params.cancelable, params.view === void 0 ? window : params.view, params.key === void 0 ? '' : params.key, params.location === void 0 ? 0 : params.location, (params.ctrlKey === true ? 'Control ' : '') + (params.altKey === true ? 'Alt ' : '') + (params.shiftKey === true ? 'Shift ' : '') + (params.metaKey === true ? 'Meta ' : ''), params.repeat === void 0 ? false : params.repeat, params.locale === void 0 ? navigator.language : params.locale);
        event.keyCode = params.keyCode === void 0 ? 0 : params.keyCode;
        event.code = params.code === void 0 ? '' : params.code;
        event.charCode = params.charCode === void 0 ? 0 : params.charCode;
        event["char"] = params.charCode === void 0 ? '' : params.charCode;
        event.which = params.which === void 0 ? 0 : params.which;
        ApplyThisPrototype(event, this);
        return event;
      };
      KeyboardEvent.prototype = KeyboardEventOriginal.prototype;
      window.KeyboardEvent = KeyboardEvent;
    }
  })(ApplyThisPrototype);
  (function (ApplyThisPrototype) {
    /**
     * Polyfill FocusEvent : https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent/FocusEvent
     *  - relatedTarget ✓
     */
    try {
      var event = new window.FocusEvent('event', {
        bubbles: true,
        cancelable: true
      });
    } catch (error) {
      var FocusEventOriginal = window.FocusEvent || window.Event;
      var FocusEvent = function FocusEvent(eventName, params) {
        params = params || {};
        var event = document.createEvent('FocusEvent');

        // https://msdn.microsoft.com/en-us/library/ff975954(v=vs.85).aspx
        event.initFocusEvent(eventName, params.bubbles === void 0 ? false : params.bubbles, params.cancelable === void 0 ? false : params.cancelable, params.view === void 0 ? window : params.view, params.detail === void 0 ? {} : params.detail, params.relatedTarget === void 0 ? null : params.relatedTarget);
        ApplyThisPrototype(event, this);
        return event;
      };
      FocusEvent.prototype = FocusEventOriginal.prototype;
      window.FocusEvent = FocusEvent;
    }
  })(ApplyThisPrototype);
  (function (ApplyThisPrototype) {
    /**
     * Polyfill PointerEvent
     *  - pointerId ✓
     *  - width ✓
     *  - height ✓
     *  - pressure ✓
     *  - tangentialPressure ✓
     *  - tiltX ✓
     *  - tiltY ✓
     *  - twist ✓
     *  - pointerType ✓
     *  - isPrimary ✓
     */
    try {
      var event = new window.PointerEvent('event', {
        bubbles: true,
        cancelable: true
      });
    } catch (error) {
      var PointerEventOriginal = window.PointerEvent || window.Event;
      var PointerEvent = function PointerEvent(eventName, params) {
        params = params || {};
        var event = document.createEvent('PointerEvent');

        // https://msdn.microsoft.com/en-us/library/jj192039(v=vs.85).aspx
        event.initPointerEvent(eventName, params.bubbles === void 0 ? false : params.bubbles, params.cancelable === void 0 ? false : params.cancelable, params.view === void 0 ? window : params.view, params.detail === void 0 ? 0 : params.detail, params.screenX === void 0 ? 0 : params.screenX, params.screenY === void 0 ? 0 : params.screenY, params.clientX === void 0 ? 0 : params.clientX, params.clientY === void 0 ? 0 : params.clientY, params.ctrlKey === void 0 ? false : params.ctrlKey, params.altKey === void 0 ? false : params.altKey, params.shiftKey === void 0 ? false : params.shiftKey, params.metaKey === void 0 ? false : params.metaKey, params.button === void 0 ? 0 : params.button, params.relatedTarget === void 0 ? null : params.relatedTarget, params.offsetX === void 0 ? 0 : params.offsetX, params.offsetY === void 0 ? 0 : params.offsetY, params.width === void 0 ? 1 : params.width, params.height === void 0 ? 1 : params.height, params.pressure === void 0 ? 0 : params.pressure, params.twist === void 0 ? 0 : params.twist, params.tiltX === void 0 ? 0 : params.tiltX, params.tiltY === void 0 ? 0 : params.tiltY, params.pointerId === void 0 ? 0 : params.pointerId, params.pointerType === void 0 ? '' : params.pointerType, params.hwTimestamp === void 0 ? 0 : params.hwTimestamp, params.isPrimary === void 0 ? false : params.isPrimary);
        event.tangentialPressure = params.tangentialPressure === void 0 ? 0 : params.tangentialPressure;
        ApplyThisPrototype(event, this);
        return event;
      };
      PointerEvent.prototype = PointerEventOriginal.prototype;
      var rotationDescriptor = Object.getOwnPropertyDescriptor(PointerEvent.prototype, 'rotation');
      if (rotationDescriptor) {
        Object.defineProperty(PointerEvent.prototype, 'twist', rotationDescriptor);
      }
      window.PointerEvent = PointerEvent;
    }
  })(ApplyThisPrototype);
  var EventListenerInterceptor = function () {
    if (typeof EventTarget === 'undefined') {
      window.EventTarget = Node;
    }

    /**
     * Event listener interceptor
     */

    var EventListenerInterceptor = {
      interceptors: [] // { target: EventTarget, interceptors: [{ add: Function, remove: Function }, ...] }
    };

    /**
     * Returns if exists a previously registered listener from a target and the normalized arguments
     * @param target
     * @param normalizedArguments
     * @return {*}
     */
    EventListenerInterceptor.getRegisteredEventListener = function (target, normalizedArguments) {
      var key = normalizedArguments.type + '-' + (normalizedArguments.options.capture ? '1' : '0');
      if (target.__eventListeners !== void 0 && target.__eventListeners[key] !== void 0) {
        var map = target.__eventListeners[key];
        for (var i = 0; i < map.length; i++) {
          if (map[i].listener === normalizedArguments.listener) {
            return map[i];
          }
        }
      }
      return null;
    };

    /**
     * Registers a listener on a target with some options
     * @param target
     * @param normalizedArguments
     */
    EventListenerInterceptor.registerEventListener = function (target, normalizedArguments) {
      var key = normalizedArguments.type + '-' + (normalizedArguments.options.capture ? '1' : '0');
      if (target.__eventListeners === void 0) {
        target.__eventListeners = {};
      }
      if (target.__eventListeners[key] === void 0) {
        target.__eventListeners[key] = [];
      }
      target.__eventListeners[key].push(normalizedArguments);
    };

    /**
     * Unregisters a listener on a target with some options
     * @param target
     * @param normalizedArguments
     */
    EventListenerInterceptor.unregisterEventListener = function (target, normalizedArguments) {
      var key = normalizedArguments.type + '-' + (normalizedArguments.options.capture ? '1' : '0');
      if (target.__eventListeners !== void 0 && target.__eventListeners[key] !== void 0) {
        var map = target.__eventListeners[key];
        for (var i = 0; i < map.length; i++) {
          if (map[i].listener === normalizedArguments.listener) {
            map.splice(i, 1);
          }
        }
        if (map.length === 0) {
          delete target.__eventListeners[key];
        }
      }
    };
    EventListenerInterceptor.normalizeListenerCallback = function (listener) {
      if (typeof listener === 'function' || listener === null || listener === void 0) {
        return listener;
      } else if (typeof listener === 'object' && typeof listener.handleEvent === 'function') {
        return listener.handleEvent;
      } else {
        // to support Symbol
        return function (event) {
          listener(event);
        };
      }
    };
    EventListenerInterceptor.normalizeListenerOptions = function (options) {
      switch (typeof options) {
        case 'boolean':
          options = {
            capture: options
          };
          break;
        case 'undefined':
          options = {
            capture: false
          };
          break;
        case 'object':
          if (options === null) {
            options = {
              capture: false
            };
          }
          break;
        default:
          throw new Error('Unsupported options type for addEventListener');
      }
      options.once = Boolean(options.once);
      options.passive = Boolean(options.passive);
      options.capture = Boolean(options.capture);
      return options;
    };
    EventListenerInterceptor.normalizeListenerArguments = function (type, listener, options) {
      return {
        type: type,
        listener: this.normalizeListenerCallback(listener),
        options: this.normalizeListenerOptions(options)
      };
    };
    EventListenerInterceptor.intercept = function (target, interceptors) {
      // get an interceptor with this target or null
      var interceptor = null;
      for (var i = 0; i < this.interceptors.length; i++) {
        if (this.interceptors[i].target === target) {
          interceptor = this.interceptors[i];
        }
      }

      // if no interceptor already set
      if (interceptor === null) {
        interceptor = {
          target: target,
          interceptors: [interceptors]
        };
        this.interceptors.push(interceptor);
        this.interceptAddEventListener(target, interceptor);
        this.interceptRemoveEventListener(target, interceptor);
      } else {
        // if an interceptor already set, simply add interceptors to the list
        interceptor.interceptors.push(interceptors);
      }

      // var release = function() {
      //   target.prototype.addEventListener = addEventListener;
      //   target.prototype.removeEventListener = removeEventListener;
      // };
      // this.interceptors.push(release);
      // return release;
    };
    EventListenerInterceptor.interceptAddEventListener = function (target, interceptor) {
      var _this = this;
      var addEventListener = target.prototype.addEventListener;
      target.prototype.addEventListener = function (type, listener, options) {
        var normalizedArguments = _this.normalizeListenerArguments(type, listener, options);
        var registeredEventListener = _this.getRegisteredEventListener(this, normalizedArguments);
        if (!registeredEventListener) {
          normalizedArguments.polyfilled = {
            type: normalizedArguments.type,
            listener: normalizedArguments.listener,
            options: {
              capture: normalizedArguments.options.capture,
              once: normalizedArguments.options.once,
              passive: normalizedArguments.options.passive
            }
          };
          for (var i = 0; i < interceptor.interceptors.length; i++) {
            var interceptors = interceptor.interceptors[i];
            if (typeof interceptors.add === 'function') {
              interceptors.add(normalizedArguments);
            }
          }

          // console.log('normalizedArguments', normalizedArguments.polyfilled);

          _this.registerEventListener(this, normalizedArguments);
          addEventListener.call(this, normalizedArguments.polyfilled.type, normalizedArguments.polyfilled.listener, normalizedArguments.polyfilled.options);
        }
      };
      return function () {
        target.prototype.addEventListener = addEventListener;
      };
    };
    EventListenerInterceptor.interceptRemoveEventListener = function (target, interceptor) {
      var _this = this;
      var removeEventListener = target.prototype.removeEventListener;
      target.prototype.removeEventListener = function (type, listener, options) {
        var normalizedArguments = _this.normalizeListenerArguments(type, listener, options);
        var registeredEventListener = _this.getRegisteredEventListener(this, normalizedArguments);
        if (registeredEventListener) {
          _this.unregisterEventListener(this, normalizedArguments);
          removeEventListener.call(this, registeredEventListener.polyfilled.type, registeredEventListener.polyfilled.listener, registeredEventListener.polyfilled.options);
        } else {
          removeEventListener.call(this, type, listener, options);
        }
      };
      return function () {
        target.prototype.removeEventListener = removeEventListener;
      };
    };
    EventListenerInterceptor.interceptAll = function (interceptors) {
      this.intercept(EventTarget, interceptors);
      if (!(window instanceof EventTarget)) {
        this.intercept(Window, interceptors);
      }
    };
    EventListenerInterceptor.releaseAll = function () {
      for (var i = 0, l = this.interceptors.length; i < l; i++) {
        this.interceptors();
      }
    };
    EventListenerInterceptor.error = function (error) {
      // throw error;
      console.error(error);
    };
    return EventListenerInterceptor;
  }();
  (function (EventListenerInterceptor) {
    /**
     * Event listener options support
     */

    EventListenerInterceptor.detectSupportedOptions = function () {
      var _this = this;
      this.supportedOptions = {
        once: false,
        passive: false,
        capture: false,
        all: false,
        some: false
      };
      try {
        var options = {};
        Object.defineProperty(options, 'once', {
          get: function get() {
            _this.supportedOptions.once = true;
            return false;
          }
        });
        Object.defineProperty(options, 'passive', {
          get: function get() {
            _this.supportedOptions.passive = true;
            return false;
          }
        });
        Object.defineProperty(options, 'capture', {
          get: function get() {
            _this.supportedOptions.capture = true;
            return false;
          }
        });
        document.createDocumentFragment().addEventListener('test', function () {}, options);
      } catch (e) {}

      // useful shortcuts to detect if options are all/some supported
      this.supportedOptions.all = this.supportedOptions.once && this.supportedOptions.passive && this.supportedOptions.capture;
      this.supportedOptions.some = this.supportedOptions.once || this.supportedOptions.passive || this.supportedOptions.capture;
    };
    EventListenerInterceptor.polyfillListenerOptions = function () {
      this.detectSupportedOptions();
      if (!this.supportedOptions.all) {
        var _this = this;
        this.interceptAll({
          add: function add(normalizedArguments) {
            // console.log('intercepted', normalizedArguments);

            var once = normalizedArguments.options.once && !_this.supportedOptions.once;
            var passive = normalizedArguments.options.passive && !_this.supportedOptions.passive;
            if (once || passive) {
              var listener = normalizedArguments.polyfilled.listener;
              normalizedArguments.polyfilled.listener = function (event) {
                if (once) {
                  this.removeEventListener(normalizedArguments.type, normalizedArguments.listener, normalizedArguments.options);
                }
                if (passive) {
                  event.preventDefault = function () {
                    throw new Error('Unable to preventDefault inside passive event listener invocation.');
                  };
                }
                return listener.call(this, event);
              };
            }
            if (!_this.supportedOptions.some) {
              normalizedArguments.polyfilled.options = normalizedArguments.options.capture;
            }
          }
        });
      }
    };
    EventListenerInterceptor.polyfillListenerOptions();

    // var onclick = function() {
    //   console.log('click');
    // };

    // document.body.addEventListener('click', onclick, false);
    // document.body.addEventListener('click', onclick, { once: true });
    // document.body.addEventListener('click', onclick, { once: true });
    // document.body.addEventListener('click', onclick, false);
    // document.body.addEventListener('click', onclick, false);
  })(EventListenerInterceptor);
  (function (EventListenerInterceptor) {
    /**
     * Event listener type support
     */

    EventListenerInterceptor.isSupportedOnEvent = function (target, type) {
      return 'on' + type in target;
    };
    EventListenerInterceptor.isSupportedTransitionEvent = function (target, type) {
      return EventListenerInterceptor.isSupportedOnEvent(target, type) || 'style' in target && target.style['transition'] !== void 0;
    };
    EventListenerInterceptor.isSupportedFullScreenEvent = function (target, type) {
      if (EventListenerInterceptor.isSupportedOnEvent(target, type)) {
        return true;
      } else {
        if (/^ms/.test(type.toLowerCase())) {
          return 'msRequestFullscreen' in document.body;
        } else if (/^moz/.test(type)) {
          return 'mozRequestFullscreen' in document.body;
        } else if (/^webkit/.test(type)) {
          return 'webkitRequestFullscreen' in document.body;
        } else {
          return false;
        }
      }
    };
    EventListenerInterceptor.generateEventTypes = function () {
      var _this = this;
      this.eventTypes = {}; // map of types that resolved to something else
      this.vendorPrefixes = ['', 'webkit', 'moz', 'ms', 'o'];
      this.eventTypes['wheel'] = ['wheel', 'mousewheel', 'DOMMouseScroll'].map(function (type) {
        return {
          type: type,
          isSupported: _this.isSupportedOnEvent
        };
      });
      this.eventTypes['fullscreenchange'] = ['fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'MSFullscreenChange', 'msfullscreenchange'].map(function (type) {
        return {
          type: type,
          isSupported: _this.isSupportedFullScreenEvent
        };
      });
      this.eventTypes['fullscreenerror'] = ['fullscreenerror', 'mozfullscreenerror', 'webkitfullscreenerror', 'MSFullscreenError', 'msfullscreenerror'].map(function (type) {
        return {
          type: type,
          isSupported: _this.isSupportedFullScreenEvent
        };
      });
      ['pointerlockchange', 'pointerlockerror', 'animationstart', 'animationiteration', 'animationend', 'pointercancel', 'pointerdown', 'pointerhover', 'pointermove', 'pointerout', 'pointerover', 'pointerup'].forEach(function (type) {
        _this.eventTypes[type] = _this.vendorPrefixes.map(function (prefix) {
          return {
            type: prefix + type,
            isSupported: _this.isSupportedOnEvent
          };
        });
      });
      ['transitionstart', 'transitionrun', 'transitionend'].forEach(function (type) {
        _this.eventTypes[type] = _this.vendorPrefixes.map(function (prefix) {
          return {
            type: prefix + type,
            isSupported: _this.isSupportedTransitionEvent
          };
        });
      });
    };
    EventListenerInterceptor.getSupportedEventType = function (target, type) {
      var types = this.eventTypes[type];
      if (types === void 0) {
        return type;
      } else {
        var _type;
        for (var i = 0; i < types.length; i++) {
          _type = types[i];
          if (_type.isSupported(target, _type.type)) {
            // console.log('use : ' + eventTypesPolyfiller[i].type);
            return _type.type;
          }
        }

        // this.error(new Error('Event listener type ' + String(type) + ' on ' + String(target) + ' is not supported by current environment'));
        return type;
      }
    };
    EventListenerInterceptor.polyfillListenerEventTypes = function () {
      this.generateEventTypes();
      var _this = this;
      this.interceptAll({
        add: function add(normalizedArguments) {
          normalizedArguments.polyfilled.type = _this.getSupportedEventType(this, normalizedArguments.polyfilled.type);
        }
      });
    };
    EventListenerInterceptor.polyfillListenerEventTypes();
  })(EventListenerInterceptor);

  /**
   * @license
   * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */

  // minimal template polyfill
  (function () {
    var needsTemplate = typeof HTMLTemplateElement === 'undefined';
    var brokenDocFragment = !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment);
    var needsDocFrag = false;

    // NOTE: Replace DocumentFragment to work around IE11 bug that
    // causes children of a document fragment modified while
    // there is a mutation observer to not have a parentNode, or
    // have a broken parentNode (!?!)
    if (/Trident/.test(navigator.userAgent)) {
      (function () {
        needsDocFrag = true;
        var origCloneNode = Node.prototype.cloneNode;
        Node.prototype.cloneNode = function cloneNode(deep) {
          var newDom = origCloneNode.call(this, deep);
          if (this instanceof DocumentFragment) {
            newDom.__proto__ = DocumentFragment.prototype;
          }
          return newDom;
        };

        // IE's DocumentFragment querySelector code doesn't work when
        // called on an element instance
        DocumentFragment.prototype.querySelectorAll = HTMLElement.prototype.querySelectorAll;
        DocumentFragment.prototype.querySelector = HTMLElement.prototype.querySelector;
        try {
          Object.defineProperties(DocumentFragment.prototype, {
            'nodeType': {
              get: function get() {
                return Node.DOCUMENT_FRAGMENT_NODE;
              },
              configurable: true
            },
            'localName': {
              get: function get() {
                return undefined;
              },
              configurable: true
            },
            'nodeName': {
              get: function get() {
                return '#document-fragment';
              },
              configurable: true
            }
          });
        } catch (e) {
          DocumentFragment.prototype.nodeType = Node.DOCUMENT_FRAGMENT_NODE;
          DocumentFragment.prototype.localName = undefined;
          DocumentFragment.prototype.nodeName = '#document-fragment';
        }
        var origInsertBefore = Node.prototype.insertBefore;
        function insertBefore(newNode, refNode) {
          if (newNode instanceof DocumentFragment) {
            var child;
            while (child = newNode.firstChild) {
              origInsertBefore.call(this, child, refNode);
            }
          } else {
            origInsertBefore.call(this, newNode, refNode);
          }
          return newNode;
        }
        Node.prototype.insertBefore = insertBefore;
        var origAppendChild = Node.prototype.appendChild;
        Node.prototype.appendChild = function appendChild(child) {
          if (child instanceof DocumentFragment) {
            insertBefore.call(this, child, null);
          } else {
            origAppendChild.call(this, child);
          }
          return child;
        };
        var origRemoveChild = Node.prototype.removeChild;
        var origReplaceChild = Node.prototype.replaceChild;
        Node.prototype.replaceChild = function replaceChild(newChild, oldChild) {
          if (newChild instanceof DocumentFragment) {
            insertBefore.call(this, newChild, oldChild);
            origRemoveChild.call(this, oldChild);
          } else {
            origReplaceChild.call(this, newChild, oldChild);
          }
          return oldChild;
        };
        Document.prototype.createDocumentFragment = function createDocumentFragment() {
          var frag = this.createElement('df');
          frag.__proto__ = DocumentFragment.prototype;
          return frag;
        };
        var origImportNode = Document.prototype.importNode;
        Document.prototype.importNode = function importNode(impNode, deep) {
          deep = deep || false;
          var newNode = origImportNode.call(this, impNode, deep);
          if (impNode instanceof DocumentFragment) {
            newNode.__proto__ = DocumentFragment.prototype;
          }
          return newNode;
        };
      })();
    }

    // NOTE: we rely on this cloneNode not causing element upgrade.
    // This means this polyfill must load before the CE polyfill and
    // this would need to be re-worked if a browser supports native CE
    // but not <template>.
    var capturedCloneNode = Node.prototype.cloneNode;
    var capturedCreateElement = Document.prototype.createElement;
    var capturedImportNode = Document.prototype.importNode;
    var capturedRemoveChild = Node.prototype.removeChild;
    var capturedAppendChild = Node.prototype.appendChild;
    var capturedReplaceChild = Node.prototype.replaceChild;
    var capturedParseFromString = DOMParser.prototype.parseFromString;
    var capturedHTMLElementInnerHTML = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, 'innerHTML') || {
      /**
       * @this {!HTMLElement}
       * @return {string}
       */
      get: function get() {
        return this.innerHTML;
      },
      /**
       * @this {!HTMLElement}
       * @param {string}
       */
      set: function set(text) {
        this.innerHTML = text;
      }
    };
    var capturedChildNodes = Object.getOwnPropertyDescriptor(window.Node.prototype, 'childNodes') || {
      /**
       * @this {!Node}
       * @return {!NodeList}
       */
      get: function get() {
        return this.childNodes;
      }
    };
    var elementQuerySelectorAll = Element.prototype.querySelectorAll;
    var docQuerySelectorAll = Document.prototype.querySelectorAll;
    var fragQuerySelectorAll = DocumentFragment.prototype.querySelectorAll;
    var scriptSelector = 'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]';
    function QSA(node, selector) {
      // IE 11 throws a SyntaxError with `scriptSelector` if the node has no children due to the `:not([type])` syntax
      if (!node.childNodes.length) {
        return [];
      }
      switch (node.nodeType) {
        case Node.DOCUMENT_NODE:
          return docQuerySelectorAll.call(node, selector);
        case Node.DOCUMENT_FRAGMENT_NODE:
          return fragQuerySelectorAll.call(node, selector);
        default:
          return elementQuerySelectorAll.call(node, selector);
      }
    }

    // returns true if nested templates cannot be cloned (they cannot be on
    // some impl's like Safari 8 and Edge)
    // OR if cloning a document fragment does not result in a document fragment
    var needsCloning = function () {
      if (!needsTemplate) {
        var t = document.createElement('template');
        var t2 = document.createElement('template');
        t2.content.appendChild(document.createElement('div'));
        t.content.appendChild(t2);
        var clone = t.cloneNode(true);
        return clone.content.childNodes.length === 0 || clone.content.firstChild.content.childNodes.length === 0 || brokenDocFragment;
      }
    }();
    var TEMPLATE_TAG = 'template';
    var PolyfilledHTMLTemplateElement = function PolyfilledHTMLTemplateElement() {};
    if (needsTemplate) {
      var contentDoc = document.implementation.createHTMLDocument('template');
      var canDecorate = true;
      var templateStyle = document.createElement('style');
      templateStyle.textContent = TEMPLATE_TAG + '{display:none;}';
      var head = document.head;
      head.insertBefore(templateStyle, head.firstElementChild);

      /**
        Provides a minimal shim for the <template> element.
      */
      PolyfilledHTMLTemplateElement.prototype = Object.create(HTMLElement.prototype);

      // if elements do not have `innerHTML` on instances, then
      // templates can be patched by swizzling their prototypes.
      var canProtoPatch = !document.createElement('div').hasOwnProperty('innerHTML');

      /**
        The `decorate` method moves element children to the template's `content`.
        NOTE: there is no support for dynamically adding elements to templates.
      */
      PolyfilledHTMLTemplateElement.decorate = function (template) {
        // if the template is decorated or not in HTML namespace, return fast
        if (template.content || template.namespaceURI !== document.documentElement.namespaceURI) {
          return;
        }
        template.content = contentDoc.createDocumentFragment();
        var child;
        while (child = template.firstChild) {
          capturedAppendChild.call(template.content, child);
        }
        // NOTE: prefer prototype patching for performance and
        // because on some browsers (IE11), re-defining `innerHTML`
        // can result in intermittent errors.
        if (canProtoPatch) {
          template.__proto__ = PolyfilledHTMLTemplateElement.prototype;
        } else {
          template.cloneNode = function (deep) {
            return PolyfilledHTMLTemplateElement._cloneNode(this, deep);
          };
          // add innerHTML to template, if possible
          // Note: this throws on Safari 7
          if (canDecorate) {
            try {
              defineInnerHTML(template);
              defineOuterHTML(template);
            } catch (err) {
              canDecorate = false;
            }
          }
        }
        // bootstrap recursively
        PolyfilledHTMLTemplateElement.bootstrap(template.content);
      };

      // Taken from https://github.com/jquery/jquery/blob/73d7e6259c63ac45f42c6593da8c2796c6ce9281/src/manipulation/wrapMap.js
      var topLevelWrappingMap = {
        'option': ['select'],
        'thead': ['table'],
        'col': ['colgroup', 'table'],
        'tr': ['tbody', 'table'],
        'th': ['tr', 'tbody', 'table'],
        'td': ['tr', 'tbody', 'table']
      };
      var getTagName = function getTagName(text) {
        // Taken from https://github.com/jquery/jquery/blob/73d7e6259c63ac45f42c6593da8c2796c6ce9281/src/manipulation/var/rtagName.js
        return (/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(text) || ['', ''])[1].toLowerCase();
      };
      var defineInnerHTML = function defineInnerHTML(obj) {
        Object.defineProperty(obj, 'innerHTML', {
          get: function get() {
            return getInnerHTML(this);
          },
          set: function set(text) {
            // For IE11, wrap the text in the correct (table) context
            var wrap = topLevelWrappingMap[getTagName(text)];
            if (wrap) {
              for (var i = 0; i < wrap.length; i++) {
                text = '<' + wrap[i] + '>' + text + '</' + wrap[i] + '>';
              }
            }
            contentDoc.body.innerHTML = text;
            PolyfilledHTMLTemplateElement.bootstrap(contentDoc);
            while (this.content.firstChild) {
              capturedRemoveChild.call(this.content, this.content.firstChild);
            }
            var body = contentDoc.body;
            // If we had wrapped, get back to the original node
            if (wrap) {
              for (var j = 0; j < wrap.length; j++) {
                body = body.lastChild;
              }
            }
            while (body.firstChild) {
              capturedAppendChild.call(this.content, body.firstChild);
            }
          },
          configurable: true
        });
      };
      var defineOuterHTML = function defineOuterHTML(obj) {
        Object.defineProperty(obj, 'outerHTML', {
          get: function get() {
            return "<".concat(TEMPLATE_TAG, ">").concat(this.innerHTML, "</").concat(TEMPLATE_TAG, ">");
          },
          set: function set(innerHTML) {
            if (this.parentNode) {
              contentDoc.body.innerHTML = innerHTML;
              var docFrag = this.ownerDocument.createDocumentFragment();
              while (contentDoc.body.firstChild) {
                capturedAppendChild.call(docFrag, contentDoc.body.firstChild);
              }
              capturedReplaceChild.call(this.parentNode, docFrag, this);
            } else {
              throw new Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");
            }
          },
          configurable: true
        });
      };
      defineInnerHTML(PolyfilledHTMLTemplateElement.prototype);
      defineOuterHTML(PolyfilledHTMLTemplateElement.prototype);

      /**
        The `bootstrap` method is called automatically and "fixes" all
        <template> elements in the document referenced by the `doc` argument.
      */
      PolyfilledHTMLTemplateElement.bootstrap = function bootstrap(doc) {
        var templates = QSA(doc, TEMPLATE_TAG);
        for (var i = 0, l = templates.length, t; i < l && (t = templates[i]); i++) {
          PolyfilledHTMLTemplateElement.decorate(t);
        }
      };

      // auto-bootstrapping for main document
      document.addEventListener('DOMContentLoaded', function () {
        PolyfilledHTMLTemplateElement.bootstrap(document);
      });

      // Patch document.createElement to ensure newly created templates have content
      Document.prototype.createElement = function createElement() {
        var el = capturedCreateElement.apply(this, arguments);
        if (el.localName === 'template') {
          PolyfilledHTMLTemplateElement.decorate(el);
        }
        return el;
      };
      DOMParser.prototype.parseFromString = function () {
        var el = capturedParseFromString.apply(this, arguments);
        PolyfilledHTMLTemplateElement.bootstrap(el);
        return el;
      };
      Object.defineProperty(HTMLElement.prototype, 'innerHTML', {
        get: function get() {
          return getInnerHTML(this);
        },
        set: function set(text) {
          capturedHTMLElementInnerHTML.set.call(this, text);
          PolyfilledHTMLTemplateElement.bootstrap(this);
        },
        configurable: true,
        enumerable: true
      });

      // http://www.whatwg.org/specs/web-apps/current-work/multipage/the-end.html#escapingString
      var escapeAttrRegExp = /[&\u00A0"]/g;
      var escapeDataRegExp = /[&\u00A0<>]/g;
      var escapeReplace = function escapeReplace(c) {
        switch (c) {
          case '&':
            return '&amp;';
          case '<':
            return '&lt;';
          case '>':
            return '&gt;';
          case '"':
            return '&quot;';
          case "\xA0":
            return '&nbsp;';
        }
      };
      var escapeAttr = function escapeAttr(s) {
        return s.replace(escapeAttrRegExp, escapeReplace);
      };
      var escapeData = function escapeData(s) {
        return s.replace(escapeDataRegExp, escapeReplace);
      };
      var makeSet = function makeSet(arr) {
        var set = {};
        for (var i = 0; i < arr.length; i++) {
          set[arr[i]] = true;
        }
        return set;
      };

      // http://www.whatwg.org/specs/web-apps/current-work/#void-elements
      var voidElements = makeSet(['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
      var plaintextParents = makeSet(['style', 'script', 'xmp', 'iframe', 'noembed', 'noframes', 'plaintext', 'noscript']);

      /**
       * @param {Node} node
       * @param {Node} parentNode
       * @param {Function=} callback
       */
      var getOuterHTML = function getOuterHTML(node, parentNode, callback) {
        switch (node.nodeType) {
          case Node.ELEMENT_NODE:
            {
              var tagName = node.localName;
              var s = '<' + tagName;
              var attrs = node.attributes;
              for (var i = 0, attr; attr = attrs[i]; i++) {
                s += ' ' + attr.name + '="' + escapeAttr(attr.value) + '"';
              }
              s += '>';
              if (voidElements[tagName]) {
                return s;
              }
              return s + getInnerHTML(node, callback) + '</' + tagName + '>';
            }
          case Node.TEXT_NODE:
            {
              var data = /** @type {Text} */node.data;
              if (parentNode && plaintextParents[parentNode.localName]) {
                return data;
              }
              return escapeData(data);
            }
          case Node.COMMENT_NODE:
            {
              return '<!--' + /** @type {Comment} */node.data + '-->';
            }
          default:
            {
              window.console.error(node);
              throw new Error('not implemented');
            }
        }
      };

      /**
       * @param {Node} node
       * @param {Function=} callback
       */
      var getInnerHTML = function getInnerHTML(node, callback) {
        if (node.localName === 'template') {
          node = /** @type {HTMLTemplateElement} */node.content;
        }
        var s = '';
        var c$ = callback ? callback(node) : capturedChildNodes.get.call(node);
        for (var i = 0, l = c$.length, child; i < l && (child = c$[i]); i++) {
          s += getOuterHTML(child, node, callback);
        }
        return s;
      };
    }

    // make cloning/importing work!
    if (needsTemplate || needsCloning) {
      PolyfilledHTMLTemplateElement._cloneNode = function _cloneNode(template, deep) {
        var clone = capturedCloneNode.call(template, false);
        // NOTE: decorate doesn't auto-fix children because they are already
        // decorated so they need special clone fixup.
        if (this.decorate) {
          this.decorate(clone);
        }
        if (deep) {
          // NOTE: use native clone node to make sure CE's wrapped
          // cloneNode does not cause elements to upgrade.
          capturedAppendChild.call(clone.content, capturedCloneNode.call(template.content, true));
          // now ensure nested templates are cloned correctly.
          fixClonedDom(clone.content, template.content);
        }
        return clone;
      };

      // Given a source and cloned subtree, find <template>'s in the cloned
      // subtree and replace them with cloned <template>'s from source.
      // We must do this because only the source templates have proper .content.
      var fixClonedDom = function fixClonedDom(clone, source) {
        // do nothing if cloned node is not an element
        if (!source.querySelectorAll) {
          return;
        }
        // these two lists should be coincident
        var s$ = QSA(source, TEMPLATE_TAG);
        if (s$.length === 0) {
          return;
        }
        var t$ = QSA(clone, TEMPLATE_TAG);
        for (var i = 0, l = t$.length, t, s; i < l; i++) {
          s = s$[i];
          t = t$[i];
          if (PolyfilledHTMLTemplateElement && PolyfilledHTMLTemplateElement.decorate) {
            PolyfilledHTMLTemplateElement.decorate(s);
          }
          capturedReplaceChild.call(t.parentNode, cloneNode.call(s, true), t);
        }
      };

      // make sure scripts inside of a cloned template are executable
      var fixClonedScripts = function fixClonedScripts(fragment) {
        var scripts = QSA(fragment, scriptSelector);
        for (var ns, s, i = 0; i < scripts.length; i++) {
          s = scripts[i];
          ns = capturedCreateElement.call(document, 'script');
          ns.textContent = s.textContent;
          var attrs = s.attributes;
          for (var ai = 0, a; ai < attrs.length; ai++) {
            a = attrs[ai];
            ns.setAttribute(a.name, a.value);
          }
          capturedReplaceChild.call(s.parentNode, ns, s);
        }
      };

      // override all cloning to fix the cloned subtree to contain properly
      // cloned templates.
      var cloneNode = Node.prototype.cloneNode = function cloneNode(deep) {
        var dom;
        // workaround for Edge bug cloning documentFragments
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8619646/
        if (!needsDocFrag && brokenDocFragment && this instanceof DocumentFragment) {
          if (!deep) {
            return this.ownerDocument.createDocumentFragment();
          } else {
            dom = importNode.call(this.ownerDocument, this, true);
          }
        } else if (this.nodeType === Node.ELEMENT_NODE && this.localName === TEMPLATE_TAG && this.namespaceURI == document.documentElement.namespaceURI) {
          dom = PolyfilledHTMLTemplateElement._cloneNode(this, deep);
        } else {
          dom = capturedCloneNode.call(this, deep);
        }
        // template.content is cloned iff `deep`.
        if (deep) {
          fixClonedDom(dom, this);
        }
        return dom;
      };

      // NOTE: we are cloning instead of importing <template>'s.
      // However, the ownerDocument of the cloned template will be correct!
      // This is because the native import node creates the right document owned
      // subtree and `fixClonedDom` inserts cloned templates into this subtree,
      // thus updating the owner doc.
      var importNode = Document.prototype.importNode = function importNode(element, deep) {
        deep = deep || false;
        if (element.localName === TEMPLATE_TAG) {
          return PolyfilledHTMLTemplateElement._cloneNode(element, deep);
        } else {
          var dom = capturedImportNode.call(this, element, deep);
          if (deep) {
            fixClonedDom(dom, element);
            fixClonedScripts(dom);
          }
          return dom;
        }
      };
    }
    if (needsTemplate) {
      window.HTMLTemplateElement = PolyfilledHTMLTemplateElement;
    }
  })();
  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("after")) {
        return;
      }
      Object.defineProperty(item, "after", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function after() {
          var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.parentNode.insertBefore(docFrag, this.nextSibling);
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("before")) {
        return;
      }
      Object.defineProperty(item, "before", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function before() {
          var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.parentNode.insertBefore(docFrag, this);
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;
      do {
        if (Element.prototype.matches.call(el, s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
  }
  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("remove")) {
        return;
      }
      Object.defineProperty(item, "remove", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function remove() {
          if (this.parentNode === null) {
            return;
          }
          this.parentNode.removeChild(this);
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
  function ReplaceWithPolyfill() {
    "use-strict";

    // For safari, and IE > 10
    var parent = this.parentNode,
      i = arguments.length,
      currentNode;
    if (!parent) return;
    if (!i)
      // if there are no arguments
      parent.removeChild(this);
    while (i--) {
      // i-- decrements i and returns the value of i before the decrement
      currentNode = arguments[i];
      if (typeof currentNode !== "object") {
        currentNode = this.ownerDocument.createTextNode(currentNode);
      } else if (currentNode.parentNode) {
        currentNode.parentNode.removeChild(currentNode);
      }
      // the value of "i" below is after the decrement
      if (!i)
        // if currentNode is the first argument (currentNode === arguments[0])
        parent.replaceChild(currentNode, this);
        // if currentNode isn't the first
      else parent.insertBefore(currentNode, this.previousSibling);
    }
  }
  if (!Element.prototype.replaceWith) Element.prototype.replaceWith = ReplaceWithPolyfill;
  if (!CharacterData.prototype.replaceWith) CharacterData.prototype.replaceWith = ReplaceWithPolyfill;
  if (!DocumentType.prototype.replaceWith) DocumentType.prototype.replaceWith = ReplaceWithPolyfill;
  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("append")) {
        return;
      }
      Object.defineProperty(item, "append", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function append() {
          var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.appendChild(docFrag);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]);
  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("prepend")) {
        return;
      }
      Object.defineProperty(item, "prepend", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function prepend() {
          var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.insertBefore(docFrag, this.firstChild);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]);
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  /*! formdata-polyfill. MIT License. Jimmy W?rting <https://jimmy.warting.se/opensource> */
  (function () {
    var h;
    function l(a) {
      var b = 0;
      return function () {
        return b < a.length ? {
          done: !1,
          value: a[b++]
        } : {
          done: !0
        };
      };
    }
    var m = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
      if (a == Array.prototype || a == Object.prototype) return a;
      a[b] = c.value;
      return a;
    };
    function n(a) {
      a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof commonjsGlobal && commonjsGlobal];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c;
      }
      throw Error("Cannot find global object");
    }
    var q = n(this);
    function r(a, b) {
      if (b) a: {
        var c = q;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          if (!(e in c)) break a;
          c = c[e];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d && null != b && m(c, a, {
          configurable: !0,
          writable: !0,
          value: b
        });
      }
    }
    r("Symbol", function (a) {
      function b(f) {
        if (this instanceof b) throw new TypeError("Symbol is not a constructor");
        return new c(d + (f || "") + "_" + e++, f);
      }
      function c(f, g) {
        this.A = f;
        m(this, "description", {
          configurable: !0,
          writable: !0,
          value: g
        });
      }
      if (a) return a;
      c.prototype.toString = function () {
        return this.A;
      };
      var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
        e = 0;
      return b;
    });
    r("Symbol.iterator", function (a) {
      if (a) return a;
      a = Symbol("Symbol.iterator");
      for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
        var d = q[b[c]];
        "function" === typeof d && "function" != typeof d.prototype[a] && m(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function value() {
            return u(l(this));
          }
        });
      }
      return a;
    });
    function u(a) {
      a = {
        next: a
      };
      a[Symbol.iterator] = function () {
        return this;
      };
      return a;
    }
    function v(a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      return b ? b.call(a) : {
        next: l(a)
      };
    }
    var w;
    if ("function" == typeof Object.setPrototypeOf) w = Object.setPrototypeOf;else {
      var y;
      a: {
        var z = {
            a: !0
          },
          A = {};
        try {
          A.__proto__ = z;
          y = A.a;
          break a;
        } catch (a) {}
        y = !1;
      }
      w = y ? function (a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a;
      } : null;
    }
    var B = w;
    function C() {
      this.m = !1;
      this.j = null;
      this.v = void 0;
      this.h = 1;
      this.u = this.C = 0;
      this.l = null;
    }
    function D(a) {
      if (a.m) throw new TypeError("Generator is already running");
      a.m = !0;
    }
    C.prototype.o = function (a) {
      this.v = a;
    };
    C.prototype.s = function (a) {
      this.l = {
        D: a,
        F: !0
      };
      this.h = this.C || this.u;
    };
    C.prototype["return"] = function (a) {
      this.l = {
        "return": a
      };
      this.h = this.u;
    };
    function E(a, b) {
      a.h = 3;
      return {
        value: b
      };
    }
    function F(a) {
      this.g = new C();
      this.G = a;
    }
    F.prototype.o = function (a) {
      D(this.g);
      if (this.g.j) return G(this, this.g.j.next, a, this.g.o);
      this.g.o(a);
      return H(this);
    };
    function I(a, b) {
      D(a.g);
      var c = a.g.j;
      if (c) return G(a, "return" in c ? c["return"] : function (d) {
        return {
          value: d,
          done: !0
        };
      }, b, a.g["return"]);
      a.g["return"](b);
      return H(a);
    }
    F.prototype.s = function (a) {
      D(this.g);
      if (this.g.j) return G(this, this.g.j["throw"], a, this.g.o);
      this.g.s(a);
      return H(this);
    };
    function G(a, b, c, d) {
      try {
        var e = b.call(a.g.j, c);
        if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
        if (!e.done) return a.g.m = !1, e;
        var f = e.value;
      } catch (g) {
        return a.g.j = null, a.g.s(g), H(a);
      }
      a.g.j = null;
      d.call(a.g, f);
      return H(a);
    }
    function H(a) {
      for (; a.g.h;) try {
        var b = a.G(a.g);
        if (b) return a.g.m = !1, {
          value: b.value,
          done: !1
        };
      } catch (c) {
        a.g.v = void 0, a.g.s(c);
      }
      a.g.m = !1;
      if (a.g.l) {
        b = a.g.l;
        a.g.l = null;
        if (b.F) throw b.D;
        return {
          value: b["return"],
          done: !0
        };
      }
      return {
        value: void 0,
        done: !0
      };
    }
    function J(a) {
      this.next = function (b) {
        return a.o(b);
      };
      this["throw"] = function (b) {
        return a.s(b);
      };
      this["return"] = function (b) {
        return I(a, b);
      };
      this[Symbol.iterator] = function () {
        return this;
      };
    }
    function K(a, b) {
      b = new J(new F(b));
      B && a.prototype && B(b, a.prototype);
      return b;
    }
    function L(a, b) {
      a instanceof String && (a += "");
      var c = 0,
        d = !1,
        e = {
          next: function next() {
            if (!d && c < a.length) {
              var f = c++;
              return {
                value: b(f, a[f]),
                done: !1
              };
            }
            d = !0;
            return {
              done: !0,
              value: void 0
            };
          }
        };
      e[Symbol.iterator] = function () {
        return e;
      };
      return e;
    }
    r("Array.prototype.entries", function (a) {
      return a ? a : function () {
        return L(this, function (b, c) {
          return [b, c];
        });
      };
    });
    if ("undefined" !== typeof Blob && ("undefined" === typeof FormData || !FormData.prototype.keys)) {
      var M = function M(a, b) {
          for (var c = 0; c < a.length; c++) b(a[c]);
        },
        N = function N(a) {
          return a.replace(/\r?\n|\r/g, "\r\n");
        },
        O = function O(a, b, c) {
          if (b instanceof Blob) {
            c = void 0 !== c ? String(c + "") : "string" === typeof b.name ? b.name : "blob";
            if (b.name !== c || "[object Blob]" === Object.prototype.toString.call(b)) b = new File([b], c);
            return [String(a), b];
          }
          return [String(a), String(b)];
        },
        P = function P(a, b) {
          if (a.length < b) throw new TypeError(b + " argument required, but only " + a.length + " present.");
        },
        Q = "object" === typeof globalThis ? globalThis : "object" === typeof window ? window : "object" === typeof self ? self : this,
        R = Q.FormData,
        S = Q.XMLHttpRequest && Q.XMLHttpRequest.prototype.send,
        T = Q.Request && Q.fetch,
        U = Q.navigator && Q.navigator.sendBeacon,
        V = Q.Element && Q.Element.prototype,
        W = Q.Symbol && Symbol.toStringTag;
      W && (Blob.prototype[W] || (Blob.prototype[W] = "Blob"), "File" in Q && !File.prototype[W] && (File.prototype[W] = "File"));
      try {
        new File([], "");
      } catch (a) {
        Q.File = function (b, c, d) {
          b = new Blob(b, d || {});
          Object.defineProperties(b, {
            name: {
              value: c
            },
            lastModified: {
              value: +(d && void 0 !== d.lastModified ? new Date(d.lastModified) : new Date())
            },
            toString: {
              value: function value() {
                return "[object File]";
              }
            }
          });
          W && Object.defineProperty(b, W, {
            value: "File"
          });
          return b;
        };
      }
      var escape = function escape(a) {
          return a.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22");
        },
        X = function X(a) {
          this.i = [];
          var b = this;
          a && M(a.elements, function (c) {
            if (c.name && !c.disabled && "submit" !== c.type && "button" !== c.type && !c.matches("form fieldset[disabled] *")) if ("file" === c.type) {
              var d = c.files && c.files.length ? c.files : [new File([], "", {
                type: "application/octet-stream"
              })];
              M(d, function (e) {
                b.append(c.name, e);
              });
            } else "select-multiple" === c.type || "select-one" === c.type ? M(c.options, function (e) {
              !e.disabled && e.selected && b.append(c.name, e.value);
            }) : "checkbox" === c.type || "radio" === c.type ? c.checked && b.append(c.name, c.value) : (d = "textarea" === c.type ? N(c.value) : c.value, b.append(c.name, d));
          });
        };
      h = X.prototype;
      h.append = function (a, b, c) {
        P(arguments, 2);
        this.i.push(O(a, b, c));
      };
      h["delete"] = function (a) {
        P(arguments, 1);
        var b = [];
        a = String(a);
        M(this.i, function (c) {
          c[0] !== a && b.push(c);
        });
        this.i = b;
      };
      h.entries = function b() {
        var c,
          d = this;
        return K(b, function (e) {
          1 == e.h && (c = 0);
          if (3 != e.h) return c < d.i.length ? e = E(e, d.i[c]) : (e.h = 0, e = void 0), e;
          c++;
          e.h = 2;
        });
      };
      h.forEach = function (b, c) {
        P(arguments, 1);
        for (var d = v(this), e = d.next(); !e.done; e = d.next()) {
          var f = v(e.value);
          e = f.next().value;
          f = f.next().value;
          b.call(c, f, e, this);
        }
      };
      h.get = function (b) {
        P(arguments, 1);
        var c = this.i;
        b = String(b);
        for (var d = 0; d < c.length; d++) if (c[d][0] === b) return c[d][1];
        return null;
      };
      h.getAll = function (b) {
        P(arguments, 1);
        var c = [];
        b = String(b);
        M(this.i, function (d) {
          d[0] === b && c.push(d[1]);
        });
        return c;
      };
      h.has = function (b) {
        P(arguments, 1);
        b = String(b);
        for (var c = 0; c < this.i.length; c++) if (this.i[c][0] === b) return !0;
        return !1;
      };
      h.keys = function c() {
        var d = this,
          e,
          f,
          g,
          k,
          p;
        return K(c, function (t) {
          1 == t.h && (e = v(d), f = e.next());
          if (3 != t.h) {
            if (f.done) {
              t.h = 0;
              return;
            }
            g = f.value;
            k = v(g);
            p = k.next().value;
            return E(t, p);
          }
          f = e.next();
          t.h = 2;
        });
      };
      h.set = function (c, d, e) {
        P(arguments, 2);
        c = String(c);
        var f = [],
          g = O(c, d, e),
          k = !0;
        M(this.i, function (p) {
          p[0] === c ? k && (k = !f.push(g)) : f.push(p);
        });
        k && f.push(g);
        this.i = f;
      };
      h.values = function d() {
        var e = this,
          f,
          g,
          k,
          p,
          t;
        return K(d, function (x) {
          1 == x.h && (f = v(e), g = f.next());
          if (3 != x.h) {
            if (g.done) {
              x.h = 0;
              return;
            }
            k = g.value;
            p = v(k);
            p.next();
            t = p.next().value;
            return E(x, t);
          }
          g = f.next();
          x.h = 2;
        });
      };
      X.prototype._asNative = function () {
        for (var d = new R(), e = v(this), f = e.next(); !f.done; f = e.next()) {
          var g = v(f.value);
          f = g.next().value;
          g = g.next().value;
          d.append(f, g);
        }
        return d;
      };
      X.prototype._blob = function () {
        var d = "----formdata-polyfill-" + Math.random(),
          e = [],
          f = "--" + d + '\r\nContent-Disposition: form-data; name="';
        this.forEach(function (g, k) {
          return "string" == typeof g ? e.push(f + escape(N(k)) + ('"\r\n\r\n' + N(g) + "\r\n")) : e.push(f + escape(N(k)) + ('"; filename="' + escape(g.name) + '"\r\nContent-Type: ' + (g.type || "application/octet-stream") + "\r\n\r\n"), g, "\r\n");
        });
        e.push("--" + d + "--");
        return new Blob(e, {
          type: "multipart/form-data; boundary=" + d
        });
      };
      X.prototype[Symbol.iterator] = function () {
        return this.entries();
      };
      X.prototype.toString = function () {
        return "[object FormData]";
      };
      V && !V.matches && (V.matches = V.matchesSelector || V.mozMatchesSelector || V.msMatchesSelector || V.oMatchesSelector || V.webkitMatchesSelector || function (d) {
        d = (this.document || this.ownerDocument).querySelectorAll(d);
        for (var e = d.length; 0 <= --e && d.item(e) !== this;);
        return -1 < e;
      });
      W && (X.prototype[W] = "FormData");
      if (S) {
        var Y = Q.XMLHttpRequest.prototype.setRequestHeader;
        Q.XMLHttpRequest.prototype.setRequestHeader = function (d, e) {
          Y.call(this, d, e);
          "content-type" === d.toLowerCase() && (this.B = !0);
        };
        Q.XMLHttpRequest.prototype.send = function (d) {
          d instanceof X ? (d = d._blob(), this.B || this.setRequestHeader("Content-Type", d.type), S.call(this, d)) : S.call(this, d);
        };
      }
      T && (Q.fetch = function (d, e) {
        e && e.body && e.body instanceof X && (e.body = e.body._blob());
        return T.call(this, d, e);
      });
      U && (Q.navigator.sendBeacon = function (d, e) {
        e instanceof X && (e = e._asNative());
        return U.call(this, d, e);
      });
      Q.FormData = X;
    }
  })();

  // Constant variables
  var UNDEFINED; // => undefined
  var PROXY_TARGET = "[[ProxyTarget]]";
  var PROXY_HANDLER = "[[ProxyHandler]]";
  var GET = "[[Get]]";
  var SET = "[[Set]]";
  var CALL = "[[Call]]";
  var CONSTRUCT = "[[Construct]]";
  var PROTOTYPE$2 = "__proto__";
  var PROXY_FLAG = "__PROXY__";
  var REVOKED_FLAG = "REVOKED";
  var defineProperty$f = Object.defineProperty;
  var defineProperties$1 = Object.defineProperties;
  var getPrototypeOf$6 = Object.getPrototypeOf;
  var getOwnPropertyDescriptor$9 = Object.getOwnPropertyDescriptor;
  var supportES5 = defineProperties$1 ? isNativeFn(defineProperties$1) : false;

  /**
   * Return the prototype of proxy object
   * @param {object} obj
   * @returns {object}
   */
  var getProxyProto = supportES5 ? Object[PROTOTYPE$2] ? getPrototypeOf$6 : function (obj) {
    return typeof obj === "function" ? obj[PROTOTYPE$2] || {} : getPrototypeOf$6(obj);
  } : function (obj) {
    return _isVbObject(obj) && _getVbInternalOf(obj)[PROTOTYPE$2] || {};
  };

  /**
   * Check if `value` is a pristine native function
   * @param {any} value
   * @returns {boolean}
   */
  function isNativeFn(value) {
    return typeof value === "function" && /\[native code\]/.test(value.toString());
  }

  /**
   * The Proxy constructor
   * @constructor
   * @param {object} target
   * @param {object} handler
   */
  function ProxyPolyfill(target, handler) {
    if (this instanceof ProxyPolyfill) {
      return createProxy(new Internal$1(target, handler));
    } else {
      throwTypeError("Constructor Proxy requires 'new'");
    }
  }

  /**
   * Create a revocable Proxy object
   * @param {object} target
   * @param {object} handler
   * @returns {{proxy: object, revoke: function}}
   */
  ProxyPolyfill.revocable = function (target, handler) {
    if (this instanceof ProxyPolyfill.revocable) {
      throwTypeError("Proxy.revocable is not a constructor");
    }
    var internal = new Internal$1(target, handler);
    var proxy = createProxy(internal);
    return {
      proxy: proxy,
      revoke: function revoke() {
        internal[PROXY_TARGET] = UNDEFINED;
        internal[PROXY_HANDLER] = UNDEFINED;
        if (!supportES5) {
          getProxyProto(proxy)[PROXY_FLAG] = REVOKED_FLAG;
        }
      }
    };
  };

  /**
   * Create a Proxy object
   * @param {Internal} internal
   * @returns {object}
   */
  function createProxy(internal) {
    var target = internal[PROXY_TARGET];
    var proxy;
    if (typeof target === "function") {
      proxy = proxyFunction(internal);
    } else if (target instanceof Array) {
      proxy = proxyArray(internal);
    } else {
      proxy = proxyObject(internal);
    }
    return proxy;
  }

  /**
   * Internal data
   * @constructor
   * @param {object} target
   * @param {object} handler
   */
  function Internal$1(target, handler) {
    if (!isObject$v(target) || !isObject$v(handler)) {
      throwTypeError("Cannot create proxy with a non-object as target or handler");
    }
    if (getProxyProto(target) && getProxyProto(target)[PROXY_FLAG] || (getProxyProto(handler) && getProxyProto(handler)[PROXY_FLAG]) === REVOKED_FLAG) {
      throwTypeError("Cannot create proxy with a revoked proxy as target or handler");
    }
    this[PROXY_TARGET] = target;
    this[PROXY_HANDLER] = handler;
  }

  /**
   * The implementation of internal method [[Get]]
   * @param {string} property
   * @param {object} receiver
   * @returns {any}
   */
  Internal$1.prototype[GET] = function (property, receiver) {
    var handler = this[PROXY_HANDLER];
    validateProxyHanler(handler, "get");
    if (handler.get == UNDEFINED) {
      return this[PROXY_TARGET][property];
    }
    if (typeof handler.get === "function") {
      return handler.get(this[PROXY_TARGET], property, receiver);
    }
    throwTypeError("Trap 'get' is not a function: " + handler.get);
  };

  /**
   * The implementation of internal method [[Set]]
   * @param {string} property
   * @param {any} value
   * @param {object} receiver
   */
  Internal$1.prototype[SET] = function (property, value, receiver) {
    var handler = this[PROXY_HANDLER];
    validateProxyHanler(handler, "set");
    if (handler.set == UNDEFINED) {
      this[PROXY_TARGET][property] = value;
    } else if (typeof handler.set === "function") {
      var result = handler.set(this[PROXY_TARGET], property, value, receiver);
      if (!result) {
        // If the set() method returns false in strict-mode code, a TypeError will be thrown.
        // throwTypeError("Trap 'set' returned false for property '" + property + "'");
        console.warn("Trap 'set' returned false for property '" + property + "'");
      }
      return Boolean(result);
    } else {
      throwTypeError("Trap 'set' is not a function: " + handler.set);
    }
  };

  /**
   * The implementation of internal method [[Call]]
   * @param {object} thisArg
   * @param {any[]} argList
   * @returns {any}
   */
  Internal$1.prototype[CALL] = function (thisArg, argList) {
    var handler = this[PROXY_HANDLER];
    validateProxyHanler(handler, "apply");
    if (handler.apply == UNDEFINED) {
      return this[PROXY_TARGET].apply(thisArg, argList);
    }
    if (typeof handler.apply === "function") {
      return handler.apply(this[PROXY_TARGET], thisArg, argList);
    }
    throwTypeError("Trap 'apply' is not a function: " + handler.apply);
  };

  /**
   * The implementation of internal method [[Construct]]
   * @param {any[]} argList
   * @param {object} newTarget
   * @returns {object}
   */
  Internal$1.prototype[CONSTRUCT] = function (argList, newTarget) {
    var handler = this[PROXY_HANDLER];
    validateProxyHanler(handler, "construct");
    var newObj;
    if (handler.construct == UNDEFINED) {
      newObj = evaluateNew(this[PROXY_TARGET], argList);
    } else if (typeof handler.construct === "function") {
      newObj = handler.construct(this[PROXY_TARGET], argList, newTarget);
    } else {
      throwTypeError("Trap 'construct' is not a function: " + handler.construct);
    }
    if (isObject$v(newObj)) {
      return newObj;
    } else {
      throwTypeError("Trap 'construct' returned non-object: " + newObj);
    }
  };

  /**
   * Validate the proxy hanler
   * @param {object} handler
   * @param {string} trap
   */
  function validateProxyHanler(handler, trap) {
    if (!handler) {
      throwTypeError("Cannot perform '" + trap + "' on a proxy that has been revoked");
    }
  }

  /**
   * Call constructor with 'new'
   * @param {function} F constructor
   * @param {any[]} argList
   * @returns {object}
   */
  function evaluateNew(F, argList) {
    var params = [];
    for (var i = 0, len = argList.length; i < len; ++i) {
      params.push("args[" + i + "]");
    }
    var executor = new Function("Ctor", "args", "return new Ctor(" + params.join(", ") + ")");
    return executor(F, argList);
  }

  /**
   * Throw a type error
   * @param {string} message
   */
  function throwTypeError(message) {
    throw new TypeError(message);
  }

  /**
   * Check if value is the language type of Object
   * @param {any} value
   * @returns {boolean}
   */
  function isObject$v(value) {
    return value ? typeof value === "object" || typeof value === "function" : false;
  }

  /**
   * Check if key is an own property of object
   * @param {object} obj
   * @param {string} key
   * @returns {boolean}
   */
  function hasOwnProperty$1(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }

  /**
   * Hack `Object.getOwnPropertyNames`
   */
  var getOwnPropertyNames$3 = Object.getOwnPropertyNames || function (obj) {
    var names = [];
    for (var key in obj) {
      if (hasOwnProperty$1(obj, key)) {
        names.push(key);
      }
    }
    return names;
  };

  /**
   * Set the prototype of function
   * @param {function} fn
   * @param {object} proto
   * @returns {object}
   */
  var setFuncProto = isNativeFn(Object.setPrototypeOf) ? Object.setPrototypeOf : Object[PROTOTYPE$2] ? function (fn, proto) {
    fn[PROTOTYPE$2] = proto;
    return fn;
  } : function (fn, proto) {
    return defineProperty$f(fn, PROTOTYPE$2, {
      value: proto
    });
  };

  /**
   * Hack `Object.create`
   */
  var objectCreate$1 = supportES5 ? Object.create : function (_, props) {
    var obj = defineProperties$1({}, props);
    if (_isVbObject(obj)) {
      var proto = {};
      proto[PROXY_FLAG] = UNDEFINED;
      _getVbInternalOf(obj)[PROTOTYPE$2] = proto;
    }
    return obj;
  };

  /**
   * Hack `Object.assign`
   */
  var objectAssign$1 = Object.assign || function (target, source) {
    for (var key in source) {
      if (hasOwnProperty$1(source, key)) {
        target[key] = source[key];
      }
    }
    return target;
  };

  /**
   * Proxy function
   * @param {Internal} internal
   * @returns {function}
   */
  function proxyFunction(internal) {
    var target = internal[PROXY_TARGET];
    function P() {
      return this instanceof P ? internal[CONSTRUCT](arguments, P) : internal[CALL](this, arguments);
    }
    P.prototype = target.prototype; // `prototype` is not configurable

    if (supportES5) {
      var descMap = observeProto(internal);
      var newProto = objectCreate$1(getPrototypeOf$6(target), descMap);
      setFuncProto(P, newProto);
      descMap = observeProperties(target, internal);
      for (var key in descMap) {
        if (hasOwnProperty$1(P, key)) delete descMap[key];
      }
      defineProperties$1(P, descMap);
    } else {
      objectAssign$1(P, target);
    }
    return P;
  }

  /**
   * Proxy array
   * @param {Internal} internal
   * @returns {object} array-like object
   */
  function proxyArray(internal) {
    var target = internal[PROXY_TARGET];
    var descMap, newProto;
    if (supportES5) {
      descMap = observeProto(internal);
      // Fix: `concat` does not work correctly on array-like object
      descMap.concat.get = function () {
        var val = internal[GET]("concat", this);
        return val === Array.prototype.concat ? val.bind(target) : val;
      };
      newProto = objectCreate$1(getPrototypeOf$6(target), descMap);
    }
    descMap = observeProperties(target, internal);
    // Observe the change of `length`, and synchronize
    // the properties of Proxy object to target array
    descMap.length.set = function (value) {
      var lenDiff = value - target.length;
      internal[SET]("length", value, this);
      if (lenDiff) syncArrayElement(lenDiff, this, internal);
    };
    return objectCreate$1(newProto, descMap);
  }

  /**
   * Proxy object
   * @param {Internal} internal
   * @returns {object}
   */
  function proxyObject(internal) {
    var target = internal[PROXY_TARGET];
    var descMap, newProto;
    if (supportES5) {
      descMap = observeProto(internal);
      newProto = objectCreate$1(getPrototypeOf$6(target), descMap);
    }
    descMap = observeProperties(target, internal);
    return objectCreate$1(newProto, descMap);
  }

  /**
   * Observe [[Prototype]]
   * @param {Internal} internal
   * @returns {object} descriptors
   */
  function observeProto(internal) {
    var descMap = {};
    var proto = internal[PROXY_TARGET];
    while (proto = getPrototypeOf$6(proto)) {
      var props = observeProperties(proto, internal);
      objectAssign$1(descMap, props);
    }
    descMap[PROXY_FLAG] = {
      get: function get() {
        return internal[PROXY_TARGET] ? UNDEFINED : REVOKED_FLAG;
      }
    };
    return descMap;
  }

  /**
   * Observe properties
   * @param {object} obj
   * @param {Internal} internal
   * @returns {object} descriptors
   */
  function observeProperties(obj, internal) {
    var names = getOwnPropertyNames$3(obj);
    var descMap = {};
    for (var i = names.length - 1; i >= 0; --i) {
      descMap[names[i]] = observeProperty(obj, names[i], internal);
    }
    return descMap;
  }

  /**
   * Observe property
   * @param {object} obj
   * @param {string} prop
   * @param {Internal} internal
   * @returns {{get: function, set: function, enumerable: boolean, configurable: boolean}}
   */
  function observeProperty(obj, prop, internal) {
    var desc = getOwnPropertyDescriptor$9(obj, prop);
    return {
      get: function get() {
        return internal[GET](prop, this);
      },
      set: function set(value) {
        internal[SET](prop, value, this);
      },
      enumerable: desc.enumerable,
      configurable: desc.configurable
    };
  }

  /**
   * Sync array element from P to target
   * @param {number} lenDiff
   * @param {object} P
   * @param {Internal} internal
   */
  function syncArrayElement(lenDiff, P, internal) {
    var target = internal[PROXY_TARGET];
    if (lenDiff > 0) {
      for (var tLen = target.length, i = tLen - lenDiff; i < tLen; ++i) {
        var desc = getOwnPropertyDescriptor$9(P, i);
        if (desc) defineProperty$f(target, i, desc);else target[i] = UNDEFINED;
        desc = observeProperty(target, i, internal);
        defineProperty$f(P, i, desc);
      }
    } else {
      for (var i = target.length, pLen = i - lenDiff; i < pLen; ++i) {
        delete P[i];
      }
    }
  }
  var Es6ProxyPolyfill = typeof Proxy === "undefined" ? ProxyPolyfill : Proxy;
  var globalObj = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self ||
  // eslint-disable-next-line no-undef
  typeof global !== "undefined" && global || {};
  globalObj.Proxy = typeof Proxy === "undefined" ? Es6ProxyPolyfill : Proxy;
  var check = function check(it) {
    return it && it.Math === Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$J =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  function () {
    return this;
  }() || Function('return this')();
  var objectGetOwnPropertyDescriptor = {};
  var fails$Y = function fails$Y(exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };
  var fails$X = fails$Y;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$X(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
      get: function get() {
        return 7;
      }
    })[1] !== 7;
  });
  var fails$W = fails$Y;
  var functionBindNative = !fails$W(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = function () {/* empty */}.bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });
  var NATIVE_BIND$4 = functionBindNative;
  var call$B = Function.prototype.call;
  var functionCall = NATIVE_BIND$4 ? call$B.bind(call$B) : function () {
    return call$B.apply(call$B, arguments);
  };
  var objectPropertyIsEnumerable = {};
  var $propertyIsEnumerable$2 = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$8 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$8 && !$propertyIsEnumerable$2.call({
    1: 2
  }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$8(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable$2;
  var createPropertyDescriptor$a = function createPropertyDescriptor$a(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  var NATIVE_BIND$3 = functionBindNative;
  var FunctionPrototype$3 = Function.prototype;
  var call$A = FunctionPrototype$3.call;
  var uncurryThisWithBind = NATIVE_BIND$3 && FunctionPrototype$3.bind.bind(call$A, call$A);
  var functionUncurryThis = NATIVE_BIND$3 ? uncurryThisWithBind : function (fn) {
    return function () {
      return call$A.apply(fn, arguments);
    };
  };
  var uncurryThis$Z = functionUncurryThis;
  var toString$u = uncurryThis$Z({}.toString);
  var stringSlice$e = uncurryThis$Z(''.slice);
  var classofRaw$2 = function classofRaw$2(it) {
    return stringSlice$e(toString$u(it), 8, -1);
  };
  var uncurryThis$Y = functionUncurryThis;
  var fails$V = fails$Y;
  var classof$g = classofRaw$2;
  var $Object$5 = Object;
  var split$3 = uncurryThis$Y(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$V(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object$5('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$g(it) === 'String' ? split$3(it, '') : $Object$5(it);
  } : $Object$5;

  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  var isNullOrUndefined$b = function isNullOrUndefined$b(it) {
    return it === null || it === undefined;
  };
  var isNullOrUndefined$a = isNullOrUndefined$b;
  var $TypeError$p = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$g = function requireObjectCoercible$g(it) {
    if (isNullOrUndefined$a(it)) throw new $TypeError$p("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject$4 = indexedObject;
  var requireObjectCoercible$f = requireObjectCoercible$g;
  var toIndexedObject$c = function toIndexedObject$c(it) {
    return IndexedObject$4(requireObjectCoercible$f(it));
  };

  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
  var documentAll = typeof document == 'object' && document.all;

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
  var isCallable$v = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
    return typeof argument == 'function' || argument === documentAll;
  } : function (argument) {
    return typeof argument == 'function';
  };
  var isCallable$u = isCallable$v;
  var isObject$u = function isObject$u(it) {
    return typeof it == 'object' ? it !== null : isCallable$u(it);
  };
  var global$I = global$J;
  var isCallable$t = isCallable$v;
  var aFunction = function aFunction(argument) {
    return isCallable$t(argument) ? argument : undefined;
  };
  var getBuiltIn$j = function getBuiltIn$j(namespace, method) {
    return arguments.length < 2 ? aFunction(global$I[namespace]) : global$I[namespace] && global$I[namespace][method];
  };
  var uncurryThis$X = functionUncurryThis;
  var objectIsPrototypeOf = uncurryThis$X({}.isPrototypeOf);
  var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';
  var global$H = global$J;
  var userAgent$5 = engineUserAgent;
  var process$3 = global$H.process;
  var Deno$1 = global$H.Deno;
  var versions = process$3 && process$3.versions || Deno$1 && Deno$1.version;
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
  if (!version && userAgent$5) {
    match = userAgent$5.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent$5.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }
  var engineV8Version = version;

  /* eslint-disable es/no-symbol -- required for testing */
  var V8_VERSION$3 = engineV8Version;
  var fails$U = fails$Y;
  var global$G = global$J;
  var $String$7 = global$G.String;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$U(function () {
    var symbol = Symbol('symbol detection');
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String$7(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$3 && V8_VERSION$3 < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */
  var NATIVE_SYMBOL$7 = symbolConstructorDetection;
  var useSymbolAsUid = NATIVE_SYMBOL$7 && !Symbol.sham && typeof Symbol.iterator == 'symbol';
  var getBuiltIn$i = getBuiltIn$j;
  var isCallable$s = isCallable$v;
  var isPrototypeOf$8 = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
  var $Object$4 = Object;
  var isSymbol$5 = USE_SYMBOL_AS_UID$1 ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$i('Symbol');
    return isCallable$s($Symbol) && isPrototypeOf$8($Symbol.prototype, $Object$4(it));
  };
  var $String$6 = String;
  var tryToString$6 = function tryToString$6(argument) {
    try {
      return $String$6(argument);
    } catch (error) {
      return 'Object';
    }
  };
  var isCallable$r = isCallable$v;
  var tryToString$5 = tryToString$6;
  var $TypeError$o = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable$j = function aCallable$j(argument) {
    if (isCallable$r(argument)) return argument;
    throw new $TypeError$o(tryToString$5(argument) + ' is not a function');
  };
  var aCallable$i = aCallable$j;
  var isNullOrUndefined$9 = isNullOrUndefined$b;

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod$8 = function getMethod$8(V, P) {
    var func = V[P];
    return isNullOrUndefined$9(func) ? undefined : aCallable$i(func);
  };
  var call$z = functionCall;
  var isCallable$q = isCallable$v;
  var isObject$t = isObject$u;
  var $TypeError$n = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$2 = function ordinaryToPrimitive$2(input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$q(fn = input.toString) && !isObject$t(val = call$z(fn, input))) return val;
    if (isCallable$q(fn = input.valueOf) && !isObject$t(val = call$z(fn, input))) return val;
    if (pref !== 'string' && isCallable$q(fn = input.toString) && !isObject$t(val = call$z(fn, input))) return val;
    throw new $TypeError$n("Can't convert object to primitive value");
  };
  var sharedStore = {
    exports: {}
  };
  var isPure = false;
  var global$F = global$J;

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$e = Object.defineProperty;
  var defineGlobalProperty$3 = function defineGlobalProperty$3(key, value) {
    try {
      defineProperty$e(global$F, key, {
        value: value,
        configurable: true,
        writable: true
      });
    } catch (error) {
      global$F[key] = value;
    }
    return value;
  };
  var globalThis$1 = global$J;
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
  var shared$7 = function shared$7(key, value) {
    return store$2[key] || (store$2[key] = value || {});
  };
  var requireObjectCoercible$e = requireObjectCoercible$g;
  var $Object$3 = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$i = function toObject$i(argument) {
    return $Object$3(requireObjectCoercible$e(argument));
  };
  var uncurryThis$W = functionUncurryThis;
  var toObject$h = toObject$i;
  var hasOwnProperty = uncurryThis$W({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject$h(it), key);
  };
  var uncurryThis$V = functionUncurryThis;
  var id$2 = 0;
  var postfix = Math.random();
  var toString$t = uncurryThis$V(1.0.toString);
  var uid$4 = function uid$4(key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$t(++id$2 + postfix, 36);
  };
  var global$E = global$J;
  var shared$6 = shared$7;
  var hasOwn$u = hasOwnProperty_1;
  var uid$3 = uid$4;
  var NATIVE_SYMBOL$6 = symbolConstructorDetection;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;
  var Symbol$3 = global$E.Symbol;
  var WellKnownSymbolsStore$1 = shared$6('wks');
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$3['for'] || Symbol$3 : Symbol$3 && Symbol$3.withoutSetter || uid$3;
  var wellKnownSymbol$v = function wellKnownSymbol$v(name) {
    if (!hasOwn$u(WellKnownSymbolsStore$1, name)) {
      WellKnownSymbolsStore$1[name] = NATIVE_SYMBOL$6 && hasOwn$u(Symbol$3, name) ? Symbol$3[name] : createWellKnownSymbol('Symbol.' + name);
    }
    return WellKnownSymbolsStore$1[name];
  };
  var call$y = functionCall;
  var isObject$s = isObject$u;
  var isSymbol$4 = isSymbol$5;
  var getMethod$7 = getMethod$8;
  var ordinaryToPrimitive$1 = ordinaryToPrimitive$2;
  var wellKnownSymbol$u = wellKnownSymbol$v;
  var $TypeError$m = TypeError;
  var TO_PRIMITIVE$1 = wellKnownSymbol$u('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive$3 = function toPrimitive$3(input, pref) {
    if (!isObject$s(input) || isSymbol$4(input)) return input;
    var exoticToPrim = getMethod$7(input, TO_PRIMITIVE$1);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call$y(exoticToPrim, input, pref);
      if (!isObject$s(result) || isSymbol$4(result)) return result;
      throw new $TypeError$m("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive$1(input, pref);
  };
  var toPrimitive$2 = toPrimitive$3;
  var isSymbol$3 = isSymbol$5;

  // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  var toPropertyKey$4 = function toPropertyKey$4(argument) {
    var key = toPrimitive$2(argument, 'string');
    return isSymbol$3(key) ? key : key + '';
  };
  var global$D = global$J;
  var isObject$r = isObject$u;
  var document$3 = global$D.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject$r(document$3) && isObject$r(document$3.createElement);
  var documentCreateElement$2 = function documentCreateElement$2(it) {
    return EXISTS$1 ? document$3.createElement(it) : {};
  };
  var DESCRIPTORS$E = descriptors;
  var fails$T = fails$Y;
  var createElement$1 = documentCreateElement$2;

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$E && !fails$T(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement$1('div'), 'a', {
      get: function get() {
        return 7;
      }
    }).a !== 7;
  });
  var DESCRIPTORS$D = descriptors;
  var call$x = functionCall;
  var propertyIsEnumerableModule$2 = objectPropertyIsEnumerable;
  var createPropertyDescriptor$9 = createPropertyDescriptor$a;
  var toIndexedObject$b = toIndexedObject$c;
  var toPropertyKey$3 = toPropertyKey$4;
  var hasOwn$t = hasOwnProperty_1;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$D ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$b(O);
    P = toPropertyKey$3(P);
    if (IE8_DOM_DEFINE$1) try {
      return $getOwnPropertyDescriptor$2(O, P);
    } catch (error) {/* empty */}
    if (hasOwn$t(O, P)) return createPropertyDescriptor$9(!call$x(propertyIsEnumerableModule$2.f, O, P), O[P]);
  };
  var objectDefineProperty = {};
  var DESCRIPTORS$C = descriptors;
  var fails$S = fails$Y;

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = DESCRIPTORS$C && fails$S(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () {/* empty */}, 'prototype', {
      value: 42,
      writable: false
    }).prototype !== 42;
  });
  var isObject$q = isObject$u;
  var $String$5 = String;
  var $TypeError$l = TypeError;

  // `Assert: Type(argument) is Object`
  var anObject$D = function anObject$D(argument) {
    if (isObject$q(argument)) return argument;
    throw new $TypeError$l($String$5(argument) + ' is not an object');
  };
  var DESCRIPTORS$B = descriptors;
  var IE8_DOM_DEFINE = ie8DomDefine;
  var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
  var anObject$C = anObject$D;
  var toPropertyKey$2 = toPropertyKey$4;
  var $TypeError$k = TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty$1 = Object.defineProperty;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS$B ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
    anObject$C(O);
    P = toPropertyKey$2(P);
    anObject$C(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
      var current = $getOwnPropertyDescriptor$1(O, P);
      if (current && current[WRITABLE]) {
        O[P] = Attributes.value;
        Attributes = {
          configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: false
        };
      }
    }
    return $defineProperty$1(O, P, Attributes);
  } : $defineProperty$1 : function defineProperty(O, P, Attributes) {
    anObject$C(O);
    P = toPropertyKey$2(P);
    anObject$C(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty$1(O, P, Attributes);
    } catch (error) {/* empty */}
    if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$k('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };
  var DESCRIPTORS$A = descriptors;
  var definePropertyModule$7 = objectDefineProperty;
  var createPropertyDescriptor$8 = createPropertyDescriptor$a;
  var createNonEnumerableProperty$b = DESCRIPTORS$A ? function (object, key, value) {
    return definePropertyModule$7.f(object, key, createPropertyDescriptor$8(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };
  var makeBuiltIn$3 = {
    exports: {}
  };
  var DESCRIPTORS$z = descriptors;
  var hasOwn$s = hasOwnProperty_1;
  var FunctionPrototype$2 = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS$z && Object.getOwnPropertyDescriptor;
  var EXISTS = hasOwn$s(FunctionPrototype$2, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && function something() {/* empty */}.name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$z || DESCRIPTORS$z && getDescriptor(FunctionPrototype$2, 'name').configurable);
  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };
  var uncurryThis$U = functionUncurryThis;
  var isCallable$p = isCallable$v;
  var store$1 = sharedStoreExports;
  var functionToString$1 = uncurryThis$U(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable$p(store$1.inspectSource)) {
    store$1.inspectSource = function (it) {
      return functionToString$1(it);
    };
  }
  var inspectSource$3 = store$1.inspectSource;
  var global$C = global$J;
  var isCallable$o = isCallable$v;
  var WeakMap$2 = global$C.WeakMap;
  var weakMapBasicDetection = isCallable$o(WeakMap$2) && /native code/.test(String(WeakMap$2));
  var shared$5 = shared$7;
  var uid$2 = uid$4;
  var keys$2 = shared$5('keys');
  var sharedKey$4 = function sharedKey$4(key) {
    return keys$2[key] || (keys$2[key] = uid$2(key));
  };
  var hiddenKeys$6 = {};
  var NATIVE_WEAK_MAP$1 = weakMapBasicDetection;
  var global$B = global$J;
  var isObject$p = isObject$u;
  var createNonEnumerableProperty$a = createNonEnumerableProperty$b;
  var hasOwn$r = hasOwnProperty_1;
  var shared$4 = sharedStoreExports;
  var sharedKey$3 = sharedKey$4;
  var hiddenKeys$5 = hiddenKeys$6;
  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$6 = global$B.TypeError;
  var WeakMap$1 = global$B.WeakMap;
  var set$2, get$1, has$6;
  var enforce = function enforce(it) {
    return has$6(it) ? get$1(it) : set$2(it, {});
  };
  var getterFor$1 = function getterFor$1(TYPE) {
    return function (it) {
      var state;
      if (!isObject$p(it) || (state = get$1(it)).type !== TYPE) {
        throw new TypeError$6('Incompatible receiver, ' + TYPE + ' required');
      }
      return state;
    };
  };
  if (NATIVE_WEAK_MAP$1 || shared$4.state) {
    var store = shared$4.state || (shared$4.state = new WeakMap$1());
    /* eslint-disable no-self-assign -- prototype methods protection */
    store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */
    set$2 = function set$2(it, metadata) {
      if (store.has(it)) throw new TypeError$6(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      store.set(it, metadata);
      return metadata;
    };
    get$1 = function get$1(it) {
      return store.get(it) || {};
    };
    has$6 = function has$6(it) {
      return store.has(it);
    };
  } else {
    var STATE = sharedKey$3('state');
    hiddenKeys$5[STATE] = true;
    set$2 = function set$2(it, metadata) {
      if (hasOwn$r(it, STATE)) throw new TypeError$6(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$a(it, STATE, metadata);
      return metadata;
    };
    get$1 = function get$1(it) {
      return hasOwn$r(it, STATE) ? it[STATE] : {};
    };
    has$6 = function has$6(it) {
      return hasOwn$r(it, STATE);
    };
  }
  var internalState = {
    set: set$2,
    get: get$1,
    has: has$6,
    enforce: enforce,
    getterFor: getterFor$1
  };
  var uncurryThis$T = functionUncurryThis;
  var fails$R = fails$Y;
  var isCallable$n = isCallable$v;
  var hasOwn$q = hasOwnProperty_1;
  var DESCRIPTORS$y = descriptors;
  var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
  var inspectSource$2 = inspectSource$3;
  var InternalStateModule$a = internalState;
  var enforceInternalState$2 = InternalStateModule$a.enforce;
  var getInternalState$7 = InternalStateModule$a.get;
  var $String$4 = String;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$d = Object.defineProperty;
  var stringSlice$d = uncurryThis$T(''.slice);
  var replace$c = uncurryThis$T(''.replace);
  var join$4 = uncurryThis$T([].join);
  var CONFIGURABLE_LENGTH = DESCRIPTORS$y && !fails$R(function () {
    return defineProperty$d(function () {/* empty */}, 'length', {
      value: 8
    }).length !== 8;
  });
  var TEMPLATE = String(String).split('String');
  var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
    if (stringSlice$d($String$4(name), 0, 7) === 'Symbol(') {
      name = '[' + replace$c($String$4(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn$q(value, 'name') || CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name) {
      if (DESCRIPTORS$y) defineProperty$d(value, 'name', {
        value: name,
        configurable: true
      });else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn$q(options, 'arity') && value.length !== options.arity) {
      defineProperty$d(value, 'length', {
        value: options.arity
      });
    }
    try {
      if (options && hasOwn$q(options, 'constructor') && options.constructor) {
        if (DESCRIPTORS$y) defineProperty$d(value, 'prototype', {
          writable: false
        });
        // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
      } else if (value.prototype) value.prototype = undefined;
    } catch (error) {/* empty */}
    var state = enforceInternalState$2(value);
    if (!hasOwn$q(state, 'source')) {
      state.source = join$4(TEMPLATE, typeof name == 'string' ? name : '');
    }
    return value;
  };

  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  // eslint-disable-next-line no-extend-native -- required
  Function.prototype.toString = makeBuiltIn$2(function toString() {
    return isCallable$n(this) && getInternalState$7(this).source || inspectSource$2(this);
  }, 'toString');
  var makeBuiltInExports = makeBuiltIn$3.exports;
  var isCallable$m = isCallable$v;
  var definePropertyModule$6 = objectDefineProperty;
  var makeBuiltIn$1 = makeBuiltInExports;
  var defineGlobalProperty$1 = defineGlobalProperty$3;
  var defineBuiltIn$l = function defineBuiltIn$l(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable$m(value)) makeBuiltIn$1(value, name, options);
    if (options.global) {
      if (simple) O[key] = value;else defineGlobalProperty$1(key, value);
    } else {
      try {
        if (!options.unsafe) delete O[key];else if (O[key]) simple = true;
      } catch (error) {/* empty */}
      if (simple) O[key] = value;else definePropertyModule$6.f(O, key, {
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
  var floor$5 = Math.floor;

  // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc
  // eslint-disable-next-line es/no-math-trunc -- safe
  var mathTrunc = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor$5 : ceil)(n);
  };
  var trunc = mathTrunc;

  // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity
  var toIntegerOrInfinity$9 = function toIntegerOrInfinity$9(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
  };
  var toIntegerOrInfinity$8 = toIntegerOrInfinity$9;
  var max$5 = Math.max;
  var min$7 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex$4 = function toAbsoluteIndex$4(index, length) {
    var integer = toIntegerOrInfinity$8(index);
    return integer < 0 ? max$5(integer + length, 0) : min$7(integer, length);
  };
  var toIntegerOrInfinity$7 = toIntegerOrInfinity$9;
  var min$6 = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength$6 = function toLength$6(argument) {
    var len = toIntegerOrInfinity$7(argument);
    return len > 0 ? min$6(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };
  var toLength$5 = toLength$6;

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  var lengthOfArrayLike$d = function lengthOfArrayLike$d(obj) {
    return toLength$5(obj.length);
  };
  var toIndexedObject$a = toIndexedObject$c;
  var toAbsoluteIndex$3 = toAbsoluteIndex$4;
  var lengthOfArrayLike$c = lengthOfArrayLike$d;

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$5 = function createMethod$5(IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$a($this);
      var length = lengthOfArrayLike$c(O);
      if (length === 0) return !IS_INCLUDES && -1;
      var index = toAbsoluteIndex$3(fromIndex, length);
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
    includes: createMethod$5(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$5(false)
  };
  var uncurryThis$S = functionUncurryThis;
  var hasOwn$p = hasOwnProperty_1;
  var toIndexedObject$9 = toIndexedObject$c;
  var indexOf$1 = arrayIncludes.indexOf;
  var hiddenKeys$4 = hiddenKeys$6;
  var push$d = uncurryThis$S([].push);
  var objectKeysInternal = function objectKeysInternal(object, names) {
    var O = toIndexedObject$9(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwn$p(hiddenKeys$4, key) && hasOwn$p(O, key) && push$d(result, key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwn$p(O, key = names[i++])) {
      ~indexOf$1(result, key) || push$d(result, key);
    }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys$3 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
  var internalObjectKeys$1 = objectKeysInternal;
  var enumBugKeys$2 = enumBugKeys$3;
  var hiddenKeys$3 = enumBugKeys$2.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe
  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys$1(O, hiddenKeys$3);
  };
  var objectGetOwnPropertySymbols = {};

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;
  var getBuiltIn$h = getBuiltIn$j;
  var uncurryThis$R = functionUncurryThis;
  var getOwnPropertyNamesModule$2 = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule$3 = objectGetOwnPropertySymbols;
  var anObject$B = anObject$D;
  var concat$3 = uncurryThis$R([].concat);

  // all object keys, includes non-enumerable and symbols
  var ownKeys$3 = getBuiltIn$h('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule$2.f(anObject$B(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule$3.f;
    return getOwnPropertySymbols ? concat$3(keys, getOwnPropertySymbols(it)) : keys;
  };
  var hasOwn$o = hasOwnProperty_1;
  var ownKeys$2 = ownKeys$3;
  var getOwnPropertyDescriptorModule$4 = objectGetOwnPropertyDescriptor;
  var definePropertyModule$5 = objectDefineProperty;
  var copyConstructorProperties$4 = function copyConstructorProperties$4(target, source, exceptions) {
    var keys = ownKeys$2(source);
    var defineProperty = definePropertyModule$5.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$4.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwn$o(target, key) && !(exceptions && hasOwn$o(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };
  var fails$Q = fails$Y;
  var isCallable$l = isCallable$v;
  var replacement = /#|\.prototype\./;
  var isForced$5 = function isForced$5(feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true : value === NATIVE ? false : isCallable$l(detection) ? fails$Q(detection) : !!detection;
  };
  var normalize = isForced$5.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };
  var data = isForced$5.data = {};
  var NATIVE = isForced$5.NATIVE = 'N';
  var POLYFILL = isForced$5.POLYFILL = 'P';
  var isForced_1 = isForced$5;
  var global$A = global$J;
  var getOwnPropertyDescriptor$7 = objectGetOwnPropertyDescriptor.f;
  var createNonEnumerableProperty$9 = createNonEnumerableProperty$b;
  var defineBuiltIn$k = defineBuiltIn$l;
  var defineGlobalProperty = defineGlobalProperty$3;
  var copyConstructorProperties$3 = copyConstructorProperties$4;
  var isForced$4 = isForced_1;

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
  var _export = function _export(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global$A;
    } else if (STATIC) {
      target = global$A[TARGET] || defineGlobalProperty(TARGET, {});
    } else {
      target = global$A[TARGET] && global$A[TARGET].prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor$7(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced$4(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty == typeof targetProperty) continue;
        copyConstructorProperties$3(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty$9(sourceProperty, 'sham', true);
      }
      defineBuiltIn$k(target, key, sourceProperty, options);
    }
  };
  var wellKnownSymbol$t = wellKnownSymbol$v;
  var TO_STRING_TAG$4 = wellKnownSymbol$t('toStringTag');
  var test$2 = {};
  test$2[TO_STRING_TAG$4] = 'z';
  var toStringTagSupport = String(test$2) === '[object z]';
  var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
  var isCallable$k = isCallable$v;
  var classofRaw$1 = classofRaw$2;
  var wellKnownSymbol$s = wellKnownSymbol$v;
  var TO_STRING_TAG$3 = wellKnownSymbol$s('toStringTag');
  var $Object$2 = Object;

  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw$1(function () {
    return arguments;
  }()) === 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function tryGet(it, key) {
    try {
      return it[key];
    } catch (error) {/* empty */}
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof$f = TO_STRING_TAG_SUPPORT$2 ? classofRaw$1 : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object$2(it), TO_STRING_TAG$3)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw$1(O)
    // ES3 arguments fallback
    : (result = classofRaw$1(O)) === 'Object' && isCallable$k(O.callee) ? 'Arguments' : result;
  };
  var classof$e = classof$f;
  var $String$3 = String;
  var toString$s = function toString$s(argument) {
    if (classof$e(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
    return $String$3(argument);
  };
  var objectDefineProperties = {};
  var internalObjectKeys = objectKeysInternal;
  var enumBugKeys$1 = enumBugKeys$3;

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe
  var objectKeys$4 = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys$1);
  };
  var DESCRIPTORS$x = descriptors;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var definePropertyModule$4 = objectDefineProperty;
  var anObject$A = anObject$D;
  var toIndexedObject$8 = toIndexedObject$c;
  var objectKeys$3 = objectKeys$4;

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  objectDefineProperties.f = DESCRIPTORS$x && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$A(O);
    var props = toIndexedObject$8(Properties);
    var keys = objectKeys$3(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) definePropertyModule$4.f(O, key = keys[index++], props[key]);
    return O;
  };
  var getBuiltIn$g = getBuiltIn$j;
  var html$2 = getBuiltIn$g('document', 'documentElement');

  /* global ActiveXObject -- old IE, WSH */
  var anObject$z = anObject$D;
  var definePropertiesModule$1 = objectDefineProperties;
  var enumBugKeys = enumBugKeys$3;
  var hiddenKeys$2 = hiddenKeys$6;
  var html$1 = html$2;
  var documentCreateElement$1 = documentCreateElement$2;
  var sharedKey$2 = sharedKey$4;
  var GT = '>';
  var LT = '<';
  var PROTOTYPE$1 = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO$1 = sharedKey$2('IE_PROTO');
  var EmptyConstructor = function EmptyConstructor() {/* empty */};
  var scriptTag = function scriptTag(content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  };

  // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
  };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement$1('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html$1.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };

  // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var activeXDocument;
  var _NullProtoObject = function NullProtoObject() {
    try {
      activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) {/* ignore */}
    _NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
    : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH
    var length = enumBugKeys.length;
    while (length--) delete _NullProtoObject[PROTOTYPE$1][enumBugKeys[length]];
    return _NullProtoObject();
  };
  hiddenKeys$2[IE_PROTO$1] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  // eslint-disable-next-line es/no-object-create -- safe
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE$1] = anObject$z(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE$1] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = _NullProtoObject();
    return Properties === undefined ? result : definePropertiesModule$1.f(result, Properties);
  };
  var objectGetOwnPropertyNamesExternal = {};
  var uncurryThis$Q = functionUncurryThis;
  var arraySlice$7 = uncurryThis$Q([].slice);

  /* eslint-disable es/no-object-getownpropertynames -- safe */
  var classof$d = classofRaw$2;
  var toIndexedObject$7 = toIndexedObject$c;
  var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
  var arraySlice$6 = arraySlice$7;
  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  var getWindowNames = function getWindowNames(it) {
    try {
      return $getOwnPropertyNames$1(it);
    } catch (error) {
      return arraySlice$6(windowNames);
    }
  };

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
    return windowNames && classof$d(it) === 'Window' ? getWindowNames(it) : $getOwnPropertyNames$1(toIndexedObject$7(it));
  };
  var makeBuiltIn = makeBuiltInExports;
  var defineProperty$c = objectDefineProperty;
  var defineBuiltInAccessor$e = function defineBuiltInAccessor$e(target, name, descriptor) {
    if (descriptor.get) makeBuiltIn(descriptor.get, name, {
      getter: true
    });
    if (descriptor.set) makeBuiltIn(descriptor.set, name, {
      setter: true
    });
    return defineProperty$c.f(target, name, descriptor);
  };
  var wellKnownSymbolWrapped = {};
  var wellKnownSymbol$r = wellKnownSymbol$v;
  wellKnownSymbolWrapped.f = wellKnownSymbol$r;
  var global$z = global$J;
  var path$2 = global$z;
  var path$1 = path$2;
  var hasOwn$n = hasOwnProperty_1;
  var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
  var defineProperty$b = objectDefineProperty.f;
  var wellKnownSymbolDefine = function wellKnownSymbolDefine(NAME) {
    var Symbol = path$1.Symbol || (path$1.Symbol = {});
    if (!hasOwn$n(Symbol, NAME)) defineProperty$b(Symbol, NAME, {
      value: wrappedWellKnownSymbolModule$1.f(NAME)
    });
  };
  var call$w = functionCall;
  var getBuiltIn$f = getBuiltIn$j;
  var wellKnownSymbol$q = wellKnownSymbol$v;
  var defineBuiltIn$j = defineBuiltIn$l;
  var symbolDefineToPrimitive = function symbolDefineToPrimitive() {
    var Symbol = getBuiltIn$f('Symbol');
    var SymbolPrototype = Symbol && Symbol.prototype;
    var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
    var TO_PRIMITIVE = wellKnownSymbol$q('toPrimitive');
    if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
      // `Symbol.prototype[@@toPrimitive]` method
      // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
      // eslint-disable-next-line no-unused-vars -- required for .length
      defineBuiltIn$j(SymbolPrototype, TO_PRIMITIVE, function (hint) {
        return call$w(valueOf, this);
      }, {
        arity: 1
      });
    }
  };
  var defineProperty$a = objectDefineProperty.f;
  var hasOwn$m = hasOwnProperty_1;
  var wellKnownSymbol$p = wellKnownSymbol$v;
  var TO_STRING_TAG$2 = wellKnownSymbol$p('toStringTag');
  var setToStringTag$d = function setToStringTag$d(target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;
    if (target && !hasOwn$m(target, TO_STRING_TAG$2)) {
      defineProperty$a(target, TO_STRING_TAG$2, {
        configurable: true,
        value: TAG
      });
    }
  };
  var classofRaw = classofRaw$2;
  var uncurryThis$P = functionUncurryThis;
  var functionUncurryThisClause = function functionUncurryThisClause(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === 'Function') return uncurryThis$P(fn);
  };
  var uncurryThis$O = functionUncurryThisClause;
  var aCallable$h = aCallable$j;
  var NATIVE_BIND$2 = functionBindNative;
  var bind$b = uncurryThis$O(uncurryThis$O.bind);

  // optional / simple context binding
  var functionBindContext = function functionBindContext(fn, that) {
    aCallable$h(fn);
    return that === undefined ? fn : NATIVE_BIND$2 ? bind$b(fn, that) : function /* ...args */
    () {
      return fn.apply(that, arguments);
    };
  };
  var classof$c = classofRaw$2;

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray$9 = Array.isArray || function isArray(argument) {
    return classof$c(argument) === 'Array';
  };
  var uncurryThis$N = functionUncurryThis;
  var fails$P = fails$Y;
  var isCallable$j = isCallable$v;
  var classof$b = classof$f;
  var getBuiltIn$e = getBuiltIn$j;
  var inspectSource$1 = inspectSource$3;
  var noop = function noop() {/* empty */};
  var construct$1 = getBuiltIn$e('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec$9 = uncurryThis$N(constructorRegExp.exec);
  var INCORRECT_TO_STRING$2 = !constructorRegExp.test(noop);
  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable$j(argument)) return false;
    try {
      construct$1(noop, [], argument);
      return true;
    } catch (error) {
      return false;
    }
  };
  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable$j(argument)) return false;
    switch (classof$b(argument)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction':
        return false;
    }
    try {
      // we can't check .prototype since constructors produced by .bind haven't it
      // `Function#toString` throws on some built-it function in some legacy engines
      // (for example, `DOMQuad` and similar in FF41-)
      return INCORRECT_TO_STRING$2 || !!exec$9(constructorRegExp, inspectSource$1(argument));
    } catch (error) {
      return true;
    }
  };
  isConstructorLegacy.sham = true;

  // `IsConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-isconstructor
  var isConstructor$4 = !construct$1 || fails$P(function () {
    var called;
    return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
      called = true;
    }) || called;
  }) ? isConstructorLegacy : isConstructorModern;
  var isArray$8 = isArray$9;
  var isConstructor$3 = isConstructor$4;
  var isObject$o = isObject$u;
  var wellKnownSymbol$o = wellKnownSymbol$v;
  var SPECIES$6 = wellKnownSymbol$o('species');
  var $Array$2 = Array;

  // a part of `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesConstructor$1 = function arraySpeciesConstructor$1(originalArray) {
    var C;
    if (isArray$8(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (isConstructor$3(C) && (C === $Array$2 || isArray$8(C.prototype))) C = undefined;else if (isObject$o(C)) {
        C = C[SPECIES$6];
        if (C === null) C = undefined;
      }
    }
    return C === undefined ? $Array$2 : C;
  };
  var arraySpeciesConstructor = arraySpeciesConstructor$1;

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate$3 = function arraySpeciesCreate$3(originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
  };
  var bind$a = functionBindContext;
  var uncurryThis$M = functionUncurryThis;
  var IndexedObject$3 = indexedObject;
  var toObject$g = toObject$i;
  var lengthOfArrayLike$b = lengthOfArrayLike$d;
  var arraySpeciesCreate$2 = arraySpeciesCreate$3;
  var push$c = uncurryThis$M([].push);

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
  var createMethod$4 = function createMethod$4(TYPE) {
    var IS_MAP = TYPE === 1;
    var IS_FILTER = TYPE === 2;
    var IS_SOME = TYPE === 3;
    var IS_EVERY = TYPE === 4;
    var IS_FIND_INDEX = TYPE === 6;
    var IS_FILTER_REJECT = TYPE === 7;
    var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject$g($this);
      var self = IndexedObject$3(O);
      var length = lengthOfArrayLike$b(self);
      var boundFunction = bind$a(callbackfn, that);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate$2;
      var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
      var value, result;
      for (; length > index; index++) if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);
        if (TYPE) {
          if (IS_MAP) target[index] = result; // map
          else if (result) switch (TYPE) {
            case 3:
              return true;
            // some
            case 5:
              return value;
            // find
            case 6:
              return index;
            // findIndex
            case 2:
              push$c(target, value);
            // filter
          } else switch (TYPE) {
            case 4:
              return false;
            // every
            case 7:
              push$c(target, value);
            // filterReject
          }
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };
  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$4(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$4(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$4(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod$4(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod$4(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$4(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$4(6),
    // `Array.prototype.filterReject` method
    // https://github.com/tc39/proposal-array-filtering
    filterReject: createMethod$4(7)
  };
  var $$1G = _export;
  var global$y = global$J;
  var call$v = functionCall;
  var uncurryThis$L = functionUncurryThis;
  var DESCRIPTORS$w = descriptors;
  var NATIVE_SYMBOL$5 = symbolConstructorDetection;
  var fails$O = fails$Y;
  var hasOwn$l = hasOwnProperty_1;
  var isPrototypeOf$7 = objectIsPrototypeOf;
  var anObject$y = anObject$D;
  var toIndexedObject$6 = toIndexedObject$c;
  var toPropertyKey$1 = toPropertyKey$4;
  var $toString$3 = toString$s;
  var createPropertyDescriptor$7 = createPropertyDescriptor$a;
  var nativeObjectCreate = objectCreate;
  var objectKeys$2 = objectKeys$4;
  var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
  var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
  var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols;
  var getOwnPropertyDescriptorModule$3 = objectGetOwnPropertyDescriptor;
  var definePropertyModule$3 = objectDefineProperty;
  var definePropertiesModule = objectDefineProperties;
  var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
  var defineBuiltIn$i = defineBuiltIn$l;
  var defineBuiltInAccessor$d = defineBuiltInAccessor$e;
  var shared$3 = shared$7;
  var sharedKey$1 = sharedKey$4;
  var hiddenKeys$1 = hiddenKeys$6;
  var uid$1 = uid$4;
  var wellKnownSymbol$n = wellKnownSymbol$v;
  var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
  var defineWellKnownSymbol$4 = wellKnownSymbolDefine;
  var defineSymbolToPrimitive$1 = symbolDefineToPrimitive;
  var setToStringTag$c = setToStringTag$d;
  var InternalStateModule$9 = internalState;
  var $forEach$1 = arrayIteration.forEach;
  var HIDDEN = sharedKey$1('hidden');
  var SYMBOL = 'Symbol';
  var PROTOTYPE = 'prototype';
  var setInternalState$9 = InternalStateModule$9.set;
  var getInternalState$6 = InternalStateModule$9.getterFor(SYMBOL);
  var ObjectPrototype$3 = Object[PROTOTYPE];
  var $Symbol = global$y.Symbol;
  var SymbolPrototype$1 = $Symbol && $Symbol[PROTOTYPE];
  var RangeError$1 = global$y.RangeError;
  var TypeError$5 = global$y.TypeError;
  var QObject = global$y.QObject;
  var nativeGetOwnPropertyDescriptor$1 = getOwnPropertyDescriptorModule$3.f;
  var nativeDefineProperty = definePropertyModule$3.f;
  var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
  var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
  var push$b = uncurryThis$L([].push);
  var AllSymbols = shared$3('symbols');
  var ObjectPrototypeSymbols = shared$3('op-symbols');
  var WellKnownSymbolsStore = shared$3('wks');

  // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
  var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

  // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
  var fallbackDefineProperty = function fallbackDefineProperty(O, P, Attributes) {
    var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype$3, P);
    if (ObjectPrototypeDescriptor) delete ObjectPrototype$3[P];
    nativeDefineProperty(O, P, Attributes);
    if (ObjectPrototypeDescriptor && O !== ObjectPrototype$3) {
      nativeDefineProperty(ObjectPrototype$3, P, ObjectPrototypeDescriptor);
    }
  };
  var setSymbolDescriptor = DESCRIPTORS$w && fails$O(function () {
    return nativeObjectCreate(nativeDefineProperty({}, 'a', {
      get: function get() {
        return nativeDefineProperty(this, 'a', {
          value: 7
        }).a;
      }
    })).a !== 7;
  }) ? fallbackDefineProperty : nativeDefineProperty;
  var wrap = function wrap(tag, description) {
    var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype$1);
    setInternalState$9(symbol, {
      type: SYMBOL,
      tag: tag,
      description: description
    });
    if (!DESCRIPTORS$w) symbol.description = description;
    return symbol;
  };
  var $defineProperty = function defineProperty(O, P, Attributes) {
    if (O === ObjectPrototype$3) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
    anObject$y(O);
    var key = toPropertyKey$1(P);
    anObject$y(Attributes);
    if (hasOwn$l(AllSymbols, key)) {
      if (!Attributes.enumerable) {
        if (!hasOwn$l(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor$7(1, nativeObjectCreate(null)));
        O[HIDDEN][key] = true;
      } else {
        if (hasOwn$l(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
        Attributes = nativeObjectCreate(Attributes, {
          enumerable: createPropertyDescriptor$7(0, false)
        });
      }
      return setSymbolDescriptor(O, key, Attributes);
    }
    return nativeDefineProperty(O, key, Attributes);
  };
  var $defineProperties = function defineProperties(O, Properties) {
    anObject$y(O);
    var properties = toIndexedObject$6(Properties);
    var keys = objectKeys$2(properties).concat($getOwnPropertySymbols(properties));
    $forEach$1(keys, function (key) {
      if (!DESCRIPTORS$w || call$v($propertyIsEnumerable$1, properties, key)) $defineProperty(O, key, properties[key]);
    });
    return O;
  };
  var $create = function create(O, Properties) {
    return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
  };
  var $propertyIsEnumerable$1 = function propertyIsEnumerable(V) {
    var P = toPropertyKey$1(V);
    var enumerable = call$v(nativePropertyIsEnumerable, this, P);
    if (this === ObjectPrototype$3 && hasOwn$l(AllSymbols, P) && !hasOwn$l(ObjectPrototypeSymbols, P)) return false;
    return enumerable || !hasOwn$l(this, P) || !hasOwn$l(AllSymbols, P) || hasOwn$l(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
  };
  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
    var it = toIndexedObject$6(O);
    var key = toPropertyKey$1(P);
    if (it === ObjectPrototype$3 && hasOwn$l(AllSymbols, key) && !hasOwn$l(ObjectPrototypeSymbols, key)) return;
    var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);
    if (descriptor && hasOwn$l(AllSymbols, key) && !(hasOwn$l(it, HIDDEN) && it[HIDDEN][key])) {
      descriptor.enumerable = true;
    }
    return descriptor;
  };
  var $getOwnPropertyNames = function getOwnPropertyNames(O) {
    var names = nativeGetOwnPropertyNames(toIndexedObject$6(O));
    var result = [];
    $forEach$1(names, function (key) {
      if (!hasOwn$l(AllSymbols, key) && !hasOwn$l(hiddenKeys$1, key)) push$b(result, key);
    });
    return result;
  };
  var $getOwnPropertySymbols = function $getOwnPropertySymbols(O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$3;
    var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$6(O));
    var result = [];
    $forEach$1(names, function (key) {
      if (hasOwn$l(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$l(ObjectPrototype$3, key))) {
        push$b(result, AllSymbols[key]);
      }
    });
    return result;
  };

  // `Symbol` constructor
  // https://tc39.es/ecma262/#sec-symbol-constructor
  if (!NATIVE_SYMBOL$5) {
    $Symbol = function Symbol() {
      if (isPrototypeOf$7(SymbolPrototype$1, this)) throw new TypeError$5('Symbol is not a constructor');
      var description = !arguments.length || arguments[0] === undefined ? undefined : $toString$3(arguments[0]);
      var tag = uid$1(description);
      var setter = function setter(value) {
        var $this = this === undefined ? global$y : this;
        if ($this === ObjectPrototype$3) call$v(setter, ObjectPrototypeSymbols, value);
        if (hasOwn$l($this, HIDDEN) && hasOwn$l($this[HIDDEN], tag)) $this[HIDDEN][tag] = false;
        var descriptor = createPropertyDescriptor$7(1, value);
        try {
          setSymbolDescriptor($this, tag, descriptor);
        } catch (error) {
          if (!(error instanceof RangeError$1)) throw error;
          fallbackDefineProperty($this, tag, descriptor);
        }
      };
      if (DESCRIPTORS$w && USE_SETTER) setSymbolDescriptor(ObjectPrototype$3, tag, {
        configurable: true,
        set: setter
      });
      return wrap(tag, description);
    };
    SymbolPrototype$1 = $Symbol[PROTOTYPE];
    defineBuiltIn$i(SymbolPrototype$1, 'toString', function toString() {
      return getInternalState$6(this).tag;
    });
    defineBuiltIn$i($Symbol, 'withoutSetter', function (description) {
      return wrap(uid$1(description), description);
    });
    propertyIsEnumerableModule$1.f = $propertyIsEnumerable$1;
    definePropertyModule$3.f = $defineProperty;
    definePropertiesModule.f = $defineProperties;
    getOwnPropertyDescriptorModule$3.f = $getOwnPropertyDescriptor;
    getOwnPropertyNamesModule$1.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
    getOwnPropertySymbolsModule$2.f = $getOwnPropertySymbols;
    wrappedWellKnownSymbolModule.f = function (name) {
      return wrap(wellKnownSymbol$n(name), name);
    };
    if (DESCRIPTORS$w) {
      // https://github.com/tc39/proposal-Symbol-description
      defineBuiltInAccessor$d(SymbolPrototype$1, 'description', {
        configurable: true,
        get: function description() {
          return getInternalState$6(this).description;
        }
      });
      {
        defineBuiltIn$i(ObjectPrototype$3, 'propertyIsEnumerable', $propertyIsEnumerable$1, {
          unsafe: true
        });
      }
    }
  }
  $$1G({
    global: true,
    constructor: true,
    wrap: true,
    forced: !NATIVE_SYMBOL$5,
    sham: !NATIVE_SYMBOL$5
  }, {
    Symbol: $Symbol
  });
  $forEach$1(objectKeys$2(WellKnownSymbolsStore), function (name) {
    defineWellKnownSymbol$4(name);
  });
  $$1G({
    target: SYMBOL,
    stat: true,
    forced: !NATIVE_SYMBOL$5
  }, {
    useSetter: function useSetter() {
      USE_SETTER = true;
    },
    useSimple: function useSimple() {
      USE_SETTER = false;
    }
  });
  $$1G({
    target: 'Object',
    stat: true,
    forced: !NATIVE_SYMBOL$5,
    sham: !DESCRIPTORS$w
  }, {
    // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create
    create: $create,
    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    defineProperty: $defineProperty,
    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    defineProperties: $defineProperties,
    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor
  });
  $$1G({
    target: 'Object',
    stat: true,
    forced: !NATIVE_SYMBOL$5
  }, {
    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    getOwnPropertyNames: $getOwnPropertyNames
  });

  // `Symbol.prototype[@@toPrimitive]` method
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
  defineSymbolToPrimitive$1();

  // `Symbol.prototype[@@toStringTag]` property
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
  setToStringTag$c($Symbol, SYMBOL);
  hiddenKeys$1[HIDDEN] = true;
  var NATIVE_SYMBOL$4 = symbolConstructorDetection;

  /* eslint-disable es/no-symbol -- safe */
  var symbolRegistryDetection = NATIVE_SYMBOL$4 && !!Symbol['for'] && !!Symbol.keyFor;
  var $$1F = _export;
  var getBuiltIn$d = getBuiltIn$j;
  var hasOwn$k = hasOwnProperty_1;
  var toString$r = toString$s;
  var shared$2 = shared$7;
  var NATIVE_SYMBOL_REGISTRY$1 = symbolRegistryDetection;
  var StringToSymbolRegistry = shared$2('string-to-symbol-registry');
  var SymbolToStringRegistry$1 = shared$2('symbol-to-string-registry');

  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  $$1F({
    target: 'Symbol',
    stat: true,
    forced: !NATIVE_SYMBOL_REGISTRY$1
  }, {
    'for': function _for(key) {
      var string = toString$r(key);
      if (hasOwn$k(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
      var symbol = getBuiltIn$d('Symbol')(string);
      StringToSymbolRegistry[string] = symbol;
      SymbolToStringRegistry$1[symbol] = string;
      return symbol;
    }
  });
  var $$1E = _export;
  var hasOwn$j = hasOwnProperty_1;
  var isSymbol$2 = isSymbol$5;
  var tryToString$4 = tryToString$6;
  var shared$1 = shared$7;
  var NATIVE_SYMBOL_REGISTRY = symbolRegistryDetection;
  var SymbolToStringRegistry = shared$1('symbol-to-string-registry');

  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  $$1E({
    target: 'Symbol',
    stat: true,
    forced: !NATIVE_SYMBOL_REGISTRY
  }, {
    keyFor: function keyFor(sym) {
      if (!isSymbol$2(sym)) throw new TypeError(tryToString$4(sym) + ' is not a symbol');
      if (hasOwn$j(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
    }
  });
  var NATIVE_BIND$1 = functionBindNative;
  var FunctionPrototype$1 = Function.prototype;
  var apply$6 = FunctionPrototype$1.apply;
  var call$u = FunctionPrototype$1.call;

  // eslint-disable-next-line es/no-reflect -- safe
  var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$u.bind(apply$6) : function () {
    return call$u.apply(apply$6, arguments);
  });
  var uncurryThis$K = functionUncurryThis;
  var isArray$7 = isArray$9;
  var isCallable$i = isCallable$v;
  var classof$a = classofRaw$2;
  var toString$q = toString$s;
  var push$a = uncurryThis$K([].push);
  var getJsonReplacerFunction = function getJsonReplacerFunction(replacer) {
    if (isCallable$i(replacer)) return replacer;
    if (!isArray$7(replacer)) return;
    var rawLength = replacer.length;
    var keys = [];
    for (var i = 0; i < rawLength; i++) {
      var element = replacer[i];
      if (typeof element == 'string') push$a(keys, element);else if (typeof element == 'number' || classof$a(element) === 'Number' || classof$a(element) === 'String') push$a(keys, toString$q(element));
    }
    var keysLength = keys.length;
    var root = true;
    return function (key, value) {
      if (root) {
        root = false;
        return value;
      }
      if (isArray$7(this)) return value;
      for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
    };
  };
  var $$1D = _export;
  var getBuiltIn$c = getBuiltIn$j;
  var apply$5 = functionApply;
  var call$t = functionCall;
  var uncurryThis$J = functionUncurryThis;
  var fails$N = fails$Y;
  var isCallable$h = isCallable$v;
  var isSymbol$1 = isSymbol$5;
  var arraySlice$5 = arraySlice$7;
  var getReplacerFunction = getJsonReplacerFunction;
  var NATIVE_SYMBOL$3 = symbolConstructorDetection;
  var $String$2 = String;
  var $stringify = getBuiltIn$c('JSON', 'stringify');
  var exec$8 = uncurryThis$J(/./.exec);
  var charAt$a = uncurryThis$J(''.charAt);
  var charCodeAt$3 = uncurryThis$J(''.charCodeAt);
  var replace$b = uncurryThis$J(''.replace);
  var numberToString$1 = uncurryThis$J(1.0.toString);
  var tester = /[\uD800-\uDFFF]/g;
  var low = /^[\uD800-\uDBFF]$/;
  var hi = /^[\uDC00-\uDFFF]$/;
  var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$3 || fails$N(function () {
    var symbol = getBuiltIn$c('Symbol')('stringify detection');
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) !== '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({
      a: symbol
    }) !== '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) !== '{}';
  });

  // https://github.com/tc39/proposal-well-formed-stringify
  var ILL_FORMED_UNICODE = fails$N(function () {
    return $stringify("\uDF06\uD834") !== "\"\\udf06\\ud834\"" || $stringify("\uDEAD") !== "\"\\udead\"";
  });
  var stringifyWithSymbolsFix = function stringifyWithSymbolsFix(it, replacer) {
    var args = arraySlice$5(arguments);
    var $replacer = getReplacerFunction(replacer);
    if (!isCallable$h($replacer) && (it === undefined || isSymbol$1(it))) return; // IE8 returns string on undefined
    args[1] = function (key, value) {
      // some old implementations (like WebKit) could pass numbers as keys
      if (isCallable$h($replacer)) value = call$t($replacer, this, $String$2(key), value);
      if (!isSymbol$1(value)) return value;
    };
    return apply$5($stringify, null, args);
  };
  var fixIllFormed = function fixIllFormed(match, offset, string) {
    var prev = charAt$a(string, offset - 1);
    var next = charAt$a(string, offset + 1);
    if (exec$8(low, match) && !exec$8(hi, next) || exec$8(hi, match) && !exec$8(low, prev)) {
      return "\\u" + numberToString$1(charCodeAt$3(match, 0), 16);
    }
    return match;
  };
  if ($stringify) {
    // `JSON.stringify` method
    // https://tc39.es/ecma262/#sec-json.stringify
    $$1D({
      target: 'JSON',
      stat: true,
      arity: 3,
      forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE
    }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      stringify: function stringify(it, replacer, space) {
        var args = arraySlice$5(arguments);
        var result = apply$5(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
        return ILL_FORMED_UNICODE && typeof result == 'string' ? replace$b(result, tester, fixIllFormed) : result;
      }
    });
  }
  var $$1C = _export;
  var NATIVE_SYMBOL$2 = symbolConstructorDetection;
  var fails$M = fails$Y;
  var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
  var toObject$f = toObject$i;

  // V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443
  var FORCED$j = !NATIVE_SYMBOL$2 || fails$M(function () {
    getOwnPropertySymbolsModule$1.f(1);
  });

  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  $$1C({
    target: 'Object',
    stat: true,
    forced: FORCED$j
  }, {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      var $getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
      return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject$f(it)) : [];
    }
  });
  var $$1B = _export;
  var DESCRIPTORS$v = descriptors;
  var global$x = global$J;
  var uncurryThis$I = functionUncurryThis;
  var hasOwn$i = hasOwnProperty_1;
  var isCallable$g = isCallable$v;
  var isPrototypeOf$6 = objectIsPrototypeOf;
  var toString$p = toString$s;
  var defineBuiltInAccessor$c = defineBuiltInAccessor$e;
  var copyConstructorProperties$2 = copyConstructorProperties$4;
  var NativeSymbol = global$x.Symbol;
  var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;
  if (DESCRIPTORS$v && isCallable$g(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined)) {
    var EmptyStringDescriptionStore = {};
    // wrap Symbol constructor for correct work with undefined description
    var SymbolWrapper = function Symbol() {
      var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString$p(arguments[0]);
      var result = isPrototypeOf$6(SymbolPrototype, this) ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
      if (description === '') EmptyStringDescriptionStore[result] = true;
      return result;
    };
    copyConstructorProperties$2(SymbolWrapper, NativeSymbol);
    SymbolWrapper.prototype = SymbolPrototype;
    SymbolPrototype.constructor = SymbolWrapper;
    var NATIVE_SYMBOL$1 = String(NativeSymbol('description detection')) === 'Symbol(description detection)';
    var thisSymbolValue = uncurryThis$I(SymbolPrototype.valueOf);
    var symbolDescriptiveString = uncurryThis$I(SymbolPrototype.toString);
    var regexp = /^Symbol\((.*)\)[^)]+$/;
    var replace$a = uncurryThis$I(''.replace);
    var stringSlice$c = uncurryThis$I(''.slice);
    defineBuiltInAccessor$c(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        var symbol = thisSymbolValue(this);
        if (hasOwn$i(EmptyStringDescriptionStore, symbol)) return '';
        var string = symbolDescriptiveString(symbol);
        var desc = NATIVE_SYMBOL$1 ? stringSlice$c(string, 7, -1) : replace$a(string, regexp, '$1');
        return desc === '' ? undefined : desc;
      }
    });
    $$1B({
      global: true,
      constructor: true,
      forced: true
    }, {
      Symbol: SymbolWrapper
    });
  }
  var defineWellKnownSymbol$3 = wellKnownSymbolDefine;

  // `Symbol.asyncIterator` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.asynciterator
  defineWellKnownSymbol$3('asyncIterator');
  var defineWellKnownSymbol$2 = wellKnownSymbolDefine;

  // `Symbol.iterator` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.iterator
  defineWellKnownSymbol$2('iterator');
  var defineWellKnownSymbol$1 = wellKnownSymbolDefine;
  var defineSymbolToPrimitive = symbolDefineToPrimitive;

  // `Symbol.toPrimitive` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.toprimitive
  defineWellKnownSymbol$1('toPrimitive');

  // `Symbol.prototype[@@toPrimitive]` method
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
  defineSymbolToPrimitive();
  var getBuiltIn$b = getBuiltIn$j;
  var defineWellKnownSymbol = wellKnownSymbolDefine;
  var setToStringTag$b = setToStringTag$d;

  // `Symbol.toStringTag` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.tostringtag
  defineWellKnownSymbol('toStringTag');

  // `Symbol.prototype[@@toStringTag]` property
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
  setToStringTag$b(getBuiltIn$b('Symbol'), 'Symbol');
  var uncurryThis$H = functionUncurryThis;
  var aCallable$g = aCallable$j;
  var functionUncurryThisAccessor = function functionUncurryThisAccessor(object, key, method) {
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      return uncurryThis$H(aCallable$g(Object.getOwnPropertyDescriptor(object, key)[method]));
    } catch (error) {/* empty */}
  };
  var isObject$n = isObject$u;
  var isPossiblePrototype$2 = function isPossiblePrototype$2(argument) {
    return isObject$n(argument) || argument === null;
  };
  var isPossiblePrototype$1 = isPossiblePrototype$2;
  var $String$1 = String;
  var $TypeError$j = TypeError;
  var aPossiblePrototype$1 = function aPossiblePrototype$1(argument) {
    if (isPossiblePrototype$1(argument)) return argument;
    throw new $TypeError$j("Can't set " + $String$1(argument) + ' as a prototype');
  };

  /* eslint-disable no-proto -- safe */
  var uncurryThisAccessor$1 = functionUncurryThisAccessor;
  var isObject$m = isObject$u;
  var requireObjectCoercible$d = requireObjectCoercible$g;
  var aPossiblePrototype = aPossiblePrototype$1;

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe
  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      setter = uncurryThisAccessor$1(Object.prototype, '__proto__', 'set');
      setter(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) {/* empty */}
    return function setPrototypeOf(O, proto) {
      requireObjectCoercible$d(O);
      aPossiblePrototype(proto);
      if (!isObject$m(O)) return O;
      if (CORRECT_SETTER) setter(O, proto);else O.__proto__ = proto;
      return O;
    };
  }() : undefined);
  var defineProperty$9 = objectDefineProperty.f;
  var proxyAccessor$2 = function proxyAccessor$2(Target, Source, key) {
    key in Target || defineProperty$9(Target, key, {
      configurable: true,
      get: function get() {
        return Source[key];
      },
      set: function set(it) {
        Source[key] = it;
      }
    });
  };
  var isCallable$f = isCallable$v;
  var isObject$l = isObject$u;
  var setPrototypeOf$5 = objectSetPrototypeOf;

  // makes subclassing work correct for wrapped built-ins
  var inheritIfRequired$5 = function inheritIfRequired$5($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf$5 &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable$f(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject$l(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf$5($this, NewTargetPrototype);
    return $this;
  };
  var toString$o = toString$s;
  var normalizeStringArgument$4 = function normalizeStringArgument$4(argument, $default) {
    return argument === undefined ? arguments.length < 2 ? '' : $default : toString$o(argument);
  };
  var isObject$k = isObject$u;
  var createNonEnumerableProperty$8 = createNonEnumerableProperty$b;

  // `InstallErrorCause` abstract operation
  // https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
  var installErrorCause$1 = function installErrorCause$1(O, options) {
    if (isObject$k(options) && 'cause' in options) {
      createNonEnumerableProperty$8(O, 'cause', options.cause);
    }
  };
  var uncurryThis$G = functionUncurryThis;
  var $Error = Error;
  var replace$9 = uncurryThis$G(''.replace);
  var TEST = function (arg) {
    return String(new $Error(arg).stack);
  }('zxcasd');
  // eslint-disable-next-line redos/no-vulnerable -- safe
  var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
  var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
  var errorStackClear = function errorStackClear(stack, dropEntries) {
    if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
      while (dropEntries--) stack = replace$9(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
    }
    return stack;
  };
  var fails$L = fails$Y;
  var createPropertyDescriptor$6 = createPropertyDescriptor$a;
  var errorStackInstallable = !fails$L(function () {
    var error = new Error('a');
    if (!('stack' in error)) return true;
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(error, 'stack', createPropertyDescriptor$6(1, 7));
    return error.stack !== 7;
  });
  var createNonEnumerableProperty$7 = createNonEnumerableProperty$b;
  var clearErrorStack$2 = errorStackClear;
  var ERROR_STACK_INSTALLABLE = errorStackInstallable;

  // non-standard V8
  var captureStackTrace = Error.captureStackTrace;
  var errorStackInstall = function errorStackInstall(error, C, stack, dropEntries) {
    if (ERROR_STACK_INSTALLABLE) {
      if (captureStackTrace) captureStackTrace(error, C);else createNonEnumerableProperty$7(error, 'stack', clearErrorStack$2(stack, dropEntries));
    }
  };
  var getBuiltIn$a = getBuiltIn$j;
  var hasOwn$h = hasOwnProperty_1;
  var createNonEnumerableProperty$6 = createNonEnumerableProperty$b;
  var isPrototypeOf$5 = objectIsPrototypeOf;
  var setPrototypeOf$4 = objectSetPrototypeOf;
  var copyConstructorProperties$1 = copyConstructorProperties$4;
  var proxyAccessor$1 = proxyAccessor$2;
  var inheritIfRequired$4 = inheritIfRequired$5;
  var normalizeStringArgument$3 = normalizeStringArgument$4;
  var installErrorCause = installErrorCause$1;
  var installErrorStack = errorStackInstall;
  var DESCRIPTORS$u = descriptors;
  var wrapErrorConstructorWithCause$1 = function wrapErrorConstructorWithCause$1(FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
    var STACK_TRACE_LIMIT = 'stackTraceLimit';
    var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
    var path = FULL_NAME.split('.');
    var ERROR_NAME = path[path.length - 1];
    var OriginalError = getBuiltIn$a.apply(null, path);
    if (!OriginalError) return;
    var OriginalErrorPrototype = OriginalError.prototype;

    // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006
    if (hasOwn$h(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;
    if (!FORCED) return OriginalError;
    var BaseError = getBuiltIn$a('Error');
    var WrappedError = wrapper(function (a, b) {
      var message = normalizeStringArgument$3(IS_AGGREGATE_ERROR ? b : a, undefined);
      var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
      if (message !== undefined) createNonEnumerableProperty$6(result, 'message', message);
      installErrorStack(result, WrappedError, result.stack, 2);
      if (this && isPrototypeOf$5(OriginalErrorPrototype, this)) inheritIfRequired$4(result, this, WrappedError);
      if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
      return result;
    });
    WrappedError.prototype = OriginalErrorPrototype;
    if (ERROR_NAME !== 'Error') {
      if (setPrototypeOf$4) setPrototypeOf$4(WrappedError, BaseError);else copyConstructorProperties$1(WrappedError, BaseError, {
        name: true
      });
    } else if (DESCRIPTORS$u && STACK_TRACE_LIMIT in OriginalError) {
      proxyAccessor$1(WrappedError, OriginalError, STACK_TRACE_LIMIT);
      proxyAccessor$1(WrappedError, OriginalError, 'prepareStackTrace');
    }
    copyConstructorProperties$1(WrappedError, OriginalError);
    try {
      // Safari 13- bug: WebAssembly errors does not have a proper `.name`
      if (OriginalErrorPrototype.name !== ERROR_NAME) {
        createNonEnumerableProperty$6(OriginalErrorPrototype, 'name', ERROR_NAME);
      }
      OriginalErrorPrototype.constructor = WrappedError;
    } catch (error) {/* empty */}
    return WrappedError;
  };

  /* eslint-disable no-unused-vars -- required for functions `.length` */
  var $$1A = _export;
  var global$w = global$J;
  var apply$4 = functionApply;
  var wrapErrorConstructorWithCause = wrapErrorConstructorWithCause$1;
  var WEB_ASSEMBLY = 'WebAssembly';
  var WebAssembly = global$w[WEB_ASSEMBLY];

  // eslint-disable-next-line es/no-error-cause -- feature detection
  var FORCED$i = new Error('e', {
    cause: 7
  }).cause !== 7;
  var exportGlobalErrorCauseWrapper = function exportGlobalErrorCauseWrapper(ERROR_NAME, wrapper) {
    var O = {};
    O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED$i);
    $$1A({
      global: true,
      constructor: true,
      arity: 1,
      forced: FORCED$i
    }, O);
  };
  var exportWebAssemblyErrorCauseWrapper = function exportWebAssemblyErrorCauseWrapper(ERROR_NAME, wrapper) {
    if (WebAssembly && WebAssembly[ERROR_NAME]) {
      var O = {};
      O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED$i);
      $$1A({
        target: WEB_ASSEMBLY,
        stat: true,
        constructor: true,
        arity: 1,
        forced: FORCED$i
      }, O);
    }
  };

  // https://tc39.es/ecma262/#sec-nativeerror
  exportGlobalErrorCauseWrapper('Error', function (init) {
    return function Error(message) {
      return apply$4(init, this, arguments);
    };
  });
  exportGlobalErrorCauseWrapper('EvalError', function (init) {
    return function EvalError(message) {
      return apply$4(init, this, arguments);
    };
  });
  exportGlobalErrorCauseWrapper('RangeError', function (init) {
    return function RangeError(message) {
      return apply$4(init, this, arguments);
    };
  });
  exportGlobalErrorCauseWrapper('ReferenceError', function (init) {
    return function ReferenceError(message) {
      return apply$4(init, this, arguments);
    };
  });
  exportGlobalErrorCauseWrapper('SyntaxError', function (init) {
    return function SyntaxError(message) {
      return apply$4(init, this, arguments);
    };
  });
  exportGlobalErrorCauseWrapper('TypeError', function (init) {
    return function TypeError(message) {
      return apply$4(init, this, arguments);
    };
  });
  exportGlobalErrorCauseWrapper('URIError', function (init) {
    return function URIError(message) {
      return apply$4(init, this, arguments);
    };
  });
  exportWebAssemblyErrorCauseWrapper('CompileError', function (init) {
    return function CompileError(message) {
      return apply$4(init, this, arguments);
    };
  });
  exportWebAssemblyErrorCauseWrapper('LinkError', function (init) {
    return function LinkError(message) {
      return apply$4(init, this, arguments);
    };
  });
  exportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {
    return function RuntimeError(message) {
      return apply$4(init, this, arguments);
    };
  });
  var DESCRIPTORS$t = descriptors;
  var fails$K = fails$Y;
  var anObject$x = anObject$D;
  var normalizeStringArgument$2 = normalizeStringArgument$4;
  var nativeErrorToString = Error.prototype.toString;
  var INCORRECT_TO_STRING$1 = fails$K(function () {
    if (DESCRIPTORS$t) {
      // Chrome 32- incorrectly call accessor
      // eslint-disable-next-line es/no-object-create, es/no-object-defineproperty -- safe
      var object = Object.create(Object.defineProperty({}, 'name', {
        get: function get() {
          return this === object;
        }
      }));
      if (nativeErrorToString.call(object) !== 'true') return true;
    }
    // FF10- does not properly handle non-strings
    return nativeErrorToString.call({
      message: 1,
      name: 2
    }) !== '2: 1'
    // IE8 does not properly handle defaults
    || nativeErrorToString.call({}) !== 'Error';
  });
  var errorToString$2 = INCORRECT_TO_STRING$1 ? function toString() {
    var O = anObject$x(this);
    var name = normalizeStringArgument$2(O.name, 'Error');
    var message = normalizeStringArgument$2(O.message);
    return !name ? message : !message ? name : name + ': ' + message;
  } : nativeErrorToString;
  var defineBuiltIn$h = defineBuiltIn$l;
  var errorToString$1 = errorToString$2;
  var ErrorPrototype$1 = Error.prototype;

  // `Error.prototype.toString` method fix
  // https://tc39.es/ecma262/#sec-error.prototype.tostring
  if (ErrorPrototype$1.toString !== errorToString$1) {
    defineBuiltIn$h(ErrorPrototype$1, 'toString', errorToString$1);
  }
  var $TypeError$i = TypeError;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

  var doesNotExceedSafeInteger$4 = function doesNotExceedSafeInteger$4(it) {
    if (it > MAX_SAFE_INTEGER) throw $TypeError$i('Maximum allowed index exceeded');
    return it;
  };
  var DESCRIPTORS$s = descriptors;
  var definePropertyModule$2 = objectDefineProperty;
  var createPropertyDescriptor$5 = createPropertyDescriptor$a;
  var createProperty$8 = function createProperty$8(object, key, value) {
    if (DESCRIPTORS$s) definePropertyModule$2.f(object, key, createPropertyDescriptor$5(0, value));else object[key] = value;
  };
  var fails$J = fails$Y;
  var wellKnownSymbol$m = wellKnownSymbol$v;
  var V8_VERSION$2 = engineV8Version;
  var SPECIES$5 = wellKnownSymbol$m('species');
  var arrayMethodHasSpeciesSupport$5 = function arrayMethodHasSpeciesSupport$5(METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION$2 >= 51 || !fails$J(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$5] = function () {
        return {
          foo: 1
        };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };
  var $$1z = _export;
  var fails$I = fails$Y;
  var isArray$6 = isArray$9;
  var isObject$j = isObject$u;
  var toObject$e = toObject$i;
  var lengthOfArrayLike$a = lengthOfArrayLike$d;
  var doesNotExceedSafeInteger$3 = doesNotExceedSafeInteger$4;
  var createProperty$7 = createProperty$8;
  var arraySpeciesCreate$1 = arraySpeciesCreate$3;
  var arrayMethodHasSpeciesSupport$4 = arrayMethodHasSpeciesSupport$5;
  var wellKnownSymbol$l = wellKnownSymbol$v;
  var V8_VERSION$1 = engineV8Version;
  var IS_CONCAT_SPREADABLE = wellKnownSymbol$l('isConcatSpreadable');

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$I(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });
  var isConcatSpreadable = function isConcatSpreadable(O) {
    if (!isObject$j(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray$6(O);
  };
  var FORCED$h = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$4('concat');

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  $$1z({
    target: 'Array',
    proto: true,
    arity: 1,
    forced: FORCED$h
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$e(this);
      var A = arraySpeciesCreate$1(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = lengthOfArrayLike$a(E);
          doesNotExceedSafeInteger$3(n + len);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty$7(A, n, E[k]);
        } else {
          doesNotExceedSafeInteger$3(n + 1);
          createProperty$7(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  });
  var fails$H = fails$Y;
  var arrayMethodIsStrict$7 = function arrayMethodIsStrict$7(METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails$H(function () {
      // eslint-disable-next-line no-useless-call -- required for testing
      method.call(null, argument || function () {
        return 1;
      }, 1);
    });
  };
  var $$1y = _export;
  var $every = arrayIteration.every;
  var arrayMethodIsStrict$6 = arrayMethodIsStrict$7;
  var STRICT_METHOD$3 = arrayMethodIsStrict$6('every');

  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  $$1y({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD$3
  }, {
    every: function every(callbackfn /* , thisArg */) {
      return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  var $$1x = _export;
  var $filter = arrayIteration.filter;
  var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$5;
  var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport$3('filter');

  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  $$1x({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$3
  }, {
    filter: function filter(callbackfn /* , thisArg */) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  var wellKnownSymbol$k = wellKnownSymbol$v;
  var create$9 = objectCreate;
  var defineProperty$8 = objectDefineProperty.f;
  var UNSCOPABLES = wellKnownSymbol$k('unscopables');
  var ArrayPrototype$1 = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype$1[UNSCOPABLES] === undefined) {
    defineProperty$8(ArrayPrototype$1, UNSCOPABLES, {
      configurable: true,
      value: create$9(null)
    });
  }

  // add a key to Array.prototype[@@unscopables]
  var addToUnscopables$5 = function addToUnscopables$5(key) {
    ArrayPrototype$1[UNSCOPABLES][key] = true;
  };
  var $$1w = _export;
  var $find = arrayIteration.find;
  var addToUnscopables$4 = addToUnscopables$5;
  var FIND = 'find';
  var SKIPS_HOLES$1 = true;

  // Shouldn't skip holes
  // eslint-disable-next-line es/no-array-prototype-find -- testing
  if (FIND in []) Array(1)[FIND](function () {
    SKIPS_HOLES$1 = false;
  });

  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  $$1w({
    target: 'Array',
    proto: true,
    forced: SKIPS_HOLES$1
  }, {
    find: function find(callbackfn /* , that = undefined */) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables$4(FIND);
  var $forEach = arrayIteration.forEach;
  var arrayMethodIsStrict$5 = arrayMethodIsStrict$7;
  var STRICT_METHOD$2 = arrayMethodIsStrict$5('forEach');

  // `Array.prototype.forEach` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  var arrayForEach = !STRICT_METHOD$2 ? function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  } : [].forEach;
  var $$1v = _export;
  var forEach$4 = arrayForEach;

  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  $$1v({
    target: 'Array',
    proto: true,
    forced: [].forEach !== forEach$4
  }, {
    forEach: forEach$4
  });
  var call$s = functionCall;
  var anObject$w = anObject$D;
  var getMethod$6 = getMethod$8;
  var iteratorClose$5 = function iteratorClose$5(iterator, kind, value) {
    var innerResult, innerError;
    anObject$w(iterator);
    try {
      innerResult = getMethod$6(iterator, 'return');
      if (!innerResult) {
        if (kind === 'throw') throw value;
        return value;
      }
      innerResult = call$s(innerResult, iterator);
    } catch (error) {
      innerError = true;
      innerResult = error;
    }
    if (kind === 'throw') throw value;
    if (innerError) throw innerResult;
    anObject$w(innerResult);
    return value;
  };
  var anObject$v = anObject$D;
  var iteratorClose$4 = iteratorClose$5;

  // call something on iterator step with safe closing on error
  var callWithSafeIterationClosing$3 = function callWithSafeIterationClosing$3(iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject$v(value)[0], value[1]) : fn(value);
    } catch (error) {
      iteratorClose$4(iterator, 'throw', error);
    }
  };
  var iterators = {};
  var wellKnownSymbol$j = wellKnownSymbol$v;
  var Iterators$4 = iterators;
  var ITERATOR$a = wellKnownSymbol$j('iterator');
  var ArrayPrototype = Array.prototype;

  // check on default Array iterator
  var isArrayIteratorMethod$2 = function isArrayIteratorMethod$2(it) {
    return it !== undefined && (Iterators$4.Array === it || ArrayPrototype[ITERATOR$a] === it);
  };
  var classof$9 = classof$f;
  var getMethod$5 = getMethod$8;
  var isNullOrUndefined$8 = isNullOrUndefined$b;
  var Iterators$3 = iterators;
  var wellKnownSymbol$i = wellKnownSymbol$v;
  var ITERATOR$9 = wellKnownSymbol$i('iterator');
  var getIteratorMethod$4 = function getIteratorMethod$4(it) {
    if (!isNullOrUndefined$8(it)) return getMethod$5(it, ITERATOR$9) || getMethod$5(it, '@@iterator') || Iterators$3[classof$9(it)];
  };
  var call$r = functionCall;
  var aCallable$f = aCallable$j;
  var anObject$u = anObject$D;
  var tryToString$3 = tryToString$6;
  var getIteratorMethod$3 = getIteratorMethod$4;
  var $TypeError$h = TypeError;
  var getIterator$3 = function getIterator$3(argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod$3(argument) : usingIterator;
    if (aCallable$f(iteratorMethod)) return anObject$u(call$r(iteratorMethod, argument));
    throw new $TypeError$h(tryToString$3(argument) + ' is not iterable');
  };
  var bind$9 = functionBindContext;
  var call$q = functionCall;
  var toObject$d = toObject$i;
  var callWithSafeIterationClosing$2 = callWithSafeIterationClosing$3;
  var isArrayIteratorMethod$1 = isArrayIteratorMethod$2;
  var isConstructor$2 = isConstructor$4;
  var lengthOfArrayLike$9 = lengthOfArrayLike$d;
  var createProperty$6 = createProperty$8;
  var getIterator$2 = getIterator$3;
  var getIteratorMethod$2 = getIteratorMethod$4;
  var $Array$1 = Array;

  // `Array.from` method implementation
  // https://tc39.es/ecma262/#sec-array.from
  var arrayFrom$1 = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject$d(arrayLike);
    var IS_CONSTRUCTOR = isConstructor$2(this);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    if (mapping) mapfn = bind$9(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
    var iteratorMethod = getIteratorMethod$2(O);
    var index = 0;
    var length, result, step, iterator, next, value;
    // if the target is not iterable or it's an array with the default iterator - use a simple case
    if (iteratorMethod && !(this === $Array$1 && isArrayIteratorMethod$1(iteratorMethod))) {
      result = IS_CONSTRUCTOR ? new this() : [];
      iterator = getIterator$2(O, iteratorMethod);
      next = iterator.next;
      for (; !(step = call$q(next, iterator)).done; index++) {
        value = mapping ? callWithSafeIterationClosing$2(iterator, mapfn, [step.value, index], true) : step.value;
        createProperty$6(result, index, value);
      }
    } else {
      length = lengthOfArrayLike$9(O);
      result = IS_CONSTRUCTOR ? new this(length) : $Array$1(length);
      for (; length > index; index++) {
        value = mapping ? mapfn(O[index], index) : O[index];
        createProperty$6(result, index, value);
      }
    }
    result.length = index;
    return result;
  };
  var wellKnownSymbol$h = wellKnownSymbol$v;
  var ITERATOR$8 = wellKnownSymbol$h('iterator');
  var SAFE_CLOSING = false;
  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function next() {
        return {
          done: !!called++
        };
      },
      'return': function _return() {
        SAFE_CLOSING = true;
      }
    };
    iteratorWithReturn[ITERATOR$8] = function () {
      return this;
    };
    // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
    Array.from(iteratorWithReturn, function () {
      throw 2;
    });
  } catch (error) {/* empty */}
  var checkCorrectnessOfIteration$3 = function checkCorrectnessOfIteration$3(exec, SKIP_CLOSING) {
    try {
      if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    } catch (error) {
      return false;
    } // workaround of old WebKit + `eval` bug
    var ITERATION_SUPPORT = false;
    try {
      var object = {};
      object[ITERATOR$8] = function () {
        return {
          next: function next() {
            return {
              done: ITERATION_SUPPORT = true
            };
          }
        };
      };
      exec(object);
    } catch (error) {/* empty */}
    return ITERATION_SUPPORT;
  };
  var $$1u = _export;
  var from = arrayFrom$1;
  var checkCorrectnessOfIteration$2 = checkCorrectnessOfIteration$3;
  var INCORRECT_ITERATION = !checkCorrectnessOfIteration$2(function (iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
  });

  // `Array.from` method
  // https://tc39.es/ecma262/#sec-array.from
  $$1u({
    target: 'Array',
    stat: true,
    forced: INCORRECT_ITERATION
  }, {
    from: from
  });
  var $$1t = _export;
  var $includes = arrayIncludes.includes;
  var fails$G = fails$Y;
  var addToUnscopables$3 = addToUnscopables$5;

  // FF99+ bug
  var BROKEN_ON_SPARSE = fails$G(function () {
    // eslint-disable-next-line es/no-array-prototype-includes -- detection
    return !Array(1).includes();
  });

  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  $$1t({
    target: 'Array',
    proto: true,
    forced: BROKEN_ON_SPARSE
  }, {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables$3('includes');

  /* eslint-disable es/no-array-prototype-indexof -- required for testing */
  var $$1s = _export;
  var uncurryThis$F = functionUncurryThisClause;
  var $indexOf = arrayIncludes.indexOf;
  var arrayMethodIsStrict$4 = arrayMethodIsStrict$7;
  var nativeIndexOf = uncurryThis$F([].indexOf);
  var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
  var FORCED$g = NEGATIVE_ZERO || !arrayMethodIsStrict$4('indexOf');

  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  $$1s({
    target: 'Array',
    proto: true,
    forced: FORCED$g
  }, {
    indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
      var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
      return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf(this, searchElement, fromIndex) || 0 : $indexOf(this, searchElement, fromIndex);
    }
  });
  var $$1r = _export;
  var isArray$5 = isArray$9;

  // `Array.isArray` method
  // https://tc39.es/ecma262/#sec-array.isarray
  $$1r({
    target: 'Array',
    stat: true
  }, {
    isArray: isArray$5
  });
  var fails$F = fails$Y;
  var correctPrototypeGetter = !fails$F(function () {
    function F() {/* empty */}
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });
  var hasOwn$g = hasOwnProperty_1;
  var isCallable$e = isCallable$v;
  var toObject$c = toObject$i;
  var sharedKey = sharedKey$4;
  var CORRECT_PROTOTYPE_GETTER$2 = correctPrototypeGetter;
  var IE_PROTO = sharedKey('IE_PROTO');
  var $Object$1 = Object;
  var ObjectPrototype$2 = $Object$1.prototype;

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  // eslint-disable-next-line es/no-object-getprototypeof -- safe
  var objectGetPrototypeOf$2 = CORRECT_PROTOTYPE_GETTER$2 ? $Object$1.getPrototypeOf : function (O) {
    var object = toObject$c(O);
    if (hasOwn$g(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable$e(constructor) && object instanceof constructor) {
      return constructor.prototype;
    }
    return object instanceof $Object$1 ? ObjectPrototype$2 : null;
  };
  var fails$E = fails$Y;
  var isCallable$d = isCallable$v;
  var isObject$i = isObject$u;
  var getPrototypeOf$5 = objectGetPrototypeOf$2;
  var defineBuiltIn$g = defineBuiltIn$l;
  var wellKnownSymbol$g = wellKnownSymbol$v;
  var ITERATOR$7 = wellKnownSymbol$g('iterator');
  var BUGGY_SAFARI_ITERATORS$1 = false;

  // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
  var IteratorPrototype$4, PrototypeOfArrayIteratorPrototype, arrayIterator;

  /* eslint-disable es/no-array-prototype-keys -- safe */
  if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;else {
      PrototypeOfArrayIteratorPrototype = getPrototypeOf$5(getPrototypeOf$5(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$4 = PrototypeOfArrayIteratorPrototype;
    }
  }
  var NEW_ITERATOR_PROTOTYPE = !isObject$i(IteratorPrototype$4) || fails$E(function () {
    var test = {};
    // FF44- legacy iterators case
    return IteratorPrototype$4[ITERATOR$7].call(test) !== test;
  });
  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$4 = {};

  // `%IteratorPrototype%[@@iterator]()` method
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
  if (!isCallable$d(IteratorPrototype$4[ITERATOR$7])) {
    defineBuiltIn$g(IteratorPrototype$4, ITERATOR$7, function () {
      return this;
    });
  }
  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$4,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };
  var IteratorPrototype$3 = iteratorsCore.IteratorPrototype;
  var create$8 = objectCreate;
  var createPropertyDescriptor$4 = createPropertyDescriptor$a;
  var setToStringTag$a = setToStringTag$d;
  var Iterators$2 = iterators;
  var returnThis$1 = function returnThis$1() {
    return this;
  };
  var iteratorCreateConstructor = function iteratorCreateConstructor(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = create$8(IteratorPrototype$3, {
      next: createPropertyDescriptor$4(+!ENUMERABLE_NEXT, next)
    });
    setToStringTag$a(IteratorConstructor, TO_STRING_TAG, false);
    Iterators$2[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };
  var $$1q = _export;
  var call$p = functionCall;
  var FunctionName = functionName;
  var isCallable$c = isCallable$v;
  var createIteratorConstructor$1 = iteratorCreateConstructor;
  var getPrototypeOf$4 = objectGetPrototypeOf$2;
  var setPrototypeOf$3 = objectSetPrototypeOf;
  var setToStringTag$9 = setToStringTag$d;
  var createNonEnumerableProperty$5 = createNonEnumerableProperty$b;
  var defineBuiltIn$f = defineBuiltIn$l;
  var wellKnownSymbol$f = wellKnownSymbol$v;
  var Iterators$1 = iterators;
  var IteratorsCore = iteratorsCore;
  var PROPER_FUNCTION_NAME$2 = FunctionName.PROPER;
  var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
  var IteratorPrototype$2 = IteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$6 = wellKnownSymbol$f('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';
  var returnThis = function returnThis() {
    return this;
  };
  var iteratorDefine = function iteratorDefine(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor$1(IteratorConstructor, NAME, next);
    var getIterationMethod = function getIterationMethod(KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];
      switch (KIND) {
        case KEYS:
          return function keys() {
            return new IteratorConstructor(this, KIND);
          };
        case VALUES:
          return function values() {
            return new IteratorConstructor(this, KIND);
          };
        case ENTRIES:
          return function entries() {
            return new IteratorConstructor(this, KIND);
          };
      }
      return function () {
        return new IteratorConstructor(this);
      };
    };
    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$6] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;

    // fix native
    if (anyNativeIterator) {
      CurrentIteratorPrototype = getPrototypeOf$4(anyNativeIterator.call(new Iterable()));
      if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        if (getPrototypeOf$4(CurrentIteratorPrototype) !== IteratorPrototype$2) {
          if (setPrototypeOf$3) {
            setPrototypeOf$3(CurrentIteratorPrototype, IteratorPrototype$2);
          } else if (!isCallable$c(CurrentIteratorPrototype[ITERATOR$6])) {
            defineBuiltIn$f(CurrentIteratorPrototype, ITERATOR$6, returnThis);
          }
        }
        // Set @@toStringTag to native iterators
        setToStringTag$9(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    }

    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if (PROPER_FUNCTION_NAME$2 && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      if (CONFIGURABLE_FUNCTION_NAME) {
        createNonEnumerableProperty$5(IterablePrototype, 'name', VALUES);
      } else {
        INCORRECT_VALUES_NAME = true;
        defaultIterator = function values() {
          return call$p(nativeIterator, this);
        };
      }
    }

    // export additional methods
    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          defineBuiltIn$f(IterablePrototype, KEY, methods[KEY]);
        }
      } else $$1q({
        target: NAME,
        proto: true,
        forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
      }, methods);
    }

    // define iterator
    if (IterablePrototype[ITERATOR$6] !== defaultIterator) {
      defineBuiltIn$f(IterablePrototype, ITERATOR$6, defaultIterator, {
        name: DEFAULT
      });
    }
    Iterators$1[NAME] = defaultIterator;
    return methods;
  };

  // `CreateIterResultObject` abstract operation
  // https://tc39.es/ecma262/#sec-createiterresultobject
  var createIterResultObject$5 = function createIterResultObject$5(value, done) {
    return {
      value: value,
      done: done
    };
  };
  var toIndexedObject$5 = toIndexedObject$c;
  var addToUnscopables$2 = addToUnscopables$5;
  var Iterators = iterators;
  var InternalStateModule$8 = internalState;
  var defineProperty$7 = objectDefineProperty.f;
  var defineIterator$2 = iteratorDefine;
  var createIterResultObject$4 = createIterResultObject$5;
  var DESCRIPTORS$r = descriptors;
  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState$8 = InternalStateModule$8.set;
  var getInternalState$5 = InternalStateModule$8.getterFor(ARRAY_ITERATOR);

  // `Array.prototype.entries` method
  // https://tc39.es/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.es/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.es/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.es/ecma262/#sec-createarrayiterator
  var es_array_iterator = defineIterator$2(Array, 'Array', function (iterated, kind) {
    setInternalState$8(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject$5(iterated),
      // target
      index: 0,
      // next index
      kind: kind // kind
    });
    // `%ArrayIteratorPrototype%.next` method
    // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = getInternalState$5(this);
    var target = state.target;
    var index = state.index++;
    if (!target || index >= target.length) {
      state.target = undefined;
      return createIterResultObject$4(undefined, true);
    }
    switch (state.kind) {
      case 'keys':
        return createIterResultObject$4(index, false);
      case 'values':
        return createIterResultObject$4(target[index], false);
    }
    return createIterResultObject$4([index, target[index]], false);
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values%
  // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
  // https://tc39.es/ecma262/#sec-createmappedargumentsobject
  var values = Iterators.Arguments = Iterators.Array;

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables$2('keys');
  addToUnscopables$2('values');
  addToUnscopables$2('entries');

  // V8 ~ Chrome 45- bug
  if (DESCRIPTORS$r && values.name !== 'values') try {
    defineProperty$7(values, 'name', {
      value: 'values'
    });
  } catch (error) {/* empty */}
  var $$1p = _export;
  var uncurryThis$E = functionUncurryThis;
  var IndexedObject$2 = indexedObject;
  var toIndexedObject$4 = toIndexedObject$c;
  var arrayMethodIsStrict$3 = arrayMethodIsStrict$7;
  var nativeJoin = uncurryThis$E([].join);
  var ES3_STRINGS = IndexedObject$2 !== Object;
  var FORCED$f = ES3_STRINGS || !arrayMethodIsStrict$3('join', ',');

  // `Array.prototype.join` method
  // https://tc39.es/ecma262/#sec-array.prototype.join
  $$1p({
    target: 'Array',
    proto: true,
    forced: FORCED$f
  }, {
    join: function join(separator) {
      return nativeJoin(toIndexedObject$4(this), separator === undefined ? ',' : separator);
    }
  });
  var $$1o = _export;
  var $map = arrayIteration.map;
  var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$5;
  var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$2('map');

  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species
  $$1o({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$2
  }, {
    map: function map(callbackfn /* , thisArg */) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  var DESCRIPTORS$q = descriptors;
  var isArray$4 = isArray$9;
  var $TypeError$g = TypeError;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$6 = Object.getOwnPropertyDescriptor;

  // Safari < 13 does not throw an error in this case
  var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$q && !function () {
    // makes no sense without proper strict mode support
    if (this !== undefined) return true;
    try {
      // eslint-disable-next-line es/no-object-defineproperty -- safe
      Object.defineProperty([], 'length', {
        writable: false
      }).length = 1;
    } catch (error) {
      return error instanceof TypeError;
    }
  }();
  var arraySetLength = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
    if (isArray$4(O) && !getOwnPropertyDescriptor$6(O, 'length').writable) {
      throw new $TypeError$g('Cannot set read only .length');
    }
    return O.length = length;
  } : function (O, length) {
    return O.length = length;
  };
  var $$1n = _export;
  var toObject$b = toObject$i;
  var lengthOfArrayLike$8 = lengthOfArrayLike$d;
  var setArrayLength$2 = arraySetLength;
  var doesNotExceedSafeInteger$2 = doesNotExceedSafeInteger$4;
  var fails$D = fails$Y;
  var INCORRECT_TO_LENGTH = fails$D(function () {
    return [].push.call({
      length: 0x100000000
    }, 1) !== 4294967297;
  });

  // V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
  // https://bugs.chromium.org/p/v8/issues/detail?id=12681
  var properErrorOnNonWritableLength$1 = function properErrorOnNonWritableLength$1() {
    try {
      // eslint-disable-next-line es/no-object-defineproperty -- safe
      Object.defineProperty([], 'length', {
        writable: false
      }).push();
    } catch (error) {
      return error instanceof TypeError;
    }
  };
  var FORCED$e = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength$1();

  // `Array.prototype.push` method
  // https://tc39.es/ecma262/#sec-array.prototype.push
  $$1n({
    target: 'Array',
    proto: true,
    arity: 1,
    forced: FORCED$e
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    push: function push(item) {
      var O = toObject$b(this);
      var len = lengthOfArrayLike$8(O);
      var argCount = arguments.length;
      doesNotExceedSafeInteger$2(len + argCount);
      for (var i = 0; i < argCount; i++) {
        O[len] = arguments[i];
        len++;
      }
      setArrayLength$2(O, len);
      return len;
    }
  });
  var aCallable$e = aCallable$j;
  var toObject$a = toObject$i;
  var IndexedObject$1 = indexedObject;
  var lengthOfArrayLike$7 = lengthOfArrayLike$d;
  var $TypeError$f = TypeError;
  var REDUCE_EMPTY = 'Reduce of empty array with no initial value';

  // `Array.prototype.{ reduce, reduceRight }` methods implementation
  var createMethod$3 = function createMethod$3(IS_RIGHT) {
    return function (that, callbackfn, argumentsLength, memo) {
      var O = toObject$a(that);
      var self = IndexedObject$1(O);
      var length = lengthOfArrayLike$7(O);
      aCallable$e(callbackfn);
      if (length === 0 && argumentsLength < 2) throw new $TypeError$f(REDUCE_EMPTY);
      var index = IS_RIGHT ? length - 1 : 0;
      var i = IS_RIGHT ? -1 : 1;
      if (argumentsLength < 2) while (true) {
        if (index in self) {
          memo = self[index];
          index += i;
          break;
        }
        index += i;
        if (IS_RIGHT ? index < 0 : length <= index) {
          throw new $TypeError$f(REDUCE_EMPTY);
        }
      }
      for (; IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
        memo = callbackfn(memo, self[index], index, O);
      }
      return memo;
    };
  };
  var arrayReduce = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: createMethod$3(false),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: createMethod$3(true)
  };
  var global$v = global$J;
  var classof$8 = classofRaw$2;
  var engineIsNode = classof$8(global$v.process) === 'process';
  var $$1m = _export;
  var $reduce = arrayReduce.left;
  var arrayMethodIsStrict$2 = arrayMethodIsStrict$7;
  var CHROME_VERSION = engineV8Version;
  var IS_NODE$5 = engineIsNode;

  // Chrome 80-82 has a critical bug
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
  var CHROME_BUG = !IS_NODE$5 && CHROME_VERSION > 79 && CHROME_VERSION < 83;
  var FORCED$d = CHROME_BUG || !arrayMethodIsStrict$2('reduce');

  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  $$1m({
    target: 'Array',
    proto: true,
    forced: FORCED$d
  }, {
    reduce: function reduce(callbackfn /* , initialValue */) {
      var length = arguments.length;
      return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
    }
  });
  var $$1l = _export;
  var uncurryThis$D = functionUncurryThis;
  var isArray$3 = isArray$9;
  var nativeReverse = uncurryThis$D([].reverse);
  var test$1 = [1, 2];

  // `Array.prototype.reverse` method
  // https://tc39.es/ecma262/#sec-array.prototype.reverse
  // fix for Safari 12.0 bug
  // https://bugs.webkit.org/show_bug.cgi?id=188794
  $$1l({
    target: 'Array',
    proto: true,
    forced: String(test$1) === String(test$1.reverse())
  }, {
    reverse: function reverse() {
      // eslint-disable-next-line no-self-assign -- dirty hack
      if (isArray$3(this)) this.length = this.length;
      return nativeReverse(this);
    }
  });
  var $$1k = _export;
  var isArray$2 = isArray$9;
  var isConstructor$1 = isConstructor$4;
  var isObject$h = isObject$u;
  var toAbsoluteIndex$2 = toAbsoluteIndex$4;
  var lengthOfArrayLike$6 = lengthOfArrayLike$d;
  var toIndexedObject$3 = toIndexedObject$c;
  var createProperty$5 = createProperty$8;
  var wellKnownSymbol$e = wellKnownSymbol$v;
  var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$5;
  var nativeSlice = arraySlice$7;
  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('slice');
  var SPECIES$4 = wellKnownSymbol$e('species');
  var $Array = Array;
  var max$4 = Math.max;

  // `Array.prototype.slice` method
  // https://tc39.es/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects
  $$1k({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$1
  }, {
    slice: function slice(start, end) {
      var O = toIndexedObject$3(this);
      var length = lengthOfArrayLike$6(O);
      var k = toAbsoluteIndex$2(start, length);
      var fin = toAbsoluteIndex$2(end === undefined ? length : end, length);
      // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
      var Constructor, result, n;
      if (isArray$2(O)) {
        Constructor = O.constructor;
        // cross-realm fallback
        if (isConstructor$1(Constructor) && (Constructor === $Array || isArray$2(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject$h(Constructor)) {
          Constructor = Constructor[SPECIES$4];
          if (Constructor === null) Constructor = undefined;
        }
        if (Constructor === $Array || Constructor === undefined) {
          return nativeSlice(O, k, fin);
        }
      }
      result = new (Constructor === undefined ? $Array : Constructor)(max$4(fin - k, 0));
      for (n = 0; k < fin; k++, n++) if (k in O) createProperty$5(result, n, O[k]);
      result.length = n;
      return result;
    }
  });
  var $$1j = _export;
  var $some = arrayIteration.some;
  var arrayMethodIsStrict$1 = arrayMethodIsStrict$7;
  var STRICT_METHOD$1 = arrayMethodIsStrict$1('some');

  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  $$1j({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD$1
  }, {
    some: function some(callbackfn /* , thisArg */) {
      return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  var tryToString$2 = tryToString$6;
  var $TypeError$e = TypeError;
  var deletePropertyOrThrow$3 = function deletePropertyOrThrow$3(O, P) {
    if (!delete O[P]) throw new $TypeError$e('Cannot delete property ' + tryToString$2(P) + ' of ' + tryToString$2(O));
  };
  var arraySlice$4 = arraySlice$7;
  var floor$4 = Math.floor;
  var sort = function sort(array, comparefn) {
    var length = array.length;
    if (length < 8) {
      // insertion sort
      var i = 1;
      var element, j;
      while (i < length) {
        j = i;
        element = array[i];
        while (j && comparefn(array[j - 1], element) > 0) {
          array[j] = array[--j];
        }
        if (j !== i++) array[j] = element;
      }
    } else {
      // merge sort
      var middle = floor$4(length / 2);
      var left = sort(arraySlice$4(array, 0, middle), comparefn);
      var right = sort(arraySlice$4(array, middle), comparefn);
      var llength = left.length;
      var rlength = right.length;
      var lindex = 0;
      var rindex = 0;
      while (lindex < llength || rindex < rlength) {
        array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
      }
    }
    return array;
  };
  var arraySort$1 = sort;
  var userAgent$4 = engineUserAgent;
  var firefox = userAgent$4.match(/firefox\/(\d+)/i);
  var engineFfVersion = !!firefox && +firefox[1];
  var UA = engineUserAgent;
  var engineIsIeOrEdge = /MSIE|Trident/.test(UA);
  var userAgent$3 = engineUserAgent;
  var webkit = userAgent$3.match(/AppleWebKit\/(\d+)\./);
  var engineWebkitVersion = !!webkit && +webkit[1];
  var $$1i = _export;
  var uncurryThis$C = functionUncurryThis;
  var aCallable$d = aCallable$j;
  var toObject$9 = toObject$i;
  var lengthOfArrayLike$5 = lengthOfArrayLike$d;
  var deletePropertyOrThrow$2 = deletePropertyOrThrow$3;
  var toString$n = toString$s;
  var fails$C = fails$Y;
  var internalSort = arraySort$1;
  var arrayMethodIsStrict = arrayMethodIsStrict$7;
  var FF = engineFfVersion;
  var IE_OR_EDGE = engineIsIeOrEdge;
  var V8 = engineV8Version;
  var WEBKIT = engineWebkitVersion;
  var test = [];
  var nativeSort = uncurryThis$C(test.sort);
  var push$9 = uncurryThis$C(test.push);

  // IE8-
  var FAILS_ON_UNDEFINED = fails$C(function () {
    test.sort(undefined);
  });
  // V8 bug
  var FAILS_ON_NULL = fails$C(function () {
    test.sort(null);
  });
  // Old WebKit
  var STRICT_METHOD = arrayMethodIsStrict('sort');
  var STABLE_SORT = !fails$C(function () {
    // feature detection can be too slow, so check engines versions
    if (V8) return V8 < 70;
    if (FF && FF > 3) return;
    if (IE_OR_EDGE) return true;
    if (WEBKIT) return WEBKIT < 603;
    var result = '';
    var code, chr, value, index;

    // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
    for (code = 65; code < 76; code++) {
      chr = String.fromCharCode(code);
      switch (code) {
        case 66:
        case 69:
        case 70:
        case 72:
          value = 3;
          break;
        case 68:
        case 71:
          value = 4;
          break;
        default:
          value = 2;
      }
      for (index = 0; index < 47; index++) {
        test.push({
          k: chr + index,
          v: value
        });
      }
    }
    test.sort(function (a, b) {
      return b.v - a.v;
    });
    for (index = 0; index < test.length; index++) {
      chr = test[index].k.charAt(0);
      if (result.charAt(result.length - 1) !== chr) result += chr;
    }
    return result !== 'DGBEFHACIJK';
  });
  var FORCED$c = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;
  var getSortCompare = function getSortCompare(comparefn) {
    return function (x, y) {
      if (y === undefined) return -1;
      if (x === undefined) return 1;
      if (comparefn !== undefined) return +comparefn(x, y) || 0;
      return toString$n(x) > toString$n(y) ? 1 : -1;
    };
  };

  // `Array.prototype.sort` method
  // https://tc39.es/ecma262/#sec-array.prototype.sort
  $$1i({
    target: 'Array',
    proto: true,
    forced: FORCED$c
  }, {
    sort: function sort(comparefn) {
      if (comparefn !== undefined) aCallable$d(comparefn);
      var array = toObject$9(this);
      if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);
      var items = [];
      var arrayLength = lengthOfArrayLike$5(array);
      var itemsLength, index;
      for (index = 0; index < arrayLength; index++) {
        if (index in array) push$9(items, array[index]);
      }
      internalSort(items, getSortCompare(comparefn));
      itemsLength = lengthOfArrayLike$5(items);
      index = 0;
      while (index < itemsLength) array[index] = items[index++];
      while (index < arrayLength) deletePropertyOrThrow$2(array, index++);
      return array;
    }
  });
  var anObject$t = anObject$D;
  var ordinaryToPrimitive = ordinaryToPrimitive$2;
  var $TypeError$d = TypeError;

  // `Date.prototype[@@toPrimitive](hint)` method implementation
  // https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
  var dateToPrimitive$1 = function dateToPrimitive$1(hint) {
    anObject$t(this);
    if (hint === 'string' || hint === 'default') hint = 'string';else if (hint !== 'number') throw new $TypeError$d('Incorrect hint');
    return ordinaryToPrimitive(this, hint);
  };
  var hasOwn$f = hasOwnProperty_1;
  var defineBuiltIn$e = defineBuiltIn$l;
  var dateToPrimitive = dateToPrimitive$1;
  var wellKnownSymbol$d = wellKnownSymbol$v;
  var TO_PRIMITIVE = wellKnownSymbol$d('toPrimitive');
  var DatePrototype$1 = Date.prototype;

  // `Date.prototype[@@toPrimitive]` method
  // https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
  if (!hasOwn$f(DatePrototype$1, TO_PRIMITIVE)) {
    defineBuiltIn$e(DatePrototype$1, TO_PRIMITIVE, dateToPrimitive);
  }

  // TODO: Remove from `core-js@4`
  var uncurryThis$B = functionUncurryThis;
  var defineBuiltIn$d = defineBuiltIn$l;
  var DatePrototype = Date.prototype;
  var INVALID_DATE = 'Invalid Date';
  var TO_STRING$1 = 'toString';
  var nativeDateToString = uncurryThis$B(DatePrototype[TO_STRING$1]);
  var thisTimeValue$1 = uncurryThis$B(DatePrototype.getTime);

  // `Date.prototype.toString` method
  // https://tc39.es/ecma262/#sec-date.prototype.tostring
  if (String(new Date(NaN)) !== INVALID_DATE) {
    defineBuiltIn$d(DatePrototype, TO_STRING$1, function toString() {
      var value = thisTimeValue$1(this);
      // eslint-disable-next-line no-self-compare -- NaN check
      return value === value ? nativeDateToString(this) : INVALID_DATE;
    });
  }
  var uncurryThis$A = functionUncurryThis;
  var aCallable$c = aCallable$j;
  var isObject$g = isObject$u;
  var hasOwn$e = hasOwnProperty_1;
  var arraySlice$3 = arraySlice$7;
  var NATIVE_BIND = functionBindNative;
  var $Function = Function;
  var concat$2 = uncurryThis$A([].concat);
  var join$3 = uncurryThis$A([].join);
  var factories = {};
  var construct = function construct(C, argsLength, args) {
    if (!hasOwn$e(factories, argsLength)) {
      var list = [];
      var i = 0;
      for (; i < argsLength; i++) list[i] = 'a[' + i + ']';
      factories[argsLength] = $Function('C,a', 'return new C(' + join$3(list, ',') + ')');
    }
    return factories[argsLength](C, args);
  };

  // `Function.prototype.bind` method implementation
  // https://tc39.es/ecma262/#sec-function.prototype.bind
  // eslint-disable-next-line es/no-function-prototype-bind -- detection
  var functionBind = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */) {
    var F = aCallable$c(this);
    var Prototype = F.prototype;
    var partArgs = arraySlice$3(arguments, 1);
    var boundFunction = function bound( /* args... */
    ) {
      var args = concat$2(partArgs, arraySlice$3(arguments));
      return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
    };
    if (isObject$g(Prototype)) boundFunction.prototype = Prototype;
    return boundFunction;
  };

  // TODO: Remove from `core-js@4`
  var $$1h = _export;
  var bind$8 = functionBind;

  // `Function.prototype.bind` method
  // https://tc39.es/ecma262/#sec-function.prototype.bind
  // eslint-disable-next-line es/no-function-prototype-bind -- detection
  $$1h({
    target: 'Function',
    proto: true,
    forced: Function.bind !== bind$8
  }, {
    bind: bind$8
  });
  var DESCRIPTORS$p = descriptors;
  var FUNCTION_NAME_EXISTS = functionName.EXISTS;
  var uncurryThis$z = functionUncurryThis;
  var defineBuiltInAccessor$b = defineBuiltInAccessor$e;
  var FunctionPrototype = Function.prototype;
  var functionToString = uncurryThis$z(FunctionPrototype.toString);
  var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
  var regExpExec$4 = uncurryThis$z(nameRE.exec);
  var NAME = 'name';

  // Function instances `.name` property
  // https://tc39.es/ecma262/#sec-function-instances-name
  if (DESCRIPTORS$p && !FUNCTION_NAME_EXISTS) {
    defineBuiltInAccessor$b(FunctionPrototype, NAME, {
      configurable: true,
      get: function get() {
        try {
          return regExpExec$4(nameRE, functionToString(this))[1];
        } catch (error) {
          return '';
        }
      }
    });
  }
  var global$u = global$J;
  var setToStringTag$8 = setToStringTag$d;

  // JSON[@@toStringTag] property
  // https://tc39.es/ecma262/#sec-json-@@tostringtag
  setToStringTag$8(global$u.JSON, 'JSON', true);
  var internalMetadata = {
    exports: {}
  };

  // FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
  var fails$B = fails$Y;
  var arrayBufferNonExtensible = fails$B(function () {
    if (typeof ArrayBuffer == 'function') {
      var buffer = new ArrayBuffer(8);
      // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
      if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', {
        value: 8
      });
    }
  });
  var fails$A = fails$Y;
  var isObject$f = isObject$u;
  var classof$7 = classofRaw$2;
  var ARRAY_BUFFER_NON_EXTENSIBLE$1 = arrayBufferNonExtensible;

  // eslint-disable-next-line es/no-object-isextensible -- safe
  var $isExtensible$1 = Object.isExtensible;
  var FAILS_ON_PRIMITIVES$4 = fails$A(function () {
    $isExtensible$1(1);
  });

  // `Object.isExtensible` method
  // https://tc39.es/ecma262/#sec-object.isextensible
  var objectIsExtensible = FAILS_ON_PRIMITIVES$4 || ARRAY_BUFFER_NON_EXTENSIBLE$1 ? function isExtensible(it) {
    if (!isObject$f(it)) return false;
    if (ARRAY_BUFFER_NON_EXTENSIBLE$1 && classof$7(it) === 'ArrayBuffer') return false;
    return $isExtensible$1 ? $isExtensible$1(it) : true;
  } : $isExtensible$1;
  var fails$z = fails$Y;
  var freezing = !fails$z(function () {
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
    return Object.isExtensible(Object.preventExtensions({}));
  });
  var $$1g = _export;
  var uncurryThis$y = functionUncurryThis;
  var hiddenKeys = hiddenKeys$6;
  var isObject$e = isObject$u;
  var hasOwn$d = hasOwnProperty_1;
  var defineProperty$6 = objectDefineProperty.f;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
  var isExtensible$1 = objectIsExtensible;
  var uid = uid$4;
  var FREEZING$2 = freezing;
  var REQUIRED = false;
  var METADATA = uid('meta');
  var id$1 = 0;
  var setMetadata = function setMetadata(it) {
    defineProperty$6(it, METADATA, {
      value: {
        objectID: 'O' + id$1++,
        // object ID
        weakData: {} // weak collections IDs
      }
    });
  };
  var fastKey$1 = function fastKey$1(it, create) {
    // return a primitive with prefix
    if (!isObject$e(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!hasOwn$d(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible$1(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      setMetadata(it);
      // return object ID
    }
    return it[METADATA].objectID;
  };
  var getWeakData$1 = function getWeakData$1(it, create) {
    if (!hasOwn$d(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible$1(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      setMetadata(it);
      // return the store of weak collections IDs
    }
    return it[METADATA].weakData;
  };

  // add metadata on freeze-family methods calling
  var onFreeze$1 = function onFreeze$1(it) {
    if (FREEZING$2 && REQUIRED && isExtensible$1(it) && !hasOwn$d(it, METADATA)) setMetadata(it);
    return it;
  };
  var enable = function enable() {
    meta.enable = function () {/* empty */};
    REQUIRED = true;
    var getOwnPropertyNames = getOwnPropertyNamesModule.f;
    var splice = uncurryThis$y([].splice);
    var test = {};
    test[METADATA] = 1;

    // prevent exposing of metadata key
    if (getOwnPropertyNames(test).length) {
      getOwnPropertyNamesModule.f = function (it) {
        var result = getOwnPropertyNames(it);
        for (var i = 0, length = result.length; i < length; i++) {
          if (result[i] === METADATA) {
            splice(result, i, 1);
            break;
          }
        }
        return result;
      };
      $$1g({
        target: 'Object',
        stat: true,
        forced: true
      }, {
        getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
      });
    }
  };
  var meta = internalMetadata.exports = {
    enable: enable,
    fastKey: fastKey$1,
    getWeakData: getWeakData$1,
    onFreeze: onFreeze$1
  };
  hiddenKeys[METADATA] = true;
  var internalMetadataExports = internalMetadata.exports;
  var bind$7 = functionBindContext;
  var call$o = functionCall;
  var anObject$s = anObject$D;
  var tryToString$1 = tryToString$6;
  var isArrayIteratorMethod = isArrayIteratorMethod$2;
  var lengthOfArrayLike$4 = lengthOfArrayLike$d;
  var isPrototypeOf$4 = objectIsPrototypeOf;
  var getIterator$1 = getIterator$3;
  var getIteratorMethod$1 = getIteratorMethod$4;
  var iteratorClose$3 = iteratorClose$5;
  var $TypeError$c = TypeError;
  var Result = function Result(stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };
  var ResultPrototype = Result.prototype;
  var iterate$d = function iterate$d(iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_RECORD = !!(options && options.IS_RECORD);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind$7(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;
    var stop = function stop(condition) {
      if (iterator) iteratorClose$3(iterator, 'normal', condition);
      return new Result(true, condition);
    };
    var callFn = function callFn(value) {
      if (AS_ENTRIES) {
        anObject$s(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      }
      return INTERRUPTED ? fn(value, stop) : fn(value);
    };
    if (IS_RECORD) {
      iterator = iterable.iterator;
    } else if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod$1(iterable);
      if (!iterFn) throw new $TypeError$c(tryToString$1(iterable) + ' is not iterable');
      // optimisation for array iterators
      if (isArrayIteratorMethod(iterFn)) {
        for (index = 0, length = lengthOfArrayLike$4(iterable); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && isPrototypeOf$4(ResultPrototype, result)) return result;
        }
        return new Result(false);
      }
      iterator = getIterator$1(iterable, iterFn);
    }
    next = IS_RECORD ? iterable.next : iterator.next;
    while (!(step = call$o(next, iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose$3(iterator, 'throw', error);
      }
      if (typeof result == 'object' && result && isPrototypeOf$4(ResultPrototype, result)) return result;
    }
    return new Result(false);
  };
  var isPrototypeOf$3 = objectIsPrototypeOf;
  var $TypeError$b = TypeError;
  var anInstance$9 = function anInstance$9(it, Prototype) {
    if (isPrototypeOf$3(Prototype, it)) return it;
    throw new $TypeError$b('Incorrect invocation');
  };
  var $$1f = _export;
  var global$t = global$J;
  var uncurryThis$x = functionUncurryThis;
  var isForced$3 = isForced_1;
  var defineBuiltIn$c = defineBuiltIn$l;
  var InternalMetadataModule$1 = internalMetadataExports;
  var iterate$c = iterate$d;
  var anInstance$8 = anInstance$9;
  var isCallable$b = isCallable$v;
  var isNullOrUndefined$7 = isNullOrUndefined$b;
  var isObject$d = isObject$u;
  var fails$y = fails$Y;
  var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$3;
  var setToStringTag$7 = setToStringTag$d;
  var inheritIfRequired$3 = inheritIfRequired$5;
  var collection$4 = function collection$4(CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
    var ADDER = IS_MAP ? 'set' : 'add';
    var NativeConstructor = global$t[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var Constructor = NativeConstructor;
    var exported = {};
    var fixMethod = function fixMethod(KEY) {
      var uncurriedNativeMethod = uncurryThis$x(NativePrototype[KEY]);
      defineBuiltIn$c(NativePrototype, KEY, KEY === 'add' ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY === 'delete' ? function (key) {
        return IS_WEAK && !isObject$d(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === 'get' ? function get(key) {
        return IS_WEAK && !isObject$d(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === 'has' ? function has(key) {
        return IS_WEAK && !isObject$d(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      });
    };
    var REPLACE = isForced$3(CONSTRUCTOR_NAME, !isCallable$b(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails$y(function () {
      new NativeConstructor().entries().next();
    })));
    if (REPLACE) {
      // create collection constructor
      Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
      InternalMetadataModule$1.enable();
    } else if (isForced$3(CONSTRUCTOR_NAME, true)) {
      var instance = new Constructor();
      // early implementations not supports chaining
      var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) !== instance;
      // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
      var THROWS_ON_PRIMITIVES = fails$y(function () {
        instance.has(1);
      });
      // most early implementations doesn't supports iterables, most modern - not close it correctly
      // eslint-disable-next-line no-new -- required for testing
      var ACCEPT_ITERABLES = checkCorrectnessOfIteration$1(function (iterable) {
        new NativeConstructor(iterable);
      });
      // for early implementations -0 and +0 not the same
      var BUGGY_ZERO = !IS_WEAK && fails$y(function () {
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new NativeConstructor();
        var index = 5;
        while (index--) $instance[ADDER](index, index);
        return !$instance.has(-0);
      });
      if (!ACCEPT_ITERABLES) {
        Constructor = wrapper(function (dummy, iterable) {
          anInstance$8(dummy, NativePrototype);
          var that = inheritIfRequired$3(new NativeConstructor(), dummy, Constructor);
          if (!isNullOrUndefined$7(iterable)) iterate$c(iterable, that[ADDER], {
            that: that,
            AS_ENTRIES: IS_MAP
          });
          return that;
        });
        Constructor.prototype = NativePrototype;
        NativePrototype.constructor = Constructor;
      }
      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }
      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

      // weak collections should not contains .clear method
      if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
    }
    exported[CONSTRUCTOR_NAME] = Constructor;
    $$1f({
      global: true,
      constructor: true,
      forced: Constructor !== NativeConstructor
    }, exported);
    setToStringTag$7(Constructor, CONSTRUCTOR_NAME);
    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
    return Constructor;
  };
  var defineBuiltIn$b = defineBuiltIn$l;
  var defineBuiltIns$5 = function defineBuiltIns$5(target, src, options) {
    for (var key in src) defineBuiltIn$b(target, key, src[key], options);
    return target;
  };
  var getBuiltIn$9 = getBuiltIn$j;
  var defineBuiltInAccessor$a = defineBuiltInAccessor$e;
  var wellKnownSymbol$c = wellKnownSymbol$v;
  var DESCRIPTORS$o = descriptors;
  var SPECIES$3 = wellKnownSymbol$c('species');
  var setSpecies$3 = function setSpecies$3(CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn$9(CONSTRUCTOR_NAME);
    if (DESCRIPTORS$o && Constructor && !Constructor[SPECIES$3]) {
      defineBuiltInAccessor$a(Constructor, SPECIES$3, {
        configurable: true,
        get: function get() {
          return this;
        }
      });
    }
  };
  var create$7 = objectCreate;
  var defineBuiltInAccessor$9 = defineBuiltInAccessor$e;
  var defineBuiltIns$4 = defineBuiltIns$5;
  var bind$6 = functionBindContext;
  var anInstance$7 = anInstance$9;
  var isNullOrUndefined$6 = isNullOrUndefined$b;
  var iterate$b = iterate$d;
  var defineIterator$1 = iteratorDefine;
  var createIterResultObject$3 = createIterResultObject$5;
  var setSpecies$2 = setSpecies$3;
  var DESCRIPTORS$n = descriptors;
  var fastKey = internalMetadataExports.fastKey;
  var InternalStateModule$7 = internalState;
  var setInternalState$7 = InternalStateModule$7.set;
  var internalStateGetterFor$1 = InternalStateModule$7.getterFor;
  var collectionStrong$2 = {
    getConstructor: function getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var Constructor = wrapper(function (that, iterable) {
        anInstance$7(that, Prototype);
        setInternalState$7(that, {
          type: CONSTRUCTOR_NAME,
          index: create$7(null),
          first: undefined,
          last: undefined,
          size: 0
        });
        if (!DESCRIPTORS$n) that.size = 0;
        if (!isNullOrUndefined$6(iterable)) iterate$b(iterable, that[ADDER], {
          that: that,
          AS_ENTRIES: IS_MAP
        });
      });
      var Prototype = Constructor.prototype;
      var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);
      var define = function define(that, key, value) {
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        var previous, index;
        // change existing entry
        if (entry) {
          entry.value = value;
          // create new entry
        } else {
          state.last = entry = {
            index: index = fastKey(key, true),
            key: key,
            value: value,
            previous: previous = state.last,
            next: undefined,
            removed: false
          };
          if (!state.first) state.first = entry;
          if (previous) previous.next = entry;
          if (DESCRIPTORS$n) state.size++;else that.size++;
          // add to index
          if (index !== 'F') state.index[index] = entry;
        }
        return that;
      };
      var getEntry = function getEntry(that, key) {
        var state = getInternalState(that);
        // fast case
        var index = fastKey(key);
        var entry;
        if (index !== 'F') return state.index[index];
        // frozen object case
        for (entry = state.first; entry; entry = entry.next) {
          if (entry.key === key) return entry;
        }
      };
      defineBuiltIns$4(Prototype, {
        // `{ Map, Set }.prototype.clear()` methods
        // https://tc39.es/ecma262/#sec-map.prototype.clear
        // https://tc39.es/ecma262/#sec-set.prototype.clear
        clear: function clear() {
          var that = this;
          var state = getInternalState(that);
          var entry = state.first;
          while (entry) {
            entry.removed = true;
            if (entry.previous) entry.previous = entry.previous.next = undefined;
            entry = entry.next;
          }
          state.first = state.last = undefined;
          state.index = create$7(null);
          if (DESCRIPTORS$n) state.size = 0;else that.size = 0;
        },
        // `{ Map, Set }.prototype.delete(key)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.delete
        // https://tc39.es/ecma262/#sec-set.prototype.delete
        'delete': function _delete(key) {
          var that = this;
          var state = getInternalState(that);
          var entry = getEntry(that, key);
          if (entry) {
            var next = entry.next;
            var prev = entry.previous;
            delete state.index[entry.index];
            entry.removed = true;
            if (prev) prev.next = next;
            if (next) next.previous = prev;
            if (state.first === entry) state.first = next;
            if (state.last === entry) state.last = prev;
            if (DESCRIPTORS$n) state.size--;else that.size--;
          }
          return !!entry;
        },
        // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.foreach
        // https://tc39.es/ecma262/#sec-set.prototype.foreach
        forEach: function forEach(callbackfn /* , that = undefined */) {
          var state = getInternalState(this);
          var boundFunction = bind$6(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          var entry;
          while (entry = entry ? entry.next : state.first) {
            boundFunction(entry.value, entry.key, this);
            // revert to the last existing entry
            while (entry && entry.removed) entry = entry.previous;
          }
        },
        // `{ Map, Set}.prototype.has(key)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.has
        // https://tc39.es/ecma262/#sec-set.prototype.has
        has: function has(key) {
          return !!getEntry(this, key);
        }
      });
      defineBuiltIns$4(Prototype, IS_MAP ? {
        // `Map.prototype.get(key)` method
        // https://tc39.es/ecma262/#sec-map.prototype.get
        get: function get(key) {
          var entry = getEntry(this, key);
          return entry && entry.value;
        },
        // `Map.prototype.set(key, value)` method
        // https://tc39.es/ecma262/#sec-map.prototype.set
        set: function set(key, value) {
          return define(this, key === 0 ? 0 : key, value);
        }
      } : {
        // `Set.prototype.add(value)` method
        // https://tc39.es/ecma262/#sec-set.prototype.add
        add: function add(value) {
          return define(this, value = value === 0 ? 0 : value, value);
        }
      });
      if (DESCRIPTORS$n) defineBuiltInAccessor$9(Prototype, 'size', {
        configurable: true,
        get: function get() {
          return getInternalState(this).size;
        }
      });
      return Constructor;
    },
    setStrong: function setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP) {
      var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
      var getInternalCollectionState = internalStateGetterFor$1(CONSTRUCTOR_NAME);
      var getInternalIteratorState = internalStateGetterFor$1(ITERATOR_NAME);
      // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.entries
      // https://tc39.es/ecma262/#sec-map.prototype.keys
      // https://tc39.es/ecma262/#sec-map.prototype.values
      // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
      // https://tc39.es/ecma262/#sec-set.prototype.entries
      // https://tc39.es/ecma262/#sec-set.prototype.keys
      // https://tc39.es/ecma262/#sec-set.prototype.values
      // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
      defineIterator$1(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
        setInternalState$7(this, {
          type: ITERATOR_NAME,
          target: iterated,
          state: getInternalCollectionState(iterated),
          kind: kind,
          last: undefined
        });
      }, function () {
        var state = getInternalIteratorState(this);
        var kind = state.kind;
        var entry = state.last;
        // revert to the last existing entry
        while (entry && entry.removed) entry = entry.previous;
        // get next entry
        if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
          // or finish the iteration
          state.target = undefined;
          return createIterResultObject$3(undefined, true);
        }
        // return step by kind
        if (kind === 'keys') return createIterResultObject$3(entry.key, false);
        if (kind === 'values') return createIterResultObject$3(entry.value, false);
        return createIterResultObject$3([entry.key, entry.value], false);
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

      // `{ Map, Set }.prototype[@@species]` accessors
      // https://tc39.es/ecma262/#sec-get-map-@@species
      // https://tc39.es/ecma262/#sec-get-set-@@species
      setSpecies$2(CONSTRUCTOR_NAME);
    }
  };
  var collection$3 = collection$4;
  var collectionStrong$1 = collectionStrong$2;

  // `Map` constructor
  // https://tc39.es/ecma262/#sec-map-objects
  collection$3('Map', function (init) {
    return function Map() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  }, collectionStrong$1);
  var setToStringTag$6 = setToStringTag$d;

  // Math[@@toStringTag] property
  // https://tc39.es/ecma262/#sec-math-@@tostringtag
  setToStringTag$6(Math, 'Math', true);
  var uncurryThis$w = functionUncurryThis;

  // `thisNumberValue` abstract operation
  // https://tc39.es/ecma262/#sec-thisnumbervalue
  var thisNumberValue$2 = uncurryThis$w(1.0.valueOf);

  // a string of all valid unicode whitespaces
  var whitespaces$5 = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002" + "\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
  var uncurryThis$v = functionUncurryThis;
  var requireObjectCoercible$c = requireObjectCoercible$g;
  var toString$m = toString$s;
  var whitespaces$4 = whitespaces$5;
  var replace$8 = uncurryThis$v(''.replace);
  var ltrim = RegExp('^[' + whitespaces$4 + ']+');
  var rtrim = RegExp('(^|[^' + whitespaces$4 + '])[' + whitespaces$4 + ']+$');

  // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  var createMethod$2 = function createMethod$2(TYPE) {
    return function ($this) {
      var string = toString$m(requireObjectCoercible$c($this));
      if (TYPE & 1) string = replace$8(string, ltrim, '');
      if (TYPE & 2) string = replace$8(string, rtrim, '$1');
      return string;
    };
  };
  var stringTrim = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod$2(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod$2(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod$2(3)
  };
  var $$1e = _export;
  var IS_PURE$3 = isPure;
  var DESCRIPTORS$m = descriptors;
  var global$s = global$J;
  var path = path$2;
  var uncurryThis$u = functionUncurryThis;
  var isForced$2 = isForced_1;
  var hasOwn$c = hasOwnProperty_1;
  var inheritIfRequired$2 = inheritIfRequired$5;
  var isPrototypeOf$2 = objectIsPrototypeOf;
  var isSymbol = isSymbol$5;
  var toPrimitive$1 = toPrimitive$3;
  var fails$x = fails$Y;
  var getOwnPropertyNames$2 = objectGetOwnPropertyNames.f;
  var getOwnPropertyDescriptor$5 = objectGetOwnPropertyDescriptor.f;
  var defineProperty$5 = objectDefineProperty.f;
  var thisNumberValue$1 = thisNumberValue$2;
  var trim$2 = stringTrim.trim;
  var NUMBER = 'Number';
  var NativeNumber = global$s[NUMBER];
  path[NUMBER];
  var NumberPrototype = NativeNumber.prototype;
  var TypeError$4 = global$s.TypeError;
  var stringSlice$b = uncurryThis$u(''.slice);
  var charCodeAt$2 = uncurryThis$u(''.charCodeAt);

  // `ToNumeric` abstract operation
  // https://tc39.es/ecma262/#sec-tonumeric
  var toNumeric = function toNumeric(value) {
    var primValue = toPrimitive$1(value, 'number');
    return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
  };

  // `ToNumber` abstract operation
  // https://tc39.es/ecma262/#sec-tonumber
  var toNumber = function toNumber(argument) {
    var it = toPrimitive$1(argument, 'number');
    var first, third, radix, maxCode, digits, length, index, code;
    if (isSymbol(it)) throw new TypeError$4('Cannot convert a Symbol value to a number');
    if (typeof it == 'string' && it.length > 2) {
      it = trim$2(it);
      first = charCodeAt$2(it, 0);
      if (first === 43 || first === 45) {
        third = charCodeAt$2(it, 2);
        if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
      } else if (first === 48) {
        switch (charCodeAt$2(it, 1)) {
          // fast equal of /^0b[01]+$/i
          case 66:
          case 98:
            radix = 2;
            maxCode = 49;
            break;
          // fast equal of /^0o[0-7]+$/i
          case 79:
          case 111:
            radix = 8;
            maxCode = 55;
            break;
          default:
            return +it;
        }
        digits = stringSlice$b(it, 2);
        length = digits.length;
        for (index = 0; index < length; index++) {
          code = charCodeAt$2(digits, index);
          // parseInt parses a string to a first unavailable symbol
          // but ToNumber should return NaN if a string contains unavailable symbols
          if (code < 48 || code > maxCode) return NaN;
        }
        return parseInt(digits, radix);
      }
    }
    return +it;
  };
  var FORCED$b = isForced$2(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'));
  var calledWithNew = function calledWithNew(dummy) {
    // includes check on 1..constructor(foo) case
    return isPrototypeOf$2(NumberPrototype, dummy) && fails$x(function () {
      thisNumberValue$1(dummy);
    });
  };

  // `Number` constructor
  // https://tc39.es/ecma262/#sec-number-constructor
  var NumberWrapper = function Number(value) {
    var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
    return calledWithNew(this) ? inheritIfRequired$2(Object(n), this, NumberWrapper) : n;
  };
  NumberWrapper.prototype = NumberPrototype;
  if (FORCED$b && !IS_PURE$3) NumberPrototype.constructor = NumberWrapper;
  $$1e({
    global: true,
    constructor: true,
    wrap: true,
    forced: FORCED$b
  }, {
    Number: NumberWrapper
  });

  // Use `internal/copy-constructor-properties` helper in `core-js@4`
  var copyConstructorProperties = function copyConstructorProperties(target, source) {
    for (var keys = DESCRIPTORS$m ? getOwnPropertyNames$2(source) : (
      // ES3:
      'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
      // ES2015 (in case, if modules with ES2015 Number statics required before):
      'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
      // ESNext
      'fromString,range').split(','), j = 0, key; keys.length > j; j++) {
      if (hasOwn$c(source, key = keys[j]) && !hasOwn$c(target, key)) {
        defineProperty$5(target, key, getOwnPropertyDescriptor$5(source, key));
      }
    }
  };
  if (FORCED$b || IS_PURE$3) copyConstructorProperties(path[NUMBER], NativeNumber);
  var global$r = global$J;
  var fails$w = fails$Y;
  var uncurryThis$t = functionUncurryThis;
  var toString$l = toString$s;
  var trim$1 = stringTrim.trim;
  var whitespaces$3 = whitespaces$5;
  var charAt$9 = uncurryThis$t(''.charAt);
  var $parseFloat$1 = global$r.parseFloat;
  var Symbol$2 = global$r.Symbol;
  var ITERATOR$5 = Symbol$2 && Symbol$2.iterator;
  var FORCED$a = 1 / $parseFloat$1(whitespaces$3 + '-0') !== -Infinity
  // MS Edge 18- broken with boxed symbols
  || ITERATOR$5 && !fails$w(function () {
    $parseFloat$1(Object(ITERATOR$5));
  });

  // `parseFloat` method
  // https://tc39.es/ecma262/#sec-parsefloat-string
  var numberParseFloat = FORCED$a ? function parseFloat(string) {
    var trimmedString = trim$1(toString$l(string));
    var result = $parseFloat$1(trimmedString);
    return result === 0 && charAt$9(trimmedString, 0) === '-' ? -0 : result;
  } : $parseFloat$1;
  var $$1d = _export;
  var parseFloat$1 = numberParseFloat;

  // `Number.parseFloat` method
  // https://tc39.es/ecma262/#sec-number.parseFloat
  // eslint-disable-next-line es/no-number-parsefloat -- required for testing
  $$1d({
    target: 'Number',
    stat: true,
    forced: Number.parseFloat !== parseFloat$1
  }, {
    parseFloat: parseFloat$1
  });
  var global$q = global$J;
  var fails$v = fails$Y;
  var uncurryThis$s = functionUncurryThis;
  var toString$k = toString$s;
  var trim = stringTrim.trim;
  var whitespaces$2 = whitespaces$5;
  var $parseInt$2 = global$q.parseInt;
  var Symbol$1 = global$q.Symbol;
  var ITERATOR$4 = Symbol$1 && Symbol$1.iterator;
  var hex = /^[+-]?0x/i;
  var exec$7 = uncurryThis$s(hex.exec);
  var FORCED$9 = $parseInt$2(whitespaces$2 + '08') !== 8 || $parseInt$2(whitespaces$2 + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || ITERATOR$4 && !fails$v(function () {
    $parseInt$2(Object(ITERATOR$4));
  });

  // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix
  var numberParseInt = FORCED$9 ? function parseInt(string, radix) {
    var S = trim(toString$k(string));
    return $parseInt$2(S, radix >>> 0 || (exec$7(hex, S) ? 16 : 10));
  } : $parseInt$2;
  var $$1c = _export;
  var parseInt$2 = numberParseInt;

  // `Number.parseInt` method
  // https://tc39.es/ecma262/#sec-number.parseint
  // eslint-disable-next-line es/no-number-parseint -- required for testing
  $$1c({
    target: 'Number',
    stat: true,
    forced: Number.parseInt !== parseInt$2
  }, {
    parseInt: parseInt$2
  });
  var DESCRIPTORS$l = descriptors;
  var uncurryThis$r = functionUncurryThis;
  var call$n = functionCall;
  var fails$u = fails$Y;
  var objectKeys$1 = objectKeys$4;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var toObject$8 = toObject$i;
  var IndexedObject = indexedObject;

  // eslint-disable-next-line es/no-object-assign -- safe
  var $assign = Object.assign;
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  var defineProperty$4 = Object.defineProperty;
  var concat$1 = uncurryThis$r([].concat);

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  var objectAssign = !$assign || fails$u(function () {
    // should have correct order of operations (Edge bug)
    if (DESCRIPTORS$l && $assign({
      b: 1
    }, $assign(defineProperty$4({}, 'a', {
      enumerable: true,
      get: function get() {
        defineProperty$4(this, 'b', {
          value: 3,
          enumerable: false
        });
      }
    }), {
      b: 2
    })).b !== 1) return true;
    // should work with symbols and should have deterministic property order (V8 bug)
    var A = {};
    var B = {};
    // eslint-disable-next-line es/no-symbol -- safe
    var symbol = Symbol('assign detection');
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function (chr) {
      B[chr] = chr;
    });
    return $assign({}, A)[symbol] !== 7 || objectKeys$1($assign({}, B)).join('') !== alphabet;
  }) ? function assign(target, source) {
    // eslint-disable-line no-unused-vars -- required for `.length`
    var T = toObject$8(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    var propertyIsEnumerable = propertyIsEnumerableModule.f;
    while (argumentsLength > index) {
      var S = IndexedObject(arguments[index++]);
      var keys = getOwnPropertySymbols ? concat$1(objectKeys$1(S), getOwnPropertySymbols(S)) : objectKeys$1(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) {
        key = keys[j++];
        if (!DESCRIPTORS$l || call$n(propertyIsEnumerable, S, key)) T[key] = S[key];
      }
    }
    return T;
  } : $assign;
  var $$1b = _export;
  var assign$1 = objectAssign;

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  // eslint-disable-next-line es/no-object-assign -- required for testing
  $$1b({
    target: 'Object',
    stat: true,
    arity: 2,
    forced: Object.assign !== assign$1
  }, {
    assign: assign$1
  });

  // TODO: Remove from `core-js@4`
  var $$1a = _export;
  var DESCRIPTORS$k = descriptors;
  var create$6 = objectCreate;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  $$1a({
    target: 'Object',
    stat: true,
    sham: !DESCRIPTORS$k
  }, {
    create: create$6
  });
  var $$19 = _export;
  var DESCRIPTORS$j = descriptors;
  var defineProperties = objectDefineProperties.f;

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  $$19({
    target: 'Object',
    stat: true,
    forced: Object.defineProperties !== defineProperties,
    sham: !DESCRIPTORS$j
  }, {
    defineProperties: defineProperties
  });
  var $$18 = _export;
  var DESCRIPTORS$i = descriptors;
  var defineProperty$3 = objectDefineProperty.f;

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  $$18({
    target: 'Object',
    stat: true,
    forced: Object.defineProperty !== defineProperty$3,
    sham: !DESCRIPTORS$i
  }, {
    defineProperty: defineProperty$3
  });
  var DESCRIPTORS$h = descriptors;
  var fails$t = fails$Y;
  var uncurryThis$q = functionUncurryThis;
  var objectGetPrototypeOf$1 = objectGetPrototypeOf$2;
  var objectKeys = objectKeys$4;
  var toIndexedObject$2 = toIndexedObject$c;
  var $propertyIsEnumerable = objectPropertyIsEnumerable.f;
  var propertyIsEnumerable = uncurryThis$q($propertyIsEnumerable);
  var push$8 = uncurryThis$q([].push);

  // in some IE versions, `propertyIsEnumerable` returns incorrect result on integer keys
  // of `null` prototype objects
  var IE_BUG = DESCRIPTORS$h && fails$t(function () {
    // eslint-disable-next-line es/no-object-create -- safe
    var O = Object.create(null);
    O[2] = 2;
    return !propertyIsEnumerable(O, 2);
  });

  // `Object.{ entries, values }` methods implementation
  var createMethod$1 = function createMethod$1(TO_ENTRIES) {
    return function (it) {
      var O = toIndexedObject$2(it);
      var keys = objectKeys(O);
      var IE_WORKAROUND = IE_BUG && objectGetPrototypeOf$1(O) === null;
      var length = keys.length;
      var i = 0;
      var result = [];
      var key;
      while (length > i) {
        key = keys[i++];
        if (!DESCRIPTORS$h || (IE_WORKAROUND ? key in O : propertyIsEnumerable(O, key))) {
          push$8(result, TO_ENTRIES ? [key, O[key]] : O[key]);
        }
      }
      return result;
    };
  };
  var objectToArray = {
    // `Object.entries` method
    // https://tc39.es/ecma262/#sec-object.entries
    entries: createMethod$1(true),
    // `Object.values` method
    // https://tc39.es/ecma262/#sec-object.values
    values: createMethod$1(false)
  };
  var $$17 = _export;
  var $entries = objectToArray.entries;

  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  $$17({
    target: 'Object',
    stat: true
  }, {
    entries: function entries(O) {
      return $entries(O);
    }
  });
  var $$16 = _export;
  var FREEZING$1 = freezing;
  var fails$s = fails$Y;
  var isObject$c = isObject$u;
  var onFreeze = internalMetadataExports.onFreeze;

  // eslint-disable-next-line es/no-object-freeze -- safe
  var $freeze = Object.freeze;
  var FAILS_ON_PRIMITIVES$3 = fails$s(function () {
    $freeze(1);
  });

  // `Object.freeze` method
  // https://tc39.es/ecma262/#sec-object.freeze
  $$16({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES$3,
    sham: !FREEZING$1
  }, {
    freeze: function freeze(it) {
      return $freeze && isObject$c(it) ? $freeze(onFreeze(it)) : it;
    }
  });
  var $$15 = _export;
  var fails$r = fails$Y;
  var toIndexedObject$1 = toIndexedObject$c;
  var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var DESCRIPTORS$g = descriptors;
  var FORCED$8 = !DESCRIPTORS$g || fails$r(function () {
    nativeGetOwnPropertyDescriptor(1);
  });

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  $$15({
    target: 'Object',
    stat: true,
    forced: FORCED$8,
    sham: !DESCRIPTORS$g
  }, {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
      return nativeGetOwnPropertyDescriptor(toIndexedObject$1(it), key);
    }
  });
  var $$14 = _export;
  var DESCRIPTORS$f = descriptors;
  var ownKeys$1 = ownKeys$3;
  var toIndexedObject = toIndexedObject$c;
  var getOwnPropertyDescriptorModule$2 = objectGetOwnPropertyDescriptor;
  var createProperty$4 = createProperty$8;

  // `Object.getOwnPropertyDescriptors` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  $$14({
    target: 'Object',
    stat: true,
    sham: !DESCRIPTORS$f
  }, {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
      var O = toIndexedObject(object);
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$2.f;
      var keys = ownKeys$1(O);
      var result = {};
      var index = 0;
      var key, descriptor;
      while (keys.length > index) {
        descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
        if (descriptor !== undefined) createProperty$4(result, key, descriptor);
      }
      return result;
    }
  });
  var $$13 = _export;
  var fails$q = fails$Y;
  var toObject$7 = toObject$i;
  var nativeGetPrototypeOf = objectGetPrototypeOf$2;
  var CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter;
  var FAILS_ON_PRIMITIVES$2 = fails$q(function () {
    nativeGetPrototypeOf(1);
  });

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  $$13({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES$2,
    sham: !CORRECT_PROTOTYPE_GETTER$1
  }, {
    getPrototypeOf: function getPrototypeOf(it) {
      return nativeGetPrototypeOf(toObject$7(it));
    }
  });
  var $$12 = _export;
  var toObject$6 = toObject$i;
  var nativeKeys = objectKeys$4;
  var fails$p = fails$Y;
  var FAILS_ON_PRIMITIVES$1 = fails$p(function () {
    nativeKeys(1);
  });

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  $$12({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES$1
  }, {
    keys: function keys(it) {
      return nativeKeys(toObject$6(it));
    }
  });
  var DESCRIPTORS$e = descriptors;
  var defineBuiltInAccessor$8 = defineBuiltInAccessor$e;
  var isObject$b = isObject$u;
  var isPossiblePrototype = isPossiblePrototype$2;
  var toObject$5 = toObject$i;
  var requireObjectCoercible$b = requireObjectCoercible$g;

  // eslint-disable-next-line es/no-object-getprototypeof -- safe
  var getPrototypeOf$3 = Object.getPrototypeOf;
  // eslint-disable-next-line es/no-object-setprototypeof -- safe
  var setPrototypeOf$2 = Object.setPrototypeOf;
  var ObjectPrototype$1 = Object.prototype;
  var PROTO = '__proto__';

  // `Object.prototype.__proto__` accessor
  // https://tc39.es/ecma262/#sec-object.prototype.__proto__
  if (DESCRIPTORS$e && getPrototypeOf$3 && setPrototypeOf$2 && !(PROTO in ObjectPrototype$1)) try {
    defineBuiltInAccessor$8(ObjectPrototype$1, PROTO, {
      configurable: true,
      get: function __proto__() {
        return getPrototypeOf$3(toObject$5(this));
      },
      set: function __proto__(proto) {
        var O = requireObjectCoercible$b(this);
        if (isPossiblePrototype(proto) && isObject$b(O)) {
          setPrototypeOf$2(O, proto);
        }
      }
    });
  } catch (error) {/* empty */}
  var $$11 = _export;
  var setPrototypeOf$1 = objectSetPrototypeOf;

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  $$11({
    target: 'Object',
    stat: true
  }, {
    setPrototypeOf: setPrototypeOf$1
  });
  var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
  var classof$6 = classof$f;

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
    return '[object ' + classof$6(this) + ']';
  };
  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var defineBuiltIn$a = defineBuiltIn$l;
  var toString$j = objectToString;

  // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  if (!TO_STRING_TAG_SUPPORT) {
    defineBuiltIn$a(Object.prototype, 'toString', toString$j, {
      unsafe: true
    });
  }
  var $$10 = _export;
  var $values = objectToArray.values;

  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  $$10({
    target: 'Object',
    stat: true
  }, {
    values: function values(O) {
      return $values(O);
    }
  });
  var isConstructor = isConstructor$4;
  var tryToString = tryToString$6;
  var $TypeError$a = TypeError;

  // `Assert: IsConstructor(argument) is true`
  var aConstructor$2 = function aConstructor$2(argument) {
    if (isConstructor(argument)) return argument;
    throw new $TypeError$a(tryToString(argument) + ' is not a constructor');
  };
  var anObject$r = anObject$D;
  var aConstructor$1 = aConstructor$2;
  var isNullOrUndefined$5 = isNullOrUndefined$b;
  var wellKnownSymbol$b = wellKnownSymbol$v;
  var SPECIES$2 = wellKnownSymbol$b('species');

  // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor
  var speciesConstructor$2 = function speciesConstructor$2(O, defaultConstructor) {
    var C = anObject$r(O).constructor;
    var S;
    return C === undefined || isNullOrUndefined$5(S = anObject$r(C)[SPECIES$2]) ? defaultConstructor : aConstructor$1(S);
  };
  var $TypeError$9 = TypeError;
  var validateArgumentsLength$7 = function validateArgumentsLength$7(passed, required) {
    if (passed < required) throw new $TypeError$9('Not enough arguments');
    return passed;
  };
  var userAgent$2 = engineUserAgent;

  // eslint-disable-next-line redos/no-vulnerable -- safe
  var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);
  var global$p = global$J;
  var apply$3 = functionApply;
  var bind$5 = functionBindContext;
  var isCallable$a = isCallable$v;
  var hasOwn$b = hasOwnProperty_1;
  var fails$o = fails$Y;
  var html = html$2;
  var arraySlice$2 = arraySlice$7;
  var createElement = documentCreateElement$2;
  var validateArgumentsLength$6 = validateArgumentsLength$7;
  var IS_IOS$1 = engineIsIos;
  var IS_NODE$4 = engineIsNode;
  var set$1 = global$p.setImmediate;
  var clear = global$p.clearImmediate;
  var process$2 = global$p.process;
  var Dispatch = global$p.Dispatch;
  var Function$2 = global$p.Function;
  var MessageChannel = global$p.MessageChannel;
  var String$1 = global$p.String;
  var counter = 0;
  var queue$2 = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var $location, defer, channel, port;
  fails$o(function () {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = global$p.location;
  });
  var run = function run(id) {
    if (hasOwn$b(queue$2, id)) {
      var fn = queue$2[id];
      delete queue$2[id];
      fn();
    }
  };
  var runner = function runner(id) {
    return function () {
      run(id);
    };
  };
  var eventListener = function eventListener(event) {
    run(event.data);
  };
  var globalPostMessageDefer = function globalPostMessageDefer(id) {
    // old engines have not location.origin
    global$p.postMessage(String$1(id), $location.protocol + '//' + $location.host);
  };

  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if (!set$1 || !clear) {
    set$1 = function setImmediate(handler) {
      validateArgumentsLength$6(arguments.length, 1);
      var fn = isCallable$a(handler) ? handler : Function$2(handler);
      var args = arraySlice$2(arguments, 1);
      queue$2[++counter] = function () {
        apply$3(fn, undefined, args);
      };
      defer(counter);
      return counter;
    };
    clear = function clearImmediate(id) {
      delete queue$2[id];
    };
    // Node.js 0.8-
    if (IS_NODE$4) {
      defer = function defer(id) {
        process$2.nextTick(runner(id));
      };
      // Sphere (JS game engine) Dispatch API
    } else if (Dispatch && Dispatch.now) {
      defer = function defer(id) {
        Dispatch.now(runner(id));
      };
      // Browsers with MessageChannel, includes WebWorkers
      // except iOS - https://github.com/zloirock/core-js/issues/624
    } else if (MessageChannel && !IS_IOS$1) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = eventListener;
      defer = bind$5(port.postMessage, port);
      // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global$p.addEventListener && isCallable$a(global$p.postMessage) && !global$p.importScripts && $location && $location.protocol !== 'file:' && !fails$o(globalPostMessageDefer)) {
      defer = globalPostMessageDefer;
      global$p.addEventListener('message', eventListener, false);
      // IE8-
    } else if (ONREADYSTATECHANGE in createElement('script')) {
      defer = function defer(id) {
        html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
          html.removeChild(this);
          run(id);
        };
      };
      // Rest old browsers
    } else {
      defer = function defer(id) {
        setTimeout(runner(id), 0);
      };
    }
  }
  var task$1 = {
    set: set$1,
    clear: clear
  };
  var global$o = global$J;
  var DESCRIPTORS$d = descriptors;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$4 = Object.getOwnPropertyDescriptor;

  // Avoid NodeJS experimental warning
  var safeGetBuiltIn$2 = function safeGetBuiltIn$2(name) {
    if (!DESCRIPTORS$d) return global$o[name];
    var descriptor = getOwnPropertyDescriptor$4(global$o, name);
    return descriptor && descriptor.value;
  };
  var Queue$2 = function Queue$2() {
    this.head = null;
    this.tail = null;
  };
  Queue$2.prototype = {
    add: function add(item) {
      var entry = {
        item: item,
        next: null
      };
      var tail = this.tail;
      if (tail) tail.next = entry;else this.head = entry;
      this.tail = entry;
    },
    get: function get() {
      var entry = this.head;
      if (entry) {
        var next = this.head = entry.next;
        if (next === null) this.tail = null;
        return entry.item;
      }
    }
  };
  var queue$1 = Queue$2;
  var userAgent$1 = engineUserAgent;
  var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$1) && typeof Pebble != 'undefined';
  var userAgent = engineUserAgent;
  var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);
  var global$n = global$J;
  var safeGetBuiltIn$1 = safeGetBuiltIn$2;
  var bind$4 = functionBindContext;
  var macrotask = task$1.set;
  var Queue$1 = queue$1;
  var IS_IOS = engineIsIos;
  var IS_IOS_PEBBLE = engineIsIosPebble;
  var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
  var IS_NODE$3 = engineIsNode;
  var MutationObserver = global$n.MutationObserver || global$n.WebKitMutationObserver;
  var document$2 = global$n.document;
  var process$1 = global$n.process;
  var Promise$1 = global$n.Promise;
  var microtask$1 = safeGetBuiltIn$1('queueMicrotask');
  var notify$1, toggle, node, promise, then;

  // modern engines have queueMicrotask method
  if (!microtask$1) {
    var queue = new Queue$1();
    var flush = function flush() {
      var parent, fn;
      if (IS_NODE$3 && (parent = process$1.domain)) parent.exit();
      while (fn = queue.get()) try {
        fn();
      } catch (error) {
        if (queue.head) notify$1();
        throw error;
      }
      if (parent) parent.enter();
    };

    // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
    if (!IS_IOS && !IS_NODE$3 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
      toggle = true;
      node = document$2.createTextNode('');
      new MutationObserver(flush).observe(node, {
        characterData: true
      });
      notify$1 = function notify$1() {
        node.data = toggle = !toggle;
      };
      // environments with maybe non-completely correct, but existent Promise
    } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      promise = Promise$1.resolve(undefined);
      // workaround of WebKit ~ iOS Safari 10.1 bug
      promise.constructor = Promise$1;
      then = bind$4(promise.then, promise);
      notify$1 = function notify$1() {
        then(flush);
      };
      // Node.js without promises
    } else if (IS_NODE$3) {
      notify$1 = function notify$1() {
        process$1.nextTick(flush);
      };
      // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessage
      // - onreadystatechange
      // - setTimeout
    } else {
      // `webpack` dev server bug on IE global methods - use bind(fn, global)
      macrotask = bind$4(macrotask, global$n);
      notify$1 = function notify$1() {
        macrotask(flush);
      };
    }
    microtask$1 = function microtask$1(fn) {
      if (!queue.head) notify$1();
      queue.add(fn);
    };
  }
  var microtask_1 = microtask$1;
  var hostReportErrors$1 = function hostReportErrors$1(a, b) {
    try {
      // eslint-disable-next-line no-console -- safe
      arguments.length === 1 ? console.error(a) : console.error(a, b);
    } catch (error) {/* empty */}
  };
  var perform$3 = function perform$3(exec) {
    try {
      return {
        error: false,
        value: exec()
      };
    } catch (error) {
      return {
        error: true,
        value: error
      };
    }
  };
  var global$m = global$J;
  var promiseNativeConstructor = global$m.Promise;

  /* global Deno -- Deno case */
  var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';
  var IS_DENO$1 = engineIsDeno;
  var IS_NODE$2 = engineIsNode;
  var engineIsBrowser = !IS_DENO$1 && !IS_NODE$2 && typeof window == 'object' && typeof document == 'object';
  var global$l = global$J;
  var NativePromiseConstructor$3 = promiseNativeConstructor;
  var isCallable$9 = isCallable$v;
  var isForced$1 = isForced_1;
  var inspectSource = inspectSource$3;
  var wellKnownSymbol$a = wellKnownSymbol$v;
  var IS_BROWSER = engineIsBrowser;
  var IS_DENO = engineIsDeno;
  var V8_VERSION = engineV8Version;
  NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
  var SPECIES$1 = wellKnownSymbol$a('species');
  var SUBCLASSING = false;
  var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$9(global$l.PromiseRejectionEvent);
  var FORCED_PROMISE_CONSTRUCTOR$5 = isForced$1('Promise', function () {
    var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$3);
    var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$3);
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
    // We can't use @@species feature detection in V8 since it causes
    // deoptimization and performance degradation
    // https://github.com/zloirock/core-js/issues/679
    if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
      // Detect correctness of subclassing with @@species support
      var promise = new NativePromiseConstructor$3(function (resolve) {
        resolve(1);
      });
      var FakePromise = function FakePromise(exec) {
        exec(function () {/* empty */}, function () {/* empty */});
      };
      var constructor = promise.constructor = {};
      constructor[SPECIES$1] = FakePromise;
      SUBCLASSING = promise.then(function () {/* empty */}) instanceof FakePromise;
      if (!SUBCLASSING) return true;
      // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    }
    return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT$1;
  });
  var promiseConstructorDetection = {
    CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
    REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
    SUBCLASSING: SUBCLASSING
  };
  var newPromiseCapability$2 = {};
  var aCallable$b = aCallable$j;
  var $TypeError$8 = TypeError;
  var PromiseCapability = function PromiseCapability(C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw new $TypeError$8('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = aCallable$b(resolve);
    this.reject = aCallable$b(reject);
  };

  // `NewPromiseCapability` abstract operation
  // https://tc39.es/ecma262/#sec-newpromisecapability
  newPromiseCapability$2.f = function (C) {
    return new PromiseCapability(C);
  };
  var $$$ = _export;
  var IS_NODE$1 = engineIsNode;
  var global$k = global$J;
  var call$m = functionCall;
  var defineBuiltIn$9 = defineBuiltIn$l;
  var setPrototypeOf = objectSetPrototypeOf;
  var setToStringTag$5 = setToStringTag$d;
  var setSpecies$1 = setSpecies$3;
  var aCallable$a = aCallable$j;
  var isCallable$8 = isCallable$v;
  var isObject$a = isObject$u;
  var anInstance$6 = anInstance$9;
  var speciesConstructor$1 = speciesConstructor$2;
  var task = task$1.set;
  var microtask = microtask_1;
  var hostReportErrors = hostReportErrors$1;
  var perform$2 = perform$3;
  var Queue = queue$1;
  var InternalStateModule$6 = internalState;
  var NativePromiseConstructor$2 = promiseNativeConstructor;
  var PromiseConstructorDetection = promiseConstructorDetection;
  var newPromiseCapabilityModule$3 = newPromiseCapability$2;
  var PROMISE = 'Promise';
  var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
  var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
  var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
  var getInternalPromiseState = InternalStateModule$6.getterFor(PROMISE);
  var setInternalState$6 = InternalStateModule$6.set;
  var NativePromisePrototype$1 = NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;
  var PromiseConstructor = NativePromiseConstructor$2;
  var PromisePrototype = NativePromisePrototype$1;
  var TypeError$3 = global$k.TypeError;
  var document$1 = global$k.document;
  var process = global$k.process;
  var newPromiseCapability$1 = newPromiseCapabilityModule$3.f;
  var newGenericPromiseCapability = newPromiseCapability$1;
  var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$k.dispatchEvent);
  var UNHANDLED_REJECTION = 'unhandledrejection';
  var REJECTION_HANDLED = 'rejectionhandled';
  var PENDING = 0;
  var FULFILLED = 1;
  var REJECTED = 2;
  var HANDLED = 1;
  var UNHANDLED = 2;
  var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

  // helpers
  var isThenable = function isThenable(it) {
    var then;
    return isObject$a(it) && isCallable$8(then = it.then) ? then : false;
  };
  var callReaction = function callReaction(reaction, state) {
    var value = state.value;
    var ok = state.state === FULFILLED;
    var handler = ok ? reaction.ok : reaction.fail;
    var resolve = reaction.resolve;
    var reject = reaction.reject;
    var domain = reaction.domain;
    var result, then, exited;
    try {
      if (handler) {
        if (!ok) {
          if (state.rejection === UNHANDLED) onHandleUnhandled(state);
          state.rejection = HANDLED;
        }
        if (handler === true) result = value;else {
          if (domain) domain.enter();
          result = handler(value); // can throw
          if (domain) {
            domain.exit();
            exited = true;
          }
        }
        if (result === reaction.promise) {
          reject(new TypeError$3('Promise-chain cycle'));
        } else if (then = isThenable(result)) {
          call$m(then, result, resolve, reject);
        } else resolve(result);
      } else reject(value);
    } catch (error) {
      if (domain && !exited) domain.exit();
      reject(error);
    }
  };
  var notify = function notify(state, isReject) {
    if (state.notified) return;
    state.notified = true;
    microtask(function () {
      var reactions = state.reactions;
      var reaction;
      while (reaction = reactions.get()) {
        callReaction(reaction, state);
      }
      state.notified = false;
      if (isReject && !state.rejection) onUnhandled(state);
    });
  };
  var dispatchEvent = function dispatchEvent(name, promise, reason) {
    var event, handler;
    if (DISPATCH_EVENT) {
      event = document$1.createEvent('Event');
      event.promise = promise;
      event.reason = reason;
      event.initEvent(name, false, true);
      global$k.dispatchEvent(event);
    } else event = {
      promise: promise,
      reason: reason
    };
    if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$k['on' + name])) handler(event);else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
  };
  var onUnhandled = function onUnhandled(state) {
    call$m(task, global$k, function () {
      var promise = state.facade;
      var value = state.value;
      var IS_UNHANDLED = isUnhandled(state);
      var result;
      if (IS_UNHANDLED) {
        result = perform$2(function () {
          if (IS_NODE$1) {
            process.emit('unhandledRejection', value, promise);
          } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
        });
        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
        state.rejection = IS_NODE$1 || isUnhandled(state) ? UNHANDLED : HANDLED;
        if (result.error) throw result.value;
      }
    });
  };
  var isUnhandled = function isUnhandled(state) {
    return state.rejection !== HANDLED && !state.parent;
  };
  var onHandleUnhandled = function onHandleUnhandled(state) {
    call$m(task, global$k, function () {
      var promise = state.facade;
      if (IS_NODE$1) {
        process.emit('rejectionHandled', promise);
      } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
    });
  };
  var bind$3 = function bind$3(fn, state, unwrap) {
    return function (value) {
      fn(state, value, unwrap);
    };
  };
  var internalReject = function internalReject(state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value;
    state.state = REJECTED;
    notify(state, true);
  };
  var internalResolve = function internalResolve(state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    try {
      if (state.facade === value) throw new TypeError$3("Promise can't be resolved itself");
      var then = isThenable(value);
      if (then) {
        microtask(function () {
          var wrapper = {
            done: false
          };
          try {
            call$m(then, value, bind$3(internalResolve, wrapper, state), bind$3(internalReject, wrapper, state));
          } catch (error) {
            internalReject(wrapper, error, state);
          }
        });
      } else {
        state.value = value;
        state.state = FULFILLED;
        notify(state, false);
      }
    } catch (error) {
      internalReject({
        done: false
      }, error, state);
    }
  };

  // constructor polyfill
  if (FORCED_PROMISE_CONSTRUCTOR$4) {
    // 25.4.3.1 Promise(executor)
    PromiseConstructor = function Promise(executor) {
      anInstance$6(this, PromisePrototype);
      aCallable$a(executor);
      call$m(Internal, this);
      var state = getInternalPromiseState(this);
      try {
        executor(bind$3(internalResolve, state), bind$3(internalReject, state));
      } catch (error) {
        internalReject(state, error);
      }
    };
    PromisePrototype = PromiseConstructor.prototype;

    // eslint-disable-next-line no-unused-vars -- required for `.length`
    Internal = function Promise(executor) {
      setInternalState$6(this, {
        type: PROMISE,
        done: false,
        notified: false,
        parent: false,
        reactions: new Queue(),
        rejection: false,
        state: PENDING,
        value: undefined
      });
    };

    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    Internal.prototype = defineBuiltIn$9(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability$1(speciesConstructor$1(this, PromiseConstructor));
      state.parent = true;
      reaction.ok = isCallable$8(onFulfilled) ? onFulfilled : true;
      reaction.fail = isCallable$8(onRejected) && onRejected;
      reaction.domain = IS_NODE$1 ? process.domain : undefined;
      if (state.state === PENDING) state.reactions.add(reaction);else microtask(function () {
        callReaction(reaction, state);
      });
      return reaction.promise;
    });
    OwnPromiseCapability = function OwnPromiseCapability() {
      var promise = new Internal();
      var state = getInternalPromiseState(promise);
      this.promise = promise;
      this.resolve = bind$3(internalResolve, state);
      this.reject = bind$3(internalReject, state);
    };
    newPromiseCapabilityModule$3.f = newPromiseCapability$1 = function newPromiseCapability$1(C) {
      return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };
    if (isCallable$8(NativePromiseConstructor$2) && NativePromisePrototype$1 !== Object.prototype) {
      nativeThen = NativePromisePrototype$1.then;
      if (!NATIVE_PROMISE_SUBCLASSING) {
        // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
        defineBuiltIn$9(NativePromisePrototype$1, 'then', function then(onFulfilled, onRejected) {
          var that = this;
          return new PromiseConstructor(function (resolve, reject) {
            call$m(nativeThen, that, resolve, reject);
          }).then(onFulfilled, onRejected);
          // https://github.com/zloirock/core-js/issues/640
        }, {
          unsafe: true
        });
      }

      // make `.constructor === Promise` work for native promise-based APIs
      try {
        delete NativePromisePrototype$1.constructor;
      } catch (error) {/* empty */}

      // make `instanceof Promise` work for native promise-based APIs
      if (setPrototypeOf) {
        setPrototypeOf(NativePromisePrototype$1, PromisePrototype);
      }
    }
  }
  $$$({
    global: true,
    constructor: true,
    wrap: true,
    forced: FORCED_PROMISE_CONSTRUCTOR$4
  }, {
    Promise: PromiseConstructor
  });
  setToStringTag$5(PromiseConstructor, PROMISE, false);
  setSpecies$1(PROMISE);
  var NativePromiseConstructor$1 = promiseNativeConstructor;
  var checkCorrectnessOfIteration = checkCorrectnessOfIteration$3;
  var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;
  var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration(function (iterable) {
    NativePromiseConstructor$1.all(iterable).then(undefined, function () {/* empty */});
  });
  var $$_ = _export;
  var call$l = functionCall;
  var aCallable$9 = aCallable$j;
  var newPromiseCapabilityModule$2 = newPromiseCapability$2;
  var perform$1 = perform$3;
  var iterate$a = iterate$d;
  var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  $$_({
    target: 'Promise',
    stat: true,
    forced: PROMISE_STATICS_INCORRECT_ITERATION$1
  }, {
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapabilityModule$2.f(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform$1(function () {
        var $promiseResolve = aCallable$9(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        iterate$a(iterable, function (promise) {
          var index = counter++;
          var alreadyCalled = false;
          remaining++;
          call$l($promiseResolve, C, promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });
  var $$Z = _export;
  var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
  var NativePromiseConstructor = promiseNativeConstructor;
  var getBuiltIn$8 = getBuiltIn$j;
  var isCallable$7 = isCallable$v;
  var defineBuiltIn$8 = defineBuiltIn$l;
  var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

  // `Promise.prototype.catch` method
  // https://tc39.es/ecma262/#sec-promise.prototype.catch
  $$Z({
    target: 'Promise',
    proto: true,
    forced: FORCED_PROMISE_CONSTRUCTOR$2,
    real: true
  }, {
    'catch': function _catch(onRejected) {
      return this.then(undefined, onRejected);
    }
  });

  // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
  if (isCallable$7(NativePromiseConstructor)) {
    var method = getBuiltIn$8('Promise').prototype['catch'];
    if (NativePromisePrototype['catch'] !== method) {
      defineBuiltIn$8(NativePromisePrototype, 'catch', method, {
        unsafe: true
      });
    }
  }
  var $$Y = _export;
  var call$k = functionCall;
  var aCallable$8 = aCallable$j;
  var newPromiseCapabilityModule$1 = newPromiseCapability$2;
  var perform = perform$3;
  var iterate$9 = iterate$d;
  var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  $$Y({
    target: 'Promise',
    stat: true,
    forced: PROMISE_STATICS_INCORRECT_ITERATION
  }, {
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapabilityModule$1.f(C);
      var reject = capability.reject;
      var result = perform(function () {
        var $promiseResolve = aCallable$8(C.resolve);
        iterate$9(iterable, function (promise) {
          call$k($promiseResolve, C, promise).then(capability.resolve, reject);
        });
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });
  var $$X = _export;
  var newPromiseCapabilityModule = newPromiseCapability$2;
  var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  $$X({
    target: 'Promise',
    stat: true,
    forced: FORCED_PROMISE_CONSTRUCTOR$1
  }, {
    reject: function reject(r) {
      var capability = newPromiseCapabilityModule.f(this);
      var capabilityReject = capability.reject;
      capabilityReject(r);
      return capability.promise;
    }
  });
  var anObject$q = anObject$D;
  var isObject$9 = isObject$u;
  var newPromiseCapability = newPromiseCapability$2;
  var promiseResolve$1 = function promiseResolve$1(C, x) {
    anObject$q(C);
    if (isObject$9(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };
  var $$W = _export;
  var getBuiltIn$7 = getBuiltIn$j;
  var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
  var promiseResolve = promiseResolve$1;
  getBuiltIn$7('Promise');

  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  $$W({
    target: 'Promise',
    stat: true,
    forced: FORCED_PROMISE_CONSTRUCTOR
  }, {
    resolve: function resolve(x) {
      return promiseResolve(this, x);
    }
  });
  var $$V = _export;
  var getBuiltIn$6 = getBuiltIn$j;
  var apply$2 = functionApply;
  var bind$2 = functionBind;
  var aConstructor = aConstructor$2;
  var anObject$p = anObject$D;
  var isObject$8 = isObject$u;
  var create$5 = objectCreate;
  var fails$n = fails$Y;
  var nativeConstruct = getBuiltIn$6('Reflect', 'construct');
  var ObjectPrototype = Object.prototype;
  var push$7 = [].push;

  // `Reflect.construct` method
  // https://tc39.es/ecma262/#sec-reflect.construct
  // MS Edge supports only 2 arguments and argumentsList argument is optional
  // FF Nightly sets third argument as `new.target`, but does not create `this` from it
  var NEW_TARGET_BUG = fails$n(function () {
    function F() {/* empty */}
    return !(nativeConstruct(function () {/* empty */}, [], F) instanceof F);
  });
  var ARGS_BUG = !fails$n(function () {
    nativeConstruct(function () {/* empty */});
  });
  var FORCED$7 = NEW_TARGET_BUG || ARGS_BUG;
  $$V({
    target: 'Reflect',
    stat: true,
    forced: FORCED$7,
    sham: FORCED$7
  }, {
    construct: function construct(Target, args /* , newTarget */) {
      aConstructor(Target);
      anObject$p(args);
      var newTarget = arguments.length < 3 ? Target : aConstructor(arguments[2]);
      if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
      if (Target === newTarget) {
        // w/o altered newTarget, optimization for 0-4 arguments
        switch (args.length) {
          case 0:
            return new Target();
          case 1:
            return new Target(args[0]);
          case 2:
            return new Target(args[0], args[1]);
          case 3:
            return new Target(args[0], args[1], args[2]);
          case 4:
            return new Target(args[0], args[1], args[2], args[3]);
        }
        // w/o altered newTarget, lot of arguments case
        var $args = [null];
        apply$2(push$7, $args, args);
        return new (apply$2(bind$2, Target, $args))();
      }
      // with altered newTarget, not support built-in constructors
      var proto = newTarget.prototype;
      var instance = create$5(isObject$8(proto) ? proto : ObjectPrototype);
      var result = apply$2(Target, instance, args);
      return isObject$8(result) ? result : instance;
    }
  });
  var hasOwn$a = hasOwnProperty_1;
  var isDataDescriptor$2 = function isDataDescriptor$2(descriptor) {
    return descriptor !== undefined && (hasOwn$a(descriptor, 'value') || hasOwn$a(descriptor, 'writable'));
  };
  var $$U = _export;
  var call$j = functionCall;
  var isObject$7 = isObject$u;
  var anObject$o = anObject$D;
  var isDataDescriptor$1 = isDataDescriptor$2;
  var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
  var getPrototypeOf$2 = objectGetPrototypeOf$2;

  // `Reflect.get` method
  // https://tc39.es/ecma262/#sec-reflect.get
  function get(target, propertyKey /* , receiver */) {
    var receiver = arguments.length < 3 ? target : arguments[2];
    var descriptor, prototype;
    if (anObject$o(target) === receiver) return target[propertyKey];
    descriptor = getOwnPropertyDescriptorModule$1.f(target, propertyKey);
    if (descriptor) return isDataDescriptor$1(descriptor) ? descriptor.value : descriptor.get === undefined ? undefined : call$j(descriptor.get, receiver);
    if (isObject$7(prototype = getPrototypeOf$2(target))) return get(prototype, propertyKey, receiver);
  }
  $$U({
    target: 'Reflect',
    stat: true
  }, {
    get: get
  });
  var $$T = _export;
  var global$j = global$J;
  var setToStringTag$4 = setToStringTag$d;
  $$T({
    global: true
  }, {
    Reflect: {}
  });

  // Reflect[@@toStringTag] property
  // https://tc39.es/ecma262/#sec-reflect-@@tostringtag
  setToStringTag$4(global$j.Reflect, 'Reflect', true);
  var isObject$6 = isObject$u;
  var classof$5 = classofRaw$2;
  var wellKnownSymbol$9 = wellKnownSymbol$v;
  var MATCH$2 = wellKnownSymbol$9('match');

  // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp
  var isRegexp = function isRegexp(it) {
    var isRegExp;
    return isObject$6(it) && ((isRegExp = it[MATCH$2]) !== undefined ? !!isRegExp : classof$5(it) === 'RegExp');
  };
  var anObject$n = anObject$D;

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags$1 = function regexpFlags$1() {
    var that = anObject$n(this);
    var result = '';
    if (that.hasIndices) result += 'd';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.unicodeSets) result += 'v';
    if (that.sticky) result += 'y';
    return result;
  };
  var call$i = functionCall;
  var hasOwn$9 = hasOwnProperty_1;
  var isPrototypeOf$1 = objectIsPrototypeOf;
  var regExpFlags = regexpFlags$1;
  var RegExpPrototype$5 = RegExp.prototype;
  var regexpGetFlags = function regexpGetFlags(R) {
    var flags = R.flags;
    return flags === undefined && !('flags' in RegExpPrototype$5) && !hasOwn$9(R, 'flags') && isPrototypeOf$1(RegExpPrototype$5, R) ? call$i(regExpFlags, R) : flags;
  };
  var fails$m = fails$Y;
  var global$i = global$J;

  // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var $RegExp$2 = global$i.RegExp;
  var UNSUPPORTED_Y$3 = fails$m(function () {
    var re = $RegExp$2('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') !== null;
  });

  // UC Browser bug
  // https://github.com/zloirock/core-js/issues/1008
  var MISSED_STICKY$2 = UNSUPPORTED_Y$3 || fails$m(function () {
    return !$RegExp$2('a', 'y').sticky;
  });
  var BROKEN_CARET = UNSUPPORTED_Y$3 || fails$m(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = $RegExp$2('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') !== null;
  });
  var regexpStickyHelpers = {
    BROKEN_CARET: BROKEN_CARET,
    MISSED_STICKY: MISSED_STICKY$2,
    UNSUPPORTED_Y: UNSUPPORTED_Y$3
  };
  var fails$l = fails$Y;
  var global$h = global$J;

  // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var $RegExp$1 = global$h.RegExp;
  var regexpUnsupportedDotAll = fails$l(function () {
    var re = $RegExp$1('.', 's');
    return !(re.dotAll && re.test('\n') && re.flags === 's');
  });
  var fails$k = fails$Y;
  var global$g = global$J;

  // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
  var $RegExp = global$g.RegExp;
  var regexpUnsupportedNcg = fails$k(function () {
    var re = $RegExp('(?<a>b)', 'g');
    return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
  });
  var DESCRIPTORS$c = descriptors;
  var global$f = global$J;
  var uncurryThis$p = functionUncurryThis;
  var isForced = isForced_1;
  var inheritIfRequired$1 = inheritIfRequired$5;
  var createNonEnumerableProperty$4 = createNonEnumerableProperty$b;
  var create$4 = objectCreate;
  var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
  var isPrototypeOf = objectIsPrototypeOf;
  var isRegExp$1 = isRegexp;
  var toString$i = toString$s;
  var getRegExpFlags$1 = regexpGetFlags;
  var stickyHelpers$2 = regexpStickyHelpers;
  var proxyAccessor = proxyAccessor$2;
  var defineBuiltIn$7 = defineBuiltIn$l;
  var fails$j = fails$Y;
  var hasOwn$8 = hasOwnProperty_1;
  var enforceInternalState$1 = internalState.enforce;
  var setSpecies = setSpecies$3;
  var wellKnownSymbol$8 = wellKnownSymbol$v;
  var UNSUPPORTED_DOT_ALL$2 = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG$1 = regexpUnsupportedNcg;
  var MATCH$1 = wellKnownSymbol$8('match');
  var NativeRegExp = global$f.RegExp;
  var RegExpPrototype$4 = NativeRegExp.prototype;
  var SyntaxError$2 = global$f.SyntaxError;
  var exec$6 = uncurryThis$p(RegExpPrototype$4.exec);
  var charAt$8 = uncurryThis$p(''.charAt);
  var replace$7 = uncurryThis$p(''.replace);
  var stringIndexOf$2 = uncurryThis$p(''.indexOf);
  var stringSlice$a = uncurryThis$p(''.slice);
  // TODO: Use only proper RegExpIdentifierName
  var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
  var re1 = /a/g;
  var re2 = /a/g;

  // "new" should create a new object, old webkit bug
  var CORRECT_NEW = new NativeRegExp(re1) !== re1;
  var MISSED_STICKY$1 = stickyHelpers$2.MISSED_STICKY;
  var UNSUPPORTED_Y$2 = stickyHelpers$2.UNSUPPORTED_Y;
  var BASE_FORCED = DESCRIPTORS$c && (!CORRECT_NEW || MISSED_STICKY$1 || UNSUPPORTED_DOT_ALL$2 || UNSUPPORTED_NCG$1 || fails$j(function () {
    re2[MATCH$1] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) !== re1 || NativeRegExp(re2) === re2 || String(NativeRegExp(re1, 'i')) !== '/a/i';
  }));
  var handleDotAll = function handleDotAll(string) {
    var length = string.length;
    var index = 0;
    var result = '';
    var brackets = false;
    var chr;
    for (; index <= length; index++) {
      chr = charAt$8(string, index);
      if (chr === '\\') {
        result += chr + charAt$8(string, ++index);
        continue;
      }
      if (!brackets && chr === '.') {
        result += '[\\s\\S]';
      } else {
        if (chr === '[') {
          brackets = true;
        } else if (chr === ']') {
          brackets = false;
        }
        result += chr;
      }
    }
    return result;
  };
  var handleNCG = function handleNCG(string) {
    var length = string.length;
    var index = 0;
    var result = '';
    var named = [];
    var names = create$4(null);
    var brackets = false;
    var ncg = false;
    var groupid = 0;
    var groupname = '';
    var chr;
    for (; index <= length; index++) {
      chr = charAt$8(string, index);
      if (chr === '\\') {
        chr += charAt$8(string, ++index);
      } else if (chr === ']') {
        brackets = false;
      } else if (!brackets) switch (true) {
        case chr === '[':
          brackets = true;
          break;
        case chr === '(':
          if (exec$6(IS_NCG, stringSlice$a(string, index + 1))) {
            index += 2;
            ncg = true;
          }
          result += chr;
          groupid++;
          continue;
        case chr === '>' && ncg:
          if (groupname === '' || hasOwn$8(names, groupname)) {
            throw new SyntaxError$2('Invalid capture group name');
          }
          names[groupname] = true;
          named[named.length] = [groupname, groupid];
          ncg = false;
          groupname = '';
          continue;
      }
      if (ncg) groupname += chr;else result += chr;
    }
    return [result, named];
  };

  // `RegExp` constructor
  // https://tc39.es/ecma262/#sec-regexp-constructor
  if (isForced('RegExp', BASE_FORCED)) {
    var RegExpWrapper = function RegExp(pattern, flags) {
      var thisIsRegExp = isPrototypeOf(RegExpPrototype$4, this);
      var patternIsRegExp = isRegExp$1(pattern);
      var flagsAreUndefined = flags === undefined;
      var groups = [];
      var rawPattern = pattern;
      var rawFlags, dotAll, sticky, handled, result, state;
      if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
        return pattern;
      }
      if (patternIsRegExp || isPrototypeOf(RegExpPrototype$4, pattern)) {
        pattern = pattern.source;
        if (flagsAreUndefined) flags = getRegExpFlags$1(rawPattern);
      }
      pattern = pattern === undefined ? '' : toString$i(pattern);
      flags = flags === undefined ? '' : toString$i(flags);
      rawPattern = pattern;
      if (UNSUPPORTED_DOT_ALL$2 && 'dotAll' in re1) {
        dotAll = !!flags && stringIndexOf$2(flags, 's') > -1;
        if (dotAll) flags = replace$7(flags, /s/g, '');
      }
      rawFlags = flags;
      if (MISSED_STICKY$1 && 'sticky' in re1) {
        sticky = !!flags && stringIndexOf$2(flags, 'y') > -1;
        if (sticky && UNSUPPORTED_Y$2) flags = replace$7(flags, /y/g, '');
      }
      if (UNSUPPORTED_NCG$1) {
        handled = handleNCG(pattern);
        pattern = handled[0];
        groups = handled[1];
      }
      result = inheritIfRequired$1(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$4, RegExpWrapper);
      if (dotAll || sticky || groups.length) {
        state = enforceInternalState$1(result);
        if (dotAll) {
          state.dotAll = true;
          state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
        }
        if (sticky) state.sticky = true;
        if (groups.length) state.groups = groups;
      }
      if (pattern !== rawPattern) try {
        // fails in old engines, but we have no alternatives for unsupported regex syntax
        createNonEnumerableProperty$4(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
      } catch (error) {/* empty */}
      return result;
    };
    for (var keys$1 = getOwnPropertyNames$1(NativeRegExp), index = 0; keys$1.length > index;) {
      proxyAccessor(RegExpWrapper, NativeRegExp, keys$1[index++]);
    }
    RegExpPrototype$4.constructor = RegExpWrapper;
    RegExpWrapper.prototype = RegExpPrototype$4;
    defineBuiltIn$7(global$f, 'RegExp', RegExpWrapper, {
      constructor: true
    });
  }

  // https://tc39.es/ecma262/#sec-get-regexp-@@species
  setSpecies('RegExp');
  var DESCRIPTORS$b = descriptors;
  var UNSUPPORTED_DOT_ALL$1 = regexpUnsupportedDotAll;
  var classof$4 = classofRaw$2;
  var defineBuiltInAccessor$7 = defineBuiltInAccessor$e;
  var getInternalState$4 = internalState.get;
  var RegExpPrototype$3 = RegExp.prototype;
  var $TypeError$7 = TypeError;

  // `RegExp.prototype.dotAll` getter
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.dotall
  if (DESCRIPTORS$b && UNSUPPORTED_DOT_ALL$1) {
    defineBuiltInAccessor$7(RegExpPrototype$3, 'dotAll', {
      configurable: true,
      get: function dotAll() {
        if (this === RegExpPrototype$3) return;
        // We can't use InternalStateModule.getterFor because
        // we don't add metadata for regexps created by a literal.
        if (classof$4(this) === 'RegExp') {
          return !!getInternalState$4(this).dotAll;
        }
        throw new $TypeError$7('Incompatible receiver, RegExp required');
      }
    });
  }

  /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
  /* eslint-disable regexp/no-useless-quantifier -- testing */
  var call$h = functionCall;
  var uncurryThis$o = functionUncurryThis;
  var toString$h = toString$s;
  var regexpFlags = regexpFlags$1;
  var stickyHelpers$1 = regexpStickyHelpers;
  var shared = shared$7;
  var create$3 = objectCreate;
  var getInternalState$3 = internalState.get;
  var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG = regexpUnsupportedNcg;
  var nativeReplace = shared('native-string-replace', String.prototype.replace);
  var nativeExec = RegExp.prototype.exec;
  var patchedExec = nativeExec;
  var charAt$7 = uncurryThis$o(''.charAt);
  var indexOf = uncurryThis$o(''.indexOf);
  var replace$6 = uncurryThis$o(''.replace);
  var stringSlice$9 = uncurryThis$o(''.slice);
  var UPDATES_LAST_INDEX_WRONG = function () {
    var re1 = /a/;
    var re2 = /b*/g;
    call$h(nativeExec, re1, 'a');
    call$h(nativeExec, re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  }();
  var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET;

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;
  if (PATCH) {
    patchedExec = function exec(string) {
      var re = this;
      var state = getInternalState$3(re);
      var str = toString$h(string);
      var raw = state.raw;
      var result, reCopy, lastIndex, match, i, object, group;
      if (raw) {
        raw.lastIndex = re.lastIndex;
        result = call$h(patchedExec, raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
      }
      var groups = state.groups;
      var sticky = UNSUPPORTED_Y$1 && re.sticky;
      var flags = call$h(regexpFlags, re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;
      if (sticky) {
        flags = replace$6(flags, 'y', '');
        if (indexOf(flags, 'g') === -1) {
          flags += 'g';
        }
        strCopy = stringSlice$9(str, re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$7(str, re.lastIndex - 1) !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        }
        // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.
        reCopy = new RegExp('^(?:' + source + ')', flags);
      }
      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
      match = call$h(nativeExec, sticky ? reCopy : re, strCopy);
      if (sticky) {
        if (match) {
          match.input = stringSlice$9(match.input, charsAdded);
          match[0] = stringSlice$9(match[0], charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
        call$h(nativeReplace, match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }
      if (match && groups) {
        match.groups = object = create$3(null);
        for (i = 0; i < groups.length; i++) {
          group = groups[i];
          object[group[0]] = match[group[1]];
        }
      }
      return match;
    };
  }
  var regexpExec$2 = patchedExec;
  var $$S = _export;
  var exec$5 = regexpExec$2;

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  $$S({
    target: 'RegExp',
    proto: true,
    forced: /./.exec !== exec$5
  }, {
    exec: exec$5
  });
  var DESCRIPTORS$a = descriptors;
  var MISSED_STICKY = regexpStickyHelpers.MISSED_STICKY;
  var classof$3 = classofRaw$2;
  var defineBuiltInAccessor$6 = defineBuiltInAccessor$e;
  var getInternalState$2 = internalState.get;
  var RegExpPrototype$2 = RegExp.prototype;
  var $TypeError$6 = TypeError;

  // `RegExp.prototype.sticky` getter
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky
  if (DESCRIPTORS$a && MISSED_STICKY) {
    defineBuiltInAccessor$6(RegExpPrototype$2, 'sticky', {
      configurable: true,
      get: function sticky() {
        if (this === RegExpPrototype$2) return;
        // We can't use InternalStateModule.getterFor because
        // we don't add metadata for regexps created by a literal.
        if (classof$3(this) === 'RegExp') {
          return !!getInternalState$2(this).sticky;
        }
        throw new $TypeError$6('Incompatible receiver, RegExp required');
      }
    });
  }

  // TODO: Remove from `core-js@4` since it's moved to entry points

  var $$R = _export;
  var call$g = functionCall;
  var isCallable$6 = isCallable$v;
  var anObject$m = anObject$D;
  var toString$g = toString$s;
  var DELEGATES_TO_EXEC = function () {
    var execCalled = false;
    var re = /[ac]/;
    re.exec = function () {
      execCalled = true;
      return /./.exec.apply(this, arguments);
    };
    return re.test('abc') === true && execCalled;
  }();
  var nativeTest = /./.test;

  // `RegExp.prototype.test` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.test
  $$R({
    target: 'RegExp',
    proto: true,
    forced: !DELEGATES_TO_EXEC
  }, {
    test: function test(S) {
      var R = anObject$m(this);
      var string = toString$g(S);
      var exec = R.exec;
      if (!isCallable$6(exec)) return call$g(nativeTest, R, string);
      var result = call$g(exec, R, string);
      if (result === null) return false;
      anObject$m(result);
      return true;
    }
  });
  var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
  var defineBuiltIn$6 = defineBuiltIn$l;
  var anObject$l = anObject$D;
  var $toString$2 = toString$s;
  var fails$i = fails$Y;
  var getRegExpFlags = regexpGetFlags;
  var TO_STRING = 'toString';
  var RegExpPrototype$1 = RegExp.prototype;
  var nativeToString = RegExpPrototype$1[TO_STRING];
  var NOT_GENERIC = fails$i(function () {
    return nativeToString.call({
      source: 'a',
      flags: 'b'
    }) !== '/a/b';
  });
  // FF44- RegExp#toString has a wrong name
  var INCORRECT_NAME = PROPER_FUNCTION_NAME$1 && nativeToString.name !== TO_STRING;

  // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
  if (NOT_GENERIC || INCORRECT_NAME) {
    defineBuiltIn$6(RegExpPrototype$1, TO_STRING, function toString() {
      var R = anObject$l(this);
      var pattern = $toString$2(R.source);
      var flags = $toString$2(getRegExpFlags(R));
      return '/' + pattern + '/' + flags;
    }, {
      unsafe: true
    });
  }
  var collection$2 = collection$4;
  var collectionStrong = collectionStrong$2;

  // `Set` constructor
  // https://tc39.es/ecma262/#sec-set-objects
  collection$2('Set', function (init) {
    return function Set() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  }, collectionStrong);
  var isRegExp = isRegexp;
  var $TypeError$5 = TypeError;
  var notARegexp = function notARegexp(it) {
    if (isRegExp(it)) {
      throw new $TypeError$5("The method doesn't accept regular expressions");
    }
    return it;
  };
  var wellKnownSymbol$7 = wellKnownSymbol$v;
  var MATCH = wellKnownSymbol$7('match');
  var correctIsRegexpLogic = function correctIsRegexpLogic(METHOD_NAME) {
    var regexp = /./;
    try {
      '/./'[METHOD_NAME](regexp);
    } catch (error1) {
      try {
        regexp[MATCH] = false;
        return '/./'[METHOD_NAME](regexp);
      } catch (error2) {/* empty */}
    }
    return false;
  };
  var $$Q = _export;
  var uncurryThis$n = functionUncurryThis;
  var notARegExp$2 = notARegexp;
  var requireObjectCoercible$a = requireObjectCoercible$g;
  var toString$f = toString$s;
  var correctIsRegExpLogic$2 = correctIsRegexpLogic;
  var stringIndexOf$1 = uncurryThis$n(''.indexOf);

  // `String.prototype.includes` method
  // https://tc39.es/ecma262/#sec-string.prototype.includes
  $$Q({
    target: 'String',
    proto: true,
    forced: !correctIsRegExpLogic$2('includes')
  }, {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~stringIndexOf$1(toString$f(requireObjectCoercible$a(this)), toString$f(notARegExp$2(searchString)), arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  var uncurryThis$m = functionUncurryThis;
  var toIntegerOrInfinity$6 = toIntegerOrInfinity$9;
  var toString$e = toString$s;
  var requireObjectCoercible$9 = requireObjectCoercible$g;
  var charAt$6 = uncurryThis$m(''.charAt);
  var charCodeAt$1 = uncurryThis$m(''.charCodeAt);
  var stringSlice$8 = uncurryThis$m(''.slice);
  var createMethod = function createMethod(CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString$e(requireObjectCoercible$9($this));
      var position = toIntegerOrInfinity$6(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = charCodeAt$1(S, position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt$6(S, position) : first : CONVERT_TO_STRING ? stringSlice$8(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };
  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod(true)
  };
  var charAt$5 = stringMultibyte.charAt;
  var toString$d = toString$s;
  var InternalStateModule$5 = internalState;
  var defineIterator = iteratorDefine;
  var createIterResultObject$2 = createIterResultObject$5;
  var STRING_ITERATOR = 'String Iterator';
  var setInternalState$5 = InternalStateModule$5.set;
  var getInternalState$1 = InternalStateModule$5.getterFor(STRING_ITERATOR);

  // `String.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-string.prototype-@@iterator
  defineIterator(String, 'String', function (iterated) {
    setInternalState$5(this, {
      type: STRING_ITERATOR,
      string: toString$d(iterated),
      index: 0
    });
    // `%StringIteratorPrototype%.next` method
    // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState$1(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return createIterResultObject$2(undefined, true);
    point = charAt$5(string, index);
    state.index += point.length;
    return createIterResultObject$2(point, false);
  });

  // TODO: Remove from `core-js@4` since it's moved to entry points

  var call$f = functionCall;
  var defineBuiltIn$5 = defineBuiltIn$l;
  var regexpExec$1 = regexpExec$2;
  var fails$h = fails$Y;
  var wellKnownSymbol$6 = wellKnownSymbol$v;
  var createNonEnumerableProperty$3 = createNonEnumerableProperty$b;
  var SPECIES = wellKnownSymbol$6('species');
  var RegExpPrototype = RegExp.prototype;
  var fixRegexpWellKnownSymbolLogic = function fixRegexpWellKnownSymbolLogic(KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol$6(KEY);
    var DELEGATES_TO_SYMBOL = !fails$h(function () {
      // String methods call symbol-named RegExp methods
      var O = {};
      O[SYMBOL] = function () {
        return 7;
      };
      return ''[KEY](O) !== 7;
    });
    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$h(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;
      if (KEY === 'split') {
        // We can't use real regex here since it causes deoptimization
        // and serious performance degradation in V8
        // https://github.com/zloirock/core-js/issues/306
        re = {};
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[SPECIES] = function () {
          return re;
        };
        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }
      re.exec = function () {
        execCalled = true;
        return null;
      };
      re[SYMBOL]('');
      return !execCalled;
    });
    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
      var nativeRegExpMethod = /./[SYMBOL];
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        var $exec = regexp.exec;
        if ($exec === regexpExec$1 || $exec === RegExpPrototype.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return {
              done: true,
              value: call$f(nativeRegExpMethod, regexp, str, arg2)
            };
          }
          return {
            done: true,
            value: call$f(nativeMethod, str, regexp, arg2)
          };
        }
        return {
          done: false
        };
      });
      defineBuiltIn$5(String.prototype, KEY, methods[0]);
      defineBuiltIn$5(RegExpPrototype, SYMBOL, methods[1]);
    }
    if (SHAM) createNonEnumerableProperty$3(RegExpPrototype[SYMBOL], 'sham', true);
  };
  var charAt$4 = stringMultibyte.charAt;

  // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex
  var advanceStringIndex$3 = function advanceStringIndex$3(S, index, unicode) {
    return index + (unicode ? charAt$4(S, index).length : 1);
  };
  var call$e = functionCall;
  var anObject$k = anObject$D;
  var isCallable$5 = isCallable$v;
  var classof$2 = classofRaw$2;
  var regexpExec = regexpExec$2;
  var $TypeError$4 = TypeError;

  // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec
  var regexpExecAbstract = function regexpExecAbstract(R, S) {
    var exec = R.exec;
    if (isCallable$5(exec)) {
      var result = call$e(exec, R, S);
      if (result !== null) anObject$k(result);
      return result;
    }
    if (classof$2(R) === 'RegExp') return call$e(regexpExec, R, S);
    throw new $TypeError$4('RegExp#exec called on incompatible receiver');
  };
  var call$d = functionCall;
  var fixRegExpWellKnownSymbolLogic$3 = fixRegexpWellKnownSymbolLogic;
  var anObject$j = anObject$D;
  var isNullOrUndefined$4 = isNullOrUndefined$b;
  var toLength$4 = toLength$6;
  var toString$c = toString$s;
  var requireObjectCoercible$8 = requireObjectCoercible$g;
  var getMethod$4 = getMethod$8;
  var advanceStringIndex$2 = advanceStringIndex$3;
  var regExpExec$3 = regexpExecAbstract;

  // @@match logic
  fixRegExpWellKnownSymbolLogic$3('match', function (MATCH, nativeMatch, maybeCallNative) {
    return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible$8(this);
      var matcher = isNullOrUndefined$4(regexp) ? undefined : getMethod$4(regexp, MATCH);
      return matcher ? call$d(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$c(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject$j(this);
      var S = toString$c(string);
      var res = maybeCallNative(nativeMatch, rx, S);
      if (res.done) return res.value;
      if (!rx.global) return regExpExec$3(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec$3(rx, S)) !== null) {
        var matchStr = toString$c(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex$2(S, toLength$4(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }];
  });
  var uncurryThis$l = functionUncurryThis;
  var toObject$4 = toObject$i;
  var floor$3 = Math.floor;
  var charAt$3 = uncurryThis$l(''.charAt);
  var replace$5 = uncurryThis$l(''.replace);
  var stringSlice$7 = uncurryThis$l(''.slice);
  // eslint-disable-next-line redos/no-vulnerable -- safe
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

  // `GetSubstitution` abstract operation
  // https://tc39.es/ecma262/#sec-getsubstitution
  var getSubstitution$1 = function getSubstitution$1(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject$4(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return replace$5(replacement, symbols, function (match, ch) {
      var capture;
      switch (charAt$3(ch, 0)) {
        case '$':
          return '$';
        case '&':
          return matched;
        case '`':
          return stringSlice$7(str, 0, position);
        case "'":
          return stringSlice$7(str, tailPos);
        case '<':
          capture = namedCaptures[stringSlice$7(ch, 1, -1)];
          break;
        default:
          // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor$3(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? charAt$3(ch, 1) : captures[f - 1] + charAt$3(ch, 1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  };
  var apply$1 = functionApply;
  var call$c = functionCall;
  var uncurryThis$k = functionUncurryThis;
  var fixRegExpWellKnownSymbolLogic$2 = fixRegexpWellKnownSymbolLogic;
  var fails$g = fails$Y;
  var anObject$i = anObject$D;
  var isCallable$4 = isCallable$v;
  var isNullOrUndefined$3 = isNullOrUndefined$b;
  var toIntegerOrInfinity$5 = toIntegerOrInfinity$9;
  var toLength$3 = toLength$6;
  var toString$b = toString$s;
  var requireObjectCoercible$7 = requireObjectCoercible$g;
  var advanceStringIndex$1 = advanceStringIndex$3;
  var getMethod$3 = getMethod$8;
  var getSubstitution = getSubstitution$1;
  var regExpExec$2 = regexpExecAbstract;
  var wellKnownSymbol$5 = wellKnownSymbol$v;
  var REPLACE = wellKnownSymbol$5('replace');
  var max$3 = Math.max;
  var min$5 = Math.min;
  var concat = uncurryThis$k([].concat);
  var push$6 = uncurryThis$k([].push);
  var stringIndexOf = uncurryThis$k(''.indexOf);
  var stringSlice$6 = uncurryThis$k(''.slice);
  var maybeToString = function maybeToString(it) {
    return it === undefined ? it : String(it);
  };

  // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
  var REPLACE_KEEPS_$0 = function () {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0';
  }();

  // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
    if (/./[REPLACE]) {
      return /./[REPLACE]('a', '$0') === '';
    }
    return false;
  }();
  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$g(function () {
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = {
        a: '7'
      };
      return result;
    };
    // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
    return ''.replace(re, '$<a>') !== '7';
  });

  // @@replace logic
  fixRegExpWellKnownSymbolLogic$2('replace', function (_, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
    return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible$7(this);
      var replacer = isNullOrUndefined$3(searchValue) ? undefined : getMethod$3(searchValue, REPLACE);
      return replacer ? call$c(replacer, searchValue, O, replaceValue) : call$c(nativeReplace, toString$b(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$i(this);
      var S = toString$b(string);
      if (typeof replaceValue == 'string' && stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 && stringIndexOf(replaceValue, '$<') === -1) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }
      var functionalReplace = isCallable$4(replaceValue);
      if (!functionalReplace) replaceValue = toString$b(replaceValue);
      var global = rx.global;
      var fullUnicode;
      if (global) {
        fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      var result;
      while (true) {
        result = regExpExec$2(rx, S);
        if (result === null) break;
        push$6(results, result);
        if (!global) break;
        var matchStr = toString$b(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$3(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = toString$b(result[0]);
        var position = max$3(min$5(toIntegerOrInfinity$5(result.index), S.length), 0);
        var captures = [];
        var replacement;
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push$6(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push$6(replacerArgs, namedCaptures);
          replacement = toString$b(apply$1(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice$6(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice$6(S, nextSourcePosition);
    }];
  }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);
  var PROPER_FUNCTION_NAME = functionName.PROPER;
  var fails$f = fails$Y;
  var whitespaces$1 = whitespaces$5;
  var non = "\u200B\x85\u180E";

  // check that a method works with the correct list
  // of whitespaces and has a correct name
  var stringTrimForced = function stringTrimForced(METHOD_NAME) {
    return fails$f(function () {
      return !!whitespaces$1[METHOD_NAME]() || non[METHOD_NAME]() !== non || PROPER_FUNCTION_NAME && whitespaces$1[METHOD_NAME].name !== METHOD_NAME;
    });
  };
  var $$P = _export;
  var $trim = stringTrim.trim;
  var forcedStringTrimMethod = stringTrimForced;

  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  $$P({
    target: 'String',
    proto: true,
    forced: forcedStringTrimMethod('trim')
  }, {
    trim: function trim() {
      return $trim(this);
    }
  });
  var $$O = _export;
  var global$e = global$J;
  var anInstance$5 = anInstance$9;
  var anObject$h = anObject$D;
  var isCallable$3 = isCallable$v;
  var getPrototypeOf$1 = objectGetPrototypeOf$2;
  var defineBuiltInAccessor$5 = defineBuiltInAccessor$e;
  var createProperty$3 = createProperty$8;
  var fails$e = fails$Y;
  var hasOwn$7 = hasOwnProperty_1;
  var wellKnownSymbol$4 = wellKnownSymbol$v;
  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
  var DESCRIPTORS$9 = descriptors;
  var CONSTRUCTOR = 'constructor';
  var ITERATOR$3 = 'Iterator';
  var TO_STRING_TAG$1 = wellKnownSymbol$4('toStringTag');
  var $TypeError$3 = TypeError;
  var NativeIterator = global$e[ITERATOR$3];

  // FF56- have non-standard global helper `Iterator`
  var FORCED$6 = !isCallable$3(NativeIterator) || NativeIterator.prototype !== IteratorPrototype$1
  // FF44- non-standard `Iterator` passes previous tests
  || !fails$e(function () {
    NativeIterator({});
  });
  var IteratorConstructor = function Iterator() {
    anInstance$5(this, IteratorPrototype$1);
    if (getPrototypeOf$1(this) === IteratorPrototype$1) throw new $TypeError$3('Abstract class Iterator not directly constructable');
  };
  var defineIteratorPrototypeAccessor = function defineIteratorPrototypeAccessor(key, value) {
    if (DESCRIPTORS$9) {
      defineBuiltInAccessor$5(IteratorPrototype$1, key, {
        configurable: true,
        get: function get() {
          return value;
        },
        set: function set(replacement) {
          anObject$h(this);
          if (this === IteratorPrototype$1) throw new $TypeError$3("You can't redefine this property");
          if (hasOwn$7(this, key)) this[key] = replacement;else createProperty$3(this, key, replacement);
        }
      });
    } else IteratorPrototype$1[key] = value;
  };
  if (!hasOwn$7(IteratorPrototype$1, TO_STRING_TAG$1)) defineIteratorPrototypeAccessor(TO_STRING_TAG$1, ITERATOR$3);
  if (FORCED$6 || !hasOwn$7(IteratorPrototype$1, CONSTRUCTOR) || IteratorPrototype$1[CONSTRUCTOR] === Object) {
    defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
  }
  IteratorConstructor.prototype = IteratorPrototype$1;

  // `Iterator` constructor
  // https://github.com/tc39/proposal-iterator-helpers
  $$O({
    global: true,
    constructor: true,
    forced: FORCED$6
  }, {
    Iterator: IteratorConstructor
  });

  // `GetIteratorDirect(obj)` abstract operation
  // https://tc39.es/proposal-iterator-helpers/#sec-getiteratordirect
  var getIteratorDirect$8 = function getIteratorDirect$8(obj) {
    return {
      iterator: obj,
      next: obj.next,
      done: false
    };
  };
  var $$N = _export;
  var iterate$8 = iterate$d;
  var aCallable$7 = aCallable$j;
  var anObject$g = anObject$D;
  var getIteratorDirect$7 = getIteratorDirect$8;

  // `Iterator.prototype.every` method
  // https://github.com/tc39/proposal-iterator-helpers
  $$N({
    target: 'Iterator',
    proto: true,
    real: true
  }, {
    every: function every(predicate) {
      anObject$g(this);
      aCallable$7(predicate);
      var record = getIteratorDirect$7(this);
      var counter = 0;
      return !iterate$8(record, function (value, stop) {
        if (!predicate(value, counter++)) return stop();
      }, {
        IS_RECORD: true,
        INTERRUPTED: true
      }).stopped;
    }
  });
  var call$b = functionCall;
  var create$2 = objectCreate;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$b;
  var defineBuiltIns$3 = defineBuiltIns$5;
  var wellKnownSymbol$3 = wellKnownSymbol$v;
  var InternalStateModule$4 = internalState;
  var getMethod$2 = getMethod$8;
  var IteratorPrototype = iteratorsCore.IteratorPrototype;
  var createIterResultObject$1 = createIterResultObject$5;
  var iteratorClose$2 = iteratorClose$5;
  var TO_STRING_TAG = wellKnownSymbol$3('toStringTag');
  var ITERATOR_HELPER = 'IteratorHelper';
  var WRAP_FOR_VALID_ITERATOR = 'WrapForValidIterator';
  var setInternalState$4 = InternalStateModule$4.set;
  var createIteratorProxyPrototype = function createIteratorProxyPrototype(IS_ITERATOR) {
    var getInternalState = InternalStateModule$4.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);
    return defineBuiltIns$3(create$2(IteratorPrototype), {
      next: function next() {
        var state = getInternalState(this);
        // for simplification:
        //   for `%WrapForValidIteratorPrototype%.next` our `nextHandler` returns `IterResultObject`
        //   for `%IteratorHelperPrototype%.next` - just a value
        if (IS_ITERATOR) return state.nextHandler();
        try {
          var result = state.done ? undefined : state.nextHandler();
          return createIterResultObject$1(result, state.done);
        } catch (error) {
          state.done = true;
          throw error;
        }
      },
      'return': function _return() {
        var state = getInternalState(this);
        var iterator = state.iterator;
        state.done = true;
        if (IS_ITERATOR) {
          var returnMethod = getMethod$2(iterator, 'return');
          return returnMethod ? call$b(returnMethod, iterator) : createIterResultObject$1(undefined, true);
        }
        if (state.inner) try {
          iteratorClose$2(state.inner.iterator, 'normal');
        } catch (error) {
          return iteratorClose$2(iterator, 'throw', error);
        }
        iteratorClose$2(iterator, 'normal');
        return createIterResultObject$1(undefined, true);
      }
    });
  };
  var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
  var IteratorHelperPrototype = createIteratorProxyPrototype(false);
  createNonEnumerableProperty$2(IteratorHelperPrototype, TO_STRING_TAG, 'Iterator Helper');
  var iteratorCreateProxy = function iteratorCreateProxy(nextHandler, IS_ITERATOR) {
    var IteratorProxy = function Iterator(record, state) {
      if (state) {
        state.iterator = record.iterator;
        state.next = record.next;
      } else state = record;
      state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
      state.nextHandler = nextHandler;
      state.counter = 0;
      state.done = false;
      setInternalState$4(this, state);
    };
    IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;
    return IteratorProxy;
  };
  var $$M = _export;
  var call$a = functionCall;
  var aCallable$6 = aCallable$j;
  var anObject$f = anObject$D;
  var getIteratorDirect$6 = getIteratorDirect$8;
  var createIteratorProxy$1 = iteratorCreateProxy;
  var callWithSafeIterationClosing$1 = callWithSafeIterationClosing$3;
  var IS_PURE$2 = isPure;
  var IteratorProxy$1 = createIteratorProxy$1(function () {
    var iterator = this.iterator;
    var predicate = this.predicate;
    var next = this.next;
    var result, done, value;
    while (true) {
      result = anObject$f(call$a(next, iterator));
      done = this.done = !!result.done;
      if (done) return;
      value = result.value;
      if (callWithSafeIterationClosing$1(iterator, predicate, [value, this.counter++], true)) return value;
    }
  });

  // `Iterator.prototype.filter` method
  // https://github.com/tc39/proposal-iterator-helpers
  $$M({
    target: 'Iterator',
    proto: true,
    real: true,
    forced: IS_PURE$2
  }, {
    filter: function filter(predicate) {
      anObject$f(this);
      aCallable$6(predicate);
      return new IteratorProxy$1(getIteratorDirect$6(this), {
        predicate: predicate
      });
    }
  });
  var $$L = _export;
  var iterate$7 = iterate$d;
  var aCallable$5 = aCallable$j;
  var anObject$e = anObject$D;
  var getIteratorDirect$5 = getIteratorDirect$8;

  // `Iterator.prototype.find` method
  // https://github.com/tc39/proposal-iterator-helpers
  $$L({
    target: 'Iterator',
    proto: true,
    real: true
  }, {
    find: function find(predicate) {
      anObject$e(this);
      aCallable$5(predicate);
      var record = getIteratorDirect$5(this);
      var counter = 0;
      return iterate$7(record, function (value, stop) {
        if (predicate(value, counter++)) return stop(value);
      }, {
        IS_RECORD: true,
        INTERRUPTED: true
      }).result;
    }
  });
  var $$K = _export;
  var iterate$6 = iterate$d;
  var aCallable$4 = aCallable$j;
  var anObject$d = anObject$D;
  var getIteratorDirect$4 = getIteratorDirect$8;

  // `Iterator.prototype.forEach` method
  // https://github.com/tc39/proposal-iterator-helpers
  $$K({
    target: 'Iterator',
    proto: true,
    real: true
  }, {
    forEach: function forEach(fn) {
      anObject$d(this);
      aCallable$4(fn);
      var record = getIteratorDirect$4(this);
      var counter = 0;
      iterate$6(record, function (value) {
        fn(value, counter++);
      }, {
        IS_RECORD: true
      });
    }
  });
  var call$9 = functionCall;
  var aCallable$3 = aCallable$j;
  var anObject$c = anObject$D;
  var getIteratorDirect$3 = getIteratorDirect$8;
  var createIteratorProxy = iteratorCreateProxy;
  var callWithSafeIterationClosing = callWithSafeIterationClosing$3;
  var IteratorProxy = createIteratorProxy(function () {
    var iterator = this.iterator;
    var result = anObject$c(call$9(this.next, iterator));
    var done = this.done = !!result.done;
    if (!done) return callWithSafeIterationClosing(iterator, this.mapper, [result.value, this.counter++], true);
  });

  // `Iterator.prototype.map` method
  // https://github.com/tc39/proposal-iterator-helpers
  var iteratorMap = function map(mapper) {
    anObject$c(this);
    aCallable$3(mapper);
    return new IteratorProxy(getIteratorDirect$3(this), {
      mapper: mapper
    });
  };
  var $$J = _export;
  var map = iteratorMap;
  var IS_PURE$1 = isPure;

  // `Iterator.prototype.map` method
  // https://github.com/tc39/proposal-iterator-helpers
  $$J({
    target: 'Iterator',
    proto: true,
    real: true,
    forced: IS_PURE$1
  }, {
    map: map
  });
  var $$I = _export;
  var iterate$5 = iterate$d;
  var aCallable$2 = aCallable$j;
  var anObject$b = anObject$D;
  var getIteratorDirect$2 = getIteratorDirect$8;
  var $TypeError$2 = TypeError;

  // `Iterator.prototype.reduce` method
  // https://github.com/tc39/proposal-iterator-helpers
  $$I({
    target: 'Iterator',
    proto: true,
    real: true
  }, {
    reduce: function reduce(reducer /* , initialValue */) {
      anObject$b(this);
      aCallable$2(reducer);
      var record = getIteratorDirect$2(this);
      var noInitial = arguments.length < 2;
      var accumulator = noInitial ? undefined : arguments[1];
      var counter = 0;
      iterate$5(record, function (value) {
        if (noInitial) {
          noInitial = false;
          accumulator = value;
        } else {
          accumulator = reducer(accumulator, value, counter);
        }
        counter++;
      }, {
        IS_RECORD: true
      });
      if (noInitial) throw new $TypeError$2('Reduce of empty iterator with no initial value');
      return accumulator;
    }
  });
  var $$H = _export;
  var iterate$4 = iterate$d;
  var aCallable$1 = aCallable$j;
  var anObject$a = anObject$D;
  var getIteratorDirect$1 = getIteratorDirect$8;

  // `Iterator.prototype.some` method
  // https://github.com/tc39/proposal-iterator-helpers
  $$H({
    target: 'Iterator',
    proto: true,
    real: true
  }, {
    some: function some(predicate) {
      anObject$a(this);
      aCallable$1(predicate);
      var record = getIteratorDirect$1(this);
      var counter = 0;
      return iterate$4(record, function (value, stop) {
        if (predicate(value, counter++)) return stop();
      }, {
        IS_RECORD: true,
        INTERRUPTED: true
      }).stopped;
    }
  });
  var uncurryThis$j = functionUncurryThis;

  // eslint-disable-next-line es/no-set -- safe
  var SetPrototype$1 = Set.prototype;
  var setHelpers = {
    // eslint-disable-next-line es/no-set -- safe
    Set: Set,
    add: uncurryThis$j(SetPrototype$1.add),
    has: uncurryThis$j(SetPrototype$1.has),
    remove: uncurryThis$j(SetPrototype$1['delete']),
    proto: SetPrototype$1
  };
  var has$5 = setHelpers.has;

  // Perform ? RequireInternalSlot(M, [[SetData]])
  var aSet$7 = function aSet$7(it) {
    has$5(it);
    return it;
  };
  var call$8 = functionCall;
  var iterateSimple$7 = function iterateSimple$7(record, fn, ITERATOR_INSTEAD_OF_RECORD) {
    var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
    var next = record.next;
    var step, result;
    while (!(step = call$8(next, iterator)).done) {
      result = fn(step.value);
      if (result !== undefined) return result;
    }
  };
  var uncurryThis$i = functionUncurryThis;
  var iterateSimple$6 = iterateSimple$7;
  var SetHelpers$5 = setHelpers;
  var Set$3 = SetHelpers$5.Set;
  var SetPrototype = SetHelpers$5.proto;
  var forEach$3 = uncurryThis$i(SetPrototype.forEach);
  var keys = uncurryThis$i(SetPrototype.keys);
  var next = keys(new Set$3()).next;
  var setIterate = function setIterate(set, fn, interruptible) {
    return interruptible ? iterateSimple$6({
      iterator: keys(set),
      next: next
    }, fn) : forEach$3(set, fn);
  };
  var SetHelpers$4 = setHelpers;
  var iterate$3 = setIterate;
  var Set$2 = SetHelpers$4.Set;
  var add$3 = SetHelpers$4.add;
  var setClone = function setClone(set) {
    var result = new Set$2();
    iterate$3(set, function (it) {
      add$3(result, it);
    });
    return result;
  };
  var uncurryThisAccessor = functionUncurryThisAccessor;
  var SetHelpers$3 = setHelpers;
  var setSize = uncurryThisAccessor(SetHelpers$3.proto, 'size', 'get') || function (set) {
    return set.size;
  };
  var aCallable = aCallable$j;
  var anObject$9 = anObject$D;
  var call$7 = functionCall;
  var toIntegerOrInfinity$4 = toIntegerOrInfinity$9;
  var getIteratorDirect = getIteratorDirect$8;
  var INVALID_SIZE = 'Invalid size';
  var $RangeError$3 = RangeError;
  var $TypeError$1 = TypeError;
  var max$2 = Math.max;
  var SetRecord = function SetRecord(set, intSize) {
    this.set = set;
    this.size = max$2(intSize, 0);
    this.has = aCallable(set.has);
    this.keys = aCallable(set.keys);
  };
  SetRecord.prototype = {
    getIterator: function getIterator() {
      return getIteratorDirect(anObject$9(call$7(this.keys, this.set)));
    },
    includes: function includes(it) {
      return call$7(this.has, this.set, it);
    }
  };

  // `GetSetRecord` abstract operation
  // https://tc39.es/proposal-set-methods/#sec-getsetrecord
  var getSetRecord$7 = function getSetRecord$7(obj) {
    anObject$9(obj);
    var numSize = +obj.size;
    // NOTE: If size is undefined, then numSize will be NaN
    // eslint-disable-next-line no-self-compare -- NaN check
    if (numSize !== numSize) throw new $TypeError$1(INVALID_SIZE);
    var intSize = toIntegerOrInfinity$4(numSize);
    if (intSize < 0) throw new $RangeError$3(INVALID_SIZE);
    return new SetRecord(obj, intSize);
  };
  var aSet$6 = aSet$7;
  var SetHelpers$2 = setHelpers;
  var clone$2 = setClone;
  var size$4 = setSize;
  var getSetRecord$6 = getSetRecord$7;
  var iterateSet$2 = setIterate;
  var iterateSimple$5 = iterateSimple$7;
  var has$4 = SetHelpers$2.has;
  var remove$1 = SetHelpers$2.remove;

  // `Set.prototype.difference` method
  // https://github.com/tc39/proposal-set-methods
  var setDifference = function difference(other) {
    var O = aSet$6(this);
    var otherRec = getSetRecord$6(other);
    var result = clone$2(O);
    if (size$4(O) <= otherRec.size) iterateSet$2(O, function (e) {
      if (otherRec.includes(e)) remove$1(result, e);
    });else iterateSimple$5(otherRec.getIterator(), function (e) {
      if (has$4(O, e)) remove$1(result, e);
    });
    return result;
  };
  var getBuiltIn$5 = getBuiltIn$j;
  var createSetLike = function createSetLike(size) {
    return {
      size: size,
      has: function has() {
        return false;
      },
      keys: function keys() {
        return {
          next: function next() {
            return {
              done: true
            };
          }
        };
      }
    };
  };
  var setMethodAcceptSetLike$7 = function setMethodAcceptSetLike$7(name) {
    var Set = getBuiltIn$5('Set');
    try {
      new Set()[name](createSetLike(0));
      try {
        // late spec change, early WebKit ~ Safari 17.0 beta implementation does not pass it
        // https://github.com/tc39/proposal-set-methods/pull/88
        new Set()[name](createSetLike(-1));
        return false;
      } catch (error2) {
        return true;
      }
    } catch (error) {
      return false;
    }
  };
  var $$G = _export;
  var difference = setDifference;
  var setMethodAcceptSetLike$6 = setMethodAcceptSetLike$7;

  // `Set.prototype.difference` method
  // https://github.com/tc39/proposal-set-methods
  $$G({
    target: 'Set',
    proto: true,
    real: true,
    forced: !setMethodAcceptSetLike$6('difference')
  }, {
    difference: difference
  });
  var aSet$5 = aSet$7;
  var SetHelpers$1 = setHelpers;
  var size$3 = setSize;
  var getSetRecord$5 = getSetRecord$7;
  var iterateSet$1 = setIterate;
  var iterateSimple$4 = iterateSimple$7;
  var Set$1 = SetHelpers$1.Set;
  var add$2 = SetHelpers$1.add;
  var has$3 = SetHelpers$1.has;

  // `Set.prototype.intersection` method
  // https://github.com/tc39/proposal-set-methods
  var setIntersection = function intersection(other) {
    var O = aSet$5(this);
    var otherRec = getSetRecord$5(other);
    var result = new Set$1();
    if (size$3(O) > otherRec.size) {
      iterateSimple$4(otherRec.getIterator(), function (e) {
        if (has$3(O, e)) add$2(result, e);
      });
    } else {
      iterateSet$1(O, function (e) {
        if (otherRec.includes(e)) add$2(result, e);
      });
    }
    return result;
  };
  var $$F = _export;
  var fails$d = fails$Y;
  var intersection = setIntersection;
  var setMethodAcceptSetLike$5 = setMethodAcceptSetLike$7;
  var INCORRECT = !setMethodAcceptSetLike$5('intersection') || fails$d(function () {
    // eslint-disable-next-line es/no-array-from, es/no-set -- testing
    return String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !== '3,2';
  });

  // `Set.prototype.intersection` method
  // https://github.com/tc39/proposal-set-methods
  $$F({
    target: 'Set',
    proto: true,
    real: true,
    forced: INCORRECT
  }, {
    intersection: intersection
  });
  var aSet$4 = aSet$7;
  var has$2 = setHelpers.has;
  var size$2 = setSize;
  var getSetRecord$4 = getSetRecord$7;
  var iterateSet = setIterate;
  var iterateSimple$3 = iterateSimple$7;
  var iteratorClose$1 = iteratorClose$5;

  // `Set.prototype.isDisjointFrom` method
  // https://tc39.github.io/proposal-set-methods/#Set.prototype.isDisjointFrom
  var setIsDisjointFrom = function isDisjointFrom(other) {
    var O = aSet$4(this);
    var otherRec = getSetRecord$4(other);
    if (size$2(O) <= otherRec.size) return iterateSet(O, function (e) {
      if (otherRec.includes(e)) return false;
    }, true) !== false;
    var iterator = otherRec.getIterator();
    return iterateSimple$3(iterator, function (e) {
      if (has$2(O, e)) return iteratorClose$1(iterator, 'normal', false);
    }) !== false;
  };
  var $$E = _export;
  var isDisjointFrom = setIsDisjointFrom;
  var setMethodAcceptSetLike$4 = setMethodAcceptSetLike$7;

  // `Set.prototype.isDisjointFrom` method
  // https://github.com/tc39/proposal-set-methods
  $$E({
    target: 'Set',
    proto: true,
    real: true,
    forced: !setMethodAcceptSetLike$4('isDisjointFrom')
  }, {
    isDisjointFrom: isDisjointFrom
  });
  var aSet$3 = aSet$7;
  var size$1 = setSize;
  var iterate$2 = setIterate;
  var getSetRecord$3 = getSetRecord$7;

  // `Set.prototype.isSubsetOf` method
  // https://tc39.github.io/proposal-set-methods/#Set.prototype.isSubsetOf
  var setIsSubsetOf = function isSubsetOf(other) {
    var O = aSet$3(this);
    var otherRec = getSetRecord$3(other);
    if (size$1(O) > otherRec.size) return false;
    return iterate$2(O, function (e) {
      if (!otherRec.includes(e)) return false;
    }, true) !== false;
  };
  var $$D = _export;
  var isSubsetOf = setIsSubsetOf;
  var setMethodAcceptSetLike$3 = setMethodAcceptSetLike$7;

  // `Set.prototype.isSubsetOf` method
  // https://github.com/tc39/proposal-set-methods
  $$D({
    target: 'Set',
    proto: true,
    real: true,
    forced: !setMethodAcceptSetLike$3('isSubsetOf')
  }, {
    isSubsetOf: isSubsetOf
  });
  var aSet$2 = aSet$7;
  var has$1 = setHelpers.has;
  var size = setSize;
  var getSetRecord$2 = getSetRecord$7;
  var iterateSimple$2 = iterateSimple$7;
  var iteratorClose = iteratorClose$5;

  // `Set.prototype.isSupersetOf` method
  // https://tc39.github.io/proposal-set-methods/#Set.prototype.isSupersetOf
  var setIsSupersetOf = function isSupersetOf(other) {
    var O = aSet$2(this);
    var otherRec = getSetRecord$2(other);
    if (size(O) < otherRec.size) return false;
    var iterator = otherRec.getIterator();
    return iterateSimple$2(iterator, function (e) {
      if (!has$1(O, e)) return iteratorClose(iterator, 'normal', false);
    }) !== false;
  };
  var $$C = _export;
  var isSupersetOf = setIsSupersetOf;
  var setMethodAcceptSetLike$2 = setMethodAcceptSetLike$7;

  // `Set.prototype.isSupersetOf` method
  // https://github.com/tc39/proposal-set-methods
  $$C({
    target: 'Set',
    proto: true,
    real: true,
    forced: !setMethodAcceptSetLike$2('isSupersetOf')
  }, {
    isSupersetOf: isSupersetOf
  });
  var aSet$1 = aSet$7;
  var SetHelpers = setHelpers;
  var clone$1 = setClone;
  var getSetRecord$1 = getSetRecord$7;
  var iterateSimple$1 = iterateSimple$7;
  var add$1 = SetHelpers.add;
  var has = SetHelpers.has;
  var remove = SetHelpers.remove;

  // `Set.prototype.symmetricDifference` method
  // https://github.com/tc39/proposal-set-methods
  var setSymmetricDifference = function symmetricDifference(other) {
    var O = aSet$1(this);
    var keysIter = getSetRecord$1(other).getIterator();
    var result = clone$1(O);
    iterateSimple$1(keysIter, function (e) {
      if (has(O, e)) remove(result, e);else add$1(result, e);
    });
    return result;
  };
  var $$B = _export;
  var symmetricDifference = setSymmetricDifference;
  var setMethodAcceptSetLike$1 = setMethodAcceptSetLike$7;

  // `Set.prototype.symmetricDifference` method
  // https://github.com/tc39/proposal-set-methods
  $$B({
    target: 'Set',
    proto: true,
    real: true,
    forced: !setMethodAcceptSetLike$1('symmetricDifference')
  }, {
    symmetricDifference: symmetricDifference
  });
  var aSet = aSet$7;
  var add = setHelpers.add;
  var clone = setClone;
  var getSetRecord = getSetRecord$7;
  var iterateSimple = iterateSimple$7;

  // `Set.prototype.union` method
  // https://github.com/tc39/proposal-set-methods
  var setUnion = function union(other) {
    var O = aSet(this);
    var keysIter = getSetRecord(other).getIterator();
    var result = clone(O);
    iterateSimple(keysIter, function (it) {
      add(result, it);
    });
    return result;
  };
  var $$A = _export;
  var union = setUnion;
  var setMethodAcceptSetLike = setMethodAcceptSetLike$7;

  // `Set.prototype.union` method
  // https://github.com/tc39/proposal-set-methods
  $$A({
    target: 'Set',
    proto: true,
    real: true,
    forced: !setMethodAcceptSetLike('union')
  }, {
    union: union
  });

  // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  // in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
  var documentCreateElement = documentCreateElement$2;
  var classList = documentCreateElement('span').classList;
  var DOMTokenListPrototype$2 = classList && classList.constructor && classList.constructor.prototype;
  var domTokenListPrototype = DOMTokenListPrototype$2 === Object.prototype ? undefined : DOMTokenListPrototype$2;
  var global$d = global$J;
  var DOMIterables$1 = domIterables;
  var DOMTokenListPrototype$1 = domTokenListPrototype;
  var forEach$2 = arrayForEach;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$b;
  var handlePrototype$1 = function handlePrototype$1(CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype && CollectionPrototype.forEach !== forEach$2) try {
      createNonEnumerableProperty$1(CollectionPrototype, 'forEach', forEach$2);
    } catch (error) {
      CollectionPrototype.forEach = forEach$2;
    }
  };
  for (var COLLECTION_NAME$1 in DOMIterables$1) {
    if (DOMIterables$1[COLLECTION_NAME$1]) {
      handlePrototype$1(global$d[COLLECTION_NAME$1] && global$d[COLLECTION_NAME$1].prototype);
    }
  }
  handlePrototype$1(DOMTokenListPrototype$1);
  var global$c = global$J;
  var DOMIterables = domIterables;
  var DOMTokenListPrototype = domTokenListPrototype;
  var ArrayIteratorMethods = es_array_iterator;
  var createNonEnumerableProperty = createNonEnumerableProperty$b;
  var setToStringTag$3 = setToStringTag$d;
  var wellKnownSymbol$2 = wellKnownSymbol$v;
  var ITERATOR$2 = wellKnownSymbol$2('iterator');
  var ArrayValues = ArrayIteratorMethods.values;
  var handlePrototype = function handlePrototype(CollectionPrototype, COLLECTION_NAME) {
    if (CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[ITERATOR$2] !== ArrayValues) try {
        createNonEnumerableProperty(CollectionPrototype, ITERATOR$2, ArrayValues);
      } catch (error) {
        CollectionPrototype[ITERATOR$2] = ArrayValues;
      }
      setToStringTag$3(CollectionPrototype, COLLECTION_NAME, true);
      if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
          createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
        } catch (error) {
          CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
        }
      }
    }
  };
  for (var COLLECTION_NAME in DOMIterables) {
    handlePrototype(global$c[COLLECTION_NAME] && global$c[COLLECTION_NAME].prototype, COLLECTION_NAME);
  }
  handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

  /* global Bun -- Bun case */
  var engineIsBun = typeof Bun == 'function' && Bun && typeof Bun.version == 'string';
  var global$b = global$J;
  var apply = functionApply;
  var isCallable$2 = isCallable$v;
  var ENGINE_IS_BUN = engineIsBun;
  var USER_AGENT = engineUserAgent;
  var arraySlice$1 = arraySlice$7;
  var validateArgumentsLength$5 = validateArgumentsLength$7;
  var Function$1 = global$b.Function;
  // dirty IE9- and Bun 0.3.0- checks
  var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && function () {
    var version = global$b.Bun.version.split('.');
    return version.length < 3 || version[0] === '0' && (version[1] < 3 || version[1] === '3' && version[2] === '0');
  }();

  // IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
  // https://github.com/oven-sh/bun/issues/1633
  var schedulersFix$2 = function schedulersFix$2(scheduler, hasTimeArg) {
    var firstParamIndex = hasTimeArg ? 2 : 1;
    return WRAP ? function (handler, timeout /* , ...arguments */) {
      var boundArgs = validateArgumentsLength$5(arguments.length, 1) > firstParamIndex;
      var fn = isCallable$2(handler) ? handler : Function$1(handler);
      var params = boundArgs ? arraySlice$1(arguments, firstParamIndex) : [];
      var callback = boundArgs ? function () {
        apply(fn, this, params);
      } : fn;
      return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
    } : scheduler;
  };
  var $$z = _export;
  var global$a = global$J;
  var schedulersFix$1 = schedulersFix$2;
  var setInterval = schedulersFix$1(global$a.setInterval, true);

  // Bun / IE9- setInterval additional parameters fix
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  $$z({
    global: true,
    bind: true,
    forced: global$a.setInterval !== setInterval
  }, {
    setInterval: setInterval
  });
  var $$y = _export;
  var global$9 = global$J;
  var schedulersFix = schedulersFix$2;
  var setTimeout$1 = schedulersFix(global$9.setTimeout, true);

  // Bun / IE9- setTimeout additional parameters fix
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  $$y({
    global: true,
    bind: true,
    forced: global$9.setTimeout !== setTimeout$1
  }, {
    setTimeout: setTimeout$1
  });
  var $$x = _export;
  var uncurryThis$h = functionUncurryThis;
  var requireObjectCoercible$6 = requireObjectCoercible$g;
  var toIntegerOrInfinity$3 = toIntegerOrInfinity$9;
  var toString$a = toString$s;
  var stringSlice$5 = uncurryThis$h(''.slice);
  var max$1 = Math.max;
  var min$4 = Math.min;

  // eslint-disable-next-line unicorn/prefer-string-slice -- required for testing
  var FORCED$5 = !''.substr || 'ab'.substr(-1) !== 'b';

  // `String.prototype.substr` method
  // https://tc39.es/ecma262/#sec-string.prototype.substr
  $$x({
    target: 'String',
    proto: true,
    forced: FORCED$5
  }, {
    substr: function substr(start, length) {
      var that = toString$a(requireObjectCoercible$6(this));
      var size = that.length;
      var intStart = toIntegerOrInfinity$3(start);
      var intLength, intEnd;
      if (intStart === Infinity) intStart = 0;
      if (intStart < 0) intStart = max$1(size + intStart, 0);
      intLength = length === undefined ? size : toIntegerOrInfinity$3(length);
      if (intLength <= 0 || intLength === Infinity) return '';
      intEnd = min$4(intStart + intLength, size);
      return intStart >= intEnd ? '' : stringSlice$5(that, intStart, intEnd);
    }
  });
  var $$w = _export;
  var iterate$1 = iterate$d;
  var createProperty$2 = createProperty$8;

  // `Object.fromEntries` method
  // https://github.com/tc39/proposal-object-from-entries
  $$w({
    target: 'Object',
    stat: true
  }, {
    fromEntries: function fromEntries(iterable) {
      var obj = {};
      iterate$1(iterable, function (k, v) {
        createProperty$2(obj, k, v);
      }, {
        AS_ENTRIES: true
      });
      return obj;
    }
  });
  var $$v = _export;
  var uncurryThis$g = functionUncurryThisClause;
  var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f;
  var toLength$2 = toLength$6;
  var toString$9 = toString$s;
  var notARegExp$1 = notARegexp;
  var requireObjectCoercible$5 = requireObjectCoercible$g;
  var correctIsRegExpLogic$1 = correctIsRegexpLogic;
  var slice$2 = uncurryThis$g(''.slice);
  var min$3 = Math.min;
  var CORRECT_IS_REGEXP_LOGIC$1 = correctIsRegExpLogic$1('endsWith');
  // https://github.com/zloirock/core-js/pull/702
  var MDN_POLYFILL_BUG$1 = !CORRECT_IS_REGEXP_LOGIC$1 && !!function () {
    var descriptor = getOwnPropertyDescriptor$3(String.prototype, 'endsWith');
    return descriptor && !descriptor.writable;
  }();

  // `String.prototype.endsWith` method
  // https://tc39.es/ecma262/#sec-string.prototype.endswith
  $$v({
    target: 'String',
    proto: true,
    forced: !MDN_POLYFILL_BUG$1 && !CORRECT_IS_REGEXP_LOGIC$1
  }, {
    endsWith: function endsWith(searchString /* , endPosition = @length */) {
      var that = toString$9(requireObjectCoercible$5(this));
      notARegExp$1(searchString);
      var endPosition = arguments.length > 1 ? arguments[1] : undefined;
      var len = that.length;
      var end = endPosition === undefined ? len : min$3(toLength$2(endPosition), len);
      var search = toString$9(searchString);
      return slice$2(that, end - search.length, end) === search;
    }
  });

  // `SameValue` abstract operation
  // https://tc39.es/ecma262/#sec-samevalue
  // eslint-disable-next-line es/no-object-is -- safe
  var sameValue$1 = Object.is || function is(x, y) {
    // eslint-disable-next-line no-self-compare -- NaN check
    return x === y ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y;
  };
  var call$6 = functionCall;
  var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
  var anObject$8 = anObject$D;
  var isNullOrUndefined$2 = isNullOrUndefined$b;
  var requireObjectCoercible$4 = requireObjectCoercible$g;
  var sameValue = sameValue$1;
  var toString$8 = toString$s;
  var getMethod$1 = getMethod$8;
  var regExpExec$1 = regexpExecAbstract;

  // @@search logic
  fixRegExpWellKnownSymbolLogic$1('search', function (SEARCH, nativeSearch, maybeCallNative) {
    return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible$4(this);
      var searcher = isNullOrUndefined$2(regexp) ? undefined : getMethod$1(regexp, SEARCH);
      return searcher ? call$6(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString$8(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject$8(this);
      var S = toString$8(string);
      var res = maybeCallNative(nativeSearch, rx, S);
      if (res.done) return res.value;
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec$1(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }];
  });
  var call$5 = functionCall;
  var uncurryThis$f = functionUncurryThis;
  var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
  var anObject$7 = anObject$D;
  var isNullOrUndefined$1 = isNullOrUndefined$b;
  var requireObjectCoercible$3 = requireObjectCoercible$g;
  var speciesConstructor = speciesConstructor$2;
  var advanceStringIndex = advanceStringIndex$3;
  var toLength$1 = toLength$6;
  var toString$7 = toString$s;
  var getMethod = getMethod$8;
  var regExpExec = regexpExecAbstract;
  var stickyHelpers = regexpStickyHelpers;
  var fails$c = fails$Y;
  var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
  var MAX_UINT32 = 0xFFFFFFFF;
  var min$2 = Math.min;
  var push$5 = uncurryThis$f([].push);
  var stringSlice$4 = uncurryThis$f(''.slice);

  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper
  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$c(function () {
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function () {
      return originalExec.apply(this, arguments);
    };
    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  });
  var BUGGY = 'abbc'.split(/(b)*/)[1] === 'c' ||
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  'test'.split(/(?:)/, -1).length !== 4 || 'ab'.split(/(?:ab)*/).length !== 2 || '.'.split(/(.?)(.?)/).length !== 4 ||
  // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
  '.'.split(/()()/).length > 1 || ''.split(/.?/).length;

  // @@split logic
  fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit = '0'.split(undefined, 0).length ? function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call$5(nativeSplit, this, separator, limit);
    } : nativeSplit;
    return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible$3(this);
      var splitter = isNullOrUndefined$1(separator) ? undefined : getMethod(separator, SPLIT);
      return splitter ? call$5(splitter, separator, O, limit) : call$5(internalSplit, toString$7(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject$7(this);
      var S = toString$7(string);
      if (!BUGGY) {
        var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
        if (res.done) return res.value;
      }
      var C = speciesConstructor(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y ? 'g' : 'y');
      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return regExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = regExpExec(splitter, UNSUPPORTED_Y ? stringSlice$4(S, q) : S);
        var e;
        if (z === null || (e = min$2(toLength$1(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push$5(A, stringSlice$4(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push$5(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push$5(A, stringSlice$4(S, p));
      return A;
    }];
  }, BUGGY || !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);
  var uncurryThis$e = functionUncurryThis;
  var hasOwn$6 = hasOwnProperty_1;
  var $SyntaxError = SyntaxError;
  var $parseInt$1 = parseInt;
  var fromCharCode$2 = String.fromCharCode;
  var at$1 = uncurryThis$e(''.charAt);
  var slice$1 = uncurryThis$e(''.slice);
  var exec$4 = uncurryThis$e(/./.exec);
  var codePoints = {
    '\\"': '"',
    '\\\\': '\\',
    '\\/': '/',
    '\\b': '\b',
    '\\f': '\f',
    '\\n': '\n',
    '\\r': '\r',
    '\\t': '\t'
  };
  var IS_4_HEX_DIGITS = /^[\da-f]{4}$/i;
  // eslint-disable-next-line regexp/no-control-character -- safe
  var IS_C0_CONTROL_CODE = /^[\u0000-\u001F]$/;
  var parseJsonString = function parseJsonString(source, i) {
    var unterminated = true;
    var value = '';
    while (i < source.length) {
      var chr = at$1(source, i);
      if (chr === '\\') {
        var twoChars = slice$1(source, i, i + 2);
        if (hasOwn$6(codePoints, twoChars)) {
          value += codePoints[twoChars];
          i += 2;
        } else if (twoChars === "\\u") {
          i += 2;
          var fourHexDigits = slice$1(source, i, i + 4);
          if (!exec$4(IS_4_HEX_DIGITS, fourHexDigits)) throw new $SyntaxError('Bad Unicode escape at: ' + i);
          value += fromCharCode$2($parseInt$1(fourHexDigits, 16));
          i += 4;
        } else throw new $SyntaxError('Unknown escape sequence: "' + twoChars + '"');
      } else if (chr === '"') {
        unterminated = false;
        i++;
        break;
      } else {
        if (exec$4(IS_C0_CONTROL_CODE, chr)) throw new $SyntaxError('Bad control character in string literal at: ' + i);
        value += chr;
        i++;
      }
    }
    if (unterminated) throw new $SyntaxError('Unterminated string at: ' + i);
    return {
      value: value,
      end: i
    };
  };
  var $$u = _export;
  var DESCRIPTORS$8 = descriptors;
  var global$8 = global$J;
  var getBuiltIn$4 = getBuiltIn$j;
  var uncurryThis$d = functionUncurryThis;
  var call$4 = functionCall;
  var isCallable$1 = isCallable$v;
  var isObject$5 = isObject$u;
  var isArray$1 = isArray$9;
  var hasOwn$5 = hasOwnProperty_1;
  var toString$6 = toString$s;
  var lengthOfArrayLike$3 = lengthOfArrayLike$d;
  var createProperty$1 = createProperty$8;
  var fails$b = fails$Y;
  var parseJSONString = parseJsonString;
  var NATIVE_SYMBOL = symbolConstructorDetection;
  var JSON$1 = global$8.JSON;
  var Number$1 = global$8.Number;
  var SyntaxError$1 = global$8.SyntaxError;
  var nativeParse = JSON$1 && JSON$1.parse;
  var enumerableOwnProperties = getBuiltIn$4('Object', 'keys');
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;
  var at = uncurryThis$d(''.charAt);
  var slice = uncurryThis$d(''.slice);
  var exec$3 = uncurryThis$d(/./.exec);
  var push$4 = uncurryThis$d([].push);
  var IS_DIGIT = /^\d$/;
  var IS_NON_ZERO_DIGIT = /^[1-9]$/;
  var IS_NUMBER_START = /^(?:-|\d)$/;
  var IS_WHITESPACE = /^[\t\n\r ]$/;
  var PRIMITIVE = 0;
  var OBJECT = 1;
  var $parse = function $parse(source, reviver) {
    source = toString$6(source);
    var context = new Context(source, 0);
    var root = context.parse();
    var value = root.value;
    var endIndex = context.skip(IS_WHITESPACE, root.end);
    if (endIndex < source.length) {
      throw new SyntaxError$1('Unexpected extra character: "' + at(source, endIndex) + '" after the parsed data at: ' + endIndex);
    }
    return isCallable$1(reviver) ? internalize({
      '': value
    }, '', reviver, root) : value;
  };
  var internalize = function internalize(holder, name, reviver, node) {
    var val = holder[name];
    var unmodified = node && val === node.value;
    var context = unmodified && typeof node.source == 'string' ? {
      source: node.source
    } : {};
    var elementRecordsLen, keys, len, i, P;
    if (isObject$5(val)) {
      var nodeIsArray = isArray$1(val);
      var nodes = unmodified ? node.nodes : nodeIsArray ? [] : {};
      if (nodeIsArray) {
        elementRecordsLen = nodes.length;
        len = lengthOfArrayLike$3(val);
        for (i = 0; i < len; i++) {
          internalizeProperty(val, i, internalize(val, '' + i, reviver, i < elementRecordsLen ? nodes[i] : undefined));
        }
      } else {
        keys = enumerableOwnProperties(val);
        len = lengthOfArrayLike$3(keys);
        for (i = 0; i < len; i++) {
          P = keys[i];
          internalizeProperty(val, P, internalize(val, P, reviver, hasOwn$5(nodes, P) ? nodes[P] : undefined));
        }
      }
    }
    return call$4(reviver, holder, name, val, context);
  };
  var internalizeProperty = function internalizeProperty(object, key, value) {
    if (DESCRIPTORS$8) {
      var descriptor = getOwnPropertyDescriptor$2(object, key);
      if (descriptor && !descriptor.configurable) return;
    }
    if (value === undefined) delete object[key];else createProperty$1(object, key, value);
  };
  var Node$1 = function Node$1(value, end, source, nodes) {
    this.value = value;
    this.end = end;
    this.source = source;
    this.nodes = nodes;
  };
  var Context = function Context(source, index) {
    this.source = source;
    this.index = index;
  };

  // https://www.json.org/json-en.html
  Context.prototype = {
    fork: function fork(nextIndex) {
      return new Context(this.source, nextIndex);
    },
    parse: function parse() {
      var source = this.source;
      var i = this.skip(IS_WHITESPACE, this.index);
      var fork = this.fork(i);
      var chr = at(source, i);
      if (exec$3(IS_NUMBER_START, chr)) return fork.number();
      switch (chr) {
        case '{':
          return fork.object();
        case '[':
          return fork.array();
        case '"':
          return fork.string();
        case 't':
          return fork.keyword(true);
        case 'f':
          return fork.keyword(false);
        case 'n':
          return fork.keyword(null);
      }
      throw new SyntaxError$1('Unexpected character: "' + chr + '" at: ' + i);
    },
    node: function node(type, value, start, end, nodes) {
      return new Node$1(value, end, type ? null : slice(this.source, start, end), nodes);
    },
    object: function object() {
      var source = this.source;
      var i = this.index + 1;
      var expectKeypair = false;
      var object = {};
      var nodes = {};
      while (i < source.length) {
        i = this.until(['"', '}'], i);
        if (at(source, i) === '}' && !expectKeypair) {
          i++;
          break;
        }
        // Parsing the key
        var result = this.fork(i).string();
        var key = result.value;
        i = result.end;
        i = this.until([':'], i) + 1;
        // Parsing value
        i = this.skip(IS_WHITESPACE, i);
        result = this.fork(i).parse();
        createProperty$1(nodes, key, result);
        createProperty$1(object, key, result.value);
        i = this.until([',', '}'], result.end);
        var chr = at(source, i);
        if (chr === ',') {
          expectKeypair = true;
          i++;
        } else if (chr === '}') {
          i++;
          break;
        }
      }
      return this.node(OBJECT, object, this.index, i, nodes);
    },
    array: function array() {
      var source = this.source;
      var i = this.index + 1;
      var expectElement = false;
      var array = [];
      var nodes = [];
      while (i < source.length) {
        i = this.skip(IS_WHITESPACE, i);
        if (at(source, i) === ']' && !expectElement) {
          i++;
          break;
        }
        var result = this.fork(i).parse();
        push$4(nodes, result);
        push$4(array, result.value);
        i = this.until([',', ']'], result.end);
        if (at(source, i) === ',') {
          expectElement = true;
          i++;
        } else if (at(source, i) === ']') {
          i++;
          break;
        }
      }
      return this.node(OBJECT, array, this.index, i, nodes);
    },
    string: function string() {
      var index = this.index;
      var parsed = parseJSONString(this.source, this.index + 1);
      return this.node(PRIMITIVE, parsed.value, index, parsed.end);
    },
    number: function number() {
      var source = this.source;
      var startIndex = this.index;
      var i = startIndex;
      if (at(source, i) === '-') i++;
      if (at(source, i) === '0') i++;else if (exec$3(IS_NON_ZERO_DIGIT, at(source, i))) i = this.skip(IS_DIGIT, ++i);else throw new SyntaxError$1('Failed to parse number at: ' + i);
      if (at(source, i) === '.') i = this.skip(IS_DIGIT, ++i);
      if (at(source, i) === 'e' || at(source, i) === 'E') {
        i++;
        if (at(source, i) === '+' || at(source, i) === '-') i++;
        var exponentStartIndex = i;
        i = this.skip(IS_DIGIT, i);
        if (exponentStartIndex === i) throw new SyntaxError$1("Failed to parse number's exponent value at: " + i);
      }
      return this.node(PRIMITIVE, Number$1(slice(source, startIndex, i)), startIndex, i);
    },
    keyword: function keyword(value) {
      var keyword = '' + value;
      var index = this.index;
      var endIndex = index + keyword.length;
      if (slice(this.source, index, endIndex) !== keyword) throw new SyntaxError$1('Failed to parse value at: ' + index);
      return this.node(PRIMITIVE, value, index, endIndex);
    },
    skip: function skip(regex, i) {
      var source = this.source;
      for (; i < source.length; i++) if (!exec$3(regex, at(source, i))) break;
      return i;
    },
    until: function until(array, i) {
      i = this.skip(IS_WHITESPACE, i);
      var chr = at(this.source, i);
      for (var j = 0; j < array.length; j++) if (array[j] === chr) return i;
      throw new SyntaxError$1('Unexpected character: "' + chr + '" at: ' + i);
    }
  };
  var NO_SOURCE_SUPPORT = fails$b(function () {
    var unsafeInt = '9007199254740993';
    var source;
    nativeParse(unsafeInt, function (key, value, context) {
      source = context.source;
    });
    return source !== unsafeInt;
  });
  var PROPER_BASE_PARSE = NATIVE_SYMBOL && !fails$b(function () {
    // Safari 9 bug
    return 1 / nativeParse('-0 \t') !== -Infinity;
  });

  // `JSON.parse` method
  // https://tc39.es/ecma262/#sec-json.parse
  // https://github.com/tc39/proposal-json-parse-with-source
  $$u({
    target: 'JSON',
    stat: true,
    forced: NO_SOURCE_SUPPORT
  }, {
    parse: function parse(text, reviver) {
      return PROPER_BASE_PARSE && !isCallable$1(reviver) ? nativeParse(text) : $parse(text, reviver);
    }
  });
  var commonAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var base64Alphabet = commonAlphabet + '+/';
  var base64UrlAlphabet = commonAlphabet + '-_';
  var inverse = function inverse(characters) {
    // TODO: use `Object.create(null)` in `core-js@4`
    var result = {};
    var index = 0;
    for (; index < 64; index++) result[characters.charAt(index)] = index;
    return result;
  };
  var base64Map = {
    i2c: base64Alphabet,
    c2i: inverse(base64Alphabet),
    i2cUrl: base64UrlAlphabet,
    c2iUrl: inverse(base64UrlAlphabet)
  };
  var $$t = _export;
  var global$7 = global$J;
  var getBuiltIn$3 = getBuiltIn$j;
  var uncurryThis$c = functionUncurryThis;
  var call$3 = functionCall;
  var fails$a = fails$Y;
  var toString$5 = toString$s;
  var validateArgumentsLength$4 = validateArgumentsLength$7;
  var c2i = base64Map.c2i;
  var disallowed = /[^\d+/a-z]/i;
  var whitespaces = /[\t\n\f\r ]+/g;
  var finalEq = /[=]{1,2}$/;
  var $atob = getBuiltIn$3('atob');
  var fromCharCode$1 = String.fromCharCode;
  var charAt$2 = uncurryThis$c(''.charAt);
  var replace$4 = uncurryThis$c(''.replace);
  var exec$2 = uncurryThis$c(disallowed.exec);
  var BASIC = !!$atob && !fails$a(function () {
    return $atob('aGk=') !== 'hi';
  });
  var NO_SPACES_IGNORE = BASIC && fails$a(function () {
    return $atob(' ') !== '';
  });
  var NO_ENCODING_CHECK = BASIC && !fails$a(function () {
    $atob('a');
  });
  var NO_ARG_RECEIVING_CHECK = BASIC && !fails$a(function () {
    $atob();
  });
  var WRONG_ARITY = BASIC && $atob.length !== 1;
  var FORCED$4 = !BASIC || NO_SPACES_IGNORE || NO_ENCODING_CHECK || NO_ARG_RECEIVING_CHECK || WRONG_ARITY;

  // `atob` method
  // https://html.spec.whatwg.org/multipage/webappapis.html#dom-atob
  $$t({
    global: true,
    bind: true,
    enumerable: true,
    forced: FORCED$4
  }, {
    atob: function atob(data) {
      validateArgumentsLength$4(arguments.length, 1);
      // `webpack` dev server bug on IE global methods - use call(fn, global, ...)
      if (BASIC && !NO_SPACES_IGNORE && !NO_ENCODING_CHECK) return call$3($atob, global$7, data);
      var string = replace$4(toString$5(data), whitespaces, '');
      var output = '';
      var position = 0;
      var bc = 0;
      var length, chr, bs;
      if (string.length % 4 === 0) {
        string = replace$4(string, finalEq, '');
      }
      length = string.length;
      if (length % 4 === 1 || exec$2(disallowed, string)) {
        throw new (getBuiltIn$3('DOMException'))('The string is not correctly encoded', 'InvalidCharacterError');
      }
      while (position < length) {
        chr = charAt$2(string, position++);
        bs = bc % 4 ? bs * 64 + c2i[chr] : c2i[chr];
        if (bc++ % 4) output += fromCharCode$1(255 & bs >> (-2 * bc & 6));
      }
      return output;
    }
  });
  var IS_NODE = engineIsNode;
  var tryNodeRequire$1 = function tryNodeRequire$1(name) {
    try {
      // eslint-disable-next-line no-new-func -- safe
      if (IS_NODE) return Function('return require("' + name + '")')();
    } catch (error) {/* empty */}
  };
  var domExceptionConstants = {
    IndexSizeError: {
      s: 'INDEX_SIZE_ERR',
      c: 1,
      m: 1
    },
    DOMStringSizeError: {
      s: 'DOMSTRING_SIZE_ERR',
      c: 2,
      m: 0
    },
    HierarchyRequestError: {
      s: 'HIERARCHY_REQUEST_ERR',
      c: 3,
      m: 1
    },
    WrongDocumentError: {
      s: 'WRONG_DOCUMENT_ERR',
      c: 4,
      m: 1
    },
    InvalidCharacterError: {
      s: 'INVALID_CHARACTER_ERR',
      c: 5,
      m: 1
    },
    NoDataAllowedError: {
      s: 'NO_DATA_ALLOWED_ERR',
      c: 6,
      m: 0
    },
    NoModificationAllowedError: {
      s: 'NO_MODIFICATION_ALLOWED_ERR',
      c: 7,
      m: 1
    },
    NotFoundError: {
      s: 'NOT_FOUND_ERR',
      c: 8,
      m: 1
    },
    NotSupportedError: {
      s: 'NOT_SUPPORTED_ERR',
      c: 9,
      m: 1
    },
    InUseAttributeError: {
      s: 'INUSE_ATTRIBUTE_ERR',
      c: 10,
      m: 1
    },
    InvalidStateError: {
      s: 'INVALID_STATE_ERR',
      c: 11,
      m: 1
    },
    SyntaxError: {
      s: 'SYNTAX_ERR',
      c: 12,
      m: 1
    },
    InvalidModificationError: {
      s: 'INVALID_MODIFICATION_ERR',
      c: 13,
      m: 1
    },
    NamespaceError: {
      s: 'NAMESPACE_ERR',
      c: 14,
      m: 1
    },
    InvalidAccessError: {
      s: 'INVALID_ACCESS_ERR',
      c: 15,
      m: 1
    },
    ValidationError: {
      s: 'VALIDATION_ERR',
      c: 16,
      m: 0
    },
    TypeMismatchError: {
      s: 'TYPE_MISMATCH_ERR',
      c: 17,
      m: 1
    },
    SecurityError: {
      s: 'SECURITY_ERR',
      c: 18,
      m: 1
    },
    NetworkError: {
      s: 'NETWORK_ERR',
      c: 19,
      m: 1
    },
    AbortError: {
      s: 'ABORT_ERR',
      c: 20,
      m: 1
    },
    URLMismatchError: {
      s: 'URL_MISMATCH_ERR',
      c: 21,
      m: 1
    },
    QuotaExceededError: {
      s: 'QUOTA_EXCEEDED_ERR',
      c: 22,
      m: 1
    },
    TimeoutError: {
      s: 'TIMEOUT_ERR',
      c: 23,
      m: 1
    },
    InvalidNodeTypeError: {
      s: 'INVALID_NODE_TYPE_ERR',
      c: 24,
      m: 1
    },
    DataCloneError: {
      s: 'DATA_CLONE_ERR',
      c: 25,
      m: 1
    }
  };
  var $$s = _export;
  var tryNodeRequire = tryNodeRequire$1;
  var getBuiltIn$2 = getBuiltIn$j;
  var fails$9 = fails$Y;
  var create$1 = objectCreate;
  var createPropertyDescriptor$3 = createPropertyDescriptor$a;
  var defineProperty$2 = objectDefineProperty.f;
  var defineBuiltIn$4 = defineBuiltIn$l;
  var defineBuiltInAccessor$4 = defineBuiltInAccessor$e;
  var hasOwn$4 = hasOwnProperty_1;
  var anInstance$4 = anInstance$9;
  var anObject$6 = anObject$D;
  var errorToString = errorToString$2;
  var normalizeStringArgument$1 = normalizeStringArgument$4;
  var DOMExceptionConstants$1 = domExceptionConstants;
  var clearErrorStack$1 = errorStackClear;
  var InternalStateModule$3 = internalState;
  var DESCRIPTORS$7 = descriptors;
  var DOM_EXCEPTION$2 = 'DOMException';
  var DATA_CLONE_ERR = 'DATA_CLONE_ERR';
  var Error$2 = getBuiltIn$2('Error');
  // NodeJS < 17.0 does not expose `DOMException` to global
  var NativeDOMException$1 = getBuiltIn$2(DOM_EXCEPTION$2) || function () {
    try {
      // NodeJS < 15.0 does not expose `MessageChannel` to global
      var MessageChannel = getBuiltIn$2('MessageChannel') || tryNodeRequire('worker_threads').MessageChannel;
      // eslint-disable-next-line es/no-weak-map, unicorn/require-post-message-target-origin -- safe
      new MessageChannel().port1.postMessage(new WeakMap());
    } catch (error) {
      if (error.name === DATA_CLONE_ERR && error.code === 25) return error.constructor;
    }
  }();
  var NativeDOMExceptionPrototype = NativeDOMException$1 && NativeDOMException$1.prototype;
  var ErrorPrototype = Error$2.prototype;
  var setInternalState$3 = InternalStateModule$3.set;
  var getInternalState = InternalStateModule$3.getterFor(DOM_EXCEPTION$2);
  var HAS_STACK = ('stack' in new Error$2(DOM_EXCEPTION$2));
  var codeFor = function codeFor(name) {
    return hasOwn$4(DOMExceptionConstants$1, name) && DOMExceptionConstants$1[name].m ? DOMExceptionConstants$1[name].c : 0;
  };
  var $DOMException$1 = function DOMException() {
    anInstance$4(this, DOMExceptionPrototype$1);
    var argumentsLength = arguments.length;
    var message = normalizeStringArgument$1(argumentsLength < 1 ? undefined : arguments[0]);
    var name = normalizeStringArgument$1(argumentsLength < 2 ? undefined : arguments[1], 'Error');
    var code = codeFor(name);
    setInternalState$3(this, {
      type: DOM_EXCEPTION$2,
      name: name,
      message: message,
      code: code
    });
    if (!DESCRIPTORS$7) {
      this.name = name;
      this.message = message;
      this.code = code;
    }
    if (HAS_STACK) {
      var error = new Error$2(message);
      error.name = DOM_EXCEPTION$2;
      defineProperty$2(this, 'stack', createPropertyDescriptor$3(1, clearErrorStack$1(error.stack, 1)));
    }
  };
  var DOMExceptionPrototype$1 = $DOMException$1.prototype = create$1(ErrorPrototype);
  var createGetterDescriptor = function createGetterDescriptor(get) {
    return {
      enumerable: true,
      configurable: true,
      get: get
    };
  };
  var getterFor = function getterFor(key) {
    return createGetterDescriptor(function () {
      return getInternalState(this)[key];
    });
  };
  if (DESCRIPTORS$7) {
    // `DOMException.prototype.code` getter
    defineBuiltInAccessor$4(DOMExceptionPrototype$1, 'code', getterFor('code'));
    // `DOMException.prototype.message` getter
    defineBuiltInAccessor$4(DOMExceptionPrototype$1, 'message', getterFor('message'));
    // `DOMException.prototype.name` getter
    defineBuiltInAccessor$4(DOMExceptionPrototype$1, 'name', getterFor('name'));
  }
  defineProperty$2(DOMExceptionPrototype$1, 'constructor', createPropertyDescriptor$3(1, $DOMException$1));

  // FF36- DOMException is a function, but can't be constructed
  var INCORRECT_CONSTRUCTOR = fails$9(function () {
    return !(new NativeDOMException$1() instanceof Error$2);
  });

  // Safari 10.1 / Chrome 32- / IE8- DOMException.prototype.toString bugs
  var INCORRECT_TO_STRING = INCORRECT_CONSTRUCTOR || fails$9(function () {
    return ErrorPrototype.toString !== errorToString || String(new NativeDOMException$1(1, 2)) !== '2: 1';
  });

  // Deno 1.6.3- DOMException.prototype.code just missed
  var INCORRECT_CODE = INCORRECT_CONSTRUCTOR || fails$9(function () {
    return new NativeDOMException$1(1, 'DataCloneError').code !== 25;
  });

  // Deno 1.6.3- DOMException constants just missed
  INCORRECT_CONSTRUCTOR || NativeDOMException$1[DATA_CLONE_ERR] !== 25 || NativeDOMExceptionPrototype[DATA_CLONE_ERR] !== 25;
  var FORCED_CONSTRUCTOR$1 = INCORRECT_CONSTRUCTOR;

  // `DOMException` constructor
  // https://webidl.spec.whatwg.org/#idl-DOMException
  $$s({
    global: true,
    constructor: true,
    forced: FORCED_CONSTRUCTOR$1
  }, {
    DOMException: FORCED_CONSTRUCTOR$1 ? $DOMException$1 : NativeDOMException$1
  });
  var PolyfilledDOMException$1 = getBuiltIn$2(DOM_EXCEPTION$2);
  var PolyfilledDOMExceptionPrototype$1 = PolyfilledDOMException$1.prototype;
  if (INCORRECT_TO_STRING && NativeDOMException$1 === PolyfilledDOMException$1) {
    defineBuiltIn$4(PolyfilledDOMExceptionPrototype$1, 'toString', errorToString);
  }
  if (INCORRECT_CODE && DESCRIPTORS$7 && NativeDOMException$1 === PolyfilledDOMException$1) {
    defineBuiltInAccessor$4(PolyfilledDOMExceptionPrototype$1, 'code', createGetterDescriptor(function () {
      return codeFor(anObject$6(this).name);
    }));
  }

  // `DOMException` constants
  for (var key$1 in DOMExceptionConstants$1) if (hasOwn$4(DOMExceptionConstants$1, key$1)) {
    var constant$1 = DOMExceptionConstants$1[key$1];
    var constantName$1 = constant$1.s;
    var descriptor$2 = createPropertyDescriptor$3(6, constant$1.c);
    if (!hasOwn$4(PolyfilledDOMException$1, constantName$1)) {
      defineProperty$2(PolyfilledDOMException$1, constantName$1, descriptor$2);
    }
    if (!hasOwn$4(PolyfilledDOMExceptionPrototype$1, constantName$1)) {
      defineProperty$2(PolyfilledDOMExceptionPrototype$1, constantName$1, descriptor$2);
    }
  }
  var $$r = _export;
  var global$6 = global$J;
  var getBuiltIn$1 = getBuiltIn$j;
  var createPropertyDescriptor$2 = createPropertyDescriptor$a;
  var defineProperty$1 = objectDefineProperty.f;
  var hasOwn$3 = hasOwnProperty_1;
  var anInstance$3 = anInstance$9;
  var inheritIfRequired = inheritIfRequired$5;
  var normalizeStringArgument = normalizeStringArgument$4;
  var DOMExceptionConstants = domExceptionConstants;
  var clearErrorStack = errorStackClear;
  var DESCRIPTORS$6 = descriptors;
  var DOM_EXCEPTION$1 = 'DOMException';
  var Error$1 = getBuiltIn$1('Error');
  var NativeDOMException = getBuiltIn$1(DOM_EXCEPTION$1);
  var $DOMException = function DOMException() {
    anInstance$3(this, DOMExceptionPrototype);
    var argumentsLength = arguments.length;
    var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
    var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
    var that = new NativeDOMException(message, name);
    var error = new Error$1(message);
    error.name = DOM_EXCEPTION$1;
    defineProperty$1(that, 'stack', createPropertyDescriptor$2(1, clearErrorStack(error.stack, 1)));
    inheritIfRequired(that, this, $DOMException);
    return that;
  };
  var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;
  var ERROR_HAS_STACK = ('stack' in new Error$1(DOM_EXCEPTION$1));
  var DOM_EXCEPTION_HAS_STACK = ('stack' in new NativeDOMException(1, 2));

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var descriptor$1 = NativeDOMException && DESCRIPTORS$6 && Object.getOwnPropertyDescriptor(global$6, DOM_EXCEPTION$1);

  // Bun ~ 0.1.1 DOMException have incorrect descriptor and we can't redefine it
  // https://github.com/Jarred-Sumner/bun/issues/399
  var BUGGY_DESCRIPTOR = !!descriptor$1 && !(descriptor$1.writable && descriptor$1.configurable);
  var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;

  // `DOMException` constructor patch for `.stack` where it's required
  // https://webidl.spec.whatwg.org/#es-DOMException-specialness
  $$r({
    global: true,
    constructor: true,
    forced: FORCED_CONSTRUCTOR
  }, {
    // TODO: fix export logic
    DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
  });
  var PolyfilledDOMException = getBuiltIn$1(DOM_EXCEPTION$1);
  var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;
  if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
    {
      defineProperty$1(PolyfilledDOMExceptionPrototype, 'constructor', createPropertyDescriptor$2(1, PolyfilledDOMException));
    }
    for (var key in DOMExceptionConstants) if (hasOwn$3(DOMExceptionConstants, key)) {
      var constant = DOMExceptionConstants[key];
      var constantName = constant.s;
      if (!hasOwn$3(PolyfilledDOMException, constantName)) {
        defineProperty$1(PolyfilledDOMException, constantName, createPropertyDescriptor$2(6, constant.c));
      }
    }
  }
  var getBuiltIn = getBuiltIn$j;
  var setToStringTag$2 = setToStringTag$d;
  var DOM_EXCEPTION = 'DOMException';

  // `DOMException.prototype[@@toStringTag]` property
  setToStringTag$2(getBuiltIn(DOM_EXCEPTION), DOM_EXCEPTION);
  var $$q = _export;
  var $findIndex = arrayIteration.findIndex;
  var addToUnscopables$1 = addToUnscopables$5;
  var FIND_INDEX = 'findIndex';
  var SKIPS_HOLES = true;

  // Shouldn't skip holes
  // eslint-disable-next-line es/no-array-prototype-findindex -- testing
  if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () {
    SKIPS_HOLES = false;
  });

  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findindex
  $$q({
    target: 'Array',
    proto: true,
    forced: SKIPS_HOLES
  }, {
    findIndex: function findIndex(callbackfn /* , that = undefined */) {
      return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables$1(FIND_INDEX);
  var $$p = _export;
  var toObject$3 = toObject$i;
  var toAbsoluteIndex$1 = toAbsoluteIndex$4;
  var toIntegerOrInfinity$2 = toIntegerOrInfinity$9;
  var lengthOfArrayLike$2 = lengthOfArrayLike$d;
  var setArrayLength$1 = arraySetLength;
  var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$4;
  var arraySpeciesCreate = arraySpeciesCreate$3;
  var createProperty = createProperty$8;
  var deletePropertyOrThrow$1 = deletePropertyOrThrow$3;
  var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$5;
  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
  var max = Math.max;
  var min$1 = Math.min;

  // `Array.prototype.splice` method
  // https://tc39.es/ecma262/#sec-array.prototype.splice
  // with adding support of @@species
  $$p({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
  }, {
    splice: function splice(start, deleteCount /* , ...items */) {
      var O = toObject$3(this);
      var len = lengthOfArrayLike$2(O);
      var actualStart = toAbsoluteIndex$1(start, len);
      var argumentsLength = arguments.length;
      var insertCount, actualDeleteCount, A, k, from, to;
      if (argumentsLength === 0) {
        insertCount = actualDeleteCount = 0;
      } else if (argumentsLength === 1) {
        insertCount = 0;
        actualDeleteCount = len - actualStart;
      } else {
        insertCount = argumentsLength - 2;
        actualDeleteCount = min$1(max(toIntegerOrInfinity$2(deleteCount), 0), len - actualStart);
      }
      doesNotExceedSafeInteger$1(len + insertCount - actualDeleteCount);
      A = arraySpeciesCreate(O, actualDeleteCount);
      for (k = 0; k < actualDeleteCount; k++) {
        from = actualStart + k;
        if (from in O) createProperty(A, k, O[from]);
      }
      A.length = actualDeleteCount;
      if (insertCount < actualDeleteCount) {
        for (k = actualStart; k < len - actualDeleteCount; k++) {
          from = k + actualDeleteCount;
          to = k + insertCount;
          if (from in O) O[to] = O[from];else deletePropertyOrThrow$1(O, to);
        }
        for (k = len; k > len - actualDeleteCount + insertCount; k--) deletePropertyOrThrow$1(O, k - 1);
      } else if (insertCount > actualDeleteCount) {
        for (k = len - actualDeleteCount; k > actualStart; k--) {
          from = k + actualDeleteCount - 1;
          to = k + insertCount - 1;
          if (from in O) O[to] = O[from];else deletePropertyOrThrow$1(O, to);
        }
      }
      for (k = 0; k < insertCount; k++) {
        O[k + actualStart] = arguments[k + 2];
      }
      setArrayLength$1(O, len - actualDeleteCount + insertCount);
      return A;
    }
  });
  var $$o = _export;
  var toObject$2 = toObject$i;
  var lengthOfArrayLike$1 = lengthOfArrayLike$d;
  var setArrayLength = arraySetLength;
  var deletePropertyOrThrow = deletePropertyOrThrow$3;
  var doesNotExceedSafeInteger = doesNotExceedSafeInteger$4;

  // IE8-
  var INCORRECT_RESULT = [].unshift(0) !== 1;

  // V8 ~ Chrome < 71 and Safari <= 15.4, FF < 23 throws InternalError
  var properErrorOnNonWritableLength = function properErrorOnNonWritableLength() {
    try {
      // eslint-disable-next-line es/no-object-defineproperty -- safe
      Object.defineProperty([], 'length', {
        writable: false
      }).unshift();
    } catch (error) {
      return error instanceof TypeError;
    }
  };
  var FORCED$3 = INCORRECT_RESULT || !properErrorOnNonWritableLength();

  // `Array.prototype.unshift` method
  // https://tc39.es/ecma262/#sec-array.prototype.unshift
  $$o({
    target: 'Array',
    proto: true,
    arity: 1,
    forced: FORCED$3
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    unshift: function unshift(item) {
      var O = toObject$2(this);
      var len = lengthOfArrayLike$1(O);
      var argCount = arguments.length;
      if (argCount) {
        doesNotExceedSafeInteger(len + argCount);
        var k = len;
        while (k--) {
          var to = k + argCount;
          if (k in O) O[to] = O[k];else deletePropertyOrThrow(O, to);
        }
        for (var j = 0; j < argCount; j++) {
          O[j] = arguments[j];
        }
      }
      return setArrayLength(O, len + argCount);
    }
  });
  var $$n = _export;
  var fails$8 = fails$Y;
  var toObject$1 = toObject$i;
  var toPrimitive = toPrimitive$3;
  var FORCED$2 = fails$8(function () {
    return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
      toISOString: function toISOString() {
        return 1;
      }
    }) !== 1;
  });

  // `Date.prototype.toJSON` method
  // https://tc39.es/ecma262/#sec-date.prototype.tojson
  $$n({
    target: 'Date',
    proto: true,
    arity: 1,
    forced: FORCED$2
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    toJSON: function toJSON(key) {
      var O = toObject$1(this);
      var pv = toPrimitive(O, 'number');
      return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
    }
  });
  var toIntegerOrInfinity$1 = toIntegerOrInfinity$9;
  var toString$4 = toString$s;
  var requireObjectCoercible$2 = requireObjectCoercible$g;
  var $RangeError$2 = RangeError;

  // `String.prototype.repeat` method implementation
  // https://tc39.es/ecma262/#sec-string.prototype.repeat
  var stringRepeat = function repeat(count) {
    var str = toString$4(requireObjectCoercible$2(this));
    var result = '';
    var n = toIntegerOrInfinity$1(count);
    if (n < 0 || n === Infinity) throw new $RangeError$2('Wrong number of repetitions');
    for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
    return result;
  };
  var $$m = _export;
  var uncurryThis$b = functionUncurryThis;
  var toIntegerOrInfinity = toIntegerOrInfinity$9;
  var thisNumberValue = thisNumberValue$2;
  var $repeat = stringRepeat;
  var fails$7 = fails$Y;
  var $RangeError$1 = RangeError;
  var $String = String;
  var floor$2 = Math.floor;
  var repeat$1 = uncurryThis$b($repeat);
  var stringSlice$3 = uncurryThis$b(''.slice);
  var nativeToFixed = uncurryThis$b(1.0.toFixed);
  var pow$1 = function pow$1(x, n, acc) {
    return n === 0 ? acc : n % 2 === 1 ? pow$1(x, n - 1, acc * x) : pow$1(x * x, n / 2, acc);
  };
  var log = function log(x) {
    var n = 0;
    var x2 = x;
    while (x2 >= 4096) {
      n += 12;
      x2 /= 4096;
    }
    while (x2 >= 2) {
      n += 1;
      x2 /= 2;
    }
    return n;
  };
  var multiply = function multiply(data, n, c) {
    var index = -1;
    var c2 = c;
    while (++index < 6) {
      c2 += n * data[index];
      data[index] = c2 % 1e7;
      c2 = floor$2(c2 / 1e7);
    }
  };
  var divide = function divide(data, n) {
    var index = 6;
    var c = 0;
    while (--index >= 0) {
      c += data[index];
      data[index] = floor$2(c / n);
      c = c % n * 1e7;
    }
  };
  var dataToString = function dataToString(data) {
    var index = 6;
    var s = '';
    while (--index >= 0) {
      if (s !== '' || index === 0 || data[index] !== 0) {
        var t = $String(data[index]);
        s = s === '' ? t : s + repeat$1('0', 7 - t.length) + t;
      }
    }
    return s;
  };
  var FORCED$1 = fails$7(function () {
    return nativeToFixed(0.00008, 3) !== '0.000' || nativeToFixed(0.9, 0) !== '1' || nativeToFixed(1.255, 2) !== '1.25' || nativeToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
  }) || !fails$7(function () {
    // V8 ~ Android 4.3-
    nativeToFixed({});
  });

  // `Number.prototype.toFixed` method
  // https://tc39.es/ecma262/#sec-number.prototype.tofixed
  $$m({
    target: 'Number',
    proto: true,
    forced: FORCED$1
  }, {
    toFixed: function toFixed(fractionDigits) {
      var number = thisNumberValue(this);
      var fractDigits = toIntegerOrInfinity(fractionDigits);
      var data = [0, 0, 0, 0, 0, 0];
      var sign = '';
      var result = '0';
      var e, z, j, k;

      // TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation
      if (fractDigits < 0 || fractDigits > 20) throw new $RangeError$1('Incorrect fraction digits');
      // eslint-disable-next-line no-self-compare -- NaN check
      if (number !== number) return 'NaN';
      if (number <= -1e21 || number >= 1e21) return $String(number);
      if (number < 0) {
        sign = '-';
        number = -number;
      }
      if (number > 1e-21) {
        e = log(number * pow$1(2, 69, 1)) - 69;
        z = e < 0 ? number * pow$1(2, -e, 1) : number / pow$1(2, e, 1);
        z *= 0x10000000000000;
        e = 52 - e;
        if (e > 0) {
          multiply(data, 0, z);
          j = fractDigits;
          while (j >= 7) {
            multiply(data, 1e7, 0);
            j -= 7;
          }
          multiply(data, pow$1(10, j, 1), 0);
          j = e - 1;
          while (j >= 23) {
            divide(data, 1 << 23);
            j -= 23;
          }
          divide(data, 1 << j);
          multiply(data, 1, 1);
          divide(data, 2);
          result = dataToString(data);
        } else {
          multiply(data, 0, z);
          multiply(data, 1 << -e, 0);
          result = dataToString(data) + repeat$1('0', fractDigits);
        }
      }
      if (fractDigits > 0) {
        k = result.length;
        result = sign + (k <= fractDigits ? '0.' + repeat$1('0', fractDigits - k) + result : stringSlice$3(result, 0, k - fractDigits) + '.' + stringSlice$3(result, k - fractDigits));
      } else {
        result = sign + result;
      }
      return result;
    }
  });
  var $$l = _export;
  var fails$6 = fails$Y;
  var getOwnPropertyNames = objectGetOwnPropertyNamesExternal.f;

  // eslint-disable-next-line es/no-object-getownpropertynames -- required for testing
  var FAILS_ON_PRIMITIVES = fails$6(function () {
    return !Object.getOwnPropertyNames(1);
  });

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  $$l({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES
  }, {
    getOwnPropertyNames: getOwnPropertyNames
  });
  var $$k = _export;
  var fails$5 = fails$Y;
  var isObject$4 = isObject$u;
  var classof$1 = classofRaw$2;
  var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;

  // eslint-disable-next-line es/no-object-isfrozen -- safe
  var $isFrozen = Object.isFrozen;
  var FORCED = ARRAY_BUFFER_NON_EXTENSIBLE || fails$5(function () {
    $isFrozen(1);
  });

  // `Object.isFrozen` method
  // https://tc39.es/ecma262/#sec-object.isfrozen
  $$k({
    target: 'Object',
    stat: true,
    forced: FORCED
  }, {
    isFrozen: function isFrozen(it) {
      if (!isObject$4(it)) return true;
      if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$1(it) === 'ArrayBuffer') return true;
      return $isFrozen ? $isFrozen(it) : false;
    }
  });
  var $$j = _export;
  var $parseFloat = numberParseFloat;

  // `parseFloat` method
  // https://tc39.es/ecma262/#sec-parsefloat-string
  $$j({
    global: true,
    forced: parseFloat !== $parseFloat
  }, {
    parseFloat: $parseFloat
  });
  var $$i = _export;
  var repeat = stringRepeat;

  // `String.prototype.repeat` method
  // https://tc39.es/ecma262/#sec-string.prototype.repeat
  $$i({
    target: 'String',
    proto: true
  }, {
    repeat: repeat
  });
  var $$h = _export;
  var uncurryThis$a = functionUncurryThisClause;
  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var toLength = toLength$6;
  var toString$3 = toString$s;
  var notARegExp = notARegexp;
  var requireObjectCoercible$1 = requireObjectCoercible$g;
  var correctIsRegExpLogic = correctIsRegexpLogic;
  var stringSlice$2 = uncurryThis$a(''.slice);
  var min = Math.min;
  var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
  // https://github.com/zloirock/core-js/pull/702
  var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
    var descriptor = getOwnPropertyDescriptor$1(String.prototype, 'startsWith');
    return descriptor && !descriptor.writable;
  }();

  // `String.prototype.startsWith` method
  // https://tc39.es/ecma262/#sec-string.prototype.startswith
  $$h({
    target: 'String',
    proto: true,
    forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
  }, {
    startsWith: function startsWith(searchString /* , position = 0 */) {
      var that = toString$3(requireObjectCoercible$1(this));
      notARegExp(searchString);
      var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
      var search = toString$3(searchString);
      return stringSlice$2(that, index, index + search.length) === search;
    }
  });
  var fails$4 = fails$Y;
  var wellKnownSymbol$1 = wellKnownSymbol$v;
  var DESCRIPTORS$5 = descriptors;
  var IS_PURE = isPure;
  var ITERATOR$1 = wellKnownSymbol$1('iterator');
  var urlConstructorDetection = !fails$4(function () {
    // eslint-disable-next-line unicorn/relative-url-style -- required for testing
    var url = new URL('b?a=1&b=2&c=3', 'http://a');
    var params = url.searchParams;
    var params2 = new URLSearchParams('a=1&a=2&b=3');
    var result = '';
    url.pathname = 'c%20d';
    params.forEach(function (value, key) {
      params['delete']('b');
      result += key + value;
    });
    params2['delete']('a', 2);
    // `undefined` case is a Chromium 117 bug
    // https://bugs.chromium.org/p/v8/issues/detail?id=14222
    params2['delete']('b', undefined);
    return IS_PURE && (!url.toJSON || !params2.has('a', 1) || params2.has('a', 2) || !params2.has('a', undefined) || params2.has('b')) || !params.size && (IS_PURE || !DESCRIPTORS$5) || !params.sort || url.href !== 'http://a/c%20d?a=1&c=3' || params.get('c') !== '3' || String(new URLSearchParams('?a=1')) !== 'a=1' || !params[ITERATOR$1]
    // throws in Edge
    || new URL('https://a@b').username !== 'a' || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1'
    // fails in Chrome 66-
    || result !== 'a1c3'
    // throws in Safari
    || new URL('http://x', undefined).host !== 'x';
  });

  // based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
  var uncurryThis$9 = functionUncurryThis;
  var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
  var base = 36;
  var tMin = 1;
  var tMax = 26;
  var skew = 38;
  var damp = 700;
  var initialBias = 72;
  var initialN = 128; // 0x80
  var delimiter = '-'; // '\x2D'
  var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
  var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
  var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
  var baseMinusTMin = base - tMin;
  var $RangeError = RangeError;
  var exec$1 = uncurryThis$9(regexSeparators.exec);
  var floor$1 = Math.floor;
  var fromCharCode = String.fromCharCode;
  var charCodeAt = uncurryThis$9(''.charCodeAt);
  var join$2 = uncurryThis$9([].join);
  var push$3 = uncurryThis$9([].push);
  var replace$3 = uncurryThis$9(''.replace);
  var split$2 = uncurryThis$9(''.split);
  var toLowerCase$1 = uncurryThis$9(''.toLowerCase);

  /**
   * Creates an array containing the numeric code points of each Unicode
   * character in the string. While JavaScript uses UCS-2 internally,
   * this function will convert a pair of surrogate halves (each of which
   * UCS-2 exposes as separate characters) into a single code point,
   * matching UTF-16.
   */
  var ucs2decode = function ucs2decode(string) {
    var output = [];
    var counter = 0;
    var length = string.length;
    while (counter < length) {
      var value = charCodeAt(string, counter++);
      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        // It's a high surrogate, and there is a next character.
        var extra = charCodeAt(string, counter++);
        if ((extra & 0xFC00) === 0xDC00) {
          // Low surrogate.
          push$3(output, ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          // It's an unmatched surrogate; only append this code unit, in case the
          // next code unit is the high surrogate of a surrogate pair.
          push$3(output, value);
          counter--;
        }
      } else {
        push$3(output, value);
      }
    }
    return output;
  };

  /**
   * Converts a digit/integer into a basic code point.
   */
  var digitToBasic = function digitToBasic(digit) {
    //  0..25 map to ASCII a..z or A..Z
    // 26..35 map to ASCII 0..9
    return digit + 22 + 75 * (digit < 26);
  };

  /**
   * Bias adaptation function as per section 3.4 of RFC 3492.
   * https://tools.ietf.org/html/rfc3492#section-3.4
   */
  var adapt = function adapt(delta, numPoints, firstTime) {
    var k = 0;
    delta = firstTime ? floor$1(delta / damp) : delta >> 1;
    delta += floor$1(delta / numPoints);
    while (delta > baseMinusTMin * tMax >> 1) {
      delta = floor$1(delta / baseMinusTMin);
      k += base;
    }
    return floor$1(k + (baseMinusTMin + 1) * delta / (delta + skew));
  };

  /**
   * Converts a string of Unicode symbols (e.g. a domain name label) to a
   * Punycode string of ASCII-only symbols.
   */
  var encode = function encode(input) {
    var output = [];

    // Convert the input in UCS-2 to an array of Unicode code points.
    input = ucs2decode(input);

    // Cache the length.
    var inputLength = input.length;

    // Initialize the state.
    var n = initialN;
    var delta = 0;
    var bias = initialBias;
    var i, currentValue;

    // Handle the basic code points.
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < 0x80) {
        push$3(output, fromCharCode(currentValue));
      }
    }
    var basicLength = output.length; // number of basic code points.
    var handledCPCount = basicLength; // number of code points that have been handled;

    // Finish the basic string with a delimiter unless it's empty.
    if (basicLength) {
      push$3(output, delimiter);
    }

    // Main encoding loop:
    while (handledCPCount < inputLength) {
      // All non-basic code points < n have been handled already. Find the next larger one:
      var m = maxInt;
      for (i = 0; i < input.length; i++) {
        currentValue = input[i];
        if (currentValue >= n && currentValue < m) {
          m = currentValue;
        }
      }

      // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
      var handledCPCountPlusOne = handledCPCount + 1;
      if (m - n > floor$1((maxInt - delta) / handledCPCountPlusOne)) {
        throw new $RangeError(OVERFLOW_ERROR);
      }
      delta += (m - n) * handledCPCountPlusOne;
      n = m;
      for (i = 0; i < input.length; i++) {
        currentValue = input[i];
        if (currentValue < n && ++delta > maxInt) {
          throw new $RangeError(OVERFLOW_ERROR);
        }
        if (currentValue === n) {
          // Represent delta as a generalized variable-length integer.
          var q = delta;
          var k = base;
          while (true) {
            var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
            if (q < t) break;
            var qMinusT = q - t;
            var baseMinusT = base - t;
            push$3(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
            q = floor$1(qMinusT / baseMinusT);
            k += base;
          }
          push$3(output, fromCharCode(digitToBasic(q)));
          bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
          delta = 0;
          handledCPCount++;
        }
      }
      delta++;
      n++;
    }
    return join$2(output, '');
  };
  var stringPunycodeToAscii = function stringPunycodeToAscii(input) {
    var encoded = [];
    var labels = split$2(replace$3(toLowerCase$1(input), regexSeparators, "."), '.');
    var i, label;
    for (i = 0; i < labels.length; i++) {
      label = labels[i];
      push$3(encoded, exec$1(regexNonASCII, label) ? 'xn--' + encode(label) : label);
    }
    return join$2(encoded, '.');
  };

  // TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

  var $$g = _export;
  var global$5 = global$J;
  var safeGetBuiltIn = safeGetBuiltIn$2;
  var call$2 = functionCall;
  var uncurryThis$8 = functionUncurryThis;
  var DESCRIPTORS$4 = descriptors;
  var USE_NATIVE_URL$1 = urlConstructorDetection;
  var defineBuiltIn$3 = defineBuiltIn$l;
  var defineBuiltInAccessor$3 = defineBuiltInAccessor$e;
  var defineBuiltIns$2 = defineBuiltIns$5;
  var setToStringTag$1 = setToStringTag$d;
  var createIteratorConstructor = iteratorCreateConstructor;
  var InternalStateModule$2 = internalState;
  var anInstance$2 = anInstance$9;
  var isCallable = isCallable$v;
  var hasOwn$2 = hasOwnProperty_1;
  var bind$1 = functionBindContext;
  var classof = classof$f;
  var anObject$5 = anObject$D;
  var isObject$3 = isObject$u;
  var $toString$1 = toString$s;
  var create = objectCreate;
  var createPropertyDescriptor$1 = createPropertyDescriptor$a;
  var getIterator = getIterator$3;
  var getIteratorMethod = getIteratorMethod$4;
  var createIterResultObject = createIterResultObject$5;
  var validateArgumentsLength$3 = validateArgumentsLength$7;
  var wellKnownSymbol = wellKnownSymbol$v;
  var arraySort = arraySort$1;
  var ITERATOR = wellKnownSymbol('iterator');
  var URL_SEARCH_PARAMS = 'URLSearchParams';
  var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
  var setInternalState$2 = InternalStateModule$2.set;
  var getInternalParamsState = InternalStateModule$2.getterFor(URL_SEARCH_PARAMS);
  var getInternalIteratorState = InternalStateModule$2.getterFor(URL_SEARCH_PARAMS_ITERATOR);
  var nativeFetch = safeGetBuiltIn('fetch');
  var NativeRequest = safeGetBuiltIn('Request');
  var Headers = safeGetBuiltIn('Headers');
  var RequestPrototype = NativeRequest && NativeRequest.prototype;
  var HeadersPrototype = Headers && Headers.prototype;
  var RegExp$1 = global$5.RegExp;
  var TypeError$2 = global$5.TypeError;
  var decodeURIComponent$1 = global$5.decodeURIComponent;
  var encodeURIComponent$1 = global$5.encodeURIComponent;
  var charAt$1 = uncurryThis$8(''.charAt);
  var join$1 = uncurryThis$8([].join);
  var push$2 = uncurryThis$8([].push);
  var replace$2 = uncurryThis$8(''.replace);
  var shift$1 = uncurryThis$8([].shift);
  var splice$1 = uncurryThis$8([].splice);
  var split$1 = uncurryThis$8(''.split);
  var stringSlice$1 = uncurryThis$8(''.slice);
  var plus = /\+/g;
  var sequences = Array(4);
  var percentSequence = function percentSequence(bytes) {
    return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp$1('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
  };
  var percentDecode = function percentDecode(sequence) {
    try {
      return decodeURIComponent$1(sequence);
    } catch (error) {
      return sequence;
    }
  };
  var deserialize = function deserialize(it) {
    var result = replace$2(it, plus, ' ');
    var bytes = 4;
    try {
      return decodeURIComponent$1(result);
    } catch (error) {
      while (bytes) {
        result = replace$2(result, percentSequence(bytes--), percentDecode);
      }
      return result;
    }
  };
  var find$1 = /[!'()~]|%20/g;
  var replacements = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+'
  };
  var replacer = function replacer(match) {
    return replacements[match];
  };
  var _serialize = function serialize(it) {
    return replace$2(encodeURIComponent$1(it), find$1, replacer);
  };
  var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
    setInternalState$2(this, {
      type: URL_SEARCH_PARAMS_ITERATOR,
      target: getInternalParamsState(params).entries,
      index: 0,
      kind: kind
    });
  }, URL_SEARCH_PARAMS, function next() {
    var state = getInternalIteratorState(this);
    var target = state.target;
    var index = state.index++;
    if (!target || index >= target.length) {
      state.target = undefined;
      return createIterResultObject(undefined, true);
    }
    var entry = target[index];
    switch (state.kind) {
      case 'keys':
        return createIterResultObject(entry.key, false);
      case 'values':
        return createIterResultObject(entry.value, false);
    }
    return createIterResultObject([entry.key, entry.value], false);
  }, true);
  var URLSearchParamsState = function URLSearchParamsState(init) {
    this.entries = [];
    this.url = null;
    if (init !== undefined) {
      if (isObject$3(init)) this.parseObject(init);else this.parseQuery(typeof init == 'string' ? charAt$1(init, 0) === '?' ? stringSlice$1(init, 1) : init : $toString$1(init));
    }
  };
  URLSearchParamsState.prototype = {
    type: URL_SEARCH_PARAMS,
    bindURL: function bindURL(url) {
      this.url = url;
      this.update();
    },
    parseObject: function parseObject(object) {
      var entries = this.entries;
      var iteratorMethod = getIteratorMethod(object);
      var iterator, next, step, entryIterator, entryNext, first, second;
      if (iteratorMethod) {
        iterator = getIterator(object, iteratorMethod);
        next = iterator.next;
        while (!(step = call$2(next, iterator)).done) {
          entryIterator = getIterator(anObject$5(step.value));
          entryNext = entryIterator.next;
          if ((first = call$2(entryNext, entryIterator)).done || (second = call$2(entryNext, entryIterator)).done || !call$2(entryNext, entryIterator).done) throw new TypeError$2('Expected sequence with length 2');
          push$2(entries, {
            key: $toString$1(first.value),
            value: $toString$1(second.value)
          });
        }
      } else for (var key in object) if (hasOwn$2(object, key)) {
        push$2(entries, {
          key: key,
          value: $toString$1(object[key])
        });
      }
    },
    parseQuery: function parseQuery(query) {
      if (query) {
        var entries = this.entries;
        var attributes = split$1(query, '&');
        var index = 0;
        var attribute, entry;
        while (index < attributes.length) {
          attribute = attributes[index++];
          if (attribute.length) {
            entry = split$1(attribute, '=');
            push$2(entries, {
              key: deserialize(shift$1(entry)),
              value: deserialize(join$1(entry, '='))
            });
          }
        }
      }
    },
    serialize: function serialize() {
      var entries = this.entries;
      var result = [];
      var index = 0;
      var entry;
      while (index < entries.length) {
        entry = entries[index++];
        push$2(result, _serialize(entry.key) + '=' + _serialize(entry.value));
      }
      return join$1(result, '&');
    },
    update: function update() {
      this.entries.length = 0;
      this.parseQuery(this.url.query);
    },
    updateURL: function updateURL() {
      if (this.url) this.url.update();
    }
  };

  // `URLSearchParams` constructor
  // https://url.spec.whatwg.org/#interface-urlsearchparams
  var URLSearchParamsConstructor = function URLSearchParams( /* init */
  ) {
    anInstance$2(this, URLSearchParamsPrototype$3);
    var init = arguments.length > 0 ? arguments[0] : undefined;
    var state = setInternalState$2(this, new URLSearchParamsState(init));
    if (!DESCRIPTORS$4) this.size = state.entries.length;
  };
  var URLSearchParamsPrototype$3 = URLSearchParamsConstructor.prototype;
  defineBuiltIns$2(URLSearchParamsPrototype$3, {
    // `URLSearchParams.prototype.append` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-append
    append: function append(name, value) {
      var state = getInternalParamsState(this);
      validateArgumentsLength$3(arguments.length, 2);
      push$2(state.entries, {
        key: $toString$1(name),
        value: $toString$1(value)
      });
      if (!DESCRIPTORS$4) this.length++;
      state.updateURL();
    },
    // `URLSearchParams.prototype.delete` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
    'delete': function _delete(name /* , value */) {
      var state = getInternalParamsState(this);
      var length = validateArgumentsLength$3(arguments.length, 1);
      var entries = state.entries;
      var key = $toString$1(name);
      var $value = length < 2 ? undefined : arguments[1];
      var value = $value === undefined ? $value : $toString$1($value);
      var index = 0;
      while (index < entries.length) {
        var entry = entries[index];
        if (entry.key === key && (value === undefined || entry.value === value)) {
          splice$1(entries, index, 1);
          if (value !== undefined) break;
        } else index++;
      }
      if (!DESCRIPTORS$4) this.size = entries.length;
      state.updateURL();
    },
    // `URLSearchParams.prototype.get` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-get
    get: function get(name) {
      var entries = getInternalParamsState(this).entries;
      validateArgumentsLength$3(arguments.length, 1);
      var key = $toString$1(name);
      var index = 0;
      for (; index < entries.length; index++) {
        if (entries[index].key === key) return entries[index].value;
      }
      return null;
    },
    // `URLSearchParams.prototype.getAll` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
    getAll: function getAll(name) {
      var entries = getInternalParamsState(this).entries;
      validateArgumentsLength$3(arguments.length, 1);
      var key = $toString$1(name);
      var result = [];
      var index = 0;
      for (; index < entries.length; index++) {
        if (entries[index].key === key) push$2(result, entries[index].value);
      }
      return result;
    },
    // `URLSearchParams.prototype.has` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-has
    has: function has(name /* , value */) {
      var entries = getInternalParamsState(this).entries;
      var length = validateArgumentsLength$3(arguments.length, 1);
      var key = $toString$1(name);
      var $value = length < 2 ? undefined : arguments[1];
      var value = $value === undefined ? $value : $toString$1($value);
      var index = 0;
      while (index < entries.length) {
        var entry = entries[index++];
        if (entry.key === key && (value === undefined || entry.value === value)) return true;
      }
      return false;
    },
    // `URLSearchParams.prototype.set` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-set
    set: function set(name, value) {
      var state = getInternalParamsState(this);
      validateArgumentsLength$3(arguments.length, 1);
      var entries = state.entries;
      var found = false;
      var key = $toString$1(name);
      var val = $toString$1(value);
      var index = 0;
      var entry;
      for (; index < entries.length; index++) {
        entry = entries[index];
        if (entry.key === key) {
          if (found) splice$1(entries, index--, 1);else {
            found = true;
            entry.value = val;
          }
        }
      }
      if (!found) push$2(entries, {
        key: key,
        value: val
      });
      if (!DESCRIPTORS$4) this.size = entries.length;
      state.updateURL();
    },
    // `URLSearchParams.prototype.sort` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
    sort: function sort() {
      var state = getInternalParamsState(this);
      arraySort(state.entries, function (a, b) {
        return a.key > b.key ? 1 : -1;
      });
      state.updateURL();
    },
    // `URLSearchParams.prototype.forEach` method
    forEach: function forEach(callback /* , thisArg */) {
      var entries = getInternalParamsState(this).entries;
      var boundFunction = bind$1(callback, arguments.length > 1 ? arguments[1] : undefined);
      var index = 0;
      var entry;
      while (index < entries.length) {
        entry = entries[index++];
        boundFunction(entry.value, entry.key, this);
      }
    },
    // `URLSearchParams.prototype.keys` method
    keys: function keys() {
      return new URLSearchParamsIterator(this, 'keys');
    },
    // `URLSearchParams.prototype.values` method
    values: function values() {
      return new URLSearchParamsIterator(this, 'values');
    },
    // `URLSearchParams.prototype.entries` method
    entries: function entries() {
      return new URLSearchParamsIterator(this, 'entries');
    }
  }, {
    enumerable: true
  });

  // `URLSearchParams.prototype[@@iterator]` method
  defineBuiltIn$3(URLSearchParamsPrototype$3, ITERATOR, URLSearchParamsPrototype$3.entries, {
    name: 'entries'
  });

  // `URLSearchParams.prototype.toString` method
  // https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
  defineBuiltIn$3(URLSearchParamsPrototype$3, 'toString', function toString() {
    return getInternalParamsState(this).serialize();
  }, {
    enumerable: true
  });

  // `URLSearchParams.prototype.size` getter
  // https://github.com/whatwg/url/pull/734
  if (DESCRIPTORS$4) defineBuiltInAccessor$3(URLSearchParamsPrototype$3, 'size', {
    get: function size() {
      return getInternalParamsState(this).entries.length;
    },
    configurable: true,
    enumerable: true
  });
  setToStringTag$1(URLSearchParamsConstructor, URL_SEARCH_PARAMS);
  $$g({
    global: true,
    constructor: true,
    forced: !USE_NATIVE_URL$1
  }, {
    URLSearchParams: URLSearchParamsConstructor
  });

  // Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
  if (!USE_NATIVE_URL$1 && isCallable(Headers)) {
    var headersHas = uncurryThis$8(HeadersPrototype.has);
    var headersSet = uncurryThis$8(HeadersPrototype.set);
    var wrapRequestOptions = function wrapRequestOptions(init) {
      if (isObject$3(init)) {
        var body = init.body;
        var headers;
        if (classof(body) === URL_SEARCH_PARAMS) {
          headers = init.headers ? new Headers(init.headers) : new Headers();
          if (!headersHas(headers, 'content-type')) {
            headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
          }
          return create(init, {
            body: createPropertyDescriptor$1(0, $toString$1(body)),
            headers: createPropertyDescriptor$1(0, headers)
          });
        }
      }
      return init;
    };
    if (isCallable(nativeFetch)) {
      $$g({
        global: true,
        enumerable: true,
        dontCallGetSet: true,
        forced: true
      }, {
        fetch: function fetch(input /* , init */) {
          return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
        }
      });
    }
    if (isCallable(NativeRequest)) {
      var RequestConstructor = function Request(input /* , init */) {
        anInstance$2(this, RequestPrototype);
        return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
      };
      RequestPrototype.constructor = RequestConstructor;
      RequestConstructor.prototype = RequestPrototype;
      $$g({
        global: true,
        constructor: true,
        dontCallGetSet: true,
        forced: true
      }, {
        Request: RequestConstructor
      });
    }
  }
  var web_urlSearchParams_constructor = {
    URLSearchParams: URLSearchParamsConstructor,
    getState: getInternalParamsState
  };

  // TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

  var $$f = _export;
  var DESCRIPTORS$3 = descriptors;
  var USE_NATIVE_URL = urlConstructorDetection;
  var global$4 = global$J;
  var bind = functionBindContext;
  var uncurryThis$7 = functionUncurryThis;
  var defineBuiltIn$2 = defineBuiltIn$l;
  var defineBuiltInAccessor$2 = defineBuiltInAccessor$e;
  var anInstance$1 = anInstance$9;
  var hasOwn$1 = hasOwnProperty_1;
  var assign = objectAssign;
  var arrayFrom = arrayFrom$1;
  var arraySlice = arraySlice$7;
  var codeAt = stringMultibyte.codeAt;
  var toASCII = stringPunycodeToAscii;
  var $toString = toString$s;
  var setToStringTag = setToStringTag$d;
  var validateArgumentsLength$2 = validateArgumentsLength$7;
  var URLSearchParamsModule = web_urlSearchParams_constructor;
  var InternalStateModule$1 = internalState;
  var setInternalState$1 = InternalStateModule$1.set;
  var getInternalURLState = InternalStateModule$1.getterFor('URL');
  var URLSearchParams$1 = URLSearchParamsModule.URLSearchParams;
  var getInternalSearchParamsState = URLSearchParamsModule.getState;
  var NativeURL = global$4.URL;
  var TypeError$1 = global$4.TypeError;
  var parseInt$1 = global$4.parseInt;
  var floor = Math.floor;
  var pow = Math.pow;
  var charAt = uncurryThis$7(''.charAt);
  var exec = uncurryThis$7(/./.exec);
  var join = uncurryThis$7([].join);
  var numberToString = uncurryThis$7(1.0.toString);
  var pop = uncurryThis$7([].pop);
  var push$1 = uncurryThis$7([].push);
  var replace$1 = uncurryThis$7(''.replace);
  var shift = uncurryThis$7([].shift);
  var split = uncurryThis$7(''.split);
  var stringSlice = uncurryThis$7(''.slice);
  var toLowerCase = uncurryThis$7(''.toLowerCase);
  var unshift = uncurryThis$7([].unshift);
  var INVALID_AUTHORITY = 'Invalid authority';
  var INVALID_SCHEME = 'Invalid scheme';
  var INVALID_HOST = 'Invalid host';
  var INVALID_PORT = 'Invalid port';
  var ALPHA = /[a-z]/i;
  // eslint-disable-next-line regexp/no-obscure-range -- safe
  var ALPHANUMERIC = /[\d+-.a-z]/i;
  var DIGIT = /\d/;
  var HEX_START = /^0x/i;
  var OCT = /^[0-7]+$/;
  var DEC = /^\d+$/;
  var HEX = /^[\da-f]+$/i;
  /* eslint-disable regexp/no-control-character -- safe */
  var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
  var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
  var LEADING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+/;
  var TRAILING_C0_CONTROL_OR_SPACE = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
  var TAB_AND_NEW_LINE = /[\t\n\r]/g;
  /* eslint-enable regexp/no-control-character -- safe */
  var EOF;

  // https://url.spec.whatwg.org/#ipv4-number-parser
  var parseIPv4 = function parseIPv4(input) {
    var parts = split(input, '.');
    var partsLength, numbers, index, part, radix, number, ipv4;
    if (parts.length && parts[parts.length - 1] === '') {
      parts.length--;
    }
    partsLength = parts.length;
    if (partsLength > 4) return input;
    numbers = [];
    for (index = 0; index < partsLength; index++) {
      part = parts[index];
      if (part === '') return input;
      radix = 10;
      if (part.length > 1 && charAt(part, 0) === '0') {
        radix = exec(HEX_START, part) ? 16 : 8;
        part = stringSlice(part, radix === 8 ? 1 : 2);
      }
      if (part === '') {
        number = 0;
      } else {
        if (!exec(radix === 10 ? DEC : radix === 8 ? OCT : HEX, part)) return input;
        number = parseInt$1(part, radix);
      }
      push$1(numbers, number);
    }
    for (index = 0; index < partsLength; index++) {
      number = numbers[index];
      if (index === partsLength - 1) {
        if (number >= pow(256, 5 - partsLength)) return null;
      } else if (number > 255) return null;
    }
    ipv4 = pop(numbers);
    for (index = 0; index < numbers.length; index++) {
      ipv4 += numbers[index] * pow(256, 3 - index);
    }
    return ipv4;
  };

  // https://url.spec.whatwg.org/#concept-ipv6-parser
  // eslint-disable-next-line max-statements -- TODO
  var parseIPv6 = function parseIPv6(input) {
    var address = [0, 0, 0, 0, 0, 0, 0, 0];
    var pieceIndex = 0;
    var compress = null;
    var pointer = 0;
    var value, length, numbersSeen, ipv4Piece, number, swaps, swap;
    var chr = function chr() {
      return charAt(input, pointer);
    };
    if (chr() === ':') {
      if (charAt(input, 1) !== ':') return;
      pointer += 2;
      pieceIndex++;
      compress = pieceIndex;
    }
    while (chr()) {
      if (pieceIndex === 8) return;
      if (chr() === ':') {
        if (compress !== null) return;
        pointer++;
        pieceIndex++;
        compress = pieceIndex;
        continue;
      }
      value = length = 0;
      while (length < 4 && exec(HEX, chr())) {
        value = value * 16 + parseInt$1(chr(), 16);
        pointer++;
        length++;
      }
      if (chr() === '.') {
        if (length === 0) return;
        pointer -= length;
        if (pieceIndex > 6) return;
        numbersSeen = 0;
        while (chr()) {
          ipv4Piece = null;
          if (numbersSeen > 0) {
            if (chr() === '.' && numbersSeen < 4) pointer++;else return;
          }
          if (!exec(DIGIT, chr())) return;
          while (exec(DIGIT, chr())) {
            number = parseInt$1(chr(), 10);
            if (ipv4Piece === null) ipv4Piece = number;else if (ipv4Piece === 0) return;else ipv4Piece = ipv4Piece * 10 + number;
            if (ipv4Piece > 255) return;
            pointer++;
          }
          address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
          numbersSeen++;
          if (numbersSeen === 2 || numbersSeen === 4) pieceIndex++;
        }
        if (numbersSeen !== 4) return;
        break;
      } else if (chr() === ':') {
        pointer++;
        if (!chr()) return;
      } else if (chr()) return;
      address[pieceIndex++] = value;
    }
    if (compress !== null) {
      swaps = pieceIndex - compress;
      pieceIndex = 7;
      while (pieceIndex !== 0 && swaps > 0) {
        swap = address[pieceIndex];
        address[pieceIndex--] = address[compress + swaps - 1];
        address[compress + --swaps] = swap;
      }
    } else if (pieceIndex !== 8) return;
    return address;
  };
  var findLongestZeroSequence = function findLongestZeroSequence(ipv6) {
    var maxIndex = null;
    var maxLength = 1;
    var currStart = null;
    var currLength = 0;
    var index = 0;
    for (; index < 8; index++) {
      if (ipv6[index] !== 0) {
        if (currLength > maxLength) {
          maxIndex = currStart;
          maxLength = currLength;
        }
        currStart = null;
        currLength = 0;
      } else {
        if (currStart === null) currStart = index;
        ++currLength;
      }
    }
    if (currLength > maxLength) {
      maxIndex = currStart;
      maxLength = currLength;
    }
    return maxIndex;
  };

  // https://url.spec.whatwg.org/#host-serializing
  var serializeHost = function serializeHost(host) {
    var result, index, compress, ignore0;
    // ipv4
    if (typeof host == 'number') {
      result = [];
      for (index = 0; index < 4; index++) {
        unshift(result, host % 256);
        host = floor(host / 256);
      }
      return join(result, '.');
      // ipv6
    } else if (typeof host == 'object') {
      result = '';
      compress = findLongestZeroSequence(host);
      for (index = 0; index < 8; index++) {
        if (ignore0 && host[index] === 0) continue;
        if (ignore0) ignore0 = false;
        if (compress === index) {
          result += index ? ':' : '::';
          ignore0 = true;
        } else {
          result += numberToString(host[index], 16);
          if (index < 7) result += ':';
        }
      }
      return '[' + result + ']';
    }
    return host;
  };
  var C0ControlPercentEncodeSet = {};
  var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
    ' ': 1,
    '"': 1,
    '<': 1,
    '>': 1,
    '`': 1
  });
  var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
    '#': 1,
    '?': 1,
    '{': 1,
    '}': 1
  });
  var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
    '/': 1,
    ':': 1,
    ';': 1,
    '=': 1,
    '@': 1,
    '[': 1,
    '\\': 1,
    ']': 1,
    '^': 1,
    '|': 1
  });
  var percentEncode = function percentEncode(chr, set) {
    var code = codeAt(chr, 0);
    return code > 0x20 && code < 0x7F && !hasOwn$1(set, chr) ? chr : encodeURIComponent(chr);
  };

  // https://url.spec.whatwg.org/#special-scheme
  var specialSchemes = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
  };

  // https://url.spec.whatwg.org/#windows-drive-letter
  var isWindowsDriveLetter = function isWindowsDriveLetter(string, normalized) {
    var second;
    return string.length === 2 && exec(ALPHA, charAt(string, 0)) && ((second = charAt(string, 1)) === ':' || !normalized && second === '|');
  };

  // https://url.spec.whatwg.org/#start-with-a-windows-drive-letter
  var startsWithWindowsDriveLetter = function startsWithWindowsDriveLetter(string) {
    var third;
    return string.length > 1 && isWindowsDriveLetter(stringSlice(string, 0, 2)) && (string.length === 2 || (third = charAt(string, 2)) === '/' || third === '\\' || third === '?' || third === '#');
  };

  // https://url.spec.whatwg.org/#single-dot-path-segment
  var isSingleDot = function isSingleDot(segment) {
    return segment === '.' || toLowerCase(segment) === '%2e';
  };

  // https://url.spec.whatwg.org/#double-dot-path-segment
  var isDoubleDot = function isDoubleDot(segment) {
    segment = toLowerCase(segment);
    return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
  };

  // States:
  var SCHEME_START = {};
  var SCHEME = {};
  var NO_SCHEME = {};
  var SPECIAL_RELATIVE_OR_AUTHORITY = {};
  var PATH_OR_AUTHORITY = {};
  var RELATIVE = {};
  var RELATIVE_SLASH = {};
  var SPECIAL_AUTHORITY_SLASHES = {};
  var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
  var AUTHORITY = {};
  var HOST = {};
  var HOSTNAME = {};
  var PORT = {};
  var FILE = {};
  var FILE_SLASH = {};
  var FILE_HOST = {};
  var PATH_START = {};
  var PATH = {};
  var CANNOT_BE_A_BASE_URL_PATH = {};
  var QUERY = {};
  var FRAGMENT = {};
  var URLState = function URLState(url, isBase, base) {
    var urlString = $toString(url);
    var baseState, failure, searchParams;
    if (isBase) {
      failure = this.parse(urlString);
      if (failure) throw new TypeError$1(failure);
      this.searchParams = null;
    } else {
      if (base !== undefined) baseState = new URLState(base, true);
      failure = this.parse(urlString, null, baseState);
      if (failure) throw new TypeError$1(failure);
      searchParams = getInternalSearchParamsState(new URLSearchParams$1());
      searchParams.bindURL(this);
      this.searchParams = searchParams;
    }
  };
  URLState.prototype = {
    type: 'URL',
    // https://url.spec.whatwg.org/#url-parsing
    // eslint-disable-next-line max-statements -- TODO
    parse: function parse(input, stateOverride, base) {
      var url = this;
      var state = stateOverride || SCHEME_START;
      var pointer = 0;
      var buffer = '';
      var seenAt = false;
      var seenBracket = false;
      var seenPasswordToken = false;
      var codePoints, chr, bufferCodePoints, failure;
      input = $toString(input);
      if (!stateOverride) {
        url.scheme = '';
        url.username = '';
        url.password = '';
        url.host = null;
        url.port = null;
        url.path = [];
        url.query = null;
        url.fragment = null;
        url.cannotBeABaseURL = false;
        input = replace$1(input, LEADING_C0_CONTROL_OR_SPACE, '');
        input = replace$1(input, TRAILING_C0_CONTROL_OR_SPACE, '$1');
      }
      input = replace$1(input, TAB_AND_NEW_LINE, '');
      codePoints = arrayFrom(input);
      while (pointer <= codePoints.length) {
        chr = codePoints[pointer];
        switch (state) {
          case SCHEME_START:
            if (chr && exec(ALPHA, chr)) {
              buffer += toLowerCase(chr);
              state = SCHEME;
            } else if (!stateOverride) {
              state = NO_SCHEME;
              continue;
            } else return INVALID_SCHEME;
            break;
          case SCHEME:
            if (chr && (exec(ALPHANUMERIC, chr) || chr === '+' || chr === '-' || chr === '.')) {
              buffer += toLowerCase(chr);
            } else if (chr === ':') {
              if (stateOverride && (url.isSpecial() !== hasOwn$1(specialSchemes, buffer) || buffer === 'file' && (url.includesCredentials() || url.port !== null) || url.scheme === 'file' && !url.host)) return;
              url.scheme = buffer;
              if (stateOverride) {
                if (url.isSpecial() && specialSchemes[url.scheme] === url.port) url.port = null;
                return;
              }
              buffer = '';
              if (url.scheme === 'file') {
                state = FILE;
              } else if (url.isSpecial() && base && base.scheme === url.scheme) {
                state = SPECIAL_RELATIVE_OR_AUTHORITY;
              } else if (url.isSpecial()) {
                state = SPECIAL_AUTHORITY_SLASHES;
              } else if (codePoints[pointer + 1] === '/') {
                state = PATH_OR_AUTHORITY;
                pointer++;
              } else {
                url.cannotBeABaseURL = true;
                push$1(url.path, '');
                state = CANNOT_BE_A_BASE_URL_PATH;
              }
            } else if (!stateOverride) {
              buffer = '';
              state = NO_SCHEME;
              pointer = 0;
              continue;
            } else return INVALID_SCHEME;
            break;
          case NO_SCHEME:
            if (!base || base.cannotBeABaseURL && chr !== '#') return INVALID_SCHEME;
            if (base.cannotBeABaseURL && chr === '#') {
              url.scheme = base.scheme;
              url.path = arraySlice(base.path);
              url.query = base.query;
              url.fragment = '';
              url.cannotBeABaseURL = true;
              state = FRAGMENT;
              break;
            }
            state = base.scheme === 'file' ? FILE : RELATIVE;
            continue;
          case SPECIAL_RELATIVE_OR_AUTHORITY:
            if (chr === '/' && codePoints[pointer + 1] === '/') {
              state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
              pointer++;
            } else {
              state = RELATIVE;
              continue;
            }
            break;
          case PATH_OR_AUTHORITY:
            if (chr === '/') {
              state = AUTHORITY;
              break;
            } else {
              state = PATH;
              continue;
            }
          case RELATIVE:
            url.scheme = base.scheme;
            if (chr === EOF) {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              url.path = arraySlice(base.path);
              url.query = base.query;
            } else if (chr === '/' || chr === '\\' && url.isSpecial()) {
              state = RELATIVE_SLASH;
            } else if (chr === '?') {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              url.path = arraySlice(base.path);
              url.query = '';
              state = QUERY;
            } else if (chr === '#') {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              url.path = arraySlice(base.path);
              url.query = base.query;
              url.fragment = '';
              state = FRAGMENT;
            } else {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              url.path = arraySlice(base.path);
              url.path.length--;
              state = PATH;
              continue;
            }
            break;
          case RELATIVE_SLASH:
            if (url.isSpecial() && (chr === '/' || chr === '\\')) {
              state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
            } else if (chr === '/') {
              state = AUTHORITY;
            } else {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              state = PATH;
              continue;
            }
            break;
          case SPECIAL_AUTHORITY_SLASHES:
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
            if (chr !== '/' || charAt(buffer, pointer + 1) !== '/') continue;
            pointer++;
            break;
          case SPECIAL_AUTHORITY_IGNORE_SLASHES:
            if (chr !== '/' && chr !== '\\') {
              state = AUTHORITY;
              continue;
            }
            break;
          case AUTHORITY:
            if (chr === '@') {
              if (seenAt) buffer = '%40' + buffer;
              seenAt = true;
              bufferCodePoints = arrayFrom(buffer);
              for (var i = 0; i < bufferCodePoints.length; i++) {
                var codePoint = bufferCodePoints[i];
                if (codePoint === ':' && !seenPasswordToken) {
                  seenPasswordToken = true;
                  continue;
                }
                var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
                if (seenPasswordToken) url.password += encodedCodePoints;else url.username += encodedCodePoints;
              }
              buffer = '';
            } else if (chr === EOF || chr === '/' || chr === '?' || chr === '#' || chr === '\\' && url.isSpecial()) {
              if (seenAt && buffer === '') return INVALID_AUTHORITY;
              pointer -= arrayFrom(buffer).length + 1;
              buffer = '';
              state = HOST;
            } else buffer += chr;
            break;
          case HOST:
          case HOSTNAME:
            if (stateOverride && url.scheme === 'file') {
              state = FILE_HOST;
              continue;
            } else if (chr === ':' && !seenBracket) {
              if (buffer === '') return INVALID_HOST;
              failure = url.parseHost(buffer);
              if (failure) return failure;
              buffer = '';
              state = PORT;
              if (stateOverride === HOSTNAME) return;
            } else if (chr === EOF || chr === '/' || chr === '?' || chr === '#' || chr === '\\' && url.isSpecial()) {
              if (url.isSpecial() && buffer === '') return INVALID_HOST;
              if (stateOverride && buffer === '' && (url.includesCredentials() || url.port !== null)) return;
              failure = url.parseHost(buffer);
              if (failure) return failure;
              buffer = '';
              state = PATH_START;
              if (stateOverride) return;
              continue;
            } else {
              if (chr === '[') seenBracket = true;else if (chr === ']') seenBracket = false;
              buffer += chr;
            }
            break;
          case PORT:
            if (exec(DIGIT, chr)) {
              buffer += chr;
            } else if (chr === EOF || chr === '/' || chr === '?' || chr === '#' || chr === '\\' && url.isSpecial() || stateOverride) {
              if (buffer !== '') {
                var port = parseInt$1(buffer, 10);
                if (port > 0xFFFF) return INVALID_PORT;
                url.port = url.isSpecial() && port === specialSchemes[url.scheme] ? null : port;
                buffer = '';
              }
              if (stateOverride) return;
              state = PATH_START;
              continue;
            } else return INVALID_PORT;
            break;
          case FILE:
            url.scheme = 'file';
            if (chr === '/' || chr === '\\') state = FILE_SLASH;else if (base && base.scheme === 'file') {
              switch (chr) {
                case EOF:
                  url.host = base.host;
                  url.path = arraySlice(base.path);
                  url.query = base.query;
                  break;
                case '?':
                  url.host = base.host;
                  url.path = arraySlice(base.path);
                  url.query = '';
                  state = QUERY;
                  break;
                case '#':
                  url.host = base.host;
                  url.path = arraySlice(base.path);
                  url.query = base.query;
                  url.fragment = '';
                  state = FRAGMENT;
                  break;
                default:
                  if (!startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
                    url.host = base.host;
                    url.path = arraySlice(base.path);
                    url.shortenPath();
                  }
                  state = PATH;
                  continue;
              }
            } else {
              state = PATH;
              continue;
            }
            break;
          case FILE_SLASH:
            if (chr === '/' || chr === '\\') {
              state = FILE_HOST;
              break;
            }
            if (base && base.scheme === 'file' && !startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
              if (isWindowsDriveLetter(base.path[0], true)) push$1(url.path, base.path[0]);else url.host = base.host;
            }
            state = PATH;
            continue;
          case FILE_HOST:
            if (chr === EOF || chr === '/' || chr === '\\' || chr === '?' || chr === '#') {
              if (!stateOverride && isWindowsDriveLetter(buffer)) {
                state = PATH;
              } else if (buffer === '') {
                url.host = '';
                if (stateOverride) return;
                state = PATH_START;
              } else {
                failure = url.parseHost(buffer);
                if (failure) return failure;
                if (url.host === 'localhost') url.host = '';
                if (stateOverride) return;
                buffer = '';
                state = PATH_START;
              }
              continue;
            } else buffer += chr;
            break;
          case PATH_START:
            if (url.isSpecial()) {
              state = PATH;
              if (chr !== '/' && chr !== '\\') continue;
            } else if (!stateOverride && chr === '?') {
              url.query = '';
              state = QUERY;
            } else if (!stateOverride && chr === '#') {
              url.fragment = '';
              state = FRAGMENT;
            } else if (chr !== EOF) {
              state = PATH;
              if (chr !== '/') continue;
            }
            break;
          case PATH:
            if (chr === EOF || chr === '/' || chr === '\\' && url.isSpecial() || !stateOverride && (chr === '?' || chr === '#')) {
              if (isDoubleDot(buffer)) {
                url.shortenPath();
                if (chr !== '/' && !(chr === '\\' && url.isSpecial())) {
                  push$1(url.path, '');
                }
              } else if (isSingleDot(buffer)) {
                if (chr !== '/' && !(chr === '\\' && url.isSpecial())) {
                  push$1(url.path, '');
                }
              } else {
                if (url.scheme === 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                  if (url.host) url.host = '';
                  buffer = charAt(buffer, 0) + ':'; // normalize windows drive letter
                }
                push$1(url.path, buffer);
              }
              buffer = '';
              if (url.scheme === 'file' && (chr === EOF || chr === '?' || chr === '#')) {
                while (url.path.length > 1 && url.path[0] === '') {
                  shift(url.path);
                }
              }
              if (chr === '?') {
                url.query = '';
                state = QUERY;
              } else if (chr === '#') {
                url.fragment = '';
                state = FRAGMENT;
              }
            } else {
              buffer += percentEncode(chr, pathPercentEncodeSet);
            }
            break;
          case CANNOT_BE_A_BASE_URL_PATH:
            if (chr === '?') {
              url.query = '';
              state = QUERY;
            } else if (chr === '#') {
              url.fragment = '';
              state = FRAGMENT;
            } else if (chr !== EOF) {
              url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);
            }
            break;
          case QUERY:
            if (!stateOverride && chr === '#') {
              url.fragment = '';
              state = FRAGMENT;
            } else if (chr !== EOF) {
              if (chr === "'" && url.isSpecial()) url.query += '%27';else if (chr === '#') url.query += '%23';else url.query += percentEncode(chr, C0ControlPercentEncodeSet);
            }
            break;
          case FRAGMENT:
            if (chr !== EOF) url.fragment += percentEncode(chr, fragmentPercentEncodeSet);
            break;
        }
        pointer++;
      }
    },
    // https://url.spec.whatwg.org/#host-parsing
    parseHost: function parseHost(input) {
      var result, codePoints, index;
      if (charAt(input, 0) === '[') {
        if (charAt(input, input.length - 1) !== ']') return INVALID_HOST;
        result = parseIPv6(stringSlice(input, 1, -1));
        if (!result) return INVALID_HOST;
        this.host = result;
        // opaque host
      } else if (!this.isSpecial()) {
        if (exec(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input)) return INVALID_HOST;
        result = '';
        codePoints = arrayFrom(input);
        for (index = 0; index < codePoints.length; index++) {
          result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
        }
        this.host = result;
      } else {
        input = toASCII(input);
        if (exec(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;
        result = parseIPv4(input);
        if (result === null) return INVALID_HOST;
        this.host = result;
      }
    },
    // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
    cannotHaveUsernamePasswordPort: function cannotHaveUsernamePasswordPort() {
      return !this.host || this.cannotBeABaseURL || this.scheme === 'file';
    },
    // https://url.spec.whatwg.org/#include-credentials
    includesCredentials: function includesCredentials() {
      return this.username !== '' || this.password !== '';
    },
    // https://url.spec.whatwg.org/#is-special
    isSpecial: function isSpecial() {
      return hasOwn$1(specialSchemes, this.scheme);
    },
    // https://url.spec.whatwg.org/#shorten-a-urls-path
    shortenPath: function shortenPath() {
      var path = this.path;
      var pathSize = path.length;
      if (pathSize && (this.scheme !== 'file' || pathSize !== 1 || !isWindowsDriveLetter(path[0], true))) {
        path.length--;
      }
    },
    // https://url.spec.whatwg.org/#concept-url-serializer
    serialize: function serialize() {
      var url = this;
      var scheme = url.scheme;
      var username = url.username;
      var password = url.password;
      var host = url.host;
      var port = url.port;
      var path = url.path;
      var query = url.query;
      var fragment = url.fragment;
      var output = scheme + ':';
      if (host !== null) {
        output += '//';
        if (url.includesCredentials()) {
          output += username + (password ? ':' + password : '') + '@';
        }
        output += serializeHost(host);
        if (port !== null) output += ':' + port;
      } else if (scheme === 'file') output += '//';
      output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
      if (query !== null) output += '?' + query;
      if (fragment !== null) output += '#' + fragment;
      return output;
    },
    // https://url.spec.whatwg.org/#dom-url-href
    setHref: function setHref(href) {
      var failure = this.parse(href);
      if (failure) throw new TypeError$1(failure);
      this.searchParams.update();
    },
    // https://url.spec.whatwg.org/#dom-url-origin
    getOrigin: function getOrigin() {
      var scheme = this.scheme;
      var port = this.port;
      if (scheme === 'blob') try {
        return new URLConstructor(scheme.path[0]).origin;
      } catch (error) {
        return 'null';
      }
      if (scheme === 'file' || !this.isSpecial()) return 'null';
      return scheme + '://' + serializeHost(this.host) + (port !== null ? ':' + port : '');
    },
    // https://url.spec.whatwg.org/#dom-url-protocol
    getProtocol: function getProtocol() {
      return this.scheme + ':';
    },
    setProtocol: function setProtocol(protocol) {
      this.parse($toString(protocol) + ':', SCHEME_START);
    },
    // https://url.spec.whatwg.org/#dom-url-username
    getUsername: function getUsername() {
      return this.username;
    },
    setUsername: function setUsername(username) {
      var codePoints = arrayFrom($toString(username));
      if (this.cannotHaveUsernamePasswordPort()) return;
      this.username = '';
      for (var i = 0; i < codePoints.length; i++) {
        this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    },
    // https://url.spec.whatwg.org/#dom-url-password
    getPassword: function getPassword() {
      return this.password;
    },
    setPassword: function setPassword(password) {
      var codePoints = arrayFrom($toString(password));
      if (this.cannotHaveUsernamePasswordPort()) return;
      this.password = '';
      for (var i = 0; i < codePoints.length; i++) {
        this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    },
    // https://url.spec.whatwg.org/#dom-url-host
    getHost: function getHost() {
      var host = this.host;
      var port = this.port;
      return host === null ? '' : port === null ? serializeHost(host) : serializeHost(host) + ':' + port;
    },
    setHost: function setHost(host) {
      if (this.cannotBeABaseURL) return;
      this.parse(host, HOST);
    },
    // https://url.spec.whatwg.org/#dom-url-hostname
    getHostname: function getHostname() {
      var host = this.host;
      return host === null ? '' : serializeHost(host);
    },
    setHostname: function setHostname(hostname) {
      if (this.cannotBeABaseURL) return;
      this.parse(hostname, HOSTNAME);
    },
    // https://url.spec.whatwg.org/#dom-url-port
    getPort: function getPort() {
      var port = this.port;
      return port === null ? '' : $toString(port);
    },
    setPort: function setPort(port) {
      if (this.cannotHaveUsernamePasswordPort()) return;
      port = $toString(port);
      if (port === '') this.port = null;else this.parse(port, PORT);
    },
    // https://url.spec.whatwg.org/#dom-url-pathname
    getPathname: function getPathname() {
      var path = this.path;
      return this.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
    },
    setPathname: function setPathname(pathname) {
      if (this.cannotBeABaseURL) return;
      this.path = [];
      this.parse(pathname, PATH_START);
    },
    // https://url.spec.whatwg.org/#dom-url-search
    getSearch: function getSearch() {
      var query = this.query;
      return query ? '?' + query : '';
    },
    setSearch: function setSearch(search) {
      search = $toString(search);
      if (search === '') {
        this.query = null;
      } else {
        if (charAt(search, 0) === '?') search = stringSlice(search, 1);
        this.query = '';
        this.parse(search, QUERY);
      }
      this.searchParams.update();
    },
    // https://url.spec.whatwg.org/#dom-url-searchparams
    getSearchParams: function getSearchParams() {
      return this.searchParams.facade;
    },
    // https://url.spec.whatwg.org/#dom-url-hash
    getHash: function getHash() {
      var fragment = this.fragment;
      return fragment ? '#' + fragment : '';
    },
    setHash: function setHash(hash) {
      hash = $toString(hash);
      if (hash === '') {
        this.fragment = null;
        return;
      }
      if (charAt(hash, 0) === '#') hash = stringSlice(hash, 1);
      this.fragment = '';
      this.parse(hash, FRAGMENT);
    },
    update: function update() {
      this.query = this.searchParams.serialize() || null;
    }
  };

  // `URL` constructor
  // https://url.spec.whatwg.org/#url-class
  var URLConstructor = function URL(url /* , base */) {
    var that = anInstance$1(this, URLPrototype);
    var base = validateArgumentsLength$2(arguments.length, 1) > 1 ? arguments[1] : undefined;
    var state = setInternalState$1(that, new URLState(url, false, base));
    if (!DESCRIPTORS$3) {
      that.href = state.serialize();
      that.origin = state.getOrigin();
      that.protocol = state.getProtocol();
      that.username = state.getUsername();
      that.password = state.getPassword();
      that.host = state.getHost();
      that.hostname = state.getHostname();
      that.port = state.getPort();
      that.pathname = state.getPathname();
      that.search = state.getSearch();
      that.searchParams = state.getSearchParams();
      that.hash = state.getHash();
    }
  };
  var URLPrototype = URLConstructor.prototype;
  var accessorDescriptor = function accessorDescriptor(getter, setter) {
    return {
      get: function get() {
        return getInternalURLState(this)[getter]();
      },
      set: setter && function (value) {
        return getInternalURLState(this)[setter](value);
      },
      configurable: true,
      enumerable: true
    };
  };
  if (DESCRIPTORS$3) {
    // `URL.prototype.href` accessors pair
    // https://url.spec.whatwg.org/#dom-url-href
    defineBuiltInAccessor$2(URLPrototype, 'href', accessorDescriptor('serialize', 'setHref'));
    // `URL.prototype.origin` getter
    // https://url.spec.whatwg.org/#dom-url-origin
    defineBuiltInAccessor$2(URLPrototype, 'origin', accessorDescriptor('getOrigin'));
    // `URL.prototype.protocol` accessors pair
    // https://url.spec.whatwg.org/#dom-url-protocol
    defineBuiltInAccessor$2(URLPrototype, 'protocol', accessorDescriptor('getProtocol', 'setProtocol'));
    // `URL.prototype.username` accessors pair
    // https://url.spec.whatwg.org/#dom-url-username
    defineBuiltInAccessor$2(URLPrototype, 'username', accessorDescriptor('getUsername', 'setUsername'));
    // `URL.prototype.password` accessors pair
    // https://url.spec.whatwg.org/#dom-url-password
    defineBuiltInAccessor$2(URLPrototype, 'password', accessorDescriptor('getPassword', 'setPassword'));
    // `URL.prototype.host` accessors pair
    // https://url.spec.whatwg.org/#dom-url-host
    defineBuiltInAccessor$2(URLPrototype, 'host', accessorDescriptor('getHost', 'setHost'));
    // `URL.prototype.hostname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hostname
    defineBuiltInAccessor$2(URLPrototype, 'hostname', accessorDescriptor('getHostname', 'setHostname'));
    // `URL.prototype.port` accessors pair
    // https://url.spec.whatwg.org/#dom-url-port
    defineBuiltInAccessor$2(URLPrototype, 'port', accessorDescriptor('getPort', 'setPort'));
    // `URL.prototype.pathname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-pathname
    defineBuiltInAccessor$2(URLPrototype, 'pathname', accessorDescriptor('getPathname', 'setPathname'));
    // `URL.prototype.search` accessors pair
    // https://url.spec.whatwg.org/#dom-url-search
    defineBuiltInAccessor$2(URLPrototype, 'search', accessorDescriptor('getSearch', 'setSearch'));
    // `URL.prototype.searchParams` getter
    // https://url.spec.whatwg.org/#dom-url-searchparams
    defineBuiltInAccessor$2(URLPrototype, 'searchParams', accessorDescriptor('getSearchParams'));
    // `URL.prototype.hash` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hash
    defineBuiltInAccessor$2(URLPrototype, 'hash', accessorDescriptor('getHash', 'setHash'));
  }

  // `URL.prototype.toJSON` method
  // https://url.spec.whatwg.org/#dom-url-tojson
  defineBuiltIn$2(URLPrototype, 'toJSON', function toJSON() {
    return getInternalURLState(this).serialize();
  }, {
    enumerable: true
  });

  // `URL.prototype.toString` method
  // https://url.spec.whatwg.org/#URL-stringification-behavior
  defineBuiltIn$2(URLPrototype, 'toString', function toString() {
    return getInternalURLState(this).serialize();
  }, {
    enumerable: true
  });
  if (NativeURL) {
    var nativeCreateObjectURL = NativeURL.createObjectURL;
    var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
    // `URL.createObjectURL` method
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
    if (nativeCreateObjectURL) defineBuiltIn$2(URLConstructor, 'createObjectURL', bind(nativeCreateObjectURL, NativeURL));
    // `URL.revokeObjectURL` method
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
    if (nativeRevokeObjectURL) defineBuiltIn$2(URLConstructor, 'revokeObjectURL', bind(nativeRevokeObjectURL, NativeURL));
  }
  setToStringTag(URLConstructor, 'URL');
  $$f({
    global: true,
    constructor: true,
    forced: !USE_NATIVE_URL,
    sham: !DESCRIPTORS$3
  }, {
    URL: URLConstructor
  });
  var $$e = _export;
  var call$1 = functionCall;

  // `URL.prototype.toJSON` method
  // https://url.spec.whatwg.org/#dom-url-tojson
  $$e({
    target: 'URL',
    proto: true,
    enumerable: true
  }, {
    toJSON: function toJSON() {
      return call$1(URL.prototype.toString, this);
    }
  });
  var defineBuiltIn$1 = defineBuiltIn$l;
  var uncurryThis$6 = functionUncurryThis;
  var toString$2 = toString$s;
  var validateArgumentsLength$1 = validateArgumentsLength$7;
  var $URLSearchParams$1 = URLSearchParams;
  var URLSearchParamsPrototype$2 = $URLSearchParams$1.prototype;
  var append = uncurryThis$6(URLSearchParamsPrototype$2.append);
  var $delete = uncurryThis$6(URLSearchParamsPrototype$2['delete']);
  var forEach$1 = uncurryThis$6(URLSearchParamsPrototype$2.forEach);
  var push = uncurryThis$6([].push);
  var params$1 = new $URLSearchParams$1('a=1&a=2&b=3');
  params$1['delete']('a', 1);
  // `undefined` case is a Chromium 117 bug
  // https://bugs.chromium.org/p/v8/issues/detail?id=14222
  params$1['delete']('b', undefined);
  if (params$1 + '' !== 'a=2') {
    defineBuiltIn$1(URLSearchParamsPrototype$2, 'delete', function (name /* , value */) {
      var length = arguments.length;
      var $value = length < 2 ? undefined : arguments[1];
      if (length && $value === undefined) return $delete(this, name);
      var entries = [];
      forEach$1(this, function (v, k) {
        // also validates `this`
        push(entries, {
          key: k,
          value: v
        });
      });
      validateArgumentsLength$1(length, 1);
      var key = toString$2(name);
      var value = toString$2($value);
      var index = 0;
      var dindex = 0;
      var found = false;
      var entriesLength = entries.length;
      var entry;
      while (index < entriesLength) {
        entry = entries[index++];
        if (found || entry.key === key) {
          found = true;
          $delete(this, entry.key);
        } else dindex++;
      }
      while (dindex < entriesLength) {
        entry = entries[dindex++];
        if (!(entry.key === key && entry.value === value)) append(this, entry.key, entry.value);
      }
    }, {
      enumerable: true,
      unsafe: true
    });
  }
  var defineBuiltIn = defineBuiltIn$l;
  var uncurryThis$5 = functionUncurryThis;
  var toString$1 = toString$s;
  var validateArgumentsLength = validateArgumentsLength$7;
  var $URLSearchParams = URLSearchParams;
  var URLSearchParamsPrototype$1 = $URLSearchParams.prototype;
  var getAll = uncurryThis$5(URLSearchParamsPrototype$1.getAll);
  var $has = uncurryThis$5(URLSearchParamsPrototype$1.has);
  var params = new $URLSearchParams('a=1');

  // `undefined` case is a Chromium 117 bug
  // https://bugs.chromium.org/p/v8/issues/detail?id=14222
  if (params.has('a', 2) || !params.has('a', undefined)) {
    defineBuiltIn(URLSearchParamsPrototype$1, 'has', function has(name /* , value */) {
      var length = arguments.length;
      var $value = length < 2 ? undefined : arguments[1];
      if (length && $value === undefined) return $has(this, name);
      var values = getAll(this, name); // also validates `this`
      validateArgumentsLength(length, 1);
      var value = toString$1($value);
      var index = 0;
      while (index < values.length) {
        if (values[index++] === value) return true;
      }
      return false;
    }, {
      enumerable: true,
      unsafe: true
    });
  }
  var DESCRIPTORS$2 = descriptors;
  var uncurryThis$4 = functionUncurryThis;
  var defineBuiltInAccessor$1 = defineBuiltInAccessor$e;
  var URLSearchParamsPrototype = URLSearchParams.prototype;
  var forEach = uncurryThis$4(URLSearchParamsPrototype.forEach);

  // `URLSearchParams.prototype.size` getter
  // https://github.com/whatwg/url/pull/734
  if (DESCRIPTORS$2 && !('size' in URLSearchParamsPrototype)) {
    defineBuiltInAccessor$1(URLSearchParamsPrototype, 'size', {
      get: function size() {
        var count = 0;
        forEach(this, function () {
          count++;
        });
        return count;
      },
      configurable: true,
      enumerable: true
    });
  }
  var toObject = toObject$i;
  var toAbsoluteIndex = toAbsoluteIndex$4;
  var lengthOfArrayLike = lengthOfArrayLike$d;

  // `Array.prototype.fill` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.fill
  var arrayFill = function fill(value /* , start = 0, end = @length */) {
    var O = toObject(this);
    var length = lengthOfArrayLike(O);
    var argumentsLength = arguments.length;
    var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
    var end = argumentsLength > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
    while (endPos > index) O[index++] = value;
    return O;
  };
  var $$d = _export;
  var fill = arrayFill;
  var addToUnscopables = addToUnscopables$5;

  // `Array.prototype.fill` method
  // https://tc39.es/ecma262/#sec-array.prototype.fill
  $$d({
    target: 'Array',
    proto: true
  }, {
    fill: fill
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('fill');

  // TODO: Remove from `core-js@4`
  var $$c = _export;
  var uncurryThis$3 = functionUncurryThis;
  var $Date = Date;
  var thisTimeValue = uncurryThis$3($Date.prototype.getTime);

  // `Date.now` method
  // https://tc39.es/ecma262/#sec-date.now
  $$c({
    target: 'Date',
    stat: true
  }, {
    now: function now() {
      return thisTimeValue(new $Date());
    }
  });
  var $$b = _export;
  var global$3 = global$J;

  // `globalThis` object
  // https://tc39.es/ecma262/#sec-globalthis
  $$b({
    global: true,
    forced: global$3.globalThis !== global$3
  }, {
    globalThis: global$3
  });
  var $$a = _export;
  var is = sameValue$1;

  // `Object.is` method
  // https://tc39.es/ecma262/#sec-object.is
  $$a({
    target: 'Object',
    stat: true
  }, {
    is: is
  });
  var $$9 = _export;
  var $isExtensible = objectIsExtensible;

  // `Object.isExtensible` method
  // https://tc39.es/ecma262/#sec-object.isextensible
  // eslint-disable-next-line es/no-object-isextensible -- safe
  $$9({
    target: 'Object',
    stat: true,
    forced: Object.isExtensible !== $isExtensible
  }, {
    isExtensible: $isExtensible
  });
  var $$8 = _export;
  var $parseInt = numberParseInt;

  // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix
  $$8({
    global: true,
    forced: parseInt !== $parseInt
  }, {
    parseInt: $parseInt
  });
  var $$7 = _export;
  var DESCRIPTORS$1 = descriptors;
  var anObject$4 = anObject$D;
  var toPropertyKey = toPropertyKey$4;
  var definePropertyModule$1 = objectDefineProperty;
  var fails$3 = fails$Y;

  // MS Edge has broken Reflect.defineProperty - throwing instead of returning false
  var ERROR_INSTEAD_OF_FALSE = fails$3(function () {
    // eslint-disable-next-line es/no-reflect -- required for testing
    Reflect.defineProperty(definePropertyModule$1.f({}, 1, {
      value: 1
    }), 1, {
      value: 2
    });
  });

  // `Reflect.defineProperty` method
  // https://tc39.es/ecma262/#sec-reflect.defineproperty
  $$7({
    target: 'Reflect',
    stat: true,
    forced: ERROR_INSTEAD_OF_FALSE,
    sham: !DESCRIPTORS$1
  }, {
    defineProperty: function defineProperty(target, propertyKey, attributes) {
      anObject$4(target);
      var key = toPropertyKey(propertyKey);
      anObject$4(attributes);
      try {
        definePropertyModule$1.f(target, key, attributes);
        return true;
      } catch (error) {
        return false;
      }
    }
  });
  var $$6 = _export;
  var anObject$3 = anObject$D;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;

  // `Reflect.deleteProperty` method
  // https://tc39.es/ecma262/#sec-reflect.deleteproperty
  $$6({
    target: 'Reflect',
    stat: true
  }, {
    deleteProperty: function deleteProperty(target, propertyKey) {
      var descriptor = getOwnPropertyDescriptor(anObject$3(target), propertyKey);
      return descriptor && !descriptor.configurable ? false : delete target[propertyKey];
    }
  });
  var $$5 = _export;
  var anObject$2 = anObject$D;
  var objectGetPrototypeOf = objectGetPrototypeOf$2;
  var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

  // `Reflect.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-reflect.getprototypeof
  $$5({
    target: 'Reflect',
    stat: true,
    sham: !CORRECT_PROTOTYPE_GETTER
  }, {
    getPrototypeOf: function getPrototypeOf(target) {
      return objectGetPrototypeOf(anObject$2(target));
    }
  });
  var $$4 = _export;

  // `Reflect.has` method
  // https://tc39.es/ecma262/#sec-reflect.has
  $$4({
    target: 'Reflect',
    stat: true
  }, {
    has: function has(target, propertyKey) {
      return propertyKey in target;
    }
  });
  var $$3 = _export;
  var ownKeys = ownKeys$3;

  // `Reflect.ownKeys` method
  // https://tc39.es/ecma262/#sec-reflect.ownkeys
  $$3({
    target: 'Reflect',
    stat: true
  }, {
    ownKeys: ownKeys
  });
  var $$2 = _export;
  var call = functionCall;
  var anObject$1 = anObject$D;
  var isObject$2 = isObject$u;
  var isDataDescriptor = isDataDescriptor$2;
  var fails$2 = fails$Y;
  var definePropertyModule = objectDefineProperty;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var getPrototypeOf = objectGetPrototypeOf$2;
  var createPropertyDescriptor = createPropertyDescriptor$a;

  // `Reflect.set` method
  // https://tc39.es/ecma262/#sec-reflect.set
  function set(target, propertyKey, V /* , receiver */) {
    var receiver = arguments.length < 4 ? target : arguments[3];
    var ownDescriptor = getOwnPropertyDescriptorModule.f(anObject$1(target), propertyKey);
    var existingDescriptor, prototype, setter;
    if (!ownDescriptor) {
      if (isObject$2(prototype = getPrototypeOf(target))) {
        return set(prototype, propertyKey, V, receiver);
      }
      ownDescriptor = createPropertyDescriptor(0);
    }
    if (isDataDescriptor(ownDescriptor)) {
      if (ownDescriptor.writable === false || !isObject$2(receiver)) return false;
      if (existingDescriptor = getOwnPropertyDescriptorModule.f(receiver, propertyKey)) {
        if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
        existingDescriptor.value = V;
        definePropertyModule.f(receiver, propertyKey, existingDescriptor);
      } else definePropertyModule.f(receiver, propertyKey, createPropertyDescriptor(0, V));
    } else {
      setter = ownDescriptor.set;
      if (setter === undefined) return false;
      call(setter, receiver, V);
    }
    return true;
  }

  // MS Edge 17-18 Reflect.set allows setting the property to object
  // with non-writable property on the prototype
  var MS_EDGE_BUG = fails$2(function () {
    var Constructor = function Constructor() {/* empty */};
    var object = definePropertyModule.f(new Constructor(), 'a', {
      configurable: true
    });
    // eslint-disable-next-line es/no-reflect -- required for testing
    return Reflect.set(Constructor.prototype, 'a', 1, object) !== false;
  });
  $$2({
    target: 'Reflect',
    stat: true,
    forced: MS_EDGE_BUG
  }, {
    set: set
  });
  var uncurryThis$2 = functionUncurryThis;
  var requireObjectCoercible = requireObjectCoercible$g;
  var toString = toString$s;
  var quot = /"/g;
  var replace = uncurryThis$2(''.replace);

  // `CreateHTML` abstract operation
  // https://tc39.es/ecma262/#sec-createhtml
  var createHtml = function createHtml(string, tag, attribute, value) {
    var S = toString(requireObjectCoercible(string));
    var p1 = '<' + tag;
    if (attribute !== '') p1 += ' ' + attribute + '="' + replace(toString(value), quot, '&quot;') + '"';
    return p1 + '>' + S + '</' + tag + '>';
  };
  var fails$1 = fails$Y;

  // check the existence of a method, lowercase
  // of a tag and escaping quotes in arguments
  var stringHtmlForced = function stringHtmlForced(METHOD_NAME) {
    return fails$1(function () {
      var test = ''[METHOD_NAME]('"');
      return test !== test.toLowerCase() || test.split('"').length > 3;
    });
  };
  var $$1 = _export;
  var createHTML = createHtml;
  var forcedStringHTMLMethod = stringHtmlForced;

  // `String.prototype.anchor` method
  // https://tc39.es/ecma262/#sec-string.prototype.anchor
  $$1({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod('anchor')
  }, {
    anchor: function anchor(name) {
      return createHTML(this, 'a', 'name', name);
    }
  });
  var uncurryThis$1 = functionUncurryThis;
  var defineBuiltIns$1 = defineBuiltIns$5;
  var getWeakData = internalMetadataExports.getWeakData;
  var anInstance = anInstance$9;
  var anObject = anObject$D;
  var isNullOrUndefined = isNullOrUndefined$b;
  var isObject$1 = isObject$u;
  var iterate = iterate$d;
  var ArrayIterationModule = arrayIteration;
  var hasOwn = hasOwnProperty_1;
  var InternalStateModule = internalState;
  var setInternalState = InternalStateModule.set;
  var internalStateGetterFor = InternalStateModule.getterFor;
  var find = ArrayIterationModule.find;
  var findIndex = ArrayIterationModule.findIndex;
  var splice = uncurryThis$1([].splice);
  var id = 0;

  // fallback for uncaught frozen keys
  var uncaughtFrozenStore = function uncaughtFrozenStore(state) {
    return state.frozen || (state.frozen = new UncaughtFrozenStore());
  };
  var UncaughtFrozenStore = function UncaughtFrozenStore() {
    this.entries = [];
  };
  var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
    return find(store.entries, function (it) {
      return it[0] === key;
    });
  };
  UncaughtFrozenStore.prototype = {
    get: function get(key) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) return entry[1];
    },
    has: function has(key) {
      return !!findUncaughtFrozen(this, key);
    },
    set: function set(key, value) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) entry[1] = value;else this.entries.push([key, value]);
    },
    'delete': function _delete(key) {
      var index = findIndex(this.entries, function (it) {
        return it[0] === key;
      });
      if (~index) splice(this.entries, index, 1);
      return !!~index;
    }
  };
  var collectionWeak$2 = {
    getConstructor: function getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var Constructor = wrapper(function (that, iterable) {
        anInstance(that, Prototype);
        setInternalState(that, {
          type: CONSTRUCTOR_NAME,
          id: id++,
          frozen: undefined
        });
        if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], {
          that: that,
          AS_ENTRIES: IS_MAP
        });
      });
      var Prototype = Constructor.prototype;
      var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
      var define = function define(that, key, value) {
        var state = getInternalState(that);
        var data = getWeakData(anObject(key), true);
        if (data === true) uncaughtFrozenStore(state).set(key, value);else data[state.id] = value;
        return that;
      };
      defineBuiltIns$1(Prototype, {
        // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
        // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
        // https://tc39.es/ecma262/#sec-weakset.prototype.delete
        'delete': function _delete(key) {
          var state = getInternalState(this);
          if (!isObject$1(key)) return false;
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state)['delete'](key);
          return data && hasOwn(data, state.id) && delete data[state.id];
        },
        // `{ WeakMap, WeakSet }.prototype.has(key)` methods
        // https://tc39.es/ecma262/#sec-weakmap.prototype.has
        // https://tc39.es/ecma262/#sec-weakset.prototype.has
        has: function has(key) {
          var state = getInternalState(this);
          if (!isObject$1(key)) return false;
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).has(key);
          return data && hasOwn(data, state.id);
        }
      });
      defineBuiltIns$1(Prototype, IS_MAP ? {
        // `WeakMap.prototype.get(key)` method
        // https://tc39.es/ecma262/#sec-weakmap.prototype.get
        get: function get(key) {
          var state = getInternalState(this);
          if (isObject$1(key)) {
            var data = getWeakData(key);
            if (data === true) return uncaughtFrozenStore(state).get(key);
            return data ? data[state.id] : undefined;
          }
        },
        // `WeakMap.prototype.set(key, value)` method
        // https://tc39.es/ecma262/#sec-weakmap.prototype.set
        set: function set(key, value) {
          return define(this, key, value);
        }
      } : {
        // `WeakSet.prototype.add(value)` method
        // https://tc39.es/ecma262/#sec-weakset.prototype.add
        add: function add(value) {
          return define(this, value, true);
        }
      });
      return Constructor;
    }
  };
  var FREEZING = freezing;
  var global$2 = global$J;
  var uncurryThis = functionUncurryThis;
  var defineBuiltIns = defineBuiltIns$5;
  var InternalMetadataModule = internalMetadataExports;
  var collection$1 = collection$4;
  var collectionWeak$1 = collectionWeak$2;
  var isObject = isObject$u;
  var enforceInternalState = internalState.enforce;
  var fails = fails$Y;
  var NATIVE_WEAK_MAP = weakMapBasicDetection;
  var $Object = Object;
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray = Array.isArray;
  // eslint-disable-next-line es/no-object-isextensible -- safe
  var isExtensible = $Object.isExtensible;
  // eslint-disable-next-line es/no-object-isfrozen -- safe
  var isFrozen = $Object.isFrozen;
  // eslint-disable-next-line es/no-object-issealed -- safe
  var isSealed = $Object.isSealed;
  // eslint-disable-next-line es/no-object-freeze -- safe
  var freeze = $Object.freeze;
  // eslint-disable-next-line es/no-object-seal -- safe
  var seal = $Object.seal;
  var IS_IE11 = !global$2.ActiveXObject && 'ActiveXObject' in global$2;
  var InternalWeakMap;
  var wrapper = function wrapper(init) {
    return function WeakMap() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  };

  // `WeakMap` constructor
  // https://tc39.es/ecma262/#sec-weakmap-constructor
  var $WeakMap = collection$1('WeakMap', wrapper, collectionWeak$1);
  var WeakMapPrototype = $WeakMap.prototype;
  var nativeSet = uncurryThis(WeakMapPrototype.set);

  // Chakra Edge bug: adding frozen arrays to WeakMap unfreeze them
  var hasMSEdgeFreezingBug = function hasMSEdgeFreezingBug() {
    return FREEZING && fails(function () {
      var frozenArray = freeze([]);
      nativeSet(new $WeakMap(), frozenArray, 1);
      return !isFrozen(frozenArray);
    });
  };

  // IE11 WeakMap frozen keys fix
  // We can't use feature detection because it crash some old IE builds
  // https://github.com/zloirock/core-js/issues/485
  if (NATIVE_WEAK_MAP) if (IS_IE11) {
    InternalWeakMap = collectionWeak$1.getConstructor(wrapper, 'WeakMap', true);
    InternalMetadataModule.enable();
    var nativeDelete = uncurryThis(WeakMapPrototype['delete']);
    var nativeHas = uncurryThis(WeakMapPrototype.has);
    var nativeGet = uncurryThis(WeakMapPrototype.get);
    defineBuiltIns(WeakMapPrototype, {
      'delete': function _delete(key) {
        if (isObject(key) && !isExtensible(key)) {
          var state = enforceInternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          return nativeDelete(this, key) || state.frozen['delete'](key);
        }
        return nativeDelete(this, key);
      },
      has: function has(key) {
        if (isObject(key) && !isExtensible(key)) {
          var state = enforceInternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          return nativeHas(this, key) || state.frozen.has(key);
        }
        return nativeHas(this, key);
      },
      get: function get(key) {
        if (isObject(key) && !isExtensible(key)) {
          var state = enforceInternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
        }
        return nativeGet(this, key);
      },
      set: function set(key, value) {
        if (isObject(key) && !isExtensible(key)) {
          var state = enforceInternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
        } else nativeSet(this, key, value);
        return this;
      }
    });
    // Chakra Edge frozen keys fix
  } else if (hasMSEdgeFreezingBug()) {
    defineBuiltIns(WeakMapPrototype, {
      set: function set(key, value) {
        var arrayIntegrityLevel;
        if (isArray(key)) {
          if (isFrozen(key)) arrayIntegrityLevel = freeze;else if (isSealed(key)) arrayIntegrityLevel = seal;
        }
        nativeSet(this, key, value);
        if (arrayIntegrityLevel) arrayIntegrityLevel(key);
        return this;
      }
    });
  }
  var collection = collection$4;
  var collectionWeak = collectionWeak$2;

  // `WeakSet` constructor
  // https://tc39.es/ecma262/#sec-weakset-constructor
  collection('WeakSet', function (init) {
    return function WeakSet() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  }, collectionWeak);
  var $ = _export;
  var global$1 = global$J;
  var defineBuiltInAccessor = defineBuiltInAccessor$e;
  var DESCRIPTORS = descriptors;
  var $TypeError = TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty = Object.defineProperty;
  var INCORRECT_VALUE = global$1.self !== global$1;

  // `self` getter
  // https://html.spec.whatwg.org/multipage/window-object.html#dom-self
  try {
    if (DESCRIPTORS) {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      var descriptor = Object.getOwnPropertyDescriptor(global$1, 'self');
      // some engines have `self`, but with incorrect descriptor
      // https://github.com/denoland/deno/issues/15765
      if (INCORRECT_VALUE || !descriptor || !descriptor.get || !descriptor.enumerable) {
        defineBuiltInAccessor(global$1, 'self', {
          get: function self() {
            return global$1;
          },
          set: function self(value) {
            if (this !== global$1) throw new $TypeError('Illegal invocation');
            defineProperty(global$1, 'self', {
              value: value,
              writable: true,
              configurable: true,
              enumerable: true
            });
          },
          configurable: true,
          enumerable: true
        });
      }
    } else $({
      global: true,
      simple: true,
      forced: INCORRECT_VALUE
    }, {
      self: global$1
    });
  } catch (error) {/* empty */}

  /*!
   * SJS 6.15.1
   */

  !function () {
    function e(e, t) {
      return (t || "") + " (SystemJS https://github.com/systemjs/systemjs/blob/main/docs/errors.md#" + e + ")";
    }
    function t(e, t) {
      if (-1 !== e.indexOf("\\") && (e = e.replace(S, "/")), "/" === e[0] && "/" === e[1]) return t.slice(0, t.indexOf(":") + 1) + e;
      if ("." === e[0] && ("/" === e[1] || "." === e[1] && ("/" === e[2] || 2 === e.length && (e += "/")) || 1 === e.length && (e += "/")) || "/" === e[0]) {
        var r,
          n = t.slice(0, t.indexOf(":") + 1);
        if (r = "/" === t[n.length + 1] ? "file:" !== n ? (r = t.slice(n.length + 2)).slice(r.indexOf("/") + 1) : t.slice(8) : t.slice(n.length + ("/" === t[n.length])), "/" === e[0]) return t.slice(0, t.length - r.length - 1) + e;
        for (var i = r.slice(0, r.lastIndexOf("/") + 1) + e, o = [], s = -1, c = 0; c < i.length; c++) -1 !== s ? "/" === i[c] && (o.push(i.slice(s, c + 1)), s = -1) : "." === i[c] ? "." !== i[c + 1] || "/" !== i[c + 2] && c + 2 !== i.length ? "/" === i[c + 1] || c + 1 === i.length ? c += 1 : s = c : (o.pop(), c += 2) : s = c;
        return -1 !== s && o.push(i.slice(s)), t.slice(0, t.length - r.length) + o.join("");
      }
    }
    function r(e, r) {
      return t(e, r) || (-1 !== e.indexOf(":") ? e : t("./" + e, r));
    }
    function n(e, r, n, i, o) {
      for (var s in e) {
        var f = t(s, n) || s,
          a = e[s];
        if ("string" == typeof a) {
          var l = u(i, t(a, n) || a, o);
          l ? r[f] = l : c("W1", s, a);
        }
      }
    }
    function i(e, t, i) {
      var o;
      for (o in e.imports && n(e.imports, i.imports, t, i, null), e.scopes || {}) {
        var s = r(o, t);
        n(e.scopes[o], i.scopes[s] || (i.scopes[s] = {}), t, i, s);
      }
      for (o in e.depcache || {}) i.depcache[r(o, t)] = e.depcache[o];
      for (o in e.integrity || {}) i.integrity[r(o, t)] = e.integrity[o];
    }
    function o(e, t) {
      if (t[e]) return e;
      var r = e.length;
      do {
        var n = e.slice(0, r + 1);
        if (n in t) return n;
      } while (-1 !== (r = e.lastIndexOf("/", r - 1)));
    }
    function s(e, t) {
      var r = o(e, t);
      if (r) {
        var n = t[r];
        if (null === n) return;
        if (!(e.length > r.length && "/" !== n[n.length - 1])) return n + e.slice(r.length);
        c("W2", r, n);
      }
    }
    function c(t, r, n) {
      console.warn(e(t, [n, r].join(", ")));
    }
    function u(e, t, r) {
      for (var n = e.scopes, i = r && o(r, n); i;) {
        var c = s(t, n[i]);
        if (c) return c;
        i = o(i.slice(0, i.lastIndexOf("/")), n);
      }
      return s(t, e.imports) || -1 !== t.indexOf(":") && t;
    }
    function f() {
      this[b] = {};
    }
    function a(t, r, n, i) {
      var o = t[b][r];
      if (o) return o;
      var s = [],
        c = Object.create(null);
      j && Object.defineProperty(c, j, {
        value: "Module"
      });
      var u = Promise.resolve().then(function () {
          return t.instantiate(r, n, i);
        }).then(function (n) {
          if (!n) throw Error(e(2, r));
          var i = n[1](function (e, t) {
            o.h = !0;
            var r = !1;
            if ("string" == typeof e) e in c && c[e] === t || (c[e] = t, r = !0);else {
              for (var n in e) t = e[n], n in c && c[n] === t || (c[n] = t, r = !0);
              e && e.__esModule && (c.__esModule = e.__esModule);
            }
            if (r) for (var i = 0; i < s.length; i++) {
              var u = s[i];
              u && u(c);
            }
            return t;
          }, 2 === n[1].length ? {
            "import": function _import(e, n) {
              return t["import"](e, r, n);
            },
            meta: t.createContext(r)
          } : void 0);
          return o.e = i.execute || function () {}, [n[0], i.setters || [], n[2] || []];
        }, function (e) {
          throw o.e = null, o.er = e, e;
        }),
        f = u.then(function (e) {
          return Promise.all(e[0].map(function (n, i) {
            var o = e[1][i],
              s = e[2][i];
            return Promise.resolve(t.resolve(n, r)).then(function (e) {
              var n = a(t, e, r, s);
              return Promise.resolve(n.I).then(function () {
                return o && (n.i.push(o), !n.h && n.I || o(n.n)), n;
              });
            });
          })).then(function (e) {
            o.d = e;
          });
        });
      return o = t[b][r] = {
        id: r,
        i: s,
        n: c,
        m: i,
        I: u,
        L: f,
        h: !1,
        d: void 0,
        e: void 0,
        er: void 0,
        E: void 0,
        C: void 0,
        p: void 0
      };
    }
    function l(e, t, r, n) {
      if (!n[t.id]) return n[t.id] = !0, Promise.resolve(t.L).then(function () {
        return t.p && null !== t.p.e || (t.p = r), Promise.all(t.d.map(function (t) {
          return l(e, t, r, n);
        }));
      })["catch"](function (e) {
        if (t.er) throw e;
        throw t.e = null, e;
      });
    }
    function h(e, t) {
      return t.C = l(e, t, t, {}).then(function () {
        return d(e, t, {});
      }).then(function () {
        return t.n;
      });
    }
    function d(e, t, r) {
      function n() {
        try {
          var e = o.call(I);
          if (e) return e = e.then(function () {
            t.C = t.n, t.E = null;
          }, function (e) {
            throw t.er = e, t.E = null, e;
          }), t.E = e;
          t.C = t.n, t.L = t.I = void 0;
        } catch (r) {
          throw t.er = r, r;
        }
      }
      if (!r[t.id]) {
        if (r[t.id] = !0, !t.e) {
          if (t.er) throw t.er;
          return t.E ? t.E : void 0;
        }
        var i,
          o = t.e;
        return t.e = null, t.d.forEach(function (n) {
          try {
            var o = d(e, n, r);
            o && (i = i || []).push(o);
          } catch (s) {
            throw t.er = s, s;
          }
        }), i ? Promise.all(i).then(n) : n();
      }
    }
    function v() {
      [].forEach.call(document.querySelectorAll("script"), function (t) {
        if (!t.sp) if ("systemjs-module" === t.type) {
          if (t.sp = !0, !t.src) return;
          System["import"]("import:" === t.src.slice(0, 7) ? t.src.slice(7) : r(t.src, p))["catch"](function (e) {
            if (e.message.indexOf("https://github.com/systemjs/systemjs/blob/main/docs/errors.md#3") > -1) {
              var r = document.createEvent("Event");
              r.initEvent("error", !1, !1), t.dispatchEvent(r);
            }
            return Promise.reject(e);
          });
        } else if ("systemjs-importmap" === t.type) {
          t.sp = !0;
          var n = t.src ? (System.fetch || fetch)(t.src, {
            integrity: t.integrity,
            priority: t.fetchPriority,
            passThrough: !0
          }).then(function (e) {
            if (!e.ok) throw Error(e.status);
            return e.text();
          })["catch"](function (r) {
            return r.message = e("W4", t.src) + "\n" + r.message, console.warn(r), "function" == typeof t.onerror && t.onerror(), "{}";
          }) : t.innerHTML;
          M = M.then(function () {
            return n;
          }).then(function (r) {
            !function (t, r, n) {
              var o = {};
              try {
                o = JSON.parse(r);
              } catch (s) {
                console.warn(Error(e("W5")));
              }
              i(o, n, t);
            }(R, r, t.src || p);
          });
        }
      });
    }
    var p,
      m = "undefined" != typeof Symbol,
      g = "undefined" != typeof self,
      y = "undefined" != typeof document,
      E = g ? self : commonjsGlobal;
    if (y) {
      var w = document.querySelector("base[href]");
      w && (p = w.href);
    }
    if (!p && "undefined" != typeof location) {
      var O = (p = location.href.split("#")[0].split("?")[0]).lastIndexOf("/");
      -1 !== O && (p = p.slice(0, O + 1));
    }
    var x,
      S = /\\/g,
      j = m && Symbol.toStringTag,
      b = m ? Symbol() : "@",
      P = f.prototype;
    P["import"] = function (e, t, r) {
      var n = this;
      return t && "object" == typeof t && (r = t, t = void 0), Promise.resolve(n.prepareImport()).then(function () {
        return n.resolve(e, t, r);
      }).then(function (e) {
        var t = a(n, e, void 0, r);
        return t.C || h(n, t);
      });
    }, P.createContext = function (e) {
      var t = this;
      return {
        url: e,
        resolve: function resolve(r, n) {
          return Promise.resolve(t.resolve(r, n || e));
        }
      };
    }, P.register = function (e, t, r) {
      x = [e, t, r];
    }, P.getRegister = function () {
      var e = x;
      return x = void 0, e;
    };
    var I = Object.freeze(Object.create(null));
    E.System = new f();
    var L,
      C,
      M = Promise.resolve(),
      R = {
        imports: {},
        scopes: {},
        depcache: {},
        integrity: {}
      },
      T = y;
    if (P.prepareImport = function (e) {
      return (T || e) && (v(), T = !1), M;
    }, P.getImportMap = function () {
      return JSON.parse(JSON.stringify(R));
    }, y && (v(), window.addEventListener("DOMContentLoaded", v)), P.addImportMap = function (e, t) {
      i(e, t || p, R);
    }, y) {
      window.addEventListener("error", function (e) {
        J = e.filename, W = e.error;
      });
      var _ = location.origin;
    }
    P.createScript = function (e) {
      var t = document.createElement("script");
      t.async = !0, e.indexOf(_ + "/") && (t.crossOrigin = "anonymous");
      var r = R.integrity[e];
      return r && (t.integrity = r), t.src = e, t;
    };
    var J,
      W,
      q = {},
      N = P.register;
    P.register = function (e, t) {
      if (y && "loading" === document.readyState && "string" != typeof e) {
        var r = document.querySelectorAll("script[src]"),
          n = r[r.length - 1];
        if (n) {
          L = e;
          var i = this;
          C = setTimeout(function () {
            q[n.src] = [e, t], i["import"](n.src);
          });
        }
      } else L = void 0;
      return N.call(this, e, t);
    }, P.instantiate = function (t, r) {
      var n = q[t];
      if (n) return delete q[t], n;
      var i = this;
      return Promise.resolve(P.createScript(t)).then(function (n) {
        return new Promise(function (o, s) {
          n.addEventListener("error", function () {
            s(Error(e(3, [t, r].join(", "))));
          }), n.addEventListener("load", function () {
            if (document.head.removeChild(n), J === t) s(W);else {
              var e = i.getRegister(t);
              e && e[0] === L && clearTimeout(C), o(e);
            }
          }), document.head.appendChild(n);
        });
      });
    }, P.shouldFetch = function () {
      return !1;
    }, "undefined" != typeof fetch && (P.fetch = fetch);
    var k = P.instantiate,
      A = /^(text|application)\/(x-)?javascript(;|$)/;
    P.instantiate = function (t, r, n) {
      var i = this;
      return this.shouldFetch(t, r, n) ? this.fetch(t, {
        credentials: "same-origin",
        integrity: R.integrity[t],
        meta: n
      }).then(function (n) {
        if (!n.ok) throw Error(e(7, [n.status, n.statusText, t, r].join(", ")));
        var o = n.headers.get("content-type");
        if (!o || !A.test(o)) throw Error(e(4, o));
        return n.text().then(function (e) {
          return e.indexOf("//# sourceURL=") < 0 && (e += "\n//# sourceURL=" + t), (0, eval)(e), i.getRegister(t);
        });
      }) : k.apply(this, arguments);
    }, P.resolve = function (r, n) {
      return u(R, t(r, n = n || p) || r, n) || function (t, r) {
        throw Error(e(8, [t, r].join(", ")));
      }(r, n);
    };
    var F = P.instantiate;
    P.instantiate = function (e, t, r) {
      var n = R.depcache[e];
      if (n) for (var i = 0; i < n.length; i++) a(this, this.resolve(n[i], e), e);
      return F.call(this, e, t, r);
    }, g && "function" == typeof importScripts && (P.instantiate = function (e) {
      var t = this;
      return Promise.resolve().then(function () {
        return importScripts(e), t.getRegister(e);
      });
    });
  }();
})();