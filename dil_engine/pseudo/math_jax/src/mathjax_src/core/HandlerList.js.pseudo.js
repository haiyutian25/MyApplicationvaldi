// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=math_jax/src/mathjax_src/core/HandlerList
// args: e
// locals: this
function {
  this = this;
  return this.add(e, e.priority);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=41B file=math_jax/src/mathjax_src/core/HandlerList
// args: e
// locals: this
function {
  this = this;
  this.remove(e);
  return;
}

// fn <atom:0>  args=1 vars=4 closure=0 cpool=0 bc=121B file=math_jax/src/mathjax_src/core/HandlerList
// args: e
// locals: t, r, this
function {
  this = this;
  let t;
  for (const t of this) {
    let r;
    r = t.item;
    if (!(r.handlesDocument(e))) continue;
    return r;
    // [栈深重同步 0 -> 3]
  }
  throw new Error("Can't find handler for document");
}

// fn <atom:0>  args=2 vars=5 closure=0 cpool=0 bc=95B file=math_jax/src/mathjax_src/core/HandlerList
// args: e, t
// locals: e#1, t#1, this
function {
  this = this;
  let t#1;
  let e#1;
  e#1 = e;
  if (!((t === undefined))) goto L_12;
  t;
  t = null;
  t#1 = null;
  return this.handlesDocument(e).create(e, t);   // tail call
}

// fn <atom:0>  args=0 vars=4 closure=1 cpool=0 bc=49B file=math_jax/src/mathjax_src/core/HandlerList
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

// fn <atom:0>  args=3 vars=7 closure=0 cpool=5 bc=185B file=math_jax/src/mathjax_src/core/HandlerList
// args: require, module, exports
// locals: e, HandlerList, <class_fields_init>, HandlerList#1
function {
  let HandlerList#1;
  let e;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.HandlerList = undefined;
  e = require("../util/PrioritizedList");
  let HandlerList;
  let <class_fields_init>;
  class HandlerList extends e.PrioritizedList { ... }
  <proto:HandlerList>.register = function <atom:0>;
  <proto:HandlerList>.unregister = function <atom:0>;
  <proto:HandlerList>.handlesDocument = function <atom:0>;
  <proto:HandlerList>.document = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:HandlerList>;
  HandlerList = function <atom:0>;
  // close_loc <class_fields_init>
  HandlerList#1 = function <atom:0>;
  exports.HandlerList = HandlerList#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/HandlerList
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
