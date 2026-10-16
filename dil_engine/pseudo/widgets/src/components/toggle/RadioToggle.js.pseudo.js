// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=69B file=widgets/src/components/toggle/RadioToggle
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
  this.state = {on: false};
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=89B file=widgets/src/components/toggle/RadioToggle
// closure: this, t, u
function {
  this.setStateAnimated({on: t.on}, {duration: u});
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=1 bc=205B file=widgets/src/components/toggle/RadioToggle
// args: e
// locals: t, this
// closure: u, r
function {
  this = this;
  let t;
  t = this.viewModel;
  if (!(e)) goto L_7d;
  if (!((false !== t.animationsEnabled))) goto L_7d;
  goto L_cc;
  // [栈深重同步 1 -> 0]
  this.setState({on: t.on});
  return;
}

// fn <atom:0>  args=0 vars=4 closure=6 cpool=0 bc=901B file=widgets/src/components/toggle/RadioToggle
// locals: o, r, s, this
// closure: a, d, e, t, b, i
function {
  this = this;
  let s;
  let r;
  let o;
  o = this.state.on;
  if (!(o)) goto L_58;
  goto L_5a;
  // [栈深重同步 1 -> 0]
  r = 22;
  if (!(o)) goto L_65;
  goto L_68;
  // [栈深重同步 1 -> 0]
  s = d;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", b.outer);
  e.setAttributeString("backgroundColor", s);
  e.setAttributeFunction("onTap", this.viewModel.onTap);
  e.setAttributeString("accessibilityId", this.viewModel.accessibilityId);
  e.setAttribute("accessibilityStateSelected", o);
  e.beginRender(i, undefined);
  e.setAttributeStyle("style", b.inner);
  e.setAttributeNumber("width", r);
  e.setAttributeNumber("height", r);
  e.setAttributeNumber("borderRadius", (r / 2));
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=19 closure=0 cpool=4 bc=854B file=widgets/src/components/toggle/RadioToggle
// args: require, module, exports
// locals: e, t, i, o, r, s, n, d, a, l, c, u, RadioToggle, <class_fields_init>, RadioToggle#1, b
function {
  let b;
  let RadioToggle#1;
  let u;
  let c;
  let l;
  let a;
  let d;
  let n;
  let s;
  let r;
  let o;
  let i;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.RadioToggle = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "3OE_a-IbzRYDH4H_");
  i = e.makeNodePrototype("view", undefined, "hIv9vs3lY1O0Wk2n");
  o = require("valdi_core/src/Component");
  r = require("valdi_core/src/SetTimeout");
  s = require("valdi_core/src/Style");
  n = require("widgets/src/styles/semanticColors");
  d = n.SemanticColor.Icon.SECONDARY;
  a = n.SemanticColor.Brand.SECONDARY;
  l = n.SemanticColor.Background.SURFACE;
  c = 24;
  u = 0.2;
  let RadioToggle;
  let <class_fields_init>;
  class RadioToggle extends o.StatefulComponent { ... }
  <proto:RadioToggle>.onViewModelUpdate = function <atom:0>;
  <proto:RadioToggle>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:RadioToggle>;
  RadioToggle = function <atom:0>;
  // close_loc <class_fields_init>
  RadioToggle#1 = function <atom:0>;
  exports.RadioToggle = RadioToggle#1;
  b = {outer: new s.Style({width: c, height: c, borderRadius: 12, alignItems: "center", justifyContent: "center", accessibilityCategory: "radio"}), inner: new s.Style({backgroundColor: l})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/toggle/RadioToggle
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
