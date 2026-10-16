// fn <atom:0>  args=0 vars=3 closure=3 cpool=0 bc=453B file=widgets/src/components/rules/HorizontalRule
// locals: t, i, this
// closure: r, e, o
function {
  this = this;
  let i;
  let t;
  if (!((this.viewModel == null))) goto L_32;
  this.viewModel;
  goto L_53;
  if (!((undefined.color == null))) goto L_be;
  undefined.color;
  t = r.SemanticColor.Layout.DIVIDER;
  if (!((this.viewModel == null))) goto L_e9;
  this.viewModel;
  goto L_10a;
  if (!((undefined.stroke == null))) goto L_110;
  undefined.stroke;
  i = 1;
  e.beginRender(o, undefined);
  e.setAttributeString("backgroundColor", t);
  e.setAttributeNumber("height", i);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/rules/HorizontalRule
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

// fn <atom:0>  args=3 vars=10 closure=0 cpool=2 bc=285B file=widgets/src/components/rules/HorizontalRule
// args: require, module, exports
// locals: e, o, t, r, HorizontalRule, <class_fields_init>, HorizontalRule#1
function {
  let HorizontalRule#1;
  let r;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.HorizontalRule = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeNodePrototype("view", ["width", "100%"], "2pY6BOkq84rcNHV0");
  t = require("valdi_core/src/Component");
  r = require("widgets/src/styles/semanticColors");
  let HorizontalRule;
  let <class_fields_init>;
  class HorizontalRule extends t.Component { ... }
  <proto:HorizontalRule>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:HorizontalRule>;
  HorizontalRule = function <atom:0>;
  // close_loc <class_fields_init>
  HorizontalRule#1 = function <atom:0>;
  exports.HorizontalRule = HorizontalRule#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/rules/HorizontalRule
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
