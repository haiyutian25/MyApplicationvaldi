// fn <atom:0>  args=0 vars=0 closure=2 cpool=0 bc=41B file=oai_ui/src/components/Column
// closure: e, this
function {
  e.renderUnnamedSlot(this);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=4 cpool=1 bc=353B file=oai_ui/src/components/Column
// locals: this
// closure: e, n, o, r
function {
  this = this;
  e.beginComponent(n.Box, o, undefined, undefined);
  e.setViewModelProperties(this.viewModel);
  e.setViewModelProperty("direction", r.OAIStackDirection.Column);
  e.setUnnamedSlot(function <atom:0>);
  e.endComponent();
  return;
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=oai_ui/src/components/Column
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

// fn <atom:0>  args=3 vars=11 closure=0 cpool=2 bc=280B file=oai_ui/src/components/Column
// args: require, module, exports
// locals: e, o, r, t, n, Column, <class_fields_init>, Column#1
function {
  let Column#1;
  let n;
  let t;
  let r;
  let o;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.Column = undefined;
  e = require("valdi_core/src/JSX").jsx;
  o = e.makeComponentPrototype(undefined, "mU2sEOwrGd4Xs7UZ");
  r = require("oai_core/src/OAIAttributes");
  t = require("valdi_core/src/Component");
  n = require("./Box");
  let Column;
  let <class_fields_init>;
  class Column extends t.Component { ... }
  <proto:Column>.onRender = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:Column>;
  Column = function <atom:0>;
  // close_loc <class_fields_init>
  Column#1 = function <atom:0>;
  exports.Column = Column#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=oai_ui/src/components/Column
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
