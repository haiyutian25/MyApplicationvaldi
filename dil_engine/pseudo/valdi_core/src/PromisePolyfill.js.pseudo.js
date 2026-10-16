// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=3B file=valdi_core/src/PromisePolyfill
// args: e
function {
  e();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=7B file=valdi_core/src/PromisePolyfill
// closure: o
function {
  o = true;
  true;
  return;
}

// fn o  args=1 vars=2 closure=0 cpool=2 bc=63B file=valdi_core/src/PromisePolyfill
// args: e
// locals: o
function {
  let o;
  o = false;
  new Promise(function <atom:0>).then(function <atom:0>);
  e();
  return o;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=4B file=valdi_core/src/PromisePolyfill
// closure: e, o
function {
  e(o);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=1 bc=9B file=valdi_core/src/PromisePolyfill
// args: e, o
function {
  queueMicrotask(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=4B file=valdi_core/src/PromisePolyfill
// closure: o, t
function {
  o(t);
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=1 bc=41B file=valdi_core/src/PromisePolyfill
// args: o, t
// closure: e
function {
  e.setTimeoutUninterruptible(function <atom:0>, 1);
  return;
}

// fn t  args=0 vars=3 closure=2 cpool=2 bc=230B file=valdi_core/src/PromisePolyfill
// locals: o, e, o#1
// closure: e, require
function {
  let o;
  o = require("./Promise", true);
  if (!(o)) goto L_e5;
  if (!(o.polyfill)) goto L_e5;
  o.polyfill();
  if (!(("undefined" != typeof queueMicrotask))) goto L_ad;
  let e;
  e = function <atom:0>;
  Promise._setAsap(e);
  return;
  let o#1;
  o#1 = function <atom:0>;
  Promise._setAsap(o#1);
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=2 bc=118B file=valdi_core/src/PromisePolyfill
// args: require, module, exports
// locals: e, o, t
function {
  o = function o;
  t = function t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.arePromiseUtterlyBroken = undefined;
  exports.polyfillPromise = undefined;
  e = require("./SetTimeout");
  exports.arePromiseUtterlyBroken = o;
  exports.polyfillPromise = t;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/PromisePolyfill
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
