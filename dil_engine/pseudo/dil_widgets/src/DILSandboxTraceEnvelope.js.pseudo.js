// fn d  args=4 vars=8 closure=3 cpool=0 bc=806B file=dil_widgets/src/DILSandboxTraceEnvelope
// args: e, t, o, i
// locals: a, d, p, m
// closure: s, r, n
function {
  let m;
  let p;
  let d;
  let a;
  a = s(e);
  if (!((undefined === a))) goto L_18;
  return;
  d = JSON.stringify({traceEvents: a, displayTimeUnit: "ms"});
  p = JSON.stringify({event_id: o, timestamp: (i / 1000), platform: "javascript", level: "error", logger: "dil.sandbox", message: "DIL sandbox worker timed out", fingerprint: ["dil-sandbox-timeout", t.platform], tags: {source: "dil_sandbox_trace", client_platform: t.platform}});
  m = [JSON.stringify({event_id: o, dsn: t.dsn}), JSON.stringify({type: "event", length: r.encode(p).byteLength}), p, JSON.stringify({type: "attachment", length: r.encode(d).byteLength, filename: "dil-sandbox-timeout.perfetto.json", content_type: "application/json", attachment_type: "event.attachment"}), d, ""].join("
");
  if (!((r.encode(m).byteLength <= n))) goto L_324;
  return m;
  return undefined;
}

// fn s  args=1 vars=5 closure=4 cpool=0 bc=468B file=dil_widgets/src/DILSandboxTraceEnvelope
// args: e
// locals: t, r, n, e#1
// closure: n, m, o, p
function {
  let r;
  let t;
  if (!((e.length > n))) goto L_f;
  return;
  t = JSON.parse(e);
  if ((!m(t))) goto L_92;
  if (!(!Array.isArray(t.traceEvents))) goto L_95;
  return;
  if (!((t.traceEvents.length > o))) goto L_c1;
  return;
  r = [{ph: "M", pid: 1, tid: 0, name: "process_name", args: {name: "DIL"}}, {ph: "M", pid: 1, tid: 1, name: "thread_name", args: {name: "DIL main thread"}}, {ph: "M", pid: 1, tid: 2, name: "thread_name", args: {name: "DILSandbox worker thread"}}];
  let n;
  for (const n of t.traceEvents) {
    let e#1;
    e#1 = p(n);
    if (!((undefined !== e#1))) goto L_1bf;
    r.push(e#1);
  }
  if (!((3 !== r.length))) goto L_1d2;
  return r;
  return undefined;
}

// fn p  args=1 vars=12 closure=2 cpool=0 bc=753B file=dil_widgets/src/DILSandboxTraceEnvelope
// args: e
// locals: t, n, o, r, a, d, s, p, c, l, u
// closure: m, i
function {
  let u;
  let l;
  let c;
  let p;
  let s;
  let d;
  let a;
  let r;
  let o;
  let n;
  let t;
  if (!(!m(e))) goto L_28;
  return;
  if (((undefined === undefined))) goto L_108;
  t = <to_object>(undefined).ph;
  n = <to_object>(undefined).pid;
  o = <to_object>(undefined).tid;
  r = <to_object>(undefined).ts;
  a = <to_object>(undefined).name;
  d = <to_object>(undefined).args;
  <to_object>(undefined);
  goto L_10d;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_30;
  // [栈深重同步 1 -> 0]
  if (!((1 === n))) goto L_124;
  if (((1 === o))) goto L_124;
  s = (2 === o);
  if (!(("number" == typeof r))) goto L_169;
  if (!(Number.isFinite(r))) goto L_169;
  p = (r >= 0);
  if ((!s)) goto L_19f;
  if ((!p)) goto L_19f;
  if ((("B" === t))) goto L_19e;
  if ((("E" === t))) goto L_19e;
  if (!(!("i" === t))) goto L_1a2;
  return;
  if (!(("string" == typeof a))) goto L_1df;
  if (!(i.has(a))) goto L_1df;
  goto L_1e4;
  // [栈深重同步 1 -> 0]
  c = "Other operation";
  if (!(m(d))) goto L_213;
  goto L_214;
  // [栈深重同步 1 -> 0]
  l = undefined;
  if (!(c.startsWith("DILSandbox."))) goto L_289;
  if (!(("number" == typeof l))) goto L_289;
  if (!(Number.isSafeInteger(l))) goto L_289;
  u = (l >= 0);
  if (!(("E" === t))) goto L_2ba;
  goto L_2bd;
  // [栈深重同步 2 -> 1]
  if (!(("i" === t))) goto L_2d4;
  goto L_2d5;
  // [栈深重同步 2 -> 1]
  if (!(u)) goto L_2ea;
  goto L_2eb;
  // [栈深重同步 2 -> 1]
  return {ph: t, pid: n, tid: o, ts: r, name: c, s: undefined, args: undefined};
}

// fn m  args=1 vars=1 closure=0 cpool=0 bc=63B file=dil_widgets/src/DILSandboxTraceEnvelope
// args: e
function {
  if (!(("object" == typeof e))) goto L_3e;
  if (!((null !== e))) goto L_3e;
  return !Array.isArray(e);
}

// fn <atom:0>  args=3 vars=15 closure=0 cpool=4 bc=511B file=dil_widgets/src/DILSandboxTraceEnvelope
// args: require, module, exports
// locals: e, t, n, o, r, i, a, c, d, s, p, m
function {
  d = function d;
  s = function s;
  p = function p;
  m = function m;
  let a;
  let i;
  let r;
  let o;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.makeDILSandboxTraceEnvelope = undefined;
  e = require("coreutils/src/unicode/TextCoding");
  t = require("dil_sandbox/src/DILSandboxTrace");
  n = 1048576;
  o = 4099;
  r = new e.TextEncoder();
  i = new Set(["DILCompiler.compile", "DILCompiler.incrementalCompile", "DILCompiler.parse", "DILCompiler.validateV1Json", "DILCompiler.compileTree", "DILCompiler.evaluateRenderer", "DILRenderer.compileJS", "DILRenderer.evaluateJS", "DILRenderer.loadComponent", "DILRenderer.render", "DILRootComponent.onEvent", "DILRootComponent.copyContent", "DILRootComponent.applyJsonPatch", "DILEntryPointComponent.onCreate", "DILEntryPointComponent.onViewModelUpdate", "DILEntryPointComponent.onDestroy", "DILEntryPointComponent.createDILContext", "DILEntryPointComponent.reportError", "WidgetsRegistry.createDIL_WIDGETS_MAP", "ElementsRegistry.createDIL_ELEMENTS_MAP", "DILSandbox.WorkerSendAcknowledgement", "DILSandbox.HostReceiveAcknowledgement"]);
  a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let c;
  for (const c of a) {
    i.add(t.dilSandboxOperationTraceTag(c));
    i.add(t.dilSandboxHostSendRequestTraceTag(c));
  }
  exports.makeDILSandboxTraceEnvelope = d;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILSandboxTraceEnvelope
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
