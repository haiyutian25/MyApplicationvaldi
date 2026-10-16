// fn s  args=2 vars=5 closure=2 cpool=0 bc=255B file=dil_renderer/src/PolyfilledTraceCollector
// args: t, e
// locals: n, s, o
// closure: r, i
function {
  let o;
  let s;
  let n;
  n = [{name: "process_name", ph: "M", pid: 1, tid: 0, args: {name: "DIL"}}, {name: "thread_name", ph: "M", pid: 1, tid: 1, args: {name: "DIL main thread"}}, {name: "thread_name", ph: "M", pid: 1, tid: 2, args: {name: "DILSandbox worker thread"}}];
  s = r(t, e);
  i(n, t, 1, s);
  i(n, e, 2, s);
  o = {traceEvents: n, displayTimeUnit: "ms"};
  return JSON.stringify(o);   // tail call
}

// fn r  args=2 vars=5 closure=0 cpool=0 bc=290B file=dil_renderer/src/PolyfilledTraceCollector
// args: t, e
// locals: n, s, s#1
function {
  let n;
  n = Number.POSITIVE_INFINITY;
  let s;
  for (const s of t) {
    n = Math.min(n, s.timestampMicros);
    Math.min(n, s.timestampMicros);
  }
  let s#1;
  for (const s#1 of e) {
    n = Math.min(n, s#1.timestampMicros);
    Math.min(n, s#1.timestampMicros);
  }
  if (!((n === Number.POSITIVE_INFINITY))) goto L_11e;
  return 0;
  return n;
}

// fn i  args=4 vars=6 closure=1 cpool=0 bc=476B file=dil_renderer/src/PolyfilledTraceCollector
// args: t, e, n, s
// locals: r, e#1
// closure: o
function {
  let r;
  for (const r of e) {
    let e#1;
    e#1 = (r.timestampMicros - s);
    if (!((r.type === 0))) goto L_d3;
    if (!((r.name == null))) goto L_a9;
    r.name;
    t.push({name: "", ph: "B", pid: 1, tid: n, ts: e#1});
    goto L_1d1;
    if (!((r.type === 1))) goto L_120;
    t.push({ph: "E", pid: 1, tid: n, ts: e#1});
    goto L_1d1;
    if (!((r.type === 2))) goto L_1d1;
    if (!((r.name == null))) goto L_175;
    r.name;
    t.push({name: "", ph: "i", pid: 1, tid: n, ts: e#1, s: "t", args: o(r.args)});
    r.type;
  }
  return;
}

// fn o  args=1 vars=4 closure=0 cpool=0 bc=101B file=dil_renderer/src/PolyfilledTraceCollector
// args: t
// locals: e, n, s
function {
  let e;
  if (((undefined === t))) goto L_e;
  if (!((0 === t.length))) goto L_11;
  return;
  e = {};
  let n;
  n = 0;
  if (!((n < t.length))) goto L_61;
  let s;
  if (!(((n + 1) < t.length))) goto L_36;
  goto L_37;
  // [栈深重同步 1 -> 0]
  s = null;
  if (!((undefined === s))) goto L_51;
  goto L_54;
  // [栈深重同步 3 -> 2]
  e[String(t[n])] = s;
  n = (n + 2);
  (n + 2);
  goto L_18;
  return e;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=4 bc=109B file=dil_renderer/src/PolyfilledTraceCollector
// args: require, module, exports
// locals: t, e, n, s, r, i, o
function {
  s = function s;
  r = function r;
  i = function i;
  o = function o;
  let n;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.polyfilledTracesToPerfettoJSON = undefined;
  t = 1;
  e = 1;
  n = 2;
  exports.polyfilledTracesToPerfettoJSON = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_renderer/src/PolyfilledTraceCollector
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
