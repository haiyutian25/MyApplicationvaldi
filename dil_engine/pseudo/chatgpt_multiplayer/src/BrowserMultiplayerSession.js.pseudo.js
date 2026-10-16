// fn l  args=1 vars=1 closure=2 cpool=0 bc=223B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t
// closure: o, n
function {
  if (!(t)) goto L_c1;
  goto L_cf;
  // [栈深重同步 4 -> 3]
  return {kind: o.EditorInitialStateKind.UPDATE, update: {yjs: {encoding: o.YjsUpdateEncoding.V1, bytes: new Uint8Array([0, 0])}}};
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=23B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t, e
// closure: this
function {
  this.resolveInitialDocument = t;
  this.rejectInitialDocument = e;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=35B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// closure: this
function {
  return this.currentEditor;
}

// fn <atom:0>  args=2 vars=5 closure=5 cpool=2 bc=1443B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t, i
// locals: r, i#1, this
// closure: <class_fields_init>, e, l, o, s
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let r;
  this.options = t;
  this.source = i;
  this.synchronizationSequence = -1;
  this.disposed = false;
  this.facepileRequested = false;
  r = (true === t.optimistic);
  if (!(!r)) goto L_ab;
  if (!(!t.documentId)) goto L_ab;
  throw new Error("A multiplayer document identity is required");
  if (!(("cached" === i.documentSource))) goto L_ff;
  if (!((undefined !== i.draft))) goto L_ff;
  goto L_121;
  // [栈深重同步 2 -> 1]
  this.documentId = t.documentId;
  if (!(e.isVersionAtLeast(191))) goto L_204;
  if (!((t.participantIdentity == null))) goto L_184;
  t.participantIdentity;
  goto L_1a5;
  this.localParticipantId = undefined.userId;
  if (!((t.participantIdentity == null))) goto L_1d9;
  t.participantIdentity;
  goto L_1fa;
  this.localDisplayName = undefined.displayName;
  undefined.displayName;
  this.debug = t.debug;
  if (!((this.debug == null))) goto L_25b;
  this.debug;
  goto L_2b1;
  undefined.record("session", "created", {documentId: t.documentId});
  this.currentState = {synchronized: false, localEditsSynced: false, canEdit: r, optimistic: r, schemaCompatible: true, error: undefined, history: {canUndo: false, canRedo: false}};
  if (!(("download" !== i.documentSource))) goto L_534;
  let i#1;
  if (!((t.initialState == null))) goto L_37b;
  t.initialState;
  this.currentEditor = this.openEditor(l(r));
  i#1 = this.currentEditor.snapshot();
  if (!(e.isVersionAtLeast(110))) goto L_46c;
  if (!((undefined !== i#1.synchronization))) goto L_46c;
  this.acceptSynchronizationState(i#1.synchronization);
  if (!((i#1.status !== o.EditorSnapshotStatus.EDITABLE))) goto L_531;
  this.updateState({schemaCompatible: false, history: i#1.history});
  goto L_549;
  this.initialDocument = new Promise(function <atom:0>);
  this.engine = new s.BrowserCollaborativeEditorEngine(function <atom:0>);
  this.setLocalParticipant();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=66B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// locals: t, this
function {
  this = this;
  let t;
  t = this.currentEditor;
  if (!((undefined === t))) goto L_3e;
  throw new Error("The multiplayer document has not been downloaded yet");
  return t;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=83B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// locals: this
function {
  this = this;
  if (!((this.initialDocument == null))) goto L_52;
  this.initialDocument;
  return Promise.resolve();
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// locals: this
function {
  this = this;
  return this.currentState;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=37B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// locals: this
function {
  this = this;
  return this.currentParticipants;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=704B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t
// locals: e, i, this
function {
  this = this;
  let i;
  let e;
  e = this.source;
  if (!(this.disposed)) goto L_5e;
  throw new Error("The multiplayer document is closed");
  if ((("cached" !== e.documentSource))) goto L_b2;
  if (!((undefined === e.draft))) goto L_c3;
  throw new Error("Only a persistent local draft can bind a server document");
  if ((!t)) goto L_f3;
  if (!(t.startsWith("draft_"))) goto L_104;
  throw new Error("A server document identity is required");
  e.draft.requireActive();
  i = (await e.draft.store.bindServerDocument(e.persistence.stored.documentId, t));
  e.draft.requireActive();
  if (!(this.disposed)) goto L_29b;
  throw new Error("The multiplayer document is closed");
  if (!((i !== t))) goto L_2b1;
  throw new Error("The local draft already belongs to another server document");
  this.documentId = i;
  return undefined; // async
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=317B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// locals: this
function {
  this = this;
  if (!(this.disposed)) goto L_5e;
  return Promise.reject(new Error("The multiplayer editor is closed"));
  this.facepileRequested = true;
  if (!((undefined === this.documentId))) goto L_b9;
  goto L_124;
  // [栈深重同步 3 -> 2]
  if (!((this.ensureController(this.documentId).getFacepileData() == null))) goto L_139;
  this.ensureController(this.documentId).getFacepileData();
  return Promise.resolve({collaborators: [], isLoading: true});
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=231B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// locals: this
function {
  this = this;
  if (!(this.disposed)) goto L_5e;
  return Promise.reject(new Error("The multiplayer editor is closed"));
  this.facepileRequested = true;
  if (!((this.controller == null))) goto L_94;
  this.controller;
  goto L_b8;
  if (!((undefined.refreshFacepileData() == null))) goto L_e6;
  undefined.refreshFacepileData();
  return Promise.resolve();
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=663B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t
// locals: this
function {
  this = this;
  if (!(!this.disposed)) goto L_296;
  if (!((this.debug == null))) goto L_54;
  this.debug;
  goto L_b0;
  if (!((t == null))) goto L_a8;
  t;
  undefined.record("session", "connect", {documentId: this.documentId});
  if (!(("cached" === this.source.documentSource))) goto L_178;
  if (!((undefined !== this.source.draft))) goto L_178;
  if (!((undefined === this.documentId))) goto L_178;
  throw new Error("Bind the persistent local draft before connecting");
  if (!((undefined !== t))) goto L_1f6;
  if (!(!t)) goto L_190;
  throw new Error("A multiplayer document identity is required");
  if (!((undefined !== this.documentId))) goto L_1eb;
  if (!((this.documentId !== t))) goto L_1eb;
  throw new Error("A multiplayer document identity cannot change");
  this.documentId = t;
  if (!(!this.documentId)) goto L_22a;
  throw new Error("A multiplayer document identity is required before connecting");
  this.ensureController(this.documentId).connect();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=0 bc=1070B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t
// locals: t#1, this
// closure: e, o
function {
  this = this;
  if (!((undefined === this.controller))) goto L_40b;
  this.controller = this.createController(t);
  if (!(e.isVersionAtLeast(191))) goto L_15f;
  if (!((undefined !== this.options.participantIdentity))) goto L_15f;
  this.controller.setLocalParticipant(this.options.participantIdentity);
  if (!(e.isVersionAtLeast(185))) goto L_2b3;
  if (!((undefined !== this.currentEditor))) goto L_246;
  this.controller.setFacepilePresence(this.currentEditor.presenceSnapshot());
  if (!(this.facepileRequested)) goto L_2b3;
  this.controller.getFacepileData();
  if (!(e.isVersionAtLeast(110))) goto L_40b;
  let t#1;
  if (!((this.currentEditor == null))) goto L_30d;
  this.currentEditor;
  goto L_352;
  t#1 = undefined.snapshot().synchronization;
  if (!((undefined !== t#1))) goto L_40a;
  this.controller.handleEditorEvent({kind: o.EditorEventKind.SYNCHRONIZATION, change: undefined, presence: undefined, error: undefined, synchronization: t#1});
  return this.controller;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=119B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// locals: this
function {
  this = this;
  if ((this.disposed)) goto L_76;
  if (!((this.controller == null))) goto L_52;
  this.controller;
  goto L_76;
  undefined.reportActivity();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=209B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// locals: this
function {
  this = this;
  if (!((this.debug == null))) goto L_2c;
  this.debug;
  goto L_5b;
  undefined.record("session", "suspend", {});
  if ((this.disposed)) goto L_d0;
  if (!((this.controller == null))) goto L_ac;
  this.controller;
  goto L_d0;
  undefined.suspendConnection();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=282B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// locals: this
function {
  this = this;
  if (!((undefined === this.controller))) goto L_d3;
  if (!((this.currentEditor == null))) goto L_55;
  this.currentEditor;
  goto L_a4;
  if (!((undefined.persistence == null))) goto L_7e;
  undefined.persistence;
  goto L_a4;
  if (!((undefined.flush(true) == null))) goto L_119;
  undefined.flush(true);
  return Promise.resolve();
  return this.controller.flushLocalWrites();
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=163B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// locals: this
function {
  this = this;
  if ((this.disposed)) goto L_4b;
  if (!(!this.controller)) goto L_5c;
  throw new Error("The multiplayer document must be connected before checkpointing.");
  return this.controller.requestCheckpointAsync(); // async
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=599B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// locals: t, e, this
function {
  this = this;
  let t;
  if (!((this.currentEditor == null))) goto L_2f;
  this.currentEditor;
  goto L_7c;
  if (!((undefined.persistence == null))) goto L_58;
  undefined.persistence;
  goto L_7c;
  (await undefined.refresh());
  t = this.source;
  if (!(("cached" === t.documentSource))) goto L_255;
  if (!((undefined !== t.draft))) goto L_255;
  let e;
  e = (await t.draft.store.load(t.persistence.stored.documentId));
  if ((this.disposed)) goto L_254;
  if (((undefined !== this.documentId))) goto L_254;
  if (!((e == null))) goto L_229;
  e;
  goto L_24a;
  this.documentId = undefined.serverDocumentId;
  undefined.serverDocumentId;
  return undefined; // async
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=168B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// locals: this
function {
  this = this;
  if (!((this.currentEditor == null))) goto L_2c;
  this.currentEditor;
  goto L_79;
  if (!((undefined.persistence == null))) goto L_55;
  undefined.persistence;
  goto L_79;
  if (!((undefined.losslessCheckpoint() == null))) goto L_a7;
  undefined.losslessCheckpoint();
  return Promise.resolve();
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=12B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: i, o
// closure: t, e
function {
  t = i;
  i;
  e = o;
  o;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=20B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t
// closure: r, s
function {
  if ((r)) goto L_13;
  r = true;
  true;
  s = t;
  t;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=39B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t
// closure: r, s
function {
  return t.catch(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=19B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// closure: r, e, s, t
function {
  if (!(r)) goto L_e;
  goto L_12;
  // [栈深重同步 1 -> 0]
  t();
  return;
}

// fn <atom:0>  args=0 vars=7 closure=0 cpool=3 bc=893B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// locals: t, e, i, o, s, r, this
function {
  this = this;
  let r;
  let s;
  let o;
  let i;
  let e;
  let t;
  if (!((undefined !== this.closing))) goto L_60;
  return this.closing;
  t = undefined;
  e = undefined;
  if (!((this.debug == null))) goto L_8f;
  this.debug;
  goto L_be;
  undefined.record("session", "close", {});
  this.closing = new Promise(function <atom:0>);
  this.disposed = true;
  this.failInitialDocument(new Error("The document session closed before its first snapshot was saved"));
  if (!((this.controller == null))) goto L_142;
  this.controller;
  goto L_166;
  if (!((undefined.close() == null))) goto L_194;
  undefined.close();
  i = Promise.resolve();
  if (!((this.currentEditor == null))) goto L_1c0;
  this.currentEditor;
  goto L_1e4;
  if (!((undefined.close() == null))) goto L_212;
  undefined.close();
  o = Promise.resolve();
  this.currentParticipants = undefined;
  null;
  this.currentState;
  this.currentState = {canEdit: false, synchronized: false, optimistic: false};
  this.options.onStateChange(this.currentState);
  s = undefined;
  r = false;
  Promise.all([i, o].map(function <atom:0>)).then(function <atom:0>);
  return this.closing;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=95B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// closure: t, i
function {
  return t.promiseToCancelablePromise(Promise.resolve({documentId: i, failure: undefined}), function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=75B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// closure: this
function {
  if (!((this.currentEditor == null))) goto L_29;
  this.currentEditor;
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>.updateCodec;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=274B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t
// closure: o
function {
  o.record(t.kind.split(".")[0], t.kind, t);
  if (!(t.incomplete)) goto L_111;
  if (!((t.captureError == null))) goto L_10e;
  t.captureError;
  o.markIncomplete("A socket event could not be captured.");
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=77B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t
// closure: this
function {
  if ((this.disposed)) goto L_4c;
  this.setAuthenticatedParticipant(t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t
// closure: this
function {
  return this.handleConnectionState(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=163B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t
// closure: e, this
function {
  if (!(e.isVersionAtLeast(185))) goto L_a2;
  if ((this.disposed)) goto L_a2;
  if (!((this.options.onFacepileChange == null))) goto L_9e;
  this.options.onFacepileChange;
  this.options;
  goto L_a2;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=183B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t
// closure: this, o
function {
  if ((this.disposed)) goto L_b6;
  if (!((o == null))) goto L_34;
  o;
  goto L_63;
  undefined.record("session", "participants", t);
  this.currentParticipants = t;
  this.options.onParticipantsChange(t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=110B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t
// closure: this
function {
  if ((this.disposed)) goto L_6d;
  this.options.onPresenceActivity(t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t
// closure: this
function {
  return this.replaceEditor(t);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=0 bc=39B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t, e
// closure: this
function {
  return this.initializeDocument(t, e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=70B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// closure: this
function {
  if (!((this.resolveInitialDocument == null))) goto L_2b;
  this.resolveInitialDocument;
  this;
  goto L_2e;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined);
  this.resolveInitialDocument = undefined;
  this.rejectInitialDocument = undefined;
  return;
}

// fn <atom:0>  args=1 vars=4 closure=4 cpool=11 bc=1435B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: i
// locals: o, s, this
// closure: t, e, c, r
function {
  this = this;
  let s;
  let o;
  o = this.debug;
  s = this.source;
  if (!((o == null))) goto L_59;
  o;
  goto L_7e;
  undefined.setDocumentId(i);
  if (!(("cached" === s.documentSource))) goto L_139;
  goto L_13a;
  // [栈深重同步 4 -> 3]
  if (!(("cached" === s.documentSource))) goto L_197;
  if (!((undefined !== s.draft))) goto L_197;
  goto L_198;
  // [栈深重同步 4 -> 3]
  if (!((this.currentEditor == null))) goto L_1ee;
  this.currentEditor;
  goto L_20f;
  if (!((undefined === o))) goto L_337;
  goto L_339;
  // [栈深重同步 7 -> 6]
  if (!((undefined === this.options.rewriteEndpoint))) goto L_388;
  goto L_3d1;
  // [栈深重同步 7 -> 6]
  null;
  {rewriteEndpoint: this.options.rewriteEndpoint};
  if (!(("memory" === s.documentSource))) goto L_501;
  goto L_502;
  // [栈深重同步 4 -> 3]
  if (!(("download" === s.documentSource))) goto L_537;
  goto L_538;
  // [栈深重同步 4 -> 3]
  if (!(("download" === s.documentSource))) goto L_56d;
  goto L_56e;
  // [栈深重同步 4 -> 3]
  return new c.MultiplayerSessionController({documentId: i, prepareDocument: undefined, engine: this.engine, codec: undefined.updateCodec, resolveCodec: function <atom:0>, allowInitialization: true, connectionService: new r.BrowserMultiplayerConnectionService({production: this.options.production, request: this.options.request, requestAdmission: this.options.requestAdmission, debug: o, onDebugEvent: function <atom:0>, onAdmission: function <atom:0>}), localUserId: this.localParticipantId, persistence: this.currentState.persistence, onStateChange: function <atom:0>, requestFacepile: this.options.request, onFacepileChange: function <atom:0>, onParticipantsChange: function <atom:0>, onRemoteDocumentEdit: function <atom:0>, onAuthoritativeSnapshot: undefined, onInitializeDocument: undefined, onInitialDocumentReady: undefined}, c.multiplayerClock);
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=132B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// closure: n, this
function {
  n.requireActive();
  if ((this.disposed)) goto L_72;
  if (!((undefined === this.rejectInitialDocument))) goto L_83;
  throw new Error("The initial document connection has ended");
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
function {
  return;
}

// fn <atom:0>  args=2 vars=11 closure=5 cpool=3 bc=2272B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t, s
// locals: r, n, c, a, h, u, p, m, this
// closure: o, d, i, l, e
function {
  this = this;
  let m;
  let p;
  let u;
  let h;
  let a;
  let c;
  let n;
  let r;
  r = this.source;
  if ((("download" !== r.documentSource))) goto L_92;
  if (!((undefined === this.documentId))) goto L_a3;
  throw new Error("This document session is already initialized");
  if (((undefined === undefined))) goto L_cf;
  n = <to_object>(undefined).initialization;
  <to_object>(undefined);
  goto L_d5;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_a8;
  // [栈深重同步 1 -> 0]
  c = function <atom:0>;
  c();
  a = new Uint8Array(t.yjs.bytes);
  h = this.options.createEditor({schema: o.EditorSchema.WRITING_BLOCKS_V1, initialState: {kind: o.EditorInitialStateKind.UPDATE, update: {yjs: {encoding: o.YjsUpdateEncoding.V1, bytes: a}}}, onChange: function <atom:0>, onPresenceChange: function <atom:0>});
  if (((h.status !== o.EditorOpenStatus.OPENED))) goto L_31d;
  if (!((undefined === h.engine))) goto L_380;
  if (!((h.error == null))) goto L_351;
  h.error;
  goto L_372;
  if (!((undefined.message == null))) goto L_37c;
  undefined.message;
  throw new Error("Invalid downloaded document");
  (await h.engine.close());
  c();
  if (!((s === d.MultiplayerDocumentAccess.EDIT))) goto L_45f;
  goto L_4a4;
  // [栈深重同步 1 -> 0]
  u = i.DocumentAccess.View;
  (await n.store.initialize({documentId: this.documentId, schema: o.EditorSchema.WRITING_BLOCKS_V1, access: u, bytes: a}));
  c();
  p = (await n.store.load(this.documentId));
  c();
  if (!((undefined === p))) goto L_601;
  throw new Error("The downloaded document was not saved");
  this.source = {documentSource: "cached", persistence: {store: n.store, stored: p, offlineEditingAllowed: n.offlineEditingAllowed}};
  this.currentEditor = this.openEditor(l(false));
  if (!((undefined === this.currentEditor.persistence))) goto L_703;
  throw new Error("This editor does not support persistent documents");
  m = this.currentEditor.snapshot();
  if (!(e.isVersionAtLeast(110))) goto L_7eb;
  if (!((undefined !== m.synchronization))) goto L_7eb;
  this.acceptSynchronizationState(m.synchronization);
  if (!((m.status !== o.EditorSnapshotStatus.EDITABLE))) goto L_8b1;
  this.updateState({schemaCompatible: false, history: m.history});
  this.setLocalParticipant();
  c();
  return undefined; // async
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=105B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t
// locals: this
function {
  this = this;
  if (!((undefined !== this.rejectInitialDocument))) goto L_68;
  this.rejectInitialDocument(t);
  this.rejectInitialDocument = undefined;
  this.resolveInitialDocument = undefined;
  undefined;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t
// closure: this
function {
  return this.handleEditorChange(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t
// closure: this
function {
  return this.handlePresenceChange(t);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=402B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t
// closure: this, o
function {
  if (!(!this.disposed)) goto L_191;
  if (!(this.acceptSynchronizationState(t))) goto L_191;
  if (!((undefined === this.controller))) goto L_e8;
  goto L_191;
  // [栈深重同步 1 -> 0]
  this.controller.handleEditorEvent({kind: o.EditorEventKind.SYNCHRONIZATION, change: undefined, presence: undefined, error: undefined, synchronization: t});
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=38B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t
// closure: this
function {
  return this.handlePersistenceChange(t);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=4 bc=684B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t
// locals: e, this
// closure: o
function {
  this = this;
  let e;
  if (!(("cached" !== this.source.documentSource))) goto L_132;
  goto L_187;
  // [栈深重同步 4 -> 3]
  null;
  {persistence: this.source.persistence, onPersistenceChange: function <atom:0>};
  e = this.options.createEditor({schema: o.EditorSchema.WRITING_BLOCKS_V1, initialState: t, debug: this.debug, onChange: function <atom:0>, onPresenceChange: function <atom:0>, onSynchronizationChange: function <atom:0>});
  if (((e.status !== o.EditorOpenStatus.OPENED))) goto L_224;
  if (!((undefined === e.engine))) goto L_287;
  if (!((e.error == null))) goto L_258;
  e.error;
  goto L_279;
  if (!((undefined.message == null))) goto L_283;
  undefined.message;
  throw new Error("Collaborative editor unavailable");
  return e.engine;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=416B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t
// locals: this
// closure: e
function {
  this = this;
  if ((this.disposed)) goto L_19f;
  if (((undefined === t))) goto L_19f;
  this.localParticipantId = t.userId;
  this.localDisplayName = t.displayName;
  if (!(e.isVersionAtLeast(191))) goto L_109;
  if (!((this.controller == null))) goto L_e2;
  this.controller;
  goto L_179;
  goto L_179;
  // [栈深重同步 1 -> 0]
  if (!((this.controller == null))) goto L_133;
  this.controller;
  goto L_179;
  undefined.setLocalUserId(t.userId);
  this.setLocalParticipant();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=138B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t
// closure: e
function {
  return (t.clientId.value === e.localClientId.value);
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=1 bc=352B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// locals: t, e, i, this
// closure: h
function {
  this = this;
  let i;
  let e;
  let t;
  t = this.currentEditor;
  if (((undefined === this.localDisplayName))) goto L_5b;
  if (!((undefined === t))) goto L_5e;
  return;
  e = t.presenceSnapshot();
  if (!((e.clients.find(function <atom:0>) == null))) goto L_d8;
  e.clients.find(function <atom:0>);
  goto L_f9;
  i = undefined.state;
  null;
  i;
  t.setLocalPresence({user: {name: this.localDisplayName, color: h}});
  return;
}

// fn <atom:0>  args=1 vars=4 closure=3 cpool=0 bc=1464B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t
// locals: i, s, this
// closure: a, e, o
function {
  this = this;
  let s;
  let i;
  if (!(this.disposed)) goto L_2d;
  return;
  if (!((undefined !== t.failure))) goto L_f1;
  if (!((undefined !== this.rejectInitialDocument))) goto L_f1;
  this.failInitialDocument(new Error(t.failure.message));
  if (!(this.currentState.optimistic)) goto L_27f;
  if (((t.state === a.MultiplayerConnectionState.IDLE))) goto L_27f;
  if (((t.state === a.MultiplayerConnectionState.CONNECTING))) goto L_27f;
  i = (t.state === a.MultiplayerConnectionState.SYNCHRONIZING);
  if (!((this.currentEditor == null))) goto L_2aa;
  this.currentEditor;
  goto L_2ce;
  s = undefined.snapshot();
  if (!(e.isVersionAtLeast(110))) goto L_375;
  if (!((s == null))) goto L_306;
  s;
  goto L_327;
  if (!((undefined !== undefined.synchronization))) goto L_375;
  this.acceptSynchronizationState(s.synchronization);
  if ((i)) goto L_3e9;
  if (((undefined === s))) goto L_469;
  if (!((s == null))) goto L_479;
  s;
  goto L_49a;
  if (!((undefined.history == null))) goto L_4e2;
  undefined.history;
  if (!((t.failure == null))) goto L_511;
  t.failure;
  goto L_532;
  if (!((undefined === t.persistence))) goto L_587;
  goto L_5af;
  // [栈深重同步 4 -> 3]
  null;
  {persistence: t.persistence};
  this.updateState({synchronized: t.synchronized, canEdit: t.canEdit, optimistic: i, schemaCompatible: (s.status === o.EditorSnapshotStatus.EDITABLE), history: this.currentState.history, error: undefined.message, failure: t.failure});
  return;
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=488B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t
// locals: i, t#1, this
// closure: o, e
function {
  this = this;
  let i;
  if (!(this.disposed)) goto L_2b;
  return undefined; // async
  i = this.editor;
  this.currentEditor = this.openEditor({kind: o.EditorInitialStateKind.UPDATE, update: t});
  if (!(e.isVersionAtLeast(110))) goto L_197;
  let t#1;
  t#1 = this.currentEditor.snapshot().synchronization;
  if (!((undefined !== t#1))) goto L_196;
  this.acceptSynchronizationState(t#1);
  this.setLocalParticipant();
  (await i.close());
  return undefined; // async
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=630B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t
// locals: this
// closure: e, o
function {
  this = this;
  if ((this.disposed)) goto L_275;
  if (!(e.isVersionAtLeast(110))) goto L_c5;
  if (!((undefined !== t.synchronization))) goto L_c5;
  this.acceptSynchronizationState(t.synchronization);
  if (!((this.controller == null))) goto L_f1;
  this.controller;
  goto L_172;
  undefined.handleEditorEvent({kind: o.EditorEventKind.CHANGE, change: t, presence: undefined, error: undefined});
  this.updateState({history: t.history, schemaCompatible: (t.status === o.EditorSnapshotStatus.EDITABLE)});
  this.options.onChange(t);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=215B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t
// locals: this
function {
  this = this;
  if (!(!(t.sequence < this.synchronizationSequence))) goto L_d6;
  this.synchronizationSequence = t.sequence;
  null;
  this.currentState;
  this.currentState = {localEditsSynced: t.localEditsSynced};
  return true;
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=617B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t
// locals: this
// closure: e, o
function {
  this = this;
  if ((this.disposed)) goto L_268;
  if (!(e.isVersionAtLeast(185))) goto L_119;
  if (!((undefined !== this.currentEditor))) goto L_119;
  if (!((this.controller == null))) goto L_af;
  this.controller;
  goto L_119;
  undefined.setFacepilePresence(this.currentEditor.presenceSnapshot());
  if (!((this.debug == null))) goto L_144;
  this.debug;
  goto L_173;
  undefined.record("session", "presence", t);
  if (!((this.controller == null))) goto L_19f;
  this.controller;
  goto L_220;
  undefined.handleEditorEvent({kind: o.EditorEventKind.PRESENCE_CHANGE, change: undefined, presence: t, error: undefined});
  this.options.onPresenceChange(t);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=612B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t
// locals: this
// closure: o
function {
  this = this;
  if (!(this.disposed)) goto L_4b;
  if ((!t.closed)) goto L_263;
  null;
  this.currentState;
  if (!(!this.disposed)) goto L_111;
  if (!(this.currentState.schemaCompatible)) goto L_111;
  this.currentState = {persistence: t, canEdit: t.canEdit};
  if ((this.disposed)) goto L_1fa;
  if (!((this.controller == null))) goto L_173;
  this.controller;
  goto L_1fa;
  undefined.handleEditorEvent({kind: o.EditorEventKind.PERSISTENCE, change: undefined, presence: undefined, persistence: t, error: undefined});
  this.options.onStateChange(this.currentState);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=464B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: t
// locals: this
function {
  this = this;
  if ((this.disposed)) goto L_1cf;
  null;
  this.currentState;
  null;
  t;
  this.currentState = {};
  if ((this.currentState.schemaCompatible)) goto L_eb;
  null;
  this.currentState;
  this.currentState = {canEdit: false, optimistic: false};
  {canEdit: false, optimistic: false};
  if (!((this.debug == null))) goto L_116;
  this.debug;
  goto L_166;
  undefined.record("session", "state", this.currentState);
  this.options.onStateChange(this.currentState);
  return;
}

// fn <atom:0>  args=3 vars=18 closure=0 cpool=31 bc=472B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// args: require, module, exports
// locals: t, e, i, o, s, r, n, c, a, d, h, l, BrowserMultiplayerSession, <class_fields_init>, BrowserMultiplayerSession#1
function {
  l = function l;
  let BrowserMultiplayerSession#1;
  let h;
  let d;
  let a;
  let c;
  let n;
  let r;
  let s;
  let o;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.BrowserMultiplayerSession = undefined;
  t = require("valdi_core/src/CancelablePromise");
  e = require("valdi_core/src/CompilerIntrinsics");
  i = require("collaborative_editor/src/DocumentPersistenceTypes");
  o = require("collaborative_editor/src/EditorTypes");
  s = require("./BrowserCollaborativeEditorEngine");
  r = require("./BrowserMultiplayerConnectionService");
  n = require("./InitialWritingBlockUpdate");
  c = require("./MultiplayerSessionController");
  a = require("./MultiplayerSessionTypes");
  d = require("./MultiplayerProtocol");
  h = "#6366f1";
  let BrowserMultiplayerSession;
  let <class_fields_init>;
  class BrowserMultiplayerSession extends undefined { ... }
  <proto:BrowserMultiplayerSession>.editor = function <atom:0>;
  <proto:BrowserMultiplayerSession>.waitForInitialDocument = function <atom:0>;
  <proto:BrowserMultiplayerSession>.state = function <atom:0>;
  <proto:BrowserMultiplayerSession>.participants = function <atom:0>;
  <proto:BrowserMultiplayerSession>.bindServerDocument = function <atom:0>;
  <proto:BrowserMultiplayerSession>.getFacepileData = function <atom:0>;
  <proto:BrowserMultiplayerSession>.refreshFacepileData = function <atom:0>;
  <proto:BrowserMultiplayerSession>.connect = function <atom:0>;
  <proto:BrowserMultiplayerSession>.ensureController = function <atom:0>;
  <proto:BrowserMultiplayerSession>.reportActivity = function <atom:0>;
  <proto:BrowserMultiplayerSession>.suspendConnection = function <atom:0>;
  <proto:BrowserMultiplayerSession>.flushLocalWrites = function <atom:0>;
  <proto:BrowserMultiplayerSession>.requestCheckpointAsync = function <atom:0>;
  <proto:BrowserMultiplayerSession>.refreshFromStore = function <atom:0>;
  <proto:BrowserMultiplayerSession>.losslessCheckpoint = function <atom:0>;
  <proto:BrowserMultiplayerSession>.close = function <atom:0>;
  <proto:BrowserMultiplayerSession>.createController = function <atom:0>;
  <proto:BrowserMultiplayerSession>.initializeDocument = function <atom:0>;
  <proto:BrowserMultiplayerSession>.failInitialDocument = function <atom:0>;
  <proto:BrowserMultiplayerSession>.openEditor = function <atom:0>;
  <proto:BrowserMultiplayerSession>.setAuthenticatedParticipant = function <atom:0>;
  <proto:BrowserMultiplayerSession>.setLocalParticipant = function <atom:0>;
  <proto:BrowserMultiplayerSession>.handleConnectionState = function <atom:0>;
  <proto:BrowserMultiplayerSession>.replaceEditor = function <atom:0>;
  <proto:BrowserMultiplayerSession>.handleEditorChange = function <atom:0>;
  <proto:BrowserMultiplayerSession>.acceptSynchronizationState = function <atom:0>;
  <proto:BrowserMultiplayerSession>.handlePresenceChange = function <atom:0>;
  <proto:BrowserMultiplayerSession>.handlePersistenceChange = function <atom:0>;
  <proto:BrowserMultiplayerSession>.updateState = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:BrowserMultiplayerSession>;
  BrowserMultiplayerSession = function <atom:0>;
  // close_loc <class_fields_init>
  BrowserMultiplayerSession#1 = function <atom:0>;
  exports.BrowserMultiplayerSession = BrowserMultiplayerSession#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=chatgpt_multiplayer/src/BrowserMultiplayerSession
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
