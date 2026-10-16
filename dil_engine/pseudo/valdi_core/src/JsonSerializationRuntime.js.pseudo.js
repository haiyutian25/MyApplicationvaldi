// fn r  args=2 vars=2 closure=0 cpool=0 bc=54B file=valdi_core/src/JsonSerializationRuntime
// args: e, n
function {
  return new TypeError("".concat(e, " expected ", n));
}

// fn t  args=1 vars=1 closure=0 cpool=0 bc=63B file=valdi_core/src/JsonSerializationRuntime
// args: e
function {
  if (!(("object" == typeof e))) goto L_3e;
  if (!((null !== e))) goto L_3e;
  return !Array.isArray(e);
}

// fn o  args=2 vars=3 closure=1 cpool=0 bc=186B file=valdi_core/src/JsonSerializationRuntime
// args: n, r
// locals: t
// closure: e
function {
  let t;
  if (!((r instanceof Error))) goto L_30;
  goto L_35;
  // [栈深重同步 1 -> 0]
  t = "invalid JSON value";
  if (!(e.isLoggingEnabled)) goto L_b9;
  console.warn("Resilient JSON decoding recovered at ".concat(n, ": ", t));
  return;
}

// fn i  args=3 vars=3 closure=2 cpool=0 bc=536B file=valdi_core/src/JsonSerializationRuntime
// args: e, r, t
// closure: o, n
function {
  o(r, t);
  if (!(!e.optional)) goto L_217;
  if (!((e.schema.kind === n.String))) goto L_98;
  return "";
  if (!((e.schema.kind === n.Number))) goto L_c0;
  return 0;
  if (!((e.schema.kind === n.Boolean))) goto L_e9;
  return false;
  if (!((e.schema.kind === n.Array))) goto L_113;
  return [];
  if (!((e.schema.kind === n.Dictionary))) goto L_13b;
  return {};
  if (!((e.schema.kind === n.Enum))) goto L_1ef;
  if (!((undefined !== e.schema.unknownValue))) goto L_214;
  return e.schema.unknownValue;
  (e.schema.kind === n.Object);
  e.schema.kind;
  throw t;
  return;
}

