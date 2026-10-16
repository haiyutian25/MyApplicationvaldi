// fn n  args=1 vars=1 closure=0 cpool=0 bc=324B file=collaborative_editor/src/storage/DocumentStorage
// args: e
function {
  if ((("" === e.userId.trim()))) goto L_94;
  if (!(("" === e.accountId.trim()))) goto L_a5;
  throw new Error("Document storage requires an authenticated user and account.");
  return "collaborative-documents-v1-".concat(encodeURIComponent(JSON.stringify([e.userId, e.accountId])));   // tail call
}

// fn r  args=1 vars=1 closure=0 cpool=0 bc=44B file=collaborative_editor/src/storage/DocumentStorage
// args: e
function {
  return new Uint8Array(e).buffer;
}

// fn o  args=1 vars=1 closure=1 cpool=0 bc=162B file=collaborative_editor/src/storage/DocumentStorage
// args: e
// closure: t
function {
  if (!((e !== t.DocumentAccess.View))) goto L_a1;
  if (!((e !== t.DocumentAccess.Edit))) goto L_a1;
  throw new Error("Document access has an unsupported value.");
  return;
}

// fn c  args=1 vars=1 closure=1 cpool=0 bc=314B file=collaborative_editor/src/storage/DocumentStorage
// args: e
// closure: t
function {
  if (!((e !== t.DocumentUpdateSource.Local))) goto L_139;
  if (!((e !== t.DocumentUpdateSource.Remote))) goto L_139;
  if (!((e !== t.DocumentUpdateSource.AuthoritativeSnapshot))) goto L_139;
  if (!((e !== t.DocumentUpdateSource.Acknowledgment))) goto L_139;
  throw new Error("Document update source has an unsupported value.");
  return;
}

// fn s  args=1 vars=1 closure=1 cpool=0 bc=89B file=collaborative_editor/src/storage/DocumentStorage
// args: t
// closure: e
function {
  if (!((t !== e.EditorSchema.WRITING_BLOCKS_V1))) goto L_58;
  throw new Error("Stored document has an unsupported schema.");
  return;
}

// fn i  args=1 vars=1 closure=0 cpool=0 bc=68B file=collaborative_editor/src/storage/DocumentStorage
// args: e
function {
  if ((!Number.isSafeInteger(e))) goto L_32;
  if (!((e < 1))) goto L_43;
  throw new Error("Document storage contains an invalid account generation.");
  return;
}

// fn u  args=1 vars=1 closure=0 cpool=0 bc=465B file=collaborative_editor/src/storage/DocumentStorage
// args: e
function {
  if ((!Number.isSafeInteger(e.checkpointVersion))) goto L_1be;
  if (((e.checkpointVersion < 1))) goto L_1be;
  if ((!Number.isSafeInteger(e.checkpointSequence))) goto L_1be;
  if (((e.checkpointSequence < 0))) goto L_1be;
  if ((!Number.isSafeInteger(e.headSequence))) goto L_1be;
  if (((e.headSequence < e.checkpointSequence))) goto L_1be;
  if (!(("boolean" != typeof e.hasLocalEdits))) goto L_1cf;
  throw new Error("Stored document recovery data is inconsistent.");
  return e;
}

// fn a  args=1 vars=3 closure=5 cpool=0 bc=1031B file=collaborative_editor/src/storage/DocumentStorage
// args: e
// locals: n, r
// closure: o, s, u, c, t
function {
  o(e.access);
  s(e.schema);
  u(e);
  if (!(("string" == typeof e.documentId))) goto L_240;
  if (!((e.checkpoint instanceof Uint8Array))) goto L_240;
  if (!((e.authoritativeCheckpoint instanceof Uint8Array))) goto L_240;
  if (((undefined === e.pendingLocalUpdate))) goto L_12c;
  if (!((e.pendingLocalUpdate instanceof Uint8Array))) goto L_240;
  if (((undefined === e.savedSnapshot))) goto L_183;
  if (!((e.savedSnapshot instanceof Uint8Array))) goto L_240;
  if (!(((undefined === e.pendingLocalUpdate) == (undefined === e.savedSnapshot)))) goto L_240;
  if (!(!(e.journal.length === (e.headSequence - e.checkpointSequence)))) goto L_252;
  throw new Error("Stored document recovery data is inconsistent.");
  let n;
  n = 0;
  if (!((n < e.journal.length))) goto L_405;
  let r;
  r = e.journal[n];
  c(r.source);
  if (((r.sequence !== ((e.checkpointSequence + n) + 1)))) goto L_3e9;
  if ((!(r.bytes instanceof Uint8Array))) goto L_3e9;
  if (!((r.source === t.DocumentUpdateSource.Local))) goto L_3fa;
  if (!(!e.hasLocalEdits)) goto L_3fa;
  throw new Error("Stored document update journal is incomplete.");
  n = <n_new>;
  (n++);
  goto L_257;
  return e;
}

// fn p  args=2 vars=2 closure=0 cpool=0 bc=141B file=collaborative_editor/src/storage/DocumentStorage
// args: e, t
function {
  if ((!Number.isSafeInteger(t))) goto L_7b;
  if (((t < e.checkpointSequence))) goto L_7b;
  if (!((t > e.headSequence))) goto L_8c;
  throw new Error("A document checkpoint must cover an existing journal prefix.");
  return;
}

