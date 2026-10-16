// fn <atom:0>  args=7 vars=15 closure=1 cpool=0 bc=161B file=source_map/src/SourceMap
// args: e, r, n, t, s, o, i
// locals: e#1, r#1, n#1, t#1, s#1, o#1, i#1, this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_10;
  <class_fields_init>.call(this);
  let i#1;
  let o#1;
  let s#1;
  let t#1;
  let n#1;
  let r#1;
  let e#1;
  e#1 = e;
  r#1 = r;
  n#1 = n;
  t#1 = t;
  s#1 = s;
  o#1 = o;
  if (!((i === undefined))) goto L_44;
  i;
  i = 1;
  i#1 = 1;
  this.file = e;
  this.sourceRoot = r;
  this.sources = n;
  this.names = t;
  this.lines = s;
  this.sourcesContent = o;
  this.lineOffset = i;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=167B file=source_map/src/SourceMap
// args: e
// closure: r
function {
  if (!((e.generatedColumnNumber > r))) goto L_2a;
  return 1;
  if (!((e.generatedColumnNumber < r))) goto L_a5;
  if ((!e.nextGeneratedColumnNumber)) goto L_9f;
  if (!((e.nextGeneratedColumnNumber > r))) goto L_a3;
  return 0;
  return -1;
  return 0;
}

