// fn l  args=1 vars=1 closure=0 cpool=0 bc=24B file=dil_widgets/src/widgets/Pressable
// args: e
function {
  if ((("link" === e))) goto L_12;
  if (!(("button" === e))) goto L_16;
  return e;
  return undefined;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=39B file=dil_widgets/src/widgets/Pressable
// closure: this
function {
  return this.getContentElement();   // tail call
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=37B file=dil_widgets/src/widgets/Pressable
// closure: this
function {
  return this.context;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=222B file=dil_widgets/src/widgets/Pressable
// closure: this
function {
  if (!((true !== this.viewModel.disabled))) goto L_dd;
  if (!((this.viewModel.tooltip == null))) goto L_dc;
  this.viewModel.tooltip;
  return this.viewModel.inheritedTooltip;
  return;
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=241B file=dil_widgets/src/widgets/Pressable
// args: e
// closure: this, s
function {
  if (!((this.tooltipPresentation.onHover == null))) goto L_4e;
  this.tooltipPresentation.onHover;
  this.tooltipPresentation;
  goto L_52;
  // [栈深重同步 1 -> 2]
  <?>.call(undefined, e);
  if (!((e !== this.state.hovered))) goto L_f0;
  this.setStateAnimated({hovered: e}, s.DIL_CONTROL_STATE_ANIMATION);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=84B file=dil_widgets/src/widgets/Pressable
// closure: this, s
function {
  this.setStateAnimated({pressed: true}, s.DIL_CONTROL_STATE_ANIMATION);
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=40B file=dil_widgets/src/widgets/Pressable
// closure: this
function {
  this.releasePressFeedback();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=4 cpool=6 bc=270B file=dil_widgets/src/widgets/Pressable
// locals: this, this.active_func, new.target, arguments
// closure: s, <class_fields_init>, i, a
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
  this.pressFeedback = new i.DILPressFeedback(this, function <atom:0>);
  this.tooltipPresentation = new a.DILTooltipPresentation(this.getContentRef(), function <atom:0>, function <atom:0>);
  this.state = {pressed: false, hovered: false};
  this.handleHover = function <atom:0>;
  this.handleTouchStart = function <atom:0>;
  this.handleTouchEnd = function <atom:0>;
  return this;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=21B file=dil_widgets/src/widgets/Pressable
// args: e
function {
  if (!(("row" === e))) goto L_f;
  return "row";
  return "column";
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=dil_widgets/src/widgets/Pressable
// locals: this
function {
  this = this;
  this.tooltipPresentation.onCreate();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=dil_widgets/src/widgets/Pressable
// locals: this
function {
  this = this;
  this.tooltipPresentation.onViewModelUpdate();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=dil_widgets/src/widgets/Pressable
// locals: this
function {
  this = this;
  this.tooltipPresentation.onDestroy();
  return;
}

// fn <atom:0>  args=0 vars=2 closure=0 cpool=0 bc=86B file=dil_widgets/src/widgets/Pressable
// locals: this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!(this.viewModel.disabled)) goto L_4c;
  return undefined;
  return get_super_value(this, super, "onTap");
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=107B file=dil_widgets/src/widgets/Pressable
// closure: this
function {
  return this.dispatchVisibleAction((false !== this.viewModel.onVisibleWhen));   // tail call
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=1 bc=286B file=dil_widgets/src/widgets/Pressable
// locals: this, <home_object>
// closure: r
function {
  <home_object> = <special_object 4>;
  this = this;
  if ((this.isDestroyed())) goto L_11d;
  if ((this.viewModel.disabled)) goto L_11d;
  if ((this.viewModel.interactionCaptured)) goto L_11d;
  if ((!this.isTappable)) goto L_11d;
  r.runWithoutDILUserInteraction(function <atom:0>);
  super["handleTap"].call(this);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=35B file=dil_widgets/src/widgets/Pressable
// args: r
// locals: i
// closure: e
function {
  let i;
  i = e(r);
  if (!((undefined === i))) goto L_12;
  return undefined;
  null;
  i;
  return {openURLInBrowser: true};
}

// fn <atom:0>  args=0 vars=3 closure=0 cpool=1 bc=109B file=dil_widgets/src/widgets/Pressable
// locals: e, this, <home_object>
function {
  <home_object> = <special_object 4>;
  this = this;
  let e;
  e = get_super_value(this, super, "clickAction");
  if (((undefined === e))) goto L_64;
  if (!(("link" !== this.viewModel.role))) goto L_6a;
  return e;
  return function <atom:0>;
}

// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=89B file=dil_widgets/src/widgets/Pressable
// locals: this, <home_object>
// closure: l
function {
  <home_object> = <special_object 4>;
  this = this;
  if (!((l(this.viewModel.role) == null))) goto L_58;
  l(this.viewModel.role);
  return get_super_value(this, super, "accessibilityCategory");
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=108B file=dil_widgets/src/widgets/Pressable
// locals: this
// closure: Pressable
function {
  this = this;
  return Pressable.resolveFlexDirection(this.viewModel.direction);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=78B file=dil_widgets/src/widgets/Pressable
// locals: this
function {
  this = this;
  if (((true === this.viewModel.disabled))) goto L_4d;
  return undefined;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=82B file=dil_widgets/src/widgets/Pressable
// locals: this
function {
  this = this;
  if (!((true === this.viewModel.inline))) goto L_50;
  return "flex-start";
  return undefined;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=150B file=dil_widgets/src/widgets/Pressable
// locals: this
function {
  this = this;
  if (((true !== this.viewModel.disabled))) goto L_8f;
  if (!(this.viewModel.feedbackDisabled)) goto L_93;
  return undefined;
  return 0.5;
}

// fn <atom:0>  args=1 vars=3 closure=4 cpool=0 bc=1932B file=dil_widgets/src/widgets/Pressable
// args: e
// locals: r, this
// closure: v, g, n, o
function {
  this = this;
  let r;
  if (!(this.viewModel.exposeAccessibleContent)) goto L_5d;
  e.accessibilityNavigation = "cover";
  goto L_fc;
  // [栈深重同步 1 -> 0]
  if (!(this.viewModel.capture)) goto L_fc;
  if (!(!this.viewModel.interactionCaptured)) goto L_fc;
  e.accessibilityNavigation = "leaf";
  "leaf";
  e.ref = this.getContentRef();
  if ((this.viewModel.feedbackDisabled)) goto L_209;
  if ((("ghost" !== this.viewModel.variant))) goto L_209;
  if (!((undefined === this.viewModel.hoverBackground))) goto L_250;
  goto L_272;
  // [栈深重同步 2 -> 1]
  e.onHover = this.handleHover;
  if (!((undefined !== this.onTap))) goto L_376;
  if (!(!this.viewModel.scrollable)) goto L_376;
  this.pressFeedback.applyAttributes(e, !this.viewModel.feedbackDisabled);
  if (!((undefined !== this.viewModel.ariaPressed))) goto L_411;
  e.accessibilityStateSelected = this.viewModel.ariaPressed;
  this.viewModel.ariaPressed;
  if (!(this.state.hovered)) goto L_503;
  r = v(this.viewModel, this.state.pressed, !this.viewModel.feedbackDisabled);
  if (!((undefined !== r))) goto L_78b;
  if (!(!this.viewModel.feedbackDisabled)) goto L_5ea;
  if (!(g(this.viewModel))) goto L_5ea;
  e.onTouchStart = this.handleTouchStart;
  e.onTouchEnd = this.handleTouchEnd;
  e.onTouchDelayDuration = n;
  n;
  if (!((undefined === this.viewModel.background))) goto L_6b5;
  if (!((undefined !== r.background))) goto L_6b5;
  e.backgroundColor = o.resolveDILBackgroundColor(r.background);
  o.resolveDILBackgroundColor(r.background);
  if (!((undefined === this.viewModel.border))) goto L_78b;
  if (!((undefined !== r.border))) goto L_78b;
  e.borderColor = o.resolveDILBorderColor(r.border);
  e.borderWidth = 1;
  1;
  return;
}

// fn <atom:0>  args=0 vars=0 closure=0 cpool=0 bc=1B file=dil_widgets/src/widgets/Pressable
function {
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=39B file=dil_widgets/src/widgets/Pressable
// locals: this
function {
  this = this;
  return this.shouldUseIntrinsicFullWidthFlexibleContent();   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=124B file=dil_widgets/src/widgets/Pressable
// args: e
// locals: this
function {
  this = this;
  if (!(this.shouldUseIntrinsicFullWidthFlexibleContent())) goto L_7b;
  if (!(("100%" === e.width))) goto L_7b;
  return (undefined === e.height);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=225B file=dil_widgets/src/widgets/Pressable
// locals: this
function {
  this = this;
  if (!((undefined !== this.viewModel.flex))) goto L_e0;
  if (!(("100%" === this.viewModel.width))) goto L_e0;
  return (0 === this.viewModel.minWidth);
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=155B file=dil_widgets/src/widgets/Pressable
// locals: this
// closure: s
function {
  this = this;
  if (!(this.state.pressed)) goto L_9a;
  this.setStateAnimated({pressed: false}, s.DIL_CONTROL_STATE_ANIMATION);
  return;
}

// fn v  args=3 vars=7 closure=4 cpool=0 bc=670B file=dil_widgets/src/widgets/Pressable
// args: e, r, i
// locals: t, o, s, e#1
// closure: k, u, p, b
function {
  let s;
  let o;
  let t;
  t = k(e.variant);
  if (!((undefined === t))) goto L_36;
  return;
  if (!((true === e.disabled))) goto L_61;
  return u;
  o = p(e.color);
  if (!((undefined === o))) goto L_8e;
  return;
  s = (true === e.selected);
  if (!(("surface" === t))) goto L_144;
  let e#1;
  e#1 = b[o];
  if (!(r)) goto L_f5;
  return e#1.active;
  if (!(s)) goto L_11f;
  return e#1.hover;
  return e#1.base;
  if (!(r)) goto L_19a;
  if (!(("soft" === t))) goto L_18b;
  goto L_18c;
  // [栈深重同步 7 -> 6]
  return {background: "color-background-".concat(o, "-", t, "", "-active")};
  if (!(i)) goto L_1f7;
  if (!(("ghost" === t))) goto L_1f7;
  if (!((undefined !== e.hoverBackground))) goto L_1f7;
  return {background: e.hoverBackground};
  if (!(s)) goto L_24f;
  if (!(("soft" === t))) goto L_240;
  goto L_241;
  // [栈深重同步 7 -> 6]
  return {background: "color-background-".concat(o, "-", t, "", "-hover")};
  if (!(("soft" === t))) goto L_292;
  return {background: "color-background-".concat(o, "-soft-alpha")};
  return {background: "alpha-0"};
}

// fn g  args=1 vars=1 closure=2 cpool=0 bc=122B file=dil_widgets/src/widgets/Pressable
// args: e
// closure: k, p
function {
  if (!((true !== e.disabled))) goto L_79;
  if (!((undefined !== k(e.variant)))) goto L_79;
  return (undefined !== p(e.color));
}

// fn p  args=1 vars=1 closure=1 cpool=0 bc=19B file=dil_widgets/src/widgets/Pressable
// args: e
// closure: c
function {
  if (!((undefined !== e))) goto L_11;
  if (!((true === c[e]))) goto L_11;
  return e;
  return undefined;
}

// fn k  args=1 vars=1 closure=1 cpool=0 bc=19B file=dil_widgets/src/widgets/Pressable
// args: e
// closure: h
function {
  if (!((undefined !== e))) goto L_11;
  if (!((true === h[e]))) goto L_11;
  return e;
  return undefined;
}

// fn <atom:0>  args=3 vars=24 closure=0 cpool=25 bc=1293B file=dil_widgets/src/widgets/Pressable
// args: require, module, exports
// locals: e, r, i, t, o, s, a, d, n, l, Pressable, <class_fields_init>, Pressable#1, c, h, u, b, v, g, p, k
function {
  l = function l;
  v = function v;
  g = function g;
  p = function p;
  k = function k;
  let b;
  let u;
  let h;
  let c;
  let Pressable#1;
  let n;
  let d;
  let a;
  let s;
  let o;
  let t;
  let i;
  let r;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.resolvePressableAccessibilityRole = undefined;
  exports.Pressable = undefined;
  e = require("valdi_core/src/JSX").jsx;
  r = require("dil_renderer/src/DILUserInteraction");
  i = require("dil_core/src/DILPressFeedback");
  t = require("dil_core/src/DILComponent");
  o = require("dil_core/src/colors/DILColor");
  s = require("../animation/DILControlAnimations");
  a = require("../tooltip/DILTooltipPresentation");
  d = require("./DILFlexContainer");
  n = 0.05;
  exports.resolvePressableAccessibilityRole = l;
  let Pressable;
  let <class_fields_init>;
  class Pressable extends d.DILFlexContainer { ... }
  function <atom:0>.resolveFlexDirection = function <atom:0>;
  <proto:Pressable>.onCreate = function <atom:0>;
  <proto:Pressable>.onViewModelUpdate = function <atom:0>;
  <proto:Pressable>.onDestroy = function <atom:0>;
  <proto:Pressable>.onTap = function <atom:0>;
  <proto:Pressable>.handleTap = function <atom:0>;
  <proto:Pressable>.clickAction = function <atom:0>;
  <proto:Pressable>.accessibilityCategory = function <atom:0>;
  <proto:Pressable>.getFlexDirection = function <atom:0>;
  <proto:Pressable>.getAccessibilityStateDisabled = function <atom:0>;
  <proto:Pressable>.getAlignSelf = function <atom:0>;
  <proto:Pressable>.getOpacity = function <atom:0>;
  <proto:Pressable>.applyAdditionalContainerAttributes = function <atom:0>;
  <proto:Pressable>.getDefaultWidth = function <atom:0>;
  <proto:Pressable>.shouldUseIntrinsicFlexBasisForFlexibleContent = function <atom:0>;
  <proto:Pressable>.shouldAvoidFlexGrowForIntrinsicFlexibleContent = function <atom:0>;
  <proto:Pressable>.shouldUseIntrinsicFullWidthFlexibleContent = function <atom:0>;
  <proto:Pressable>.releasePressFeedback = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Pressable>;
  Pressable = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc Pressable
  Pressable#1 = function <atom:0>;
  exports.Pressable = Pressable#1;
  // append([], 0, t.DIL_COMPONENT_PROPERTIES)
  // append([], t.DIL_COMPONENT_PROPERTIES, d.DIL_FLEX_CONTAINER_PROPERTIES)
  [][d.DIL_FLEX_CONTAINER_PROPERTIES] = "ariaPressed";
  [][("ariaPressed" ++)] = "color";
  [][("color" ++)] = "disabled";
  [][("disabled" ++)] = "direction";
  [][("direction" ++)] = "inline";
  [][("inline" ++)] = "role";
  [][("role" ++)] = "selectable";
  [][("selectable" ++)] = "selected";
  [][("selected" ++)] = "variant";
  ("variant" ++);
  Pressable#1.properties = [];
  // append([], 0, d.DIL_V2_STACK_PROPERTIES)
  [][d.DIL_V2_STACK_PROPERTIES] = "capture";
  [][("capture" ++)] = "ariaPressed";
  [][("ariaPressed" ++)] = "disabled";
  [][("disabled" ++)] = "inline";
  [][("inline" ++)] = "onClick";
  [][("onClick" ++)] = "selectable";
  [][("selectable" ++)] = "tooltip";
  [][("tooltip" ++)] = "variant";
  [][("variant" ++)] = "hoverBackground";
  [][("hoverBackground" ++)] = "variantFeedback";
  ("variantFeedback" ++);
  Pressable#1.dilV2Properties = [];
  c = {danger: true, primary: true, success: true};
  h = {ghost: true, soft: true, surface: true};
  u = {background: "color-background-disabled", border: "color-border-disabled"};
  b = {primary: {base: {background: "alpha-0", border: {light: "alpha-06", dark: "alpha-08"}}, hover: {background: {light: "alpha-04", dark: "alpha-06"}, border: {light: "alpha-08", dark: "alpha-12"}}, active: {background: {light: "alpha-06", dark: "alpha-10"}, border: {light: "alpha-08", dark: "alpha-12"}}}, danger: {base: {background: "color-background-danger-surface", border: "color-border-danger-surface"}, hover: {background: {light: "red-a50", dark: "red-a75"}, border: {light: "red-a50", dark: "red-a75"}}, active: {background: {light: "red-a50", dark: "red-a75"}, border: {light: "red-a50", dark: "red-a75"}}}, success: {base: {background: "color-background-success-surface", border: "color-border-success-surface"}, hover: {background: {light: "green-50", dark: "green-a75"}, border: {light: "green-a50", dark: "green-a75"}}, active: {background: {light: "green-a50", dark: "green-a75"}, border: {light: "green-a50", dark: "green-a75"}}}};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=dil_widgets/src/widgets/Pressable
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
