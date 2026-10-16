// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=446B file=valdi_ui/src/components/DatePicker
// args: e
// locals: t
// closure: this
function {
  let t;
  t = this.nativePicker.single();
  if (!((t == null))) goto L_57;
  t;
  goto L_a2;
  undefined.setAttribute("dateSeconds", e.dateSeconds);
  if (!((t == null))) goto L_af;
  t;
  goto L_145;
  undefined.setAttribute("dateSeconds", (this.viewModel.value.getTime() / 1000));
  this.viewModel.onChange(new Date((1000 * e.dateSeconds)));
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=115B file=valdi_ui/src/components/DatePicker
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
  this.nativePicker = new o.ElementRef();
  this.handleChange = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=2 closure=9 cpool=2 bc=2573B file=valdi_ui/src/components/DatePicker
// locals: r, this
// closure: n, d, e, t, c, b, a, i, s
function {
  this = this;
  let r;
  if ((n.isNativeIOS())) goto L_c7;
  if (!(d.Device.isAndroid())) goto L_616;
  if (!(!d.Device.isWeb())) goto L_616;
  e.beginRender(t, undefined);
  e.setAttributeRef(this.nativePicker);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  e.setAttribute("accessibilityStateDisabled", (true === this.viewModel.disabled));
  e.setAttributeNumber("dateSeconds", (this.viewModel.value.getTime() / 1000));
  e.setAttributeNumber("maximumDateSeconds", c(this.viewModel.maximumDate));
  e.setAttributeNumber("minimumDateSeconds", c(this.viewModel.minimumDate));
  if (!((true === this.viewModel.disabled))) goto L_489;
  goto L_4ab;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onChange", this.handleChange);
  if (!((true === this.viewModel.disabled))) goto L_524;
  goto L_525;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", undefined);
  e.setAttributeStyle("style", b.control);
  e.setAttribute("touchEnabled", (true !== this.viewModel.disabled));
  e.endRender();
  return;
  r = a.resolveValdiUITheme().colors.text;
  e.beginRender(i, undefined);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  if (!((true === this.viewModel.disabled))) goto L_7ff;
  goto L_800;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", undefined);
  e.setAttributeStyle("style", b.fallback);
  e.beginRender(s, undefined);
  e.setAttributeString("color", r);
  e.setAttributeStyle("style", b.label);
  e.setAttributeString("value", this.viewModel.value.toISOString().slice(0, 10));
  e.endRender();
  e.endRender();
  return;
}

// fn c  args=1 vars=1 closure=0 cpool=0 bc=49B file=valdi_ui/src/components/DatePicker
// args: e
function {
  if (!((undefined === e))) goto L_7;
  return undefined;
  return (e.getTime() / 1000);
}

// fn <atom:0>  args=3 vars=18 closure=0 cpool=3 bc=658B file=valdi_ui/src/components/DatePicker
// args: require, module, exports
// locals: e, t, i, s, r, d, o, l, a, n, DatePicker, <class_fields_init>, DatePicker#1, c, b
function {
  c = function c;
  let b;
  let DatePicker#1;
  let n;
  let a;
  let l;
  let o;
  let d;
  let r;
  let s;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DatePicker = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("custom-view", ["iosClass", "SCValdiDatePicker", "androidClass", "com.snap.valdi.views.ValdiDatePicker", "preferredStyle", 2], "fB5NWBEy1bdz2koa");
  i = e.makeNodePrototype("view", undefined, "AlEV5_0JOR-IPx52");
  s = e.makeNodePrototype("label", undefined, "FN5XHvEo_CmBFJmO");
  r = require("valdi_core/src/Component");
  d = require("valdi_core/src/Device");
  o = require("valdi_core/src/ElementRef");
  l = require("valdi_core/src/Style");
  a = require("valdi_ui_theme/src/ValdiUITheme");
  n = require("../Platform");
  let DatePicker;
  let <class_fields_init>;
  class DatePicker extends r.Component { ... }
  <proto:DatePicker>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:DatePicker>;
  DatePicker = function <atom:0>;
  // close_loc <class_fields_init>
  DatePicker#1 = function <atom:0>;
  exports.DatePicker = DatePicker#1;
  b = {control: new l.Style({minHeight: 44, minWidth: 120}), fallback: new l.Style({alignItems: "center", justifyContent: "center", minHeight: 44}), label: new l.Style({font: "system 15"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/DatePicker
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
