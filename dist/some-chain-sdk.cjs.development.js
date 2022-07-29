'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Axios = _interopDefault(require('axios'));
var qs = _interopDefault(require('qs'));
var Decimal = _interopDefault(require('decimal.js'));
var math = require('@cosmjs/math');
var moment = _interopDefault(require('moment'));
var encoding = require('@cosmjs/encoding');
var crypto = require('@cosmjs/crypto');
var invariant = _interopDefault(require('tiny-invariant'));
var protoSigning = require('@cosmjs/proto-signing');
var any = require('cosmjs-types/google/protobuf/any');
var Long = _interopDefault(require('long'));
require('@improbable-eng/grpc-web');
var _m0 = require('protobufjs/minimal');
require('browser-headers');
var stargate = require('@cosmjs/stargate');

function _regeneratorRuntime() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  _regeneratorRuntime = function () {
    return exports;
  };

  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) keys.push(key);

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var APIRequester = /*#__PURE__*/function () {
  function APIRequester(baseURL) {
    this.axios = void 0;
    this.axios = Axios.create({
      baseURL: baseURL,
      headers: {
        Accept: "application/json"
      },
      timeout: 60000
    });
  }

  var _proto = APIRequester.prototype;

  _proto.get = /*#__PURE__*/function () {
    var _get = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(endpoint, params) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (params === void 0) {
                params = {};
              }

              return _context.abrupt("return", this.axios.get(endpoint, {
                params: params
              }).then(function (d) {
                return d.data;
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function get(_x, _x2) {
      return _get.apply(this, arguments);
    }

    return get;
  }();

  _proto.post = /*#__PURE__*/function () {
    var _post = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(endpoint, data) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.axios.post(endpoint, data).then(function (d) {
                return d.data;
              }));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function post(_x3, _x4) {
      return _post.apply(this, arguments);
    }

    return post;
  }();

  return APIRequester;
}();

var BaseAPI = function BaseAPI(request) {
  this.request = void 0;
  this.request = request;
};

var BankAPI = /*#__PURE__*/function (_BaseAPI) {
  _inheritsLoose(BankAPI, _BaseAPI);

  function BankAPI() {
    return _BaseAPI.apply(this, arguments) || this;
  }

  var _proto = BankAPI.prototype;

  _proto.apiTokenBalance = /*#__PURE__*/function () {
    var _apiTokenBalance = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(token, accountAddress) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.request.get("/cosmos/bank/v1beta1/balances/" + accountAddress + "/by_denom", {
                denom: token.base
              }));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function apiTokenBalance(_x, _x2) {
      return _apiTokenBalance.apply(this, arguments);
    }

    return apiTokenBalance;
  }();

  _proto.apiAccountBalance = /*#__PURE__*/function () {
    var _apiAccountBalance = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(accountAddress) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.request.get("/cosmos/bank/v1beta1/balances/" + accountAddress));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function apiAccountBalance(_x3) {
      return _apiAccountBalance.apply(this, arguments);
    }

    return apiAccountBalance;
  }();

  return BankAPI;
}(BaseAPI);

var AuthAPI = /*#__PURE__*/function (_BaseAPI) {
  _inheritsLoose(AuthAPI, _BaseAPI);

  function AuthAPI() {
    return _BaseAPI.apply(this, arguments) || this;
  }

  var _proto = AuthAPI.prototype;

  _proto.apiAccountInfo = /*#__PURE__*/function () {
    var _apiAccountInfo = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(accountAddress) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.request.get("/cosmos/auth/v1beta1/accounts/" + accountAddress));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function apiAccountInfo(_x) {
      return _apiAccountInfo.apply(this, arguments);
    }

    return apiAccountInfo;
  }();

  return AuthAPI;
}(BaseAPI);

var SwapAPI = /*#__PURE__*/function (_BaseAPI) {
  _inheritsLoose(SwapAPI, _BaseAPI);

  function SwapAPI() {
    return _BaseAPI.apply(this, arguments) || this;
  }

  var _proto = SwapAPI.prototype;

  /**
   * find pool list by address array
   * @param addresses
   */
  _proto.apiPoolListByAddresses =
  /*#__PURE__*/
  function () {
    var _apiPoolListByAddresses = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(addresses) {
      var params;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = qs.stringify({
                addresses: addresses
              }, {
                indices: false
              });
              return _context.abrupt("return", this.request.get("/sophon-labs/sophon/swap/pool_slot0_aggregations?" + params));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function apiPoolListByAddresses(_x) {
      return _apiPoolListByAddresses.apply(this, arguments);
    }

    return apiPoolListByAddresses;
  }();

  _proto.apiPoolMetadataByAddress = /*#__PURE__*/function () {
    var _apiPoolMetadataByAddress = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(address) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.request.get("/sophon-labs/sophon/swap/pools/" + address));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function apiPoolMetadataByAddress(_x2) {
      return _apiPoolMetadataByAddress.apply(this, arguments);
    }

    return apiPoolMetadataByAddress;
  }();

  _proto.apiPoolMetadataPriceByAddress = /*#__PURE__*/function () {
    var _apiPoolMetadataPriceByAddress = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(address) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this.request.get("/sophon-labs/sophon/swap/pools/" + address + "/slot0"));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function apiPoolMetadataPriceByAddress(_x3) {
      return _apiPoolMetadataPriceByAddress.apply(this, arguments);
    }

    return apiPoolMetadataPriceByAddress;
  }();

  _proto.apiLiquidityPositionById = /*#__PURE__*/function () {
    var _apiLiquidityPositionById = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(tokenId) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", this.request.get("/sophon-labs/sophon/swap/liquidity_positions/" + tokenId));

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function apiLiquidityPositionById(_x4) {
      return _apiLiquidityPositionById.apply(this, arguments);
    }

    return apiLiquidityPositionById;
  }();

  _proto.apiLiquidityRewardsByIds = /*#__PURE__*/function () {
    var _apiLiquidityRewardsByIds = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(tokenIds) {
      var params;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              params = qs.stringify({
                tokenIds: tokenIds
              }, {
                indices: false
              });
              return _context5.abrupt("return", this.request.get("/sophon-labs/sophon/swap/liquidity_position_by_ids?" + params));

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function apiLiquidityRewardsByIds(_x5) {
      return _apiLiquidityRewardsByIds.apply(this, arguments);
    }

    return apiLiquidityRewardsByIds;
  }();

  _proto.apiTickImagePath = /*#__PURE__*/function () {
    var _apiTickImagePath = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(tokenId) {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", this.request.get("/sophon-labs/sophon/swap/liquidity_positions/" + tokenId + "/token_uri"));

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function apiTickImagePath(_x6) {
      return _apiTickImagePath.apply(this, arguments);
    }

    return apiTickImagePath;
  }();

  _proto.apiActiveFarmList = /*#__PURE__*/function () {
    var _apiActiveFarmList = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", this.request.get("/sophon-labs/sophon/swap/core_pools"));

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function apiActiveFarmList() {
      return _apiActiveFarmList.apply(this, arguments);
    }

    return apiActiveFarmList;
  }();

  _proto.apiLiquidityPositionList = /*#__PURE__*/function () {
    var _apiLiquidityPositionList = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(accountAddress, skip_zero_liquidity) {
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", this.request.get("/sophon-labs/sophon/swap/liquidity_positions_owner/" + accountAddress, {
                skip_zero_liquidity: skip_zero_liquidity
              }));

            case 1:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function apiLiquidityPositionList(_x7, _x8) {
      return _apiLiquidityPositionList.apply(this, arguments);
    }

    return apiLiquidityPositionList;
  }();

  return SwapAPI;
}(BaseAPI);

var TokenAPI = /*#__PURE__*/function (_BaseAPI) {
  _inheritsLoose(TokenAPI, _BaseAPI);

  function TokenAPI() {
    return _BaseAPI.apply(this, arguments) || this;
  }

  var _proto = TokenAPI.prototype;

  _proto.apiTokenMetadatasByDenom = /*#__PURE__*/function () {
    var _apiTokenMetadatasByDenom = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(denom) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.request.get("/sophon-labs/sophon/token/metadatas/by_denom", {
                denom: denom
              }));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function apiTokenMetadatasByDenom(_x) {
      return _apiTokenMetadatasByDenom.apply(this, arguments);
    }

    return apiTokenMetadatasByDenom;
  }();

  _proto.apiTokenMetadatas = /*#__PURE__*/function () {
    var _apiTokenMetadatas = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.request.get("/sophon-labs/sophon/token/metadatas"));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function apiTokenMetadatas() {
      return _apiTokenMetadatas.apply(this, arguments);
    }

    return apiTokenMetadatas;
  }();

  return TokenAPI;
}(BaseAPI);

var TxAPI = /*#__PURE__*/function (_BaseAPI) {
  _inheritsLoose(TxAPI, _BaseAPI);

  function TxAPI() {
    return _BaseAPI.apply(this, arguments) || this;
  }

  var _proto = TxAPI.prototype;

  _proto.estimateGas = /*#__PURE__*/function () {
    var _estimateGas = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(txBytes) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.request.post("/cosmos/tx/v1beta1/simulate", {
                tx_bytes: txBytes
              }));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function estimateGas(_x) {
      return _estimateGas.apply(this, arguments);
    }

    return estimateGas;
  }();

  _proto._broadcast = /*#__PURE__*/function () {
    var _broadcast2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(tx, mode) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.request.post("/cosmos/tx/v1beta1/txs"));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function _broadcast(_x2, _x3) {
      return _broadcast2.apply(this, arguments);
    }

    return _broadcast;
  }();

  _proto.broadcast = /*#__PURE__*/function () {
    var _broadcast3 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(tx) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this._broadcast(tx, "BROADCAST_MODE_BLOCK"));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function broadcast(_x4) {
      return _broadcast3.apply(this, arguments);
    }

    return broadcast;
  }();

  _proto.txInfo = /*#__PURE__*/function () {
    var _txInfo = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(txHash) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", this.request.get("/cosmos/tx/v1beta1/txs/" + txHash));

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function txInfo(_x5) {
      return _txInfo.apply(this, arguments);
    }

    return txInfo;
  }();

  return TxAPI;
}(BaseAPI);

function to32(value) {
  var arr = value.split(",");
  var len = 32 - arr.length;
  var result = [];
  arr.forEach(function (item) {
    result.push(+item);
  });

  for (var i = 0; i < len; i++) {
    result.unshift(0);
  }

  return result;
}

function deepCopy(source) {
  // if (typeof source != "object") {
  //   return source;
  // }
  // if (source == null) {
  //   return source;
  // }
  // const newObj = source.constructor === Array ? [] as Array<T> : {};
  // for (const i in source) {
  //   newObj[i] = deepCopy(source[i]);
  // }
  // return newObj;
  return JSON.parse(JSON.stringify(source));
}

function encrypt(value, prefix, suffix) {
  if (prefix === void 0) {
    prefix = 6;
  }

  if (suffix === void 0) {
    suffix = 4;
  }

  if (value) {
    return value.substr(0, prefix) + "..." + value.substr(-suffix);
  } else {
    return value;
  }
}

var ONE_DAY_TO_SECONDS = 86400;
var ONE_YEAR_TO_DAYS = 365;

var _FEE_AMOUNT_DETAIL;

(function (Fee_Amount) {
  Fee_Amount[Fee_Amount["LOWEST"] = 100] = "LOWEST";
  Fee_Amount[Fee_Amount["LOW"] = 500] = "LOW";
  Fee_Amount[Fee_Amount["MEDIUM"] = 3000] = "MEDIUM";
  Fee_Amount[Fee_Amount["HIGH"] = 10000] = "HIGH";
})(exports.Fee_Amount || (exports.Fee_Amount = {}));

var FEE_AMOUNT_DETAIL = (_FEE_AMOUNT_DETAIL = {}, _FEE_AMOUNT_DETAIL[exports.Fee_Amount.LOWEST] = {
  label: "0.01",
  value: exports.Fee_Amount.LOWEST,
  description: "Best for very stable pairs."
}, _FEE_AMOUNT_DETAIL[exports.Fee_Amount.LOW] = {
  label: "0.05",
  value: exports.Fee_Amount.LOW,
  description: "Best for stable pairs."
}, _FEE_AMOUNT_DETAIL[exports.Fee_Amount.MEDIUM] = {
  label: "0.3",
  value: exports.Fee_Amount.MEDIUM,
  description: "Best for most pairs."
}, _FEE_AMOUNT_DETAIL[exports.Fee_Amount.HIGH] = {
  label: "1",
  value: exports.Fee_Amount.HIGH,
  description: "Best for exotic pairs."
}, _FEE_AMOUNT_DETAIL);

var _CHAIN_NAMES, _NETWORK_DETAILS;

(function (Chain_Id) {
  Chain_Id["Mainnet"] = "metaos_99237-1";
  Chain_Id["Testnet"] = "metaos_99237-2";
  Chain_Id["Devnet"] = "metaos_99237-3";
})(exports.Chain_Id || (exports.Chain_Id = {}));

var CHAIN_NAMES = (_CHAIN_NAMES = {}, _CHAIN_NAMES[exports.Chain_Id.Mainnet] = 'Mainnet', _CHAIN_NAMES[exports.Chain_Id.Testnet] = 'Testnet', _CHAIN_NAMES[exports.Chain_Id.Devnet] = 'Devnet', _CHAIN_NAMES);
var NETWORK_DETAILS = (_NETWORK_DETAILS = {}, _NETWORK_DETAILS[exports.Chain_Id.Mainnet] = {
  chainId: 'metaos_99237-1',
  chainName: 'Metaos Mainnet',
  nativeCurrency: {
    base: 'umtos',
    name: 'MetaOS',
    symbol: 'MTOS',
    decimals: 18
  },
  rpcUrl: 'https://node.metaos.im',
  blockExplorerUrl: 'https://scan.metaos.im'
}, _NETWORK_DETAILS[exports.Chain_Id.Testnet] = {
  chainId: 'metaos_99237-2',
  chainName: 'Metaos Mainnet',
  nativeCurrency: {
    base: 'umtos',
    name: 'MetaOS',
    symbol: 'MTOS',
    decimals: 18
  },
  rpcUrl: 'https://node.metaos.im',
  blockExplorerUrl: 'https://scan.metaos.im'
}, _NETWORK_DETAILS[exports.Chain_Id.Devnet] = {
  chainId: 'metaos_99237-3',
  chainName: 'Metaos Mainnet',
  nativeCurrency: {
    base: 'umtos',
    name: 'MetaOS',
    symbol: 'MTOS',
    decimals: 18
  },
  rpcUrl: 'https://node.metaos.im',
  blockExplorerUrl: 'https://scan.metaos.im'
}, _NETWORK_DETAILS);

var ZERO = "0";

var DEFAULT_USER_PRECISION = 6;
var DEFAULT_PRECISION = 18;
var MAX_PRECISION = 28;
var REG_NUMBER = /*#__PURE__*/new RegExp("^[1-9]+[0-9]*(\\.\\d{0," + DEFAULT_PRECISION + "})?$");
var REG_DECIMAL_SIMPLE = /^\d*(\.\d*)?$/;
var REG_DECIMAL = /*#__PURE__*/new RegExp("^0(\\.\\d{0," + DEFAULT_PRECISION + "})?$");

var TICK_SPACINGS = {
  100: 1,
  500: 10,
  3000: 60,
  10000: 200
};
var BASE_UNIT_TICK = 1.0001;

function toDecimalPlaces(value, precision) {
  if (precision === void 0) {
    precision = DEFAULT_PRECISION;
  }

  try {
    return new Decimal(value).toDecimalPlaces(precision, Decimal.ROUND_UP).toString();
  } catch (e) {
    return String(value || "-");
  }
}
function toAmountString(value, precision, roundingMode) {
  if (value === void 0) {
    value = "";
  }

  if (precision === void 0) {
    precision = DEFAULT_USER_PRECISION;
  }

  if (roundingMode === void 0) {
    roundingMode = Decimal.ROUND_DOWN;
  }

  try {
    return new Decimal(value).toSignificantDigits(precision, roundingMode).toString();
  } catch (e) {
    return String(value || "-");
  }
}
function toAmountFloor(value, precision) {
  if (precision === void 0) {
    precision = DEFAULT_USER_PRECISION;
  }

  return toAmountString(value, precision, Decimal.ROUND_DOWN);
}
function toAmountCeil(value, precision) {
  if (precision === void 0) {
    precision = DEFAULT_USER_PRECISION;
  }

  return toAmountString(value, precision, Decimal.ROUND_UP);
}
function toAmountFee(value, precision) {
  if (precision === void 0) {
    precision = DEFAULT_PRECISION;
  }

  try {
    return new Decimal(value).toDecimalPlaces(precision, Decimal.ROUND_DOWN).toString();
  } catch (e) {
    return String(value || "-");
  }
}
function isEmptyAmount(value, precision) {
  if (precision === void 0) {
    precision = MAX_PRECISION;
  }

  var _value = new Decimal(value).mul(Math.pow(10, precision)).floor();

  return _value.isZero();
}
function toExactAmount(value, precision) {
  if (precision === void 0) {
    precision = MAX_PRECISION;
  }

  try {
    return math.Decimal.fromUserInput(value, precision).toString();
  } catch (e) {
    return String(value || "-");
  }
}
var formatNumber = function formatNumber(value, seperator, fixed) {
  if (seperator === void 0) {
    seperator = 3;
  }

  if (fixed === void 0) {
    fixed = 2;
  }

  return new Decimal(value).div(new Decimal(10).pow(seperator)).toFixed(fixed) + "k";
};

moment.locale("en-ca");
function formatMoment(value, pattern) {
  if (pattern === void 0) {
    pattern = "YYYY/MM/DD HH:mm:ss";
  }

  return moment(+value).format(pattern);
}
function formatUnixMoment(value, pattern) {
  if (pattern === void 0) {
    pattern = "MM/DD HH:mm:ss";
  }

  return moment(+value * 1000).format(pattern);
}
var formatTime = function formatTime(time) {
  return moment(time).format("YYYY-MM-DD HH:mm:ss");
};
var formatDiffTime = function formatDiffTime(time) {
  return moment(time).fromNow();
};

function toUsd(value) {
  try {
    return "$" + new Decimal(value).toFixed(2);
  } catch (e) {
    return String(value || "-");
  }
}

