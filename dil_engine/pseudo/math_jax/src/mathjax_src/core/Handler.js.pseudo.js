// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/Handler
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

// fn <atom:0>  args=2 vars=5 closure=2 cpool=0 bc=68B file=math_jax/src/mathjax_src/core/Handler
// args: t, e
// locals: t#1, e#1, this
// closure: <class_fields_init>, DefaultMathDocument
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let e#1;
  let t#1;
  t#1 = t;
  if (!((e === undefined))) goto L_1f;
  e;
  e = 5;
  e#1 = 5;
  this.documentClass = DefaultMathDocument;
  this.adaptor = t;
  this.priority = e;
  return;
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=math_jax/src/mathjax_src/core/Handler
// locals: this
function {
  this = this;
  return this.constructor.NAME;
}

// fn <atom:0>  args=1 vars=1 closure=0 cpool=0 bc=3B file=math_jax/src/mathjax_src/core/Handler
// args: t
function {
  return false;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=77B file=math_jax/src/mathjax_src/core/Handler
// args: t, e
// locals: this
function {
  this = this;
  return new this.documentClass(t, this.adaptor, e);
}

// fn <atom:0>  args=3 vars=10 closure=0 cpool=5 bc=223B file=math_jax/src/mathjax_src/core/Handler
// args: require, module, exports
// locals: t, DefaultMathDocument, <class_fields_init>, DefaultMathDocument#1, AbstractHandler, <class_fields_init>#1, AbstractHandler#1
function {
  let AbstractHandler#1;
  let DefaultMathDocument#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AbstractHandler = undefined;
  t = require("./MathDocument");
  let DefaultMathDocument;
  let <class_fields_init>;
  class DefaultMathDocument extends t.AbstractMathDocument { ... }
  <class_fields_init> = undefined;
  <proto:DefaultMathDocument>;
  DefaultMathDocument = function <atom:0>;
  // close_loc <class_fields_init>
  DefaultMathDocument#1 = function <atom:0>;
  let AbstractHandler;
  let <class_fields_init>#1;
  class AbstractHandler extends undefined { ... }
  <proto:AbstractHandler>.name = function <atom:0>;
  <proto:AbstractHandler>.handlesDocument = function <atom:0>;
  <proto:AbstractHandler>.create = function <atom:0>;
  <class_fields_init>#1 = undefined;
  <proto:AbstractHandler>;
  AbstractHandler = function <atom:0>;
  // close_loc <class_fields_init>#1
  AbstractHandler#1 = function <atom:0>;
  exports.AbstractHandler = AbstractHandler#1;
  AbstractHandler#1.NAME = "generic";
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/Handler
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
