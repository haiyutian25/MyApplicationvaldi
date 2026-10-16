// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=690B file=valdi_ui/src/components/OptionPicker
// args: e
// locals: t
// closure: this
function {
  let t;
  if (((true === this.viewModel.disabled))) goto L_d0;
  if ((!Number.isInteger(e))) goto L_d0;
  if (((e < 0))) goto L_d0;
  if (!((e >= this.viewModel.options.length))) goto L_d3;
  return;
  t = this.nativePicker.single();
  if (!((t == null))) goto L_127;
  t;
  goto L_151;
  undefined.setAttribute("index", e);
  if (!((t == null))) goto L_15e;
  t;
  goto L_267;
  undefined.setAttribute("index", Math.max(0, Math.min(this.viewModel.selectedIndex, (this.viewModel.options.length - 1))));
  this.viewModel.onChange(e);
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=115B file=valdi_ui/src/components/OptionPicker
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

// fn <atom:0>  args=0 vars=3 closure=7 cpool=2 bc=2615B file=valdi_ui/src/components/OptionPicker
// locals: l, o, this
// closure: n, e, t, a, d, i, s
function {
  this = this;
  let o;
  let l;
  l = Math.max(0, Math.min(this.viewModel.selectedIndex, (this.viewModel.options.length - 1)));
  if (!(n.isNativeIOS())) goto L_5c4;
  if (!((this.viewModel.options.length > 0))) goto L_5c4;
  e.beginRender(t, undefined);
  e.setAttributeRef(this.nativePicker);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  e.setAttribute("accessibilityStateDisabled", (true === this.viewModel.disabled));
  e.setAttributeNumber("index", l);
  e.setAttribute("labels", this.viewModel.options);
  if (!((true === this.viewModel.disabled))) goto L_437;
  goto L_459;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onChange", this.handleChange);
  if (!((true === this.viewModel.disabled))) goto L_4d2;
  goto L_4d3;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", undefined);
  e.setAttributeStyle("style", a.picker);
  e.setAttribute("touchEnabled", (true !== this.viewModel.disabled));
  e.endRender();
  return;
  o = d.resolveValdiUITheme().colors.text;
  e.beginRender(i, undefined);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttributeString("accessibilityLabel", this.viewModel.accessibilityLabel);
  if (((true === this.viewModel.disabled))) goto L_7f1;
  e.setAttribute("accessibilityStateDisabled", (0 === this.viewModel.options.length));
  if (!((true === this.viewModel.disabled))) goto L_86a;
  goto L_86b;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("opacity", undefined);
  e.setAttributeStyle("style", a.fallback);
  e.beginRender(s, undefined);
  e.setAttributeString("color", o);
  e.setAttributeStyle("style", a.label);
  if (!((this.viewModel.options[l] == null))) goto L_9e3;
  this.viewModel.options[l];
  e.setAttributeString("value", "");
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=16 closure=0 cpool=2 bc=630B file=valdi_ui/src/components/OptionPicker
// args: require, module, exports
// locals: e, t, i, s, l, o, r, d, n, OptionPicker, <class_fields_init>, OptionPicker#1, a
function {
  let a;
  let OptionPicker#1;
  let n;
  let d;
  let r;
  let o;
  let l;
  let s;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.OptionPicker = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("custom-view", ["iosClass", "SCValdiIndexPicker"], "Ww3WQvCMQbuYLaJD");
  i = e.makeNodePrototype("view", undefined, "6tlOxFmjCxlhFBSU");
  s = e.makeNodePrototype("label", undefined, "VRqaYmwz9oRqVUAL");
  l = require("valdi_core/src/Component");
  o = require("valdi_core/src/ElementRef");
  r = require("valdi_core/src/Style");
  d = require("valdi_ui_theme/src/ValdiUITheme");
  n = require("../Platform");
  let OptionPicker;
  let <class_fields_init>;
  class OptionPicker extends l.Component { ... }
  <proto:OptionPicker>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:OptionPicker>;
  OptionPicker = function <atom:0>;
  // close_loc <class_fields_init>
  OptionPicker#1 = function <atom:0>;
  exports.OptionPicker = OptionPicker#1;
  a = {fallback: new r.Style({alignItems: "center", justifyContent: "center", minHeight: 44}), label: new r.Style({font: "system 15"}), picker: new r.Style({height: 160, width: "100%"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/OptionPicker
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