// fn <atom:0>  args=3 vars=10 closure=1 cpool=1 bc=626B file=source_map/src/SourceMap
// args: r, n, t
// locals: s, o, i, u, r#1, l, this
// closure: e
function {
  this = this;
  let l;
  let u;
  let i;
  let o;
  let s;
  s = (r - this.lineOffset);
  if (((s >= this.lines.length))) goto L_69;
  if (!((s < 0))) goto L_6c;
  return;
  o = this.lines[s];
  i = -1;
  u = 0;
  if (!(("number" == typeof n))) goto L_15d;
  let r#1;
  r#1 = (n - 1);
  i = e.binarySearch(o.entries, function <atom:0>);
  e.binarySearch(o.entries, function <atom:0>);
  if (!((i >= 0))) goto L_157;
  u = (r#1 - o.entries[i].generatedColumnNumber);
  (r#1 - o.entries[i].generatedColumnNumber);
  // close_loc r#1
  goto L_18c;
  if (!(o.entries.length)) goto L_18b;
  i = 0;
  0;
  if (!((i < 0))) goto L_194;
  return;
  l = o.entries[i];
  if (!((l.originalName == null))) goto L_26c;
  l.originalName;
  return {fileName: l.originalFileName, line: (l.originalLineNumber + 1), column: ((l.originalColumnNumber + u) + 1), name: t};
}

// fn <atom:0>  args=1 vars=3 closure=3 cpool=0 bc=163B file=source_map/src/SourceMap
// args: e
// locals: t, s
// closure: r, n, SourceMap
function {
  let s;
  let t;
  t = r.Base64.toByteArray(e);
  s = n.arrayToString(t);
  return SourceMap.parse(s);   // tail call
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=90B file=source_map/src/SourceMap
// args: e
function {
  if (!(("/" === e.charAt(0)))) goto L_57;
  e = e.substr(1);
  e.substr(1);
  return e;
}

// fn <atom:0>  args=1 vars=18 closure=2 cpool=1 bc=1276B file=source_map/src/SourceMap
// args: e
// locals: r, n, s, o, i, u, l, a, c, m, f, e#1, r#1, o#1, e#2, i#1, f#1
// closure: t, SourceMap
function {
  let m;
  let c;
  let a;
  let l;
  let u;
  let i;
  let o;
  let s;
  let n;
  let r;
  r = JSON.parse(e);
  if (!((3 !== r.version))) goto L_80;
  throw new Error("SourceMap version must be 3");
  if (!(!r.mappings)) goto L_b6;
  throw new Error("Missing mappings");
  if (!((r.sources == null))) goto L_e2;
  r.sources;
  n = [];
  if (!((r.names == null))) goto L_10f;
  r.names;
  s = [];
  n = n.map(function <atom:0>);
  n.map(function <atom:0>);
  o = [];
  i = r.mappings.split(";");
  u = 0;
  l = 0;
  a = 0;
  c = 0;
  m = 0;
  let f;
  for (const f of i) {
    let r#1;
    let e#1;
    e#1 = f.split(",");
    r#1 = [];
    let o#1;
    for (const o#1 of e#1) {
      let f#1;
      let i#1;
      let e#2;
      if ((!o#1)) continue;
      e#2 = t.decode(o#1);
      if (!((1 !== e#2.length))) goto L_289;
      if (!((4 !== e#2.length))) goto L_289;
      if (!((5 !== e#2.length))) goto L_289;
      throw new Error("Invalid mappings (found ".concat(e#2.length, " fields in ", o#1, ")"));
      i#1 = undefined;
      f#1 = undefined;
      u = (u + e#2[0]);
      (u + e#2[0]);
      if (!((e#2.length > 1))) goto L_31b;
      l = (l + e#2[1]);
      (l + e#2[1]);
      a = (a + e#2[2]);
      (a + e#2[2]);
      c = (c + e#2[3]);
      (c + e#2[3]);
      if (!((l >= n.length))) goto L_30f;
      throw new Error("Out of bounds sources index ".concat(l));
      i#1 = n[l];
      n[l];
      if (!((5 === e#2.length))) goto L_37d;
      m = (m + e#2[4]);
      (m + e#2[4]);
      if (!((m >= s.length))) goto L_371;
      throw new Error("Out of bounds names index ".concat(m));
      f#1 = s[m];
      s[m];
      if (!(r#1.length)) goto L_39c;
      r#1[(r#1.length - 1)].nextGeneratedColumnNumber = u;
      u;
      r#1.push({generatedColumnNumber: u, nextGeneratedColumnNumber: undefined, originalColumnNumber: c, originalLineNumber: a, originalFileName: i#1, originalName: f#1});
    }
    o.push({entries: r#1});
    u = 0;
    0;
    // [栈深重同步 0 -> 3]
  }
  return new SourceMap(r.file, r.sourceRoot, r.sources, r.names, o, r.sourcesContent);
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=source_map/src/SourceMap
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.lineOffset = e;
  return;
}

// fn <atom:0>  args=3 vars=5 closure=0 cpool=0 bc=85B file=source_map/src/SourceMap
// args: e, r, n
// locals: t, this
function {
  this = this;
  let t;
  t = (e - this.lineOffset);
  if (!(!(t < 0))) goto L_54;
  if (!((r == null))) goto L_48;
  r;
  return {fileName: undefined, line: t, column: 0, name: undefined};
  return;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=6 bc=246B file=source_map/src/SourceMap
// args: require, module, exports
// locals: e, r, n, t, SourceMap, <class_fields_init>, SourceMap#1, LineOffsetSourceMap, <class_fields_init>#1, LineOffsetSourceMap#1
function {
  let LineOffsetSourceMap#1;
  let SourceMap#1;
  let t;
  let n;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SourceMap = undefined;
  exports.LineOffsetSourceMap = undefined;
  e = require("coreutils/src/ArrayUtils");
  r = require("coreutils/src/Base64");
  n = require("coreutils/src/Uint8ArrayUtils");
  t = require("./VLQ");
  let SourceMap;
  let <class_fields_init>;
  class SourceMap extends undefined { ... }
  <proto:SourceMap>.resolve = function <atom:0>;
  function <atom:0>.parseFromBase64 = function <atom:0>;
  function <atom:0>.parse = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SourceMap>;
  SourceMap = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc SourceMap
  SourceMap#1 = function <atom:0>;
  exports.SourceMap = SourceMap#1;
  let LineOffsetSourceMap;
  let <class_fields_init>#1;
  class LineOffsetSourceMap extends undefined { ... }
  <proto:LineOffsetSourceMap>.resolve = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:LineOffsetSourceMap>;
  LineOffsetSourceMap = function <atom:0>;
  // close_loc <class_fields_init>#1
  LineOffsetSourceMap#1 = function <atom:0>;
  exports.LineOffsetSourceMap = LineOffsetSourceMap#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=source_map/src/SourceMap
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
