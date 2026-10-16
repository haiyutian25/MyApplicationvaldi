// fn n  args=2 vars=2 closure=2 cpool=0 bc=51B file=cel/src/stdlib/String
// args: t, n
// closure: a, x
function {
  return new RegExp(a(n)).test(x(t));   // tail call
}

// fn r  args=2 vars=2 closure=2 cpool=0 bc=42B file=cel/src/stdlib/String
// args: t, n
// closure: x, a
function {
  return x(t).startsWith(a(n));   // tail call
}

// fn e  args=2 vars=2 closure=2 cpool=0 bc=42B file=cel/src/stdlib/String
// args: t, n
// closure: x, a
function {
  return x(t).endsWith(a(n));   // tail call
}

// fn s  args=2 vars=2 closure=2 cpool=0 bc=42B file=cel/src/stdlib/String
// args: t, n
// closure: x, a
function {
  return x(t).includes(a(n));   // tail call
}

// fn o  args=3 vars=3 closure=3 cpool=0 bc=50B file=cel/src/stdlib/String
// args: t, n, r
// closure: x, a, g
function {
  return x(t).indexOf(a(n), g(r, "indexOf() start"));   // tail call
}

// fn i  args=3 vars=4 closure=3 cpool=0 bc=106B file=cel/src/stdlib/String
// args: t, n, r
// locals: e
// closure: x, a, d
function {
  let e;
  e = x(t);
  if (!((null == r))) goto L_37;
  return e.lastIndexOf(a(n));
  return e.lastIndexOf(a(n), d(r, "lastIndexOf() start"));
}

// fn u  args=3 vars=5 closure=2 cpool=0 bc=118B file=cel/src/stdlib/String
// args: t, n, r
// locals: e, s
// closure: x, d
function {
  let s;
  let e;
  e = x(t);
  s = d(n, "substring() start");
  if (!((null == r))) goto L_43;
  return e.substring(s);
  return e.substring(s, d(r, "substring() end"));
}

// fn f  args=3 vars=6 closure=3 cpool=0 bc=169B file=cel/src/stdlib/String
// args: t, n, r
// locals: e, s, o
// closure: x, a, d
function {
  let o;
  let s;
  let e;
  e = x(t);
  s = a(n);
  if (!((null == r))) goto L_40;
  return e.split(s);   // tail call
  o = d(r, "split() limit");
  if (!((o < 0))) goto L_7b;
  return e.split(s);
  return e.split(s, o);
}

// fn c  args=3 vars=9 closure=2 cpool=0 bc=255B file=cel/src/stdlib/String
// args: t, n, r
// locals: e, s, o, i, u, t#1
// closure: x, a
function {
  let u;
  let i;
  let o;
  let s;
  let e;
  e = x(t);
  s = a(n);
  if (!((0 === s.length))) goto L_23;
  return e;
  o = a(r);
  i = "";
  u = 0;
  if (!((u < e.length))) goto L_fb;
  let t#1;
  t#1 = e.indexOf(s, u);
  if (!((t#1 < 0))) goto L_a9;
  i = (i + e.substring(u));
  (i + e.substring(u));
  return i;
  i = (i + e.substring(u, t#1));
  (i + e.substring(u, t#1));
  i = (i + o);
  (i + o);
  u = (t#1 + s.length);
  (t#1 + s.length);
  goto L_2c;
  return i;
}

// fn l  args=1 vars=1 closure=1 cpool=0 bc=102B file=cel/src/stdlib/String
// args: n
// closure: t
function {
  if (!(("string" == typeof n))) goto L_c;
  return n;
  if (!(("boolean" == typeof n))) goto L_25;
  if (!(n)) goto L_1f;
  return "true";
  return "false";
  if (!(("number" == typeof n))) goto L_38;
  return String(n);   // tail call
  throw new t.CELEvaluationError("string() expects a boolean, number, or string");
}

// fn p  args=1 vars=1 closure=2 cpool=0 bc=7B file=cel/src/stdlib/String
// args: t
// closure: h, x
function {
  return h(x(t));   // tail call
}

// fn x  args=1 vars=1 closure=1 cpool=0 bc=58B file=cel/src/stdlib/String
// args: n
// closure: t
function {
  if (!(("string" != typeof n))) goto L_38;
  throw new t.CELEvaluationError("Expected string receiver");
  return n;
}

// fn a  args=1 vars=1 closure=0 cpool=0 bc=9B file=cel/src/stdlib/String
// args: t
function {
  return String(t);   // tail call
}

// fn g  args=2 vars=2 closure=1 cpool=0 bc=12B file=cel/src/stdlib/String
// args: t, n
// closure: d
function {
  if (!((null != t))) goto L_b;
  return d(t, n);   // tail call
  return;
}

// fn d  args=2 vars=3 closure=1 cpool=0 bc=239B file=cel/src/stdlib/String
// args: n, r
// locals: e
// closure: t
function {
  let e;
  e = Number(n);
  if (!(!Number.isFinite(e))) goto L_8e;
  throw new t.CELEvaluationError("".concat(r, " expects an integer"));
  if (!((e < 0))) goto L_c2;
  return Math.ceil(e);
  return Math.floor(e);
}

// fn h  args=1 vars=5 closure=0 cpool=0 bc=200B file=cel/src/stdlib/String
// args: t
// locals: n, r, e, n#1
function {
  let n;
  n = 0;
  let r;
  r = 0;
  if (!((r < t.length))) goto L_c4;
  let e;
  e = t.charCodeAt(r);
  if (!((e >= 55296))) goto L_b1;
  if (!((e <= 56319))) goto L_b1;
  if (!(((r + 1) < t.length))) goto L_b1;
  let n#1;
  n#1 = t.charCodeAt((r + 1));
  if (!((n#1 >= 56320))) goto L_b0;
  if (!((n#1 <= 57343))) goto L_b0;
  r = <r_new>;
  (r++);
  n = <n_new>;
  (n++);
  r = <r_new>;
  (r++);
  goto L_a;
  return n;
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=16 bc=379B file=cel/src/stdlib/String
// args: require, module, exports
// locals: t, n, r, e, s, o, i, u, f, c, l, p, x, a, g, d, h
function {
  n = function n;
  r = function r;
  e = function e;
  s = function s;
  o = function o;
  i = function i;
  u = function u;
  f = function f;
  c = function c;
  l = function l;
  p = function p;
  x = function x;
  a = function a;
  g = function g;
  d = function d;
  h = function h;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.matches = undefined;
  exports.startsWith = undefined;
  exports.endsWith = undefined;
  exports.contains = undefined;
  exports.indexOf = undefined;
  exports.lastIndexOf = undefined;
  exports.substring = undefined;
  exports.split = undefined;
  exports.replace = undefined;
  exports.toString = undefined;
  exports.size = undefined;
  t = require("../CELError");
  exports.matches = n;
  exports.startsWith = r;
  exports.endsWith = e;
  exports.contains = s;
  exports.indexOf = o;
  exports.lastIndexOf = i;
  exports.substring = u;
  exports.split = f;
  exports.replace = c;
  exports.toString = l;
  exports.size = p;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=cel/src/stdlib/String
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
