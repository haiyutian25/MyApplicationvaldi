// fn n  args=0 vars=0 closure=1 cpool=0 bc=4B file=valdi_core/src/utils/Trace
// closure: r
function {
  return r;
}

// fn o  args=1 vars=1 closure=1 cpool=0 bc=6B file=valdi_core/src/utils/Trace
// args: e
// closure: r
function {
  r = e;
  e;
  return;
}

// fn c  args=0 vars=0 closure=1 cpool=0 bc=39B file=valdi_core/src/utils/Trace
// closure: t
function {
  return t.startTraceRecording();   // tail call
}

// fn i  args=1 vars=1 closure=1 cpool=0 bc=37B file=valdi_core/src/utils/Trace
// args: e
// closure: a
function {
  return a(e).traceData;
}

// fn a  args=1 vars=1 closure=1 cpool=0 bc=40B file=valdi_core/src/utils/Trace
// args: e
// closure: t
function {
  return t.stopTraceRecording(e);   // tail call
}

// fn s  args=1 vars=1 closure=1 cpool=0 bc=86B file=valdi_core/src/utils/Trace
// args: e
// closure: t
function {
  if (!((undefined === e))) goto L_2d;
  return t.collectContinuousTraces();
  return t.collectContinuousTraces(e);
}

// fn u  args=0 vars=0 closure=1 cpool=0 bc=81B file=valdi_core/src/utils/Trace
// closure: t
function {
  if (!(!!t.beginTrace)) goto L_50;
  return !!t.endTrace;
}

// fn p  args=0 vars=0 closure=2 cpool=0 bc=58B file=valdi_core/src/utils/Trace
// closure: u, t
function {
  if (!(u())) goto L_39;
  if (!((t.isContinuousTraceRecordingEnabled == null))) goto L_35;
  t.isContinuousTraceRecordingEnabled;
  t;
  goto L_38;
  // [栈深重同步 2 -> 3]
  return (true === <?>.call(undefined));
}

// fn d  args=2 vars=2 closure=2 cpool=0 bc=103B file=valdi_core/src/utils/Trace
// args: e, r
// closure: u, t
function {
  if ((!u())) goto L_2c;
  if (!(!t.setContinuousTraceRecordingEnabled)) goto L_3d;
  throw new Error("Continuous trace recording is unavailable in this runtime");
  t.setContinuousTraceRecordingEnabled(e, r);
  return;
}

// fn T  args=1 vars=2 closure=1 cpool=0 bc=53B file=valdi_core/src/utils/Trace
// args: e
// locals: r
// closure: t
function {
  let r;
  r = t.beginTrace;
  if (!(r)) goto L_34;
  r(e);
  return;
}

// fn f  args=0 vars=1 closure=1 cpool=0 bc=52B file=valdi_core/src/utils/Trace
// locals: e
// closure: t
function {
  let e;
  e = t.endTrace;
  if (!(e)) goto L_33;
  e();
  return;
}

// fn x  args=1 vars=2 closure=1 cpool=0 bc=53B file=valdi_core/src/utils/Trace
// args: e
// locals: r
// closure: t
function {
  let r;
  r = t.instantTrace;
  if (!(r)) goto L_34;
  r(e);
  return;
}

// fn l  args=2 vars=3 closure=1 cpool=0 bc=54B file=valdi_core/src/utils/Trace
// args: e, r
// locals: n
// closure: t
function {
  let n;
  n = t.instantTrace;
  if (!(n)) goto L_35;
  n(e, r);
  return;
}

// fn g  args=2 vars=2 closure=1 cpool=0 bc=7B file=valdi_core/src/utils/Trace
// args: e, t
// closure: y
function {
  return y(e, undefined, t);   // tail call
}

// fn b  args=3 vars=3 closure=1 cpool=0 bc=7B file=valdi_core/src/utils/Trace
// args: e, t, r
// closure: y
function {
  return y(e, t, r);   // tail call
}

