// fn n  args=1 vars=1 closure=1 cpool=0 bc=42B file=dil_text/src/rendering/DILTableTypographyRenderState
// args: e
// closure: t
function {
  return e.withProperty(t, true);   // tail call
}

// fn o  args=1 vars=1 closure=1 cpool=0 bc=44B file=dil_text/src/rendering/DILTableTypographyRenderState
// args: e
// closure: t
function {
  return (true === e.getProperty(t));
}

// fn l  args=1 vars=1 closure=1 cpool=0 bc=41B file=dil_text/src/rendering/DILTableTypographyRenderState
// args: e
// closure: s
function {
  s = <s_new>;
  (s++);
  try { // catch -> L_19
  e();
  <?>;
  // gosub (finally 块) 31
  undefined;
  return;
  // [栈深重同步 0 -> 1]
  // gosub (finally 块) 31
  throw <?>;
  s = <s_new>;
  (s--);
  // ret (finally 块) 
  return;
}

// fn a  args=0 vars=0 closure=1 cpool=0 bc=6B file=dil_text/src/rendering/DILTableTypographyRenderState
// closure: s
function {
  return (s > 0);
}

// fn i  args=2 vars=2 closure=5 cpool=0 bc=470B file=dil_text/src/rendering/DILTableTypographyRenderState
// args: t, s
// closure: e, c, u, r, p
function {
  if (!((undefined !== s))) goto L_1d5;
  if (!(("number" != typeof t.size))) goto L_1d5;
  if (!((s !== e.DILFontRole.Text))) goto L_157;
  if (!((s !== e.DILFontRole.Title))) goto L_fc;
  t.size = c(t.size);
  goto L_155;
  // [栈深重同步 1 -> 0]
  if (!((t.size == null))) goto L_14a;
  t.size;
  t.size = u(r.resolveDILDefaultTitleSize());
  u(r.resolveDILDefaultTitleSize());
  return;
  if (!((undefined === t.size))) goto L_1a5;
  if (!((true === t.inline))) goto L_1a5;
  return;
  t.size = p(t.size);
  return;
}

// fn p  args=1 vars=1 closure=0 cpool=0 bc=102B file=dil_text/src/rendering/DILTableTypographyRenderState
// args: e
function {
  if (((e === "3xs"))) goto L_13;
  if (!((e === "2xs"))) goto L_15;
  return e;
  if (!((e === "xl"))) goto L_24;
  return "lg";
  if (!((e === "lg"))) goto L_33;
  return "md";
  if (!((e === "md"))) goto L_42;
  return "sm";
  if (!((e === "sm"))) goto L_51;
  return "xs";
  if (!(("xs" === e))) goto L_60;
  return "xs";
  return "sm";
}

// fn u  args=1 vars=1 closure=0 cpool=0 bc=142B file=dil_text/src/rendering/DILTableTypographyRenderState
// args: e
function {
  if (!((e === "5xl"))) goto L_10;
  return "4xl";
  if (!((e === "4xl"))) goto L_1f;
  return "3xl";
  if (!((e === "3xl"))) goto L_2e;
  return "2xl";
  if (!((e === "2xl"))) goto L_3d;
  return "xl";
  if (!((e === "xl"))) goto L_4c;
  return "lg";
  if (!((e === "lg"))) goto L_5b;
  return "md";
  if (!((e === "md"))) goto L_6a;
  return "sm";
  if (!((e === "sm"))) goto L_79;
  return "xs";
  if (!(("xs" === e))) goto L_88;
  return "xs";
  return "sm";
}

// fn c  args=1 vars=1 closure=0 cpool=0 bc=21B file=dil_text/src/rendering/DILTableTypographyRenderState
// args: e
function {
  if (!(("lg" === e))) goto L_f;
  return "md";
  return "sm";
}

// fn <atom:0>  args=3 vars=15 closure=0 cpool=8 bc=246B file=dil_text/src/rendering/DILTableTypographyRenderState
// args: require, module, exports
// locals: e, r, t, s, n, o, l, a, i, p, u, c
function {
  n = function n;
  o = function o;
  l = function l;
  a = function a;
  i = function i;
  p = function p;
  u = function u;
  c = function c;
  let s;
  let t;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.renderStateWithDILTableTypography = undefined;
  exports.isDILTableTypographyEnabled = undefined;
  exports.withDILTableTypographyElementScope = undefined;
  exports.isDILTableTypographyElementScopeActive = undefined;
  exports.applyDILTableTypographySize = undefined;
  e = require("./DILTextFont");
  r = require("./DILTextTypography");
  t = Symbol("DIL table typography");
  s = 0;
  exports.renderStateWithDILTableTypography = n;
  exports.isDILTableTypographyEnabled = o;
  exports.withDILTableTypographyElementScope = l;
  exports.isDILTableTypographyElementScopeActive = a;
  exports.applyDILTableTypographySize = i;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_text/src/rendering/DILTableTypographyRenderState
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
