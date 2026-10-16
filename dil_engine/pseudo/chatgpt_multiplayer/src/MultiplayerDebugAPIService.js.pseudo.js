// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=3B file=chatgpt_multiplayer/src/MultiplayerDebugAPIService
function {
  return true;
}

// fn <atom:0>  args=3 vars=7 closure=1 cpool=1 bc=77B file=chatgpt_multiplayer/src/MultiplayerDebugAPIService
// args: e, t, r
// locals: e#1, t#1, r#1, this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let r#1;
  let t#1;
  let e#1;
  e#1 = e;
  t#1 = t;
  if (!((r === undefined))) goto L_2a;
  r;
  r = function <atom:0>;
  r#1 = function <atom:0>;
  this.service = e;
  this.capture = t;
  this.isEnabled = r;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=17B file=chatgpt_multiplayer/src/MultiplayerDebugAPIService
// closure: c, t
function {
  null;
  t();
  return {requestId: c};
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=1 bc=47B file=chatgpt_multiplayer/src/MultiplayerDebugAPIService
// args: e, t
// closure: c, a
function {
  return a.record("admission", e, function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=241B file=chatgpt_multiplayer/src/MultiplayerDebugAPIService
// closure: s, t
function {
  if (!((undefined === s.bodyJson))) goto L_9d;
  goto L_e4;
  // [栈深重同步 2 -> 1]
  return {method: s.method, path: t.redactMultiplayerDebugUrl(s.path), bodyText: t.redactMultiplayerDebugText(s.bodyJson), headersAvailable: false};
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=87B file=chatgpt_multiplayer/src/MultiplayerDebugAPIService
// locals: e
// closure: n, a
function {
  let e;
  e = n;
  n = undefined;
  undefined;
  try { // catch -> L_21
  if (!((e == null))) goto L_1d;
  e;
  goto L_1e;
  undefined();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_56
  a.markIncomplete("Admission diagnostic references could not be released.");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=321B file=chatgpt_multiplayer/src/MultiplayerDebugAPIService
// closure: e, t
function {
  if (!((undefined === e.bodyText))) goto L_51;
  goto L_98;
  // [栈深重同步 2 -> 1]
  if (!((undefined === e.bodyBytes))) goto L_c6;
  goto L_10d;
  // [栈深重同步 2 -> 1]
  return {status: e.statusCode, bodyText: t.redactMultiplayerDebugText(e.bodyText), bodyBytes: t.redactMultiplayerDebugBytes(e.bodyBytes), contentType: e.contentType, headersAvailable: false};
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=1 bc=78B file=chatgpt_multiplayer/src/MultiplayerDebugAPIService
// args: e
// closure: t, l, i, d
function {
  try { // catch -> L_41
  l("response", function <atom:0>);
  i.onResponse(e);
  <?>;
  // gosub (finally 块) 71
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 71
  throw <?>;
  d();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=41B file=chatgpt_multiplayer/src/MultiplayerDebugAPIService
// closure: e
function {
  return {kind: e.kind};
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=1 bc=78B file=chatgpt_multiplayer/src/MultiplayerDebugAPIService
// args: e
// closure: l, i, d
function {
  try { // catch -> L_41
  l("failure", function <atom:0>);
  i.onFailure(e);
  <?>;
  // gosub (finally 块) 71
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 71
  throw <?>;
  d();
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=2 bc=100B file=chatgpt_multiplayer/src/MultiplayerDebugAPIService
// closure: t, l, i, d, this, s
function {
  return this.service.send(s, {onResponse: function <atom:0>, onFailure: function <atom:0>});   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=94B file=chatgpt_multiplayer/src/MultiplayerDebugAPIService
// closure: y, t
function {
  if (!((y instanceof Error))) goto L_53;
  goto L_58;
  // [栈深重同步 2 -> 1]
  return {message: "Host API threw"};
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=2B file=chatgpt_multiplayer/src/MultiplayerDebugAPIService
function {
  return {};
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=94B file=chatgpt_multiplayer/src/MultiplayerDebugAPIService
// closure: y, t
function {
  if (!((y instanceof Error))) goto L_53;
  goto L_58;
  // [栈深重同步 2 -> 1]
  return {message: "Host cancellation threw"};
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=2 bc=80B file=chatgpt_multiplayer/src/MultiplayerDebugAPIService
// locals: y
// closure: t, l, u
function {
  l("cancel", function <atom:0>);
  try { // catch -> L_3b
  u.cancel();
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  y = <?>;
  try { // catch -> L_4f
  l("cancel.throw", function <atom:0>);
  throw y;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=2 vars=11 closure=3 cpool=8 bc=657B file=chatgpt_multiplayer/src/MultiplayerDebugAPIService
// args: s, i
// locals: o, a, c, l, n, d, u, y, this
// closure: t, r, e
function {
  this = this;
  let u;
  let d;
  let n;
  let l;
  let c;
  let a;
  let o;
  if (!(!this.isEnabled())) goto L_8a;
  return this.service.send(s, i);   // tail call
  if (!((new RegExp("^\\/backend-api\\/multiplayer\\/documents\\/([A-Za-z0-9_-]+)\\/admission(?:\\?|$)").exec(s.path) == null))) goto L_dd;
  new RegExp("^\\/backend-api\\/multiplayer\\/documents\\/([A-Za-z0-9_-]+)\\/admission(?:\\?|$)").exec(s.path);
  goto L_df;
  o = undefined[1];
  a = this.capture;
  if (((o !== a.getState().documentId))) goto L_19c;
  if (!(a.getState().closed)) goto L_1e7;
  return this.service.send(s, i);   // tail call
  r = (r ++);
  c = (r ++);
  l = function <atom:0>;
  l("request", function <atom:0>);
  n = e.protectNativeRefsForCurrentContextId();
  d = function <atom:0>;
  u = undefined;
  try { // catch -> L_26b
  u = e.withGlobalNativeRefs(function <atom:0>);
  e.withGlobalNativeRefs(function <atom:0>);
  <?>;
  goto L_287;
  // [栈深重同步 0 -> 1]
  y = <?>;
  try { // catch -> L_286
  d();
  l("throw", function <atom:0>);
  throw y;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return {cancel: function <atom:0>};
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=2 bc=144B file=chatgpt_multiplayer/src/MultiplayerDebugAPIService
// args: require, module, exports
// locals: e, t, r, MultiplayerDebugAPIService, <class_fields_init>, MultiplayerDebugAPIService#1
function {
  let MultiplayerDebugAPIService#1;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MultiplayerDebugAPIService = undefined;
  e = require("valdi_core/src/NativeReferences");
  t = require("./BrowserMultiplayerDiagnostics");
  r = 0;
  let MultiplayerDebugAPIService;
  let <class_fields_init>;
  class MultiplayerDebugAPIService extends undefined { ... }
  <proto:MultiplayerDebugAPIService>.send = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MultiplayerDebugAPIService>;
  MultiplayerDebugAPIService = function <atom:0>;
  // close_loc <class_fields_init>
  MultiplayerDebugAPIService#1 = function <atom:0>;
  exports.MultiplayerDebugAPIService = MultiplayerDebugAPIService#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_multiplayer/src/MultiplayerDebugAPIService
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