function getPoolAddress(denom0, denom1, fee) {
  var key;

  if (denom0 > denom1) {
    key = denom1 + "-" + denom0 + "-" + fee;
  } else {
    key = denom0 + "-" + denom1 + "-" + fee;
  } // console.log('poolAddress: ' + Bech32.encode('sop', sha256(toUtf8(key)).slice(0, 20)));


  return encoding.Bech32.encode("sop", crypto.sha256(encoding.toUtf8(key)).slice(0, 20));
}

function getPercentByFeeAmount(fee) {
  if (fee) {
    return FEE_AMOUNT_DETAIL[fee].label + "%";
  } else {
    return "-";
  }
}

function isNumeric(value) {
  return !isNaN(parseFloat(value)); // return new Decimal(value).lessThan(ZERO);
}
function checkInputNumber(value) {
  if (REG_NUMBER.test(value) || REG_DECIMAL.test(value) === true) {
    return true;
  }

  return false;
}

function plus(value1, value2) {
  return new Decimal(value1).plus(value2).toString();
}
function minus(value1, value2) {
  return new Decimal(value1).minus(value2).toString();
}
function multipliedBy(value1, value2) {
  return new Decimal(value1).mul(value2).toString();
}
function div(value1, value2) {
  return new Decimal(value1).div(value2).toString();
}
function isGreaterThan(value1, value2) {
  return new Decimal(value1).greaterThanOrEqualTo(value2);
}
function isLessThan(value1, value2) {
  return new Decimal(value1).lessThan(value2);
}
function isEqualTo(value1, value2) {
  return new Decimal(value1).equals(value2);
}
function pow18(value) {
  return new Decimal(value).mul(Math.pow(10, DEFAULT_PRECISION)).toFixed();
}
function pow(value, precision, round) {
  if (precision === void 0) {
    precision = DEFAULT_PRECISION;
  }

  if (round === void 0) {
    round = Decimal.ROUND_DOWN;
  }

  if (value === "") {
    return "0";
  }

  var _value = new Decimal(value).mul(Math.pow(10, precision));

  if (round === Decimal.ROUND_UP) {
    return _value.ceil().toFixed();
  }

  return _value.floor().toFixed();
}
function powM18(value) {
  return new Decimal(value).div(Math.pow(10, DEFAULT_PRECISION)).toString();
}
function shift(value, precision) {
  if (precision === void 0) {
    precision = DEFAULT_PRECISION;
  }

  return new Decimal(value).div(Math.pow(10, precision)).toFixed();
}
function isPositive(value) {
  if (!value) {
    return false;
  }

  return new Decimal(value).greaterThan(0);
}

function objectToMap(source) {
  return new Map(Object.entries(source));
}
function arrayToMap(array, property) {
  var map = new Map();

  for (var _iterator = _createForOfIteratorHelperLoose(array), _step; !(_step = _iterator()).done;) {
    var item = _step.value;
    map.set(item[property], item);
  }

  return map;
}

function sortsBefore(baseToken, quoteToken) {
  return baseToken.base.toLowerCase() < quoteToken.base.toLowerCase();
}

function toPercent(value, hundred) {
  if (hundred === void 0) {
    hundred = true;
  }

  try {
    if (hundred) {
      return new Decimal(value).mul(100).toFixed(2) + "%";
    } else {
      return new Decimal(value).toFixed(2) + "%";
    }
  } catch (e) {
    return value.toString();
  }
}

var decimalNumber = function decimalNumber(number) {
  if (number === void 0) {
    number = " ";
  }

  var _number$toString$repl = number.toString().replace("$", "").split("."),
      _number$toString$repl2 = _number$toString$repl[0],
      _int = _number$toString$repl2 === void 0 ? "" : _number$toString$repl2,
      _number$toString$repl3 = _number$toString$repl[1],
      _float = _number$toString$repl3 === void 0 ? "" : _number$toString$repl3;

  if (_int.length > 10) {
    return new Decimal(_int).div(new Decimal(10).pow(10)).toFixed(2) + "B";
  } else if (_int.length > 7) {
    return new Decimal(_int).div(new Decimal(10).pow(7)).toFixed(2) + "M";
  } else if (_int.length > 3) {
    return new Decimal(_int).div(new Decimal(10).pow(3)).toFixed(2) + "K";
  } else {
    return (Number(_int) > 0 ? _int : 0) + "." + (_float.length > 0 ? _float.slice(0, 2) : "00");
  }
};

(function (Bound) {
  Bound["LOWER"] = "LOWER";
  Bound["UPPER"] = "UPPER";
})(exports.Bound || (exports.Bound = {}));

(function (Tip_Level) {
  Tip_Level["Info"] = "info";
  Tip_Level["Warning"] = "warning";
  Tip_Level["Error"] = "error";
})(exports.Tip_Level || (exports.Tip_Level = {}));

(function (Swap_Direction) {
  Swap_Direction["In"] = "exactIn";
  Swap_Direction["Out"] = "exactOut";
})(exports.Swap_Direction || (exports.Swap_Direction = {}));

(function (Transaction_Status) {
  Transaction_Status["Wallet"] = "wallet";
  Transaction_Status["Pending"] = "pending";
  Transaction_Status["Complete"] = "complete";
  Transaction_Status["Success"] = "success";
  Transaction_Status["Error"] = "error";
  Transaction_Status["Reject"] = "reject";
})(exports.Transaction_Status || (exports.Transaction_Status = {}));

function longToNumber(_long) {
  if (_long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }

  return _long.toNumber();
}

var LiquidityMath = /*#__PURE__*/function () {
  function LiquidityMath() {}

  LiquidityMath.getRightSideLiquidity = function getRightSideLiquidity(leftRangeValue, // pa
  rightRangeValue, // pb
  priceValue, amount) {
    var numerator = new Decimal(amount);

    var _value1 = new Decimal(1).div(Decimal.sqrt(leftRangeValue));

    var _value2 = new Decimal(1).div(Decimal.sqrt(rightRangeValue));

    var denominator = Decimal.sub(_value1, _value2);
    return numerator.div(denominator);
  };

  LiquidityMath.getLeftSideLiquidity = function getLeftSideLiquidity(leftRangeValue, // pa
  rightRangeValue, // pb
  priceValue, amount) {
    var numerator = new Decimal(amount);
    var denominator = Decimal.sub(Decimal.sqrt(rightRangeValue), Decimal.sqrt(leftRangeValue));
    return numerator.div(denominator);
  };

  LiquidityMath.getLiquidityFromAmount0 = function getLiquidityFromAmount0(leftRangeValue, // pa
  rightRangeValue, // pb
  priceValue, amount0) {
    var pc = new Decimal(priceValue);

    if (pc.lessThan(leftRangeValue) === true) {
      return this.getRightSideLiquidity(leftRangeValue, rightRangeValue, priceValue, amount0);
    } else if (pc.greaterThan(rightRangeValue) === true) {
      return this.getLeftSideLiquidity(leftRangeValue, rightRangeValue, priceValue, amount0);
    }

    var deltaX = new Decimal(amount0);

    var _value1 = new Decimal(1).div(Decimal.sqrt(priceValue));

    var _value2 = new Decimal(1).div(Decimal.sqrt(rightRangeValue));

    var denominator = Decimal.sub(_value1, _value2);
    return deltaX.div(denominator);
  };

  LiquidityMath._getDiverForDeltaX = function _getDiverForDeltaX(lower, upper) {
    var _value1 = new Decimal(1).div(Decimal.sqrt(lower));

    var _value2 = new Decimal(1).div(Decimal.sqrt(upper));

    return Decimal.sub(_value1, _value2);
  };

  LiquidityMath._getDiverForDeltaY = function _getDiverForDeltaY(lower, upper) {
    return Decimal.sub(Decimal.sqrt(upper), Decimal.sqrt(lower));
  };

  LiquidityMath.getLiquidityFromAmount1 = function getLiquidityFromAmount1(leftRangeValue, // pa
  rightRangeValue, // pb
  priceValue, amount1) {
    var pc = new Decimal(priceValue);

    if (pc.lessThan(leftRangeValue) === true) {
      return this.getRightSideLiquidity(leftRangeValue, rightRangeValue, priceValue, amount1);
    } else if (pc.greaterThan(rightRangeValue) === true) {
      return this.getLeftSideLiquidity(leftRangeValue, rightRangeValue, priceValue, amount1);
    }

    var deltaY = new Decimal(amount1);
    var denominator = Decimal.sub(Decimal.sqrt(priceValue), Decimal.sqrt(leftRangeValue));
    return deltaY.div(denominator);
  };

  LiquidityMath.getAmount1FromAmount0 = function getAmount1FromAmount0(leftRangeValue, // pa
  rightRangeValue, // pb
  priceValue, amount0, token0) {
    var liquidity = this.getLiquidityFromAmount0(leftRangeValue, rightRangeValue, priceValue, amount0);
    console.log("liquidity: " + liquidity);

    var _value1 = new Decimal(liquidity);

    var _value2 = this._getDiverForDeltaY(leftRangeValue, priceValue);

    return _value1.mul(_value2).toString();
  };

  LiquidityMath.getAmount0FromAmount1 = function getAmount0FromAmount1(leftRangeValue, // pa
  rightRangeValue, // pb
  priceValue, amount1, token1) {
    var liquidity = this.getLiquidityFromAmount1(leftRangeValue, rightRangeValue, priceValue, amount1);
    console.log("liquidity: " + liquidity);

    var _value1 = new Decimal(liquidity);

    var _value2 = this._getDiverForDeltaX(priceValue, rightRangeValue);

    return _value1.mul(_value2).toString();
  };

  LiquidityMath.getAmountByLiquidity = function getAmountByLiquidity(leftRangeValue, rightRangeValue, priceValue, liquidity, token0, token1) {
    var pc = new Decimal(priceValue);

    var _value1 = new Decimal(liquidity);

    if (pc.lessThan(leftRangeValue) === true) {
      var _value2 = this._getDiverForDeltaX(leftRangeValue, rightRangeValue);

      return {
        amount0: toDecimalPlaces(_value1.mul(_value2), token0.display_exponent),
        amount1: "0"
      };
    } else if (pc.greaterThan(rightRangeValue) === true) {
      var _value = this._getDiverForDeltaY(leftRangeValue, rightRangeValue);

      return {
        amount0: "0",
        amount1: toDecimalPlaces(_value1.mul(_value), token1.display_exponent)
      };
    }

    var deltaXDiver = this._getDiverForDeltaX(priceValue, rightRangeValue);

    var deltaYDiver = this._getDiverForDeltaY(leftRangeValue, priceValue);

    return {
      amount0: toDecimalPlaces(_value1.mul(deltaXDiver), token0.display_exponent),
      amount1: toDecimalPlaces(_value1.mul(deltaYDiver), token1.display_exponent)
    };
  };

  return LiquidityMath;
}();

var TickMath = /*#__PURE__*/function () {
  function TickMath() {}

  TickMath.priceToClosestTick = function priceToClosestTick(price) {
    var numerator = Decimal.log2(Decimal.sqrt(price));
    var denominator = Decimal.log2(Decimal.sqrt(BASE_UNIT_TICK));
    return numerator.div(denominator).toNumber();
  }
  /**
   * Compute nearest tick of price for input
   * @param feeAmount
   * @param value
   */
  ;

  TickMath.getNearestTickByPrice = function getNearestTickByPrice(feeAmount, value) {
    var _value = value.trim();

    if (_value === "") {
      return this.INVALID_TICK;
    }

    if (value === this.MIN_TICK_VALUE) {
      return this.MIN_TICK;
    }

    if (value === this.MAX_TICK_VALUE) {
      return this.MAX_TICK;
    }

    var tick = this.priceToClosestTick(value); // console.log(`[priceToClosestTick]: ` + tick);

    var result = this.nearestUsableTick(tick, TICK_SPACINGS[feeAmount]); // console.log(`[nearestUsableTick]: ` + result);

    return result;
  };

  TickMath.getFormattedPriceByTick = function getFormattedPriceByTick(tick, fee) {
    if (tick === this.INVALID_TICK) {
      return "";
    }

    if (this.isLowestTick(tick, fee)) {
      return this.MIN_TICK_VALUE;
    }

    if (this.isHighestTick(tick, fee)) {
      return this.MAX_TICK_VALUE;
    }

    var base = Decimal.pow(Decimal.sqrt(BASE_UNIT_TICK), tick);
    return Decimal.pow(base, 2).toString();
  };

  TickMath.getPriceByTick = function getPriceByTick(tick) {
    if (tick === this.INVALID_TICK) {
      return "";
    } // if (this.isLowestTick(tick, fee)) {
    //   return this.MIN_TICK_VALUE;
    // }
    // if (this.isHighestTick(tick, fee)) {
    //   return this.MAX_TICK_VALUE;
    // }


    var base = Decimal.pow(Decimal.sqrt(BASE_UNIT_TICK), tick);
    return Decimal.pow(base, 2).toString();
  };

  TickMath.getNearestPriceByInput = function getNearestPriceByInput(feeAmount, price) {
    // console.log('INPUT price: ' + price);
    var nearestTick = this.getNearestTickByPrice(feeAmount, price);
    var result = this.getPriceByTick(nearestTick); // console.log('getPriceByTick: ' + result);
    // console.log('==========');

    return toAmountString(result);
  };

  TickMath.getPriceBySqrtPrice = function getPriceBySqrtPrice(sqrtPrice) {
    if (!sqrtPrice) {
      return "";
    }

    if (sqrtPrice === "0") {
      return "0";
    }

    return new Decimal(sqrtPrice).pow(2).toString();
  };

  TickMath.getSqrtPriceByPrice = function getSqrtPriceByPrice(price) {
    if (price === "0") {
      return "0";
    }

    return new Decimal(price).sqrt().toString();
  };

  TickMath.getBaseTickRange = function getBaseTickRange(fromToken, toToken, fee, leftRange, rightRange) {
    var tickLower;
    var tickUpper;

    if (sortsBefore(fromToken, toToken)) {
      tickLower = leftRange === TickMath.MIN_TICK_VALUE ? TickMath.getNearestLowestTick(fee) : TickMath.getNearestTickByPrice(fee, leftRange);
      tickUpper = rightRange === TickMath.MAX_TICK_VALUE ? TickMath.getNearestHighestTick(fee) : TickMath.getNearestTickByPrice(fee, rightRange);
    } else {
      if (leftRange === TickMath.MIN_TICK_VALUE) {
        tickUpper = TickMath.getNearestHighestTick(fee);
      } else {
        tickUpper = TickMath.getNearestTickByPrice(fee, new Decimal(1).div(leftRange).toString());
      }

      if (rightRange === TickMath.MAX_TICK_VALUE) {
        tickLower = TickMath.getNearestLowestTick(fee);
      } else {
        tickLower = TickMath.getNearestTickByPrice(fee, new Decimal(1).div(rightRange).toString());
      }
    }

    console.log("tickLower: " + tickLower);
    console.log("tickUpper: " + tickUpper);
    return {
      tickLower: tickLower,
      tickUpper: tickUpper
    };
  };

  TickMath.getNearestLowestTick = function getNearestLowestTick(fee) {
    var tickLower = this.nearestUsableTick(this.MIN_TICK, TICK_SPACINGS[fee]); // console.log('getNearestLowestTick: ' + tickLower);

    return tickLower;
  };

  TickMath.getNearestHighestTick = function getNearestHighestTick(fee) {
    var tickUpper = this.nearestUsableTick(this.MAX_TICK, TICK_SPACINGS[fee]); // console.log('getNearestHighestTick: ' + tickUpper);

    return tickUpper;
  };

  TickMath.getNearestPricesByFullTick = function getNearestPricesByFullTick(fee) {
    var tickLower = this.nearestUsableTick(this.MIN_TICK, TICK_SPACINGS[fee]);
    var tickUpper = this.nearestUsableTick(this.MAX_TICK, TICK_SPACINGS[fee]);
    var lowestPrice = this.getPriceByTick(tickLower);
    var highestPrice = this.getPriceByTick(tickUpper);
    return {
      lowestPrice: lowestPrice,
      highestPrice: highestPrice
    };
  };

  TickMath.isHighestTick = function isHighestTick(tick, fee) {
    var highestTick = this.getNearestHighestTick(fee);
    return tick >= highestTick;
  };

  TickMath.isLowestTick = function isLowestTick(tick, fee) {
    var lowestTick = this.getNearestLowestTick(fee);
    return tick <= lowestTick;
  };

  return TickMath;
}();
TickMath.INVALID_TICK = -99999999;
TickMath.MIN_TICK = -887272;
TickMath.MIN_TICK_VALUE = "0";
TickMath.MAX_TICK = -TickMath.MIN_TICK;
TickMath.MAX_TICK_VALUE = "∞";

TickMath.nearestUsableTick = function (tick, tickSpacing) {
  var rounded = Math.round(tick / tickSpacing) * tickSpacing;
  if (rounded < TickMath.MIN_TICK) return rounded + tickSpacing;else if (rounded > TickMath.MAX_TICK) return rounded - tickSpacing;else return rounded;
};

var TransactionLooper = function TransactionLooper(txHash, description, status, onTransactionSuccess) {
  this.transactionHash = void 0;
  this.description = void 0;
  this.status = void 0;
  this.counter = void 0;
  this.onTransactionSuccess = void 0;
  this.transactionHash = txHash;
  this.description = description;
  this.status = status;
  this.counter = 0;
  this.onTransactionSuccess = onTransactionSuccess;
};

var APIClient = // API access
function APIClient(URL, chainId) {

  this.apiRequester = void 0;
  this.bankAPI = void 0;
  this.authAPI = void 0;
  this.swapAPI = void 0;
  this.txAPI = void 0;
  this.tokenAPI = void 0;
  this.nodeUrl = void 0;
  this.nodeUrl = URL;
  this.apiRequester = new APIRequester(URL); // instantiate APIs

  this.bankAPI = new BankAPI(this.apiRequester);
  this.authAPI = new AuthAPI(this.apiRequester);
  this.tokenAPI = new TokenAPI(this.apiRequester);
  this.swapAPI = new SwapAPI(this.apiRequester);
  this.txAPI = new TxAPI(this.apiRequester);
};

var BaseMsg = function BaseMsg() {};

/* eslint-disable */

function createBaseTimestamp() {
  return {
    seconds: Long.ZERO,
    nanos: 0
  };
}

