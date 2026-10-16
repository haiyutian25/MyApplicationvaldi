// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=89B file=dil_widgets/src/DILViewStateSynchronizer
// closure: n, t, a
function {
  if (!((n.get(t) === a))) goto L_58;
  n.delete(t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=89B file=dil_widgets/src/DILViewStateSynchronizer
// closure: n, t, a
function {
  if (!((n.get(t) === a))) goto L_58;
  n.delete(t);
  return;
}

// fn h  args=2 vars=5 closure=1 cpool=2 bc=194B file=dil_widgets/src/DILViewStateSynchronizer
// args: t, e
// locals: i, s, a
// closure: n
function {
  let a;
  let s;
  let i;
  i = n.get(t);
  if (!((undefined === i))) goto L_3d;
  goto L_65;
  // [栈深重同步 1 -> 0]
  s = i.then(e);
  a = s.then(function <atom:0>, function <atom:0>);
  n.set(t, a);
  return s;
}

// fn <atom:0>  args=4 vars=5 closure=3 cpool=0 bc=223B file=dil_widgets/src/DILViewStateSynchronizer
// args: t, i, s, a
// locals: this
// closure: <class_fields_init>, r, e
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.conversationId = i;
  this.messageId = s;
  this.widgetId = a;
  this.clientSessionId = r;
  this.recentLocalRootStates = [];
  this.activeStateInvalidated = false;
  this.failedPersistenceAttempts = 0;
  this.isDisposed = false;
  this.synchronizationEnabled = true;
  this.hasPermanentPersistenceFailure = false;
  this.localUpdateIds = new Set();
  this.invalidatedUpdateIds = new Set();
  this.networkClient = new e.OAINetworkClient(t);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=4 cpool=0 bc=966B file=dil_widgets/src/DILViewStateSynchronizer
// args: t
// locals: e, this
// closure: v, d, I, i
function {
  this = this;
  let e;
  if ((this.isDisposed)) goto L_4e;
  if (!(!this.synchronizationEnabled)) goto L_51;
  return;
  e = v(t);
  if (!((undefined !== e))) goto L_3c5;
  if (!((this.pendingRootState == null))) goto L_8c;
  this.pendingRootState;
  goto L_ad;
  if (((t === undefined.serializedState))) goto L_3c5;
  if (!((undefined === this.pendingRootState))) goto L_151;
  if (!(!this.activeStateInvalidated)) goto L_151;
  if (!((this.activeRootState == null))) goto L_12f;
  this.activeRootState;
  goto L_150;
  if (((t === undefined.serializedState))) goto L_3c5;
  if (!((undefined === this.pendingRootState))) goto L_1cc;
  if (!((undefined === this.activeRootState))) goto L_1cc;
  if (((t === this.lastPersistedState))) goto L_3c5;
  this.recentLocalRootStates.push(e);
  if (!((this.recentLocalRootStates.length > d))) goto L_28e;
  this.recentLocalRootStates.shift();
  this.failedPersistenceAttempts = 0;
  this.pendingRootState = {clientUpdateId: I("update"), serializedState: t, state: e};
  this.latestLocalUpdateId = this.pendingRootState.clientUpdateId;
  this.rememberUpdateId(this.pendingRootState.clientUpdateId);
  if (!((undefined === this.flushOperation))) goto L_3c5;
  this.scheduleFlush(i);
  return;
}

// fn <atom:0>  args=2 vars=8 closure=0 cpool=0 bc=1823B file=dil_widgets/src/DILViewStateSynchronizer
// args: t, e
// locals: i, s, a, o, t#1, this
function {
  this = this;
  if (!((undefined !== e))) goto L_651;
  let o;
  let a;
  let s;
  let i;
  if (!((undefined !== this.widgetId))) goto L_64;
  i = (undefined !== e.widget_saves);
  if (!((undefined === this.widgetId))) goto L_8f;
  goto L_dd;
  // [栈深重同步 1 -> 0]
  if (!((e.widget_saves == null))) goto L_b9;
  e.widget_saves;
  goto L_dd;
  s = undefined[this.widgetId];
  if (!(i)) goto L_113;
  if (!((s == null))) goto L_ef;
  s;
  goto L_1ac;
  goto L_1ac;
  // [栈深重同步 1 -> 0]
  if (!((undefined === this.widgetId))) goto L_15e;
  goto L_1ac;
  // [栈深重同步 1 -> 0]
  if (!((e.widgets == null))) goto L_188;
  e.widgets;
  goto L_1ac;
  a = undefined[this.widgetId];
  if (!(i)) goto L_1e0;
  if (!((s == null))) goto L_1bd;
  s;
  goto L_202;
  goto L_202;
  // [栈深重同步 1 -> 0]
  if (!((e.client_session_id === this.clientSessionId))) goto L_344;
  if (!((undefined !== a))) goto L_344;
  if (!(this.localUpdateIds.has(a))) goto L_344;
  if (!(!this.invalidatedUpdateIds.has(a))) goto L_343;
  if (((undefined === this.latestLocalUpdateId))) goto L_323;
  if (!((a === this.latestLocalUpdateId))) goto L_343;
  this.lastServerState = t;
  this.lastWidgetSave = s;
  return true;
  if (!(!i)) goto L_3c3;
  if (!((e.client_session_id === this.clientSessionId))) goto L_3c3;
  if (!((undefined === a))) goto L_3c3;
  if (!((undefined !== this.latestLocalUpdateId))) goto L_3c3;
  return false;
  if (!(i)) goto L_4c3;
  if (!((s == null))) goto L_3d8;
  s;
  goto L_3f9;
  if (!((this.lastWidgetSave == null))) goto L_424;
  this.lastWidgetSave;
  goto L_445;
  if (((undefined.client_session_id !== undefined.client_session_id))) goto L_4c3;
  if (!((s == null))) goto L_455;
  s;
  goto L_476;
  if (!((this.lastWidgetSave == null))) goto L_4a1;
  this.lastWidgetSave;
  goto L_4c2;
  o = (undefined.client_update_id !== undefined.client_update_id);
  if (!((t === this.lastServerState))) goto L_4f4;
  if (!(!o)) goto L_4f4;
  return false;
  this.lastServerState = t;
  this.lastWidgetSave = s;
  let t#1;
  for (const t#1 of this.localUpdateIds) {
    this.invalidatedUpdateIds.add(t#1);
  }
  this.latestLocalUpdateId = undefined;
  this.pendingRootState = undefined;
  this.clearScheduledFlush();
  if (!((undefined !== this.activeRootState))) goto L_647;
  if (!((this.activeRootState.serializedState !== t))) goto L_647;
  if (!((t == null))) goto L_648;
  t;
  goto L_648;
  // [栈深重同步 2 -> 1]
  this.recoveryState = undefined;
  if (((undefined !== e))) goto L_687;
  if (((undefined === t))) goto L_687;
  if (!(!this.isRecentLocalRootState(t))) goto L_71e;
  this.lastPersistedState = undefined;
  if (!((undefined !== this.activeRootState))) goto L_71b;
  if (!((this.activeRootState.serializedState !== t))) goto L_71b;
  this.activeStateInvalidated = true;
  true;
  return true;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=8B file=dil_widgets/src/DILViewStateSynchronizer
// args: t
// closure: u, e
function {
  return u(t, e);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=1 bc=91B file=dil_widgets/src/DILViewStateSynchronizer
// args: t
// locals: e, this
// closure: u, v
function {
  this = this;
  let e;
  e = v(t);
  if (!((undefined !== e))) goto L_5a;
  return this.recentLocalRootStates.some(function <atom:0>);
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=454B file=dil_widgets/src/DILViewStateSynchronizer
// args: t
// locals: t#1, this
// closure: d
function {
  this = this;
  this.localUpdateIds.add(t);
  if (!((this.localUpdateIds.size > d))) goto L_1c5;
  let t#1;
  t#1 = this.localUpdateIds.values().next().value;
  if (!((undefined !== t#1))) goto L_1c4;
  this.localUpdateIds.delete(t#1);
  this.invalidatedUpdateIds.delete(t#1);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=55B file=dil_widgets/src/DILViewStateSynchronizer
// closure: this, t
function {
  if (!((this.flushOperation === t))) goto L_36;
  this.flushOperation = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=1 bc=375B file=dil_widgets/src/DILViewStateSynchronizer
// locals: t, this
function {
  this = this;
  let t;
  this.clearScheduledFlush();
  if (!((undefined !== this.flushOperation))) goto L_74;
  return this.flushOperation;
  if (!((undefined === this.pendingRootState))) goto L_c5;
  return Promise.resolve(true);   // tail call
  if (!((this.failedPersistenceAttempts >= 5))) goto L_116;
  return Promise.resolve(false);   // tail call
  t = this.drainPendingRootState();
  this.flushOperation = t;
  t.then(function <atom:0>);
  return t;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=90B file=dil_widgets/src/DILViewStateSynchronizer
// locals: this
function {
  this = this;
  this.isDisposed = true;
  this.clearScheduledFlush();
  this.flush();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=147B file=dil_widgets/src/DILViewStateSynchronizer
// args: t
// locals: this
function {
  this = this;
  if ((this.hasPermanentPersistenceFailure)) goto L_92;
  if (((this.synchronizationEnabled === t))) goto L_92;
  this.synchronizationEnabled = t;
  if ((t)) goto L_92;
  this.clearScheduledFlush();
  this.pendingRootState = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=0 bc=599B file=dil_widgets/src/DILViewStateSynchronizer
// locals: t
// closure: this, i, p
function {
  let t;
  t = this.pendingRootState;
  if (!((undefined === t))) goto L_58;
  return Promise.resolve(undefined);
  i = t;
  t;
  this.pendingRootState = undefined;
  this.activeRootState = t;
  this.activeStateInvalidated = false;
  if (!((undefined === this.widgetId))) goto L_19c;
  goto L_1a1;
  // [栈深重同步 6 -> 5]
  if (!((undefined === this.widgetId))) goto L_1cf;
  goto L_1f7;
  // [栈深重同步 6 -> 5]
  null;
  {ref_id: this.widgetId};
  return this.networkClient.requestEmpty({method: "POST", path: p(this.conversationId, this.messageId), jsonBody: {client_session_id: this.clientSessionId, updates: [{client_update_id: t.clientUpdateId, scope: "widget", state: t.state}]}}).result;
}

// fn <atom:0>  args=0 vars=5 closure=7 cpool=1 bc=1505B file=dil_widgets/src/DILViewStateSynchronizer
// locals: i, o, t, t#1, this
// closure: p, h, e, l, t, s, a
function {
  this = this;
  if (!((undefined !== this.pendingRootState))) goto L_5de;
  let o;
  let i;
  i = undefined;
  o = (await h(this.conversationId, function <atom:0>));
  if (!((undefined !== i))) goto L_5d8;
  if (!((undefined !== o))) goto L_5d8;
  this.activeRootState = undefined;
  if (!((undefined !== this.recoveryState))) goto L_12e;
  let t;
  t = this.recoveryState;
  this.recoveryState = undefined;
  if (!((undefined === this.pendingRootState))) goto L_12d;
  this.rootStateChanged(t);
  if (!((o.kind !== e.OAINetworkResultKind.Success))) goto L_4f2;
  if (!(l(o))) goto L_2ba;
  this.setSynchronizationEnabled(false);
  this.hasPermanentPersistenceFailure = true;
  if (!(t.isLoggingEnabled)) goto L_2b6;
  if (!((o.statusCode == null))) goto L_2ab;
  o.statusCode;
  console.warn("Stopped persisting DIL view state after a permanent failure (result ".concat(o.kind, ", status ", "none", ")"));
  return false; // async
  if (((undefined !== this.pendingRootState))) goto L_319;
  if ((this.activeStateInvalidated)) goto L_319;
  this.pendingRootState = i;
  i;
  this.failedPersistenceAttempts = (this.failedPersistenceAttempts + 1);
  if (!(!this.isDisposed)) goto L_420;
  if (!((this.failedPersistenceAttempts < 5))) goto L_420;
  let t#1;
  t#1 = Math.min((s * (2 ** (this.failedPersistenceAttempts - 1))), a);
  this.scheduleFlush(t#1);
  if (!(t.isLoggingEnabled)) goto L_4ee;
  console.warn("Failed to persist DIL view state (result ".concat(o.kind, ", attempt ", this.failedPersistenceAttempts, "/5)"));
  return false; // async
  if ((this.activeStateInvalidated)) goto L_549;
  this.lastPersistedState = i.serializedState;
  i.serializedState;
  this.failedPersistenceAttempts = 0;
  if (!((this.pendingRootState == null))) goto L_581;
  this.pendingRootState;
  goto L_5a2;
  if (!((undefined.serializedState === this.lastPersistedState))) goto L_5d7;
  this.pendingRootState = undefined;
  undefined;
  // close_loc i
  goto L_3;
  return true; // async
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=49B file=dil_widgets/src/DILViewStateSynchronizer
// closure: this
function {
  this.debounceTimerId = undefined;
  this.flush();
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=60B file=dil_widgets/src/DILViewStateSynchronizer
// args: t
// locals: this
function {
  this = this;
  this.clearScheduledFlush();
  this.debounceTimerId = setTimeout(function <atom:0>, t);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=96B file=dil_widgets/src/DILViewStateSynchronizer
// locals: this
function {
  this = this;
  if (!((undefined !== this.debounceTimerId))) goto L_5f;
  clearTimeout(this.debounceTimerId);
  this.debounceTimerId = undefined;
  undefined;
  return;
}

// fn l  args=1 vars=1 closure=2 cpool=0 bc=754B file=dil_widgets/src/DILViewStateSynchronizer
// args: t
// closure: e, c
function {
  if (((t.kind === e.OAINetworkResultKind.Unavailable))) goto L_198;
  if (((t.kind === e.OAINetworkResultKind.InvalidRequest))) goto L_198;
  if (((t.kind === e.OAINetworkResultKind.Cancelled))) goto L_198;
  if (((t.kind === e.OAINetworkResultKind.HostRejected))) goto L_198;
  if (!((t.kind === e.OAINetworkResultKind.SerializationError))) goto L_19b;
  return true;
  if (!((t.kind === e.OAINetworkResultKind.ServiceError))) goto L_2ef;
  if (!((undefined !== t.statusCode))) goto L_2ee;
  if (!((t.statusCode >= 400))) goto L_2ee;
  if (!((t.statusCode < 500))) goto L_2ee;
  if (!((408 !== t.statusCode))) goto L_2ee;
  if (!((425 !== t.statusCode))) goto L_2ee;
  if (!((429 !== t.statusCode))) goto L_2ee;
  return !c(t);
  return false;
}

// fn c  args=1 vars=2 closure=0 cpool=0 bc=347B file=dil_widgets/src/DILViewStateSynchronizer
// args: t
// locals: e
function {
  if (((404 !== t.statusCode))) goto L_4e;
  if (!((undefined === t.bodyText))) goto L_53;
  return false;
  try { // catch -> L_150
  let e;
  e = JSON.parse(t.bodyText);
  if (!((e == null))) goto L_b7;
  e;
  goto L_101;
  if (!((undefined.detail == null))) goto L_e0;
  undefined.detail;
  goto L_101;
  if (!(("dil_view_state_message_not_found" === undefined.code))) goto L_14e;
  return (true === e.detail.retryable);
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_15a
  return false;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=8B file=dil_widgets/src/DILViewStateSynchronizer
// args: t, i
// closure: u, e
function {
  return u(t, e[i]);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=128B file=dil_widgets/src/DILViewStateSynchronizer
// args: t
// closure: s, u, i
function {
  if (!(Object.prototype.hasOwnProperty.call(s, t))) goto L_7f;
  return u(i[t], s[t]);
}

// fn u  args=2 vars=5 closure=1 cpool=2 bc=435B file=dil_widgets/src/DILViewStateSynchronizer
// args: t, e
// locals: i, s, a
// closure: u
function {
  let a;
  let s;
  let i;
  if (!((t === e))) goto L_11;
  return true;
  if (((null === t))) goto L_33;
  if (((null === e))) goto L_33;
  if ((("object" != typeof t))) goto L_33;
  if (!(("object" != typeof e))) goto L_38;
  return false;
  if ((Array.isArray(t))) goto L_90;
  if (!(Array.isArray(e))) goto L_122;
  if (!(Array.isArray(t))) goto L_121;
  if (!(Array.isArray(e))) goto L_121;
  if (!((t.length === e.length))) goto L_121;
  return t.every(function <atom:0>);
  i = t;
  s = e;
  a = Object.keys(i);
  if (!((a.length === Object.keys(s).length))) goto L_1b2;
  return a.every(function <atom:0>);
}

// fn v  args=1 vars=3 closure=0 cpool=0 bc=138B file=dil_widgets/src/DILViewStateSynchronizer
// args: t
// locals: e, e#1
function {
  try { // catch -> L_80
  let e;
  e = JSON.parse(t);
  if (((null === e))) goto L_76;
  if ((("object" != typeof e))) goto L_76;
  if (!(Array.isArray(e))) goto L_7b;
  return undefined;
  return e;
  // [栈深重同步 0 -> 1]
  e#1 = <?>;
  try { // catch -> L_89
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn S  args=4 vars=4 closure=1 cpool=0 bc=258B file=dil_widgets/src/DILViewStateSynchronizer
// args: t, e, i, s
// closure: DILViewStateSynchronizer
function {
  if (!(!i)) goto L_101;
  if (!((t == null))) goto L_11;
  t;
  goto L_32;
  if (!((undefined !== undefined.apiService))) goto L_101;
  if (!((undefined !== e))) goto L_101;
  if (!(e.isModelWrittenDil)) goto L_101;
  if (!((undefined !== e.conversationId))) goto L_101;
  if (!((undefined !== e.messageId))) goto L_101;
  return new DILViewStateSynchronizer(t, e.conversationId, e.messageId, s);
  return;
}

// fn p  args=2 vars=2 closure=0 cpool=0 bc=65B file=dil_widgets/src/DILViewStateSynchronizer
// args: t, e
function {
  return "/backend-api/conversation/".concat(encodeURIComponent(t), "/message/", encodeURIComponent(e), "/dil/view_state");   // tail call
}

// fn I  args=1 vars=1 closure=0 cpool=0 bc=209B file=dil_widgets/src/DILViewStateSynchronizer
// args: t
function {
  return "dil-view-state-".concat(t, "-", Date.now(), "-", Math.random().toString(16).slice(2));   // tail call
}

// fn <atom:0>  args=3 vars=23 closure=0 cpool=19 bc=366B file=dil_widgets/src/DILViewStateSynchronizer
// args: require, module, exports
// locals: t, e, i, s, a, o, d, n, r, h, DILViewStateSynchronizer, <class_fields_init>, DILViewStateSynchronizer#1, l, c, u, v, S, p, I
function {
  h = function h;
  l = function l;
  c = function c;
  u = function u;
  v = function v;
  S = function S;
  p = function p;
  I = function I;
  let DILViewStateSynchronizer#1;
  let r;
  let n;
  let d;
  let o;
  let a;
  let s;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DILViewStateSynchronizer = undefined;
  exports.createDILViewStateSynchronizer = undefined;
  t = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  e = require("oai_platform_services/src/OAINetworkClient");
  i = 250;
  s = 1000;
  a = 8000;
  o = 5;
  d = 128;
  n = new Map();
  r = I("session");
  let DILViewStateSynchronizer;
  let <class_fields_init>;
  class DILViewStateSynchronizer extends undefined { ... }
  <proto:DILViewStateSynchronizer>.rootStateChanged = function <atom:0>;
  <proto:DILViewStateSynchronizer>.rootStateHydrated = function <atom:0>;
  <proto:DILViewStateSynchronizer>.isRecentLocalRootState = function <atom:0>;
  <proto:DILViewStateSynchronizer>.rememberUpdateId = function <atom:0>;
  <proto:DILViewStateSynchronizer>.flush = function <atom:0>;
  <proto:DILViewStateSynchronizer>.dispose = function <atom:0>;
  <proto:DILViewStateSynchronizer>.setSynchronizationEnabled = function <atom:0>;
  <proto:DILViewStateSynchronizer>.drainPendingRootState = function <atom:0>;
  <proto:DILViewStateSynchronizer>.scheduleFlush = function <atom:0>;
  <proto:DILViewStateSynchronizer>.clearScheduledFlush = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DILViewStateSynchronizer>;
  DILViewStateSynchronizer = function <atom:0>;
  // close_loc <class_fields_init>
  DILViewStateSynchronizer#1 = function <atom:0>;
  exports.DILViewStateSynchronizer = DILViewStateSynchronizer#1;
  exports.createDILViewStateSynchronizer = S;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/DILViewStateSynchronizer
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
