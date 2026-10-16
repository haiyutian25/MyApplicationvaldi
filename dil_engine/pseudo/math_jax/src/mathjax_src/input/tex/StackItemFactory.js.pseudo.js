// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/input/tex/StackItemFactory
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

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=79B file=math_jax/src/mathjax_src/input/tex/StackItemFactory
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
  this.defaultKind = "dummy";
  this.configuration = null;
  return this;
}

// fn <atom:0>  args=3 vars=11 closure=0 cpool=2 bc=305B file=math_jax/src/mathjax_src/input/tex/StackItemFactory
// args: require, module, exports
// locals: t, e, DummyItem, <class_fields_init>, DummyItem#1, StackItemFactory, <class_fields_init>#1, StackItemFactory#1
function {
  let StackItemFactory#1;
  let DummyItem#1;
  let e;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  t = require("./StackItem");
  e = require("../../core/Tree/Factory");
  let DummyItem;
  let <class_fields_init>;
  class DummyItem extends t.BaseItem { ... }
  <class_fields_init> = undefined;
  <proto:DummyItem>;
  DummyItem = function <atom:0>;
  // close_loc <class_fields_init>
  DummyItem#1 = function <atom:0>;
  let StackItemFactory;
  let <class_fields_init>#1;
  class StackItemFactory extends e.AbstractFactory { ... }
  <class_fields_init>#1 = undefined;
  <proto:StackItemFactory>;
  StackItemFactory = function <atom:0>;
  // close_loc <class_fields_init>#1
  StackItemFactory#1 = function <atom:0>;
  {}[DummyItem#1.prototype.kind] = DummyItem#1;
  DummyItem#1;
  StackItemFactory#1.DefaultStackItems = {};
  exports.default = StackItemFactory#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/input/tex/StackItemFactory
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
