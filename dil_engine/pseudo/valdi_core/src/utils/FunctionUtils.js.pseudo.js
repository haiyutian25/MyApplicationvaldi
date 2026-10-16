// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=18B file=valdi_core/src/utils/FunctionUtils
// args: e
// closure: a
function {
  e = ...0;
  // append([], 0, e)
  e;
  return a.apply(undefined, []);
}

// fn a  args=2 vars=3 closure=1 cpool=1 bc=66B file=valdi_core/src/utils/FunctionUtils
// args: e, a
// locals: r
// closure: l
function {
  let r;
  if (!((0 === e))) goto L_a;
  return a;
  r = function <atom:0>;
  l.configureCallback(e, r);
  return r;
}

// fn r  args=1 vars=1 closure=1 cpool=0 bc=6B file=valdi_core/src/utils/FunctionUtils
// args: e
// closure: a
function {
  return a(1, e);   // tail call
}

// fn t  args=1 vars=1 closure=1 cpool=0 bc=6B file=valdi_core/src/utils/FunctionUtils
// args: e
// closure: a
function {
  return a(2, e);   // tail call
}

// fn n  args=1 vars=1 closure=1 cpool=0 bc=6B file=valdi_core/src/utils/FunctionUtils
// args: e
// closure: a
function {
  return a(6, e);   // tail call
}

// fn i  args=2 vars=2 closure=1 cpool=0 bc=9B file=valdi_core/src/utils/FunctionUtils
// args: e, l
// closure: t
function {
  if (!(e)) goto L_7;
  return t(l);
  return l;
}

// fn o  args=1 vars=1 closure=1 cpool=0 bc=6B file=valdi_core/src/utils/FunctionUtils
// args: e
// closure: a
function {
  return a(4, e);   // tail call
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=6 bc=267B file=valdi_core/src/utils/FunctionUtils
// args: require, module, exports
// locals: e, l, a, r, t, n, i, o
function {
  a = function a;
  r = function r;
  t = function t;
  n = function n;
  i = function i;
  o = function o;
  let l;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.makeConfiguredCallback = undefined;
  exports.makeMainThreadCallback = undefined;
  exports.makeInterruptibleCallback = undefined;
  exports.makeSingleCallInterruptibleCallback = undefined;
  exports.makeInterruptibleCallbackOptionally = undefined;
  exports.makeSingleCallCallback = undefined;
  e = require("../ValdiRuntimeProvider");
  l = e.getValdiRuntime();
  exports.makeConfiguredCallback = a;
  exports.makeMainThreadCallback = r;
  exports.makeInterruptibleCallback = t;
  exports.makeSingleCallInterruptibleCallback = n;
  exports.makeInterruptibleCallbackOptionally = i;
  exports.makeSingleCallCallback = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/utils/FunctionUtils
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
