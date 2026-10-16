// fn <atom:0>  args=1 vars=1 closure=0 cpool=2 bc=172B file=math_jax/src/mathjax_src/core/Tree/Visitor
// args: t
function {
  return (("visit" + (t.charAt(0).toUpperCase() + t.substring(1)).replace(new RegExp("[^a-z0-9_]"), "_")) + "Node");
}

// fn <atom:0>  args=1 vars=4 closure=2 cpool=0 bc=221B file=math_jax/src/mathjax_src/core/Tree/Visitor
// args: t
// locals: e, t#1, this
// closure: <class_fields_init>, AbstractVisitor
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.nodeHandlers = new Map();
  let e;
  for (const e of t.getKinds()) {
    let t#1;
    t#1 = this[AbstractVisitor.methodName(e)];
    if (!(t#1)) goto L_d2;
    this.nodeHandlers.set(e, t#1);
  }
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=53B file=math_jax/src/mathjax_src/core/Tree/Visitor
// args: t, e
// locals: this
function {
  this = this;
  e = ...1;
  // append([t], 1, e)
  e;
  return this.visitNode.apply(this, [t]);
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=195B file=math_jax/src/mathjax_src/core/Tree/Visitor
// args: t, e
// locals: this
function {
  this = this;
  e = ...1;
  if ((this.nodeHandlers.get(t.kind))) goto L_94;
  // append([this, t], 2, e)
  e;
  return this.visitDefault.call.apply(this.visitDefault, [this, t]);
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=112B file=math_jax/src/mathjax_src/core/Tree/Visitor
// args: t, e
// locals: s, this
function {
  this = this;
  e = ...1;
  if (!(("childNodes" in t))) goto L_6f;
  let s;
  for (const s of t.childNodes) {
    // append([s], 1, e)
    e;
    this.visitNode.apply(this, [s]);
  }
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=75B file=math_jax/src/mathjax_src/core/Tree/Visitor
// args: t, e
// locals: this
function {
  this = this;
  this.nodeHandlers.set(t, e);
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=74B file=math_jax/src/mathjax_src/core/Tree/Visitor
// args: t
// locals: this
function {
  this = this;
  this.nodeHandlers.delete(t);
  return;
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=7 bc=160B file=math_jax/src/mathjax_src/core/Tree/Visitor
// args: require, module, exports
// locals: AbstractVisitor, <class_fields_init>, AbstractVisitor#1
function {
  let AbstractVisitor#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AbstractVisitor = undefined;
  let AbstractVisitor;
  let <class_fields_init>;
  class AbstractVisitor extends undefined { ... }
  function <atom:0>.methodName = function <atom:0>;
  <proto:AbstractVisitor>.visitTree = function <atom:0>;
  <proto:AbstractVisitor>.visitNode = function <atom:0>;
  <proto:AbstractVisitor>.visitDefault = function <atom:0>;
  <proto:AbstractVisitor>.setNodeHandler = function <atom:0>;
  <proto:AbstractVisitor>.removeNodeHandler = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AbstractVisitor>;
  AbstractVisitor = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc AbstractVisitor
  AbstractVisitor#1 = function <atom:0>;
  exports.AbstractVisitor = AbstractVisitor#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/Tree/Visitor
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
