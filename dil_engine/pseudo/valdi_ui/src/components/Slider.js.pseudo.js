// fn <atom:0>  args=1 vars=5 closure=1 cpool=0 bc=712B file=valdi_ui/src/components/Slider
// args: e
// locals: t, i, r, s
// closure: this
function {
  let s;
  let r;
  let i;
  let t;
  t = this.viewModel.step;
  if (!((this.viewModel.minimumValue == null))) goto L_9d;
  this.viewModel.minimumValue;
  i = 0;
  if (!((this.viewModel.maximumValue == null))) goto L_112;
  this.viewModel.maximumValue;
  r = Math.max(i, 1);
  if (((undefined === t))) goto L_124;
  if (!((t <= 0))) goto L_12a;
  goto L_1bc;
  // [栈深重同步 1 -> 0]
  s = Math.max(i, Math.min((i + (Math.round(((e - i) / t)) * t)), r));
  this.viewModel.onChange(s);
  if (!((this.nativeSlider.single() == null))) goto L_259;
  this.nativeSlider.single();
  goto L_2c7;
  undefined.setAttribute("sliderValue", this.viewModel.value);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=115B file=valdi_ui/src/components/Slider
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, o
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
  this.nativeSlider = new o.ElementRef();
  this.handleChange = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=8 closure=9 cpool=0 bc=2834B file=valdi_ui/src/components/Slider
// locals: l, o, n, b, i, r, v, this
// closure: a, u, d, e, t, c, i, r, s
function {
  this = this;
  let v;
  let b;
  let n;
  let o;
  let l;
  if (!((this.viewModel.minimumValue == null))) goto L_5c;
  this.viewModel.minimumValue;
  l = 0;
  if (!((this.viewModel.maximumValue == null))) goto L_d0;
  this.viewModel.maximumValue;
  o = Math.max(l, 1);
  n = Math.max(l, Math.min(this.viewModel.value, o));
  b = a.resolveValdiUITheme();
  if (!(u.supportsNativeIOSSliders())) goto L_754;
  let r;
  let i;
  i = this.viewModel.step;
  if (!((true === this.viewModel.stepped))) goto L_2c3;
  if (!(d.isVersionAtLeast(57))) goto L_2c3;
  if (!((undefined !== i))) goto L_2c0;
  if (!(Number.isFinite(i))) goto L_2c0;
  if (!((i > 0))) goto L_2c0;
  goto L_2c4;
  // [栈深重同步 1 -> 0]
  goto L_2c4;
  // [栈深重同步 1 -> 0]
  r = undefined;
  e.beginRender(t, undefined);
  e.setAttributeRef(this.nativeSlider);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  if (((true !== this.viewModel.disabled))) goto L_494;
  e.setAttribute("canAlwaysScrollHorizontal", undefined);
  if (!((true === this.viewModel.disabled))) goto L_50d;
  goto L_530;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onSliderChange", this.handleChange);
  e.setAttribute("sliderEnabled", (true !== this.viewModel.disabled));
  e.setAttributeNumber("sliderMaximum", o);
  e.setAttributeNumber("sliderMinimum", l);
  e.setAttributeNumber("sliderStep", r);
  e.setAttributeString("sliderTint", b.colors.accent);
  e.setAttributeNumber("sliderValue", n);
  e.setAttributeStyle("style", c.control);
  e.endRender();
  return;
  if (!((o === l))) goto L_760;
  goto L_772;
  // [栈深重同步 1 -> 0]
  v = (((n - l) / (o - l)) * 100);
  e.beginRender(i, undefined);
  e.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  e.setAttributeStyle("style", c.fallback);
  e.beginRender(r, undefined);
  e.setAttributeString("backgroundColor", b.colors.border);
  e.setAttributeStyle("style", c.track);
  e.beginRender(s, undefined);
  e.setAttributeString("backgroundColor", b.colors.accent);
  e.setAttributeStyle("style", c.fill);
  e.setAttributeString("width", "".concat(v, "%"));
  e.endRender();
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=18 closure=0 cpool=2 bc=766B file=valdi_ui/src/components/Slider
// args: require, module, exports
// locals: e, t, i, r, s, l, d, o, n, a, u, Slider, <class_fields_init>, Slider#1, c
function {
  let c;
  let Slider#1;
  let u;
  let a;
  let n;
  let o;
  let d;
  let l;
  let s;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Slider = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("custom-view", ["iosClass", "ValdiNativeSlider"], "_osZGjVO0SUwMGyv");
  i = e.makeNodePrototype("view", undefined, "H7MLJNJYUSvs6Bo4");
  r = e.makeNodePrototype("view", undefined, "HHy4rChLRp_qrb3Y");
  s = e.makeNodePrototype("view", undefined, "mm3_mfYLnrd14dtc");
  l = require("valdi_core/src/Component");
  d = require("valdi_core/src/CompilerIntrinsics");
  o = require("valdi_core/src/ElementRef");
  n = require("valdi_core/src/Style");
  a = require("valdi_ui_theme/src/ValdiUITheme");
  u = require("../Platform");
  let Slider;
  let <class_fields_init>;
  class Slider extends l.Component { ... }
  <proto:Slider>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Slider>;
  Slider = function <atom:0>;
  // close_loc <class_fields_init>
  Slider#1 = function <atom:0>;
  exports.Slider = Slider#1;
  c = {control: new n.Style({minHeight: 44, width: "100%"}), fallback: new n.Style({justifyContent: "center", minHeight: 44, width: "100%"}), fill: new n.Style({borderRadius: 2, height: 4}), track: new n.Style({borderRadius: 2, height: 4, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/Slider
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
