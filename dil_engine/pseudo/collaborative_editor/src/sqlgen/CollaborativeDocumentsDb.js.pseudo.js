// fn l  args=1 vars=1 closure=1 cpool=0 bc=6B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e
// closure: u
function {
  u = e;
  e;
  return;
}

// fn b  args=0 vars=0 closure=2 cpool=0 bc=16B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// closure: u, require
function {
  if (!((u == null))) goto L_f;
  u;
  return require("client_sql/src/ClientSQLNative");
}

// fn T  args=1 vars=2 closure=1 cpool=0 bc=39B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e
// locals: t
// closure: d
function {
  let t;
  t = d[e];
  if ((t)) goto L_22;
  t = [];
  [];
  d[e] = t;
  t;
  return t;
}

// fn E  args=2 vars=3 closure=0 cpool=0 bc=93B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e, t
// locals: n
function {
  let n;
  n = e.indexOf(t);
  if (!((-1 !== n))) goto L_5c;
  e.splice(n, 1);
  return;
}

// fn m  args=3 vars=3 closure=1 cpool=0 bc=20B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e, t, n
// closure: h
function {
  n();
  if (!((h[e] === t))) goto L_13;
  // [栈深重同步 2 -> 1]
  h;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=6B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e
// closure: s
function {
  s = e;
  e;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=4B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// closure: a
function {
  return a;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=4B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// closure: a
function {
  return a;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=12B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: t
// closure: m, e, i, s
function {
  m(e, i, s);
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=12B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: t
// closure: m, e, i, s
function {
  m(e, i, s);
  throw t;
}

// fn <atom:0>  args=0 vars=2 closure=5 cpool=2 bc=126B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// locals: n, a
// closure: m, e, i, s, t
function {
  let n;
  n = undefined;
  try { // catch -> L_16
  n = t();
  t();
  <?>;
  goto L_53;
  // [栈深重同步 0 -> 1]
  a = <?>;
  try { // catch -> L_52
  m(e, i, s);
  return Promise.reject(a);
  // [栈深重同步 0 -> 1]
  throw <?>;
  return n.then(function <atom:0>, function <atom:0>);   // tail call
}

// fn N  args=2 vars=7 closure=2 cpool=4 bc=188B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e, t
// locals: n, s, a, i, o
// closure: m, h
function {
  let o;
  let i;
  let a;
  let s;
  let n;
  if (!((h[e] == null))) goto L_42;
  h[e];
  n = Promise.resolve();
  s = undefined;
  a = new Promise(function <atom:0>);
  i = n.then(function <atom:0>, function <atom:0>);
  h[e] = i;
  o = function <atom:0>;
  return n.then(o, o);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=87B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e
// closure: t
function {
  if (!((-1 === t.indexOf(e)))) goto L_56;
  t.push(e);
  return;
}

// fn g  args=1 vars=2 closure=0 cpool=1 bc=51B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e
// locals: t
function {
  let t;
  t = [];
  e.forEach(function <atom:0>);
  return t;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=41B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e
// closure: t
function {
  return (-1 !== t.indexOf(e));
}

// fn L  args=2 vars=2 closure=0 cpool=1 bc=56B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e, t
function {
  if (((0 === e.length))) goto L_37;
  if (((0 === t.length))) goto L_37;
  return e.some(function <atom:0>);
}

// fn <atom:0>  args=2 vars=2 closure=2 cpool=0 bc=23B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e, s
// closure: t, n
function {
  if (!((null == s))) goto L_a;
  goto L_16;
  // [栈深重同步 1 -> 0]
  n(new Error(s));
  return;
}

// fn <atom:0>  args=2 vars=2 closure=1 cpool=1 bc=5B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: t, n
// closure: e
function {
  e(function <atom:0>);
  return;
}

// fn C  args=1 vars=1 closure=0 cpool=1 bc=12B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e
function {
  return new Promise(function <atom:0>);
}

// fn D  args=1 vars=1 closure=0 cpool=0 bc=52B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e
function {
  if (!((e instanceof Error))) goto L_2c;
  return e.message;
  return String(e);
}

// fn <atom:0>  args=2 vars=4 closure=1 cpool=0 bc=58B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e, t
// locals: e#1, t#1
// closure: this
function {
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_12;
  t;
  t = [];
  t#1 = [];
  return this.query(e, t);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// closure: this
function {
  return this.debugInfo();   // tail call
}

// fn <atom:0>  args=2 vars=3 closure=5 cpool=2 bc=316B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e, s
// locals: this
// closure: <class_fields_init>, t, o, c, n
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.databaseName = e;
  this.connection = s;
  this.localWatchEntries = [];
  this.activeTransactionCount = 0;
  this.nextTransactionDebugId = 1;
  this.transactionHistory = [];
  this.closed = false;
  this.documentQueries = new t.DocumentQueries(this);
  this.debugDatabase = {name: this.databaseName, schemaVersion: 3, createStatements: o, migrations: c, query: function <atom:0>, debugInfo: function <atom:0>};
  n.registerClientSQLDebugDatabase(this.debugDatabase);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=5 cpool=0 bc=76B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e
// locals: e#1, t
// closure: a, b, o, c, CollaborativeDocumentsDb
function {
  let e#1;
  if (!((e === undefined))) goto L_d;
  e;
  e = a;
  e#1 = a;
  let t;
  t = b().openDatabase(e, 3, o, c);
  return new CollaborativeDocumentsDb(e, t);
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=73B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: n
// closure: this, e, t
function {
  return this.connection.execute(e, t, n);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=6 cpool=1 bc=57B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// closure: this, e, t, C, n, r
function {
  (await C(function <atom:0>));
  if (!((n == null))) goto L_33;
  n;
  this.notifyTablesChanged(r);
  return undefined; // async
}

// fn <atom:0>  args=3 vars=7 closure=3 cpool=1 bc=191B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e, t, n
// locals: e#1, t#1, n#1, this
// closure: C, r, N
function {
  this = this;
  let n#1;
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_17;
  t;
  t = [];
  t#1 = [];
  n#1 = n;
  if (!(this.closed)) goto L_98;
  throw new Error("ClientSQL database '".concat(this.databaseName, "' is closed"));
  return N(this.databaseName, function <atom:0>); // async
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=73B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: n
// closure: this, e, t
function {
  return this.connection.query(e, t, n);   // tail call
}

// fn <atom:0>  args=2 vars=5 closure=1 cpool=1 bc=152B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e, t
// locals: e#1, t#1, this
// closure: C
function {
  this = this;
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_14;
  t;
  t = [];
  t#1 = [];
  if (!(this.closed)) goto L_93;
  throw new Error("ClientSQL database '".concat(this.databaseName, "' is closed"));
  return C(function <atom:0>); // async
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
function {
  return;
}

// fn <atom:0>  args=1 vars=1 closure=4 cpool=0 bc=22B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e
// closure: a, t, i, s
function {
  if (!(a)) goto L_15;
  if (!((t === i))) goto L_15;
  s(e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=90B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: t
// closure: a, e
function {
  if (!(a)) goto L_59;
  if (!(e.isLoggingEnabled)) goto L_59;
  console.error(t);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=2 bc=93B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// locals: t
// closure: a, i, s, e, n
function {
  let t;
  i = (i ++);
  t = (i ++);
  n().then(function <atom:0>).catch(function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=0 bc=112B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// locals: e
// closure: a, d, this, E, r
function {
  let e;
  if (!(!a)) goto L_a;
  return;
  a = false;
  false;
  e = d[this.databaseName];
  if (!(e)) goto L_47;
  E(e, r);
  E(this.localWatchEntries, r);
  return;
}

// fn <atom:0>  args=3 vars=9 closure=4 cpool=3 bc=278B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: t, n, s
// locals: a, i, o, c, r, this
// closure: e, d, E, T
function {
  this = this;
  let r;
  let c;
  let o;
  let i;
  let a;
  if (!(this.closed)) goto L_41;
  return {unsubscribe: function <atom:0>};
  a = true;
  i = 0;
  o = function <atom:0>;
  c = function <atom:0>;
  r = {tables: t, emit: o, unsubscribe: c};
  T(this.databaseName).push(r);
  this.localWatchEntries.push(r);
  o();
  return {unsubscribe: c};
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=38B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// closure: this, e
function {
  return this.runTransaction(e);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=167B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e
// locals: this
// closure: N
function {
  this = this;
  if (!(this.closed)) goto L_80;
  throw new Error("ClientSQL database '".concat(this.databaseName, "' is closed"));
  return N(this.databaseName, function <atom:0>); // async
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=11B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e
// closure: t, a
function {
  t = e;
  e;
  a(undefined, undefined);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=7B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e
// closure: a, D
function {
  a(undefined, D(e));
  return;
}

// fn <atom:0>  args=2 vars=5 closure=5 cpool=2 bc=131B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: n, a
// locals: i, o, c
// closure: t, D, this, s, e
function {
  let o;
  let i;
  i = this.createTransactionScope(n, s);
  o = undefined;
  try { // catch -> L_46
  o = e(i);
  e(i);
  <?>;
  goto L_57;
  // [栈深重同步 0 -> 1]
  c = <?>;
  try { // catch -> L_56
  a(undefined, D(c));
  return undefined;
  // [栈深重同步 0 -> 1]
  throw <?>;
  o.then(function <atom:0>, function <atom:0>);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=5 cpool=1 bc=74B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: n
// closure: t, D, this, s, e
function {
  this.connection.transaction(function <atom:0>, n);
  return;
}

// fn <atom:0>  args=1 vars=9 closure=3 cpool=1 bc=942B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e
// locals: t, s, a, i, n, o, e#1, this
// closure: D, C, n
function {
  this = this;
  let i;
  let a;
  let s;
  let t;
  t = undefined;
  s = [];
  this.nextTransactionDebugId = <this.nextTransactionDebugId_new>;
  a = (this.nextTransactionDebugId++);
  i = Date.now();
  this.activeTransactionCount = (this.activeTransactionCount + 1);
  this.activeTransactionChangedTables = s;
  try { // catch -> L_1fc
  let n;
  (await C(function <atom:0>));
  n = Date.now();
  this.recordTransactionDebugEntry({id: a, status: "committed", startedAt: new Date(i).toISOString(), completedAt: new Date(n).toISOString(), durationMs: (n - i), changedTables: s.slice(), changedTableCount: s.length});
  this.emitChangedTables(s);
  // gosub (finally 块) 881
  return t; // async
  // [栈深重同步 0 -> 1]
  o = <?>;
  try { // catch -> L_36b
  let e#1;
  e#1 = Date.now();
  this.recordTransactionDebugEntry({id: a, status: "rolled_back", startedAt: new Date(i).toISOString(), completedAt: new Date(e#1).toISOString(), durationMs: (e#1 - i), changedTables: s.slice(), changedTableCount: s.length, error: D(o)});
  n.notifyClientSQLDebugChanged(this.databaseName);
  throw o;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 881
  throw <?>;
  this.activeTransactionChangedTables = undefined;
  this.activeTransactionCount = (this.activeTransactionCount - 1);
  // ret (finally 块) 
  return undefined; // async
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=40B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: n
// closure: e, t, s
function {
  return e.execute(t, s, n);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=83B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e
// closure: n
function {
  if (!((-1 === n.indexOf(e)))) goto L_52;
  n.push(e);
  return;
}

// fn <atom:0>  args=3 vars=6 closure=4 cpool=2 bc=80B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: t, s, a
// locals: t#1, s#1, a#1
// closure: e, n, C, r
function {
  let a#1;
  let s#1;
  let t#1;
  t#1 = t;
  if (!((s === undefined))) goto L_15;
  s;
  s = [];
  s#1 = [];
  a#1 = a;
  (await C(function <atom:0>));
  if (!((a == null))) goto L_27;
  a;
  r.forEach(function <atom:0>);
  return undefined; // async
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=40B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: s
// closure: e, t, n
function {
  return e.query(t, n, s);   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=2 cpool=1 bc=25B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: t, n
// locals: t#1, n#1
// closure: e, C
function {
  let n#1;
  let t#1;
  t#1 = t;
  if (!((n === undefined))) goto L_12;
  n;
  n = [];
  n#1 = [];
  return C(function <atom:0>);   // tail call
}

// fn <atom:0>  args=3 vars=3 closure=0 cpool=0 bc=15B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e, t, n
function {
  throw new Error("ClientSQL watchers cannot be created inside a transaction");
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=7B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e
// closure: a
function {
  return e(a);   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=3 cpool=4 bc=198B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e, n
// locals: s, a
// closure: C, r, t
function {
  let a;
  let s;
  s = {execute: function <atom:0>, query: function <atom:0>, watchQuery: function <atom:0>};
  a = undefined;
  a = {documentQueries: new t.DocumentQueries(s), execute: s.execute, query: s.query, transaction: function <atom:0>};
  {documentQueries: new t.DocumentQueries(s), execute: s.execute, query: s.query, transaction: function <atom:0>};
  return a;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=176B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e
// locals: t
// closure: d, this, E
function {
  let t;
  if (!(("function" == typeof e.unsubscribe))) goto L_55;
  e.unsubscribe();
  return;
  t = d[this.databaseName];
  if (!(t)) goto L_89;
  E(t, e);
  E(this.localWatchEntries, e);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=71B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e
// closure: this
function {
  return this.connection.close(e);   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=6B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// closure: this, C
function {
  return C(function <atom:0>);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=2 bc=331B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// locals: this
// closure: d, E, C, n, N
function {
  this = this;
  if ((this.closed)) goto L_148;
  this.closed = true;
  this.localWatchEntries.slice().forEach(function <atom:0>);
  if (!(this.debugDatabase)) goto L_11e;
  n.unregisterClientSQLDebugDatabase(this.debugDatabase);
  this.debugDatabase = undefined;
  undefined;
  (await N(this.databaseName, function <atom:0>));
  return undefined; // async
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=40B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: t
// closure: e
function {
  return e.debugInfo(t);   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=3 cpool=1 bc=603B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// locals: e, this
// closure: C, d, h
function {
  this = this;
  let e;
  e = this.connection;
  if (!(e.debugInfo)) goto L_56;
  goto L_57;
  // [栈深重同步 2 -> 1]
  null;
  {};
  if (!((this.activeTransactionChangedTables == null))) goto L_d4;
  this.activeTransactionChangedTables;
  goto L_f8;
  if (!((undefined.slice() == null))) goto L_100;
  undefined.slice();
  if (!((this.activeTransactionChangedTables == null))) goto L_12f;
  this.activeTransactionChangedTables;
  goto L_130;
  if (!((undefined.length == null))) goto L_136;
  undefined.length;
  if ((d[this.databaseName])) goto L_1ff;
  return {closed: this.closed, transactionDepth: this.activeTransactionCount, pendingChangedTables: [], pendingChangedTableCount: 0, transactionHistoryCount: this.transactionHistory.length, transactions: this.transactionHistory.slice().reverse(), watcherCount: [].length, localWatcherCount: this.localWatchEntries.length, queuedWrite: (undefined !== h[this.databaseName])}; // async
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=201B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e
// locals: t, this
// closure: s
function {
  this = this;
  let t;
  this.transactionHistory.push(e);
  t = (this.transactionHistory.length - s);
  if (!((t > 0))) goto L_c8;
  this.transactionHistory.splice(0, t);
  return;
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=50B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e
// locals: t, this
// closure: g
function {
  this = this;
  let t;
  t = g(e);
  this.emitChangedTables(t);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=79B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: t
// closure: L, e
function {
  if (!(L(t.tables, e))) goto L_4e;
  t.emit();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=1 bc=201B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: e
// locals: t, this
// closure: L, n, d
function {
  this = this;
  let t;
  n.notifyClientSQLDebugChanged(this.databaseName);
  t = d[this.databaseName];
  if (!(t)) goto L_c8;
  t.slice().forEach(function <atom:0>);
  return;
}

// fn <atom:0>  args=3 vars=28 closure=0 cpool=23 bc=579B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// args: require, module, exports
// locals: e, t, n, s, a, i, o, c, r, u, d, h, l, b, T, E, m, N, g, L, C, D, CollaborativeDocumentsDb, <class_fields_init>, CollaborativeDocumentsDb#1
function {
  l = function l;
  b = function b;
  T = function T;
  E = function E;
  m = function m;
  N = function N;
  g = function g;
  L = function L;
  C = function C;
  D = function D;
  let CollaborativeDocumentsDb#1;
  let h;
  let d;
  let u;
  let r;
  let c;
  let o;
  let i;
  let a;
  let s;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.setClientSQLNativeForTests = undefined;
  exports.CollaborativeDocumentsDb = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("./DocumentQueries");
  n = require("client_sql/src/ClientSQLDebug");
  s = 50;
  a = "CollaborativeDocumentsDb";
  i = 3;
  o = ["CREATE TABLE document_store (
  singleton INTEGER NOT NULL PRIMARY KEY CHECK (singleton = 1),
  generation INTEGER NOT NULL
);", "CREATE TABLE document (
  document_id TEXT NOT NULL PRIMARY KEY,
  schema_version INTEGER NOT NULL,
  access INTEGER NOT NULL,
  checkpoint BLOB NOT NULL,
  authoritative_checkpoint BLOB NOT NULL,
  checkpoint_version INTEGER NOT NULL,
  checkpoint_sequence INTEGER NOT NULL,
  head_sequence INTEGER NOT NULL,
  has_local_edits INTEGER NOT NULL,
  pending_local_update BLOB,
  saved_snapshot BLOB,
  creation_request TEXT,
  server_document_id TEXT
);", "CREATE TABLE document_update (
  document_id TEXT NOT NULL REFERENCES document(document_id) ON DELETE CASCADE,
  sequence INTEGER NOT NULL,
  update_bytes BLOB NOT NULL,
  source INTEGER NOT NULL,
  PRIMARY KEY (document_id, sequence)
);", "CREATE UNIQUE INDEX document_server_id ON document(server_document_id);"];
  c = [{version: 2, statements: ["ALTER TABLE document ADD COLUMN pending_local_update BLOB;", "ALTER TABLE document ADD COLUMN saved_snapshot BLOB;"]}, {version: 3, statements: ["ALTER TABLE document ADD COLUMN creation_request TEXT;", "ALTER TABLE document ADD COLUMN server_document_id TEXT;", "CREATE UNIQUE INDEX document_server_id ON document(server_document_id);"]}];
  r = ["document", "document_store", "document_update"];
  u = undefined;
  d = Object.create(null);
  h = Object.create(null);
  exports.setClientSQLNativeForTests = l;
  let CollaborativeDocumentsDb;
  let <class_fields_init>;
  class CollaborativeDocumentsDb extends undefined { ... }
  function <atom:0>.open = function <atom:0>;
  <proto:CollaborativeDocumentsDb>.execute = function <atom:0>;
  <proto:CollaborativeDocumentsDb>.query = function <atom:0>;
  <proto:CollaborativeDocumentsDb>.watchQuery = function <atom:0>;
  <proto:CollaborativeDocumentsDb>.transaction = function <atom:0>;
  <proto:CollaborativeDocumentsDb>.runTransaction = function <atom:0>;
  <proto:CollaborativeDocumentsDb>.createTransactionScope = function <atom:0>;
  <proto:CollaborativeDocumentsDb>.close = function <atom:0>;
  <proto:CollaborativeDocumentsDb>.debugInfo = function <atom:0>;
  <proto:CollaborativeDocumentsDb>.recordTransactionDebugEntry = function <atom:0>;
  <proto:CollaborativeDocumentsDb>.notifyTablesChanged = function <atom:0>;
  <proto:CollaborativeDocumentsDb>.emitChangedTables = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CollaborativeDocumentsDb>;
  CollaborativeDocumentsDb = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc CollaborativeDocumentsDb
  CollaborativeDocumentsDb#1 = function <atom:0>;
  exports.CollaborativeDocumentsDb = CollaborativeDocumentsDb#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=collaborative_editor/src/sqlgen/CollaborativeDocumentsDb
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