var Timestamp = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (!message.seconds.isZero()) {
      writer.uint32(8).int64(message.seconds);
    }

    if (message.nanos !== 0) {
      writer.uint32(16).int32(message.nanos);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTimestamp();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.seconds = reader.int64();
          break;

        case 2:
          message.nanos = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      seconds: isSet(object.seconds) ? Long.fromValue(object.seconds) : Long.ZERO,
      nanos: isSet(object.nanos) ? Number(object.nanos) : 0
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.seconds !== undefined && (obj.seconds = (message.seconds || Long.ZERO).toString());
    message.nanos !== undefined && (obj.nanos = Math.round(message.nanos));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$nanos;

    var message = createBaseTimestamp();
    message.seconds = object.seconds !== undefined && object.seconds !== null ? Long.fromValue(object.seconds) : Long.ZERO;
    message.nanos = (_object$nanos = object.nanos) != null ? _object$nanos : 0;
    return message;
  }
};

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long;

  _m0.configure();
}

function isSet(value) {
  return value !== null && value !== undefined;
}

var protobufPackage = "sophonlabs.sophon.swap";

function createBaseMsgCreatePool() {
  return {
    creator: "",
    denom0: "",
    denom1: "",
    fee: 0,
    sqrtPrice: ""
  };
}

var MsgCreatePool = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom0 !== "") {
      writer.uint32(18).string(message.denom0);
    }

    if (message.denom1 !== "") {
      writer.uint32(26).string(message.denom1);
    }

    if (message.fee !== 0) {
      writer.uint32(32).int32(message.fee);
    }

    if (message.sqrtPrice !== "") {
      writer.uint32(42).string(message.sqrtPrice);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreatePool();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.denom0 = reader.string();
          break;

        case 3:
          message.denom1 = reader.string();
          break;

        case 4:
          message.fee = reader.int32();
          break;

        case 5:
          message.sqrtPrice = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$1(object.creator) ? String(object.creator) : "",
      denom0: isSet$1(object.denom0) ? String(object.denom0) : "",
      denom1: isSet$1(object.denom1) ? String(object.denom1) : "",
      fee: isSet$1(object.fee) ? Number(object.fee) : 0,
      sqrtPrice: isSet$1(object.sqrtPrice) ? String(object.sqrtPrice) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom0 !== undefined && (obj.denom0 = message.denom0);
    message.denom1 !== undefined && (obj.denom1 = message.denom1);
    message.fee !== undefined && (obj.fee = Math.round(message.fee));
    message.sqrtPrice !== undefined && (obj.sqrtPrice = message.sqrtPrice);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator, _object$denom, _object$denom2, _object$fee, _object$sqrtPrice;

    var message = createBaseMsgCreatePool();
    message.creator = (_object$creator = object.creator) != null ? _object$creator : "";
    message.denom0 = (_object$denom = object.denom0) != null ? _object$denom : "";
    message.denom1 = (_object$denom2 = object.denom1) != null ? _object$denom2 : "";
    message.fee = (_object$fee = object.fee) != null ? _object$fee : 0;
    message.sqrtPrice = (_object$sqrtPrice = object.sqrtPrice) != null ? _object$sqrtPrice : "";
    return message;
  }
};

function createBaseMsgCreatePosition() {
  return {
    creator: "",
    denom0: "",
    denom1: "",
    fee: 0,
    tickLower: 0,
    tickUpper: 0,
    amount0Desired: "",
    amount1Desired: "",
    amount0Min: "",
    amount1Min: "",
    recipient: "",
    deadline: undefined
  };
}

var MsgCreatePosition = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom0 !== "") {
      writer.uint32(18).string(message.denom0);
    }

    if (message.denom1 !== "") {
      writer.uint32(26).string(message.denom1);
    }

    if (message.fee !== 0) {
      writer.uint32(32).int32(message.fee);
    }

    if (message.tickLower !== 0) {
      writer.uint32(40).int32(message.tickLower);
    }

    if (message.tickUpper !== 0) {
      writer.uint32(48).int32(message.tickUpper);
    }

    if (message.amount0Desired !== "") {
      writer.uint32(58).string(message.amount0Desired);
    }

    if (message.amount1Desired !== "") {
      writer.uint32(66).string(message.amount1Desired);
    }

    if (message.amount0Min !== "") {
      writer.uint32(74).string(message.amount0Min);
    }

    if (message.amount1Min !== "") {
      writer.uint32(82).string(message.amount1Min);
    }

    if (message.recipient !== "") {
      writer.uint32(90).string(message.recipient);
    }

    if (message.deadline !== undefined) {
      Timestamp.encode(toTimestamp(message.deadline), writer.uint32(98).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreatePosition();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.denom0 = reader.string();
          break;

        case 3:
          message.denom1 = reader.string();
          break;

        case 4:
          message.fee = reader.int32();
          break;

        case 5:
          message.tickLower = reader.int32();
          break;

        case 6:
          message.tickUpper = reader.int32();
          break;

        case 7:
          message.amount0Desired = reader.string();
          break;

        case 8:
          message.amount1Desired = reader.string();
          break;

        case 9:
          message.amount0Min = reader.string();
          break;

        case 10:
          message.amount1Min = reader.string();
          break;

        case 11:
          message.recipient = reader.string();
          break;

        case 12:
          message.deadline = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$1(object.creator) ? String(object.creator) : "",
      denom0: isSet$1(object.denom0) ? String(object.denom0) : "",
      denom1: isSet$1(object.denom1) ? String(object.denom1) : "",
      fee: isSet$1(object.fee) ? Number(object.fee) : 0,
      tickLower: isSet$1(object.tickLower) ? Number(object.tickLower) : 0,
      tickUpper: isSet$1(object.tickUpper) ? Number(object.tickUpper) : 0,
      amount0Desired: isSet$1(object.amount0Desired) ? String(object.amount0Desired) : "",
      amount1Desired: isSet$1(object.amount1Desired) ? String(object.amount1Desired) : "",
      amount0Min: isSet$1(object.amount0Min) ? String(object.amount0Min) : "",
      amount1Min: isSet$1(object.amount1Min) ? String(object.amount1Min) : "",
      recipient: isSet$1(object.recipient) ? String(object.recipient) : "",
      deadline: isSet$1(object.deadline) ? fromJsonTimestamp(object.deadline) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom0 !== undefined && (obj.denom0 = message.denom0);
    message.denom1 !== undefined && (obj.denom1 = message.denom1);
    message.fee !== undefined && (obj.fee = Math.round(message.fee));
    message.tickLower !== undefined && (obj.tickLower = Math.round(message.tickLower));
    message.tickUpper !== undefined && (obj.tickUpper = Math.round(message.tickUpper));
    message.amount0Desired !== undefined && (obj.amount0Desired = message.amount0Desired);
    message.amount1Desired !== undefined && (obj.amount1Desired = message.amount1Desired);
    message.amount0Min !== undefined && (obj.amount0Min = message.amount0Min);
    message.amount1Min !== undefined && (obj.amount1Min = message.amount1Min);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.deadline !== undefined && (obj.deadline = message.deadline.toISOString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator2, _object$denom3, _object$denom4, _object$fee2, _object$tickLower, _object$tickUpper, _object$amount0Desire, _object$amount1Desire, _object$amount0Min, _object$amount1Min, _object$recipient, _object$deadline;

    var message = createBaseMsgCreatePosition();
    message.creator = (_object$creator2 = object.creator) != null ? _object$creator2 : "";
    message.denom0 = (_object$denom3 = object.denom0) != null ? _object$denom3 : "";
    message.denom1 = (_object$denom4 = object.denom1) != null ? _object$denom4 : "";
    message.fee = (_object$fee2 = object.fee) != null ? _object$fee2 : 0;
    message.tickLower = (_object$tickLower = object.tickLower) != null ? _object$tickLower : 0;
    message.tickUpper = (_object$tickUpper = object.tickUpper) != null ? _object$tickUpper : 0;
    message.amount0Desired = (_object$amount0Desire = object.amount0Desired) != null ? _object$amount0Desire : "";
    message.amount1Desired = (_object$amount1Desire = object.amount1Desired) != null ? _object$amount1Desire : "";
    message.amount0Min = (_object$amount0Min = object.amount0Min) != null ? _object$amount0Min : "";
    message.amount1Min = (_object$amount1Min = object.amount1Min) != null ? _object$amount1Min : "";
    message.recipient = (_object$recipient = object.recipient) != null ? _object$recipient : "";
    message.deadline = (_object$deadline = object.deadline) != null ? _object$deadline : undefined;
    return message;
  }
};

function createBaseMsgIncreaseLiquidity() {
  return {
    creator: "",
    tokenId: "",
    amount0Desired: "",
    amount1Desired: "",
    amount0Min: "",
    amount1Min: "",
    deadline: undefined
  };
}

var MsgIncreaseLiquidity = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }

    if (message.amount0Desired !== "") {
      writer.uint32(26).string(message.amount0Desired);
    }

    if (message.amount1Desired !== "") {
      writer.uint32(34).string(message.amount1Desired);
    }

    if (message.amount0Min !== "") {
      writer.uint32(42).string(message.amount0Min);
    }

    if (message.amount1Min !== "") {
      writer.uint32(50).string(message.amount1Min);
    }

    if (message.deadline !== undefined) {
      Timestamp.encode(toTimestamp(message.deadline), writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgIncreaseLiquidity();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.tokenId = reader.string();
          break;

        case 3:
          message.amount0Desired = reader.string();
          break;

        case 4:
          message.amount1Desired = reader.string();
          break;

        case 5:
          message.amount0Min = reader.string();
          break;

        case 6:
          message.amount1Min = reader.string();
          break;

        case 7:
          message.deadline = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$1(object.creator) ? String(object.creator) : "",
      tokenId: isSet$1(object.tokenId) ? String(object.tokenId) : "",
      amount0Desired: isSet$1(object.amount0Desired) ? String(object.amount0Desired) : "",
      amount1Desired: isSet$1(object.amount1Desired) ? String(object.amount1Desired) : "",
      amount0Min: isSet$1(object.amount0Min) ? String(object.amount0Min) : "",
      amount1Min: isSet$1(object.amount1Min) ? String(object.amount1Min) : "",
      deadline: isSet$1(object.deadline) ? fromJsonTimestamp(object.deadline) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.amount0Desired !== undefined && (obj.amount0Desired = message.amount0Desired);
    message.amount1Desired !== undefined && (obj.amount1Desired = message.amount1Desired);
    message.amount0Min !== undefined && (obj.amount0Min = message.amount0Min);
    message.amount1Min !== undefined && (obj.amount1Min = message.amount1Min);
    message.deadline !== undefined && (obj.deadline = message.deadline.toISOString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator3, _object$tokenId, _object$amount0Desire2, _object$amount1Desire2, _object$amount0Min2, _object$amount1Min2, _object$deadline2;

    var message = createBaseMsgIncreaseLiquidity();
    message.creator = (_object$creator3 = object.creator) != null ? _object$creator3 : "";
    message.tokenId = (_object$tokenId = object.tokenId) != null ? _object$tokenId : "";
    message.amount0Desired = (_object$amount0Desire2 = object.amount0Desired) != null ? _object$amount0Desire2 : "";
    message.amount1Desired = (_object$amount1Desire2 = object.amount1Desired) != null ? _object$amount1Desire2 : "";
    message.amount0Min = (_object$amount0Min2 = object.amount0Min) != null ? _object$amount0Min2 : "";
    message.amount1Min = (_object$amount1Min2 = object.amount1Min) != null ? _object$amount1Min2 : "";
    message.deadline = (_object$deadline2 = object.deadline) != null ? _object$deadline2 : undefined;
    return message;
  }
};

function createBaseMsgDecreaseLiquidity() {
  return {
    creator: "",
    tokenId: "",
    liquidity: "",
    amount0Min: "",
    amount1Min: "",
    deadline: undefined
  };
}

var MsgDecreaseLiquidity = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }

    if (message.liquidity !== "") {
      writer.uint32(26).string(message.liquidity);
    }

    if (message.amount0Min !== "") {
      writer.uint32(34).string(message.amount0Min);
    }

    if (message.amount1Min !== "") {
      writer.uint32(42).string(message.amount1Min);
    }

    if (message.deadline !== undefined) {
      Timestamp.encode(toTimestamp(message.deadline), writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDecreaseLiquidity();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.tokenId = reader.string();
          break;

        case 3:
          message.liquidity = reader.string();
          break;

        case 4:
          message.amount0Min = reader.string();
          break;

        case 5:
          message.amount1Min = reader.string();
          break;

        case 6:
          message.deadline = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$1(object.creator) ? String(object.creator) : "",
      tokenId: isSet$1(object.tokenId) ? String(object.tokenId) : "",
      liquidity: isSet$1(object.liquidity) ? String(object.liquidity) : "",
      amount0Min: isSet$1(object.amount0Min) ? String(object.amount0Min) : "",
      amount1Min: isSet$1(object.amount1Min) ? String(object.amount1Min) : "",
      deadline: isSet$1(object.deadline) ? fromJsonTimestamp(object.deadline) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.liquidity !== undefined && (obj.liquidity = message.liquidity);
    message.amount0Min !== undefined && (obj.amount0Min = message.amount0Min);
    message.amount1Min !== undefined && (obj.amount1Min = message.amount1Min);
    message.deadline !== undefined && (obj.deadline = message.deadline.toISOString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator4, _object$tokenId2, _object$liquidity, _object$amount0Min3, _object$amount1Min3, _object$deadline3;

    var message = createBaseMsgDecreaseLiquidity();
    message.creator = (_object$creator4 = object.creator) != null ? _object$creator4 : "";
    message.tokenId = (_object$tokenId2 = object.tokenId) != null ? _object$tokenId2 : "";
    message.liquidity = (_object$liquidity = object.liquidity) != null ? _object$liquidity : "";
    message.amount0Min = (_object$amount0Min3 = object.amount0Min) != null ? _object$amount0Min3 : "";
    message.amount1Min = (_object$amount1Min3 = object.amount1Min) != null ? _object$amount1Min3 : "";
    message.deadline = (_object$deadline3 = object.deadline) != null ? _object$deadline3 : undefined;
    return message;
  }
};

function createBaseMsgCollect() {
  return {
    creator: "",
    tokenId: "",
    recipient: "",
    amount0Max: "",
    amount1Max: "",
    collectOnly: false
  };
}

var MsgCollect = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }

    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }

    if (message.amount0Max !== "") {
      writer.uint32(34).string(message.amount0Max);
    }

    if (message.amount1Max !== "") {
      writer.uint32(42).string(message.amount1Max);
    }

    if (message.collectOnly === true) {
      writer.uint32(48).bool(message.collectOnly);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCollect();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.tokenId = reader.string();
          break;

        case 3:
          message.recipient = reader.string();
          break;

        case 4:
          message.amount0Max = reader.string();
          break;

        case 5:
          message.amount1Max = reader.string();
          break;

        case 6:
          message.collectOnly = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$1(object.creator) ? String(object.creator) : "",
      tokenId: isSet$1(object.tokenId) ? String(object.tokenId) : "",
      recipient: isSet$1(object.recipient) ? String(object.recipient) : "",
      amount0Max: isSet$1(object.amount0Max) ? String(object.amount0Max) : "",
      amount1Max: isSet$1(object.amount1Max) ? String(object.amount1Max) : "",
      collectOnly: isSet$1(object.collectOnly) ? Boolean(object.collectOnly) : false
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amount0Max !== undefined && (obj.amount0Max = message.amount0Max);
    message.amount1Max !== undefined && (obj.amount1Max = message.amount1Max);
    message.collectOnly !== undefined && (obj.collectOnly = message.collectOnly);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator5, _object$tokenId3, _object$recipient2, _object$amount0Max, _object$amount1Max, _object$collectOnly;

    var message = createBaseMsgCollect();
    message.creator = (_object$creator5 = object.creator) != null ? _object$creator5 : "";
    message.tokenId = (_object$tokenId3 = object.tokenId) != null ? _object$tokenId3 : "";
    message.recipient = (_object$recipient2 = object.recipient) != null ? _object$recipient2 : "";
    message.amount0Max = (_object$amount0Max = object.amount0Max) != null ? _object$amount0Max : "";
    message.amount1Max = (_object$amount1Max = object.amount1Max) != null ? _object$amount1Max : "";
    message.collectOnly = (_object$collectOnly = object.collectOnly) != null ? _object$collectOnly : false;
    return message;
  }
};

function createBaseMsgSwapExactIn() {
  return {
    creator: "",
    recipient: "",
    amountIn: "",
    amountOutMin: "",
    denoms: [],
    fees: [],
    deadline: undefined
  };
}

