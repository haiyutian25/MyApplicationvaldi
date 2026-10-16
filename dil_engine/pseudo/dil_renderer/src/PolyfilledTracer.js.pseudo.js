// fn l  args=0 vars=2 closure=6 cpool=0 bc=349B file=dil_renderer/src/PolyfilledTracer
// locals: e, n
// closure: c, s, a, f, p, u
function {
  let n;
  let e;
  if (!(c)) goto L_c;
  return;
  c = true;
  true;
  e = globalThis.runtime;
  if (!((undefined === e))) goto L_42;
  return;
  n = e.getCurrentPlatform();
  if (!((1 !== n))) goto L_78;
  if (((2 !== n))) goto L_15c;
  if ((e.isContinuousTraceRecordingEnabled())) goto L_15c;
  s = performance.now.bind(performance);
  performance.now.bind(performance);
  a = (1000 * performance.timeOrigin);
  (1000 * performance.timeOrigin);
  e.beginTrace = f;
  e.endTrace = p;
  e.instantTrace = u;
  u;
  return;
}

// fn d  args=3 vars=4 closure=5 cpool=0 bc=159B file=dil_renderer/src/PolyfilledTracer
// args: e, n, c
// locals: a
// closure: s, r, o, i, t
function {
  let a;
  a = {type: e, timestampMs: s(), name: n, args: c, next: undefined};
  if (!((undefined === r))) goto L_36;
  o = a;
  goto L_46;
  // [栈深重同步 1 -> 0]
  r.next = a;
  a;
  r = a;
  a;
  i = (i + 1);
  (i + 1);
  if (!((i > t))) goto L_9e;
  if (!((o == null))) goto L_6f;
  o;
  goto L_90;
  o = undefined.next;
  undefined.next;
  i = (i - 1);
  (i - 1);
  return;
}

// fn f  args=1 vars=1 closure=1 cpool=0 bc=6B file=dil_renderer/src/PolyfilledTracer
// args: e
// closure: d
function {
  d(0, e, undefined);
  return;
}

// fn p  args=0 vars=0 closure=1 cpool=0 bc=6B file=dil_renderer/src/PolyfilledTracer
// closure: d
function {
  d(1, undefined, undefined);
  return;
}

// fn u  args=2 vars=2 closure=1 cpool=0 bc=6B file=dil_renderer/src/PolyfilledTracer
// args: e, n
// closure: d
function {
  d(2, e, n);
  return;
}

// fn m  args=0 vars=2 closure=2 cpool=0 bc=326B file=dil_renderer/src/PolyfilledTracer
// locals: e, n
// closure: o, a
function {
  let n;
  let e;
  e = [];
  n = o;
  if (!((undefined !== n))) goto L_142;
  e.push({type: n.type, timestampMicros: Math.round((1000 * (n.timestampMs + a))), name: n.name, args: n.args});
  n = n.next;
  n.next;
  goto L_e;
  return e;
}

// fn <atom:0>  args=3 vars=18 closure=0 cpool=6 bc=258B file=dil_renderer/src/PolyfilledTracer
// args: require, module, exports
// locals: e, n, t, o, r, i, c, s, a, l, d, f, p, u, m
function {
  l = function l;
  d = function d;
  f = function f;
  p = function p;
  u = function u;
  m = function m;
  let a;
  let s;
  let c;
  let i;
  let r;
  let o;
  let t;
  let n;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.installPolyfilledTracer = undefined;
  exports.collectPolyfilledTraces = undefined;
  e = 1;
  n = 2;
  t = 2048;
  o = undefined;
  r = undefined;
  i = 0;
  c = false;
  s = performance.now.bind(performance);
  a = 0;
  exports.installPolyfilledTracer = l;
  exports.collectPolyfilledTraces = m;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_renderer/src/PolyfilledTracer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
