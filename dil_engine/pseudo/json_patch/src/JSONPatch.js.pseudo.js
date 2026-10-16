// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=27B file=json_patch/src/JSONPatch
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.operations = e;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=81B file=json_patch/src/JSONPatch
// args: t
// closure: JSONPatch, e
function {
  return new JSONPatch(e.JSONPatchParser.parse(t));
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=81B file=json_patch/src/JSONPatch
// args: t
// closure: JSONPatch, e
function {
  return new JSONPatch(e.JSONPatchParser.parseValue(t));
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=57B file=json_patch/src/JSONPatch
// args: e
// locals: t, this
// closure: o
function {
  this = this;
  let t;
  for (const t of this.operations) {
    o(t, e);
  }
  return;
}

// fn o  args=2 vars=9 closure=3 cpool=0 bc=264B file=json_patch/src/JSONPatch
// args: e, t
// locals: o, p, c, i, n, e#1, n#1
// closure: n, r, a
function {
  let i;
  let c;
  let p;
  let o;
  o = e.path;
  if (!((0 === o.length))) goto L_3d;
  n(e, t);
  return;
  p = o[(o.length - 1)];
  c = String(p);
  i = r(p);
  let n;
  n = 0;
  if (!((n < (o.length - 1)))) goto L_b6;
  let e#1;
  e#1 = o[n];
  t.beginSubObject(String(e#1), r(e#1));
  n = (n + 1);
  (n + 1);
  goto L_5e;
  a(e, c, i, t);
  let n#1;
  n#1 = (o.length - 2);
  if (!((n#1 >= 0))) goto L_107;
  t.endSubObject();
  n#1 = (n#1 - 1);
  (n#1 - 1);
  goto L_ce;
  return;
}

// fn n  args=2 vars=2 closure=1 cpool=0 bc=692B file=json_patch/src/JSONPatch
// args: e, o
// closure: t
function {
  if (!((e.operation !== t.JSONPatchOperationType.Append))) goto L_26c;
  if (!((e.operation !== t.JSONPatchOperationType.Insert))) goto L_223;
  if (!((e.operation !== t.JSONPatchOperationType.Replace))) goto L_223;
  if (!((e.operation !== t.JSONPatchOperationType.Remove))) goto L_1fb;
  goto L_2b3;
  // [栈深重同步 1 -> 0]
  goto L_2b3;
  // [栈深重同步 1 -> 0]
  goto L_2b3;
  // [栈深重同步 1 -> 0]
  o.onAppendRoot(e.value);
  return;
}

// fn a  args=4 vars=4 closure=1 cpool=0 bc=776B file=json_patch/src/JSONPatch
// args: e, o, n, a
// closure: t
function {
  if (!((e.operation !== t.JSONPatchOperationType.Append))) goto L_2be;
  if (!((e.operation !== t.JSONPatchOperationType.Insert))) goto L_273;
  if (!((e.operation !== t.JSONPatchOperationType.Replace))) goto L_227;
  if (!((e.operation !== t.JSONPatchOperationType.Remove))) goto L_1fd;
  goto L_307;
  // [栈深重同步 1 -> 0]
  goto L_307;
  // [栈深重同步 1 -> 0]
  goto L_307;
  // [栈深重同步 1 -> 0]
  goto L_307;
  // [栈深重同步 1 -> 0]
  a.onAppend(o, n, e.value);
  return;
}

// fn r  args=1 vars=1 closure=0 cpool=0 bc=14B file=json_patch/src/JSONPatch
// args: e
function {
  if (!(("number" == typeof e))) goto L_c;
  return e;
  return undefined;
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=8 bc=177B file=json_patch/src/JSONPatch
// args: require, module, exports
// locals: e, t, JSONPatch, <class_fields_init>, JSONPatch#1, o, n, a, r
function {
  o = function o;
  n = function n;
  a = function a;
  r = function r;
  let JSONPatch#1;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.JSONPatch = undefined;
  e = require("./JSONPatchParser");
  t = require("./JSONPatchTypes");
  let JSONPatch;
  let <class_fields_init>;
  class JSONPatch extends undefined { ... }
  function <atom:0>.parse = function <atom:0>;
  function <atom:0>.fromValue = function <atom:0>;
  <proto:JSONPatch>.visit = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:JSONPatch>;
  JSONPatch = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc JSONPatch
  JSONPatch#1 = function <atom:0>;
  exports.JSONPatch = JSONPatch#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=json_patch/src/JSONPatch
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
