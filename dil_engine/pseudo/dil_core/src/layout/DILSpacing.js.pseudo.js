// fn t  args=1 vars=1 closure=1 cpool=0 bc=37B file=dil_core/src/layout/DILSpacing
// args: t
// closure: exports
function {
  return (t * exports.DIL_SPACING_UNIT);
}

// fn e  args=1 vars=1 closure=1 cpool=0 bc=16B file=dil_core/src/layout/DILSpacing
// args: e
// closure: t
function {
  if (!(("number" == typeof e))) goto L_e;
  return t(e);
  return e;
}

// fn o  args=1 vars=3 closure=2 cpool=0 bc=357B file=dil_core/src/layout/DILSpacing
// args: t
// locals: o, r
// closure: e, s
function {
  let r;
  let o;
  if ((("number" == typeof t))) goto L_1a;
  if (!(("string" == typeof t))) goto L_21;
  return e(t);   // tail call
  o = s(t.x);
  r = s(t.y);
  if (!((s(t.top) == null))) goto L_9e;
  s(t.top);
  if (!((r == null))) goto L_9e;
  r;
  if (!((s(t.right) == null))) goto L_d5;
  s(t.right);
  if (!((o == null))) goto L_d5;
  o;
  if (!((s(t.bottom) == null))) goto L_10c;
  s(t.bottom);
  if (!((r == null))) goto L_10c;
  r;
  if (!((s(t.left) == null))) goto L_143;
  s(t.left);
  if (!((o == null))) goto L_143;
  o;
  if (!((o == null))) goto L_151;
  o;
  if (!((r == null))) goto L_15f;
  r;
  return {top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0};
}

// fn r  args=1 vars=1 closure=2 cpool=0 bc=12B file=dil_core/src/layout/DILSpacing
// args: t
// closure: p, o
function {
  if (!(!p(t))) goto L_b;
  return o(t);   // tail call
  return;
}

// fn n  args=1 vars=3 closure=2 cpool=0 bc=357B file=dil_core/src/layout/DILSpacing
// args: t
// locals: o, r
// closure: e, s
function {
  let r;
  let o;
  if ((("number" == typeof t))) goto L_1a;
  if (!(("string" == typeof t))) goto L_21;
  return e(t);   // tail call
  o = s(t.x);
  r = s(t.y);
  if (!((s(t.top) == null))) goto L_9e;
  s(t.top);
  if (!((r == null))) goto L_9e;
  r;
  if (!((s(t.right) == null))) goto L_d5;
  s(t.right);
  if (!((o == null))) goto L_d5;
  o;
  if (!((s(t.bottom) == null))) goto L_10c;
  s(t.bottom);
  if (!((r == null))) goto L_10c;
  r;
  if (!((s(t.left) == null))) goto L_143;
  s(t.left);
  if (!((o == null))) goto L_143;
  o;
  if (!((o == null))) goto L_151;
  o;
  if (!((r == null))) goto L_15f;
  r;
  return {top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0};
}

// fn i  args=1 vars=1 closure=2 cpool=0 bc=12B file=dil_core/src/layout/DILSpacing
// args: t
// closure: p, n
function {
  if (!(!p(t))) goto L_b;
  return n(t);   // tail call
  return;
}

// fn s  args=1 vars=1 closure=2 cpool=0 bc=12B file=dil_core/src/layout/DILSpacing
// args: t
// closure: p, e
function {
  if (!(!p(t))) goto L_b;
  return e(t);   // tail call
  return;
}

// fn p  args=1 vars=1 closure=0 cpool=0 bc=11B file=dil_core/src/layout/DILSpacing
// args: t
function {
  if (((null == t))) goto L_a;
  return ("" === t);
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=8 bc=286B file=dil_core/src/layout/DILSpacing
// args: require, module, exports
// locals: t, e, o, r, n, i, s, p
function {
  t = function t;
  e = function e;
  o = function o;
  r = function r;
  n = function n;
  i = function i;
  s = function s;
  p = function p;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DIL_SPACING_UNIT = undefined;
  exports.DIL_DEFAULT_CONTAINER_GAP = undefined;
  exports.resolveDILSpacingUnits = undefined;
  exports.resolveDILSpacing = undefined;
  exports.resolveDILPadding = undefined;
  exports.resolveOptionalDILPadding = undefined;
  exports.resolveDILMargin = undefined;
  exports.resolveOptionalDILMargin = undefined;
  exports.resolveOptionalDILSpacing = undefined;
  exports.DIL_SPACING_UNIT = 4;
  exports.DIL_DEFAULT_CONTAINER_GAP = 2;
  exports.resolveDILSpacingUnits = t;
  exports.resolveDILSpacing = e;
  exports.resolveDILPadding = o;
  exports.resolveOptionalDILPadding = r;
  exports.resolveDILMargin = n;
  exports.resolveOptionalDILMargin = i;
  exports.resolveOptionalDILSpacing = s;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/layout/DILSpacing
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
