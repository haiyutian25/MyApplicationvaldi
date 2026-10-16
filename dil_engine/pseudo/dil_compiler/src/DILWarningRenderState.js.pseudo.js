// fn t  args=2 vars=2 closure=1 cpool=0 bc=41B file=dil_compiler/src/DILWarningRenderState
// args: r, t
// closure: e
function {
  return r.withProperty(e, t);   // tail call
}

// fn n  args=3 vars=3 closure=2 cpool=0 bc=89B file=dil_compiler/src/DILWarningRenderState
// args: e, t, n
// closure: r, o
function {
  if (!(r.isLoggingEnabled)) goto L_52;
  console.warn(t);
  o(e, t, n);
  return;
}

// fn o  args=3 vars=3 closure=2 cpool=0 bc=9B file=dil_compiler/src/DILWarningRenderState
// args: r, e, t
// closure: p, i
function {
  return p(i(r), e, t);   // tail call
}

// fn i  args=1 vars=2 closure=1 cpool=0 bc=68B file=dil_compiler/src/DILWarningRenderState
// args: r
// locals: t
// closure: e
function {
  let t;
  if (!((undefined === r))) goto L_9;
  return;
  t = r.getProperty(e);
  if (!(("function" == typeof t))) goto L_42;
  return t;
  return undefined;
}

// fn p  args=3 vars=3 closure=0 cpool=0 bc=20B file=dil_compiler/src/DILWarningRenderState
// args: r, e, t
function {
  if (!(("function" == typeof r))) goto L_13;
  r(e, t);
  return true;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=5 bc=250B file=dil_compiler/src/DILWarningRenderState
// args: require, module, exports
// locals: r, e, t, n, o, i, p
function {
  t = function t;
  n = function n;
  o = function o;
  i = function i;
  p = function p;
  let e;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.renderStateWithDILWarningReporter = undefined;
  exports.reportDILWarning = undefined;
  exports.notifyDILWarning = undefined;
  exports.getDILWarningReporter = undefined;
  exports.notifyDILWarningReporter = undefined;
  r = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  e = Symbol("DILWarningReporterRenderStateProperty");
  exports.renderStateWithDILWarningReporter = t;
  exports.reportDILWarning = n;
  exports.notifyDILWarning = o;
  exports.getDILWarningReporter = i;
  exports.notifyDILWarningReporter = p;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/DILWarningRenderState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