// fn y  args=3 vars=5 closure=1 cpool=0 bc=131B file=valdi_core/src/utils/Trace
// args: e, r, n
// locals: o, c
// closure: t
function {
  let c;
  let o;
  o = t.beginTrace;
  c = t.endTrace;
  if ((!o)) goto L_5c;
  if (!(!c)) goto L_62;
  return n();   // tail call
  o(e, r);
  try { // catch -> L_77
  // gosub (finally 块) 125
  return n();
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 125
  throw <?>;
  c();
  // ret (finally 块) 
}

// fn C  args=2 vars=4 closure=2 cpool=0 bc=160B file=valdi_core/src/utils/Trace
// args: e, r
// locals: n, o
// closure: t, R
function {
  let o;
  let n;
  n = t.makeTraceProxy;
  if (!(!n)) goto L_33;
  return r;
  o = n(e, r);
  Object.defineProperty(o, "name", {value: r.name});
  o[R] = r;
  return o;
}

// fn E  args=3 vars=6 closure=2 cpool=0 bc=373B file=valdi_core/src/utils/Trace
// args: e, t, r
// locals: n, o, c
// closure: R, C
function {
  let c;
  let o;
  let n;
  if ((r.get)) goto L_78;
  if ((r.set)) goto L_78;
  if (!(!r.writable)) goto L_7b;
  return;
  n = r.value;
  if (!(("function" != typeof n))) goto L_ab;
  return;
  o = e.constructor;
  if (!((n === o))) goto L_d8;
  return;
  if (!(n[R])) goto L_e2;
  return;
  if (!((o == null))) goto L_ed;
  o;
  goto L_10e;
  c = undefined.name;
  if (!(c)) goto L_145;
  goto L_16f;
  // [栈深重同步 2 -> 1]
  return C("<anon>.".concat(t), n);   // tail call
}

// fn m  args=1 vars=6 closure=2 cpool=0 bc=484B file=valdi_core/src/utils/Trace
// args: e
// locals: r, e#1, t, e#2, n
// closure: t, E
function {
  let r;
  if (!(!t.makeTraceProxy)) goto L_2b;
  return;
  r = e.prototype;
  if (!(r)) goto L_1e3;
  if (!((r !== Object.prototype))) goto L_1e3;
  if (!((r !== Array.prototype))) goto L_1e3;
  if (!((r !== Function.prototype))) goto L_1e3;
  if (!((r !== Number.prototype))) goto L_1e3;
  let e#1;
  e#1 = Object.getOwnPropertyNames(r);
  let t;
  for (const t of e#1) {
    let n;
    let e#2;
    e#2 = Object.getOwnPropertyDescriptor(r, t);
    if ((!e#2)) continue;
    n = E(r, t, e#2);
    if (!(n)) goto L_1a8;
    r[t] = n;
    n;
  }
  r = Object.getPrototypeOf(r);
  Object.getPrototypeOf(r);
  goto L_4e;
  return;
}

// fn P  args=1 vars=1 closure=1 cpool=0 bc=4B file=valdi_core/src/utils/Trace
// args: e
// closure: m
function {
  m(e);
  return;
}

// fn h  args=3 vars=4 closure=2 cpool=0 bc=71B file=valdi_core/src/utils/Trace
// args: e, r, n
// locals: o
// closure: t, E
function {
  let o;
  if (!(!t.makeTraceProxy)) goto L_2b;
  return;
  o = E(e, r, n);
  if (!(o)) goto L_46;
  n.value = o;
  o;
  return;
}

// fn <atom:0>  args=3 vars=28 closure=0 cpool=21 bc=621B file=valdi_core/src/utils/Trace
// args: require, module, exports
// locals: e, t, r, n, o, c, i, a, s, u, p, d, T, f, x, l, g, b, y, R, C, E, m, P, h
function {
  n = function n;
  o = function o;
  c = function c;
  i = function i;
  a = function a;
  s = function s;
  u = function u;
  p = function p;
  d = function d;
  T = function T;
  f = function f;
  x = function x;
  l = function l;
  g = function g;
  b = function b;
  y = function y;
  C = function C;
  E = function E;
  m = function m;
  P = function P;
  h = function h;
  let R;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.isRendererTracingEnabledByDefault = undefined;
  exports.setRendererTracingEnabledByDefault = undefined;
  exports.startTraceRecording = undefined;
  exports.stopTraceRecording = undefined;
  exports.stopTraceRecordingWithMetadata = undefined;
  exports.collectContinuousTraces = undefined;
  exports.isTracingSupported = undefined;
  exports.isContinuousTraceRecordingEnabled = undefined;
  exports.setContinuousTraceRecordingEnabled = undefined;
  exports.beginTrace = undefined;
  exports.endTrace = undefined;
  exports.instantTrace = undefined;
  exports.instantTraceWithArgs = undefined;
  exports.trace = undefined;
  exports.traceWithArgs = undefined;
  exports.installTraceProxy = undefined;
  exports.Trace = undefined;
  exports.TraceMethod = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider");
  t = e.getValdiRuntime();
  r = false;
  exports.isRendererTracingEnabledByDefault = n;
  exports.setRendererTracingEnabledByDefault = o;
  exports.startTraceRecording = c;
  exports.stopTraceRecording = i;
  exports.stopTraceRecordingWithMetadata = a;
  exports.collectContinuousTraces = s;
  exports.isTracingSupported = u;
  exports.isContinuousTraceRecordingEnabled = p;
  exports.setContinuousTraceRecordingEnabled = d;
  exports.beginTrace = T;
  exports.endTrace = f;
  exports.instantTrace = x;
  exports.instantTraceWithArgs = l;
  exports.trace = g;
  exports.traceWithArgs = b;
  R = "$trace-proxy-target";
  exports.installTraceProxy = m;
  exports.Trace = P;
  exports.TraceMethod = h;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/utils/Trace
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
