// fn t  args=1 vars=1 closure=1 cpool=0 bc=128B file=valdi_rxjs/src/util/isAsyncIterable
// args: t
// closure: e
function {
  if (!(Symbol.asyncIterator)) goto L_7f;
  if (!((t == null))) goto L_57;
  t;
  goto L_7e;
  return e.isFunction(undefined[Symbol.asyncIterator]);
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=1 bc=93B file=valdi_rxjs/src/util/isAsyncIterable
// args: require, module, exports
// locals: e, t
function {
  t = function t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.isAsyncIterable = undefined;
  e = require("./isFunction");
  exports.isAsyncIterable = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_rxjs/src/util/isAsyncIterable
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
