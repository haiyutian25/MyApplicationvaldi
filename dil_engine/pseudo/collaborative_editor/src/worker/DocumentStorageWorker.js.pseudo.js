// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=92B file=collaborative_editor/src/worker/DocumentStorageWorker
// args: e
// locals: r
// closure: require
function {
  let r;
  r = require("collaborative_editor/runtime_bundle/NativeEngine");
  return Promise.resolve(r.prepareDocumentRecovery(e));   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=92B file=collaborative_editor/src/worker/DocumentStorageWorker
// args: e
// locals: r
// closure: require
function {
  let r;
  r = require("collaborative_editor/runtime_bundle/NativeEngine");
  return Promise.resolve(r.prepareDocumentUpdate(e));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=87B file=collaborative_editor/src/worker/DocumentStorageWorker
// closure: r
function {
  if (!(r.isLoggingEnabled)) goto L_56;
  console.warn("Document cache cleanup failed after account exit");
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=86B file=collaborative_editor/src/worker/DocumentStorageWorker
// closure: r, l
function {
  if (!((l == null))) goto L_b;
  l;
  goto L_55;
  undefined.close().catch(function <atom:0>);
  return;
}

// fn <atom:0>  args=2 vars=9 closure=7 cpool=1 bc=1191B file=collaborative_editor/src/worker/DocumentStorageWorker
// args: n, s
// locals: u, d, l, m, e, r, v
// closure: r, e, o, c, a, i, t
function {
  let m;
  let l;
  let d;
  let u;
  if (!((undefined === e))) goto L_8f;
  throw new o.DocumentPersistenceFailure({kind: c.DocumentPersistenceErrorKind.HostUnavailable, message: "An active host account is required to cache this document."});
  u = a.createNativeEditorDebugCapture(s.documentId);
  if (!((u == null))) goto L_e2;
  u;
  goto L_106;
  d = undefined.retain();
  l = undefined;
  m = new i.ActiveDocumentAccount(e, function <atom:0>);
  try { // catch -> L_3d0
  let r;
  let e;
  m.requireActive();
  l = (await t.openClientSQLDocumentStore(n));
  (await t.openClientSQLDocumentStore(n));
  m.requireActive();
  e = (await l.initialize(s));
  if (!((u == null))) goto L_1f4;
  u;
  goto L_22b;
  undefined.record("storage", "row.saved", {stored: e});
  m.requireActive();
  r = (await l.acceptRemote(s.documentId, s.bytes, s.access));
  if (!((u == null))) goto L_2f0;
  u;
  goto L_39c;
  undefined.record("storage", "row.saved", {documentId: s.documentId, bytes: s.bytes, access: s.access, sequence: r});
  m.requireActive();
  <?>;
  // gosub (finally 块) 1064
  undefined;
  goto L_4a5;
  // [栈深重同步 0 -> 1]
  v = <?>;
  try { // catch -> L_422
  if (!((u == null))) goto L_3e2;
  u;
  goto L_41e;
  undefined.record("storage", "row.write.failed", {document: s, error: v});
  throw v;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 1064
  throw <?>;
  m.stop();
  try { // catch -> L_490
  if (!((l == null))) goto L_460;
  l;
  goto L_484;
  (await undefined.close());
  <?>;
  // gosub (finally 块) 1174
  undefined;
  goto L_4a4;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 1174
  throw <?>;
  if (!((d == null))) goto L_4a1;
  d;
  goto L_4a2;
  undefined();
  // ret (finally 块) 
  // ret (finally 块) 
  return undefined; // async
}

// fn <atom:0>  args=1 vars=5 closure=2 cpool=0 bc=359B file=collaborative_editor/src/worker/DocumentStorageWorker
// args: e
// locals: r, o, o#1, c
// closure: a, t
function {
  let o;
  let r;
  r = a.createNativeEditorDebugCapture();
  if (!((r == null))) goto L_37;
  r;
  goto L_5b;
  o = undefined.retain();
  try { // catch -> L_102
  let o#1;
  o#1 = (await t.openClientSQLDocumentStore(e));
  (await o#1.clear());
  if (!((r == null))) goto L_c2;
  r;
  goto L_f7;
  undefined.record("storage", "rows.cleared", {account: e});
  <?>;
  // gosub (finally 块) 343
  undefined;
  goto L_165;
  // [栈深重同步 0 -> 1]
  c = <?>;
  try { // catch -> L_151
  if (!((r == null))) goto L_113;
  r;
  goto L_14e;
  undefined.record("storage", "rows.clear.failed", {account: e, error: c});
  throw c;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 343
  throw <?>;
  if (!((o == null))) goto L_162;
  o;
  goto L_163;
  undefined();
  // ret (finally 块) 
  return undefined; // async
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=collaborative_editor/src/worker/DocumentStorageWorker
function {
  return;
}

// fn <atom:0>  args=1 vars=2 closure=6 cpool=5 bc=79B file=collaborative_editor/src/worker/DocumentStorageWorker
// args: e
// locals: t
// closure: require, r, o, c, a, i
function {
  let t;
  t = require("collaborative_editor/src/storage/ClientSQLDocumentStore");
  return {api: {prepare: function <atom:0>, prepareUpdate: function <atom:0>, cache: function <atom:0>, clear: function <atom:0>}, dispose: function <atom:0>};
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=collaborative_editor/src/worker/DocumentStorageWorker
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  return this;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=2 bc=371B file=collaborative_editor/src/worker/DocumentStorageWorker
// args: require, module, exports
// locals: e, r, t, o, c, i, a, n, DocumentStorageWorker, <class_fields_init>
function {
  let n;
  let a;
  let i;
  let c;
  let o;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DocumentStorageWorker = undefined;
  e = require("tslib");
  r = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("worker/src/WorkerServiceEntryPoint");
  o = require("../DocumentPersistenceFailure");
  c = require("../DocumentPersistenceTypes");
  i = require("./ActiveDocumentAccount");
  a = require("../NativeEditorDebugCapture");
  let DocumentStorageWorker;
  let <class_fields_init>;
  class DocumentStorageWorker extends t.WorkerServiceEntryPoint { ... }
  <proto:DocumentStorageWorker>.start = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DocumentStorageWorker>;
  DocumentStorageWorker = function <atom:0>;
  // close_loc <class_fields_init>
  n = function <atom:0>;
  exports.DocumentStorageWorker = n;
  n = e.__decorate([t.workerService("collaborative_editor", module)], n);
  exports.DocumentStorageWorker = e.__decorate([t.workerService("collaborative_editor", module)], n);
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=collaborative_editor/src/worker/DocumentStorageWorker
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
