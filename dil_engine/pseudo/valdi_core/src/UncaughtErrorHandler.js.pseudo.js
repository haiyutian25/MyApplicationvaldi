// fn o  args=3 vars=3 closure=0 cpool=0 bc=26B file=valdi_core/src/UncaughtErrorHandler
// args: r, e, t
function {
  if (!((r(e, t) === 0))) goto L_b;
  return 0;
  if (!((r(e, t) === 1))) goto L_12;
  return 1;
  if (!((r(e, t) === 2))) goto L_19;
  return 2;
  r(e, t);
  return;
}

// fn d  args=3 vars=5 closure=2 cpool=0 bc=144B file=valdi_core/src/UncaughtErrorHandler
// args: r, e, t
// locals: d, l
// closure: n, o
function {
  let l;
  let d;
  d = n.catchAllErrorHandler;
  if (!(d)) goto L_39;
  return o(d, e, t);   // tail call
  if (!((undefined === r))) goto L_40;
  return 0;
  if (!((n.errorHandlersByContextId == null))) goto L_6c;
  n.errorHandlersByContextId;
  goto L_6e;
  l = undefined[r];
  if (!((l == null))) goto L_7a;
  l;
  goto L_7b;
  if (!(!undefined.length)) goto L_80;
  return 0;
  return o(l[(l.length - 1)], e, t);   // tail call
}

// fn l  args=1 vars=1 closure=1 cpool=0 bc=14B file=valdi_core/src/UncaughtErrorHandler
// args: r
// closure: n
function {
  n.catchAllErrorHandler = r;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=183B file=valdi_core/src/UncaughtErrorHandler
// locals: o
// closure: n, e, r, t
function {
  let o;
  if (!(!n.errorHandlersByContextId)) goto L_2b;
  return;
  o = n.errorHandlersByContextId[e];
  if (!(o)) goto L_b6;
  if (!(r.remove(o, t))) goto L_b6;
  if (!((0 === o.length))) goto L_b6;
  // [栈深重同步 2 -> 1]
  n.errorHandlersByContextId;
  return;
}

// fn s  args=2 vars=3 closure=2 cpool=1 bc=200B file=valdi_core/src/UncaughtErrorHandler
// args: e, t
// locals: o
// closure: n, r
function {
  let o;
  if ((n.errorHandlersByContextId)) goto L_39;
  n.errorHandlersByContextId = {};
  {};
  o = n.errorHandlersByContextId[e];
  if ((o)) goto L_9b;
  o = [];
  [];
  n.errorHandlersByContextId[e] = o;
  o;
  o.push(t);
  return function <atom:0>;
}

// fn a  args=2 vars=2 closure=1 cpool=0 bc=72B file=valdi_core/src/UncaughtErrorHandler
// args: r, e
// closure: s
function {
  return s(r.renderer.contextId, e);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=8B file=valdi_core/src/UncaughtErrorHandler
// args: r, e
// closure: d
function {
  return d(e, false, r);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=8B file=valdi_core/src/UncaughtErrorHandler
// args: r, e
// closure: d
function {
  return d(e, true, r);   // tail call
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=7 bc=302B file=valdi_core/src/UncaughtErrorHandler
// args: require, module, exports
// locals: r, e, t, n, o, d, l, s, a
function {
  o = function o;
  d = function d;
  l = function l;
  s = function s;
  a = function a;
  let n;
  let t;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.setCatchAllUncaughtErrorHandler = undefined;
  exports.registerUncaughtErrorHandlerForContextId = undefined;
  exports.registerUncaughtErrorHandlerForComponent = undefined;
  r = require("coreutils/src/ArrayUtils");
  e = require("./ValdiRuntimeProvider");
  t = e.getValdiRuntime();
  n = globalThis;
  t.setUncaughtExceptionHandler(function <atom:0>);
  t.setUnhandledRejectionHandler(function <atom:0>);
  exports.setCatchAllUncaughtErrorHandler = l;
  exports.registerUncaughtErrorHandlerForContextId = s;
  exports.registerUncaughtErrorHandlerForComponent = a;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/UncaughtErrorHandler
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