// fn a  args=4 vars=7 closure=5 cpool=0 bc=952B file=valdi_core/src/JsonSerializationRuntime
// args: e, t, a, c
// locals: u, s, l
// closure: n, i, r, f, o
function {
  let s;
  let u;
  u = "".concat(a, ".", t.name);
  s = e[t.jsonName];
  if (!((null === s))) goto L_137;
  if (((true === t.schema.nullable))) goto L_133;
  if (!((t.schema.kind === n.Null))) goto L_137;
  return null;
  if (!((null == s))) goto L_2cf;
  if (!((undefined !== t.fallback))) goto L_193;
  if (!((null === t.fallback))) goto L_18f;
  return null;
  return [];
  if (!(t.optional)) goto L_1b8;
  return;
  if (!((t.schema.kind === n.Array))) goto L_224;
  return [];
  if (!((t.schema.kind === n.Dictionary))) goto L_28e;
  return {};
  if (!(t.resilient)) goto L_2c4;
  return i(t, u, r(u, "a value"));   // tail call
  throw r(u, "a value");
  try { // catch -> L_325
  return f(s, t.schema, u, t.resilient, c);
  // [栈深重同步 0 -> 1]
  l = <?>;
  try { // catch -> L_3b7
  if (!((undefined !== t.fallback))) goto L_388;
  o(u, l);
  if (!((null === t.fallback))) goto L_383;
  goto L_386;
  // [栈深重同步 1 -> 0]
  return [];
  if (!(t.resilient)) goto L_3b5;
  return i(t, u, l);
  throw l;
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn c  args=5 vars=10 closure=3 cpool=0 bc=295B file=valdi_core/src/JsonSerializationRuntime
// args: e, n, t, i, a
// locals: c, u, r, n#1, s
// closure: r, f, o
function {
  let u;
  let c;
  if (!(!Array.isArray(e))) goto L_3c;
  throw r(t, "an array");
  c = n.element;
  if (!((undefined === c))) goto L_6f;
  throw r(t, "an array element schema");
  u = [];
  let r;
  r = 0;
  if (!((r < e.length))) goto L_123;
  let n#1;
  n#1 = "".concat(t, "[", r, "]");
  try { // catch -> L_fe
  u.push(f(e[r], c, n#1, false, a));
  <?>;
  goto L_118;
  // [栈深重同步 0 -> 1]
  s = <?>;
  try { // catch -> L_117
  if (!(!i)) goto L_10c;
  throw s;
  o(n#1, s);
  <?>;
  goto L_118;
  // [栈深重同步 0 -> 1]
  throw <?>;
  r = <r_new>;
  (r++);
  goto L_78;
  return u;
}

// fn u  args=5 vars=11 closure=4 cpool=0 bc=260B file=valdi_core/src/JsonSerializationRuntime
// args: e, n, i, a, c
// locals: u, s, l, r, n#1, d
// closure: t, r, f, o
function {
  let l;
  let s;
  let u;
  if (!(!t(e))) goto L_18;
  throw r(i, "an object");
  u = n.element;
  if (!((undefined === u))) goto L_4b;
  throw r(i, "a dictionary value schema");
  s = {};
  l = 0;
  let r;
  for (const r of Object.keys(e)) {
    let n#1;
    l = <l_new>;
    n#1 = "".concat(i, "[", (l++), "]");
    try { // catch -> L_e0
    s[r] = f(e[r], u, n#1, false, c);
    <catch>;
   continue;
    // [栈深重同步 2 -> 4]
    d = <?>;
    try { // catch -> L_f9
    if (!(!a)) goto L_ee;
    throw d;
    o(n#1, d);
    <?>;
   continue;
    // [栈深重同步 2 -> 4]
    throw <?>;
    // [栈深重同步 3 -> 2]
  }
  return s;
}

// fn s  args=4 vars=8 closure=3 cpool=0 bc=203B file=valdi_core/src/JsonSerializationRuntime
// args: e, n, o, i
// locals: c, u, r, n#1
// closure: t, r, a
function {
  let u;
  let c;
  if (!(!t(e))) goto L_15;
  throw r(o, "an object");
  c = n.fields;
  if (!((undefined === c))) goto L_48;
  throw r(o, "an object schema");
  u = {};
  let r;
  for (const r of c) {
    let n#1;
    n#1 = a(e, r, o, i);
    if (!((undefined === n#1))) goto L_8f;
    if ((r.optional)) goto L_c0;
    u[r.name] = n#1;
    n#1;
  }
  return u;
}

// fn l  args=3 vars=3 closure=1 cpool=0 bc=293B file=valdi_core/src/JsonSerializationRuntime
// args: e, n, t
// closure: r
function {
  if (!(("boolean" == typeof e))) goto L_60;
  if (!((n.values == null))) goto L_36;
  n.values;
  goto L_5b;
  if (!((true === undefined.includes(e)))) goto L_60;
  return e;
  if (!(("string" != typeof e))) goto L_7d;
  if (!(("number" != typeof e))) goto L_7d;
  throw r(t, "an enum value");
  if (!((n.values == null))) goto L_a9;
  n.values;
  goto L_ce;
  if (!((true === undefined.includes(e)))) goto L_d3;
  return e;
  if (!((undefined !== n.unknownValue))) goto L_11c;
  return n.unknownValue;
  throw r(t, "a known enum value");
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=70B file=valdi_core/src/JsonSerializationRuntime
// args: e
// closure: o
function {
  return (e.name === o.discriminatorKey);
}

// fn f  args=5 vars=9 closure=8 cpool=1 bc=1232B file=valdi_core/src/JsonSerializationRuntime
// args: e, o, i, a, d
// locals: n, n#1, r, m
// closure: n, r, c, u, s, l, f, t
function {
  if (!((null === e))) goto L_2e;
  if (!((true === o.nullable))) goto L_2e;
  return null;
  if (!((o.kind === n.Null))) goto L_86;
  if (!((null !== e))) goto L_84;
  throw r(i, "null");
  return null;
  if (!((o.kind === n.String))) goto L_c1;
  if (!(("string" != typeof e))) goto L_bf;
  throw r(i, "a string");
  return e;
  if (!((o.kind === n.Number))) goto L_12b;
  if ((("number" != typeof e))) goto L_11e;
  if (!(!Number.isFinite(e))) goto L_129;
  throw r(i, "a finite number");
  return e;
  if (!((o.kind === n.Boolean))) goto L_166;
  if (!(("boolean" != typeof e))) goto L_164;
  throw r(i, "a boolean");
  return e;
  if (!((o.kind === n.Array))) goto L_197;
  return c(e, o, i, a, d);   // tail call
  if (!((o.kind === n.Dictionary))) goto L_1c8;
  return u(e, o, i, a, d);   // tail call
  if (!((o.kind === n.Object))) goto L_1fa;
  return s(e, o, i, d);   // tail call
  if (!((o.kind === n.Enum))) goto L_229;
  return l(e, o, i);   // tail call
  if (!((o.kind === n.Reference))) goto L_2ef;
  let n;
  if (!((undefined === o.referenceId))) goto L_27e;
  goto L_2cf;
  // [栈深重同步 2 -> 1]
  if (!((d == null))) goto L_289;
  d;
  goto L_2cf;
  n = undefined.get(o.referenceId);
  if (!((undefined === n))) goto L_2e0;
  throw r(i, "a defined schema reference");
  return f(e, n, i, a, d);   // tail call
  if (!((o.kind === n.Union))) goto L_4cf;
  let n#1;
  if (!((o.variants == null))) goto L_345;
  o.variants;
  for (const n#1 of []) {
    if (!((undefined !== o.discriminatorKey))) goto L_48d;
    let r;
    if (!((n#1.fields == null))) goto L_3a2;
    n#1.fields;
    goto L_3c8;
    r = undefined.find(function <atom:0>);
    if ((!t(e))) goto L_477;
    if (!((r == null))) goto L_3e2;
    r;
    goto L_476;
    if (!((undefined.schema.values == null))) goto L_42c;
    undefined.schema.values;
    goto L_476;
    if ((!undefined.includes(e[r.jsonName]))) continue;
    return f(e, n#1, i, a, d);
    // [栈深重同步 0 -> 3]
    try { // catch -> L_4a7
    return f(e, n#1, i, a, d);
    // [栈深重同步 0 -> 4]
    m = <?>;
    try { // catch -> L_4bc
    if (!(!(m instanceof TypeError))) goto L_4b9;
    throw m;
    <?>;
   continue;
    // [栈深重同步 2 -> 4]
    throw <?>;
    // [栈深重同步 3 -> 2]
  }
  throw r(i, "a supported union value");
  // [栈深重同步 0 -> 1]
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=53B file=valdi_core/src/JsonSerializationRuntime
// args: n
// closure: f, e
function {
  if (!((e.name == null))) goto L_2f;
  e.name;
  return f(n, e, "$", false, undefined);   // tail call
}

// fn d  args=1 vars=1 closure=1 cpool=1 bc=14B file=valdi_core/src/JsonSerializationRuntime
// args: e
// closure: f
function {
  return {decode: function <atom:0>};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=35B file=valdi_core/src/JsonSerializationRuntime
// args: e
function {
  return e.schema;
}

// fn <atom:0>  args=1 vars=1 closure=3 cpool=0 bc=55B file=valdi_core/src/JsonSerializationRuntime
// args: r
// closure: f, e, n
function {
  if (!((e.name == null))) goto L_2f;
  e.name;
  return f(r, e, "$", false, n);   // tail call
}

// fn m  args=1 vars=4 closure=1 cpool=2 bc=505B file=valdi_core/src/JsonSerializationRuntime
// args: e
// locals: n, r, e#1
// closure: f
function {
  let r;
  let n;
  n = new Map();
  r = [e];
  if (!((r.length > 0))) goto L_1eb;
  let e#1;
  e#1 = r.pop();
  if (!((undefined !== e#1.schemaId))) goto L_c3;
  n.set(e#1.schemaId, e#1);
  if (!((e#1.variants == null))) goto L_118;
  e#1.variants;
  // append([], 0, [])
  if (!((e#1.fields == null))) goto L_145;
  e#1.fields;
  // append([], [], [].map(function <atom:0>))
  [].map(function <atom:0>);
  r.push.apply(r, []);
  if (!((undefined !== e#1.element))) goto L_1e7;
  r.push(e#1.element);
  goto L_15;
  return {decode: function <atom:0>};
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=193B file=valdi_core/src/JsonSerializationRuntime
// args: e
function {
  e.String = 0;
  e[0] = "String";
  e.Number = 1;
  e[1] = "Number";
  e.Boolean = 2;
  e[2] = "Boolean";
  e.Array = 3;
  e[3] = "Array";
  e.Dictionary = 4;
  e[4] = "Dictionary";
  e.Object = 5;
  e[5] = "Object";
  e.Enum = 6;
  e[6] = "Enum";
  e.Union = 7;
  e[7] = "Union";
  e.Reference = 8;
  e[8] = "Reference";
  e.Null = 9;
  e[9] = "Null";
  return;
}

// fn <atom:0>  args=3 vars=17 closure=0 cpool=13 bc=230B file=valdi_core/src/JsonSerializationRuntime
// args: require, module, exports
// locals: e, n, r, t, o, i, a, c, u, s, l, f, d, m
function {
  r = function r;
  t = function t;
  o = function o;
  i = function i;
  a = function a;
  c = function c;
  u = function u;
  s = function s;
  l = function l;
  f = function f;
  d = function d;
  m = function m;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.JsonSchemaKind = undefined;
  exports.createJsonSerializer = undefined;
  exports.createRecursiveJsonSerializer = undefined;
  e = require("valdi_core/src/ValdiRuntimeProvider").getValdiRuntime();
  if ((n)) goto L_ca;
  n = {};
  exports.JsonSchemaKind = {};
  !function <atom:0>({});
  exports.createJsonSerializer = d;
  exports.createRecursiveJsonSerializer = m;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/JsonSerializationRuntime
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