var MsgSwapExactIn = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }

    if (message.amountIn !== "") {
      writer.uint32(26).string(message.amountIn);
    }

    if (message.amountOutMin !== "") {
      writer.uint32(34).string(message.amountOutMin);
    }

    for (var _iterator = _createForOfIteratorHelperLoose(message.denoms), _step; !(_step = _iterator()).done;) {
      var v = _step.value;
      writer.uint32(42).string(v);
    }

    writer.uint32(50).fork();

    for (var _iterator2 = _createForOfIteratorHelperLoose(message.fees), _step2; !(_step2 = _iterator2()).done;) {
      var _v = _step2.value;
      writer.int32(_v);
    }

    writer.ldelim();

    if (message.deadline !== undefined) {
      Timestamp.encode(toTimestamp(message.deadline), writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSwapExactIn();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.recipient = reader.string();
          break;

        case 3:
          message.amountIn = reader.string();
          break;

        case 4:
          message.amountOutMin = reader.string();
          break;

        case 5:
          message.denoms.push(reader.string());
          break;

        case 6:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.fees.push(reader.int32());
            }
          } else {
            message.fees.push(reader.int32());
          }

          break;

        case 7:
          message.deadline = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$1(object.creator) ? String(object.creator) : "",
      recipient: isSet$1(object.recipient) ? String(object.recipient) : "",
      amountIn: isSet$1(object.amountIn) ? String(object.amountIn) : "",
      amountOutMin: isSet$1(object.amountOutMin) ? String(object.amountOutMin) : "",
      denoms: Array.isArray(object == null ? void 0 : object.denoms) ? object.denoms.map(function (e) {
        return String(e);
      }) : [],
      fees: Array.isArray(object == null ? void 0 : object.fees) ? object.fees.map(function (e) {
        return Number(e);
      }) : [],
      deadline: isSet$1(object.deadline) ? fromJsonTimestamp(object.deadline) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.amountOutMin !== undefined && (obj.amountOutMin = message.amountOutMin);

    if (message.denoms) {
      obj.denoms = message.denoms.map(function (e) {
        return e;
      });
    } else {
      obj.denoms = [];
    }

    if (message.fees) {
      obj.fees = message.fees.map(function (e) {
        return Math.round(e);
      });
    } else {
      obj.fees = [];
    }

    message.deadline !== undefined && (obj.deadline = message.deadline.toISOString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator6, _object$recipient3, _object$amountIn, _object$amountOutMin, _object$denoms, _object$fees, _object$deadline4;

    var message = createBaseMsgSwapExactIn();
    message.creator = (_object$creator6 = object.creator) != null ? _object$creator6 : "";
    message.recipient = (_object$recipient3 = object.recipient) != null ? _object$recipient3 : "";
    message.amountIn = (_object$amountIn = object.amountIn) != null ? _object$amountIn : "";
    message.amountOutMin = (_object$amountOutMin = object.amountOutMin) != null ? _object$amountOutMin : "";
    message.denoms = ((_object$denoms = object.denoms) == null ? void 0 : _object$denoms.map(function (e) {
      return e;
    })) || [];
    message.fees = ((_object$fees = object.fees) == null ? void 0 : _object$fees.map(function (e) {
      return e;
    })) || [];
    message.deadline = (_object$deadline4 = object.deadline) != null ? _object$deadline4 : undefined;
    return message;
  }
};

function createBaseMsgSwapExactOut() {
  return {
    creator: "",
    recipient: "",
    amountOut: "",
    amountInMax: "",
    denoms: [],
    fees: [],
    deadline: undefined
  };
}

var MsgSwapExactOut = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }

    if (message.amountOut !== "") {
      writer.uint32(26).string(message.amountOut);
    }

    if (message.amountInMax !== "") {
      writer.uint32(34).string(message.amountInMax);
    }

    for (var _iterator3 = _createForOfIteratorHelperLoose(message.denoms), _step3; !(_step3 = _iterator3()).done;) {
      var v = _step3.value;
      writer.uint32(42).string(v);
    }

    writer.uint32(50).fork();

    for (var _iterator4 = _createForOfIteratorHelperLoose(message.fees), _step4; !(_step4 = _iterator4()).done;) {
      var _v2 = _step4.value;
      writer.int32(_v2);
    }

    writer.ldelim();

    if (message.deadline !== undefined) {
      Timestamp.encode(toTimestamp(message.deadline), writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSwapExactOut();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.recipient = reader.string();
          break;

        case 3:
          message.amountOut = reader.string();
          break;

        case 4:
          message.amountInMax = reader.string();
          break;

        case 5:
          message.denoms.push(reader.string());
          break;

        case 6:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.fees.push(reader.int32());
            }
          } else {
            message.fees.push(reader.int32());
          }

          break;

        case 7:
          message.deadline = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$1(object.creator) ? String(object.creator) : "",
      recipient: isSet$1(object.recipient) ? String(object.recipient) : "",
      amountOut: isSet$1(object.amountOut) ? String(object.amountOut) : "",
      amountInMax: isSet$1(object.amountInMax) ? String(object.amountInMax) : "",
      denoms: Array.isArray(object == null ? void 0 : object.denoms) ? object.denoms.map(function (e) {
        return String(e);
      }) : [],
      fees: Array.isArray(object == null ? void 0 : object.fees) ? object.fees.map(function (e) {
        return Number(e);
      }) : [],
      deadline: isSet$1(object.deadline) ? fromJsonTimestamp(object.deadline) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut);
    message.amountInMax !== undefined && (obj.amountInMax = message.amountInMax);

    if (message.denoms) {
      obj.denoms = message.denoms.map(function (e) {
        return e;
      });
    } else {
      obj.denoms = [];
    }

    if (message.fees) {
      obj.fees = message.fees.map(function (e) {
        return Math.round(e);
      });
    } else {
      obj.fees = [];
    }

    message.deadline !== undefined && (obj.deadline = message.deadline.toISOString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator7, _object$recipient4, _object$amountOut, _object$amountInMax, _object$denoms2, _object$fees2, _object$deadline5;

    var message = createBaseMsgSwapExactOut();
    message.creator = (_object$creator7 = object.creator) != null ? _object$creator7 : "";
    message.recipient = (_object$recipient4 = object.recipient) != null ? _object$recipient4 : "";
    message.amountOut = (_object$amountOut = object.amountOut) != null ? _object$amountOut : "";
    message.amountInMax = (_object$amountInMax = object.amountInMax) != null ? _object$amountInMax : "";
    message.denoms = ((_object$denoms2 = object.denoms) == null ? void 0 : _object$denoms2.map(function (e) {
      return e;
    })) || [];
    message.fees = ((_object$fees2 = object.fees) == null ? void 0 : _object$fees2.map(function (e) {
      return e;
    })) || [];
    message.deadline = (_object$deadline5 = object.deadline) != null ? _object$deadline5 : undefined;
    return message;
  }
};

function createBaseMsgCollectReward() {
  return {
    creator: "",
    tokenId: "",
    recipient: "",
    collectOnly: false
  };
}

var MsgCollectReward = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }

    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }

    if (message.collectOnly === true) {
      writer.uint32(32).bool(message.collectOnly);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCollectReward();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.tokenId = reader.string();
          break;

        case 3:
          message.recipient = reader.string();
          break;

        case 4:
          message.collectOnly = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$1(object.creator) ? String(object.creator) : "",
      tokenId: isSet$1(object.tokenId) ? String(object.tokenId) : "",
      recipient: isSet$1(object.recipient) ? String(object.recipient) : "",
      collectOnly: isSet$1(object.collectOnly) ? Boolean(object.collectOnly) : false
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.collectOnly !== undefined && (obj.collectOnly = message.collectOnly);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator8, _object$tokenId4, _object$recipient5, _object$collectOnly2;

    var message = createBaseMsgCollectReward();
    message.creator = (_object$creator8 = object.creator) != null ? _object$creator8 : "";
    message.tokenId = (_object$tokenId4 = object.tokenId) != null ? _object$tokenId4 : "";
    message.recipient = (_object$recipient5 = object.recipient) != null ? _object$recipient5 : "";
    message.collectOnly = (_object$collectOnly2 = object.collectOnly) != null ? _object$collectOnly2 : false;
    return message;
  }
};

function toTimestamp(date) {
  var seconds = numberToLong(date.getTime() / 1000);
  var nanos = date.getTime() % 1000 * 1000000;
  return {
    seconds: seconds,
    nanos: nanos
  };
}

function fromTimestamp(t) {
  var millis = t.seconds.toNumber() * 1000;
  millis += t.nanos / 1000000;
  return new Date(millis);
}

function fromJsonTimestamp(o) {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long;

  _m0.configure();
}

function isSet$1(value) {
  return value !== null && value !== undefined;
}

exports.MsgCollectReward = /*#__PURE__*/function (_BaseMsg) {
  _inheritsLoose(MsgCollectReward$1, _BaseMsg);

  function MsgCollectReward$1(msg) {
    var _this;

    _this = _BaseMsg.call(this) || this;
    _this.protoMsg = void 0;
    _this.protoMsg = msg;
    return _this;
  }

  var _proto = MsgCollectReward$1.prototype;

  _proto.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgCollectReward$1.typeUrl,
      value: MsgCollectReward.fromPartial(this.protoMsg)
    };
  };

  return MsgCollectReward$1;
}(BaseMsg);

(function (MsgCollectReward$1) {
  MsgCollectReward$1.typeUrl = "/" + protobufPackage + ".MsgCollectReward";
  MsgCollectReward$1.Proto = MsgCollectReward;
})(exports.MsgCollectReward || (exports.MsgCollectReward = {}));

exports.MsgSwapExactOut = /*#__PURE__*/function (_BaseMsg2) {
  _inheritsLoose(MsgSwapExactOut$1, _BaseMsg2);

  function MsgSwapExactOut$1(msg) {
    var _this2;

    _this2 = _BaseMsg2.call(this) || this;
    _this2.protoMsg = void 0;
    _this2.protoMsg = msg;
    return _this2;
  }

  var _proto2 = MsgSwapExactOut$1.prototype;

  _proto2.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgSwapExactOut$1.typeUrl,
      value: MsgSwapExactOut.fromPartial(this.protoMsg)
    };
  };

  return MsgSwapExactOut$1;
}(BaseMsg);

(function (MsgSwapExactOut$1) {
  MsgSwapExactOut$1.typeUrl = "/" + protobufPackage + ".MsgSwapExactOut";
  MsgSwapExactOut$1.Proto = MsgSwapExactOut;
})(exports.MsgSwapExactOut || (exports.MsgSwapExactOut = {}));

exports.MsgSwapExactIn = /*#__PURE__*/function (_BaseMsg3) {
  _inheritsLoose(MsgSwapExactIn$1, _BaseMsg3);

  function MsgSwapExactIn$1(msg) {
    var _this3;

    _this3 = _BaseMsg3.call(this) || this;
    _this3.protoMsg = void 0;
    _this3.protoMsg = msg;
    return _this3;
  }

  var _proto3 = MsgSwapExactIn$1.prototype;

  _proto3.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgSwapExactIn$1.typeUrl,
      value: MsgSwapExactIn.fromPartial(this.protoMsg)
    };
  };

  return MsgSwapExactIn$1;
}(BaseMsg);

(function (MsgSwapExactIn$1) {
  MsgSwapExactIn$1.typeUrl = "/" + protobufPackage + ".MsgSwapExactIn";
  MsgSwapExactIn$1.Proto = MsgSwapExactIn;
})(exports.MsgSwapExactIn || (exports.MsgSwapExactIn = {}));

exports.MsgCreatePool = /*#__PURE__*/function (_BaseMsg4) {
  _inheritsLoose(MsgCreatePool$1, _BaseMsg4);

  function MsgCreatePool$1(msg) {
    var _this4;

    _this4 = _BaseMsg4.call(this) || this;
    _this4.protoMsg = void 0;
    _this4.protoMsg = msg;
    return _this4;
  }

  var _proto4 = MsgCreatePool$1.prototype;

  _proto4.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgCreatePool$1.typeUrl,
      value: MsgCreatePool.fromPartial(this.protoMsg)
    };
  };

  return MsgCreatePool$1;
}(BaseMsg);

(function (MsgCreatePool$1) {
  MsgCreatePool$1.typeUrl = "/" + protobufPackage + ".MsgCreatePool";
  MsgCreatePool$1.Proto = MsgCreatePool;
})(exports.MsgCreatePool || (exports.MsgCreatePool = {}));

exports.MsgCollect = /*#__PURE__*/function (_BaseMsg5) {
  _inheritsLoose(MsgCollect$1, _BaseMsg5);

  function MsgCollect$1(msg) {
    var _this5;

    _this5 = _BaseMsg5.call(this) || this;
    _this5.protoMsg = void 0;
    _this5.protoMsg = msg;
    return _this5;
  }

  var _proto5 = MsgCollect$1.prototype;

  _proto5.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgCollect$1.typeUrl,
      value: MsgCollect.fromPartial(this.protoMsg)
    };
  };

  return MsgCollect$1;
}(BaseMsg);

(function (MsgCollect$1) {
  MsgCollect$1.typeUrl = "/" + protobufPackage + ".MsgCollect";
  MsgCollect$1.Proto = MsgCollect;
})(exports.MsgCollect || (exports.MsgCollect = {}));

exports.MsgCreatePosition = /*#__PURE__*/function (_BaseMsg6) {
  _inheritsLoose(MsgCreatePosition$1, _BaseMsg6);

  function MsgCreatePosition$1(msg) {
    var _this6;

    _this6 = _BaseMsg6.call(this) || this;
    _this6.protoMsg = void 0;
    _this6.protoMsg = msg;
    return _this6;
  }

  var _proto6 = MsgCreatePosition$1.prototype;

  _proto6.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgCreatePosition$1.typeUrl,
      value: MsgCreatePosition.fromPartial(this.protoMsg)
    };
  };

  return MsgCreatePosition$1;
}(BaseMsg);

(function (MsgCreatePosition$1) {
  MsgCreatePosition$1.typeUrl = "/" + protobufPackage + ".MsgCreatePosition";
  MsgCreatePosition$1.Proto = MsgCreatePosition;
})(exports.MsgCreatePosition || (exports.MsgCreatePosition = {}));

exports.MsgDecreaseLiquidity = /*#__PURE__*/function (_BaseMsg7) {
  _inheritsLoose(MsgDecreaseLiquidity$1, _BaseMsg7);

  function MsgDecreaseLiquidity$1(msg) {
    var _this7;

    _this7 = _BaseMsg7.call(this) || this;
    _this7.protoMsg = void 0;
    _this7.protoMsg = msg;
    return _this7;
  }

  var _proto7 = MsgDecreaseLiquidity$1.prototype;

  _proto7.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgDecreaseLiquidity$1.typeUrl,
      value: MsgDecreaseLiquidity.fromPartial(this.protoMsg)
    };
  };

  return MsgDecreaseLiquidity$1;
}(BaseMsg);

(function (MsgDecreaseLiquidity$1) {
  MsgDecreaseLiquidity$1.typeUrl = "/" + protobufPackage + ".MsgDecreaseLiquidity";
  MsgDecreaseLiquidity$1.Proto = MsgDecreaseLiquidity;
})(exports.MsgDecreaseLiquidity || (exports.MsgDecreaseLiquidity = {}));

exports.MsgIncreaseLiquidity = /*#__PURE__*/function (_BaseMsg8) {
  _inheritsLoose(MsgIncreaseLiquidity$1, _BaseMsg8);

  function MsgIncreaseLiquidity$1(msg) {
    var _this8;

    _this8 = _BaseMsg8.call(this) || this;
    _this8.protoMsg = void 0;
    _this8.protoMsg = msg;
    return _this8;
  }

  var _proto8 = MsgIncreaseLiquidity$1.prototype;

  _proto8.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgIncreaseLiquidity$1.typeUrl,
      value: MsgIncreaseLiquidity.fromPartial(this.protoMsg)
    };
  };

  return MsgIncreaseLiquidity$1;
}(BaseMsg);

(function (MsgIncreaseLiquidity$1) {
  MsgIncreaseLiquidity$1.typeUrl = "/" + protobufPackage + ".MsgIncreaseLiquidity";
  MsgIncreaseLiquidity$1.Proto = MsgIncreaseLiquidity;
})(exports.MsgIncreaseLiquidity || (exports.MsgIncreaseLiquidity = {}));

/* eslint-disable */

function createBaseAny() {
  return {
    typeUrl: "",
    value: new Uint8Array()
  };
}

var Any = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.typeUrl !== "") {
      writer.uint32(10).string(message.typeUrl);
    }

    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAny();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.typeUrl = reader.string();
          break;

        case 2:
          message.value = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      typeUrl: isSet$2(object.typeUrl) ? String(object.typeUrl) : "",
      value: isSet$2(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.typeUrl !== undefined && (obj.typeUrl = message.typeUrl);
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$typeUrl, _object$value;

    var message = createBaseAny();
    message.typeUrl = (_object$typeUrl = object.typeUrl) != null ? _object$typeUrl : "";
    message.value = (_object$value = object.value) != null ? _object$value : new Uint8Array();
    return message;
  }
};

var globalThis$1 = /*#__PURE__*/function () {
  if (typeof globalThis$1 !== "undefined") return globalThis$1;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
}();

var atob = globalThis$1.atob || function (b64) {
  return globalThis$1.Buffer.from(b64, "base64").toString("binary");
};

function bytesFromBase64(b64) {
  var bin = atob(b64);
  var arr = new Uint8Array(bin.length);

  for (var i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }

  return arr;
}

var btoa = globalThis$1.btoa || function (bin) {
  return globalThis$1.Buffer.from(bin, "binary").toString("base64");
};

function base64FromBytes(arr) {
  var bin = [];
  arr.forEach(function (_byte) {
    bin.push(String.fromCharCode(_byte));
  });
  return btoa(bin.join(""));
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long;

  _m0.configure();
}

function isSet$2(value) {
  return value !== null && value !== undefined;
}

/* eslint-disable */

function createBaseDuration() {
  return {
    seconds: Long.ZERO,
    nanos: 0
  };
}

var Duration = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (!message.seconds.isZero()) {
      writer.uint32(8).int64(message.seconds);
    }

    if (message.nanos !== 0) {
      writer.uint32(16).int32(message.nanos);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDuration();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.seconds = reader.int64();
          break;

        case 2:
          message.nanos = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      seconds: isSet$3(object.seconds) ? Long.fromValue(object.seconds) : Long.ZERO,
      nanos: isSet$3(object.nanos) ? Number(object.nanos) : 0
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.seconds !== undefined && (obj.seconds = (message.seconds || Long.ZERO).toString());
    message.nanos !== undefined && (obj.nanos = Math.round(message.nanos));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$nanos;

    var message = createBaseDuration();
    message.seconds = object.seconds !== undefined && object.seconds !== null ? Long.fromValue(object.seconds) : Long.ZERO;
    message.nanos = (_object$nanos = object.nanos) != null ? _object$nanos : 0;
    return message;
  }
};

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long;

  _m0.configure();
}

function isSet$3(value) {
  return value !== null && value !== undefined;
}

/* eslint-disable */

function createBaseCoin() {
  return {
    denom: "",
    amount: ""
  };
}

var Coin = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCoin();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      denom: isSet$4(object.denom) ? String(object.denom) : "",
      amount: isSet$4(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$denom, _object$amount;

    var message = createBaseCoin();
    message.denom = (_object$denom = object.denom) != null ? _object$denom : "";
    message.amount = (_object$amount = object.amount) != null ? _object$amount : "";
    return message;
  }
};

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long;

  _m0.configure();
}

function isSet$4(value) {
  return value !== null && value !== undefined;
}

/** VoteOption enumerates the valid vote options for a given governance proposal. */

var VoteOption;

