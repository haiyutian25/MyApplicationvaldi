// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=113B file=valdi_ui/src/components/QuantityStepper
// closure: this
function {
  this.update((this.currentValue - this.step));
  return;
}

// fn <atom:0>  args=0 vars=0 closure=1 cpool=0 bc=113B file=valdi_ui/src/components/QuantityStepper
// closure: this
function {
  this.update((this.currentValue + this.step));
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=2 bc=164B file=valdi_ui/src/components/QuantityStepper
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
  this.state = {value: this.viewModel.defaultValue};
  this.decrement = function <atom:0>;
  this.increment = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=5 closure=11 cpool=0 bc=2917B file=valdi_ui/src/components/QuantityStepper
// locals: s, c, m, y, this
// closure: h, l, u, n, e, t, d, i, a, o, r
function {
  this = this;
  let y;
  let m;
  let c;
  let s;
  if (!((this.viewModel.accessibilityLabel == null))) goto L_5d;
  this.viewModel.accessibilityLabel;
  s = "Quantity";
  c = h(l.resolveValdiUITheme());
  m = u(c.icon, this.viewModel.iconStyle);
  y = n.Style.cachingMerge(m, c.disabledIcon);
  e.beginRender(t, undefined);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttributeString("accessibilityLabel", s);
  e.setAttributeStyle("style", u(c.control, this.viewModel.style));
  e.beginComponent(d.IconButton, i, undefined, undefined);
  e.setViewModelProperty("accessibilityId", this.childId("decrement"));
  e.setViewModelProperty("accessibilityLabel", "Decrease ".concat(s));
  e.setViewModelProperty("disabled", !this.canDecrement);
  e.setViewModelProperty("disabledStyle", this.viewModel.disabledButtonStyle);
  if (!(this.canDecrement)) goto L_4dc;
  goto L_4df;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("iconStyle", y);
  e.setViewModelProperty("nativeAndroid", true);
  e.setViewModelProperty("onPress", this.decrement);
  e.setViewModelProperty("pressedOpacity", a);
  e.setViewModelProperty("style", u(c.button, this.viewModel.buttonStyle));
  e.endComponent();
  e.beginRender(o, undefined);
  e.setAttributeStyle("style", u(c.value, this.viewModel.valueStyle));
  e.setAttributeString("value", "".concat(this.currentValue));
  e.endRender();
  e.beginComponent(d.IconButton, r, undefined, undefined);
  e.setViewModelProperty("accessibilityId", this.childId("increment"));
  e.setViewModelProperty("accessibilityLabel", "Increase ".concat(s));
  e.setViewModelProperty("disabled", !this.canIncrement);
  e.setViewModelProperty("disabledStyle", this.viewModel.disabledButtonStyle);
  if (!(this.canIncrement)) goto L_9c8;
  goto L_9cb;
  // [栈深重同步 4 -> 3]
  e.setViewModelProperty("iconStyle", y);
  e.setViewModelProperty("nativeAndroid", true);
  e.setViewModelProperty("onPress", this.increment);
  e.setViewModelProperty("pressedOpacity", a);
  e.setViewModelProperty("style", u(c.button, this.viewModel.buttonStyle));
  e.endComponent();
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=252B file=valdi_ui/src/components/QuantityStepper
// locals: this
// closure: c
function {
  this = this;
  if (!((this.viewModel.value == null))) goto L_b5;
  this.viewModel.value;
  if (!((this.state.value == null))) goto L_b5;
  this.state.value;
  return c(this.minimum, this.minimum, this.maximum);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=76B file=valdi_ui/src/components/QuantityStepper
// locals: this
function {
  this = this;
  if (!((this.viewModel.minimum == null))) goto L_4b;
  this.viewModel.minimum;
  return 0;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=187B file=valdi_ui/src/components/QuantityStepper
// locals: this
function {
  this = this;
  if (!((this.viewModel.maximum == null))) goto L_b8;
  this.viewModel.maximum;
  return Math.max(this.minimum, Number.MAX_SAFE_INTEGER);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=117B file=valdi_ui/src/components/QuantityStepper
// locals: this
function {
  this = this;
  if (!((this.viewModel.step == null))) goto L_72;
  this.viewModel.step;
  return Math.max(1, 1);   // tail call
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=146B file=valdi_ui/src/components/QuantityStepper
// locals: this
function {
  this = this;
  if (!((true !== this.viewModel.disabled))) goto L_91;
  return (this.currentValue > this.minimum);
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=146B file=valdi_ui/src/components/QuantityStepper
// locals: this
function {
  this = this;
  if (!((true !== this.viewModel.disabled))) goto L_91;
  return (this.currentValue < this.maximum);
}

// fn <atom:0>  args=1 vars=3 closure=1 cpool=0 bc=325B file=valdi_ui/src/components/QuantityStepper
// args: e
// locals: t, this
// closure: c
function {
  this = this;
  let t;
  t = c(e, this.minimum, this.maximum);
  if (!((t !== this.currentValue))) goto L_144;
  if (!((undefined === this.viewModel.value))) goto L_f1;
  this.setState({value: t});
  if (!((this.viewModel.onChange == null))) goto L_13e;
  this.viewModel.onChange;
  this.viewModel;
  goto L_144;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=186B file=valdi_ui/src/components/QuantityStepper
// args: e
// locals: this
function {
  this = this;
  if (!((undefined === this.viewModel.accessibilityId))) goto L_4b;
  return undefined;
  return "".concat(this.viewModel.accessibilityId, ".", e);
}

// fn c  args=3 vars=3 closure=0 cpool=0 bc=85B file=valdi_ui/src/components/QuantityStepper
// args: e, t, i
function {
  return Math.min(i, Math.max(t, e));   // tail call
}

// fn u  args=2 vars=2 closure=1 cpool=0 bc=82B file=valdi_ui/src/components/QuantityStepper
// args: e, t
// closure: n
function {
  if (!((undefined === t))) goto L_7;
  return e;
  return n.Style.cachingMerge(e, t);
}

// fn h  args=1 vars=2 closure=2 cpool=0 bc=1277B file=valdi_ui/src/components/QuantityStepper
// args: e
// locals: t
// closure: m, n
function {
  let t;
  t = m.get(e);
  if (((undefined !== t))) goto L_4f8;
  t = {button: new n.Style({alignItems: "center", backgroundColor: e.colors.mutedSurface, borderRadius: e.shape.pillRadius, height: e.metrics.compactControlHeight, justifyContent: "center", width: e.metrics.compactControlHeight}), control: new n.Style({accessibilityNavigation: "group", alignItems: "center", backgroundColor: e.colors.surface, borderColor: e.colors.border, borderRadius: e.shape.pillRadius, borderWidth: 1, flexDirection: "row"}), disabledIcon: new n.Style({color: e.colors.onDisabled}), icon: new n.Style({color: e.colors.text, font: e.typography.heading}), value: new n.Style({color: e.colors.text, font: e.typography.label, textAlign: "center", width: 32})};
  {button: new n.Style({alignItems: "center", backgroundColor: e.colors.mutedSurface, borderRadius: e.shape.pillRadius, height: e.metrics.compactControlHeight, justifyContent: "center", width: e.metrics.compactControlHeight}), control: new n.Style({accessibilityNavigation: "group", alignItems: "center", backgroundColor: e.colors.surface, borderColor: e.colors.border, borderRadius: e.shape.pillRadius, borderWidth: 1, flexDirection: "row"}), disabledIcon: new n.Style({color: e.colors.onDisabled}), icon: new n.Style({color: e.colors.text, font: e.typography.heading}), value: new n.Style({color: e.colors.text, font: e.typography.label, textAlign: "center", width: 32})};
  m.set(e, t);
  return t;
}

// fn <atom:0>  args=3 vars=20 closure=0 cpool=14 bc=573B file=valdi_ui/src/components/QuantityStepper
// args: require, module, exports
// locals: e, t, i, o, r, s, n, l, d, a, QuantityStepper, <class_fields_init>, QuantityStepper#1, c, u, m, h
function {
  c = function c;
  u = function u;
  h = function h;
  let m;
  let QuantityStepper#1;
  let a;
  let d;
  let l;
  let n;
  let s;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.QuantityStepper = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "hDM1QUSmwqq0csI2");
  i = e.makeComponentPrototype(["symbol", "−"], "st4XQINZKKJT6oQf");
  o = e.makeNodePrototype("label", undefined, "0XVDL0xoSNvfYPvt");
  r = e.makeComponentPrototype(["symbol", "+"], "RDXWDDgdqfHdpMAX");
  s = require("valdi_core/src/Component");
  n = require("valdi_core/src/Style");
  l = require("valdi_ui_theme/src/ValdiUITheme");
  d = require("./IconButton");
  a = 0.7;
  let QuantityStepper;
  let <class_fields_init>;
  class QuantityStepper extends s.StatefulComponent { ... }
  <proto:QuantityStepper>.onRender = function <atom:0>;
  <proto:QuantityStepper>.currentValue = function <atom:0>;
  <proto:QuantityStepper>.minimum = function <atom:0>;
  <proto:QuantityStepper>.maximum = function <atom:0>;
  <proto:QuantityStepper>.step = function <atom:0>;
  <proto:QuantityStepper>.canDecrement = function <atom:0>;
  <proto:QuantityStepper>.canIncrement = function <atom:0>;
  <proto:QuantityStepper>.update = function <atom:0>;
  <proto:QuantityStepper>.childId = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:QuantityStepper>;
  QuantityStepper = function <atom:0>;
  // close_loc <class_fields_init>
  QuantityStepper#1 = function <atom:0>;
  exports.QuantityStepper = QuantityStepper#1;
  m = new WeakMap();
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/QuantityStepper
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
