// fn p  args=2 vars=2 closure=1 cpool=0 bc=41B file=dil_compiler/src/DILAutoSpacingRenderState
// args: e, r
// closure: t
function {
  return e.withProperty(t, r);   // tail call
}

// fn s  args=1 vars=2 closure=2 cpool=0 bc=56B file=dil_compiler/src/DILAutoSpacingRenderState
// args: e
// locals: r
// closure: t, d
function {
  let r;
  r = e.getProperty(t);
  if (!(d(r))) goto L_37;
  return r;
  return;
}

// fn c  args=2 vars=2 closure=1 cpool=0 bc=41B file=dil_compiler/src/DILAutoSpacingRenderState
// args: t, r
// closure: e
function {
  return t.withProperty(e, r);   // tail call
}

// fn a  args=1 vars=1 closure=1 cpool=0 bc=44B file=dil_compiler/src/DILAutoSpacingRenderState
// args: t
// closure: e
function {
  return (true === t.getProperty(e));
}

// fn u  args=2 vars=2 closure=1 cpool=0 bc=41B file=dil_compiler/src/DILAutoSpacingRenderState
// args: t, e
// closure: r
function {
  return t.withProperty(r, e);   // tail call
}

// fn x  args=1 vars=2 closure=1 cpool=0 bc=74B file=dil_compiler/src/DILAutoSpacingRenderState
// args: t
// locals: e
// closure: r
function {
  let e;
  e = t.getProperty(r);
  if ((("column" === e))) goto L_42;
  if (!(("row" === e))) goto L_48;
  return e;
  return undefined;
}

// fn l  args=2 vars=2 closure=1 cpool=0 bc=41B file=dil_compiler/src/DILAutoSpacingRenderState
// args: t, e
// closure: i
function {
  return t.withProperty(i, e);   // tail call
}

// fn D  args=1 vars=1 closure=1 cpool=0 bc=44B file=dil_compiler/src/DILAutoSpacingRenderState
// args: t
// closure: i
function {
  return (true === t.getProperty(i));
}

// fn I  args=2 vars=2 closure=1 cpool=0 bc=41B file=dil_compiler/src/DILAutoSpacingRenderState
// args: t, e
// closure: n
function {
  return t.withProperty(n, e);   // tail call
}

// fn L  args=1 vars=2 closure=1 cpool=0 bc=62B file=dil_compiler/src/DILAutoSpacingRenderState
// args: t
// locals: e
// closure: n
function {
  let e;
  e = t.getProperty(n);
  if (!(("string" == typeof e))) goto L_3c;
  return e;
  return undefined;
}

// fn g  args=2 vars=2 closure=1 cpool=0 bc=41B file=dil_compiler/src/DILAutoSpacingRenderState
// args: t, e
// closure: o
function {
  return t.withProperty(o, e);   // tail call
}

// fn S  args=1 vars=1 closure=1 cpool=0 bc=44B file=dil_compiler/src/DILAutoSpacingRenderState
// args: t
// closure: o
function {
  return (true === t.getProperty(o));
}

// fn d  args=1 vars=2 closure=0 cpool=0 bc=183B file=dil_compiler/src/DILAutoSpacingRenderState
// args: t
// locals: e
function {
  let e;
  if (!((undefined === t))) goto L_b;
  return false;
  e = t;
  if ((("column" === e.direction))) goto L_65;
  if (!(("row" === e.direction))) goto L_b6;
  return Number.isFinite(e.spacing);
}

// fn <atom:0>  args=3 vars=22 closure=0 cpool=13 bc=477B file=dil_compiler/src/DILAutoSpacingRenderState
// args: require, module, exports
// locals: t, e, r, n, o, i, p, s, c, a, u, x, l, D, I, L, g, S, d
function {
  p = function p;
  s = function s;
  c = function c;
  a = function a;
  u = function u;
  x = function x;
  l = function l;
  D = function D;
  I = function I;
  L = function L;
  g = function g;
  S = function S;
  d = function d;
  let i;
  let o;
  let n;
  let r;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.renderStateWithDILAutoSpacing = undefined;
  exports.getDILAutoSpacingContext = undefined;
  exports.renderStateWithDILAutoSpacingDisabled = undefined;
  exports.isDILAutoSpacingDisabled = undefined;
  exports.renderStateWithDILFlexDirection = undefined;
  exports.getDILFlexDirection = undefined;
  exports.renderStateWithDILAspectRatio = undefined;
  exports.hasDILParentAspectRatio = undefined;
  exports.renderStateWithDILFlexAlignment = undefined;
  exports.getDILFlexAlignment = undefined;
  exports.renderStateWithDILFlexibleParent = undefined;
  exports.isDILParentFlexible = undefined;
  t = Symbol("DILAutoSpacing");
  e = Symbol("DILAutoSpacingDisabled");
  r = Symbol("DILFlexDirection");
  n = Symbol("DILFlexAlignment");
  o = Symbol("DILFlexibleParent");
  i = Symbol("DILAspectRatio");
  exports.renderStateWithDILAutoSpacing = p;
  exports.getDILAutoSpacingContext = s;
  exports.renderStateWithDILAutoSpacingDisabled = c;
  exports.isDILAutoSpacingDisabled = a;
  exports.renderStateWithDILFlexDirection = u;
  exports.getDILFlexDirection = x;
  exports.renderStateWithDILAspectRatio = l;
  exports.hasDILParentAspectRatio = D;
  exports.renderStateWithDILFlexAlignment = I;
  exports.getDILFlexAlignment = L;
  exports.renderStateWithDILFlexibleParent = g;
  exports.isDILParentFlexible = S;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_compiler/src/DILAutoSpacingRenderState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
