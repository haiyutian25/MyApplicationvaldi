// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=62B file=collaborative_editor/src/SynchronousEditorSession
// args: e, t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.core = e;
  this.mutations = t;
  this.mutating = false;
  this.closing = false;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=collaborative_editor/src/SynchronousEditorSession
// locals: this
function {
  this = this;
  return this.core.persistence;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=81B file=collaborative_editor/src/SynchronousEditorSession
// locals: this
function {
  this = this;
  if (!((this.mutations == null))) goto L_2c;
  this.mutations;
  goto L_50;
  undefined.close();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=206B file=collaborative_editor/src/SynchronousEditorSession
// closure: this, e
function {
  if (!((undefined === this.mutations))) goto L_35;
  throw new Error("This editor has no pending document mutations");
  return {result: this.mutations.apply(e), snapshot: this.core.snapshot()};
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=41B file=collaborative_editor/src/SynchronousEditorSession
// args: e
// locals: this
function {
  this = this;
  return this.mutate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=237B file=collaborative_editor/src/SynchronousEditorSession
// args: e
// locals: t, e#1, this
function {
  this = this;
  if (!(this.closing)) goto L_35;
  throw new Error("The editor is closing or closed");
  try { // catch -> L_3e
  return e();
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_ec
  let e#1;
  if (!((t instanceof Error))) goto L_7a;
  goto L_81;
  // [栈深重同步 3 -> 2]
  e#1 = new Error(String(t));
  if (!((t instanceof Error))) goto L_e7;
  if (!((undefined !== t.stack))) goto L_e7;
  e#1.stack = t.stack;
  t.stack;
  throw e#1;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=96B file=collaborative_editor/src/SynchronousEditorSession
// closure: this, e
function {
  if (!(this.mutating)) goto L_33;
  throw new Error("A synchronous editor transaction is already active");
  this.mutating = true;
  try { // catch -> L_4d
  // gosub (finally 块) 83
  return e();
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 83
  throw <?>;
  this.mutating = false;
  // ret (finally 块) 
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=41B file=collaborative_editor/src/SynchronousEditorSession
// args: e
// locals: this
function {
  this = this;
  return this.read(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=70B file=collaborative_editor/src/SynchronousEditorSession
// closure: this
function {
  return this.core.snapshot();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=41B file=collaborative_editor/src/SynchronousEditorSession
// locals: this
function {
  this = this;
  return this.read(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=153B file=collaborative_editor/src/SynchronousEditorSession
// closure: this, e
function {
  return {result: this.core.applyLocalEdits(e), snapshot: this.core.snapshot()};
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=41B file=collaborative_editor/src/SynchronousEditorSession
// args: e
// locals: this
function {
  this = this;
  return this.mutate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=153B file=collaborative_editor/src/SynchronousEditorSession
// closure: this, e
function {
  return {result: this.core.applyRemoteUpdate(e), snapshot: this.core.snapshot()};
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=41B file=collaborative_editor/src/SynchronousEditorSession
// args: e
// locals: this
function {
  this = this;
  return this.mutate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=153B file=collaborative_editor/src/SynchronousEditorSession
// closure: this, e
function {
  return {result: this.core.undo(e), snapshot: this.core.snapshot()};
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=41B file=collaborative_editor/src/SynchronousEditorSession
// args: e
// locals: this
function {
  this = this;
  return this.mutate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=153B file=collaborative_editor/src/SynchronousEditorSession
// closure: this, e
function {
  return {result: this.core.redo(e), snapshot: this.core.snapshot()};
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=41B file=collaborative_editor/src/SynchronousEditorSession
// args: e
// locals: this
function {
  this = this;
  return this.mutate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=70B file=collaborative_editor/src/SynchronousEditorSession
// closure: this
function {
  return this.core.syncState();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=41B file=collaborative_editor/src/SynchronousEditorSession
// locals: this
function {
  this = this;
  return this.read(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=70B file=collaborative_editor/src/SynchronousEditorSession
// closure: this
function {
  return this.core.encodeFullState();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=41B file=collaborative_editor/src/SynchronousEditorSession
// locals: this
function {
  this = this;
  return this.read(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=collaborative_editor/src/SynchronousEditorSession
// closure: this, e
function {
  return this.core.encodeUpdateSince(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=41B file=collaborative_editor/src/SynchronousEditorSession
// args: e
// locals: this
function {
  this = this;
  return this.read(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=72B file=collaborative_editor/src/SynchronousEditorSession
// closure: this, e, t
function {
  return this.core.prepareSynchronization(e, t);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=1 bc=41B file=collaborative_editor/src/SynchronousEditorSession
// args: e, t
// locals: this
function {
  this = this;
  return this.mutate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=collaborative_editor/src/SynchronousEditorSession
// closure: this, e
function {
  return this.core.applyAcknowledgment(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=41B file=collaborative_editor/src/SynchronousEditorSession
// args: e
// locals: this
function {
  this = this;
  return this.mutate(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=collaborative_editor/src/SynchronousEditorSession
// closure: this, e
function {
  return this.core.createAnchor(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=41B file=collaborative_editor/src/SynchronousEditorSession
// args: e
// locals: this
function {
  this = this;
  return this.read(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=collaborative_editor/src/SynchronousEditorSession
// closure: this, e
function {
  return this.core.resolveAnchor(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=41B file=collaborative_editor/src/SynchronousEditorSession
// args: e
// locals: this
function {
  this = this;
  return this.read(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=collaborative_editor/src/SynchronousEditorSession
// closure: this, e
function {
  return this.core.publishSelection(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=41B file=collaborative_editor/src/SynchronousEditorSession
// args: e
// locals: this
function {
  this = this;
  return this.read(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=collaborative_editor/src/SynchronousEditorSession
// closure: this, e
function {
  return this.core.resolveSelection(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=41B file=collaborative_editor/src/SynchronousEditorSession
// args: e
// locals: this
function {
  this = this;
  return this.read(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=collaborative_editor/src/SynchronousEditorSession
// closure: this, e
function {
  return this.core.setLocalPresence(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=41B file=collaborative_editor/src/SynchronousEditorSession
// args: e
// locals: this
function {
  this = this;
  return this.read(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=70B file=collaborative_editor/src/SynchronousEditorSession
// closure: this
function {
  return this.core.refreshLocalPresence();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=41B file=collaborative_editor/src/SynchronousEditorSession
// locals: this
function {
  this = this;
  return this.read(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=collaborative_editor/src/SynchronousEditorSession
// closure: this, e
function {
  return this.core.applyRemotePresence(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=41B file=collaborative_editor/src/SynchronousEditorSession
// args: e
// locals: this
function {
  this = this;
  return this.read(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=71B file=collaborative_editor/src/SynchronousEditorSession
// closure: this, e
function {
  return this.core.removeRemotePresence(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=41B file=collaborative_editor/src/SynchronousEditorSession
// args: e
// locals: this
function {
  this = this;
  return this.read(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=70B file=collaborative_editor/src/SynchronousEditorSession
// closure: this
function {
  return this.core.presenceSnapshot();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=41B file=collaborative_editor/src/SynchronousEditorSession
// locals: this
function {
  this = this;
  return this.read(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=70B file=collaborative_editor/src/SynchronousEditorSession
// closure: this
function {
  return this.core.close();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=262B file=collaborative_editor/src/SynchronousEditorSession
// locals: this
function {
  this = this;
  if (((undefined !== this.closeResult))) goto L_e2;
  this.closing = true;
  if (!((this.mutations == null))) goto L_63;
  this.mutations;
  goto L_87;
  undefined.close();
  this.closeResult = Promise.resolve().then(function <atom:0>);
  Promise.resolve().then(function <atom:0>);
  return this.closeResult;
}

// fn r  args=2 vars=2 closure=1 cpool=0 bc=7B file=collaborative_editor/src/SynchronousEditorSession
// args: e, t
// closure: n
function {
  return n(e, t, undefined);   // tail call
}

// fn o  args=4 vars=4 closure=1 cpool=0 bc=19B file=collaborative_editor/src/SynchronousEditorSession
// args: e, t, r, o
// closure: n
function {
  return n(e, t, {persistence: r, host: o});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=99B file=collaborative_editor/src/SynchronousEditorSession
// args: t
// closure: s, e
function {
  return s({kind: e.EditorEventKind.CHANGE, change: t, presence: undefined, error: undefined});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=99B file=collaborative_editor/src/SynchronousEditorSession
// args: t
// closure: s, e
function {
  return s({kind: e.EditorEventKind.PRESENCE_CHANGE, change: undefined, presence: t, error: undefined});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=104B file=collaborative_editor/src/SynchronousEditorSession
// args: e
// closure: i
function {
  if (!((undefined === i))) goto L_3f;
  return Promise.reject(new Error("The editor has not opened"));
  return i.request(e);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=105B file=collaborative_editor/src/SynchronousEditorSession
// args: t
// closure: s, e
function {
  return s({kind: e.EditorEventKind.PERSISTENCE, change: undefined, presence: undefined, error: undefined, persistence: t});   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=105B file=collaborative_editor/src/SynchronousEditorSession
// args: t
// closure: s, e
function {
  return s({kind: e.EditorEventKind.SYNCHRONIZATION, change: undefined, presence: undefined, error: undefined, synchronization: t});   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=55B file=collaborative_editor/src/SynchronousEditorSession
function {
  return Promise.reject(new Error("The editor did not open"));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=42B file=collaborative_editor/src/SynchronousEditorSession
// closure: a, t
function {
  return a.applyRemoteUpdate(t);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=1 bc=351B file=collaborative_editor/src/SynchronousEditorSession
// args: e
// locals: t
// closure: a, i
function {
  let t;
  if (!((undefined === i))) goto L_41;
  return Promise.reject(new Error("This editor has no native mutation host"));   // tail call
  t = {yjs: {encoding: e.yjs.encoding, bytes: new Uint8Array(e.yjs.bytes)}};
  if (!((undefined !== a.receiveRemoteUpdate))) goto L_135;
  return a.receiveRemoteUpdate(t);
  return i.request(function <atom:0>);
}

// fn n  args=3 vars=7 closure=3 cpool=7 bc=783B file=collaborative_editor/src/SynchronousEditorSession
// args: r, o, n
// locals: s, i, c, a
// closure: e, t, SynchronousEditorSession
function {
  let a;
  let c;
  let i;
  let s;
  s = r.onEvent;
  if (!(("function" != typeof s))) goto L_4a;
  throw new Error("An editor event listener is required");
  i = undefined;
  if (!((undefined === n))) goto L_bc;
  goto L_f0;
  // [栈深重同步 3 -> 2]
  null;
  n.persistence;
  c = o({schema: r.schema, initialState: r.initialState, onChange: function <atom:0>, onPresenceChange: function <atom:0>, persistence: {applyDocumentMutation: function <atom:0>}, onPersistenceChange: function <atom:0>, onSynchronizationChange: function <atom:0>});
  a = c.engine;
  if (((c.status !== e.EditorOpenStatus.OPENED))) goto L_1a7;
  if (!((undefined === a))) goto L_1d1;
  null;
  c;
  return {engine: undefined, snapshot: undefined, presenceSnapshot: undefined, receiveRemoteUpdate: function <atom:0>};
  if (!((undefined !== n))) goto L_292;
  i = new t.SynchronousDocumentMutations(a.snapshot().revision.value, n.host);
  new t.SynchronousDocumentMutations(a.snapshot().revision.value, n.host);
  null;
  c;
  return {engine: new SynchronousEditorSession(a, i), snapshot: a.snapshot(), presenceSnapshot: a.presenceSnapshot(), receiveRemoteUpdate: function <atom:0>};
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=29 bc=364B file=collaborative_editor/src/SynchronousEditorSession
// args: require, module, exports
// locals: e, t, SynchronousEditorSession, <class_fields_init>, SynchronousEditorSession#1, r, o, n
function {
  r = function r;
  o = function o;
  n = function n;
  let SynchronousEditorSession#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.openSynchronousEditor = undefined;
  exports.openPersistentSynchronousEditor = undefined;
  e = require("./EditorTypes");
  t = require("./SynchronousDocumentMutations");
  let SynchronousEditorSession;
  let <class_fields_init>;
  class SynchronousEditorSession extends undefined { ... }
  <proto:SynchronousEditorSession>.persistence = function <atom:0>;
  <proto:SynchronousEditorSession>.cancelPendingDocumentMutations = function <atom:0>;
  <proto:SynchronousEditorSession>.applyDocumentMutation = function <atom:0>;
  <proto:SynchronousEditorSession>.read = function <atom:0>;
  <proto:SynchronousEditorSession>.mutate = function <atom:0>;
  <proto:SynchronousEditorSession>.snapshot = function <atom:0>;
  <proto:SynchronousEditorSession>.applyLocalEdits = function <atom:0>;
  <proto:SynchronousEditorSession>.applyRemoteUpdate = function <atom:0>;
  <proto:SynchronousEditorSession>.undo = function <atom:0>;
  <proto:SynchronousEditorSession>.redo = function <atom:0>;
  <proto:SynchronousEditorSession>.syncState = function <atom:0>;
  <proto:SynchronousEditorSession>.encodeFullState = function <atom:0>;
  <proto:SynchronousEditorSession>.encodeUpdateSince = function <atom:0>;
  <proto:SynchronousEditorSession>.prepareSynchronization = function <atom:0>;
  <proto:SynchronousEditorSession>.applyAcknowledgment = function <atom:0>;
  <proto:SynchronousEditorSession>.createAnchor = function <atom:0>;
  <proto:SynchronousEditorSession>.resolveAnchor = function <atom:0>;
  <proto:SynchronousEditorSession>.publishSelection = function <atom:0>;
  <proto:SynchronousEditorSession>.resolveSelection = function <atom:0>;
  <proto:SynchronousEditorSession>.setLocalPresence = function <atom:0>;
  <proto:SynchronousEditorSession>.refreshLocalPresence = function <atom:0>;
  <proto:SynchronousEditorSession>.applyRemotePresence = function <atom:0>;
  <proto:SynchronousEditorSession>.removeRemotePresence = function <atom:0>;
  <proto:SynchronousEditorSession>.presenceSnapshot = function <atom:0>;
  <proto:SynchronousEditorSession>.close = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SynchronousEditorSession>;
  SynchronousEditorSession = function <atom:0>;
  // close_loc <class_fields_init>
  SynchronousEditorSession#1 = function <atom:0>;
  exports.openSynchronousEditor = r;
  exports.openPersistentSynchronousEditor = o;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=collaborative_editor/src/SynchronousEditorSession
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
