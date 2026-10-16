// fn <atom:0>  args=0 vars=1 closure=4 cpool=0 bc=461B file=widgets/src/components/subscreen/SubscreenHeaderButtonClose
// locals: this
// closure: e, r, o, s
function {
  this = this;
  e.beginComponent(r.SubscreenHeaderButton, o, undefined, undefined);
  e.setViewModelProperty("image", s.default.iconDismiss);
  e.setViewModelProperty("onTap", this.viewModel.onTap);
  e.setViewModelProperty("accessibilityId", this.viewModel.accessibilityId);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=widgets/src/components/subscreen/SubscreenHeaderButtonClose
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

// fn <atom:0>  args=3 vars=11 closure=0 cpool=2 bc=296B file=widgets/src/components/subscreen/SubscreenHeaderButtonClose
// args: require, module, exports
// locals: e, o, t, s, r, SubscreenHeaderButtonClose, <class_fields_init>, SubscreenHeaderButtonClose#1
function {
  let SubscreenHeaderButtonClose#1;
  let r;
  let s;
  let t;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SubscreenHeaderButtonClose = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeComponentPrototype(["imageHeight", 16, "imageWidth", 16], "vwSC0BBgkX5gvbHv");
  t = require("valdi_core/src/Component");
  s = require("widgets/res");
  r = require("widgets/src/components/subscreen/SubscreenHeaderButton");
  let SubscreenHeaderButtonClose;
  let <class_fields_init>;
  class SubscreenHeaderButtonClose extends t.Component { ... }
  <proto:SubscreenHeaderButtonClose>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:SubscreenHeaderButtonClose>;
  SubscreenHeaderButtonClose = function <atom:0>;
  // close_loc <class_fields_init>
  SubscreenHeaderButtonClose#1 = function <atom:0>;
  exports.SubscreenHeaderButtonClose = SubscreenHeaderButtonClose#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=widgets/src/components/subscreen/SubscreenHeaderButtonClose
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
