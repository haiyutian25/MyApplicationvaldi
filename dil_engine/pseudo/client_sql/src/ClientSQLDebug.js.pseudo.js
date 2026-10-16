// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=4B file=client_sql/src/ClientSQLDebug
// args: e
function {
  return e();   // tail call
}

// fn l  args=0 vars=1 closure=2 cpool=1 bc=71B file=client_sql/src/ClientSQLDebug
// locals: e
// closure: o, u
function {
  let e;
  o = (o + 1);
  (o + 1);
  e = u;
  u = [];
  [];
  e.forEach(function <atom:0>);
  return o;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=43B file=client_sql/src/ClientSQLDebug
// closure: a, t, e, o
function {
  if ((a)) goto L_2a;
  a = true;
  true;
  clearTimeout(t);
  e({changed: true, revision: o});
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=0 bc=131B file=client_sql/src/ClientSQLDebug
// locals: t
// closure: a, u, r, e, o
function {
  let t;
  if (!(a)) goto L_9;
  return;
  a = true;
  true;
  t = u.indexOf(r);
  if (!((-1 !== t))) goto L_6f;
  u.splice(t, 1);
  e({changed: false, revision: o});
  return;
}

// fn <atom:0>  args=1 vars=4 closure=3 cpool=2 bc=81B file=client_sql/src/ClientSQLDebug
// args: e
// locals: t, a, r
// closure: o, u, n
function {
  let r;
  let a;
  let t;
  t = undefined;
  a = false;
  r = function <atom:0>;
  t = setTimeout(function <atom:0>, n);
  setTimeout(function <atom:0>, n);
  u.push(r);
  return;
}

// fn c  args=2 vars=3 closure=2 cpool=1 bc=168B file=client_sql/src/ClientSQLDebug
// args: e, t
// locals: n
// closure: o, u
function {
  let n;
  if (!((e !== o))) goto L_43;
  return Promise.resolve({changed: true, revision: o});   // tail call
  n = Math.min(30000, Math.max(100, t));
  return new Promise(function <atom:0>);
}

// fn m  args=1 vars=1 closure=0 cpool=2 bc=93B file=client_sql/src/ClientSQLDebug
// args: e
function {
  return """.concat(e.replace(new RegExp("\""), """"), """);   // tail call
}

// fn d  args=1 vars=1 closure=0 cpool=2 bc=93B file=client_sql/src/ClientSQLDebug
// args: e
function {
  return "'".concat(e.replace(new RegExp("'"), "''"), "'");   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=37B file=client_sql/src/ClientSQLDebug
// args: e
function {
  return (e.pk > 0);
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=70B file=client_sql/src/ClientSQLDebug
// args: e, t
function {
  return (e.pk - t.pk);
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=78B file=client_sql/src/ClientSQLDebug
// args: e
// closure: m
function {
  return "".concat(m(e.name), " DESC");   // tail call
}

// fn b  args=2 vars=3 closure=1 cpool=3 bc=228B file=client_sql/src/ClientSQLDebug
// args: e, t
// locals: n
// closure: m
function {
  let n;
  n = t.filter(function <atom:0>).sort(function <atom:0>);
  if (!(n.length)) goto L_d3;
  return " ORDER BY ".concat(n.map(function <atom:0>).join(", "));
  if (!(("table" === e))) goto L_e2;
  return " ORDER BY rowid DESC";
  return "";
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=15B file=client_sql/src/ClientSQLDebug
// args: e
// closure: r
function {
  if (!((r[e] == null))) goto L_c;
  r[e];
  return undefined;
  // [栈深重同步 0 -> 1]
  return <?>[0];
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=4B file=client_sql/src/ClientSQLDebug
// args: e
function {
  return (undefined !== e);
}

// fn g  args=0 vars=0 closure=1 cpool=2 bc=120B file=client_sql/src/ClientSQLDebug
// closure: r
function {
  return Object.keys(r).map(function <atom:0>).filter(function <atom:0>);   // tail call
}

// fn f  args=1 vars=1 closure=1 cpool=0 bc=6B file=client_sql/src/ClientSQLDebug
// args: e
// closure: i
function {
  i;
  delete e;
  return;
}

// fn p  args=2 vars=5 closure=2 cpool=0 bc=470B file=client_sql/src/ClientSQLDebug
// args: e, t
// locals: n, a, n#1
// closure: d, m
function {
  let a;
  let n;
  n = (await e.query("PRAGMA table_info(".concat(d(t.name), ")")));
  a = null;
  try { // catch -> L_13f
  let n#1;
  n#1 = (await e.query("SELECT COUNT(*) AS count FROM ".concat(m(t.name))));
  if (!((n#1[0] == null))) goto L_10f;
  n#1[0];
  goto L_130;
  if (!((undefined.count == null))) goto L_136;
  undefined.count;
  a = Number(0);
  Number(0);
  <?>;
  goto L_14f;
  // [栈深重同步 0 -> 1]
  <?>;
  try { // catch -> L_14e
  a = null;
  null;
  <?>;
  goto L_14f;
  // [栈深重同步 0 -> 1]
  throw <?>;
  return {name: t.name, type: t.type, sql: t.sql, rowCount: a, columns: n}; // async
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=6B file=client_sql/src/ClientSQLDebug
// args: t
// closure: p, e
function {
  return p(e, t);   // tail call
}

// fn h  args=1 vars=4 closure=1 cpool=1 bc=591B file=client_sql/src/ClientSQLDebug
// args: e
// locals: t, n, a
// closure: p
function {
  let a;
  let n;
  let t;
  t = (await e.query("PRAGMA user_version"));
  n = (await e.query("SELECT name, type, sql FROM sqlite_schema WHERE type IN ('table', 'view') AND name NOT LIKE 'sqlite_%' ORDER BY type, name"));
  if (!(e.debugInfo)) goto L_ad;
  goto L_ae;
  // [栈深重同步 1 -> 0]
  a = null;
  if (!((t[0] == null))) goto L_1a0;
  t[0];
  goto L_1c1;
  if (!((undefined.user_version == null))) goto L_1e8;
  undefined.user_version;
  return {id: "target:".concat(e.name), name: e.name, path: "".concat(e.name, " (target ClientSQL)"), root: "debugger-target", size: null, modifiedAt: null, userVersion: Number(e.schemaVersion), debugInfo: a, tables: (await Promise.all(n.map(function <atom:0>)))}; // async
}

// fn w  args=2 vars=4 closure=3 cpool=0 bc=281B file=client_sql/src/ClientSQLDebug
// args: e, t
// locals: n, r
// closure: i, a, h
function {
  let r;
  let n;
  n = i[e.name];
  if (!(!t)) goto L_b2;
  if (!(n)) goto L_b2;
  if (!(((Date.now() - n.cachedAt) < a))) goto L_b2;
  return n.summary; // async
  r = (await h(e));
  i[e.name] = {cachedAt: Date.now(), summary: r};
  return r; // async
}

// fn y  args=2 vars=3 closure=1 cpool=0 bc=123B file=client_sql/src/ClientSQLDebug
// args: e, t
// locals: n
// closure: p
function {
  let n;
  n = (await e.query("SELECT name, type, sql FROM sqlite_schema WHERE type IN ('table', 'view') AND name NOT LIKE 'sqlite_%' AND name = ? LIMIT 1", [t]))[0];
  if (!(!n)) goto L_74;
  throw new Error("Unknown ClientSQL table '".concat(t, "'."));
  return p(e, n); // async
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=8B file=client_sql/src/ClientSQLDebug
// args: e
// closure: w, t
function {
  return w(e, t);   // tail call
}

// fn C  args=1 vars=2 closure=3 cpool=1 bc=172B file=client_sql/src/ClientSQLDebug
// args: e
// locals: t
// closure: w, o, g
function {
  let t;
  if (!((e == null))) goto L_11;
  e;
  goto L_32;
  t = Boolean(undefined.refresh);
  return {source: "target", revision: o, roots: ["debugger-target"], databases: (await Promise.all(g().map(function <atom:0>)))}; // async
}

// fn E  args=1 vars=10 closure=5 cpool=2 bc=1080B file=client_sql/src/ClientSQLDebug
// args: e
// locals: t, n, a, i, s, u, l, c, d
// closure: r, y, b, m, o
function {
  let d;
  let c;
  let l;
  let u;
  let s;
  let i;
  let a;
  let n;
  let t;
  if (!((e == null))) goto L_29;
  e;
  goto L_4a;
  if (!((undefined.databaseId == null))) goto L_50;
  undefined.databaseId;
  t = String("");
  if (!(t.startsWith("target:"))) goto L_aa;
  goto L_ad;
  // [栈深重同步 1 -> 0]
  n = t;
  if (!((r[n] == null))) goto L_bd;
  r[n];
  goto L_bf;
  a = undefined[0];
  if (!(!a)) goto L_101;
  throw new Error("Unknown ClientSQL database '".concat(n, "'."));
  if (!((e == null))) goto L_10f;
  e;
  goto L_130;
  if (!((undefined.table == null))) goto L_136;
  undefined.table;
  i = String("");
  if (!(!i)) goto L_14d;
  throw new Error("Missing required table.");
  if (!((e == null))) goto L_1ab;
  e;
  goto L_1cc;
  if (!((undefined.limit == null))) goto L_1d3;
  undefined.limit;
  s = Math.min(500, Math.max(1, Number(100)));
  if (!((e == null))) goto L_211;
  e;
  goto L_232;
  if (!((undefined.offset == null))) goto L_238;
  undefined.offset;
  u = Math.max(0, Number(0));
  l = (await y(a, i));
  c = b(l.type, l.columns);
  d = (await a.query("SELECT * FROM ".concat(m(i), c, " LIMIT ", s, " OFFSET ", u)));
  if ((c.replace(new RegExp("^\\s*ORDER BY\\s+"), ""))) goto L_401;
  return {source: "target", revision: o, databaseId: "target:".concat(a.name), databaseName: a.name, table: i, limit: s, offset: u, rowCount: l.rowCount, orderBy: null, columns: l.columns, rows: d}; // async
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=202B file=client_sql/src/ClientSQLDebug
// args: e
// locals: t, n, a
function {
  let a;
  let n;
  let t;
  t = e.databases;
  n = (t.length > 0);
  if (!(n)) goto L_a4;
  if (!((1 === t.length))) goto L_95;
  goto L_9a;
  // [栈深重同步 6 -> 5]
  goto L_a9;
  // [栈深重同步 2 -> 1]
  null;
  e;
  a = {id: "client-sql", name: "ClientSQL", kind: "sql", available: n, reason: "No ClientSQL databases are currently open."};
  return {providers: [a], sql: a};
}

// fn <atom:0>  args=2 vars=2 closure=6 cpool=1 bc=286B file=client_sql/src/ClientSQLDebug
// args: e, a
// closure: n, C, t, E, c, o
function {
  if (!((e === n))) goto L_31;
  return C(a).then(function <atom:0>);
  if (!((e === t))) goto L_11c;
  if (!((a == null))) goto L_49;
  a;
  goto L_6a;
  if (!(("table" === undefined.action))) goto L_71;
  return E(a);
  if (!((a == null))) goto L_7f;
  a;
  goto L_a0;
  if (!(("wait" === undefined.action))) goto L_118;
  if (!((a == null))) goto L_b4;
  a;
  goto L_d5;
  if (!((undefined.revision == null))) goto L_dd;
  undefined.revision;
  if (!((a == null))) goto L_ec;
  a;
  goto L_10d;
  if (!((undefined.timeoutMs == null))) goto L_115;
  undefined.timeoutMs;
  return c(Number(o), Number(25000));
  return C(a);
  return undefined;
}

// fn S  args=0 vars=0 closure=8 cpool=1 bc=100B file=client_sql/src/ClientSQLDebug
// closure: n, C, t, E, c, o, s, e
function {
  if ((s)) goto L_63;
  s = true;
  true;
  e.jsx.addCustomMessageHandler({messageReceived: function <atom:0>});
  return;
}

// fn D  args=1 vars=2 closure=4 cpool=0 bc=185B file=client_sql/src/ClientSQLDebug
// args: e
// locals: t
// closure: S, r, f, l
function {
  let t;
  S();
  t = r[e.name];
  if ((t)) goto L_67;
  t = [];
  [];
  r[e.name] = t;
  t;
  t.push(e);
  f(e.name);
  l();
  return;
}

// fn L  args=1 vars=3 closure=3 cpool=0 bc=233B file=client_sql/src/ClientSQLDebug
// args: e
// locals: t, n
// closure: r, f, l
function {
  let n;
  let t;
  t = r[e.name];
  if (!(!t)) goto L_34;
  return;
  n = t.indexOf(e);
  if (!((-1 !== n))) goto L_91;
  t.splice(n, 1);
  if ((t.length)) goto L_c0;
  // [栈深重同步 2 -> 1]
  r;
  f(e.name);
  l();
  return;
}

// fn v  args=1 vars=1 closure=3 cpool=0 bc=93B file=client_sql/src/ClientSQLDebug
// args: e
// closure: f, i, l
function {
  if (!(e)) goto L_8;
  goto L_59;
  // [栈深重同步 1 -> 0]
  Object.keys(i).forEach(f);
  l();
  return;
}

// fn <atom:0>  args=3 vars=29 closure=0 cpool=17 bc=345B file=client_sql/src/ClientSQLDebug
// args: require, module, exports
// locals: e, t, n, a, r, i, s, o, u, l, c, m, d, b, g, f, p, h, w, y, C, E, S, D, L, v
function {
  l = function l;
  c = function c;
  m = function m;
  d = function d;
  b = function b;
  g = function g;
  f = function f;
  p = function p;
  h = function h;
  w = function w;
  y = function y;
  C = function C;
  E = function E;
  S = function S;
  D = function D;
  L = function L;
  v = function v;
  let u;
  let o;
  let s;
  let i;
  let r;
  let a;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.registerClientSQLDebugDatabase = undefined;
  exports.unregisterClientSQLDebugDatabase = undefined;
  exports.notifyClientSQLDebugChanged = undefined;
  e = require("valdi_core/src/JSXBootstrap");
  t = "ValdiClientSQL";
  n = "ValdiDebuggerDataProviders";
  a = 2000;
  r = Object.create(null);
  i = Object.create(null);
  s = false;
  o = 0;
  u = [];
  exports.registerClientSQLDebugDatabase = D;
  exports.unregisterClientSQLDebugDatabase = L;
  exports.notifyClientSQLDebugChanged = v;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=client_sql/src/ClientSQLDebug
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
