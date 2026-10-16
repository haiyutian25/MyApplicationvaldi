// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_text/src/rendering/DILTextActionTap
function {
  return;
}

// fn o  args=2 vars=3 closure=2 cpool=1 bc=125B file=dil_text/src/rendering/DILTextActionTap
// args: o, n
// locals: r
// closure: e, t
function {
  let r;
  r = function <atom:0>;
  Object.defineProperty(r, e, {value: o});
  Object.defineProperty(r, t, {value: n});
  return r;
}

// fn n  args=4 vars=8 closure=3 cpool=0 bc=137B file=dil_text/src/rendering/DILTextActionTap
// args: e, o, n, c
// locals: s, u, p, f
// closure: i, r, t
function {
  let s;
  if (!(("string" == typeof e))) goto L_f;
  return e;
  s = undefined;
  let u;
  u = 0;
  if (!((u < e.length))) goto L_7f;
  let f;
  let p;
  if (((6 !== e[u]))) goto L_75;
  p = e[(u + 1)];
  f = i(p);
  if (!((undefined !== f))) goto L_74;
  if (!((s == null))) goto L_53;
  s;
  // append([], 0, e)
  e;
  s = [];
  [];
  s[(u + 1)] = r(f, o, n, p[t], c);
  r(f, o, n, p[t], c);
  u = <u_new>;
  (u++);
  goto L_16;
  if (!((s == null))) goto L_88;
  s;
  return e;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=48B file=dil_text/src/rendering/DILTextActionTap
// locals: o
// closure: n, r, t, e
function {
  let o;
  if (!((undefined !== n))) goto L_15;
  if (!((r == null))) goto L_13;
  r;
  goto L_15;
  undefined(n);
  o = t();
  if (!((undefined !== o))) goto L_2f;
  if (!((e == null))) goto L_2b;
  e;
  goto L_2f;
  undefined(o);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=1 bc=32B file=dil_text/src/rendering/DILTextActionTap
// locals: i
// closure: n, r, t, e, o
function {
  let i;
  i = function <atom:0>;
  if (!((undefined === o))) goto L_18;
  goto L_1f;
  // [栈深重同步 1 -> 0]
  o(i);
  return;
}

// fn r  args=5 vars=5 closure=0 cpool=1 bc=3B file=dil_text/src/rendering/DILTextActionTap
// args: t, e, o, n, r
function {
  return function <atom:0>;
}

// fn i  args=1 vars=1 closure=1 cpool=0 bc=17B file=dil_text/src/rendering/DILTextActionTap
// args: t
// closure: e
function {
  if (!(("function" == typeof t))) goto L_10;
  return t[e];
  return;
}

// fn <atom:0>  args=3 vars=9 closure=0 cpool=4 bc=145B file=dil_text/src/rendering/DILTextActionTap
// args: require, module, exports
// locals: t, e, o, n, r, i
function {
  o = function o;
  n = function n;
  r = function r;
  i = function i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.makeDILTextActionTap = undefined;
  exports.resolveDILTextActionTaps = undefined;
  t = Symbol("DILTextInteraction");
  e = Symbol("DILTextActionTap");
  exports.makeDILTextActionTap = o;
  exports.resolveDILTextActionTaps = n;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/rendering/DILTextActionTap
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
