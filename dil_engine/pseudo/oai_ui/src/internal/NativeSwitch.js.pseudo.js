// fn <atom:0>  args=0 vars=2 closure=1 cpool=0 bc=494B file=oai_ui/src/internal/NativeSwitch
// locals: e, t
// closure: this
function {
  let t;
  let e;
  if ((this.viewModel.disabled)) goto L_95;
  if (!(!this.viewModel.interactive)) goto L_98;
  return;
  e = this.viewModel.checked;
  t = this.nativeSwitch.single();
  if (!((t == null))) goto L_132;
  t;
  goto L_15f;
  undefined.setAttribute("on", !e);
  if (!((t == null))) goto L_16b;
  t;
  goto L_197;
  undefined.setAttribute("on", e);
  if (!((this.viewModel.onChange == null))) goto L_1e6;
  this.viewModel.onChange;
  this.viewModel;
  goto L_1ed;
  // [栈深重同步 1 -> 2]
  return;
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=115B file=oai_ui/src/internal/NativeSwitch
// locals: this, this.active_func, new.target, arguments
// closure: <class_fields_init>, s
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
  this.nativeSwitch = new s.ElementRef();
  this.handleChange = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=6 closure=2 cpool=0 bc=1036B file=oai_ui/src/internal/NativeSwitch
// locals: i, s, n, o, r, this
// closure: e, t
function {
  this = this;
  let r;
  let o;
  let n;
  let s;
  let i;
  if (((undefined === undefined))) goto L_aa;
  i = <to_object>(undefined).checked;
  s = <to_object>(undefined).disabled;
  n = <to_object>(undefined).interactive;
  o = <to_object>(undefined).onChange;
  <to_object>(undefined);
  goto L_d1;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_1a;
  // [栈深重同步 1 -> 0]
  if (!(n)) goto L_e5;
  if (!(!s)) goto L_e5;
  r = (undefined !== o);
  e.beginRender(t, undefined);
  e.setAttributeRef(this.nativeSwitch);
  if (!(n)) goto L_1d2;
  goto L_1d3;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityId", undefined);
  if (!(n)) goto L_24b;
  goto L_24c;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityLabel", undefined);
  if (!(n)) goto L_281;
  goto L_286;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("accessibilityNavigation", "ignored");
  e.setAttribute("enabled", !s);
  e.setAttribute("on", i);
  if (!(r)) goto L_33e;
  goto L_33f;
  // [栈深重同步 4 -> 3]
  e.setAttributeFunction("onChange", undefined);
  e.setAttributeString("onTintColor", this.viewModel.onTintColor);
  e.setAttribute("touchEnabled", r);
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=2 bc=273B file=oai_ui/src/internal/NativeSwitch
// args: require, module, exports
// locals: e, t, i, s, NativeSwitch, <class_fields_init>, NativeSwitch#1
function {
  let NativeSwitch#1;
  let s;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.NativeSwitch = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("switch", undefined, "rWw-AfMxVxANmdsd");
  i = require("valdi_core/src/Component");
  s = require("valdi_core/src/ElementRef");
  let NativeSwitch;
  let <class_fields_init>;
  class NativeSwitch extends i.Component { ... }
  <proto:NativeSwitch>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:NativeSwitch>;
  NativeSwitch = function <atom:0>;
  // close_loc <class_fields_init>
  NativeSwitch#1 = function <atom:0>;
  exports.NativeSwitch = NativeSwitch#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/internal/NativeSwitch
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
