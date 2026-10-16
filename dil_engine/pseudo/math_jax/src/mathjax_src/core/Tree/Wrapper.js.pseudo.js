// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=70B file=math_jax/src/mathjax_src/core/Tree/Wrapper
// locals: this
function {
  this = this;
  return this.node.kind;
}

// fn <atom:0>  args=2 vars=3 closure=1 cpool=0 bc=38B file=math_jax/src/mathjax_src/core/Tree/Wrapper
// args: r, t
// locals: this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.factory = r;
  this.node = t;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=73B file=math_jax/src/mathjax_src/core/Tree/Wrapper
// args: r
// locals: this
function {
  this = this;
  return this.factory.wrap(r);   // tail call
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=114B file=math_jax/src/mathjax_src/core/Tree/Wrapper
// args: r, t
// locals: e, this
function {
  this = this;
  r(this, t);
  if (!(("childNodes" in this))) goto L_70;
  let e;
  for (const e of this.childNodes) {
    if (!(e)) goto L_69;
    e.walkTree(r, t);
  }
  return t;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=4 bc=131B file=math_jax/src/mathjax_src/core/Tree/Wrapper
// args: require, module, exports
// locals: AbstractWrapper, <class_fields_init>, AbstractWrapper#1
function {
  let AbstractWrapper#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AbstractWrapper = undefined;
  let AbstractWrapper;
  let <class_fields_init>;
  class AbstractWrapper extends undefined { ... }
  <proto:AbstractWrapper>.kind = function <atom:0>;
  <proto:AbstractWrapper>.wrap = function <atom:0>;
  <proto:AbstractWrapper>.walkTree = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AbstractWrapper>;
  AbstractWrapper = function <atom:0>;
  // close_loc <class_fields_init>
  AbstractWrapper#1 = function <atom:0>;
  exports.AbstractWrapper = AbstractWrapper#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/Tree/Wrapper
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
