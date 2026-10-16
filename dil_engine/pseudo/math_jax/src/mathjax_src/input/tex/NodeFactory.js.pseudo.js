// fn <atom:0>  args=0 vars=1 closure=2 cpool=0 bc=202B file=math_jax/src/mathjax_src/input/tex/NodeFactory
// locals: this
// closure: <class_fields_init>, NodeFactory
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  this.mmlFactory = null;
  this.factory = {node: NodeFactory.createNode, token: NodeFactory.createToken, text: NodeFactory.createText, error: NodeFactory.createError};
  return;
}

// fn <atom:0>  args=5 vars=11 closure=1 cpool=0 bc=292B file=math_jax/src/mathjax_src/input/tex/NodeFactory
// args: e, r, o, c, a
// locals: e#1, r#1, o#1, c#1, a#1, s
// closure: t
function {
  let a#1;
  let c#1;
  let o#1;
  let r#1;
  let e#1;
  e#1 = e;
  r#1 = r;
  if (!((o === undefined))) goto L_1d;
  o;
  o = [];
  o#1 = [];
  if (!((c === undefined))) goto L_26;
  c;
  c = {};
  c#1 = {};
  a#1 = a;
  let s;
  s = e.mmlFactory.create(r);
  s.setChildren(o);
  if (!(a)) goto L_d2;
  s.appendChild(a);
  t.default.setProperties(s, c);
  return s;
}

// fn <atom:0>  args=4 vars=9 closure=0 cpool=0 bc=132B file=math_jax/src/mathjax_src/input/tex/NodeFactory
// args: t, e, r, o
// locals: t#1, e#1, r#1, o#1, c
function {
  let o#1;
  let r#1;
  let e#1;
  let t#1;
  t#1 = t;
  e#1 = e;
  if (!((r === undefined))) goto L_18;
  r;
  r = {};
  r#1 = {};
  if (!((o === undefined))) goto L_21;
  o;
  o = "";
  o#1 = "";
  let c;
  c = t.create("text", o);
  return t.create("node", e, [], r, c);   // tail call
}

// fn <atom:0>  args=2 vars=2 closure=0 cpool=0 bc=120B file=math_jax/src/mathjax_src/input/tex/NodeFactory
// args: t, e
function {
  if (!((null == e))) goto L_7;
  return null;
  return t.mmlFactory.create("text").setText(e);
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=165B file=math_jax/src/mathjax_src/input/tex/NodeFactory
// args: t, e
// locals: r, o
function {
  let o;
  let r;
  r = t.create("text", e);
  o = t.create("node", "mtext", [], {}, r);
  return t.create("node", "merror", [o], {data-mjx-error: e});   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=14B file=math_jax/src/mathjax_src/input/tex/NodeFactory
// args: t
// locals: this
function {
  this = this;
  this.mmlFactory = t;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=40B file=math_jax/src/mathjax_src/input/tex/NodeFactory
// args: t, e
// locals: this
function {
  this = this;
  this.factory[t] = e;
  return;
}

// fn <atom:0>  args=1 vars=3 closure=0 cpool=0 bc=61B file=math_jax/src/mathjax_src/input/tex/NodeFactory
// args: t
// locals: e, this
function {
  this = this;
  let e;
  for (const e of t) {
    this.set(e, t[e]);
  }
  return;
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=0 bc=262B file=math_jax/src/mathjax_src/input/tex/NodeFactory
// args: t, e
// locals: r, this
function {
  this = this;
  e = ...1;
  let r;
  if ((this.factory[t])) goto L_74;
  // append([this, e[0]], 2, e.slice(1))
  e.slice(1);
  r = this.factory.node.apply(undefined, [this, e[0]]);
  if (!(("node" === t))) goto L_101;
  this.configuration.addNode(e[0], r);
  return r;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=39B file=math_jax/src/mathjax_src/input/tex/NodeFactory
// args: t
// locals: this
function {
  this = this;
  return this.factory[t];
}

// fn <atom:0>  args=3 vars=7 closure=0 cpool=10 bc=201B file=math_jax/src/mathjax_src/input/tex/NodeFactory
// args: require, module, exports
// locals: t, NodeFactory, <class_fields_init>, NodeFactory#1
function {
  let NodeFactory#1;
  let t;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.NodeFactory = undefined;
  t = require("./NodeUtil");
  let NodeFactory;
  let <class_fields_init>;
  class NodeFactory extends undefined { ... }
  function <atom:0>.createNode = function <atom:0>;
  function <atom:0>.createToken = function <atom:0>;
  function <atom:0>.createText = function <atom:0>;
  function <atom:0>.createError = function <atom:0>;
  <proto:NodeFactory>.setMmlFactory = function <atom:0>;
  <proto:NodeFactory>.set = function <atom:0>;
  <proto:NodeFactory>.setCreators = function <atom:0>;
  <proto:NodeFactory>.create = function <atom:0>;
  <proto:NodeFactory>.get = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:NodeFactory>;
  NodeFactory = function <atom:0>;
  // close_loc <class_fields_init>
  // close_loc NodeFactory
  NodeFactory#1 = function <atom:0>;
  exports.NodeFactory = NodeFactory#1;
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/input/tex/NodeFactory
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
