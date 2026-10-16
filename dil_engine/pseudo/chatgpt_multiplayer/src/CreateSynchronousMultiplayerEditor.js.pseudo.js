// fn w  args=3 vars=3 closure=2 cpool=0 bc=106B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: e, t, r
// closure: p, A
function {
  if (!(p.isVersionAtLeast(94))) goto L_32;
  return A(e, t, r, undefined);
  return Promise.reject(new Error("This app version does not support synchronous multiplayer editing."));
}

// fn S  args=3 vars=4 closure=4 cpool=0 bc=515B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: e, t, r
// locals: o
// closure: u, A, p, c
function {
  let o;
  if (!(!t.fileName.trim())) goto L_5b;
  throw new Error("A draft name is required");
  o = "draft_".concat(u.v4());
  if (!(p.isVersionAtLeast(132))) goto L_130;
  goto L_131;
  // [栈深重同步 4 -> 3]
  null;
  {};
  return A(e, {documentId: o, account: t.account, onEvent: t.onEvent}, r, {documentId: o, schema: c.EditorSchema.WRITING_BLOCKS_V1, fileName: t.fileName, directoryId: t.directoryId}); // async
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=235B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// locals: e
// closure: p, D, R, N
function {
  if (!(p.isVersionAtLeast(105))) goto L_5a;
  if (!((D == null))) goto L_36;
  D;
  goto L_5a;
  undefined.cancelPendingDocumentMutations();
  if (!((R == null))) goto L_66;
  R;
  goto L_8a;
  undefined.close();
  let e;
  for (const e of N) {
    e.cancel();
  }
  N.clear();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=88B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: t
// closure: e
function {
  if (!(e.isLoggingEnabled)) goto L_57;
  console.warn("Synchronous multiplayer account cleanup failed", t);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=1 bc=91B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// closure: e, M, P
function {
  M();
  if (!((P == null))) goto L_10;
  P;
  goto L_5a;
  undefined.close().catch(function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=171B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: e
// locals: t
// closure: _, w, y
function {
  let t;
  null;
  e;
  _ = (_ ++);
  t = {sequence: (_ ++)};
  w.onEvent({kind: y.MultiplayerEditorEventKind.EDITOR, editorSequence: _, editorEvent: t, state: undefined, participants: undefined, presenceClientId: undefined});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// closure: F
function {
  return F.requireActive();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=41B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: t
// closure: e, S
function {
  return e.call(S, t);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=0 bc=80B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// closure: m, u, w, F, k
function {
  return m.prepareDraftDocument(u, w.account, F, k);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: e
// closure: O
function {
  return O.handleState(e);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=39B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: e
// closure: I
function {
  return (e.userId === I);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=138B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: t
// closure: e
function {
  return (t.clientId.value === e.localClientId.value);
}

// fn <atom:0>  args=1 vars=6 closure=7 cpool=2 bc=1440B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: t
// locals: r, e, t#1, e#1, U
// closure: I, q, p, c, e, O, y
function {
  let r;
  if (!((t == null))) goto L_c;
  t;
  goto L_32;
  r = undefined.find(function <atom:0>);
  if (!((undefined !== r))) goto L_527;
  try { // catch -> L_4c3
  let t#1;
  let e;
  e = q.presenceSnapshot();
  if (!((e.clients.find(function <atom:0>) == null))) goto L_c2;
  e.clients.find(function <atom:0>);
  goto L_e3;
  t#1 = undefined.state;
  if (!((t#1 == null))) goto L_f0;
  t#1;
  goto L_111;
  if (((undefined === undefined.user))) goto L_21e;
  if (!(p.isVersionAtLeast(132))) goto L_4bd;
  if (((t#1.user.userId !== r.userId))) goto L_21e;
  if (!((t#1.user.name !== r.displayName))) goto L_4bd;
  let e#1;
  null;
  t#1;
  if (!(p.isVersionAtLeast(132))) goto L_2a4;
  goto L_322;
  // [栈深重同步 5 -> 4]
  if (!((t#1 == null))) goto L_2af;
  t#1;
  goto L_2f9;
  if (!((undefined.user == null))) goto L_2d8;
  undefined.user;
  goto L_2f9;
  if (!((undefined.name == null))) goto L_322;
  undefined.name;
  if (!((t#1 == null))) goto L_332;
  t#1;
  goto L_37c;
  if (!((undefined.user == null))) goto L_35b;
  undefined.user;
  goto L_37c;
  if (!((undefined.color == null))) goto L_386;
  undefined.color;
  if (!(p.isVersionAtLeast(132))) goto L_3e1;
  goto L_3e2;
  // [栈深重同步 5 -> 4]
  null;
  {};
  e#1 = q.setLocalPresence({user: {name: r.displayName, color: "#6366f1"}});
  if (!((e#1.status === c.EditorResultStatus.REJECTED))) goto L_4bd;
  if (!((e#1.error == null))) goto L_48e;
  e#1.error;
  goto L_4af;
  if (!((undefined.message == null))) goto L_4b9;
  undefined.message;
  throw new Error("Local presence was rejected");
  // close_loc e
  <?>;
  goto L_527;
  // [栈深重同步 0 -> 1]
  U = <?>;
  try { // catch -> L_526
  if (!(e.isLoggingEnabled)) goto L_522;
  console.warn("Unable to initialize native multiplayer presence", U);
  <?>;
  goto L_527;
  // [栈深重同步 0 -> 1]
  throw <?>;
  O.emit({kind: y.MultiplayerEditorEventKind.PARTICIPANTS, participants: t});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=120B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: e
// closure: O, y
function {
  return O.emit({kind: y.MultiplayerEditorEventKind.PRESENCE_ACTIVITY, presenceClientId: e});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=2B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: e
function {
  return e;
}

// fn <atom:0>  args=1 vars=3 closure=4 cpool=1 bc=584B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: e
// locals: t, e#1
// closure: F, d, u, N
function {
  let t;
  F.requireActive();
  t = new d.OAINetworkClient(u).requestJson({request: {method: "GET", path: e}, decode: function <atom:0>});
  N.add(t);
  try { // catch -> L_216
  let e#1;
  e#1 = (await t.result);
  F.requireActive();
  if (!((e#1.kind === d.OAINetworkResultKind.Success))) goto L_1b4;
  // gosub (finally 块) 540
  return e#1.value; // async
  throw Object.assign(new Error("Unable to load document sharing."), {statusCode: e#1.statusCode});
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 540
  throw <?>;
  N.delete(t);
  // ret (finally 块) 
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=120B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: e
// closure: O, y
function {
  return O.emit({kind: y.MultiplayerEditorEventKind.FACEPILE, facepileData: e});   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// closure: O
function {
  return O.connect();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// closure: O
function {
  return O.suspendConnection();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// closure: O
function {
  return O.reportActivity();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// closure: O
function {
  return O.flushLocalWrites();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// closure: O
function {
  return O.requestCheckpointAsync();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=138B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// closure: p, O
function {
  if (!(p.isVersionAtLeast(185))) goto L_52;
  return O.getFacepileData();
  return Promise.reject(new Error("This app version does not support facepile data."));
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=138B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// closure: p, O
function {
  if (!(p.isVersionAtLeast(185))) goto L_52;
  return O.refreshFacepileData();
  return Promise.reject(new Error("This app version does not support facepile data."));
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=82B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: e
// closure: O
function {
  O.handleAdoptedEditorEvent(e);
  return Promise.resolve();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=44B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// closure: M, O
function {
  M();
  return O.close();   // tail call
}

// fn A  args=4 vars=31 closure=20 cpool=22 bc=4872B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: u, w, S, A
// locals: I, q, C, L, P, D, T, V, R, b, k, N, M, _, F, r, l, e, t, q#1, e#1, U, z, O, j, K, U#1
// closure: p, e, y, m, c, d, r, h, l, s, v, i, n, a, E, o, t, f, MultiplayerEditorOwner, g
function {
  let F;
  let _;
  let M;
  let N;
  let k;
  let b;
  let R;
  let V;
  let T;
  let D;
  let P;
  let L;
  let C;
  let q;
  let I;
  if ((!new RegExp("^[A-Za-z0-9_-]{1,512}$").test(w.documentId))) goto L_139;
  if ((!w.account.userId)) goto L_139;
  if ((!w.account.accountId)) goto L_139;
  if (!(("function" != typeof w.onEvent))) goto L_14a;
  throw new Error("A document, matching host account, and event listener are required");
  if (!(p.isVersionAtLeast(132))) goto L_20f;
  if (!((w.participantIdentity == null))) goto L_1a1;
  w.participantIdentity;
  goto L_1c2;
  if (!((undefined.userId == null))) goto L_252;
  undefined.userId;
  goto L_252;
  // [栈深重同步 1 -> 0]
  I = w.account.userId;
  if (!((u.accountScope == null))) goto L_27d;
  u.accountScope;
  goto L_29e;
  q = undefined.lifetime;
  C = r.createNativeEditorDebugCapture(w.documentId, u.experimentService, q);
  L = h.multiplayerConnectionServiceFor(u, C);
  if (((undefined === q))) goto L_344;
  if (!((undefined === L))) goto L_355;
  throw new Error("Authenticated account services are required for multiplayer");
  P = undefined;
  D = undefined;
  T = undefined;
  V = undefined;
  R = undefined;
  b = false;
  k = w.documentId;
  N = new Set();
  M = function <atom:0>;
  _ = 0;
  F = new l.ActiveDocumentAccount(q, function <atom:0>);
  try { // catch -> L_11c2
  let K;
  let j;
  let O;
  let z;
  let q#1;
  let l;
  let r;
  r = function <atom:0>;
  l = undefined;
  if (!(p.isVersionAtLeast(106))) goto L_8ad;
  let t;
  let e;
  e = S.applyDocumentMutation;
  if (!((undefined === e))) goto L_464;
  throw new Error("Synchronous editing requires native document adoption");
  V = (await s.openClientSQLDocumentStore(w.account));
  (await s.openClientSQLDocumentStore(w.account));
  F.requireActive();
  if (!((undefined === A))) goto L_52a;
  goto L_578;
  // [栈深重同步 1 -> 0]
  t = (await V.initializeDraft(A, v.initialWritingBlockUpdate()));
  F.requireActive();
  if (!((undefined === t))) goto L_7f4;
  if (!(w.documentId.startsWith("draft_"))) goto L_677;
  throw new i.DocumentPersistenceFailure({kind: n.DocumentPersistenceErrorKind.NotDownloaded, message: "The local draft could not be found on this device."});
  R = new a.MultiplayerDocumentDownload(L, w.documentId, E.multiplayerClock);
  new a.MultiplayerDocumentDownload(L, w.documentId, E.multiplayerClock);
  (await R.persist(V, o.validateSynchronousDocumentUpdate, function <atom:0>));
  F.requireActive();
  t = (await V.load(w.documentId));
  (await V.load(w.documentId));
  F.requireActive();
  if (!((undefined === t))) goto L_7f4;
  throw new Error("The downloaded document was not saved");
  k = t.documentId;
  t.documentId;
  b = (undefined !== t.fileName);
  (undefined !== t.fileName);
  T = o.openStoredSynchronousEditor({store: V, stored: t, offlineEditingAllowed: true}, r, {applyDocumentMutation: function <atom:0>}, C);
  o.openStoredSynchronousEditor({store: V, stored: t, offlineEditingAllowed: true}, r, {applyDocumentMutation: function <atom:0>}, C);
  l = T;
  T;
  // close_loc e
  goto L_9e7;
  l = (await t.createSynchronousEditorWithDebug({schema: c.EditorSchema.WRITING_BLOCKS_V1, initialState: {kind: c.EditorInitialStateKind.UPDATE, update: {yjs: {encoding: c.YjsUpdateEncoding.V1, bytes: new Uint8Array([0, 0])}}}, onEvent: r}, C));
  (await t.createSynchronousEditorWithDebug({schema: c.EditorSchema.WRITING_BLOCKS_V1, initialState: {kind: c.EditorInitialStateKind.UPDATE, update: {yjs: {encoding: c.YjsUpdateEncoding.V1, bytes: new Uint8Array([0, 0])}}}, onEvent: r}, C));
  D = l.engine;
  l.engine;
  F.requireActive();
  if (((l.status !== c.EditorOpenStatus.OPENED))) goto L_aff;
  if (((undefined === D))) goto L_aff;
  if (((undefined === l.snapshot))) goto L_aff;
  if (!((undefined === l.presenceSnapshot))) goto L_b62;
  if (!((l.error == null))) goto L_b33;
  l.error;
  goto L_b54;
  if (!((undefined.message == null))) goto L_b5e;
  undefined.message;
  throw new Error("The synchronous editor could not be opened");
  q#1 = D;
  if (!(p.isVersionAtLeast(132))) goto L_cfa;
  try { // catch -> L_c96
  let e#1;
  e#1 = q#1.setLocalPresence({});
  if (!((e#1.status === c.EditorResultStatus.REJECTED))) goto L_c93;
  if (!((e#1.error == null))) goto L_c64;
  e#1.error;
  goto L_c85;
  if (!((undefined.message == null))) goto L_c8f;
  undefined.message;
  throw new Error("Local presence activation was rejected");
  <?>;
  goto L_cfa;
  // [栈深重同步 0 -> 1]
  U = <?>;
  try { // catch -> L_cf9
  if (!(e.isLoggingEnabled)) goto L_cf5;
  console.warn("Unable to activate native multiplayer presence", U);
  <?>;
  goto L_cfa;
  // [栈深重同步 0 -> 1]
  throw <?>;
  z = f(q#1, S, T);
  O = new MultiplayerEditorOwner(q#1, w.onEvent, F);
  P = O;
  O;
  if (!((R == null))) goto L_d8b;
  R;
  if (!(p.isVersionAtLeast(110))) goto L_dc2;
  if (!(b)) goto L_dc2;
  goto L_dc3;
  // [栈深重同步 2 -> 1]
  if (!(p.isVersionAtLeast(106))) goto L_e53;
  if (!((q#1.persistence == null))) goto L_e2c;
  q#1.persistence;
  goto L_e50;
  goto L_e54;
  // [栈深重同步 2 -> 1]
  j = {documentId: k, engine: z, codec: undefined, resolveCodec: h.nativeDocumentUpdateCodec, connectionService: L, prepareDocument: undefined, allowInitialization: false, localUserId: I, persistence: undefined, onStateChange: function <atom:0>, onParticipantsChange: function <atom:0>, onRemotePresenceActivity: function <atom:0>, onAuthoritativeSnapshot: undefined};
  if (!(p.isVersionAtLeast(185))) goto L_ed6;
  null;
  j;
  j = {requestFacepile: function <atom:0>, onFacepileChange: function <atom:0>};
  {requestFacepile: function <atom:0>, onFacepileChange: function <atom:0>};
  K = new E.MultiplayerSessionController(j, E.multiplayerClock);
  O.initialize(K, l.snapshot);
  if (!(p.isVersionAtLeast(191))) goto L_1014;
  if (!((undefined !== w.participantIdentity))) goto L_1014;
  K.setLocalParticipant(w.participantIdentity);
  F.requireActive();
  if (!((R == null))) goto L_1048;
  R;
  goto L_106c;
  undefined.requireAvailable();
  if (!(p.isVersionAtLeast(132))) goto L_10ea;
  goto L_110e;
  // [栈深重同步 2 -> 1]
  return {snapshot: l.snapshot, presenceSnapshot: l.presenceSnapshot, session: {editor: g(q#1, O, M), initialState: O.initialState, connect: function <atom:0>, suspendConnection: function <atom:0>, reportActivity: function <atom:0>, flushLocalWrites: function <atom:0>, requestCheckpointAsync: function <atom:0>, getFacepileData: function <atom:0>, refreshFacepileData: function <atom:0>, acceptEditorEvent: function <atom:0>, close: function <atom:0>}}; // async
  // [栈深重同步 0 -> 1]
  U#1 = <?>;
  try { // catch -> L_1307
  if (!((C == null))) goto L_11d4;
  C;
  goto L_120a;
  undefined.record("session", "open.failed", {error: U#1});
  M();
  F.stop();
  if (!((undefined !== P))) goto L_1269;
  goto L_1299;
  // [栈深重同步 1 -> 0]
  if (!((D == null))) goto L_1274;
  D;
  goto L_1298;
  (await undefined.close());
  if (!((undefined === D))) goto L_12d3;
  if (!((V == null))) goto L_12ae;
  V;
  goto L_12d2;
  (await undefined.close());
  if (!((C == null))) goto L_12df;
  C;
  goto L_1303;
  undefined.close();
  throw U#1;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=83B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: e
// closure: r, t
function {
  if (!((undefined === r))) goto L_2c;
  return t.applyRemoteUpdate(e);
  return r.receiveRemoteUpdate(e);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=78B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// closure: e
function {
  return Promise.resolve(e.syncState());   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=78B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// closure: e
function {
  return Promise.resolve(e.encodeFullState());   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=79B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: t
// closure: e
function {
  return Promise.resolve(e.encodeUpdateSince(t));   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=97B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: t, r
// closure: p, e
function {
  if (!(!p.isVersionAtLeast(108))) goto L_39;
  throw new Error("This app version does not support document synchronization receipts.");
  return e.prepareSynchronization(t, r); // async
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=96B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: t
// closure: p, e
function {
  if (!(!p.isVersionAtLeast(108))) goto L_39;
  throw new Error("This app version does not support document synchronization receipts.");
  return e.applyAcknowledgment(t); // async
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=78B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// closure: e
function {
  return Promise.resolve(e.refreshLocalPresence());   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=79B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: t
// closure: e
function {
  return Promise.resolve(e.applyRemotePresence(t));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=79B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: t
// closure: e
function {
  return Promise.resolve(e.removeRemotePresence(t));   // tail call
}

// fn f  args=3 vars=3 closure=1 cpool=9 bc=193B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: e, t, r
// closure: p
function {
  if (!(p.isVersionAtLeast(106))) goto L_4e;
  goto L_4f;
  // [栈深重同步 2 -> 1]
  return {persistence: undefined, applyRemoteUpdate: function <atom:0>, syncState: function <atom:0>, encodeFullState: function <atom:0>, encodeUpdateSince: function <atom:0>, prepareSynchronization: function <atom:0>, applyAcknowledgment: function <atom:0>, refreshLocalPresence: function <atom:0>, applyRemotePresence: function <atom:0>, removeRemotePresence: function <atom:0>};
}

// fn <atom:0>  args=2 vars=3 closure=3 cpool=0 bc=308B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: r, o
// locals: i
// closure: t, e, c
function {
  let i;
  if (!(t.canEdit)) goto L_2b;
  return o();   // tail call
  i = e.snapshot();
  return {snapshot: i, result: {status: c.EditorResultStatus.REJECTED, editId: r, revision: i.revision, error: {code: c.EditorErrorCode.INVALID_OPERATION, message: "This multiplayer document is not editable"}}};
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=95B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: t
// closure: p, e
function {
  if (!(!p.isVersionAtLeast(105))) goto L_39;
  throw new Error("This app version does not support document adoption");
  return e.applyDocumentMutation(t);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// closure: e
function {
  return e.snapshot();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// closure: e, t
function {
  return e.applyLocalEdits(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=42B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: t
// closure: e, o
function {
  return o(t.editId, function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// closure: e, t
function {
  return e.undo(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=42B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: t
// closure: e, o
function {
  return o(t.editId, function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// closure: e, t
function {
  return e.redo(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=42B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: t
// closure: e, o
function {
  return o(t.editId, function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: t
// closure: e
function {
  return e.applyRemoteUpdate(t);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// closure: e
function {
  return e.syncState();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// closure: e
function {
  return e.encodeFullState();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: t
// closure: e
function {
  return e.encodeUpdateSince(t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=96B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: t, r
// closure: p, e
function {
  if (!(!p.isVersionAtLeast(108))) goto L_39;
  throw new Error("This app version does not support document synchronization receipts.");
  return e.prepareSynchronization(t, r);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=95B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: t
// closure: p, e
function {
  if (!(!p.isVersionAtLeast(108))) goto L_39;
  throw new Error("This app version does not support document synchronization receipts.");
  return e.applyAcknowledgment(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: t
// closure: e
function {
  return e.createAnchor(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: t
// closure: e
function {
  return e.resolveAnchor(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: t
// closure: e
function {
  return e.publishSelection(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: t
// closure: e
function {
  return e.resolveSelection(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: t
// closure: e
function {
  return e.setLocalPresence(t);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// closure: e
function {
  return e.refreshLocalPresence();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: t
// closure: e
function {
  return e.applyRemotePresence(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: t
// closure: e
function {
  return e.removeRemotePresence(t);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// closure: e
function {
  return e.presenceSnapshot();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=40B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// closure: r, t
function {
  r();
  return t.close();   // tail call
}

// fn g  args=3 vars=4 closure=2 cpool=22 bc=354B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: e, t, r
// locals: o
// closure: c, p
function {
  let o;
  o = function <atom:0>;
  if (!(p.isVersionAtLeast(105))) goto L_59;
  goto L_5a;
  // [栈深重同步 2 -> 1]
  return {persistence: undefined, applyDocumentMutation: function <atom:0>, cancelPendingDocumentMutations: r, snapshot: function <atom:0>, applyLocalEdits: function <atom:0>, undo: function <atom:0>, redo: function <atom:0>, applyRemoteUpdate: function <atom:0>, syncState: function <atom:0>, encodeFullState: function <atom:0>, encodeUpdateSince: function <atom:0>, prepareSynchronization: function <atom:0>, applyAcknowledgment: function <atom:0>, createAnchor: function <atom:0>, resolveAnchor: function <atom:0>, publishSelection: function <atom:0>, resolveSelection: function <atom:0>, setLocalPresence: function <atom:0>, refreshLocalPresence: function <atom:0>, applyRemotePresence: function <atom:0>, removeRemotePresence: function <atom:0>, presenceSnapshot: function <atom:0>, close: function <atom:0>};
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=72B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: e, t, r
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.engine = e;
  this.onEvent = t;
  this.account = r;
  this.editorSequence = 0;
  this.closed = false;
  return;
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=0 bc=442B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: e, t
// locals: r, this
// closure: p, c
function {
  this = this;
  this.controller = e;
  if (!(p.isVersionAtLeast(110))) goto L_f6;
  let r;
  r = t.synchronization;
  if (!((undefined !== r))) goto L_f5;
  e.handleEditorEvent({kind: c.EditorEventKind.SYNCHRONIZATION, change: undefined, presence: undefined, error: undefined, synchronization: r});
  this.openingState = e.state;
  if (!(p.isVersionAtLeast(185))) goto L_1b9;
  e.setFacepilePresence(this.engine.presenceSnapshot());
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=112B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// locals: this
function {
  this = this;
  if (!((this.openingState == null))) goto L_6f;
  this.openingState;
  return this.requireController().state;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=153B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// locals: this
function {
  this = this;
  if (!(!this.closed)) goto L_98;
  if (!((this.controller == null))) goto L_55;
  this.controller;
  goto L_97;
  return (true === undefined.state.canEdit);
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: e
function {
  return e.connect();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=41B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// locals: this
function {
  this = this;
  return this.control(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: e
function {
  return e.suspendConnection();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=41B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// locals: this
function {
  this = this;
  return this.control(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: e
function {
  return e.reportActivity();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=41B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// locals: this
function {
  this = this;
  return this.control(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=168B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// locals: this
function {
  this = this;
  if (!(this.closed)) goto L_5e;
  return Promise.reject(new Error("The multiplayer editor is closed"));
  return this.requireController().flushLocalWrites();
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=239B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// locals: this
function {
  this = this;
  if (!(this.closed)) goto L_5e;
  return Promise.reject(new Error("The multiplayer editor is closed"));
  this.account.requireActive();
  return this.requireController().requestCheckpointAsync();
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=198B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// locals: this
function {
  this = this;
  if (!(this.closed)) goto L_35;
  throw new Error("The multiplayer editor is closed");
  this.account.requireActive();
  return this.requireController().getFacepileData(); // async
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=198B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// locals: this
function {
  this = this;
  if (!(this.closed)) goto L_35;
  throw new Error("The multiplayer editor is closed");
  this.account.requireActive();
  return this.requireController().refreshFacepileData(); // async
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=513B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: e
// locals: this
// closure: p, c
function {
  this = this;
  if (!((e.sequence == null))) goto L_4c;
  e.sequence;
  this.editorSequence = this.editorSequence;
  if ((this.closed)) goto L_200;
  if (!(p.isVersionAtLeast(185))) goto L_1b0;
  if (!((e.kind === c.EditorEventKind.PRESENCE_CHANGE))) goto L_1b0;
  if (!((this.controller == null))) goto L_146;
  this.controller;
  goto L_1b0;
  undefined.setFacepilePresence(this.engine.presenceSnapshot());
  if (!((this.controller == null))) goto L_1db;
  this.controller;
  goto L_200;
  undefined.handleEditorEvent(e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=121B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: e
// locals: this
// closure: y
function {
  this = this;
  this.emit({kind: y.MultiplayerEditorEventKind.STATE, state: e});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=213B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: t
// locals: this
// closure: e
function {
  this = this;
  try { // catch -> L_75
  null;
  t;
  this.onEvent({editorSequence: this.editorSequence, editorEvent: undefined, state: undefined, participants: undefined, presenceClientId: undefined});
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_d4
  if (!(e.isLoggingEnabled)) goto L_d1;
  console.warn("Multiplayer owner listener failed after an accepted event");
  <?>;
  return;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=90B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// locals: this
function {
  this = this;
  if (!((undefined === this.controller))) goto L_37;
  throw new Error("The multiplayer editor has not opened");
  return this.controller;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=247B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: e
// locals: this
function {
  this = this;
  if (!(this.closed)) goto L_5e;
  return Promise.reject(new Error("The multiplayer editor is closed"));
  this.account.requireActive();
  e(this.requireController());
  return Promise.resolve();
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=101B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// closure: e, this
function {
  try { // catch -> L_14
  (await e);
  <?>;
  // gosub (finally 块) 26
  undefined;
  goto L_63;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 26
  throw <?>;
  (await this.engine.close());
  // ret (finally 块) 
  return undefined; // async
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=1 bc=364B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// locals: e, this
function {
  this = this;
  let e;
  if (!((undefined !== this.closing))) goto L_4e;
  return this.closing;
  this.closed = true;
  this.closing = Promise.resolve().then(function <atom:0>);
  this.account.stop();
  if (!((this.controller == null))) goto L_124;
  this.controller;
  goto L_148;
  e = undefined.close();
  return this.closing;
}

// fn <atom:0>  args=3 vars=29 closure=0 cpool=22 bc=528B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// args: require, module, exports
// locals: e, t, r, o, i, n, s, a, c, l, d, u, p, h, v, m, y, E, w, S, A, f, g, MultiplayerEditorOwner, <class_fields_init>, MultiplayerEditorOwner#1
function {
  w = function w;
  S = function S;
  A = function A;
  f = function f;
  g = function g;
  let MultiplayerEditorOwner#1;
  let E;
  let y;
  let m;
  let v;
  let h;
  let p;
  let u;
  let d;
  let l;
  let c;
  let a;
  let s;
  let n;
  let i;
  let o;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.createSynchronousMultiplayerEditor = undefined;
  exports.createDraftSynchronous = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("collaborative_editor/src/CreateSynchronousCollaborativeEditorEngine");
  r = require("collaborative_editor/src/NativeEditorDebugCapture");
  o = require("collaborative_editor/src/PersistentSynchronousEditor");
  i = require("collaborative_editor/src/DocumentPersistenceFailure");
  n = require("collaborative_editor/src/DocumentPersistenceTypes");
  s = require("collaborative_editor/src/storage/ClientSQLDocumentStore");
  a = require("./MultiplayerDocumentDownload");
  c = require("collaborative_editor/src/EditorTypes");
  l = require("collaborative_editor/src/worker/ActiveDocumentAccount");
  d = require("oai_platform_services/src/OAINetworkClient");
  u = require("foundation/src/uuid");
  p = require("valdi_core/src/CompilerIntrinsics");
  h = require("./CreateMultiplayerDocumentSession");
  v = require("./InitialWritingBlockUpdate");
  m = require("./MultiplayerDrafts");
  y = require("./MultiplayerEditorTypes");
  E = require("./MultiplayerSessionController");
  exports.createSynchronousMultiplayerEditor = w;
  exports.createDraftSynchronous = S;
  let MultiplayerEditorOwner;
  let <class_fields_init>;
  class MultiplayerEditorOwner extends undefined { ... }
  <proto:MultiplayerEditorOwner>.initialize = function <atom:0>;
  <proto:MultiplayerEditorOwner>.initialState = function <atom:0>;
  <proto:MultiplayerEditorOwner>.canEdit = function <atom:0>;
  <proto:MultiplayerEditorOwner>.connect = function <atom:0>;
  <proto:MultiplayerEditorOwner>.suspendConnection = function <atom:0>;
  <proto:MultiplayerEditorOwner>.reportActivity = function <atom:0>;
  <proto:MultiplayerEditorOwner>.flushLocalWrites = function <atom:0>;
  <proto:MultiplayerEditorOwner>.requestCheckpointAsync = function <atom:0>;
  <proto:MultiplayerEditorOwner>.getFacepileData = function <atom:0>;
  <proto:MultiplayerEditorOwner>.refreshFacepileData = function <atom:0>;
  <proto:MultiplayerEditorOwner>.handleAdoptedEditorEvent = function <atom:0>;
  <proto:MultiplayerEditorOwner>.handleState = function <atom:0>;
  <proto:MultiplayerEditorOwner>.emit = function <atom:0>;
  <proto:MultiplayerEditorOwner>.requireController = function <atom:0>;
  <proto:MultiplayerEditorOwner>.control = function <atom:0>;
  <proto:MultiplayerEditorOwner>.close = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:MultiplayerEditorOwner>;
  MultiplayerEditorOwner = function <atom:0>;
  // close_loc <class_fields_init>
  MultiplayerEditorOwner#1 = function <atom:0>;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_multiplayer/src/CreateSynchronousMultiplayerEditor
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
