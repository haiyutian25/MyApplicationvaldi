// fn n  args=3 vars=3 closure=1 cpool=0 bc=40B file=cel/src/stdlib/StandardLibrary
// args: r, e, n
// closure: t
function {
  return t.toInt(n);   // tail call
}

// fn i  args=3 vars=3 closure=1 cpool=0 bc=40B file=cel/src/stdlib/StandardLibrary
// args: r, e, n
// closure: t
function {
  return t.toDouble(n);   // tail call
}

// fn o  args=4 vars=4 closure=1 cpool=0 bc=41B file=cel/src/stdlib/StandardLibrary
// args: r, t, n, i
// closure: e
function {
  return e.matches(n, i);   // tail call
}

// fn u  args=3 vars=3 closure=1 cpool=0 bc=5B file=cel/src/stdlib/StandardLibrary
// args: r, t, e
// closure: c
function {
  return c(e);   // tail call
}

// fn s  args=3 vars=3 closure=1 cpool=0 bc=40B file=cel/src/stdlib/StandardLibrary
// args: r, t, n
// closure: e
function {
  return e.toString(n);   // tail call
}

// fn c  args=1 vars=3 closure=3 cpool=0 bc=189B file=cel/src/stdlib/StandardLibrary
// args: t
// locals: r, e
// closure: e, a, r
function {
  if (!(Array.isArray(t))) goto L_2f;
  return t.length;
  if (!(("string" == typeof t))) goto L_61;
  return e.size(t);   // tail call
  if (!(a(t))) goto L_8f;
  let r;
  r = 0;
  let e;
  for (const e of t) {
    if (!((undefined !== t[e]))) goto L_85;
    r = <r_new>;
    (r++);
  }
  <catch>;
  return r;
  // [栈深重同步 2 -> 0]
  throw new r.CELEvaluationError("size() expects a list, map, object, or string");
}

// fn a  args=1 vars=1 closure=0 cpool=0 bc=63B file=cel/src/stdlib/StandardLibrary
// args: r
function {
  if (!((null !== r))) goto L_3e;
  if (!(("object" == typeof r))) goto L_3e;
  return !Array.isArray(r);
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=7 bc=196B file=cel/src/stdlib/StandardLibrary
// args: require, module, exports
// locals: r, t, e, n, i, o, u, s, c, a
function {
  n = function n;
  i = function i;
  o = function o;
  u = function u;
  s = function s;
  c = function c;
  a = function a;
  let e;
  let t;
  let r;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DEFAULT_GLOBAL_VALUES = undefined;
  exports.sizeValue = undefined;
  r = require("../CELError");
  t = require("./Math");
  e = require("./String");
  exports.DEFAULT_GLOBAL_VALUES = {double: i, int: n, matches: o, size: u, string: s};
  exports.sizeValue = c;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=cel/src/stdlib/StandardLibrary
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
