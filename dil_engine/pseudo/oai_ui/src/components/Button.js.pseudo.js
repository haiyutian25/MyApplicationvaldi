// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=61B file=oai_ui/src/components/Button
// args: e
function {
  e.Primary = "primary";
  e.Secondary = "secondary";
  e.Ghost = "ghost";
  e.Danger = "danger";
  return;
}

// fn <atom:0>  args=0 vars=0 closure=9 cpool=0 bc=821B file=oai_ui/src/components/Button
// closure: e, o, O, i, this, B, r, h, n
function {
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", O.loadingContent);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", O.hiddenLoadingContent);
  this.renderContent(B);
  e.endRender();
  e.beginRender(r, undefined);
  e.setAttributeStyle("style", O.loadingIndicator);
  e.beginComponent(h.ActivityIndicator, n, undefined, undefined);
  e.setViewModelProperty("color", B);
  e.setViewModelProperty("size", h.ActivityIndicatorSize.Small);
  e.endComponent();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=0 closure=11 cpool=1 bc=415B file=oai_ui/src/components/Button
// closure: e, o, O, i, this, B, r, h, n, R, s
function {
  if (!((true === this.viewModel.loading))) goto L_174;
  if (!(R)) goto L_58;
  goto L_19e;
  // [栈深重同步 1 -> 0]
  e.beginComponent(h.ActivityIndicator, s, undefined, undefined);
  e.setViewModelProperty("color", B);
  e.setViewModelProperty("size", h.ActivityIndicatorSize.Small);
  goto L_19e;
  // [栈深重同步 1 -> 0]
  this.renderContent(B);
  return;
}