// fn h  args=1 vars=2 closure=0 cpool=0 bc=73B file=collaborative_editor/src/storage/DocumentStorage
// args: e
// locals: t
function {
  let t;
  t = (e + 1);
  if (!(!Number.isSafeInteger(t))) goto L_45;
  throw new Error("Document storage sequence is exhausted.");
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=58B file=collaborative_editor/src/storage/DocumentStorage
// args: e
function {
  e.Open = 0;
  e[0] = "Open";
  e.Closing = 1;
  e[1] = "Closing";
  e.Clearing = 2;
  e[2] = "Clearing";
  return;
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=111B file=collaborative_editor/src/storage/DocumentStorage
// locals: this
// closure: <class_fields_init>, d
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.pending = Promise.resolve();
  this.state = d.Open;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=collaborative_editor/src/storage/DocumentStorage
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=51B file=collaborative_editor/src/storage/DocumentStorage
// args: e
// closure: this
function {
  if (!((this.failure == null))) goto L_29;
  this.failure;
  this.failure = e;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=2 bc=260B file=collaborative_editor/src/storage/DocumentStorage
// args: e
// locals: t, this
// closure: d
function {
  this = this;
  let t;
  if (!((this.state !== d.Open))) goto L_83;
  return Promise.reject(new Error("Document store has been closed."));   // tail call
  t = this.pending.then(e);
  this.pending = t.then(function <atom:0>, function <atom:0>);
  return t;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=61B file=collaborative_editor/src/storage/DocumentStorage
// locals: e
// closure: this
function {
  let e;
  e = this.failure;
  this.failure = undefined;
  if (!((undefined !== e))) goto L_3c;
  throw e;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=collaborative_editor/src/storage/DocumentStorage
function {
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=collaborative_editor/src/storage/DocumentStorage
function {
  return;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=3 bc=261B file=collaborative_editor/src/storage/DocumentStorage
// locals: e, this
// closure: d
function {
  this = this;
  let e;
  if (!((this.state !== d.Open))) goto L_83;
  return Promise.reject(new Error("Document store has been closed."));   // tail call
  e = this.pending.then(function <atom:0>);
  this.pending = e.then(function <atom:0>, function <atom:0>);
  return e;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=74B file=collaborative_editor/src/storage/DocumentStorage
// args: e
// locals: this
// closure: d
function {
  this = this;
  return this.stop(d.Closing, e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=74B file=collaborative_editor/src/storage/DocumentStorage
// args: e
// locals: this
// closure: d
function {
  this = this;
  return this.stop(d.Clearing, e);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=337B file=collaborative_editor/src/storage/DocumentStorage
// args: e, t
// locals: this
// closure: d
function {
  this = this;
  if (!((undefined !== this.shutdown))) goto L_d2;
  if (!((this.state !== e))) goto L_af;
  if (!((e !== d.Closing))) goto L_af;
  return Promise.reject(new Error("Document store has already started closing."));
  return this.shutdown;
  this.state = e;
  this.shutdown = this.pending.then(t);
  return this.shutdown;
}

// fn <atom:0>  args=3 vars=19 closure=0 cpool=17 bc=451B file=collaborative_editor/src/storage/DocumentStorage
// args: require, module, exports
// locals: e, t, n, r, o, c, s, i, u, a, p, h, d, DocumentStoreQueue, <class_fields_init>, DocumentStoreQueue#1
function {
  n = function n;
  r = function r;
  o = function o;
  c = function c;
  s = function s;
  i = function i;
  u = function u;
  a = function a;
  p = function p;
  h = function h;
  let DocumentStoreQueue#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.documentStoreName = undefined;
  exports.copyDocumentBytes = undefined;
  exports.requireDocumentAccess = undefined;
  exports.requireDocumentSource = undefined;
  exports.requireDocumentSchema = undefined;
  exports.requireStoreGeneration = undefined;
  exports.requireDocumentStorageState = undefined;
  exports.requireStoredDocument = undefined;
  exports.requireCheckpointSequence = undefined;
  exports.nextDocumentSequence = undefined;
  exports.DocumentStoreQueue = undefined;
  e = require("../EditorTypes");
  t = require("../DocumentPersistenceTypes");
  exports.documentStoreName = n;
  exports.copyDocumentBytes = r;
  exports.requireDocumentAccess = o;
  exports.requireDocumentSource = c;
  exports.requireDocumentSchema = s;
  exports.requireStoreGeneration = i;
  exports.requireDocumentStorageState = u;
  exports.requireStoredDocument = a;
  exports.requireCheckpointSequence = p;
  exports.nextDocumentSequence = h;
  if ((d)) goto L_171;
  d = {};
  function <atom:0>({});
  let DocumentStoreQueue;
  let <class_fields_init>;
  class DocumentStoreQueue extends undefined { ... }
  <proto:DocumentStoreQueue>.run = function <atom:0>;
  <proto:DocumentStoreQueue>.flush = function <atom:0>;
  <proto:DocumentStoreQueue>.close = function <atom:0>;
  <proto:DocumentStoreQueue>.clear = function <atom:0>;
  <proto:DocumentStoreQueue>.stop = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DocumentStoreQueue>;
  DocumentStoreQueue = function <atom:0>;
  // close_loc <class_fields_init>
  DocumentStoreQueue#1 = function <atom:0>;
  exports.DocumentStoreQueue = DocumentStoreQueue#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=collaborative_editor/src/storage/DocumentStorage
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
