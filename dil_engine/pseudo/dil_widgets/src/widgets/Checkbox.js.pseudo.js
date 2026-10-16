// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=170B file=dil_widgets/src/widgets/Checkbox
// locals: e
// closure: this
function {
  let e;
  if (!((this.context == null))) goto L_2f;
  this.context;
  goto L_50;
  e = undefined.runWithUserInteraction;
  if (!((undefined === e))) goto L_81;
  goto L_a9;
  // [栈深重同步 1 -> 0]
  e(this.applyChange);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=43B file=dil_widgets/src/widgets/Checkbox
// closure: this, e
function {
  this.applyBoxState(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=1 bc=78B file=dil_widgets/src/widgets/Checkbox
// closure: this, e, v
function {
  this.animate(v.DIL_CONTROL_STATE_ANIMATION, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=2 closure=5 cpool=1 bc=1030B file=dil_widgets/src/widgets/Checkbox
// locals: e, t
// closure: this, v, d, y, C
function {
  let t;
  let e;
  e = !this.checked;
  d.observeDILControlInteraction(this.context, this.viewModel, {target: "checkbox", affordance: d.DILInteractionAffordance.Option, value: String(e)});
  if (!(e)) goto L_1c9;
  if (!((true === this.viewModel.lineThrough))) goto L_1c9;
  if (!(!this.disabled)) goto L_1c9;
  y.Device.performHapticFeedback("selection");
  if ((this.isControlled)) goto L_2d3;
  if (!(e)) goto L_266;
  this.setState({checkmarkLongArmScale: 0, checkmarkRootOpacity: 0, checkmarkShortArmScale: 0, localChecked: e});
  goto L_2a8;
  // [栈深重同步 1 -> 0]
  this.setState({checkmarkLongArmScale: 0, checkmarkRootOpacity: 0, checkmarkShortArmScale: 0, localChecked: e});
  this.setTimeoutDisposable(function <atom:0>, 0);
  t = this.viewModel.onChange;
  if (!((undefined === t))) goto L_3fe;
  goto L_405;
  // [栈深重同步 1 -> 0]
  t(e);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=83B file=dil_widgets/src/widgets/Checkbox
// closure: this, v
function {
  this.setStateAnimated({checkmarkShortArmScale: 1}, v.DIL_CONTROL_CHECKMARK_ARM_ANIMATION);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=83B file=dil_widgets/src/widgets/Checkbox
// closure: this, v
function {
  this.setStateAnimated({checkmarkLongArmScale: 1}, v.DIL_CONTROL_CHECKMARK_ARM_ANIMATION);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=2 bc=239B file=dil_widgets/src/widgets/Checkbox
// closure: this, v
function {
  this.setStateAnimated({checkmarkRootOpacity: 1}, v.DIL_CONTROL_CHECKMARK_OPACITY_ANIMATION);
  this.setTimeoutDisposable(function <atom:0>, v.DIL_CONTROL_CHECKMARK_SHORT_ARM_DELAY_MS);
  this.setTimeoutDisposable(function <atom:0>, v.DIL_CONTROL_CHECKMARK_LONG_ARM_DELAY_MS);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=7 cpool=3 bc=309B file=dil_widgets/src/widgets/Checkbox
// locals: this, this.active_func, new.target, arguments
// closure: v, d, y, C, <class_fields_init>, O, A
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
  if (!(O(this.viewModel))) goto L_5e;
  goto L_5f;
  // [栈深重同步 3 -> 2]
  if (!(O(this.viewModel))) goto L_91;
  goto L_92;
  // [栈深重同步 3 -> 2]
  if (!(O(this.viewModel))) goto L_c4;
  goto L_c5;
  // [栈深重同步 3 -> 2]
  this.state = {checkmarkLongArmScale: 0, checkmarkRootOpacity: 0, checkmarkShortArmScale: 0};
  this.boxRef = new A.ElementRef();
  this.handleChange = function <atom:0>;
  this.applyChange = function <atom:0>;
  this.runCheckmarkEnterAnimation = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=dil_widgets/src/widgets/Checkbox
// closure: this, i
function {
  this.applyBoxState(i);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=1 bc=476B file=dil_widgets/src/widgets/Checkbox
// args: e
// locals: t, i, this
// closure: P, v
function {
  this = this;
  let i;
  let t;
  if (!((undefined === e))) goto L_e;
  return;
  t = P(e.checked, e.defaultChecked, this.state.localChecked);
  i = this.checked;
  if (!(!t)) goto L_ed;
  if (!(i)) goto L_ed;
  goto L_11a;
  // [栈深重同步 1 -> 0]
  if ((i)) goto L_11a;
  this.setCheckmarkProgress(0);
  if (!((t === i))) goto L_18c;
  if (((e.disabled === this.viewModel.disabled))) goto L_1db;
  this.animate(v.DIL_CONTROL_STATE_ANIMATION, function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=12 cpool=0 bc=1900B file=dil_widgets/src/widgets/Checkbox
// closure: e, r, this, B, d, s, l, o, c, n, p, a
function {
  e.beginRender(r, undefined);
  e.setAttributeRef(this.boxRef);
  e.setAttributeStyle("style", B.box);
  e.setAttributeNumber("width", d);
  e.setAttributeNumber("height", d);
  e.setAttributeString("backgroundColor", this.boxBackground(s));
  e.setAttributeString("borderColor", this.boxBorder(s));
  if (!(("round" === this.viewModel.shape))) goto L_24c;
  goto L_24d;
  // [栈深重同步 4 -> 3]
  e.setAttribute("borderRadius", 4);
  e.setAttributeString("accessibilityLabel", this.viewModel.label);
  e.setAttribute("accessibilityStateSelected", s);
  e.setAttribute("accessibilityStateDisabled", l);
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", B.checkmarkRoot);
  if (!(c)) goto L_3cf;
  goto L_3d0;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("left", 3);
  if (!(c)) goto L_405;
  goto L_406;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("top", 4);
  if (!(s)) goto L_47d;
  goto L_47e;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", 0);
  e.beginRender(n, undefined);
  e.setAttributeStyle("style", B.checkmarkShortArm);
  e.setAttributeString("backgroundColor", p);
  if (!(s)) goto L_5a2;
  goto L_5a3;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("scaleY", 0);
  e.endRender();
  e.beginRender(a, undefined);
  e.setAttributeStyle("style", B.checkmarkLongArm);
  e.setAttributeString("backgroundColor", p);
  if (!(s)) goto L_6ef;
  goto L_6f0;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("scaleX", 0);
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=12 closure=15 cpool=1 bc=1969B file=dil_widgets/src/widgets/Checkbox
// locals: s, l, c, d, h, k, g, y, A, p, S, this
// closure: e, r, B, o, n, a, w, M, m, b, _, u, t, L, i
function {
  this = this;
  let S;
  let p;
  let A;
  let y;
  let g;
  let k;
  let h;
  let d;
  let c;
  let l;
  let s;
  s = this.checked;
  l = this.disabled;
  c = ("round" === this.viewModel.shape);
  if (!(c)) goto L_c1;
  goto L_c4;
  // [栈深重同步 1 -> 0]
  d = M;
  h = ((w - d) / 2);
  if (!((this.viewModel.labelTypography == null))) goto L_11c;
  this.viewModel.labelTypography;
  goto L_13d;
  if (!((undefined.lineHeight == null))) goto L_14d;
  undefined.lineHeight;
  if (!(c)) goto L_14b;
  goto L_14d;
  // [栈深重同步 1 -> 0]
  k = 20;
  g = this.viewModel.labelTypography;
  if (!((g == null))) goto L_1a0;
  g;
  goto L_1c1;
  if (!((undefined.fontSize == null))) goto L_1d1;
  undefined.fontSize;
  if (!(c)) goto L_1cf;
  goto L_1d1;
  // [栈深重同步 1 -> 0]
  y = 14;
  if (!((undefined === g))) goto L_205;
  goto L_29a;
  // [栈深重同步 1 -> 0]
  A = m.dynamicSystemFontForTextStyle(y, g.dynamicTextStyle, m.DILSystemFontWeight.Normal, false);
  if (!(l)) goto L_2cb;
  goto L_2d0;
  // [栈深重同步 1 -> 0]
  p = "gray-0";
  S = {marginLeft: undefined, marginTop: undefined};
  if (!((undefined !== this.viewModel.autoSpacing))) goto L_397;
  u.applyDILAutoSpacingAttributes(S, this.viewModel.autoSpacing);
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", B.root);
  e.setAttributeNumber("gap", (10 + h));
  e.setAttributeNumber("paddingLeft", (2 + h));
  e.setAttributeNumber("minHeight", k);
  e.setAttributes(S);
  if (!(l)) goto L_506;
  goto L_529;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onTap", this.handleChange);
  e.beginComponent(L.ChoiceControlSlot, i, undefined, undefined);
  e.setViewModelProperty("font", A);
  e.setViewModelProperty("fontSize", y);
  if (((undefined !== this.viewModel.renderChildren))) goto L_6a6;
  if (!((this.viewModel.label == null))) goto L_69d;
  this.viewModel.label;
  goto L_69e;
  if (!((undefined.length == null))) goto L_6a4;
  undefined.length;
  e.setViewModelProperty("hasLabel", (0 > 0));
  e.setViewModelProperty("lineHeight", k);
  e.setViewModelProperty("size", d);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  this.renderLabel(s, A);
  e.endRender();
  return;
}

// fn <atom:0>  args=2 vars=7 closure=7 cpool=0 bc=1521B file=dil_widgets/src/widgets/Checkbox
// args: t, i
// locals: r, o, t#1, o#1, this
// closure: e, s, B, k, T, l, c
function {
  this = this;
  let o;
  let r;
  if (!(t)) goto L_55;
  r = (true === this.viewModel.lineThrough);
  o = this.viewModel.renderChildren;
  if (!((undefined !== o))) goto L_182;
  e.beginRender(s, undefined);
  e.setAttributeStyle("style", B.richLabel);
  if (!(r)) goto L_154;
  goto L_158;
  // [栈深重同步 1 -> 0]
  o();
  e.endRender();
  return;
  if (!((undefined !== this.viewModel.label))) goto L_5f0;
  let o#1;
  let t#1;
  if (!(("round" === this.viewModel.shape))) goto L_270;
  if (!(r)) goto L_24a;
  goto L_2bf;
  // [栈深重同步 1 -> 0]
  goto L_2bf;
  // [栈深重同步 1 -> 0]
  if (!(r)) goto L_29b;
  goto L_2bf;
  // [栈深重同步 1 -> 0]
  t#1 = B.label;
  o#1 = this.viewModel.labelTypography;
  if (!((undefined === o#1))) goto L_406;
  e.beginRender(l, undefined);
  e.setAttributeStyle("style", t#1);
  e.setAttributeString("value", this.viewModel.label);
  goto L_5ef;
  // [栈深重同步 1 -> 0]
  e.beginRender(c, undefined);
  e.setAttributeStyle("style", t#1);
  e.setAttributeString("value", this.viewModel.label);
  e.setAttributeString("font", i);
  e.setAttributeNumber("lineHeightMultiple", (o#1.lineHeight / o#1.fontSize));
  e.setAttributeNumber("minHeight", o#1.lineHeight);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=207B file=dil_widgets/src/widgets/Checkbox
// locals: this
// closure: P
function {
  this = this;
  return P(this.viewModel.checked, this.viewModel.defaultChecked, this.state.localChecked);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=dil_widgets/src/widgets/Checkbox
// locals: this
function {
  this = this;
  return (true === this.viewModel.disabled);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=72B file=dil_widgets/src/widgets/Checkbox
// locals: this
function {
  this = this;
  return (undefined !== this.viewModel.checked);
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=254B file=dil_widgets/src/widgets/Checkbox
// args: e
// locals: t, this
function {
  this = this;
  let t;
  t = this.boxRef.single();
  if (!((undefined !== t))) goto L_fd;
  t.setAttribute("backgroundColor", this.boxBackground(e));
  t.setAttribute("borderColor", this.boxBorder(e));
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=59B file=dil_widgets/src/widgets/Checkbox
// args: e
// locals: this
function {
  this = this;
  this.setState({checkmarkLongArmScale: e, checkmarkRootOpacity: e, checkmarkShortArmScale: e});
  return;
}

// fn <atom:0>  args=1 vars=2 closure=3 cpool=0 bc=102B file=dil_widgets/src/widgets/Checkbox
// args: e
// locals: this
// closure: b, f, x
function {
  this = this;
  if (!(this.disabled)) goto L_57;
  if (!(e)) goto L_52;
  goto L_55;
  // [栈深重同步 2 -> 1]
  return b.resolveDILColor(x);
  if (!(e)) goto L_60;
  return "gray-900";
  return "transparent";
}

// fn <atom:0>  args=1 vars=2 closure=2 cpool=0 bc=127B file=dil_widgets/src/widgets/Checkbox
// args: e
// locals: this
// closure: b, R
function {
  this = this;
  if (!(e)) goto L_2c;
  return this.boxBackground(e);
  if (!(this.disabled)) goto L_79;
  return b.resolveDILColor(R);
  return "color-border-primary-outline";
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=79B file=dil_widgets/src/widgets/Checkbox
// locals: this
function {
  this = this;
  this.setCheckmarkProgress(0);
  this.scheduleCheckmarkEnterAnimation();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=75B file=dil_widgets/src/widgets/Checkbox
// locals: this
function {
  this = this;
  this.setTimeoutDisposable(this.runCheckmarkEnterAnimation, 0);
  return;
}

// fn O  args=1 vars=1 closure=1 cpool=0 bc=73B file=dil_widgets/src/widgets/Checkbox
// args: e
// closure: P
function {
  return P(e.checked, e.defaultChecked, undefined);   // tail call
}

// fn P  args=3 vars=3 closure=2 cpool=0 bc=94B file=dil_widgets/src/widgets/Checkbox
// args: e, t, i
// closure: S, E
function {
  if (!((e instanceof S.DILWidgetBinding))) goto L_4e;
  return e.asBoolean();
  if (!((e == null))) goto L_5d;
  e;
  if (!((i == null))) goto L_5d;
  i;
  return E(t);
}

// fn E  args=1 vars=1 closure=0 cpool=0 bc=20B file=dil_widgets/src/widgets/Checkbox
// args: e
function {
  if (!(("boolean" == typeof e))) goto L_c;
  return e;
  return ("true" === e);
}

// fn <atom:0>  args=3 vars=46 closure=0 cpool=17 bc=2241B file=dil_widgets/src/widgets/Checkbox
// args: require, module, exports
// locals: e, t, i, r, o, n, a, s, l, c, d, h, b, u, k, m, g, y, A, p, S, v, C, L, M, w, R, x, f, _, I, N, D, T, Checkbox, <class_fields_init>, Checkbox#1, O, P, E, q, H, B
function {
  O = function O;
  P = function P;
  E = function E;
  let B;
  let H;
  let q;
  let Checkbox#1;
  let T;
  let D;
  let N;
  let I;
  let _;
  let f;
  let x;
  let R;
  let w;
  let M;
  let L;
  let C;
  let v;
  let S;
  let p;
  let A;
  let y;
  let g;
  let m;
  let k;
  let u;
  let b;
  let h;
  let d;
  let c;
  let l;
  let s;
  let a;
  let n;
  let o;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Checkbox = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "PQvaG2G7ckzk_4EH");
  i = e.makeComponentPrototype(undefined, "8sNnJ7G4pu-kAPTn");
  r = e.makeNodePrototype("view", undefined, "prMQz2_Pglz2L1xp");
  o = e.makeNodePrototype("view", undefined, "9cvJL4UwcKaAj4Tl");
  n = e.makeNodePrototype("view", undefined, "PrCt7TSnI6WlWmMd");
  a = e.makeNodePrototype("view", undefined, "gko-DLnVTzGqvLae");
  s = e.makeNodePrototype("layout", undefined, "o4YUAVadEYeGwlc_");
  l = e.makeNodePrototype("label", undefined, "bVl4paXltRZlBw9R");
  c = e.makeNodePrototype("label", undefined, "sfKbU9d0igNq_zPS");
  d = require("dil_core/src/DILInteraction");
  h = require("dil_core/src/DILComponent");
  b = require("dil_core/src/colors/DILColor");
  u = require("dil_core/src/layout/DILAutoSpacingAttributes");
  k = require("dil_core/src/style/DILInheritedTextStyleRenderState");
  m = require("dil_core/src/typography/DILDynamicFont");
  g = require("valdi_core/src/Component");
  y = require("valdi_core/src/Device");
  A = require("valdi_core/src/ElementRef");
  p = require("valdi_core/src/Style");
  S = require("dil_cel/src/WidgetBinding");
  v = require("../animation/DILControlAnimations");
  C = require("./DILWidgetBindingActions");
  L = require("./ChoiceControlSlot");
  M = 18;
  w = 20;
  R = {light: "gray-150", dark: "gray-300"};
  x = {light: "gray-25", dark: "gray-200"};
  f = {light: "gray-300", dark: "gray-200"};
  _ = {light: "gray-0", dark: "gray-100"};
  I = 2;
  N = 6;
  D = 12;
  T = {color: "secondary", textDecoration: "strikethrough"};
  let Checkbox;
  let <class_fields_init>;
  class Checkbox extends g.StatefulComponent { ... }
  <proto:Checkbox>.onViewModelUpdate = function <atom:0>;
  <proto:Checkbox>.onRender = function <atom:0>;
  <proto:Checkbox>.renderLabel = function <atom:0>;
  <proto:Checkbox>.checked = function <atom:0>;
  <proto:Checkbox>.disabled = function <atom:0>;
  <proto:Checkbox>.isControlled = function <atom:0>;
  <proto:Checkbox>.applyBoxState = function <atom:0>;
  <proto:Checkbox>.setCheckmarkProgress = function <atom:0>;
  <proto:Checkbox>.boxBackground = function <atom:0>;
  <proto:Checkbox>.boxBorder = function <atom:0>;
  <proto:Checkbox>.startCheckmarkEnterAnimation = function <atom:0>;
  <proto:Checkbox>.scheduleCheckmarkEnterAnimation = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Checkbox>;
  Checkbox = function <atom:0>;
  // close_loc <class_fields_init>
  Checkbox#1 = function <atom:0>;
  exports.Checkbox = Checkbox#1;
  Checkbox#1.useRenderChildrenProperty = true;
  Checkbox#1.dilV2Properties = ["checked", "defaultChecked", "disabled", "label", "lineThrough", "name", "onChange", "required", "shape", "value"];
  // append([], 0, h.DIL_COMPONENT_PROPERTIES)
  [][h.DIL_COMPONENT_PROPERTIES] = "checked";
  [][("checked" ++)] = "defaultChecked";
  [][("defaultChecked" ++)] = "disabled";
  [][("disabled" ++)] = "label";
  [][("label" ++)] = "name";
  [][("name" ++)] = "onChangeAction";
  [][("onChangeAction" ++)] = "required";
  ("required" ++);
  Checkbox#1.properties = [];
  q = new p.Style({color: "color-text-prose", font: m.dynamicSystemFontForSize(14), flexShrink: 1, lineHeightMultiple: (20 / 14), numberOfLines: 0});
  H = q.extend({font: m.dynamicSystemFontForSize(16), lineHeightMultiple: 1.625});
  B = {roundLabel: H, checkedRoundLabel: H.extend({color: "color-text-secondary", textDecoration: "strikethrough"}), root: new p.Style({accessibilityNavigation: "control", flexDirection: "row", alignItems: "flex-start"}), box: new p.Style({accessibilityCategory: "checkbox", position: "relative", alignItems: "center", alignSelf: "flex-start", justifyContent: "center", flexShrink: 0, borderWidth: 1}), checkmarkRoot: new p.Style({position: "absolute", width: D, height: 6, rotation: (-Math.PI / 4)}), checkmarkShortArm: new p.Style({position: "absolute", left: 0, top: 0, width: 2, height: 6, backgroundColor: "gray-0", transformOrigin: "top center"}), checkmarkLongArm: new p.Style({position: "absolute", left: 0, bottom: 0, width: D, height: 2, backgroundColor: "gray-0", transformOrigin: "left center"}), label: q, checkedLabel: q.extend({color: "color-text-secondary", textDecoration: "strikethrough"}), richLabel: new p.Style({flexDirection: "row", alignItems: "center", flexShrink: 1})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Checkbox
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
