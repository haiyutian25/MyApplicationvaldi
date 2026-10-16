// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=dil_widgets/src/widgets/Button
// closure: this
function {
  return this.context;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=146B file=dil_widgets/src/widgets/Button
// closure: this
function {
  if (!((true === this.viewModel.disabled))) goto L_4c;
  return undefined;
  return this.viewModel.inheritedTooltip;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=72B file=dil_widgets/src/widgets/Button
// closure: this
function {
  return this.buttonRef.single();   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=279B file=dil_widgets/src/widgets/Button
// locals: e
// closure: this, A
function {
  let e;
  if (!((this.buttonRef.single() == null))) goto L_53;
  this.buttonRef.single();
  goto L_95;
  e = undefined.frame.width;
  this.setStateAnimated({pressed: true, pressScale: A.resolveDILButtonPressScale(e)}, A.DIL_CONTROL_STATE_ANIMATION);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=84B file=dil_widgets/src/widgets/Button
// closure: this, A
function {
  this.setStateAnimated({pressed: false}, A.DIL_CONTROL_STATE_ANIMATION);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=241B file=dil_widgets/src/widgets/Button
// args: e
// closure: this, A
function {
  if (!((this.tooltipPresentation.onHover == null))) goto L_4e;
  this.tooltipPresentation.onHover;
  this.tooltipPresentation;
  goto L_52;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, e);
  if (!((e !== this.state.hovered))) goto L_f0;
  this.setStateAnimated({hovered: e}, A.DIL_CONTROL_STATE_ANIMATION);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=5 cpool=7 bc=340B file=dil_widgets/src/widgets/Button
// locals: this, this.active_func, new.target, arguments
// closure: A, <class_fields_init>, S, m, u
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
  this.state = {actionRunning: false, actionShowsLoading: true, hovered: false, pressed: false, pressScale: 0.97};
  this.buttonRef = new S.ElementRef();
  this.tooltipPresentation = new m.DILTooltipPresentation(this.buttonRef, function <atom:0>, function <atom:0>);
  this.pressFeedback = new u.DILPressFeedback(this, function <atom:0>);
  this.handleTouchStart = function <atom:0>;
  this.handleTouchEnd = function <atom:0>;
  this.handleHover = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=dil_widgets/src/widgets/Button
// locals: this
function {
  this = this;
  this.tooltipPresentation.onCreate();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=dil_widgets/src/widgets/Button
// locals: this
function {
  this = this;
  this.tooltipPresentation.onViewModelUpdate();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=dil_widgets/src/widgets/Button
// locals: this
function {
  this = this;
  this.tooltipPresentation.onDestroy();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=9 cpool=0 bc=538B file=dil_widgets/src/widgets/Button
// closure: e, n, this, C, x, j, v, F, h
function {
  e.beginRender(n, undefined);
  if (!(this.viewModel.truncate)) goto L_9f;
  goto L_c3;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", x.label);
  e.setAttributeString("value", this.viewModel.label);
  e.setAttributeString("color", j);
  e.setAttributeString("font", v.dynamicMediumSystemFontForSize(F));
  if (!(h)) goto L_1ed;
  goto L_1ee;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", undefined);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=25 closure=24 cpool=1 bc=7600B file=dil_widgets/src/widgets/Button
// locals: u, c, h, b, g, S, A, m, R, L, z, _, O, q, E, F, $, H, B, j, W, V, G, Q, this
// closure: e, n, C, x, v, p, M, y, k, N, f, T, P, t, w, i, I, D, o, r, s, d, l, a
function {
  this = this;
  let Q;
  let G;
  let V;
  let W;
  let j;
  let B;
  let H;
  let $;
  let F;
  let E;
  let q;
  let O;
  let _;
  let z;
  let L;
  let R;
  let m;
  let A;
  let S;
  let g;
  let b;
  let h;
  let c;
  let u;
  if (!((this.viewModel.color == null))) goto L_99;
  this.viewModel.color;
  u = "primary";
  c = this.disabled;
  if (((true === this.viewModel.loading))) goto L_198;
  if (!(this.state.actionRunning)) goto L_198;
  h = this.state.actionShowsLoading;
  if ((c)) goto L_1eb;
  if ((h)) goto L_1eb;
  b = this.state.actionRunning;
  if (!(this.state.hovered)) goto L_238;
  g = !b;
  S = this.isTappable;
  A = p.Device.isWeb();
  if ((p.Device.isIOS())) goto L_33d;
  m = p.Device.isAndroid();
  if (!((this.viewModel.size == null))) goto L_38d;
  this.viewModel.size;
  R = "lg";
  if (!((M[R] == null))) goto L_3bf;
  M[R];
  L = M.lg;
  z = y.resolveDILControlHeight(R, "lg");
  _ = (false !== this.viewModel.pill);
  if (!(this.viewModel.uniform)) goto L_482;
  goto L_4b2;
  // [栈深重同步 1 -> 0]
  if (!(_)) goto L_4b0;
  goto L_4b1;
  // [栈深重同步 2 -> 1]
  O = (L.gutter * 1);
  q = N(this.viewModel.style, this.viewModel.variant);
  if (!((undefined === this.viewModel.iconSize))) goto L_5b0;
  goto L_619;
  // [栈深重同步 1 -> 0]
  E = y.resolveDILButtonIconSize(this.viewModel.iconSize);
  F = y.resolveDILControlFontSize(this.viewModel.size, "lg");
  if (!((undefined === this.viewModel.iconStart))) goto L_6d6;
  goto L_73f;
  // [栈深重同步 1 -> 0]
  $ = f.resolveIconAsset(this.viewModel.iconStart);
  if (!((undefined === this.viewModel.iconEnd))) goto L_78c;
  goto L_7f5;
  // [栈深重同步 1 -> 0]
  H = f.resolveIconAsset(this.viewModel.iconEnd);
  if (((undefined !== this.viewModel.iconStart))) goto L_887;
  B = (undefined !== this.viewModel.iconEnd);
  j = T(u, q, c, g);
  if (!(_)) goto L_8a9;
  goto L_8cd;
  // [栈深重同步 1 -> 0]
  W = L.radius;
  if (!((true === this.viewModel.block))) goto L_964;
  V = ("row" === this.viewModel.parentFlexDirection);
  if (!(this.viewModel.truncate)) goto L_9b1;
  goto L_9d5;
  // [栈深重同步 1 -> 0]
  G = x.button;
  null;
  this.baseViewAttributes;
  if (!(p.Device.isWeb())) goto L_a6f;
  goto L_a70;
  // [栈深重同步 2 -> 1]
  if (!(p.Device.isWeb())) goto L_ade;
  if (!(c)) goto L_acb;
  goto L_adf;
  // [栈深重同步 2 -> 1]
  if (!(b)) goto L_ad7;
  goto L_adf;
  // [栈深重同步 2 -> 1]
  goto L_adf;
  // [栈深重同步 2 -> 1]
  if (!(S)) goto L_b0e;
  goto L_b0f;
  // [栈深重同步 2 -> 1]
  if (!(S)) goto L_b3e;
  goto L_b3f;
  // [栈深重同步 2 -> 1]
  Q = {onHover: undefined, cursor: undefined, onTouchStart: undefined, onTouchEnd: undefined};
  this.pressFeedback.applyAttributes(Q, S);
  e.beginRender(t, undefined);
  e.setAttributeRef(this.buttonRef);
  if (!(V)) goto L_caa;
  goto L_cad;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", G);
  e.setAttributes(Q);
  e.setAttributeString("accessibilityLabel", this.viewModel.label);
  e.setAttribute("accessibilityStateDisabled", b);
  e.setAttribute("borderRadius", W);
  if (!(A)) goto L_e23;
  if (!(("link" === q))) goto L_ded;
  goto L_e24;
  // [栈深重同步 4 -> 3]
  goto L_e24;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("focusRingColor", undefined);
  if (!(A)) goto L_e74;
  if ((("outline" === q))) goto L_e6c;
  if (!(("ghost" === q))) goto L_e71;
  goto L_e75;
  // [栈深重同步 4 -> 3]
  goto L_e75;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("focusRingOffset", undefined);
  if (!(this.viewModel.label)) goto L_f13;
  if (!(B)) goto L_f13;
  goto L_f14;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("gap", undefined);
  e.setAttributeNumber("height", z);
  if (!(this.viewModel.uniform)) goto L_fbc;
  goto L_fbd;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("minWidth", undefined);
  e.setAttributeNumber("paddingLeft", O);
  e.setAttributeNumber("paddingRight", O);
  if (!(this.viewModel.block)) goto L_109f;
  if (!(V)) goto L_1098;
  goto L_10eb;
  // [栈深重同步 4 -> 3]
  goto L_10eb;
  // [栈深重同步 4 -> 3]
  if (!(this.viewModel.uniform)) goto L_10ea;
  goto L_10eb;
  // [栈深重同步 4 -> 3]
  e.setAttribute("width", undefined);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", x.buttonSurface);
  e.setAttributeString("backgroundColor", I(u, q, c, this.state.pressed, g));
  e.setAttributeString("borderColor", D(u, q, c, g));
  if (!(("outline" === q))) goto L_1265;
  goto L_1266;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("borderWidth", undefined);
  e.setAttribute("borderRadius", W);
  if (!(m)) goto L_12cc;
  goto L_1359;
  // [栈深重同步 4 -> 3]
  if (!(this.state.pressed)) goto L_1358;
  goto L_1359;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("scaleX", 1);
  if (!(m)) goto L_138f;
  goto L_141c;
  // [栈深重同步 4 -> 3]
  if (!(this.state.pressed)) goto L_141b;
  goto L_141c;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("scaleY", 1);
  e.endRender();
  if (!((undefined !== this.viewModel.iconStart))) goto L_163b;
  if (!((undefined !== $))) goto L_163b;
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", x.icon);
  e.setAttribute("src", $);
  e.setAttributeNumber("width", E);
  e.setAttributeNumber("height", E);
  if (!(h)) goto L_15df;
  goto L_15e0;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", undefined);
  e.setAttributeString("tint", j);
  e.endRender();
  if (!((undefined !== this.viewModel.iconStart))) goto L_17cf;
  if (!((undefined === $))) goto L_17cf;
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", x.iconPlaceholder);
  e.setAttributeNumber("width", E);
  e.setAttributeNumber("height", E);
  if (!(h)) goto L_17a3;
  goto L_17a4;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", undefined);
  e.endRender();
  if (!(this.viewModel.label)) goto L_181b;
  function <atom:0>();
  if (!((undefined !== this.viewModel.iconEnd))) goto L_1a0f;
  if (!((undefined !== H))) goto L_1a0f;
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", x.icon);
  e.setAttribute("src", H);
  e.setAttributeNumber("width", E);
  e.setAttributeNumber("height", E);
  if (!(h)) goto L_19b3;
  goto L_19b4;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", undefined);
  e.setAttributeString("tint", j);
  e.endRender();
  if (!((undefined !== this.viewModel.iconEnd))) goto L_1ba3;
  if (!((undefined === H))) goto L_1ba3;
  e.beginRender(d, undefined);
  e.setAttributeStyle("style", x.iconPlaceholder);
  e.setAttributeNumber("width", E);
  e.setAttributeNumber("height", E);
  if (!(h)) goto L_1b77;
  goto L_1b78;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", undefined);
  e.endRender();
  if (!(h)) goto L_1d87;
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", x.loadingOverlay);
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", x.loadingIndicator);
  e.setAttributeNumber("width", F);
  e.setAttributeNumber("height", F);
  e.setAttributeString("color", j);
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=dil_widgets/src/widgets/Button
// closure: this
function {
  return this.handleTap();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=1 bc=195B file=dil_widgets/src/widgets/Button
// closure: this, c
function {
  c.runDILControlInteraction(this.context, this.viewModel, {target: "button", affordance: c.DILInteractionAffordance.Option}, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=1 bc=128B file=dil_widgets/src/widgets/Button
// locals: this
// closure: c
function {
  this = this;
  if (!(this.isTappable)) goto L_7f;
  if (!((undefined === this.cachedOnTap))) goto L_5b;
  this.cachedOnTap = function <atom:0>;
  function <atom:0>;
  return this.cachedOnTap;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=266B file=dil_widgets/src/widgets/Button
// locals: this
function {
  this = this;
  if (!(!this.disabled)) goto L_109;
  if (!((true !== this.viewModel.loading))) goto L_109;
  if (!(!this.state.actionRunning)) goto L_109;
  if ((this.hasClickHandler)) goto L_109;
  return this.hasSubmitHandler;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=463B file=dil_widgets/src/widgets/Button
// locals: e, this
// closure: b
function {
  this = this;
  let e;
  e = {marginLeft: undefined, marginTop: undefined};
  if (!((undefined !== this.viewModel.autoSpacing))) goto L_c7;
  b.applyDILAutoSpacingAttributes(e, this.viewModel.autoSpacing);
  if (!((undefined !== this.viewModel.theme))) goto L_161;
  e.colorPaletteName = this.viewModel.theme;
  this.viewModel.theme;
  e.accessibilityCategory = "button";
  if (!((undefined !== this.onTap))) goto L_1ca;
  e.onTap = this.onTap;
  this.onTap;
  return e;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=dil_widgets/src/widgets/Button
// locals: this
function {
  this = this;
  return (true === this.viewModel.disabled);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=79B file=dil_widgets/src/widgets/Button
// locals: this
function {
  this = this;
  if (((undefined !== this.clickCallback))) goto L_4e;
  return (undefined !== this.clickAction);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=146B file=dil_widgets/src/widgets/Button
// locals: this
function {
  this = this;
  if (!((true === this.viewModel.submit))) goto L_91;
  return (undefined !== this.viewModel.submitForm);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=dil_widgets/src/widgets/Button
// locals: this
function {
  this = this;
  return this.viewModel.onClick;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=dil_widgets/src/widgets/Button
// locals: this
function {
  this = this;
  return this.viewModel.onClickAction;
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=0 bc=378B file=dil_widgets/src/widgets/Button
// locals: e, e#1, this
function {
  this = this;
  let e;
  if (!(this.state.actionRunning)) goto L_4b;
  return;
  e = this.clickCallback;
  if (!((undefined !== e))) goto L_7c;
  e();
  goto L_e0;
  let e#1;
  if (!((this.clickAction == null))) goto L_aa;
  this.clickAction;
  this;
  goto L_ad;
  // [栈深重同步 1 -> 2]
  e#1 = <?>.call(undefined);
  if (!((undefined !== e#1))) goto L_df;
  this.dispatchAction(e#1);
  if (!((true === this.viewModel.submit))) goto L_179;
  if (!((this.viewModel.submitForm == null))) goto L_176;
  this.viewModel.submitForm;
  this.viewModel;
  goto L_179;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=87B file=dil_widgets/src/widgets/Button
// closure: this
function {
  if ((this.isDestroyed())) goto L_56;
  this.setState({actionRunning: false});
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=1 bc=281B file=dil_widgets/src/widgets/Button
// args: e
// locals: t, this
function {
  this = this;
  let t;
  if (!((this.context == null))) goto L_2f;
  this.context;
  goto L_54;
  t = undefined.dispatchActionPayload(e);
  if (((undefined === t))) goto L_118;
  if ((this.isDestroyed())) goto L_118;
  this.setState({actionRunning: true, actionShowsLoading: ("none" !== e.loadingBehavior), pressed: false});
  t.finally(function <atom:0>);
  return;
}

// fn N  args=2 vars=2 closure=0 cpool=0 bc=28B file=dil_widgets/src/widgets/Button
// args: e, t
function {
  if (!((undefined !== t))) goto L_7;
  return t;
  if (!(("secondary" === e))) goto L_16;
  return "outline";
  return "solid";
}

// fn R  args=2 vars=2 closure=0 cpool=0 bc=136B file=dil_widgets/src/widgets/Button
// args: e, t
function {
  if (!(("outline" !== t))) goto L_87;
  if (!(("ghost" !== t))) goto L_87;
  if (!(("link" !== t))) goto L_87;
  if (!(("soft" === t))) goto L_57;
  return "color-background-".concat(e, "-soft-alpha");
  return "color-background-".concat(e, "-solid");
  return;
}

// fn I  args=5 vars=5 closure=1 cpool=0 bc=130B file=dil_widgets/src/widgets/Button
// args: e, t, i, o, r
// closure: R
function {
  if (!(("link" !== t))) goto L_81;
  if (!(i)) goto L_1d;
  if (!(("outline" === t))) goto L_17;
  return undefined;
  return "color-background-disabled";
  if ((o)) goto L_25;
  if (!(r)) goto L_7b;
  if (!(("soft" === t))) goto L_63;
  goto L_64;
  // [栈深重同步 5 -> 4]
  if (!(o)) goto L_73;
  goto L_78;
  // [栈深重同步 7 -> 6]
  return "color-background-".concat(e, "-", t, "-", "hover");   // tail call
  return R(e, t);   // tail call
  return;
}

// fn D  args=4 vars=4 closure=1 cpool=0 bc=85B file=dil_widgets/src/widgets/Button
// args: e, t, i, o
// closure: L
function {
  if (!(("link" !== t))) goto L_54;
  if (!(i)) goto L_12;
  return "color-border-disabled";
  if (!(("outline" === t))) goto L_52;
  if (!(o)) goto L_4e;
  return "color-border-".concat(e, "-outline-hover");
  return L(e);
  return undefined;
  return;
}

// fn T  args=4 vars=4 closure=0 cpool=0 bc=149B file=dil_widgets/src/widgets/Button
// args: e, t, i, o
function {
  if (!(("link" !== t))) goto L_94;
  if (!(i)) goto L_15;
  return "color-text-disabled";
  if ((!o)) goto L_2b;
  if (!(("outline" !== t))) goto L_5e;
  if (!(("ghost" !== t))) goto L_5e;
  return "color-text-".concat(e, "-", t);
  return "color-text-".concat(e, "-", t, "-hover");
  return;
}

// fn L  args=1 vars=1 closure=0 cpool=0 bc=47B file=dil_widgets/src/widgets/Button
// args: e
function {
  return "color-border-".concat(e, "-outline");   // tail call
}

// fn <atom:0>  args=3 vars=40 closure=0 cpool=22 bc=2291B file=dil_widgets/src/widgets/Button
// args: require, module, exports
// locals: e, t, i, o, r, n, s, d, l, a, u, c, h, b, v, g, p, S, w, A, m, y, f, M, k, Button, <class_fields_init>, Button#1, N, R, I, D, T, L, x, P, C
function {
  N = function N;
  R = function R;
  I = function I;
  D = function D;
  T = function T;
  L = function L;
  let C;
  let P;
  let x;
  let Button#1;
  let k;
  let M;
  let f;
  let y;
  let m;
  let A;
  let w;
  let S;
  let p;
  let g;
  let v;
  let b;
  let h;
  let c;
  let u;
  let a;
  let l;
  let d;
  let s;
  let n;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Button = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "yutCIIQbr20XaqbK");
  i = e.makeNodePrototype("view", undefined, "N15-fwvl_mv1XwP8");
  o = e.makeNodePrototype("image", ["objectFit", "contain"], "yW4nGSzQmun9KbLk");
  r = e.makeNodePrototype("view", undefined, "vA9atu2HoHy9SCuo");
  n = e.makeNodePrototype("label", undefined, "L71qKQOQLDxX6hbk");
  s = e.makeNodePrototype("image", ["objectFit", "contain"], "xyr42cTtZz61Gczw");
  d = e.makeNodePrototype("view", undefined, "7q6osj8fqh4YsVUS");
  l = e.makeNodePrototype("view", undefined, "laz8HM41KkaNPkZ0");
  a = e.makeNodePrototype("spinner", undefined, "V-ybpGqYGtjAQ7Yj");
  u = require("dil_core/src/DILPressFeedback");
  c = require("dil_core/src/DILInteraction");
  h = require("dil_core/src/DILComponent");
  b = require("dil_core/src/layout/DILAutoSpacingAttributes");
  v = require("dil_core/src/typography/DILDynamicFont");
  g = require("valdi_core/src/Component");
  p = require("valdi_core/src/Device");
  S = require("valdi_core/src/ElementRef");
  w = require("valdi_core/src/Style");
  A = require("../animation/DILControlAnimations");
  m = require("../tooltip/DILTooltipPresentation");
  y = require("./DILWidgetSizes");
  f = require("./Icon");
  M = {3xs: {gutter: 6, radius: 6, gap: 3, iconSize: 14}, 2xs: {gutter: 8, radius: 6, gap: 4, iconSize: 16}, xs: {gutter: 8, radius: 6, gap: 4, iconSize: 16}, sm: {gutter: 10, radius: 6, gap: 4, iconSize: 18}, md: {gutter: 12, radius: 8, gap: 6, iconSize: 18}, lg: {gutter: 12, radius: 8, gap: 6, iconSize: 18}, xl: {gutter: 14, radius: 10, gap: 6, iconSize: 18}, 2xl: {gutter: 14, radius: 12, gap: 6, iconSize: 20}, 3xl: {gutter: 16, radius: 12, gap: 6, iconSize: 20}};
  k = 1.33;
  let Button;
  let <class_fields_init>;
  class Button extends g.StatefulComponent { ... }
  <proto:Button>.onCreate = function <atom:0>;
  <proto:Button>.onViewModelUpdate = function <atom:0>;
  <proto:Button>.onDestroy = function <atom:0>;
  <proto:Button>.onRender = function <atom:0>;
  <proto:Button>.onTap = function <atom:0>;
  <proto:Button>.isTappable = function <atom:0>;
  <proto:Button>.baseViewAttributes = function <atom:0>;
  <proto:Button>.disabled = function <atom:0>;
  <proto:Button>.hasClickHandler = function <atom:0>;
  <proto:Button>.hasSubmitHandler = function <atom:0>;
  <proto:Button>.clickCallback = function <atom:0>;
  <proto:Button>.clickAction = function <atom:0>;
  <proto:Button>.handleTap = function <atom:0>;
  <proto:Button>.dispatchAction = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Button>;
  Button = function <atom:0>;
  // close_loc <class_fields_init>
  Button#1 = function <atom:0>;
  exports.Button = Button#1;
  Button#1.usesDILParentFlexDirection = true;
  Button#1.dilV2Properties = ["block", "color", "disabled", "label", "loading", "onClick", "pill", "size", "submit", "truncate", "uniform", "variant"];
  // append([], 0, h.DIL_COMPONENT_PROPERTIES)
  [][h.DIL_COMPONENT_PROPERTIES] = "block";
  [][("block" ++)] = "color";
  [][("color" ++)] = "disabled";
  [][("disabled" ++)] = "iconEnd";
  [][("iconEnd" ++)] = "iconSize";
  [][("iconSize" ++)] = "iconStart";
  [][("iconStart" ++)] = "label";
  [][("label" ++)] = "loading";
  [][("loading" ++)] = "pill";
  [][("pill" ++)] = "size";
  [][("size" ++)] = "submit";
  [][("submit" ++)] = "truncate";
  [][("truncate" ++)] = "uniform";
  [][("uniform" ++)] = "variant";
  ("variant" ++);
  Button#1.properties = [];
  x = {button: new w.Style({position: "relative", flexDirection: "row", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "scroll"}), fillRow: new w.Style({flexBasis: "0%", flexGrow: 1, flexShrink: 1}), buttonSurface: new w.Style({position: "absolute", top: 0, bottom: 0, left: 0, right: 0}), icon: new w.Style({flexShrink: 0}), iconPlaceholder: new w.Style({flexShrink: 0}), label: new w.Style({flexShrink: 0}), loadingOverlay: new w.Style({position: "absolute", top: 0, bottom: 0, left: 0, right: 0, alignItems: "center", justifyContent: "center"}), loadingIndicator: new w.Style({flexShrink: 0})};
  P = x.button.extend({maxWidth: "100%"});
  C = x.label.extend({flexShrink: 1, minWidth: 0, numberOfLines: 1});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Button
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
