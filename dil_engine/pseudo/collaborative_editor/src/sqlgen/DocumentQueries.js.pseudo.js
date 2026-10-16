// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=collaborative_editor/src/sqlgen/DocumentQueries
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.db = e;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=88B file=collaborative_editor/src/sqlgen/DocumentQueries
// locals: this
function {
  this = this;
  return this.db.execute("INSERT OR IGNORE INTO document_store(singleton, generation) VALUES (1, 1);", [], ["document_store"]);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=80B file=collaborative_editor/src/sqlgen/DocumentQueries
// locals: this
function {
  this = this;
  return this.db.query("SELECT * FROM document_store WHERE singleton = 1;", []);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=collaborative_editor/src/sqlgen/DocumentQueries
// closure: this
function {
  return this.selectStore();   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=83B file=collaborative_editor/src/sqlgen/DocumentQueries
// args: e
// locals: this
function {
  this = this;
  return this.db.watchQuery(["document_store"], function <atom:0>, e);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=88B file=collaborative_editor/src/sqlgen/DocumentQueries
// locals: this
function {
  this = this;
  return this.db.execute("UPDATE document_store SET generation = generation WHERE singleton = 1;", [], ["document_store"]);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=88B file=collaborative_editor/src/sqlgen/DocumentQueries
// locals: this
function {
  this = this;
  return this.db.execute("UPDATE document_store SET generation = generation + 1 WHERE singleton = 1;", [], ["document_store"]);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=82B file=collaborative_editor/src/sqlgen/DocumentQueries
// args: e
// locals: this
function {
  this = this;
  return this.db.query("SELECT * FROM document WHERE document_id = ? OR server_document_id = ?;", [e, e]);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=collaborative_editor/src/sqlgen/DocumentQueries
// closure: this, e
function {
  return this.selectDocument(e);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=1 bc=83B file=collaborative_editor/src/sqlgen/DocumentQueries
// args: e, t
// locals: this
function {
  this = this;
  return this.db.watchQuery(["document"], function <atom:0>, t);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=82B file=collaborative_editor/src/sqlgen/DocumentQueries
// args: e
// locals: this
function {
  this = this;
  return this.db.query("SELECT document_id, checkpoint_version, checkpoint_sequence, head_sequence, has_local_edits
FROM document WHERE document_id = ? OR server_document_id = ?;", [e, e]);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=collaborative_editor/src/sqlgen/DocumentQueries
// closure: this, e
function {
  return this.selectDocumentState(e);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=1 bc=83B file=collaborative_editor/src/sqlgen/DocumentQueries
// args: e, t
// locals: this
function {
  this = this;
  return this.db.watchQuery(["document"], function <atom:0>, t);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=80B file=collaborative_editor/src/sqlgen/DocumentQueries
// locals: this
function {
  this = this;
  return this.db.query("SELECT document_id, creation_request, server_document_id
FROM document WHERE creation_request IS NOT NULL ORDER BY document_id;", []);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=collaborative_editor/src/sqlgen/DocumentQueries
// closure: this
function {
  return this.selectDrafts();   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=1 bc=83B file=collaborative_editor/src/sqlgen/DocumentQueries
// args: e
// locals: this
function {
  this = this;
  return this.db.watchQuery(["document"], function <atom:0>, e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=81B file=collaborative_editor/src/sqlgen/DocumentQueries
// args: e
// locals: this
function {
  this = this;
  return this.db.query("SELECT * FROM document_update WHERE document_id = ? ORDER BY sequence;", [e]);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=collaborative_editor/src/sqlgen/DocumentQueries
// closure: this, e
function {
  return this.selectUpdates(e);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=1 bc=83B file=collaborative_editor/src/sqlgen/DocumentQueries
// args: e, t
// locals: this
function {
  this = this;
  return this.db.watchQuery(["document_update"], function <atom:0>, t);   // tail call
}

// fn <atom:0>  args=9 vars=10 closure=0 cpool=0 bc=107B file=collaborative_editor/src/sqlgen/DocumentQueries
// args: e, t, n, c, u, d, o, s, r
// locals: this
function {
  this = this;
  return this.db.execute("INSERT OR IGNORE INTO document(
  document_id, schema_version, access, checkpoint, authoritative_checkpoint, checkpoint_version,
  pending_local_update, saved_snapshot, checkpoint_sequence, head_sequence, has_local_edits,
  creation_request
) VALUES (?, ?, ?, ?, ?, 1,
  ?, ?, 0, 0, ?, ?);", [e, t, n, c, u, d, o, s, r], ["document"]);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=90B file=collaborative_editor/src/sqlgen/DocumentQueries
// args: e, t
// locals: this
function {
  this = this;
  return this.db.execute("UPDATE document SET server_document_id = ? WHERE document_id = ?;", [e, t], ["document"]);   // tail call
}

// fn <atom:0>  args=4 vars=5 closure=0 cpool=0 bc=92B file=collaborative_editor/src/sqlgen/DocumentQueries
// args: e, t, n, c
// locals: this
function {
  this = this;
  return this.db.execute("INSERT INTO document_update(document_id, sequence, update_bytes, source)
VALUES (?, ?, ?, ?);", [e, t, n, c], ["document_update"]);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=91B file=collaborative_editor/src/sqlgen/DocumentQueries
// args: e, t, n
// locals: this
function {
  this = this;
  return this.db.execute("UPDATE document SET head_sequence = ?, has_local_edits = ?
WHERE document_id = ?;", [e, t, n], ["document"]);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=90B file=collaborative_editor/src/sqlgen/DocumentQueries
// args: e, t
// locals: this
function {
  this = this;
  return this.db.execute("UPDATE document SET access = ? WHERE document_id = ?;", [e, t], ["document"]);   // tail call
}

// fn <atom:0>  args=7 vars=8 closure=0 cpool=0 bc=101B file=collaborative_editor/src/sqlgen/DocumentQueries
// args: e, t, n, c, u, d, o
// locals: this
function {
  this = this;
  return this.db.execute("UPDATE document
SET checkpoint = ?, authoritative_checkpoint = ?,
  pending_local_update = ?, saved_snapshot = ?,
  checkpoint_sequence = ?,
  checkpoint_version = checkpoint_version + 1
WHERE document_id = ? AND checkpoint_version = ?;", [e, t, n, c, u, d, o], ["document"]);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=90B file=collaborative_editor/src/sqlgen/DocumentQueries
// args: e, t
// locals: this
function {
  this = this;
  return this.db.execute("DELETE FROM document_update WHERE document_id = ? AND sequence <= ?;", [e, t], ["document_update"]);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=88B file=collaborative_editor/src/sqlgen/DocumentQueries
// locals: this
function {
  this = this;
  return this.db.execute("DELETE FROM document_update;", [], ["document_update"]);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=88B file=collaborative_editor/src/sqlgen/DocumentQueries
// locals: this
function {
  this = this;
  return this.db.execute("DELETE FROM document;", [], ["document"]);   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=23 bc=283B file=collaborative_editor/src/sqlgen/DocumentQueries
// args: require, module, exports
// locals: DocumentQueries, <class_fields_init>, DocumentQueries#1
function {
  let DocumentQueries#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DocumentQueries = undefined;
  let DocumentQueries;
  let <class_fields_init>;
  class DocumentQueries extends undefined { ... }
  <proto:DocumentQueries>.initializeStore = function <atom:0>;
  <proto:DocumentQueries>.selectStore = function <atom:0>;
  <proto:DocumentQueries>.watchSelectStore = function <atom:0>;
  <proto:DocumentQueries>.lockStore = function <atom:0>;
  <proto:DocumentQueries>.invalidateStore = function <atom:0>;
  <proto:DocumentQueries>.selectDocument = function <atom:0>;
  <proto:DocumentQueries>.watchSelectDocument = function <atom:0>;
  <proto:DocumentQueries>.selectDocumentState = function <atom:0>;
  <proto:DocumentQueries>.watchSelectDocumentState = function <atom:0>;
  <proto:DocumentQueries>.selectDrafts = function <atom:0>;
  <proto:DocumentQueries>.watchSelectDrafts = function <atom:0>;
  <proto:DocumentQueries>.selectUpdates = function <atom:0>;
  <proto:DocumentQueries>.watchSelectUpdates = function <atom:0>;
  <proto:DocumentQueries>.initializeDocument = function <atom:0>;
  <proto:DocumentQueries>.bindDocument = function <atom:0>;
  <proto:DocumentQueries>.insertUpdate = function <atom:0>;
  <proto:DocumentQueries>.advanceHead = function <atom:0>;
  <proto:DocumentQueries>.updateAccess = function <atom:0>;
  <proto:DocumentQueries>.replaceCheckpoint = function <atom:0>;
  <proto:DocumentQueries>.pruneUpdates = function <atom:0>;
  <proto:DocumentQueries>.deleteUpdates = function <atom:0>;
  <proto:DocumentQueries>.deleteDocuments = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DocumentQueries>;
  DocumentQueries = function <atom:0>;
  // close_loc <class_fields_init>
  DocumentQueries#1 = function <atom:0>;
  exports.DocumentQueries = DocumentQueries#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=collaborative_editor/src/sqlgen/DocumentQueries
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