(function (VoteOption) {
  /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
  VoteOption[VoteOption["VOTE_OPTION_UNSPECIFIED"] = 0] = "VOTE_OPTION_UNSPECIFIED";
  /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */

  VoteOption[VoteOption["VOTE_OPTION_YES"] = 1] = "VOTE_OPTION_YES";
  /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */

  VoteOption[VoteOption["VOTE_OPTION_ABSTAIN"] = 2] = "VOTE_OPTION_ABSTAIN";
  /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */

  VoteOption[VoteOption["VOTE_OPTION_NO"] = 3] = "VOTE_OPTION_NO";
  /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */

  VoteOption[VoteOption["VOTE_OPTION_NO_WITH_VETO"] = 4] = "VOTE_OPTION_NO_WITH_VETO";
  VoteOption[VoteOption["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(VoteOption || (VoteOption = {}));

function voteOptionFromJSON(object) {
  switch (object) {
    case 0:
    case "VOTE_OPTION_UNSPECIFIED":
      return VoteOption.VOTE_OPTION_UNSPECIFIED;

    case 1:
    case "VOTE_OPTION_YES":
      return VoteOption.VOTE_OPTION_YES;

    case 2:
    case "VOTE_OPTION_ABSTAIN":
      return VoteOption.VOTE_OPTION_ABSTAIN;

    case 3:
    case "VOTE_OPTION_NO":
      return VoteOption.VOTE_OPTION_NO;

    case 4:
    case "VOTE_OPTION_NO_WITH_VETO":
      return VoteOption.VOTE_OPTION_NO_WITH_VETO;

    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteOption.UNRECOGNIZED;
  }
}
function voteOptionToJSON(object) {
  switch (object) {
    case VoteOption.VOTE_OPTION_UNSPECIFIED:
      return "VOTE_OPTION_UNSPECIFIED";

    case VoteOption.VOTE_OPTION_YES:
      return "VOTE_OPTION_YES";

    case VoteOption.VOTE_OPTION_ABSTAIN:
      return "VOTE_OPTION_ABSTAIN";

    case VoteOption.VOTE_OPTION_NO:
      return "VOTE_OPTION_NO";

    case VoteOption.VOTE_OPTION_NO_WITH_VETO:
      return "VOTE_OPTION_NO_WITH_VETO";

    case VoteOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ProposalStatus enumerates the valid statuses of a proposal. */

var ProposalStatus;

(function (ProposalStatus) {
  /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status. */
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
  /**
   * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
   * period.
   */

  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_DEPOSIT_PERIOD"] = 1] = "PROPOSAL_STATUS_DEPOSIT_PERIOD";
  /**
   * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
   * period.
   */

  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_VOTING_PERIOD"] = 2] = "PROPOSAL_STATUS_VOTING_PERIOD";
  /**
   * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
   * passed.
   */

  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_PASSED"] = 3] = "PROPOSAL_STATUS_PASSED";
  /**
   * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
   * been rejected.
   */

  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_REJECTED"] = 4] = "PROPOSAL_STATUS_REJECTED";
  /**
   * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
   * failed.
   */

  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_FAILED"] = 5] = "PROPOSAL_STATUS_FAILED";
  ProposalStatus[ProposalStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalStatus || (ProposalStatus = {}));

function createBaseWeightedVoteOption() {
  return {
    option: 0,
    weight: ""
  };
}

var WeightedVoteOption = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.option !== 0) {
      writer.uint32(8).int32(message.option);
    }

    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseWeightedVoteOption();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.option = reader.int32();
          break;

        case 2:
          message.weight = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      option: isSet$5(object.option) ? voteOptionFromJSON(object.option) : 0,
      weight: isSet$5(object.weight) ? String(object.weight) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$option, _object$weight;

    var message = createBaseWeightedVoteOption();
    message.option = (_object$option = object.option) != null ? _object$option : 0;
    message.weight = (_object$weight = object.weight) != null ? _object$weight : "";
    return message;
  }
};

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long;

  _m0.configure();
}

function isSet$5(value) {
  return value !== null && value !== undefined;
}

var protobufPackage$1 = "cosmos.gov.v1beta1";

function createBaseMsgSubmitProposal() {
  return {
    content: undefined,
    initialDeposit: [],
    proposer: ""
  };
}

var MsgSubmitProposal = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.content !== undefined) {
      Any.encode(message.content, writer.uint32(10).fork()).ldelim();
    }

    for (var _iterator = _createForOfIteratorHelperLoose(message.initialDeposit), _step; !(_step = _iterator()).done;) {
      var v = _step.value;
      Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }

    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSubmitProposal();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.content = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.initialDeposit.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.proposer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      content: isSet$6(object.content) ? Any.fromJSON(object.content) : undefined,
      initialDeposit: Array.isArray(object == null ? void 0 : object.initialDeposit) ? object.initialDeposit.map(function (e) {
        return Coin.fromJSON(e);
      }) : [],
      proposer: isSet$6(object.proposer) ? String(object.proposer) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.content !== undefined && (obj.content = message.content ? Any.toJSON(message.content) : undefined);

    if (message.initialDeposit) {
      obj.initialDeposit = message.initialDeposit.map(function (e) {
        return e ? Coin.toJSON(e) : undefined;
      });
    } else {
      obj.initialDeposit = [];
    }

    message.proposer !== undefined && (obj.proposer = message.proposer);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$initialDeposi, _object$proposer;

    var message = createBaseMsgSubmitProposal();
    message.content = object.content !== undefined && object.content !== null ? Any.fromPartial(object.content) : undefined;
    message.initialDeposit = ((_object$initialDeposi = object.initialDeposit) == null ? void 0 : _object$initialDeposi.map(function (e) {
      return Coin.fromPartial(e);
    })) || [];
    message.proposer = (_object$proposer = object.proposer) != null ? _object$proposer : "";
    return message;
  }
};

function createBaseMsgVote() {
  return {
    proposalId: Long.UZERO,
    voter: "",
    option: 0
  };
}

var MsgVote = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }

    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgVote();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;

        case 2:
          message.voter = reader.string();
          break;

        case 3:
          message.option = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      proposalId: isSet$6(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      voter: isSet$6(object.voter) ? String(object.voter) : "",
      option: isSet$6(object.option) ? voteOptionFromJSON(object.option) : 0
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$voter, _object$option;

    var message = createBaseMsgVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.voter = (_object$voter = object.voter) != null ? _object$voter : "";
    message.option = (_object$option = object.option) != null ? _object$option : 0;
    return message;
  }
};

function createBaseMsgVoteWeighted() {
  return {
    proposalId: Long.UZERO,
    voter: "",
    options: []
  };
}

var MsgVoteWeighted = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }

    for (var _iterator2 = _createForOfIteratorHelperLoose(message.options), _step2; !(_step2 = _iterator2()).done;) {
      var v = _step2.value;
      WeightedVoteOption.encode(v, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgVoteWeighted();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;

        case 2:
          message.voter = reader.string();
          break;

        case 3:
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      proposalId: isSet$6(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      voter: isSet$6(object.voter) ? String(object.voter) : "",
      options: Array.isArray(object == null ? void 0 : object.options) ? object.options.map(function (e) {
        return WeightedVoteOption.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);

    if (message.options) {
      obj.options = message.options.map(function (e) {
        return e ? WeightedVoteOption.toJSON(e) : undefined;
      });
    } else {
      obj.options = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$voter2, _object$options;

    var message = createBaseMsgVoteWeighted();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.voter = (_object$voter2 = object.voter) != null ? _object$voter2 : "";
    message.options = ((_object$options = object.options) == null ? void 0 : _object$options.map(function (e) {
      return WeightedVoteOption.fromPartial(e);
    })) || [];
    return message;
  }
};

function createBaseMsgDeposit() {
  return {
    proposalId: Long.UZERO,
    depositor: "",
    amount: []
  };
}

var MsgDeposit = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }

    for (var _iterator3 = _createForOfIteratorHelperLoose(message.amount), _step3; !(_step3 = _iterator3()).done;) {
      var v = _step3.value;
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDeposit();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;

        case 2:
          message.depositor = reader.string();
          break;

        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      proposalId: isSet$6(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      depositor: isSet$6(object.depositor) ? String(object.depositor) : "",
      amount: Array.isArray(object == null ? void 0 : object.amount) ? object.amount.map(function (e) {
        return Coin.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);

    if (message.amount) {
      obj.amount = message.amount.map(function (e) {
        return e ? Coin.toJSON(e) : undefined;
      });
    } else {
      obj.amount = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$depositor, _object$amount;

    var message = createBaseMsgDeposit();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.depositor = (_object$depositor = object.depositor) != null ? _object$depositor : "";
    message.amount = ((_object$amount = object.amount) == null ? void 0 : _object$amount.map(function (e) {
      return Coin.fromPartial(e);
    })) || [];
    return message;
  }
};

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long;

  _m0.configure();
}

function isSet$6(value) {
  return value !== null && value !== undefined;
}

exports.MsgSubmitProposal = /*#__PURE__*/function (_BaseMsg) {
  _inheritsLoose(MsgSubmitProposal$1, _BaseMsg);

  function MsgSubmitProposal$1(msg) {
    var _this;

    _this = _BaseMsg.call(this) || this;
    _this.protoMsg = void 0;
    _this.protoMsg = msg;
    return _this;
  }

  var _proto = MsgSubmitProposal$1.prototype;

  _proto.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgSubmitProposal$1.typeUrl,
      value: MsgSubmitProposal.fromPartial(this.protoMsg)
    };
  };

  return MsgSubmitProposal$1;
}(BaseMsg);

(function (MsgSubmitProposal$1) {
  MsgSubmitProposal$1.typeUrl = "/" + protobufPackage$1 + ".MsgSubmitProposal";
  MsgSubmitProposal$1.Proto = MsgSubmitProposal;
})(exports.MsgSubmitProposal || (exports.MsgSubmitProposal = {}));

exports.MsgDeposit = /*#__PURE__*/function (_BaseMsg2) {
  _inheritsLoose(MsgDeposit$1, _BaseMsg2);

  function MsgDeposit$1(msg) {
    var _this2;

    _this2 = _BaseMsg2.call(this) || this;
    _this2.protoMsg = void 0;
    _this2.protoMsg = msg;
    return _this2;
  }

  var _proto2 = MsgDeposit$1.prototype;

  _proto2.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgDeposit$1.typeUrl,
      value: MsgDeposit.fromPartial(this.protoMsg)
    };
  };

  return MsgDeposit$1;
}(BaseMsg);

(function (MsgDeposit$1) {
  MsgDeposit$1.typeUrl = "/" + protobufPackage$1 + ".MsgDeposit";
  MsgDeposit$1.Proto = MsgDeposit;
})(exports.MsgDeposit || (exports.MsgDeposit = {}));

exports.MsgVote = /*#__PURE__*/function (_BaseMsg3) {
  _inheritsLoose(MsgVote$1, _BaseMsg3);

  function MsgVote$1(msg) {
    var _this3;

    _this3 = _BaseMsg3.call(this) || this;
    _this3.protoMsg = void 0;
    _this3.protoMsg = msg;
    return _this3;
  }

  var _proto3 = MsgVote$1.prototype;

  _proto3.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgVote$1.typeUrl,
      value: MsgVote.fromPartial(this.protoMsg)
    };
  };

  return MsgVote$1;
}(BaseMsg);

(function (MsgVote$1) {
  MsgVote$1.typeUrl = "/" + protobufPackage$1 + ".MsgVote";
  MsgVote$1.Proto = MsgVote;
})(exports.MsgVote || (exports.MsgVote = {}));

exports.MsgVoteWeighted = /*#__PURE__*/function (_BaseMsg4) {
  _inheritsLoose(MsgVoteWeighted$1, _BaseMsg4);

  function MsgVoteWeighted$1(msg) {
    var _this4;

    _this4 = _BaseMsg4.call(this) || this;
    _this4.protoMsg = void 0;
    _this4.protoMsg = msg;
    return _this4;
  }

  var _proto4 = MsgVoteWeighted$1.prototype;

  _proto4.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgVoteWeighted$1.typeUrl,
      value: MsgVoteWeighted.fromPartial(this.protoMsg)
    };
  };

  return MsgVoteWeighted$1;
}(BaseMsg);

(function (MsgVoteWeighted$1) {
  MsgVoteWeighted$1.typeUrl = "/" + protobufPackage$1 + ".MsgVoteWeighted";
  MsgVoteWeighted$1.Proto = MsgVoteWeighted;
})(exports.MsgVoteWeighted || (exports.MsgVoteWeighted = {}));

function createBaseRandSwapRewardSubConfig() {
  return {
    title: "",
    weight: 0,
    numberOfReveal: 0
  };
}

var RandSwapRewardSubConfig = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.weight !== 0) {
      writer.uint32(16).int32(message.weight);
    }

    if (message.numberOfReveal !== 0) {
      writer.uint32(24).uint32(message.numberOfReveal);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRandSwapRewardSubConfig();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.weight = reader.int32();
          break;

        case 3:
          message.numberOfReveal = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      title: isSet$7(object.title) ? String(object.title) : "",
      weight: isSet$7(object.weight) ? Number(object.weight) : 0,
      numberOfReveal: isSet$7(object.numberOfReveal) ? Number(object.numberOfReveal) : 0
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.title !== undefined && (obj.title = message.title);
    message.weight !== undefined && (obj.weight = Math.round(message.weight));
    message.numberOfReveal !== undefined && (obj.numberOfReveal = Math.round(message.numberOfReveal));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$title, _object$weight, _object$numberOfRevea;

    var message = createBaseRandSwapRewardSubConfig();
    message.title = (_object$title = object.title) != null ? _object$title : "";
    message.weight = (_object$weight = object.weight) != null ? _object$weight : 0;
    message.numberOfReveal = (_object$numberOfRevea = object.numberOfReveal) != null ? _object$numberOfRevea : 0;
    return message;
  }
};

function createBaseRandSwapRewardConfig() {
  return {
    id: Long.UZERO,
    enabled: false,
    intervalPeriod: undefined,
    mintable: false,
    owner: "",
    denom: "",
    decimal: 0,
    totalReward: "",
    subConfigs: [],
    pools: []
  };
}