// fn <atom:0>  args=0 vars=15 closure=23 cpool=1 bc=4125B file=oai_ui/src/components/Button
// locals: l, c, y, v, g, V, B, k, D, x, T, q, L, R, this
// closure: e, o, O, i, r, h, n, s, a, p, C, m, b, w, d, I, A, f, M, P, u, t, S
function {
  this = this;
  let R;
  let L;
  let q;
  let T;
  let x;
  let D;
  let k;
  let B;
  let V;
  let g;
  let v;
  let y;
  let c;
  let l;
  l = a.resolveOAIControlHeight(this.viewModel.size);
  if (!((this.viewModel.labelStyle == null))) goto L_e3;
  this.viewModel.labelStyle;
  goto L_104;
  c = undefined.attributes;
  y = p.resolveButtonMaterial(this.viewModel.material);
  v = p.supportsInteractiveGlass(y);
  if (!(v)) goto L_1c8;
  g = !p.isProminentGlassMaterial(y);
  V = C(this.viewModel, v);
  B = m(this.viewModel, g);
  k = b(this.viewModel);
  D = (k === w.PressFeedback.Ripple);
  if (!(p.isGlassMaterial(y))) goto L_30d;
  if (!(!v)) goto L_30d;
  goto L_310;
  // [栈深重同步 1 -> 0]
  x = y;
  T = {};
  null;
  this.viewModel;
  if (!((this.viewModel.accessibilityLabel == null))) goto L_3f2;
  this.viewModel.accessibilityLabel;
  if (!((undefined === V))) goto L_482;
  goto L_483;
  // [栈深重同步 4 -> 3]
  d.applyOAIBoxAttributes(T, {accessibilityLabel: this.viewModel.label, align: d.OAIAlign.Center, background: I(this.viewModel, g), borderColor: V, borderWidth: 1, height: l, justify: d.OAIJustify.Center, padding: {x: A(this.viewModel.size)}, radius: a.OAIRadius.Pill, width: f(this.viewModel)});
  if (((undefined === undefined))) goto L_5e2;
  q = <to_object>(undefined).ref;
  L = {};
  <to_object>(undefined);
  {ref: null};
  goto L_631;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_5aa;
  // [栈深重同步 1 -> 0]
  if (!((true === this.viewModel.loading))) goto L_71a;
  if (!((this.viewModel.variant !== P.Ghost))) goto L_71a;
  if (!((c == null))) goto L_6f8;
  c;
  goto L_719;
  R = (0 === undefined.numberOfLines);
  e.beginComponent(u.Button, t, undefined, undefined);
  e.setViewModelProperties(L);
  e.setViewModelProperty("controlRef", this.viewModel.controlRef);
  e.setViewModelProperty("disabled", this.viewModel.disabled);
  e.setViewModelProperty("disabledStyle", this.viewModel.disabledStyle);
  e.setViewModelProperty("feedback", k);
  e.setViewModelProperty("hoveredStyle", this.viewModel.hoveredStyle);
  e.setViewModelProperty("label", this.viewModel.label);
  e.setViewModelProperty("loading", this.viewModel.loading);
  e.setViewModelProperty("material", x);
  e.setViewModelProperty("onHover", this.viewModel.onHover);
  e.setViewModelProperty("onPress", this.viewModel.onPress);
  e.setViewModelProperty("onTouchEnd", this.viewModel.onTouchEnd);
  e.setViewModelProperty("onTouchStart", this.viewModel.onTouchStart);
  e.setViewModelProperty("pressedOpacity", this.viewModel.pressedOpacity);
  if (!((this.viewModel.pressedStyle == null))) goto L_d9a;
  this.viewModel.pressedStyle;
  if (!(D)) goto L_d70;
  goto L_d9a;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("pressedStyle", S(this.viewModel, v));
  if (!(D)) goto L_e02;
  if (!((c == null))) goto L_dd7;
  c;
  goto L_df8;
  if (!((undefined.color == null))) goto L_e03;
  undefined.color;
  goto L_e03;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("rippleColor", undefined);
  e.setViewModelProperty("selected", this.viewModel.selected);
  e.setViewModelProperty("selectedStyle", this.viewModel.selectedStyle);
  e.setViewModelProperty("showsPressedFeedback", this.viewModel.showsPressedFeedback);
  e.setViewModelProperty("style", this.viewModel.style);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=4 cpool=0 bc=1397B file=oai_ui/src/components/Button
// args: t
// locals: o, this
// closure: e, g, l, a
function {
  this = this;
  let o;
  if (!((undefined !== this.viewModel.children))) goto L_94;
  this.viewModel.children();
  return;
  if (!((this.viewModel.labelStyle == null))) goto L_df;
  this.viewModel.labelStyle;
  goto L_100;
  o = undefined.attributes;
  e.beginComponent(g.Text, l, undefined, undefined);
  e.setViewModelProperty("value", this.viewModel.label);
  if (!((o == null))) goto L_1f6;
  o;
  goto L_217;
  e.setViewModelProperty("align", undefined.textAlign);
  if (!((true === this.viewModel.disabled))) goto L_28f;
  goto L_2c1;
  // [栈深重同步 4 -> 3]
  if (!((o == null))) goto L_29a;
  o;
  goto L_2bb;
  if (!((undefined.color == null))) goto L_2c1;
  undefined.color;
  e.setViewModelProperty("color", t);
  if (!((o == null))) goto L_2f9;
  o;
  goto L_31a;
  e.setViewModelProperty("font", undefined.font);
  if (!((o == null))) goto L_352;
  o;
  goto L_373;
  e.setViewModelProperty("letterSpacing", undefined.letterSpacing);
  if (!((o == null))) goto L_3ab;
  o;
  goto L_3cc;
  e.setViewModelProperty("lineHeight", undefined.lineHeight);
  if (!((o == null))) goto L_404;
  o;
  goto L_425;
  e.setViewModelProperty("lineHeightMultiple", undefined.lineHeightMultiple);
  if (!((o == null))) goto L_45d;
  o;
  goto L_47e;
  e.setViewModelProperty("numberOfLines", undefined.numberOfLines);
  e.setViewModelProperty("size", a.OAITextSize.BodyStrong);
  if (!((o == null))) goto L_528;
  o;
  goto L_549;
  e.setViewModelProperty("textDecoration", undefined.textDecoration);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/components/Button
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

// fn b  args=1 vars=1 closure=2 cpool=0 bc=344B file=oai_ui/src/components/Button
// args: e
// closure: y, w
function {
  if (!(y.Device.isAndroid())) goto L_157;
  if (!(!y.Device.isWeb())) goto L_157;
  if (!((false !== e.showsPressedFeedback))) goto L_157;
  if (!((undefined === e.pressedStyle))) goto L_157;
  if (!((undefined === e.pressedOpacity))) goto L_157;
  return w.PressFeedback.Ripple;
  return;
}

// fn S  args=2 vars=2 closure=2 cpool=0 bc=423B file=oai_ui/src/components/Button
// args: e, t
// closure: P, O
function {
  if (!((undefined === e.pressedOpacity))) goto L_1a6;
  if (!(!t)) goto L_1a6;
  if (!((e.variant == null))) goto L_79;
  e.variant;
  if (!((P.Primary === P.Primary))) goto L_c4;
  return O.primaryPressed;
  if (!((P.Primary === P.Secondary))) goto L_10f;
  return O.secondaryPressed;
  if (!((P.Primary === P.Ghost))) goto L_15a;
  return O.ghostPressed;
  if (!((P.Primary === P.Danger))) goto L_1a5;
  return O.unchanged;
  P.Primary;
  return;
}

// fn I  args=2 vars=2 closure=2 cpool=0 bc=694B file=oai_ui/src/components/Button
// args: e, t
// closure: a, P
function {
  if (!((true === e.disabled))) goto L_6d;
  return a.OAIColor.InteractiveBgControlDefault;
  if ((!t)) goto L_b8;
  if (!((e.variant === P.Danger))) goto L_2b5;
  if (!((e.variant == null))) goto L_106;
  e.variant;
  if (!((P.Primary === P.Secondary))) goto L_172;
  return a.OAIColor.InteractiveBgTertiaryDefault;
  if (!((P.Primary === P.Ghost))) goto L_1de;
  return a.OAIColor.Transparent;
  if (!((P.Primary === P.Danger))) goto L_24a;
  return a.OAIColor.InteractiveBgDangerPrimaryDefault;
  (P.Primary === P.Primary);
  return a.OAIColor.InteractiveBgPrimaryDefault;
  // [栈深重同步 1 -> 0]
  return;
}

// fn C  args=2 vars=2 closure=2 cpool=0 bc=151B file=oai_ui/src/components/Button
// args: e, t
// closure: P, a
function {
  if (!(!t)) goto L_96;
  if (!((e.variant === P.Secondary))) goto L_94;
  return a.OAIColor.InteractiveBorderSecondaryDefault;
  return undefined;
  return;
}

// fn m  args=2 vars=2 closure=2 cpool=0 bc=542B file=oai_ui/src/components/Button
// args: e, t
// closure: a, P
function {
  if (!((true === e.disabled))) goto L_6d;
  return a.OAIColor.InteractiveLabelTertiaryDefault;
  if (!((e.variant === P.Danger))) goto L_fa;
  return a.OAIColor.InteractiveLabelDangerPrimaryDefault;
  if ((t)) goto L_190;
  if (((e.variant === P.Ghost))) goto L_190;
  if (!((e.variant === P.Secondary))) goto L_1d8;
  return a.OAIColor.InteractiveLabelSecondaryDefault;
  return a.OAIColor.InteractiveLabelPrimaryDefault;
}

// fn A  args=1 vars=1 closure=1 cpool=0 bc=356B file=oai_ui/src/components/Button
// args: e
// closure: a
function {
  if (!((e === a.OAIControlSize.Sm))) goto L_8f;
  return a.OAISpacing.OneAndHalf;
  if (!((e === a.OAIControlSize.Lg))) goto L_11e;
  return a.OAISpacing.Three;
  return a.OAISpacing.Two;
}

// fn f  args=1 vars=1 closure=0 cpool=0 bc=80B file=oai_ui/src/components/Button
// args: e
function {
  if (!((true === e.block))) goto L_2d;
  return "100%";
  return e.width;
}

// fn <atom:0>  args=3 vars=34 closure=0 cpool=11 bc=1723B file=oai_ui/src/components/Button
// args: require, module, exports
// locals: e, t, o, i, r, n, s, l, d, a, c, y, v, p, u, w, h, M, g, P, Button, <class_fields_init>, Button#1, b, S, I, C, m, A, f, O
function {
  b = function b;
  S = function S;
  I = function I;
  C = function C;
  m = function m;
  A = function A;
  f = function f;
  let O;
  let Button#1;
  let g;
  let M;
  let h;
  let w;
  let u;
  let p;
  let v;
  let y;
  let c;
  let a;
  let d;
  let l;
  let s;
  let n;
  let r;
  let i;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ButtonVariant = undefined;
  exports.Button = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "EVMFCzE5gw3gJaVG");
  o = e.makeNodePrototype("view", undefined, "gqcB6lTxC6PIbU9y");
  i = e.makeNodePrototype("view", undefined, "ue_KBjtTPBCUeKLs");
  r = e.makeNodePrototype("view", undefined, "5Q79IEDxSWCRB4bz");
  n = e.makeComponentPrototype(undefined, "UafPFMPXUJWh4F6P");
  s = e.makeComponentPrototype(undefined, "Hfk8tytgrWlfg6Nj");
  l = e.makeComponentPrototype(undefined, "wdmXgVxETawryxVM");
  d = require("oai_core/src/OAIAttributes");
  a = require("oai_core/src/OAITokens");
  c = require("valdi_core/src/Component");
  y = require("valdi_core/src/Device");
  v = require("valdi_core/src/Style");
  p = require("valdi_ui/src/ControlMaterial");
  u = require("valdi_ui/src/components/Button");
  w = require("valdi_ui/src/components/Pressable");
  h = require("./ActivityIndicator");
  M = require("./Pressable");
  g = require("./Text");
  if ((P)) goto L_2a0;
  P = {};
  exports.ButtonVariant = {};
  !function <atom:0>({});
  let Button;
  let <class_fields_init>;
  class Button extends c.Component { ... }
  <proto:Button>.onRender = function <atom:0>;
  <proto:Button>.renderContent = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Button>;
  Button = function <atom:0>;
  // close_loc <class_fields_init>
  Button#1 = function <atom:0>;
  exports.Button = Button#1;
  O = {ghostPressed: new v.Style({backgroundColor: a.OAIColor.BgSecondary}), hiddenLoadingContent: new v.Style({accessibilityNavigation: "ignored", flexShrink: 1, minWidth: 0, opacity: 0, touchEnabled: false}), loadingContent: new v.Style({alignItems: "center", flexShrink: 1, justifyContent: "center", minWidth: 0}), loadingIndicator: new v.Style({accessibilityNavigation: "ignored", alignItems: "center", bottom: a.OAISpacing.None, justifyContent: "center", left: a.OAISpacing.None, position: "absolute", right: a.OAISpacing.None, top: a.OAISpacing.None, touchEnabled: false}), primaryPressed: new v.Style({backgroundColor: a.OAIColor.InteractiveBgPrimaryPress}), secondaryPressed: new v.Style({backgroundColor: a.OAIColor.InteractiveBgTertiaryPress}), unchanged: new v.Style({})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/Button
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
