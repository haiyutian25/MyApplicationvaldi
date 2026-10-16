// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=valdi_core/src/debugging/PerformanceTraceMessageHandler
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.getRendererForContextId = e;
  return;
}

// fn <atom:0>  args=1 vars=5 closure=1 cpool=0 bc=715B file=valdi_core/src/debugging/PerformanceTraceMessageHandler
// args: r
// locals: t, i, n, this
// closure: e
function {
  this = this;
  let i;
  let t;
  if (!((undefined !== this.recordingId))) goto L_3d;
  throw new Error("A Valdi performance trace recording is already active.");
  t = this.getRendererForContextId(r.contextId);
  if (!(!t)) goto L_ef;
  if (!((r.contextId == null))) goto L_e3;
  r.contextId;
  throw new Error("No Valdi renderer found for context ".concat("<undefined>", "."));
  this.rendererTracingWasEnabled = t.isTracingEnabled();
  i = (false !== r.rendererTracing);
  try { // catch -> L_21c
  t.setTracingEnabled(i);
  this.recordingId = e.startTraceRecording();
  this.recordingStartedAtMs = performance.now();
  this.recordingStartedAtEpochMs = Date.now();
  this.activeRenderer = t;
  <?>;
  goto L_2a6;
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_2a5
  t.setTracingEnabled(this.rendererTracingWasEnabled);
  this.rendererTracingWasEnabled = undefined;
  this.recordingId = undefined;
  this.recordingStartedAtMs = undefined;
  this.recordingStartedAtEpochMs = undefined;
  this.activeRenderer = undefined;
  throw n;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return this.getStatus();   // tail call
}

// fn <atom:0>  args=0 vars=10 closure=1 cpool=0 bc=713B file=valdi_core/src/debugging/PerformanceTraceMessageHandler
// locals: r, t, i, n, d, a, o, t#1, e, this
// closure: e
function {
  this = this;
  let o;
  let a;
  let d;
  let n;
  let i;
  let t;
  let r;
  r = this.recordingId;
  if (!((undefined === r))) goto L_52;
  throw new Error("No Valdi performance trace recording is active.");
  t = this.activeRenderer;
  i = this.recordingStartedAtMs;
  n = this.recordingStartedAtEpochMs;
  if (!((undefined === i))) goto L_c8;
  goto L_f5;
  // [栈深重同步 1 -> 0]
  d = (performance.now() - i);
  a = new Uint8Array();
  o = 0;
  try { // catch -> L_194
  let t#1;
  t#1 = e.stopTraceRecordingWithMetadata(r);
  a = t#1.traceData;
  t#1.traceData;
  o = t#1.traceEventCount;
  t#1.traceEventCount;
  <?>;
  // gosub (finally 块) 410
  undefined;
  goto L_23b;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 410
  throw <?>;
  let e;
  this.recordingId = undefined;
  this.recordingStartedAtMs = undefined;
  this.recordingStartedAtEpochMs = undefined;
  e = this.rendererTracingWasEnabled;
  if (!((undefined !== e))) goto L_221;
  if (!((t == null))) goto L_1fa;
  t;
  goto L_221;
  undefined.setTracingEnabled(e);
  this.rendererTracingWasEnabled = undefined;
  this.activeRenderer = undefined;
  // ret (finally 块) 
  if (!((t == null))) goto L_24e;
  t;
  goto L_272;
  if (!((undefined.isTracingEnabled() == null))) goto L_279;
  undefined.isTracingEnabled();
  return {recording: false, rendererTracingEnabled: false, tracingSupported: e.isTracingSupported(), startedAtEpochMs: n, elapsedMs: d, traceData: a, traceEventCount: o};
}

// fn <atom:0>  args=0 vars=3 closure=1 cpool=0 bc=334B file=valdi_core/src/debugging/PerformanceTraceMessageHandler
// locals: r, t, this
// closure: e
function {
  this = this;
  let t;
  let r;
  r = this.recordingStartedAtMs;
  t = (undefined !== this.recordingId);
  if (!((this.activeRenderer == null))) goto L_83;
  this.activeRenderer;
  goto L_a7;
  if (!((undefined.isTracingEnabled() == null))) goto L_ae;
  undefined.isTracingEnabled();
  if (!(t)) goto L_106;
  goto L_107;
  // [栈深重同步 2 -> 1]
  if (!(t)) goto L_147;
  if (!((undefined !== r))) goto L_147;
  goto L_148;
  // [栈深重同步 2 -> 1]
  return {recording: t, rendererTracingEnabled: false, tracingSupported: e.isTracingSupported(), startedAtEpochMs: undefined, elapsedMs: undefined};
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=4 bc=142B file=valdi_core/src/debugging/PerformanceTraceMessageHandler
// args: require, module, exports
// locals: e, PerformanceTraceMessageHandler, <class_fields_init>, PerformanceTraceMessageHandler#1
function {
  let PerformanceTraceMessageHandler#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.PerformanceTraceMessageHandler = undefined;
  e = require("../utils/Trace");
  let PerformanceTraceMessageHandler;
  let <class_fields_init>;
  class PerformanceTraceMessageHandler extends undefined { ... }
  <proto:PerformanceTraceMessageHandler>.startRecording = function <atom:0>;
  <proto:PerformanceTraceMessageHandler>.stopRecording = function <atom:0>;
  <proto:PerformanceTraceMessageHandler>.getStatus = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:PerformanceTraceMessageHandler>;
  PerformanceTraceMessageHandler = function <atom:0>;
  // close_loc <class_fields_init>
  PerformanceTraceMessageHandler#1 = function <atom:0>;
  exports.PerformanceTraceMessageHandler = PerformanceTraceMessageHandler#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/debugging/PerformanceTraceMessageHandler
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
