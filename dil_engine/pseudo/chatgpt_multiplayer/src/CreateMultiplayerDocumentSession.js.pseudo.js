// fn y  args=1 vars=2 closure=4 cpool=0 bc=439B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// args: e
// locals: n
// closure: o, g, c, C
function {
  if (!(o.isVersionAtLeast(75))) goto L_1b6;
  let n;
  n = g(e.platformServices, e.debug);
  if (!((undefined === n))) goto L_7e;
  return;
  if (!((undefined === e.onStateChange))) goto L_12f;
  goto L_157;
  // [栈深重同步 4 -> 3]
  null;
  {onStateChange: e.onStateChange};
  if (!((undefined === e.onParticipantsChange))) goto L_185;
  goto L_1ad;
  // [栈深重同步 4 -> 3]
  null;
  {onParticipantsChange: e.onParticipantsChange};
  return new c.MultiplayerDocumentSession({documentId: e.documentId, engine: e.engine, codec: undefined, resolveCodec: C, connectionService: n});
  return;
}

// fn C  args=0 vars=0 closure=1 cpool=0 bc=41B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// closure: require
function {
  return require("collaborative_editor/runtime_bundle/NativeEngine").documentUpdateCodec;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=45B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// closure: AccountScopedMultiplayerConnectionService, t, e
function {
  return new AccountScopedMultiplayerConnectionService(t, e.experimentService);
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=1 bc=41B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// closure: AccountScopedMultiplayerConnectionService, t, e, r
function {
  return r.withGlobalNativeRefs(function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=42B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// args: e, n
// closure: c, i
function {
  return c.connect(e, n, i);   // tail call
}

// fn g  args=2 vars=4 closure=5 cpool=2 bc=235B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// args: e, i
// locals: t, c
// closure: AccountScopedMultiplayerConnectionService, r, o, n, h
function {
  let c;
  let t;
  if (!(!o.isVersionAtLeast(75))) goto L_31;
  return;
  t = e.apiService;
  if (((undefined === t))) goto L_81;
  if (!((undefined === e.accountScope))) goto L_84;
  return;
  c = n.accountContainerFor(e).resolve(h, function <atom:0>);
  if (!((undefined === i))) goto L_dd;
  return c;
  return {connect: function <atom:0>};
}

// fn I  args=1 vars=3 closure=3 cpool=0 bc=1739B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// args: e
// locals: n, t
// closure: i, p, v
function {
  let t;
  let n;
  n = e.statusCode;
  if (((e.kind === i.OAINetworkResultKind.NetworkError))) goto L_279;
  if (((e.kind === i.OAINetworkResultKind.Timeout))) goto L_279;
  if (((e.kind === i.OAINetworkResultKind.Cancelled))) goto L_279;
  if (((e.kind === i.OAINetworkResultKind.UnknownError))) goto L_279;
  if (!((e.kind === i.OAINetworkResultKind.ServiceError))) goto L_36f;
  if (!((undefined !== n))) goto L_36f;
  if (((408 === n))) goto L_279;
  if (((429 === n))) goto L_279;
  if (!((n >= 500))) goto L_36f;
  return {kind: p.MultiplayerFailureKind.CONNECTION, connectionReason: v.OAIMultiplayerConnectionFailureReason.RETRYABLE, message: "The document creation request did not complete. It can be retried.", retryable: true, reason: p.MultiplayerFailureReason.NETWORK};
  if (!((e.kind === i.OAINetworkResultKind.SerializationError))) goto L_4cd;
  return {kind: p.MultiplayerFailureKind.PROTOCOL, connectionReason: v.OAIMultiplayerConnectionFailureReason.INVALID_RESPONSE, message: "The server returned an invalid document creation response.", retryable: false, reason: p.MultiplayerFailureReason.INVALID_RESPONSE};
  t = (e.kind === i.OAINetworkResultKind.ServiceError);
  if (!(t)) goto L_5cd;
  goto L_612;
  // [栈深重同步 2 -> 1]
  if (!(t)) goto L_623;
  goto L_628;
  // [栈深重同步 2 -> 1]
  if (!(t)) goto L_680;
  goto L_6c5;
  // [栈深重同步 2 -> 1]
  return {kind: p.MultiplayerFailureKind.CONNECTION, connectionReason: v.OAIMultiplayerConnectionFailureReason.HOST_REJECTED, message: "Creating documents is unavailable in this app.", retryable: false, reason: p.MultiplayerFailureReason.HOST_REJECTED};
}

// fn <atom:0>  args=2 vars=3 closure=4 cpool=0 bc=231B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// args: e, n
// locals: this
// closure: <class_fields_init>, o, a, s
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.apiService = e;
  this.experimentService = n;
  this.connections = new Set();
  this.debugLifetime = {active: true};
  this.disposed = false;
  if (!(o.isVersionAtLeast(144))) goto L_b5;
  this.sharedService = new a.MultiplayerConnectionService();
  goto L_e6;
  // [栈深重同步 1 -> 0]
  this.nativeService = s.createNativeMultiplayerConnectionService(e);
  s.createNativeMultiplayerConnectionService(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=49B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// closure: s, n
function {
  return {connectionId: s, documentId: n.documentId};
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=63B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// locals: e
// closure: l, u
function {
  try { // catch -> L_23
  let e;
  for (const e of l) {
    e();
  }
  <?>;
  // gosub (finally 块) 41
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 41
  throw <?>;
  l.length = 0;
  u = false;
  false;
  // ret (finally 块) 
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=88B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// args: n
// closure: e
function {
  if (!(e.isLoggingEnabled)) goto L_57;
  console.warn("Failed to deliver an account-owned multiplayer connection callback", n);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=2 bc=197B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// args: n
// closure: l, u, e, a
function {
  if (((undefined === a))) goto L_c;
  if (!(u)) goto L_c2;
  l.push(n);
  if ((u)) goto L_c4;
  u = true;
  true;
  goto L_c4;
  // [栈深重同步 1 -> 0]
  n();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=10B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// closure: s
function {
  return {connectionId: s};
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=89B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// closure: a, i
function {
  if (!((a == null))) goto L_d;
  a;
  goto L_2e;
  if (!((true === undefined.isActive))) goto L_58;
  i.onOpen();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=2 bc=67B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// closure: s, a, i, c, p
function {
  if (!((c == null))) goto L_b;
  c;
  goto L_3b;
  undefined.record("connection", "open", function <atom:0>);
  p(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=53B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// closure: s, d, e
function {
  return {connectionId: s, rawFrame: d.redactMultiplayerDebugText(e)};
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=90B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// closure: a, i, e
function {
  if (!((a == null))) goto L_d;
  a;
  goto L_2e;
  if (!((true === undefined.isActive))) goto L_59;
  i.onMessage(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=6 cpool=2 bc=67B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// args: e
// closure: s, d, a, i, c, p
function {
  if (!((c == null))) goto L_b;
  c;
  goto L_3b;
  undefined.record("socket", "receive", function <atom:0>);
  p(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=125B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// closure: s, e, d
function {
  return {connectionId: s, code: e.code, reason: d.redactMultiplayerDebugText(e.reason)};
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=93B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// closure: a, i, e
function {
  if (!((a == null))) goto L_d;
  a;
  goto L_31;
  if (!((true === undefined.finish()))) goto L_5c;
  i.onClose(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=6 cpool=2 bc=67B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// args: e
// closure: s, d, a, i, c, p
function {
  if (!((c == null))) goto L_b;
  c;
  goto L_3b;
  undefined.record("connection", "close", function <atom:0>);
  p(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=214B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// closure: s, e, d, o
function {
  if (!(o.isVersionAtLeast(87))) goto L_cf;
  goto L_d0;
  // [栈深重同步 2 -> 1]
  null;
  {};
  return {connectionId: s, kind: e.kind, message: d.redactMultiplayerDebugText(e.message)};
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=93B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// closure: a, i, e
function {
  if (!((a == null))) goto L_d;
  a;
  goto L_31;
  if (!((true === undefined.finish()))) goto L_5c;
  i.onFailure(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=7 cpool=2 bc=67B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// args: e
// closure: s, d, o, a, i, c, p
function {
  if (!((c == null))) goto L_b;
  c;
  goto L_3b;
  undefined.record("connection", "failure", function <atom:0>);
  p(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=71B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// args: e
// closure: this
function {
  return this.connections.delete(e);   // tail call
}

// fn <atom:0>  args=3 vars=11 closure=7 cpool=7 bc=706B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// args: n, i, r
// locals: c, s, a, l, u, p, v, this
// closure: e, d, o, t, S, m, AccountScopedMultiplayerConnection
function {
  this = this;
  let v;
  let p;
  let u;
  let l;
  let a;
  let s;
  let c;
  if (!(this.disposed)) goto L_4c;
  throw new Error("Cannot connect multiplayer for an inactive account scope");
  if (!((undefined !== r))) goto L_ea;
  if (!(!r.getState().closed)) goto L_ea;
  if (!(t.isNativeEditorDebugEnabled(this.experimentService))) goto L_ea;
  goto L_eb;
  // [栈深重同步 1 -> 0]
  c = undefined;
  if (!((c == null))) goto L_f7;
  c;
  goto L_13d;
  undefined.setDocumentId(n.documentId);
  if (!((undefined === c))) goto L_148;
  goto L_150;
  // [栈深重同步 1 -> 0]
  S = (S ++);
  s = (S ++);
  a = undefined;
  if (!((c == null))) goto L_15e;
  c;
  goto L_18e;
  undefined.record("connection", "connect", function <atom:0>);
  l = [];
  u = false;
  p = function <atom:0>;
  v = this.connectTransport(n, {onOpen: function <atom:0>, onMessage: function <atom:0>, onClose: function <atom:0>, onFailure: function <atom:0>}, c);
  if (!(this.disposed)) goto L_25c;
  v.close(m);
  throw new Error("Cannot connect multiplayer for an inactive account scope");
  a = new AccountScopedMultiplayerConnection(v, function <atom:0>, c, s);
  new AccountScopedMultiplayerConnection(v, function <atom:0>, c, s);
  this.connections.add(a);
  return a;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// args: e
// closure: t
function {
  return t.fetch(e);   // tail call
}

// fn <atom:0>  args=3 vars=3 closure=1 cpool=0 bc=48B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// args: e, n, i
// closure: s
function {
  // append([], 0, n)
  n;
  return s.openNativeMultiplayerSocket(e, [], i);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=81B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// closure: d, t, p
function {
  if (!(d.active)) goto L_50;
  return t.isNativeEditorDebugEnabled(p);
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=1 bc=120B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// closure: d, t, p, s, u, this, i
function {
  return s.createNativeMultiplayerConnectionService(new u.MultiplayerDebugAPIService(this.apiService, i, function <atom:0>));   // tail call
}

// fn <atom:0>  args=3 vars=9 closure=6 cpool=3 bc=517B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// args: e, n, i
// locals: c, t, a, d, p, this
// closure: s, t, u, o, l, r
function {
  this = this;
  let p;
  let d;
  let a;
  let c;
  c = this.sharedService;
  if (!(o.isVersionAtLeast(144))) goto L_107;
  if (!((null != c))) goto L_107;
  let t;
  t = new l.NativeMultiplayerAdmission(this.apiService);
  return c.connect(e, n, {production: undefined, debug: i, requestAdmission: function <atom:0>, openSocket: function <atom:0>});   // tail call
  a = this.nativeService;
  if (!((null == a))) goto L_141;
  throw new Error("Multiplayer transport is unavailable");
  if (!((null == i))) goto L_16f;
  return a.connect(e, n);   // tail call
  d = this.debugLifetime;
  p = this.experimentService;
  return r.withGlobalNativeRefs(function <atom:0>).connect(e, n);   // tail call
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=412B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// locals: i, n, this
// closure: m, e
function {
  this = this;
  if (!(!this.disposed)) goto L_19b;
  this.disposed = true;
  this.debugLifetime.active = false;
  let i;
  for (const i of Array.from(this.connections)) {
    try { // catch -> L_e9
    i.close(m);
    <catch>;
   continue;
    // [栈深重同步 2 -> 4]
    n = <?>;
    try { // catch -> L_14a
    if (!(e.isLoggingEnabled)) goto L_146;
    console.warn("Failed to close an account-owned multiplayer connection", n);
    <?>;
   continue;
    // [栈深重同步 2 -> 4]
    throw <?>;
    // [栈深重同步 3 -> 2]
  }
  this.connections.clear();
  return;
}

// fn <atom:0>  args=4 vars=5 closure=1 cpool=0 bc=72B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// args: e, n, i, t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.nativeConnection = e;
  this.onFinished = n;
  this.debug = i;
  this.connectionId = t;
  this.active = true;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// locals: this
function {
  this = this;
  return this.active;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=84B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// closure: this, d, e
function {
  return {connectionId: this.connectionId, rawFrame: d.redactMultiplayerDebugText(e)};
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=206B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// args: e
// locals: this
// closure: d
function {
  this = this;
  if (!(this.active)) goto L_cd;
  if (!((this.debug == null))) goto L_55;
  this.debug;
  goto L_85;
  undefined.record("socket", "send", function <atom:0>);
  this.nativeConnection.send(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=156B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// closure: this, e, d
function {
  return {connectionId: this.connectionId, code: e.code, reason: d.redactMultiplayerDebugText(e.reason)};
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=209B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// args: e
// locals: this
// closure: d
function {
  this = this;
  if (!(this.finish())) goto L_d0;
  if (!((this.debug == null))) goto L_58;
  this.debug;
  goto L_88;
  undefined.record("connection", "close.request", function <atom:0>);
  this.nativeConnection.close(e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=96B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// locals: this
function {
  this = this;
  if (!(!!this.active)) goto L_5f;
  this.active = false;
  this.onFinished(this);
  return true;
}

// fn <atom:0>  args=3 vars=30 closure=0 cpool=13 bc=515B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// args: require, module, exports
// locals: e, n, i, t, o, r, c, s, a, l, u, d, p, v, h, S, m, y, C, g, I, AccountScopedMultiplayerConnectionService, <class_fields_init>, AccountScopedMultiplayerConnectionService#1, AccountScopedMultiplayerConnection, <class_fields_init>#1, AccountScopedMultiplayerConnection#1
function {
  y = function y;
  C = function C;
  g = function g;
  I = function I;
  let AccountScopedMultiplayerConnection#1;
  let AccountScopedMultiplayerConnectionService#1;
  let m;
  let S;
  let h;
  let v;
  let p;
  let d;
  let u;
  let l;
  let a;
  let s;
  let c;
  let r;
  let o;
  let t;
  let i;
  let n;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createMultiplayerDocumentSession = undefined;
  exports.nativeDocumentUpdateCodec = undefined;
  exports.multiplayerConnectionServiceFor = undefined;
  exports.documentCreationFailure = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  n = require("oai_platform_services/src/AccountContainer");
  i = require("oai_platform_services/src/OAINetworkClient");
  t = require("collaborative_editor/src/NativeEditorDebugCapture");
  o = require("valdi_core/src/CompilerIntrinsics");
  r = require("valdi_core/src/NativeReferences");
  c = require("./MultiplayerDocumentSession");
  s = require("./NativeMultiplayerConnectionService");
  a = require("./MultiplayerConnectionService");
  l = require("./NativeMultiplayerAdmission");
  u = require("./MultiplayerDebugAPIService");
  d = require("./BrowserMultiplayerDiagnostics");
  p = require("./MultiplayerSessionTypes");
  v = require("./OAIMultiplayerConnectionService");
  h = {};
  S = 0;
  m = {code: 1000, reason: "multiplayer account scope ended"};
  exports.createMultiplayerDocumentSession = y;
  exports.nativeDocumentUpdateCodec = C;
  exports.multiplayerConnectionServiceFor = g;
  exports.documentCreationFailure = I;
  let AccountScopedMultiplayerConnectionService;
  let <class_fields_init>;
  class AccountScopedMultiplayerConnectionService extends undefined { ... }
  <proto:AccountScopedMultiplayerConnectionService>.connect = function <atom:0>;
  <proto:AccountScopedMultiplayerConnectionService>.connectTransport = function <atom:0>;
  <proto:AccountScopedMultiplayerConnectionService>.dispose = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AccountScopedMultiplayerConnectionService>;
  AccountScopedMultiplayerConnectionService = function <atom:0>;
  // close_loc <class_fields_init>
  AccountScopedMultiplayerConnectionService#1 = function <atom:0>;
  let AccountScopedMultiplayerConnection;
  let <class_fields_init>#1;
  class AccountScopedMultiplayerConnection extends undefined { ... }
  <proto:AccountScopedMultiplayerConnection>.isActive = function <atom:0>;
  <proto:AccountScopedMultiplayerConnection>.send = function <atom:0>;
  <proto:AccountScopedMultiplayerConnection>.close = function <atom:0>;
  <proto:AccountScopedMultiplayerConnection>.finish = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:AccountScopedMultiplayerConnection>;
  AccountScopedMultiplayerConnection = function <atom:0>;
  // close_loc <class_fields_init>#1
  AccountScopedMultiplayerConnection#1 = function <atom:0>;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_multiplayer/src/CreateMultiplayerDocumentSession
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
