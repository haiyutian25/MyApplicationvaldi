// fn <atom:0>  args=1 vars=4 closure=1 cpool=0 bc=250B file=math_jax/src/mathjax_src/core/Tree/Factory
// args: t
// locals: t#1, e, this
// closure: <class_fields_init>
function {
  this = this;
  // check_ctor
  if (!(<class_fields_init>)) goto L_e;
  <class_fields_init>.call(this);
  let t#1;
  if (!((t === undefined))) goto L_1a;
  t;
  t = null;
  t#1 = null;
  this.defaultKind = "unknown";
  this.nodeMap = new Map();
  this.node = {};
  if (!((null === t))) goto L_93;
  t = this.constructor.defaultNodes;
  this.constructor.defaultNodes;
  let e;
  for (const e of Object.keys(t)) {
    this.setNodeClass(e, t[e]);
  }
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=128B file=math_jax/src/mathjax_src/core/Tree/Factory
// args: t, e
// locals: this
function {
  this = this;
  e = ...1;
  if ((this.node[t])) goto L_73;
  // append([], 0, e)
  e;
  return this.node[this.defaultKind].apply(undefined, []);
}

// fn <atom:0>  args=1 vars=1 closure=2 cpool=0 bc=21B file=math_jax/src/mathjax_src/core/Tree/Factory
// args: t
// closure: s, this
function {
  t = ...0;
  // append([this], 1, t)
  t;
  return s.apply(s, [this]);
}

// fn <atom:0>  args=2 vars=4 closure=0 cpool=1 bc=190B file=math_jax/src/mathjax_src/core/Tree/Factory
// args: t, e
// locals: s, this
function {
  this = this;
  let s;
  this.nodeMap.set(t, e);
  s = this.nodeMap.get(t);
  this.node[t] = function <atom:0>;
  return;
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=73B file=math_jax/src/mathjax_src/core/Tree/Factory
// args: t
// locals: this
function {
  this = this;
  return this.nodeMap.get(t);   // tail call
}

// fn <atom:0>  args=1 vars=2 closure=0 cpool=0 bc=111B file=math_jax/src/mathjax_src/core/Tree/Factory
// args: t
// locals: this
function {
  this = this;
  this.nodeMap.delete(t);
  this.node;
  delete t;
  return;
}

// fn <atom:0>  args=2 vars=3 closure=0 cpool=0 bc=43B file=math_jax/src/mathjax_src/core/Tree/Factory
// args: t, e
// locals: this
function {
  this = this;
  return (t instanceof this.getNodeClass(e));
}

// fn <atom:0>  args=0 vars=1 closure=0 cpool=0 bc=113B file=math_jax/src/mathjax_src/core/Tree/Factory
// locals: this
function {
  this = this;
  return Array.from(this.nodeMap.keys());   // tail call
}

// fn <atom:0>  args=3 vars=6 closure=0 cpool=7 bc=168B file=math_jax/src/mathjax_src/core/Tree/Factory
// args: require, module, exports
// locals: AbstractFactory, <class_fields_init>, AbstractFactory#1
function {
  let AbstractFactory#1;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AbstractFactory = undefined;
  let AbstractFactory;
  let <class_fields_init>;
  class AbstractFactory extends undefined { ... }
  <proto:AbstractFactory>.create = function <atom:0>;
  <proto:AbstractFactory>.setNodeClass = function <atom:0>;
  <proto:AbstractFactory>.getNodeClass = function <atom:0>;
  <proto:AbstractFactory>.deleteNodeClass = function <atom:0>;
  <proto:AbstractFactory>.nodeIsKind = function <atom:0>;
  <proto:AbstractFactory>.getKinds = function <atom:0>;
  <class_fields_init> = undefined;
  <proto:AbstractFactory>;
  AbstractFactory = function <atom:0>;
  // close_loc <class_fields_init>
  AbstractFactory#1 = function <atom:0>;
  exports.AbstractFactory = AbstractFactory#1;
  AbstractFactory#1.defaultNodes = {};
  return;
}

// fn <eval>  args=0 vars=1 closure=0 cpool=1 bc=4B file=math_jax/src/mathjax_src/core/Tree/Factory
// locals: <ret>
function {
  <ret> = function <atom:0>;
  return function <atom:0>;
}
