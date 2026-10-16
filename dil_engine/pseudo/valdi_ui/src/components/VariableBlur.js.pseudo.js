// fn <atom:0>  args=0 vars=5 closure=5 cpool=0 bc=651B file=valdi_ui/src/components/VariableBlur
// locals: r, o, a, u, this
// closure: s, e, t, l, i
function {
  this = this;
  let u;
  let a;
  let o;
  let r;
  if (!(!s.supportsNativeVariableBlur())) goto L_38;
  return;
  if (((undefined === undefined))) goto L_cc;
  r = <to_object>(undefined).radius;
  o = <to_object>(undefined).stops;
  a = <to_object>(undefined).style;
  u = {};
  <to_object>(undefined);
  {radius: null, stops: null, style: null};
  goto L_f3;
  // [栈深重同步 0 -> 1]
  <?>;
  goto L_40;
  // [栈深重同步 1 -> 0]
  e.beginRender(t, undefined);
  e.setAttributes(u);
  e.setAttribute("iosClass", "ValdiVariableBlurView");
  if (!((undefined === a))) goto L_1b1;
  goto L_1ff;
  // [栈深重同步 4 -> 3]
  e.setAttributeStyle("style", i.Style.cachingMerge(a, l));
  e.setAttributeNumber("blurRadius", r);
  e.setAttribute("blurStops", o);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=valdi_ui/src/components/VariableBlur
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

// fn <atom:0>  args=3 vars=12 closure=0 cpool=2 bc=348B file=valdi_ui/src/components/VariableBlur
// args: require, module, exports
// locals: e, t, r, i, s, VariableBlur, <class_fields_init>, VariableBlur#1, l
function {
  let l;
  let VariableBlur#1;
  let s;
  let i;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.VariableBlur = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("custom-view", undefined, "G7c_7Ol8IxSehmO-");
  r = require("valdi_core/src/Component");
  i = require("valdi_core/src/Style");
  s = require("../Platform");
  let VariableBlur;
  let <class_fields_init>;
  class VariableBlur extends r.Component { ... }
  <proto:VariableBlur>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:VariableBlur>;
  VariableBlur = function <atom:0>;
  // close_loc <class_fields_init>
  VariableBlur#1 = function <atom:0>;
  exports.VariableBlur = VariableBlur#1;
  l = new i.Style({touchEnabled: false, accessibilityNavigation: "ignored"});
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=valdi_ui/src/components/VariableBlur
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
