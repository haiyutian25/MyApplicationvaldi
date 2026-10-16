// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=76B file=widgets/src/components/button/CoreButton
// args: t
function {
  t.XL = "XL";
  t.LARGE = "large";
  t.MEDIUM = "medium";
  t.SMALL = "small";
  t.TINY = "tiny";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=3 bc=67B file=widgets/src/components/button/CoreButton
// args: t
function {
  t.FIXED_XL_212 = "212";
  t.FIXED_LARGE_184 = "184";
  t.FIXED_MEDIUM_EXTENDED = "100%";
  t.FIXED_SMALL_EXTENDED = "100%";
  t.DYNAMIC_SMALL_MINIMUM = "64";
  return;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=91B file=widgets/src/components/button/CoreButton
// args: t
function {
  t.DEFAULT = "default";
  t.PRIMARY = "primary";
  t.SECONDARY = "secondary";
  t.TERTIARY = "tertiary";
  t.INACTIVE = "inactive";
  t.BRANDED = "branded";
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=221B file=widgets/src/components/button/CoreButton
// locals: t
// closure: this
function {
  let t;
  if (!((this.viewModel.touchAnimated == null))) goto L_4e;
  this.viewModel.touchAnimated;
  if (!(1)) goto L_7b;
  this.onTouchAnim(true);
  t = this.viewModel.onTouchStart;
  if (!(t)) goto L_cd;
  t();
  this.touched = true;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=181B file=widgets/src/components/button/CoreButton
// locals: t
// closure: this
function {
  let t;
  if (!(!this.touched)) goto L_2b;
  return;
  this.touched = false;
  this.onTouchAnim(false);
  t = this.viewModel.onTouchEnd;
  if (!(t)) goto L_b4;
  t();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=2 bc=156B file=widgets/src/components/button/CoreButton
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, m
function {
  this.active_func = <special_object 2>;
  new.target = <special_object 3>;
  let this;
  arguments = <special_object 0>;
  // check_ctor
  // append([], 0, arguments)
  arguments;
  this = super.apply(new.target, []);
  if (!(<class_fields_init>)) goto L_2b;
  <class_fields_init>.call(this);
  super.apply(new.target, []);
  this.state = {};
  this.root = new m.ElementRef();
  this.touched = false;
  this.onTouchStart = function <atom:0>;
  this.onTouchEnd = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=5 closure=33 cpool=0 bc=2855B file=widgets/src/components/button/CoreButton
// locals: e, e#1, i, e#2, i#1
// closure: q, A, m, t, i, st, dt, o, g, rt, nt, r, n, v, At, tt, ot, s, H, C, P, O, d, u, this, a, ut, c, at, Y, U, X, b
function {
  if ((q)) goto L_127;
  if (!(A)) goto L_a4;
  if (!(m)) goto L_a4;
  t.beginRender(i, undefined);
  t.setAttributeNumber("width", (st - dt));
  goto L_127;
  // [栈深重同步 1 -> 0]
  t.beginRender(o, undefined);
  t.setAttributeNumber("width", st);
  t.endRender();
  if (!(A)) goto L_59e;
  if (!(g)) goto L_310;
  let e;
  e = ((rt - nt) / 2);
  t.beginRender(r, undefined);
  t.setAttributeNumber("paddingLeft", e);
  t.setAttributeNumber("paddingRight", e);
  t.beginRender(n, undefined);
  t.setAttributeString("color", v);
  t.setAttributeNumber("height", nt);
  t.setAttributeNumber("width", nt);
  t.setAttributeString("backgroundColor", At);
  t.endRender();
  t.endRender();
  goto L_59e;
  let i;
  let e#1;
  e#1 = ((tt - rt) / 2);
  i = ((tt - ot) / 2);
  t.beginRender(s, undefined);
  t.setAttribute("src", A);
  if (!(H)) goto L_3b7;
  goto L_3c2;
  // [栈深重同步 4 -> 3]
  if (!((C == null))) goto L_3c2;
  C;
  t.setAttributeString("tint", v);
  t.setAttributeNumber("height", ot);
  t.setAttributeNumber("width", rt);
  t.setAttributeNumber("marginLeft", e#1);
  t.setAttributeNumber("marginRight", e#1);
  t.setAttributeNumber("marginTop", i);
  t.setAttributeNumber("marginBottom", i);
  t.setAttribute("flipOnRtl", P);
  t.setAttributeString("backgroundColor", At);
  t.setAttributeNumber("rotation", O);
  t.endRender();
  if ((A)) goto L_719;
  if (!(g)) goto L_719;
  t.beginRender(d, undefined);
  t.beginRender(u, undefined);
  t.setAttributeString("color", v);
  t.setAttributeNumber("height", nt);
  t.setAttributeNumber("width", nt);
  t.setAttributeString("backgroundColor", At);
  t.endRender();
  t.endRender();
  if (!(m)) goto L_a69;
  let i#1;
  let e#2;
  t.renderNamedSlot("start", this);
  if (!(A)) goto L_7e5;
  t.beginRender(a, undefined);
  t.setAttributeNumber("width", dt);
  t.endRender();
  e#2 = ut;
  if (!(A)) goto L_7f2;
  goto L_7f7;
  // [栈深重同步 1 -> 0]
  i#1 = "center";
  t.beginRender(c, undefined);
  t.setAttributeString("value", m);
  t.setAttributeString("font", at);
  t.setAttributeString("color", v);
  if (!(g)) goto L_8ec;
  if (!(!A)) goto L_8ec;
  goto L_8ed;
  // [栈深重同步 4 -> 3]
  t.setAttributeNumber("opacity", 1);
  t.setAttributeString("backgroundColor", At);
  t.setAttributeNumber("marginTop", e#2);
  t.setAttributeNumber("marginBottom", e#2);
  t.setAttributeString("textAlign", i#1);
  t.setAttributeNumber("numberOfLines", Y);
  t.setAttribute("adjustsFontSizeToFitWidth", U);
  t.setAttributeNumber("minimumScaleFactor", X);
  t.endRender();
  t.renderNamedSlot("end", this);
  if ((q)) goto L_b26;
  t.beginRender(b, undefined);
  t.setAttributeNumber("width", st);
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=54 closure=18 cpool=1 bc=4197B file=widgets/src/components/button/CoreButton
// locals: l, A, m, g, S, h, N, v, C, D, I, f, w, x, L, _, M, F, B, P, O, k, H, Y, U, X, W, q, z, V, G, j, Q, Z, $, J, K, tt, et, it, ot, rt, nt, st, dt, ut, at, ct, bt, lt, At, mt, gt, this
// closure: t, i, o, r, n, s, d, u, a, c, b, T, y, E, exports, e, R, p
function {
  this = this;
  let gt;
  let mt;
  let At;
  let lt;
  let bt;
  let ct;
  let at;
  let ut;
  let dt;
  let st;
  let nt;
  let rt;
  let ot;
  let it;
  let et;
  let tt;
  let K;
  let J;
  let $;
  let Z;
  let Q;
  let j;
  let G;
  let V;
  let z;
  let q;
  let W;
  let X;
  let U;
  let Y;
  let H;
  let k;
  let O;
  let P;
  let B;
  let F;
  let M;
  let _;
  let L;
  let x;
  let w;
  let f;
  let I;
  let D;
  let C;
  let v;
  let N;
  let h;
  let S;
  let g;
  let m;
  let A;
  let l;
  if (!((this.viewModel == null))) goto L_cb;
  this.viewModel;
  l = {};
  A = l.icon;
  m = l.text;
  g = l.loading;
  S = l.disabled;
  h = l.onTap;
  if (!((l.coloring == null))) goto L_1d7;
  l.coloring;
  N = T[y.DEFAULT];
  if (!((l.foregroundColor == null))) goto L_227;
  l.foregroundColor;
  v = N.foreground;
  C = l.iconColor;
  if (!((l.backgroundColor == null))) goto L_29c;
  l.backgroundColor;
  D = N.background;
  I = l.background;
  if (!((l.borderColor == null))) goto L_311;
  l.borderColor;
  f = N.border;
  if (!((this.viewModel.disableShadow == null))) goto L_35e;
  this.viewModel.disableShadow;
  w = false;
  x = l.width;
  L = l.minWidth;
  _ = l.maxWidth;
  M = l.opacity;
  F = l.scaleX;
  B = l.scaleY;
  if (!((l.iconFlipRtl == null))) goto L_46f;
  l.iconFlipRtl;
  P = true;
  if (!((l.iconRotation == null))) goto L_49b;
  l.iconRotation;
  O = undefined;
  if (!((l.iconRespectSize == null))) goto L_4c8;
  l.iconRespectSize;
  k = false;
  if (!((l.iconRespectColoring == null))) goto L_4f5;
  l.iconRespectColoring;
  H = false;
  if (!((l.textNumberOfLines == null))) goto L_521;
  l.textNumberOfLines;
  Y = 2;
  U = l.textAdjustsFontSizeToFitWidth;
  X = l.textMinimumScaleFactor;
  W = l.touchAreaExtension;
  if (!((l.circular == null))) goto L_5c0;
  l.circular;
  q = false;
  if (!(l.reverse)) goto L_5ef;
  goto L_5f4;
  // [栈深重同步 1 -> 0]
  z = "row";
  V = l.accessibilityId;
  G = l.accessibilityLabel;
  j = l.accessibilityHint;
  Q = l.iconOverrideHeight;
  Z = l.iconOverrideWidth;
  if (!((l.sizing == null))) goto L_701;
  l.sizing;
  $ = E.SMALL;
  J = exports.sizingOptions[$];
  K = J.minHeight;
  tt = J.icon;
  if (!(A)) goto L_7b5;
  if (!(("string" != typeof A))) goto L_7b5;
  if (!(k)) goto L_7b5;
  goto L_7b8;
  // [栈深重同步 1 -> 0]
  et = Q;
  if (!(A)) goto L_7f6;
  if (!(("string" != typeof A))) goto L_7f6;
  if (!(k)) goto L_7f6;
  goto L_7f9;
  // [栈深重同步 1 -> 0]
  it = Z;
  if (!((et == null))) goto L_806;
  et;
  ot = tt;
  if (!((it == null))) goto L_813;
  it;
  rt = tt;
  nt = J.spinner;
  st = J.sides;
  dt = J.separator;
  ut = J.verticalPad;
  if (!(l.disableAccessibilityFontScaling)) goto L_8f9;
  goto L_91d;
  // [栈深重同步 1 -> 0]
  at = J.font;
  if (!((l.borderWidth == null))) goto L_96c;
  l.borderWidth;
  ct = J.border;
  bt = (K / 2);
  lt = ((K / 2) - (tt / 2));
  if (!(this.shouldUseBlendingColor())) goto L_9af;
  goto L_9b0;
  // [栈深重同步 1 -> 0]
  At = undefined;
  if (!((this.viewModel.flexGrowEnabled == null))) goto L_9fd;
  this.viewModel.flexGrowEnabled;
  mt = false;
  if (!((this.viewModel.filterTouchesWhenObscured == null))) goto L_a4a;
  this.viewModel.filterTouchesWhenObscured;
  gt = false;
  t.beginRender(e, undefined);
  t.setAttributeRef(this.root);
  if (!(S)) goto L_af4;
  goto L_af7;
  // [栈深重同步 4 -> 3]
  t.setAttributeFunction("onTap", h);
  if (!(S)) goto L_b2c;
  goto L_b4f;
  // [栈深重同步 4 -> 3]
  t.setAttributeFunction("onTouchStart", this.onTouchStart);
  t.setAttributeFunction("onTouchEnd", this.onTouchEnd);
  t.setAttributeNumber("touchAreaExtension", W);
  t.setAttributeString("backgroundColor", D);
  t.setAttributeString("background", I);
  t.setAttributeNumber("minHeight", K);
  t.setAttribute("width", x);
  t.setAttribute("minWidth", L);
  t.setAttribute("maxWidth", _);
  t.setAttributeNumber("paddingLeft", lt);
  t.setAttributeNumber("paddingRight", lt);
  t.setAttributeNumber("opacity", M);
  t.setAttributeNumber("scaleX", F);
  t.setAttributeNumber("scaleY", B);
  t.setAttributeNumber("borderRadius", bt);
  if (!(mt)) goto L_e46;
  goto L_e49;
  // [栈深重同步 4 -> 3]
  t.setAttributeStyle("style", p);
  if (!(f)) goto L_ead;
  goto L_eae;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("border", undefined);
  if (!(D)) goto L_f0c;
  if (!(!w)) goto L_f0c;
  goto L_f0d;
  // [栈深重同步 4 -> 3]
  t.setAttributeString("boxShadow", undefined);
  t.setAttributeString("accessibilityId", V);
  if (!((G == null))) goto L_f75;
  G;
  t.setAttributeString("accessibilityLabel", m);
  t.setAttributeString("accessibilityHint", j);
  t.setAttribute("accessibilityStateDisabled", S);
  t.setAttributeString("flexDirection", z);
  t.setAttribute("filterTouchesWhenObscured", gt);
  function <atom:0>();
  t.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=2 bc=170B file=widgets/src/components/button/CoreButton
// closure: e, t, i, o
function {
  if (!(t)) goto L_34;
  goto L_37;
  // [栈深重同步 4 -> 3]
  e.setAttribute("scaleY", i);
  if (!(t)) goto L_6f;
  goto L_72;
  // [栈深重同步 4 -> 3]
  e.setAttribute("scaleX", o);
  if (!(t)) goto L_a5;
  goto L_a6;
  // [栈深重同步 4 -> 3]
  e.setAttribute("translationY", 0);
  return;
}

// fn <atom:0>  args=1 vars=5 closure=0 cpool=3 bc=333B file=widgets/src/components/button/CoreButton
// args: t
// locals: e, i, o, this
function {
  this = this;
  let e;
  e = this.root.single();
  if (!(e)) goto L_14c;
  let o;
  let i;
  if (!((this.viewModel.scaleY == null))) goto L_a3;
  this.viewModel.scaleY;
  i = 1;
  if (!((this.viewModel.scaleX == null))) goto L_ed;
  this.viewModel.scaleX;
  o = 1;
  if (!(t)) goto L_139;
  goto L_13b;
  // [栈深重同步 4 -> 3]
  this.renderer.animate({duration: 0.1}, function <atom:0>);
  // close_loc o
  // close_loc i
  return;
}

// fn <atom:0>  args=0 vars=3 closure=2 cpool=0 bc=262B file=widgets/src/components/button/CoreButton
// locals: t, e, this
// closure: A, S
function {
  this = this;
  if (!(A.Device.isIOS())) goto L_103;
  if (!(!S.isCustomTheme())) goto L_103;
  let e;
  let t;
  if (((undefined === undefined))) goto L_cf;
  t = <to_object>(undefined).circular;
  e = <to_object>(undefined).disableBlendingBackground;
  <to_object>(undefined);
  goto L_f4;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_85;
  // [栈深重同步 1 -> 0]
  if (!(!t)) goto L_103;
  if (!(!e)) goto L_103;
  return true;
  return false;
}

// fn <atom:0>  args=3 vars=31 closure=0 cpool=8 bc=4220B file=widgets/src/components/button/CoreButton
// args: require, module, exports
// locals: t, e, i, o, r, n, s, d, u, a, c, b, l, A, m, g, S, h, N, E, v, y, CoreButton, <class_fields_init>, CoreButton#1, T, p, R
function {
  let R;
  let p;
  let T;
  let CoreButton#1;
  let N;
  let h;
  let S;
  let g;
  let m;
  let A;
  let l;
  let b;
  let c;
  let a;
  let u;
  let d;
  let s;
  let n;
  let r;
  let o;
  let i;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CoreButtonSizing = undefined;
  exports.CoreButtonWidths = undefined;
  exports.CoreButtonColoring = undefined;
  exports.CoreButton = undefined;
  exports.sizingOptions = undefined;
  t = require("valdi_core/src/JSX").jsx;
  e = t.makeNodePrototype("view", ["onTouchDelayDuration", 0.05], "6ZvHbVOaTY--eqau");
  i = t.makeNodePrototype("layout", undefined, "Fc3VRAfa0KGw2kN8");
  o = t.makeNodePrototype("layout", undefined, "n6V391IgXOYfyuZQ");
  r = t.makeNodePrototype("layout", undefined, "ZOVU74Mpvuk6nESc");
  n = t.makeNodePrototype("spinner", undefined, "i7XJVW4aQLEHNVxA");
  s = t.makeNodePrototype("image", undefined, "i7aqXPFkAwzX-Y9a");
  d = t.makeNodePrototype("layout", ["position", "absolute", "top", 0, "left", 0, "bottom", 0, "right", 0, "alignItems", "center", "alignContent", "center", "justifyContent", "center"], "GeWXgTqx_6qwU0ID");
  u = t.makeNodePrototype("spinner", undefined, "WM_pNWSTLwlDhEe_");
  a = t.makeNodePrototype("layout", undefined, "e6p_mMiOiaQGPYei");
  c = t.makeNodePrototype("label", ["flexShrink", 1], "15wowGY6Z_yXSmH_");
  b = t.makeNodePrototype("layout", undefined, "fQqE-66lkvgqIn_w");
  l = require("valdi_core/src/Component");
  A = require("valdi_core/src/Device");
  m = require("valdi_core/src/ElementRef");
  g = require("valdi_core/src/Style");
  S = require("widgets/src/InitSemanticColors");
  h = require("widgets/src/styles/TextStyleFont");
  N = require("widgets/src/styles/semanticColors");
  if ((E)) goto L_3be;
  E = {};
  exports.CoreButtonSizing = {};
  !function <atom:0>({});
  if ((v)) goto L_3d7;
  v = {};
  exports.CoreButtonWidths = {};
  function <atom:0>({});
  if ((y)) goto L_3ef;
  y = {};
  exports.CoreButtonColoring = {};
  function <atom:0>({});
  let CoreButton;
  let <class_fields_init>;
  class CoreButton extends l.StatefulComponent { ... }
  <proto:CoreButton>.onRender = function <atom:0>;
  <proto:CoreButton>.onTouchAnim = function <atom:0>;
  <proto:CoreButton>.shouldUseBlendingColor = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:CoreButton>;
  CoreButton = function <atom:0>;
  // close_loc <class_fields_init>
  CoreButton#1 = function <atom:0>;
  exports.CoreButton = CoreButton#1;
  {}[y.DEFAULT] = {foreground: N.SemanticColor.Text.PRIMARY, background: undefined, border: undefined};
  {foreground: N.SemanticColor.Text.PRIMARY, background: undefined, border: undefined};
  {}[y.PRIMARY] = {foreground: N.SemanticColor.Text.ON_PRIMARY_BUTTON, background: N.SemanticColor.Button.PRIMARY, border: undefined};
  {foreground: N.SemanticColor.Text.ON_PRIMARY_BUTTON, background: N.SemanticColor.Button.PRIMARY, border: undefined};
  {}[y.SECONDARY] = {foreground: N.SemanticColor.Text.ON_SECONDARY_BUTTON, background: N.SemanticColor.Button.SECONDARY, border: undefined};
  {foreground: N.SemanticColor.Text.ON_SECONDARY_BUTTON, background: N.SemanticColor.Button.SECONDARY, border: undefined};
  {}[y.TERTIARY] = {foreground: N.SemanticColor.Text.ON_TERTIARY_BUTTON, background: N.SemanticColor.Button.TERTIARY, border: undefined};
  {foreground: N.SemanticColor.Text.ON_TERTIARY_BUTTON, background: N.SemanticColor.Button.TERTIARY, border: undefined};
  {}[y.INACTIVE] = {foreground: N.SemanticColor.Text.ON_INACTIVE_BUTTON, background: N.SemanticColor.Button.INACTIVE, border: undefined};
  {foreground: N.SemanticColor.Text.ON_INACTIVE_BUTTON, background: N.SemanticColor.Button.INACTIVE, border: undefined};
  {}[y.BRANDED] = {foreground: N.SemanticColor.Base.FADED_BLACK, background: N.SemanticColor.Base.BRAND_YELLOW, border: undefined};
  {foreground: N.SemanticColor.Base.FADED_BLACK, background: N.SemanticColor.Base.BRAND_YELLOW, border: undefined};
  T = {};
  {}[E.XL] = {minHeight: 52, icon: 32, spinner: 24, border: 4, sides: 22, separator: 10, font: h.TextStyleFont.HEADLINE, nonDynamicFont: h.TextStyleFontNonDynamic.HEADLINE, verticalPad: 12, shadow: "0 3 8 ".concat(N.SemanticColor.Elevation.CELL_SHADOW)};
  {minHeight: 52, icon: 32, spinner: 24, border: 4, sides: 22, separator: 10, font: h.TextStyleFont.HEADLINE, nonDynamicFont: h.TextStyleFontNonDynamic.HEADLINE, verticalPad: 12, shadow: "0 3 8 ".concat(N.SemanticColor.Elevation.CELL_SHADOW)};
  {}[E.LARGE] = {minHeight: 44, icon: 28, spinner: 24, border: 4, sides: 16, separator: 8, font: h.TextStyleFont.SUBHEADLINE_EMPHASIS, nonDynamicFont: h.TextStyleFontNonDynamic.SUBHEADLINE_EMPHASIS, verticalPad: 10, shadow: "0 3 8 ".concat(N.SemanticColor.Elevation.CELL_SHADOW)};
  {minHeight: 44, icon: 28, spinner: 24, border: 4, sides: 16, separator: 8, font: h.TextStyleFont.SUBHEADLINE_EMPHASIS, nonDynamicFont: h.TextStyleFontNonDynamic.SUBHEADLINE_EMPHASIS, verticalPad: 10, shadow: "0 3 8 ".concat(N.SemanticColor.Elevation.CELL_SHADOW)};
  {}[E.MEDIUM] = {minHeight: 36, icon: 24, spinner: 16, border: 3, sides: 14, separator: 6, font: h.TextStyleFont.SUBHEADLINE_EMPHASIS, nonDynamicFont: h.TextStyleFontNonDynamic.SUBHEADLINE_EMPHASIS, verticalPad: 8, shadow: undefined};
  {minHeight: 36, icon: 24, spinner: 16, border: 3, sides: 14, separator: 6, font: h.TextStyleFont.SUBHEADLINE_EMPHASIS, nonDynamicFont: h.TextStyleFontNonDynamic.SUBHEADLINE_EMPHASIS, verticalPad: 8, shadow: undefined};
  {}[E.SMALL] = {minHeight: 32, icon: 24, spinner: 16, border: 2, sides: 14, separator: 6, font: h.TextStyleFont.SUBHEADLINE_EMPHASIS, nonDynamicFont: h.TextStyleFontNonDynamic.SUBHEADLINE_EMPHASIS, verticalPad: 6, shadow: undefined};
  {minHeight: 32, icon: 24, spinner: 16, border: 2, sides: 14, separator: 6, font: h.TextStyleFont.SUBHEADLINE_EMPHASIS, nonDynamicFont: h.TextStyleFontNonDynamic.SUBHEADLINE_EMPHASIS, verticalPad: 6, shadow: undefined};
  {}[E.TINY] = {minHeight: 28, icon: 16, spinner: 12, border: 2, sides: 8, separator: 4, font: h.TextStyleFont.CAPTION_EMPHASIS, nonDynamicFont: h.TextStyleFontNonDynamic.CAPTION_EMPHASIS, verticalPad: 4, shadow: undefined};
  {minHeight: 28, icon: 16, spinner: 12, border: 2, sides: 8, separator: 4, font: h.TextStyleFont.CAPTION_EMPHASIS, nonDynamicFont: h.TextStyleFontNonDynamic.CAPTION_EMPHASIS, verticalPad: 4, shadow: undefined};
  exports.sizingOptions = {};
  p = new g.Style({flexDirection: "row", alignItems: "center", justifyContent: "center", accessibilityCategory: "button"});
  R = new g.Style({flexDirection: "row", alignItems: "center", flexGrow: 1, justifyContent: "center", accessibilityCategory: "button"});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/button/CoreButton
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
