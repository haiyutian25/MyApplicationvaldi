// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=714B file=valdi_ui/src/components/TimePicker
// args: e
// locals: t
// closure: this
function {
  let t;
  t = this.nativePicker.single();
  if (!((t == null))) goto L_57;
  t;
  goto L_a2;
  undefined.setAttribute("hourOfDay", e.hourOfDay);
  if (!((t == null))) goto L_ae;
  t;
  goto L_f9;
  undefined.setAttribute("minuteOfHour", e.minuteOfHour);
  if (!((t == null))) goto L_106;
  t;
  goto L_195;
  undefined.setAttribute("hourOfDay", this.viewModel.value.hour);
  if (!((t == null))) goto L_1a2;
  t;
  goto L_231;
  undefined.setAttribute("minuteOfHour", this.viewModel.value.minute);
  this.viewModel.onChange({hour: e.hourOfDay, minute: e.minuteOfHour});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=115B file=valdi_ui/src/components/TimePicker
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

// fn <atom:0>  args=0 vars=2 closure=9 cpool=2 bc=2320B file=valdi_ui/src/components/TimePicker
// locals: s, this
// closure: u, e, t, d, c, l, i, r, a
function {
  this = this;
  let s;
  if (!(u.isNativeIOS())) goto L_58d;
  e.beginRender(t, undefined);
  e.setAttributeRef(this.nativePicker);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  e.setAttribute("accessibilityStateDisabled", (true === this.viewModel.disabled));
  e.setAttributeNumber("hourOfDay", this.viewModel.value.hour);
  e.setAttributeNumber("intervalMinutes", d(this.viewModel.minuteInterval));
  e.setAttributeNumber("minuteOfHour", this.viewModel.value.minute);
  if (!((true === this.viewModel.disabled))) goto L_400;
  goto L_422;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onChange", this.handleChange);
  if (!((true === this.viewModel.disabled))) goto L_49b;
  goto L_49c;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", undefined);
  e.setAttributeStyle("style", c.control);
  e.setAttribute("touchEnabled", (true !== this.viewModel.disabled));
  e.endRender();
  return;
  s = l.resolveValdiUITheme().colors.text;
  e.beginRender(i, undefined);
  if (!((true === this.viewModel.disabled))) goto L_696;
  goto L_697;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", undefined);
  e.setAttributeStyle("style", c.fallback);
  e.beginRender(r, undefined);
  e.setAttributeString("color", s);
  e.setAttributeStyle("style", c.label);
  e.setAttributeString("value", "".concat(a(this.viewModel.value.hour), ":", a(this.viewModel.value.minute)));
  e.endRender();
  e.endRender();
  return;
}

// fn d  args=1 vars=1 closure=0 cpool=0 bc=93B file=valdi_ui/src/components/TimePicker
// args: e
function {
  if (!((undefined !== e))) goto L_5c;
  if ((!Number.isInteger(e))) goto L_49;
  if (((e < 1))) goto L_49;
  if (((e > 30))) goto L_49;
  if (!(((60 % e) != 0))) goto L_5a;
  throw new RangeError("TimePicker minuteInterval must be an integer from 1 to 30 that evenly divides 60");
  return e;
  return;
}

// fn a  args=1 vars=1 closure=0 cpool=1 bc=85B file=valdi_ui/src/components/TimePicker
// args: e
function {
  if (!((e < 10))) goto L_2e;
  return "0".concat(e);
  return "".concat(e);
}

// fn <atom:0>  args=3 vars=18 closure=0 cpool=4 bc=640B file=valdi_ui/src/components/TimePicker
// args: require, module, exports
// locals: e, t, i, r, s, o, n, l, u, TimePicker, <class_fields_init>, TimePicker#1, d, a, c
function {
  d = function d;
  a = function a;
  let c;
  let TimePicker#1;
  let u;
  let l;
  let n;
  let o;
  let s;
  let r;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.TimePicker = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("custom-view", ["iosClass", "SCValdiTimePicker", "preferredStyle", 2], "Ucx3TDbxCvgtThHu");
  i = e.makeNodePrototype("view", undefined, "5icjHpcqFEu57dOJ");
  r = e.makeNodePrototype("label", undefined, "f7aQU5gZzuD8GeUb");
  s = require("valdi_core/src/Component");
  o = require("valdi_core/src/ElementRef");
  n = require("valdi_core/src/Style");
  l = require("valdi_ui_theme/src/ValdiUITheme");
  u = require("../Platform");
  let TimePicker;
  let <class_fields_init>;
  class TimePicker extends s.Component { ... }
  <proto:TimePicker>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:TimePicker>;
  TimePicker = function <atom:0>;
  // close_loc <class_fields_init>
  TimePicker#1 = function <atom:0>;
  exports.TimePicker = TimePicker#1;
  c = {control: new n.Style({minHeight: 44, minWidth: 100}), fallback: new n.Style({alignItems: "center", justifyContent: "center", minHeight: 44}), label: new n.Style({font: "system 15"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/TimePicker
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
