// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=11B file=valdi_core/src/utils/StringUtils
// closure: require
function {
  return require("../Symbolicator", true);   // tail call
}

// fn n  args=1 vars=4 closure=0 cpool=0 bc=250B file=valdi_core/src/utils/StringUtils
// args: t
// locals: e, n, r
function {
  let n;
  let e;
  e = t.split("_");
  n = "";
  let r;
  for (const r of e) {
    if (!(r)) goto L_ec;
    if (!(n)) goto L_e5;
    if (!((1 === r.length))) goto L_89;
    n = (n + r.toUpperCase());
    goto L_ec;
    // [栈深重同步 4 -> 3]
    n = (n + (r[0].toUpperCase() + r.substr(1)));
    goto L_ec;
    // [栈深重同步 4 -> 3]
    n = r;
    r;
  }
  return n;
}

// fn r  args=1 vars=1 closure=0 cpool=0 bc=122B file=valdi_core/src/utils/StringUtils
// args: t
function {
  if (!((0 == t.length))) goto L_8;
  return t;
  return (t.charAt(0).toUpperCase() + t.slice(1));
}

// fn o  args=3 vars=3 closure=1 cpool=0 bc=40B file=valdi_core/src/utils/StringUtils
// args: t, e, n
// closure: s
function {
  if (!((undefined === t))) goto L_b;
  return "undefined";
  if (!(("string" == typeof t))) goto L_17;
  return t;
  return s(t, new Set(), 0, e, n);   // tail call
}

