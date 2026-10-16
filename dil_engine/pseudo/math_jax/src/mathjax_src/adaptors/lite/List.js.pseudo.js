// fn <atom:0>  args=1 vars=2 closure=1 cpool=0 bc=46B file=math_jax/src/mathjax_src/adaptors/lite/List
// args: e
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.nodes = [];
  // append([], 0, e)
  e;
  this.nodes = [];
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=math_jax/src/mathjax_src/adaptors/lite/List
// args: e
// locals: this
function {
  this = this;
  this.nodes.push(e);
  return;
}

// fn <atom:0>  args=0 vars=1 closure=1 cpool=0 bc=114B file=math_jax/src/mathjax_src/adaptors/lite/List
// locals: this
// closure: e
function {
  this = this;
  if (!((e === this.nodes.length))) goto L_3a;
  return {value: null, done: true};
  e = <e_new>;
  return {value: this.nodes[(e++)], done: false};
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=1 bc=15B file=math_jax/src/mathjax_src/adaptors/lite/List
// locals: e
function {
  let e;
  e = 0;
  return {next: function <atom:0>};
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=3 bc=157B file=math_jax/src/mathjax_src/adaptors/lite/List
// args: require, module, exports
// locals: LiteList, <class_fields_init>, LiteList#1
function {
  let LiteList#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.LiteList = undefined;
  let LiteList;
  let <class_fields_init>;
  class LiteList extends undefined { ... }
  <proto:LiteList>.append = function <atom:0>;
  <class_fields_init> = undefined;
  define_method_computed(<proto:LiteList>, Symbol.iterator, function <atom:0>);
  LiteList = function <atom:0>;
  // close_loc <class_fields_init>
  LiteList#1 = function <atom:0>;
  exports.LiteList = LiteList#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/adaptors/lite/List
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
