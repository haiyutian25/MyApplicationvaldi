// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// closure: e
function {
  return e.close();   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=1 bc=100B file=collaborative_editor/src/storage/IndexedDBDocumentStore
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
  e.onversionchange = function <atom:0>;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=26B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: t
// locals: n
// closure: f, e, b
function {
  let n;
  n = (await f(t, e));
  if (!((undefined === n))) goto L_13;
  goto L_19;
  // [栈深重同步 1 -> 0]
  return b(t, n); // async
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=1 bc=42B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// closure: f, e, b, this, i
function {
  return this.read(i, function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=1 bc=74B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e
// locals: this
// closure: f, b, i
function {
  this = this;
  return this.queue.run(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=10 cpool=0 bc=338B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e
// locals: i, s
// closure: f, t, b, n, o, c, h, r, a, u
function {
  let s;
  let i;
  i = (await f(e, t));
  if (!((undefined !== i))) goto L_1c;
  return b(e, i); // async
  n.requireDocumentSchema(o);
  n.requireDocumentAccess(c);
  s = {documentId: t, schema: o, access: c, checkpointVersion: 1, checkpointSequence: 0, headSequence: 0, hasLocalEdits: false};
  (await h(e.objectStore(r).add(s)));
  (await h(e.objectStore(a).add(u)));
  return b(e, s); // async
}

// fn <atom:0>  args=0 vars=0 closure=12 cpool=1 bc=44B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// closure: f, t, b, n, o, c, h, r, a, u, this, i
function {
  return this.write(i, function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=7 closure=7 cpool=1 bc=473B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e
// locals: t, o, c, s, u, this
// closure: f, b, n, h, r, a, i
function {
  this = this;
  let u;
  let s;
  let c;
  let o;
  let t;
  if (((undefined === undefined))) goto L_84;
  t = <to_object>(undefined).documentId;
  o = <to_object>(undefined).schema;
  c = <to_object>(undefined).access;
  <to_object>(undefined);
  goto L_88;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_17;
  // [栈深重同步 1 -> 0]
  s = new Uint8Array([0, 0]).buffer;
  u = {documentId: t, bytes: n.copyDocumentBytes(e.bytes), authoritativeBytes: n.copyDocumentBytes(e.bytes), pendingLocalUpdate: s, savedSnapshot: s.slice(0)};
  return this.queue.run(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=9 cpool=0 bc=687B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: o
// locals: i, s, u
// closure: n, e, f, t, c, h, r, a, b
function {
  let u;
  let s;
  let i;
  n.requireDocumentSchema(e.schema);
  if (!((undefined !== (await f(o, e.documentId))))) goto L_8a;
  throw new Error("The draft already exists.");
  i = Date.now();
  null;
  e;
  s = {access: t.DocumentAccess.Edit, checkpointVersion: 1, checkpointSequence: 0, headSequence: 0, hasLocalEdits: true, hasPendingLocalChanges: true, createdAt: i, updatedAt: i};
  u = {documentId: e.documentId, bytes: c, authoritativeBytes: new Uint8Array([0, 0]).buffer, pendingLocalUpdate: c.slice(0), savedSnapshot: new Uint8Array([0, 0]).buffer};
  (await h(o.objectStore(r).add(s)));
  (await h(o.objectStore(a).add(u)));
  return b(o, s); // async
}

// fn <atom:0>  args=0 vars=0 closure=11 cpool=1 bc=44B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// closure: n, e, f, t, c, h, r, a, b, this, i
function {
  return this.write(i, function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=8 cpool=1 bc=116B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e, o
// locals: c, this
// closure: n, f, t, h, r, a, b, i
function {
  this = this;
  let c;
  c = n.copyDocumentBytes(o);
  return this.queue.run(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=25B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e
// locals: t
// closure: u
function {
  let t;
  t = u(e);
  if (!((undefined === t))) goto L_12;
  return [];
  return [t];
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=1 bc=118B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e
// closure: u, h, r
function {
  return (await h(e.objectStore(r).getAll())).flatMap(function <atom:0>); // async
}

// fn <atom:0>  args=0 vars=0 closure=5 cpool=1 bc=48B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// closure: u, h, r, this, o
function {
  return this.read([o, r], function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=1 bc=74B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// locals: this
// closure: u, h, r, o
function {
  this = this;
  return this.queue.run(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=25B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: t
// locals: n
// closure: f, e, u
function {
  let n;
  n = (await f(t, e));
  if (!((undefined === n))) goto L_13;
  goto L_18;
  // [栈深重同步 1 -> 0]
  return u(n); // async
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=1 bc=48B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// closure: f, e, u, this, o, r
function {
  return this.read([o, r], function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=4 cpool=1 bc=74B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e
// locals: this
// closure: f, u, o, r
function {
  this = this;
  return this.queue.run(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=6 closure=5 cpool=0 bc=517B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: t
// locals: n, o, a, n#1, c
// closure: h, r, u, e, b
function {
  let o;
  let n;
  n = (await h(t.objectStore(r).getAll()));
  o = [];
  let a;
  for (const a of n) {
    let c;
    let n#1;
    n#1 = u(a);
    if (((undefined === n#1))) continue;
    c = (false !== a.hasPendingLocalChanges);
    if (!((undefined !== a.serverDocumentId))) goto L_14e;
    if (!(c)) goto L_14e;
    c = e((await b(t, a)));
    e((await b(t, a)));
    if ((c)) goto L_14e;
    null;
    a;
    (await h(t.objectStore(r).put({hasPendingLocalChanges: false})));
    if (((undefined === a.serverDocumentId))) goto L_1c9;
    if ((c)) goto L_1c9;
    if (!((a.fileName !== a.lastSyncedFileName))) goto L_1f7;
    o.push(n#1);
  }
  return o; // async
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=1 bc=44B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// closure: h, r, u, e, b, this, i
function {
  return this.write(i, function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=1 bc=74B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e
// locals: this
// closure: h, r, u, b, i
function {
  this = this;
  return this.queue.run(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=6 cpool=0 bc=253B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: n
// locals: o
// closure: S, e, f, t, h, r
function {
  let o;
  o = (await S(n, e));
  if (!((undefined === o.fileName))) goto L_40;
  throw new Error("The local draft is not available.");
  if (!((undefined !== o.serverDocumentId))) goto L_8e;
  goto L_fc;
  // [栈深重同步 1 -> 0]
  if (!((undefined === (await f(n, t))))) goto L_fb;
  null;
  o;
  (await h(n.objectStore(r).put({serverDocumentId: t})));
  goto L_fc;
  // [栈深重同步 1 -> 0]
  return undefined; // async
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=1 bc=50B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// closure: S, e, f, t, h, r, this, o
function {
  return this.write([o, r], function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=5 cpool=1 bc=74B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e, t
// locals: this
// closure: S, f, h, r, o
function {
  this = this;
  return this.queue.run(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=5 cpool=0 bc=291B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: n
// locals: o
// closure: S, e, h, r, t
function {
  let o;
  o = (await S(n, e));
  if (!((undefined === o.fileName))) goto L_40;
  throw new Error("The local draft is not available.");
  null;
  o;
  null;
  t;
  if (!((t.lastSyncedFileName == null))) goto L_e8;
  t.lastSyncedFileName;
  (await h(n.objectStore(r).put({lastSyncedFileName: o.lastSyncedFileName, updatedAt: Date.now()})));
  return undefined; // async
}

// fn <atom:0>  args=0 vars=0 closure=7 cpool=1 bc=50B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// closure: S, e, h, r, t, this, o
function {
  return this.write([o, r], function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=4 cpool=1 bc=74B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e, t
// locals: this
// closure: S, h, r, o
function {
  this = this;
  return this.queue.run(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=6 cpool=0 bc=546B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: t
// locals: n
// closure: f, e, h, r, a, c
function {
  let n;
  n = (await f(t, e));
  if (!((undefined !== n))) goto L_220;
  if (!((undefined === n.fileName))) goto L_4a;
  throw new Error("The local draft is not available.");
  (await h(t.objectStore(r).delete(n.documentId)));
  (await h(t.objectStore(a).delete(n.documentId)));
  (await h(t.objectStore(c).delete(IDBKeyRange.bound([n.documentId, 0], [n.documentId, Number.MAX_SAFE_INTEGER]))));
  return undefined; // async
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=1 bc=44B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// closure: f, e, h, r, a, c, this, i
function {
  return this.write(i, function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=6 cpool=1 bc=74B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e
// locals: this
// closure: f, h, r, a, c, i
function {
  this = this;
  return this.queue.run(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=0 cpool=0 bc=43B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e, t, n
// locals: this
function {
  this = this;
  return this.appendUpdate(e, t, n, undefined);   // tail call
}

// fn <atom:0>  args=3 vars=4 closure=1 cpool=0 bc=255B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e, n, o
// locals: this
// closure: t
function {
  this = this;
  if (!((o === t.DocumentAccess.View))) goto L_b6;
  goto L_fb;
  // [栈深重同步 5 -> 4]
  return this.appendUpdate(e, n, t.DocumentUpdateSource.Remote, o);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=6 cpool=0 bc=147B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: o
// locals: a
// closure: n, t, S, e, h, r
function {
  let a;
  n.requireDocumentAccess(t);
  a = (await S(o, e));
  null;
  a;
  (await h(o.objectStore(r).put({access: t})));
  return undefined; // async
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=1 bc=50B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// closure: n, t, S, e, h, r, this, o
function {
  return this.write([o, r], function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=5 cpool=1 bc=74B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e, t
// locals: this
// closure: n, S, h, r, o
function {
  this = this;
  return this.queue.run(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=3 closure=10 cpool=0 bc=620B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: i
// locals: s, u
// closure: S, e, t, n, o, h, a, m, r, c
function {
  let u;
  let s;
  s = (await S(i, e));
  if (!((s.checkpointVersion !== t))) goto L_37;
  return false; // async
  n.requireCheckpointSequence(s, o);
  u = n.nextDocumentSequence(s.checkpointVersion);
  null;
  m;
  (await h(i.objectStore(a).put({documentId: s.documentId})));
  null;
  s;
  (await h(i.objectStore(r).put({checkpointVersion: u, checkpointSequence: o})));
  (await h(i.objectStore(c).delete(IDBKeyRange.bound([s.documentId, 0], [s.documentId, o]))));
  return true; // async
}

// fn <atom:0>  args=0 vars=0 closure=12 cpool=1 bc=44B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// closure: S, e, t, n, o, h, a, m, r, c, this, i
function {
  return this.write(i, function <atom:0>);   // tail call
}

// fn <atom:0>  args=7 vars=9 closure=7 cpool=1 bc=263B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e, t, o, s, u, d, l
// locals: m, this
// closure: S, n, h, a, r, c, i
function {
  this = this;
  let m;
  m = {documentId: e, bytes: n.copyDocumentBytes(s), authoritativeBytes: n.copyDocumentBytes(u), pendingLocalUpdate: n.copyDocumentBytes(d), savedSnapshot: n.copyDocumentBytes(l)};
  return this.queue.run(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=72B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// locals: this
function {
  this = this;
  return this.queue.flush();   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=7 cpool=0 bc=412B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e
// locals: t
// closure: n, this, h, o, r, a, c
function {
  let t;
  t = {id: 1, generation: n.nextDocumentSequence(this.generation)};
  (await h(e.objectStore(o).put(t)));
  (await h(e.objectStore(r).clear()));
  (await h(e.objectStore(a).clear()));
  (await h(e.objectStore(c).clear()));
  return undefined; // async
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=1 bc=139B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// closure: n, this, h, o, r, a, c, i
function {
  try { // catch -> L_3b
  (await this.write(i, function <atom:0>));
  <?>;
  // gosub (finally 块) 65
  undefined;
  goto L_89;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 65
  throw <?>;
  this.database.close();
  // ret (finally 块) 
  return undefined; // async
}

// fn <atom:0>  args=0 vars=1 closure=7 cpool=1 bc=74B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// locals: this
// closure: n, h, o, r, a, c, i
function {
  this = this;
  return this.queue.clear(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=70B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// closure: this
function {
  return this.database.close();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=1 bc=79B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// closure: this
function {
  return Promise.resolve().then(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=74B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// locals: this
function {
  this = this;
  return this.queue.close(function <atom:0>);   // tail call
}

// fn <atom:0>  args=1 vars=5 closure=10 cpool=0 bc=761B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: o
// locals: s, d, l, m
// closure: n, a, i, S, e, u, h, c, t, r
function {
  let m;
  let l;
  let d;
  let s;
  n.requireDocumentSource(a);
  if (!((undefined !== i))) goto L_60;
  n.requireDocumentAccess(i);
  s = (await S(o, e));
  d = n.nextDocumentSequence(s.headSequence);
  l = {documentId: s.documentId, sequence: d, bytes: u, source: a};
  (await h(o.objectStore(c).add(l)));
  null;
  s;
  if (!((i == null))) goto L_17c;
  i;
  if ((s.hasLocalEdits)) goto L_226;
  if (((a === t.DocumentUpdateSource.Local))) goto L_29a;
  m = {access: s.access, headSequence: d, updatedAt: Date.now(), hasLocalEdits: (a === t.DocumentUpdateSource.Local), hasPendingLocalChanges: s.hasPendingLocalChanges};
  (await h(o.objectStore(r).put(m)));
  return d; // async
}

// fn <atom:0>  args=0 vars=0 closure=12 cpool=1 bc=44B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// closure: n, a, i, S, e, u, h, c, t, r, this, s
function {
  return this.write(s, function <atom:0>);   // tail call
}

// fn <atom:0>  args=4 vars=6 closure=7 cpool=1 bc=116B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e, o, a, i
// locals: u, this
// closure: n, S, h, c, t, r, s
function {
  this = this;
  let u;
  u = n.copyDocumentBytes(o);
  return this.queue.run(function <atom:0>);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=116B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e, t
// locals: this
function {
  this = this;
  return this.runTransaction(this.database.transaction(e, "readonly"), t);   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=77B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e, t
// locals: this
// closure: m
function {
  this = this;
  return this.runTransaction(m(this.database, e), t);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=60B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// closure: p, e, this, t
function {
  if (!(((await p(e)) !== this.generation))) goto L_38;
  throw new Error("Document store was cleared by another owner.");
  return t(e); // async
}

// fn <atom:0>  args=2 vars=3 closure=2 cpool=1 bc=9B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e, t
// locals: this
// closure: p, w
function {
  this = this;
  return w(e, function <atom:0>);   // tail call
}

// fn u  args=1 vars=1 closure=0 cpool=0 bc=315B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e
function {
  if (!((undefined === e.fileName))) goto L_28;
  return undefined;
  return {documentId: e.documentId, fileName: e.fileName, directoryId: e.directoryId, serverDocumentId: e.serverDocumentId, lastSyncedFileName: e.lastSyncedFileName, createdAt: e.createdAt, updatedAt: e.updatedAt};
}

// fn <atom:0>  args=0 vars=3 closure=4 cpool=0 bc=206B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// locals: t, n, e
// closure: e, o, h, y
function {
  let n;
  let t;
  t = e.objectStore(o);
  n = (await h(t.get(1)));
  if (!((undefined === n))) goto L_c8;
  let e;
  e = {id: 1, generation: 1};
  (await h(t.add(e)));
  return e.generation; // async
  return y(n); // async
}

// fn d  args=1 vars=6 closure=8 cpool=1 bc=185B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e
// locals: t, r, e#1, t#1, a
// closure: o, h, y, n, l, m, w, IndexedDBDocumentStore
function {
  let r;
  let t;
  t = n.documentStoreName(e);
  if (!(("undefined" == typeof indexedDB))) goto L_4a;
  throw new Error("Persistent document storage is unavailable in this browser.");
  r = (await l(t));
  try { // catch -> L_86
  let t#1;
  let e#1;
  e#1 = m(r, [o]);
  t#1 = (await w(e#1, function <atom:0>));
  return new IndexedDBDocumentStore(r, t#1); // async
  // [栈深重同步 0 -> 1]
  a = <?>;
  try { // catch -> L_b8
  r.close();
  throw a;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=1 vars=3 closure=5 cpool=0 bc=512B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e
// locals: t, n
// closure: i, o, r, a, c
function {
  let n;
  let t;
  t = i.result;
  if (!((0 === e.oldVersion))) goto L_163;
  t.createObjectStore(o, {keyPath: "id"});
  t.createObjectStore(r, {keyPath: "documentId"});
  t.createObjectStore(a, {keyPath: "documentId"});
  t.createObjectStore(c, {keyPath: ["documentId", "sequence"]}).createIndex("documentId", "documentId");
  n = i.transaction;
  if (!((null === n))) goto L_19f;
  throw new Error("Document storage upgrade transaction is unavailable.");
  n.objectStore(r).createIndex("serverDocumentId", "serverDocumentId", {unique: true});
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=24B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// closure: s, n
function {
  s = true;
  true;
  n(new Error("Document storage upgrade is blocked by another browser tab."));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=59B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// closure: n, i
function {
  if (!((i.error == null))) goto L_38;
  i.error;
  return n(new Error("Could not open document storage."));   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=118B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// closure: s, i, t
function {
  if (!(s)) goto L_4f;
  goto L_75;
  // [栈深重同步 1 -> 0]
  t(i.result);
  return;
}

// fn <atom:0>  args=2 vars=4 closure=5 cpool=4 bc=112B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: t, n
// locals: i, s
// closure: o, r, a, c, e
function {
  let s;
  let i;
  i = indexedDB.open(e, 3);
  s = false;
  i.onupgradeneeded = function <atom:0>;
  i.onblocked = function <atom:0>;
  i.onerror = function <atom:0>;
  i.onsuccess = function <atom:0>;
  return;
}

// fn l  args=1 vars=1 closure=4 cpool=1 bc=12B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e
// closure: o, r, a, c
function {
  return new Promise(function <atom:0>);
}

// fn m  args=2 vars=3 closure=0 cpool=0 bc=124B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e, t
// locals: n
function {
  try { // catch -> L_3d
  return e.transaction(t, "readwrite", {durability: "strict"});
  // [栈深重同步 0 -> 1]
  n = <?>;
  try { // catch -> L_7b
  if (!((n instanceof TypeError))) goto L_79;
  return e.transaction(t, "readwrite");
  throw n;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// closure: t, e
function {
  return t(e.result);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=57B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// closure: n, e
function {
  if (!((e.error == null))) goto L_36;
  e.error;
  return n(new Error("Document storage request failed."));   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=2 bc=25B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: t, n
// closure: e
function {
  e.onsuccess = function <atom:0>;
  e.onerror = function <atom:0>;
  return;
}

// fn h  args=1 vars=1 closure=0 cpool=1 bc=12B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e
function {
  return new Promise(function <atom:0>);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=5B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// closure: e
function {
  return e(undefined);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=57B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// closure: e, t
function {
  if (!((t.error == null))) goto L_36;
  t.error;
  return e(new Error("Document storage transaction was aborted."));   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=2 bc=25B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e
// closure: t
function {
  t.oncomplete = function <atom:0>;
  t.onabort = function <atom:0>;
  return;
}

// fn w  args=2 vars=7 closure=1 cpool=1 bc=275B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: t, n
// locals: o, r, a, c, a#1
// closure: e
function {
  let a#1;
  let r;
  let o;
  o = new Promise(function <atom:0>);
  r = undefined;
  try { // catch -> L_28
  r = (await n());
  (await n());
  <?>;
  goto L_fe;
  // [栈深重同步 0 -> 1]
  a = <?>;
  try { // catch -> L_fd
  try { // catch -> L_5d
  t.abort();
  <?>;
  goto L_f6;
  // [栈深重同步 0 -> 1]
  c = <?>;
  try { // catch -> L_f5
  if (!((c instanceof DOMException))) goto L_96;
  if ((("InvalidStateError" === c.name))) goto L_f1;
  if (!(e.isLoggingEnabled)) goto L_f1;
  console.warn("Could not abort the failed document storage transaction.", c);
  <?>;
  goto L_f6;
  // [栈深重同步 0 -> 1]
  throw <?>;
  (await o);
  throw a;
  // [栈深重同步 0 -> 1]
  throw <?>;
  a#1 = (await o);
  if (!((undefined !== a#1))) goto L_10f;
  throw a#1;
  return r; // async
}

// fn y  args=1 vars=2 closure=1 cpool=0 bc=148B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e
// locals: t
// closure: n
function {
  let t;
  if ((("object" != typeof e))) goto L_12;
  if (!((null === e))) goto L_23;
  throw new Error("Document storage account metadata is missing.");
  t = e;
  n.requireStoreGeneration(t.generation);
  return t.generation;
}

// fn p  args=1 vars=1 closure=3 cpool=0 bc=83B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e
// closure: y, h, o
function {
  return y((await h(e.objectStore(o).get(1)))); // async
}

// fn f  args=2 vars=5 closure=3 cpool=0 bc=520B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e, t
// locals: o, a, c
// closure: r, h, n
function {
  let c;
  let a;
  let o;
  o = e.objectStore(r);
  if (!(((await h(o.get(t))) == null))) goto L_b6;
  (await h(o.get(t)));
  a = (await h(o.index("serverDocumentId").get(t)));
  if (!((undefined === a))) goto L_c0;
  return undefined; // async
  if ((("object" != typeof a))) goto L_d3;
  if (!((null === a))) goto L_e4;
  throw new Error("Stored document recovery data is inconsistent.");
  c = a;
  if (!((c.documentId !== t))) goto L_147;
  if (!((c.serverDocumentId !== t))) goto L_147;
  throw new Error("Stored document identity does not match its recovery data.");
  n.requireDocumentSchema(c.schema);
  n.requireDocumentAccess(c.access);
  n.requireDocumentStorageState(c);
  return c; // async
}

// fn S  args=2 vars=3 closure=1 cpool=0 bc=35B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e, t
// locals: n
// closure: f
function {
  let n;
  n = (await f(e, t));
  if (!((undefined === n))) goto L_1f;
  throw new Error("Document is not available offline.");
  return n; // async
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=306B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e
// locals: n
// closure: t
function {
  let n;
  if ((("object" != typeof e))) goto L_12;
  if (!((null === e))) goto L_23;
  throw new Error("Stored document update journal is incomplete.");
  n = e;
  if (((n.documentId !== t.documentId))) goto L_9b;
  if (!(!(n.bytes instanceof ArrayBuffer))) goto L_ac;
  throw new Error("Stored document update journal contains invalid bytes.");
  return {sequence: n.sequence, bytes: new Uint8Array(n.bytes), source: n.source};
}

// fn b  args=2 vars=5 closure=4 cpool=1 bc=1258B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: e, t
// locals: o, r, i
// closure: h, a, c, n
function {
  let i;
  let r;
  let o;
  o = (await h(e.objectStore(a).get(t.documentId)));
  if ((("object" != typeof o))) goto L_8e;
  if (!((null === o))) goto L_9f;
  throw new Error("Stored document checkpoint is missing.");
  r = o;
  if (!((r.documentId === t.documentId))) goto L_1ff;
  if (!((r.bytes instanceof ArrayBuffer))) goto L_1ff;
  if (!((r.authoritativeBytes instanceof ArrayBuffer))) goto L_1ff;
  if (((undefined === r.pendingLocalUpdate))) goto L_1a7;
  if (!((r.pendingLocalUpdate instanceof ArrayBuffer))) goto L_1ff;
  if (((undefined === r.savedSnapshot))) goto L_1ff;
  if (!(!(r.savedSnapshot instanceof ArrayBuffer))) goto L_211;
  throw new Error("Stored document checkpoint contains invalid bytes.");
  i = (await h(e.objectStore(c).index("documentId").getAll(t.documentId)));
  null;
  t;
  if (!((undefined === r.pendingLocalUpdate))) goto L_367;
  goto L_394;
  // [栈深重同步 4 -> 3]
  if (!((undefined === r.savedSnapshot))) goto L_3c4;
  goto L_3f1;
  // [栈深重同步 4 -> 3]
  null;
  n.requireStoredDocument({checkpoint: new Uint8Array(r.bytes), authoritativeCheckpoint: new Uint8Array(r.authoritativeBytes), pendingLocalUpdate: new Uint8Array(r.pendingLocalUpdate), savedSnapshot: new Uint8Array(r.savedSnapshot), journal: i.map(function <atom:0>)});
  if (!((undefined === t.fileName))) goto L_4c2;
  goto L_4e4;
  // [栈深重同步 2 -> 1]
  return {fileName: t.fileName, directoryId: t.directoryId, serverDocumentId: t.serverDocumentId}; // async
}

// fn <atom:0>  args=3 vars=26 closure=0 cpool=32 bc=458B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// args: require, module, exports
// locals: e, t, n, o, r, a, c, i, s, IndexedDBDocumentStore, <class_fields_init>, IndexedDBDocumentStore#1, u, d, l, m, h, w, y, p, f, S, b
function {
  u = function u;
  d = function d;
  l = function l;
  m = function m;
  h = function h;
  w = function w;
  y = function y;
  p = function p;
  f = function f;
  S = function S;
  b = function b;
  let IndexedDBDocumentStore#1;
  let s;
  let i;
  let c;
  let a;
  let r;
  let o;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.openIndexedDBDocumentStore = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("../DocumentPersistenceTypes");
  n = require("./DocumentStorage");
  o = "account";
  r = "documents";
  a = "checkpoints";
  c = "updates";
  i = [o, r, a, c];
  s = [o, r, c];
  let IndexedDBDocumentStore;
  let <class_fields_init>;
  class IndexedDBDocumentStore extends undefined { ... }
  <proto:IndexedDBDocumentStore>.load = function <atom:0>;
  <proto:IndexedDBDocumentStore>.initialize = function <atom:0>;
  <proto:IndexedDBDocumentStore>.initializeDraft = function <atom:0>;
  <proto:IndexedDBDocumentStore>.listDrafts = function <atom:0>;
  <proto:IndexedDBDocumentStore>.getDraft = function <atom:0>;
  <proto:IndexedDBDocumentStore>.listRecoverableDrafts = function <atom:0>;
  <proto:IndexedDBDocumentStore>.bindServerDocument = function <atom:0>;
  <proto:IndexedDBDocumentStore>.updateDraft = function <atom:0>;
  <proto:IndexedDBDocumentStore>.deleteDraft = function <atom:0>;
  <proto:IndexedDBDocumentStore>.append = function <atom:0>;
  <proto:IndexedDBDocumentStore>.acceptRemote = function <atom:0>;
  <proto:IndexedDBDocumentStore>.setAccess = function <atom:0>;
  <proto:IndexedDBDocumentStore>.checkpoint = function <atom:0>;
  <proto:IndexedDBDocumentStore>.flush = function <atom:0>;
  <proto:IndexedDBDocumentStore>.clear = function <atom:0>;
  <proto:IndexedDBDocumentStore>.close = function <atom:0>;
  <proto:IndexedDBDocumentStore>.appendUpdate = function <atom:0>;
  <proto:IndexedDBDocumentStore>.read = function <atom:0>;
  <proto:IndexedDBDocumentStore>.write = function <atom:0>;
  <proto:IndexedDBDocumentStore>.runTransaction = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:IndexedDBDocumentStore>;
  IndexedDBDocumentStore = function <atom:0>;
  // close_loc <class_fields_init>
  IndexedDBDocumentStore#1 = function <atom:0>;
  exports.openIndexedDBDocumentStore = d;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=collaborative_editor/src/storage/IndexedDBDocumentStore
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