// fn i  args=1 vars=3 closure=0 cpool=0 bc=51B file=valdi_core/src/utils/StringUtils
// args: t
// locals: e, n
function {
  let e;
  e = "";
  let n;
  n = 0;
  if (!((n < t))) goto L_29;
  e = (e + "  ");
  (e + "  ");
  n = <n_new>;
  (n++);
  goto L_a;
  return ("
" + e);
}

// fn s  args=5 vars=6 closure=1 cpool=0 bc=117B file=valdi_core/src/utils/StringUtils
// args: t, e, n, r, o
// locals: i
// closure: u
function {
  try { // catch -> L_12
  return u(t, e, n, r, o);
  // [栈深重同步 0 -> 1]
  i = <?>;
  try { // catch -> L_74
  if (!(i)) goto L_6d;
  goto L_72;
  // [栈深重同步 1 -> 0]
  return "<failure unknown/>";
  // [栈深重同步 0 -> 1]
  throw <?>;
}

// fn u  args=5 vars=25 closure=3 cpool=0 bc=3534B file=valdi_core/src/utils/StringUtils
// args: t, n, r, o, u
// locals: f, n#1, r#1, c, a, p, e, i, e#1, i#1, f#1, e#2, i#2, e#3, i#3, f#2, l, $, c#1, e#4
// closure: e, i, s
function {
  let p;
  let a;
  let c;
  let f;
  if (!((r >= o))) goto L_17;
  return "...";
  if (!((undefined === t))) goto L_22;
  return "undefined";
  if (!((null === t))) goto L_2d;
  return "null";
  if (!((true === t))) goto L_39;
  return "true";
  if (!((false === t))) goto L_45;
  return "false";
  f = typeof t;
  if (!(("string" === f))) goto L_82;
  return """.concat(t, """);   // tail call
  if (!(("number" === f))) goto L_dd;
  if (!(("function" == typeof t.toString))) goto L_dd;
  return t.toString();   // tail call
  if (!(("function" === f))) goto L_1d8;
  if (!(t.componentPath)) goto L_187;
  return "<function ".concat(t.name, " -> ", t.componentPath, "/>");
  return "<function ".concat(t.name, "/>");
  if (!((t instanceof Date))) goto L_25f;
  if (!(("function" == typeof t.toISOString))) goto L_25f;
  return "<date ".concat(t.toISOString(), "/>");   // tail call
  if (!((t instanceof Error))) goto L_395;
  let r#1;
  let n#1;
  n#1 = e.get.symbolicate(t);
  r#1 = "".concat(n#1.name, ":", n#1.message);
  if (!(n#1.stack)) goto L_390;
  r#1 = (r#1 + "
");
  (r#1 + "
");
  r#1 = (r#1 + n#1.stack);
  (r#1 + n#1.stack);
  return r#1;
  if (!(n.has(t))) goto L_3ee;
  return "<circular ".concat(f, "/>");   // tail call
  n.add(t);
  if (!(u)) goto L_41f;
  goto L_420;
  // [栈深重同步 1 -> 0]
  c = "";
  if (!(u)) goto L_42d;
  goto L_42e;
  // [栈深重同步 1 -> 0]
  a = "";
  p = 50;
  if (!(Array.isArray(t))) goto L_58d;
  let e;
  if (!((t.length <= 0))) goto L_472;
  return "[]";
  e = [];
  let i;
  for (const i of t) {
    e.push(s(i, n, (r + 1), o, u));
    if (!((e.length >= p))) continue;
    e.push("... ".concat((t.length - p), " more item(s) ..."));
    goto L_528;
  }
  return "[".concat(a, e.join(("," + a)), c, "]");   // tail call
  if (!((t instanceof Map))) goto L_7aa;
  let e#1;
  if (!((t.size <= 0))) goto L_5c8;
  return "Map{}";
  e#1 = [];
  let i#1;
  for (const i#1 of Array.from(t.keys())) {
    let f#1;
    f#1 = s(t.get(i#1), n, (r + 1), o, u);
    e#1.push("".concat(i#1, ": ", f#1));
    if (!((e#1.length >= p))) continue;
    e#1.push("... ".concat((t.size - p), " more item(s) ..."));
    goto L_745;
  }
  return "Map{".concat(a, e#1.join(("," + a)), c, "}");   // tail call
  if (!((t instanceof Set))) goto L_949;
  let e#2;
  if (!((t.size <= 0))) goto L_7e5;
  return "Set()";
  e#2 = [];
  let i#2;
  for (const i#2 of Array.from(t)) {
    e#2.push(s(i#2, n, (r + 1), o, u));
    if (!((e#2.length >= p))) continue;
    e#2.push("... ".concat((t.size - p), " more item(s) ..."));
    goto L_8e4;
  }
  return "Set(".concat(a, e#2.join(("," + a)), c, ")");   // tail call
  if (!(("function" == typeof t.toConsoleRepresentation))) goto L_a2a;
  if (!((t.constructor == null))) goto L_9c7;
  t.constructor;
  goto L_9e8;
  if (!((undefined.name == null))) goto L_9ee;
  undefined.name;
  return "<".concat("", " ...", s(t.toConsoleRepresentation(), n, r, o, u), "/>");   // tail call
  if (!((t.toString !== Object.prototype.toString))) goto L_ae6;
  if (!(("function" == typeof t.toString))) goto L_ae6;
  return t.toString();   // tail call
  if (!(("object" === f))) goto L_d4b;
  let $;
  let l;
  let f#2;
  let i#3;
  let e#3;
  e#3 = "";
  i#3 = "";
  if (!((t.constructor == null))) goto L_b33;
  t.constructor;
  goto L_b54;
  f#2 = undefined.name;
  if (!((undefined !== f#2))) goto L_b89;
  if (!(("Object" !== f#2))) goto L_b89;
  e#3 = (("<" + f#2) + " ...");
  (("<" + f#2) + " ...");
  i#3 = "/>";
  "/>";
  l = Object.keys(t);
  if (!((l.length <= 0))) goto L_bee;
  return "".concat(e#3, "{}", i#3);   // tail call
  $ = [];
  let c#1;
  for (const c#1 of l) {
    let e#4;
    e#4 = s(t[c#1], n, (r + 1), o, u);
    $.push("".concat(c#1, ": ", e#4));
    if (!(($.length >= p))) continue;
    $.push("... ".concat((l.length - p), " more item(s) ..."));
    goto L_cdf;
  }
  return "".concat(e#3, "{", a, $.join(("," + a)), c, "}", i#3);   // tail call
  if (!(("function" == typeof t.toString))) goto L_d9c;
  return t.toString();
  return "<unknown ".concat(f, ">");
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=149B file=valdi_core/src/utils/StringUtils
// args: t
function {
  return "".concat(t.charAt(0).toLocaleUpperCase(), t.slice(1));   // tail call
}

// fn f  args=1 vars=1 closure=0 cpool=1 bc=157B file=valdi_core/src/utils/StringUtils
// args: t
function {
  return t.toLocaleLowerCase().split(" ").map(function <atom:0>).join(" ");   // tail call
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=8 bc=227B file=valdi_core/src/utils/StringUtils
// args: require, module, exports
// locals: t, e, n, r, o, i, s, u, f
function {
  n = function n;
  r = function r;
  o = function o;
  i = function i;
  s = function s;
  u = function u;
  f = function f;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.toCamelCase = undefined;
  exports.capitalize = undefined;
  exports.debugStringify = undefined;
  exports.titleCase = undefined;
  t = require("../LazyImport");
  e = t.lazyImport(function <atom:0>);
  exports.toCamelCase = n;
  exports.capitalize = r;
  exports.debugStringify = o;
  exports.titleCase = f;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_core/src/utils/StringUtils
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
