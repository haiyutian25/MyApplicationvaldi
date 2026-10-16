// fn n  args=1 vars=8 closure=0 cpool=0 bc=367B file=source_map/src/StackSymbolicator
// args: e
// locals: t, n, r, s, o, a, i
function {
  let i;
  let a;
  let o;
  let s;
  let r;
  let n;
  let t;
  t = undefined;
  n = undefined;
  r = e.split("@");
  if (!((2 === r.length))) goto L_61;
  t = r[0];
  r[0];
  n = r[1];
  goto L_6a;
  // [栈深重同步 1 -> 0]
  n = r[0];
  r[0];
  s = n.split(":");
  o = s[0].replace(" ", "_");
  a = undefined;
  i = undefined;
  if (!((s.length > 1))) goto L_10f;
  i = Number.parseInt(s[1]);
  Number.parseInt(s[1]);
  if (!((s.length > 2))) goto L_14c;
  a = Number.parseInt(s[2]);
  Number.parseInt(s[2]);
  return {name: t, fileName: o, line: i, column: a};
}

// fn r  args=1 vars=8 closure=0 cpool=0 bc=364B file=source_map/src/StackSymbolicator
// args: e
// locals: t, n, r, s, o, a, i
function {
  let i;
  let a;
  let o;
  let s;
  let r;
  let n;
  let t;
  t = e.split(" ");
  if (!((3 !== t.length))) goto L_57;
  throw new Error("Invalid stack frame");
  n = t[1];
  r = t[2];
  r = r.substr(1, (r.length - 2));
  r.substr(1, (r.length - 2));
  s = r.split(":");
  o = s[0];
  a = undefined;
  i = undefined;
  if (!((s.length > 1))) goto L_10c;
  a = Number.parseInt(s[1]);
  Number.parseInt(s[1]);
  if (!((s.length > 2))) goto L_149;
  i = Number.parseInt(s[2]);
  Number.parseInt(s[2]);
  return {name: n, fileName: o, line: a, column: i};
}

// fn s  args=1 vars=5 closure=2 cpool=0 bc=414B file=source_map/src/StackSymbolicator
// args: e
// locals: t, s, a, o
// closure: r, n
function {
  let s;
  let t;
  t = [];
  s = e.split("
");
  let a;
  for (const a of s) {
    a = a.trim();
    a.trim();
    if (!(a)) continue;
    try { // catch -> L_106
    if (!(a.startsWith("at "))) goto L_d5;
    goto L_101;
    // [栈深重同步 4 -> 3]
    t.push(n(a));
    <catch>;
   continue;
    // [栈深重同步 2 -> 4]
    o = <?>;
    try { // catch -> L_190
    t.push({name: a, fileName: "failed to symbolicate: ".concat(o.message)});
    <?>;
   continue;
    // [栈深重同步 2 -> 4]
    throw <?>;
    // [栈深重同步 3 -> 2]
  }
  return t;
}

// fn o  args=2 vars=3 closure=1 cpool=0 bc=188B file=source_map/src/StackSymbolicator
// args: e, n
// locals: r
// closure: t
function {
  let r;
  if (!(!e)) goto L_38;
  if (!((undefined !== n))) goto L_36;
  return new t.LineOffsetSourceMap(n);
  return undefined;
  r = t.SourceMap.parse(e);
  if (!(n)) goto L_b7;
  r.lineOffset = (r.lineOffset + n);
  (r.lineOffset + n);
  return r;
}

// fn a  args=2 vars=6 closure=2 cpool=0 bc=952B file=source_map/src/StackSymbolicator
// args: t, n
// locals: e, r, s, r#1
// closure: o, e
function {
  if ((!t.line)) goto L_116;
  if ((t.fileName.startsWith("<"))) goto L_116;
  if ((t.fileName.endsWith(".ts"))) goto L_116;
  if (!(t.fileName.endsWith(".tsx"))) goto L_11a;
  return t;
  try { // catch -> L_2e7
  let s;
  let r;
  let e;
  e = n(t.fileName, o);
  if (!(!e)) goto L_157;
  return t;
  r = e.resolve(t.line, t.column, t.name);
  if (!(!r)) goto L_1ee;
  return t;
  if (!((r.fileName == null))) goto L_239;
  r.fileName;
  s = t.fileName;
  if (!((r.name == null))) goto L_28e;
  r.name;
  return {fileName: s, name: t.name, line: r.line, column: r.column};
  // [栈深重同步 0 -> 1]
  r#1 = <?>;
  try { // catch -> L_3b7
  if (!(e.isLoggingEnabled)) goto L_3b3;
  console.error("Failed to symbolicate stack frame ".concat(t.fileName, ": ", r#1.message));
  return t;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn i  args=2 vars=4 closure=1 cpool=0 bc=71B file=source_map/src/StackSymbolicator
// args: e, t
// locals: n, r
// closure: a
function {
  let n;
  n = [];
  let r;
  for (const r of e) {
    n.push(a(r, t));
  }
  return n;
}

// fn l  args=2 vars=7 closure=3 cpool=0 bc=643B file=source_map/src/StackSymbolicator
// args: t, n
// locals: e, r, t#1, e#1, r#1
// closure: s, i, e
function {
  try { // catch -> L_1db
  let r;
  let e;
  e = s(t);
  e = i(e, n);
  i(e, n);
  r = "";
  let t#1;
  for (const t#1 of e) {
    let e#1;
    e#1 = t#1.name;
    if ((e#1)) goto L_5f;
    e#1 = "<anonymous>";
    "<anonymous>";
    r = (r + "    at ".concat(e#1, " (", t#1.fileName));
    (r + "    at ".concat(e#1, " (", t#1.fileName));
    if (!(t#1.line)) goto L_1be;
    r = (r + (":" + t#1.line.toString()));
    (r + (":" + t#1.line.toString()));
    if (!(t#1.column)) goto L_1be;
    r = (r + (":" + t#1.column.toString()));
    (r + (":" + t#1.column.toString()));
    r = (r + ")
");
    (r + ")
");
  }
  return r;
  // [栈深重同步 0 -> 1]
  r#1 = <?>;
  try { // catch -> L_282
  if (!(e.isLoggingEnabled)) goto L_27e;
  console.error("Failed to process stack frames:", r#1.message, r#1.stack);
  return t;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=7 bc=210B file=source_map/src/StackSymbolicator
// args: require, module, exports
// locals: e, t, n, r, s, o, a, i, l
function {
  n = function n;
  r = function r;
  s = function s;
  o = function o;
  a = function a;
  i = function i;
  l = function l;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.parseStackFrames = undefined;
  exports.symbolicateStackFrames = undefined;
  exports.symbolicateStack = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  t = require("./SourceMap");
  exports.parseStackFrames = s;
  exports.symbolicateStackFrames = i;
  exports.symbolicateStack = l;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=source_map/src/StackSymbolicator
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