var RandSwapRewardConfig = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }

    if (message.intervalPeriod !== undefined) {
      Duration.encode(message.intervalPeriod, writer.uint32(26).fork()).ldelim();
    }

    if (message.mintable === true) {
      writer.uint32(32).bool(message.mintable);
    }

    if (message.owner !== "") {
      writer.uint32(42).string(message.owner);
    }

    if (message.denom !== "") {
      writer.uint32(50).string(message.denom);
    }

    if (message.decimal !== 0) {
      writer.uint32(56).int32(message.decimal);
    }

    if (message.totalReward !== "") {
      writer.uint32(66).string(message.totalReward);
    }

    for (var _iterator = _createForOfIteratorHelperLoose(message.subConfigs), _step; !(_step = _iterator()).done;) {
      var v = _step.value;
      RandSwapRewardSubConfig.encode(v, writer.uint32(74).fork()).ldelim();
    }

    for (var _iterator2 = _createForOfIteratorHelperLoose(message.pools), _step2; !(_step2 = _iterator2()).done;) {
      var _v = _step2.value;
      writer.uint32(82).string(_v);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRandSwapRewardConfig();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;

        case 2:
          message.enabled = reader.bool();
          break;

        case 3:
          message.intervalPeriod = Duration.decode(reader, reader.uint32());
          break;

        case 4:
          message.mintable = reader.bool();
          break;

        case 5:
          message.owner = reader.string();
          break;

        case 6:
          message.denom = reader.string();
          break;

        case 7:
          message.decimal = reader.int32();
          break;

        case 8:
          message.totalReward = reader.string();
          break;

        case 9:
          message.subConfigs.push(RandSwapRewardSubConfig.decode(reader, reader.uint32()));
          break;

        case 10:
          message.pools.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      id: isSet$7(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      enabled: isSet$7(object.enabled) ? Boolean(object.enabled) : false,
      intervalPeriod: isSet$7(object.intervalPeriod) ? Duration.fromJSON(object.intervalPeriod) : undefined,
      mintable: isSet$7(object.mintable) ? Boolean(object.mintable) : false,
      owner: isSet$7(object.owner) ? String(object.owner) : "",
      denom: isSet$7(object.denom) ? String(object.denom) : "",
      decimal: isSet$7(object.decimal) ? Number(object.decimal) : 0,
      totalReward: isSet$7(object.totalReward) ? String(object.totalReward) : "",
      subConfigs: Array.isArray(object == null ? void 0 : object.subConfigs) ? object.subConfigs.map(function (e) {
        return RandSwapRewardSubConfig.fromJSON(e);
      }) : [],
      pools: Array.isArray(object == null ? void 0 : object.pools) ? object.pools.map(function (e) {
        return String(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.intervalPeriod !== undefined && (obj.intervalPeriod = message.intervalPeriod ? Duration.toJSON(message.intervalPeriod) : undefined);
    message.mintable !== undefined && (obj.mintable = message.mintable);
    message.owner !== undefined && (obj.owner = message.owner);
    message.denom !== undefined && (obj.denom = message.denom);
    message.decimal !== undefined && (obj.decimal = Math.round(message.decimal));
    message.totalReward !== undefined && (obj.totalReward = message.totalReward);

    if (message.subConfigs) {
      obj.subConfigs = message.subConfigs.map(function (e) {
        return e ? RandSwapRewardSubConfig.toJSON(e) : undefined;
      });
    } else {
      obj.subConfigs = [];
    }

    if (message.pools) {
      obj.pools = message.pools.map(function (e) {
        return e;
      });
    } else {
      obj.pools = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$enabled, _object$mintable, _object$owner, _object$denom, _object$decimal, _object$totalReward, _object$subConfigs, _object$pools;

    var message = createBaseRandSwapRewardConfig();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.enabled = (_object$enabled = object.enabled) != null ? _object$enabled : false;
    message.intervalPeriod = object.intervalPeriod !== undefined && object.intervalPeriod !== null ? Duration.fromPartial(object.intervalPeriod) : undefined;
    message.mintable = (_object$mintable = object.mintable) != null ? _object$mintable : false;
    message.owner = (_object$owner = object.owner) != null ? _object$owner : "";
    message.denom = (_object$denom = object.denom) != null ? _object$denom : "";
    message.decimal = (_object$decimal = object.decimal) != null ? _object$decimal : 0;
    message.totalReward = (_object$totalReward = object.totalReward) != null ? _object$totalReward : "";
    message.subConfigs = ((_object$subConfigs = object.subConfigs) == null ? void 0 : _object$subConfigs.map(function (e) {
      return RandSwapRewardSubConfig.fromPartial(e);
    })) || [];
    message.pools = ((_object$pools = object.pools) == null ? void 0 : _object$pools.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long;

  _m0.configure();
}

function isSet$7(value) {
  return value !== null && value !== undefined;
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long;

  _m0.configure();
}

var protobufPackage$2 = "sophonlabs.sophon.poolincentives";

function createBaseMsgCreateRandSwapRewardConfig() {
  return {
    creator: "",
    config: undefined
  };
}

var MsgCreateRandSwapRewardConfig = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.config !== undefined) {
      RandSwapRewardConfig.encode(message.config, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateRandSwapRewardConfig();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.config = RandSwapRewardConfig.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$8(object.creator) ? String(object.creator) : "",
      config: isSet$8(object.config) ? RandSwapRewardConfig.fromJSON(object.config) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.config !== undefined && (obj.config = message.config ? RandSwapRewardConfig.toJSON(message.config) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator;

    var message = createBaseMsgCreateRandSwapRewardConfig();
    message.creator = (_object$creator = object.creator) != null ? _object$creator : "";
    message.config = object.config !== undefined && object.config !== null ? RandSwapRewardConfig.fromPartial(object.config) : undefined;
    return message;
  }
};

function createBaseMsgCollectRandSwapReward() {
  return {
    creator: "",
    denom: "",
    recipient: ""
  };
}

var MsgCollectRandSwapReward = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCollectRandSwapReward();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.recipient = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      creator: isSet$8(object.creator) ? String(object.creator) : "",
      denom: isSet$8(object.denom) ? String(object.denom) : "",
      recipient: isSet$8(object.recipient) ? String(object.recipient) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator5, _object$denom, _object$recipient;

    var message = createBaseMsgCollectRandSwapReward();
    message.creator = (_object$creator5 = object.creator) != null ? _object$creator5 : "";
    message.denom = (_object$denom = object.denom) != null ? _object$denom : "";
    message.recipient = (_object$recipient = object.recipient) != null ? _object$recipient : "";
    return message;
  }
};

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long;

  _m0.configure();
}

function isSet$8(value) {
  return value !== null && value !== undefined;
}

exports.MsgCreateRandSwapRewardConfig = /*#__PURE__*/function (_BaseMsg) {
  _inheritsLoose(MsgCreateRandSwapRewardConfig$1, _BaseMsg);

  function MsgCreateRandSwapRewardConfig$1(msg) {
    var _this;

    _this = _BaseMsg.call(this) || this;
    _this.protoMsg = void 0;
    _this.protoMsg = msg;
    return _this;
  }

  var _proto = MsgCreateRandSwapRewardConfig$1.prototype;

  _proto.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgCreateRandSwapRewardConfig$1.typeUrl,
      value: MsgCreateRandSwapRewardConfig.fromPartial(this.protoMsg)
    };
  };

  return MsgCreateRandSwapRewardConfig$1;
}(BaseMsg);

(function (MsgCreateRandSwapRewardConfig$1) {
  MsgCreateRandSwapRewardConfig$1.typeUrl = "/" + protobufPackage$2 + ".MsgCreateRandSwapRewardConfig";
  MsgCreateRandSwapRewardConfig$1.Proto = MsgCreateRandSwapRewardConfig;
})(exports.MsgCreateRandSwapRewardConfig || (exports.MsgCreateRandSwapRewardConfig = {}));

exports.MsgCollectRandSwapReward = /*#__PURE__*/function (_BaseMsg2) {
  _inheritsLoose(MsgCollectRandSwapReward$1, _BaseMsg2);

  function MsgCollectRandSwapReward$1(msg) {
    var _this2;

    _this2 = _BaseMsg2.call(this) || this;
    _this2.protoMsg = void 0;
    _this2.protoMsg = msg;
    return _this2;
  }

  var _proto2 = MsgCollectRandSwapReward$1.prototype;

  _proto2.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgCollectRandSwapReward$1.typeUrl,
      value: MsgCollectRandSwapReward.fromPartial(this.protoMsg)
    };
  };

  return MsgCollectRandSwapReward$1;
}(BaseMsg);

(function (MsgCollectRandSwapReward$1) {
  MsgCollectRandSwapReward$1.typeUrl = "/" + protobufPackage$2 + ".MsgCollectRandSwapReward";
  MsgCollectRandSwapReward$1.Proto = MsgCollectRandSwapReward;
})(exports.MsgCollectRandSwapReward || (exports.MsgCollectRandSwapReward = {}));

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long;

  _m0.configure();
}

/* eslint-disable */

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long;

  _m0.configure();
}

/* eslint-disable */

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long;

  _m0.configure();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long;

  _m0.configure();
}

/** BlockIdFlag indicates which BlcokID the signature is for */

var BlockIDFlag;

(function (BlockIDFlag) {
  BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_UNKNOWN"] = 0] = "BLOCK_ID_FLAG_UNKNOWN";
  BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_ABSENT"] = 1] = "BLOCK_ID_FLAG_ABSENT";
  BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_COMMIT"] = 2] = "BLOCK_ID_FLAG_COMMIT";
  BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_NIL"] = 3] = "BLOCK_ID_FLAG_NIL";
  BlockIDFlag[BlockIDFlag["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BlockIDFlag || (BlockIDFlag = {}));
/** SignedMsgType is a type of signed message in the consensus. */

var SignedMsgType;

(function (SignedMsgType) {
  SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_UNKNOWN"] = 0] = "SIGNED_MSG_TYPE_UNKNOWN";
  /** SIGNED_MSG_TYPE_PREVOTE - Votes */

  SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PREVOTE"] = 1] = "SIGNED_MSG_TYPE_PREVOTE";
  SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PRECOMMIT"] = 2] = "SIGNED_MSG_TYPE_PRECOMMIT";
  /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */

  SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PROPOSAL"] = 32] = "SIGNED_MSG_TYPE_PROPOSAL";
  SignedMsgType[SignedMsgType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SignedMsgType || (SignedMsgType = {}));

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long;

  _m0.configure();
}

/** BondStatus is the status of a validator. */

var BondStatus;

(function (BondStatus) {
  /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
  BondStatus[BondStatus["BOND_STATUS_UNSPECIFIED"] = 0] = "BOND_STATUS_UNSPECIFIED";
  /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */

  BondStatus[BondStatus["BOND_STATUS_UNBONDED"] = 1] = "BOND_STATUS_UNBONDED";
  /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */

  BondStatus[BondStatus["BOND_STATUS_UNBONDING"] = 2] = "BOND_STATUS_UNBONDING";
  /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */

  BondStatus[BondStatus["BOND_STATUS_BONDED"] = 3] = "BOND_STATUS_BONDED";
  BondStatus[BondStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BondStatus || (BondStatus = {}));

function createBaseCommissionRates() {
  return {
    rate: "",
    maxRate: "",
    maxChangeRate: ""
  };
}

var CommissionRates = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.rate !== "") {
      writer.uint32(10).string(message.rate);
    }

    if (message.maxRate !== "") {
      writer.uint32(18).string(message.maxRate);
    }

    if (message.maxChangeRate !== "") {
      writer.uint32(26).string(message.maxChangeRate);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCommissionRates();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rate = reader.string();
          break;

        case 2:
          message.maxRate = reader.string();
          break;

        case 3:
          message.maxChangeRate = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      rate: isSet$9(object.rate) ? String(object.rate) : "",
      maxRate: isSet$9(object.maxRate) ? String(object.maxRate) : "",
      maxChangeRate: isSet$9(object.maxChangeRate) ? String(object.maxChangeRate) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.rate !== undefined && (obj.rate = message.rate);
    message.maxRate !== undefined && (obj.maxRate = message.maxRate);
    message.maxChangeRate !== undefined && (obj.maxChangeRate = message.maxChangeRate);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$rate, _object$maxRate, _object$maxChangeRate;

    var message = createBaseCommissionRates();
    message.rate = (_object$rate = object.rate) != null ? _object$rate : "";
    message.maxRate = (_object$maxRate = object.maxRate) != null ? _object$maxRate : "";
    message.maxChangeRate = (_object$maxChangeRate = object.maxChangeRate) != null ? _object$maxChangeRate : "";
    return message;
  }
};

function createBaseDescription() {
  return {
    moniker: "",
    identity: "",
    website: "",
    securityContact: "",
    details: ""
  };
}

var Description = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.moniker !== "") {
      writer.uint32(10).string(message.moniker);
    }

    if (message.identity !== "") {
      writer.uint32(18).string(message.identity);
    }

    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }

    if (message.securityContact !== "") {
      writer.uint32(34).string(message.securityContact);
    }

    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDescription();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.moniker = reader.string();
          break;

        case 2:
          message.identity = reader.string();
          break;

        case 3:
          message.website = reader.string();
          break;

        case 4:
          message.securityContact = reader.string();
          break;

        case 5:
          message.details = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      moniker: isSet$9(object.moniker) ? String(object.moniker) : "",
      identity: isSet$9(object.identity) ? String(object.identity) : "",
      website: isSet$9(object.website) ? String(object.website) : "",
      securityContact: isSet$9(object.securityContact) ? String(object.securityContact) : "",
      details: isSet$9(object.details) ? String(object.details) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.identity !== undefined && (obj.identity = message.identity);
    message.website !== undefined && (obj.website = message.website);
    message.securityContact !== undefined && (obj.securityContact = message.securityContact);
    message.details !== undefined && (obj.details = message.details);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$moniker, _object$identity, _object$website, _object$securityConta, _object$details;

    var message = createBaseDescription();
    message.moniker = (_object$moniker = object.moniker) != null ? _object$moniker : "";
    message.identity = (_object$identity = object.identity) != null ? _object$identity : "";
    message.website = (_object$website = object.website) != null ? _object$website : "";
    message.securityContact = (_object$securityConta = object.securityContact) != null ? _object$securityConta : "";
    message.details = (_object$details = object.details) != null ? _object$details : "";
    return message;
  }
};

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long;

  _m0.configure();
}

function isSet$9(value) {
  return value !== null && value !== undefined;
}

var protobufPackage$3 = "cosmos.staking.v1beta1";

function createBaseMsgCreateValidator() {
  return {
    description: undefined,
    commission: undefined,
    minSelfDelegation: "",
    delegatorAddress: "",
    validatorAddress: "",
    pubkey: undefined,
    value: undefined
  };
}

var MsgCreateValidator = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }

    if (message.commission !== undefined) {
      CommissionRates.encode(message.commission, writer.uint32(18).fork()).ldelim();
    }

    if (message.minSelfDelegation !== "") {
      writer.uint32(26).string(message.minSelfDelegation);
    }

    if (message.delegatorAddress !== "") {
      writer.uint32(34).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(42).string(message.validatorAddress);
    }

    if (message.pubkey !== undefined) {
      Any.encode(message.pubkey, writer.uint32(50).fork()).ldelim();
    }

    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateValidator();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.description = Description.decode(reader, reader.uint32());
          break;

        case 2:
          message.commission = CommissionRates.decode(reader, reader.uint32());
          break;

        case 3:
          message.minSelfDelegation = reader.string();
          break;

        case 4:
          message.delegatorAddress = reader.string();
          break;

        case 5:
          message.validatorAddress = reader.string();
          break;

        case 6:
          message.pubkey = Any.decode(reader, reader.uint32());
          break;

        case 7:
          message.value = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      description: isSet$a(object.description) ? Description.fromJSON(object.description) : undefined,
      commission: isSet$a(object.commission) ? CommissionRates.fromJSON(object.commission) : undefined,
      minSelfDelegation: isSet$a(object.minSelfDelegation) ? String(object.minSelfDelegation) : "",
      delegatorAddress: isSet$a(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet$a(object.validatorAddress) ? String(object.validatorAddress) : "",
      pubkey: isSet$a(object.pubkey) ? Any.fromJSON(object.pubkey) : undefined,
      value: isSet$a(object.value) ? Coin.fromJSON(object.value) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.commission !== undefined && (obj.commission = message.commission ? CommissionRates.toJSON(message.commission) : undefined);
    message.minSelfDelegation !== undefined && (obj.minSelfDelegation = message.minSelfDelegation);
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.pubkey !== undefined && (obj.pubkey = message.pubkey ? Any.toJSON(message.pubkey) : undefined);
    message.value !== undefined && (obj.value = message.value ? Coin.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$minSelfDelega, _object$delegatorAddr, _object$validatorAddr;

    var message = createBaseMsgCreateValidator();
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.commission = object.commission !== undefined && object.commission !== null ? CommissionRates.fromPartial(object.commission) : undefined;
    message.minSelfDelegation = (_object$minSelfDelega = object.minSelfDelegation) != null ? _object$minSelfDelega : "";
    message.delegatorAddress = (_object$delegatorAddr = object.delegatorAddress) != null ? _object$delegatorAddr : "";
    message.validatorAddress = (_object$validatorAddr = object.validatorAddress) != null ? _object$validatorAddr : "";
    message.pubkey = object.pubkey !== undefined && object.pubkey !== null ? Any.fromPartial(object.pubkey) : undefined;
    message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
    return message;
  }
};

function createBaseMsgEditValidator() {
  return {
    description: undefined,
    validatorAddress: "",
    commissionRate: "",
    minSelfDelegation: ""
  };
}

var MsgEditValidator = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    if (message.commissionRate !== "") {
      writer.uint32(26).string(message.commissionRate);
    }

    if (message.minSelfDelegation !== "") {
      writer.uint32(34).string(message.minSelfDelegation);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgEditValidator();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.description = Description.decode(reader, reader.uint32());
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        case 3:
          message.commissionRate = reader.string();
          break;

        case 4:
          message.minSelfDelegation = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      description: isSet$a(object.description) ? Description.fromJSON(object.description) : undefined,
      validatorAddress: isSet$a(object.validatorAddress) ? String(object.validatorAddress) : "",
      commissionRate: isSet$a(object.commissionRate) ? String(object.commissionRate) : "",
      minSelfDelegation: isSet$a(object.minSelfDelegation) ? String(object.minSelfDelegation) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.commissionRate !== undefined && (obj.commissionRate = message.commissionRate);
    message.minSelfDelegation !== undefined && (obj.minSelfDelegation = message.minSelfDelegation);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$validatorAddr2, _object$commissionRat, _object$minSelfDelega2;

    var message = createBaseMsgEditValidator();
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.validatorAddress = (_object$validatorAddr2 = object.validatorAddress) != null ? _object$validatorAddr2 : "";
    message.commissionRate = (_object$commissionRat = object.commissionRate) != null ? _object$commissionRat : "";
    message.minSelfDelegation = (_object$minSelfDelega2 = object.minSelfDelegation) != null ? _object$minSelfDelega2 : "";
    return message;
  }
};

function createBaseMsgDelegate() {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: undefined
  };
}

var MsgDelegate = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDelegate();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      delegatorAddress: isSet$a(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet$a(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet$a(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr2, _object$validatorAddr3;

    var message = createBaseMsgDelegate();
    message.delegatorAddress = (_object$delegatorAddr2 = object.delegatorAddress) != null ? _object$delegatorAddr2 : "";
    message.validatorAddress = (_object$validatorAddr3 = object.validatorAddress) != null ? _object$validatorAddr3 : "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};

function createBaseMsgBeginRedelegate() {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: "",
    amount: undefined
  };
}

var MsgBeginRedelegate = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }

    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgBeginRedelegate();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorSrcAddress = reader.string();
          break;

        case 3:
          message.validatorDstAddress = reader.string();
          break;

        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      delegatorAddress: isSet$a(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorSrcAddress: isSet$a(object.validatorSrcAddress) ? String(object.validatorSrcAddress) : "",
      validatorDstAddress: isSet$a(object.validatorDstAddress) ? String(object.validatorDstAddress) : "",
      amount: isSet$a(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorSrcAddress !== undefined && (obj.validatorSrcAddress = message.validatorSrcAddress);
    message.validatorDstAddress !== undefined && (obj.validatorDstAddress = message.validatorDstAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr3, _object$validatorSrcA, _object$validatorDstA;

    var message = createBaseMsgBeginRedelegate();
    message.delegatorAddress = (_object$delegatorAddr3 = object.delegatorAddress) != null ? _object$delegatorAddr3 : "";
    message.validatorSrcAddress = (_object$validatorSrcA = object.validatorSrcAddress) != null ? _object$validatorSrcA : "";
    message.validatorDstAddress = (_object$validatorDstA = object.validatorDstAddress) != null ? _object$validatorDstA : "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};

function createBaseMsgUndelegate() {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: undefined
  };
}

var MsgUndelegate = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUndelegate();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      delegatorAddress: isSet$a(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet$a(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet$a(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr4, _object$validatorAddr4;

    var message = createBaseMsgUndelegate();
    message.delegatorAddress = (_object$delegatorAddr4 = object.delegatorAddress) != null ? _object$delegatorAddr4 : "";
    message.validatorAddress = (_object$validatorAddr4 = object.validatorAddress) != null ? _object$validatorAddr4 : "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long;

  _m0.configure();
}

function isSet$a(value) {
  return value !== null && value !== undefined;
}

exports.MsgCreateValidator = /*#__PURE__*/function (_BaseMsg) {
  _inheritsLoose(MsgCreateValidator$1, _BaseMsg);

  function MsgCreateValidator$1(msg) {
    var _this;

    _this = _BaseMsg.call(this) || this;
    _this.protoMsg = void 0;
    _this.protoMsg = msg;
    return _this;
  }

  var _proto = MsgCreateValidator$1.prototype;

  _proto.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgCreateValidator$1.typeUrl,
      value: MsgCreateValidator.fromPartial(this.protoMsg)
    };
  };

  return MsgCreateValidator$1;
}(BaseMsg);

(function (MsgCreateValidator$1) {
  MsgCreateValidator$1.typeUrl = "/" + protobufPackage$3 + ".MsgCreateValidator";
  MsgCreateValidator$1.Proto = MsgCreateValidator;
})(exports.MsgCreateValidator || (exports.MsgCreateValidator = {}));

exports.MsgEditValidator = /*#__PURE__*/function (_BaseMsg2) {
  _inheritsLoose(MsgEditValidator$1, _BaseMsg2);

  function MsgEditValidator$1(msg) {
    var _this2;

    _this2 = _BaseMsg2.call(this) || this;
    _this2.protoMsg = void 0;
    _this2.protoMsg = msg;
    return _this2;
  }

  var _proto2 = MsgEditValidator$1.prototype;

  _proto2.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgEditValidator$1.typeUrl,
      value: MsgEditValidator.fromPartial(this.protoMsg)
    };
  };

  return MsgEditValidator$1;
}(BaseMsg);

(function (MsgEditValidator$1) {
  MsgEditValidator$1.typeUrl = "/" + protobufPackage$3 + ".MsgEditValidator";
  MsgEditValidator$1.Proto = MsgEditValidator;
})(exports.MsgEditValidator || (exports.MsgEditValidator = {}));

exports.MsgDelegate = /*#__PURE__*/function (_BaseMsg3) {
  _inheritsLoose(MsgDelegate$1, _BaseMsg3);

  function MsgDelegate$1(msg) {
    var _this3;

    _this3 = _BaseMsg3.call(this) || this;
    _this3.protoMsg = void 0;
    _this3.protoMsg = msg;
    return _this3;
  }

  var _proto3 = MsgDelegate$1.prototype;

  _proto3.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgDelegate$1.typeUrl,
      value: MsgDelegate.fromPartial(this.protoMsg)
    };
  };

  return MsgDelegate$1;
}(BaseMsg);

