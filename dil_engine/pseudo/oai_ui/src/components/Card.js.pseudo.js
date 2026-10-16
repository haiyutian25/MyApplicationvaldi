// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=oai_ui/src/components/Card
// closure: e, this
function {
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=3 cpool=1 bc=358B file=oai_ui/src/components/Card
// locals: this
// closure: e, t, o
function {
  this = this;
  e.beginComponent(t.Surface, o, undefined, undefined);
  e.setViewModelProperties(this.viewModel);
  if (!((this.viewModel.elevated == null))) goto L_110;
  this.viewModel.elevated;
  e.setViewModelProperty("elevated", true);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/components/Card
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

// fn <atom:0>  args=3 vars=10 closure=0 cpool=2 bc=268B file=oai_ui/src/components/Card
// args: require, module, exports
// locals: e, o, r, t, Card, <class_fields_init>, Card#1
function {
  let Card#1;
  let t;
  let r;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Card = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeComponentPrototype(undefined, "07dObGEyoDj4cEMO");
  r = require("valdi_core/src/Component");
  t = require("./Surface");
  let Card;
  let <class_fields_init>;
  class Card extends r.Component { ... }
  <proto:Card>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Card>;
  Card = function <atom:0>;
  // close_loc <class_fields_init>
  Card#1 = function <atom:0>;
  exports.Card = Card#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/Card
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
