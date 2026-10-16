// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=json_patch/src/JSONPatchParser
// args: e
function {
  e.InheritPrevious = 0;
  e[0] = "InheritPrevious";
  e.RequireExplicit = 1;
  e[1] = "RequireExplicit";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=39B file=json_patch/src/JSONPatchParser
// args: e
function {
  e.InheritPrevious = 0;
  e[0] = "InheritPrevious";
  e.UseParentPath = 1;
  e[1] = "UseParentPath";
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=194B file=json_patch/src/JSONPatchParser
// args: e
// locals: r, t, this
function {
  this = this;
  let r;
  r = undefined;
  try { // catch -> L_3e
  r = JSON.parse(e);
  JSON.parse(e);
  <?>;
  goto L_9a;
  // [栈深重同步 0 -> 1]
  t = <?>;
  try { // catch -> L_99
  throw new Error("Unable to parse JSON patch: ".concat(t.message));
  // [栈深重同步 0 -> 1]
  throw <?>;
  return this.parseValue(r);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=120B file=json_patch/src/JSONPatchParser
// args: e
// locals: r
// closure: i, t, n
function {
  let r;
  r = [];
  i(e, [], {channel: undefined, operation: undefined, path: undefined, missingOperationBehavior: t.InheritPrevious, missingPathBehavior: n.InheritPrevious}, r);
  return r;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=15B file=json_patch/src/JSONPatchParser
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  return;
}

// fn i  args=4 vars=5 closure=1 cpool=0 bc=80B file=json_patch/src/JSONPatchParser
// args: e, r, t, n
// locals: i
// closure: o
function {
  if (!(Array.isArray(e))) goto L_46;
  let i;
  for (const i of e) {
    o(i, r, t, n);
  }
  return;
  o(e, r, t, n);
  return;
}

// fn o  args=4 vars=12 closure=11 cpool=0 bc=1289B file=json_patch/src/JSONPatchParser
// args: r, o, u, h
// locals: f, P, d, N, w, e, y, S
// closure: O, a, s, p, l, t, n, i, c, e, v
function {
  let S;
  let y;
  let w;
  let N;
  let d;
  let P;
  let f;
  if (!(!O(r))) goto L_2a;
  throw new Error("JSON patch operations must be objects.");
  f = r;
  P = a(f, u.channel);
  d = s(f, u.operation, u.missingOperationBehavior);
  N = p(f, u.path, u.missingPathBehavior);
  w = l(o, N);
  u.channel = P;
  u.operation = d;
  u.path = N;
  if (!(("patch" === d))) goto L_225;
  let e;
  if (!(!Array.isArray(f.v))) goto L_189;
  throw new Error("The patch operation requires an array value.");
  e = {channel: P, operation: undefined, path: undefined, missingOperationBehavior: t.RequireExplicit, missingPathBehavior: n.UseParentPath};
  i(f.v, w, e, h);
  return;
  y = c(d);
  S = f.v;
  if (((y === e.JSONPatchOperationType.Append))) goto L_33a;
  if (((y === e.JSONPatchOperationType.Insert))) goto L_33a;
  if (!((y === e.JSONPatchOperationType.Replace))) goto L_39f;
  if (!((undefined === f.v))) goto L_39f;
  throw new Error("The ".concat(d, " operation requires a v field."));
  if (!((y !== e.JSONPatchOperationType.Truncate))) goto L_4b0;
  if (!((y !== e.JSONPatchOperationType.Remove))) goto L_478;
  goto L_4ae;
  // [栈深重同步 1 -> 0]
  h.push({operation: y, path: w});
  return;
  if (!(!v(S))) goto L_4c9;
  throw new Error("The truncate operation requires a non-negative integer value.");
  h.push({operation: y, path: w, value: S});
  return;
}

// fn a  args=2 vars=2 closure=1 cpool=0 bc=169B file=json_patch/src/JSONPatchParser
// args: e, r
// closure: v
function {
  if (((undefined === e.c))) goto L_4c;
  if (!((null === e.c))) goto L_50;
  return r;
  if (!(!v(e.c))) goto L_86;
  throw new Error("The c field must be a non-negative integer.");
  return e.c;
}

// fn s  args=3 vars=3 closure=1 cpool=0 bc=246B file=json_patch/src/JSONPatchParser
// args: e, r, n
// closure: t
function {
  if (((undefined === e.o))) goto L_4c;
  if (!((null === e.o))) goto L_99;
  if (!((n === t.RequireExplicit))) goto L_83;
  throw new Error("Nested JSON patch operations must include an o field.");
  if (!((undefined === r))) goto L_97;
  throw new Error("The first JSON patch operation must include an o field.");
  return r;
  if (!(("string" != typeof e.o))) goto L_d3;
  throw new Error("The o field must be a string.");
  return e.o;
}

// fn p  args=3 vars=3 closure=2 cpool=0 bc=225B file=json_patch/src/JSONPatchParser
// args: e, r, t
// closure: n, u
function {
  if (((undefined === e.p))) goto L_4c;
  if (!((null === e.p))) goto L_81;
  if (((t === n.UseParentPath))) goto L_79;
  if (!((undefined === r))) goto L_7f;
  return [];
  return r;
  if (!(("string" != typeof e.p))) goto L_bb;
  throw new Error("The p field must be a string.");
  return u(e.p);   // tail call
}

// fn u  args=1 vars=5 closure=2 cpool=0 bc=136B file=json_patch/src/JSONPatchParser
// args: e
// locals: r, t, n, e#1
// closure: h, f
function {
  let t;
  let r;
  if (!(("" === e))) goto L_f;
  return [];
  r = e.split("/");
  t = [];
  let n;
  for (const n of r) {
    let e#1;
    e#1 = h(n);
    t.push(f(e#1));
  }
  return t;
}

// fn h  args=1 vars=5 closure=0 cpool=2 bc=577B file=json_patch/src/JSONPatchParser
// args: e
// locals: r, t, n, i
function {
  let n;
  let t;
  let r;
  r = e.indexOf("~");
  if (!((-1 === r))) goto L_3d;
  return e;
  t = [];
  n = 0;
  if (!((-1 !== r))) goto L_1bf;
  let i;
  if (!((r > n))) goto L_ad;
  t.push(e.slice(n, r));
  i = e.charAt((r + 1));
  if (!(("0" === i))) goto L_110;
  t.push("~");
  goto L_180;
  if (!(("1" !== i))) goto L_153;
  throw new Error("Invalid path escape sequence "~".concat(i, ""."));
  t.push("/");
  n = (r + 2);
  (r + 2);
  r = e.indexOf("~", n);
  e.indexOf("~", n);
  goto L_43;
  if (!((n < e.length))) goto L_218;
  t.push(e.slice(n));
  return t.join("");   // tail call
}

// fn c  args=1 vars=1 closure=1 cpool=0 bc=452B file=json_patch/src/JSONPatchParser
// args: r
// closure: e
function {
  if (!(("add" === r))) goto L_4f;
  return e.JSONPatchOperationType.Insert;
  if (!(("append" === r))) goto L_9e;
  return e.JSONPatchOperationType.Append;
  if (!(("remove" === r))) goto L_ed;
  return e.JSONPatchOperationType.Remove;
  if (!(("replace" === r))) goto L_13c;
  return e.JSONPatchOperationType.Replace;
  if (!(("truncate" === r))) goto L_18b;
  return e.JSONPatchOperationType.Truncate;
  throw new Error("Unsupported JSON patch operation "".concat(r, ""."));
}

// fn f  args=1 vars=2 closure=1 cpool=0 bc=108B file=json_patch/src/JSONPatchParser
// args: e
// locals: t
// closure: r
function {
  let t;
  if (!(!r.test(e))) goto L_30;
  return e;
  t = Number(e);
  if (!(Number.isSafeInteger(t))) goto L_6a;
  return t;
  return e;
}

// fn l  args=2 vars=5 closure=0 cpool=0 bc=141B file=json_patch/src/JSONPatchParser
// args: e, r
// locals: t, n, n#1
function {
  let t;
  if (!((0 === e.length))) goto L_b;
  return r;
  if (!((0 === r.length))) goto L_13;
  return e;
  t = [];
  let n;
  for (const n of e) {
    t.push(n);
  }
  let n#1;
  for (const n#1 of r) {
    t.push(n#1);
  }
  return t;
}

// fn v  args=1 vars=1 closure=0 cpool=0 bc=62B file=json_patch/src/JSONPatchParser
// args: e
function {
  if (!(("number" == typeof e))) goto L_3d;
  if (!(Number.isInteger(e))) goto L_3d;
  return (e >= 0);
}

// fn O  args=1 vars=1 closure=0 cpool=0 bc=63B file=json_patch/src/JSONPatchParser
// args: e
function {
  if (!(("object" == typeof e))) goto L_3e;
  if (!((null !== e))) goto L_3e;
  return !Array.isArray(e);
}

// fn <atom:0>  args=3 vars=22 closure=0 cpool=19 bc=221B file=json_patch/src/JSONPatchParser
// args: require, module, exports
// locals: e, r, t, n, JSONPatchParser, <class_fields_init>, JSONPatchParser#1, i, o, a, s, p, u, h, c, f, l, v, O
function {
  i = function i;
  o = function o;
  a = function a;
  s = function s;
  p = function p;
  u = function u;
  h = function h;
  c = function c;
  f = function f;
  l = function l;
  v = function v;
  O = function O;
  let JSONPatchParser#1;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.JSONPatchParser = undefined;
  e = require("./JSONPatchTypes");
  r = new RegExp("^(0|[1-9]\\d*)$");
  if ((t)) goto L_93;
  t = {};
  !function <atom:0>({});
  if ((n)) goto L_9f;
  n = {};
  function <atom:0>({});
  let JSONPatchParser;
  let <class_fields_init>;
  class JSONPatchParser extends undefined { ... }
  function <atom:0>.parse = function <atom:0>;
  function <atom:0>.parseValue = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:JSONPatchParser>;
  JSONPatchParser = function <atom:0>;
  // close_loc <class_fields_init>
  JSONPatchParser#1 = function <atom:0>;
  exports.JSONPatchParser = JSONPatchParser#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=json_patch/src/JSONPatchParser
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
