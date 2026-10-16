// fn <atom:0>  args=0 vars=3 closure=3 cpool=0 bc=453B file=widgets/src/components/rules/VerticalRule
// locals: r, i, this
// closure: o, e, t
function {
  this = this;
  let i;
  let r;
  if (!((this.viewModel == null))) goto L_32;
  this.viewModel;
  goto L_53;
  if (!((undefined.color == null))) goto L_be;
  undefined.color;
  r = o.SemanticColor.Layout.DIVIDER;
  if (!((this.viewModel == null))) goto L_e9;
  this.viewModel;
  goto L_10a;
  if (!((undefined.stroke == null))) goto L_110;
  undefined.stroke;
  i = 1;
  e.beginRender(t, undefined);
  e.setAttributeString("backgroundColor", r);
  e.setAttributeNumber("width", i);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/rules/VerticalRule
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

// fn <atom:0>  args=3 vars=10 closure=0 cpool=2 bc=285B file=widgets/src/components/rules/VerticalRule
// args: require, module, exports
// locals: e, t, r, o, VerticalRule, <class_fields_init>, VerticalRule#1
function {
  let VerticalRule#1;
  let o;
  let r;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.VerticalRule = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeNodePrototype("view", ["height", "100%"], "M53eixPuqelsyJXY");
  r = require("valdi_core/src/Component");
  o = require("widgets/src/styles/semanticColors");
  let VerticalRule;
  let <class_fields_init>;
  class VerticalRule extends r.Component { ... }
  <proto:VerticalRule>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:VerticalRule>;
  VerticalRule = function <atom:0>;
  // close_loc <class_fields_init>
  VerticalRule#1 = function <atom:0>;
  exports.VerticalRule = VerticalRule#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/rules/VerticalRule
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
