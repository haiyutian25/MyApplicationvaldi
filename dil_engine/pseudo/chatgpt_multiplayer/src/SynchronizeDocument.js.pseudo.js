// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=120B file=chatgpt_multiplayer/src/SynchronizeDocument
// args: e
// closure: C, m
function {
  if (((e.sequence < C))) goto L_77;
  C = e.sequence;
  e.sequence;
  m = e.localEditsSynced;
  e.localEditsSynced;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=18B file=chatgpt_multiplayer/src/SynchronizeDocument
// args: t
// closure: N, e
function {
  if ((N)) goto L_11;
  N = true;
  true;
  e(t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=12B file=chatgpt_multiplayer/src/SynchronizeDocument
// args: e
// closure: N, I
function {
  I = function <atom:0>;
  function <atom:0>;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=154B file=chatgpt_multiplayer/src/SynchronizeDocument
// closure: I, y, E
function {
  I(y(E.MultiplayerFailureKind.CONNECTION, E.MultiplayerFailureReason.SYNCHRONIZATION_TIMEOUT, "The document synchronization attempt timed out.", true));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=127B file=chatgpt_multiplayer/src/SynchronizeDocument
// closure: e, g, D
function {
  try { // catch -> L_14
  (await e);
  <?>;
  // gosub (finally 块) 26
  undefined;
  goto L_7d;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 26
  throw <?>;
  if (!((undefined !== g))) goto L_4b;
  goto L_7b;
  // [栈深重同步 1 -> 0]
  if (!((D == null))) goto L_56;
  D;
  goto L_7a;
  (await undefined.close());
  // ret (finally 块) 
  return undefined; // async
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=1 bc=198B file=chatgpt_multiplayer/src/SynchronizeDocument
// locals: e
// closure: g, D, O, M, A
function {
  let e;
  if (!((undefined !== O))) goto L_e;
  return O;
  O = Promise.resolve().then(function <atom:0>);
  Promise.resolve().then(function <atom:0>);
  if (!((M == null))) goto L_6d;
  M;
  goto L_91;
  undefined.stop();
  if (!((A == null))) goto L_9d;
  A;
  goto L_c1;
  e = undefined.close();
  return O;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=305B file=chatgpt_multiplayer/src/SynchronizeDocument
// args: e
// locals: t
// closure: S, A, b
function {
  let t;
  if (!((e.change == null))) goto L_2d;
  e.change;
  goto L_4e;
  if (!((undefined.synchronization == null))) goto L_c5;
  undefined.synchronization;
  if (!((e.synchronization == null))) goto L_c5;
  e.synchronization;
  if (!((e.snapshot == null))) goto L_a4;
  e.snapshot;
  goto L_c5;
  t = undefined.synchronization;
  if (!((undefined !== t))) goto L_d6;
  S(t);
  if (!((undefined === A))) goto L_108;
  goto L_130;
  // [栈深重同步 1 -> 0]
  A.handleEditorEvent(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=0 bc=1080B file=chatgpt_multiplayer/src/SynchronizeDocument
// args: e
// closure: C, m, E, I, y
function {
  if (!((C < 0))) goto L_2f;
  m = e.localEditsSynced;
  e.localEditsSynced;
  if (!((e.state === E.MultiplayerConnectionState.SYNCHRONIZED))) goto L_177;
  if (!(m)) goto L_df;
  goto L_172;
  // [栈深重同步 3 -> 2]
  I(y(E.MultiplayerFailureKind.DOCUMENT_UNAVAILABLE, E.MultiplayerFailureReason.ACCESS_DENIED, "Local changes are retained until the document grants edit access."));
  goto L_437;
  if (((e.state === E.MultiplayerConnectionState.FAILED_RETRYABLE))) goto L_209;
  if (!((e.state === E.MultiplayerConnectionState.FAILED_NON_RETRYABLE))) goto L_268;
  I({state: e.state, failure: e.failure, localEditsSynced: m});
  goto L_437;
  if (!((e.state === E.MultiplayerConnectionState.INACTIVE))) goto L_353;
  I(y(E.MultiplayerFailureKind.CONNECTION, E.MultiplayerFailureReason.NETWORK, "The server closed the connection before synchronization completed.", true));
  goto L_437;
  if (!((e.state === E.MultiplayerConnectionState.CLOSED))) goto L_437;
  I(y(E.MultiplayerFailureKind.CONNECTION, E.MultiplayerFailureReason.ACCESS_DENIED, "The account ended before synchronization completed."));
  e.state;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=87B file=chatgpt_multiplayer/src/SynchronizeDocument
// closure: e
function {
  if (!(e.isLoggingEnabled)) goto L_56;
  console.warn("Document synchronization cleanup failed after account exit");
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=1 bc=52B file=chatgpt_multiplayer/src/SynchronizeDocument
// closure: e, A, F
function {
  if (!((undefined !== A))) goto L_33;
  F().catch(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=99B file=chatgpt_multiplayer/src/SynchronizeDocument
// args: e
// closure: f, r
function {
  return f({kind: r.EditorEventKind.CHANGE, change: e, presence: undefined, error: undefined});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=99B file=chatgpt_multiplayer/src/SynchronizeDocument
// args: e
// closure: f, r
function {
  return f({kind: r.EditorEventKind.PRESENCE_CHANGE, change: undefined, presence: e, error: undefined});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=105B file=chatgpt_multiplayer/src/SynchronizeDocument
// args: e
// closure: f, r
function {
  return f({kind: r.EditorEventKind.PERSISTENCE, change: undefined, presence: undefined, error: undefined, persistence: e});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=105B file=chatgpt_multiplayer/src/SynchronizeDocument
// args: e
// closure: f, r
function {
  return f({kind: r.EditorEventKind.SYNCHRONIZATION, change: undefined, presence: undefined, error: undefined, synchronization: e});   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=4B file=chatgpt_multiplayer/src/SynchronizeDocument
// closure: e
function {
  return e;
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=113B file=chatgpt_multiplayer/src/SynchronizeDocument
// closure: u, p, v, o, T
function {
  return u.prepareDraftDocument(p, v.account, o, T.documentId);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=chatgpt_multiplayer/src/SynchronizeDocument
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=chatgpt_multiplayer/src/SynchronizeDocument
function {
  return;
}

// fn p  args=2 vars=33 closure=15 cpool=17 bc=4840B file=chatgpt_multiplayer/src/SynchronizeDocument
// args: p, v
// locals: h, m, C, S, I, N, R, T, D, g, M, A, O, F, b, f, _, w, L, h#1, m#1, C#1, T#1, O#1, e, e#1, i, n, o, t, q
// closure: y, E, e, r, u, d, i, s, c, a, n, o, require, l, t
function {
  let L;
  let w;
  let _;
  let f;
  let b;
  let F;
  let O;
  let A;
  let M;
  let g;
  let D;
  let T;
  let R;
  let N;
  let I;
  let S;
  let C;
  let m;
  let h;
  if (!((v.timeoutMs == null))) goto L_63;
  v.timeoutMs;
  h = 30000;
  if ((!Number.isFinite(h))) goto L_a7;
  if (((h <= 0))) goto L_a7;
  if (!((h > 2147483647))) goto L_13e;
  return y(E.MultiplayerFailureKind.EDITOR, E.MultiplayerFailureReason.EDITOR, "The synchronization timeout must be a positive number of milliseconds."); // async
  m = false;
  C = -1;
  S = function <atom:0>;
  I = undefined;
  N = false;
  R = new Promise(function <atom:0>);
  T = d.multiplayerClock.schedule(function <atom:0>, h);
  D = undefined;
  g = undefined;
  M = undefined;
  A = undefined;
  O = undefined;
  F = function <atom:0>;
  b = [];
  f = function <atom:0>;
  _ = function <atom:0>;
  w = undefined;
  L = false;
  try { // catch -> L_f2e
  let O#1;
  let T#1;
  let C#1;
  let m#1;
  let h#1;
  if ((!new RegExp("^[A-Za-z0-9_-]{1,512}$").test(v.documentId))) goto L_2d7;
  if ((!v.account.userId)) goto L_2d7;
  if (!(!v.account.accountId)) goto L_374;
  // gosub (finally 块) 4554
  return y(E.MultiplayerFailureKind.EDITOR, E.MultiplayerFailureReason.EDITOR, "A document and matching host account are required"); // async
  if (!((p.accountScope == null))) goto L_39e;
  p.accountScope;
  goto L_3bf;
  h#1 = undefined.lifetime;
  m#1 = i.createNativeEditorDebugCapture(v.documentId, p.experimentService, h#1);
  C#1 = s.multiplayerConnectionServiceFor(p, m#1);
  if (((undefined === h#1))) goto L_468;
  if (!((undefined === C#1))) goto L_505;
  // gosub (finally 块) 4554
  return y(E.MultiplayerFailureKind.EDITOR, E.MultiplayerFailureReason.EDITOR, "Authenticated account services are required for multiplayer"); // async
  M = new c.ActiveDocumentAccount(h#1, function <atom:0>);
  new c.ActiveDocumentAccount(h#1, function <atom:0>);
  D = (await a.openClientSQLDocumentStore(v.account));
  (await a.openClientSQLDocumentStore(v.account));
  M.requireActive();
  T#1 = (await D.load(v.documentId));
  M.requireActive();
  if (!((undefined === T#1))) goto L_6a5;
  throw new n.DocumentPersistenceFailure({kind: o.DocumentPersistenceErrorKind.NotDownloaded, message: "This document has not been downloaded on this device."});
  O#1 = require("collaborative_editor/runtime_bundle/NativeEngine").createNativeEditor({schema: T#1.schema, debug: m#1, initialState: {kind: r.EditorInitialStateKind.EMPTY}, persistence: {store: D, stored: T#1, offlineEditingAllowed: false}, onChange: function <atom:0>, onPresenceChange: function <atom:0>, onPersistenceChange: function <atom:0>, onSynchronizationChange: function <atom:0>}, undefined);
  g = O#1.engine;
  O#1.engine;
  M.requireActive();
  if (((O#1.status !== r.EditorOpenStatus.OPENED))) goto L_868;
  if (!((undefined === g))) goto L_a6d;
  let e;
  e = (undefined !== O#1.persistenceError);
  if (!(e)) goto L_8e8;
  goto L_92d;
  // [栈深重同步 3 -> 2]
  if (!(e)) goto L_979;
  goto L_9be;
  // [栈深重同步 4 -> 3]
  if (!((O#1.persistenceError == null))) goto L_9ea;
  O#1.persistenceError;
  goto L_a0b;
  if (!((undefined.message == null))) goto L_a67;
  undefined.message;
  if (!((O#1.error == null))) goto L_a3c;
  O#1.error;
  goto L_a5d;
  if (!((undefined.message == null))) goto L_a67;
  undefined.message;
  I(y(E.MultiplayerFailureKind.EDITOR, E.MultiplayerFailureReason.EDITOR, "The document could not be opened for synchronization."));
  goto L_f17;
  let o;
  let n;
  let i;
  let e#1;
  e#1 = g;
  i = e#1.snapshot().synchronization;
  if (!((undefined !== i))) goto L_ad8;
  S(i);
  if (!((e#1.persistence == null))) goto L_b05;
  e#1.persistence;
  goto L_b29;
  n = (await undefined.state());
  M.requireActive();
  o = M;
  if (!(t.isVersionAtLeast(110))) goto L_c5d;
  if (!((undefined !== T#1.fileName))) goto L_c5d;
  goto L_c5e;
  // [栈深重同步 4 -> 3]
  if (!(t.isVersionAtLeast(132))) goto L_d2f;
  if (!((v.participantIdentity == null))) goto L_cc1;
  v.participantIdentity;
  goto L_ce2;
  if (!((undefined.userId == null))) goto L_d72;
  undefined.userId;
  goto L_d72;
  // [栈深重同步 4 -> 3]
  A = new d.MultiplayerSessionController({documentId: T#1.documentId, engine: new l.BrowserCollaborativeEditorEngine(function <atom:0>), codec: e#1.updateCodec, connectionService: C#1, prepareDocument: undefined, allowInitialization: false, localUserId: v.account.userId, persistence: n, onStateChange: _, onParticipantsChange: function <atom:0>, onRemotePresenceActivity: function <atom:0>, onAuthoritativeSnapshot: undefined}, d.multiplayerClock);
  new d.MultiplayerSessionController({documentId: T#1.documentId, engine: new l.BrowserCollaborativeEditorEngine(function <atom:0>), codec: e#1.updateCodec, connectionService: C#1, prepareDocument: undefined, allowInitialization: false, localUserId: v.account.userId, persistence: n, onStateChange: _, onParticipantsChange: function <atom:0>, onRemotePresenceActivity: function <atom:0>, onAuthoritativeSnapshot: undefined}, d.multiplayerClock);
  if (!((undefined !== i))) goto L_e69;
  A.handleEditorEvent({kind: r.EditorEventKind.SYNCHRONIZATION, change: undefined, presence: undefined, error: undefined, synchronization: i});
  let t;
  for (const t of b) {
    A.handleEditorEvent(t);
  }
  b.length = 0;
  M.requireActive();
  if ((N)) goto L_f10;
  L = true;
  true;
  A.connect();
  // close_loc o
  // close_loc e#1
  w = (await R);
  (await R);
  // close_loc T#1
  <?>;
  // gosub (finally 块) 4554
  undefined;
  goto L_11d0;
  // [栈深重同步 0 -> 1]
  q = <?>;
  try { // catch -> L_11c4
  if (!(!L)) goto L_1020;
  if (!((q instanceof n.DocumentPersistenceFailure))) goto L_1020;
  goto L_11b0;
  // [栈深重同步 1 -> 0]
  if (!(e.isLoggingEnabled)) goto L_1076;
  console.warn("The document synchronization attempt could not be started");
  if (!(L)) goto L_10c7;
  goto L_110c;
  // [栈深重同步 3 -> 2]
  if (!(L)) goto L_1158;
  goto L_119d;
  // [栈深重同步 4 -> 3]
  if (!(L)) goto L_11a9;
  goto L_11ae;
  // [栈深重同步 5 -> 4]
  I(y(E.MultiplayerFailureKind.EDITOR, E.MultiplayerFailureReason.EDITOR, "The account-owned multiplayer editor could not be opened"));
  w = (await R);
  (await R);
  <?>;
  // gosub (finally 块) 4554
  undefined;
  goto L_11d0;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 4554
  throw <?>;
  T();
  // ret (finally 块) 
  try { // catch -> L_11df
  (await F());
  <?>;
  goto L_12d6;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_12d5
  if (!(e.isLoggingEnabled)) goto L_123b;
  console.warn("Document synchronization cleanup could not save local changes");
  w = y(E.MultiplayerFailureKind.PERSISTENCE, E.MultiplayerFailureReason.LOCAL_PERSISTENCE, "Document changes could not be saved locally.");
  y(E.MultiplayerFailureKind.PERSISTENCE, E.MultiplayerFailureReason.LOCAL_PERSISTENCE, "Document changes could not be saved locally.");
  <?>;
  goto L_12d6;
  // [栈深重同步 0 -> 1]
  throw <?>;
  null;
  w;
  return {localEditsSynced: m}; // async
}

// fn y  args=4 vars=8 closure=1 cpool=0 bc=221B file=chatgpt_multiplayer/src/SynchronizeDocument
// args: e, t, i, n
// locals: e#1, t#1, i#1, n#1
// closure: E
function {
  let n#1;
  let i#1;
  let t#1;
  let e#1;
  e#1 = e;
  t#1 = t;
  i#1 = i;
  if (!((n === undefined))) goto L_1b;
  n;
  n = false;
  n#1 = false;
  if (!(n)) goto L_67;
  goto L_ac;
  // [栈深重同步 2 -> 1]
  return {state: E.MultiplayerConnectionState.FAILED_NON_RETRYABLE, failure: {kind: e, reason: t, message: i, retryable: n, connectionReason: undefined}, localEditsSynced: false};
}

// fn <atom:0>  args=3 vars=18 closure=0 cpool=2 bc=276B file=chatgpt_multiplayer/src/SynchronizeDocument
// args: require, module, exports
// locals: e, t, i, n, o, r, a, c, l, s, u, d, E, p, y
function {
  p = function p;
  y = function y;
  let E;
  let d;
  let u;
  let s;
  let l;
  let c;
  let a;
  let r;
  let o;
  let n;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.synchronizeDocument = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("valdi_core/src/CompilerIntrinsics");
  i = require("collaborative_editor/src/NativeEditorDebugCapture");
  n = require("collaborative_editor/src/DocumentPersistenceFailure");
  o = require("collaborative_editor/src/DocumentPersistenceTypes");
  r = require("collaborative_editor/src/EditorTypes");
  a = require("collaborative_editor/src/storage/ClientSQLDocumentStore");
  c = require("collaborative_editor/src/worker/ActiveDocumentAccount");
  l = require("./BrowserCollaborativeEditorEngine");
  s = require("./CreateMultiplayerDocumentSession");
  u = require("./MultiplayerDrafts");
  d = require("./MultiplayerSessionController");
  E = require("./MultiplayerSessionTypes");
  exports.synchronizeDocument = p;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_multiplayer/src/SynchronizeDocument
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
