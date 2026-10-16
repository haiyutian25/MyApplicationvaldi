// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=130B file=widgets/src/components/subscreen/SubscreenContent
// args: e
// closure: this, s
function {
  if (!((this.viewModel == null))) goto L_2c;
  this.viewModel;
  goto L_4d;
  if (!(undefined.disableInsets)) goto L_74;
  return s.BLANK_INSETS;
  null;
  e;
  return {top: 0};
}

// fn <atom:0>  args=0 vars=4 closure=2 cpool=1 bc=63B file=widgets/src/components/subscreen/SubscreenContent
// locals: this, this.active_func, new.target, arguments
// closure: s, <class_fields_init>
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
  this.insetResolveFn = function <atom:0>;
  return this;
}

// fn <atom:0>  args=0 vars=0 closure=4 cpool=0 bc=497B file=widgets/src/components/subscreen/SubscreenContent
// closure: e, n, this, i
function {
  e.beginRender(n, undefined);
  if (!((this.viewModel.paddingTop == null))) goto L_e2;
  this.viewModel.paddingTop;
  e.setAttributeNumber("paddingTop", i.Subscreen.GUTTER_SIZE);
  if (!((this.viewModel.paddingBottom == null))) goto L_19c;
  this.viewModel.paddingBottom;
  e.setAttributeNumber("paddingBottom", i.Subscreen.GUTTER_SIZE);
  e.renderUnnamedSlot(this);
  e.endRender();
  return;
}

// fn <atom:0>  args=0 vars=1 closure=5 cpool=1 bc=244B file=widgets/src/components/subscreen/SubscreenContent
// locals: this
// closure: e, n, i, r, t
function {
  this = this;
  e.beginComponent(r.WithInsets, t, undefined, undefined);
  e.setViewModelProperty("resolveFn", this.insetResolveFn);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=3 vars=13 closure=0 cpool=2 bc=347B file=widgets/src/components/subscreen/SubscreenContent
// args: require, module, exports
// locals: e, t, n, o, s, r, i, SubscreenContent, <class_fields_init>, SubscreenContent#1
function {
  let SubscreenContent#1;
  let i;
  let r;
  let s;
  let o;
  let n;
  let t;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SubscreenContent = undefined;
  e = require("valdi_core/src/JSX").jsx;
  t = e.makeComponentPrototype(undefined, "aIl8WNWjgETM-CQQ");
  n = e.makeNodePrototype("layout", undefined, "idW75oHQhbPBnAM_");
  o = require("valdi_core/src/Component");
  s = require("../util/Insets");
  r = require("../util/WithInsets");
  i = require("./Subscreen");
  let SubscreenContent;
  let <class_fields_init>;
  class SubscreenContent extends o.Component { ... }
  <proto:SubscreenContent>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SubscreenContent>;
  SubscreenContent = function <atom:0>;
  // close_loc <class_fields_init>
  SubscreenContent#1 = function <atom:0>;
  exports.SubscreenContent = SubscreenContent#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/subscreen/SubscreenContent
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
