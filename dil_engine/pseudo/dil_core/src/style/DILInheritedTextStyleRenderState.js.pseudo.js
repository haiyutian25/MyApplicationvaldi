// fn n  args=2 vars=3 closure=3 cpool=0 bc=266B file=dil_core/src/style/DILInheritedTextStyleRenderState
// args: r, i
// locals: n
// closure: t, e, o
function {
  let n;
  n = t.getDILStyleTypography(i, e.getDILWarningReporter(r));
  if (!((undefined === n.fontSize))) goto L_7e;
  goto L_a8;
  // [栈深重同步 4 -> 3]
  null;
  {fontSize: n.fontSize};
  if (!((undefined === n.lineHeight))) goto L_d8;
  goto L_102;
  // [栈深重同步 4 -> 3]
  null;
  {lineHeight: n.lineHeight};
  return o(r, {});   // tail call
}

// fn o  args=2 vars=2 closure=2 cpool=0 bc=292B file=dil_core/src/style/DILInheritedTextStyleRenderState
// args: e, t
// closure: r, d
function {
  if (!((undefined === t.color))) goto L_ec;
  if (!((undefined === t.fontSize))) goto L_ec;
  if (!((undefined === t.lineHeight))) goto L_ec;
  if (!((undefined === t.size))) goto L_ec;
  if (!((undefined === t.textDecoration))) goto L_ec;
  if (!((undefined === t.weight))) goto L_ec;
  return e;
  null;
  d(e);
  null;
  t;
  return e.withProperty(r, {});
}

// fn d  args=1 vars=2 closure=1 cpool=0 bc=68B file=dil_core/src/style/DILInheritedTextStyleRenderState
// args: e
// locals: t
// closure: r
function {
  let t;
  t = e.getProperty(r);
  if (!((null != t))) goto L_43;
  if (!(("object" == typeof t))) goto L_43;
  return t;
  return;
}

// fn l  args=2 vars=3 closure=1 cpool=0 bc=60B file=dil_core/src/style/DILInheritedTextStyleRenderState
// args: e, t
// locals: r
// closure: i
function {
  let r;
  r = i;
  null;
  r;
  null;
  e;
  i = {};
  {};
  try { // catch -> L_2c
  t();
  <?>;
  // gosub (finally 块) 50
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 50
  throw <?>;
  i = r;
  r;
  // ret (finally 块) 
  return;
}

// fn I  args=0 vars=0 closure=1 cpool=0 bc=4B file=dil_core/src/style/DILInheritedTextStyleRenderState
// closure: i
function {
  return i;
}

// fn <atom:0>  args=3 vars=12 closure=0 cpool=5 bc=234B file=dil_core/src/style/DILInheritedTextStyleRenderState
// args: require, module, exports
// locals: e, t, r, i, n, o, d, l, I
function {
  n = function n;
  o = function o;
  d = function d;
  l = function l;
  I = function I;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.renderStateWithDILInheritedTextStyle = undefined;
  exports.renderStateWithDILInheritedTextStyleValues = undefined;
  exports.getDILInheritedTextStyle = undefined;
  exports.withDILInheritedTextStyleOverride = undefined;
  exports.getActiveDILInheritedTextStyleOverride = undefined;
  e = require("dil_compiler/src/DILWarningRenderState");
  t = require("./DILStyle");
  r = Symbol("DIL inherited text style");
  i = undefined;
  exports.renderStateWithDILInheritedTextStyle = n;
  exports.renderStateWithDILInheritedTextStyleValues = o;
  exports.getDILInheritedTextStyle = d;
  exports.withDILInheritedTextStyleOverride = l;
  exports.getActiveDILInheritedTextStyleOverride = I;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_core/src/style/DILInheritedTextStyleRenderState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