(function (MsgDelegate$1) {
  MsgDelegate$1.typeUrl = "/" + protobufPackage$3 + ".MsgDelegate";
  MsgDelegate$1.Proto = MsgDelegate;
})(exports.MsgDelegate || (exports.MsgDelegate = {}));

exports.MsgBeginRedelegate = /*#__PURE__*/function (_BaseMsg4) {
  _inheritsLoose(MsgBeginRedelegate$1, _BaseMsg4);

  function MsgBeginRedelegate$1(msg) {
    var _this4;

    _this4 = _BaseMsg4.call(this) || this;
    _this4.protoMsg = void 0;
    _this4.protoMsg = msg;
    return _this4;
  }

  var _proto4 = MsgBeginRedelegate$1.prototype;

  _proto4.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgBeginRedelegate$1.typeUrl,
      value: MsgBeginRedelegate.fromPartial(this.protoMsg)
    };
  };

  return MsgBeginRedelegate$1;
}(BaseMsg);

(function (MsgBeginRedelegate$1) {
  MsgBeginRedelegate$1.typeUrl = "/" + protobufPackage$3 + ".MsgBeginRedelegate";
  MsgBeginRedelegate$1.Proto = MsgBeginRedelegate;
})(exports.MsgBeginRedelegate || (exports.MsgBeginRedelegate = {}));

exports.MsgUndelegate = /*#__PURE__*/function (_BaseMsg5) {
  _inheritsLoose(MsgUndelegate$1, _BaseMsg5);

  function MsgUndelegate$1(msg) {
    var _this5;

    _this5 = _BaseMsg5.call(this) || this;
    _this5.protoMsg = void 0;
    _this5.protoMsg = msg;
    return _this5;
  }

  var _proto5 = MsgUndelegate$1.prototype;

  _proto5.generateMessage = function generateMessage() {
    return {
      typeUrl: MsgUndelegate$1.typeUrl,
      value: MsgUndelegate.fromPartial(this.protoMsg)
    };
  };

  return MsgUndelegate$1;
}(BaseMsg);

(function (MsgUndelegate$1) {
  MsgUndelegate$1.typeUrl = "/" + protobufPackage$3 + ".MsgUndelegate";
  MsgUndelegate$1.Proto = MsgUndelegate;
})(exports.MsgUndelegate || (exports.MsgUndelegate = {}));

/* eslint-disable */

function createBasePubKey() {
  return {
    key: new Uint8Array()
  };
}

var PubKey = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePubKey();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      key: isSet$b(object.key) ? bytesFromBase64$1(object.key) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.key !== undefined && (obj.key = base64FromBytes$1(message.key !== undefined ? message.key : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$key;

    var message = createBasePubKey();
    message.key = (_object$key = object.key) != null ? _object$key : new Uint8Array();
    return message;
  }
};

var globalThis$2 = /*#__PURE__*/function () {
  if (typeof globalThis$2 !== "undefined") return globalThis$2;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
}();

var atob$1 = globalThis$2.atob || function (b64) {
  return globalThis$2.Buffer.from(b64, "base64").toString("binary");
};

function bytesFromBase64$1(b64) {
  var bin = atob$1(b64);
  var arr = new Uint8Array(bin.length);

  for (var i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }

  return arr;
}

var btoa$1 = globalThis$2.btoa || function (bin) {
  return globalThis$2.Buffer.from(bin, "binary").toString("base64");
};

function base64FromBytes$1(arr) {
  var bin = [];
  arr.forEach(function (_byte) {
    bin.push(String.fromCharCode(_byte));
  });
  return btoa$1(bin.join(""));
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long;

  _m0.configure();
}

function isSet$b(value) {
  return value !== null && value !== undefined;
}

function createBaseCompactBitArray() {
  return {
    extraBitsStored: 0,
    elems: new Uint8Array()
  };
}

var CompactBitArray = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.extraBitsStored !== 0) {
      writer.uint32(8).uint32(message.extraBitsStored);
    }

    if (message.elems.length !== 0) {
      writer.uint32(18).bytes(message.elems);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCompactBitArray();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.extraBitsStored = reader.uint32();
          break;

        case 2:
          message.elems = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      extraBitsStored: isSet$c(object.extraBitsStored) ? Number(object.extraBitsStored) : 0,
      elems: isSet$c(object.elems) ? bytesFromBase64$2(object.elems) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.extraBitsStored !== undefined && (obj.extraBitsStored = Math.round(message.extraBitsStored));
    message.elems !== undefined && (obj.elems = base64FromBytes$2(message.elems !== undefined ? message.elems : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$extraBitsStor, _object$elems;

    var message = createBaseCompactBitArray();
    message.extraBitsStored = (_object$extraBitsStor = object.extraBitsStored) != null ? _object$extraBitsStor : 0;
    message.elems = (_object$elems = object.elems) != null ? _object$elems : new Uint8Array();
    return message;
  }
};

var globalThis$3 = /*#__PURE__*/function () {
  if (typeof globalThis$3 !== "undefined") return globalThis$3;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
}();

var atob$2 = globalThis$3.atob || function (b64) {
  return globalThis$3.Buffer.from(b64, "base64").toString("binary");
};

function bytesFromBase64$2(b64) {
  var bin = atob$2(b64);
  var arr = new Uint8Array(bin.length);

  for (var i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }

  return arr;
}

var btoa$2 = globalThis$3.btoa || function (bin) {
  return globalThis$3.Buffer.from(bin, "binary").toString("base64");
};

function base64FromBytes$2(arr) {
  var bin = [];
  arr.forEach(function (_byte) {
    bin.push(String.fromCharCode(_byte));
  });
  return btoa$2(bin.join(""));
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long;

  _m0.configure();
}

function isSet$c(value) {
  return value !== null && value !== undefined;
}

/** SignMode represents a signing mode with its own security guarantees. */

var SignMode;

(function (SignMode) {
  /**
   * SIGN_MODE_UNSPECIFIED - SIGN_MODE_UNSPECIFIED specifies an unknown signing mode and will be
   * rejected
   */
  SignMode[SignMode["SIGN_MODE_UNSPECIFIED"] = 0] = "SIGN_MODE_UNSPECIFIED";
  /**
   * SIGN_MODE_DIRECT - SIGN_MODE_DIRECT specifies a signing mode which uses SignDoc and is
   * verified with raw bytes from Tx
   */

  SignMode[SignMode["SIGN_MODE_DIRECT"] = 1] = "SIGN_MODE_DIRECT";
  /**
   * SIGN_MODE_TEXTUAL - SIGN_MODE_TEXTUAL is a future signing mode that will verify some
   * human-readable textual representation on top of the binary representation
   * from SIGN_MODE_DIRECT
   */

  SignMode[SignMode["SIGN_MODE_TEXTUAL"] = 2] = "SIGN_MODE_TEXTUAL";
  /**
   * SIGN_MODE_LEGACY_AMINO_JSON - SIGN_MODE_LEGACY_AMINO_JSON is a backwards compatibility mode which uses
   * Amino JSON and will be removed in the future
   */

  SignMode[SignMode["SIGN_MODE_LEGACY_AMINO_JSON"] = 127] = "SIGN_MODE_LEGACY_AMINO_JSON";
  SignMode[SignMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SignMode || (SignMode = {}));

function signModeFromJSON(object) {
  switch (object) {
    case 0:
    case "SIGN_MODE_UNSPECIFIED":
      return SignMode.SIGN_MODE_UNSPECIFIED;

    case 1:
    case "SIGN_MODE_DIRECT":
      return SignMode.SIGN_MODE_DIRECT;

    case 2:
    case "SIGN_MODE_TEXTUAL":
      return SignMode.SIGN_MODE_TEXTUAL;

    case 127:
    case "SIGN_MODE_LEGACY_AMINO_JSON":
      return SignMode.SIGN_MODE_LEGACY_AMINO_JSON;

    case -1:
    case "UNRECOGNIZED":
    default:
      return SignMode.UNRECOGNIZED;
  }
}
function signModeToJSON(object) {
  switch (object) {
    case SignMode.SIGN_MODE_UNSPECIFIED:
      return "SIGN_MODE_UNSPECIFIED";

    case SignMode.SIGN_MODE_DIRECT:
      return "SIGN_MODE_DIRECT";

    case SignMode.SIGN_MODE_TEXTUAL:
      return "SIGN_MODE_TEXTUAL";

    case SignMode.SIGN_MODE_LEGACY_AMINO_JSON:
      return "SIGN_MODE_LEGACY_AMINO_JSON";

    case SignMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long;

  _m0.configure();
}

function createBaseTxRaw() {
  return {
    bodyBytes: new Uint8Array(),
    authInfoBytes: new Uint8Array(),
    signatures: []
  };
}

var TxRaw = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.bodyBytes.length !== 0) {
      writer.uint32(10).bytes(message.bodyBytes);
    }

    if (message.authInfoBytes.length !== 0) {
      writer.uint32(18).bytes(message.authInfoBytes);
    }

    for (var _iterator2 = _createForOfIteratorHelperLoose(message.signatures), _step2; !(_step2 = _iterator2()).done;) {
      var v = _step2.value;
      writer.uint32(26).bytes(v);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTxRaw();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bodyBytes = reader.bytes();
          break;

        case 2:
          message.authInfoBytes = reader.bytes();
          break;

        case 3:
          message.signatures.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      bodyBytes: isSet$d(object.bodyBytes) ? bytesFromBase64$3(object.bodyBytes) : new Uint8Array(),
      authInfoBytes: isSet$d(object.authInfoBytes) ? bytesFromBase64$3(object.authInfoBytes) : new Uint8Array(),
      signatures: Array.isArray(object == null ? void 0 : object.signatures) ? object.signatures.map(function (e) {
        return bytesFromBase64$3(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.bodyBytes !== undefined && (obj.bodyBytes = base64FromBytes$3(message.bodyBytes !== undefined ? message.bodyBytes : new Uint8Array()));
    message.authInfoBytes !== undefined && (obj.authInfoBytes = base64FromBytes$3(message.authInfoBytes !== undefined ? message.authInfoBytes : new Uint8Array()));

    if (message.signatures) {
      obj.signatures = message.signatures.map(function (e) {
        return base64FromBytes$3(e !== undefined ? e : new Uint8Array());
      });
    } else {
      obj.signatures = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$bodyBytes, _object$authInfoBytes, _object$signatures2;

    var message = createBaseTxRaw();
    message.bodyBytes = (_object$bodyBytes = object.bodyBytes) != null ? _object$bodyBytes : new Uint8Array();
    message.authInfoBytes = (_object$authInfoBytes = object.authInfoBytes) != null ? _object$authInfoBytes : new Uint8Array();
    message.signatures = ((_object$signatures2 = object.signatures) == null ? void 0 : _object$signatures2.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};

function createBaseSignDoc() {
  return {
    bodyBytes: new Uint8Array(),
    authInfoBytes: new Uint8Array(),
    chainId: "",
    accountNumber: Long.UZERO
  };
}

var SignDoc = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.bodyBytes.length !== 0) {
      writer.uint32(10).bytes(message.bodyBytes);
    }

    if (message.authInfoBytes.length !== 0) {
      writer.uint32(18).bytes(message.authInfoBytes);
    }

    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }

    if (!message.accountNumber.isZero()) {
      writer.uint32(32).uint64(message.accountNumber);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSignDoc();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bodyBytes = reader.bytes();
          break;

        case 2:
          message.authInfoBytes = reader.bytes();
          break;

        case 3:
          message.chainId = reader.string();
          break;

        case 4:
          message.accountNumber = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      bodyBytes: isSet$d(object.bodyBytes) ? bytesFromBase64$3(object.bodyBytes) : new Uint8Array(),
      authInfoBytes: isSet$d(object.authInfoBytes) ? bytesFromBase64$3(object.authInfoBytes) : new Uint8Array(),
      chainId: isSet$d(object.chainId) ? String(object.chainId) : "",
      accountNumber: isSet$d(object.accountNumber) ? Long.fromValue(object.accountNumber) : Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.bodyBytes !== undefined && (obj.bodyBytes = base64FromBytes$3(message.bodyBytes !== undefined ? message.bodyBytes : new Uint8Array()));
    message.authInfoBytes !== undefined && (obj.authInfoBytes = base64FromBytes$3(message.authInfoBytes !== undefined ? message.authInfoBytes : new Uint8Array()));
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.accountNumber !== undefined && (obj.accountNumber = (message.accountNumber || Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$bodyBytes2, _object$authInfoBytes2, _object$chainId;

    var message = createBaseSignDoc();
    message.bodyBytes = (_object$bodyBytes2 = object.bodyBytes) != null ? _object$bodyBytes2 : new Uint8Array();
    message.authInfoBytes = (_object$authInfoBytes2 = object.authInfoBytes) != null ? _object$authInfoBytes2 : new Uint8Array();
    message.chainId = (_object$chainId = object.chainId) != null ? _object$chainId : "";
    message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? Long.fromValue(object.accountNumber) : Long.UZERO;
    return message;
  }
};

function createBaseAuthInfo() {
  return {
    signerInfos: [],
    fee: undefined
  };
}

var AuthInfo = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    for (var _iterator6 = _createForOfIteratorHelperLoose(message.signerInfos), _step6; !(_step6 = _iterator6()).done;) {
      var v = _step6.value;
      SignerInfo.encode(v, writer.uint32(10).fork()).ldelim();
    }

    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAuthInfo();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signerInfos.push(SignerInfo.decode(reader, reader.uint32()));
          break;

        case 2:
          message.fee = Fee.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      signerInfos: Array.isArray(object == null ? void 0 : object.signerInfos) ? object.signerInfos.map(function (e) {
        return SignerInfo.fromJSON(e);
      }) : [],
      fee: isSet$d(object.fee) ? Fee.fromJSON(object.fee) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.signerInfos) {
      obj.signerInfos = message.signerInfos.map(function (e) {
        return e ? SignerInfo.toJSON(e) : undefined;
      });
    } else {
      obj.signerInfos = [];
    }

    message.fee !== undefined && (obj.fee = message.fee ? Fee.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$signerInfos;

    var message = createBaseAuthInfo();
    message.signerInfos = ((_object$signerInfos = object.signerInfos) == null ? void 0 : _object$signerInfos.map(function (e) {
      return SignerInfo.fromPartial(e);
    })) || [];
    message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
    return message;
  }
};

function createBaseSignerInfo() {
  return {
    publicKey: undefined,
    modeInfo: undefined,
    sequence: Long.UZERO
  };
}

var SignerInfo = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.publicKey !== undefined) {
      Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
    }

    if (message.modeInfo !== undefined) {
      ModeInfo.encode(message.modeInfo, writer.uint32(18).fork()).ldelim();
    }

    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSignerInfo();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.publicKey = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.modeInfo = ModeInfo.decode(reader, reader.uint32());
          break;

        case 3:
          message.sequence = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      publicKey: isSet$d(object.publicKey) ? Any.fromJSON(object.publicKey) : undefined,
      modeInfo: isSet$d(object.modeInfo) ? ModeInfo.fromJSON(object.modeInfo) : undefined,
      sequence: isSet$d(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.publicKey !== undefined && (obj.publicKey = message.publicKey ? Any.toJSON(message.publicKey) : undefined);
    message.modeInfo !== undefined && (obj.modeInfo = message.modeInfo ? ModeInfo.toJSON(message.modeInfo) : undefined);
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseSignerInfo();
    message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? Any.fromPartial(object.publicKey) : undefined;
    message.modeInfo = object.modeInfo !== undefined && object.modeInfo !== null ? ModeInfo.fromPartial(object.modeInfo) : undefined;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  }
};

function createBaseModeInfo() {
  return {
    single: undefined,
    multi: undefined
  };
}

var ModeInfo = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.single !== undefined) {
      ModeInfo_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
    }

    if (message.multi !== undefined) {
      ModeInfo_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModeInfo();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.single = ModeInfo_Single.decode(reader, reader.uint32());
          break;

        case 2:
          message.multi = ModeInfo_Multi.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      single: isSet$d(object.single) ? ModeInfo_Single.fromJSON(object.single) : undefined,
      multi: isSet$d(object.multi) ? ModeInfo_Multi.fromJSON(object.multi) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.single !== undefined && (obj.single = message.single ? ModeInfo_Single.toJSON(message.single) : undefined);
    message.multi !== undefined && (obj.multi = message.multi ? ModeInfo_Multi.toJSON(message.multi) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseModeInfo();
    message.single = object.single !== undefined && object.single !== null ? ModeInfo_Single.fromPartial(object.single) : undefined;
    message.multi = object.multi !== undefined && object.multi !== null ? ModeInfo_Multi.fromPartial(object.multi) : undefined;
    return message;
  }
};

function createBaseModeInfo_Single() {
  return {
    mode: 0
  };
}

var ModeInfo_Single = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModeInfo_Single();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.mode = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      mode: isSet$d(object.mode) ? signModeFromJSON(object.mode) : 0
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.mode !== undefined && (obj.mode = signModeToJSON(message.mode));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$mode;

    var message = createBaseModeInfo_Single();
    message.mode = (_object$mode = object.mode) != null ? _object$mode : 0;
    return message;
  }
};

