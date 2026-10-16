// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=69B file=widgets/src/components/toggle/SelectorToggle
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

// fn <atom:0>  args=0 vars=0 closure=3 cpool=0 bc=89B file=widgets/src/components/toggle/SelectorToggle
// closure: this, t, S
function {
  this.setStateAnimated({on: t.on}, {duration: S});
  return;
}

// fn <atom:0>  args=1 vars=3 closure=2 cpool=1 bc=205B file=widgets/src/components/toggle/SelectorToggle
// args: e
// locals: t, this
// closure: S, i
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

// fn <atom:0>  args=0 vars=11 closure=9 cpool=0 bc=1299B file=widgets/src/components/toggle/SelectorToggle
// locals: r, i, s, n, b, S, m, C, v, A, this
// closure: d, u, l, a, c, e, t, g, o
function {
  this = this;
  let A;
  let v;
  let C;
  let m;
  let S;
  let b;
  let n;
  let s;
  let i;
  let r;
  r = this.viewModel;
  i = this.state.on;
  if (!(i)) goto L_d6;
  goto L_d7;
  // [栈深重同步 1 -> 0]
  s = undefined;
  if (!((r.iconColor == null))) goto L_104;
  r.iconColor;
  n = u;
  if (!((r.onBackgroundColor == null))) goto L_131;
  r.onBackgroundColor;
  b = l;
  if (!((r.offBackgroundColor == null))) goto L_15f;
  r.offBackgroundColor;
  S = a;
  if (!((r.borderColor == null))) goto L_18d;
  r.borderColor;
  m = c;
  if (!(i)) goto L_199;
  goto L_19a;
  // [栈深重同步 1 -> 0]
  C = undefined;
  if (!(i)) goto L_1a5;
  goto L_1a7;
  // [栈深重同步 1 -> 0]
  v = 22;
  if (!(i)) goto L_1b3;
  goto L_1b6;
  // [栈深重同步 1 -> 0]
  A = S;
  e.beginRender(t, undefined);
  e.setAttributeStyle("style", g.outer);
  e.setAttributeString("backgroundColor", A);
  e.setAttributeFunction("onTap", r.onTap);
  e.setAttributeString("accessibilityId", r.accessibilityId);
  if (!(i)) goto L_338;
  goto L_33b;
  // [栈深重同步 4 -> 3]
  e.setAttributeString("borderColor", m);
  if (!(i)) goto L_370;
  goto L_371;
  // [栈深重同步 4 -> 3]
  e.setAttributeNumber("borderWidth", 1);
  e.setAttribute("accessibilityStateSelected", i);
  e.beginRender(o, undefined);
  e.setAttribute("src", s);
  e.setAttributeString("tint", C);
  e.setAttributeNumber("width", v);
  e.setAttributeNumber("height", v);
  e.setAttributeNumber("borderRadius", (v / 2));
  e.endRender();
  e.endRender();
  return;
}

// fn <atom:0>  args=3 vars=21 closure=0 cpool=4 bc=919B file=widgets/src/components/toggle/SelectorToggle
// args: require, module, exports
// locals: e, t, o, r, i, s, n, d, c, a, l, u, b, S, SelectorToggle, <class_fields_init>, SelectorToggle#1, g
function {
  let g;
  let SelectorToggle#1;
  let S;
  let b;
  let u;
  let l;
  let a;
  let c;
  let d;
  let n;
  let s;
  let i;
  let r;
  let o;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SelectorToggle = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", undefined, "i_o52zgGduFG1OFz");
  o = e.makeNodePrototype("image", undefined, "zMXyhS8UBSQcfKWB");
  r = require("valdi_core/src/Component");
  i = require("valdi_core/src/SetTimeout");
  s = require("valdi_core/src/Style");
  n = require("widgets/src/styles/semanticColors");
  d = require("../../../res");
  c = n.SemanticColor.Icon.SECONDARY;
  a = n.SemanticColor.Background.SURFACE;
  l = n.SemanticColor.Brand.SECONDARY;
  u = n.SemanticColor.Background.SURFACE;
  b = 24;
  S = 0.2;
  let SelectorToggle;
  let <class_fields_init>;
  class SelectorToggle extends r.StatefulComponent { ... }
  <proto:SelectorToggle>.onViewModelUpdate = function <atom:0>;
  <proto:SelectorToggle>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SelectorToggle>;
  SelectorToggle = function <atom:0>;
  // close_loc <class_fields_init>
  SelectorToggle#1 = function <atom:0>;
  exports.SelectorToggle = SelectorToggle#1;
  g = {outer: new s.Style({width: b, height: b, borderRadius: 12, alignItems: "center", justifyContent: "center", accessibilityCategory: "checkbox"})};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/toggle/SelectorToggle
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
