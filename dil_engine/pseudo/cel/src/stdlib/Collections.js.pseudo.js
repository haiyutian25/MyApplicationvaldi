// fn r  args=2 vars=3 closure=2 cpool=0 bc=199B file=cel/src/stdlib/Collections
// args: r, n
// locals: t
// closure: p, t
function {
  if (!(Array.isArray(n))) goto L_52;
  let t;
  t = 0;
  if (!((t < n.length))) goto L_4f;
  if (!((n[t] === r))) goto L_45;
  return true;
  t = <t_new>;
  (t++);
  goto L_31;
  return false;
  if (!(("string" == typeof n))) goto L_88;
  return n.includes(String(r));   // tail call
  if (!(p(n))) goto L_99;
  return (undefined !== n[String(r)]);
  throw new t.CELEvaluationError("Unsupported in operands");
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=20B file=cel/src/stdlib/Collections
// args: t, o
// closure: r, n, e
function {
  if ((!r(t, o, n))) goto L_13;
  e = true;
  true;
  return false;
}

// fn n  args=3 vars=6 closure=3 cpool=1 bc=74B file=cel/src/stdlib/Collections
// args: t, r, n
// locals: e, e#1, o
// closure: p, c, l
function {
  let e#1;
  if (!(p(t))) goto L_18;
  let e;
  e = false;
  c(t, function <atom:0>);
  return e;
  e#1 = l(t);
  let o;
  o = 0;
  if (!((o < e#1.length))) goto L_47;
  if (!(r(e#1[o], o, n))) goto L_3d;
  return true;
  o = <o_new>;
  (o++);
  goto L_21;
  return false;
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=21B file=cel/src/stdlib/Collections
// args: t, o
// closure: r, n, e
function {
  if ((!!r(t, o, n))) goto L_14;
  e = false;
  false;
  return false;
}

// fn e  args=3 vars=6 closure=3 cpool=1 bc=75B file=cel/src/stdlib/Collections
// args: t, r, n
// locals: e, e#1, o
// closure: p, c, l
function {
  let e#1;
  if (!(p(t))) goto L_18;
  let e;
  e = true;
  c(t, function <atom:0>);
  return e;
  e#1 = l(t);
  let o;
  o = 0;
  if (!((o < e#1.length))) goto L_48;
  if (!(!r(e#1[o], o, n))) goto L_3e;
  return false;
  o = <o_new>;
  (o++);
  goto L_21;
  return true;
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=20B file=cel/src/stdlib/Collections
// args: t, o
// closure: r, n, e
function {
  if (!(r(t, o, n))) goto L_10;
  e = <e_new>;
  (e++);
  return true;
}

// fn o  args=3 vars=6 closure=3 cpool=1 bc=85B file=cel/src/stdlib/Collections
// args: t, r, n
// locals: e, o, i
// closure: p, c, l
function {
  let o;
  let e;
  e = 0;
  if (!(p(t))) goto L_19;
  c(t, function <atom:0>);
  return (1 === e);
  o = l(t);
  let i;
  i = 0;
  if (!((i < o.length))) goto L_4f;
  if (!(r(o[i], i, n))) goto L_44;
  e = <e_new>;
  (e++);
  i = <i_new>;
  (i++);
  goto L_22;
  return (1 === e);
}

// fn <atom:0>  args=2 vars=2 closure=3 cpool=0 bc=53B file=cel/src/stdlib/Collections
// args: t, o
// closure: r, n, e
function {
  if (!(r(t, o, n))) goto L_31;
  e.push(t);
  return true;
}

// fn i  args=3 vars=8 closure=3 cpool=1 bc=133B file=cel/src/stdlib/Collections
// args: t, r, n
// locals: e, e#1, o, i, t#1
// closure: p, c, l
function {
  let o;
  let e#1;
  if (!(p(t))) goto L_1c;
  let e;
  e = [];
  c(t, function <atom:0>);
  return e;
  e#1 = l(t);
  o = [];
  let i;
  i = 0;
  if (!((i < e#1.length))) goto L_81;
  let t#1;
  t#1 = e#1[i];
  if (!(r(t#1, i, n))) goto L_76;
  o.push(t#1);
  i = <i_new>;
  (i++);
  goto L_29;
  return o;
}

// fn s  args=4 vars=8 closure=2 cpool=0 bc=113B file=cel/src/stdlib/Collections
// args: r, n, e, o
// locals: i, s, f, l
// closure: t, u
function {
  let l;
  let f;
  let s;
  let i;
  i = (undefined !== o);
  if (!(i)) goto L_18;
  goto L_19;
  // [栈深重同步 1 -> 0]
  s = undefined;
  if (!(i)) goto L_22;
  goto L_23;
  // [栈深重同步 1 -> 0]
  f = n;
  if (!(i)) goto L_2c;
  goto L_2d;
  // [栈深重同步 1 -> 0]
  l = e;
  if (!((undefined === l))) goto L_63;
  throw new t.CELEvaluationError("map() expects an evaluation scope");
  return u(r, f, l, s);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=4 cpool=0 bc=64B file=cel/src/stdlib/Collections
// args: t, i
// closure: e, n, o, r
function {
  if (((undefined === e))) goto L_c;
  if (!(e(t, i, n))) goto L_3c;
  o.push(r(t, i, n));
  return true;
}

// fn u  args=4 vars=9 closure=3 cpool=1 bc=146B file=cel/src/stdlib/Collections
// args: t, r, n, e
// locals: o, o#1, i, s, t#1
// closure: p, c, l
function {
  let i;
  let o#1;
  if (!(p(t))) goto L_1c;
  let o;
  o = [];
  c(t, function <atom:0>);
  return o;
  o#1 = l(t);
  i = [];
  let s;
  s = 0;
  if (!((s < o#1.length))) goto L_8e;
  let t#1;
  t#1 = o#1[s];
  if (((undefined === e))) goto L_4f;
  if (!(e(t#1, s, n))) goto L_83;
  i.push(r(t#1, s, n));
  s = <s_new>;
  (s++);
  goto L_29;
  return i;
}

// fn f  args=2 vars=6 closure=1 cpool=0 bc=112B file=cel/src/stdlib/Collections
// args: t, r
// locals: n, e, o, i
// closure: l
function {
  let o;
  let e;
  let n;
  n = l(t);
  if (!((0 === n.length))) goto L_17;
  return "";
  if (!((r == null))) goto L_23;
  r;
  e = String("");
  o = String(n[0]);
  let i;
  i = 1;
  if (!((i < n.length))) goto L_6c;
  o = (o + e);
  (o + e);
  o = (o + String(n[i]));
  (o + String(n[i]));
  i = <i_new>;
  (i++);
  goto L_36;
  return o;
}

// fn l  args=1 vars=1 closure=1 cpool=0 bc=93B file=cel/src/stdlib/Collections
// args: r
// closure: t
function {
  if (!(!Array.isArray(r))) goto L_5b;
  throw new t.CELEvaluationError("Expected list");
  return r;
}

// fn c  args=2 vars=4 closure=0 cpool=0 bc=47B file=cel/src/stdlib/Collections
// args: t, r
// locals: n, e
function {
  let n;
  n = 0;
  let e;
  for (const e of t) {
    if (!((undefined !== t[e]))) goto L_22;
    if (!(!r(e, n))) goto L_22;
    return;
    // [栈深重同步 0 -> 3]
    n = <n_new>;
    (n++);
  }
  return;
}

// fn p  args=1 vars=1 closure=0 cpool=0 bc=63B file=cel/src/stdlib/Collections
// args: t
function {
  if (!((null !== t))) goto L_3e;
  if (!(("object" == typeof t))) goto L_3e;
  return !Array.isArray(t);
}

// fn <atom:0>  args=3 vars=15 closure=0 cpool=11 bc=267B file=cel/src/stdlib/Collections
// args: require, module, exports
// locals: t, r, n, e, o, i, s, u, f, l, c, p
function {
  r = function r;
  n = function n;
  e = function e;
  o = function o;
  i = function i;
  s = function s;
  u = function u;
  f = function f;
  l = function l;
  c = function c;
  p = function p;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.contains = undefined;
  exports.exists = undefined;
  exports.all = undefined;
  exports.exists_one = undefined;
  exports.filter = undefined;
  exports.map = undefined;
  exports.join = undefined;
  t = require("../CELError");
  exports.contains = r;
  exports.exists = n;
  exports.all = e;
  exports.exists_one = o;
  exports.filter = i;
  exports.map = s;
  exports.join = f;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=cel/src/stdlib/Collections
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