function createBaseModeInfo_Multi() {
  return {
    bitarray: undefined,
    modeInfos: []
  };
}

var ModeInfo_Multi = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    if (message.bitarray !== undefined) {
      CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
    }

    for (var _iterator7 = _createForOfIteratorHelperLoose(message.modeInfos), _step7; !(_step7 = _iterator7()).done;) {
      var v = _step7.value;
      ModeInfo.encode(v, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModeInfo_Multi();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bitarray = CompactBitArray.decode(reader, reader.uint32());
          break;

        case 2:
          message.modeInfos.push(ModeInfo.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      bitarray: isSet$d(object.bitarray) ? CompactBitArray.fromJSON(object.bitarray) : undefined,
      modeInfos: Array.isArray(object == null ? void 0 : object.modeInfos) ? object.modeInfos.map(function (e) {
        return ModeInfo.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.bitarray !== undefined && (obj.bitarray = message.bitarray ? CompactBitArray.toJSON(message.bitarray) : undefined);

    if (message.modeInfos) {
      obj.modeInfos = message.modeInfos.map(function (e) {
        return e ? ModeInfo.toJSON(e) : undefined;
      });
    } else {
      obj.modeInfos = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$modeInfos;

    var message = createBaseModeInfo_Multi();
    message.bitarray = object.bitarray !== undefined && object.bitarray !== null ? CompactBitArray.fromPartial(object.bitarray) : undefined;
    message.modeInfos = ((_object$modeInfos = object.modeInfos) == null ? void 0 : _object$modeInfos.map(function (e) {
      return ModeInfo.fromPartial(e);
    })) || [];
    return message;
  }
};

function createBaseFee() {
  return {
    amount: [],
    gasLimit: Long.UZERO,
    payer: "",
    granter: ""
  };
}

var Fee = {
  encode: function encode(message, writer) {
    if (writer === void 0) {
      writer = _m0.Writer.create();
    }

    for (var _iterator8 = _createForOfIteratorHelperLoose(message.amount), _step8; !(_step8 = _iterator8()).done;) {
      var v = _step8.value;
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }

    if (!message.gasLimit.isZero()) {
      writer.uint32(16).uint64(message.gasLimit);
    }

    if (message.payer !== "") {
      writer.uint32(26).string(message.payer);
    }

    if (message.granter !== "") {
      writer.uint32(34).string(message.granter);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFee();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.gasLimit = reader.uint64();
          break;

        case 3:
          message.payer = reader.string();
          break;

        case 4:
          message.granter = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      amount: Array.isArray(object == null ? void 0 : object.amount) ? object.amount.map(function (e) {
        return Coin.fromJSON(e);
      }) : [],
      gasLimit: isSet$d(object.gasLimit) ? Long.fromValue(object.gasLimit) : Long.UZERO,
      payer: isSet$d(object.payer) ? String(object.payer) : "",
      granter: isSet$d(object.granter) ? String(object.granter) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.amount) {
      obj.amount = message.amount.map(function (e) {
        return e ? Coin.toJSON(e) : undefined;
      });
    } else {
      obj.amount = [];
    }

    message.gasLimit !== undefined && (obj.gasLimit = (message.gasLimit || Long.UZERO).toString());
    message.payer !== undefined && (obj.payer = message.payer);
    message.granter !== undefined && (obj.granter = message.granter);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$amount, _object$payer, _object$granter;

    var message = createBaseFee();
    message.amount = ((_object$amount = object.amount) == null ? void 0 : _object$amount.map(function (e) {
      return Coin.fromPartial(e);
    })) || [];
    message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? Long.fromValue(object.gasLimit) : Long.UZERO;
    message.payer = (_object$payer = object.payer) != null ? _object$payer : "";
    message.granter = (_object$granter = object.granter) != null ? _object$granter : "";
    return message;
  }
};

var globalThis$4 = /*#__PURE__*/function () {
  if (typeof globalThis$4 !== "undefined") return globalThis$4;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
}();

var atob$3 = globalThis$4.atob || function (b64) {
  return globalThis$4.Buffer.from(b64, "base64").toString("binary");
};

function bytesFromBase64$3(b64) {
  var bin = atob$3(b64);
  var arr = new Uint8Array(bin.length);

  for (var i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }

  return arr;
}

var btoa$3 = globalThis$4.btoa || function (bin) {
  return globalThis$4.Buffer.from(bin, "binary").toString("base64");
};

function base64FromBytes$3(arr) {
  var bin = [];
  arr.forEach(function (_byte) {
    bin.push(String.fromCharCode(_byte));
  });
  return btoa$3(bin.join(""));
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long;

  _m0.configure();
}

function isSet$d(value) {
  return value !== null && value !== undefined;
}

var SIGN_DIRECT = SignMode.SIGN_MODE_DIRECT;
var TxClient = /*#__PURE__*/function () {
  // public walletClient: SigningStargateClient | null = null;
  // public sender: ISender | null = null;
  function TxClient(chainId, apiClient, rpcUrl, signer, accountAddress) {
    this.chainId = void 0;
    this.apiClient = void 0;
    this.rpcUrl = void 0;
    this.accountAddress = void 0;
    this.signer = void 0;
    this.registry = void 0;
    !!!signer ?  invariant(false, "wallet is required!")  : void 0;
    this.chainId = chainId;
    this.apiClient = apiClient;
    this.rpcUrl = rpcUrl;
    this.signer = signer;
    this.accountAddress = accountAddress;
    var registryTypes = new Map();
    registryTypes.set(exports.MsgCollect.typeUrl, exports.MsgCollect.Proto);
    registryTypes.set(exports.MsgCollectReward.typeUrl, exports.MsgCollectReward.Proto);
    registryTypes.set(exports.MsgCreatePool.typeUrl, exports.MsgCreatePool.Proto);
    registryTypes.set(exports.MsgCreatePosition.typeUrl, exports.MsgCreatePosition.Proto);
    registryTypes.set(exports.MsgDecreaseLiquidity.typeUrl, exports.MsgDecreaseLiquidity.Proto);
    registryTypes.set(exports.MsgIncreaseLiquidity.typeUrl, exports.MsgIncreaseLiquidity.Proto);
    registryTypes.set(exports.MsgSwapExactIn.typeUrl, exports.MsgSwapExactIn.Proto);
    registryTypes.set(exports.MsgSwapExactOut.typeUrl, exports.MsgSwapExactOut.Proto);
    registryTypes.set(exports.MsgSubmitProposal.typeUrl, exports.MsgSubmitProposal.Proto);
    registryTypes.set(exports.MsgDeposit.typeUrl, exports.MsgDeposit.Proto);
    registryTypes.set(exports.MsgVote.typeUrl, exports.MsgVote.Proto);
    registryTypes.set(exports.MsgVoteWeighted.typeUrl, exports.MsgVoteWeighted.Proto);
    registryTypes.set(exports.MsgCreateValidator.typeUrl, exports.MsgCreateValidator.Proto);
    registryTypes.set(exports.MsgEditValidator.typeUrl, exports.MsgEditValidator.Proto);
    registryTypes.set(exports.MsgDelegate.typeUrl, exports.MsgDelegate.Proto);
    registryTypes.set(exports.MsgBeginRedelegate.typeUrl, exports.MsgBeginRedelegate.Proto);
    registryTypes.set(exports.MsgUndelegate.typeUrl, exports.MsgUndelegate.Proto);
    registryTypes.set(exports.MsgCollectRandSwapReward.typeUrl, exports.MsgCollectRandSwapReward.Proto);
    this.registry = new protoSigning.Registry(registryTypes);
  }

  var _proto = TxClient.prototype;

  _proto.getSender = /*#__PURE__*/function () {
    var _getSender = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var authAPI, _yield$authAPI$apiAcc, _yield$authAPI$apiAcc2, account_number, sequence, _yield$this$signer$ge, pubkey;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              authAPI = this.apiClient.authAPI;
              _context.next = 3;
              return authAPI.apiAccountInfo(this.accountAddress);

            case 3:
              _yield$authAPI$apiAcc = _context.sent;
              _yield$authAPI$apiAcc2 = _yield$authAPI$apiAcc.account.base_account;
              account_number = _yield$authAPI$apiAcc2.account_number;
              sequence = _yield$authAPI$apiAcc2.sequence;
              _context.next = 10;
              return this.signer.getAccounts();

            case 10:
              _yield$this$signer$ge = _context.sent[0];
              pubkey = _yield$this$signer$ge.pubkey;
              return _context.abrupt("return", {
                address: this.accountAddress,
                pubkey: pubkey,
                accountNumber: parseInt(account_number),
                sequence: parseInt(sequence)
              });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getSender() {
      return _getSender.apply(this, arguments);
    }

    return getSender;
  }();

  _proto.sendTransaction = /*#__PURE__*/function () {
    var _sendTransaction = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(messages, gasLimit, memo) {
      var sender, signInfoDirect, authInfoDirect, feeMessage, _messages, body, signDocDirect, walletClient, _yield$walletClient$s, signed, signature, txRaw, txBytes;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (memo === void 0) {
                memo = "";
              }

              _context2.next = 3;
              return this.getSender();

            case 3:
              sender = _context2.sent;
              // const pubKeyDecoded = Buffer.from(sender.pubkey, "base64");
              // 1. SignDirect
              signInfoDirect = createSignerInfo(sender.pubkey, sender.sequence, SIGN_DIRECT); // 2. authInfo

              if (gasLimit) {
                // 2. Fee
                feeMessage = createFee('', NETWORK_DETAILS[this.chainId].nativeCurrency.base, gasLimit);
                authInfoDirect = createAuthInfo(signInfoDirect, feeMessage);
              } else {
                authInfoDirect = AuthInfo.fromPartial({
                  signerInfos: [signInfoDirect],
                  fee: {}
                });
              } // 3. txbody
              // const body = createBodyWithMultipleMessages(messages, memo);


              _messages = messages instanceof Array ? messages : [messages];
              body = createTxBodyEncodeObject(_messages, memo); // 4. signDoc

              signDocDirect = createSigDoc(this.registry.encode(body), AuthInfo.encode(authInfoDirect).finish(), this.chainId, sender.accountNumber); // 5. sign

              _context2.next = 11;
              return stargate.SigningStargateClient.connectWithSigner(this.rpcUrl, this.signer, {
                registry: this.registry,
                prefix: NETWORK_DETAILS[this.chainId].nativeCurrency.symbol.toLowerCase()
              });

            case 11:
              walletClient = _context2.sent;
              _context2.next = 14;
              return walletClient.signer.signDirect(this.accountAddress, signDocDirect);

            case 14:
              _yield$walletClient$s = _context2.sent;
              signed = _yield$walletClient$s.signed;
              signature = _yield$walletClient$s.signature;
              txRaw = TxRaw.fromPartial({
                bodyBytes: signed.bodyBytes,
                authInfoBytes: signed.authInfoBytes,
                signatures: [encoding.fromBase64(signature.signature)]
              });
              txBytes = TxRaw.encode(txRaw).finish();
              return _context2.abrupt("return", walletClient.broadcastTx(txBytes));

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function sendTransaction(_x, _x2, _x3) {
      return _sendTransaction.apply(this, arguments);
    }

    return sendTransaction;
  }();

  _proto.getEstimatedFee = /*#__PURE__*/function () {
    var _getEstimatedFee = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(messages, memo) {
      var sender, signInfoDirect, authInfoDirect, _messages, body, signDocDirect, txRaw, txBytes, _yield$this$apiClient, _yield$this$apiClient2, gas_used;

      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (memo === void 0) {
                memo = "";
              }

              _context3.next = 3;
              return this.getSender();

            case 3:
              sender = _context3.sent;
              // const pubKeyDecoded = Buffer.from(sender.pubkey, "base64");
              // 1. SignDirect
              signInfoDirect = createSignerInfo(sender.pubkey, sender.sequence, SIGN_DIRECT); // 2. authInfo

              authInfoDirect = AuthInfo.fromPartial({
                signerInfos: [signInfoDirect],
                fee: {}
              }); // 3. txbody
              // const body = createBodyWithMultipleMessages(messages, memo);

              _messages = messages instanceof Array ? messages : [messages];
              body = createTxBodyEncodeObject(_messages, memo); // 4. signDoc

              signDocDirect = createSigDoc(this.registry.encode(body), AuthInfo.encode(authInfoDirect).finish(), this.chainId, sender.accountNumber);
              console.log(signDocDirect);
              txRaw = TxRaw.fromPartial({
                bodyBytes: signDocDirect.bodyBytes,
                authInfoBytes: signDocDirect.authInfoBytes,
                signatures: [new Uint8Array()]
              });
              txBytes = TxRaw.encode(txRaw).finish();
              _context3.next = 14;
              return this.apiClient.txAPI.estimateGas(encoding.toBase64(txBytes));

            case 14:
              _yield$this$apiClient = _context3.sent;
              _yield$this$apiClient2 = _yield$this$apiClient.gas_info;
              gas_used = _yield$this$apiClient2.gas_used;
              console.log('gas_used: ' + gas_used);
              return _context3.abrupt("return", gas_used);

            case 20:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function getEstimatedFee(_x4, _x5) {
      return _getEstimatedFee.apply(this, arguments);
    }

    return getEstimatedFee;
  }();

  return TxClient;
}();
function createTxBodyEncodeObject(messages, memo) {
  var results = messages.map(function (item) {
    return item.generateMessage();
  });
  return {
    typeUrl: "/cosmos.tx.v1beta1.TxBody",
    value: {
      messages: results,
      memo: memo
    }
  };
}
function createSigDoc(bodyBytes, authInfoBytes, chainId, accountNumber) {
  return SignDoc.fromPartial({
    bodyBytes: bodyBytes,
    authInfoBytes: authInfoBytes,
    chainId: chainId,
    accountNumber: accountNumber
  });
}

function createAuthInfo(signerInfo, fee) {
  return AuthInfo.fromPartial({
    signerInfos: [signerInfo],
    fee: fee
  });
}

function createFee(fee, denom, gasLimit) {
  return Fee.fromPartial({
    amount: [Coin.fromPartial({
      denom: denom,
      amount: fee
    })],
    gasLimit: gasLimit
  });
}

function createSignerInfo(publicKey, sequence, mode) {
  var pubkey = any.Any.fromPartial({
    typeUrl: "/ethermint.crypto.v1.ethsecp256k1.PubKey",
    value: PubKey.encode({
      key: publicKey
    }).finish()
  });
  var signerInfo = SignerInfo.fromPartial({
    publicKey: pubkey,
    modeInfo: ModeInfo.fromPartial({
      single: ModeInfo_Single.fromPartial({
        mode: mode
      })
    }),
    sequence: sequence
  });
  return signerInfo;
}

exports.APIClient = APIClient;
exports.APIRequester = APIRequester;
exports.AuthAPI = AuthAPI;
exports.BASE_UNIT_TICK = BASE_UNIT_TICK;
exports.BankAPI = BankAPI;
exports.BaseAPI = BaseAPI;
exports.BaseMsg = BaseMsg;
exports.CHAIN_NAMES = CHAIN_NAMES;
exports.DEFAULT_PRECISION = DEFAULT_PRECISION;
exports.DEFAULT_USER_PRECISION = DEFAULT_USER_PRECISION;
exports.FEE_AMOUNT_DETAIL = FEE_AMOUNT_DETAIL;
exports.LiquidityMath = LiquidityMath;
exports.MAX_PRECISION = MAX_PRECISION;
exports.NETWORK_DETAILS = NETWORK_DETAILS;
exports.ONE_DAY_TO_SECONDS = ONE_DAY_TO_SECONDS;
exports.ONE_YEAR_TO_DAYS = ONE_YEAR_TO_DAYS;
exports.REG_DECIMAL = REG_DECIMAL;
exports.REG_DECIMAL_SIMPLE = REG_DECIMAL_SIMPLE;
exports.REG_NUMBER = REG_NUMBER;
exports.SIGN_DIRECT = SIGN_DIRECT;
exports.SwapAPI = SwapAPI;
exports.TICK_SPACINGS = TICK_SPACINGS;
exports.TickMath = TickMath;
exports.TokenAPI = TokenAPI;
exports.TransactionLooper = TransactionLooper;
exports.TxAPI = TxAPI;
exports.TxClient = TxClient;
exports.ZERO = ZERO;
exports.arrayToMap = arrayToMap;
exports.checkInputNumber = checkInputNumber;
exports.createSigDoc = createSigDoc;
exports.createTxBodyEncodeObject = createTxBodyEncodeObject;
exports.decimalNumber = decimalNumber;
exports.deepCopy = deepCopy;
exports.div = div;
exports.encrypt = encrypt;
exports.formatDiffTime = formatDiffTime;
exports.formatMoment = formatMoment;
exports.formatNumber = formatNumber;
exports.formatTime = formatTime;
exports.formatUnixMoment = formatUnixMoment;
exports.getPercentByFeeAmount = getPercentByFeeAmount;
exports.getPoolAddress = getPoolAddress;
exports.isEmptyAmount = isEmptyAmount;
exports.isEqualTo = isEqualTo;
exports.isGreaterThan = isGreaterThan;
exports.isLessThan = isLessThan;
exports.isNumeric = isNumeric;
exports.isPositive = isPositive;
exports.longToNumber = longToNumber;
exports.minus = minus;
exports.multipliedBy = multipliedBy;
exports.objectToMap = objectToMap;
exports.plus = plus;
exports.pow = pow;
exports.pow18 = pow18;
exports.powM18 = powM18;
exports.shift = shift;
exports.sortsBefore = sortsBefore;
exports.to32 = to32;
exports.toAmountCeil = toAmountCeil;
exports.toAmountFee = toAmountFee;
exports.toAmountFloor = toAmountFloor;
exports.toAmountString = toAmountString;
exports.toDecimalPlaces = toDecimalPlaces;
exports.toExactAmount = toExactAmount;
exports.toPercent = toPercent;
exports.toUsd = toUsd;
//# sourceMappingURL=some-chain-sdk.cjs.development.js.map
