// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=dil_widgets/src/widgets/Badge
// closure: e, this
function {
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=8 cpool=0 bc=483B file=dil_widgets/src/widgets/Badge
// closure: e, t, L, this, w, I, v, l
function {
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", L.label);
  e.setAttributeString("value", this.viewModel.label);
  e.setAttributeString("color", w(this.viewModel));
  e.setAttributeString("font", I(this.viewModel.weight, v[l]));
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=15 closure=17 cpool=2 bc=2602B file=dil_widgets/src/widgets/Badge
// locals: r, s, l, b, y, p, h, m, f, e, o, x, A, k, this
// closure: e, t, L, w, I, v, S, n, u, g, a, M, i, o, c, D, d
function {
  this = this;
  let k;
  let A;
  let x;
  let f;
  let m;
  let h;
  let p;
  let y;
  let b;
  let l;
  let s;
  let r;
  r = this.viewModel.color;
  if (!(S(r))) goto L_7a;
  goto L_7f;
  // [栈深重同步 1 -> 0]
  s = "secondary";
  if (!((this.viewModel.size == null))) goto L_ce;
  this.viewModel.size;
  l = "sm";
  if (!((this.viewModel.variant == null))) goto L_11d;
  this.viewModel.variant;
  b = "soft";
  y = (true === this.viewModel.__legacy);
  p = this.viewModel.padding;
  h = n.resolveOptionalDILPadding(p);
  if (!((undefined !== h))) goto L_26b;
  if ((("object" != typeof p))) goto L_26b;
  if (((undefined !== p.y))) goto L_26b;
  if (((undefined !== p.top))) goto L_26b;
  m = (undefined !== p.bottom);
  f = {};
  if (!((undefined === h))) goto L_37f;
  let o;
  let e;
  e = u[l];
  if (!(y)) goto L_2df;
  if (!((false === this.viewModel.pill))) goto L_2db;
  goto L_35d;
  // [栈深重同步 1 -> 0]
  goto L_35d;
  // [栈深重同步 1 -> 0]
  if (!((false === this.viewModel.pill))) goto L_32d;
  goto L_35d;
  // [栈深重同步 1 -> 0]
  o = Math.round((e * g));
  f.paddingLeft = o;
  f.paddingRight = o;
  goto L_3ab;
  a.applyResolvedDILPaddingAttributes(f, h);
  if (((undefined === r))) goto L_3bb;
  if (!(S(r))) goto L_3da;
  if (!(("outline" === b))) goto L_3cb;
  goto L_402;
  // [栈深重同步 1 -> 0]
  goto L_402;
  // [栈深重同步 1 -> 0]
  x = i.resolveDILBackgroundColor(r);
  if (!((this.viewModel.parentFlexDirection == null))) goto L_4ba;
  this.viewModel.parentFlexDirection;
  if (!((this.viewModel.autoSpacing == null))) goto L_499;
  this.viewModel.autoSpacing;
  goto L_4ba;
  A = undefined.direction;
  if (!((this.viewModel.parentFlexAlignment == null))) goto L_572;
  this.viewModel.parentFlexAlignment;
  if (!((this.viewModel.autoSpacing == null))) goto L_551;
  this.viewModel.autoSpacing;
  goto L_572;
  k = undefined.align;
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", L.badge);
  e.setAttributes(this.baseViewAttributes);
  e.setAttributes(f);
  e.setAttribute("maxWidth", this.viewModel.maxWidth);
  if (!(m)) goto L_709;
  goto L_724;
  // [栈深重同步 4 -> 3]
  if (!(y)) goto L_71d;
  if (!(("sm" === l))) goto L_71d;
  goto L_724;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("height", c[l]);
  if (!((true === this.viewModel.__inline))) goto L_7a1;
  goto L_7c3;
  // [栈深重同步 4 -> 3]
  if (!(y)) goto L_7a9;
  goto L_7c3;
  // [栈深重同步 4 -> 3]
  if (!(("column" === A))) goto L_7c2;
  if (!((undefined === k))) goto L_7c2;
  goto L_7c3;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("alignSelf", undefined);
  if (!((false === this.viewModel.pill))) goto L_83c;
  goto L_841;
  // [栈深重同步 4 -> 3]
  e.setAttribute("borderRadius", "100%");
  e.setAttributeString("backgroundColor", x);
  if (!(("outline" === b))) goto L_8b2;
  goto L_8b3;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("borderColor", undefined);
  if (!(("outline" === b))) goto L_8ee;
  goto L_8ef;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("borderWidth", undefined);
  if (!(d.Device.isWeb())) goto L_9ac;
  goto L_9ad;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onHover", undefined);
  if (!((undefined === this.viewModel.label))) goto L_9fe;
  goto L_a01;
  // [栈深重同步 1 -> 0]
  function <atom:0>();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=dil_widgets/src/widgets/Badge
// locals: this.active_func, new.target, arguments, this
// closure: <class_fields_init>
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
  return this;
}

// fn w  args=1 vars=1 closure=2 cpool=0 bc=161B file=dil_widgets/src/widgets/Badge
// args: e
// closure: A, S
function {
  if (!(S(e.color))) goto L_4b;
  goto L_50;
  // [栈深重同步 2 -> 1]
  if (!((e.variant == null))) goto L_7c;
  e.variant;
  return A("secondary", "soft", e.interactive);   // tail call
}

// fn x  args=1 vars=1 closure=0 cpool=0 bc=32B file=dil_widgets/src/widgets/Badge
// args: e
function {
  if ((("md" === e))) goto L_12;
  if (!(("lg" === e))) goto L_1a;
  return "sm";
  return "xs";
}

// fn S  args=1 vars=1 closure=0 cpool=0 bc=63B file=dil_widgets/src/widgets/Badge
// args: e
function {
  if ((("secondary" === e))) goto L_3e;
  if ((("success" === e))) goto L_3e;
  if ((("danger" === e))) goto L_3e;
  if ((("warning" === e))) goto L_3e;
  if ((("info" === e))) goto L_3e;
  return ("discovery" === e);
}

// fn M  args=3 vars=3 closure=3 cpool=0 bc=30B file=dil_widgets/src/widgets/Badge
// args: e, o, t
// closure: h, y, b
function {
  if (!(("solid" === o))) goto L_f;
  return h[e];
  if (!(t)) goto L_18;
  return y[e];
  return b[e];
}

// fn D  args=1 vars=1 closure=1 cpool=0 bc=6B file=dil_widgets/src/widgets/Badge
// args: e
// closure: m
function {
  return m[e];
}

// fn A  args=3 vars=3 closure=2 cpool=0 bc=48B file=dil_widgets/src/widgets/Badge
// args: e, o, t
// closure: f, p
function {
  if (!(("solid" === o))) goto L_f;
  return "white";
  if (!(("outline" === o))) goto L_1e;
  return f[e];
  if (!((true === t))) goto L_2a;
  return "color-text-secondary";
  return p[e];
}

// fn I  args=2 vars=4 closure=1 cpool=0 bc=431B file=dil_widgets/src/widgets/Badge
// args: e, o
// locals: t, r
// closure: s
function {
  let r;
  let t;
  if (!((e == null))) goto L_11;
  e;
  t = "medium";
  r = s.DILSystemFontWeight.Bold;
  if (!(("normal" === t))) goto L_af;
  r = s.DILSystemFontWeight.Normal;
  goto L_15b;
  // [栈深重同步 1 -> 0]
  if (!(("medium" === t))) goto L_105;
  r = s.DILSystemFontWeight.Medium;
  goto L_15b;
  // [栈深重同步 1 -> 0]
  if (!(("semibold" === t))) goto L_15b;
  r = s.DILSystemFontWeight.Semibold;
  s.DILSystemFontWeight.Semibold;
  return s.dynamicSystemFontForTextStyle(o, s.resolveDILDynamicTextStyleForFontSize(o), r, false);   // tail call
}

// fn <atom:0>  args=3 vars=34 closure=0 cpool=10 bc=1291B file=dil_widgets/src/widgets/Badge
// args: require, module, exports
// locals: e, o, t, r, i, n, s, d, l, a, c, u, g, v, b, y, p, h, m, f, Badge, <class_fields_init>, Badge#1, w, x, S, M, D, A, I, L
function {
  w = function w;
  x = function x;
  S = function S;
  M = function M;
  D = function D;
  A = function A;
  I = function I;
  let L;
  let Badge#1;
  let f;
  let m;
  let h;
  let p;
  let y;
  let b;
  let v;
  let g;
  let u;
  let c;
  let a;
  let l;
  let d;
  let s;
  let n;
  let i;
  let r;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Badge = undefined;
  exports.resolveBadgeTextColor = undefined;
  exports.resolveBadgeTextSize = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeNodePrototype("view", undefined, "ru1i5Um2XlEObfaB");
  t = e.makeNodePrototype("label", undefined, "N0g9QFIa3Ob4LpDH");
  r = require("dil_core/src/DILComponent");
  i = require("dil_core/src/colors/DILColor");
  n = require("dil_core/src/layout/DILSpacing");
  s = require("dil_core/src/typography/DILDynamicFont");
  d = require("valdi_core/src/Device");
  l = require("valdi_core/src/Style");
  a = require("./attributes/DILSpacingAttributes");
  c = {sm: 20, md: 22, lg: 24};
  u = {sm: 5, md: 6, lg: 8};
  g = 1.33;
  v = {sm: 12, md: 14, lg: 14};
  b = {secondary: "color-background-secondary-soft-alpha", success: "color-background-success-soft-alpha", danger: "color-background-danger-soft-alpha", warning: "color-background-warning-soft-alpha", info: "color-background-info-soft-alpha", discovery: "color-background-discovery-soft-alpha"};
  y = {secondary: "color-background-secondary-soft-alpha", success: "green-a50", danger: "red-a50", warning: "orange-a50", info: "blue-a50", discovery: "purple-a50"};
  p = {secondary: "color-text-secondary-soft", success: "color-text-success-soft", danger: "color-text-danger-soft", warning: "color-text-warning-soft", info: "color-text-info-soft", discovery: "color-text-discovery-soft"};
  h = {secondary: "color-background-secondary-solid", success: "color-background-success-solid", danger: "red-500", warning: "orange-500", info: "blue-400", discovery: "purple-400"};
  m = {secondary: "color-border-secondary-outline", success: "color-border-success-outline", danger: "red-500", warning: "orange-500", info: "blue-500", discovery: "purple-500"};
  f = {secondary: "color-text-secondary", success: "green-500", danger: "red-500", warning: "orange-500", info: "blue-500", discovery: "color-text-discovery-outline"};
  let Badge;
  let <class_fields_init>;
  class Badge extends r.DILComponent { ... }
  <proto:Badge>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Badge>;
  Badge = function <atom:0>;
  // close_loc <class_fields_init>
  Badge#1 = function <atom:0>;
  exports.Badge = Badge#1;
  Badge#1.dilV2Properties = ["color", "label", "maxWidth", "onHover", "padding", "pill", "size", "variant", "weight"];
  // append([], 0, r.DIL_COMPONENT_PROPERTIES)
  [][r.DIL_COMPONENT_PROPERTIES] = "color";
  [][("color" ++)] = "hoverVariant";
  [][("hoverVariant" ++)] = "interactive";
  [][("interactive" ++)] = "label";
  [][("label" ++)] = "maxWidth";
  [][("maxWidth" ++)] = "onHover";
  [][("onHover" ++)] = "padding";
  [][("padding" ++)] = "pill";
  [][("pill" ++)] = "size";
  [][("size" ++)] = "variant";
  [][("variant" ++)] = "weight";
  ("weight" ++);
  Badge#1.properties = [];
  exports.resolveBadgeTextColor = w;
  exports.resolveBadgeTextSize = x;
  L = {badge: new l.Style({flexDirection: "row", alignItems: "center", justifyContent: "center", flexShrink: 0, width: "max-content", gap: 4}), label: new l.Style({flexShrink: 0})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Badge
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
