// fn <atom:0>  args=2 vars=3 closure=2 cpool=0 bc=88B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: e, t
// locals: this
// closure: <class_fields_init>, n
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.database = e;
  this.generation = t;
  this.queue = new n.DocumentStoreQueue();
  return;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=45B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: t
// closure: this, a, e
function {
  (await this.requireGeneration(t));
  return a(t, e); // async
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=1 bc=72B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// closure: this, a, e
function {
  return this.database.transaction(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=74B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: e
// locals: this
// closure: a
function {
  this = this;
  return this.queue.run(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=7 cpool=0 bc=236B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: e
// locals: s, u
// closure: n, i, r, a, t, o, c
function {
  let u;
  let s;
  n.requireDocumentAccess(i);
  n.requireDocumentSchema(r);
  s = (await a(e, t));
  if (!((undefined !== s))) goto L_6b;
  return s; // async
  (await e.documentQueries.initializeDocument(t, r, i, o, o, c, c, 0, null));
  u = (await a(e, t));
  if (!((undefined === u))) goto L_e8;
  throw new Error("Document was not initialized.");
  return u; // async
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=1 bc=41B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// closure: n, i, r, a, t, o, c, this
function {
  return this.write(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=7 closure=2 cpool=1 bc=330B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: e
// locals: t, r, i, o, c, this
// closure: n, a
function {
  this = this;
  let c;
  let o;
  let i;
  let r;
  let t;
  if (((undefined === undefined))) goto L_84;
  t = <to_object>(undefined).documentId;
  r = <to_object>(undefined).schema;
  i = <to_object>(undefined).access;
  <to_object>(undefined);
  goto L_88;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_17;
  // [栈深重同步 1 -> 0]
  o = n.copyDocumentBytes(e.bytes);
  c = new Uint8Array([0, 0]).buffer;
  return this.queue.run(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=8 cpool=0 bc=267B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: t
// locals: r
// closure: n, o, a, i, e, d, m, u
function {
  let r;
  n.requireDocumentSchema(o);
  if (!((undefined !== (await a(t, i))))) goto L_46;
  throw new Error("The draft already exists.");
  (await t.documentQueries.initializeDocument(i, o, e.DocumentAccess.Edit, d, m, d, m, 1, u));
  r = (await a(t, i));
  if (!((undefined === r))) goto L_107;
  throw new Error("Draft was not initialized.");
  return r; // async
}

// fn <atom:0>  args=0 vars=0 closure=9 cpool=1 bc=41B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// closure: n, o, a, i, e, d, m, u, this
function {
  return this.write(function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=10 closure=3 cpool=1 bc=403B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: t, r
// locals: i, o, c, s, u, d, m, this
// closure: n, a, e
function {
  this = this;
  let m;
  let d;
  let u;
  let s;
  let c;
  let o;
  let i;
  if (((undefined === undefined))) goto L_b0;
  i = <to_object>(undefined).documentId;
  o = <to_object>(undefined).schema;
  c = <to_object>(undefined).fileName;
  s = <to_object>(undefined).directoryId;
  <to_object>(undefined);
  goto L_b5;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_20;
  // [栈深重同步 1 -> 0]
  u = JSON.stringify({file_name: c, directory_id: s});
  d = n.copyDocumentBytes(r);
  m = new Uint8Array([0, 0]).buffer;
  return this.queue.run(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=133B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: e
// closure: c
function {
  if (!((e.creation_request == null))) goto L_51;
  e.creation_request;
  null;
  c("");
  if (!((e.server_document_id == null))) goto L_7f;
  e.server_document_id;
  return {documentId: e.document_id, serverDocumentId: undefined};
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=1 bc=150B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: e
// closure: c, this
function {
  (await this.requireGeneration(e));
  return (await e.documentQueries.selectDrafts()).map(function <atom:0>); // async
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=72B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// closure: c, this
function {
  return this.database.transaction(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=74B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// locals: this
// closure: c
function {
  this = this;
  return this.queue.run(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=341B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: n
// locals: r
// closure: a, e, t
function {
  let r;
  r = (await a(n, e));
  if (((undefined === r))) goto L_38;
  if (!((undefined === r.fileName))) goto L_49;
  throw new Error("The local draft is not available.");
  if (!((undefined !== r.serverDocumentId))) goto L_96;
  return r.serverDocumentId; // async
  if (!((0 === (await n.documentQueries.selectDocumentState(t)).length))) goto L_153;
  (await n.documentQueries.bindDocument(t, r.documentId));
  goto L_154;
  // [栈深重同步 1 -> 0]
  return undefined; // async
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=1 bc=39B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// closure: a, e, t, this
function {
  return this.write(function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=1 bc=74B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: e, t
// locals: this
// closure: a
function {
  this = this;
  return this.queue.run(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=43B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: e, t, n
// locals: this
function {
  this = this;
  return this.appendUpdate(e, t, n, undefined);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=255B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: t, n, r
// locals: this
// closure: e
function {
  this = this;
  if (!((r === e.DocumentAccess.View))) goto L_b6;
  goto L_fb;
  // [栈深重同步 5 -> 4]
  return this.appendUpdate(t, n, e.DocumentUpdateSource.Remote, r);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=0 bc=159B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: r
// locals: i
// closure: n, t, o, e
function {
  let i;
  n.requireDocumentAccess(t);
  i = (await o(r, e));
  (await r.documentQueries.updateAccess(t, i.documentId));
  return undefined; // async
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=1 bc=41B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// closure: n, t, o, e, this
function {
  return this.write(function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=1 bc=74B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: e, t
// locals: this
// closure: n, o
function {
  this = this;
  return this.queue.run(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=9 cpool=0 bc=410B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: i
// locals: a
// closure: o, e, t, n, r, u, d, m, h
function {
  let a;
  a = (await o(i, e));
  if (!((a.checkpointVersion === t))) goto L_199;
  n.requireCheckpointSequence(a, r);
  n.nextDocumentSequence(a.checkpointVersion);
  (await i.documentQueries.replaceCheckpoint(u, d, m, h, r, a.documentId, t));
  (await i.documentQueries.pruneUpdates(a.documentId, r));
  return true; // async
}

// fn <atom:0>  args=0 vars=0 closure=10 cpool=1 bc=41B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// closure: o, e, t, n, r, u, d, m, h, this
function {
  return this.write(function <atom:0>);   // tail call
}

// fn <atom:0>  args=7 vars=12 closure=2 cpool=1 bc=250B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: e, t, r, i, a, c, s
// locals: u, d, m, h, this
// closure: o, n
function {
  this = this;
  let h;
  let m;
  let d;
  let u;
  u = n.copyDocumentBytes(i);
  d = n.copyDocumentBytes(a);
  m = n.copyDocumentBytes(c);
  h = n.copyDocumentBytes(s);
  return this.queue.run(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=72B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// locals: this
function {
  this = this;
  return this.queue.flush();   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=290B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: e
// closure: n, this
function {
  n.nextDocumentSequence(this.generation);
  (await e.documentQueries.invalidateStore());
  (await e.documentQueries.deleteUpdates());
  (await e.documentQueries.deleteDocuments());
  return undefined; // async
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=137B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// closure: n, this
function {
  try { // catch -> L_38
  (await this.write(function <atom:0>));
  <?>;
  // gosub (finally 块) 62
  undefined;
  goto L_87;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 62
  throw <?>;
  (await this.database.close());
  // ret (finally 块) 
  return undefined; // async
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=74B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// locals: this
// closure: n
function {
  this = this;
  return this.queue.clear(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=70B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// closure: this
function {
  return this.database.close();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=74B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// locals: this
function {
  this = this;
  return this.queue.close(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=7 cpool=0 bc=636B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: r
// locals: s, u
// closure: n, i, a, o, t, c, e
function {
  let u;
  let s;
  n.requireDocumentSource(i);
  if (!((undefined !== a))) goto L_5a;
  n.requireDocumentAccess(a);
  s = (await o(r, t));
  u = n.nextDocumentSequence(s.headSequence);
  (await r.documentQueries.insertUpdate(s.documentId, u, c, i));
  if ((s.hasLocalEdits)) goto L_1d5;
  if (!((i === e.DocumentUpdateSource.Local))) goto L_1da;
  goto L_1db;
  // [栈深重同步 4 -> 3]
  (await r.documentQueries.advanceHead(u, 0, s.documentId));
  if (!((undefined !== a))) goto L_277;
  (await r.documentQueries.updateAccess(a, s.documentId));
  return u; // async
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=1 bc=41B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// closure: n, i, a, o, t, c, e, this
function {
  return this.write(function <atom:0>);   // tail call
}

// fn <atom:0>  args=4 vars=6 closure=3 cpool=1 bc=116B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: t, r, i, a
// locals: c, this
// closure: n, o, e
function {
  this = this;
  let c;
  c = n.copyDocumentBytes(r);
  return this.queue.run(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=116B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: t
// closure: this, e
function {
  (await t.documentQueries.lockStore());
  (await this.requireGeneration(t));
  return e(t); // async
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=74B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: e
// locals: this
function {
  this = this;
  return this.database.transaction(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=60B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: e
// locals: this
// closure: i
function {
  this = this;
  if (!(((await i(e)) !== this.generation))) goto L_3a;
  throw new Error("Document store was cleared by another owner.");
  return undefined; // async
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=76B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: e
// closure: i
function {
  (await e.documentQueries.initializeStore());
  return i(e); // async
}

// fn r  args=1 vars=4 closure=4 cpool=1 bc=324B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: e
// locals: r, e#1, o
// closure: i, t, n, ClientSQLDocumentStore
function {
  let r;
  r = t.CollaborativeDocumentsDb.open("".concat(n.documentStoreName(e), ".sqlite"));
  try { // catch -> L_112
  let e#1;
  (await r.execute("PRAGMA synchronous = FULL", [], []));
  e#1 = (await r.transaction(function <atom:0>));
  return new ClientSQLDocumentStore(r, e#1); // async
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_143
  (await r.close());
  throw o;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn i  args=1 vars=3 closure=1 cpool=0 bc=192B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: e
// locals: t, r
// closure: n
function {
  let r;
  let t;
  t = (await e.documentQueries.selectStore());
  if (!((t[0] == null))) goto L_5b;
  t[0];
  goto L_7c;
  r = undefined.generation;
  if (!((undefined === r))) goto L_93;
  throw new Error("Document storage account metadata is missing.");
  n.requireStoreGeneration(r);
  return r; // async
}

// fn o  args=2 vars=5 closure=1 cpool=0 bc=482B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: e, t
// locals: r, i, o
// closure: n
function {
  let o;
  let i;
  let r;
  r = (await e.documentQueries.selectDocumentState(t));
  i = r[0];
  if (!((r.length > 1))) goto L_6f;
  throw new Error("Stored document identities are ambiguous.");
  if (!((undefined === i))) goto L_85;
  throw new Error("Document is not available offline.");
  if (!((0 !== i.has_local_edits))) goto L_e4;
  if (!((1 !== i.has_local_edits))) goto L_e4;
  throw new Error("Stored document recovery data is inconsistent.");
  o = {documentId: i.document_id, checkpointVersion: i.checkpoint_version, checkpointSequence: i.checkpoint_sequence, headSequence: i.head_sequence, hasLocalEdits: (1 === i.has_local_edits)};
  n.requireDocumentStorageState(o);
  return o; // async
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=186B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: e
function {
  if (!(!(e.update_bytes instanceof ArrayBuffer))) goto L_3a;
  throw new Error("Stored document update journal contains invalid bytes.");
  return {sequence: e.sequence, bytes: new Uint8Array(e.update_bytes), source: e.source};
}

// fn a  args=2 vars=7 closure=2 cpool=1 bc=1591B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: e, t
// locals: r, i, o, a, s
// closure: c, n
function {
  let s;
  let a;
  let o;
  let i;
  let r;
  r = (await e.documentQueries.selectDocument(t));
  i = r[0];
  if (!((r.length > 1))) goto L_75;
  throw new Error("Stored document identities are ambiguous.");
  if (!((undefined === i))) goto L_7e;
  return undefined; // async
  if (!((i.checkpoint instanceof ArrayBuffer))) goto L_1e3;
  if (!((i.authoritative_checkpoint instanceof ArrayBuffer))) goto L_1e3;
  if (((null == i.pending_local_update))) goto L_134;
  if (!((i.pending_local_update instanceof ArrayBuffer))) goto L_1e3;
  if (((null == i.saved_snapshot))) goto L_18f;
  if (!((i.saved_snapshot instanceof ArrayBuffer))) goto L_1e3;
  if (((0 === i.has_local_edits))) goto L_1e3;
  if (!(!(1 === i.has_local_edits))) goto L_1f5;
  throw new Error("Stored document recovery data is inconsistent.");
  o = (await e.documentQueries.selectUpdates(i.document_id));
  if (!((null == i.creation_request))) goto L_28c;
  goto L_2b2;
  // [栈深重同步 1 -> 0]
  a = c(i.creation_request);
  if (!((a == null))) goto L_2e8;
  a;
  goto L_309;
  if (!((a == null))) goto L_319;
  a;
  goto L_33a;
  if (!((i.server_document_id == null))) goto L_3bf;
  i.server_document_id;
  if (!((a == null))) goto L_374;
  a;
  goto L_395;
  if (!((undefined === undefined.fileName))) goto L_3be;
  goto L_3bf;
  // [栈深重同步 2 -> 1]
  if (!((null == i.pending_local_update))) goto L_4a5;
  goto L_4d2;
  // [栈深重同步 2 -> 1]
  if (!((null == i.saved_snapshot))) goto L_502;
  goto L_52f;
  // [栈深重同步 2 -> 1]
  s = {documentId: i.document_id, fileName: undefined.fileName, directoryId: undefined.directoryId, serverDocumentId: undefined, schema: i.schema_version, access: i.access, checkpoint: new Uint8Array(i.checkpoint), authoritativeCheckpoint: new Uint8Array(i.authoritative_checkpoint), pendingLocalUpdate: new Uint8Array(i.pending_local_update), savedSnapshot: new Uint8Array(i.saved_snapshot), checkpointVersion: i.checkpoint_version, checkpointSequence: i.checkpoint_sequence, headSequence: i.head_sequence, hasLocalEdits: (1 === i.has_local_edits), journal: o.map(function <atom:0>)};
  n.requireStoredDocument(s);
  return s; // async
}

// fn c  args=1 vars=2 closure=0 cpool=0 bc=305B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: e
// locals: t
function {
  try { // catch -> L_11b
  let t;
  t = JSON.parse(e);
  if ((("string" != typeof t.file_name))) goto L_b5;
  if (!((undefined !== t.directory_id))) goto L_c6;
  if (!(("string" != typeof t.directory_id))) goto L_c6;
  throw new Error("Invalid draft metadata");
  return {fileName: t.file_name, directoryId: t.directory_id};
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_130
  throw new Error("Stored draft metadata is invalid.");
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=3 vars=14 closure=0 cpool=21 bc=281B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// args: require, module, exports
// locals: e, t, n, ClientSQLDocumentStore, <class_fields_init>, ClientSQLDocumentStore#1, r, i, o, a, c
function {
  r = function r;
  i = function i;
  o = function o;
  a = function a;
  c = function c;
  let ClientSQLDocumentStore#1;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.openClientSQLDocumentStore = undefined;
  e = require("../DocumentPersistenceTypes");
  t = require("../sqlgen/CollaborativeDocumentsDb");
  n = require("./DocumentStorage");
  let ClientSQLDocumentStore;
  let <class_fields_init>;
  class ClientSQLDocumentStore extends undefined { ... }
  <proto:ClientSQLDocumentStore>.load = function <atom:0>;
  <proto:ClientSQLDocumentStore>.initialize = function <atom:0>;
  <proto:ClientSQLDocumentStore>.initializeDraft = function <atom:0>;
  <proto:ClientSQLDocumentStore>.listDrafts = function <atom:0>;
  <proto:ClientSQLDocumentStore>.bindServerDocument = function <atom:0>;
  <proto:ClientSQLDocumentStore>.append = function <atom:0>;
  <proto:ClientSQLDocumentStore>.acceptRemote = function <atom:0>;
  <proto:ClientSQLDocumentStore>.setAccess = function <atom:0>;
  <proto:ClientSQLDocumentStore>.checkpoint = function <atom:0>;
  <proto:ClientSQLDocumentStore>.flush = function <atom:0>;
  <proto:ClientSQLDocumentStore>.clear = function <atom:0>;
  <proto:ClientSQLDocumentStore>.close = function <atom:0>;
  <proto:ClientSQLDocumentStore>.appendUpdate = function <atom:0>;
  <proto:ClientSQLDocumentStore>.write = function <atom:0>;
  <proto:ClientSQLDocumentStore>.requireGeneration = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:ClientSQLDocumentStore>;
  ClientSQLDocumentStore = function <atom:0>;
  // close_loc <class_fields_init>
  ClientSQLDocumentStore#1 = function <atom:0>;
  exports.openClientSQLDocumentStore = r;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=collaborative_editor/src/storage/ClientSQLDocumentStore
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
