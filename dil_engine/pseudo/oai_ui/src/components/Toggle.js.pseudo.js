// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=77B file=oai_ui/src/components/Toggle
// closure: this
function {
  this.handleChange(!this.checked);
  return;
}

// fn <atom:0>  args=1 vars=1 closure=1 cpool=0 bc=248B file=oai_ui/src/components/Toggle
// args: e
// closure: this
function {
  if ((this.disabled)) goto L_f7;
  if (!((undefined === this.viewModel.checked))) goto L_a4;
  this.setState({checked: e});
  if (!((this.viewModel.onChange == null))) goto L_f3;
  this.viewModel.onChange;
  this.viewModel;
  goto L_f7;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=2 bc=164B file=oai_ui/src/components/Toggle
// locals: this, this.active_func, new.target, arguments
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
  this.state = {checked: this.viewModel.defaultChecked};
  this.handlePress = function <atom:0>;
  this.handleChange = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=76B file=oai_ui/src/components/Toggle
// closure: this
function {
  this.renderLabel();
  this.renderDescription();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=6 cpool=4 bc=1421B file=oai_ui/src/components/Toggle
// locals: this
// closure: e, t, C, w, i, a
function {
  this = this;
  if (!(this.hasLabel)) goto L_565;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", C.labeledRow);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  if (!((this.viewModel.accessibilityLabel == null))) goto L_1ca;
  this.viewModel.accessibilityLabel;
  e.setAttributeString("accessibilityLabel", this.viewModel.label);
  e.setAttributeString("accessibilityHint", this.viewModel.description);
  e.setAttribute("accessibilityStateDisabled", this.disabled);
  e.setAttribute("accessibilityStateSelected", this.checked);
  if (!(this.checked)) goto L_32d;
  goto L_32f;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityValue", "0");
  if (!(this.disabled)) goto L_383;
  goto L_3a5;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onTap", this.handlePress);
  e.beginComponent(w.Column, i, undefined, undefined);
  e.setViewModelProperty("gap", a.OAISpacing.Half);
  if (!(this.disabled)) goto L_4bd;
  goto L_4be;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("opacity", undefined);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  this.renderControl(false);
  e.endRender();
  return;
  this.renderControl(true);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=646B file=oai_ui/src/components/Toggle
// locals: this
// closure: e, y, o, a
function {
  this = this;
  if (!((undefined !== this.viewModel.label))) goto L_285;
  e.beginComponent(y.Text, o, undefined, undefined);
  e.setViewModelProperty("value", this.viewModel.label);
  if (!(this.disabled)) goto L_1a3;
  goto L_1e8;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("tone", y.TextTone.Primary);
  e.setViewModelProperty("size", a.OAITextSize.LabelLarge);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=646B file=oai_ui/src/components/Toggle
// locals: this
// closure: e, y, r, a
function {
  this = this;
  if (!((undefined !== this.viewModel.description))) goto L_285;
  e.beginComponent(y.Text, r, undefined, undefined);
  e.setViewModelProperty("value", this.viewModel.description);
  if (!(this.disabled)) goto L_1a3;
  goto L_1e8;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("tone", y.TextTone.Secondary);
  e.setViewModelProperty("size", a.OAITextSize.BodySmall);
  e.endComponent();
  return;
}

// fn <atom:0>  args=1 vars=3 closure=6 cpool=0 bc=1400B file=oai_ui/src/components/Toggle
// args: t
// locals: i, this
// closure: u, e, m, s, CustomToggle, d
function {
  this = this;
  let i;
  if (((undefined === this.viewModel.checked))) goto L_93;
  if (!((undefined !== this.viewModel.onChange))) goto L_b9;
  goto L_ba;
  // [栈深重同步 1 -> 0]
  i = undefined;
  if (!(u.isNativeIOS())) goto L_38b;
  e.beginComponent(m.NativeSwitch, s, undefined, undefined);
  e.setViewModelProperty("accessibilityId", this.viewModel.accessibilityId);
  e.setViewModelProperty("accessibilityLabel", this.viewModel.accessibilityLabel);
  e.setViewModelProperty("checked", this.checked);
  e.setViewModelProperty("disabled", this.disabled);
  e.setViewModelProperty("interactive", t);
  e.setViewModelProperty("onChange", i);
  e.setViewModelProperty("onTintColor", this.checkedTrackColor);
  goto L_577;
  // [栈深重同步 1 -> 0]
  e.beginComponent(CustomToggle, d, undefined, undefined);
  e.setViewModelProperties(this.viewModel);
  e.setViewModelProperty("checked", this.checked);
  e.setViewModelProperty("checkedTrackColor", this.checkedTrackColor);
  e.setViewModelProperty("disabled", this.disabled);
  e.setViewModelProperty("interactive", t);
  e.setViewModelProperty("onChange", i);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=145B file=oai_ui/src/components/Toggle
// locals: this
function {
  this = this;
  if (((undefined !== this.viewModel.label))) goto L_90;
  return (undefined !== this.viewModel.description);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=149B file=oai_ui/src/components/Toggle
// locals: this
function {
  this = this;
  if (!((this.viewModel.checked == null))) goto L_94;
  this.viewModel.checked;
  if (!((this.state.checked == null))) goto L_94;
  this.state.checked;
  return false;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=144B file=oai_ui/src/components/Toggle
// locals: this
// closure: a
function {
  this = this;
  if (!((this.viewModel.checkedTrackColor == null))) goto L_8f;
  this.viewModel.checkedTrackColor;
  return a.OAIColor.InteractiveBgPrimaryDefault;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=73B file=oai_ui/src/components/Toggle
// locals: this
function {
  this = this;
  return (true === this.viewModel.disabled);
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=152B file=oai_ui/src/components/Toggle
// closure: this
function {
  if (!((this.viewModel.onChange == null))) goto L_4e;
  this.viewModel.onChange;
  this.viewModel;
  goto L_97;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=167B file=oai_ui/src/components/Toggle
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, h
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
  this.thumbRef = new h.ElementRef();
  this.trackRef = new h.ElementRef();
  this.handlePress = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=105B file=oai_ui/src/components/Toggle
// closure: this
function {
  this.applyControlState(this.viewModel.checked);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=1 cpool=1 bc=195B file=oai_ui/src/components/Toggle
// args: e
// locals: this
// closure: v
function {
  this = this;
  if (!((undefined !== e))) goto L_c2;
  if (!((e.checked !== this.viewModel.checked))) goto L_c2;
  this.animate(v.resolveOAIControlStateAnimation(), function <atom:0>);
  return;
}

// fn <atom:0>  args=0 vars=8 closure=6 cpool=1 bc=2552B file=oai_ui/src/components/Toggle
// locals: t, i, o, r, s, d, c, this
// closure: p, e, l, C, a, n
function {
  this = this;
  let c;
  let d;
  let s;
  let r;
  let o;
  let i;
  let t;
  if (((undefined === undefined))) goto L_b0;
  t = <to_object>(undefined).checked;
  i = <to_object>(undefined).disabled;
  o = <to_object>(undefined).interactive;
  r = <to_object>(undefined).onChange;
  <to_object>(undefined);
  goto L_d7;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_20;
  // [栈深重同步 1 -> 0]
  if (!(o)) goto L_eb;
  if (!(!i)) goto L_eb;
  s = (undefined !== r);
  d = this.metrics;
  c = p(t, d);
  e.beginRender(l, undefined);
  e.setAttributeRef(this.trackRef);
  e.setAttributeStyle("style", C.track);
  if (!(o)) goto L_258;
  goto L_259;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityId", undefined);
  if (!(o)) goto L_28e;
  goto L_293;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityNavigation", "ignored");
  if (!((this.viewModel.accessibilityLabel == null))) goto L_34d;
  this.viewModel.accessibilityLabel;
  e.setAttributeString("accessibilityLabel", this.viewModel.label);
  e.setAttribute("accessibilityStateDisabled", i);
  e.setAttribute("accessibilityStateSelected", t);
  if (!(t)) goto L_425;
  goto L_46a;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", a.OAIColor.InteractiveBgControlDefault);
  e.setAttributeNumber("borderRadius", a.OAIRadius.Pill);
  e.setAttributeNumber("height", d.height);
  if (!(s)) goto L_584;
  goto L_585;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onTap", undefined);
  if (!(i)) goto L_5bb;
  goto L_5bc;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", undefined);
  e.setAttribute("touchEnabled", s);
  e.setAttributeNumber("width", d.width);
  e.beginRender(n, undefined);
  e.setAttributeRef(this.thumbRef);
  e.setAttributeStyle("style", C.thumb);
  if (!((this.viewModel.thumbColor == null))) goto L_80f;
  this.viewModel.thumbColor;
  if (!(t)) goto L_7ca;
  goto L_80f;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("backgroundColor", a.OAIColor.BgPrimary);
  e.setAttributeNumber("borderRadius", a.OAIRadius.Pill);
  e.setAttributeNumber("height", d.thumbSize);
  e.setAttributeNumber("left", c);
  e.setAttributeNumber("top", d.thumbInset);
  e.setAttributeNumber("width", d.thumbSize);
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=140B file=oai_ui/src/components/Toggle
// locals: this
// closure: g
function {
  this = this;
  return g(this.viewModel.size, this.viewModel.dimensions);   // tail call
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=707B file=oai_ui/src/components/Toggle
// args: e
// locals: t, i, this
// closure: a, p
function {
  this = this;
  let i;
  let t;
  t = this.metrics;
  i = this.thumbRef.single();
  if (!((this.trackRef.single() == null))) goto L_c1;
  this.trackRef.single();
  goto L_177;
  if (!(e)) goto L_12f;
  goto L_174;
  // [栈深重同步 4 -> 3]
  undefined.setAttribute("backgroundColor", a.OAIColor.InteractiveBgControlDefault);
  if (!((i == null))) goto L_184;
  i;
  goto L_287;
  if (!((this.viewModel.thumbColor == null))) goto L_284;
  this.viewModel.thumbColor;
  if (!(e)) goto L_23f;
  goto L_284;
  // [栈深重同步 4 -> 3]
  undefined.setAttribute("backgroundColor", a.OAIColor.BgPrimary);
  if (!((i == null))) goto L_293;
  i;
  goto L_2c2;
  undefined.setAttribute("left", p(e, t));
  return;
}

// fn g  args=2 vars=2 closure=1 cpool=0 bc=240B file=oai_ui/src/components/Toggle
// args: e, t
// closure: a
function {
  if (!((undefined !== t))) goto L_7;
  return t;
  if (!((e === a.OAIControlSize.Sm))) goto L_6d;
  return {width: 34, height: 20, thumbSize: 16, thumbInset: 2};
  if (!((e === a.OAIControlSize.Lg))) goto L_d3;
  return {width: 50, height: 30, thumbSize: 26, thumbInset: 2};
  return {width: 42, height: 24, thumbSize: 20, thumbInset: 2};
}

// fn p  args=2 vars=2 closure=0 cpool=0 bc=143B file=oai_ui/src/components/Toggle
// args: e, t
function {
  if (!(e)) goto L_6c;
  return ((t.width - t.thumbInset) - t.thumbSize);
  return t.thumbInset;
}

// fn <atom:0>  args=3 vars=30 closure=0 cpool=16 bc=1219B file=oai_ui/src/components/Toggle
// args: require, module, exports
// locals: e, t, i, o, r, s, d, l, n, a, c, h, b, u, v, m, w, y, Toggle, <class_fields_init>, Toggle#1, CustomToggle, <class_fields_init>#1, CustomToggle#1, g, p, C
function {
  g = function g;
  p = function p;
  let C;
  let CustomToggle#1;
  let Toggle#1;
  let y;
  let w;
  let m;
  let v;
  let u;
  let b;
  let h;
  let c;
  let a;
  let n;
  let l;
  let d;
  let s;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Toggle = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "bn2UE0qxXIV9292R");
  i = e.makeComponentPrototype(["flex", 1], "lc88r7oQfGWfL_8r");
  o = e.makeComponentPrototype(undefined, "uNQat6bWc5XMVGcg");
  r = e.makeComponentPrototype(["lines", 2], "6QnNeVTqnaNlbcJZ");
  s = e.makeComponentPrototype(undefined, "UA9K1rEMAkFlGd0D");
  d = e.makeComponentPrototype(undefined, "JySJh6vm4C3gN_0a");
  l = e.makeNodePrototype("view", ["accessibilityCategory", "checkbox"], "zR_V8HvfygdxDNvq");
  n = e.makeNodePrototype("view", undefined, "v1ZuzazRgUHna8ZE");
  a = require("oai_core/src/OAITokens");
  c = require("valdi_core/src/Component");
  h = require("valdi_core/src/ElementRef");
  b = require("valdi_core/src/Style");
  u = require("valdi_ui/src/Platform");
  v = require("../animation/OAIControlAnimations");
  m = require("../internal/NativeSwitch");
  w = require("./Column");
  y = require("./Text");
  let Toggle;
  let <class_fields_init>;
  class Toggle extends c.StatefulComponent { ... }
  <proto:Toggle>.onRender = function <atom:0>;
  <proto:Toggle>.renderLabel = function <atom:0>;
  <proto:Toggle>.renderDescription = function <atom:0>;
  <proto:Toggle>.renderControl = function <atom:0>;
  <proto:Toggle>.hasLabel = function <atom:0>;
  <proto:Toggle>.checked = function <atom:0>;
  <proto:Toggle>.checkedTrackColor = function <atom:0>;
  <proto:Toggle>.disabled = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Toggle>;
  Toggle = function <atom:0>;
  // close_loc <class_fields_init>
  Toggle#1 = function <atom:0>;
  exports.Toggle = Toggle#1;
  let CustomToggle;
  let <class_fields_init>#1;
  class CustomToggle extends c.Component { ... }
  <proto:CustomToggle>.onViewModelUpdate = function <atom:0>;
  <proto:CustomToggle>.onRender = function <atom:0>;
  <proto:CustomToggle>.metrics = function <atom:0>;
  <proto:CustomToggle>.applyControlState = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:CustomToggle>;
  CustomToggle = function <atom:0>;
  // close_loc <class_fields_init>#1
  CustomToggle#1 = function <atom:0>;
  C = {labeledRow: new b.Style({accessibilityCategory: "checkbox", accessibilityNavigation: "leaf", alignItems: "center", flexDirection: "row", justifyContent: "space-between", gap: a.OAISpacing.Two, width: "100%"}), track: new b.Style({flexShrink: 0, position: "relative"}), thumb: new b.Style({boxShadow: "0 1 3 rgba(0, 0, 0, 0.2)", position: "absolute"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/Toggle
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
